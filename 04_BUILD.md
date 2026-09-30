# 04_BUILD.md — Agent 4: Builder

Build defines execution. This brief exists before implementation; Builder fills the project choices and records the actual result in BUILD_NOTES.md.

## Shared contract — mandatory for every agent

This is one of five reusable workflow templates, version 1.4, dated 2026-09-30. The master copies live in 00_WORKFLOW, the reusable template library:
https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n

For a topic, Agent 1 copies all five templates into the chosen GitHub repository and fills their project sections. The five master templates remain reusable. Topic-specific technical files are maintained in GitHub; do not mirror them back into Drive.

### Drive organization — templates and project outputs

~~~yaml
WORKFLOW_FOLDER: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
WORKFLOW_FOLDER_ID: 1WcszSRTyebajZj1FuLE-wCuKehyInE8n
TEMPLATE_LIBRARY_URL: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
TOPIC_DRIVE_PARENT: https://drive.google.com/drive/folders/153uw4BMBT78VS6TQgGelanIzXPomkzZt
TOPIC_DRIVE_PARENT_ID: 153uw4BMBT78VS6TQgGelanIzXPomkzZt
~~~

00_WORKFLOW contains only START_HERE.md and the five reusable workflow specifications. Agent 1 reads all six here before bootstrap. Do not create topic folders or owner outputs in 00_WORKFLOW.

01_PROJECTS is the only default parent for future owner folders. Agent 1 creates <Topic Name> - <PROJECT_ID> under this exact parent, then records the returned OWNER_DRIVE_FOLDER URL/ID in README.md and WORKFLOW_STATUS.md. The parent and topic-folder identity are different fields.

Later agents reuse that exact recorded owner folder and ID; never create new/final/v2/replacement/duplicate topic folders. Keep the same four owner-facing deliverables there; technical workspace files stay in GitHub and are not mirrored into each project folder. Do not recreate or relocate an existing run's folder merely because the library was reorganized.

### FRESH bootstrap and continuation are distinct

- Entry through START_HERE.md is always BOOTSTRAP_MODE=FRESH. Agent 1 receives the workflow folder, TOPIC and GITHUB_REPOSITORY and starts a new assignment even in an old repo. Old README/status is historical context, never current state or an instruction to resume.
- Inspect the actual default branch and existing branches first. Generate a unique PROJECT_ID and create a new uniquely named normal Git branch from an appropriate existing base, preserving repository history and compatible infrastructure. Record DEFAULT_BRANCH, the chosen base/commit, BRANCH and exact BRANCH_URL. A name such as project/<topic>-<date-or-project-id> is recommended, not mandatory. Never automatically reuse an old assignment branch.
- Main/default branch is READ-ONLY BY DEFAULT for FRESH work; write there only on an explicit owner instruction. Never reset, delete, rename, overwrite or force-push an old branch; never delete Git history or the repository. All agents work only on this assignment's exact branch unless the workflow explicitly changes it. An interrupted bootstrap retries its already created branch; a later branch-URL continuation never creates another assignment.
- On the new branch initialize fresh README.md, WORKFLOW_STATUS.md and the five current specifications. Start PLANNING/Content with no inherited thesis, scenes, narration, Drive folder, workflow stage, QA findings/pass, build/deployment identity, production verification, blockers or NEXT_ACTOR/NEXT_ACTION. Reuse compatible tooling/configuration, not stale assignment values. Consult old content only as historical/reference material when explicitly useful and revalidate it.
- Cleanup is limited to files clearly belonging to the previous assignment and only on the new branch. Preserve .gitignore, package-manager setup, reusable tooling, repository settings, compatible framework/deployment configuration and CI/CD as appropriate. Never change old branches or main/default during cleanup. If ownership or compatibility is unclear, preserve the file and document the ambiguity and handling in references/bootstrap-notes.md; do not delete blindly. Record the chosen base and scoped cleanup there.
- Persist/push this run's PROJECT_ID and branch in seed README/status before cloud creation. Agent 1 creates one owner folder per PROJECT_ID under 01_PROJECTS, named <Topic Name> - <PROJECT_ID> for recovery; another FRESH run is separate. Retries recover the same recorded folder. Later agents reuse the exact OWNER_DRIVE_FOLDER and OWNER_DRIVE_FOLDER_ID and cannot create replacements.
- Initialize deployment selection as UNSET, PRODUCTION_URL=NOT_DEPLOYED_YET, build/source verification=NOT_VERIFIED, deployment identity=UNSET, OPEN_FINDINGS=[] and QA_RESULT=NOT_RUN. Builder inspects the repository's existing Vercel relationship first and reuses a clearly associated suitable project by default. Create a project only if none is suitable, old production must be preserved separately, configuration/scope/root is unsafe or incompatible, access prevents reuse, or the owner requests separation; record the reason. Access still must permit any chosen alternative.
- Reusable Vercel infrastructure is distinct from old deployment results. An old URL, build commit, deployment ID, verification or QA pass is never evidence for this assignment. After deployment Builder verifies the current BUILD_COMMIT at the recorded public PRODUCTION_URL and records current project/team/environment/deployment/source/time metadata. Preserve old production during bootstrap; deployment must respect current authorization and any preservation requirement. All fix cycles reuse the selected project unless a change has a documented reason.
- An exact BRANCH_URL plus “Continue this project from the current workflow state.” always continues its recorded PROJECT_ID. Later agents discover roles from README/status and follow REQUIRED_INPUTS. BOOTSTRAP_MODE=FRESH describes how the run began; it never tells later agents to restart, reset findings, create another branch or create a new folder.

