const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function debugLogo() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  const filePath = path.resolve(__dirname, '..', 'output', 'index.html');
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
  
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // 获取所有样式信息
  const logoInfo = await page.evaluate(() => {
    const logo = document.querySelector('img.logo');
    if (!logo) return null;
    
    const computed = window.getComputedStyle(logo);
    const rect = logo.getBoundingClientRect();
    
    // 获取所有匹配的CSS规则
    const sheets = Array.from(document.styleSheets);
    let matchingRules = [];
    
    for (const sheet of sheets) {
      try {
        const rules = Array.from(sheet.cssRules || sheet.rules);
        for (const rule of rules) {
          if (rule.selectorText && rule.selectorText.includes('logo')) {
            matchingRules.push({
              selector: rule.selectorText,
              cssText: rule.cssText
            });
          }
        }
      } catch (e) {
        // 跨域样式表会报错，忽略
      }
    }
    
    return {
      computed: {
        height: computed.height,
        width: computed.width,
        maxHeight: computed.maxHeight,
        maxWidth: computed.maxWidth,
        display: computed.display
      },
      rect: {
        width: rect.width,
        height: rect.height
      },
      naturalWidth: logo.naturalWidth,
      naturalHeight: logo.naturalHeight,
      matchingRules: matchingRules
    };
  });
  
  console.log('Logo Debug Information:\n');
  console.log('Computed Styles:', JSON.stringify(logoInfo.computed, null, 2));
  console.log('Bounding Rect:', JSON.stringify(logoInfo.rect, null, 2));
  console.log('Natural Size:', logoInfo.naturalWidth, 'x', logoInfo.naturalHeight);
  console.log('\nMatching CSS Rules:');
  logoInfo.matchingRules.forEach(rule => {
    console.log(`\n${rule.selector}:`);
    console.log(`  ${rule.cssText}`);
  });
  
  await browser.close();
}

debugLogo();
