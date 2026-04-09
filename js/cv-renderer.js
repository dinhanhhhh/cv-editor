// ===================================
// CV Data & Logic
// ===================================

const icons = {
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
    email: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/></svg>`,
    address: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>`
};

// cvData được load từ file data tương ứng (khai báo trước script này trong HTML)

// ===================================
// STATE
// ===================================
let currentLang = 'vi';
let baseFontSize = 10;
const DEFAULT_FONT_SIZE = 10;
const DEFAULT_LINE_HEIGHT = '1.5';
const DEFAULT_PADDING = '0 15mm 10mm 15mm';
const DEFAULT_SECTION_MARGIN = '20px';
const DEFAULT_ITEM_MARGIN = '15px';

const labels = {
    vi: {
        role: 'Vai trò',
        description: 'Mô tả',
        technologies: 'Công nghệ',
        github: 'GitHub',
        demo: 'Demo',
        repoBackend: 'Backend',
        repoFrontend: 'Frontend',
        repoDefault: 'Repo'
    },
    en: {
        role: 'Role',
        description: 'Description',
        technologies: 'Technologies',
        github: 'GitHub',
        demo: 'Demo',
        repoBackend: 'Backend',
        repoFrontend: 'Frontend',
        repoDefault: 'Repo'
    }
};

const elements = {
    preview: document.getElementById('cvContent'),
    fontSizeDisplay: document.getElementById('fontSizeDisplay'),
    a4PreviewBtn: document.getElementById('a4PreviewBtn'),
    magicFitBtn: document.getElementById('magicFitBtn'),
    resetBtn: document.getElementById('resetBtn'),
    langViBtn: document.getElementById('lang-vi'),
    langEnBtn: document.getElementById('lang-en'),
    fontIncreaseBtn: document.getElementById('font-increase'),
    fontDecreaseBtn: document.getElementById('font-decrease'),
    downloadBtn: document.getElementById('downloadBtn'),
    downloadBtnText: document.getElementById('btn-text')
};

// ===================================
// FONT CUSTOMIZER
// ===================================
function updateFontSize() {
    elements.preview.style.setProperty('--cv-base-font-size', baseFontSize.toFixed(1) + 'pt');
    elements.fontSizeDisplay.textContent = baseFontSize.toFixed(1) + 'pt';
}

function resetLayoutStyles() {
    elements.preview.style.height = 'auto';
    elements.preview.style.overflow = 'visible';
    elements.preview.style.lineHeight = DEFAULT_LINE_HEIGHT;
    elements.preview.style.padding = DEFAULT_PADDING;
    document.querySelectorAll('.cv-section').forEach(section => {
        section.style.marginBottom = DEFAULT_SECTION_MARGIN;
    });
    document.querySelectorAll('.cv-exp-item, .cv-edu-item').forEach(item => {
        item.style.marginBottom = DEFAULT_ITEM_MARGIN;
    });
}

function setA4Mode(enabled) {
    a4ModeActive = enabled;

    elements.preview.classList.toggle('a4-mode', enabled);
    elements.a4PreviewBtn.classList.toggle('active', enabled);
    elements.a4PreviewBtn.textContent = enabled ? '✅ A4 ON' : '📄 A4 Preview';
    elements.a4PreviewBtn.setAttribute('aria-pressed', String(enabled));
}

