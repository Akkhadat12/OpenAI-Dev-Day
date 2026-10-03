# QA report — 20261003-b4fb-qa-001

QA_PASS is scoped to the extracted Linux loopback package `20261003-b4fb-1.0.0-local.zip`. Windows `START.bat` / `STOP.bat` were not executed. `WINDOWS_LAUNCHER_TEST_RESULT=NOT_RUN`. `OWNER_WINDOWS_SMOKE_RESULT=NOT_RUN`. `OPEN_FINDINGS: []`. This run does not set COMPLETE.

## Fillable QA run

~~~yaml
PROJECT_ID: 20261003-b4fb
QA_RUN_ID: 20261003-b4fb-qa-001
TESTED_AT: 2026-10-03T03:39:54+07:00
REPOSITORY: https://github.com/Akkhadat12/OpenAI-Dev-Day
DEFAULT_BRANCH: main
BRANCH: project/openai-devday-20261003-b4fb
BRANCH_URL: https://github.com/Akkhadat12/OpenAI-Dev-Day/tree/project/openai-devday-20261003-b4fb
QA_TESTED_COMMIT: 55f8a78dbdb21b349a224968bfffa247e15d5e41
QA_TESTED_PACKAGE_SHA256: a80b6c83c6e916e3987ac2cbfb710c76c458457321c91a4c4f5de18f9be8c6a1
PACKAGE_VERSION: 1.0.0
PACKAGE_FILE_ID: 1Ia1Z9ynXPf2PHu9sAXAV2_Qjl7X8498-
PACKAGE_DOWNLOAD_URL: https://drive.google.com/file/d/1Ia1Z9ynXPf2PHu9sAXAV2_Qjl7X8498-/view?usp=drivesdk
MANIFEST_PATH: manifest.json
QA_TARGET_URL: http://127.0.0.1:8971/ (this probe; earlier session also used 8941, 8960, and 8980). Loopback evidence only.
QA_ENVIRONMENT: Linux cloud. Attached helper and Playwright session used Python 3.13.5 and Google Chrome headless. This VM's supplemental probe used Python 3.12.3 and Google Chrome 148.0.7778.96 headless.
EXECUTION_MODE: CLOUD
REUSED_EVIDENCE: qa/20261003-b4fb-qa-001/evidence/ (same package SHA-256). Builder BUILD_NOTES.md is context, not independent QA.
PENDING_SERVICE_TASKS: []
CONTENT_COMMIT: fc124ac6157f48ad468d1ad36b8538b2b5183ea2
VISUAL_PLAN_COMMIT: 48939cfea75498c5d1948045bd0b1a8c38a1078c
BROWSER_OS_DEVICE: Linux, Google Chrome headless, desktop viewports listed below
VIEWPORTS: [1920x1080, 1280x720, 1600x1000]
MOTION_PREFERENCE: normal and prefers-reduced-motion
WEB_LANGUAGE: English
LANGUAGE_AUDIT_EVIDENCE: qa/20261003-b4fb-qa-001/report.md
OWNER_DOCUMENT_LANGUAGE: Thai
BUILD_PACKAGE_CHECKS: Independent Drive ZIP download, SHA-256, clean extract, 14 manifest hashes, loopback serve.py
OFFLINE_CHECK: Chrome offline after load; Space advanced S01 beat 0 to S01 beat 1 to S02. No external requests.
WINDOWS_LAUNCHER_TEST_RESULT: NOT_RUN
WINDOWS_LAUNCHER_TEST_EVIDENCE: No Windows host in this cloud run. START.bat and STOP.bat were inspected, not executed.
OWNER_WINDOWS_SMOKE_RESULT: NOT_RUN
REPORT_PATH: qa/20261003-b4fb-qa-001/report.md
RESULT: QA_PASS
OPEN_FINDINGS: []
~~~

Package identity, checked on this run from the downloaded ZIP (71064 bytes):

- SHA-256 `a80b6c83c6e916e3987ac2cbfb710c76c458457321c91a4c4f5de18f9be8c6a1` matches `PACKAGE_SHA256`.
- Manifest `BUILD_COMMIT` is `55f8a78dbdb21b349a224968bfffa247e15d5e41`. Package version `1.0.0`. Bind `127.0.0.1`.
- All 14 listed file hashes matched the extracted files. See `evidence/package-sha256.txt`.

## Acceptance results

