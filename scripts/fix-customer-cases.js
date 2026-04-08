const fs = require('fs');
const path = require('path');

const solutionsPath = path.join(__dirname, '..', 'data', 'tdk', 'solutions.json');

console.log('Reading solutions.json...');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix customerCases - change feedback to result
solutions.solutions.forEach(sol => {
  if (sol.customerCases) {
    sol.customerCases.forEach(cs => {
      if (cs.feedback && !cs.result) {
        cs.result = cs.feedback;
        delete cs.feedback;
      }
    });
  }
});

// Save the file
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2), 'utf8');
console.log('✅ Fixed customerCases: changed feedback to result');
