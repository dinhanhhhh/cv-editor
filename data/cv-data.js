// ===================================
// CV DATA - Nội dung CV song ngữ
// Chỉnh sửa file này để cập nhật nội dung CV.
// Không cần đụng vào topcv.js hay topcv.css.
// ===================================

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Full-Stack Developer",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'TP. Hồ Chí Minh, Việt Nam' }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            projects: "KINH NGHIỆM LÀM VIỆC",
            skills: "KỸ NĂNG"
        },
        objective: "Lập trình viên Full-Stack JavaScript chuyên sâu về Next.js, React.js, Node.js và TypeScript với kinh nghiệm xây dựng các ứng dụng web có khả năng mở rộng, thân thiện với SEO và sẵn sàng cho môi trường production. Thành thạo kiến trúc RESTful APIs, triển khai hệ thống xác thực bảo mật cao (JWT/RBAC) và tối ưu hóa hiệu suất cơ sở dữ liệu (MySQL, SQL, MongoDB). Có kinh nghiệm làm việc remote, sẵn sàng làm việc full-time theo giờ cố định, có tinh thần trách nhiệm cao và cam kết cung cấp mã nguồn sạch, dễ bảo trì trong thời hạn nghiêm ngặt.",
        education: {
            school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
            date: "2020 - 2024",
            detail: "Cử nhân Khoa học Máy tính"
        },
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "10/2025 - 11/2025",
                role: "Lập trình viên Full-Stack",
                desc: "Nền tảng tuyển dụng toàn diện giúp tối ưu hóa quá trình tuyển dụng cho cả nhà tuyển dụng và ứng viên.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Kiến trúc và triển khai hơn 20 RESTful API endpoints cho quản lý công việc và ứng dụng người dùng bằng Node.js và Express.",
                    "Xây dựng hệ thống xác thực an toàn bằng JWT và HttpOnly cookies với RBAC và luồng refresh token.",
                    "Phát triển frontend hiệu năng cao, thân thiện SEO bằng Next.js 15, tận dụng SSR và SSG.",
                    "Tối ưu hóa truy vấn MongoDB, đạt thời gian phản hồi API dưới 300ms."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "08/2025 - 09/2025",
                role: "Lập trình viên Full-Stack",
                desc: "Hệ thống quản trị full-stack để quản lý hồ sơ sinh viên, đăng ký khóa học và kết quả học tập.",
                tasks: [
                    "Thiết kế backend theo cấu trúc mô-đun tuân thủ các nguyên tắc kiến trúc MVC.",
                    "Triển khai luồng xác thực nâng cao với access and refresh tokens.",
                    "Tích hợp Swagger để tự động hóa tài liệu API tương tác.",
                    "Xây dựng dashboard quản trị theo hướng dữ liệu, responsive với các thao tác CRUD thời gian thực."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind CSS, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "04/2025 - 05/2025",
                role: "Lập trình viên Full-Stack",
                desc: "Giải pháp mua sắm trực tuyến mạnh mẽ với danh mục sản phẩm, giỏ hàng và quy trình xử lý đơn hàng.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Phát triển các API cốt lõi cho quản lý sản phẩm, theo dõi kho hàng và thực hiện đơn hàng.",
                    "Triển khai vai trò User và Admin để truy cập an toàn vào các tính năng nhạy cảm.",
                    "Tạo giao diện người dùng hiện đại, responsive với Vite và React.",
                    "Đảm bảo toàn vẹn dữ liệu với quy trình kiểm tra form kỹ lưỡng và tối ưu hóa luồng thanh toán."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS"
            }
        ],
        skills: [
            { cat: "Frontend",        items: "TypeScript, Next.js, React.js, Tailwind CSS, Responsive Design, SEO" },
            { cat: "Backend",         items: "Node.js, Nest.js (Learning), Express.js, RESTful API, JWT, RBAC, Middleware" },
            { cat: "Cơ sở dữ liệu",  items: "MySQL, SQL, MongoDB (Mongoose), PostgreSQL, Tối ưu hóa truy vấn" },
            { cat: "Công cụ & DevOps", items: "Git/GitHub, CI/CD (Vercel, Render), Docker, Postman" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_FullStackDev_VI"
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "Full-Stack Developer",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Ho Chi Minh City, Vietnam' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "WORK EXPERIENCE",
            skills: "SKILLS"
        },
        objective: "Full-Stack JavaScript Developer specializing in Next.js, React.js, Node.js, and TypeScript with proven experience building scalable, SEO-friendly web applications ready for production. Skilled in architecting RESTful APIs, implementing secure JWT/RBAC authentication systems, and optimizing database performance (MySQL, SQL, MongoDB). Experienced in remote work environments with full availability during structured working hours, strong ownership mindset, and consistent track record of delivering clean, maintainable code on strict deadlines.",
        education: {
            school: "HO CHI MINH CITY OPEN UNIVERSITY",
            date: "2020 - 2024",
            detail: "Bachelor of Computer Science"
        },
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "10/2025 - 11/2025",
                role: "Full-Stack Developer",
                desc: "A recruitment platform streamlining the hiring process for employers and candidates.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Built 20+ RESTful API endpoints for job and application management using Node.js and Express.",
                    "Implemented secure JWT/RBAC authentication with HttpOnly cookies and token refresh flow.",
                    "Developed high-performance, SEO-friendly frontend using Next.js 15 with SSR and SSG strategies.",
                    "Optimized MongoDB queries and API response times to under 300ms."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "08/2025 - 09/2025",
                role: "Full-Stack Developer",
                desc: "An administrative system for managing student records and academic performance.",
                tasks: [
                    "Designed a modular backend following MVC architecture principles.",
                    "Implemented advanced authentication with access and refresh tokens.",
                    "Integrated Swagger for automated and interactive API documentation.",
                    "Developed a responsive admin dashboard with real-time CRUD operations."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Tailwind, Swagger"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "04/2025 - 05/2025",
                role: "Full-Stack Developer",
                desc: "An online shopping solution with product catalogs and order workflows.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Developed core APIs for product management and inventory tracking.",
                    "Implemented secure User and Admin roles for feature access.",
                    "Created a modern and responsive user interface with Vite and React.",
                    "Ensured data integrity with thorough form validation and flow optimizations."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS"
            }
        ],
        skills: [
            { cat: "Frontend",      items: "TypeScript, Next.js, React.js, Tailwind CSS, Responsive Design, SEO-Friendly Development" },
            { cat: "Backend",       items: "Node.js, Nest.js (Learning), Express.js, RESTful API, JWT, RBAC, Middleware" },
            { cat: "Databases",     items: "MySQL, SQL, MongoDB (Mongoose), PostgreSQL, Query Optimization" },
            { cat: "Tools & DevOps", items: "Git/GitHub, CI/CD (Vercel, Render), Docker , Postman"}
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_FullStackDev_EN"
    }
};
