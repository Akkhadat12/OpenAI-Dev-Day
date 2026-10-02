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
PROJECT_ID: <from status>
CONTENT_INPUT_COMMIT: <verified SHA>
DESIGN_INPUT_COMMIT: <verified SHA>
VISUAL_PLAN_VERSION: <version>
COVER_ASSET_ID: <verified authentic asset ID>
POINTER_SPEC_REFERENCE: 02_DESIGN_SYSTEM.md#presenter-pointer-and-authentic-first-cover
SCENE_COUNT: <actual>
ASSET_MANIFEST_PATH: assets/manifest.md
~~~

| Scene ID | Narration takeaway | Medium | Focal subject | Ordinary words / excluded data labels / total | Duration estimate | Claim IDs | Asset status |
|---|---|---|---|---|---|---|---|
| S01 | <one idea> | <medium> | <subject> | <ordinary 0–8 / excluded / total> | <seconds> | <IDs> | READY/PENDING |

## Scene specification — repeat for every scene

~~~yaml
SCENE_ID: S01
CONTENT_REFERENCE: "01_CONTENT.md#<section>"
CLAIM_IDS: [<IDs>]
AUDIENCE_TAKEAWAY: <one sentence>
VISUAL_JOB: <why a visual is needed>
MEDIUM: <2D/chart/real/3D/hybrid>
MEDIUM_REASON: <narration-specific reason>
FOCAL_SUBJECT: <object/evidence>
EXPLANATORY_ARROWS: <NONE or minimal arrows with exact relationship/direction, endpoints, semantic job, hierarchy, reveal/hold behavior; never navigation/control styling>
COMPOSITION:
  ANCHOR: <x/y as normalized canvas coordinates>
  BOUNDS: <width/height relative to 16:9 canvas>
  SUPPORTING_OBJECTS: <count, hierarchy, anchors>
  NEGATIVE_SPACE: <where and why>
  SAFE_AREA_CHECK: <no essential clipping>
VISIBLE_COPY: <exact English ordinary copy or empty>
VISIBLE_WORD_COUNT: <ordinary count targeting 0–8 across the entire scene>
ESSENTIAL_DATA_LABELS: <exact English indispensable labels/values/units/legend or NONE>
ESSENTIAL_LABEL_REASON: <why each excluded item is required for truthful reading>
TOTAL_VISIBLE_WORD_COUNT: <ordinary plus excluded items>
COUNT_METHOD: <ordinary versus essential-data distinction; Thai segmentation if needed>
DATA_SPEC: <verified values/encoding, or NOT_APPLICABLE>
ASSETS: [<manifest IDs and repo-relative paths>]
LIGHTING_CAMERA: <3D-only details, or NOT_APPLICABLE>
NARRATION_CUE: <exact phrase that cues entry/reveal>
ENTRY_STATE: <geometry/opacities and what is immediately understandable>
REVEAL_BEATS: <ordered list; expand in timing table>
SETTLE_STATE: <precise endpoint after each reveal>
HOLD_STATE: <stable composition; no decorative continuous motion>
EXIT_STATE: <transition and semantic link to next scene>
REDUCED_MOTION: <same meaning with stable endpoints>
BACK_NAVIGATION: <previous settled scene if optional Left Arrow is implemented; otherwise NOT_APPLICABLE>
RETURN_TO_COVER: <R cancels current motion and selects first scene initial state>
FALLBACK: <asset/WebGL/network failure plan preserving meaning>
FACTUAL_BOUNDARIES: <what this picture must not imply>
IMPLEMENTATION_NOTES: <required behavior, not speculative claims>
LANGUAGE_AUDIT: <English canvas/semantic text and embedded media checked; explicit source-inscription exceptions if any>
POINTER_CONTRAST_CHECK: <dot/outline remains visible over this scene without obstructing the focal subject>
COVER_AUTHENTICITY: <S01 source/asset verification and initial/reset visibility; otherwise NOT_APPLICABLE>
QA_ASSERTIONS: <scene-specific checks and evidence to capture>
~~~

