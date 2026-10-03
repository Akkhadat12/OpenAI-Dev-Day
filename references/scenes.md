# Scenes — OpenAI Dev Day 2025
PROJECT_ID: 20261003-b4fb  
NARRATION_LANGUAGE: Thai  
WEB_LANGUAGE: English  
COVER_SCENE_ID: S01  
SCENE_COUNT: 10  
TARGET_DURATION: ~6–8 minutes spoken (read-through estimate)

---

~~~yaml
SCENE_ID: S01
SCENE_PURPOSE: Establish the authentic event cover — OpenAI DevDay 2025 — so R has a clear reset target.
NARRATION: |
  สวัสดีครับ วันนี้เราจะสรุป OpenAI DevDay ปี 2025 ให้สั้น คม และใช้ตัดสินใจได้จริง
  ไม่ใช่ถอดเทปทั้งงาน แต่เป็นเรื่องราวสำหรับคนสร้างผลิตภัณฑ์ที่พลาดไลฟ์
  จุดโฟกัสคือสิ่งที่เปลี่ยนวิธี “ส่งของ” ของบิลเดอร์ — ไม่ใช่แค่โมเดลใหม่ล้วน ๆ
CLAIM_IDS: [C01]
ESTIMATED_SPOKEN_SECONDS: 25 (Thai read-through estimate)
PRESENTER_CUES: Hold cover 2–3s after title settles; advance on next breath.
VISUAL_JOB: Authentic OpenAI wordmark / DevDay identity on clean 16:9 field; no fake logo.
VISIBLE_COPY_PROPOSAL: OpenAI DevDay 2025
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: NONE
ESSENTIAL_LABEL_REASON: n/a
TOTAL_VISIBLE_WORD_COUNT: 3
FACTUAL_BOUNDARIES: Do not invent anniversary claims or attendee counts on cover; do not AI-generate the OpenAI mark.
TRANSITION_REASON: From identity to the “why it matters” hook.
~~~

~~~yaml
SCENE_ID: S02
SCENE_PURPOSE: Hook — ChatGPT is being positioned as a place software runs.
NARRATION: |
  ถ้าพลาดงานนี้ สิ่งที่ควรจำมีประโยคเดียวก่อนรายละเอียด
  OpenAI กำลังผลัก ChatGPT ให้เป็นพื้นที่ที่ซอฟต์แวร์ “วิ่งและทำงาน” ได้ในบทสนทนา
  ไม่ใช่แค่กล่องถาม-ตอบอีกต่อไป — และนั่นกระทบคนทำผลิตภัณฑ์โดยตรง
CLAIM_IDS: [C02, C18, C19]
ESTIMATED_SPOKEN_SECONDS: 28
PRESENTER_CUES: Reveal the phrase “software runs here” after first sentence; hold; advance.
VISUAL_JOB: Simple metaphor — chat surface becoming a runtime/platform frame.
VISIBLE_COPY_PROPOSAL: Software runs in chat
VISIBLE_WORD_COUNT: 4
ESSENTIAL_DATA_LABELS: NONE
TOTAL_VISIBLE_WORD_COUNT: 4
FACTUAL_BOUNDARIES: Do not claim ChatGPT is a full OS in the computer-science sense; this is product-platform framing.
TRANSITION_REASON: Audience needs the event map before deep dives.
~~~

~~~yaml
SCENE_ID: S03
SCENE_PURPOSE: Context — event date and four keynote pillars.
NARRATION: |
  DevDay 2025 จัดขึ้นวันที่หกตุลาคม ที่ซานฟรานซิสโก
  คีย์โนตถูกจัดเป็นสี่เสาหลัก ได้แก่ แอปใน ChatGPT การสร้างเอเจนต์ การเขียนโค้ดด้วย Codex
  และอัปเดตโมเดลกับเอพีไอ
  เราจะเดินตามเสานี้ — แต่ตัดเหลือสิ่งที่เปลี่ยนวิธีส่งผลิตภัณฑ์จริง
CLAIM_IDS: [C01, C18]
ESTIMATED_SPOKEN_SECONDS: 32
PRESENTER_CUES: Reveal pillars one-by-one (Apps → Agents → Codex → Models); settle; advance.
VISUAL_JOB: Four-pillar map as story spine.
VISIBLE_COPY_PROPOSAL: Four pillars
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Apps | Agents | Codex | Models/API"
ESSENTIAL_LABEL_REASON: Pillar names are indispensable navigation labels, not prose.
TOTAL_VISIBLE_WORD_COUNT: 6
FACTUAL_BOUNDARIES: Do not invent session agenda beyond keynote pillars.
TRANSITION_REASON: Enter platform shift #1 — Apps.
~~~

