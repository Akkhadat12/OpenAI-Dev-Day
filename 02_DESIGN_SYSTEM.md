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

Concrete tokens for PROJECT_ID 20261003-b4fb. Shared contract and non-negotiable rules above stay in force. Narration in `references/scenes.md` is unchanged; this section tells Visual how to show it.

~~~yaml
PROJECT_ID: 20261003-b4fb
CONTENT_INPUT_COMMIT: fc124ac6157f48ad468d1ad36b8538b2b5183ea2
DESIGN_VERSION: "1.0.0"
WEB_LANGUAGE: English
DOCUMENT_LANG_ATTRIBUTE: en
DESIGN_INTENT: "Dark-mode builder canvas that visualizes OpenAI’s platform shift (Apps + AgentKit first, then Codex/models as fuel). Visual language borrows code-vernacular cues (indentation, brackets-as-frames, status chips) without arcade mascots or decorative chrome. Status maturity (Preview / Beta / GA / Limited beta) must be visually unmistakable — that is the thesis method (C20)."
CANVAS: 1920x1080
ASPECT_RATIO: "16:9"
SAFE_AREA: "5% per edge; essential objects/text inside"
BACKGROUND: "#0B0B0F — near-black stage; DevDay dark-mode / code theme"
FOREGROUND: "#F5F5F7 — primary English canvas copy and icons"
ACCENT_PRIMARY: "#10A37F — live/platform/GA emphasis (semantic, not a logo redraw)"
ACCENT_SECONDARY: "#F59E0B — Preview/Beta/caution status"
MUTED: "#6B7280 — secondary structure, footnotes, limited-rollout"
STATUS_LIMITED: "#A78BFA — Limited beta / partial rollout chip"
FONT_PRIMARY: "Inter (Latin); package woff2 offline; license OFL"
FONT_FALLBACK: "system-ui, Segoe UI, Helvetica Neue, Arial, sans-serif"
TYPE_SCALE: "Display 72 / Title 48 / Label 32 / Caption 24 (logical px on 1920×1080)"
MIN_LABEL_SIZE: 32
LINE_HEIGHT: "1.25 display/title; 1.35 labels"
MAX_TEXT_WIDTH: "0.42 canvas width for ordinary copy blocks"
SPACING_SCALE: "8 / 16 / 24 / 40 / 64"
OBJECT_STYLE: "Flat 2D; soft 1px edge #2A2A32; rounded 12–16px cards; no skeuomorphism; thin square-bracket frames optional as structure not decoration"
DATA_ENCODING: "Status chips use fill+label text (never color alone): GA=#10A37F, Beta/Preview=#F59E0B, Limited beta=#A78BFA, Neutral=#6B7280. Chip label ink is #0B0B0F on GA, Preview/Beta, and Limited beta fills, and #F5F5F7 on Neutral — white ink fails contrast on amber and violet."
COMPOSITION_GRID: "12-column optical; focal left-of-center or center; partner tiles in 3-up; AgentKit components 5-up or 2×3 with one spacer"
MOTION_EASING: "cubic-bezier(0.22, 1, 0.36, 1) — snappy settle like UI, not bounce"
ENTRY_DURATION_MS: 500
REVEAL_DURATION_MS: 700
SETTLE_DURATION_MS: 200
EXIT_DURATION_MS: 400
HOLD: indefinite_until_presenter_input
REDUCED_MOTION: "Crossfade ≤150ms to same semantic endpoint; no slide/scale loops"
AUDIO_POLICY: "Live Thai narration only; no soundtrack/SFX"
POINTER_MODE: theme_adaptive_presenter_dot
POINTER_COLOR: "#22D3EE fill; #0B0B0F 1.5px outline/halo — high contrast on dark stage and cover"
POINTER_DIAMETER_CSS_PX: 14
POINTER_EDGE_OR_HALO: "1.5px near-black outline + soft 0 0 6px rgba(34,211,238,0.45)"
COVER_ASSET_STYLE: authentic_original_image_required
COVER_IMAGE_PLACEMENT: "Centered authentic OpenAI wordmark SVG (white/mono treatment on #0B0B0F) from assets/cover/openai-wordmark-2025.svg; generous clear space; English overlay ‘OpenAI DevDay 2025’ below mark within safe area; fallback assets/cover/openai-blossom-2025.svg alone if wordmark fails — never combine blossom+wordmark; never AI-generate logo"
~~~

