#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bpsemi');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

products.categories.forEach(cat => {
  // Fix selectionGuideLink
  if (!cat.selectionGuideLink || typeof cat.selectionGuideLink !== 'object') {
    cat.selectionGuideLink = {
      text: `View ${cat.name} Selection Guide`,
      url: `/bpsemi/support/${cat.slug}-selection-guide.html`
    };
  }
  
  // Fix longDescription - add distributor keywords
  if (cat.longDescription && !cat.longDescription.includes('distributor') && !cat.longDescription.includes('选型')) {
    cat.longDescription += ` Complete ${cat.name} solutions from BPSemi with technical support from BeiLuo Electronics, your authorized distributor.`;
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✓ Fixed products.json');

// Fix solutions.json - faeInsights
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(sol => {
  if (sol.faeInsights) {
    // Rename insight to content if needed
    if (!sol.faeInsights.content && sol.faeInsights.insight) {
      sol.faeInsights.content = sol.faeInsights.insight;
    }
    
    // Ensure keyTakeaways exists
    if (!sol.faeInsights.keyTakeaways && sol.faeInsights.bestPractices) {
      sol.faeInsights.keyTakeaways = sol.faeInsights.bestPractices.slice(0, 5);
    }
    
    // Ensure decisionFramework.steps exists
    if (sol.faeInsights.decisionFramework && !sol.faeInsights.decisionFramework.steps) {
      sol.faeInsights.decisionFramework.steps = [
        "评估应用需求，包括功率等级、调光需求和热约束条件",
        "根据拓扑结构和功能需求选择合适的BPSemi驱动器系列",
        "遵循参考设计和PCB布局指南实现最佳性能",
        "在最恶劣条件下测试，包括最高环境温度和最小调光"
      ];
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✓ Fixed solutions.json');

console.log('\n✅ BPSemi brand data fixes completed!');
