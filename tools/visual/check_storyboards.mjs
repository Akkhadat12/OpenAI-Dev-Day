// Render every beat endpoint of assets/visual/S01..S12.svg in Chromium and check the
// Visual 1.0 plan's measurable storyboard rules: safe area, label/label overlap,
// label size floor, ordinary/essential copy counts and bundled font use.
// Usage: NODE_PATH=$(npm root -g) node tools/visual/check_storyboards.mjs
// Writes qa/visual/storyboard-checks.json and qa/visual/renders/<scene>-b<k>.png (960x540).
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const SAFE = { x0: 96, y0: 54, x1: 1824, y1: 1026 };
const BUDGET = {
  S01: [4, 0], S02: [3, 0], S03: [3, 0], S04: [4, 0], S05: [4, 0], S06: [2, 11],
  S07: [4, 0], S08: [4, 0], S09: [3, 0], S10: [3, 0], S11: [3, 0], S12: [3, 0],
};
const TYPES = { ".svg": "image/svg+xml", ".woff2": "font/woff2", ".html": "text/html" };

const server = createServer(async (req, res) => {
  try {
    const path = join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
    const body = await readFile(path);
    res.writeHead(200, { "content-type": TYPES[extname(path)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end();
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 0.5 });
await mkdir(join(ROOT, "qa/visual/renders"), { recursive: true });

const results = [];
for (const scene of Object.keys(BUDGET)) {
  await page.goto(`${base}/assets/visual/${scene}.svg`);
  const fontInfo = await page.evaluate(async () => {
    await Promise.all([400, 500, 600].map((w) => document.fonts.load(`${w} 48px "Noto Sans"`)));
    await document.fonts.ready;
    const faces = [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.status}`);
    const used = [...new Set([...document.querySelectorAll("text")].map((t) => t.getAttribute("font-weight")))];
    return { faces, usedWeights: used,
      ok: faces.every((f) => f.endsWith("loaded")) && used.every((w) => document.fonts.check(`${w} 48px "Noto Sans"`)) };
  });
  const beats = await page.evaluate(() => document.querySelectorAll("g.beat").length);
  const sceneResult = { scene, beats: beats - 1, fonts: fontInfo, states: [] };

  for (let k = 0; k < beats; k++) {
    const state = await page.evaluate(({ k, SAFE }) => {
      document.querySelectorAll("g.beat").forEach((g) => {
        g.style.display = Number(g.dataset.beat) <= k ? "" : "none";
      });
      const visible = [...document.querySelectorAll("g.beat")].filter((g) => Number(g.dataset.beat) <= k);
      const shapes = visible.flatMap((g) => [...g.querySelectorAll("path,rect,circle,ellipse,line,text")]);
      const boxes = shapes.map((el) => {
        const r = el.getBoundingClientRect();
        const sw = el.tagName === "text" ? 0 : Number(el.getAttribute("stroke-width") || 0) / 2;
        return { tag: el.tagName, text: el.tagName === "text" ? el.textContent : null,
          size: el.tagName === "text" ? Number(el.getAttribute("font-size")) : null,
          role: el.dataset.role || null, block: el.dataset.block || null,
          x0: r.left - sw, y0: r.top - sw, x1: r.right + sw, y1: r.bottom + sw };
      });
      const outside = boxes.filter((b) => b.x0 < SAFE.x0 || b.y0 < SAFE.y0 || b.x1 > SAFE.x1 || b.y1 > SAFE.y1)
        .map((b) => `${b.tag}${b.text ? ` "${b.text}"` : ""} [${b.x0.toFixed(0)},${b.y0.toFixed(0)},${b.x1.toFixed(0)},${b.y1.toFixed(0)}]`);
      const texts = boxes.filter((b) => b.tag === "text");
      const overlaps = [];
      for (let i = 0; i < texts.length; i++)
        for (let j = i + 1; j < texts.length; j++) {
          const a = texts[i], b = texts[j];
          if (a.block && a.block === b.block) continue; // lines of one wrapped block: checked by baseline spacing
          if (a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1) overlaps.push(`${a.text} / ${b.text}`);
        }
      // Label-to-geometry clearance: nearest non-text box edge that the label does not sit inside.
      const clearance = texts.map((t) => {
        let min = Infinity;
        for (const s of boxes) {
          if (s.tag === "text") continue;
          const inside = s.x0 <= t.x0 && s.y0 <= t.y0 && s.x1 >= t.x1 && s.y1 >= t.y1;
          if (inside) continue;
          const dx = Math.max(s.x0 - t.x1, t.x0 - s.x1, 0);
          const dy = Math.max(s.y0 - t.y1, t.y0 - s.y1, 0);
          min = Math.min(min, Math.hypot(dx, dy));
        }
        return { text: t.text, minGapPx: Number(min.toFixed(1)) };
      });
      const bounds = boxes.filter((b) => b.role !== "background").reduce((m, b) => ({
        x0: Math.min(m.x0, b.x0), y0: Math.min(m.y0, b.y0), x1: Math.max(m.x1, b.x1), y1: Math.max(m.y1, b.y1) }),
        { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity });
      return { k, outside, overlaps, clearance, minTextSize: Math.min(...texts.map((t) => t.size), Infinity),
        contentBounds: Object.fromEntries(Object.entries(bounds).map(([a, v]) => [a, Math.round(v)])) };
    }, { k, SAFE });
    await page.screenshot({ path: join(ROOT, `qa/visual/renders/${scene}-b${k}.png`) });
    sceneResult.states.push(state);
  }

  const copy = await page.evaluate(() => [...document.querySelectorAll("text")].map((t) => ({
    text: t.textContent, role: t.dataset.role })));
  const count = (list) => list.reduce((n, t) => n + t.text.trim().split(/\s+/).length, 0);
  const ordinaryItems = copy.filter((t) => !t.role.startsWith("essential"));
  const essentialItems = copy.filter((t) => t.role.startsWith("essential"));
  const ordinary = count(ordinaryItems), essential = count(essentialItems);
  sceneResult.copy = { ordinary: ordinaryItems.map((t) => t.text), essential: essentialItems.map((t) => t.text),
    ordinaryCount: ordinary, essentialCount: essential, total: ordinary + essential,
    matchesBudget: ordinary === BUDGET[scene][0] && essential === BUDGET[scene][1] };
  sceneResult.pass = fontInfo.ok && sceneResult.copy.matchesBudget &&
    sceneResult.states.every((s) => s.outside.length === 0 && s.overlaps.length === 0 && s.minTextSize >= 48);
  results.push(sceneResult);
}

await browser.close();
server.close();

const report = {
  generatedAt: new Date().toISOString(),
  browser: `chromium (playwright ${require("playwright/package.json").version})`,
  logicalCanvas: "1920x1080", safeArea: SAFE,
  scope: "Authored storyboard SVG endpoints only; not the runtime presentation, motion, keyboard or production QA",
  allPass: results.every((r) => r.pass),
  scenes: results,
};
await writeFile(join(ROOT, "qa/visual/storyboard-checks.json"), JSON.stringify(report, null, 2) + "\n");
for (const r of results) {
  const gaps = r.states.at(-1).clearance.map((c) => `${c.text}:${c.minGapPx}`).join(" ");
  console.log(r.scene, r.pass ? "PASS" : "FAIL", `copy ${r.copy.ordinaryCount}/${r.copy.essentialCount}/${r.copy.total}`,
    "outside", r.states.map((s) => s.outside.length).join(","), "overlaps", r.states.map((s) => s.overlaps.length).join(","),
    "bounds", JSON.stringify(r.states.at(-1).contentBounds), "gaps", gaps);
  for (const s of r.states) for (const o of [...s.outside, ...s.overlaps]) console.log("   b" + s.k, o);
}
console.log("ALL", report.allPass ? "PASS" : "FAIL");
