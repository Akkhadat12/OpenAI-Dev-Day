# 03_VISUAL_PLAN.md — Agent 3: Visual Director

Visual planning defines what the audience sees and why. Give Builder enough detail to implement each scene without asking the owner to choose objects or transitions.

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

## Role, inputs, and outputs

Read README.md, WORKFLOW_STATUS.md, 01_CONTENT.md, 02_DESIGN_SYSTEM.md, 04_BUILD.md, and 05_QA.md on the active branch.

Output: filled 03_VISUAL_PLAN.md plus asset specifications/provenance in the repo. Reuse the recorded topic Drive folder. Do not place this technical plan in Drive. Do not build the site or substitute a new thesis.

## Planning procedure

1. Select and verify the authentic S01 cover asset before readiness: a real relevant image/official logo/original character asset from a verifiable source, with recorded rights, resolution, crop and offline path. S01 initial state and R reset show it immediately; do not substitute generated imagery. Preserve content scene IDs and claim IDs. S01 is the cover; R must always return to that cover's initial state. Map every narration beat to a visual job. Flag missing or overloaded content and route it to Agent 1 rather than inventing assertions.
2. Choose 2D, chart, real material, 3D, or hybrid based on what improves understanding. Document why depth or complexity is necessary when used.
3. Define one focal subject, composition, scale, safe area, visual hierarchy, and what the audience should notice at each beat.
4. Specify actual data and encodings for charts. Include units, baseline, period, denominator, scale type, missing values, uncertainty, and source links/claim IDs. Schematic sizes cannot masquerade as measurements.
5. Select or specify assets with repo-relative paths, source, license/permission, attribution needs, crop/focal coordinates, resolution, fallback, and generation disclosure. Generated images support illustration; they are not documentary evidence.
6. Keep all scene copy, annotations and essential data labels in English. Audit embedded asset text, including the authentic cover; preserve true wordmarks/names and resolve any indispensable non-English inscription through a recorded owner exception. Validate each scene's ordinary visible copy against the default 0–8-word target across all reveals, including ordinary text baked into media and wordmarks. List excluded essential chart/data labels, units, numbers and legends separately, justify each, and record the total visible count. An explicitly approved Thai-canvas override requires linguistic segmentation. Essential attribution must fit the budget or the asset must change.
7. Build a narration cue map with entry, reveal, settle, hold, and exit. Motion stops at meaningful endpoints. Hold duration is presenter-controlled. Define each state's behavior for Spacebar, R-to-cover, rapid input and reduced motion; specify previous-settled-scene behavior only if optional Left Arrow is implemented, and fullscreen behavior only if optional F is implemented. Spacebar is the main forward control and the complete narration flow never requires clicking visual objects.
8. Prepare the technical brief inputs for Builder in this file, referencing the existing 04_BUILD.md. Do not declare implementation-ready while assets, data, or required decisions are unresolved.

## Fillable scene index

~~~yaml
PROJECT_ID: 20261003-b4fb
CONTENT_INPUT_COMMIT: fc124ac6157f48ad468d1ad36b8538b2b5183ea2
DESIGN_INPUT_COMMIT: 3a6d60b12f95f840697e56627b070d9a20b2d717
VISUAL_PLAN_VERSION: "1.0.0"
COVER_ASSET_ID: assets/cover/openai-wordmark-2025.svg
COVER_FALLBACK_ASSET_ID: assets/cover/openai-blossom-2025.svg
POINTER_SPEC_REFERENCE: 02_DESIGN_SYSTEM.md#presenter-pointer-and-authentic-first-cover
SCENE_COUNT: 10
SCENE_IDS: [S01, S02, S03, S04, S05, S06, S07, S08, S09, S10]
ASSET_MANIFEST_PATH: assets/manifest.md
WEB_LANGUAGE: English
NARRATION_LANGUAGE: Thai
CANVAS: 1920x1080
MEDIUM_SUMMARY: "S01 authentic wordmark. S02–S10 flat 2D diagrams and status chips. No 3D, no WebGL, no statistical chart."
ORDINARY_COPY_LOCK: "Exact strings from references/scenes.md and 02_DESIGN_SYSTEM.md. Do not paraphrase."
BLOCKERS_FOR_VISUAL: []
FONT_FILE: "Inter Latin woff2 is specified by DS02/DS24 and is not in the repo. Builder packages it. This does not block READY_FOR_BUILD."
~~~

Settled-hold counts use the count method in the next section. Ordinary words are the locked phrase only. Essential labels are excluded from that 0–8 target. A few totals differ from the shorthand in `references/scenes.md` because this plan counts every readable word and the status chips Design required; the visible strings are not new claims.

| Scene ID | Narration takeaway | Medium | Focal subject | Ordinary words / excluded data labels / total | Duration estimate | Claim IDs | Asset status |
|---|---|---|---|---|---|---|---|
| S01 | This is OpenAI DevDay 2025, and R returns here. | Authentic wordmark | Official OpenAI wordmark | 3 / 0 / 3 | 25 s spoken | C01 | READY |
| S02 | ChatGPT is being positioned as a place software runs. | 2D diagram | Bracket frame around a chat surface | 4 / 0 / 4 | 28 s spoken | C02, C18, C19 | READY (code-drawn) |
| S03 | The keynote has four pillars. | 2D diagram | Four-column story spine | 2 / 5 / 7 | 32 s spoken | C01, C18 | READY (code-drawn) |
| S04 | Apps SDK is a preview stack on MCP. | 2D diagram | Apps SDK card with Preview chip | 3 / 1 / 4 | 40 s spoken | C02, C03, C05, C20 | READY (code-drawn) |
| S05 | Partner demos made the SDK concrete. | 2D diagram | Three named demo tiles | 2 / 3 / 5 | 38 s spoken | C04, C05 | READY (text labels; no partner logos) |
| S06 | AgentKit is the umbrella, not a finished promise. | 2D diagram | The word AgentKit over five empty slots | 1 / 0 / 1 | 35 s spoken | C06, C19 | READY (code-drawn) |
| S07 | Beta, GA, and limited rollout are different. | 2D diagram | Five component cards with status chips | 2 / 10 / 12 | 45 s spoken | C07, C08, C09, C10, C20 | READY (code-drawn) |
| S08 | Codex left preview and is GA, with a company-reported footnote. | 2D diagram | Codex card whose chip settles on GA | 3 / 5 / 8 | 40 s spoken | C11, C12, C13, C20 | READY (code-drawn) |
| S09 | New API models are fuel, with vendor cost labels only. | 2D diagram | Three model cards | 2 / 7 / 9 | 42 s spoken | C15, C16, C17, C19 | READY (code-drawn) |
| S10 | Build next on the platform, and keep maturity labeled. | 2D diagram | Three paths under “Platform first” | 2 / 5 / 7 | 48 s spoken | C19, C20, C05, C07, C08, C11 | READY (code-drawn) |

Spoken seconds are narration estimates from `references/scenes.md`. They are not timers. Every hold lasts until the next deliberate key.

## Shared visual contract

These rules apply to every scene. A scene YAML overrides one of them only when it says so.

~~~yaml
COUNT_METHOD: >
  Count whitespace-separated English words painted on the canvas.
  A hyphenated token counts as one word (GPT-5, OpenAI-reported).
  A standalone numeral, percent, or 10× token counts as one essential token.
  Middle dots and pipes are separators, not words.
  The ordinary phrase is the locked string for that scene and is counted once.
  When a status word is the chip inside that ordinary phrase (S04 Preview, S08 settled GA),
  count it in the ordinary total only, not again as a label.
  Status words that are not part of the ordinary phrase are essential labels.
  Replaced text is not still visible: S08 Preview disappears when the chip becomes GA.
  Accessible names and alt text are English and are not painted, so they are outside the visible count.
  The S01 wordmark paths depict the official name as logo geometry. That geometry is the authentic mark,
  not a second sentence, and is not added on top of the overlay “OpenAI DevDay 2025”.
  Report ordinary, excluded essential tokens, and total for the settled hold.
  Also inventory every earlier state. Ordinary words in every simultaneous state stay within 0–8.
  No Thai-canvas exception is recorded, so Thai segmentation does not apply.
TOKENS:
  BACKGROUND: "#0B0B0F"
  FOREGROUND: "#F5F5F7"
  CARD_EDGE: "#2A2A32"
  GA_FILL: "#10A37F"
  PREVIEW_BETA_FILL: "#F59E0B"
  LIMITED_FILL: "#A78BFA"
  NEUTRAL_FILL: "#6B7280"
  CHIP_INK_ON_STATUS: "#0B0B0F"
  CHIP_INK_ON_NEUTRAL: "#F5F5F7"
  POINTER_FILL: "#22D3EE"
  POINTER_OUTLINE: "#0B0B0F"
  EASING: "cubic-bezier(0.22, 1, 0.36, 1)"
  ENTRY_MS: 500
  REVEAL_MS: 700
  SETTLE_MS: 200
  EXIT_MS: 400
  REDUCED_MOTION_MS: 150
FONT: "Inter Latin, packaged later by Builder at assets/fonts/. Until the file exists, fallback is system-ui, Segoe UI, Helvetica Neue, Arial, sans-serif. Do not shrink type below 32 px to fit. Caption 24 is for non-claim structure only."
SAFE_AREA: "96 px left/right, 54 px top/bottom. Normalized origin top-left: x 0.05–0.95, y 0.05–0.95."
CHROME: "No page numbers, progress dots, nav arrows, buttons, hints, watermarks, or source panels. The presenter dot is the only overlay."
ARROW_RULE: "One content arrow in the whole story: S04, Apps SDK down to MCP. No other scene has an arrow."
KEYBOARD:
  SPACE_DURING_MOTION: "Finish the active beat at its semantic endpoint and enter that beat's hold. Do not start the next beat and do not skip the scene."
  SPACE_DURING_HOLD: "If another reveal remains, start it. If the scene is on its final hold and a later scene exists, play the 400 ms exit into the next scene's entry. On S10 final hold, Spacebar does nothing."
  RAPID_SPACE: "Repeats never skip a beat. A key pressed during motion only settles that beat."
  R: "Cancel every timer and tween. Show S01 initial state immediately: wordmark (or blossom fallback) fully opaque, overlay title not yet entered. Then the title entry may run. From inside S01, R restarts that same initial state."
  LEFT_ARROW: "Optional. Absence is not a defect. If implemented, show the previous scene's final settled hold with no replay. On S01, Left Arrow does nothing. Not painted on the canvas."
  F: "Optional fullscreen request. Absence is not a defect. No fullscreen control is drawn. Browser fullscreen UI is outside this canvas."
  P: "Optional pointer visibility toggle, documented only in README or BUILD_NOTES. Absence is not a defect. Not painted."
  CLICK: "Never required to advance."
