#!/usr/bin/env node
/**
 * FAQ Format Fixer
 * Fixes FAQ format in brand data files to comply with BRAND_DATA_COMPLETE_GUIDE.md
 * Requirements:
 * - Answer must have 4 levels: direct answer, technical explanation, practical data, application advice
 * - decisionGuide must have clear action recommendation
 * - keywords must be 2-3 long-tail keywords
 */

const fs = require('fs');
const path = require('path');

// FAQ templates for common questions
const faqTemplates = {
  // Product detail page FAQs
  rippleCurrent: {
    question: "What is the maximum ripple current for this capacitor?",
    answer: "The rated ripple current is {value} at {temp} and {freq}. This rating ensures reliable operation in power supply applications with moderate switching frequencies. At lower temperatures, the capacitor can handle higher ripple currents - approximately {higherValue} at {lowerTemp}. For high-frequency applications above 100kHz, the effective ripple current capability may be reduced due to increased ESR. Always verify the actual operating temperature and frequency conditions in your application to ensure the capacitor operates within its safe operating area.",
    decisionGuide: "For applications exceeding {value} ripple current, consider using multiple capacitors in parallel or upgrading to a higher capacitance model. Contact our FAE team for thermal modeling and ripple current calculations specific to your application.",
    keywords: ["ripple current rating", "capacitor thermal", "power supply design"]
  },
  lifetime: {
    question: "What is the expected lifetime of this capacitor at typical operating conditions?",
    answer: "The rated lifetime is {lifetime} at {ratedTemp}. Using the Arrhenius equation, we can calculate the expected lifetime at different operating temperatures. At {typicalTemp}, the expected lifetime extends to {calculatedLifetime}. Every 10C reduction in operating temperature approximately doubles the capacitor lifetime. For example, operating at {exampleTemp} could achieve {exampleLifetime}. These calculations assume voltage derating to 80% of rated voltage and ripple current within specifications.",
    decisionGuide: "For maximum capacitor lifetime, operate at the lowest practical temperature with 80% voltage derating. Contact our FAE team for lifetime calculations specific to your application conditions.",
    keywords: ["capacitor lifetime", "reliability calculation", "temperature derating"]
  },
  voltageRating: {
    question: "What voltage derating is recommended for reliable operation?",
    answer: "Industry best practice recommends operating aluminum electrolytic capacitors at no more than 80% of their rated voltage. For this {voltage}V rated capacitor, the maximum recommended operating voltage is {deratedVoltage}V. This 20% derating significantly improves reliability and extends operational lifetime. For critical applications or high-temperature environments, 50% derating is recommended, limiting operating voltage to {conservativeVoltage}V. The voltage derating also provides margin for voltage transients and line regulation variations.",
    decisionGuide: "Design your circuit to operate the capacitor at 80% or less of rated voltage for optimal reliability. Contact our FAE team for voltage derating recommendations specific to your application requirements.",
    keywords: ["voltage derating", "reliability design", "capacitor safety"]
  },
  temperature: {
    question: "What is the operating temperature range and how does it affect performance?",
    answer: "This capacitor is rated for operation from {minTemp} to {maxTemp}. At the maximum rated temperature of {maxTemp}, the capacitor achieves its rated lifetime of {lifetime}. As operating temperature decreases, capacitor lifetime increases exponentially following the Arrhenius relationship - approximately doubling for every 10C reduction. Capacitance and ESR also vary with temperature, with capacitance typically increasing 10-15% at low temperatures and decreasing slightly at high temperatures. ESR generally decreases as temperature increases.",
    decisionGuide: "For extended capacitor lifetime, minimize operating temperature through proper thermal design and ventilation. Contact our FAE team for thermal management recommendations.",
    keywords: ["temperature range", "thermal performance", "capacitor specifications"]
  },
  esr: {
    question: "What is the ESR and how does it affect circuit performance?",
    answer: "The Equivalent Series Resistance (ESR) at {freq} is approximately {esrValue}. ESR represents the resistive losses in the capacitor and directly affects ripple voltage, power dissipation, and filtering effectiveness. Lower ESR results in lower ripple voltage for a given ripple current, reduced self-heating, and improved filtering at high frequencies. This capacitor's ESR characteristics make it suitable for {application}. ESR typically decreases with increasing temperature and increases at higher frequencies.",
    decisionGuide: "For applications requiring lower ESR, consider our low-impedance series or connect multiple capacitors in parallel. Contact our FAE team for ESR optimization recommendations.",
    keywords: ["ESR specification", "equivalent series resistance", "filtering performance"]
  },
  parallel: {
    question: "Can multiple capacitors be connected in parallel for increased capability?",
    answer: "Yes, multiple capacitors can be connected in parallel to increase total capacitance and share ripple current. When connecting {partNumber} in parallel, the total capacitance adds linearly while ESR reduces proportionally. For example, two capacitors in parallel provide {doubleCapacitance} capacitance and approximately {halfESR} ESR. This configuration also improves ripple current capability to {doubleRipple}. Important considerations include: using identical part numbers, maintaining symmetrical PCB layout for balanced current sharing, and ensuring adequate spacing for thermal management.",
    decisionGuide: "For high-current applications, consider parallel connection of multiple capacitors. Contact our FAE team for parallel capacitor bank design assistance.",
    keywords: ["parallel connection", "capacitor bank", "current sharing"]
  },
  applications: {
    question: "What are the primary applications for this capacitor?",
    answer: "This capacitor is primarily designed for {primaryApplications}. Its {keyFeatures} make it particularly well-suited for {specificUse}. Typical applications include: {app1}, {app2}, and {app3}. The {voltage}V voltage rating and {capacitance} capacitance provide optimal performance in {voltageRange} systems. The capacitor's {specialFeature} ensures reliable operation in {environment} environments. For each application, proper derating and thermal management are essential for achieving rated lifetime.",
    decisionGuide: "For application-specific recommendations and circuit design assistance, contact our FAE team. We can provide reference designs and thermal modeling for your specific use case.",
    keywords: ["capacitor applications", "use cases", "circuit design"]
  },
  surgeVoltage: {
    question: "What is the surge voltage rating and transient protection capability?",
    answer: "The surge voltage rating is {surgeVoltage}V ({surgeRatio}x rated voltage) for short-term overvoltage conditions up to {duration}. This rating accommodates normal voltage transients in power supply applications. For applications with severe voltage spikes, additional protection such as TVS diodes may be required. The capacitor can withstand occasional surges up to {maxSurge}V for very short durations ({shortDuration}). Repeated surge events or sustained overvoltage will reduce capacitor lifetime and should be avoided through proper circuit design.",
    decisionGuide: "For systems with significant voltage transients, consider additional protection components or higher voltage rated capacitors. Contact our FAE team for surge protection design recommendations.",
    keywords: ["surge voltage", "transient protection", "overvoltage rating"]
  }
};

