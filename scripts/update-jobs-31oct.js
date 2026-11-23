const fs = require('fs');
const path = require('path');

const mdPath = path.resolve('c:/Users/Admin/Documents/CV_Truong Dinh Anh/Phỏng vấn/cv-editor/jobs_for_tomorrow.md');
const raw = fs.readFileSync(mdPath, 'utf8');
const lines = raw.split(/\r?\n/);

const newJobs = [
  {
    role: '**Frontend Developer (ReactJS) - AI Team**',
    company: 'Công ty TNHH Aioz Việt Nam (AIOZ VN)',
    location: 'Tòa nhà Vimedimex, 246 Cống Quỳnh, P. Bến Thành, Quận 1, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (TopCV / Glints - Active)',
    scoreStr: '`9.8/10`',
    scoreNum: 9.8,
    desc: 'Xây dựng UI cho các sản phẩm AI của AIOZ, làm việc trực tiếp với AI Researcher/Engineer; stack ReactJS, TypeScript, Next.js, API Integration; mức lương 15 - 22M/tháng, đóng BHXH full lương; ưu tiên có demo GitHub. Cực khớp nền tảng React/Next.js/TS và định hướng AI của Trương Đình Anh.',
    link: '[Ứng tuyển](https://www.topcv.vn/brand/aioz)',
    group: '2026-10-31'
  },
  {
    role: '**Fresher Backend Developer (NodeJS / NestJS)**',
    company: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ GIẢI PHÁP TEANIS',
    location: 'Tầng 6, 100 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (Glints - Active)',
    scoreStr: '`9.6/10`',
    scoreNum: 9.6,
    desc: 'Phát triển hệ thống API Server-Side cho Web & Mobile Apps; stack NodeJS, NestJS, RESTful APIs, Database; được đào tạo và kèm cặp 1-1 bởi Tech Lead >10 năm kinh nghiệm; yêu cầu tốt nghiệp ĐH Khoa học Máy tính/CNTT. Cực khớp nền tảng Backend Node.js & bằng Cử nhân CS của Anh.',
    link: '[Ứng tuyển](https://glints.com/vn)',
    group: '2026-10-31'
  },
  {
    role: '**Intern Fullstack Developer (NodeJS / ReactJS & AI Exposure)**',
    company: 'Công ty TNHH KIT System Solutions Việt Nam',
    location: 'Quận Bình Thạnh, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (TopCV - Active)',
    scoreStr: '`9.5/10`',
    scoreNum: 9.5,
    desc: 'Doanh nghiệp FDI Nhật Bản phát triển hệ thống và ứng dụng AI; xây dựng web fullstack với Node.js, React.js, MySQL, AWS, Git; đào tạo bài bản cho thực tập sinh, phụ cấp thỏa thuận. Khớp 100% trọn bộ kỹ năng Fullstack Node.js + React.js của Anh.',
    link: '[Ứng tuyển](https://www.topcv.vn/brand/kitsystemsolutions)',
    group: '2026-10-31'
  },
  {
    role: '**MB Trainee - AI Engineer (Fresher / Intern)**',
    company: 'Ngân hàng TMCP Quân đội (MB Bank)',
    location: 'Tòa nhà MB, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (ITviec - Active)',
    scoreStr: '`9.4/10`',
    scoreNum: 9.4,
    desc: 'Chương trình ươm mầm tài năng kỹ sư AI khối ngân hàng số; tham gia phát triển và tích hợp mô hình AI (NLP, CV, Transformer), xây dựng RESTful/gRPC API, Microservices bằng Python; yêu cầu SV năm cuối/mới tốt nghiệp CS/CNTT; đãi ngộ top đầu, phụ cấp thể thao & MIC. Rất khớp nền tảng CS và thế mạnh AI của Anh.',
    link: '[Ứng tuyển](https://itviec.com/it-jobs/mb-trainee-ai-engineer-fresher-intern)',
    group: '2026-10-31'
  },
  {
    role: '**Software Engineer Intern - Fullstack (React.js, Node.js, PostgreSQL)**',
    company: 'HRM Labs (Indonesia / Singapore FDI Hub)',
    location: 'Quận 1, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (Glints - Active)',
    scoreStr: '`9.3/10`',
    scoreNum: 9.3,
    desc: 'Phát triển nền tảng SaaS HRM đa quốc gia; xây dựng tính năng fullstack với React.js frontend và Node.js backend; quản trị CSDL quan hệ PostgreSQL, thiết kế RESTful APIs; môi trường quốc tế năng động. Cực kỳ khớp với trọn bộ stack React, Node.js và PostgreSQL của Anh.',
    link: '[Ứng tuyển](https://glints.com/vn)',
    group: '2026-10-31'
  },
  {
    role: '**Frontend Developer Internship (ReactJS & Web UI/UX)**',
    company: 'Công Ty Cổ Phần Tanca',
    location: 'Quận Bình Thạnh, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (Glints - Active)',
    scoreStr: '`9.2/10`',
    scoreNum: 9.2,
    desc: 'Phát triển giao diện web cho nền tảng SaaS nhân sự Tanca; tối ưu UX/UI, xử lý state và kết nối RESTful APIs; stack ReactJS, JavaScript/TypeScript, HTML/CSS; trợ cấp thực tập từ 3.000.000 – 5.000.000 VNĐ/tháng (+ phụ cấp/thưởng). Khớp năng lực Frontend React & tư duy sản phẩm của Anh.',
    link: '[Ứng tuyển](https://tanca.io/)',
    group: '2026-10-31'
  },
  {
    role: '**Software Engineer Intern (Fullstack & AI Integration)**',
    company: 'The Rep. Office of STYL Solutions Pte. Ltd.',
    location: 'KĐT Sala, An Khánh, TP. Thủ Đức, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (ITviec - Active)',
    scoreStr: '`9.0/10`',
    scoreNum: 9.0,
    desc: 'Doanh nghiệp FDI Singapore tại KĐT Sala; tham gia dự án web fullstack với JavaScript, TypeScript, MySQL, RESTful API và tích hợp công cụ AI; cơ cấu phẳng (flat structure), mentor 1-1, cơ hội chuyển lên chính thức cao; phụ cấp & đồ ăn nhẹ miễn phí.',
    link: '[Ứng tuyển](https://itviec.com)',
    group: '2026-10-31'
  },
  {
    role: '**Fullstack Intern (React / Next.js & Web APIs)**',
    company: 'Công ty Cổ phần TOS (TOS JSC)',
    location: 'Quận 4, TP. Hồ Chí Minh',
    dateInfo: 'Mới cập nhật 31/10/2026 (TopCV - Active)',
    scoreStr: '`9.0/10`',
    scoreNum: 9.0,
    desc: 'Phát triển ứng dụng web hiện đại bằng ReactJS, Next.js và Web APIs; tối ưu responsive, hiệu năng web; trợ cấp thực tập 3.000.000 – 3.300.000 VNĐ/tháng; hỗ trợ mộc báo cáo tốt nghiệp và lộ trình lên nhân viên chính thức rõ ràng. Rất khớp năng lực React/Next.js của Anh.',
    link: '[Ứng tuyển](https://www.topcv.vn/viec-lam/fullstack-intern-react-nextjs/2324561.html)',
    group: '2026-10-31'
  }
];

