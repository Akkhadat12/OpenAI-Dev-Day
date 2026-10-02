# 01 สรุปความรู้ — OpenAI DevDay 2025
PROJECT_ID: `20261003-b4fb`  
วิจัย ณ: 2026-10-03 (Asia/Bangkok)  
อีเวนต์: 6 ตุลาคม 2025 · Fort Mason, San Francisco  
ภาษาเอกสารเจ้าของ: ไทย · แคนวาสเว็บ: อังกฤษ

## แผนที่ความรู้ (สั้น)
DevDay 2025 ไม่ใช่แค่เปิดโมเดลใหม่ แต่ประกาศทิศทางว่า **ChatGPT เป็นพื้นผิวที่ซอฟต์แวร์วิ่งได้** และ **AgentKit เป็นชุดท่อส่งเอเจนต์** ขณะที่ **Codex เข้าสู่ GA** และมี **เชื้อเพลิง API ใหม่** (GPT-5 Pro, Sora 2, โมเดลมินิ)

## คำจำกัดความสำคัญ
| คำ | ความหมายที่ใช้ในเรื่องนี้ |
|---|---|
| Apps in ChatGPT | แอปอินเทอร์แอคทีฟที่ทำงานในบทสนทนา ChatGPT ได้ (อินไลน์ / เต็มจอ) |
| Apps SDK | ชุดเครื่องมือ (พรีวิว) ให้บิลด์แอปดังกล่าว ต่อยอดจาก MCP |
| MCP | Model Context Protocol — มาตรฐานเปิดเชื่อมเครื่องมือ/ข้อมูล |
| AgentKit | ชุดเครื่องมือสร้าง·ดีพลอย·ปรับจูนเอเจนต์ (Builder, ChatKit, Guardrails, Evals, Connectors) |
| Codex | เอเจนต์ช่วยเขียน/ทำงานซอฟต์แวร์ของ OpenAI — ประกาศ GA ในงาน |
| Announced vs shipped | สิ่งที่พูดบนเวที vs สิ่งที่สถานะเป็น Preview / Beta / GA / API พร้อมใช้ |

## ข้อเท็จจริงหลัก (มีหลักฐาน)
1. **วันที่งาน:** 2025-10-06 ที่ซานฟรานซิสโก
2. **Apps SDK:** เปิดพรีวิวในวันงาน สร้างบน MCP; ไดเรกทอรี/การส่งแอปสาธารณะมาทีหลัง
3. **เดโมพันธมิตร:** เช่น Coursera, Canva, Zillow ใน ChatGPT
4. **AgentKit:** เปิดตัวชุดเครื่องมือเอเจนต์ — ChatKit/Evals ถูกระบุ GA; Agent Builder เป็นเบตา; Connector Registry โรลเอาต์เบตาจำกัด
5. **Codex:** ออกจาก research preview → **GA** พร้อม Slack, SDK, เครื่องมือแอดมิน
6. **API models:** GPT-5 Pro, Sora 2 / Sora 2 Pro, `gpt-image-1-mini`, `gpt-realtime-mini`

## ความไม่แน่นอน / ข้อจำกัด
- บางหน้า openai.com ดึงตรงจากโฮสต์วิจัยนี้ไม่ได้ (403/timeout) — ใช้ประกาศใน Community + เอกสาร API + บล็อกลายเซ็นไขว้
- ตัวเลข “การใช้งานโต 10×” เป็นรายงานของ OpenAI ไม่ใช่ benchmark อิสระ
- เปอร์เซ็นต์ราคาถูกกว่าของโมเดลมินิเป็นเคลมของผู้ขาย
- สถานะหลังงาน (เช่น Apps สำหรับ Business ใน พ.ย. 2025) อาจเปลี่ยนจากวันเปิดตัว — เอกสารนี้โฟกัสวัน DevDay และระบุเมื่อมีการอัปเดตภายหลัง

## Thesis ที่เลือก
**แพลตฟอร์ม (Apps + AgentKit) มาก่อน · โมเดล/Codex ขยายความสามารถ · ติดป้าย Preview/Beta/GA ทุกครั้ง**

## แหล่งอ้างอิงหลัก (คลิกตรวจ)
- https://openai.com/index/introducing-apps-in-chatgpt/
- https://openai.com/index/introducing-agentkit/
- https://openai.com/index/codex-now-generally-available/
- https://openai.com/devday/
- https://community.openai.com/t/devday-2025-apps-sdk-sora-2-gpt-5-pro-agentkit-new-image-generation-and-speech-to-speech-mini-models-and-more/1361279
- https://developers.openai.com/api/docs/models/gpt-5-pro
- https://developers.openai.com/api/docs/models/sora-2-pro

รายละเอียด claim/source เต็มอยู่ใน `references/claim-register.md` และ `references/source-register.md`
