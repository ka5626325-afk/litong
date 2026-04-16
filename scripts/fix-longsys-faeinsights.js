#!/usr/bin/env node
/**
 * Fix Longsys faeInsights - add keyTakeaways field
 */

const fs = require('fs');
const path = require('path');

const brand = 'longsys';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Fix solutions.json - add keyTakeaways to faeInsights
const solutionsPath = path.join(dataDir, 'solutions.json');
let solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(sol => {
  if (sol.faeInsights) {
    // Add keyTakeaways if missing
    if (!sol.faeInsights.keyTakeaways) {
      sol.faeInsights.keyTakeaways = sol.faeInsights.highlight || "Expert recommendation based on field experience";
      console.log(`✅ Added keyTakeaways for solution: ${sol.id}`);
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Fixed solutions.json faeInsights');

console.log('\n🎉 All faeInsights fixes applied successfully!');
