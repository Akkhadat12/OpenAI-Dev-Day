# QA report — 20261003-b4fb-qa-002

QA_PASS is scoped to Linux bash execution of the extracted `START.command` and `STOP.command` from package `20261003-b4fb-1.0.1-local.zip`, plus canvas bytes that are unchanged from package 1.0.0. Scene and canvas evidence is reused from `qa/20261003-b4fb-qa-001` and was not re-executed. This run does not say a macOS double-click passed. This run does not say Windows `START.bat` or `STOP.bat` passed. `MACOS_LAUNCHER_TEST_RESULT=NOT_RUN`. `WINDOWS_LAUNCHER_TEST_RESULT=NOT_RUN`. Owner smoke is `NOT_RUN`. `OPEN_FINDINGS: []`. This run does not set COMPLETE. The 1.0.0 QA_PASS stays historical.

## Fillable QA run

~~~yaml
PROJECT_ID: 20261003-b4fb
QA_RUN_ID: 20261003-b4fb-qa-002
TESTED_AT: 2026-10-03T07:38:48+07:00
REPOSITORY: https://github.com/Akkhadat12/OpenAI-Dev-Day
DEFAULT_BRANCH: main
BRANCH: project/openai-devday-20261003-b4fb
BRANCH_URL: https://github.com/Akkhadat12/OpenAI-Dev-Day/tree/project/openai-devday-20261003-b4fb
QA_TESTED_COMMIT: 5d8ac162f8573ef6312c97571238a996c3fec3e8
QA_TESTED_PACKAGE_SHA256: 5fef0f0836bb53db4baea5f4e5404854a8876354fa3d58e77f28a9f1b6fb31c6
PACKAGE_VERSION: 1.0.1
PACKAGE_FILE_ID: 1cS_V9h8N2exv4E795pQwXsiLFRXI0fJ2
PACKAGE_DOWNLOAD_URL: https://drive.google.com/file/d/1cS_V9h8N2exv4E795pQwXsiLFRXI0fJ2/view?usp=drivesdk
MANIFEST_PATH: manifest.json
QA_TARGET_URL: http://127.0.0.1:8765/ (this Linux bash run only). Loopback evidence only.
QA_ENVIRONMENT: Linux host. uname was not Darwin. cwd /tmp, not the package folder. Python 3.13.5. Bash invoked explicitly. No browser on this run.
EXECUTION_MODE: CLOUD
REUSED_EVIDENCE: qa/20261003-b4fb-qa-001/ for scene and canvas checks only. Those app payload hashes match package 1.0.0. The 1.0.0 archive is not this package. Builder BUILD_NOTES.md is context, not independent QA.
PENDING_SERVICE_TASKS: []
CONTENT_COMMIT: fc124ac6157f48ad468d1ad36b8538b2b5183ea2
VISUAL_PLAN_COMMIT: 48939cfea75498c5d1948045bd0b1a8c38a1078c
BROWSER_OS_DEVICE: Not used this run. Reused scene evidence is Linux, Google Chrome headless, from qa-001.
VIEWPORTS: Reused from qa-001, not remeasured. [1920x1080, 1280x720, 1600x1000]
MOTION_PREFERENCE: Reused from qa-001, not remeasured. normal and prefers-reduced-motion
WEB_LANGUAGE: English
LANGUAGE_AUDIT_EVIDENCE: qa/20261003-b4fb-qa-002/report.md
OWNER_DOCUMENT_LANGUAGE: Thai
BUILD_PACKAGE_CHECKS: Independent Drive ZIP download, SHA-256, clean extract, listed manifest hashes, Linux bash START.command and STOP.command, loopback bind refusal
OFFLINE_CHECK: Not re-executed. Reused from qa-001 because the app payload bytes are unchanged. qa/20261003-b4fb-qa-001/evidence/offline-space.json
WINDOWS_LAUNCHER_TEST_RESULT: NOT_RUN
WINDOWS_LAUNCHER_TEST_EVIDENCE: This Linux run did not execute START.bat or STOP.bat. The 1.0.1 bat bytes are not the 1.0.0 bat bytes.
MACOS_LAUNCHER_TEST_RESULT: NOT_RUN
MACOS_LAUNCHER_TEST_EVIDENCE: Linux bash of the extracted .command files. uname was not Darwin. Finder, Terminal.app, and open(1) were not run. Python extract mode 0644 is not a defect.
OWNER_WINDOWS_SMOKE_RESULT: NOT_RUN
OWNER_SMOKE_RESULT: NOT_RUN
REPORT_PATH: qa/20261003-b4fb-qa-002/report.md
RESULT: QA_PASS
OPEN_FINDINGS: []
~~~

