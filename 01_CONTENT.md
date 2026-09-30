# 01_CONTENT.md — Agent 1: Content and Research

Content defines truth and narration. This file is an executable stage brief plus a fillable project specification.

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


## Mission and inputs

Turn the topic into an evidence-supported story that the owner can narrate naturally. Define what the audience should understand before choosing visual techniques.

Minimum bootstrap inputs: the workflow folder, TOPIC, and GITHUB_REPOSITORY. Follow START_HERE.md's mandatory FRESH policy. Inspect old repository state only to avoid collisions and protect existing work; it cannot select this run's role or supply completed outputs. Propose assumptions for unspecified audience, duration and scope, respecting the decision gates below. Owner-facing narration and final scene rationale must be editable Thai Google Docs. Use Thai narration by default; honor an explicit owner language override and record it. Do not infer a language from folder names.

Use the supplied existing repository; Agent 1 creates a new normal uniquely named branch from an appropriate existing base for each FRESH PROJECT_ID, records DEFAULT_BRANCH/base/BRANCH_URL, and preserves history and compatible infrastructure. Never create a replacement repository or resume an old branch automatically. If access prevents bootstrap, record a precise blocker and preserve existing work.

## Bootstrap a new topic

1. Inspect the actual DEFAULT_BRANCH and existing branches; generate a unique PROJECT_ID and record BOOTSTRAP_MODE=FRESH. Create a new normal unique assignment branch from an appropriate existing base and record its name/URL and base commit. Keep main/default read-only unless explicitly instructed otherwise. Start PLANNING/Content with fresh README/status and copies of these five current templates; keep Build specifications and QA criteria from the start. Preserve old branches/history and compatible infrastructure; clean only clearly stale assignment files on the new branch and document ambiguity in references/bootstrap-notes.md.
2. Verify WORKFLOW_FOLDER=00_WORKFLOW and TOPIC_DRIVE_PARENT=01_PROJECTS using the exact URLs/IDs above. Read START_HERE.md and all five specifications from 00_WORKFLOW. Agent 1 creates exactly one <Topic Name> - <PROJECT_ID> folder directly under 01_PROJECTS and persists the returned OWNER_DRIVE_FOLDER URL/ID in README/status. Never create a topic folder inside 00_WORKFLOW. Retries recover this same run's recorded folder; a matching topic name from an older run does not justify reuse.
3. Create the repo structure below. Store only necessary, legally usable reference excerpts/assets and source metadata; do not indiscriminately copy copyrighted material.
4. Produce content and the three owner reading/narration deliverables. Mark 06_SCENE_RATIONALE=PENDING_BUILD.
5. Verify and publish the repository handoff using the shared commit procedure.

~~~text
repo/
├─ README.md
├─ WORKFLOW_STATUS.md
├─ 01_CONTENT.md
├─ 02_DESIGN_SYSTEM.md
├─ 03_VISUAL_PLAN.md
├─ 04_BUILD.md
├─ 05_QA.md
├─ BUILD_NOTES.md              # created/filled by Builder
├─ references/                # source register, permitted reference material
├─ assets/                    # runtime assets and provenance
├─ src/                       # implementation when built
└─ qa/                        # reports and evidence
~~~

The local .vercel/ directory may exist after linking; it is not portable authority. Keep it and credentials/build caches ignored as appropriate. Store non-secret Vercel identity and settings in status.

## Research and story procedure

