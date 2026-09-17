// ===================================
// CV DATA - KỸ SƯ CNTT (CẢNG HÀNG KHÔNG LIÊN KHƯƠNG)
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Kỹ Sư Công Nghệ Thông Tin",
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
      projects: "DỰ ÁN & KINH NGHIỆM KỸ THUẬT",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Cử nhân Khoa học Máy tính có tư duy hệ thống và nền tảng kỹ thuật toàn diện về phần mềm, cơ sở dữ liệu (MySQL, PostgreSQL, MongoDB) và hạ tầng CNTT cơ bản. Thành thạo lập trình web, tự động hóa quy trình (Automation Workflows), thiết kế & kiểm thử RESTful API, chẩn đoán lỗi hệ thống (debug) qua Chrome DevTools/Postman. Tinh thần kỷ luật cao, chủ động trong công việc, sẵn sàng tiếp thu các quy trình vận hành CNTT chuyên ngành hàng không và hỗ trợ kỹ thuật xử lý sự cố 24/7.",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "HỆ THỐNG TỰ ĐỘNG HÓA CV TÍCH HỢP AI",
        date: "05/2026 - Hiện tại",
        role: "Developer",
        desc: "Hệ thống tự động hóa tối ưu và cá nhân hóa CV theo mô tả công việc (JD) tích hợp AI Agent và CI/CD Pipeline.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Xây dựng Web App tĩnh (Vanilla HTML/CSS/JS), tối ưu tốc độ tải trang, hỗ trợ chỉnh sửa trực tiếp (live inline editing) và quản lý state cục bộ.",
          "Thiết kế serverless backend trên Cloudflare Workers kết nối Telegram Bot Bridge với Gemini API và GitHub API.",
          "Tối ưu luồng dữ liệu tự động hóa (Data Flow): Nhận JD qua Telegram -> AI phân tích nội dung -> tự động commit code lên GitHub -> kích hoạt GitHub Actions tự sinh file PDF.",
        ],
        tech: "Vanilla JS, Cloudflare Workers, Telegram Bot API, Gemini API, GitHub API, GitHub Actions",
      },
      {
        name: "HỆ THỐNG QUẢN LÝ DỮ LIỆU & PHÂN QUYỀN (JOB PORTAL PLATFORM)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống ứng dụng web quản lý dữ liệu người dùng, phân quyền truy cập và xử lý quy trình nộp hồ sơ trực tuyến.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Xây dựng giao diện ứng dụng web chuẩn responsive, tối ưu hóa trải nghiệm người dùng và xử lý đầy đủ các trạng thái dữ liệu (Loading, Empty, Error).",
          "Kiểm thử và xác thực các RESTful API endpoints bằng Postman, đảm bảo tính toàn vẹn và chuẩn xác của dữ liệu truyền tải.",
          "Chẩn đoán và khắc phục lỗi giao diện/kết nối bằng Chrome DevTools; quản lý mã nguồn và giải quyết xung đột code bằng Git/GitHub.",
        ],
        tech: "Next.js, React, TypeScript, Postman, Chrome DevTools, MongoDB, Git",
      },
    ],
    skills: [
      {
        cat: "Quản trị & Vận hành CNTT",
        items:
          "Hỗ trợ kỹ thuật (IT Support), Chẩn đoán lỗi hệ thống (Debug & Troubleshooting), Chrome DevTools, Postman, Môi trường Windows/Linux",
      },
      {
        cat: "Cơ sở dữ liệu & Hệ thống",
        items:
          "PostgreSQL, MySQL, MongoDB, Supabase Cloud, Thiết kế & Tối ưu hóa truy vấn SQL, JSON Validation",
      },
      {
        cat: "Lập trình & Phát triển Web",
        items:
          "HTML5, CSS3, JavaScript (ES6+), TypeScript, ReactJS, Next.js, Node.js basic, RESTful API",
      },
      {
        cat: "Công cụ",
        items: "Git/GitHub, Vercel, Render, Docker, VS Code, Postman",
      },
      {
        cat: "Ngoại ngữ",
        items: "Tiếng Anh: Có thể đọc hiểu tài liệu kỹ thuật và giao tiếp công việc cơ bản",
      },
    ],

    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_KySuCNTT_LienKhuong",
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "IT Engineer",
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
      projects: "PROJECTS & TECHNICAL EXPERIENCE",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Computer Science graduate with a comprehensive technical foundation in software engineering, database management (MySQL, PostgreSQL, MongoDB), and basic IT infrastructure. Proficient in web development, process automation, RESTful API testing via Postman, and system debugging using Chrome DevTools. Highly disciplined, adaptable, and eager to master aviation IT operational workflows while offering dedicated 24/7 technical troubleshooting support.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "AUTOMATED CV BUILDER & AI TAILOR (CV-EDITOR)",
        date: "05/2026 - Present",
        role: "Developer",
        desc: "An automated CV optimization system integrating AI Agents to tailor resume contents based on Job Descriptions (JDs).",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Developed a lightweight static Web App using Vanilla HTML/CSS/JS, optimizing page load speed with live inline editing and local state management.",
          "Architected a serverless backend using Cloudflare Workers acting as a Telegram Bot Bridge to Gemini API and GitHub API.",
          "Streamlined the automated Data Flow: Telegram JD input -> AI content tailoring -> automated GitHub code commit -> GitHub Actions PDF generation in 40 seconds.",
        ],
        tech: "Vanilla JS, Cloudflare Workers, Telegram Bot API, Gemini API, GitHub API, GitHub Actions",
      },
      {
        name: "DATA MANAGEMENT & AUTHORIZATION SYSTEM (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A web platform designed for user profile administration, role-based authorization, and online application processing.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed responsive web interfaces, optimizing user experience and handling edge-case data states (Loading, Empty, Error).",
          "Tested RESTful API endpoints using Postman to ensure payload integrity and structural accuracy.",
          "Diagnosed and resolved UI and connection bugs via Chrome DevTools; managed codebase and merged conflicts with Git/GitHub.",
        ],
        tech: "Next.js, React, TypeScript, Postman, Chrome DevTools, MongoDB, Git",
      },
    ],
    skills: [
      {
        cat: "IT Operations & Support",
        items:
          "Technical Support, System Debugging & Troubleshooting, Chrome DevTools, Postman, Windows/Linux environments",
      },
      {
        cat: "Databases & Systems",
        items:
          "PostgreSQL, MySQL, MongoDB, Supabase Cloud, SQL Query Optimization, JSON Validation",
      },
      {
        cat: "Programming & Web Dev",
        items:
          "HTML5, CSS3, JavaScript (ES6+), TypeScript, ReactJS, Next.js, Node.js basic, RESTful API",
      },
      {
        cat: "Tools & Environment",
        items: "Git/GitHub, Vercel, Render, Docker, VS Code, Postman",
      },
      {
        cat: "Languages",
        items: "English: Technical documentation reading & basic work communication",
      },
    ],

    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_IT_Engineer_LienKhuong",
  },
};
