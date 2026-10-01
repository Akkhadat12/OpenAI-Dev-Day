# OpenAI DevDay 2026 and the future of agents

This is the current Content/Research draft. The reusable instructions remain in 01–05. No downstream stage is complete.

```yaml
BOOTSTRAP_MODE: FRESH
PROJECT_ID: devday-20260930-a7c4
PROJECT_TITLE: OpenAI DevDay 2026 and the future of agents
AUDIENCE: Thai general audience interested in technology and work; basic ChatGPT experience
OWNER: Ham
NARRATION_LANGUAGE: Thai
TARGET_DURATION: 6–8 minutes; summed scene planning estimates 430 seconds; no recorded read-through yet
FORMAT: narration-led web presentation
SCOPE: DevDay 2026 signals for persistent agents, managed execution, economics, governance, and conditional industry impact
OUT_OF_SCOPE: exhaustive keynote recap, share-price forecasts, subscription recommendations, unsupported job-loss estimates
THESIS: OpenAI DevDay 2026 supports a shift toward agents that maintain work across conversations; practical adoption depends on reliable accepted outcomes, affordable total cost, and governed access.
AUDIENCE_TAKEAWAY: Judge agents by accepted work under clear permissions, not just benchmark scores or demos.
OWNER_SCOPE_DECISION: owner confirmed Thai general audience and target 6–8 minutes in Local continuation
OWNER_THESIS_DECISION: APPROVED_A_BY_OWNER_IN_LOCAL_CONTINUATION
RESEARCH_AS_OF: 2026-09-30 Asia/Bangkok
SCENE_COUNT: 12
NARRATION_STATUS: COMPLETE_LOCAL_DRAFT
REMOTE_STATUS: BLOCKED
```

## Editorial decision for review

Preferred angle A combines ongoing responsibility with economics and control. Alternative B centers on which layers retain value (model, cloud execution, integration, system of record). Alternative C centers on how individual workers delegate and measure outcomes. A is the drafted narrative. Changing the primary angle requires revising narration before Design.

Do not inherit the thesis selections from another repo or another run. The owner accepted angle A in the Local continuation.

## Evidence and counterargument

Canonical source and claim register: references/source-and-claim-register.md. It contains 11 primary sources and 16 claim/analysis IDs. No full articles are copied.

The strongest supporting evidence is the combination of persistent-agent rollout, hosted harness infrastructure, event-connected workflows, rival managed services, and explicit permission boundaries. This supports a platform-direction inference rather than a quantified adoption forecast.

The strongest counterargument is that bundling and retention, rather than a new economic regime, can explain the announcements. Existing workflow software may provide equivalent value for predictable tasks. More agent activity can also increase review, rework, infrastructure, and integration costs. Neither launch demos nor vendor-selected evaluations settle those alternatives.

Disconfirming evidence to monitor: low accepted-output rate after independent review; human hours unchanged or rising; users failing to delegate repeat work; high retries; event-driven write loops; connector gaps; governance overhead; simple deterministic workflows beating agents at equal quality and cost.

## Story outline

