/**
 * 批量修复 coreAdvantages 格式
 * 从字符串数组转换为对象数组
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
const brands = fs.readdirSync(dataDir).filter(item => {
  const itemPath = path.join(dataDir, item);
  return fs.statSync(itemPath).isDirectory();
});

let fixedCount = 0;
let skippedCount = 0;
let errorCount = 0;

brands.forEach(brand => {
  const solutionsPath = path.join(dataDir, brand, 'solutions.json');
  
  if (!fs.existsSync(solutionsPath)) {
    return;
  }
  
  try {
    const content = fs.readFileSync(solutionsPath, 'utf8');
    const data = JSON.parse(content);
    
    if (!data.solutions || !Array.isArray(data.solutions)) {
      console.log(`⚠️  ${brand}: No solutions array found`);
      skippedCount++;
      return;
    }
    
    let needsFix = false;
    
    data.solutions.forEach((solution, index) => {
      if (solution.coreAdvantages && Array.isArray(solution.coreAdvantages)) {
        // 检查是否是字符串数组
        if (solution.coreAdvantages.length > 0 && typeof solution.coreAdvantages[0] === 'string') {
          console.log(`🔧 ${brand}: Fixing solution ${index + 1} coreAdvantages...`);
          
          // 转换字符串数组为对象数组
          solution.coreAdvantages = solution.coreAdvantages.map(str => {
            // 尝试从字符串中提取标题和描述
            // 格式通常是: "标题 - 描述" 或 "标题: 描述" 或纯字符串
            let title = str;
            let description = '';
            
            // 尝试用常见分隔符分割
            const separators = [' - ', ' — ', ': ', '：'];
            for (const sep of separators) {
              const idx = str.indexOf(sep);
              if (idx > 0) {
                title = str.substring(0, idx).trim();
                description = str.substring(idx + sep.length).trim();
                break;
              }
            }
            
            // 如果没有分隔符，尝试智能分割（前3-5个单词作为标题）
            if (!description && str.includes(' ')) {
              const words = str.split(' ');
              if (words.length > 4) {
                title = words.slice(0, 4).join(' ');
                description = words.slice(4).join(' ');
              }
            }
            
            return {
              title: title,
              description: description || str
            };
          });
          
          needsFix = true;
        }
      }
    });
    
    if (needsFix) {
      fs.writeFileSync(solutionsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`✅ ${brand}: Fixed successfully`);
      fixedCount++;
    } else {
      console.log(`⏭️  ${brand}: No fix needed`);
      skippedCount++;
    }
    
  } catch (error) {
    console.error(`❌ ${brand}: Error - ${error.message}`);
    errorCount++;
  }
});

console.log('\n========================================');
console.log(`✅ Fixed: ${fixedCount}`);
console.log(`⏭️  Skipped: ${skippedCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log('========================================');
