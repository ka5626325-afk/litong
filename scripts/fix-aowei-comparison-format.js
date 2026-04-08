// Fix alternativeParts comparison format for Aowei brand data
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'aowei');

// Read products.json
const productsPath = path.join(dataDir, 'products.json');
let productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Fixing alternativeParts comparison format...\n');

let fixedCount = 0;

// Fix comparison format in all products
productsData.categories.forEach((category, catIndex) => {
  console.log(`Checking category: ${category.name}`);
  
  if (category.products) {
    category.products.forEach((product, prodIndex) => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach((alt, altIndex) => {
          if (alt.comparison) {
            let needsFix = false;
            const newComparison = {};
            
            for (const [key, value] of Object.entries(alt.comparison)) {
              if (typeof value === 'string') {
                // Replace standalone > with => (but not when part of other operators)
                // This regex replaces > that is not preceded by = or < or - or + or ( or )
                let newValue = value.replace(/(?<![=<>\-\+\(\)])>(?![=])/g, '=>');
                
                if (newValue !== value) {
                  needsFix = true;
                  console.log(`  Fixed ${product.partNumber} alt ${altIndex}: ${key}: "${value}" -> "${newValue}"`);
                }
                newComparison[key] = newValue;
              } else {
                newComparison[key] = value;
              }
            }
            
            if (needsFix) {
              alt.comparison = newComparison;
              fixedCount++;
            }
          }
        });
      }
    });
  }
});

// Save fixed file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));

console.log(`\n✅ Fixed ${fixedCount} comparison entries!`);
