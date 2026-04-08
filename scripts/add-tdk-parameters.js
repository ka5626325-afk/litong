const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'tdk', 'products.json');

console.log('Reading products.json...');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add parameters to each category
const categoryParameters = {
  "ceramic-capacitors": ["Capacitance", "Rated Voltage", "Dielectric", "Package Size", "Temperature Range"],
  "aluminum-electrolytic-capacitors": ["Capacitance", "Rated Voltage", "Temperature Range", "Lifetime", "Ripple Current"],
  "film-capacitors": ["Capacitance", "Rated Voltage", "Temperature Range", "ESR", "Ripple Current"],
  "inductors": ["Inductance", "Rated Current", "Saturation Current", "DCR", "Temperature Range"]
};

products.categories.forEach(cat => {
  if (!cat.parameters && categoryParameters[cat.id]) {
    cat.parameters = categoryParameters[cat.id];
    console.log(`Added parameters to ${cat.id}`);
  }
});

// Save
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('Added parameters to all categories');