### Timing / cue map — repeat per scene

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | <cue> | <Space/entry> | <change> | <timing> | <endpoint> | <indefinite hold> |
| Reveal 1 | <cue> | Space | <change> | <timing> | <endpoint> | <next deliberate key> |
| Exit | <cue> | Space at final hold | <change> | <timing> | <next entry> | <condition> |

Normal motion order is Transition → Reveal → Settle → Hold. No timed advance is implied by these estimates. Spacebar is the complete forward route. During a reveal it may first settle the current beat before advancing; R cancels motion and returns to cover. No additional default forward key or object click is required.

### Chart specification — required for data scenes

| Field | Value |
|---|---|
| Claim/source IDs | <verified IDs> |
| Dataset path and exact values | <repo-relative path; preserve source units> |
| Unit / period / denominator | <scope> |
| Encoding and scale | <linear/log, area/length, baseline and justification> |
| Uncertainty / missing data | <how handled> |
| Ordinary copy budget | <exact copy, default target 0–8, and count> |
| Essential data label exclusions | <exact labels/values/units, necessity of each, excluded and total counts> |
| Narrated detail | <detail moved out of canvas without changing meaning> |
| Misinterpretation to prevent | <risk and design response> |

## Asset manifest

Store in assets/manifest.md or as a maintained section here.

| Asset ID | Repo-relative runtime path | Origin/source URL | Rights/license | Type/resolution/size | Crop/focal point | Attribution | Generated? | Fallback | State |
|---|---|---|---|---|---|---|---|---|---|
| A01 | assets/<name> | <actual source> | <permission> | <spec> | <coordinates> | <requirements> | YES/NO | <path/behavior> | READY/PENDING |

Add authenticity (official logo/original character/real photograph/illustration), verification notes and any required credit for the cover. If attribution must appear on the canvas, include it in the copy budget; prefer an asset whose permitted use fits the presentation. An authentic fallback must itself be available in the package.

Reference-only material belongs in references/. Runtime assets must be available from the repo/build's portable asset path; never depend on a local absolute path or an expiring authenticated Drive URL or external CDN. All required presentation assets, including cover and fonts, must be included in the local package.

## Owner rationale draft input

For each scene supply a short Thai plain-language note: what it helps the audience understand, why this medium/composition was chosen, what motion demonstrates, and what remains uncertain. Keep this draft in GitHub. Agent 4 turns it into 06_SCENE_RATIONALE in the existing topic folder after verifying the actual build.

## Exit criteria and handoff

- Every content scene and narration beat has an implementable visual, cue, stable hold, transition, and reduced-motion treatment.
- Ordinary-copy counts target 0–8 with justified essential chart/data label exclusions and total counts; no visible controls, page/scene numbers, progress bars/dots, UI/navigation arrows or persistent UI. Explanatory content arrows are permitted only when minimal, semantically necessary, subordinate to the focal subject and clearly unlike controls.
- Chart data, provenance, rights, and runtime paths are verified; unresolved items are blockers.
- 04_BUILD.md remains available as the implementation brief; 05_QA.md is read and scene assertions are mapped to it.
- Publish artifacts then status: STAGE=READY_FOR_BUILD; NEXT_ACTOR=Agent 4 — Builder.
- NEXT_ACTION: “Read 01–05 and the asset manifest. Fill 04_BUILD.md's implementation choices, build the planned web presentation, record BUILD_NOTES.md and verified package metadata, and create 06_SCENE_RATIONALE in the exact recorded topic folder. Assemble the prebuilt LOCAL_ZIP with launchers, authentic cover and theme-adaptive pointer. Record BUILD_COMMIT, manifest, PACKAGE_SHA256 and observed package download identity. Prepare independent clean-extraction/offline QA and record any real packaging/delivery blocker.”


