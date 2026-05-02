#!/usr/bin/env node
/**
 * Generate all 3peak product detail pages using EJS templates
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const config = {
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data'),
  templatesDir: path.join(__dirname, '..', 'templates')
};

const brand = '3peak';

console.log(`🔧 Generating all ${brand} product detail pages using EJS templates...\n`);

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

// Load and compile EJS template
function compileTemplate(templatePath) {
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  return ejs.compile(templateContent, { filename: templatePath });
}

// Replace SSI includes with rendered EJS content
function replaceIncludes(html, data) {
  // Replace navbar include
  html = html.replace(/<!--#include virtual="\/templates\/components\/navbar.html" -->/, loadComponent('navbar'));
  
  // Replace footer include
  html = html.replace(/<!--#include virtual="\/templates\/components\/footer.html" -->/, loadComponent('footer'));
  
  // Replace breadcrumb include - render with EJS
  let breadcrumbContent = loadComponent('breadcrumb');
  try {
    breadcrumbContent = ejs.render(breadcrumbContent, data);
  } catch (err) {
    console.log('⚠️  Could not render breadcrumb with EJS');
  }
  html = html.replace(/<!--#include virtual="\/templates\/components\/breadcrumb.html" -->/, breadcrumbContent);
  
  // Replace brand-tab-nav include - render with EJS
  let brandTabNavContent = loadComponent('brand-tab-nav');
  try {
    brandTabNavContent = ejs.render(brandTabNavContent, data);
  } catch (err) {
    console.log('⚠️  Could not render brand-tab-nav with EJS');
  }
  html = html.replace(/<!--#include virtual="\/templates\/components\/brand-tab-nav.html" -->/, brandTabNavContent);
  
  // Replace floating-contact include
  html = html.replace(/<!--#include virtual="\/templates\/components\/floating-contact.html" -->/, loadComponent('floating-contact'));
  
  return html;
}

// Generate all product detail pages
function generateAllProductPages() {
  console.log('📦 Generating all product detail pages...\n');
  
  // Load product detail template
  const productTemplatePath = path.join(config.templatesDir, 'brands', 'product-detail.html');
  let template;
  try {
    template = compileTemplate(productTemplatePath);
  } catch (err) {
    console.error('❌ Error compiling template:', err.message);
    return;
  }
  
  let totalGenerated = 0;
  
  productsData.categories.forEach(category => {
    category.products.forEach(product => {
      // Prepare data for template
      const templateData = {
        product: {
          ...product,
          category: category.name,
          description: product.descriptionParagraphs ? product.descriptionParagraphs[0] : product.shortDescription
        },
        brand: brandData,
        category: category,
        pageTitle: product.partNumber
      };
      
      // Render template
      let html;
      try {
        html = template(templateData);
      } catch (err) {
        console.error(`❌ Error rendering template for ${product.partNumber}:`, err.message);
        return;
      }
      
      // Fix CSS paths for nested directory
      html = html.replace(/href="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'href="../../../../assets/');
      html = html.replace(/src="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'src="../../../../assets/');
      
      // Replace includes
      html = replaceIncludes(html, templateData);
      
      // Save file
      const catDir = path.join(brandOutputDir, 'products', category.slug);
      ensureDir(catDir);
      
      const fileName = `${product.partNumber.toLowerCase()}.html`;
      fs.writeFileSync(path.join(catDir, fileName), html);
      console.log(`✅ Generated: products/${category.slug}/${fileName}`);
      totalGenerated++;
    });
  });
  
  console.log(`\n✅ Total ${totalGenerated} product detail pages generated!`);
}

// Main execution
console.log('🚀 Starting 3peak product detail page generation...\n');

generateAllProductPages();

console.log('\n✅ All 3peak product detail pages generated with EJS templates!');
