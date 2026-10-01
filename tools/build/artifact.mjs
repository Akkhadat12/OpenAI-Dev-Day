// Builds a single self-contained HTML page for preview hosting (e.g. a Claude Artifact):
//   node tools/build/build.mjs && node tools/build/artifact.mjs  ->  dist-artifact/index.html
// Same scenes, engine and driver as dist/; CSS, JS and the two fonts the canvas uses are inlined.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const src = (p) => readFileSync(join(root, p), 'utf8');
const font = (f) => `data:font/woff2;base64,${readFileSync(join(root, 'assets/fonts', f)).toString('base64')}`;

const built = src('dist/index.html');
const scenes = built.slice(built.indexOf('<section'), built.lastIndexOf('</section>') + '</section>'.length);
const commit = JSON.parse(src('dist/build-id.json')).commit;

// Only weights 500/600 of Noto Sans are used on the canvas; Thai has no canvas text.
let css = src('src/styles.css')
  .replace(/@font-face\{font-family:"Noto Sans";font-weight:400[^}]*\}\n/, '')
  .replace(/@font-face\{font-family:"Noto Sans Thai"[^}]*\}\n/g, '')
  .replace('fonts/NotoSans-Medium.woff2', font('NotoSans-Medium.woff2'))
  .replace('fonts/NotoSans-SemiBold.woff2', font('NotoSans-SemiBold.woff2'));
css += '\n:root{color-scheme:dark}\n';

// Concatenate the ES modules into one script (drop import/export syntax).
const strip = (code) => code.replace(/^import .*;\n/gm, '').replace(/^export /gm, '');
const js = ['scene-data.js', 'engine.js', 'driver.js', 'main.js'].map((f) => strip(src(`src/${f}`))).join('\n');

const page = `<title>OpenAI DevDay Agents</title>
<meta name="build-commit" content="${commit}">
<style>
${css}
</style>
<main id="stage" aria-label="OpenAI DevDay 2026 and the future of agents">
${scenes}
</main>
<div id="scene-live" class="sr-only" aria-live="polite" role="status"></div>
<script>
(function () {
'use strict';
${js}
window.addEventListener('pointerdown', () => window.focus());
})();
</script>
`;
// The skeleton supplies <body>; #viewport is the stage's parent in dist/, so wrap here.
const wrapped = page.replace('<main id="stage"', '<div id="viewport">\n<main id="stage"').replace('</main>', '</main>\n</div>');
mkdirSync(join(root, 'dist-artifact'), { recursive: true });
writeFileSync(join(root, 'dist-artifact/index.html'), wrapped);
console.log(`dist-artifact/index.html ${(wrapped.length / 1024).toFixed(0)} KB @ ${commit.slice(0, 12)}`);
