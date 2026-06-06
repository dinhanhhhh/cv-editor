// ===================================
// CV Data & Logic
// ===================================

const icons = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/></svg>`,
  address: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

// cvData được load từ file data tương ứng (khai báo trước script này trong HTML)

// ===================================
// STATE
// ===================================
let currentLang = "vi";
let baseFontSize = 10.5;
const DEFAULT_FONT_SIZE = 10.5;
const DEFAULT_LINE_HEIGHT = "1.3";
const DEFAULT_PADDING = "10mm 15mm 10mm 15mm";
const DEFAULT_SECTION_MARGIN = "13px";
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
  langViBtn: document.getElementById("lang-vi"),
  langEnBtn: document.getElementById("lang-en"),
  fontIncreaseBtn: document.getElementById("font-increase"),
  fontDecreaseBtn: document.getElementById("font-decrease"),
  downloadBtn: document.getElementById("downloadBtn"),
  downloadBtnText: document.getElementById("btn-text"),
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

function resetLayoutStyles() {
  elements.preview.style.height = "auto";
  elements.preview.style.overflow = "visible";
  elements.preview.style.lineHeight = DEFAULT_LINE_HEIGHT;
  elements.preview.style.padding = DEFAULT_PADDING;
  document.querySelectorAll(".cv-section").forEach((section) => {
    section.style.marginBottom = DEFAULT_SECTION_MARGIN;
  });
  document.querySelectorAll(".cv-exp-item, .cv-edu-item").forEach((item) => {
    item.style.marginBottom = DEFAULT_ITEM_MARGIN;
  });
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
    .map((c) => {
      // Tự động tạo link tel: cho số điện thoại nếu chưa có link
      let link = c.link;
      if (!link && c.icon === "phone") {
        link = `tel:${c.text.replace(/\s+/g, "")}`;
      }

      return `
        <div class="cv-contact-item">
          ${icons[c.icon]}
          ${
            link
              ? `<a href="${link}" ${c.icon !== "phone" ? 'target="_blank" rel="noopener noreferrer"' : ""}>${c.text}</a>`
              : `<span>${c.text}</span>`
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
            <span class="cv-edu-school">${education.school}</span>
            <span class="cv-edu-date">${education.date}</span>
          </div>
          <div class="cv-edu-detail">${education.detail}</div>
        </div>
    `;
}

function formatGithubLinks(githubStr, text) {
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
            <strong>${text.github}${label}:</strong> <span class="cv-link-wrapper"><a href="${url}" target="_blank" rel="noopener noreferrer">${displayUrl}</a></span>
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
      <strong>${text.github}:</strong> <span class="cv-link-wrapper"><a href="${url}" target="_blank" rel="noopener noreferrer">${displayUrl}</a></span>
    </p>
  `;
}

