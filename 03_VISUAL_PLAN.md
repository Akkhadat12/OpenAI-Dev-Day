# 03_VISUAL_PLAN.md — Agent 3: Visual Director

Visual planning defines what the audience sees and why. Give Builder enough detail to implement each scene without asking the owner to choose objects or transitions.

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


## Role, inputs, and outputs

Read README.md, WORKFLOW_STATUS.md, 01_CONTENT.md, 02_DESIGN_SYSTEM.md, 04_BUILD.md, and 05_QA.md on the active branch.

Output: filled 03_VISUAL_PLAN.md plus asset specifications/provenance in the repo. Reuse the recorded topic Drive folder. Do not place this technical plan in Drive. Do not build the site or substitute a new thesis.

## Planning procedure

1. Preserve content scene IDs and claim IDs. S01 is the cover; R must always return to that cover's initial state. Map every narration beat to a visual job. Flag missing or overloaded content and route it to Agent 1 rather than inventing assertions.
2. Choose 2D, chart, real material, 3D, or hybrid based on what improves understanding. Document why depth or complexity is necessary when used.
3. Define one focal subject, composition, scale, safe area, visual hierarchy, and what the audience should notice at each beat.
4. Specify actual data and encodings for charts. Include units, baseline, period, denominator, scale type, missing values, uncertainty, and source links/claim IDs. Schematic sizes cannot masquerade as measurements.
5. Select or specify assets with repo-relative paths, source, license/permission, attribution needs, crop/focal coordinates, resolution, fallback, and generation disclosure. Generated images support illustration; they are not documentary evidence.
6. Validate each scene's ordinary visible copy against the default 0–8-word target across all reveals, including ordinary text baked into media and wordmarks. List excluded essential chart/data labels, units, numbers and legends separately, justify each, and record the total visible count. Thai counts require linguistic segmentation. Essential attribution must fit the budget or the asset must change.
7. Build a narration cue map with entry, reveal, settle, hold, and exit. Motion stops at meaningful endpoints. Hold duration is presenter-controlled. Define each state's behavior for Spacebar, R-to-cover, rapid input and reduced motion; specify previous-settled-scene behavior only if optional Left Arrow is implemented, and fullscreen behavior only if optional F is implemented. Spacebar is the main forward control and the complete narration flow never requires clicking visual objects.
8. Prepare the technical brief inputs for Builder in this file, referencing the existing 04_BUILD.md. Do not declare implementation-ready while assets, data, or required decisions are unresolved.

## Fillable scene index

~~~yaml
PROJECT_ID: <from status>
CONTENT_INPUT_COMMIT: <verified SHA>
DESIGN_INPUT_COMMIT: <verified SHA>
VISUAL_PLAN_VERSION: <version>
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
VISIBLE_COPY: <exact ordinary copy or empty>
VISIBLE_WORD_COUNT: <ordinary count targeting 0–8 across the entire scene>
ESSENTIAL_DATA_LABELS: <exact indispensable labels/values/units/legend or NONE>
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

Reference-only material belongs in references/. Runtime assets must be available from the repo/build's portable asset path; never depend on a local absolute path or an expiring authenticated Drive URL.

## Owner rationale draft input

For each scene supply a short Thai plain-language note: what it helps the audience understand, why this medium/composition was chosen, what motion demonstrates, and what remains uncertain. Keep this draft in GitHub. Agent 4 turns it into 06_SCENE_RATIONALE in the existing topic folder after verifying the actual build.

## Current topic visual plan — Visual 1.0

This is the filled Visual plan for this assignment. The shared contract, template fields and Design 1.0 (02_DESIGN_SYSTEM.md) stay binding. It adds no claims, narration, scene splits or on-canvas copy beyond the Content inventory. The storyboard SVGs are authored illustrations, not product screenshots or measured data.

```yaml
PROJECT_ID: devday-20260930-a7c4
CONTENT_INPUT_COMMIT: 5c99905c18d77fdaa8bc7d8353ec6c3f1b301f57
DESIGN_INPUT_COMMIT: ab676e6cb1ee7b459ada0a4a64834526cb4f9ca4
VISUAL_BASE_COMMIT: 4e06948   # READY_FOR_VISUAL handoff that was inspected
VISUAL_PLAN_VERSION: "1.0"
SCENE_COUNT: 12
REVEAL_BEATS: 20            # 32 settled states including 12 entry states
ASSET_MANIFEST_PATH: assets/manifest.md
STORYBOARD_PATHS: assets/visual/S01.svg … assets/visual/S12.svg
STORYBOARD_GENERATOR: tools/visual/build_storyboards.py
STORYBOARD_CHECKER: tools/visual/check_storyboards.mjs
EVIDENCE: [qa/visual-review.md, qa/visual/storyboard-checks.json, qa/visual/all-beats-contact-sheet.png, qa/visual/final-holds-contact-sheet.png, qa/visual/renders/]
MEDIUM: 2D authored vector for S01–S05 and S07–S12; exact-value typesetting for S06; no 3D/WebGL, photo, video, logo or generated image
CANVAS_LANGUAGE: English canvas copy only (Content decision); Thai lives in narration, owner documents and accessible descriptions
```

### How Builder uses the storyboards

- Each `assets/visual/Sxx.svg` is a 1920×1080 logical frame. Top-level `<g class="beat" data-beat="k">` groups are the beats: `data-beat="0"` is the entry state, and `1..n` are the cue-linked reveals in order. Showing groups `0..k` gives the exact settled endpoint of beat k. The geometry, coordinates, tokens and copy in these files are the plan of record.
- Builder may inline the SVG, port it to components, or reuse the markup, provided every settled endpoint matches the storyboard geometry within ±2 logical px, copy is identical, and no group is added. Motion runs between these endpoints only. No intermediate state leaves the safe area, and none moves an object more than 96 px.
- `<desc>` in each SVG is the Thai scene description for the accessibility layer, so it is not rendered on canvas. Semantic `data-role` attributes (work-object, gate, reviewer, arrow, essential-value …) are for QA traceability. Decorative sub-shapes are grouped under their object and should be `aria-hidden` in the runtime.
- Motion defaults come from Design 1.0: entry 500 ms, reveal 650 ms (including its final 200 ms settle), exit 350 ms, easing `cubic-bezier(0.22,1,0.36,1)`, displacement ≤24 px on entry and ≤96 px per beat. Unless a scene says otherwise, a reveal is a fade from 0 to 1 opacity plus a 24 px translate toward its final anchor. An arrow reveal draws its stroke along its path (stroke-dashoffset) and then shows the head at 100%. The arrowhead never appears before its line.
- Keyboard behavior for every scene follows the Design 1.0 deterministic table. Spacebar: during motion it completes the current endpoint; at a hold it runs the next beat; at a final hold it exits to the next scene's entry (S12: it stays). R: cancels everything and shows the S01 entry state (b0). Reduced motion: every transition takes 0 ms and lands on the same endpoints with the same key semantics. Optional Left Arrow shows the previous scene's final settled state (at S01 it stays on S01 b0). This is not repeated per scene below unless a scene differs.
- Exit for S01–S11: the outgoing scene fades out over 350 ms, then the incoming b0 enters. Scenes never crossfade simultaneously. S12 has no exit.

