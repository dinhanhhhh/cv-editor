const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'data');

let violations = [];
fs.readdirSync(dir).filter(f => f.startsWith('cv-data-') && f.endsWith('.js')).forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    const m = l.match(/role\s*:\s*["']([^"']+)["']/);
    if (m && m[1] !== 'Developer') {
      violations.push({ file: f, line: idx + 1, current: m[1] });
    }
  });
});

console.log(JSON.stringify(violations, null, 2));
