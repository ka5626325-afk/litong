/**
 * 品牌数据验证脚本 V2
 * 根据 NEW_BRAND_DATA_REQUIREMENTS.md 要求验证品牌数据完整性
 *
 * 使用方法:
 *   node scripts/validate-brand-data-v2.js [brand-name]
 *   node scripts/validate-brand-data-v2.js --all
 */

const fs = require('fs');
const path = require('path');

const config = {
  dataDir: path.join(__dirname, '..', 'data')
};

// 验证结果
const results = {
  brands: {},
  summary: {
    total: 0,
    passed: 0,
    failed: 0,
    errors: []
  }
};

/**
 * 验证品牌数据
 */
function validateBrand(brandName) {
  console.log(`\n========================================`);
  console.log(`验证品牌: ${brandName}`);
  console.log(`========================================`);

  const brandDir = path.join(config.dataDir, brandName);
  const brandResult = {
    name: brandName,
    files: {},
    errors: [],
    warnings: []
  };

  // 检查文件是否存在
  const requiredFiles = ['brand.json', 'products.json', 'solutions.json', 'support.json', 'news.json'];
  requiredFiles.forEach(file => {
    const filePath = path.join(brandDir, file);
    if (!fs.existsSync(filePath)) {
      brandResult.errors.push(`缺少文件: ${file}`);
    }
  });

  // 验证 products.json
  if (fs.existsSync(path.join(brandDir, 'products.json'))) {
    brandResult.files.products = validateProducts(brandName, brandDir);
  }

  // 验证 solutions.json
  if (fs.existsSync(path.join(brandDir, 'solutions.json'))) {
    brandResult.files.solutions = validateSolutions(brandName, brandDir);
  }

  // 验证 support.json
  if (fs.existsSync(path.join(brandDir, 'support.json'))) {
    brandResult.files.support = validateSupport(brandName, brandDir);
  }

  // 验证 brand.json
  if (fs.existsSync(path.join(brandDir, 'brand.json'))) {
    brandResult.files.brand = validateBrandInfo(brandName, brandDir);
  }

  results.brands[brandName] = brandResult;
  results.summary.total++;

  if (brandResult.errors.length === 0) {
    results.summary.passed++;
    console.log(`✅ ${brandName} 验证通过`);
  } else {
    results.summary.failed++;
    console.log(`❌ ${brandName} 验证失败 (${brandResult.errors.length} 个错误)`);
    brandResult.errors.forEach(err => console.log(`   - ${err}`));
  }

  return brandResult;
}

/**
 * 验证 products.json
 */
