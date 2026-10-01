/**
 * ===================================================================
 * CV EDITOR MOBILE CONTROLLER (js/cv-mobile.js)
 * ===================================================================
 * Xử lý toàn bộ tương tác điều khiển trên thiết bị di động (<= 992px):
 * 1. Top bar: Chuyển nhanh 43 bản CV & Đổi ngôn ngữ VI/EN.
 * 2. Bottom bar: Truy cập 1-chạm Phỏng vấn, Email, In PDF, Tiến độ.
 * 3. Bottom Sheet Drawer: Cỡ chữ A-/A+, Magic Fit, Khung A4, So khớp JD.
 * ===================================================================
 */

(function () {
  function initMobileController() {
    // 1. Đồng bộ tên bản CV hiện tại lên Mobile Top Bar
    updateCurrentVersionTitle();

    // 2. Gắn sự kiện các nút Bottom Bar
    bindBottomBarActions();

    // 3. Gắn sự kiện Bottom Sheet Drawer (Tiện ích)
    bindDrawerActions();

    // 4. Gắn sự kiện Modal chọn phiên bản CV
    bindVersionModalActions();

    // 5. Đồng bộ nút đổi ngôn ngữ VI/EN trên Mobile Top Bar
    bindLangSwitchActions();

    // 6. Lắng nghe thay đổi cỡ chữ từ desktop để đồng bộ lên mobile
    syncFontSize();
  }

  /**
   * Cập nhật tên bản CV hiện tại lên Mobile Top Bar
   */
  function updateCurrentVersionTitle() {
    const titleEl = document.getElementById("mobileCurrentVersionText");
    if (!titleEl) return;

    const urlParams = new URLSearchParams(window.location.search);
    const currentKey = urlParams.get("type") || "default";

    if (window.CV_MANIFEST && Array.isArray(window.CV_MANIFEST)) {
      const found = window.CV_MANIFEST.find(item => item.key === currentKey);
      if (found) {
        titleEl.textContent = found.label || `📦 ${found.key}`;
        return;
      }
    }
    titleEl.textContent = "📦 Chọn bản CV";
  }

  /**
   * Gắn sự kiện cho các nút trên Mobile Bottom Bar
   */
  function bindBottomBarActions() {
    const navInterview = document.getElementById("mobileNavInterview");
    const navEmail = document.getElementById("mobileNavEmail");
    const navPrint = document.getElementById("mobileNavPrint");
    const navTracker = document.getElementById("mobileNavTracker");
    const navTools = document.getElementById("mobileNavTools");

    // Ôn phỏng vấn
    if (navInterview) {
      navInterview.addEventListener("click", () => {
        const originBtn = document.getElementById("interviewPrepBtn");
        if (originBtn) originBtn.click();
      });
    }

    // Soạn thư & Email
    if (navEmail) {
      navEmail.addEventListener("click", () => {
        const originBtn = document.getElementById("coverLetterBtn");
        if (originBtn) originBtn.click();
      });
    }

    // In / Lưu PDF
    if (navPrint) {
      navPrint.addEventListener("click", () => {
        const originBtn = document.getElementById("downloadBtn");
        if (originBtn) originBtn.click();
        else window.print();
      });
    }

    // Tiến độ ứng tuyển
    if (navTracker) {
      navTracker.addEventListener("click", () => {
        const originBtn = document.getElementById("jobTrackerBtn");
        if (originBtn) originBtn.click();
      });
    }

    // Nút mở Drawer Tiện ích
    if (navTools) {
      navTools.addEventListener("click", toggleMobileDrawer);
    }
  }

  /**
   * Điều khiển Bottom Sheet Drawer
   */
  function toggleMobileDrawer() {
    const overlay = document.getElementById("mobileDrawerOverlay");
    if (!overlay) return;

    const isOpen = overlay.classList.contains("open");
    if (isOpen) {
      overlay.classList.remove("open");
    } else {
      overlay.classList.add("open");
      syncFontSize();
    }
  }

  function bindDrawerActions() {
    const overlay = document.getElementById("mobileDrawerOverlay");
    const closeBtn = document.getElementById("mobileDrawerCloseBtn");

    if (closeBtn) {
      closeBtn.addEventListener("click", toggleMobileDrawer);
    }

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) toggleMobileDrawer();
      });
    }

    // Đổi cỡ chữ A- / A+
    const btnDec = document.getElementById("mobileFontDecrease");
    const btnInc = document.getElementById("mobileFontIncrease");

    if (btnDec) {
      btnDec.addEventListener("click", () => {
        const originBtn = document.getElementById("font-decrease");
        if (originBtn) originBtn.click();
        syncFontSize();
      });
    }

    if (btnInc) {
      btnInc.addEventListener("click", () => {
        const originBtn = document.getElementById("font-increase");
        if (originBtn) originBtn.click();
        syncFontSize();
      });
    }

    // Các nút chức năng trong Drawer -> Trigger nút gốc tương ứng
    bindTriggerAction("mobileMagicFitBtn", "magicFitBtn", true);
    bindTriggerAction("mobileA4PreviewBtn", "a4PreviewBtn", true);
    bindTriggerAction("mobileResetBtn", "resetBtn", true);
    bindTriggerAction("mobileResetDataBtn", "resetDataBtn", true);
    bindTriggerAction("mobileAtsBtn", "atsMatchBtn", true);
    bindTriggerAction("mobileHrViewBtn", "hrViewBtn", true);
    bindTriggerAction("mobileLiveEditBtn", "liveEditBtn", true);
    bindTriggerAction("mobileDiffBtn", "diffBtn", true);
    bindTriggerAction("mobileSettingsBtn", "settingsBtn", true);
    bindTriggerAction("mobileHotkeysBtn", "hotkeysBtn", true);
  }

  function bindTriggerAction(mobileId, desktopId, closeDrawerAfter = false) {
    const mobileBtn = document.getElementById(mobileId);
    if (!mobileBtn) return;

    mobileBtn.addEventListener("click", () => {
      const desktopBtn = document.getElementById(desktopId);
      if (desktopBtn) desktopBtn.click();
      if (closeDrawerAfter) toggleMobileDrawer();
    });
  }

  /**
   * Đồng bộ hiển thị cỡ chữ
   */
  function syncFontSize() {
    const displayDesktop = document.getElementById("fontSizeDisplay");
    const displayMobile = document.getElementById("mobileFontDisplay");
    if (displayDesktop && displayMobile) {
      displayMobile.textContent = displayDesktop.textContent || "10.5pt";
    }
  }

  /**
   * Modal chọn bản CV trên Mobile
   */
  function bindVersionModalActions() {
    const versionBtn = document.getElementById("mobileVersionBtn");
    const modalOverlay = document.getElementById("mobileVersionsOverlay");
    const closeBtn = document.getElementById("mobileVersionsCloseBtn");
    const searchInput = document.getElementById("mobileVersionsSearchInput");
    const listContainer = document.getElementById("mobileVersionsList");
    const countEl = document.getElementById("mobileVersionCount");

    if (!versionBtn || !modalOverlay) return;

    // Mở modal
    versionBtn.addEventListener("click", () => {
      renderMobileVersionList();
      modalOverlay.classList.add("open");
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
    });

    // Đóng modal
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("open");
      });
    }

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open");
      }
    });

    // Lọc danh sách bản CV
    if (searchInput && listContainer) {
      searchInput.addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase();
        const items = listContainer.querySelectorAll(".mobile-version-item");
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          const match = !q || text.includes(q);
          item.style.display = match ? "flex" : "none";
        });
      });
    }

    function renderMobileVersionList() {
      if (!listContainer) return;
      listContainer.innerHTML = "";

      const manifest = window.CV_MANIFEST || [];
      if (countEl) countEl.textContent = manifest.length;

      const urlParams = new URLSearchParams(window.location.search);
      const currentKey = urlParams.get("type") || "default";

      manifest.forEach(item => {
        const a = document.createElement("a");
        a.className = "mobile-version-item" + (item.key === currentKey ? " active" : "");
        a.href = `?type=${encodeURIComponent(item.key)}`;
        a.innerHTML = `
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 700; color: ${item.key === currentKey ? '#fff' : '#0f172a'}; font-size: 13px; line-height: 1.35;">${item.label || item.key}</div>
            <div style="font-size: 11px; opacity: ${item.key === currentKey ? '0.85' : '0.6'}; margin-top: 3px; font-family: monospace;">type=${item.key}</div>
          </div>
          ${item.key === currentKey ? '<span style="font-size: 16px; margin-left: 8px;">✓</span>' : ''}
        `;
        listContainer.appendChild(a);
      });
    }
  }

  /**
   * Đổi ngôn ngữ VI / EN trên Mobile Top Bar
   */
  function bindLangSwitchActions() {
    const viBtn = document.getElementById("mobileLangVi");
    const enBtn = document.getElementById("mobileLangEn");
    const origVi = document.getElementById("lang-vi");
    const origEn = document.getElementById("lang-en");

    if (viBtn && origVi) {
      viBtn.addEventListener("click", () => {
        origVi.click();
        viBtn.classList.add("active");
        if (enBtn) enBtn.classList.remove("active");
      });
    }

    if (enBtn && origEn) {
      enBtn.addEventListener("click", () => {
        origEn.click();
        enBtn.classList.add("active");
        if (viBtn) viBtn.classList.remove("active");
      });
    }
  }

  // Khởi động khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileController);
  } else {
    initMobileController();
  }
})();
