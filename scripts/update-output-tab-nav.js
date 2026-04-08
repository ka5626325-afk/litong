/**
 * 批量更新 output 目录中所有页面的 Tab 导航 active 类
 */
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'output', 'infineon');

// 定义每个页面对应的 active Tab
const pageTabs = {
  'index.html': 'about',
  'products/index.html': 'products',
  'products/mcu.html': 'products',
  'products/igbt.html': 'products',
  'products/mosfet.html': 'products',
  'products/sensor.html': 'products',
  'products/gate-driver.html': 'products',
  'products/tc399xx.html': 'products',
  'products/xmc4700.html': 'products',
  'products/ff300r12me4.html': 'products',
  'products/ff600r12me4.html': 'products',
  'products/ikw40n120h3.html': 'products',
  'products/bsc028n04ls.html': 'products',
  'products/imw120r040m1h.html': 'products',
  'products/tle499x.html': 'products',
  'products/1ed020i12-f2.html': 'products',
  'solutions/index.html': 'solutions',
  'solutions/ev-charger.html': 'solutions',
  'solutions/motor-drive.html': 'solutions',
  'solutions/solar-inverter.html': 'solutions',
  'solutions/wind-power.html': 'solutions',
  'solutions/rail-transit.html': 'solutions',
  'support/index.html': 'support',
  'support/how-to-select-mcu.html': 'support',
  'support/how-to-select-igbt.html': 'support',
  'support/igbt-gate-driver-design.html': 'support',
  'support/sic-mosfet-review.html': 'support',
  'support/common-igbt-failures.html': 'support',
  'news/index.html': 'news',
  'news/new-partnership-infineon.html': 'news',
  'news/warehouse-expansion.html': 'news',
  'news/semiconductor-trends-2026.html': 'news',
  'news/ev-market-growth.html': 'news',
  'news/renewable-energy-policy.html': 'news'
};

// Tab 导航 HTML 模板
const tabNavs = {
  'about': `<nav class="brand-tab-nav" aria-label="Brand navigation">
    <div class="container">
      <ul class="tab-list">
        <li><a href="/infineon/" class="tab-item active">About Brand</a></li>
        <li><a href="/infineon/products/" class="tab-item">Products</a></li>
        <li><a href="/infineon/solutions/" class="tab-item">Solutions</a></li>
        <li><a href="/infineon/support/" class="tab-item">Support</a></li>
      </ul>
    </div>
  </nav>`,
  'products': `<nav class="brand-tab-nav" aria-label="Brand navigation">
    <div class="container">
      <ul class="tab-list">
        <li><a href="/infineon/" class="tab-item">About Brand</a></li>
        <li><a href="/infineon/products/" class="tab-item active">Products</a></li>
        <li><a href="/infineon/solutions/" class="tab-item">Solutions</a></li>
        <li><a href="/infineon/support/" class="tab-item">Support</a></li>
      </ul>
    </div>
  </nav>`,
  'solutions': `<nav class="brand-tab-nav" aria-label="Brand navigation">
    <div class="container">
      <ul class="tab-list">
        <li><a href="/infineon/" class="tab-item">About Brand</a></li>
        <li><a href="/infineon/products/" class="tab-item">Products</a></li>
        <li><a href="/infineon/solutions/" class="tab-item active">Solutions</a></li>
        <li><a href="/infineon/support/" class="tab-item">Support</a></li>
      </ul>
    </div>
  </nav>`,
  'support': `<nav class="brand-tab-nav" aria-label="Brand navigation">
    <div class="container">
      <ul class="tab-list">
        <li><a href="/infineon/" class="tab-item">About Brand</a></li>
        <li><a href="/infineon/products/" class="tab-item">Products</a></li>
        <li><a href="/infineon/solutions/" class="tab-item">Solutions</a></li>
        <li><a href="/infineon/support/" class="tab-item active">Support</a></li>
      </ul>
    </div>
  </nav>`,
  'news': `<nav class="brand-tab-nav" aria-label="Brand navigation">
    <div class="container">
      <ul class="tab-list">
        <li><a href="/infineon/" class="tab-item">About Brand</a></li>
        <li><a href="/infineon/products/" class="tab-item">Products</a></li>
        <li><a href="/infineon/solutions/" class="tab-item">Solutions</a></li>
        <li><a href="/infineon/support/" class="tab-item">Support</a></li>
        <li><a href="/infineon/news/" class="tab-item active">News</a></li>
      </ul>
    </div>
  </nav>`
};

// 旧的 Tab 导航正则表达式（匹配多行）
const oldTabRegex = /<nav class="brand-tab-nav"[\s\S]*?<\/nav>/;

function updatePage(filePath, activeTab) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 替换旧的 Tab 导航
  const newContent = content.replace(oldTabRegex, tabNavs[activeTab]);
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Updated: ${filePath.replace(outputDir + '\\', '')} (active: ${activeTab})`);
    return true;
  }
  console.log(`- Skipped: ${filePath.replace(outputDir + '\\', '')} (no match)`);
  return false;
}

console.log('Updating output page tab navigation...\n');

Object.entries(pageTabs).forEach(([page, activeTab]) => {
  const filePath = path.join(outputDir, page);
  if (fs.existsSync(filePath)) {
    updatePage(filePath, activeTab);
  }
});

console.log('\n✓ Output page update complete!');
