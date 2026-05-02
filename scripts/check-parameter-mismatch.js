#!/usr/bin/env node
/**
 * Check parameter mismatch between category definition and product specifications
 */

const fs = require('fs');
const path = require('path');

const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'espressif', 'products.json'), 'utf8'));

console.log('🔍 Checking parameter mismatch in Espressif products...\n');

productsData.categories.forEach((category, catIndex) => {
  console.log(`\n📂 Category ${catIndex + 1}: ${category.name}`);
  console.log(`   Defined parameters: [${category.parameters.join(', ')}]`);
  
  category.products.forEach((product, prodIndex) => {
    const specs = product.specifications || {};
    const specKeys = Object.keys(specs);
    
    // Check which category parameters are missing in product specs
    const missingParams = category.parameters.filter(param => !specs.hasOwnProperty(param));
    
    // Check which product specs are not in category parameters
    const extraSpecs = specKeys.filter(key => !category.parameters.includes(key) && key !== 'Package');
    
    if (missingParams.length > 0 || extraSpecs.length > 0) {
      console.log(`\n   ⚠️  Product ${prodIndex + 1}: ${product.partNumber}`);
      if (missingParams.length > 0) {
        console.log(`      Missing parameters: [${missingParams.join(', ')}]`);
      }
      if (extraSpecs.length > 0) {
        console.log(`      Extra specifications: [${extraSpecs.join(', ')}]`);
      }
      console.log(`      Available specs: [${specKeys.join(', ')}]`);
    }
  });
});

console.log('\n✅ Check complete!');