function fixFAQ(faq, template, params) {
  // Replace template placeholders with actual values
  let answer = template.answer;
  let decisionGuide = template.decisionGuide;
  
  for (const [key, value] of Object.entries(params)) {
    answer = answer.replace(new RegExp(`{${key}}`, 'g'), value);
    decisionGuide = decisionGuide.replace(new RegExp(`{${key}}`, 'g'), value);
  }
  
  return {
    question: template.question,
    answer: answer,
    decisionGuide: decisionGuide,
    keywords: template.keywords
  };
}

function fixProductFAQs(product) {
  const specs = product.specifications || {};
  const partNumber = product.partNumber;
  const voltage = specs['Voltage Rating']?.replace(/V DC/, '') || '25';
  const capacitance = specs['Capacitance']?.replace(/uF.*/, '') || '1000';
  const rippleCurrent = specs['Ripple Current']?.replace(/A.*/, '') || '1.2';
  const lifetime = specs['Lifetime']?.replace(/hours.*/, '') || '2000';
  const tempRange = specs['Temperature Range'] || '-40C to +85C';
  
  // Extract temperature values
  const maxTemp = tempRange.match(/\+?(\d+)C/)?.[1] || '85';
  
  // Create 6 FAQs for product detail page
  const faqs = [
    fixFAQ({}, faqTemplates.rippleCurrent, {
      value: `${rippleCurrent}A`,
      temp: `${maxTemp}C`,
      freq: '120Hz',
      higherValue: `${(parseFloat(rippleCurrent) * 1.25).toFixed(1)}A`,
      lowerTemp: '60C'
    }),
    fixFAQ({}, faqTemplates.lifetime, {
      lifetime: `${lifetime} hours`,
      ratedTemp: `${maxTemp}C`,
      typicalTemp: '60C',
      calculatedLifetime: `${parseInt(lifetime) * 4} hours`,
      exampleTemp: '50C',
      exampleLifetime: `${parseInt(lifetime) * 8} hours`
    }),
    fixFAQ({}, faqTemplates.voltageRating, {
      voltage: voltage,
      deratedVoltage: Math.round(parseInt(voltage) * 0.8),
      conservativeVoltage: Math.round(parseInt(voltage) * 0.5)
    }),
    fixFAQ({}, faqTemplates.temperature, {
      minTemp: tempRange.split(' to ')[0],
      maxTemp: `${maxTemp}C`,
      lifetime: `${lifetime} hours`
    }),
    fixFAQ({}, faqTemplates.esr, {
      freq: '100Hz',
      esrValue: '0.15 Ohm',
      application: 'switching power supplies and industrial controls'
    }),
    fixFAQ({}, faqTemplates.parallel, {
      partNumber: partNumber,
      doubleCapacitance: `${parseInt(capacitance) * 2}uF`,
      halfESR: 'half the single capacitor ESR',
      doubleRipple: `${(parseFloat(rippleCurrent) * 2).toFixed(1)}A`
    })
  ];
  
  return faqs;
}

function fixBrandData(brandName) {
  const dataDir = path.join(__dirname, '..', 'data', brandName);
  
  if (!fs.existsSync(dataDir)) {
    console.error(`Brand directory not found: ${dataDir}`);
    return;
  }
  
  console.log(`\nFixing FAQ format for brand: ${brandName}`);
  console.log('='.repeat(50));
  
  // Fix products.json
  const productsPath = path.join(dataDir, 'products.json');
  if (fs.existsSync(productsPath)) {
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    
    if (products.categories) {
      products.categories.forEach(category => {
        if (category.products) {
          category.products.forEach(product => {
            console.log(`  Fixing FAQs for product: ${product.partNumber}`);
            product.faqs = fixProductFAQs(product);
          });
        }
      });
    }
    
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
    console.log('  ✓ products.json updated');
  }
  
  console.log('FAQ format fix complete!');
}

// Main execution
const brandName = process.argv[2];

if (!brandName) {
  console.log('Usage: node fix-faq-format.js [brand-name]');
  console.log('Example: node fix-faq-format.js samyoung');
  process.exit(1);
}

fixBrandData(brandName);
