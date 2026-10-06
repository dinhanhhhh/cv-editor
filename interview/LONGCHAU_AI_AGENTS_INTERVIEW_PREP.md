# 🚀 CẨM NANG ÔN TẬP PHỎNG VẤN: FPT LONG CHÂU (AI-AGENTS TEAM)
## Vị trí: Thực Tập Sinh Kỹ Thuật (Hướng chuyên môn: Frontend Portal)
> **Ứng viên:** Trương Đình Anh  
> **Đơn vị:** Công ty Cổ phần Dược phẩm FPT Long Châu  
> **Tech stack:** React 18, TypeScript, Vite, Tailwind CSS, LLM APIs, Claude Code, Quality Gate Validator  

---

## 📌 PHẦN 1: GIỚI THIỆU BẢN THÂN (GÂY ẤN TƯỢNG TRONG 90 GIÂY)

**Gợi ý trả lời tự tin, mạch lạc (Đúng thực lực & Thuyết phục):**
> "Dạ em chào các anh/chị trong AI-Agents Team của FPT Long Châu. Em tên là Trương Đình Anh, vừa tốt nghiệp Cử nhân chuyên ngành Khoa học Máy tính tại Trường Đại học Mở TP.HCM.
> 
> Em ứng tuyển vào team với định hướng chuyên môn là **Frontend Portal**. Thế mạnh kỹ thuật cốt lõi của em là **React 18, TypeScript và Vite**. Em có kinh nghiệm thực tế trong việc xây dựng các màn hình Dashboard quản trị trực quan, xử lý state luồng dữ liệu phức tạp, phân quyền vai trò (RBAC) và tối ưu giao diện responsive.
> 
> Điểm đặc biệt khiến em tự tin mình là mảnh ghép phù hợp cho team chính là **tư duy làm việc AI-First**. Em sử dụng thành thạo các công cụ AI (Claude Code, Cursor, Codex) trong công việc lập trình hàng ngày – biết cách viết prompt chặt chẽ, chia nhỏ task theo quy trình Spec-Driven và luôn kiểm chứng kết quả bằng mã nguồn/kịch bản test tự động.
> 
> Bản thân em cũng đã tự tay xây dựng một sản phẩm chạy thực tế: Nền tảng tự động hóa tích hợp LLM APIs (Gemini/OpenAI) qua Serverless Cloudflare Workers kết nối Telegram Bot, có kịch bản Quality Gate tự động xác thực tính toàn vẹn của dữ liệu trước khi publish.
> 
> Em rất ấn tượng với tốc độ chuyển đổi số và quy mô ứng dụng AI Agents tại FPT Long Châu. Em mong muốn mang thế mạnh Frontend Portal cùng tinh thần chủ động cao nhất để đồng hành và đóng góp vào hệ thống của team."

---

## ⚙️ PHẦN 2: FRONTEND PORTAL (REACT 18, TYPESCRIPT, VITE)

### 1. React 18 có những tính năng mới nổi bật nào?
* **Concurrent Rendering (Render đồng thời):** Cơ chế cho phép React chuẩn bị nhiều phiên bản giao diện người dùng cùng lúc, có thể tạm dừng hoặc hủy bỏ render khi có tác vụ ưu tiên cao hơn (như người dùng gõ phím).
* **Automatic Batching (Gom nhóm cập nhật tự động):** Trong React 17 trở về trước, React chỉ batch state trong các sự kiện React. Với React 18, state updates trong `setTimeout`, `Promise`, hoặc `async/await` đều được tự động gom nhóm lại thành 1 lần re-render duy nhất, tăng hiệu năng rõ rệt.
* **Các Hooks mới:**
  * `useTransition`: Đánh dấu các cập nhật state là "độ ưu tiên thấp" (non-blocking), giữ giao diện mượt mà khi người dùng thực hiện thao tác nặng.
  * `useDeferredValue`: Trì hoãn việc re-render của một giá trị phụ thuộc (rất hữu ích khi tìm kiếm hoặc lọc dữ liệu trong portal).

---

