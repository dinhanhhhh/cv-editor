const fs = require('fs');
const path = require('path');

const mdPath = path.resolve('c:/Users/Admin/Documents/CV_Truong Dinh Anh/Phỏng vấn/cv-editor/jobs_for_tomorrow.md');
const raw = fs.readFileSync(mdPath, 'utf8');
const lines = raw.split(/\r?\n/);

const newJobs = [
  {
    role: '**Fullstack Developer (ReactJS + NodeJS) - Hybrid Working**',
    company: 'CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ VEXERE',
    location: 'Quận 4, TP. Hồ Chí Minh (Hybrid)',
    dateInfo: 'Mới cập nhật 01/11/2026 (TopCV - Active)',
    scoreStr: '`9.8/10`',
    scoreNum: 9.8,
    desc: 'Nền tảng bán vé & giải pháp logistics hàng đầu VN; xây dựng ứng dụng web và microservices hiệu năng cao; stack Node.js, Express.js, ReactJS, TypeScript, PostgreSQL, Docker, RESTful APIs; chế độ làm việc Hybrid tại Quận 4. Cực khớp 100% trọn bộ kỹ năng Fullstack Node/Express + React + PostgreSQL của Trương Đình Anh.',
    link: '[Ứng tuyển](https://www.topcv.vn/brand/vexere)',
    group: '2026-11-01'
  },
  {
    role: '**AI Engineer Intern (NLP, LLM & Machine Learning)**',
    company: 'Công ty TNHH bTaskee (bTaskee Vietnam)',
    location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 01/11/2026 (Glints - Active)',
    scoreStr: '`9.6/10`',
    scoreNum: 9.6,
    desc: 'Nền tảng dịch vụ tiện ích gia đình O2O hàng đầu Đông Nam Á; tham gia nghiên cứu và triển khai mô hình NLP/LLM, thuật toán gợi ý/matching và xây dựng real-time feature pipelines; yêu cầu SV năm cuối/mới tốt nghiệp Khoa học Máy tính. Rất khớp nền tảng CS và thế mạnh AI Automation của Anh.',
    link: '[Ứng tuyển](https://glints.com/vn/companies/btaskee)',
    group: '2026-11-01'
  },
  {
    role: '**Frontend Developer (JavaScript, TypeScript, NodeJS, LLM)**',
    company: 'Sqreem Technologies (VN) Pte. Ltd.',
    location: 'Viettel Tower, 285 Cách Mạng Tháng Tám, Quận 10, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 01/11/2026 (ITviec - Active)',
    scoreStr: '`9.5/10`',
    scoreNum: 9.5,
    desc: 'Tập đoàn công nghệ toàn cầu về AI & Behavioral Data Science; phát triển ứng dụng Web Frontend hiện đại tích hợp các mô hình LLM và backend NodeJS; stack JavaScript, TypeScript, NodeJS, HTML5/CSS3, Python, LLM. Cực kỳ khớp bộ ba Frontend TS/React, Backend NodeJS và tư duy AI của Anh.',
    link: '[Ứng tuyển](https://itviec.com/companies/sqreem-technologies-vn-pte-ltd)',
    group: '2026-11-01'
  },
  {
    role: '**Thực tập sinh Frontend Web Developer (React.js, Next.js)**',
    company: 'Công ty Cổ phần Giải pháp Hệ thống Long Vân',
    location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 01/11/2026 (Glints - Active)',
    scoreStr: '`9.4/10`',
    scoreNum: 9.4,
    desc: 'Đơn vị tiên phong về Cloud & Data Center tại VN; phát triển giao diện ứng dụng web dịch vụ đám mây bằng React.js, Next.js, tối ưu responsive UI/UX, tích hợp RESTful APIs và quản lý state. Rất khớp chuyên môn Frontend React/Next.js/TypeScript của Anh.',
    link: '[Ứng tuyển](https://glints.com/vn/companies/long-van-system-solution)',
    group: '2026-11-01'
  },
  {
    role: '**Junior/Middle FullStack Engineer (NodeJS, ReactJS, Python, PostgreSQL)**',
    company: 'kSynerX Vietnam',
    location: '305C/8A Nguyễn Văn Trỗi, Tân Bình / Phú Nhuận, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 01/11/2026 (ITviec - Active)',
    scoreStr: '`9.3/10`',
    scoreNum: 9.3,
    desc: 'Phát triển sản phẩm Big Data Analytics & giải pháp AI chuyên sâu cho thị trường Bắc Mỹ & Nhật Bản; stack NodeJS, ReactJS, Python, PostgreSQL, Kafka, Docker; môi trường chuẩn quốc tế. Cực khớp nền tảng Fullstack NodeJS + ReactJS kết hợp CSDL quan hệ PostgreSQL của Anh.',
    link: '[Ứng tuyển](https://itviec.com/it-jobs/junior-middle-fullstack-engineer-python-java-nodejs-ksynerx-vietnam-4952)',
    group: '2026-11-01'
  },
  {
    role: '**Internship Full Stack JavaScript (ReactJS, NodeJS / NestJS)**',
    company: 'CÔNG TY CỔ PHẦN TVT GROUP',
    location: 'CVPM Quang Trung, Phường Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 01/11/2026 (TopCV - Active)',
    scoreStr: '`9.2/10`',
    scoreNum: 9.2,
    desc: 'Phát triển giao diện người dùng web với ReactJS và xây dựng backend APIs với NodeJS/NestJS; môi trường công nghệ tại CVPM Quang Trung; hỗ trợ mộc báo cáo thực tập và lộ trình lên nhân viên chính thức. Khớp 100% trọn bộ kỹ năng Fullstack JS (React/Node/Express) của Anh.',
    link: '[Ứng tuyển](https://www.topcv.vn/brand/tvtgroup)',
    group: '2026-11-01'
  },
  {
    role: '**AI & Automation Engineer (Python, Automation Workflows & REST APIs)**',
    company: 'CÔNG TY TNHH THIẾT KẾ HỆ THỐNG CORSAIR',
    location: '95B-97-99 Trần Quang Diệu, Phường 13, Quận 3, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 01/11/2026 (TopCV - Active)',
    scoreStr: '`9.1/10`',
    scoreNum: 9.1,
    desc: 'Chi nhánh R&D phần mềm thuộc tập đoàn Corsair (Mỹ); phát triển các luồng tự động hóa quy trình (Automation Workflows), kiểm thử phần mềm tự động và tích hợp REST APIs bằng Python; môi trường đa quốc gia chuyên nghiệp. Rất khớp năng lực AI Automation & Python của Anh.',
    link: '[Ứng tuyển](https://www.topcv.vn/tim-viec-lam?keyword=Corsair+Automation)',
    group: '2026-11-01'
  },
  {
    role: '**AI Engineer Intern (NLP, LLMs & GenAI Integration)**',
    company: 'Công ty TNHH Reputyze Asia',
    location: 'Tầng 3, AGA House, 72/24 Phan Đăng Lưu, Phường 5, Quận Phú Nhuận, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 01/11/2026 (Glints - Active)',
    scoreStr: '`9.0/10`',
    scoreNum: 9.0,
    desc: 'MarTech Agency ứng dụng AI chuyên sâu; nghiên cứu và triển khai mô hình Deep Learning/NLP, tích hợp các API GenAI (OpenAI, Gemini) vào backend qua RESTful APIs; có Head of Tech hướng dẫn 1-1; phụ cấp thực tập linh hoạt. Cực khớp thế mạnh AI Automation & tích hợp API của Anh.',
    link: '[Ứng tuyển](https://glints.com/vn/companies/reputyze-asia)',
    group: '2026-11-01'
  }
];

