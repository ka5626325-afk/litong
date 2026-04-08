const fs = require('fs');
const path = require('path');

const brands = ['st', 'macmic', 'semikron', 'infineon', 'crrc'];
const dataDir = path.join(__dirname, 'data');

// 要求配置
const requirements = {
  brand: { min: 4, max: 8, name: 'about-brand' },
  productsRoot: { min: 3, name: 'products-list' },
  productCategory: { min: 3, name: 'product-category' },
  productDetail: { min: 5, max: 6, name: 'product-detail' },
  solutionsRoot: { min: 3, name: 'solutions-list' },
  solutionDetail: { min: 3, max: 6, name: 'solution-detail' },
  supportRoot: { min: 12, max: 18, name: 'support-list' },
  supportArticle: { min: 4, max: 8, name: 'support-detail' }
};

function loadJSON(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

function checkRange(count, req) {
  if (req.min && req.max) {
    return count >= req.min && count <= req.max;
  } else if (req.min) {
    return count >= req.min;
  }
  return true;
}

function getRangeText(req) {
  if (req.min && req.max) return `${req.min}-${req.max}`;
  if (req.min) return `≥${req.min}`;
  return 'any';
}

console.log('='.repeat(80));
console.log('全品牌 FAQ 合规性检查报告');
console.log('='.repeat(80));
console.log();

brands.forEach(brand => {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`品牌: ${brand.toUpperCase()}`);
  console.log('='.repeat(80));
  
  const brandDir = path.join(dataDir, brand);
  
  // 1. 检查 brand.json
  const brandData = loadJSON(path.join(brandDir, 'brand.json'));
  if (brandData) {
    const faqCount = brandData.faqs ? brandData.faqs.length : 0;
    const req = requirements.brand;
    const status = checkRange(faqCount, req) ? '✅' : '❌';
    console.log(`\n${status} brand.json (about-brand)`);
    console.log(`   当前: ${faqCount}条 | 要求: ${getRangeText(req)}条`);
    if (brandData.faqs && brandData.faqs.length > 0) {
      console.log(`   问题示例: ${brandData.faqs[0].question.substring(0, 50)}...`);
    }
  }
  
  // 2. 检查 products.json
  const productsData = loadJSON(path.join(brandDir, 'products.json'));
  if (productsData) {
    console.log(`\n📦 products.json`);
    
    // 根级别FAQ
    const rootFaqCount = productsData.faqs ? productsData.faqs.length : 0;
    const rootReq = requirements.productsRoot;
    const rootStatus = checkRange(rootFaqCount, rootReq) ? '✅' : '❌';
    console.log(`   ${rootStatus} 根级别FAQ (products-list): ${rootFaqCount}条 | 要求: ${getRangeText(rootReq)}条`);
    
    // 分类和产品
    if (productsData.categories) {
      productsData.categories.forEach((cat, idx) => {
        console.log(`\n   分类 ${idx + 1}: ${cat.name}`);
        
        // 分类FAQ
        const catFaqCount = cat.faqs ? cat.faqs.length : 0;
        const catReq = requirements.productCategory;
        const catStatus = checkRange(catFaqCount, catReq) ? '✅' : '❌';
        console.log(`   ${catStatus} 分类FAQ: ${catFaqCount}条 | 要求: ${getRangeText(catReq)}条`);
        
        // 产品FAQ
        if (cat.products) {
          cat.products.forEach((prod, pIdx) => {
            const prodFaqCount = prod.faqs ? prod.faqs.length : 0;
            const prodReq = requirements.productDetail;
            const prodStatus = checkRange(prodFaqCount, prodReq) ? '✅' : '❌';
            console.log(`      ${prodStatus} ${prod.partNumber}: ${prodFaqCount}条 | 要求: ${getRangeText(prodReq)}条`);
          });
        }
      });
    }
  }
  
  // 3. 检查 solutions.json
  const solutionsData = loadJSON(path.join(brandDir, 'solutions.json'));
  if (solutionsData) {
    console.log(`\n🔧 solutions.json`);
    
    // 根级别FAQ
    const rootFaqCount = solutionsData.faqs ? solutionsData.faqs.length : 0;
    const rootReq = requirements.solutionsRoot;
    const rootStatus = checkRange(rootFaqCount, rootReq) ? '✅' : '❌';
    console.log(`   ${rootStatus} 根级别FAQ (solutions-list): ${rootFaqCount}条 | 要求: ${getRangeText(rootReq)}条`);
    
    // 方案FAQ
    if (solutionsData.solutions) {
      solutionsData.solutions.forEach((sol, idx) => {
        const solFaqCount = sol.faqs ? sol.faqs.length : 0;
        const solReq = requirements.solutionDetail;
        const solStatus = checkRange(solFaqCount, solReq) ? '✅' : '❌';
        console.log(`   ${solStatus} 方案 ${idx + 1} (${sol.id}): ${solFaqCount}条 | 要求: ${getRangeText(solReq)}条`);
      });
    }
  }
  
  // 4. 检查 support.json
  const supportData = loadJSON(path.join(brandDir, 'support.json'));
  if (supportData) {
    console.log(`\n📚 support.json`);
    
    // 根级别FAQ
    const rootFaqCount = supportData.faqs ? supportData.faqs.length : 0;
    const rootReq = requirements.supportRoot;
    const rootStatus = checkRange(rootFaqCount, rootReq) ? '✅' : '❌';
    console.log(`   ${rootStatus} 根级别FAQ (support-list): ${rootFaqCount}条 | 要求: ${getRangeText(rootReq)}条`);
    
    // 文章FAQ
    if (supportData.articles) {
      supportData.articles.forEach((article, idx) => {
        const artFaqCount = article.faqs ? article.faqs.length : 0;
        const artReq = requirements.supportArticle;
        const artStatus = checkRange(artFaqCount, artReq) ? '✅' : '❌';
        console.log(`   ${artStatus} 文章 ${idx + 1} (${article.id}): ${artFaqCount}条 | 要求: ${getRangeText(artReq)}条`);
      });
    }
  }
});

console.log('\n' + '='.repeat(80));
console.log('检查完成');
console.log('='.repeat(80));