REDUCED_MOTION: "Same beat graph and the same endpoints. Crossfade at most 150 ms. No slide, no scale loop. Chips still show their final fill and their English word. S01 wordmark is already opaque at the first frame."
HOLD: "After settle, geometry, type, and chip fill are static. No pulse, drift, particle, or auto-advance. A 30-second QA hold must show zero change."
POINTER: "14 CSS px dot, fill #22D3EE, 1.5 px outline #0B0B0F, shadow 0 0 6px rgba(34,211,238,0.45). Hotspot-centered, no lag, trail, or pulse. pointer-events none, aria-hidden true. Visible only while the mouse is inside the stage. Native cursor hidden only while the dot is working."
LANGUAGE: "Canvas, labels, alt text, and fallback text are English. lang=en. Thai is narration and the owner-rationale notes in this file only."
~~~

Coordinates below are normalized to the 1920×1080 stage, origin at the top-left. Builder maps them to the fitted stage. Do not stretch the stage when the viewport is not 16:9; letterbox with `#0B0B0F`.

## Scene specification — S01

~~~yaml
SCENE_ID: S01
CONTENT_REFERENCE: "references/scenes.md#S01"
CLAIM_IDS: [C01]
AUDIENCE_TAKEAWAY: "The story is OpenAI DevDay 2025, and this frame is where R returns."
VISUAL_JOB: "Show one authentic OpenAI wordmark so the cover is a real mark, not a title card."
MEDIUM: real
MEDIUM_REASON: "The cover has to be the official wordmark. A diagram or a generated mark would fail the cover rule."
FOCAL_SUBJECT: "assets/cover/openai-wordmark-2025.svg, used whole"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Wordmark center at x=0.500, y=0.454. Group (mark + 40 px gap + title) optically centered."
  BOUNDS: "Wordmark width 0.360 of canvas (691 px) and height 186 px, from x=0.320, y=0.367 to x=0.680, y=0.540. Title baseline block from y=0.577, height 60 px, centered. All inside the safe area."
  SUPPORTING_OBJECTS: "One overlay line. No second symbol, no blossom, no chips."
  NEGATIVE_SPACE: "The rest of the near-black field. At least 64 px of clear stage around the wordmark except the specified 40 px gap to the title."
  SAFE_AREA_CHECK: "Wordmark and title sit inside x 0.05–0.95 and y 0.05–0.95. Do not crop the viewBox."
VISIBLE_COPY: "OpenAI DevDay 2025"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: "No chart or status label. The date 2025 is inside the ordinary line."
TOTAL_VISIBLE_WORD_COUNT: 3
COUNT_METHOD: "Shared count method. Initial frame paints 0 overlay words. Settled hold paints 3. Logo paths are not a second sentence."
STATE_WORD_INVENTORY:
  - {state: S01-initial, ordinary: "", essential: NONE, ordinary_count: 0, essential_count: 0, total: 0}
  - {state: S01-hold, ordinary: "OpenAI DevDay 2025", essential: NONE, ordinary_count: 3, essential_count: 0, total: 3}
DATA_SPEC: NOT_APPLICABLE
ASSETS: ["A-COVER-WORDMARK assets/cover/openai-wordmark-2025.svg", "A-COVER-BLOSSOM assets/cover/openai-blossom-2025.svg fallback only"]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "สวัสดีครับ วันนี้เราจะสรุป OpenAI DevDay ปี 2025 — hold after the title settles, then advance on the next breath."
ENTRY_STATE: "At t=0 the wordmark is fully opaque on #0B0B0F. The title opacity is 0. Nothing else is on stage."
REVEAL_BEATS: ["Title 'OpenAI DevDay 2025' enters under the mark."]
SETTLE_STATE: "Wordmark unchanged. Title at full opacity, Title size 48, color #F5F5F7, centered, 40 px below the mark."
HOLD_STATE: "Mark and title static. No shimmer on the logo."
EXIT_STATE: "On Spacebar from this hold, 400 ms fade of the whole group into S02 entry. The wordmark does not persist into S02."
REDUCED_MOTION: "Wordmark stays fully opaque from the first frame. Title crossfades in at most 150 ms. Same hold."
BACK_NAVIGATION: "Optional Left Arrow does nothing on S01. If Left Arrow is not implemented, NOT_APPLICABLE."
RETURN_TO_COVER: "R from any scene, including S01, cancels motion and shows this initial state: wordmark opaque, title not yet entered."
FALLBACK: "If the wordmark file fails to load, hide it and show assets/cover/openai-blossom-2025.svg alone, same #F5F5F7 treatment, about 200 px square, bottom aligned to the wordmark bottom so the title gap stays 40 px. Never show both files. If both fail, paint no fake lettering shaped like a logo; keep the dark field and the ordinary title only, and treat the package as an asset failure for QA. Do not generate a replacement."
FACTUAL_BOUNDARIES: "Do not add attendee counts, anniversary years, 'world's largest', or a Fort Mason line. C01's date and city stay in narration. Do not imply OpenAI produced this presentation."
IMPLEMENTATION_NOTES: "Inline the SVG. Set path fill to #F5F5F7 in CSS. Do not edit path data. viewBox 0 0 269.6592 72.5157. Alt text: Official OpenAI wordmark for OpenAI DevDay 2025 cover. Fallback alt: Official OpenAI blossom symbol for OpenAI DevDay 2025 cover. This scene is first on load, before any other scene."
LANGUAGE_AUDIT: "Overlay English. SVG files contain path geometry only, no text nodes and no Thai. No owner exception."
POINTER_CONTRAST_CHECK: "Cyan fill plus 1.5 px #0B0B0F outline stays readable on the light wordmark and on #0B0B0F. The 14 px dot does not cover the mark unless the presenter places it there. It does not capture clicks."
COVER_AUTHENTICITY: "Verified this stage against assets/cover/PROVENANCE.md and references/cover-asset.md. Primary file is the Commons wordmark whose upstream citation is https://openai.com/brand/. Not generated. Visible at the initial frame and immediately after R."
QA_ASSERTIONS:
  - "AC-023: first frame and R reset show the packaged wordmark, not a generated mark."
  - "AC-023: blossom appears only when the wordmark fails, and never beside it."
  - "AC-006: settled overlay is exactly OpenAI DevDay 2025 (3/0/3)."
  - "AC-005: mark and title inside the safe area at 1920×1080 and when letterboxed."
  - "AC-008 / AC-010 / AC-011: Spacebar settles the title before leaving; R during the title entry returns to the initial frame; hold is static."
  - "AC-012: reduced motion still shows the mark at the first frame."
  - "AC-022: dot contrast on the white mark and the dark field."
  - "AC-007 / AC-024: no chrome, no Thai, lang=en, English alt."
~~~

### Timing / cue map — S01

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | สวัสดีครับ (opening) | Load or R | Wordmark already visible; title opacity 0 | 0 ms for the mark | Mark opaque, title hidden | Initial state; Spacebar starts the title |
| Reveal 1 | OpenAI DevDay ปี 2025 | Spacebar | Title fades and settles under the mark | 500 ms entry, then 200 ms settle; easing cubic-bezier(0.22, 1, 0.36, 1) | Title fully visible | Indefinite hold. Presenter may pause 2–3 s |
| Exit | Next breath into the hook | Spacebar on the hold | Group fades out | 400 ms | S02 entry begins | Only after the title hold |

Spacebar during the title entry finishes the title and does not jump to S02. A second Spacebar on the hold exits.

## Scene specification — S02

~~~yaml
SCENE_ID: S02
CONTENT_REFERENCE: "references/scenes.md#S02"
CLAIM_IDS: [C02, C18, C19]
AUDIENCE_TAKEAWAY: "ChatGPT is being framed as a place where software runs, not only a question box."
VISUAL_JOB: "A single bracket frame makes the chat surface look like a runtime boundary."
MEDIUM: 2D
MEDIUM_REASON: "The idea is a framing metaphor. Depth would look like a literal operating system."
FOCAL_SUBJECT: "Square-bracket frame around an empty chat surface"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Frame center x=0.40, y=0.46"
  BOUNDS: "Frame width 0.42 (806 px), height 0.50 (540 px), so the focal object is half the stage height. Left edge x=0.19, inside the safe area."
  SUPPORTING_OBJECTS: "Three mute horizontal bars inside the frame, heights 16 px, color #2A2A32, no glyphs. They are part of the frame, not separate subjects. Ordinary line sits 40 px below the frame, centered on the frame, max width 0.42."
  NEGATIVE_SPACE: "Right half of the stage stays empty so the metaphor stays one object."
  SAFE_AREA_CHECK: "Frame and line inside the safe rectangle. Bracket strokes 2 px in #6B7280, radius 0 on the brackets, inner card radius 16 px."
VISIBLE_COPY: "Software runs in chat"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: "n/a"
TOTAL_VISIBLE_WORD_COUNT: 4
COUNT_METHOD: "Shared method. Entry paints 0 words. Hold paints 4."
STATE_WORD_INVENTORY:
  - {state: S02-entry, ordinary: "", essential: NONE, ordinary_count: 0, essential_count: 0, total: 0}
  - {state: S02-hold, ordinary: "Software runs in chat", essential: NONE, ordinary_count: 4, essential_count: 0, total: 4}
