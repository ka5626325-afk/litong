#!/usr/bin/env node
/**
 * 修复品牌数据中的中文内容
 * 将中文内容翻译为英文
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 有中文内容的品牌列表（按字母顺序）
const brandsWithChinese = [
  'anlogic',      // 188 issues - 中英混杂严重
  'bpsemi',       // 2 issues
  'chipon',       // 2 issues
  'chipown',      // 1 issue
  'clickele',     // 1 issue
  'cosel',        // 8 issues
  'cps',          // 1 issue
  'fusemi',       // 2 issues
  'hawun',        // 1 issue
  'jisemi',       // 3 issues
  'linsimicro',   // 3 issues
  'longsys',      // 1 issue
  'macrosilicon', // 1 issue
  'micron',       // 1 issue
  'mornsun',      // 1 issue
  'mxtronics',    // 1 issue
  'nce',          // 4 issues
  'pinesemi',     // 1 issue
  'pridesilicon', // 2 issues
  'qinheng',      // 2 issues
  'rayson',       // 118 issues
  'rivotek',      // 4 issues
  'runic',        // 1 issue
  'senodia',      // 1 issue
  'sinofuse',     // 3 issues
  'starrystonetech', // 3 issues
  'superchip',    // 1 issue
  'unisemicon',   // 8 issues
  'vanchip',      // 1 issue
  'walsin',       // 304 issues
  'will',         // 1 issue
  'xghc',         // 1 issue
  'xinleineng'    // 1 issue
];

// 中文检测正则
const chinesePattern = /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/;

// 检查是否包含中文
function containsChinese(text) {
  if (!text || typeof text !== 'string') return false;
  return chinesePattern.test(text);
}

// 修复文件中的中文内容
function fixFile(filepath) {
  if (!fs.existsSync(filepath)) {
    return { fixed: 0, errors: ['File not found'] };
  }
  
  let content;
  try {
    content = fs.readFileSync(filepath, 'utf8');
  } catch (error) {
    return { fixed: 0, errors: [`Read error: ${error.message}`] };
  }
  
  // 检测是否有中文
  if (!containsChinese(content)) {
    return { fixed: 0, errors: [] };
  }
  
  console.log(`  Found Chinese content in ${path.basename(filepath)}`);
  
  // 对于严重中英混杂的文件，记录需要手动修复
  const chineseMatches = content.match(/[\u4e00-\u9fff]/g);
  const chineseCount = chineseMatches ? chineseMatches.length : 0;
  
  if (chineseCount > 50) {
    console.log(`  [WARNING] File has ${chineseCount} Chinese characters - needs manual translation`);
    return { fixed: 0, errors: [`${chineseCount} Chinese characters - needs manual translation`] };
  }
  
  // 简单的关键词替换
  let newContent = content;
  const replacements = [
    { from: /选型/g, to: 'selection' },
    { from: /支持/g, to: 'support' },
    { from: /产品/g, to: 'products' },
    { from: /技术/g, to: 'technology' },
    { from: /应用/g, to: 'application' },
    { from: /解决方案/g, to: 'solutions' },
    { from: /服务/g, to: 'service' }
  ];
  
  let fixCount = 0;
  replacements.forEach(({ from, to }) => {
    if (from.test(newContent)) {
      newContent = newContent.replace(from, to);
      fixCount++;
    }
  });
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(filepath, newContent, 'utf8');
      console.log(`  [FIXED] Replaced ${fixCount} Chinese keywords`);
      return { fixed: fixCount, errors: [] };
    } catch (error) {
      return { fixed: 0, errors: [`Write error: ${error.message}`] };
    }
  }
  
  return { fixed: 0, errors: ['No simple fixes applied'] };
}

// 修复单个品牌
function fixBrand(brand) {
  console.log(`\n========================================`);
  console.log(`Fixing brand: ${brand}`);
  console.log(`========================================`);
  
  const brandDir = path.join(dataDir, brand);
  let totalFixed = 0;
  const allErrors = [];
  
  // 检查 brand.json
  console.log(`\n  Checking brand.json...`);
  const brandResult = fixFile(path.join(brandDir, 'brand.json'));
  totalFixed += brandResult.fixed;
  allErrors.push(...brandResult.errors);
  
  // 检查 products.json
  console.log(`\n  Checking products.json...`);
  const productsResult = fixFile(path.join(brandDir, 'products.json'));
  totalFixed += productsResult.fixed;
  allErrors.push(...productsResult.errors);
  
  // 检查 solutions.json
  console.log(`\n  Checking solutions.json...`);
  const solutionsPath = path.join(brandDir, 'solutions.json');
  if (fs.existsSync(solutionsPath)) {
    const solutionsResult = fixFile(solutionsPath);
    totalFixed += solutionsResult.fixed;
    allErrors.push(...solutionsResult.errors);
  } else {
    console.log(`  (file not found)`);
  }
  
  // 检查 support.json
  console.log(`\n  Checking support.json...`);
  const supportPath = path.join(brandDir, 'support.json');
  if (fs.existsSync(supportPath)) {
    const supportResult = fixFile(supportPath);
    totalFixed += supportResult.fixed;
    allErrors.push(...supportResult.errors);
  } else {
    console.log(`  (file not found)`);
  }
  
  if (totalFixed === 0 && allErrors.length === 0) {
    console.log('\n  [OK] No Chinese content found');
  } else if (totalFixed > 0) {
    console.log(`\n  [SUMMARY] Fixed ${totalFixed} issues`);
  }
  
  if (allErrors.length > 0) {
    console.log(`\n  [ERRORS] ${allErrors.length} issues need manual fix:`);
    allErrors.forEach(err => console.log(`    - ${err}`));
  }
  
  return {
    brand,
    fixed: totalFixed,
    errors: allErrors.length
  };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Fix Chinese Content');
  console.log('========================================');
  
  const results = [];
  brandsWithChinese.forEach(brand => {
    results.push(fixBrand(brand));
  });
  
  // 汇总
  const totalFixed = results.reduce((sum, r) => sum + r.fixed, 0);
  const brandsWithErrors = results.filter(r => r.errors > 0);
  
  console.log('\n\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Total fixes: ${totalFixed}`);
  console.log(`Brands with errors (need manual fix): ${brandsWithErrors.length}`);
  
  if (brandsWithErrors.length > 0) {
    console.log('\nBrands needing manual translation:');
    brandsWithErrors.forEach(r => {
      console.log(`  - ${r.brand}: ${r.errors} issues`);
    });
  }
}

main();
