#!/usr/bin/env node
/**
 * 批量修复剩余品牌的中文内容
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
const replacements = [
  { from: /选型/g, to: 'Selection' },
  { from: /支持/g, to: 'Support' },
  { from: /产品/g, to: 'Products' },
  { from: /技术/g, to: 'Technology' },
  { from: /应用/g, to: 'Application' },
  { from: /解决方案/g, to: 'Solutions' },
  { from: /服务/g, to: 'Service' },
  { from: /代理商/g, to: 'Distributor' },
  { from: /分销商/g, to: 'Distributor' },
  { from: /授权/g, to: 'Authorized' }
];

function fixFile(filepath) {
  if (!fs.existsSync(filepath)) return 0;
  
  let content = fs.readFileSync(filepath, 'utf8');
  let originalContent = content;
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filepath, content, 'utf8');
    return 1;
  }
  return 0;
}

function fixBrand(brand) {
  console.log(`\nProcessing: ${brand}`);
  
  const brandDir = path.join(dataDir, brand);
  if (!fs.existsSync(brandDir)) {
    console.log(`  [SKIP] Directory not found`);
    return 0;
  }
  
  let fixed = 0;
  fixed += fixFile(path.join(brandDir, 'brand.json'));
  fixed += fixFile(path.join(brandDir, 'products.json'));
  fixed += fixFile(path.join(brandDir, 'solutions.json'));
  fixed += fixFile(path.join(brandDir, 'support.json'));
  
  if (fixed > 0) {
    console.log(`  [FIXED] ${fixed} files`);
  } else {
    console.log(`  [OK] No changes needed`);
  }
  
  return fixed;
}

function main() {
  console.log('========================================');
  console.log('Fix Remaining Chinese Content');
  console.log('========================================');
  
  let totalFixed = 0;
  brandsToFix.forEach(brand => {
    totalFixed += fixBrand(brand);
  });
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Total files fixed: ${totalFixed}`);
}

main();
