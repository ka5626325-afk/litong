#!/usr/bin/env node
/**
 * Generate missing 3peak product detail pages
 * For TPT3232, TPT75176, TPR1033, TPR1050
 */

const fs = require('fs');
const path = require('path');

const config = {
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data'),
  templatesDir: path.join(__dirname, '..', 'templates')
};

const brand = '3peak';

console.log(`🔧 Generating missing ${brand} product detail pages...\n`);

// Load brand data
const brandData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'brand.json'), 'utf8'));
const productsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'products.json'), 'utf8'));

const brandOutputDir = path.join(config.outputDir, brand);

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Load component templates
function loadComponent(componentName) {
  const componentPath = path.join(config.templatesDir, 'components', `${componentName}.html`);
  if (fs.existsSync(componentPath)) {
    return fs.readFileSync(componentPath, 'utf8');
  }
  return '';
}

// Find product in data
function findProduct(partNumber) {
  for (const category of productsData.categories) {
    const product = category.products.find(p => p.partNumber === partNumber);
    if (product) {
      return { product, category };
    }
  }
  return null;
}

// Generate product detail HTML
function generateProductDetailHtml(product, category, brand) {
  const cssPath = '../../../../assets/css';
  const navbar = loadComponent('navbar');
  const footer = loadComponent('footer');
  const floatingContact = loadComponent('floating-contact');
  
  // Generate specs table rows
  const specsRows = Object.entries(product.specifications || {})
    .map(([key, value]) => `
      <tr>
        <th>${key}</th>
        <td>${value}</td>
      </tr>
    `).join('');
  
  // Generate features list
  const featuresList = (product.features || [])
    .map(f => `<li>${f}</li>`)
    .join('');
  
  // Generate applications list
  const applicationsList = (product.applications || [])
    .map(a => `<li>${a}</li>`)
    .join('');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.partNumber} | ${brand.displayName} | ${category.name} | BeiLuo</title>
  <meta name="description" content="${product.shortDescription}">
  <link rel="stylesheet" href="${cssPath}/style.css">
  <link rel="stylesheet" href="${cssPath}/navbar.css">
  <link rel="stylesheet" href="${cssPath}/footer.css">
  <style>
    .product-detail { padding: 40px 0; }
    .product-header {
      background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
      color: white;
      padding: 60px 0;
      margin-bottom: 40px;
    }
    .product-header h1 { font-size: 2.5rem; margin-bottom: 16px; }
    .product-header p { font-size: 1.1rem; opacity: 0.9; max-width: 800px; }
    .product-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
    .product-image {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
    }
    .product-info h2 { color: #007bff; margin-bottom: 20px; }
    .product-description { line-height: 1.8; color: #555; margin-bottom: 24px; }
    .specs-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 40px;
    }
    .specs-table th, .specs-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    .specs-table th {
      background: #f8f9fa;
      font-weight: 600;
      color: #333;
      width: 35%;
    }
    .features-list, .applications-list {
      list-style: none;
      padding: 0;
    }
    .features-list li, .applications-list li {
      padding: 8px 0;
      padding-left: 24px;
      position: relative;
    }
    .features-list li::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #28a745;
      font-weight: bold;
    }
    .applications-list li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: #007bff;
    }
    .cta-section {
      background: #f8f9fa;
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      margin: 40px 0;
    }
    .btn-primary {
      background: #ff6b35;
      color: white;
      padding: 12px 32px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-block;
      margin: 8px;
    }
    .btn-secondary {
      background: white;
      color: #007bff;
      border: 2px solid #007bff;
      padding: 10px 30px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-block;
      margin: 8px;
    }
    @media (max-width: 768px) {
      .product-content { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  ${navbar}
  
  <div class="product-header">
    <div class="container">
      <div class="breadcrumb" style="margin-bottom: 20px; opacity: 0.9;">
        <a href="/" style="color: white;">Home</a> / 
        <a href="/${brand.name}/" style="color: white;">${brand.displayName}</a> / 
        <a href="/${brand.name}/products/" style="color: white;">Products</a> / 
        <a href="/${brand.name}/products/${category.slug}.html" style="color: white;">${category.name}</a> / 
        <span>${product.partNumber}</span>
      </div>
      <h1>${product.partNumber}</h1>
      <p>${product.shortDescription}</p>
    </div>
  </div>
  
  <main class="product-detail">
    <div class="container">
      <div class="product-content">
        <div class="product-image">
          <div style="text-align: center; color: #999;">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <p style="margin-top: 16px; font-size: 1.2rem;">${product.partNumber}</p>
          </div>
        </div>
        
        <div class="product-info">
          <h2>Product Overview</h2>
          ${product.descriptionParagraphs.map(p => `<p class="product-description">${p}</p>`).join('')}
          
          <div style="margin-top: 24px;">
            <a href="/contact/?product=${product.partNumber}" class="btn-primary">Request Quote</a>
            <a href="/contact/?sample=${product.partNumber}" class="btn-secondary">Request Sample</a>
          </div>
        </div>
      </div>
      
      <h2 style="color: #007bff; margin-bottom: 24px;">Specifications</h2>
      <table class="specs-table">
        <tbody>
          ${specsRows}
        </tbody>
      </table>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 40px 0;">
        <div>
          <h2 style="color: #007bff; margin-bottom: 20px;">Key Features</h2>
          <ul class="features-list">
            ${featuresList}
          </ul>
        </div>
        
        <div>
          <h2 style="color: #007bff; margin-bottom: 20px;">Applications</h2>
          <ul class="applications-list">
            ${applicationsList}
          </ul>
        </div>
      </div>
      
      ${product.faeReview ? `
      <div style="background: #f0f7ff; padding: 32px; border-radius: 12px; margin: 40px 0;">
        <h2 style="color: #007bff; margin-bottom: 16px;">FAE Review</h2>
        <p style="font-weight: 600; margin-bottom: 8px;">${product.faeReview.author} - ${product.faeReview.title}</p>
        <p style="line-height: 1.8; color: #555;">${product.faeReview.content}</p>
        ${product.faeReview.highlight ? `<p style="margin-top: 16px; color: #28a745; font-weight: 600;">★ ${product.faeReview.highlight}</p>` : ''}
      </div>
      ` : ''}
      
      <div class="cta-section">
        <h2 style="margin-bottom: 16px;">Ready to Order?</h2>
        <p style="margin-bottom: 24px; color: #666;">Contact our sales team for pricing and availability</p>
        <a href="/contact/?product=${product.partNumber}" class="btn-primary">Get Quote</a>
        <a href="/contact/" class="btn-secondary">Contact Sales</a>
      </div>
    </div>
  </main>
  
  ${footer}
  ${floatingContact}
</body>
</html>`;
}

// Generate missing product pages
const missingProducts = [
  { partNumber: 'TPT3232', category: 'Interface Chips' },
  { partNumber: 'TPT75176', category: 'Interface Chips' },
  { partNumber: 'TPR1033', category: 'Power Management ICs' },
  { partNumber: 'TPR1050', category: 'Power Management ICs' }
];

console.log('🚀 Generating missing product detail pages...\n');

missingProducts.forEach(({ partNumber, category }) => {
  const found = findProduct(partNumber);
  if (!found) {
    console.log(`❌ Product ${partNumber} not found in data`);
    return;
  }
  
  const { product, category: catData } = found;
  const html = generateProductDetailHtml(product, catData, brandData);
  
  const catDir = path.join(brandOutputDir, 'products', catData.slug);
  ensureDir(catDir);
  
  const fileName = `${partNumber.toLowerCase()}.html`;
  fs.writeFileSync(path.join(catDir, fileName), html);
  console.log(`✅ Generated: products/${catData.slug}/${fileName}`);
});

console.log('\n✅ All missing product detail pages have been generated!');
