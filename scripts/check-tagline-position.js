const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function checkTaglinePosition() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  const filePath = path.resolve(__dirname, '..', 'output', 'index.html');
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
  
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // 获取logo和tagline的位置信息
  const positions = await page.evaluate(() => {
    const logo = document.querySelector('img.logo');
    const tagline = document.querySelector('.brand-tagline');
    const logoLink = document.querySelector('.logo-link');
    
    if (!logo || !tagline) return null;
    
    const logoRect = logo.getBoundingClientRect();
    const taglineRect = tagline.getBoundingClientRect();
    const linkRect = logoLink.getBoundingClientRect();
    
    const logoStyles = window.getComputedStyle(logo);
    const taglineStyles = window.getComputedStyle(tagline);
    const linkStyles = window.getComputedStyle(logoLink);
    
    return {
      logo: {
        width: logoRect.width,
        height: logoRect.height,
        right: logoRect.right,
        left: logoRect.left
      },
      tagline: {
        width: taglineRect.width,
        height: taglineRect.height,
        left: taglineRect.left,
        right: taglineRect.right
      },
      logoLink: {
        gap: linkStyles.gap,
        height: linkRect.height
      },
      distance: taglineRect.left - logoRect.right,
      taglineMarginLeft: taglineStyles.marginLeft
    };
  });
  
  console.log('Logo & Tagline Position Analysis:\n');
  console.log('Logo:', positions.logo);
  console.log('Tagline:', positions.tagline);
  console.log('Logo Link gap:', positions.logoLink.gap);
  console.log('Logo Link height:', positions.logoLink.height);
  console.log('Distance between logo and tagline:', positions.distance, 'px');
  console.log('Tagline margin-left:', positions.taglineMarginLeft);
  
  await browser.close();
}

checkTaglinePosition();
