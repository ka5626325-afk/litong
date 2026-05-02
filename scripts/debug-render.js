#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const data = require('../data/silan/products.json');
const category = data.categories[0];
const parameters = category.parameters || [];

// 参数映射
const paramMapping = {};
parameters.forEach(function(param) {
  var fieldKey = param.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (fieldKey === 'voltagerating') fieldKey = 'voltage';
  if (fieldKey === 'currentrating') fieldKey = 'current';
  if (fieldKey === 'temperaturerange') fieldKey = 'temperature';
  paramMapping[param] = fieldKey;
});

// 为每个产品预计算参数值
const productsWithParamValues = category.products.map(function(product) {
  var paramValues = {};
  parameters.forEach(function(param) {
    var fieldKey = paramMapping[param];
    paramValues[param] = product[fieldKey] || '-';
  });
  return Object.assign({}, product, { paramValues: paramValues });
});

console.log('Products with paramValues:');
productsWithParamValues.forEach((p, i) => {
  console.log(i+1, p.partNumber, 'paramValues:', p.paramValues);
});

// 测试 EJS 渲染
const templatePath = path.join(__dirname, '../templates/brands/product-category.html');
const template = fs.readFileSync(templatePath, 'utf8');

// 提取表格部分的模板
const tableMatch = template.match(/<tbody>[\s\S]*?<\/tbody>/);
if (tableMatch) {
  console.log('\nTable template found');
}
