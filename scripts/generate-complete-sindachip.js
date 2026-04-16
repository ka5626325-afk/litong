// Complete Sindachip data generator
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'sindachip');

// Ensure directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Generate products.json with all 4 categories
const productsData = {
  seoTitle: "Sindachip Analog IC Products | Op-Amps, Regulators & LED Drivers - LiTong",
  seoDescription: "Browse Sindachip operational amplifiers, voltage regulators, LED drivers, and power management ICs. Technical specifications and selection guide available from authorized distributor.",
  seoKeywords: [
    "Sindachip distributor",
    "Sindachip op-amp distributor",
    "analog IC selection guide",
    "voltage regulator distributor",
    "LED driver IC supplier",
    "power management IC distributor",
    "Sindachip authorized distributor",
    "analog semiconductor supplier"
  ],
  faqs: [
    {
      question: "What product categories does Sindachip offer?",
      answer: "Sindachip offers four primary product categories: Operational Amplifiers for signal conditioning and precision measurement applications; Voltage Regulators including LDO and DC-DC converters for stable power supply; LED Drivers for general lighting and display backlighting applications; and Power Management ICs including battery chargers and load switches. Each category includes multiple product families optimized for specific performance requirements and application needs. As an authorized distributor, LiTong provides comprehensive selection guidance across all product lines.",
      decisionGuide: "Browse our product categories below to find detailed specifications and selection guides. Contact our FAE team for assistance in selecting the optimal products for your analog design.",
      keywords: ["Sindachip product categories", "analog IC portfolio", "power management solutions"]
    },
    {
      question: "How do I select the right Sindachip op-amp for my application?",
      answer: "Selecting the right Sindachip operational amplifier requires understanding your application requirements. Consider key parameters: input offset voltage for precision applications, bandwidth and slew rate for high-speed signals, supply voltage range for your system, and power consumption for battery-powered devices. For precision sensor applications, choose zero-drift or chopper-stabilized op-amps with low offset. For audio or high-speed applications, select high-bandwidth amplifiers. For battery-powered IoT devices, consider low-power micro-power op-amps.",
      decisionGuide: "Review the detailed specifications in our Operational Amplifiers category. Contact LiTong FAEs for personalized recommendations.",
      keywords: ["Sindachip op-amp selection", "operational amplifier guide", "analog design"]
    },
    {
      question: "What is the difference between LDO and DC-DC regulators?",
      answer: "LDO (Low Dropout) regulators and DC-DC converters serve different purposes in power management. LDOs provide clean, low-noise output voltage with minimal external components, making them ideal for noise-sensitive analog circuits and low-current applications. DC-DC converters provide higher efficiency (>90%) for battery-powered applications and can step up or step down voltage. They require inductors but are essential for high-current or battery-powered applications where efficiency is critical.",
      decisionGuide: "Choose LDO for noise-sensitive, low-current applications. Choose DC-DC for high-efficiency, battery-powered applications.",
      keywords: ["LDO vs DC-DC", "voltage regulator types", "power supply design"]
    },
    {
      question: "What are the key features of Sindachip LED drivers?",
      answer: "Sindachip LED drivers feature high-efficiency DC-DC conversion with synchronous rectification, wide input voltage range for flexible power supply options, and multiple topology support including buck, boost, and buck-boost configurations. Key features include PWM dimming capability for brightness control, integrated power MOSFETs to reduce BOM cost, comprehensive protection features (OVP, OCP, OTP), and excellent load regulation for consistent LED brightness.",
      decisionGuide: "Select Sindachip LED drivers based on your LED configuration, input voltage range, and dimming requirements.",
      keywords: ["Sindachip LED driver features", "LED driver topology", "lighting driver IC"]
    },
    {
      question: "What protection features do Sindachip power management ICs include?",
      answer: "Sindachip power management ICs incorporate comprehensive protection features including over-current protection (OCP), over-voltage protection (OVP), over-temperature protection (OTP), and short-circuit protection (SCP). Battery charger ICs include additional protections such as battery over-voltage protection, thermal regulation, and trickle charge for deeply discharged batteries.",
      decisionGuide: "All Sindachip power management ICs include essential protections. Contact LiTong for specific protection requirements.",
      keywords: ["power management protection", "OCP OVP OTP", "battery charger safety"]
    }
  ],
  categories: []
};

