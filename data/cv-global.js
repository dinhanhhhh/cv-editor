// ===================================
// GLOBAL CONFIGURATION - CV EDITOR
// ===================================

const cvGlobalEdu = {
  vi: {
    school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
    date: "2020 - 2024",
    detail: "Khoa học Máy tính"
  },
  en: {
    school: "HO CHI MINH CITY OPEN UNIVERSITY",
    date: "2020 - 2024",
    detail: "Computer Science"
  }
};

const cvGlobalExp = {
  vi: [
    {
      name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
      date: "06/2025 - 09/2025",
      role: "Developer",
      desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
      tasks: [
        "Thiết kế cấu trúc cơ sở dữ liệu và triển khai cơ sở dữ liệu PostgreSQL trên hạ tầng Supabase Cloud.",
        "Xây dựng hơn 15 RESTful API endpoints sử dụng Next.js Route Handlers để truy xuất dữ liệu chứng khoán.",
        "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider).",
        "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp cùng Mentor tối ưu hóa các luồng truy xuất dữ liệu.",
        "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel."
      ],
      tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
    }
  ],
  en: [
    {
      name: "TAMI TECHNOLOGY CO., LTD",
      date: "06/2025 - 09/2025",
      role: "Developer",
      desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
      tasks: [
        "Designed database schemas and successfully deployed PostgreSQL databases on the Supabase cloud infrastructure.",
        "Developed 15+ secure RESTful API endpoints using Next.js Route Handlers for stock market data querying.",
        "Integrated Google Authentication OAuth flow centralized with NextAuth (Google Provider) for user sessions.",
        "Tested and optimized API performance using Postman, resolving critical bugs under mentor guidance.",
        "Configured CI/CD and deployed the demo application smoothly onto the Vercel cloud environment."
      ],
      tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
    }
  ]
};

if (typeof global !== 'undefined') {
  global.cvGlobalEdu = cvGlobalEdu;
  global.cvGlobalExp = cvGlobalExp;
}

if (typeof module !== 'undefined') {
  module.exports = cvGlobalEdu;
}
