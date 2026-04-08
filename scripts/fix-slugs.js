#!/usr/bin/env node

/**
 * 修复产品 slug 缺失
 */

const fs = require('fs');
const path = require('path');

const brands = ['byd', 'cree', 'crmicro', 'crrc', 'fuji', 'infineon', 'ixys', 'mitsubishi', 'nce', 'silan', 'starpower'];

brands.forEach(brand => {
  const filePath = path.join(__dirname, '..', 'data', brand, 'products.json');
  if (!fs.existsSync(filePath)) return;
  
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let modified = false;
  
  if (data.categories) {
    data.categories.forEach(category => {
      if (category.products) {
        category.products.forEach(product => {
          if (!product.slug && product.partNumber) {
            product.slug = product.partNumber.toLowerCase().replace(/[^a-z0-9]/g, '-');
            modified = true;
          }
        });
      }
    });
  }
  
  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ Fixed slugs for ${brand}`);
  } else {
    console.log(`⚠️ No changes for ${brand}`);
  }
});

console.log('\n🎉 Done!');