| Scene | Audience question | Takeaway | Claim IDs | Why it follows |
|---|---|---|---|---|
| S01 | คำถามหลักคือ AI รับผิดชอบงานต่อเนื่องได้แค่ไหน | คำถามหลักคือ AI รับผิดชอบงานต่อเนื่องได้แค่ไหน | C01, A01 | Hook; establish the question |
| S02 | Agent ตัดสินใจใช้เครื่องมือและปรับวิธีทำงานจากผลที่ได้รับ | Agent ตัดสินใจใช้เครื่องมือและปรับวิธีทำงานจากผลที่ได้รับ | C12 | Builds on previous scene; specific cue below |
| S03 | Dots เสนอการดูแลงานต่อเนื่อง ไม่ใช่ทำงานแบบไม่จำกัดสิทธิ์หรือ usage | Dots เสนอการดูแลงานต่อเนื่อง ไม่ใช่ทำงานแบบไม่จำกัดสิทธิ์หรือ usage | C02 | Builds on previous scene; specific cue below |
| S04 | API นำ infrastructure สำหรับงานยาวมาให้ผู้พัฒนาต่อยอด | API นำ infrastructure สำหรับงานยาวมาให้ผู้พัฒนาต่อยอด | C04, C08 | Builds on previous scene; specific cue below |
| S05 | ทิศทาง managed agent เป็นการแข่งขันหลายผู้ให้บริการ | ทิศทาง managed agent เป็นการแข่งขันหลายผู้ให้บริการ | C09, C10 | Builds on previous scene; specific cue below |
| S06 | Token ราคาต่ำลงเป็นเงื่อนไขหนึ่งของ economics | Token ราคาต่ำลงเป็นเงื่อนไขหนึ่งของ economics | C05, C06, A02 | Builds on previous scene; specific cue below |
| S07 | ควรวัดต้นทุนต่อผลลัพธ์ที่รับได้รวมการตรวจและแก้ | ควรวัดต้นทุนต่อผลลัพธ์ที่รับได้รวมการตรวจและแก้ | A02 | Builds on previous scene; specific cue below |
| S08 | ความเก่งกับสิทธิ์ลงมือทำเป็นคนละเรื่อง | ความเก่งกับสิทธิ์ลงมือทำเป็นคนละเรื่อง | C07 | Builds on previous scene; specific cue below |
| S09 | ERP อาจเปลี่ยนบทบาท interface แต่ displacement ยังไม่พิสูจน์ | ERP อาจเปลี่ยนบทบาท interface แต่ displacement ยังไม่พิสูจน์ | A03 | Builds on previous scene; specific cue below |
| S10 | Launch demo และ benchmark ไม่ใช่หลักฐาน productivity ทุกงาน | Launch demo และ benchmark ไม่ใช่หลักฐาน productivity ทุกงาน | C11, A02 | Builds on previous scene; specific cue below |
| S11 | อนาคตมีหลาย scenario ที่ขึ้นกับ reliability และ review overhead | อนาคตมีหลาย scenario ที่ขึ้นกับ reliability และ review overhead | A04 | Builds on previous scene; specific cue below |
| S12 | มอบหมายงานตามผลลัพธ์ เกณฑ์สำเร็จ และขอบเขตสิทธิ์ | มอบหมายงานตามผลลัพธ์ เกณฑ์สำเร็จ และขอบเขตสิทธิ์ | A01, A02, A03, A04 | Builds on previous scene; specific cue below |

## Scene specifications

Canvas copy is English. Narration and owner editions are Thai. Counts below are whitespace-delimited English word/item counts including all intended reveals. No Thai copy is intended on canvas. The essential-label exception is used only for S06 rates: categories and unit are required to distinguish input/output/cache and prevent cost/task confusion. Scene IDs and cue text are never visible.

Estimated seconds are editorial allocations, not measured speech times. Rehearse before locking pacing. Every reveal settles and holds until deliberate presenter input.

### S01

```yaml
SCENE_ID: S01
SCENE_PURPOSE: คำถามหลักคือ AI รับผิดชอบงานต่อเนื่องได้แค่ไหน
NARRATION: |
  OpenAI DevDay 2026 ทำให้มีคำถามหนึ่งที่น่าสนใจมากกว่าการถามว่า โมเดลใหม่ฉลาดขึ้นแค่ไหน นั่นคือ ถ้าเราให้เป้าหมายกับ AI แล้วกลับมาอีกครั้ง มันจะพางานไปถึงจุดที่ใช้ได้จริงหรือเปล่า คลิปนี้จะใช้สิ่งที่ OpenAI ประกาศเป็นจุดเริ่มต้น แล้วดูว่าทิศทางนี้หมายถึงอะไรกับคนทำงาน นักพัฒนา และธุรกิจ โดยแยกสิ่งที่มีหลักฐานแล้วออกจากภาพอนาคตที่ยังต้องพิสูจน์
CLAIM_IDS: [C01, A01]
ESTIMATED_SPOKEN_SECONDS: 25
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "เมื่อพูดว่า ‘พางานไปถึงจุดที่ใช้ได้จริง’ เปิดเผยกองงานที่เดินต่อจากคำตอบไปสู่ผลงาน. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "เปลี่ยนกรอบจากกล่องคำตอบไปเป็นผลลัพธ์งาน โดยใช้วัตถุเดียวเป็นจุดสนใจ"
VISIBLE_COPY_PROPOSAL: "From answers to responsibility"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 4
FACTUAL_BOUNDARIES: "เป็นภาพเปรียบเทียบ ไม่มีตัวเลข productivity"
TRANSITION_REASON: "The next scene defines how an agent differs from a fixed workflow."
```

