# BUILD_NOTES

Project: OpenAI Dev Day
PROJECT_ID: 20261003-b4fb
PACKAGE_VERSION: 1.0.0
BUILD_COMMIT: 55f8a78dbdb21b349a224968bfffa247e15d5e41
PACKAGE_SHA256: a80b6c83c6e916e3987ac2cbfb710c76c458457321c91a4c4f5de18f9be8c6a1
PACKAGE_PATH: delivery/packages/20261003-b4fb-1.0.0-local.zip
PACKAGE_BYTES: 71064
PACKAGE_MANIFEST_PATH: delivery/manifest.json
ZIP root folder: 20261003-b4fb-1.0.0-local/

The archive SHA-256 is not stored inside the ZIP. `manifest.json` records BUILD_COMMIT and per-file SHA-256 values only.

## Environment

Observed on the cloud build host, not on Windows.

- EXECUTION_MODE: CLOUD
- EXECUTION_OS: linux
- Python: 3.12.3 (`python3 --version`)
- Browser used for the package walk: Google Chrome 148.0.7778.96, headless, via puppeteer-core 24 installed only under `/tmp/devday-check`. That install is not a package dependency and is not inside the ZIP.
- Presentation stack: static HTML, CSS, and JavaScript. No npm install at owner launch. No runtime font CDN.
- Local runtime: Python 3 standard-library `http.server` through `delivery/serve.py`, bind `127.0.0.1` only.
- WINDOWS_LAUNCHER_TEST_RESULT: NOT_RUN. `START.bat` and `STOP.bat` were inspected and share `serve.py`. They were not executed.

## Commands

Assemble from the source commit above:

```bash
python3 delivery/assemble.py --commit 55f8a78dbdb21b349a224968bfffa247e15d5e41 --repo . --output delivery/packages/20261003-b4fb-1.0.0-local.zip
```

Archive hash:

```bash
python3 -c "import hashlib,pathlib; print(hashlib.sha256(pathlib.Path('delivery/packages/20261003-b4fb-1.0.0-local.zip').read_bytes()).hexdigest())"
```

Canvas copy check against the extracted package app:

```bash
python3 delivery/check_canvas.py
```

The checker was pointed at the extracted `app/` tree. It passed: locked English strings, ordinary-word budget, no Thai on the canvas, no runtime `http(s)` URLs in the HTML/CSS/JS, and inlined SVG path data matching `assets/cover/openai-wordmark-2025.svg` and `assets/cover/openai-blossom-2025.svg`.

Serve the extracted package (Linux smoke, not START.bat):

```bash
python3 serve.py --serve --app app --state /tmp/devday-pkg.run.json --project 20261003-b4fb --version 1.0.0 --host 127.0.0.1 --port 8765
python3 serve.py --stop --state /tmp/devday-pkg.run.json
```

## Package contents

Fifteen files under `20261003-b4fb-1.0.0-local/`:

- `README_TH.md`, `START.bat`, `STOP.bat`, `serve.py`, `manifest.json`
- `app/index.html`, `app/app.js`, `app/scenes.js`, `app/styles.css`
- `app/assets/cover/openai-wordmark-2025.svg`
- `app/assets/cover/openai-blossom-2025.svg`
- `app/assets/fonts/inter-latin-400-normal.woff2` (23664 bytes, wOF2)
- `app/assets/fonts/inter-latin-500-normal.woff2` (24272 bytes, wOF2)
- `app/assets/fonts/OFL.txt`, `app/assets/fonts/SOURCE.txt`

`manifest.json` lists the other 14 files. On a clean extract, each listed SHA-256 matched the file bytes. Markdown provenance files stay in the GitHub tree and are not in the ZIP. Fonts are fontsource `inter@5.2.8` Latin subsets, OFL from rsms/inter, downloaded at setup. After that, the page loads only those local woff2 files.

Zip entry timestamps are fixed at 2026-10-03 02:40:00 so the same source tree assembles the same bytes.

## Launchers

`serve.py` binds `127.0.0.1` only. `--host` other than that exits 2 with the message that the helper binds 127.0.0.1 only. Default port 8765, then the next free port within a span of 100. A second `--serve` against an already healthy state for the same app exits 0 and prints the existing URL. `--stop` signals a process only when its command line contains `serve.py`, the project id, and the resolved app path. It does not stop an unrelated PID. On Linux, a zombie is treated as already dead.