Package identity, from the independently downloaded ZIP (74400 bytes):

- SHA-256 `5fef0f0836bb53db4baea5f4e5404854a8876354fa3d58e77f28a9f1b6fb31c6` matches `PACKAGE_SHA256`.
- Drive title `20261003-b4fb-1.0.1-local.zip`. Parent `1QU7tkNth3-1W_4fPvptXqqck6OY2v3yy`. File id `1cS_V9h8N2exv4E795pQwXsiLFRXI0fJ2`.
- Manifest `BUILD_COMMIT` is `5d8ac162f8573ef6312c97571238a996c3fec3e8`. Package version `1.0.1`.
- Every hash listed in the manifest matched the clean extract. See `evidence/note.md`.
- `index.html`, `app.js`, `scenes.js`, `styles.css`, the packaged fonts, and the cover SVGs are identical to package 1.0.0. `serve.py`, `START.command`, `STOP.command`, `START.bat`, `STOP.bat`, and `README_TH.md` are not those unchanged files.

ZIP unix mode for `START.command` and `STOP.command` is 0755 (`create_system` Unix). Python zip extract on this Linux host wrote 0644. Bash was invoked explicitly. That mode after a Python extract is not a defect.

## Acceptance results

| Check ID | Result | Tested scope | Actual observation | Evidence path | Finding ID |
|---|---|---|---|---|---|
| AC-001 | PASS reused | Claim register versus canvas labels. Not re-executed. `index.html` and `scenes.js` hashes match package 1.0.0. | qa-001 observation stands for these bytes: canvas labels stay inside the register. Primary pages were not re-fetched then or now. | qa/20261003-b4fb-qa-001/report.md | null |
| AC-002 | PASS reused | Cue map versus the qa-001 Space walk. Not re-executed. Spoken Thai was not read aloud. | qa-001 observation stands for these bytes: each scene's held English line matches that scene's visual job. Owner rehearsal is still the final-review step. | qa/20261003-b4fb-qa-001/evidence/browser-walk2.json | null |
| AC-003 | PASS reused | Content scenes, visual plan, and the unchanged packaged canvas. Not re-walked. | S01–S10 agreement was checked on these same canvas bytes in qa-001. S01 is the first cover. No extra scene id was introduced by the unchanged files. | qa/20261003-b4fb-qa-001/report.md, evidence/note.md | null |
| AC-004 | PASS reused | 1920×1080, 1280×720, 1600×1000 from qa-001. Not remeasured. | qa-001: stage ratio 16:9. 1920×1080 and 1280×720 fill the viewport. 1600×1000 letterboxes a 1600×900 stage at y=50. overflowY 0. | qa/20261003-b4fb-qa-001/evidence/browser-walk.json | null |
| AC-005 | PASS reused | Settled text and overflow from qa-001. Not remeasured. | qa-001: walk text matches the planned English lines. overflowY 0 at the three viewports. | qa/20261003-b4fb-qa-001/evidence/browser-walk.json | null |
| AC-006 | PASS reused | Ordinary phrases in the unchanged `index.html`. Not re-counted. | qa-001: every ordinary phrase is 8 words or fewer. `lang=en` was also observed on `GET /` this run. | qa/20261003-b4fb-qa-001/report.md, evidence/note.md | null |
| AC-007 | PASS reused | DOM chrome search from qa-001. Not re-executed. | qa-001: no nav, progress, hints, scene numbers, or control panel. S04 has one downward content arrow. Presenter dot is the only overlay. | qa/20261003-b4fb-qa-001/evidence/smoke2-results.json | null |
| AC-008 | PASS reused | Space, R, Left, F, P on the unchanged `app.js`. Not re-executed. Launcher OS rows below are separate. | qa-001: 1250 ms settle reached S10 beat 3; extra Space stayed; R returned S01 beat 0; Left from S10 opened S09; headless F set fullscreen; P hid the dot. | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | null |
| AC-009 | PASS reused | Beat walk from qa-001. Not re-executed. | qa-001: Space reveals the planned line, then hold. 30 s holds did not drift. | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | null |
| AC-010 | PASS reused | 30 s clocks on S10 beat 3 and S01 beat 0 from qa-001. Not re-executed. | qa-001: no auto-advance. Extra Space on the final beat stays. Those two holds were unchanged after 30 s. | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | null |
| AC-011 | PASS reused | R during reveal, final-scene Space, Left boundary from qa-001. Not re-executed. | qa-001: R during the title reveal returned S01 beat 0. Extra Space stayed on S10 beat 3. Left from S10 opened S09 beat 3. | qa/20261003-b4fb-qa-001/evidence/reduced-motion-keys.json | null |
| AC-012 | PASS reused | `prefers-reduced-motion: reduce` from qa-001. Not re-executed. | qa-001: `data-reduced=1`. A 600 ms Space walk reached S10 beat 3 and extra Space stayed. | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | null |
| AC-013 | PASS reused | Fonts, wordmark, and blossom. Hashes match package 1.0.0. Browser crop check was not repeated. | qa-001: served font and wordmark hashes matched that package. S01 cover mode is wordmark. Blossom is packaged and hidden unless the wordmark has no paths. No WebGL. | qa/20261003-b4fb-qa-001/evidence/smoke-results.json, evidence/note.md | null |
| AC-014 | PASS reused | Keyboard and alts from qa-001. `lang=en` rechecked on `GET /` this run. No contrast-ratio tool. | This run: `GET /` was 200, 13672 bytes, `lang=en`. qa-001: beat alts are English and are not painted. Status is a word plus color. Space/R/Left work without clicks. | evidence/note.md, qa/20261003-b4fb-qa-001/report.md | null |
| AC-015 | PASS reused | Hold behavior from qa-001. No new timing measurement. | qa-001: holds do not keep a scene-changing timer. S10 and S01 stayed fixed for 30 s. Console errors empty on that walk. | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | null |
| AC-016 | PASS reused | Console, network, and fullscreen from qa-001. Not re-executed. This run only fetched `GET /`. | qa-001: console errors empty. No external http(s) requests during those walks. Headless F entered fullscreen. This run did not open a browser. | qa/20261003-b4fb-qa-001/evidence/browser-walk.json | null |
| AC-017 | PASS | Downloaded ZIP, not the git checkout | 74400 bytes. SHA-256 matches. Manifest commit `5d8ac162…` and every listed file hash match the extract. | evidence/note.md | null |
| AC-018 | PASS | This assignment branch, owner folder id, status | Branch `project/openai-devday-20261003-b4fb` is the recorded run. Owner folder `1QU7tkNth3-1W_4fPvptXqqck6OY2v3yy` is reused. Package 1.0.0 remains historical. Technical files stay in GitHub. | WORKFLOW_STATUS.md | null |
| AC-019 | PASS | Current ZIP readback. PDFs, narration Doc, and rationale Doc were not re-opened. | Five owner artifacts stay recorded READY. The downloaded ZIP is the current package. The hash-matched `README_TH.md` is Thai and names the one-time Python 3 prerequisite, including `chmod +x` when the executable bit is not kept. | WORKFLOW_STATUS.md, evidence/note.md | null |
| AC-020 | PASS | This report, the evidence note, and the recorded run output | No credential values. The loopback URL is run evidence only. | evidence/note.md | null |
| AC-021 | PASS | Linux bash of the extracted .command files, repeat start, stop, and bind refusal. Offline canvas walk reused, not re-executed. macOS and Windows rows are NOT_RUN. | See the launcher OS rows and the package section below. `GET /` was local. Ordinary launch on this run had no npm install. | evidence/note.md, qa/20261003-b4fb-qa-001/evidence/offline-space.json | null |
| AC-022 | PASS reused | Pointer from qa-001. Not re-executed. Touch was not used. | qa-001: inside the stage the dot is 14×14 `rgb(34, 211, 238)`, not hidden. It is `aria-hidden` and not a control. P set the dot hidden. | qa/20261003-b4fb-qa-001/evidence/browser-walk.json | null |
| AC-023 | PASS reused | Packaged S01 and R reset from qa-001. Cover SVG hashes match package 1.0.0. Not re-executed. | qa-001: first scene is S01. Cover dataset `wordmark`. R returns beat 0 wordmark. Authentic wordmark SVG is packaged; blossom fallback is packaged and hidden. | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | null |
| AC-024 | PASS | `GET /` lang this run. Canvas text reused. Owner Docs not re-opened. | `html` response was `lang=en`. Canvas text audit is the qa-001 result for unchanged files. Narration, PDFs, and rationale stay the recorded Thai owner set and were not re-read. Hash-matched `README_TH.md` is Thai. | evidence/note.md, qa/20261003-b4fb-qa-001/report.md | null |

