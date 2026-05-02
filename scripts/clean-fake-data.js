#!/usr/bin/env node
/**
 * 清理所有编造的虚假产品数据
 * 将编造的产品型号替换为"数据待补充"标记
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 编造的产品型号模式（需要清理的）
const fakePatterns = [
  /^C2M\d{4}$/, /^C3D\d{4}$/, /^CGH\d{4}$/, /^CAB\d{4}$/, /^CM\d{4}$/,
  /^CGD\d{4}$/, /^UHE\d{4}$/, /^ECW\d{4}$/, /^JJD\d{4}$/, /^CAP\d{4}$/,
  /^PCF\d{4}$/, /^PCL\d{4}$/, /^PROD\d{4}$/, /^SNS\d{4}$/, /^RES\d{4}$/,
  /^MOD\d{4}$/, /^IC\d{4}$/, /^MCU\d{4}$/,
  /^SICMOSFETS-\d+$/i, /^SICSCHOTTKYDIODES-\d+$/i, /^GANHEMTS-\d+$/i,
  /^POWERMODULES-\d+$/i, /^GATEDRIVERS-\d+$/i, /^IGBTMODULES-\d+$/i,
  /^MOSFETS-\d+$/i, /^ALUMINUMELECTROLYTIC-\d+$/i, /^FILMCAPACITORS-\d+$/i,
  /^EDLCSUPERCAPACITORS-\d+$/i, /^CONDUCTIVEPOLYMER-\d+$/i, /^MCU-\d+$/i,
  /^SENSOR-\d+$/i
];

// 检查是否为编造型号
function isFakePartNumber(partNumber) {
  if (!partNumber || typeof partNumber !== 'string') return true;
  return fakePatterns.some(pattern => pattern.test(partNumber));
}

// 获取所有品牌
function getAllBrands() {
  return fs.readdirSync(dataDir).filter(dir => {
    const fullPath = path.join(dataDir, dir);
    return fs.statSync(fullPath).isDirectory();
  }).sort();
}

// 清理单个品牌的products.json
function cleanBrandProducts(brand) {
  const productsPath = path.join(dataDir, brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { cleaned: 0, errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    return { cleaned: 0, errors: [`${brand}: JSON parse error`] };
  }
  
  let cleanCount = 0;
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          if (isFakePartNumber(product.partNumber)) {
            console.log(`  ${brand}/${category.name}[${pIdx}]: "${product.partNumber}" -> "DATA_PENDING"`);
            
            // 将编造的数据替换为待补充标记
            product.partNumber = 'DATA_PENDING';
            product.name = `${category.name} (Data Pending)`;
            product.shortDescription = '[Data Pending] Official product information to be added from manufacturer datasheet.';
            product.descriptionParagraphs = [
              '[Data Pending] Product description to be added from official manufacturer documentation.',
              '[Data Pending] Technical specifications to be verified against official datasheet.',
              '[Data Pending] Application information to be confirmed with manufacturer.'
            ];
            product.specifications = {
              'Status': 'Data pending - to be updated from official source'
            };
            
            // 清理FAE Review
            if (product.faeReview) {
              product.faeReview = {
                reviewer: 'BeiLuo FAE Team',
                date: new Date().toISOString().split('T')[0],
                content: '[Data Pending] FAE review to be added based on actual product evaluation and application experience.'
              };
            }
            
            // 清理替代料号
            if (product.alternativeParts) {
              product.alternativeParts = [];
            }
            
            // 清理配套料号
            if (product.companionParts) {
              product.companionParts = [];
            }
            
            cleanCount++;
          }
        });
      }
    });
  }
  
  if (cleanCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { cleaned: cleanCount, errors: [`${brand}: Save error`] };
    }
  }
  
  return { cleaned: cleanCount, errors: [] };
}

// 清理solutions.json中的编造内容
function cleanBrandSolutions(brand) {
  const solutionsPath = path.join(dataDir, brand, 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    return { cleaned: 0, errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
  } catch (error) {
    return { cleaned: 0, errors: [`${brand}: JSON parse error`] };
  }
  
  let cleanCount = 0;
  
  if (data.solutions && Array.isArray(data.solutions)) {
    data.solutions.forEach((solution, idx) => {
      // 检查并清理编造的FAE Insights
      if (solution.faeInsights) {
        const insight = solution.faeInsights.content || solution.faeInsights.insight || '';
        if (insight.includes('Based on my extensive experience') || 
            insight.includes('I\'ve observed that successful')) {
          console.log(`  ${brand}/solutions[${idx}]: Cleaning fake FAE insight`);
          
          if (solution.faeInsights.content) {
            solution.faeInsights.content = '[Data Pending] FAE insights to be added based on actual application experience with this solution.';
          } else {
            solution.faeInsights.insight = '[Data Pending] FAE insights to be added based on actual application experience with this solution.';
          }
          cleanCount++;
        }
      }
      
      // 检查并清理编造的客户案例
      if (solution.customerCases && Array.isArray(solution.customerCases)) {
        solution.customerCases.forEach((caseItem, cIdx) => {
          if (caseItem.challenge && (
              caseItem.challenge.includes('The customer faced significant challenges') ||
              caseItem.challenge.includes('Designing a reliable') ||
              caseItem.challenge.includes('The project required achieving')
          )) {
            console.log(`  ${brand}/solutions[${idx}]/customerCases[${cIdx}]: Cleaning fake case`);
            caseItem.challenge = '[Data Pending] Customer challenge to be documented from actual project experience.';
            caseItem.solution = '[Data Pending] Solution details to be added based on actual implementation.';
            caseItem.results = '[Data Pending] Results to be verified with customer.';
            cleanCount++;
          }
        });
      }
    });
  }
  
  if (cleanCount > 0) {
    try {
      fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { cleaned: cleanCount, errors: [`${brand}: Save error`] };
    }
  }
  
  return { cleaned: cleanCount, errors: [] };
}

// 清理support.json中的编造内容
function cleanBrandSupport(brand) {
  const supportPath = path.join(dataDir, brand, 'support.json');
  
  if (!fs.existsSync(supportPath)) {
    return { cleaned: 0, errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    return { cleaned: 0, errors: [`${brand}: JSON parse error`] };
  }
  
  let cleanCount = 0;
  
  if (data.articles && Array.isArray(data.articles)) {
    data.articles.forEach((article, idx) => {
      // 检查并清理编造的内容
      if (article.content && Array.isArray(article.content)) {
        const contentText = article.content.join(' ');
        if (contentText.includes('This comprehensive guide provides detailed technical information') ||
            contentText.includes('This application note provides practical guidance')) {
          console.log(`  ${brand}/articles[${idx}]: Cleaning fake content`);
          article.content = [
            '[Data Pending] Article content to be added from official technical documentation.',
            '[Data Pending] Technical details to be verified with manufacturer.',
            '[Data Pending] Application guidelines to be confirmed by FAE team.'
          ];
          cleanCount++;
        }
      }
      
      // 清理编造的FAQ回答
      if (article.faqs && Array.isArray(article.faqs)) {
        article.faqs.forEach((faq, fIdx) => {
          if (faq.answer && (
              faq.answer.includes('This is an important consideration when working with') ||
              faq.answer.includes('Key factors to evaluate include')
          )) {
            console.log(`  ${brand}/articles[${idx}]/faqs[${fIdx}]: Cleaning fake answer`);
            faq.answer = '[Data Pending] Answer to be verified with manufacturer technical support team.';
            cleanCount++;
          }
        });
      }
    });
  }
  
  if (cleanCount > 0) {
    try {
      fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { cleaned: cleanCount, errors: [`${brand}: Save error`] };
    }
  }
  
  return { cleaned: cleanCount, errors: [] };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Clean Fake Data from All Brands');
  console.log('========================================');
  console.log('Replacing fabricated data with "[Data Pending]" markers\n');
  
  const brands = getAllBrands();
  console.log(`Found ${brands.length} brands\n`);
  
  let totalCleaned = 0;
  const errors = [];
  
  brands.forEach(brand => {
    console.log(`Processing: ${brand}`);
    
    const productsResult = cleanBrandProducts(brand);
    const solutionsResult = cleanBrandSolutions(brand);
    const supportResult = cleanBrandSupport(brand);
    
    const brandCleaned = productsResult.cleaned + solutionsResult.cleaned + supportResult.cleaned;
    totalCleaned += brandCleaned;
    
    if (brandCleaned > 0) {
      console.log(`  Total cleaned: ${brandCleaned}\n`);
    } else {
      console.log('  No fake data found\n');
    }
    
    errors.push(...productsResult.errors, ...solutionsResult.errors, ...supportResult.errors);
  });
  
  console.log('========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Total items cleaned: ${totalCleaned}`);
  console.log(`Brands processed: ${brands.length}`);
  
  if (errors.length > 0) {
    console.log(`\nErrors: ${errors.length}`);
    errors.forEach(err => console.log(`  - ${err}`));
  }
  
  console.log('\n⚠️  All fabricated data has been marked as "[Data Pending]"');
  console.log('⚠️  You must manually add real data from official manufacturer sources');
}

main();
