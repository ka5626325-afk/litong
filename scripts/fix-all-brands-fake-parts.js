#!/usr/bin/env node
/**
 * 修复所有品牌的编造产品型号
 * 将编造型号替换为DATA_PENDING标记
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 编造型号模式
const fakePatterns = [
  // 通用模式
  /^[A-Z]+-\d+$/i,  // 如 PLCCHIPS-3, MICROCONTROLLERS-4
  /^(PRODUCT|PROD|PART|ITEM|MODEL|TYPE|SERIES|COMPONENT|DEVICE|CHIP)-\d+$/i,
  // 特定品牌模式
  /^SPINORFLASH-\d+$/i,
  /^SPINANDFLASH-\d+$/i,
  /^MCPMULTICHIPPACKAGE-\d+$/i,
  /^SPECIALTYMEMORY-\d+$/i,
  /^PLCCHIPS-\d+$/i,
  /^MICROCONTROLLERS-\d+$/i,
  /^RFTRANSCEIVERS-\d+$/i,
  /^MCUS-\d+$/i,
  /^SENSORS-\d+$/i,
  /^POWER-\d+$/i,
  /^ANALOG-\d+$/i,
  /^INTERFACE-\d+$/i,
  /^MEMORY-\d+$/i,
  /^LOGIC-\d+$/i,
  /^DISCRETE-\d+$/i,
  /^MODULE-\d+$/i,
  /^CONNECTOR-\d+$/i,
  /^PASSIVE-\d+$/i,
  /^CIRCUITPROTECTION-\d+$/i,
  /^ELECTROMECHANICAL-\d+$/i,
  /^OPTOELECTRONICS-\d+$/i,
  /^EMC-\d+$/i,
  /^THERMAL-\d+$/i,
  /^MECHANICAL-\d+$/i,
  /^TEST-\d+$/i,
  /^TOOLS-\d+$/i,
  /^DEVELOPMENT-\d+$/i,
  /^EVALUATION-\d+$/i,
  /^REFERENCE-\d+$/i,
  /^DEMO-\d+$/i,
  /^SAMPLE-\d+$/i,
  /^TEST-\d+$/i,
  /^EXPERIMENTAL-\d+$/i,
  /^PROTOTYPE-\d+$/i,
  /^CUSTOM-\d+$/i,
  /^SPECIAL-\d+$/i,
  /^LIMITED-\d+$/i,
  /^EXCLUSIVE-\d+$/i,
  /^PREMIUM-\d+$/i,
  /^STANDARD-\d+$/i,
  /^BASIC-\d+$/i,
  /^ADVANCED-\d+$/i,
  /^PROFESSIONAL-\d+$/i,
  /^INDUSTRIAL-\d+$/i,
  /^AUTOMOTIVE-\d+$/i,
  /^MILITARY-\d+$/i,
  /^AEROSPACE-\d+$/i,
  /^MEDICAL-\d+$/i,
  /^CONSUMER-\d+$/i,
  /^COMMERCIAL-\d+$/i,
  /^RESIDENTIAL-\d+$/i,
  /^PORTABLE-\d+$/i,
  /^MOBILE-\d+$/i,
  /^WEARABLE-\d+$/i,
  /^IOT-\d+$/i,
  /^WIRELESS-\d+$/i,
  /^WIRED-\d+$/i,
  /^OPTICAL-\d+$/i,
  /^ACOUSTIC-\d+$/i,
  /^MAGNETIC-\d+$/i,
  /^ELECTRIC-\d+$/i,
  /^HYDRAULIC-\d+$/i,
  /^PNEUMATIC-\d+$/i,
  /^THERMAL-\d+$/i,
  /^MECHANICAL-\d+$/i,
  /^ELECTROMECHANICAL-\d+$/i,
  /^ELECTROOPTICAL-\d+$/i,
  /^ELECTROACOUSTIC-\d+$/i,
  /^ELECTROMAGNETIC-\d+$/i,
  /^ELECTROTHERMAL-\d+$/i,
  /^ELECTROCHEMICAL-\d+$/i,
  /^ELECTROBIOLOGICAL-\d+$/i,
  /^ELECTROPHYSICAL-\d+$/i,
  /^ELECTROMAGNETIC-\d+$/i,
  /^ELECTROSTATIC-\d+$/i,
  /^ELECTRODYNAMIC-\d+$/i,
  /^ELECTROKINETIC-\d+$/i,
  /^ELECTROPOTENTIAL-\d+$/i,
  /^ELECTROCAPACITIVE-\d+$/i,
  /^ELECTROINDUCTIVE-\d+$/i,
  /^ELECTRORESISTIVE-\d+$/i,
  /^ELECTROCONDUCTIVE-\d+$/i,
  /^ELECTROSEMICONDUCTIVE-\d+$/i,
  /^ELECTROSUPERCONDUCTIVE-\d+$/i,
  /^ELECTROINSULATING-\d+$/i,
  /^ELECTRODIELECTRIC-\d+$/i,
  /^ELECTROPIEZOELECTRIC-\d+$/i,
  /^ELECTROPYROELECTRIC-\d+$/i,
  /^ELECTROFERROELECTRIC-\d+$/i,
  /^ELECTROMAGNETOSTRICTIVE-\d+$/i,
  /^ELECTROOPTIC-\d+$/i,
  /^ELECTROACOUSTO-\d+$/i,
  /^ELECTROTHERMO-\d+$/i,
  /^ELECTROPHOTO-\d+$/i,
  /^ELECTROCHEM-\d+$/i,
  /^ELECTROBIO-\d+$/i,
  /^ELECTROPHYS-\d+$/i,
  /^ELECTROMAG-\d+$/i,
  /^ELECTROSTAT-\d+$/i,
  /^ELECTRODYN-\d+$/i,
  /^ELECTROKIN-\d+$/i,
  /^ELECTROPOT-\d+$/i,
  /^ELECTROCAP-\d+$/i,
  /^ELECTROIND-\d+$/i,
  /^ELECTRORES-\d+$/i,
  /^ELECTROCOND-\d+$/i,
  /^ELECTROSEM-\d+$/i,
  /^ELECTROSUP-\d+$/i,
  /^ELECTROINS-\d+$/i,
  /^ELECTRODIEL-\d+$/i,
  /^ELECTROPIEZ-\d+$/i,
  /^ELECTROPYRO-\d+$/i,
  /^ELECTROFERR-\d+$/i,
  /^ELECTROMAGST-\d+$/i,
  /^ELECTROOPT-\d+$/i,
  /^ELECTROACOU-\d+$/i,
  /^ELECTROTHERM-\d+$/i,
  /^ELECTROPHOT-\d+$/i,
  /^ELECTROCHE-\d+$/i,
  /^ELECTROBI-\d+$/i,
  /^ELECTROPHY-\d+$/i
];

// 检查是否为编造型号
function isFakePartNumber(partNumber) {
  if (!partNumber || typeof partNumber !== 'string') return true;
  return fakePatterns.some(pattern => pattern.test(partNumber));
}

// 获取所有品牌
function getAllBrands() {
  return fs.readdirSync(dataDir).filter(dir => {
    const fullPath = path.join(dataDir, dir);
    return fs.statSync(fullPath).isDirectory();
  }).sort();
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
  let hasChanges = false;
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category) => {
      if (category.products && Array.isArray(category.products)) {
        category.products.forEach((product) => {
          if (isFakePartNumber(product.partNumber)) {
            // 替换为DATA_PENDING
            product.partNumber = 'DATA_PENDING';
            product.name = `${category.name} (Data Pending)`;
            product.shortDescription = '[Data Pending] Official product information to be added from manufacturer datasheet.';
            product.descriptionParagraphs = [
              '[Data Pending] Product description to be added from official manufacturer documentation.',
              '[Data Pending] Technical specifications to be verified against official datasheet.',
              '[Data Pending] Application information to be confirmed with manufacturer.'
            ];
            product.specifications = {
              'Status': 'Data pending - to be updated from official source'
            };
            
            // 清理替代料号
            if (product.alternativeParts) {
              product.alternativeParts = [];
            }
            
            // 清理配套料号
            if (product.companionParts) {
              product.companionParts = [];
            }
            
            fixCount++;
            hasChanges = true;
          }
        });
      }
    });
  }
  
  if (hasChanges) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      return { fixed: fixCount, errors: [`${brand}: Save error`] };
    }
  }
  
  return { fixed: fixCount, errors: [] };
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Fix All Brands Fake Part Numbers');
  console.log('========================================');
  console.log('Replacing fabricated part numbers with "DATA_PENDING" markers\n');
  
  const brands = getAllBrands();
  console.log(`Found ${brands.length} brands\n`);
  
  let totalFixed = 0;
  const errors = [];
  const fixedBrands = [];
  
  brands.forEach(brand => {
    const result = fixBrandProducts(brand);
    if (result.fixed > 0) {
      console.log(`${brand}: Fixed ${result.fixed} fake part numbers`);
      totalFixed += result.fixed;
      fixedBrands.push(brand);
    }
    if (result.errors.length > 0) {
      errors.push(...result.errors);
    }
  });
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Total fake part numbers fixed: ${totalFixed}`);
  console.log(`Brands with fixes: ${fixedBrands.length}`);
  
  if (fixedBrands.length > 0) {
    console.log(`\nFixed brands: ${fixedBrands.join(', ')}`);
  }
  
  if (errors.length > 0) {
    console.log(`\nErrors: ${errors.length}`);
    errors.forEach(err => console.log(`  - ${err}`));
  }
  
  console.log('\n⚠️  All fabricated part numbers have been marked as "DATA_PENDING"');
  console.log('⚠️  You must manually add real data from official manufacturer sources');
  
  // 返回需要重新生成的品牌列表
  return fixedBrands;
}

const fixedBrands = main();

// 导出需要重新生成的品牌列表
module.exports = { fixedBrands };
