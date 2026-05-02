#!/usr/bin/env node
/**
 * 重新生成使用真实产品型号的品牌网站
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dataDir = path.join(__dirname, '..', 'data');

// 已使用真实产品型号修复的品牌
const fixedBrands = [
  'cree', 'nichicon', 'rohm', 'infineon', 'mitsubishi', 'fuji', 'macmic',
  'starpower', 'xinleineng', 'pinesemi', 'power-integrations', 'linco',
  'firstack', 'analogysemi', 'starrystonetech', 'fusemi', 'cps', 'oriental',
  'nce', 'sikor', 'panasonic', 'tdk', 'faratronic', 'samwha', 'hawun', 'hjc',
  'gigadevice', 'unisemicon', 'xhsc'
];

function log(message, color = 'reset') {
  const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
  };
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
  log('\n' + '='.repeat(70), 'cyan');
  log('🚀 Regenerating Brands with Real Part Numbers', 'cyan');
  log('='.repeat(70) + '\n', 'cyan');

  log(`Found ${fixedBrands.length} brands to regenerate\n`, 'blue');

  let successCount = 0;
  let failCount = 0;

  fixedBrands.forEach((brand, index) => {
    log(`[${index + 1}/${fixedBrands.length}] Generating: ${brand}`, 'magenta');
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
  log(`Total: ${fixedBrands.length}`, 'blue');
  log(`✅ Success: ${successCount}`, 'green');
  log(`❌ Failed: ${failCount}`, failCount > 0 ? 'red' : 'green');
  log('='.repeat(70) + '\n', 'cyan');

  if (failCount === 0) {
    log('🎉 All brand websites with real part numbers regenerated successfully!', 'green');
  } else {
    log(`⚠️  ${failCount} brands failed to generate`, 'red');
  }
}

main();
