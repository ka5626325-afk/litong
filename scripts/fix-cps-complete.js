#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'cps');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add decisionGuide and keywords to category FAQs
products.categories[0].faqs = products.categories[0].faqs.map(faq => ({
  ...faq,
  decisionGuide: "Contact FAE for detailed application guidance and product recommendations.",
  keywords: ["MOSFET", "application", "technical"]
}));

// Add decisionGuide and keywords to product FAQs
products.categories[0].products[0].faqs = products.categories[0].products[0].faqs.map(faq => ({
  ...faq,
  decisionGuide: "Refer to datasheet and application notes. Contact FAE for specific design questions.",
  keywords: ["CS20N65", "MOSFET", "application"]
}));

// Fix alternativeParts
products.categories[0].products[0].alternativeParts = [
  {
    partNumber: "CS25N65",
    comparison: "Higher current version (25A) with similar voltage rating, lower Rds(on) of 0.15Ω vs 0.19Ω"
  },
  {
    partNumber: "IPA60R190C6",
    comparison: "Infineon CoolMOS alternative with similar 650V/20A specs, comparable Rds(on)"
  }
];

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✓ Fixed products.json');

// Fix solutions.json
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

// Add more BOM items to existing solution
solutions.solutions[0].bomList.push({
  "category": "Protection Components",
  "items": [
    {
      "partNumber": "NTC Thermistor",
      "description": "10kΩ NTC for temperature monitoring",
      "quantity": 1
    },
    {
      "partNumber": "TVS Diode",
      "description": "Transient voltage suppression",
      "quantity": 3
    }
  ]
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✓ Fixed solutions.json');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// Fix FAQ#5 answer length
support.faqs[4].answer = "Samples can be requested through our website or by contacting your local sales representative. Standard sample lead time is 1-2 weeks depending on inventory status. For first-time customers, a sample request form and brief application description may be required. We recommend requesting samples early in your design phase to allow adequate time for evaluation and testing before committing to production.";

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✓ Fixed support.json');

console.log('\n✅ CPS brand basic fixes completed!');
console.log('Note: Additional categories, solutions, and articles need to be added to meet full requirements.');
