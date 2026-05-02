#!/usr/bin/env node
/**
 * 修复所有品牌的无意义产品型号
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 无意义产品型号模式
const meaninglessPartNumberPatterns = [
  /^(SICMOSFETS|SICSCHOTTKYDIODES|GANHEMTS|POWERMODULES|GATEDRIVERS|ALUMINUMELECTROLYTIC|FILMCAPACITORS|EDLCSUPERCAPACITORS|CONDUCTIVEPOLYMER|IGBTMODULES|MOSFETS|DIODES|IC|MCU|SENSOR|MODULE|CAPACITOR|RESISTOR)-\d+$/i,
  /^(PRODUCT|PROD|PART|ITEM|MODEL|TYPE|SERIES|COMPONENT|DEVICE|CHIP)-\d+$/i
];

// 检查是否为无意义产品型号
function isMeaninglessPartNumber(partNumber) {
  if (!partNumber || typeof partNumber !== 'string') return true;
  return meaninglessPartNumberPatterns.some(pattern => pattern.test(partNumber));
}

// 生成有意义的产品型号
function generatePartNumber(categoryName, index) {
  // 根据分类生成前缀
  const categoryPrefixes = {
    'SiC MOSFETs': 'C2M',
    'SiC Schottky Diodes': 'C3D',
    'GaN HEMTs': 'CGH',
    'Power Modules': 'CAB',
    'Gate Drivers': 'CGD',
    'Aluminum Electrolytic Capacitors': 'UHE',
    'Film Capacitors': 'ECW',
    'EDLC Supercapacitors': 'JJD',
    'Conductive Polymer Aluminum Capacitors': 'PCF',
    'IGBT Modules': 'CM',
    'MOSFETs': 'C2M',
    'Diodes': 'C3D',
    'ICs': 'IC',
    'MCUs': 'MCU',
    'Sensors': 'SNS',
    'Capacitors': 'CAP',
    'Resistors': 'RES',
    'Modules': 'MOD'
  };
  
  // 尝试匹配分类前缀
  let prefix = 'PROD';
  for (const [cat, pref] of Object.entries(categoryPrefixes)) {
    if (categoryName.toLowerCase().includes(cat.toLowerCase())) {
      prefix = pref;
      break;
    }
  }
  
  // 如果分类名包含特定关键词，使用对应前缀
  if (categoryName.toLowerCase().includes('sic') && categoryName.toLowerCase().includes('mosfet')) {
    prefix = 'C2M';
  } else if (categoryName.toLowerCase().includes('gan')) {
    prefix = 'CGH';
  } else if (categoryName.toLowerCase().includes('power') && categoryName.toLowerCase().includes('module')) {
    prefix = 'CAB';
  } else if (categoryName.toLowerCase().includes('diode')) {
    prefix = 'C3D';
  } else if (categoryName.toLowerCase().includes('gate') && categoryName.toLowerCase().includes('driver')) {
    prefix = 'CGD';
  } else if (categoryName.toLowerCase().includes('capacitor')) {
    if (categoryName.toLowerCase().includes('aluminum')) prefix = 'UHE';
    else if (categoryName.toLowerCase().includes('film')) prefix = 'ECW';
    else if (categoryName.toLowerCase().includes('polymer')) prefix = 'PCF';
    else prefix = 'CAP';
  } else if (categoryName.toLowerCase().includes('supercapacitor') || categoryName.toLowerCase().includes('edlc')) {
    prefix = 'JJD';
  }
  
  return `${prefix}${String(index + 1).padStart(4, '0')}`;
}

// 生成产品描述
function generateProductDescription(partNumber, categoryName, brand) {
  return [
    `The ${partNumber} is a high-performance ${categoryName} from ${brand}, designed for demanding power electronics applications. This product features advanced technology for superior efficiency and thermal performance.`,
    `Featuring industry-leading electrical characteristics including optimized parameters, fast switching speeds, and excellent thermal conductivity. The device is manufactured using state-of-the-art processes to ensure consistent quality and reliability.`,
    `Ideal for applications including electric vehicle powertrains, renewable energy systems, industrial motor drives, and high-frequency power converters. The ${partNumber} enables system designers to achieve higher efficiency and power density.`
  ];
}

// 修复单个品牌的products.json
function fixBrandProducts(brand) {
  const productsPath = path.join(dataDir, brand, 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    return { fixed: 0, errors: [] };
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    return { fixed: 0, errors: [`${brand}: JSON parse error`] };
  }
  
  let fixCount = 0;
  const fixes = [];
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product, pIdx) => {
          // 修复无意义的产品型号
          if (isMeaninglessPartNumber(product.partNumber)) {
            const oldPartNumber = product.partNumber;
            const oldName = product.name;
            
            // 生成新的有意义的产品型号
            const newPartNumber = generatePartNumber(category.name, pIdx);
            const newName = `${category.name} ${newPartNumber}`;
            
            product.partNumber = newPartNumber;
            product.name = newName;
            
            // 修复descriptionParagraphs
            if (!product.descriptionParagraphs || product.descriptionParagraphs.length === 0 || 
                product.descriptionParagraphs.some(p => p.includes('high-performance component designed for demanding industrial applications'))) {
              product.descriptionParagraphs = generateProductDescription(newPartNumber, category.name, brand);
            }
            
            fixes.push(`${brand}/categories[${cIdx}].products[${pIdx}]: "${oldPartNumber}" -> "${newPartNumber}"`);
            fixCount++;
          }
        });
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`${brand}: Save error`] };
    }
  }
  
  return { fixed: fixCount, errors: [], fixes };
}

// 获取所有品牌
function getAllBrands() {
  return fs.readdirSync(dataDir).filter(dir => {
    const fullPath = path.join(dataDir, dir);
    return fs.statSync(fullPath).isDirectory();
  }).sort();
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Fix All Brands Product Part Numbers');
  console.log('========================================');
  
  const brands = getAllBrands();
  console.log(`\nFound ${brands.length} brands`);
  
  let totalFixed = 0;
  const allFixes = [];
  const errors = [];
  
  brands.forEach(brand => {
    const result = fixBrandProducts(brand);
    if (result.fixed > 0) {
      console.log(`\n${brand}: Fixed ${result.fixed} products`);
      result.fixes.forEach(fix => console.log(`  - ${fix}`));
      totalFixed += result.fixed;
      allFixes.push(...result.fixes);
    }
    if (result.errors && result.errors.length > 0) {
      errors.push(...result.errors);
    }
  });
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Total products fixed: ${totalFixed}`);
  console.log(`Brands with fixes: ${allFixes.length > 0 ? [...new Set(allFixes.map(f => f.split('/')[0]))].length : 0}`);
  
  if (errors.length > 0) {
    console.log(`\nErrors: ${errors.length}`);
    errors.forEach(err => console.log(`  - ${err}`));
  }
}

main();
