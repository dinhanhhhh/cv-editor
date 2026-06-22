// ===================================
// CV DATA FOR DEKON INTERNSHIP
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

if (typeof require !== "undefined" && typeof cvGlobalExp === "undefined") {
  global.cvGlobalExp = require("./cv-global.js");
}

var cvData = {
  vi: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Software Engineering Intern",
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
      experience: "KINH NGHIỆM THỰC TẾ",
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Sinh viên tốt nghiệp ngành Khoa học Máy tính có nền tảng tư duy logic vững chắc. Nắm vững lập trình hướng đối tượng (OOP), cấu trúc dữ liệu và giải thuật. Có kinh nghiệm thực chiến phát triển ứng dụng Web Full-Stack và xây dựng hệ thống backend (Node.js/Express), tối ưu hóa truy vấn cơ sở dữ liệu (PostgreSQL, MongoDB). Khả năng giao tiếp tốt bằng tiếng Anh, mong muốn tham gia chương trình thực tập IT tại DEKON để học hỏi từ các Tech Lead giàu kinh nghiệm và tiếp cận các công nghệ mới như Data, AI, Blockchain.",
    education: cvGlobalEdu.vi,
    experience: cvGlobalExp.vi,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng toàn diện giúp tối ưu hóa quá trình tuyển dụng cho cả nhà tuyển dụng và ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển hơn 20 RESTful API endpoints cho quản lý việc làm và hồ sơ ứng tuyển bằng Node.js và Express.",
          "Xây dựng cơ chế xác thực JWT kết hợp HttpOnly cookies, phân quyền người dùng (RBAC) và refresh token flow.",
          "Tối ưu hóa các truy vấn phức tạp (MongoDB Aggregation Pipeline) giúp phản hồi hệ thống ổn định dưới 300ms.",
          "Ứng dụng AI Coding Workflow để thực hiện unit test và refactor code theo chuẩn OOP và Clean Code.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống quản trị full-stack để quản lý hồ sơ sinh viên, đăng ký khóa học và kết quả học tập.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng backend theo cấu trúc mô-đun vững chắc với Node.js/Express, tách biệt rõ ràng logic nghiệp vụ.",
          "Sử dụng Swagger để tài liệu hóa chi tiết các API, tối ưu hóa quá trình tích hợp giữa Frontend và Backend.",
          "Phát triển dashboard quản trị responsive với đầy đủ thao tác CRUD và xử lý dữ liệu thời gian thực.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
    ],
    skills: [
      {
        cat: "Nền tảng IT",
        items:
          "Lập trình hướng đối tượng (OOP), Cấu trúc dữ liệu & Giải thuật, Tư duy logic hệ thống",
      },
      {
        cat: "Ngôn ngữ & Core",
        items:
          "JavaScript/TypeScript (ES6+), Node.js, HTML5 & CSS3, basic C/C++",
      },
      {
        cat: "Backend & Web",
        items:
          "Express.js, RESTful API, JWT, RBAC Middleware, Next.js, React.js",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "PostgreSQL, MongoDB (Mongoose), MySQL, Tối ưu hóa truy vấn",
      },
      {
        cat: "Công cụ & Quy trình",
        items: "Git/GitHub, Docker, Swagger, Postman, Agile/Scrum",
      },
      {
        cat: "Tiếng Anh",
        items:
          "Đọc hiểu tài liệu kỹ thuật tốt, có khả năng giao tiếp phục vụ công việc và cộng tác quốc tế",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_DEKON_Intern",
  },

  en: {
    experienceDisplayLimit: 1,
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Software Engineering Intern",
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
      experience: "WORK EXPERIENCE",
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Computer Science graduate with a solid logical thinking foundation. Well-versed in Object-Oriented Programming (OOP), Data Structures, and Algorithms. Experienced in developing Full-Stack Web applications, building back-end systems (Node.js/Express), and optimizing database queries (PostgreSQL, MongoDB). Good English communication skills, eager to join the IT Internship program at DEKON to learn from senior Technical Leads and gain exposure to advanced technologies like Data, AI, and Blockchain.",
    education: cvGlobalEdu.en,
    experience: cvGlobalExp.en,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A comprehensive recruitment platform optimizing hiring workflows for both employers and job seekers.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed 20+ RESTful API endpoints for job postings and application management using Node.js and Express.",
          "Implemented secure JWT-based authentication with HttpOnly cookies, RBAC, and refresh token flows.",
          "Optimized complex database queries (MongoDB Aggregation Pipelines), ensuring sub-300ms API response times.",
          "Utilized AI-Assisted workflows for unit testing and code refactoring, adhering to OOP and Clean Code principles.",
        ],
        tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 09/2025",
        role: "Developer",
        desc: "An administrative full-stack application for managing student profiles, course registrations, and academic results.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Built a modular backend using Node.js and Express, ensuring clean separation of business logic.",
          "Integrated Swagger for automated, detailed API documentation, facilitating smoother frontend-backend integration.",
          "Developed a responsive admin dashboard with CRUD capabilities and real-time data handling.",
        ],
        tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger",
      },
    ],
    skills: [
      {
        cat: "IT Foundations",
        items:
          "Object-Oriented Programming (OOP), Data Structures & Algorithms, System Logical Thinking",
      },
      {
        cat: "Languages & Core",
        items:
          "JavaScript/TypeScript (ES6+), Node.js, HTML5 & CSS3, basic C/C++",
      },
      {
        cat: "Backend & Web",
        items:
          "Express.js, RESTful API, JWT, RBAC Middleware, Next.js, React.js",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MongoDB (Mongoose), MySQL, Query Optimization",
      },
      {
        cat: "Tools & Methods",
        items: "Git/GitHub, Docker, Swagger, Postman, Agile/Scrum",
      },
      {
        cat: "English",
        items:
          "Good technical reading, capable of professional communication and international collaboration",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_DEKON_Intern",
  },
};
