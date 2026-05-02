const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hdsc');

// Fix products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add more FAQs to products-list
products.faqs.push(
  {
    question: "What development tools are supported by HDSC MCUs?",
    answer: "HDSC MCUs support multiple development environments: (1) IAR Embedded Workbench - industry-standard with excellent optimization; (2) Keil MDK - ARM compiler with μVision IDE, free up to 32KB; (3) HDSC Studio - free Eclipse-based IDE with GCC toolchain; (4) Debug tools - HDSC-Link, J-Link, ULINK supported. All tools provide full device support with peripheral libraries, example code, and debugging capabilities. LiTong provides tool setup support and training.",
    decisionGuide: "Use HDSC Studio for cost-sensitive projects. Use IAR/Keil for commercial development requiring advanced optimization.",
    keywords: ["HDSC development tools", "IDE support", "debugger"]
  },
  {
    question: "What is the price range of HDSC MCUs?",
    answer: "HDSC MCU pricing is very competitive: (1) Entry-level (HC32F003/HC32L110) - $0.30-$0.50 in volume; (2) Mainstream (HC32F030/HC32L136) - $0.50-$1.00; (3) High-performance (HC32F460/HC32F4A0) - $1.50-$3.00; (4) Ultra-low power (HC32L196) - $0.80-$1.50; (5) Automotive (HC32A series) - $2.00-$5.00. Prices vary by package, temperature grade, and volume. HDSC typically offers 30-50% cost savings compared to equivalent STM32 or NXP products. Contact LiTong sales for specific pricing and volume discounts.",
    decisionGuide: "HDSC offers excellent value across all segments. Contact sales for project-specific pricing.",
    keywords: ["HDSC price", "MCU cost", "volume pricing"]
  },
  {
    question: "How do I migrate from STM32 to HDSC MCUs?",
    answer: "Migrating from STM32 to HDSC involves: (1) Pin compatibility - check pinout compatibility, HDSC offers similar packages; (2) Peripheral mapping - map STM32 peripherals to HDSC equivalents, most are similar; (3) Code migration - HDSC provides SPL and HAL libraries similar to STM32; (4) Tool migration - both support IAR, Keil, GCC; (5) Timing - review clock tree and peripheral timing; (6) Power - HDSC ultra-low power modes differ from STM32L; (7) Debug - both use SWD interface. LiTong provides migration guides and technical support. Typical migration effort is 2-4 weeks for experienced developers.",
    decisionGuide: "Use HDSC migration guide. Contact FAE for complex migrations. Plan for 2-4 weeks migration effort.",
    keywords: ["STM32 migration", "code porting", "HDSC vs STM32"]
  }
);

// Add seoKeywords to categories
products.categories[0].seoKeywords = ["HDSC ultra-low power MCU", "HC32L196 distributor", "battery-powered MCU selection", "IoT microcontroller LiTong"];
products.categories[1].seoKeywords = ["HDSC general purpose MCU", "HC32F4A0 distributor", "Cortex-M4 MCU selection", "industrial MCU LiTong"];

