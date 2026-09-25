// ===================================
// CV Data & Logic
// ===================================

// Escape HTML để chống XSS khi nhét dữ liệu vào innerHTML.
// Dữ liệu CV có thể đến từ pipeline AI/Telegram nên không tin tưởng tuyệt đối.
function esc(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Escape riêng cho giá trị dùng trong thuộc tính href (chỉ cho phép scheme an toàn).
function escUrl(url) {
  if (!url) return "";
  const trimmed = String(url).trim();
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) {
    return esc(trimmed);
  }
  // Scheme lạ (javascript:, data:...) bị loại bỏ
  return "";
}

const icons = {
  phone: `<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  email: `<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
  github: `<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/></svg>`,
  address: `<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

// cvData được load từ file data tương ứng (khai báo trước script này trong HTML)

// ===================================
// STATE
// ===================================
const urlParams = new URLSearchParams(window.location.search);
const cvVersion = (typeof window.cvVersion !== "undefined" && window.cvVersion)
  ? window.cvVersion
  : (urlParams.get("draft") ? ("draft_" + urlParams.get("draft")) : (urlParams.get("type") || "default"));
window.cvVersion = cvVersion;

let currentLang = "vi";
let baseFontSize = 10.5;
const DEFAULT_FONT_SIZE = 10.5;
const DEFAULT_LINE_HEIGHT = "1.3";
const DEFAULT_PADDING = "6mm 15mm 10mm 15mm";
const DEFAULT_SECTION_MARGIN = "10px";
const DEFAULT_ITEM_MARGIN = "8px";

const labels = {
  vi: {
    role: "Vai trò",
    description: "Mô tả",
    technologies: "Công nghệ",
    github: "GitHub",
    demo: "Demo",
    repoBackend: "Backend",
    repoFrontend: "Frontend",
    repoDefault: "Repo",
  },
  en: {
    role: "Role",
    description: "Description",
    technologies: "Technologies",
    github: "GitHub",
    demo: "Demo",
    repoBackend: "Backend",
    repoFrontend: "Frontend",
    repoDefault: "Repo",
  },
};

const elements = {
  preview: document.getElementById("cvContent"),
  fontSizeDisplay: document.getElementById("fontSizeDisplay"),
  a4PreviewBtn: document.getElementById("a4PreviewBtn"),
  magicFitBtn: document.getElementById("magicFitBtn"),
  resetBtn: document.getElementById("resetBtn"),
  resetDataBtn: document.getElementById("resetDataBtn"),
  langViBtn: document.getElementById("lang-vi"),
  langEnBtn: document.getElementById("lang-en"),
  fontIncreaseBtn: document.getElementById("font-increase"),
  fontDecreaseBtn: document.getElementById("font-decrease"),
  downloadBtn: document.getElementById("downloadBtn"),
  downloadBtnText: document.getElementById("btn-text"),
  sectionMarginSlider: null,
  sectionMarginVal: null,
  itemMarginSlider: null,
  itemMarginVal: null,
};

// ===================================
// FONT CUSTOMIZER
// ===================================
function updateFontSize() {
  elements.preview.style.setProperty(
    "--cv-base-font-size",
    baseFontSize.toFixed(1) + "pt",
  );
  elements.fontSizeDisplay.textContent = baseFontSize.toFixed(1) + "pt";
  if (typeof updateA4FitMeter === "function") {
    requestAnimationFrame(updateA4FitMeter);
  }
}

function initSpacingCustomizer() {
  const fontCustomizer = document.querySelector(".font-customizer");
  if (!fontCustomizer) return;

  const sectionLabelText = currentLang === "vi" ? "↕️ Phần:" : "↕️ Section:";
  const itemLabelText = currentLang === "vi" ? "↕️ Mục:" : "↕️ Item:";

  const d = (typeof cvData !== "undefined" && cvData[currentLang]) ? cvData[currentLang] : {};
  const currentSectionMargin = d.sectionMargin || DEFAULT_SECTION_MARGIN;
  const currentItemMargin = d.itemMargin || DEFAULT_ITEM_MARGIN;
  const secInt = parseInt(currentSectionMargin) || 10;
  const itemInt = parseInt(currentItemMargin) || 8;

  // Check if already created
  if (document.getElementById("sectionMarginSlider")) {
    const labels = document.querySelectorAll(".spacing-customizer .slider-label");
    if (labels.length >= 2) {
      labels[0].textContent = sectionLabelText;
      labels[0].title = currentLang === 'vi' ? 'Khoảng cách phần' : 'Section margin';
      labels[1].textContent = itemLabelText;
      labels[1].title = currentLang === 'vi' ? 'Khoảng cách mục' : 'Item margin';
    }
    
    // Sync slider values
    if (elements.sectionMarginSlider) {
      elements.sectionMarginSlider.value = secInt;
      elements.sectionMarginVal.textContent = secInt + "px";
    }
    if (elements.itemMarginSlider) {
      elements.itemMarginSlider.value = itemInt;
      elements.itemMarginVal.textContent = itemInt + "px";
    }
    return;
  }

  const spacingCustomizer = document.createElement("div");
  spacingCustomizer.className = "spacing-customizer";
  spacingCustomizer.setAttribute("aria-label", currentLang === "vi" ? "Tùy chỉnh khoảng cách" : "Customize spacing");

  spacingCustomizer.innerHTML = `
    <div class="slider-wrapper">
      <span class="slider-label" title="${currentLang === 'vi' ? 'Khoảng cách phần' : 'Section margin'}">${sectionLabelText}</span>
      <input type="range" id="sectionMarginSlider" min="4" max="35" value="${secInt}" class="margin-slider" aria-label="${currentLang === 'vi' ? 'Khoảng cách phần' : 'Section margin'}">
      <span class="slider-value" id="sectionMarginVal">${secInt}px</span>
    </div>
    <div class="slider-wrapper">
      <span class="slider-label" title="${currentLang === 'vi' ? 'Khoảng cách mục' : 'Item margin'}">${itemLabelText}</span>
      <input type="range" id="itemMarginSlider" min="2" max="25" value="${itemInt}" class="margin-slider" aria-label="${currentLang === 'vi' ? 'Khoảng cách mục' : 'Item margin'}">
      <span class="slider-value" id="itemMarginVal">${itemInt}px</span>
    </div>
  `;

  // Insert after .font-lang-row container (or fallback to .font-customizer)
  const insertAnchor = fontCustomizer.closest(".font-lang-row") || fontCustomizer;
  insertAnchor.parentNode.insertBefore(spacingCustomizer, insertAnchor.nextSibling);

  // Bind references to elements
  elements.sectionMarginSlider = document.getElementById("sectionMarginSlider");
  elements.sectionMarginVal = document.getElementById("sectionMarginVal");
  elements.itemMarginSlider = document.getElementById("itemMarginSlider");
  elements.itemMarginVal = document.getElementById("itemMarginVal");

  // Add event listeners
  elements.sectionMarginSlider.oninput = (e) => {
    const val = parseInt(e.target.value);
    elements.sectionMarginVal.textContent = val + "px";
    elements.preview.style.setProperty("--cv-section-margin", val + "px");
    if (!a4ModeActive) {
      elements.preview.style.height = "auto";
      elements.preview.style.overflow = "visible";
    }
    if (typeof updateA4FitMeter === "function") {
      requestAnimationFrame(updateA4FitMeter);
    }
    
    // Sync with settings data
    if (typeof cvData !== "undefined" && cvData[currentLang]) {
      cvData[currentLang].sectionMargin = val + "px";
      const cachedKey = `cv_data_${cvVersion}_${currentLang}`;
      localStorage.setItem(cachedKey, JSON.stringify(cvData[currentLang]));
    }
  };

  elements.itemMarginSlider.oninput = (e) => {
    const val = parseInt(e.target.value);
    elements.itemMarginVal.textContent = val + "px";
    elements.preview.style.setProperty("--cv-item-margin", val + "px");
    if (!a4ModeActive) {
      elements.preview.style.height = "auto";
      elements.preview.style.overflow = "visible";
    }
    if (typeof updateA4FitMeter === "function") {
      requestAnimationFrame(updateA4FitMeter);
    }
    
    // Sync with settings data
    if (typeof cvData !== "undefined" && cvData[currentLang]) {
      cvData[currentLang].itemMargin = val + "px";
      const cachedKey = `cv_data_${cvVersion}_${currentLang}`;
      localStorage.setItem(cachedKey, JSON.stringify(cvData[currentLang]));
    }
  };
}

function resetLayoutStyles() {
  elements.preview.style.height = "auto";
  elements.preview.style.overflow = "visible";
  elements.preview.style.lineHeight = DEFAULT_LINE_HEIGHT;
  elements.preview.style.padding = DEFAULT_PADDING;

  const d = (typeof cvData !== "undefined" && cvData[currentLang]) ? cvData[currentLang] : {};
  const sectionVal = d.sectionMargin || (elements.sectionMarginSlider ? elements.sectionMarginSlider.value + "px" : DEFAULT_SECTION_MARGIN);
  const itemVal = d.itemMargin || (elements.itemMarginSlider ? elements.itemMarginSlider.value + "px" : DEFAULT_ITEM_MARGIN);

  elements.preview.style.setProperty("--cv-section-margin", sectionVal);
  elements.preview.style.setProperty("--cv-item-margin", itemVal);
  if (typeof updateA4FitMeter === "function") {
    requestAnimationFrame(updateA4FitMeter);
  }
}

function setA4Mode(enabled) {
  a4ModeActive = enabled;

  elements.preview.classList.toggle("a4-mode", enabled);
  elements.a4PreviewBtn.classList.toggle("active", enabled);
  elements.a4PreviewBtn.textContent = enabled ? "✅ A4 ON" : "📄 A4 Preview";
  elements.a4PreviewBtn.setAttribute("aria-pressed", String(enabled));
}

function renderContact(contact) {
  return contact
    .map((c, idx) => {
      // Tự động tạo link tel: cho số điện thoại nếu chưa có link
      let link = c.link;
      if (!link && c.icon === "phone") {
        link = `tel:${c.text.replace(/\s+/g, "")}`;
      }
      const safeLink = escUrl(link);

      return `
        <div class="cv-contact-item">
          ${icons[c.icon] || ""}
          ${
            safeLink
              ? `<a data-edit-key="contact.${idx}.text" href="${safeLink}" ${c.icon !== "phone" ? 'target="_blank" rel="noopener noreferrer"' : ""}>${esc(c.text)}</a>`
              : `<span data-edit-key="contact.${idx}.text">${esc(c.text)}</span>`
          }
        </div>
    `;
    })
    .join("");
}

function renderEducation(education) {
  return `
        <div class="cv-edu-item">
          <div class="cv-edu-header">
            <span data-edit-key="education.school" class="cv-edu-school">${esc(education.school)}</span>
            <span data-edit-key="education.date" class="cv-edu-date">${esc(education.date)}</span>
          </div>
          <div data-edit-key="education.detail" class="cv-edu-detail">${esc(education.detail)}</div>
        </div>
    `;
}

function formatGithubLinks(githubStr, text, itemPath) {
  if (!githubStr) return "";

  if (githubStr.includes("|")) {
    return githubStr
      .split("|")
      .map((link) => {
        const trimmed = link.trim();
        const urlMatch = trimmed.match(/(https?:\/\/[^\s]+)/);
        if (!urlMatch) return "";
        const url = urlMatch[0];

        const lowerPart = trimmed.toLowerCase();
        let label = "";
        if (
          lowerPart.includes("be:") ||
          lowerPart.includes("backend") ||
          lowerPart.includes("-be")
        ) {
          label = " (BE)";
        } else if (
          lowerPart.includes("fe:") ||
          lowerPart.includes("frontend") ||
          lowerPart.includes("-fe")
        ) {
          label = " (FE)";
        }

        const displayUrl = url.replace(/^https?:\/\//, "");
        return `
          <p class="cv-exp-github" style="margin-top: 5px; margin-bottom: 2px;">
            <strong>${esc(text.github)}${label}:</strong> <span class="cv-link-wrapper"><a ${itemPath ? `data-edit-key="${itemPath}.github"` : ""} href="${escUrl(url)}" target="_blank" rel="noopener noreferrer">${esc(displayUrl)}</a></span>
          </p>
        `;
      })
      .join("");
  }

  const urlMatch = githubStr.trim().match(/(https?:\/\/[^\s]+)/);
  if (!urlMatch) return "";
  const url = urlMatch[0];
  const displayUrl = url.replace(/^https?:\/\//, "");
  return `
    <p class="cv-exp-github" style="margin-top: 5px; margin-bottom: 2px;">
      <strong>${esc(text.github)}:</strong> <span class="cv-link-wrapper"><a ${itemPath ? `data-edit-key="${itemPath}.github"` : ""} href="${escUrl(url)}" target="_blank" rel="noopener noreferrer">${esc(displayUrl)}</a></span>
    </p>
  `;
}

function renderProjects(projects, text, limit, pathPrefix) {
  const normalizedProjects = Array.isArray(projects) ? projects : [];
  const visibleProjects =
    typeof limit === "number"
      ? normalizedProjects.slice(0, limit)
      : normalizedProjects;

  const d = cvData[currentLang];

  return visibleProjects
    .map((project, idx) => {
      let itemPath = "";
      if (pathPrefix === "experience") {
        itemPath = `experience.${idx}`;
      } else if (pathPrefix === "projects") {
        const origIdx = (d.projects || []).findIndex(p => getProjectId(p) === getProjectId(project));
        if (origIdx > -1) {
          itemPath = `projects.${origIdx}`;
        } else {
          itemPath = `globalPool.${project.id || getProjectId(project)}`;
        }
      }

      return `
        <div class="cv-exp-item">
          <div class="cv-exp-header">
            <span ${itemPath ? `data-edit-key="${itemPath}.name"` : ""} class="cv-exp-project">${esc(project.name)}</span>
            <span ${itemPath ? `data-edit-key="${itemPath}.date"` : ""} class="cv-exp-date">${esc(project.date)}</span>
          </div>
          <p class="cv-exp-role">${esc(text.role)}: <span ${itemPath ? `data-edit-key="${itemPath}.role"` : ""}>${esc(project.role)}</span></p>
          <p class="cv-exp-desc"><strong>${esc(text.description)}:</strong> <span ${itemPath ? `data-edit-key="${itemPath}.desc"` : ""}>${esc(project.desc)}</span></p>
          <ul class="cv-exp-tasks">
            ${(Array.isArray(project.tasks) ? project.tasks : []).map((task, tIdx) => `
              <li ${itemPath ? `data-edit-key="${itemPath}.tasks.${tIdx}"` : ""}>${esc(task)}</li>
            `).join("")}
          </ul>
          <p class="cv-exp-tech"><strong>${esc(text.technologies)}:</strong> <span ${itemPath ? `data-edit-key="${itemPath}.tech"` : ""}>${esc(project.tech)}</span></p>
          ${project.github ? formatGithubLinks(project.github, text, itemPath) : ""}
          ${
            project.demo
              ? `
            <p class="cv-exp-demo">
              <strong>${esc(text.demo)}:</strong> <span class="cv-link-wrapper"><a ${itemPath ? `data-edit-key="${itemPath}.demo"` : ""} href="${escUrl(project.demo)}" target="_blank" rel="noopener noreferrer">${esc(String(project.demo).replace(/^https?:\/\//, ""))}</a></span>
            </p>`
              : ""
          }
        </div>
      `;
    })
    .join("");
}

function renderSkills(skills) {
  return skills
    .map(
      (skill, idx) => `
        <tr>
          <td data-edit-key="skills.${idx}.cat" class="cv-skills-category">${esc(skill.cat)}</td>
          <td data-edit-key="skills.${idx}.items" class="cv-skills-items">${esc(skill.items)}</td>
        </tr>
    `,
    )
    .join("");
}

elements.fontIncreaseBtn.onclick = () => {
  if (baseFontSize < 14) {
    baseFontSize += 0.5;
    if (!a4ModeActive) {
      elements.preview.style.height = "auto";
      elements.preview.style.overflow = "visible";
    }
    updateFontSize();
  }
};

elements.fontDecreaseBtn.onclick = () => {
  if (baseFontSize > 7) {
    baseFontSize -= 0.5;
    if (!a4ModeActive) {
      elements.preview.style.height = "auto";
      elements.preview.style.overflow = "visible";
    }
    updateFontSize();
  }
};

// ===================================
// A4 METRICS HELPERS (Đo đạc kích thước A4 & chiều cao nội dung thực tế)
// ===================================
let cachedA4TargetPx = 0;
function getA4TargetHeight() {
  if (cachedA4TargetPx > 0) return cachedA4TargetPx;
  const probe = document.createElement("div");
  probe.style.cssText = "height: 297mm; position: absolute; visibility: hidden; pointer-events: none; top: -9999px; left: -9999px;";
  document.body.appendChild(probe);
  const h = probe.getBoundingClientRect().height;
  document.body.removeChild(probe);
  cachedA4TargetPx = h > 0 ? h : 1122.5;
  return cachedA4TargetPx;
}

function getActualContentHeight() {
  const preview = elements.preview;
  if (!preview) return 0;

  const computedStyle = window.getComputedStyle(preview);
  const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
  const previewRect = preview.getBoundingClientRect();

  // Lọc các khối nội dung hiển thị trực tiếp bên trong CV
  const children = Array.from(preview.children).filter((el) => {
    if (el.nodeType !== Node.ELEMENT_NODE) return false;
    if (el.classList.contains("section-toolbar") || el.classList.contains("feedback-tooltip")) return false;
    if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return false;
    if (el.offsetWidth === 0 && el.offsetHeight === 0 && el.style.display === "none") return false;
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
  return (maxBottom - previewRect.top) + paddingBottom;
}

// ===================================
// MAGIC FIT
// ===================================
function magicFit() {
  const targetHeight = getA4TargetHeight();

  elements.preview.style.height = "auto";
  elements.preview.style.overflow = "visible";

  // Bắt đầu với các giá trị "rộng rãi" để lấp trang
  baseFontSize = 11.5;
  let currentLineHeight = 1.7;
  let currentPaddingSide = 15;
  let sectionMargin = 18;
  let itemMargin = 12;

  let safety = 0;
  const maxIter = 100;

  function applyStyles() {
    updateFontSize();
    elements.preview.style.lineHeight = currentLineHeight;
    elements.preview.style.padding = `0 ${currentPaddingSide}mm 10mm ${currentPaddingSide}mm`;
    elements.preview.style.setProperty("--cv-section-margin", sectionMargin + "px");
    elements.preview.style.setProperty("--cv-item-margin", itemMargin + "px");

    if (elements.sectionMarginSlider) {
      elements.sectionMarginSlider.value = sectionMargin;
      elements.sectionMarginVal.textContent = sectionMargin + "px";
    }
    if (elements.itemMarginSlider) {
      elements.itemMarginSlider.value = itemMargin;
      elements.itemMarginVal.textContent = itemMargin + "px";
    }
  }

  // Phase 1: Thu hẹp nếu tràn (Shrink phase)
  while (getActualContentHeight() > targetHeight && safety < maxIter) {
    let changed = false;
    if (sectionMargin > 8) {
      sectionMargin -= 2;
      changed = true;
    } else if (itemMargin > 4) {
      itemMargin -= 2;
      changed = true;
    } else if (currentLineHeight > 1.25) {
      currentLineHeight -= 0.05;
      changed = true;
    } else if (currentPaddingSide > 10) {
      currentPaddingSide -= 0.5;
      changed = true;
    } else if (baseFontSize > 9.5) {
      baseFontSize -= 0.1;
      changed = true;
    }

    applyStyles();
    safety++;
    if (!changed) break;
  }

  const isOverflowing = getActualContentHeight() > targetHeight;

  safety = 0;
  // Phase 2: Giãn nở nếu quá ngắn (Expand phase)
  while (
    getActualContentHeight() < targetHeight - 50 &&
    safety < maxIter
  ) {
    let changed = false;
    if (currentLineHeight < 1.75) {
      currentLineHeight += 0.03;
      changed = true;
    } else if (sectionMargin < 24) {
      sectionMargin += 2;
      changed = true;
    } else if (itemMargin < 16) {
      itemMargin += 2;
      changed = true;
    } else if (baseFontSize < 11.5) {
      baseFontSize += 0.1;
      changed = true;
    }

    applyStyles();
    safety++;
    if (!changed || getActualContentHeight() > targetHeight - 20) break;
  }

  if (a4ModeActive) {
    elements.preview.style.height = "297mm";
    elements.preview.style.overflow = "hidden";
  } else {
    elements.preview.style.height = "auto";
    elements.preview.style.overflow = "visible";
  }

  if (isOverflowing) {
    elements.magicFitBtn.innerHTML = "Tràn nội dung! ⚠️";
    elements.magicFitBtn.style.backgroundColor = "#e05638";
    elements.magicFitBtn.style.color = "#ffffff";
    setTimeout(() => {
      elements.magicFitBtn.innerHTML = "Magic Fit ✨";
      elements.magicFitBtn.style.backgroundColor = "";
      elements.magicFitBtn.style.color = "";
    }, 4000);
  } else {
    elements.magicFitBtn.innerHTML = "Perfect Fit! ✨";
    setTimeout(() => {
      elements.magicFitBtn.innerHTML = "Magic Fit ✨";
    }, 2000);
  }
  requestAnimationFrame(updateA4FitMeter);
}

elements.magicFitBtn.onclick = magicFit;

// ===================================
// A4 FIT METER (Thước đo độ tràn trang A4)
// ===================================
function updateA4FitMeter() {
  const preview = elements.preview;
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

  percentEl.textContent = `${percent}%`;
  progressEl.style.width = `${Math.min(percent, 100)}%`;

  meter.classList.remove("status-spacious", "status-perfect", "status-tight", "status-overflow");

  if (percent <= 88) {
    meter.classList.add("status-spacious");
    statusEl.textContent = currentLang === "vi" ? "Rộng rãi ✨" : "Spacious ✨";
  } else if (percent <= 98) {
    meter.classList.add("status-perfect");
    statusEl.textContent = currentLang === "vi" ? "Vừa vặn 1 trang ✓" : "Perfect 1 Page ✓";
  } else if (percent <= 100) {
    meter.classList.add("status-tight");
    statusEl.textContent = currentLang === "vi" ? "Sát mép (99-100%)" : "Close to edge";
  } else {
    meter.classList.add("status-overflow");
    const over = percent - 100;
    statusEl.textContent = currentLang === "vi" ? `Tràn trang (+${over}%) ⚠️` : `Overflow (+${over}%) ⚠️`;
  }
}

const a4FitMeterEl = document.getElementById("a4FitMeter");
if (a4FitMeterEl) {
  a4FitMeterEl.onclick = () => {
    magicFit();
  };
}

// Lắng nghe thay đổi kích thước DOM của Preview
if (window.ResizeObserver && elements.preview) {
  const a4ResizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(updateA4FitMeter);
  });
  a4ResizeObserver.observe(elements.preview);
}

// Lắng nghe chỉnh sửa nội dung trực tiếp (Live-editing, gõ phím, thêm bớt text)
if (elements.preview) {
  elements.preview.addEventListener("input", () => {
    requestAnimationFrame(updateA4FitMeter);
  });
}

// MutationObserver để bắt mọi thay đổi cấu trúc phần tử (thêm/xóa/đổi class/ẩn hiện section)
if (window.MutationObserver && elements.preview) {
  const a4MutationObserver = new MutationObserver(() => {
    requestAnimationFrame(updateA4FitMeter);
  });
  a4MutationObserver.observe(elements.preview, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

// Cập nhật lại khi resize cửa sổ
window.addEventListener("resize", () => {
  cachedA4TargetPx = 0;
  requestAnimationFrame(updateA4FitMeter);
});

// ===================================
// RESET SETTINGS
// ===================================
function resetSettings() {
  const confirmMsg = currentLang === "vi" 
    ? "Khôi phục toàn bộ giao diện, màu sắc, font chữ và căn lề về mặc định?" 
    : "Reset all styling, colors, font family, and margins to default?";
  if (confirm(confirmMsg)) {
    const cachedKey = `cv_data_${cvVersion}_${currentLang}`;
    const cached = localStorage.getItem(cachedKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        delete parsed.primaryColor;
        delete parsed.fontFamily;
        delete parsed.sectionOrder;
        delete parsed.hiddenSections;
        delete parsed.sectionMargin;
        delete parsed.itemMargin;
        localStorage.setItem(cachedKey, JSON.stringify(parsed));
      } catch (e) {
        console.error(e);
      }
    }
    window.location.reload();
  }
}

elements.resetBtn.onclick = resetSettings;

if (elements.resetDataBtn) {
  elements.resetDataBtn.onclick = () => {
    const confirmMsg = currentLang === "vi" 
      ? "Bạn có chắc chắn muốn xóa toàn bộ nội dung đã chỉnh sửa và khôi phục về dữ liệu CV gốc không?" 
      : "Are you sure you want to delete all edited content and restore the original CV data?";
    if (confirm(confirmMsg)) {
      localStorage.removeItem(`cv_data_${cvVersion}_vi`);
      localStorage.removeItem(`cv_data_${cvVersion}_en`);
      localStorage.removeItem(`cv_global_project_pool_vi`);
      localStorage.removeItem(`cv_global_project_pool_en`);
      localStorage.removeItem(`cv_projects_order_${cvVersion}`);
      window.location.reload();
    }
  };
}

// ===================================
// A4 PREVIEW MODE
// ===================================
let a4ModeActive = false;

elements.a4PreviewBtn.onclick = () => {
  setA4Mode(!a4ModeActive);
};

// ===================================
// PROJECT SELECTOR
// ===================================
let globalProjectPool = [];
let activeProjectIds = [];
let lastSelectorVersion = null;
let lastSelectorLang = null;
let allProjectsLoaded = false;
let isFetchingProjects = false;
let dragSourceEl = null;

// Danh sách file data lấy từ manifest (nguồn duy nhất) thay vì hardcode.
const allDataFiles = (window.CV_MANIFEST || []).map((v) => v.file);

function normalizeProjId(proj, backupName) {
  if (!proj) return "";
  if (proj.id) return proj.id.trim().toLowerCase();
  
  const name = (proj.name || backupName || "").trim().toUpperCase();
  if (!name) return "";
  
  // Smart keyword normalization to link identical projects with different titles/translations
  if (name.includes("JOB PORTAL") || name.includes("TUYỂN DỤNG")) {
    return "job-portal-platform";
  }
  if (name.includes("E-COMMERCE") || name.includes("THƯƠNG MẠI")) {
    return "ecommerce-platform";
  }
  if (name.includes("STUDENT MANAGEMENT") || name.includes("QUẢN LÝ HỌC SINH") || name.includes("QUẢN LÝ SINH VIÊN")) {
    return "student-management-system";
  }
  
  // Fallback to name-based slug
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function addProjectsToPool(viProjects, enProjects) {
  const normVi = Array.isArray(viProjects) ? viProjects : [];
  const normEn = Array.isArray(enProjects) ? enProjects : [];
  normVi.forEach((viProj, idx) => {
    const enProj = normEn[idx] || viProj;
    const projId = normalizeProjId(enProj, viProj.name) || normalizeProjId(viProj, enProj.name);
    
    // Gán ID tĩnh vào từng đối tượng dự án để không bị tính toán lại theo tên khi tên bị sửa đổi
    if (viProj && !viProj.id) viProj.id = projId;
    if (enProj && !enProj.id) enProj.id = projId;

    if (!globalProjectPool.some(p => p.id === projId)) {
      globalProjectPool.push({
        id: projId,
        vi: viProj,
        en: enProj
      });
    }
  });
}

// Nạp một file data qua thẻ <script>. Mỗi file gán `cvData` ở scope toàn cục
// (khai báo bằng `var`), nên sau khi onload ta đọc được qua window.cvData.
function loadDataScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const versionedSrc = window.withCvVersion ? window.withCvVersion(src) : (src + "?v=1.1.0");
    script.src = versionedSrc;
    script.async = false;
    script.onload = () => {
      // Lấy snapshot cvData mới nạp rồi gỡ thẻ script cho gọn
      const data = window.cvData;
      script.remove();
      resolve(data);
    };
    script.onerror = () => {
      script.remove();
      reject(new Error("Failed to load data script: " + versionedSrc));
    };
    document.head.appendChild(script);
  });
}

async function loadAllProjectsBackground() {
  if (allProjectsLoaded || isFetchingProjects) return;
  isFetchingProjects = true;

  // Giữ lại data của phiên bản hiện tại vì việc nạp file khác sẽ ghi đè window.cvData
  const currentCvData = window.cvData;

  const currentVerObj = (window.CV_MANIFEST || []).find((v) => v.key === cvVersion);
  const currentFilePath = currentVerObj ? currentVerObj.file : null;

  const filesToFetch = allDataFiles.filter((path) => path !== currentFilePath);

  for (const file of filesToFetch) {
    try {
      const loadedData = await loadDataScript(file);
      if (loadedData && loadedData.vi && loadedData.vi.projects) {
        addProjectsToPool(loadedData.vi.projects, loadedData.en.projects);
      }
    } catch (e) {
      console.warn("Failed to load background file: " + file, e);
    }
  }

  // Khôi phục cvData của phiên bản đang xem
  window.cvData = currentCvData;

  allProjectsLoaded = true;
  isFetchingProjects = false;

  // Re-render CV và selector với pool dự án vừa nạp đầy đủ
  renderCV(currentLang);
}

function saveActiveProjects() {
  localStorage.setItem(`cv_projects_order_${cvVersion}`, JSON.stringify(activeProjectIds));
}

function handleDragStart(e) {
  dragSourceEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', this.getAttribute('data-id'));
  this.classList.add('dragging');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  
  const sourceId = e.dataTransfer.getData('text/plain');
  const targetId = this.getAttribute('data-id');
  
  if (sourceId !== targetId) {
    const sourceIdx = activeProjectIds.indexOf(sourceId);
    const targetIdx = activeProjectIds.indexOf(targetId);
    
    if (sourceIdx > -1 && targetIdx > -1) {
      activeProjectIds.splice(sourceIdx, 1);
      activeProjectIds.splice(targetIdx, 0, sourceId);
      saveActiveProjects();
      
      const scrollPos = window.scrollY;
      renderCV(currentLang);
      window.scrollTo(0, scrollPos);
    }
  }
  return false;
}

function handleDragEnd(e) {
  this.classList.remove('dragging');
  document.querySelectorAll('.proj-order-item').forEach(item => {
    item.classList.remove('over');
  });
}

function getProjectId(p) {
  return normalizeProjId(p);
}

let isProjSelectorCollapsed = false;

function updateProjectSelector(d, lang) {
  let panel = document.getElementById("projectSelectorPanel");
  if (!panel && d.projects && d.projects.length > 0) {
    panel = document.createElement("div");
    panel.id = "projectSelectorPanel";
    panel.className = "project-selector-panel";
    document.body.appendChild(panel);
  }

  if (!d.projects || d.projects.length === 0) {
    if (panel) panel.style.display = "none";
    return;
  }

  if (isProjSelectorCollapsed) {
    panel.classList.add("collapsed");
  } else {
    panel.classList.remove("collapsed");
  }

  // Check if version or language changed
  if (cvVersion !== lastSelectorVersion || lang !== lastSelectorLang) {
    lastSelectorVersion = cvVersion;
    lastSelectorLang = lang;
    
    // Add current CV projects to pool immediately
    if (cvData && cvData.vi && cvData.en) {
      addProjectsToPool(cvData.vi.projects, cvData.en.projects);
    }
    
    // Attempt to load from localStorage first
    const savedIds = localStorage.getItem(`cv_projects_order_${cvVersion}`);
    if (savedIds) {
      try {
        activeProjectIds = JSON.parse(savedIds);
      } catch (e) {
        console.warn("Failed to parse saved active project IDs", e);
        // Fallback to default
        const currentProjs = d.projects || [];
        const limit = d.projectDisplayLimit || 1;
        activeProjectIds = currentProjs.slice(0, limit).map(p => getProjectId(p));
      }
    } else {
      // Default select first 'projectDisplayLimit' projects from current CV data
      const currentProjs = d.projects || [];
      const limit = d.projectDisplayLimit || 1;
      activeProjectIds = currentProjs.slice(0, limit).map(p => getProjectId(p));
    }
    
    // Trigger background fetch for the rest of projects
    loadAllProjectsBackground();
  }

  const titleText = lang === "vi" ? "📁 Dự án hiển thị" : "📁 Projects to Show";
  const subtitleText = lang === "vi" ? "Chọn dự án đưa vào CV" : "Toggle projects in CV";

  // Segment pool into current CV projects and others
  const currentCvProjNames = (d.projects || []).map(p => getProjectId(p));
  const currentProjs = globalProjectPool.filter(p => currentCvProjNames.includes(p.id));
  const otherProjs = globalProjectPool.filter(p => !currentCvProjNames.includes(p.id));

  // Draggable selected projects list
  let orderItemsHtml = "";
  if (activeProjectIds.length > 0) {
    orderItemsHtml = activeProjectIds
      .map((id) => {
        const proj = globalProjectPool.find(p => p.id === id);
        if (!proj) return "";
        return `
          <div class="proj-order-item" draggable="true" data-id="${esc(proj.id)}">
            <span class="proj-order-handle">☰</span>
            <span class="proj-order-name" title="${esc(proj[lang].name)}">${esc(proj[lang].name)}</span>
            <div class="proj-order-arrows">
              <button class="proj-order-arrow up" data-id="${esc(proj.id)}">▲</button>
              <button class="proj-order-arrow down" data-id="${esc(proj.id)}">▼</button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  const currentItemsHtml = currentProjs
    .map((proj) => {
      const isChecked = activeProjectIds.includes(proj.id);
      return `
        <label class="proj-select-item">
          <input type="checkbox" data-id="${esc(proj.id)}" ${isChecked ? "checked" : ""}>
          <span class="proj-select-name">${esc(proj[lang].name)}</span>
        </label>
      `;
    })
    .join("");

  const otherItemsHtml = otherProjs
    .map((proj) => {
      const isChecked = activeProjectIds.includes(proj.id);
      return `
        <label class="proj-select-item">
          <input type="checkbox" data-id="${esc(proj.id)}" ${isChecked ? "checked" : ""}>
          <span class="proj-select-name">${esc(proj[lang].name)}</span>
        </label>
      `;
    })
    .join("");

  const currentLabel = lang === "vi" ? "Dự án của CV này" : "Current CV Projects";
  const otherLabel = lang === "vi" ? "Dự án từ các CV khác" : "Other CV Projects";
  const orderLabel = lang === "vi" ? "Thứ tự hiển thị (Kéo thả)" : "Display Order (Drag & Drop)";

  panel.innerHTML = `
    <div class="proj-select-header" id="projSelectHeader" title="${lang === "vi" ? "Nhấp để thu gọn / mở rộng" : "Click to collapse / expand"}">
      <span class="proj-select-title">${titleText} <span class="proj-select-count">${activeProjectIds.length}</span></span>
      <div class="proj-select-header-actions">
        <button class="proj-select-reset-btn" id="projSelectResetBtn" title="${lang === "vi" ? "Khôi phục mặc định" : "Restore defaults"}">
          🔄
        </button>
        <button class="proj-select-toggle-btn" id="projSelectToggleBtn" title="${lang === "vi" ? (isProjSelectorCollapsed ? "Mở rộng" : "Thu gọn") : (isProjSelectorCollapsed ? "Expand" : "Collapse")}">
          ${isProjSelectorCollapsed ? "▼" : "▲"}
        </button>
      </div>
    </div>
    <div class="proj-select-subtitle">${subtitleText}</div>
    
    ${activeProjectIds.length > 0 ? `
      <div class="proj-select-section-title">${orderLabel}</div>
      <div class="proj-select-order-list">
        ${orderItemsHtml}
      </div>
    ` : ''}
    
    <div class="proj-select-section-title">${currentLabel}</div>
    <div class="proj-select-list">
      ${currentItemsHtml || `<div class="proj-select-empty">-</div>`}
    </div>
    
    <div class="proj-select-section-title">${otherLabel}</div>
    <div class="proj-select-list other-list">
      ${otherItemsHtml || (allProjectsLoaded ? `<div class="proj-select-empty">-</div>` : `<div class="proj-select-loading">Đang tải...</div>`)}
    </div>
  `;

  // Attach header / toggle collapse listener
  const header = panel.querySelector("#projSelectHeader");
  if (header) {
    header.onclick = (e) => {
      if (e.target.closest("#projSelectResetBtn")) return;
      isProjSelectorCollapsed = !isProjSelectorCollapsed;
      updateProjectSelector(d, lang);
    };
  }

  // Attach reset listener
  const resetBtn = panel.querySelector("#projSelectResetBtn");
  if (resetBtn) {
    resetBtn.onclick = (e) => {
      e.stopPropagation();
      localStorage.removeItem(`cv_projects_order_${cvVersion}`);
      const currentProjs = d.projects || [];
      const limit = d.projectDisplayLimit || 1;
      activeProjectIds = currentProjs.slice(0, limit).map(p => getProjectId(p));
      
      const scrollPos = window.scrollY;
      renderCV(currentLang);
      window.scrollTo(0, scrollPos);
    };
  }

  // Attach change listener
  panel.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.onchange = (e) => {
      const id = e.target.getAttribute("data-id");
      if (checkbox.checked) {
        if (!activeProjectIds.includes(id)) {
          activeProjectIds.push(id);
        }
      } else {
        activeProjectIds = activeProjectIds.filter((item) => item !== id);
      }
      saveActiveProjects();
      
      const scrollPos = window.scrollY;
      renderCV(currentLang);
      window.scrollTo(0, scrollPos);
    };
  });

  // Attach Drag & Drop listeners
  panel.querySelectorAll(".proj-order-item").forEach((item) => {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });

  // Attach Arrow listeners
  panel.querySelectorAll(".proj-order-arrow.up").forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const idx = activeProjectIds.indexOf(id);
      if (idx > 0) {
        activeProjectIds.splice(idx, 1);
        activeProjectIds.splice(idx - 1, 0, id);
        saveActiveProjects();
        const scrollPos = window.scrollY;
        renderCV(currentLang);
        window.scrollTo(0, scrollPos);
      }
    };
  });

  panel.querySelectorAll(".proj-order-arrow.down").forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const idx = activeProjectIds.indexOf(id);
      if (idx > -1 && idx < activeProjectIds.length - 1) {
        activeProjectIds.splice(idx, 1);
        activeProjectIds.splice(idx + 1, 0, id);
        saveActiveProjects();
        const scrollPos = window.scrollY;
        renderCV(currentLang);
        window.scrollTo(0, scrollPos);
      }
    };
  });
}

