// =========================================================================
// CV VERSION DIFF / COMPARISON VIEWER (MODULE)
// Modal so sánh trực quan sự khác biệt giữa 2 phiên bản CV bất kỳ
// Tách từ js/cv-renderer.js để giảm nợ kỹ thuật và tăng tính mô-đun
// =========================================================================

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

  const esc = window.esc || ((s) => String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;"));

  const normalizeProjId = window.normalizeProjId || function(proj, backupName) {
    if (!proj) return "";
    if (proj.id) return proj.id.trim().toLowerCase();
    const name = (proj.name || backupName || "").trim().toUpperCase();
    if (!name) return "";
    if (name.includes("JOB PORTAL") || name.includes("TUYỂN DỤNG")) return "job-portal-platform";
    if (name.includes("E-COMMERCE") || name.includes("THƯƠNG MẠI")) return "ecommerce-platform";
    if (name.includes("STUDENT MANAGEMENT") || name.includes("QUẢN LÝ HỌC SINH") || name.includes("QUẢN LÝ SINH VIÊN")) return "student-management-system";
    if (name.includes("CV EDITOR") || name.includes("AI AGENT")) return "cv-editor-ai-automation";
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

  let diffLang = window.currentLang || "vi";
  let diffOnlyDiffs = false;
  let diffShowSharedProjects = false;

  function openDiffModal() {
    diffLang = window.currentLang || "vi";
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

    const cvVer = window.cvVersion || "default";
    const hasLocalDraft = localStorage.getItem(`cv_data_${cvVer}_${diffLang}`);
    
    let optionsHtml = "";
    if (hasLocalDraft) {
      const draftLabel = diffLang === "vi" 
        ? `✏️ Bản nháp đang sửa (${cvVer})`
        : `✏️ Local Draft (${cvVer})`;
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
      selectA.value = cvVer;
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
      const loader = window.loadDataScript || function(src) {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            let data = window.cvData;
            if (typeof window.mergeWithBaseCv === "function" && window.cvDataBase) {
              data = window.mergeWithBaseCv(window.cvDataBase, data);
            }
            script.remove();
            resolve(data);
          };
          script.onerror = () => { script.remove(); reject(new Error("Failed to load: " + src)); };
          document.head.appendChild(script);
        });
      };
      const loaded = await loader(ver.file);
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

// Export sang scope toàn cục (dùng namespace để tránh đụng độ tên)
window.CvDiffViewer = { initDiffViewer };

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDiffViewer);
} else {
  initDiffViewer();
}
