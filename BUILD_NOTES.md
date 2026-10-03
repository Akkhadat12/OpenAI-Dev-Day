# BUILD_NOTES

Project: OpenAI Dev Day
PROJECT_ID: 20261003-b4fb
PACKAGE_VERSION: 1.0.1
BUILD_COMMIT: 5d8ac162f8573ef6312c97571238a996c3fec3e8
PACKAGE_SHA256: 5fef0f0836bb53db4baea5f4e5404854a8876354fa3d58e77f28a9f1b6fb31c6
PACKAGE_PATH: delivery/packages/20261003-b4fb-1.0.1-local.zip
PACKAGE_BYTES: 74400
PACKAGE_MANIFEST_PATH: delivery/manifest.json
ZIP root folder: 20261003-b4fb-1.0.1-local/

The archive SHA-256 is not stored inside the ZIP. `manifest.json` records BUILD_COMMIT and per-file SHA-256 values only.

Package 1.0.0 remains in the repo at `delivery/packages/20261003-b4fb-1.0.0-local.zip` (71064 bytes, SHA-256 `a80b6c83c6e916e3987ac2cbfb710c76c458457321c91a4c4f5de18f9be8c6a1`). Its QA_PASS is historical and does not apply to 1.0.1. The 1.0.1 Drive file is not uploaded from this run.

## What changed in 1.0.1

Mac launchers were added beside the Windows launchers. `START.bat` and `STOP.bat` are still in the package. `START.command` and `STOP.command` are mode 100755 in git and 0755 in the ZIP. Both pass an absolute app path into `serve.py`.

`serve.py` is package version 1.0.1. If `--serve` is given a relative `--app`, the helper re-executes itself with that path resolved to an absolute path before it listens. `--stop` still accepts a process only when the live command line contains `serve.py`, the project id, and that absolute app path.

App canvas files (`index.html`, `styles.css`, `app.js`, `scenes.js`, cover SVGs, and fonts) have the same SHA-256 values as package 1.0.0. The scene map below is that unchanged canvas. This note does not repeat the 1.0.0 headless browser walk as a 1.0.1 result.

## Environment

Observed on the cloud build host. This host is Linux. It is not a Mac and it is not Windows.

- EXECUTION_MODE: CLOUD
- EXECUTION_OS: linux
- Python: 3.12.3 (`python3 --version`)
- Presentation stack: static HTML, CSS, and JavaScript. No npm install at owner launch. No runtime font CDN.
- Local runtime: Python 3 standard-library `http.server` through `serve.py`, bind `127.0.0.1` only.
- WINDOWS_LAUNCHER_TEST_RESULT: NOT_RUN. `START.bat` and `STOP.bat` were not executed.
- MACOS_LAUNCHER_TEST_RESULT: NOT_RUN. `START.command` was executed with bash on this Linux VM. That is not a macOS Finder double-click, not Terminal.app, and not `/usr/bin/open`.

## Commands

Assemble from the source commit above:

```bash
python3 delivery/assemble.py --commit 5d8ac162f8573ef6312c97571238a996c3fec3e8 --repo . --output delivery/packages/20261003-b4fb-1.0.1-local.zip
```

Archive hash and size:

```bash
python3 -c "import hashlib,pathlib; p=pathlib.Path('delivery/packages/20261003-b4fb-1.0.1-local.zip'); print(p.stat().st_size); print(hashlib.sha256(p.read_bytes()).hexdigest())"
```

Observed: 74400 bytes, SHA-256 `5fef0f0836bb53db4baea5f4e5404854a8876354fa3d58e77f28a9f1b6fb31c6`.

Canvas copy check against the extracted 1.0.1 `app/` tree:

```bash
python3 delivery/check_canvas.py /tmp/โฟลเดอร์\ ทดสอบ\ Dev\ Day/pkg/app
```

That command printed `canvas copy ok` for the extracted `index.html`. It checks locked English strings. It does not open a browser and it does not award QA.

## Package contents

Seventeen files under `20261003-b4fb-1.0.1-local/`:

- `README_TH.md`, `START.bat`, `STOP.bat`, `START.command`, `STOP.command`, `serve.py`, `manifest.json`
- `app/index.html`, `app/app.js`, `app/scenes.js`, `app/styles.css`
- `app/assets/cover/openai-wordmark-2025.svg`
- `app/assets/cover/openai-blossom-2025.svg`
- `app/assets/fonts/inter-latin-400-normal.woff2` (23664 bytes, wOF2)
- `app/assets/fonts/inter-latin-500-normal.woff2` (24272 bytes, wOF2)
- `app/assets/fonts/OFL.txt`, `app/assets/fonts/SOURCE.txt`