// ===================================
// SECTION ACTIONS (DRAG, MOVE, DELETE)
// ===================================
function saveCVSettings() {
  const cachedKey = `cv_data_${cvVersion}_${currentLang}`;
  localStorage.setItem(cachedKey, JSON.stringify(cvData[currentLang]));
}

function moveSection(sectionId, direction) {
  const d = cvData[currentLang];
  const defaultSectionOrder = ["objective", "education", "experience", "projects", "skills"];
  const order = [...(d.sectionOrder || defaultSectionOrder)];
  
  const index = order.indexOf(sectionId);
  if (index === -1) return;
  
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= order.length) return;
  
  const temp = order[index];
  order[index] = order[targetIndex];
  order[targetIndex] = temp;
  
  d.sectionOrder = order;
  saveCVSettings();
  renderCV(currentLang);
  
  if (typeof renderSectionList === "function") {
    renderSectionList();
  }
}

function deleteSection(sectionId) {
  const d = cvData[currentLang];
  if (!d.hiddenSections) {
    d.hiddenSections = [];
  }
  if (!d.hiddenSections.includes(sectionId)) {
    d.hiddenSections.push(sectionId);
  }
  
  saveCVSettings();
  renderCV(currentLang);
  
  if (typeof renderSectionList === "function") {
    renderSectionList();
  }
}