### Scene index

| Scene ID | Narration takeaway | Medium | Focal subject | Ordinary / excluded / total | Duration estimate | Claim IDs | Asset status |
|---|---|---|---|---|---|---|---|
| S01 | The question is whether AI carries work to a usable result | 2D vector | Answer box → work stack/result sheet | 4 / 0 / 4 | 25 s | C01, A01 | READY (V-S01) |
| S02 | An agent chooses actions and adjusts from feedback | 2D vector | Decision diamond with one return path | 3 / 0 / 3 | 30 s | C12 | READY (V-S02) |
| S03 | Dots keeps context and work going inside a bounded workspace | 2D vector | Bounded workspace with context → draft | 3 / 0 / 3 | 35 s | C02 | READY (V-S03) |
| S04 | Agents API brings harness infrastructure to developers | 2D vector | Model core inside harness, tools/state, one event | 4 / 0 / 4 | 40 s | C04, C08 | READY (V-S04) |
| S05 | More than one provider is building managed execution | 2D vector | Two equal routes into one execution boundary | 4 / 0 / 4 | 30 s | C09, C10 | READY (V-S05) |
| S06 | Token rates are one input to economics | Exact-value typesetting | Three equal rate columns with shared unit | 2 / 11 / 13 | 35 s | C05, C06, A02 | READY (V-S06) |
| S07 | Judge cost per accepted outcome, review/rework included | 2D vector | Unscaled ingredient group → accepted result | 4 / 0 / 4 | 40 s | A02 | READY (V-S07) |
| S08 | Capability and permission to act are separate | 2D vector | Human approval gate before write | 4 / 0 / 4 | 40 s | C07 | READY (V-S08) |
| S09 | Interface may change; records and rules remain (hypothetical) | 2D vector | Draft stopped at rules gate beside records | 3 / 0 / 3 | 40 s | A03 | READY (V-S09) |
| S10 | Measure time to accepted outcome, not demos | 2D vector | Test task → inspected accepted result, unnumbered span | 3 / 0 / 3 | 40 s | C11, A02 | READY (V-S10) |
| S11 | Three conditional scenarios, no probabilities | 2D vector | Three equal branches from one origin | 3 / 0 / 3 | 45 s | A04 | READY (V-S11) |
| S12 | Delegate one task with outcome, criteria and permission | 2D vector | One accepted work object inside criteria and permission frames | 3 / 0 / 3 | 30 s | A01–A04 | READY (V-S12) |

The editorial total is 430 s, which is rehearsal guidance only. The presenter's Spacebar moves the presentation; no timer does. Ordinary counts are whitespace-delimited English words and were verified from the storyboard `<text>` nodes (qa/visual/storyboard-checks.json). There is no Thai text on the canvas, so Thai segmentation does not apply. `$2`, `$0.10`, `$10` and `1M` each count as one item. No wordmark, logo, attribution, footnote or media text exists in any asset.

### Shared visual vocabulary (applies to every scene)

| Object | Geometry | Color meaning | Used in |
|---|---|---|---|
| Work object | Sheet with folded corner and 2–3 non-text content bars | Mint 6 px outline marks the work currently discussed. Dashed bars mean draft. A mint check badge means an illustrative accepted result, never a guarantee | S01, S03, S05, S07–S10, S12 |
| System / record enclosure | Rounded rectangle, SURFACE fill, LINE or FOREGROUND 4 px stroke | A stable container; being bounded means limits exist | S03, S05, S07, S09, S12 |
| Human authority | Amber head/shoulders silhouette, amber gate posts or amber criterion squares | Human review or permission boundary | S07, S08, S09, S12 |
| Explanatory arrow | 4 px path + small filled head (22×22), no circle, button or hover | LINE by default; mint for the illustrative agent work path in S08/S09 | S01–S05, S07–S11 |
| Scenario/provider node | Equal circles, SURFACE fill, FOREGROUND stroke | Categorical only | S05, S11 |

No arrow on the canvas points to the canvas edge, sits in a corner or resembles a navigation control. Every arrow's endpoints touch the two objects it relates.

---

### S01 — cover

```yaml
SCENE_ID: S01
CONTENT_REFERENCE: "references/content-draft.md#s01"
CLAIM_IDS: [C01, A01]
AUDIENCE_TAKEAWAY: The question is whether AI can carry a goal all the way to usable work, not only answer.
VISUAL_JOB: Replace the "answer box" frame with a work result, using one focal object at a time.
MEDIUM: 2D vector
MEDIUM_REASON: A metaphor for a change in responsibility needs no evidence imagery; a product screenshot would imply a specific UI.
FOCAL_SUBJECT: "b0: answer box; b1: mint result sheet at the front of a work stack"
EXPLANATORY_ARROWS: "A1 answer box right edge (996,670) → work stack (1188,670); meaning: the work continues past the answer; LINE; drawn in b1, then static."
COMPOSITION:
  ANCHOR: "title top-left (144, baselines 250/365); answer box center (782,670); result sheet center (1316,698)"
  BOUNDS: "focal cluster x 600–1438 (44% width), y 530–830"
  SUPPORTING_OBJECTS: "1 title block; 2 back sheets (LINE, no bars) behind the result sheet"
  NEGATIVE_SPACE: "right third x>1440 and the lower band stay empty to hold the open question"
  SAFE_AREA_CHECK: "PASS all states; content x 144–1438, y 147–830"
VISIBLE_COPY: "From answers / to responsibility (cover 96 px, two lines, 115 px baseline gap)"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 4
COUNT_METHOD: English whitespace words across all states
DATA_SPEC: NOT_APPLICABLE
ASSETS: [V-S01 assets/visual/S01.svg, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "‘พางานไปถึงจุดที่ใช้ได้จริง’"
ENTRY_STATE: "Title plus answer box fully visible. This is the cover and R destination; it is immediately readable as 'an answer'."
REVEAL_BEATS: ["b1: arrow draws, then the work stack and result sheet fade/translate 24 px from the left"]
SETTLE_STATE: "b1: all objects at storyboard endpoint; the result has no check (the question is still open)"
HOLD_STATE: "Static; nothing loops."
EXIT_STATE: "Fade out; S02 introduces what an agent is (the mechanism behind carrying work)."
REDUCED_MOTION: "b0 and b1 appear instantly."
BACK_NAVIGATION: "If Left Arrow is implemented: stays at S01 b0."
RETURN_TO_COVER: "R from any state shows this b0 exactly: title and answer box only, with no b1 objects."
FALLBACK: "Fully vector and font-local; if fonts fail, the fallback stack must be layout-checked and the title must not wrap into 3 lines."
FACTUAL_BOUNDARIES: "Metaphor only: no productivity number, no check mark, no OpenAI logo, no date text."
IMPLEMENTATION_NOTES: "The cover must be the first rendered frame after font readiness; no loading text is visible on canvas."
QA_ASSERTIONS: "R during b1 motion returns b0 with no ghost objects; there is no check badge; the copy counts exactly 4 words."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | Page load / R | (none) / R | Title + answer box | 500 ms from load; R is instant | S01 b0 | Indefinite |
| Reveal 1 | ‘พางานไปถึงจุดที่ใช้ได้จริง’ | Space | Arrow A1 draws; stack + result sheet arrive | 650 ms ease-out | S01 b1 | Space when the scene is fully narrated |
| Exit | ‘…ภาพอนาคตที่ยังต้องพิสูจน์’ finished | Space at b1 | Fade out | 350 ms | S02 b0 | — |

### S02 — agent loop

```yaml
SCENE_ID: S02
CONTENT_REFERENCE: "references/content-draft.md#s02"
CLAIM_IDS: [C12]
AUDIENCE_TAKEAWAY: An agent uses a model to choose steps and tools, and adjusts from the results.
VISUAL_JOB: Goal → decision → action, with one feedback return to the decision point that settles.
MEDIUM: 2D vector
MEDIUM_REASON: This is a process relationship; left-to-right is valid because the narration describes a sequence.
FOCAL_SUBJECT: "Mint decision diamond (960,500) — the model's choice point"
EXPLANATORY_ARROWS: "A1 goal → decision (628→816, y500). A2 decision → action (1104→1300, y500). A3 feedback: action bottom (1400,604) down to y800, left, then up into the diamond (960,646). All LINE. A3 is revealed once and never animates again."
COMPOSITION:
  ANCHOR: "goal (520,500), decision (960,500), tool (1400,500)"
  BOUNDS: "cluster x 434–1482 (55%), y 321–894"
  SUPPORTING_OBJECTS: "goal target, tool block (2×2 squares, not a real app icon)"
  NEGATIVE_SPACE: "top band y<320 and both side margins"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Goal, Action, Feedback (labels 48 px)"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 3