`manifest.json` lists the other 16 files. Markdown provenance files stay in the GitHub tree and are not in the ZIP.

Zip entry timestamps stay fixed at 2026-10-03 02:40:00. Unix mode in the archive is 0755 for the two `.command` files and 0644 for the rest. `unzip` on this Linux host restored those two files as mode 755. Python `zipfile.extractall` on this host wrote them as mode 644. The Thai quick-start tells the owner to run `chmod +x` when macOS does not keep the executable bit.

## Launchers

`serve.py` binds `127.0.0.1` only. `--host` other than that exits 2. Default port 8765, then the next free port within a span of 100. A second `--serve` against an already healthy state for the same app exits 0 and prints the existing URL. `--stop` signals a process only when its command line contains `serve.py`, the project id, and the resolved app path. It does not stop an unrelated PID.

`START.bat` and `STOP.bat` still look for `py -3` then `python`, require Python 3.8 or newer, and pass the absolute `%ROOT%app` path with `--version 1.0.1`. They were not executed.

`START.command` and `STOP.command` resolve their own directory with `pwd -P`, so a double-clicked `.command` file does not depend on the shell's starting directory. They look for `python3` then `python`, require Python 3.8 or newer, and pass the absolute app path with `--version 1.0.1`. START polls `.run/server.url` and only then opens a browser. On Darwin it calls `open` with that URL. On any other kernel it prints the URL and does not call `open`. The server is started with `nohup` so closing the Terminal window is not what this script uses to kill it. STOP calls `serve.py --stop`. Neither script runs npm or downloads a file.

## Linux execution of the .command files

All of the following used the extracted 1.0.1 archive, Python 3.12.3, on Linux, on 2026-10-03 about 00:22–00:27 UTC. The package directory was `/tmp/โฟลเดอร์ ทดสอบ Dev Day/pkg` (spaces and Thai characters). `uname` was Linux, so START printed the loopback URL instead of launching a browser.

- `bash ./START.command` exited 0 and printed `http://127.0.0.1:8765/`. `index.html` returned 200 with `lang="en"`. `/proc/net/tcp` showed the listener as `0100007F` (`127.0.0.1`). The server command line contained the absolute app path.
- A second `bash ./START.command` exited 0, printed the same URL, and left the same pid. Listener count for that port stayed 1.
- `bash ./STOP.command` exited 0, printed `Stopped package server pid 3090.`, and the pid and state file were gone.
- With 127.0.0.1:8765 already bound, `bash ./START.command` printed `http://127.0.0.1:8766/`. STOP then stopped that package pid.
- `./START.command` (the unzip-restored mode 755 file, not `bash`) exited 0 and printed a `http://127.0.0.1:` URL. `./STOP.command` exited 0.
- `python3 serve.py --serve --app app` (relative) re-executed. The live command line contained the absolute app path. `--stop` exited 0.
- An unrelated sleep pid recorded in a state file was refused (exit 2, `Refusing to stop a process that is not this package server.`) and stayed alive.
- `--host 0.0.0.0` exited 2 with `This helper binds 127.0.0.1 only.`
- `--version 1.0.0` exited 2 because this helper is 1.0.1.
- With `PATH` containing `dirname`, `mkdir`, and `uname` but not `python3` or `python`, `START.command` exited 1, printed the Thai and English Python install message, and did not write server state. `STOP.command` exited 1 with the same install message.

No macOS `open`, Gatekeeper prompt, or Finder double-click was observed. No Windows `START.bat` or `STOP.bat` run was observed.

## Keys

Implemented and documented in README.md and delivery/README_TH.md. These keys were not re-walked in a browser for 1.0.1. The app script hash matches 1.0.0.

- Spacebar: forward. During motion it settles the current beat and does not skip. On the S10 final hold it does nothing.
- R: cancel timers and show S01 initial (wordmark opaque, title hidden).
- Left Arrow: previous scene's final hold. No-op on S01.
- F: request or leave fullscreen. Rejection is silent.
- P: toggle the presenter dot. Optional extra, not painted on the canvas.