const parsedRows = [];
let currentGroup = '';

for (const line of lines) {
  const t = line.trim();
  if (t.startsWith('### 📅')) {
    if (t.includes('31/10/2026')) currentGroup = '2026-10-31';
    else if (t.includes('30/10/2026')) currentGroup = '2026-10-30';
    else if (t.includes('29/10/2026')) currentGroup = '2026-10-29';
    else if (t.includes('27/10/2026')) currentGroup = '2026-10-27';
    else if (t.includes('26/10/2026')) currentGroup = '2026-10-26';
    else if (t.includes('24/10/2026')) currentGroup = '2026-10-24';
    else if (t.includes('16/10/2026')) currentGroup = 'older';
    continue;
  }
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
    group: currentGroup
  });
}

console.log('Existing valid rows parsed:', parsedRows.length);
const allRows = [...newJobs, ...parsedRows];
console.log('Total rows after adding 01/11/2026:', allRows.length);

const groupsOrder = [
  {
    key: '2026-11-01',
    title: '### 📅 Ngày quét: 01/11/2026 (Mới nhất)'
  },
  {
    key: '2026-10-31',
    title: '### 📅 Ngày quét: 31/10/2026'
  },
  {
    key: '2026-10-30',
    title: '### 📅 Ngày quét: 30/10/2026'
  },
  {
    key: '2026-10-29',
    title: '### 📅 Ngày quét: 29/10/2026'
  },
  {
    key: '2026-10-27',
    title: '### 📅 Ngày quét: 27/10/2026'
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
  const items = allRows
    .filter(r => r.group === g.key)
    .sort((a, b) => {
      if (b.scoreNum !== a.scoreNum) return b.scoreNum - a.scoreNum;
      return (a.oldStt || 0) - (b.oldStt || 0);
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

> **Thời gian khởi tạo:** 16/10/2026 (Cập nhật & sắp xếp theo ngày quét mới nhất: 01/11/2026)  
> **Ứng viên:** Trương Đình Anh - Cử nhân Khoa học Máy tính (ĐH Mở TP.HCM)  
> **Cấp độ mục tiêu:** Intern, Thực tập sinh, Fresher, Trainee, Junior 0-1 năm kinh nghiệm  
> **Vị trí cốt lõi:** Backend Developer (Node.js/Express), Fullstack Developer (Node.js + React/Next.js), Frontend Developer (React/Next.js/TypeScript), AI & Automation Developer  
> **Nguồn quét đa kênh:** ITviec, TopCV, Glints, LinkedIn Jobs, TopDev, CareerViet, VietnamWorks & Website Tuyển dụng trực tiếp của các công ty tại TP.HCM  
> **Khu vực bắt buộc:** **100% tại TP. Hồ Chí Minh & Remote** (Đã lọc bỏ hoàn toàn Hà Nội, Đà Nẵng và các vị trí trái ngành)  
> **Thứ tự sắp xếp:** Chia theo **Ngày quét từ mới nhất đến cũ hơn** (\`01/11/2026\` → \`31/10/2026\` → \`30/10/2026\` → \`29/10/2026\` → \`27/10/2026\` → \`26/10/2026\` → \`24/10/2026\` → \`16/10–23/10/2026\`), trong mỗi ngày ưu tiên điểm khớp từ cao xuống thấp.

---

## Bảng tổng hợp công việc đạt tiêu chuẩn tại TP. Hồ Chí Minh & Remote (${allRows.length} việc làm)

${tableSections.join('\n\n---\n\n')}

---

## 🎯 KẾ HOẠCH HÀNH ĐỘNG NỘP HỒ SƠ TẠI TP. HỒ CHÍ MINH & REMOTE (CHIẾN LƯỢC 3 BƯỚC)

### 🥇 Nhóm 1: Top Ưu Tiên Nộp Sáng Sớm (Điểm 9.5 - 10/10 - Siêu Khớp Profile & Mới Quét)
Nộp ngay trong khung giờ vàng 08:30 - 10:00 sáng để CV nằm trên cùng hộp thư HR:
1. **#${getStt('VEXERE')} VEXERE (Quận 4, TP.HCM)** - *Fullstack Developer (ReactJS + NodeJS) - Hybrid Working* - Nền tảng vé xe & logistics hàng đầu VN, cực khớp 100% stack Node/Express/React/PostgreSQL.
2. **#${getStt('bTaskee')} bTaskee Vietnam (TP. Thủ Đức, TP.HCM)** - *AI Engineer Intern (NLP, LLM & Machine Learning)* - O2O platform lớn, cực khớp nền tảng CS và thế mạnh AI Automation.
3. **#${getStt('Sqreem')} Sqreem Technologies (Quận 10, TP.HCM)** - *Frontend Developer (JavaScript, TypeScript, NodeJS, LLM)* - AI & Big Data MNC, cực khớp Frontend TS/React, Node và LLM.
4. **#${getStt('Aioz')} Aioz Việt Nam - AIOZ VN (Quận 1, TP.HCM)** - *Frontend Developer (ReactJS) - AI Team* - Lương 15 - 22M, BHXH full lương, cực khớp React/Next.js/TypeScript & AI Team.
5. **#${getStt('TEANIS')} TEANIS Solution (Quận 3, TP.HCM)** - *Fresher Backend Developer (NodeJS / NestJS)* - Mentor Tech Lead >10 năm KN kèm 1-1, cực khớp Backend NodeJS & bằng Cử nhân CS.
6. **#${getStt('KIT System')} KIT System Solutions Việt Nam (Bình Thạnh, TP.HCM)** - *Intern Fullstack Developer (NodeJS / ReactJS & AI Exposure)* - Doanh nghiệp FDI Nhật Bản, khớp 100% stack Fullstack Node + React.
7. **#${getStt('MB Bank')} MB Bank (TP.HCM)** - *MB Trainee - AI Engineer (Fresher / Intern)* - Khối ngân hàng số, đãi ngộ & phụ cấp hàng đầu, cực khớp nền tảng CS & AI Automation.
8. **#${getStt('ISB')} ISB Việt Nam - IVC (Tân Bình, TP.HCM)** - *Intern Fullstack Developer (AI & Automation Focus: React, Node, Ollama, n8n)* - Trợ cấp 4.0 - 6.9M, cực kỳ khớp 100% cả Fullstack lẫn AI Agent/Automation.
9. **#${getStt('Sichain')} Sichain (Thủ Đức, TP.HCM)** - *Fresher Front End / Fullstack (ReactJS, ExpressJS, MongoDB, TypeScript)* - Lương từ 8M, cực khớp 100% stack chủ lực.
10. **#${getStt('AS SOLUTIONS')} AS SOLUTIONS (Phú Nhuận, TP.HCM)** - *Frontend Developer (React, TypeScript) - Fresher/Junior* - Lương 10 - 21M, bảo hiểm cao cấp, đãi ngộ vượt trội.
11. **#${getStt('Mini Min')} Mini Min Retail (Thủ Đức, TP.HCM)** - *Backend Intern (Node.js / NestJS / Socket.IO / SQL / NoSQL)* - Hệ sinh thái bán lẻ & realtime socket.
12. **#${getStt('Alliance IT')} Alliance IT Service (Thủ Đức, TP.HCM)** - *AI Engineer Intern / AI Researcher (LLMs, LoRA, QLoRA, RAG, Python)* - Rất khớp thế mạnh AI Automation.
13. **#${getStt('MLTech')} MLTech Soft (Tân Bình, TP.HCM)** - *Fullstack Intern (ReactJS, NodeJS / ExpressJS / NestJS, MongoDB, MySQL)* - Cực khớp 100% stack chủ lực.
14. **#${getStt('Seedcom')} Seedcom Food - Logistics (Quận 7, TP.HCM)** - *Web / Fullstack Developer Intern (Kingfoodmart & OneLife Platform)* - Hỗ trợ 5M/tháng, thương mại điện tử lớn.
15. **#${getStt('TOS')} TOS JSC (Quận 4, TP.HCM)** - *Thực Tập Sinh ReactJS & Next.js Developer* - Trợ cấp từ 3M, tối ưu Core Web Vitals & Next.js.
16. **#${getStt('Goldsun Focus')} Goldsun Focus Media (Quận 1, TP.HCM)** - *AI Application Developer (Prompt Engineering, RAG, Agentic AI)* - Khớp 100% định hướng AI Agent & Automation.
17. **#${getStt('TRÍ TUỆ SỐ')} Giải Pháp Trí Tuệ Số (Tân Phú / Tân Bình, TP.HCM)** - *Backend Developer - AI Agent & Automation (Node.js / NestJS / Python)* - API Streaming, RAG & Automation.
18. **#${getStt('FPT Telecom')} FPT Telecom (Trung tâm SCC, TP.HCM)** - *React JS Developer Intern (Lương thực tập 6 - 8M)* - Đào tạo 1:1 Sư phụ - Đệ tử, cam kết HĐLĐ chính thức.
19. **#${getStt('Sharework')} Sharework (Tân Bình, TP.HCM)** - *AI Engineer Intern / Fresher (Prompting, LLM & AI Agents)* - Lương hỗ trợ 3 - 12M/tháng.
20. **#${getStt('Icon Consulting')} Icon Consulting Group (Quận 1, TP.HCM)** - *AI-Native Full-Stack Developer Intern* - Node.js, React, TypeScript, MongoDB & AI-augmented coding.
21. **#${getStt('FPT Long Châu')} FPT Long Châu (TP.HCM)** - *Thực Tập Sinh Kỹ Thuật (AI-Agents Team)* - React 18, TypeScript, Python, MCP, PostgreSQL & Claude/Cursor.
22. **#${getStt('TAPTAP')} TAPTAP (Quận 1, TP.HCM)** - *Software Engineer Intern (Backend Node.js / Frontend React)* - Khớp 100% stack & tư duy AI tool.
23. **#${getStt('Saigon Technology')} Saigon Technology (Phú Nhuận / Tân Bình, TP.HCM)** - *Fresher / Junior Fullstack Developer (ReactJS, Next.js, Node.js, AI-Driven)*.
24. **#${getStt('HPT Vietnam')} HPT Vietnam (TP.HCM)** - *Full-Stack Developer Intern (ReactJS & NodeJS)* - Cực khớp cả FE lẫn BE.
25. **#${getStt('OALPHA')} OALPHA Platform (TP.HCM)** - *Thực tập sinh Backend Developer (Go / Node.js)* - Node.js + AI-assisted coding.
26. **#${getStt('Tino Innovation')} Tino Innovation (TP. Thủ Đức, TP.HCM)** - *NodeJS Intern / Fresher Developer* - ExpressJS/NestJS, MongoDB/SQL, REST API.
27. **#${getStt('Money Forward')} Money Forward Vietnam (TP.HCM)** - *Software Engineer Intern (TypeScript / ReactJS / Node.js)* - Chuẩn quốc tế, cấp MacBook Pro.
28. **#${getStt('ONE Tech Stop')} ONE Tech Stop Vietnam (TP.HCM)** - *Full-Stack Developer Intern/Fresher (ReactJS / NodeJS / NextJS)*.
29. **#${getStt('TymeX')} TymeX & #${getStt('Employment Hero')} Employment Hero (Quận 1, TP.HCM)** - *Intern/Fresher Software Engineer (AI-First & Fullstack)*.

### 🥈 Nhóm 2: Nộp Buổi Chiều (13:30 - 15:30) - Các Doanh Nghiệp Công Nghệ Lớn & Môi Trường Quốc Tế
1. **#${getStt('Long Vân')} Long Van System Solution (TP. Thủ Đức, TP.HCM)** - *Thực tập sinh Frontend Web Developer (React.js, Next.js)* - Cloud & DC provider lớn.
2. **#${getStt('kSynerX')} kSynerX Vietnam (Tân Bình / Phú Nhuận, TP.HCM)** - *Junior/Middle FullStack Engineer (NodeJS, ReactJS, Python, PostgreSQL)*.
3. **#${getStt('TVT GROUP')} TVT GROUP (Quận 12, TP.HCM)** - *Internship Full Stack JavaScript (ReactJS, NodeJS / NestJS)* - CVPM Quang Trung.
4. **#${getStt('HRM Labs')} HRM Labs (Quận 1, TP.HCM)** - *Software Engineer Intern - Fullstack (React.js, Node.js, PostgreSQL)* - Nền tảng SaaS HRM đa quốc gia.
5. **#${getStt('STYL Solutions')} STYL Solutions (KĐT Sala, TP. Thủ Đức, TP.HCM)** - *Software Engineer Intern (Fullstack & AI Integration)* - FDI Singapore, flat structure.
6. **#${getStt('Tanca')} Tanca (Bình Thạnh, TP.HCM)** - *Frontend Developer Internship (ReactJS) & Backend Developer Internship*.
7. **#${getStt('UNIT Technology')} Unit Corp (Quận 3, TP.HCM)** - *Fresher Frontend Developer (ReactJS / RESTful API)* - Thưởng tháng 13, dự án ngân hàng số.
8. **#${getStt('CHECKMATE')} CHECKMATE (Quận 7, TP.HCM)** - *Frontend Developer Intern (Web UI/UX & API Integration)* - Trợ cấp 3 - 4M/tháng.
9. **#${getStt('Splus-Software')} Splus-Software (Tân Bình, TP.HCM)** - *Fresher / Junior Developer (ReactJS / NodeJS / Web Services)*.
10. **#${getStt('Oryza')} Oryza Systems (Bình Thạnh, TP.HCM)** - *AI Application & Software Engineer Intern (Python, Node.js, AI Integration)*.
11. **#${getStt('Thương mại TT')} Công ty TT (KĐT Vạn Phúc, TP. Thủ Đức)** - *Backend Developer Intern / Fresher (NestJS, Redis, Microservices)*.
12. **#${getStt('Solazu')} Solazu JSC (Bình Thạnh, TP.HCM)** - *NodeJS Developer / Intern (Dự án Silicon Valley)*.
13. **#${getStt('OrgScale')} OrgScale Recruitment Vietnam (Remote)** - *Remote Fullstack Developer (TypeScript, Node.js, NestJS)*.
14. **#${getStt('FPT IS')} FPT IS (TP.HCM)** - *Fullstack Developer Intern (Java Spring Boot + ReactJS)*.
15. **#${getStt('Orient Software')} Orient Software (Etown Tân Bình, TP.HCM)** - *Software Developer Intern / Fresher (Node.js / ReactJS / TypeScript)*.
16. **#${getStt('NFQ Asia')} NFQ Asia (Phú Nhuận, TP.HCM)** - *Fresher / Junior Software Engineer & AI Intern (Node.js / Python / React)*.
17. **#${getStt('Netcompany')} Netcompany Vietnam (Quận 1, TP.HCM)** - *Talented IT Graduates / Fresher Software Developer (React, Node.js, TS)*.
18. **#${getStt('Silicon Stack')} Silicon Stack Vietnam (Gò Vấp, TP.HCM)** - *Software Engineer Intern / Fresher (Full-Stack NodeJS & ReactJS)*.
19. **#${getStt('Katalon')} Katalon (Quận 7, TP.HCM)** - *Katalon Advanced Internship Program (Software / Web Engineer Intern)*.
20. **#${getStt('TMA Tech')} TMA Tech Group (Quận 12 / Phú Nhuận, TP.HCM)** - *Fresher Developer TFT Program* - Hưởng 100% lương, đào tạo bài bản.
21. **#${getStt('NashTech')} NashTech & #${getStt('KMS Technology')} KMS Technology (Tân Bình, TP.HCM)** - *Chương trình Fresher / Intern dự án toàn cầu*.
22. **#${getStt('NAB Innovation')} NAB Innovation Centre Vietnam (Quận 1, TP.HCM)** - *StarCamp® Tech Academy (JS/Node.js/React/AWS)*.
23. **#${getStt('Haravan')} Haravan (Quận 11, TP.HCM)** - *NodeJS Engineer (Fresher / Junior)*.

### 🥉 Nhóm 3: Các Cơ Hội AI & Automation Chuyên Biệt tại TP.HCM
Dùng phiên bản CV nhấn mạnh dự án *"AI Agent Automation Platform"* & *"CV Editor"* để nộp:
1. **#${getStt('bTaskee')} bTaskee Vietnam (TP. Thủ Đức, TP.HCM)** - *AI Engineer Intern (NLP, LLM & Machine Learning)*
2. **#${getStt('Sqreem')} Sqreem Technologies (Quận 10, TP.HCM)** - *Frontend Developer (JavaScript, TypeScript, NodeJS, LLM)*
3. **#${getStt('CORSAIR')} CORSAIR Vietnam (Quận 3, TP.HCM)** - *AI & Automation Engineer (Python, Automation Workflows & REST APIs)*
4. **#${getStt('Reputyze')} Reputyze Asia (Quận Phú Nhuận, TP.HCM)** - *AI Engineer Intern (NLP, LLMs & GenAI Integration)*
5. **#${getStt('Aioz')} Aioz Việt Nam - AIOZ VN (Quận 1, TP.HCM)** - *Frontend Developer (ReactJS) - AI Team*
6. **#${getStt('MB Bank')} MB Bank (TP.HCM)** - *MB Trainee - AI Engineer (Fresher / Intern)*
7. **#${getStt('STYL Solutions')} STYL Solutions (KĐT Sala, TP. Thủ Đức, TP.HCM)** - *Software Engineer Intern (Fullstack & AI Integration)*
8. **#${getStt('ISB')} ISB Việt Nam - IVC (Tân Bình, TP.HCM)** - *Intern Fullstack Developer (AI & Automation: Ollama, n8n, LLMs)*
9. **#${getStt('Alliance IT')} Alliance IT Service (Thủ Đức, TP.HCM)** - *AI Engineer Intern / AI Researcher (LLMs, LoRA, QLoRA, RAG)*
10. **#${getStt('Goldsun Focus')} Goldsun Focus Media (Quận 1, TP.HCM)** - *AI Application Developer (Prompt Engineering, RAG, Agentic AI)*
11. **#${getStt('TRÍ TUỆ SỐ')} Giải Pháp Trí Tuệ Số (Tân Phú / Tân Bình, TP.HCM)** - *Backend Developer - AI Agent & Automation (Node.js / NestJS / Python)*
12. **#${getStt('Sharework')} Sharework (Tân Bình, TP.HCM)** - *AI Engineer (Intern / Fresher level: Prompting, LLM & AI Agents)*
13. **#${getStt('FPT Long Châu')} FPT Long Châu (TP.HCM)** - *Thực Tập Sinh Kỹ Thuật (AI-Agents Team)*
14. **#${getStt('Icon Consulting')} Icon Consulting Group (Quận 1, TP.HCM)** - *AI-Native Full-Stack Developer Intern*
15. **#${getStt('Bosch Global')} Bosch Global Software Technologies (Tân Bình, TP.HCM)** - *AI Automation Engineer (Fresher / Junior)*
16. **#${getStt('HomeNest')} HomeNest Software (TP. Thủ Đức, TP.HCM)** - *Thực Tập Sinh AI Engineer (LLM / RAG / API)*
17. **#${getStt('Phu Hung')} Chứng khoán Phú Hưng - PHS (Quận 7, TP.HCM)** - *Data & Product AI Automation Intern*
18. **#${getStt('Axen Property')} Axen Property, #${getStt('MCI')} MCI Solutions & #${getStt('Innotech')} Innotech Vietnam (TP.HCM)** - *AI & Workflow Automation Intern*

---

## 📋 CHECKLIST CHUẨN BỊ TRƯỚC KHI BẤM NỘP
- [ ] **Bản in CV A4:** Dùng tính năng *In / Tải PDF* trên CV Editor để xuất file PDF sắc nét đúng 1 trang A4.
- [ ] **Portfolio GitHub:** Đảm bảo các repo dự án (AI Automation, CV Editor, v.v.) có README chỉn chu, ảnh chụp demo hoặc link live deploy.
- [ ] **Email Ứng Tuyển:** Sử dụng mẫu thư ứng tuyển có sẵn trong tab *Email Ứng tuyển* của CV Editor để chỉnh sửa ngắn gọn, chuyên nghiệp.
- [ ] **Theo dõi phản hồi:** Cập nhật trạng thái từng đơn ứng tuyển vào bảng tiến độ hàng ngày.
`;

fs.writeFileSync(mdPath, outMd, 'utf8');
console.log('Successfully updated jobs_for_tomorrow.md with', allRows.length, 'total jobs!');
