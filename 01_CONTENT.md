# 01_CONTENT.md — Agent 1: Content and Research

Content defines truth and narration. This file is an executable stage brief plus a fillable project specification.

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

Existing deployment caches are historical and never required for LOCAL_ZIP. Ignore credentials, build caches and launcher process files. Record runtime prerequisites and package identity in status.

## Research and story procedure

- Separate knowledge summary (what is known), research and analysis (evidence, interpretation, counterarguments), narration (spoken story), and visual purpose (what must become understandable).
- Verify time-sensitive claims against dated primary sources. Record publication/event date, access date, and scope. Distinguish fact, estimate, inference, analogy, and opinion.
- Build a claim register. Every material factual assertion or numerical comparison in narration or visuals must map to a claim ID and supporting source. Record uncertainty, limitations, contrary evidence, units, denominator, period, geography, and rounding.
- Develop an evidence-supported thesis. Explain the strongest counterargument and what would change the conclusion. Unsupported certainty must be removed or qualified.
- Obtain essential scope/thesis choices if they are genuinely unresolved. Reuse decisions the owner already made; routine scene, style, and implementation decisions belong to the agents.
- Write a hook, context, explanation, evidence, implications, and a closing takeaway appropriate to the topic. Avoid rigid scene counts or padding to reach a duration.
- Require an authentic cover image: identify a relevant official logo, original character artwork, or real photograph from a verifiable source. Record source and rights; do not generate/reconstruct the required authentic image. The packaged image must be visible in the initial S01 state and after R reset. The owner may choose a subject; Content defines the relevance and Visual selects the actual asset.
- Divide narration into stable scene IDs S01, S02, etc. Define S01 as the cover so that R has an unambiguous destination; the cover is part of the story and follows the same clean-canvas and copy rules. One scene has one audience takeaway, but may contain multiple reveal beats. IDs are internal metadata, never visible page numbers.
- Draft all proposed audience-visible copy and essential data labels in English, including cover text and all reveals. Narration and owner reading editions are Thai; English technical terms are allowed there. Record source-image language issues before handing to Visual.
- Narration carries explanation and nuance. Visuals carry relationships, scale, mechanisms, or evidence. Do not write slides as paragraphs or repeat the spoken script onscreen.
- Supply proposed ordinary visible copy targeting 0–8 words per scene, excluding essential chart/data labels. Separate indispensable labels/units/numbers from ordinary copy; justify the minimum data labels needed for truthful reading and do not use the exception for prose. A scene may be entirely text-free. If an explicit Thai-canvas override is recorded, count meaningful linguistic words rather than whitespace chunks; document segmentation where ambiguous.
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
NARRATION_LANGUAGE: Thai # explicit owner override must be recorded
WEB_LANGUAGE: English
OWNER_DOCUMENT_LANGUAGE: Thai
QUICK_START_LANGUAGE: Thai
TARGET_DURATION: <range and read-through estimate>
FORMAT: narration-led local web presentation
DELIVERY_MODE: LOCAL_ZIP
TARGET_OS: Windows
OFFLINE_AFTER_SETUP: true
COVER_SCENE_ID: S01
COVER_IMAGE_SUBJECT: <authentic relevant image/official logo/character subject>
COVER_ASSET_REQUIREMENT: authentic_original_required
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
| 01_KNOWLEDGE_SUMMARY.pdf | PDF | Thai knowledge map, definitions, key facts, uncertainties, source links | Agent 1 |
| 02_RESEARCH_AND_ANALYSIS.pdf | PDF | Thai claim/evidence analysis, thesis, counterarguments, limitations, dated references | Agent 1 |
| 03A_NARRATION_SCRIPT | Google Doc | Editable Thai rehearsal-ready script with scene IDs, pacing/cues, pronunciation notes if needed; no code | Agent 1 |
| 06_SCENE_RATIONALE | Google Doc | Final Thai explanation of the actual built visuals and pointer; created after build | Agent 4 |
| <PROJECT_ID>-<PACKAGE_VERSION>-local.zip | ZIP | Prebuilt Webapp, START.bat/STOP.bat, runtime helper, packaged authentic cover/assets, manifest and Thai quick-start | Agent 4 |

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
Read the stage's REQUIRED_INPUTS before work; discover Drive/package metadata and open QA findings from status.
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
SCHEMA_VERSION: 8
PROJECT: <real topic/project name>
BOOTSTRAP_MODE: FRESH
PROJECT_ID: <unique ID for this fresh assignment>
PROJECT_TITLE: <real title>
REPOSITORY: <actual repo URL>
DEFAULT_BRANCH: <verified repository default branch>
BRANCH: <actual new normal assignment branch>
BRANCH_URL: <actual branch URL>
TEMPLATE_VERSION: "1.7"
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
  DELIVERY: LOCAL_ZIP
  PUBLICATION: NOT_REQUESTED
~~~

