# 02_DESIGN_SYSTEM.md — Agent 2: Design

Design defines how the presentation behaves. Translate narration into a consistent visual language without rewriting the story.

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

Required inputs: README.md, WORKFLOW_STATUS.md, 01_CONTENT.md, this template, and 05_QA.md. Read the full narration, claim boundaries, and owner decisions.

Output: a filled 02_DESIGN_SYSTEM.md on the same GitHub branch. No new Drive folder. No technical design document in the topic Drive folder. No implementation or new factual claims.

## Non-negotiable presentation rules

0. **Language:** all audience-facing Webapp copy and semantic/accessibility descriptions are English. Thai is for narration and owner documents. Enforce the shared media-text/proper-name rules; do not infer canvas language from narration.
1. **Narration-first:** the owner's voice carries the explanation. Visual timing follows the spoken idea and the presenter can settle, hold, pause narration during a stable hold, return to cover, and advance. Do not force an automatic slideshow to outrun narration.
2. **Visual-first:** the scene's primary meaning comes from composition, objects, relationships, scale, or evidence. No document-like pages, paragraph slides, bullet stacks, or repeating the script onscreen.
3. **16:9 desktop recording is the primary target:** use a 16:9 logical canvas, default reference size 1920×1080. Fit it into other browser sizes with neutral letterboxing; do not stretch, crop essential content, or reflow into a vertical slide.
4. **Default visible copy target: 0–8 words per scene, excluding essential chart/data labels.** Zero is valid. Count ordinary headings, annotations, image text, logo wordmarks, and attribution across all reveals; do not evade the target by cycling through prose. Repeated copies count again. Only indispensable data labels, axes/units, values, and legends needed to read a truthful chart/data visual may be excluded; record their exact copy and necessity separately. The exception is not a license for dense labels or prose. Numeric values each consume one item when included in ordinary copy; attached units remain one item if presented as one label. An explicitly approved Thai-canvas override uses meaningful linguistic word segmentation, not whitespace-only counting. Record ordinary, excluded, and total counts in 03_VISUAL_PLAN.md.
5. **Clean canvas:** no visible control panel, navigation bar, page/scene numbers, progress bar/dots, Next/Back buttons, UI/navigation arrows, playback bar, persistent menu, keyboard-hint overlay, persistent help/source panel, header/footer, watermark, developer overlay, or competing UI chrome. Explanatory content arrows are allowed for cause/effect, flow, dependencies, transfer, sequence or direction of change: give each a clear semantic job, use the minimum needed, keep it subordinate to the focal subject, and never style it as a navigation control or decorative clutter.
The only clean-canvas exception is the required presenter pointer described below. It is not navigation, explanatory content, visible text or a developer overlay; do not add other UI under this exception.

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
WEB_LANGUAGE: English
DOCUMENT_LANG_ATTRIBUTE: en
DESIGN_INTENT: <how the visual language serves the thesis>
CANVAS: 1920x1080
ASPECT_RATIO: "16:9"
SAFE_AREA: "5% per edge by default; essential text/objects stay inside"
BACKGROUND: <hex token and meaning>
FOREGROUND: <hex token and use>
ACCENT_PRIMARY: <hex token and semantic meaning>
ACCENT_SECONDARY: <hex token and semantic meaning>
MUTED: <hex token>
FONT_PRIMARY: <font family with Latin coverage for English canvas, license/source; Thai coverage only if explicitly overridden>
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
POINTER_MODE: theme_adaptive_presenter_dot
POINTER_COLOR: <theme-appropriate high-contrast color; red is not mandatory>
POINTER_DIAMETER_CSS_PX: 14
POINTER_EDGE_OR_HALO: <subtle contrasting outline/halo for varied image backgrounds>
COVER_ASSET_STYLE: authentic_original_image_required
COVER_IMAGE_PLACEMENT: <dominant authentic asset, safe area, crop and hierarchy>
~~~

Defaults are starting points, not performance claims or requirements to animate every element. Adjust based on rehearsal and document decisions.

### Hierarchy and composition

Describe dominant focal size, supporting object limits, placement, contrast, safe-area boundaries, and how an eye should move through a reveal. Make English labels, numerals and symbols legible. Thai glyph/diacritic checks apply to owner editions or an explicitly recorded canvas-language exception. Avoid brand-like decorative chrome.

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

## Presenter pointer and authentic first cover

The owner selected LOCAL_ZIP, a presenter pointer whose color suits the theme, and a first cover using real relevant imagery. These preferences override a blanket ban on pointer overlays while all other clean-canvas rules remain.

- Use one small presenter dot, default 14 CSS px diameter, with a theme-appropriate high-contrast fill and a subtle contrasting outline/halo where needed. Specify actual tokens and verify visibility over both the cover image and other scene backgrounds.
- Track the mouse hotspot directly in viewport CSS coordinates. Do not scale the dot unexpectedly with the logical canvas or introduce easing lag, a trail, pulsation or continuous decorative motion.
- Show it only when a mouse is inside the stage. Hide the native cursor only where the custom dot is functioning; restore it on stage exit or renderer failure. Hide the dot on pointer leave/window blur. Touch/keyboard-only use must work without it.
- The dot must use pointer-events:none and aria-hidden=true; it cannot block hover/click, take focus, trigger scene navigation or change slide/beat state. It remains at the mouse position during a held scene, including R reset; no permanent animation loop is required when stationary.
- If a toggle is useful, optional P may show/hide the dot and is documented outside the canvas. It is never required for forward flow.
- S01 is always the first cover, not an empty preloader or technical screen. Show a verified authentic relevant image such as an official logo, original character artwork, or real product/event/person photograph in its initial state. A simple composition around the image is allowed; its authenticity must remain clear.
- Do not redraw/generate a logo, invent character artwork, or use an AI-generated reconstruction as the required authentic opening asset. Decorative styling cannot materially alter the asset or create a false affiliation.
- Source, rights, offline path, suitable resolution, crop and an authentic fallback must be recorded. If a valid asset is unavailable, report the asset blocker; do not silently replace it with generated artwork.
- Keep ordinary cover text/wordmarks within the copy budget. R returns to the cover initial state with its authentic image visible. Reduced motion preserves both cover meaning and exact pointer tracking.

## Decisions and exceptions

| Decision ID | Requirement | Topic choice | Reason tied to narration | Verified constraint |
|---|---|---|---|---|
| DS01 | <rule> | <token/pattern> | <why> | <check> |

The non-negotiable rules stay in force. If an owner explicitly changes a rule, record the instruction, consequence, and affected files in status; do not silently add exceptions.

## Exit criteria and handoff

- Tokens, hierarchy, canvas behavior, font coverage, motion grammar, medium rules, hidden keys, theme-adaptive pointer and authentic cover composition are specified concretely.
- Ordinary scene copy targets 0–8 words; essential chart/data label exclusions are minimal, justified, and truth-preserving.
- All hold states are stable; reduced motion preserves meaning.
- Forbidden UI/navigation arrows remain absent; any explanatory content arrows have a minimal documented semantic role and cannot resemble controls.
- Publish artifacts then status: STAGE=READY_FOR_VISUAL; NEXT_ACTOR=Agent 3 — Visual Director.
- NEXT_ACTION: “Read 01_CONTENT.md, 02_DESIGN_SYSTEM.md, 04_BUILD.md and 05_QA.md. Fill 03_VISUAL_PLAN.md scene by scene, including assets, reveal/settle/hold states, word counts, and factual boundaries. Do not build yet.”


