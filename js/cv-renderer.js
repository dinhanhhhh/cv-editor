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
}

function initSpacingCustomizer() {
  const fontCustomizer = document.querySelector(".font-customizer");
  if (!fontCustomizer) return;

  const sectionLabelText = currentLang === "vi" ? "↕️ Phần:" : "↕️ Section:";
  const itemLabelText = currentLang === "vi" ? "↕️ Mục:" : "↕️ Item:";

  // Check if already created
  if (document.getElementById("sectionMarginSlider")) {
    const labels = document.querySelectorAll(".spacing-customizer .slider-label");
    if (labels.length >= 2) {
      labels[0].textContent = sectionLabelText;
      labels[0].title = currentLang === 'vi' ? 'Khoảng cách phần' : 'Section margin';
      labels[1].textContent = itemLabelText;
      labels[1].title = currentLang === 'vi' ? 'Khoảng cách mục' : 'Item margin';
    }
    return;
  }

  const spacingCustomizer = document.createElement("div");
  spacingCustomizer.className = "spacing-customizer";
  spacingCustomizer.setAttribute("aria-label", currentLang === "vi" ? "Tùy chỉnh khoảng cách" : "Customize spacing");

  spacingCustomizer.innerHTML = `
    <div class="slider-wrapper">
      <span class="slider-label" title="${currentLang === 'vi' ? 'Khoảng cách phần' : 'Section margin'}">${sectionLabelText}</span>
      <input type="range" id="sectionMarginSlider" min="4" max="35" value="10" class="margin-slider" aria-label="${currentLang === 'vi' ? 'Khoảng cách phần' : 'Section margin'}">
      <span class="slider-value" id="sectionMarginVal">10px</span>
    </div>
    <div class="slider-wrapper">
      <span class="slider-label" title="${currentLang === 'vi' ? 'Khoảng cách mục' : 'Item margin'}">${itemLabelText}</span>
      <input type="range" id="itemMarginSlider" min="2" max="25" value="8" class="margin-slider" aria-label="${currentLang === 'vi' ? 'Khoảng cách mục' : 'Item margin'}">
      <span class="slider-value" id="itemMarginVal">8px</span>
    </div>
  `;

  // Insert after .font-customizer
  fontCustomizer.parentNode.insertBefore(spacingCustomizer, fontCustomizer.nextSibling);

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
  };

  elements.itemMarginSlider.oninput = (e) => {
    const val = parseInt(e.target.value);
    elements.itemMarginVal.textContent = val + "px";
    elements.preview.style.setProperty("--cv-item-margin", val + "px");
  };
}

function resetLayoutStyles() {
  elements.preview.style.height = "auto";
  elements.preview.style.overflow = "visible";
  elements.preview.style.lineHeight = DEFAULT_LINE_HEIGHT;
  elements.preview.style.padding = DEFAULT_PADDING;

  const sectionVal = elements.sectionMarginSlider ? elements.sectionMarginSlider.value + "px" : DEFAULT_SECTION_MARGIN;
  const itemVal = elements.itemMarginSlider ? elements.itemMarginSlider.value + "px" : DEFAULT_ITEM_MARGIN;

  elements.preview.style.setProperty("--cv-section-margin", sectionVal);
  elements.preview.style.setProperty("--cv-item-margin", itemVal);
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
    updateFontSize();
  }
};

elements.fontDecreaseBtn.onclick = () => {
  if (baseFontSize > 7) {
    baseFontSize -= 0.5;
    updateFontSize();
  }
};

// ===================================
// MAGIC FIT
// ===================================
function magicFit() {
  const targetHeight = 1120; // Hướng tới khung xấp xỉ 297mm

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
  while (elements.preview.offsetHeight > targetHeight && safety < maxIter) {
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
    } // Chỉ giảm font khi kẹt lắm

    applyStyles();
    safety++;
    if (!changed) break;
  }

  const isOverflowing = elements.preview.offsetHeight > targetHeight;

  safety = 0;
  // Phase 2: Giãn nở nếu quá ngắn (Expand phase)
  while (
    elements.preview.offsetHeight < targetHeight - 50 &&
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
    if (!changed || elements.preview.offsetHeight > targetHeight - 20) break;
  }

  elements.preview.style.height = "297mm";
  elements.preview.style.overflow = "hidden";

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
}

