/**
 * ===================================================================
 * CLI GENERATOR: TẠO BẢN CV MỚI 1-CLICK (NEW CV SCRIPT)
 * ===================================================================
 * Tự động tạo file data/cv-data-<key>.js chuẩn 100% quy tắc AGENTS.md
 * và tự động đăng ký vào data/cv-manifest.js.
 * 
 * Cách dùng:
 * 1. Dùng cờ dòng lệnh (CLI flags):
 *    node scripts/new-cv.js --key=shopee --company="Shopee" --title="Full-Stack Developer" --email="hr@shopee.vn" --emoji="🛍️"
 * 
 * 2. Dùng chế độ tương tác từng bước (Interactive):
 *    node scripts/new-cv.js
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, "data");
const MANIFEST_PATH = path.join(DATA_DIR, "cv-manifest.js");

// Màu sắc terminal ANSI
const C_RESET = "\x1b[0m";
const C_GREEN = "\x1b[32m";
const C_RED = "\x1b[31m";
const C_YELLOW = "\x1b[33m";
const C_CYAN = "\x1b[36m";
const C_BOLD = "\x1b[1m";

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const parts = arg.substring(2).split("=");
      const key = parts[0];
      const val = parts.slice(1).join("=") || true;
      parsed[key] = val;
    }
  });
  return parsed;
}

function promptAsync(rl, query, defaultVal = "") {
  return new Promise((resolve) => {
    const hint = defaultVal ? ` (${defaultVal})` : "";
    rl.question(`${C_CYAN}?${C_RESET} ${query}${hint}: `, (answer) => {
      resolve(answer.trim() || defaultVal);
    });
  });
}

function loadManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error("Không tìm thấy file data/cv-manifest.js!");
  }
  const content = fs.readFileSync(MANIFEST_PATH, "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(content, sandbox);
  return sandbox.CV_MANIFEST || [];
}

async function main() {
  console.log(`\n${C_BOLD}${C_GREEN}==================================================${C_RESET}`);
  console.log(`${C_BOLD}${C_GREEN}🚀 CV EDITOR - TỰ ĐỘNG TẠO BẢN CV MỚI (PHASE 2)${C_RESET}`);
  console.log(`${C_BOLD}${C_GREEN}==================================================${C_RESET}\n`);

  const manifest = loadManifest();
  const existingKeys = new Set(manifest.map((m) => m.key));

  const cliArgs = parseArgs();
  let key = cliArgs.key;
  let company = cliArgs.company;
  let title = cliArgs.title;
  let email = cliArgs.email;
  let emoji = cliArgs.emoji;

  const isInteractive = !key;

  if (isInteractive) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    try {
      while (!key) {
        const inputKey = await promptAsync(rl, "1. Nhập Mã định danh (key) CV (viết thường, không dấu, vd: shopee, momo)");
        const cleanedKey = inputKey.toLowerCase().replace(/[^a-z0-9_-]/g, "");
        if (!cleanedKey) {
          console.log(`${C_RED}✖ Mã định danh không được để trống!${C_RESET}`);
        } else if (existingKeys.has(cleanedKey)) {
          console.log(`${C_RED}✖ Mã '${cleanedKey}' đã tồn tại trong manifest! Vui lòng chọn mã khác.${C_RESET}`);
        } else {
          key = cleanedKey;
        }
      }

      company = await promptAsync(rl, "2. Nhập Tên công ty ứng tuyển (vd: Shopee Việt Nam, Momo)", "Công ty mới");
      title = await promptAsync(rl, "3. Nhập Chức danh ứng tuyển (vd: Full-Stack Developer, Backend Intern)", "Full-Stack Developer");
      email = await promptAsync(rl, "4. Nhập Email nhận CV / HR (vd: recruitment@company.com)", "");
      emoji = await promptAsync(rl, "5. Nhập Icon Emoji đại diện", "💼");
    } finally {
      rl.close();
    }
  } else {
    // Validate CLI arguments
    key = String(key).toLowerCase().replace(/[^a-z0-9_-]/g, "");
    if (!key) {
      console.error(`${C_RED}✖ Lỗi: Cần truyền --key=<tên> hợp lệ!${C_RESET}`);
      process.exit(1);
    }
    if (existingKeys.has(key)) {
      console.error(`${C_RED}✖ Lỗi: Key '${key}' đã tồn tại trong manifest!${C_RESET}`);
      process.exit(1);
    }
    company = company || "Công ty mới";
    title = title || "Full-Stack Developer";
    email = email || "";
    emoji = emoji || "💼";
  }

  const fileName = `cv-data-${key}.js`;
  const filePath = path.join(DATA_DIR, fileName);

  if (fs.existsSync(filePath)) {
    console.error(`${C_RED}✖ Lỗi: File ${fileName} đã tồn tại trên đĩa!${C_RESET}`);
    process.exit(1);
  }

  console.log(`\n⏳ Đang khởi tạo file dữ liệu: ${C_BOLD}${fileName}${C_RESET}...`);

  // Template mã nguồn file dữ liệu mới tuân thủ 100% AGENTS.md:
  // 1. role luôn là "Developer"
  // 2. Thời gian TAMI luôn là "06/2025 - 12/2025"
  // 3. Tiêu đề mục: "KINH NGHIỆM LÀM VIỆC", "KỸ NĂNG CHUYÊN MÔN"
  const cvFileContent = `// =========================================================================
// ${company.toUpperCase()} CV DATA - ${title.toUpperCase()}
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  meta: {
    company: ${JSON.stringify(company)},
    position: ${JSON.stringify(title)},
    recipient: "Bộ phận Tuyển dụng ${company}",
    email: ${JSON.stringify(email)},
    contact: ${JSON.stringify(email)},
    jobUrl: "",
    notes: "Ứng tuyển vị trí ${title} tại ${company}.",
    pitchHighlights: "Nền tảng Full-Stack React/Next.js/Node.js, tư duy phát triển AI-First và kinh nghiệm thực chiến API & CSDL"
  },
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: ${JSON.stringify(title)},
    contact: [
      { icon: "phone", text: "0923202861" },
      {
        icon: "email",
        text: "tdinhanh.it@gmail.com",
        link: "mailto:tdinhanh.it@gmail.com",
      },
      {
        icon: "github",
        text: "github.com/dinhanhhhh",
        link: "https://github.com/dinhanhhhh",
      },
      { icon: "address", text: "Thủ Đức, TP. Hồ Chí Minh" },
    ],
    sections: {
      objective: "TÓM TẮT CHUYÊN MÔN",
      education: "HỌC VẤN",
      experience: "KINH NGHIỆM LÀM VIỆC",
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Lập trình viên tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM, có kinh nghiệm phát triển ứng dụng web với React, Next.js, Node.js, Express và các hệ cơ sở dữ liệu (PostgreSQL, MongoDB, MySQL). Có kinh nghiệm thực tập xây dựng và tối ưu 25+ RESTful API endpoints, tích hợp xác thực và ứng dụng AI Agent vào tự động hóa phần mềm. Sẵn sàng học hỏi và đóng góp lâu dài tại ${company}.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính (kết nối thư viện Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu và triển khai PostgreSQL trên nền tảng Supabase Cloud.",
          "Xây dựng và tối ưu hơn 25+ RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất dữ liệu thời gian thực.",
          "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider).",
          "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp tối ưu hóa các luồng truy xuất dữ liệu.",
          "Đóng gói và triển khai ứng dụng demo ổn định lên môi trường Cloud Vercel.",
        ],
        tech: "Next.js, PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT (AI AGENT & AUTOMATION PLATFORM)",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Nền tảng quản trị và tự động hóa quy trình nghiệp vụ ứng dụng kiến trúc AI Agent và Serverless.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng kiến trúc Serverless trên Cloudflare Workers kết nối Telegram Bot Webhook làm kênh tương tác 2 chiều.",
          "Tích hợp LLM API (Google Gemini / OpenAI) xây dựng pipeline phân tích tự động dữ liệu và sinh mã nguồn.",
          "Thiết lập luồng CI/CD tự động kích hoạt GitHub Actions build bản phân phối và tự động cập nhật hệ thống.",
        ],
        tech: "Cloudflare Workers (Serverless), LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Website thương mại điện tử hoàn chỉnh phục vụ mua sắm trực tuyến với khả năng tải trang dưới 2 giây.",
        tasks: [
          "Xây dựng giao diện người dùng Responsive với React, tối ưu State Management và hiệu suất tải trang.",
          "Phát triển hệ thống Backend RESTful API với Node.js, Express và MongoDB, thiết kế mô hình dữ liệu sản phẩm và đơn hàng.",
          "Hiện thực hóa đầy đủ tính năng: Xác thực người dùng (JWT), Giỏ hàng (Cart), Quản lý đơn hàng và Dashboard quản trị.",
          "Đóng gói ứng dụng bằng Docker Compose và thiết lập quy trình tự động hóa kiểm thử.",
        ],
        tech: "React, Node.js, Express, MongoDB, Docker, Git",
      },
    ],
    skills: [
      {
        name: "Ngôn ngữ & Frameworks",
        items: "JavaScript (ES6+), TypeScript, React, Next.js, Node.js, Express",
      },
      {
        name: "Cơ sở dữ liệu",
        items: "PostgreSQL, Supabase Cloud, MongoDB, MySQL",
      },
      {
        name: "Công cụ & DevOps",
        items: "Git, GitHub Actions (CI/CD), Docker, Postman, Vercel, Cloudflare Workers",
      },
      {
        name: "Kỹ năng khác",
        items: "RESTful API Design, AI-Assisted Development, Phân tích yêu cầu, Đọc hiểu tài liệu tiếng Anh",
      },
    ],
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: ${JSON.stringify(title)},
    contact: [
      { icon: "phone", text: "0923202861" },
      {
        icon: "email",
        text: "tdinhanh.it@gmail.com",
        link: "mailto:tdinhanh.it@gmail.com",
      },
      {
        icon: "github",
        text: "github.com/dinhanhhhh",
        link: "https://github.com/dinhanhhhh",
      },
      { icon: "address", text: "Thu Duc, Ho Chi Minh City" },
    ],
    sections: {
      objective: "PROFESSIONAL SUMMARY",
      education: "EDUCATION",
      experience: "WORK EXPERIENCE",
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Software Developer with a Computer Science degree from Ho Chi Minh City Open University. Proven experience in web development with React, Next.js, Node.js, Express, and databases (PostgreSQL, MongoDB). Hands-on experience developing 25+ RESTful API endpoints, integrating OAuth authentication, and applying AI Agent automation. Eager to contribute and grow at ${company}.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analysis system integrated with Vnstock3 financial data library.",
        tasks: [
          "Designed relational database schemas and deployed PostgreSQL on Supabase Cloud infrastructure.",
          "Built and optimized 25+ RESTful API endpoints using Next.js Route Handlers for real-time market data retrieval.",
          "Integrated Google OAuth authentication flow with NextAuth (Google Provider).",
          "Conducted API testing using Postman, handled exceptions, and collaborated to optimize query latency.",
          "Containerized and deployed stable demo instances on Vercel Cloud.",
        ],
        tech: "Next.js, PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "AI AGENT & AUTOMATION PLATFORM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Business process automation platform utilizing AI Agent architecture and Serverless computing.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered a serverless architecture on Cloudflare Workers using Telegram Bot Webhooks as a bi-directional interface.",
          "Integrated LLM APIs (Gemini/OpenAI) to build an automated pipeline for analysis and code synthesis.",
          "Implemented GitHub Actions CI/CD workflows for automated build, verification, and deployment.",
        ],
        tech: "Cloudflare Workers, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Full-featured online shopping platform delivering sub-2-second page loads.",
        tasks: [
          "Constructed responsive UI with React, optimizing client state management and rendering performance.",
          "Developed backend RESTful services using Node.js, Express, and MongoDB for product catalog and order processing.",
          "Implemented authentication (JWT), shopping cart, order management, and administrative dashboards.",
          "Containerized application with Docker Compose and set up automated testing.",
        ],
        tech: "React, Node.js, Express, MongoDB, Docker, Git",
      },
    ],
    skills: [
      {
        name: "Languages & Frameworks",
        items: "JavaScript (ES6+), TypeScript, React, Next.js, Node.js, Express",
      },
      {
        name: "Databases",
        items: "PostgreSQL, Supabase Cloud, MongoDB, MySQL",
      },
      {
        name: "Tools & DevOps",
        items: "Git, GitHub Actions (CI/CD), Docker, Postman, Vercel, Cloudflare Workers",
      },
      {
        name: "Other Skills",
        items: "RESTful API Design, AI-Assisted Development, Technical English Reading",
      },
    ],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
`;

  fs.writeFileSync(filePath, cvFileContent, "utf8");
  console.log(`${C_GREEN}✔ Đã tạo file:${C_RESET} data/${fileName}`);

  // Đăng ký vào data/cv-manifest.js
  console.log(`⏳ Đang đăng ký vào ${C_BOLD}data/cv-manifest.js${C_RESET}...`);
  const manifestRaw = fs.readFileSync(MANIFEST_PATH, "utf8");

  const newEntryLabel = `${emoji} ${company} ${title}`;
  const newEntryCode = `    {
      key: "${key}",
      file: "data/${fileName}",
      emoji: "${emoji}",
      label: "${newEntryLabel}",
    },`;

  // Chèn vào đầu mảng CV_MANIFEST (ngay sau dòng `const CV_MANIFEST = [`)
  const targetPattern = /const\s+CV_MANIFEST\s*=\s*\[/;
  if (!targetPattern.test(manifestRaw)) {
    console.error(`${C_RED}✖ Không tìm thấy mảng 'const CV_MANIFEST = [' trong cv-manifest.js!${C_RESET}`);
    process.exit(1);
  }

  const updatedManifestRaw = manifestRaw.replace(
    targetPattern,
    `const CV_MANIFEST = [\n${newEntryCode}`
  );

  fs.writeFileSync(MANIFEST_PATH, updatedManifestRaw, "utf8");
  console.log(`${C_GREEN}✔ Đã cập nhật cv-manifest.js (đặt ở đầu danh sách).${C_RESET}`);

  // Tự động kiểm tra tính hợp lệ bằng verify-cv-data.js
  console.log(`\n⏳ Đang tự động kiểm định tính hợp lệ theo AGENTS.md...`);
  try {
    const { execSync } = require("child_process");
    const verifyOutput = execSync("node scripts/verify-cv-data.js", {
      cwd: ROOT_DIR,
      encoding: "utf8",
    });
    console.log(verifyOutput);
  } catch (err) {
    console.error(`${C_RED}✖ Lỗi kiểm định dữ liệu:${C_RESET}`, err.stdout || err.message);
    process.exit(1);
  }

  console.log(`${C_BOLD}${C_GREEN}==================================================${C_RESET}`);
  console.log(`${C_BOLD}${C_GREEN}🎉 TẠO BẢN CV MỚI THÀNH CÔNG RỰC RỠ!${C_RESET}`);
  console.log(`${C_BOLD}${C_GREEN}==================================================${C_RESET}`);
  console.log(`\n📁 File dữ liệu: ${C_CYAN}data/${fileName}${C_RESET}`);
  console.log(`🏷️  Mã phiên bản: ${C_YELLOW}${key}${C_RESET}`);
  console.log(`🏢 Công ty: ${C_BOLD}${company}${C_RESET}`);
  console.log(`💼 Chức danh: ${title}`);
  console.log(`\n🔗 Mở trình duyệt xem ngay:`);
  console.log(`   ${C_CYAN}http://localhost:8080/index.html?type=${key}${C_RESET}`);
  console.log(`   hoặc mở trực tiếp: ${C_CYAN}index.html?type=${key}${C_RESET}\n`);
}

main().catch((err) => {
  console.error(`${C_RED}✖ Đã xảy ra lỗi:${C_RESET}`, err);
  process.exit(1);
});
