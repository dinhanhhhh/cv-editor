// ===================================
// CV DATA - Fresher Full-Stack Developer
// Phiên bản NÂNG CẤP (Level 9.5/10) - Tối ưu cho Agrizen
// Áp dụng: Technical Keywords, Live Demo, Link Code rõ ràng
// ===================================

const cvData = {
  vi: {
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Fresher Full-Stack Developer",
    contact: [
      { icon: "phone", text: "0349421079" },
      { icon: "email", text: "tdinhanh.it@gmail.com", link: "mailto:tdinhanh.it@gmail.com" },
      { icon: "github", text: "github.com/dinhanhhhh", link: "https://github.com/dinhanhhhh" },
      { icon: "address", text: "Thủ Đức, TP. Hồ Chí Minh" },
    ],
    sections: {
      objective: "MỤC TIÊU NGHỀ NGHIỆP",
      education: "HỌC VẤN",
      projects: "DỰ ÁN & KINH NGHIỆM",
      skills: "KỸ NĂNG",
    },
    objective: "Fresher Fullstack Developer với nền tảng React, Next.js, Node.js. Đã có kinh nghiệm xây dựng và triển khai các hệ thống full-stack thực tế. Mong muốn tham gia phát triển sản phẩm và nâng cao kỹ năng trong môi trường chuyên nghiệp.",
    education: {
      school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
      date: "2020 - 2024",
      detail: "Cử nhân Khoa học Máy tính"
    },
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "10/2025 - nay",
        role: "Developer",
        desc: "Hệ thống quản lý việc làm và hồ sơ ứng tuyển, xử lý luồng dữ liệu thực tế giữa Nhà tuyển dụng và Ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế 20+ RESTful API endpoints bằng Node.js & Express phục vụ quản lý việc làm và xử lý hồ sơ.",
          "Kết nối Next.js frontend với backend qua REST API, xử lý authentication và state người dùng.",
          "Triển khai phân quyền (RBAC) và bảo mật xác thực bằng JWT, HttpOnly cookies và Refresh Token flow.",
          "Tối ưu hóa Aggregation Pipeline trong MongoDB, giảm thời gian phản hồi API xuống dưới 300ms."
        ],
        tech: "Next.js, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Hệ thống quản trị hồ sơ sinh viên và kết quả học tập với Dashboard tương tác thời gian thực.",
        github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Xây dựng kiến trúc Backend Modular (Node.js/Express) giúp dễ dàng mở rộng và bảo trì mã nguồn.",
          "Tự động hóa tài liệu API bằng Swagger, giúp giảm 30% thời gian tích hợp giữa Frontend và Backend.",
          "Phát triển Dashboard Responsive quản lý 100% các thao tác CRUD dữ liệu sinh viên.",
          "Thiết lập luồng xác thực Access/Refresh Token đảm bảo an toàn dữ liệu và phiên đăng nhập người dùng."
        ],
        tech: "Node.js, Express, MongoDB, Next.js, TypeScript, Tailwind CSS, Swagger"
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "04/2025 - 05/2025",
        role: "Developer",
        desc: "Hệ thống mua sắm trực tuyến tích hợp quản lý tồn kho, đơn hàng và phân tích dữ liệu bán hàng.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Thiết kế hệ thống API xử lý đơn hàng và cập nhật tồn kho tự động theo thời gian thực.",
          "Triển khai cơ chế Data Validation và phân quyền quản trị Admin cho các tác vụ nhạy cảm.",
          "Tích hợp luồng thanh toán và quản lý giỏ hàng đồng bộ dữ liệu giữa React Frontend và Backend."
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Python"
      }
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, NestJS (Basic), JWT, RBAC, RESTful API Design"
      },
      { cat: "Cơ sở dữ liệu", items: "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization" },
      { cat: "Công cụ", items: "Git/GitHub, Docker, Postman, Swagger, Vercel, Render" },
      {
        cat: "Ngoại ngữ",
        items: "Tiếng Anh: Đọc hiểu tài liệu kỹ thuật tốt, giao tiếp chuyên môn cơ bản"
      }
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Fresher_FullStack_VI"
  },

  en: {
    name: "TRUONG DINH ANH",
    title: "Fresher Full-Stack Developer",
    contact: [
      { icon: "phone", text: "0349421079" },
      { icon: "email", text: "tdinhanh.it@gmail.com", link: "mailto:tdinhanh.it@gmail.com" },
      { icon: "github", text: "github.com/dinhanhhhh", link: "https://github.com/dinhanhhhh" },
      { icon: "address", text: "Thu Duc, Ho Chi Minh City" }
    ],
    sections: {
      objective: "CAREER OBJECTIVE",
      education: "EDUCATION",
      projects: "EXPERIENCE & PROJECTS",
      skills: "TECHNICAL SKILLS"
    },
    objective: "Fresher Fullstack Developer with a strong foundation in React, Next.js, and Node.js. Experienced in building and deploying real-world full-stack systems. Eager to contribute to product development and enhance technical skills in a professional environment.",
    education: {
      school: "HO CHI MINH CITY OPEN UNIVERSITY",
      date: "2020 - 2024",
      detail: "Bachelor of Computer Science"
    },
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "10/2025 - present",
        role: "Developer",
        desc: "A recruitment management system handling real-world data flows between Employers and Candidates.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed and implemented 20+ RESTful API endpoints using Node.js & Express for recruitment workflows.",
          "Connected Next.js frontend with backend via REST APIs, handling authentication and user state management.",
          "Implemented RBAC and secure JWT authentication with HttpOnly cookies and Refresh Token flow.",
          "Optimized MongoDB queries and Aggregation Pipelines, reducing API response times to under 300ms."
        ],
        tech: "Next.js, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind"
      },
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "A full-stack administrative system for managing student records with a real-time interactive dashboard.",
        github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
        tasks: [
          "Architected a Modular Backend (Node.js/Express) for improved scalability and maintainability.",
          "Automated API documentation with Swagger, reducing frontend-backend integration time by 30%.",
          "Developed a responsive Admin Dashboard managing 100% of student record CRUD operations.",
          "Established Access/Refresh Token flows for secure data access and persistent user sessions."
        ],
        tech: "Node.js, Express, MongoDB, Next.js, TypeScript, Tailwind, Swagger"
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "04/2025 - 05/2025",
        role: "Developer",
        desc: "An e-commerce solution integrating inventory, order management, and sales data analysis.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Designed API systems for real-time order processing and automated inventory updates.",
          "Implemented strict Data Validation and Admin authorization for sensitive data operations.",
          "Integrated checkout flows and shopping cart state synchronization between React Frontend and Backend."
        ],
        tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Python"
      }
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, NestJS (Basic), JWT, RBAC, RESTful API Design"
      },
      { cat: "Databases", items: "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization" },
      { cat: "Tools", items: "Git/GitHub, Docker, Postman, Swagger, Vercel, Render" },
      {
        cat: "English",
        items: "Read technical docs proficiently, basic professional communication"
      }
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Fresher_FullStack_EN"
  }
};
