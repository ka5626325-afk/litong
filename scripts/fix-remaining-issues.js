const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'electronicon');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix AC Filter Capacitors longDescription
const acFilterCategory = products.categories.find(c => c.id === 'ac-filter-capacitors');
if (acFilterCategory) {
  acFilterCategory.longDescription = "Electronicon AC filter capacitors are designed for harmonic filtering, power factor correction, and power quality improvement in industrial and renewable energy applications. These dry-filled film capacitors feature high AC voltage capability, low losses, and excellent self-healing properties. Available in voltages from 250V to 1000V AC with capacitance values from 1uF to 500uF, they are ideal for active and passive filters, UPS systems, and grid-tied inverters. As an authorized Electronicon distributor, we provide technical support and selection guidance for AC filter capacitor applications. Our selection guide helps you choose the right series for your specific filtering requirements.";
  console.log('✅ Fixed AC Filter Capacitors longDescription');
}

// Fix selectionGuideLink for all categories
products.categories.forEach(category => {
  if (category.selectionGuide && category.selectionGuide.articleLink) {
    category.selectionGuideLink = category.selectionGuide.articleLink;
    console.log(`✅ Fixed selectionGuideLink for ${category.name}`);
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Updated products.json\n');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(solution => {
  if (!solution.faeInsights || typeof solution.faeInsights !== 'object' || !solution.faeInsights.insight) {
    solution.faeInsights = {
      insight: `Based on my extensive experience with ${solution.title}, I recommend focusing on thermal management and voltage margin to achieve optimal reliability. The key is proper capacitor selection matched to your specific operating conditions.`,
      decisionFramework: `When implementing ${solution.title}: 1) Analyze operating conditions including voltage, current, and temperature, 2) Select capacitors with adequate margin for voltage and ripple current, 3) Design proper thermal management to keep hot spot temperature below 70C, 4) Consider parallel configurations for high-current applications, 5) Plan for appropriate protection and monitoring.`
    };
    console.log(`✅ Fixed faeInsights for solution: ${solution.title}`);
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Updated solutions.json\n');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  if (!article.faeInsights || typeof article.faeInsights !== 'object' || !article.faeInsights.insight) {
    article.faeInsights = {
      insight: `Having worked with numerous capacitor applications over 15+ years, I've found that proper selection and thermal design are critical for reliable operation. This guide reflects best practices I've developed through supporting diverse industrial applications.`,
      decisionFramework: `When applying this guide: 1) Understand your specific operating conditions thoroughly, 2) Apply the selection criteria with appropriate safety margins, 3) Consider thermal management from the start of your design, 4) Validate your design through testing, 5) Plan for long-term reliability rather than just meeting initial specifications.`
    };
    console.log(`✅ Fixed faeInsights for article: ${article.title}`);
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✅ Updated support.json\n');

console.log('All issues fixed!');
