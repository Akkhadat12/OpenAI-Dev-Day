# 04_BUILD.md — Agent 4: Builder

Build defines execution. This brief exists before implementation; Builder fills the project choices and records the actual result in BUILD_NOTES.md.

## Shared contract — mandatory for every agent

This is one of five reusable workflow templates, version 1.7, dated 2026-10-01. The master copies live in 00_WORKFLOW, the reusable template library:
https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n

For a topic, Agent 1 copies all five templates into the chosen GitHub repository and fills their project sections. The five master templates remain reusable. Topic-specific technical files are maintained in GitHub; do not mirror them back into Drive.

### Drive organization — templates and project outputs

~~~yaml
WORKFLOW_FOLDER: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
WORKFLOW_FOLDER_ID: 1WcszSRTyebajZj1FuLE-wCuKehyInE8n
TEMPLATE_LIBRARY_URL: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
WEB_LANGUAGE: English
NARRATION_LANGUAGE: Thai
OWNER_DOCUMENT_LANGUAGE: Thai
QUICK_START_LANGUAGE: Thai
TOPIC_DRIVE_PARENT: https://drive.google.com/drive/folders/153uw4BMBT78VS6TQgGelanIzXPomkzZt
TOPIC_DRIVE_PARENT_ID: 153uw4BMBT78VS6TQgGelanIzXPomkzZt
~~~

00_WORKFLOW contains only START_HERE.md and the five reusable workflow specifications. Agent 1 reads all six here before bootstrap. Do not create topic folders or owner outputs in 00_WORKFLOW.

01_PROJECTS is the only default parent for future owner folders. Agent 1 creates <Topic Name> - <PROJECT_ID> under this exact parent, then records the returned OWNER_DRIVE_FOLDER URL/ID in README.md and WORKFLOW_STATUS.md. The parent and topic-folder identity are different fields.

Later agents reuse that exact recorded owner folder and ID; never create new/final/v2/replacement/duplicate topic folders. Keep the same four owner-facing documents and the current runnable ZIP package there; technical workspace files stay in GitHub and are not mirrored into each project folder. Do not recreate or relocate an existing run's folder merely because the library was reorganized.

### FRESH bootstrap and continuation are distinct

- Entry through START_HERE.md is always BOOTSTRAP_MODE=FRESH. Agent 1 receives the workflow folder, TOPIC and GITHUB_REPOSITORY and starts a new assignment even in an old repo. Old README/status is historical context, never current state or an instruction to resume.
- Inspect the actual default branch and existing branches first. Generate a unique PROJECT_ID and create a new uniquely named normal Git branch from an appropriate existing base, preserving repository history and compatible infrastructure. Record DEFAULT_BRANCH, the chosen base/commit, BRANCH and exact BRANCH_URL. A name such as project/<topic>-<date-or-project-id> is recommended, not mandatory. Never automatically reuse an old assignment branch.
- Main/default branch is READ-ONLY BY DEFAULT for FRESH work; write there only on an explicit owner instruction. Never reset, delete, rename, overwrite or force-push an old branch; never delete Git history or the repository. All agents work only on this assignment's exact branch unless the workflow explicitly changes it. An interrupted bootstrap retries its already created branch; a later branch-URL continuation never creates another assignment.
- On the new branch initialize fresh README.md, WORKFLOW_STATUS.md and the five current specifications. Start PLANNING/Content with no inherited thesis, scenes, narration, Drive folder, workflow stage, QA findings/pass, build/deployment identity, production verification, blockers or NEXT_ACTOR/NEXT_ACTION. Reuse compatible tooling/configuration, not stale assignment values. Consult old content only as historical/reference material when explicitly useful and revalidate it.
- Cleanup is limited to files clearly belonging to the previous assignment and only on the new branch. Preserve .gitignore, package-manager setup, reusable tooling, repository settings, compatible framework/deployment configuration and CI/CD as appropriate. Never change old branches or main/default during cleanup. If ownership or compatibility is unclear, preserve the file and document the ambiguity and handling in references/bootstrap-notes.md; do not delete blindly. Record the chosen base and scoped cleanup there.
- Persist/push this run's PROJECT_ID and branch in seed README/status before cloud creation. Agent 1 creates one owner folder per PROJECT_ID under 01_PROJECTS, named <Topic Name> - <PROJECT_ID> for recovery; another FRESH run is separate. Retries recover the same recorded folder. Later agents reuse the exact OWNER_DRIVE_FOLDER and OWNER_DRIVE_FOLDER_ID and cannot create replacements.
- Initialize DELIVERY_MODE=LOCAL_ZIP, PUBLIC_DEPLOYMENT_REQUIRED=false, PACKAGE_STATE=NOT_BUILT, PACKAGE_IDENTITY=NOT_VERIFIED, OPEN_FINDINGS=[] and QA_RESULT=NOT_RUN. Vercel/hosting credentials are not required. Preserve old deployments and provider configuration; do not deploy or change them for a local assignment.
- An old public URL, deployed build, archive or QA pass is not evidence for this assignment. Builder creates a versioned prebuilt ZIP, records BUILD_COMMIT, package SHA-256, manifest and verified download identity. All fix cycles replace the current package with a new identified version while preserving finding history.
- An exact BRANCH_URL plus “Continue this project from the current workflow state.” always continues its recorded PROJECT_ID. Later agents discover roles from README/status and follow REQUIRED_INPUTS. BOOTSTRAP_MODE=FRESH describes how the run began; it never tells later agents to restart, reset findings, create another branch or create a new folder.

