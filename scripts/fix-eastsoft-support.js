#!/usr/bin/env node
/**
 * 删除eastsoft品牌中编造的support文章（第5篇）
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 修复support.json - 删除编造的文章
function fixSupport() {
  console.log('========================================');
  console.log('Remove EASTSOFT Fake Support Article');
  console.log('========================================');
  
  const supportPath = path.join(dataDir, 'eastsoft', 'support.json');
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let removedCount = 0;
  
  if (data.articles && Array.isArray(data.articles)) {
    const originalCount = data.articles.length;
    console.log(`  - Original articles: ${originalCount}`);
    
    // 只保留前4篇真实文章，删除第5篇（如果存在）
    if (data.articles.length > 4) {
      const removed = data.articles.splice(4, data.articles.length - 4);
      removedCount += removed.length;
      console.log(`  - Removed ${removed.length} fake article(s): ${removed.map(a => a.id).join(', ')}`);
      console.log(`  - Remaining: ${data.articles.length} real articles`);
    } else {
      console.log(`  - Already has ${data.articles.length} articles (no removal needed)`);
    }
  }
  
  if (removedCount > 0) {
    try {
      fs.writeFileSync(supportPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Removed ${removedCount} fake article(s) total`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake articles to remove');
  }
  
  return removedCount;
}

fixSupport();
