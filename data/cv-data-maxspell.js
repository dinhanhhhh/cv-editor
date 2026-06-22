// ===================================
// CV DATA - MAXSPELL WEB DEVELOPER
// ===================================

if (typeof require !== "undefined" && typeof cvGlobalEdu === "undefined") {
  global.cvGlobalEdu = require("./cv-global.js");
}

var cvData = {
  vi: {
    projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Web Developer",
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
      projects: "DỰ ÁN TIÊU BIỂU",
      skills: "KỸ NĂNG",
    },
    objective:
      "Lập trình viên Web với thế mạnh về JavaScript/TypeScript, React và Next.js. Có kinh nghiệm xây dựng ứng dụng Web responsive mượt mà trên Mobile/Tablet/Desktop, tối ưu hóa hiệu năng tải trang và áp dụng SEO kỹ thuật (HTML ngữ nghĩa, tối ưu metadata). Có kiến thức thực tế về quản lý hạ tầng đám mây (Vercel, Supabase Cloud) và kết nối cơ sở dữ liệu (PostgreSQL, MySQL). Kỹ năng tiếng Anh tốt và tinh thần tự giác cao giúp làm việc từ xa (remote) hiệu quả trực tiếp với các khách hàng/đối tác nước ngoài.",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "NỀN TẢNG TUYỂN DỤNG & KẾT NỐI (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Ứng dụng web hỗ trợ đăng tin tuyển dụng, ứng tuyển trực tuyến và quản lý hồ sơ người dùng.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Phát triển giao diện React/Next.js responsive toàn diện trên Mobile, Tablet và Desktop.",
          "Tích hợp các RESTful API endpoints cùng Backend Team để xử lý dữ liệu và đồng bộ hóa trạng thái người dùng.",
          "Xử lý và kiểm soát tốt các trạng thái dữ liệu phía Client (Loading/Skeleton, Empty, Error) nâng cao trải nghiệm người dùng.",
          "Thiết kế luồng xác thực phía Client (login/register/protected routes) đảm bảo phân quyền người dùng mượt mà.",
          "Sử dụng Git/GitHub để quản lý mã nguồn, giải quyết xung đột (conflict) và triển khai ứng dụng lên Vercel.",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, RESTful API, Git, Vercel",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE)",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "Ứng dụng web mua sắm với giỏ hàng tối ưu và quy trình thanh toán mượt mà.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Xây dựng giao diện danh sách sản phẩm, chi tiết, giỏ hàng và thanh toán (checkout) bằng React + Tailwind CSS.",
          "Tối ưu hóa SEO kỹ thuật thông qua việc sử dụng cấu trúc HTML ngữ nghĩa (semantic HTML), thẻ meta chuẩn SEO và cải thiện tốc độ tải trang.",
          "Xử lý đồng bộ hóa giỏ hàng và lưu trữ cục bộ trạng thái mua sắm của người dùng.",
          "Tối ưu hóa hình ảnh và tài nguyên tĩnh giúp giảm thời gian tải trang và cải thiện trải nghiệm trên thiết bị di động.",
        ],
        tech: "React, Vite, TypeScript/JavaScript, Tailwind CSS, RESTful API, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Front-End",
        items:
          "React.js, Next.js, HTML5 (Semantic HTML), CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "State & API",
        items:
          "React Hooks, Zustand, RESTful API Integration, Axios, Fetch, JSON data processing",
      },
      {
        cat: "Hạ tầng & DB",
        items:
          "Vercel (Cloud Hosting), Supabase, PostgreSQL (đã thực hành thực tế), MySQL, MongoDB, Git/GitHub",
      },
      {
        cat: "Tối ưu & Công cụ",
        items:
          "Tối ưu hóa SEO kỹ thuật (Performance, Metadata, Semantic Web), Postman, Figma, VS Code",
      },
      {
        cat: "Kỹ năng mềm",
        items:
          "Tiếng Anh giao tiếp tốt (đọc hiểu tài liệu & làm việc với khách hàng Mỹ), Tự quản lý thời gian (Remote workflow), Tự học tốt",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_Web_Developer_Maxspell",
    coverLetter: `[Tiêu đề Email: Ứng tuyển Lập trình viên Web (Remote) - Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng Công ty Maxspell,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ sự quan tâm sâu sắc và mong muốn được ứng tuyển vào vị trí Lập trình viên Web làm việc từ xa tại Maxspell.

Tôi rất hào hứng với cơ hội hợp tác tại Maxspell để phát triển các sản phẩm cho đối tác tại Hoa Kỳ. Tôi tin rằng hồ sơ của mình rất phù hợp với các tiêu chí tuyển dụng của công ty:
- **Kỹ năng phát triển Web hiện đại:** Tôi có nền tảng vững chắc về JavaScript/TypeScript, React và Next.js. Tôi đã xây dựng các dự án đáp ứng tiêu chuẩn SEO kỹ thuật và hiển thị responsive mượt mà trên Mobile/Tablet/Desktop.
- **Kinh nghiệm thực tiễn về Cloud & DB:** Trong thời gian thực tập Back-End tại Tami Technology, tôi đã tham gia thiết kế cơ sở dữ liệu PostgreSQL và cấu hình triển khai dự án thực tế trên nền tảng đám mây Supabase và Vercel. Điều này giúp tôi hiểu rõ quy trình vận hành và hosting sản phẩm.
- **Khả năng làm việc từ xa & Tiếng Anh:** Tôi tự tin với kỹ năng đọc viết và giao tiếp tiếng Anh tốt, đủ khả năng tham gia các buổi họp và làm việc trực tiếp với khách hàng Mỹ. Đồng thời, tôi có tinh thần tự giác, kỷ luật cao để quản lý công việc hiệu quả khi làm việc remote.

Tôi xin gửi kèm các dự án tiêu biểu mà tôi đã thực hiện để Quý công ty tham khảo:
- Dự án Job Portal: https://github.com/dinhanhhhh/JOB-PORTAL (Hỗ trợ đăng tin, ứng tuyển trực tuyến, xây dựng bằng Next.js 15).
- Dự án E-Commerce: https://github.com/dinhanhhhh/ecommerce (Ứng dụng mua sắm tối ưu giỏ hàng, xây dựng bằng React và Vite).

**Thông tin bổ sung:**
- **Mức lương mong muốn:** Thỏa thuận / Thương lượng.
- **Thời gian có thể bắt đầu:** Tôi có thể bắt đầu làm việc ngay lập tức dưới hình thức toàn thời gian (Full-time).

Cảm ơn Quý công ty đã dành thời gian xem xét hồ sơ. Tôi rất mong có cơ hội tham gia các vòng phỏng vấn tiếp theo cùng Maxspell và đối tác.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
  },

  en: {
    projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Web Developer",
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
      projects: "TECHNICAL PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Web Developer specializing in JavaScript/TypeScript, React, and Next.js. Experienced in building responsive, high-performance web interfaces across Mobile/Tablet/Desktop, implementing technical SEO optimizations (semantic HTML, metadata, and core web vitals). Solid understanding of cloud hosting platforms (Vercel, Supabase Cloud) and database systems (PostgreSQL, MySQL). Fluent in English and highly self-motivated, ready to work remotely and collaborate directly with US clients.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "A web application supporting job listings, online applications, and applicant profile management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Developed fully responsive React/Next.js interfaces across Mobile, Tablet, and Desktop screens.",
          "Collaborated with Backend Team to integrate RESTful APIs for handling authentication and user data flows.",
          "Managed and controlled client-side data states (Loading/Skeleton, Empty, Error) to enhance UX.",
          "Designed authentication flows (login/register/protected routes) for secure client-side routing.",
          "Used Git/GitHub for version control, resolving conflicts, and successfully deployed to Vercel.",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, RESTful API, Git, Vercel",
      },
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 09/2025",
        role: "Developer",
        desc: "A shopping web application with an optimized shopping cart and smooth checkout flow.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Built product catalogs, shopping cart, and checkout UI pages using React and Tailwind CSS.",
          "Implemented technical SEO optimizations by leveraging semantic HTML tags, metadata structure, and improving page load speeds.",
          "Handled state synchronization for shopping cart items and implemented local storage persistence.",
          "Optimized static assets and images to reduce page load time and improve mobile responsiveness.",
        ],
        tech: "React, Vite, TypeScript/JavaScript, Tailwind CSS, RESTful API, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Front-End",
        items:
          "React.js, Next.js, HTML5 (Semantic HTML), CSS3, JavaScript (ES6+), TypeScript, Tailwind CSS, Responsive Design",
      },
      {
        cat: "State & API",
        items:
          "React Hooks, Zustand, RESTful API Integration, Axios, Fetch, JSON data processing",
      },
      {
        cat: "Cloud & DB",
        items:
          "Vercel (Cloud Hosting), Supabase, PostgreSQL (hands-on experience), MySQL, MongoDB, Git/GitHub",
      },
      {
        cat: "SEO & Tools",
        items:
          "Technical SEO Optimization (Performance, Metadata, Semantic Web), Postman, Figma, VS Code",
      },
      {
        cat: "Soft Skills",
        items:
          "Fluent English (reading docs & client communication), Self-management (Remote workflow), Self-learning",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_Web_Developer_Maxspell",
    coverLetter: `[Subject: Web Developer Application (Remote) - Truong Dinh Anh]

Dear Maxspell Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in the remote Web Developer position at Maxspell.

I am highly excited about the opportunity to work with Maxspell and collaborate directly with your US-based clients. I believe my background aligns perfectly with your requirements:
- **Modern Web Development:** I have a solid foundation in JavaScript/TypeScript, React, and Next.js. I have hands-on experience building responsive interfaces across multiple devices and implementing technical SEO strategies (such as semantic HTML structure and performance optimization).
- **Cloud Hosting & Infrastructure:** During my Back-End Internship at Tami Technology, I designed database schemas and deployed web applications on Supabase Cloud and Vercel. This experience helps me understand product hosting and production-ready deployments.
- **Remote & English Readiness:** I am fluent in English (written and spoken) and comfortable communicating directly with US clients during meetings and project collaborations. I also possess the discipline and self-motivation required to work productively in a fully remote environment.

I would like to share two key projects that demonstrate my development capabilities:
- Job Portal Platform: https://github.com/dinhanhhhh/JOB-PORTAL (Online application web app built with Next.js 15).
- E-Commerce Platform: https://github.com/dinhanhhhh/ecommerce (Shopping cart and checkout application built with React and Vite).

**Additional Details:**
- **Expected salary:** Negotiable / Competitive.
- **Availability:** Immediate (Full-time).

Thank you for your time and consideration. I look forward to the possibility of discussing my application further in an interview with Maxspell and your client.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
  },
};

if (typeof module !== "undefined") {
  module.exports = cvData;
}