COUNT_METHOD: English whitespace words
DATA_SPEC: NOT_APPLICABLE
ASSETS: [V-S02, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "‘ดูผลที่เกิดขึ้น’"
ENTRY_STATE: "Goal, decision, action and A1/A2 visible, because 'ตัดสินใจ…ใช้เครื่องมืออะไร' is spoken before the cue."
REVEAL_BEATS: ["b1: A3 draws from the action back to the decision; the 'Feedback' label fades in with it"]
SETTLE_STATE: "A3 complete with its arrowhead at the diamond; label at (1180,880)"
HOLD_STATE: "Static; no traversal dot or repeated loop, including during the 'workflow may be simpler' caveat."
EXIT_STATE: "Fade; S03 shows a concrete product of this idea."
REDUCED_MOTION: "Immediate endpoints."
BACK_NAVIGATION: "Left → S01 b1."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "Schematic; it does not claim every product has equal autonomy, and it does not claim fixed workflows are worse (narration caveat)."
IMPLEMENTATION_NOTES: "The feedback path is a single open path with its head at the end; do not close it into a ring."
QA_ASSERTIONS: "After 30 s at b1 nothing has moved; A3 is present exactly once."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S02 start | Space from S01 | Chain appears | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘ดูผลที่เกิดขึ้น’ | Space | Feedback path + label | 650 ms | b1 | Space after the workflow caveat |
| Exit | Scene complete | Space | Fade | 350 ms | S03 b0 | — |

### S03 — Dots bounded workspace

```yaml
SCENE_ID: S03
CONTENT_REFERENCE: "references/content-draft.md#s03"
CLAIM_IDS: [C02]
AUDIENCE_TAKEAWAY: Dots keeps a goal's context and work going across conversations, inside limits.
VISUAL_JOB: A bounded cloud workspace where context documents persist and a draft continues.
MEDIUM: 2D vector
MEDIUM_REASON: A schematic avoids a reconstructed GUI that could pass as a screenshot.
FOCAL_SUBJECT: "b1: context documents; b2: mint draft sheet"
EXPLANATORY_ARROWS: "A1 context docs (850,620) → draft (1024,620); meaning: work continues from the context; LINE."
COMPOSITION:
  ANCHOR: "workspace rect x480–1440, y320–920; heading 'Dots' at (480,250)"
  BOUNDS: "cluster 50% width"
  SUPPORTING_OBJECTS: "cloud outline glyph at the top-right corner inside the workspace (no text)"
  NEGATIVE_SPACE: "right quarter outside the workspace, plus the workspace interior top band"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Dots (heading 88 px); Ongoing work (label 48 px)"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 3
COUNT_METHOD: "English whitespace words; 'Dots' is typeset in Noto Sans, not the product wordmark"
DATA_SPEC: NOT_APPLICABLE
ASSETS: [V-S03, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "b1 ‘บริบทของงาน’; b2 ‘ติดตามความคืบหน้า’"
ENTRY_STATE: "Heading plus empty bounded workspace with cloud glyph."
REVEAL_BEATS: ["b1: two stacked context documents fade in at the left", "b2: arrow draws, then the mint draft (dashed bars) and the 'Ongoing work' label"]
SETTLE_STATE: "b1 and b2 at storyboard coordinates; the draft has no check"
HOLD_STATE: "Static during the 'not unlimited compute or permissions' caveat; the workspace border stays visible to carry that limit."
EXIT_STATE: "Fade; S04 moves from the consumer product to developer infrastructure."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S02 b1."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "No computer specs, task counts, 24/7 throughput, app logos or 'unlimited' visual; no roadmap/specialist Dots items (C03 not narrated)."
IMPLEMENTATION_NOTES: "Do not animate the cloud glyph."
QA_ASSERTIONS: "No UI-like chrome (window buttons, cursors, chat bubbles) inside the workspace."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S03 start | Space | Heading + workspace | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘บริบทของงาน’ | Space | Context docs | 650 ms | b1 | Indefinite |
| Reveal 2 | ‘ติดตามความคืบหน้า’ | Space | Arrow + draft + label | 650 ms | b2 | Space after the limits caveat |
| Exit | Scene complete | Space | Fade | 350 ms | S04 b0 | — |

### S04 — Agents API layers and one event

```yaml
SCENE_ID: S04
CONTENT_REFERENCE: "references/content-draft.md#s04"
CLAIM_IDS: [C04, C08]
AUDIENCE_TAKEAWAY: The Agents API (public beta since 10 Sep, before DevDay) packages the Codex harness around the model; MCP Events let a supported app change enter the workflow.
VISUAL_JOB: Reveal categorical layers one task at a time, then one event.
MEDIUM: 2D vector
MEDIUM_REASON: Containment (harness around model) and attachment (tools/state) are spatial relations best shown as nesting.
FOCAL_SUBJECT: "b0 model core → b1 harness ring + state → b2 tools → b3 event arrow"
EXPLANATORY_ARROWS: "A1 app source (1488,320) → harness ring (1130,446): one event entering; LINE; drawn once, no pulse or polling loop. Connectors from harness to tools/state are plain lines without heads (no direction is claimed)."
COMPOSITION:
  ANCHOR: "model (960,580) r124; harness r236; state (1356,580); tools (564,580); app source (1552,292)"
  BOUNDS: "layers x 484–1436 (50%); with app source 59%"
  SUPPORTING_OBJECTS: "state block, tools block, app source square"
  NEGATIVE_SPACE: "top-left quadrant and bottom band"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Model, Harness, State, Tools"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 4
COUNT_METHOD: English whitespace words
DATA_SPEC: "NOT_APPLICABLE — ring and block sizes are categorical, not value encodings"
ASSETS: [V-S04, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "b1 ‘ส่วนที่จัดการวงจรทำงาน’; b2 the first ‘เครื่องมือ’ immediately after it; b3 ‘รับการเปลี่ยนแปลงจากแอป’"
ENTRY_STATE: "Model core only (mint)."
REVEAL_BEATS: ["b1: harness ring scales from r200 to r236 with a fade; state block + connector + label", "b2: tools block + connector + label (Design 1.0: tools at their spoken mention)", "b3: app source square fades in; A1 draws into the ring"]
SETTLE_STATE: "Each at storyboard endpoint; the model never moves"
HOLD_STATE: "Static; the event arrow does not repeat."
EXIT_STATE: "Fade; S05 shows that other providers pursue the same managed-execution layer."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S03 b2."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "No date or 'beta' text on canvas (narrated); one event from one supported source, never 'all apps'; no Codex/OpenAI logos; layers have no size ranking."
IMPLEMENTATION_NOTES: "b1 and b2 are close in speech. A Space during b1 motion only settles b1, so the presenter presses again for b2 (the standard contract)."
QA_ASSERTIONS: "Exactly one app source and one event arrow; no ambient dot motion."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S04 start | Space | Model core | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘ส่วนที่จัดการวงจรทำงาน’ | Space | Harness ring + state | 650 ms | b1 | Indefinite |
| Reveal 2 | ‘เครื่องมือ’ (first after b1) | Space | Tools | 650 ms | b2 | Indefinite |
| Reveal 3 | ‘รับการเปลี่ยนแปลงจากแอป’ | Space | App source + event arrow | 650 ms | b3 | Space after 'ตรวจผลเอง' |
| Exit | Scene complete | Space | Fade | 350 ms | S05 b0 | — |

### S05 — two equal provider routes

```yaml
SCENE_ID: S05
CONTENT_REFERENCE: "references/content-draft.md#s05"
CLAIM_IDS: [C09, C10]
AUDIENCE_TAKEAWAY: Managed agent execution is a multi-provider direction; there is no winner yet.
VISUAL_JOB: A second, equal route joins the same execution boundary.
MEDIUM: 2D vector
MEDIUM_REASON: Categorical convergence; a market-share or ranked chart would imply data we do not have.
FOCAL_SUBJECT: "Managed-execution enclosure with a work sheet (1192–1612)"
EXPLANATORY_ARROWS: "A1 provider 1 (640,440) → enclosure (1168,500). A2 provider 2 (640,720) → enclosure (1168,660). Mirrored curves, equal length, equal 4 px LINE; meaning: each provider's route into managed execution."
COMPOSITION:
  ANCHOR: "providers (560,440) and (560,720) r64; enclosure x1192–1612, y380–780"
  BOUNDS: "cluster x 496–1614 (58%)"
  SUPPORTING_OBJECTS: "headline (b1)"
  NEGATIVE_SPACE: "bottom band y>800, left margin"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "A wider industry shift (heading 88 px, appears with b1)"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 4
COUNT_METHOD: English whitespace words
DATA_SPEC: NOT_APPLICABLE
ASSETS: [V-S05, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "‘ไม่ได้มี OpenAI เพียงรายเดียว’"
ENTRY_STATE: "One unlabeled provider node, its route and the execution enclosure; space for the second route is reserved."
REVEAL_BEATS: ["b1: second node + route (mirrored geometry) and the heading"]
SETTLE_STATE: "Two equal routes; nodes identical in size, stroke and color"
HOLD_STATE: "Static through the Anthropic/AWS details."
EXIT_STATE: "Fade; S06 turns to price as one economic condition."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S04 b3."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "No vendor names or logos on canvas; no ranking, share, size difference, or GA/preview status; the narration supplies the Anthropic (Apr 2026) and AWS preview details."
IMPLEMENTATION_NOTES: "The cue is the first sentence, so the presenter may press Space immediately after entry settles."
QA_ASSERTIONS: "Measure both node radii and route stroke widths as equal."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S05 start | Space | Route 1 + enclosure | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘ไม่ได้มี OpenAI เพียงรายเดียว’ | Space | Route 2 + heading | 650 ms | b1 | Space after 'ใครจะชนะตลาด' |
| Exit | Scene complete | Space | Fade | 350 ms | S06 b0 | — |

### S06 — token price (data scene)

```yaml
SCENE_ID: S06
CONTENT_REFERENCE: "references/content-draft.md#s06"
CLAIM_IDS: [C05, C06, A02]
AUDIENCE_TAKEAWAY: GPT-6.1 Sol standard API rates are $2 input, $0.10 cached input and $10 output per 1M tokens. These are token rates, not a task-cost result.
VISUAL_JOB: Show three exact rates at equal visual weight with the unit always visible.
MEDIUM: Exact-value typesetting
MEDIUM_REASON: Three labeled numbers are read directly; bars would invite a cost/task comparison.
FOCAL_SUBJECT: "The value just revealed; at final hold, the three-column row"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "columns centered x=480 (Input), 960 (Cached input), 1440 (Output); labels baseline 500; values baseline 700; unit centered (960,880)"
  BOUNDS: "row x ≈ 300–1620"
  SUPPORTING_OBJECTS: "two LINE column dividers x=720,1200 (y430–760); heading"
  NEGATIVE_SPACE: "right of heading, below unit"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Token price (heading)"
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Input / Cached input / Output / USD per 1M tokens / $2 / $0.10 / $10"
ESSENTIAL_LABEL_REASON: "Categories distinguish the three rates (1+2+1). The shared unit gives currency and denominator (4). The values are the evidence (3). Without any one of these the rate is misread."
TOTAL_VISIBLE_WORD_COUNT: 13
COUNT_METHOD: "Whitespace items; each price is one item; '1M' is one item"
DATA_SPEC: "See the chart specification below"
ASSETS: [V-S06, F-LAT-500, F-LAT-600]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "b1 ‘สองดอลลาร์ต่อหนึ่งล้าน input tokens’; b2 ‘สิบดอลลาร์ต่อหนึ่งล้าน output tokens’; b3 ‘cached input’"
ENTRY_STATE: "Heading, dividers and 'USD per 1M tokens' visible; no value is shown yet."
REVEAL_BEATS: ["b1: Input label + $2 together", "b2: Output label + $10 together", "b3: Cached input label + $0.10 together (middle column)"]
SETTLE_STATE: "Each label+value pair is at full opacity at its storyboard position; values 144 px/600, labels 48 px/500, all FOREGROUND"
HOLD_STATE: "Static through the Astra 1/5 caveat; no 1/5 or 80% badge appears."
EXIT_STATE: "Fade; S07 reframes cost around accepted outcomes."
REDUCED_MOTION: "Immediate pairs."
BACK_NAVIGATION: "Left → S05 b1."
RETURN_TO_COVER: "Standard."
FALLBACK: "If Noto Sans fails, the tabular fallback must keep $0.10 on one line; the checked default digits are tabular (572/1000 em)."
FACTUAL_BOUNDARIES: "No bars, no counting animation, no scaled numerals, no Astra price, no blended or per-task cost, no subscription pricing; the 'as of 30 Sep 2026' date is narrated/documented, not a canvas footnote."
IMPLEMENTATION_NOTES: "A value never appears without its category, and the unit never disappears. Use a fade only; do not translate numbers."
QA_ASSERTIONS: "Pairings are exactly Input→$2, Cached input→$0.10, Output→$10; reveal order is input, output, cached; all three values render at identical font size."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S06 start | Space | Heading + dividers + unit | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘สองดอลลาร์ต่อหนึ่งล้าน input tokens’ | Space | Input $2 | 650 ms fade | b1 | Indefinite |
| Reveal 2 | ‘สิบดอลลาร์ต่อหนึ่งล้าน output tokens’ | Space | Output $10 | 650 ms fade | b2 | Indefinite |
| Reveal 3 | ‘cached input’ | Space | Cached input $0.10 | 650 ms fade | b3 | Space after 'งานที่ต้องแก้ยังต่างกันได้' |
| Exit | Scene complete | Space | Fade | 350 ms | S07 b0 | — |

| Field | Value |
|---|---|
| Claim/source IDs | C05 / SRC05 (Pricing and availability); C06 is narration-only; A02 scopes the caveat |
| Dataset path and exact values | Values are embedded in assets/visual/S06.svg `data-rate` groups: input $2, cached input $0.10, output $10 |
| Unit / period / denominator | USD per 1M tokens; standard API; as accessed 2026-09-30 Asia/Bangkok |
| Encoding and scale | No geometric encoding: equal type size and equal column width. Layout order is input/cached/output; reveal order is input/output/cached |
| Uncertainty / missing data | Cached rate applies only to eligible cache hits (narrated); prices may change after the access date |
| Ordinary copy budget | "Token price" = 2 |
| Essential data label exclusions | 11 items as listed above; total 13 |
| Narrated detail | Model name, standard scope, cache eligibility, Astra 1/5 statement and its limits |
| Misinterpretation to prevent | "Tasks cost 1/5" or "output is 5× worse". Equal-size numbers, no ratio graphic, no Astra comparison on canvas |

### S07 — cost per accepted outcome

```yaml
SCENE_ID: S07
CONTENT_REFERENCE: "references/content-draft.md#s07"
CLAIM_IDS: [A02]
AUDIENCE_TAKEAWAY: Judge cost against accepted work, including human review and rework time.
VISUAL_JOB: Unscaled cost ingredients combine into one accepted outcome; review/rework joins at its cue.
MEDIUM: 2D vector
MEDIUM_REASON: A categorical accounting frame; any stacked or fractional chart would imply measured shares.
FOCAL_SUBJECT: "Ingredient group (x216–1036); in b1, the amber review/rework slot"
EXPLANATORY_ARROWS: "A1 ingredient group (1060,595) → accepted outcome (1320,595); meaning: these costs together produce the accepted result; LINE."
COMPOSITION:
  ANCHOR: "four equal 150×150 slots at x=256/446/636/826, y520; outcome sheet x1360–1560"
  BOUNDS: "group 43% width; whole cluster 72% (group + supporting outcome)"
  SUPPORTING_OBJECTS: "accepted outcome sheet with mint check; heading"
  NEGATIVE_SPACE: "bottom third y>780"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Cost per accepted outcome (heading)"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: "Ingredients are identified by icon and narration: model = mint core, tools = 2×2 grid, compute = monitor, review/rework = amber person"
TOTAL_VISIBLE_WORD_COUNT: 4
COUNT_METHOD: English whitespace words
DATA_SPEC: "NOT_APPLICABLE — equal slots by rule; no dataset exists"
ASSETS: [V-S07, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "‘เวลาที่คนต้องตรวจหรือแก้’"
ENTRY_STATE: "Heading; group enclosure with three ingredient slots and one reserved empty slot; arrow; accepted outcome with check."
REVEAL_BEATS: ["b1: amber review/rework slot fades into the reserved fourth position"]
SETTLE_STATE: "Four equal slots; the outcome is unchanged"
HOLD_STATE: "Static during 'savings may fall / may rise' and the test method; nothing grows or shrinks."
EXIT_STATE: "Fade; S08 introduces the permission side of the same accepted work."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S06 b3."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "No numbers, ROI, ratio, stack height or pie; no SAP task price; the check is illustrative."
IMPLEMENTATION_NOTES: "Do not rescale the group or the outcome at b1."
QA_ASSERTIONS: "All four slots measure 150×150; no numeric text is present."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S07 start | Space | Heading, 3 ingredients, arrow, outcome | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘เวลาที่คนต้องตรวจหรือแก้’ | Space | Review/rework slot | 650 ms | b1 | Space after 'ผลที่ผ่านเกณฑ์เดียวกัน' |
| Exit | Scene complete | Space | Fade | 350 ms | S08 b0 | — |

### S08 — read / draft / approve / write

```yaml
SCENE_ID: S08
CONTENT_REFERENCE: "references/content-draft.md#s08"
CLAIM_IDS: [C07]
AUDIENCE_TAKEAWAY: Being capable is not the same as being permitted to act; real writes go through a human approval boundary.
VISUAL_JOB: Read and draft are on the agent side; a human gate precedes any write into the real system.
MEDIUM: 2D vector
MEDIUM_REASON: A spatial boundary shows the separation of permissions more clearly than words.
FOCAL_SUBJECT: "b1: amber gate at x=1100 with reviewer"
EXPLANATORY_ARROWS: "A1 read → draft (594→700, y550, LINE): the draft is made from what was read. A2 draft → record system through the gate opening (928→1258, y550, MINT): the illustrative write path, which exists only with the gate."
COMPOSITION:
  ANCHOR: "read doc (485,550); draft (810,556); gate x1100, y300–820, opening y500–600; reviewer (1100,240); record cylinder (1400,550)"
  BOUNDS: "cluster x 398–1532 (59%)"
  SUPPORTING_OBJECTS: "record cylinder (the real system), reviewer silhouette"
  NEGATIVE_SPACE: "left margin, right margin"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Read, Draft, Write, Approve"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 4
COUNT_METHOD: English whitespace words
DATA_SPEC: NOT_APPLICABLE
ASSETS: [V-S08, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "‘การส่งหรือแก้ข้อมูลจริง’"
ENTRY_STATE: "Read → Draft and a separate Write target with no connection (no path exists yet)."
REVEAL_BEATS: ["b1 in one beat, ordered: gate + reviewer + 'Approve' fade in (0–400 ms), then A2 draws through the opening (250–650 ms)"]
SETTLE_STATE: "Gate complete before the arrowhead reaches Write"
HOLD_STATE: "Static through the Dots read-only example and the rollback question."
EXIT_STATE: "Fade; S09 applies the same boundary to enterprise records."
REDUCED_MOTION: "Immediate complete b1."
BACK_NAVIGATION: "Left → S07 b1."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "The gate is a conceptual workflow, not a guarantee against mistakes; no button-like approve control; not every task is read-only."
IMPLEMENTATION_NOTES: "The 'Approve' text is a plain label, never a button shape. Hover/click on the gate does nothing."
QA_ASSERTIONS: "Frame-step b1: no frame shows A2 reaching Write without the gate visible."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S08 start | Space | Read→Draft, Write target | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘การส่งหรือแก้ข้อมูลจริง’ | Space | Gate + reviewer, then write path | 650 ms total | b1 | Space after 'โมเดลเก่งขึ้น' |
| Exit | Scene complete | Space | Fade | 350 ms | S09 b0 | — |

### S09 — interface, records, rules (hypothetical)

```yaml
SCENE_ID: S09
CONTENT_REFERENCE: "references/content-draft.md#s09"
CLAIM_IDS: [A03]
AUDIENCE_TAKEAWAY: In a hypothetical maintenance example, the interface may change but records and business rules still decide what is written.
VISUAL_JOB: A draft leaves the interface and stops at the rules gate outside the records system; the records remain.
MEDIUM: 2D vector
MEDIUM_REASON: Side-by-side systems separate "where people ask" from "where truth is kept".
FOCAL_SUBJECT: "b1: records enclosure; b2: amber rules gate with three criterion squares"
EXPLANATORY_ARROWS: "A1 draft (610,660) → rules gate opening (1118,660); MINT; meaning: the draft is submitted for validation. It stops at the gate and does not enter the records."
COMPOSITION:
  ANCHOR: "interface enclosure x320–720; records enclosure x1200–1600; gate x1140 (opening y610–710); criteria x1066, y380/450/520"
  BOUNDS: "cluster 67% width (side-by-side comparison, justified)"
  SUPPORTING_OBJECTS: "command bubble with a bar (no text); draft work order sheet"
  NEGATIVE_SPACE: "centre gap x 720–1060 and the top band"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Interface, Records, Rules"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 3
COUNT_METHOD: English whitespace words
DATA_SPEC: NOT_APPLICABLE
ASSETS: [V-S09, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "b1 ‘ตัวอย่างสมมติในงานซ่อมบำรุง’; b2 ‘อุปกรณ์ถูกตัว รหัสถูกต้อง’"
ENTRY_STATE: "Interface enclosure with command bubble and mint draft; label."
REVEAL_BEATS: ["b1: records enclosure with four rows + label", "b2: gate, three criteria (equipment/code/permission, unlabeled), 'Rules' label and A1"]
SETTLE_STATE: "The draft remains inside the interface; the arrowhead touches the gate opening"
HOLD_STATE: "Static through the 'ERP will not simply disappear' caveat."
EXIT_STATE: "Fade; S10 asks how to measure whether such a system helps."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S08 b1."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "Hypothetical example; no SAP/ERP logo, no integration or certification, no job-loss visual; records are never deleted or faded."
IMPLEMENTATION_NOTES: "The criterion squares are content symbols, not checkboxes; they are not focusable or clickable."
QA_ASSERTIONS: "The draft never crosses x=1140; the records remain visible in all later states."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S09 start | Space | Interface + draft | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘ตัวอย่างสมมติในงานซ่อมบำรุง’ | Space | Records system | 650 ms | b1 | Indefinite |
| Reveal 2 | ‘อุปกรณ์ถูกตัว รหัสถูกต้อง’ | Space | Rules gate + criteria + draft path | 650 ms | b2 | Space after 'จะหายไป' |
| Exit | Scene complete | Space | Fade | 350 ms | S10 b0 | — |

### S10 — measure real outcomes

```yaml
SCENE_ID: S10
CONTENT_REFERENCE: "references/content-draft.md#s10"
CLAIM_IDS: [C11, A02]
AUDIENCE_TAKEAWAY: Demos and benchmarks are not organizational productivity; measure time until work is actually accepted.
VISUAL_JOB: A test task becomes an inspected accepted outcome; an unnumbered span marks the elapsed time to done.
MEDIUM: 2D vector
MEDIUM_REASON: Shows what to measure without inventing a measurement.
FOCAL_SUBJECT: "b1: accepted outcome sheet with check"
EXPLANATORY_ARROWS: "A1 task (620,562) → accepted outcome (1324,562): the task progresses to acceptance; LINE. The span line has end ticks and no arrowheads (duration, not direction)."
COMPOSITION:
  ANCHOR: "task sheet (475,562); outcome (1460,598); span y800 from x475 to 1460"
  BOUNDS: "cluster x 380–1600 (64%)"
  SUPPORTING_OBJECTS: "heading; span"
  NEGATIVE_SPACE: "below the span"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Measure real outcomes (heading)"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 3
COUNT_METHOD: English whitespace words
DATA_SPEC: "NOT_APPLICABLE — the span length has no scale"
ASSETS: [V-S10, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "‘การวัดเวลาจนงานเสร็จจริง’"
ENTRY_STATE: "Heading and the test task (dashed draft)."
REVEAL_BEATS: ["b1: arrow draws; outcome with check and span fade in"]
SETTLE_STATE: "Storyboard endpoint"
HOLD_STATE: "Static; no clock or ticking."
EXIT_STATE: "Fade; S11 turns measured uncertainty into conditional futures."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S09 b2."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "No METR 19% or any speedup/slowdown number, no timer reading, no chart; METR is a caution, not a test of Sol/Dots."
IMPLEMENTATION_NOTES: "The entry is intentionally sparse during the benchmark/METR narration; the cue lands near the end of the scene."
QA_ASSERTIONS: "No numerals present."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S10 start | Space | Heading + task | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘การวัดเวลาจนงานเสร็จจริง’ | Space | Path, outcome, span | 650 ms | b1 | Space when finished |
| Exit | Scene complete | Space | Fade | 350 ms | S11 b0 | — |

### S11 — three conditional scenarios

```yaml
SCENE_ID: S11
CONTENT_REFERENCE: "references/content-draft.md#s11"
CLAIM_IDS: [A04]
AUDIENCE_TAKEAWAY: The future is conditional: bounded, broader or constrained growth depending on reliability and review overhead.
VISUAL_JOB: Three equal branches revealed one per spoken case.
MEDIUM: 2D vector
MEDIUM_REASON: A branch shows alternatives without likelihood.
FOCAL_SUBJECT: "The newly revealed branch; final hold is the whole fan"
EXPLANATORY_ARROWS: "Three arrows from the origin (520,560), each length 780 to its node center at −19°, 0°, +19°; LINE 4 px; meaning: a possible direction of change. Revealed once each."
COMPOSITION:
  ANCHOR: "origin (520,560); nodes (1257,306), (1300,560), (1257,814), r56; labels 88 px right of the node"
  BOUNDS: "cluster x 492–1628 (59%)"
  SUPPORTING_OBJECTS: "none beyond branches"
  NEGATIVE_SPACE: "left third and top band"
  SAFE_AREA_CHECK: "PASS"
VISIBLE_COPY: "Bounded, Broader, Constrained"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 3
COUNT_METHOD: English whitespace words
DATA_SPEC: "NOT_APPLICABLE — equal radius, stroke and length; vertical order follows spoken order, not growth or probability"
ASSETS: [V-S11, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "b1 ‘กรณีฐาน’; b2 ‘กรณีที่เติบโตเร็วกว่า’; b3 ‘ส่วนกรณีที่โตช้า’"
ENTRY_STATE: "Origin dot only."
REVEAL_BEATS: ["b1: Bounded branch (top)", "b2: Broader (middle)", "b3: Constrained (bottom)"]
SETTLE_STATE: "All three branches identical in style"
HOLD_STATE: "Static; the earlier branch is not dimmed (no emphasis)."
EXIT_STATE: "Fade; S12 converts the scenarios into one practical action."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S10 b1."
RETURN_TO_COVER: "Standard."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "No percentages, years, thickness or brightness differences; 'Broader' is not placed higher to mean 'better'."
IMPLEMENTATION_NOTES: "Keep the base case at the top position to match the storyboard; do not reorder for aesthetics."
QA_ASSERTIONS: "Measure three connector lengths and node radii as equal; no winner emphasis."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S11 start | Space | Origin | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘กรณีฐาน’ | Space | Bounded | 650 ms | b1 | Indefinite |
| Reveal 2 | ‘กรณีที่เติบโตเร็วกว่า’ | Space | Broader | 650 ms | b2 | Indefinite |
| Reveal 3 | ‘ส่วนกรณีที่โตช้า’ | Space | Constrained | 650 ms | b3 | Space after 'ความน่าจะเป็นรองรับ' |
| Exit | Scene complete | Space | Fade | 350 ms | S12 b0 | — |

### S12 — delegate with boundaries (terminal)

```yaml
SCENE_ID: S12
CONTENT_REFERENCE: "references/content-draft.md#s12"
CLAIM_IDS: [A01, A02, A03, A04]
AUDIENCE_TAKEAWAY: Start by delegating one task with a defined outcome, success criteria and permission scope, then measure it.
VISUAL_JOB: One accepted work object settles inside a criteria frame, inside a permission boundary.
MEDIUM: 2D vector
MEDIUM_REASON: Nesting summarises the talk's vocabulary (work, criteria, permission).
FOCAL_SUBJECT: "Mint work object with check at (970,616)"
EXPLANATORY_ARROWS: NONE
COMPOSITION:
  ANCHOR: "permission boundary x560–1360, y320–960 (amber 6 px); criteria frame x680–1240, y400–880 (LINE) with 3 criterion squares at x720"
  BOUNDS: "cluster 42% width"
  SUPPORTING_OBJECTS: "criteria frame, permission boundary, heading"
  NEGATIVE_SPACE: "right third"
  SAFE_AREA_CHECK: "PASS; lowest stroke 963 < 1026"
VISIBLE_COPY: "Delegate with boundaries (heading)"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: NOT_APPLICABLE
TOTAL_VISIBLE_WORD_COUNT: 3
COUNT_METHOD: English whitespace words
DATA_SPEC: NOT_APPLICABLE
ASSETS: [V-S12, F-LAT-500]
LIGHTING_CAMERA: NOT_APPLICABLE
NARRATION_CUE: "‘เลือกงานหนึ่งอย่าง’"
ENTRY_STATE: "Heading and both empty frames."
REVEAL_BEATS: ["b1: work object fades in and translates 48 px downward to its anchor"]
SETTLE_STATE: "Object fully inside both frames"
HOLD_STATE: "Terminal indefinite hold; Space keeps it unchanged; no restart."
EXIT_STATE: "NONE — only R leaves (to S01 b0)."
REDUCED_MOTION: "Immediate."
BACK_NAVIGATION: "Left → S11 b3."
RETURN_TO_COVER: "R → S01 b0."
FALLBACK: "Vector only."
FACTUAL_BOUNDARIES: "No winner, employment certainty or productivity claim; the check means 'meets the criteria you set'."
IMPLEMENTATION_NOTES: "Space at b1 is a no-op: no flash, no wrap to S01."
QA_ASSERTIONS: "Repeated Space at the S12 final hold keeps an identical frame; R returns to the cover."
```

| Beat | Spoken cue | Presenter action | Visual change | Duration/easing | Settled endpoint | Hold / advance condition |
|---|---|---|---|---|---|---|
| Entry | S12 start | Space | Heading + frames | 500 ms | b0 | Indefinite |
| Reveal 1 | ‘เลือกงานหนึ่งอย่าง’ | Space | Work object settles inside | 650 ms | b1 | Terminal: Space does nothing; R → S01 b0 |

### Fonts and fallbacks — verified

| Item | Result |
|---|---|
| Source | notofonts/notofonts.github.io at commit 025970232f4f8ff349310d9785431e87d20ed27c, `fonts/NotoSans/unhinted/ttf/` and `fonts/NotoSansThai/unhinted/ttf/`, fetched 2026-09-30 |
| Versions | Noto Sans 2.015 (matches upstream tag NotoSans-v2.015); Noto Sans Thai 2.002 (upstream tag NotoSansThai-v2.002) |
| License | SIL OFL 1.1, stored at assets/fonts/OFL.txt (name-table license string confirmed per file) |
| Runtime files | assets/fonts/NotoSans-{Regular,Medium,SemiBold}.woff2 and NotoSansThai-{Regular,Medium,SemiBold}.woff2 (lossless TTF→WOFF2, full glyph set, no subsetting); SHA-256 in assets/manifest.md |
| Coverage | Every canvas string and the Design glyph samples (including "GPT-6.1 Sol" and the Thai sample) have zero missing codepoints; the Latin default digits are tabular (572/1000 em) and `tnum` exists |
| Rendering | Chromium (Playwright 1.56.1) loaded weights 400/500/600 from the bundled files for all 12 storyboards; see qa/visual/storyboard-checks.json |
| Thai on canvas | None. Noto Sans Thai is bundled per Design DS03 for any future Thai label and is 9 KB per weight; preloading it is not required |
| Fallback | Stack: "Noto Sans", "Noto Sans Thai", "Segoe UI", Tahoma, sans-serif. Recording waits for `document.fonts.ready` plus a Noto Sans 500 check; a fallback render is not accepted for recording and needs a layout recheck |

### Owner rationale draft input (Thai — Builder turns this into 06_SCENE_RATIONALE after verifying the build)

- **S01** ภาพเริ่มจากกล่องคำตอบ แล้วเมื่อพูดถึง "พางานไปถึงจุดที่ใช้ได้จริง" งานจะเดินต่อไปเป็นแผ่นผลงาน ผลงานยังไม่มีเครื่องหมายถูก เพราะคลิปยังตั้งคำถามอยู่ ภาพนี้เป็นการเปรียบเทียบ ไม่ใช่ตัวเลขประสิทธิภาพ
- **S02** เป้าหมายไปที่จุดตัดสินใจแล้วไปสู่การลงมือ เส้น Feedback ย้อนกลับมาหนึ่งครั้งแล้วหยุด เพื่อให้ผู้เล่าอธิบายต่อได้ เป็นแผนภาพแนวคิด ไม่ได้บอกว่าทุกผลิตภัณฑ์ทำได้เท่ากัน
- **S03** กรอบพื้นที่ทำงานมีขอบชัด เพื่อบอกว่าการทำงานต่อเนื่องไม่ได้แปลว่าไม่จำกัด เอกสารบริบทมาก่อน แล้วร่างงานจึงตามมา ไม่ได้จำลองหน้าจอจริงของ Dots
- **S04** โมเดลอยู่ตรงกลาง harness ล้อมรอบ แล้วเพิ่ม state และ tools ตามที่พูดถึง สุดท้ายมี event หนึ่งรายการจากแอปที่รองรับเข้ามา ขนาดของแต่ละชั้นไม่ได้แทนมูลค่า
- **S05** เส้นทางผู้ให้บริการสองเส้นมีขนาดเท่ากันและไปสู่พื้นที่ทำงานแบบ managed เดียวกัน บนภาพไม่มีชื่อหรือโลโก้ จึงไม่มีการจัดอันดับ รายละเอียดเรื่อง preview อยู่ในเสียงบรรยาย
- **S06** ราคาสามแบบใช้ตัวอักษรขนาดเท่ากัน และแสดงหน่วยตลอดเวลา เปิดตามลำดับที่พูด คือ input, output แล้ว cached input ไม่มีกราฟแท่ง เพราะไม่ต้องการให้คนอ่านเป็นต้นทุนต่องาน ราคาเป็นข้อมูล ณ 30 ก.ย. 2026
- **S07** ส่วนประกอบต้นทุนแต่ละช่องมีขนาดเท่ากันและไม่มีสเกล เวลาที่คนต้องตรวจหรือแก้ (สีเหลืองอำพัน) เข้ามาเป็นช่องที่สี่ ทั้งหมดไปสู่ผลงานที่ยอมรับได้ ไม่มีตัวเลข ROI
- **S08** อ่านและร่างอยู่ฝั่ง Agent ประตูอนุมัติของคนปรากฏก่อน แล้วเส้นเขียนข้อมูลจริงจึงผ่านประตูไป ประตูเป็นแนวคิด ไม่ใช่การรับประกันว่าไม่มีความผิดพลาด
- **S09** เป็นตัวอย่างสมมติ interface อยู่แยกจากระบบ records ร่างงานหยุดที่เกณฑ์ตรวจ และยังไม่ได้บันทึก ส่วน records ยังอยู่ ไม่มีโลโก้ SAP หรือการอ้างว่าเชื่อมต่อได้จริง
- **S10** งานทดสอบเดินไปจนเป็นผลงานที่ผ่านการตรวจ เส้นช่วงเวลาไม่มีตัวเลข เพื่อชวนวัดเวลาจริงแทนการใช้ความรู้สึก ไม่ได้ใช้ผล METR เก่าเป็นหลักฐาน
- **S11** สามแขนงยาวและขนาดเท่ากัน เปิดทีละทางตามลำดับที่พูด ตำแหน่งบนล่างไม่ได้หมายถึงดีกว่าหรือเป็นไปได้มากกว่า
- **S12** ผลงานหนึ่งชิ้นอยู่ในกรอบเกณฑ์ และกรอบเกณฑ์อยู่ในขอบเขตสิทธิ์ ภาพนี้ค้างไว้เป็นภาพสุดท้าย กด R เพื่อกลับหน้าปก

Uncertainty to state in the rationale: the timing is an editorial estimate that has not been rehearsed; actual motion and the rendering of the runtime have not been built or tested yet.

### 05_QA mapping

| QA check | Visual plan evidence Builder/QA must reproduce |
|---|---|
| AC-001 facts | Per-scene FACTUAL_BOUNDARIES; S06 chart table |
| AC-002/003 alignment & coverage | 12 scenes / 20 reveal beats / cue tables above |
| AC-004/005 16:9 & composition | Storyboard coordinates, safe-area PASS for 32 states |
| AC-006 copy | Scene index counts, matching the storyboard text nodes |
| AC-007 arrows | EXPLANATORY_ARROWS per scene; shared vocabulary |
| AC-008/010/011 keys, hold, recovery | Shared keyboard rules; S01 R, S12 terminal |
| AC-012 reduced motion | REDUCED_MOTION per scene |
| AC-013 assets | assets/manifest.md, font verification |
| AC-014 accessibility | Thai `<desc>` per SVG; non-color shape distinctions |

### Visual decisions and open items

| ID | Decision | Reason |
|---|---|---|
| VP01 | Storyboards as the plan of record | Removes ambiguity about geometry; they are machine-checkable |
| VP02 | S04 b1 = harness + state, b2 = tools | Reconciles the Content cue (harness/state) with the Design guardrail (tools at their spoken mention) without new copy |
| VP03 | S05 heading arrives with the second route | "Wider" only becomes true when the second route exists |
| VP04 | S01 result sheet has no check | The cover asks the question; acceptance appears later |
| VP05 | S09 is 67% wide and S07's whole cluster is 72% | Design's 35–55% is a composition target; side-by-side systems and ingredient→outcome need the width. The focal groups themselves are ≤55% |
| VP06 | No new assets from third parties | Everything is authored vector plus OFL fonts; there are no rights blockers |

Open blockers: none. The following are not run and belong to Build/QA: runtime implementation, motion timing, keyboard behavior, reduced-motion runtime, viewport fitting, performance, timed speech rehearsal and production deployment.


## Exit criteria and handoff

- Every content scene and narration beat has an implementable visual, cue, stable hold, transition, and reduced-motion treatment.
- Ordinary-copy counts target 0–8 with justified essential chart/data label exclusions and total counts; no visible controls, page/scene numbers, progress bars/dots, UI/navigation arrows or persistent UI. Explanatory content arrows are permitted only when minimal, semantically necessary, subordinate to the focal subject and clearly unlike controls.
- Chart data, provenance, rights, and runtime paths are verified; unresolved items are blockers.
- 04_BUILD.md remains available as the implementation brief; 05_QA.md is read and scene assertions are mapped to it.
- Publish artifacts then status: STAGE=READY_FOR_BUILD; NEXT_ACTOR=Agent 4 — Builder.
- NEXT_ACTION: “Read 01–05 and the asset manifest. Fill 04_BUILD.md's implementation choices, build the planned web presentation, record BUILD_NOTES.md and verified Vercel metadata, and create 06_SCENE_RATIONALE in the exact recorded topic folder. Prepare the same Vercel project's production deployment for QA, verify PRODUCTION_URL against BUILD_COMMIT, and record any deployment blocker.”