## Launcher OS rows

| OS row | Result | What ran | Observation |
|---|---|---|---|
| Linux bash `START.command` / `STOP.command` | PASS | Yes. Extracted package. cwd `/tmp`. Python 3.13.5. | `bash START.command` exited 0 and printed `http://127.0.0.1:8765/`. State app path was absolute. Process command line contained that absolute `--app`, `--host 127.0.0.1`, and `--version 1.0.1`. `GET /` returned 200, 13672 bytes, `lang=en`. A second `bash START.command` exited 0 and reused the same URL. `bash STOP.command` exited 0, printed `Stopped package server`, removed the state file, and left the pid dead. `serve.py --host 0.0.0.0` exited 2: `This helper binds 127.0.0.1 only.` |
| macOS Finder / Terminal.app / `open(1)` | NOT_RUN | No | `uname` was not Darwin. Linux bash is not a Mac double-click, not Terminal.app, and not `open(1)`. `MACOS_LAUNCHER_TEST_RESULT=NOT_RUN`. |
| Windows `START.bat` / `STOP.bat` | NOT_RUN | No | Those files were not executed. Their 1.0.1 bytes differ from package 1.0.0, so the earlier package does not cover them. `WINDOWS_LAUNCHER_TEST_RESULT=NOT_RUN`. |
| Owner smoke | NOT_RUN | No | The owner has not extracted this ZIP on a Mac or rehearsed it. Windows owner smoke is also NOT_RUN. |

