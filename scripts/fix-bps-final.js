#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bps');

// Fix solutions.json - faeInsights structure
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
        "根据拓扑结构和功能需求选择合适的BPS驱动器系列",
        "遵循参考设计和PCB布局指南实现最佳性能",
        "在最恶劣条件下测试，包括最高环境温度和最小调光"
      ];
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✓ Fixed solutions.json faeInsights structure');

// Fix support.json - faeInsights structure
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  if (article.faeInsights) {
    // Rename insight to content if needed
    if (!article.faeInsights.content && article.faeInsights.insight) {
      article.faeInsights.content = article.faeInsights.insight;
    }
    
    // Ensure keyTakeaways exists
    if (!article.faeInsights.keyTakeaways && article.faeInsights.practicalTips) {
      article.faeInsights.keyTakeaways = article.faeInsights.practicalTips.slice(0, 5);
    }
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✓ Fixed support.json faeInsights structure');

console.log('\n✅ BPS brand final fixes completed!');