function renderProjects(projects, text, limit) {
  const normalizedProjects = Array.isArray(projects) ? projects : [];
  const visibleProjects =
    typeof limit === "number"
      ? normalizedProjects.slice(0, limit)
      : normalizedProjects;

  return visibleProjects
    .map(
      (project) => `
        <div class="cv-exp-item">
          <div class="cv-exp-header">
            <span class="cv-exp-project">${project.name}</span>
            <span class="cv-exp-date">${project.date}</span>
          </div>
          <p class="cv-exp-role">${text.role}: ${project.role}</p>
          <p class="cv-exp-desc"><strong>${text.description}:</strong> ${project.desc}</p>
          <ul class="cv-exp-tasks">
            ${project.tasks.map((task) => `<li>${task}</li>`).join("")}
          </ul>
          <p class="cv-exp-tech"><strong>${text.technologies}:</strong> ${project.tech}</p>
          ${project.github ? formatGithubLinks(project.github, text) : ""}
          ${
            project.demo
              ? `
            <p class="cv-exp-demo">
              <strong>${text.demo}:</strong> <span class="cv-link-wrapper"><a href="${project.demo}" target="_blank" rel="noopener noreferrer">${project.demo.replace(/^https?:\/\//, "")}</a></span>
            </p>`
              : ""
          }
        </div>
    `,
    )
    .join("");
}

function renderSkills(skills) {
  return skills
    .map(
      (skill) => `
        <tr>
          <td class="cv-skills-category">${skill.cat}</td>
          <td class="cv-skills-items">${skill.items}</td>
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
    document
      .querySelectorAll(".cv-section")
      .forEach((s) => (s.style.marginBottom = sectionMargin + "px"));
    document
      .querySelectorAll(".cv-exp-item, .cv-edu-item")
      .forEach((i) => (i.style.marginBottom = itemMargin + "px"));
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

  elements.magicFitBtn.innerHTML = "Perfect Fit! ✨";
  setTimeout(() => {
    elements.magicFitBtn.innerHTML = "Magic Fit ✨";
  }, 2000);
}

elements.magicFitBtn.onclick = magicFit;

// ===================================
// RESET SETTINGS
// ===================================
function resetSettings() {
  baseFontSize = DEFAULT_FONT_SIZE;
  updateFontSize();
  resetLayoutStyles();
  setA4Mode(false);
}

elements.resetBtn.onclick = resetSettings;

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

const allDataFiles = [
  'data/cv-data-be.js',
  'data/cv-data-fe.js',
  'data/cv-data-nestjs.js',
  'data/cv-data-healthcare-fullstack.js',
  'data/cv-data-ai.js',
  'data/cv-data-ai-webdev.js',
  'data/cv-data-yody.js',
  'data/cv-data-agrizen-fullstack.js',
  'data/cv-data-opswat.js',
  'data/cv-data-catspeak.js',
  'data/cv-data-techsupport.js',
  'data/cv-data-itdev.js',
  'data/cv-data-kitgroup.js',
  'data/cv-data-beone.js',
  'data/cv-data-strapbuild.js',
  'data/cv-data-nubitel.js',
  'data/cv-data-basevn.js',
  'data/cv-data-fullstack.js'
];

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
    if (!globalProjectPool.some(p => p.id === projId)) {
      globalProjectPool.push({
        id: projId,
        vi: viProj,
        en: enProj
      });
    }
  });
}

async function loadAllProjectsBackground() {
  if (allProjectsLoaded || isFetchingProjects) return;
  isFetchingProjects = true;
  
  const currentFilePath = allDataFiles.find(path => {
    return path.includes(`-${cvVersion}.js`) || (cvVersion === 'default' && path.includes('fullstack.js'));
  });

  const filesToFetch = allDataFiles.filter(path => path !== currentFilePath);

  for (const file of filesToFetch) {
    try {
      const response = await fetch(file);
      if (!response.ok) continue;
      const text = await response.text();
      
      const cleanText = text
        .replace(/const\s+cvData\s*=\s*/, "window.tempCvData = ")
        .replace(/global\.cvGlobalEdu\s*=\s*require.*/, "")
        .replace(/if\s*\(typeof\s+require.*?\n.*?\n\}/g, "");
      
      const fn = new Function(cleanText);
      fn();
      
      const loadedData = window.tempCvData;
      delete window.tempCvData;
      
      if (loadedData && loadedData.vi && loadedData.vi.projects) {
        addProjectsToPool(loadedData.vi.projects, loadedData.en.projects);
      }
    } catch (e) {
      console.warn("Failed to load background file: " + file, e);
    }
  }
  
  allProjectsLoaded = true;
  isFetchingProjects = false;
  
  // Re-render CV and Selector with the newly loaded global projects
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
          <div class="proj-order-item" draggable="true" data-id="${proj.id}">
            <span class="proj-order-handle">☰</span>
            <span class="proj-order-name" title="${proj[lang].name}">${proj[lang].name}</span>
            <div class="proj-order-arrows">
              <button class="proj-order-arrow up" data-id="${proj.id}">▲</button>
              <button class="proj-order-arrow down" data-id="${proj.id}">▼</button>
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
          <input type="checkbox" data-id="${proj.id}" ${isChecked ? "checked" : ""}>
          <span class="proj-select-name">${proj[lang].name}</span>
        </label>
      `;
    })
    .join("");

  const otherItemsHtml = otherProjs
    .map((proj) => {
      const isChecked = activeProjectIds.includes(proj.id);
      return `
        <label class="proj-select-item">
          <input type="checkbox" data-id="${proj.id}" ${isChecked ? "checked" : ""}>
          <span class="proj-select-name">${proj[lang].name}</span>
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
  const d = cvData[lang];
  const t = labels[lang];

  // Inject experience globally if not defined in the specific CV
  if (typeof cvGlobalExp !== 'undefined' && cvGlobalExp[lang]) {
    if (!d.experience || d.experience.length === 0) {
      const defaultExp = JSON.parse(JSON.stringify(cvGlobalExp[lang]));
      const titleUpper = (d.title || "").toUpperCase();
      let tailoredRoleVi = "Thực tập sinh Developer";
      let tailoredRoleEn = "Developer Intern";
      
      if (titleUpper.includes("FRONT")) {
        tailoredRoleVi = "Thực tập sinh Front-End Developer";
        tailoredRoleEn = "Front-End Developer Intern";
      } else if (titleUpper.includes("BACK") || titleUpper.includes("NEST")) {
        tailoredRoleVi = "Thực tập sinh Back-End Developer";
        tailoredRoleEn = "Back-End Developer Intern";
      } else if (titleUpper.includes("FULL") || titleUpper.includes("WEB") || titleUpper.includes("IT") || titleUpper.includes("DEV")) {
        tailoredRoleVi = "Thực tập sinh Full-Stack Developer";
        tailoredRoleEn = "Full-Stack Developer Intern";
      } else if (titleUpper.includes("AI") || titleUpper.includes("RESEARCH")) {
        tailoredRoleVi = "Thực tập sinh AI Developer";
        tailoredRoleEn = "AI Developer Intern";
      } else if (titleUpper.includes("SUPPORT")) {
        tailoredRoleVi = "Thực tập sinh Kỹ thuật (Tech Support)";
        tailoredRoleEn = "Technical Support Intern";
      }
      
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
          <div class="cv-name">${d.name}</div>
          <div class="cv-title">${d.title}</div>
          <div class="cv-contact">
            ${renderContact(d.contact)}
          </div>
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.objective}</div>
          <div class="cv-objective">${d.objective}</div>
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.education}</div>
          ${renderEducation(d.education)}
        </div>

        ${
          d.experience && d.experience.length > 0
            ? `
        <div class="cv-section">
          <div class="cv-section-title">${d.sections.experience}</div>
          ${renderProjects(d.experience, t, d.experienceDisplayLimit)}
        </div>
        `
            : ""
        }

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.projects}</div>
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
          )}
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.skills}</div>
          <table class="cv-skills-table">
            ${renderSkills(d.skills)}
          </table>
        </div>


    `;

  elements.preview.innerHTML = html;
  resetLayoutStyles();
  updateFontSize();
  setA4Mode(a4ModeActive);
  updateCoverLetterText();
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
})();

renderCV(currentLang);