function reorderSections(draggedId, targetId, insertBefore) {
  const d = cvData[currentLang];
  const defaultSectionOrder = ["objective", "education", "experience", "projects", "skills"];
  const order = [...(d.sectionOrder || defaultSectionOrder)];
  
  const draggedIndex = order.indexOf(draggedId);
  const targetIndex = order.indexOf(targetId);
  if (draggedIndex === -1 || targetIndex === -1) return;
  
  order.splice(draggedIndex, 1);
  
  let newTargetIndex = order.indexOf(targetId);
  if (!insertBefore) {
    newTargetIndex += 1;
  }
  
  order.splice(newTargetIndex, 0, draggedId);
  
  d.sectionOrder = order;
  saveCVSettings();
  renderCV(currentLang);
  
  if (typeof renderSectionList === "function") {
    renderSectionList();
  }
}

// ===================================
// RENDER CV
// ===================================
function renderCV(lang) {
  // Load cached edits from localStorage if they exist
  const cachedKey = `cv_data_${cvVersion}_${lang}`;
  const cached = localStorage.getItem(cachedKey);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      const deepMerge = (target, source) => {
        for (const key of Object.keys(source)) {
          if (Array.isArray(source[key])) {
            // Đối với mảng, ghi đè hoàn toàn để tránh giữ lại các phần tử thừa khi bị xóa bớt
            target[key] = JSON.parse(JSON.stringify(source[key]));
          } else if (source[key] instanceof Object && key in target && target[key] !== null) {
            deepMerge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
        return target;
      };
      deepMerge(cvData[lang], parsed);
    } catch (e) {
      console.error("Failed to parse cached CV data:", e);
    }
  }

  const cachedPoolKey = `cv_global_project_pool_${lang}`;
  const cachedPool = localStorage.getItem(cachedPoolKey);
  if (cachedPool) {
    try {
      const parsedPool = JSON.parse(cachedPool);
      if (Array.isArray(parsedPool)) {
        parsedPool.forEach(cachedProj => {
          const poolProj = globalProjectPool.find(p => p.id === cachedProj.id);
          if (poolProj) {
            poolProj[lang] = Object.assign(poolProj[lang] || {}, cachedProj[lang]);
          }
        });
      }
    } catch (e) {
      console.error("Failed to parse cached global project pool:", e);
    }
  }

  const d = cvData[lang];
  const t = labels[lang];

  // Inject experience globally if not defined in the specific CV
  if (typeof cvGlobalExp !== 'undefined' && cvGlobalExp[lang]) {
    if (!d.experience || d.experience.length === 0) {
      const defaultExp = JSON.parse(JSON.stringify(cvGlobalExp[lang]));
      const titleUpper = (d.title || "").toUpperCase();
      let tailoredRoleVi = "Developer";
      let tailoredRoleEn = "Developer";
      
      defaultExp.forEach(exp => {
        exp.role = lang === "vi" ? tailoredRoleVi : tailoredRoleEn;
      });
      
      d.experience = defaultExp;
    }
  }

  if (d.experience && d.experience.length > 0) {
    if (!d.sections.experience) {
      d.sections.experience = lang === "vi" ? "KINH NGHIỆM LÀM VIỆC" : "WORK EXPERIENCE";
    }
    if (typeof d.experienceDisplayLimit === 'undefined') {
      d.experienceDisplayLimit = 1;
    }
  }

  if (!d.sections) d.sections = {};
  if (!d.sections.skills) {
    d.sections.skills = lang === "vi" ? "KỸ NĂNG CHUYÊN MÔN" : "TECHNICAL SKILLS";
  }

  updateProjectSelector(d, lang);

  elements.downloadBtnText.innerText = d.btnText;
  const cleanName = d.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9]/g, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  // Rút gọn chức danh: xóa phần trong ngoặc đơn, bỏ các tiền tố level và lấy phần vai trò chính
  let shortTitle = d.title.replace(/\(.*?\)/g, "").trim();
  shortTitle = shortTitle.replace(/^(?:\b(?:Fresher|Junior|Intern)\b|[\s/&|,-])+/i, "");
  if (shortTitle.includes("/") || shortTitle.includes("|")) {
    const parts = shortTitle.split(/[\/|]/);
    shortTitle = parts[parts.length - 1].trim();
  }

  const cleanTitle = shortTitle
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const upper = word.toUpperCase();
      if (upper === "AI" || upper === "IT" || upper === "HR") return upper;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");

  document.title = d.docTitle || `CV_${cleanName}_${cleanTitle}_${lang.toUpperCase()}`;

  const sectionRenderers = {
    objective: () => `
      <div class="cv-section" data-section-id="objective">
        <div data-edit-key="sections.objective" class="cv-section-title">${esc(d.sections.objective)}</div>
        <div data-edit-key="objective" class="cv-objective">${esc(d.objective)}</div>
      </div>
    `,
    education: () => `
      <div class="cv-section" data-section-id="education">
        <div data-edit-key="sections.education" class="cv-section-title">${esc(d.sections.education)}</div>
        ${renderEducation(d.education)}
      </div>
    `,
    experience: () => {
      if (!d.experience || d.experience.length === 0) return "";
      return `
        <div class="cv-section" data-section-id="experience">
          <div data-edit-key="sections.experience" class="cv-section-title">${esc(d.sections.experience)}</div>
          ${renderProjects(d.experience, t, d.experienceDisplayLimit, 'experience')}
        </div>
      `;
    },
    projects: () => `
      <div class="cv-section" data-section-id="projects">
        <div data-edit-key="sections.projects" class="cv-section-title">${esc(d.sections.projects)}</div>
        ${renderProjects(
          activeProjectIds
            .map(id => {
              const currentProj = (d.projects || []).find(p => getProjectId(p) === id);
              if (currentProj) return currentProj;
              const p = globalProjectPool.find(item => item.id === id);
              return p ? p[lang] : null;
            })
            .filter(Boolean),
          t,
          undefined,
          'projects'
        )}
      </div>
    `,
    skills: () => `
      <div class="cv-section" data-section-id="skills">
        <div data-edit-key="sections.skills" class="cv-section-title">${esc(d.sections.skills)}</div>
        <table class="cv-skills-table">
          ${renderSkills(d.skills)}
        </table>
      </div>
    `
  };

  const defaultSectionOrder = ["objective", "education", "experience", "projects", "skills"];
  const order = d.sectionOrder || defaultSectionOrder;
  const hidden = d.hiddenSections || [];

  const sectionsHtml = order
    .filter(id => !hidden.includes(id))
    .map(id => sectionRenderers[id] ? sectionRenderers[id]() : "")
    .join("");

  const html = `
        <div class="cv-header">
          <div data-edit-key="name" class="cv-name">${esc(d.name)}</div>
          <div data-edit-key="title" class="cv-title">${esc(d.title)}</div>
          <div class="cv-contact">
            ${renderContact(d.contact)}
          </div>
        </div>
        ${sectionsHtml}
    `;

  elements.preview.innerHTML = html;

  // Inject Hover Action Toolbars into each section
  elements.preview.querySelectorAll(".cv-section").forEach(sectionEl => {
    const sectionId = sectionEl.getAttribute("data-section-id");
    if (!sectionId) return;

    const toolbar = document.createElement("div");
    toolbar.className = "section-toolbar";
    toolbar.setAttribute("contenteditable", "false");
    
    const dragTitle = lang === "vi" ? "Kéo thả để di chuyển mục" : "Drag to reorder";
    const upTitle = lang === "vi" ? "Di chuyển lên" : "Move up";
    const downTitle = lang === "vi" ? "Di chuyển xuống" : "Move down";
    const deleteText = lang === "vi" ? "Xóa" : "Delete";
    
    toolbar.innerHTML = `
      <div class="tb-btn tb-drag" title="${dragTitle}" draggable="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="5 9 2 12 5 15"></polyline>
          <polyline points="9 5 12 2 15 5"></polyline>
          <polyline points="15 19 12 22 9 19"></polyline>
          <polyline points="19 9 22 12 19 15"></polyline>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      </div>
      <button class="tb-btn tb-up" title="${upTitle}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
      <button class="tb-btn tb-down" title="${downTitle}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <button class="tb-btn tb-delete" title="${deleteText}">${deleteText}</button>
    `;
    
    toolbar.querySelector(".tb-up").onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      moveSection(sectionId, -1);
    };
    toolbar.querySelector(".tb-down").onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      moveSection(sectionId, 1);
    };
    toolbar.querySelector(".tb-delete").onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (confirm(lang === "vi" ? `Bạn có chắc muốn ẩn mục này không? Bạn có thể hiển thị lại từ phần "Cấu hình CV".` : `Are you sure you want to hide this section? You can show it again from "CV Settings".`)) {
        deleteSection(sectionId);
      }
    };
    
    // HTML5 Drag and Drop events on the drag handle button
    const dragHandle = toolbar.querySelector(".tb-drag");
    dragHandle.ondragstart = (e) => {
      if (!elements.preview.classList.contains("live-editing")) {
        e.preventDefault();
        return;
      }
      e.dataTransfer.setData("text/plain", sectionId);
      sectionEl.classList.add("section-dragging");
      e.dataTransfer.effectAllowed = "move";
    };
    dragHandle.ondragend = () => {
      sectionEl.classList.remove("section-dragging");
      elements.preview.querySelectorAll(".cv-section").forEach(el => {
        el.classList.remove("drag-over-top", "drag-over-bottom");
      });
    };

    // Listeners for dropping on the section itself
    sectionEl.ondragover = (e) => {
      if (!elements.preview.classList.contains("live-editing")) return;
      e.preventDefault();
      const rect = sectionEl.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      if (relativeY < rect.height / 2) {
        sectionEl.classList.add("drag-over-top");
        sectionEl.classList.remove("drag-over-bottom");
      } else {
        sectionEl.classList.add("drag-over-bottom");
        sectionEl.classList.remove("drag-over-top");
      }
    };
    sectionEl.ondragleave = () => {
      sectionEl.classList.remove("drag-over-top", "drag-over-bottom");
    };
    sectionEl.ondrop = (e) => {
      if (!elements.preview.classList.contains("live-editing")) return;
      e.preventDefault();
      sectionEl.classList.remove("drag-over-top", "drag-over-bottom");
      const draggedId = e.dataTransfer.getData("text/plain");
      if (draggedId && draggedId !== sectionId) {
        const rect = sectionEl.getBoundingClientRect();
        const relativeY = e.clientY - rect.top;
        const insertBefore = relativeY < rect.height / 2;
        reorderSections(draggedId, sectionId, insertBefore);
      }
    };
    
    // Add to the top of the section
    sectionEl.insertBefore(toolbar, sectionEl.firstChild);
  });
  
  // Apply primary color and font family custom properties
  elements.preview.style.setProperty("--cv-color", d.primaryColor || "#1e3a8a");
  elements.preview.style.setProperty("font-family", d.fontFamily || "'Be Vietnam Pro', sans-serif");
  
  initSpacingCustomizer();
  resetLayoutStyles();
  updateFontSize();
  setA4Mode(a4ModeActive);
  updateCoverLetterText();

  // Apply live edit status if active
  if (typeof applyLiveEditState === "function") {
    applyLiveEditState();
  }
}