- Separate knowledge summary (what is known), research and analysis (evidence, interpretation, counterarguments), narration (spoken story), and visual purpose (what must become understandable).
- Verify time-sensitive claims against dated primary sources. Record publication/event date, access date, and scope. Distinguish fact, estimate, inference, analogy, and opinion.
- Build a claim register. Every material factual assertion or numerical comparison in narration or visuals must map to a claim ID and supporting source. Record uncertainty, limitations, contrary evidence, units, denominator, period, geography, and rounding.
- Develop an evidence-supported thesis. Explain the strongest counterargument and what would change the conclusion. Unsupported certainty must be removed or qualified.
- Obtain essential scope/thesis choices if they are genuinely unresolved. Reuse decisions the owner already made; routine scene, style, and implementation decisions belong to the agents.
- Write a hook, context, explanation, evidence, implications, and a closing takeaway appropriate to the topic. Avoid rigid scene counts or padding to reach a duration.
- Divide narration into stable scene IDs S01, S02, etc. Define S01 as the cover so that R has an unambiguous destination; the cover is part of the story and follows the same clean-canvas and copy rules. One scene has one audience takeaway, but may contain multiple reveal beats. IDs are internal metadata, never visible page numbers.
- Narration carries explanation and nuance. Visuals carry relationships, scale, mechanisms, or evidence. Do not write slides as paragraphs or repeat the spoken script onscreen.
- Supply proposed ordinary visible copy targeting 0–8 words per scene, excluding essential chart/data labels. Separate indispensable labels/units/numbers from ordinary copy; justify the minimum data labels needed for truthful reading and do not use the exception for prose. A scene may be entirely text-free. For Thai, count meaningful linguistic words rather than whitespace chunks; document segmentation where ambiguous.
- Estimate pacing from an actual read-through where possible. A presenter can hold longer than the estimate; avoid assuming narration audio or automatic timing exists.
- Do not select 3D merely for appearance. State the understanding needed; Agent 3 chooses the appropriate visual medium.

## Fillable project specification

Replace placeholders with real values; maintain these sections alongside the instructions.

~~~yaml
BOOTSTRAP_MODE: FRESH
PROJECT_ID: <unique identifier for this fresh assignment>
PROJECT_TITLE: <title>
AUDIENCE: <who and prior knowledge>
OWNER: <provided name or UNSET>
NARRATION_LANGUAGE: <language>
TARGET_DURATION: <range and read-through estimate>
FORMAT: narration-led web presentation
SCOPE: <included questions>
OUT_OF_SCOPE: <excluded questions>
THESIS: <one defensible sentence>
AUDIENCE_TAKEAWAY: <what changes in understanding>
OWNER_SCOPE_DECISION: <decision/evidence or PENDING>
OWNER_THESIS_DECISION: <decision/evidence or PENDING>
RESEARCH_AS_OF: <ISO date/time with timezone>
~~~

### Source register

| Source ID | Title / publisher | Direct URL | Published / event date | Accessed | Supports | Limits / reliability |
|---|---|---|---|---|---|---|
| SRC01 | <source> | <verified URL> | <dates> | <date> | <claim IDs> | <limits> |

### Claim register

| Claim ID | Exact claim | Type | Source IDs and location | Unit / period / denominator | Uncertainty / opposing evidence | Allowed visual interpretation |
|---|---|---|---|---|---|---|
| C01 | <claim> | FACT/INFERENCE/ESTIMATE/ANALOGY | <sources and page/section> | <scope> | <limits> | <what may be shown> |

### Story outline

| Beat | Audience question | Takeaway | Evidence / claim IDs | Why this beat follows |
|---|---|---|---|---|
| <beat> | <question> | <takeaway> | <IDs> | <logic> |

### Repeat for every scene

~~~yaml
SCENE_ID: S01
SCENE_PURPOSE: <one audience takeaway>
NARRATION: |
  <complete natural spoken text; not abbreviated slide bullets>
CLAIM_IDS: [<IDs>]
ESTIMATED_SPOKEN_SECONDS: <number and measurement basis>
PRESENTER_CUES: <when to reveal, settle, hold, and advance>
VISUAL_JOB: <understanding the visual must supply>
VISIBLE_COPY_PROPOSAL: <ordinary copy, target 0–8 words or empty>
VISIBLE_WORD_COUNT: <ordinary copy count; Thai segmentation if relevant>
ESSENTIAL_DATA_LABELS: <exact indispensable chart/data labels; or NONE>
ESSENTIAL_LABEL_REASON: <why each excluded label is necessary>
TOTAL_VISIBLE_WORD_COUNT: <ordinary copy plus excluded labels>
FACTUAL_BOUNDARIES: <what the visual must not imply>
TRANSITION_REASON: <how the next idea follows>
~~~

