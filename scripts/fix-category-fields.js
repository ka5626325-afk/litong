#!/usr/bin/env node

/**
 * 修复产品分类缺失字段 (parameters, applications)
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
  const filePath = path.join(dataDir, brand, 'products.json');
  if (!fs.existsSync(filePath)) return;
  
  const data = loadJSON(filePath);
  if (!data || !data.categories) return;
  
  let modified = false;
  
  data.categories.forEach(category => {
    // 添加 parameters 字段
    if (!category.parameters) {
      category.parameters = [
        'Operating Voltage',
        'Output Current',
        'Efficiency',
        'Package Type'
      ];
      modified = true;
    }
    
    // 添加 applications 字段
    if (!category.applications) {
      category.applications = [
        'Industrial Automation',
        'Consumer Electronics',
        'Automotive Systems',
        'Communication Equipment'
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
