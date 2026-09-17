/**
 * ===================================================================
 * CV DATA & MANIFEST VERIFIER
 * ===================================================================
 * Kịch bản tự động kiểm tra tính hợp lệ và sự tuân thủ quy tắc của toàn bộ dữ liệu CV.
 *
 * Tiêu chí kiểm tra:
 * 1. Cú pháp JS hợp lệ cho tất cả file data/cv-data-*.js.
 * 2. Cấu trúc dữ liệu có đầy đủ nhánh 'vi' và 'en'.
 * 3. Quy tắc bắt buộc: Tất cả trường 'role' trong 'projects' và 'experience'
 *    đều phải là "Developer" (theo AGENTS.md).
 * 4. Kiểm tra cv-manifest.js: không có đường dẫn file bị chết (broken file path),
 *    mọi key là duy nhất, không bỏ sót file dữ liệu nào (trừ file template).
 *
 * Chạy kiểm tra: node scripts/verify-cv-data.js
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "data");
const MANIFEST_PATH = path.join(DATA_DIR, "cv-manifest.js");

let totalErrors = 0;
let totalWarnings = 0;

function logPass(msg) {
  console.log(`\x1b[32m✔ [PASS]\x1b[0m ${msg}`);
}

function logError(msg) {
  totalErrors++;
  console.error(`\x1b[31m✖ [ERROR]\x1b[0m ${msg}`);
}

function logWarn(msg) {
  totalWarnings++;
  console.warn(`\x1b[33m▲ [WARN]\x1b[0m ${msg}`);
}

console.log("==================================================");
console.log("🔍 Đang bắt đầu kiểm tra dữ liệu CV Editor...");
console.log("==================================================\n");

// ----------------------------------------------------
// 1. KIỂM TRA MANIFEST
// ----------------------------------------------------
console.log("--- [1] Kiểm tra data/cv-manifest.js ---");
if (!fs.existsSync(MANIFEST_PATH)) {
  logError("Không tìm thấy file cv-manifest.js!");
  process.exit(1);
}

let manifest = [];
try {
  const manifestContent = fs.readFileSync(MANIFEST_PATH, "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(manifestContent, sandbox);
  manifest = sandbox.CV_MANIFEST || [];
  logPass(`Tải thành công manifest với ${manifest.length} phiên bản CV.`);
} catch (e) {
  logError(`Lỗi cú pháp khi đọc cv-manifest.js: ${e.message}`);
}

const seenKeys = new Set();
const manifestFiles = new Set();

manifest.forEach((item) => {
  if (!item.key) {
    logError(`Có mục trong manifest thiếu 'key': ${JSON.stringify(item)}`);
  } else if (seenKeys.has(item.key)) {
    logError(`Key bị trùng lặp trong manifest: '${item.key}'`);
  } else {
    seenKeys.add(item.key);
  }

  if (!item.file) {
    logError(`Mục '${item.key}' thiếu đường dẫn 'file'!`);
  } else {
    const fullPath = path.join(ROOT_DIR, item.file);
    if (!fs.existsSync(fullPath)) {
      logError(`File không tồn tại: ${item.file} (được khai báo bởi key '${item.key}')`);
    } else {
      manifestFiles.add(path.basename(item.file));
    }
  }
});

if (totalErrors === 0) {
  logPass("Tất cả đường dẫn file trong cv-manifest.js đều tồn tại và các key là duy nhất.");
}

// Kiểm tra xem có file cv-data-* nào bị mồ côi (chưa đăng ký vào manifest) không
const allDataFiles = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.startsWith("cv-data-") && f.endsWith(".js"));

const ALLOWED_ORPHANS = new Set(["cv-data-template.js"]);
allDataFiles.forEach((file) => {
  if (!manifestFiles.has(file) && !ALLOWED_ORPHANS.has(file)) {
    logWarn(`File dữ liệu '${file}' chưa được đăng ký trong cv-manifest.js.`);
  }
});

// ----------------------------------------------------
// 2. KIỂM TRA CẤU TRÚC VÀ QUY TẮC DỮ LIỆU CV
// ----------------------------------------------------
console.log("\n--- [2] Kiểm tra dữ liệu & Quy tắc role: 'Developer' ---");

// Mock global objects that data files might reference
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

allDataFiles.forEach((file) => {
  const filePath = path.join(DATA_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");
  const sandbox = createDataSandbox();

  let cvData = null;
  try {
    vm.runInContext(content, sandbox);
    cvData = sandbox.cvData || (sandbox.window && sandbox.window.cvData) || sandbox.module.exports;
  } catch (e) {
    logError(`[${file}] Lỗi cú pháp khi thực thi JS: ${e.message}`);
    return;
  }

  if (!cvData || typeof cvData !== "object") {
    logError(`[${file}] Không tìm thấy đối tượng 'cvData' hợp lệ!`);
    return;
  }

  ["vi", "en"].forEach((lang) => {
    const dataLang = cvData[lang];
    if (!dataLang) {
      logError(`[${file}] Thiếu cấu hình ngôn ngữ '${lang}'!`);
      return;
    }

    const hasName = dataLang.name || (dataLang.header && dataLang.header.name);
    const hasTitle = dataLang.title || (dataLang.header && dataLang.header.title);
    if (!hasName) {
      logWarn(`[${file}] [${lang}] Thiếu trường 'name'.`);
    }
    if (!hasTitle) {
      logWarn(`[${file}] [${lang}] Thiếu trường 'title'.`);
    }

    // QUY TẮC BẮT BUỘC: Kiểm tra trường role trong projects
    if (Array.isArray(dataLang.projects)) {
      dataLang.projects.forEach((proj, idx) => {
        if (!proj.role) {
          logError(`[${file}] [${lang}] Dự án #${idx + 1} ('${proj.name || "N/A"}') thiếu trường 'role'!`);
        } else if (proj.role !== "Developer") {
          logError(
            `[${file}] [${lang}] Dự án #${idx + 1} ('${proj.name || "N/A"}') có role = "${proj.role}". QUY TẮC BẮT BUỘC: role phải luôn là "Developer"!`
          );
        }
      });
    }

    // QUY TẮC BẮT BUỘC: Kiểm tra trường role trong experience (nếu có)
    if (Array.isArray(dataLang.experience)) {
      dataLang.experience.forEach((exp, idx) => {
        if (!exp.role) {
          logError(`[${file}] [${lang}] Kinh nghiệm #${idx + 1} ('${exp.name || "N/A"}') thiếu trường 'role'!`);
        } else if (exp.role !== "Developer") {
          logError(
            `[${file}] [${lang}] Kinh nghiệm #${idx + 1} ('${exp.name || "N/A"}') có role = "${exp.role}". QUY TẮC BẮT BUỘC: role phải luôn là "Developer"!`
          );
        }
      });
    }
  });
});

// ----------------------------------------------------
// 3. KIỂM TRA SCRIPT CI/CD & WORKER
// ----------------------------------------------------
console.log("\n--- [3] Kiểm tra CI/CD (generate-pdf.js) & cloudflare-worker.js ---");

// Kiểm tra cú pháp cloudflare-worker.js
const workerPath = path.join(ROOT_DIR, "cloudflare-worker.js");
if (fs.existsSync(workerPath)) {
  try {
    const workerContent = fs.readFileSync(workerPath, "utf8");
    // Kiểm tra cơ bản bằng Function hoặc regex
    if (workerContent.includes("ensureInManifest") && workerContent.includes("tailorSummary")) {
      logPass("cloudflare-worker.js chứa đầy đủ logic ensureInManifest và tailorSummary.");
    } else {
      logWarn("cloudflare-worker.js có thể thiếu một số logic mới.");
    }
  } catch (e) {
    logError(`Lỗi đọc cloudflare-worker.js: ${e.message}`);
  }
}

// Kiểm tra generate-pdf.js nạp manifest
const pdfScriptPath = path.join(ROOT_DIR, ".github", "scripts", "generate-pdf.js");
if (fs.existsSync(pdfScriptPath)) {
  try {
    const pdfScriptContent = fs.readFileSync(pdfScriptPath, "utf8");
    if (pdfScriptContent.includes("loadManifestVersions")) {
      logPass("generate-pdf.js đã tích hợp hàm nạp động manifest loadManifestVersions().");
    } else {
      logError("generate-pdf.js chưa tích hợp loadManifestVersions()!");
    }
  } catch (e) {
    logError(`Lỗi kiểm tra generate-pdf.js: ${e.message}`);
  }
}

// ----------------------------------------------------
// KẾT QUẢ TỔNG HỢP
// ----------------------------------------------------
console.log("\n==================================================");
console.log("📊 KẾT QUẢ KIỂM TRA:");
console.log(`   - Tổng số file data kiểm tra: ${allDataFiles.length}`);
console.log(`   - Số lỗi (Errors): ${totalErrors}`);
console.log(`   - Số cảnh báo (Warnings): ${totalWarnings}`);
console.log("==================================================");

if (totalErrors > 0) {
  console.error(`\x1b[31m❌ Kiểm tra THẤT BẠI với ${totalErrors} lỗi cần sửa!\x1b[0m\n`);
  process.exit(1);
} else {
  console.log(`\x1b[32m🎉 Tất cả dữ liệu CV đều HỢP LỆ và TUÂN THỦ 100% QUY TẮC BẮT BUỘC!\x1b[0m\n`);
  process.exit(0);
}