## Owner-facing Drive deliverables

Write these into the exact OWNER_DRIVE_FOLDER:

| Name | Format | Contents | Responsible |
|---|---|---|---|
| 01_KNOWLEDGE_SUMMARY.pdf | PDF | Concise knowledge map, definitions, key facts, uncertainties, source links | Agent 1 |
| 02_RESEARCH_AND_ANALYSIS.pdf | PDF | Claim/evidence analysis, thesis, counterarguments, limitations, dated references | Agent 1 |
| 03A_NARRATION_SCRIPT | Google Doc | Editable Thai rehearsal-ready script with scene IDs, pacing/cues, pronunciation notes if needed; no code | Agent 1 |
| 06_SCENE_RATIONALE | Google Doc | Final Thai explanation of the actual built visuals; created after build | Agent 4 |

Include project/version and source commit in each owner edition. Owner documents can contain full explanations, source citations, and cue labels; the 0–8-word ordinary-copy target applies to the audience scene canvas, with a justified exception for essential chart/data labels, not these documents. Verify PDF readability and all document links.

## README.md starter — create in the topic repo

~~~markdown
# <PROJECT_TITLE>

PROJECT: <real topic/project name>
BOOTSTRAP_MODE: FRESH
PROJECT_ID: <unique ID for this fresh assignment>
REPOSITORY: <actual GitHub repo URL>
DEFAULT_BRANCH: <verified repository default branch; read-only by default>
BRANCH: <actual active branch>
BRANCH_URL: <actual branch URL>
WORKFLOW_STATE: WORKFLOW_STATUS.md

WORKFLOW_FOLDER: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
WORKFLOW_FOLDER_ID: 1WcszSRTyebajZj1FuLE-wCuKehyInE8n
TEMPLATE_LIBRARY_URL: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
TOPIC_DRIVE_PARENT: https://drive.google.com/drive/folders/153uw4BMBT78VS6TQgGelanIzXPomkzZt
TOPIC_DRIVE_PARENT_ID: 153uw4BMBT78VS6TQgGelanIzXPomkzZt
OWNER_DRIVE_FOLDER: <actual per-topic folder URL>
OWNER_DRIVE_FOLDER_ID: <actual per-topic folder ID>

Open this README.md first, then WORKFLOW_STATUS.md immediately after.
Infer your role from NEXT_ACTOR and NEXT_ACTION before doing any work.
The owner supplies only the current GitHub branch URL and “Continue this project from the current workflow state.”.
Read the stage's REQUIRED_INPUTS before work; discover Drive/Vercel metadata and open QA findings from status.
Never ask the owner to repeat any role, thesis, instruction, URL, path, finding, scene number, or build state already recorded.
Use the five specifications on this branch and repo-relative paths.
GitHub is the canonical agent workspace. Drive contains owner-facing editions.
Only Agent 1 creates this run's topic folder; later agents reuse its exact recorded ID.
BOOTSTRAP_MODE=FRESH records this assignment's origin. A branch-URL continuation never creates a new run or restarts this one.
Setup/build/run instructions: <repo-relative path, added by Builder>
Presentation keyboard guide: <repo-relative path, added by Builder>
~~~

## WORKFLOW_STATUS.md starter — create in the topic repo

This is a status schema, not a sixth master-template deliverable. Agent 1 creates the live file from it; every later agent updates the same file. YAML blocks keep values explicit; use ISO 8601 timestamps with offset, for example +07:00 for Bangkok when appropriate.

~~~~markdown
# WORKFLOW_STATUS

