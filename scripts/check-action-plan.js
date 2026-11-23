const fs = require('fs');

const content = fs.readFileSync('jobs_for_tomorrow.md', 'utf8');
const lines = content.split(/\r?\n/);

const jobMap = new Map();
lines.forEach(l => {
  const m = l.match(/^\|\s*(\d+)\s*\|\s*([^|]+)\|\s*([^|]+)\|/);
  if (m) {
    jobMap.set(parseInt(m[1], 10), {
      role: m[2].trim(),
      company: m[3].trim()
    });
  }
});

console.log('Total jobs mapped in table:', jobMap.size);

const actionPlanLines = lines.slice(185);
actionPlanLines.forEach((l, idx) => {
  const matches = [...l.matchAll(/#(\d+)/g)];
  if (matches.length > 0) {
    matches.forEach(m => {
      const id = parseInt(m[1], 10);
      const job = jobMap.get(id);
      if (!job) {
        console.log(`[ERROR] ID #${id} not found in table! Line: ${l}`);
      } else {
        console.log(`[OK] #${id}: ${job.company} - ${job.role}`);
      }
    });
  }
});