### Start, identity, and scope

1. For continuation of an initialized run, open README.md first on the supplied GitHub branch, then open the latest committed WORKFLOW_STATUS.md immediately after. Read NEXT_ACTOR and NEXT_ACTION and infer your workflow role from repository state before doing any work. Verify PROJECT, REPOSITORY, BRANCH, BRANCH_URL, PROJECT_ID, STAGE, required inputs, OPEN_FINDINGS, BLOCKERS, OWNER_DRIVE_FOLDER, DELIVERY_MODE, PACKAGE_DOWNLOAD_URL, PACKAGE_SHA256, and LOCAL_RUNTIME. The owner supplies only the current branch URL and “Continue this project from the current workflow state.”; the owner does not assign later agents their roles.
2. After FRESH bootstrap has chosen its new branch, or for a continuation request, clone or locate that exact repo and check out that exact branch. A local checkout path is machine-specific; all durable file references are relative to the repo root. Never depend on chat memory, another agent's temporary directory, or an owner's machine path.
3. Read all project files required by the discovered stage and its REQUIRED_INPUTS, plus upstream specifications and the acceptance criteria in 05_QA.md, before work. Perform the recorded stage. Do not silently change the thesis, content, design rules, branch, Drive folder, or package/runtime identity.
4. Respect recorded owner decisions. Raise a reasoned objection when evidence contradicts a proposed claim. Do not agree merely to please the owner. Never ask the owner to repeat the role, instructions, thesis, project paths, Drive folder, package link, findings, scene numbers, or build status already recorded in the repository. The owner acts as dispatcher and decision-maker, not as a relay between agents. Ask only for essential missing decisions or access that the repo cannot supply; continue independent work.
5. Record unresolved values as UNSET, NOT_CREATED_YET, NOT_BUILT, or NOT_VERIFIED, with the next action. Never invent repo URLs, folder IDs, commit hashes, source evidence, access, package or QA success.
6. Work sequentially on the active branch. Detect upstream changes before committing; preserve others' changes, avoid force-pushes, and resolve conflicts explicitly. An agent handoff is durable only after the commits are pushed and their files are readable on the remote branch.

### Local ↔ Cloud execution and capability-aware handoff

