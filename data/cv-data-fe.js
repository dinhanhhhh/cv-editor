// =========================================================================
// CV DATA - FE (FRONTEND DEVELOPER (REACT / NEXT.JS)) (OVERRIDE FORMAT)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  "vi": {
    "projectDisplayLimit": 2,
    "title": "Frontend Developer (React / Next.js)",
    "objective": "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM, chuyên môn phát triển Frontend với React.js, Next.js, TypeScript và Tailwind CSS. Có kinh nghiệm thực tế tại TAMI Technology trong việc xây dựng ứng dụng web tích hợp RESTful APIs và triển khai lên Cloud Vercel. Chú trọng kiến trúc component tái sử dụng, quản lý trạng thái ứng dụng chặt chẽ và tối ưu trải nghiệm người dùng trên đa thiết bị.",
    "projects": [
      {
        "name": "NỀN TẢNG TUYỂN DỤNG (JOB PORTAL)",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Ứng dụng web cho phép đăng tin tuyển dụng, nộp hồ sơ và quản lý quy trình ứng tuyển.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Xây dựng giao diện danh sách việc làm, bộ lọc đa tiêu chí, phân trang và luồng ứng tuyển bằng Next.js và Tailwind CSS.",
          "Thiết kế luồng xác thực phía client (Login, Register, Protected Routes) kết hợp phân quyền hiển thị theo vai trò người dùng.",
          "Tích hợp RESTful APIs backend, đồng bộ trạng thái dữ liệu và xử lý đầy đủ các trạng thái UI (Loading Skeleton, Empty, Error).",
          "Tối ưu hóa khả năng hiển thị responsive trên Mobile, Tablet, Desktop và triển khai ứng dụng lên Vercel."
        ],
        "tech": "Next.js 15, React.js, TypeScript, Tailwind CSS, RESTful API, Git, Vercel"
      },
      {
        "name": "E-COMMERCE PLATFORM",
        "date": "08/2025 - 11/2025",
        "role": "Developer",
        "desc": "Ứng dụng web mua sắm trực tuyến với danh mục sản phẩm, giỏ hàng và quy trình đặt hàng.",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Xây dựng hệ thống component tái sử dụng cho danh mục sản phẩm, chi tiết sản phẩm, giỏ hàng và thanh toán bằng React.js + Tailwind CSS.",
          "Quản lý trạng thái giỏ hàng theo thời gian thực, xử lý kiểm tra tính hợp lệ của biểu mẫu (Form Validation) trước khi gửi đơn.",
          "Tích hợp RESTful APIs để hiển thị sản phẩm theo phân loại, tìm kiếm và theo dõi trạng thái đơn hàng.",
          "Đảm bảo bố cục responsive đồng nhất trên mọi kích thước màn hình và triển khai sản phẩm lên Vercel."
        ],
        "tech": "React.js, Vite, JavaScript (ES6+), Tailwind CSS, RESTful API, Git, Vercel"
      }
    ],
    "skills": [
      {
        "cat": "Frontend",
        "items": "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, RESTful API Integration, JWT, NextAuth"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB, Supabase"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Git, GitHub, Postman, Docker, Vercel"
      },
      {
        "cat": "English",
        "items": "Đọc hiểu tài liệu kỹ thuật, giao tiếp công việc cơ bản"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_FE_Intern_VI"
  },
  "en": {
    "projectDisplayLimit": 2,
    "title": "Frontend Developer (React / Next.js)",
    "objective": "Computer Science graduate from Ho Chi Minh City Open University, specializing in Frontend development with React.js, Next.js, TypeScript, and Tailwind CSS. Gained hands-on experience at TAMI Technology building web interfaces integrated with RESTful APIs and deploying to Vercel Cloud. Focused on reusable component architecture, predictable state management, and responsive user experiences across devices.",
    "projects": [
      {
        "name": "JOB PORTAL PLATFORM",
        "date": "11/2025 - 02/2026",
        "role": "Developer",
        "desc": "Web application for job posting, application submission, and recruitment workflow management.",
        "github": "https://github.com/dinhanhhhh/JOB-PORTAL",
        "tasks": [
          "Built job listings, multi-criteria search filters, pagination, and application flow UI using Next.js and Tailwind CSS.",
          "Designed client-side authentication flows (login, registration, protected routes) and role-based UI rendering.",
          "Integrated backend RESTful APIs and managed asynchronous UI states (loading skeletons, empty, and error states).",
          "Optimized responsive layouts across mobile, tablet, and desktop viewports and deployed to Vercel."
        ],
        "tech": "Next.js 15, React.js, TypeScript, Tailwind CSS, RESTful API, Git, Vercel"
      },
      {
        "name": "E-COMMERCE PLATFORM",
        "date": "08/2025 - 11/2025",
        "role": "Developer",
        "desc": "Online shopping web application featuring product catalogs, shopping cart, and checkout workflows.",
        "github": "https://github.com/dinhanhhhh/ecommerce",
        "tasks": [
          "Developed reusable UI components for product catalogs, item details, cart, and checkout using React.js and Tailwind CSS.",
          "Synchronized shopping cart state and implemented client-side form validation across the checkout flow.",
          "Integrated RESTful APIs for category filtering, product search, and order status tracking.",
          "Ensured responsive rendering across mobile and desktop screens and deployed the frontend on Vercel."
        ],
        "tech": "React.js, Vite, JavaScript (ES6+), Tailwind CSS, RESTful API, Git, Vercel"
      }
    ],
    "skills": [
      {
        "cat": "Frontend",
        "items": "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design"
      },
      {
        "cat": "Backend",
        "items": "Node.js, Express.js, RESTful API Integration, JWT, NextAuth"
      },
      {
        "cat": "Databases",
        "items": "PostgreSQL, MongoDB, Supabase"
      },
      {
        "cat": "Tools & DevOps",
        "items": "Git, GitHub, Postman, Docker, Vercel"
      },
      {
        "cat": "English",
        "items": "Read technical documentation, handle basic workplace communication"
      }
    ],
    "docTitle": "CV_TruongDinhAnh_FE_Intern_EN"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
