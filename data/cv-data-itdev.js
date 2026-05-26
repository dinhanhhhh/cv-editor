// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}


const cvData = {
  vi: {
    name: "TRƯƠNG ĐÌNH ANH",
    title: "IT Developer Intern",
    contact: [
      { icon: "phone", text: "0349421079" },
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
      projects: "DỰ ÁN & KINH NGHIỆM KỸ THUẬT",
      skills: "KỸ NĂNG",
    },
    objective:
      "Sinh viên tốt nghiệp ngành Khoa học Máy tính có tư duy logic tốt, đam mê công nghệ và tinh thần chủ động cao. Thành thạo HTML, CSS, JavaScript, ReactJS để phát triển website và landing page chuẩn responsive. Có thói quen kết hợp các công cụ thiết kế (Figma, Canva) và trợ lý AI thông minh (Lovable AI, Claude, Copilot) để tăng tốc độ triển khai giao diện tối ưu. Nắm vững nền tảng cơ bản về cơ sở dữ liệu (MySQL, MongoDB) và Git. Sẵn sàng thực tập tối thiểu 3-6 tháng, làm việc nhóm tốt để đồng hành cùng các sản phẩm phần mềm của công ty.",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "NỀN TẢNG TUYỂN DỤNG & KẾT NỐI (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Ứng dụng web hỗ trợ đăng tin tuyển dụng, ứng tuyển trực tuyến và quản lý hồ sơ người dùng.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Thiết kế và xây dựng giao diện Next.js/React responsive dựa trên bản vẽ Figma, tối ưu hóa bố cục hiển thị.",
          "Xử lý đầy đủ 3 trạng thái dữ liệu (Loading/Skeleton, Empty, Error) để tăng trải nghiệm người dùng.",
          "Sử dụng Git/GitHub để quản lý mã nguồn, phối hợp giải quyết xung đột (conflict) hiệu quả.",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, Figma, Git, Vercel",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Ứng dụng mua sắm trực tuyến với giao diện trực quan, giỏ hàng động và quy trình thanh toán tối ưu.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Phát triển giao diện giỏ hàng và landing page giới thiệu sản phẩm bằng React, kết hợp validation form thông minh.",
          "Ứng dụng Lovable AI và Claude để tối ưu hóa mã nguồn, hỗ trợ xây dựng nhanh các component giao diện động.",
          "Tối ưu SEO cơ bản (meta tags, semantic HTML) giúp tăng tốc độ tải trang và hiển thị tối ưu trên công cụ tìm kiếm.",
        ],
        tech: "React, Vite, Tailwind CSS, Lovable AI, HTML5/CSS3, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Lập trình & Web",
        items:
          "HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, basic WordPress",
      },
      {
        cat: "Cơ sở dữ liệu",
        items: "MySQL, PostgreSQL, MongoDB, SQL Server basic",
      },
      {
        cat: "Công cụ & Thiết kế",
        items: "Figma, Canva, Lovable AI, Git/GitHub, VS Code, Postman",
      },
      {
        cat: "Lợi thế bổ sung",
        items:
          "Tối ưu hóa SEO cơ bản, tích hợp form, gắn mã tracking (Marketing/Design support)",
      },
    ],

    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_IT_Developer_Intern",
  },
  en: {
    name: "TRƯƠNG ĐÌNH ANH",
    title: "IT Developer Intern",
    contact: [
      { icon: "phone", text: "0349421079" },
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
      projects: "PROJECTS & TECHNICAL EXPERIENCE",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Computer Science graduate with a strong logical mindset, highly proactive, and passionate about software development. Proficient in HTML, CSS, JavaScript, and ReactJS for building fully responsive websites and landing pages. Experienced in combining design tools (Figma, Canva) with smart AI assistants (Lovable AI, Claude, Copilot) to accelerate high-quality UI delivery. Strong foundations in databases (MySQL, MongoDB) and Git. Ready for a 3-to-6-month internship, eager to learn and contribute to the company's software products.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "JOB PORTAL & CONNECTIVITY PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A web application supporting job postings, online applications, and applicant profile management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Designed and built Next.js/React responsive interfaces based on Figma mockups, optimizing layouts.",
          "Handled all 3 data states (Loading/Skeleton, Empty, Error) to significantly boost user experience.",
          "Utilized Git/GitHub for source control, collaborating to resolve merge conflicts efficiently.",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, Figma, Git, Vercel",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "An online shopping application with intuitive product layouts, dynamic carts, and optimized checkout flow.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed cart interfaces and responsive landing pages using React with clean form validations.",
          "Leveraged Lovable AI and Claude to optimize codebase, accelerating the delivery of dynamic UI components.",
          "Optimized basic SEO settings (meta tags, semantic HTML) to improve page speed and search rankings.",
        ],
        tech: "React, Vite, Tailwind CSS, Lovable AI, HTML5/CSS3, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Programming & Web",
        items:
          "HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, basic WordPress",
      },
      {
        cat: "Databases",
        items: "MySQL, PostgreSQL, MongoDB, SQL Server basic",
      },
      {
        cat: "Tools & Design",
        items: "Figma, Canva, Lovable AI, Git/GitHub, VS Code, Postman",
      },
      {
        cat: "Additional Skills",
        items: "Basic SEO setup, form integrations & tracking",
      },
    ],

    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_IT_Developer_Intern",
  },
};
