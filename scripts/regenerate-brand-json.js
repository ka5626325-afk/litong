#!/usr/bin/env node
/**
 * 重新生成损坏的 brand.json 文件
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

// 需要重新生成的品牌
const brandsToRegenerate = [
  'silergy',
  'songle',
  'songle-relay'
];

// 品牌数据模板
const brandTemplates = {
  'silergy': {
    name: 'silergy',
    displayName: 'Silergy',
    description: 'Silergy Corp is a leading analog IC design company focusing on high-performance power management solutions. Founded in 2008 and headquartered in Hangzhou, China, Silergy provides innovative power management ICs for consumer electronics, industrial applications, and automotive markets.',
    longDescription: 'As an authorized Silergy distributor, BeiLuo Electronics provides comprehensive support for Silergy\'s extensive portfolio of power management solutions. Silergy Corp is a leading analog IC design company founded in 2008 and headquartered in Hangzhou, China. The company specializes in high-performance power management ICs including DC-DC converters, AC-DC controllers, LED drivers, and battery management solutions. Silergy\'s products serve diverse markets including consumer electronics, industrial equipment, communication systems, and automotive applications. With strong R&D capabilities and quality manufacturing partnerships, Silergy delivers reliable, efficient power solutions that meet international standards.',
    foundedYear: '2008',
    headquarters: 'Hangzhou, China',
    employees: '500+',
    website: 'https://www.silergy.com',
    logo: '/brands/silergy/logo.png',
    certifications: ['ISO 9001', 'ISO 14001'],
    coreProducts: [
      'DC-DC Converters',
      'AC-DC Controllers',
      'LED Drivers',
      'Battery Management ICs',
      'Power Modules'
    ],
    industries: [
      'Consumer Electronics',
      'Industrial Equipment',
      'Communication Systems',
      'Automotive Electronics'
    ],
    seoTitle: 'Silergy Distributor | Power Management ICs | BeiLuo',
    seoDescription: 'Authorized Silergy distributor offering DC-DC converters, AC-DC controllers, LED drivers, and power management solutions. Technical support and competitive pricing.',
    seoKeywords: [
      'Silergy distributor',
      'Silergy power management',
      'DC-DC converter',
      'AC-DC controller',
      'LED driver IC',
      'battery management',
      'power management IC'
    ],
    faqs: [
      {
        question: 'What are Silergy\'s main product categories?',
        answer: 'Silergy specializes in power management ICs including DC-DC converters (buck, boost, buck-boost), AC-DC controllers for offline power supplies, LED drivers for lighting applications, battery management ICs for portable devices, and integrated power modules. These products serve consumer electronics, industrial equipment, communications, and automotive markets.',
        decisionGuide: 'Browse our Silergy product categories to find the right power management solution for your application.',
        keywords: ['Silergy products', 'power management IC', 'DC-DC converter']
      },
      {
        question: 'What is the typical lead time for Silergy products?',
        answer: 'Lead times for Silergy products vary based on product type and order volume. Standard products typically have lead times of 4-8 weeks for factory orders. BeiLuo Electronics maintains local inventory for popular products, enabling immediate shipment for stocked items.',
        decisionGuide: 'For time-critical projects, inquire about our local inventory availability.',
        keywords: ['Silergy lead time', 'delivery', 'inventory']
      },
      {
        question: 'Does Silergy provide technical support?',
        answer: 'Yes, through BeiLuo Electronics, comprehensive technical support is available for all Silergy products. Our FAE team can assist with product selection, application circuit design, PCB layout recommendations, and troubleshooting. We also provide reference designs and evaluation boards.',
        decisionGuide: 'Contact our FAE team for technical assistance with your Silergy power management design.',
        keywords: ['Silergy technical support', 'FAE', 'application support']
      },
      {
        question: 'Can I get samples of Silergy products?',
        answer: 'Yes, samples are available for most Silergy products. Please contact our sales team with your specific requirements, including target application and estimated volume. We can provide evaluation boards and reference designs to accelerate your development.',
        decisionGuide: 'Request samples early in your design phase to evaluate performance in your application.',
        keywords: ['Silergy samples', 'evaluation board', 'samples']
      }
    ]
  },
  'songle': {
    name: 'songle',
    displayName: 'Songle',
    description: 'Songle is a leading manufacturer of electromechanical components, specializing in relays, switches, and connectors. With decades of experience, Songle provides reliable components for industrial control, home appliances, automotive, and consumer electronics applications.',
    longDescription: 'As an authorized Songle distributor, BeiLuo Electronics offers comprehensive access to Songle\'s extensive range of electromechanical components. Songle is a well-established manufacturer specializing in relays, micro switches, and connectors. The company serves diverse markets including industrial automation, home appliances, automotive electronics, and consumer products. Songle\'s products are known for their reliability, competitive pricing, and compliance with international safety standards. With modern manufacturing facilities and strict quality control, Songle delivers consistent product quality that meets the demands of both consumer and industrial applications.',
    foundedYear: '1995',
    headquarters: 'Ningbo, China',
    employees: '2000+',
    website: 'https://www.songle.com',
    logo: '/brands/songle/logo.png',
    certifications: ['ISO 9001', 'ISO 14001', 'UL', 'VDE', 'TUV'],
    coreProducts: [
      'Power Relays',
      'Signal Relays',
      'Micro Switches',
      'Connectors',
      'Automotive Relays'
    ],
    industries: [
      'Industrial Control',
      'Home Appliances',
      'Automotive Electronics',
      'Consumer Electronics'
    ],
    seoTitle: 'Songle Distributor | Relays & Switches | BeiLuo',
    seoDescription: 'Authorized Songle distributor offering power relays, signal relays, micro switches, and connectors. Technical support and competitive pricing for electromechanical components.',
    seoKeywords: [
      'Songle distributor',
      'Songle relay',
      'power relay',
      'signal relay',
      'micro switch',
      'electromechanical component'
    ],
    faqs: [
      {
        question: 'What types of relays does Songle manufacture?',
        answer: 'Songle manufactures a comprehensive range of relays including power relays (up to 30A switching capacity), signal relays for low-level switching, automotive relays for vehicle applications, and specialized relays for specific industries. Available in various coil voltages, contact configurations (SPST, SPDT, DPST, DPDT), and mounting options.',
        decisionGuide: 'Consider your switching requirements (voltage, current, load type) when selecting a Songle relay.',
        keywords: ['Songle relay types', 'power relay', 'signal relay']
      },
      {
        question: 'How do I select the right Songle relay for my application?',
        answer: 'Relay selection involves several key parameters: Contact Rating (current and voltage your load requires), Coil Voltage (must match your control circuit), Contact Configuration (SPST, SPDT, etc.), Mounting Type (PCB, panel, or socket), and Environmental Requirements (temperature, vibration, sealing). Our FAE team can help analyze your specific requirements and recommend the optimal Songle relay from our extensive catalog.',
        decisionGuide: 'Contact our FAE team with your application requirements for personalized relay selection assistance.',
        keywords: ['relay selection', 'how to choose relay', 'Songle relay']
      },
      {
        question: 'What certifications do Songle products have?',
        answer: 'Songle products carry multiple international certifications including UL (Underwriters Laboratories), VDE (German certification), TUV, and CE marking. These certifications ensure compliance with safety standards for electrical components in various markets. Specific certifications vary by product series.',
        decisionGuide: 'Verify that the specific Songle product you select has the certifications required for your target market.',
        keywords: ['Songle certifications', 'UL', 'VDE', 'safety standards']
      },
      {
        question: 'What is the typical lead time for Songle products?',
        answer: 'Standard Songle relays typically have lead times of 2-4 weeks for factory orders. BeiLuo Electronics maintains local inventory for popular Songle relay series, enabling immediate shipment for stocked items. For large volume orders or specialized products, please contact our sales team for specific lead time information.',
        decisionGuide: 'For urgent requirements, check our local inventory availability before placing factory orders.',
        keywords: ['Songle lead time', 'delivery', 'inventory']
      }
    ]
  },
  'songle-relay': {
    name: 'songle-relay',
    displayName: 'Songle Relay',
    description: 'Songle Relay specializes in high-quality electromechanical relays for industrial and consumer applications. With comprehensive product lines and global certifications, Songle Relay provides reliable switching solutions for diverse markets.',
    longDescription: 'As an authorized Songle Relay distributor, BeiLuo Electronics provides access to Songle\'s comprehensive relay portfolio. Songle Relay is a specialized division focusing on electromechanical relay solutions for industrial control, home appliances, automotive systems, and consumer electronics. The product range includes power relays, signal relays, automotive relays, and specialized relay modules. All products undergo rigorous testing and carry international safety certifications including UL, VDE, and TUV. Songle Relay\'s commitment to quality and innovation makes it a trusted partner for reliable switching solutions.',
    foundedYear: '1995',
    headquarters: 'Ningbo, China',
    employees: '2000+',
    website: 'https://www.songle.com',
    logo: '/brands/songle-relay/logo.png',
    certifications: ['ISO 9001', 'ISO 14001', 'UL', 'VDE', 'TUV', 'CQC'],
    coreProducts: [
      'General Purpose Relays',
      'Power Relays',
      'Signal Relays',
      'Automotive Relays',
      'Relay Modules'
    ],
    industries: [
      'Industrial Automation',
      'Home Appliances',
      'Automotive Systems',
      'Building Automation'
    ],
    seoTitle: 'Songle Relay Distributor | Electromechanical Relays | BeiLuo',
    seoDescription: 'Authorized Songle Relay distributor offering general purpose, power, signal, and automotive relays. Technical support and competitive pricing.',
    seoKeywords: [
      'Songle Relay distributor',
      'electromechanical relay',
      'power relay',
      'automotive relay',
      'relay module'
    ],
    faqs: [
      {
        question: 'What is the difference between Songle and Songle Relay?',
        answer: 'Songle is the parent company manufacturing a broad range of electromechanical components including relays, switches, and connectors. Songle Relay represents the specialized relay product line, offering a comprehensive portfolio of electromechanical relays for various applications. Both brands share the same manufacturing excellence and quality standards.',
        decisionGuide: 'Choose Songle Relay when you need specialized relay solutions; select Songle for broader electromechanical component needs.',
        keywords: ['Songle vs Songle Relay', 'difference', 'product lines']
      },
      {
        question: 'What relay series does Songle Relay offer?',
        answer: 'Songle Relay offers multiple relay series including SRA (miniature power relays), SRB (subminiature signal relays), SRC (PCB power relays), SRD (general purpose relays), and automotive relay series. Each series is optimized for specific applications with different contact ratings, coil voltages, and form factors.',
        decisionGuide: 'Review the specifications of each Songle Relay series to find the best match for your application requirements.',
        keywords: ['Songle Relay series', 'SRA', 'SRD', 'relay types']
      },
      {
        question: 'How do I determine the right contact rating for my application?',
        answer: 'Contact rating selection depends on your load characteristics: resistive loads (heaters, lamps) are straightforward; inductive loads (motors, solenoids) require higher contact ratings due to inrush currents; capacitive loads need special consideration for charging currents. Always select a relay with contact rating higher than your actual load, and consult our FAE team for inductive or capacitive load applications.',
        decisionGuide: 'Provide your load specifications to our FAE team for proper Songle Relay contact rating recommendations.',
        keywords: ['contact rating', 'load type', 'relay selection']
      },
      {
        question: 'What quality standards does Songle Relay maintain?',
        answer: 'Songle Relay maintains rigorous quality standards with ISO 9001 and ISO 14001 certifications. Products undergo 100% testing for critical parameters including contact resistance, coil resistance, dielectric strength, and operational characteristics. Manufacturing facilities are regularly audited, and products carry international safety certifications (UL, VDE, TUV, CQC).',
        decisionGuide: 'Request quality documentation and certifications for specific Songle Relay products as needed for your quality system.',
        keywords: ['Songle Relay quality', 'ISO 9001', 'certifications']
      }
    ]
  }
};

function regenerateBrand(brand) {
  console.log(`\n========================================`);
  console.log(`Regenerating: ${brand}`);
  console.log(`========================================`);
  
  const brandDir = path.join(dataDir, brand);
  const brandPath = path.join(brandDir, 'brand.json');
  
  const template = brandTemplates[brand];
  if (!template) {
    console.log(`  [ERROR] No template found for ${brand}`);
    return false;
  }
  
  try {
    fs.writeFileSync(brandPath, JSON.stringify(template, null, 2), 'utf8');
    console.log(`  [SUCCESS] Regenerated ${brand}/brand.json`);
    return true;
  } catch (error) {
    console.log(`  [ERROR] Failed to write file: ${error.message}`);
    return false;
  }
}

function main() {
  console.log('========================================');
  console.log('Regenerate Brand JSON Files');
  console.log('========================================');
  
  let successCount = 0;
  brandsToRegenerate.forEach(brand => {
    if (regenerateBrand(brand)) {
      successCount++;
    }
  });
  
  console.log('\n========================================');
  console.log('Summary');
  console.log('========================================');
  console.log(`Successfully regenerated: ${successCount}/${brandsToRegenerate.length}`);
}

main();