Python extract wrote `START.command` and `STOP.command` as mode 0644 on this host. The ZIP entry mode is 0755. Bash was invoked explicitly. That is not an open finding.

This run did not execute an occupied-port hop, a missing-Python launch, an unrelated-PID stop, or a browser offline session. The offline Space result is reused from qa-001 for the unchanged canvas bytes and is labeled reused.

## Scene, state, and copy audit

Reused from qa-001. Not re-executed. The canvas files named above match package 1.0.0. Counts below are that earlier walk, kept here so this matrix still lists every scene.

Ordinary words are whitespace tokens after the middot is treated as a separator. Essential chart or status labels are excluded from the 0–8 ordinary budget and listed here. Counts are for the fullest held state.

| Scene | Narration/claim IDs | States checked | Ordinary copy / essential labels | Ordinary / excluded / total | Stable hold | Evidence | Result |
|---|---|---|---|---|---|---|---|
| S01 | C01 | Entry wordmark, title reveal, R reset, 30 s on beat 0 | OpenAI DevDay 2025. No essential label. | 3 / 0 / 3 | 30 s unchanged after R | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | PASS reused |
| S02 | C02, C18, C19 | Space reveal of the line | Software runs in chat | 4 / 0 / 4 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/offline-space.json | PASS reused |
| S03 | C01, C18 | Walk text | Four pillars. Labels: Apps, Agents, Codex, Models, API | 2 / 5 / 7 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/browser-walk2.json | PASS reused |
| S04 | C02, C03, C05, C20 | Walk text; one content arrow | Apps SDK · Preview. Label: MCP | 3 / 1 / 4 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/browser-walk2.json | PASS reused |
| S05 | C04, C05 | Walk text | Partner demos. Labels: Coursera, Canva, Zillow | 2 / 3 / 5 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/browser-walk2.json | PASS reused |
| S06 | C06, C19 | Walk text | AgentKit | 1 / 0 / 1 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/browser-walk.json | PASS reused |
| S07 | C07, C08, C09, C10, C20 | Walk text | Status matters. Labels: Builder, Beta, ChatKit, GA, Evals, GA, Guardrails, Connectors, Limited, beta | 2 / 10 / 12 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/browser-walk2.json | PASS reused |
| S08 | C11, C12, C13, C20 | Walk text | Codex is GA. Labels: Slack, SDK, Admin, 10×, OpenAI-reported | 3 / 5 / 8 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/browser-walk2.json | PASS reused |
| S09 | C15, C16, C17, C19 | Walk text and pointer sample | API fuel. Labels: GPT-5 Pro, Sora 2, mini, −70%, −80% | 2 / 7 / 9 | Held through settle waits | qa/20261003-b4fb-qa-001/evidence/browser-walk.json | PASS reused |
| S10 | C19, C20, C05, C07, C08, C11 | Final beat, extra Space, 30 s | Platform first. Labels: Apps, Preview, Agents, Codex, GA | 2 / 5 / 7 | Beat 3 unchanged for 30 s; extra Space stayed | qa/20261003-b4fb-qa-001/evidence/final-boundary.json | PASS reused |

