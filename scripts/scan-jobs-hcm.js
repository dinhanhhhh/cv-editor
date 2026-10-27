const fs = require('fs');

const mdPath = 'c:/Users/Admin/Documents/CV_Truong Dinh Anh/Phỏng vấn/cv-editor/jobs_for_tomorrow.md';
const raw = fs.readFileSync(mdPath, 'utf8');
const lines = raw.split(/\r?\n/);

const parsedRows = [];
for (const line of lines) {
  const t = line.trim();
  if (!t.startsWith('|')) continue;
  if (t.toLowerCase().includes('| stt |') || t.replace(/[\s|:\-]/g, '') === '') continue;

  const cells = t.split('|').map(c => c.trim());
  if (cells[0] === '') cells.shift();
  if (cells[cells.length - 1] === '') cells.pop();
  if (cells.length < 7) continue;

  const oldStt = parseInt(cells[0], 10);
  const role = cells[1];
  const company = cells[2];
  const location = cells[3];
  const dateInfo = cells[4];
  const scoreStr = cells[5];
  const desc = cells[6];
  const link = cells[7] || '';

  const scoreMatch = scoreStr.match(/([\d.]+)/);
  const scoreNum = scoreMatch ? parseFloat(scoreMatch[1]) : 0;

  let group = 'older';
  if (dateInfo.includes('27/10/2026') && dateInfo.includes('Mới cập nhật')) {
    group = '2026-10-27';
  } else if (dateInfo.includes('26/10/2026')) {
    group = '2026-10-26';
  } else if (dateInfo.includes('24/10/2026')) {
    group = '2026-10-24';
  }

  parsedRows.push({
    oldStt,
    role,
    company,
    location,
    dateInfo,
    scoreStr,
    scoreNum,
    desc,
    link,
    group
  });
}

const groupsOrder = [
  {
    key: '2026-10-27',
    title: '### 📅 Ngày quét: 27/10/2026 (Mới nhất)'
  },
  {
    key: '2026-10-26',
    title: '### 📅 Ngày quét: 26/10/2026'
  },
  {
    key: '2026-10-24',
    title: '### 📅 Ngày quét: 24/10/2026'
  },
  {
    key: 'older',
    title: '### 📅 Các đợt quét trước còn hạn (16/10/2026 – 23/10/2026)'
  }
];

let currentStt = 1;
const sttByCompany = new Map();
const tableSections = [];

for (const g of groupsOrder) {
  const items = parsedRows
    .filter(r => r.group === g.key)
    .sort((a, b) => {
      if (b.scoreNum !== a.scoreNum) return b.scoreNum - a.scoreNum;
      return a.oldStt - b.oldStt;
    });

  const rowsMd = items.map(item => {
    const newStt = currentStt++;
    if (!sttByCompany.has(item.company)) {
      sttByCompany.set(item.company, newStt);
    }
    return `| ${newStt} | ${item.role} | ${item.company} | ${item.location} | ${item.dateInfo} | ${item.scoreStr} | ${item.desc} | ${item.link} |`;
  });

  tableSections.push(
    `${g.title} (${items.length} việc làm)\n\n` +
    `| STT | Vị trí | Công ty | Địa điểm | Ngày đăng / Hạn nộp | Điểm (/10) | Tóm tắt yêu cầu & Lý do khớp | Link ứng tuyển |\n` +
    `|:---:|:---|:---|:---|:---:|:---:|:---|:---|\n` +
    rowsMd.join('\n')
  );
}

const getStt = (substr) => {
  for (const [comp, stt] of sttByCompany.entries()) {
    if (comp.toLowerCase().includes(substr.toLowerCase())) return stt;
  }
  return '?';
};