## Identity and storage
~~~yaml
SCHEMA_VERSION: 5
PROJECT: <real topic/project name>
BOOTSTRAP_MODE: FRESH
PROJECT_ID: <unique ID for this fresh assignment>
PROJECT_TITLE: <real title>
REPOSITORY: <actual repo URL>
DEFAULT_BRANCH: <verified repository default branch>
BRANCH: <actual new normal assignment branch>
BRANCH_URL: <actual branch URL>
TEMPLATE_VERSION: "1.4"
WORKFLOW_FOLDER: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
WORKFLOW_FOLDER_ID: 1WcszSRTyebajZj1FuLE-wCuKehyInE8n
TEMPLATE_LIBRARY_URL: https://drive.google.com/drive/folders/1WcszSRTyebajZj1FuLE-wCuKehyInE8n
TOPIC_DRIVE_PARENT: https://drive.google.com/drive/folders/153uw4BMBT78VS6TQgGelanIzXPomkzZt
TOPIC_DRIVE_PARENT_ID: 153uw4BMBT78VS6TQgGelanIzXPomkzZt
OWNER_DRIVE_FOLDER: <actual topic folder URL>
OWNER_DRIVE_FOLDER_ID: <actual topic folder ID>
DRIVE_FOLDER_CREATED_BY: Agent 1
DRIVE_FOLDER_VERIFIED_AT: <timestamp>
~~~

## Current workflow
~~~yaml
STAGE: PLANNING
BLOCKED_FROM_STAGE: null
ACTIVE_ACTOR: Agent 1 — Content/Research
UPDATED_AT: <timestamp>
ARTIFACT_COMMIT: NOT_VERIFIED
LAST_VERIFIED_COMMIT: NOT_VERIFIED
LAST_VERIFIED_SCOPE: <exact files/checks inspected>
NEXT_ACTOR: Agent 1 — Content/Research
NEXT_ACTION: <concrete task, output paths, finding IDs/regressions if relevant, and exit criteria>
REQUIRED_INPUTS: [01_CONTENT.md, 05_QA.md]
OPEN_FINDINGS: [] # stable QA-001-style IDs; empty means None
QA_FINDINGS_REPORT_PATH: UNSET
BLOCKERS: [] # empty means None
OWNER_ACTION_REQUIRED: null
OWNER_DECISIONS:
  SCOPE: <decision plus evidence, or PENDING>
  THESIS: <decision plus evidence, or PENDING>
  FINAL_REVIEW: PENDING
  PUBLICATION: <recorded topic authorization or NOT_AUTHORIZED>
~~~

## Repository deliverables
| Path | Actor | State | Source/artifact commit | Verified evidence | Invalidated by |
|---|---|---|---|---|---|
| 01_CONTENT.md | Agent 1 | PENDING | NOT_VERIFIED | <path> | null |
| 02_DESIGN_SYSTEM.md | Agent 2 | PENDING | NOT_VERIFIED | <path> | null |
| 03_VISUAL_PLAN.md | Agent 3 | PENDING | NOT_VERIFIED | <path> | null |
| 04_BUILD.md | Agent 4 | TEMPLATE_READY | NOT_VERIFIED | <path> | null |
| 05_QA.md | Agent 5 | CRITERIA_READY | NOT_VERIFIED | <path> | null |
| BUILD_NOTES.md | Agent 4 | PENDING | NOT_VERIFIED | <path> | null |
| src/ and assets/ | Agent 4 | PENDING | NOT_VERIFIED | <paths> | null |
| qa/ | Agent 5 | PENDING | NOT_VERIFIED | <paths> | null |

## Owner-facing Drive deliverables
| Name | Type | Actor | State | File ID | Observed URL | Source commit | Verified at |
|---|---|---|---|---|---|---|---|
| 01_KNOWLEDGE_SUMMARY.pdf | PDF | Agent 1 | PENDING | UNSET | UNSET | NOT_VERIFIED | UNSET |
| 02_RESEARCH_AND_ANALYSIS.pdf | PDF | Agent 1 | PENDING | UNSET | UNSET | NOT_VERIFIED | UNSET |
| 03A_NARRATION_SCRIPT | Google Doc | Agent 1 | PENDING | UNSET | UNSET | NOT_VERIFIED | UNSET |
| 06_SCENE_RATIONALE | Google Doc | Agent 4 | PENDING_BUILD | UNSET | UNSET | NOT_VERIFIED | UNSET |

