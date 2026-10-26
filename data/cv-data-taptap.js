// =========================================================================
// CV DATA - TAPTAP (SOFTWARE ENGINEER INTERN / BACKEND & E-COMMERCE LOYALTY)
// Tối ưu chuẩn ATS & khớp 100% JD TAPTAP (Node.js, TypeScript, React, AI Tools, Loyalty System)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "vi": {
    "title": "Software Engineer Intern",
    "btnText": "In / Tải PDF",
    "sections": {
      "objective": "TÓM TẮT CHUYÊN MÔN",
      "education": "HỌC VẤN",
      "experience": "KINH NGHIỆM LÀM VIỆC",
      "projects": "DỰ ÁN TIÊU BIỂU",
      "skills": "KỸ NĂNG CHUYÊN MÔN"
    },
    "objective": "Cử nhân Khoa học Máy tính Trường Đại học Mở TP.HCM, định hướng Software Engineer chuyên sâu Backend với Node.js, Express, TypeScript và React.js. Có kinh nghiệm thực tế tại Công ty TNHH Công nghệ Tami trong việc thiết kế cơ sở dữ liệu quan hệ, xây dựng và tối ưu hệ thống RESTful APIs phục vụ truy xuất dữ liệu thời gian thực. Thành thạo khai thác các AI tools (GitHub Copilot, Claude) để tăng tốc độ phân tích, viết code và gỡ lỗi. Sẵn sàng làm việc full-time và mong muốn đóng góp vào hệ sinh thái E-commerce & Loyalty của TAPTAP.",
    "experienceDisplayLimit": 1,
    "experience": [
      {
        "name": "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Hệ thống phân tích dữ liệu thị trường tài chính (kết nối thư viện dữ liệu Vnstock3).",
        "tasks": [
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên hạ tầng Cloud.",
          "Xây dựng và tối ưu hệ thống RESTful APIs phục vụ truy xuất dữ liệu thời gian thực.",
          "Tích hợp luồng xác thực Google Authentication và quản lý phiên làm việc người dùng bảo mật.",
          "Kiểm thử hiệu năng API bằng Postman, phối hợp cùng Mentor xử lý lỗi và tối ưu hóa luồng dữ liệu.",
          "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud."
        ],
        "tech": "Node.js, Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Postman, Cloud, Git"
      }
    ],
    "projectDisplayLimit": 2,
    "projects": [
      {
        "name": "E-COMMERCE & LOYALTY PLATFORM",
        "date": "08/2025 - 11/2025",
        "role": "Developer",
        "desc": "Nền tảng thương mại điện tử tích hợp cơ chế giỏ hàng, đặt hàng và quản lý giao dịch sản phẩm.",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Xây dựng hệ thống RESTful APIs bằng Node.js & Express xử lý danh mục sản phẩm, giỏ hàng và luồng đặt hàng.",
          "Thiết kế cơ sở dữ liệu MongoDB tối ưu lưu trữ đơn hàng, thông tin khách hàng và trạng thái giao dịch.",
          "Phát triển giao diện responsive với React và Tailwind CSS, xử lý form validation chặt chẽ phía client.",
          "Ứng dụng AI Coding Workflow (Claude, Copilot) để tăng tốc phát triển module và xử lý logic nghiệp vụ.",
          "Đóng gói ứng dụng với Docker và triển khai frontend ổn định lên nền tảng Cloud."
        ],
        "tech": "Node.js, Express, TypeScript, React, MongoDB, Docker, Tailwind CSS, RESTful API"
      },
      {
        "name": "JOB PORTAL PLATFORM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Hệ thống quản lý tuyển dụng toàn diện hỗ trợ phân quyền người dùng và xử lý luồng dữ liệu bảo mật.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Thiết kế hệ thống RESTful APIs bằng Node.js & TypeScript, áp dụng kiến trúc module phục vụ bảo trì mở rộng.",
          "Triển khai cơ chế xác thực JWT qua HttpOnly Cookies, kết hợp phân quyền RBAC và Refresh Token an toàn.",
          "Tối ưu hóa các câu truy vấn cơ sở dữ liệu MongoDB giúp thời gian phản hồi API đạt dưới 300ms.",
          "Sử dụng Docker Compose để đồng nhất môi trường phát triển local và testing."
        ],
        "tech": "Node.js, Express, TypeScript, Next.js 15, MongoDB, JWT, Docker, RESTful API"
      }
    ],
    "skills": [
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, TypeScript, RESTful API, Microservices, JWT, RBAC Middleware"
      },
      {
        "cat": "Frontend",
        "items": "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB (Mongoose), MySQL, Tối ưu hóa truy vấn, Supabase"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Docker, Docker Compose, Git/GitHub, Postman, Linux, Vercel"
      },
      {
        "cat": "AI Tools & Workflow",
        "items": "GitHub Copilot, Claude, ChatGPT (tối ưu hóa quy trình phân tích, code và gỡ lỗi)"
      },
      {
        "cat": "English",
        "items": "Đọc hiểu tài liệu kỹ thuật chuyên ngành và giao tiếp cơ bản"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_TAPTAP_Software_Engineer_Intern"
  },
  "en": {
    "title": "Software Engineer Intern",
    "btnText": "Print / Save PDF",
    "sections": {
      "objective": "PROFESSIONAL SUMMARY",
      "education": "EDUCATION",
      "experience": "WORK EXPERIENCE",
      "projects": "KEY PROJECTS",
      "skills": "TECHNICAL SKILLS"
    },
    "objective": "Computer Science graduate from Ho Chi Minh City Open University, targeting a Software Engineer role specializing in Backend development with Node.js, Express, TypeScript, and React.js. Practical experience at Tami Technology Co., Ltd in designing relational database schemas, building and optimizing RESTful APIs for real-time data retrieval. Proficient in leveraging AI tools (GitHub Copilot, Claude) to accelerate analysis, coding, and debugging workflows. Ready for full-time commitment and eager to contribute to TAPTAP's E-commerce & Loyalty ecosystem.",
    "experienceDisplayLimit": 1,
    "experience": [
      {
        "name": "TAMI TECHNOLOGY CO., LTD",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Financial market data analysis platform (integrated with Vnstock3 financial data library).",
        "tasks": [
          "Designed relational database schemas and deployed PostgreSQL on Cloud infrastructure.",
          "Built and optimized RESTful APIs for real-time data querying and retrieval.",
          "Integrated Google Authentication via OAuth providers for secure user sessions.",
          "Tested API performance with Postman, collaborated with Senior Mentor to optimize data queries.",
          "Packaged and deployed stable demo application on Cloud environment."
        ],
        "tech": "Node.js, Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Postman, Cloud, Git"
      }
    ],
    "projectDisplayLimit": 2,
    "projects": [
      {
        "name": "E-COMMERCE & LOYALTY PLATFORM",
        "date": "08/2025 - 11/2025",
        "role": "Developer",
        "desc": "An e-commerce platform integrating shopping cart, order placement, and product transaction flows.",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Engineered RESTful APIs with Node.js & Express handling product catalog, cart persistence, and order processing.",
          "Designed MongoDB schema to manage orders, customer accounts, and consistent transaction states.",
          "Developed responsive user interfaces using React and Tailwind CSS with client-side form validation.",
          "Leveraged AI coding workflows (Claude, Copilot) to accelerate module development and business logic.",
          "Containerized application with Docker and deployed stable frontend on Cloud platform."
        ],
        "tech": "Node.js, Express, TypeScript, React, MongoDB, Docker, Tailwind CSS, RESTful API"
      },
      {
        "name": "JOB PORTAL PLATFORM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "A comprehensive recruitment platform featuring secure authentication, RBAC, and modular backend routing.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Designed RESTful API endpoints using Node.js & TypeScript, applying modular architecture for maintainability.",
          "Implemented secure JWT authentication via HttpOnly cookies, RBAC, and refresh token rotation.",
          "Optimized MongoDB queries to reduce API response latency to under 300ms across critical flows.",
          "Utilized Docker Compose to establish consistent local development and testing environments."
        ],
        "tech": "Node.js, Express, TypeScript, Next.js 15, MongoDB, JWT, Docker, RESTful API"
      }
    ],
    "skills": [
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, TypeScript, RESTful API, Microservices, JWT, RBAC Middleware"
      },
      {
        "cat": "Frontend",
        "items": "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB (Mongoose), MySQL, Query Optimization, Supabase"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Docker, Docker Compose, Git/GitHub, Postman, Linux, Vercel"
      },
      {
        "cat": "AI Tools & Workflow",
        "items": "GitHub Copilot, Claude, ChatGPT (workflow acceleration for analysis, coding, and debugging)"
      },
      {
        "cat": "English",
        "items": "Technical document comprehension and basic workplace communication"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_TAPTAP_Software_Engineer_Intern"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
