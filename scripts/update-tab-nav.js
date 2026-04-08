/**
 * 批量替换所有模板中的 EJS Tab 导航为静态 HTML
 */
const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '..', 'templates', 'brands');

// 定义每个模板对应的 active Tab
const templateTabs = {
  'brand-about.html': 'about',
  'products-list.html': 'products',
  'product-category.html': 'products',
  'product-detail.html': 'products',
  'solutions-list.html': 'solutions',
  'solution-detail.html': 'solutions',
  'support.html': 'support',
  'support-detail.html': 'support',
  'news-list.html': 'news',
  'news-detail.html': 'news',
  'tag-archive.html': 'support',
  'team-member.html': 'support'
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
const oldTabRegex = /<!--\s*templates\/components\/brand-tab-nav\.html\s*-->\s*<nav class="brand-tab-nav"[\s\S]*?<\/nav>/;

function updateTemplate(filePath, activeTab) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 替换旧的 Tab 导航
  const newContent = content.replace(oldTabRegex, tabNavs[activeTab]);
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Updated: ${path.basename(filePath)} (active: ${activeTab})`);
    return true;
  }
  console.log(`- Skipped: ${path.basename(filePath)} (no match)`);
  return false;
}

console.log('Updating template tab navigation...\n');

Object.entries(templateTabs).forEach(([template, activeTab]) => {
  const filePath = path.join(templatesDir, template);
  if (fs.existsSync(filePath)) {
    updateTemplate(filePath, activeTab);
  }
});

console.log('\n✓ Template update complete!');