### S02

```yaml
SCENE_ID: S02
SCENE_PURPOSE: Agent ตัดสินใจใช้เครื่องมือและปรับวิธีทำงานจากผลที่ได้รับ
NARRATION: |
  เริ่มจากคำว่า Agent ก่อน ในเรื่องนี้เราหมายถึงระบบที่ใช้โมเดลตัดสินใจว่าจะทำขั้นตอนใด ใช้เครื่องมืออะไร แล้วดูผลที่เกิดขึ้นเพื่อเลือกขั้นตอนต่อไป ตัวอย่างเช่น การขอให้ AI อธิบายวิธีทำรายงาน กับการให้มันเปิดข้อมูล ตรวจความผิดปกติ ร่างรายงาน และนำผลกลับมาให้ตรวจ เป็นการใช้งานคนละระดับ แต่ไม่ใช่ทุกงานจำเป็นต้องใช้ Agent ถ้างานมีขั้นตอนตายตัว การเขียน workflow ที่แน่นอนอาจควบคุมได้ง่ายกว่า
CLAIM_IDS: [C12]
ESTIMATED_SPOKEN_SECONDS: 30
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘ดูผลที่เกิดขึ้น’ เปิดเผย feedback กลับสู่จุดตัดสินใจ. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "แสดงเป้าหมาย ผลจากเครื่องมือ และการปรับการทำงาน; เป็นวงจรที่หยุดให้ผู้เล่าพูด"
VISIBLE_COPY_PROPOSAL: "Goal  Action  Feedback"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 3
FACTUAL_BOUNDARIES: "schematic ไม่ใช่การยืนยันทุก product มี autonomy เท่ากัน"
TRANSITION_REASON: "After defining the loop, introduce Dots as a documented persistent-work product."
```

### S03

```yaml
SCENE_ID: S03
SCENE_PURPOSE: Dots เสนอการดูแลงานต่อเนื่อง ไม่ใช่ทำงานแบบไม่จำกัดสิทธิ์หรือ usage
NARRATION: |
  ภาพนี้เริ่มเป็นรูปธรรมผ่าน Dots ที่ OpenAI เปิดตัวพร้อมคอมพิวเตอร์บนคลาวด์ของตัวเอง และการเชื่อมแอปที่ผู้ใช้เลือก จุดที่เปลี่ยนคือบริบทของงานอาจเดินต่อระหว่างบทสนทนา เราจึงมอบเป้าหมาย ติดตามความคืบหน้า และกลับมาแก้ทิศทางได้ อย่างไรก็ตาม การบอกว่า Agent พร้อมอยู่กับเราตลอดเวลา ไม่ได้แปลว่าประมวลผลงานได้ไม่จำกัด หรือได้รับสิทธิ์ทำทุกอย่างในบัญชีของเรา
CLAIM_IDS: [C02]
ESTIMATED_SPOKEN_SECONDS: 35
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘บริบทของงาน’ เปิดเผยเอกสาร; ‘ติดตามความคืบหน้า’ เปิดเผยร่างผลงาน. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "ใช้ schematic cloud workspace เชื่อมเอกสารกับงานค้าง; หลีกเลี่ยง GUI จำลองที่เหมือนหลักฐาน screenshot"
VISIBLE_COPY_PROPOSAL: "Dots  Ongoing work"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 3
FACTUAL_BOUNDARIES: "ไม่อ้าง task success/day, เครื่องสเปก, unlimited compute หรือรับประกัน 24/7 throughput"
TRANSITION_REASON: "Move from the user product to the developer infrastructure that supports long tasks."
```

### S04

