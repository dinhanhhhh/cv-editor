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
        name: "HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Nền tảng quản trị và tự động hóa quy trình nghiệp vụ ứng dụng kiến trúc AI Agent và Serverless.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng giao diện web tương tác thời gian thực bằng Vanilla JS/HTML5/CSS3 với hiệu năng cao, zero-dependency.",
          "Thiết kế Serverless Backend trên Cloudflare Workers kết nối Telegram Bot Bridge và tích hợp LLM API (Gemini/OpenAI) để xử lý logic AI Agent tự động.",
          "Tự động hóa pipeline CI/CD với GitHub Actions: Nhận lệnh từ Telegram bot -> AI Agent phân tích và sinh mã nguồn -> tự động commit và trigger build sản phẩm trong 40 giây.",
        ],
        tech: "JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD",
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
        name: "AI AGENT & AUTOMATION PLATFORM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "Enterprise automation and management platform leveraging AI Agent architecture and Serverless computing.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered real-time interactive web interfaces using Vanilla JS/HTML5/CSS3 with high performance and zero external dependencies.",
          "Designed a Serverless Backend on Cloudflare Workers bridging Telegram Bot and LLM APIs (Gemini/OpenAI) to automate AI Agent workflows.",
          "Automated CI/CD pipelines with GitHub Actions: Processed commands via Telegram Bot -> AI Agent analyzed & generated code -> auto-committed & triggered production builds within 40s.",
        ],
        tech: "JavaScript (ES6+), Cloudflare Workers, LLM API, AI Agent, Telegram Bot API, GitHub Actions, CI/CD",
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
