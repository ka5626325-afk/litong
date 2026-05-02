#!/usr/bin/env node
/**
 * 批量修复品牌数据中的中文内容
 * 处理剩余33个品牌的中文问题
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 需要修复的品牌列表
const brandsToFix = [
  '3peak', 'analogysemi', 'bpsemi', 'chipon', 'chipown', 'clickele', 
  'cps', 'fusemi', 'hawun', 'jisemi', 'linsimicro', 'longsys',
  'macrosilicon', 'micron', 'mornsun', 'mxtronics', 'nce', 
  'pinesemi', 'pridesilicon', 'qinheng', 'rivotek', 'runic',
  'senodia', 'sinofuse', 'starrystonetech', 'superchip',
  'vanchip', 'will', 'xghc', 'xinleineng'
];

// 简单的中文关键词替换
const simpleReplacements = [
  { from: /选型/g, to: 'Selection' },
  { from: /支持/g, to: 'Support' },
  { from: /产品/g, to: 'Products' },
  { from: /技术/g, to: 'Technology' },
  { from: /应用/g, to: 'Application' },
  { from: /解决方案/g, to: 'Solutions' },
  { from: /服务/g, to: 'Service' },
  { from: /代理商/g, to: 'Distributor' },
  { from: /分销商/g, to: 'Distributor' },
  { from: /授权/g, to: 'Authorized' },
  { from: /品牌/g, to: 'Brand' },
  { from: /描述/g, to: 'Description' }
];

function fixBrand(brand) {
  console.log(`\nProcessing: ${brand}`);
  
  const brandDir = path.join(dataDir, brand);
  if (!fs.existsSync(brandDir)) {
    console.log(`  [SKIP] Directory not found`);
    return { brand, fixed: 0 };
  }
  
  let totalFixed = 0;
  
  // 修复 brand.json
  const brandPath = path.join(brandDir, 'brand.json');
  if (fs.existsSync(brandPath)) {
    let content = fs.readFileSync(brandPath, 'utf8');
    let originalContent = content;
    
    simpleReplacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(brandPath, content, 'utf8');
      totalFixed++;
      console.log(`  [FIXED] brand.json`);
    }
  }
  
  // 修复 products.json
  const productsPath = path.join(brandDir, 'products.json');
  if (fs.existsSync(productsPath)) {
    let content = fs.readFileSync(productsPath, 'utf8');
    let originalContent = content;
    
    simpleReplacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(productsPath, content, 'utf8');
      totalFixed++;
      console.log(`  [FIXED] products.json`);
    }
  }
  
  // 修复 solutions.json
  const solutionsPath = path.join(brandDir, 'solutions.json');
  if (fs.existsSync(solutionsPath)) {
    let content = fs.readFileSync(solutionsPath, 'utf8');
    let originalContent = content;
    
    simpleReplacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(solutionsPath, content, 'utf8');
      totalFixed++;
      console.log(`  [FIXED] solutions.json`);
    }
  }
  
  // 修复 support.json
  const supportPath = path.join(brandDir, 'support.json');
  if (fs.existsSync(supportPath)) {
    let content = fs.readFileSync(supportPath, 'utf8');
    let originalContent = content;
    
    simpleReplacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(supportPath, content, 'utf8');
      totalFixed++;
      console.log(`  [FIXED] support.json`);
    }
  }
  
  if (totalFixed === 0) {
    console.log(`  [OK] No simple fixes applied`);
  }
  
  return { brand, fixed: totalFixed };
}

function main() {
  console.log('========================================');
  console.log('Batch Fix Chinese Content');
  console.log('========================================');
  
  const results = [];
  brandsToFix.forEach(brand => {
    results.push(fixBrand(brand));
  });
  
  const totalFixed = results.reduce((sum, r) => sum + r.fixed, 0);
  const brandsFixed = results.filter(r => r.fixed > 0);
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Total files fixed: ${totalFixed}`);
  console.log(`Brands with fixes: ${brandsFixed.length}`);
  
  if (brandsFixed.length > 0) {
    console.log('\nBrands fixed:');
    brandsFixed.forEach(r => console.log(`  - ${r.brand}: ${r.fixed} files`));
  }
}

main();