```yaml
SCENE_ID: S04
SCENE_PURPOSE: API นำ infrastructure สำหรับงานยาวมาให้ผู้พัฒนาต่อยอด
NARRATION: |
  ฝั่งนักพัฒนา Agents API เปิด public beta ตั้งแต่วันที่ 10 กันยายน ก่อนวัน DevDay มันนำ harness ของ Codex มาให้ใช้ โดย harness คือส่วนที่จัดการวงจรทำงาน เครื่องมือ และบริบท ส่วน environment คือที่ที่ Agent ลงมือทำงานจริง อีกชิ้นคือ MCP Events ที่ให้ระบบรับการเปลี่ยนแปลงจากแอปผ่าน event ได้ตามการเชื่อมต่อที่รองรับ เมื่อนำมาประกอบกัน นักพัฒนาอาจเริ่มจาก workflow ของธุรกิจได้เร็วขึ้น แต่ยังต้องออกแบบเครื่องมือและตรวจผลเอง
CLAIM_IDS: [C04, C08]
ESTIMATED_SPOKEN_SECONDS: 40
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘ส่วนที่จัดการวงจรทำงาน’ เปิดเผย harness/state; ‘รับการเปลี่ยนแปลงจากแอป’ เปิดเผย event. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "4 ชั้น categorical ไม่มีขนาดแทนมูลค่า; reveal ทีละชั้นตามภารกิจ"
VISIBLE_COPY_PROPOSAL: "Model  Harness  Tools  State"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 4
FACTUAL_BOUNDARIES: "Agents API เปิด beta 10 ก.ย. ก่อน DevDay; ไม่กล่าวทุก tool event-ready"
TRANSITION_REASON: "Compare the documented platform direction with rival managed-agent infrastructure."
```

### S05

```yaml
SCENE_ID: S05
SCENE_PURPOSE: ทิศทาง managed agent เป็นการแข่งขันหลายผู้ให้บริการ
NARRATION: |
  ทิศทางนี้ไม่ได้มี OpenAI เพียงรายเดียว Anthropic อธิบายบริการ Managed Agents และการแยก session, harness, sandbox ไว้ตั้งแต่เดือนเมษายน 2026 ขณะที่ AWS มี Bedrock Managed Agents ที่ใช้เทคโนโลยี OpenAI อยู่ในช่วง preview หลักฐานเหล่านี้สนับสนุนว่า ผู้ให้บริการกำลังแข่งกันทั้งโมเดลและระบบที่ทำให้งานยาวดำเนินต่อได้ แต่ยังไม่เพียงพอจะบอกว่าใครจะชนะตลาด
CLAIM_IDS: [C09, C10]
ESTIMATED_SPOKEN_SECONDS: 30
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘ไม่ได้มี OpenAI เพียงรายเดียว’ เปิดเผยอีกเส้นทางขนาดเท่ากัน. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "สองเส้นทาง provider convergence สู่ execution boundary; ไม่ใช้ market share chart"
VISIBLE_COPY_PROPOSAL: "A wider industry shift"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 4
FACTUAL_BOUNDARIES: "provider claims ไม่มี comparative benchmark; AWS preview ไม่ GA"
TRANSITION_REASON: "Ask which economic condition makes repeated model work practical."
```

### S06

```yaml
SCENE_ID: S06
SCENE_PURPOSE: Token ราคาต่ำลงเป็นเงื่อนไขหนึ่งของ economics
NARRATION: |
  อีกเงื่อนไขหนึ่งคือราคา GPT-6.1 Sol มีราคา standard API สองดอลลาร์ต่อหนึ่งล้าน input tokens และสิบดอลลาร์ต่อหนึ่งล้าน output tokens ส่วน cached input อยู่ที่สิบเซนต์ต่อหนึ่งล้าน tokens OpenAI ระบุว่า standard input และ output rates เท่ากับหนึ่งในห้าของ Astra แต่นั่นเป็นราคาของ token แต่ละประเภท ไม่ใช่ข้อสรุปว่าทุกงานจะถูกลงเหลือหนึ่งในห้า เพราะจำนวนรอบ การใช้เครื่องมือ และงานที่ต้องแก้ยังต่างกันได้
CLAIM_IDS: [C05, C06, A02]
ESTIMATED_SPOKEN_SECONDS: 35
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘สองดอลลาร์ต่อหนึ่งล้าน input tokens’ เปิดเผยราคา input; ‘สิบดอลลาร์ต่อหนึ่งล้าน output tokens’ เปิดเผยราคา output; ‘cached input’ เปิดเผยราคา cache พร้อมหน่วยเดียวกัน. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "แสดงรายการ rates เท่ากันด้านขนาด ไม่มี bar เปรียบเทียบ cost/task"
VISIBLE_COPY_PROPOSAL: "Token price"
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Input / Cached input / Output / USD per 1M tokens / $2 / $0.10 / $10"
ESSENTIAL_LABEL_REASON: "Categories, values and denominator are necessary for truthful rate reading; not prose. Count 11 excluded items when USD, per, 1M, tokens are separate."
TOTAL_VISIBLE_WORD_COUNT: 13
FACTUAL_BOUNDARIES: "standard API USD/1M tokens as-of 30 ก.ย.; cache เฉพาะ eligible hits; ไม่ใช่ subscription pricing"
TRANSITION_REASON: "Token rates cover only one ingredient; examine total cost per accepted output."
```

