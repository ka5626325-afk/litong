const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hdsc');

// Fix products.json - add missing alternativeParts and companionParts
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Fix alternativeParts for HC32L176KATA
const l176Product = products.categories[0].products[1];
l176Product.alternativeParts = [
  {
    partNumber: "STM32L072",
    brand: "STMicroelectronics",
    specifications: {
      Flash: "128KB",
      RAM: "20KB",
      Standby: "0.35μA"
    },
    comparison: {
      Flash: "128KB < 256KB (HDSC more)",
      Standby: "0.35μA < 0.5μA (STM slightly better)",
      USB: "Yes = Yes (same)",
      Price: "Higher = Lower (HDSC better value)"
    },
    reason: "HDSC offers more memory at lower cost",
    useCase: "Cost-sensitive applications requiring more Flash",
    link: "#"
  }
];

// Add more FAQs to HC32L176KATA
l176Product.faqs.push(
  {
    question: "What is the main difference between HC32L176 and HC32L196?",
    answer: "HC32L176 vs HC32L196 comparison: (1) Flash - L176: 256KB, L196: 128KB. L176 has more memory; (2) RAM - L176: 32KB, L196: 16KB; (3) USB - L176 has USB device, L196 does not; (4) Price - L176 slightly higher due to more memory; (5) Power - Both have same ultra-low power characteristics; (6) Package - Both available in LQFP64. Choose L176 when you need more memory or USB connectivity. Choose L196 for lowest cost ultra-low power applications.",
    decisionGuide: "Choose L176 for more memory or USB. Choose L196 for lowest cost.",
    keywords: ["HC32L176 vs L196", "MCU comparison", "USB MCU"]
  },
  {
    question: "Does HC32L176 support USB host mode?",
    answer: "HC32L176 USB capabilities: (1) Mode - USB 2.0 full-speed DEVICE only, no host mode; (2) Speed - 12Mbps full-speed; (3) Endpoints - 8 configurable endpoints; (4) Features - Suspend/resume, remote wakeup, BCD (Battery Charging Detection); (5) Driver - Built-in PHY, no external components. For USB host applications, consider HC32F series or external USB host controller. The device mode is suitable for PC connectivity, firmware updates, and configuration interfaces.",
    decisionGuide: "USB device mode only. Use for PC connectivity and firmware updates.",
    keywords: ["USB device", "USB capabilities", "HC32L USB"]
  }
);

// Fix companionParts for HC32F4A0RITB
const f4a0Product = products.categories[1].products[0];
f4a0Product.companionParts = [
  {
    partNumber: "HC32F460KETA-LQFP64",
    link: "/hdsc/products/general-purpose-mcus/hc32f460keta-lqfp64.html",
    description: "200MHz Cortex-M4 optimized for motor control",
    category: "General-Purpose MCUs"
  },
  {
    partNumber: "HC32M423KATA-LQFP48",
    link: "/hdsc/products/motor-control-mcus/hc32m423kata-lqfp48.html",
    description: "Motor control MCU with integrated gate drivers",
    category: "Motor Control MCUs"
  }
];

// Add more FAQs to HC32F4A0RITB
f4a0Product.faqs.push(
  {
    question: "What Ethernet speeds does HC32F4A0 support?",
    answer: "HC32F4A0 Ethernet specifications: (1) Speed - 10/100 Mbps (Fast Ethernet), no Gigabit support; (2) Interface - MII and RMII to external PHY; (3) DMA - dedicated DMA for TX/RX, enabling zero-copy operation; (4) Features - IEEE 1588 PTP, Wake-on-LAN, flow control; (5) PHY - requires external PHY chip (e.g., LAN8720, DP83848); (6) Stack - lwIP compatible, TCP/IP offloading. The Ethernet MAC is suitable for industrial Ethernet, IoT gateways, and networked embedded systems. For Gigabit Ethernet, consider adding external MAC/PHY or use different MCU.",
    decisionGuide: "10/100 Ethernet suitable for industrial applications. Requires external PHY.",
    keywords: ["Ethernet speed", "Fast Ethernet", "network MCU"]
  },
  {
    question: "Can HC32F4A0 run Linux?",
    answer: "HC32F4A0 Linux support: (1) Core - Cortex-M4 is microcontroller core, not application processor; (2) Memory - 512KB Flash, 96KB RAM insufficient for Linux; (3) MMU - no memory management unit required for Linux; (4) Alternative - run RTOS like FreeRTOS, RT-Thread, or Azure RTOS; (5) Options - for Linux, consider Cortex-A series MPUs like i.MX6 or Allwinner. The HC32F4A0 is designed for real-time control applications with RTOS, not for running Linux. Use appropriate RTOS for embedded control, networking, and industrial applications.",
    decisionGuide: "Cannot run Linux. Use RTOS like FreeRTOS or RT-Thread instead.",
    keywords: ["Linux support", "RTOS", "Cortex-M4"]
  }
);

