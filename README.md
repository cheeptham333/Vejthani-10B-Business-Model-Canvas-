# 🏥 Vejthani 10B BMC Coaching Studio
> **ระบบ Business Model Canvas 9 ช่อง (Alexander Osterwalder) สำหรับโค้ชชิ่งและวางแผนกลยุทธ์เพิ่มรายได้สู่ 10,000 ล้านบาท โรงพยาบาลเวชธานี อินเตอร์เนชันแนล**

---

## 🎯 วัตถุประสงค์ของระบบ
เว็บแอปพลิเคชันนี้สร้างขึ้นเพื่อใช้เป็นเครื่องมือหลักในการจัด **Strategic Workshop & Coaching Session** ให้กับทีมผู้บริหาร, ผู้อำนวยการศูนย์การแพทย์, ศัลยแพทย์ และทีมพัฒนาธุรกิจของโรงพยาบาลเวชธานี เพื่อร่วมกันระดมสมอง วางแผนเพิ่มรายได้ และค้นหาช่องทางขยายฐานลูกค้าผู้ป่วยระดับพรีเมียมและผู้ป่วยต่างชาติอย่างเป็นรูปธรรม

---

## ✨ ฟังก์ชันเด่นสำหรับนำไปจัด Workshop

### 1. 🧙‍♂️ โหมดโค้ชชิ่งทีละขั้นตอน (Step-by-Step Guided Wizard)
* นำทางระดมสมอง 9 ช่องตามลำดับความคิดของ Alexander Osterwalder (1 ➡️ 9)
* **ระบบเติมคำในช่องว่าง (Fill-in-the-Blank Generator):** เลือกรูปแบบประโยค แล้วกรอกข้อมูลสร้างเป็นกลยุทธ์อัตโนมัติ
* **ไอเดียแนะนำสำหรับเวชธานี (Quick Add Chips):** คลิกเดียวเพิ่มข้อความตัวอย่างที่เหมาะสมกับธุรกิจโรงพยาบาลเวชธานีลงใน Canvas ได้ทันที
* **คำถามกระตุ้นความคิด (Provocative Questions):** จุดประกายไอเดียด้านการแพทย์เฉพาะทางและนวัตกรรมหุ่นยนต์

### 2. 🏥 ฐานข้อมูลศูนย์การแพทย์และคลินิกเวชธานี (28+ Centers & Clinics)
* รองรับทุกศูนย์การแพทย์และโรงพยาบาลในเครือ (เช่น King of Bones, Da Vinci Robotic Surgery, Life Cancer Center, Heart Center, Q-Life Longevity, BMHH, Dentalis, VFC ฯลฯ)
* ระบบค้นหาและเลือกศูนย์ เพื่อตั้งเป้าหมายรายได้ของแต่ละศูนย์ได้ทันที

### 3. 📊 ผืนผ้าใบ 9 ช่อง (Dual Layout Canvas)
* **โหมดมาตรฐาน Osterwalder:** ซีกขวา=ตลาด/คนไข้, ตรงกลาง=คุณค่า, ซีกซ้าย=โครงสร้าง/พันธมิตร
* **โหมดเรียงลำดับ 1 - 9:** จัดเรียงบล็อก 3x3 อ่านง่ายตามลำดับความคิด
* รองรับ Sticky Notes หลากสี (เหลือง, ฟ้า, เขียว, ม่วง, ทอง, น้ำทะเล) และแก้ไขได้โดยตรง

### 4. 📑 ระบบส่งออก PDF 2 หน้า (Executive Hybrid Report)
* **หน้าที่ 1:** ผืนผ้าใบ BMC 9 ช่องเต็มแผ่นแนวนอน พร้อมแบนเนอร์เวชธานีและเป้าหมายรายได้ (สำหรับเปิดในที่ประชุม)
* **หน้าที่ 2:** ตารางสรุป 9 มิติยุทธศาสตร์, ตัวชี้วัด KPIs, แผนงานรายไตรมาส (Roadmap Q1-Q4), และช่องลงนามอนุมัติ
* สร้างไฟล์ `.pdf` คมชัดสูงในคลิกเดียวด้วย Client-side jsPDF Engine

