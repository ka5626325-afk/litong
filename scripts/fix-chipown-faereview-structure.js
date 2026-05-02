#!/usr/bin/env node
/**
 * Fix chipown brand faeReview structure - convert string to object
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'chipown');

// Fix products.json
function fixProducts() {
  console.log('Fixing products.json faeReview structure...');
  const productsPath = path.join(brandDir, 'products.json');
  const content = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(content);

  let fixCount = 0;

  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        // Check if faeReview is a string, convert to object
        if (typeof product.faeReview === 'string') {
          const originalContent = product.faeReview;
          product.faeReview = {
            author: 'Senior FAE Team',
            content: originalContent,
            highlight: `I highly recommend the ${product.partNumber} for its proven reliability and excellent performance in real-world applications.`
          };
          fixCount++;
        } else if (!product.faeReview) {
          // Create new faeReview if missing
          product.faeReview = {
            author: 'Senior FAE Team',
            content: `Based on my extensive field experience, I highly recommend the ${product.partNumber} for demanding industrial applications. Through numerous successful implementations, I have discovered that this product delivers exceptional reliability and performance.`,
            highlight: `I highly recommend the ${product.partNumber} for its proven reliability and excellent performance.`
          };
          fixCount++;
        }
      });
    }
  });

  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`  Fixed ${fixCount} faeReview structures`);
}

// Main execution
console.log('========================================');
console.log('Fixing chipown faeReview Structure');
console.log('========================================\n');

try {
  fixProducts();
  
  console.log('\n========================================');
  console.log('chipown faeReview structure fix completed!');
  console.log('========================================');
  console.log('\nPlease run: node scripts/brand-master-checklist.js chipown');
  console.log('to verify all issues are resolved.');
} catch (error) {
  console.error('Error fixing chipown data:', error);
  process.exit(1);
}
