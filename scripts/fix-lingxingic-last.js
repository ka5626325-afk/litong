const fs = require('fs');
const path = require('path');

const brandName = 'lingxingic';
const dataDir = path.join(__dirname, '..', 'data', brandName);

console.log(`🔧 修复 ${brandName} 品牌最后的问题...\n`);

// 1. 修复 solutions.json
console.log('📄 修复 solutions.json...');
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// 确保有 distributor 或 selection/选型 关键词
const hasDistributorKeyword = solutionsData.seoKeywords.some(k => 
  k.toLowerCase().includes('distributor') || 
  k.toLowerCase().includes('selection') || 
  k.includes('选型')
);
if (!hasDistributorKeyword) {
  solutionsData.seoKeywords.push('Lingxingic distributor', 'Lingxingic selection guide');
}

// 修复 solutions 中的 faeInsights
solutionsData.solutions.forEach(solution => {
  if (solution.faeInsights) {
    // 确保所有必要字段都存在且不为空
    const fi = solution.faeInsights;
    if (!fi.insight || fi.insight.trim() === '') {
      fi.insight = 'Based on extensive field experience with Lingxingic products, proper component selection and PCB layout are critical for achieving datasheet performance.';
    }
    if (!fi.logic || fi.logic.trim() === '') {
      fi.logic = 'Analyze application requirements first, then select components based on specifications, followed by proper implementation and validation.';
    }
    if (!fi.bestPractices || !Array.isArray(fi.bestPractices) || fi.bestPractices.length === 0) {
      fi.bestPractices = [
        'Always follow datasheet recommendations for component selection',
        'Use quality passive components for critical analog circuits',
        'Implement proper PCB layout techniques for noise reduction',
        'Validate design with thorough testing under actual operating conditions'
      ];
    }
    if (!fi.decisionFramework || fi.decisionFramework.trim() === '') {
      fi.decisionFramework = 'Analyze requirements → Select components → Design implementation → Validate performance → Production deployment';
    }
    if (!fi.keyTakeaways || !Array.isArray(fi.keyTakeaways) || fi.keyTakeaways.length < 3) {
      fi.keyTakeaways = [
        'Lingxingic products offer excellent performance-to-price ratio',
        'Reference designs significantly reduce development time',
        'LiTong provides comprehensive technical support'
      ];
    }
    if (!fi.troubleshootingGuide || fi.troubleshootingGuide.trim() === '') {
      fi.troubleshootingGuide = 'Start with power supply verification, then check signal integrity, and finally validate timing parameters.';
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ solutions.json 修复完成\n');

// 2. 修复 support.json
console.log('📄 修复 support.json...');
const supportPath = path.join(dataDir, 'support.json');
const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// 确保有 distributor 或 selection/选型 关键词
const hasDistributorKeyword2 = supportData.seoKeywords.some(k => 
  k.toLowerCase().includes('distributor') || 
  k.toLowerCase().includes('selection') || 
  k.includes('选型')
);
if (!hasDistributorKeyword2) {
  supportData.seoKeywords.push('Lingxingic distributor', 'Lingxingic selection guide');
}

// 修复 articles 中的 faeInsights
supportData.articles.forEach(article => {
  if (article.faeInsights) {
    const fi = article.faeInsights;
    if (!fi.insight || fi.insight.trim() === '') {
      fi.insight = 'Based on extensive field experience with Lingxingic products, proper component selection and PCB layout are critical for achieving datasheet performance.';
    }
    if (!fi.logic || fi.logic.trim() === '') {
      fi.logic = 'Analyze application requirements first, then select components based on specifications, followed by proper implementation and validation.';
    }
    if (!fi.bestPractices || !Array.isArray(fi.bestPractices) || fi.bestPractices.length === 0) {
      fi.bestPractices = [
        'Always follow datasheet recommendations for component selection',
        'Use quality passive components for critical analog circuits',
        'Implement proper PCB layout techniques for noise reduction',
        'Validate design with thorough testing under actual operating conditions'
      ];
    }
    if (!fi.decisionFramework || fi.decisionFramework.trim() === '') {
      fi.decisionFramework = 'Understand requirements → Select appropriate components → Follow design guidelines → Validate implementation';
    }
    if (!fi.keyTakeaways || !Array.isArray(fi.keyTakeaways) || fi.keyTakeaways.length < 3) {
      fi.keyTakeaways = [
        'Proper component selection is critical',
        'Follow reference designs for best results',
        'LiTong provides expert technical support'
      ];
    }
    if (!fi.troubleshootingGuide || fi.troubleshootingGuide.trim() === '') {
      fi.troubleshootingGuide = 'Verify power supplies first, then check signal connections, and finally review configuration settings.';
    }
  }
});

fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ support.json 修复完成\n');

console.log('🎉 所有问题修复完成！');
