// Zero-dependency static build.
//   node tools/build/build.mjs  ->  dist/
// Inlines assets/visual/Sxx.svg (the geometry of record) into one HTML document,
// validates scene/beat/copy invariants against references/scenes.json and
// 03_VISUAL_PLAN.md, and writes a machine-readable build identity.

import { createHash } from 'node:crypto';
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const dist = join(root, 'dist');
const read = (p) => readFileSync(join(root, p), 'utf8');

const { SCENES } = await import(pathToFileURL(join(root, 'src/scene-data.js')).href);
const contentScenes = JSON.parse(read('references/scenes.json'));

const problems = [];
const fail = (msg) => problems.push(msg);

if (SCENES.length !== contentScenes.length) fail(`scene count ${SCENES.length} != content ${contentScenes.length}`);

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const words = (s) => decode(s).trim().split(/\s+/).filter(Boolean);

const audit = [];
const sections = SCENES.map((scene, i) => {
  const content = contentScenes[i];
  if (!content || content.id !== scene.id) fail(`${scene.id}: id mismatch with references/scenes.json`);
  let svg = read(`assets/visual/${scene.id}.svg`);

  if (!svg.includes(`data-scene="${scene.id}"`)) fail(`${scene.id}: svg data-scene mismatch`);

  const beats = [...svg.matchAll(/<g id="[^"]+" class="beat" data-beat="(\d+)"/g)].map((m) => Number(m[1]));
  const expected = Array.from({ length: scene.beats + 1 }, (_, k) => k);
  if (beats.join() !== expected.join()) fail(`${scene.id}: beats [${beats}] != [${expected}]`);
  if (scene.reveals.length !== scene.beats) fail(`${scene.id}: ${scene.reveals.length} reveal plans for ${scene.beats} beats`);

  // Copy audit: ordinary words must equal the Content inventory; essential data labels are counted apart.
  let ordinary = 0;
  let essential = 0;
  for (const m of svg.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g)) {
    const n = words(m[2]).length;
    if (/data-role="essential-/.test(m[1])) essential += n;
    else ordinary += n;
  }
  const expectedOrdinary = words(content.copy).length;
  const expectedEssential = content.essential_labels === 'NONE' ? 0 : content.essential_labels.split('/').reduce((n, part) => n + words(part).length, 0);
  // S06's Content copy ("Token price") is ordinary; its essential labels are listed separately.
  if (ordinary !== expectedOrdinary) fail(`${scene.id}: ordinary copy ${ordinary} != content ${expectedOrdinary}`);
  if (essential !== expectedEssential) fail(`${scene.id}: essential labels ${essential} != content ${expectedEssential}`);
  if (ordinary > 8) fail(`${scene.id}: ordinary copy ${ordinary} exceeds 8`);
  audit.push({ scene: scene.id, ordinary, essential, total: ordinary + essential, beats: scene.beats + 1 });

  // Runtime markup: fonts/CSS are global, so drop per-file styles; keep the Thai <desc> for assistive tech.
  svg = svg
    .replace(/<style>[\s\S]*?<\/style>/, '')
    .replace('<svg ', '<svg focusable="false" lang="en" ')
    .replace(/<desc id=/, '<desc lang="th" id=')
    .replace(/<rect data-role="background"[^>]*\/>/, '')
    .trim();
  return `<section class="scene" data-scene="${scene.id}" hidden>${svg}</section>`;
});

if (problems.length) {
  console.error('Build validation failed:\n - ' + problems.join('\n - '));
  process.exit(1);
}

// Build identity. Vercel supplies the commit; locally fall back to git.
const git = (cmd) => {
  try {
    return execSync(`git ${cmd}`, { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return '';
  }
};
const commit = process.env.VERCEL_GIT_COMMIT_SHA || git('rev-parse HEAD') || 'unknown';
const dirty = !process.env.VERCEL_GIT_COMMIT_SHA && git('status --porcelain -- src assets tools package.json vercel.json') !== '';

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const html = read('src/index.template.html')
  .replace('{{BUILD_COMMIT}}', commit)
  .replace('{{SCENES}}', sections.join('\n'));
writeFileSync(join(dist, 'index.html'), html);
for (const f of ['styles.css', 'main.js', 'engine.js', 'driver.js', 'scene-data.js']) cpSync(join(root, 'src', f), join(dist, f));
mkdirSync(join(dist, 'fonts'));
for (const f of readdirSync(join(root, 'assets/fonts'))) cpSync(join(root, 'assets/fonts', f), join(dist, 'fonts', f));

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else files.push(p);
  }
})(dist);
const hash = createHash('sha256');
for (const f of files.sort()) hash.update(relative(dist, f)).update(readFileSync(f));

writeFileSync(
  join(dist, 'build-id.json'),
  JSON.stringify(
    {
      project: 'devday-20260930-a7c4',
      commit,
      dirty,
      ref: process.env.VERCEL_GIT_COMMIT_REF || git('rev-parse --abbrev-ref HEAD') || null,
      vercelEnv: process.env.VERCEL_ENV || null,
      scenes: SCENES.length,
      contentHash: hash.digest('hex'),
    },
    null,
    2
  ) + '\n'
);

console.log(`Built ${SCENES.length} scenes (${audit.reduce((n, a) => n + a.beats, 0)} settled states) -> dist/ @ ${commit.slice(0, 12)}${dirty ? ' (dirty)' : ''}`);
for (const a of audit) console.log(`  ${a.scene}  ordinary ${a.ordinary}  essential ${a.essential}  total ${a.total}`);
if (!existsSync(join(dist, 'index.html'))) process.exit(1);