DATA_SPEC: NOT_APPLICABLE
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "ถ้าพลาดงานนี้ — then reveal the phrase as the narration says software runs in the conversation."
ENTRY_STATE: "Bracket frame and inner bars at full opacity. No words. No chip."
REVEAL_BEATS: ["Ordinary line 'Software runs in chat' appears under the frame."]
SETTLE_STATE: "Line at Title 48, #F5F5F7, full opacity. Frame unchanged."
HOLD_STATE: "Static frame and line. Bars do not type on or blink."
EXIT_STATE: "400 ms fade to S03 entry."
REDUCED_MOTION: "Frame is present at the entry endpoint. Line crossfades in at most 150 ms."
BACK_NAVIGATION: "If Left Arrow is implemented, show S01 final hold (wordmark and title). Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Code-drawn. No image to fail. Font fallback is the system stack. Meaning stays the frame plus the English line."
FACTUAL_BOUNDARIES: "Do not draw a desktop, a dock, a window title bar, or the word OS. Do not add a GA chip. This is product-platform framing (C19), not a computer-science operating system (C02 boundary)."
IMPLEMENTATION_NOTES: "Inner bars contain no placeholder Latin or Thai. Alt: A bracket frame around a chat surface, with the line Software runs in chat."
LANGUAGE_AUDIT: "English line only. No embedded media text."
POINTER_CONTRAST_CHECK: "Outline separates the cyan dot from #F5F5F7 type and from #6B7280 bracket edges on the dark field."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-002: the line appears after the opening sentence, not before the frame exists."
  - "AC-006: hold is exactly Software runs in chat (4/0/4)."
  - "AC-001 / factual: no OS chrome and no status chip."
  - "AC-007: brackets are structure, not buttons."
  - "AC-008 / AC-010: Spacebar during the line entry only settles the line; hold is static for 30 s."
  - "AC-005 / AC-012 / AC-022 / AC-024: safe area, reduced-motion endpoint, pointer outline, English only."
~~~

### Timing / cue map — S02

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | ถ้าพลาดงานนี้ | Spacebar from S01 | Frame and mute bars arrive | 500 ms + 200 ms settle | Frame readable, no words | Indefinite hold |
| Reveal 1 | ซอฟต์แวร์วิ่งในบทสนทนา | Spacebar | Line Software runs in chat | 700 ms + 200 ms settle | Four words visible | Indefinite hold |
| Exit | Advance into the event map | Spacebar on the hold | Fade out | 400 ms | S03 entry | After the line is held |

## Scene specification — S03

~~~yaml
SCENE_ID: S03
CONTENT_REFERENCE: "references/scenes.md#S03"
CLAIM_IDS: [C01, C18]
AUDIENCE_TAKEAWAY: "DevDay 2025's keynote was organized as four pillars: Apps, Agents, Codex, and models/API."
VISUAL_JOB: "A four-column map is the story spine before any deep dive."
MEDIUM: 2D
MEDIUM_REASON: "The audience needs a map. A chart would pretend the pillars are measurements."
FOCAL_SUBJECT: "Row of four pillar columns"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Row center x=0.50, y=0.52"
  BOUNDS: "Row width 0.84 inside the safe area (about 1612 px). Four cards, gap 24 px, each about 385 px wide and 420 px tall. Title 'Four pillars' centered above the row at y=0.16, max width 0.42, Title 48."
  SUPPORTING_OBJECTS: "The row is one diagram. Cards reveal one per beat. No numbers on the cards, no connector, no stepper."
  NEGATIVE_SPACE: "Gaps between cards stay #0B0B0F so the dot has a dark place to sit."
  SAFE_AREA_CHECK: "Four labels at Label 32 minimum. Do not shrink Models or API below 32 px. No card crosses y=0.95 or x=0.95."
VISIBLE_COPY: "Four pillars"
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Apps; Agents; Codex; Models; API"
ESSENTIAL_LABEL_REASON: "Each pillar name is the map label from C18. Models and API are both read, so each counts. They are names, not a sentence."
TOTAL_VISIBLE_WORD_COUNT: 7
COUNT_METHOD: "Shared method. Content's shorthand total of 6 treated Models/API as one token. This plan counts Models and API as two words. Ordinary copy stays Four pillars (2)."
STATE_WORD_INVENTORY:
  - {state: S03-entry, ordinary: "Four pillars", essential: NONE, ordinary_count: 2, essential_count: 0, total: 2}
  - {state: S03-R1, ordinary: "Four pillars", essential: "Apps", ordinary_count: 2, essential_count: 1, total: 3}
  - {state: S03-R2, ordinary: "Four pillars", essential: "Apps, Agents", ordinary_count: 2, essential_count: 2, total: 4}
  - {state: S03-R3, ordinary: "Four pillars", essential: "Apps, Agents, Codex", ordinary_count: 2, essential_count: 3, total: 5}
  - {state: S03-hold, ordinary: "Four pillars", essential: "Apps, Agents, Codex, Models, API", ordinary_count: 2, essential_count: 5, total: 7}
DATA_SPEC: NOT_APPLICABLE
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "คีย์โนตถูกจัดเป็นสี่เสาหลัก — reveal Apps, then Agents, then Codex, then Models/API as each is named."
ENTRY_STATE: "Title Four pillars visible. Four card slots are not drawn yet."
REVEAL_BEATS: ["Apps card", "Agents card", "Codex card", "Models/API card"]
SETTLE_STATE: "All four cards visible. Models/API is one card with two stacked words, Models and API, both at least 32 px. No status chips."
HOLD_STATE: "Static row. Cards do not bounce or highlight in a loop."
EXIT_STATE: "400 ms fade to S04. Do not animate a traveling arrow into S04."
REDUCED_MOTION: "Each new card crossfades in at most 150 ms at its final position. No horizontal slide."
BACK_NAVIGATION: "If Left Arrow is implemented, show S02 final hold. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Code-drawn. Font fallback only."
FACTUAL_BOUNDARIES: "Do not invent session titles, times, or a fifth pillar. Do not place the date 6 October or San Francisco on the canvas; narration carries C01. Columns are not a progress control."
IMPLEMENTATION_NOTES: "Card fill is transparent or #0B0B0F with 1 px edge #2A2A32 and radius 16. Labels #F5F5F7. Alt: Four pillars labeled Apps, Agents, Codex, and Models API."
LANGUAGE_AUDIT: "English labels only."
POINTER_CONTRAST_CHECK: "Dot sits in the dark gaps. Outline keeps it visible if it crosses light type."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-003: four beats match Apps, Agents, Codex, Models/API and claim C18."
  - "AC-006: ordinary words stay Four pillars; final total 7 with five essential names."
  - "AC-007: no arrows and no stepper dots."
  - "AC-005: Models and API remain at least 32 px inside the safe area."
  - "AC-008 / AC-010 / AC-012: one pillar per Spacebar; each hold is static; reduced motion uses the same four endpoints."
~~~

### Timing / cue map — S03

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | วันที่หกตุลาคม ที่ซานฟรานซิสโก | Spacebar from S02 | Title Four pillars | 500 ms + 200 ms settle | Title only | Indefinite hold |
| Reveal 1 | แอปใน ChatGPT | Spacebar | Apps card | 700 ms + 200 ms settle | Apps visible | Indefinite hold |
| Reveal 2 | การสร้างเอเจนต์ | Spacebar | Agents card | 700 ms + 200 ms settle | Apps and Agents | Indefinite hold |
| Reveal 3 | Codex | Spacebar | Codex card | 700 ms + 200 ms settle | Three cards | Indefinite hold |
| Reveal 4 | โมเดลกับเอพีไอ | Spacebar | Models/API card | 700 ms + 200 ms settle | Four cards | Indefinite hold |
| Exit | เราจะเดินตามเสานี้ | Spacebar on the hold | Fade | 400 ms | S04 entry | After the fourth card is held |

## Scene specification — S04

~~~yaml
SCENE_ID: S04
CONTENT_REFERENCE: "references/scenes.md#S04"
CLAIM_IDS: [C02, C03, C05, C20]
AUDIENCE_TAKEAWAY: "Developers could start building interactive ChatGPT apps in preview, on an MCP-based SDK."
VISUAL_JOB: "Show the SDK sitting on MCP, with a Preview chip that cannot be missed."
MEDIUM: 2D
MEDIUM_REASON: "The relationship is a stack. A chart or a 3D stack would add no fact."
FOCAL_SUBJECT: "Apps SDK card with the amber Preview chip"
EXPLANATORY_ARROWS: "ONE content arrow. It starts at the bottom center of the Apps SDK card and ends at the top center of the MCP label, pointing down. Stroke #F5F5F7, 2 px, small arrowhead at the MCP end only. It means the SDK is built on MCP. It is not a button, not a chevron control, and not clickable. It appears only on the MCP beat and stays still on hold."
COMPOSITION:
  ANCHOR: "Stack center x=0.40, y=0.48"
  BOUNDS: "Apps SDK card about 720 px wide and 220 px tall, top at y=0.28. Arrow about 64 px tall. MCP label block about 120 px tall below the arrow. The whole stack stays inside the safe area and inside the left-center half."
  SUPPORTING_OBJECTS: "MCP label is the single support. No directory card, no partner logos, no GA chip."
  NEGATIVE_SPACE: "Right side empty."
  SAFE_AREA_CHECK: "Preview chip text at least 32 px. Chip padding 16 px horizontal, 8 px vertical. Ink #0B0B0F on fill #F59E0B."
VISIBLE_COPY: "Apps SDK · Preview"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "MCP"
ESSENTIAL_LABEL_REASON: "The protocol name is required to read the stack (C03). The arrow has no words."
TOTAL_VISIBLE_WORD_COUNT: 4
COUNT_METHOD: "Preview is the chip inside the ordinary phrase, counted once. Do not add a second Preview caption. Do not paint Built on."
STATE_WORD_INVENTORY:
  - {state: S04-entry, ordinary: "", essential: NONE, ordinary_count: 0, essential_count: 0, total: 0}
  - {state: S04-R1, ordinary: "Apps SDK · Preview", essential: NONE, ordinary_count: 3, essential_count: 0, total: 3}
  - {state: S04-hold, ordinary: "Apps SDK · Preview", essential: "MCP", ordinary_count: 3, essential_count: 1, total: 4}
