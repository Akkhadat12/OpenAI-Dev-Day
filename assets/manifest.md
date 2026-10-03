# Asset manifest

PROJECT_ID: 20261003-b4fb
VISUAL_PLAN: 03_VISUAL_PLAN.md
COVER_SCENE_ID: S01
WEB_LANGUAGE: English

Diagrams for S02–S10 are code-drawn from the tokens in `02_DESIGN_SYSTEM.md` and `03_VISUAL_PLAN.md`. They are not image files. Do not generate documentary images for them.

## Runtime assets

| Asset ID | Repo-relative runtime path | Origin/source URL | Rights/license | Type/resolution/size | Crop/focal point | Attribution | Generated? | Fallback | State |
|---|---|---|---|---|---|---|---|---|---|
| A-COVER-WORDMARK | assets/cover/openai-wordmark-2025.svg | https://commons.wikimedia.org/wiki/File:OpenAI_logo_2025_(wordmark).svg ; download path https://commons.wikimedia.org/wiki/Special:FilePath/OpenAI_logo_2025_(wordmark).svg ; upstream cited on Commons https://openai.com/brand/ | Trademark of OpenAI. Commons records a PD-textlogo tag and also notes the mark is trademarked. Trademark still applies. Permitted here as factual cover identification for an educational local presentation, not as sponsorship, partnership, or an official OpenAI product. | SVG vector. viewBox `0 0 269.6592 72.5157`. 1799 bytes. Path geometry only; no `<text>` nodes. | No crop. Use the file whole. On the 1920×1080 stage, display width 691 px (36% of canvas width), height 186 px, centered. CSS fill `#F5F5F7` on inlined paths. Do not edit path data. | No credit line on the audience canvas. Record remains `assets/cover/PROVENANCE.md` and `references/cover-asset.md`. | NO | A-COVER-BLOSSOM, shown alone | READY |
| A-COVER-BLOSSOM | assets/cover/openai-blossom-2025.svg | https://commons.wikimedia.org/wiki/File:OpenAI_logo_2025_(symbol).svg ; upstream https://openai.com/brand/ | Same trademark limits. Symbol only. Do not stack it with the wordmark. | SVG vector. viewBox `1.68 1.75 16.65 16.5`. 1894 bytes. Path geometry only; no `<text>` nodes. | No crop. Display about 200 px square, bottom aligned with the wordmark's bottom so the title gap stays 40 px. CSS fill `#F5F5F7`. | No credit line on the audience canvas. | NO | If this file also fails, paint no substitute logo. The package fails the cover check. | READY |
| A-FONT-INTER | assets/fonts/inter-latin-400-normal.woff2 and assets/fonts/inter-latin-500-normal.woff2 | fontsource package inter@5.2.8 Latin subset, downloaded 2026-10-03. Upstream project https://github.com/rsms/inter | OFL-1.1. License text is assets/fonts/OFL.txt. Source note is assets/fonts/SOURCE.txt. Not drawn on the canvas. | Latin woff2. Weight 400 is 23664 bytes. Weight 500 is 24272 bytes. Both files start with the wOF2 signature. | n/a | OFL notice in the package only. | NO | `system-ui, Segoe UI, Helvetica Neue, Arial, sans-serif` | READY |

## Cover authenticity

- Primary cover for S01 initial state and every R reset: `assets/cover/openai-wordmark-2025.svg`.
- Verified by reading the file and `assets/cover/PROVENANCE.md`: Wikimedia Commons wordmark, upstream citation `https://openai.com/brand/`, downloaded 2026-10-03, not generated.
- Both SVGs were inspected again in the visual stage. Neither contains a text node or Thai prose.
- Mono treatment is CSS fill on the existing paths. Do not trace, redraw, or AI-generate a replacement.
- Never show the wordmark and the blossom together.
- Overlay copy is the English line `OpenAI DevDay 2025` only.
- Alt text: “Official OpenAI wordmark for OpenAI DevDay 2025 cover.” Blossom alt: “Official OpenAI blossom symbol for OpenAI DevDay 2025 cover.”

## Intentionally absent

Coursera, Canva, Zillow, and Slack marks are not packaged. Design decision DS15 uses the English names from `references/scenes.md` unless a provenanced logo file exists. None exists. Do not fetch logos at runtime.

## Font note for Builder

DS02 and DS24 specify Inter. The font file is a packaging task for the local ZIP. Its absence does not block the visual plan. Audience runtime must not download the font.
