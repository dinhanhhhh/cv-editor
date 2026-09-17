// ===================================
// CV DATA - ON HAND BI FULLSTACK DEVELOPER (REACT.JS / NEXT.JS / NODE.JS / POSTGRESQL / MYSQL)
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Full-Stack Developer Intern",
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
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG KỸ THUẬT",
    },
    objective:
      "Sinh viên IT định hướng Fullstack Developer với nền tảng vững chắc về Frontend (React.js, Next.js, HTML5, CSS3, JavaScript/TypeScript, Responsive & UI/UX Design) và Backend (OOP, Node.js, RESTful API, PostgreSQL, MySQL, MongoDB). Đã có kinh nghiệm thực tế trong thiết kế cơ sở dữ liệu, xây dựng RESTful APIs và phát triển hệ thống phân tích dữ liệu chứng khoán. Sẵn sàng làm việc remote ban ngày (8:30 - 17:30) và trao đổi buổi tối khi cần, có tinh thần chủ động học hỏi, chịu khó tiếp thu feedback và sẵn sàng tiếp cận các công nghệ backend mới như Ruby hay Golang theo yêu cầu dự án tại On Hand BI.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối dữ liệu tài chính Vnstock3).",
        tasks: [
          "Thiết kế cấu trúc cơ sở dữ liệu và triển khai PostgreSQL trên hạ tầng Supabase Cloud.",
          "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để xử lý và truy xuất dữ liệu chứng khoán.",
          "Phát triển giao diện web responsive, hỗ trợ người dùng theo dõi và phân tích biểu đồ dữ liệu mượt mà.",
          "Tích hợp xác thực Google OAuth (NextAuth) và tối ưu hóa thời gian phản hồi truy vấn dữ liệu.",
          "Kiểm thử API với Postman, đóng gói và triển khai ứng dụng demo ổn định lên môi trường Cloud Vercel.",
        ],
        tech: "Next.js, React.js, PostgreSQL, Supabase, NextAuth, RESTful API, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Nền tảng tuyển dụng hỗ trợ đăng tin, ứng tuyển và quản lý thông tin tuyển dụng toàn diện.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển giao diện responsive chuẩn UI/UX trên React.js / Next.js 15 kết hợp Tailwind CSS.",
          "Thiết kế và xây dựng hơn 20 RESTful API endpoints với Node.js, Express và MongoDB (NoSQL).",
          "Xây dựng luồng xác thực an toàn với JWT, HttpOnly Cookies và phân quyền RBAC.",
          "Tối ưu hóa truy vấn dữ liệu backend, đảm bảo tốc độ phản hồi API dưới 300ms.",
        ],
        tech: "Next.js 15, React.js, TypeScript, Node.js, Express, MongoDB (NoSQL), JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống quản trị hồ sơ sinh viên, đăng ký học phần và trực quan hóa kết quả học tập.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Áp dụng nguyên lý Lập trình hướng đối tượng (OOP) thiết kế cấu trúc Backend mô-đun hóa sạch sẽ, dễ bảo trì.",
          "Xây dựng ứng dụng Frontend giao diện responsive trực quan, xử lý luồng thao tác CRUD sinh động.",
          "Thiết kế CSDL quan hệ (PostgreSQL/MySQL), viết tài liệu API bằng Swagger hỗ trợ bàn giao và kiểm thử.",
          "Triển khai xác thực Token-based (Access/Refresh Token) và xử lý lỗi hệ thống chặt chẽ.",
        ],
        tech: "Node.js, Express, OOP, PostgreSQL / MySQL, MongoDB, React.js, Swagger, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), TypeScript, Responsive Design, UI/UX Basics",
      },
      {
        cat: "Backend & OOP",
        items: "Tư duy Lập trình hướng đối tượng (OOP), Node.js, Express.js, RESTful API, Sẵn sàng học Ruby / Golang",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "PostgreSQL, MySQL, NoSQL (MongoDB), Supabase, Tối ưu hóa truy vấn SQL/NoSQL",
      },
      {
        cat: "Quy trình & Công cụ",
        items: "Làm việc Remote (8:30 - 17:30), Git/GitHub, Postman, Swagger, Vercel, Docker",
      },
      {
        cat: "Ngoại ngữ & Thái độ",
        items: "Tiếng Anh đọc hiểu tài liệu kỹ thuật; Chủ động, chịu khó tiếp thu feedback, tư duy sản phẩm",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Fullstack_OnHandBI_VI",
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Full-Stack Developer Intern",
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
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "IT Student aiming for a Fullstack Developer role with strong foundation in Frontend (React.js, Next.js, HTML/CSS/JS, Responsive & UI/UX Design) and Backend (OOP, Node.js, RESTful API, PostgreSQL, MySQL, MongoDB). Experienced in database design, REST API creation, and building financial data analysis platforms. Available for remote work (8:30 - 17:30 + evening flexibility), proactive, feedback-oriented, and ready to learn new backend languages like Ruby or Golang as required by On Hand BI.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Stock market data analysis platform integrated with Vnstock3 financial data library.",
        tasks: [
          "Designed relational database schemas and deployed PostgreSQL database on Supabase Cloud.",
          "Developed 15+ RESTful API endpoints using Next.js Route Handlers for stock data querying.",
          "Built responsive UI components for user-friendly financial chart viewing and data tracking.",
          "Integrated Google OAuth authentication via NextAuth and optimized data response times.",
          "Tested APIs using Postman and deployed the stable demo build onto Vercel Cloud.",
        ],
        tech: "Next.js, React.js, PostgreSQL, Supabase, NextAuth, RESTful API, Postman, Vercel, Git",
      },
    ],
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Recruitment platform streamlining job posting, applications, and user management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed responsive UI/UX frontend using React.js / Next.js 15 and Tailwind CSS.",
          "Designed and implemented 20+ RESTful API endpoints with Node.js, Express, and MongoDB (NoSQL).",
          "Implemented JWT authentication with HttpOnly cookies and RBAC authorization flow.",
          "Optimized backend queries, ensuring API response times under 300ms.",
        ],
        tech: "Next.js 15, React.js, TypeScript, Node.js, Express, MongoDB (NoSQL), JWT, Tailwind CSS",
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Administrative system for student records, course registration, and academic visualization.",
        github:
          "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Applied OOP principles to design a clean, modular backend structure.",
          "Built a responsive admin interface for smooth real-time CRUD operations.",
          "Designed relational databases (PostgreSQL/MySQL) and documented APIs with Swagger.",
          "Implemented token-based authentication (Access/Refresh Tokens) and robust error handling.",
        ],
        tech: "Node.js, Express, OOP, PostgreSQL / MySQL, MongoDB, React.js, Swagger, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), TypeScript, Responsive Design, UI/UX Basics",
      },
      {
        cat: "Backend & OOP",
        items: "OOP Principles, Node.js, Express.js, RESTful API, Eager to learn Ruby / Golang",
      },
      {
        cat: "Databases",
        items: "PostgreSQL, MySQL, NoSQL (MongoDB), Supabase, SQL/NoSQL Query Optimization",
      },
      {
        cat: "Workflow & Tools",
        items: "Remote Work (8:30 - 17:30), Git/GitHub, Postman, Swagger, Vercel, Docker",
      },
      {
        cat: "Language & Soft Skills",
        items: "English (technical docs reading); Proactive, receptive to feedback, product mindset",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Fullstack_OnHandBI_EN",
  },
};

if (typeof module !== "undefined") module.exports = cvData;
