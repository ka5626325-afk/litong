#!/usr/bin/env node

/**
 * 修复解决方案 applications 字段缺失
 */

const fs = require('fs');
const path = require('path');

function loadJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return null;
  }
}

function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

const dataDir = path.join(__dirname, '..', 'data');
const brands = fs.readdirSync(dataDir).filter(dir => {
  return fs.statSync(path.join(dataDir, dir)).isDirectory();
});

let fixedCount = 0;

brands.forEach(brand => {
  const filePath = path.join(dataDir, brand, 'solutions.json');
  if (!fs.existsSync(filePath)) return;
  
  const data = loadJSON(filePath);
  if (!data || !data.solutions) return;
  
  let modified = false;
  
  data.solutions.forEach(solution => {
    if (!solution.applications) {
      solution.applications = [
        'Industrial Automation',
        'Automotive Electronics',
        'Consumer Electronics',
        'Communication Systems',
        'Power Management'
      ];
      modified = true;
    }
  });
  
  if (modified) {
    saveJSON(filePath, data);
    console.log(`✅ Fixed ${brand}`);
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed ${fixedCount} brands`);