DATA_SPEC: NOT_APPLICABLE
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "เสาแรกคือ Apps in ChatGPT และ Apps SDK — reveal the Preview chip on พรีวิว, then MCP when Model Context Protocol is spoken."
ENTRY_STATE: "Empty card shell, 1 px edge #2A2A32, radius 16. No words, no chip, no arrow."
REVEAL_BEATS: ["Apps SDK line with amber Preview chip", "MCP label and the downward arrow"]
SETTLE_STATE: "Chip fill #F59E0B, label Preview in #0B0B0F. MCP in #F5F5F7 at 32 px or larger. Arrow static."
HOLD_STATE: "Preview chip remains. No color shift toward green."
EXIT_STATE: "400 ms fade to S05. Arrow fades with the scene. It does not point at the next scene."
REDUCED_MOTION: "Chip, words, and arrow crossfade to the same endpoints in at most 150 ms. Arrow is already at its final coordinates, not drawn as a traveling line."
BACK_NAVIGATION: "If Left Arrow is implemented, show S03 final hold. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Code-drawn. If motion is reduced, the arrow is still visible on the hold because it is the relationship, not decoration."
FACTUAL_BOUNDARIES: "Preview is mandatory. Do not use #10A37F. Do not show a public app directory, a submission button, or the word GA. C05 says the directory and broader submissions were later, not day-one GA."
IMPLEMENTATION_NOTES: "The middle dot in Apps SDK · Preview is a separator in the ordinary line, painted once, with Preview itself inside the chip. Alt: Apps SDK marked Preview, with an arrow down to MCP."
LANGUAGE_AUDIT: "English only. No Thai in the chip."
POINTER_CONTRAST_CHECK: "The #0B0B0F outline is required when the dot crosses the amber chip. Cyan on amber alone is not the contrast plan."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-006: hold reads Apps SDK · Preview plus MCP (3/1/4). The word Built on is absent."
  - "AC-014: Preview is a word plus amber fill, ink #0B0B0F."
  - "AC-007: exactly one arrow, pointing Apps SDK to MCP, not styled as a next control."
  - "AC-001: no GA color and no directory claim (C05, C20)."
  - "AC-008 / AC-010 / AC-012 / AC-022: settle-before-advance, static Preview hold, reduced-motion arrow present, outline on the amber chip."
~~~

### Timing / cue map — S04

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | เสาแรก | Spacebar from S03 | Empty card arrives | 500 ms + 200 ms settle | Card shell | Indefinite hold |
| Reveal 1 | พรีวิว | Spacebar | Apps SDK and Preview chip | 700 ms + 200 ms settle | Amber Preview readable | Indefinite hold on the chip |
| Reveal 2 | MCP | Spacebar | MCP label and downward arrow | 700 ms + 200 ms settle | Stack complete | Indefinite hold |
| Exit | Move to the demos | Spacebar on the hold | Fade | 400 ms | S05 entry | After MCP is held |

## Scene specification — S05

~~~yaml
SCENE_ID: S05
CONTENT_REFERENCE: "references/scenes.md#S05"
CLAIM_IDS: [C04, C05]
AUDIENCE_TAKEAWAY: "Keynote demos such as Coursera, Canva, and Zillow showed apps inside the chat thread."
VISUAL_JOB: "Three named tiles, then a frame-size change for inline versus fullscreen."
MEDIUM: 2D
MEDIUM_REASON: "Named demos are the evidence. Authentic partner logo files are not in the repo and are not cleared here, so text names are the truthful asset."
FOCAL_SUBJECT: "Three-up row of demo tiles"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Row center x=0.50, y=0.52"
  BOUNDS: "Title Partner demos at y=0.16, Title 48, centered. Three cards in a row, gap 24 px, each about 520 px wide and 360 px tall, inside the safe area."
  SUPPORTING_OBJECTS: "Each tile is a name plus a nested frame. The nested frame starts about 40 percent of the card and, on the last beat, one card's nested frame grows to about 80 percent. That size change is the inline-versus-fullscreen cue. No extra words."
  NEGATIVE_SPACE: "Gaps between cards. No fourth tile."
  SAFE_AREA_CHECK: "Names at least 32 px. Growing frame stays inside its card, and the card stays inside the safe area."
VISIBLE_COPY: "Partner demos"
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Coursera; Canva; Zillow"
ESSENTIAL_LABEL_REASON: "The three names are the factual anchors in C04. They are not a sentence."
TOTAL_VISIBLE_WORD_COUNT: 5
COUNT_METHOD: "Shared method. The words inline and fullscreen are not painted."
STATE_WORD_INVENTORY:
  - {state: S05-entry, ordinary: "Partner demos", essential: NONE, ordinary_count: 2, essential_count: 0, total: 2}
  - {state: S05-R1, ordinary: "Partner demos", essential: "Coursera", ordinary_count: 2, essential_count: 1, total: 3}
  - {state: S05-R2, ordinary: "Partner demos", essential: "Coursera, Canva", ordinary_count: 2, essential_count: 2, total: 4}
  - {state: S05-R3, ordinary: "Partner demos", essential: "Coursera, Canva, Zillow", ordinary_count: 2, essential_count: 3, total: 5}
  - {state: S05-hold, ordinary: "Partner demos", essential: "Coursera, Canva, Zillow", ordinary_count: 2, essential_count: 3, total: 5}
DATA_SPEC: NOT_APPLICABLE
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "เดโมพันธมิตร — reveal Coursera, then Canva, then Zillow, then hold while inline and fullscreen are spoken."
ENTRY_STATE: "Title only."
REVEAL_BEATS: ["Coursera tile with a small inner frame", "Canva tile with a small inner frame", "Zillow tile with a small inner frame", "Zillow inner frame enlarges; the other two stay small"]
SETTLE_STATE: "Three names visible. Zillow's inner frame is the large one. No logos."
HOLD_STATE: "Static. The large frame does not pulse."
EXIT_STATE: "400 ms fade to S06."
REDUCED_MOTION: "Tiles crossfade in. The frame change is a crossfade from the small rectangle to the large rectangle, at most 150 ms, no animated scale loop."
BACK_NAVIGATION: "If Left Arrow is implemented, show S04 final hold including the Preview chip and MCP arrow. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Text names are the plan, not a fallback from missing logos. Do not fetch partner marks at runtime."
FACTUAL_BOUNDARIES: "The three names are illustrative demos, not an exclusive or exhaustive partner list, and not a revenue claim. The enlarged inner frame is the inline-versus-fullscreen pattern from C04, shown on the Zillow tile only so one beat has one change. It does not mean only Zillow can go fullscreen. Do not imply the public directory was already GA (C05)."
IMPLEMENTATION_NOTES: "Do not draw Coursera, Canva, or Zillow logo paths. Alt: Partner demos named Coursera, Canva, and Zillow, with one larger inner frame for fullscreen."
LANGUAGE_AUDIT: "English names only. No screenshots with foreign-language UI."
POINTER_CONTRAST_CHECK: "Standard cyan dot and dark outline on the dark cards and light names. No photographic wordmark is introduced, so no extra contrast case."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-006: hold is Partner demos plus three names (2/3/5). No inline/fullscreen words."
  - "AC-013: no uncleared partner logo files."
  - "AC-001: no exclusive-partnership or revenue figure."
  - "AC-009: the last beat changes frame size only."
  - "AC-005 / AC-008 / AC-010 / AC-012: three tiles then one size change, each held, safe area intact."
~~~

### Timing / cue map — S05

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | หลักฐานบนเวที | Spacebar from S04 | Title Partner demos | 500 ms + 200 ms settle | Title only | Indefinite hold |
| Reveal 1 | Coursera | Spacebar | Coursera tile | 700 ms + 200 ms settle | One name | Indefinite hold |
| Reveal 2 | Canva | Spacebar | Canva tile | 700 ms + 200 ms settle | Two names | Indefinite hold |
| Reveal 3 | Zillow | Spacebar | Zillow tile, small inner frame | 700 ms + 200 ms settle | Three names | Indefinite hold |
| Reveal 4 | อินไลน์ หรือขยายเต็มจอ | Spacebar | Zillow inner frame becomes large | 700 ms + 200 ms settle | Size contrast visible, same words | Indefinite hold |
| Exit | พื้นผิวการจัดจำหน่าย | Spacebar on the hold | Fade | 400 ms | S06 entry | After the size hold |

## Scene specification — S06

~~~yaml
SCENE_ID: S06
CONTENT_REFERENCE: "references/scenes.md#S06"
CLAIM_IDS: [C06, C19]
AUDIENCE_TAKEAWAY: "AgentKit groups the tools for building, deploying, and tuning agents."
VISUAL_JOB: "One name under an umbrella shape, with five empty slots reserved for the next scene."
MEDIUM: 2D
MEDIUM_REASON: "The scene introduces the kit. Naming the parts here would steal S07's status story."
FOCAL_SUBJECT: "The word AgentKit"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Word center x=0.50, y=0.32"
  BOUNDS: "AgentKit at Display 72, #F5F5F7. A shallow arc in #6B7280, 2 px, above five slots. Slots sit in one row at y=0.62, five rectangles about 280 px by 120 px, gap 24 px, radius 16, edge #2A2A32, no fill text."
  SUPPORTING_OBJECTS: "The five slots are one empty diagram, revealed together. They are geometry only."
  NEGATIVE_SPACE: "Inside every slot. No icons that depict a product."
  SAFE_AREA_CHECK: "The row of five stays inside x 0.05–0.95. Empty slots must not clip."
