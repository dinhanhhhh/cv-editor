// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}


var cvData = {
  vi: {
        projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "AI Integration Researcher Intern",
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
      "Fresher với nền tảng Khoa học Máy tính và đam mê mạnh mẽ với AI, LLMs và Agentic AI. Có kinh nghiệm thực tế xây dựng hệ thống backend tự động hóa, tích hợp API và xử lý dữ liệu. Thành thạo Python và JavaScript, có khả năng tiếp thu nhanh các công nghệ mới như Generative AI, prompt engineering và các mô hình AI tiên tiến. Sẵn sàng làm việc full-time trong môi trường năng động và không ngừng học hỏi.",
    education: cvGlobalEdu.vi,
    projects: [
            {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng thông minh với hệ thống backend tự động hóa và xử lý dữ liệu người dùng theo thời gian thực.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Xây dựng pipeline xử lý dữ liệu tự động với hơn 20 RESTful API endpoints bằng Node.js và Express.",
          "Tích hợp hệ thống xác thực thông minh với JWT, RBAC và refresh token flow để bảo vệ dữ liệu người dùng.",
          "Tối ưu truy vấn MongoDB, giảm thời gian phản hồi API xuống dưới 300ms thông qua indexing và query optimization.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Python scripting",
      },
            {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack hỗ trợ tự động hóa quy trình quản lý dữ liệu sinh viên và xử lý thông tin học thuật.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Thiết kế kiến trúc backend mô-đun với Node.js/Express, hỗ trợ mở rộng và tích hợp module AI trong tương lai.",
          "Tích hợp Swagger để tài liệu hóa API tự động, tạo nền tảng cho việc kết nối các AI agent.",
          "Phát triển dashboard xử lý dữ liệu real-time với CRUD thông minh và cơ chế đồng bộ dữ liệu tức thì.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      }
        ],
    skills: [
      {
        cat: "AI & LLM",
        items:
          "Generative AI, Prompt Engineering, LLM APIs (OpenAI, Gemini), Agentic AI concepts, AI-first mindset",
      },
      {
        cat: "Lập trình",
        items:
          "Python, JavaScript, TypeScript, Node.js, REST API integration, Data processing",
      },
      {
        cat: "Backend & Data",
        items:
          "Express.js, MongoDB, PostgreSQL, MySQL, API design, Automation scripting",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Công cụ",
        items: "Git/GitHub, Postman, Swagger, Docker, Vercel, VS Code",
      },
      {
        cat: "Ngoại ngữ",
        items:
          "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật, giao tiếp công việc, có thể viết báo cáo kỹ thuật bằng tiếng Anh",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_AI_Backend_Intern",
  },

  en: {
        projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "AI Integration Researcher Intern",
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
      skills: "SKILLS",
    },
    objective:
      "Computer Science graduate with a strong passion for AI, Large Language Models, and Agentic AI systems. Hands-on experience building automated backend systems, integrating APIs, and processing data at scale. Proficient in Python and JavaScript with a rapid learning ability for emerging AI technologies including Generative AI, prompt engineering, and advanced AI models. Eager to grow in a fast-paced, AI-driven environment.",
    education: cvGlobalEdu.en,
    projects: [
            {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "An intelligent recruitment platform with automated data processing pipelines and real-time user data handling.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Built automated data processing pipelines with 20+ RESTful API endpoints using Node.js and Express.",
          "Implemented secure authentication with JWT, RBAC, and refresh token flow to protect user data.",
          "Optimized MongoDB queries through indexing strategies, reducing API response time to under 300ms.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Python scripting",
      },
            {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "A full-stack administrative system supporting automated data management and real-time academic data processing.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Designed a modular backend architecture with Node.js/Express, built for scalability and future AI module integration.",
          "Integrated Swagger for automated API documentation, creating a solid base for AI agent connectivity.",
          "Built a real-time data dashboard with intelligent CRUD operations and instant data synchronization.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind, Swagger",
      }
        ],
    skills: [
      {
        cat: "AI & LLM",
        items:
          "Generative AI, Prompt Engineering, LLM APIs (OpenAI, Gemini), Agentic AI concepts, AI-first mindset",
      },
      {
        cat: "Programming",
        items:
          "Python, JavaScript, TypeScript, Node.js, REST API integration, Data processing",
      },
      {
        cat: "Backend & Data",
        items:
          "Express.js, MongoDB, PostgreSQL, MySQL, API design, Automation scripting",
      },
      {
        cat: "Frontend",
        items: "React.js, Next.js, Tailwind CSS, Responsive Design",
      },
      {
        cat: "Tools",
        items: "Git/GitHub, Postman, Swagger, Docker, Vercel, VS Code",
      },
      {
        cat: "English",
        items:
          "Read technical docs, workplace communication, able to write technical reports in English",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_AI_Backend_Intern",
  },
};