// ===================================
// LANGUAGE SWITCH
// ===================================
elements.langViBtn.onclick = () => {
  currentLang = "vi";
  elements.langViBtn.classList.add("active");
  elements.langEnBtn.classList.remove("active");
  elements.langViBtn.setAttribute("aria-pressed", "true");
  elements.langEnBtn.setAttribute("aria-pressed", "false");
  renderCV("vi");
  window.__rerunAtsIfOpen?.();
  window.__syncHrView?.();
};

elements.langEnBtn.onclick = () => {
  currentLang = "en";
  elements.langEnBtn.classList.add("active");
  elements.langViBtn.classList.remove("active");
  elements.langEnBtn.setAttribute("aria-pressed", "true");
  elements.langViBtn.setAttribute("aria-pressed", "false");
  renderCV("en");
  window.__rerunAtsIfOpen?.();
  window.__syncHrView?.();
};

// ===================================
// PRINT / DOWNLOAD
// ===================================
elements.downloadBtn.onclick = () => {
  if (cvData && cvData[currentLang] && cvData[currentLang].docTitle) {
    document.title = cvData[currentLang].docTitle;
  }
  window.print();
};

// ===================================
// INIT
// ===================================
// ===================================
// COVER LETTER MANAGER
// ===================================
let currentTemplate = "tech";

const clTemplates = {
  tech: {
    vi: `[Tiêu đề Email: Ứng tuyển vị trí Lập trình viên – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng,

Tôi tên là Trương Đình Anh, tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM. Tôi viết thư này để ứng tuyển vào vị trí Lập trình viên tại Quý công ty.

Với nền tảng kiến thức vững chắc về JavaScript, TypeScript, React và Node.js, tôi đã phát triển thành công nhiều dự án thực tế bao gồm hệ thống tuyển dụng JOB PORTAL PLATFORM và hệ thống quản lý STUDENT MANAGEMENT SYSTEM. Tôi luôn tập trung viết code sạch, tối ưu truy vấn cơ sở dữ liệu và xây dựng giao diện responsive đẹp mắt, nâng cao trải nghiệm người dùng.

Tôi xin gửi kèm CV và mong muốn được trao đổi chi tiết hơn trong một buổi phỏng vấn trực tiếp.

Trân trọng,
Trương Đình Anh
SĐT: 0923202861`,
    en: `[Subject: Job Application: Developer – Truong Dinh Anh]

Dear Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Developer position at your company.

With a strong foundation in JavaScript, TypeScript, React, and Node.js, I have successfully developed several web applications, including a JOB PORTAL PLATFORM and a STUDENT MANAGEMENT SYSTEM. I am committed to writing clean, maintainable code, optimizing database queries, and designing responsive and user-friendly user interfaces.

Please find my attached CV for more details. I look forward to the opportunity of discussing how my skills align with your needs in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0923202861`,
  },
  short: {
    vi: `[Tiêu đề Email: Ứng tuyển Lập trình viên – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng,

Tôi viết thư này để ứng tuyển vào vị trí Lập trình viên tại Quý công ty. Tôi vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM và có kinh nghiệm thực chiến phát triển các dự án Full-Stack JavaScript/TypeScript.

Tôi sở hữu nền tảng vững chắc về React, Next.js, Node.js và MongoDB. Tôi luôn cam kết viết mã nguồn sạch, tối ưu hóa cơ sở dữ liệu và xây dựng giao diện responsive.

Chi tiết về các dự án và kỹ năng của tôi được trình bày trong CV đính kèm. Rất mong có cơ hội trao đổi trực tiếp trong một buổi phỏng vấn.

Trân trọng,
Trương Đình Anh
SĐT: 0923202861`,
    en: `[Subject: Job Application: Developer – Truong Dinh Anh]

Dear Hiring Team,

I am writing to apply for the Developer position at your company. As a Computer Science graduate from Ho Chi Minh City Open University, I have hands-on experience building full-stack web applications using JavaScript and TypeScript.

My technical stack includes React, Next.js, Node.js, and MongoDB. I focus on writing clean code, optimizing queries, and delivering responsive layouts.

Please find my CV attached for more details on my projects and skills. I look forward to discussing my application in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0923202861`,
  },
  warm: {
    vi: `[Tiêu đề Email: Ứng tuyển Lập trình viên – Mong muốn đồng hành cùng Quý công ty]

Kính gửi Bộ phận Tuyển dụng,

Tôi tên là Trương Đình Anh, một lập trình viên đam mê công nghệ vừa tốt nghiệp Đại học Mở TP.HCM. Tôi theo dõi hoạt động của Quý công ty đã lâu và rất ấn tượng với định hướng cũng như các sản phẩm mà công ty đang xây dựng. Vì vậy, tôi rất hào hứng gửi hồ sơ ứng tuyển này.

Với kinh nghiệm tự xây dựng các dự án web từ con số không và không ngừng nghiên cứu các công nghệ mới, tôi tin rằng tinh thần tự học chủ động và trách nhiệm cao của mình sẽ mang lại giá trị tích cực cho đội ngũ phát triển.

Tôi xin gửi kèm CV và rất mong được gặp gỡ để chia sẻ thêm về đam mê lập trình cũng như định hướng đóng góp lâu dài tại công ty.

Chúc Quý công ty một ngày làm việc hiệu quả!

Trân trọng,
Trương Đình Anh
SĐT: 0923202861`,
    en: `[Subject: Job Application: Developer – Enthusiastic and Ready to Contribute]

Dear Hiring Team,

My name is Truong Dinh Anh, a passionate developer and Computer Science graduate from Ho Chi Minh City Open University. I have been following your company's achievements and am truly inspired by the culture and products you build. I am thrilled to submit my application.

Having built web projects from scratch and constantly explored modern technologies, I am confident that my self-driven learning attitude and strong sense of responsibility will make a positive impact on your team.

I have attached my CV and would love the opportunity to share more about my passion and how I can contribute to your long-term goals.

Have a wonderful day!

Sincerely,
Truong Dinh Anh
Phone: 0923202861`,
  },
};

function getLocalStorageKey() {
  return `cv_cl_${cvVersion}_${currentLang}_${currentTemplate}`;
}

function getDefaultTemplateText(templateId) {
  if (
    cvData[currentLang] &&
    cvData[currentLang].coverLetters &&
    cvData[currentLang].coverLetters[templateId]
  ) {
    return cvData[currentLang].coverLetters[templateId];
  }
  if (
    templateId === "tech" &&
    cvData[currentLang] &&
    cvData[currentLang].coverLetter
  ) {
    return cvData[currentLang].coverLetter;
  }
  return clTemplates[templateId] ? clTemplates[templateId][currentLang] : "";
}

