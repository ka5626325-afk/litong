#!/usr/bin/env node

/**
 * 重新生成所有品牌网站
 * Regenerate all brand websites after data fixes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 获取所有品牌
function getAllBrands() {
  const dataDir = path.join(__dirname, '..', 'data');
  return fs.readdirSync(dataDir).filter(dir => {
    const fullPath = path.join(dataDir, dir);
    return fs.statSync(fullPath).isDirectory();
  }).sort();
}

// 主函数
function main() {
  log('\n' + '='.repeat(70), 'cyan');
  log('🚀 Regenerating all brand websites', 'cyan');
  log('='.repeat(70) + '\n', 'cyan');

  const brands = getAllBrands();
  log(`Found ${brands.length} brands to regenerate\n`, 'blue');

  let successCount = 0;
  let failCount = 0;

  brands.forEach((brand, index) => {
    log(`[${index + 1}/${brands.length}] Generating: ${brand}`, 'magenta');
    try {
      execSync(`node scripts/generate.js --brand ${brand}`, {
        cwd: path.join(__dirname, '..'),
        stdio: 'pipe',
        timeout: 60000
      });
      log(`  ✅ ${brand} generated successfully\n`, 'green');
      successCount++;
    } catch (error) {
      log(`  ❌ ${brand} failed: ${error.message.split('\n')[0]}\n`, 'red');
      failCount++;
    }
  });

  log('\n' + '='.repeat(70), 'cyan');
  log('📊 Generation Summary', 'cyan');
  log('='.repeat(70), 'cyan');
  log(`Total: ${brands.length}`, 'blue');
  log(`✅ Success: ${successCount}`, 'green');
  log(`❌ Failed: ${failCount}`, failCount > 0 ? 'red' : 'green');
  log('='.repeat(70) + '\n', 'cyan');

  if (failCount === 0) {
    log('🎉 All brand websites regenerated successfully!', 'green');
  } else {
    log(`⚠️  ${failCount} brands failed to generate`, 'red');
  }

  return failCount;
}

const failedCount = main();
process.exit(failedCount > 0 ? 1 : 0);
