#!/usr/bin/env node
/**
 * 修复dosilicon品牌中specialty-memory分类的编造型号
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 修复dosilicon的specialty-memory分类
function fixSpecialtyMemory() {
  console.log('========================================');
  console.log('Fix DOSILICON Specialty Memory Fake Parts');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'dosilicon', 'products.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  // 查找specialty-memory分类
  const specialtyCategory = data.categories.find(cat => cat.id === 'specialty-memory');
  
  if (specialtyCategory && specialtyCategory.products) {
    console.log(`\nCategory: ${specialtyCategory.name}`);
    
    specialtyCategory.products.forEach((product, pIdx) => {
      if (product.partNumber && product.partNumber.match(/^SPECIALTYMEMORY-\d+$/i)) {
        console.log(`  - [${pIdx}] "${product.partNumber}" -> "DATA_PENDING"`);
        
        product.partNumber = 'DATA_PENDING';
        product.name = `${specialtyCategory.name} (Data Pending)`;
        product.shortDescription = '[Data Pending] Official product information to be added from manufacturer datasheet.';
        product.descriptionParagraphs = [
          '[Data Pending] Product description to be added from official manufacturer documentation.',
          '[Data Pending] Technical specifications to be verified against official datasheet.',
          '[Data Pending] Application information to be confirmed with manufacturer.'
        ];
        product.specifications = {
          'Status': 'Data pending - to be updated from official source'
        };
        
        if (product.alternativeParts) {
          product.alternativeParts = [];
        }
        
        if (product.companionParts) {
          product.companionParts = [];
        }
        
        fixCount++;
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Fixed ${fixCount} fake part numbers`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake part numbers found');
  }
  
  return fixCount;
}

fixSpecialtyMemory();
