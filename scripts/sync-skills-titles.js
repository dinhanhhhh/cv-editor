const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, '../data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('cv-data-') && f.endsWith('.js'));

let totalModified = 0;

files.forEach(f => {
  const fullPath = path.join(dataDir, f);
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;

  content = content.replace(/skills:\s*["'][^"']+["']/g, (match, offset) => {
    const prefix = content.slice(Math.max(0, offset - 400), offset);
    if (prefix.includes('sections:')) {
      const entirePrefix = content.slice(0, offset);
      const isEn = entirePrefix.lastIndexOf('en: {') > entirePrefix.lastIndexOf('vi: {');
      const replacement = isEn ? 'skills: "TECHNICAL SKILLS"' : 'skills: "KỸ NĂNG CHUYÊN MÔN"';
      return replacement;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    totalModified++;
    console.log(`Updated: ${f}`);
  }
});

console.log(`\nHoàn thành! Đã cập nhật ${totalModified} file.`);