Repeats, ctrl/meta/alt, and editable targets are ignored.

## Pointer and cover

Unchanged from 1.0.0. Theme-adaptive presenter dot in `src/app.js` and `src/styles.css` (`#pointer`): 14 CSS pixels, fill `#22D3EE`, 1.5px solid `#0B0B0F` border, shadow `0 0 6px rgba(34, 211, 238, 0.45)`, `pointer-events: none`, `aria-hidden`, no lag, trail, or pulse. Visible only while the mouse is inside the stage. S01 inlines the wordmark path data from `assets/cover/openai-wordmark-2025.svg`. The 1.0.0 headless measurements are not repeated here as new evidence.

## Scene map

The canvas files match package 1.0.0. Last beat index after the 1.0.0 forward walk. Copy is the visual-plan English. Diagrams are code-drawn.

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

## Historical 1.0.0 measurements

These numbers are from the clean extract of `20261003-b4fb-1.0.0-local.zip` (SHA-256 `a80b6c83c6e916e3987ac2cbfb710c76c458457321c91a4c4f5de18f9be8c6a1`), Chrome 148.0.7778.96 headless, on 2026-10-02 about 19:51–19:54 UTC. They were not re-run for 1.0.1. Independent QA of that package is `qa/20261003-b4fb-qa-001/report.md`.

- Stage ratio 1.777... at 1920×1080, at 1280×720, and letterboxed inside 1600×1000 (stage 1600×900). Safe-area offender count 0 on S01–S10 in all three viewports.
- Final-hold screenshots 400 ms apart were identical on S01–S10.
- S01 final hold compared again after 30 seconds: identical (`hold30s` true). The 30-second compare was not repeated on S02–S10.
- Space walk ended on S10 beat 3. Another Space stayed on S10 beat 3. Left from S10 went to S09 beat 3. R returned S01 beat 0 wordmark.
- Two Spaces from S01 beat 0 settled at S01 beat 1 and did not skip the title.
- R during the S02 reveal returned `S01:0:wordmark`.
- After load, continuing offline still advanced. External request list empty. Console errors empty on the 1920, 1280, and 1600 walks.
- Reduced-motion walk ended at `S10:3`.
- Pointer on the 1920 walk: 14×14, not hidden while inside, `aria-hidden` true.
- Letterbox sample on 1600×1000: mouse in the top band hid the dot; mouse inside the stage showed a 14×14 dot.

## Drive

1.0.0 package file, already verified by metadata in an earlier run, is not the 1.0.1 archive:

- PACKAGE_FILE_ID: `1Ia1Z9ynXPf2PHu9sAXAV2_Qjl7X8498-`
- Title: 20261003-b4fb-1.0.0-local.zip
- Observed size: 71064
- Parent folder: `1QU7tkNth3-1W_4fPvptXqqck6OY2v3yy`

1.0.1 was not uploaded from this run. PACKAGE_FILE_ID for 1.0.1 is unset. PACKAGE_DOWNLOAD_URL is not delivered. Do not treat the 1.0.0 Drive file as 1.0.1.

Rationale Doc `1l2QblFVexHdVPvGv10Vj2bIiSInq47MOsRwX-x4OBrY` stays the owner document in that same folder. This run edited that Doc in place. A read-back showed package version 1.0.1, SHA-256 `5fef0f0836bb53db4baea5f4e5404854a8876354fa3d58e77f28a9f1b6fb31c6`, 74400 bytes, and the sentence that the 1.0.1 Drive download link is not yet present. Revision id after the edit: `ANLCKQlXEsxk7eHCClEuHLysDyBddeUIhKZmQnbEiFCA4L3j-HpxYY8GZ-65RF0p3q5oOdHbXUWoO4i3DMgRant2KOESDKuA3Il_nK1GbLE`. The repo source `references/06_SCENE_RATIONALE.md` matches that text. This run did not create a folder.

## Limitations

- macOS execution of `START.command` / `STOP.command`: NOT_RUN.
- Windows execution of `START.bat` / `STOP.bat`: NOT_RUN.
- Owner Windows smoke: NOT_RUN.
- 1.0.1 is not QA_PASS. The 1.0.0 QA_PASS stays historical.
- No new headless scene walk was taken for 1.0.1. `check_canvas.py` on the extracted app passed.
- 1.0.1 Drive upload is pending. READY_FOR_QA is not claimed.