// Add more products to ultra-low-power category
const ultraLowPowerCategory = products.categories[0];
ultraLowPowerCategory.products.push({
  partNumber: "HC32L176KATA-LQFP64",
  name: "Enhanced Ultra-Low Power MCU",
  shortDescription: "Enhanced ultra-low power MCU with 256KB Flash, LCD driver, and rich analog peripherals.",
  description: "Enhanced ultra-low power MCU with expanded memory and peripherals.",
  descriptionParagraphs: [
    "The HC32L176KATA offers enhanced features with 256KB Flash and 32KB RAM for more complex applications.",
    "With the same ultra-low power characteristics as the L196, this MCU provides additional resources for demanding IoT applications.",
    "The rich peripheral set includes USB, multiple UARTs, and advanced timers."
  ],
  specifications: {
    Core: "ARM Cortex-M0+",
    Flash: "256KB",
    RAM: "32KB",
    "Standby Current": "0.5μA with RTC",
    "Active Current": "35μA/MHz",
    ADC: "12-bit, 1Msps, 24ch",
    LCD: "8COM x 36SEG",
    USB: "Full-speed Device",
    Package: "LQFP64"
  },
  features: [
    "256KB Flash, 32KB RAM",
    "0.5μA standby current",
    "USB full-speed device",
    "LCD driver 288 segments",
    "Rich communication interfaces"
  ],
  applications: [
    "Smart home devices",
    "Industrial sensors",
    "Medical monitors",
    "Utility meters"
  ],
  faeReview: {
    author: "Dr. Chen Wei",
    title: "Low Power MCU Expert",
    content: "The HC32L176 offers an excellent balance of features and power consumption. The 256KB Flash is sufficient for most IoT applications with OTA update capability. The USB device peripheral enables easy PC connectivity for configuration and data download. I particularly like the flexible clock system that allows dynamic frequency scaling for power optimization. The analog peripherals are comprehensive - 24 ADC channels, multiple comparators, and operational amplifiers. For smart home applications requiring USB connectivity, this is an excellent choice at a very competitive price point.",
    highlight: "Great balance of features with USB connectivity at ultra-low power"
  },
  alternativeParts: [],
  companionParts: [
    {
      partNumber: "HC32L196KCTA-LQFP64",
      link: "/hdsc/products/ultra-low-power-mcus/hc32l196kcta-lqfp64.html",
      description: "Higher performance variant with more features",
      category: "Ultra-Low Power MCUs"
    },
    {
      partNumber: "HC32L136K8TA-LQFP64",
      link: "/hdsc/products/ultra-low-power-mcus/hc32l136k8ta-lqfp64.html",
      description: "Lower cost option with 64KB Flash",
      category: "Ultra-Low Power MCUs"
    }
  ],
  faqs: [
    {
      question: "What is the USB capability of HC32L176?",
      answer: "HC32L176 USB features: (1) Full-speed USB 2.0 device (12Mbps); (2) 8 endpoints configurable; (3) Built-in PHY - no external components needed; (4) Suspend/resume support for low power; (5) Battery charging detection (BCD); (6) USB bootloader for firmware updates. The USB peripheral operates independently, allowing CPU to sleep during USB transfers. Ideal for PC-connected sensors, configuration interfaces, and firmware update capability.",
      decisionGuide: "Use USB for PC connectivity and firmware updates. USB operates in low power modes.",
      keywords: ["HC32L USB", "USB device MCU", "USB bootloader"]
    }
  ]
});

// Add more products to general-purpose category
const generalPurposeCategory = products.categories[1];
generalPurposeCategory.products.push({
  partNumber: "HC32F460KETA-LQFP64",
  name: "High-Performance Motor Control MCU",
  shortDescription: "200MHz Cortex-M4 MCU with motor control timers, 512KB Flash, and advanced analog for industrial applications.",
  description: "High-performance MCU optimized for motor control and industrial applications.",
  descriptionParagraphs: [
    "The HC32F460KETA is a high-performance MCU featuring a 200MHz ARM Cortex-M4 core with FPU.",
    "With dedicated motor control timers, high-speed ADC, and rich communication interfaces, this MCU excels in motor control and industrial automation.",
    "The advanced analog peripherals and CAN-FD support make it ideal for industrial drives and automation systems."
  ],
  specifications: {
    Core: "ARM Cortex-M4",
    Flash: "512KB",
    RAM: "96KB",
    Clock: "200MHz",
    FPU: "Yes",
    ADC: "12-bit, 2.5Msps, 16ch",
    "Motor Control": "Advanced timers",
    "CAN-FD": "Yes, 2 channels",
    Package: "LQFP64"
  },
  features: [
    "200MHz Cortex-M4 with FPU",
    "512KB Flash, 96KB RAM",
    "Motor control timers",
    "12-bit ADC 2.5Msps",
    "CAN-FD support",
    "Advanced encryption"
  ],
  applications: [
    "Motor drives",
    "Industrial automation",
    "Robotics",
    "Power supplies"
  ],
  faeReview: {
    author: "Liu Ming",
    title: "Industrial MCU Expert",
    content: "The HC32F460 is purpose-built for motor control applications. The motor control timers with 1.25ns resolution provide exceptional PWM precision for high-frequency drives. The synchronized ADC triggering is crucial for current sampling in FOC algorithms. I've used this MCU in several BLDC and PMSM motor control projects with excellent results. The CAN-FD support is essential for modern industrial networks. The 200MHz Cortex-M4 with FPU handles complex control algorithms with ease. For motor control applications, this MCU offers exceptional value compared to STM32F3/F4 series.",
    highlight: "Purpose-built for motor control with exceptional timer precision"
  },
  alternativeParts: [],
  companionParts: [
    {
      partNumber: "HC32F4A0RITB-LQFP64",
      link: "/hdsc/products/general-purpose-mcus/hc32f4a0ritb-lqfp64.html",
      description: "Higher performance 240MHz variant with Ethernet",
      category: "General-Purpose MCUs"
    },
    {
      partNumber: "HC32M423KATA-LQFP48",
      link: "/hdsc/products/motor-control-mcus/hc32m423kata-lqfp48.html",
      description: "Motor control MCU with integrated drivers",
      category: "Motor Control MCUs"
    }
  ],
  faqs: [
    {
      question: "What makes HC32F460 good for motor control?",
      answer: "HC32F460 motor control features: (1) Advanced timers - 3 motor control timers with 1.25ns resolution; (2) Synchronized ADC - trigger ADC sampling at precise PWM positions for current measurement; (3) Hall sensor interface - dedicated decoder for BLDC commutation; (4) Encoder interface - quadrature encoder input for position feedback; (5) Break input - fast fault protection with programmable delay; (6) FPU - single-precision floating point for complex algorithms; (7) High-speed ADC - 2.5Msps for fast current sampling. These features enable efficient FOC and BLDC control.",
      decisionGuide: "Excellent for BLDC/PMSM motor control. Use advanced timers with synchronized ADC triggering.",
      keywords: ["motor control MCU", "FOC algorithm", "PWM timer"]
    }
  ]
});

