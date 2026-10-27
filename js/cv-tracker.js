/**
 * ===================================================================
 * JOB APPLICATION TRACKER (TIẾN ĐỘ ỨNG TUYỂN)
 * ===================================================================
 * Quản lý danh sách các công ty và vị trí đã nộp CV, lưu trữ persistent
 * trong localStorage, hỗ trợ đổi trạng thái nhanh, lọc tìm kiếm,
 * sao lưu/khôi phục dữ liệu JSON và liên kết trực tiếp tới bản CV.
 */

(function () {
  const STORAGE_KEY = "cv_job_tracker_data";
  const DISMISSED_KEY = "cv_job_tracker_dismissed";
  const FILTER_STORAGE_KEY = "cv_job_tracker_active_filter";

  function getDismissedCompanies() {
    try {
      return new Set(JSON.parse(localStorage.getItem(DISMISSED_KEY) || "[]"));
    } catch (e) {
      return new Set();
    }
  }

  function addDismissedCompany(comp) {
    if (!comp) return;
    const norm = comp.toLowerCase().trim().replace(/[.,\-_]/g, "");
    const set = getDismissedCompanies();
    set.add(norm);
    try {
      localStorage.setItem(DISMISSED_KEY, JSON.stringify([...set]));
    } catch (e) {}
  }

  // Danh sách trạng thái chuẩn
  const STATUSES = {
    saved: { key: "saved", label: "📌 Chờ nộp", badgeClass: "status-saved", color: "#64748b" },
    applied: { key: "applied", label: "📝 Đã nộp", badgeClass: "status-applied", color: "#2563eb" },
    reviewing: { key: "reviewing", label: "⏳ Chờ phản hồi", badgeClass: "status-reviewing", color: "#d97706" },
    interviewing: { key: "interviewing", label: "🎯 Phỏng vấn", badgeClass: "status-interviewing", color: "#7c3aed" },
    offered: { key: "offered", label: "🎉 Trúng tuyển", badgeClass: "status-offered", color: "#059669" },
    rejected: { key: "rejected", label: "❌ Từ chối", badgeClass: "status-rejected", color: "#dc2626" },
  };

  // Dữ liệu mẫu khởi đầu và tự động đồng bộ
  const DEFAULT_SEED_DATA = [
    {
      id: "job_goldsun_seed",
      company: "Goldsun Focus Media",
      position: "AI Application (Prompt Engineering, RAG, Agentic AI)",
      cvType: "goldsun",
      cvLabel: "☀️ Goldsun Focus Media - AI Application (Prompt, RAG, Agentic AI)",
      appliedDate: "2026-10-27",
      status: "applied",
      userModified: true,
      contact: "Quận 1, TP. Hồ Chí Minh | hrsg2@focusmedia.vn",
      notes: "Công ty Cổ phần Truyền Thông Tập Trung Mặt Trời Vàng (Goldsun Focus Media). Vị trí: AI Application (Prompt Engineering, RAG, Agentic AI). Đã nộp CV bản Tiếng Anh trên ITviec.",
      jobUrl: "https://itviec.com/companies/goldsun-focus-media",
      jdText: "Vị trí: AI Application (Prompt Engineering, RAG, Agentic AI) tại Goldsun Focus Media (Quận 1, TP.HCM). Trọng tâm: Phát triển & tối ưu hệ thống Sales AI Agent, Prompt Engineering, RAG, Agentic AI workflows, theo dõi chỉ số hiệu quả AI Agent và phối hợp liên phòng ban (Sales, IT, HR) cùng đối tác tư vấn AI."
    },
    {
      id: "job_hemidi_seed",
      company: "HEMIDI",
      position: "Fresher Node.js Developer",
      cvType: "hemidi",
      cvLabel: "🌿 Hemidi - Fresher NodeJS Developer",
      appliedDate: "2026-10-15",
      status: "applied",
      contact: "recruit@hemidi.com | Zalo: 0937538997 | 483 Nguyễn Oanh, P. Gò Vấp, TP.HCM",
      notes: "Tuyển dụng Fresher NodeJS Developer tại HEMIDI. Địa điểm: 483 Nguyễn Oanh, Gò Vấp. Giờ làm việc: Thứ 2 – Thứ 6 (8:00 – 17:00). Email nhận CV: recruit@hemidi.com. Zalo: 0937538997. Yêu cầu: Node.js (ưu tiên NestJS), Clean code, OOP/SOLID, TDD, RESTful, PostgreSQL, TypeORM, BullMQ/Redis.",
      jobUrl: "mailto:recruit@hemidi.com?subject=Ứng%20tuyển%20Fresher%20Node.js%20Developer%20-%20Trương%20Đình%20Anh",
      jdText: `HEMIDI - TUYỂN DỤNG ĐỒNG ĐỘI MỚI
💻 Vị trí: Fresher NodeJS Developer (JS)
Slogan: Build the next solution

THÔNG TIN LÀM VIỆC & LIÊN HỆ:
📌 Thời gian làm việc: Thứ 2 – Thứ 6 | 8:00 – 17:00 (Nghỉ Thứ 7 & Chủ Nhật)
📍 Địa điểm: 483 Nguyễn Oanh, Phường Gò Vấp, TP. Hồ Chí Minh
📩 Email ứng tuyển: recruit@hemidi.com
📲 Chi tiết công việc / Zalo: 0937538997

YÊU CẦU ỨNG VIÊN:
● Có ít nhất 1 năm kinh nghiệm làm việc với Node.js, ưu tiên ứng viên có kinh nghiệm sử dụng NestJS.
● Viết code sạch, dễ bảo trì, có tài liệu rõ ràng, tuân thủ các best practices và tiêu chuẩn lập trình đã được thiết lập.
● Hiểu biết về các nguyên tắc thiết kế phần mềm và kiến trúc backend (OOP, SOLID, Design Patterns, Layered Architecture).
● Chủ động tham gia vào quá trình viết mã, review code, và phát triển unit test theo phương pháp Test-Driven Development (TDD).
● Thiết kế và triển khai RESTful, tối ưu cơ sở dữ liệu PostgreSQL; viết migration, quản lý schema với TypeORM.
● Xây dựng và vận hành các tác vụ xử lý nền (background job) như lấy dữ liệu từ API bên thứ ba, đồng bộ dữ liệu, xử lý retry và lỗi bằng BullMQ.
● Phối hợp cùng các thành viên trong team để đảm bảo chất lượng sản phẩm và phát triển các giải pháp phần mềm ổn định, đáng tin cậy.

QUYỀN LỢI:
● Được cấp máy tính bàn phục vụ công việc.
● Được tài trợ gói bảo hiểm sức khỏe nâng cao của Công ty (DBV).
● Ngày nghỉ: 12 ngày phép trong năm + 03h phép/tháng & các ngày theo Luật Quy định.
● Thưởng nóng, Lễ, Tết, thưởng doanh số, ...
● Tham gia chương trình Coaching & Mentoring, khóa đào tạo nội bộ/bên ngoài.
● Tham gia các Câu lạc bộ: Tiếng Anh, Đọc sách, Wellbeing, Cầu lông...
● Tặng quà các ngày: 8/3 (phụ nữ), 6/4 (đàn ông), sinh nhật, ...
● Hỗ trợ các khoản trợ cấp: Kết hôn, tang chế, ốm đau, thai sản, ...
● Tham gia các hoạt động thường niên: Tất niên, Tân niên, Teambuilding, ...

Gia nhập Hemidi cùng tạo nên những giá trị mới!`
    },
    {
      id: "job_yabu_seed",
      company: "Yabu Aube",
      position: "Intern Backend",
      cvType: "yabu",
      cvLabel: "🏢 Yabu Aube - Intern Backend (Quận 10, TP.HCM)",
      appliedDate: "2026-10-15",
      status: "applied",
      contact: "yabu.aube@gmail.com",
      notes: "[TUYỂN DỤNG] INTERN BACKEND – QUẬN 10, TP.HCM tại Yabu Aube. Gửi CV trực tiếp về mail: yabu.aube@gmail.com. Yêu cầu: Backend, PHP, Laravel, MySQL, RESTful API, JavaScript, Node.js, Git, Postman, JWT, Docker.",
      jobUrl: "mailto:yabu.aube@gmail.com?subject=Ứng%20tuyển%20Vị%20trí%20Intern%20Backend%20-%20Trương%20Đình%20Anh",
      jdText: `[TUYỂN DỤNG] INTERN BACKEND – QUẬN 10, TP.HCM

Các yêu cầu đối với vị trí Intern Backend
Kiến thức chuyên môn
● Sinh viên năm cuối hoặc mới tốt nghiệp ngành Công nghệ thông tin, Khoa học máy tính hoặc các ngành liên quan.
● Có kiến thức cơ bản về lập trình Backend và PHP.
● Đã tìm hiểu hoặc có dự án thực hành với Laravel.
● Có kiến thức cơ bản về MySQL, SQL, thiết kế bảng và quan hệ dữ liệu.
● Biết sử dụng RESTful API, JSON và các phương thức HTTP.
● Có kiến thức cơ bản về JavaScript và Node.js.
● Biết MongoDB là lợi thế hoặc sẵn sàng học hỏi trong quá trình thực tập.
● Sử dụng được Git ở mức cơ bản.
● Có tư duy logic, tinh thần trách nhiệm và chủ động học hỏi.

Kỹ năng bổ sung
● Biết sử dụng Postman để kiểm thử API.
● Có kiến thức về Authentication, Authorization, JWT hoặc OAuth.
● Biết Docker, Redis, Linux hoặc triển khai ứng dụng lên VPS là lợi thế.
● Có sản phẩm cá nhân, đồ án hoặc GitHub thể hiện năng lực lập trình là điểm cộng.

Liên hệ & Nộp hồ sơ:
● Inbox trực tiếp qua FB.
● Gửi CV trực tiếp về mail: yabu.aube@gmail.com
● Quét QR để xem chi tiết yêu cầu công việc.`
    },
    {
      id: "job_credosis_seed",
      company: "Credosis",
      position: "Frontend Engineer Intern",
      cvType: "credosis",
      cvLabel: "🌐 Credosis Frontend Engineer Intern",
      appliedDate: "2026-10-08",
      status: "applied",
      contact: "hello@credosis.com",
      notes: "Vị trí: " + "Frontend Engineer Intern" + " tại " + "Credosis",
      jobUrl: "",
      jdText: ""
    },

    {
      id: "job_phatkiengia_seed",
      company: "Công ty TNHH Phát Kiến Gia",
      position: "Thực Tập Sinh AI & Data Analytics",
      cvType: "phatkiengia",
      cvLabel: "📊 Phát Kiến Gia TTS AI & Data Analytics",
      appliedDate: "2026-10-07",
      status: "applied",
      contact: "Ban Tuyển dụng Phát Kiến Gia (FMCG / Thực phẩm)",
      notes: "Công ty TNHH Phát Kiến Gia (FMCG/Nhập khẩu thực phẩm: Tulip, Monini, Harvey Fresh...). TTS AI & Data Analytics: Python, SQL, LLM APIs (Gemini/OpenAI), Workflow Automation, tự động hóa báo cáo và xử lý dữ liệu Kho vận/Bán hàng.",
      jobUrl: "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
      jdText: `CÔNG TY TNHH PHÁT KIẾN GIA
TUYỂN DỤNG THỰC TẬP SINH AI & DATA ANALYTICS FULL-TIME / PART-TIME 2026
Địa điểm: TP. Hồ Chí Minh
Lĩnh vực: Bán lẻ, Hàng tiêu dùng FMCG, E-commerce (Thực phẩm nhập khẩu: Tulip, Monini, Harvey Fresh...)
Mức hỗ trợ: 1 - 4 triệu VNĐ / Tháng (Part-time tối thiểu 20h/tuần, linh hoạt 2-3 buổi tại văn phòng)
Hạn nộp hồ sơ: 15/10/2026

MÔ TẢ CÔNG VIỆC:
- Có kiến thức và biết sử dụng thành thạo các công cụ AI (ChatGPT, Claude, Gemini, Perplexity...), Excel, phân tích dữ liệu, Data Science, Power BI để ứng dụng vào thực tế doanh nghiệp.
- Dưới sự hướng dẫn của quản lý, nghiên cứu, đề xuất và triển khai ứng dụng AI (chatbot, tự động hóa quy trình, xử lý dữ liệu...) phục vụ các phòng ban: Kinh doanh, Marketing, Nhân sự, Kho vận - Logistics, Xuất nhập khẩu.
- Hỗ trợ xây dựng, huấn luyện và tối ưu các mô hình/công cụ AI (LLM, automation, phân tích dữ liệu) theo nhu cầu thực tế của doanh nghiệp.
- Viết script, xây dựng công cụ nội bộ giúp số hóa và tự động hóa các quy trình thủ công (báo cáo, tổng hợp dữ liệu, tra cứu thông tin...).
- Phối hợp với các phòng ban để khảo sát nhu cầu, thử nghiệm và triển khai giải pháp AI vào công việc thực tế.
- Tài liệu hóa quy trình, hướng dẫn sử dụng công cụ AI cho nhân sự các phòng ban liên quan.
- Theo dõi, cập nhật các công nghệ, công cụ AI mới để đề xuất cải tiến phù hợp với yêu cầu, quy mô Công ty.

YÊU CẦU ỨNG VIÊN:
- Sinh viên năm 3, 4 các chuyên ngành Khoa học máy tính, Công nghệ thông tin, Trí tuệ nhân tạo, Khoa học dữ liệu hoặc liên quan.
- Có kiến thức nền tảng về AI/Machine Learning và lập trình Python.
- Có kiến thức cơ bản về SQL và xử lý dữ liệu.
- Có khả năng sử dụng các công cụ AI/LLM như ChatGPT, Claude, Gemini...
- Tư duy logic tốt, có khả năng research/self-learning.

ƯU TIÊN:
- Đã từng sử dụng OpenAI/Anthropic/Google AI API.
- Có kinh nghiệm với RAG, chatbot hoặc workflow automation.
- Có kinh nghiệm sử dụng Excel, Power BI hoặc các công cụ trực quan hóa dữ liệu.
- Có Git/GitHub, portfolio/dự án AI cá nhân.
- Đọc hiểu tài liệu tiếng Anh chuyên ngành.`
    },

    {
      id: "job_thuduc_it_seed",
      company: "Văn phòng IT (190 Võ Văn Ngân, Thủ Đức)",
      position: "Thực Tập Sinh IT (Fullstack & AI)",
      cvType: "thuduc-it",
      cvLabel: "📍 IT Thủ Đức Thực Tập Sinh IT (Fullstack & AI)",
      appliedDate: "2026-10-06",
      status: "applied",
      contact: "190 Võ Văn Ngân, Bình Thọ, TP. Thủ Đức",
      notes: "Địa chỉ làm việc: 190 Võ Văn Ngân, Bình Thọ, Thủ Đức. T2-T7. Hỗ trợ phát triển & bảo trì phần mềm, CSDL/SQL, gỡ lỗi, Git. Ưu tiên Fullstack & AI.",
      jobUrl: "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
      jdText: `THỰC TẬP SINH IT TẠI THỦ ĐỨC
Địa điểm làm việc: 190 Võ Văn Ngân, Phường Bình Thọ, TP. Thủ Đức, TP.HCM
Thời gian làm việc: Từ Thứ 2 đến Thứ 7
Mức lương: Thỏa thuận

MÔ TẢ CÔNG VIỆC:
- Hỗ trợ phát triển và bảo trì các ứng dụng phần mềm theo yêu cầu của dự án.
- Tham gia vào các cuộc họp nhóm để thảo luận về tiến độ công việc và giải quyết các vấn đề kỹ thuật.
- Thực hiện kiểm thử và gỡ lỗi các sản phẩm phần mềm để đảm bảo chất lượng trước khi phát hành.
- Hỗ trợ quản lý cơ sở dữ liệu, thực hiện các thao tác nhập liệu và tối ưu hóa hiệu suất.
- Nghiên cứu và cập nhật các công nghệ mới, xu hướng trong lĩnh vực IT để áp dụng vào công việc.

YÊU CẦU CÔNG VIỆC:
- Sinh viên năm 3, năm 4 học Công nghệ Thông tin hoặc lĩnh vực liên quan.
- Ưu tiên các bạn Fullstack, AI.
- Kiến thức cơ bản về lập trình, ưu tiên các ngôn ngữ như Java, C#, hoặc Python.
- Hiểu biết về cơ sở dữ liệu và SQL, có khả năng thực hiện các truy vấn cơ bản.
- Kỹ năng giải quyết vấn đề tốt và khả năng làm việc độc lập cũng như theo nhóm.
- Có kinh nghiệm với các công cụ phát triển phần mềm như Git hoặc Visual Studio là một lợi thế.
- Sẵn sàng học hỏi và cập nhật công nghệ mới, có tinh thần cầu tiến trong công việc.

QUYỀN LỢI:
- Hỗ trợ hình thức làm việc, được hướng dẫn và học thực tế từ các dự án thật.
- Làm việc trong môi trường năng động, hỗ trợ dấu mộc thực tập.
- Có cơ hội trở thành nhân viên chính thức sau khi hoàn thành chương trình thực tập xuất sắc.`
    },
    {
      id: "job_longchau_seed",
      company: "Công ty Cổ phần Dược phẩm FPT Long Châu",
      position: "Thực Tập Sinh Kỹ Thuật (AI-Agents Team)",
      cvType: "longchau",
      cvLabel: "💊 FPT Long Châu Thực Tập Sinh Kỹ Thuật (AI-Agents Team)",
      appliedDate: "2026-10-06",
      status: "applied",
      contact: "Ban Tuyển dụng FPT Long Châu (AI-Agents Team)",
      notes: "FPT Long Châu - AI-Agents Team. Hướng chuyên môn: Frontend Portal (React 18, TypeScript, Vite). Điểm cộng: AI tools (Claude Code, Cursor, Codex), gọi LLM APIs làm product thật, Docker, Git.",
      jobUrl: "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
      jdText: `FPT LONG CHÂU - THỰC TẬP SINH KỸ THUẬT (AI-AGENTS TEAM)
Địa điểm làm việc: TP. Hồ Chí Minh
Kinh nghiệm: Dưới 1 năm kinh nghiệm / Sinh viên năm cuối
Mức lương: Thỏa thuận (Ứng tuyển sớm để được ưu tiên)

KHI THAM GIA VÀO TEAM, BẠN CHỌN 1 TRONG 4 HƯỚNG CHUYÊN MÔN:
1. Frontend Portal (Hướng đã chọn):
- Phát triển giao diện quản trị & vận hành: theo dõi tiến độ từng phase pipeline, hiển thị lỗi validation trước khi confirm, cấu hình lịch ingest, quản lý chuỗi nghiệp vụ.
- Tech stack: React 18, TypeScript, Vite, Vitest.

2. Backend & AI Platform:
- Lập trình MCP tools và orchestrator điều khiển pipeline hệ thống (đọc flow YAML, gọi tool, quản lý session status, chặn publish tài liệu chưa đạt chuẩn).
- Xây dựng nền tảng hạ tầng cho các AI Agent nghiệp vụ.
- Tech stack: Python, FastAPI, MCP, PostgreSQL, Pydantic.

3. Data & Retrieval:
- Xây dựng pipeline ingest dữ liệu từ Jira/Confluence/GitLab vào Milvus.
- Thực hiện chunking, embedding, đồng bộ tăng dần, đo lường chất lượng truy hồi context và xử lý sự kiện qua Kafka.
- Tech stack: Milvus, Kafka, Redis, tree-sitter, networkx.

4. QA & Automation:
- Viết property-based test và regression test cho các luồng quan trọng.
- Dựng kịch bản kiểm thử Quality Gate, tham gia build Docker image và deploy lên Kubernetes.

YÊU CẦU CHUNG:
- Tư duy logic tốt, khả năng tự học công nghệ mới nhanh.
- Đam mê AI/AI Agent, thành thạo công cụ hỗ trợ lập trình (Claude Code, Cursor, Codex).
- Nắm vững Git, hiểu biết về Docker và tư duy hệ thống.`
    },
    {
      id: "job_greenbio_seed",
      company: "CÔNG TY TNHH CÔNG NGHỆ SẠCH GREEN BIO",
      position: "Web Developer Intern",
      cvType: "greenbio",
      cvLabel: "🌱 Green Bio Web Developer Intern",
      appliedDate: "2026-10-06",
      status: "applied",
      contact: "85 Phạm Huy Thông, Phường 17 (Gò Vấp), TP.HCM",
      notes: "Địa chỉ: 85 Phạm Huy Thông, Gò Vấp. Hệ thống nội bộ: Bán hàng, kho vận, nhân sự, website. Stack: Python (FastAPI/Django), React, PostgreSQL/MySQL, REST API, Docker.",
      jobUrl: "https://vn.joboko.com/tim-viec-lam-tai-ho-chi-minh",
      jdText: `GREEN BIO - TUYỂN DỤNG WEB DEVELOPER INTERN
Địa chỉ làm việc: 85 Phạm Huy Thông, Phường 17, Gò Vấp, TP.HCM
Mức phụ cấp: 2 - 5 triệu/tháng
Hạn nộp: 04/11/2026

MÔ TẢ CÔNG VIỆC:
- Phát triển và bảo trì các ứng dụng web và mobile cho hệ thống nội bộ của công ty: quản lý bán hàng, nhân sự, kho vận và website.
- Viết clean code, hiệu quả và dễ bảo trì.
- Thiết kế và xây dựng REST API, tích hợp dữ liệu giữa các hệ thống.
- Viết truy vấn, xử lý dữ liệu và xây dựng báo cáo trên PostgreSQL/MySQL.
- Cập nhật giao diện và nội dung website, đảm bảo hiển thị tốt trên các thiết bị.

YÊU CẦU CÔNG VIỆC:
- Sinh viên năm cuối / mới tốt nghiệp Đại học chuyên ngành CNTT, KHMT hoặc liên quan.
- Có kiến thức Python (Django/Flask/FastAPI) và biết ít nhất 1 framework frontend (React.js, Next.js).
- Có kiến thức SQL và thiết kế cơ sở dữ liệu quan hệ (3NF, Indexing).
- Có kiến thức về kiến trúc phần mềm, REST API, Git, Docker.

QUYỀN LỢI:
- Phụ cấp thực tập: 2 - 5 triệu/tháng.
- Hỗ trợ mộc thực tập.
- Hiểu trọn quy trình vận hành doanh nghiệp thực tế: Bán hàng, kho, nhân sự...
- Cơ hội trở thành nhân viên chính thức sau kỳ thực tập.`
    },
    {
      id: "job_octosoft_seed",
      company: "CÔNG TY TNHH PHẦN MỀM OCTO",
      position: "Full Stack Developer",
      cvType: "octosoft",
      cvLabel: "🐙 Octo Software Fullstack",
      appliedDate: "2026-09-23",
      status: "interviewing",
      contact: "tuyendung@octosoft.co / Zalo: 0867490600 (Linh Trần)",
      notes: "🎯 Lịch test & phỏng vấn: 10:00 Thứ Năm 01/10/2026 tại Tầng 9 International Plaza, 343 Phạm Ngũ Lão, P. Bến Thành, Q.1. Xác nhận trước 15:00 ngày 30/09.",
      jobUrl: "https://flowagentica.com",
      jdText: `OCTO SOFTWARE TUYỂN DỤNG\nFULL STACK DEVELOPER\nLàm việc tại: 343 Phạm Ngũ Lão, Phường Bến Thành, TP.HCM\nKinh nghiệm: Tối thiểu 02 năm\n\nMô tả công việc:\n• Tham gia phân tích yêu cầu, thiết kế và phát triển các tính năng cho hệ thống phần mềm của công ty.\n• Phát triển giao diện web, backend, cơ sở dữ liệu và API.\n• Tích hợp API bên thứ ba, các công cụ AI hoặc AI Agent vào sản phẩm khi có yêu cầu.\n• Kiểm tra, xử lý lỗi, tối ưu hiệu suất và đảm bảo các yêu cầu bảo mật cơ bản của hệ thống.\n• Quản lý mã nguồn bằng Git, tham gia code review và viết tài liệu kỹ thuật cần thiết.\n• Phối hợp với các bộ phận liên quan để đảm bảo tiến độ và chất lượng sản phẩm.\n\nYêu cầu công việc:\nMust have:\n• Tốt nghiệp Cao đẳng/Đại học chuyên ngành Công nghệ Thông tin, Kỹ thuật Phần mềm hoặc ngành liên quan.\n• Có kinh nghiệm tối thiểu từ 2 năm làm phát triển ứng dụng / website.\n• Có kinh nghiệm làm việc với MySQL, PostgreSQL hoặc MongoDB.\n• Sử dụng tốt Git; có khả năng đọc code, debug và xử lý lỗi.\n• Có hiểu biết hoặc kinh nghiệm ứng dụng AI/AI Agent trong quá trình phát triển phần mềm.\n\nNice to have:\n• Phân tích và ra quyết định.\n• Quản lý yêu cầu và ưu tiên yêu cầu.\n• Lập kế hoạch: Kế hoạch kinh doanh, triển khai, phát triển sản phẩm...\n• Yêu thích và định hướng lâu dài, làm việc gắn bó trong lĩnh vực phát triển sản phẩm công nghệ.\n\nQuyền lợi:\n• Mức thu nhập cạnh tranh, thỏa thuận theo năng lực. Xét tăng lương 2 lần mỗi năm.\n• Tham gia đầy đủ BHXH, BHYT, BHTN và các chế độ cho người lao động theo quy định.\n• Thưởng sinh nhật, các ngày lễ, lương T13 theo quy định của công ty.\n• Nghỉ lễ, Tết và nghỉ phép 12 ngày/năm theo chính sách của công ty.\n\nỨNG TUYỂN NGAY:\nGửi CV và bảng điểm: tuyendung@octosoft.co\nTiêu đề: [Full Stack Developer] - Họ và tên`
    },
    {
      id: "job_assolutions_seed",
      company: "CÔNG TY CỔ PHẦN AS SOLUTIONS",
      position: "Frontend Developer (React, TypeScript)",
      cvType: "assolutions",
      cvLabel: "🛡️ AS Solutions Frontend Dev",
      appliedDate: "2026-09-26",
      status: "applied",
      contact: "contact@assolutions.vn",
      notes: "Làm việc tại: Phường Phú Nhuận, TP.HCM. T2-T6 (09:00 - 18:00). Lĩnh vực an toàn thông tin & công nghệ cao.",
      jobUrl: "https://www.topcv.vn/viec-lam/frontend-developer-react-typescript/2311776.html",
      jdText: `AS SOLUTIONS TUYỂN DỤNG FRONTEND DEVELOPER (REACT, TYPESCRIPT)\nĐịa chỉ: Phường Phú Nhuận, TP.HCM\nThời gian: T2-T6 (09:00 - 18:00)\n\nMÔ TẢ CÔNG VIỆC:\n- Phát triển và duy trì các ứng dụng web dựa trên UI/UX đã thiết kế.\n- Chuyển đổi bản thiết kế UI/UX (Figma, Sketch, Adobe XD) thành mã HTML, CSS, JavaScript, TypeScript chất lượng cao.\n- Tối ưu hóa hiệu suất ứng dụng web (Core Web Vitals) để đạt trải nghiệm người dùng tốt nhất.\n- Phối hợp chặt chẽ với UI/UX Designer và Backend Developer tích hợp RESTful API.\n\nYÊU CẦU:\n- Tốt nghiệp ĐH CNTT, Khoa học Máy tính hoặc liên quan.\n- Nắm vững HTML5, CSS3, JavaScript (ES6+), TypeScript.\n- ReactJS (ưu tiên), VueJS hoặc Angular. Responsive Design & Cross-browser Compatibility.\n- Git, tinh thần làm việc nhóm, có niềm đam mê với an toàn thông tin / công nghệ cao.`
    },
    {
      id: "job_umbalabs_seed",
      company: "CÔNG TY TNHH CÔNG NGHỆ UMBALABS",
      position: "Junior Fullstack Developer",
      cvType: "umbalabs",
      cvLabel: "🤖 Umbalabs Junior Fullstack",
      appliedDate: "2026-09-25",
      status: "applied",
      contact: "contact@umbalabs.com",
      notes: "56 Đường Số 7, KDC Him Lam, P. Tân Hưng, Q.7, TP.HCM. T2-T6 (08:00 - 17:00).",
      jobUrl: "https://www.topcv.vn/viec-lam/junior-fullstack-developer-dinh-huong-ai/2305336.html",
      jdText: `UMBALABS TUYỂN DỤNG JUNIOR FULLSTACK DEVELOPER (ĐỊNH HƯỚNG AI)\nĐịa chỉ: 56 Đường Số 7, KDC Him Lam, P. Tân Hưng, Quận 7, TP.HCM\nThời gian: T2-T6 (08:00 - 17:00)\n\nMÔ TẢ CÔNG VIỆC:\n- Phát triển tính năng web bằng React/Next.js/TypeScript và API Node.js/NestJS.\n- Tích hợp AI API/service vào giao diện hoặc luồng xử lý; xử lý structured output, validation.\n- Xây dựng công cụ nội bộ, giao diện eval và tự động hóa quy trình.\n\nYÊU CẦU:\n- Nền tảng Fullstack tốt (React/Next.js, Node.js), TypeScript, RESTful API, PostgreSQL.\n- Có kiến thức AI/ML cơ bản hoặc kinh nghiệm tích hợp LLM APIs (Gemini, OpenAI).\n- Chủ động, tư duy giải quyết vấn đề tốt.`
    },
    {
      id: "job_tinovation_seed",
      company: "CÔNG TY TNHH TINOVATION",
      position: "Fresher NodeJS MERN Developer",
      cvType: "tinovation",
      cvLabel: "⚡ Tinovation Fresher MERN",
      appliedDate: "2026-09-25",
      status: "applied",
      contact: "hr@tinovation.vn",
      notes: "Tòa nhà Waseco, 10 Phổ Quang, P.2, Tân Bình, TP.HCM. T2-T6 (08:30 - 17:30).",
      jobUrl: "https://www.topcv.vn/viec-lam/fresher-nodejs-developer/2305336.html",
      jdText: `TINOVATION TUYỂN DỤNG FRESHER NODEJS DEVELOPER\nĐịa chỉ: Tòa nhà Waseco, 10 Phổ Quang, P.2, Tân Bình, TP.HCM\nThời gian: T2-T6 (08:30 - 17:30)\n\nMÔ TẢ CÔNG VIỆC:\n- Tham gia phát triển hệ thống backend với Node.js, Express, MongoDB/PostgreSQL.\n- Xây dựng và tối ưu các RESTful APIs, xử lý dữ liệu và tích hợp frontend (ReactJS).\n- Tham gia code review, viết unit test và tài liệu API.\n\nYÊU CẦU:\n- Nắm vững JavaScript/TypeScript, Node.js, Express, MongoDB.\n- Hiểu biết về RESTful API, Git, Docker cơ bản.`
    },
    {
      id: "job_namphuong_seed",
      company: "NAM PHUONG TECHNOLOGY",
      position: "Thực tập sinh Backend",
      cvType: "namphuong",
      cvLabel: "⚡ Nam Phương Tech BE Intern",
      appliedDate: "2026-09-19",
      status: "reviewing",
      contact: "career@namphuongso.com / 076 381 3891 (Ms. Quỳnh)",
      notes: "Tân Bình. Fulltime T2-T6 (08h-17h30). Hỗ trợ phát triển BE Web/App, API, CSDL. Lợi thế: C#, ASP.NET Core.",
      jobUrl: "",
      jdText: `NAM PHUONG TECHNOLOGY TUYỂN DỤNG\n1. Vị trí: Thực tập sinh Backend\n2. Hình thức làm việc: Fulltime từ thứ 2 đến thứ 6 (08:00 - 12h; 13h30 - 17h30)\n3. Địa điểm làm việc: Tòa nhà Vietnamairlines, 108 Hồng Hà, P2, Tân Bình, TP. HCM\n\nMô tả công việc:\n• Tham gia hỗ trợ phát triển hệ thống Back-end cho các dự án Web/App của công ty dưới sự hướng dẫn của Mentor.\n• Hỗ trợ xây dựng API, xử lý các chức năng và logic nghiệp vụ cơ bản của hệ thống.\n• Tham gia thiết kế, xây dựng và tối ưu cơ sở dữ liệu.\n• Phối hợp với BA, UI/UX Designer, Front-end và Mobile Developer để triển khai các tính năng theo yêu cầu dự án.\n• Hỗ trợ kiểm thử, bảo trì và nâng cấp các hệ thống hiện có.\n\nYêu cầu:\n• Sinh viên năm cuối hoặc mới tốt nghiệp Đại học/Cao đẳng chuyên ngành Công nghệ Thông tin, Khoa học Máy tính, Hệ thống Thông tin hoặc các ngành liên quan.\n• Có kiến thức cơ bản về lập trình hướng đối tượng (OOP), cấu trúc dữ liệu và giải thuật.\n• Có kiến thức hoặc đã thực hành với .NET (C#, ASP.NET Core) là một lợi thế.\n• Có tinh thần trách nhiệm, tư duy logic tốt và khả năng làm việc nhóm.\n\nQuyền lợi:\n• Chủ động học hỏi, ham tìm hiểu công nghệ mới.\n• Có cơ hội tham gia vào các dự án thực tế của công ty.\n• Môi trường làm việc chuyên nghiệp, thân thiện, hỗ trợ phát triển kỹ năng chuyên môn.\n• Được tiếp cận và học hỏi các công nghệ mới trong quá trình làm việc.\n• Có cơ hội trở thành nhân viên chính thức sau thời gian thực tập.\n• Hỗ trợ phụ cấp thực tập theo năng lực.\n\nCách ứng tuyển:\n• Gửi CV về địa chỉ email: career@namphuongso.com\n• Tiêu đề email: [Ứng tuyển Intern BE – Họ và tên]\n• Liên hệ: 076 381 3891 (Ms. Quỳnh)`
    },
    {
      id: "job_cgecom_seed",
      company: "CÔNG TY TNHH CG ECOM",
      position: "Full Stack Developer",
      cvType: "cgecom",
      cvLabel: "🛒 CG Ecom Fullstack",
      appliedDate: "2026-09-17",
      status: "interviewing",
      contact: "Email tuyển dụng",
      notes: "Gò Vấp. Yêu cầu React/Node, E-commerce, Docker, CI/CD, IT Support nội bộ.",
      jobUrl: "",
      jdText: `[GÒ VẤP] CÔNG TY TNHH CG ECOM\nTUYỂN DỤNG FULL STACK DEVELOPER\nĐịa chỉ: 313/17/6A Phan Huy Ích, An Hội Tây, TP. Hồ Chí Minh (khu vực Gò Vấp cũ)\n\nMÔ TẢ CÔNG VIỆC:\n- Phân tích yêu cầu và thiết kế, phát triển Website theo nhu cầu thực tế của Công ty.\n- Phát triển Front-end & Back-end, đảm bảo giao diện responsive, dễ sử dụng và tối ưu hiệu năng.\n- Xây dựng và tích hợp RESTful API, kết nối các hệ thống/dịch vụ bên thứ ba khi cần.\n- Thiết kế, quản lý và tối ưu Database (PostgreSQL, MongoDB, MySQL).\n- Tiếp nhận yêu cầu từ các phòng ban và chuyển đổi thành giải pháp kỹ thuật phù hợp.\n- Chủ động nghiên cứu, đề xuất công nghệ và giải pháp cải tiến hệ thống.\n- Hỗ trợ xử lý các vấn đề IT nội bộ như máy tính, mạng, phần mềm và thiết bị khi cần.\n\nYÊU CẦU:\n- Tốt nghiệp Cao đẳng/Đại học chuyên ngành CNTT, Kỹ thuật phần mềm hoặc tương đương.\n- Nắm vững Frontend: React.js, Next.js, HTML5, CSS3, JavaScript/TypeScript.\n- Nắm vững Backend: Node.js, Express.js, RESTful API.\n- Cơ sở dữ liệu: PostgreSQL, MongoDB, MySQL... Tối ưu hóa truy vấn.\n- Kiến thức về thương mại điện tử (E-commerce) và quy trình thanh toán là lợi thế lớn.`
    },
    {
      id: "job_favolist5_seed",
      company: "FAVOLIST5 ASIA",
      position: "Intern QA/QC Tester",
      cvType: "favolist5",
      cvLabel: "🧪 Favolist5 QA/QC Intern",
      appliedDate: "2026-09-18",
      status: "applied",
      contact: "giang.ha@favolist5.com / Zalo: 0973820220",
      notes: "Quận 2. Manual Test, Postman API, SQL, AI tools, full-time/part-time >= 4 ngày/tuần.",
      jobUrl: "",
      jdText: `📢 [QUẬN 2, HCM] FAVOLIST5 ASIA TUYỂN INTERN QA/QC TESTER\nFAVOLIST5 ASIA đang tìm kiếm Intern QA/QC Tester đồng hành cùng team IT. 💻✨\n📍 Làm việc tại: P. Bình Trưng, TP.HCM (Quận 2 cũ)\n⏰ Full-time / Part-time (tối thiểu 4 ngày hoặc 8 buổi/tuần)\n💰 Hỗ trợ: 3.000.000 VND/tháng + 31.000 VND tiền ăn trưa/ngày làm việc\n🇯🇵 Tiếng Nhật N3 trở lên là một lợi thế lớn\n🤖 Có cơ hội học hỏi và ứng dụng AI, Manual Test, SQL, API (Postman)...\n📩 Gửi CV: giang.ha@favolist5.com\n📱 Zalo: 0973820220`
    }
  ];

  // State
  let jobs = [];
  let currentFilter = "all";
  try {
    currentFilter = localStorage.getItem(FILTER_STORAGE_KEY) || "all";
  } catch (e) {}
  let searchQuery = "";
  let editingJobId = null;

  // ----------------------------------------------------
  // LocalStorage Helpers
  // ----------------------------------------------------
  // Sắp xếp các job đã nộp / đang theo dõi theo ngày nộp mới nhất (appliedDate giảm dần), sau đó đến các job Chờ nộp (saved)
  function sortJobsByNewestApplied(list) {
    const parseDateVal = (dStr) => {
      if (!dStr || dStr === "N/A") return 0;
      const t = Date.parse(dStr);
      return isNaN(t) ? 0 : t;
    };
    const nonSaved = list.filter(j => j.status !== "saved");
    const saved = list.filter(j => j.status === "saved");
    nonSaved.sort((a, b) => {
      const da = parseDateVal(a.appliedDate);
      const db = parseDateVal(b.appliedDate);
      if (db !== da) return db - da;
      return (b.updatedAt || 0) - (a.updatedAt || 0);
    });
    return [...nonSaved, ...saved];
  }

  function loadJobs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        jobs = JSON.parse(raw);
        let updated = false;

        // Tự động bổ sung các job mẫu mới nhất nếu chưa có trong danh sách
        const missingSeeds = DEFAULT_SEED_DATA.filter(seed => {
          const sComp = (seed.company || "").toLowerCase().trim();
          const sCvT = (seed.cvType || "").toLowerCase().trim();

          return !jobs.some(j => {
            const jComp = (j.company || "").toLowerCase().trim();
            const jCvT = (j.cvType || "").toLowerCase().trim();
            return j.id === seed.id || (jCvT && jCvT === sCvT) || (jComp && sComp && (jComp.includes(sComp) || sComp.includes(jComp)));
          });
        });

        if (missingSeeds.length > 0) {
          jobs = [...missingSeeds, ...jobs];
          updated = true;
        }

        // Bổ sung jdText nếu thiếu cho các job đã có
        DEFAULT_SEED_DATA.forEach(seed => {
          const sComp = (seed.company || "").toLowerCase().trim();
          const sCvT = (seed.cvType || "").toLowerCase().trim();

          const existing = jobs.find(j => {
            const jComp = (j.company || "").toLowerCase().trim();
            const jCvT = (j.cvType || "").toLowerCase().trim();
            return j.id === seed.id || (jCvT && jCvT === sCvT) || (jComp && sComp && (jComp.includes(sComp) || sComp.includes(jComp)));
          });

          if (existing) {
            const shouldUpdateJd = seed.jdText && (!existing.jdText || existing.jdText === existing.notes || seed.jdText.length > (existing.jdText || "").length + 30);
            if (shouldUpdateJd) {
              existing.jdText = seed.jdText;
              updated = true;
            }
            if (seed.cvType === "yabu" && (existing.position.includes("(") || existing.position.includes("/"))) {
              existing.position = "Intern Backend";
              updated = true;
            }
            if (seed.cvType === "hemidi") {
              if (!existing.contact || !existing.contact.includes("recruit@hemidi.com")) {
                existing.contact = seed.contact;
                existing.notes = seed.notes;
                existing.jobUrl = seed.jobUrl;
                updated = true;
              }
            }
            if (seed.cvType === "octosoft") {
              if (!existing.notes) existing.notes = seed.notes;
              if (!existing.contact) existing.contact = seed.contact;
              if (!existing.userModified && !existing.status) {
                existing.status = "interviewing";
                updated = true;
              }
            }
          }
        });

        // Khóa bảo vệ trạng thái người dùng: đánh dấu userModified cho mọi job đã chuyển khác "saved"
        // Đồng thời đảm bảo Goldsun Focus Media giữ trạng thái "applied" (Đã nộp) nếu chưa bị người dùng chỉnh sửa
        const seenGoldsun = [];
        jobs.forEach((j, idx) => {
          if (j.status && j.status !== "saved" && !j.userModified) {
            j.userModified = true;
            updated = true;
          }
          const cLower = (j.company || "").toLowerCase();
          if (cLower.includes("goldsun") || cLower.includes("mặt trời vàng")) {
            seenGoldsun.push(idx);
            if (!j.userModified && j.status === "saved") {
              j.status = "applied";
              j.appliedDate = j.appliedDate || "2026-10-27";
              j.cvType = "goldsun";
              j.cvLabel = "☀️ Goldsun Focus Media - AI Application (Prompt, RAG, Agentic AI)";
              j.userModified = true;
              updated = true;
            }
          }
        });
        if (seenGoldsun.length > 1) {
          // Giữ lại bản Goldsun đầu tiên, loại bỏ bản trùng lặp
          const removeIdxs = new Set(seenGoldsun.slice(1));
          jobs = jobs.filter((_, idx) => !removeIdxs.has(idx));
          updated = true;
        }

        // Tự động dọn sạch các job import từ MD bị sai khu vực (Hà Nội, Đà Nẵng, Cần Thơ), hết hạn hoặc trái ngành
        const beforeCount = jobs.length;
        const badCompRx = /Open Techiz|SORACO|MB Bank|Grus Studio|DTS Software|Blue Technology|FPT IS|8Seneca|Everfit|LG CNS|NEXTEDGE|BAVAAN|NEXON DEV VINA/i;
        const badLocRx = /Hà Nội|Đà Nẵng|Cần Thơ|Not Available, None/i;
        const badRoleRx = /Embedded|AUTOSAR|Unity|Manual Tester|Tester|QA\/QC|QA Engineer|Quality Control|QC Intern|Business Analyst|Project Management|Android Developer|Information Security GRC|Tư Vấn Triển Khai/i;
        const expiredDateRx = /06\/02\/2026|2026-10-18|2026-10-19|2026-10-20|2026-10-22|2026-10-23/;

        jobs = jobs.filter(j => {
          if (!j.id || !j.id.startsWith("job_md_") || j.userModified || j.status !== "saved") return true;
          const comp = j.company || "";
          const pos = j.position || "";
          const contactAndNotes = (j.contact || "") + " " + (j.notes || "");
          if (badCompRx.test(comp)) return false;
          if (badRoleRx.test(pos)) return false;
          if (expiredDateRx.test(contactAndNotes)) return false;
          if (badLocRx.test(contactAndNotes) && !/TP\.?\s*Hồ Chí Minh/i.test(contactAndNotes)) return false;
          return true;
        });
        if (jobs.length !== beforeCount) {
          updated = true;
        }

        jobs = sortJobsByNewestApplied(jobs);
        saveJobs();
      } else {
        jobs = [...DEFAULT_SEED_DATA];
        saveJobs();
      }
    } catch (e) {
      console.warn("[JobTracker] Lỗi đọc localStorage:", e);
      jobs = [...DEFAULT_SEED_DATA];
    }
    updateBadge();
  }

  function checkAndSyncCurrentCv() {
    try {
      if (typeof window !== "undefined" && window.cvData && window.cvData.meta) {
        const meta = window.cvData.meta;
        const cur = getCurrentCvInfo();
        if (!meta.company || cur.type === "default") return;

        const sComp = (meta.company || "").toLowerCase().trim();
        const sCvT = (cur.type || "").toLowerCase().trim();

        const existing = jobs.find(j => {
          const jComp = (j.company || "").toLowerCase().trim();
          const jCvT = (j.cvType || "").toLowerCase().trim();
          return (jCvT && jCvT === sCvT) || (jComp && sComp && (jComp.includes(sComp) || sComp.includes(jComp)));
        });

        if (!existing) {
          jobs.unshift({
            id: `job_${cur.type}_auto_${Date.now()}`,
            company: meta.company,
            position: meta.position || (window.cvData.vi && window.cvData.vi.title) || "Developer",
            cvType: cur.type,
            cvLabel: cur.label,
            appliedDate: getTodayString(),
            status: "applied",
            contact: meta.email || meta.contact || "",
            notes: meta.notes || "",
            jobUrl: meta.jobUrl || "",
            jdText: meta.jdText || meta.jd || meta.notes || ""
          });
          saveJobs();
        } else if ((meta.jdText || meta.jd) && (!existing.jdText || existing.jdText === existing.notes || (meta.jdText || meta.jd).length > (existing.jdText || "").length + 30)) {
          existing.jdText = meta.jdText || meta.jd;
          saveJobs();
        }
      }
    } catch (e) {
      console.warn("[JobTracker] Lỗi tự động nhận diện CV hiện tại:", e);
    }
    updateBadge();
  }

  function saveJobs() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    } catch (e) {
      console.error("[JobTracker] Lỗi lưu localStorage:", e);
    }
    updateBadge();
  }

  // ----------------------------------------------------
  // Helpers
  // ----------------------------------------------------
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getTodayString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getCurrentCvInfo() {
    // Lấy type từ URL params hoặc default
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") || "default";
    let label = type;
    if (typeof CV_MANIFEST !== "undefined" && Array.isArray(CV_MANIFEST)) {
      const found = CV_MANIFEST.find(m => m.key === type);
      if (found) {
        const rawLbl = found.label || found.key;
        label = (found.emoji && !rawLbl.startsWith(found.emoji) ? found.emoji + " " : "") + rawLbl;
      }
    }
    return { type, label };
  }

  // ----------------------------------------------------
  // UI Rendering
  // ----------------------------------------------------
  function updateBadge() {
    const badge = document.getElementById("trackerBadge");
    if (badge) {
      badge.textContent = jobs.length;
      badge.style.display = jobs.length > 0 ? "inline-block" : "none";
    }
  }

  function renderStats() {
    const total = jobs.length;
    const saved = jobs.filter(j => j.status === "saved").length;
    const applied = jobs.filter(j => j.status === "applied").length;
    const reviewing = jobs.filter(j => j.status === "reviewing").length;
    const interviewing = jobs.filter(j => j.status === "interviewing").length;
    const offered = jobs.filter(j => j.status === "offered").length;
    const rejected = jobs.filter(j => j.status === "rejected").length;

    const statsEl = document.getElementById("jobTrackerStats");
    if (!statsEl) return;

    statsEl.innerHTML = `
      <span class="jt-stat-pill stat-total" data-filter="all" title="Xem tất cả">📊 Tổng: <b>${total}</b></span>
      ${saved > 0 ? `<span class="jt-stat-pill stat-saved" data-filter="saved" title="Lọc việc làm chờ nộp">📌 Chờ nộp: <b>${saved}</b></span>` : ""}
      <span class="jt-stat-pill stat-applied" data-filter="applied" title="Lọc đã nộp">📝 Đã nộp: <b>${applied}</b></span>
      <span class="jt-stat-pill stat-reviewing" data-filter="reviewing" title="Lọc chờ phản hồi">⏳ Đang chờ: <b>${reviewing}</b></span>
      <span class="jt-stat-pill stat-interviewing" data-filter="interviewing" title="Lọc phỏng vấn">🎯 Phỏng vấn: <b>${interviewing}</b></span>
      <span class="jt-stat-pill stat-offered" data-filter="offered" title="Lọc trúng tuyển">🎉 Trúng tuyển: <b>${offered}</b></span>
      ${rejected > 0 ? `<span class="jt-stat-pill stat-rejected" data-filter="rejected" title="Lọc từ chối">❌ Từ chối: <b>${rejected}</b></span>` : ""}
    `;

    // Highlight active pill
    statsEl.querySelectorAll(".jt-stat-pill").forEach(pill => {
      if (pill.getAttribute("data-filter") === currentFilter) {
        pill.classList.add("active");
      }
      pill.onclick = () => {
        currentFilter = pill.getAttribute("data-filter") || "all";
        try {
          localStorage.setItem(FILTER_STORAGE_KEY, currentFilter);
        } catch (e) {}
        renderStats();
        renderJobList();
      };
    });
  }

  function populateCvSelect(selectedType) {
    const select = document.getElementById("jtInputCvType");
    if (!select) return;

    select.innerHTML = "";
    if (typeof CV_MANIFEST !== "undefined" && Array.isArray(CV_MANIFEST)) {
      CV_MANIFEST.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.key;
        opt.textContent = (item.emoji && item.label && !item.label.startsWith(item.emoji) ? item.emoji + " " : "") + item.label;
        if (item.key === selectedType) {
          opt.selected = true;
        }
        select.appendChild(opt);
      });
    } else {
      const opt = document.createElement("option");
      opt.value = "default";
      opt.textContent = "💼 Bản CV Mặc định";
      select.appendChild(opt);
    }
  }

  function renderJobList() {
    const listEl = document.getElementById("jobTrackerList");
    if (!listEl) return;

    // Filter & Search
    let filtered = jobs.filter(job => {
      if (currentFilter !== "all" && job.status !== currentFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const inCompany = (job.company || "").toLowerCase().includes(q);
        const inPosition = (job.position || "").toLowerCase().includes(q);
        const inNotes = (job.notes || "").toLowerCase().includes(q);
        const inCv = (job.cvLabel || job.cvType || "").toLowerCase().includes(q);
        return inCompany || inPosition || inNotes || inCv;
      }
      return true;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div class="jt-empty-state">
          <div class="jt-empty-icon">📭</div>
          <div class="jt-empty-title">Không tìm thấy đơn ứng tuyển nào</div>
          <div class="jt-empty-desc">${searchQuery ? "Thử tìm kiếm với từ khóa khác hoặc bỏ lọc." : "Bấm nút '➕ Thêm ứng tuyển' bên trên để ghi lại hồ sơ bạn đã nộp."}</div>
        </div>
      `;
      return;
    }

    // Render cards/table
    listEl.innerHTML = filtered.map(job => {
      const statusObj = STATUSES[job.status] || STATUSES.applied;
      const cvUrl = `?type=${encodeURIComponent(job.cvType || "default")}`;
      
      return `
        <div class="jt-card" data-id="${escapeHtml(job.id)}">
          <div class="jt-card-main">
            <div class="jt-card-top">
              <div class="jt-company-wrap">
                <h4 class="jt-company-name">${escapeHtml(job.company)}</h4>
                <span class="jt-position-title">${escapeHtml(job.position || "Vị trí không tên")}</span>
              </div>
              <div class="jt-status-wrap">
                <select class="jt-status-select ${statusObj.badgeClass}" title="Bấm để chọn trạng thái ứng tuyển" onchange="window.cvTracker.changeStatus('${job.id}', this.value)">
                  <option value="saved" ${job.status === "saved" ? "selected" : ""}>📌 Chờ nộp</option>
                  <option value="applied" ${job.status === "applied" ? "selected" : ""}>📝 Đã nộp</option>
                  <option value="reviewing" ${job.status === "reviewing" ? "selected" : ""}>⏳ Chờ phản hồi</option>
                  <option value="interviewing" ${job.status === "interviewing" ? "selected" : ""}>🎯 Phỏng vấn</option>
                  <option value="offered" ${job.status === "offered" ? "selected" : ""}>🎉 Trúng tuyển</option>
                  <option value="rejected" ${job.status === "rejected" ? "selected" : ""}>❌ Từ chối</option>
                </select>
                <span class="jt-dropdown-arrow" aria-hidden="true">▾</span>
              </div>
            </div>

            <div class="jt-card-meta">
              <span class="jt-meta-item jt-cv-link" title="Bấm để mở bản CV này">
                📄 <a href="${cvUrl}" onclick="event.preventDefault(); window.cvTracker.openCv('${escapeHtml(job.cvType)}');">${escapeHtml(job.cvLabel || job.cvType || "Bản CV")} ↗</a>
              </span>
              <span class="jt-meta-item">
                📅 ${job.status === "saved" ? `<span style="color:#64748b; font-weight:600;">Chờ nộp CV</span>` : `Ngày nộp: <b>${escapeHtml(job.appliedDate || "N/A")}</b>`}
              </span>
              ${job.contact ? `<span class="jt-meta-item jt-contact" title="${escapeHtml(job.contact)}">📞 ${escapeHtml(job.contact)}</span>` : ""}
              ${job.jobUrl ? `<span class="jt-meta-item jt-job-link" title="Mở trang tin tuyển dụng gốc: ${escapeHtml(job.jobUrl)}"><a href="${escapeHtml(job.jobUrl)}" target="_blank" rel="noopener">🔗 Link tuyển dụng ↗</a></span>` : ""}
            </div>

            <div class="jt-card-notes has-jd" title="Bấm để xem bản mô tả công việc (JD) chi tiết" onclick="window.cvTracker.viewJd('${job.id}')">
              <span class="jt-notes-icon">💡</span>
              <span class="jt-notes-body">${escapeHtml(job.notes || (job.jdText ? "Bấm xem mô tả công việc chi tiết..." : "Chưa có ghi chú (Bấm xem/thêm JD)..."))}</span>
              <span class="jt-jd-badge" title="Bấm để mở xem JD chi tiết">📄 Xem JD ↗</span>
            </div>
          </div>

          <div class="jt-card-actions">
            <button type="button" class="jt-action-btn jt-btn-jd" title="Xem chi tiết bản mô tả công việc (JD)" onclick="window.cvTracker.viewJd('${job.id}')">📄 JD</button>
            <button type="button" class="jt-action-btn jt-btn-interview" title="Luyện kịch bản phỏng vấn cho vị trí này" onclick="window.cvTracker.openInterviewForJob('${job.id}')">🎯 Phỏng vấn</button>
            <button type="button" class="jt-action-btn jt-btn-email" title="Soạn email ứng tuyển 1-click cho công ty này" onclick="window.cvTracker.openEmailForJob('${job.id}')">📧 Email</button>
            <button type="button" class="jt-action-btn jt-btn-edit" title="Chỉnh sửa thông tin" onclick="window.cvTracker.openEditForm('${job.id}')">✏️ Sửa</button>
            <button type="button" class="jt-action-btn jt-btn-delete" title="Xóa hồ sơ này" onclick="window.cvTracker.deleteJob('${job.id}')">🗑️ Xóa</button>
          </div>
        </div>
      `;
    }).join("");
  }

  // ----------------------------------------------------
  // Form Management
  // ----------------------------------------------------
  function openAddForm() {
    editingJobId = null;
    const formPanel = document.getElementById("jobTrackerFormPanel");
    const formTitle = document.getElementById("jtFormTitle");
    if (!formPanel) return;

    formTitle.textContent = "➕ Thêm đơn ứng tuyển mới";
    
    // Default values
    const cur = getCurrentCvInfo();
    const meta = (window.cvData && window.cvData.meta) || {};
    const viData = (window.cvData && window.cvData.vi) || {};

    document.getElementById("jtInputCompany").value = meta.company || "";
    document.getElementById("jtInputPosition").value = meta.position || viData.title || "";
    populateCvSelect(cur.type);
    document.getElementById("jtInputDate").value = getTodayString();
    document.getElementById("jtInputStatus").value = "applied";
    document.getElementById("jtInputContact").value = meta.email || meta.contact || "";
    const jobUrlInput = document.getElementById("jtInputJobUrl");
    if (jobUrlInput) jobUrlInput.value = meta.jobUrl || meta.url || "";
    document.getElementById("jtInputNotes").value = meta.notes || "";
    const jdInput = document.getElementById("jtInputJd");
    if (jdInput) jdInput.value = meta.jdText || "";

    formPanel.style.display = "block";
    formPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (!meta.company) {
      document.getElementById("jtInputCompany").focus();
    }
  }

  function openEditForm(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    editingJobId = jobId;
    const formPanel = document.getElementById("jobTrackerFormPanel");
    const formTitle = document.getElementById("jtFormTitle");
    if (!formPanel) return;

    formTitle.textContent = "✏️ Chỉnh sửa đơn ứng tuyển: " + job.company;
    document.getElementById("jtInputCompany").value = job.company || "";
    document.getElementById("jtInputPosition").value = job.position || "";
    populateCvSelect(job.cvType || "default");
    document.getElementById("jtInputDate").value = job.appliedDate || getTodayString();
    document.getElementById("jtInputStatus").value = job.status || "applied";
    document.getElementById("jtInputContact").value = job.contact || "";
    const editJobUrlInput = document.getElementById("jtInputJobUrl");
    if (editJobUrlInput) editJobUrlInput.value = job.jobUrl || "";
    document.getElementById("jtInputNotes").value = job.notes || "";
    const jdInput = document.getElementById("jtInputJd");
    if (jdInput) jdInput.value = job.jdText || "";

    formPanel.style.display = "block";
    formPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    document.getElementById("jtInputCompany").focus();
  }

  function closeForm() {
    editingJobId = null;
    const formPanel = document.getElementById("jobTrackerFormPanel");
    if (formPanel) {
      formPanel.style.display = "none";
    }
  }

  function saveForm() {
    const company = (document.getElementById("jtInputCompany").value || "").trim();
    const position = (document.getElementById("jtInputPosition").value || "").trim();
    const cvTypeSelect = document.getElementById("jtInputCvType");
    const cvType = cvTypeSelect ? cvTypeSelect.value : "default";
    const cvLabel = cvTypeSelect && cvTypeSelect.selectedOptions[0] ? cvTypeSelect.selectedOptions[0].textContent : cvType;
    const appliedDate = document.getElementById("jtInputDate").value || getTodayString();
    const status = document.getElementById("jtInputStatus").value || "applied";
    const contact = (document.getElementById("jtInputContact").value || "").trim();
    const jobUrl = (document.getElementById("jtInputJobUrl") ? document.getElementById("jtInputJobUrl").value : "").trim();
    const notes = (document.getElementById("jtInputNotes").value || "").trim();
    const jdInput = document.getElementById("jtInputJd");
    const jdText = jdInput ? jdInput.value.trim() : "";

    if (!company) {
      alert("Vui lòng nhập tên công ty!");
      document.getElementById("jtInputCompany").focus();
      return;
    }

    if (editingJobId) {
      // Update existing
      const idx = jobs.findIndex(j => j.id === editingJobId);
      if (idx > -1) {
        jobs[idx] = {
          ...jobs[idx],
          company,
          position,
          cvType,
          cvLabel,
          appliedDate: status === "saved" ? "" : (appliedDate || getTodayString()),
          status,
          contact,
          jobUrl,
          notes,
          jdText,
          userModified: true,
          updatedAt: Date.now()
        };
      }
    } else {
      // Add new
      const newJob = {
        id: "job_" + Date.now(),
        company,
        position,
        cvType,
        cvLabel,
        appliedDate: status === "saved" ? "" : (appliedDate || getTodayString()),
        status,
        contact,
        jobUrl,
        notes,
        jdText,
        userModified: true,
        updatedAt: Date.now()
      };
      jobs.unshift(newJob);
    }

    jobs = sortJobsByNewestApplied(jobs);
    saveJobs();
    closeForm();
    renderStats();
    renderJobList();
  }

  // ----------------------------------------------------
  // JD Viewer Management
  // ----------------------------------------------------
  let viewingJobId = null;

  function viewJd(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    viewingJobId = jobId;
    const overlay = document.getElementById("jtJdModalOverlay");
    const titleEl = document.getElementById("jtJdModalTitle");
    const subTitleEl = document.getElementById("jtJdModalSubtitle");
    const contentEl = document.getElementById("jtJdContent");
    const openJobUrlBtn = document.getElementById("jtOpenJobUrlBtn");
    const urlBanner = document.getElementById("jtJdUrlBanner");
    const urlBannerLink = document.getElementById("jtJdUrlBannerLink");
    const urlBannerBtn = document.getElementById("jtJdUrlBannerBtn");
    if (!overlay || !contentEl) return;

    titleEl.textContent = "📄 " + job.company;
    subTitleEl.textContent = (job.position ? job.position + " — " : "") + (job.status === "saved" ? "Trạng thái: 📌 Chờ nộp (Chưa gửi CV)" : ("Ngày nộp: " + (job.appliedDate || "N/A")));
    
    // Tìm URL tuyển dụng từ job.jobUrl hoặc trong notes / jdText
    let effectiveJobUrl = (job.jobUrl || "").trim();
    if (!effectiveJobUrl && (job.notes || job.jdText)) {
      const combined = `${job.notes || ""} ${job.jdText || ""}`;
      const m = combined.match(/(https?:\/\/[^\s\)]+)/i);
      if (m) effectiveJobUrl = m[1];
    }

    // Hiển thị nút bấm mở link trên header modal
    if (openJobUrlBtn) {
      if (effectiveJobUrl) {
        openJobUrlBtn.href = effectiveJobUrl;
        openJobUrlBtn.style.display = "inline-flex";
      } else {
        openJobUrlBtn.style.display = "none";
      }
    }

    // Hiển thị Banner Link ứng tuyển nổi bật ngay đầu modal
    if (urlBanner && urlBannerLink && urlBannerBtn) {
      if (effectiveJobUrl) {
        urlBannerLink.href = effectiveJobUrl;
        urlBannerLink.textContent = effectiveJobUrl;
        urlBannerBtn.href = effectiveJobUrl;
        urlBanner.style.display = "flex";
      } else {
        urlBanner.style.display = "none";
      }
    }

    // Tự động đồng bộ bản jdText đầy đủ CHỈ KHI đúng cùng công ty (tránh ghi đè JD của công ty đang mở sang công ty khác)
    const normComp = c => (c || "").toLowerCase().trim();
    const seed = DEFAULT_SEED_DATA.find(s => s.id === job.id || (s.company && job.company && normComp(s.company) === normComp(job.company)));
    const metaComp = (window.cvData && window.cvData.meta && window.cvData.meta.company) || "";
    const isSameCompanyAsMeta = metaComp && job.company && (normComp(metaComp) === normComp(job.company) || normComp(job.company).includes(normComp(metaComp)) || normComp(metaComp).includes(normComp(job.company)));
    const metaJd = isSameCompanyAsMeta ? ((window.cvData && window.cvData.meta && (window.cvData.meta.jdText || window.cvData.meta.jd)) || "") : "";
    const candidateJd = (metaJd && metaJd.trim()) || (seed && seed.jdText && seed.jdText.trim()) || "";
    if (candidateJd && (!job.jdText || job.jdText === job.notes || candidateJd.length > (job.jdText || "").length + 30)) {
      job.jdText = candidateJd;
      saveJobs();
    }

    let content = (job.jdText || "").trim();
    if (!content && job.notes) {
      content = `[GHI CHÚ VỊ TRÍ TUYỂN DỤNG]\n${job.notes}\n\n` +
                `--------------------------------------------------\n` +
                `💡 Gợi ý: Hồ sơ này chưa lưu bản mô tả công việc (JD) đầy đủ. Bạn có thể bấm nút "✏️ Sửa JD" ở góc trên để dán toàn bộ tin tuyển dụng vào đây lưu trữ và so khớp ATS.`;
    } else if (!content) {
      content = `(Chưa có nội dung JD chi tiết cho hồ sơ này).\n\n💡 Bạn có thể bấm nút "✏️ Sửa JD" bên trên để dán văn bản tin tuyển dụng vào đây.`;
    }

    // Tự động bổ sung dòng Link ứng tuyển vào nội dung JD nếu chưa có
    if (effectiveJobUrl && !content.includes(effectiveJobUrl)) {
      content += `\n\n--------------------------------------------------\n🔗 LINK ỨNG TUYỂN GỐC:\n${effectiveJobUrl}`;
    }

    contentEl.textContent = content;

    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
  }

  function editCurrentJd() {
    if (!viewingJobId) return;
    const jobId = viewingJobId;
    closeJdModal();
    openEditForm(jobId);
    setTimeout(() => {
      const jdInput = document.getElementById("jtInputJd");
      if (jdInput) {
        jdInput.scrollIntoView({ behavior: "smooth", block: "center" });
        jdInput.focus();
      }
    }, 150);
  }

  function closeJdModal() {
    viewingJobId = null;
    const overlay = document.getElementById("jtJdModalOverlay");
    if (overlay) {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  function copyCurrentJd() {
    const contentEl = document.getElementById("jtJdContent");
    if (!contentEl || !contentEl.textContent) return;
    navigator.clipboard.writeText(contentEl.textContent).then(() => {
      const copyBtn = document.getElementById("jtCopyJdBtn");
      if (copyBtn) {
        const origText = copyBtn.textContent;
        copyBtn.textContent = "✅ Đã sao chép!";
        setTimeout(() => { copyBtn.textContent = origText; }, 2000);
      }
    }).catch(err => {
      alert("Không thể sao chép: " + err.message);
    });
  }

  function openAtsWithCurrentJd() {
    const job = jobs.find(j => j.id === viewingJobId);
    const contentEl = document.getElementById("jtJdContent");
    const jdText = contentEl ? contentEl.textContent : (job ? job.jdText : "");

    closeJdModal();
    closeModal();

    // Mở ATS matcher modal nếu có
    const atsBtn = document.getElementById("atsMatchBtn");
    const atsInput = document.getElementById("atsJdInput");
    const atsAnalyzeBtn = document.getElementById("atsAnalyzeBtn");

    if (atsBtn && atsInput) {
      atsBtn.click();
      if (jdText) {
        atsInput.value = jdText;
        if (atsAnalyzeBtn) {
          setTimeout(() => { atsAnalyzeBtn.click(); }, 300);
        }
      }
    }
  }

  function openEmailWithCurrentJd() {
    const job = jobs.find(j => j.id === viewingJobId);
    const contentEl = document.getElementById("jtJdContent");
    const jdText = contentEl ? contentEl.textContent : (job ? job.jdText : "");

    closeJdModal();
    closeModal();

    if (window.cvEmailGen) {
      window.cvEmailGen.openModal({
        company: job ? job.company : "",
        position: job ? job.position : "",
        contact: job ? job.contact : "",
        jdText: jdText
      });
    }
  }

  function openEmailForJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    closeModal();

    if (window.cvEmailGen) {
      window.cvEmailGen.openModal({
        company: job.company || "",
        position: job.position || "",
        contact: job.contact || "",
        jdText: job.jdText || job.notes || ""
      });
    }
  }

  function openInterviewForJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    closeModal();

    // 1. Chuyển sang bản CV tương ứng
    const targetCvType = job.cvType || "default";
    if (window.history && window.history.pushState) {
      const newUrl = window.location.pathname + "?type=" + encodeURIComponent(targetCvType);
      window.history.pushState({ type: targetCvType }, "", newUrl);
      if (typeof window.loadCvFromUrl === "function") {
        window.loadCvFromUrl();
      }
    }

    // 2. Mở modal kịch bản phỏng vấn
    setTimeout(() => {
      if (typeof window.openInterviewPrepModal === "function") {
        window.openInterviewPrepModal();

        // Tự động gán thông tin công ty vào sổ tay ghi chú phỏng vấn nếu chưa có
        const notesArea = document.getElementById("interviewNotesTextarea");
        if (notesArea && !notesArea.value.trim() && (job.company || job.position)) {
          const companyNotes = `🎯 MỤC TIÊU PHỎNG VẤN: ${job.company}\n💼 Vị trí: ${job.position || ""}\n📅 Ngày nộp: ${job.appliedDate || ""}\n🔗 Link: ${job.jobUrl || ""}\n${job.notes ? ("\n📝 Ghi chú & JD:\n" + job.notes) : ""}`;
          notesArea.value = companyNotes;
          try {
            localStorage.setItem(`interview_notes_${targetCvType}`, companyNotes);
          } catch (e) {}
        }
      }
    }, 200);
  }

  // Đổi trạng thái trực tiếp từ dropdown
  function changeStatus(jobId, newStatus) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    if (newStatus === "saved") {
      job.appliedDate = "";
    } else if (!job.appliedDate || job.appliedDate === "N/A") {
      job.appliedDate = getTodayString();
    }

    job.status = newStatus;
    job.userModified = true;
    job.updatedAt = Date.now();
    jobs = sortJobsByNewestApplied(jobs);
    saveJobs();
    renderStats();
    renderJobList();
  }

  // Chuyển nhanh vòng đời trạng thái khi bấm vào status badge
  function cycleStatus(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    const flow = ["saved", "applied", "reviewing", "interviewing", "offered", "rejected"];
    const curIdx = flow.indexOf(job.status);
    const nextStatus = flow[(curIdx + 1) % flow.length];

    if (nextStatus === "saved") {
      job.appliedDate = "";
    } else if (!job.appliedDate || job.appliedDate === "N/A") {
      job.appliedDate = getTodayString();
    }

    job.status = nextStatus;
    job.userModified = true;
    job.updatedAt = Date.now();
    jobs = sortJobsByNewestApplied(jobs);
    saveJobs();
    renderStats();
    renderJobList();
  }

  function deleteJob(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    if (confirm(`Bạn có chắc muốn xóa hồ sơ ứng tuyển tại "${job.company}" không?`)) {
      addDismissedCompany(job.company);
      jobs = jobs.filter(j => j.id !== jobId);
      saveJobs();
      renderStats();
      renderJobList();
    }
  }

  function openCv(cvType) {
    // Đổi type qua router nếu có sẵn hàm switchType hoặc cập nhật URL
    closeModal();
    if (window.history && window.history.pushState) {
      const newUrl = window.location.pathname + "?type=" + encodeURIComponent(cvType);
      window.history.pushState({ type: cvType }, "", newUrl);
      if (typeof window.loadCvFromUrl === "function") {
        window.loadCvFromUrl();
      } else {
        window.location.href = newUrl;
      }
    } else {
      window.location.href = "?type=" + encodeURIComponent(cvType);
    }
  }

  // ----------------------------------------------------
  // Backup & Restore
  // ----------------------------------------------------
  function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jobs, null, 2));
    const downloadAnchor = document.createElement("a");
    const dateStr = getTodayString().replace(/-/g, "");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `cv_job_tracker_backup_${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  function importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (Array.isArray(parsed)) {
            if (confirm(`Tìm thấy ${parsed.length} hồ sơ trong file backup. Bạn có muốn nhập vào danh sách hiện tại không?`)) {
              // Gộp tránh trùng id
              const existingIds = new Set(jobs.map(j => j.id));
              let addedCount = 0;
              parsed.forEach(item => {
                if (!existingIds.has(item.id)) {
                  jobs.push(item);
                  addedCount++;
                }
              });
              saveJobs();
              renderStats();
              renderJobList();
              alert(`Đã nhập thành công ${addedCount} hồ sơ mới!`);
            }
          } else {
            alert("File không đúng định dạng danh sách ứng tuyển!");
          }
        } catch (err) {
          alert("Lỗi khi đọc file JSON: " + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  // ----------------------------------------------------
  // Markdown Jobs Parser & Importer (File MD / jobs_for_tomorrow.md)
  // ----------------------------------------------------
  function guessCvType(company, position, summary) {
    const compLower = (company || "").toLowerCase();
    const text = `${position || ""} ${summary || ""}`.toLowerCase();

    // Khớp đích danh công ty có sẵn trong CV manifest
    if (compLower.includes("goldsun") || compLower.includes("mặt trời vàng")) return "goldsun";
    if (compLower.includes("ncs") || compLower.includes("an ninh mạng quốc gia")) return "ncs";
    if (compLower.includes("hemidi")) return "hemidi";
    if (compLower.includes("yabu")) return "yabu";
    if (compLower.includes("credosis")) return "credosis";
    if (compLower.includes("phát kiến gia") || compLower.includes("phat kien gia")) return "phatkiengia";
    if (compLower.includes("thủ đức") || compLower.includes("thu duc")) return "thuduc-it";
    if (compLower.includes("long châu") || compLower.includes("long chau")) return "longchau";
    if (compLower.includes("green bio") || compLower.includes("greenbio")) return "greenbio";
    if (compLower.includes("as solutions") || compLower.includes("assolutions")) return "assolutions";
    if (compLower.includes("umbalabs") || compLower.includes("umba")) return "umbalabs";
    if (compLower.includes("tinovation") || compLower.includes("tino")) return "tinovation";
    if (compLower.includes("dekon")) return "dekon";
    if (compLower.includes("taptap")) return "taptap";
    if (compLower.includes("octosoft")) return "octosoft";
    if (compLower.includes("zalo")) return "zalo";
    if (compLower.includes("base.vn") || compLower.includes("basevn")) return "basevn";
    if (compLower.includes("chips")) return "be";
    if (compLower.includes("nasani")) return "itdev";
    if (compLower.includes("nam phương") || compLower.includes("nam phuong")) return "namphuong";

    // Khớp theo mảng công nghệ chính
    if (text.includes("ai ") || text.includes("machine learning") || text.includes("llm") || text.includes("automation") || text.includes("agent") || text.includes("data analytics")) {
      return "ai";
    }
    if (text.includes("frontend") || text.includes("front-end") || text.includes("reactjs") || text.includes("react.js") || text.includes("react ") || text.includes("angular") || text.includes("vue")) {
      return "fe";
    }
    if (text.includes("fullstack") || text.includes("full-stack") || text.includes("full stack")) {
      return "fullstack";
    }
    if (text.includes("backend") || text.includes("back-end") || text.includes("node") || text.includes("express") || text.includes("nest") || text.includes("python") || text.includes("golang") || text.includes("go ") || text.includes("java") || text.includes("api")) {
      return "be";
    }

    return "base";
  }

  function getCvLabel(key) {
    if (typeof CV_MANIFEST !== "undefined" && Array.isArray(CV_MANIFEST)) {
      const found = CV_MANIFEST.find(item => item.key === key);
      if (found) return (found.emoji && found.label && !found.label.startsWith(found.emoji) ? found.emoji + " " : "") + found.label;
    }
    return key;
  }

  function parseMarkdownJobs(mdContent) {
    if (!mdContent || typeof mdContent !== "string") return [];
    const lines = mdContent.split(/\r?\n/);
    const parsedJobs = [];
    let inTable = false;
    let headerCols = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line.startsWith("|")) continue;

      const rawCells = line.split("|").map(c => c.trim());
      if (rawCells.length >= 2 && rawCells[0] === "") rawCells.shift();
      if (rawCells.length >= 1 && rawCells[rawCells.length - 1] === "") rawCells.pop();

      const lineLower = line.toLowerCase();
      if (lineLower.includes("công ty") && (lineLower.includes("vị trí") || lineLower.includes("stt"))) {
        headerCols = rawCells.map(c => c.toLowerCase());
        inTable = true;
        continue;
      }

      if (line.replace(/[\s|:\-]/g, "") === "") {
        continue;
      }

      if (!inTable) continue;

      let posIdx = 1, compIdx = 2, locIdx = 3, dateIdx = 4, scoreIdx = 5, sumIdx = 6, linkIdx = 7;
      if (headerCols.length >= 4) {
        const findCol = (kw) => headerCols.findIndex(h => h.includes(kw));
        const p = findCol("vị trí"); if (p !== -1) posIdx = p;
        const c = findCol("công ty"); if (c !== -1) compIdx = c;
        const l = findCol("địa điểm"); if (l !== -1) locIdx = l;
        const d = findCol("hạn") !== -1 ? findCol("hạn") : findCol("ngày"); if (d !== -1) dateIdx = d;
        const s = headerCols.findIndex(h => h.includes("điểm") && !h.includes("địa điểm")); if (s !== -1) scoreIdx = s;
        const sm = findCol("tóm tắt") !== -1 ? findCol("tóm tắt") : findCol("yêu cầu"); if (sm !== -1) sumIdx = sm;
        const lk = findCol("link") !== -1 ? findCol("link") : findCol("ứng tuyển"); if (lk !== -1) linkIdx = lk;
      }

      const rawComp = rawCells[compIdx] || "";
      const rawPos = rawCells[posIdx] || "";
      if (!rawComp || !rawPos) continue;

      const company = rawComp.replace(/\*\*/g, "").replace(/`/g, "").trim();
      const position = rawPos.replace(/\*\*/g, "").replace(/`/g, "").trim();
      const location = (rawCells[locIdx] || "").trim();
      const dateInfo = (rawCells[dateIdx] || "").trim();
      const score = (rawCells[scoreIdx] || "").replace(/`/g, "").trim();
      const summary = (rawCells[sumIdx] || "").trim();
      const rawLink = rawCells[linkIdx] || "";

      let jobUrl = "";
      const urlMatch = rawLink.match(/\[.*?\]\((https?:\/\/[^\s\)]+)\)/i) || rawLink.match(/(https?:\/\/[^\s\)]+)/i);
      if (urlMatch) {
        jobUrl = urlMatch[1];
      }

      const cvType = guessCvType(company, position, summary);
      const cvLabel = getCvLabel(cvType);

      parsedJobs.push({
        id: "job_md_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6),
        company,
        position,
        cvType,
        cvLabel,
        appliedDate: "",
        status: "saved",
        contact: location ? `Khu vực: ${location}` : "",
        notes: [
          location ? `📍 Địa điểm: ${location}` : "",
          dateInfo ? `⏱️ Hạn: ${dateInfo}` : "",
          score ? `⭐ Đánh giá khớp: ${score}` : "",
          jobUrl ? `🔗 Link ứng tuyển: ${jobUrl}` : "",
          summary ? `💡 Tóm tắt JD: ${summary}` : ""
        ].filter(Boolean).join("\n"),
        jobUrl,
        jdText: [
          summary,
          jobUrl ? `🔗 Link ứng tuyển gốc: ${jobUrl}` : ""
        ].filter(Boolean).join("\n\n") || `${position} tại ${company}`
      });
    }

    return parsedJobs;
  }

  function syncMarkdownSilently() {
    fetch("jobs_for_tomorrow.md?t=" + Date.now())
      .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.text();
      })
      .then(text => {
        const parsed = parseMarkdownJobs(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          mergeImportedJobs(parsed, "jobs_for_tomorrow.md", true);
        }
      })
      .catch(() => {});
  }

  function mergeImportedJobs(newJobs, sourceName = "file Markdown", silent = false) {
    if (!Array.isArray(newJobs) || newJobs.length === 0) {
      alert("Không tìm thấy dữ liệu công việc hợp lệ nào để nhập!");
      return;
    }

    const norm = str => (str || "").toLowerCase().trim().replace(/[.,\-_]/g, "");
    const dismissed = getDismissedCompanies();
    const filteredNewJobs = newJobs.filter(nj => !dismissed.has(norm(nj.company)));
    const incomingKeys = new Set(filteredNewJobs.map(nj => norm(nj.company)));

    // Chỉ xóa các job_md_ cũ CHƯA bị người dùng tác động (status === "saved" && !userModified) nếu không còn trong file Markdown
    jobs = jobs.filter(j => {
      if (j.id && j.id.startsWith("job_md_") && j.status === "saved" && !j.userModified) {
        return incomingKeys.has(norm(j.company)) && !dismissed.has(norm(j.company));
      }
      return true;
    });

    const existingCompanies = new Map();
    jobs.forEach(j => {
      existingCompanies.set(norm(j.company), j);
    });

    let addedCount = 0;
    let updatedCount = 0;

    const orderedSavedMdJobs = [];
    filteredNewJobs.forEach(nj => {
      const key = norm(nj.company);
      if (existingCompanies.has(key)) {
        const existing = existingCompanies.get(key);
        const isUntouchedSavedMd = existing.id && existing.id.startsWith("job_md_") && existing.status === "saved" && !existing.userModified;
        if (isUntouchedSavedMd) {
          if (nj.jobUrl) existing.jobUrl = nj.jobUrl;
          if (nj.notes) existing.notes = nj.notes;
          if (nj.jdText) existing.jdText = nj.jdText;
          if (nj.cvType) existing.cvType = nj.cvType;
          if (nj.cvLabel) existing.cvLabel = nj.cvLabel;
          orderedSavedMdJobs.push(existing);
        } else {
          // Job đã được người dùng chỉnh sửa trạng thái (Đã nộp / Phỏng vấn...): tuyệt đối giữ nguyên status & appliedDate, chỉ bổ sung link nếu thiếu
          if (!existing.jobUrl && nj.jobUrl) existing.jobUrl = nj.jobUrl;
        }
        updatedCount++;
      } else {
        existingCompanies.set(key, nj);
        orderedSavedMdJobs.push(nj);
        addedCount++;
      }
    });

    // Giữ các job người dùng đã nộp / đã tác động ở trên đầu (sắp xếp theo ngày nộp mới nhất), tiếp theo là danh sách Chờ nộp đúng thứ tự ngày quét mới nhất từ Markdown
    const lockedUserJobs = jobs.filter(j => !(j.id && j.id.startsWith("job_md_") && j.status === "saved" && !j.userModified));
    jobs = sortJobsByNewestApplied([...lockedUserJobs, ...orderedSavedMdJobs]);

    saveJobs();
    renderStats();
    renderJobList();

    if (!silent) {
      alert(`✔ Đã xử lý ${newJobs.length} công việc từ ${sourceName}:\n- Thêm mới: ${addedCount} việc làm\n- Cập nhật thông tin: ${updatedCount} việc làm đã có`);
    }
  }

  function importMarkdownData() {
    const useAuto = confirm(
      "Bạn muốn nạp danh sách công việc từ đâu?\n\n" +
      "• Bấm OK: Tự động nạp từ file 'jobs_for_tomorrow.md' (100 job sẵn có trong project)\n" +
      "• Bấm Cancel: Chọn file .md từ máy tính của bạn"
    );

    if (useAuto) {
      fetch("jobs_for_tomorrow.md")
        .then(res => {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.text();
        })
        .then(text => {
          const parsed = parseMarkdownJobs(text);
          mergeImportedJobs(parsed, "jobs_for_tomorrow.md");
        })
        .catch(err => {
          alert("Không thể đọc trực tiếp file jobs_for_tomorrow.md qua mạng (" + err.message + "). Vui lòng chọn file này từ máy tính.");
          pickMarkdownFile();
        });
    } else {
      pickMarkdownFile();
    }
  }

  function pickMarkdownFile() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".md,.txt,.markdown";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = parseMarkdownJobs(event.target.result);
          mergeImportedJobs(parsed, file.name);
        } catch (err) {
          alert("Lỗi khi đọc file Markdown: " + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  // ----------------------------------------------------
  // Modal Open / Close
  // ----------------------------------------------------
  function openModal() {
    const overlay = document.getElementById("jobTrackerModalOverlay");
    if (!overlay) return;

    try {
      currentFilter = localStorage.getItem(FILTER_STORAGE_KEY) || "all";
    } catch (e) {}

    loadJobs();
    checkAndSyncCurrentCv();
    closeForm();
    renderStats();
    renderJobList();

    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Lắng nghe phím ESC
    window.addEventListener("keydown", handleKeyDown);
  }

  function closeModal() {
    const overlay = document.getElementById("jobTrackerModalOverlay");
    if (!overlay) return;

    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    closeForm();
    window.removeEventListener("keydown", handleKeyDown);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  // ----------------------------------------------------
  // Initialization & Event Binding
  // ----------------------------------------------------
  function init() {
    loadJobs();
    syncMarkdownSilently();

    // Nút mở modal bên thanh controls
    const triggerBtn = document.getElementById("jobTrackerBtn");
    if (triggerBtn) {
      triggerBtn.onclick = openModal;
    }

    // Nút đóng modal
    const closeBtn = document.getElementById("jobTrackerCloseBtn");
    if (closeBtn) {
      closeBtn.onclick = closeModal;
    }

    // Click ra ngoài overlay để đóng
    const overlay = document.getElementById("jobTrackerModalOverlay");
    if (overlay) {
      overlay.onclick = (e) => {
        if (e.target === overlay) closeModal();
      };
    }

    // Search input
    const searchInput = document.getElementById("jtSearchInput");
    if (searchInput) {
      searchInput.oninput = (e) => {
        searchQuery = e.target.value.trim();
        renderJobList();
      };
    }

    // Form buttons
    const addBtn = document.getElementById("jtAddBtn");
    if (addBtn) addBtn.onclick = openAddForm;

    const cancelFormBtn = document.getElementById("jtCancelFormBtn");
    if (cancelFormBtn) cancelFormBtn.onclick = closeForm;

    const saveFormBtn = document.getElementById("jtSaveFormBtn");
    if (saveFormBtn) saveFormBtn.onclick = saveForm;

    // Backup & Restore buttons
    const exportBtn = document.getElementById("jtExportBtn");
    if (exportBtn) exportBtn.onclick = exportData;

    const importBtn = document.getElementById("jtImportBtn");
    if (importBtn) importBtn.onclick = importData;

    const importMdBtn = document.getElementById("jtImportMdBtn");
    if (importMdBtn) importMdBtn.onclick = importMarkdownData;

    // Cloud Sync button & modal
    const syncBtn = document.getElementById("jtSyncBtn");
    if (syncBtn) syncBtn.onclick = openSyncModal;

    const syncCloseTopBtn = document.getElementById("jtSyncCloseTopBtn");
    if (syncCloseTopBtn) syncCloseTopBtn.onclick = closeSyncModal;

    const syncCancelBtn = document.getElementById("jtSyncCancelBtn");
    if (syncCancelBtn) syncCancelBtn.onclick = closeSyncModal;

    const syncPushBtn = document.getElementById("jtSyncPushBtn");
    if (syncPushBtn) syncPushBtn.onclick = pushToCloud;

    const syncPullBtn = document.getElementById("jtSyncPullBtn");
    if (syncPullBtn) syncPullBtn.onclick = pullFromCloud;

    const syncOverlay = document.getElementById("jtSyncModalOverlay");
    if (syncOverlay) {
      syncOverlay.onclick = (e) => {
        if (e.target === syncOverlay) closeSyncModal();
      };
    }

    // JD Viewer modal buttons
    const jdCloseBtn = document.getElementById("jtJdModalCloseBtn");
    if (jdCloseBtn) jdCloseBtn.onclick = closeJdModal;

    const jdCopyBtn = document.getElementById("jtCopyJdBtn");
    if (jdCopyBtn) jdCopyBtn.onclick = copyCurrentJd;

    const jdEditBtn = document.getElementById("jtEditJdBtn");
    if (jdEditBtn) jdEditBtn.onclick = editCurrentJd;

    const jdEmailBtn = document.getElementById("jtEmailJdBtn");
    if (jdEmailBtn) jdEmailBtn.onclick = openEmailWithCurrentJd;

    const jdAtsBtn = document.getElementById("jtAtsJdBtn");
    if (jdAtsBtn) jdAtsBtn.onclick = openAtsWithCurrentJd;

    const jdOverlay = document.getElementById("jtJdModalOverlay");
    if (jdOverlay) {
      jdOverlay.onclick = (e) => {
        if (e.target === jdOverlay) closeJdModal();
      };
    }
  }

  // ----------------------------------------------------
  // Cloudflare KV Sync Management (Secure Header-based Auth)
  // ----------------------------------------------------
  const SYNC_PIN_STORAGE_KEY = "cv_tracker_sync_pin";
  const OFFICIAL_WORKER_URL = "https://cv-telegram-bridge.tdinhanh-it.workers.dev";

  function getWorkerBaseUrl() {
    try {
      if (localStorage.getItem("CV_WORKER_URL")) {
        localStorage.removeItem("CV_WORKER_URL");
      }
    } catch (e) {}

    if (typeof window !== "undefined" && window.CV_WORKER_URL && typeof window.CV_WORKER_URL === "string") {
      const customUrl = window.CV_WORKER_URL.trim().replace(/\/$/, "");
      if (customUrl === "http://localhost:8787" || customUrl === OFFICIAL_WORKER_URL) {
        return customUrl;
      }
    }
    return OFFICIAL_WORKER_URL;
  }

  function openSyncModal() {
    const overlay = document.getElementById("jtSyncModalOverlay");
    const pinInput = document.getElementById("jtSyncPinInput");
    const statusMsg = document.getElementById("jtSyncStatusMsg");
    if (!overlay) return;

    if (pinInput) {
      // Chỉ lấy mã PIN người dùng đã lưu trên máy, không hardcode PIN mặc định
      const savedPin = localStorage.getItem(SYNC_PIN_STORAGE_KEY) || "";
      pinInput.value = savedPin;
      pinInput.placeholder = "Nhập mã PIN cá nhân (tối thiểu 4 ký tự)...";
    }
    if (statusMsg) {
      statusMsg.style.display = "none";
    }

    overlay.style.display = "flex";
  }

  function closeSyncModal() {
    const overlay = document.getElementById("jtSyncModalOverlay");
    if (overlay) overlay.style.display = "none";
  }

  function showSyncStatus(msg, isError = false) {
    const statusMsg = document.getElementById("jtSyncStatusMsg");
    if (!statusMsg) return;
    statusMsg.style.display = "block";
    statusMsg.style.background = isError ? "#fef2f2" : "#f0fdf4";
    statusMsg.style.color = isError ? "#b91c1c" : "#15803d";
    statusMsg.style.border = "1px solid " + (isError ? "#fecaca" : "#bbf7d0");
    statusMsg.innerHTML = msg;
  }

  function pushToCloud() {
    const pinInput = document.getElementById("jtSyncPinInput");
    const pin = (pinInput ? pinInput.value.trim() : "");
    if (!pin || pin.length < 4) {
      showSyncStatus("⚠️ Vui lòng nhập mã PIN bảo mật (ít nhất 4 ký tự) để đồng bộ!", true);
      if (pinInput) pinInput.focus();
      return;
    }
    localStorage.setItem(SYNC_PIN_STORAGE_KEY, pin);

    showSyncStatus("⏳ Đang tải lên Cloudflare KV...", false);

    const baseUrl = getWorkerBaseUrl();
    const endpoint = `${baseUrl}/api/tracker`;

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Tracker-Pin": pin
      },
      body: JSON.stringify({ jobs })
    })
      .then(res => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then(data => {
        showSyncStatus(`🎉 <b>Đồng bộ thành công!</b> Đã lưu an toàn <b>${jobs.length}</b> đơn ứng tuyển lên Cloud.`, false);
        setTimeout(closeSyncModal, 2500);
      })
      .catch(err => {
        showSyncStatus(`✖ <b>Lỗi đồng bộ:</b> ${escapeHtml(err.message)}. Kiểm tra kết nối mạng hoặc Worker settings.`, true);
      });
  }

  function pullFromCloud() {
    const pinInput = document.getElementById("jtSyncPinInput");
    const pin = (pinInput ? pinInput.value.trim() : "");
    if (!pin || pin.length < 4) {
      showSyncStatus("⚠️ Vui lòng nhập mã PIN bảo mật (ít nhất 4 ký tự) để tải dữ liệu!", true);
      if (pinInput) pinInput.focus();
      return;
    }
    localStorage.setItem(SYNC_PIN_STORAGE_KEY, pin);

    showSyncStatus("⏳ Đang tải dữ liệu từ Cloudflare KV...", false);

    const baseUrl = getWorkerBaseUrl();
    const endpoint = `${baseUrl}/api/tracker`;

    fetch(endpoint, {
      method: "GET",
      headers: {
        "X-Tracker-Pin": pin
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then(data => {
        const cloudJobs = data.jobs || [];
        if (!Array.isArray(cloudJobs) || cloudJobs.length === 0) {
          showSyncStatus(`ℹ️ Chưa có dữ liệu nào trên Cloud cho mã PIN <b>${escapeHtml(pin)}</b>.`, false);
          return;
        }

        if (confirm(`Tìm thấy ${cloudJobs.length} đơn ứng tuyển trên Cloud. Bạn có muốn tải về và ghi đè danh sách hiện tại (${jobs.length} mục)?`)) {
          jobs = cloudJobs;
          saveJobs();
          renderStats();
          renderJobList();
          showSyncStatus(`✔ Đã cập nhật thành công <b>${jobs.length}</b> đơn ứng tuyển từ Cloud!`, false);
          setTimeout(closeSyncModal, 2000);
        }
      })
      .catch(err => {
        showSyncStatus(`✖ <b>Lỗi tải dữ liệu:</b> ${escapeHtml(err.message)}`, true);
      });
  }

  // Public API
  window.cvTracker = {
    openModal,
    closeModal,
    openSyncModal,
    openAddForm,
    openEditForm,
    closeForm,
    saveForm,
    viewJd,
    closeJdModal,
    copyCurrentJd,
    editCurrentJd,
    openAtsWithCurrentJd,
    openEmailWithCurrentJd,
    openEmailForJob,
    openInterviewForJob,
    changeStatus,
    cycleStatus,
    deleteJob,
    openCv,
    exportData,
    importData,
    importMarkdownData,
    parseMarkdownJobs,
    refreshBadge: updateBadge
  };

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
