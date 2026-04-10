const { chromium } = require('playwright');
const path = require('path');

async function checkFlexLayout() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  
  const filePath = path.resolve(__dirname, '..', 'output', 'index.html');
  const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
  
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // 获取flex布局信息
  const flexInfo = await page.evaluate(() => {
    const logoLink = document.querySelector('.logo-link');
    const navbarBrand = document.querySelector('.navbar-brand');
    const navbarContainer = document.querySelector('.navbar .container');
    
    if (!logoLink) return null;
    
    const linkStyles = window.getComputedStyle(logoLink);
    const brandStyles = window.getComputedStyle(navbarBrand);
    const containerStyles = window.getComputedStyle(navbarContainer);
    
    return {
      logoLink: {
        display: linkStyles.display,
        flexDirection: linkStyles.flexDirection,
        alignItems: linkStyles.alignItems,
        gap: linkStyles.gap,
        width: logoLink.getBoundingClientRect().width
      },
      navbarBrand: {
        width: navbarBrand.getBoundingClientRect().width,
        maxWidth: brandStyles.maxWidth
      },
      navbarContainer: {
        width: navbarContainer.getBoundingClientRect().width,
        justifyContent: containerStyles.justifyContent
      }
    };
  });
  
  console.log('Flex Layout Analysis:\n');
  console.log('Logo Link:', flexInfo.logoLink);
  console.log('Navbar Brand:', flexInfo.navbarBrand);
  console.log('Navbar Container:', flexInfo.navbarContainer);
  
  await browser.close();
}

checkFlexLayout();