Chip ink is a contrast completion of the fill tokens, required by AC-014. Fills stay the semantic colors above. Approximate WCAG contrast of `#F5F5F7` on `#F59E0B` and on `#A78BFA` is below 4.5:1; `#0B0B0F` on those fills clears it. Neutral `#6B7280` takes light ink.

Caption 24 is for non-claim structure only (bracket ticks, hairline rules). Every word that carries a name, status, number, or footnote is a label at ≥32 logical px. Do not shrink copy to satisfy the 0–8 word target.

### Hierarchy and composition

The stage is 1920×1080, letterboxed with a neutral band (`#0B0B0F` or the same near-black) when the viewport is not 16:9. Do not stretch or crop essential objects.

Safe area is 5% per edge: 96 px left/right, 54 px top/bottom. All essential objects and text stay inside that rectangle. Optical grid is 12 columns inside the safe area, gutter 24. Ordinary copy blocks stay within 0.42 of canvas width (about 806 px). A chip row or 3-up tile row may be wider than that because it is the diagram; each chip’s own text stays a short label, not a paragraph.

Dominant focal object is about 40–55% of canvas height (about 432–594 px). At most three supporting objects are visible in a single beat. Leave large negative space. The eye moves focal object → one relationship (chip or the single stack arrow) → supporting labels. One focal motion at a time.

Placement is center for S01 and for symmetrical maps (S03, S07, S09). Other scenes may sit the focal card left-of-center, with support to the right or below, still inside the safe area.

Cards are flat, 12–16 px radius, 1 px edge `#2A2A32`. Optional square-bracket frames are structure (a runtime boundary, an indentation cue), drawn in `#6B7280` or `#2A2A32`, never mascots, glow, or chrome. No visible navigation, scene numbers, progress, hints, or watermarks.

English only on the canvas and in semantic/alt text. Set the presentation root to `lang="en"`. Proper names stay in their authentic Latin form (OpenAI, ChatGPT, Apps SDK, MCP, AgentKit, ChatKit, Codex, Coursera, Canva, Zillow, GPT-5 Pro, Sora 2). Thai stays in narration and owner documents.

### Medium decision rules

| Medium | Choose when | Avoid when |
|---|---|---|
| 2D diagram | Relationships/mechanisms are clearer through layout | Decorative complexity substitutes for explanation |
| Chart | Verified data comparisons are central | Data/units are missing or too many labels are needed |
| Real image/video | Authentic evidence/context matters | Crop or generation creates a false factual implication |
| 3D/WebGL | Spatial structure, scale, or physical mechanism needs depth | A flat visual communicates equally well |
| Hybrid | Each layer has a distinct explanatory role | Layers compete for attention |

Topic application: every scene S02–S10 is a flat 2D diagram plus status chips where maturity is the point. No 3D or WebGL. No chart for the company-reported 10× figure — a chart would imply an audited series. Partner tiles use authentic wordmarks only if Visual later has rights-clear asset files; otherwise the essential text labels from `references/scenes.md`. S01 is the authentic wordmark, not an illustration.

### Motion grammar

For each motion pattern specify semantic job, trigger, affected object, duration, easing, settled geometry, hold appearance, and reduced-motion equivalent.

~~~text
ENTRY: establish the scene's focal subject.
REVEAL: show one narration-linked relationship/change.
SETTLE: finish movement and reach the semantic endpoint.
HOLD: remain stable, silent, and inspectable for as long as needed.
EXIT: transition only after deliberate presenter advance.
~~~

Topic timings, all on `cubic-bezier(0.22, 1, 0.36, 1)`:

