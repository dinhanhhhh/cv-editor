// ===================================
// CV DATA: BASE.VN FULLSTACK PRODUCT ENGINEER
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

var cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Software Engineer (Fullstack / Product Engineer)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thủ Đức, TP. Hồ Chí Minh' }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            projects: "DỰ ÁN TIÊU BIỂU",
            skills: "KỸ NĂNG CHUYÊN MÔN"
        },
        objective: "Lập trình viên Khoa học Máy tính có tư duy Product Ownership và định hướng User-Centric. Có kinh nghiệm xây dựng ứng dụng Fullstack (JavaScript/TypeScript, Node.js, MySQL, MongoDB), thiết kế RESTful API hiệu năng cao và tối ưu hóa truy vấn. Khả năng tự học và tư duy hệ thống tốt, sẵn sàng phát triển các sản phẩm SaaS đột phá giúp tối ưu hóa vận hành doanh nghiệp cùng Base.vn.",
        education: cvGlobalEdu.vi,
        projects: [
            {
                name: "JOB PORTAL PLATFORM (HỆ THỐNG TUYỂN DỤNG DOANH NGHIỆP)",
                date: "11/2025 - 02/2026",
                role: "Fullstack Developer (Product Owner)",
                desc: "Hệ thống tuyển dụng và quản lý ứng viên tối ưu trải nghiệm ứng tuyển cho ứng viên và quản trị quy trình cho nhà tuyển dụng.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Product Thinking: Chủ động phân tích nghiệp vụ đăng tuyển/nộp CV để thiết kế giải pháp tối ưu luồng tương tác giữa ứng viên và doanh nghiệp.",
                    "Backend & Security: Xây dựng hơn 20 RESTful API bằng Node.js & Express bảo mật cao với JWT (HttpOnly Cookies, RBAC và cơ chế auto-refresh token).",
                    "Database & UI: Tối ưu cấu trúc MongoDB (indexing, query tuning) duy trì API response <300ms; phát triển giao diện Next.js với đầy đủ các trạng thái tương tác (Loading, Empty, Error)."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "OMNICHANNEL E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Fullstack Developer",
                desc: "Hệ thống thương mại điện tử đồng bộ đa nền tảng với danh mục sản phẩm, quản lý tồn kho và quy trình thanh toán tối ưu.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "State Synchronization: Thiết kế giải pháp đồng bộ hóa giỏ hàng đa tab thời gian thực bằng Redux Persist & BroadcastChannel API, loại bỏ triệt để lỗi lệch dữ liệu.",
                    "API & Data Integrity: Xây dựng RESTful API (Node.js, Express, MongoDB) quản lý sản phẩm, tồn kho, đơn hàng bảo mật và nhất quán dữ liệu JSON.",
                    "UX & SEO Optimization: Tối ưu hóa form validation client-side, cơ chế xử lý lỗi checkout giúp giảm tỷ lệ thoát trang, cấu hình SEO (Semantic HTML, Meta Tags) cải thiện Core Web Vitals."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS"
            }
        ],
        skills: [
            { cat: "Cốt lõi & Thuật toán", items: "Cấu trúc dữ liệu & Giải thuật (Algorithms & Data Structures), Tư duy Product Ownership, User-Centric Design, Clean Code" },
            { cat: "Frontend Technologies", items: "HTML5, CSS3 (SASS/SCSS), Javascript/TypeScript, ReactJS, Next.js, jQuery, AJAX, Responsive Design" },
            { cat: "Backend & Database", items: "Node.js (Express), MySQL, MongoDB (Mongoose), RESTful API, JWT, JSON, Query Optimization" },
            { cat: "Công cụ phát triển", items: "Git / GitHub (Feature Branching), Postman, Swagger, Figma (view), Vercel, Docker basic" },
            { cat: "Ngoại ngữ & Kỹ năng", items: "Đọc hiểu tài liệu tiếng Anh tốt, tự quản lý công việc hiệu quả, tinh thần trách nhiệm cao đối với sản phẩm" }
        ],
        projectDisplayLimit: 2,
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_Fullstack_Product_Engineer_BaseVN",
        coverLetter: `[Tiêu đề Email: Ứng tuyển Vị trí Fullstack Engineer (Product Engineer) – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Base.vn,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ nguyện vọng được cống hiến tại vị trí Fullstack Engineer (Product Engineer) của Base.vn tại văn phòng TP.HCM.

Là một sinh viên chuyên ngành Khoa học Máy tính, tôi đã trang bị cho mình nền tảng vững chắc về Cấu trúc dữ liệu & Giải thuật, tư duy thuật toán và lập trình hướng đối tượng. Trong quá trình học tập và làm việc, tôi đã tự tay xây dựng và tối ưu các sản phẩm web thực tế bằng ngôn ngữ Javascript/TypeScript kết hợp NodeJS, MySQL, MongoDB và các RESTful API. Điển hình là việc tôi đã tự thiết kế giải pháp đồng bộ hóa giỏ hàng đa tab bằng BroadcastChannel API trong dự án E-Commerce, và xây dựng hệ thống phân quyền (RBAC) sử dụng JWT kèm cơ chế refresh token hoàn chỉnh trong dự án Job Portal.

Tôi vô cùng ấn tượng với triết lý phát triển sản phẩm của Base.vn: "Sản phẩm tốt nhất được tạo ra bởi những kỹ sư thực sự hiểu bài toán, hiểu người dùng và chịu trách nhiệm tối đa về giá trị sản phẩm". Đây chính là định hướng nghề nghiệp tôi đang theo đuổi - trở thành một Product Engineer đúng nghĩa chứ không chỉ dừng lại ở việc gõ code. Tôi luôn đặt mình vào vị trí của người dùng cuối để tối ưu trải nghiệm UI/UX (thể hiện qua việc thiết kế kỹ lưỡng đầy đủ 3 trạng thái Loading/Skeleton, Empty, Error cho mọi màn hình).

Với năng lực tự học cao, tư duy thiết kế hệ thống và thái độ làm việc trách nhiệm, tôi tự tin sẽ nhanh chóng hội nhập, làm chủ công nghệ mới và đóng góp giá trị thực sự cho các sản phẩm SaaS/AI của Base.vn.

Tôi có đính kèm bản CV chi tiết để Quý công ty tiện xem xét. Cảm ơn Ban Tuyển dụng đã dành thời gian xem hồ sơ của tôi.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "Software Engineer (Fullstack / Product Engineer)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "FEATURED PROJECTS",
            skills: "TECHNICAL SKILLS"
        },
        objective: "Computer Science graduate with a Product Ownership mindset and a User-Centric focus. Experienced in building fullstack applications (JavaScript/TypeScript, Node.js, MySQL, MongoDB), designing high-performance RESTful APIs, and optimizing database queries. A fast learner with strong systems thinking, ready to build impactful SaaS solutions that solve operational pain points for businesses at Base.vn.",
        education: cvGlobalEdu.en,
        projects: [
            {
                name: "JOB PORTAL PLATFORM (ENTERPRISE RECRUITMENT SYSTEM)",
                date: "11/2025 - 02/2026",
                role: "Fullstack Developer (Product Owner)",
                desc: "A recruitment platform optimizing the application flow for candidates and streamlining workflows for enterprise recruiters.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Product Thinking: Analyzed recruiter and candidate business flows to design and build seamless recruitment workflows.",
                    "Backend & Security: Developed 20+ secure RESTful APIs using Node.js & Express with JWT (HttpOnly Cookies, RBAC, and auto-refresh tokens).",
                    "Database & UI: Optimized MongoDB (indexing, query tuning) to keep response times <300ms; integrated Next.js frontend with full interactive states (Loading, Empty, Error)."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "OMNICHANNEL E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Fullstack Developer",
                desc: "A multi-platform online shopping platform featuring product catalogs, inventory management, and an optimized checkout process.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "State Sync: Designed real-time multi-tab cart synchronization using Redux Persist and BroadcastChannel API, preventing data desynchronization.",
                    "API & Integrity: Built Node.js, Express & MongoDB RESTful APIs for inventory and order management, securing JSON data integrity.",
                    "UX & SEO: Optimized checkout validation and API error handling to reduce abandonment rates; configured SEO (Semantic HTML, Meta Tags) to boost Core Web Vitals."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS"
            }
        ],
        skills: [
            { cat: "Core & Algorithms", items: "Algorithms & Data Structures, Product Ownership Mindset, User-Centric Focus, Clean Code" },
            { cat: "Frontend Technologies", items: "HTML5, CSS3 (SASS/SCSS), JavaScript/TypeScript, ReactJS, Next.js, jQuery, AJAX, Responsive Design" },
            { cat: "Backend & Databases", items: "Node.js (Express), MySQL, MongoDB (Mongoose), RESTful API, JWT, JSON, Query Optimization" },
            { cat: "Tools & Deploy", items: "Git / GitHub (Feature Branching), Postman, Swagger, Figma (view), Vercel, Docker basic" },
            { cat: "Languages & Skills", items: "Good English technical reading, self-driven learning, high product responsibility" }
        ],
        projectDisplayLimit: 2,
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_Fullstack_Product_Engineer_BaseVN",
        coverLetter: `[Subject: Job Application: Fullstack Engineer (Product Engineer) – Truong Dinh Anh]

