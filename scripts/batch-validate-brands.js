#!/usr/bin/env node

/**
 * 批量验证所有品牌数据
 * 使用方法: node scripts/batch-validate-brands.js
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

// 获取所有品牌目录
function getAllBrands() {
  const dataDir = path.join(__dirname, '..', 'data');
  return fs.readdirSync(dataDir).filter(dir => {
    const fullPath = path.join(dataDir, dir);
    return fs.statSync(fullPath).isDirectory();
  }).sort();
}

// 运行单个品牌的检查清单
function validateBrand(brand) {
  try {
    const output = execSync(`node scripts/brand-creation-checklist.js ${brand}`, {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8',
      timeout: 30000
    });
    return { brand, success: true, output };
  } catch (error) {
    return { brand, success: false, output: error.stdout || error.message, exitCode: error.status };
  }
}

// 主函数
function main() {
  log('\n' + '='.repeat(70), 'cyan');
  log('🔍 批量验证所有品牌数据', 'cyan');
  log('='.repeat(70) + '\n', 'cyan');

  const brands = getAllBrands();
  log(`发现 ${brands.length} 个品牌需要验证\n`, 'blue');

  const results = {
    passed: [],
    failed: []
  };

  // 验证每个品牌
  brands.forEach((brand, index) => {
    log(`[${index + 1}/${brands.length}] 验证品牌: ${brand}`, 'magenta');
    const result = validateBrand(brand);
    
    if (result.success) {
      log(`  ✅ ${brand} 通过检查\n`, 'green');
      results.passed.push(brand);
    } else {
      log(`  ❌ ${brand} 未通过检查\n`, 'red');
      results.failed.push({ brand, output: result.output });
    }
  });

  // 输出总结
  log('\n' + '='.repeat(70), 'cyan');
  log('📊 验证结果总结', 'cyan');
  log('='.repeat(70), 'cyan');
  log(`总品牌数: ${brands.length}`, 'blue');
  log(`✅ 通过: ${results.passed.length}`, 'green');
  log(`❌ 失败: ${results.failed.length}`, results.failed.length > 0 ? 'red' : 'green');

  // 显示失败的详细信息
  if (results.failed.length > 0) {
    log('\n❌ 需要修复的品牌:', 'red');
    results.failed.forEach(({ brand, output }) => {
      log(`\n--- ${brand} ---`, 'yellow');
      // 只显示失败的部分
      const lines = output.split('\n');
      lines.forEach(line => {
        if (line.includes('❌')) {
          log(line, 'red');
        }
      });
    });

    // 保存失败列表到文件
    const failedBrands = results.failed.map(r => r.brand);
    fs.writeFileSync(
      path.join(__dirname, '..', 'failed-brands.json'),
      JSON.stringify(failedBrands, null, 2)
    );
    log('\n失败品牌列表已保存到 failed-brands.json', 'yellow');
  }

  // 保存通过列表
  fs.writeFileSync(
    path.join(__dirname, '..', 'passed-brands.json'),
    JSON.stringify(results.passed, null, 2)
  );
  log('通过品牌列表已保存到 passed-brands.json', 'green');

  log('\n' + '='.repeat(70), 'cyan');
  if (results.failed.length === 0) {
    log('🎉 所有品牌数据验证通过！', 'green');
  } else {
    log(`⚠️  请修复上述 ${results.failed.length} 个品牌的问题`, 'red');
  }
  log('='.repeat(70) + '\n', 'cyan');

  return results.failed.length;
}

const failedCount = main();
process.exit(failedCount > 0 ? 1 : 0);