| Phase | Duration | Job on this topic |
|---|---|---|
| ENTRY | 500 ms | Focal card, pillar, or cover title arrives. S01 wordmark is already visible at t=0. |
| REVEAL | 700 ms | One relationship: next pillar, next partner tile, next status chip, Preview→GA chip, or the MCP stack arrow. |
| SETTLE | 200 ms | Motion ends on the semantic endpoint. Chips show final fill and label. |
| HOLD | indefinite | No drift, pulse, particle, or auto-advance. Presenter may pause narration here. |
| EXIT | 400 ms | After deliberate advance only. |

Spacebar during active motion completes/settles that beat and does not skip the scene. Spacebar in hold reveals the next beat, or advances at the final beat. Repeated keys must not skip beats. R cancels timers and returns to the S01 initial state with the authentic wordmark (or the blossom fallback if the wordmark failed) already visible.

Reduced motion (AC-012): crossfade ≤150 ms to the same endpoint. No slide, no scale loop. Status words, the MCP label, and the cover mark are present at the endpoint. Holds stay presenter-controlled.

Static scenes may enter directly into HOLD. Multi-beat scenes (S03, S04, S05, S07, S08, S10) reach a stable hold after each beat before the next reveal.

### Hidden keyboard contract

Use this shared default unless a recorded owner preference requires a consistent update to 03–05:

| Key | Action |
|---|---|
| Spacebar — mandatory | During active motion, may first complete/settle the current transition or beat; in hold, reveal next beat or advance scene at final beat |
| R — mandatory | Cancel active motion and return to the cover (first scene) initial state |
| Left Arrow — optional | Previous scene in its settled final state, if implemented |
| F — optional | Request/exit browser fullscreen from a deliberate user gesture, if implemented |

Spacebar and R are the only mandatory controls. Left Arrow and F are optional conveniences; their absence is not a defect. No other keys are required by the default contract. Spacebar alone must support the complete forward narration flow. Clicking visual objects is optional. No shortcut glyphs or instructions appear on the canvas. Browser-owned fullscreen messages cannot be removed by the app; wait for them to clear before recording. Ignore text-entry targets and modifier combinations; do not intercept browser shortcuts. Repeated keys must not skip scenes unpredictably. Reduced motion uses the same input semantics.

Optional `P` may show or hide the presenter dot. Document `P` only in README.md / BUILD_NOTES.md, off the canvas. `P` is not required for forward flow. Absence of `P` is not a defect.

### Ordinary copy lock

Use these ordinary strings from `references/scenes.md`. Do not paraphrase them on the canvas and do not add Thai.

| Scene | Ordinary copy | Ordinary words | Essential labels (excluded) |
|---|---|---|---|
| S01 | OpenAI DevDay 2025 | 3 | NONE |
| S02 | Software runs in chat | 4 | NONE |
| S03 | Four pillars | 2 | Apps \| Agents \| Codex \| Models/API |
| S04 | Apps SDK · Preview | 3 | MCP |
| S05 | Partner demos | 2 | Coursera · Canva · Zillow |
| S06 | AgentKit | 1 | NONE |
| S07 | Status matters | 2 | Builder Beta \| ChatKit GA \| Evals GA \| Guardrails \| Connectors Limited beta |
| S08 | Codex is GA | 3 | Slack · SDK · Admin |
| S09 | API fuel | 2 | GPT-5 Pro \| Sora 2 \| mini −70%/−80% |
| S10 | Platform first | 2 | Apps · Agents · Codex |

S07’s total is higher because the chips are the evidence. Those strings stay essential labels, not a second paragraph. Inventory every reveal state in `03_VISUAL_PLAN.md` (AC-006), including the brief S08 “Preview” chip before it settles to “GA”.

### Scene guidance (S01–S10)

Word proposals match `references/scenes.md`. This table guides Visual; it does not rewrite narration.

