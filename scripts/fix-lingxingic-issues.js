const fs = require('fs');
const path = require('path');

const brandName = 'lingxingic';
const dataDir = path.join(__dirname, '..', 'data', brandName);

console.log(`🔧 开始修复 ${brandName} 品牌数据...\n`);

// 1. 修复 brand.json
console.log('📄 修复 brand.json...');
const brandPath = path.join(dataDir, 'brand.json');
const brandData = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

// 添加缺失的SEO字段
if (!brandData.seoMetaTitle) {
  brandData.seoMetaTitle = brandData.seoTitle || 'Lingxingic Distributor - Analog & Mixed-Signal ICs';
}
if (!brandData.seoMetaDescription) {
  brandData.seoMetaDescription = brandData.seoDescription || 'LiTong is an authorized distributor of Lingxingic Semiconductor. We supply data converters, interface ICs, power management, and amplifiers.';
}

fs.writeFileSync(brandPath, JSON.stringify(brandData, null, 2));
console.log('✅ brand.json 修复完成\n');

// 2. 修复 products.json
console.log('📄 修复 products.json...');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 为每个产品添加 description 字段
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (!product.description) {
      product.description = product.shortDescription || product.name;
    }
  });

  // 添加缺失的 seoKeywords
  if (!category.seoKeywords) {
    category.seoKeywords = [
      `Lingxingic ${category.name}`,
      `${category.name} distributor`,
      `Lingxingic ${category.name} selection`,
      'LiTong distributor'
    ];
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ products.json 修复完成\n');

// 3. 修复 solutions.json
console.log('📄 修复 solutions.json...');
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutionsData.solutions.forEach(solution => {
  // 添加 name 字段
  if (!solution.name) {
    solution.name = solution.title;
  }

  // 修复 customerCases
  if (solution.customerCases) {
    solution.customerCases.forEach(cs => {
      if (!cs.customerName) cs.customerName = cs.customer || 'Customer';
      if (!cs.application) cs.application = cs.industry || 'Industrial Application';
      if (!cs.results) cs.results = cs.result || 'Successfully deployed with improved performance.';
      if (!cs.products) cs.products = [];
    });
  }

  // 修复 faeInsights
  if (solution.faeInsights) {
    if (!solution.faeInsights.author) {
      solution.faeInsights.author = 'LiTong FAE Team';
    }
    if (!solution.faeInsights.insight) {
      solution.faeInsights.insight = solution.faeInsights.keyTakeaways ? solution.faeInsights.keyTakeaways.join(' ') : 'Professional application guidance';
    }
    if (!solution.faeInsights.logic) {
      solution.faeInsights.logic = solution.faeInsights.keyConsiderations ? solution.faeInsights.keyConsiderations.join(' ') : 'Technical analysis and recommendations';
    }
    if (!solution.faeInsights.bestPractices) {
      solution.faeInsights.bestPractices = solution.faeInsights.optimizationTips || ['Follow datasheet recommendations'];
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json 修复完成\n');

// 4. 修复 support.json
console.log('📄 修复 support.json...');
const supportPath = path.join(dataDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

const currentDate = new Date().toISOString().split('T')[0];

supportData.articles.forEach((article, index) => {
  // 添加 tags
  if (!article.tags) {
    article.tags = [article.category, 'Lingxingic', 'Technical Article'];
  }

  // 添加 date
  if (!article.date) {
    article.date = currentDate;
  }

  // 添加 publishDate
  if (!article.publishDate) {
    article.publishDate = currentDate;
  }

  // 添加 author
  if (!article.author) {
    article.author = {
      name: 'LiTong FAE Team',
      title: 'Field Application Engineer',
      department: 'Technical Support'
    };
  }

  // 添加 relatedArticles
  if (!article.relatedArticles) {
    article.relatedArticles = supportData.articles
      .filter((a, i) => i !== index)
      .slice(0, 2)
      .map(a => ({
        id: a.id,
        title: a.title,
        slug: a.slug
      }));
  }

  // 添加 faeInsights
  if (!article.faeInsights) {
    article.faeInsights = {
      keyTakeaways: ['Proper component selection is critical for system performance', 'Follow reference designs for optimal results'],
      commonPitfalls: ['Inadequate power supply decoupling', 'Poor PCB layout practices'],
      optimizationTips: ['Use quality components', 'Follow thermal guidelines']
    };
  }

  // 添加 customerCases
  if (!article.customerCases) {
    article.customerCases = [{
      customerName: 'Industrial Automation Co.',
      industry: 'Industrial',
      challenge: 'Needed reliable solution for harsh environment',
      solution: 'Implemented Lingxingic components with proper protection',
      result: 'Achieved 99.9% uptime in field deployment',
      feedback: 'Excellent product quality and technical support'
    }];
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ support.json 修复完成\n');

console.log('🎉 所有文件修复完成！');
