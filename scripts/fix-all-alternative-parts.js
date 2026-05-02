#!/usr/bin/env node

/**
 * 批量修复所有替代料号格式问题
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'aishi', 'products.json');
let content = fs.readFileSync(productsFile, 'utf8');

// 定义所有需要修复的替换规则
const replacements = [
  // RS-220uF-100V 的替代料号
  {
    search: '"Voltage": "100V = 100V (same)",\n                "Size": "8mm < 10mm (smaller)"',
    replace: '"Voltage Rating": "100V = 100V (same)",\n                "Ripple Current": "0.55A < 0.7A (lower)",\n                "Size": "8mm < 10mm (smaller)"'
  },
  {
    search: '"Voltage": "100V = 100V (same)",\n                "Temperature": "105C > 85C (higher)"',
    replace: '"Voltage Rating": "100V = 100V (same)",\n                "Ripple Current": "0.85A > 0.7A (higher)",\n                "Temperature": "105C > 85C (higher)"'
  },
  // RS-100uF-250V 的替代料号
  {
    search: '"Voltage": "250V = 250V (same)",\n                "Size": "10mm < 12.5mm (smaller)"',
    replace: '"Voltage Rating": "250V = 250V (same)",\n                "Ripple Current": "0.4A < 0.5A (lower)",\n                "Size": "10mm < 12.5mm (smaller)"'
  },
  {
    search: '"Voltage": "250V = 250V (same)",\n                "Temperature": "105C > 85C (higher)"',
    replace: '"Voltage Rating": "250V = 250V (same)",\n                "Ripple Current": "0.6A > 0.5A (higher)",\n                "Temperature": "105C > 85C (higher)"'
  },
  // SN-22000uF-63V 的替代料号
  {
    search: '"Voltage": "63V = 63V (same)",\n                "Size": "30mm < 35mm (smaller)"',
    replace: '"Voltage Rating": "63V = 63V (same)",\n                "Ripple Current": "6.5A < 8.5A (lower)",\n                "Size": "30mm < 35mm (smaller)"'
  },
  {
    search: '"Voltage": "63V = 63V (same)",\n                "Temperature": "105C > 85C (higher)"',
    replace: '"Voltage Rating": "63V = 63V (same)",\n                "Ripple Current": "9.5A > 8.5A (higher)",\n                "Temperature": "105C > 85C (higher)"'
  },
  // SN-2200uF-200V 的替代料号
  {
    search: '"Voltage": "200V = 200V (same)",\n                "Size": "25mm < 30mm (smaller)"',
    replace: '"Voltage Rating": "200V = 200V (same)",\n                "Ripple Current": "3.5A < 4.5A (lower)",\n                "Size": "25mm < 30mm (smaller)"'
  },
  {
    search: '"Voltage": "200V = 200V (same)",\n                "Temperature": "105C > 85C (higher)"',
    replace: '"Voltage Rating": "200V = 200V (same)",\n                "Ripple Current": "5.0A > 4.5A (higher)",\n                "Temperature": "105C > 85C (higher)"'
  },
  // ST-220000uF-50V 的替代料号
  {
    search: '"Voltage": "50V = 50V (same)",\n                "Size": "63mm < 76mm (smaller)"',
    replace: '"Voltage Rating": "50V = 50V (same)",\n                "Ripple Current": "35A < 45A (lower)",\n                "Size": "63mm < 76mm (smaller)"'
  },
  {
    search: '"Voltage": "50V = 50V (same)",\n                "Temperature": "105C > 85C (higher)"',
    replace: '"Voltage Rating": "50V = 50V (same)",\n                "Ripple Current": "50A > 45A (higher)",\n                "Temperature": "105C > 85C (higher)"'
  },
  // ST-3300uF-450V 的替代料号
  {
    search: '"Voltage": "450V = 450V (same)",\n                "Size": "45mm < 51mm (smaller)"',
    replace: '"Voltage Rating": "450V = 450V (same)",\n                "Ripple Current": "7.5A < 10A (lower)",\n                "Size": "45mm < 51mm (smaller)"'
  },
  {
    search: '"Voltage": "450V = 450V (same)",\n                "Temperature": "105C > 85C (higher)"',
    replace: '"Voltage Rating": "450V = 450V (same)",\n                "Ripple Current": "11A > 10A (higher)",\n                "Temperature": "105C > 85C (higher)"'
  },
  // SP-220uF-35V 的替代料号
  {
    search: '"Voltage": "35V = 35V (same)",\n                "Size": "5mm < 6.3mm (smaller)"',
    replace: '"Voltage Rating": "35V = 35V (same)",\n                "Ripple Current": "4A < 5A (lower)",\n                "Size": "5mm < 6.3mm (smaller)"'
  },
  {
    search: '"Voltage": "35V = 35V (same)",\n                "ESR": "200mOhm > 12mOhm (much higher)"',
    replace: '"Voltage Rating": "35V = 35V (same)",\n                "ESR": "200mOhm > 12mOhm (much higher)",\n                "Ripple Current": "0.5A < 5A (much lower)"'
  },
  // SP-68uF-50V 的替代料号
  {
    search: '"Voltage": "50V = 50V (same)",\n                "Size": "4mm < 5mm (smaller)"',
    replace: '"Voltage Rating": "50V = 50V (same)",\n                "Ripple Current": "2.8A < 3.5A (lower)",\n                "Size": "4mm < 5mm (smaller)"'
  },
  {
    search: '"Voltage": "50V = 50V (same)",\n                "ESR": "5mOhm < 18mOhm (lower)"',
    replace: '"Voltage Rating": "50V = 50V (same)",\n                "ESR": "5mOhm < 18mOhm (lower)",\n                "Ripple Current": "5A > 3.5A (higher)"'
  }
];

// 执行替换
let count = 0;
for (const { search, replace } of replacements) {
  if (content.includes(search)) {
    content = content.replace(search, replace);
    count++;
    console.log(`✅ 修复: ${search.substring(0, 50)}...`);
  } else {
    console.log(`⚠️ 未找到: ${search.substring(0, 50)}...`);
  }
}

// 保存文件
fs.writeFileSync(productsFile, content, 'utf8');

console.log(`\n✅ 共修复 ${count} 处替代料号格式问题！`);
