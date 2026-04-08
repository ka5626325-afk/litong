#!/usr/bin/env node

/**
 * 为所有 MacMic 产品添加 FAQ
 */

const fs = require('fs');

const filePath = 'data/macmic/products.json';
let content = fs.readFileSync(filePath, 'utf8');

// 定义所有产品的 FAQ
const productFAQs = {
  'MMF200J120D1': [
    {
      question: "What applications is MMF200J120D1 best suited for?",
      answer: "MMF200J120D1 is ideal for high-power rectification in 690V AC systems. Common applications include: (1) Output rectifiers for 55-110kW motor drives; (2) Brake chopper circuits in industrial inverters; (3) Rectification in solar inverters; (4) Anti-parallel diodes for 1200V IGBT modules. The 1200V rating provides adequate margin for 690V AC systems (rectified to ~975V DC), while the 200A current capability handles high-power applications.",
      decisionGuide: "This FRED is designed for high-voltage, high-current industrial applications. Contact our FAE team for specific application guidance.",
      keywords: ["MMF200J120D1 applications", "1200V FRED", "high power rectifier"]
    },
    {
      question: "How does the 50ns recovery time compare to standard diodes?",
      answer: "The 50ns recovery time of MMF200J120D1 is significantly faster than standard rectifier diodes (typically 200-500ns), reducing switching losses by 60-70% in high-frequency applications. Compared to ultrafast diodes with similar speed, MacMic FRED offers soft recovery which minimizes voltage overshoot and EMI. The 50ns speed is optimized for motor drive frequencies (5-15KHz) where it provides excellent efficiency without excessive EMI.",
      decisionGuide: "Choose this FRED for motor drive and industrial applications requiring reliable high-power rectification.",
      keywords: ["FRED recovery time", "50ns diode", "switching losses"]
    },
    {
      question: "Can MMF200J120D1 be paralleled for higher current?",
      answer: "Yes, MMF200J120D1 can be paralleled for higher current applications. When paralleling FREDs: (1) Use matched devices from same production batch for similar characteristics; (2) Ensure symmetrical layout with equal trace lengths; (3) Use individual gate resistors for each device; (4) Consider current derating of 10-15% for balanced current sharing. Two MMF200J120D1 modules can support up to 350-400A with proper paralleling technique. Contact our FAE team for parallel connection guidance.",
      decisionGuide: "For currents above 200A, consider paralleling multiple FRED modules. Our FAE team can provide design support.",
      keywords: ["FRED parallel", "high current rectifier", "current sharing"]
    }
  ],
  'MMG30J060U1': [
    {
      question: "What is the advantage of TO-247 package for IGBT?",
      answer: "The TO-247 package offers several advantages: (1) Lower thermal resistance (Rth) compared to smaller packages, enabling higher current capability; (2) Through-hole mounting provides reliable mechanical connection and good thermal contact; (3) Isolated mounting tab simplifies heat sink design; (4) Industry-standard package ensures wide availability of compatible heat sinks. For MMG30J060U1, the TO-247 package supports reliable operation up to 30A continuous with proper heat sinking.",
      decisionGuide: "TO-247 is ideal for applications requiring reliable through-hole mounting and good thermal performance.",
      keywords: ["TO-247 IGBT", "through-hole package", "IGBT thermal design"]
    },
    {
      question: "Is MMG30J060U1 suitable for PFC boost applications?",
      answer: "Yes, MMG30J060U1 is excellent for active PFC boost stages. The 600V rating is ideal for 400V output PFC, and the 30A current capability supports PFC stages up to 10-15kW. The TO-247 package allows for flexible heat sink design. In PFC applications, switching frequencies of 50-100KHz are common, and this IGBT's switching characteristics are well-suited for these frequencies. Pair with MMF30J060U1 FRED for optimal PFC performance.",
      decisionGuide: "This discrete IGBT is ideal for PFC boost applications. Check our PFC reference designs for implementation guidance.",
      keywords: ["MMG30J060U1 PFC", "PFC boost IGBT", "discrete PFC"]
    },
    {
      question: "How do I mount TO-247 devices for best thermal performance?",
      answer: "For optimal thermal performance with TO-247 devices: (1) Use thermal interface material (TIM) with thermal conductivity >3 W/mK; (2) Apply mounting torque of 0.8-1.2 Nm (check datasheet for specific value); (3) Ensure heat sink surface is flat and clean; (4) Use appropriate heat sink size - thermal resistance of 2-3°C/W is typical for natural convection; (5) Consider forced air cooling for continuous operation above 20A. Keep case temperature below 100°C for long-term reliability.",
      decisionGuide: "Proper mounting is critical for thermal performance. Contact our FAE team for thermal design assistance.",
      keywords: ["TO-247 mounting", "IGBT thermal interface", "heat sink design"]
    }
  ],
  'MMF75J120U1': [
    {
      question: "What makes MMF75J120U1 suitable for brake chopper applications?",
      answer: "MMF75J120U1 is ideal for brake chopper applications because: (1) The 1200V rating handles high-voltage spikes during braking; (2) 75A current capability supports high braking currents; (3) Fast 50ns recovery minimizes switching losses during high-frequency chopper operation; (4) TO-247 package provides good thermal performance for intermittent high-current pulses. In brake choppers, the diode sees high peak currents but low duty cycle, making this FRED's characteristics ideal.",
      decisionGuide: "This FRED is designed for brake chopper and high-voltage rectification applications.",
      keywords: ["MMF75J120U1 brake chopper", "braking diode", "1200V FRED"]
    },
    {
      question: "How do I select the right FRED for my output rectifier?",
      answer: "For output rectifiers: (1) Match voltage rating to DC bus voltage with 1.5-2x margin; (2) Size current rating for RMS output current plus margin; (3) Select recovery time based on switching frequency - faster for high frequency; (4) Consider soft recovery for low EMI requirements. MMF75J120U1 (1200V, 75A) is suitable for 690V systems with output currents up to 50-60A RMS. For 400V systems, consider MMF75J060U1 (600V) with faster recovery.",
      decisionGuide: "Match FRED ratings to your system voltage and current requirements. Our FAE team can help with selection.",
      keywords: ["output rectifier diode", "FRED selection", "rectifier sizing"]
    },
    {
      question: "What is the difference between D1 and U1 packages for FRED?",
      answer: "D1 is a module package typically used for higher current FRED modules (100A+), offering integrated half-bridge or single-diode configurations with good thermal performance. U1 (TO-247) is a discrete package for lower current applications (up to 100A), offering through-hole mounting and flexibility in circuit design. MMF75J120U1 uses TO-247 for applications requiring discrete packaging, while module FREDs use D1 for higher integration.",
      decisionGuide: "Choose U1 (TO-247) for discrete designs, D1 for module-based high-current applications.",
      keywords: ["FRED package", "D1 vs U1", "TO-247 diode"]
    }
  ],
  'MMO100N060Y1': [
    {
      question: "What is synchronous rectification and when should I use it?",
      answer: "Synchronous rectification uses MOSFETs instead of diodes for rectification, significantly reducing conduction losses. Use it when: (1) Output voltage is low (12V, 24V, 48V) where diode forward voltage drop causes significant losses; (2) Current is high (>20A) where I²R losses matter; (3) Efficiency is critical (>95% required). MMO100N060Y1 with 2.5mΩ RDS(on) reduces rectifier losses by 60-70% compared to Schottky diodes in 48V systems.",
      decisionGuide: "Synchronous rectification is ideal for high-current, low-voltage applications. Contact our FAE team for SR design support.",
      keywords: ["synchronous rectification", "SR MOSFET", "rectifier efficiency"]
    },
    {
      question: "How do I calculate efficiency improvement with MMO100N060Y1?",
      answer: "To calculate efficiency improvement: (1) Diode loss = Vf × Iout × (1-D), where Vf is diode forward voltage (0.5-0.8V for Schottky); (2) MOSFET loss = Iout² × RDS(on) × D, where D is duty cycle; (3) Compare total losses. Example: At 48V output, 50A current, 50% duty cycle: Schottky loss = 0.6V × 50A × 0.5 = 15W; MOSFET loss = 50² × 0.0025 × 0.5 = 3.1W; Savings = 11.9W (80% reduction). This translates to 2-3% efficiency improvement.",
      decisionGuide: "Calculate your specific savings based on output voltage and current. Our FAE team can provide detailed analysis.",
      keywords: ["synchronous rectifier efficiency", "RDS(on) losses", "efficiency calculation"]
    },
    {
      question: "What gate drive is recommended for MMO100N060Y1 in synchronous rectification?",
      answer: "For MMO100N060Y1 in SR applications: (1) Use dedicated synchronous rectifier controller ICs (not standard gate drivers); (2) Gate voltage: 10-12V for full enhancement; (3) Gate driver current: 2A+ for fast switching; (4) Precise timing control to prevent shoot-through; (5) Miller clamp protection to prevent false turn-on. Popular controllers include NCP4305, IR1169, and similar SR controllers. Proper gate drive is critical for SR performance and reliability.",
      decisionGuide: "Use dedicated SR controllers for optimal performance. Contact our FAE team for controller recommendations.",
      keywords: ["synchronous rectifier driver", "SR controller", "gate drive MOSFET"]
    }
  ],
  'MMO200N040Y1': [
    {
      question: "What is the maximum current MMO200N040Y1 can handle?",
      answer: "MMO200N040Y1 is rated for 200A continuous current at 25°C case temperature. However, actual current capability depends on thermal design: (1) With natural convection and Rth = 1°C/W heat sink: ~100-120A continuous; (2) With forced air cooling: ~150-180A continuous; (3) With liquid cooling: up to 200A continuous. At 200A, conduction loss = 200² × 0.0012 = 48W, requiring excellent thermal management. Always verify junction temperature stays below 175°C.",
      decisionGuide: "Size your thermal design based on actual operating current. Contact our FAE team for thermal calculations.",
      keywords: ["MMO200N040Y1 current rating", "200A MOSFET", "MOSFET thermal design"]
    },
    {
      question: "Is MMO200N040Y1 suitable for 12V battery systems?",
      answer: "Yes, MMO200N040Y1 is excellent for 12V battery applications including: (1) Battery charging systems with high current (100-200A); (2) 12V DC-DC converters for automotive; (3) High-current bus converters. The 40V rating provides good margin for 12V systems with transients. The ultra-low 1.2mΩ RDS(on) minimizes losses at high currents - critical for battery efficiency. At 150A, voltage drop is only 0.18V vs 0.5-0.8V for Schottky diodes.",
      decisionGuide: "This MOSFET is ideal for high-current 12V/24V battery applications. Explore our battery charging solutions.",
      keywords: ["MMO200N040Y1 battery", "12V MOSFET", "battery charging"]
    },
    {
      question: "How do I parallel MMO200N040Y1 for currents above 200A?",
      answer: "To parallel MMO200N040Y1: (1) Use precision matching - devices should have Vgs(th) within 0.2V; (2) Implement individual gate resistors (2-5Ω) for each device to prevent oscillation; (3) Ensure symmetrical layout with equal trace lengths (<1cm difference); (4) Use common source connection point to balance currents; (5) Derate each device by 15-20% for current sharing margin. Two devices can support 350-400A with proper design. Four devices can support 700-800A.",
      decisionGuide: "Paralleling requires careful design. Contact our FAE team for parallel MOSFET application support.",
      keywords: ["MOSFET parallel", "high current MOSFET", "current sharing"]
    }
  ]
};

// 为每个产品添加 FAQ
Object.keys(productFAQs).forEach(partNumber => {
  const faqs = productFAQs[partNumber];
  const faqsJSON = JSON.stringify(faqs, null, 2);
  
  // 查找产品位置并添加 FAQ
  const searchPattern = `"partNumber": "${partNumber}"`;
  const insertPattern = `"image": "/assets/brands/macmic/images/products/${partNumber.toLowerCase()}.jpg"\n        }`;
  
  // 在产品结束前插入 faqs
  const productEndPattern = new RegExp(`("partNumber": "${partNumber}"[\\s\\S]*?"image": "/assets/brands/macmic/images/products/${partNumber.toLowerCase()}.jpg"\n        })`);
  
  content = content.replace(productEndPattern, (match) => {
    // 在最后一个字段前插入 faqs
    return match.replace(
      '"image": "/assets/brands/macmic/images/products/' + partNumber.toLowerCase() + '.jpg"\n        }',
      '"image": "/assets/brands/macmic/images/products/' + partNumber.toLowerCase() + '.jpg",\n          "faqs": ' + faqsJSON + '\n        }'
    );
  });
});

fs.writeFileSync(filePath, content);
console.log('Added FAQs to all remaining products');