| Scene | Medium | Status chips | Essential labels | Design note | Pointer |
|---|---|---|---|---|---|
| S01 | Authentic wordmark on `#0B0B0F` | None | NONE | Non-negotiable cover. Wordmark visible at t=0 and on every R reset. Overlay “OpenAI DevDay 2025” below the mark, Title 48, inside the safe area. Alt (English): “Official OpenAI wordmark for OpenAI DevDay 2025 cover.” | Cyan dot plus 1.5 px `#0B0B0F` outline on both the white mark and the near-black field. |
| S02 | 2D chat surface inside a bracket frame | None. Do not mark this metaphor GA. | NONE | Focal frame ~40–55% height. The frame means “software runs in chat,” not a computer-science OS. | Outline separates the dot from `#F5F5F7` edges. |
| S03 | 2D four-column map | None on the map | Apps, Agents, Codex, Models/API at ≥32 px | Reveal one pillar per beat (Apps → Agents → Codex → Models/API). Columns are a story spine, not a stepper. No arrows between pillars. | Dot sits in the dark gaps; outline keeps it visible on light type. |
| S04 | 2D stack | Preview chip mandatory on the Apps SDK hold: fill `#F59E0B`, label `#0B0B0F`, text “Preview” | MCP | The word “Preview” is the chip inside the ordinary phrase, not a second caption. One subordinate content arrow, Apps SDK → MCP, stroke `#6B7280` or `#F5F5F7`, 2 px, arrowhead only. No “Built on” words. Do not use GA green. Directory is not day-one GA (C05). | Dark outline required when the dot crosses the amber chip. |
| S05 | 2D 3-up tiles | None | Coursera · Canva · Zillow | Sequential tiles. Inline vs fullscreen is two frame sizes, not extra words. Text names unless an authentic partner asset is later provenanced. Illustrative, not exclusive. | Recheck outline contrast if a real wordmark is introduced. |
| S06 | 2D umbrella over five empty slots | None yet | NONE | Focal word “AgentKit”. Empty slots are geometry only so S07 can name them. Do not imply the kit solves every agent problem. | Dark stage; cyan fill is enough, outline still on. |
| S07 | 2D component grid | Non-negotiable. Builder = Beta `#F59E0B`. ChatKit = GA `#10A37F`. Evals = GA `#10A37F`. Connectors = Limited beta `#A78BFA`. Guardrails = name only on Neutral `#6B7280` — no Preview, Beta, GA, or Limited beta word. | Exact strings in the copy lock | Prefer 2×3 with one spacer so “Limited beta” stays ≥32 px inside the safe area. 5-up only if nothing overflows or shrinks. One component per beat, then a hold that shows the contrast. Do not upgrade any beta item to GA. | Outline is required on green, amber, and violet fills. |
| S08 | 2D chip transition plus three marks | Settled chip is GA. Reveal may morph Preview (amber) → GA (green). No arrow. | Slack · SDK · Admin | “GA” is the chip inside “Codex is GA”, one instance in the settled hold. If the 10× mark is shown, it is a ≥32 px muted essential footnote reading `10×` and `OpenAI-reported`, not a chart and not a second title. Plan-tier gates stay in narration. | Outline on the green chip. |
| S09 | 2D three cards | None. Do not invent a GA chip for model cards. | GPT-5 Pro \| Sora 2 \| mini −70%/−80% | Cards under the ordinary line “API fuel”. Percentages stay on the mini card only, as the vendor comparison already in the label. No dollar prices. Narration carries the “OpenAI claim” qualifier; do not add that phrase on canvas. | Dark cards; standard cyan dot. |
| S10 | 2D three paths | Apps path keeps Preview. Codex path keeps GA. Agents path has no single maturity chip (ChatKit/Evals are GA; other parts are not). | Apps · Agents · Codex | Ordinary line is only “Platform first”. The closing sentence stays spoken. No revenue or monetization dates. | Same chip-outline rule as S04 and S08. |

### Cover asset

Primary file: `assets/cover/openai-wordmark-2025.svg` (see `assets/cover/PROVENANCE.md` and `references/cover-asset.md`). The file is the official wordmark lockup, including the symbol that is part of that SVG. Use the file whole. Do not trace, redraw, or generate a substitute.

Mono treatment: inline the SVG and set `fill: #F5F5F7` in CSS so path geometry stays the downloaded file. A build-time `fill="#F5F5F7"` on the existing paths is allowed only if inline CSS cannot reach them. Do not change path data.