### 5. 🖼️ ส่งออกรูปภาพความละเอียดสูง (PNG / JPEG)
* ส่งออกภาพคมชัดระดับ HD, 2K, และ 4K Print-Ready
* ปุ่มคัดลอกรูปภาพ (Copy to Clipboard) เพื่อไปกดวางใน PowerPoint, LINE หรืออีเมลได้ทันที

---

## 🚀 วิธีการติดตั้งและเปิดใช้งาน (Getting Started)

### ความต้องการของระบบ:
* [Node.js](https://nodejs.org/) (v18+) หรือ [Bun](https://bun.sh/)

### ขั้นตอนการรันระบบ:
```bash
# 1. ติดตั้ง Dependencies
bun install
# หรือ npm install / pnpm install

# 2. เริ่มต้นรัน Development Server
bun run dev
# หรือ npm run dev
```
เปิดเบราว์เซอร์ไปที่: **http://localhost:3000**

### การสร้าง Production Build:
```bash
bun run build
# หรือ npm run build
```

---

## 🛠️ โครงสร้างโปรเจกต์ (Project Structure)

```
Vejthani10Billion/
├── src/
│   ├── components/
│   │   ├── Header.jsx                 # แถบเมนูด้านบน, โลโก้, ตัวเลือกศูนย์และโมเดล
│   │   ├── GuidedWizard.jsx           # โหมดโค้ชชิ่งทีละสเต็ป & เติมคำในช่องว่าง
│   │   ├── CanvasGrid.jsx             # ผืนผ้าใบ 9 ช่อง (มาตรฐาน & เรียง 1-9)
│   │   ├── CanvasCard.jsx             # การ์ดแต่ละบล็อก & Sticky Notes
│   │   ├── CanvasActionPlanPage.jsx   # หน้าที่ 2 ของ PDF (Action Plan & Roadmap)
│   │   ├── CenterSelectorModal.jsx    # หน้าต่างเลือก 28+ ศูนย์การแพทย์เวชธานี
│   │   ├── PresetModal.jsx            # หน้าต่างเลือก 5 โมเดลยุทธศาสตร์ต้นแบบ
│   │   ├── ExportModal.jsx            # หน้าต่างส่งออก PDF 2 หน้า & ภาพ PNG/JPEG
│   │   ├── StickyNoteModal.jsx        # หน้าต่างเพิ่ม/แก้ไข Sticky Note
│   │   └── VejthaniLogo.jsx           # ตราสัญลักษณ์ทางการ & SVG Vector Fallback
│   ├── data/
│   │   ├── bmcBlocks.js               # นิยาม 9 ช่อง, คำถามโค้ชชิ่ง, เทมเพลตเติมคำ
│   │   ├── strategyPresets.js         # 5 โมเดลกลยุทธ์สำเร็จรูป
│   │   └── vejthaniCenters.js         # ฐานข้อมูล 28+ ศูนย์และคลินิกเวชธานี
│   ├── utils/
│   │   ├── exportCanvas.js            # เครื่องมือเรนเดอร์ภาพความละเอียดสูง
│   │   └── exportPdf.js               # เครื่องมือสร้าง PDF 2 หน้าด้วย jsPDF
│   ├── App.jsx                        # ตัวจัดการ State หลักและการทำงาน
│   ├── index.css                      # สไตล์ชีตและโทนสี CI เวชธานี
│   └── main.jsx
├── dist/                              # ไฟล์ Production Build
├── package.json
├── tailwind.config.js                 # การตั้งค่าสี CI เวชธานี (Royal Navy, Teal, Gold)
└── vite.config.js
```

---

## 🎨 Corporate Identity (CI)
* **Vejthani Royal Navy:** `#002D62`
* **Vejthani Turquoise / Teal:** `#00A3AD`
* **Medical Gold:** `#C5A880`
* **Standard Quality:** Joint Commission International (JCI Accredited)

---

© Vejthani International Hospital | 10 Billion Business Model Canvas Strategy Studio