const parsedRows = [];
let currentGroup = '';

for (const line of lines) {
  const t = line.trim();
  if (t.startsWith('### 📅')) {
    if (t.includes('30/10/2026')) currentGroup = '2026-10-30';
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

  // Filter out expired job: Flexspace Technologies Inc (hạn 2026-10-30)
  if (company.includes('Flexspace Technologies Inc')) {
    console.log('Filtering out expired job:', company, dateInfo);
    continue;
  }

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
console.log('Total rows after adding 31/10/2026:', allRows.length);

const groupsOrder = [
  {
    key: '2026-10-31',
    title: '### 📅 Ngày quét: 31/10/2026 (Mới nhất)'
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

> **Thời gian khởi tạo:** 16/10/2026 (Cập nhật & sắp xếp theo ngày quét mới nhất: 31/10/2026)  
> **Ứng viên:** Trương Đình Anh - Cử nhân Khoa học Máy tính (ĐH Mở TP.HCM)  
> **Cấp độ mục tiêu:** Intern, Thực tập sinh, Fresher, Trainee, Junior 0-1 năm kinh nghiệm  
> **Vị trí cốt lõi:** Backend Developer (Node.js/Express), Fullstack Developer (Node.js + React/Next.js), Frontend Developer (React/Next.js/TypeScript), AI & Automation Developer  
> **Nguồn quét đa kênh:** ITviec, TopCV, Glints, LinkedIn Jobs, TopDev, CareerViet, VietnamWorks & Website Tuyển dụng trực tiếp của các công ty tại TP.HCM  
> **Khu vực bắt buộc:** **100% tại TP. Hồ Chí Minh & Remote** (Đã lọc bỏ hoàn toàn Hà Nội, Đà Nẵng và các vị trí trái ngành)  
> **Thứ tự sắp xếp:** Chia theo **Ngày quét từ mới nhất đến cũ hơn** (\`31/10/2026\` → \`30/10/2026\` → \`29/10/2026\` → \`27/10/2026\` → \`26/10/2026\` → \`24/10/2026\` → \`16/10–23/10/2026\`), trong mỗi ngày ưu tiên điểm khớp từ cao xuống thấp.

---

## Bảng tổng hợp công việc đạt tiêu chuẩn tại TP. Hồ Chí Minh & Remote (${allRows.length} việc làm)

${tableSections.join('\n\n---\n\n')}

---

## 🎯 KẾ HOẠCH HÀNH ĐỘNG NỘP HỒ SƠ TẠI TP. HỒ CHÍ MINH & REMOTE (CHIẾN LƯỢC 3 BƯỚC)

### 🥇 Nhóm 1: Top Ưu Tiên Nộp Sáng Sớm (Điểm 9.5 - 10/10 - Siêu Khớp Profile & Mới Quét)
Nộp ngay trong khung giờ vàng 08:30 - 10:00 sáng để CV nằm trên cùng hộp thư HR:
1. **#${getStt('Aioz')} Aioz Việt Nam - AIOZ VN (Quận 1, TP.HCM)** - *Frontend Developer (ReactJS) - AI Team* - Lương 15 - 22M, BHXH full lương, cực khớp React/Next.js/TypeScript & AI Team.
2. **#${getStt('TEANIS')} TEANIS Solution (Quận 3, TP.HCM)** - *Fresher Backend Developer (NodeJS / NestJS)* - Mentor Tech Lead >10 năm KN kèm 1-1, cực khớp Backend NodeJS & bằng Cử nhân CS.
3. **#${getStt('KIT System')} KIT System Solutions Việt Nam (Bình Thạnh, TP.HCM)** - *Intern Fullstack Developer (NodeJS / ReactJS & AI Exposure)* - Doanh nghiệp FDI Nhật Bản, khớp 100% stack Fullstack Node + React.
4. **#${getStt('MB Bank')} MB Bank (TP.HCM)** - *MB Trainee - AI Engineer (Fresher / Intern)* - Khối ngân hàng số, đãi ngộ & phụ cấp hàng đầu, cực khớp nền tảng CS & AI Automation.
5. **#${getStt('ISB')} ISB Việt Nam - IVC (Tân Bình, TP.HCM)** - *Intern Fullstack Developer (AI & Automation Focus: React, Node, Ollama, n8n)* - Trợ cấp 4.0 - 6.9M, cực kỳ khớp 100% cả Fullstack lẫn AI Agent/Automation.
6. **#${getStt('Sichain')} Sichain (Thủ Đức, TP.HCM)** - *Fresher Front End / Fullstack (ReactJS, ExpressJS, MongoDB, TypeScript)* - Lương từ 8M, cực khớp 100% stack chủ lực.
7. **#${getStt('AS SOLUTIONS')} AS SOLUTIONS (Phú Nhuận, TP.HCM)** - *Frontend Developer (React, TypeScript) - Fresher/Junior* - Lương 10 - 21M, bảo hiểm cao cấp, đãi ngộ vượt trội.
8. **#${getStt('Mini Min')} Mini Min Retail (Thủ Đức, TP.HCM)** - *Backend Intern (Node.js / NestJS / Socket.IO / SQL / NoSQL)* - Hệ sinh thái bán lẻ & realtime socket.
9. **#${getStt('Alliance IT')} Alliance IT Service (Thủ Đức, TP.HCM)** - *AI Engineer Intern / AI Researcher (LLMs, LoRA, QLoRA, RAG, Python)* - Rất khớp thế mạnh AI Automation.
10. **#${getStt('MLTech')} MLTech Soft (Tân Bình, TP.HCM)** - *Fullstack Intern (ReactJS, NodeJS / ExpressJS / NestJS, MongoDB, MySQL)* - Cực khớp 100% stack chủ lực.
11. **#${getStt('Seedcom')} Seedcom Food - Logistics (Quận 7, TP.HCM)** - *Web / Fullstack Developer Intern (Kingfoodmart & OneLife Platform)* - Hỗ trợ 5M/tháng, thương mại điện tử lớn.
12. **#${getStt('TOS')} TOS JSC (Quận 4, TP.HCM)** - *Thực Tập Sinh ReactJS & Next.js Developer* - Trợ cấp từ 3M, tối ưu Core Web Vitals & Next.js.
13. **#${getStt('Goldsun Focus')} Goldsun Focus Media (Quận 1, TP.HCM)** - *AI Application Developer (Prompt Engineering, RAG, Agentic AI)* - Khớp 100% định hướng AI Agent & Automation.
14. **#${getStt('TRÍ TUỆ SỐ')} Giải Pháp Trí Tuệ Số (Tân Phú / Tân Bình, TP.HCM)** - *Backend Developer - AI Agent & Automation (Node.js / NestJS / Python)* - API Streaming, RAG & Automation.
15. **#${getStt('FPT Telecom')} FPT Telecom (Trung tâm SCC, TP.HCM)** - *React JS Developer Intern (Lương thực tập 6 - 8M)* - Đào tạo 1:1 Sư phụ - Đệ tử, cam kết HĐLĐ chính thức.
16. **#${getStt('Sharework')} Sharework (Tân Bình, TP.HCM)** - *AI Engineer Intern / Fresher (Prompting, LLM & AI Agents)* - Lương hỗ trợ 3 - 12M/tháng.
17. **#${getStt('Icon Consulting')} Icon Consulting Group (Quận 1, TP.HCM)** - *AI-Native Full-Stack Developer Intern* - Node.js, React, TypeScript, MongoDB & AI-augmented coding.
18. **#${getStt('FPT Long Châu')} FPT Long Châu (TP.HCM)** - *Thực Tập Sinh Kỹ Thuật (AI-Agents Team)* - React 18, TypeScript, Python, MCP, PostgreSQL & Claude/Cursor.
19. **#${getStt('TAPTAP')} TAPTAP (Quận 1, TP.HCM)** - *Software Engineer Intern (Backend Node.js / Frontend React)* - Khớp 100% stack & tư duy AI tool.
20. **#${getStt('Saigon Technology')} Saigon Technology (Phú Nhuận / Tân Bình, TP.HCM)** - *Fresher / Junior Fullstack Developer (ReactJS, Next.js, Node.js, AI-Driven)*.
21. **#${getStt('HPT Vietnam')} HPT Vietnam (TP.HCM)** - *Full-Stack Developer Intern (ReactJS & NodeJS)* - Cực khớp cả FE lẫn BE.
22. **#${getStt('OALPHA')} OALPHA Platform (TP.HCM)** - *Thực tập sinh Backend Developer (Go / Node.js)* - Node.js + AI-assisted coding.
23. **#${getStt('Tino Innovation')} Tino Innovation (TP. Thủ Đức, TP.HCM)** - *NodeJS Intern / Fresher Developer* - ExpressJS/NestJS, MongoDB/SQL, REST API.
24. **#${getStt('Money Forward')} Money Forward Vietnam (TP.HCM)** - *Software Engineer Intern (TypeScript / ReactJS / Node.js)* - Chuẩn quốc tế, cấp MacBook Pro.
25. **#${getStt('ONE Tech Stop')} ONE Tech Stop Vietnam (TP.HCM)** - *Full-Stack Developer Intern/Fresher (ReactJS / NodeJS / NextJS)*.
26. **#${getStt('TymeX')} TymeX & #${getStt('Employment Hero')} Employment Hero (Quận 1, TP.HCM)** - *Intern/Fresher Software Engineer (AI-First & Fullstack)*.

### 🥈 Nhóm 2: Nộp Buổi Chiều (13:30 - 15:30) - Các Doanh Nghiệp Công Nghệ Lớn & Môi Trường Quốc Tế
1. **#${getStt('HRM Labs')} HRM Labs (Quận 1, TP.HCM)** - *Software Engineer Intern - Fullstack (React.js, Node.js, PostgreSQL)* - Nền tảng SaaS HRM đa quốc gia.
2. **#${getStt('STYL Solutions')} STYL Solutions (KĐT Sala, TP. Thủ Đức, TP.HCM)** - *Software Engineer Intern (Fullstack & AI Integration)* - FDI Singapore, flat structure.
3. **#${getStt('Tanca')} Tanca (Bình Thạnh, TP.HCM)** - *Frontend Developer Internship (ReactJS) & Backend Developer Internship*.
4. **#${getStt('UNIT Technology')} Unit Corp (Quận 3, TP.HCM)** - *Fresher Frontend Developer (ReactJS / RESTful API)* - Thưởng tháng 13, dự án ngân hàng số.
5. **#${getStt('CHECKMATE')} CHECKMATE (Quận 7, TP.HCM)** - *Frontend Developer Intern (Web UI/UX & API Integration)* - Trợ cấp 3 - 4M/tháng.
6. **#${getStt('Splus-Software')} Splus-Software (Tân Bình, TP.HCM)** - *Fresher / Junior Developer (ReactJS / NodeJS / Web Services)*.
7. **#${getStt('Oryza')} Oryza Systems (Bình Thạnh, TP.HCM)** - *AI Application & Software Engineer Intern (Python, Node.js, AI Integration)*.
8. **#${getStt('Thương mại TT')} Công ty TT (KĐT Vạn Phúc, TP. Thủ Đức)** - *Backend Developer Intern / Fresher (NestJS, Redis, Microservices)*.
9. **#${getStt('Solazu')} Solazu JSC (Bình Thạnh, TP.HCM)** - *NodeJS Developer / Intern (Dự án Silicon Valley)*.
10. **#${getStt('OrgScale')} OrgScale Recruitment Vietnam (Remote)** - *Remote Fullstack Developer (TypeScript, Node.js, NestJS)*.
11. **#${getStt('FPT IS')} FPT IS (TP.HCM)** - *Fullstack Developer Intern (Java Spring Boot + ReactJS)*.
12. **#${getStt('Orient Software')} Orient Software (Etown Tân Bình, TP.HCM)** - *Software Developer Intern / Fresher (Node.js / ReactJS / TypeScript)*.
13. **#${getStt('NFQ Asia')} NFQ Asia (Phú Nhuận, TP.HCM)** - *Fresher / Junior Software Engineer & AI Intern (Node.js / Python / React)*.
14. **#${getStt('Netcompany')} Netcompany Vietnam (Quận 1, TP.HCM)** - *Talented IT Graduates / Fresher Software Developer (React, Node.js, TS)*.
15. **#${getStt('Silicon Stack')} Silicon Stack Vietnam (Gò Vấp, TP.HCM)** - *Software Engineer Intern / Fresher (Full-Stack NodeJS & ReactJS)*.
16. **#${getStt('Katalon')} Katalon (Quận 7, TP.HCM)** - *Katalon Advanced Internship Program (Software / Web Engineer Intern)*.
17. **#${getStt('TMA Tech')} TMA Tech Group (Quận 12 / Phú Nhuận, TP.HCM)** - *Fresher Developer TFT Program* - Hưởng 100% lương, đào tạo bài bản.
18. **#${getStt('NashTech')} NashTech & #${getStt('KMS Technology')} KMS Technology (Tân Bình, TP.HCM)** - *Chương trình Fresher / Intern dự án toàn cầu*.
19. **#${getStt('NAB Innovation')} NAB Innovation Centre Vietnam (Quận 1, TP.HCM)** - *StarCamp® Tech Academy (JS/Node.js/React/AWS)*.
20. **#${getStt('Haravan')} Haravan (Quận 11, TP.HCM)** - *NodeJS Engineer (Fresher / Junior)*.

### 🥉 Nhóm 3: Các Cơ Hội AI & Automation Chuyên Biệt tại TP.HCM
Dùng phiên bản CV nhấn mạnh dự án *"AI Agent Automation Platform"* & *"CV Editor"* để nộp:
1. **#${getStt('Aioz')} Aioz Việt Nam - AIOZ VN (Quận 1, TP.HCM)** - *Frontend Developer (ReactJS) - AI Team*
2. **#${getStt('MB Bank')} MB Bank (TP.HCM)** - *MB Trainee - AI Engineer (Fresher / Intern)*
3. **#${getStt('STYL Solutions')} STYL Solutions (KĐT Sala, TP. Thủ Đức, TP.HCM)** - *Software Engineer Intern (Fullstack & AI Integration)*
4. **#${getStt('ISB')} ISB Việt Nam - IVC (Tân Bình, TP.HCM)** - *Intern Fullstack Developer (AI & Automation: Ollama, n8n, LLMs)*
5. **#${getStt('Alliance IT')} Alliance IT Service (Thủ Đức, TP.HCM)** - *AI Engineer Intern / AI Researcher (LLMs, LoRA, QLoRA, RAG)*
6. **#${getStt('Goldsun Focus')} Goldsun Focus Media (Quận 1, TP.HCM)** - *AI Application Developer (Prompt Engineering, RAG, Agentic AI)*
7. **#${getStt('TRÍ TUỆ SỐ')} Giải Pháp Trí Tuệ Số (Tân Phú / Tân Bình, TP.HCM)** - *Backend Developer - AI Agent & Automation (Node.js / NestJS / Python)*
8. **#${getStt('Sharework')} Sharework (Tân Bình, TP.HCM)** - *AI Engineer (Intern / Fresher level: Prompting, LLM & AI Agents)*
9. **#${getStt('FPT Long Châu')} FPT Long Châu (TP.HCM)** - *Thực Tập Sinh Kỹ Thuật (AI-Agents Team)*
10. **#${getStt('Icon Consulting')} Icon Consulting Group (Quận 1, TP.HCM)** - *AI-Native Full-Stack Developer Intern*
11. **#${getStt('Bosch Global')} Bosch Global Software Technologies (Tân Bình, TP.HCM)** - *AI Automation Engineer (Fresher / Junior)*
12. **#${getStt('HomeNest')} HomeNest Software (TP. Thủ Đức, TP.HCM)** - *Thực Tập Sinh AI Engineer (LLM / RAG / API)*
13. **#${getStt('Phu Hung')} Chứng khoán Phú Hưng - PHS (Quận 7, TP.HCM)** - *Data & Product AI Automation Intern*
14. **#${getStt('Axen Property')} Axen Property, #${getStt('MCI')} MCI Solutions & #${getStt('Innotech')} Innotech Vietnam (TP.HCM)** - *AI & Workflow Automation Intern*

---

## 📋 CHECKLIST CHUẨN BỊ TRƯỚC KHI BẤM NỘP
- [ ] **Bản in CV A4:** Dùng tính năng *In / Tải PDF* trên CV Editor để xuất file PDF sắc nét đúng 1 trang A4.
- [ ] **Portfolio GitHub:** Đảm bảo các repo dự án (AI Automation, CV Editor, v.v.) có README chỉn chu, ảnh chụp demo hoặc link live deploy.
- [ ] **Email Ứng Tuyển:** Sử dụng mẫu thư ứng tuyển có sẵn trong tab *Email Ứng tuyển* của CV Editor để chỉnh sửa ngắn gọn, chuyên nghiệp.
- [ ] **Theo dõi phản hồi:** Cập nhật trạng thái từng đơn ứng tuyển vào bảng tiến độ hàng ngày.
`;

fs.writeFileSync(mdPath, outMd, 'utf8');
console.log('Successfully updated jobs_for_tomorrow.md with', allRows.length, 'total jobs!');
