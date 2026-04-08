/**
 * 电子元件代理商品牌子目录网站生成脚本
 *
 * 使用方法:
 *   npm run generate              - 显示帮助
 *   npm run generate:brand infineon  - 生成指定品牌
 *   npm run generate:all          - 生成所有品牌
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const TemplateSelector = require('./template-selector');

// 配置
const config = {
  inputDir: path.join(__dirname, '..', 'templates'),
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data'),
  assetsDir: path.join(__dirname, '..', 'assets')
};

// 初始化模板选择器
const templateSelector = new TemplateSelector();

/**
 * 简单的 Markdown 转 HTML 函数
 */
function markdownToHtml(markdown) {
  if (!markdown) return '';
  
  let html = markdown;
  
  // 转义 HTML 特殊字符
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // 标题 (必须在其他规则之前处理)
  html = html.replace(/^### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^## (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>');
  
  // 粗体和斜体
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // 行内代码
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // 代码块
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  
  // 引用
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
  
  // 无序列表
  html = html.replace(/^\s*[-*+]\s+(.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
  
  // 有序列表
  html = html.replace(/^\s*\d+\.\s+(.*$)/gim, '<li>$1</li>');
  
  // 表格
  html = html.replace(/^\|(.+)\|$/gim, function(match, content) {
    const cells = content.split('|').map(cell => cell.trim());
    const isHeader = cells.every(cell => /^[-:]+$/.test(cell) || cell === '');
    if (isHeader) return '<!-- table separator -->';
    return '<tr>' + cells.map(cell => '<td>' + cell + '</td>').join('') + '</tr>';
  });
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, '<table>$&</table>');
  html = html.replace(/<!-- table separator -->/g, '');
  
  // 水平线
  html = html.replace(/^---$/gim, '<hr>');
  
  // 链接
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // 图片
  html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  
  // 段落 (将双换行转换为段落标签)
  html = html.replace(/\n\n+/g, '</p><p>');
  html = '<p>' + html + '</p>';
  
  // 清理空的段落标签
  html = html.replace(/<p>\s*<\/p>/g, '');
  html = html.replace(/<p>\s*(<h[2-4]>)/g, '$1');
  html = html.replace(/(<\/h[2-4]>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<ul>)/g, '$1');
  html = html.replace(/(<\/ul>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<ol>)/g, '$1');
  html = html.replace(/(<\/ol>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<pre>)/g, '$1');
  html = html.replace(/(<\/pre>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<table>)/g, '$1');
  html = html.replace(/(<\/table>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<blockquote>)/g, '$1');
  html = html.replace(/(<\/blockquote>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<hr>)\s*<\/p>/g, '$1');
  
  return html;
}

/**
 * 读取 JSON 数据文件
 */
function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * 加载品牌数据
 */
function loadBrandData(brand) {
  const brandDir = path.join(config.dataDir, brand);
  
  return {
    brand: loadJSON(path.join(brandDir, 'brand.json')),
    products: loadJSON(path.join(brandDir, 'products.json')),
    solutions: loadJSON(path.join(brandDir, 'solutions.json')),
    support: loadJSON(path.join(brandDir, 'support.json')),
    news: loadJSON(path.join(brandDir, 'news.json'))
  };
}

/**
 * 渲染 EJS 模板
 */
function renderTemplate(templatePath, data) {
  try {
    let template = fs.readFileSync(templatePath, 'utf8');
    
    // 先处理 SSI include，将组件内容内联到模板中
    const componentsDir = path.join(config.inputDir, 'components');
    ['navbar', 'footer', 'breadcrumb', 'floating-contact', 'brand-tab-nav'].forEach(name => {
      const componentPath = path.join(componentsDir, `${name}.html`);
      if (fs.existsSync(componentPath)) {
        const componentContent = fs.readFileSync(componentPath, 'utf8');
        const includeRegex = new RegExp(`<!--#include virtual="/templates/components/${name}.html" -->`, 'g');
        template = template.replace(includeRegex, componentContent);
      }
    });
    
    // 然后渲染 EJS
    return ejs.render(template, data, {
      filename: templatePath,
      strict: false
    });
  } catch (error) {
    console.error(`Error rendering ${templatePath}: ${error.message}`);
    return null;
  }
}

/**
 * 确保目录存在
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * 复制资源文件
 */
function copyAssets() {
  console.log('Copying assets...');
  const outputAssetsDir = path.join(config.outputDir, 'assets');
  
  if (fs.existsSync(config.assetsDir)) {
    copyDir(config.assetsDir, outputAssetsDir);
  }
}

/**
 * 递归复制目录
 */
function copyDir(srcDir, destDir) {
  ensureDir(destDir);
  
  const files = fs.readdirSync(srcDir);
  
  files.forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    
    const stat = fs.statSync(srcFile);
    
    if (stat.isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

/**
 * 生成品牌页面
 */
function generateBrandPages(brand, data) {
  console.log(`\nGenerating pages for ${brand}...`);
  
  const brandOutputDir = path.join(config.outputDir, brand);
  ensureDir(brandOutputDir);
  
  // 生成关于品牌页
  generatePage(
    path.join(config.inputDir, 'brands', 'brand-about.html'),
    { ...data, page: 'about' },
    path.join(brandOutputDir, 'index.html')
  );
  
  // 生成产品列表页 - 嵌套结构: /hgsemi/products/
  generatePage(
    path.join(config.inputDir, 'brands', 'products-list.html'),
    { ...data, page: 'products' },
    path.join(brandOutputDir, 'products', 'index.html')
  );
  
  // 生成产品分类页 (每个分类)
  if (data.products && data.products.categories) {
    data.products.categories.forEach(category => {
      // 预处理参数映射：将参数显示名称映射到产品字段名
      var paramMapping = {};
      category.parameters.forEach(function(param) {
        var fieldKey = param.toLowerCase().replace(/[^a-z0-9]/g, '');
        // 特殊字段映射 - Infineon
        if (fieldKey === 'flashmemory') fieldKey = 'flash';
        if (fieldKey === 'packagetype') fieldKey = 'package';
        if (fieldKey === 'temperaturerange') fieldKey = 'temperature';
        if (fieldKey === 'operatingtemperature') fieldKey = 'temperature';
        if (fieldKey === 'operatingfrequency') fieldKey = 'frequency';
        if (fieldKey === 'safetycertification') fieldKey = 'safetyLevel';
        if (fieldKey === 'vcesattyp') fieldKey = 'vceSat';
        if (fieldKey === 'switchingenergy') fieldKey = 'switchingEnergy';
        if (fieldKey === 'collectoremittervoltagevce') fieldKey = 'voltage';
        if (fieldKey === 'collectorcurrentic') fieldKey = 'current';
        if (fieldKey === 'drainsourcevoltagevds') fieldKey = 'voltage';
        if (fieldKey === 'onresistancerdson') fieldKey = 'rdsOn';
        if (fieldKey === 'draincurrentid') fieldKey = 'current';
        if (fieldKey === 'gatechargeqg') fieldKey = 'gateCharge';
        if (fieldKey === 'isolationvoltage') fieldKey = 'voltage';
        if (fieldKey === 'figureofmeritrdsonqg') fieldKey = 'figureOfMerit';
        if (fieldKey === 'sensortype') fieldKey = 'type';
        if (fieldKey === 'measurementrange') fieldKey = 'range';
        if (fieldKey === 'supplyvoltage') fieldKey = 'supplyVoltage';
        if (fieldKey === 'outputtype') fieldKey = 'output';
        if (fieldKey === 'peakoutputcurrent') fieldKey = 'peakCurrent';
        if (fieldKey === 'propagationdelay') fieldKey = 'propagationDelay';
        // 特殊字段映射 - Semikron
        if (fieldKey === 'collectoremittervoltagevces') fieldKey = 'voltage';
        if (fieldKey === 'saturationvoltagevcesat') fieldKey = 'vceSat';
        if (fieldKey === 'turnonenergyeon') fieldKey = 'eOn';
        if (fieldKey === 'turnoffenergyeoff') fieldKey = 'eOff';
        if (fieldKey === 'junctiontemperaturetj') fieldKey = 'tjMax';
        if (fieldKey === 'numberofchannels') fieldKey = 'channels';
        // 特殊字段映射 - CRRC 和其他通用映射
        if (fieldKey === 'voltagerating') fieldKey = 'voltage';
        if (fieldKey === 'currentrating') fieldKey = 'current';
        if (fieldKey === 'switchingfrequency') fieldKey = 'frequency';
        if (fieldKey === 'packagetype') fieldKey = 'package';
        if (fieldKey === 'isolationvoltage') fieldKey = 'voltage';
        if (fieldKey === 'temperaturerange') fieldKey = 'temperature';
        if (fieldKey === 'powerrating') fieldKey = 'powerRating';
        if (fieldKey === 'inputvoltage') fieldKey = 'inputVoltage';
        if (fieldKey === 'outputfrequency') fieldKey = 'frequency';
        if (fieldKey === 'coolingmethod') fieldKey = 'coolingMethod';
        if (fieldKey === 'protectionlevel') fieldKey = 'protection';
        if (fieldKey === 'voltageoutput') fieldKey = 'voltageOutput';
        if (fieldKey === 'operatingtemperature') fieldKey = 'temperature';
        if (fieldKey === 'protectionrating') fieldKey = 'protection';
        if (fieldKey === 'emccompliance') fieldKey = 'emc';
        if (fieldKey === 'devicetype') fieldKey = 'type';
        if (fieldKey === 'switchingspeed') fieldKey = 'switchingSpeed';
        paramMapping[param] = fieldKey;
      });

      // 为每个产品预计算参数值
      var productsWithParamValues = category.products.map(function(product) {
        var paramValues = {};
        category.parameters.forEach(function(param) {
          var fieldKey = paramMapping[param];
          paramValues[param] = product[fieldKey] || '-';
        });
        return Object.assign({}, product, { paramValues: paramValues });
      });
      
      // 生成分类列表页 - 嵌套结构: /hgsemi/products/{category-id}.html
      generatePage(
        path.join(config.inputDir, 'brands', 'product-category.html'),
        { ...data, page: 'category', category: Object.assign({}, category, { products: productsWithParamValues }), categories: data.products.categories },
        path.join(brandOutputDir, 'products', `${category.id}.html`)
      );

      // 生成产品详情页 (每个产品)
      if (category.products) {
        // 获取品牌模板配置
        const brandTemplate = templateSelector.getBrandTemplate(brand);
        const templateFile = brandTemplate.templateFile || 'product-detail.html';
        
        category.products.forEach(product => {
          // 根据模板类型选择对应的模板文件
          const templatePath = path.join(config.inputDir, 'brands', templateFile);
          // 如果模板文件不存在，回退到默认模板
          const fallbackTemplatePath = path.join(config.inputDir, 'brands', 'product-detail.html');
          const finalTemplatePath = fs.existsSync(templatePath) ? templatePath : fallbackTemplatePath;
          
          // 产品详情页 - 嵌套结构: /hgsemi/products/{part-number}.html
          generatePage(
            finalTemplatePath,
            { ...data, page: 'product-detail', category, product, templateConfig: brandTemplate },
            path.join(brandOutputDir, 'products', `${product.partNumber.toLowerCase()}.html`)
          );
        });
      }
    });
  }
  
  // 生成解决方案列表页 - 嵌套结构: /hgsemi/solutions/
  generatePage(
    path.join(config.inputDir, 'brands', 'solutions-list.html'),
    { ...data, page: 'solutions' },
    path.join(brandOutputDir, 'solutions', 'index.html')
  );

  // 生成解决方案详情页 (每个方案) - 嵌套结构: /hgsemi/solutions/{solution-id}.html
  if (data.solutions && data.solutions.solutions) {
    data.solutions.solutions.forEach(solution => {
      generatePage(
        path.join(config.inputDir, 'brands', 'solution-detail.html'),
        { ...data, page: 'solution-detail', solution, solutions: data.solutions.solutions, brand: data.brand },
        path.join(brandOutputDir, 'solutions', `${solution.id}.html`)
      );
    });
  }
  
  // 生成技术支持页 - 嵌套结构: /hgsemi/support/
  generatePage(
    path.join(config.inputDir, 'brands', 'support.html'),
    { ...data, page: 'support' },
    path.join(brandOutputDir, 'support', 'index.html')
  );

  // 生成技术支持详情页 (每篇文章) - 嵌套结构: /hgsemi/support/{article-id}.html
  if (data.support && data.support.articles) {
    data.support.articles.forEach(article => {
      // 将 Markdown 内容转换为 HTML
      // 支持字符串或数组格式的 content
      const contentStr = Array.isArray(article.content)
        ? article.content.join('\n\n')
        : (article.content || '');
      const articleWithHtml = {
        ...article,
        contentHtml: markdownToHtml(contentStr)
      };
      generatePage(
        path.join(config.inputDir, 'brands', 'support-detail.html'),
        { ...data, page: 'support-detail', article: articleWithHtml },
        path.join(brandOutputDir, 'support', `${article.id}.html`)
      );
    });
  }

  // 新闻中心在根目录，不在品牌子目录下
  // 注释掉品牌子目录中的 news 页面生成
  // // 生成新闻列表页
  // generatePage(
  //   path.join(config.inputDir, 'brands', 'news-list.html'),
  //   { ...data, page: 'news' },
  //   path.join(brandOutputDir, 'news', 'index.html')
  // );

  // // 生成新闻详情页 (每篇文章)
  // if (data.news && data.news.articles) {
  //   data.news.articles.forEach(article => {
  //     generatePage(
  //       path.join(config.inputDir, 'brands', 'news-detail.html'),
  //       { ...data, page: 'news-detail', article, news: data.news },
  //       path.join(brandOutputDir, 'news', `${article.id}.html`)
  //     );
  //   });
  // }
}

/**
 * 生成单个页面
 */
function generatePage(templatePath, data, outputPath) {
  if (!fs.existsSync(templatePath)) {
    console.warn(`Template not found: ${templatePath}`);
    return;
  }
  
  const html = renderTemplate(templatePath, data);
  
  if (html) {
    ensureDir(path.dirname(outputPath));
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`  ✓ Generated: ${path.relative(config.outputDir, outputPath)}`);
  }
}

/**
 * 生成主站页面
 */
function generateMainSite() {
  console.log('\nGenerating main site pages...');
  
  // 生成首页
  generatePage(
    path.join(config.inputDir, 'pages', 'index.html'),
    { page: 'home' },
    path.join(config.outputDir, 'index.html')
  );
  
  // 生成品牌列表页到 /brands/ 目录
  generatePage(
    path.join(config.inputDir, 'pages', 'brands-index.html'),
    { page: 'brands' },
    path.join(config.outputDir, 'brands', 'index.html')
  );
  
  // 生成关于我们页面
  generatePage(
    path.join(config.inputDir, 'pages', 'about.html'),
    { page: 'about' },
    path.join(config.outputDir, 'about', 'index.html')
  );
}

/**
 * 生成 sitemap.xml
 */
function generateSitemap() {
  console.log('\nGenerating sitemap.xml...');
  
  const baseUrl = 'https://www.elec-distributor.com';
  const urls = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/brands/', changefreq: 'weekly', priority: '0.9' },
    { loc: '/news/', changefreq: 'daily', priority: '0.8' },
    { loc: '/about/', changefreq: 'monthly', priority: '0.7' },
    { loc: '/about/contact/', changefreq: 'monthly', priority: '0.6' }
  ];
  
  // 添加品牌页面
  if (fs.existsSync(config.dataDir)) {
    const brands = fs.readdirSync(config.dataDir);
    brands.forEach(brand => {
      urls.push({ loc: `/${brand}/`, changefreq: 'weekly', priority: '0.8' });
      urls.push({ loc: `/${brand}/products/`, changefreq: 'weekly', priority: '0.7' });
      urls.push({ loc: `/${brand}/solutions/`, changefreq: 'weekly', priority: '0.7' });
      urls.push({ loc: `/${brand}/support/`, changefreq: 'weekly', priority: '0.7' });
      urls.push({ loc: `/${brand}/news/`, changefreq: 'weekly', priority: '0.7' });
    });
  }
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync(path.join(config.outputDir, 'sitemap.xml'), xml, 'utf8');
  console.log('  ✓ Generated: sitemap.xml');
}

/**
 * 显示帮助信息
 */
function showHelp() {
  console.log(`
Electronic Components Distributor Website Generator

Usage:
  npm run generate              - Show this help
  npm run generate:brand <name> - Generate specific brand
  npm run generate:all          - Generate all brands

Examples:
  npm run generate:brand infineon
  npm run generate:all
`);
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  console.log('='.repeat(50));
  console.log('Electronic Components Distributor Website Generator');
  console.log('='.repeat(50));
  
  switch (command) {
    case '--brand':
      const brand = args[1];
      if (!brand) {
        console.error('Error: Please specify brand name');
        showHelp();
        process.exit(1);
      }

      console.log(`\nGenerating brand: ${brand}`);
      const data = loadBrandData(brand);
      generateBrandPages(brand, data);
      copyAssets();
      generateSitemap();
      inlineComponents(); // 内联组件
      break;
      
    case '--all':
      console.log('\nGenerating all brands...');
      
      if (!fs.existsSync(config.dataDir)) {
        console.error('Error: Data directory not found');
        process.exit(1);
      }

      // 生成主站页面
      generateMainSite();

      const brands = fs.readdirSync(config.dataDir);
      brands.forEach(brand => {
        const brandDir = path.join(config.dataDir, brand);
        if (fs.statSync(brandDir).isDirectory()) {
          const data = loadBrandData(brand);
          generateBrandPages(brand, data);
        }
      });

      copyAssets();
      generateSitemap();
      inlineComponents(); // 内联组件
      break;

    default:
      showHelp();
  }

  console.log('\n' + '='.repeat(50));
  console.log('Generation complete!');
  console.log('='.repeat(50));
}

/**
 * 内联组件 - 将 SSI include 替换为实际内容
 */
function inlineComponents() {
  console.log('\nInlining components...\n');
  
  const componentsDir = path.join(config.inputDir, 'components');
  const components = {};
  ['navbar', 'footer', 'breadcrumb', 'floating-contact', 'brand-tab-nav'].forEach(name => {
    const filePath = path.join(componentsDir, `${name}.html`);
    if (fs.existsSync(filePath)) {
      components[name] = fs.readFileSync(filePath, 'utf8');
    }
  });

  // 处理 HTML 文件
  function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 替换所有 include 语句
    Object.keys(components).forEach(name => {
      const regex = new RegExp(`<!--#include virtual="/templates/components/${name}.html" -->`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, components[name]);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Processed: ${path.relative(config.outputDir, filePath)}`);
    }
  }

  // 处理所有 HTML 文件
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        processFile(filePath);
      }
    });
  }

  processDirectory(config.outputDir);
}

// 运行主函数
main();
