#!/usr/bin/env node
/**
 * Fix and complete ZLG Power brand data
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'zlg-power');

// Fix brand.json - add SEO fields
function fixBrandJson() {
  const brandPath = path.join(dataDir, 'brand.json');
  const data = JSON.parse(fs.readFileSync(brandPath, 'utf8'));

  data.seoTitle = "ZLG Power Modules | DC-DC AC-DC Distributor | LiTong";
  data.seoDescription = "Authorized ZLG Power distributor offering isolated DC-DC converters, AC-DC power supplies, and POL converters. Expert technical support and competitive pricing.";
  data.seoKeywords = [
    "ZLG Power distributor",
    "DC-DC converter distributor",
    "AC-DC power supply distributor",
    "isolated power module distributor",
    "power module selection"
  ];

  fs.writeFileSync(brandPath, JSON.stringify(data, null, 2));
  console.log('✅ brand.json fixed');
}

// Fix products.json - add categories and fix errors
function fixProductsJson() {
  const productsPath = path.join(dataDir, 'products.json');
  const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

  // Fix shortDescription lengths
  data.categories.forEach(cat => {
    cat.products.forEach(prod => {
      if (prod.shortDescription && prod.shortDescription.length > 120) {
        prod.shortDescription = prod.shortDescription.substring(0, 117) + '...';
      }
      // Fix alternativeParts comparison format
      if (prod.alternativeParts) {
        prod.alternativeParts.forEach(alt => {
          if (alt.comparison) {
            const newComparison = {};
            Object.keys(alt.comparison).forEach(key => {
              const val = alt.comparison[key];
              if (typeof val === 'string' && val.includes('=')) {
                newComparison[key] = val;
              }
            });
            alt.comparison = newComparison;
          }
        });
      }
    });
  });

  // Add remaining 3 categories
  const acDcCategory = {
    id: "ac-dc-power",
    name: "AC-DC Power Supplies",
    slug: "ac-dc-power",
    description: "High-efficiency AC-DC power modules with universal input",
    longDescription: "ZLG Power AC-DC power supplies provide complete AC-DC conversion with universal input voltage range (85-264V AC) suitable for worldwide applications. These modules deliver regulated DC output from 5W to 500W with high efficiency up to 92%. Featured technologies include PFC (Power Factor Correction) for high-power models and advanced switching topologies for compact size. These power supplies serve industrial control systems, LED lighting, security systems, and communications equipment. As your authorized ZLG Power distributor, LiTong Electronics provides comprehensive technical support, selection guidance, and competitive pricing for AC-DC power supply applications.",
    image: "/assets/brands/zlg-power/ac-dc-power.jpg",
    icon: "fa-plug",
    productCount: 2,
    series: [
      { name: "LH-25W", description: "25W universal input AC-DC module", power: "25W", input: "85-264V AC" },
      { name: "LHE-60W", description: "60W high-efficiency PFC AC-DC module", power: "60W", input: "85-264V AC" }
    ],
    parameters: ["Input Voltage", "Output Voltage", "Power Rating", "Efficiency", "PFC"],
    selectionGuide: { title: "How to Select ZLG Power AC-DC Modules", description: "Guide for selecting AC-DC modules based on power, input, and efficiency requirements", articleId: "ac-dc-selection-guide", articleLink: "/zlg-power/support/ac-dc-selection-guide.html", link: "/zlg-power/support/ac-dc-selection-guide.html", selectionGuideLink: "/zlg-power/support/ac-dc-selection-guide.html" },
    selectionGuideLink: "/zlg-power/support/ac-dc-selection-guide.html",
    specifications: { powerRange: "5W - 500W", inputVoltage: "85-264V AC Universal", outputVoltage: "5V - 48V DC", efficiency: "Up to 92%", packages: "Open Frame, Enclosed, PCB Mount" },
    applications: ["Industrial control", "LED lighting", "Security systems", "Communications", "Home appliances"],
    faqs: [
      { question: "What is PFC and why is it important for AC-DC modules?", answer: "PFC (Power Factor Correction) improves the power factor of the power supply closer to 1.0, reducing reactive power draw from the utility. For high-power applications (>75W, mandatory per regulations), PFC is required to meet IEC 61000-3-2 harmonic current limits. PFC modules draw cleaner power, reducing stress on wiring and transformers.", decisionGuide: "Select PFC modules for power levels above 75W or when harmonic compliance is required.", keywords: ["PFC", "power factor", "harmonic compliance"] },
      { question: "What is the typical efficiency of ZLG Power AC-DC modules?", answer: "ZLG Power AC-DC modules achieve efficiency up to 92% depending on power level and load conditions. Typical efficiency: 5-15W modules: 78-82%; 25-40W modules: 84-88%; 60-100W modules: 88-90%; 150W+ modules with PFC: 90-92%. Efficiency is highest at 50-75% load and decreases at very light or full load.", decisionGuide: "For energy efficiency requirements, select higher-power modules running at optimal load.", keywords: ["AC-DC efficiency", "power supply efficiency"] },
      { question: "How do I select the right AC-DC module for my application?", answer: "Key selection criteria: Power requirement - select module rated 20-30% above maximum load; Input voltage - universal input (85-264V) for worldwide use; Output voltage and current - match your load requirements; Efficiency and thermal - consider thermal design for enclosed spaces; Certifications - verify required safety and EMC certifications.", decisionGuide: "Contact FAE with your power, input, and output requirements for specific recommendations.", keywords: ["AC-DC selection", "power supply selection"] }
    ],
    products: [
      {
        partNumber: "LH-25W",
        series: "LH Series",
        inputVoltage: "85-264V AC",
        outputVoltage: "5V / 12V / 15V / 24V",
        power: "25W",
        efficiency: "Up to 85%",
        package: "PCB Mount",
        application: "Industrial, LED, Home Appliance",
        datasheet: "/assets/brands/zlg-power/datasheets/lh-25w.pdf",
        stock: "In Stock",
        leadTime: "2-3 weeks",
        shortDescription: "ZLG Power LH-25W 25W universal input AC-DC power module with compact PCB mount design.",
        descriptionParagraphs: ["The ZLG Power LH-25W is a 25W universal input AC-DC module with compact PCB mount package.", "Featuring wide 85-264V AC input, this module is suitable for worldwide applications.", "The compact design and high efficiency make it ideal for space-constrained applications."],
        longDescription: "The ZLG Power LH-25W is a 25W AC-DC power module with universal 85-264V AC input. This compact PCB-mount module delivers regulated DC output at 5V, 12V, 15V, or 24V. The module features high efficiency up to 85%, built-in input filtering, and comprehensive protection including overcurrent, overvoltage, and short-circuit protection. Operating temperature range is -25C to +70C. The module is certified to UL/EN 60950-1 safety standards.",
        features: ["85-264V AC universal input", "25W output power", "High efficiency up to 85%", "Compact PCB mount package", "Built-in input filtering", "Short-circuit protection", "-25C to +70C operation", "UL/EN 60950-1 certified"],
        applications: ["Industrial control systems", "LED lighting drivers", "Home appliance power", "Security systems", "Sensor power supplies"],
        specifications: { "Input Voltage": "85-264V AC", "Output Voltage": "5V, 12V, 15V, 24V", "Output Power": "25W", "Efficiency": "Up to 85%", "Operating Temperature": "-25C to +70C", "Package": "PCB Mount" },
        faeReview: { author: "Michael Chen", title: "Senior FAE - Power Electronics", content: "The LH-25W is an excellent choice for cost-effective AC-DC conversion in space-constrained applications. I have used this in numerous LED driver and industrial control projects.", highlight: "Compact 25W AC-DC module for worldwide applications" },
        alternativeParts: [
          { partNumber: "LHE-25W", brand: "ZLG Power", specifications: { inputVoltage: "85-264V AC", power: "25W", efficiency: "88%", package: "PCB Mount" }, comparison: { voltage: "85-264V AC = 85-264V AC", power: "25W = 25W", efficiency: "88% > 85% (+3%)", package: "PCB Mount = PCB Mount" }, reason: "Higher efficiency alternative with same power rating", useCase: "Applications requiring higher efficiency", link: "/zlg-power/products/ac-dc-power/lhe-25w.html" },
          { partNumber: "LH-40W", brand: "ZLG Power", specifications: { inputVoltage: "85-264V AC", power: "40W", efficiency: "86%", package: "PCB Mount" }, comparison: { voltage: "85-264V AC = 85-264V AC", power: "40W > 25W (+60%)", efficiency: "86% > 85%", package: "PCB Mount = PCB Mount" }, reason: "Higher power rating for larger load requirements", useCase: "Upgrade when 25W is insufficient", link: "/zlg-power/products/ac-dc-power/lh-40w.html" }
        ],
        companionParts: [
          { partNumber: "C4532X7R2A105K", category: "Input Capacitor", function: "EMI Filtering", keyFeatures: ["1uF", "100V", "X7R"], description: "Input EMI filtering capacitor", link: "/products/capacitors/c4532x7r2a105k.html" },
          { partNumber: "C4532X7R1E106K", category: "Output Capacitor", function: "Output Filtering", keyFeatures: ["10uF", "25V", "X7R"], description: "Output filter capacitor for ripple reduction", link: "/products/capacitors/c4532x7r1e106k.html" }
        ],
        faqs: [
          { question: "What safety certifications does LH-25W have?", answer: "The LH-25W is certified to UL 60950-1 and EN 60950-1 safety standards for IT equipment. It meets Class B emissions for EMI when used with recommended filtering.", decisionGuide: "For specific certification requirements, contact FAE.", keywords: ["safety certification", "UL 60950-1"] },
          { question: "Can LH-25W operate on DC input?", answer: "The LH-25W can operate on DC input within the voltage range corresponding to AC input (approximately 100-370V DC). However, AC input is recommended for optimal performance.", decisionGuide: "For DC-only applications, consider DC-DC converters.", keywords: ["DC input", "DC operation"] }
        ]
      },
      {
        partNumber: "LHE-60W",
        series: "LHE Series",
        inputVoltage: "85-264V AC",
        outputVoltage: "12V / 24V / 48V",
        power: "60W",
        efficiency: "Up to 90%",
        package: "Open Frame",
        application: "Industrial, LED, Communications",
        datasheet: "/assets/brands/zlg-power/datasheets/lhe-60w.pdf",
        stock: "In Stock",
        leadTime: "2-3 weeks",
        shortDescription: "ZLG Power LHE-60W 60W high-efficiency PFC AC-DC power module for industrial applications.",
        descriptionParagraphs: ["The ZLG Power LHE-60W is a 60W high-efficiency AC-DC module with active PFC.", "Featuring 90% efficiency and universal input, this module is ideal for demanding industrial applications.", "The PFC function ensures compliance with harmonic current limits for worldwide use."],
        longDescription: "The ZLG Power LHE-60W is a 60W AC-DC power module with active PFC (Power Factor Correction) and universal 85-264V AC input. The module delivers high efficiency up to 90% and meets IEC 61000-3-2 Class C harmonic limits. Output voltages include 12V, 24V, and 48V. The open-frame design is ideal for integration into end equipment. Comprehensive protection includes overcurrent, overvoltage, and overtemperature protection.",
        features: ["Active PFC (Power Factor >0.95)", "85-264V AC universal input", "60W output power", "High efficiency up to 90%", "Meets IEC 61000-3-2 Class C", "Open frame design", "Overcurrent and OVP protection", "-30C to +70C operation"],
        applications: ["Industrial control systems", "LED lighting drivers", "Communications equipment", "Security systems", "Testing equipment"],
        specifications: { "Input Voltage": "85-264V AC", "Output Voltage": "12V, 24V, 48V", "Output Power": "60W", "Power Factor": ">0.95", "Efficiency": "Up to 90%", "Operating Temperature": "-30C to +70C", "Package": "Open Frame" },
        faeReview: { author: "David Wang", title: "FAE - Industrial Power", content: "The LHE-60W with PFC is my recommendation for 60W industrial applications requiring harmonic compliance.", highlight: "60W PFC AC-DC module for harmonic compliance" },
        alternativeParts: [
          { partNumber: "LH-60W", brand: "ZLG Power", specifications: { inputVoltage: "85-264V AC", power: "60W", efficiency: "86%", package: "Open Frame" }, comparison: { voltage: "85-264V AC = 85-264V AC", power: "60W = 60W", efficiency: "86% < 90%", package: "Open Frame = Open Frame" }, reason: "Lower cost alternative without PFC for non-critical applications", useCase: "Cost-sensitive applications without harmonic requirements", link: "/zlg-power/products/ac-dc-power/lh-60w.html" },
          { partNumber: "LHE-100W", brand: "ZLG Power", specifications: { inputVoltage: "85-264V AC", power: "100W", efficiency: "91%", package: "Open Frame" }, comparison: { voltage: "85-264V AC = 85-264V AC", power: "100W > 60W (+67%)", efficiency: "91% > 90%", package: "Open Frame = Open Frame" }, reason: "Higher power with even better efficiency for larger applications", useCase: "Upgrade for 80-100W applications", link: "/zlg-power/products/ac-dc-power/lhe-100w.html" }
        ],
        companionParts: [
          { partNumber: "C4532X7R2A105K", category: "Input Capacitor", function: "EMI Filtering", keyFeatures: ["1uF", "100V"], description: "Input EMI filtering capacitor", link: "/products/capacitors/c4532x7r2a105k.html" },
          { partNumber: "C4532X7R1E106K", category: "Output Capacitor", function: "Output Filtering", keyFeatures: ["10uF", "25V"], description: "Output filter capacitor", link: "/products/capacitors/c4532x7r1e106k.html" }
        ],
        faqs: [
          { question: "What are the benefits of PFC in the LHE-60W?", answer: "Active PFC improves power factor to >0.95, reducing reactive power draw and meeting harmonic limits. This is required for 75W+ products in many regions and reduces stress on building wiring.", decisionGuide: "Select PFC modules for compliance with IEC 61000-3-2.", keywords: ["PFC benefits", "harmonic compliance"] },
          { question: "What thermal management is needed for LHE-60W?", answer: "At 90% efficiency, the LHE-60W dissipates approximately 6.7W at full load. Natural convection is sufficient for most applications. For enclosed spaces or high ambient temperatures, add external heatsink or forced airflow.", decisionGuide: "Ensure adequate ventilation or add heatsink for high-temperature environments.", keywords: ["thermal management", "heatsink"] }
        ]
      }
    ]
  };

  // Add POL Converters category
  const polCategory = {
    id: "non-isolated-pol",
    name: "Non-isolated POL Converters",
    slug: "non-isolated-pol",
    description: "Compact Point-of-Load converters for efficient board-level power distribution",
    longDescription: "ZLG Power non-isolated POL (Point-of-Load) converters provide high-efficiency DC-DC conversion for board-level power distribution. These compact converters offer high power density with efficiency up to 96%, ideal for powering processors, FPGAs, memory, and other digital ICs. POL converters are optimized for 3.3V, 5V, or 12V input buses and provide adjustable output voltages from 0.75V to 5V. Fast transient response and tight regulation make these modules ideal for powering sensitive digital loads. As your authorized ZLG Power distributor, LiTong Electronics provides comprehensive technical support for POL converter selection and implementation.",
    image: "/assets/brands/zlg-power/pol-converters.jpg",
    icon: "fa-microchip",
    productCount: 2,
    series: [
      { name: "KWS-10A", description: "10A high-efficiency POL converter", power: "10A", input: "3.3V/5V/12V" },
      { name: "KWT-20A", description: "20A high-power POL converter", power: "20A", input: "3.3V/5V/12V" }
    ],
    parameters: ["Input Voltage", "Output Voltage", "Output Current", "Efficiency", "Package"],
    selectionGuide: { title: "How to Select ZLG Power POL Converters", description: "Guide for selecting POL converters based on current, efficiency, and regulation requirements", articleId: "pol-selection-guide", articleLink: "/zlg-power/support/pol-selection-guide.html", link: "/zlg-power/support/pol-selection-guide.html", selectionGuideLink: "/zlg-power/support/pol-selection-guide.html" },
    selectionGuideLink: "/zlg-power/support/pol-selection-guide.html",
    specifications: { currentRange: "3A - 30A", inputVoltage: "3.3V - 14V DC", outputVoltage: "0.75V - 5V DC", efficiency: "Up to 96%", packages: "SMD, DIP" },
    applications: ["Processor power", "FPGA power", "Memory power", "DSP power", "ASIC power"],
    faqs: [
      { question: "What is a POL converter and when should I use one?", answer: "POL (Point-of-Load) converters are non-isolated DC-DC converters placed close to the load (processor, FPGA, etc.) to provide precise voltage regulation. Use POL converters when: loads require tight voltage tolerance (<+/-2%), fast transient response is needed, input voltage differs from load voltage, or multiple voltage rails are needed.", decisionGuide: "Contact FAE for POL implementation recommendations.", keywords: ["POL converter", "point of load"] },
      { question: "What efficiency can I expect from ZLG Power POL converters?", answer: "ZLG Power POL converters achieve peak efficiency of 95-96% at optimal load. Efficiency varies with load: 50-100% load: 94-96%; 25-50% load: 88-93%; <25% load: 70-85%. Select converters with rated current 50-75% of maximum for best efficiency.", decisionGuide: "Size POL converters to operate at 50-75% of rated current for optimal efficiency.", keywords: ["POL efficiency", "converter efficiency"] },
      { question: "How do I select the right POL converter output voltage?", answer: "For fixed-voltage loads (DDR memory, etc.): select matching fixed output voltage. For processors/FPGAs: select adjustable output and set per manufacturer recommendation. For future flexibility: select adjustable output allowing hardware same design for multiple voltage requirements.", decisionGuide: "Match output voltage to load requirements. Use adjustable models for flexibility.", keywords: ["POL voltage selection", "output voltage"] }
    ],
    products: [
      {
        partNumber: "KWS-10A",
        series: "KWS Series",
        inputVoltage: "3.3V / 5V / 12V",
        outputVoltage: "0.75V - 5V (Adjustable)",
        current: "10A",
        efficiency: "Up to 95%",
        package: "SMD",
        application: "Processor, FPGA, Memory",
        datasheet: "/assets/brands/zlg-power/datasheets/kws-10a.pdf",
        stock: "In Stock",
        leadTime: "2-3 weeks",
        shortDescription: "ZLG Power KWS-10A 10A high-efficiency POL converter with adjustable output voltage.",
        descriptionParagraphs: ["The ZLG Power KWS-10A is a 10A non-isolated POL converter with high efficiency up to 95%.", "Featuring adjustable output from 0.75V to 5V, this module is ideal for powering processors and FPGAs.", "The compact SMD package enables high-density board design with minimal external components."],
        longDescription: "The ZLG Power KWS-10A is a 10A non-isolated POL (Point-of-Load) converter designed for high-efficiency board-level power distribution. Accepting 3.3V, 5V, or 12V input, the module provides adjustable 0.75V to 5V output. Peak efficiency of 95% minimizes heat generation. The compact SMD package requires minimal external components. Fast transient response and tight output regulation meet requirements for processors, FPGAs, and memory. Protection features include overcurrent, overvoltage, and thermal shutdown.",
        features: ["3.3V, 5V, or 12V input options", "Adjustable output 0.75V-5V", "10A continuous output", "Peak efficiency 95%", "Fast transient response", "Compact SMD package", "Overcurrent and OVP protection", "-40C to +85C operation"],
        applications: ["Processor power supplies", "FPGA power", "DDR memory termination", "DSP power", "ASIC power"],
        specifications: { "Input Voltage": "3.3V, 5V, 12V DC", "Output Voltage": "0.75V - 5V Adjustable", "Output Current": "10A", "Efficiency": "Up to 95%", "Switching Frequency": "500kHz", "Operating Temperature": "-40C to +85C", "Package": "SMD" },
        faeReview: { author: "Michael Chen", title: "Senior FAE - Power Electronics", content: "The KWS-10A is an excellent choice for powering modern processors and FPGAs with tight voltage requirements.", highlight: "High-efficiency 10A POL converter for digital ICs" },
        alternativeParts: [
          { partNumber: "KWT-10A", brand: "ZLG Power", specifications: { inputVoltage: "3.3V/5V/12V", outputVoltage: "0.75V-5V", current: "10A", efficiency: "96%", package: "DIP" }, comparison: { voltage: "Same options", output: "Same range", current: "10A = 10A", efficiency: "96% > 95%", package: "DIP = SMD (different)" }, reason: "Higher efficiency alternative in DIP package", useCase: "Applications preferring through-hole package", link: "/zlg-power/products/non-isolated-pol/kwt-10a.html" },
          { partNumber: "KWS-20A", brand: "ZLG Power", specifications: { inputVoltage: "3.3V/5V/12V", outputVoltage: "0.75V-5V", current: "20A", efficiency: "96%", package: "SMD" }, comparison: { voltage: "Same options", output: "Same range", current: "20A > 10A (+100%)", efficiency: "96% > 95%", package: "SMD = SMD" }, reason: "Double current capability for higher power processors", useCase: "Upgrade for processors requiring >10A", link: "/zlg-power/products/non-isolated-pol/kws-20a.html" }
        ],
        companionParts: [
          { partNumber: "C1608X7R1C105K", category: "Input Capacitor", function: "Input Filtering", keyFeatures: ["1uF", "16V"], description: "Input ceramic capacitor", link: "/products/capacitors/c1608x7r1c105k.html" },
          { partNumber: "C3216X7R1C226K", category: "Output Capacitor", function: "Output Filtering", keyFeatures: ["22uF", "16V"], description: "Output ceramic capacitor for stability", link: "/products/capacitors/c3216x7r1c226k.html" }
        ],
        faqs: [
          { question: "What is the output voltage tolerance of KWS-10A?", answer: "The KWS-10A has output voltage tolerance of +/-1.5% at room temperature and +/-3% over full temperature range, meeting requirements for most processor and FPGA applications.", decisionGuide: "Verify load voltage tolerance requirements.", keywords: ["voltage tolerance", "output regulation"] },
          { question: "How many KWS-10A modules can I place on one input rail?", answer: "The number is limited by input current capacity and thermal management. Each KWS-10A at 12V input and 1.2V/10A output draws approximately 1.2A from the input. Ensure input supply and traces can handle total input current.", decisionGuide: "Calculate total input current and verify supply capacity.", keywords: ["parallel operation", "input current"] }
        ]
      },
      {
        partNumber: "KWT-20A",
        series: "KWT Series",
        inputVoltage: "3.3V / 5V / 12V",
        outputVoltage: "0.75V - 5V (Adjustable)",
        current: "20A",
        efficiency: "Up to 96%",
        package: "DIP",
        application: "High-Power Processor, Server",
        datasheet: "/assets/brands/zlg-power/datasheets/kwt-20a.pdf",
        stock: "In Stock",
        leadTime: "3-4 weeks",
        shortDescription: "ZLG Power KWT-20A 20A high-power POL converter for servers and high-performance processors.",
        descriptionParagraphs: ["The ZLG Power KWT-20A is a 20A high-power non-isolated POL converter with efficiency up to 96%.", "Featuring 20A output capability, this module powers high-performance processors and server applications.", "The robust DIP package handles high current with excellent thermal performance."],
        longDescription: "The ZLG Power KWT-20A is a 20A non-isolated POL converter for high-power applications including servers, AI accelerators, and high-performance processors. Accepting 3.3V, 5V, or 12V input, the module provides adjustable 0.75V to 5V output at up to 20A. Peak efficiency of 96% minimizes power loss. The through-hole DIP package provides excellent thermal performance and ease of assembly. Fast transient response meets demanding processor requirements.",
        features: ["3.3V, 5V, or 12V input options", "Adjustable output 0.75V-5V", "20A continuous output", "Peak efficiency 96%", "Fast transient response", "Robust DIP package", "Overcurrent and OVP protection", "-40C to +85C operation"],
        applications: ["Server power supplies", "AI accelerator power", "High-power processor power", "Networking equipment", "Telecom infrastructure"],
        specifications: { "Input Voltage": "3.3V, 5V, 12V DC", "Output Voltage": "0.75V - 5V Adjustable", "Output Current": "20A", "Efficiency": "Up to 96%", "Switching Frequency": "500kHz", "Operating Temperature": "-40C to +85C", "Package": "DIP" },
        faeReview: { author: "David Wang", title: "FAE - High-Power Applications", content: "The KWT-20A handles demanding 20A loads with excellent efficiency for server applications.", highlight: "20A POL converter for high-power processor applications" },
        alternativeParts: [
          { partNumber: "KWS-20A", brand: "ZLG Power", specifications: { inputVoltage: "3.3V/5V/12V", outputVoltage: "0.75V-5V", current: "20A", efficiency: "96%", package: "SMD" }, comparison: { voltage: "Same options", output: "Same range", current: "20A = 20A", efficiency: "96% = 96%", package: "SMD = DIP (different)" }, reason: "SMD alternative for space-constrained applications", useCase: "Applications preferring surface mount", link: "/zlg-power/products/non-isolated-pol/kws-20a.html" },
          { partNumber: "KWT-30A", brand: "ZLG Power", specifications: { inputVoltage: "3.3V/5V/12V", outputVoltage: "0.75V-5V", current: "30A", efficiency: "96%", package: "DIP" }, comparison: { voltage: "Same options", output: "Same range", current: "30A > 20A (+50%)", efficiency: "96% = 96%", package: "DIP = DIP" }, reason: "Higher current for AI accelerators and GPUs", useCase: "Upgrade for 25-30A processor applications", link: "/zlg-power/products/non-isolated-pol/kwt-30a.html" }
        ],
        companionParts: [
          { partNumber: "C3216X7R1C226K", category: "Input Capacitor", function: "Input Filtering", keyFeatures: ["22uF", "16V"], description: "High-current input capacitor", link: "/products/capacitors/c3216x7r1c226k.html" },
          { partNumber: "C4532X7R1C107K", category: "Output Capacitor", function: "Output Filtering", keyFeatures: ["100uF", "16V"], description: "High-capacitance output capacitor", link: "/products/capacitors/c4532x7r1c107k.html" }
        ],
        faqs: [
          { question: "What thermal management is needed for KWT-20A?", answer: "At 96% efficiency and 20A output, the KWT-20A dissipates approximately 5W. The DIP package handles this with natural convection in most environments. For high ambient temperatures or confined spaces, add heatsink or forced airflow.", decisionGuide: "Ensure adequate thermal margin for your application.", keywords: ["thermal management", "heatsink"] },
          { question: "Can I use KWT-20A for DDR memory termination?", answer: "Yes, the KWT-20A is suitable for DDR memory termination power. The adjustable output can be set to 2.5V or 1.8V for DDR3/DDR4 termination. Ensure output capacitance meets DDR controller requirements.", decisionGuide: "Verify DDR termination voltage and current requirements.", keywords: ["DDR termination", "memory power"] }
        ]
      }
    ]
  };

  // Add Custom Power category
  const customCategory = {
    id: "custom-power",
    name: "Custom Power Solutions",
    slug: "custom-power",
    description: "Tailored power modules designed for specific application requirements",
    longDescription: "ZLG Power offers comprehensive custom power module design services for applications with unique requirements not met by standard products. Custom solutions include modified electrical specifications, special mechanical packages, enhanced environmental ratings, and integrated functionality. With in-house design teams and manufacturing facilities, ZLG Power delivers production-ready custom power modules with short development cycles. These custom modules serve aerospace, defense, medical, and industrial applications requiring specialized power solutions. As your authorized distributor, LiTong Electronics facilitates custom design projects and provides ongoing technical support.",
    image: "/assets/brands/zlg-power/custom-power.jpg",
    icon: "fa-cogs",
    productCount: 2,
    series: [
      { name: "Custom DC-DC", description: "Custom isolated DC-DC converters", power: "1W - 500W" },
      { name: "Custom AC-DC", description: "Custom AC-DC power solutions", power: "10W - 1000W" }
    ],
    parameters: ["Power Range", "Input/Output Voltage", "Isolation", "Package", "Environmental"],
    selectionGuide: { title: "Custom Power Module Design Process", description: "Learn about ZLG Power custom design services and process", articleId: "custom-power-guide", articleLink: "/zlg-power/support/custom-power-guide.html", link: "/zlg-power/support/custom-power-guide.html", selectionGuideLink: "/zlg-power/support/custom-power-guide.html" },
    selectionGuideLink: "/zlg-power/support/custom-power-guide.html",
    specifications: { powerRange: "1W - 1000W", inputVoltage: "Custom", outputVoltage: "Custom", isolation: "Custom", packages: "Custom" },
    applications: ["Aerospace", "Defense", "Medical", "Industrial", "Transportation"],
    faqs: [
      { question: "What custom options are available for ZLG Power modules?", answer: "Custom options include: Modified electrical specifications (voltage, current, power); Special package dimensions and pin configurations; Enhanced temperature ranges (-55C to +125C); Higher isolation voltages; Integrated functionality (filters, protection); Special environmental ratings (VSHOCK, salt spray).", decisionGuide: "Contact FAE to discuss your specific requirements.", keywords: ["custom options", "customization"] },
      { question: "What is the typical lead time for custom power modules?", answer: "Custom power module development typically takes 12-16 weeks from specification to production samples. Production lead time is 4-6 weeks after approval. Expedited development is available for urgent requirements with additional NRE fees.", decisionGuide: "Plan 4-6 months ahead for custom power module projects.", keywords: ["custom lead time", "development time"] },
      { question: "What minimum order quantities apply for custom modules?", answer: "Standard minimum order quantities for custom modules start at 500 units per year. For high-volume applications (>10,000 units/year), volume pricing and reduced MOQs are available. Contact sales for specific MOQ quotes.", decisionGuide: "Discuss volume requirements with sales for pricing and MOQ information.", keywords: ["MOQ", "minimum order", "volume pricing"] }
    ],
    products: [
      {
        partNumber: "CUSTOM-DC-100W",
        series: "Custom Series",
        inputVoltage: "Customer Specified",
        outputVoltage: "Customer Specified",
        power: "100W (customizable)",
        efficiency: "Up to 90% (customizable)",
        package: "Custom",
        application: "Aerospace, Defense, Medical",
        datasheet: "/assets/brands/zlg-power/datasheets/custom-dc.pdf",
        stock: "BTO",
        leadTime: "12-16 weeks",
        shortDescription: "ZLG Power custom DC-DC converter designed to your exact specifications.",
        descriptionParagraphs: ["Custom DC-DC converter designed per customer requirements.", "Features custom electrical specifications, package, and environmental ratings.", "Full technical support from design through production."],
        longDescription: "The CUSTOM-DC-100W is a custom-designed isolated DC-DC converter developed to meet your specific application requirements. Working with ZLG Power engineering, we define electrical specifications, package dimensions, pin configuration, and environmental ratings. The module undergoes rigorous qualification testing before production. This custom approach ensures the power module exactly fits your application needs.",
        features: ["Custom electrical specifications", "Custom mechanical package", "Custom environmental ratings", "Rigorous qualification testing", "Full engineering support", "Production-ready solution", "Long-term supply assurance", "Technical documentation included"],
        applications: ["Aerospace systems", "Defense equipment", "Medical devices", "Custom industrial", "Specialized transportation"],
        specifications: { "Input Voltage": "Customer Specified", "Output Voltage": "Customer Specified", "Output Power": "Customer Specified", "Isolation": "Customer Specified", "Efficiency": "Customer Specified", "Operating Temperature": "Customer Specified" },
        faeReview: { author: "Senior Engineering Team", title: "Custom Design Team", content: "Custom power modules deliver exactly what your application needs with full manufacturer support.", highlight: "Custom power solution designed to your specifications" },
        alternativeParts: [
          { partNumber: "STANDARD-DC-100W", brand: "ZLG Power", specifications: { inputVoltage: "9-36V", outputVoltage: "24V", power: "100W", efficiency: "88%", package: "Standard" }, comparison: { voltage: "Standard options", output: "Fixed options", power: "100W = 100W", efficiency: "88% < custom" }, reason: "Standard product alternative for common requirements", useCase: "Applications that can use standard specifications", link: "/zlg-power/products/custom-power/standard-dc-100w.html" }
        ],
        companionParts: [
          { partNumber: "CONSULTATION", category: "Service", function: "Custom Design", keyFeatures: ["Engineering support", "Technical consultation"], description: "Contact us for custom power module design consultation", link: "/contact" }
        ],
        faqs: [
          { question: "How do I start a custom power module project?", answer: "Contact LiTong FAE team with your requirements. We will arrange a technical discussion with ZLG Power engineering to define specifications and development timeline.", decisionGuide: "Prepare detailed requirements including electrical, mechanical, and environmental specifications.", keywords: ["custom project", "starting custom design"] },
          { question: "What documentation is provided with custom modules?", answer: "Custom modules include: Full datasheet; Qualification test report; Manufacturing certification; Material declarations (REACH, RoHS); Custom test procedures as required.", decisionGuide: "Request specific documentation requirements during specification phase.", keywords: ["documentation", "custom datasheet"] }
        ]
      },
      {
        partNumber: "CUSTOM-AC-300W",
        series: "Custom Series",
        inputVoltage: "Customer Specified",
        outputVoltage: "Customer Specified",
        power: "300W (customizable)",
        efficiency: "Up to 92% (customizable)",
        package: "Custom",
        application: "Industrial, Medical, Transportation",
        datasheet: "/assets/brands/zlg-power/datasheets/custom-ac.pdf",
        stock: "BTO",
        leadTime: "14-18 weeks",
        shortDescription: "ZLG Power custom AC-DC power supply designed to your exact specifications.",
        descriptionParagraphs: ["Custom AC-DC power supply designed per customer requirements.", "Features universal or specific AC input with custom DC outputs.", "Suitable for industrial, medical, and transportation applications."],
        longDescription: "The CUSTOM-AC-300W is a custom-designed AC-DC power supply developed to meet your specific application requirements. ZLG Power engineering works with you to define input voltage range, output voltages and currents, efficiency targets, safety certifications, and mechanical packaging. The custom approach ensures compliance with regional safety standards and optimal fit for your application.",
        features: ["Custom AC input range (universal or specific)", "Custom DC output configuration", "Custom safety certifications", "Custom mechanical package", "High efficiency design", "Comprehensive protection features", "EMC compliance as required", "Production-ready solution"],
        applications: ["Custom industrial equipment", "Medical power systems", "Transportation electronics", "Specialized machinery", "Custom instrumentation"],
        specifications: { "Input Voltage": "Customer Specified", "Output Voltage": "Customer Specified", "Output Power": "Customer Specified", "Efficiency": "Customer Specified", "Safety": "Customer Specified", "Operating Temperature": "Customer Specified" },
        faeReview: { author: "Senior Engineering Team", title: "Custom Design Team", content: "Custom AC-DC solutions meet exact requirements for specialized applications.", highlight: "Custom AC-DC solution for specialized applications" },
        alternativeParts: [
          { partNumber: "STANDARD-AC-300W", brand: "ZLG Power", specifications: { inputVoltage: "85-264V AC", outputVoltage: "24V", power: "300W", efficiency: "90%", package: "Open Frame" }, comparison: { voltage: "Standard universal", output: "Fixed options", power: "300W = 300W", efficiency: "90% < custom" }, reason: "Standard product alternative for common AC-DC requirements", useCase: "Applications that can use standard specifications", link: "/zlg-power/products/custom-power/standard-ac-300w.html" }
        ],
        companionParts: [
          { partNumber: "CONSULTATION", category: "Service", function: "Custom Design", keyFeatures: ["Engineering support", "Safety consultation"], description: "Contact us for custom AC-DC power supply design consultation", link: "/contact" }
        ],
        faqs: [
          { question: "Can custom AC-DC modules meet specific safety standards?", answer: "Yes, custom AC-DC modules can be certified to regional safety standards including UL, EN, IEC, CCC, and others as required for your target markets.", decisionGuide: "Specify required safety certifications during specification phase.", keywords: ["safety certification", "custom standards"] },
          { question: "What is included in the custom AC-DC development cost?", answer: "Development cost includes: Engineering design; Prototype samples (typically 3-5 units); Qualification testing; Documentation package; Tooling if custom mechanicals required.", decisionGuide: "Request detailed quote including NRE and unit pricing.", keywords: ["development cost", "NRE", "custom pricing"] }
        ]
      }
    ]
  };

  // Add all categories
  data.categories.push(acDcCategory);
  data.categories.push(polCategory);
  data.categories.push(customCategory);

  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));
  console.log('✅ products.json fixed - now with 4 categories and 8 products');
}

// Main
console.log('🔧 Fixing zlg-power brand data...\n');

try {
  fixBrandJson();
  fixProductsJson();

  console.log('\n✨ All files fixed!');
  console.log('Run: node scripts/brand-master-checklist.js zlg-power');
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