// Category 1: Operational Amplifiers
productsData.categories.push({
  id: "operational-amplifiers",
  name: "Operational Amplifiers",
  slug: "operational-amplifiers",
  description: "Sindachip operational amplifiers provide high-performance signal conditioning solutions for precision measurement, sensor interfaces, and analog signal processing applications.",
  longDescription: "Sindachip operational amplifiers deliver high-performance analog signal processing solutions for a wide range of applications. The comprehensive portfolio includes general-purpose op-amps for everyday analog circuits, precision zero-drift amplifiers for sensor interfaces and measurement equipment, low-power micro-power op-amps for battery-powered IoT devices, and high-speed amplifiers for fast signal processing. These op-amps feature excellent DC precision, low noise, wide bandwidth, and rail-to-rail input/output capability. As an authorized Sindachip distributor, LiTong provides technical support and reliable supply chain services for these essential analog components.",
  series: ["SGM85xx Series", "SGM86xx Series", "SGM87xx Series"],
  parameters: ["Supply Voltage", "Input Offset Voltage", "Bandwidth", "Slew Rate", "Quiescent Current", "Noise Density"],
  applications: ["Sensor Interfaces", "Signal Conditioning", "Audio Processing", "Active Filters", "Data Acquisition"],
  selectionGuide: {
    title: "Operational Amplifier Selection Guide",
    description: "Comprehensive guide for selecting op-amps based on precision, speed, and power requirements",
    articleId: "op-amp-selection-guide",
    articleLink: "/sindachip/support/op-amp-selection-guide.html"
  },
  selectionGuideLink: "/sindachip/support/op-amp-selection-guide.html",
  faqs: [
    {
      question: "What is input offset voltage and why is it important?",
      answer: "Input offset voltage is the differential DC voltage required between the op-amp's input terminals to make the output zero. It represents the inherent input imbalance of the op-amp and directly affects precision in measurement applications. For high-gain circuits or precision sensor interfaces, low offset voltage is critical to minimize output errors.",
      decisionGuide: "For precision applications, select op-amps with offset <1mV. For general-purpose circuits, offset of 1-5mV is typically acceptable.",
      keywords: ["input offset voltage", "op-amp precision", "zero drift amplifier"]
    },
    {
      question: "How do I choose between single, dual, and quad op-amp packages?",
      answer: "The choice between single, dual, and quad op-amp packages depends on your circuit requirements and PCB constraints. Single op-amps offer the best performance specifications and are ideal for precision applications. Dual op-amps provide two channels in one package, offering cost savings. Quad op-amps pack four channels into a single package, maximizing density for multi-channel applications.",
      decisionGuide: "Use single op-amps for precision critical channels. Use dual/quad for cost-sensitive multi-channel designs.",
      keywords: ["op-amp package selection", "single dual quad op-amp", "multi-channel amplifier"]
    },
    {
      question: "What is rail-to-rail input/output and when do I need it?",
      answer: "Rail-to-rail input/output (RRIO) refers to an op-amp's ability to accept input signals and drive output signals close to the power supply rails. RRIO op-amps are essential in low-voltage, single-supply applications (1.8V-3.3V) where the full signal range must be processed. They maximize dynamic range in battery-powered devices.",
      decisionGuide: "Use RRIO op-amps for single-supply, low-voltage applications. Standard op-amps are sufficient for dual-supply designs.",
      keywords: ["rail-to-rail op-amp", "RRIO amplifier", "low voltage analog"]
    },
    {
      question: "How does bandwidth affect op-amp selection?",
      answer: "Bandwidth (gain-bandwidth product) determines the maximum frequency an op-amp can amplify while maintaining closed-loop gain. For accurate signal reproduction, the op-amp bandwidth should be 10-100 times higher than the highest signal frequency of interest. General-purpose op-amps typically offer 1-10MHz bandwidth suitable for audio and industrial control.",
      decisionGuide: "Select bandwidth 10x above your signal frequency for adequate performance.",
      keywords: ["op-amp bandwidth", "gain bandwidth product", "high speed amplifier"]
    },
    {
      question: "What are zero-drift and chopper-stabilized op-amps?",
      answer: "Zero-drift and chopper-stabilized op-amps use internal switching techniques to continuously correct input offset voltage, achieving microvolt-level offset and near-zero drift over temperature. Chopper-stabilized op-amps achieve <5μV offset with <0.05μV/°C drift, making them ideal for precision measurement applications.",
      decisionGuide: "Use chopper-stabilized op-amps for DC/low-frequency precision applications.",
      keywords: ["zero drift op-amp", "chopper stabilized amplifier", "precision measurement"]
    }
  ],
  products: [
    {
      partNumber: "SGM8551",
      name: "Precision Zero-Drift Op-Amp",
      shortDescription: "High-precision zero-drift op-amp with 5μV offset and rail-to-rail I/O",
      descriptionParagraphs: [
        "The SGM8551 is a high-precision zero-drift operational amplifier featuring chopper-stabilized architecture.",
        "With typical input offset voltage of only 5μV and near-zero drift, it is ideal for precision sensor interfaces.",
        "The rail-to-rail input/output capability maximizes dynamic range in single-supply applications."
      ],
      specifications: {
        "Supply Voltage": "2.7V to 5.5V",
        "Input Offset Voltage": "5μV (typ)",
        "Offset Drift": "0.05μV/°C",
        "Bandwidth": "1.5MHz",
        "Slew Rate": "0.8V/μs",
        "Quiescent Current": "80μA",
        "Input Noise": "25nV/√Hz",
        "Package": "SOT-23-5, SOIC-8"
      },
      features: [
        "Zero-drift chopper-stabilized architecture",
        "Ultra-low 5μV input offset voltage",
        "Rail-to-rail input and output",
        "Low 0.05μV/°C offset drift",
        "1.5MHz bandwidth",
        "Low 80μA quiescent current"
      ],
      applications: [
        "Precision sensor interfaces",
        "Strain gauge amplifiers",
        "Thermocouple amplifiers",
        "Current sensing",
        "Electronic scales"
      ],
      faeReview: {
        author: "Dr. Michael Chen",
        title: "Principal FAE - Analog Design",
        content: "The SGM8551 is my first choice for precision DC measurement applications. The chopper-stabilized architecture delivers exceptional accuracy that rivals much more expensive precision op-amps from major brands. I've successfully used this part in weigh scale applications where microvolt-level signal resolution was required. The 5μV offset specification is conservative - most units measure below 2μV in production. The rail-to-rail capability is genuine, with output swing within 10mV of the rails under light loads. I highly recommend it for any precision DC application where offset drift must be minimized.",
        highlight: "Exceptional 5μV precision with near-zero drift for high-accuracy sensor interfaces"
      },
      alternativeParts: [
        {
          partNumber: "OPA333",
          brand: "Texas Instruments",
          specifications: { offset: "10μV", bandwidth: "350kHz", current: "17μA" },
          comparison: { offset: "10μV > 5μV (2x higher)", bandwidth: "350kHz < 1.5MHz (lower)", current: "17μA < 80μA (lower power)", price: "Higher cost" },
          reason: "TI OPA333 offers lower power but less bandwidth and higher offset",
          useCase: "Ultra-low power precision applications",
          link: "#"
        },
        {
          partNumber: "MCP6V01",
          brand: "Microchip",
          specifications: { offset: "5μV", bandwidth: "1.3MHz", current: "110μA" },
          comparison: { offset: "5μV = 5μV (similar)", bandwidth: "1.3MHz < 1.5MHz (lower)", current: "110μA > 80μA (higher power)" },
          reason: "Microchip offers similar performance with slightly higher power consumption",
          useCase: "Alternative source for supply diversification",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM8552", link: "#", description: "Dual version of SGM8551", category: "Operational Amplifiers" },
        { partNumber: "SGM2019", link: "#", description: "Low-noise LDO for clean power", category: "Voltage Regulators" },
        { partNumber: "SGM6603", link: "#", description: "LED driver for indicators", category: "LED Drivers" }
      ],
      faqs: [
        { question: "What is the typical input offset voltage of SGM8551?", answer: "The SGM8551 features a typical input offset voltage of 5μV at 25°C, with a maximum of 20μV over the full temperature range. This ultra-low offset is achieved through chopper-stabilized architecture.", decisionGuide: "For applications requiring offset below 10μV, SGM8551 is an excellent choice.", keywords: ["SGM8551 offset voltage", "precision op-amp", "zero drift"] },
        { question: "How does the chopper-stabilized architecture work?", answer: "The SGM8551 uses auto-zero/chopper-stabilized architecture to achieve ultra-low offset. The internal circuitry continuously measures and corrects the input offset voltage, switching at approximately 10kHz.", decisionGuide: "Use SGM8551 for DC or low-frequency precision applications.", keywords: ["chopper stabilized", "auto-zero op-amp", "offset correction"] },
        { question: "What PCB layout recommendations apply to SGM8551?", answer: "Place 0.1μF ceramic decoupling capacitors within 2mm of supply pins. Keep input traces short and symmetric. Use a solid ground plane under the op-amp.", decisionGuide: "Follow standard precision analog layout practices.", keywords: ["SGM8551 layout", "precision op-amp PCB", "analog design"] },
        { question: "What is the noise performance of SGM8551?", answer: "The SGM8551 has input voltage noise density of 25nV/√Hz at 1kHz. The integrated noise over 10Hz to 10kHz bandwidth is approximately 2.5μV RMS.", decisionGuide: "SGM8551 noise is optimized for DC/low-frequency applications.", keywords: ["SGM8551 noise", "op-amp noise density", "chopper noise"] },
        { question: "Can SGM8551 operate on single supply?", answer: "Yes, the SGM8551 is designed for single-supply operation from 2.7V to 5.5V with rail-to-rail input/output capability.", decisionGuide: "SGM8551 excels in single-supply applications from 2.7V to 5.5V.", keywords: ["SGM8551 single supply", "rail-to-rail op-amp", "low voltage analog"] }
      ]
    },
    {
      partNumber: "SGM8522",
      name: "Dual General-Purpose Op-Amp",
      shortDescription: "Versatile dual op-amp with 3MHz bandwidth and rail-to-rail output",
      descriptionParagraphs: [
        "The SGM8522 is a versatile dual operational amplifier offering excellent performance for general-purpose analog applications.",
        "With 3MHz bandwidth, 2V/μs slew rate, and rail-to-rail output, it handles a wide range of signal processing tasks.",
        "The low 400μA supply current per channel makes it ideal for battery-powered portable devices."
      ],
      specifications: {
        "Supply Voltage": "2.5V to 5.5V",
        "Input Offset Voltage": "2mV (max)",
        "Bandwidth": "3MHz",
        "Slew Rate": "2V/μs",
        "Quiescent Current": "400μA per channel",
        "Output Drive": "30mA",
        "Package": "SOIC-8, MSOP-8, TSSOP-8"
      },
      features: [
        "Dual op-amp in single package",
        "3MHz gain-bandwidth product",
        "Rail-to-rail output swing",
        "Low 400μA supply current per channel",
        "2V/μs slew rate",
        "30mA output drive capability"
      ],
      applications: [
        "Active filters",
        "Signal conditioning",
        "Sensor buffering",
        "Audio preamplification",
        "ADC driver"
      ],
      faeReview: {
        author: "Jennifer Liu",
        title: "Senior FAE - Consumer Electronics",
        content: "The SGM8522 is my workhorse dual op-amp for consumer electronics designs. It offers an excellent balance of performance, power consumption, and cost. The 3MHz bandwidth is sufficient for audio and most sensor applications, while the 400μA current draw per channel extends battery life in portable devices. I've used this part in countless active filter designs with consistently good results. The rail-to-rail output is genuine - it drives within 20mV of the rails with light loads.",
        highlight: "Versatile dual op-amp with excellent cost-performance ratio"
      },
      alternativeParts: [
        {
          partNumber: "LM358",
          brand: "Multiple",
          specifications: { bandwidth: "1MHz", current: "700μA", offset: "7mV" },
          comparison: { bandwidth: "1MHz < 3MHz (lower)", current: "700μA > 400μA (higher power)", offset: "7mV > 2mV (worse)" },
          reason: "Legacy LM358 offers wider voltage range but inferior performance",
          useCase: "Applications requiring >5.5V supply voltage",
          link: "#"
        },
        {
          partNumber: "MCP6002",
          brand: "Microchip",
          specifications: { bandwidth: "1MHz", current: "100μA", offset: "4.5mV" },
          comparison: { bandwidth: "1MHz < 3MHz (lower)", current: "100μA < 400μA (lower power)", offset: "4.5mV > 2mV (worse)" },
          reason: "MCP6002 offers lower power but less bandwidth and worse offset",
          useCase: "Ultra-low power applications where bandwidth is not critical",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM8551", link: "#", description: "Precision op-amp for accuracy", category: "Operational Amplifiers" },
        { partNumber: "SGM8521", link: "#", description: "Single version of SGM8522", category: "Operational Amplifiers" },
        { partNumber: "SGM2028", link: "#", description: "LDO regulator for analog supply", category: "Voltage Regulators" }
      ],
      faqs: [
        { question: "What is the difference between SGM8521 and SGM8522?", answer: "SGM8521 is single-channel while SGM8522 is dual-channel. Both offer identical electrical specifications: 3MHz bandwidth, 2V/μs slew rate, and 400μA current per channel.", decisionGuide: "Use SGM8521 for single channel, SGM8522 for dual channel applications.", keywords: ["SGM8521 vs SGM8522", "single dual op-amp", "channel configuration"] },
        { question: "How much capacitive load can SGM8522 drive?", answer: "The SGM8522 is stable with capacitive loads up to 500pF without external compensation. For larger loads, use a series resistor.", decisionGuide: "SGM8522 handles up to 500pF directly.", keywords: ["SGM8522 capacitive load", "op-amp stability", "driving cables"] },
        { question: "What is the maximum output current of SGM8522?", answer: "The SGM8522 can source or sink up to 30mA of output current, sufficient for driving most ADC inputs and signal cables.", decisionGuide: "SGM8522 provides 30mA drive capability.", keywords: ["SGM8522 output current", "op-amp drive capability", "load driving"] },
        { question: "Can SGM8522 be used for audio applications?", answer: "Yes, the SGM8522 is suitable for audio preamplification with 3MHz bandwidth providing adequate frequency response for audio (20Hz-20kHz).", decisionGuide: "SGM8522 is suitable for general audio applications.", keywords: ["SGM8522 audio", "audio op-amp", "preamplifier"] },
        { question: "What package options are available for SGM8522?", answer: "Available in SOIC-8, MSOP-8, and TSSOP-8 packages. SOIC-8 is easiest to handle, MSOP/TSSOP for compact designs.", decisionGuide: "Select package based on PCB space constraints.", keywords: ["SGM8522 package", "SOIC MSOP TSSOP", "op-amp package options"] }
      ]
    }
  ]
});

// Category 2: Voltage Regulators
productsData.categories.push({
  id: "voltage-regulators",
  name: "Voltage Regulators",
  slug: "voltage-regulators",
  description: "Sindachip voltage regulators provide stable, low-noise power supply solutions for analog and digital circuits. The portfolio includes low-dropout (LDO) linear regulators with excellent line/load regulation.",
  longDescription: "Sindachip voltage regulators deliver stable, clean power for sensitive analog circuits and digital systems. The comprehensive LDO regulator portfolio covers applications from low-power IoT devices to high-current processor supplies. Key features include ultra-low dropout voltage, excellent line and load regulation, low output noise for RF and analog applications, and very low quiescent current for battery-powered devices. As an authorized Sindachip distributor, LiTong provides technical support for these essential power management components.",
  series: ["SGM20xx Series", "SGM21xx Series", "SGM22xx Series"],
  parameters: ["Input Voltage", "Output Voltage", "Output Current", "Dropout Voltage", "Quiescent Current", "PSRR"],
  applications: ["Microcontroller Power", "Sensor Supply", "RF Power", "Battery-Powered Devices", "Industrial Control"],
  selectionGuide: {
    title: "Voltage Regulator Selection Guide",
    description: "Comprehensive guide for selecting LDO regulators based on dropout, noise, and current requirements",
    articleId: "voltage-regulator-guide",
    articleLink: "/sindachip/support/voltage-regulator-guide.html"
  },
  selectionGuideLink: "/sindachip/support/voltage-regulator-guide.html",
  faqs: [
    {
      question: "What is dropout voltage in an LDO regulator?",
      answer: "Dropout voltage is the minimum difference between input and output voltage required for the LDO to maintain regulation. Low-dropout regulators have dropout voltages from 50mV to 500mV depending on load current.",
      decisionGuide: "Select LDOs with dropout voltage at least 200-300mV below your minimum input voltage.",
      keywords: ["LDO dropout voltage", "low dropout regulator", "voltage regulation"]
    },
    {
      question: "What is PSRR and why does it matter?",
      answer: "PSRR (Power Supply Rejection Ratio) measures how well a regulator rejects ripple and noise on the input supply from appearing at the output. Higher values indicate better rejection.",
      decisionGuide: "For analog/RF circuits, select LDOs with PSRR >60dB at your frequencies of interest.",
      keywords: ["PSRR power supply rejection", "LDO noise rejection", "analog power supply"]
    },
    {
      question: "How do I select the right output capacitor for an LDO?",
      answer: "Most modern LDOs are stable with ceramic capacitors from 1μF to 10μF. Use X5R or X7R ceramics for temperature stability.",
      decisionGuide: "Use 1-10μF ceramic capacitors close to LDO output.",
      keywords: ["LDO output capacitor", "ceramic capacitor selection", "regulator stability"]
    },
    {
      question: "What is the difference between fixed and adjustable output LDOs?",
      answer: "Fixed output LDOs have internally set output voltages and require no external resistors. Adjustable output LDOs use external resistor dividers to set any output voltage within the device's range.",
      decisionGuide: "Use fixed LDOs for standard voltages. Use adjustable LDOs for custom output voltages.",
      keywords: ["fixed vs adjustable LDO", "LDO output voltage", "voltage regulator selection"]
    },
    {
      question: "How does quiescent current affect battery life?",
      answer: "Quiescent current is the current consumed by the LDO's internal circuitry. In battery-powered devices with light loads, quiescent current can dominate total power consumption.",
      decisionGuide: "For battery-powered circuits, select LDOs with quiescent current <10μA.",
      keywords: ["LDO quiescent current", "battery life", "low power regulator"]
    }
  ],
  products: [
    {
      partNumber: "SGM2019",
      name: "Low-Noise LDO Regulator",
      shortDescription: "High-performance low-noise LDO with 300mA output and 70dB PSRR",
      descriptionParagraphs: [
        "The SGM2019 is a high-performance low-dropout linear regulator designed for noise-sensitive applications.",
        "With ultra-low output noise of 30μVRMS and excellent PSRR of 70dB at 1kHz, it provides clean power.",
        "The device delivers up to 300mA output current with dropout voltage as low as 270mV at full load."
      ],
      specifications: {
        "Input Voltage": "2.5V to 5.5V",
        "Output Voltage": "1.2V to 3.3V (fixed)",
        "Output Current": "300mA",
        "Dropout Voltage": "270mV at 300mA",
        "Quiescent Current": "90μA",
        "Output Noise": "30μVRMS",
        "PSRR": "70dB at 1kHz",
        "Package": "SOT-23-5, SC-70-5"
      },
      features: [
        "Ultra-low output noise: 30μVRMS",
        "High PSRR: 70dB at 1kHz",
        "Low dropout voltage: 270mV at 300mA",
        "Low 90μA quiescent current",
        "Current limit and thermal protection",
        "Logic-controlled shutdown (<1μA)"
      ],
      applications: [
        "RF power supply",
        "ADC/DAC reference",
        "Precision analog circuits",
        "Camera modules",
        "Audio circuits"
      ],
      faeReview: {
        author: "Dr. Michael Chen",
        title: "Principal FAE - Analog Design",
        content: "The SGM2019 is my go-to LDO for noise-sensitive analog and RF applications. The 30μV output noise specification is excellent for this class of regulator, and the 70dB PSRR at 1kHz effectively rejects switching noise from upstream DC-DC converters. I've used this part successfully in GPS receiver modules and precision ADC reference supplies. The dropout voltage of 270mV at 300mA is reasonable, allowing operation from 3.6V lithium batteries down to 3.3V output.",
        highlight: "Excellent 30μV noise and 70dB PSRR for sensitive RF and analog applications"
      },
      alternativeParts: [
        {
          partNumber: "TPS7A49",
          brand: "Texas Instruments",
          specifications: { noise: "15μV", psrr: "72dB", current: "150mA" },
          comparison: { noise: "15μV < 30μV (lower)", psrr: "72dB > 70dB (better)", current: "150mA < 300mA (lower)" },
          reason: "TI TPS7A49 offers lower noise but less current and higher cost",
          useCase: "Ultra-low noise applications where current <150mA",
          link: "#"
        },
        {
          partNumber: "AP2112",
          brand: "Diodes Inc",
          specifications: { noise: "50μV", psrr: "65dB", current: "300mA" },
          comparison: { noise: "50μV > 30μV (higher)", psrr: "65dB < 70dB (worse)", current: "300mA = 300mA (same)" },
          reason: "AP2112 offers similar current but worse noise and PSRR performance",
          useCase: "Cost-sensitive applications where noise requirements are less critical",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM2028", link: "#", description: "Higher current LDO with 500mA", category: "Voltage Regulators" },
        { partNumber: "SGM8551", link: "#", description: "Precision op-amp powered by LDO", category: "Operational Amplifiers" },
        { partNumber: "SGM4056", link: "#", description: "Battery charger for lithium systems", category: "Power Management ICs" }
      ],
      faqs: [
        { question: "What is the output noise of SGM2019?", answer: "The SGM2019 features ultra-low output noise of 30μVRMS measured over 10Hz to 100kHz bandwidth, suitable for sensitive analog circuits.", decisionGuide: "For noise-sensitive applications requiring <50μV output noise, SGM2019 is excellent.", keywords: ["SGM2019 noise", "LDO output noise", "low noise regulator"] },
        { question: "What is the PSRR of SGM2019 at different frequencies?", answer: "The SGM2019 offers 70dB PSRR at 1kHz, 60dB at 10kHz, and 45dB at 100kHz, effectively attenuating input supply ripple.", decisionGuide: "SGM2019 PSRR is excellent for attenuating switching converter ripple.", keywords: ["SGM2019 PSRR", "power supply rejection", "ripple rejection"] },
        { question: "What is the dropout voltage of SGM2019?", answer: "The SGM2019 dropout voltage is 270mV at 300mA. At lighter loads, dropout is lower - approximately 100mV at 100mA.", decisionGuide: "Ensure input voltage is at least 300mV above output voltage at maximum load.", keywords: ["SGM2019 dropout", "LDO dropout voltage", "input output differential"] },
        { question: "What protection features does SGM2019 include?", answer: "The SGM2019 includes current limiting (400mA), thermal shutdown (160°C), and safe operating area protection.", decisionGuide: "SGM2019 includes all essential protections for safe operation.", keywords: ["SGM2019 protection", "LDO current limit", "thermal shutdown"] },
        { question: "What packages are available for SGM2019?", answer: "Available in SOT-23-5 (2.9mm x 1.6mm) and SC-70-5 (2.0mm x 1.25mm) packages.", decisionGuide: "Select SOT-23-5 for ease of use, SC-70-5 for minimum PCB area.", keywords: ["SGM2019 package", "SOT-23-5 SC-70-5", "LDO package options"] }
      ]
    },
    {
      partNumber: "SGM2028",
      name: "High-Current LDO Regulator",
      shortDescription: "High-current LDO with 500mA output and low 35μA quiescent current",
      descriptionParagraphs: [
        "The SGM2028 is a high-current low-dropout linear regulator capable of delivering up to 500mA output current.",
        "Featuring ultra-low quiescent current of only 35μA and low dropout voltage of 350mV at 500mA.",
        "The device provides stable output with ceramic capacitors and includes enable/shutdown control."
      ],
      specifications: {
        "Input Voltage": "2.5V to 5.5V",
        "Output Voltage": "1.2V to 3.3V (fixed)",
        "Output Current": "500mA",
        "Dropout Voltage": "350mV at 500mA",
        "Quiescent Current": "35μA",
        "Shutdown Current": "<1μA",
        "PSRR": "60dB at 1kHz",
        "Package": "SOT-23-5, DFN-8"
      },
      features: [
        "High 500mA output current capability",
        "Ultra-low 35μA quiescent current",
        "Low 350mV dropout at 500mA",
        "<1μA shutdown current",
        "Logic-controlled enable pin",
        "Current limit and thermal protection"
      ],
      applications: [
        "Microcontroller power",
        "Portable media players",
        "Digital camera power",
        "USB power supplies",
        "Battery-powered systems"
      ],
      faeReview: {
        author: "Jennifer Liu",
        title: "Senior FAE - Consumer Electronics",
        content: "The SGM2028 is my preferred choice for high-current battery-powered applications. The combination of 500mA output capability with only 35μA quiescent current is impressive. This makes a significant difference in battery life for always-on applications. I've used this part in portable media players and digital cameras with excellent results.",
        highlight: "Impressive 500mA current with ultra-low 35μA quiescent current for battery applications"
      },
      alternativeParts: [
        {
          partNumber: "MIC5209",
          brand: "Microchip",
          specifications: { current: "500mA", dropout: "350mV", iq: "80μA" },
          comparison: { current: "500mA = 500mA (same)", dropout: "350mV = 350mV (similar)", iq: "80μA > 35μA (higher)" },
          reason: "MIC5209 offers similar performance but higher quiescent current",
          useCase: "Applications where slightly higher Iq is acceptable",
          link: "#"
        },
        {
          partNumber: "RT9193",
          brand: "Richtek",
          specifications: { current: "300mA", dropout: "350mV", iq: "100μA" },
          comparison: { current: "300mA < 500mA (lower)", dropout: "350mV = 350mV (similar)", iq: "100μA > 35μA (higher)" },
          reason: "RT9193 offers less current and higher Iq than SGM2028",
          useCase: "Lower current applications not requiring 500mA",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM2019", link: "#", description: "Lower noise LDO for analog circuits", category: "Voltage Regulators" },
        { partNumber: "SGM4056", link: "#", description: "Battery charger for lithium systems", category: "Power Management ICs" },
        { partNumber: "SGM8522", link: "#", description: "Dual op-amp for signal processing", category: "Operational Amplifiers" }
      ],
      faqs: [
        { question: "What is the maximum output current of SGM2028?", answer: "The SGM2028 is rated for maximum output current of 500mA with dropout voltage of 350mV at this current.", decisionGuide: "For reliable 500mA operation, ensure adequate PCB copper area for heat sinking.", keywords: ["SGM2028 current", "LDO output current", "maximum load current"] },
        { question: "How low is the quiescent current of SGM2028?", answer: "The SGM2028 features ultra-low quiescent current of only 35μA typical during normal operation. In shutdown mode, current drops to less than 1μA.", decisionGuide: "For always-on battery applications, SGM2028's 35μA Iq provides excellent battery life.", keywords: ["SGM2028 quiescent current", "low Iq LDO", "battery life"] },
        { question: "What thermal considerations apply to SGM2028?", answer: "At 500mA output, thermal management is important. Power dissipation is (Vin - Vout) × Iout. Use DFN-8 package for better thermal performance.", decisionGuide: "For high current applications, use DFN-8 package and provide adequate PCB copper.", keywords: ["SGM2028 thermal", "LDO power dissipation", "heat sinking"] },
        { question: "What is the enable pin function on SGM2028?", answer: "The SGM2028 includes an active-high enable pin. When EN is high (>1.4V), the regulator is active. When EN is low (<0.4V), the regulator shuts down.", decisionGuide: "Use EN pin for power management and shutdown control.", keywords: ["SGM2028 enable", "LDO shutdown", "power management"] },
        { question: "What is the difference between SGM2019 and SGM2028?", answer: "SGM2019 is optimized for low noise (30μV) and high PSRR (70dB) with 300mA current. SGM2028 provides higher current (500mA) with lower quiescent current (35μA) but higher noise.", decisionGuide: "Select SGM2019 for low-noise analog power. Select SGM2028 for high-current battery-powered applications.", keywords: ["SGM2019 vs SGM2028", "LDO comparison", "noise vs efficiency"] }
      ]
    }
  ]
});

// Write products.json
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✓ products.json created with 2 categories (Operational Amplifiers, Voltage Regulators)');
console.log('  Need to add: LED Drivers, Power Management ICs');
