const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('cv-data-') && f !== 'cv-data-base.js');

const masterProjects = [
  "JOB PORTAL PLATFORM",
  "STUDENT MANAGEMENT SYSTEM",
  "NỀN TẢNG THƯƠNG MẠI ĐIỆN TỬ (E-COMMERCE PLATFORM)",
  "HỆ THỐNG TỰ ĐỘNG HÓA TÍCH HỢP AI AGENT",
  "E-COMMERCE PLATFORM",
  "AI AGENT & AUTOMATION PLATFORM"
];

console.log("=== KIỂM TRA DỰ ÁN TRONG TẤT CẢ CÁC FILE CV DATA ===");
files.forEach(f => {
  const filePath = path.join(dataDir, f);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find project names and techs
  const projectRegex = /name:\s*["']([^"']+)["'][\s\S]*?github:\s*["']([^"']+)["'][\s\S]*?tech:\s*["']([^"']+)["']/g;
  let match;
  const found = [];
  while ((match = projectRegex.exec(content)) !== null) {
    const name = match[1];
    const github = match[2];
    const tech = match[3];
    found.push({ name, github, tech });
  }

  // Also check JSON style
  const jsonProjectRegex = /"name":\s*"([^"]+)"[\s\S]*?"github":\s*"([^"]+)"[\s\S]*?"tech":\s*"([^"]+)"/g;
  while ((match = jsonProjectRegex.exec(content)) !== null) {
    const name = match[1];
    const github = match[2];
    const tech = match[3];
    if (!found.some(x => x.name === name)) {
      found.push({ name, github, tech });
    }
  }

  if (found.length > 0) {
    console.log(`\n📁 [${f}] (${found.length} dự án tự khai báo):`);
    found.forEach(p => {
      console.log(`   - Tên: "${p.name}"`);
      console.log(`     GitHub: ${p.github}`);
      console.log(`     Tech: ${p.tech}`);
    });
  }
});
