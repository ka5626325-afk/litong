const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hisilicon');

// Fix products.json - add selectionGuideLink
const productsFile = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

products.categories.forEach(cat => {
  // Fix selectionGuideLink
  if (cat.selectionGuide) {
    cat.selectionGuide.articleLink = `/hisilicon/support/${cat.id}.html`;
  }
});

fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
console.log('Fixed products.json selectionGuideLink');

// Fix support.json - add SEO keywords with distributor
const supportFile = path.join(dataDir, 'support.json');
let support = JSON.parse(fs.readFileSync(supportFile, 'utf8'));

// Fix SEO keywords
support.seoKeywords = ["HiSilicon support", "technical documentation", "selection guide", "FAE support", "HiSilicon distributor", "HiSilicon selection"];

// Fix article faeInsights - add insightLogic
support.articles.forEach(article => {
  if (article.faeInsights && !article.faeInsights.logic) {
    article.faeInsights.logic = "This guide is based on extensive field experience helping customers select the right HiSilicon products. The recommendations consider real-world performance, integration challenges, and long-term support requirements to ensure successful deployments.";
  }
});

fs.writeFileSync(supportFile, JSON.stringify(support, null, 2));
console.log('Fixed support.json');

console.log('\nAll quick fixes applied!');