~~~yaml
SCENE_ID: S04
SCENE_PURPOSE: Explain Apps in ChatGPT + Apps SDK (MCP, preview).
NARRATION: |
  เสาแรกคือ Apps in ChatGPT และ Apps SDK
  นักพัฒนาเริ่ม빌ด์และทดสอบแอปแบบอินเทอร์แอคทีฟใน ChatGPT ได้ตั้งแต่วันงาน ในสถานะพรีวิว
  SDK ถูกปล่อยบนมาตรฐานเปิดที่ต่อยอดจาก Model Context Protocol หรือ MCP
  ความหมายสั้น ๆ คือ คุณออกแบบทั้ง logic และอินเทอร์เฟซของแอป ให้คุยกับแชทได้ — ไม่ใช่แค่ปลั๊กอินคำสั่งแบบเดิม
CLAIM_IDS: [C02, C03, C05, C20]
ESTIMATED_SPOKEN_SECONDS: 40
PRESENTER_CUES: Reveal “Apps SDK · Preview” then “Built on MCP”; hold on Preview chip; advance.
VISUAL_JOB: Show Apps SDK sitting on MCP; Preview status chip mandatory.
VISIBLE_COPY_PROPOSAL: Apps SDK · Preview
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "MCP"
ESSENTIAL_LABEL_REASON: Protocol name is required for truthful stack reading.
TOTAL_VISIBLE_WORD_COUNT: 4
FACTUAL_BOUNDARIES: Must show Preview; must not imply full public directory GA on day one (C05).
TRANSITION_REASON: Show demo evidence so the SDK claim is tangible.
~~~

~~~yaml
SCENE_ID: S05
SCENE_PURPOSE: Evidence — partner app demos (Coursera, Canva, Zillow patterns).
NARRATION: |
  หลักฐานบนเวทีไม่ใช่สไลด์อย่างเดียว แต่เป็นเดโมพันธมิตร
  เช่น เรียนผ่าน Coursera ในแชท ออกแบบด้วย Canva และสำรวจอสังหาฯ บนแผนที่ Zillow โดยไม่ต้องออกจากเธรด
  แอปสามารถแสดงแบบอินไลน์ หรือขยายเต็มจอ และส่งคอนเท็กซ์กลับให้ ChatGPT ถามต่อได้
  สำหรับบิลเดอร์ นี่คือสัญญาณว่า “พื้นผิวการจัดจำหน่าย” ใหม่อยู่ในตัว ChatGPT เอง — แม้ไดเรกทอรีสาธารณะจะมาทีหลัง
CLAIM_IDS: [C04, C05]
ESTIMATED_SPOKEN_SECONDS: 38
PRESENTER_CUES: Reveal three partner marks sequentially; hold on “inline / fullscreen”; advance.
VISUAL_JOB: Three demo tiles + inline vs fullscreen cue.
VISIBLE_COPY_PROPOSAL: Partner demos
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Coursera · Canva · Zillow"
ESSENTIAL_LABEL_REASON: Named demo partners are factual anchors from keynote coverage.
TOTAL_VISIBLE_WORD_COUNT: 5
FACTUAL_BOUNDARIES: Partner list is illustrative; do not claim exclusive partnerships or revenue figures.
TRANSITION_REASON: Move to platform shift #2 — AgentKit.
~~~

~~~yaml
SCENE_ID: S06
SCENE_PURPOSE: Explain AgentKit as production plumbing for agents.
NARRATION: |
  เสาที่สองคือ AgentKit
  OpenAI รวมชุดเครื่องมือสำหรับสร้าง ดีพลอย และปรับจูนเวิร์กโฟลว์แบบเอเจนต์ไว้ด้วยกัน
  เป้าคือลดงานที่ทีมมักต้องปะติดปะต่อเอง — ออร์เคสเตรชัน อินเทอร์เฟซแชท การเชื่อมข้อมูล การประเมินผล และการ์ดเรล
  ถ้า Apps คือ “ที่ซอฟต์แวร์โชว์ตัวใน ChatGPT” AgentKit คือ “ท่อส่งเอเจนต์ให้ส่งของได้จริงขึ้น”