function renderMarkdownToHtml(md) {
  if (!md) return "";
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/^---$/gm, '<hr class="cl-preview-hr">');

  const lines = html.split("\n");
  let inList = false;
  const processedLines = lines.map((line) => {
    const trimmed = line.trim();
    if (
      trimmed.startsWith("- ") ||
      trimmed.startsWith("* ") ||
      trimmed.startsWith("• ")
    ) {
      const content = trimmed.substring(2);
      let res = "";
      if (!inList) {
        inList = true;
        res += '<ul class="cl-preview-list">';
      }
      res += `<li>${content}</li>`;
      return res;
    } else {
      let res = "";
      if (inList) {
        inList = false;
        res += "</ul>";
      }
      return res + line;
    }
  });
  if (inList) {
    processedLines.push("</ul>");
  }
  html = processedLines.join("\n");

  const paragraphs = html.split(/\n\n+/);
  html = paragraphs
    .map((p) => {
      const trimmed = p.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<li")
      ) {
        return trimmed;
      }
      return `<p class="cl-preview-p">${trimmed.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");

  return html;
}

function populateTemplateOptions() {
  const select = document.getElementById("clTemplateSelect");
  if (!select) return;

  const options =
    currentLang === "vi"
      ? [
          { value: "tech", text: "Chuyên môn 💻" },
          { value: "short", text: "Ngắn gọn ⚡" },
          { value: "warm", text: "Thân thiện 😊" },
        ]
      : [
          { value: "tech", text: "Tech Focus 💻" },
          { value: "short", text: "Concise ⚡" },
          { value: "warm", text: "Warm & Cultural 😊" },
        ];

  select.innerHTML = options
    .map(
      (opt) =>
        `<option value="${opt.value}" ${opt.value === currentTemplate ? "selected" : ""}>${opt.text}</option>`,
    )
    .join("");
}

function syncCoverLetterLangButtons() {
  const clLangViBtn = document.getElementById("clLangViBtn");
  const clLangEnBtn = document.getElementById("clLangEnBtn");
  if (clLangViBtn && clLangEnBtn) {
    if (currentLang === "vi") {
      clLangViBtn.classList.add("active");
      clLangEnBtn.classList.remove("active");
    } else {
      clLangEnBtn.classList.add("active");
      clLangViBtn.classList.remove("active");
    }
  }
}

function updateCoverLetterText() {
  const clTextArea = document.getElementById("clTextArea");
  const clPreviewContainer = document.getElementById("clPreviewContainer");
  if (!clTextArea) return;

  populateTemplateOptions();
  syncCoverLetterLangButtons();

  // Localize modal static text based on currentLang
  const clModalTitle = document.getElementById("clModalTitle");
  const clModalSubtitle = document.getElementById("clModalSubtitle");
  const editorLabel = document.querySelector(".cl-editor-pane .pane-label");
  const previewLabel = document.querySelector(".cl-preview-pane .pane-label");
  const clResetBtn = document.getElementById("clResetBtn");
  const clCopyBtn = document.getElementById("clCopyBtn");
  const coverLetterBtn = document.getElementById("coverLetterBtn");

  if (currentLang === "vi") {
    if (clModalTitle) clModalTitle.innerHTML = "✉️ Thư giới thiệu";
    if (clModalSubtitle)
      clModalSubtitle.innerHTML =
        "Một thư giới thiệu ngắn gọn, chỉn chu sẽ giúp bạn trở nên chuyên nghiệp và gây ấn tượng hơn với nhà tuyển dụng.";
    if (editorLabel) editorLabel.innerHTML = "✏️ Biên soạn (Raw Text)";
    if (previewLabel) previewLabel.innerHTML = "👀 Xem trước (HTML Preview)";
    if (
      clResetBtn &&
      !clResetBtn.textContent.includes("⚠️") &&
      !clResetBtn.textContent.includes("✓")
    ) {
      clResetBtn.textContent = "Khôi phục 🔄";
    }
    if (clCopyBtn && !clCopyBtn.textContent.includes("✓")) {
      clCopyBtn.textContent = "Sao chép 📋";
    }
    if (coverLetterBtn) {
      coverLetterBtn.textContent = "✉️ Thư & Email ứng tuyển";
      coverLetterBtn.setAttribute("title", "Soạn Email Ứng Tuyển 1-Click & Thư giới thiệu (Cover Letter)");
    }
  } else {
    if (clModalTitle) clModalTitle.innerHTML = "✉️ Cover Letter & Application Email";
    if (clModalSubtitle)
      clModalSubtitle.innerHTML =
        "A concise, well-written cover letter or application email will help you stand out and make a professional impression on recruiters.";
    if (editorLabel) editorLabel.innerHTML = "✏️ Editor (Raw Text)";
    if (previewLabel) previewLabel.innerHTML = "👀 HTML Preview";
    if (
      clResetBtn &&
      !clResetBtn.textContent.includes("⚠️") &&
      !clResetBtn.textContent.includes("✓")
    ) {
      clResetBtn.textContent = "Reset 🔄";
    }
    if (clCopyBtn && !clCopyBtn.textContent.includes("✓")) {
      clCopyBtn.textContent = "Copy 📋";
    }
    if (coverLetterBtn) {
      coverLetterBtn.textContent = "✉️ Cover Letter & Email";
      coverLetterBtn.setAttribute("title", "Application Email & Cover Letter");
    }
  }

  const key = getLocalStorageKey();
  const cachedText = localStorage.getItem(key);

  let text = "";
  // Tự động bỏ qua cache nếu là text placeholder cũ '**Hello World**' để đồng bộ nội dung chuẩn từ file data
  if (
    cachedText !== null &&
    cachedText.trim() !== "" &&
    cachedText.trim() !== "**Hello World**"
  ) {
    text = cachedText;
  } else {
    text = getDefaultTemplateText(currentTemplate);
  }

  clTextArea.value = text;
  if (clPreviewContainer) {
    clPreviewContainer.innerHTML = renderMarkdownToHtml(text);
  }
}

// Setup Event Listeners for Cover Letter Modal
function initCoverLetter() {
  const clTextArea = document.getElementById("clTextArea");
  const clResetBtn = document.getElementById("clResetBtn");
  const clCopyBtn = document.getElementById("clCopyBtn");
  const coverLetterBtn = document.getElementById("coverLetterBtn");
  const clModalOverlay = document.getElementById("clModalOverlay");
  const clModalCloseBtn = document.getElementById("clModalCloseBtn");
  const clTemplateSelect = document.getElementById("clTemplateSelect");
  const clLangViBtn = document.getElementById("clLangViBtn");
  const clLangEnBtn = document.getElementById("clLangEnBtn");

  if (clTextArea) {
    clTextArea.addEventListener("input", () => {
      const text = clTextArea.value;
      const key = getLocalStorageKey();
      localStorage.setItem(key, text);

      const clPreviewContainer = document.getElementById("clPreviewContainer");
      if (clPreviewContainer) {
        clPreviewContainer.innerHTML = renderMarkdownToHtml(text);
      }
    });
  }

  if (clTemplateSelect) {
    clTemplateSelect.onchange = (e) => {
      currentTemplate = e.target.value;
      updateCoverLetterText();
    };
  }

  if (clLangViBtn) {
    clLangViBtn.onclick = () => {
      if (currentLang !== "vi" && elements.langViBtn) {
        elements.langViBtn.click();
      }
    };
  }

  if (clLangEnBtn) {
    clLangEnBtn.onclick = () => {
      if (currentLang !== "en" && elements.langEnBtn) {
        elements.langEnBtn.click();
      }
    };
  }

  if (clResetBtn) {
    let confirmTimeout = null;
    let isConfirming = false;

    clResetBtn.onclick = () => {
      if (!isConfirming) {
        // Bước 1: Chuyển sang trạng thái chờ xác nhận
        isConfirming = true;
        clResetBtn.textContent =
          currentLang === "vi" ? "Xác nhận khôi phục? ⚠️" : "Confirm Reset? ⚠️";
        clResetBtn.style.backgroundColor = "#d90429";
        clResetBtn.style.color = "#ffffff";
        clResetBtn.style.borderColor = "#d90429";

        confirmTimeout = setTimeout(() => {
          // Trở lại trạng thái bình thường nếu không nhấn lại trong 3 giây
          isConfirming = false;
          clResetBtn.textContent =
            currentLang === "vi" ? "Khôi phục 🔄" : "Reset 🔄";
          clResetBtn.style.backgroundColor = "";
          clResetBtn.style.color = "";
          clResetBtn.style.borderColor = "";
        }, 3000);
      } else {
        // Bước 2: Thực hiện hành động khôi phục
        clearTimeout(confirmTimeout);
        isConfirming = false;

        clResetBtn.textContent =
          currentLang === "vi" ? "Đã khôi phục! ✓" : "Reset Success! ✓";
        clResetBtn.style.backgroundColor = "#2d6a4f";
        clResetBtn.style.color = "#ffffff";
        clResetBtn.style.borderColor = "#2d6a4f";

        const key = getLocalStorageKey();
        localStorage.removeItem(key);
        updateCoverLetterText();

        setTimeout(() => {
          clResetBtn.textContent =
            currentLang === "vi" ? "Khôi phục 🔄" : "Reset 🔄";
          clResetBtn.style.backgroundColor = "";
          clResetBtn.style.color = "";
          clResetBtn.style.borderColor = "";
        }, 1500);
      }
    };
  }

  if (clCopyBtn && clTextArea) {
    clCopyBtn.onclick = () => {
      const text = clTextArea.value;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          const originalText = clCopyBtn.textContent;
          clCopyBtn.innerHTML =
            currentLang === "vi" ? "Đã sao chép! ✓" : "Copied! ✓";
          clCopyBtn.style.background = "#2d6a4f";
          setTimeout(() => {
            clCopyBtn.innerHTML = originalText;
            clCopyBtn.style.background = "";
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          alert(
            currentLang === "vi"
              ? "Không thể sao chép tự động. Vui lòng chọn và sao chép thủ công."
              : "Could not copy automatically. Please select and copy manually.",
          );
        });
    };
  }

  window.updateCoverLetterText = updateCoverLetterText;

  if (coverLetterBtn && clModalOverlay) {
    coverLetterBtn.onclick = () => {
      if (window.cvEmailGen && typeof window.cvEmailGen.openModal === "function") {
        window.cvEmailGen.openModal(null, "email");
      } else {
        updateCoverLetterText();
        clModalOverlay.style.display = "flex";
        clModalOverlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }
    };

    const closeModal = () => {
      clModalOverlay.style.display = "none";
      clModalOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    if (clModalCloseBtn) {
      clModalCloseBtn.onclick = closeModal;
    }

    clModalOverlay.onclick = (e) => {
      if (e.target === clModalOverlay) {
        closeModal();
      }
    };

    window.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        clModalOverlay.getAttribute("aria-hidden") === "false"
      ) {
        closeModal();
      }
    });
  }

  // ===================================
  // LIVE EDIT & EXPORT MANAGER
  // ===================================
  let isLiveEditing = false;

  const liveEditBtn = document.getElementById("liveEditBtn");
  const exportCvBtn = document.getElementById("exportCvBtn");
  const exportModalOverlay = document.getElementById("exportModalOverlay");
  const exportModalCloseBtn = document.getElementById("exportModalCloseBtn");
  const exportTextArea = document.getElementById("exportTextArea");
  const exportClearBtn = document.getElementById("exportClearBtn");
  const exportDownloadBtn = document.getElementById("exportDownloadBtn");
  const exportCopyBtn = document.getElementById("exportCopyBtn");

  function applyLiveEditState() {
    const preview = elements.preview;
    if (!preview) return;
    
    if (isLiveEditing) {
      preview.classList.add("live-editing");
      if (liveEditBtn) {
        liveEditBtn.classList.add("active");
        liveEditBtn.setAttribute("aria-pressed", "true");
        liveEditBtn.textContent = currentLang === "vi" ? "Chỉnh sửa: Bật ✏️" : "Live Edit: ON ✏️";
      }
      if (exportCvBtn) {
        exportCvBtn.style.display = "flex";
      }
      
      // Select all elements with data-edit-key and make them editable
      preview.querySelectorAll("[data-edit-key]").forEach(el => {
        el.setAttribute("contenteditable", "true");
        el.onblur = (e) => {
          const path = el.getAttribute("data-edit-key");
          const newValue = el.innerText.trim();
          saveLiveEditChange(path, newValue, el);
        };
        el.onkeydown = (e) => {
          if (e.key === "Enter") {
            const editKey = el.getAttribute("data-edit-key") || "";
            const isMultiline = el.classList.contains("cv-objective") || 
                                editKey.endsWith(".desc") || 
                                editKey.endsWith(".detail") ||
                                el.tagName === "LI";
            if (!isMultiline) {
              e.preventDefault();
              el.blur();
            }
          }
        };
      });
    } else {
      preview.classList.remove("live-editing");
      if (liveEditBtn) {
        liveEditBtn.classList.remove("active");
        liveEditBtn.setAttribute("aria-pressed", "false");
        liveEditBtn.textContent = currentLang === "vi" ? "Chỉnh sửa nhanh ✏️" : "Live Edit ✏️";
      }
      if (exportCvBtn) {
        exportCvBtn.style.display = "none";
      }
      
      preview.querySelectorAll("[data-edit-key]").forEach(el => {
        el.removeAttribute("contenteditable");
        el.onblur = null;
        el.onkeydown = null;
      });
    }
  }

  // Expose it to global window scope so renderCV can call it
  window.applyLiveEditState = applyLiveEditState;

  function saveLiveEditChange(path, value, el) {
    if (!path) return;

    if (el && el.tagName === "A") {
      let cleanUrl = value;
      if (!/^https?:\/\//i.test(cleanUrl) && !/^mailto:/i.test(cleanUrl) && !/^tel:/i.test(cleanUrl)) {
        cleanUrl = "https://" + cleanUrl;
      }
      el.setAttribute("href", cleanUrl);
    }

    if (path.startsWith("globalPool.")) {
      const rest = path.substring(11);
      const dotIdx = rest.indexOf('.');
      if (dotIdx > -1) {
        const projId = rest.substring(0, dotIdx);
        const field = rest.substring(dotIdx + 1);
        
        const poolProj = globalProjectPool.find(p => p.id === projId);
        if (poolProj && poolProj[currentLang]) {
          if (field.startsWith("tasks.")) {
            const taskIdx = parseInt(field.split('.')[1]);
            if (Array.isArray(poolProj[currentLang].tasks) && poolProj[currentLang].tasks[taskIdx] !== undefined) {
              poolProj[currentLang].tasks[taskIdx] = value;
            }
          } else {
            poolProj[currentLang][field] = value;
          }
          
          const cachedPoolKey = `cv_global_project_pool_${currentLang}`;
          localStorage.setItem(cachedPoolKey, JSON.stringify(globalProjectPool));
        }
      }
      return;
    }

    const parts = path.split('.');
    let curr = cvData[currentLang];
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (curr[part] === undefined) {
        curr[part] = {};
      }
      curr = curr[part];
    }
    
    const lastPart = parts[parts.length - 1];
    curr[lastPart] = value;

    const cachedKey = `cv_data_${cvVersion}_${currentLang}`;
    localStorage.setItem(cachedKey, JSON.stringify(cvData[currentLang]));
  }

  if (liveEditBtn) {
    liveEditBtn.onclick = () => {
      isLiveEditing = !isLiveEditing;
      applyLiveEditState();
    };
  }

  const closeExportModal = () => {
    if (exportModalOverlay) {
      exportModalOverlay.style.display = "none";
      exportModalOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  };

  if (exportCvBtn && exportModalOverlay) {
    exportCvBtn.onclick = () => {
      const fileHeader = `// ===================================
// CV DATA - ${cvVersion.toUpperCase()} (Edited via Live Edit Mode)
// ===================================

if (typeof require !== 'undefined' && typeof cvGlobalEdu === 'undefined') {
    global.cvGlobalEdu = require('./cv-global.js');
}

var cvData = ${JSON.stringify(cvData, null, 2)};
`;

      if (exportTextArea) {
        exportTextArea.value = fileHeader;
      }
      exportModalOverlay.style.display = "flex";
      exportModalOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    if (exportModalCloseBtn) {
      exportModalCloseBtn.onclick = closeExportModal;
    }

    exportModalOverlay.onclick = (e) => {
      if (e.target === exportModalOverlay) {
        closeExportModal();
      }
    };

    window.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        exportModalOverlay.getAttribute("aria-hidden") === "false"
      ) {
        closeExportModal();
      }
    });
  }

  if (exportCopyBtn && exportTextArea) {
    exportCopyBtn.onclick = () => {
      const text = exportTextArea.value;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          const originalText = exportCopyBtn.textContent;
          exportCopyBtn.innerHTML =
            currentLang === "vi" ? "Đã sao chép! ✓" : "Copied! ✓";
          exportCopyBtn.style.background = "#2d6a4f";
          setTimeout(() => {
            exportCopyBtn.innerHTML = originalText;
            exportCopyBtn.style.background = "";
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          alert(
            currentLang === "vi"
              ? "Không thể sao chép tự động. Vui lòng chọn và sao chép thủ công."
              : "Could not copy automatically. Please select and copy manually.",
          );
        });
    };
  }

  if (exportDownloadBtn && exportTextArea) {
    exportDownloadBtn.onclick = () => {
      const text = exportTextArea.value;
      const blob = new Blob([text], { type: "application/javascript;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cv-data-${cvVersion}.js`;
      a.click();
      URL.revokeObjectURL(url);
    };
  }

  if (exportClearBtn) {
    exportClearBtn.onclick = () => {
      const confirmClear = confirm(
        currentLang === "vi"
          ? "Bạn có chắc chắn muốn xóa toàn bộ các chỉnh sửa đã lưu và quay về dữ liệu gốc từ file không?"
          : "Are you sure you want to clear all saved edits and restore the original data from the file?"
      );
      if (confirmClear) {
        localStorage.removeItem(`cv_data_${cvVersion}_vi`);
        localStorage.removeItem(`cv_data_${cvVersion}_en`);
        localStorage.removeItem(`cv_global_project_pool_vi`);
        localStorage.removeItem(`cv_global_project_pool_en`);
        window.location.reload();
      }
    };
  }
}

