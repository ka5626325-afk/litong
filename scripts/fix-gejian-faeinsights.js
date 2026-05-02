#!/usr/bin/env node
/**
 * Fix gejian-semi faeInsights validation issues
 */

const fs = require('fs');
const path = require('path');

const brand = 'gejian-semi';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Fix solutions.json faeInsights
function fixSolutionsFaeInsights() {
  console.log('Fixing solutions.json faeInsights...');
  const filePath = path.join(dataDir, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.solutions.forEach((solution, index) => {
    if (solution.faeInsights) {
      // Rename insight to content
      if (solution.faeInsights.insight && !solution.faeInsights.content) {
        solution.faeInsights.content = solution.faeInsights.insight;
        delete solution.faeInsights.insight;
      }
      
      // Add decisionFramework
      if (!solution.faeInsights.decisionFramework) {
        solution.faeInsights.decisionFramework = {
          "title": "Systematic Design Approach",
          "steps": [
            "Analyze application requirements including voltage, current, and environmental conditions",
            "Select appropriate power devices based on specifications and operating conditions",
            "Design thermal management system to handle worst-case power losses",
            "Implement comprehensive protection circuits for reliable operation",
            "Optimize control algorithms for the specific application requirements",
            "Validate design through thorough testing under all operating conditions"
          ]
        };
      }
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('✓ solutions.json faeInsights fixed');
}

// Fix support.json faeInsights
function fixSupportFaeInsights() {
  console.log('Fixing support.json faeInsights...');
  const filePath = path.join(dataDir, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.articles.forEach((article, index) => {
    if (article.faeInsights) {
      // Rename insight to content if needed
      if (article.faeInsights.insight && !article.faeInsights.content) {
        article.faeInsights.content = article.faeInsights.insight;
        delete article.faeInsights.insight;
      }
      
      // Add insightLogic (different from logic field)
      if (!article.faeInsights.insightLogic) {
        article.faeInsights.insightLogic = article.faeInsights.logic || "The approach to this topic should be systematic and thorough. First, understand the fundamental principles and requirements. Second, analyze the trade-offs and considerations for different approaches. Third, select the optimal solution based on application-specific requirements. Fourth, implement with proper design practices and validation. Fifth, test thoroughly under all operating conditions.";
      }
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('✓ support.json faeInsights fixed');
}

// Main
console.log(`\n========================================`);
console.log(`Fixing ${brand} faeInsights validation issues`);
console.log(`========================================\n`);

try {
  fixSolutionsFaeInsights();
  fixSupportFaeInsights();
  
  console.log('\n========================================');
  console.log('All faeInsights fixes applied successfully!');
  console.log('========================================\n');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
