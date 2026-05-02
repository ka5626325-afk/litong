#!/usr/bin/env node
/**
 * 检查产品分类页动态表格列参数配置
 * 确保 category.parameters 与 product.specifications 匹配
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

// 获取所有品牌目录
function getAllBrands() {
  if (!fs.existsSync(DATA_DIR)) {
    return [];
  }
  return fs.readdirSync(DATA_DIR)
    .filter(name => {
      const brandPath = path.join(DATA_DIR, name);
      return fs.statSync(brandPath).isDirectory() &&
             fs.existsSync(path.join(brandPath, 'products.json'));
    })
    .sort();
}

// 检查单个品牌的 products.json
function checkBrandProducts(brand) {
  const productsPath = path.join(DATA_DIR, brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return {
      brand,
      error: 'products.json not found',
      issues: []
    };
  }

  let data;
  try {
    const content = fs.readFileSync(productsPath, 'utf-8');
    data = JSON.parse(content);
  } catch (error) {
    return {
      brand,
      error: `JSON parse error: ${error.message}`,
      issues: []
    };
  }

  const issues = [];
  const categories = data.categories || [];

  categories.forEach((category, catIndex) => {
    const catName = category.name || `Category ${catIndex}`;
    const catId = category.id || `unknown-${catIndex}`;
    
    // 检查 parameters 字段
    if (!category.parameters || !Array.isArray(category.parameters) || category.parameters.length === 0) {
      issues.push({
        type: 'missing_parameters',
        category: catName,
        message: `Category "${catName}" has no parameters defined`
      });
      return;
    }

    // 检查每个 parameter 是否有对应的 product specifications
    const products = category.products || [];
    if (products.length === 0) {
      issues.push({
        type: 'no_products',
        category: catName,
        message: `Category "${catName}" has no products`
      });
      return;
    }

    // 检查第一个产品的 specifications 是否包含所有 parameters
    const firstProduct = products[0];
    const specifications = firstProduct.specifications || {};
    
    category.parameters.forEach(param => {
      // 检查完全匹配
      if (!specifications[param]) {
        // 检查大小写不敏感匹配
        const specKeys = Object.keys(specifications);
        const paramLower = param.toLowerCase().replace(/[()\s-]/g, '');
        const matchingKey = specKeys.find(key => 
          key.toLowerCase().replace(/[()\s-]/g, '') === paramLower
        );
        
        if (!matchingKey) {
          issues.push({
            type: 'parameter_mismatch',
            category: catName,
            parameter: param,
            product: firstProduct.partNumber || firstProduct.name || 'Unknown',
            message: `Parameter "${param}" not found in product specifications`
          });
        }
      }
    });

    // 检查 products 是否有 specifications 字段
    products.forEach((product, prodIndex) => {
      if (!product.specifications || Object.keys(product.specifications).length === 0) {
        issues.push({
          type: 'missing_specifications',
          category: catName,
          product: product.partNumber || product.name || `Product ${prodIndex}`,
          message: `Product "${product.partNumber || product.name || prodIndex}" has no specifications`
        });
      }
    });
  });

  return {
    brand,
    categories: categories.length,
    issues
  };
}

// 修复品牌数据
function fixBrandProducts(brand) {
  const productsPath = path.join(DATA_DIR, brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { brand, fixed: 0, error: 'products.json not found' };
  }

  let data;
  try {
    const content = fs.readFileSync(productsPath, 'utf-8');
    data = JSON.parse(content);
  } catch (error) {
    return { brand, fixed: 0, error: `JSON parse error: ${error.message}` };
  }

  let fixed = 0;
  const categories = data.categories || [];

  categories.forEach(category => {
    const products = category.products || [];
    
    // 如果没有 parameters，根据产品类型生成默认 parameters
    if (!category.parameters || category.parameters.length === 0) {
      // 根据分类名称推断参数
      const catName = (category.name || '').toLowerCase();
      
      if (catName.includes('op-amp') || catName.includes('amplifier')) {
        category.parameters = ['Offset Voltage', 'Bandwidth', 'Slew Rate', 'Supply Voltage', 'Package'];
      } else if (catName.includes('adc') || catName.includes('dac') || catName.includes('converter')) {
        category.parameters = ['Resolution', 'Sampling Rate', 'Interface', 'Supply Voltage', 'Package'];
      } else if (catName.includes('mosfet') || catName.includes('igbt') || catName.includes('transistor')) {
        category.parameters = ['Voltage Rating', 'Current Rating', 'Rds(on)', 'Package', 'Temperature Range'];
      } else if (catName.includes('capacitor')) {
        category.parameters = ['Capacitance', 'Voltage Rating', 'Temperature Range', 'Tolerance', 'Package'];
      } else if (catName.includes('resistor')) {
        category.parameters = ['Resistance', 'Power Rating', 'Tolerance', 'Temperature Coefficient', 'Package'];
      } else if (catName.includes('power') || catName.includes('ldo') || catName.includes('dc-dc')) {
        category.parameters = ['Input Voltage', 'Output Voltage', 'Output Current', 'Efficiency', 'Package'];
      } else if (catName.includes('mcu') || catName.includes('microcontroller')) {
        category.parameters = ['Core', 'Flash Memory', 'RAM', 'Operating Voltage', 'Package'];
      } else {
        category.parameters = ['Voltage Rating', 'Current Rating', 'Package', 'Temperature Range'];
      }
      
      console.log(`  🔧 Added parameters for category "${category.name}": ${category.parameters.join(', ')}`);
      fixed++;
    }

    // 确保每个产品都有 specifications
    products.forEach(product => {
      if (!product.specifications) {
        product.specifications = {};
      }
      
      // 确保每个 parameter 都有对应的 specification
      category.parameters.forEach(param => {
        if (!product.specifications[param]) {
          // 尝试查找匹配的字段（大小写不敏感）
          const specKeys = Object.keys(product.specifications);
          const paramLower = param.toLowerCase().replace(/[()\s-]/g, '');
          const matchingKey = specKeys.find(key => 
            key.toLowerCase().replace(/[()\s-]/g, '') === paramLower
          );
          
          if (matchingKey) {
            // 如果找到匹配的键，复制值
            product.specifications[param] = product.specifications[matchingKey];
          } else {
            // 如果没有找到，添加默认值
            product.specifications[param] = 'N/A';
          }
        }
      });
    });
  });

  // 保存修复后的文件
  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf-8');
  
  return { brand, fixed };
}

// 主函数
function main() {
  const args = process.argv.slice(2);
  const fixMode = args.includes('--fix');
  const brandFilter = args.find(arg => !arg.startsWith('--'));

  console.log('========================================');
  console.log('🔍 Checking Product Category Parameters');
  console.log('========================================\n');

  const brands = brandFilter ? [brandFilter] : getAllBrands();
  
  let totalIssues = 0;
  let totalFixed = 0;
  const brandsWithIssues = [];

  brands.forEach((brand, index) => {
    console.log(`\n[${index + 1}/${brands.length}] Checking ${brand}...`);
    
    if (fixMode) {
      const result = fixBrandProducts(brand);
      if (result.fixed > 0) {
        console.log(`  ✅ Fixed ${result.fixed} issues`);
        totalFixed += result.fixed;
      } else if (result.error) {
        console.log(`  ❌ Error: ${result.error}`);
      } else {
        console.log(`  ✅ No issues found`);
      }
    } else {
      const result = checkBrandProducts(brand);
      
      if (result.error) {
        console.log(`  ❌ Error: ${result.error}`);
        return;
      }

      if (result.issues.length > 0) {
        console.log(`  ⚠️  Found ${result.issues.length} issues:`);
        result.issues.forEach(issue => {
          console.log(`    - [${issue.type}] ${issue.message}`);
        });
        totalIssues += result.issues.length;
        brandsWithIssues.push({ brand, issues: result.issues });
      } else {
        console.log(`  ✅ All parameters configured correctly (${result.categories} categories)`);
      }
    }
  });

  console.log('\n========================================');
  console.log('📊 Summary');
  console.log('========================================');
  
  if (fixMode) {
    console.log(`Total fixed: ${totalFixed}`);
  } else {
    console.log(`Total brands checked: ${brands.length}`);
    console.log(`Brands with issues: ${brandsWithIssues.length}`);
    console.log(`Total issues found: ${totalIssues}`);
    
    if (brandsWithIssues.length > 0) {
      console.log('\nBrands needing fixes:');
      brandsWithIssues.forEach(({ brand, issues }) => {
        console.log(`  - ${brand}: ${issues.length} issues`);
      });
      console.log('\nRun with --fix to automatically fix issues');
    }
  }
}

main();