Guardrails is a name with no maturity word on the chip. Agents on S10 has no status chip. That matches the announced-versus-shipped rule. Those sentences are the qa-001 audit of the same canvas bytes.

## Local package, offline, and recovery (AC-021)

Executed on Linux against the extracted 1.0.1 archive. Details are in `evidence/note.md`.

- `bash START.command` from cwd `/tmp` exited 0 and printed `http://127.0.0.1:8765/`.
- The state app path was absolute. The process command line contained that absolute `--app`, `--host 127.0.0.1`, and `--version 1.0.1`.
- `GET /` returned 200, 13672 bytes, `lang=en`. 13672 is the unchanged `index.html` length.
- A second `bash START.command` exited 0 and reused the same URL.
- `bash STOP.command` exited 0, printed `Stopped package server`, removed the state file, and left the pid dead.
- `serve.py --host 0.0.0.0` exited 2 with `This helper binds 127.0.0.1 only.`
- Offline Chrome from qa-001 is reused for the unchanged app bytes: after `setOfflineMode`, Space moved S01 beat 0 → beat 1 → S02 beat 0. It was not run again for 1.0.1.

macOS portion: NOT_RUN. Windows portion: NOT_RUN. This result does not say Finder double-click, `open(1)`, `START.bat`, or `STOP.bat` passed.

## Observations

These are not material findings. They are not in `OPEN_FINDINGS`.

1. Python `zipfile` extract on this Linux host wrote `START.command` and `STOP.command` as mode 0644 even though the ZIP unix mode is 0755. Bash was invoked explicitly. That is not a defect.
2. This run did not re-open the rationale Doc. The qa-001 note that the Doc ZIP sentence was stale was not rechecked.
3. Owner Docs and a macOS double-click remain outside this pass. FINAL_REVIEW stays pending.

## Findings

No material findings.

| Finding ID | Affected scene/scope | Severity | Expected behavior | Observed behavior | Evidence | Required correction | Tested commit | Current status |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

`OPEN_FINDINGS: []`

## Compact handoff

~~~text
Result: QA_PASS
Tested package: https://drive.google.com/file/d/1cS_V9h8N2exv4E795pQwXsiLFRXI0fJ2/view?usp=drivesdk version 1.0.1 SHA-256 5fef0f0836bb53db4baea5f4e5404854a8876354fa3d58e77f28a9f1b6fb31c6 source 5d8ac162f8573ef6312c97571238a996c3fec3e8
Environment: Linux bash, Python 3.13.5, cwd /tmp. No browser this run. Canvas scene evidence reused from qa-001. MACOS_LAUNCHER_TEST_RESULT=NOT_RUN. WINDOWS_LAUNCHER_TEST_RESULT=NOT_RUN.
Evidence: qa/20261003-b4fb-qa-002/report.md and qa/20261003-b4fb-qa-002/evidence/note.md
Owner documents: five READY records in WORKFLOW_STATUS.md. PDFs, narration Doc, and rationale Doc were not re-opened this run.
Open findings: none
Next actor/action: Owner — Final review/rehearsal; macOS double-click smoke of START.command/STOP.command (Windows bats still pending if they still care). Extract the 1.0.1 ZIP on the Mac, double-click START.command, rehearse, run STOP.command, then confirm FINAL_REVIEW.
~~~
