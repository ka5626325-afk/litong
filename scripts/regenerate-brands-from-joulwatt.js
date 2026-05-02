#!/usr/bin/env node
/**
 * 从joulwatt开始重新生成品牌网站
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 获取从joulwatt开始的所有品牌
function getBrandsFromJoulwatt() {
  const dataDir = path.join(__dirname, '..', 'data');
  const brands = fs.readdirSync(dataDir).filter(item => {
    const itemPath = path.join(dataDir, item);
    return fs.statSync(itemPath).isDirectory();
  }).sort();
  
  const joulwattIndex = brands.indexOf('joulwatt');
  if (joulwattIndex === -1) {
    console.log('joulwatt brand not found');
    return [];
  }
  
  return brands.slice(joulwattIndex);
}

// 主函数
function main() {
  const brands = getBrandsFromJoulwatt();
  
  console.log(`Found ${brands.length} brands to regenerate (from joulwatt)\n`);
  
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
      console.log(`  ✗ Failed`);
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
