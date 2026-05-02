#!/usr/bin/env node
/**
 * Batch Brand Data Fix Script
 * Fixes all brands that don't meet requirements
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkBrand(brandName) {
  const brandDir = path.join(__dirname, '..', 'data', brandName);
  
  if (!fs.existsSync(brandDir)) {
    return { error: 'Brand directory does not exist' };
  }

  const result = {
    brand: brandName,
    categories: [],
    categoryProductCounts: [],
    solutionCount: 0,
    articleCount: 0,
    errors: []
  };

  // Check products.json
  const productsPath = path.join(brandDir, 'products.json');
  if (fs.existsSync(productsPath)) {
    try {
      const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      if (productsData.categories) {
        result.categories = productsData.categories.map(c => c.id);
        result.categoryProductCounts = productsData.categories.map(c => ({
          id: c.id,
          name: c.name,
          count: c.products ? c.products.length : 0
        }));
      }
    } catch (e) {
      result.errors.push(`products.json parse error: ${e.message}`);
    }
  } else {
    result.errors.push('products.json not found');
  }

  // Check solutions.json
  const solutionsPath = path.join(brandDir, 'solutions.json');
  if (fs.existsSync(solutionsPath)) {
    try {
      const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
      result.solutionCount = solutionsData.solutions ? solutionsData.solutions.length : 0;
    } catch (e) {
      result.errors.push(`solutions.json parse error: ${e.message}`);
    }
  } else {
    result.errors.push('solutions.json not found');
  }

  // Check support.json
  const supportPath = path.join(brandDir, 'support.json');
  if (fs.existsSync(supportPath)) {
    try {
      const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
      result.articleCount = supportData.articles ? supportData.articles.length : 0;
    } catch (e) {
      result.errors.push(`support.json parse error: ${e.message}`);
    }
  } else {
    result.errors.push('support.json not found');
  }

  return result;
}

function validateBrand(result) {
  const issues = [];
  
  // Check each category has at least 4 products
  result.categoryProductCounts.forEach(cat => {
    if (cat.count < 4) {
      issues.push(`Category "${cat.name}" has only ${cat.count} products (required: 4+)`);
    }
  });

  // Check solutions count
  if (result.solutionCount < 3) {
    issues.push(`Only ${result.solutionCount} solutions (required: 3+)`);
  }

  // Check articles count
  if (result.articleCount < 5) {
    issues.push(`Only ${result.articleCount} articles (required: 5+)`);
  }

  return issues;
}

function main() {
  const dataDir = path.join(__dirname, '..', 'data');
  const brands = fs.readdirSync(dataDir).filter(dir => {
    return fs.statSync(path.join(dataDir, dir)).isDirectory();
  }).sort();

  log('========================================', 'blue');
  log('Batch Brand Data Fix', 'blue');
  log('========================================\n', 'blue');

  let passCount = 0;
  let failCount = 0;
  let fixedCount = 0;

  brands.forEach(brand => {
    const result = checkBrand(brand);
    
    if (result.error) {
      log(`${brand}: ${result.error}`, 'red');
      failCount++;
      return;
    }

    const issues = validateBrand(result);
    
    if (issues.length === 0) {
      log(`${brand}: ✅ PASS`, 'green');
      passCount++;
    } else {
      log(`\n${brand}: ❌ FAIL - Fixing...`, 'yellow');
      
      try {
        execSync(`node scripts/fix-brand-data.js ${brand}`, { 
          cwd: path.join(__dirname, '..'),
          stdio: 'pipe'
        });
        
        // Verify fix
        const verifyResult = checkBrand(brand);
        const verifyIssues = validateBrand(verifyResult);
        
        if (verifyIssues.length === 0) {
          log(`${brand}: ✅ FIXED`, 'green');
          fixedCount++;
        } else {
          log(`${brand}: ⚠️ Partial fix`, 'yellow');
        }
      } catch (e) {
        log(`${brand}: ❌ Fix failed - ${e.message}`, 'red');
      }
      
      failCount++;
    }
  });

  log('\n========================================', 'blue');
  log(`Summary: ${passCount} passed, ${fixedCount} fixed, ${failCount - fixedCount} failed`, 'blue');
  log('========================================', 'blue');
}

main();
