#!/usr/bin/env node
/**
 * Fix AutoChips Chinese characters issues
 */

const fs = require('fs');
const path = require('path');

const brand = 'autochips';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Fix 1: Remove Chinese characters from brand.json
const brandPath = path.join(dataDir, 'brand.json');
let brandData = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

// Remove Chinese characters from longDescription
brandData.longDescription = brandData.longDescription.replace(/\(杰发科技\)/g, '');

fs.writeFileSync(brandPath, JSON.stringify(brandData, null, 2));
console.log('✅ Removed Chinese characters from brand.json');

// Fix 2: Fix Chinese characters in products.json alternativeParts comparison
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const fixChineseInComparison = (comparison) => {
  const newComparison = {};
  for (const [key, value] of Object.entries(comparison)) {
    let newValue = value;
    // Replace Chinese with English
    newValue = newValue.replace(/相同/g, 'same');
    newValue = newValue.replace(/更少/g, 'less');
    newValue = newValue.replace(/更多/g, 'more');
    newValue = newValue.replace(/更低/g, 'lower');
    newValue = newValue.replace(/更高/g, 'higher');
    newValue = newValue.replace(/相似/g, 'similar');
    newValue = newValue.replace(/更窄/g, 'narrower');
    newValue = newValue.replace(/更宽/g, 'wider');
    newValue = newValue.replace(/旧架构/g, 'older architecture');
    newValue = newValue.replace(/不同工具链/g, 'different toolchain');
    newValue = newValue.replace(/集成度较低/g, 'less integrated');
    newValue = newValue.replace(/无安全功能/g, 'no safety features');
    newValue = newValue.replace(/无ASIL支持/g, 'no ASIL support');
    newValue = newValue.replace(/无LIN接口/g, 'no LIN interface');
    newValue = newValue.replace(/集成RF发射器/g, 'integrated RF transmitter');
    newValue = newValue.replace(/数字补偿引擎/g, 'digital compensation engine');
    newValue = newValue.replace(/医疗级精度/g, 'medical grade precision');
    newValue = newValue.replace(/非汽车级认证/g, 'not automotive qualified');
    newValue = newValue.replace(/包含降压稳压器/g, 'buck regulator included');
    newValue = newValue.replace(/相似功能集/g, 'similar feature set');
    newValue = newValue.replace(/更多通道但安全等级较低/g, 'more channels but lower safety level');
    newValue = newValue.replace(/成本更高/g, 'higher cost');
    newValue = newValue.replace(/成本高得多/g, 'much higher cost');
    newValue = newValue.replace(/成本相似/g, 'similar cost');
    newValue = newValue.replace(/成本更低/g, 'lower cost');
    newValue = newValue.replace(/不同生态系统/g, 'different ecosystem');
    
    newComparison[key] = newValue;
  }
  return newComparison;
};

let fixedCount = 0;
products.categories.forEach(cat => {
  cat.products.forEach(product => {
    if (product.alternativeParts && product.alternativeParts.length > 0) {
      product.alternativeParts.forEach(alt => {
        if (alt.comparison) {
          alt.comparison = fixChineseInComparison(alt.comparison);
        }
      });
      fixedCount++;
    }
  });
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log(`✅ Fixed Chinese characters in ${fixedCount} products' alternativeParts`);

console.log('\n🎉 All Chinese character issues fixed!');
