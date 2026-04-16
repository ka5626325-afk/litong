// Fix remaining issues in products.json
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'sindachip', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix category longDescriptions to include distributor/selection keywords
const categoryDescriptions = {
  "operational-amplifiers": "Sindachip operational amplifiers deliver high-performance analog signal processing solutions for a wide range of applications. The comprehensive portfolio includes general-purpose op-amps for everyday analog circuits, precision zero-drift amplifiers for sensor interfaces and measurement equipment, low-power micro-power op-amps for battery-powered IoT devices, and high-speed amplifiers for fast signal processing. These op-amps feature excellent DC precision, low noise, wide bandwidth, and rail-to-rail input/output capability. With supply voltage ranges from 1.8V to 36V and various package options, Sindachip op-amps serve consumer electronics, industrial automation, medical devices, and automotive systems. As an authorized Sindachip distributor, LiTong provides technical support, selection guidance, and reliable supply chain services for these essential analog components.",
  "voltage-regulators": "Sindachip voltage regulators deliver stable, clean power for sensitive analog circuits and digital systems. The comprehensive LDO regulator portfolio covers applications from low-power IoT devices to high-current processor supplies. Key features include ultra-low dropout voltage, excellent line and load regulation, low output noise for RF and analog applications, and very low quiescent current for battery-powered devices. The product line includes fixed and adjustable output options, with current capabilities from 150mA to 500mA. As an authorized Sindachip distributor, LiTong provides comprehensive selection guidance, application support, and reliable supply chain services for these essential power management components.",
  "led-drivers": "Sindachip LED drivers deliver high-efficiency power conversion solutions for a wide range of lighting applications. The comprehensive portfolio includes buck converters for step-down applications, boost converters for step-up requirements, and buck-boost converters for flexible input-output configurations. These drivers feature synchronous rectification for maximum efficiency, integrated power MOSFETs to reduce BOM cost, and comprehensive protection features including over-voltage, over-current, and over-temperature protection. With support for PWM dimming and analog dimming, Sindachip LED drivers serve general lighting, display backlighting, automotive lighting, and architectural lighting applications. As an authorized Sindachip distributor, LiTong provides technical support, selection guidance, and reliable supply chain services for these essential lighting components.",
  "power-management-ics": "Sindachip power management ICs deliver comprehensive power solutions for portable devices, IoT applications, and battery-powered systems. The portfolio includes linear and switching battery chargers for lithium-ion batteries, load switches with controlled slew rate and protection features, and multi-channel PMICs for complex power sequencing requirements. These ICs feature high integration to minimize BOM cost and board space, ultra-low quiescent current for extended battery life, and comprehensive protection features for safe operation. As an authorized Sindachip distributor, LiTong provides technical support, selection guidance, and reliable supply chain services for these essential power management components."
};

// Fix product shortDescriptions
const productShortDescriptions = {
  "SGM8551": "High-precision zero-drift op-amp with 5μV offset voltage and rail-to-rail I/O for sensor interface applications requiring exceptional accuracy",
  "SGM8522": "Versatile dual op-amp featuring 3MHz bandwidth and rail-to-rail output for general-purpose analog signal processing applications",
  "SGM2019": "Low-noise LDO regulator with 300mA output current, 70dB PSRR, and 30μV output noise for sensitive RF and analog circuits",
  "SGM2028": "High-current LDO regulator providing 500mA output with ultra-low 35μA quiescent current for battery-powered portable devices",
  "SGM6603": "High-efficiency synchronous buck LED driver with 1A output current and PWM dimming for portable lighting applications",
  "SGM6604": "High-voltage boost LED driver supporting up to 40V output with analog and PWM dimming for multi-LED string applications",
  "SGM4056": "Standalone linear Li-ion battery charger with 1A programmable charge current and automatic recharge functionality",
  "SGM6601": "High-side load switch featuring 60mΩ on-resistance and controlled slew rate for power domain switching applications"
};

// Fix categories
productsData.categories.forEach(category => {
  if (categoryDescriptions[category.id]) {
    category.longDescription = categoryDescriptions[category.id];
  }
  
  // Fix selectionGuideLink
  if (category.selectionGuide && category.selectionGuide.articleLink) {
    category.selectionGuideLink = category.selectionGuide.articleLink;
  }
  
  // Fix products
  if (category.products) {
    category.products.forEach(product => {
      if (productShortDescriptions[product.partNumber]) {
        product.shortDescription = productShortDescriptions[product.partNumber];
      }
      
      // Fix alternativeParts comparison format
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison) {
            // Ensure comparison uses =, >, < format
            Object.keys(alt.comparison).forEach(key => {
              const val = alt.comparison[key];
              if (typeof val === 'string' && !val.includes('(')) {
                // Add comparison notation if missing
                if (val.includes('higher') || val.includes('better')) {
                  alt.comparison[key] = val.replace('higher', '>').replace('better', '>');
                } else if (val.includes('lower') || val.includes('worse')) {
                  alt.comparison[key] = val.replace('lower', '<').replace('worse', '<');
                } else if (val.includes('similar') || val.includes('same')) {
                  alt.comparison[key] = val.replace('similar', '=').replace('same', '=');
                }
              }
            });
          }
        });
      }
    });
  }
});

// Write back to file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✓ Fixed remaining issues in products.json');
console.log('  - Updated category longDescriptions with distributor/selection keywords');
console.log('  - Fixed product shortDescriptions to meet length requirements');
console.log('  - Fixed selectionGuideLink references');