| Check ID | Result | Tested scope | Actual observation | Evidence path | Finding ID |
|---|---|---|---|---|---|
| AC-001 | PASS | Claim register versus packaged canvas labels. Primary pages were not re-fetched. | Canvas labels stay inside the register: Preview on Apps SDK, Beta/GA/Limited beta on AgentKit parts, Codex Preview then GA, 10× marked OpenAI-reported, mini −70%/−80% as vendor figures, no prices, no attendee counts. S02 copy is "Software runs in chat", not an OS claim. | qa/20261003-b4fb-qa-001/report.md | null |
| AC-002 | PASS | Cue map in `references/scenes.md` versus the Space walk. Spoken Thai was not read aloud. | Each scene's held English line matches that scene's visual job and claim IDs. Owner rehearsal of the Thai narration is still the final-review step. | evidence/browser-walk2.json, evidence/final-boundary.json | null |
| AC-003 | PASS | Content scenes, visual plan, extracted `index.html`, rationale Doc notes | S01–S10 exist and agree. S01 is the first cover. No extra scene id in the package. | evidence/package-sha256.txt | null |
| AC-004 | PASS | 1920×1080, 1280×720, 1600×1000 | Stage ratio 16:9. 1920×1080 and 1280×720 fill the viewport. 1600×1000 letterboxes a 1600×900 stage at y=50. overflowY 0. | evidence/browser-walk.json | null |
| AC-005 | PASS | Settled text and overflow. Per-beat screenshots were not saved. | Walk text matches the planned English lines. overflowY 0 at the three viewports. No clipped scroll. | evidence/browser-walk.json, evidence/browser-walk2.json | null |
| AC-006 | PASS | Ordinary phrases in packaged `index.html` | Every ordinary phrase is 8 words or fewer. Essential labels are listed in the scene table. No Thai in app sources. `lang=en`. | qa/20261003-b4fb-qa-001/report.md, evidence/smoke-results.json | null |
| AC-007 | PASS | DOM chrome search and S04 arrow role | No nav, progress, hints, scene numbers, or control panel. `ui_chrome_suspects` empty. S04 has one downward content arrow to MCP, `aria-hidden`, not a control. Presenter dot is the only overlay. | evidence/smoke2-results.json | null |
| AC-008 | PASS | Space, R, Left, F, P on the extracted package. Windows launcher keys not run. | 1250 ms settle: 40 Spaces reach S10 beat 3; one more Space stays on S10 beat 3. R returns S01 beat 0 wordmark. Left from S10 goes to S09 final beat. Headless F set `fullscreenElement`. P hid the dot. Editable targets and modifier keys are ignored in `app.js`. | evidence/final-boundary.json, evidence/reduced-motion-keys.json, evidence/browser-walk2.json | null |
| AC-009 | PASS | Beat walk against the scene plan | Space reveals the planned line, then hold. Motion timers are entry, reveal, and exit only. 30 s holds did not drift. | evidence/final-boundary.json | null |
| AC-010 | PASS | Full walk plus 30 s clocks on S10 beat 3 and S01 beat 0. Other scenes were not each held 30 s. | No auto-advance. Extra Space on the final beat stays. S10 beat 3 and S01 beat 0 were unchanged after 30 s. | evidence/final-boundary.json | null |
| AC-011 | PASS | R during S01 reveal, final-scene Space, Left boundary | R during the title reveal returned S01 beat 0. Extra Space stayed on S10 beat 3. Left from S10 opened S09 beat 3. | evidence/reduced-motion-keys.json, evidence/final-boundary.json | null |
| AC-012 | PASS | `prefers-reduced-motion: reduce` | `data-reduced=1`. A 600 ms Space walk reached S10 beat 3 and extra Space stayed. Same scene ids and endpoints as the normal walk. An earlier short wait stopped mid-deck; that wait was too short to settle, and the later settle walk completed. | evidence/final-boundary.json, evidence/browser-walk.json | null |
| AC-013 | PASS | Packaged fonts, wordmark, blossom | Served font and wordmark hashes match the manifest. S01 cover mode is wordmark. Blossom file is in the ZIP and hidden unless the wordmark has no paths. No WebGL. | evidence/smoke-results.json, evidence/package-sha256.txt | null |
| AC-014 | PASS | Keyboard, lang, alts, status words. No contrast-ratio tool. | `lang=en`. Beat alts in `scenes.js` are English and are not painted. Status is a word plus color. Space/R/Left work without clicks. Live region is screen-reader only. | qa/20261003-b4fb-qa-001/report.md | null |
| AC-015 | PASS | Qualitative hold target from `04_BUILD.md`. No millisecond startup figure. | Holds do not keep a scene-changing timer. S10 and S01 stayed fixed for 30 s. Console errors empty. No narration-disrupting error. | evidence/final-boundary.json, evidence/browser-walk.json | null |
| AC-016 | PASS | Console, network, one headless fullscreen request | Console errors empty. No external http(s) requests during the walks (SVG `xmlns` only in source). Headless F entered fullscreen. Browser-owned fullscreen toasts were not observed. | evidence/browser-walk.json, evidence/offline-space.json | null |
| AC-017 | PASS | Downloaded ZIP, not the git checkout | 71064 bytes. SHA-256 matches. Manifest commit and 14 file hashes match the extract. | evidence/package-sha256.txt | null |
| AC-018 | PASS | This assignment branch, owner folder id, status | Branch `project/openai-devday-20261003-b4fb` is the recorded run. Owner folder `1QU7tkNth3-1W_4fPvptXqqck6OY2v3yy` is reused. Technical files stay in GitHub. | WORKFLOW_STATUS.md | null |
| AC-019 | PASS | ZIP readback plus rationale Doc. PDFs and narration Doc were not re-opened; status already lists them READY. | Five owner artifacts are recorded READY. Rationale Doc `1l2QblFVexHdVPvGv10Vj2bIiSInq47MOsRwX-x4OBrY` is readable Thai and contains scene notes. Extracted `README_TH.md` is Thai and names the one-time Python 3 prerequisite. | WORKFLOW_STATUS.md, evidence/package-sha256.txt | null |
| AC-020 | PASS | ZIP, report, evidence JSON | No credential values. Ephemeral loopback server tokens in the attached smoke state were redacted before commit. | evidence/README.md | null |
| AC-021 | PASS | Linux helper, offline Space, occupied-port note, repeat serve, absolute stop, unrelated PID. Windows launchers NOT_RUN. | See the package section below. Assets are local. Server binds 127.0.0.1. Ordinary launch has no npm install. | evidence/smoke-results.json, evidence/smoke2-results.json, evidence/offline-space.json | null |
| AC-022 | PASS | Mouse inside the stage; P toggle. Touch was not used. | Inside the stage the dot is 14×14 `rgb(34, 211, 238)`, not hidden. It is `aria-hidden` and not a control. P set the dot hidden. | evidence/browser-walk.json, evidence/reduced-motion-keys.json | null |
| AC-023 | PASS | Packaged S01 and R reset | First scene is S01. Cover dataset `wordmark`. R returns beat 0 wordmark. Authentic wordmark SVG is packaged; blossom fallback is packaged and hidden. | evidence/final-boundary.json, evidence/smoke-results.json | null |
| AC-024 | PASS | App sources, DOM lang, owner-edition status | App canvas and alts are English. `html lang=en`. No Thai in app sources. Narration, PDFs, rationale, and `README_TH.md` are the Thai owner set. Rationale Doc read as Thai. PDFs were not re-read. | evidence/smoke-results.json | null |

