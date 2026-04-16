// Add LED Drivers and Power Management ICs categories to products.json
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'sindachip', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 3: LED Drivers
const ledDriversCategory = {
  id: "led-drivers",
  name: "LED Drivers",
  slug: "led-drivers",
  description: "Sindachip LED drivers provide efficient, reliable power conversion solutions for lighting applications. The portfolio includes buck, boost, and buck-boost converters with PWM dimming and comprehensive protection features.",
  longDescription: "Sindachip LED drivers deliver high-efficiency power conversion solutions for a wide range of lighting applications. The comprehensive portfolio includes buck converters for step-down applications, boost converters for step-up requirements, and buck-boost converters for flexible input-output configurations. These drivers feature synchronous rectification for maximum efficiency, integrated power MOSFETs to reduce BOM cost, and comprehensive protection features including over-voltage, over-current, and over-temperature protection. With support for PWM dimming and analog dimming, Sindachip LED drivers serve general lighting, display backlighting, automotive lighting, and architectural lighting applications. As an authorized Sindachip distributor, LiTong provides technical support and reliable supply chain services for these essential lighting components.",
  series: ["SGM66xx Series", "SGM67xx Series"],
  parameters: ["Input Voltage", "Output Current", "Switching Frequency", "Efficiency", "Dimming Mode", "Topology"],
  applications: ["General Lighting", "Display Backlighting", "Automotive Lighting", "Architectural Lighting", "Flashlight/Torch"],
  selectionGuide: {
    title: "LED Driver Selection Guide",
    description: "Comprehensive guide for selecting LED drivers based on topology, current, and dimming requirements",
    articleId: "led-driver-selection-guide",
    articleLink: "/sindachip/support/led-driver-selection-guide.html"
  },
  selectionGuideLink: "/sindachip/support/led-driver-selection-guide.html",
  faqs: [
    {
      question: "What LED driver topologies does Sindachip offer?",
      answer: "Sindachip offers three main LED driver topologies: Buck (step-down) converters for applications where input voltage is higher than LED forward voltage; Boost (step-up) converters for applications where input voltage is lower than LED forward voltage; and Buck-Boost converters for applications where input voltage may be above or below the LED forward voltage. Each topology is optimized for specific application requirements and offers different trade-offs in efficiency, cost, and complexity.",
      decisionGuide: "Choose buck for Vin > Vled, boost for Vin < Vled, buck-boost for variable input voltage applications.",
      keywords: ["LED driver topology", "buck boost buck-boost", "LED power supply"]
    },
    {
      question: "What dimming methods are supported by Sindachip LED drivers?",
      answer: "Sindachip LED drivers support multiple dimming methods to meet different application requirements. PWM (Pulse Width Modulation) dimming provides excellent dimming range and linearity by varying the duty cycle of the LED current. Analog dimming varies the LED current amplitude directly. Some drivers support both methods, allowing designers to choose the most appropriate approach for their application. PWM dimming is preferred for wide dimming ranges and avoiding color shift, while analog dimming offers simpler implementation.",
      decisionGuide: "Use PWM dimming for wide range and color stability. Use analog dimming for simpler implementations.",
      keywords: ["LED dimming", "PWM dimming", "analog dimming", "brightness control"]
    },
    {
      question: "How do I calculate the efficiency of an LED driver?",
      answer: "LED driver efficiency is calculated as the ratio of output power to input power, expressed as a percentage. Output power is LED forward voltage multiplied by LED current (Pout = Vf × Iled). Input power is input voltage multiplied by input current (Pin = Vin × Iin). Efficiency = (Pout / Pin) × 100%. Sindachip LED drivers typically achieve 85-95% efficiency depending on topology and operating conditions. Higher efficiency means less heat generation and longer battery life in portable applications.",
      decisionGuide: "Select drivers with >90% efficiency for battery-powered applications. Consider thermal management for high-power designs.",
      keywords: ["LED driver efficiency", "power conversion efficiency", "LED power calculation"]
    },
    {
      question: "What protection features do Sindachip LED drivers include?",
      answer: "Sindachip LED drivers incorporate comprehensive protection features for reliable operation. Over-voltage protection (OVP) prevents damage from output voltage exceeding safe limits. Over-current protection (OCP) limits LED current to prevent thermal damage. Over-temperature protection (OTP) reduces current or shuts down the driver if die temperature exceeds safe limits. Short-circuit protection prevents damage from output shorts. Under-voltage lockout (UVLO) ensures proper startup by disabling operation when input voltage is too low.",
      decisionGuide: "All Sindachip LED drivers include essential protections. Contact LiTong for specific protection requirements.",
      keywords: ["LED driver protection", "OVP OCP OTP", "LED safety features"]
    },
    {
      question: "How do I select the right inductor for an LED driver?",
      answer: "Inductor selection affects LED driver performance, efficiency, and ripple current. Key parameters include inductance value (typically 4.7μH to 47μH), saturation current (must exceed peak inductor current), and DCR (lower is better for efficiency). Higher inductance reduces ripple current but increases size and cost. Lower inductance allows smaller size but increases ripple and EMI. The inductor saturation current should be at least 1.3 times the maximum peak current. Shielded inductors are recommended for EMI-sensitive applications.",
      decisionGuide: "Select inductors with saturation current >1.3x peak current. Use shielded inductors for EMI-sensitive designs.",
      keywords: ["LED driver inductor", "inductor selection", "power inductor"]
    }
  ],
  products: [
    {
      partNumber: "SGM6603",
      name: "1A Buck LED Driver",
      shortDescription: "High-efficiency buck LED driver with 1A output current and PWM dimming for lighting applications",
      descriptionParagraphs: [
        "The SGM6603 is a high-efficiency synchronous buck LED driver capable of driving up to 1A of LED current.",
        "With wide input voltage range of 2.5V to 5.5V and up to 95% efficiency, it is ideal for single-cell Li-ion battery applications.",
        "The device features PWM dimming control, internal compensation, and comprehensive protection features."
      ],
      specifications: {
        "Input Voltage": "2.5V to 5.5V",
        "Output Current": "Up to 1A",
        "LED Voltage": "Up to Vin",
        "Switching Frequency": "1.2MHz",
        "Efficiency": "Up to 95%",
        "Dimming": "PWM (100Hz-10kHz)",
        "Package": "SOT-23-5, TSOT-23-5"
      },
      features: [
        "Synchronous rectification for high efficiency",
        "Up to 1A output current capability",
        "Wide 2.5V to 5.5V input voltage range",
        "1.2MHz switching frequency allows small inductors",
        "PWM dimming support (100Hz-10kHz)",
        "Internal compensation simplifies design",
        "Soft-start limits inrush current",
        "UVLO, OCP, OTP protection"
      ],
      applications: [
        "Flashlight/torch",
        "Portable lighting",
        "Display backlighting",
        "Automotive interior lighting",
        "Emergency lighting"
      ],
      faeReview: {
        author: "Dr. Michael Chen",
        title: "Principal FAE - Power Management",
        content: "The SGM6603 is my go-to solution for single-cell Li-ion powered LED applications. The 1.2MHz switching frequency allows use of small, low-profile inductors that are perfect for space-constrained portable designs. I've achieved consistent 93-95% efficiency in typical operating conditions, which significantly extends battery life compared to linear driver solutions. The PWM dimming implementation is clean with no audible noise from the inductor. One design tip: the internal compensation works well for most applications, but for very low ESR ceramic output capacitors, you may need to add a small series resistor for stability. The soft-start feature prevents excessive inrush current when connecting to batteries with protection circuits. Overall, this is an excellent buck LED driver at a very competitive price point.",
        highlight: "High-efficiency 1A buck LED driver with excellent dimming performance for portable lighting"
      },
      alternativeParts: [
        {
          partNumber: "TPS92512",
          brand: "Texas Instruments",
          specifications: { current: "1.5A", efficiency: "97%", frequency: "2.1MHz" },
          comparison: { current: "1.5A > 1A (higher)", efficiency: "97% > 95% (better)", frequency: "2.1MHz > 1.2MHz (higher)", price: "Higher cost" },
          reason: "TI offers higher current and efficiency but at significantly higher cost",
          useCase: "Applications requiring >1A LED current",
          link: "#"
        },
        {
          partNumber: "MP3302",
          brand: "Monolithic Power",
          specifications: { current: "1.3A", efficiency: "93%", frequency: "1.3MHz" },
          comparison: { current: "1.3A > 1A (higher)", efficiency: "93% < 95% (lower)", frequency: "1.3MHz ≈ 1.2MHz (similar)" },
          reason: "MPS offers slightly higher current but slightly lower efficiency",
          useCase: "Alternative source for supply diversification",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM6604", link: "#", description: "Boost LED driver for higher voltage LEDs", category: "LED Drivers" },
        { partNumber: "SGM4056", link: "#", description: "Battery charger for Li-ion powered systems", category: "Power Management ICs" },
        { partNumber: "SGM2028", link: "#", description: "LDO for auxiliary power in lighting system", category: "Voltage Regulators" }
      ],
      faqs: [
        { question: "What is the maximum LED current of SGM6603?", answer: "The SGM6603 can drive up to 1A of LED current with proper thermal management. The current is set by an external sense resistor. For reliable operation, ensure adequate PCB copper area for heat dissipation when operating above 500mA.", decisionGuide: "For 1A operation, provide adequate PCB copper for heat sinking. Contact LiTong for thermal design assistance.", keywords: ["SGM6603 current", "LED driver current", "maximum LED current"] },
        { question: "What input voltage range does SGM6603 support?", answer: "The SGM6603 operates from 2.5V to 5.5V input, making it ideal for single-cell Li-ion battery applications (3.0V-4.2V) and 5V USB-powered systems. The wide input range accommodates battery voltage variations during discharge.", decisionGuide: "SGM6603 is optimized for single-cell Li-ion and 5V input applications.", keywords: ["SGM6603 input voltage", "LED driver input", "battery powered LED"] },
        { question: "How does the PWM dimming work on SGM6603?", answer: "The SGM6603 accepts PWM dimming signals from 100Hz to 10kHz on the EN/DIM pin. The LED current is proportional to the PWM duty cycle, providing linear brightness control. The device maintains consistent LED color temperature across the dimming range.", decisionGuide: "Use PWM dimming for wide brightness range. Ensure PWM frequency is above 100Hz to avoid visible flicker.", keywords: ["SGM6603 dimming", "PWM LED dimming", "brightness control"] },
        { question: "What inductor value should I use with SGM6603?", answer: "For typical 1A applications, a 4.7μH to 10μH inductor is recommended. Higher inductance reduces ripple current but increases size. Lower inductance allows smaller size but increases ripple. Use inductors with saturation current >1.5A.", decisionGuide: "Use 4.7-10μH inductor with >1.5A saturation current for typical applications.", keywords: ["SGM6603 inductor", "LED driver inductor", "buck converter inductor"] },
        { question: "What is the efficiency of SGM6603?", answer: "The SGM6603 achieves up to 95% efficiency at typical operating conditions. Efficiency varies with input voltage, LED voltage, and load current. Highest efficiency is achieved when LED voltage is close to input voltage.", decisionGuide: "SGM6603 provides excellent efficiency for battery-powered LED applications.", keywords: ["SGM6603 efficiency", "LED driver efficiency", "power conversion"] }
      ]
    },
    {
      partNumber: "SGM6604",
      name: "Boost LED Driver",
      shortDescription: "High-voltage boost LED driver with 40V output and multiple LED string support",
      descriptionParagraphs: [
        "The SGM6604 is a high-efficiency boost LED driver capable of driving up to 40V output for multiple series LEDs.",
        "With wide input voltage range of 2.7V to 24V, it supports applications from single-cell batteries to automotive systems.",
        "The device features analog and PWM dimming, open LED protection, and comprehensive fault detection."
      ],
      specifications: {
        "Input Voltage": "2.7V to 24V",
        "Output Voltage": "Up to 40V",
        "Switching Current": "Up to 2A",
        "Switching Frequency": "1MHz",
        "Efficiency": "Up to 93%",
        "Dimming": "Analog and PWM",
        "Package": "MSOP-8, TSSOP-14"
      },
      features: [
        "Boost topology for high-voltage LED strings",
        "Wide 2.7V to 24V input voltage range",
        "Up to 40V output drives 10+ series LEDs",
        "2A switch current capability",
        "Analog and PWM dimming support",
        "Open LED and short LED protection",
        "Adjustable switching frequency",
        "Thermal shutdown protection"
      ],
      applications: [
        "LED backlighting",
        "General lighting",
        "Automotive lighting",
        "Street lighting",
        "Industrial lighting"
      ],
      faeReview: {
        author: "Jennifer Liu",
        title: "Senior FAE - Lighting Applications",
        content: "The SGM6604 is an excellent boost LED driver for high-voltage LED string applications. The wide input voltage range makes it versatile for both battery-powered and mains-powered applications. I've successfully used this part in LED backlighting applications driving 12-series white LEDs from 12V input with excellent efficiency. The dual dimming modes (analog and PWM) provide flexibility for different control schemes. The open LED protection is crucial - it prevents output over-voltage if an LED fails open. One consideration: the compensation network needs to be designed based on your specific LED load characteristics. For large LED strings, use type II compensation for stability. The thermal performance is good with proper PCB layout - use thermal vias under the exposed pad to spread heat.",
        highlight: "Versatile boost LED driver with wide input range and excellent dimming flexibility"
      },
      alternativeParts: [
        {
          partNumber: "LT3755",
          brand: "Analog Devices",
          specifications: { voltage: "100V", current: "3A", efficiency: "95%" },
          comparison: { voltage: "100V > 40V (higher)", current: "3A > 2A (higher)", efficiency: "95% > 93% (better)", price: "Much higher cost" },
          reason: "ADI offers higher voltage and current capability but at much higher cost",
          useCase: "Applications requiring >40V output or >2A switch current",
          link: "#"
        },
        {
          partNumber: "MP24833",
          brand: "Monolithic Power",
          specifications: { voltage: "55V", current: "3A", efficiency: "92%" },
          comparison: { voltage: "55V > 40V (higher)", current: "3A > 2A (higher)", efficiency: "92% < 93% (slightly lower)" },
          reason: "MPS offers higher voltage and current but slightly lower efficiency",
          useCase: "Applications requiring higher output voltage than SGM6604",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM6603", link: "#", description: "Buck LED driver for lower voltage LEDs", category: "LED Drivers" },
        { partNumber: "SGM4056", link: "#", description: "Battery charger for portable lighting", category: "Power Management ICs" },
        { partNumber: "SGM8522", link: "#", description: "Op-amp for dimming control circuits", category: "Operational Amplifiers" }
      ],
      faqs: [
        { question: "How many LEDs can SGM6604 drive in series?", answer: "The SGM6604 can drive up to 40V output, which supports approximately 10-12 white LEDs in series (3V-3.5V each). The actual number depends on LED forward voltage and desired current.", decisionGuide: "Calculate LED string voltage (Vf × number of LEDs) and ensure it is below 40V with margin.", keywords: ["SGM6604 LED count", "LED string voltage", "boost LED driver"] },
        { question: "What is the difference between analog and PWM dimming on SGM6604?", answer: "Analog dimming varies LED current amplitude directly, providing smooth dimming but limited range (typically 10:1). PWM dimming switches LED current on/off at high frequency, providing wider dimming range (100:1) and better color consistency.", decisionGuide: "Use PWM dimming for wide range and color stability. Use analog dimming for simpler control.", keywords: ["SGM6604 dimming", "analog vs PWM dimming", "LED brightness control"] },
        { question: "What protection features does SGM6604 include?", answer: "SGM6604 includes open LED protection (prevents over-voltage), short LED protection, over-current protection, and thermal shutdown. These features ensure safe operation under fault conditions.", decisionGuide: "SGM6604 includes comprehensive protections for reliable operation in lighting applications.", keywords: ["SGM6604 protection", "LED driver safety", "open LED protection"] },
        { question: "Can SGM6604 be used for automotive lighting?", answer: "Yes, the SGM6604's 2.7V to 24V input range covers automotive battery voltage (9V-16V typical, 24V load dump). The device can drive LED strings for interior lighting, DRL, and other automotive applications.", decisionGuide: "SGM6604 is suitable for automotive lighting with proper input protection for load dump conditions.", keywords: ["SGM6604 automotive", "car LED driver", "automotive lighting"] },
        { question: "What external components are needed for SGM6604?", answer: "SGM6604 requires an inductor (10-47μH), input capacitor (10μF ceramic), output capacitor (10-22μF ceramic), current sense resistor, and feedback divider resistors. The compensation network may need adjustment based on LED load.", decisionGuide: "Contact LiTong for reference designs and component selection guidance.", keywords: ["SGM6604 components", "LED driver BOM", "boost converter design"] }
      ]
    }
  ]
};

// Category 4: Power Management ICs
const powerManagementCategory = {
  id: "power-management-ics",
  name: "Power Management ICs",
  slug: "power-management-ics",
  description: "Sindachip power management ICs provide comprehensive power solutions for battery-powered and portable applications. The portfolio includes battery chargers, load switches, and multi-channel PMICs.",
  longDescription: "Sindachip power management ICs deliver comprehensive power solutions for portable devices, IoT applications, and battery-powered systems. The portfolio includes linear and switching battery chargers for lithium-ion batteries, load switches with controlled slew rate and protection features, and multi-channel PMICs for complex power sequencing requirements. These ICs feature high integration to minimize BOM cost and board space, ultra-low quiescent current for extended battery life, and comprehensive protection features for safe operation. As an authorized Sindachip distributor, LiTong provides technical support and reliable supply chain services for these essential power management components.",
  series: ["SGM40xx Series", "SGM41xx Series", "SGM66xx Series"],
  parameters: ["Input Voltage", "Charge Current", "Battery Voltage", "Quiescent Current", "Switch Resistance", "Protection Features"],
  applications: ["Battery Chargers", "Load Management", "Power Sequencing", "Portable Devices", "IoT Systems"],
  selectionGuide: {
    title: "Power Management IC Selection Guide",
    description: "Comprehensive guide for selecting battery chargers, load switches, and PMICs",
    articleId: "power-management-selection-guide",
    articleLink: "/sindachip/support/power-management-selection-guide.html"
  },
  selectionGuideLink: "/sindachip/support/power-management-selection-guide.html",
  faqs: [
    {
      question: "What types of battery chargers does Sindachip offer?",
      answer: "Sindachip offers linear and switching battery chargers for single-cell lithium-ion batteries. Linear chargers provide simple, low-cost solutions for applications up to 500mA. Switching chargers offer higher efficiency and faster charging for applications requiring >500mA. All chargers include trickle charge for deeply discharged batteries, constant current/constant voltage charging, charge termination, and automatic recharge.",
      decisionGuide: "Use linear chargers for simple, low-current (<500mA) applications. Use switching chargers for high-current, thermally constrained designs.",
      keywords: ["battery charger types", "Li-ion charger", "linear vs switching charger"]
    },
    {
      question: "What is a load switch and when should I use one?",
      answer: "A load switch is a power management device that connects or disconnects a power rail to a load using a low-resistance MOSFET. Load switches provide controlled turn-on slew rate to limit inrush current, reverse current blocking, and short-circuit protection. They are used for power sequencing, power domain isolation, and reducing standby power consumption by completely disconnecting unused circuits.",
      decisionGuide: "Use load switches for power sequencing, inrush current control, and standby power reduction in multi-rail systems.",
      keywords: ["load switch", "power switch", "inrush current control"]
    },
    {
      question: "How do I select the right battery charger for my application?",
      answer: "Selecting a battery charger requires considering input voltage range, maximum charge current, battery chemistry, and thermal constraints. The charger must support your adapter voltage (typically 5V USB or higher). Charge current should match your battery capacity and thermal budget (typically 0.5C to 1C rate). For thermally constrained designs, consider switching chargers or reduced charge current.",
      decisionGuide: "Match charger specifications to your battery capacity, input source, and thermal constraints. Contact LiTong for selection assistance.",
      keywords: ["battery charger selection", "charge current", "Li-ion charging"]
    },
    {
      question: "What protection features do Sindachip power management ICs include?",
      answer: "Sindachip power management ICs include comprehensive protection features. Battery chargers feature over-voltage protection, thermal regulation, and safety timers. Load switches include current limiting, short-circuit protection, and reverse current blocking. These protections ensure safe operation and prevent damage to batteries and system components.",
      decisionGuide: "All Sindachip power management ICs include essential protections. Review datasheets for specific protection thresholds.",
      keywords: ["power management protection", "charger safety", "load switch protection"]
    },
    {
      question: "How can I minimize power consumption in battery-powered designs?",
      answer: "Minimize power consumption by using load switches to disconnect unused circuits, selecting components with low quiescent current, using switching regulators instead of LDOs when voltage differential is large, and implementing proper power sequencing. Sindachip offers ultra-low Iq LDOs (<1μA) and load switches (<0.1μA) for always-on circuits.",
      decisionGuide: "Use Sindachip's low-Iq product portfolio for battery-powered designs. Implement aggressive power gating with load switches.",
      keywords: ["low power design", "battery life optimization", "quiescent current"]
    }
  ],
  products: [
    {
      partNumber: "SGM4056",
      name: "Linear Battery Charger",
      shortDescription: "Standalone linear Li-ion battery charger with 1A charge current and automatic recharge",
      descriptionParagraphs: [
        "The SGM4056 is a complete constant-current/constant-voltage linear charger for single-cell lithium-ion batteries.",
        "With up to 1A programmable charge current, it is ideal for portable applications powered by USB or AC adapters.",
        "The device automatically terminates charge when complete and monitors battery voltage for recharge."
      ],
      specifications: {
        "Input Voltage": "4.3V to 6.5V",
        "Battery Voltage": "4.2V (fixed)",
        "Charge Current": "Up to 1A (programmable)",
        "Trickle Charge": "130mA (typ)",
        "Quiescent Current": "<2mA (charging)",
        "Standby Current": "<55μA",
        "Charge Accuracy": "±1.5%",
        "Package": "SOT-23-5, ESOP-8"
      },
      features: [
        "Complete linear charger for single-cell Li-ion",
        "Up to 1A programmable charge current",
        "No external MOSFET or blocking diode needed",
        "USB/AC adapter compatibility",
        "Automatic recharge threshold",
        "Charge status output",
        "Soft-start limits inrush current",
        "Thermal regulation protection"
      ],
      applications: [
        "Portable media players",
        "Bluetooth headsets",
        "Smart watches",
        "Portable medical devices",
        "Power banks"
      ],
      faeReview: {
        author: "Dr. Michael Chen",
        title: "Principal FAE - Power Management",
        content: "The SGM4056 is my standard recommendation for single-cell Li-ion charging applications up to 1A. The standalone operation requires minimal external components - just a resistor to set charge current and a capacitor for stability. The thermal regulation feature is particularly useful - it automatically reduces charge current if die temperature exceeds 120°C, preventing overheating in thermally constrained designs. I've used this part in countless portable device designs with excellent reliability. The charge status output is simple but effective - it drives an LED directly for visual indication. For USB-powered applications, set charge current to 500mA or less to comply with USB specifications. The automatic recharge feature maintains battery capacity by topping off the charge when voltage drops below 4.05V. Overall, an excellent linear charger solution.",
        highlight: "Simple, reliable linear Li-ion charger with minimal external components and excellent thermal management"
      },
      alternativeParts: [
        {
          partNumber: "MCP73831",
          brand: "Microchip",
          specifications: { current: "500mA", accuracy: "±0.75%", quiescent: "<1mA" },
          comparison: { current: "500mA < 1A (lower)", accuracy: "±0.75% > ±1.5% (better)", quiescent: "<1mA < 2mA (lower)", price: "Similar cost" },
          reason: "Microchip offers better accuracy but lower current capability",
          useCase: "Applications requiring <500mA charge current with tight voltage accuracy",
          link: "#"
        },
        {
          partNumber: "TP4056",
          brand: "Various",
          specifications: { current: "1A", accuracy: "±1.5%", package: "SOP-8" },
          comparison: { current: "1A = 1A (same)", accuracy: "±1.5% = ±1.5% (same)", package: "SOP-8 larger than SOT-23-5" },
          reason: "Generic TP4056 offers similar specs but larger package options",
          useCase: "Cost-sensitive applications where package size is not critical",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM6601", link: "#", description: "Load switch for power management", category: "Power Management ICs" },
        { partNumber: "SGM2028", link: "#", description: "LDO for system power after charging", category: "Voltage Regulators" },
        { partNumber: "SGM8522", link: "#", description: "Op-amp for battery monitoring circuits", category: "Operational Amplifiers" }
      ],
      faqs: [
        { question: "What is the maximum charge current of SGM4056?", answer: "The SGM4056 supports up to 1A charge current, programmed by an external resistor. For USB applications, limit to 500mA. For AC adapter applications, up to 1A is possible with proper thermal management.", decisionGuide: "Set charge current based on your power source capability and thermal constraints.", keywords: ["SGM4056 charge current", "battery charging rate", "Li-ion charger"] },
        { question: "How do I set the charge current on SGM4056?", answer: "Charge current is set by a resistor connected to the PROG pin. The formula is Ibat = 1000/Rprog. For 500mA, use 2kΩ. For 1A, use 1kΩ. The resistor should be 1% tolerance for accurate current programming.", decisionGuide: "Calculate Rprog = 1000/Ibat. Use 1% tolerance resistor for accurate current setting.", keywords: ["SGM4056 current set", "PROG resistor", "charge current programming"] },
        { question: "What is the charge status output on SGM4056?", answer: "The CHRG pin provides charge status: low (LED on) during charging, high impedance (LED off) when charging complete. It can directly drive an LED with current limited by external resistor.", decisionGuide: "Connect LED with 1kΩ-10kΩ resistor to VCC for visual charge indication.", keywords: ["SGM4056 charge status", "CHRG pin", "charge indicator LED"] },
        { question: "Does SGM4056 have thermal protection?", answer: "Yes, SGM4056 includes thermal regulation that reduces charge current if die temperature exceeds 120°C. This prevents overheating and allows maximum charging within thermal constraints.", decisionGuide: "Thermal regulation allows safe charging in thermally constrained designs without external thermal management.", keywords: ["SGM4056 thermal protection", "thermal regulation", "charger temperature"] },
        { question: "Can SGM4056 charge from USB?", answer: "Yes, SGM4056 can charge from USB 5V supply. For USB compliance, set charge current to 500mA or less using Rprog ≥ 2kΩ. The device works with both USB and AC adapter inputs.", decisionGuide: "Use 500mA max for USB compliance. Higher currents require AC adapter with adequate current capability.", keywords: ["SGM4056 USB charging", "USB battery charger", "portable charging"] }
      ]
    },
    {
      partNumber: "SGM6601",
      name: "High-Side Load Switch",
      shortDescription: "Low-resistance high-side load switch with controlled slew rate and protection features",
      descriptionParagraphs: [
        "The SGM6601 is a high-side load switch with low on-resistance and controlled turn-on slew rate.",
        "With 60mΩ typical on-resistance and 2A current capability, it efficiently switches power rails with minimal voltage drop.",
        "The device features controlled slew rate to limit inrush current and comprehensive protection features."
      ],
      specifications: {
        "Input Voltage": "1.5V to 5.5V",
        "Output Current": "Up to 2A",
        "On-Resistance": "60mΩ (typ)",
        "Quiescent Current": "0.5μA (typ)",
        "Slew Rate": "1ms rise time",
        "Current Limit": "2.5A (typ)",
        "Thermal Shutdown": "150°C",
        "Package": "SOT-23-5, SC-70-5"
      },
      features: [
        "Low 60mΩ on-resistance at 5V",
        "2A continuous current capability",
        "Controlled slew rate limits inrush current",
        "Ultra-low 0.5μA quiescent current",
        "Current limiting protection",
        "Short-circuit protection",
        "Thermal shutdown protection",
        "Reverse current blocking"
      ],
      applications: [
        "Power domain switching",
        "Battery-powered devices",
        "Portable electronics",
        "IoT sensors",
        "Power sequencing"
      ],
      faeReview: {
        author: "Jennifer Liu",
        title: "Senior FAE - Consumer Electronics",
        content: "The SGM6601 is my preferred load switch for battery-powered applications. The 60mΩ on-resistance is excellent for this class of device - it minimizes voltage drop and power loss when switching 1A+ loads. The controlled slew rate is a key feature - it limits inrush current when charging large capacitors, preventing system voltage droop. I've used this part extensively in IoT devices where power sequencing is critical. The ultra-low 0.5μA quiescent current when off makes it ideal for battery applications where circuits need to be completely powered down. The current limiting provides additional protection against short circuits. One design tip: the input capacitor should be larger than the output capacitor to prevent Vout from exceeding Vin during fast turn-off. Overall, an excellent load switch with great value.",
        highlight: "Low-resistance load switch with excellent inrush current control and ultra-low quiescent current"
      },
      alternativeParts: [
        {
          partNumber: "TPS22919",
          brand: "Texas Instruments",
          specifications: { resistance: "35mΩ", current: "3A", quiescent: "1μA" },
          comparison: { resistance: "35mΩ < 60mΩ (better)", current: "3A > 2A (higher)", quiescent: "1μA > 0.5μA (higher)", price: "Higher cost" },
          reason: "TI offers lower resistance and higher current but at higher cost",
          useCase: "Applications requiring <50mΩ resistance or >2A current",
          link: "#"
        },
        {
          partNumber: "FPF2195",
          brand: "ON Semiconductor",
          specifications: { resistance: "85mΩ", current: "2A", quiescent: "1μA" },
          comparison: { resistance: "85mΩ > 60mΩ (worse)", current: "2A = 2A (same)", quiescent: "1μA > 0.5μA (higher)" },
          reason: "ON Semi offers similar current but higher resistance and quiescent current",
          useCase: "Alternative source for supply diversification",
          link: "#"
        }
      ],
      companionParts: [
        { partNumber: "SGM4056", link: "#", description: "Battery charger for powered systems", category: "Power Management ICs" },
        { partNumber: "SGM2028", link: "#", description: "LDO for regulated power rails", category: "Voltage Regulators" },
        { partNumber: "SGM8551", link: "#", description: "Precision op-amp for current sensing", category: "Operational Amplifiers" }
      ],
      faqs: [
        { question: "What is the on-resistance of SGM6601?", answer: "The SGM6601 features 60mΩ typical on-resistance at 5V input. At 3.3V, resistance is approximately 80mΩ. This low resistance minimizes voltage drop and power dissipation when switching loads.", decisionGuide: "Calculate voltage drop (Iload × Rds_on) and power dissipation (I² × Rds_on) for your application.", keywords: ["SGM6601 on-resistance", "load switch Rds_on", "voltage drop"] },
        { question: "How does the slew rate control work on SGM6601?", answer: "SGM6601 features internal slew rate control with ~1ms rise time. This limits inrush current when charging output capacitors, preventing input voltage droop and EMI issues.", decisionGuide: "The built-in slew rate control eliminates need for external RC networks. Suitable for most applications with capacitive loads.", keywords: ["SGM6601 slew rate", "inrush current control", "soft start"] },
        { question: "What is the quiescent current of SGM6601?", answer: "SGM6601 draws only 0.5μA typical when off (switch open) and 15μA when on. The ultra-low off-state current makes it ideal for battery-powered applications.", decisionGuide: "SGM6601's ultra-low quiescent current is excellent for battery-powered designs requiring power gating.", keywords: ["SGM6601 quiescent current", "load switch power consumption", "battery life"] },
        { question: "What protection features does SGM6601 include?", answer: "SGM6601 includes current limiting (2.5A typical), short-circuit protection, thermal shutdown (150°C), and reverse current blocking. These features protect both the switch and downstream circuitry.", decisionGuide: "SGM6601 includes comprehensive protection for reliable operation in various fault conditions.", keywords: ["SGM6601 protection", "current limiting", "thermal shutdown"] },
        { question: "Can SGM6601 switch high capacitive loads?", answer: "Yes, the controlled slew rate allows SGM6601 to switch capacitive loads up to 100μF without excessive inrush current. For larger capacitors, consider adding external current limiting.", decisionGuide: "SGM6601 handles typical system capacitance well. Contact LiTong for applications with >100μF load capacitance.", keywords: ["SGM6601 capacitive load", "load capacitor", "inrush current"] }
      ]
    }
  ]
};

// Add the new categories
productsData.categories.push(ledDriversCategory);
productsData.categories.push(powerManagementCategory);

// Write back to file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✓ Added LED Drivers category with 2 products (SGM6603, SGM6604)');
console.log('✓ Added Power Management ICs category with 2 products (SGM4056, SGM6601)');
console.log('✓ products.json now has all 4 categories complete');
