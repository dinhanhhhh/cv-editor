// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Frontend Developer Intern (ReactJS)",
    contact: [
      { icon: "phone", text: "0349421079" },
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
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG",
    },
    objective:
      "Lập trình viên Frontend chuyên ReactJS và Next.js với tư duy AI-first và sự hiểu biết sâu sắc về UI/UX. Luôn chú trọng thiết kế giao diện responsive mượt mà và tối ưu hóa trải nghiệm người dùng (UX flow, micro-interactions). Có kinh nghiệm thực tế phát triển các dự án cá nhân và sản phẩm full-stack, tích hợp các tính năng realtime (WebSocket) và API phức tạp. Chủ động ứng dụng các công cụ AI (Gemini, Claude, GitHub Copilot) để tăng tốc độ phát triển và tối ưu hóa chất lượng code. Sẵn sàng học hỏi, làm việc nhóm tốt và mong muốn gắn bó lâu dài để đồng hành cùng CatSpeak phát triển các giải pháp EdTech đột phá.",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "NỀN TẢNG TUYỂN DỤNG & KẾT NỐI (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Ứng dụng web tuyển dụng hiện đại hỗ trợ đăng tin tuyển dụng, ứng tuyển trực tuyến và quản lý hồ sơ người dùng.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và xây dựng giao diện Next.js responsive với Tailwind CSS, tối ưu hóa hiển thị và tăng tính nhất quán giao diện.",
          "Xử lý chuẩn chỉ đầy đủ 3 trạng thái của dữ liệu (Loading/Skeleton, Empty, Error) cho mọi màn hình tương tác, cải thiện đáng kể UX.",
          "Áp dụng thành thạo các công cụ AI (GitHub Copilot, Gemini) trong quá trình coding để tối ưu hóa thuật toán và đẩy nhanh tiến độ dự án gấp 2 lần.",
          "Tích hợp RESTful API xử lý luồng đăng ký/đăng nhập, ứng tuyển và quản lý trạng thái xác thực phía client.",
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Tailwind CSS, REST API, Git, Vercel",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Ứng dụng mua sắm trực tuyến với giao diện người dùng trực quan, giỏ hàng động và quy trình thanh toán tối ưu.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Phát triển UI giỏ hàng, danh sách sản phẩm và luồng thanh toán (checkout flow) bằng ReactJS kết hợp validation form thông minh.",
          "Tích hợp RESTful API từ backend, xử lý đồng bộ dữ liệu giỏ hàng và trạng thái đơn hàng tức thì trên giao diện client.",
          "Cấu hình và tối ưu SEO (meta tags, semantic HTML) giúp cải thiện chỉ số đánh giá hiệu năng giao diện.",
        ],
        tech: "React, Vite, Tailwind CSS, HTML5/CSS3, JavaScript (ES6+), REST API, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend Core",
        items:
          "ReactJS, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3 / Vanilla CSS",
      },
      {
        cat: "UI/UX & Styling",
        items:
          "Tailwind CSS, Responsive Web Design, Mobile-first, Micro-animations, Figma (view)",
      },
      {
        cat: "Real-time & State",
        items:
          "WebSocket (Socket.io-client), Zustand, React Hooks, State Management",
      },
      {
        cat: "AI & Coding Tools",
        items: "Gemini, Claude, ChatGPT, GitHub Copilot, Prompt Engineering",
      },
      {
        cat: "Công cụ & Deploy",
        items: "Git/GitHub, Vercel, Postman, VS Code, Swagger",
      },
    ],

    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Frontend_CatSpeak",
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Frontend Developer Intern (ReactJS)",
    contact: [
      { icon: "phone", text: "0349421079" },
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
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Frontend Developer specializing in ReactJS and Next.js with an AI-first mindset and a strong understanding of UI/UX. Passionate about building seamless responsive interfaces and optimizing user experiences (UX flows, micro-interactions). Experienced in developing full-stack personal projects and applications with real-time (WebSocket) features and complex API integrations. Actively leverages AI tools (Gemini, Claude, GitHub Copilot) to accelerate development speed and elevate code quality. A proactive team player, fast learner, and eager to contribute long-term to CatSpeak's growth in the EdTech space.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "JOB PORTAL & CONNECTIVITY PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A modern recruitment platform supporting job posting, online applications, and applicant profile management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed and built a responsive Next.js interface with Tailwind CSS, improving layout consistency across all devices.",
          "Rigorously handled 3 core data states (Loading/Skeleton, Empty, Error) for all pages, elevating overall UX quality.",
          "Mastered AI-assisted development tools (GitHub Copilot, Gemini) to optimize algorithms and double development velocity.",
          "Integrated RESTful APIs to manage login/register, job application processes, and client-side authentication states.",
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Tailwind CSS, REST API, Git, Vercel",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "An online shopping application with an intuitive visual UI, dynamic shopping cart, and optimized checkout flow.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed product listings, shopping cart UI, and checkout flow with smart frontend form validation.",
          "Integrated backend RESTful APIs to synchronize cart data and order status in real time on the client-side UI.",
          "Configured basic SEO optimizations (meta tags, semantic HTML) to improve performance and audit scores.",
        ],
        tech: "React, Vite, Tailwind CSS, HTML5/CSS3, JavaScript (ES6+), REST API, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend Core",
        items:
          "ReactJS, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3 / Vanilla CSS",
      },
      {
        cat: "UI/UX & Styling",
        items:
          "Tailwind CSS, Responsive Web Design, Mobile-first, Micro-animations, Figma (view)",
      },
      {
        cat: "Real-time & State",
        items:
          "WebSocket (Socket.io-client), Zustand, React Hooks, State Management",
      },
      {
        cat: "AI & Coding Tools",
        items: "Gemini, Claude, ChatGPT, GitHub Copilot, Prompt Engineering",
      },
      {
        cat: "Tools & Deploy",
        items: "Git/GitHub, Vercel, Postman, VS Code, Swagger",
      },
    ],

    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Frontend_CatSpeak",
  },
};