`START.bat` and `STOP.bat` are UTF-8, switch to the package directory, look for `py -3` then `python`, and require Python 3.8 or newer. The missing-Python message points at https://www.python.org/downloads/ and Add python.exe to PATH. START polls `.run/server.url` and opens that URL. STOP calls `serve.py --stop`.

Linux checks that did run, against the extracted package helper:

- Requested port occupied: the helper bound the next free `127.0.0.1` port (observed hops 8899 to 8900, 8910 to 8911, and 8930 to 8931).
- `--host 0.0.0.0` exited 2.
- Repeat `--serve` did not open a second listener.
- `--stop` exited 0, removed the state file, and the server received SIGTERM.
- An unrelated sleep PID was refused (exit 2) and stayed alive.
- A path with spaces and Thai characters served `index.html` (`lang="en"`, title text OpenAI DevDay 2025).
- Listen sockets observed in `/proc/net/tcp` for the test port used address `0100007F` (`127.0.0.1`).

## Keys

Implemented and documented in README.md and delivery/README_TH.md:

- Spacebar: forward. During motion it settles the current beat and does not skip. On the S10 final hold it does nothing.
- R: cancel timers and show S01 initial (wordmark opaque, title hidden).
- Left Arrow: previous scene's final hold. No-op on S01.
- F: request or leave fullscreen. Rejection is silent.
- P: toggle the presenter dot. Optional extra, not painted on the canvas.

Repeats, ctrl/meta/alt, and editable targets are ignored.

## Pointer

Theme-adaptive presenter dot in `src/app.js` and `src/styles.css` (`#pointer`).

- 14 CSS pixels in viewport space, not scaled with the stage
- fill `#22D3EE`
- 1.5px solid `#0B0B0F` border
- shadow `0 0 6px rgba(34, 211, 238, 0.45)`
- `pointer-events: none`, `aria-hidden`, no lag, trail, or pulse
- visible only while the mouse is inside the stage; the native cursor is hidden only then
- touch hides the dot

On the 1920×1080 package walk, a point near the corner is still inside the full-bleed stage, so that sample does not show the letterbox hide. A separate headless sample on 2026-10-02T19:58Z, same Chrome, viewport 1600×1000, against the extracted package on `http://127.0.0.1:8771/`:

- stage box x=0, y=50, width=1600, height=900
- mouse at (4, 4), in the top letterbox band: pointer `hidden` true
- mouse at (800, 500), inside the stage: pointer `hidden` false, box 14×14, background `rgb(34, 211, 238)`
- authored border is `1.5px solid #0B0B0F`; that sample's computed `borderTopWidth` was `1px` and the color was `rgb(11, 11, 15)`. The 1px width is the browser's computed value in this headless sample, not a second design.

## Cover

S01 inlines the path data from `assets/cover/openai-wordmark-2025.svg` (viewBox `0 0 269.6592 72.5157`, six paths). CSS fill `#F5F5F7`. Provenance is `assets/cover/PROVENANCE.md`: Wikimedia Commons, upstream https://openai.com/brand/. Educational local cover, not a sponsorship. The blossom file is packaged and shown only when the wordmark has no path data. Both marks are never shown together. R returns to wordmark opaque and title hidden.

Measured on the extracted package, Chrome headless, first paint of S01:

- `lang` en
- cover mode wordmark
- title opacity 0
- wordmark fill `rgb(245, 245, 247)`
- blossom hidden
- Inter 400 and Inter 500 both reported true
- scroll overflow 0

## Scene map

Last beat index after the forward walk. Copy is the visual-plan English. Diagrams are code-drawn.

| Scene | Beats (last index) | What holds |
|---|---|---|
| S01 | 1 | Wordmark, then "OpenAI DevDay 2025" |
| S02 | 1 | Bracket frame, then the chat line |
| S03 | 4 | Title, then Apps, Agents, Codex, Models/API |
| S04 | 2 | Apps SDK with amber Preview, then MCP and one downward arrow |
| S05 | 4 | Title, Coursera, Canva, Zillow, then the large Zillow frame |
| S06 | 1 | AgentKit, then five empty slots |
| S07 | 5 | Builder Beta, ChatKit GA, Evals GA, Guardrails name only, Connectors Limited beta |
| S08 | 5 | Preview is removed before GA; then Slack, SDK, Admin, and the 10× footnote |
| S09 | 3 | API fuel, GPT-5 Pro, Sora 2, mini with −70% and −80% |
| S10 | 3 | Platform, Apps Preview, Agents with no chip, Codex GA. Extra Space stays here |

