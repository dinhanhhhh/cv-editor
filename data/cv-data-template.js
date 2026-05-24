// =========================================================================
// CV DATA TEMPLATE - Mẫu Boilerplate Dữ liệu để tạo phiên bản CV mới
// Hướng dẫn sử dụng:
// 1. Sao chép (copy) file này, đặt tên mới dạng: cv-data-[tên-phiên-bản].js
// 2. Điền thông tin của bạn vào các trường tương ứng bên dưới.
// 3. Khai báo (register) phiên bản mới này trong file `js/cv-router.js`.
// =========================================================================

const cvData = {
    vi: {
        // Tên ứng viên hiển thị trên đầu trang
        name: "[HỌ VÀ TÊN CỦA BẠN]",
        
        // Chức danh ứng tuyển (Ví dụ: Frontend Developer Intern)
        title: "[Chức danh ứng tuyển]",
        
        // Thông tin liên hệ (Hỗ trợ các icon: phone, email, github, address, linkedin)
        contact: [
            { icon: "phone", text: "[Số điện thoại]" },
            { icon: "email", text: "[Địa chỉ Email]", link: "mailto:[Địa chỉ Email]" },
            { icon: "github", text: "[Link GitHub cá nhân]", link: "[URL GitHub]" },
            { icon: "address", text: "[Địa chỉ nơi ở]" }
        ],
        
        // Tiêu đề hiển thị cho các phần lớn trong CV
        sections: {
            objective: "TÓM TẮT CHUYÊN MÔN",
            education: "HỌC VẤN",
            projects: "DỰ ÁN & KINH NGHIỆM KỸ THUẬT",
            skills: "KỸ NĂNG",
            strengths: "ĐIỂM MẠNH"
        },
        
        // Đoạn giới thiệu bản thân / Mục tiêu nghề nghiệp
        objective: "[Đoạn giới thiệu bản thân ngắn gọn từ 3-5 câu, nhấn mạnh điểm mạnh chính và mong muốn cống hiến cho công ty phù hợp với vị trí ứng tuyển.]",
        
        // Học vấn
        education: {
            school: "[TÊN TRƯỜNG ĐẠI HỌC / TRUNG TÂM ĐÀO TẠO]",
            date: "[Thời gian học, ví dụ: 2020 - 2024]",
            detail: "[Chuyên ngành / Tên bằng cấp / GPA nếu cao]"
        },
        
        // Danh sách dự án nổi bật (tối đa 2-3 dự án)
        projects: [
            {
                name: "[TÊN DỰ ÁN 1]",
                date: "[Thời gian thực hiện, ví dụ: 11/2025 - 02/2026]",
                role: "[Vai trò của bạn, ví dụ: Developer / Leader]",
                desc: "[Mô tả ngắn gọn về chức năng cốt lõi của dự án và giải pháp nó mang lại.]",
                github: "[Link repo github của dự án]",
                tasks: [
                    "[Nhiệm vụ 1: Bạn đã thiết kế/xây dựng tính năng gì? Giải quyết thế nào?]",
                    "[Nhiệm vụ 2: Cách bạn xử lý UI/UX hoặc tích hợp API?]",
                    "[Nhiệm vụ 3: Cách tối ưu hiệu năng hoặc quản lý code, làm việc nhóm?]"
                ],
                tech: "[Danh sách công nghệ sử dụng, ví dụ: Next.js, React, Tailwind CSS, Git]"
            },
            {
                name: "[TÊN DỰ ÁN 2]",
                date: "[Thời gian thực hiện]",
                role: "[Vai trò]",
                desc: "[Mô tả ngắn gọn dự án]",
                github: "[Link repo github]",
                tasks: [
                    "[Nhiệm vụ 1]",
                    "[Nhiệm vụ 2]",
                    "[Nhiệm vụ 3]"
                ],
                tech: "[Công nghệ sử dụng]"
            }
        ],
        
        // Kỹ năng chuyên môn chia theo danh mục
        skills: [
            { cat: "Ngôn ngữ & Web", items: "[Kỹ năng 1, Kỹ năng 2, Kỹ năng 3...]" },
            { cat: "Cơ sở dữ liệu", items: "[MySQL, MongoDB, PostgreSQL...]" },
            { cat: "Công cụ & Thiết kế", items: "[VS Code, Git, Figma, Postman...]" },
            { cat: "Kỹ năng bổ sung", items: "[Cấu hình SEO, form tracking, các lợi thế khác...]" }
        ],
        
        // Điểm mạnh cá nhân nổi bật
        strengths: [
            "Tư duy tự học & Thích nghi: [Mô tả chi tiết thể hiện khả năng học nhanh công nghệ và giải quyết vấn đề.]",
            "Cẩn thận & Trách nhiệm: [Mô tả chi tiết thể hiện tính cẩn thận khi code, thiết kế hoặc test hệ thống.]"
        ],
        
        // Chữ hiển thị trên nút tải PDF ở bản Tiếng Việt
        btnText: "In / Tải PDF",
        
        // Tên file mặc định khi tải PDF về máy
        docTitle: "CV_HoTen_ChucDanh_ViTri"
    },
    en: {
        // [PHẦN TIẾNG ANH - Cấu trúc tương tự như Tiếng Việt bên trên]
        name: "[YOUR FULL NAME]",
        title: "[Target Job Title]",
        contact: [
            { icon: "phone", text: "[Phone number]" },
            { icon: "email", text: "[Email Address]", link: "mailto:[Email Address]" },
            { icon: "github", text: "[GitHub Link]", link: "[GitHub URL]" },
            { icon: "address", text: "[Your Location]" }
        ],
        sections: {
            objective: "PROFESSIONAL SUMMARY",
            education: "EDUCATION",
            projects: "PROJECTS & TECHNICAL EXPERIENCE",
            skills: "TECHNICAL SKILLS",
            strengths: "STRENGTHS"
        },
        objective: "[Professional summary, 3-5 sentences highlight your primary developer skills and career goals.]",
        education: {
            school: "[UNIVERSITY / ACADEMY NAME]",
            date: "[Study period]",
            detail: "[Major / Degree name / GPA]"
        },
        projects: [
            {
                name: "[PROJECT NAME 1]",
                date: "[Time frame]",
                role: "[Your role]",
                desc: "[Brief description of the project and its goals.]",
                github: "[Github repo link]",
                tasks: [
                    "[Task 1: What did you build/implement? How did you solve the problem?]",
                    "[Task 2: UI implementation / API integrations / State management?]",
                    "[Task 3: Performance tuning / Source code management?]"
                ],
                tech: "[Tech stack used, e.g. React, Node.js, Git]"
            },
            {
                name: "[PROJECT NAME 2]",
                date: "[Time frame]",
                role: "[Your role]",
                desc: "[Brief description]",
                github: "[Github link]",
                tasks: [
                    "[Task 1]",
                    "[Task 2]",
                    "[Task 3]"
                ],
                tech: "[Tech stack used]"
            }
        ],
        skills: [
            { cat: "Programming & Web", items: "[HTML, CSS, JavaScript, React...]" },
            { cat: "Databases", items: "[MySQL, PostgreSQL, MongoDB...]" },
            { cat: "Tools & Design", items: "[Figma, Git, VS Code...]" },
            { cat: "Additional Skills", items: "[SEO setup, form configurations, etc.]" }
        ],
        strengths: [
            "Proactive Learning: [Description showing your ability to learn quickly and adapt to new tech stacks.]",
            "Attention to Detail: [Description showcasing your meticulousness in responsive styling and testing.]"
        ],
        btnText: "Print / Save PDF",
        docTitle: "CV_FullName_TargetTitle"
    }
};
