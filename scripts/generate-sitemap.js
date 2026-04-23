const fs = require('fs');
const path = require('path');

// 配置
const DOMAIN = 'https://www.elec-distributor.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'output');
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'sitemap.xml');

// 获取所有HTML文件
function getAllHtmlFiles(dir, basePath = '') {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = basePath ? `${basePath}/${item}` : item;
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath, relativePath));
    } else if (item.endsWith('.html')) {
      files.push(relativePath);
    }
  }
  
  return files;
}

// 确定页面优先级和更新频率
function getPagePriority(filePath) {
  // 首页
  if (filePath === 'index.html') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  
  // 品牌首页
  if (filePath.split('/').length === 2 && filePath.endsWith('/index.html')) {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  
  // 产品、解决方案、支持、新闻首页
  if (filePath.match(/\/(products|solutions|support|news)\/index\.html$/)) {
    return { priority: '0.7', changefreq: 'weekly' };
  }
  
  // 产品详情页
  if (filePath.includes('/products/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  // 解决方案详情页
  if (filePath.includes('/solutions/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  // 支持文章页
  if (filePath.includes('/support/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.5', changefreq: 'monthly' };
  }
  
  // 新闻详情页
  if (filePath.includes('/news/') && !filePath.endsWith('/index.html')) {
    return { priority: '0.5', changefreq: 'weekly' };
  }
  
  // 关于页面
  if (filePath.includes('about/')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  // 品牌列表页
  if (filePath === 'brands/index.html') {
    return { priority: '0.9', changefreq: 'weekly' };
  }
  
  // 默认
  return { priority: '0.5', changefreq: 'monthly' };
}

// 生成sitemap XML
function generateSitemap() {
  const htmlFiles = getAllHtmlFiles(OUTPUT_DIR);
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // 添加首页
  sitemap += '  <url>\n';
  sitemap += `    <loc>${DOMAIN}/</loc>\n`;
  sitemap += '    <changefreq>daily</changefreq>\n';
  sitemap += '    <priority>1.0</priority>\n';
  sitemap += '  </url>\n';
  
  // 添加品牌列表页
  sitemap += '  <url>\n';
  sitemap += `    <loc>${DOMAIN}/brands/</loc>\n`;
  sitemap += '    <changefreq>weekly</changefreq>\n';
  sitemap += '    <priority>0.9</priority>\n';
  sitemap += '  </url>\n';
  
  // 添加关于页面
  sitemap += '  <url>\n';
  sitemap += `    <loc>${DOMAIN}/about/</loc>\n`;
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>0.7</priority>\n';
  sitemap += '  </url>\n';
  
  sitemap += '  <url>\n';
  sitemap += `    <loc>${DOMAIN}/about/contact/</loc>\n`;
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>0.6</priority>\n';
  sitemap += '  </url>\n';
  
  // 添加新闻首页
  sitemap += '  <url>\n';
  sitemap += `    <loc>${DOMAIN}/news/</loc>\n`;
  sitemap += '    <changefreq>daily</changefreq>\n';
  sitemap += '    <priority>0.8</priority>\n';
  sitemap += '  </url>\n';
  
  // 处理所有HTML文件
  for (const file of htmlFiles) {
    // 跳过根目录的index.html（已添加）
    if (file === 'index.html') continue;
    
    // 构建URL路径
    let urlPath = file.replace(/\\/g, '/');
    
    // 确保路径以/开头
    if (!urlPath.startsWith('/')) {
      urlPath = '/' + urlPath;
    }
    
    // 移除index.html，使用目录形式
    if (urlPath.endsWith('/index.html')) {
      urlPath = urlPath.replace('/index.html', '/');
    }
    
    const { priority, changefreq } = getPagePriority(file);
    
    sitemap += '  <url>\n';
    sitemap += `    <loc>${DOMAIN}${urlPath}</loc>\n`;
    sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemap += `    <priority>${priority}</priority>\n`;
    sitemap += '  </url>\n';
  }
  
  sitemap += '</urlset>\n';
  
  return sitemap;
}

// 主函数
function main() {
  console.log('Generating sitemap...');
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Domain: ${DOMAIN}`);
  
  const sitemap = generateSitemap();
  
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
  
  console.log(`Sitemap generated: ${SITEMAP_PATH}`);
  
  // 统计信息
  const htmlFiles = getAllHtmlFiles(OUTPUT_DIR);
  console.log(`\nStatistics:`);
  console.log(`- Total HTML files: ${htmlFiles.length}`);
  console.log(`- Domain: ${DOMAIN}`);
  console.log(`- Sitemap size: ${(sitemap.length / 1024).toFixed(2)} KB`);
}

main();