// Add more FAQs to categories
ultraLowPowerCategory.faqs.push(
  {
    question: "How does HC32L compare to STM32L0/L4?",
    answer: "HC32L vs STM32L comparison: (1) Power - HC32L: 0.5μA standby, STM32L0: 0.35μA, STM32L4: 0.12μA. HC32L competitive but slightly higher; (2) Performance - HC32L: 48MHz M0+, STM32L0: 32MHz M0+, STM32L4: 80MHz M4. HC32L matches L0, below L4; (3) Peripherals - All have rich analog, LCD, USB options; (4) Price - HC32L 30-50% lower than STM32L; (5) Ecosystem - STM32 larger ecosystem, HDSC growing rapidly; (6) Support - LiTong provides local HDSC support. Choose HC32L for cost-sensitive applications. Choose STM32L4 for highest performance. Choose STM32L0 for ecosystem compatibility.",
    decisionGuide: "HC32L offers best value. STM32L4 for highest performance. STM32L0 for ecosystem.",
    keywords: ["HC32L vs STM32L", "MCU comparison", "low power MCU"]
  },
  {
    question: "What is the ESD/EMI performance of HC32L MCUs?",
    answer: "HC32L ESD/EMI specifications: (1) ESD HBM - 4kV (typical for industrial); (2) ESD CDM - 500V; (3) Latch-up - 100mA (JEDEC standard); (4) EMI - meets IEC 61000-4 standards for industrial applications; (5) EFT - ±1kV on power pins; (6) Surge - ±500V. The MCUs are designed for industrial environments with robust IO cells. For harsh environments, follow HDSC's PCB layout guidelines for optimal EMI performance. Automotive variants (HC32A) have enhanced EMC for automotive OEM requirements.",
    decisionGuide: "Suitable for industrial applications. Follow PCB guidelines for harsh environments.",
    keywords: ["ESD protection", "EMI performance", "reliability"]
  }
);

generalPurposeCategory.faqs.push(
  {
    question: "What Ethernet features does HC32F4A0 support?",
    answer: "HC32F4A0 Ethernet capabilities: (1) 10/100 Mbps Ethernet MAC; (2) MII and RMII interface to external PHY; (3) DMA support for zero-copy transfers; (4) IEEE 1588 PTP (Precision Time Protocol) for time synchronization; (5) TCP/IP offloading features; (6) Wake-on-LAN support. The Ethernet MAC integrates with the Cortex-M4 memory system for efficient data transfer. Requires external PHY chip (e.g., LAN8720, DP83848). LiTong provides reference designs with Ethernet connectivity and lwIP stack examples.",
    decisionGuide: "Use for industrial networking applications. Requires external PHY. Reference designs available.",
    keywords: ["Ethernet MCU", "industrial Ethernet", "TCP/IP"]
  },
  {
    question: "Does HC32F4A0 support external memory?",
    answer: "HC32F4A0 external memory support: (1) FSMC (Flexible Static Memory Controller) - supports SRAM, NOR Flash, PSRAM; (2) Data width - 8-bit or 16-bit; (3) Address range - up to 512MB external memory space; (4) Banks - 4 independent banks with separate configuration; (5) Timing - programmable timing for different memory types; (6) LCD interface - 8080/6800 mode support for external displays. The FSMC enables expansion for applications requiring large data buffers, graphics memory, or code expansion beyond internal Flash.",
    decisionGuide: "Use FSMC for external SRAM/Flash expansion. Supports up to 512MB external memory.",
    keywords: ["external memory", "FSMC", "memory expansion"]
  }
);

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Fixed products.json');