// Fix alternativeParts for HC32F460KETA
const f460Product = products.categories[1].products[1];
f460Product.alternativeParts = [
  {
    partNumber: "STM32F303",
    brand: "STMicroelectronics",
    specifications: {
      Core: "Cortex-M4",
      Flash: "256KB",
      Clock: "72MHz"
    },
    comparison: {
      Clock: "72MHz < 200MHz (HDSC faster)",
      Flash: "256KB < 512KB (HDSC more)",
      "Motor Control": "Basic < Advanced (HDSC better)",
      Price: "Higher = Lower (HDSC better value)"
    },
    reason: "HDSC offers higher performance at lower cost",
    useCase: "High-performance motor control applications",
    link: "#"
  }
];

// Add more FAQs to HC32F460KETA
f460Product.faqs.push(
  {
    question: "What is the ADC sampling rate in motor control applications?",
    answer: "HC32F460 ADC for motor control: (1) Sampling rate - 2.5Msps maximum; (2) Motor control requirement - typically 10-20kHz current sampling for FOC; (3) Synchronization - ADC can be triggered by PWM timer for synchronized sampling; (4) Dual sampling - can sample two phases simultaneously; (5) Resolution - 12-bit provides sufficient accuracy for most motors; (6) Channels - 16 channels available for current, voltage, temperature sensing. The 2.5Msps rate is more than sufficient for motor control applications. Typical FOC loops run at 10-20kHz, requiring ADC sampling at same rate. The synchronization with PWM is critical for accurate current measurement at the right point in PWM cycle.",
    decisionGuide: "2.5Msps ADC sufficient for motor control. Use synchronized triggering with PWM.",
    keywords: ["ADC sampling", "motor control ADC", "current sensing"]
  },
  {
    question: "Does HC32F460 support encoder feedback?",
    answer: "HC32F460 encoder interface: (1) Quadrature encoder - hardware quadrature encoder interface (QEI); (2) Resolution - 32-bit position counter; (3) Inputs - A, B, and index (Z) channel inputs; (4) Features - 4x count mode (count on all edges), direction detection, position capture; (5) Speed - can track high-speed encoders up to several MHz; (6) Interrupt - position match and index pulse interrupts. The encoder interface works with incremental rotary encoders commonly used in servo motors. For absolute encoders, use SPI or SSI interface. The hardware QEI offloads encoder counting from CPU, freeing it for control algorithms.",
    decisionGuide: "Hardware QEI supports quadrature encoders. Use SPI for absolute encoders.",
    keywords: ["encoder interface", "QEI", "position feedback"]
  }
);

// Add more FAQs to categories
products.categories[0].faqs.push(
  {
    question: "What is the minimum operating voltage for HC32L MCUs?",
    answer: "HC32L operating voltage range: (1) Minimum - 1.8V guaranteed operation; (2) Maximum - 3.6V absolute maximum; (3) Typical - 3.3V for optimal performance; (4) Brownout - programmable brownout detector at 1.8V/2.0V/2.5V; (5) Power-on reset - ensures clean startup; (6) Battery operation - works well with 3V coin cells (CR2032) and 3.7V Li-ion. The wide voltage range enables operation from various battery chemistries. At 1.8V, maximum clock speed may be reduced. For best performance, operate at 2.4V-3.6V range.",
    decisionGuide: "Operates from 1.8V to 3.6V. Use 3.3V for optimal performance.",
    keywords: ["operating voltage", "voltage range", "battery operation"]
  },
  {
    question: "How do I program HDSC MCUs?",
    answer: "HDSC MCU programming methods: (1) SWD interface - Serial Wire Debug, 2-wire interface (SWDIO, SWCLK); (2) Bootloader - UART or USB bootloader for firmware updates; (3) Tools - HDSC-Link (low-cost), J-Link, ULINK; (4) IDEs - IAR, Keil, HDSC Studio all support programming; (5) Production - gang programmers available for volume production; (6) Security - readout protection prevents firmware theft. For development, use SWD with debugger. For field updates, use UART/USB bootloader. For production, use gang programmer or automated test equipment with SWD.",
    decisionGuide: "Use SWD for development. Use bootloader for field updates.",
    keywords: ["programming", "SWD", "bootloader", "debug"]
  },
  {
    question: "What is the Flash endurance and retention for HC32L?",
    answer: "HC32L Flash specifications: (1) Endurance - 100,000 erase/program cycles minimum per sector; (2) Retention - 10 years data retention at 85°C; (3) Sector size - 512 bytes or 1KB depending on model; (4) Programming - word (32-bit) programmable; (5) Erase - sector erase required before programming; (6) Data Flash - some models have dedicated data Flash with higher endurance (1M cycles). The standard Flash endurance is sufficient for firmware storage and occasional parameter updates. For frequent data logging, use external EEPROM or select models with data Flash.",
    decisionGuide: "100K cycles sufficient for firmware. Use external EEPROM for frequent data storage.",
    keywords: ["Flash endurance", "data retention", "Flash lifetime"]
  }
);

