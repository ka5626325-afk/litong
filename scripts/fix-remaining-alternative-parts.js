#!/usr/bin/env node

/**
 * 修复剩余的替代料号格式问题
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'aishi', 'products.json');
let content = fs.readFileSync(productsFile, 'utf8');

// 定义所有需要修复的替换规则 - 针对剩余的问题
const replacements = [
  // RS-1000uF-25V 的替代料号
  {
    search: '"partNumber": "RS-680uF-25V"',
    replace: '"partNumber": "RS-680uF-25V"'
  },
  // 修复 Voltage 为 Voltage Rating
  {
    search: '"Voltage": "25V = 25V (same)",\n                "Size": "6.3mm < 8mm (smaller)"',
    replace: '"Voltage Rating": "25V = 25V (same)",\n                "Ripple Current": "1.8A < 2.4A (lower)",\n                "Size": "6.3mm < 8mm (smaller)"'
  },
  {
    search: '"Voltage": "25V = 25V (same)",\n                "Temperature": "105C > 85C (higher)"',
    replace: '"Voltage Rating": "25V = 25V (same)",\n                "Ripple Current": "2.8A > 2.4A (higher)",\n                "Temperature": "105C > 85C (higher)"'
  },
  // RS-470uF-50V
  {
    search: '"Voltage": "50V = 50V (same)",\n                "Size": "8mm < 10mm (smaller)"',
    replace: '"Voltage Rating": "50V = 50V (same)",\n                "Ripple Current": "0.9A < 1.2A (lower)",\n                "Size": "8mm < 10mm (smaller)"'
  },
  // RS-220uF-100V - 已修复
  // RS-100uF-250V - 已修复
  // SN-10000uF-63V - 已修复
  // SN-470uF-400V - 已修复
  // SN-22000uF-63V - 已修复
  // SN-2200uF-200V - 已修复
  // ST-47000uF-100V
  {
    search: '"Voltage": "100V = 100V (same)",\n                "Size": "45mm < 51mm (smaller)"',
    replace: '"Voltage Rating": "100V = 100V (same)",\n                "Ripple Current": "28A < 35A (lower)",\n                "Size": "45mm < 51mm (smaller)"'
  },
  // ST-10000uF-200V
  {
    search: '"Voltage": "200V = 200V (same)",\n                "Size": "40mm < 45mm (smaller)"',
    replace: '"Voltage Rating": "200V = 200V (same)",\n                "Ripple Current": "12A < 18A (lower)",\n                "Size": "40mm < 45mm (smaller)"'
  },
  // ST-220000uF-50V - 已修复
  // ST-3300uF-450V - 已修复
  // SP-470uF-16V
  {
    search: '"Voltage": "16V = 16V (same)",\n                "ESR": "10mOhm > 8mOhm (higher)"',
    replace: '"Voltage Rating": "16V = 16V (same)",\n                "ESR": "10mOhm > 8mOhm (higher)",\n                "Ripple Current": "6A < 8A (lower)"'
  },
  // SP-100uF-25V
  {
    search: '"Voltage": "25V = 25V (same)",\n                "Size": "5mm < 6.3mm (smaller)"',
    replace: '"Voltage Rating": "25V = 25V (same)",\n                "Ripple Current": "3.5A < 5A (lower)",\n                "Size": "5mm < 6.3mm (smaller)"'
  },
  // SP-220uF-35V
  {
    search: '"Voltage": "35V = 35V (same)",\n                "Size": "5mm < 6.3mm (smaller)"',
    replace: '"Voltage Rating": "35V = 35V (same)",\n                "Ripple Current": "4A < 5A (lower)",\n                "Size": "5mm < 6.3mm (smaller)"'
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