## Vercel and build identity
~~~yaml
VERCEL_PROJECT: UNSET # inspect existing linkage first; NOT_CREATED_YET only if justified creation is pending
VERCEL_PROJECT_ID: UNSET
VERCEL_TEAM_OR_SCOPE: UNSET
VERCEL_ORG_ID: UNSET
VERCEL_PRODUCTION_BRANCH: UNSET
VERCEL_ROOT_DIRECTORY: UNSET
FRAMEWORK: UNSET
INSTALL_COMMAND: UNSET
BUILD_COMMAND: UNSET
OUTPUT_DIRECTORY: UNSET
BUILD_COMMIT: NOT_VERIFIED
FIX_COMMITS_BY_FINDING: {} # stable QA-001-style IDs -> exact fix SHA(s)
SERVED_BUILD_IDENTITY_EVIDENCE: UNSET # repo-relative evidence path; no visible canvas metadata
DEPLOYMENT_ID: UNSET
DEPLOYMENT_ENVIRONMENT: UNSET
DEPLOYMENT_URL: NOT_DEPLOYED_YET
DEPLOYMENT_COMMIT: NOT_VERIFIED
DEPLOYMENT_STATE: NOT_DEPLOYED_YET
PREVIEW_URL: NOT_DEPLOYED_YET
PRODUCTION_URL: NOT_DEPLOYED_YET
URL_ACCESS_MODE: NOT_VERIFIED
LAST_DEPLOYMENT_VERIFIED_AT: UNSET
PRODUCTION_DEPLOYMENT_AUTHORIZATION: <recorded topic authorization or NOT_AUTHORIZED>
REQUIRED_ENVIRONMENT_VARIABLES: [] # names and configured/missing states only
~~~

## QA identity
~~~yaml
QA_TARGET_URL: NOT_DEPLOYED_YET
QA_DEPLOYMENT_ID: UNSET
QA_TESTED_COMMIT: NOT_VERIFIED
QA_REPORT_PATH: UNSET
QA_RESULT: NOT_RUN
QA_VERIFIED_AT: UNSET
QA_FINDING_STATES: {} # detailed records stay in the QA report; OPEN_FINDINGS above is canonical
~~~

## Current handoff
~~~yaml
LAST_HANDOFF_ARTIFACT_COMMIT: <real SHA or NOT_VERIFIED>
LAST_HANDOFF_EVIDENCE: <repo-relative report paths>
BOOTSTRAP_NOTES_PATH: references/bootstrap-notes.md # chosen base/commit, scoped cleanup, preserved ambiguities
WORKFLOW_HISTORY_PATH: references/workflow-history.md
~~~
Keep one current-state summary here. Append historical handoffs in WORKFLOW_HISTORY_PATH and detailed QA runs in qa/; do not append chat transcripts.
~~~~

When copying this nested Markdown example, use the section text as a normal file, removing the outer example fence only. Preserve the inner YAML fences.

Allowed artifact states: PENDING, TEMPLATE_READY, CRITERIA_READY, IN_PROGRESS, READY, STALE, FAILED, BLOCKED. A template is not a completed stage. Update the skeleton with real metadata as work happens.

## Exit criteria and handoff

- Scope/thesis decisions are recorded or essential unresolved decisions are explicitly blocked.
- Claims are traceable; narration is complete; each scene has purpose, cues, and text budget.
- All five templates, README.md, and live WORKFLOW_STATUS.md exist in the remote topic repo.
- The exact topic folder and the three reading/narration artifacts are verified and recorded; narration is editable Thai and rationale is scheduled as final Thai.
- Commit/push content artifacts and then status. Set STAGE=READY_FOR_DESIGN, NEXT_ACTOR=Agent 2 — Design.
- NEXT_ACTION: “Read README.md, WORKFLOW_STATUS.md, 01_CONTENT.md, and 05_QA.md. Fill 02_DESIGN_SYSTEM.md for this topic, preserving the narration-first, visual-first, 16:9 and clean-canvas constraints. Do not build yet.”

## Current assignment draft

The project-specific Content specification is maintained in references/content-draft.md; the source/claim register is references/source-and-claim-register.md. Both must be read together. The fillable examples above are reusable template examples, not completed current metadata. Current state is BLOCKED/PLANNING, never READY_FOR_DESIGN. No owner approval or cloud publication is claimed.

