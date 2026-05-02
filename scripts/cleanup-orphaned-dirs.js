#!/usr/bin/env node
/**
 * Clean up orphaned directories from root folder
 * These are old/test directories that don't belong in the project root
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// List of orphaned directories to clean up
const orphanedDirs = [
  'adi-products', 'adi-support',
  'byd-products', 'byd-support',
  'cree-support',
  'crrc',
  'fuji-support',
  'gcoreinc',
  'goertek',
  'guanxi',
  'hci-products', 'hci-support',
  'hjc-products', 'hjc-support',
  'hongfa',
  'ixys-support',
  'lem-products', 'lem-support',
  'linsimic',
  'liteon',
  'littelfuse',
  'nce-products', 'nce-support',
  'nuvoton',
  'nxp',
  'qiangmao',
  'realtek',
  'richtek',
  'rohm-support',
  'sanrex',
  'sanying',
  'skhynix',
  'skyworks',
  'songlerelay',
  'st-products', 'st-solutions',
  'sunlord',
  'tdk-products', 'tdk-support',
  'ti-products',
  'tianbo',
  'wanyu',
  'will-support',
  'wurth',
  'xinzhou',
  'bps',
  'brands',
  'changdian'
];

console.log('Cleaning up orphaned directories from root folder...\n');

let cleanedCount = 0;
let skippedCount = 0;

orphanedDirs.forEach(dirName => {
  const dirPath = path.join(rootDir, dirName);
  
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Removed: /${dirName}/`);
      cleanedCount++;
    } catch (error) {
      console.log(`❌ Failed to remove: /${dirName}/ - ${error.message}`);
      skippedCount++;
    }
  } else {
    console.log(`⏭️  Skipped: /${dirName}/ (does not exist)`);
    skippedCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`  ✅ Removed: ${cleanedCount} directories`);
console.log(`  ⏭️  Skipped: ${skippedCount} directories`);
console.log(`\n🎉 Cleanup complete!`);
