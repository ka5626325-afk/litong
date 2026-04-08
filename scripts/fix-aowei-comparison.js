// Fix alternativeParts comparison format for Aowei
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'aowei', 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Fixing alternativeParts comparison format...\n');

let fixedCount = 0;

productsData.categories.forEach(category => {
  if (category.products) {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison) {
            Object.keys(alt.comparison).forEach(key => {
              const value = alt.comparison[key];
              if (typeof value === 'string') {
                // Replace patterns like "220F > 100F (+120%)" with "220F => 100F (+120%)"
                // But don't change things that are already correct
                const newValue = value
                  .replace(/(\d+\s*)>(\s*\d+)/g, '$1=> $2')
                  .replace(/(same|better|larger|smaller|higher|lower)/, '$1');
                
                if (newValue !== value) {
                  console.log(`Fixed: ${product.partNumber} - ${key}: "${value}" => "${newValue}"`);
                  alt.comparison[key] = newValue;
                  fixedCount++;
                }
              }
            });
          }
        });
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`\n✅ Fixed ${fixedCount} comparison entries`);
