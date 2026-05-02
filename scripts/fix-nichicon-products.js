#!/usr/bin/env node
/**
 * 修复nichicon产品中的无意义descriptionParagraphs
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 生成有意义的产品描述
function generateProductDescription(partNumber, category) {
  return [
    `The ${partNumber} is a high-performance ${category} from Nichicon, designed to deliver exceptional reliability and performance in demanding applications. This capacitor features advanced electrolyte technology and high-purity aluminum foil construction for consistent electrical characteristics.`,
    `Key specifications include optimized capacitance values, low ESR characteristics, and high ripple current capability. The product operates reliably across a wide temperature range, making it suitable for industrial, automotive, and consumer electronics applications.`,
    `Manufactured in ISO-certified facilities, the ${partNumber} undergoes rigorous quality testing including capacitance, ESR, leakage current, and withstand voltage verification. Extended lifetime ratings ensure maintenance-free operation for years in continuous-duty applications.`
  ];
}

function fixNichicon() {
  console.log('========================================');
  console.log('Fix Nichicon Products');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'nichicon', 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log('❌ products.json not found');
    return;
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return;
  }
  
  let fixCount = 0;
  
  // 查找并修复ALUMINUMELECTROLYTIC-3和ALUMINUMELECTROLYTIC-4
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          if (product.partNumber === 'ALUMINUMELECTROLYTIC-3' || product.partNumber === 'ALUMINUMELECTROLYTIC-4') {
            console.log(`\nFound ${product.partNumber} in category[${cIdx}].products[${pIdx}]`);
            
            // 修复name
            const oldName = product.name;
            product.name = `Aluminum Electrolytic Capacitor ${product.partNumber}`;
            console.log(`  - name: "${oldName}" -> "${product.name}"`);
            
            // 修复shortDescription
            const oldShortDesc = product.shortDescription;
            product.shortDescription = `High-performance aluminum electrolytic capacitor ${product.partNumber} for industrial and automotive applications.`;
            console.log(`  - shortDescription: "${oldShortDesc}" -> "${product.shortDescription}"`);
            
            // 修复descriptionParagraphs
            const oldDesc = product.descriptionParagraphs;
            product.descriptionParagraphs = generateProductDescription(product.partNumber, category.name);
            console.log(`  - descriptionParagraphs: regenerated (${product.descriptionParagraphs.join(' ').length} chars)`);
            
            fixCount++;
          }
        });
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Fixed ${fixCount} products`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No issues found');
  }
}

fixNichicon();