// ===================================
// SETTINGS DRAWER MANAGER
// ===================================
function initSettingsDrawer() {
  const settingsBtn = document.getElementById("settingsBtn");
  const overlay = document.getElementById("settingsDrawerOverlay");
  const closeBtn = document.getElementById("settingsDrawerCloseBtn");
  const saveBtn = document.getElementById("settingsSaveBtn");
  const resetBtn = document.getElementById("settingsResetBtn");

  const colorPicker = document.getElementById("primaryColorPicker");
  const fontFamilySelect = document.getElementById("fontFamilySelect");

  const sectionMarginSlider = document.getElementById("drawerSectionMarginSlider");
  const sectionMarginVal = document.getElementById("drawerSectionMarginVal");
  const itemMarginSlider = document.getElementById("drawerItemMarginSlider");
  const itemMarginVal = document.getElementById("drawerItemMarginVal");
  const sectionListContainer = document.getElementById("sectionListContainer");

  if (!settingsBtn || !overlay) return;

  // Toggle Drawer
  settingsBtn.onclick = () => {
    loadSettingsToDrawer();
    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.onclick = closeDrawer;
  if (saveBtn) saveBtn.onclick = closeDrawer;

  overlay.onclick = (e) => {
    if (e.target === overlay) {
      closeDrawer();
    }
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.getAttribute("aria-hidden") === "false") {
      closeDrawer();
    }
  });

  // Load state to controls in Drawer
  function loadSettingsToDrawer() {
    const d = cvData[currentLang];
    
    // Color
    colorPicker.value = d.primaryColor || "#1e3a8a";
    
    // Font
    if (d.fontFamily) {
      fontFamilySelect.value = d.fontFamily;
    } else {
      fontFamilySelect.selectedIndex = 0;
    }

    // Spacing (load from element styles or defaults)
    const currentSectionMargin = elements.preview.style.getPropertyValue("--cv-section-margin") || DEFAULT_SECTION_MARGIN;
    const currentItemMargin = elements.preview.style.getPropertyValue("--cv-item-margin") || DEFAULT_ITEM_MARGIN;
    
    const secVal = parseInt(currentSectionMargin);
    const itemVal = parseInt(currentItemMargin);

    sectionMarginSlider.value = isNaN(secVal) ? 10 : secVal;
    sectionMarginVal.textContent = sectionMarginSlider.value + "px";

    itemMarginSlider.value = isNaN(itemVal) ? 8 : itemVal;
    itemMarginVal.textContent = itemMarginSlider.value + "px";

    // Render section reordering list
    renderSectionList();
  }

  // Live styling updates from Drawer controls
  colorPicker.oninput = (e) => {
    const color = e.target.value;
    cvData[currentLang].primaryColor = color;
    elements.preview.style.setProperty("--cv-color", color);
    saveSettings();
  };

  fontFamilySelect.onchange = (e) => {
    const font = e.target.value;
    cvData[currentLang].fontFamily = font;
    elements.preview.style.setProperty("font-family", font);
    saveSettings();
  };

  sectionMarginSlider.oninput = (e) => {
    const val = parseInt(e.target.value);
    sectionMarginVal.textContent = val + "px";
    elements.preview.style.setProperty("--cv-section-margin", val + "px");
    if (!a4ModeActive) {
      elements.preview.style.height = "auto";
      elements.preview.style.overflow = "visible";
    }
    if (typeof updateA4FitMeter === "function") {
      requestAnimationFrame(updateA4FitMeter);
    }
    
    // Sync with main floating toolbar if exists
    if (elements.sectionMarginSlider) {
      elements.sectionMarginSlider.value = val;
      if (elements.sectionMarginVal) elements.sectionMarginVal.textContent = val + "px";
    }
    
    cvData[currentLang].sectionMargin = val + "px";
    saveSettings();
  };

  itemMarginSlider.oninput = (e) => {
    const val = parseInt(e.target.value);
    itemMarginVal.textContent = val + "px";
    elements.preview.style.setProperty("--cv-item-margin", val + "px");
    if (!a4ModeActive) {
      elements.preview.style.height = "auto";
      elements.preview.style.overflow = "visible";
    }
    if (typeof updateA4FitMeter === "function") {
      requestAnimationFrame(updateA4FitMeter);
    }

    // Sync with main floating toolbar if exists
    if (elements.itemMarginSlider) {
      elements.itemMarginSlider.value = val;
      if (elements.itemMarginVal) elements.itemMarginVal.textContent = val + "px";
    }

    cvData[currentLang].itemMargin = val + "px";
    saveSettings();
  };

  function saveSettings() {
    const cachedKey = `cv_data_${cvVersion}_${currentLang}`;
    localStorage.setItem(cachedKey, JSON.stringify(cvData[currentLang]));
  }

  // Reset all custom settings to default
  if (resetBtn) {
    resetBtn.onclick = () => {
      const confirmReset = confirm(
        currentLang === "vi" 
          ? "Khôi phục toàn bộ giao diện và bố cục về mặc định?"
          : "Reset all theme and layout settings to default?"
      );
      if (confirmReset) {
        const cachedKey = `cv_data_${cvVersion}_${currentLang}`;
        const cached = localStorage.getItem(cachedKey);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            delete parsed.primaryColor;
            delete parsed.fontFamily;
            delete parsed.sectionOrder;
            delete parsed.hiddenSections;
            delete parsed.sectionMargin;
            delete parsed.itemMargin;
            localStorage.setItem(cachedKey, JSON.stringify(parsed));
          } catch (e) {
            console.error(e);
          }
        }
        window.location.reload();
      }
    };
  }

  // Dynamic sections sorting and hiding list
  function renderSectionList() {
    const d = cvData[currentLang];
    const defaultSectionOrder = ["objective", "education", "experience", "projects", "skills"];
    const order = d.sectionOrder || defaultSectionOrder;
    const hidden = d.hiddenSections || [];

    const sectionLabels = {
      vi: {
        objective: "🎯 Mục tiêu nghề nghiệp",
        education: "🎓 Học vấn",
        experience: "💼 Kinh nghiệm làm việc",
        projects: "💻 Dự án thực tế",
        skills: "🛠️ Kỹ năng chuyên môn"
      },
      en: {
        objective: "🎯 Objective",
        education: "🎓 Education",
        experience: "💼 Experience",
        projects: "💻 Projects",
        skills: "🛠️ Skills"
      }
    };

    sectionListContainer.innerHTML = order.map((sectionId, idx) => {
      const isVisible = !hidden.includes(sectionId);
      const label = sectionLabels[currentLang][sectionId] || sectionId;
      return `
        <div class="section-item-drag" data-section-id="${sectionId}" draggable="true">
          <div class="section-item-drag-left">
            <span class="section-drag-handle">☰</span>
            <span class="section-item-name ${isVisible ? '' : 'disabled'}">${label}</span>
          </div>
          <div class="section-item-actions">
            <button class="section-action-btn section-move-up" title="Di chuyển lên" ${idx === 0 ? 'disabled' : ''}>▲</button>
            <button class="section-action-btn section-move-down" title="Di chuyển xuống" ${idx === order.length - 1 ? 'disabled' : ''}>▼</button>
            <button class="section-action-btn section-toggle-btn" title="${isVisible ? 'Ẩn phần' : 'Hiện phần'}">
              ${isVisible ? '👁️' : '🙈'}
            </button>
          </div>
        </div>
      `;
    }).join("");

    // Attach drag events
    let dragEl = null;

    sectionListContainer.querySelectorAll(".section-item-drag").forEach(el => {
      el.ondragstart = (e) => {
        dragEl = el;
        el.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      };

      el.ondragend = () => {
        el.classList.remove("dragging");
        dragEl = null;
        updateOrderFromDOM();
      };

      el.ondragover = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        const target = e.target.closest(".section-item-drag");
        if (target && target !== dragEl) {
          const rect = target.getBoundingClientRect();
          const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
          sectionListContainer.insertBefore(dragEl, next ? target.nextSibling : target);
        }
      };
    });

    // Attach click events for up/down/toggle
    sectionListContainer.querySelectorAll(".section-item-drag").forEach((el, idx) => {
      const sectionId = el.getAttribute("data-section-id");

      const upBtn = el.querySelector(".section-move-up");
      const downBtn = el.querySelector(".section-move-down");
      const toggleBtn = el.querySelector(".section-toggle-btn");

      upBtn.onclick = () => {
        const order = d.sectionOrder || [...defaultSectionOrder];
        const index = order.indexOf(sectionId);
        if (index > 0) {
          order.splice(index, 1);
          order.splice(index - 1, 0, sectionId);
          d.sectionOrder = order;
          saveSettings();
          renderCV(currentLang);
          renderSectionList();
        }
      };

      downBtn.onclick = () => {
        const order = d.sectionOrder || [...defaultSectionOrder];
        const index = order.indexOf(sectionId);
        if (index > -1 && index < order.length - 1) {
          order.splice(index, 1);
          order.splice(index + 1, 0, sectionId);
          d.sectionOrder = order;
          saveSettings();
          renderCV(currentLang);
          renderSectionList();
        }
      };

      toggleBtn.onclick = () => {
        const hidden = d.hiddenSections || [];
        const index = hidden.indexOf(sectionId);
        if (index > -1) {
          hidden.splice(index, 1); // Show it
        } else {
          hidden.push(sectionId); // Hide it
        }
        d.hiddenSections = hidden;
        saveSettings();
        renderCV(currentLang);
        renderSectionList();
      };
    });
    window.renderSectionList = renderSectionList;
  }

  function updateOrderFromDOM() {
    const newOrder = Array.from(sectionListContainer.querySelectorAll(".section-item-drag"))
      .map(el => el.getAttribute("data-section-id"));
    
    cvData[currentLang].sectionOrder = newOrder;
    saveSettings();
    renderCV(currentLang);
  }
}

// ===================================
// CV VERSION DIFF / COMPARISON VIEWER
// ===================================
const diffVersionCache = {};

function initDiffViewer() {
  const diffBtn = document.getElementById("diffBtn");
  const modalOverlay = document.getElementById("diffModalOverlay");
  const closeBtn = document.getElementById("diffModalCloseBtn");
  const footerCloseBtn = document.getElementById("diffCloseBtn");
  const selectA = document.getElementById("diffSelectA");
  const selectB = document.getElementById("diffSelectB");
  const swapBtn = document.getElementById("diffSwapBtn");
  const filterDiffsBtn = document.getElementById("diffFilterDiffsBtn");
  const langViBtn = document.getElementById("diffLangViBtn");
  const langEnBtn = document.getElementById("diffLangEnBtn");
  const panelHeaderA = document.getElementById("diffPanelHeaderA");
  const panelHeaderB = document.getElementById("diffPanelHeaderB");
  const panelContentA = document.getElementById("diffPanelContentA");
  const panelContentB = document.getElementById("diffPanelContentB");
  const footerLinks = document.getElementById("diffFooterLinks");

  if (!diffBtn || !modalOverlay) return;

  let diffLang = currentLang;
  let diffOnlyDiffs = false;
  let diffShowSharedProjects = false;

  function openDiffModal() {
    diffLang = currentLang;
    syncLangButtons();
    syncFilterButton();
    populateSelectOptions();
    modalOverlay.style.display = "flex";
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    renderDiff();
  }

  function closeDiffModal() {
    modalOverlay.style.display = "none";
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  diffBtn.onclick = openDiffModal;
  if (closeBtn) closeBtn.onclick = closeDiffModal;
  if (footerCloseBtn) footerCloseBtn.onclick = closeDiffModal;

  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeDiffModal();
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.getAttribute("aria-hidden") === "false") {
      closeDiffModal();
    }
  });

  if (swapBtn) {
    swapBtn.onclick = () => {
      const temp = selectA.value;
      selectA.value = selectB.value;
      selectB.value = temp;
      renderDiff();
    };
  }

  if (filterDiffsBtn) {
    filterDiffsBtn.onclick = () => {
      diffOnlyDiffs = !diffOnlyDiffs;
      diffShowSharedProjects = false;
      syncFilterButton();
      renderDiff();
    };
  }

  function syncFilterButton() {
    if (filterDiffsBtn) {
      filterDiffsBtn.classList.toggle("active", diffOnlyDiffs);
      filterDiffsBtn.textContent = diffLang === "vi" 
        ? (diffOnlyDiffs ? "⚡ Đang lọc khác biệt" : "⚡ Chỉ khác biệt")
        : (diffOnlyDiffs ? "⚡ Filtering diffs" : "⚡ Only diffs");
    }
  }

  if (selectA) selectA.onchange = () => renderDiff();
  if (selectB) selectB.onchange = () => renderDiff();

  function syncLangButtons() {
    if (langViBtn && langEnBtn) {
      langViBtn.classList.toggle("active", diffLang === "vi");
      langEnBtn.classList.toggle("active", diffLang === "en");
    }
    const titleEl = document.getElementById("diffModalTitle");
    if (titleEl) {
      titleEl.textContent = diffLang === "vi" ? "⚖️ So Sánh CV" : "⚖️ CV Comparison";
    }
    if (footerCloseBtn) {
      footerCloseBtn.textContent = diffLang === "vi" ? "Đóng ✓" : "Close ✓";
    }
    syncFilterButton();
  }

  if (langViBtn) {
    langViBtn.onclick = () => {
      diffLang = "vi";
      syncLangButtons();
      populateSelectOptions();
      renderDiff();
    };
  }

  if (langEnBtn) {
    langEnBtn.onclick = () => {
      diffLang = "en";
      syncLangButtons();
      populateSelectOptions();
      renderDiff();
    };
  }

  function populateSelectOptions() {
    const manifest = window.CV_MANIFEST || [];
    const prevA = selectA.value;
    const prevB = selectB.value;

    const hasLocalDraft = localStorage.getItem(`cv_data_${cvVersion}_${diffLang}`);
    
    let optionsHtml = "";
    if (hasLocalDraft) {
      const draftLabel = diffLang === "vi" 
        ? `✏️ Bản nháp đang sửa (${cvVersion})`
        : `✏️ Local Draft (${cvVersion})`;
      optionsHtml += `<option value="__local_draft__">${draftLabel}</option>`;
    }

    manifest.forEach(v => {
      optionsHtml += `<option value="${v.key}">${v.emoji} ${v.label.replace(/^[^\w\s\u00C0-\u1EF9]+/, '').trim()}</option>`;
    });

    selectA.innerHTML = optionsHtml;
    selectB.innerHTML = optionsHtml;

    if (prevA && selectA.querySelector(`option[value="${prevA}"]`)) {
      selectA.value = prevA;
    } else {
      selectA.value = cvVersion || "default";
    }

    if (prevB && selectB.querySelector(`option[value="${prevB}"]`)) {
      selectB.value = prevB;
    } else {
      if (selectA.value === "default") {
        const second = manifest.find(v => v.key !== "default");
        selectB.value = second ? second.key : "default";
      } else {
        selectB.value = "default";
      }
    }
  }

  // Load a single CV version with strict sequential isolation
  async function fetchVersionData(versionKey) {
    if (versionKey === "__local_draft__") {
      return JSON.parse(JSON.stringify(window.cvData || {}));
    }
    if (diffVersionCache[versionKey]) {
      return diffVersionCache[versionKey];
    }
    const manifest = window.CV_MANIFEST || [];
    const ver = manifest.find(v => v.key === versionKey);
    if (!ver) return null;

    const currentCvData = window.cvData;
    try {
      const loaded = await loadDataScript(ver.file);
      const cloned = JSON.parse(JSON.stringify(loaded || {}));
      diffVersionCache[versionKey] = cloned;
      window.cvData = currentCvData;
      return cloned;
    } catch (e) {
      console.error("Failed to load script for diff:", e);
      window.cvData = currentCvData;
      return null;
    }
  }

  // Extract clean tech tags
  function extractTechTags(skillsArr) {
    if (!Array.isArray(skillsArr)) return [];
    const tags = new Set();
    skillsArr.forEach(s => {
      if (s && s.items) {
        s.items.split(/[,;•|]/).forEach(item => {
          const clean = item.replace(/\(.*?\)/g, "").trim();
          if (clean && clean.length > 1 && clean.length < 35) {
            tags.add(clean);
          }
        });
      }
    });
    return Array.from(tags);
  }

  window.__toggleDiffShared = () => {
    diffShowSharedProjects = !diffShowSharedProjects;
    renderDiff();
  };

  // Render a single panel's content
  function renderPanelContent(data, lang, techOwn, allProjectIds, myMap, otherMap, isA) {
    const colorClass = isA ? "diff-tag-a" : "diff-tag-b";
    const projsAll = (data.projects || []).concat(data.experience || []);

    // --- Objective ---
    let html = `
      <div class="diff-section">
        <div class="diff-section-label">${lang === "vi" ? "🎯 Mục tiêu & Tóm tắt" : "🎯 Objective"}</div>
        <div class="diff-objective-text">${esc(data.objective || (lang === "vi" ? "— Chưa có —" : "— None —"))}</div>
      </div>
    `;

    // --- Unique tech tags ---
    if (techOwn.length > 0) {
      html += `
        <div class="diff-section">
          <div class="diff-section-label">${lang === "vi" ? "⭐ Công nghệ đặc trưng (chỉ bản này)" : "⭐ Unique tech (this version only)"}</div>
          <div class="diff-tag-group">
            ${techOwn.map(t => `<span class="diff-tag ${colorClass}">${esc(t)}</span>`).join("")}
          </div>
        </div>
      `;
    } else if (diffOnlyDiffs) {
      html += `
        <div class="diff-section" style="opacity:0.7;">
          <div class="diff-section-label">${lang === "vi" ? "⭐ Công nghệ đặc trưng" : "⭐ Unique tech"}</div>
          <div style="font-size: 11px; font-style: italic; color: #666;">${lang === "vi" ? "Không có tech stack riêng biệt so với bản còn lại." : "No unique tech stack compared to the other version."}</div>
        </div>
      `;
    }

    // --- Skills ---
    const skills = data.skills || [];
    if (skills.length > 0 && !diffOnlyDiffs) {
      html += `
        <div class="diff-section">
          <div class="diff-section-label">${lang === "vi" ? "🛠️ Kỹ năng" : "🛠️ Skills"}</div>
          ${skills.map(s => `
            <div class="diff-skill-cat">
              <div class="diff-skill-cat-name">${esc(s.cat || "")}</div>
              <div class="diff-skill-items">${esc(s.items || "")}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // --- Projects & Experience ---
    const sharedIds = allProjectIds.filter(id => myMap.has(id) && otherMap.has(id));
    const uniqueIds = allProjectIds.filter(id => myMap.has(id) && !otherMap.has(id));
    const absentIds = allProjectIds.filter(id => !myMap.has(id) && otherMap.has(id));

    html += `
      <div class="diff-section">
        <div class="diff-section-label">${lang === "vi" ? "💼 Dự án & Kinh nghiệm" : "💼 Projects & Experience"}</div>
    `;

    if (diffOnlyDiffs && sharedIds.length > 0) {
      const bannerText = diffShowSharedProjects
        ? (lang === "vi" ? `🤝 ${sharedIds.length} dự án trùng khớp (đang hiện) — Bấm để thu gọn ▴` : `🤝 ${sharedIds.length} shared projects (showing) — Click to collapse ▴`)
        : (lang === "vi" ? `🤝 ${sharedIds.length} dự án giống nhau ở cả 2 bản — Bấm để xem chi tiết ▾` : `🤝 ${sharedIds.length} shared projects in both — Click to view ▾`);
      html += `
        <div class="diff-shared-banner" onclick="window.__toggleDiffShared()">
          <span>${bannerText}</span>
        </div>
      `;
    }

    allProjectIds.forEach(id => {
      const inMe = myMap.get(id);
      const inOther = otherMap.get(id);
      const isUnique = inMe && !inOther;
      const isShared = inMe && inOther;

      // When filtering diffs only and shared projects are collapsed, skip shared projects
      if (diffOnlyDiffs && isShared && !diffShowSharedProjects) {
        return;
      }

      if (!inMe) {
        // This project is only in the other version
        const name = inOther ? (inOther.name || id) : id;
        html += `
          <div class="diff-proj-card" style="opacity:0.4; border-style: dashed;">
            <div class="diff-proj-name" style="color:#aaa;">
              ${esc(name)}
              <span class="diff-proj-unique-badge" style="background:#f1f3f5; color:#888; border-color:#ccc;">${lang === "vi" ? "Không có" : "Not in this"}</span>
            </div>
          </div>
        `;
        return;
      }

      const p = inMe;
      html += `
        <div class="diff-proj-card${isUnique ? " unique" : ""}">
          <div class="diff-proj-name">
            ${esc(p.name || "")}
            ${isUnique ? `<span class="diff-proj-unique-badge">${lang === "vi" ? "Độc quyền ★" : "Unique ★"}</span>` : ""}
          </div>
          ${p.role ? `<div class="diff-proj-role">${esc(p.role)}</div>` : ""}
          ${p.date ? `<div class="diff-proj-date">📅 ${esc(p.date)}</div>` : ""}
          ${(p.tasks || []).length > 0 ? `
            <ul class="diff-proj-tasks">
              ${(p.tasks || []).map(t => `<li>${esc(t)}</li>`).join("")}
            </ul>
          ` : ""}
          ${p.tech ? `<div class="diff-proj-tech">🔧 ${esc(p.tech)}</div>` : ""}
        </div>
      `;
    });

    if (diffOnlyDiffs && uniqueIds.length === 0 && absentIds.length === 0) {
      html += `
        <div style="font-size: 12px; color: #2d6a4f; padding: 12px; text-align: center; background: #edf5f1; border-radius: 8px; font-weight: 600;">
          🎉 ${lang === "vi" ? "Tất cả các dự án hoàn toàn giống nhau giữa 2 bản!" : "All projects are identical between both versions!"}
        </div>
      `;
    }

    html += `</div>`;
    return html;
  }

  async function renderDiff() {
    const keyA = selectA.value;
    const keyB = selectB.value;
    const lang = diffLang;

    const loadingHtml = `
      <div class="diff-loading">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="spin">
          <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
        ${lang === "vi" ? "Đang tải..." : "Loading..."}
      </div>
    `;
    if (panelContentA) panelContentA.innerHTML = loadingHtml;
    if (panelContentB) panelContentB.innerHTML = loadingHtml;

    // Sequential fetch to prevent window.cvData race condition
    const rawA = await fetchVersionData(keyA);
    const rawB = await fetchVersionData(keyB);

    if (!rawA || !rawB) {
      const errHtml = `<div class="diff-empty-state">❌ ${lang === "vi" ? "Không thể tải dữ liệu." : "Failed to load data."}</div>`;
      if (panelContentA) panelContentA.innerHTML = errHtml;
      if (panelContentB) panelContentB.innerHTML = errHtml;
      return;
    }

    const dataA = (rawA && rawA[lang]) ? rawA[lang] : (rawA.vi || {});
    const dataB = (rawB && rawB[lang]) ? rawB[lang] : (rawB.vi || {});

    const nameA = selectA.options[selectA.selectedIndex] ? selectA.options[selectA.selectedIndex].text : keyA;
    const nameB = selectB.options[selectB.selectedIndex] ? selectB.options[selectB.selectedIndex].text : keyB;
    const titleA = dataA.title || "";
    const titleB = dataB.title || "";

    // Projects maps
    const projsA = (dataA.projects || []).concat(dataA.experience || []);
    const projsB = (dataB.projects || []).concat(dataB.experience || []);

    const mapA = new Map();
    projsA.forEach(p => { const id = normalizeProjId(p); if (id) mapA.set(id, p); });
    const mapB = new Map();
    projsB.forEach(p => { const id = normalizeProjId(p); if (id) mapB.set(id, p); });
    const allProjectIds = Array.from(new Set([...mapA.keys(), ...mapB.keys()]));

    // Tech tags
    const techListA = extractTechTags(dataA.skills || []);
    const techListB = extractTechTags(dataB.skills || []);
    const setA = new Set(techListA.map(t => t.toLowerCase()));
    const setB = new Set(techListB.map(t => t.toLowerCase()));
    const onlyTechA = techListA.filter(t => !setB.has(t.toLowerCase()));
    const onlyTechB = techListB.filter(t => !setA.has(t.toLowerCase()));

    // Panel headers
    const metaA = `${projsA.length} ${lang === "vi" ? "dự án" : "projects"} · ${techListA.length} ${lang === "vi" ? "kỹ năng" : "skills"}`;
    const metaB = `${projsB.length} ${lang === "vi" ? "dự án" : "projects"} · ${techListB.length} ${lang === "vi" ? "kỹ năng" : "skills"}`;

    if (panelHeaderA) {
      panelHeaderA.innerHTML = `
        <div class="diff-panel-version-label">Bản A · ${esc(nameA)}</div>
        <div class="diff-panel-title">${esc(titleA)}</div>
        <div class="diff-panel-meta">${metaA}</div>
      `;
    }
    if (panelHeaderB) {
      panelHeaderB.innerHTML = `
        <div class="diff-panel-version-label">Bản B · ${esc(nameB)}</div>
        <div class="diff-panel-title">${esc(titleB)}</div>
        <div class="diff-panel-meta">${metaB}</div>
      `;
    }

    if (panelContentA) {
      panelContentA.scrollTop = 0;
      panelContentA.innerHTML = renderPanelContent(dataA, lang, onlyTechA, allProjectIds, mapA, mapB, true);
    }
    if (panelContentB) {
      panelContentB.scrollTop = 0;
      panelContentB.innerHTML = renderPanelContent(dataB, lang, onlyTechB, allProjectIds, mapB, mapA, false);
    }
    const splitBody = document.getElementById("diffSplitBody");
    if (splitBody) splitBody.scrollTop = 0;

    // Footer links
    if (footerLinks) {
      const getHref = (key) => key === "default" ? "index.html" : `index.html?type=${encodeURIComponent(key)}`;
      footerLinks.innerHTML = `
        <span style="font-size: 11px; font-weight: 700; color: #555;">${lang === "vi" ? "Mở trực tiếp:" : "Open:"}</span>
        ${keyA !== "__local_draft__" ? `<a href="${getHref(keyA)}" target="_blank" class="diff-link-btn">${nameA} ↗</a>` : ""}
        ${keyB !== "__local_draft__" ? `<a href="${getHref(keyB)}" target="_blank" class="diff-link-btn">${nameB} ↗</a>` : ""}
      `;
    }
  }
}