function validateProducts(brandName, brandDir) {
  const result = { errors: [], warnings: [], categories: [] };
  const data = JSON.parse(fs.readFileSync(path.join(brandDir, 'products.json'), 'utf8'));

  if (!data.categories || !Array.isArray(data.categories)) {
    result.errors.push('products.json: 缺少 categories 数组');
    return result;
  }

  data.categories.forEach((category, catIndex) => {
    const catResult = {
      id: category.id || `category-${catIndex}`,
      name: category.name,
      errors: [],
      warnings: [],
      products: []
    };

    // 验证分类级别字段
    if (!category.selectionGuide) {
      catResult.errors.push(`分类 "${category.name}": 缺少 selectionGuide 选型指南`);
    } else {
      const sg = category.selectionGuide;
      if (!sg.title) catResult.errors.push(`分类 "${category.name}": selectionGuide 缺少 title`);
      if (!sg.description) catResult.errors.push(`分类 "${category.name}": selectionGuide 缺少 description`);
      if (!sg.articleId) catResult.errors.push(`分类 "${category.name}": selectionGuide 缺少 articleId`);
      if (!sg.articleLink) catResult.errors.push(`分类 "${category.name}": selectionGuide 缺少 articleLink`);
    }

    // 验证产品级别字段
    if (category.products && Array.isArray(category.products)) {
      category.products.forEach((product, prodIndex) => {
        const prodResult = {
          partNumber: product.partNumber || `product-${prodIndex}`,
          errors: [],
          warnings: []
        };

        // 检查 shortDescription
        if (!product.shortDescription) {
          prodResult.errors.push(`产品 "${product.partNumber}": 缺少 shortDescription`);
        } else if (product.shortDescription.length < 80 || product.shortDescription.length > 120) {
          prodResult.warnings.push(`产品 "${product.partNumber}": shortDescription 长度应为 80-120 字符 (当前: ${product.shortDescription.length})`);
        }

        // 检查 descriptionParagraphs
        if (!product.descriptionParagraphs || !Array.isArray(product.descriptionParagraphs)) {
          prodResult.errors.push(`产品 "${product.partNumber}": 缺少 descriptionParagraphs 数组`);
        } else if (product.descriptionParagraphs.length !== 3) {
          prodResult.warnings.push(`产品 "${product.partNumber}": descriptionParagraphs 应为 3 段 (当前: ${product.descriptionParagraphs.length})`);
        }

        // 检查 faeReview
        if (!product.faeReview) {
          prodResult.errors.push(`产品 "${product.partNumber}": 缺少 faeReview 代理商点评`);
        } else {
          const fr = product.faeReview;
          if (!fr.author) prodResult.errors.push(`产品 "${product.partNumber}": faeReview 缺少 author`);
          if (!fr.title) prodResult.errors.push(`产品 "${product.partNumber}": faeReview 缺少 title`);
          if (!fr.content) prodResult.errors.push(`产品 "${product.partNumber}": faeReview 缺少 content`);
          if (!fr.highlight) prodResult.errors.push(`产品 "${product.partNumber}": faeReview 缺少 highlight`);
        }

        // 检查 alternativeParts
        if (!product.alternativeParts || !Array.isArray(product.alternativeParts)) {
          prodResult.errors.push(`产品 "${product.partNumber}": 缺少 alternativeParts 替代料号`);
        } else if (product.alternativeParts.length < 1) {
          prodResult.errors.push(`产品 "${product.partNumber}": alternativeParts 至少应有 1 个`);
        }

        // 检查 companionParts
        if (!product.companionParts || !Array.isArray(product.companionParts)) {
          prodResult.errors.push(`产品 "${product.partNumber}": 缺少 companionParts 配套料号`);
        } else if (product.companionParts.length < 2) {
          prodResult.errors.push(`产品 "${product.partNumber}": companionParts 至少应有 2 个 (当前: ${product.companionParts.length})`);
        }

        if (prodResult.errors.length > 0) {
          catResult.products.push(prodResult);
          result.errors.push(...prodResult.errors);
        }
        if (prodResult.warnings.length > 0) {
          result.warnings.push(...prodResult.warnings);
        }
      });
    }

    if (catResult.errors.length > 0 || catResult.products.length > 0) {
      result.categories.push(catResult);
      result.errors.push(...catResult.errors);
      result.warnings.push(...catResult.warnings);
    }
  });

  return result;
}

/**
 * 验证 solutions.json
 */
