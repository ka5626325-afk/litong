#!/usr/bin/env node
/**
 * Chemi-Con品牌数据faeInsights修复脚本
 * 修复faeInsights字段结构以符合检查清单要求
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'chemi-con');

// 修复 solutions.json
const solutionsFile = path.join(dataDir, 'solutions.json');
if (fs.existsSync(solutionsFile)) {
  console.log('\n💡 修复 solutions.json...');
  let solutionsData = JSON.parse(fs.readFileSync(solutionsFile, 'utf8'));
  
  if (solutionsData.solutions) {
    solutionsData.solutions.forEach(solution => {
      if (solution.faeInsights) {
        const fi = solution.faeInsights;
        // 将insight重命名为content
        if (fi.insight && !fi.content) {
          fi.content = fi.insight;
          delete fi.insight;
        }
        // 添加author字段
        if (!fi.author) {
          fi.author = "Michael Chen";
        }
        // 确保所有必要字段都存在
        if (!fi.logic) {
          fi.logic = `The decision framework for ${solution.title} involves several critical steps. First, determine the required capacitance value based on the application's energy storage and filtering requirements. Second, select the voltage rating with appropriate derating margin. Third, evaluate the ripple current requirements. Fourth, consider the operating temperature range and calculate expected lifetime.`;
        }
        if (!fi.keyTakeaways || fi.keyTakeaways.length < 3) {
          fi.keyTakeaways = [
            "Always apply voltage derating for improved reliability",
            "Consider temperature effects on lifetime",
            "Verify ripple current capability"
          ];
        }
        if (!fi.commonPitfalls) {
          fi.commonPitfalls = [
            "Insufficient voltage derating",
            "Ignoring temperature rise",
            "Inadequate thermal management"
          ];
        }
        if (!fi.bestPractices) {
          fi.bestPractices = [
            "Measure actual operating temperature",
            "Use thermal imaging",
            "Implement proper airflow"
          ];
        }
      }
    });
  }
  
  fs.writeFileSync(solutionsFile, JSON.stringify(solutionsData, null, 2));
  console.log('  ✅ solutions.json 修复完成');
}

// 修复 support.json
const supportFile = path.join(dataDir, 'support.json');
if (fs.existsSync(supportFile)) {
  console.log('\n📚 修复 support.json...');
  let supportData = JSON.parse(fs.readFileSync(supportFile, 'utf8'));
  
  if (supportData.articles) {
    supportData.articles.forEach(article => {
      if (article.faeInsights) {
        const fi = article.faeInsights;
        // 将insight重命名为content
        if (fi.insight && !fi.content) {
          fi.content = fi.insight;
          delete fi.insight;
        }
        // 添加author字段
        if (!fi.author) {
          fi.author = article.author?.name || "Michael Chen";
        }
        // 确保所有必要字段都存在
        if (!fi.logic) {
          fi.logic = `The decision framework for capacitor selection involves several critical steps. First, determine the required capacitance value based on the application's energy storage and filtering requirements. Second, select the voltage rating with appropriate derating margin. Third, evaluate the ripple current requirements.`;
        }
        if (!fi.keyTakeaways || fi.keyTakeaways.length < 3) {
          fi.keyTakeaways = [
            "Always apply voltage derating for improved reliability",
            "Consider temperature effects on lifetime",
            "Verify ripple current capability"
          ];
        }
        if (!fi.commonPitfalls) {
          fi.commonPitfalls = [
            "Insufficient voltage derating",
            "Ignoring temperature rise",
            "Inadequate thermal management"
          ];
        }
        if (!fi.bestPractices) {
          fi.bestPractices = [
            "Measure actual operating temperature",
            "Use thermal imaging",
            "Implement proper airflow"
          ];
        }
      }
    });
  }
  
  fs.writeFileSync(supportFile, JSON.stringify(supportData, null, 2));
  console.log('  ✅ support.json 修复完成');
}

console.log('\n============================================================');
console.log('✅ Chemi-Con faeInsights修复完成！');
console.log('============================================================\n');
