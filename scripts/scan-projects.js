const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');

let cvDataBaseModule = null;
try {
  cvDataBaseModule = require(path.join(DATA_DIR, 'cv-data-base.js'));
} catch (e) {
  console.error('Không thể load cv-data-base.js', e.message);
  process.exit(1);
}

function createDataSandbox() {
  const sandbox = {
    cvGlobalEdu: {
      vi: { school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH", date: "2020 - 2024", detail: "Khoa học Máy tính" },
      en: { school: "HO CHI MINH CITY OPEN UNIVERSITY", date: "2020 - 2024", detail: "Computer Science" },
    },
    cvGlobalExp: {
      vi: [],
      en: [],
    },
    cvDataBase: cvDataBaseModule ? cvDataBaseModule.cvDataBase : null,
    mergeWithBaseCv: cvDataBaseModule ? cvDataBaseModule.mergeWithBaseCv : null,
    module: {},
    exports: {},
    console: console,
  };
  sandbox.window = sandbox;
  sandbox.global = sandbox;
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);
  return sandbox;
}

const allDataFiles = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.startsWith("cv-data-") && f.endsWith(".js"));

console.log(`Tìm thấy ${allDataFiles.length} file cv-data-*.js. Đang tiến hành quét chi tiết...\n`);

const reports = [];

allDataFiles.forEach(file => {
  if (file === 'cv-data-template.js') return;

  const filePath = path.join(DATA_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const sandbox = createDataSandbox();

  let cvData = null;
  try {
    vm.runInContext(content, sandbox);
    cvData = sandbox.cvData || (sandbox.window && sandbox.window.cvData) || sandbox.module.exports;
  } catch (e) {
    reports.push({ file, error: `Lỗi thực thi JS: ${e.message}` });
    return;
  }

  if (!cvData || typeof cvData !== "object") {
    reports.push({ file, error: "Không tìm thấy cvData" });
    return;
  }

  // Raw file projects (before merge or as defined)
  const rawProjects = { vi: (cvData.vi && cvData.vi.projects) || [], en: (cvData.en && cvData.en.projects) || [] };
  const rawExperience = { vi: (cvData.vi && cvData.vi.experience) || [], en: (cvData.en && cvData.en.experience) || [] };

  // Check against merged version if applicable
  let mergedData = cvData;
  if (file !== "cv-data-base.js" && sandbox.mergeWithBaseCv && sandbox.cvDataBase) {
    try {
      mergedData = sandbox.mergeWithBaseCv(sandbox.cvDataBase, cvData);
    } catch (e) {
      // ignore merge fail
    }
  }

  const issues = [];

  ['vi', 'en'].forEach(lang => {
    const rawP = rawProjects[lang];
    const rawE = rawExperience[lang];

    // Check experience companies
    rawE.forEach(e => {
      if (e.name && !e.name.toUpperCase().includes('TAMI')) {
        issues.push(`[${lang}] CÔNG TY LẠ KHÔNG PHẢI TAMI: "${e.name}" (Role: ${e.role})`);
      }
    });

    // Check projects
    rawP.forEach(p => {
      const name = p.name || '';
      const nameUpper = name.toUpperCase();
      const github = p.github || '';
      const tech = p.tech || '';

      const isJobPortal = nameUpper.includes('JOB') || nameUpper.includes('PORTAL') || nameUpper.includes('TUYỂN DỤNG');
      const isStudent = nameUpper.includes('STUDENT') || nameUpper.includes('SINH VIÊN');
      const isEcom = nameUpper.includes('COMMERCE') || nameUpper.includes('THƯƠNG MẠI');
      const isAiAgent = nameUpper.includes('AI') || nameUpper.includes('AGENT') || nameUpper.includes('TỰ ĐỘNG HÓA') || nameUpper.includes('AUTOMATION') || nameUpper.includes('CV EDITOR');

      if (!isJobPortal && !isStudent && !isEcom && !isAiAgent) {
        issues.push(`[${lang}] TÊN DỰ ÁN BỊA HOẶC LẠ: "${name}" | GitHub: "${github}" | Tech: "${tech}"`);
      }

      // Kiểm tra github
      if (!github) {
        issues.push(`[${lang}] DỰ ÁN THIẾU LINK GITHUB: "${name}"`);
      } else if (!github.includes('dinhanhhhh')) {
        issues.push(`[${lang}] GITHUB KHÔNG PHẢI CỦA ỨNG VIÊN: "${github}" (Dự án: "${name}")`);
      }

      // Kiểm tra công nghệ bịa
      if (github.includes('JOB-PORTAL')) {
        // Repo thật: Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS
        if (tech.includes('PostgreSQL') || tech.includes('MySQL') || tech.includes('TypeORM') || tech.includes('BullMQ') || tech.includes('Redis') || tech.includes('PHP') || tech.includes('Laravel')) {
          issues.push(`[${lang}] TECH BỊA Ở JOB-PORTAL: "${tech}" (Repo thật là Node.js, Express, TypeScript, MongoDB)`);
        }
      }

      if (github.includes('student-management')) {
        // Repo thật: Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger
        if (tech.includes('PostgreSQL') || tech.includes('MySQL') || tech.includes('PHP') || tech.includes('Laravel')) {
          issues.push(`[${lang}] TECH BỊA Ở STUDENT-MANAGEMENT: "${tech}"`);
        }
      }

      if (github.includes('ecommerce')) {
        // Repo thật: React, Vite, Node.js, Express, MongoDB, Tailwind CSS, REST API, Docker
        if (tech.includes('MySQL') || tech.includes('PostgreSQL') || tech.includes('PHP') || tech.includes('Laravel')) {
          issues.push(`[${lang}] TECH BỊA Ở E-COMMERCE: "${tech}" (Repo thật là React, Node.js, Express, MongoDB)`);
        }
      }

      if (github.includes('cv-editor')) {
        // Repo thật: JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD
        if (tech.includes('React') || tech.includes('Vue') || tech.includes('Angular') || tech.includes('PHP') || tech.includes('Laravel') || tech.includes('Spring')) {
          issues.push(`[${lang}] TECH BỊA Ở CV-EDITOR: "${tech}"`);
        }
      }
    });
  });

  if (issues.length > 0) {
    reports.push({ file, issues });
  }
});

console.log('==================================================');
console.log(`KẾT QUẢ RÀ SOÁT: Có ${reports.length} file có vấn đề cần xử lý:`);
console.log('==================================================\n');

reports.forEach(r => {
  if (r.error) {
    console.log(`❌ ${r.file}: ${r.error}`);
  } else {
    console.log(`❌ ${r.file}:`);
    r.issues.forEach(iss => console.log(`   - ${iss}`));
  }
});