- Roles are independent of execution location. Content, Design, Visual, Builder and QA may run locally or in cloud environments. Choose an executor with the capabilities needed for the current task; do not force Cloud=Research or Local=Build.
- Builder and QA remain independent reviewers even if both use the same type of environment or the same Windows machine. Changing location alone does not make Builder's self-check independent QA.
- Before a switch, save work, commit/push durable source/specifications/reports and update status with exact artifact identity, actual execution environment, unfinished tasks and next action. Verify the remote branch is readable. Uncommitted files, another machine's checkout, cloud session memory and localhost URLs are not a handoff.
- On receipt, read remote README/status on the exact assignment branch; fetch and check out/update from the latest remote state before edits. Inspect dirty local work first and preserve it; never reset, overwrite or blindly pull over it. Resolve divergent work explicitly. Work sequentially on the branch, and recheck remote changes before committing/pushing.
- All portable references use repo-relative paths or observed persistent artifact URLs. Record package source/version/SHA-256. Local absolute paths may appear only in environment-specific run evidence or command examples, never as the next executor's required file location.
- Record EXECUTION_MODE=LOCAL/CLOUD/UNKNOWN and actual OS/runtime/browser where observed. Unknown values stay NOT_VERIFIED. Record what was executed separately from code inspection, assumptions and owner reports; do not invent installed tools, credentials or test results.
- Check only services needed by the current subtask using safe reads or already authorized operations. Record READ_VERIFIED, WRITE_VERIFIED, READ_ONLY, BLOCKED, NOT_VERIFIED or NOT_REQUIRED with scope/evidence. A successful read does not establish write access. Do not create/delete test resources or broaden permissions just to probe access.
- Missing Drive access does not prevent independent source work or package tests. Record the pending publication/document subtask and route it to a capable executor on the same branch with the same folder/file IDs. It does not make required owner artifacts optional: do not advance a stage gate or mark delivery complete until its required artifacts are verified.
- An intermediate handoff is allowed with the current unfinished stage preserved (for example BUILDING), explicit PENDING_SERVICE_TASKS and NEXT_ACTOR/NEXT_ACTION. Do not mark that stage complete merely to switch agents. If the core task cannot proceed, set BLOCKED and retain BLOCKED_FROM_STAGE.
- A Windows local agent may execute START.bat/STOP.bat and target-browser checks against the exact delivered archive. A cloud agent with actual Windows access may do the same; a Linux/macOS cloud run cannot certify Windows execution. Record actual Windows evidence and archive hash, not execution location as a proxy for OS.
- Resume existing verified work when source/package bytes are unchanged. Complete the pending environment-specific checks and affected regressions; do not rebuild/restart the assignment solely because the executor changes. Changed runtime/assets/launchers require a new package identity and independent affected QA.
- If a Windows check fails after a scoped cloud pass, record a stable finding and route Builder → independent QA retest. Preserve the previous evidence, but invalidate affected readiness/pass claims for that package. Keep owner acceptance separate from technical test evidence.

### Language contract — English canvas, Thai owner editions

~~~yaml
WEB_LANGUAGE: English
NARRATION_LANGUAGE: Thai
OWNER_DOCUMENT_LANGUAGE: Thai
QUICK_START_LANGUAGE: Thai
~~~

- All app-authored audience-facing presentation text is English: first cover, titles, annotations, diagram/chart labels, legends, units expressed in words, permitted attribution and any fallback/error text inside the Webapp. Keep the existing 0–8-word ordinary-copy target and clean-canvas rules.
- On-page semantic descriptions, alternative text and accessible labels are English as well. Set the presentation document language to en. Browser/OS-owned interface text is outside this app contract.
- Proper names, authentic brand wordmarks, numerals, currency/unit symbols and standard technical abbreviations retain their correct form. This is not permission to add Thai or mixed-language explanatory text to the canvas.
- Audit text baked into images/video/screenshots and every reveal/hold/reset/fallback state. Prefer an authentic English-language asset/version or an appropriate truthful crop if source material contains other-language prose. Do not redraw, translate or materially edit an official logo/real image in a way that misrepresents it. An indispensable non-English source inscription requires an explicit recorded owner exception before it is used; do not silently relax English-only.
- Spoken narration, both reading/research PDFs, final scene rationale and the owner quick-start are Thai by default. English technical terms and exact original source titles/quotations may remain where needed for precision. Editable narration/rationale remain Thai Google Docs.
- Technical workflow specifications, source code and agent QA/build reports are not audience canvas or owner reading editions; their working language does not determine WEB_LANGUAGE.
- Record any explicit owner language override and affected artifacts in status. Do not infer language from a topic, folder, execution environment, Thai narration or source publisher.

### Drive ownership and storage

