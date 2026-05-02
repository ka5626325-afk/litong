#!/usr/bin/env node
/**
 * Fix remaining ChipSea data issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'chipsea');

function fixProductsJson() {
  console.log('Fixing products.json remaining issues...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix CS1238 shortDescription (too long: 159 chars)
  data.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.partNumber === 'CS1238') {
        product.shortDescription = "CS1238 24-bit ADC with integrated temperature sensor, PGA up to 128x, ultra-low noise for precision measurement with compensation.";
        console.log('  Fixed CS1238 shortDescription');
      }
      if (product.partNumber === 'CS1237') {
        product.shortDescription = "CS1237 20-bit ADC with PGA up to 128x, cost-effective solution for consumer and industrial measurement applications.";
        console.log('  Fixed CS1237 shortDescription');
      }
    });
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

function fixSolutionsJson() {
  console.log('Fixing solutions.json remaining issues...');
  const filePath = path.join(DATA_DIR, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find solution 3 and fix faeInsights
  const solution3 = data.solutions.find(s => s.id === 'industrial-control-systems');
  if (solution3 && solution3.faeInsights) {
    console.log('  Fixing solution 3 faeInsights');
    // Add missing fields to faeInsights
    solution3.faeInsights.insight = solution3.faeInsights.insight || solution3.faeInsights.content;
    solution3.faeInsights.logic = solution3.faeInsights.logic || "Technical decision framework for industrial control system design.";
    solution3.faeInsights.commonPitfalls = solution3.faeInsights.commonPitfalls || [
      "Inadequate input protection",
      "Poor grounding and shielding",
      "Ignoring temperature effects"
    ];
    solution3.faeInsights.bestPractices = solution3.faeInsights.bestPractices || [
      "Use differential inputs for noise rejection",
      "Implement proper grounding scheme",
      "Add comprehensive input protection"
    ];
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json remaining issues...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find article 5 and fix customerCases
  const article5 = data.articles.find(a => a.id === 'analog-design-best-practices');
  if (article5 && article5.customerCases) {
    console.log('  Fixing article 5 customerCases');
    article5.customerCases[0] = {
      customer: "Precision Instrument Manufacturer",
      industry: "Test Equipment",
      application: "Precision voltage measurement system",
      challenge: "Experienced noise and drift issues in production units that weren't present in prototypes, affecting measurement accuracy.",
      diagnosis: "Inadequate grounding and decoupling in production PCB layout; prototypes used evaluation board layout with proper design.",
      solution: "Redesigned PCB following reference design grounding scheme; added proper decoupling capacitors; implemented guard rings around sensitive inputs.",
      results: "Eliminated noise issues; achieved specified accuracy; passed all environmental tests; reduced field failures to zero.",
      feedback: "Following the reference design and best practices from the start would have saved significant debugging time and rework costs."
    };
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

function main() {
  console.log('========================================');
  console.log('Fixing ChipSea Remaining Issues');
  console.log('========================================\n');
  
  try {
    fixProductsJson();
    fixSolutionsJson();
    fixSupportJson();
    
    console.log('========================================');
    console.log('All remaining issues fixed!');
    console.log('========================================');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