VISIBLE_COPY: "AgentKit"
VISIBLE_WORD_COUNT: 1
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: "n/a. Component names wait for S07."
TOTAL_VISIBLE_WORD_COUNT: 1
COUNT_METHOD: "Shared method. Empty slots contribute 0 words in every state."
STATE_WORD_INVENTORY:
  - {state: S06-entry, ordinary: "AgentKit", essential: NONE, ordinary_count: 1, essential_count: 0, total: 1}
  - {state: S06-hold, ordinary: "AgentKit", essential: NONE, ordinary_count: 1, essential_count: 0, total: 1}
DATA_SPEC: NOT_APPLICABLE
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "เสาที่สองคือ AgentKit — then open the five empty slots before the component list."
ENTRY_STATE: "AgentKit visible. Arc and slots not yet drawn."
REVEAL_BEATS: ["Arc and five empty slots together"]
SETTLE_STATE: "Name plus five blank rounded rectangles."
HOLD_STATE: "Static. Slots do not shimmer as if loading."
EXIT_STATE: "400 ms fade to S07. Slots do not fly into the next grid; S07 draws its own cards."
REDUCED_MOTION: "Slots crossfade in at their final positions, at most 150 ms."
BACK_NAVIGATION: "If Left Arrow is implemented, show S05 final hold. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Code-drawn."
FACTUAL_BOUNDARIES: "Do not write complete, all-in-one, or any status word. C06 is a set of tools, not a claim that every agent problem is solved. Do not name Builder, ChatKit, Evals, Guardrails, or Connectors here."
IMPLEMENTATION_NOTES: "Alt: AgentKit above five empty slots."
LANGUAGE_AUDIT: "One English word. No Thai."
POINTER_CONTRAST_CHECK: "Dark stage. Cyan fill is readable; keep the dark outline on."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-006: the only word is AgentKit (1/0/1) on entry and hold."
  - "AC-001: no absolute 'solves agents' language and no premature status chips."
  - "AC-003: five slots, unnamed, matching the five S07 components without labeling them."
  - "AC-008 / AC-010 / AC-012: one reveal, static hold, reduced-motion crossfade."
~~~

### Timing / cue map — S06

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | AgentKit | Spacebar from S05 | Word AgentKit | 500 ms + 200 ms settle | Word only | Indefinite hold |
| Reveal 1 | ชุดเครื่องมือ | Spacebar | Arc and five empty slots | 700 ms + 200 ms settle | Five blank slots | Indefinite hold |
| Exit | แยกสถานะให้ชัด | Spacebar on the hold | Fade | 400 ms | S07 entry | After the slots are held |

## Scene specification — S07

~~~yaml
SCENE_ID: S07
CONTENT_REFERENCE: "references/scenes.md#S07"
CLAIM_IDS: [C07, C08, C09, C10, C20]
AUDIENCE_TAKEAWAY: "Agent Builder was beta, ChatKit and Evals were GA, Guardrails has no maturity word, and Connectors were a limited beta."
VISUAL_JOB: "A component grid whose chips are the evidence for C20."
MEDIUM: 2D
MEDIUM_REASON: "Maturity is a label, not a measurement series. Chips with words carry it. A chart would invent a scale."
FOCAL_SUBJECT: "Five status cards in a 2×3 grid with one empty spacer"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Grid center x=0.50, y=0.56"
  BOUNDS: "Title Status matters at y=0.12, Title 48, centered, max width 0.42. Grid of three columns and two rows inside the safe area. Card gap 24 px. Each card about 520 px wide and 280 px tall."
  SUPPORTING_OBJECTS: "Order of slots: row one Builder, ChatKit, Evals; row two Guardrails, Connectors, empty spacer. The spacer is bare stage, not a sixth card."
  NEGATIVE_SPACE: "The spacer cell. It prevents Limited beta from being squeezed into a 5-up row."
  SAFE_AREA_CHECK: "Every status word at least 32 px. Limited beta must fit on two lines inside the violet chip without dropping below 32 px."
VISIBLE_COPY: "Status matters"
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Builder; Beta; ChatKit; GA; Evals; GA; Guardrails; Connectors; Limited; beta"
ESSENTIAL_LABEL_REASON: "These chips are the scene's facts. Guardrails is a name with no maturity word. GA is counted twice because ChatKit and Evals each show it. Limited and beta are two words."
TOTAL_VISIBLE_WORD_COUNT: 12
COUNT_METHOD: "Shared method. Ordinary words remain Status matters (2), inside the 0–8 target. The total is 12 because the chips are essential labels, matching references/scenes.md."
STATE_WORD_INVENTORY:
  - {state: S07-entry, ordinary: "Status matters", essential: NONE, ordinary_count: 2, essential_count: 0, total: 2}
  - {state: S07-R1, ordinary: "Status matters", essential: "Builder, Beta", ordinary_count: 2, essential_count: 2, total: 4}
  - {state: S07-R2, ordinary: "Status matters", essential: "Builder, Beta, ChatKit, GA", ordinary_count: 2, essential_count: 4, total: 6}
  - {state: S07-R3, ordinary: "Status matters", essential: "Builder, Beta, ChatKit, GA, Evals, GA", ordinary_count: 2, essential_count: 6, total: 8}
  - {state: S07-R4, ordinary: "Status matters", essential: "Builder, Beta, ChatKit, GA, Evals, GA, Guardrails", ordinary_count: 2, essential_count: 7, total: 9}
  - {state: S07-hold, ordinary: "Status matters", essential: "Builder, Beta, ChatKit, GA, Evals, GA, Guardrails, Connectors, Limited, beta", ordinary_count: 2, essential_count: 10, total: 12}
DATA_SPEC: "NOT a chart. Chip encoding is the design lock: Builder chip Beta on #F59E0B with ink #0B0B0F. ChatKit chip GA on #10A37F with ink #0B0B0F. Evals chip GA on #10A37F with ink #0B0B0F. Guardrails is the chip text on #6B7280 with ink #F5F5F7 and no other status word. Connectors name plus chip Limited beta on #A78BFA with ink #0B0B0F."
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "Reveal Builder on เบตา, ChatKit and Evals on พร้อมใช้ทั่วไป, Guardrails on การ์ดเรล, Connectors on เบตาจำกัด."
ENTRY_STATE: "Title Status matters only."
REVEAL_BEATS: ["Builder + Beta", "ChatKit + GA", "Evals + GA", "Guardrails name only", "Connectors + Limited beta"]
SETTLE_STATE: "All five cards and the empty spacer. Contrast between amber, green, neutral, and violet is visible at once."
HOLD_STATE: "Static chips. No blinking GA."
EXIT_STATE: "400 ms fade to S08."
REDUCED_MOTION: "Each card crossfades in at most 150 ms with its final fill and its final words already correct. No color tween that passes through green for a beta card."
BACK_NAVIGATION: "If Left Arrow is implemented, show S06 final hold. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Code-drawn. Color is never the only encoding; the English status word is present at every endpoint."
FACTUAL_BOUNDARIES: "Do not relabel Builder or Connectors as GA. Do not add Preview, Beta, GA, or Limited beta to Guardrails. Do not write Agent Builder if it adds words beyond Builder; the locked label is Builder. Do not draw a node graph that looks like a measured architecture. Connector Registry is not universal (C10)."
IMPLEMENTATION_NOTES: "Narration may say Agent Builder; the canvas name is Builder, as in the content essential labels. Alt: Status grid. Builder beta, ChatKit GA, Evals GA, Guardrails with no maturity word, Connectors limited beta."
LANGUAGE_AUDIT: "English chip text only."
POINTER_CONTRAST_CHECK: "Dark outline is required on green, amber, and violet fills. Neutral chip is mid-gray; the outline plus cyan fill keeps the dot visible."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-006: ordinary copy is only Status matters. Final essential count 10, total 12."
  - "AC-014: each maturity is fill plus the English word specified above. Guardrails has no maturity word."
  - "AC-001: beta items are not painted GA (C07, C10, C20)."
  - "AC-005: Limited beta stays at least 32 px inside the safe area in the 2×3 layout."
  - "AC-008 / AC-010 / AC-012 / AC-022: one card per Spacebar, static contrast hold, reduced motion keeps the words, pointer outline on every status fill."
~~~

### Timing / cue map — S07

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | แยกสถานะให้ชัด | Spacebar from S06 | Title Status matters | 500 ms + 200 ms settle | Title only | Indefinite hold |
| Reveal 1 | Agent Builder เบตา | Spacebar | Builder card, amber Beta | 700 ms + 200 ms settle | Beta readable | Indefinite hold |
| Reveal 2 | ChatKit พร้อมใช้ทั่วไป | Spacebar | ChatKit card, green GA | 700 ms + 200 ms settle | Beta and one GA | Indefinite hold |
| Reveal 3 | Evals | Spacebar | Evals card, green GA | 700 ms + 200 ms settle | Two GA chips | Indefinite hold |
| Reveal 4 | Guardrails | Spacebar | Guardrails neutral chip, name only | 700 ms + 200 ms settle | No maturity word on Guardrails | Indefinite hold |
| Reveal 5 | Connector Registry เบตาจำกัด | Spacebar | Connectors card, violet Limited beta | 700 ms + 200 ms settle | Full contrast | Indefinite hold |
| Exit | เสาที่สามคือ Codex | Spacebar on the hold | Fade | 400 ms | S08 entry | After the five-card hold |

## Scene specification — S08

~~~yaml
SCENE_ID: S08
CONTENT_REFERENCE: "references/scenes.md#S08"
CLAIM_IDS: [C11, C12, C13, C20]
AUDIENCE_TAKEAWAY: "Codex moved from research preview to GA, with Slack, an SDK, and admin tools announced, plus a company-reported usage footnote."
VISUAL_JOB: "Change one chip from Preview to GA, then add three feature names and a muted footnote."
MEDIUM: 2D
MEDIUM_REASON: "The change is a status change. A line chart of the 10× figure would imply an audited series that C13 does not provide."
FOCAL_SUBJECT: "Codex card and its status chip"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Codex card center x=0.36, y=0.40"
  BOUNDS: "Card about 640 px by 240 px. Three feature names in a row under the card, gap 24 px, each a short label at least 32 px. Footnote at the lower right of the safe area, #6B7280, at least 32 px, right-aligned inside x=0.95."
  SUPPORTING_OBJECTS: "Slack, SDK, and Admin appear one at a time. The footnote is last and subordinate."
  NEGATIVE_SPACE: "Around the card so the chip change is the motion the eye follows."
  SAFE_AREA_CHECK: "Footnote OpenAI-reported must not clip and must not drop below 32 px."