- Only Agent 1 (Content/Research) may create the per-topic owner folder for a FRESH assignment. Create at most one folder per PROJECT_ID directly under the recorded TOPIC_DRIVE_PARENT=01_PROJECTS, named <Topic Name> - <PROJECT_ID>. Never create it in WORKFLOW_FOLDER=00_WORKFLOW. Reuse a folder only when verified as this same run during continuation/bootstrap recovery; never import an older run's folder. Commit/push its returned URL/ID before owner-document writes.
- Record the real OWNER_DRIVE_FOLDER URL and OWNER_DRIVE_FOLDER_ID immediately in README.md and WORKFLOW_STATUS.md. The library/root folder and the per-topic folder are different fields.
- Agents 2–5 must reuse the exact topic folder recorded in the latest committed WORKFLOW_STATUS.md. They must never create a second assignment folder, including a “new”, “final”, “v2”, duplicate, or replacement folder.
- Before every Drive write, read the latest committed folder ID/URL and verify folder access. Missing, conflicting, or inaccessible folder records are a blocker; later agents request Agent 1 to repair the record rather than guessing or creating a replacement.
- Preserve existing sharing and ownership. “Folder owner” here identifies the workflow creator; it does not instruct agents to transfer Google Drive ownership or broaden permissions.
- GitHub owns README.md, WORKFLOW_STATUS.md, 01–05 specifications, BUILD_NOTES.md, references/, assets/, src/, dependency lockfiles, and qa/ evidence. Use repo-relative paths.
- Drive owns the owner's reading, rehearsal, and rationale deliverables: 01_KNOWLEDGE_SUMMARY.pdf, 02_RESEARCH_AND_ANALYSIS.pdf, 03A_NARRATION_SCRIPT (editable Thai Google Doc), 06_SCENE_RATIONALE (final Thai Google Doc), and the current <PROJECT_ID>-<PACKAGE_VERSION>-local.zip package. Other Drive documents require an explicitly owner-facing purpose.
- Research notes and narration in 01_CONTENT.md are canonical authoring inputs. Drive reading documents are owner-facing editions generated from those inputs; log their source commit and refresh them when the inputs change. Owner edits in Drive must be reconciled into GitHub before downstream work continues.
- Before creating a Drive deliverable, consult its recorded file ID. Update the existing file when possible, preserving its identity. If replacement is necessary, record the superseded ID and current ID; do not leave several files ambiguously marked current.
- Every Drive artifact record includes file ID, observed URL, MIME/type, responsible agent, state, source commit, and last verification time. In-progress or failed writes cannot be marked READY.
- Secrets and credential values never belong in Markdown, Git, Drive, screenshots, or logs. Record environment variable names and configuration state only.

### Handoff and evidence

Deliverables and status must agree. Use this procedure:

1. Finish the stage's artifacts; verify its exit criteria. Commit and push the artifacts. Let the real resulting SHA be D.
2. Update WORKFLOW_STATUS.md with ARTIFACT_COMMIT=D, what was checked, evidence paths, Drive IDs/URLs, blockers, next actor, explicit next action, and exact required files. Preserve unrelated records.
3. Commit and push the status update as a separate handoff commit H. Do not put H's own hash inside H: that creates a self-referential hash problem. Record D in status and report the remote branch URL and H to the owner.
4. LAST_VERIFIED_COMMIT means the exact commit actually inspected. BUILD_COMMIT, PACKAGE_SHA256 and QA_TESTED_COMMIT have separate meanings; record only observed identities. Documentation-only status changes do not invalidate a tested package. Changed runtime source/assets/dependencies/launchers require a newly built package and affected QA.
5. Read back the remote status and verify recorded Drive artifacts. A failed push, upload, package build, or check stays PENDING/FAILED/BLOCKED with the reason and recovery action. Never advance a stage merely because a file exists.

Transitions:
PLANNING → READY_FOR_DESIGN → READY_FOR_VISUAL → READY_FOR_BUILD → BUILDING → READY_FOR_QA → QA.
If checks pass with no unresolved material findings: QA → QA_PASS.
If checks fail: QA → QA_FAIL → FIXING → READY_FOR_QA → QA. Repeat the fix/retest loop until QA_PASS.
Agent 4 publishes BUILDING or FIXING before implementation; Agent 5 publishes QA before testing. Only Agent 5 may set QA_PASS after independent retesting. QA never changes runtime code or builds fixes to close its own findings. Builder never marks its own build QA_PASS.
For access/missing decisions: set STAGE=BLOCKED and retain BLOCKED_FROM_STAGE; after resolution resume that stage.
After QA_PASS: owner final review/rehearsal and Windows smoke check → COMPLETE when agreed delivery is verified and decisions are recorded. A cloud/browser pass is scoped to its actual environment, not proof that START.bat/STOP.bat worked on Windows. Preserve useful work if owner-machine verification is pending; report it explicitly.

Upstream changes invalidate affected downstream artifacts. Record INVALIDATED_BY_COMMIT, reset their status to STALE, and route NEXT_ACTOR to the earliest affected stage. Do not build from stale content or claim QA on an earlier package.

### Formal findings and local package contract