## Scene, state, and copy audit

Ordinary words are whitespace tokens after the middot is treated as a separator. Essential chart or status labels are excluded from the 0–8 ordinary budget and listed here. Counts are for the fullest held state.

| Scene | Narration/claim IDs | States checked | Ordinary copy / essential labels | Ordinary / excluded / total | Stable hold | Evidence | Result |
|---|---|---|---|---|---|---|---|
| S01 | C01 | Entry wordmark, title reveal, R reset, 30 s on beat 0 | OpenAI DevDay 2025. No essential label. | 3 / 0 / 3 | 30 s unchanged after R | evidence/final-boundary.json | PASS |
| S02 | C02, C18, C19 | Space reveal of the line | Software runs in chat | 4 / 0 / 4 | Held through settle waits | evidence/offline-space.json | PASS |
| S03 | C01, C18 | Walk text | Four pillars. Labels: Apps, Agents, Codex, Models, API | 2 / 5 / 7 | Held through settle waits | evidence/browser-walk2.json | PASS |
| S04 | C02, C03, C05, C20 | Walk text; one content arrow | Apps SDK · Preview. Label: MCP | 3 / 1 / 4 | Held through settle waits | evidence/browser-walk2.json | PASS |
| S05 | C04, C05 | Walk text | Partner demos. Labels: Coursera, Canva, Zillow | 2 / 3 / 5 | Held through settle waits | evidence/browser-walk2.json | PASS |
| S06 | C06, C19 | Walk text | AgentKit | 1 / 0 / 1 | Held through settle waits | evidence/browser-walk.json | PASS |
| S07 | C07, C08, C09, C10, C20 | Walk text | Status matters. Labels: Builder, Beta, ChatKit, GA, Evals, GA, Guardrails, Connectors, Limited, beta | 2 / 10 / 12 | Held through settle waits | evidence/browser-walk2.json | PASS |
| S08 | C11, C12, C13, C20 | Walk text | Codex is GA. Labels: Slack, SDK, Admin, 10×, OpenAI-reported | 3 / 5 / 8 | Held through settle waits | evidence/browser-walk2.json | PASS |
| S09 | C15, C16, C17, C19 | Walk text and pointer sample | API fuel. Labels: GPT-5 Pro, Sora 2, mini, −70%, −80% | 2 / 7 / 9 | Held through settle waits | evidence/browser-walk.json | PASS |
| S10 | C19, C20, C05, C07, C08, C11 | Final beat, extra Space, 30 s | Platform first. Labels: Apps, Preview, Agents, Codex, GA | 2 / 5 / 7 | Beat 3 unchanged for 30 s; extra Space stayed | evidence/final-boundary.json | PASS |

