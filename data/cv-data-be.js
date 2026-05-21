// ===================================
// CV DATA - Nội dung CV song ngữ (BACK-END DEVELOPER)
// Chỉnh sửa file này để cập nhật nội dung CV.
// ===================================

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Back-End Developer",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thủ Đức, TP. Hồ Chí Minh' }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            projects: "DỰ ÁN & KINH NGHIỆM",
            skills: "KỸ NĂNG CHUYÊN MÔN"
        },
        objective: "Lập trình viên Back-End chuyên về Node.js (Express, Nest.js) và TypeScript, với tư duy hệ thống vững chắc. Có kinh nghiệm thiết kế RESTful API có khả năng mở rộng, tối ưu cơ sở dữ liệu (MySQL, MongoDB, PostgreSQL) và xây dựng hệ thống xác thực bảo mật cao (JWT, RBAC, OAuth2). Thành thạo triển khai middleware, xử lý tác vụ nền và quản lý mã nguồn với Git. Luôn ưu tiên viết code sạch, dễ bảo trì, tối ưu hiệu suất server và hoàn thành dự án đúng thời hạn.",
        education: {
            school: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
            date: "2020 - 2024",
            detail: "Cử nhân Khoa học Máy tính"
        },
        projects: [
            {
                name: "JOB PORTAL BACKEND SYSTEM",
                date: "10/2025 - 11/2025",
                role: "Back-End Developer",
                desc: "Hệ thống lõi quản lý tuyển dụng toàn diện, xử lý luồng dữ liệu phức tạp giữa nhà tuyển dụng và ứng viên.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Thiết kế và triển khai hơn 30 RESTful API endpoints sử dụng Node.js và kiến trúc Controller-Service.",
                    "Xây dựng hệ thống xác thực tập trung sử dụng JWT, HttpOnly cookies kết hợp với phân quyền RBAC chặt chẽ.",
                    "Xử lý và tối ưu hóa truy vấn MongoDB (Aggregation Pipeline), đạt thời gian phản hồi API trung bình dưới 200ms.",
                    "Tích hợp các cơ chế xử lý lỗi (Global Error Handling) và Logging để giám sát hệ thống ổn định."
                ],
                tech: "Node.js, Express, MongoDB, JWT, TypeScript, REST API, Postman"
            },
            {
                name: "STUDENT MANAGEMENT SERVER",
                date: "08/2025 - 09/2025",
                role: "Back-End Developer",
                desc: "Xây dựng hạ tầng máy chủ cho quản lý hồ sơ sinh viên, đăng ký khóa học và quản trị điểm số.",
                github: "https://github.com/dinhanhhhh/student-management-BE",
                tasks: [
                    "Xây dựng backend theo mô hình MVC, tách biệt rõ giữa logic nghiệp vụ và lưu trữ dữ liệu.",
                    "Triển khai cơ chế refresh token để bảo mật phiên đăng nhập và đảm bảo trải nghiệm người dùng liền mạch.",
                    "Sử dụng Swagger để tự động hóa tài liệu API, hỗ trợ các thành viên Frontend tích hợp nhanh chóng.",
                    "Tối ưu hóa sơ đồ cơ sở dữ liệu (Schema Design) để đảm bảo toàn vẹn dữ liệu và mở rộng linh hoạt."
                ],
                tech: "Node.js, Express, MongoDB (Mongoose), Swagger, TypeScript, Middleware"
            },
            {
                name: "E-COMMERCE API SERVICE",
                date: "04/2025 - 05/2025",
                role: "Back-End Developer",
                desc: "Phát triển các dịch vụ API cốt lõi cho nền tảng thương mại điện tử, quản lý đơn hàng và tồn kho.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Xây dựng API quản lý sản phẩm đa phân loại và hệ thống giỏ hàng phía server.",
                    "Triển khai Middleware kiểm tra quyền hạn Admin cho các thao tác thay đổi dữ liệu nhạy cảm.",
                    "Thiết kế cơ chế xử lý thanh toán và trạng thái đơn hàng (Order Lifecycle) đảm bảo tính nhất quán.",
                    "Thực hiện kiểm thử API kỹ lưỡng với Postman để đảm bảo độ tin cậy của mã nguồn."
                ],
                tech: "Node.js, Express, MySQL/MongoDB, JWT, Cloudinary (Image storage)"
            }
        ],
        skills: [
            { cat: "Ngôn ngữ & Core", items: "TypeScript, JavaScript (ES6+), Node.js (Runtime)" },
            { cat: "Frameworks",     items: "Express.js, Nest.js (Learning), MVC Architecture" },
            { cat: "Database",        items: "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization, Transactions" },
            { cat: "Security & API",  items: "RESTful API Design, JWT, RBAC, OAuth2, Middleware, Swagger/OpenAPI" },
            { cat: "Tools & DevOps",  items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_BackendDev_VI"
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "Back-End Developer",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "WORK EXPERIENCE & PROJECTS",
            skills: "TECHNICAL SKILLS"
        },
        objective: "Back-End Developer specializing in Node.js (Express, Nest.js) and TypeScript, with a strong systems mindset. Experienced in designing scalable RESTful APIs, optimizing database systems (MySQL, MongoDB, PostgreSQL), and implementing secure authentication flows (JWT, RBAC, OAuth2). Proficient in middleware development, background task processing, and version control with Git. Committed to writing clean, maintainable code, optimizing server performance, and delivering high-quality solutions on time.",
        education: {
            school: "HO CHI MINH CITY OPEN UNIVERSITY",
            date: "2020 - 2024",
            detail: "Bachelor of Computer Science"
        },
        projects: [
            {
                name: "JOB PORTAL BACKEND SYSTEM",
                date: "10/2025 - 11/2025",
                role: "Back-End Developer",
                desc: "Core recruitment management system handling complex data flows between employers and candidates.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Designed and implemented 30+ RESTful API endpoints using Node.js and Controller-Service architecture.",
                    "Built a centralized authentication system using JWT/HttpOnly cookies combined with strict RBAC permissioning.",
                    "Processed and optimized MongoDB queries (Aggregation Pipeline), achieving sub-200ms average API response times.",
                    "Integrated global error handling and logging mechanisms to ensure system stability and observability."
                ],
                tech: "Node.js, Express, MongoDB, JWT, TypeScript, REST API, Postman"
            },
            {
                name: "STUDENT MANAGEMENT SERVER",
                date: "08/2025 - 09/2025",
                role: "Back-End Developer",
                desc: "Server-side infrastructure for student records, course registration, and academic score management.",
                github: "https://github.com/dinhanhhhh/student-management-BE",
                tasks: [
                    "Built the backend using the MVC pattern, with clear separation between business logic and data persistence.",
                    "Implemented a robust refresh token mechanism for secure sessions and a seamless user experience.",
                    "Leveraged Swagger for automated API documentation, facilitating rapid frontend integration.",
                    "Optimized database schema design to ensure data integrity and flexible system scalability."
                ],
                tech: "Node.js, Express, MongoDB (Mongoose), Swagger, TypeScript, Middleware"
            },
            {
                name: "E-COMMERCE API SERVICE",
                date: "04/2025 - 05/2025",
                role: "Back-End Developer",
                desc: "Developed core API services for e-commerce platforms, order fulfillment, and inventory management.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Developed server-side product management APIs and cart persistence systems.",
                    "Implemented admin authorization middleware for sensitive data operations and management features.",
                    "Designed payment processing flows and order lifecycle management to maintain data consistency.",
                    "Performed rigorous API testing with Postman to ensure code reliability and high success rates."
                ],
                tech: "Node.js, Express, MySQL/MongoDB, JWT, Cloudinary"
            }
        ],
        skills: [
            { cat: "Languages & Core", items: "TypeScript, JavaScript (ES6+), Node.js (Runtime)" },
            { cat: "Frameworks",       items: "Express.js, Nest.js (Learning), MVC Architecture" },
            { cat: "Databases",        items: "MongoDB (Mongoose), MySQL, PostgreSQL, Query Optimization, Transactions" },
            { cat: "Security & API",   items: "RESTful API Design, JWT, RBAC, OAuth2, Middleware, Swagger/OpenAPI" },
            { cat: "Tools & DevOps",   items: "Git/GitHub, Docker, Postman, CI/CD basic, Vercel/Render" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_BackendDev_EN"
    }
};
