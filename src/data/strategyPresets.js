export const STRATEGY_PRESETS = [
  {
    id: 'international_medical_tourism',
    title: '1. ตลาดต่างชาติระดับพรีเมียม (International Medical Tourism)',
    subtitle: 'เจาะกลุ่มผู้ป่วย High-Spending จากตะวันออกกลาง (GCC), CLMV, Expat และยุโรป',
    targetRevenue: '4,500 ล้านบาท / ปี',
    badge: '🌍 Global Patients',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    centerId: 'orthopedics',
    department: 'King of Bones & International Medical Services',
    description: 'ยุทธศาสตร์ขยายฐานคนไข้ต่างชาติด้วยความเชี่ยวชาญระดับ King of Bones, บริการภาษาอาหรับ/พหุวัฒนธรรมแบบครบวงจร และความร่วมมือกับสถานทูต/รัฐบาลต่างประเทศ',
    data: {
      customerSegments: [
        { id: '1', text: 'ผู้ป่วยจากกลุ่มประเทศอ่าวอาหรับ (UAE, Oman, Qatar, Kuwait) ที่ต้องการรักษาโรคกระดูกและข้อ สันหลัง และโรคซับซ้อน', color: 'blue' },
        { id: '2', text: 'ผู้ป่วยระดับบนจากกลุ่มประเทศ CLMV (กัมพูชา, เมียนมา, ลาว) ที่ต้องการมารักษาในไทยแบบเร่งด่วน', color: 'blue' },
        { id: '3', text: 'กลุ่ม Expat ผู้บริหารชาวต่างชาติที่พำนักในไทยและเอเชียตะวันออกเฉียงใต้', color: 'blue' },
        { id: '4', text: 'ผู้ป่วยต่างชาติที่ชำระค่ารักษาผ่านรัฐบาล/สถานทูต (Embassy Sponsored) และประกันสุขภาพข้ามชาติ', color: 'green' }
      ],
      valuePropositions: [
        { id: '1', text: 'ความเป็นเลิศระดับสากลด้านกระดูกและข้อ (King of Bones) พร้อมการรับรอง JCI CCPC มากที่สุด', color: 'yellow' },
        { id: '2', text: 'เทคโนโลยีหุ่นยนต์ช่วยผ่าตัด (Robotic-Assisted Surgery) แผลเล็ก ฟื้นตัวไว กลับบ้านได้เร็ว', color: 'yellow' },
        { id: '3', text: 'บริการ One-Stop Arabic & International Medical Concierge ดูแลตั้งแต่สนามบิน วีซ่า ล่าม 20+ ภาษา และอาหารฮาลาล', color: 'gold' },
        { id: '4', text: 'การประสานงานการแพทย์แบบไร้รอยต่อ มี Personal Medical Coordinator ประจำตัวคนไข้ตลอดการรักษา', color: 'yellow' }
      ],
      channels: [
        { id: '1', text: 'สำนักงานตัวแทนเวชธานีประจำต่างประเทศ (Vejthani Referral Offices - VRO) ในดูไบ, มัสกัต, พนมเปญ, ย่างกุ้ง', color: 'green' },
        { id: '2', text: 'เครือข่ายความร่วมมือกับสำนักงานที่ปรึกษาฝ่ายการแพทย์ของสถานทูต (Embassy Medical Attaché)', color: 'green' },
        { id: '3', text: 'Digital Medical Travel Portal ภาษาอาหรับและภาษาท้องถิ่น พร้อมระบบประเมินค่ารักษาออนไลน์ (Tele-Triage)', color: 'blue' },
        { id: '4', text: 'Top International Medical Tourism Facilitators และเอเจนซี่ชั้นนำทั่วโลก', color: 'green' }
      ],
      customerRelationships: [
        { id: '1', text: 'การดูแลแบบ 1:1 Personal Medical Coordinator และล่ามภาษาอาหรับ/พม่า/เขมร ประกบตลอด 24 ชม.', color: 'purple' },
        { id: '2', text: 'Arabic VIP Lounge และสิ่งอำนวยความสะดวกที่เข้าใจวัฒนธรรมอิสลามอย่างลึกซึ้ง', color: 'purple' },
        { id: '3', text: 'ระบบ Teleconsultation ติดตามผลข้ามประเทศหลังคนไข้เดินทางกลับบ้าน (Post-Discharge Care)', color: 'blue' },
        { id: '4', text: 'Vejthani Global Family Care: สิทธิประโยชน์สำหรับครอบครัวและเครือญาติ', color: 'purple' }
      ],
      revenueStreams: [
        { id: '1', text: 'รายได้จากแพ็กเกจผ่าตัดกระดูกและข้อด้วยหุ่นยนต์ (เฉลี่ย 350,000 - 850,000 บาท/เคส)', color: 'gold' },
        { id: '2', text: 'รายได้จากการเบิกจ่ายตรงกับสถานทูต/รัฐบาลต่างประเทศ (Embassy / Government Sponsored)', color: 'green' },
        { id: '3', text: 'รายได้จากการผ่าตัดกระดูกสันหลังและระบบประสาทขั้นสูง (Endoscopic Spine Surgery)', color: 'gold' },
        { id: '4', text: 'รายได้จากห้องพักระดับ VIP Suite และบริการ Concierge เสริมสำหรับครอบครัวคนไข้ต่างชาติ', color: 'green' }
      ],
      keyResources: [
        { id: '1', text: 'ทีมศัลยแพทย์กระดูกและข้อระดับแนวหน้าของเอเชีย (King of Bones Specialist Faculty)', color: 'blue' },
        { id: '2', text: 'หุ่นยนต์ช่วยผ่าตัดข้อเข่า-ข้อสะโพก และระบบภาพ 3 มิติ O-Arm Stealth Navigation', color: 'blue' },
        { id: '3', text: 'มาตรฐาน JCI (Joint Commission International) และการรับรองเฉพาะโรค CCPC หลายสาขา', color: 'green' },
        { id: '4', text: 'ทีมงาน International Medical Services (IMS) พร้อมล่ามชำนาญการทางการแพทย์กว่า 20 ภาษา', color: 'purple' }
      ],
      keyActivities: [
        { id: '1', text: 'การผ่าตัดขั้นสูงด้วยเทคโนโลยีหุ่นยนต์และโปรแกรมฟื้นตัวเร็ว (Fast-Track Surgical Recovery)', color: 'yellow' },
        { id: '2', text: 'การจัด International Medical Roadshows, CME Academic Exchange และออกตรวจคัดกรองในต่างประเทศ', color: 'blue' },
        { id: '3', text: 'การบริหารจัดการความสัมพันธ์กับสถานทูตและหน่วยงานส่งตัวภาครัฐอย่างใกล้ชิด', color: 'green' },
        { id: '4', text: 'การควบคุมคุณภาพและความปลอดภัยตามมาตรฐาน JCI อย่างต่อเนื่องในทุกขั้นตอน', color: 'yellow' }
      ],
      keyPartnerships: [
        { id: '1', text: 'สถานทูตและสำนักงานการแพทย์ของรัฐบาลกลุ่มประเทศอ่าวอาหรับ (GCC Medical Attachés)', color: 'green' },
        { id: '2', text: 'บริษัทประกันสุขภาพระดับนานาชาติ (Allianz Worldwide, Cigna, Bupa Global, AXA Assistance)', color: 'green' },
        { id: '3', text: 'เครือข่าย Medical Tourism Agencies ชั้นนำใน 15 ประเทศเป้าหมาย', color: 'blue' },
        { id: '4', text: 'สายการบินชั้นนำ (Emirates, Qatar Airways, Oman Air) และเครือโรงแรมพันธมิตรสำหรับญาติคนไข้', color: 'purple' }
      ],
      costStructure: [
        { id: '1', text: 'ค่าตอบแทนทีมแพทย์เฉพาะทางและบุคลากรทางการแพทย์สหสาขาที่มีความเชี่ยวชาญสูง', color: 'yellow' },
        { id: '2', text: 'ค่านายหน้าและค่าบริหารสำนักงานตัวแทนต่างประเทศ (Overseas Referral Fees & VRO Operation)', color: 'blue' },
        { id: '3', text: 'ต้นทุนอุปกรณ์การแพทย์ ข้อเข่า-สะโพกเทียมนวัตกรรม และค่าเสื่อมหุ่นยนต์ผ่าตัด', color: 'yellow' },
        { id: '4', text: 'งบประมาณการตลาดต่างประเทศ, การจัดงานสัมมนา และระบบ Digital Multilingual Marketing', color: 'blue' }
      ]
    }
  },
  {
    id: 'davinci_robotic_surgery',
    title: '2. ศูนย์หุ่นยนต์ช่วยผ่าตัด Da Vinci Xi (Da Vinci Robotic Surgery Center)',
    subtitle: 'นวัตกรรมผ่าตัดแผลเล็กความแม่นยำสูง มะเร็งต่อมลูกหมาก, ลำไส้ใหญ่, ช่องท้อง, นรีเวช และมะเร็งปอด',
    targetRevenue: '1,200 ล้านบาท / ปี',
    badge: '🤖 Da Vinci Xi Robotics',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    centerId: 'davinci_robotics',
    department: 'ศูนย์หุ่นยนต์ช่วยผ่าตัด Da Vinci Xi & ศูนย์ศัลยกรรมขั้นสูง',
    description: 'ยุทธศาสตร์ยกระดับสู่ศูนย์ความเป็นเลิศด้านการผ่าตัดด้วยหุ่นยนต์ Da Vinci Xi 4 แขนกล พร้อมระบบภาพ 3 มิติ คมชัดสูง ปลอดภัย ฟื้นตัวไว แผลเล็ก เจ็บน้อย',
    data: {
      customerSegments: [
        { id: '1', text: 'ผู้ป่วยโรคมะเร็งต่อมลูกหมาก ก้อนเนื้อไต และเนื้องอกต่อมหมวกไตที่ต้องการเก็บรักษาระบบประสาทและการกลั้นปัสสาวะ', color: 'blue' },
        { id: '2', text: 'ผู้ป่วยโรคมะเร็งลำไส้ใหญ่และทวารหนัก ที่ต้องการการผ่าตัดเลาะต่อมน้ำเหลืองอย่างละเอียดและลดการเปิดทวารเทียม', color: 'blue' },
        { id: '3', text: 'ผู้ป่วยเนื้องอกมดลูก มะเร็งเยื่อบุโพรงมดลูก และภาวะพังผืดในอุ้งเชิงกรานซับซ้อน', color: 'blue' },
        { id: '4', text: 'ผู้ป่วยมะเร็งปอดและเนื้องอกในช่องอก ที่ต้องการการผ่าตัดส่องกล้องแบบไร้รอยแผลเปิดกว้าง', color: 'green' }
      ],
      valuePropositions: [
        { id: '1', text: 'หุ่นยนต์ช่วยผ่าตัด Da Vinci Xi เทคโนโลยี 4 แขนกล หมุนอิสระ 540 องศา มากกว่าข้อมือมนุษย์ เข้าถึงจุดลึกได้อย่างแม่นยำ', color: 'yellow' },
        { id: '2', text: 'ระบบภาพ 3D High-Definition กำลังขยาย 10 เท่า มองเห็นเส้นประสาทและหลอดเลือดฝอยชัดเจน ลดการเสียเลือด', color: 'yellow' },
        { id: '3', text: 'แผลผ่าตัดขนาดเล็กเพียง 8 มม. เจ็บน้อย ฟื้นตัวเดินได้เร็ว ลดระยะเวลาพักฟื้นใน รพ. เหลือเพียง 1-2 วัน', color: 'gold' },
        { id: '4', text: 'ความปลอดภัยสูงสุด ได้รับการรับรองจาก U.S. FDA โดยทีมศัลยแพทย์ที่ผ่านการรับรองวุฒิบัตร Da Vinci Certified Console Surgeon', color: 'yellow' }
      ],
      channels: [
        { id: '1', text: 'ศูนย์ประสานงานผ่าตัด Da Vinci Robotic Concierge รับประเมินความพร้อมและเคสก่อนเข้ารับการผ่าตัด', color: 'green' },
        { id: '2', text: 'Digital Healthcare Campaigns & Video Testimonials นำเสนอเทคโนโลยี Da Vinci ผ่านเคสความสำเร็จจริง', color: 'blue' },
        { id: '3', text: 'Doctor-to-Doctor Referral เครือข่ายส่งต่อผู้ป่วยจากอายุรแพทย์และคลินิกภายนอก', color: 'green' },
        { id: '4', text: 'International Patient Agency Network นำเสนอแพ็กเกจผ่าตัดหุ่นยนต์แก่ผู้ป่วยตะวันออกกลางและ CLMV', color: 'blue' }
      ],
      customerRelationships: [
        { id: '1', text: 'Da Vinci Nurse Navigator พยาบาลเฉพาะทางประกบดูแลตั้งแต่ก่อนผ่าตัด ระหว่างพักฟื้น จนถึงติดตามผลที่บ้าน', color: 'purple' },
        { id: '2', text: 'Pre-Surgical Simulation & Consultation อธิบายขั้นตอนผ่าตัดด้วยโมเดล 3 มิติ เพื่อความมั่นใจของผู้ป่วยและญาติ', color: 'purple' },
        { id: '3', text: 'Post-Surgery Rapid Recovery Program ติดตามอาการผ่าน Telemedicine และกายภาพบำบัดฟื้นตัวเร็ว', color: 'blue' },
        { id: '4', text: 'VIP Single Deluxe Suite & Arabic Concierge สำหรับคนไข้และครอบครัว', color: 'purple' }
      ],
      revenueStreams: [
        { id: '1', text: 'แพ็กเกจผ่าตัดมะเร็งต่อมลูกหมากด้วยหุ่นยนต์ Da Vinci (Robotic Radical Prostatectomy: 450,000 - 680,000 บาท)', color: 'gold' },
        { id: '2', text: 'แพ็กเกจผ่าตัดมะเร็งลำไส้ใหญ่และทวารหนักด้วยหุ่นยนต์ (Robotic Colorectal Resection: 480,000 - 750,000 บาท)', color: 'gold' },
        { id: '3', text: 'แพ็กเกจผ่าตัดเนื้องอกมดลูกและมะเร็งทางนรีเวชด้วยหุ่นยนต์ (Robotic Gynecologic Surgery: 350,000 - 550,000 บาท)', color: 'green' },
        { id: '4', text: 'แพ็กเกจผ่าตัดมะเร็งปอดและช่องอกด้วยหุ่นยนต์ Da Vinci (Robotic Thoracic Lobectomy: 420,000 - 650,000 บาท)', color: 'green' }
      ],
      keyResources: [
        { id: '1', text: 'ระบบหุ่นยนต์ช่วยผ่าตัด Da Vinci Xi รุ่นล่าสุด พร้อมชุดเครื่องมือผ่าตัด EndoWrist และระบบ Firefly Fluorescence Imaging', color: 'blue' },
        { id: '2', text: 'ทีมศัลยแพทย์ผู้เชี่ยวชาญเฉพาะทางสหสาขา (Urologist, Colorectal, Gynecologist, Thoracic Surgeons) ที่ผ่านการฝึกอบรมระดับสากล', color: 'blue' },
        { id: '3', text: 'ห้องผ่าตัดอัจฉริยะ Smart Robotic O.R. สภาพแวดล้อมปลอดเชื้อแรงดันบวกมาตรฐานสูงสุด', color: 'green' },
        { id: '4', text: 'ทีมวิสัญญีแพทย์และพยาบาลห้องผ่าตัดเฉพาะทางด้าน Robotic Surgery', color: 'purple' }
      ],
      keyActivities: [
        { id: '1', text: 'การทำหัตถการผ่าตัดด้วยหุ่นยนต์ Da Vinci ในเคสซับซ้อนตามมาตรฐานความปลอดภัยระดับโลก', color: 'yellow' },
        { id: '2', text: 'การฝึกอบรมและพัฒนาทักษะทีมผ่าตัดด้วยระบบจำลอง Da Vinci Simulator อย่างต่อเนื่อง', color: 'blue' },
        { id: '3', text: 'การทำสัมมนาวิชาการและ Clinical Research ร่วมกับสมาคมแพทย์ศัลยกรรมหุ่นยนต์ระดับนานาชาติ', color: 'green' },
        { id: '4', text: 'การสื่อสารและให้ความรู้แก่ประชาชนเรื่องประโยชน์ของการผ่าตัดแผลเล็กด้วยหุ่นยนต์ (Educational Marketing)', color: 'yellow' }
      ],
      keyPartnerships: [
        { id: '1', text: 'Intuitive Surgical (ผู้ผลิตระบบหุ่นยนต์ Da Vinci) ด้านเทคโนโลยี เครื่องมือ และการฝึกอบรมขั้นสูง', color: 'green' },
        { id: '2', text: 'บริษัทประกันสุขภาพชั้นนำ เพื่อบรรจุการผ่าตัดด้วยหุ่นยนต์เข้าสู่ความคุ้มครองกรมธรรม์พรีเมียม', color: 'green' },
        { id: '3', text: 'สถานทูตและหน่วยงานสาธารณสุขต่างประเทศสำหรับการส่งตัวเคสผ่าตัดเฉพาะทางซับซ้อน', color: 'blue' },
        { id: '4', text: 'สถาบันการแพทย์และศูนย์มะเร็งพันธมิตรเพื่อการปรึกษาเคสร่วม (Multidisciplinary Tumor Board)', color: 'purple' }
      ],
      costStructure: [
        { id: '1', text: 'ค่าตัดจำหน่ายและสัญญาบริการบำรุงรักษาระบบหุ่นยนต์ Da Vinci Xi (Annual Service & Maintenance Contract)', color: 'yellow' },
        { id: '2', text: 'ต้นทุนอุปกรณ์และหัวเครื่องมือผ่าตัด EndoWrist Instruments ชนิดใช้ตามจำนวนครั้ง', color: 'yellow' },
        { id: '3', text: 'ค่าตอบแทนศัลยแพทย์ผู้เชี่ยวชาญ วิสัญญีแพทย์ และทีมผู้ช่วยผ่าตัดเฉพาะทาง', color: 'yellow' },
        { id: '4', text: 'งบการตลาด ประชาสัมพันธ์ และการจัดอบรมสัมมนาวิชาการทางการแพทย์', color: 'blue' }
      ]
    }
  },
  {
    id: 'super_tertiary_care',
    title: '3. ศูนย์การแพทย์เฉพาะทางขั้นสูง (Super Tertiary Care & King of Bones)',
    subtitle: 'ศูนย์ความเป็นเลิศด้านกระดูกสันหลัง, ข้อเทียม, หัวใจ, สมอง และมะเร็งวิทยา',
    targetRevenue: '3,800 ล้านบาท / ปี',
    badge: '🦴 King of Bones & Spine',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    centerId: 'spine',
    department: 'ศูนย์กระดูกสันหลัง & ศูนย์ข้อสะโพก-ข้อเข่า',
    description: 'ยุทธศาสตร์มุ่งเน้นความเป็นเลิศทางคลินิกสำหรับโรคยาก ซับซ้อน และหัตถการผ่าตัดขั้นสูงด้วยหุ่นยนต์และเทคโนโลยีส่องกล้องแม่นยำสูง',
    data: {
      customerSegments: [
        { id: '1', text: 'ผู้ป่วยโรคกระดูกสันหลังทับเส้นประสาท, กระดูกสันหลังคด และเคสผ่าตัดกระดูกสันหลังซับซ้อน', color: 'blue' },
        { id: '2', text: 'ผู้ป่วยข้อเข่า-ข้อสะโพกเสื่อมรุนแรง หรือเคสผ่าตัดแก้ข้อเทียมที่เสียหาย (Revision Surgery)', color: 'blue' },
        { id: '3', text: 'ผู้ป่วยโรคหลอดเลือดหัวใจวิกฤต และโรคหลอดเลือดสมองที่ต้องการการรักษาฉุกเฉินระดับสูง', color: 'blue' },
        { id: '4', text: 'ผู้ป่วยส่งต่อจากโรงพยาบาลและคลินิกทั่วประเทศที่เกินขีดความสามารถในการผ่าตัด', color: 'green' }
      ],
      valuePropositions: [
        { id: '1', text: 'การผ่าตัดกระดูกสันหลังด้วยกล้อง Endoscope แผลผ่าตัดเล็กเพียง 8 มิลลิเมตร ไม่ต้องตัดกล้ามเนื้อ', color: 'yellow' },
        { id: '2', text: 'หุ่นยนต์ช่วยผ่าตัดเปลี่ยนข้อเทียมที่วางตำแหน่งแม่นยำระดับมิลลิเมตร ยืดอายุการใช้งานข้อเทียม 20+ ปี', color: 'yellow' },
        { id: '3', text: 'ศูนย์แพทย์เฉพาะทางครบวงจร (Multi-Disciplinary Team) ผสานทีมศัลยแพทย์ วิสัญญีแพทย์ และเวชศาสตร์ฟื้นฟู', color: 'yellow' },
        { id: '4', text: 'ผลลัพธ์การรักษาที่ปลอดภัย อัตราการติดเชื้อต่ำ และระยะเวลาพักฟื้นในโรงพยาบาลสั้นลง 50%', color: 'gold' }
      ],
      channels: [
        { id: '1', text: 'เครือข่ายส่งต่อแพทย์สู่แพทย์ (Doctor-to-Doctor Referral Network) จากคลินิกและโรงพยาบาลทั่วประเทศ', color: 'green' },
        { id: '2', text: 'ศูนย์ความเป็นเลิศเฉพาะทาง (Specialty Excellence Centers) สื่อสารผ่านเคสจริงและวารสารการแพทย์', color: 'blue' },
        { id: '3', text: 'Medical Specialist Consultation Portal นัดหมายปรึกษาอาจารย์แพทย์ผู้เชี่ยวชาญโดยตรง', color: 'blue' },
        { id: '4', text: 'ความร่วมมือกับสมาคมแพทย์และงานประชุมวิชาการศัลยกรรมระดับนานาชาติ', color: 'green' }
      ],
      customerRelationships: [
        { id: '1', text: 'Clinical Care Nurse Navigator พยาบาลเฉพาะทางคอยให้คำแนะนำตั้งแต่ก่อนผ่าตัดจนฟื้นฟูสมบูรณ์', color: 'purple' },
        { id: '2', text: 'โปรแกรมฟื้นฟูสมรรถภาพเข้มข้นแบบเฉพาะบุคคล (Personalized Physical Therapy & Rehab)', color: 'purple' },
        { id: '3', text: 'ระบบแจ้งเตือนและติดตามอาการอัตโนมัติ พร้อมสายด่วนปรึกษาทีมแพทย์ตลอด 24 ชั่วโมง', color: 'blue' },
        { id: '4', text: 'Second Opinion Service ให้บริการวินิจฉัยซ้ำเพื่อความมั่นใจก่อนตัดสินใจผ่าตัด', color: 'purple' }
      ],
      revenueStreams: [
        { id: '1', text: 'รายได้จากแพ็กเกจผ่าตัดส่องกล้องกระดูกสันหลัง (Endoscopic Spine Surgery: 280,000 - 650,000 บาท)', color: 'gold' },
        { id: '2', text: 'รายได้จากการผ่าตัดเปลี่ยนข้อเข่า-ข้อสะโพกเทียมด้วยหุ่นยนต์ (Robotic Joint: 320,000 - 550,000 บาท)', color: 'gold' },
        { id: '3', text: 'รายได้จากหัตถการสวนหัวใจและการรักษาโรคหลอดเลือดสมองขั้นสูง (Cath Lab / Stroke Intervention)', color: 'green' },
        { id: '4', text: 'รายได้จากศูนย์กายภาพบำบัดและหุ่นยนต์ฝึกเดิน (Robotic Gait Training Rehabilitation)', color: 'green' }
      ],
      keyResources: [
        { id: '1', text: 'ทีมศัลยแพทย์กระดูกสันหลังและข้อระดับอาจารย์แพทย์ที่เชี่ยวชาญเทคนิคส่องกล้องและหุ่นยนต์', color: 'blue' },
        { id: '2', text: 'ห้องผ่าตัดอัจฉริยะ Hybrid O.R. พร้อมเครื่อง O-Arm 3D Navigation และหุ่นยนต์ผ่าตัด', color: 'blue' },
        { id: '3', text: 'ห้องปฏิบัติการและเครื่องตรวจวินิจฉัยความแม่นยำสูง (3T MRI, 128-Slice Dual Source CT)', color: 'blue' },
        { id: '4', text: 'ใบรับรองมาตรฐานทางคลินิกระดับสากล JCI Clinical Care Program Certifications (CCPC)', color: 'green' }
      ],
      keyActivities: [
        { id: '1', text: 'การทำหัตถการผ่าตัดขั้นสูงที่ปลอดภัยและมีประสิทธิภาพสูงสุด (Complex Surgical Procedures)', color: 'yellow' },
        { id: '2', text: 'การจัดอบรมและพัฒนาทักษะการใช้หุ่นยนต์ช่วยผ่าตัดและการส่องกล้องระดับสูง (Surgical Fellowship)', color: 'blue' },
        { id: '3', text: 'การเก็บรวบรวมและวิเคราะห์ผลลัพธ์ทางคลินิก (Clinical Outcome Benchmarking) เทียบระดับโลก', color: 'yellow' },
        { id: '4', text: 'การพัฒนาแพ็กเกจการรักษาแบบเหมาจ่ายที่โปร่งใสและคุ้มค่า (Transparent Value-Based Bundled Pricing)', color: 'green' }
      ],
      keyPartnerships: [
        { id: '1', text: 'บริษัทเทคโนโลยีและอุปกรณ์การแพทย์ชั้นนำระดับโลก (Stryker, Medtronic, Zimmer Biomet, Johnson & Johnson)', color: 'green' },
        { id: '2', text: 'สถาบันการแพทย์และมหาวิทยาลัยชั้นนำเพื่อความร่วมมือทางวิชาการและงานวิจัยคลินิก', color: 'green' },
        { id: '3', text: 'บริษัทประกันสุขภาพในประเทศและต่างประเทศสำหรับแพ็กเกจผ่าตัดสิทธิพิเศษ (Preferred Surgical Network)', color: 'blue' },
        { id: '4', text: 'เครือข่ายโรงพยาบาลพันธมิตรเพื่อการส่งต่อเคสผ่าตัดซับซ้อน (Referral Partner Hospitals)', color: 'blue' }
      ],
      costStructure: [
        { id: '1', text: 'ค่าตอบแทนแพทย์ผู้เชี่ยวชาญเฉพาะทางและทีมผ่าตัดเฉพาะทาง (Surgical Specialists & Perfusionists)', color: 'yellow' },
        { id: '2', text: 'ค่าตัดจำหน่ายและสัญญาบำรุงรักษาเครื่องมือหุ่นยนต์ผ่าตัดและ O-Arm Navigation (Service Contracts)', color: 'yellow' },
        { id: '3', text: 'ต้นทุนข้อเทียมและอุปกรณ์ฝังในร่างกายเกรดพรีเมียม (High-Grade Implants & Prosthetics)', color: 'yellow' },
        { id: '4', text: 'ต้นทุนการพัฒนาบุคลากรและการรักษามาตรฐานการรับรอง JCI CCPC', color: 'blue' }
      ]
    }
  },
  {
    id: 'longevity_wellness',
    title: '4. เวชศาสตร์ชะลอวัยและสุขภาพเชิงป้องกัน (Vejthani Q-Life Longevity)',
    subtitle: 'เจาะกลุ่ม High Net Worth, ผู้บริหาร และคนรักสุขภาพด้วย Personalized Medicine',
    targetRevenue: '1,700 ล้านบาท / ปี',
    badge: '🌿 Q-Life Longevity',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    centerId: 'q_life_antiaging',
    department: 'ศูนย์เวชธานีคิวไลฟ์ & Longevity Center',
    description: 'ยุทธศาสตร์สร้างรายได้ประจำต่อเนื่อง (Recurring Revenue) ผ่านโปรแกรมดูแลสุขภาพเชิงรุก การตรวจยีนส์ สารชะลอวัย NAD+ และการฟื้นฟูเซลล์ระดับพรีเมียม',
    data: {
      customerSegments: [
        { id: '1', text: 'กลุ่มผู้บริหารระดับสูงและนักธุรกิจ (C-Suite & Entrepreneurs) ที่ต้องการคงสมรรถภาพร่างกายและชะลอวัย', color: 'blue' },
        { id: '2', text: 'กลุ่มผู้มีกำลังซื้อสูง (High Net Worth Individuals) ทั้งชาวไทยและชาวต่างชาติพำนักในไทย', color: 'blue' },
        { id: '3', text: 'กลุ่มคนวัย 40+ ที่ใส่ใจสุขภาพเชิงรุก ต้องการป้องกันโรคไม่ติดต่อเรื้อรัง (NCDs) และตรวจยีนความเสี่ยงมะเร็ง', color: 'blue' },
        { id: '4', text: 'ญาติและครอบครัวของผู้ป่วยที่มารักษาโรคหลักในโรงพยาบาลเวชธานี (Family Wellness Cross-Sell)', color: 'green' }
      ],
      valuePropositions: [
        { id: '1', text: 'โปรแกรม Personalized Longevity Blueprint ออกแบบเฉพาะบุคคลตามพันธุกรรมและผลแล็บเชิงลึก', color: 'yellow' },
        { id: '2', text: 'นวัตกรรมการชะลอวัยและฟื้นฟูระดับเซลล์ (Cellular Therapy, NAD+ IV Infusion, Hormone Balancing)', color: 'yellow' },
        { id: '3', text: 'การตรวจคัดกรองสุขภาพครบวงจรในวันเดียว (One-Stop Whole Body MRI & Precision Check-Up Suite)', color: 'gold' },
        { id: '4', text: 'การเป็นที่ปรึกษาสุขภาพตลอดชีวิต (Lifetime Health & Vitality Partner) ควบคุมโดยแพทย์เวชศาสตร์ชะลอวัย', color: 'yellow' }
      ],
      channels: [
        { id: '1', text: 'Vejthani Longevity & Wellness Center ออกแบบบรรยากาศระดับ Exclusive 5-Star Hotel', color: 'green' },
        { id: '2', text: 'ความร่วมมือกับ Private Banking, บัตรเครดิตพรีเมียม (Wisdom, Platinum) และ Luxury Lifestyle Clubs', color: 'green' },
        { id: '3', text: 'Executive Health Checkup Packages สำหรับผู้บริหารองค์กรชั้นนำ (Corporate Executive Wellness)', color: 'blue' },
        { id: '4', text: 'Digital Health Platform นำเสนอคอนเทนต์ชะลอวัยและการตรวจสุขภาพเชิงรุก', color: 'blue' }
      ],
      customerRelationships: [
        { id: '1', text: 'Personal Longevity Physician & Nutritionist ดูแลประกบให้คำปรึกษาต่อเนื่องตลอดทั้งปี', color: 'purple' },
        { id: '2', text: 'Annual VIP Wellness Membership ดูแลสุขภาพเชิงรุกแบบสมัครสมาชิกรายปี (Health Subscription)', color: 'purple' },
        { id: '3', text: 'Wellness Concierge & Private Suite แยกเป็นสัดส่วน ไม่ปะปนกับผู้ป่วยโรคทั่วไป', color: 'purple' },
        { id: '4', text: 'Smart Health Monitoring Application ติดตามดัชนีสุขภาพและค่าแล็บแบบเรียลไทม์', color: 'blue' }
      ],
      revenueStreams: [
        { id: '1', text: 'รายได้จากโปรแกรมสมาชิก Annual VIP Longevity Club (180,000 - 500,000 บาท/คน/ปี)', color: 'gold' },
        { id: '2', text: 'รายได้จากการตรวจวิเคราะห์ยีนและ Whole-Body Precision MRI Screening (75,000 - 150,000 บาท/ครั้ง)', color: 'gold' },
        { id: '3', text: 'รายได้จากบริการฟื้นฟูเซลล์, คอร์ส NAD+ IV Therapy และ Personalized Vitamins/Supplements', color: 'green' },
        { id: '4', text: 'รายได้จากการตรวจสุขภาพผู้บริหารองค์กรคู่สัญญา (Executive Checkup Contracts)', color: 'green' }
      ],
      keyResources: [
        { id: '1', text: 'ทีมแพทย์ผู้เชี่ยวชาญด้านเวชศาสตร์ชะลอวัยและฟื้นฟูสุขภาพ (American Board of Anti-Aging)', color: 'blue' },
        { id: '2', text: 'ศูนย์ตรวจวินิจฉัยและห้องปฏิบัติการจีโนมิกส์ (Genomic & Advanced Biomarker Laboratory)', color: 'blue' },
        { id: '3', text: 'พื้นที่ศูนย์ Longevity Center ที่หรูหรา เป็นส่วนตัว พร้อมห้องพักฟื้นฟูระดับเพนต์เฮาส์', color: 'blue' },
        { id: '4', text: 'โปรแกรมซอฟต์แวร์วิเคราะห์ข้อมูลสุขภาพแบบเฉพาะบุคคล (AI Precision Health Analytics)', color: 'green' }
      ],
      keyActivities: [
        { id: '1', text: 'การตรวจประเมินสุขภาพเชิงลึก วางแผนการรักษา และติดตามผลระดับชีวเคมีอย่างใกล้ชิด', color: 'yellow' },
        { id: '2', text: 'การจัด VIP Health Workshop & Longevity Exclusive Talk สำหรับกลุ่มลูกค้าความมั่งคั่งสูง', color: 'blue' },
        { id: '3', text: 'การคัดเลือกและควบคุมคุณภาพสารอาหาร วิตามิน และเวชภัณฑ์ชะลอวัยเกรดการแพทย์', color: 'yellow' },
        { id: '4', text: 'การขยายความร่วมมือกับสถาบันเวชศาสตร์ชะลอวัยชั้นนำในระดับสากล', color: 'green' }
      ],
      keyPartnerships: [
        { id: '1', text: 'สถาบันและห้องปฏิบัติการจีโนมิกส์ชั้นนำระดับโลกสำหรับการตรวจวิเคราะห์พันธุกรรมขั้นสูง', color: 'green' },
        { id: '2', text: 'ธนาคารพาณิชย์ชั้นนำ (Private Wealth Banking Division) และบัตรเครดิตระดับ Ultra Luxury', color: 'green' },
        { id: '3', text: 'บริษัทชั้นนำในตลาดหลักทรัพย์สำหรับสัญญาสวัสดิการตรวจสุขภาพผู้บริหารระดับสูง', color: 'blue' },
        { id: '4', text: 'รีสอร์ตหรูและสปาระดับเวิลด์คลาสเพื่อจัดโปรแกรม Wellness Retreat ร่วมกัน', color: 'purple' }
      ],
      costStructure: [
        { id: '1', text: 'ต้นทุนการตรวจวิเคราะห์ทางห้องปฏิบัติการพิเศษและการตรวจยีนระดับสากล (Specialized Lab Testing)', color: 'yellow' },
        { id: '2', text: 'ค่าตอบแทนแพทย์เวชศาสตร์ชะลอวัย นักโภชนาการ และที่ปรึกษาสุขภาพเฉพาะบุคคล', color: 'yellow' },
        { id: '3', text: 'ต้นทุนสารสกัด วิตามินเกรดการแพทย์ (Compounded Medicine) และผลิตภัณฑ์ฟื้นฟูเซลล์', color: 'yellow' },
        { id: '4', text: 'งบการตลาดสำหรับกลุ่มลูกค้าระดับบนและการบริหารพื้นที่ Exclusive VIP Lounge', color: 'blue' }
      ]
    }
  },
  {
    id: 'custom_blueprint',
    title: '5. แผนกลยุทธ์สร้างใหม่โดยทีมงาน (Custom Strategic Blueprint)',
    subtitle: 'เริ่มต้นสร้างผืนผ้าใบเฉพาะสำหรับศูนย์การแพทย์หรือคลินิกของคุณ',
    targetRevenue: 'กำหนดเป้าหมายตามศูนย์ / แผนก',
    badge: '✏️ Custom Blueprint',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    centerId: 'custom',
    department: 'ระบุศูนย์หรือคลินิกของคุณ...',
    description: 'ผืนผ้าใบเริ่มต้นแบบเปิด ให้ทีมงานและโค้ชร่วมกันระดมสมองและเติมคำในช่องว่างตั้งแต่ต้นทีละขั้นตอนตามกรอบ Alexander Osterwalder',
    data: {
      customerSegments: [],
      valuePropositions: [],
      channels: [],
      customerRelationships: [],
      revenueStreams: [],
      keyResources: [],
      keyActivities: [],
      keyPartnerships: [],
      costStructure: []
    }
  }
];
