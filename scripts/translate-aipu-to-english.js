#!/usr/bin/env node

/**
 * Translation helper script for aipu brand data
 * This script identifies Chinese characters in JSON files
 */

const fs = require('fs');
const path = require('path');

const filesToCheck = [
  'data/aipu/solutions.json',
  'data/aipu/news.json'
];

const dataDir = path.join(__dirname, '..');

function containsChinese(text) {
  return /[\u4e00-\u9fff]/.test(text);
}

function findChineseContent(obj, path = '') {
  const results = [];
  
  if (typeof obj === 'string') {
    if (containsChinese(obj)) {
      results.push({ path, value: obj });
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      results.push(...findChineseContent(item, `${path}[${index}]`));
    });
  } else if (typeof obj === 'object' && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      results.push(...findChineseContent(value, path ? `${path}.${key}` : key));
    }
  }
  
  return results;
}

filesToCheck.forEach(file => {
  const filePath = path.join(dataDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  
  console.log(`\n=== ${file} ===`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    const chineseContent = findChineseContent(data);
    
    if (chineseContent.length === 0) {
      console.log('No Chinese content found.');
    } else {
      console.log(`Found ${chineseContent.length} strings with Chinese characters:\n`);
      chineseContent.forEach((item, index) => {
        console.log(`${index + 1}. Path: ${item.path}`);
        console.log(`   Value: ${item.value.substring(0, 100)}${item.value.length > 100 ? '...' : ''}`);
        console.log('');
      });
    }
  } catch (e) {
    console.error(`Error processing ${file}: ${e.message}`);
  }
});