Composition: group optically centered, wordmark about 36% of canvas width, at least 64 px clear space, overlay one line below with a 40 px gap, all inside the safe area. The wordmark is fully opaque in the S01 initial state and immediately after R, including reduced motion. The title may enter over 500 ms (or crossfade ≤150 ms under reduced motion).

Fallback: `assets/cover/openai-blossom-2025.svg` alone, same white treatment and the same overlay, if the wordmark file fails to load. Never show both files. If both fail, stop and report an asset blocker. Do not draw stand-in lettering shaped like the logo.

### Presenter pointer tokens

Behavior rules in the next section stay mandatory. Topic paint:

- Fill `#22D3EE`, diameter 14 CSS px, hotspot-centered.
- 1.5 px outline `#0B0B0F` plus shadow `0 0 6px rgba(34,211,238,0.45)`.
- The outline is what keeps the dot readable on the white wordmark (S01) and on GA, Preview, and Limited beta chips (S04, S07, S08, S10).
- `pointer-events: none`, `aria-hidden="true"`, no lag, trail, or pulse.
- Visible only while the mouse is inside the stage; native cursor hidden only where the dot is working.

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
| DS01 | Stage theme | Background `#0B0B0F`, foreground `#F5F5F7`, card edge `#2A2A32` | The spoken story is a builder briefing; a code-dark stage keeps the voice primary and gives the white wordmark a field | AC-005; `references/cover-asset.md` allows white/mono on dark |
| DS02 | Latin UI type | Inter, OFL, Latin woff2 packaged offline at `assets/fonts/` (not vendored in this commit); fallback `system-ui, Segoe UI, Helvetica Neue, Arial, sans-serif` | Canvas copy is English. Thai narration does not require a Thai webfont on the stage | AC-021, AC-024 |
| DS03 | Minimum label size | 32 logical px for every claim-bearing string; Caption 24 is non-claim structure only | Status words are the point of S07 and must stay readable | AC-006; do not shrink labels to hit 0–8 |
| DS04 | Status chip encoding | Fill plus English status word. GA `#10A37F`, Preview/Beta `#F59E0B`, Limited beta `#A78BFA`, Neutral `#6B7280`. Ink `#0B0B0F` on the three status fills; `#F5F5F7` on Neutral | C20: do not sell beta as GA. Color alone fails AC-014, and white ink fails contrast on amber and violet | AC-006, AC-014; scenes.md S07 |
| DS05 | S04 Preview chip | Amber “Preview” chip is present in the Apps SDK settled hold | Narration states preview on the day, and the public directory is later (C05) | scenes.md S04; C02, C05, C20 |
| DS06 | S07 Guardrails | Name only on a Neutral chip. No Preview, Beta, GA, or Limited beta word | Essential labels give Guardrails no maturity token. C20’s GA list is ChatKit, Evals, Codex, and shipped APIs | scenes.md S07; C09, C20 |
| DS07 | S07 Connectors | Violet chip, label “Limited beta” | Connector Registry rollout is partial, not universal | C10 |
| DS08 | Pointer | `#22D3EE` 14 CSS px, 1.5 px `#0B0B0F` outline, halo `0 0 6px rgba(34,211,238,0.45)` | Presenter dot must read on the dark stage, the white wordmark, and the status fills | AC-022 |
| DS09 | Cover path | `assets/cover/openai-wordmark-2025.svg`, CSS fill `#F5F5F7`, centered, overlay “OpenAI DevDay 2025” | S01 and R need one authentic OpenAI mark. Overlay is the 3-word ordinary line already in scenes.md | AC-023; `assets/cover/PROVENANCE.md` |
| DS10 | Cover fallback | `assets/cover/openai-blossom-2025.svg` alone if the wordmark fails | Brand note forbids stacking blossom and wordmark | `references/cover-asset.md` |
| DS11 | No generated logo | Do not redraw, trace, or AI-generate the mark. Do not edit path geometry | Cover authenticity is the reset target | AC-023 |
| DS12 | No Thai on canvas | `lang=en`. Alt and accessible names are English. Thai remains narration and owner editions | Spoken script is Thai; the stage is English | AC-024 |
| DS13 | Copy lock | Ordinary strings are the scenes.md proposals only | Narration carries explanation. Extra canvas sentences would break 0–8 and compete with the voice | AC-006 |
| DS14 | Content arrow | One arrow only: S04 Apps SDK → MCP. No arrows on other scenes. S08 Preview→GA is a chip fill/label change | The arrow’s job is the stack dependency. A chevron between pillars or statuses would look like navigation | AC-007 |
| DS15 | Partner marks | Text labels Coursera, Canva, Zillow unless Visual later adds a provenanced authentic asset | Named demos are the evidence. Invented logos are not | C04; scenes.md S05 |
| DS16 | Codex metric | Optional footnote `10×` + `OpenAI-reported` at ≥32 px in `#6B7280`. Not a chart | The figure is company-reported (C13). Narration already asks for a footnote | scenes.md S08 factual boundary |
| DS17 | Model cards | No dollar prices. Mini percentages only as the existing essential label | Prices were excluded pending re-verification. Percents are vendor claims; narration qualifies them | C15, C17; scenes.md S09 |
| DS18 | Motion | 500 / 700 / 200 / 400 ms, `cubic-bezier(0.22, 1, 0.36, 1)`, hold until input | Timing follows the presenter, not an autoplay keynote | AC-009, AC-010 |
| DS19 | Reduced motion | Crossfade ≤150 ms to the same endpoint, including the same chip text and a visible cover mark | Meaning must survive without slide or scale | AC-012 |
| DS20 | Keys | Spacebar and R mandatory. Left Arrow and F optional. P optional and off-canvas only | Forward narration is Spacebar. R returns to the wordmark | AC-008, AC-023 |
| DS21 | Medium | Flat 2D diagrams and chips. No 3D/WebGL, no soundtrack, no SFX | A flat stack and chips carry Apps, AgentKit, and status. Audio is the live Thai voice | AC-009, AC-013 |
| DS22 | S10 paths | Apps keeps Preview, Codex keeps GA, Agents gets no single status chip | Closing line says platform first and every maturity must stay labeled. Agents are mixed | C19, C20; scenes.md S10 |
| DS23 | S01 visibility | Wordmark fully opaque in the initial state and on R, before any title animation | The authentic asset has to be the first thing shown, not a fade-in from empty | AC-023 |
| DS24 | Font file timing | Inter woff2 is specified here and packaged later by Visual/Builder. Missing font file does not block READY_FOR_VISUAL | Design records the offline face; the ZIP is a build deliverable | AC-021 later |

