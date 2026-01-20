// Quiz data extracted from your screenshots (High Voltage Engineering)
const quiz = [
  {
    id: 1,
    question: "การเกิดเบรกดาวน์แบบ Streamer ในฉนวนแข็งเนื่องจากแรงดันประเภทใด",
    choices: ["DC", "TOV", "AC", "LI"],
    answerIndex: 2,
    answerText: "AC",
    explain:
      "Streamer/Treeing ในฉนวนแข็งมักสัมพันธ์กับการถูกเค้นสนามไฟฟ้าแบบสลับ (AC) ทำให้เกิดการลุกลามของช่องนำไฟฟ้าได้ต่อเนื่อง."
  },
  {
    id: 2,
    question: 'โรงไฟฟ้า “เขื่อนภูมิพล” ใช้ระบบแรงดันส่งจ่ายเท่าไร',
    choices: ["500 kV", "69 kV", "230 kV", "115 kV"],
    answerIndex: 2,
    answerText: "230 kV",
    explain:
      "ตามระบบส่งกำลัง/โครงข่ายที่ใช้งานจริงของเขื่อนภูมิพล ข้อสอบเฉลยอยู่ที่ระบบ 230 kV."
  },
  {
    id: 3,
    question:
      "กรณีเกิดฟ้าผ่าลงบนสายดิน (OGW) ระบบ 230 kV มีกระแส 10 kA, R หลักดิน = 5 Ω, L เสา = 30 μH, di/dt = 40 kA/μs จะเกิดอะไรขึ้นที่ฉนวนลูกถ้วย",
    choices: ["เกิด Spark Over", "เกิด Flash Over", "เกิด Back Flash Over", "ไม่เกิดอะไรขึ้นเลย"],
    answerIndex: 2,
    answerText: "เกิด Back Flash Over",
    explain:
      "ฟ้าผ่าลงสายดินทำให้ศักย์เสา/ทาวเวอร์ยกสูง (tower footing/tower surge) จนอาจย้อนแฟลชข้ามฉนวนจากเสาไปยังเฟส เรียก Back Flashover."
  },
  {
    id: 4,
    question:
      "จากเส้นกราฟคุณสมบัติของฉนวนอากาศ ถ้าระยะ d = 3 cm จะมีค่าความคงทนต่อสนามไฟฟ้าเท่าไร (ที่ความดันบรรยากาศ)",
    choices: ["84.84 kV/cm", "28.28 kV/cm", "84.84 kV", "28.28 kV"],
    answerIndex: 1,
    answerText: "28.28 kV/cm",
    explain:
      "ข้อนี้อ้างอิงค่าจากกราฟคุณสมบัติฉนวนอากาศ (ที่ความดันบรรยากาศ) สำหรับ d=3 cm ได้ค่า E ประมาณ 28.28 kV/cm."
  },
  {
    id: 5,
    question:
      "ที่อิเล็กโตรดระนาบมีระยะห่างกัน 3 cm ป้อนแรงดัน AC ขนาด 35 kVrms, 50 Hz จะมีค่าความเครียดสนามไฟฟ้าระหว่างอิเล็กโตรดประมาณเท่าไร",
    choices: ["17.50 kV/cm", "24.75 kV/cm", "11.67 kV/cm", "16.50 kV/cm"],
    answerIndex: 3,
    answerText: "16.50 kV/cm",
    explain:
      "ใช้ค่าแรงดันพีกของไซน์: Vpeak = √2·Vrms = √2·35 ≈ 49.5 kV แล้ว E ≈ Vpeak/d = 49.5/3 = 16.5 kV/cm."
  },
  {
    id: 6,
    question:
      "สายเคเบิลไฟฟ้าของ Bangkok Cable สามารถผลิตได้สูงสุดที่ขนาดพิกัดแรงดันเท่าไร",
    choices: ["115 kV", "230 kV", "300 kV", "525 kV"],
    answerIndex: 0,
    answerText: "115 kV",
    explain:
      "ตามเฉลยในภาพ ข้อสอบระบุคำตอบที่ถูกคือ 115 kV."
  },
  {
    id: 7,
    question:
      "กระแสฟ้าผ่าลงบนสายส่งซึ่งอากาศ 1.5 kA, Za = 450 Ω, Zb = 50 Ω จะมีแรงดันส่งผ่านไปยังจุดต่อสายเคเบิลเท่าไร",
    choices: ["133.33 kV", "-466.67 kV", "120.00 kV", "466.67 kV"],
    answerIndex: 2,
    answerText: "120.00 kV",
    explain:
      "เป็นโจทย์คลื่นเดินทาง/การส่งผ่านที่จุดต่ออิมพีแดนซ์ (impedance mismatch) ใช้แนวคิดสัมประสิทธิ์ส่งผ่าน (transmission coefficient) เพื่อหาแรงดันที่ส่งผ่านไปยัง Zb; เฉลยในภาพได้ 120.00 kV (ค่าปัดเศษตามโจทย์/วิธีที่ใช้ในรายวิชา)."
  },
  {
    id: 8,
    question:
      "สายส่งแรงสูง 3 เฟส 525 kV 50 Hz แขวนลูกถ้วย 27 ลูก แต่ละลูกทนแรงดัน Impulse ได้ 126 kV มีค่า Cs=21 pF, Cg=14 pF, CL=0 จะมีแรงดันอิมพัลส์ตกคร่อมลูกที่ 27 ขนาดเท่าไร",
    choices: ["11.28 kV", "13.48 kV", "16.29 kV", "15.50 kV"],
    answerIndex: 1,
    answerText: "13.48 kV",
    explain:
      "การกระจายแรงดันตามสตริงลูกถ้วยไม่เท่ากันเพราะมีความจุแฝงลงกราวด์ (Cg) ทำให้ลูกใกล้ด้านไลน์รับแรงดันสูงกว่า คำนวณตามวงจร Cs/Cg ได้ผลตามเฉลย 13.48 kV."
  },
   {
    id: 9,
    question: "กำลังสูญเสียไดอิเล็กทริกเนื่องจากสภาพนำไฟฟ้าหาได้จาก",
    choices: [
      "I² × R₀",
      "U² / R₀",
      "Uc Ic tanδ",
      "U I sinδ"
    ],
    answerIndex: 1,
    answerText: "U² / R₀"
  },
  {
    id: 10,
    question: "ผลของลักษณะอิเล็กโทรดแบบไหน จะทำให้เกิดโคโรน่าเบรกดาวน์",
    choices: [
      "ทรงกลม",
      "ทรงกระบอก",
      "ระนาบขอบโค้ง",
      "ปลายแหลม"
    ],
    answerIndex: 3,
    answerText: "ปลายแหลม"
  },
  {
    id: 11,
    question: "BIL หมายถึง",
    choices: [
      "Basic Impulse Level",
      "Basic Impulse Lightning",
      "Basic Impulse Insulation Level",
      "Basic Impulse Lightning Level"
    ],
    answerIndex: 2,
    answerText: "Basic Impulse Insulation Level",
    explain:
      "BIL ย่อจาก Basic Impulse Insulation Level คือระดับความทนของฉนวนต่อแรงดันอิมพัลส์มาตรฐาน."
  },
  {
    id: 12,
    question: "ถ้าอิเล็กโตรดมี A = 180 cm^2 วางห่างกัน 2 cm จะเกิดค่า Co เท่าไร",
    choices: ["8.33 pF", "7.96 pF", "83.33 nF", "79.57 nF"],
    answerIndex: 1,
    answerText: "7.96 pF",
    explain:
      "ใช้ C = ε0 A / d โดย A=180 cm²=0.018 m², d=2 cm=0.02 m ⇒ C≈8.854e−12×0.018/0.02≈7.97e−12 F ≈ 7.96 pF."
  },
  {
    id: 13,
    question: "Partial discharge (PD) มีกี่แบบ อะไรบ้าง",
    choices: [
      "3 แบบคือ Corona, internal and external discharge",
      "3 แบบคือ Corona, internal and surface discharge",
      "2 แบบคือ Internal and surface discharge",
      "2 แบบคือ Internal and external discharge"
    ],
    answerIndex: 1,
    answerText: "3 แบบคือ Corona, internal and surface discharge",
    explain:
      "PD มักแบ่งหลัก ๆ เป็น 3 แบบ: Corona (ภายนอก), Internal (ภายในโพรง), และ Surface discharge (บนผิวฉนวน)."
  },
{
  id: 14,
  question: "แรงดันเกินชั่วครู่แบบไหนเกิดขึ้นบ่อยที่สุด",
  choices: [
    "การปลดโหลด L และเพิ่ม C กะทันหัน",
    "สภาวะรีโซแนนซ์",
    "ผิดพร่องลงดิน 1 เฟส",
    "ผิดพร่องลงดิน 3 เฟส"
  ],
  answerIndex: 2,
  answerText: "ผิดพร่องลงดิน 1 เฟส"
},
  {
    id: 15,
    question: "การเกิดเบรกดาวน์ในฉนวนแข็งที่ต้องใช้ระยะเวลานาน เนื่องจากสาเหตุใด",
    choices: ["Internal discharge", "Surface discharge", "External discharge", "Chemical discharge"],
    answerIndex: 0,
    answerText: "Internal discharge",
    explain:
      "เบรกดาวน์แบบใช้เวลานานในฉนวนแข็งมักเกิดจาก PD ภายในโพรง (internal discharge) สะสมความเสียหายจนเกิด treeing แล้วล้มเหลวในที่สุด."
  },
  {
    id: 16,
    question: "ที่ระดับแรงดันสูงเท่าไร ที่ต้องมีการทดสอบการฉนวนด้วยแรงดันอิมพัลส์สวิทชิ่ง",
    choices: ["115 kV", "230 kV", "500 kV", "ถูกทุกข้อ"],
    answerIndex: 2,
    answerText: "500 kV",
    explain:
      "Switching impulse test เน้นระบบ EHV/UHV โดยทั่วไปจะเริ่มมีนัยสำคัญในระดับแรงดันสูงมาก เช่น 500 kV."
  },
  {
    id: 17,
    question:
      "จากเส้นกราฟคุณสมบัติของฉนวนอากาศ ถ้าระยะ d = 3 cm จะเกิดเบรกดาวน์ที่ระดับแรงดันเท่าไร (ที่ความดัน 3 bar)",
    choices: ["239.76 kV/cm", "239.76 kV", "239.76 V/cm", "239.76 V"],
    answerIndex: 1,
    answerText: "239.76 kV",
    explain:
      "ข้อนี้อ่านค่าจากกราฟ/ความสัมพันธ์การเบรกดาวน์ของอากาศที่ความดัน 3 bar สำหรับ d=3 cm ได้แรงดันเบรกดาวน์ประมาณ 239.76 kV."
  },
  {
    id: 18,
    question: "ที่ความดันบรรยากาศ SF6 มีค่าความคงทนต่อสนามไฟฟ้าเท่าไร",
    choices: ["78 kV/cm", "87 kV/cm", "97 kV/cm", "67 kV/cm"],
    answerIndex: 1,
    answerText: "87 kV/cm",
    explain:
      "SF6 มี dielectric strength สูงกว่าอากาศมาก ตามเฉลย/ค่ามาตรฐานในรายวิชาได้ประมาณ 87 kV/cm ที่ความดันบรรยากาศ."
  },
  {
    id: 19,
    question:
      "ระบบสายส่ง 500 kV 3 เฟส 50 Hz เป็นแบบสายควบ แต่ละเฟสประกอบด้วยตัวนำ ACSR 4 เส้น จัดวางห่างกัน 45 cm เส้นผ่านศูนย์กลางตัวนำ 3.0 cm และระยะห่างระหว่างเฟส 12 m จะมีค่า Emax เท่าไร",
    choices: ["12.43 kV/cm", "10.70 kV/cm", "11.75 kV/cm", "26.44 kV/cm"],
    answerIndex: 2,
    answerText: "11.75 kV/cm",
    explain:
      "ใช้สูตรสนามไฟฟ้าสูงสุดของสายส่งแบบ bundle (คำนึงถึงระยะห่างเฟส/รัศมีสมมูลของ bundle) ค่าที่ได้ตามเฉลยคือ 11.75 kV/cm."
  },
  {
    id: 20,
    question: "XLPE หมายถึง",
    choices: [
      "X-Linked Polyethylene",
      "Cross-Linked Polyethylene",
      "Cross-Linked Polymer",
      "X-Linked Polymer compound"
    ],
    answerIndex: 1,
    answerText: "Cross-Linked Polyethylene",
    explain:
      "XLPE = Cross-Linked Polyethylene เป็นวัสดุฉนวนสายเคเบิลที่ผ่านกระบวนการ cross-link ทำให้ทนความร้อน/คุณสมบัติไฟฟ้าดีขึ้น."
  }
];
// ADDITIONAL quiz items (21–38, 41–42)
const quiz_more = [
  {
    id: 21,
    question:
      "จากความสัมพันธ์กระแส–แรงดันของแก๊สดีสารจ์ก๊าซ ช่วงจังหวะที่แรงดันคร่อมแก๊ปยุบตัวเนื่องจากสาเหตุใด",
    choices: [
      "กระแสดีสารจ์ลดลง",
      "ความต้านทานฉนวนก๊าซเพิ่มขึ้น",
      "ความต้านทานฉนวนก๊าซลดลง",
      "กระแสดีสารจ์เพิ่มขึ้น"
    ],
    answerIndex: 2,
    answerText: "ความต้านทานฉนวนก๊าซลดลง",
    explain:
      "ช่วงที่เกิดการคายประจุในแก๊ป การนำไฟฟ้าเพิ่มขึ้น ทำให้ความต้านทานเทียบเท่าของช่องแก๊ปลดลง จึงทำให้แรงดันคร่อมแก๊ปยุบตัว."
  },
  {
    id: 22,
    question:
      "Breakdown strength at 20°C ที่ 2.5 mm standard sphere gap ของ Silicone oil มีค่าเท่าไร",
    choices: ["30–40 kV/mm", "20–25 kV/mm", "30–45 kV/mm", "10–25 kV/mm"],
    answerIndex: 0,
    answerText: "30–40 kV/mm",
    explain:
      "ค่าความทนแรงดันของ Silicone oil ในเงื่อนไข sphere gap 2.5 mm ที่ 20°C ตามตาราง/เฉลยอยู่ช่วง 30–40 kV/mm."
  },
  {
    id: 23,
    question: "ข้อใดกล่าวถูกต้องเกี่ยวกับฉนวนแข็ง",
    choices: [
      "เมื่อ T สูงขึ้น relative permittivity จะสูงขึ้น",
      "เมื่อ T สูงขึ้น vacuum permittivity จะสูงขึ้น",
      "เมื่อ T สูงขึ้น relative permittivity จะต่ำลง",
      "เมื่อ T สูงขึ้น vacuum permittivity จะต่ำลง"
    ],
    answerIndex: 0,
    answerText: "เมื่อ T สูงขึ้น relative permittivity จะสูงขึ้น",
    explain:
      "คำถามโฟกัสแนวโน้มของ relative permittivity (εr) ในฉนวนแข็งตามอุณหภูมิ ส่วน vacuum permittivity (ε0) เป็นค่าคงที่."
  },
  {
    id: 24,
    question:
      "ที่ระบบแรงดันส่งจ่ายสูงกว่า 300 kV จะให้ความสำคัญกับแรงดันเกินประเภทไหนเป็นพิเศษ",
    choices: ["แรงดันเกินสวิทชิ่ง", "แรงดันเกินฟ้าผ่า", "แรงดันเกินชั่วครู่", "แรงดันเกินเหนี่ยวนำ"],
    answerIndex: 0,
    answerText: "แรงดันเกินสวิทชิ่ง",
    explain:
      "ในระดับ EHV (>300 kV) switching surge มีผลต่อการออกแบบฉนวน/ระยะปลอดภัยมาก จึงถูกเน้นเป็นพิเศษ."
  },
  {
    id: 25,
    question: "ส่วนสำคัญหลักของ power cable ประกอบด้วยอะไรบ้าง",
    choices: [
      "Conductor and Protective Insulation",
      "Conductor and Insulator",
      "Conductor, Insulator and Protective Covering",
      "Conductor, Insulator and Shielding"
    ],
    answerIndex: 2,
    answerText: "Conductor, Insulator and Protective Covering",
    explain:
      "โครงสร้างหลักของสายเคเบิลกำลังมีตัวนำ + ชั้นฉนวน + ชั้นหุ้ม/ป้องกัน (protective covering)."
  },
  {
    id: 26,
    question:
      "Breakdown strength at 20°C ที่ 2.5 mm standard sphere gap ของ Cable oil มีค่าเท่าไร",
    choices: ["40 kV/mm", "35 kV/mm", "25 kV/mm", "30 kV/mm"],
    answerIndex: 3,
    answerText: "30 kV/mm",
    explain:
      "ค่าความทนแรงดันของ Cable oil ในเงื่อนไขที่กำหนด ตามตาราง/เฉลยคือ 30 kV/mm."
  },
  {
    id: 27,
    question: "จากตารางคุณสมบัติของวัสดุฉนวน PVC จะมีค่า Eb = เท่าไร",
    choices: ["400 kV/mm", "40 kV/m", "400 kV/cm", "40 kV/cm"],
    answerIndex: 2,
    answerText: "400 kV/cm",
    explain:
      "Eb คือ dielectric strength (ค่าความคงทนต่อสนามไฟฟ้าก่อนเบรกดาวน์) ของ PVC ตามตารางในข้อสอบ."
  },
  {
    id: 28,
    question: "Relative permittivity ของ Askarels มีค่าเท่าไร",
    choices: ["2.1", "4.8", "2.3", "3.0"],
    answerIndex: 1,
    answerText: "4.8",
    explain:
      "ค่า relative permittivity (εr) ของ Askarels ตามตาราง/เฉลยคือ 4.8."
  },
  {
    id: 29,
    question: "การเกิดเบรกดาวน์แบบ Thermal ในฉนวนแข็งเนื่องจากแรงดันประเภทใด",
    choices: ["TOV", "AC", "SI", "DC"],
    answerIndex: 0,
    answerText: "TOV",
    explain:
      "Thermal breakdown มักเกี่ยวกับการถูกเค้นนาน/ความร้อนสะสมจากการสูญเสียกำลังในฉนวน ซึ่งสอดคล้องกับภาวะแรงดันเกินชั่วคราว (TOV) ตามแนวข้อสอบ."
  },
  {
    id: 30,
    question: 'ชั้นฉนวนสายเคเบิล "Metallic screen" มีหน้าที่ทำอะไร',
    choices: ["ป้องกันการลัดวงจร", "ลดสัญญาณรบกวนจากภายนอก", "จำกัดสนามไฟฟ้า", "ป้องกันความชื้น"],
    answerIndex: 2,
    answerText: "จำกัดสนามไฟฟ้า",
    explain:
      "Metallic screen ช่วยควบคุม/ทำให้สนามไฟฟ้ากระจายสม่ำเสมอ ลดความเค้นเฉพาะจุดและช่วยให้ฉนวนทำงานปลอดภัยขึ้น."
  },
  {
    id: 31,
    question:
      "ปลอกฉนวนตัวนำไฟฟ้าแรงสูง ในการออกแบบต้องคำนึงถึงปัจจัยใดเป็นสำคัญ",
    choices: ["ถูกทุกข้อ", "แรงดันกระจายในเนื้อฉนวน", "แรงดันกระจายตามผิวฉนวน", "สนามไฟฟ้าในเนื้อฉนวน"],
    answerIndex: 2,
    answerText: "แรงดันกระจายตามผิวฉนวน",
    explain:
      "การออกแบบปลอกฉนวน/บุชชิ่งต้องควบคุมการกระจายแรงดันตามผิวเพื่อลด flashover บนผิวฉนวน."
  },
  {
    id: 32,
    question:
      "สายเคเบิลแรงสูงพิกัด 160 kVpeak ตัวนำรัศมี r1=2.5 cm ชั้นฉนวน r2=3 cm (εr=4) วางในท่อสายเคเบิลรัศมี r3=5 cm (εr=1) จะมีค่าความเครียดสนามไฟฟ้าสูงสุดที่รัศมี r3 เท่าไร",
    choices: ["46.33 kV/cm", "26.80 kV/cm", "52.27 kV/cm", "57.51 kV/cm"],
    answerIndex: 3,
    answerText: "57.51 kV/cm",
    explain:
      "เป็นการหาสนามไฟฟ้าในระบบทรงกระบอกร่วมศูนย์ (coaxial) ที่มีฉนวนต่างชนิด คำนวณการกระจายสนามตามรัศมีได้ค่าเฉลย 57.51 kV/cm."
  },
  {
    id: 33,
    question:
      "กระแสฟ้าผ่าลงบนสายส่งซึ่งอากาศ 40 kA, Za=450 Ω, Zb=50 Ω ขนานกับ Zc=50 Ω จะมีกระแสสะท้อนกลับที่จุดต่อเท่าไร",
    choices: ["-35.8 kA", "-37.6 kA", "37.6 kA", "35.8 kA"],
    answerIndex: 3,
    answerText: "35.8 kA",
    explain:
      "โจทย์คลื่นเดินทางที่จุดต่ออิมพีแดนซ์ (มีการขนาน) ใช้สัมประสิทธิ์การสะท้อน/ส่งผ่านของกระแส โดยเฉลยได้ 35.8 kA."
  },
  {
    id: 34,
    question: "ระยะปลอดภัยจากไฟฟ้าแรงสูงสำหรับแรงดัน 300 kV คืออย่างน้อยเท่าไร",
    choices: ["15 cm", "30 cm", "300 cm", "200 cm"],
    answerIndex: 3,
    answerText: "200 cm",
    explain:
      "ตามแนวข้อสอบ/มาตรฐานการทำงานใกล้แรงดันสูง ระยะปลอดภัยขั้นต่ำสำหรับ 300 kV เฉลยอยู่ที่ 200 cm."
  },
  {
    id: 35,
    question: "ปัจจุบันประเทศไทย ใช้ลูกถ้วยชนิดใดมากกว่า 80%",
    choices: ["Porcelain", "Glass", "Silicone rubber", "Non-ceramic"],
    answerIndex: 0,
    answerText: "Porcelain",
    explain:
      "ตามเฉลยในข้อสอบ ประเทศไทยยังใช้ลูกถ้วย Porcelain เป็นสัดส่วนหลักมากกว่า 80%."
  },
  {
    id: 36,
    question:
      "หากต้องการส่งจ่ายด้วยปริมาณกระแสมากๆ จะพิจารณาองค์ประกอบส่วนไหนของ power cable",
    choices: ["ฉนวน", "ถูกทุกข้อ", "ตัวนำ", "ส่วนห่อหุ้มป้องกัน"],
    answerIndex: 2,
    answerText: "ตัวนำ",
    explain:
      "ความสามารถพากระแส (ampacity) ขึ้นกับตัวนำเป็นหลัก เช่น พื้นที่หน้าตัด วัสดุ และการระบายความร้อน."
  },
  {
    id: 37,
    question:
      "สายส่งแรงสูง 3 เฟส 525 kV 50 Hz แขวนลูกถ้วย 27 ลูก แต่ละลูกทนแรงดัน Impulse ได้ 126 kV มีค่า Cs=21 pF, Cg=14 pF, CL=0 จะมีแรงดันอิมพัลส์ U_FO เท่าไร",
    choices: ["2,234 kV", "2,470 kV", "2,845 kV", "2,833 kV"],
    answerIndex: 3,
    answerText: "2,833 kV",
    explain:
      "คำนวณแรงดันแฟลชโอเวอร์ของสตริงลูกถ้วยจากการกระจายแรงดัน (Cs/Cg) ได้ค่าเฉลย 2,833 kV."
  },
  {
    id: 38,
    question:
      "ระบบแรงดัน 22 kV 2,500 kVA 3 เฟส 50 Hz นิวตรัลต่อลงดิน มีค่า L = 1.5 mH เมื่อตัดวงจรคาปาซิเตอร์ออกไป จะเกิดออสซิเลชั่นที่ความถี่เท่าไร",
    choices: ["1 kHz", "1.5 kHz", "2 kHz", "2.5 kHz"],
    answerIndex: 0,
    answerText: "1 kHz",
    explain:
      "วงจร L–C เมื่อสวิตช์/ตัดคาปาซิเตอร์อาจเกิดการสั่น (oscillation) ที่ความถี่เรโซแนนซ์ ตามเฉลยข้อสอบได้ 1 kHz."
  },
];

