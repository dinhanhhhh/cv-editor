// =========================================================================
// CV DATA - GENKI HOUSE (THỰC TẬP SINH IT – FRONTEND DEVELOPER INTERN)
// Kế thừa tự động từ data/cv-data-base.js (Name, Contact, Education, Buttons)
// =========================================================================

var cvData = {
  meta: {
    company: "Genki House",
    position: "Thực tập sinh IT – Frontend Developer Intern",
    recipient: "Chị Vy Nguyễn - Ban Tuyển dụng Genki House",
    email: "vy.nguyenthi@kninvests.com",
    contact: "vy.nguyenthi@kninvests.com | TP.HCM",
    jobUrl: "mailto:vy.nguyenthi@kninvests.com?subject=%5BIT%20Intern%20%E2%80%93%20Tr%C6%B0%C6%A1ng%20%C4%90%C3%ACnh%20Anh%5D",
    notes: "Genki House (KN Investments Group) tuyển dụng Thực tập sinh IT – Frontend Developer Intern tại TP.HCM. Thời gian: Full-time. Có trợ cấp thực tập. Email nhận CV: vy.nguyenthi@kninvests.com. Tiêu đề email: [IT Intern – Họ và tên]. Yêu cầu: HTML/CSS/JS, ReactJS, Tailwind CSS/Bootstrap, Responsive Design, RESTful API JSON/XML, Debug UI, SQL Server/MySQL (Stored Procedure, View), C#/.NET Web API CRUD là lợi thế.",
    jdText: `GENKI HOUSE TUYỂN DỤNG
THỰC TẬP SINH IT – FRONTEND DEVELOPER INTERN
📍 Địa điểm làm việc: TP.HCM
⏰ Thời gian làm việc: Full-time
💰 Quyền lợi: Có trợ cấp thực tập

1. MÔ TẢ CÔNG VIỆC
- Tham gia phát triển và hoàn thiện giao diện website, ứng dụng theo yêu cầu dự án.
- Xây dựng giao diện responsive, đảm bảo hiển thị tốt trên máy tính và thiết bị di động.
- Tích hợp RESTful API, xử lý dữ liệu JSON và kết nối giao diện với hệ thống Backend.
- Kiểm tra, sửa lỗi (debug) và tối ưu giao diện, cải thiện trải nghiệm người dùng.
- Hỗ trợ phát triển, chỉnh sửa các chức năng Backend cơ bản khi cần.
- Phối hợp với đội ngũ IT để triển khai, kiểm thử và hoàn thiện sản phẩm.

2. YÊU CẦU ỨNG VIÊN
- Có kiến thức tốt về HTML, CSS, JavaScript.
- Có kinh nghiệm thực hành với ReactJS, Bootstrap và/hoặc Tailwind CSS.
- Có tư duy UI/UX và khả năng xây dựng giao diện responsive.
- Biết tích hợp RESTful API, xử lý dữ liệu JSON; hiểu XML là lợi thế.
- Có khả năng đọc hiểu code, debug và xử lý lỗi giao diện.
- Có kiến thức về SQL Server, MySQL là lợi thế.
- Biết viết hoặc chỉnh sửa Stored Procedure, Function, View cơ bản là điểm cộng.
- Có kiến thức về C#/.NET Web API, có thể hỗ trợ các API CRUD cơ bản là lợi thế.
- Chủ động học hỏi, tư duy logic tốt, có tinh thần trách nhiệm và khả năng làm việc nhóm.

3. QUYỀN LỢI
- Được hưởng trợ cấp thực tập trong thời gian làm việc.
- Được hướng dẫn và nâng cao kỹ năng lập trình thông qua các dự án thực tế.
- Có cơ hội phát triển chuyên môn Frontend và tiếp cận Backend.
- Làm việc trong môi trường chuyên nghiệp, năng động, khuyến khích học hỏi.
- Có cơ hội trở thành nhân viên chính thức dựa trên năng lực và nhu cầu tuyển dụng.

4. THÔNG TIN ỨNG TUYỂN
📩 Email nhận CV: vy.nguyenthi@kninvests.com
Ứng viên vui lòng gửi CV kèm GitHub, portfolio hoặc sản phẩm/dự án cá nhân (nếu có).
Tiêu đề email: [IT Intern – Họ và tên]`,
    pitchHighlights: "Nền tảng Cử nhân KHMT Đại học Mở TP.HCM; thành thạo xây dựng giao diện responsive với ReactJS, JavaScript (ES6+), Tailwind CSS; vững kỹ năng tích hợp RESTful API xử lý dữ liệu JSON, debug giao diện mượt mà và nắm chắc kiến thức CSDL quan hệ SQL Server/MySQL cùng khả năng hỗ trợ API backend khi cần."
  },
  vi: {
    title: "Thực tập sinh IT – Frontend Developer",
    btnText: "In / Tải PDF",
    objective:
      "Cử nhân Khoa học Máy tính, Trường Đại học Mở TP.HCM. Chuyên môn phát triển giao diện responsive với React.js, JavaScript, Tailwind CSS và tích hợp hệ thống RESTful APIs xử lý dữ liệu JSON. Có kinh nghiệm thực tế tại TAMI trong việc xây dựng dashboard responsive và tối ưu hiệu năng hiển thị trên đa thiết bị. Mong muốn ứng tuyển vị trí Thực tập sinh IT – Frontend Developer tại Genki House để xây dựng giao diện chuẩn trải nghiệm người dùng và hỗ trợ chức năng backend khi cần.",
    experience: [
      {
        name: "CÔNG TY TNHH CÔNG NGHỆ TAMI",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Hệ thống phân tích dữ liệu thị trường và chuẩn hóa luồng xử lý thông tin nội bộ.",
        tasks: [
          "Phát triển giao diện dashboard phân tích dữ liệu responsive với Next.js và Tailwind CSS, đảm bảo hiển thị tối ưu trên máy tính và thiết bị di động.",
          "Tích hợp các dịch vụ RESTful APIs tiêu thụ dữ liệu JSON thời gian thực, xử lý bất đồng bộ và đồng bộ hóa trạng thái giao diện người dùng.",
          "Kiểm tra, debug và xử lý lỗi giao diện trên nhiều kích thước màn hình, cải thiện tốc độ phản hồi và trải nghiệm tương tác.",
          "Thiết kế cấu trúc cơ sở dữ liệu quan hệ và triển khai PostgreSQL trên Supabase Cloud, hỗ trợ viết truy vấn và API CRUD khi cần.",
          "Phối hợp cùng Mentor và đội ngũ kỹ thuật kiểm thử tích hợp bằng Postman, quản lý mã nguồn chặt chẽ qua Git và triển khai sản phẩm lên Vercel.",
        ],
        tech: "React, Next.js, Tailwind CSS, JavaScript (ES6+), RESTful APIs, PostgreSQL, Supabase, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "NỀN TẢNG TUYỂN DỤNG SAAS",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Hệ thống SaaS tuyển dụng full-stack hỗ trợ đăng tin, quản lý hồ sơ và quy trình ứng tuyển thời gian thực.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Xây dựng giao diện responsive chuẩn pixel-perfect trên Desktop, Tablet và Mobile bằng Next.js, React và Tailwind CSS.",
          "Tích hợp hệ thống RESTful APIs backend, xử lý dữ liệu JSON cho các luồng đăng nhập, nộp hồ sơ, lọc việc làm đa tiêu chí và phân trang.",
          "Hiện thực hóa đầy đủ các trạng thái dữ liệu (Loading/Skeleton, Empty, Error) và xử lý lỗi giao diện nâng cao trải nghiệm người dùng.",
          "Triển khai luồng xác thực bảo mật JWT qua HttpOnly cookies và kiểm soát phân quyền truy cập theo vai trò người dùng (RBAC).",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, Node.js, Express, RESTful APIs, Git, Vercel",
      },
      {
        name: "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Hệ thống thương mại điện tử trực tuyến với danh mục sản phẩm, giỏ hàng và quy trình xử lý đơn hàng.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Phát triển giao diện người dùng responsive cho danh mục sản phẩm, bộ lọc tìm kiếm, giỏ hàng và thanh toán bằng React.js và Tailwind CSS.",
          "Kết nối và tiêu thụ các RESTful APIs quản lý sản phẩm, đồng bộ hóa trạng thái giỏ hàng và kiểm soát tính hợp lệ dữ liệu nhập phía client.",
          "Thực hiện debug, tối ưu hóa re-render của component và kiểm thử toàn diện luồng nghiệp vụ API bằng Postman Collection.",
          "Đóng gói ứng dụng với Docker, quản lý mã nguồn qua Git và triển khai giao diện người dùng lên hạ tầng đám mây Vercel.",
        ],
        tech: "React.js, Tailwind CSS, JavaScript (ES6+), Node.js, Express, RESTful APIs, Postman, Docker, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, Responsive Design, State Management",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful APIs, JSON/XML, C#/.NET Web API, CRUD Operations, JWT",
      },
      {
        cat: "Databases",
        items: "MySQL, SQL Server, PostgreSQL, MongoDB, Stored Procedure, Function, View, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Postman, Chrome DevTools, Docker, Vercel",
      },
      {
        cat: "English",
        items: "Đọc hiểu tài liệu kỹ thuật, giao tiếp cơ bản",
      },
    ],
    docTitle: "CV_TruongDinhAnh_Frontend_GenkiHouse_VI",
    emailTemplates: {
      short: `[IT Intern – Trương Đình Anh]

Kính gửi Chị Vy Nguyễn và Ban Tuyển dụng Genki House,

Em là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Qua thông tin tuyển dụng, em xin gửi hồ sơ ứng tuyển vị trí Thực tập sinh IT – Frontend Developer Intern (Full-time) tại Genki House.

Những điểm nổi bật trong hồ sơ của em:
1. Nền tảng Frontend & Responsive UI: Thành thạo HTML, CSS, JavaScript (ES6+), React.js và Tailwind CSS/Bootstrap. Có tư duy thiết kế Mobile-First, đảm bảo giao diện responsive pixel-perfect và tối ưu trải nghiệm người dùng (UX).
2. Tích hợp RESTful API & Debug: Kinh nghiệm thực tế kết nối giao diện với hệ thống Backend, xử lý dữ liệu JSON bất đồng bộ, quản lý trạng thái giao diện (Loading, Empty, Error) và debug lỗi hiển thị bằng Chrome DevTools.
3. Kiến thức CSDL & Sẵn sàng hỗ trợ Backend: Nắm chắc CSDL quan hệ (SQL Server, MySQL, PostgreSQL chuẩn 3NF, Stored Procedure, View) và nền tảng lập trình hướng đối tượng (OOP C#/.NET, Node.js), sẵn sàng hỗ trợ các chức năng API CRUD cơ bản khi dự án yêu cầu.
4. Tác phong làm việc: Có tinh thần trách nhiệm cao, chủ động học hỏi và có thể làm việc Full-time ngay.

Thông tin sản phẩm & Mã nguồn thực tế:
- GitHub cá nhân: https://github.com/dinhanhhhh
- Dự án Nền tảng Tuyển dụng SaaS (React, Next.js, Tailwind CSS): https://github.com/dinhanhhhh/JOB-PORTAL
- Dự án Nền tảng E-commerce (React, Tailwind CSS, RESTful API): https://github.com/dinhanhhhh/ecommerce
- Hệ thống CV Editor & AI Automation: https://github.com/dinhanhhhh/cv-editor

Em xin gửi kèm CV ứng tuyển để Quý công ty xem xét. Em rất mong có cơ hội tham gia buổi phỏng vấn để trao đổi chi tiết hơn về vị trí.

Trân trọng,
Trương Đình Anh
Số điện thoại: 0923 202 861
Email: tdinhanh.it@gmail.com`,
      full: `[IT Intern – Trương Đình Anh]

Kính gửi Chị Vy Nguyễn và Ban Tuyển dụng Genki House,

Em tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Em viết email này để bày tỏ nguyện vọng được thực tập và cống hiến tại vị trí Thực tập sinh IT – Frontend Developer Intern (Full-time) tại Genki House.

Qua tìm hiểu bản mô tả công việc, em nhận thấy năng lực kỹ thuật và định hướng nghề nghiệp của mình rất phù hợp với yêu cầu của Quý công ty:

- Về Frontend & Responsive Design: Em có nền tảng vững chắc về HTML5, CSS3, JavaScript hiện đại, cùng kinh nghiệm thực chiến với React.js, Next.js, Tailwind CSS và Bootstrap. Em luôn chú trọng trải nghiệm người dùng (UI/UX), xây dựng giao diện hiển thị tối ưu trên máy tính lẫn thiết bị di động.
- Về Tích hợp API & Debug: Em thành thạo tích hợp các dịch vụ RESTful APIs, bóc tách và xử lý dữ liệu JSON (đồng thời có hiểu biết về XML). Em thường xuyên sử dụng Chrome DevTools và Postman để đọc hiểu mã nguồn, kiểm tra luồng dữ liệu, debug và xử lý triệt để lỗi giao diện.
- Về CSDL & Hỗ trợ Backend: Được đào tạo bài bản về CSDL quan hệ (SQL Server, MySQL, PostgreSQL), em nắm vững kỹ thuật chuẩn hóa 3NF, đánh Index, viết và chỉnh sửa Stored Procedure, Function và View. Đồng thời với nền tảng OOP C# và Node.js, em hoàn toàn tự tin có thể hỗ trợ đội ngũ phát triển các chức năng API CRUD cơ bản phía backend.
- Về Kinh nghiệm thực tế: Trong thời gian làm việc tại Công ty TNHH Công nghệ TAMI, em đã tham gia phát triển dashboard dữ liệu responsive, tích hợp RESTful APIs và phối hợp chặt chẽ cùng Mentor trong việc kiểm thử và triển khai sản phẩm.

Các sản phẩm và dự án tiêu biểu kèm mã nguồn:
- GitHub Profile: https://github.com/dinhanhhhh
- Nền tảng Tuyển dụng SaaS (Next.js, React, Tailwind CSS, RESTful API): https://github.com/dinhanhhhh/JOB-PORTAL
- Nền tảng Thương mại điện tử (React.js, Tailwind CSS, Node.js API): https://github.com/dinhanhhhh/ecommerce
- Nền tảng CV Editor & Tự động hóa: https://github.com/dinhanhhhh/cv-editor

Em đã chuẩn bị sẵn sàng để làm việc Full-time tại TP.HCM và cam kết nỗ lực học hỏi, hoàn thành tốt các nhiệm vụ được giao. Kính gửi kèm CV chi tiết của em để Anh/Chị tham khảo.

Rất mong sớm nhận được phản hồi và có cơ hội trao đổi trực tiếp trong buổi phỏng vấn!

Trân trọng,
Trương Đình Anh
Điện thoại: 0923 202 861
Email: tdinhanh.it@gmail.com
LinkedIn / Portfolio: https://github.com/dinhanhhhh`
    },
    coverLetters: {
      tech: `[IT Intern – Trương Đình Anh]

Kính gửi Chị Vy Nguyễn và Ban Tuyển dụng Genki House,

Em tên là Trương Đình Anh, tốt nghiệp Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Em viết email này để ứng tuyển vị trí Thực tập sinh IT – Frontend Developer Intern tại Genki House.

Lý do em tin mình phù hợp với vị trí:
1. Nền tảng Frontend & Responsive UI: Sử dụng thành thạo React.js, Tailwind CSS, Bootstrap và JavaScript (ES6+). Nắm vững tư duy Mobile-First, tối ưu layout hiển thị mượt mà trên mọi thiết bị.
2. Tích hợp RESTful APIs & Xử lý dữ liệu: Kinh nghiệm kết nối backend APIs, xử lý dữ liệu JSON, quản lý các trạng thái mạng (Loading, Empty, Error) và kiểm thử API bằng Postman.
3. Debug & Tối ưu hiệu năng: Thành thạo công cụ Chrome DevTools để kiểm tra DOM, phân tích network requests, debug lỗi giao diện và hạn chế tình trạng re-render không cần thiết.
4. Kiến thức CSDL & Hỗ trợ Backend: Nắm vững SQL Server và MySQL, hiểu cơ chế Stored Procedure, Function, View và sẵn sàng hỗ trợ các API CRUD cơ bản bằng C#/.NET hoặc Node.js.

Các dự án tiêu biểu:
- SaaS Job Portal Platform: https://github.com/dinhanhhhh/JOB-PORTAL
- E-Commerce Web Platform: https://github.com/dinhanhhhh/ecommerce
- GitHub cá nhân: https://github.com/dinhanhhhh

Em rất mong có cơ hội phỏng vấn để trao đổi chi tiết hơn về đóng góp của em cho các dự án tại Genki House.

Trân trọng,
Trương Đình Anh | 0923 202 861 | tdinhanh.it@gmail.com`,
      short: `[IT Intern – Trương Đình Anh]

Kính gửi Chị Vy Nguyễn - Ban Tuyển dụng Genki House,

Em là Trương Đình Anh, Cử nhân Khoa học Máy tính tại Trường Đại học Mở TP.HCM. Em xin gửi hồ sơ ứng tuyển vị trí Thực tập sinh IT – Frontend Developer Intern (Full-time) tại Genki House.

Thế mạnh phù hợp với dự án:
- Phát triển giao diện responsive chuẩn đẹp với React.js, Tailwind CSS và Bootstrap.
- Tích hợp RESTful API tiêu thụ dữ liệu JSON, debug lỗi giao diện nhanh chóng bằng Chrome DevTools.
- Nền tảng CSDL quan hệ vững vàng (SQL Server, MySQL, Stored Procedure, View) và sẵn sàng hỗ trợ các API backend CRUD.
- Dự án thực tế: https://github.com/dinhanhhhh

Em có thể làm việc Full-time và sẵn sàng nhận việc ngay. Kính gửi kèm CV chi tiết của em để Anh/Chị xem xét.

Trân trọng,
Trương Đình Anh | 0923 202 861 | tdinhanh.it@gmail.com`
    },
    interview: {
      notes: "Bộ câu hỏi trọng tâm ôn phỏng vấn Thực tập sinh IT - Frontend Developer Intern tại Genki House (ReactJS, Responsive, RESTful API JSON/XML, Debug UI, SQL Server/MySQL Stored Procedure, C#/.NET CRUD):",
      questions: [
        {
          q: "Làm thế nào để xây dựng một giao diện responsive hoạt động mượt mà trên cả máy tính và thiết bị di động?",
          a: "Áp dụng phương pháp tiếp cận Mobile-First kết hợp CSS Media Queries hoặc hệ thống utility classes responsive của Tailwind CSS / Bootstrap grid system (12 cột). Sử dụng các đơn vị co giãn tương đối (rem, %, vh/vw, flexbox, CSS Grid) thay cho pixel cố định. Đặt thẻ meta viewport chuẩn 'width=device-width, initial-scale=1.0', tối ưu kích thước tap targets tối thiểu 44-48px cho màn hình cảm ứng, và kiểm thử giao diện trên Device Mode của Chrome DevTools."
        },
        {
          q: "Bạn quản lý vòng đời component và State trong ReactJS như thế nào? Khi nào component bị re-render?",
          a: "Trong Function Component hiện đại, sử dụng useState cho local state và useEffect để xử lý side-effects (gọi API, lắng nghe sự kiện, dọn dẹp bộ nhớ qua cleanup function). Component sẽ re-render khi: 1. State nội tại thay đổi; 2. Props từ cha truyền xuống thay đổi; 3. Component cha bị re-render; 4. Context value mà component đang consume thay đổi. Để tối ưu tránh re-render thừa, có thể dùng React.memo, useMemo và useCallback cho các tác vụ tính toán nặng hoặc callback truyền xuống con."
        },
        {
          q: "Quy trình tích hợp RESTful API vào ứng dụng React và xử lý dữ liệu JSON/XML diễn ra như thế nào?",
          a: "Sử dụng Fetch API hoặc Axios để gửi HTTP requests (GET, POST, PUT, DELETE) với header 'Content-Type: application/json' (hoặc 'application/xml'). Quản lý vòng đời dữ liệu qua 3 trạng thái rõ ràng: Loading (hiển thị spinner/skeleton), Success (parse body JSON và render giao diện) và Error (bắt catch block, hiển thị thông báo thân thiện cho user). Với XML, có thể dùng DOMParser tích hợp của trình duyệt (parser.parseFromString(xmlString, 'text/xml')) để chuyển đổi sang DOM document và trích xuất dữ liệu."
        },
        {
          q: "Khi giao diện bị lỗi layout hoặc không hiển thị đúng dữ liệu, quy trình debug của bạn là gì?",
          a: "Bước 1: Mở Chrome DevTools tab Console kiểm tra các runtime errors, cảnh báo re-render hoặc cú pháp JS. Bước 2: Dùng tab Network lọc Fetch/XHR để kiểm tra HTTP Status Code, Request Payload và Response Data trả về từ backend có đúng cấu trúc JSON không. Bước 3: Dùng tab Elements inspect từng phần tử để kiểm tra thuộc tính CSS, hộp mô hình (Box Model), margin/padding và các rules bị ghi đè. Bước 4: Đặt debugger hoặc console.log kiểm tra giá trị props và state trong React Developer Tools."
        },
        {
          q: "Bạn hiểu thế nào về Stored Procedure, Function và View trong SQL Server / MySQL? Khi nào nên dùng?",
          a: "View là bảng ảo được định nghĩa từ một câu truy vấn SELECT, giúp đơn giản hóa các truy vấn phức tạp và phân quyền bảo mật dữ liệu cột mà không cấp quyền trực tiếp vào bảng gốc. Function (hàm) nhận tham số đầu vào và bắt buộc trả về một giá trị duy nhất (hoặc table), thường dùng trong mệnh đề SELECT/WHERE và không làm thay đổi trạng thái database. Stored Procedure là tập hợp các câu lệnh SQL được biên dịch và lưu trữ trên server, có thể nhận tham số IN/OUT, thực thi các nghiệp vụ phức tạp, chứa transaction (COMMIT/ROLLBACK) và giúp tăng tốc độ thực thi do server đã tối ưu kế hoạch thực thi (execution plan)."
        },
        {
          q: "Nếu dự án yêu cầu hỗ trợ Backend xây dựng một API CRUD cơ bản (bằng C#/.NET Web API hoặc Node.js), bạn sẽ triển khai như thế nào?",
          a: "Triển khai theo kiến trúc phân tầng: 1. Model biểu diễn cấu trúc thực thể dữ liệu và tương tác CSDL qua ORM (Entity Framework trong .NET hoặc Prisma/TypeORM/Mongoose); 2. Service/Repository chứa business logic và xử lý nghiệp vụ; 3. Controller tiếp nhận HTTP requests từ client, validate dữ liệu đầu vào (Data Annotations / middleware validation), gọi Service xử lý và trả về JSON Response cùng HTTP Status Code thích hợp (200 OK cho GET/PUT, 201 Created cho POST, 204 No Content cho DELETE, 400 Bad Request nếu dữ liệu sai). Tích hợp Swagger để kiểm thử và sinh tài liệu API."
        }
      ]
    }
  },
  en: {
    title: "IT Frontend Developer Intern",
    btnText: "Print / Save PDF",
    objective:
      "Computer Science graduate from Ho Chi Minh City Open University. Specialized in responsive frontend development using React.js, JavaScript, and Tailwind CSS, experienced in consuming RESTful APIs with JSON data processing. Hands-on background at TAMI developing responsive dashboards and optimizing cross-device rendering performance. Eager to intern as an IT Frontend Developer at Genki House to deliver high-quality user experiences and support basic backend APIs when needed.",
    experience: [
      {
        name: "TAMI TECHNOLOGY CO., LTD",
        date: "06/2025 - 12/2025",
        role: "Developer",
        desc: "Market data analytics system and internal pipeline standardization.",
        tasks: [
          "Developed responsive analytics dashboards using Next.js and Tailwind CSS, ensuring high-fidelity rendering across desktop and mobile devices.",
          "Integrated RESTful API services consuming real-time JSON market data, managing asynchronous flows and UI state synchronization.",
          "Debugged and resolved layout and rendering defects across multiple screen breakpoints, improving interaction latency and UX.",
          "Designed relational database schemas and deployed PostgreSQL on Supabase Cloud, supporting SQL queries and CRUD API maintenance.",
          "Collaborated with technical mentors in API integration testing with Postman, maintaining strict Git workflows and deploying on Vercel.",
        ],
        tech: "React, Next.js, Tailwind CSS, JavaScript (ES6+), RESTful APIs, PostgreSQL, Supabase, Postman, Git, Vercel",
      },
    ],
    projects: [
      {
        name: "SAAS JOB PORTAL PLATFORM",
        date: "11/2025 - 02/2026",
        role: "Developer",
        desc: "Full-stack SaaS recruitment platform supporting job posting, applicant tracking, and user management.",
        github: "https://github.com/dinhanhhhh/JOB-PORTAL",
        tasks: [
          "Engineered responsive pixel-perfect interfaces across Mobile, Tablet, and Desktop using Next.js, React, and Tailwind CSS.",
          "Integrated backend RESTful APIs with JSON payloads for authentication, application submission, multi-criteria filtering, and pagination.",
          "Implemented comprehensive UI states (Loading/Skeleton, Empty, Error) and resilient error handling to optimize user experience.",
          "Enforced secure JWT authentication via HttpOnly cookies and Role-Based Access Control (RBAC) mechanisms.",
        ],
        tech: "Next.js 15, React, TypeScript, Tailwind CSS, Node.js, Express, RESTful APIs, Git, Vercel",
      },
      {
        name: "E-COMMERCE WEB PLATFORM",
        date: "08/2025 - 11/2025",
        role: "Developer",
        desc: "Online shopping web application featuring dynamic catalog browsing, cart management, and order checkout flows.",
        github: "https://github.com/dinhanhhhh/ecommerce",
        tasks: [
          "Developed responsive frontend interfaces for product catalogs, search filters, cart state, and checkout flows using React.js and Tailwind CSS.",
          "Consumed RESTful APIs for product information, synchronized shopping cart state, and enforced client-side form validation.",
          "Debugged and optimized component re-rendering cycles and verified API business flows with Postman Collection suites.",
          "Containerized services with Docker, managed version control via Git, and deployed the web client to Cloud Vercel infrastructure.",
        ],
        tech: "React.js, Tailwind CSS, JavaScript (ES6+), Node.js, Express, RESTful APIs, Postman, Docker, Git",
      },
    ],
    skills: [
      {
        cat: "Frontend",
        items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap, Responsive Design, State Management",
      },
      {
        cat: "Backend",
        items: "Node.js, Express.js, RESTful APIs, JSON/XML, C#/.NET Web API, CRUD Operations, JWT",
      },
      {
        cat: "Databases",
        items: "MySQL, SQL Server, PostgreSQL, MongoDB, Stored Procedure, Function, View, 3NF, Indexing",
      },
      {
        cat: "Tools & DevOps",
        items: "Git, GitHub, Postman, Chrome DevTools, Docker, Vercel",
      },
      {
        cat: "English",
        items: "Technical documentation reading, basic communication",
      },
    ],
    docTitle: "CV_TruongDinhAnh_Frontend_GenkiHouse_EN",
    emailTemplates: {
      short: `[IT Intern – Truong Dinh Anh]

Dear Ms. Vy Nguyen and Genki House Hiring Team,

I am Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to express my strong interest in the Full-time IT Frontend Developer Intern position at Genki House.

Key qualifications that align with your requirements:
1. Strong Frontend & Responsive UI: Proficient in HTML, CSS, JavaScript (ES6+), React.js, and Tailwind CSS/Bootstrap with a Mobile-First mindset, ensuring responsive, pixel-perfect user interfaces.
2. RESTful API Integration & Debugging: Experienced in consuming RESTful APIs, handling asynchronous JSON data, managing UI states (Loading, Empty, Error), and debugging layouts using Chrome DevTools.
3. Database Knowledge & Backend Readiness: Solid foundation in relational databases (SQL Server, MySQL, PostgreSQL, Stored Procedures, Views) and OOP (C#/.NET, Node.js), prepared to support basic CRUD API features when required.
4. Professional Mindset: High responsibility, fast learner, and available full-time immediately in Ho Chi Minh City.

Representative Projects & Source Code:
- GitHub Profile: https://github.com/dinhanhhhh
- SaaS Job Portal Platform (React, Next.js, Tailwind CSS): https://github.com/dinhanhhhh/JOB-PORTAL
- E-Commerce Web Platform (React, Tailwind CSS, RESTful API): https://github.com/dinhanhhhh/ecommerce
- CV Editor & AI Automation Platform: https://github.com/dinhanhhhh/cv-editor

I have attached my CV for your review and look forward to discussing how I can contribute to Genki House.

Sincerely,
Truong Dinh Anh
Phone: (+84) 923 202 861 | Email: tdinhanh.it@gmail.com`,
      full: `[IT Intern – Truong Dinh Anh]

Dear Ms. Vy Nguyen and Genki House Hiring Team,

I am Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am applying for the IT Frontend Developer Intern (Full-time) position at Genki House.

Based on your job description, my technical background matches your core criteria:
- Frontend Development: Solid expertise in React.js, Next.js, JavaScript (ES6+), Tailwind CSS, and Bootstrap. Experienced in building responsive web applications that render smoothly across all device form factors.
- API Consumption & Debugging: Hands-on experience integrating RESTful APIs, parsing JSON datasets, managing asynchronous states, and using Chrome DevTools / Postman to diagnose and fix frontend defects.
- Database & Backend Support: Well-versed in relational database design (SQL Server, MySQL, 3NF), Stored Procedures, Functions, and Views. Capable of supporting basic CRUD API endpoints in C#/.NET or Node.js.
- Practical Experience: Completed an internship at TAMI Technology Co., Ltd, developing responsive data dashboards and collaborating with mentors on API integration and deployment.

Projects & GitHub:
- GitHub: https://github.com/dinhanhhhh
- SaaS Job Portal: https://github.com/dinhanhhhh/JOB-PORTAL
- E-Commerce Web: https://github.com/dinhanhhhh/ecommerce

I am available full-time and eager to contribute to Genki House. Thank you for considering my application.

Sincerely,
Truong Dinh Anh
(+84) 923 202 861 | tdinhanh.it@gmail.com`
    }
  }
};