VISIBLE_COPY: "Codex is GA"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "Slack; SDK; Admin; 10×; OpenAI-reported"
ESSENTIAL_LABEL_REASON: "Slack, SDK, and Admin are the named launch surfaces (C12). 10× and OpenAI-reported are the minimum truthful footnote for C13. They are not a title."
TOTAL_VISIBLE_WORD_COUNT: 8
COUNT_METHOD: "Settled ordinary line is Codex is GA (3). The word GA is the chip, counted once. Preview exists only in S08-R1 and is an essential status token for that state, then it is gone. Content's total of 6 omitted the footnote; DS16 and the scene visual job include it. Ordinary copy stays 3."
STATE_WORD_INVENTORY:
  - {state: S08-entry, ordinary: "", essential: NONE, ordinary_count: 0, essential_count: 0, total: 0}
  - {state: S08-R1, ordinary: "Codex", essential: "Preview", ordinary_count: 1, essential_count: 1, total: 2}
  - {state: S08-R2, ordinary: "Codex is GA", essential: NONE, ordinary_count: 3, essential_count: 0, total: 3}
  - {state: S08-R3, ordinary: "Codex is GA", essential: "Slack", ordinary_count: 3, essential_count: 1, total: 4}
  - {state: S08-R4, ordinary: "Codex is GA", essential: "Slack, SDK", ordinary_count: 3, essential_count: 2, total: 5}
  - {state: S08-R5, ordinary: "Codex is GA", essential: "Slack, SDK, Admin", ordinary_count: 3, essential_count: 3, total: 6}
  - {state: S08-hold, ordinary: "Codex is GA", essential: "Slack, SDK, Admin, 10×, OpenAI-reported", ordinary_count: 3, essential_count: 5, total: 8}
DATA_SPEC: "NOT a chart. The only number is the footnote token 10×. See the chart section. Do not draw an axis, a bar, or a sparkline."
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "ออกจากรีเสิร์ชพรีวิวเข้าสู่การใช้งานทั่วไป — Preview chip, then GA, then Slack, SDK, admin, then the 10× footnote."
ENTRY_STATE: "Empty card shell."
REVEAL_BEATS: ["Codex plus amber Preview chip", "Chip becomes green GA and the ordinary line reads Codex is GA", "Slack", "SDK", "Admin", "Footnote 10× and OpenAI-reported"]
SETTLE_STATE: "One GA chip. Preview is not visible. Three names and the muted footnote are visible."
HOLD_STATE: "Static. Footnote does not pulse, even though the narration calls it a footnote pulse; the plan uses a single appearance, then a hold, so the canvas has no decorative loop."
EXIT_STATE: "400 ms fade to S09."
REDUCED_MOTION: "Preview state crossfades, at most 150 ms, to the GA state. Do not animate a fill sweep. The footnote crossfades in already reading both tokens."
BACK_NAVIGATION: "If Left Arrow is implemented, show S07 final hold. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Code-drawn. If a beat is skipped by a bug, do not leave Preview and GA on screen together."
FACTUAL_BOUNDARIES: "10× is OpenAI-reported daily usage since early August, not an independent benchmark (C13). Do not show plan-tier names. Do not show the GPT-5-Codex token-volume figure from C14. Do not draw Slack's logo."
IMPLEMENTATION_NOTES: "Chip morph replaces the label Preview with GA and the fill #F59E0B with #10A37F. Ink stays #0B0B0F. Alt: Codex marked GA, with Slack, SDK, and Admin, and a footnote 10 times, OpenAI-reported."
LANGUAGE_AUDIT: "English only. The footnote is English."
POINTER_CONTRAST_CHECK: "Outline required on the amber Preview chip and on the green GA chip."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-006: inventory includes a Preview state and a settled state whose ordinary line is Codex is GA. Final hold total 8. Preview and GA are never simultaneous."
  - "AC-001: footnote reads 10× and OpenAI-reported. No chart and no C14 token count."
  - "AC-007: no arrow on the chip change."
  - "AC-009 / AC-010: footnote appears once and then holds still."
  - "AC-008 / AC-012 / AC-014 / AC-022: Spacebar steps one beat; reduced motion still ends on GA; chip text plus fill; pointer outline on the chip."
~~~

### Timing / cue map — S08

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | เสาที่สาม | Spacebar from S07 | Empty Codex card | 500 ms + 200 ms settle | Card shell | Indefinite hold |
| Reveal 1 | รีเสิร์ชพรีวิว | Spacebar | Word Codex and amber Preview | 700 ms + 200 ms settle | Preview visible | Indefinite hold |
| Reveal 2 | การใช้งานทั่วไป | Spacebar | Chip becomes GA; line Codex is GA | 700 ms + 200 ms settle | Preview gone | Indefinite hold |
| Reveal 3 | Slack | Spacebar | Slack label | 700 ms + 200 ms settle | Slack added | Indefinite hold |
| Reveal 4 | SDK | Spacebar | SDK label | 700 ms + 200 ms settle | SDK added | Indefinite hold |
| Reveal 5 | แอดมิน | Spacebar | Admin label | 700 ms + 200 ms settle | Three features | Indefinite hold |
| Reveal 6 | กว่าสิบเท่า | Spacebar | Footnote 10× OpenAI-reported | 700 ms + 200 ms settle | Footnote static | Indefinite hold |
| Exit | เสาที่สี่ | Spacebar on the hold | Fade | 400 ms | S09 entry | After the footnote hold |

## Scene specification — S09

~~~yaml
SCENE_ID: S09
CONTENT_REFERENCE: "references/scenes.md#S09"
CLAIM_IDS: [C15, C16, C17, C19]
AUDIENCE_TAKEAWAY: "API fuel added GPT-5 Pro, Sora 2, and smaller models OpenAI priced as much cheaper."
VISUAL_JOB: "Three cards under the line API fuel. Percent labels stay on the mini card only."
MEDIUM: 2D
MEDIUM_REASON: "Three names are a set, not a price chart. Dollar prices were not cleared for the canvas."
FOCAL_SUBJECT: "Row of three model cards"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Row center x=0.50, y=0.54"
  BOUNDS: "Title API fuel at y=0.16, Title 48. Three cards, gap 24 px, each about 520 px wide and 400 px tall, inside the safe area."
  SUPPORTING_OBJECTS: "One label block per card. No chips, no prices, no icons of video players."
  NEGATIVE_SPACE: "Inside the GPT-5 Pro and Sora 2 cards, under the name. Do not fill that space with extra facts."
  SAFE_AREA_CHECK: "The mini card's percent line stays at least 32 px and inside the card."
VISIBLE_COPY: "API fuel"
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "GPT-5; Pro; Sora; 2; mini; −70%; −80%"
ESSENTIAL_LABEL_REASON: "Model names are the evidence. The two percent tokens are OpenAI's relative-cost claims (C17) and must stay on the mini card only. Narration, not the canvas, says they are OpenAI claims."
TOTAL_VISIBLE_WORD_COUNT: 9
COUNT_METHOD: "Ordinary words are API fuel (2). Content's total of 8 counted −70%/−80% as one token. This plan counts −70% and −80% as two visible tokens so neither number disappears. No new words were added."
STATE_WORD_INVENTORY:
  - {state: S09-entry, ordinary: "API fuel", essential: NONE, ordinary_count: 2, essential_count: 0, total: 2}
  - {state: S09-R1, ordinary: "API fuel", essential: "GPT-5, Pro", ordinary_count: 2, essential_count: 2, total: 4}
  - {state: S09-R2, ordinary: "API fuel", essential: "GPT-5, Pro, Sora, 2", ordinary_count: 2, essential_count: 4, total: 6}
  - {state: S09-hold, ordinary: "API fuel", essential: "GPT-5, Pro, Sora, 2, mini, −70%, −80%", ordinary_count: 2, essential_count: 7, total: 9}
DATA_SPEC: "NOT a chart. Percents are labels. See the chart section for units and the misread to prevent."
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "Reveal GPT-5 Pro, then Sora 2, then the mini card as each is spoken."
ENTRY_STATE: "Title API fuel only."
REVEAL_BEATS: ["Card GPT-5 Pro", "Card Sora 2", "Card mini with −70% and −80%"]
SETTLE_STATE: "Three cards. No status chips. Percent glyphs only on the third card."
HOLD_STATE: "Static cards."
EXIT_STATE: "400 ms fade to S10."
REDUCED_MOTION: "Each card crossfades in at most 150 ms."
BACK_NAVIGATION: "If Left Arrow is implemented, show S08 final hold. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial."
FALLBACK: "Code-drawn. Do not replace missing prices with estimated prices."
FACTUAL_BOUNDARIES: "No dollar prices and no snapshot id gpt-5-pro-2025-10-06 on the canvas. Do not add the word Pro to the Sora card; narration names Sora 2 Pro, and the locked label is Sora 2. The card must not be read as a denial that Sora 2 Pro exists. Do not assign −80% to image and −70% to realtime on the canvas; narration carries that split (C17). Do not add an OpenAI claim caption. Do not add GA chips (DS17)."
IMPLEMENTATION_NOTES: "Paint the minus as − (U+2212) or a hyphen, consistently, at 32 px or larger. Alt: Three API cards labeled GPT-5 Pro, Sora 2, and mini with minus 70 percent and minus 80 percent."
LANGUAGE_AUDIT: "English and numerals only."
POINTER_CONTRAST_CHECK: "Dark cards, standard cyan dot and outline."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-006: ordinary line is API fuel. Percents appear only on the mini card. Total on the hold is 9."
  - "AC-001: no dollar amount and no GA chip (C15, C17)."
  - "AC-005: percent text at least 32 px inside the safe area."
  - "AC-008 / AC-010 / AC-012: three reveals, static hold, same endpoints under reduced motion."