Guardrails is a name with no maturity word on the chip. Agents on S10 has no status chip. That matches the announced-versus-shipped rule.

## Local package, offline, and recovery (AC-021)

Executed on Linux against the extracted archive:

- `--host 0.0.0.0` exits 2 with "This helper binds 127.0.0.1 only."
- Serve with an absolute `--app` path came up on port 8941 after the occupied-port hop from 8940. `index.html` returned 200 and `lang=en`.
- Font, wordmark, `app.js`, `scenes.js`, and `styles.css` returned 200 and the recorded hashes.
- A second `--serve` printed `READY http://127.0.0.1:8941/` and exited 0.
- `--stop` with an absolute `--app` exited 0. This VM repeated that stop against pid 2635 and the port then refused connections.
- An unrelated PID is refused (exit 2, "Refusing to stop a process that is not this package server.") and the sleep process stayed alive.
- Offline Chrome: after `setOfflineMode`, Space moved S01 beat 0 → beat 1 → S02 beat 0 ("Software runs in chat"). Failed request list empty. External request list empty.
- App sources contain no runtime `http(s)` URLs except SVG `xmlns="http://www.w3.org/2000/svg"`.
- `README_TH.md` in the ZIP tells the owner to install Python 3 once and then run offline. No npm install step.

Windows portion: NOT_RUN. This result does not say `START.bat` or `STOP.bat` passed.

## Observations

These are not material findings. They are not in `OPEN_FINDINGS`.

1. Relative `--app app` makes `owned_process` fail, so `--stop` refuses (exit 2). `START.bat` and `STOP.bat` pass absolute `%APP%`, so the Windows launcher path is not affected. Captured refuse text is in `evidence/smoke2-results.json`.
2. Rationale Doc `1l2QblFVexHdVPvGv10Vj2bIiSInq47MOsRwX-x4OBrY` still says the Drive ZIP upload is not confirmed. That sentence is stale relative to current `PACKAGE_FILE_ID` `1Ia1Z9ynXPf2PHu9sAXAV2_Qjl7X8498-`. Scene notes are present. Documentation drift only. Builder should refresh that sentence on the next touch.

## Findings

No material findings.

| Finding ID | Affected scene/scope | Severity | Expected behavior | Observed behavior | Evidence | Required correction | Tested commit | Current status |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

`OPEN_FINDINGS: []`

## Compact handoff

~~~text
Result: QA_PASS
Tested package: https://drive.google.com/file/d/1Ia1Z9ynXPf2PHu9sAXAV2_Qjl7X8498-/view?usp=drivesdk version 1.0.0 SHA-256 a80b6c83c6e916e3987ac2cbfb710c76c458457321c91a4c4f5de18f9be8c6a1 source 55f8a78dbdb21b349a224968bfffa247e15d5e41
Environment: Linux cloud, Chrome headless, Python 3.13.5 (attached session) and Python 3.12.3 (this probe). Windows launcher NOT_RUN.
Evidence: qa/20261003-b4fb-qa-001/report.md
Owner documents: five READY records in WORKFLOW_STATUS.md. Rationale Doc readable; ZIP sentence is stale (observation).
Open findings: none
Next actor/action: Owner — download the ZIP, run START.bat and STOP.bat on Windows, rehearse S01–S10, then confirm FINAL_REVIEW.
~~~