- Every material QA finding has a stable project-wide ID QA-001, QA-002, etc.; allocate monotonically and never renumber or reuse it. Each record includes scope, severity, expected/observed behavior, evidence, correction, tested source/package identity and state.
- Finding states: OPEN, FIX_IN_PROGRESS, FIXED_PENDING_RETEST, REOPENED, CLOSED. Only independent QA closes a finding after retest; keep all unresolved material IDs in OPEN_FINDINGS.
- Builder owns code, launchers, build notes, package assembly and identity. At QA_FAIL it publishes FIXING, records per-ID fix commits/responses, builds a new version of the same assignment's ZIP, verifies its SHA-256 and refreshes affected owner documents.
- QA independently downloads/extracts the exact identified package into a clean directory, verifies its SHA-256/manifest, runs the prebuilt payload through loopback HTTP, and tests that package rather than the developer checkout. It records actual source identity, archive hash, environment, commands and evidence. A prior package's pass cannot transfer to changed runtime bytes.
- Cloud QA uses its own localhost. Its localhost URL is temporary and is not an owner-download link or a portable handoff reference. The owner runs the downloaded package on their own Windows computer.
- The required delivery is a prebuilt static Webapp ZIP with START.bat, STOP.bat, a Thai quick-start guide, packaged assets, a standard-library local server helper, and a manifest. Choose one tested runtime (Python 3 by default, or a documented compatible Node.js launcher); disclose the one-time prerequisite. Ordinary launches must not require npm install, a build, credentials, Vercel or network downloads.
- Bind the server only to 127.0.0.1. Support paths with spaces and Thai characters, occupied ports, repeat starts, missing runtime, readiness before opening a browser, and stopping only the package-owned process. Do not terminate unrelated processes or weaken browser security.
- Default OFFLINE_AFTER_SETUP=true: images, fonts, media, scripts and data needed for presentation are packaged. Test with external requests unavailable after initial runtime setup. Never substitute a generated image for authentic factual material.
- Store the current ZIP as the fifth owner-facing deliverable in the exact recorded topic Drive folder. Update its recorded file ID where possible and verify a usable observed download/file URL. If Drive delivery is blocked, preserve the repo and package; report the delivery blocker rather than claiming completion.
- Record DELIVERY_MODE, TARGET_OS, LOCAL_RUNTIME, BUILD_COMMIT, PACKAGE_VERSION, PACKAGE_PATH, PACKAGE_MANIFEST_PATH, PACKAGE_FILE_ID, PACKAGE_DOWNLOAD_URL, PACKAGE_SHA256, PACKAGE_STATE, QA_TESTED_COMMIT, QA_TESTED_PACKAGE_SHA256, QA_RESULT, OWNER_WINDOWS_SMOKE_RESULT and NEXT_ACTION. Never fabricate hashes, links or Windows test results.
- Public hosting is optional only upon a separate explicit owner request. It is not an entry/exit criterion for LOCAL_ZIP Build or QA; unavailable Vercel access must not block this route. Preserve historical cloud deployments.
- Presentation pointer and first cover are required: the pointer uses a theme-appropriate high-contrast color; S01 is the first cover and uses a verified authentic relevant image/official logo/character asset. These are detailed in Design/Visual/QA; the pointer is the explicit narrow exception to the otherwise clean canvas.

### Universal continuation prompt

~~~text
Continue this project from the current workflow state:
<the actual BRANCH_URL>

Open README.md first, then immediately open WORKFLOW_STATUS.md from that branch.
Verify the repo/branch, follow NEXT_ACTOR and NEXT_ACTION, and read the recorded required inputs and 05_QA.md.
Use repo-relative paths. Reuse the exact OWNER_DRIVE_FOLDER and package identity in status.
Fetch the latest branch, preserve local uncommitted work, inspect recorded environment/capabilities and finish pending subtask checks without restarting the assignment.
Discover your role from NEXT_ACTOR and NEXT_ACTION; do not ask me to assign it.
Do not ask me to repeat instructions, role, paths, thesis, Drive/package URLs, QA findings, or build status already recorded.
Complete the stage, verify its exit criteria, push its artifacts, and push an updated WORKFLOW_STATUS.md.
Return the branch URL, handoff commit, next action, and any real blocker.
~~~

The prompt is sufficient only when the agent has access to the repo and the services required by its stage. Missing credentials are reported precisely; they are never assumed.

## Role, inputs, and deliverables

Read README.md, WORKFLOW_STATUS.md, all five specifications, assets/manifest.md and existing implementation. At READY_FOR_BUILD publish BUILDING; at QA_FAIL read all OPEN_FINDINGS and publish FIXING before changing implementation.

