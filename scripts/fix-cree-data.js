#!/usr/bin/env node
/**
 * 修复cree品牌的无意义标题和内容
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 生成有意义的解决方案标题
function generateSolutionTitle(index) {
  const titles = [
    'EV Powertrain Solution',
    'Renewable Energy System',
    'Industrial Motor Drive',
    'High-Speed Rail Power',
    'Medical Equipment Power'
  ];
  return titles[index % titles.length];
}

// 生成有意义的产品名称
function generateProductName(category, index) {
  const prefixes = {
    'Power Modules': 'CAB',
    'SiC MOSFETs': 'C2M',
    'GaN HEMTs': 'CGH',
    'SiC Schottky Diodes': 'C3D',
    'Gate Drivers': 'CGD'
  };
  const prefix = prefixes[category] || 'PROD';
  return `${prefix}${String(index + 1).padStart(4, '0')}`;
}

// 生成产品描述
function generateProductDescription(partNumber, category) {
  return [
    `The ${partNumber} is a high-performance ${category} from Cree Wolfspeed, designed for demanding power electronics applications. This product features advanced wide bandgap technology for superior efficiency and thermal performance.`,
    `Featuring industry-leading electrical characteristics including low on-resistance, fast switching speeds, and excellent thermal conductivity. The device is manufactured using state-of-the-art processes to ensure consistent quality and reliability.`,
    `Ideal for applications including electric vehicle powertrains, renewable energy systems, industrial motor drives, and high-frequency power converters. The ${partNumber} enables system designers to achieve higher efficiency and power density.`
  ];
}

// 修复solutions.json
function fixSolutions() {
  console.log('Fixing solutions.json...');
  const solutionsPath = path.join(dataDir, 'cree', 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    console.log('  ❌ solutions.json not found');
    return 0;
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    console.log(`  ❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, idx) => {
      // 修复无意义的ID和title
      if (solution.id && solution.id.includes('solution-')) {
        const oldId = solution.id;
        const oldTitle = solution.title;
        
        // 生成新的有意义的ID和title
        const newTitle = generateSolutionTitle(idx);
        const newId = newTitle.toLowerCase().replace(/\s+/g, '-');
        
        solution.id = newId;
        solution.title = newTitle;
        
        console.log(`  - solutions[${idx}]: "${oldId}" -> "${newId}"`);
        console.log(`    title: "${oldTitle}" -> "${newTitle}"`);
        fixCount++;
      }
    });
  }
  
  if (fixCount > 0) {
    fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`  ✅ Fixed ${fixCount} solutions`);
  } else {
    console.log('  ✅ No issues found');
  }
  
  return fixCount;
}

// 修复products.json
function fixProducts() {
  console.log('\nFixing products.json...');
  const productsPath = path.join(dataDir, 'cree', 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log('  ❌ products.json not found');
    return 0;
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`  ❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          // 修复无意义的产品型号
          if (product.partNumber && product.partNumber.match(/^(POWERMODULES|SICMOSFETS|GANHEMTS|SICSCHOTTKY|GATEDRIVERS)-\d+$/i)) {
            const oldPartNumber = product.partNumber;
            const oldName = product.name;
            
            // 生成新的有意义的产品型号
            const newPartNumber = generateProductName(category.name, pIdx);
            const newName = `${category.name} ${newPartNumber}`;
            
            product.partNumber = newPartNumber;
            product.name = newName;
            
            // 修复descriptionParagraphs
            product.descriptionParagraphs = generateProductDescription(newPartNumber, category.name);
            
            console.log(`  - categories[${cIdx}].products[${pIdx}]:`);
            console.log(`    partNumber: "${oldPartNumber}" -> "${newPartNumber}"`);
            console.log(`    name: "${oldName}" -> "${newName}"`);
            fixCount++;
          }
        });
      }
    });
  }
  
  if (fixCount > 0) {
    fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`  ✅ Fixed ${fixCount} products`);
  } else {
    console.log('  ✅ No issues found');
  }
  
  return fixCount;
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Fix Cree Brand Data');
  console.log('========================================');
  
  const solutionsFixed = fixSolutions();
  const productsFixed = fixProducts();
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Solutions fixed: ${solutionsFixed}`);
  console.log(`Products fixed: ${productsFixed}`);
  console.log(`Total fixed: ${solutionsFixed + productsFixed}`);
}

main();
