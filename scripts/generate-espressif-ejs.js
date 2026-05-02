#!/usr/bin/env node
/**
 * Generate Espressif brand pages using EJS templates
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

console.log(`🔧 Generating ${brand} brand pages using EJS templates...\n`);

// Load brand data
const brandData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'brand.json'), 'utf8'));
const productsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'products.json'), 'utf8'));
const solutionsData = JSON.parse(fs.readFileSync(path.join(config.dataDir, brand, 'solutions.json'), 'utf8'));

const brandOutputDir = path.join(config.outputDir, brand);

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Load and compile EJS template
function compileTemplate(templatePath) {
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  return ejs.compile(templateContent, { filename: templatePath });
}

// Load component templates
function loadComponent(componentName) {
  const componentPath = path.join(config.templatesDir, 'components', `${componentName}.html`);
  if (fs.existsSync(componentPath)) {
    return fs.readFileSync(componentPath, 'utf8');
  }
  return '';
}

// Generate product pages
function generateProductPages() {
  console.log('📦 Generating product pages...');
  
  // Load product detail template
  const productTemplatePath = path.join(config.templatesDir, 'brands', 'product-detail.html');
  
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
        const template = compileTemplate(productTemplatePath);
        html = template(templateData);
      } catch (err) {
        console.error(`❌ Error compiling template for ${product.partNumber}:`, err.message);
        // Fallback to simple HTML
        html = generateSimpleProductHtml(product, category, brandData);
      }
      
      // Fix CSS paths for nested directory
      html = html.replace(/href="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'href="../../../../assets/');
      html = html.replace(/src="<%= brand \? '\.\.\/\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'src="../../../../assets/');
      
      // Replace SSI includes with rendered content
      html = replaceIncludes(html, templateData);
      
      // Save file
      const catDir = path.join(brandOutputDir, 'products', category.slug);
      ensureDir(catDir);
      
      const fileName = `${product.partNumber.toLowerCase().replace(/\s+/g, '-')}.html`;
      fs.writeFileSync(path.join(catDir, fileName), html);
      console.log(`✅ Generated: products/${category.slug}/${fileName}`);
    });
  });
}

// Replace SSI includes with rendered EJS content
function replaceIncludes(html, data) {
  // Replace navbar include
  const navbarMatch = html.match(/<!--#include virtual="\/templates\/components\/navbar.html" -->/);
  if (navbarMatch) {
    const navbarContent = loadComponent('navbar');
    html = html.replace(navbarMatch[0], navbarContent);
  }
  
  // Replace footer include
  const footerMatch = html.match(/<!--#include virtual="\/templates\/components\/footer.html" -->/);
  if (footerMatch) {
    const footerContent = loadComponent('footer');
    html = html.replace(footerMatch[0], footerContent);
  }
  
  // Replace breadcrumb include - render with EJS
  const breadcrumbMatch = html.match(/<!--#include virtual="\/templates\/components\/breadcrumb.html" -->/);
  if (breadcrumbMatch) {
    let breadcrumbContent = loadComponent('breadcrumb');
    // Render breadcrumb with EJS
    try {
      breadcrumbContent = ejs.render(breadcrumbContent, data);
    } catch (err) {
      console.log('⚠️  Could not render breadcrumb with EJS, using static content');
    }
    html = html.replace(breadcrumbMatch[0], breadcrumbContent);
  }
  
  // Replace brand-tab-nav include
  const brandTabNavMatch = html.match(/<!--#include virtual="\/templates\/components\/brand-tab-nav.html" -->/);
  if (brandTabNavMatch) {
    let brandTabNavContent = loadComponent('brand-tab-nav');
    // Render with EJS
    try {
      brandTabNavContent = ejs.render(brandTabNavContent, data);
    } catch (err) {
      console.log('⚠️  Could not render brand-tab-nav with EJS, using static content');
    }
    html = html.replace(brandTabNavMatch[0], brandTabNavContent);
  }
  
  // Replace floating-contact include
  const floatingContactMatch = html.match(/<!--#include virtual="\/templates\/components\/floating-contact.html" -->/);
  if (floatingContactMatch) {
    const floatingContactContent = loadComponent('floating-contact');
    html = html.replace(floatingContactMatch[0], floatingContactContent);
  }
  
  return html;
}

// Fallback simple HTML generator
function generateSimpleProductHtml(product, category, brand) {
  const cssPath = '../../../../assets/css';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.partNumber} | ${brand.displayName} | Core Distributor</title>
  <link rel="stylesheet" href="${cssPath}/style.css">
  <link rel="stylesheet" href="${cssPath}/navbar.css">
  <link rel="stylesheet" href="${cssPath}/footer.css">
</head>
<body>
  ${loadComponent('navbar')}
  <main class="container" style="padding: 40px 0;">
    <h1>${product.partNumber}</h1>
    <p>${product.shortDescription}</p>
  </main>
  ${loadComponent('footer')}
</body>
</html>`;
}

// Generate solution pages
function generateSolutionPages() {
  console.log('\n🔧 Generating solution pages...');
  
  const solutionTemplatePath = path.join(config.templatesDir, 'brands', 'solution-detail.html');
  
  solutionsData.solutions.forEach(solution => {
    const templateData = {
      solution: solution,
      brand: brandData,
      solutions: solutionsData.solutions,
      pageTitle: solution.title
    };
    
    let html;
    try {
      const template = compileTemplate(solutionTemplatePath);
      html = template(templateData);
    } catch (err) {
      console.error(`❌ Error compiling template for ${solution.id}:`, err.message);
      html = generateSimpleSolutionHtml(solution, brandData);
    }
    
    // Fix CSS paths
    html = html.replace(/href="<%= brand \? '\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'href="../../../assets/');
    html = html.replace(/src="<%= brand \? '\.\.\/\.\.' : '\.\.' %>\/assets\//g, 'src="../../../assets/');
    
    // Replace includes
    html = replaceIncludes(html, templateData);
    
    const fileName = `${solution.slug}.html`;
    fs.writeFileSync(path.join(brandOutputDir, 'solutions', fileName), html);
    console.log(`✅ Generated: solutions/${fileName}`);
  });
}

// Fallback simple solution HTML
function generateSimpleSolutionHtml(solution, brand) {
  const cssPath = '../../../assets/css';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${solution.title} | ${brand.displayName} | Solutions</title>
  <link rel="stylesheet" href="${cssPath}/style.css">
  <link rel="stylesheet" href="${cssPath}/navbar.css">
  <link rel="stylesheet" href="${cssPath}/footer.css">
</head>
<body>
  ${loadComponent('navbar')}
  <main class="container" style="padding: 40px 0;">
    <h1>${solution.title}</h1>
    <p>${solution.description}</p>
  </main>
  ${loadComponent('footer')}
</body>
</html>`;
}

// Main execution
console.log('🚀 Starting Espressif brand page generation...\n');

ensureDir(brandOutputDir);
ensureDir(path.join(brandOutputDir, 'products'));
ensureDir(path.join(brandOutputDir, 'solutions'));
ensureDir(path.join(brandOutputDir, 'support'));

generateProductPages();
generateSolutionPages();

console.log('\n✅ Espressif brand pages generated with EJS templates!');