const outMd = `# DANH SÁCH VIỆC LÀM PHÙ HỢP (INTERN / FRESHER) - TP. HỒ CHÍ MINH

> **Thời gian khởi tạo:** 16/10/2026 (Cập nhật & sắp xếp theo ngày quét mới nhất: 27/10/2026)  
> **Ứng viên:** Trương Đình Anh - Cử nhân Khoa học Máy tính (ĐH Mở TP.HCM)  
> **Cấp độ mục tiêu:** Intern, Thực tập sinh, Fresher, Trainee, Junior 0-1 năm kinh nghiệm  
> **Vị trí cốt lõi:** Backend Developer (Node.js/Express), Fullstack Developer (Node.js + React/Next.js), Frontend Developer (React/Next.js/TypeScript), AI & Automation Developer  
> **Nguồn quét đa kênh:** ITviec, TopCV, Glints, LinkedIn Jobs, TopDev, CareerViet, VietnamWorks & Website Tuyển dụng trực tiếp của các công ty tại TP.HCM  
> **Khu vực bắt buộc:** **100% tại TP. Hồ Chí Minh & Remote** (Đã lọc bỏ hoàn toàn Hà Nội, Đà Nẵng và các vị trí trái ngành)  
> **Thứ tự sắp xếp:** Chia theo **Ngày quét từ mới nhất đến cũ hơn** (\`27/10/2026\` → \`26/10/2026\` → \`24/10/2026\` → \`16/10–23/10/2026\`), trong mỗi ngày ưu tiên điểm khớp từ cao xuống thấp.

---

## Bảng tổng hợp công việc đạt tiêu chuẩn tại TP. Hồ Chí Minh & Remote (${parsedRows.length} việc làm)

${tableSections.join('\n\n---\n\n')}

---

## 🎯 KẾ HOẠCH HÀNH ĐỘNG NỘP HỒ SƠ TẠI TP. HỒ CHÍ MINH & REMOTE (CHIẾN LƯỢC 3 BƯỚC)

### 🥇 Nhóm 1: Top Ưu Tiên Nộp Sáng Sớm (Điểm 9.5 - 10/10 - Siêu Khớp Profile & Mới Quét)
Nộp ngay trong khung giờ vàng 08:30 - 10:00 sáng để CV nằm trên cùng hộp thư HR:
1. **#${getStt('Goldsun Focus Media')} Goldsun Focus Media (Quận 1, TP.HCM)** - *AI Application Developer (Prompt Engineering, RAG, Agentic AI)* - Khớp 100% định hướng AI Agent & Automation.
2. **#${getStt('GIẢI PHÁP TRÍ TUỆ SỐ')} Giải Pháp Trí Tuệ Số (Tân Phú / Tân Bình, TP.HCM)** - *Backend Developer - AI Agent & Automation (Node.js / NestJS / Python)* - API Streaming, RAG & Automation.
3. **#${getStt('FPT Telecom')} FPT Telecom (Trung tâm SCC, TP.HCM)** - *React JS Developer Intern (Lương thực tập 6 - 8M)* - Đào tạo 1:1 Sư phụ - Đệ tử, cam kết HĐLĐ chính thức.
4. **#${getStt('Sharework')} Sharework (Tân Bình, TP.HCM)** - *AI Engineer Intern / Fresher (Prompting, LLM & AI Agents)* - Lương hỗ trợ 3 - 12M/tháng.
5. **#${getStt('Icon Consulting')} Icon Consulting Group (Quận 1, TP.HCM)** - *AI-Native Full-Stack Developer Intern* - Node.js, React, TypeScript, MongoDB & AI-augmented coding.
6. **#${getStt('FPT Long Châu')} FPT Long Châu (TP.HCM)** - *Thực Tập Sinh Kỹ Thuật (AI-Agents Team)* - React 18, TypeScript, Python, MCP, PostgreSQL & Claude/Cursor.
7. **#${getStt('TAPTAP')} TAPTAP (Quận 1, TP.HCM)** - *Software Engineer Intern (Backend Node.js / Frontend React)* - Khớp 100% stack & tư duy AI tool.
8. **#${getStt('Saigon Technology')} Saigon Technology (Phú Nhuận / Tân Bình, TP.HCM)** - *Fresher / Junior Fullstack Developer (ReactJS, Next.js, Node.js, AI-Driven)*.
9. **#${getStt('ISB VIỆT NAM')} ISB Việt Nam - IVC (Tân Bình, TP.HCM)** - *Intern Frontend (React/Nextjs)* - Hỗ trợ 4.2 - 6.9M/tháng.
10. **#${getStt('HPT Vietnam')} HPT Vietnam (TP.HCM)** - *Full-Stack Developer Intern (ReactJS & NodeJS)* - Cực khớp cả FE lẫn BE.
11. **#${getStt('OALPHA')} OALPHA Platform (TP.HCM)** - *Thực tập sinh Backend Developer (Go / Node.js)* - Node.js + AI-assisted coding.
12. **#${getStt('Tino Innovation')} Tino Innovation (TP. Thủ Đức, TP.HCM)** - *NodeJS Intern / Fresher Developer* - ExpressJS/NestJS, MongoDB/SQL, REST API.
13. **#${getStt('Money Forward')} Money Forward Vietnam (TP.HCM)** - *Software Engineer Intern (TypeScript / ReactJS / Node.js)* - Chuẩn quốc tế, cấp MacBook Pro.
14. **#${getStt('ONE Tech Stop')} ONE Tech Stop Vietnam (TP.HCM)** - *Full-Stack Developer Intern/Fresher (ReactJS / NodeJS / NextJS)*.
15. **#${getStt('TymeX')} TymeX & #${getStt('Employment Hero')} Employment Hero (Quận 1, TP.HCM)** - *Intern/Fresher Software Engineer (AI-First & Fullstack)*.

### 🥈 Nhóm 2: Nộp Buổi Chiều (13:30 - 15:30) - Các Doanh Nghiệp Công Nghệ Lớn & Môi Trường Quốc Tế
1. **#${getStt('Thương mại TT')} Công ty TT (KĐT Vạn Phúc, TP. Thủ Đức)** - *Backend Developer Intern / Fresher (NestJS, Redis, Microservices)*.
2. **#${getStt('Solazu')} Solazu JSC (Bình Thạnh, TP.HCM)** - *NodeJS Developer / Intern (Dự án Silicon Valley)*.
3. **#${getStt('Tanca')} Tanca (Bình Thạnh, TP.HCM)** - *Backend Developer Internship (HRM SaaS & HR Automation)*.
4. **#${getStt('OrgScale')} OrgScale Recruitment Vietnam (Remote)** - *Remote Fullstack Developer (TypeScript, Node.js, NestJS)*.
5. **#${getStt('FPT IS')} FPT IS (TP.HCM)** - *Fullstack Developer Intern (Java Spring Boot + ReactJS)*.
6. **#${getStt('Orient Software')} Orient Software (Etown Tân Bình, TP.HCM)** - *Software Developer Intern / Fresher (Node.js / ReactJS / TypeScript)*.
7. **#${getStt('NFQ Asia')} NFQ Asia (Phú Nhuận, TP.HCM)** - *Fresher / Junior Software Engineer & AI Intern (Node.js / Python / React)*.
8. **#${getStt('Netcompany')} Netcompany Vietnam (Quận 1, TP.HCM)** - *Talented IT Graduates / Fresher Software Developer (React, Node.js, TS)*.
9. **#${getStt('Silicon Stack')} Silicon Stack Vietnam (Gò Vấp, TP.HCM)** - *Software Engineer Intern / Fresher (Full-Stack NodeJS & ReactJS)*.
10. **#${getStt('Katalon')} Katalon (Quận 7, TP.HCM)** - *Katalon Advanced Internship Program (Software / Web Engineer Intern)*.
11. **#${getStt('TMA Tech')} TMA Tech Group (Quận 12 / Phú Nhuận, TP.HCM)** - *Fresher Developer TFT Program* - Hưởng 100% lương, đào tạo bài bản.
12. **#${getStt('NashTech')} NashTech & #${getStt('KMS Technology')} KMS Technology (Tân Bình, TP.HCM)** - *Chương trình Fresher / Intern dự án toàn cầu*.
13. **#${getStt('NAB Innovation')} NAB Innovation Centre Vietnam (Quận 1, TP.HCM)** - *StarCamp® Tech Academy (JS/Node.js/React/AWS)*.
14. **#${getStt('Haravan')} Haravan (Quận 11, TP.HCM)** - *NodeJS Engineer (Fresher / Junior)*.

### 🥉 Nhóm 3: Các Cơ Hội AI & Automation Chuyên Biệt tại TP.HCM
Dùng phiên bản CV nhấn mạnh dự án *"AI Agent Automation Platform"* & *"CV Editor"* để nộp:
1. **#${getStt('Goldsun Focus Media')} Goldsun Focus Media (Quận 1, TP.HCM)** - *AI Application Developer (Prompt Engineering, RAG, Agentic AI)*
2. **#${getStt('GIẢI PHÁP TRÍ TUỆ SỐ')} Giải Pháp Trí Tuệ Số (Tân Phú / Tân Bình, TP.HCM)** - *Backend Developer - AI Agent & Automation (Node.js / NestJS / Python)*
3. **#${getStt('Sharework')} Sharework (Tân Bình, TP.HCM)** - *AI Engineer (Intern / Fresher level: Prompting, LLM & AI Agents)*
4. **#${getStt('FPT Long Châu')} FPT Long Châu (TP.HCM)** - *Thực Tập Sinh Kỹ Thuật (AI-Agents Team)*
5. **#${getStt('Icon Consulting')} Icon Consulting Group (Quận 1, TP.HCM)** - *AI-Native Full-Stack Developer Intern*
6. **#${getStt('Bosch Global')} Bosch Global Software Technologies (Tân Bình, TP.HCM)** - *AI Automation Engineer (Fresher / Junior)*
7. **#${getStt('HomeNest')} HomeNest Software (TP. Thủ Đức, TP.HCM)** - *Thực Tập Sinh AI Engineer (LLM / RAG / API)*
8. **#${getStt('Phu Hung')} Chứng khoán Phú Hưng - PHS (Quận 7, TP.HCM)** - *Data & Product AI Automation Intern*
9. **#${getStt('Axen Property')} Axen Property, #${getStt('MCI')} MCI Solutions & #${getStt('Innotech')} Innotech Vietnam (TP.HCM)** - *AI & Workflow Automation Intern*

---

## 📋 CHECKLIST CHUẨN BỊ TRƯỚC KHI BẤM NỘP
- [ ] **Bản in CV A4:** Dùng tính năng *In / Tải PDF* trên CV Editor để xuất file PDF sắc nét đúng 1 trang A4.
- [ ] **Portfolio GitHub:** Đảm bảo các repo dự án (AI Automation, CV Editor, v.v.) có README chỉn chu, ảnh chụp demo hoặc link live deploy.
- [ ] **Email Ứng Tuyển:** Sử dụng mẫu thư ứng tuyển có sẵn trong tab *Email Ứng tuyển* của CV Editor để chỉnh sửa ngắn gọn, chuyên nghiệp.
- [ ] **Theo dõi phản hồi:** Cập nhật trạng thái từng đơn ứng tuyển vào bảng tiến độ hàng ngày.
`;

fs.writeFileSync(mdPath, outMd, 'utf8');
console.log('Successfully reordered', parsedRows.length, 'jobs by scan date descending!');