### 2. Tại sao nên chọn Vite thay vì Create React App (Webpack)?
* **Tốc độ khởi động:** Webpack phải bundle toàn bộ mã nguồn trước khi khởi động dev server (mất vài chục giây với dự án lớn). Vite tận dụng **Native ES Modules (ESM)** trên trình duyệt hiện đại kết hợp **esbuild** (viết bằng Go) để pre-bundle dependencies, khởi động server tức thì trong vài trăm mili-giây.
* **HMR (Hot Module Replacement) siêu tốc:** Khi sửa code trong một component, Vite chỉ load lại đúng file module đó qua HTTP request của trình duyệt, không build lại cả bundle.

---

### 3. Thiết kế Type trong TypeScript cho trạng thái Phase Pipeline của Agent
**Tình huống:** Quản lý tiến độ từng phase: `INGESTION` -> `CHUNKING` -> `VALIDATION` -> `COMPLETED`/`FAILED`.
* **Kỹ thuật Discriminated Union (Union có nhãn phân biệt):**
```typescript
type PipelinePhase = 'INGESTION' | 'CHUNKING' | 'VALIDATION';

type PipelineStatus = 
  | { state: 'IDLE' }
  | { state: 'RUNNING'; phase: PipelinePhase; progress: number }
  | { state: 'VALIDATION_ERROR'; errors: ValidationError[] }
  | { state: 'COMPLETED'; completedAt: string };

interface ValidationError {
  id: string;
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  section: string;
  line: number;
  message: string;
}
```
* **Lợi ích:** Tránh trạng thái bất hợp lệ (invalid states), TypeScript tự động thu hẹp kiểu (Type Narrowing) khi switch-case theo `state`, code không bao giờ bị lỗi `undefined`.

---

### 4. Thiết kế giao diện hiển thị lỗi Validation của LLM và nhảy tới tài liệu thiếu
* **Bài toán:** LLM sinh ra tài liệu Markdown nhưng bị thiếu mục hoặc sai format requirement ID.
* **Giải pháp UI/UX:**
  1. **Bảng phân cấp lỗi (Error Drawer / Sidebar):** Phân nhóm theo độ nghiêm trọng (Màu đỏ: `CRITICAL` - chặn publish; Vàng: `WARNING`; Xanh: `INFO`).
  2. **Cơ chế Deep-linking / Anchor Navigation:** Mỗi section của tài liệu Markdown được render với `id` cụ thể (`#req-01`, `#sec-architecture`). Khi click vào lỗi trên bảng, dùng `document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })` kết hợp hiệu ứng CSS highlight (nháy sáng màu vàng) để người dùng định vị ngay lập tức vị trí lỗi.

---

## 🤖 PHẦN 3: AI AGENTS, LLM & CÔNG CỤ HÀNG NGÀY (ĐIỂM CỘNG ƯU TIÊN SỐ 1)

### 1. Quy trình làm việc thực tế với AI Tools (Claude Code, Cursor, Codex)
* **Nguyên tắc "Spec-Driven Development":**
  * Không nhảy vào prompt code ngay lập tức.
  * Bước 1: Viết tài liệu Requirements / Thiết kế kiến trúc (Spec) rõ ràng.
  * Bước 2: Cung cấp Context chuẩn cho AI thông qua file quy tắc (như file `AGENTS.md`), cấu trúc project và coding conventions.
  * Bước 3: Chia nhỏ bài toán thành các sub-tasks độc lập.
* **Nguyên tắc "Verification First" (Luôn kiểm chứng):**
  * AI là trợ lý lập trình, con người là kỹ sư kiến trúc và người chịu trách nhiệm cuối cùng.
  * Mọi code do AI sinh ra phải được chạy qua TypeScript Compiler (`tsc --noEmit`), linter và bộ kiểm thử (test suite/verify script) trước khi commit.

---

### 2. MCP (Model Context Protocol) là gì?
* **Khái niệm:** Là một giao thức mở do Anthropic giới thiệu nhằm chuẩn hóa cách thức mà các mô hình AI Agent kết nối và tương tác với các công cụ (Tools), tài nguyên (Resources) và dữ liệu bên ngoài.
* **Ví dụ thực tế:** Thay vì mỗi hệ thống tự viết cách gọi API riêng biệt, MCP cung cấp một chuẩn chung: Agent có thể đọc dữ liệu từ GitLab, truy vấn PostgreSQL, hoặc kích hoạt pipeline thông qua các MCP Servers chuẩn hóa.