### Start, identity, and scope

1. For continuation of an initialized run, open README.md first on the supplied GitHub branch, then open the latest committed WORKFLOW_STATUS.md immediately after. Read NEXT_ACTOR and NEXT_ACTION and infer your workflow role from repository state before doing any work. Verify PROJECT, REPOSITORY, BRANCH, BRANCH_URL, PROJECT_ID, STAGE, required inputs, OPEN_FINDINGS, BLOCKERS, OWNER_DRIVE_FOLDER, VERCEL_PROJECT, and PRODUCTION_URL. The owner supplies only the current branch URL and “Continue this project from the current workflow state.”; the owner does not assign later agents their roles.
2. After FRESH bootstrap has chosen its new branch, or for a continuation request, clone or locate that exact repo and check out that exact branch. A local checkout path is machine-specific; all durable file references are relative to the repo root. Never depend on chat memory, another agent's temporary directory, or an owner's machine path.
3. Read all project files required by the discovered stage and its REQUIRED_INPUTS, plus upstream specifications and the acceptance criteria in 05_QA.md, before work. Perform the recorded stage. Do not silently change the thesis, content, design rules, branch, Drive folder, or Vercel project.
4. Respect recorded owner decisions. Raise a reasoned objection when evidence contradicts a proposed claim. Do not agree merely to please the owner. Never ask the owner to repeat the role, instructions, thesis, project paths, Drive folder, Vercel URL, findings, scene numbers, or build status already recorded in the repository. The owner acts as dispatcher and decision-maker, not as a relay between agents. Ask only for essential missing decisions or access that the repo cannot supply; continue independent work.
5. Record unresolved values as UNSET, NOT_CREATED_YET, NOT_DEPLOYED_YET, or NOT_VERIFIED, with the next action. Never invent repo URLs, folder IDs, commit hashes, source evidence, access, deployment success, or QA success.
6. Work sequentially on the active branch. Detect upstream changes before committing; preserve others' changes, avoid force-pushes, and resolve conflicts explicitly. An agent handoff is durable only after the commits are pushed and their files are readable on the remote branch.

### Drive ownership and storage

