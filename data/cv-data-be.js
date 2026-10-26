// =========================================================================
// CV DATA - BE (BACK-END DEVELOPER) (OVERRIDE FORMAT)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "vi": {
    "experienceDisplayLimit": 1,
    "projectDisplayLimit": 2,
    "title": "Back-End Developer",
    "objective": "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM, định hướng phát triển Back-End với Node.js, Express.js, TypeScript và cơ sở dữ liệu PostgreSQL/MongoDB. Có kinh nghiệm thực tế tại TAMI Technology trong việc thiết kế sơ đồ cơ sở dữ liệu quan hệ, xây dựng RESTful APIs chuẩn hóa dữ liệu tài chính và tích hợp xác thực OAuth. Chú trọng kiến trúc phân tầng rõ ràng, bảo mật API và khả năng mở rộng của hệ thống.",
    "experience": [
      {
        "name": "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Hệ thống phân tích dữ liệu thị trường chứng khoán tích hợp nguồn dữ liệu tài chính Vnstock3.",
        "tasks": [
          "Thiết kế sơ đồ cơ sở dữ liệu quan hệ, đánh Index theo mã cổ phiếu/thời gian và triển khai PostgreSQL trên Supabase Cloud.",
          "Xây dựng các dịch vụ RESTful APIs bằng Next.js Route Handlers phục vụ đồng bộ và chuẩn hóa dữ liệu chứng khoán.",
          "Xử lý lỗi kết nối từ API đối tác và tích hợp xác thực Google OAuth (NextAuth) bảo vệ các tuyến API truy xuất dữ liệu.",
          "Thiết lập bộ kịch bản kiểm thử tích hợp API bằng Postman, phối hợp cùng Mentor tối ưu hóa luồng truy vấn CSDL.",
          "Quản lý phiên bản mã nguồn qua Git và triển khai ứng dụng demo ổn định lên hạ tầng Cloud Vercel."
        ],
        "tech": "Next.js (Route Handlers), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
      }
    ],
    "projects": [
      {
        "name": "JOB PORTAL BACKEND SYSTEM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Hệ thống backend quản lý tuyển dụng, xử lý luồng dữ liệu nghiệp vụ giữa nhà tuyển dụng và ứng viên.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Thiết kế và triển khai RESTful APIs bằng Node.js, Express.js và TypeScript theo kiến trúc phân tầng Controller-Service.",
          "Xây dựng cơ chế xác thực tập trung sử dụng JWT qua HttpOnly cookies kết hợp phân quyền người dùng (RBAC) và Refresh Token.",
          "Mô hình hóa schema MongoDB, thiết lập Compound Index tối ưu cho các truy vấn lọc việc làm đa điều kiện và phân trang.",
          "Tích hợp middleware kiểm tra dữ liệu đầu vào và xử lý ngoại lệ tập trung (Global Error Handling) đảm bảo tính ổn định."
        ],
        "tech": "Node.js, Express.js, TypeScript, MongoDB, JWT, RESTful API, Postman, Git"
      },
      {
        "name": "STUDENT MANAGEMENT SERVER",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Hệ thống máy chủ quản lý hồ sơ sinh viên, đăng ký khóa học và quản trị điểm số học tập.",
        "github": "https://github.com/dinhanhhhh/student-management-BE",
        "tasks": [
          "Xây dựng backend theo mô hình MVC với Node.js và Express.js, tách biệt rõ giữa business logic và tầng truy xuất dữ liệu.",
          "Triển khai luồng xác thực Access Token và Refresh Token kết hợp middleware kiểm soát quyền hạn theo vai trò.",
          "Tích hợp Swagger (OpenAPI) để chuẩn hóa tài liệu API và hỗ trợ kiểm thử hợp đồng dữ liệu với phía Frontend.",
          "Thiết kế sơ đồ cơ sở dữ liệu đảm bảo tính toàn vẹn tham chiếu khi đăng ký học phần và cập nhật bảng điểm."
        ],
        "tech": "Node.js, Express.js, TypeScript, MongoDB, Swagger, JWT, RESTful API"
      },
      {
        "name": "E-COMMERCE PLATFORM",
        "date": "08/2025 - 11/2025",
        "role": "Developer",
        "desc": "Phát triển các dịch vụ API cốt lõi cho nền tảng thương mại điện tử, quản lý đơn hàng và giỏ hàng.",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Xây dựng RESTful APIs quản lý danh mục sản phẩm đa phân loại và đồng bộ trạng thái giỏ hàng phía server.",
          "Triển khai middleware kiểm tra quyền hạn Admin và validate dữ liệu đầu vào cho các thao tác cập nhật nhạy cảm.",
          "Thiết kế luồng xử lý vòng đời đơn hàng (Order Lifecycle) đảm bảo tính nhất quán dữ liệu giữa giỏ hàng và đơn hàng.",
          "Đóng gói dịch vụ bằng Docker và kiểm thử toàn diện các kịch bản API thông qua Postman Collection."
        ],
        "tech": "Node.js, Express.js, MongoDB, React.js, Tailwind CSS, Docker, RESTful API, Postman"
      }
    ],
    "skills": [
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, TypeScript, RESTful API, MVC Architecture, JWT, RBAC, Middleware, Swagger"
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
        "cat": "Frontend",
        "items": "React.js, Next.js, JavaScript (ES6+), Tailwind CSS"
      },
      {
        "cat": "English",
        "items": "Đọc hiểu tài liệu kỹ thuật, viết tài liệu đặc tả API"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_BackendDev_VI"
  },
  "en": {
    "experienceDisplayLimit": 1,
    "projectDisplayLimit": 2,
    "title": "Back-End Developer",
    "objective": "Computer Science graduate from Ho Chi Minh City Open University, specializing in Back-End development with Node.js, Express.js, TypeScript, and PostgreSQL/MongoDB. Gained hands-on experience at TAMI Technology in designing relational database schemas, building RESTful APIs for financial data standardization, and integrating OAuth security. Focused on clean layered architecture, API security, and maintainable backend systems.",
    "experience": [
      {
        "name": "TAMI TECHNOLOGY CO., LTD",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Financial stock market data analysis platform integrated with the Vnstock3 library.",
        "tasks": [
          "Designed relational database schemas with ticker/time-based indexing and deployed PostgreSQL on Supabase Cloud.",
          "Developed RESTful APIs using Next.js Route Handlers to synchronize and standardize stock market data.",
          "Handled third-party API error edge cases and integrated Google OAuth via NextAuth to protect sensitive routes.",
          "Created Postman integration test suites and collaborated with mentors to optimize database query workflows.",
          "Managed Git version control and deployed stable demo builds onto the Vercel cloud environment."
        ],
        "tech": "Next.js (Route Handlers), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
      }
    ],
    "projects": [
      {
        "name": "JOB PORTAL BACKEND SYSTEM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Core recruitment management backend handling business workflows between employers and candidates.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Designed and implemented RESTful APIs using Node.js, Express.js, and TypeScript with a Controller-Service architecture.",
          "Built centralized authentication using JWT/HttpOnly cookies combined with Role-Based Access Control (RBAC) and refresh tokens.",
          "Modeled MongoDB schemas and configured compound indexes to optimize multi-criteria job filtering and pagination.",
          "Integrated request validation and global error handling middleware to ensure consistent API responses."
        ],
        "tech": "Node.js, Express.js, TypeScript, MongoDB, JWT, RESTful API, Postman, Git"
      },
      {
        "name": "STUDENT MANAGEMENT SERVER",
        "date": "06/2025 - 12/2025",
        "role": "Developer",
        "desc": "Server-side infrastructure for student records, course registration, and academic score management.",
        "github": "https://github.com/dinhanhhhh/student-management-BE",
        "tasks": [
          "Built the backend following the MVC pattern with Node.js and Express.js, separating business logic from data access.",
          "Implemented access and refresh token authentication flows alongside role-based authorization middleware.",
          "Integrated Swagger (OpenAPI) for interactive API documentation and contract verification with frontend clients.",
          "Designed database schemas to maintain referential integrity across course enrollments and grade records."
        ],
        "tech": "Node.js, Express.js, TypeScript, MongoDB, Swagger, JWT, RESTful API"
      },
      {
        "name": "E-COMMERCE PLATFORM",
        "date": "08/2025 - 11/2025",
        "role": "Developer",
        "desc": "Developed core API services for an e-commerce platform, order lifecycle, and shopping cart management.",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Developed RESTful APIs for multi-category product catalogs and server-side cart synchronization.",
          "Implemented admin authorization and input validation middleware for sensitive data mutations.",
          "Designed order lifecycle management workflows ensuring consistency between cart items and created orders.",
          "Containerized services with Docker and conducted API integration testing via Postman collections."
        ],
        "tech": "Node.js, Express.js, MongoDB, React.js, Tailwind CSS, Docker, RESTful API, Postman"
      }
    ],
    "skills": [
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, TypeScript, RESTful API, MVC Architecture, JWT, RBAC, Middleware, Swagger"
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
        "cat": "Frontend",
        "items": "React.js, Next.js, JavaScript (ES6+), Tailwind CSS"
      },
      {
        "cat": "English",
        "items": "Read technical documentation, write API specifications"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_BackendDev_EN"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
