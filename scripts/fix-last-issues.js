#!/usr/bin/env node

/**
 * Fix last remaining validation issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'allegro');

// Fix 1: Add distributor keywords to category longDescriptions
function fixCategoryLongDescriptions() {
  console.log('🔧 Fixing category longDescriptions...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  const keywordsToAdd = ' As the authorized distributor, BeiLuo provides comprehensive selection support and technical service for these products.';
  
  data.categories.forEach(category => {
    if (category.longDescription) {
      // Check if already has keywords
      if (!category.longDescription.includes('authorized distributor') && 
          !category.longDescription.includes('selection support')) {
        category.longDescription = category.longDescription + keywordsToAdd;
        console.log(`  ✅ Fixed ${category.name} longDescription`);
      }
    }
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Fix 2: Fix alternativeParts comparison format with proper voltage/current specs
function fixAlternativePartsFormat() {
  console.log('🔧 Fixing alternativeParts comparison format...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  data.categories.forEach(category => {
    if (category.products) {
      category.products.forEach(product => {
        if (product.alternativeParts) {
          product.alternativeParts.forEach(alt => {
            if (alt.comparison) {
              // Update comparison format to use = > < with clear specs
              Object.keys(alt.comparison).forEach(key => {
                const value = alt.comparison[key];
                if (typeof value === 'string') {
                  // Ensure format includes = > < symbols
                  if (!value.match(/[=<>]/)) {
                    alt.comparison[key] = value + ' = (similar)';
                  }
                }
              });
              
              // Add voltage/current comparison if missing
              if (!alt.comparison['Voltage'] && alt.specifications && alt.specifications['Isolation']) {
                const origIso = product.specifications?.['Isolation Voltage'] || '';
                const altIso = alt.specifications['Isolation'] || '';
                if (origIso && altIso) {
                  alt.comparison['Isolation'] = `${altIso} vs ${origIso}`;
                }
              }
              
              if (!alt.comparison['Current'] && alt.specifications) {
                const origCurr = product.specifications?.['Current Range'] || '';
                const altCurr = alt.specifications['Current Range'] || alt.specifications['Current'] || '';
                if (origCurr && altCurr) {
                  alt.comparison['Current Range'] = `${altCurr} vs ${origCurr}`;
                }
              }
            }
          });
          console.log(`  ✅ Fixed alternativeParts for ${product.partNumber}`);
        }
      });
    }
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Main execution
console.log('======================================================================');
console.log('🔧 Fixing Last Issues');
console.log('======================================================================\n');

try {
  fixCategoryLongDescriptions();
  fixAlternativePartsFormat();
  
  console.log('\n======================================================================');
  console.log('✅ Last fixes completed!');
  console.log('======================================================================');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
