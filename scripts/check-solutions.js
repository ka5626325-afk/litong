#!/usr/bin/env node
/**
 * 检查solutions.json解决方案数量
 * 铁律10: solutions.json 至少3个解决方案
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
function getAllBrands() {
  if (!fs.existsSync(DATA_DIR)) {
    return [];
  }
  return fs.readdirSync(DATA_DIR)
    .filter(name => {
      const brandPath = path.join(DATA_DIR, name);
      return fs.statSync(brandPath).isDirectory() &&
             fs.existsSync(path.join(brandPath, 'solutions.json'));
    })
    .sort();
}

// 检查单个品牌的solutions.json
function checkSolutions(brand) {
  const solutionsPath = path.join(DATA_DIR, brand, 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    return {
      brand,
      error: 'solutions.json not found',
      solutionCount: 0,
      issues: []
    };
  }

  let data;
  try {
    const content = fs.readFileSync(solutionsPath, 'utf-8');
    data = JSON.parse(content);
  } catch (error) {
    return {
      brand,
      error: `JSON parse error: ${error.message}`,
      solutionCount: 0,
      issues: []
    };
  }

  const solutions = data.solutions || [];
  const solutionCount = solutions.length;
  const issues = [];

  // 检查解决方案数量
  if (solutionCount < 3) {
    issues.push({
      type: 'insufficient_solutions',
      message: `Only ${solutionCount} solutions found, need at least 3`,
      current: solutionCount,
      required: 3
    });
  }

  return {
    brand,
    solutionCount,
    issues
  };
}

// 主函数
function main() {
  const args = process.argv.slice(2);
  const brandFilter = args.find(arg => !arg.startsWith('--'));

  console.log('========================================');
  console.log('🔍 Checking Solutions Count');
  console.log('========================================\n');

  const brands = brandFilter ? [brandFilter] : getAllBrands();
  
  let totalIssues = 0;
  const brandsWithIssues = [];

  brands.forEach((brand, index) => {
    const result = checkSolutions(brand);
    
    if (result.error) {
      console.log(`\n[${index + 1}/${brands.length}] ${brand}`);
      console.log(`  ❌ Error: ${result.error}`);
      return;
    }

    if (result.issues.length > 0) {
      console.log(`\n[${index + 1}/${brands.length}] ${brand} - ${result.solutionCount} solutions`);
      result.issues.forEach(issue => {
        console.log(`  ⚠️  ${issue.message}`);
      });
      totalIssues += result.issues.length;
      brandsWithIssues.push({ brand, ...result });
    } else {
      console.log(`[${index + 1}/${brands.length}] ${brand} - ✅ ${result.solutionCount} solutions`);
    }
  });

  console.log('\n========================================');
  console.log('📊 Summary');
  console.log('========================================');
  console.log(`Total brands checked: ${brands.length}`);
  console.log(`Brands with insufficient solutions: ${brandsWithIssues.length}`);
  console.log(`Total issues found: ${totalIssues}`);
  
  if (brandsWithIssues.length > 0) {
    console.log('\nBrands needing more solutions:');
    brandsWithIssues.forEach(({ brand, solutionCount, issues }) => {
      const insufficient = issues.find(i => i.type === 'insufficient_solutions');
      if (insufficient) {
        console.log(`  - ${brand}: ${solutionCount} solutions (need ${insufficient.required})`);
      }
    });
  }
}

main();
