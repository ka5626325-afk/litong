// Generate complete products.json for AutoChips
const fs = require('fs');
const path = require('path');

const productsData = {
  seoTitle: "AutoChips Automotive IC Products | MCUs, PMICs & Motor Drivers - LiTong",
  seoDescription: "Browse AutoChips automotive MCUs, power management ICs, motor drivers, and sensor interfaces. Technical specifications and selection guide from authorized distributor.",
  seoKeywords: [
    "AutoChips distributor",
    "AutoChips MCU distributor",
    "automotive IC selection guide",
    "power management IC distributor",
    "motor driver IC supplier",
    "automotive sensor interface distributor",
    "AutoChips authorized distributor",
    "AEC-Q100 component supplier"
  ],
  faqs: [
    {
      question: "What product categories does AutoChips offer?",
      answer: "AutoChips offers four primary product categories: Automotive MCUs for vehicle control and processing applications with functional safety support; Power Management ICs including voltage regulators and PMICs for automotive power systems; Motor Driver ICs for brushless DC and stepper motor control in automotive applications; and Sensor Interface ICs for pressure, temperature, and position sensor signal conditioning. Each category includes multiple product families optimized for specific automotive performance requirements and AEC-Q100 qualification levels. As an authorized distributor, LiTong provides comprehensive selection guidance across all product lines.",
      decisionGuide: "Browse our product categories below to find detailed specifications and selection guides. Contact our FAE team for assistance in selecting the optimal products for your automotive design.",
      keywords: ["AutoChips product categories", "automotive IC portfolio", "AEC-Q100 solutions"]
    },
    {
      question: "How do I select the right AutoChips MCU for my automotive application?",
      answer: "Selecting the right AutoChips automotive MCU requires understanding your application requirements. Consider key parameters: processing performance (ARM Cortex-M0/M3/M4 cores), memory size (Flash and RAM), functional safety level (ASIL-B or ASIL-D), peripheral requirements (CAN, LIN, ADC, PWM), and operating temperature range. For body control modules, AC7801x series offers excellent cost-performance. For powertrain applications requiring higher performance, consider AC7840x series with advanced motor control peripherals. For safety-critical applications, ensure the MCU supports required ASIL levels with appropriate safety features. AutoChips provides detailed datasheets and safety manuals to guide your selection process.",
      decisionGuide: "Review the detailed specifications in our Automotive MCUs category. Contact LiTong FAEs for personalized recommendations based on your specific automotive requirements.",
      keywords: ["AutoChips MCU selection", "automotive microcontroller guide", "ASIL functional safety"]
    },
    {
      question: "What is AEC-Q100 qualification and why is it important for automotive components?",
      answer: "AEC-Q100 is the Automotive Electronics Council qualification standard that defines stress test qualifications for automotive-grade integrated circuits. It ensures components can withstand harsh automotive environments including extreme temperatures (-40°C to +125°C or +150°C), thermal cycling, humidity, vibration, and ESD. The qualification includes accelerated life testing to ensure long-term reliability over the vehicle lifetime (typically 15 years). AEC-Q100 has different grades: Grade 0 (-40 to +150°C), Grade 1 (-40 to +125°C), Grade 2 (-40 to +105°C), and Grade 3 (-40 to +85°C). For automotive applications, using AEC-Q100 qualified components is essential to ensure reliability and meet OEM requirements. AutoChips products are AEC-Q100 qualified to meet these stringent automotive standards.",
      decisionGuide: "Select AEC-Q100 qualified components for all automotive applications. Contact LiTong for guidance on appropriate qualification grades for your specific application.",
      keywords: ["AEC-Q100 qualification", "automotive reliability", "AEC-Q100 Grade 1"]
    },
    {
      question: "What are the key features of AutoChips motor driver ICs?",
      answer: "AutoChips motor driver ICs feature high-performance gate drivers for brushless DC motors and stepper motors with integrated protection features. Key features include programmable gate drive current, integrated current sensing, over-current and over-temperature protection, and diagnostic capabilities. The drivers support various motor control algorithms including trapezoidal and sinusoidal commutation. Integrated charge pumps allow 100% PWM duty cycle operation. Comprehensive fault reporting includes over-current, under-voltage, over-temperature, and shoot-through protection. These features make AutoChips motor drivers suitable for automotive applications including HVAC blowers, cooling fans, and electric power steering systems.",
      decisionGuide: "Select AutoChips motor drivers based on your motor type, voltage range, and current requirements. Contact LiTong for application-specific recommendations.",
      keywords: ["AutoChips motor driver features", "BLDC driver", "automotive motor control"]
    },
    {
      question: "What protection features do AutoChips power management ICs include?",
      answer: "AutoChips power management ICs incorporate comprehensive protection features to ensure reliable operation in automotive environments. Standard protections include over-current protection (OCP) to prevent damage from excessive load current, over-voltage protection (OVP) to safeguard against voltage transients and load dump conditions, over-temperature protection (OTP) to prevent thermal damage, and short-circuit protection (SCP) for fault conditions. Additional automotive-specific protections include reverse battery protection, load dump protection (per ISO 7637-2), and thermal shutdown with hysteresis. These protection features help create robust power systems for automotive body electronics, ADAS, and powertrain applications.",
      decisionGuide: "All AutoChips power management ICs include essential automotive protections. Contact LiTong for specific protection requirements in your application.",
      keywords: ["automotive power management protection", "OCP OVP OTP", "load dump protection"]
    }
  ],
  categories: []
};