elements.magicFitBtn.onclick = magicFit;

// ===================================
// RESET SETTINGS
// ===================================
function resetSettings() {
  baseFontSize = DEFAULT_FONT_SIZE;
  updateFontSize();

  if (elements.sectionMarginSlider) {
    elements.sectionMarginSlider.value = parseInt(DEFAULT_SECTION_MARGIN);
    elements.sectionMarginVal.textContent = DEFAULT_SECTION_MARGIN;
  }
  if (elements.itemMarginSlider) {
    elements.itemMarginSlider.value = parseInt(DEFAULT_ITEM_MARGIN);
    elements.itemMarginVal.textContent = DEFAULT_ITEM_MARGIN;
  }

  resetLayoutStyles();
  setA4Mode(false);
}

elements.resetBtn.onclick = resetSettings;

if (elements.resetDataBtn) {
  elements.resetDataBtn.onclick = () => {
    const confirmMsg = currentLang === "vi" 
      ? "Bạn có chắc chắn muốn xóa toàn bộ nội dung đã chỉnh sửa và khôi phục về dữ liệu CV gốc không?" 
      : "Are you sure you want to delete all edited content and restore the original CV data?";
    if (confirm(confirmMsg)) {
      // Xóa các key trong localStorage cho phiên bản hiện tại
      localStorage.removeItem(`cv_data_${cvVersion}_vi`);
      localStorage.removeItem(`cv_data_${cvVersion}_en`);
      localStorage.removeItem(`cv_global_project_pool_vi`);
      localStorage.removeItem(`cv_global_project_pool_en`);
      localStorage.removeItem(`cv_projects_order_${cvVersion}`);
      // Reload trang để tải lại data gốc
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
    script.src = src;
    script.async = false;
    script.onload = () => {
      // Lấy snapshot cvData mới nạp rồi gỡ thẻ script cho gọn
      const data = window.cvData;
      script.remove();
      resolve(data);
    };
    script.onerror = () => {
      script.remove();
      reject(new Error("Failed to load data script: " + src));
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
  } else {
    if (panel) panel.style.display = "flex";
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
    <div class="proj-select-header">
      <span class="proj-select-title">${titleText}</span>
      <button class="proj-select-reset-btn" id="projSelectResetBtn" title="${lang === "vi" ? "Khôi phục mặc định" : "Restore defaults"}">
        ${lang === "vi" ? "Khôi phục 🔄" : "Reset 🔄"}
      </button>
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

  // Attach reset listener
  const resetBtn = panel.querySelector("#projSelectResetBtn");
  if (resetBtn) {
    resetBtn.onclick = () => {
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

  const cleanTitle = d.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/[^a-zA-Z0-9]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  document.title = `CV_${cleanName}_${cleanTitle}`;

  const html = `
        <div class="cv-header">
          <div data-edit-key="name" class="cv-name">${esc(d.name)}</div>
          <div data-edit-key="title" class="cv-title">${esc(d.title)}</div>
          <div class="cv-contact">
            ${renderContact(d.contact)}
          </div>
        </div>

        <div class="cv-section">
          <div data-edit-key="sections.objective" class="cv-section-title">${esc(d.sections.objective)}</div>
          <div data-edit-key="objective" class="cv-objective">${esc(d.objective)}</div>
        </div>

        <div class="cv-section">
          <div data-edit-key="sections.education" class="cv-section-title">${esc(d.sections.education)}</div>
          ${renderEducation(d.education)}
        </div>

        ${
          d.experience && d.experience.length > 0
            ? `
        <div class="cv-section">
          <div data-edit-key="sections.experience" class="cv-section-title">${esc(d.sections.experience)}</div>
          ${renderProjects(d.experience, t, d.experienceDisplayLimit, 'experience')}
        </div>
        `
            : ""
        }

        <div class="cv-section">
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

        <div class="cv-section">
          <div data-edit-key="sections.skills" class="cv-section-title">${d.sections.skills}</div>
          <table class="cv-skills-table">
            ${renderSkills(d.skills)}
          </table>
        </div>
    `;

  elements.preview.innerHTML = html;
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
};

elements.langEnBtn.onclick = () => {
  currentLang = "en";
  elements.langEnBtn.classList.add("active");
  elements.langViBtn.classList.remove("active");
  elements.langEnBtn.setAttribute("aria-pressed", "true");
  elements.langViBtn.setAttribute("aria-pressed", "false");
  renderCV("en");
};

// ===================================
// PRINT / DOWNLOAD
// ===================================
elements.downloadBtn.onclick = () => {
  window.print();
};

// ===================================
// INIT
// ===================================
// ===================================
// COVER LETTER MANAGER
// ===================================
const urlParams = new URLSearchParams(window.location.search);
const cvVersion = urlParams.get("type") || "default";
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
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
    en: `[Subject: Job Application: Developer – Truong Dinh Anh]

Dear Hiring Team,

My name is Truong Dinh Anh, a Computer Science graduate from Ho Chi Minh City Open University. I am writing to apply for the Developer position at your company.

With a strong foundation in JavaScript, TypeScript, React, and Node.js, I have successfully developed several web applications, including a JOB PORTAL PLATFORM and a STUDENT MANAGEMENT SYSTEM. I am committed to writing clean, maintainable code, optimizing database queries, and designing responsive and user-friendly user interfaces.

Please find my attached CV for more details. I look forward to the opportunity of discussing how my skills align with your needs in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
  },
  short: {
    vi: `[Tiêu đề Email: Ứng tuyển Lập trình viên – Trương Đình Anh]

Kính gửi Bộ phận Tuyển dụng,

Tôi viết thư này để ứng tuyển vào vị trí Lập trình viên tại Quý công ty. Tôi vừa tốt nghiệp chuyên ngành Khoa học Máy tính tại Đại học Mở TP.HCM và có kinh nghiệm thực chiến phát triển các dự án Full-Stack JavaScript/TypeScript.

Tôi sở hữu nền tảng vững chắc về React, Next.js, Node.js và MongoDB. Tôi luôn cam kết viết mã nguồn sạch, tối ưu hóa cơ sở dữ liệu và xây dựng giao diện responsive.

Chi tiết về các dự án và kỹ năng của tôi được trình bày trong CV đính kèm. Rất mong có cơ hội trao đổi trực tiếp trong một buổi phỏng vấn.

Trân trọng,
Trương Đình Anh
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
    en: `[Subject: Job Application: Developer – Truong Dinh Anh]

Dear Hiring Team,

I am writing to apply for the Developer position at your company. As a Computer Science graduate from Ho Chi Minh City Open University, I have hands-on experience building full-stack web applications using JavaScript and TypeScript.

My technical stack includes React, Next.js, Node.js, and MongoDB. I focus on writing clean code, optimizing queries, and delivering responsive layouts.

Please find my CV attached for more details on my projects and skills. I look forward to discussing my application in an interview.

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
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
SĐT: 0349421079
GitHub: https://github.com/dinhanhhhh`,
    en: `[Subject: Job Application: Developer – Enthusiastic and Ready to Contribute]

Dear Hiring Team,

My name is Truong Dinh Anh, a passionate developer and Computer Science graduate from Ho Chi Minh City Open University. I have been following your company's achievements and am truly inspired by the culture and products you build. I am thrilled to submit my application.

Having built web projects from scratch and constantly explored modern technologies, I am confident that my self-driven learning attitude and strong sense of responsibility will make a positive impact on your team.

I have attached my CV and would love the opportunity to share more about my passion and how I can contribute to your long-term goals.

Have a wonderful day!

Sincerely,
Truong Dinh Anh
Phone: 0349421079
GitHub: https://github.com/dinhanhhhh`,
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
      coverLetterBtn.textContent = "✉️ Thư giới thiệu";
      coverLetterBtn.setAttribute("title", "Xem thư xin việc (Cover Letter)");
    }
  } else {
    if (clModalTitle) clModalTitle.innerHTML = "✉️ Cover Letter";
    if (clModalSubtitle)
      clModalSubtitle.innerHTML =
        "A concise, well-written cover letter will help you stand out and make a professional impression on recruiters.";
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
      coverLetterBtn.textContent = "✉️ Cover Letter";
      coverLetterBtn.setAttribute("title", "View Cover Letter");
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
(function initCoverLetter() {
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

  if (coverLetterBtn && clModalOverlay) {
    coverLetterBtn.onclick = () => {
      updateCoverLetterText();
      clModalOverlay.style.display = "flex";
      clModalOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
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
})();

renderCV(currentLang);