### S07

```yaml
SCENE_ID: S07
SCENE_PURPOSE: ควรวัดต้นทุนต่อผลลัพธ์ที่รับได้รวมการตรวจและแก้
NARRATION: |
  ผมจึงเสนอให้วัดต้นทุนต่อผลงานที่ยอมรับได้ โดยรวมทั้งค่าโมเดล เครื่องมือ คอมพิวเตอร์ และเวลาที่คนต้องตรวจหรือแก้ ถ้า Agent ส่งร่างเร็วขึ้น แต่เราต้องใช้เวลาตรวจมาก ผลประหยัดอาจลดลง ในทางกลับกัน ถ้ามันช่วยจบงานที่เดิมใช้เวลามาก และตรวจได้ด้วยเกณฑ์ชัดเจน ผลคุ้มค่าอาจสูงขึ้น วิธีทดสอบคือใช้ชุดงานที่ใกล้เคียงกัน เทียบคุณภาพ เวลารวม และค่าใช้จ่ายจริง แล้วตัดสินจากผลที่ผ่านเกณฑ์เดียวกัน
CLAIM_IDS: [A02]
ESTIMATED_SPOKEN_SECONDS: 40
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘เวลาที่คนต้องตรวจหรือแก้’ เปิดเผยก้อน review/rework แล้วหยุดที่ปลายทาง. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "แสดงกองต้นทุนไม่มีสเกล inference/tools/review/rework ผ่านรูปทรง แล้ววางข้างผลลัพธ์ที่ผ่านตรวจ"
VISIBLE_COPY_PROPOSAL: "Cost per accepted outcome"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 4
FACTUAL_BOUNDARIES: "accounting framework ไม่มีราคาต่อ SAP task หรือ dataset ROI"
TRANSITION_REASON: "Economic value also depends on what the agent is allowed to do."
```

### S08

```yaml
SCENE_ID: S08
SCENE_PURPOSE: ความเก่งกับสิทธิ์ลงมือทำเป็นคนละเรื่อง
NARRATION: |
  เมื่อ Agent ลงมือทำได้ สิทธิ์เข้าถึงก็กลายเป็นเรื่องสำคัญ การอ่านข้อมูล การสร้างร่าง และการส่งหรือแก้ข้อมูลจริงควรแยกกัน OpenAI อธิบายว่า proactive research ของ Dots ใช้เครื่องมือแบบอ่านอย่างเดียว และมีระบบตรวจ action ก่อนงานที่ต้อง review นี่แสดงว่าความสามารถของโมเดลกับสิทธิ์ลงมือทำเป็นคนละเรื่อง สำหรับองค์กร ต้องรู้ว่า Agent อ่านอะไรได้ ใครอนุมัติ และจะย้อนกลับอย่างไรถ้าเปลี่ยนผิด สิ่งเหล่านี้ไม่ได้หายไปเพราะโมเดลเก่งขึ้น
CLAIM_IDS: [C07]
ESTIMATED_SPOKEN_SECONDS: 40
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘การส่งหรือแก้ข้อมูลจริง’ เปิดเผยขอบเขตการอนุมัติก่อนการเขียน. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "ภาพเอกสารผ่าน boundary gates; คนอนุมัติแยกจาก Agent; ไม่มี UI ปุ่มจริง"
VISIBLE_COPY_PROPOSAL: "Read  Draft  Approve  Write"
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 4
FACTUAL_BOUNDARIES: "proactive read-only ไม่แปลทุก task read-only; ไม่บอก approval ป้องกันผิดพลาดทั้งหมด"
TRANSITION_REASON: "Permissions lead to the role of business records and domain rules."
```

### S09

