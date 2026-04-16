// Fix selectionGuideLink format in products.json
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'sindachip', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix categories
productsData.categories.forEach(category => {
  if (category.selectionGuideLink && typeof category.selectionGuideLink === 'string') {
    const url = category.selectionGuideLink;
    const text = category.selectionGuide?.title || `${category.name} Selection Guide`;
    category.selectionGuideLink = {
      url: url,
      text: text
    };
  }
});

// Write back to file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✓ Fixed selectionGuideLink format in products.json');
console.log('  - Converted string links to object format with url and text');