Deliver runnable source and portable assets, filled implementation choices, BUILD_NOTES.md, an identified prebuilt LOCAL_ZIP and final Thai 06_SCENE_RATIONALE in the same owner folder. Vercel/public hosting is not required. Preserve any historical deployment.

Do not create another folder, change a factual claim without Content review or replace planned scenes with generic slides.

## Implementation procedure

1. Read the acceptance criteria before selecting a stack. Reuse the repo's established stack if suitable. React/HTML/CSS/JavaScript are valid choices; use Three.js/WebGL only where the visual plan establishes a spatial need.
2. Fill the architecture and commands below. Pin dependencies with a lockfile and provide a reproducible setup.
3. Implement a 1920×1080 logical 16:9 stage (or equivalent proportional canvas) fitted to the viewport with letterboxing. Keep essential content inside the defined safe area. No stretching, vertical reflow, unintended scrollbars, clipping, or browser-sized layout assumptions.
4. Separate scene data, narration cue metadata, visual components, and state/timeline logic. Scene IDs and data sources must trace back to 01/03.
5. Implement deterministic Transition → Reveal → Settle → Hold, with explicit entry/exit boundaries. Static scenes may go directly to hold. Cancel old timers/tweens on scene changes and unmount; never leave animations running under a held scene.
6. Mandatory controls only: Spacebar is the complete main forward route (may first complete/settle active motion, then reveal/advance in hold); R cancels motion and returns to cover initial state. Optional conveniences only: Left Arrow returns to the previous settled scene; F requests/exits fullscreen. No other default keys are required. Clicking visual objects is optional and never required. Ignore editable targets and modifier shortcuts, debounce repeats, and prevent accidental scrolling only for keys the stage handles. Document which optional controls are actually implemented.
7. Keep controls hidden: no control panel, navigation bar, Next/Back buttons, page/scene numbers, progress dots/bars, UI/navigation arrows, play bars, persistent menus/help/source panels, keyboard hints, header/footer, watermark, developer overlays or competing UI chrome. Implement only the Visual Plan's explanatory content arrows; these must be minimal, meaningful, subordinate and clearly unlike controls. Document keys externally.
8. Respect reduced-motion preferences; use stable equivalent states and the same presenter actions. Handle fullscreen rejection without a visible panel or claiming success.
9. Optimize images/video/fonts, preload only what is needed, dispose of graphics resources, and pause rendering where possible during hold. Provide a planned fallback for unavailable media or WebGL. Do not silently replace factual evidence with generated imagery.
10. Implement all audience-facing copy, labels, accessible descriptions and in-app fallback/error text in English; set HTML lang=en. Keep narration/owner documents/quick-start Thai. Check original media/cover inscriptions without altering authentic assets misleadingly. Verify ordinary visible copy, including media text, against each scene's default 0–8-word target. Preserve only justified essential chart/data label exclusions and record excluded and total counts. Keep script, detailed citations, and technical metadata out of the canvas.
11. Provide semantic descriptions and the separate reading/narration documents. Avoid color-only encodings. Recording mode cannot be an excuse for unusable keyboard navigation.
12. Implement the required theme-adaptive presenter dot and authentic S01 cover from 02/03. Package the verified original cover asset; it is visible on initial load and R reset. Pointer tracking is direct, stage-only, high-contrast, non-blocking, and has no trail/pulse. Normal cursor behavior returns outside the stage.
13. Build a static distributable with relative/base paths compatible with loopback serving and no necessary backend, cloud credentials, CDN or external API. Include all required runtime assets and fonts for offline use after prerequisite setup. A necessary live-data/backend requirement must be explicitly resolved before LOCAL_ZIP readiness.
14. Run relevant build/static checks and scene-level browser checks. Measure performance under recorded conditions; do not fabricate numerical results.

## Fillable implementation choices