~~~

### Timing / cue map — S09

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | เสาที่สี่ | Spacebar from S08 | Title API fuel | 500 ms + 200 ms settle | Title only | Indefinite hold |
| Reveal 1 | GPT-5 Pro | Spacebar | GPT-5 Pro card | 700 ms + 200 ms settle | One card | Indefinite hold |
| Reveal 2 | Sora 2 | Spacebar | Sora 2 card | 700 ms + 200 ms settle | Two cards | Indefinite hold |
| Reveal 3 | โมเดลมินิ | Spacebar | mini card with −70% and −80% | 700 ms + 200 ms settle | Three cards | Indefinite hold |
| Exit | บิลเดอร์ควรทำอะไรต่อ | Spacebar on the hold | Fade | 400 ms | S10 entry | After the three-card hold |

### Chart specification — S09 percents are labels, not a chart

| Field | Value |
|---|---|
| Claim/source IDs | C17. Sources are the content register, not a new lookup. |
| Dataset path and exact values | No dataset file. Visible tokens are −70% and −80% on the mini card only. |
| Unit / period / denominator | OpenAI's announced relative cost versus the named larger models at DevDay. Image mini versus gpt-image-1 and realtime mini versus gpt-realtime are spoken, not printed as extra names. |
| Encoding and scale | Text labels. No bar length, no axis, no log scale. Card size is layout, not a measurement. |
| Uncertainty / missing data | Vendor comparison, not an audit. Dollar prices are omitted on purpose. |
| Ordinary copy budget | API fuel. 2 ordinary words. |
| Essential data label exclusions | GPT-5, Pro, Sora, 2, mini, −70%, −80%. The percents are required so the mini card is not only the word mini. |
| Narrated detail | Which percent belongs to image versus realtime, and that these are OpenAI claims. |
| Misinterpretation to prevent | Do not read the card widths as savings. Do not read the percents as discounts off a printed dollar price. |

## Scene specification — S10

~~~yaml
SCENE_ID: S10
CONTENT_REFERENCE: "references/scenes.md#S10"
CLAIM_IDS: [C19, C20, C05, C07, C08, C11]
AUDIENCE_TAKEAWAY: "Pick a next build — a ChatGPT app, an embedded agent, or Codex — and keep preview distinct from GA."
VISUAL_JOB: "Three paths. Apps keeps Preview, Codex keeps GA, Agents has no single chip."
MEDIUM: 2D
MEDIUM_REASON: "The close is a decision map. The spoken closing sentence would break the copy lock if it were printed."
FOCAL_SUBJECT: "Three path cards under Platform first"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "Row center x=0.50, y=0.54"
  BOUNDS: "Title Platform first at y=0.16, Title 48, max width 0.42. Three cards, gap 32 px, each about 500 px wide and 420 px tall."
  SUPPORTING_OBJECTS: "Left card Apps with amber Preview chip. Center card Agents with no chip. Right card Codex with green GA chip."
  NEGATIVE_SPACE: "Inside the Agents card, so the missing chip is visible as a choice, not as an unfinished layout. Do not drop a question mark or an empty chip outline that looks broken."
  SAFE_AREA_CHECK: "Chips and names at least 32 px, all inside the safe area."
VISIBLE_COPY: "Platform first"
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Apps; Preview; Agents; Codex; GA"
ESSENTIAL_LABEL_REASON: "The three path names are the decision map. Preview and GA are required by DS22 so Apps is not mistaken for GA and Codex is not left unlabeled. Agents has no chip because its parts are mixed (C08 versus C07)."
TOTAL_VISIBLE_WORD_COUNT: 7
COUNT_METHOD: "Content's total of 5 listed Apps, Agents, and Codex only. This plan adds Preview and GA because Design locked those chips. Ordinary words stay Platform first (2)."
STATE_WORD_INVENTORY:
  - {state: S10-entry, ordinary: "Platform first", essential: NONE, ordinary_count: 2, essential_count: 0, total: 2}
  - {state: S10-R1, ordinary: "Platform first", essential: "Apps, Preview", ordinary_count: 2, essential_count: 2, total: 4}
  - {state: S10-R2, ordinary: "Platform first", essential: "Apps, Preview, Agents", ordinary_count: 2, essential_count: 3, total: 5}
  - {state: S10-hold, ordinary: "Platform first", essential: "Apps, Preview, Agents, Codex, GA", ordinary_count: 2, essential_count: 5, total: 7}
DATA_SPEC: NOT_APPLICABLE
ASSETS: []
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "แล้วบิลเดอร์ควรทำอะไรต่อ — Apps path, then Agents path, then Codex path. The closing sentence stays spoken."
ENTRY_STATE: "Title Platform first only."
REVEAL_BEATS: ["Apps card with Preview chip", "Agents card with no chip", "Codex card with GA chip"]
SETTLE_STATE: "Three cards. Preview ink #0B0B0F on #F59E0B. GA ink #0B0B0F on #10A37F. Agents has the name only."
HOLD_STATE: "Static final frame. No second line of takeaway text."
EXIT_STATE: "No forward exit. Spacebar on this hold does nothing. R is the way back to S01."
REDUCED_MOTION: "Each card crossfades in at most 150 ms with its chip already in the final color."
BACK_NAVIGATION: "If Left Arrow is implemented, show S09 final hold. Otherwise NOT_APPLICABLE."
RETURN_TO_COVER: "R cancels and shows S01 initial, including when this scene is on its final hold."
FALLBACK: "Code-drawn."
FACTUAL_BOUNDARIES: "Do not print the closing sentence. Do not add revenue, monetization, or dates. Do not put a single chip on Agents. Do not mark Apps as GA. Do not add ChatKit or Evals as extra words; narration carries that split."
IMPLEMENTATION_NOTES: "Forward boundary: further Spacebar events are ignored while the final hold is settled. They must not queue a ghost transition. Alt: Three paths. Apps in preview, Agents with no single status, Codex generally available. The line Platform first."
LANGUAGE_AUDIT: "English only."
POINTER_CONTRAST_CHECK: "Outline required on the Preview chip and the GA chip, same as S04 and S08."
COVER_AUTHENTICITY: NOT_APPLICABLE
QA_ASSERTIONS:
  - "AC-006: ordinary line is only Platform first. Hold total 7. No closing sentence on the canvas."
  - "AC-011: Spacebar on the final hold does not advance or loop. R returns to S01 initial."
  - "AC-001: Apps chip stays Preview, Codex chip stays GA, Agents has no chip (C05, C11, C20, DS22)."
  - "AC-007: no arrows between paths."
  - "AC-008 / AC-010 / AC-012 / AC-022: three reveals then a static hold; reduced motion matches; pointer outline on both chips."
~~~

### Timing / cue map — S10

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | แล้วบิลเดอร์ควรทำอะไรต่อ | Spacebar from S09 | Title Platform first | 500 ms + 200 ms settle | Title only | Indefinite hold |
| Reveal 1 | Apps SDK แบบพรีวิว | Spacebar | Apps card, Preview chip | 700 ms + 200 ms settle | Preview visible | Indefinite hold |
| Reveal 2 | เอเจนต์ในผลิตภัณฑ์ | Spacebar | Agents card, no chip | 700 ms + 200 ms settle | Agents unlabeled by status | Indefinite hold |
| Reveal 3 | Codex ที่เป็นจีเอ | Spacebar | Codex card, GA chip | 700 ms + 200 ms settle | Three paths | Indefinite hold while the closing sentence is spoken |
| Exit | End of story | None. Spacebar does nothing | No change | n/a | Stay on the three paths | R returns to S01 initial |

## Chart specification

No scene uses a statistical chart. Card sizes, column heights, and the S05 frame-size change are layout, not data. Builder must not add axes.

### S08 footnote, not a chart

| Field | Value |
|---|---|
| Claim/source IDs | C13. Company-reported. Do not add C14's token-volume figure. |
| Dataset path and exact values | No dataset file. The only painted number is 10×. |
| Unit / period / denominator | OpenAI's statement of daily Codex usage growth since early August, as recorded in the claim register. Methodology is not independently audited. |
| Encoding and scale | Two text tokens, 10× and OpenAI-reported, in #6B7280, at least 32 px. Not bar length. |
| Uncertainty / missing data | Shown by the words OpenAI-reported. No error bar, because no interval was published in the claim. |
| Ordinary copy budget | Codex is GA. 3 ordinary words on the settled hold. |
| Essential data label exclusions | Slack, SDK, Admin, 10×, OpenAI-reported. |
| Narrated detail | Plan-tier gates and the early-August window. |
| Misinterpretation to prevent | A chart would look like a third-party time series. The footnote is the correction. |

S09's percent labels are specified in that scene. They are not redrawn here as a chart.

## Asset manifest

The maintained table is `assets/manifest.md`. It matches this section. Runtime diagrams for S02–S10 are drawn from the tokens above. They are not image files.

