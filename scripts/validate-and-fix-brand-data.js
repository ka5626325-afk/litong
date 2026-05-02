#!/usr/bin/env node
/**
 * Complete brand data validation and auto-fix script
 * This script should be run before generating any brand pages
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

console.log('🔍 Running complete brand data validation and auto-fix...\n');

const issues = {
  parameterMismatch: [],
  missingSpecs: [],
  emptyParameters: [],
  fixed: []
};

// Get all brand directories
const brands = fs.readdirSync(dataDir).filter(item => {
  const itemPath = path.join(dataDir, item);
  return fs.statSync(itemPath).isDirectory() && !item.startsWith('.');
});

console.log(`Processing ${brands.length} brands...\n`);

brands.forEach(brand => {
  const productsPath = path.join(dataDir, brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) return;
  
  try {
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    if (!productsData.categories) return;
    
    let brandNeedsSave = false;
    
    productsData.categories.forEach((category, catIndex) => {
      if (!category.products || category.products.length === 0) return;
      
      // 1. Check for empty parameters
      if (!category.parameters || category.parameters.length === 0) {
        issues.emptyParameters.push({
          brand,
          category: category.name,
          index: catIndex
        });
        
        // Auto-fix: collect spec keys from products
        const specKeys = new Set();
        category.products.forEach(product => {
          if (product.specifications) {
            Object.keys(product.specifications).forEach(key => {
              if (key !== 'Package') specKeys.add(key);
            });
          }
        });
        
        if (specKeys.size > 0) {
          category.parameters = Array.from(specKeys);
          brandNeedsSave = true;
          issues.fixed.push(`${brand}/${category.name}: Added ${specKeys.size} parameters`);
        }
      }
      
      // 2. Check parameter-spec alignment
      const currentParams = category.parameters || [];
      const productSpecKeys = new Set();
      
      category.products.forEach(product => {
        if (product.specifications) {
          Object.keys(product.specifications).forEach(key => {
            if (key !== 'Package') productSpecKeys.add(key);
          });
        }
      });
      
      const specKeysArray = Array.from(productSpecKeys);
      
      // Find mismatches
      const missingInParams = specKeysArray.filter(key => !currentParams.includes(key));
      const extraInParams = currentParams.filter(key => !specKeysArray.includes(key));
      
      if (missingInParams.length > 0 || extraInParams.length > 0) {
        issues.parameterMismatch.push({
          brand,
          category: category.name,
          currentParams,
          actualSpecs: specKeysArray,
          missing: missingInParams,
          extra: extraInParams
        });
        
        // Auto-fix: update parameters to match actual specs
        category.parameters = specKeysArray;
        brandNeedsSave = true;
        issues.fixed.push(`${brand}/${category.name}: Fixed parameter mismatch`);
      }
      
      // 3. Check for missing specifications in products
      category.products.forEach((product, prodIndex) => {
        if (!product.specifications) {
          product.specifications = {};
        }
        
        const missingSpecs = [];
        category.parameters.forEach(param => {
          if (!product.specifications[param]) {
            product.specifications[param] = 'N/A';
            missingSpecs.push(param);
          }
        });
        
        if (missingSpecs.length > 0) {
          issues.missingSpecs.push({
            brand,
            category: category.name,
            product: product.partNumber,
            missing: missingSpecs
          });
          brandNeedsSave = true;
        }
      });
    });
    
    // Save if changes were made
    if (brandNeedsSave) {
      fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
      console.log(`✅ Fixed and saved: ${brand}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${brand}: ${error.message}`);
  }
});

// Print summary
console.log('\n' + '='.repeat(70));
console.log('📊 Validation Summary');
console.log('='.repeat(70));

console.log(`\n🔴 Empty Parameters Found: ${issues.emptyParameters.length}`);
if (issues.emptyParameters.length > 0) {
  issues.emptyParameters.slice(0, 5).forEach(issue => {
    console.log(`   - ${issue.brand}/${issue.category}`);
  });
  if (issues.emptyParameters.length > 5) {
    console.log(`   ... and ${issues.emptyParameters.length - 5} more`);
  }
}

console.log(`\n🟡 Parameter Mismatches Found: ${issues.parameterMismatch.length}`);
if (issues.parameterMismatch.length > 0) {
  issues.parameterMismatch.slice(0, 5).forEach(issue => {
    console.log(`   - ${issue.brand}/${issue.category}`);
    if (issue.missing.length > 0) {
      console.log(`     Missing in params: [${issue.missing.join(', ')}]`);
    }
    if (issue.extra.length > 0) {
      console.log(`     Extra in params: [${issue.extra.join(', ')}]`);
    }
  });
  if (issues.parameterMismatch.length > 5) {
    console.log(`   ... and ${issues.parameterMismatch.length - 5} more`);
  }
}

console.log(`\n🟠 Missing Specifications: ${issues.missingSpecs.length} products`);

console.log(`\n✅ Total Fixes Applied: ${issues.fixed.length}`);
if (issues.fixed.length > 0) {
  issues.fixed.slice(0, 10).forEach(fix => {
    console.log(`   ✓ ${fix}`);
  });
  if (issues.fixed.length > 10) {
    console.log(`   ... and ${issues.fixed.length - 10} more`);
  }
}

console.log('\n' + '='.repeat(70));
console.log('🎉 Validation and auto-fix complete!');
console.log('='.repeat(70));

// Exit with error code if there are unfixable issues
const hasCriticalIssues = issues.emptyParameters.length > issues.fixed.length;
if (hasCriticalIssues) {
  console.log('\n⚠️  Warning: Some issues could not be automatically fixed.');
  console.log('   Please review the brands with empty parameters.');
  process.exit(1);
} else {
  console.log('\n✅ All issues have been automatically fixed!');
  process.exit(0);
}
