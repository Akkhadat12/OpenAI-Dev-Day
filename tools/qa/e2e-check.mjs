// Browser checks for the built presentation (Builder evidence, not QA sign-off).
//   npm run build && NODE_PATH=$(npm root -g) node tools/qa/e2e-check.mjs [--hold-seconds=30]
// Serves dist/ and the repo root (for the storyboard SVGs), drives real keyboard input in Chromium and writes
// qa/build/e2e-results.json plus qa/build/states/<scene>-b<k>.png (960x540).
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import { serve } from '../build/serve.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const outDir = join(root, 'qa/build');
mkdirSync(join(outDir, 'states'), { recursive: true });
const holdSeconds = Number((process.argv.find((a) => a.startsWith('--hold-seconds=')) ?? '--hold-seconds=30').split('=')[1]);

const SAFE = { x0: 96, y0: 54, x1: 1824, y1: 1026 };
const BUDGET = { S01: [4, 0], S02: [3, 0], S03: [3, 0], S04: [4, 0], S05: [4, 0], S06: [2, 11], S07: [4, 0], S08: [4, 0], S09: [3, 0], S10: [3, 0], S11: [3, 0], S12: [3, 0] };
const SCENE_IDS = Object.keys(BUDGET);
const BEATS = { S01: 1, S02: 1, S03: 2, S04: 3, S05: 1, S06: 3, S07: 1, S08: 1, S09: 2, S10: 1, S11: 3, S12: 1 };

const app = await serve(join(root, 'dist'), 0);
const repo = await serve(root, 0);
const appUrl = `http://127.0.0.1:${app.address().port}/`;
const repoUrl = `http://127.0.0.1:${repo.address().port}`;

