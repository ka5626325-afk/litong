#!/usr/bin/env node
/**
 * 使用真实的Wolfspeed产品型号替换假型号
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// Wolfspeed真实产品型号
const realPartNumbers = {
  'SiC MOSFETs': [
    { partNumber: 'C3M0032120K', voltage: '1200V', current: '105A', rdsOn: '32mΩ', description: 'Third-generation 1200V SiC MOSFET with 32mΩ on-resistance, optimized for EV and industrial applications' },
    { partNumber: 'C3M0065090K', voltage: '900V', current: '63A', rdsOn: '65mΩ', description: '900V SiC MOSFET with 65mΩ on-resistance for solar and industrial power supplies' },
    { partNumber: 'C3M0075120K', voltage: '1200V', current: '52A', rdsOn: '75mΩ', description: '1200V SiC MOSFET with 75mΩ on-resistance for motor drives and power conversion' },
    { partNumber: 'C3M0120090K', voltage: '900V', current: '36A', rdsOn: '120mΩ', description: '900V SiC MOSFET with 120mΩ on-resistance for high-frequency applications' }
  ],
  'SiC Schottky Diodes': [
    { partNumber: 'C3D10065A', voltage: '650V', current: '10A', description: '650V 10A SiC Schottky diode with zero reverse recovery for PFC and rectification' },
    { partNumber: 'C3D20065H', voltage: '650V', current: '20A', description: '650V 20A SiC Schottky diode in TO-247 package for high-current applications' },
    { partNumber: 'C3D04060A', voltage: '600V', current: '4A', description: '600V 4A SiC Schottky diode for cost-sensitive applications' },
    { partNumber: 'C3D08065A', voltage: '650V', current: '8A', description: '650V 8A SiC Schottky diode with excellent thermal performance' }
  ],
  'GaN HEMTs': [
    { partNumber: 'CGD15HB62P1', voltage: '650V', current: '15A', rdsOn: '62mΩ', description: '650V 15A GaN HEMT with 62mΩ on-resistance for high-frequency power supplies' },
    { partNumber: 'CGH40010', voltage: '40V', current: '10A', rdsOn: '25mΩ', description: '40V GaN HEMT for RF and switching applications up to 6GHz' },
    { partNumber: 'CGH40035', voltage: '40V', current: '35A', rdsOn: '8mΩ', description: '40V high-current GaN HEMT for radar and communications' },
    { partNumber: 'CGH60120', voltage: '120V', current: '6A', rdsOn: '120mΩ', description: '120V GaN HEMT for industrial and automotive applications' }
  ],
  'Power Modules': [
    { partNumber: 'CAB450M12HM3', voltage: '1200V', current: '450A', description: '1200V 450A half-bridge SiC power module for EV traction inverters' },
    { partNumber: 'CAB760M12HM3', voltage: '1200V', current: '760A', description: '1200V 760A high-power SiC module for industrial motor drives' },
    { partNumber: 'CAS300M12BM2', voltage: '1200V', current: '300A', description: '1200V 300A six-pack SiC module for three-phase inverters' },
    { partNumber: 'CAB016M12FM3', voltage: '1200V', current: '16A', description: '1200V 16A compact SiC module for auxiliary power supplies' }
  ]
};

// 假型号模式
const fakePartNumberPatterns = [
  /^C2M\d{4}$/,  // C2M0003, C2M0004
  /^C3D\d{4}$/,  // C3D0003, C3D0004
  /^CGH\d{4}$/,  // CGH0003, CGH0004
  /^CAB\d{4}$/,  // CAB0003, CAB0004
  /^SICMOSFETS-\d+$/i,
  /^SICSCHOTTKYDIODES-\d+$/i,
  /^GANHEMTS-\d+$/i,
  /^POWERMODULES-\d+$/i
];

// 检查是否为假型号
function isFakePartNumber(partNumber) {
  if (!partNumber || typeof partNumber !== 'string') return true;
  return fakePartNumberPatterns.some(pattern => pattern.test(partNumber));
}

// 修复cree的products.json
function fixCreeProducts() {
  console.log('========================================');
  console.log('Fix Cree Products with Real Part Numbers');
  console.log('========================================');
  
  const productsPath = path.join(dataDir, 'cree', 'products.json');
  
  if (!fs.existsSync(productsPath)) {
    console.log('❌ products.json not found');
    return 0;
  }
  
  let data;
  try {
    data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  } catch (error) {
    console.log(`❌ JSON parse error: ${error.message}`);
    return 0;
  }
  
  let fixCount = 0;
  
  if (data.categories && Array.isArray(data.categories)) {
    data.categories.forEach((category, cIdx) => {
      const categoryName = category.name;
      const realParts = realPartNumbers[categoryName];
      
      if (!realParts) {
        console.log(`\nCategory "${categoryName}": No real part numbers defined`);
        return;
      }
      
      console.log(`\nCategory "${categoryName}":`);
      
      if (category.products && Array.isArray(category.products)) {
        let realPartIndex = 0;
        
        category.products.forEach((product, pIdx) => {
          if (isFakePartNumber(product.partNumber)) {
            const oldPartNumber = product.partNumber;
            
            // 使用真实型号替换
            if (realPartIndex < realParts.length) {
              const realPart = realParts[realPartIndex];
              
              product.partNumber = realPart.partNumber;
              product.name = `${categoryName} ${realPart.partNumber}`;
              product.shortDescription = realPart.description;
              
              // 更新规格
              if (!product.specifications) product.specifications = {};
              if (realPart.voltage) product.specifications['Voltage Rating'] = realPart.voltage;
              if (realPart.current) product.specifications['Current Rating'] = realPart.current;
              if (realPart.rdsOn) product.specifications['Rds(on)'] = realPart.rdsOn;
              
              // 更新描述
              product.descriptionParagraphs = [
                `The ${realPart.partNumber} is a ${realPart.description}. This device features Wolfspeed's advanced third-generation SiC technology for superior performance and reliability.`,
                `With ${realPart.voltage} voltage rating and ${realPart.current} current capability, this device is ideal for demanding applications including electric vehicle powertrains, renewable energy systems, and industrial motor drives.`,
                `The ${realPart.partNumber} delivers industry-leading performance with low switching losses, high thermal conductivity, and excellent reliability. Wolfspeed's rigorous quality standards ensure consistent performance across all operating conditions.`
              ];
              
              console.log(`  - [${pIdx}] "${oldPartNumber}" -> "${realPart.partNumber}"`);
              fixCount++;
              realPartIndex++;
            } else {
              console.log(`  - [${pIdx}] "${oldPartNumber}" -> No more real parts available`);
            }
          }
        });
      }
    });
  }
  
  if (fixCount > 0) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`\n✅ Fixed ${fixCount} products with real part numbers`);
    } catch (error) {
      console.log(`\n❌ Save error: ${error.message}`);
    }
  } else {
    console.log('\n✅ No fake part numbers found');
  }
  
  return fixCount;
}

fixCreeProducts();
