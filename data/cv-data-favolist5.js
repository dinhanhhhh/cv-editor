// ===================================
// CV DATA - FAVOLIST5 ASIA QA/QC TESTER INTERN
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "QA/QC Tester Intern",
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
      experience: "KINH NGHIỆM LÀM VIỆC",
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG",
    },
    objective:
      "Ứng viên QA/QC Tester với nền tảng Khoa học Máy tính vững chắc, thành thạo kiểm thử chức năng (Manual Testing), kiểm thử API bằng Postman và truy vấn cơ sở dữ liệu SQL để xác thực dữ liệu. Có tư duy logic cẩn trọng, hiểu rõ luồng phát triển phần mềm và chủ động ứng dụng AI tools (ChatGPT, Gemini) để tự động hóa việc thiết kế test case và phát hiện edge cases. Mong muốn đóng góp nâng cao chất lượng sản phẩm tại Favolist5 Asia.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường chứng khoán (kết nối thư viện dữ liệu tài chính Vnstock3).",
        tasks: [
          "Thiết kế kịch bản và thực hiện kiểm thử chức năng, hiệu năng cho hơn 15 RESTful API endpoints bằng Postman.",
          "Viết các câu truy vấn SQL phức tạp trên cơ sở dữ liệu PostgreSQL (Supabase) để đối soát và xác thực tính toàn vẹn dữ liệu tài chính.",
          "Kiểm thử bảo mật luồng xác thực Google OAuth (NextAuth), phát hiện lỗi phân quyền và phối hợp Mentor khắc phục.",
          "Theo dõi, ghi nhận bug chi tiết (bước tái hiện, logs, kết quả thực tế vs mong đợi) và xác minh lại sau khi fix.",
        ],
        tech: "Postman (API Testing), PostgreSQL, Supabase, SQL Queries, Next.js, NextAuth, Git",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG QUẢN LÝ SINH VIÊN (STUDENT MANAGEMENT SYSTEM)",
        date: "07/2025 - 08/2025",
        role: "Developer",
        desc: "Ứng dụng web quản trị thông tin sinh viên, lớp học và điểm số theo cấu trúc phòng ban dành cho trường đại học.",
        github: "https://github.com/dinhanhhhh/student-management",
        tasks: [
          "Xây dựng bộ tài liệu kiểm thử chi tiết (Test Case, Test Scenario) bao phủ toàn bộ chức năng CRUD sinh viên và lớp học.",
          "Thực hiện kiểm thử biên (Boundary Value Analysis) và phân vùng tương đương (Equivalence Partitioning) cho các trường nhập liệu.",
          "Kiểm thử RESTful API bằng Postman: kiểm tra mã phản hồi (Status code), thời gian phản hồi và tính bảo mật của token JWT.",
          "Truy vấn trực tiếp MongoDB để đối soát dữ liệu lưu trữ với dữ liệu hiển thị trên giao diện người dùng.",
        ],
        tech: "Manual Testing, Postman, Test Case Design, MongoDB, RESTful API, JWT Validation",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Ứng dụng web thương mại điện tử phục vụ duyệt sản phẩm, quản lý giỏ hàng và quy trình đặt hàng, thanh toán trực tuyến.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Kiểm thử luồng người dùng hoàn chỉnh (End-to-End User Flow) từ duyệt sản phẩm, cập nhật giỏ hàng đến thanh toán đơn hàng.",
          "Kiểm thử giao diện responsive trên nhiều độ phân giải màn hình và trình duyệt khác nhau.",
          "Kiểm thử các tình huống ngoại lệ (Edge Cases): giỏ hàng rỗng, mã khuyến mãi hết hạn, ngắt kết nối mạng khi thanh toán.",
          "Ứng dụng ChatGPT và Gemini để sinh nhanh dữ liệu mẫu (Mock Data) và gợi ý các kịch bản kiểm thử góc cạnh.",
        ],
        tech: "E2E Testing, UI/UX Testing, Edge Case Analysis, Postman, MongoDB, AI-assisted QA",
      },
    ],
    skills: [
      {
        cat: "Testing & QA",
        items:
          "Manual Testing, Test Case/Scenario Design, Bug Reporting, Functional & Integration Testing, Boundary & Edge Cases",
      },
      {
        cat: "API & Tools",
        items:
          "Postman, RESTful API Testing, Swagger, Git/GitHub, Docker, Jira, DevTools",
      },
      {
        cat: "Databases & SQL",
        items:
          "SQL, PostgreSQL, MySQL, MongoDB, Data Verification, Query Optimization",
      },
      {
        cat: "AI-assisted QA",
        items:
          "ChatGPT, Gemini, GitHub Copilot, AI Prompting for Test Scenarios & Test Data Generation",
      },
      {
        cat: "Technical Base",
        items:
          "JavaScript, TypeScript, React.js, Node.js, Express, HTML5/CSS3 (Hiểu sâu code giúp bắt bug tận gốc)",
      },
      {
        cat: "English",
        items:
          "Đọc hiểu tài liệu kỹ thuật, viết test case & báo cáo lỗi (bug report) bằng tiếng Anh chuẩn xác",
      },
    ],
    btnText: "In / Lưu PDF",
    docTitle: "CV_TruongDinhAnh_Favolist5_QAQC_VI",
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "QA/QC Tester Intern",
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
      experience: "WORK EXPERIENCE",
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "QA/QC Tester candidate with a solid Computer Science background, proficient in Manual Testing, API testing with Postman, and SQL database verification. Possesses strong analytical thinking, in-depth understanding of the software development lifecycle, and actively leverages AI tools (ChatGPT, Gemini) for test case generation and edge case detection. Eager to contribute to software quality at Favolist5 Asia.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Financial stock market data analysis platform integrated with the Vnstock3 financial data library.",
        tasks: [
          "Designed test scenarios and performed functional and performance testing for 15+ RESTful API endpoints via Postman.",
          "Authored SQL queries on PostgreSQL (Supabase Cloud) to validate and verify financial data consistency.",
          "Tested Google OAuth authentication security flows (NextAuth), identified access control bugs, and resolved them with mentors.",
          "Logged detailed bug reports (reproduction steps, logs, expected vs. actual results) and performed verification re-tests.",
        ],
        tech: "Postman (API Testing), PostgreSQL, Supabase, SQL Queries, Next.js, NextAuth, Git",
      },
    ],
    projects: [
      {
        name: "STUDENT MANAGEMENT SYSTEM",
        date: "07/2025 - 08/2025",
        role: "Developer",
        desc: "A web-based administration system for managing student records, academic classes, and grades for universities.",
        github: "https://github.com/dinhanhhhh/student-management",
        tasks: [
          "Authored comprehensive test suites (Test Cases, Test Scenarios) covering full student CRUD and class management workflows.",
          "Executed Boundary Value Analysis and Equivalence Partitioning on input fields to uncover validation defects.",
          "Tested RESTful APIs with Postman: validated HTTP status codes, response times, and JWT token authentication.",
          "Executed MongoDB queries directly to reconcile back-end stored data against UI front-end rendering.",
        ],
        tech: "Manual Testing, Postman, Test Case Design, MongoDB, RESTful API, JWT Validation",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "An e-commerce web application enabling product browsing, cart management, and seamless checkout with responsive UI and API integration.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Executed end-to-end user journey tests across product browsing, cart updates, and multi-step checkout processes.",
          "Verified responsive UI/UX compatibility across diverse screen resolutions and modern browsers.",
          "Designed and tested critical edge cases: empty cart states, expired voucher codes, and network drops during payment.",
          "Leveraged ChatGPT and Gemini to generate realistic mock test datasets and suggest corner-case scenarios.",
        ],
        tech: "E2E Testing, UI/UX Testing, Edge Case Analysis, Postman, MongoDB, AI-assisted QA",
      },
    ],
    skills: [
      {
        cat: "Testing & QA",
        items:
          "Manual Testing, Test Case/Scenario Design, Bug Reporting, Functional & Integration Testing, Boundary & Edge Cases",
      },
      {
        cat: "API & Tools",
        items:
          "Postman, RESTful API Testing, Swagger, Git/GitHub, Docker, Jira, DevTools",
      },
      {
        cat: "Databases & SQL",
        items:
          "SQL, PostgreSQL, MySQL, MongoDB, Data Verification, Query Optimization",
      },
      {
        cat: "AI-assisted QA",
        items:
          "ChatGPT, Gemini, GitHub Copilot, AI Prompting for Test Scenarios & Test Data Generation",
      },
      {
        cat: "Technical Base",
        items:
          "JavaScript, TypeScript, React.js, Node.js, Express, HTML5/CSS3 (Strong code comprehension facilitates root-cause bug isolation)",
      },
      {
        cat: "English",
        items:
          "Able to read technical documentation and write accurate test cases and bug reports in English",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Favolist5_QAQC_EN",
  },
};

if (typeof module !== "undefined") {
  module.exports = cvData;
}