~~~yaml
PROJECT_ID: <from status>
CONTENT_INPUT_COMMIT: <verified SHA>
DESIGN_INPUT_COMMIT: <verified SHA>
VISUAL_INPUT_COMMIT: <verified SHA>
FRAMEWORK: <chosen>
RUNTIME_VERSION: <Builder environment>
PACKAGE_MANAGER: <name/version>
LOCKFILE_PATH: <repo-relative path>
INSTALL_COMMAND: <Builder setup only>
DEV_COMMAND: <actual>
BUILD_COMMAND: <Builder command>
OUTPUT_DIRECTORY: <actual static output>
APP_ENTRY_PATH: <path>
SCENE_DATA_PATH: <path>
ASSET_MANIFEST_PATH: assets/manifest.md
CANVAS_STRATEGY: <fit/letterbox>
STATE_MODEL: <scene/beat/phase/cancellation>
ANIMATION_ENGINE: <chosen and reason>
REDUCED_MOTION_STRATEGY: <same endpoints>
WEBGL_FALLBACK: <behavior or NOT_APPLICABLE>
TARGET_BROWSERS: <actual planned versions/platforms>
WEB_LANGUAGE: English
DOCUMENT_LANG_ATTRIBUTE: en
OWNER_DOCUMENT_LANGUAGE: Thai
QUICK_START_LANGUAGE: Thai
PERFORMANCE_TARGETS: <targets and measurement conditions>
LOCAL_RUNTIME: <Python 3 default or documented Node.js alternative>
LOCAL_RUNTIME_TESTED_VERSION: <actual>
WINDOWS_RUNTIME_PREREQUISITE: <one-time installation and official setup instructions>
SERVER_BIND: 127.0.0.1
OFFLINE_AFTER_SETUP: true
POINTER_IMPLEMENTATION_PATH: <path>
COVER_ASSET_ID: <verified authentic ID>
PACKAGE_ASSEMBLY_PATH: delivery/
PACKAGE_MANIFEST_PATH: delivery/manifest.json
PACKAGE_VERSION: <unique version>
~~~

### Scene implementation map

| Scene ID | Component/runtime path | Content/claim IDs | Assets | Beat/hold implementation | Pointer/cover check | Fallback | Evidence |
|---|---|---|---|---|---|---|---|
| S01 | <path> | <IDs> | <authentic cover asset> | <states> | <initial/reset cover and contrast> | <authentic available fallback> | <paths> |

## Required local ZIP contents and launch behavior

Name the artifact <PROJECT_ID>-<PACKAGE_VERSION>-local.zip. Include one clearly named root folder with:
- app/: the already built HTML/CSS/JS/data and packaged images, fonts and media.
- START.bat: detects the selected runtime, starts this package's loopback server, waits for readiness and opens the browser.
- STOP.bat: stops only the server started for this package; leaves other apps and servers alone.
- serve.py or the selected equivalent: a standard-library server/helper, with no network dependency installation at launch.
- README_TH.md: short Thai instructions for runtime setup once, unzip/start/stop/restart, keyboard controls, pointer behavior, fullscreen, recording and basic troubleshooting.
- manifest.json: PROJECT_ID, PACKAGE_VERSION, BUILD_COMMIT, selected runtime and file hashes for the relevant payload/launcher assets.

Do not ship credentials, caches, another machine's absolute paths, node_modules as an unexplained substitute for a build, or an entire source checkout as the runnable deliverable. Source remains in GitHub. Use only legally redistributable included assets.

Default to an installed Python 3 runtime and its standard library; a documented Node.js choice is allowed when more suitable. Do not claim “no installation needed” unless a genuinely self-contained runtime is included and tested. Do not silently install software, download dependencies, change firewall rules or disable browser protections.

Serve only 127.0.0.1, never 0.0.0.0. Resolve paths relative to the package/launcher, including directories with spaces and Thai characters. Handle runtime absence with an actionable message, occupied ports with safe selection, repeat starts without unwanted duplicate servers, startup readiness and orderly stop/restart. Use package-specific process identity and verify it before stopping; never kill arbitrary PIDs by port alone. Keep transient process files out of Git and package identity.

## Build, package identity and owner delivery

1. Finish runtime source, assets, launcher/helper code and configuration. Commit/push them and record the exact BUILD_COMMIT. Build and assemble from that source. Record actual commands and environment.
2. Populate manifest with source/version and per-file SHA-256 hashes. Do not embed the ZIP's own SHA in that ZIP; compute its archive SHA-256 after final assembly and record it externally in status/evidence.
3. Extract the finished ZIP into a fresh directory and run its prebuilt app, not the source checkout. Check required scenes, cover/reset, pointer, controls, assets, no external runtime requests, stop/restart and fallback behavior.
4. Test Windows launchers on an actual Windows environment when available. If only cloud Linux/macOS is available, inspect launcher logic and test the shared helper/payload there, but record Windows execution NOT_RUN and provide an owner smoke check. Do not label inspection as an executed Windows test.
5. Read latest committed owner folder/file identities. Upload/update the current ZIP in that exact folder and verify observed file ID, URL, size/hash or byte-equivalent readback. A returned URL alone does not prove correct bytes. Do not broaden sharing. Record PACKAGE_VERSION, PACKAGE_PATH, PACKAGE_MANIFEST_PATH, PACKAGE_FILE_ID, PACKAGE_DOWNLOAD_URL, PACKAGE_SHA256, PACKAGE_STATE and verification evidence.
6. Create/update Thai 06_SCENE_RATIONALE against the actual source/package identity. A package URL is the owner link; a cloud localhost URL is not.
7. Set READY_FOR_QA only after source, manifest, archive and download identity agree and required artifacts are accessible. A missing package/asset/real delivery link is a blocker. Missing Vercel access is not a blocker for this mode.

