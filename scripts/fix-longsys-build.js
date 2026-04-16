#!/usr/bin/env node
/**
 * Fix Longsys build issues - bomList and keyTakeaways format
 */

const fs = require('fs');
const path = require('path');

const brand = 'longsys';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
let solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(sol => {
  // Fix bomList - ensure it's an array
  if (sol.bomList && !Array.isArray(sol.bomList)) {
    sol.bomList = Object.values(sol.bomList);
    console.log(`✅ Fixed bomList format for solution: ${sol.id}`);
  }
  
  // Fix keyTakeaways - ensure it's an array
  if (sol.faeInsights && sol.faeInsights.keyTakeaways) {
    if (typeof sol.faeInsights.keyTakeaways === 'string') {
      sol.faeInsights.keyTakeaways = [sol.faeInsights.keyTakeaways];
      console.log(`✅ Fixed keyTakeaways format for solution: ${sol.id}`);
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Fixed solutions.json build issues');

console.log('\n🎉 All build fixes applied successfully!');
