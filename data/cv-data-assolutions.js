// =========================================================================
// AS SOLUTIONS CV DATA - FRONTEND DEVELOPER (REACT, TYPESCRIPT)
// =========================================================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  meta: {
    company: "CÔNG TY CỔ PHẦN AS SOLUTIONS",
    position: "Frontend Developer (React, TypeScript)",
    recipient: "Bộ phận Tuyển dụng AS Solutions",
    email: "contact@assolutions.vn",
    contact:
      "Tòa nhà HM Town, 412 Nguyễn Thị Minh Khai, P. 05, Q. 3, TP.HCM | Làm việc: Phú Nhuận",
    jobUrl:
      "https://www.topcv.vn/viec-lam/frontend-developer-react-typescript/2311776.html",
    notes:
      "Địa điểm: Phường Phú Nhuận, TP.HCM. T2-T6 (09:00 - 18:00). Lĩnh vực an toàn thông tin & công nghệ cao.",
    pitchHighlights:
      "Thành thạo ReactJS, TypeScript, chuyển đổi Figma thành mã sạch, tối ưu Core Web Vitals và tích hợp RESTful APIs",
  },
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Frontend Developer (React, TypeScript)",
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
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM với định hướng chuyên sâu về Frontend Development (ReactJS, TypeScript, JavaScript ES6+). Nắm vững kỹ thuật chuyển đổi chuẩn xác thiết kế Figma thành giao diện mã nguồn sạch (Clean Code), tối ưu Responsive Web Design và Cross-browser Compatibility. Có kinh nghiệm thực chiến tối ưu hóa hiệu năng tải trang (Core Web Vitals, Code Splitting, Lazy Loading), tích hợp RESTful APIs và tư duy bảo mật web. Tác phong làm việc nhóm chủ động, cầu tiến và mong muốn đồng hành lâu dài cùng AS Solutions.",
    education: cvGlobalEdu.vi,
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường tài chính trực quan (kết nối dữ liệu Vnstock3).",
        tasks: [
          "Phát triển giao diện web trực quan hóa biểu đồ và bảng dữ liệu tài chính bằng React, Next.js và TypeScript theo cấu trúc Component tái sử dụng.",
          "Chuyển đổi bản vẽ thiết kế Figma thành giao diện người dùng độ phân giải cao, tối ưu Responsive đa thiết bị và Cross-browser Compatibility.",
          "Tối ưu hiệu năng ứng dụng web (Core Web Vitals): áp dụng Dynamic Imports, Lazy Loading và hạn chế Re-render không cần thiết.",
          "Phối hợp với Backend Developer tích hợp các RESTful APIs, chuẩn hóa dữ liệu trả về và xử lý mượt mà các trạng thái Loading, Empty, Error.",
          "Tuân thủ quy trình Git chuyên nghiệp (GitHub Flow, Pull Request, Code Review) và quản lý an toàn thông tin định danh người dùng.",
        ],
        tech: "React, Next.js, TypeScript, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, RESTful API, Postman, Git",
      },
    ],
    projects: [
      {
        name: "HỆ THỐNG CV EDITOR & AI AUTOMATION",
        date: "01/2026 - Hiện tại",
        role: "Developer",
        desc: "Công cụ biên tập và tối ưu hóa hồ sơ trực tuyến đạt chuẩn in ấn A4, tích hợp kiến trúc Serverless.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Phát triển giao diện Web tương tác cao bằng Vanilla JS/HTML5/CSS3 với hiệu năng tải tức thì (<100ms) và zero-dependency bên ngoài.",
          "Xây dựng thuật toán Magic Fit tự động tính toán font-size và margin động đảm bảo layout luôn vừa vặn 1 trang A4 khi xuất in ấn / PDF.",
          "Hiện thực hóa hệ thống phím tắt đa năng, bộ nhận diện Markdown trực tiếp trên trình duyệt và cơ chế đồng bộ dữ liệu thời gian thực.",
          "Tích hợp luồng Serverless trên Cloudflare Workers kết nối Telegram Bot và LLM APIs hỗ trợ phân tích dữ liệu tự động.",
        ],
        tech: "Vanilla JS (ES6+), HTML5, CSS3 Grid/Flexbox, Cloudflare Workers, GitHub Actions CI/CD",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Website thương mại điện tử hoàn chỉnh với trải nghiệm mua sắm mượt mà và tốc độ tải trang dưới 2 giây.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Chuyển đổi hoàn chỉnh bản thiết kế Figma sang mã nguồn React & Tailwind CSS với độ chính xác cao (Pixel-perfect UI).",
          "Xây dựng hệ thống quản lý trạng thái giỏ hàng (Cart State) đồng bộ xuyên suốt các tabs thời gian thực qua BroadcastChannel API.",
          "Tích hợp hệ thống RESTful APIs phục vụ danh mục sản phẩm, bộ lọc tìm kiếm nâng cao và quy trình thanh toán nhiều bước.",
          "Xử lý form xác thực người dùng chặt chẽ, ngăn ngừa lỗ hổng XSS trên giao diện và đảm bảo tương thích đa trình duyệt.",
        ],
        tech: "React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, RESTful API, Docker, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend & UI Design",
        items:
          "ReactJS, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, Cross-browser Compatibility, Figma to Code",
      },
      {
        cat: "Hiệu năng & Kiến trúc",
        items:
          "Component-driven (Atomic Design), State Management, Web Performance (Core Web Vitals, Lazy Loading, Code Splitting), DOM Optimization",
      },
      {
        cat: "Tích hợp & Backend",
        items:
          "RESTful APIs Integration, Node.js, Express (Cơ bản), Axios/Fetch API, Postman, Xử lý dữ liệu JSON, XSS Security Prevention",
      },
      {
        cat: "Công cụ & Quy trình",
        items:
          "Git (GitHub/GitLab, PR, Code Review), Vite, Webpack, Docker (Cơ bản), Vercel, Agile/Scrum",
      },
    ],
    btnText: "In / Tải PDF",
  },
  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Frontend Developer (React, TypeScript)",
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
      "Computer Science graduate from Ho Chi Minh City Open University specializing in Frontend Development with ReactJS, TypeScript, and JavaScript (ES6+). Proficient in converting Figma designs into clean, pixel-perfect, and maintainable code with strong adherence to Responsive Web Design and Cross-browser Compatibility. Hands-on experience optimizing web performance (Core Web Vitals, code-splitting, lazy loading), integrating RESTful APIs, and implementing web security best practices. Eager to contribute high-quality frontend solutions at AS Solutions.",
    education: cvGlobalEdu.en,
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Interactive financial market data visualization platform connected with Vnstock3 financial data.",
        tasks: [
          "Developed responsive charts and financial dashboards using React, Next.js, and TypeScript following reusable component patterns.",
          "Translated Figma UI/UX designs into high-fidelity web interfaces ensuring cross-browser compatibility and seamless mobile responsiveness.",
          "Optimized Core Web Vitals and runtime performance via dynamic imports, lazy loading, and memoization techniques.",
          "Collaborated with Backend Developers to integrate RESTful APIs, handle JSON payloads, and gracefully manage loading, error, and edge cases.",
          "Maintained professional Git practices (GitHub Flow, Pull Requests, Code Reviews) while ensuring data security and token privacy.",
        ],
        tech: "React, Next.js, TypeScript, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, RESTful API, Postman, Git",
      },
    ],
    projects: [
      {
        name: "CV EDITOR & AI AUTOMATION SYSTEM",
        date: "01/2026 - Present",
        role: "Developer",
        desc: "High-performance CV builder and automation platform optimized for A4 print output with Serverless architecture.",
        github: "https://github.com/dinhanhhhh/cv-editor",
        tasks: [
          "Engineered a zero-dependency, ultra-fast (<100ms load) web application utilizing Vanilla JS/HTML5/CSS3.",
          "Implemented the Magic Fit algorithm dynamically calculating font-sizes and line-heights to guarantee strict 1-page A4 print layout.",
          "Developed rich browser hotkeys, live markdown parser, and real-time state synchronization.",
          "Constructed serverless pipelines on Cloudflare Workers interfacing with Telegram Bot and LLM APIs for automated resume tailoring.",
        ],
        tech: "Vanilla JS (ES6+), HTML5, CSS3 Grid/Flexbox, Cloudflare Workers, GitHub Actions CI/CD",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "09/2024 - 12/2024",
        role: "Developer",
        desc: "Full-stack e-commerce web application with smooth user checkout flows and sub-2-second page loads.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Converted Figma mockups into pixel-perfect React and Tailwind CSS components with high fidelity.",
          "Architected real-time multi-tab cart synchronization using the HTML5 BroadcastChannel API.",
          "Integrated RESTful APIs for dynamic product catalog filtering, pagination, and multi-step checkout processes.",
          "Implemented robust client-side input validation and sanitized inputs to prevent common XSS vulnerabilities.",
        ],
        tech: "React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB, RESTful API, Docker, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend & UI Design",
        items:
          "ReactJS, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, Cross-browser Compatibility, Figma to Code",
      },
      {
        cat: "Performance & Architecture",
        items:
          "Component-driven (Atomic Design), State Management, Web Performance (Core Web Vitals, Lazy Loading, Code Splitting), DOM Optimization",
      },
      {
        cat: "Integration & Backend",
        items:
          "RESTful APIs Integration, Node.js, Express (Basic), Axios/Fetch API, Postman, JSON Processing, XSS Prevention",
      },
      {
        cat: "Tools & Workflow",
        items:
          "Git (GitHub/GitLab, PR, Code Review), Vite, Webpack, Docker (Basic), Vercel, Agile/Scrum",
      },
    ],
    btnText: "Print / Save PDF",
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = cvData;
}
