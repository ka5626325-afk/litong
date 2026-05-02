#!/usr/bin/env node
/**
 * Generate all brand pages using EJS templates
 * This script ensures all pages are generated using the correct templates
 */

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const config = {
  outputDir: path.join(__dirname, '..', 'output'),
  dataDir: path.join(__dirname, '..', 'data'),
  templatesDir: path.join(__dirname, '..', 'templates')
};

console.log('🔧 Generating all brand pages using EJS templates...\n');

// Get all brand directories
const brands = fs.readdirSync(config.dataDir).filter(item => {
  const itemPath = path.join(config.dataDir, item);
  return fs.statSync(itemPath).isDirectory() && !item.startsWith('.');
});

console.log(`Found ${brands.length} brands to process\n`);

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

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
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

// Generate product category pages
function generateProductCategoryPages(brand, productsData) {
  const categoryTemplatePath = path.join(config.templatesDir, 'brands', 'product-category.html');
  if (!fs.existsSync(categoryTemplatePath)) {
    console.log(`  ⚠️  Category template not found: ${categoryTemplatePath}`);
    return;
  }
  
  const template = compileTemplate(categoryTemplatePath);
  const brandOutputDir = path.join(config.outputDir, brand);
  
  ensureDir(path.join(brandOutputDir, 'products'));
  
  productsData.categories.forEach(category => {
    const templateData = {
      category: category,
      brand: { name: brand, displayName: brand.charAt(0).toUpperCase() + brand.slice(1) },
      categories: productsData.categories
    };
    
    let html = template(templateData);
    
    // Fix CSS paths
    html = html.replace(/href="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'href="../../assets/');
    html = html.replace(/src="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'src="../../assets/');
    
    // Replace includes
    html = replaceIncludes(html, templateData);
    
    const fileName = `${category.slug}.html`;
    fs.writeFileSync(path.join(brandOutputDir, 'products', fileName), html);
  });
}

// Generate product detail pages
function generateProductDetailPages(brand, productsData) {
  const productTemplatePath = path.join(config.templatesDir, 'brands', 'product-detail.html');
  if (!fs.existsSync(productTemplatePath)) {
    console.log(`  ⚠️  Product template not found: ${productTemplatePath}`);
    return;
  }
  
  const template = compileTemplate(productTemplatePath);
  const brandOutputDir = path.join(config.outputDir, brand);
  
  ensureDir(path.join(brandOutputDir, 'products'));
  
  productsData.categories.forEach(category => {
    ensureDir(path.join(brandOutputDir, 'products', category.slug));
    
    category.products.forEach(product => {
      const templateData = {
        product: {
          ...product,
          category: category.name,
          description: product.descriptionParagraphs ? product.descriptionParagraphs[0] : product.shortDescription
        },
        brand: { name: brand, displayName: brand.charAt(0).toUpperCase() + brand.slice(1) },
        category: category,
        pageTitle: product.partNumber
      };
      
      let html = template(templateData);
      
      // Fix CSS paths for nested directory
      html = html.replace(/href="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'href="../../../../assets/');
      html = html.replace(/src="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'src="../../../../assets/');
      
      // Replace includes
      html = replaceIncludes(html, templateData);
      
      const fileName = `${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.html`;
      fs.writeFileSync(path.join(brandOutputDir, 'products', category.slug, fileName), html);
    });
  });
}

// Generate solution pages
function generateSolutionPages(brand, solutionsData) {
  const solutionTemplatePath = path.join(config.templatesDir, 'brands', 'solution-detail.html');
  if (!fs.existsSync(solutionTemplatePath)) {
    console.log(`  ⚠️  Solution template not found: ${solutionTemplatePath}`);
    return;
  }
  
  const template = compileTemplate(solutionTemplatePath);
  const brandOutputDir = path.join(config.outputDir, brand);
  
  ensureDir(path.join(brandOutputDir, 'solutions'));
  
  solutionsData.solutions.forEach(solution => {
    const templateData = {
      solution: solution,
      brand: { name: brand, displayName: brand.charAt(0).toUpperCase() + brand.slice(1) },
      solutions: solutionsData.solutions,
      pageTitle: solution.title
    };
    
    let html = template(templateData);
    
    // Fix CSS paths
    html = html.replace(/href="<%= brand \? '\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'href="../../../assets/');
    html = html.replace(/src="<%= brand \? '\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'src="../../../assets/');
    
    // Replace includes
    html = replaceIncludes(html, templateData);
    
    const fileName = `${solution.slug}.html`;
    fs.writeFileSync(path.join(brandOutputDir, 'solutions', fileName), html);
  });
}

// Process each brand
let totalPages = 0;

brands.forEach(brand => {
  console.log(`📂 Processing brand: ${brand}`);
  
  const brandOutputDir = path.join(config.outputDir, brand);
  ensureDir(brandOutputDir);
  
  // Load brand data files
  const productsPath = path.join(config.dataDir, brand, 'products.json');
  const solutionsPath = path.join(config.dataDir, brand, 'solutions.json');
  
  let productsData = null;
  let solutionsData = null;
  
  if (fs.existsSync(productsPath)) {
    productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    console.log(`  ✅ Loaded products.json`);
  }
  
  if (fs.existsSync(solutionsPath)) {
    solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
    console.log(`  ✅ Loaded solutions.json`);
  }
  
  // Generate pages
  if (productsData) {
    generateProductCategoryPages(brand, productsData);
    console.log(`  ✅ Generated ${productsData.categories.length} category pages`);
    
    const productCount = productsData.categories.reduce((sum, cat) => sum + cat.products.length, 0);
    generateProductDetailPages(brand, productsData);
    console.log(`  ✅ Generated ${productCount} product detail pages`);
    totalPages += productsData.categories.length + productCount;
  }
  
  if (solutionsData) {
    generateSolutionPages(brand, solutionsData);
    console.log(`  ✅ Generated ${solutionsData.solutions.length} solution pages`);
    totalPages += solutionsData.solutions.length;
  }
  
  console.log('');
});

console.log('='.repeat(60));
console.log(`🎉 All brand pages generated using EJS templates!`);
console.log(`Total pages generated: ${totalPages}`);
console.log('='.repeat(60));
