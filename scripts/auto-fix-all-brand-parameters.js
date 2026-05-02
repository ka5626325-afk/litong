#!/usr/bin/env node
/**
 * Auto-fix parameter mismatch for ALL brands
 * Ensures category.parameters match product.specifications keys
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

console.log('🔧 Auto-fixing parameter mismatch for ALL brands...\n');

// Get all brand directories
const brands = fs.readdirSync(dataDir).filter(item => {
  const itemPath = path.join(dataDir, item);
  return fs.statSync(itemPath).isDirectory() && !item.startsWith('.');
});

console.log(`Found ${brands.length} brands to process\n`);

let totalFixedBrands = 0;
let totalFixedCategories = 0;
let totalFixedProducts = 0;

brands.forEach(brand => {
  const productsPath = path.join(dataDir, brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log(`⏭️  Skipping ${brand}: products.json not found`);
    return;
  }
  
  console.log(`\n📂 Processing brand: ${brand}`);
  
  try {
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    let brandFixed = false;
    
    if (!productsData.categories) {
      console.log(`  ⏭️  No categories found`);
      return;
    }
    
    productsData.categories.forEach((category, catIndex) => {
      if (!category.products || category.products.length === 0) {
        console.log(`  ⏭️  Category ${catIndex + 1}: No products`);
        return;
      }
      
      // Collect all unique specification keys from products
      const allSpecKeys = new Set();
      category.products.forEach(product => {
        if (product.specifications) {
          Object.keys(product.specifications).forEach(key => {
            if (key !== 'Package') { // Exclude Package as it's always shown separately
              allSpecKeys.add(key);
            }
          });
        }
      });
      
      const specKeysArray = Array.from(allSpecKeys);
      
      if (specKeysArray.length === 0) {
        console.log(`  ⏭️  Category ${catIndex + 1} (${category.name}): No specifications found`);
        return;
      }
      
      // Check if current parameters match the actual spec keys
      const currentParams = category.parameters || [];
      const missingParams = specKeysArray.filter(key => !currentParams.includes(key));
      const extraParams = currentParams.filter(key => !specKeysArray.includes(key));
      
      if (missingParams.length > 0 || extraParams.length > 0) {
        console.log(`  🔧 Category ${catIndex + 1} (${category.name}):`);
        console.log(`     Old parameters: [${currentParams.join(', ')}]`);
        console.log(`     New parameters: [${specKeysArray.join(', ')}]`);
        
        // Update category parameters to match actual specs
        category.parameters = specKeysArray;
        brandFixed = true;
        totalFixedCategories++;
        
        // Fix products with missing specifications
        category.products.forEach((product, prodIndex) => {
          if (!product.specifications) {
            product.specifications = {};
          }
          
          // Add missing spec fields with "N/A" or "-"
          let productFixed = false;
          specKeysArray.forEach(key => {
            if (!product.specifications[key]) {
              product.specifications[key] = 'N/A';
              productFixed = true;
            }
          });
          
          if (productFixed) {
            totalFixedProducts++;
          }
        });
      } else {
        console.log(`  ✅ Category ${catIndex + 1} (${category.name}): Parameters already match`);
      }
    });
    
    if (brandFixed) {
      // Save updated data
      fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
      console.log(`  💾 Saved changes to ${brand}/products.json`);
      totalFixedBrands++;
    } else {
      console.log(`  ✅ No fixes needed for ${brand}`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error processing ${brand}: ${error.message}`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 Summary');
console.log('='.repeat(60));
console.log(`Total brands processed: ${brands.length}`);
console.log(`Brands fixed: ${totalFixedBrands}`);
console.log(`Categories fixed: ${totalFixedCategories}`);
console.log(`Products updated: ${totalFixedProducts}`);
console.log('\n✅ Auto-fix complete!');
console.log('\n📝 Next steps:');
console.log('  1. Run brand-master-checklist.js to verify all brands');
console.log('  2. Regenerate brand pages if needed');
