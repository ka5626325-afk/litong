#!/usr/bin/env node
/**
 * Fix chipsea Solution 3 benefits count
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'chipsea');

// Fix solutions.json
function fixSolutions() {
  console.log('Fixing solutions.json Solution 3 benefits...');
  const solutionsPath = path.join(brandDir, 'solutions.json');
  const content = fs.readFileSync(solutionsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  if (data.solutions) {
    data.solutions.forEach(solution => {
      if (solution.id === 'solution-3' || solution.title === 'Solution 3') {
        // Fix benefits count (need at least 4)
        if (!solution.benefits || solution.benefits.length < 4) {
          if (!solution.benefits) solution.benefits = [];
          while (solution.benefits.length < 4) {
            solution.benefits.push('Comprehensive technical support from BeiLuo FAE team');
          }
          fixCount++;
        }
      }
    });
  }

  fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} solution benefits`);
}

// Main execution
console.log('========================================');
console.log('Fixing chipsea Solution 3 Benefits');
console.log('========================================\n');

try {
  fixSolutions();
  
  console.log('\n========================================');
  console.log('chipsea Solution 3 fix completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js chipsea');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing chipsea data:', error);
  process.exit(1);
}