## Local/Cloud continuation and partial service handoff

Build may run in either environment. Record actual OS/runtime/browser and service capability evidence. Before taking over, synchronize the exact remote branch safely and verify source/package identity. Preserve compatible completed work; do not rebuild solely because the environment changes.

If Drive publishing or rationale updates cannot be performed here, commit/push source, reproducible packaging code and verified evidence first. Make the package recoverable from committed assembly inputs or an observed persistent artifact link; an ephemeral cloud path is not recovery. Record exact pending tasks and route them to a capable Builder/delivery executor. Keep BUILDING/FIXING or BLOCKED as appropriate; READY_FOR_QA still requires the specified owner artifacts and delivery identity.

When a Windows-capable local or cloud executor is available, test the exact ZIP's launch/stop/restart and update evidence/hash/status. Otherwise preserve Windows NOT_RUN. Keep technical findings and independent QA responsibilities unchanged.

## BUILD_NOTES.md required contents

Actual setup/build/package/run commands and versions; chosen runtime prerequisite; package contents; launcher behavior; mandatory Spacebar/R and implemented optional keys; pointer tokens and behavior; authentic cover provenance/crop/reset; implemented scene map and deviations; measured checks with environment/time/evidence; source/archive identity; current owner URLs; limitations and Windows tests actually run or pending; Local/Cloud execution context, scoped service access and pending tasks for the next executor.

Do not confuse goals with observations, source-checkout checks with package checks or Linux checks with Windows results. Secrets never appear in notes/evidence.

## QA_FAIL → FIXING → READY_FOR_QA

Read all stable IDs and full report records, publish FIXING, route factual/design changes through their upstream owners and invalidate affected artifacts. Record each ID's correction, exact fix SHA and checks. Assemble a new versioned ZIP, recompute hashes, verify the same owner file/folder identity and refresh affected rationale/documents.

Mark addressed findings FIXED_PENDING_RETEST, leaving them in OPEN_FINDINGS. Record QA_RESULT=NOT_RUN for the changed package; prior runs remain historical. Return READY_FOR_QA with explicit finding IDs and regression scopes. Only QA closes findings or awards QA_PASS.

## Create 06_SCENE_RATIONALE in Drive

Reuse its recorded file ID in the exact owner folder. Write an editable Thai document containing project/version, BUILD_COMMIT, package version/hash and observed download link; each scene's spoken idea, actual image/visual, why it helps, reveal/settle/hold cues and uncertainties; authentic cover source versus illustrative material; pointer behavior and practical rehearsal notes.

No source code or developer report. Verify its content, ID, source/version and current state. Refresh after affected fixes.

## Exit criteria and handoff

- English-only scene/cover/label/accessibility/fallback copy and embedded-media language rules, with Thai owner editions, are verified.
- Planned scenes, clean 16:9 framing, copy budget, authentic S01 initial/reset cover, theme-adaptive pointer, Spacebar/R, stable hold, reduced motion and fallback checks pass.
- The prebuilt ZIP includes all required assets, launchers/helper, manifest and Thai quick-start. No required public deployment or runtime network installation.
- BUILD_COMMIT, archive SHA-256/version, verified owner package link and source/manifest identity agree.
- Rationale and other owner documents match the actual package. Windows execution is tested when available and otherwise honestly pending.
- Publish artifacts then status: READY_FOR_QA, NEXT_ACTOR=QA.
- NEXT_ACTION: “Read 01–05, BUILD_NOTES, OPEN_FINDINGS, package manifest and Thai rationale. Independently download/extract the exact PACKAGE_SHA256 archive, verify source identity, run its loopback payload offline, retest findings and regressions, and record actual environment/Windows verification limits. Return QA_PASS or QA_FAIL with evidence.”