## Execution environment and pending service tasks
~~~yaml
EXECUTION_MODE: UNKNOWN # LOCAL/CLOUD/UNKNOWN; record actual context
EXECUTION_OS: NOT_VERIFIED
EXECUTION_RUNTIME: NOT_VERIFIED
EXECUTION_BROWSER: NOT_VERIFIED
EXECUTION_VERIFIED_AT: UNSET
EXECUTION_EVIDENCE: UNSET # repo-relative report; distinguish executed/inspected/reported
REQUIRED_SERVICES_FOR_NEXT_ACTION: []
SERVICE_CAPABILITIES: {} # service -> state, scope, evidence, verified_at; no credentials
PENDING_SERVICE_TASKS: [] # task ID, role, required capability, artifact path/ID, state, next action
NEXT_EXECUTION_PREFERENCE: ANY_CAPABLE # preference only, not role assignment
WINDOWS_VERIFICATION_ACTOR: UNSET
WINDOWS_VERIFICATION_PACKAGE_SHA256: NOT_VERIFIED
~~~

Capability states: READ_VERIFIED, WRITE_VERIFIED, READ_ONLY, BLOCKED, NOT_VERIFIED, NOT_REQUIRED. Pending service tasks retain their identity until verified complete. Record evidence rather than assuming a connector exists in the next environment.

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
| delivery/ launchers, helper and manifest | Agent 4 | PENDING | NOT_VERIFIED | <paths> | null |

## Owner-facing Drive deliverables
| Name | Type | Actor | State | File ID | Observed URL | Source commit | Verified at |
|---|---|---|---|---|---|---|---|
| 01_KNOWLEDGE_SUMMARY.pdf | PDF | Agent 1 | PENDING | UNSET | UNSET | NOT_VERIFIED | UNSET |
| 02_RESEARCH_AND_ANALYSIS.pdf | PDF | Agent 1 | PENDING | UNSET | UNSET | NOT_VERIFIED | UNSET |
| 03A_NARRATION_SCRIPT | Google Doc | Agent 1 | PENDING | UNSET | UNSET | NOT_VERIFIED | UNSET |
| 06_SCENE_RATIONALE | Google Doc | Agent 4 | PENDING_BUILD | UNSET | UNSET | NOT_VERIFIED | UNSET |
| <PROJECT_ID>-<PACKAGE_VERSION>-local.zip | ZIP | Agent 4 | PENDING_BUILD | UNSET | UNSET | NOT_VERIFIED | UNSET |

## Local package and build identity
~~~yaml
DELIVERY_MODE: LOCAL_ZIP
TARGET_OS: Windows
PUBLIC_DEPLOYMENT_REQUIRED: false
OFFLINE_AFTER_SETUP: true
LOCAL_RUNTIME: UNSET # choose Python 3 by default or a documented Node.js alternative
LOCAL_RUNTIME_TESTED_VERSION: UNSET
WINDOWS_RUNTIME_PREREQUISITE: UNSET
FRAMEWORK: UNSET
INSTALL_COMMAND: UNSET # Builder setup only
BUILD_COMMAND: UNSET # Builder setup only
OUTPUT_DIRECTORY: UNSET
BUILD_COMMIT: NOT_VERIFIED
FIX_COMMITS_BY_FINDING: {}
PACKAGE_VERSION: UNSET
PACKAGE_PATH: UNSET # repo-relative assembly/output path
PACKAGE_MANIFEST_PATH: UNSET
PACKAGE_FILE_ID: UNSET
PACKAGE_DOWNLOAD_URL: NOT_DELIVERED_YET # observed persistent owner link
PACKAGE_SHA256: NOT_VERIFIED
PACKAGE_STATE: NOT_BUILT # NOT_BUILT/IN_PROGRESS/READY/STALE/FAILED/BLOCKED
PACKAGE_IDENTITY_EVIDENCE: UNSET
LAST_PACKAGE_VERIFIED_AT: UNSET
POINTER_MODE: theme_adaptive_presenter_dot
POINTER_SPEC_PATH: 02_DESIGN_SYSTEM.md
COVER_SCENE_ID: S01
COVER_ASSET_ID: UNSET
~~~

## QA identity and owner verification
~~~yaml
QA_TESTED_COMMIT: NOT_VERIFIED
QA_TESTED_PACKAGE_SHA256: NOT_VERIFIED
QA_PACKAGE_VERSION: UNSET
QA_ENVIRONMENT: UNSET
QA_TARGET: extracted_package_on_loopback
QA_TARGET_URL: UNSET # local run observation only; never an owner handoff link
QA_REPORT_PATH: UNSET
QA_RESULT: NOT_RUN
QA_VERIFIED_AT: UNSET
QA_FINDING_STATES: {}
WINDOWS_LAUNCHER_TEST_RESULT: NOT_RUN
WINDOWS_LAUNCHER_TEST_EVIDENCE: UNSET
OWNER_WINDOWS_SMOKE_RESULT: NOT_RUN
OWNER_WINDOWS_SMOKE_EVIDENCE: UNSET
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