The non-negotiable rules stay in force. If an owner explicitly changes a rule, record the instruction, consequence, and affected files in status; do not silently add exceptions. No owner exception is recorded for canvas language, copy budget, clean canvas, or the authentic cover. Chip label ink (DS04) is a contrast completion, not a new semantic color.

## Exit criteria and handoff

- Tokens, hierarchy, canvas behavior, Inter Latin coverage, motion grammar, medium rules, hidden keys, cyan pointer, and authentic S01 wordmark composition are specified for this topic.
- Ordinary copy stays on the scenes.md strings (0–8 words). S07 chip text and the other essential labels are the justified exclusion. S07 status chips and the S01 authentic cover are non-negotiable.
- Holds are stable until presenter input. Reduced motion crossfades ≤150 ms to the same endpoint.
- UI and navigation arrows stay absent. The only explanatory content arrow is S04 Apps SDK → MCP.
- Publish artifacts then status: STAGE=READY_FOR_VISUAL; NEXT_ACTOR=Agent 3 — Visual Director.
- NEXT_ACTION: “Read 01_CONTENT.md, 02_DESIGN_SYSTEM.md, 04_BUILD.md and 05_QA.md. Fill 03_VISUAL_PLAN.md scene by scene, including assets, reveal/settle/hold states, word counts, and factual boundaries. Do not build yet.”
