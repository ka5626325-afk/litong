#!/usr/bin/env node
/**
 * 修复ecec品牌中编造的产品型号
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 编造型号模式
const fakePatterns = [
  /^CRYSTALRESONATORS-\d+$/i,
  /^CRYSTALOSCILLATORS-\d+$/i,
  /^MEMSOSCILLATORS-\d+$/i,
  /^TIMINGMODULES-\d+$/i
];

// 检查是否为编造型号
function isFakePartNumber(partNumber) {
  if (!partNumber || typeof partNumber !== 'string') return true;
  return fakePatterns.some(pattern => pattern.test(partNumber));
}

// 修复ecec的products.json
function fixEcecProducts() {
  console.log('========================================');
  console.log('Fix ECEC Fake Part Numbers');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'ecec', 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log('❌ products.json not found');
    return 0;
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      console.log(`\nCategory: ${category.name}`);
      
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          if (isFakePartNumber(product.partNumber)) {
            console.log(`  - [${pIdx}] "${product.partNumber}" -> "DATA_PENDING"`);
            
            // 替换为DATA_PENDING
            product.partNumber = 'DATA_PENDING';
            product.name = `${category.name} (Data Pending)`;
            product.shortDescription = '[Data Pending] Official product information to be added from manufacturer datasheet.';
            product.descriptionParagraphs = [
              '[Data Pending] Product description to be added from official manufacturer documentation.',
              '[Data Pending] Technical specifications to be verified against official datasheet.',
              '[Data Pending] Application information to be confirmed with manufacturer.'
            ];
            product.specifications = {
              'Status': 'Data pending - to be updated from official source'
            };
            
            // 清理替代料号
            if (product.alternativeParts) {
              product.alternativeParts = [];
            }
            
            // 清理配套料号
            if (product.companionParts) {
              product.companionParts = [];
            }
            
            // 修复FAQ中的编造型号引用
            if (product.faqs && Array.isArray(product.faqs)) {
              product.faqs.forEach((faq, fIdx) => {
                if (faq.question) {
                  faq.question = faq.question.replace(/CRYSTALRESONATORS-\d+/gi, 'this product')
                                             .replace(/CRYSTALOSCILLATORS-\d+/gi, 'this product')
                                             .replace(/MEMSOSCILLATORS-\d+/gi, 'this product')
                                             .replace(/TIMINGMODULES-\d+/gi, 'this product');
                }
                if (faq.answer) {
                  faq.answer = faq.answer.replace(/CRYSTALRESONATORS-\d+/gi, 'this product')
                                         .replace(/CRYSTALOSCILLATORS-\d+/gi, 'this product')
                                         .replace(/MEMSOSCILLATORS-\d+/gi, 'this product')
                                         .replace(/TIMINGMODULES-\d+/gi, 'this product');
                }
              });
            }
            
            // 修复FAE Review
            if (product.faeReview && product.faeReview.content) {
              if (product.faeReview.content.includes('Based on extensive field experience') ||
                  product.faeReview.content.includes('Based on my extensive experience')) {
                product.faeReview.content = '[Data Pending] FAE review to be added based on actual product evaluation and application experience.';
                product.faeReview.highlight = '[Data Pending]';
              }
            }
            
            fixCount++;
          }
        });
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

fixEcecProducts();
