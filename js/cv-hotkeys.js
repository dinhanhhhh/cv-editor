/**
 * CV Editor - Hệ thống Phím tắt thao tác nhanh (Hotkeys Manager)
 * Hỗ trợ tăng tốc độ thao tác: Xuất PDF, Mở Email, Ôn phỏng vấn, Tracker, Magic Fit...
 */
(function () {
  'use strict';

  // Kiểm tra xem người dùng có đang gõ văn bản không
  function isTypingContext(e) {
    const activeEl = document.activeElement;
    if (!activeEl) return false;
    const tag = activeEl.tagName ? activeEl.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
    if (activeEl.isContentEditable || activeEl.getAttribute('contenteditable') === 'true') return true;
    return false;
  }

  // Danh sách các modal có thể đóng bằng phím ESC
  function closeTopModal() {
    const modals = [
      document.getElementById('hotkeysModalOverlay'),
      document.getElementById('jtJdModalOverlay'),
      document.getElementById('jobTrackerModalOverlay'),
      document.getElementById('interviewModalOverlay'),
      document.getElementById('clModalOverlay'),
      document.getElementById('atsModalOverlay'),
      document.getElementById('diffModalOverlay'),
      document.getElementById('settingsDrawerOverlay'),
      document.getElementById('exportModalOverlay')
    ];

    for (const modal of modals) {
      if (modal && modal.style.display !== 'none' && !modal.classList.contains('hidden')) {
        // Tìm nút đóng nếu có
        const closeBtn = modal.querySelector('.cl-modal-close') || modal.querySelector('.cl-btn-secondary') || modal.querySelector('button[aria-label="Đóng"]');
        if (closeBtn) {
          closeBtn.click();
        } else {
          modal.style.display = 'none';
        }
        return true;
      }
    }
    return false;
  }

  // Khởi tạo HTML cho Modal Bảng tra cứu phím tắt
  function injectHotkeysModal() {
    if (document.getElementById('hotkeysModalOverlay')) return;

    const modalHtml = `
      <div class="cl-modal-overlay hotkeys-modal-overlay" id="hotkeysModalOverlay" style="display: none;" role="dialog" aria-modal="true" aria-labelledby="hotkeysModalTitle">
        <div class="cl-modal hotkeys-modal">
          <div class="cl-modal-header hotkeys-modal-header">
            <div class="hotkeys-header-left">
              <span class="cl-modal-icon">⌨️</span>
              <div>
                <h2 class="cl-modal-title" id="hotkeysModalTitle">Phím tắt thao tác nhanh</h2>
                <div class="hotkeys-modal-subtitle">Tăng tốc độ làm việc và chuẩn bị hồ sơ ứng tuyển gấp 3 lần</div>
              </div>
            </div>
            <button type="button" class="cl-modal-close" id="hotkeysModalCloseBtn" aria-label="Đóng">&times;</button>
          </div>

          <div class="hotkeys-modal-body">
            <div class="hotkeys-grid">
              
              <!-- Nhóm 1: Thao tác trang CV -->
              <div class="hotkeys-group">
                <div class="hotkeys-group-title">📄 Thao tác Trang & In ấn</div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>Ctrl</kbd> + <kbd>P</kbd> hoặc <kbd>P</kbd></div>
                  <div class="hotkey-desc">Xuất file PDF / Mở hộp thoại In</div>
                </div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>M</kbd></div>
                  <div class="hotkey-desc"><b>Magic Fit</b> (Tự động co vừa khít 1 trang A4)</div>
                </div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>+</kbd> / <kbd>-</kbd></div>
                  <div class="hotkey-desc">Tăng hoặc giảm cỡ chữ CV (±0.5pt)</div>
                </div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>L</kbd></div>
                  <div class="hotkey-desc">Bật / Tắt chế độ <b>Chỉnh sửa trực tiếp</b> (Live Edit)</div>
                </div>
              </div>

              <!-- Nhóm 2: Công cụ ứng tuyển -->
              <div class="hotkeys-group">
                <div class="hotkeys-group-title">🎯 Bộ công cụ Ứng tuyển</div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>E</kbd></div>
                  <div class="hotkey-desc">Mở <b>Soạn Email & Thư giới thiệu</b> (Cover Letter)</div>
                </div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>I</kbd></div>
                  <div class="hotkey-desc">Mở <b>Cẩm nang Phỏng vấn 1-Click</b> (STAR Q&A)</div>
                </div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>T</kbd></div>
                  <div class="hotkey-desc">Mở <b>Tiến độ ứng tuyển</b> (Job Tracker)</div>
                </div>
                <div class="hotkey-item">
                  <div class="hotkey-keys"><kbd>S</kbd></div>
                  <div class="hotkey-desc">Mở ngăn kéo <b>Cấu hình bố cục & màu sắc</b></div>
                </div>
              </div>

            </div>

            <!-- Nhóm 3: Điều hướng hệ thống -->
            <div class="hotkeys-footer-tips">
              <div class="hotkey-item inline">
                <span class="hotkey-keys"><kbd>Esc</kbd></span>
                <span class="hotkey-desc">Đóng nhanh hộp thoại / modal đang mở</span>
              </div>
              <div class="hotkey-item inline">
                <span class="hotkey-keys"><kbd>?</kbd></span>
                <span class="hotkey-desc">Mở / Đóng bảng tra cứu phím tắt này</span>
              </div>
              <div class="hotkey-item inline">
                <span class="hotkey-keys"><kbd>Enter</kbd></span>
                <span class="hotkey-desc">Mở ngay bản CV đầu tiên khi tìm kiếm</span>
              </div>
            </div>
          </div>

          <div class="cl-modal-footer hotkeys-modal-footer">
            <span class="hotkeys-hint-note">💡 Phím tắt chỉ hoạt động khi bạn không gõ phím bên trong các ô nhập liệu.</span>
            <button type="button" class="cl-btn-primary" id="hotkeysConfirmBtn">Đã hiểu ✓</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const overlay = document.getElementById('hotkeysModalOverlay');
    const closeBtn = document.getElementById('hotkeysModalCloseBtn');
    const confirmBtn = document.getElementById('hotkeysConfirmBtn');

    function closeModal() {
      overlay.style.display = 'none';
    }

    if (closeBtn) closeBtn.onclick = closeModal;
    if (confirmBtn) confirmBtn.onclick = closeModal;
    if (overlay) {
      overlay.onclick = (e) => {
        if (e.target === overlay) closeModal();
      };
    }
  }

  function toggleHotkeysModal() {
    injectHotkeysModal();
    const overlay = document.getElementById('hotkeysModalOverlay');
    if (!overlay) return;
    if (overlay.style.display === 'none' || !overlay.style.display) {
      overlay.style.display = 'flex';
    } else {
      overlay.style.display = 'none';
    }
  }

  // Khởi tạo các sự kiện lắng nghe phím
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // 1. Phím ESC: luôn cho phép đóng modal
      if (e.key === 'Escape') {
        const closed = closeTopModal();
        if (closed) {
          e.preventDefault();
        }
        return;
      }

      // 2. Ctrl + P: Xuất/In PDF CV
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
          downloadBtn.click();
        } else {
          window.print();
        }
        return;
      }

      // Nếu đang trong ngữ cảnh gõ văn bản thì bỏ qua các phím tắt đơn
      if (isTypingContext(e)) return;

      // Không xử lý nếu đang giữ Ctrl, Alt, Meta (trừ khi cố ý)
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const key = e.key;

      switch (key) {
        // Phím ?: Mở danh sách phím tắt
        case '?':
          e.preventDefault();
          toggleHotkeysModal();
          break;

        // Phím P: In/Tải PDF
        case 'p':
        case 'P': {
          e.preventDefault();
          const btn = document.getElementById('downloadBtn');
          if (btn) btn.click();
          break;
        }

        // Phím E: Mở modal Email & Thư ứng tuyển
        case 'e':
        case 'E': {
          e.preventDefault();
          const btn = document.getElementById('coverLetterBtn');
          if (btn) btn.click();
          break;
        }

        // Phím I: Mở Cẩm nang phỏng vấn
        case 'i':
        case 'I': {
          e.preventDefault();
          const btn = document.getElementById('interviewPrepBtn');
          if (btn) btn.click();
          break;
        }

        // Phím T: Mở Tracker ứng tuyển
        case 't':
        case 'T': {
          e.preventDefault();
          const btn = document.getElementById('jobTrackerBtn');
          if (btn) btn.click();
          break;
        }

        // Phím M: Kích hoạt Magic Fit
        case 'm':
        case 'M': {
          e.preventDefault();
          const btn = document.getElementById('magicFitBtn');
          if (btn) btn.click();
          break;
        }

        // Phím + hoặc =: Tăng font size
        case '+':
        case '=': {
          e.preventDefault();
          const btn = document.getElementById('font-increase');
          if (btn) btn.click();
          break;
        }

        // Phím - hoặc _: Giảm font size
        case '-':
        case '_': {
          e.preventDefault();
          const btn = document.getElementById('font-decrease');
          if (btn) btn.click();
          break;
        }

        // Phím L: Bật/Tắt Live Edit
        case 'l':
        case 'L': {
          e.preventDefault();
          const btn = document.getElementById('liveEditBtn');
          if (btn) btn.click();
          break;
        }

        // Phím S: Cấu hình CV
        case 's':
        case 'S': {
          e.preventDefault();
          const btn = document.getElementById('settingsBtn');
          if (btn) btn.click();
          break;
        }

        default:
          break;
      }
    });

    // Gắn sự kiện cho nút Phím tắt trên thanh công cụ nếu có
    const hotkeysBtn = document.getElementById('hotkeysBtn');
    if (hotkeysBtn) {
      hotkeysBtn.onclick = () => toggleHotkeysModal();
    }
  }

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectHotkeysModal();
      initKeyboardShortcuts();
    });
  } else {
    injectHotkeysModal();
    initKeyboardShortcuts();
  }

  // Xuất ra global scope nếu cần gọi thủ công
  window.cvHotkeys = {
    toggleModal: toggleHotkeysModal
  };
})();