```yaml
SCENE_ID: S09
SCENE_PURPOSE: ERP อาจเปลี่ยนบทบาท interface แต่ displacement ยังไม่พิสูจน์
NARRATION: |
  ลองใช้ตัวอย่างสมมติในงานซ่อมบำรุง Agent อาจอ่านประวัติอุปกรณ์ จัดหมวดข้อความ แล้วเตรียมร่างรายการงาน แต่ก่อนบันทึกจริง ยังต้องตรวจว่าอุปกรณ์ถูกตัว รหัสถูกต้อง และผู้ใช้มีสิทธิ์ นี่ทำให้เราควรแยก interface ที่คนใช้สั่งงาน ออกจากระบบที่เก็บ record และกฎธุรกิจ การใช้งานผ่าน Agent อาจเปลี่ยน interface ได้มาก ขณะเดียวกันก็ทำให้คุณภาพข้อมูลและความรู้กระบวนการสำคัญขึ้น ยังไม่มีหลักฐานจากงานเปิดตัวนี้เพียงพอจะสรุปว่า ERP หรืออาชีพที่เกี่ยวข้องจะหายไป
CLAIM_IDS: [A03]
ESTIMATED_SPOKEN_SECONDS: 40
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘ตัวอย่างสมมติในงานซ่อมบำรุง’ เปิดเผย record; ‘อุปกรณ์ถูกตัว รหัสถูกต้อง’ เปิดเผยเกณฑ์ตรวจ. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "ตัวอย่างสมมติ Agent ย้ายร่างเอกสารไป validation gate ภายนอกระบบ records คงอยู่; ห้าม logo รับรอง integration"
VISIBLE_COPY_PROPOSAL: "Interface  Records  Rules"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 3
FACTUAL_BOUNDARIES: "ไม่มีหลักฐาน Dots SAP write integration/current certification/job replacement"
TRANSITION_REASON: "The hypothetical business example needs real productivity evidence to validate value."
```

### S10

```yaml
SCENE_ID: S10
SCENE_PURPOSE: Launch demo และ benchmark ไม่ใช่หลักฐาน productivity ทุกงาน
NARRATION: |
  หลักฐานด้านประสิทธิภาพต้องอ่านอย่างระวัง งานเปิดตัวและ benchmark บอกความสามารถภายใต้เงื่อนไขที่ทดสอบ ไม่ได้บอก productivity ของทุกองค์กร ตัวอย่างที่ช่วยเตือนเรื่องนี้คือ METR ซึ่งในเดือนกุมภาพันธ์ 2026 ระบุว่าการทดลองใหม่ของตนมีปัญหาการเลือกผู้เข้าร่วมและการวัดเวลา จนประเมินผลปัจจุบันได้ไม่ดี เราจึงไม่ควรหยิบผลเก่าปี 2025 มาตัดสิน Agent ใหม่ แต่ก็ไม่ควรใช้ความรู้สึกว่าเร็วขึ้นแทนการวัดเวลาจนงานเสร็จจริง
CLAIM_IDS: [C11, A02]
ESTIMATED_SPOKEN_SECONDS: 40
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘การวัดเวลาจนงานเสร็จจริง’ เปิดเผยผลงานที่ผ่านตรวจโดยไม่เพิ่มคำอธิบายบนภาพ. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "แสดง test task กับ accepted outcome ที่ตรวจได้ ไม่ใช้ผล slowdown เก่าสร้าง headline ปัจจุบัน"
VISIBLE_COPY_PROPOSAL: "Measure real outcomes"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 3
FACTUAL_BOUNDARIES: "METR update ไม่ใช่ทดสอบ Sol/Dots; ห้าม generalized slowdown/speedup"
TRANSITION_REASON: "Evidence limitations motivate conditional scenarios rather than a single forecast."
```

### S11