CLAIM_IDS: [C06, C19]
ESTIMATED_SPOKEN_SECONDS: 35
PRESENTER_CUES: Reveal AgentKit umbrella; then five component slots empty ready for next scene; advance.
VISUAL_JOB: AgentKit as umbrella over builder tooling.
VISIBLE_COPY_PROPOSAL: AgentKit
VISIBLE_WORD_COUNT: 1
ESSENTIAL_DATA_LABELS: NONE
TOTAL_VISIBLE_WORD_COUNT: 1
FACTUAL_BOUNDARIES: Avoid “solves every agent problem” absolute language.
TRANSITION_REASON: Break components + availability status.
~~~

~~~yaml
SCENE_ID: S07
SCENE_PURPOSE: Evidence — AgentKit components with announced-vs-shipped status chips.
NARRATION: |
  แยกสถานะให้ชัด เพราะงานอีเวนต์ชอบพูดรวม
  Agent Builder เป็นตัวสร้างเวิร์กโฟลว์แบบลากวาง — ตอนเปิดตัวเป็นเบตา
  ChatKit สำหรับฝังแชทเอเจนต์ในผลิตภัณฑ์ และชุด Evals ใหม่ — โดยรวมถูกระบุว่าพร้อมใช้ทั่วไป
  มี Guardrails สำหรับคัดกรองอินพุตเอาต์พุต และ Connector Registry สำหรับผสานแหล่งข้อมูล ซึ่งเริ่มโรลเอาต์แบบเบตาจำกัด
  กติกาของเราในเรื่องนี้คือ อย่าขายเบตาเป็นจีเอ
CLAIM_IDS: [C07, C08, C09, C10, C20]
ESTIMATED_SPOKEN_SECONDS: 45
PRESENTER_CUES: Reveal each component with status chip (Beta/GA/Limited beta); hold on contrast; advance.
VISUAL_JOB: Component grid with status chips — visual of C20 method.
VISIBLE_COPY_PROPOSAL: Status matters
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Builder Beta | ChatKit GA | Evals GA | Guardrails | Connectors Limited beta"
ESSENTIAL_LABEL_REASON: Status labels are the factual point of the scene.
TOTAL_VISIBLE_WORD_COUNT: 12
FACTUAL_BOUNDARIES: Do not upgrade beta items to GA; Connector Registry is not universal.
TRANSITION_REASON: Third pillar — Codex GA.
~~~

~~~yaml
SCENE_ID: S08
SCENE_PURPOSE: Codex generally available + team surfaces (Slack, SDK, admin).
NARRATION: |
  เสาที่สามคือ Codex ที่ออกจากรีเสิร์ชพรีวิวเข้าสู่การใช้งานทั่วไป
  นอกจากใช้ในเอดิเตอร์ เทอร์มินัล และคลาวด์แล้ว วันงานยังประกาศอินทิเกรชัน Slack
  เอสดีเคสำหรับฝังเอเจนต์ตัวเดียวกับ Codex ไว้ในเวิร์กโฟลว์ของทีม และเครื่องมือแอดมินสำหรับองค์กร
  OpenAI รายงานว่าการใช้งานรายวันโตขึ้นกว่าสิบเท่าตั้งแต่ต้นสิงหาคม — ตัวเลขนี้เป็นรายงานของบริษัท ควรอ่านพร้อมเชิงอรรถ
CLAIM_IDS: [C11, C12, C13, C20]
ESTIMATED_SPOKEN_SECONDS: 40
PRESENTER_CUES: Reveal Preview→GA; then Slack / SDK / Admin; footnote pulse on 10×; advance.
VISUAL_JOB: Codex GA transition + three feature marks; soft footnote for company metric.
VISIBLE_COPY_PROPOSAL: Codex is GA
VISIBLE_WORD_COUNT: 3
ESSENTIAL_DATA_LABELS: "Slack · SDK · Admin"
ESSENTIAL_LABEL_REASON: Named launch features.
TOTAL_VISIBLE_WORD_COUNT: 6
FACTUAL_BOUNDARIES: Label 10× as OpenAI-reported; mention plan-tier gates only in narration if asked — canvas stays light.
TRANSITION_REASON: Fourth pillar — model/API expands.
~~~

