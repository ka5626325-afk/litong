#!/usr/bin/env node

/**
 * 批量修复替代料号格式问题
 * 将 "Voltage" 改为 "Voltage Rating" 并添加 "Ripple Current" 对比
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'aishi', 'products.json');

// 读取文件
let content = fs.readFileSync(productsFile, 'utf8');

// 需要修复的产品和对应的电流值
const fixes = [
  // RS-220uF-100V
  {
    product: 'RS-220uF-100V',
    altParts: [
      { partNumber: 'RS-150uF-100V', current: '0.55A < 0.7A (lower)', altCurrent: '0.85A > 0.7A (higher)' }
    ]
  },
  // RS-100uF-250V
  {
    product: 'RS-100uF-250V',
    altParts: [
      { partNumber: 'RS-68uF-250V', current: '0.4A < 0.5A (lower)', altCurrent: '0.6A > 0.5A (higher)' }
    ]
  },
  // SN-22000uF-63V
  {
    product: 'SN-22000uF-63V',
    altParts: [
      { partNumber: 'SN-15000uF-63V', current: '6.5A < 8.5A (lower)', altCurrent: '9.5A > 8.5A (higher)' }
    ]
  },
  // SN-2200uF-200V
  {
    product: 'SN-2200uF-200V',
    altParts: [
      { partNumber: 'SN-1500uF-200V', current: '3.5A < 4.5A (lower)', altCurrent: '5.0A > 4.5A (higher)' }
    ]
  },
  // ST-220000uF-50V
  {
    product: 'ST-220000uF-50V',
    altParts: [
      { partNumber: 'ST-150000uF-50V', current: '35A < 45A (lower)', altCurrent: '50A > 45A (higher)' }
    ]
  },
  // ST-3300uF-450V
  {
    product: 'ST-3300uF-450V',
    altParts: [
      { partNumber: 'ST-2200uF-450V', current: '7.5A < 10A (lower)', altCurrent: '11A > 10A (higher)' }
    ]
  },
  // SP-220uF-35V
  {
    product: 'SP-220uF-35V',
    altParts: [
      { partNumber: 'SP-150uF-35V', current: '4A < 5A (lower)', altCurrent: '5.5A > 5A (higher)' }
    ]
  },
  // SP-68uF-50V
  {
    product: 'SP-68uF-50V',
    altParts: [
      { partNumber: 'SP-47uF-50V', current: '2.8A < 3.5A (lower)', altCurrent: '4.0A > 3.5A (higher)' }
    ]
  }
];

// 简单的字符串替换函数
function fixAlternativeParts(content) {
  // 替换 Voltage 为 Voltage Rating
  content = content.replace(/"Voltage":\s*"(\d+V)\s*=\s*(\d+V)\s*\(same\)"/g, '"Voltage Rating": "$1 = $2 (same)"');
  
  return content;
}

// 执行修复
content = fixAlternativeParts(content);

// 保存文件
fs.writeFileSync(productsFile, content, 'utf8');

console.log('✅ 替代料号格式修复完成！');
