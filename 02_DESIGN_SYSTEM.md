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

## Current topic design specification — Design 1.0

This is the filled specification for the current assignment. The shared contract and non-negotiable rules above remain binding. The owner authorized this chat to perform Design on the recorded branch on 2026-09-30. This stage defines a reusable visual language; the Visual Director owns the final scene compositions, asset manifest and cue-by-cue visual plan.

```yaml
PROJECT_ID: devday-20260930-a7c4
CONTENT_INPUT_COMMIT: 5c99905c18d77fdaa8bc7d8353ec6c3f1b301f57
DESIGN_BASE_COMMIT: 70dbf364aad5838395a81015e3d80223e3b527ac
DESIGN_VERSION: "1.0"
DESIGN_INTENT: Make ongoing work, accepted outcomes and permission boundaries legible through objects and relationships that settle under live Thai narration.
CANVAS: 1920x1080
ASPECT_RATIO: "16:9"
SAFE_AREA: "x=96..1824; y=54..1026, including strokes, arrowheads and Thai marks"
BACKGROUND: "#071923; quiet recording field and neutral letterbox"
SURFACE: "#102E38; bounded workspace or record container, never UI cards"
FOREGROUND: "#F3F7F6; ordinary copy and primary evidence"
ACCENT_PRIMARY: "#6DE3C0; currently discussed agent action or accepted result"
ACCENT_SECONDARY: "#F4BF75; human review, validation or permission boundary"
MUTED: "#A7C0C8; supporting readable labels"
LINE: "#73929C; structural boundaries and explanatory connectors"
FONT_PRIMARY: "Noto Sans Thai 400/500/600 for Thai; Noto Sans 400/500/600 for Latin and numerals; self-host both, SIL OFL 1.1"
FONT_FALLBACK: "Bundled primary fonts work offline; temporary system stack Noto Sans Thai, Noto Sans, Segoe UI, Tahoma, sans-serif requires layout recheck if used"
TYPE_SCALE: "label=48; heading=88; cover=96; numerical evidence=144 logical px; no tiny footnotes"
MIN_LABEL_SIZE: "32 logical px hard floor; use 48 by default; no topic exception"
LINE_HEIGHT: "Thai=1.4; Latin=1.2; single-line numeric evidence=1.15"
MAX_TEXT_WIDTH: "ordinary headline <=0.68 canvas width (1306 px); never shrink to fit"
SPACING_SCALE: "12,24,48,72,96 logical px; minimum object-to-label gap=24"
OBJECT_STYLE: "flat vector geometry; round caps/joins; 4px structural strokes, 6px focal outlines; no glossy effects or decorative glow"
DATA_ENCODING: "categorical size equality unless measured data exists; exact S06 rates, equal-size typesetting, no cost-per-task scale"
COMPOSITION_GRID: "center=(960,540); left/right=(480,540)/(1440,540); thirds x=420/960/1500; alignment grid=24px"
MOTION_EASING: "cubic-bezier(0.22,1,0.36,1); monotone ease-out, no spring or overshoot"
ENTRY_DURATION_MS: 500
REVEAL_DURATION_MS: 650
SETTLE_DURATION_MS: 200
EXIT_DURATION_MS: 350
MAX_BEAT_TRANSLATION_PX: 96
HOLD: indefinite_until_presenter_input
REDUCED_MOTION: "immediate complete semantic endpoints; 0ms entry/reveal/settle/exit, same Spacebar/R behavior"
AUDIO_POLICY: "live owner narration; no soundtrack, sound effects or auto-playing audio"
DEFAULT_MEDIUM: "2D vector schematic; data typesetting in S06; no scene currently needs 3D or documentary media"
MANDATORY_KEYS: [Spacebar, R]
OPTIONAL_KEYS: [LeftArrow, F]
```

### Narrative and visual intent

