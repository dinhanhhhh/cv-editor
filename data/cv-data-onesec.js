// ===================================
// CV DATA - ONESEC REACT NATIVE DEVELOPER INTERN
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

var cvData = {
    vi: {
        projectDisplayLimit: 2,
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Intern Developer (React Native)",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thủ Đức, TP. Hồ Chí Minh' }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            projects: "DỰ ÁN & KINH NGHIỆM KỸ THUẬT",
            skills: "KỸ NĂNG"
        },
        objective: "Intern Developer định hướng React Native với nền tảng JavaScript và TypeScript vững vàng. Nắm rõ các nguyên lý cốt lõi của React (State, Props, Component Lifecycle) và quản lý trạng thái (Redux, Context API). Có tư duy phát triển giao diện responsive, đang học hỏi cấu trúc React Native, Expo CLI và cách chuyển dịch tư duy từ web sang mobile. Sẵn sàng thích nghi nhanh với môi trường startup để phát triển ứng dụng Small Jobs tại ONESEC.",
        education: cvGlobalEdu.vi,
        projects: [
            {
                name: "HỆ THỐNG QUẢN LÝ SINH VIÊN (STUDENT MANAGEMENT SYSTEM)",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Hệ thống quản trị hồ sơ và kết quả học tập của sinh viên với Dashboard trực quan hóa dữ liệu cho quản trị viên.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Xây dựng dashboard quản trị responsive bằng Next.js và Tailwind CSS với các thao tác CRUD và giao tiếp dữ liệu thời gian thực.",
                    "Áp dụng Lập trình chức năng (pure functions, map/filter/reduce) giúp logic xử lý dữ liệu sạch, tối ưu client-side rendering.",
                    "Xây dựng backend module với Node.js/Express, tích hợp Swagger để tài liệu hóa API hỗ trợ việc kết nối dữ liệu mượt mà.",
                    "Ứng dụng access token và refresh token cho luồng xác thực, giúp hệ thống vận hành ổn định và dễ bảo trì."
                ],
                tech: "Next.js 15, React, TypeScript, Node.js, Express, MongoDB, Swagger, Git"
            },
            {
                name: "NỀN TẢNG TUYỂN DỤNG & KẾT NỐI (JOB PORTAL)",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Ứng dụng web hỗ trợ đăng tin tuyển dụng, ứng tuyển trực tuyến và quản lý hồ sơ người dùng.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Phát triển giao diện React responsive, tối ưu hóa các component có thể tái sử dụng cao.",
                    "Xử lý đồng bộ state phức tạp và luồng dữ liệu (State/Props/Lifecycle) qua Redux Toolkit.",
                    "Tích hợp RESTful API, xử lý và kiểm soát các trạng thái dữ liệu (Loading/Skeleton, Empty, Error) để tối ưu UX.",
                    "Sử dụng Git/GitHub để quản lý mã nguồn, phối hợp giải quyết xung đột (conflict) hiệu quả."
                ],
                tech: "Next.js 15, React, TypeScript, Redux Toolkit, Tailwind CSS, RESTful API, Git"
            }
        ],
        skills: [
            { cat: "Lập trình di động", items: "React Native (đang tìm hiểu nền tảng), Expo CLI, StyleSheet, State & Props" },
            { cat: "Ngôn ngữ & Quản lý State", items: "JavaScript (ES6+), TypeScript, Redux / Redux Toolkit, Context API, React Hooks" },
            { cat: "Web & RESTful API", items: "ReactJS, Next.js, RESTful API Integration, JSON data processing, Postman" },
            { cat: "Cơ sở dữ liệu & Backend", items: "PostgreSQL, MongoDB, MySQL, Node.js (Express) cơ bản, .NET/C# (đã học và thực hành dự án)" },
            { cat: "Công cụ & Kiểm soát", items: "Git/GitHub, VS Code, Figma (đọc/xuất tài nguyên thiết kế)" },
            { cat: "Kỹ năng & Lợi thế", items: "Tư duy logic tốt, tự học công nghệ mới nhanh, có khả năng phát triển Backend .NET/C# cơ bản" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_React_Native_Intern_ONESEC",
        coverLetter: `[Tiêu đề Email: Ứng tuyển Thực tập sinh React Native Developer – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng Công ty Cổ phần ONESEC,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn được ứng tuyển vào vị trí Thực tập sinh React Native Developer để cùng phát triển ứng dụng Small Jobs tại ONESEC.

Với nền tảng vững chắc về JavaScript/TypeScript cùng tư duy lập trình React (State, Props, Component Lifecycle) tích lũy qua các dự án web như Job Portal và Student Management System, tôi tự tin có thể nhanh chóng làm quen và làm chủ framework React Native. Bản thân tôi đã chủ động tìm hiểu cấu trúc StyleSheet, Expo CLI cũng như các phương pháp quản lý dữ liệu di động cục bộ. Bên cạnh đó, việc có nền tảng cơ bản về cơ sở dữ liệu và đã từng học tập, sử dụng qua .NET/C# trong các đồ án (một lợi thế lớn mà quý công ty đang tìm kiếm) giúp tôi tự tin có thể nhanh chóng làm việc với các hệ thống backend của ONESEC.

Dự án Small Jobs của ONESEC giải quyết một bài toán xã hội rất thực tế và ý nghĩa về việc làm tự do. Làm việc tại một môi trường startup năng động sẽ là cơ hội tuyệt vời để tôi rèn luyện tính chủ động, đóng góp mã nguồn chất lượng cho sản phẩm và học hỏi từ các Senior Developer. Tôi cam kết đáp ứng được thời gian làm việc tối thiểu 38 giờ/tuần và nỗ lực hết mình để trở thành nhân sự chính thức của công ty.

Tôi rất mong có cơ hội được tham gia phỏng vấn để trực tiếp trao đổi và trình bày chi tiết hơn về năng lực của mình.

Tôi xin chân thành cảm ơn!

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`
    },

    en: {
        projectDisplayLimit: 2,
        name: "TRUONG DINH ANH",
        title: "Intern Developer (React Native)",
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
            skills: "TECHNICAL SKILLS"
        },
        objective: "Intern Developer with a React Native focus, backed by a solid foundation in JavaScript and TypeScript. Well-versed in React principles (State, Props, Component Lifecycle) and state management (Redux, Context API). Highly interested in responsive layout designs, currently learning React Native structure, Expo CLI, and the transition from web rendering to mobile components. Ready to adapt to startup environments and eager to contribute to the Small Jobs application at ONESEC.",
        education: cvGlobalEdu.en,
        projects: [
            {
                name: "STUDENT MANAGEMENT SYSTEM",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "A full-stack administrative system for student records, course registration, academic performance tracking, and admin data dashboards.",
                github: "BE: https://github.com/dinhanhhhh/student-management-BE | FE: https://github.com/dinhanhhhh/student-management-fe",
                tasks: [
                    "Developed a responsive admin dashboard with Next.js and Tailwind CSS, including CRUD workflows and real-time data handling.",
                    "Applied Functional Programming (pure functions, map/filter/reduce) for clean and maintainable data processing logic, optimizing client-side rendering.",
                    "Built a modular backend with Node.js/Express and integrated Swagger for API documentation to facilitate smooth data integration.",
                    "Implemented access token and refresh token authentication flows to improve system stability and maintainability."
                ],
                tech: "Next.js 15, React, TypeScript, Node.js, Express, MongoDB, Swagger, Git"
            },
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "A web application supporting job postings, online applications, and applicant profile management.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Developed responsive React web interfaces, optimizing for highly reusable components.",
                    "Managed complex state synchronization and data flow (State/Props/Lifecycle) via Redux Toolkit.",
                    "Integrated RESTful APIs and handled data states (Loading/Skeleton, Empty, Error) to optimize user experience.",
                    "Utilized Git/GitHub for version control and successfully collaborated to resolve merge conflicts."
                ],
                tech: "Next.js 15, React, TypeScript, Redux Toolkit, Tailwind CSS, RESTful API, Git"
            }
        ],
        skills: [
            { cat: "Mobile Development", items: "React Native (learning foundation), Expo CLI, StyleSheet, State & Props" },
            { cat: "Languages & State Management", items: "JavaScript (ES6+), TypeScript, Redux / Redux Toolkit, Context API, React Hooks" },
            { cat: "Web & RESTful API", items: "ReactJS, Next.js, RESTful API Integration, JSON data processing, Postman" },
            { cat: "Database & Backend", items: "PostgreSQL, MongoDB, MySQL, basic Node.js (Express), .NET/C# (academic & project experience)" },
            { cat: "Tools & Design", items: "Git/GitHub, VS Code, Figma (asset extraction & inspection)" },
            { cat: "Key Strengths", items: "Logical thinking, rapid self-learning of new tech stacks, capable of basic .NET/C# development" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_React_Native_Intern_ONESEC",
        coverLetter: `[Subject: Job Application: React Native Developer Intern – Truong Dinh Anh]

Dear ONESEC Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the React Native Developer Internship position at ONESEC to contribute to the development of your Small Jobs platform.

With a solid background in JavaScript/TypeScript and React principles (State, Props, Component Lifecycle) gained from my web projects such as the Job Portal and Student Management System, I am confident in my ability to quickly adapt and master the React Native framework. I have proactively studied the structure of StyleSheet, Expo CLI, and local mobile data storage concepts. Additionally, my basic database skills and hands-on experience with .NET/C# in academic projects (which you mentioned as an advantage) give me the confidence to quickly adapt to ONESEC's infrastructure.

ONESEC's Small Jobs project addresses a very practical and meaningful social need for freelance work. Working in a dynamic startup environment is a great opportunity for me to develop my proactiveness, write clean and efficient code, and learn from senior developers. I am fully available to work at least 38 hours per week and am highly committed to striving for a full-time role post-internship.

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