function validateSolutions(brandName, brandDir) {
  const result = { errors: [], warnings: [], solutions: [] };
  const data = JSON.parse(fs.readFileSync(path.join(brandDir, 'solutions.json'), 'utf8'));

  if (!data.solutions || !Array.isArray(data.solutions)) {
    result.errors.push('solutions.json: 缺少 solutions 数组');
    return result;
  }

  data.solutions.forEach((solution, index) => {
    const solResult = {
      id: solution.id || `solution-${index}`,
      name: solution.name,
      errors: [],
      warnings: []
    };

    // 检查 customerCases
    if (!solution.customerCases || !Array.isArray(solution.customerCases)) {
      solResult.errors.push(`解决方案 "${solution.name}": 缺少 customerCases 客户案例`);
    } else if (solution.customerCases.length < 1) {
      solResult.errors.push(`解决方案 "${solution.name}": customerCases 至少应有 1 个`);
    } else {
      solution.customerCases.forEach((cc, ccIndex) => {
        if (!cc.customerName) solResult.warnings.push(`解决方案 "${solution.name}" 案例 ${ccIndex + 1}: 缺少 customerName`);
        if (!cc.industry) solResult.warnings.push(`解决方案 "${solution.name}" 案例 ${ccIndex + 1}: 缺少 industry`);
        if (!cc.challenge) solResult.warnings.push(`解决方案 "${solution.name}" 案例 ${ccIndex + 1}: 缺少 challenge`);
        if (!cc.solution) solResult.warnings.push(`解决方案 "${solution.name}" 案例 ${ccIndex + 1}: 缺少 solution`);
        if (!cc.results) solResult.warnings.push(`解决方案 "${solution.name}" 案例 ${ccIndex + 1}: 缺少 results`);
      });
    }

    // 检查 faeInsights
    if (!solution.faeInsights) {
      solResult.errors.push(`解决方案 "${solution.name}": 缺少 faeInsights FAE 见解`);
    } else {
      const fi = solution.faeInsights;
      if (!fi.author) solResult.errors.push(`解决方案 "${solution.name}": faeInsights 缺少 author`);
      if (!fi.insight) solResult.errors.push(`解决方案 "${solution.name}": faeInsights 缺少 insight`);
      if (!fi.logic) solResult.errors.push(`解决方案 "${solution.name}": faeInsights 缺少 logic`);
      if (!fi.keyTakeaways || !Array.isArray(fi.keyTakeaways)) {
        solResult.errors.push(`解决方案 "${solution.name}": faeInsights 缺少 keyTakeaways`);
      }
      if (!fi.commonPitfalls || !Array.isArray(fi.commonPitfalls)) {
        solResult.errors.push(`解决方案 "${solution.name}": faeInsights 缺少 commonPitfalls`);
      }
      if (!fi.bestPractices || !Array.isArray(fi.bestPractices)) {
        solResult.errors.push(`解决方案 "${solution.name}": faeInsights 缺少 bestPractices`);
      }
    }

    if (solResult.errors.length > 0) {
      result.solutions.push(solResult);
      result.errors.push(...solResult.errors);
      result.warnings.push(...solResult.warnings);
    }
  });

  return result;
}

/**
 * 验证 support.json
 */
function validateSupport(brandName, brandDir) {
  const result = { errors: [], warnings: [], articles: [] };
  const data = JSON.parse(fs.readFileSync(path.join(brandDir, 'support.json'), 'utf8'));

  if (!data.articles || !Array.isArray(data.articles)) {
    result.errors.push('support.json: 缺少 articles 数组');
    return result;
  }

  data.articles.forEach((article, index) => {
    const artResult = {
      id: article.id || `article-${index}`,
      title: article.title,
      errors: [],
      warnings: []
    };

    // 检查 author
    if (!article.author) {
      artResult.errors.push(`文章 "${article.title}": 缺少 author`);
    } else {
      const author = article.author;
      if (!author.name) artResult.errors.push(`文章 "${article.title}": author 缺少 name`);
      if (!author.title) artResult.errors.push(`文章 "${article.title}": author 缺少 title`);
      if (!author.experience) artResult.errors.push(`文章 "${article.title}": author 缺少 experience`);
      if (!author.expertise || !Array.isArray(author.expertise)) {
        artResult.errors.push(`文章 "${article.title}": author 缺少 expertise`);
      }
    }

    // 检查 publishDate
    if (!article.publishDate) {
      artResult.errors.push(`文章 "${article.title}": 缺少 publishDate`);
    }

    // 检查 relatedArticles
    if (!article.relatedArticles || !Array.isArray(article.relatedArticles)) {
      artResult.errors.push(`文章 "${article.title}": 缺少 relatedArticles`);
    } else if (article.relatedArticles.length < 3) {
      artResult.errors.push(`文章 "${article.title}": relatedArticles 至少应有 3 个 (当前: ${article.relatedArticles.length})`);
    }

    // 检查 faeInsights
    if (!article.faeInsights) {
      artResult.errors.push(`文章 "${article.title}": 缺少 faeInsights`);
    } else {
      const fi = article.faeInsights;
      if (!fi.insight) artResult.errors.push(`文章 "${article.title}": faeInsights 缺少 insight`);
      if (!fi.logic) artResult.errors.push(`文章 "${article.title}": faeInsights 缺少 logic`);
      if (!fi.keyTakeaways || !Array.isArray(fi.keyTakeaways)) {
        artResult.errors.push(`文章 "${article.title}": faeInsights 缺少 keyTakeaways`);
      }
      if (!fi.commonPitfalls || !Array.isArray(fi.commonPitfalls)) {
        artResult.errors.push(`文章 "${article.title}": faeInsights 缺少 commonPitfalls`);
      }
      if (!fi.bestPractices || !Array.isArray(fi.bestPractices)) {
        artResult.errors.push(`文章 "${article.title}": faeInsights 缺少 bestPractices`);
      }
      if (!fi.troubleshootingTips || !Array.isArray(fi.troubleshootingTips)) {
        artResult.errors.push(`文章 "${article.title}": faeInsights 缺少 troubleshootingTips`);
      }
    }

    // 检查 customerCases
    if (!article.customerCases || !Array.isArray(article.customerCases)) {
      artResult.errors.push(`文章 "${article.title}": 缺少 customerCases`);
    } else if (article.customerCases.length < 1) {
      artResult.errors.push(`文章 "${article.title}": customerCases 至少应有 1 个`);
    } else {
      article.customerCases.forEach((cc, ccIndex) => {
        if (!cc.customerName) artResult.warnings.push(`文章 "${article.title}" 案例 ${ccIndex + 1}: 缺少 customerName`);
        if (!cc.problem) artResult.warnings.push(`文章 "${article.title}" 案例 ${ccIndex + 1}: 缺少 problem`);
        if (!cc.solution) artResult.warnings.push(`文章 "${article.title}" 案例 ${ccIndex + 1}: 缺少 solution`);
      });
    }

    if (artResult.errors.length > 0) {
      result.articles.push(artResult);
      result.errors.push(...artResult.errors);
      result.warnings.push(...artResult.warnings);
    }
  });

  return result;
}

