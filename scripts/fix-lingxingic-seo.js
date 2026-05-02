const fs = require('fs');
const path = require('path');

const brandName = 'lingxingic';
const dataDir = path.join(__dirname, '..', 'data', brandName);

console.log(`🔧 修复 ${brandName} SEO关键词问题...\n`);

// 1. 修复 solutions.json
console.log('📄 修复 solutions.json...');
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 确保同时有 distributor 和 selection 关键词
const hasDistributor = solutionsData.seoKeywords.some(k => k.toLowerCase().includes('distributor'));
const hasSelection = solutionsData.seoKeywords.some(k => k.toLowerCase().includes('selection') || k.includes('选型'));

if (!hasDistributor) {
  solutionsData.seoKeywords.push('Lingxingic distributor');
}
if (!hasSelection) {
  solutionsData.seoKeywords.push('Lingxingic selection guide');
}

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json 修复完成\n');

// 2. 修复 support.json
console.log('📄 修复 support.json...');
const supportPath = path.join(dataDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 确保同时有 distributor 和 selection 关键词
const hasDistributor2 = supportData.seoKeywords.some(k => k.toLowerCase().includes('distributor'));
const hasSelection2 = supportData.seoKeywords.some(k => k.toLowerCase().includes('selection') || k.includes('选型'));

if (!hasDistributor2) {
  supportData.seoKeywords.push('Lingxingic distributor');
}
if (!hasSelection2) {
  supportData.seoKeywords.push('Lingxingic selection guide');
}

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ support.json 修复完成\n');

console.log('🎉 SEO关键词修复完成！');