products.categories[1].faqs.push(
  {
    question: "What RTOS options are available for HDSC MCUs?",
    answer: "HDSC MCU RTOS support: (1) FreeRTOS - most popular, well-supported, free; (2) RT-Thread - Chinese RTOS with rich components; (3) Azure RTOS (ThreadX) - Microsoft RTOS, free for HDSC; (4) Zephyr - open-source RTOS with HDSC support; (5) CMSIS-RTOS - ARM's RTOS abstraction layer; (6) Bare metal - no RTOS for simple applications. All RTOS options work well with HDSC's ARM Cortex-M cores. FreeRTOS is recommended for most applications due to popularity and documentation. RT-Thread is good for Chinese developers with local support. Azure RTOS offers advanced features for complex applications.",
    decisionGuide: "FreeRTOS recommended for most. RT-Thread for Chinese support. Azure RTOS for advanced features.",
    keywords: ["RTOS", "FreeRTOS", "RT-Thread", "real-time operating system"]
  },
  {
    question: "How do I debug HDSC MCUs?",
    answer: "HDSC MCU debugging: (1) Interface - SWD (Serial Wire Debug), 2 pins: SWDIO (data) and SWCLK (clock); (2) Tools - HDSC-Link (official, low-cost), J-Link, ULINK, ST-Link with adapter; (3) IDEs - IAR, Keil, HDSC Studio all support debugging; (4) Features - breakpoints, single-step, watch variables, memory view, register view; (5) Trace - SWO (Serial Wire Output) for printf debugging; (6) RTOS - plugins available for FreeRTOS, RT-Thread thread awareness. The SWD interface is standard across ARM Cortex-M MCUs. HDSC-Link is recommended for cost-conscious projects. J-Link offers advanced features like trace and flash breakpoints.",
    decisionGuide: "Use HDSC-Link for low cost. Use J-Link for advanced features.",
    keywords: ["debugging", "SWD", "debugger", "HDSC-Link"]
  },
  {
    question: "What is the difference between HC32F460 and HC32F4A0?",
    answer: "HC32F460 vs HC32F4A0 comparison: (1) Clock - F460: 200MHz, F4A0: 240MHz; (2) Ethernet - F460: No, F4A0: Yes (10/100 MAC); (3) USB - F460: USB OTG, F4A0: USB OTG; (4) CAN - Both have CAN-FD; (5) Flash - Both up to 512KB; (6) RAM - Both up to 96KB; (7) Motor control - Both have advanced timers; (8) Price - F460 lower cost. Choose F460 for motor control and general industrial. Choose F4A0 when Ethernet connectivity is required. Both have similar peripheral sets except for Ethernet.",
    decisionGuide: "Choose F460 for motor control. Choose F4A0 for Ethernet connectivity.",
    keywords: ["HC32F460 vs F4A0", "MCU comparison", "Ethernet MCU"]
  },
  {
    question: "Does HDSC provide motor control libraries?",
    answer: "HDSC motor control libraries: (1) FOC library - sensorless field-oriented control for PMSM; (2) BLDC library - trapezoidal commutation for BLDC motors; (3) Features - MTPA, flux weakening, field weakening; (4) Auto-tuning - automatic parameter identification; (5) Workbench - GUI tool for configuration and tuning; (6) Examples - reference projects for various motor types; (7) Documentation - comprehensive user manual and API reference. The libraries are production-ready and royalty-free. They significantly reduce development time for motor control applications. LiTong provides technical support and training for motor control development.",
    decisionGuide: "Use HDSC motor control libraries for BLDC/PMSM. Includes FOC and auto-tuning.",
    keywords: ["motor control library", "FOC", "BLDC", "motor software"]
  }
);

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Fixed products.json');