const browser = await chromium.launch();
const results = {
  environment: { browser: `Chromium ${browser.version()}`, playwright: require('playwright/package.json').version, os: `${os.type()} ${os.release()} ${os.arch()}`, cpus: os.cpus().length, node: process.version, rendering: 'headless, software rasterization, localhost server', testedAt: new Date().toISOString() },
  checks: [],
  failures: [],
  console: [],
};
const check = (id, pass, detail) => {
  results.checks.push({ id, pass: !!pass, detail });
  if (!pass) results.failures.push({ id, detail });
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${id}${detail ? `  ${typeof detail === 'string' ? detail : JSON.stringify(detail)}` : ''}`);
};

const initScript = () => {
  // Counts application-owned timers/rAF so a hold can prove it owns none (QA-only instrumentation).
  window.__timers = { timeout: 0, interval: 0, raf: 0 };
  const st = window.setTimeout, si = window.setInterval, raf = window.requestAnimationFrame;
  window.setTimeout = (...a) => { window.__timers.timeout += 1; return st(...a); };
  window.setInterval = (...a) => { window.__timers.interval += 1; return si(...a); };
  window.requestAnimationFrame = (...a) => { window.__timers.raf += 1; return raf(...a); };
  window.__t = {};
  document.addEventListener('DOMContentLoaded', () => {
    const stage = document.getElementById('stage');
    new MutationObserver(() => { if (window.__t.phase === undefined && stage.dataset.phase) window.__t.phase = performance.now(); }).observe(stage, { attributes: true });
    new MutationObserver(() => { if (window.__t.fonts === undefined && document.documentElement.dataset.fonts) window.__t.fonts = performance.now(); }).observe(document.documentElement, { attributes: true });
  });
};

async function newPage(context, { log = true } = {}) {
  const page = await context.newPage();
  await page.addInitScript(initScript);
  if (log) {
    page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) results.console.push(`${m.type()}: ${m.text()}`); });
    page.on('pageerror', (e) => results.console.push(`pageerror: ${e.message}`));
    page.on('requestfailed', (r) => results.console.push(`requestfailed: ${r.url()}`));
    page.on('response', (r) => { if (r.status() >= 400) results.console.push(`http ${r.status()}: ${r.url()}`); });
  }
  return page;
}

const state = (page) => page.evaluate(() => { const s = document.getElementById('stage'); return { scene: s.dataset.scene, beat: Number(s.dataset.beat), phase: s.dataset.phase, anims: document.getAnimations().length }; });
const settled = (page) => page.waitForFunction(() => document.getElementById('stage').dataset.phase === 'hold', null, { polling: 50, timeout: 5000 });
const press = (page, key) => page.keyboard.press(key);

async function audit(page) {
  return page.evaluate(({ SAFE }) => {
    const stage = document.getElementById('stage');
    const box = stage.getBoundingClientRect();
    const fit = box.width / 1920;
    const words = [];
    let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    for (const el of stage.querySelectorAll('.scene:not([hidden]) g.beat *')) {
      if (!(el instanceof SVGGraphicsElement) || el.tagName === 'g') continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      const sw = parseFloat(getComputedStyle(el).strokeWidth) || 0;
      const half = el.getAttribute('stroke') ? sw / 2 : 0;
      minX = Math.min(minX, (r.left - box.left) / fit - half); maxX = Math.max(maxX, (r.right - box.left) / fit + half);
      minY = Math.min(minY, (r.top - box.top) / fit - half); maxY = Math.max(maxY, (r.bottom - box.top) / fit + half);
      if (el.tagName === 'text') words.push({ text: el.textContent, size: parseFloat(el.getAttribute('font-size')), essential: /essential-/.test(el.dataset.role || '') });
    }
    const ordinary = words.filter((w) => !w.essential).flatMap((w) => w.text.trim().split(/\s+/)).length;
    const essential = words.filter((w) => w.essential).flatMap((w) => w.text.trim().split(/\s+/)).length;
    const inSafe = minX >= SAFE.x0 && maxX <= SAFE.x1 && minY >= SAFE.y0 && maxY <= SAFE.y1;
    return { bounds: [minX, minY, maxX, maxY].map((n) => Math.round(n * 10) / 10), inSafe, ordinary, essential, minFont: Math.min(...words.map((w) => w.size), 999) };
  }, { SAFE });
}

// ---------- identity ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await newPage(ctx);
  await page.goto(appUrl);
  const id = await (await page.request.get(`${appUrl}build-id.json`)).json();
  const meta = await page.evaluate(() => document.querySelector('meta[name="build-commit"]').content);
  check('identity.build-id-matches-meta', id.commit === meta && id.commit.length >= 7, { commit: id.commit.slice(0, 12), dirty: id.dirty, contentHash: id.contentHash.slice(0, 16) });
  results.buildId = id;
  await ctx.close();
}

// ---------- storyboard references ----------
const storyboard = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 0.5 });
const cmp = await storyboard.newPage();
await cmp.goto('about:blank');
const shotOfStoryboard = async (scene, beat) => {
  const p = await storyboard.newPage();
  await p.goto(`${repoUrl}/assets/visual/${scene}.svg`);
  await p.evaluate(async () => { await Promise.all([400, 500, 600].map((w) => document.fonts.load(`${w} 48px "Noto Sans"`))); await document.fonts.ready; });
  await p.evaluate((k) => document.querySelectorAll('g.beat').forEach((g) => { g.style.display = Number(g.dataset.beat) <= k ? '' : 'none'; }), beat);
  const buf = await p.screenshot({ type: 'png' });
  await p.close();
  return buf;
};
const pixelDiff = (a, b) => cmp.evaluate(async ([x, y]) => {
  const load = async (b64) => { const bmp = await createImageBitmap(await (await fetch(`data:image/png;base64,${b64}`)).blob()); const c = new OffscreenCanvas(bmp.width, bmp.height); const g = c.getContext('2d'); g.drawImage(bmp, 0, 0); return g.getImageData(0, 0, bmp.width, bmp.height); };
  const A = await load(x), B = await load(y);
  if (A.width !== B.width || A.height !== B.height) return { size: false };
  let n = 0;
  for (let i = 0; i < A.data.length; i += 4) if (Math.abs(A.data[i] - B.data[i]) > 24 || Math.abs(A.data[i + 1] - B.data[i + 1]) > 24 || Math.abs(A.data[i + 2] - B.data[i + 2]) > 24) n += 1;
  return { size: true, differing: n, total: A.width * A.height };
}, [a.toString('base64'), b.toString('base64')]);
const storyCache = new Map();
const storyFor = async (scene, beat) => { const k = `${scene}.${beat}`; if (!storyCache.has(k)) storyCache.set(k, await shotOfStoryboard(scene, beat)); return storyCache.get(k); };

// ---------- forward flow, normal and reduced motion ----------
async function forwardFlow(label, reducedMotion) {
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 0.5, reducedMotion: reducedMotion ? 'reduce' : 'no-preference' });
  const page = await newPage(ctx);
  const t0 = Date.now();
  await page.goto(appUrl);
  await settled(page);
  results[`startup.${label}.ms`] = await page.evaluate(() => ({ fontsReadyAt: Math.round(window.__t.fonts), coverPaintedAt: Math.round(window.__t.phase) }));
  check(`${label}.fonts-bundled`, (await page.evaluate(() => document.documentElement.dataset.fonts)) === 'bundled');
  const rows = [];
  let visited = 0;
  for (const scene of SCENE_IDS) {
    for (let beat = 0; beat <= BEATS[scene]; beat += 1) {
      if (!(scene === 'S01' && beat === 0)) {
        await press(page, 'Space');
        if (reducedMotion) {
          const s = await state(page);
          if (s.phase !== 'hold' || s.anims !== 0) check(`${label}.instant.${scene}-b${beat}`, false, s);
        }
        await settled(page);
      }
      const s = await state(page);
      const okState = s.scene === scene && s.beat === beat && s.anims === 0;
      const a = await audit(page);
      const shot = await page.screenshot({ type: 'png' });
      if (!reducedMotion) writeFileSync(join(outDir, 'states', `${scene}-b${beat}.png`), shot);
      const d = await pixelDiff(shot, await storyFor(scene, beat));
      const pass = okState && a.inSafe && d.size && d.differing === 0;
      rows.push({ scene, beat, ...a, pixelsDiffering: d.differing, pass });
      if (!pass) check(`${label}.state.${scene}-b${beat}`, false, { s, a, d });
      visited += 1;
    }
  }
  check(`${label}.all-32-states-match-storyboards`, visited === 32 && rows.every((r) => r.pass), { visited, failing: rows.filter((r) => !r.pass).map((r) => `${r.scene}.b${r.beat}`) });
  const copyRows = SCENE_IDS.map((scene) => { const final = rows.find((r) => r.scene === scene && r.beat === BEATS[scene]); return { scene, ordinary: final.ordinary, essential: final.essential, total: final.ordinary + final.essential, budget: BUDGET[scene], minFont: final.minFont }; });
  check(`${label}.copy-counts-match-plan`, copyRows.every((r) => r.ordinary === r.budget[0] && r.essential === r.budget[1] && r.minFont >= 48), copyRows.filter((r) => r.ordinary !== r.budget[0] || r.essential !== r.budget[1] || r.minFont < 48));
  if (!reducedMotion) results.copyAudit = copyRows;
  results[`states.${label}`] = rows;
  // S12 terminal: Space stays
  await press(page, 'Space'); await press(page, 'Space');
  const end = await state(page);
  check(`${label}.S12-terminal-hold`, end.scene === 'S12' && end.beat === 1 && end.phase === 'hold');
  await ctx.close();
}
await forwardFlow('normal', false);
await forwardFlow('reduced-motion', true);

// ---------- keys, recovery, structure ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await newPage(ctx);
  await page.goto(appUrl);
  await settled(page);

  // Rapid presses: reveal -> settle -> exit -> settle(S02 b0) -> reveal
  for (let i = 0; i < 5; i += 1) await press(page, 'Space');
  let s = await state(page);
  check('keys.rapid-space-deterministic', s.scene === 'S02' && s.beat === 1 && s.phase === 'reveal', s);
  await settled(page);

  // R during motion restores cover, leaves no animation, then Space reveals S01 b1 only.
  await press(page, 'Space');
  await press(page, 'r');
  s = await state(page);
  check('keys.R-during-motion-returns-cover', s.scene === 'S01' && s.beat === 0 && s.phase === 'hold' && s.anims === 0, s);
  const cover = await page.evaluate(() => [...document.querySelectorAll('.scene:not([hidden]) g.beat')].filter((g) => getComputedStyle(g).display !== 'none').map((g) => g.dataset.beat));
  check('keys.R-shows-only-S01-b0', cover.join() === '0', cover);
  await page.waitForTimeout(800);
  s = await state(page);
  check('keys.no-ghost-after-R', s.scene === 'S01' && s.beat === 0 && s.phase === 'hold', s);
  await press(page, 'Space');
  await settled(page);
  s = await state(page);
  check('keys.space-after-R-reveals-S01-b1', s.scene === 'S01' && s.beat === 1, s);

  // Auto-repeat: one physical press is one action.
  await press(page, 'r');
  await page.keyboard.down('Space');
  for (let i = 0; i < 4; i += 1) await page.keyboard.down('Space');
  await page.keyboard.up('Space');
  s = await state(page);
  check('keys.auto-repeat-ignored', s.scene === 'S01' && s.phase === 'reveal', s);
  await settled(page);

  // Modifiers and editable targets are ignored.
  await press(page, 'r');
  await press(page, 'Control+Space'); await press(page, 'Shift+Space'); await press(page, 'Alt+r');
  s = await state(page);
  check('keys.modifiers-ignored', s.scene === 'S01' && s.beat === 0 && s.phase === 'hold', s);
  await page.evaluate(() => { const i = document.createElement('input'); i.id = 'qa-input'; document.body.appendChild(i); i.focus(); });
  await press(page, 'Space');
  s = await state(page);
  check('keys.editable-target-ignored', s.scene === 'S01' && s.beat === 0 && s.phase === 'hold', s);
  await page.evaluate(() => document.getElementById('qa-input').remove());

  // Space does not scroll the page; clicking canvas objects does nothing.
  await page.mouse.click(960, 540);
  await page.mouse.click(1400, 700);
  s = await state(page);
  check('keys.click-does-nothing', s.scene === 'S01' && s.beat === 0 && s.phase === 'hold', s);
  check('keys.no-scroll', await page.evaluate(() => window.scrollX === 0 && window.scrollY === 0 && document.documentElement.scrollWidth <= innerWidth && document.documentElement.scrollHeight <= innerHeight));

  // Optional Left Arrow: S03 b0 -> S02 b1; S01 stays b0.
  await press(page, 'r');
  for (let i = 0; i < 3; i += 1) { await press(page, 'Space'); await settled(page); await press(page, 'Space'); await settled(page); if (i === 1) break; }
  s = await state(page);
  await press(page, 'ArrowLeft');
  const left = await state(page);
  check('keys.left-arrow-previous-final-state', left.phase === 'hold' && left.anims === 0 && `${left.scene}.${left.beat}` !== `${s.scene}.${s.beat}`, { from: s, to: left });
  await press(page, 'r'); await press(page, 'ArrowLeft');
  s = await state(page);
  check('keys.left-arrow-at-S01-stays-b0', s.scene === 'S01' && s.beat === 0, s);

  // Optional F: state never changes, rejection is silent, no overlay appears.
  const before = await state(page);
  const domBefore = await page.evaluate(() => document.body.innerHTML.length);
  await press(page, 'f'); await page.waitForTimeout(300); await press(page, 'f'); await page.waitForTimeout(300);
  const after = await state(page);
  check('keys.F-keeps-scene-and-adds-no-ui', after.scene === before.scene && after.beat === before.beat && (await page.evaluate(() => document.body.innerHTML.length)) === domBefore, { fullscreenElement: await page.evaluate(() => !!document.fullscreenElement) });

  // Clean canvas.
  const chrome = await page.evaluate(() => ({
    controls: document.querySelectorAll('button,a,input,select,textarea,nav,header,footer,progress,[role="button"],[tabindex],[contenteditable]').length,
    focus: document.activeElement === document.body,
    visibleText: [...document.querySelectorAll('body *')].filter((e) => e.children.length === 0 && e.textContent.trim() && !['SCRIPT', 'STYLE', 'DESC', 'TITLE'].includes(e.tagName) && !e.closest('.sr-only') && e.getBoundingClientRect().width > 0).map((e) => e.textContent.trim()),
  }));
  check('canvas.no-controls-or-focusable-elements', chrome.controls === 0 && chrome.focus, chrome);
  check('canvas.only-planned-copy-visible-on-cover', chrome.visibleText.join('|') === 'From answers|to responsibility', chrome.visibleText);

  // Stable hold: zero app timers/rAF/animations across a real hold at S06 b3 and S12 final.
  for (const target of [['S06', 3], ['S12', 1]]) {
    await press(page, 'r');
    let guard = 0;
    while (true) {
      const cur = await state(page);
      if (cur.scene === target[0] && cur.beat === target[1] && cur.phase === 'hold') break;
      await press(page, 'Space'); await settled(page);
      if (++guard > 40) break;
    }
    const a = await page.screenshot({ type: 'png' });
    const timers0 = await page.evaluate(() => ({ ...window.__timers }));
    await page.waitForTimeout(holdSeconds * 1000);
    const timers1 = await page.evaluate(() => ({ ...window.__timers }));
    const b = await page.screenshot({ type: 'png' });
    const st = await state(page);
    check(`hold.${target[0]}-b${target[1]}.${holdSeconds}s-stable`, a.equals(b) && st.phase === 'hold' && st.anims === 0 && JSON.stringify(timers0) === JSON.stringify(timers1), { timers0, timers1, anims: st.anims, identicalFrames: a.equals(b) });
  }

  // Frame intervals during a full reveal (measurement under the recorded, software-rendered headless conditions).
  await press(page, 'r');
  await page.evaluate(() => { window.__frames = []; let last = performance.now(); const tick = (n) => { window.__frames.push(n - last); last = n; if (window.__sampling) window.__raf(tick); }; window.__raf = window.requestAnimationFrame.bind(window); window.__sampling = true; window.__raf(tick); });
  await press(page, 'Space'); await settled(page);
  await page.evaluate(() => { window.__sampling = false; });
  const frames = await page.evaluate(() => window.__frames.slice(1));
  const sorted = [...frames].sort((x, y) => x - y);
  results.performance = { frames: frames.length, medianMs: +sorted[Math.floor(sorted.length / 2)]?.toFixed(2), p95Ms: +sorted[Math.floor(sorted.length * 0.95)]?.toFixed(2), maxMs: +sorted.at(-1)?.toFixed(2), scope: 'S01 b1 reveal, 1920x1080 headless Chromium, software raster' };
  check('perf.p95-frame-interval-<=33.3ms', results.performance.p95Ms <= 33.3, results.performance);

  // Input-to-response: a handled Space begins motion in the same task.
  await press(page, 'r');
  const lat = await page.evaluate(async () => { const t = performance.now(); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', key: ' ', bubbles: true })); return { phase: document.getElementById('stage').dataset.phase, ms: performance.now() - t, anims: document.getAnimations().length }; });
  results.performance.keyToMotionMs = +lat.ms.toFixed(2);
  check('perf.key-response-<100ms', lat.phase === 'reveal' && lat.anims > 0 && lat.ms < 100, lat);
  await ctx.close();
}

// ---------- viewports ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await newPage(ctx);
  await page.goto(appUrl);
  await settled(page);
  for (let i = 0; i < 4; i += 1) { await press(page, 'Space'); await settled(page); }
  const before = await state(page);
  const rows = [];
  for (const [w, h] of [[1920, 1080], [1280, 720], [1440, 900], [800, 1000], [1000, 400]]) {
    await page.setViewportSize({ width: w, height: h });
    await page.waitForTimeout(100);
    const m = await page.evaluate(() => { const r = document.getElementById('stage').getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, vw: innerWidth, vh: innerHeight, sx: document.documentElement.scrollWidth, sy: document.documentElement.scrollHeight }; });
    const ok = Math.abs(m.w / m.h - 16 / 9) < 0.01 && m.x >= -0.5 && m.y >= -0.5 && m.x + m.w <= m.vw + 0.5 && m.y + m.h <= m.vh + 0.5 && Math.abs(m.x + m.w / 2 - m.vw / 2) < 1 && Math.abs(m.y + m.h / 2 - m.vh / 2) < 1 && m.sx <= m.vw && m.sy <= m.vh;
    const s = await state(page);
    rows.push({ viewport: `${w}x${h}`, stage: `${Math.round(m.w)}x${Math.round(m.h)}`, ok, sameState: s.scene === before.scene && s.beat === before.beat });
    if (w === 1280 || w === 800) writeFileSync(join(outDir, `viewport-${w}x${h}.png`), await page.screenshot({ type: 'png' }));
  }
  check('viewport.16x9-letterboxed-no-scroll-state-kept', rows.every((r) => r.ok && r.sameState), rows);
  results.viewports = rows;
  await ctx.close();
}

// ---------- load failure exercise: bundled font missing ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await newPage(ctx, { log: false });
  await page.route('**/fonts/NotoSans-SemiBold.woff2', (r) => r.abort());
  await page.goto(appUrl);
  await settled(page);
  const s = await state(page);
  check('fallback.missing-font-still-shows-cover-and-labels-stay', s.scene === 'S01' && s.phase === 'hold' && (await page.evaluate(() => document.documentElement.dataset.fonts)) === 'fallback', await page.evaluate(() => document.documentElement.dataset.fonts));
  await ctx.close();
}

// ---------- warm/cold startup ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const cold = await newPage(ctx, { log: false });
  await cold.goto(appUrl); await settled(cold);
  const c = await cold.evaluate(() => ({ fontsReadyAt: Math.round(window.__t.fonts), coverPaintedAt: Math.round(window.__t.phase) }));
  await cold.close();
  const warm = await newPage(ctx, { log: false });
  await warm.goto(appUrl); await settled(warm);
  const w = await warm.evaluate(() => ({ fontsReadyAt: Math.round(window.__t.fonts), coverPaintedAt: Math.round(window.__t.phase) }));
  results.startup = { firstLoad: c, secondLoad: w, note: 'ms from navigation start; localhost, Cache-Control no-store so both loads refetch' };
  check('perf.cover-font-ready-<2000ms', c.coverPaintedAt < 2000 && w.coverPaintedAt < 2000, results.startup);
  await ctx.close();
}

check('runtime.no-console-errors-or-failed-requests', results.console.length === 0, results.console);

await browser.close();
app.close();
repo.close();
writeFileSync(join(outDir, 'e2e-results.json'), JSON.stringify(results, null, 2) + '\n');
console.log(`\n${results.checks.length - results.failures.length}/${results.checks.length} checks passed -> qa/build/e2e-results.json`);
process.exit(results.failures.length ? 1 : 0);