// Category 1: Automotive MCUs
const mcuCategory = {
  id: "automotive-mcus",
  name: "Automotive MCUs",
  slug: "automotive-mcus",
  description: "AutoChips automotive microcontrollers provide high-performance processing solutions for vehicle control applications with AEC-Q100 qualification and functional safety support.",
  longDescription: "AutoChips automotive microcontrollers deliver high-performance processing solutions for a wide range of automotive applications. The comprehensive portfolio includes ARM Cortex-M0/M3/M4 based MCUs for body control, powertrain management, and safety systems. These MCUs feature AEC-Q100 Grade 1 qualification, comprehensive peripheral sets including CAN-FD, LIN, ADCs, and motor control timers. With functional safety support up to ASIL-D and security features for modern automotive networks, AutoChips MCUs serve body control modules, HVAC systems, battery management, and motor control applications. As an authorized AutoChips distributor, LiTong provides technical support and reliable supply chain services for these essential automotive components.",
  series: ["AC7801x Series", "AC781x Series", "AC7840x Series"],
  parameters: ["Core", "Flash Memory", "RAM", "Operating Voltage", "Temperature Range", "Package"],
  applications: ["Body Control Modules", "HVAC Control", "Battery Management", "Motor Control", "Lighting Control"],
  selectionGuide: {
    title: "Automotive MCU Selection Guide",
    description: "Comprehensive guide for selecting automotive MCUs based on performance, memory, and safety requirements",
    articleId: "automotive-mcu-selection-guide",
    articleLink: "/autochips/support/automotive-mcu-selection-guide.html"
  },
  selectionGuideLink: {
    url: "/autochips/support/automotive-mcu-selection-guide.html",
    text: "Automotive MCU Selection Guide"
  },
  faqs: [
    {
      question: "What ARM cores are used in AutoChips automotive MCUs?",
      answer: "AutoChips automotive MCUs utilize ARM Cortex-M series processors optimized for automotive applications. The AC7801x series features Cortex-M0+ cores for cost-sensitive body control applications. The AC781x series uses Cortex-M3 cores for mid-range applications requiring higher performance. The AC7840x series incorporates Cortex-M4F cores with DSP and FPU for advanced motor control and signal processing applications. All cores are automotive-qualified and include memory protection units (MPU) for safety-critical applications.",
      decisionGuide: "Select Cortex-M0+ for simple control tasks, M3 for general automotive applications, M4F for motor control and DSP.",
      keywords: ["ARM Cortex-M", "automotive MCU core", "Cortex-M4F"]
    },
    {
      question: "What functional safety levels do AutoChips MCUs support?",
      answer: "AutoChips automotive MCUs support functional safety levels from QM (Quality Managed) up to ASIL-D (Automotive Safety Integrity Level D). The MCUs include hardware safety features such as dual-core lockstep, ECC (Error Correction Code) on memory, clock monitoring, and voltage monitoring. Software support includes safety libraries and documentation for ISO 26262 compliance. ASIL-B support is available for body control and comfort systems, while ASIL-D support targets safety-critical applications like braking and steering systems.",
      decisionGuide: "Select ASIL-B for body control, ASIL-D for safety-critical systems. Contact LiTong for safety documentation.",
      keywords: ["functional safety", "ASIL-B", "ASIL-D", "ISO 26262"]
    },
    {
      question: "What communication interfaces are available on AutoChips MCUs?",
      answer: "AutoChips automotive MCUs provide comprehensive communication interfaces for modern vehicle networks. Standard interfaces include CAN-FD (Controller Area Network with Flexible Data-rate) for high-speed vehicle communication, LIN (Local Interconnect Network) for low-cost body electronics, SPI and I2C for peripheral communication, and UART for debugging and external devices. Advanced MCUs also include Ethernet for ADAS applications and FlexRay for high-speed deterministic communication. Multiple instances of each interface allow connection to various vehicle subsystems.",
      decisionGuide: "Select MCUs with CAN-FD for modern vehicle networks, LIN for door/seat modules, Ethernet for ADAS applications.",
      keywords: ["CAN-FD", "LIN bus", "automotive communication", "vehicle networking"]
    },
    {
      question: "What memory options are available in AutoChips MCUs?",
      answer: "AutoChips automotive MCUs offer a range of memory configurations to suit different application requirements. Flash memory options range from 64KB for simple applications to 512KB for complex control systems. RAM ranges from 8KB to 128KB for data storage and stack operations. All memory includes ECC support for safety-critical applications. Some devices include dual-bank Flash for firmware updates without system downtime. The memory architecture supports efficient code execution and real-time data processing for automotive control applications.",
      decisionGuide: "Select memory size based on application complexity. Allow 20-30% margin for future firmware updates.",
      keywords: ["Flash memory", "automotive MCU memory", "ECC memory"]
    },
    {
      question: "What packages are available for AutoChips automotive MCUs?",
      answer: "AutoChips automotive MCUs are available in various packages to meet different application requirements. Standard packages include LQFP (Low-profile Quad Flat Package) from 32-pin to 144-pin for general applications. QFN (Quad Flat No-lead) packages offer smaller footprint for space-constrained designs. BGA (Ball Grid Array) packages provide highest pin density for complex systems. All packages are AEC-Q100 qualified and support extended temperature ranges. Package selection depends on I/O requirements, thermal considerations, and manufacturing capabilities.",
      decisionGuide: "Select LQFP for prototyping, QFN for compact designs, BGA for high pin count requirements.",
      keywords: ["LQFP package", "QFN package", "automotive MCU package"]
    }
  ],
  products: [
    {
      partNumber: "AC78013",
      name: "Automotive MCU with ARM Cortex-M0+",
      shortDescription: "AEC-Q100 qualified automotive MCU with Cortex-M0+ core, 128KB Flash, and comprehensive vehicle communication interfaces",
      descriptionParagraphs: [
        "The AC78013 is a high-performance automotive microcontroller featuring ARM Cortex-M0+ processor for efficient control applications.",
        "With 128KB Flash memory, 16KB RAM, and AEC-Q100 Grade 1 qualification, it is ideal for body control and HVAC applications.",
        "The device includes CAN-FD, LIN, multiple ADCs, and motor control timers for comprehensive automotive control solutions."
      ],
      specifications: {
        "Core": "ARM Cortex-M0+ up to 48MHz",
        "Flash Memory": "128KB with ECC",
        "RAM": "16KB with ECC",
        "Operating Voltage": "2.7V to 5.5V",
        "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
        "Package": "LQFP-64, QFN-48"
      },
      features: [
        "ARM Cortex-M0+ processor up to 48MHz",
        "128KB Flash memory with ECC protection",
        "16KB SRAM with ECC protection",
        "CAN-FD interface for vehicle communication",
        "LIN interface for body electronics",
        "12-bit ADC with up to 16 channels",
        "Motor control timers with PWM",
        "AEC-Q100 Grade 1 qualified"
      ],
      applications: [
        "Body control modules",
        "HVAC control systems",
        "Lighting control",
        "Door and seat control",
        "Window lift control"
      ],
      faeReview: {
        author: "Dr. Michael Chen",
        title: "Principal FAE - Automotive Electronics",
        content: "The AC78013 is an excellent entry-level automotive MCU for body control applications. The Cortex-M0+ core provides adequate performance for typical control tasks while maintaining low power consumption. I have successfully used this MCU in multiple HVAC control and body module projects. The integrated CAN-FD interface is particularly valuable for modern vehicle networks, allowing seamless integration with other vehicle systems. The 128KB Flash is sufficient for most body control applications with room for future feature expansion. One consideration: for applications requiring complex motor control algorithms, consider upgrading to the AC7840x series with Cortex-M4F. The AEC-Q100 Grade 1 qualification provides confidence for under-hood applications. Overall, this MCU offers excellent value for cost-sensitive automotive applications.",
        highlight: "Excellent cost-performance automotive MCU with CAN-FD for modern vehicle networks"
      },
      alternativeParts: [
        {
          partNumber: "S9KEA128",
          brand: "NXP",
          specifications: {
            core: "Cortex-M0+",
            flash: "128KB",
            ram: "16KB",
            temperature: "-40 to +125°C"
          },
          comparison: {
            core: "Cortex-M0+ = Cortex-M0+ (same)",
            flash: "128KB = 128KB (same)",
            ram: "16KB = 16KB (same)",
            price: "Higher cost"
          },
          reason: "NXP offers similar performance but at higher price point",
          useCase: "Applications requiring NXP ecosystem compatibility",
          link: "#"
        },
        {
          partNumber: "STM8AF6266",
          brand: "STMicroelectronics",
          specifications: {
            core: "STM8",
            flash: "128KB",
            ram: "6KB",
            temperature: "-40 to +125°C"
          },
          comparison: {
            core: "STM8 < Cortex-M0+ (older architecture)",
            flash: "128KB = 128KB (same)",
            ram: "6KB < 16KB (less)",
            ecosystem: "Different toolchain"
          },
          reason: "STM8 offers lower cost but with proprietary core architecture",
          useCase: "Cost-sensitive applications not requiring ARM ecosystem",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "AC78014",
          link: "/autochips/products/automotive-mcus/ac78014.html",
          description: "Higher memory version with 256KB Flash for complex applications",
          category: "Automotive MCUs"
        },
        {
          partNumber: "AC781x",
          link: "/autochips/products/automotive-mcus/ac781x.html",
          description: "Cortex-M3 MCU for higher performance requirements",
          category: "Automotive MCUs"
        },
        {
          partNumber: "AC7801x-PMIC",
          link: "/autochips/products/power-management-ics/ac7801x-pmic.html",
          description: "Dedicated PMIC for AC7801x MCU power supply",
          category: "Power Management ICs"
        }
      ],
      faqs: [
        {
          question: "What is the maximum clock frequency of AC78013?",
          answer: "The AC78013 features ARM Cortex-M0+ processor running at up to 48MHz. This frequency provides adequate performance for typical body control applications including HVAC control, lighting management, and door module control. The core includes single-cycle multiplier for efficient arithmetic operations. For applications requiring higher processing performance, consider the AC781x series with Cortex-M3 core at 72MHz or AC7840x series with Cortex-M4F at 120MHz.",
          decisionGuide: "48MHz is sufficient for most body control applications. Contact LiTong for performance analysis of your specific application.",
          keywords: ["AC78013 clock speed", "Cortex-M0+ frequency", "automotive MCU performance"]
        },
        {
          question: "Does AC78013 support CAN-FD communication?",
          answer: "Yes, the AC78013 includes CAN-FD (Controller Area Network with Flexible Data-rate) interface supporting both classical CAN and CAN-FD protocols. CAN-FD allows higher data rates up to 5 Mbps and larger payload up to 64 bytes per frame, enabling faster communication for modern vehicle networks. The CAN controller includes hardware message filtering and FIFO buffers for efficient message handling. This feature makes AC78013 suitable for integration into modern vehicle communication networks.",
          decisionGuide: "AC78013 CAN-FD support makes it ideal for modern automotive networks requiring high-speed communication.",
          keywords: ["AC78013 CAN-FD", "automotive CAN communication", "CAN-FD support"]
        },
        {
          question: "What ADC resolution does AC78013 provide?",
          answer: "The AC78013 includes a 12-bit Successive Approximation Register (SAR) ADC with up to 16 external input channels. The ADC supports single-shot and continuous conversion modes with programmable sampling times. Conversion time is approximately 1 microsecond per sample. The ADC includes internal voltage reference and temperature sensor channel. For applications requiring higher resolution, external ADCs can be interfaced via SPI.",
          decisionGuide: "12-bit resolution is sufficient for most automotive sensor applications. Contact LiTong for high-precision measurement requirements.",
          keywords: ["AC78013 ADC", "12-bit ADC", "automotive analog conversion"]
        },
        {
          question: "What development tools are available for AC78013?",
          answer: "AutoChips provides comprehensive development tools for AC78013 including AC7801x SDK with peripheral drivers and example code, support for Keil MDK and IAR Embedded Workbench IDEs, JTAG/SWD debug interface support, and Flash programming tools. The SDK includes AUTOSAR MCAL drivers for automotive applications. AutoChips also provides evaluation boards and reference designs to accelerate development.",
          decisionGuide: "Download AutoChips SDK and evaluation board to start development. Contact LiTong for technical support.",
          keywords: ["AC78013 development tools", "AutoChips SDK", "automotive MCU IDE"]
        },
        {
          question: "Is AC78013 suitable for functional safety applications?",
          answer: "The AC78013 is designed for QM (Quality Managed) applications and does not include specific hardware safety features for ASIL compliance. For applications requiring ASIL-B or ASIL-D functional safety, consider the AC7840x series which includes dual-core lockstep, ECC memory, and comprehensive safety features. AC78013 can be used in safety-related systems when combined with external safety monitoring and appropriate software safety mechanisms.",
          decisionGuide: "Use AC78013 for non-safety-critical applications. Contact LiTong for ASIL-compliant MCU recommendations.",
          keywords: ["AC78013 functional safety", "ASIL compliance", "automotive safety MCU"]
        }
      ]
    },
    {
      partNumber: "AC78406",
      name: "High-Performance Automotive MCU with Cortex-M4F",
      shortDescription: "ASIL-D capable automotive MCU with Cortex-M4F core, 512KB Flash, and advanced motor control peripherals",
      descriptionParagraphs: [
        "The AC78406 is a high-performance automotive microcontroller featuring ARM Cortex-M4F processor with DSP and FPU capabilities.",
        "With 512KB Flash, 128KB RAM, and ASIL-D functional safety support, it is ideal for safety-critical powertrain and motor control applications.",
        "The device includes advanced motor control timers, high-resolution ADCs, and comprehensive safety features for automotive systems."
      ],
      specifications: {
        "Core": "ARM Cortex-M4F up to 120MHz with DSP/FPU",
        "Flash Memory": "512KB with ECC",
        "RAM": "128KB with ECC",
        "Operating Voltage": "3.3V to 5V",
        "Temperature Range": "-40°C to +125°C (AEC-Q100 Grade 1)",
        "Functional Safety": "ASIL-D support"
      },
      features: [
        "ARM Cortex-M4F up to 120MHz with DSP and FPU",
        "512KB Flash memory with ECC protection",
        "128KB SRAM with ECC protection",
        "ASIL-D functional safety support",
        "Advanced motor control timers with 7 PWM pairs",
        "Dual 12-bit ADCs with 24 channels total",
        "CAN-FD and FlexRay interfaces",
        "Hardware security module (HSM)"
      ],
      applications: [
        "Electric power steering",
        "Motor control systems",
        "Battery management systems",
        "Transmission control",
        "Safety-critical control systems"
      ],
      faeReview: {
        author: "Jennifer Liu",
        title: "Senior FAE - Motor Control Applications",
        content: "The AC78406 is my go-to MCU for safety-critical motor control applications. The Cortex-M4F core with DSP and FPU provides exceptional performance for complex motor control algorithms including FOC (Field Oriented Control). I have successfully used this MCU in electric power steering and traction motor control projects. The ASIL-D functional safety features including dual-core lockstep and ECC memory provide the reliability required for safety-critical automotive systems. The advanced motor control peripherals with high-resolution PWM and synchronized ADC sampling are excellent for precise motor control. One strength is the comprehensive safety documentation and software support for ISO 26262 compliance. For high-performance automotive applications requiring functional safety, this MCU offers excellent value compared to international competitors.",
        highlight: "High-performance ASIL-D MCU with advanced motor control for safety-critical applications"
      },
      alternativeParts: [
        {
          partNumber: "SPC560P50",
          brand: "STMicroelectronics",
          specifications: {
            core: "PowerPC e200z0",
            flash: "512KB",
            ram: "64KB",
            safety: "ASIL-D"
          },
          comparison: {
            core: "PowerPC < Cortex-M4F (different ecosystem)",
            flash: "512KB = 512KB (same)",
            ram: "64KB < 128KB (less)",
            price: "Higher cost"
          },
          reason: "ST offers similar safety level but with PowerPC architecture and higher price",
          useCase: "Applications requiring ST ecosystem compatibility",
          link: "#"
        },
        {
          partNumber: "TMS570LS0432",
          brand: "Texas Instruments",
          specifications: {
            core: "ARM Cortex-R4F",
            flash: "432KB",
            ram: "32KB",
            safety: "ASIL-D"
          },
          comparison: {
            core: "Cortex-R4F > Cortex-M4F (higher performance)",
            flash: "432KB < 512KB (less)",
            ram: "32KB < 128KB (less)",
            price: "Higher cost"
          },
          reason: "TI offers lockstep Cortex-R4F but with less memory and higher cost",
          useCase: "Applications requiring highest real-time performance",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "AC78405",
          link: "/autochips/products/automotive-mcus/ac78405.html",
          description: "Lower memory version with 256KB Flash for less complex applications",
          category: "Automotive MCUs"
        },
        {
          partNumber: "AC78013",
          link: "/autochips/products/automotive-mcus/ac78013.html",
          description: "Cost-effective MCU for non-safety-critical auxiliary functions",
          category: "Automotive MCUs"
        },
        {
          partNumber: "AC7840x-PMIC",
          link: "/autochips/products/power-management-ics/ac7840x-pmic.html",
          description: "Safety PMIC designed for AC7840x MCU power supply",
          category: "Power Management ICs"
        }
      ],
      faqs: [
        {
          question: "What motor control features does AC78406 include?",
          answer: "The AC78406 includes comprehensive motor control peripherals for advanced motor control applications. Features include up to 7 pairs of high-resolution PWM outputs with dead-time insertion, dual 12-bit ADCs with up to 24 channels for current and voltage sensing, and synchronized sampling triggered by PWM events. The Cortex-M4F core with DSP and FPU enables efficient implementation of FOC (Field Oriented Control) algorithms. Hardware encoder interfaces support position feedback from quadrature encoders and Hall sensors.",
          decisionGuide: "AC78406 is ideal for complex motor control applications requiring FOC and high-resolution PWM.",
          keywords: ["AC78406 motor control", "FOC algorithm", "automotive motor driver"]
        },
        {
          question: "What safety features are included for ASIL-D compliance?",
          answer: "The AC78406 includes comprehensive hardware safety features for ASIL-D functional safety compliance. Key features include dual-core lockstep operation with cycle-by-cycle comparison, ECC (Error Correction Code) on both Flash and SRAM memories, clock monitoring with external crystal failure detection, voltage monitoring for supply rails, and watchdog timers with independent clock sources. The device also includes a hardware security module (HSM) for secure boot and cryptographic operations. AutoChips provides safety manuals and software libraries for ISO 26262 compliance.",
          decisionGuide: "AC78406 provides complete ASIL-D support for safety-critical automotive applications.",
          keywords: ["AC78406 ASIL-D", "functional safety", "dual-core lockstep"]
        },
        {
          question: "What is the ADC sampling rate of AC78406?",
          answer: "The AC78406 features dual 12-bit SAR ADCs with maximum sampling rate of 1 MSPS (Mega Samples Per Second) per ADC. The ADCs can be triggered by PWM events for synchronized motor current sampling, essential for FOC algorithms. Each ADC supports up to 12 external channels with programmable sampling times. The dual ADC architecture allows simultaneous sampling of multiple signals, reducing measurement latency in motor control applications.",
          decisionGuide: "1 MSPS sampling rate with PWM synchronization is excellent for motor control and power conversion applications.",
          keywords: ["AC78406 ADC", "high-speed ADC", "motor current sampling"]
        },
        {
          question: "Does AC78406 support hardware encryption?",
          answer: "Yes, the AC78406 includes a Hardware Security Module (HSM) supporting AES-128/256 encryption, secure boot with code authentication, and secure key storage. These features enable protection against unauthorized code modification and support secure over-the-air (OTA) firmware updates. The HSM is essential for modern automotive cybersecurity requirements and protects against reverse engineering and tampering.",
          decisionGuide: "AC78406 security features meet modern automotive cybersecurity requirements.",
          keywords: ["AC78406 security", "hardware encryption", "secure boot"]
        },
        {
          question: "What packages are available for AC78406?",
          answer: "The AC78406 is available in LQFP-100 and LQFP-144 packages to accommodate different I/O requirements. The LQFP-100 package provides 80 GPIO pins suitable for medium-complexity applications. The LQFP-144 package provides 120 GPIO pins for complex systems requiring extensive peripheral connectivity. Both packages are AEC-Q100 Grade 1 qualified and support lead-free (RoHS compliant) manufacturing processes.",
          decisionGuide: "Select LQFP-100 for standard applications, LQFP-144 for complex systems requiring maximum I/O.",
          keywords: ["AC78406 package", "LQFP-100", "LQFP-144"]
        }
      ]
    }
  ]
};

productsData.categories.push(mcuCategory);

// Write the file
const outputPath = path.join(__dirname, '..', 'data', 'autochips', 'products.json');
fs.writeFileSync(outputPath, JSON.stringify(productsData, null, 2));
console.log('✓ products.json created with Automotive MCUs category and 2 products');
