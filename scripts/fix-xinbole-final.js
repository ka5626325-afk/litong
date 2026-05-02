const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'xinbole');

// Fix solutions.json - change results to result
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(sol => {
  if (sol.customerCases) {
    sol.customerCases.forEach(cs => {
      // Change results to result
      if (cs.results && !cs.result) {
        // Convert array to string
        if (Array.isArray(cs.results)) {
          cs.result = cs.results.join('. ') + '.';
        } else {
          cs.result = cs.results;
        }
        delete cs.results;
      }
    });
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed solutions.json - changed results to result');

console.log('All final fixes applied successfully!');