- Only Agent 1 (Content/Research) may create the per-topic owner folder for a FRESH assignment. Create at most one folder per PROJECT_ID directly under the recorded TOPIC_DRIVE_PARENT=01_PROJECTS, named <Topic Name> - <PROJECT_ID>. Never create it in WORKFLOW_FOLDER=00_WORKFLOW. Reuse a folder only when verified as this same run during continuation/bootstrap recovery; never import an older run's folder. Commit/push its returned URL/ID before owner-document writes.
- Record the real OWNER_DRIVE_FOLDER URL and OWNER_DRIVE_FOLDER_ID immediately in README.md and WORKFLOW_STATUS.md. The library/root folder and the per-topic folder are different fields.
- Agents 2–5 must reuse the exact topic folder recorded in the latest committed WORKFLOW_STATUS.md. They must never create a second assignment folder, including a “new”, “final”, “v2”, duplicate, or replacement folder.
- Before every Drive write, read the latest committed folder ID/URL and verify folder access. Missing, conflicting, or inaccessible folder records are a blocker; later agents request Agent 1 to repair the record rather than guessing or creating a replacement.
- Preserve existing sharing and ownership. “Folder owner” here identifies the workflow creator; it does not instruct agents to transfer Google Drive ownership or broaden permissions.
- GitHub owns README.md, WORKFLOW_STATUS.md, 01–05 specifications, BUILD_NOTES.md, references/, assets/, src/, dependency lockfiles, and qa/ evidence. Use repo-relative paths.
- Drive owns the owner's reading, rehearsal, and rationale deliverables: 01_KNOWLEDGE_SUMMARY.pdf, 02_RESEARCH_AND_ANALYSIS.pdf, 03A_NARRATION_SCRIPT (editable Thai Google Doc), and 06_SCENE_RATIONALE (final Thai Google Doc). Other Drive documents require an explicitly owner-facing purpose.
- Research notes and narration in 01_CONTENT.md are canonical authoring inputs. Drive reading documents are owner-facing editions generated from those inputs; log their source commit and refresh them when the inputs change. Owner edits in Drive must be reconciled into GitHub before downstream work continues.
- Before creating a Drive deliverable, consult its recorded file ID. Update the existing file when possible, preserving its identity. If replacement is necessary, record the superseded ID and current ID; do not leave several files ambiguously marked current.
- Every Drive artifact record includes file ID, observed URL, MIME/type, responsible agent, state, source commit, and last verification time. In-progress or failed writes cannot be marked READY.
- Secrets and credential values never belong in Markdown, Git, Drive, screenshots, or logs. Record environment variable names and configuration state only.

### Handoff and evidence

Deliverables and status must agree. Use this procedure:

1. Finish the stage's artifacts; verify its exit criteria. Commit and push the artifacts. Let the real resulting SHA be D.
2. Update WORKFLOW_STATUS.md with ARTIFACT_COMMIT=D, what was checked, evidence paths, Drive IDs/URLs, blockers, next actor, explicit next action, and exact required files. Preserve unrelated records.
3. Commit and push the status update as a separate handoff commit H. Do not put H's own hash inside H: that creates a self-referential hash problem. Record D in status and report the remote branch URL and H to the owner.
4. LAST_VERIFIED_COMMIT means the exact commit actually inspected. BUILD_COMMIT, DEPLOYMENT_COMMIT, and QA_TESTED_COMMIT have separate meanings; set them only after evidence exists. A later documentation-only status commit does not invalidate a tested build, but changed source/assets/dependencies require new build/deployment evidence and affected QA.
5. Read back the remote status and verify recorded Drive artifacts. A failed push, upload, deploy, or check stays PENDING/FAILED/BLOCKED with the reason and recovery action. Never advance a stage merely because a file exists.

