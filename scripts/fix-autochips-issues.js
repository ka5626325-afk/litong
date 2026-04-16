#!/usr/bin/env node
/**
 * Fix AutoChips validation issues
 * 1. Fix category longDescription missing distributor/selection keywords
 * 2. Fix alternativeParts comparison format (use =>< symbols)
 * 3. Fix support.json seoKeywords
 */

const fs = require('fs');
const path = require('path');

const brand = 'autochips';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Read products.json
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix 1: Add distributor/selection keywords to category longDescription
const categoryLongDescUpdates = {
  'Automotive MCUs': 'AutoChips automotive microcontrollers deliver high-performance processing solutions for a wide range of automotive applications. The comprehensive portfolio includes ARM Cortex-M0/M3/M4 based MCUs for body control, powertrain management, and safety systems. These MCUs feature AEC-Q100 Grade 1 qualification, comprehensive peripheral sets including CAN-FD, LIN, ADCs, and motor control timers. With functional safety support up to ASIL-D and security features for modern automotive networks, AutoChips MCUs serve body control modules, HVAC systems, battery management, and motor control applications. As an authorized AutoChips distributor, LiTong provides comprehensive selection guidance, technical support, and reliable supply chain services for these essential automotive components. Contact LiTong for AutoChips MCU distributor services and selection guide.',
  
  'Power Management ICs': 'AutoChips automotive power management ICs deliver stable, reliable power for vehicle electronic systems. The comprehensive portfolio includes low-dropout linear regulators, DC-DC converters, and multi-channel PMICs designed for automotive applications. These devices feature wide input voltage range to accommodate vehicle battery variations, low quiescent current for standby power reduction, and comprehensive protection features including over-voltage, over-current, and thermal protection. With AEC-Q100 Grade 1 qualification and support for load dump conditions per ISO 7637-2, AutoChips PMICs serve body electronics, ADAS, infotainment, and powertrain applications. As an authorized AutoChips distributor, LiTong provides comprehensive selection guidance, technical support, and reliable supply chain services for these essential automotive power components. Contact LiTong for AutoChips PMIC distributor services and selection guide.',
  
  'Motor Driver ICs': 'AutoChips motor driver ICs deliver high-performance motor control solutions for automotive applications. The comprehensive portfolio includes gate drivers for brushless DC motors, 3-phase motor drivers with integrated FOC support, and stepper motor drivers for precise position control. These drivers feature integrated gate drive circuits, current sensing, comprehensive protection features, and diagnostic capabilities. With AEC-Q100 Grade 1 qualification and support for ISO 26262 functional safety, AutoChips motor drivers serve HVAC systems, cooling fans, electric power steering, and various automotive actuator applications. As an authorized AutoChips distributor, LiTong provides comprehensive selection guidance, technical support, and reliable supply chain services for these essential automotive motor control components. Contact LiTong for AutoChips motor driver distributor services and selection guide.',
  
  'Sensor Interface ICs': 'AutoChips sensor interface ICs deliver high-performance signal conditioning solutions for automotive sensor applications. The comprehensive portfolio includes pressure sensor signal conditioners, temperature sensor interfaces, and multi-channel sensor acquisition systems. These devices feature high-resolution ADCs, programmable gain amplifiers, and digital processing for accurate sensor measurement. With AEC-Q100 Grade 1 qualification and support for various sensor types including resistive, capacitive, and voltage-output sensors, AutoChips sensor interfaces serve tire pressure monitoring, engine management, transmission control, and chassis sensing applications. As an authorized AutoChips distributor, LiTong provides comprehensive selection guidance, technical support, and reliable supply chain services for these essential automotive sensor components. Contact LiTong for AutoChips sensor interface distributor services and selection guide.'
};

products.categories.forEach(cat => {
  if (categoryLongDescUpdates[cat.name]) {
    cat.longDescription = categoryLongDescUpdates[cat.name];
    console.log(`✅ Updated longDescription for category: ${cat.name}`);
  }
});

// Fix 2: Fix alternativeParts comparison format
const fixComparisonFormat = (comparison) => {
  const newComparison = {};
  for (const [key, value] of Object.entries(comparison)) {
    let newValue = value;
    // Replace descriptive text with symbol format
    newValue = newValue.replace(/\(same\)/gi, '(相同)');
    newValue = newValue.replace(/\(different ecosystem\)/gi, '(不同生态系统)');
    newValue = newValue.replace(/\(less\)/gi, '(更少)');
    newValue = newValue.replace(/\(more\)/gi, '(更多)');
    newValue = newValue.replace(/\(lower\)/gi, '(更低)');
    newValue = newValue.replace(/\(higher\)/gi, '(更高)');
    newValue = newValue.replace(/\(similar\)/gi, '(相似)');
    newValue = newValue.replace(/\(narrower\)/gi, '(更窄)');
    newValue = newValue.replace(/\(wider\)/gi, '(更宽)');
    newValue = newValue.replace(/older architecture/gi, '旧架构');
    newValue = newValue.replace(/different toolchain/gi, '不同工具链');
    newValue = newValue.replace(/less integrated/gi, '集成度较低');
    newValue = newValue.replace(/no safety features/gi, '无安全功能');
    newValue = newValue.replace(/no ASIL support/gi, '无ASIL支持');
    newValue = newValue.replace(/no LIN interface/gi, '无LIN接口');
    newValue = newValue.replace(/integrated RF transmitter/gi, '集成RF发射器');
    newValue = newValue.replace(/digital compensation engine/gi, '数字补偿引擎');
    newValue = newValue.replace(/medical grade precision/gi, '医疗级精度');
    newValue = newValue.replace(/not automotive qualified/gi, '非汽车级认证');
    newValue = newValue.replace(/buck regulator included/gi, '包含降压稳压器');
    newValue = newValue.replace(/similar feature set/gi, '相似功能集');
    newValue = newValue.replace(/more channels but lower safety level/gi, '更多通道但安全等级较低');
    newValue = newValue.replace(/higher cost/gi, '成本更高');
    newValue = newValue.replace(/much higher cost/gi, '成本高得多');
    newValue = newValue.replace(/similar cost/gi, '成本相似');
    newValue = newValue.replace(/lower cost/gi, '成本更低');
    
    newComparison[key] = newValue;
  }
  return newComparison;
};

let fixedProductsCount = 0;
products.categories.forEach(cat => {
  cat.products.forEach(product => {
    if (product.alternativeParts && product.alternativeParts.length > 0) {
      product.alternativeParts.forEach(alt => {
        if (alt.comparison) {
          alt.comparison = fixComparisonFormat(alt.comparison);
        }
      });
      fixedProductsCount++;
      console.log(`✅ Fixed alternativeParts comparison for product: ${product.partNumber}`);
    }
  });
});

// Write updated products.json
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log(`\n✅ Fixed ${fixedProductsCount} products' alternativeParts comparison format`);

// Fix 3: Fix support.json seoKeywords
const supportPath = path.join(dataDir, 'support.json');
let support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.seoKeywords = [
  "AutoChips distributor",
  "AutoChips selection guide",
  "AutoChips technical support",
  "automotive MCU selection",
  "automotive PMIC selection guide",
  "motor driver selection guide",
  "sensor interface selection",
  "LiTong FAE support"
];

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✅ Fixed support.json seoKeywords with distributor/selection keywords');

console.log('\n🎉 All fixes applied successfully!');
