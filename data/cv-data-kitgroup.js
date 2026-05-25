// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}


const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Full-Stack Developer Intern (Node.js / Next.js)",
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
            skills: "KỸ NĂNG"
        },
        objective: "Thực tập sinh Full-Stack Developer có nền tảng vững vàng về Node.js, Next.js, TypeScript và cơ sở dữ liệu quan hệ MySQL. Có kiến thức cơ bản về dịch vụ đám mây AWS (S3, RDS) và quy trình làm việc Agile/Scrum qua các dự án học thuật và cá nhân. Tinh thần chủ động, sẵn sàng học hỏi công nghệ mới và phối hợp cùng đội ngũ để hoàn thành công việc chất lượng cao. Mong muốn gia nhập KIT Group để đóng góp vào sự phát triển của sản phẩm và tích lũy kinh nghiệm thực tế.",
        education: cvGlobalEdu.vi,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Nền tảng quản lý đặt lịch và ứng tuyển toàn diện, kết nối nhà tuyển dụng với ứng viên phù hợp.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Thiết kế và phát triển 20+ RESTful API endpoints sử dụng Node.js, Express và MySQL (ORM Sequelize).",
                    "Xây dựng luồng tải lên và xử lý tệp tin CV của ứng viên sử dụng Multer, tích hợp kiểm tra định dạng và giới hạn dung lượng tệp bảo mật.",
                    "Xây dựng cơ chế xác thực bảo mật JWT, phân quyền chi tiết (RBAC) cho Nhà tuyển dụng và Ứng viên.",
                    "Tối ưu hóa các truy vấn MySQL phức tạp (Join, Indexing) giúp thời gian phản hồi API trung bình dưới 250ms."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MySQL, JWT, Multer, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống quản trị hồ sơ và kết quả học tập của sinh viên với Dashboard trực quan hóa dữ liệu.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Xây dựng Dashboard quản trị Next.js thời gian thực, tối ưu hóa client-side rendering và xử lý loading/error state mượt mà.",
                    "Sử dụng Docker để đóng gói ứng dụng (Containerization), thiết lập môi trường phát triển nhất quán và dễ dàng mở rộng.",
                    "Viết tài liệu API chuyên nghiệp bằng Swagger, giúp tăng hiệu suất làm việc nhóm lên 30%."
                ],
                tech: "Node.js, Express, MySQL, Next.js 15, TypeScript, Swagger, Docker"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống mua sắm trực tuyến tích hợp đồng bộ giỏ hàng và tự động cập nhật tồn kho.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Triển khai API xử lý đơn hàng và tích hợp kiểm tra số lượng tồn kho theo thời gian thực.",
                    "Áp dụng cơ chế phân quyền User/Admin chặt chẽ để kiểm soát các tác vụ nhạy cảm trong hệ thống.",
                    "Sử dụng Trello để quản lý tiến độ công việc, theo dõi lỗi (Bug tracking) và áp dụng quy trình Git Workflow (Feature Branching) khoa học."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Git, Trello"
            }
        ],
        skills: [
            { cat: "Frontend Stack", items: "Next.js (App Router), React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design" },
            { cat: "Backend Stack", items: "Node.js (Express), RESTful API Design, JWT, RBAC, Middleware, MVC, NestJS (Đang tìm hiểu)" },
            { cat: "Cơ sở dữ liệu", items: "MySQL (Sequelize/Prisma), MongoDB (Mongoose), Thiết kế ERD, Tối ưu hóa truy vấn" },
            { cat: "Điện toán đám mây", items: "Tìm hiểu cơ bản về AWS (EC2, S3), triển khai ứng dụng thực tế trên Vercel & Render" },
            { cat: "Công cụ & DevOps", items: "Git/GitHub, Docker, Swagger (Tài liệu API), Postman, Vercel, Render" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_KITGroup_FullStack_Intern_VI"
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "Full-Stack Developer Intern (Node.js / Next.js)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "TECHNICAL PROJECTS",
            skills: "SKILLS"
        },
        objective: "A Full-Stack Developer Intern with a solid foundation in Node.js, Next.js, TypeScript, and MySQL relational database. Proficient in AWS cloud services (S3, RDS) and Agile/Scrum workflows through academic and personal projects. Proactive, fast learner, and team-oriented. Eager to join KIT Group to support real-world product development, write clean code, and learn from experienced mentors.",
        education: cvGlobalEdu.en,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "A comprehensive booking & applicant tracking system connecting job seekers with recruiters.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Designed and developed 20+ RESTful API endpoints using Node.js, Express, and MySQL (Sequelize ORM).",
                    "Developed secure applicant CV upload and file processing flows using Multer, implementing file type validation and size limit controls.",
                    "Implemented secure JWT authentication and granular Role-Based Access Control (RBAC) for candidates/recruiters.",
                    "Optimized complex MySQL queries (Joins, Indexing) to maintain stable API response times under 250ms."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MySQL, JWT, Multer, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Full-stack student record and grading administration system featuring an intuitive admin dashboard.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Developed a real-time Next.js administration dashboard, optimizing rendering cycles and handling asynchronous API states.",
                    "Utilized Docker for application containerization, establishing consistent and easily scalable runtime environments.",
                    "Authored clean API documentation using Swagger, improving team communication and integration efficiency by 30%."
                ],
                tech: "Node.js, Express, MySQL, Next.js 15, TypeScript, Swagger, Docker"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "E-commerce system with shopping cart synchronization and automated inventory stock tracking.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Constructed backend APIs for order processing and real-time product stock level validation.",
                    "Enforced strict User/Admin authorization checks for administrative control and data operations.",
                    "Managed project milestones and tracked bugs using Trello, applying structured Git Workflow (Feature Branching) to develop features."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Git, Trello"
            }
        ],
        skills: [
            { cat: "Frontend Stack", items: "Next.js (App Router), React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Responsive Design" },
            { cat: "Backend Stack", items: "Node.js (Express), RESTful API Design, JWT, RBAC, Middleware, MVC, NestJS (Familiarity)" },
            { cat: "Databases", items: "MySQL (Sequelize/Prisma), MongoDB (Mongoose), ERD Design, Query Optimization" },
            { cat: "Cloud Services", items: "Basic knowledge of AWS (EC2, S3), practical deployment on Vercel & Render" },
            { cat: "Tools & DevOps", items: "Git/GitHub, Docker, Swagger (API Docs), Postman, Vercel, Render" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_KITGroup_FullStack_Intern_EN"
    }
};