// ใช้รวมกับ quiz เดิม:
// const allQuiz = [...quiz, ...quiz_more];
const quiz_more2 = [
  {
    id: 39,
    question: "การเกิดเบรกดาวน์เนื่องจากแรงดันอิมพัลส์อธิบายได้ด้วยกลไกแบบใด",
    choices: [
      "กลไกการเบรกดาวน์แบบสตรีมเมอร์",
      "กลไกการเบรกดาวน์ของทาวน์เซนด์",
      "กลไกการเบรกดาวน์ของสตรีมเมอร์",
      "ถูกทั้งข้อ ก และ ค"
    ],
    answerIndex: 0,
    answerText: "กลไกการเบรกดาวน์แบบสตรีมเมอร์"
  },
  {
    id: 40,
    question: "การเกิดเบรกดาวน์แบบบริสุทธิ์ในฉนวนแข็ง เนื่องจากแรงดันประเภทใด",
    choices: ["LI", "SI", "DC", "AC"],
    answerIndex: 0,
    answerText: "LI"
  },
  {
    id: 41,
    question: "จากตารางคุณสมบัติของวัสดุฉนวน Mica จะมีค่า Eb = เท่าไร",
    choices: ["170 kV/m", "170 kV/cm", "17 kV/m", "17 kV/cm"],
    answerIndex: 1,
    answerText: "170 kV/cm"
  },
  {
    id: 42,
    question: "ISO 3864 หมายถึง",
    choices: ["หลักการออกแบบป้ายความปลอดภัย", "เครื่องหมายความปลอดภัย", "สี สัญลักษณ์ และป้ายความปลอดภัย", "ถูกทุกข้อ"],
    answerIndex: 2,
    answerText: "สี สัญลักษณ์ และป้ายความปลอดภัย",
    explain:
      "ISO 3864 เกี่ยวกับมาตรฐานสี/สัญลักษณ์/ป้ายความปลอดภัย (safety colours and safety signs)."
  },
  {
    id: 43,
    question:
      "ระบบสายส่งกำลังไฟฟ้าในประเทศไทย ที่ระดับ 230 kV มีการใช้ลูกถ้วยแขวนต่อกันยาวกี่ลูก",
    choices: ["18 ลูก", "14 ลูก", "7 ลูก", "28 ลูก"],
    answerIndex: 1,
    answerText: "14 ลูก"
  },
  {
    id: 44,
    question:
      "การออกแบบฉนวนให้ดีและประหยัด จำเป็นต้องมีความรู้ความเข้าใจเกี่ยวกับอะไร",
    choices: [
      "แรงดันไฟฟ้า สนามไฟฟ้า รูปร่างของฉนวน",
      "แรงดันไฟฟ้า สนามไฟฟ้า รูปร่างของอิเล็กโทรด",
      "แรงดันไฟฟ้า สนามไฟฟ้า เศรษฐศาสตร์",
      "แรงดันไฟฟ้า สนามไฟฟ้า ลักษณะสมบัติของฉนวน"
    ],
    answerIndex: 3,
    answerText: "แรงดันไฟฟ้า สนามไฟฟ้า ลักษณะสมบัติของฉนวน"
  },
  {
    id: 45,
    question: "การไฟฟ้านครหลวงรับผิดชอบดูแลพื้นที่จังหวัดใด",
    choices: [
      "กรุงเทพฯ สมุทรปราการ และนนทบุรี",
      "ทั่วประเทศ",
      "เฉพาะกรุงเทพฯ",
      "ภาคกลางทั้งหมด"
    ],
    answerIndex: 0,
    answerText: "กรุงเทพฯ สมุทรปราการ และนนทบุรี"
  },
  {
    id: 46,
    question: "จากรูปจัดเป็นลูกถ้วยประเภทใด ตามมาตรฐาน IEC 383-1",
    image: "assets/img_46.jpg",
    choices: ["แบบ B", "แบบ A", "แบบธรรมดา", "แบบ C"],
    answerIndex: 0,
    answerText: "แบบ B"
  },
  { 
    id: 47,
    question: "จากรูป P ย่อมาจากคำว่าอะไร",
    image: "assets/img_47.jpg",
    choices: [
      "Property of breakdown",
      "Power of breakdown",
      "Percent of breakdown",
      "Probability of breakdown"
    ],
    answerIndex: 3,
    answerText: "Probability of breakdown"
  },
  {
    id: 48,
    question:
      "การทดสอบด้วยแรงดันอิมพัลส์ฟ้าผ่า ขนาดของแรงดันทดสอบมาตรฐานกำหนดด้วยค่าอะไร",
    choices: ["U_peak", "U_rms", "U_avg", "U_max"],
    answerIndex: 0,
    answerText: "U_peak"
  },
  {
    id: 49,
    question:
      "ลักษณะสำคัญที่เป็นตัวชี้บอกถึงคุณสมบัติและคุณภาพของฉนวนเหลวและฉนวนแข็งคืออะไร",
    choices: [
      "ค่าความต้านทานต่ำและความคงทนต่อแรงดันไฟฟ้าสูง",
      "ค่าความต้านทานสูงและแฟกเตอร์กำลังไฟฟ้าสูญเสียสูง",
      "ค่าความต้านทานสูงและแฟกเตอร์กำลังไฟฟ้าสูญเสียต่ำ",
      "ค่าความต้านทานสูงและความคงทนต่อแรงดันไฟฟ้าต่ำ"
    ],
    answerIndex: 2,
    answerText: "ค่าความต้านทานสูงและแฟกเตอร์กำลังไฟฟ้าสูญเสียต่ำ"
  },
  {
    id: 50,
    question: "มิติที่เหมาะสมของทรงกลมซ้อน R1/R2 มีค่าเท่าไร",
    choices: ["1/e", "1/2", "ln e", "e"],
    answerIndex: 1,
    answerText: "1/2"
  },
  {
    id: 51,
    question: "ระดับแรงดันสูง (MHV) สำหรับประเทศไทย ใช้ระดับแรงดันเท่าไร",
    choices: ["22 kV", "69 kV", "115 kV", "230 kV"],
    answerIndex: 0,
    answerText: "22 kV"
  },
  {
    id: 52,
    question:
      "ถ้าอิเล็กโทรดมี A = 16 cm² ถูกคั่นด้วยฉนวนแข็งหนา 1.8 cm วัดค่า C = 252 pF ฉนวนแข็งมีค่าคงตัวไดอิเล็กทริกเท่าไร",
    choices: ["0.3", "2.3", "3.0", "3.2"],
    answerIndex: 3,
    answerText: "3.2"
  },
  {
    id: 53,
    question: "ในสนามไฟฟ้าสม่ำเสมอข้อใดกล่าวถูกต้อง",
    choices: [
      "Emax = U/d",
      "ถูกทั้งข้อ ข และ ค",
      "U = E/d",
      "Field factor = 1"
    ],
    answerIndex: 1,
    answerText: "ถูกทั้งข้อ ข และ ค"
  },
  {
    id: 54,
    question: "Ub0% มีความสำคัญอย่างไรต่อการฉนวน",
    choices: [
      "กำหนดค่า SIL",
      "กำหนดค่า BIL",
      "กำหนดมิติ Arrester",
      "กำหนดมิติการฉนวน"
    ],
    answerIndex: 1,
    answerText: "กำหนดค่า BIL"
  },
  {
    id: 55,
    question:
      "จากรูปถ้า Ub50% = 1057 kV; sigma = 2.3 จะมีค่า Ub0% = เท่าไร",
    image: "assets/img_55.jpg",
    choices: ["1064 kV", "1550 kV", "1050 kV", "1558 kV"],
    answerIndex: 2,
    answerText: "1050 kV"
  },
  {
    id: 56,
    question:
      "ความคงทนของการฉนวนต่อความเครียดสนามไฟฟ้าขึ้นอยู่กับแฟกเตอร์อะไร",
    choices: [
      "ลักษณะสนามไฟฟ้า สมบัติของฉนวน เวลา",
      "ลักษณะสนามไฟฟ้า สมบัติของฉนวน เวลา แรงดัน",
      "ลักษณะสนามไฟฟ้า คุณสมบัติของฉนวน แรงดัน",
      "ลักษณะสนามไฟฟ้า เวลา แรงดัน"
    ],
    answerIndex: 0,
    answerText: "ลักษณะสนามไฟฟ้า สมบัติของฉนวน เวลา"
  },
  {
    id: 57,
    question:
      "กรณีที่ CB ตัดวงจรขณะที่มีกระแสสร้างสนามแม่เหล็กพลังงานจะถูกเปลี่ยนไปเป็นอะไร",
    choices: ["ถูกทุกข้อ", "ความร้อน", "ความเหนี่ยวนำ", "สนามไฟฟ้า"],
    answerIndex: 3,
    answerText: "สนามไฟฟ้า"
  },
  {
    id: 58,
    question: "จากรูป จะหาค่า tan-delta ได้จาก",
    image: "assets/img_58.jpg",
    choices: ["รูปเวกเตอร์กระแส", "รูปสามเหลี่ยมกำลัง", "อัตราส่วนกระแสสูญเสีย", "มุมเฟสของฉนวน"],
    answerIndex: 2,
    answerText: "อัตราส่วนกระแสสูญเสีย"
  },
  {
    id: 59,
    question: "ระยะ Leakage ของลูกถ้วย หมายถึงระยะใด",
    image: "images/img_59.jpg",
    choices: ["ระยะ a2", "ระยะ (a1 + a2)", "ระยะ (b1 + b2)", "ระยะ b2"],
    answerIndex: 2,
    answerText: "ระยะ (b1 + b2)"
  },
  {
    id: 60,
    question:
      "รูปคลื่นแรงดันสูงที่ใช้ในการทดสอบตามมาตรฐานมีอะไรบ้าง",
    choices: ["AC, DC, Impulse", "AC, DC, Impulse, IC", "AC, DC, LI, SI", "AC, DC"],
    answerIndex: 2,
    answerText: "AC, DC, LI, SI"
  },
  {
    id: 61,
    question: "กรณีทรงกลมเดี่ยวในที่ว่าง Emax จะหาได้จาก",
    choices: [
      "U/r",
      "U/r2",
      "U/r1",
      "U/2r"
    ],
    answerIndex: 2,
    answerText: "U/r1"
  },
  {
    id: 62,
    question:
      "จากรูป ถ้า Ub50% = 1057 kV; sigma = 2.3 จะมีค่า Ub100% = เท่าไร",
    image: "assets/img_62.jpg",
    choices: [
      "1550 kV",
      "1558 kV",
      "1064 kV",
      "1050 kV"
    ],
    answerIndex: 3,
    answerText: "1050 kV"
  },
  {
    id: 63,
    question: "ข้อใดเป็นสภาวะมาตรฐาน IEC",
    choices: [
      "P = 101.3 kPa",
      "T = 20 °C",
      "bn = 1013 hPa",
      "ถูกทุกข้อ"
    ],
    answerIndex: 3,
    answerText: "ถูกทุกข้อ"
  },
  {
    id: 64,
    question:
      "รัศมีที่พอเหมาะที่จะไม่ทำให้เกิดโคโรน่า สำหรับแรงดัน 525 kV คือประมาณเท่าไร",
    choices: [
      "40 cm",
      "25 cm",
      "17.5 cm",
      "30 cm"
    ],
    answerIndex: 2,
    answerText: "17.5 cm"
  },
  {
    id: 65,
    question: "VCB แบบ RMF อาศัยหลักการของอะไรในการดับอาร์ค",
    choices: [
      "สนามแม่เหล็กพุ่งตามแนวแกน",
      "สนามแม่เหล็กหมุนวน",
      "แรงเหวี่ยง",
      "ถูกทั้งข้อ ก และ ค"
    ],
    answerIndex: 1,
    answerText: "สนามแม่เหล็กหมุนวน"
  },
  {
    id: 66,
    question:
      "กระบวนการที่ไอออนบวกที่มีพลังงานสูงเพียงพอวิ่งชนแคโทดทำให้เกิดการแตกตัวของอิเล็กตรอน เรียกว่า?",
    choices: [
      "Alfa process",
      "Eta process",
      "Beta process",
      "Gamma process"
    ],
    answerIndex: 3,
    answerText: "Gamma process"
  },
  {
    id: 67,
    question:
      "กระบวนการที่ทำให้อิเล็กตรอนแตกตัวออกจากโมเลกุล เรียกว่า?",
    choices: [
      "Organization process",
      "Ionization process",
      "Electron dissociation process",
      "Disintegration process"
    ],
    answerIndex: 1,
    answerText: "Ionization process"
  },
  {
    id: 68,
    question:
      "กลไกการเบรกดาวน์แบบสตรีมเมอร์ อธิบายการเกิดดิสชาร์จเริ่มต้นจากอะไร",
    choices: [
      "โมเลกุล",
      "อิเล็กตรอนอิสระ",
      "อะวาลานช์เดี่ยว",
      "ไอออนบวก"
    ],
    answerIndex: 2,
    answerText: "อะวาลานช์เดี่ยว"
  },
  {
    id: 69,
    question:
      "จากความสัมพันธ์กระแส–แรงดัน ของแก๊สดิสชาร์จ ช่วงเวลา Townsend discharge กระแสจะมีค่าอยู่ในย่านใด",
    choices: [
      "pA",
      "mA",
      "µA",
      "nA"
    ],
    answerIndex: 0,
    answerText: "pA"
  },
  {
    id: 70,
    question:
      "เปรียบเทียบระหว่างทรงกลมซ้อน ทรงกลมเดี่ยว และทรงกระบอกซ้อน ข้อใดกล่าวถูกต้อง",
    choices: [
      "ณ บริเวณผิว r1 ของทรงกระบอกซ้อน มีค่า Emax สูงที่สุด",
      "ณ บริเวณผิว r1 ของทรงกลมเดี่ยว มีค่า Emax สูงที่สุด",
      "ณ บริเวณผิว r1 ของทรงกลมซ้อน มีค่า Emax ต่ำที่สุด",
      "ณ บริเวณผิว r1 ของทรงกลมซ้อน มีค่า Emax สูงที่สุด"
    ],
    answerIndex: 3,
    answerText: "ณ บริเวณผิว r1 ของทรงกลมซ้อน มีค่า Emax สูงที่สุด"
  },
  {
    id: 71,
    question:
      "Electrochemical treeing แบ่งได้ตามรูปร่างเป็นกี่แบบอะไรบ้าง",
    choices: [
      "2 แบบคือ Bush-type and Branch-type tree",
      "2 แบบคือ Vented and Bow-tie tree",
      "2 แบบคือ Bush-type and Vented tree",
      "2 แบบคือ Bush-type and Bow-tie tree"
    ],
    answerIndex: 1,
    answerText: "2 แบบคือ Vented and Bow-tie tree"
  },
  {
    id: 72,
    question: "แรงดันเกินชั่วครู่มีความสำคัญต่อการเลือกค่าที่กำหนดของอุปกรณ์ชนิดใด",
    choices: [
      "Disconnector",
      "ถูกทั้งข้อ ข และ ค",
      "Arrester",
      "Circuit Breaker"
    ],
    answerIndex: 2,
    answerText: "Arrester"
  },
  {
    id: 73,
    question: "ในทางปฏิบัติค่าคงทนต่อความเครียดสนามไฟฟ้าของอากาศมีค่าประมาณเท่าไร",
    choices: ["24 kV", "27 kV", "25 kV", "30 kV"],
    answerIndex: 2,
    answerText: "25 kV"
  },
  {
    id: 74,
    question: "Overhead power line หมายถึง",
    choices: [
      "ถูกทุกข้อ",
      "สายส่งเหนือศีรษะ",
      "สายส่งอากาศ",
      "สายส่งสัญญาณดิจิตอล"
    ],
    answerIndex: 2,
    answerText: "สายส่งอากาศ"
  },
  {
    id: 75,
    question:
      "ในระบบ GIS ถ้าออกแบบตัวนำทรงกระบอกใน มีขนาดเส้นผ่านศูนย์กลาง = 5.5 cm จะออกแบบทรงกลมนอกมีรัศมีเท่าไร",
    choices: [
      "5 cm",
      "11 cm",
      "12 cm",
      "10 cm"
    ],
    answerIndex: 1,
    answerText: "11 cm"
  },
  {
    id: 76,
    question: "จากรูป จะหาค่า tan-delta ได้จาก",
    image: "assets/img_76.jpg",
    choices: [
      "2πfRC",
      "1/2πfRC",
      "Ir/Ic",
      "Ur/Uc"
    ],
    answerIndex: 2,
    answerText: "Ir/Ic"
  },
     {
    id: 77,
    question: "จากตารางคุณสมบัติของวัสดุฉนวน PETP จะมีค่า Relative permittivity เท่าไร",
    choices: ["3.2", "4.0", "4.3", "2.3"],
    answerIndex: 0,
    answerText: "3.2"
  },
  {
    id: 78,
    question: "มาตรฐานแรงดันอิมพัลส์ฟ้าผ่ารูปคลื่นเต็มถูกกำหนดด้วยค่าเวลาหน้าคลื่นและหางคลื่น โดยมีค่าเท่ากับ",
    choices: [
      "T1/T2 = 25/250 µs",
      "T1/T2 = 12/50 µs",
      "T1/T2 = 250/2500 µs",
      "T1/T2 = 1.2/50 µs"
    ],
    answerIndex: 3,
    answerText: "T1/T2 = 1.2/50 µs"
  },
  {
    id: 79,
    question:
      "สายเคเบิลแรงสูงพิกัด 160 kVpeak ตัวนำมีรัศมี (r1)=2.5 cm ฉนวนหุ้ม (r2)=3 cm (εr=4) วางในอากาศ (r3)=5 cm จะมีค่าความเครียดสนามไฟฟ้าต่ำสุดที่รัศมี r2 เท่าไร",
    choices: [
      "16.33 kV/cm",
      "23.96 kV/cm",
      "10.21 kV/cm",
      "6.80 kV/cm"
    ],
    answerIndex: 1,
    answerText: "23.96 kV/cm"
  },
  {
    id: 80,
    question:
      "กรณีที่ผิวฉนวนลูกถ้วยสกปรกและมีค่าความคงทนต่อแรงดันไฟฟ้าน้อยกว่าอากาศรอบๆ จะเกิดปรากฏการณ์อะไร",
    choices: [
      "Spark over",
      "Corona",
      "Breakdown",
      "Flash over"
    ],
    answerIndex: 3,
    answerText: "Flash over"
  },
  {
    id: 81,
    question: "ข้อใดคือชื่อย่อ “สถาบันมาตรฐานทางไฟฟ้าของประเทศเยอรมัน”",
    choices: ["DIN", "ถูกทั้งข้อ ก และ ข", "GSI", "VDE"],
    answerIndex: 3,
    answerText: "VDE"
  },
  {
    id: 82,
    question: "เงื่อนไขการเกิดเบรกดาวน์ในก๊าซไฟฟ้าลบคืออะไร",
    choices: ["alfa > eta", "alfa < eta", "alfa = eta", "alfa >= eta"],
    answerIndex: 3,
    answerText: "alfa >= eta"
  },
  {
    id: 83,
    question: "ความเครียดสนามไฟฟ้า E จะแปรผันตรงกับค่าอะไร",
    choices: ["ศักย์ไฟฟ้า", "ความหนาแน่นของกระแส", "ความหนาแน่นของฟลักซ์", "ถูกทุกข้อ"],
    answerIndex: 3,
    answerText: "ถูกทุกข้อ"
  },
  {
    id: 84,
    question: "GIS ย่อมาจากคำว่าอะไร",
    choices: ["Gas Insulation System", "Gas Insulated Substation", "Geographic Information System", "Global Information System"],
    answerIndex: 1,
    answerText: "Gas Insulated Substation"
  },
  {
    id: 85,
    question: "กรณีเกิดฟ้าผ่าบนสายหุ้มฉนวนที่มีค่าคงที่ไดอิเล็กตริกเท่ากับ 4 จะเกิดคลื่นวิ่งด้วยความเร็วเท่าไร",
    choices: ["200 m/µs", "150 m/µs", "250 m/µs", "300 m/µs"],
    answerIndex: 1,
    answerText: "150 m/µs"
  },
  {
    id: 86,
    question: "ให้ Re = 10 Ω; L = 30 µH; กระแสฟ้าผ่า i = 30 kA; S = 40 kA/µs จะเกิดแรงดันสูงคร่อมเสาไฟฟ้าขนาดเท่าไร",
    choices: ["1300 kV", "1100 kV", "1500 kV", "800 kV"],
    answerIndex: 2,
    answerText: "1500 kV"
  },
  {
    id: 87,
    question: "มาตรฐานระดับการฉนวนสำหรับอุปกรณ์พิกัดแรงดัน 525 kV ต้องทำการทดสอบค่า BIL เท่ากับเท่าไร",
    choices: ["1425 kV", "1550 kV", "1300 kV", "1175 kV"],
    answerIndex: 1,
    answerText: "1550 kV"
  },
  {
    id: 88,
    question: "กำหนดค่า Zw ของสายส่ง = 480 Ω รัศมีตัวนำ = 2.2 cm จะต้องกำหนดระยะห่างสายส่งเป็นเท่าไร",
    choices: ["85.0 cm", "125.0 cm", "120.0 cm", "129.0 cm"],
    answerIndex: 2,
    answerText: "120.0 cm"
  },
  {
    id: 89,
    question: "กระแสฟ้าผ่าลงบนสายส่งชนิดอากาศ 1.5 kA, Za = 450 Ω, Zb = 50 Ω จะมีกระแสส่งผ่านที่จุดต่อเท่าไร",
    choices: ["1,166.67 A", "4,666.67 A", "2,400.00 A", "2,666.67 A"],
    answerIndex: 2,
    answerText: "2,400.00 A"
  },
  {
    id: 90,
    question: "กรณีสนามไฟฟ้าสม่ำเสมอ ถ้าระยะ d = 3.5 cm ที่ความดัน 1 bar SF6 จะเกิดเบรกดาวน์ที่ระดับแรงดันเท่าไร",
    choices: ["87.80 kV/cm", "87.80 kV", "307.30 kV/cm", "307.30 kV"],
    answerIndex: 3,
    answerText: "307.30 kV"
  },
  {
    id: 91,
    question: "ปัญหาโดยทั่วไปสำหรับเทคนิคไฟฟ้าแรงดันสูงคือ?",
    choices: ["สนามไฟฟ้า", "แรงดันไฟฟ้า", "ฉนวน", "ตัวนำ"],
    answerIndex: 2,
    answerText: "ฉนวน"
  },
  {
    id: 92,
    question: "ข้อใดเป็นสาเหตุทำให้เกิดแรงดันเกินสวิตชิ่ง",
    choices: ["การสวิตชิ่งบนสายส่ง", "การตัดวงจรที่มีตัวเก็บประจุ", "การลัดวงจร", "ถูกทุกข้อ"],
    answerIndex: 3,
    answerText: "ถูกทุกข้อ"
  },
  {
    id: 93,
    question: "จากรูป Emax จะอยู่บริเวณหมายเลขใด",
    image: "assets/img_93.jpg",
    choices: ["หมายเลข 1", "หมายเลข 2", "หมายเลข 3", "หมายเลข 4"],
    answerIndex: 1,
    answerText: "หมายเลข 2"
  },

// รวมทั้งหมด
// const allQuiz = [...quiz, ...quiz_more, ...quiz_more2, ...quiz_more3, ...quiz_more4];

  {
    id: 94,
    question: "กระแสฟ้าผ่าลงบนสายส่งอากาศ 40 kA, Za = 480 Ω, Zb = 50 Ω ขนานกับ Zc = 50 Ω จะมีแรงดันส่งผ่านไปยังจุดต่อสายเคเบิลเท่าไร",
    choices: [
      "14 MV",
      "2 MV",
      "16 MV",
      "1.9 MV"
    ],
    answerIndex: 3,
    answerText: "1.9 MV"
  },
  {
    id: 95,
    question: "อิเล็กโทรดระนาบที่มีโครงสร้างตามลักษณะขอบโค้งของโรโกฟสกี สนามไฟฟ้าจะมีความสม่ำเสมอ ณ บริเวณใด",
    choices: [
      "V = π/2",
      "V = π/3",
      "V = 2π",
      "V = π"
    ],
    answerIndex: 0,
    answerText: "V = π/2"
  },
  {
    id: 96,
    question: "กรณีที่ลูกถ้วยฉนวนมีโพรงอากาศภายใน จะเกิดเบรกดาวน์แบบใด",
    choices: [
      "เบรกดาวน์โดยตรง",
      "เบรกดาวน์แบบโคโรน่า",
      "เบรกดาวน์โดยอ้อม",
      "เบรกดาวน์เพียงบางส่วน"
    ],
    answerIndex: 3,
    answerText: "เบรกดาวน์เพียงบางส่วน"
  },
   {
    id: 97,
    question: "จากรูปเป็นรูปแบบการเกิด Partial discharge (PD) แบบใด",
    image: "assets/img_97.jpg",
    choices: ["External discharge", "Internal discharge", "Corona discharge", "Surface discharge"],
    answerIndex: 1,
    answerText: "Internal discharge"
  },
  {
    id: 98,
    question: "กรณีเกิดฟ้าผ่าลงบนสายส่งอากาศจะเกิดคลื่นวิ่งด้วยความเร็วเท่าไร",
    choices: [
      "150 m/µs",
      "250 m/µs",
      "300 m/µs",
      "200 m/µs"
    ],
    answerIndex: 2,
    answerText: "300 m/µs"
  },
  {
    id: 99,
    question: "ข้อใดกล่าวถูกต้องเกี่ยวกับฉนวนเหลว",
    choices: [
      "จุดติดไฟต่ำและความหนืดต่ำ",
      "จุดติดไฟต่ำและความหนืดสูง",
      "จุดติดไฟสูงและความหนืดสูง",
      "จุดติดไฟสูงและความหนืดต่ำ"
    ],
    answerIndex: 3,
    answerText: "จุดติดไฟสูงและความหนืดต่ำ"
  },
  {
    id: 100,
    question: "กรณีเกิดฟ้าผ่าลงบนสายส่งระบบ 500 kV โดยตรง มีกระแส = 6 kA อิมพีแดนซ์คลื่น = 450 Ω จะเกิดอะไรขึ้นที่ฉนวนลูกถ้วย",
    choices: [
      "ไม่เกิดอะไรขึ้นเลย",
      "เกิด Flash Over",
      "เกิด Puncture",
      "เกิด Spark Over"
    ],
    answerIndex: 0,
    answerText: "ไม่เกิดอะไรขึ้นเลย"
  }
];
// ===============================
// BUILD quizData (for index.html)
// ===============================

// รวมเฉพาะชุดที่มีอยู่จริงในไฟล์นี้
const _allSets = [quiz, quiz_more, quiz_more2].filter(Boolean);

// รวมเป็น array เดียว
const _flat = _allSets.flat();

// กัน id ซ้ำ: เอาข้อ “ตัวหลังสุด” ทับตัวก่อน
const _byId = new Map();
for (const q of _flat) _byId.set(q.id, q);

// แปลงฟิลด์ให้ตรงกับ index.html: ต้องมี answer เป็นเลข index
const quizData = Array.from(_byId.values())
  .sort((a, b) => a.id - b.id)
  .map(q => ({
    ...q,
    answer: typeof q.answerIndex === "number" ? q.answerIndex : 0
  }));

console.log("quizData ready ✅", quizData.length, "questions");
window.quizData = quizData;