~~~yaml
SCENE_ID: S09
SCENE_PURPOSE: Capability expand — GPT-5 Pro, Sora 2, mini models.
NARRATION: |
  เสาที่สี่คือเชื้อเพลิงโมเดลและเอพีไอ
  GPT-5 Pro เข้าสู่เอพีไอ สำหรับงานที่ต้องการเหตุผลลึก — ใช้กับ Responses API และอาจใช้เวลานาน ควรออกแบบโหมดพื้นหลัง
  Sora 2 และ Sora 2 Pro เปิดให้สร้างวิดีโอผ่านเอพีไอ
  พร้อมโมเดลมินิที่ถูกลงอย่างมากตามที่ OpenAI เคลม ทั้งภาพและเสียงแบบเรียลไทม์
  สรุปสั้น ๆ แพลตฟอร์มเปิดทาง ส่วนโมเดลขยายสิ่งที่เอเจนต์กับแอปทำได้
CLAIM_IDS: [C15, C16, C17, C19]
ESTIMATED_SPOKEN_SECONDS: 42
PRESENTER_CUES: Reveal three cards: GPT-5 Pro · Sora 2 · Minis; hold; advance.
VISUAL_JOB: Three capability cards under “API fuel”.
VISIBLE_COPY_PROPOSAL: API fuel
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "GPT-5 Pro | Sora 2 | mini −70%/−80%"
ESSENTIAL_LABEL_REASON: Model names + vendor relative-cost claims are the evidence labels (qualify as OpenAI claim in narration).
TOTAL_VISIBLE_WORD_COUNT: 8
FACTUAL_BOUNDARIES: Do not put dollar prices on canvas unless re-verified same day; mini % are vendor claims.
TRANSITION_REASON: Convert inventory into builder implications.
~~~

~~~yaml
SCENE_ID: S10
SCENE_PURPOSE: Implications + closing takeaway — what to build next; preview vs shipped.
NARRATION: |
  แล้วบิลเดอร์ควรทำอะไรต่อ
  ถ้าต้องการการค้นพบผู้ใช้ใน ChatGPT — เริ่มทดลอง Apps SDK แบบพรีวิว และออกแบบประสบการณ์คุยกับแอป
  ถ้าต้องการเอเจนต์ในผลิตภัณฑ์ตัวเอง — ใช้ ChatKit กับ Evals ที่พร้อมกว่า และระวังส่วนที่ยังเบตา
  ถ้าทีมต้องการเร่งการสร้างซอฟต์แวร์ — วาง Codex ที่เป็นจีเอไว้ในลูป และเลือกโมเดลเอพีไอให้ตรงงาน
  ประโยคปิด ท่องไว้ได้เลย แพลตฟอร์มมาก่อน โมเดลขยายความสามารถ และสถานะพรีวิวหรือจีเอต้องติดป้ายทุกครั้ง
CLAIM_IDS: [C19, C20, C05, C07, C08, C11]
ESTIMATED_SPOKEN_SECONDS: 48
PRESENTER_CUES: Reveal three “build next” paths; then final takeaway line; hold for applause/breath; end (R returns to S01).
VISUAL_JOB: Three decision paths + final takeaway bar.
VISIBLE_COPY_PROPOSAL: Platform first
VISIBLE_WORD_COUNT: 2
ESSENTIAL_DATA_LABELS: "Apps · Agents · Codex"
ESSENTIAL_LABEL_REASON: Maps to the three builder paths.
TOTAL_VISIBLE_WORD_COUNT: 5
FACTUAL_BOUNDARIES: Do not promise revenue/monetization timelines; do not declare any beta item GA.
TRANSITION_REASON: End of story; R → S01.
~~~

## Scene index
| ID | Purpose (EN) | Ordinary copy | Est. sec |
|---|---|---|---|
| S01 | Cover | OpenAI DevDay 2025 | 25 |
| S02 | Hook | Software runs in chat | 28 |
| S03 | Context / pillars | Four pillars | 32 |
| S04 | Apps SDK | Apps SDK · Preview | 40 |
| S05 | Partner demos | Partner demos | 38 |
| S06 | AgentKit | AgentKit | 35 |
| S07 | Status chips | Status matters | 45 |
| S08 | Codex GA | Codex is GA | 40 |
| S09 | API models | API fuel | 42 |
| S10 | Takeaway | Platform first | 48 |
| **Total** | **10 scenes** | | **~373 s (~6.2 min)** |
