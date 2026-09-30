# 02_DESIGN_SYSTEM.md — Agent 2: Design

Design defines how the presentation behaves. Translate narration into a consistent visual language without rewriting the story.

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

Required inputs: README.md, WORKFLOW_STATUS.md, 01_CONTENT.md, this template, and 05_QA.md. Read the full narration, claim boundaries, and owner decisions.

Output: a filled 02_DESIGN_SYSTEM.md on the same GitHub branch. No new Drive folder. No technical design document in the topic Drive folder. No implementation or new factual claims.

## Non-negotiable presentation rules

1. **Narration-first:** the owner's voice carries the explanation. Visual timing follows the spoken idea and the presenter can settle, hold, pause narration during a stable hold, return to cover, and advance. Do not force an automatic slideshow to outrun narration.
2. **Visual-first:** the scene's primary meaning comes from composition, objects, relationships, scale, or evidence. No document-like pages, paragraph slides, bullet stacks, or repeating the script onscreen.
3. **16:9 desktop recording is the primary target:** use a 16:9 logical canvas, default reference size 1920×1080. Fit it into other browser sizes with neutral letterboxing; do not stretch, crop essential content, or reflow into a vertical slide.
4. **Default visible copy target: 0–8 words per scene, excluding essential chart/data labels.** Zero is valid. Count ordinary headings, annotations, image text, logo wordmarks, and attribution across all reveals; do not evade the target by cycling through prose. Repeated copies count again. Only indispensable data labels, axes/units, values, and legends needed to read a truthful chart/data visual may be excluded; record their exact copy and necessity separately. The exception is not a license for dense labels or prose. Numeric values each consume one item when included in ordinary copy; attached units remain one item if presented as one label. Thai uses meaningful linguistic word segmentation, not whitespace-only counting. Record ordinary, excluded, and total counts in 03_VISUAL_PLAN.md.
5. **Clean canvas:** no visible control panel, navigation bar, page/scene numbers, progress bar/dots, Next/Back buttons, UI/navigation arrows, playback bar, persistent menu, keyboard-hint overlay, persistent help/source panel, header/footer, watermark, developer overlay, or competing UI chrome. Explanatory content arrows are allowed for cause/effect, flow, dependencies, transfer, sequence or direction of change: give each a clear semantic job, use the minimum needed, keep it subordinate to the focal subject, and never style it as a navigation control or decorative clutter.
6. **Hidden keyboard controls:** controls work without visible buttons, tooltips, help panels, or focusable offscreen buttons appearing. Document shortcuts in README.md/BUILD_NOTES.md and owner narration cues outside the audience canvas.
7. **Purposeful motion:** movement must explain a change, relationship, emphasis, or transition. The normal motion pattern is Transition → Reveal → Settle → Hold. Every scene specifies its transition/entry, reveal, settle, hold, and exit. Settle ends explanatory motion; hold remains stable until the presenter acts. No perpetual drifting, spinning, bouncing, parallax, auto-advance, or decorative particle loops.
8. **Truthful visuals:** proportions, chart encodings, relative sizes, and timing must not imply unsupported facts. Distinguish metaphor from measured data in narration and rationale. Do not present generated reconstructions as real evidence.
9. **One focal subject per beat:** support a clear takeaway with deliberate negative space. Do not compete with narration through several simultaneous focal animations.
10. **Accessible and robust:** ensure readable contrast, non-color-only distinctions, meaningful semantic descriptions, and a reduced-motion treatment. Provide longer accessible explanations in owner/reading documents without adding on-canvas UI.

Do not solve the ordinary-copy target by making labels tiny or moving readable text into a background image. Split an overloaded scene, simplify its encoding, or move detail into narration/owner documents. Retain indispensable data labels at readable sizes and document their exclusion. Clicking visual objects is optional and must never be required to continue the presentation. Any resulting scene split requires Agent 1 content alignment, stable scene IDs, and downstream updates.

## Fillable topic design specification

