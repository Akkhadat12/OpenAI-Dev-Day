# 02 วิจัยและวิเคราะห์ — OpenAI DevDay 2025
PROJECT_ID: `20261003-b4fb`  
RESEARCH_AS_OF: 2026-10-03T02:05:00+07:00 (Asia/Bangkok)

## 1) คำถามวิจัย
อะไรที่ OpenAI **ประกาศหรือเดโม** ใน DevDay 2025 ซึ่งเปลี่ยนวิธีที่บิลเดอร์ส่งผลิตภัณฑ์ — โดยแยก **announced vs shipped** และยึดแหล่งปฐมภูมิ

## 2) ขอบเขตที่เจ้าของอนุมัติแล้ว (proxy)
- Thesis focus: แพลตฟอร์ม + ความหมายเชิงปฏิบัติ “สร้างอะไรต่อ”
- ผู้ฟัง: บิลเดอร์ / คนผลิตภัณฑ์ที่พลาดงาน — เรื่องสั้น ไม่ถอดเทป
- ส่งมอบ: LOCAL_ZIP / Windows · ไม่ public deploy
- ภาษา: พากย์ไทย · PDF เจ้าของภาษาไทย · แคนวาสอังกฤษ · S01 ปกของจริง

## 3) ทางเลือกมุมเล่าเรื่อง และการตัดสินใจ
| ทางเลือก | ข้อดี | ข้อเสีย | ผล |
|---|---|---|---|
| A. Apps + AgentKit นำ (โมเดล/Codex เป็นขยาย) | สอดคล้องโครงคีย์โนตและบล็อกทางการ; อธิบาย “ที่ซอฟต์แวร์อยู่” | รายละเอียดโมเดลสั้นลง | **เลือก** |
| B. Models-first | API shipped ชัด | พลาดแกนแพลตฟอร์ม | ไม่เลือก |
| C. Codex-only | GA ชัด เดโมเข้ม | แคบสำหรับคนผลิตภัณฑ์ | ไม่เลือก |

**เหตุผลที่เลือก A:** SRC01/SRC02/SRC05 วาง Apps และ AgentKit เป็นการเปิดทางส่งของใหม่ ส่วน Codex/โมเดลเสริมความสามารถบนทางนั้น (ดู `references/story-outline.md`)

## 4) หลักฐานแกน (สรุป claim)
ดูตารางเต็มใน `references/claim-register.md`

- **C02–C05 Apps:** SDK พรีวิวบน MCP; เดโมพันธมิตร; ไดเรกทอรีมาทีหลัง  
  แหล่ง: OpenAI Apps blog, Community announcement, Apps SDK docs
- **C06–C10 AgentKit:** องค์ประกอบ + สถานะ GA/Beta/Limited  
  แหล่ง: Introducing AgentKit, Community
- **C11–C13 Codex GA + Slack/SDK/Admin + 10× (บริษัท)**  
  แหล่ง: Codex GA blog, Community, live blogs
- **C15–C17 GPT-5 Pro / Sora 2 / minis**  
  แหล่ง: Community, API model pages, changelog, TechCrunch (รอง)

## 5) Announced vs shipped (วันที่งาน / ตามเอกสารเปิดตัว)
| รายการ | สถานะเปิดตัว | หมายเหตุ |
|---|---|---|
| Apps SDK | Preview | ทดสอบ/บิลด์ได้; ส่งเข้า directory ทีหลัง |
| Partner apps (เช่น Canva/Zillow) | Available in demos / ChatGPT (ตามรายงานวันงาน) | ไม่ใช่รายการพันธมิตรครบ |
| Agent Builder | Beta | |
| ChatKit | GA | ตาม AgentKit post |
| Evals (ชุดใหม่) | GA | |
| Connector Registry | Limited beta rollout | ต้องมีเงื่อนไขแอดมินบางส่วน |
| Codex | GA | |
| GPT-5 Pro API | Shipped (Responses) | อาจช้า — background mode |
| Sora 2 / Sora 2 Pro API | Shipped (Videos) | |
| gpt-image-1-mini / gpt-realtime-mini | Announced + API model pages | % ราคาเป็นเคลมผู้ขาย |

## 6) ข้อโต้แย้งที่แข็งแรง
1. ถ้า Apps ค้นหาไม่ได้จริง “ChatGPT = แพลตฟอร์ม” จะแรงเกินไป → ให้ AgentKit/Codex นำแทน  
2. องค์กร regulated อาจไม่รับ visual builder บนโฮสต์ OpenAI → เส้น Agents SDK self-host สำคัญกว่า  
3. ต้นทุน/คุณภาพ Codex อาจทำให้ “เขียนโค้ดด้วยเอเจนต์” ต้องมีข้อแม้

สิ่งที่จะเปลี่ยนข้อสรุป: หลักฐานว่า Apps มี traction ต่ำมาก หรือ AgentKit ไม่ถูกใช้จริงหลังเปิดตัว

## 7) ข้อจำกัดวิธีวิจัย
- `openai.com` คืน 403/timeout จากโฮสต์นี้ — อ้าง URL ทางการแต่ยืนยันเนื้อหาด้วย Community HTML ที่ดึงได้ + docs.developers + live blog คุณภาพสูง  
- ไม่ใส่ราคา $ บนแคนวาสจนกว่าจะรีเช็ก pricing page วันนำเสนอ  
- ไม่สร้างโลโก้ OpenAI ด้วย AI — ใช้ wordmark จาก Commons ที่อ้างอิง brand page

## 8) นัยต่อ “สร้างอะไรต่อ”
1. **Surface ใน ChatGPT:** ทดลอง Apps SDK (รับรู้ว่า Preview)  
2. **Agent ในผลิตภัณฑ์ตนเอง:** ChatKit + Evals ก่อน; Builder/Connectors ระวังเบตา  
3. **เร่งวิศวกรรม:** Codex GA ในลูปทีม + เลือก GPT-5 Pro / Sora / mini ตามงาน

## 9) รายการแหล่งอ้างอิงแบบวันที่
ดู `references/source-register.md` (SRC01–SRC15)