// Fix solutions.json - completely rewrite with correct structure
const solutionsData = {
  faqs: [
    {
      question: "How do I choose the right HDSC solution for my application?",
      answer: "Selecting the right HDSC solution depends on your application requirements: (1) For battery-powered IoT - choose IoT Ultra-Low Power Solution with HC32L series; (2) For motor control - choose Motor Control Solution with HC32F460/HC32M423; (3) For automotive - choose Automotive MCU Solution with HC32A series; (4) For industrial automation - choose Industrial Control Solution with HC32F4A0. Consider power requirements, performance needs, peripheral requirements, and cost constraints. LiTong's FAE team can help evaluate your specific requirements.",
      decisionGuide: "Match solution to application type. Contact FAE for personalized recommendations.",
      keywords: ["solution selection", "application matching", "HDSC solutions"]
    },
    {
      question: "What support does LiTong provide for HDSC solutions?",
      answer: "LiTong provides comprehensive support for HDSC solutions: (1) Technical consultation - application requirement analysis and solution recommendation; (2) Reference designs - complete hardware designs with schematics and BOM; (3) Software support - libraries, example code, and development tools; (4) FAE support - application engineering assistance for design and debugging; (5) Training - technical training on HDSC products and solutions; (6) Long-term supply - inventory management and supply chain support; (7) Customization - firmware and hardware customization services. Contact LiTong for detailed support options.",
      decisionGuide: "LiTong provides end-to-end support from design to production.",
      keywords: ["technical support", "FAE services", "reference designs"]
    }
  ],
  solutions: [
    {
      id: "iot-low-power-solution",
      name: "IoT Ultra-Low Power Solution",
      title: "HDSC IoT Ultra-Low Power Solution",
      subtitle: "Complete battery-powered IoT device solution with sub-μA standby current",
      description: "Comprehensive IoT solution based on HDSC HC32L series ultra-low power MCUs. Achieves years of battery life with rich connectivity and sensor interfaces.",
      longDescription: "HDSC's IoT ultra-low power solution leverages the HC32L series MCUs to enable battery-powered IoT devices with exceptional energy efficiency. The solution features sub-μA standby current, multiple low-power modes, and rapid wake-up capabilities. With integrated LCD drivers, rich analog peripherals, and multiple communication interfaces, this solution is ideal for smart home, industrial monitoring, and wearable applications. LiTong provides complete reference designs, power optimization tools, and application engineering support.",
      image: "/images/solutions/iot-low-power.jpg",
      icon: "battery-charging",
      industry: "IoT & Smart Devices",
      applications: ["Smart Home Sensors", "Environmental Monitoring", "Asset Tracking", "Wearable Devices", "Smart Meters"],
      coreAdvantages: [
        "Sub-μA standby current enables multi-year battery life",
        "Rapid 4μs wake-up from deep sleep mode",
        "Rich analog peripherals eliminate external components",
        "Hardware security features protect IoT devices",
        "Comprehensive development tools accelerate time to market"
      ],
      features: [
        { title: "Sub-μA Standby", description: "Ultra-low standby current down to 0.5μA with RTC running", icon: "zap" },
        { title: "Rapid Wake-up", description: "4μs wake-up time from deep sleep to active mode", icon: "timer" },
        { title: "Rich Peripherals", description: "Integrated LCD driver, 12-bit ADC, comparators", icon: "cpu" },
        { title: "Security Features", description: "Hardware encryption, secure boot, tamper detection", icon: "shield" }
      ],
      technicalSpecs: {
        standbyCurrent: "0.5μA (with RTC)",
        activeCurrent: "35μA/MHz",
        wakeUpTime: "4μs from deep sleep",
        batteryLife: "10+ years on coin cell",
        temperatureRange: "-40°C to +85°C",
        wirelessSupport: "BLE, LoRa, Zigbee compatible"
      },
      specifications: {
        "Standby Current": "0.5μA (with RTC)",
        "Active Current": "35μA/MHz",
        "Wake-up Time": "4μs from deep sleep",
        "Battery Life": "10+ years on coin cell",
        "Temperature Range": "-40°C to +85°C",
        "Wireless Support": "BLE, LoRa, Zigbee, Sub-GHz"
      },
      products: ["HC32L196KCTA", "HC32L176JATA", "HC32L136K8TA", "HC32L110C6UA"],
      bomList: [
        { partNumber: "HC32L196KCTA", description: "Ultra-low power MCU", quantity: 1, critical: true },
        { partNumber: "SX1262IMLTRT", description: "LoRa transceiver (optional)", quantity: 1, critical: false },
        { partNumber: "CR2032", description: "Coin cell battery", quantity: 1, critical: true },
        { partNumber: "TPS7A02", description: "Ultra-low power LDO", quantity: 1, critical: false }
      ],
      resources: [
        { type: "document", title: "IoT Power Optimization Guide", description: "Comprehensive guide to optimizing power consumption", url: "/resources/hdsc-iot-power-guide.pdf" },
        { type: "software", title: "Power Calculator Tool", description: "Estimate battery life for your application", url: "/resources/hdsc-power-calculator.zip" },
        { type: "reference", title: "Smart Sensor Reference Design", description: "Complete hardware design for sensor node", url: "/resources/hdsc-sensor-reference.zip" }
      ],
      customerCases: [
        { title: "Smart Water Meter", customer: "Leading Utility Company", description: "Deployed 100,000+ smart water meters using HDSC HC32L196", results: "Achieved 12-year battery life, passed IP68 certification" }
      ],
      caseStudies: [
        { title: "Smart Water Meter", customer: "Leading Utility Company", description: "Deployed 100,000+ smart water meters using HDSC HC32L196 with 10+ year battery life target", results: "Achieved 12-year battery life estimate, passed IP68 certification, deployed nationwide" },
        { title: "Wearable Health Monitor", customer: "Medical Device Startup", description: "Fitness and health monitoring wearable with continuous heart rate tracking", results: "7-day battery life, FDA Class II clearance obtained" }
      ],
      faqs: [
        { question: "What is the lowest power mode available?", answer: "The HD32L series supports Deep Sleep mode with 0.5μA current while maintaining RTC operation. Shutdown mode reduces current to 0.15μA." },
        { question: "How do I calculate expected battery life?", answer: "Battery life depends on duty cycle and battery capacity. LiTong provides a power calculator tool for accurate estimation." },
        { question: "What wireless protocols are supported?", answer: "HDSC MCUs interface with external transceivers via SPI/UART/I2C. Common pairings include BLE, LoRa, and Sub-GHz modules." }
      ],
      faeInsights: {
        author: "Dr. Chen Wei",
        title: "Low Power Applications Expert",
        summary: "The IoT Ultra-Low Power Solution is ideal for battery-powered applications requiring long operational life.",
        content: "I've implemented this solution in numerous smart meter and sensor applications. The key to achieving 10+ year battery life is aggressive power management - spend 99%+ time in standby mode, minimize active time, and optimize wake-up frequency. The HC32L196's 0.5μA standby current is genuine - I've verified it in lab conditions. The integrated LCD driver is a major advantage for meter applications, eliminating the need for external driver ICs. For wireless connectivity, I recommend pairing with LoRa for long-range, low-data-rate applications, or BLE for smartphone connectivity. The hardware security features are essential for smart meters to prevent tampering. LiTong's power calculator tool is invaluable for estimating battery life accurately."
      }
    },
    {
      id: "motor-control-solution",
      name: "Motor Control Solution",
      title: "HDSC Motor Control Solution",
      subtitle: "High-performance BLDC and PMSM motor control with integrated drivers",
      description: "Complete motor control solution featuring HDSC motor control MCUs with advanced timers, integrated gate drivers, and comprehensive motor control libraries.",
      longDescription: "HDSC's motor control solution provides a complete platform for BLDC and PMSM motor applications. The solution includes dedicated motor control MCUs with high-resolution timers, integrated pre-drivers, and comprehensive firmware libraries supporting sensorless FOC, trapezoidal commutation, and advanced control algorithms. With integrated protection features and fault management, this solution is ideal for appliances, power tools, drones, and industrial drives.",
      image: "/images/solutions/motor-control.jpg",
      icon: "settings",
      industry: "Industrial & Consumer",
      applications: ["Power Tools", "Drone Motors", "Appliance Motors", "HVAC Systems", "Industrial Drives"],
      coreAdvantages: [
        "1ns PWM resolution enables precise motor control",
        "Integrated gate drivers reduce BOM cost",
        "Complete FOC library with auto-tuning",
        "Comprehensive protection features ensure safety",
        "High-speed operation up to 150,000 RPM"
      ],
      features: [
        { title: "Integrated Drivers", description: "Built-in gate drivers supporting up to 600V operation", icon: "zap" },
        { title: "Advanced Timers", description: "High-resolution PWM timers with 1ns resolution", icon: "timer" },
        { title: "Sensorless FOC", description: "Complete sensorless FOC library with auto-tuning", icon: "activity" },
        { title: "Protection Features", description: "Over-current, over-voltage, over-temperature protection", icon: "shield" }
      ],
      technicalSpecs: {
        pwmResolution: "1ns (1GHz equivalent)",
        controlLoop: "FOC, Trapezoidal, Sinusoidal",
        motorTypes: "BLDC, PMSM, ACIM",
        maxVoltage: "600V with integrated driver",
        maxCurrent: "2A gate drive capability",
        feedback: "Sensorless, Hall, Encoder"
      },
      specifications: {
        "PWM Resolution": "1ns (1GHz equivalent)",
        "Control Loop": "FOC, Trapezoidal, Sinusoidal",
        "Motor Types": "BLDC, PMSM, ACIM",
        "Max Voltage": "600V with integrated driver",
        "Max Current": "2A gate drive capability",
        "Feedback": "Sensorless, Hall, Encoder"
      },
      products: ["HC32F460KETA", "HC32M423KATA", "HC32F4A0RITB"],
      bomList: [
        { partNumber: "HC32F460KETA", description: "Motor control MCU", quantity: 1, critical: true },
        { partNumber: "IR2104", description: "Gate driver (if not integrated)", quantity: 3, critical: true },
        { partNumber: "IPB017N10N5", description: "Power MOSFET", quantity: 6, critical: true },
        { partNumber: "ACS712", description: "Current sensor", quantity: 2, critical: false }
      ],
      resources: [
        { type: "document", title: "Motor Control Library Guide", description: "Complete documentation for motor control library", url: "/resources/hdsc-motor-library-guide.pdf" },
        { type: "software", title: "Motor Control Workbench", description: "GUI tool for motor tuning", url: "/resources/hdsc-motor-workbench.zip" },
        { type: "reference", title: "Drone ESC Reference Design", description: "Complete ESC design for drones", url: "/resources/hdsc-drone-esc-reference.zip" }
      ],
      customerCases: [
        { title: "Cordless Drill", customer: "Power Tool Manufacturer", description: "High-performance cordless drill with sensorless FOC", results: "95% efficiency, 3x longer runtime" }
      ],
      caseStudies: [
        { title: "Cordless Drill", customer: "Power Tool Manufacturer", description: "High-performance cordless drill with sensorless FOC control and 50,000 RPM", results: "Achieved 95% efficiency, 3x longer runtime, passed EMC" },
        { title: "Drone Propulsion", customer: "Commercial Drone Company", description: "High-speed drone motor controller", results: "100,000+ RPM, 0.1% speed accuracy, 50A peak" }
      ],
      faqs: [
        { question: "What motor control algorithms are supported?", answer: "HDSC provides libraries for sensorless FOC, trapezoidal commutation, and sinusoidal control with MTPA and flux weakening." },
        { question: "Can I use this for high-voltage drives?", answer: "Yes, HDSC MCUs with integrated drivers support up to 600V. External drivers available for higher voltages." },
        { question: "How do I tune motor control parameters?", answer: "LiTong provides Motor Control Workbench GUI tool for automated parameter identification and tuning." }
      ],
      faeInsights: {
        author: "Liu Ming",
        title: "Motor Control Expert",
        summary: "The Motor Control Solution provides everything needed for high-performance motor applications.",
        content: "This solution is comprehensive - from hardware to software to tools. The 1ns PWM resolution is exceptional and enables precise control even at high switching frequencies. The integrated gate drivers in the HC32M423 significantly reduce BOM cost and PCB size for motor drives. The Motor Control Workbench tool automates the most challenging part of motor control development - parameter identification and loop tuning. I've used this solution for BLDC ceiling fans, drone ESCs, and industrial servo drives with excellent results. The FOC library is production-ready and well-documented. For high-speed motors, the observer stability at high speeds is critical - HDSC's implementation handles 100,000+ RPM reliably."
      }
    },
    {
      id: "automotive-mcu-solution",
      name: "Automotive MCU Solution",
      title: "HDSC Automotive MCU Solution",
      subtitle: "AEC-Q100 certified MCUs for body electronics and control applications",
      description: "Automotive-grade MCU solution meeting AEC-Q100 Grade 1 requirements for body electronics, sensors, and control systems.",
      longDescription: "HDSC's automotive MCU solution provides reliable, cost-effective controllers for automotive applications. The AEC-Q100 Grade 1 certified MCUs operate from -40°C to +125°C and feature enhanced EMC performance, lock-step CPU options for safety-critical applications, and comprehensive diagnostic capabilities.",
      image: "/images/solutions/automotive-mcu.jpg",
      icon: "car",
      industry: "Automotive",
      applications: ["Body Control Modules", "Sensor Interfaces", "Door Modules", "Seat Control", "HVAC Control"],
      coreAdvantages: [
        "AEC-Q100 Grade 1 certified for automotive use",
        "Lock-step CPU for ASIL-B safety applications",
        "Enhanced EMC for automotive environments",
        "15-year supply guarantee for long-term production",
        "Full PPAP documentation support"
      ],
      features: [
        { title: "AEC-Q100 Certified", description: "Grade 1 qualification with PPAP support", icon: "award" },
        { title: "Functional Safety", description: "Lock-step CPU and ECC for ASIL-B", icon: "shield" },
        { title: "Automotive Networks", description: "CAN-FD and LIN interfaces", icon: "share-2" },
        { title: "Enhanced EMC", description: "Meets automotive OEM requirements", icon: "radio" }
      ],
      technicalSpecs: {
        qualification: "AEC-Q100 Grade 1",
        temperature: "-40°C to +125°C",
        safety: "ASIL-B capable",
        networks: "CAN-FD x2, LIN x2",
        memoryProtection: "ECC on Flash and RAM",
        supply: "3.3V/5V IO tolerant"
      },
      specifications: {
        "Qualification": "AEC-Q100 Grade 1",
        "Temperature": "-40°C to +125°C",
        "Safety": "ASIL-B capable",
        "Networks": "CAN-FD x2, LIN x2",
        "Memory Protection": "ECC on Flash and RAM",
        "Supply": "3.3V/5V IO tolerant"
      },
      products: ["HC32A460PETB", "HC32A136K8TA"],
      bomList: [
        { partNumber: "HC32A460PETB", description: "Automotive MCU", quantity: 1, critical: true },
        { partNumber: "TJA1051", description: "CAN transceiver", quantity: 2, critical: true },
        { partNumber: "TJA1021", description: "LIN transceiver", quantity: 1, critical: false }
      ],
      resources: [
        { type: "document", title: "Automotive Application Guide", description: "Design guidelines for automotive", url: "/resources/hdsc-automotive-guide.pdf" },
        { type: "document", title: "Functional Safety Manual", description: "Safety analysis for ASIL-B", url: "/resources/hdsc-safety-manual.pdf" },
        { type: "reference", title: "BCM Reference Design", description: "Body control module design", url: "/resources/hdsc-bcm-reference.zip" }
      ],
      customerCases: [
        { title: "Door Control Module", customer: "Tier-1 Supplier", description: "Door module with window and mirror control", results: "Passed OEM EMC, 0 ppm failure rate" }
      ],
      caseStudies: [
        { title: "Door Control Module", customer: "Tier-1 Automotive Supplier", description: "Door control module with window lift, mirror control, and lock actuation", results: "Passed OEM EMC requirements, 0 ppm field failure rate over 2 years" }
      ],
      faqs: [
        { question: "What AEC-Q100 grade is available?", answer: "HDSC automotive MCUs are qualified to AEC-Q100 Grade 1 (-40°C to +125°C). PPAP documentation available." },
        { question: "Are these suitable for safety-critical applications?", answer: "Yes, selected MCUs include lock-step CPU and ECC suitable for ASIL-B applications." },
        { question: "What is the long-term supply commitment?", answer: "HDSC provides 15-year supply guarantees for automotive products." }
      ],
      faeInsights: {
        author: "Zhang Wei",
        title: "Automotive Applications Expert",
        summary: "The Automotive MCU Solution meets stringent automotive requirements with certified quality.",
        content: "Automotive electronics require the highest reliability and quality standards. HDSC's AEC-Q100 Grade 1 certification demonstrates their commitment to automotive quality. I've worked with Tier-1 suppliers using HC32A MCUs in door modules, seat controllers, and HVAC systems. The enhanced EMC performance is critical - these MCUs pass the stringent OEM EMC requirements that many consumer-grade MCUs fail. The lock-step CPU feature is essential for safety-critical applications, providing redundancy for ASIL-B compliance. LiTong's PPAP documentation support and long-term supply commitment give automotive customers confidence in their supply chain. For body electronics applications, HC32A offers excellent value compared to established automotive MCU suppliers."
      }
    },
    {
      id: "industrial-control-solution",
      name: "Industrial Control Solution",
      title: "HDSC Industrial Control Solution",
      subtitle: "High-performance MCUs for industrial automation and control systems",
      description: "Robust industrial control solution featuring high-performance ARM Cortex-M4 MCUs with advanced analog, communication, and safety features.",
      longDescription: "HDSC's industrial control solution delivers reliable, high-performance control for factory automation, process control, and industrial equipment. The solution features ARM Cortex-M4 MCUs running up to 240MHz with hardware FPU, rich analog peripherals, and industrial communication interfaces.",
      image: "/images/solutions/industrial-control.jpg",
      icon: "factory",
      industry: "Industrial Automation",
      applications: ["PLC Controllers", "Motion Control", "Process Control", "HMI Panels", "Industrial Gateways"],
      coreAdvantages: [
        "240MHz Cortex-M4 with FPU for complex algorithms",
        "Industrial temperature range -40°C to +85°C",
        "Ethernet and CAN-FD for industrial networks",
        "High-speed ADC for fast process control",
        "3-year warranty and long-term support"
      ],
      features: [
        { title: "High Performance", description: "240MHz Cortex-M4 with hardware FPU", icon: "cpu" },
        { title: "Rich Analog", description: "12-bit ADC 2.5Msps, DACs, comparators", icon: "activity" },
        { title: "Industrial Comm", description: "Ethernet, CAN-FD, RS-485 support", icon: "share-2" },
        { title: "Extended Temp", description: "-40°C to +85°C operation", icon: "thermometer" }
      ],
      technicalSpecs: {
        core: "ARM Cortex-M4 @ 240MHz",
        fpu: "Single-precision hardware",
        adc: "12-bit, 2.5Msps, 16 channels",
        dac: "12-bit, 2 channels",
        ethernet: "10/100 MAC with DMA",
        temperature: "-40°C to +85°C"
      },
      specifications: {
        "Core": "ARM Cortex-M4 @ 240MHz",
        "FPU": "Single-precision hardware",
        "ADC": "12-bit, 2.5Msps, 16 channels",
        "DAC": "12-bit, 2 channels",
        "Ethernet": "10/100 MAC with DMA",
        "Temperature": "-40°C to +85°C"
      },
      products: ["HC32F4A0RITB", "HC32F460KETA"],
      bomList: [
        { partNumber: "HC32F4A0RITB", description: "Industrial MCU", quantity: 1, critical: true },
        { partNumber: "LAN8720AI", description: "Ethernet PHY", quantity: 1, critical: false },
        { partNumber: "ADM2587E", description: "RS-485 transceiver", quantity: 1, critical: false }
      ],
      resources: [
        { type: "document", title: "Industrial Communication Guide", description: "Modbus, CANopen, EtherNet/IP", url: "/resources/hdsc-industrial-comm-guide.pdf" },
        { type: "software", title: "PLC Runtime Library", description: "IEC 61131-3 runtime", url: "/resources/hdsc-plc-runtime.zip" },
        { type: "reference", title: "PLC Reference Design", description: "Complete PLC design", url: "/resources/hdsc-plc-reference.zip" }
      ],
      customerCases: [
        { title: "Compact PLC", customer: "Industrial Automation Company", description: "Compact PLC with digital and analog IO", results: "1ms scan time for 1K instructions" }
      ],
      caseStudies: [
        { title: "Compact PLC Controller", customer: "Industrial Automation Company", description: "Compact PLC with 16 digital inputs, 16 digital outputs, and 8 analog channels", results: "1ms scan time for 1K instructions, passed IEC 61131-3 compliance" }
      ],
      faqs: [
        { question: "What industrial protocols are supported?", answer: "HDSC provides software stacks for Modbus, CANopen, EtherNet/IP, and PROFINET." },
        { question: "Is PLC runtime support available?", answer: "Yes, LiTong provides IEC 61131-3 runtime with ladder logic and structured text." },
        { question: "What is the warranty period?", answer: "HDSC industrial products come with a 3-year warranty and long-term support." }
      ],
      faeInsights: {
        author: "Wang Gang",
        title: "Industrial Automation Expert",
        summary: "The Industrial Control Solution provides reliable control for factory automation applications.",
        content: "Industrial automation demands reliable, high-performance controllers that can operate in harsh environments. The HC32F4A0 delivers with its 240MHz Cortex-M4, rich analog peripherals, and industrial communication interfaces. I've implemented this solution in PLC controllers, motion control systems, and industrial gateways. The Ethernet MAC with DMA enables high-throughput industrial communication without CPU overhead. The 2.5Msps ADC is fast enough for most process control applications. The extended temperature range and robust design ensure reliable operation in industrial environments. LiTong's PLC runtime library and industrial protocol stacks significantly reduce development time. For cost-sensitive industrial applications, HC32F4A0 offers compelling value compared to traditional industrial MCU suppliers."
      }
    }
  ]
};

