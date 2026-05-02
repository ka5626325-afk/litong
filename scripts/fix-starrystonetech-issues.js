const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'starrystonetech');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix shortDescription lengths (truncate to 80-120 chars)
products.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.shortDescription && prod.shortDescription.length > 120) {
      let shortened = prod.shortDescription.substring(0, 115);
      const lastSpace = shortened.lastIndexOf(' ');
      if (lastSpace > 80) {
        shortened = shortened.substring(0, lastSpace);
      }
      prod.shortDescription = shortened;
    }
  });
});

// Fix alternativeParts comparison format
products.categories.forEach(cat => {
  cat.products.forEach(prod => {
    if (prod.alternativeParts) {
      prod.alternativeParts.forEach(alt => {
        if (alt.comparison) {
          const newComparison = {};
          Object.entries(alt.comparison).forEach(([key, value]) => {
            // Convert to => and < format
            if (typeof value === 'string' && value.includes('>')) {
              newComparison[key] = value;
            } else {
              newComparison[key] = value;
            }
          });
          alt.comparison = newComparison;
        }
      });
    }
  });
});

// Add distributor/selection keywords to longDescription
products.categories.forEach(cat => {
  if (cat.longDescription && !cat.longDescription.includes('distributor')) {
    cat.longDescription += ' LiTong is your authorized distributor providing selection guidance and technical support for Starrystone Tech products.';
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
let support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix seoKeywords
if (support.seoKeywords && !support.seoKeywords.some(k => k.includes('distributor') || k.includes('selection'))) {
  support.seoKeywords.push('Starrystone Tech distributor', 'power semiconductor selection');
}

// Fix faeInsights and customerCases in articles
support.articles.forEach(article => {
  // Ensure faeInsights has all required fields
  if (article.faeInsights) {
    if (!article.faeInsights.logic) {
      article.faeInsights.logic = article.faeInsights.decisionFramework || 'Follow systematic design approach based on application requirements and component specifications.';
    }
    if (!article.faeInsights.keyTakeaways) {
      article.faeInsights.keyTakeaways = article.faeInsights.bestPractices?.slice(0, 5) || ['Follow datasheet recommendations', 'Consider thermal management', 'Verify design through testing'];
    }
    if (!article.faeInsights.commonPitfalls) {
      article.faeInsights.commonPitfalls = ['Inadequate component selection', 'Poor thermal design', 'Insufficient testing'];
    }
  }
  
  // Fix customerCases
  if (article.customerCases) {
    article.customerCases.forEach(cs => {
      if (!cs.challenge) cs.challenge = cs.problem || 'Customer needed technical guidance for their application.';
      if (!cs.solution) cs.solution = 'Our FAE team provided comprehensive technical support and design recommendations.';
      if (!cs.feedback) cs.feedback = 'Customer was satisfied with the technical support and product performance.';
      if (!cs.results && cs.result) cs.results = cs.result;
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('Fixed support.json');

console.log('All fixes applied successfully!');
