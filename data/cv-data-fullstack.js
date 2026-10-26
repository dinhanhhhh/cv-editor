// =========================================================================
// CV DATA - FULLSTACK (FULL-STACK DEVELOPER) (OVERRIDE FORMAT)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "vi": {
    "projectDisplayLimit": 2,
    "title": "Full-Stack Developer",
    "objective": "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM, định hướng phát triển Full-Stack với React.js, Next.js, Node.js, Express.js và TypeScript. Có kinh nghiệm thực tế tại TAMI Technology trong việc thiết kế cơ sở dữ liệu PostgreSQL, xây dựng RESTful APIs chuẩn hóa dữ liệu tài chính và triển khai ứng dụng lên Cloud. Chủ động ứng dụng công cụ AI và tự động hóa CI/CD để tăng tốc độ phát triển sản phẩm và đảm bảo chất lượng mã nguồn.",
    "projects": [
      {
        "name": "JOB PORTAL PLATFORM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Nền tảng tuyển dụng full-stack hỗ trợ đăng tin, nộp hồ sơ, quản lý người dùng và xử lý quy trình ứng tuyển.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Thiết kế RESTful APIs theo kiến trúc phân tầng Controller-Service với Node.js, Express.js và TypeScript cho nghiệp vụ tuyển dụng.",
          "Tích hợp frontend Next.js với backend services, xử lý đồng bộ dữ liệu ổn định cho các luồng lọc việc làm, phân trang và ứng tuyển.",
          "Xây dựng cơ chế xác thực JWT qua HttpOnly cookies, phân quyền người dùng (RBAC) và luồng Refresh Token an toàn.",
          "Mô hình hóa dữ liệu MongoDB, thiết lập Compound Index trên các trường tìm kiếm và xử lý lỗi tập trung (Global Error Handling)."
        ],
        "tech": "Next.js 15, TypeScript, Node.js, Express.js, MongoDB, JWT, Tailwind CSS"
      },
      {
        "name": "STUDENT MANAGEMENT SYSTEM",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Hệ thống quản trị full-stack phục vụ quản lý hồ sơ sinh viên, đăng ký khóa học và kết quả học tập.",
        "github": "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        "tasks": [
          "Xây dựng backend theo cấu trúc module với Node.js và Express.js nhằm tách biệt rõ business logic, routing và middleware.",
          "Tích hợp Swagger (OpenAPI) để chuẩn hóa tài liệu API, hỗ trợ kiểm thử hợp đồng dữ liệu và bàn giao giữa frontend với backend.",
          "Triển khai cơ chế xác thực Access Token và Refresh Token kết hợp middleware kiểm soát quyền truy cập người dùng.",
          "Phát triển dashboard quản trị responsive bằng Next.js và Tailwind CSS với đầy đủ thao tác CRUD và bộ lọc dữ liệu."
        ],
        "tech": "Node.js, Express.js, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger"
      }
    ],
    "skills": [
      {
        "cat": "Frontend",
        "items": "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB, MySQL, Query Optimization, 3NF, Indexing"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Git, GitHub Actions, Docker, Postman, Vercel, Cloudflare Workers"
      },
      {
        "cat": "English",
        "items": "Đọc hiểu tài liệu kỹ thuật chuyên ngành và giao tiếp công việc cơ bản"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_FullStackDev_VI"
  },
  "en": {
    "projectDisplayLimit": 2,
    "title": "Full-Stack Developer",
    "objective": "Computer Science graduate from Ho Chi Minh City Open University, specializing in Full-Stack development with React.js, Next.js, Node.js, Express.js, and TypeScript. Gained hands-on experience at TAMI Technology in designing PostgreSQL schemas, building RESTful APIs for financial data normalization, and deploying cloud applications. Proactively adopts AI workflows and CI/CD automation to accelerate product delivery and maintain code quality.",
    "projects": [
      {
        "name": "JOB PORTAL PLATFORM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "A full-stack recruitment platform streamlining job postings, candidate applications, and hiring workflows.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Engineered modular RESTful APIs following a Controller-Service architecture with Node.js, Express.js, and TypeScript.",
          "Integrated Next.js frontend with backend services for synchronized data flows across job filtering, pagination, and application journeys.",
          "Implemented JWT authentication with HttpOnly cookies, Role-Based Access Control (RBAC), and a secure refresh token flow.",
          "Modeled MongoDB schemas, configured compound indexes on search fields, and centralized exception handling via custom middleware."
        ],
        "tech": "Next.js 15, TypeScript, Node.js, Express.js, MongoDB, JWT, Tailwind CSS"
      },
      {
        "name": "STUDENT MANAGEMENT SYSTEM",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "An administrative system for managing student records, course enrollment, and academic performance.",
        "github": "https://github.com/dinhanhhhh/student-management-BE | https://github.com/dinhanhhhh/student-management-fe",
        "tasks": [
          "Built a modular backend architecture with Node.js and Express.js for academic and student record operations.",
          "Integrated Swagger (OpenAPI) for interactive API documentation, contract testing, and smooth frontend-backend handoff.",
          "Implemented authentication flows with access and refresh tokens alongside role-based middleware guards.",
          "Developed a responsive admin dashboard with Next.js and Tailwind CSS supporting CRUD workflows and multi-criteria filtering."
        ],
        "tech": "Node.js, Express.js, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger"
      }
    ],
    "skills": [
      {
        "cat": "Frontend",
        "items": "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, RESTful API, JWT, RBAC, Middleware, Swagger"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB, MySQL, Query Optimization, 3NF, Indexing"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Git, GitHub Actions, Docker, Postman, Vercel, Cloudflare Workers"
      },
      {
        "cat": "English",
        "items": "Read technical documentation and handle basic workplace communication"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_FullStackDev_EN"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
