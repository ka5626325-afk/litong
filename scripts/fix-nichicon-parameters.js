const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'nichicon');

// Fix products.json - add parameters field to each category
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Define parameters for each category type
const categoryParameters = {
  'aluminum-electrolytic': [
    'Capacitance',
    'Voltage Rating',
    'Ripple Current',
    'ESR',
    'Temperature Range',
    'Lifetime'
  ],
  'film-capacitors': [
    'Capacitance',
    'Voltage Rating',
    'Tolerance',
    'Temperature Range',
    'Package'
  ],
  'edlc-supercapacitors': [
    'Capacitance',
    'Voltage Rating',
    'ESR',
    'Temperature Range',
    'Cycle Life'
  ],
  'conductive-polymer': [
    'Capacitance',
    'Voltage Rating',
    'ESR',
    'Ripple Current',
    'Temperature Range'
  ]
};

// Add parameters to each category
products.categories.forEach(category => {
  if (categoryParameters[category.id]) {
    category.parameters = categoryParameters[category.id];
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Fixed products.json - added parameters field to all categories');

console.log('\n============================================================');
console.log('✅ Parameters fix applied successfully!');
console.log('============================================================');
console.log('\nNext step: Generate website again');
console.log('  npm run generate:brand nichicon');
