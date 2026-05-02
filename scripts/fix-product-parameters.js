#!/usr/bin/env node
/**
 * 修复产品分类页表格列参数
 * 根据产品实际字段生成合适的 parameters 配置
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 品牌特定的参数映射配置
const brandParameterConfigs = {
  // 功率半导体品牌 (IGBT, MOSFET, SiC)
  'byd': {
    'igbt-modules': ['Voltage', 'Current', 'Vce(sat)', 'Package', 'Technology'],
    'sic-mosfets': ['Voltage', 'Current', 'Rds(on)', 'Package', 'Technology'],
    'intelligent-power-modules': ['Voltage', 'Current', 'Package', 'Topology', 'Applications'],
    'power-mosfets': ['Voltage', 'Current', 'Rds(on)', 'Package', 'Technology']
  },
  'infineon': {
    'igbt-modules': ['Voltage', 'Current', 'Vce(sat)', 'Switching Energy', 'Package'],
    'mosfets': ['Voltage', 'Current', 'Rds(on)', 'Qg', 'Package'],
    'sic-devices': ['Voltage', 'Current', 'Rds(on)', 'Switching Losses', 'Package'],
    'gate-drivers': ['Channels', 'Isolation', 'Peak Current', 'Propagation Delay', 'Package']
  },
  // 电容品牌
  'capxon': {
    'radial-lead-capacitors': ['Capacitance', 'Voltage Rating', 'Ripple Current', 'Temperature Range', 'Lifetime'],
    'snap-in-capacitors': ['Capacitance', 'Voltage Rating', 'Ripple Current', 'Temperature Range', 'Lifetime'],
    'smd-capacitors': ['Capacitance', 'Voltage Rating', 'Temperature Range', 'Size', 'Lifetime'],
    'automotive-capacitors': ['Capacitance', 'Voltage Rating', 'Temperature Range', 'AEC-Q200', 'Lifetime']
  },
  // MCU品牌
  'espressif': {
    'wifi-modules': ['Processor', 'Flash', 'RAM', 'Wi-Fi', 'Bluetooth'],
    'mcu': ['Core', 'Frequency', 'Flash', 'RAM', 'GPIO'],
    'development-boards': ['Processor', 'Flash', 'RAM', 'Features', 'Price']
  },
  // 电源管理品牌
  'ti': {
    'power-management': ['Input Voltage', 'Output Voltage', 'Output Current', 'Efficiency', 'Package'],
    'dcdc-converters': ['Input Voltage', 'Output Voltage', 'Current', 'Frequency', 'Package'],
    'ldo': ['Input Voltage', 'Output Voltage', 'Current', 'Dropout', 'Package']
  }
};

// 通用参数映射（根据产品字段推断）
const fieldToParameterMap = {
  // 电压相关
  'voltage': 'Voltage',
  'voltageRating': 'Voltage Rating',
  'inputVoltage': 'Input Voltage',
  'outputVoltage': 'Output Voltage',
  'ratedVoltage': 'Rated Voltage',
  'maxVoltage': 'Max Voltage',
  'collectorEmitterVoltage': 'Vce',
  'drainSourceVoltage': 'Vds',
  'breakdownVoltage': 'Breakdown Voltage',
  'isolationVoltage': 'Isolation Voltage',
  
  // 电流相关
  'current': 'Current',
  'currentRating': 'Current Rating',
  'outputCurrent': 'Output Current',
  'maxCurrent': 'Max Current',
  'collectorCurrent': 'Ic',
  'drainCurrent': 'Id',
  'continuousCurrent': 'Continuous Current',
  'peakCurrent': 'Peak Current',
  'rippleCurrent': 'Ripple Current',
  
  // 电阻/阻抗
  'rdsOn': 'Rds(on)',
  'onResistance': 'On-Resistance',
  'esr': 'ESR',
  'resistance': 'Resistance',
  
  // 功率
  'power': 'Power',
  'powerRating': 'Power Rating',
  'outputPower': 'Output Power',
  
  // 频率
  'frequency': 'Frequency',
  'switchingFrequency': 'Switching Frequency',
  'operatingFrequency': 'Operating Frequency',
  'clockSpeed': 'Clock Speed',
  'bandwidth': 'Bandwidth',
  
  // 容值
  'capacitance': 'Capacitance',
  'capacitanceValue': 'Capacitance',
  
  // 封装
  'package': 'Package',
  'packageType': 'Package Type',
  'caseSize': 'Case Size',
  'dimensions': 'Dimensions',
  'footprint': 'Footprint',
  
  // 温度
  'temperature': 'Temperature Range',
  'temperatureRange': 'Temperature Range',
  'operatingTemperature': 'Operating Temperature',
  'junctionTemperature': 'Tj',
  
  // 损耗/效率
  'vceSat': 'Vce(sat)',
  'saturationVoltage': 'Vce(sat)',
  'forwardVoltage': 'Vf',
  'efficiency': 'Efficiency',
  'switchingLosses': 'Switching Losses',
  
  // 时间/速度
  'switchingSpeed': 'Switching Speed',
  'riseTime': 'Rise Time',
  'fallTime': 'Fall Time',
  'propagationDelay': 'Propagation Delay',
  
  // 存储
  'flash': 'Flash',
  'flashMemory': 'Flash Memory',
  'sram': 'SRAM',
  'ram': 'RAM',
  'memory': 'Memory',
  
  // 其他
  'technology': 'Technology',
  'topology': 'Topology',
  'channels': 'Channels',
  'isolation': 'Isolation',
  'protection': 'Protection',
  'standards': 'Standards',
  'qualification': 'Qualification',
  'lifetime': 'Lifetime',
  'mtbf': 'MTBF'
};

// 获取所有品牌目录
function getBrandDirs() {
  if (!fs.existsSync(dataDir)) {
    console.error('Data directory not found:', dataDir);
    return [];
  }
  
  return fs.readdirSync(dataDir)
    .filter(dir => {
      const dirPath = path.join(dataDir, dir);
      return fs.statSync(dirPath).isDirectory() && 
             fs.existsSync(path.join(dirPath, 'products.json'));
    })
    .sort();
}

// 从产品字段推断合适的参数
function inferParametersFromProduct(product, categoryId) {
  const parameters = [];
  const productFields = Object.keys(product);
  
  // 添加产品直接字段
  productFields.forEach(field => {
    const paramName = fieldToParameterMap[field];
    if (paramName && !parameters.includes(paramName)) {
      parameters.push(paramName);
    }
  });
  
  // 添加 specifications 中的字段
  if (product.specifications) {
    const specFields = Object.keys(product.specifications);
    specFields.forEach(field => {
      const paramName = fieldToParameterMap[field];
      if (paramName && !parameters.includes(paramName)) {
        parameters.push(paramName);
      }
    });
  }
  
  // 如果没有推断出参数，使用默认参数
  if (parameters.length === 0) {
    return ['Part Number', 'Description', 'Package', 'Status'];
  }
  
  // 限制最多7个参数
  return parameters.slice(0, 7);
}

// 修复单个品牌
function fixBrand(brand) {
  const brandDir = path.join(dataDir, brand);
  const productsPath = path.join(brandDir, 'products.json');
  
  console.log(`\n========================================`);
  console.log(`Fixing brand: ${brand}`);
  console.log(`========================================`);
  
  let productsData;
  try {
    const content = fs.readFileSync(productsPath, 'utf8');
    productsData = JSON.parse(content);
  } catch (error) {
    console.error(`  ❌ Error reading products.json: ${error.message}`);
    return { brand, status: 'error', error: error.message };
  }
  
  if (!productsData.categories || !Array.isArray(productsData.categories)) {
    console.error(`  ❌ No categories found`);
    return { brand, status: 'error', error: 'No categories' };
  }
  
  let hasChanges = false;
  
  productsData.categories.forEach((category, idx) => {
    const categoryId = category.id || `category-${idx}`;
    console.log(`\n  Category: ${category.name || categoryId}`);
    
    // 检查是否需要修复 parameters
    const needsFix = !category.parameters || 
                     !Array.isArray(category.parameters) || 
                     category.parameters.length === 0;
    
    if (needsFix) {
      console.log(`    ⚠️  Parameters missing or empty, fixing...`);
      
      // 获取品牌特定配置
      const brandConfig = brandParameterConfigs[brand];
      const categoryConfig = brandConfig ? brandConfig[categoryId] : null;
      
      if (categoryConfig) {
        // 使用预定义配置
        category.parameters = categoryConfig;
        console.log(`    ✅ Applied predefined parameters: ${category.parameters.join(', ')}`);
      } else if (category.products && category.products.length > 0) {
        // 从产品字段推断
        const sampleProduct = category.products[0];
        category.parameters = inferParametersFromProduct(sampleProduct, categoryId);
        console.log(`    ✅ Inferred parameters from product fields: ${category.parameters.join(', ')}`);
      } else {
        // 使用默认参数
        category.parameters = ['Part Number', 'Description', 'Package', 'Status'];
        console.log(`    ✅ Applied default parameters: ${category.parameters.join(', ')}`);
      }
      
      hasChanges = true;
    } else {
      console.log(`    ✅ Parameters already defined: ${category.parameters.join(', ')}`);
    }
    
    // 确保每个产品有对应的参数字段
    if (category.products && category.products.length > 0) {
      category.products.forEach((product, pIdx) => {
        // 确保 specifications 对象存在
        if (!product.specifications) {
          product.specifications = {};
        }
        
        // 根据 parameters 填充 specifications
        category.parameters.forEach(param => {
          const paramKey = param.toLowerCase().replace(/[^a-z0-9]/g, '');
          
          // 检查是否已有值
          let hasValue = false;
          
          // 检查 product 直接字段
          for (const field of Object.keys(product)) {
            const fieldKey = field.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (fieldKey === paramKey && product[field]) {
              hasValue = true;
              break;
            }
          }
          
          // 检查 specifications
          if (!hasValue) {
            for (const field of Object.keys(product.specifications)) {
              const fieldKey = field.toLowerCase().replace(/[^a-z0-9]/g, '');
              if (fieldKey === paramKey && product.specifications[field]) {
                hasValue = true;
                break;
              }
            }
          }
          
          // 如果没有值，根据参数类型添加默认值
          if (!hasValue) {
            const defaultValues = {
              'voltage': '600V',
              'current': '100A',
              'power': '100W',
              'frequency': '100kHz',
              'capacitance': '100uF',
              'resistance': '10Ω',
              'temperature': '-40°C to +85°C',
              'package': 'Standard',
              'technology': 'Standard'
            };
            
            for (const [key, value] of Object.entries(defaultValues)) {
              if (paramKey.includes(key)) {
                product.specifications[param] = value;
                hasChanges = true;
                break;
              }
            }
          }
        });
      });
    }
  });
  
  // 保存修改
  if (hasChanges) {
    try {
      fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
      console.log(`\n  ✅ Saved changes to ${productsPath}`);
      return { brand, status: 'fixed' };
    } catch (error) {
      console.error(`\n  ❌ Error saving file: ${error.message}`);
      return { brand, status: 'error', error: error.message };
    }
  } else {
    console.log(`\n  ✅ No changes needed`);
    return { brand, status: 'ok' };
  }
}

// 主函数
function main() {
  console.log('========================================');
  console.log('Fix Product Category Parameters');
  console.log('========================================');
  
  const brands = getBrandDirs();
  console.log(`\nFound ${brands.length} brands with products.json`);
  
  const results = {
    ok: [],
    fixed: [],
    error: []
  };
  
  brands.forEach(brand => {
    const result = fixBrand(brand);
    results[result.status].push(result);
  });
  
  // 汇总报告
  console.log('\n\n========================================');
  console.log('Summary Report');
  console.log('========================================');
  console.log(`\n✅ OK: ${results.ok.length} brands`);
  console.log(`🔧 Fixed: ${results.fixed.length} brands`);
  console.log(`❌ Error: ${results.error.length} brands`);
  
  if (results.fixed.length > 0) {
    console.log('\nBrands fixed:');
    results.fixed.forEach(r => console.log(`  - ${r.brand}`));
  }
  
  if (results.error.length > 0) {
    console.log('\nBrands with errors:');
    results.error.forEach(r => console.log(`  - ${r.brand}: ${r.error}`));
  }
}

main();
