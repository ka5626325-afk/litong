#!/usr/bin/env node
/**
 * Generate all brand websites
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');

// Get all brand directories
const brands = fs.readdirSync(dataDir)
  .filter(dir => {
    const dirPath = path.join(dataDir, dir);
    return fs.statSync(dirPath).isDirectory() && 
           fs.existsSync(path.join(dirPath, 'brand.json'));
  })
  .sort();

console.log(`Found ${brands.length} brands to generate\n`);

// Generate each brand
let successCount = 0;
let failCount = 0;

for (let i = 0; i < brands.length; i++) {
  const brand = brands[i];
  console.log(`[${i + 1}/${brands.length}] Generating ${brand}...`);
  
  try {
    execSync(`npm run generate:brand ${brand}`, {
      stdio: 'inherit',
      cwd: __dirname
    });
    successCount++;
  } catch (error) {
    console.error(`Failed to generate ${brand}:`, error.message);
    failCount++;
  }
}

console.log(`\n========================================`);
console.log(`Generation complete!`);
console.log(`Success: ${successCount}`);
console.log(`Failed: ${failCount}`);
console.log(`========================================`);