The accepted thesis asks viewers to judge agents by work they can accept under clear permissions. Use one consistent vocabulary: a document/result for work, a bounded enclosure for systems or permissions, and a thin connector for a specific relationship. A change in that relationship is the reason to animate. Small dot clusters, assistant chat screens and logos must not become a repeating decorative theme.

ไทย: ภาพช่วยให้เห็นว่าเป้าหมายเดินไปเป็นผลงานได้อย่างไร ใครตรวจผล และสิทธิ์หยุดอยู่ตรงไหน รายละเอียดและข้อจำกัดอยู่ในเสียงบรรยาย ภาพต้องหยุดรอได้ ไม่เร่งให้ผู้เล่าตามการเคลื่อนไหว

Preserve the full Thai narration, stable scene IDs S01–S12, claim IDs and editorial 430-second allocation from Content. Duration is rehearsal guidance, not a timer. S01 is the cover initial state; S12 remains in its final hold. No automatic restart. This specification does not add claims, scene splits or on-canvas copy. The earlier withdrawn Design/Visual work is historical, not a current input.

### Palette, hierarchy and composition

Use opaque foreground, muted, mint, amber and line tokens against background/surface. Essential labels never use lowered opacity. Surface is a grouping fill and may be low contrast; any boundary carrying meaning must also use the line or accent stroke. No gradients behind essential text.

| Meaning | Geometry plus color | Constraint |
|---|---|---|
| Active work or accepted result | Mint outline plus a distinct work object; accepted result additionally has a check mark | Mint alone never means approved, safe or successful |
| Human review or authority | Amber boundary plus reviewer silhouette, gate or check criterion | An approval gate is a conceptual workflow, not a product security guarantee |
| Record/system | Enclosed surface with line outline and stable document objects | Records remain visible when the interface changes |
| Scenario or schematic relation | Equal-size nodes; direction/path shape, not color alone | Length, area, speed and position convey no probability, volume or market share |

At each beat, one focal cluster occupies approximately 35–55% of the stage width. Supporting objects are smaller or use structural line treatment, with no more than three supporting groups in addition to the focus. A layer stack or three-way branch is one semantic cluster, not several competing focal animations. Leave roughly one-third of the canvas as quiet space; this is a composition target rather than a measured dataset. Reserve space for later reveals at entry so established labels do not shift.

Keep ordinary text on one or at most two lines above or beside the focal cluster; never a persistent page header/footer. Left-to-right means process only where the narration actually describes a process. Center a single outcome; use side-by-side or grouped layouts for comparisons, not dashboard tiles. Safe-area bounds include glyph ascenders/descenders, Thai tone marks, strokes, masks and connector endpoints in every intermediate state.

Fit the stage with scale=min(viewportWidth/1920, viewportHeight/1080), center it, and fill unused space with BACKGROUND. Essential geometry keeps its logical position. Browser resizing only recomputes that fit; it never changes the current scene/beat or its settled endpoint. Verify 1920×1080, 1280×720, 1440×900 and a narrow viewport later in Build/QA. The narrow view remains a letterboxed 16:9 presentation, not vertical slides.

### Typography, coverage and asset requirements