Transitions:
PLANNING → READY_FOR_DESIGN → READY_FOR_VISUAL → READY_FOR_BUILD → BUILDING → READY_FOR_QA → QA.
If checks pass with no unresolved material findings: QA → QA_PASS.
If checks fail: QA → QA_FAIL → FIXING → READY_FOR_QA → QA. Repeat the fix/retest loop until QA_PASS.
Agent 4 publishes BUILDING or FIXING before implementation; Agent 5 publishes QA before testing. Only Agent 5 may set QA_PASS after independent retesting. QA never changes or deploys production code. Builder never marks its own build QA_PASS.
For access/missing decisions: set STAGE=BLOCKED and retain BLOCKED_FROM_STAGE; after resolution resume that stage.
After QA_PASS: owner final review/rehearsal → COMPLETE when required delivery is verified and the owner decision is recorded. Do not treat a nominal pass as the end while any material finding remains open. Publication of an already tested presentation remains the owner's decision.

Upstream changes invalidate affected downstream artifacts. Record INVALIDATED_BY_COMMIT, reset their status to STALE, and route NEXT_ACTOR to the earliest affected stage. Do not build from stale content or claim QA on an earlier deployment.

### Formal findings and production contract

- Every material QA finding has a stable ID QA-001, QA-002, QA-003, and so on. Allocate monotonically within the project, never renumber or reuse IDs, and preserve the same finding across fix/retest cycles.
- Each finding records affected scene/scope, severity, expected behavior, observed behavior, evidence, required correction, tested commit, and current status. Use OPEN, FIX_IN_PROGRESS, FIXED_PENDING_RETEST, REOPENED, or CLOSED. Only QA closes after independent retest. Keep complete finding history in qa/ reports; status carries current OPEN_FINDINGS and the report path.
- Agent 4 owns code fixes, build notes, and Vercel deployment metadata. At QA_FAIL it reads every OPEN_FINDINGS entry, publishes FIXING, addresses the required corrections, records exact fix commit(s) and a response for each finding ID, and redeploys to the same recorded Vercel production project.
- Builder verifies that the exact PRODUCTION_URL serves the new BUILD_COMMIT, using provider deployment/source metadata plus served-build evidence, then publishes READY_FOR_QA with NEXT_ACTOR=QA and NEXT_ACTION listing finding IDs and relevant regression checks. If provider/source/served identity cannot be verified, record a blocker.
- QA independently tests the exact recorded PRODUCTION_URL against BUILD_COMMIT, enters QA, and preserves IDs across retests. A new commit cannot inherit a prior pass without independent retesting. Preview checks may supplement production testing; they cannot replace it.
- Reuse the recorded VERCEL_PROJECT/project ID within this PROJECT_ID on every fix cycle unless the workflow explicitly instructs a project change. Do not create a new Vercel project per fix or retarget production silently.
- WORKFLOW_STATUS.md must contain PROJECT, PROJECT_ID, BOOTSTRAP_MODE, REPOSITORY, DEFAULT_BRANCH, BRANCH, BRANCH_URL, OWNER_DRIVE_FOLDER, OWNER_DRIVE_FOLDER_ID, STAGE, LAST_VERIFIED_COMMIT, ARTIFACT_COMMIT, VERCEL_PROJECT, VERCEL_PROJECT_ID, PRODUCTION_URL, BUILD_COMMIT, DEPLOYMENT_ID, QA_TESTED_COMMIT, OPEN_FINDINGS, BLOCKERS, NEXT_ACTOR, NEXT_ACTION and REQUIRED_INPUTS. Before project selection use VERCEL_PROJECT=UNSET; use NOT_CREATED_YET only when a justified new project is pending. PRODUCTION_URL=NOT_DEPLOYED_YET until the current assignment's deployment is verified.
- Keep status concise and current. Store finding details, historical run evidence, and handoff history under qa/ and references/workflow-history.md; do not turn status into a conversation transcript.
- These workflow instructions require production deployment at Build. They specify future topic execution, not a deployment during template editing. Honor topic authorization and service access; if required production deployment is blocked, preserve work and report BLOCKERS rather than substituting a preview-only success.

