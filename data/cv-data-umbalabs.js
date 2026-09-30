// =========================================================================
// UMBALABS CV DATA - JUNIOR FULLSTACK DEVELOPER (AI-ORIENTED)
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  meta: {
    company: "CÔNG TY TNHH CÔNG NGHỆ UMBALABS",
    position: "Junior Fullstack Developer",
    recipient: "Bộ phận Tuyển dụng Umbalabs",
    email: "contact@umbalabs.com",
    contact: "56 Đường Số 7, KDC Him Lam, Phường Tân Hưng, Quận 7, TP.HCM",
    jobUrl: "https://www.topcv.vn/viec-lam/junior-fullstack-developer-dinh-huong-ai/2305336.html",
    notes: "Địa chỉ: 56 Đường Số 7, KDC Him Lam, P. Tân Hưng, Quận 7, TP.HCM. Làm việc T2-T6 (08:00 - 17:00).",
    pitchHighlights: "Fullstack React/Next.js/Node.js, tích hợp LLM APIs (Gemini/OpenAI), scripting Python và CI/CD tự động hóa"
  },
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Junior Fullstack Developer",
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
      "Kỹ sư phần mềm tốt nghiệp chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM, có nền tảng Full-Stack vững chắc (React, Next.js, TypeScript, Node.js) và tư duy phát triển sản phẩm ứng dụng AI (AI-First). Có kinh nghiệm thực chiến tích hợp LLM APIs, xử lý structured output/validation, viết script Python tự động hóa và thiết lập luồng CI/CD qua GitHub Actions. Tác phong kỷ luật, tư duy giải quyết vấn đề độc lập và mong muốn đồng hành lâu dài cùng Umbalabs.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính (kết nối thư viện dữ liệu Vnstock3).",
        tasks: [
          "Xây dựng và tối ưu các dịch vụ RESTful APIs sử dụng Next.js Route Handlers và Node.js phục vụ truy xuất dữ liệu.",
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và quản trị PostgreSQL trên hạ tầng Supabase Cloud.",
          "Hiện thực hóa cơ chế xác thực bảo mật OAuth với NextAuth, tuân thủ nguyên tắc bảo mật và quản lý an toàn secret/API keys.",
          "Kiểm thử chức năng và hiệu năng API bằng Postman, xử lý chặt chẽ các trạng thái loading, lỗi ngoại lệ và edge cases.",
          "Làm việc theo quy trình Git chuẩn (branching, pull request, code review) và triển khai ứng dụng trên Vercel.",
        ],
        tech: "React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase, NextAuth, Postman, Git",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG CV EDITOR & AI AUTOMATION",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Nền tảng tự động hóa quản lý và tối ưu hồ sơ CV kết hợp Serverless, AI và quy trình CI/CD.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng kiến trúc Backend Serverless trên Cloudflare Workers kết nối Telegram Bot làm giao diện điều khiển 2 chiều.",
          "Tích hợp LLM APIs (Google Gemini / OpenAI), xử lý structured JSON output, validation dữ liệu và điều phối các tác vụ AI.",
          "Viết script Python hỗ trợ xử lý, chuẩn bị tập dữ liệu và tự động hóa quy trình kiểm tra đánh giá mô hình.",
          "Thiết lập pipeline CI/CD tự động qua GitHub Actions phục vụ build, kiểm thử tự động và cập nhật hệ thống.",
        ],
        tech: "Cloudflare Workers, JavaScript/TypeScript, Python, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Website thương mại điện tử hoàn chỉnh phục vụ mua sắm trực tuyến với thời gian tải trang dưới 2 giây.",
        tasks: [
          "Xây dựng giao diện người dùng Responsive với React và Tailwind CSS, tối ưu State Management và hiệu năng render.",
          "Phát triển hệ thống Backend RESTful API với Node.js, Express và MongoDB, thiết kế schema dữ liệu chặt chẽ.",
          "Triển khai xác thực và phân quyền bằng JSON Web Token (JWT), quản lý giỏ hàng và tích hợp quy trình đặt hàng.",
          "Đóng gói môi trường phát triển với Docker Compose và kiểm thử luồng nghiệp vụ end-to-end.",
        ],
        tech: "React, Tailwind CSS, Node.js, Express, MongoDB, JWT, Docker, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend & UI",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend & API",
        items: "Node.js, Express.js, NestJS (cơ bản), RESTful APIs, Structured Output, Validation, JWT/OAuth Security",
      },
      {
        cat: "AI & Python",
        items: "LLM APIs (OpenAI, Gemini), AI Agent Workflows, Prompt Engineering, Python (Data Scripting & Automation)",
      },
      {
        cat: "Cơ sở dữ liệu & DevOps",
        items: "PostgreSQL, Supabase Cloud, MongoDB, Git (PR & Code Review), Docker, CI/CD GitHub Actions, Postman",
      },
    ],
    btnText: "In / Tải PDF",
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Junior Fullstack Developer",
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
      "Passionate Software Developer with a Computer Science degree from Ho Chi Minh City Open University. Solid Full-Stack foundation (React, Next.js, TypeScript, Node.js) combined with an AI-first mindset. Practical experience integrating LLM APIs, handling structured output/validation, writing Python automation scripts, and setting up CI/CD workflows via GitHub Actions. Eager to contribute and build impactful AI-powered products at Umbalabs.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial market data analysis system integrated with Vnstock3 financial data library.",
        tasks: [
          "Developed and optimized RESTful APIs using Next.js Route Handlers and Node.js for real-time market data retrieval.",
          "Designed relational database schemas and managed PostgreSQL on Supabase Cloud infrastructure.",
          "Implemented secure OAuth authentication flow with NextAuth, adhering to strict secret & API-key handling principles.",
          "Conducted API functional & performance testing via Postman, gracefully managing loading states, errors, and edge cases.",
          "Collaborated via standard Git workflows (branching, pull requests, code reviews) and deployed instances to Vercel.",
        ],
        tech: "React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase, NextAuth, Postman, Git",
      },
    ],
    projects: [
      {
        name: "CV EDITOR & AI AUTOMATION SYSTEM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Automated CV management and optimization platform integrating Serverless, AI APIs, and CI/CD pipelines.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered a serverless backend on Cloudflare Workers using Telegram Bot as a bi-directional control interface.",
          "Integrated LLM APIs (Gemini/OpenAI), parsing structured JSON output, implementing schema validation and AI orchestration.",
          "Wrote Python scripts for data preparation, dataset verification, and automated evaluation tasks.",
          "Established automated GitHub Actions CI/CD pipelines for testing, verification, and deployment.",
        ],
        tech: "Cloudflare Workers, JavaScript/TypeScript, Python, LLM APIs, Telegram Bot API, GitHub Actions, CI/CD",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Full-featured online shopping platform delivering sub-2-second page loads.",
        tasks: [
          "Built responsive UI with React and Tailwind CSS, optimizing client state management and rendering performance.",
          "Developed backend RESTful services using Node.js, Express, and MongoDB with clean data models.",
          "Implemented JWT authentication, role-based access control, cart management, and order checkout flows.",
          "Containerized development environment using Docker Compose and conducted end-to-end integration tests.",
        ],
        tech: "React, Tailwind CSS, Node.js, Express, MongoDB, JWT, Docker, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend & UI",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Backend & API",
        items: "Node.js, Express.js, NestJS (fundamentals), RESTful APIs, Structured Output, Validation, JWT/OAuth Security",
      },
      {
        cat: "AI & Python",
        items: "LLM APIs (OpenAI, Gemini), AI Agent Workflows, Prompt Engineering, Python (Data Scripting & Automation)",
      },
      {
        cat: "Databases & DevOps",
        items: "PostgreSQL, Supabase Cloud, MongoDB, Git (PR & Code Review), Docker, CI/CD GitHub Actions, Postman",
      },
    ],
    btnText: "Print / Save PDF",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