```yaml
SCENE_ID: S11
SCENE_PURPOSE: อนาคตมีหลาย scenario ที่ขึ้นกับ reliability และ review overhead
NARRATION: |
  อนาคตจึงควรมองเป็นเงื่อนไข กรณีฐานคือ Agent ขยายในงานจำกัดขอบเขตและตรวจผลได้ เช่น ร่างเอกสาร ตรวจข้อมูล หรือเตรียมการแก้โค้ด กรณีที่เติบโตเร็วกว่าเกิดเมื่อความน่าเชื่อถือดีขึ้น การเชื่อมระบบง่ายขึ้น และคนตรวจน้อยลงโดยคุณภาพยังดี ส่วนกรณีที่โตช้าคือค่าใช้จ่ายในการตรวจและแก้สูง หรือความเสี่ยงทำให้องค์กรจำกัดสิทธิ์มาก ทั้งสามทางเป็นภาพวิเคราะห์ ไม่ใช่คำพยากรณ์ที่มีตัวเลขความน่าจะเป็นรองรับ
CLAIM_IDS: [A04]
ESTIMATED_SPOKEN_SECONDS: 45
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘กรณีฐาน’ เปิดเผย Bounded; ‘กรณีที่เติบโตเร็วกว่า’ เปิดเผย Broader; ‘ส่วนกรณีที่โตช้า’ เปิดเผย Constrained. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "สามแขนงเชิง scenario ไม่มีขนาดบอก probability; เปิดทีละทางแล้วหยุด"
VISIBLE_COPY_PROPOSAL: "Bounded  Broader  Constrained"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 3
FACTUAL_BOUNDARIES: "ไม่มี probability/year adoption ใช้ conditional scenario เท่านั้น"
TRANSITION_REASON: "Turn the scenarios into a bounded experiment the audience can run."
```

### S12

```yaml
SCENE_ID: S12
SCENE_PURPOSE: มอบหมายงานตามผลลัพธ์ เกณฑ์สำเร็จ และขอบเขตสิทธิ์
NARRATION: |
  ข้อสรุปที่หลักฐานสนับสนุนคือ วงการกำลังสร้างทั้งสมองและระบบทำงานรอบสมอง เพื่อให้เรามอบหมายเป้าหมายได้ต่อเนื่องมากขึ้น สำหรับคนทำงาน จุดเริ่มต้นที่เหมาะคือเลือกงานหนึ่งอย่าง กำหนดผลลัพธ์ เกณฑ์สำเร็จ และขอบเขตสิทธิ์ แล้ววัดว่าประหยัดเวลาจนงานใช้ได้จริงหรือไม่ ความได้เปรียบอาจอยู่กับคนที่เข้าใจงานและตรวจผลเป็น แต่ยังต้องพิสูจน์ด้วยการใช้งานจริงว่า Agent แต่ละระบบทำหน้าที่นั้นได้คุ้มแค่ไหน
CLAIM_IDS: [A01, A02, A03, A04]
ESTIMATED_SPOKEN_SECONDS: 30
MEASUREMENT_BASIS: editorial allocation; actual read-through NOT_RUN
PRESENTER_CUES: "‘เลือกงานหนึ่งอย่าง’ หยุดผลลัพธ์ในกรอบเกณฑ์และสิทธิ์; Space ที่ฉากสุดท้ายคงภาพเดิม. Space เปิดเผยภาพ/หยุดที่ปลายทาง แล้วไปต่อเมื่อเล่าประเด็นครบ; R ยกเลิกการเคลื่อนไหวและกลับหน้าปก."
VISUAL_JOB: "ผลลัพธ์เดียววางในกรอบ goal/criteria/boundary โดยข้อมูลอยู่ narration; hold indefinite"
VISIBLE_COPY_PROPOSAL: "Delegate with boundaries"
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "NONE"
ESSENTIAL_LABEL_REASON: "NOT_APPLICABLE"
TOTAL_VISIBLE_WORD_COUNT: 3
FACTUAL_BOUNDARIES: "ไม่มี industry winner หรือ employment certainty"
TRANSITION_REASON: "Final hold; no automatic advance beyond the closing scene."
```


## Upstream acceptance review

- Every material narration claim has a source or explicit ANALYSIS/INFERENCE/SCENARIO type.
- Canvas ordinary copy is at most 5 words per scene; proposed S06 labels are accounted separately.
- S01 is the cover and R destination. Space supports the full flow without object clicks.
- No script text, persistent source UI, controls, numbers, progress dots, or decorative perpetual motion.
- No exact probability, productivity uplift, market share, job-loss count, or future date is asserted.
- S09 is explicitly a hypothetical maintenance/ERP example. No SAP integration availability is claimed.
- Content artifact review is a local editorial check, not independent production QA.
- Content exit criteria remain unmet: no remote branch/status, owner folder, PDFs/native Thai Doc, or approved essential thesis gate.

