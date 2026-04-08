/**
 * 批量生成品牌网站脚本
 * Batch Generate Brand Websites Script
 */

const { execSync } = require('child_process');
const { brandsToCreate } = require('./batch-create-brands');

// 已存在的品牌
const existingBrands = [
  'cree', 'rohm', 'inventchip', 'genesic', 'firstack',
  'sanrex', 'qiangmao', 'changdian',
  'st', 'onsemi', 'wolfspeed', 'vishay', 'infineon', 'magna', 'byd', 'semikron'
];

// 所有品牌
const allBrands = [
  ...existingBrands,
  ...brandsToCreate.map(b => b.name)
];

console.log('🚀 Starting batch website generation...\n');
console.log(`📦 Total brands to generate: ${allBrands.length}\n`);

let successCount = 0;
let failCount = 0;

allBrands.forEach((brand, index) => {
  console.log(`[${index + 1}/${allBrands.length}] Generating ${brand}...`);
  try {
    execSync(`node scripts/generate.js --brand ${brand}`, {
      cwd: __dirname + '/..',
      stdio: 'pipe'
    });
    console.log(`  ✅ ${brand} generated successfully\n`);
    successCount++;
  } catch (error) {
    console.error(`  ❌ ${brand} failed:`, error.message.split('\n')[0], '\n');
    failCount++;
  }
});

console.log('\n📊 Generation Summary:');
console.log(`   ✅ Success: ${successCount}`);
console.log(`   ❌ Failed: ${failCount}`);
console.log(`   📦 Total: ${allBrands.length}`);
