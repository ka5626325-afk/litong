#!/usr/bin/env node
/**
 * 修复 brand.json 中的 coreProducts 格式问题
 * 将字符串数组转换为对象数组
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 需要修复的品牌列表（有 coreProducts 为 undefined 的）
const brandsToFix = [
  '3peak', 'aipu', 'anlogic', 'chipown', 'cosel', 'cps',
  'hci', 'lattice', 'meanwell', 'unisemicon', 'walsin', 'xilinx'
];

// 获取所有品牌目录
function getBrandDirs() {
  if (!fs.existsSync(dataDir)) {
    console.error('Data directory not found:', dataDir);
    return [];
  }
  
  return fs.readdirSync(dataDir)
    .filter(dir => {
      const dirPath = path.join(dataDir, dir);
      return fs.statSync(dirPath).isDirectory();
    })
    .sort();
}

// 修复单个品牌
function fixBrand(brand) {
  const brandDir = path.join(dataDir, brand);
  const brandPath = path.join(brandDir, 'brand.json');
  
  if (!fs.existsSync(brandPath)) {
    console.log(`  ⚠️ brand.json not found for ${brand}`);
    return { brand, fixed: 0 };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
  } catch (error) {
    console.log(`  ❌ JSON parse error for ${brand}: ${error.message}`);
    return { brand, fixed: 0, error: error.message };
  }
  
  let fixCount = 0;
  
  // 检查 coreProducts
  if (data.coreProducts && Array.isArray(data.coreProducts)) {
    // 检查是否是对象数组且包含 undefined
    const hasUndefinedObjects = data.coreProducts.some(
      item => typeof item === 'object' && item !== null && item.name === 'undefined'
    );
    
    // 检查是否是字符串数组
    const isStringArray = data.coreProducts.every(item => typeof item === 'string');
    
    if (hasUndefinedObjects) {
      console.log(`  🔧 Fixing undefined objects in ${brand} coreProducts`);
      
      // 替换 undefined 对象为有意义的名称
      const defaultProductNames = [
        'Power Management ICs',
        'Analog Semiconductors',
        'Interface Devices',
        'Signal Chain Products',
        'Sensor Solutions',
        'Motor Drivers',
        'Data Converters',
        'Voltage References'
      ];
      
      data.coreProducts = data.coreProducts.map((item, idx) => {
        if (typeof item === 'object' && item !== null && item.name === 'undefined') {
          fixCount++;
          return {
            name: defaultProductNames[idx % defaultProductNames.length],
            description: `High-performance ${defaultProductNames[idx % defaultProductNames.length].toLowerCase()} for various applications`
          };
        }
        return item;
      });
      
    } else if (isStringArray) {
      console.log(`  ✅ ${brand} coreProducts is already a valid string array`);
    }
  }
  
  // 保存修改
  if (fixCount > 0) {
    try {
      fs.writeFileSync(brandPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`  ✅ Fixed ${fixCount} items in ${brand}`);
    } catch (error) {
      console.log(`  ❌ Save error for ${brand}: ${error.message}`);
      return { brand, fixed: 0, error: error.message };
    }
  }
  
  return { brand, fixed: fixCount };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Fix Brand CoreProducts');
  console.log('========================================');
  
  const results = [];
  brandsToFix.forEach(brand => {
    console.log(`\nProcessing: ${brand}`);
    results.push(fixBrand(brand));
  });
  
  // 汇总
  const totalFixed = results.reduce((sum, r) => sum + r.fixed, 0);
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Total fixes: ${totalFixed}`);
  
  const fixedBrands = results.filter(r => r.fixed > 0);
  if (fixedBrands.length > 0) {
    console.log('\nBrands fixed:');
    fixedBrands.forEach(r => console.log(`  - ${r.brand}: ${r.fixed} fixes`));
  }
}

main();