Dear Base.vn Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Fullstack Engineer (Product Engineer) position at Base.vn HCMC Office.

As a Computer Science major, I have equipped myself with a solid foundation in Algorithms & Data Structures, algorithmic thinking, and Object-Oriented Programming. Throughout my academic and project work, I have built and optimized web applications using JavaScript/TypeScript, Node.js, MySQL, MongoDB, and RESTful APIs from scratch. For example, I successfully designed a multi-tab cart synchronization using BroadcastChannel API in my E-Commerce project and developed a comprehensive RBAC role-based authorization flow using JWT and access token auto-refresh in my Job Portal project.

I am deeply impressed by Base.vn's product philosophy: "The best products are built by engineers who truly understand the problem, understand the user, and take full ownership of the value their products deliver." This perfectly aligns with my career objective: to grow into a true Product Engineer rather than just a coder. I always view problems from the end-user's perspective to optimize their UI/UX journey, which is demonstrated by my dedicated efforts in designing complete states (Loading/Skeleton, Empty, and Error) for all interactive screens.

With high learning agility, architectural thinking, and a responsible mindset, I am confident that I can quickly blend into your team, master new domains, and deliver tangible value to Base.vn's SaaS and AI solutions.

I have attached my CV for your review. Thank you for your time and consideration.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
    }
};

if (typeof module !== 'undefined') {
    module.exports = cvData;
}