/**
 * 验证 brand.json
 */
function validateBrandInfo(brandName, brandDir) {
  const result = { errors: [], warnings: [] };
  const data = JSON.parse(fs.readFileSync(path.join(brandDir, 'brand.json'), 'utf8'));

  // 检查必填字段
  const requiredFields = ['name', 'displayName', 'description', 'longDescription', 'coreProducts', 'industries'];
  requiredFields.forEach(field => {
    if (!data[field]) {
      result.errors.push(`brand.json: 缺少 ${field}`);
    }
  });

  return result;
}

/**
 * 打印验证报告
 */
function printReport() {
  console.log(`\n\n========================================`);
  console.log(`验证报告总结`);
  console.log(`========================================`);
  console.log(`总品牌数: ${results.summary.total}`);
  console.log(`通过: ${results.summary.passed}`);
  console.log(`失败: ${results.summary.failed}`);

  if (results.summary.errors.length > 0) {
    console.log(`\n所有错误:`);
    results.summary.errors.forEach(err => console.log(`  - ${err}`));
  }

  // 保存详细报告
  const reportPath = path.join(__dirname, '..', 'validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n详细报告已保存: ${reportPath}`);
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('使用方法:');
    console.log('  node scripts/validate-brand-data-v2.js [brand-name]');
    console.log('  node scripts/validate-brand-data-v2.js --all');
    console.log('\n示例:');
    console.log('  node scripts/validate-brand-data-v2.js infineon');
    console.log('  node scripts/validate-brand-data-v2.js --all');
    process.exit(1);
  }

  if (args[0] === '--all') {
    // 验证所有品牌
    const brands = fs.readdirSync(config.dataDir).filter(item => {
      const itemPath = path.join(config.dataDir, item);
      return fs.statSync(itemPath).isDirectory();
    });

    brands.forEach(brand => validateBrand(brand));
  } else {
    // 验证指定品牌
    const brandName = args[0];
    const brandDir = path.join(config.dataDir, brandName);
    if (!fs.existsSync(brandDir)) {
      console.error(`错误: 品牌 "${brandName}" 不存在`);
      process.exit(1);
    }
    validateBrand(brandName);
  }

  printReport();
}

main();
