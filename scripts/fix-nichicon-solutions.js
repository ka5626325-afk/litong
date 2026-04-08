const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'nichicon');

// Fix solutions.json - add applications field to each solution
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add applications to each solution
solutions.solutions.forEach(solution => {
  if (!solution.applications) {
    if (solution.id === 'industrial-power-solutions') {
      solution.applications = [
        'Variable Frequency Drives',
        'Industrial Power Supplies',
        'Motor Drive Systems',
        'Welding Equipment',
        'UPS Systems',
        'Solar Inverters'
      ];
    } else if (solution.id === 'automotive-electronics-solutions') {
      solution.applications = [
        'ECU Power Supplies',
        'LED Lighting Systems',
        'ADAS Systems',
        'EV Powertrains',
        'On-Board Chargers',
        'DC-DC Converters'
      ];
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Fixed solutions.json - added applications field to all solutions');

console.log('\n============================================================');
console.log('✅ Solutions fix applied successfully!');
console.log('============================================================');
console.log('\nNext step: Generate website again');
console.log('  npm run generate:brand nichicon');
