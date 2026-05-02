const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'linco');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

supportData.articles.forEach(article => {
  if (article.customerCases) {
    article.customerCases.forEach(cs => {
      // Fix field names
      if (cs.challenge && !cs.problem) {
        cs.problem = cs.challenge;
      }
      if (cs.solution && !cs.diagnosis) {
        cs.diagnosis = cs.solution;
      }
      if (cs.results && !cs.application) {
        cs.application = cs.results;
      }
      // Ensure all required fields exist
      if (!cs.application) cs.application = "Motor control implementation";
      if (!cs.problem) cs.problem = "Design and implementation challenges";
      if (!cs.diagnosis) cs.diagnosis = "Applied Linco MCU solution with proper configuration";
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('Fixed support.json customerCases');

console.log('\nAll fixes applied successfully!');