Status chip fills follow the design system: GA `#10A37F`, Preview/Beta `#F59E0B`, Limited beta `#A78BFA`, neutral `#6B7280`. The S04 arrow is one content arrow, stroke `#F5F5F7`, 2px, not clickable. No partner logos and no chart.

Canvas motion: entry 500 ms plus 200 ms settle, reveal 700 ms plus 200 ms settle, exit 400 ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`. Reduced motion uses the same beats at 150 ms and drops transforms. Holds do not run an animation loop.

## Measured checks

All of the following were taken from the clean extract of `20261003-b4fb-1.0.0-local.zip` (SHA-256 above), served on `127.0.0.1`, Chrome 148.0.7778.96 headless, on 2026-10-02 about 19:51–19:54 UTC (2026-10-03 02:51–02:54 +07). Evidence JSON from that walk is not committed; the numbers below are the ones that walk printed.

- Stage ratio 1.777... at 1920×1080, at 1280×720, and letterboxed inside 1600×1000 (stage 1600×900). Safe-area offender count 0 on S01–S10 in all three viewports.
- Final-hold screenshots 400 ms apart were identical on S01–S10.
- S01 final hold compared again after 30 seconds: identical (`hold30s` true). The 30-second compare was not repeated on S02–S10.
- Space walk ended on S10 beat 3. Another Space stayed on S10 beat 3. Left from S10 went to S09 beat 3. R returned S01 beat 0 wordmark.
- Two Spaces from S01 beat 0 settled at S01 beat 1 (`doubleSpaceStopsAt` S01:1) and did not skip the title.
- R during the S02 reveal returned `S01:0:wordmark`.
- After load, continuing offline still advanced (`offlineAdvance` true). External request list empty. Console errors empty on the 1920, 1280, and 1600 walks.
- Reduced motion flag `1`. The reduced-motion walk ended at `S10:3`.
- Pointer on the 1920 walk: 14×14, not hidden while inside, `aria-hidden` true.

## Limitations

- Windows `START.bat` / `STOP.bat` execution: NOT_RUN.
- Owner Drive ZIP upload was attempted on 2026-10-02T20:15:12Z into folder `1QU7tkNth3-1W_4fPvptXqqck6OY2v3yy`. Drive reported file id `1GUkcvPagsFtHBPBnPlLCqeuSo9kUyAyz`, mime `application/zip`, size 59640 bytes. The local archive is 71064 bytes, so those bytes do not match. That Drive file was moved to trash and a follow-up metadata read returned not found. It is not the package. PACKAGE_FILE_ID stays unset until a later upload matches this SHA-256. The local ZIP in `delivery/packages/` is the byte source.
- Thai rationale Google Doc was created in the same folder and read back: file id `1l2QblFVexHdVPvGv10Vj2bIiSInq47MOsRwX-x4OBrY`, URL `https://docs.google.com/document/d/1l2QblFVexHdVPvGv10Vj2bIiSInq47MOsRwX-x4OBrY/edit`. The read showed the scene notes, the package hash, and the statement that the Drive ZIP is not confirmed. Spelling fixes after that read changed 7 occurrences. The Doc does not replace a verified ZIP download.
- No performance budget numbers beyond the checks above. No claim of a 30-second hold on every scene.
- Puppeteer and Chrome were used only to measure. They are not required to run the package.

## Drive delivery update

Recorded 2026-10-03T03:23:42+07:00 after a metadata read of the coordinator upload. This replaces the “PACKAGE_FILE_ID stays unset” sentence above.

- PACKAGE_FILE_ID: `1Ia1Z9ynXPf2PHu9sAXAV2_Qjl7X8498-`
- PACKAGE_DOWNLOAD_URL: https://drive.google.com/file/d/1Ia1Z9ynXPf2PHu9sAXAV2_Qjl7X8498-/view?usp=drivesdk
- Parent folder: `1QU7tkNth3-1W_4fPvptXqqck6OY2v3yy`
- Observed Drive fileSize: 71064
- mimeType: application/zip
- Title: 20261003-b4fb-1.0.0-local.zip
- PACKAGE_SHA256 remains `a80b6c83c6e916e3987ac2cbfb710c76c458457321c91a4c4f5de18f9be8c6a1` for the local archive of that size. This note does not claim a second hash of the downloaded Drive bytes.
- Trashed file `1GUkcvPagsFtHBPBnPlLCqeuSo9kUyAyz` is not the package.