const solutionsPath = path.join(dataDir, 'solutions.json');
fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
console.log('✅ Fixed solutions.json');

// Fix support.json - fix JSON control character issue
const supportPath = path.join(dataDir, 'support.json');
let supportContent = fs.readFileSync(supportPath, 'utf8');

// Fix the code block issue in hdsc-power-optimization article
// Replace the problematic code block with proper formatting
supportContent = supportContent.replace(
  /```c\n\/\/ Example: Disable unused peripheral clocks\nMRC_EnableClock\(MRC_CLK_GPIOB, FALSE\);\nMRC_EnableClock\(MRC_CLK_UART1, FALSE\);\n```/,
  "Example code: MRC_EnableClock(MRC_CLK_GPIOB, FALSE); MRC_EnableClock(MRC_CLK_UART1, FALSE);"
);

fs.writeFileSync(supportPath, supportContent);
console.log('✅ Fixed support.json');

// Fix news.json - wrap in articles array
const newsPath = path.join(dataDir, 'news.json');
const newsData = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

// Check if it needs to be wrapped
if (!newsData.articles && Array.isArray(newsData.news)) {
  const fixedNewsData = { articles: newsData.news };
  fs.writeFileSync(newsPath, JSON.stringify(fixedNewsData, null, 2));
  console.log('✅ Fixed news.json - wrapped in articles array');
} else {
  console.log('✅ news.json already correct');
}

console.log('\n✅ All HDSC data files fixed!');
