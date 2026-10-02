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
      date: "06/2025 - 12/2025",
      role: "Developer",
      desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
      tasks: [
        "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên hạ tầng Supabase Cloud.",
        "Xây dựng và tối ưu hệ thống RESTful APIs bằng Next.js Route Handlers phục vụ truy xuất dữ liệu chứng khoán thời gian thực.",
        "Tích hợp luồng xác thực Google Authentication thông qua NextAuth (Google Provider) cho phiên làm việc người dùng.",
        "Kiểm thử hiệu năng API bằng Postman, xử lý lỗi và phối hợp cùng Mentor tối ưu hóa các luồng truy xuất dữ liệu.",
        "Đóng gói và triển khai (deploy) ứng dụng demo ổn định lên môi trường Cloud Vercel."
      ],
      tech: "Next.js (API Routes), PostgreSQL, Supabase, NextAuth, Vnstock3, Postman, Vercel, Git"
    }
  ],
  en: [
    {
      name: "TAMI TECHNOLOGY CO., LTD",
      date: "06/2025 - 12/2025",
      role: "Developer",
      desc: "A financial stock market data analysis platform integrated with the Vnstock3 financial library.",
      tasks: [
        "Architected relational database schemas and successfully deployed PostgreSQL on the Supabase cloud infrastructure.",
        "Developed and optimized RESTful APIs using Next.js Route Handlers for high-frequency stock market data querying.",
        "Integrated Google Authentication OAuth flow via NextAuth (Google Provider) for secure user sessions.",
        "Tested API performance and handled edge-case error logging using Postman under mentor guidance.",
        "Packaged and deployed the demo application smoothly onto the Vercel cloud environment."
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
