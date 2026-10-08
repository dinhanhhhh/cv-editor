// =========================================================================
// A4 METRICS & MAGIC FIT ENGINE (MODULE)
// Đo đạc kích thước A4 chuẩn in & Tự động căn chỉnh vừa 1 trang
// Tách từ js/cv-renderer.js để tối ưu hóa module và bảo trì
// =========================================================================

(function () {
  let cachedA4TargetPx = 0;

  function getA4TargetHeight() {
    if (cachedA4TargetPx > 0) return cachedA4TargetPx;
    const probe = document.createElement("div");
    probe.style.cssText =
      "height: 297mm; position: absolute; visibility: hidden; pointer-events: none; top: -9999px; left: -9999px;";
    document.body.appendChild(probe);
    const h = probe.getBoundingClientRect().height;
    document.body.removeChild(probe);
    cachedA4TargetPx = h > 0 ? h : 1122.5;
    return cachedA4TargetPx;
  }

  function getActualContentHeight() {
    const preview = document.getElementById("cvContent");
    if (!preview) return 0;

    const computedStyle = window.getComputedStyle(preview);
    const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
    const previewRect = preview.getBoundingClientRect();

    // Lọc các khối nội dung hiển thị trực tiếp bên trong CV
    const children = Array.from(preview.children).filter((el) => {
      if (el.nodeType !== Node.ELEMENT_NODE) return false;
      if (
        el.classList.contains("section-toolbar") ||
        el.classList.contains("feedback-tooltip")
      )
        return false;
      if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return false;
      if (
        el.offsetWidth === 0 &&
        el.offsetHeight === 0 &&
        el.style.display === "none"
      )
        return false;
      return true;
    });

    if (children.length === 0) {
      return preview.scrollHeight;
    }

    // Tìm đáy của phần tử hiển thị sâu nhất
    let maxBottom = previewRect.top;
    for (const child of children) {
      const r = child.getBoundingClientRect();
      if (r.bottom > maxBottom) {
        maxBottom = r.bottom;
      }
    }

    // Tổng chiều cao nội dung = từ đỉnh trang tới đáy phần tử cuối cùng + khoảng cách lề dưới
    return maxBottom - previewRect.top + paddingBottom;
  }

  function magicFit() {
    const preview = document.getElementById("cvContent");
    const magicFitBtn = document.getElementById("magicFitBtn");
    if (!preview) return;

    const targetHeight = getA4TargetHeight();
    const safeTargetHeight = targetHeight * 0.97; // Ngưỡng an toàn 97% không bao giờ chạm mép tràn

    preview.style.height = "auto";
    preview.style.overflow = "visible";

    let currentBaseFontSize =
      typeof window.baseFontSize === "number" ? window.baseFontSize : 10.5;
    currentBaseFontSize = Math.min(Math.max(currentBaseFontSize, 10), 11);
    let currentLineHeight = 1.35;
    let currentPaddingSide = 15;
    let sectionMargin = 12;
    let itemMargin = 8;

    function applyStyles() {
      if (typeof window.setBaseFontSize === "function") {
        window.setBaseFontSize(currentBaseFontSize);
      } else {
        window.baseFontSize = currentBaseFontSize;
        preview.style.setProperty(
          "--cv-base-font-size",
          currentBaseFontSize.toFixed(1) + "pt",
        );
        const fsDisplay = document.getElementById("fontSizeDisplay");
        if (fsDisplay)
          fsDisplay.textContent = currentBaseFontSize.toFixed(1) + "pt";
      }

      preview.style.lineHeight = currentLineHeight;
      preview.style.padding = `0 ${currentPaddingSide}mm 10mm ${currentPaddingSide}mm`;
      preview.style.setProperty("--cv-section-margin", sectionMargin + "px");
      preview.style.setProperty("--cv-item-margin", itemMargin + "px");

      const drawerSec = document.getElementById("drawerSectionMarginSlider");
      const drawerSecVal = document.getElementById("drawerSectionMarginVal");
      if (drawerSec) drawerSec.value = sectionMargin;
      if (drawerSecVal) drawerSecVal.textContent = sectionMargin + "px";

      const drawerItem = document.getElementById("drawerItemMarginSlider");
      const drawerItemVal = document.getElementById("drawerItemMarginVal");
      if (drawerItem) drawerItem.value = itemMargin;
      if (drawerItemVal) drawerItemVal.textContent = itemMargin + "px";

      // Ép trình duyệt tính toán lại layout (force reflow) để đo đạc chính xác
      void preview.offsetHeight;
    }

    applyStyles();

    let safety = 0;
    const maxIter = 60;

    // Phase 1: Nếu tràn vượt quá ngưỡng an toàn (> 97% A4) -> Thu nhỏ dần
    while (getActualContentHeight() > safeTargetHeight && safety < maxIter) {
      let changed = false;
      if (sectionMargin > 6) {
        sectionMargin -= 1;
        changed = true;
      } else if (itemMargin > 4) {
        itemMargin -= 1;
        changed = true;
      } else if (currentLineHeight > 1.25) {
        currentLineHeight -= 0.03;
        changed = true;
      } else if (currentBaseFontSize > 9.0) {
        currentBaseFontSize -= 0.2;
        changed = true;
      } else if (currentPaddingSide > 10) {
        currentPaddingSide -= 0.5;
        changed = true;
      }

      applyStyles();
      safety++;
      if (!changed) break;
    }

    safety = 0;
    // Phase 2: Nếu quá ngắn (< 90% A4) -> Nới rộng nhẹ nhàng, dừng ngay khi đạt 94-96%
    while (getActualContentHeight() < targetHeight * 0.91 && safety < maxIter) {
      let changed = false;
      if (sectionMargin < 16) {
        sectionMargin += 1;
        changed = true;
      } else if (itemMargin < 10) {
        itemMargin += 1;
        changed = true;
      } else if (currentLineHeight < 1.45) {
        currentLineHeight += 0.03;
        changed = true;
      } else if (currentBaseFontSize < 11.0) {
        currentBaseFontSize += 0.2;
        changed = true;
      }

      applyStyles();
      safety++;
      if (!changed || getActualContentHeight() >= safeTargetHeight) break;
    }

    // Chốt chặn an toàn cuối cùng: nếu vẫn vô tình lố sang 100% -> lùi 1 nấc
    if (getActualContentHeight() > targetHeight) {
      if (sectionMargin > 6) sectionMargin -= 2;
      if (itemMargin > 4) itemMargin -= 2;
      if (currentBaseFontSize > 9.5) currentBaseFontSize -= 0.2;
      applyStyles();
    }

    const finalOverflowing = getActualContentHeight() > targetHeight;

    const isA4Mode = preview.classList.contains("a4-mode");
    if (isA4Mode) {
      preview.style.height = "297mm";
      preview.style.overflow = "hidden";
    } else {
      preview.style.height = "auto";
      preview.style.overflow = "visible";
    }

    if (magicFitBtn) {
      if (finalOverflowing) {
        magicFitBtn.innerHTML = "Tràn nội dung! ⚠️";
        magicFitBtn.style.backgroundColor = "#e05638";
        magicFitBtn.style.color = "#ffffff";
        setTimeout(() => {
          magicFitBtn.innerHTML = "Magic Fit ✨";
          magicFitBtn.style.backgroundColor = "";
          magicFitBtn.style.color = "";
        }, 4000);
      } else {
        magicFitBtn.innerHTML = "Perfect Fit! ✨";
        setTimeout(() => {
          magicFitBtn.innerHTML = "Magic Fit ✨";
        }, 2000);
      }
    }

    requestAnimationFrame(updateA4FitMeter);
  }

  function updateA4FitMeter() {
    const preview = document.getElementById("cvContent");
    if (!preview) return;

    const meter = document.getElementById("a4FitMeter");
    const percentEl = document.getElementById("a4FitPercent");
    const progressEl = document.getElementById("a4FitProgress");
    const statusEl = document.getElementById("a4FitStatus");
    if (!meter || !percentEl || !progressEl || !statusEl) return;

    const targetPx = getA4TargetHeight();
    const actualHeight = getActualContentHeight();

    const ratio = (actualHeight / targetPx) * 100;
    const percent = Math.round(ratio);
    window.currentA4FitPercent = percent;

    percentEl.textContent = `${percent}%`;
    progressEl.style.width = `${Math.min(percent, 100)}%`;

    meter.classList.remove(
      "status-spacious",
      "status-perfect",
      "status-tight",
      "status-overflow",
    );

    const lang = window.currentLang || "vi";
    if (percent <= 88) {
      meter.classList.add("status-spacious");
      statusEl.textContent = lang === "vi" ? "Rộng rãi ✨" : "Spacious ✨";
    } else if (percent <= 98) {
      meter.classList.add("status-perfect");
      statusEl.textContent =
        lang === "vi" ? "Vừa vặn 1 trang ✓" : "Perfect 1 Page ✓";
    } else if (percent <= 100) {
      meter.classList.add("status-tight");
      statusEl.textContent =
        lang === "vi" ? "Sát mép (99-100%)" : "Close to edge";
    } else {
      meter.classList.add("status-overflow");
      const over = percent - 100;
      statusEl.textContent =
        lang === "vi" ? `Tràn trang (+${over}%) ⚠️` : `Overflow (+${over}%) ⚠️`;
    }
  }

  function initA4Metrics() {
    const preview = document.getElementById("cvContent");
    const magicFitBtn = document.getElementById("magicFitBtn");
    const a4FitMeterEl = document.getElementById("a4FitMeter");

    if (magicFitBtn) {
      magicFitBtn.onclick = magicFit;
    }

    if (a4FitMeterEl) {
      a4FitMeterEl.onclick = magicFit;
    }

    if (preview) {
      if (window.ResizeObserver) {
        const resizeObs = new ResizeObserver(() =>
          requestAnimationFrame(updateA4FitMeter),
        );
        resizeObs.observe(preview);
      }

      preview.addEventListener("input", () =>
        requestAnimationFrame(updateA4FitMeter),
      );

      if (window.MutationObserver) {
        const mutObs = new MutationObserver(() =>
          requestAnimationFrame(updateA4FitMeter),
        );
        mutObs.observe(preview, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }
    }

    window.addEventListener("resize", () => {
      cachedA4TargetPx = 0;
      requestAnimationFrame(updateA4FitMeter);
    });

    requestAnimationFrame(updateA4FitMeter);
  }

  // Export sang scope toàn cục (dùng namespace để tránh đụng độ tên)
  window.CvA4Metrics = {
    getA4TargetHeight,
    getActualContentHeight,
    magicFit,
    updateA4FitMeter,
    initA4Metrics,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initA4Metrics);
  } else {
    initA4Metrics();
  }
})();
