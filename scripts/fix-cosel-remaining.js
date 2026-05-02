#!/usr/bin/env node
/**
 * Fix remaining Cosel data issues
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'cosel');

function fixProductsJson() {
  console.log('Fixing products.json remaining issues...');
  const filePath = path.join(DATA_DIR, 'products.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix DPF240-24S shortDescription (too short: 78 chars)
  data.categories.forEach(category => {
    category.products.forEach(product => {
      if (product.partNumber === 'DPF240-24S') {
        product.shortDescription = "240W DIN rail AC-DC power supply with 24V output for industrial control panels and automation systems";
        console.log('  Fixed DPF240-24S shortDescription');
      }
      if (product.partNumber === 'EAC-10-472') {
        product.shortDescription = "10A medical-grade EMI filter with high attenuation for AC-DC power supplies and medical equipment";
        console.log('  Fixed EAC-10-472 shortDescription');
      }
    });
  });
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ products.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json remaining issues...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Fix article 5 customerCases
  const article5 = data.articles.find(a => a.id === 'power-supply-derating-guide');
  if (article5 && article5.customerCases) {
    article5.customerCases[0] = {
      customer: "Telecommunications Infrastructure Provider",
      industry: "Telecommunications",
      application: "Remote base station power",
      challenge: "Power supplies failing prematurely in desert installations with ambient temperatures reaching 55°C",
      diagnosis: "Operating temperature exceeded ratings due to inadequate derating for high ambient conditions and insufficient cooling",
      solution: "Implemented 40% derating and added forced air cooling with temperature monitoring",
      results: "MTBF improved from 50,000 to 300,000 hours, zero field failures in 2 years",
      feedback: "Proper derating and cooling design eliminated field failures completely, significantly reducing maintenance costs"
    };
    console.log('  Fixed article 5 customerCases');
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

function main() {
  console.log('========================================');
  console.log('Fixing Cosel Remaining Issues');
  console.log('========================================\n');
  
  try {
    fixProductsJson();
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