### Universal continuation prompt

~~~text
Continue this project from the current workflow state:
<the actual BRANCH_URL>

Open README.md first, then immediately open WORKFLOW_STATUS.md from that branch.
Verify the repo/branch, follow NEXT_ACTOR and NEXT_ACTION, and read the recorded required inputs and 05_QA.md.
Use repo-relative paths. Reuse the exact OWNER_DRIVE_FOLDER and Vercel identity in status.
Discover your role from NEXT_ACTOR and NEXT_ACTION; do not ask me to assign it.
Do not ask me to repeat instructions, role, paths, thesis, Drive/Vercel URLs, QA findings, or build status already recorded.
Complete the stage, verify its exit criteria, push its artifacts, and push an updated WORKFLOW_STATUS.md.
Return the branch URL, handoff commit, next action, and any real blocker.
~~~

The prompt is sufficient only when the agent has access to the repo and the services required by its stage. Missing credentials are reported precisely; they are never assumed.


## Role, inputs, and deliverables

Read README.md, WORKFLOW_STATUS.md, all five specifications, assets/manifest.md, and any existing implementation. Discover the Builder role from NEXT_ACTOR/NEXT_ACTION. Confirm STAGE=READY_FOR_BUILD, QA_FAIL (fix handoff), or FIXING, and the exact active branch. At READY_FOR_BUILD publish BUILDING; at QA_FAIL read all OPEN_FINDINGS and publish FIXING before changing implementation.

Deliver:
- Runnable web presentation and portable runtime assets in the repo.
- Filled implementation choices in this file.
- BUILD_NOTES.md containing actual setup/build/run steps, hidden keyboard guide, implemented scene map, deviations, performance observations, and deployment evidence.
- Builder-owned VERCEL_PROJECT, PRODUCTION_URL, BUILD_COMMIT and exact deployment/served-build evidence in WORKFLOW_STATUS.md for production QA.
- 06_SCENE_RATIONALE (final Thai Google Doc) in the existing OWNER_DRIVE_FOLDER.

Do not create another Drive folder, change a claim without Content review, or substitute generic slides for the planned scenes.

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
10. Verify ordinary visible copy, including media text, against each scene's default 0–8-word target. Preserve only justified essential chart/data label exclusions and record excluded and total counts. Keep script, detailed citations, and technical metadata out of the canvas.
11. Provide semantic descriptions and the separate reading/narration documents. Avoid color-only encodings. Recording mode cannot be an excuse for unusable keyboard navigation.
12. Run relevant build/static checks and scene-level browser checks. Measure performance under recorded conditions; do not fabricate numerical results.

## Fillable implementation choices

~~~yaml
PROJECT_ID: <from status>
CONTENT_INPUT_COMMIT: <SHA>
DESIGN_INPUT_COMMIT: <SHA>
VISUAL_INPUT_COMMIT: <SHA>
FRAMEWORK: <chosen>
RUNTIME_VERSION: <version>
PACKAGE_MANAGER: <name/version>
LOCKFILE_PATH: <repo-relative path>
INSTALL_COMMAND: <actual>
DEV_COMMAND: <actual>
BUILD_COMMAND: <actual>
OUTPUT_DIRECTORY: <actual>
APP_ENTRY_PATH: <repo-relative path>
SCENE_DATA_PATH: <repo-relative path>
ASSET_MANIFEST_PATH: assets/manifest.md
CANVAS_STRATEGY: <fit and letterbox behavior>
STATE_MODEL: <scene/beat/phase and cancellation strategy>
ANIMATION_ENGINE: <chosen and why>
REDUCED_MOTION_STRATEGY: <behavior>
WEBGL_FALLBACK: <behavior or NOT_APPLICABLE>
TARGET_BROWSERS: <versions/platforms to verify>
PERFORMANCE_TARGETS: <agreed values and measurement conditions>
ENVIRONMENT_VARIABLES: <names and states only; or NONE>
~~~

