const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function verifyLogoSize() {
  console.log('Checking logo sizes on different pages...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  const pages = [
    { name: 'Home', file: 'index.html' },
    { name: 'Brands', file: 'brands/index.html' }
  ];
  
  for (const { name, file } of pages) {
    const filePath = path.resolve(__dirname, '..', 'output', file);
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${name}: File not found (${file})`);
      continue;
    }
    
    const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // 获取logo图片元素
    const logoImg = await page.$('img.logo');
    const logoLink = await page.$('.navbar-brand .logo-link');
    const tagline = await page.$('.brand-tagline');
    
    console.log(`${name} Page:`);
    
    if (logoImg) {
      const logoSize = await logoImg.boundingBox();
      const styles = await logoImg.evaluate(el => ({
        height: window.getComputedStyle(el).height,
        width: window.getComputedStyle(el).width,
        maxHeight: window.getComputedStyle(el).maxHeight,
        maxWidth: window.getComputedStyle(el).maxWidth
      }));
      console.log(`  Logo IMG: ${logoSize.width.toFixed(1)} x ${logoSize.height.toFixed(1)} px`);
      console.log(`  CSS: height=${styles.height}, width=${styles.width}`);
    } else {
      console.log(`  Logo IMG: ❌ Not found`);
    }
    
    if (logoLink) {
      const linkSize = await logoLink.boundingBox();
      console.log(`  Logo Link: ${linkSize.width.toFixed(1)} x ${linkSize.height.toFixed(1)} px`);
    }
    
    if (tagline) {
      const taglineSize = await tagline.boundingBox();
      console.log(`  Tagline: ${taglineSize.width.toFixed(1)} x ${taglineSize.height.toFixed(1)} px`);
    }
    console.log('');
  }
  
  await browser.close();
}

verifyLogoSize();
