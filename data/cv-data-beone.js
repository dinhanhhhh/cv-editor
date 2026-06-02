// ===================================
// CV DATA - BEONE FULL-STACK JAVASCRIPT INTERNSHIP
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

const cvData = {
    vi: {
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Full-Stack JavaScript Developer Intern",
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
        objective: "Thực tập sinh Full-Stack JavaScript có nền tảng vững về JavaScript/ES6+, Node.js, React/Redux và TypeScript. Nắm vững cấu trúc dữ liệu và lập trình chức năng (Functional Programming). Kinh nghiệm làm việc với Git và UI responsive. Mong muốn gia nhập BeOne học hỏi Odoo ERP và phát triển dự án thực tế dưới sự hướng dẫn của các mentor.",
        education: cvGlobalEdu.vi,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Nền tảng tuyển dụng toàn diện giúp tối ưu hóa quá trình tuyển dụng cho cả nhà tuyển dụng và ứng viên.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Phát triển 20+ RESTful APIs bằng Node.js/Express, tối ưu hóa truy vấn MongoDB.",
                    "Xây dựng tính năng tải CV (Multer) bảo mật và cơ chế xác thực JWT kết hợp phân quyền RBAC.",
                    "Tích hợp Next.js frontend với backend phục vụ đăng nhập, ứng tuyển và quản lý người dùng."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống quản trị hồ sơ và kết quả học tập của sinh viên với Dashboard trực quan hóa dữ liệu.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Áp dụng Lập trình chức năng (pure functions, map/filter/reduce) giúp logic xử lý mảng sạch, dễ bảo trì.",
                    "Xây dựng dashboard Next.js thời gian thực, tối ưu hóa client-side rendering và state.",
                    "Sử dụng Docker để container hóa ứng dụng, tạo môi trường chạy nhất quán giữa dev và production."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Swagger, Docker"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống mua sắm trực tuyến tích hợp đồng bộ giỏ hàng và tự động cập nhật tồn kho.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Phát triển frontend React, quản lý trạng thái giỏ hàng hiệu quả với Redux/Context.",
                    "Triển khai API Node.js/Express xử lý đơn hàng và kiểm tra tồn kho theo thời gian thực.",
                    "Sử dụng Git Workflow (Feature Branching) để quản lý mã nguồn và phối hợp nhóm tốt."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Git"
            }
        ],
        skills: [
            { cat: "Nền tảng JS & Tư duy", items: "JavaScript/ES6+, Cấu trúc dữ liệu (Data Structures), Lập trình chức năng (Functional Programming), TypeScript" },
            { cat: "Frontend Stack", items: "React/Redux, Next.js, HTML5/CSS3, Responsive UI, Tailwind CSS" },
            { cat: "Backend Stack", items: "Node.js (Express), RESTful API Design, JWT, RBAC, Middleware" },
            { cat: "Cơ sở dữ liệu", items: "MongoDB (Mongoose), MySQL, Tối ưu hóa truy vấn" },
            { cat: "Công cụ & Kiểm soát", items: "Git/GitHub (Feature Branching), Docker, Swagger, Postman, Vercel, Render" },
            { cat: "Ngoại ngữ & Kỹ năng", items: "Tiếng Anh (đọc hiểu tài liệu kỹ thuật & giao tiếp tốt), Đam mê học hỏi, Giải quyết vấn đề" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_BeOne_FullStack_Intern_VI",
        coverLetter: `[Tiêu đề Email: Ứng tuyển Thực tập sinh Full-Stack JavaScript – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng BEONE CO., LTD,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn được ứng tuyển vào vị trí Thực tập sinh Full-Stack JavaScript tại BEONE CO., LTD.

Với nền tảng kiến thức vững chắc về cấu trúc dữ liệu, thuật toán, JavaScript/TypeScript, React/Redux và Node.js, tôi luôn hướng tới việc viết mã nguồn sạch, tối ưu hóa hiệu năng hệ sinh thái JavaScript. Qua việc tìm hiểu về BEONE, tôi rất ấn tượng với môi trường chuyên nghiệp, các thử thách công nghệ thực tế và cơ hội được học hỏi trực tiếp dưới sự dẫn dắt (mentoring/coaching) của các Technical Leader và Senior Developer tại công ty. Bản thân tôi là người có tinh thần tự học cao và tư duy chủ động giải quyết vấn đề, rất mong muốn được rèn luyện thực tế qua các dự án lớn, ứng dụng các công nghệ hiện đại như Responsive UI, Progressive Web Application và tìm hiểu sâu hơn về hệ sinh thái Odoo ERP mà công ty đang phát triển.

Tôi rất mong có cơ hội được tham gia buổi phỏng vấn trực tiếp để trao đổi chi tiết hơn về sự phù hợp của bản thân với mục tiêu phát triển của BEONE.

Tôi xin chân thành cảm ơn!

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },

    en: {
        name: "TRUONG DINH ANH",
        title: "Full-Stack JavaScript Developer Intern",
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
        objective: "Full-Stack JavaScript Intern with a solid grasp of JavaScript/ES6+, React/Redux, Node.js, and TypeScript. Strong background in Data Structures and Functional Programming. Experienced in responsive UI design and Git. Eager to learn Odoo ERP and modern tech (PWA) under senior mentors at BeOne.",
        education: cvGlobalEdu.en,
        projects: [
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "A comprehensive booking & applicant tracking system connecting job seekers with recruiters.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Developed 20+ RESTful APIs using Node.js/Express, optimized MongoDB queries for fast responses.",
                    "Built secure applicant CV uploads (Multer) with format/size validations and JWT/RBAC authorization.",
                    "Integrated Next.js frontend with backend services for seamless user login and job application flows."
                ],
                tech: "Next.js 15, TypeScript, Node.js, Express, MongoDB, JWT, Multer, Tailwind CSS"
            },
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Full-stack student record and grading administration system featuring an intuitive admin dashboard.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Applied Functional Programming (pure functions, map/filter/reduce) for clean and maintainable logic.",
                    "Developed real-time Next.js admin dashboard, optimizing rendering cycles and state management.",
                    "Utilized Docker for application containerization, ensuring consistent dev and production environments."
                ],
                tech: "Node.js, Express, MongoDB, Next.js 15, TypeScript, Swagger, Docker"
            },
            {
                name: "E-COMMERCE PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "E-commerce system with shopping cart synchronization and automated inventory stock tracking.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Built React frontend, managing cart/checkout state efficiently via Redux/Context.",
                    "Developed Node.js/Express APIs for order processing and real-time inventory validation.",
                    "Applied Git Workflow (Feature Branching) to collaborate and manage version control."
                ],
                tech: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS, Git"
            }
        ],
        skills: [
            { cat: "JS Foundations", items: "JavaScript/ES6+, Data Structures, Functional Programming, TypeScript" },
            { cat: "Frontend Stack", items: "React/Redux, Next.js, HTML5/CSS3, Responsive UI, Tailwind CSS" },
            { cat: "Backend Stack", items: "Node.js (Express), RESTful API Design, JWT, RBAC, Middleware" },
            { cat: "Databases", items: "MongoDB (Mongoose), MySQL, Query Optimization" },
            { cat: "Tools & DevOps", items: "Git/GitHub (Feature Branching), Docker, Swagger, Postman, Vercel, Render" },
            { cat: "Languages & Skills", items: "English (reading technical docs & good communication), Passionate learner, Problem solving" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_BeOne_FullStack_Intern_EN",
        coverLetter: `[Subject: Job Application: Full-Stack JavaScript Intern – Truong Dinh Anh]

Dear BEONE CO., LTD Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Full-Stack JavaScript Internship position at BEONE CO., LTD.

With a solid background in data structures, algorithms, JavaScript/TypeScript, React/Redux, and Node.js, I always strive to write clean, performance-optimized code. I am highly motivated by the opportunity to learn from and work under the mentoring and coaching of BEONE's technical leaders and senior developers. I am eager to practice coding in a real-world enterprise environment, involve myself in building Responsive UI, Progressive Web Applications, and expand my knowledge in systems like Odoo ERP.

I look forward to discussing my qualifications further in an interview.

Thank you for your time and consideration.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`
    }
};

if (typeof module !== 'undefined') {
    module.exports = cvData;
}