---

### 3. Hiểu biết cơ bản về RAG, Vector Database & Milvus
* **Vấn đề của LLM thuần túy:** Bị giới hạn độ dài context và có thể bị ảo giác (hallucination) với dữ liệu nội bộ của doanh nghiệp.
* **RAG (Retrieval-Augmented Generation):**
  1. **Ingestion & Chunking:** Tài liệu nội bộ (Jira, Confluence, SOP Dược phẩm) được cắt thành các đoạn nhỏ có nghĩa (chunks).
  2. **Embedding:** Đưa qua mô hình embedding để chuyển thành các vector số học đại diện cho ngữ nghĩa.
  3. **Vector Database (Milvus):** Lưu trữ vector và tìm kiếm tương đồng (similarity search - Cosine/Euclidean) cực nhanh ở quy mô hàng triệu văn bản.
  4. **Generation:** Khi người dùng hỏi, hệ thống lấy ra top-K văn bản khớp ngữ nghĩa nhất từ Milvus, nhồi vào Prompt làm context cho LLM trả lời chuẩn xác.

---

## 🧪 PHẦN 4: QA, AUTOMATION & DEVOPS

### 1. Spec-Driven Development là gì?
* Là phương pháp phát triển phần mềm trong đó **Tài liệu đặc tả (Specification/Design Doc)** là nguồn chân lý duy nhất (Single Source of Truth).
* Toàn bộ mã nguồn, các API contracts, schema dữ liệu và kịch bản kiểm thử đều được viết dựa trên Spec đã được phê duyệt, giúp giảm thiểu sai lệch giữa yêu cầu nghiệp vụ và code thực tế.

### 2. Quality Gate trong CI/CD là gì?
* Là một "cửa kiểm soát chất lượng" tự động trong pipeline CI/CD (GitHub Actions / GitLab CI).
* Nếu mã nguồn hoặc tài liệu không đạt chuẩn (ví dụ: vi phạm linter, fail test case, cấu trúc Markdown thiếu các trường bắt buộc, hoặc độ phủ test dưới ngưỡng), Quality Gate sẽ **chặn đứng** luồng deploy và không cho phép merge code vào Production.

---

## 🎯 PHẦN 5: CÂU HỎI TÌNH HUỐNG & ĐẶT CÂU HỎI CHO MENTOR

### Câu hỏi: "Tại sao em chọn hướng Frontend Portal mà không phải Backend hay Data?"
> **Trả lời:**
> "Dạ, em nhận thấy trong một hệ thống AI Agent phức tạp, backend và pipeline dữ liệu dù mạnh đến đâu nhưng nếu thiếu một **Cổng điều hành (Frontend Portal)** trực quan thì đội ngũ kỹ sư và người vận hành sẽ rất khó giám sát, phát hiện lỗi nghẽn và tin tưởng vào kết quả của Agent.
> Với thế mạnh vững chắc về React 18, TypeScript và Vite, em tự tin mình có thể xây dựng giao diện vận hành mượt mà, hiển thị rõ ràng từng trạng thái pipeline và danh sách lỗi validation, giúp team quản lý luồng agent một cách minh bạch và hiệu quả nhất ạ."

### Câu hỏi ngược lại dành cho Mentor ở cuối buổi:
1. *"Dạ cho em hỏi hiện tại AI-Agents Team tại Long Châu đang ưu tiên giải quyết bài toán nghiệp vụ nào lớn nhất (ví dụ: tối ưu chuỗi cung ứng kho dược, tra cứu thông tin thuốc hay hỗ trợ dược sĩ tư vấn)?"*
2. *"Frontend Portal của team hiện tại đang được xây dựng từ đầu hay đang mở rộng trên một nền tảng sẵn có, và các bạn intern sẽ đóng góp trực tiếp vào module nào đầu tiên ạ?"*