### Scene implementation map

| Scene ID | Component/runtime path | Content/claim IDs | Assets | Beat/hold implementation | Fallback | Checks/evidence |
|---|---|---|---|---|---|---|
| S01 | src/<file> | <IDs> | <paths> | <states> | <behavior> | <paths/results> |

## BUILD_NOTES.md required contents

- Actual install, development, build, and preview steps, including versions and root directory.
- Mandatory Spacebar/R and any implemented optional Left Arrow/F, with rehearsal, settle/hold, R-to-cover and recording instructions. If F is absent, browser fullscreen may be used; no on-canvas controls or hints are added.
- Implemented scenes/assets and traceable deviations from 03_VISUAL_PLAN.md. Material deviations require upstream specification updates.
- Tests/checks: command or procedure, environment, result, timestamp, and evidence path. Clearly distinguish measured results from goals.
- Known limitations, fallback behavior, outstanding defects, and who must address them.
- Build/source commit and actual deployment identity/URL; link to status for current metadata.
- Environment variable names and whether configured; never values, tokens, cookies, or credentials.

## Vercel deployment procedure — Builder owns production identity

The current task edits templates; execute this procedure when a topic reaches Build or FIXING.

1. Inspect the repository's existing Vercel relationship before choosing a project, using provider/repository linkage rather than assuming local .vercel/ metadata is current. Reuse a project by default when it is clearly associated with this same repository, configuration/scope/root is suitable and reuse respects old-production preservation. Verify actual identity/access and record the selection; old deployment/QA values remain unverified for this assignment.
2. Create a project only when no suitable one exists, old production needs separation, reuse is unsafe/incompatible (including scope/root), access prevents reuse, or the owner requests separation. Record the concrete reason in BUILD_NOTES.md; inability to reuse does not imply authority/access to create elsewhere. Record the real chosen name/ID, team/scope, production branch, root, framework and install/build/output settings. If suitability is unclear, preserve existing production/configuration, document the ambiguity and resolve it before deployment. If required access/authority is missing, record BLOCKERS.
3. Deploy the recorded assignment branch's source through the authorized production mechanism. Main/default stays read-only unless explicitly requested; do not merge or write there merely to trigger deployment, silently switch branches, or change old project settings without justification. Preserve old production if separation is required. Preview may support review but cannot replace production QA.
4. Record environment variable names and configured/missing states only. Secret values go through the authorized secret mechanism, never Markdown, Git, Drive, screenshots, or logs.
5. Commit/push runtime changes and build configuration; record the exact BUILD_COMMIT. On a fix cycle also record FIX_COMMITS_BY_FINDING for every addressed QA-001-style ID and the response in BUILD_NOTES.md.
6. Deploy that source to the same production project. Wait for completion and read provider deployment ID, environment, URL, source commit, readiness state, and production alias assignment. Submission alone is not success.
7. Open the exact recorded public PRODUCTION_URL, confirm required scenes/assets, and verify it serves BUILD_COMMIT. Cross-check provider source/alias assignment and served-build identity (for example, an unobtrusive machine-readable build identifier fetched outside the canvas). No build hash or technical metadata should become visible recording UI. If source/served identity cannot be confirmed, record NOT_VERIFIED and BLOCKERS rather than claiming a match.
8. Record VERCEL_PROJECT, VERCEL_PROJECT_ID, team/scope, BUILD_COMMIT, DEPLOYMENT_ID, DEPLOYMENT_URL, DEPLOYMENT_COMMIT, PRODUCTION_URL, DEPLOYMENT_ENVIRONMENT=production, readiness/access state, source/served-build verification evidence and LAST_DEPLOYMENT_VERIFIED_AT. The old production URL/result alone cannot prove the new build. Preserve immutable deployment URL/ID alongside the public alias; use only evidence for this assignment.
9. Set QA_TARGET_URL=PRODUCTION_URL and QA_DEPLOYMENT_ID to the real deployment ID. NEXT_ACTOR=QA; NEXT_ACTION must instruct independent retest of the specified finding IDs and relevant regressions against BUILD_COMMIT. Builder never writes QA_PASS or closes QA findings.
10. Failed, protected, inaccessible, or mismatched production deployment is a blocker. Keep work and evidence, provide a recovery action, and do not advance to READY_FOR_QA. Before any successful production deployment use PRODUCTION_URL=NOT_DEPLOYED_YET.

