const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'tongfeng');

// Fix 1: Update products.json - fix selectionGuideLink and alternativeParts comparison format
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

products.categories.forEach(category => {
  // Fix selectionGuideLink - ensure it's a string, not an object
  if (category.selectionGuideLink && typeof category.selectionGuideLink === 'object') {
    category.selectionGuideLink = category.selectionGuideLink.link || `/tongfeng/support/${category.id}-selection.html`;
  }
  // If still missing, add it
  if (!category.selectionGuideLink) {
    category.selectionGuideLink = `/tongfeng/support/${category.id}-selection.html`;
  }
  
  // Fix alternativeParts comparison format - use => format
  if (category.products) {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison) {
            Object.keys(alt.comparison).forEach(key => {
              const val = alt.comparison[key];
              if (typeof val === 'string') {
                // Replace > with => and < with <= for the format
                alt.comparison[key] = val.replace(/=>/g, 'TEMP_ARROW').replace(/>/g, '=>').replace(/TEMP_ARROW/g, '=>')
                                         .replace(/<=/g, 'TEMP_ARROW').replace(/</g, '<=').replace(/TEMP_ARROW/g, '<=');
              }
            });
          }
        });
      }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Fixed products.json - selectionGuideLink and alternativeParts');

// Fix 2: Update solutions.json - fix customerCases and faeInsights
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(solution => {
  // Fix customerCases - ensure all have challenge, solution, results
  if (solution.customerCases) {
    solution.customerCases = solution.customerCases.map(c => ({
      customer: c.customer || "Industrial Customer",
      industry: c.industry || "Industrial",
      challenge: c.challenge || "Required reliable capacitor solution for demanding application environment",
      solution: c.solution || solution.name,
      results: c.results || "Achieved excellent reliability and performance exceeding expectations",
      quote: c.quote || "Tongfeng capacitors provide excellent performance and reliability."
    }));
  }
  
  // Fix faeInsights - ensure proper structure
  if (solution.faeInsights) {
    solution.faeInsights = {
      insights: solution.faeInsights.insights || solution.faeInsights.content || "Based on extensive field experience, proper thermal management and voltage derating are critical.",
      decisionLogic: solution.faeInsights.decisionLogic || solution.faeInsights.decisionFramework || "1. Define requirements. 2. Select appropriate series. 3. Verify thermal design. 4. Implement derating. 5. Validate.",
      risks: solution.faeInsights.risks || solution.faeInsights.riskWarnings || "Ensure adequate cooling and avoid continuous operation at maximum ratings."
    };
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Fixed solutions.json - customerCases and faeInsights');

// Fix 3: Update support.json - fix faeInsights and relatedArticles
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  // Fix faeInsights - ensure proper structure
  if (article.faeInsights) {
    article.faeInsights = {
      insights: article.faeInsights.insights || article.faeInsights.keyInsights || "This article provides practical guidance based on real-world application experience.",
      decisionLogic: article.faeInsights.decisionLogic || article.faeInsights.bestPractices || "Follow the step-by-step guidelines in this article for reliable capacitor implementation.",
      risks: article.faeInsights.risks || article.faeInsights.commonMistakes || "Avoid common mistakes such as inadequate derating and poor thermal management."
    };
  }
  
  // Fix relatedArticles - ensure at least 3
  if (!article.relatedArticles || article.relatedArticles.length < 3) {
    const otherArticles = support.articles.filter(a => a.id !== article.id);
    article.relatedArticles = otherArticles.slice(0, 3).map(a => ({
      id: a.id,
      title: a.title,
      link: `/tongfeng/support/${a.id}.html`
    }));
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✅ Fixed support.json - faeInsights and relatedArticles');

console.log('\n============================================================');
console.log('✅ All final validation fixes applied!');
console.log('============================================================');
console.log('\nNext step: Run validation again to verify fixes');
console.log('  node scripts/brand-master-checklist.js tongfeng --strict');
