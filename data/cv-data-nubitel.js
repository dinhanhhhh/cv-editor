// ===================================
// CV DATA - NUBITEL FRONT-END DEVELOPER (VUEJS/REACTJS)
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

var cvData = {
  vi: {
        projectDisplayLimit: 2,
    name: "TRƯƠNG ĐÌNH ANH",
    title: "Front-End Developer (VueJS / ReactJS)",
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
      skills: "KỸ NĂNG CHUYÊN MÔN",
    },
    objective:
      "Lập trình viên Front-End có kinh nghiệm thực tế phát triển giao diện người dùng bằng cả ReactJS và VueJS. Nắm vững HTML5, CSS3 (SASS/SCSS), JavaScript/TypeScript. Thành thạo việc quản lý trạng thái ứng dụng (Zustand, Redux, Vuex) và tích hợp RESTful API cho các sản phẩm web thực tế. Có tư duy viết code sạch, chú trọng chất lượng UI/UX responsive, khả năng tự giác và làm việc nhóm tốt khi làm việc từ xa (remote).",
    education: cvGlobalEdu.vi,
    projects: [
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
        date: "08/2025 - 09/2025",
        role: "Front-End Developer",
        desc: "Ứng dụng mua sắm trực tuyến với giỏ hàng động, thanh toán tối ưu và đồng bộ hóa thời gian thực.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Phát triển giao diện giỏ hàng, danh mục sản phẩm và quy trình thanh toán tối ưu (checkout flow) bằng ReactJS.",
          "Sử dụng Redux (Redux Persist) kết hợp BroadcastChannel API để đồng bộ hóa giỏ hàng và trạng thái đăng nhập tức thì giữa nhiều tab trình duyệt.",
          "Tích hợp RESTful API từ backend, xử lý validation form thông minh phía client và quản lý dữ liệu JSON hiệu quả.",
          "Cấu hình tối ưu SEO (semantic HTML, meta tags) giúp cải thiện tốc độ tải trang và thứ hạng tìm kiếm.",
        ],
        tech: "ReactJS, Vite, Redux, HTML5, CSS3/Tailwind CSS, RESTful API, Git, Vercel",
      },
      {
        name: "NỀN TẢNG TUYỂN DỤNG & KẾT NỐI (JOB PORTAL)",
        date: "11/2025 - 02/2026",
        role: "Front-End Developer",
        desc: "Hệ thống tuyển dụng hiện đại hỗ trợ đăng tin việc làm, nộp CV trực tuyến và quản lý hồ sơ ứng viên.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Xây dựng giao diện Next.js responsive với Tailwind CSS dựa trên bản vẽ Figma, đảm bảo hiển thị mượt mà trên mobile và desktop.",
          "Xử lý chuẩn chỉ đầy đủ 3 trạng thái dữ liệu (Loading/Skeleton, Empty, Error) trên mọi màn hình tương tác để nâng cao trải nghiệm người dùng (UX).",
          "Tích hợp RESTful API cho luồng xác thực (JWT Login/Register, Route Protection) và quản lý trạng thái xác thực phía client.",
          "Phối hợp quản lý mã nguồn bằng Git, tuân thủ Git Workflow (Feature Branching) để làm việc nhóm hiệu quả.",
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Tailwind CSS, RESTful API, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend Core",
        items: "VueJS, ReactJS, Next.js, HTML5, CSS3 (SASS/SCSS), JavaScript (ES6+), TypeScript",
      },
      {
        cat: "Quản lý trạng thái",
        items: "Redux / Redux Toolkit, Redux Persist, Vuex, Zustand, React Hooks",
      },
      {
        cat: "API & Tích hợp",
        items: "RESTful API, JSON, Axios, Fetch, JWT Authentication",
      },
      {
        cat: "Công cụ & Deploy",
        items: "Git / GitHub, Postman, Figma (view), VS Code, Vercel, Docker basic",
      },
      {
        cat: "Lợi thế & Kỹ năng",
        items: "Có tư duy Clean Code, đọc hiểu tài liệu tiếng Anh tốt, kinh nghiệm thực tế với cả VueJS & ReactJS, tự quản lý công việc khi làm remote",
      },
    ],
    btnText: "In / Tải PDF",
    docTitle: "CV_TruongDinhAnh_FrontEnd_Developer_Nubitel",
    coverLetter: `[Tiêu đề Email: Ứng tuyển Vị trí Front-End Developer (Remote) – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Nubitel (Mr. Huy Bui),

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn ứng tuyển vào vị trí Front-End Developer (Remote) tại Nubitel.

Với nền tảng vững chắc về HTML5, CSS3 (SASS/SCSS), JavaScript/TypeScript và kinh nghiệm thực tế phát triển các ứng dụng web với cả VueJS và ReactJS, tôi tự tin có thể nhanh chóng bắt nhịp và đóng góp cho team Nubitel. Điểm mạnh của tôi là khả năng quản lý trạng thái ứng dụng (Vuex, Redux/Redux Toolkit) và tích hợp các backend services qua RESTful API một cách chuẩn xác.

Là người đã có kinh nghiệm làm việc với cả hai công nghệ ReactJS và VueJS, tôi rất hào hứng trước định hướng ưu tiên VueJS của Nubitel cho sản phẩm SaaS/AI. Tôi tự tin có thể làm việc và tối ưu hóa hệ thống hiện tại của công ty bằng VueJS/Vuex ngay khi gia nhập. Bên cạnh đó, việc làm việc 100% remote không phải là trở ngại vì tôi có tinh thần tự giác, tự quản lý công việc tốt và sử dụng thành thạo các công cụ cộng tác trực tuyến.

Tôi rất mong nhận được phản hồi từ Quý công ty và có cơ hội trao đổi trực tiếp trong buổi phỏng vấn sắp tới. Xin cảm ơn Mr. Huy và Ban Tuyển dụng đã dành thời gian xem xét hồ sơ của tôi.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh
CV Online: https://github.com/dinhanhhhh/cv-editor`
  },
  en: {
        projectDisplayLimit: 2,
    name: "TRUONG DINH ANH",
    title: "Front-End Developer (VueJS / ReactJS)",
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
      projects: "FEATURED PROJECTS",
      skills: "TECHNICAL SKILLS",
    },
    objective:
      "Front-End Developer with hands-on experience building user interfaces using both VueJS and ReactJS. Solid foundation in HTML5, CSS3 (SASS/SCSS), and JavaScript/TypeScript. Proficient in managing application states (Vuex, Redux, Zustand) and integrating RESTful APIs for web applications. Focused on writing clean code, responsive layouts, and remote team collaboration.",
    education: cvGlobalEdu.en,
    projects: [
      {
        name: "E-COMMERCE PLATFORM",
        date: "08/2025 - 09/2025",
        role: "Front-End Developer",
        desc: "An online shopping web application featuring dynamic carts, optimized checkout flows, and real-time state synchronization.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed product catalogs, shopping cart UI, and checkout flows with ReactJS.",
          "Utilized Redux (Redux Persist) along with BroadcastChannel API to synchronize cart and authentication states across browser tabs instantly.",
          "Integrated backend RESTful APIs, implemented smart client-side form validation, and handled JSON data structures efficiently.",
          "Optimized basic SEO configurations (semantic HTML, meta tags) to improve loading speeds and search rankings.",
        ],
        tech: "ReactJS, Vite, Redux, HTML5, CSS3/Tailwind CSS, RESTful API, Git, Vercel",
      },
      {
        name: "JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Front-End Developer",
        desc: "A modern recruitment system supporting job posting, online CV submission, and applicant profile management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Built responsive Next.js interfaces with Tailwind CSS from Figma designs, ensuring smooth rendering on mobile and desktop.",
          "Handled all 3 core data states (Loading/Skeleton, Empty, Error) for all interactive pages to elevate user experience (UX).",
          "Integrated RESTful APIs for authentication flows (JWT Login/Register, Route Protection) and managed client-side auth states.",
          "Co-managed source code with Git, adhering to Git Workflow (Feature Branching) for effective team collaboration.",
        ],
        tech: "Next.js 15, ReactJS, TypeScript, Tailwind CSS, RESTful API, Git, Vercel",
      },
    ],
    skills: [
      {
        cat: "Frontend Core",
        items: "VueJS, ReactJS, Next.js, HTML5, CSS3 (SASS/SCSS), JavaScript (ES6+), TypeScript",
      },
      {
        cat: "State Management",
        items: "Redux / Redux Toolkit, Redux Persist, Vuex, Zustand, React Hooks",
      },
      {
        cat: "API & Integration",
        items: "RESTful API, JSON, Axios, Fetch, JWT Authentication",
      },
      {
        cat: "Tools & Deploy",
        items: "Git / GitHub, Postman, Figma (view), VS Code, Vercel, Docker basic",
      },
      {
        cat: "Advantages",
        items: "Clean Code mindset, good English documentation comprehension, hands-on experience with both VueJS & ReactJS, strong self-discipline for remote work",
      },
    ],
    btnText: "Print / Save PDF",
    docTitle: "CV_TruongDinhAnh_FrontEnd_Developer_Nubitel",
    coverLetter: `[Subject: Job Application: Front-End Developer (Remote) – Truong Dinh Anh]

Dear Nubitel Hiring Team (Mr. Huy Bui),

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Front-End Developer (Remote) position at Nubitel.

With a solid foundation in HTML5, CSS3 (SASS/SCSS), JavaScript/TypeScript, and hands-on experience developing web applications using both VueJS and ReactJS, I am confident in my ability to quickly adapt and contribute value to the Nubitel team. My strengths include application state management (Vuex, Redux/Redux Toolkit) and integrating backend services via RESTful APIs cleanly.

Having worked with both ReactJS and VueJS, I am very excited about Nubitel's focus on VueJS for your SaaS/AI products. I am confident in my ability to work with and optimize your existing systems using VueJS/Vuex immediately upon joining. Furthermore, working 100% remote will not be a barrier, as I possess strong self-discipline, excellent time management, and are highly familiar with remote collaboration tools.

Thank you, Mr. Huy and the Hiring Team, for your time and consideration of my application. I look forward to the opportunity to discuss how I can contribute to Nubitel in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh
Online CV: https://github.com/dinhanhhhh/cv-editor`
  },
};

if (typeof module !== 'undefined') {
    module.exports = cvData;
}
