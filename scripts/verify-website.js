const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function verifyWebsite() {
  console.log('Starting website verification...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  try {
    // 加载本地HTML文件
    const indexPath = path.resolve(__dirname, '..', 'output', 'index.html');
    const fileUrl = 'file:///' + indexPath.replace(/\\/g, '/');
    
    console.log('Loading page:', fileUrl);
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    
    // 等待页面加载
    await page.waitForTimeout(2000);
    
    // 检查logo元素
    const logo = await page.$('.logo');
    const brandTagline = await page.$('.brand-tagline');
    
    console.log('\n=== Verification Results ===');
    
    if (logo) {
      const logoSrc = await logo.getAttribute('src');
      const logoSize = await logo.boundingBox();
      console.log('✅ Logo found');
      console.log('   Source:', logoSrc);
      console.log('   Size:', logoSize);
    } else {
      console.log('❌ Logo NOT found');
    }
    
    if (brandTagline) {
      const taglineText = await brandTagline.textContent();
      const taglineVisible = await brandTagline.isVisible();
      const taglineSize = await brandTagline.boundingBox();
      const styles = await brandTagline.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          display: computed.display,
          visibility: computed.visibility,
          opacity: computed.opacity,
          color: computed.color,
          fontSize: computed.fontSize
        };
      });
      
      console.log('\n✅ Brand tagline found');
      console.log('   Text:', taglineText);
      console.log('   Visible:', taglineVisible);
      console.log('   Size:', taglineSize);
      console.log('   Styles:', styles);
    } else {
      console.log('\n❌ Brand tagline NOT found');
    }
    
    // 检查navbar-brand容器
    const navbarBrand = await page.$('.navbar-brand');
    if (navbarBrand) {
      const brandSize = await navbarBrand.boundingBox();
      console.log('\n📊 Navbar brand container size:', brandSize);
      
      // 截图navbar区域
      await navbarBrand.screenshot({ 
        path: path.join(__dirname, '..', 'output', 'navbar-screenshot.png') 
      });
      console.log('📸 Screenshot saved: navbar-screenshot.png');
    }
    
    // 全页面截图
    await page.screenshot({ 
      path: path.join(__dirname, '..', 'output', 'fullpage-screenshot.png'),
      fullPage: false
    });
    console.log('📸 Full page screenshot saved: fullpage-screenshot.png');
    
    console.log('\n=== Verification Complete ===');
    
  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
}

verifyWebsite();