| Asset ID | Repo-relative runtime path | Origin/source URL | Rights/license | Type/resolution/size | Crop/focal point | Attribution | Generated? | Fallback | State |
|---|---|---|---|---|---|---|---|---|---|
| A-COVER-WORDMARK | assets/cover/openai-wordmark-2025.svg | https://commons.wikimedia.org/wiki/File:OpenAI_logo_2025_(wordmark).svg ; file path https://commons.wikimedia.org/wiki/Special:FilePath/OpenAI_logo_2025_(wordmark).svg ; upstream cited on Commons https://openai.com/brand/ | OpenAI trademark. Commons PD-textlogo note does not remove trademark. Educational local cover, not sponsorship. | SVG, viewBox 0 0 269.6592 72.5157, 1799 bytes, paths only | Full wordmark, no crop. Display width 691 px, centered. | No on-canvas credit line. Provenance in assets/cover/PROVENANCE.md. | NO | A-COVER-BLOSSOM alone | READY |
| A-COVER-BLOSSOM | assets/cover/openai-blossom-2025.svg | https://commons.wikimedia.org/wiki/File:OpenAI_logo_2025_(symbol).svg ; upstream https://openai.com/brand/ | Same trademark limits. Symbol only. | SVG, viewBox 1.68 1.75 16.65 16.5, 1894 bytes, paths only | Full symbol, no crop. Display about 200 px square. | No on-canvas credit line. | NO | If this also fails, no drawn logo. Package is an asset failure. | READY |
| A-FONT-INTER | assets/fonts/ (not vendored yet) | Inter, SIL Open Font License. Builder obtains the Latin woff2. | OFL-1.1. Ship the license notice with the font file. | Latin woff2, regular and medium, or a variable font. Not downloaded in this stage. | n/a | OFL notice inside the package, not on the audience canvas. | NO | system-ui, Segoe UI, Helvetica Neue, Arial, sans-serif | PENDING_BUILDER |

Cover authenticity: Agent 3 re-read both SVG files. They contain no `<text>` nodes and no Thai. The wordmark is the required S01 asset. The blossom is the fallback only. Do not trace, recolor the path data, or generate a substitute. White treatment is CSS fill `#F5F5F7` on the inlined paths. Do not stack the two files.

Partner marks for Coursera, Canva, Zillow, and Slack are intentionally absent. DS15 locks text labels unless a later provenanced file exists. None exists. Do not add one in the build.

## QA assertion map

Scene assertions above point at these rows in `05_QA.md`. Builder does not self-award a pass. QA checks the packaged build.

| Criterion | What the visual plan requires QA to see |
|---|---|
| AC-001 | Claim IDs on each scene. No price, no attendee count, no C14 token volume, no beta painted as GA. |
| AC-002 | Cue tables. Each Spacebar beat matches one spoken step. |
| AC-003 | S01–S10 only. S01 is the first frame. No extra scene. |
| AC-004 | 1920×1080 logical stage, letterboxed, not stretched. |
| AC-005 | Safe area, one focal subject, English labels at least 32 px when they carry a claim. |
| AC-006 | State inventories. Ordinary words 0–8 in every state. S07 total 12 is essential chips. |
| AC-007 | No chrome. The only content arrow is S04 Apps SDK down to MCP. |
| AC-008 | Spacebar settles then advances. R returns to S01 initial. Clicks not required. |
| AC-009 | Motion ends on the semantic endpoint. No loop. |
| AC-010 | Holds stay still, including a 30 s hold. No auto-advance. |
| AC-011 | R during motion cancels tweens. S10 Spacebar does not leave the scene. |
| AC-012 | Reduced motion crossfades at most 150 ms to the same words and chips. |
| AC-013 | Wordmark and blossom packaged. No generated cover. Inter packaged by Builder or the named fallback. |
| AC-014 | Status is a word plus a fill. Chip ink follows DS04. |
| AC-022 | Cyan dot, dark outline, 14 px, no trail, no click capture, hidden outside the stage. |
| AC-023 | Wordmark visible at load and after R. Blossom only if the wordmark fails. |
| AC-024 | Canvas and alt text English. Thai only in narration and the notes below. |

AC-015 through AC-021 are build and package checks. This plan does not invent performance numbers. There is no WebGL fallback to test (AC-013 WebGL is not applicable because no scene uses WebGL).

## Builder brief inputs

`04_BUILD.md` stays the implementation brief. Do not treat this visual plan as a license to build during the visual stage. When Builder starts, these inputs are already decided:

- Logical stage 1920×1080, fit and letterbox, safe area 5 percent.
- Scene order S01–S10. Data should carry the scene IDs, claim IDs, and the state inventories in this file.
- Draw S02–S10 in CSS or SVG from the tokens. Do not generate illustrations.
- Inline the cover SVG. Package both cover files. Package Inter Latin woff2 under `assets/fonts/` with the OFL notice before the ZIP, per DS02 and DS24.
- Implement the keyboard and pointer rules in the shared contract. Document optional Left Arrow, F, and P only if they are actually built, and only outside the canvas.
- English `lang=en` on the presentation root. Alt strings are the ones in each scene's implementation notes.
- No chart library is required.
- After the build, Agent 4 writes Thai `06_SCENE_RATIONALE` from the notes below plus what the build actually shows. Those notes are a draft, not the Drive document.

## Owner rationale draft input

Thai draft for Agent 4. Keep it in GitHub. The Drive document is created after the build, in the existing topic folder.

~~~yaml
S01: "ฉากนี้ปักหมุดว่าเรื่องคือ OpenAI DevDay 2025 และเป็นจอที่ปุ่ม R ต้องกลับมาทุกครั้ง ใช้เวิร์ดมาร์กทางการทั้งไฟล์บนพื้นเข้ม ไม่ใช่ภาพที่วาดขึ้น การเคลื่อนไหวมีแค่บรรทัดชื่อใต้โลโก้ โลโก้เองทึบตั้งแต่เฟรมแรก สิ่งที่จงใจไม่โชว์คือจำนวนผู้ร่วมงานหรือคำโฆษณางาน"
S02: "ช่วยให้จำภาพเดียวว่าซอฟต์แวร์กำลังถูกวางให้วิ่งในการสนทนา กรอบวงเล็บคือขอบเขตของพื้นผิวแชท ไม่ใช่ระบบปฏิบัติการ จึงไม่มีชิปสถานะและไม่มีหน้าต่างเดสก์ท็อป ประโยคภาษาอังกฤษโผล่ทีหลังกรอบ"
S03: "เป็นแผนที่สี่เสาก่อนลงรายละเอียด เผยทีละใบตามคำบรรยาย ไม่มีลูกศรเพราะไม่ใช่ปุ่มถัดไป และไม่ได้บอกว่านี่คือกำหนดการทุกเซสชัน วันที่กับเมืองอยู่ในเสียงบรรยาย"
S04: "แสดงว่า Apps SDK อยู่บน MCP และสถานะวันงานคือ Preview ชิปสีอำพันต้องค้างไว้ ลูกศรเส้นเดียวชี้ลงหา MCP ไม่ใช้สีเขียวเพราะไดเรกทอรีสาธารณะยังไม่เปิดวันนั้น"
S05: "ทำให้เดโมจับต้องได้ด้วยชื่อ Coursera, Canva, Zillow เป็นตัวอักษร เพราะยังไม่มีไฟล์โลโก้ที่ตรวจสิทธิ์แล้ว ขนาดกรอบในใบ Zillow เปลี่ยนจากเล็กเป็นใหญ่เพื่อบอกอินไลน์กับเต็มจอ โดยไม่เพิ่มคำ รายชื่อเป็นตัวอย่าง ไม่ใช่รายชื่อพันธมิตรแบบผูกขาด และไม่ใช่ตัวเลขรายได้"
S06: "ตั้งชื่อ AgentKit เป็นร่ม แล้วเปิดห้าช่องว่างไว้ให้ฉากถัดไป ช่องว่างไม่มีชื่อและไม่มีชิป เพื่อไม่ให้ผู้ชมเข้าใจว่าชุดนี้แก้ทุกปัญหาของเอเจนต์"
S07: "นี่คือวิธีไม่ขายเบตาเป็นของพร้อมใช้ Builder เป็น Beta, ChatKit กับ Evals เป็น GA, Guardrails มีแค่ชื่อบนชิปสีกลาง, Connectors เป็น Limited beta สีกับคำต้องไปด้วยกัน"
S08: "พา Codex จากชิป Preview ไปเป็น GA แล้วค่อยวาง Slack, SDK, Admin เชิงอรรถ 10× บอกว่าเป็นตัวเลขที่ OpenAI รายงานเอง ไม่ทำเป็นกราฟเพราะไม่มีชุดข้อมูลที่ตรวจทานได้"
S09: "สามการ์ดคือเชื้อเพลิง API ชื่อโมเดลตามที่ล็อกไว้ เปอร์เซ็นต์อยู่บนการ์ดมินิเท่านั้น ไม่ใส่ราคาดอลลาร์ และไม่ติดชิป GA คำว่าเป็นเคลมของผู้ขายอยู่ในเสียงบรรยาย"
S10: "สามทางให้ลงมือต่อ Apps ยังเป็น Preview, Agents ไม่มีชิปเดียวเพราะสถานะภายในปนกัน, Codex เป็น GA ประโยคปิดอยู่ในเสียง ไม่ขึ้นจอ และไม่มีไทม์ไลน์รายได้"
~~~

## Exit criteria and handoff

- Every content scene and narration beat has an implementable visual, cue, stable hold, transition, and reduced-motion treatment.
- Ordinary-copy counts target 0–8 with justified essential chart/data label exclusions and total counts; no visible controls, page/scene numbers, progress bars/dots, UI/navigation arrows or persistent UI. Explanatory content arrows are permitted only when minimal, semantically necessary, subordinate to the focal subject and clearly unlike controls.
- Chart data, provenance, rights, and runtime paths are verified; unresolved items are blockers.
- 04_BUILD.md remains available as the implementation brief; 05_QA.md is read and scene assertions are mapped to it.
- Publish artifacts then status: STAGE=READY_FOR_BUILD; NEXT_ACTOR=Agent 4 — Builder.
- NEXT_ACTION: “Read 01–05 and the asset manifest. Fill 04_BUILD.md's implementation choices, build the planned web presentation, record BUILD_NOTES.md and verified package metadata, and create 06_SCENE_RATIONALE in the exact recorded topic folder. Assemble the prebuilt LOCAL_ZIP with launchers, authentic cover and theme-adaptive pointer. Record BUILD_COMMIT, manifest, PACKAGE_SHA256 and observed package download identity. Prepare independent clean-extraction/offline QA and record any real packaging/delivery blocker.”
