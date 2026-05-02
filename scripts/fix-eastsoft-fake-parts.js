#!/usr/bin/env node
/**
 * 修复eastsoft品牌中编造的产品型号和FAQ引用
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 修复eastsoft的products.json
function fixEastsoftProducts() {
  console.log('========================================');
  console.log('Fix EASTSOFT Fake Part Numbers and FAQs');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'eastsoft', 'products.json');
  
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
          // 修复FAQ中引用编造型号的问题
          if (product.faqs && Array.isArray(product.faqs)) {
            product.faqs.forEach((faq, fIdx) => {
              // 检查question是否包含编造型号引用
              if (faq.question && faq.question.match(/(PLCCHIPS|MICROCONTROLLERS|RFTRANSCEIVERS|SYSTEMSOLUTIONS)-\d+/i)) {
                console.log(`  - [${pIdx}].faqs[${fIdx}] question: "${faq.question.substring(0, 50)}..." -> fixed`);
                
                // 替换question中的编造型号引用
                faq.question = faq.question.replace(/PLCCHIPS-\d+/gi, 'this product')
                                           .replace(/MICROCONTROLLERS-\d+/gi, 'this product')
                                           .replace(/RFTRANSCEIVERS-\d+/gi, 'this product')
                                           .replace(/SYSTEMSOLUTIONS-\d+/gi, 'this product');
                
                // 同时更新answer和decisionGuide
                if (faq.answer) {
                  faq.answer = faq.answer.replace(/PLCCHIPS-\d+/gi, 'this product')
                                         .replace(/MICROCONTROLLERS-\d+/gi, 'this product')
                                         .replace(/RFTRANSCEIVERS-\d+/gi, 'this product')
                                         .replace(/SYSTEMSOLUTIONS-\d+/gi, 'this product');
                }
                
                fixCount++;
              }
            });
          }
          
          // 修复FAE Review中的编造内容
          if (product.faeReview && product.faeReview.content) {
            if (product.faeReview.content.includes('Based on extensive field experience')) {
              console.log(`  - [${pIdx}] faeReview: fixed fabricated content`);
              product.faeReview.content = '[Data Pending] FAE review to be added based on actual product evaluation and application experience.';
              product.faeReview.highlight = '[Data Pending]';
              fixCount++;
            }
          }
        });
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Fixed ${fixCount} items`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake data found');
  }
  
  return fixCount;
}

fixEastsoftProducts();