Use the paired [Noto Thai upstream](https://github.com/notofonts/thai) and [Noto Latin upstream](https://github.com/notofonts/latin-greek-cyrillic), both licensed under SIL OFL 1.1 as checked on 2026-09-30. The Visual Director records exact release/file URLs, license files and intended repo-relative font paths in its asset manifest; Builder bundles the selected fonts and preserves their licenses. No font binaries are supplied or claimed verified by this Design stage. Do not rely on a live Google Fonts stylesheet for recording.

Thai text uses the Thai family; Latin and prices use the Latin family. Use normal Thai letter spacing and word breaking, no synthetic bold/italic, and tabular numerals for the three prices. Font weights are 500 for headings/labels, 600 for numbers, and 400 for any necessary supporting label. Font readiness must precede recording; fallback text may remain usable while loading but must not silently be accepted as the intended typography.

Test glyph samples outside the audience canvas: “เป้าหมาย ผลลัพธ์ สิทธิ์ ผู้ใช้ เกณฑ์สำเร็จ”, “GPT-6.1 Sol”, “Cached input”, “$0.10”, and “USD per 1M tokens”. Check tone marks and line boxes at native size and at 1280×720. Default labels then render at 32 screen px; the hard logical floor of 32 is not a reason to shrink routine labels. If copy does not fit, simplify geometry or ask Content to align a justified split; do not reduce type beneath the floor, crop glyphs or convert prose into an image.

### Copy budget and truthful data

The exact Content copy below is the starting inventory, once per scene across all reveals. These are English whitespace word counts; no Thai copy is added. If Visual adds Thai wording, it must record meaningful segmentation and reconcile the inventory with Content. Wordmarks, duplicate copies, attribution and baked-in media text count as ordinary copy. Revealing the same existing label without duplicating it does not add an occurrence.

| Scene | Ordinary copy | Ordinary words | Excluded essential items | Total |
|---|---|---:|---:|---:|
| S01 | From answers to responsibility | 4 | 0 | 4 |
| S02 | Goal / Action / Feedback | 3 | 0 | 3 |
| S03 | Dots / Ongoing work | 3 | 0 | 3 |
| S04 | Model / Harness / Tools / State | 4 | 0 | 4 |
| S05 | A wider industry shift | 4 | 0 | 4 |
| S06 | Token price | 2 | 11 | 13 |
| S07 | Cost per accepted outcome | 4 | 0 | 4 |
| S08 | Read / Draft / Approve / Write | 4 | 0 | 4 |
| S09 | Interface / Records / Rules | 3 | 0 | 3 |
| S10 | Measure real outcomes | 3 | 0 | 3 |
| S11 | Bounded / Broader / Constrained | 3 | 0 | 3 |
| S12 | Delegate with boundaries | 3 | 0 | 3 |

S06 is an exact-value data visual, not a bar chart. Preserve these pairings: Input → $2; Cached input → $0.10; Output → $10. The three categories need labels to distinguish rates (1+2+1 items); the shared unit “USD per 1M tokens” supplies currency and denominator (4); the three prices supply values (3). Thus excluded=11, ordinary=2 and total=13. A slash in this document separates labels; it is not extra visible copy. Claim C05/source SRC05 fixes the unit and standard API scope as accessed 2026-09-30. Narration supplies model name, standard scope, cache eligibility and price-comparison limits. Do not add a logo or date footnote without counting it.

Use equal font size and equal composition space for all three rates; no counting animation, scaled bars, “80% savings” badge, blended rate or implied task cost. Reveal input, output, then cached input in the spoken order, even if layout order is input/cache/output. Keep the shared unit visible before the first value and in every hold. Each value and its category arrive together; never show a number temporarily without its unit/category.

S07 has no measured cost dataset. Show model/tools/compute/review/rework as categorical ingredients next to an accepted outcome; do not encode numerical contributions with stack height, pie sectors or a fraction graphic whose scale appears measured. S11 branch node area, connector width and visual emphasis are equal. Any additional data chart requires a verified claim, baseline, units and Content alignment before proceeding.

### Medium decision rules

| Medium | Topic choice and reason | Boundary |
|---|---|---|
| 2D vector diagram | Default for goals, context, harness layers, work, gates, records and conditional branches | Use symbolic geometry rather than simulated product screenshots |
| Exact-value data typesetting | S06 only, because three unit-labeled rates are easier to read directly | No quantity inferred from geometry; no unsupported ROI chart |
| Real image/video | Not needed by the accepted narration | If Visual establishes an evidentiary need, verify source, rights, date, crop and readable copy; do not substitute generated evidence |
| 3D/WebGL | Not selected; every present mechanism is legible in 2D | Add only for a documented spatial need and provide an equivalent fallback |
| Hybrid | Only if a later approved evidentiary layer has a distinct job | No redundant layers, ambient motion or decorative technology |

These are design guardrails, not finished scene layouts or assets. Visual chooses the minimal medium and records provenance. Authored vectors are illustrations; they must not resemble an authentic Dots/ERP interface or imply certified integration.

### Motion grammar and stable endpoints

Every scene uses ENTRY → initial HOLD → narration-triggered REVEAL → SETTLE → HOLD per beat, then EXIT → next ENTRY only after deliberate Spacebar at its final hold. Entry establishes the initial subject; reveal carries the change. A static scene can enter directly into HOLD. Durations are design defaults, never narration lengths or elapsed-time triggers.

| Pattern | Semantic job and trigger | Motion/default timing | Exact endpoint and hold | Reduced motion |
|---|---|---|---|---|
| Establish | Selected scene becomes the current subject | Focal object fades in over 500ms, at most 24px displacement | Initial object at its reserved anchor; initial beat is unconsumed | Show initial endpoint immediately |
| Add relationship | Spacebar at the corresponding spoken cue | Connector reveal or supporting object placement over 650ms; movement <=96px | Object, connector and associated label fully visible; previous objects stable | Show the complete relationship immediately |
| Change work state | Spacebar when the narration changes answer/draft/result status | Crossfade compatible geometry over 650ms; no number interpolation | Exactly one intended work state; replaced state absent | Replace immediately |
| Expose review/boundary | Spacebar at review/permission cue | Gate or reviewer reveals in place over 650ms | Boundary and review distinction complete before any illustrative write | Show complete boundary immediately |
| Settle | Automatic completion within the current beat, or Spacebar during motion | Final 200ms of the motion budget resolves opacity/geometry to exact values | No drift, glow pulse, connector traversal or render loop; indefinite hold | Already at endpoint |
| Exit | Spacebar at final hold, except terminal S12 | Outgoing subject fades over 350ms, then incoming entry begins | Single incoming scene at initial endpoint; no outgoing objects/timers | Atomic scene switch to initial endpoint |

The 650ms reveal budget includes its final 200ms settle; do not add a trailing animation or timer. Static entry/exit may use 0ms when nothing meaningful changes, with the choice recorded in Visual. Scene-to-scene crossfades must not show two unrelated diagrams as one apparent relationship. Avoid translating more than 96px per explanatory beat; a connector can reveal along its full path without moving an object that distance.

Use the specified monotone ease-out; no spring, bounce, spin, camera orbit, parallax, particles, blinking cursor or ambient loop. A document/check motif may mark an illustrative accepted endpoint, never guarantee product success. Color changes must also expose a shape/state change. A branch reveals once and holds; a feedback connector does not animate repeatedly around the loop.

Explanatory arrows are 4px strokes, small plain arrowheads, no bounding button/circle, hover effect or clickable affordance. Endpoints must connect the objects whose relation is explained. Visual records each arrow's relationship, direction, cue and stable appearance. A return arrow is valid only for narrated feedback; a bare right-pointing arrow in a corner is forbidden. A line without directional meaning uses no arrowhead. Do not make explanatory connectors optional navigation targets.

### Hidden keyboard contract — deterministic behavior

The future runtime maintains scene ID, reveal index and phase. A single physical key press produces at most one action; ignore key repeats until key release. Cancel superseded motion and pending callbacks when switching scenes, resetting or applying reduced motion. This is a behavioral requirement, not a stack selection.

| State | Spacebar | R |
|---|---|---|
| Entry/exit/transition moving | Complete the selected incoming scene's initial endpoint and hold; do not consume its next reveal or skip another scene | Cancel everything and show S01 initial endpoint |
| Reveal/settle moving | Complete the current beat's exact endpoint and hold; no additional reveal | Cancel everything and show S01 initial endpoint |
| Hold with reveal remaining | Run the next cue-linked beat once | Show S01 initial endpoint |
| Final hold of S01–S11 | Switch to next scene's initial state using exit/entry | Show S01 initial endpoint |
| Final hold of S12 | Remain in the same terminal hold | Show S01 initial endpoint |

After R, the next Spacebar reveals S01's first beat; reset must not return S01's final frame or play abandoned motion. The presenter may pause narration at any hold indefinitely; no additional pause key is needed. Reduced motion follows the same table with immediate endpoints.

Left Arrow and F remain optional, with no owner decision needed for their absence. If implemented, Left Arrow cancels motion and selects the previous scene's settled final state; at S01 it leaves S01 initial. F requests/exits browser fullscreen from that user gesture and preserves scene/beat on success or rejection. Document implemented keys externally in README.md/BUILD_NOTES.md during Build. Browser-owned notifications clear before recording; no app fullscreen error panel appears on the canvas.

Ignore editable targets, input/select/textarea, contenteditable and modifier combinations. Handle only recognized presentation keys; prevent page scrolling only when Spacebar is handled. Do not intercept browser shortcuts or trap Tab. There are no invisible/offscreen focusable navigation buttons to reveal on focus. Screen readers receive one updated scene description and stable reading equivalents rather than a stream of decorative objects; implementation and testing belong to Build/QA.

### Scene alignment guardrails for Visual

The following preserves Content's visual jobs without filling the Visual plan. Visual must map exact spoken cues, initial/reveal/final geometry, asset paths and arrow roles in 03_VISUAL_PLAN.md.

| Scene | Required relationship or change | Guardrail to carry forward |
|---|---|---|
| S01 | Answer gives way to work/result responsibility | One focal subject; conceptual result, no productivity metric; R restores the original cover |
| S02 | Goal/action/feedback and a return to decision | Feedback loop is a schematic; one returning path settles, never cycles perpetually |
| S03 | Context documents and work persist in a bounded workspace | No reconstructed app UI, computer specs, daily throughput or unlimited-compute implication |
| S04 | Model plus work-management/tool/state categories; supported event arrives | Reveal layers with holds; harness/state at their spoken cue, tools at its spoken mention; one event, no universal connector support claim |
| S05 | A second equal categorical provider route joins the managed-execution idea | No vendor ranking; geometry equal, preview/rollout distinctions stay in narration |
| S06 | Exact input/output/cache rates | Equal-size typesetting; unit always visible, input/output/cache reveal order, no cost/task inference |
| S07 | Work-cost ingredients plus human review/rework and an accepted result | No scaled stack, price ratio, ROI number or implied comparative share |
| S08 | Read/draft separated from authority to write | Human/permission boundary precedes illustrative write; no tappable approval buttons or perfect-safety implication |
| S09 | Interface outside persistent records/rules; draft meets validation | Hypothetical maintenance example only; records stay, no SAP logo/certification or demonstrated real integration |
| S10 | Test task becomes an inspected accepted outcome | No current speedup/slowdown chart or invented timer reading; avoid old METR result as headline |
| S11 | Bounded/Broader/Constrained conditional branches | Equal categorical nodes/paths; cue-linked sequential reveals, no probability, adoption year or winner emphasis |
| S12 | One accepted work object within criteria/permission boundary | Final hold is indefinite; Spacebar does not wrap, R restores cover |

### Accessibility, fallback and performance budgets

Target at least 4.5:1 for all text and 3:1 for meaningful graphical boundaries against their actual adjacent fill, even when the typography is large. This conservative text target follows [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Design checks opaque token pairings mathematically; actual glyph rendering, translucency, geometry and resized compositions require Visual/Build/QA inspection. Do not claim this specification makes a runtime accessible by itself.

Provide meaningful Thai scene descriptions outside visual rendering and the existing reading/narration equivalents. Shape and position preserve distinctions without color. Group decorative vector elements out of the accessibility tree. Avoid a focusable hidden help panel or a visible screen-reader-only panel on focus; there is no audience UI to tab through. Add no caption transcript to the recording canvas without an owner-authorized rule change.

Portable vectors and bundled fonts are preferred. If an external illustrative asset fails, show a local authored vector conveying the same relationship; if factual evidence is unavailable, do not replace it with generated evidence. Visual must define the specific fallback and provenance before READY_FOR_BUILD. No WebGL context is required by this Design; no WebGL fallback is currently applicable. Font failure requires fallback glyph/layout inspection and is not a reason to silently omit labels.

Future measurement conditions: desktop Chromium, logical 1920×1080 stage, physical viewport 1920×1080 and 1280×720; record actual browser/OS/device and startup network conditions. Design goals, not measured results: handled key input begins or settles visually within 100ms; explanatory motion aims at 60fps with measured p95 frame interval <=33.3ms; warm local recording startup reaches font-ready S01 within 2 seconds. Builder records measurements and any agreed refinement before QA. Hold has zero application-owned repeating animations/timers and no unnecessary continuous rendering; measure a 30-second hold and inspect cancellation/state logic. No performance measurement, browser rendering, timed narration rehearsal or production QA was run during Design.

### Decisions and exceptions

| ID | Requirement | Topic choice | Narration reason | Verification/deferred check |
|---|---|---|---|---|
| DS01 | Narration first | Cue-driven beats with indefinite stable holds | Owner needs time to explain work, costs and limits | Written state table; runtime rehearsal later |
| DS02 | 16:9 and clean canvas | 1920×1080 proportional fit, neutral letterbox, no visible controls | Recording should focus on one relationship | Mathematical bounds; viewport/focus inspection later |
| DS03 | Readable language | Paired self-hosted Noto Thai/Latin, 48px labels | Thai owner narration and mixed product terms | Upstream licenses checked; binary coverage/rendering later |
| DS04 | Copy target | Exact Content inventory, 2–4 ordinary words per scene | Spoken script carries detail | Inventory checked; media text audit later |
| DS05 | Truthful evidence | S06 exact-value rates; categorical geometry elsewhere | Token rate is distinct from accepted-task economics | Source/claim scope and pairings checked; final frames later |
| DS06 | Color independence | Work object/check, reviewer/gate, record enclosure | Ability, accepted result and permission differ | Token contrast checked; non-color comprehension later |
| DS07 | Purposeful motion | One active focal beat, no looping, immediate reduced motion | The narrator determines pace | Semantic pattern table; cancellation/hold tests later |
| DS08 | Hidden controls | Mandatory Spacebar/R, optional Left/F | Complete narration must work without on-screen UI | Deterministic written contract; actual keys later |
| DS09 | Medium choice | 2D vectors plus unit-labeled numerical evidence | No spatial mechanism requires 3D | Content visual jobs reviewed; Visual owns final assets |
| DS10 | Scope/storage | Design specification and evidence in this exact branch | Separate authorized Design from downstream stages | No Drive writes, no Visual plan/runtime/deployment changes |

No owner exception to the non-negotiable rules was requested or introduced. No material Design decision remains unresolved. Artifact/font acquisition, actual scene word counts after assets, final compositions, measured speech pacing, performance and runtime behavior are future stage responsibilities, not completed checks here.


## Exit criteria and handoff

- Tokens, hierarchy, canvas behavior, font coverage, motion grammar, medium rules, and hidden keys are specified concretely.
- Ordinary scene copy targets 0–8 words; essential chart/data label exclusions are minimal, justified, and truth-preserving.
- All hold states are stable; reduced motion preserves meaning.
- Forbidden UI/navigation arrows remain absent; any explanatory content arrows have a minimal documented semantic role and cannot resemble controls.
- Publish artifacts then status: STAGE=READY_FOR_VISUAL; NEXT_ACTOR=Agent 3 — Visual Director.
- NEXT_ACTION: “Read 01_CONTENT.md, 02_DESIGN_SYSTEM.md, 04_BUILD.md and 05_QA.md. Fill 03_VISUAL_PLAN.md scene by scene, including assets, reveal/settle/hold states, word counts, and factual boundaries. Do not build yet.”


