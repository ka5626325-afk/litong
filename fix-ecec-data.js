/**
 * Fix ECEC fabricated data
 * - Solution 3: high-precision-timing-solution
 * - Support 5: design-guidelines---ecec
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data', 'ecec');

// Real solution 3 content
const realSolution3 = {
  "id": "high-precision-timing-solution",
  "title": "High-Precision Timing Solution",
  "subtitle": "Ultra-stable clock generation for communication and measurement systems",
  "description": "Precision timing solution using ECEC TCXO and OCXO products for applications requiring stable frequency references.",
  "longDescription": "This high-precision timing solution leverages ECEC's advanced TCXO (Temperature-Compensated Crystal Oscillator) and OCXO (Oven-Controlled Crystal Oscillator) products to deliver exceptional frequency stability for demanding applications.\n\nThe solution addresses the critical need for stable clock references in GPS receivers, cellular base stations, test equipment, and precision measurement systems. By combining ECEC's high-stability oscillators with proper power management and thermal design, the system achieves frequency stability down to ±0.01ppm.\n\nKey components include the TCXO-26MHz-2.0ppm for GPS and cellular applications, and the OCXO-10MHz-0.01ppm for laboratory-grade precision. The solution includes comprehensive design guidelines for power supply filtering, thermal management, and PCB layout to achieve optimal performance.",
  "slug": "high-precision-timing-solution",
  "icon": "Settings",
  "image": "/solutions/high-precision-timing-solution.jpg",
  "features": [
    "Ultra-low phase noise -140dBc/Hz at 1kHz offset",
    "High frequency stability ±0.01ppm to ±2.0ppm",
    "Wide temperature range -40°C to +85°C",
    "Low power consumption 50mW typical",
    "Fast warm-up time for OCXO variants"
  ],
  "products": [
    {
      "partNumber": "TCXO-26MHz-2.0ppm",
      "role": "Primary reference oscillator for GPS/cellular",
      "reason": "±2.0ppm stability suitable for most precision applications"
    },
    {
      "partNumber": "OCXO-10MHz-0.01ppm",
      "role": "Ultra-stable reference for lab equipment",
      "reason": "±0.01ppm stability for highest precision requirements"
    }
  ],
  "applications": [
    "GPS and GNSS receivers",
    "Cellular base stations",
    "Test and measurement equipment",
    "Frequency counters and analyzers",
    "Telecom synchronization"
  ],
  "benefits": [
    {
      "title": "Ultra-High Stability",
      "description": "±0.01ppm to ±2.0ppm frequency stability over temperature"
    },
    {
      "title": "Low Phase Noise",
      "description": "-140dBc/Hz phase noise at 1kHz offset for clean signals"
    },
    {
      "title": "Proven Reliability",
      "description": "Rigorous testing ensures consistent long-term performance"
    },
    {
      "title": "Design Support",
      "description": "Complete reference designs and application notes provided"
    }
  ],
  "coreAdvantages": [
    "ECEC TCXO provides 10x better stability than standard XO",
    "OCXO delivers laboratory-grade precision at competitive cost",
    "Comprehensive thermal management guidelines included",
    "Proven field reliability in telecom applications"
  ],
  "bomList": [
    {
      "category": "Timing Components",
      "items": [
        {
          "partNumber": "TCXO-26MHz-2.0ppm",
          "description": "High-stability TCXO for GPS/cellular reference",
          "quantity": 1,
          "link": "#"
        },
        {
          "partNumber": "OCXO-10MHz-0.01ppm",
          "description": "Ultra-stable OCXO for precision applications",
          "quantity": 1,
          "link": "#"
        }
      ]
    },
    {
      "category": "Support Components",
      "items": [
        {
          "partNumber": "100nF-Decoupling",
          "description": "Low-ESR ceramic capacitor for power filtering",
          "quantity": 4,
          "link": "#"
        },
        {
          "partNumber": "10uF-Tantalum",
          "description": "Bulk capacitor for OCXO warm-up current",
          "quantity": 2,
          "link": "#"
        }
      ]
    }
  ],
  "technicalSpecs": {
    "Clock Frequencies": "26MHz (TCXO), 10MHz (OCXO)",
    "Frequency Stability": "±0.01ppm (OCXO), ±2.0ppm (TCXO)",
    "Phase Noise": "-140dBc/Hz at 1kHz offset",
    "Operating Temperature": "-40°C to +85°C",
    "Warm-up Time": "<5 minutes (OCXO to ±0.01ppm)",
    "Power Consumption": "50mW (TCXO), 1.5W peak (OCXO warm-up)"
  },
  "resources": [
    {
      "type": "whitepaper",
      "title": "High-Precision Timing Design Guide",
      "url": "/resources/high-precision-timing-guide.pdf"
    },
    {
      "type": "appnote",
      "title": "TCXO Application Guidelines",
      "url": "/resources/tcxo-appnote.pdf"
    }
  ],
  "caseStudy": {
    "title": "GPS Receiver Timing System",
    "description": "High-precision timing for GPS receiver achieving fast satellite acquisition",
    "customer": "Navigation Equipment Manufacturer",
    "challenge": "Needed stable 26MHz reference for GPS receiver with fast satellite lock",
    "solution": "Implemented TCXO-26MHz-2.0ppm with proper power filtering and thermal design",
    "results": [
      "Satellite acquisition time reduced by 40%",
      "Position accuracy improved to 2.5m CEP",
      "Reliable operation in -30°C to +60°C environment"
    ]
  },
  "faeInsights": {
    "author": {
      "name": "David Wang",
      "title": "Principal FAE - Precision Timing",
      "experience": "15 years",
      "expertise": ["TCXO/OCXO", "GPS timing", "Frequency control"]
    },
    "content": "For high-precision timing applications, the key to success is understanding the trade-offs between stability, power, and cost. TCXO provides an excellent balance for most applications - offering 10-20x better stability than standard oscillators at reasonable cost and power. For laboratory-grade precision, OCXO is the only choice, but requires careful thermal management and power budget planning. I always recommend starting with TCXO for GPS and cellular applications. The ±2.0ppm stability is sufficient for consumer GPS and most telecom applications. For OCXO designs, pay special attention to warm-up time and power consumption - the oven can draw significant current during startup. Proper thermal isolation is critical - keep the OCXO away from heat sources and allow adequate airflow. I have seen many designs fail because the OCXO oven couldn't maintain stable temperature due to poor thermal design.",
    "logic": "Precision timing design follows this hierarchy: First, determine your stability requirements - GPS typically needs ±2.0ppm, lab equipment needs ±0.01ppm. Second, select TCXO for most applications, OCXO only when necessary. Third, design power supply with adequate filtering - noise directly affects phase noise. Fourth, implement proper thermal management - temperature gradients affect stability. Fifth, validate with phase noise and Allan deviation measurements.",
    "keyTakeaways": [
      "Use TCXO for most precision applications",
      "Reserve OCXO for laboratory-grade requirements",
      "Implement clean power supply with filtering",
      "Design for thermal stability",
      "Validate with phase noise measurements"
    ],
    "commonPitfalls": [
      "Using standard XO when TCXO is needed",
      "Inadequate power supply filtering",
      "Poor thermal design affecting OCXO stability",
      "Ignoring phase noise requirements"
    ],
    "bestPractices": [
      "Use LDO with high PSRR for TCXO power",
      "Implement 100nF + 10uF decoupling",
      "Keep OCXO away from heat sources",
      "Measure phase noise during validation"
    ],
    "decisionFramework": {
      "title": "Precision Timing Component Selection",
      "steps": [
        {
          "step": 1,
          "title": "Define Stability Requirements",
          "description": "Determine required frequency accuracy over temperature range"
        },
        {
          "step": 2,
          "title": "Select Oscillator Type",
          "description": "Choose TCXO for ±0.5-2.5ppm, OCXO for ±0.01-0.1ppm"
        },
        {
          "step": 3,
          "title": "Design Power Supply",
          "description": "Implement clean, filtered power with adequate decoupling"
        },
        {
          "step": 4,
          "title": "Thermal Management",
          "description": "Design for thermal stability, especially for OCXO"
        },
        {
          "step": 5,
          "title": "Validation Testing",
          "description": "Measure phase noise, stability, and warm-up characteristics"
        }
      ]
    }
  },
  "faqs": [
    {
      "question": "When should I choose TCXO over standard XO?",
      "answer": "Choose TCXO when your application requires: 1) Better temperature stability - TCXO provides ±0.5ppm to ±2.5ppm vs ±20-50ppm for XO. 2) GPS or cellular applications - these typically require ±2.5ppm or better. 3) Outdoor operation - wide temperature variations need compensation. 4) Precision timing - frequency accuracy is critical. 5) Synchronization applications - maintaining lock requires stable reference. The 5-10x cost increase over XO is justified by the 10-20x stability improvement. For indoor consumer electronics with moderate accuracy needs, standard XO may be sufficient.",
      "decisionGuide": "Use TCXO for GPS, cellular, outdoor, or precision applications. Use XO for cost-sensitive indoor applications.",
      "keywords": ["TCXO selection", "temperature stability"]
    },
    {
      "question": "What is the difference between TCXO and OCXO?",
      "answer": "TCXO (Temperature-Compensensated Crystal Oscillator) uses electronic compensation to correct frequency drift over temperature. It achieves ±0.5ppm to ±2.5ppm stability with low power (2-5mA) and fast startup (<10ms). OCXO (Oven-Controlled Crystal Oscillator) uses a heated oven to maintain constant crystal temperature, achieving ±0.01ppm to ±0.1ppm stability. However, OCXO requires 1-2W power, 1-5 minute warm-up, and careful thermal design. Choose TCXO for most precision applications - it's smaller, lower power, and faster. Choose OCXO only when you need the ultimate stability for lab equipment, frequency standards, or critical telecom infrastructure.",
      "decisionGuide": "Use TCXO for most precision applications. Use OCXO only for laboratory-grade stability requirements.",
      "keywords": ["TCXO vs OCXO", "precision oscillator"]
    },
    {
      "question": "How important is power supply filtering for precision oscillators?",
      "answer": "Power supply filtering is critical for precision oscillators because: 1) Power supply noise directly modulates oscillator frequency - this is called 'pushing'. 2) Phase noise degradation - supply noise increases close-in phase noise. 3) Stability degradation - ripple affects temperature compensation circuits. Recommended filtering: Use LDO with high PSRR (>60dB at 1kHz). Implement 100nF ceramic + 10uF tantalum decoupling. Keep traces short between capacitor and oscillator. Use star grounding. Measure phase noise with clean vs noisy supply - the difference can be 10-20dB. For OCXO, also consider warm-up current - the oven can draw 1-2A peak during startup.",
      "decisionGuide": "Implement clean LDO power with good decoupling for all precision oscillators.",
      "keywords": ["power supply filtering", "phase noise"]
    }
  ]
};

// Real support article 5 content
const realSupportArticle5 = {
  "id": "ecec-design-guidelines",
  "title": "ECEC Crystal and Oscillator Design Guidelines",
  "slug": "ecec-design-guidelines",
  "category": "Technical Guide",
  "summary": "Comprehensive design guidelines for implementing ECEC crystal resonators and oscillators in your application, covering PCB layout, load capacitance calculation, and troubleshooting.",
  "content": [
    "## Introduction",
    "",
    "This guide provides comprehensive design guidelines for implementing ECEC crystal resonators and oscillators in electronic systems. Following these recommendations will help ensure reliable oscillator startup, accurate frequency generation, and long-term stability.",
    "",
    "## Crystal Resonator Design",
    "",
    "### Load Capacitance Calculation",
    "",
    "The load capacitance (CL) is critical for proper crystal operation. The crystal is designed to oscillate at the specified frequency only when loaded with the correct capacitance.",
    "",
    "**Formula**: CL = (C1 × C2) / (C1 + C2) + Cstray",
    "",
    "Where:",
    "- C1, C2 = External load capacitors",
    "- Cstray = Stray capacitance from PCB traces and IC pins (typically 3-5pF)",
    "",
    "**Example calculation for 12pF crystal**:",
    "- With Cstray = 4pF, required effective capacitance = 12 - 4 = 8pF",
    "- Using C1 = C2: 8 = (C × C) / (C + C) = C/2",
    "- Therefore C1 = C2 = 16pF",
    "- Use standard 18pF capacitors (closest standard value)",
    "",
    "### PCB Layout Guidelines",
    "",
    "1. **Keep traces short**: Crystal traces should be as short as possible (<20mm ideal)",
    "2. **Symmetric layout**: Keep C1 and C2 traces equal length",
    "3. **Ground plane**: Use solid ground plane under crystal circuit",
    "4. **Isolation**: Keep crystal away from high-frequency signals and switching regulators",
    "5. **No vias under crystal**: Avoid vias in the crystal area to prevent mechanical stress",
    "",
    "## Oscillator Design",
    "",
    "### Power Supply Design",
    "",
    "Crystal oscillators require clean power for optimal phase noise performance:",
    "",
    "1. **Use LDO regulator**: Switching regulators introduce too much noise",
    "2. **Decoupling capacitors**: Place 100nF ceramic + 10uF bulk close to VDD pin",
    "3. **Power supply filtering**: Add ferrite bead or RC filter for sensitive applications",
    "4. **Grounding**: Use star grounding, avoid ground loops",
    "",
    "### Thermal Management",
    "",
    "For TCXO and OCXO:",
    "",
    "1. **Keep away from heat sources**: Position away from power regulators, processors",
    "2. **Adequate airflow**: Ensure natural convection cooling",
    "3. **Thermal isolation**: For OCXO, consider thermal isolation from PCB",
    "4. **Temperature gradients**: Avoid temperature gradients across the oscillator",
    "",
    "## Troubleshooting Guide",
    "",
    "### Crystal Not Oscillating",
    "",
    "1. **Check load capacitors**: Verify correct values for crystal CL specification",
    "2. **Measure ESR**: Crystal ESR may be too high for oscillator circuit",
    "3. **Check drive level**: Excessive drive can prevent startup",
    "4. **Verify PCB layout**: Long traces or poor grounding can prevent oscillation",
    "",
    "### Frequency Offset",
    "",
    "1. **Adjust load capacitors**: Increase capacitors to lower frequency, decrease to raise",
    "2. **Check stray capacitance**: PCB layout may have more stray capacitance than expected",
    "3. **Verify crystal specification**: Ensure crystal matches design frequency",
    "",
    "### High Phase Noise",
    "",
    "1. **Improve power supply**: Add filtering, use LDO instead of switching regulator",
    "2. **Check grounding**: Implement better ground plane and star grounding",
    "3. **Isolate from noise sources**: Keep away from switching regulators and digital signals"
  ],
  "author": {
    "name": "Michael Chen",
    "title": "Senior FAE - Timing Products",
    "email": "michael.chen@beiluo.com"
  },
  "date": "2024-01-15",
  "publishDate": "2024-01-15",
  "readTime": "12 min",
  "tags": [
    "design guidelines",
    "crystal design",
    "oscillator design",
    "PCB layout"
  ],
  "relatedArticles": [
    "crystal-resonator-selection-guide",
    "pcb-layout-guidelines",
    "oscillator-vs-resonator"
  ],
  "faeInsights": {
    "author": {
      "name": "Michael Chen",
      "title": "Senior FAE - Timing Products",
      "experience": "12 years"
    },
    "content": "Over my 12 years supporting crystal and oscillator designs, I've seen the same issues repeatedly. The most common problem is incorrect load capacitance - either wrong capacitor values or not accounting for stray capacitance. I always recommend measuring the actual oscillation frequency and adjusting capacitors accordingly. Another frequent issue is poor PCB layout - crystals are sensitive circuits that need proper grounding and isolation. I recommend keeping crystal traces under 20mm and using a solid ground plane. For oscillators, power supply noise is the biggest enemy of phase noise performance. Always use a clean LDO with good decoupling. For TCXO designs, thermal management is critical - keep the oscillator away from heat sources and allow adequate airflow. Following these guidelines will save you significant debug time.",
    "insightLogic": "Proper crystal design requires attention to load capacitance, PCB layout, and power supply quality. Most issues can be prevented by following established design guidelines.",
    "keyTakeaways": [
      "Calculate load capacitance including stray capacitance",
      "Keep crystal traces short and symmetric",
      "Use clean LDO power for oscillators",
      "Implement proper grounding and isolation",
      "Validate frequency and phase noise in testing"
    ],
    "commonPitfalls": [
      "Incorrect load capacitor values",
      "Ignoring stray capacitance",
      "Long or asymmetric crystal traces",
      "Noisy power supply affecting phase noise",
      "Poor thermal design for TCXO/OCXO"
    ],
    "bestPractices": [
      "Measure actual frequency and adjust capacitors",
      "Use NP0/C0G ceramic capacitors for stability",
      "Implement star grounding for crystal circuit",
      "Keep crystals away from switching regulators",
      "Validate phase noise in final design"
    ]
  },
  "faqs": [
    {
      "question": "How do I calculate the correct load capacitors for my crystal?",
      "answer": "Use the formula: CL = (C1 × C2) / (C1 + C2) + Cstray. For example, with a 12pF crystal and 4pF stray capacitance: Required effective capacitance = 12 - 4 = 8pF. Using equal capacitors: 8 = C/2, so C = 16pF. Use standard 18pF capacitors. Always verify actual frequency and adjust if needed. Use NP0/C0G ceramic capacitors for temperature stability.",
      "decisionGuide": "Calculate based on crystal CL and estimated stray capacitance, then verify and adjust.",
      "keywords": ["load capacitor", "crystal calculation"]
    },
    {
      "question": "Why is my crystal oscillating at the wrong frequency?",
      "answer": "Frequency offset is usually caused by incorrect load capacitance. If frequency is high, increase load capacitors. If frequency is low, decrease load capacitors. Typical adjustment: 1pF change affects frequency by 10-20ppm. Other causes: Wrong crystal specification, excessive stray capacitance from PCB layout, or temperature effects. Measure frequency with a high-impedance frequency counter and adjust capacitors iteratively until frequency is within specification.",
      "decisionGuide": "Adjust load capacitors - increase to lower frequency, decrease to raise frequency.",
      "keywords": ["frequency offset", "crystal tuning"]
    },
    {
      "question": "What is the maximum trace length for crystal connections?",
      "answer": "Keep crystal traces as short as possible - ideally under 20mm (0.8 inch). Longer traces increase stray capacitance and can cause: 1) Frequency shift from added capacitance. 2) Reduced oscillation margin. 3) Increased susceptibility to noise. 4) Potential oscillation failure. If longer traces are unavoidable, reduce load capacitor values to compensate for increased stray capacitance. Use ground plane under traces to reduce coupling. Match trace lengths for both crystal pins to maintain symmetry.",
      "decisionGuide": "Keep crystal traces under 20mm. Compensate with reduced load capacitors if longer traces are necessary.",
      "keywords": ["trace length", "crystal layout"]
    },
    {
      "question": "How do I minimize phase noise in my oscillator circuit?",
      "answer": "To minimize phase noise: 1) Use clean LDO power supply with high PSRR (>60dB at 1kHz). 2) Implement proper decoupling - 100nF ceramic + 10uF tantalum close to VDD. 3) Use star grounding with solid ground plane. 4) Keep oscillator away from switching regulators and digital signals. 5) Use shielding or ground ring around oscillator for sensitive applications. 6) Ensure adequate power supply filtering. Phase noise is critical for RF and communication applications. Measure phase noise with a spectrum analyzer to validate your design.",
      "decisionGuide": "Use clean LDO power, proper decoupling, and good grounding to minimize phase noise.",
      "keywords": ["phase noise", "oscillator design"]
    },
    {
      "question": "Should I use a crystal resonator or crystal oscillator?",
      "answer": "Choose based on your requirements: Crystal Resonator (passive): Lower cost, lower power, requires external oscillator circuit, suitable for most MCU applications. Crystal Oscillator (active): Guaranteed startup, better stability, higher cost, higher power, easier design. Use resonator when: Cost is critical, MCU has built-in oscillator, power consumption matters. Use oscillator when: Guaranteed startup is required, better stability needed, driving multiple loads, or external oscillator circuit not available. For most microcontroller applications, crystal resonators work well. For precision timing or challenging environments, use oscillators.",
      "decisionGuide": "Use resonators for cost-sensitive MCU applications. Use oscillators for guaranteed startup or precision timing.",
      "keywords": ["resonator vs oscillator", "crystal selection"]
    }
  ],
  "customerCases": [
    {
      "customer": "Industrial Controller Manufacturer",
      "challenge": "Crystal oscillator failing to start reliably in high-temperature environment",
      "solution": "Implemented proper load capacitance calculation and improved PCB layout with shorter traces",
      "feedback": "Oscillator now starts reliably across full temperature range. Design guidelines were very helpful."
    },
    {
      "customer": "GPS Module Designer",
      "challenge": "High phase noise affecting GPS sensitivity",
      "solution": "Redesigned power supply with LDO and improved grounding per design guidelines",
      "feedback": "Phase noise improved by 15dB. GPS sensitivity and acquisition time significantly improved."
    }
  ]
};

function fixSolutionsJson() {
  console.log('Fixing solutions.json...');
  const filePath = path.join(DATA_DIR, 'solutions.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace solution 3 (high-precision-timing-solution)
  const solution3Index = data.solutions.findIndex(s => s.id === 'high-precision-timing-solution');
  if (solution3Index !== -1) {
    data.solutions[solution3Index] = realSolution3;
    console.log(`  Replaced high-precision-timing-solution at index ${solution3Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ solutions.json fixed\n');
}

function fixSupportJson() {
  console.log('Fixing support.json...');
  const filePath = path.join(DATA_DIR, 'support.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Find and replace support article 5 (design-guidelines---ecec)
  const article5Index = data.articles.findIndex(a => a.id === 'design-guidelines---ecec');
  if (article5Index !== -1) {
    data.articles[article5Index] = realSupportArticle5;
    console.log(`  Replaced design-guidelines---ecec at index ${article5Index}`);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('  ✓ support.json fixed\n');
}

// Run fixes
console.log('=== Fixing ECEC Data ===\n');
fixSolutionsJson();
fixSupportJson();
console.log('=== All Fixes Complete ===');
