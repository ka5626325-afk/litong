#!/usr/bin/env node
/**
 * Clean up brand directories from root folder
 * Brands should only exist in /output/ directory, not in root
 * Following BRAND_DATA_COMPLETE_GUIDE.md Iron Rule 7g-7l
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const dataDir = path.join(rootDir, 'data');

// Get list of brands from data directory
const brands = fs.readdirSync(dataDir).filter(item => {
  const itemPath = path.join(dataDir, item);
  return fs.statSync(itemPath).isDirectory();
});

console.log(`Found ${brands.length} brands in data directory`);
console.log('Cleaning up brand directories from root folder...\n');

let cleanedCount = 0;
let skippedCount = 0;

brands.forEach(brand => {
  const brandDir = path.join(rootDir, brand);
  
  if (fs.existsSync(brandDir)) {
    try {
      // Remove the brand directory from root
      fs.rmSync(brandDir, { recursive: true, force: true });
      console.log(`✅ Removed: /${brand}/`);
      cleanedCount++;
    } catch (error) {
      console.log(`❌ Failed to remove: /${brand}/ - ${error.message}`);
      skippedCount++;
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`  ✅ Removed: ${cleanedCount} brand directories`);
console.log(`  ❌ Failed: ${skippedCount} brand directories`);
console.log(`\n🎉 Cleanup complete! Brand directories now only exist in /output/`);
console.log(`\n📋 Note: According to BRAND_DATA_COMPLETE_GUIDE.md Iron Rule 7g-7l:`);
console.log(`  - Brand pages should be in /output/{brand}/ (e.g., /output/ti/)`);
console.log(`  - Brand list page should be in /output/brands/`);
console.log(`  - No brand directories should exist in root folder`);