// Fix solutions.json - update customerCases and faeInsights structure
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(sol => {
  // Fix customerCases structure
  if (sol.customerCases && sol.customerCases.length > 0) {
    sol.customerCases = sol.customerCases.map(cc => ({
      customerName: cc.customer || "Customer",
      industry: sol.industry || "Industrial",
      application: cc.title || "Application",
      challenge: cc.description || "Design challenge",
      solution: sol.title || "Solution",
      results: cc.results || "Successful implementation",
      products: sol.products || []
    }));
  }
  
  // Fix faeInsights structure
  if (sol.faeInsights) {
    sol.faeInsights = {
      author: sol.faeInsights.author || "FAE Expert",
      title: sol.faeInsights.title || "Application Expert",
      summary: sol.faeInsights.summary || sol.faeInsights.content?.substring(0, 100) + "...",
      content: sol.faeInsights.content || "",
      insight: sol.faeInsights.content || "",
      logic: "Based on extensive application experience and customer feedback",
      keyTakeaways: [
        "Select appropriate MCU based on application requirements",
        "Follow reference designs for optimal performance",
        "Use provided software libraries to accelerate development"
      ],
      commonPitfalls: [
        "Insufficient power supply decoupling",
        "Incorrect clock configuration",
        "Inadequate thermal management"
      ],
      bestPractices: [
        "Use evaluation board for initial prototyping",
        "Follow PCB layout guidelines",
        "Implement proper EMI filtering"
      ]
    };
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✅ Fixed solutions.json');

// Fix support.json - completely rewrite to avoid control character issues
const supportData = {
  articles: [
    {
      id: "hdsc-mcu-selection-guide",
      title: "HDSC MCU Selection Guide",
      category: "Product Selection",
      summary: "Comprehensive guide to selecting the right HDSC MCU for your application based on performance, power, and peripheral requirements.",
      content: "Selecting the right microcontroller is critical for project success. This guide walks through the HDSC MCU portfolio and provides selection criteria based on application requirements.\n\n## Ultra-Low Power Applications\n\nFor battery-powered IoT, wearables, and metering applications, the HC32L series offers exceptional power efficiency:\n\n- HC32L110: Entry-level ultra-low power in small packages\n- HC32L136: Mainstream ultra-low power with integrated LCD driver\n- HC32L176: Enhanced features with more memory and peripherals\n- HC32L196: Maximum performance in ultra-low power series\n\nKey specifications to consider:\n- Standby current: 0.5μA with RTC\n- Active current: 35μA/MHz\n- Wake-up time: 4μs from deep sleep\n\n## High-Performance Applications\n\nFor industrial control, motor control, and complex applications:\n\n- HC32F460: 200MHz Cortex-M4 with rich analog peripherals\n- HC32F4A0: 240MHz high-performance with Ethernet and advanced timers\n\n## Motor Control Applications\n\nDedicated motor control MCUs:\n\n- HC32M423: Integrated gate drivers for BLDC/PMSM\n- HC32F460: High-performance FOC control\n\n## Selection Checklist\n\n1. Define processing requirements\n2. Determine memory requirements\n3. List required peripherals and interfaces\n4. Specify power consumption constraints\n5. Consider package size and pin count\n6. Evaluate temperature range requirements\n7. Check for automotive qualification needs\n\nContact LiTong's application engineering team for personalized selection assistance.",
      tags: ["MCU Selection", "Product Guide", "Application Note"],
      relatedProducts: ["HC32L196KCTA", "HC32F460KETA", "HC32M423KATA"],
      relatedArticles: ["hdsc-power-optimization", "hdsc-development-tools", "hdsc-motor-control-basics"],
      author: "LiTong Application Engineering",
      date: "2024-01-15",
      readTime: "15 min"
    },
    {
      id: "hdsc-power-optimization",
      title: "Ultra-Low Power Design with HDSC MCUs",
      category: "Application Note",
      summary: "Techniques and best practices for achieving minimum power consumption in battery-powered applications using HDSC HC32L series.",
      content: "This application note provides detailed guidance on optimizing power consumption for battery-powered applications using HDSC HC32L series ultra-low power MCUs.\n\n## Understanding Power Modes\n\nThe HC32L series offers multiple power modes to balance functionality with power consumption:\n\n### Active Mode\n- CPU running at full speed\n- All peripherals available\n- Current: ~100μA/MHz typical\n\n### Sleep Mode\n- CPU clock stopped\n- Peripherals continue operating\n- Fast wake-up for interrupts\n- Current: ~30μA/MHz\n\n### Deep Sleep Mode\n- Main clock stopped\n- LPO running, RTC active\n- RAM retained\n- Current: 0.5μA with RTC\n\n### Shutdown Mode\n- All clocks stopped\n- Only wakeup pin active\n- Current: 0.15μA\n\n## Power Optimization Techniques\n\n### 1. Clock Gating\nDisable clocks to unused peripherals to save power.\n\n### 2. GPIO Configuration\nUnused pins should be configured to minimize leakage.\n\n### 3. Peripheral Management\n- Disable ADC between conversions\n- Use DMA instead of CPU polling\n- Lower UART baud rate when possible\n\n### 4. Efficient Wake-up Strategy\n- Use RTC for periodic wake-up\n- Configure appropriate wake-up sources\n- Minimize time in active mode\n\n## Measuring Power Consumption\n\nAccurate measurement requires:\n1. Use high-precision multimeter\n2. Measure current in series\n3. Account for regulator efficiency\n4. Consider temperature effects\n\nLiTong provides a power calculator tool.",
      tags: ["Low Power", "Power Optimization", "Battery Life", "Application Note"],
      relatedProducts: ["HC32L196KCTA", "HC32L176JATA", "HC32L136K8TA"],
      relatedArticles: ["hdsc-mcu-selection-guide", "hdsc-development-tools", "hdsc-iot-design"],
      author: "LiTong Power Applications Team",
      date: "2024-02-10",
      readTime: "20 min"
    },
    {
      id: "hdsc-motor-control-basics",
      title: "Motor Control Fundamentals with HDSC MCUs",
      category: "Technical Guide",
      summary: "Introduction to motor control concepts and implementation using HDSC motor control MCUs and libraries.",
      content: "This technical guide introduces motor control fundamentals and implementation using HDSC motor control MCUs.\n\n## Motor Types Overview\n\n### Brushless DC (BLDC) Motors\n- Trapezoidal back-EMF\n- 6-step commutation\n- Simple control algorithm\n- Good for high-speed applications\n\n### Permanent Magnet Synchronous Motors (PMSM)\n- Sinusoidal back-EMF\n- Field Oriented Control (FOC)\n- Higher efficiency\n- Better for variable speed/torque\n\n## Control Algorithms\n\n### Trapezoidal Commutation\nSimplest BLDC control method with six switching states per cycle.\n\n### Field Oriented Control (FOC)\nAdvanced control for PMSM with independent torque and flux control.\n\n## HDSC Motor Control Features\n\n### Hardware Features\n- High-resolution PWM (1ns resolution)\n- Integrated gate drivers\n- Advanced timers with fault protection\n- Fast ADC for current sensing\n\n### Software Libraries\nHDSC provides comprehensive motor control libraries:\n- Sensorless FOC for PMSM\n- Trapezoidal control for BLDC\n- Parameter identification tools\n- Auto-tuning utilities\n\n## Implementation Steps\n\n1. Hardware Setup\n2. Parameter Identification\n3. Control Loop Tuning\n4. Testing and Validation\n\nLiTong's Motor Control Workbench tool automates parameter identification.",
      tags: ["Motor Control", "FOC", "BLDC", "Technical Guide"],
      relatedProducts: ["HC32F460KETA", "HC32M423KATA", "HC32F4A0RITB"],
      relatedArticles: ["hdsc-mcu-selection-guide", "hdsc-development-tools", "hdsc-power-optimization"],
      author: "LiTong Motor Control Team",
      date: "2024-03-05",
      readTime: "25 min"
    },
    {
      id: "hdsc-development-tools",
      title: "HDSC Development Tools and Software",
      category: "Tools & Software",
      summary: "Overview of HDSC development ecosystem including IDEs, debuggers, libraries, and evaluation boards.",
      content: "HDSC provides a comprehensive development ecosystem to accelerate your design.\n\n## Integrated Development Environments\n\n### IAR Embedded Workbench\n- Industry-standard compiler\n- Excellent optimization\n- Full HDSC device support\n\n### Keil MDK\n- ARM compiler\n- Free version up to 32KB\n\n### HDSC Studio\n- Free Eclipse-based IDE\n- GCC toolchain\n\n## Debug Tools\n\n### HDSC-Link\n- Low-cost debugger/programmer\n- SWD interface\n\n### Third-party Debuggers\n- J-Link, ULINK supported\n\n## Software Libraries\n\n### HDSC SPL and HAL\n- Register-level and high-level APIs\n- Example projects included\n\n### Motor Control Library\n- FOC and trapezoidal control\n- Auto-tuning features\n\n## Evaluation Boards\n\n### HC32L196-EVAL\n- Full-featured evaluation\n- LCD display\n\n### HC32F460-EVAL\n- High-performance evaluation\n- Ethernet and motor headers\n\nLiTong provides technical support for tool setup.",
      tags: ["Development Tools", "IDE", "Debugger", "Software"],
      relatedProducts: ["HC32L196KCTA", "HC32F460KETA"],
      relatedArticles: ["hdsc-mcu-selection-guide", "hdsc-power-optimization", "hdsc-motor-control-basics"],
      author: "LiTong Technical Support",
      date: "2024-01-20",
      readTime: "12 min"
    },
    {
      id: "hdsc-iot-design",
      title: "IoT Device Design with HDSC Ultra-Low Power MCUs",
      category: "Application Note",
      summary: "Complete guide to designing battery-powered IoT devices using HDSC HC32L series MCUs.",
      content: "This application note provides a comprehensive guide to designing battery-powered IoT devices.\n\n## System Architecture\n\nA typical IoT device consists of:\n- MCU (HDSC HC32L series)\n- Wireless connectivity\n- Sensors\n- Power management\n- Battery\n\n## Power Budget Analysis\n\nCalculate total power consumption:\n- MCU power in active and sleep modes\n- Wireless module TX/RX current\n- Sensor active and sleep current\n\n## Design Guidelines\n\n### 1. Power Supply Design\nUse high-efficiency LDO or DC-DC converter.\n\n### 2. Clock Management\nUse low-frequency clock for RTC.\n\n### 3. Communication Optimization\nBatch data transmission.\n\n### 4. Sensor Management\nPower down between measurements.\n\n## Example: Smart Temperature Sensor\n\nSpecifications:\n- Measurement every 10 minutes\n- BLE transmission\n- Target: 5 years on CR2032\n\nLiTong provides reference designs and power calculator tools.",
      tags: ["IoT Design", "Low Power", "Wireless", "Application Note"],
      relatedProducts: ["HC32L196KCTA", "HC32L136K8TA", "HC32L110C6UA"],
      relatedArticles: ["hdsc-power-optimization", "hdsc-mcu-selection-guide", "hdsc-development-tools"],
      author: "LiTong IoT Applications Team",
      date: "2024-02-28",
      readTime: "18 min"
    },
    {
      id: "hdsc-faq",
      title: "HDSC MCU Frequently Asked Questions",
      category: "FAQ",
      summary: "Common questions and answers about HDSC MCUs, tools, and support.",
      content: "## General Questions\n\nQ: What is HDSC?\nA: HDSC is a leading Chinese MCU manufacturer offering ARM Cortex-M based microcontrollers.\n\nQ: Where can I buy HDSC MCUs?\nA: LiTong is an authorized distributor of HDSC products.\n\nQ: Are HDSC MCUs compatible with other ARM MCUs?\nA: Yes, they use standard ARM Cortex-M cores.\n\n## Technical Questions\n\nQ: What debug interfaces are supported?\nA: SWD (Serial Wire Debug) interface.\n\nQ: What is the maximum clock speed?\nA: HC32L: 48MHz, HC32F460: 200MHz, HC32F4A0: 240MHz\n\n## Power Questions\n\nQ: What is the lowest power mode current?\nA: Deep sleep: 0.5μA, Shutdown: 0.15μA\n\nQ: Can I use a coin cell battery?\nA: Yes, HDSC ultra-low power MCUs are ideal for coin cell applications.\n\n## Support Questions\n\nQ: Where can I get technical support?\nA: LiTong provides local technical support for HDSC products.",
      tags: ["FAQ", "General Questions", "Technical Support"],
      relatedProducts: ["HC32L196KCTA", "HC32F460KETA", "HC32M423KATA"],
      relatedArticles: ["hdsc-mcu-selection-guide", "hdsc-development-tools", "hdsc-power-optimization"],
      author: "LiTong Technical Support",
      date: "2024-01-10",
      readTime: "10 min"
    }
  ]
};

const supportPath = path.join(dataDir, 'support.json');
fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
console.log('✅ Fixed support.json');

console.log('\n✅ All HDSC data files fixed!');