function renderContact(contact) {
    return contact.map(c => `
        <div class="cv-contact-item">
          ${icons[c.icon]}
          ${c.link ? `<a href="${c.link}" target="_blank" rel="noopener noreferrer">${c.text}</a>` : `<span>${c.text}</span>`}
        </div>
    `).join('');
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

function renderProjects(projects, text) {
    return projects.map(project => `
        <div class="cv-exp-item">
          <div class="cv-exp-header">
            <span class="cv-exp-project">${project.name}</span>
            <span class="cv-exp-date">${project.date}</span>
          </div>
          <p class="cv-exp-role">${text.role}: ${project.role}</p>
          <p class="cv-exp-desc"><strong>${text.description}:</strong> ${project.desc}</p>
          <ul class="cv-exp-tasks">
            ${project.tasks.map(task => `<li>${task}</li>`).join('')}
          </ul>
          <p class="cv-exp-tech"><strong>${text.technologies}:</strong> ${project.tech}</p>
          ${project.github ? `
            <p class="cv-exp-github" style="margin-top: 5px;">
              <strong>${text.github}:</strong> 
              ${project.github.includes('|') 
                ? project.github.split('|').map(link => {
                    const cleanLink = link.trim();
                    const label = cleanLink.toLowerCase().includes('-be')
                        ? text.repoBackend
                        : (cleanLink.toLowerCase().includes('-fe') ? text.repoFrontend : text.repoDefault);
                    return `<a href="${cleanLink}" target="_blank" rel="noopener noreferrer" style="margin-right: 8px; text-decoration: underline;">[${label}]</a>`;
                  }).join('')
                : `<a href="${project.github}" target="_blank" rel="noopener noreferrer">${project.github}</a>`
              }
            </p>` : ''}
          ${project.demo ? `<p class="cv-exp-demo"><strong>${text.demo}:</strong> <a href="${project.demo}" target="_blank" rel="noopener noreferrer">${project.demo}</a></p>` : ''}
        </div>
    `).join('');
}

function renderSkills(skills) {
    return skills.map(skill => `
        <tr>
          <td class="cv-skills-category">${skill.cat}</td>
          <td class="cv-skills-items">${skill.items}</td>
        </tr>
    `).join('');
}

function renderStrengths(data) {
    if (!data.strengths) {
        return '';
    }

    return `
        <div class="cv-section">
          <div class="cv-section-title">${data.sections.strengths}</div>
          <ul class="cv-strengths-list">
            ${data.strengths.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
    `;
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

    elements.preview.style.height = 'auto';
    elements.preview.style.overflow = 'visible';

    // Bắt đầu với các giá trị "rộng rãi" để lấp trang
    baseFontSize = 11.5;
    let currentLineHeight = 1.7;
    let currentPaddingSide = 15;
    let sectionMargin = 25;
    let itemMargin = 20;

    let safety = 0;
    const maxIter = 100;

    function applyStyles() {
        updateFontSize();
        elements.preview.style.lineHeight = currentLineHeight;
        elements.preview.style.padding = `0 ${currentPaddingSide}mm 10mm ${currentPaddingSide}mm`;
        document.querySelectorAll('.cv-section').forEach(s => s.style.marginBottom = sectionMargin + 'px');
        document.querySelectorAll('.cv-exp-item, .cv-edu-item').forEach(i => i.style.marginBottom = itemMargin + 'px');
    }

    // Phase 1: Thu hẹp nếu tràn (Shrink phase)
    while (elements.preview.offsetHeight > targetHeight && safety < maxIter) {
        let changed = false;
        if (sectionMargin > 8) { sectionMargin -= 2; changed = true; }
        else if (itemMargin > 4) { itemMargin -= 2; changed = true; }
        else if (currentLineHeight > 1.25) { currentLineHeight -= 0.05; changed = true; }
        else if (currentPaddingSide > 10) { currentPaddingSide -= 0.5; changed = true; }
        else if (baseFontSize > 9.5) { baseFontSize -= 0.1; changed = true; } // Chỉ giảm font khi kẹt lắm
        
        applyStyles();
        safety++;
        if (!changed) break;
    }

    safety = 0;
    // Phase 2: Giãn nở nếu quá ngắn (Expand phase)
    while (elements.preview.offsetHeight < targetHeight - 50 && safety < maxIter) {
        let changed = false;
        if (currentLineHeight < 1.75) { currentLineHeight += 0.03; changed = true; }
        else if (sectionMargin < 35) { sectionMargin += 2; changed = true; }
        else if (itemMargin < 25) { itemMargin += 2; changed = true; }
        else if (baseFontSize < 11.5) { baseFontSize += 0.1; changed = true; }

        applyStyles();
        safety++;
        if (!changed || elements.preview.offsetHeight > targetHeight - 20) break;
    }

    elements.preview.style.height = '297mm';
    elements.preview.style.overflow = 'hidden';

    elements.magicFitBtn.innerHTML = "Perfect Fit! ✨";
    setTimeout(() => { elements.magicFitBtn.innerHTML = "Magic Fit ✨"; }, 2000);
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
// RENDER CV
// ===================================
function renderCV(lang) {
    const d = cvData[lang];
    const t = labels[lang];
    elements.downloadBtnText.innerText = d.btnText;
    document.title = d.docTitle;

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

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.projects}</div>
          ${renderProjects(d.projects, t)}
        </div>

        <div class="cv-section">
          <div class="cv-section-title">${d.sections.skills}</div>
          <table class="cv-skills-table">
            ${renderSkills(d.skills)}
          </table>
        </div>

        ${renderStrengths(d)}
    `;

    elements.preview.innerHTML = html;
    resetLayoutStyles();
    updateFontSize();
    setA4Mode(a4ModeActive);
}

// ===================================
// LANGUAGE SWITCH
// ===================================
elements.langViBtn.onclick = () => {
    currentLang = 'vi';
    elements.langViBtn.classList.add('active');
    elements.langEnBtn.classList.remove('active');
    elements.langViBtn.setAttribute('aria-pressed', 'true');
    elements.langEnBtn.setAttribute('aria-pressed', 'false');
    renderCV('vi');
};

elements.langEnBtn.onclick = () => {
    currentLang = 'en';
    elements.langEnBtn.classList.add('active');
    elements.langViBtn.classList.remove('active');
    elements.langEnBtn.setAttribute('aria-pressed', 'true');
    elements.langViBtn.setAttribute('aria-pressed', 'false');
    renderCV('en');
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
renderCV(currentLang);
