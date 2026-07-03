// ===================================
// VIETRY - CODER (WEB DEVELOPER) CV DATA
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

var cvData = {
    vi: {
        projectDisplayLimit: 2,
        name: "TRƯƠNG ĐÌNH ANH",
        title: "Front-End Web Developer",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thủ Đức, TP. Hồ Chí Minh' }
        ],
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            experience: "KINH NGHIỆM THỰC TẾ",
            projects: "DỰ ÁN TIÊU BIỂU",
            skills: "KỸ NĂNG"
        },
        objective: "Cử nhân Khoa học Máy tính chuyên chuyển đổi thiết kế (Figma, Stitch) sang giao diện HTML/CSS/JS (JQuery) responsive chuẩn W3C và tích hợp theme WordPress. Thành thạo ứng dụng AI (Cursor, Claude, Copilot) giúp tối ưu hóa hiệu suất và chất lượng code. Mong muốn gia nhập Vietry ở vị trí Front-End Web Developer để xây dựng giao diện tối ưu và bảo trì hệ thống hiệu quả.",
        education: cvGlobalEdu.vi,
        experience: [
            {
                name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "Dự án nền tảng phân tích tài chính chứng khoán và hỗ trợ tối ưu hóa giao diện.",
                tasks: [
                    "Chuyển đổi các bản vẽ thiết kế giao diện từ Figma sang mã HTML/CSS/JavaScript động, tối ưu responsive trên mọi thiết bị và đảm bảo chuẩn W3C.",
                    "Xây dựng các chức năng tương tác phía Client sử dụng JavaScript thuần và jQuery để cải thiện trải nghiệm người dùng.",
                    "Phối hợp kết nối API Backend, kiểm thử khả năng tương thích của giao diện trên các trình duyệt phổ biến (Chrome, Safari, Firefox).",
                    "Tìm hiểu cấu trúc theme WordPress và thực hành chuyển đổi một số trang giao diện tĩnh sang template WordPress năng động."
                ],
                tech: "HTML5, CSS3, JavaScript, JQuery, Bootstrap, Figma, WordPress basic, Postman"
            }
        ],
        projects: [
            {
                name: "E-COMMERCE & SHOPPING PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "Ứng dụng mua sắm trực tuyến tích hợp quy trình đặt hàng và quản lý sản phẩm phía server.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Thiết kế và xây dựng giao diện responsive cho giỏ hàng, trang giới thiệu sản phẩm và trang chủ.",
                    "Tích hợp các tương tác động client-side, quản lý trạng thái giỏ hàng và thực hiện validation form.",
                    "Ứng dụng quy trình AI (Lovable AI, Claude) để tối ưu hóa mã nguồn HTML/CSS và cải thiện hiệu năng tải trang."
                ],
                tech: "React, HTML5, CSS3, Tailwind CSS, Lovable AI, Git, Vercel"
            },
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "Hệ thống tìm kiếm và quản lý việc làm responsive với quy trình phát triển kết hợp AI tối ưu.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Xây dựng giao diện responsive chất lượng cao từ thiết kế wireframe, tối ưu hóa các hiệu ứng hover, transition mượt mà.",
                    "Tích hợp và tối ưu hóa các thư viện JavaScript xử lý tương tác form ứng tuyển, validate dữ liệu đầu vào phía Client.",
                    "Sử dụng các mô hình AI để sinh mã nhanh, refactor cấu trúc thư mục sạch sẽ và dễ bảo trì."
                ],
                tech: "HTML5, Tailwind CSS, TypeScript, React/Next.js, MongoDB, RESTful API"
            }
        ],
        skills: [
            { cat: "Cắt & Dựng Giao Diện", items: "HTML5, CSS3, JavaScript (ES6+), JQuery, Bootstrap, Tailwind CSS, chuẩn W3C, Responsive Web Design" },
            { cat: "WordPress Development", items: "Tạo & Tùy chỉnh WordPress Theme từ HTML tĩnh, Custom Post Types, Advanced Custom Fields (ACF), PHP cơ bản" },
            { cat: "Ứng Dụng Công Cụ AI", items: "Thành thạo Cursor, ChatGPT, Claude, GitHub Copilot để tự động hóa viết code, tối ưu hóa và phát hiện lỗi giao diện" },
            { cat: "Sử dụng Công Cụ Thiết Kế", items: "Làm việc tốt với Photoshop, Illustrator, Figma (xuất asset, đo khoảng cách, phân tích màu sắc và font)" },
            { cat: "Kỹ năng khác", items: "Quản lý mã nguồn với Git/GitHub, bảo trì website, tối ưu SEO On-page, tinh thần tự học tốt, giải quyết vấn đề nhanh" }
        ],
        btnText: "In / Tải PDF",
        docTitle: "CV_TruongDinhAnh_Vietry_Coder",
        coverLetters: {
            tech: `[Tiêu đề Email: Ứng tuyển vị trí Coder (Web Developer) – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Công ty TNHH Vietry,

Tôi tên là Trương Đình Anh, vừa tốt nghiệp chuyên chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để bày tỏ mong muốn được ứng tuyển vào vị trí **Coder (Web Developer)** tại Quý công ty.

Qua bản mô tả công việc, tôi nhận thấy yêu cầu của vị trí này rất tương đồng với thế mạnh và kinh nghiệm thực tế tôi đã tích lũy:

- **Khả năng chuyển đổi giao diện chuẩn W3C**: Tôi sử dụng thành thạo HTML5, CSS3, JavaScript và JQuery. Tôi có kinh nghiệm phân tích file thiết kế (Figma, Photoshop, Illustrator) để chuyển đổi thành các trang web tĩnh responsive sạch đẹp, đảm bảo hiển thị hoàn hảo trên các thiết bị và thân thiện với SEO.
- **Kinh nghiệm WordPress & Phát triển Theme**: Tôi nắm vững cấu trúc thư mục WordPress và quy trình cắt dựng theme tùy biến từ mã nguồn HTML tĩnh (tách header/footer/sidebar, viết code loop bài viết, đăng ký Custom Post Types/ACF) để tối ưu trang quản trị nội dung.
- **Ứng dụng công nghệ AI để nâng cao hiệu suất**: Đây là điểm tôi vô cùng ấn tượng trong JD của Vietry. Tôi thường xuyên kết hợp các công cụ AI như Cursor, Claude, ChatGPT vào quy trình code hàng ngày để sinh mã nhanh, chuẩn hóa cấu trúc, phát hiện lỗi cú pháp và tối ưu hóa hiệu suất giao diện.

Với tinh thần tự giác, ham học hỏi và trách nhiệm cao, tôi tin mình sẽ nhanh chóng làm chủ công việc tại Vietry, đóng góp vào việc phát triển các theme WordPress chất lượng và bảo trì các hệ thống website của khách hàng luôn hoạt động mượt mà.

Tôi xin gửi kèm hồ sơ năng lực và rất mong có cơ hội được tham gia phỏng vấn trực tiếp cùng Quý công ty.

Trân trọng,
Trương Đình Anh`,
            short: `[Tiêu đề Email: Coder - Trương Đình Anh]

Kính gửi Ban Tuyển dụng Vietry,

Tôi tên là Trương Đình Anh, tốt nghiệp Khoa học Máy tính từ Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vị trí **Coder** tại Vietry.

Tôi tự tin đáp ứng tốt các yêu cầu cốt lõi của công việc:
- **Cắt HTML/CSS/JQuery**: Chuyển đổi bản vẽ thiết kế (Photoshop/Figma) thành giao diện responsive chuẩn W3C sạch đẹp.
- **WordPress Theme**: Có kinh nghiệm cắt nhỏ và chuyển từ HTML tĩnh sang theme WordPress động, dễ dàng quản lý dữ liệu.
- **Tận dụng AI**: Thành thạo sử dụng Cursor, Claude, Copilot để đẩy nhanh tiến độ viết code và nâng cao chất lượng sản phẩm.

Rất mong được đồng hành cùng đội ngũ Vietry. Cảm ơn anh/chị đã xem xét hồ sơ!

Trân trọng,
Trương Đình Anh`,
            warm: `[Tiêu đề Email: Đồng hành cùng Vietry – Trương Đình Anh]

Kính gửi Ban Tuyển dụng Vietry,

Chào anh/chị, tôi là Trương Đình Anh. Khi đọc tin tuyển dụng vị trí Coder của Vietry, tôi nhận thấy đây chính là môi trường lý tưởng mà tôi đang tìm kiếm - nơi không chỉ đòi hỏi kiến thức chuyên môn vững vàng mà còn rất khuyến khích nhân sự ứng dụng các công cụ AI (ChatGPT, Claude, Copilot) để nâng cao chất lượng công việc.

Là một lập trình viên trẻ, tôi luôn tin rằng việc kết hợp tư duy lập trình vững chắc (hiểu sâu HTML/CSS/JS, cấu trúc theme WordPress) cùng khả năng sử dụng AI thông minh sẽ giúp hoàn thành công việc nhanh hơn gấp nhiều lần. Với kinh nghiệm chuyển đổi thiết kế thành code W3C chuẩn chỉ và tinh thần Ownership sẵn sàng tự giải quyết vấn đề, tôi tin mình sẽ hòa nhập nhanh và đóng góp hiệu quả vào các dự án của Vietry.

Chúc anh/chị một ngày làm việc tuyệt vời và hy vọng sớm có cơ hội gặp gỡ!

Trân trọng,
Trương Đình Anh`
        }
    },

    en: {
        projectDisplayLimit: 2,
        name: "TRUONG DINH ANH",
        title: "Front-End Web Developer",
        contact: [
            { icon: 'phone', text: '0349421079' },
            { icon: 'email', text: 'tdinhanh.it@gmail.com', link: 'mailto:tdinhanh.it@gmail.com' },
            { icon: 'github', text: 'github.com/dinhanhhhh', link: 'https://github.com/dinhanhhhh' },
            { icon: 'address', text: 'Thu Duc, Ho Chi Minh City' }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            experience: "WORK EXPERIENCE",
            projects: "FEATURED PROJECTS",
            skills: "KEY SKILLS"
        },
        objective: "Computer Science graduate specializing in converting designs (Figma, Photoshop) into W3C-compliant responsive HTML/CSS/JS (JQuery) layouts and custom WordPress themes. Highly proficient in leveraging AI tools (Cursor, Claude, Copilot) to optimize development speed and code quality. Eager to join Vietry as a Front-End Web Developer to deliver pixel-perfect user interfaces and maintain web systems effectively.",
        education: cvGlobalEdu.en,
        experience: [
            {
                name: "TAMI TECHNOLOGY CO., LTD",
                date: "06/2025 - 09/2025",
                role: "Developer",
                desc: "FinTech stock market data analysis platform and UI styling.",
                tasks: [
                    "Translated design assets from Figma into interactive HTML/CSS/JavaScript templates, ensuring full responsive layout compatibility.",
                    "Built rich interactive client-side components using vanilla JavaScript and JQuery to enhance the overall user experience.",
                    "Partnered with back-end engineers to integrate APIs and performed cross-browser compatibility tests (Chrome, Safari, Firefox).",
                    "Explored WordPress architecture and converted static HTML pages into modular dynamic templates."
                ],
                tech: "HTML5, CSS3, JavaScript, JQuery, Bootstrap, Figma, WordPress, Postman"
            }
        ],
        projects: [
            {
                name: "E-COMMERCE & SHOPPING PLATFORM",
                date: "08/2025 - 09/2025",
                role: "Developer",
                desc: "An online shopping web application featuring ordering flow and server-side product indexing.",
                github: "https://github.com/dinhanhhhh/ecommerce",
                tasks: [
                    "Designed and built responsive client-side layouts for shopping cart, product details, and homepage.",
                    "Handled client-side state management for shopping cart updates and validated user input forms.",
                    "Integrated AI tools (Lovable AI, Claude) to optimize HTML/CSS markup and accelerate UI rendering speed."
                ],
                tech: "React, HTML5, CSS3, Tailwind CSS, Lovable AI, Git, Vercel"
            },
            {
                name: "JOB PORTAL PLATFORM",
                date: "11/2025 - 02/2026",
                role: "Developer",
                desc: "A smart responsive job matching website developed with optimized AI workflows.",
                github: "https://github.com/dinhanhhhh/JOB-PORTAL",
                tasks: [
                    "Built and styled pixel-perfect responsive layouts from wireframes, incorporating smooth hover animations and transitions.",
                    "Integrated and optimized JavaScript libraries to handle dynamic form states and validation.",
                    "Employed AI coding assistants to write clean, refactored, and highly maintainable components."
                ],
                tech: "HTML5, Tailwind CSS, TypeScript, React/Next.js, MongoDB, RESTful API"
            }
        ],
        skills: [
            { cat: "Markup & Styling", items: "HTML5, CSS3, JavaScript (ES6+), JQuery, Bootstrap, Tailwind CSS, W3C standards, Responsive Web Design" },
            { cat: "WordPress CMS", items: "WordPress Theme Development & Customization, Custom Post Types, Advanced Custom Fields (ACF), Basic PHP" },
            { cat: "AI & Productivity Tools", items: "Proficient in Cursor, ChatGPT, Claude, GitHub Copilot for automated coding, optimization, and bug detection" },
            { cat: "Design Asset Handling", items: "Familiar with Photoshop, Illustrator, Figma (asset export, measurements, color & font matching)" },
            { cat: "Other Tools & Skills", items: "Git/GitHub version control, website maintenance, SEO basics, active learning, rapid troubleshooting" }
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_TruongDinhAnh_Vietry_Coder",
        coverLetters: {
            tech: `[Subject: Job Application: Coder (Web Developer) – Truong Dinh Anh]

Dear Hiring Team at Vietry Co., Ltd,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in the **Coder** position at your company.

I believe my skills and experience closely match your hiring requirements:

- **Design-to-Code & W3C Standards**: Highly proficient in HTML5, CSS3, JavaScript, and JQuery. I have experience converting layouts from Figma and Photoshop files into responsive, pixel-perfect, W3C-compliant web structures that display well across all modern screen resolutions.
- **WordPress Theme Customization**: Skilled in converting static HTML templates into functional WordPress themes, dividing template files, using PHP loops, and configuring custom fields to optimize content editing.
- **AI-Driven Development**: I actively incorporate AI tools (Cursor, Claude, ChatGPT, GitHub Copilot) into my everyday development workflow. This allows me to accelerate layout creation, automate code syntax validation, and debug issues rapidly.

I am enthusiastic about the opportunity to bring my detail-oriented coding skills and automated workflow methods to Vietry to build high-performance websites and maintain client systems.

I have attached my CV and look forward to discussing my qualifications in a personal interview.

Sincerely,
Truong Dinh Anh`,
            short: `[Subject: Coder - Truong Dinh Anh]

Dear Hiring Team at Vietry,

I am writing to apply for the **Coder** position at **Vietry Co., Ltd**.

My key qualifications include:
- **HTML/CSS/JQuery Markup**: Proficient in coding responsive layouts from design files (Photoshop, Figma) in accordance with W3C standards.
- **WordPress Theme Customization**: Experienced in converting static HTML templates into dynamic WordPress themes.
- **AI Tool Integration**: Highly competent in utilizing ChatGPT, Claude, and Cursor to accelerate development speed and maintain high code quality.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
Truong Dinh Anh`,
            warm: `[Subject: Joining the Vietry Coder Team – Truong Dinh Anh]

Dear Hiring Team at Vietry,

Hello, my name is Truong Dinh Anh. I am a Computer Science graduate with a strong passion for front-end web development. I was thrilled to see that Vietry encourages developers to use AI tools like ChatGPT, Claude, and Copilot to optimize coding workflows, as this perfectly aligns with my philosophy of modern software development.

Having built responsive layouts by combining traditional HTML/CSS/JS/WordPress skills with prompt engineering on Cursor/Claude, I have experienced firsthand how AI tools can double development velocity without compromising quality. I am excited to bring this proactive, tech-forward mindset to Vietry and help build beautiful web interfaces.

Thank you for your time, and I look forward to our conversation!

Best regards,
Truong Dinh Anh`
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cvData;
} else {
    window.cvData = cvData;
}
