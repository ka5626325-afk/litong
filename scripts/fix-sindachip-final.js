// Fix final issues in products.json
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'sindachip', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix product shortDescriptions that are too long
const shortDescriptions = {
  "SGM8551": "High-precision zero-drift op-amp with 5μV offset and rail-to-rail I/O for sensor interfaces",
  "SGM8522": "Versatile dual op-amp with 3MHz bandwidth and rail-to-rail output for analog processing",
  "SGM2028": "High-current LDO with 500mA output and ultra-low 35μA quiescent current for battery devices"
};

// Fix categories
productsData.categories.forEach(category => {
  // Fix selectionGuideLink - just use the articleLink from selectionGuide
  if (category.selectionGuide && category.selectionGuide.articleLink) {
    category.selectionGuideLink = category.selectionGuide.articleLink;
  }
  
  // Fix product shortDescriptions
  if (category.products) {
    category.products.forEach(product => {
      if (shortDescriptions[product.partNumber]) {
        product.shortDescription = shortDescriptions[product.partNumber];
      }
    });
  }
});

// Write back to file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✓ Fixed final issues in products.json');
console.log('  - Fixed 3 product shortDescriptions to meet length requirements');
console.log('  - Fixed 4 category selectionGuideLink references');
