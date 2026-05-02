#!/usr/bin/env node
/**
 * 批量重新生成所有品牌网站
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 获取所有品牌目录
function getAllBrands() {
  const dataDir = path.join(__dirname, '..', 'data');
  return fs.readdirSync(dataDir).filter(item => {
    const itemPath = path.join(dataDir, item);
    return fs.statSync(itemPath).isDirectory();
  }).sort();
}

// 主函数
function main() {
  const brands = getAllBrands();
  
  console.log(`Found ${brands.length} brands to regenerate\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  brands.forEach((brand, index) => {
    console.log(`[${index + 1}/${brands.length}] Regenerating brand: ${brand}`);
    
    try {
      execSync(`npm run generate:brand -- ${brand}`, {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        timeout: 120000 // 2分钟超时
      });
      console.log(`  ✓ Success`);
      successCount++;
    } catch (error) {
      console.log(`  ✗ Failed: ${error.message}`);
      failCount++;
    }
  });
  
  console.log('\n=== Regeneration Summary ===');
  console.log(`Total brands: ${brands.length}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log('\nRegeneration completed!');
}

main();
