#!/usr/bin/env node
/**
 * Simple script to generate Espressif brand pages
 * This is a simplified version that doesn't require template-types.json
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const config = {
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data'),
  templatesDir: path.join(__dirname, '..', 'templates')
};

const brand = 'espressif';

console.log(`🔧 Generating ${brand} brand pages...\n`);

// Load brand data
const brandData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'brand.json'), 'utf8'));
const productsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'products.json'), 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'solutions.json'), 'utf8'));
const supportData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'support.json'), 'utf8'));

const brandOutputDir = path.join(config.outputDir, brand);

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Clean old product files
function cleanOldFiles() {
  const productsDir = path.join(brandOutputDir, 'products');
  if (fs.existsSync(productsDir)) {
    // Remove old placeholder files
    const oldFiles = [
      'wifisocs-3.html', 'wifisocs-4.html',
      'bluetoothsocs-3.html', 'bluetoothsocs-4.html',
      'combomodules-3.html', 'combomodules-4.html',
      'developmentboards-3.html', 'developmentboards-4.html'
    ];
    
    oldFiles.forEach(file => {
      const filePath = path.join(productsDir, file);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Removed old file: ${file}`);
      }
    });
    
    // Clean category subdirectories
    ['wifi-socs', 'bluetooth-socs', 'combo-modules', 'development-boards'].forEach(cat => {
      const catDir = path.join(productsDir, cat);
      if (fs.existsSync(catDir)) {
        const files = fs.readdirSync(catDir);
        files.forEach(file => {
          if (file.match(/(wifisocs|bluetoothsocs|combomodules|developmentboards)-\d+\.html/i)) {
            fs.unlinkSync(path.join(catDir, file));
            console.log(`🗑️  Removed old file: ${cat}/${file}`);
          }
        });
      }
    });
  }
}

// Generate product pages
function generateProductPages() {
  console.log('\n📦 Generating product pages...');
  
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      // Generate product detail page
      const productHtml = generateProductHtml(product, category, brandData);
      
      // Save to category subdirectory
      const catDir = path.join(brandOutputDir, 'products', category.slug);
      ensureDir(catDir);
      
      const fileName = `${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.html`;
      fs.writeFileSync(path.join(catDir, fileName), productHtml);
      console.log(`✅ Generated: products/${category.slug}/${fileName}`);
    });
  });
}

// Generate product HTML
function generateProductHtml(product, category, brand) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.partNumber} | ${brand.displayName} | Core Distributor</title>
  <meta name="description" content="${product.shortDescription || product.descriptionParagraphs[0]}">
  <meta name="keywords" content="${product.partNumber}, ${category.name}, ${brand.displayName}, distributor, datasheet">
  <link rel="stylesheet" href="../../../assets/css/style.css">
</head>
<body>
  <div class="container">
    <h1>${product.partNumber}</h1>
    <h2>${product.name}</h2>
    <p class="short-description">${product.shortDescription}</p>
    
    <div class="description">
      ${product.descriptionParagraphs.map(p => `<p>${p}</p>`).join('')}
    </div>
    
    <div class="specifications">
      <h3>Specifications</h3>
      <ul>
        ${Object.entries(product.specifications || {}).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
      </ul>
    </div>
    
    <div class="features">
      <h3>Features</h3>
      <ul>
        ${(product.features || []).map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
    
    <div class="applications">
      <h3>Applications</h3>
      <ul>
        ${(product.applications || []).map(a => `<li>${a}</li>`).join('')}
      </ul>
    </div>
    
    <div class="fae-review">
      <h3>FAE Review</h3>
      <p><strong>${product.faeReview?.author || 'FAE'}:</strong> ${product.faeReview?.title || ''}</p>
      <p>${product.faeReview?.content || ''}</p>
    </div>
    
    <div class="faqs">
      <h3>FAQs</h3>
      ${(product.faqs || []).map(faq => `
        <div class="faq">
          <h4>${faq.question}</h4>
          <p>${faq.answer}</p>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>`;
}

// Generate solution pages
function generateSolutionPages() {
  console.log('\n🔧 Generating solution pages...');
  
  solutionsData.solutions.forEach(solution => {
    const solutionHtml = generateSolutionHtml(solution, brandData);
    
    const fileName = `${solution.slug}.html`;
    fs.writeFileSync(path.join(brandOutputDir, 'solutions', fileName), solutionHtml);
    console.log(`✅ Generated: solutions/${fileName}`);
  });
}

// Generate solution HTML
function generateSolutionHtml(solution, brand) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${solution.title} | ${brand.displayName} | Solutions</title>
  <meta name="description" content="${solution.description}">
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <div class="container">
    <h1>${solution.title}</h1>
    <h2>${solution.subtitle}</h2>
    <p>${solution.description}</p>
    <div class="long-description">
      <p>${solution.longDescription}</p>
    </div>
    
    <div class="applications">
      <h3>Applications</h3>
      <ul>
        ${(solution.applications || []).map(a => `<li>${a}</li>`).join('')}
      </ul>
    </div>
    
    <div class="products">
      <h3>Products</h3>
      <ul>
        ${(solution.products || []).map(p => `<li><strong>${p.partNumber}</strong> - ${p.role}</li>`).join('')}
      </ul>
    </div>
    
    <div class="customer-cases">
      <h3>Customer Cases</h3>
      ${(solution.customerCases || []).map(c => `
        <div class="case">
          <h4>${c.customer}</h4>
          <p><strong>Challenge:</strong> ${c.challenge}</p>
          <p><strong>Solution:</strong> ${c.solution}</p>
          <p><strong>Result:</strong> ${c.result}</p>
        </div>
      `).join('')}
    </div>
    
    <div class="faqs">
      <h3>FAQs</h3>
      ${(solution.faqs || []).map(faq => `
        <div class="faq">
          <h4>${faq.question}</h4>
          <p>${faq.answer}</p>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>`;
}

// Main execution
console.log('🚀 Starting Espressif brand page generation...\n');

ensureDir(brandOutputDir);
ensureDir(path.join(brandOutputDir, 'products'));
ensureDir(path.join(brandOutputDir, 'solutions'));
ensureDir(path.join(brandOutputDir, 'support'));

cleanOldFiles();
generateProductPages();
generateSolutionPages();

console.log('\n✅ Espressif brand pages generated successfully!');
