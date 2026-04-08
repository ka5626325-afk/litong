const fs = require('fs');
const path = require('path');

const supportPath = path.join(__dirname, '..', 'data', 'aowei', 'support.json');

console.log('Reading support.json...');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix faeInsights content - expand to 200+ characters
const article = support.articles[0];
article.faeInsights.content = "Understanding the relationship between capacitance, voltage, and ESR is fundamental to successful supercapacitor selection. Always design with margin for temperature effects and aging. Consider both energy density and power density requirements for your specific application.";

// Fix customerCases - change result to feedback
article.customerCases[0] = {
  customer: "Industrial Equipment Manufacturer",
  industry: "Industrial Automation",
  challenge: "Needed to understand supercapacitor technology for new UPS product line",
  solution: "Comprehensive training on supercapacitor basics and hands-on evaluation of Aowei products",
  feedback: "The technical guide and FAE support were excellent. We successfully launched our UPS product line with supercapacitor backup power."
};

// Fix relatedArticles - add 2 more articles
article.relatedArticles = [
  {
    id: "module-system-design",
    title: "Supercapacitor Module System Design Guide",
    summary: "Detailed guide for designing systems using Aowei supercapacitor modules"
  },
  {
    id: "automotive-applications",
    title: "Supercapacitors in Automotive Applications",
    summary: "How supercapacitors are used in start-stop systems, regenerative braking, and power backup"
  },
  {
    id: "lifetime-analysis",
    title: "Supercapacitor Lifetime and Reliability Analysis",
    summary: "Understanding factors affecting supercapacitor lifetime and methods for reliability prediction"
  }
];

// Save the file
fs.writeFileSync(supportPath, JSON.stringify(support, null, 2), 'utf8');
console.log('✅ support.json fixed successfully!');
console.log('  - faeInsights content expanded to 200+ characters');
console.log('  - customerCases fixed with feedback field');
console.log('  - relatedArticles expanded to 3 articles');
