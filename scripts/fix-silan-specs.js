#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'silan', 'products.json');

console.log('Reading file:', filePath);
let content = fs.readFileSync(filePath, 'utf8');

// 使用字符串替换而不是正则表达式
const targetStr = `,
          "specifications": {
            "Voltage Rating": "N/A",
            "Current Rating": "N/A",
            "Temperature Range": "N/A"
          }`;

let count = 0;
let newContent = content;

while (newContent.includes(targetStr)) {
  newContent = newContent.replace(targetStr, '');
  count++;
}

console.log(`Removed ${count} specifications blocks with N/A values`);

// 写回文件
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('File updated successfully');
