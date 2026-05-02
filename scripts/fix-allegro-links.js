#!/usr/bin/env node

/**
 * Fix allegro product links to include category path
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'allegro');

// Map product part numbers to their categories
const productCategoryMap = {
  // Current Sensors
  'ACS712': 'current-sensors',
  'ACS37610': 'current-sensors',
  'ACS720': 'current-sensors',
  'ACS37800': 'current-sensors',
  // Motor Drivers
  'AMT49105': 'motor-drivers',
  'A4988': 'motor-drivers',
  'A4931': 'motor-drivers',
  'DRV8825': 'motor-drivers',
  'A4950': 'motor-drivers',
  // Magnetic Position Sensors
  'A1335': 'magnetic-position-sensors',
  'A1324': 'magnetic-position-sensors',
  'AAS33001': 'magnetic-position-sensors',
  'AS5048A': 'magnetic-position-sensors',
  // LED Drivers
  'A6261': 'led-drivers',
  'A6265': 'led-drivers',
  'TPS92691': 'led-drivers',
  'TPS92692': 'led-drivers'
};

function fixLinks() {
  console.log('🔧 Fixing allegro product links...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  let fixedCount = 0;
  
  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        // Fix alternativeParts links
        if (product.alternativeParts) {
          product.alternativeParts.forEach(alt => {
            if (alt.link && alt.link.startsWith('/allegro/products/') && alt.link !== '#') {
              const partNumber = alt.partNumber;
              const categorySlug = productCategoryMap[partNumber];
              if (categorySlug) {
                const oldLink = alt.link;
                alt.link = `/allegro/products/${categorySlug}/${partNumber.toLowerCase()}.html`;
                if (oldLink !== alt.link) {
                  console.log(`  ✅ Fixed alternativeParts link: ${oldLink} -> ${alt.link}`);
                  fixedCount++;
                }
              }
            }
          });
        }
        
        // Fix companionParts links
        if (product.companionParts) {
          product.companionParts.forEach(comp => {
            if (comp.link && comp.link.startsWith('/allegro/products/') && comp.link !== '#') {
              const partNumber = comp.partNumber;
              const categorySlug = productCategoryMap[partNumber];
              if (categorySlug) {
                const oldLink = comp.link;
                comp.link = `/allegro/products/${categorySlug}/${partNumber.toLowerCase()}.html`;
                if (oldLink !== comp.link) {
                  console.log(`  ✅ Fixed companionParts link: ${oldLink} -> ${comp.link}`);
                  fixedCount++;
                }
              }
            }
          });
        }
      });
    }
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`\n✅ Fixed ${fixedCount} links total`);
}

// Also fix solutions.json and support.json links
function fixOtherLinks() {
  console.log('\n🔧 Fixing solutions and support links...');
  
  // Fix solutions.json
  const solutionsPath = path.join(DATA_DIR, 'solutions.json');
  if (fs.existsSync(solutionsPath)) {
    const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
    
    if (solutions.solutions) {
      solutions.solutions.forEach(solution => {
        if (solution.keyComponents) {
          solution.keyComponents.forEach(comp => {
            if (comp.productId) {
              const categorySlug = productCategoryMap[comp.productId];
              if (categorySlug && !comp.link) {
                comp.link = `/allegro/products/${categorySlug}/${comp.productId.toLowerCase()}.html`;
                console.log(`  ✅ Added link for ${comp.productId}`);
              }
            }
          });
        }
      });
    }
    
    fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
  }
}

// Main execution
console.log('======================================================================');
console.log('🔧 Fixing Allegro Product Links');
console.log('======================================================================\n');

try {
  fixLinks();
  fixOtherLinks();
  
  console.log('\n======================================================================');
  console.log('✅ All links fixed!');
  console.log('======================================================================');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
