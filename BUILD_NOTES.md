# BUILD_NOTES — devday-20260930-a7c4

Builder (Agent 4) record. Current deployment metadata lives in WORKFLOW_STATUS.md. Production is deployed and the public URL serves the recorded commit.

## Setup, build, run
- Root directory: repo root. Node >=20 (built and tested on v22.22.2). No dependencies.
- `npm ci` (no-op, lockfile has zero packages) → `npm run build` (writes `dist/`) → `npm run dev` (http://localhost:4173).
- `npm test`: 10 state-machine tests (every row of the Design 1.0 key table, stale-callback and cancel cases).
- `NODE_PATH=$(npm root -g) node tools/qa/e2e-check.mjs [--hold-seconds=30]` (needs Playwright + Chromium; run after `npm run build`). Writes `qa/build/e2e-results.json` and `qa/build/states/*.png`.
- The build fails if a scene's beat count or visible copy differs from `references/scenes.json` or exceeds 8 ordinary words.
- Vercel settings (vercel.json): framework none, install `npm ci`, build `npm run build`, output `dist`.

## Keys (hidden; nothing is shown on canvas)
| Key | Behavior |
|---|---|
| Space | Completes active motion to its endpoint; at a hold runs the next beat; at the last beat of S01–S11 fades out and enters the next scene; at S12 final hold does nothing |
| R | Cancels motion and shows the S01 cover (b0) instantly; the next Space reveals S01 b1 |
| Left Arrow (optional, implemented) | Previous scene's final settled state; at S01 stays at b0 |
| F (optional, implemented) | Toggles browser fullscreen; rejection is silent; scene/beat never change |

Key repeats are ignored until release; Ctrl/Alt/Meta/Shift combinations and editable targets are ignored; only Space/Left are `preventDefault`ed. Clicking does nothing.
Rehearsal: each scene holds indefinitely after each settle; press Space at the cue in `references/scenes.json`. Recording: load the page, wait for the cover (fonts gate the first frame), go fullscreen with F (or the browser), wait for the browser notice to clear, press R to be sure of the cover, then record.

## Implemented scenes
12 scenes, 20 reveals, 32 settled states, all from `assets/visual/Sxx.svg` (the inlined `g.beat` groups are the states). Scene map with claim IDs is in 04_BUILD.md. Motion: entry 500 ms, reveal 650 ms, exit 350 ms, `cubic-bezier(0.22,1,0.36,1)`; beats with an arrow follow the order in `src/scene-data.js` (arrow-first, arrow-last or together, all within 650 ms; the arrowhead appears only after its line is drawn). S06 and S07 use fade only (no translation), S04 b1 grows the ring r200→r236, S12 b1 drops in 48 px.

## Deviations from 03_VISUAL_PLAN.md (none material)
- The per-file `<style>` and the full-frame background `<rect>` of each SVG are not inlined; the stage supplies the same #071923 and global CSS supplies the same fonts. Pixels are unchanged (see checks).
- Reveal translation directions the plan left open (only "24 px toward the anchor") are builder choices in `src/scene-data.js`; none exceeds 48 px.
- A visually-hidden `aria-live` region announces the Thai scene description once per scene change (not focusable, never visible).

## Checks (measured; Chromium 141.0.7390.37, Playwright 1.56.1, Linux x64 4 CPU, headless software rasterization, localhost; 2026-09-30)
Source commit under test 7f0015c (runtime unchanged since; docs/evidence committed after). All 32 checks passed: `qa/build/e2e-results.json`.
- All 32 settled states, normal and reduced motion, match the storyboard render pixel-for-pixel (0 differing pixels at 960×540) and sit inside the safe area (x 96–1824, y 54–1026, strokes included).
- Copy counts equal the plan for every scene (ordinary/essential: S01 4/0, S02 3/0, S03 3/0, S04 4/0, S05 4/0, S06 2/11, S07–S08 4/0, S09–S12 3/0); minimum text 48 px.
- Keys: rapid Space, R during motion (no ghost after 800 ms), auto-repeat, modifiers, editable target, click, Left, F; S12 terminal hold; no scroll.
- Clean canvas: no controls/focusable elements; only cover copy visible at the cover.
- Holds of 30 s at S06 b3 and S12: identical frames, 0 animations, 0 new app timeouts/intervals/rAF.
- Viewports 1920×1080, 1280×720, 1440×900, 800×1000, 1000×400: 16:9 centered letterbox, no scroll, scene/beat kept on resize.
- Missing SemiBold font: cover and labels still render (fallback flag set; recording must not accept this).
- Performance (measured, not guaranteed elsewhere): reveal frame interval median 16.7 ms, p95 16.7 ms, max 16.8 ms (42 frames, S01 b1); key-to-motion 0.4 ms; cover font-ready 29–33 ms from navigation on localhost.
- Mid-motion frames were inspected once (S01 b1 at 200 ms: arrow partly drawn, no head, stack not yet visible). Not covered: real-speech rehearsal, browsers other than Chromium, physical displays.

## Limitations / owners
- Not exercised by Builder: Firefox/Safari (the S04 ring animates the CSS `r` property), real fullscreen (headless rejects it).
- Fullscreen browser notices are browser-owned and outside the app.

## Deployment (2026-10-01T07:48:32+07:00)
- Scope `ham-b6fc` (`team_gUB5J3AIwkqj8c4QbfWNLCgd`) still returns 403 when `teamId` is passed explicitly. Reads and writes that omit `teamId` succeed against that same team, so the earlier re-authentication blocker is cleared for this path.
- No project was linked to https://github.com/Akkhadat12/OpenAI-Dev-Day. `openai-devday-accepted-work` (`prj_ztsCZRU6IiMbuREoljidkfSWpKzV`) is a separate Vite production and was not reused.
- Reused the empty project `devday-agents-20260930` (`prj_4NPj6ZjnRnzL4X25jtonsEbFLK8v`), created 2026-10-01 with no deployments and no domains. Reason: name matches this assignment, same team, nothing to preserve. Settings applied before deploy: framework none, Node 22.x, install `npm ci`, build `npm run build`, output `dist`, root directory the repo root.
- Production deployment `dpl_AVavjL6t8FGTmFksRfJ8oC545wve` from GitHub `Akkhadat12/OpenAI-Dev-Day` ref `project/devday-agents-20260930-a7c4` sha `7c2e5f576262bbe857cbf044269603d31aaf5f84`. State READY. Target production.
- Public PRODUCTION_URL: https://devday-agents-20260930.vercel.app
- Also assigned: https://devday-agents-20260930-ham-b6fc.vercel.app and immutable https://devday-agents-20260930-r0jvzsnlc-ham-b6fc.vercel.app
- Served identity, fetched without credentials (HTTP 200, `cache-control: no-store`) from all three hosts: `/build-id.json` commit `7c2e5f576262bbe857cbf044269603d31aaf5f84`, `vercelEnv` `production`, 12 scenes. `<meta name="build-commit">` matches. Password protection and SSO are off.
- The project read does not return a configured production-branch field. This production alias currently points at the assignment-branch deployment above.
- Runtime between the Chromium check commit `7f0015c` and the deployed `7c2e5f5` differs only by `tools/build/artifact.mjs`, which `npm run build` does not run.

## Blockers
None for production deployment. QA has not run.

## Environment variables
None required. Build reads `VERCEL_GIT_COMMIT_SHA`, `VERCEL_GIT_COMMIT_REF`, `VERCEL_ENV` when present (names only).