// ===================================
// ATS & JD MATCHER ENGINE (CLIENT-SIDE)
// ===================================

const TECH_KEYWORD_DICTIONARY = [
  // Languages
  { canonical: "JavaScript", aliases: ["javascript", "js", "ecmascript"] },
  { canonical: "TypeScript", aliases: ["typescript", "ts"] },
  { canonical: "Python", aliases: ["python", "python3", "py"] },
  { canonical: "Java", aliases: ["java", "core java"] },
  { canonical: "C#", aliases: ["c#", "csharp", "c-sharp"] },
  { canonical: "C++", aliases: ["c++", "cpp"] },
  { canonical: "Golang", aliases: ["golang", "go"] },
  { canonical: "Rust", aliases: ["rust"] },
  { canonical: "PHP", aliases: ["php"] },
  { canonical: "Ruby", aliases: ["ruby"] },
  { canonical: "Dart", aliases: ["dart"] },
  { canonical: "Kotlin", aliases: ["kotlin"] },
  { canonical: "Swift", aliases: ["swift"] },
  { canonical: "SQL", aliases: ["sql", "tsql", "plsql"] },
  { canonical: "HTML5", aliases: ["html", "html5"] },
  { canonical: "CSS3", aliases: ["css", "css3"] },

  // Frontend
  { canonical: "React", aliases: ["react", "reactjs", "react.js"] },
  { canonical: "Next.js", aliases: ["nextjs", "next.js", "next js"] },
  { canonical: "Vue.js", aliases: ["vue", "vuejs", "vue.js"] },
  { canonical: "Nuxt.js", aliases: ["nuxt", "nuxtjs", "nuxt.js"] },
  { canonical: "Angular", aliases: ["angular", "angularjs"] },
  { canonical: "Svelte", aliases: ["svelte", "sveltekit"] },
  { canonical: "TailwindCSS", aliases: ["tailwind", "tailwindcss", "tailwind css"] },
  { canonical: "Bootstrap", aliases: ["bootstrap"] },
  { canonical: "Sass/SCSS", aliases: ["sass", "scss"] },
  { canonical: "Redux", aliases: ["redux", "redux toolkit", "rtk"] },
  { canonical: "Zustand", aliases: ["zustand"] },
  { canonical: "Recoil", aliases: ["recoil"] },
  { canonical: "React Query", aliases: ["react query", "tanstack query", "react-query"] },
  { canonical: "Webpack", aliases: ["webpack"] },
  { canonical: "Vite", aliases: ["vite", "vitejs"] },
  { canonical: "UI/UX", aliases: ["ui/ux", "ui-ux", "ui ux", "user experience", "user interface"] },
  { canonical: "Figma", aliases: ["figma"] },
  { canonical: "Responsive Design", aliases: ["responsive", "responsive design", "mobile-first"] },

  // Backend & APIs
  { canonical: "Node.js", aliases: ["node", "nodejs", "node.js"] },
  { canonical: "Express", aliases: ["express", "expressjs", "express.js"] },
  { canonical: "NestJS", aliases: ["nestjs", "nest.js", "nest js"] },
  { canonical: "Spring Boot", aliases: ["spring boot", "springboot", "spring framework"] },
  { canonical: "Django", aliases: ["django"] },
  { canonical: "Flask", aliases: ["flask"] },
  { canonical: "FastAPI", aliases: ["fastapi", "fast-api"] },
  { canonical: "Laravel", aliases: ["laravel"] },
  { canonical: ".NET", aliases: [".net", "dotnet", "asp.net", ".net core"] },
  { canonical: "RESTful API", aliases: ["restful api", "rest api", "restful", "rest apis"] },
  { canonical: "GraphQL", aliases: ["graphql"] },
  { canonical: "WebSocket", aliases: ["websocket", "websockets", "ws", "socket.io"] },
  { canonical: "Microservices", aliases: ["microservices", "microservice", "micro-services"] },
  { canonical: "gRPC", aliases: ["grpc"] },
  { canonical: "RabbitMQ", aliases: ["rabbitmq"] },
  { canonical: "Kafka", aliases: ["kafka", "apache kafka"] },

  // Databases & ORM
  { canonical: "PostgreSQL", aliases: ["postgresql", "postgres", "psql"] },
  { canonical: "MySQL", aliases: ["mysql"] },
  { canonical: "MongoDB", aliases: ["mongodb", "mongo"] },
  { canonical: "Redis", aliases: ["redis"] },
  { canonical: "SQLite", aliases: ["sqlite"] },
  { canonical: "Firebase", aliases: ["firebase", "firestore"] },
  { canonical: "Oracle DB", aliases: ["oracle", "oracle db"] },
  { canonical: "Prisma", aliases: ["prisma", "prisma orm"] },
  { canonical: "TypeORM", aliases: ["typeorm"] },
  { canonical: "Mongoose", aliases: ["mongoose"] },

  // DevOps, Cloud & Tools
  { canonical: "Docker", aliases: ["docker", "dockerfile", "docker-compose"] },
  { canonical: "Kubernetes", aliases: ["kubernetes", "k8s"] },
  { canonical: "AWS", aliases: ["aws", "amazon web services", "ec2", "s3", "lambda"] },
  { canonical: "Google Cloud", aliases: ["gcp", "google cloud", "google cloud platform"] },
  { canonical: "Azure", aliases: ["azure", "microsoft azure"] },
  { canonical: "Cloudflare", aliases: ["cloudflare", "cloudflare workers"] },
  { canonical: "CI/CD", aliases: ["ci/cd", "ci-cd", "cicd", "continuous integration"] },
  { canonical: "GitHub Actions", aliases: ["github actions", "github action"] },
  { canonical: "Git", aliases: ["git", "github", "gitlab", "bitbucket"] },
  { canonical: "Linux", aliases: ["linux", "ubuntu", "bash", "shell"] },
  { canonical: "Nginx", aliases: ["nginx"] },
  { canonical: "Postman", aliases: ["postman"] },
  { canonical: "Swagger", aliases: ["swagger", "openapi"] },

  // Testing & Methodologies
  { canonical: "Unit Testing", aliases: ["unit test", "unit testing", "jest", "mocha", "chai", "cypress", "playwright"] },
  { canonical: "Agile / Scrum", aliases: ["agile", "scrum", "kanban", "sprint"] },
  { canonical: "OOP", aliases: ["oop", "object oriented programming", "huong doi tuong"] },
  { canonical: "Clean Code", aliases: ["clean code", "refactoring", "code quality"] },
  { canonical: "Clean Architecture", aliases: ["clean architecture", "onion architecture", "hexagonal architecture"] },
  { canonical: "Design Patterns", aliases: ["design patterns", "design pattern"] },
  { canonical: "Problem Solving", aliases: ["problem solving", "giai quyet van de"] },
  { canonical: "Teamwork", aliases: ["teamwork", "lam viec nhom", "collaboration"] },
  { canonical: "AI Tools", aliases: ["chatgpt", "gemini", "copilot", "claude", "ai-first", "llm"] },
];

