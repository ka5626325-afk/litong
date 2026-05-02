const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const brands = fs.readdirSync(dataDir)
  .filter(dir => fs.statSync(path.join(dataDir, dir)).isDirectory())
  .sort();

console.log('All brands in alphabetical order:');
console.log('================================');

let foundEcec = false;
let count = 0;

for (const brand of brands) {
  if (foundEcec) {
    console.log(`${++count}. ${brand}`);
    if (count >= 20) break;
  }
  if (brand === 'ecec') {
    foundEcec = true;
    console.log(`\nStarting after ecec:`);
  }
}

console.log('\n================================');
console.log(`Total brands: ${brands.length}`);
