#!/usr/bin/env node
/**
 * 修复joulwatt products.json文件结构
 */

const fs = require('fs');
const path = require('path');

// 读取原始文件
const productsPath = path.join(__dirname, '..', 'data', 'joulwatt', 'products.json');
const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('Original categories count:', data.categories.length);

// 只保留有id和products的category
const validCategories = data.categories.filter(cat => {
  return cat && cat.id && cat.products && Array.isArray(cat.products);
});

console.log('Valid categories count:', validCategories.length);

// 显示每个有效分类的信息
validCategories.forEach((cat, i) => {
  console.log(`  ${i}: ${cat.id} - ${cat.products.length} products`);
});

// 更新categories数组
data.categories = validCategories;

// 写回文件
fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
console.log('\nFixed products.json saved.');