function initAtsMatcher() {
  const atsBtn = document.getElementById("atsMatchBtn");
  const modalOverlay = document.getElementById("atsModalOverlay");
  const closeBtn = document.getElementById("atsModalCloseBtn");
  const footerCloseBtn = document.getElementById("atsCloseBtn");
  const sampleBtn = document.getElementById("atsSampleBtn");
  const clearBtn = document.getElementById("atsClearBtn");
  const analyzeBtn = document.getElementById("atsAnalyzeBtn");
  const jdInput = document.getElementById("atsJdInput");
  const charCountEl = document.getElementById("atsCharCount");
  const emptyState = document.getElementById("atsEmptyState");
  const resultsWrap = document.getElementById("atsAnalysisResults");
  const scoreValueEl = document.getElementById("atsScoreValue");
  const scoreCircleEl = document.getElementById("atsScoreCircle");
  const scoreTitleEl = document.getElementById("atsScoreTitle");
  const scoreDescEl = document.getElementById("atsScoreDesc");
  const statMatchedEl = document.getElementById("atsStatMatched");
  const statMissingEl = document.getElementById("atsStatMissing");
  const statTotalEl = document.getElementById("atsStatTotal");
  const missingContainer = document.getElementById("atsMissingKeywordsContainer");
  const matchedContainer = document.getElementById("atsMatchedKeywordsContainer");
  const highlightToggle = document.getElementById("atsHighlightToggle");

  if (!atsBtn || !modalOverlay) return;

  const CACHE_KEY = "cv_ats_jd_cache";
  let lastMatchedTerms = [];
  let isHighlightActive = false;

  // Khôi phục JD đã lưu nếu có
  try {
    const savedJd = sessionStorage.getItem(CACHE_KEY);
    if (savedJd && jdInput) {
      jdInput.value = savedJd;
      updateCharCount();
    }
  } catch (_) {}

  function updateCharCount() {
    if (!jdInput || !charCountEl) return;
    const len = (jdInput.value || "").trim().length;
    charCountEl.textContent = `${len.toLocaleString("vi-VN")} ký tự`;
  }

  if (jdInput) {
    jdInput.addEventListener("input", () => {
      updateCharCount();
      try {
        sessionStorage.setItem(CACHE_KEY, jdInput.value);
      } catch (_) {}
    });
  }

  function openAtsModal() {
    modalOverlay.style.display = "flex";
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    updateCharCount();
    if (jdInput && jdInput.value.trim().length > 20) {
      runAnalysis();
    }
  }

  function closeAtsModal() {
    modalOverlay.style.display = "none";
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (isHighlightActive && !highlightToggle?.checked) {
      removeCvHighlights();
    }
  }

  atsBtn.onclick = openAtsModal;
  if (closeBtn) closeBtn.onclick = closeAtsModal;
  if (footerCloseBtn) footerCloseBtn.onclick = closeAtsModal;

  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeAtsModal();
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.getAttribute("aria-hidden") === "false") {
      closeAtsModal();
    }
  });

  // Sample JD
  if (sampleBtn && jdInput) {
    sampleBtn.onclick = () => {
      jdInput.value = `[TUYỂN DỤNG] Lập trình viên Fullstack / Frontend (React, Node.js, TypeScript)

Về chúng tôi: Công ty công nghệ phát triển các giải pháp phần mềm EdTech & SaaS chất lượng cao.

Mô tả công việc:
- Thiết kế, phát triển và bảo trì các ứng dụng web với ReactJS, Next.js và TailwindCSS.
- Tối ưu hóa trải nghiệm người dùng (UI/UX), đảm bảo giao diện responsive mượt mà trên đa thiết bị.
- Xây dựng hệ thống backend và RESTful API với Node.js (Express hoặc NestJS), tích hợp WebSocket cho tính năng realtime.
- Làm việc với cơ sở dữ liệu quan hệ PostgreSQL / MySQL và cơ sở dữ liệu NoSQL MongoDB.
- Tham gia thiết kế kiến trúc Clean Architecture, viết Unit Testing để đảm bảo chất lượng source code.
- Phối hợp chặt chẽ cùng team theo mô hình Agile / Scrum, sử dụng Git và quy trình CI/CD (GitHub Actions, Docker).
- Có tư duy Clean Code, OOP và sẵn sàng ứng dụng các công cụ AI (Gemini, ChatGPT) để tăng tốc độ phát triển.`;
      updateCharCount();
      try {
        sessionStorage.setItem(CACHE_KEY, jdInput.value);
      } catch (_) {}
      runAnalysis();
    };
  }

  // Clear button
  if (clearBtn && jdInput) {
    clearBtn.onclick = () => {
      jdInput.value = "";
      updateCharCount();
      try {
        sessionStorage.removeItem(CACHE_KEY);
      } catch (_) {}
      if (emptyState) emptyState.style.display = "flex";
      if (resultsWrap) resultsWrap.style.display = "none";
      removeCvHighlights();
      if (highlightToggle) highlightToggle.checked = false;
    };
  }

  // Analyze button
  if (analyzeBtn) {
    analyzeBtn.onclick = runAnalysis;
  }

  // Highlight toggle
  if (highlightToggle) {
    highlightToggle.onchange = () => {
      if (highlightToggle.checked) {
        applyCvHighlights(lastMatchedTerms);
      } else {
        removeCvHighlights();
      }
    };
  }

  // Trích xuất từ khóa dựa trên từ điển
  function extractKeywords(text) {
    if (!text || typeof text !== "string") return [];
    const lower = " " + text.toLowerCase() + " ";
    const found = [];

    TECH_KEYWORD_DICTIONARY.forEach((entry) => {
      const isMatched = entry.aliases.some((alias) => {
        const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const reg = new RegExp("(?:^|[^a-zA-Z0-9_#+.-])" + escaped + "(?:[^a-zA-Z0-9_#+.-]|$)", "i");
        return reg.test(lower);
      });
      if (isMatched) {
        found.push(entry.canonical);
      }
    });

    return Array.from(new Set(found));
  }

  // Lấy toàn bộ text từ dữ liệu CV hiện tại
  function getCurrentCvFullText() {
    const data = (window.cvData && window.cvData[currentLang]) ? window.cvData[currentLang] : (window.cvData || {});
    const parts = [];

    if (data.name) parts.push(data.name);
    if (data.title) parts.push(data.title);
    if (data.objective) parts.push(data.objective);

    if (Array.isArray(data.skills)) {
      data.skills.forEach((s) => {
        if (s.cat) parts.push(s.cat);
        if (s.items) parts.push(s.items);
      });
    }

    if (Array.isArray(data.projects)) {
      data.projects.forEach((p) => {
        if (p.name) parts.push(p.name);
        if (p.role) parts.push(p.role);
        if (p.desc) parts.push(p.desc);
        if (p.tech) parts.push(p.tech);
        if (Array.isArray(p.tasks)) parts.push(p.tasks.join(" "));
      });
    }

    if (Array.isArray(data.experience)) {
      data.experience.forEach((e) => {
        if (e.role) parts.push(e.role);
        if (e.company) parts.push(e.company);
        if (e.desc) parts.push(e.desc);
        if (e.tech) parts.push(e.tech);
        if (Array.isArray(e.tasks)) parts.push(e.tasks.join(" "));
      });
    }

    if (data.education) {
      if (data.education.school) parts.push(data.education.school);
      if (data.education.major) parts.push(data.education.major);
    }

    return parts.join(" ");
  }

  function runAnalysis() {
    const text = (jdInput ? jdInput.value : "").trim();
    if (!text || text.length < 10) {
      showToast("⚠️ Vui lòng dán nội dung JD để phân tích");
      return;
    }

    const jdKeywords = extractKeywords(text);
    if (jdKeywords.length === 0) {
      showToast("⚠️ Không tìm thấy từ khóa công nghệ nào trong JD!");
      return;
    }

    const cvFullText = getCurrentCvFullText();
    const cvKeywords = extractKeywords(cvFullText);

    const matched = [];
    const missing = [];

    jdKeywords.forEach((k) => {
      if (cvKeywords.includes(k)) {
        matched.push(k);
      } else {
        missing.push(k);
      }
    });

    lastMatchedTerms = matched;

    // Thuật toán tính điểm ATS
    const matchRate = jdKeywords.length > 0 ? (matched.length / jdKeywords.length) : 0;
    let score = Math.round(matchRate * 100);

    // Hiển thị kết quả
    if (emptyState) emptyState.style.display = "none";
    if (resultsWrap) resultsWrap.style.display = "block";

    if (scoreValueEl) scoreValueEl.textContent = `${score}%`;
    if (scoreCircleEl) {
      scoreCircleEl.className = "ats-score-circle " + (score >= 75 ? "score-high" : score >= 50 ? "score-med" : "score-low");
    }

    if (scoreTitleEl && scoreDescEl) {
      if (score >= 75) {
        scoreTitleEl.textContent = "🟢 Rất phù hợp với JD (ATS Thắng Lớn)";
        scoreDescEl.textContent = `CV hiện tại bao phủ tốt ${matched.length}/${jdKeywords.length} từ khóa cốt lõi mà nhà tuyển dụng yêu cầu. Tỷ lệ vượt qua vòng quét ATS rất cao!`;
      } else if (score >= 50) {
        scoreTitleEl.textContent = "🟡 Khá phù hợp (Cần tinh chỉnh thêm)";
        scoreDescEl.textContent = `CV đã có ${matched.length} từ khóa quan trọng, nhưng vẫn thiếu ${missing.length} kỹ năng mà JD đòi hỏi. Hãy bổ sung các từ khóa thiếu vào phần Kỹ năng hoặc Mô tả dự án.`;
      } else {
        scoreTitleEl.textContent = "🔴 Khớp mức thấp (Cần may đo lại)";
        scoreDescEl.textContent = `CV chỉ khớp ${matched.length}/${jdKeywords.length} từ khóa của JD. Bạn nên đổi sang phiên bản CV chuyên môn hơn hoặc điều chỉnh lại tech stack.`;
      }
    }

    if (statMatchedEl) statMatchedEl.textContent = `✅ ${matched.length} khớp`;
    if (statMissingEl) statMissingEl.textContent = `⚠️ ${missing.length} thiếu`;
    if (statTotalEl) statTotalEl.textContent = `📊 ${jdKeywords.length} từ khóa JD`;

    // Render Missing Chips
    if (missingContainer) {
      if (missing.length === 0) {
        missingContainer.innerHTML = '<span class="ats-chip-empty">🎉 Tuyệt vời! Không thiếu từ khóa kỹ thuật nào so với JD.</span>';
      } else {
        missingContainer.innerHTML = missing
          .map(
            (k) => `<button type="button" class="ats-chip ats-chip-missing" data-keyword="${esc(k)}" title="Click để sao chép từ khóa">+ ${esc(k)}</button>`
          )
          .join("");

        missingContainer.querySelectorAll(".ats-chip-missing").forEach((btn) => {
          btn.onclick = () => {
            const kw = btn.getAttribute("data-keyword");
            if (kw) {
              navigator.clipboard?.writeText(kw);
              showToast(`📋 Đã sao chép: "${kw}"`);
            }
          };
        });
      }
    }

    // Render Matched Chips
    if (matchedContainer) {
      if (matched.length === 0) {
        matchedContainer.innerHTML = '<span class="ats-chip-empty">Chưa có từ khóa nào trùng khớp.</span>';
      } else {
        matchedContainer.innerHTML = matched
          .map((k) => `<span class="ats-chip ats-chip-matched">✓ ${esc(k)}</span>`)
          .join("");
      }
    }

    // Tự động highlight nếu công tắc đang bật
    if (highlightToggle && highlightToggle.checked) {
      applyCvHighlights(matched);
    }
  }

  function showToast(msg) {
    let toast = document.getElementById("atsToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "atsToast";
      toast.className = "ats-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  function removeCvHighlights() {
    isHighlightActive = false;
    renderCV(currentLang);
  }

  function applyCvHighlights(keywords) {
    if (!keywords || keywords.length === 0) {
      removeCvHighlights();
      return;
    }
    isHighlightActive = true;
    renderCV(currentLang); // Render sạch trước

    const cvEl = document.getElementById("cvContent");
    if (!cvEl) return;

    // Tập hợp toàn bộ alias của các từ khóa canonical đã khớp
    const searchTerms = [];
    keywords.forEach((can) => {
      const item = TECH_KEYWORD_DICTIONARY.find((d) => d.canonical === can);
      if (item) {
        searchTerms.push(...item.aliases);
      } else {
        searchTerms.push(can);
      }
    });

    const uniqueTerms = Array.from(new Set(searchTerms)).sort((a, b) => b.length - a.length);
    const escaped = uniqueTerms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp("(?:^|(?<=[^a-zA-Z0-9_#+.-]))(" + escaped.join("|") + ")(?=[^a-zA-Z0-9_#+.-]|$)", "gi");

    const walker = document.createTreeWalker(cvEl, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let n;
    while ((n = walker.nextNode())) {
      if (n.nodeValue && regex.test(n.nodeValue)) {
        textNodes.push(n);
      }
    }

    textNodes.forEach((tNode) => {
      const parent = tNode.parentNode;
      if (!parent || parent.nodeName === "SCRIPT" || parent.nodeName === "STYLE" || parent.classList?.contains("ats-highlight-term")) {
        return;
      }
      const frag = document.createDocumentFragment();
      let lastIdx = 0;
      regex.lastIndex = 0;
      let m;
      const text = tNode.nodeValue;
      while ((m = regex.exec(text)) !== null) {
        if (m.index > lastIdx) {
          frag.appendChild(document.createTextNode(text.substring(lastIdx, m.index)));
        }
        const span = document.createElement("span");
        span.className = "ats-highlight-term";
        span.textContent = m[0];
        frag.appendChild(span);
        lastIdx = regex.lastIndex;
      }
      if (lastIdx < text.length) {
        frag.appendChild(document.createTextNode(text.substring(lastIdx)));
      }
      parent.replaceChild(frag, tNode);
    });
  }

  // Tự động phân tích lại nếu đang mở modal khi đổi ngôn ngữ / phiên bản
  window.__rerunAtsIfOpen = () => {
    if (modalOverlay.getAttribute("aria-hidden") === "false" && jdInput && jdInput.value.trim().length > 10) {
      runAnalysis();
    }
  };
}

// ===================================
// RECRUITER VIEW CONTROLLER (?view=hr)
// ===================================

function initRecruiterView() {
  const urlParams = new URLSearchParams(window.location.search);
  const isHrMode = urlParams.get("view") === "hr" || urlParams.get("view") === "recruiter" || urlParams.get("mode") === "clean" || urlParams.get("hr") === "1";

  const hrActionContainer = document.getElementById("hrActionContainer");
  const hrToggleBtn = document.getElementById("hrToggleBtn");
  const hrIconMenu = hrToggleBtn?.querySelector(".hr-icon-menu");
  const hrIconClose = hrToggleBtn?.querySelector(".hr-icon-close");
  const hrActionBar = document.getElementById("hrActionBar");
  const hrViewBtn = document.getElementById("hrViewBtn");
  const hrDownloadPdfBtn = document.getElementById("hrDownloadPdfBtn");
  const hrLangViBtn = document.getElementById("hrLangViBtn");
  const hrLangEnBtn = document.getElementById("hrLangEnBtn");
  const hrCopyLinkBtn = document.getElementById("hrCopyLinkBtn");
  const hrExitBtn = document.getElementById("hrExitBtn");

  function toggleMenu(forceOpen) {
    if (!hrActionContainer) return;
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !hrActionContainer.classList.contains("open");
    hrActionContainer.classList.toggle("open", shouldOpen);
    if (hrToggleBtn) hrToggleBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    if (hrIconMenu && hrIconClose) {
      hrIconMenu.style.display = shouldOpen ? "none" : "block";
      hrIconClose.style.display = shouldOpen ? "block" : "none";
    }
  }

  if (hrToggleBtn) {
    hrToggleBtn.onclick = (e) => {
      e.stopPropagation();
      toggleMenu();
    };
  }

  document.addEventListener("click", (e) => {
    if (hrActionContainer && hrActionContainer.classList.contains("open") && !hrActionContainer.contains(e.target)) {
      toggleMenu(false);
    }
  });

  function setHrMode(active) {
    if (active) {
      document.body.classList.add("recruiter-view");
      if (hrActionContainer) hrActionContainer.style.display = "flex";
      toggleMenu(false); // Mặc định thu gọn, chỉ hiện nút tròn
      syncHrLang();
    } else {
      document.body.classList.remove("recruiter-view");
      if (hrActionContainer) {
        hrActionContainer.style.display = "none";
        toggleMenu(false);
      }
    }
  }

  function syncHrLang() {
    if (hrLangViBtn && hrLangEnBtn) {
      hrLangViBtn.classList.toggle("active", currentLang === "vi");
      hrLangEnBtn.classList.toggle("active", currentLang === "en");
    }
    if (hrDownloadPdfBtn) {
      const textSpan = hrDownloadPdfBtn.querySelector("span");
      if (textSpan) {
        textSpan.textContent = currentLang === "vi" ? "Tải PDF" : "Download PDF";
      }
    }
  }

  if (isHrMode) {
    setHrMode(true);
  }

  if (hrViewBtn) {
    hrViewBtn.onclick = () => {
      const url = new URL(window.location.href);
      url.searchParams.set("view", "hr");
      window.history.pushState({}, "", url.toString());
      setHrMode(true);
    };
  }

  if (hrExitBtn) {
    hrExitBtn.onclick = () => {
      const url = new URL(window.location.href);
      url.searchParams.delete("view");
      url.searchParams.delete("mode");
      url.searchParams.delete("hr");
      window.history.pushState({}, "", url.toString());
      setHrMode(false);
    };
  }

  if (hrLangViBtn) {
    hrLangViBtn.onclick = () => {
      if (elements.langViBtn) elements.langViBtn.click();
      syncHrLang();
    };
  }

  if (hrLangEnBtn) {
    hrLangEnBtn.onclick = () => {
      if (elements.langEnBtn) elements.langEnBtn.click();
      syncHrLang();
    };
  }

  if (hrDownloadPdfBtn) {
    hrDownloadPdfBtn.onclick = () => {
      if (cvData && cvData[currentLang] && cvData[currentLang].docTitle) {
        document.title = cvData[currentLang].docTitle;
      }
      window.print();
    };
  }

  if (hrCopyLinkBtn) {
    hrCopyLinkBtn.onclick = () => {
      const url = new URL(window.location.href);
      url.searchParams.set("view", "hr");
      navigator.clipboard?.writeText(url.toString());
      showToastNotification("📋 Đã sao chép liên kết!");
    };
  }

  function showToastNotification(msg) {
    let toast = document.getElementById("atsToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "atsToast";
      toast.className = "ats-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 1000);
  }

  window.__syncHrView = syncHrLang;
}

// Khởi tạo Settings Drawer sau khi DOM sẵn sàng
function bootstrapApp() {
  initSettingsDrawer();
  initCoverLetter();
  initDiffViewer();
  initAtsMatcher();
  initRecruiterView();
  renderCV(currentLang);
  console.log("🚀 CV Editor initialized - Version:", window.CV_APP_VERSION || "1.1.0");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrapApp);
} else {
  bootstrapApp();
}


