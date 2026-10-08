# Build & Data Verification Check

Kiểm tra tính hợp lệ và toàn vẹn của mã nguồn dự án CV Editor:

1. Chạy kịch bản kiểm tra dữ liệu và manifest:
   ```bash
   node scripts/verify-cv-data.js
   ```
2. Kiểm tra cú pháp JavaScript thuần:
   ```bash
   node --check js/cv-router.js
   node --check js/cv-renderer.js
   node --check data/cv-data-base.js
   node --check cloudflare-worker.js
   ```
3. Báo cáo:
   - ✅ Nếu vượt qua → Báo "✅ Verification passed" (0 lỗi, số lượng CV phiên bản hợp lệ).
   - ❌ Nếu phát hiện lỗi → Chỉ rõ file, dòng vi phạm quy tắc AGENTS.md (role "Developer", ngày thực tập Tami, tiêu đề mục, XSS).

Không tự ý thêm thư viện build nặng. Dự án tuân thủ triết lý Zero-build Vanilla JS.
