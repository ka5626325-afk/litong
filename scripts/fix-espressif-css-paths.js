#!/usr/bin/env node
/**
 * Fix CSS paths in Espressif generated HTML files
 */

const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'output', 'espressif');

console.log('🔧 Fixing CSS paths in Espressif HTML files...\n');

// Fix products
const productsDir = path.join(brandDir, 'products');
const categories = ['wifi-socs', 'bluetooth-socs', 'combo-modules', 'development-boards'];

categories.forEach(cat => {
  const catDir = path.join(productsDir, cat);
  if (fs.existsSync(catDir)) {
    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.html'));
    files.forEach(file => {
      const filePath = path.join(catDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix CSS path from ../../../assets/ to ../../../../assets/
      content = content.replace(/href="\.\.\/\.\.\/\.\.\//g, 'href="../../../../');
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed CSS paths: products/${cat}/${file}`);
    });
  }
});

// Fix solutions
const solutionsDir = path.join(brandDir, 'solutions');
if (fs.existsSync(solutionsDir)) {
  const files = fs.readdirSync(solutionsDir).filter(f => f.endsWith('.html'));
  files.forEach(file => {
    const filePath = path.join(solutionsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix CSS path from ../../assets/ to ../../../assets/
    content = content.replace(/href="\.\.\/\.\.\//g, 'href="../../../');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed CSS paths: solutions/${file}`);
  });
}

console.log('\n✅ All CSS paths have been fixed!');
