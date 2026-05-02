#!/usr/bin/env node
/**
 * 删除输出目录中的编造HTML文件
 */

const fs = require('fs');
const path = require('path');

// 需要删除的编造文件模式
const fabricatedFilePatterns = [
  /-2\.html$/,
  /-3\.html$/,
  /-4\.html$/,
  /consumer-electronics-solution-3\.html$/,
  /migration-guide\.html$/,
  /hme-migration-guide\.html$/,
  /design-guidelines---.*\.html$/
];

// 检查是否是编造文件
function isFabricatedFile(filename) {
  return fabricatedFilePatterns.some(pattern => pattern.test(filename));
}

// 递归删除文件
function removeFabricatedFiles(dirPath) {
  let removedCount = 0;
  
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // 递归处理子目录
      removedCount += removeFabricatedFiles(itemPath);
    } else if (stat.isFile() && isFabricatedFile(item)) {
      // 删除编造文件
      fs.unlinkSync(itemPath);
      console.log(`  Deleted: ${itemPath.replace(__dirname, '')}`);
      removedCount++;
    }
  }
  
  return removedCount;
}

// 主函数
function main() {
  const outputDir = path.join(__dirname, '..', 'output');
  
  if (!fs.existsSync(outputDir)) {
    console.log('Output directory not found');
    return;
  }
  
  console.log('Cleaning fabricated HTML files from output directory...\n');
  
  const totalRemoved = removeFabricatedFiles(outputDir);
  
  console.log(`\n=== Summary ===`);
  console.log(`Total fabricated HTML files removed: ${totalRemoved}`);
  console.log('Cleaning completed!');
}

main();
