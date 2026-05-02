#!/usr/bin/env node
/**
 * 检查support.json文章数量是否符合要求
 * 铁律11: support.json 至少5篇文章（每类产品分类至少1篇）
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
             fs.existsSync(path.join(brandPath, 'support.json'));
    })
    .sort();
}

// 检查单个品牌的support.json
function checkSupportArticles(brand) {
  const supportPath = path.join(DATA_DIR, brand, 'support.json');
  
  if (!fs.existsSync(supportPath)) {
    return {
      brand,
      error: 'support.json not found',
      articleCount: 0,
      issues: []
    };
  }

  let data;
  try {
    const content = fs.readFileSync(supportPath, 'utf-8');
    data = JSON.parse(content);
  } catch (error) {
    return {
      brand,
      error: `JSON parse error: ${error.message}`,
      articleCount: 0,
      issues: []
    };
  }

  const articles = data.articles || [];
  const articleCount = articles.length;
  const issues = [];

  // 检查文章数量
  if (articleCount < 5) {
    issues.push({
      type: 'insufficient_articles',
      message: `Only ${articleCount} articles found, need at least 5`,
      current: articleCount,
      required: 5
    });
  }

  // 检查每篇文章的必填字段
  articles.forEach((article, index) => {
    const articleTitle = article.title || `Article ${index + 1}`;
    
    if (!article.author) {
      issues.push({
        type: 'missing_author',
        article: articleTitle,
        message: `Article "${articleTitle}" missing author`
      });
    }
    
    if (!article.publishDate) {
      issues.push({
        type: 'missing_publishDate',
        article: articleTitle,
        message: `Article "${articleTitle}" missing publishDate`
      });
    }
    
    if (!article.faeInsights) {
      issues.push({
        type: 'missing_faeInsights',
        article: articleTitle,
        message: `Article "${articleTitle}" missing faeInsights`
      });
    }
    
    if (!article.customerCases || article.customerCases.length === 0) {
      issues.push({
        type: 'missing_customerCases',
        article: articleTitle,
        message: `Article "${articleTitle}" missing customerCases`
      });
    }
  });

  return {
    brand,
    articleCount,
    issues
  };
}

// 主函数
function main() {
  const args = process.argv.slice(2);
  const brandFilter = args.find(arg => !arg.startsWith('--'));

  console.log('========================================');
  console.log('🔍 Checking Support Articles');
  console.log('========================================\n');

  const brands = brandFilter ? [brandFilter] : getAllBrands();
  
  let totalIssues = 0;
  const brandsWithIssues = [];

  brands.forEach((brand, index) => {
    const result = checkSupportArticles(brand);
    
    if (result.error) {
      console.log(`\n[${index + 1}/${brands.length}] ${brand}`);
      console.log(`  ❌ Error: ${result.error}`);
      return;
    }

    if (result.issues.length > 0) {
      console.log(`\n[${index + 1}/${brands.length}] ${brand} - ${result.articleCount} articles`);
      result.issues.forEach(issue => {
        if (issue.type === 'insufficient_articles') {
          console.log(`  ⚠️  ${issue.message}`);
        } else {
          console.log(`  ❌ ${issue.message}`);
        }
      });
      totalIssues += result.issues.length;
      brandsWithIssues.push({ brand, ...result });
    } else {
      console.log(`[${index + 1}/${brands.length}] ${brand} - ✅ ${result.articleCount} articles`);
    }
  });

  console.log('\n========================================');
  console.log('📊 Summary');
  console.log('========================================');
  console.log(`Total brands checked: ${brands.length}`);
  console.log(`Brands with issues: ${brandsWithIssues.length}`);
  console.log(`Total issues found: ${totalIssues}`);
  
  if (brandsWithIssues.length > 0) {
    console.log('\nBrands needing fixes:');
    brandsWithIssues.forEach(({ brand, articleCount, issues }) => {
      const insufficient = issues.find(i => i.type === 'insufficient_articles');
      if (insufficient) {
        console.log(`  - ${brand}: ${articleCount} articles (need ${insufficient.required})`);
      }
    });
  }
}

main();
