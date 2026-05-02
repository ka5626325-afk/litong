#!/usr/bin/env node
/**
 * Clean up all orphaned directories from root folder
 * Keep only essential project directories
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// Essential directories that should be kept
const essentialDirs = [
  'data',        // Brand data JSON files
  'docs',        // Documentation
  'node_modules', // NPM packages
  'output',      // Generated website output
  'scripts',     // Build scripts
  'templates',   // HTML templates
  'assets',      // Static assets (CSS, JS, images)
  'about',       // About page
  'news',        // News page
  'components',  // Reusable components
  '.git',        // Git repository
  '.github',     // GitHub configs
  '.qwen',       // Qwen settings
  '.worktrees',  // Git worktrees
  '.wrangler',   // Wrangler config
  'tests'        // Test files
];

console.log('Cleaning up all orphaned directories from root folder...\n');

const items = fs.readdirSync(rootDir);
let cleanedCount = 0;
let keptCount = 0;

items.forEach(item => {
  const itemPath = path.join(rootDir, item);
  const stat = fs.statSync(itemPath);
  
  if (stat.isDirectory()) {
    if (essentialDirs.includes(item)) {
      console.log(`⏭️  Kept: /${item}/`);
      keptCount++;
    } else {
      try {
        fs.rmSync(itemPath, { recursive: true, force: true });
        console.log(`✅ Removed: /${item}/`);
        cleanedCount++;
      } catch (error) {
        console.log(`❌ Failed to remove: /${item}/ - ${error.message}`);
      }
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`  ✅ Removed: ${cleanedCount} directories`);
console.log(`  ⏭️  Kept: ${keptCount} directories`);
console.log(`\n🎉 Cleanup complete!`);
console.log(`\n📋 Remaining structure:`);
console.log(`  - data/      : Brand data JSON files`);
console.log(`  - output/    : Generated website (brand subdirectories here)`);
console.log(`  - scripts/   : Build and utility scripts`);
console.log(`  - templates/ : HTML templates`);
console.log(`  - assets/    : Static assets`);