Local link caches are not durable authority; recorded non-secret project/source/URL metadata is.

## QA_FAIL → FIXING → READY_FOR_QA responsibilities

- Read every ID in OPEN_FINDINGS and its full report record before changing code. Preserve IDs.
- For a required upstream truth/design correction, coordinate through repository state and update/revalidate affected specs; Builder remains responsible for implementation and production deployment of the corrected result.
- Set finding response state to FIX_IN_PROGRESS while working. For each ID record the required correction, actual change, exact fix SHA, relevant checks, deployment evidence, and any remaining blocker in BUILD_NOTES.md.
- After fixes are committed and production verified, mark each addressed finding FIXED_PENDING_RETEST. Keep it in OPEN_FINDINGS until QA independently closes it.
- Refresh affected Thai rationale and owner documents through their responsible stage. Reuse the same Drive folder/file IDs.
- Set STAGE=READY_FOR_QA, NEXT_ACTOR=QA, and NEXT_ACTION="Independently retest <actual QA finding IDs> and <relevant regression scopes> at PRODUCTION_URL against BUILD_COMMIT; preserve IDs and report pass/fail."
- Leave QA_RESULT as NOT_RUN for the new build (prior run remains historical evidence). Never carry a prior pass to a new source commit, mark yourself QA_PASS, or treat “fix implemented” as “finding closed.”

## Create 06_SCENE_RATIONALE in Drive

Verify the latest committed topic folder and reuse the recorded rationale file ID if already present. Write a final readable Thai Google Doc about the actual built result:

- Project title, version, source BUILD_COMMIT, and observed production link.
- Per scene: spoken idea, what viewers see, why the medium/composition helps, what movement explains, where it settles, how long the presenter may hold, and the cue to advance.
- Real evidence versus illustrative metaphor, claim/source IDs or useful source links, and important uncertainties.
- Any differences from the plan, how they were reconciled, and simple rehearsal notes.
- No source code, stack explanation, or developer report.

Verify the document content/identity and record its returned ID/URL, type, source commit, READY state, and time in status. A technical plan copied verbatim is not this deliverable.

## Exit criteria and handoff

- Planned scenes run; 16:9, copy target, clean canvas, explanatory versus navigation arrow rules, mandatory Spacebar/R, any implemented optional Left Arrow/F, stable hold, reduced motion and fallbacks have been checked.
- Reproducible build instructions and actual validation exist.
- The exact production project, public PRODUCTION_URL, BUILD_COMMIT, deployment ID and served-build identity are verified.
- Rationale document exists in the recorded topic folder and matches the actual build.
- Publish artifact and status commits. Set STAGE=READY_FOR_QA; NEXT_ACTOR=QA (Agent 5).
- NEXT_ACTION: “Read 01–05, BUILD_NOTES.md, OPEN_FINDINGS and the Thai Drive rationale. Enter QA; independently test PRODUCTION_URL against BUILD_COMMIT and deployment identity, retest the specified QA-001-style finding IDs and relevant regressions, and record qa/ evidence plus QA_PASS or QA_FAIL.”
- On fixes: preserve QA finding IDs; implement on the same branch, record per-ID fix commits/responses, redeploy the same production project, verify PRODUCTION_URL against the new BUILD_COMMIT, refresh affected Thai rationale, and return to QA with findings still pending independent retest.