~~~yaml
PROJECT_ID: <from status>
CONTENT_INPUT_COMMIT: <verified SHA>
DESIGN_VERSION: <version>
DESIGN_INTENT: <how the visual language serves the thesis>
CANVAS: 1920x1080
ASPECT_RATIO: "16:9"
SAFE_AREA: "5% per edge by default; essential text/objects stay inside"
BACKGROUND: <hex token and meaning>
FOREGROUND: <hex token and use>
ACCENT_PRIMARY: <hex token and semantic meaning>
ACCENT_SECONDARY: <hex token and semantic meaning>
MUTED: <hex token>
FONT_PRIMARY: <font family, Thai/Latin coverage, license/source>
FONT_FALLBACK: <offline-safe fallback>
TYPE_SCALE: <sizes on reference canvas; use as tokens>
MIN_LABEL_SIZE: <default 32 logical px; justify topic exception>
LINE_HEIGHT: <token>
MAX_TEXT_WIDTH: <canvas fraction>
SPACING_SCALE: <consistent values>
OBJECT_STYLE: <geometry/material/light/edge treatment>
DATA_ENCODING: <scale, units, categorical distinction>
COMPOSITION_GRID: <anchors and alignments>
MOTION_EASING: <curve and why>
ENTRY_DURATION_MS: <default 400–700, tune for meaning>
REVEAL_DURATION_MS: <default 500–900, tune for meaning>
SETTLE_DURATION_MS: <default 150–300, tune for meaning>
EXIT_DURATION_MS: <default 300–500, tune for meaning>
HOLD: indefinite_until_presenter_input
REDUCED_MOTION: <immediate or brief fade to same semantic endpoint>
AUDIO_POLICY: <live narration default; no unsolicited soundtrack>
~~~

Defaults are starting points, not performance claims or requirements to animate every element. Adjust based on rehearsal and document decisions.

### Hierarchy and composition

Describe dominant focal size, supporting object limits, placement, contrast, safe-area boundaries, and how an eye should move through a reveal. Make Thai glyphs/diacritics, numerals, and mixed-language text legible. Avoid brand-like decorative chrome.

### Medium decision rules

| Medium | Choose when | Avoid when |
|---|---|---|
| 2D diagram | Relationships/mechanisms are clearer through layout | Decorative complexity substitutes for explanation |
| Chart | Verified data comparisons are central | Data/units are missing or too many labels are needed |
| Real image/video | Authentic evidence/context matters | Crop or generation creates a false factual implication |
| 3D/WebGL | Spatial structure, scale, or physical mechanism needs depth | A flat visual communicates equally well |
| Hybrid | Each layer has a distinct explanatory role | Layers compete for attention |

### Motion grammar

For each motion pattern specify semantic job, trigger, affected object, duration, easing, settled geometry, hold appearance, and reduced-motion equivalent.

~~~text
ENTRY: establish the scene's focal subject.
REVEAL: show one narration-linked relationship/change.
SETTLE: finish movement and reach the semantic endpoint.
HOLD: remain stable, silent, and inspectable for as long as needed.
EXIT: transition only after deliberate presenter advance.
~~~

Static scenes may enter directly into HOLD. If several reveal beats exist, each reaches its own stable hold before the next beat.

### Hidden keyboard contract

Use this shared default unless a recorded owner preference requires a consistent update to 03–05:

| Key | Action |
|---|---|
| Spacebar — mandatory | During active motion, may first complete/settle the current transition or beat; in hold, reveal next beat or advance scene at final beat |
| R — mandatory | Cancel active motion and return to the cover (first scene) initial state |
| Left Arrow — optional | Previous scene in its settled final state, if implemented |
| F — optional | Request/exit browser fullscreen from a deliberate user gesture, if implemented |

Spacebar and R are the only mandatory controls. Left Arrow and F are optional conveniences; their absence is not a defect. No other keys are required by the default contract. Spacebar alone must support the complete forward narration flow. Clicking visual objects is optional. No shortcut glyphs or instructions appear on the canvas. Browser-owned fullscreen messages cannot be removed by the app; wait for them to clear before recording. Ignore text-entry targets and modifier combinations; do not intercept browser shortcuts. Repeated keys must not skip scenes unpredictably. Reduced motion uses the same input semantics.

## Decisions and exceptions

| Decision ID | Requirement | Topic choice | Reason tied to narration | Verified constraint |
|---|---|---|---|---|
| DS01 | <rule> | <token/pattern> | <why> | <check> |

The non-negotiable rules stay in force. If an owner explicitly changes a rule, record the instruction, consequence, and affected files in status; do not silently add exceptions.

## Exit criteria and handoff

- Tokens, hierarchy, canvas behavior, font coverage, motion grammar, medium rules, and hidden keys are specified concretely.
- Ordinary scene copy targets 0–8 words; essential chart/data label exclusions are minimal, justified, and truth-preserving.
- All hold states are stable; reduced motion preserves meaning.
- Forbidden UI/navigation arrows remain absent; any explanatory content arrows have a minimal documented semantic role and cannot resemble controls.
- Publish artifacts then status: STAGE=READY_FOR_VISUAL; NEXT_ACTOR=Agent 3 — Visual Director.
- NEXT_ACTION: “Read 01_CONTENT.md, 02_DESIGN_SYSTEM.md, 04_BUILD.md and 05_QA.md. Fill 03_VISUAL_PLAN.md scene by scene, including assets, reveal/settle/hold states, word counts, and factual boundaries. Do not build yet.”


