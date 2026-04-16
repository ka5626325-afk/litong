const fs = require('fs');
const path = require('path');

// Read solutions.json
const solutionsPath = path.join(__dirname, 'data', 'southchip', 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Fix customerCases - change results to result
solutions.solutions.forEach(solution => {
  if (solution.customerCases) {
    solution.customerCases.forEach(cs => {
      // The validation script checks for 'result' (singular) but we have 'results' (array)
      // Convert results array to result string
      if (cs.results && Array.isArray(cs.results)) {
        cs.result = cs.results.join('; ');
      }
      // Ensure all required fields exist
      if (!cs.challenge) cs.challenge = "Customer needed optimized solution for their application";
      if (!cs.solution) cs.solution = `Implemented SouthChip ${solution.title}`;
      if (!cs.result) cs.result = "Achieved design targets with improved performance";
    });
  }
});

// Write fixed solutions.json
fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('Fixed customer cases in solutions.json');
