#!/usr/bin/env node

/**
 * 批量修复所有替代料号格式问题 - 版本2
 * 将旧的字符串格式转换为新的对象格式
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'aishi', 'products.json');
let content = fs.readFileSync(productsFile, 'utf8');

// 计数器
let fixCount = 0;

// 修复函数：将旧格式转换为新格式
function fixAlternativePart(oldPartNumber, newSpecs, newComparison, newLink) {
  // 查找旧格式的替代料号
  const oldPattern = new RegExp(
    `{\\s*"partNumber": "${oldPartNumber}",\\s*"brand": "Aishi",[^}]*"comparison": "([^"]*)"[^}]*}`,
    'g'
  );
  
  if (content.includes(`"partNumber": "${oldPartNumber}"`)) {
    // 检查是否已经是新格式
    const newFormatPattern = new RegExp(
      `"partNumber": "${oldPartNumber}"[\\s\\S]*?"specifications":`
    );
    
    if (!newFormatPattern.test(content)) {
      // 需要修复 - 构建新的替代料号对象
      const newPart = {
        partNumber: oldPartNumber,
        brand: "Aishi",
        specifications: newSpecs,
        comparison: newComparison,
        reason: "Alternative part for flexibility",
        useCase: "Compatible replacement option",
        link: newLink
      };
      
      // 查找并替换旧格式
      const oldObjPattern = new RegExp(
        `({\\s*"partNumber": "${oldPartNumber}",\\s*"brand": "Aishi"[\\s\\S]*?"stockStatus": "In Stock"\\s*})`
      );
      
      const newPartStr = JSON.stringify(newPart, null, 14).replace(/"/g, '"');
      
      if (oldObjPattern.test(content)) {
        content = content.replace(oldObjPattern, newPartStr);
        fixCount++;
        console.log(`✅ 修复: ${oldPartNumber}`);
        return true;
      }
    }
  }
  return false;
}

// 定义需要修复的替代料号
const partsToFix = [
  {
    partNumber: "RS-150uF-100V",
    specs: { "Capacitance": "150uF", "Voltage Rating": "100V DC" },
    comparison: { "Capacitance": "150uF < 220uF (lower)", "Voltage Rating": "100V = 100V (same)", "Ripple Current": "0.55A < 0.7A (lower)", "Size": "8mm < 10mm (smaller)" },
    link: "/aishi/products/radial-lead-capacitors/rs-150uf-100v.html"
  },
  {
    partNumber: "RH-220uF-100V",
    specs: { "Capacitance": "220uF", "Voltage Rating": "100V DC", "Temperature": "105C" },
    comparison: { "Capacitance": "220uF = 220uF (same)", "Voltage Rating": "100V = 100V (same)", "Ripple Current": "0.85A > 0.7A (higher)", "Temperature": "105C > 85C (higher)", "Lifetime": "5000h > 2000h (longer)" },
    link: "/aishi/products/radial-lead-capacitors/rh-220uf-100v.html"
  },
  {
    partNumber: "RS-68uF-250V",
    specs: { "Capacitance": "68uF", "Voltage Rating": "250V DC" },
    comparison: { "Capacitance": "68uF < 100uF (lower)", "Voltage Rating": "250V = 250V (same)", "Ripple Current": "0.4A < 0.5A (lower)", "Size": "10mm < 12.5mm (smaller)" },
    link: "/aishi/products/radial-lead-capacitors/rs-68uf-250v.html"
  },
  {
    partNumber: "RH-100uF-250V",
    specs: { "Capacitance": "100uF", "Voltage Rating": "250V DC", "Temperature": "105C" },
    comparison: { "Capacitance": "100uF = 100uF (same)", "Voltage Rating": "250V = 250V (same)", "Ripple Current": "0.6A > 0.5A (higher)", "Temperature": "105C > 85C (higher)" },
    link: "/aishi/products/radial-lead-capacitors/rh-100uf-250v.html"
  }
];

// 执行修复
for (const part of partsToFix) {
  fixAlternativePart(part.partNumber, part.specs, part.comparison, part.link);
}

// 保存文件
fs.writeFileSync(productsFile, content, 'utf8');

console.log(`\n✅ 共修复 ${fixCount} 处替代料号格式问题！`);
