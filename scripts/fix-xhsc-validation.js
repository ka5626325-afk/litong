const fs = require('fs');
const path = require('path');

const brandName = 'xhsc';
const dataDir = path.join(__dirname, '..', 'data', brandName);

console.log(`🔧 开始修复 ${brandName} 品牌数据验证错误...\n`);

// 1. 修复 brand.json
console.log('📄 修复 brand.json...');
const brandPath = path.join(dataDir, 'brand.json');
const brandData = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

// 添加缺失的SEO字段
if (!brandData.seoMetaTitle) {
  brandData.seoMetaTitle = brandData.seoTitle || 'XHSC Distributor - MCU, Power Management & Motor Control ICs';
}
if (!brandData.seoMetaDescription) {
  brandData.seoMetaDescription = brandData.seoDescription || 'LiTong is an authorized distributor of XHSC Semiconductor. We supply ARM Cortex-M MCUs, power management ICs, motor control solutions, and interface devices.';
}

fs.writeFileSync(brandPath, JSON.stringify(brandData, null, 2));
console.log('✅ brand.json 修复完成\n');

// 2. 修复 products.json
console.log('📄 修复 products.json...');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 为每个产品添加 description 字段
productsData.categories.forEach(category => {
  category.products.forEach(product => {
    if (!product.description) {
      product.description = product.shortDescription || product.name;
    }
  });

  // 添加缺失的 seoKeywords
  if (!category.seoKeywords) {
    category.seoKeywords = [
      `XHSC ${category.name}`,
      `${category.name} distributor`,
      `XHSC ${category.name} selection`,
      'LiTong distributor'
    ];
  }
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✅ products.json 修复完成\n');

// 3. 修复 support.json - 需要修复JSON中的控制字符
console.log('📄 修复 support.json...');
const supportPath = path.join(dataDir, 'support.json');
let supportContent = fs.readFileSync(supportPath, 'utf8');

// 移除控制字符
supportContent = supportContent.replace(/[\x00-\x1F\x7F-\x9F]/g, '');

// 重新解析和写入
const supportData = JSON.parse(supportContent);
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ support.json 修复完成\n');

console.log('🎉 所有验证错误修复完成！');
