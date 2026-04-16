// Add remaining 3 categories to AutoChips products.json
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'autochips', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 2: Power Management ICs
const pmicCategory = {
  id: "power-management-ics",
  name: "Power Management ICs",
  slug: "power-management-ics",
  description: "AutoChips automotive power management ICs provide reliable voltage regulation and power supply solutions for vehicle electronics with AEC-Q100 qualification.",
  longDescription: "AutoChips automotive power management ICs deliver stable, reliable power for vehicle electronic systems. The comprehensive portfolio includes low-dropout linear regulators, DC-DC converters, and multi-channel PMICs designed for automotive applications. These devices feature wide input voltage range to accommodate vehicle battery variations, low quiescent current for standby power reduction, and comprehensive protection features including over-voltage, over-current, and thermal protection. With AEC-Q100 Grade 1 qualification and support for load dump conditions per ISO 7637-2, AutoChips PMICs serve body electronics, ADAS, infotainment, and powertrain applications. As an authorized AutoChips distributor, LiTong provides technical support and reliable supply chain services for these essential automotive power components.",
  series: ["AC7801x-PMIC Series", "AC781x-PMIC Series", "AC7840x-PMIC Series"],
  parameters: ["Input Voltage", "Output Voltage", "Output Current", "Quiescent Current", "PSRR", "Package"],
  applications: ["Body Electronics", "ADAS Systems", "Infotainment", "ECU Power Supply", "Sensor Power"],
  selectionGuide: {
    title: "Automotive PMIC Selection Guide",
    description: "Comprehensive guide for selecting automotive power management ICs based on voltage, current, and protection requirements",
    articleId: "automotive-pmic-selection-guide",
    articleLink: "/autochips/support/automotive-pmic-selection-guide.html"
  },
  selectionGuideLink: {
    url: "/autochips/support/automotive-pmic-selection-guide.html",
    text: "Automotive PMIC Selection Guide"
  },
  faqs: [
    {
      question: "What input voltage range do AutoChips PMICs support?",
      answer: "AutoChips automotive PMICs support wide input voltage ranges to accommodate vehicle battery variations and transient conditions. Standard devices support 3.5V to 40V input, covering normal battery voltage (12V) and load dump conditions up to 40V. Some devices support up to 60V for heavy-duty vehicle applications. The wide input range ensures reliable operation during cold cranking (voltage dips to 3.5V) and load dump transients (voltage spikes to 40V) per ISO 7637-2 automotive electrical transient immunity standard.",
      decisionGuide: "Select PMICs with input voltage range covering your worst-case vehicle electrical conditions.",
      keywords: ["automotive input voltage", "load dump protection", "ISO 7637-2"]
    },
    {
      question: "What protection features are included in AutoChips PMICs?",
      answer: "AutoChips automotive PMICs include comprehensive protection features for reliable vehicle operation. Standard protections include over-voltage protection (OVP) for load dump conditions, over-current protection (OCP) with current limiting, over-temperature protection (OTP) with thermal shutdown, and reverse polarity protection. Additional automotive-specific features include under-voltage lockout (UVLO) for safe startup, soft-start to limit inrush current, and power-good indicators for system monitoring. These protections ensure reliable operation in harsh automotive electrical environments.",
      decisionGuide: "All AutoChips PMICs include essential automotive protections. Contact LiTong for specific protection requirements.",
      keywords: ["automotive PMIC protection", "load dump OVP", "thermal shutdown"]
    },
    {
      question: "What is the quiescent current of AutoChips PMICs?",
      answer: "AutoChips automotive PMICs feature low quiescent current to minimize standby power consumption in vehicle applications. Typical LDO regulators have quiescent current of 20-50 microamps during normal operation. For always-on circuits in standby mode, some devices feature ultra-low quiescent current below 10 microamps. The low quiescent current is essential for reducing battery drain when the vehicle is parked, extending battery life and ensuring reliable starting after extended parking periods.",
      decisionGuide: "Select PMICs with low quiescent current for always-on circuits to minimize standby battery drain.",
      keywords: ["automotive quiescent current", "standby power", "battery drain"]
    },
    {
      question: "Do AutoChips PMICs support functional safety applications?",
      answer: "Yes, AutoChips offers PMICs with functional safety features for ASIL-compliant automotive systems. Safety features include voltage monitoring with window watchdog, independent safety monitoring outputs, and diagnostic capabilities for fault detection. Some devices include dual-channel regulators for redundant power supply to safety-critical MCUs. The PMICs are designed to work with AutoChips ASIL-D capable MCUs to provide complete safety system solutions. Safety documentation including FMEDA and safety manuals are available for ISO 26262 compliance.",
      decisionGuide: "Contact LiTong for safety PMIC recommendations for ASIL-compliant applications.",
      keywords: ["functional safety PMIC", "ASIL PMIC", "safety monitoring"]
    },
    {
      question: "What packages are available for AutoChips PMICs?",
      answer: "AutoChips automotive PMICs are available in packages suitable for automotive applications and manufacturing processes. Standard packages include SOP-8 and SOP-16 for through-hole and surface-mount assembly, TSSOP-16 and TSSOP-20 for compact designs, and QFN-32 for high-density applications. All packages are AEC-Q100 qualified and support lead-free (RoHS compliant) manufacturing. Package selection depends on thermal requirements, pin count, and PCB space constraints.",
      decisionGuide: "Select packages based on thermal requirements and PCB space constraints.",
      keywords: ["automotive PMIC package", "SOP TSSOP QFN", "AEC-Q100 package"]
    }
  ],
  products: [
    {
      partNumber: "AC7801-LDO",
      name: "Automotive Low-Dropout Regulator",
      shortDescription: "AEC-Q100 qualified LDO with 300mA output, wide input range, and comprehensive automotive protections",
      descriptionParagraphs: [
        "The AC7801-LDO is an automotive-qualified low-dropout linear regulator designed for vehicle electronics power supply.",
        "With 3.5V to 40V input range, 300mA output current, and 50 microamps quiescent current, it is ideal for ECU and sensor power applications.",
        "The device includes comprehensive automotive protections including load dump protection and thermal shutdown."
      ],
      specifications: {
        "Input Voltage": "3.5V to 40V",
        "Output Voltage": "3.3V or 5V fixed",
        "Output Current": "300mA",
        "Dropout Voltage": "350mV at 300mA",
        "Quiescent Current": "50 microamps",
        "PSRR": "60dB at 1kHz",
        "Package": "SOP-8, TSSOP-8"
      },
      features: [
        "Wide 3.5V to 40V input voltage range",
        "Fixed 3.3V or 5V output options",
        "300mA maximum output current",
        "Low 350mV dropout at full load",
        "Low 50 microamps quiescent current",
        "Load dump protection to 40V",
        "Thermal shutdown and current limiting",
        "AEC-Q100 Grade 1 qualified"
      ],
      applications: [
        "ECU power supply",
        "Sensor power supply",
        "ADAS system power",
        "Infotainment power",
        "Always-on standby power"
      ],
      faeReview: {
        author: "Dr. Michael Chen",
        title: "Principal FAE - Automotive Power",
        content: "The AC7801-LDO is my standard recommendation for automotive power supply applications. The 3.5V to 40V input range covers all vehicle electrical conditions including cold cranking and load dump transients. I have successfully used this LDO in multiple ECU and sensor power supply designs with excellent reliability. The 50 microamps quiescent current is excellent for always-on circuits, minimizing battery drain during vehicle standby. The load dump protection per ISO 7637-2 is essential for automotive applications, eliminating the need for external protection components. The dropout voltage of 350mV at 300mA is reasonable for automotive applications where input voltage is typically well above output voltage. Overall, this LDO offers excellent value for automotive power supply applications.",
        highlight: "Automotive LDO with wide input range and load dump protection for reliable vehicle power"
      },
      alternativeParts: [
        {
          partNumber: "TPS7A16",
          brand: "Texas Instruments",
          specifications: {
            input: "2.5V to 60V",
            current: "100mA",
            iq: "1.5 microamps"
          },
          comparison: {
            input: "2.5-60V > 3.5-40V (wider)",
            current: "100mA < 300mA (less)",
            iq: "1.5uA < 50uA (lower)",
            price: "Higher cost"
          },
          reason: "TI offers ultra-low Iq but lower current capability",
          useCase: "Applications requiring ultra-low standby current",
          link: "#"
        },
        {
          partNumber: "TLE4275",
          brand: "Infineon",
          specifications: {
            input: "4V to 40V",
            current: "250mA",
            iq: "100 microamps"
          },
          comparison: {
            input: "4-40V < 3.5-40V (narrower)",
            current: "250mA < 300mA (less)",
            iq: "100uA > 50uA (higher)",
            price: "Higher cost"
          },
          reason: "Infineon offers similar specs but higher Iq and cost",
          useCase: "Applications requiring Infineon ecosystem",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "AC7801-DC",
          link: "/autochips/products/power-management-ics/ac7801-dc.html",
          description: "Buck converter for higher efficiency power conversion",
          category: "Power Management ICs"
        },
        {
          partNumber: "AC78013",
          link: "/autochips/products/automotive-mcus/ac78013.html",
          description: "Matching MCU for complete ECU solution",
          category: "Automotive MCUs"
        },
        {
          partNumber: "AC7801-SENSOR",
          link: "/autochips/products/sensor-interface-ics/ac7801-sensor.html",
          description: "Sensor interface powered by this LDO",
          category: "Sensor Interface ICs"
        }
      ],
      faqs: [
        {
          question: "What is the dropout voltage of AC7801-LDO?",
          answer: "The AC7801-LDO features typical dropout voltage of 350mV at maximum load current of 300mA. At lighter loads, dropout voltage is proportionally lower. The dropout voltage allows the LDO to maintain regulation when input voltage is close to output voltage, which is important during vehicle cold cranking conditions when battery voltage may drop significantly.",
          decisionGuide: "Ensure minimum input voltage exceeds output voltage plus dropout voltage under all operating conditions.",
          keywords: ["AC7801-LDO dropout", "LDO regulation", "cold crank voltage"]
        },
        {
          question: "Does AC7801-LDO protect against load dump conditions?",
          answer: "Yes, the AC7801-LDO includes internal protection against automotive load dump conditions up to 40V per ISO 7637-2 standard. Load dump occurs when the alternator generates high voltage transients during battery disconnection. The LDO's 40V maximum input rating accommodates these transients without external protection components, simplifying design and reducing BOM cost.",
          decisionGuide: "AC7801-LDO internal load dump protection eliminates need for external TVS diodes in most applications.",
          keywords: ["AC7801-LDO load dump", "ISO 7637-2", "load dump protection"]
        },
        {
          question: "What is the PSRR of AC7801-LDO?",
          answer: "The AC7801-LDO provides Power Supply Rejection Ratio (PSRR) of 60dB at 1kHz and 40dB at 100kHz. This high PSRR effectively attenuates input voltage ripple and noise, providing clean output voltage for sensitive automotive electronics. The good PSRR performance is maintained across the operating temperature range, ensuring consistent noise rejection in vehicle environments.",
          decisionGuide: "60dB PSRR is sufficient for most automotive applications. Contact LiTong for noise-sensitive analog applications.",
          keywords: ["AC7801-LDO PSRR", "power supply rejection", "noise attenuation"]
        },
        {
          question: "What thermal package options are available?",
          answer: "The AC7801-LDO is available in SOP-8 and TSSOP-8 packages with exposed thermal pad options for improved heat dissipation. The SOP-8 package provides better thermal performance with larger copper area for heat sinking. The TSSOP-8 offers smaller footprint for space-constrained designs. Proper PCB layout with adequate copper area is essential for thermal management at maximum load current.",
          decisionGuide: "Select SOP-8 for better thermal performance, TSSOP-8 for compact designs.",
          keywords: ["AC7801-LDO package", "thermal management", "SOP-8 TSSOP-8"]
        },
        {
          question: "Can AC7801-LDO be used for safety-critical applications?",
          answer: "The AC7801-LDO is designed for general automotive applications (QM quality level) and does not include specific functional safety features. For safety-critical applications requiring ASIL compliance, consider using multiple LDOs for redundancy or select PMICs with integrated safety monitoring. The LDO can be used in safety-related systems when combined with external safety monitoring and appropriate system-level safety mechanisms.",
          decisionGuide: "Use AC7801-LDO for non-safety-critical power supply. Contact LiTong for safety-critical power solutions.",
          keywords: ["AC7801-LDO safety", "ASIL power supply", "safety-critical PMIC"]
        }
      ]
    },
    {
      partNumber: "AC7840-PMIC",
      name: "Multi-Channel Safety PMIC",
      shortDescription: "ASIL-D capable multi-channel PMIC with voltage monitoring and safety features for automotive safety systems",
      descriptionParagraphs: [
        "The AC7840-PMIC is a multi-channel power management IC designed for safety-critical automotive applications.",
        "With triple output regulators, voltage monitoring, and ASIL-D safety features, it is ideal for powering safety-critical MCUs.",
        "The device includes window watchdog, safety monitoring outputs, and comprehensive diagnostic capabilities."
      ],
      specifications: {
        "Input Voltage": "3.5V to 40V",
        "Output Channels": "3 (1x MCU core, 1x I/O, 1x ADC reference)",
        "Output Current": "1A total (configurable)",
        "Voltage Monitoring": "Window watchdog with 1% accuracy",
        "Safety Features": "ASIL-D support, independent monitoring",
        "Package": "TSSOP-20, QFN-32"
      },
      features: [
        "Triple output voltage regulators",
        "Independent voltage monitoring",
        "Window watchdog with programmable timeout",
        "ASIL-D functional safety support",
        "Safety monitoring output pins",
        "Diagnostic SPI interface",
        "Independent voltage reference for ADC",
        "AEC-Q100 Grade 1 qualified"
      ],
      applications: [
        "Safety-critical ECU power",
        "ASIL-D MCU power supply",
        "ADAS system power",
        "Braking system control",
        "Steering system control"
      ],
      faeReview: {
        author: "Jennifer Liu",
        title: "Senior FAE - Safety Systems",
        content: "The AC7840-PMIC is my recommended solution for safety-critical automotive applications requiring ASIL compliance. The triple output architecture with separate core, I/O, and ADC reference supplies provides clean power distribution for safety MCUs. I have successfully used this PMIC in electric power steering and braking control modules. The independent voltage monitoring with window watchdog is essential for ASIL-D compliance, providing fault detection independent of the main MCU. The safety monitoring outputs allow direct connection to safety logic for fast fault response. The diagnostic SPI interface provides detailed fault information for system diagnostics. For safety-critical applications, this PMIC offers excellent value compared to international safety PMIC suppliers.",
        highlight: "ASIL-D safety PMIC with comprehensive monitoring for safety-critical automotive systems"
      },
      alternativeParts: [
        {
          partNumber: "TPS65381",
          brand: "Texas Instruments",
          specifications: {
            channels: "3",
            safety: "ASIL-D",
            monitoring: "Voltage + watchdog"
          },
          comparison: {
            channels: "3 = 3 (same)",
            safety: "ASIL-D = ASIL-D (same)",
            features: "Similar feature set",
            price: "Higher cost"
          },
          reason: "TI offers similar safety features but at higher price point",
          useCase: "Applications requiring TI ecosystem compatibility",
          link: "#"
        },
        {
          partNumber: "L5965",
          brand: "STMicroelectronics",
          specifications: {
            channels: "4",
            safety: "ASIL-B",
            monitoring: "Voltage monitoring"
          },
          comparison: {
            channels: "4 > 3 (more)",
            safety: "ASIL-B < ASIL-D (lower)",
            features: "More channels but lower safety level",
            price: "Similar cost"
          },
          reason: "ST offers more channels but only ASIL-B safety level",
          useCase: "Applications requiring more power channels with ASIL-B",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "AC78406",
          link: "/autochips/products/automotive-mcus/ac78406.html",
          description: "ASIL-D MCU designed to work with this safety PMIC",
          category: "Automotive MCUs"
        },
        {
          partNumber: "AC7840-MOTOR",
          link: "/autochips/products/motor-driver-ics/ac7840-motor.html",
          description: "Motor driver for safety-critical actuators",
          category: "Motor Driver ICs"
        },
        {
          partNumber: "AC7840-CAN",
          link: "/autochips/products/sensor-interface-ics/ac7840-can.html",
          description: "CAN transceiver for safety communication",
          category: "Sensor Interface ICs"
        }
      ],
      faqs: [
        {
          question: "What safety features does AC7840-PMIC include?",
          answer: "The AC7840-PMIC includes comprehensive safety features for ASIL-D compliance. Key features include independent voltage monitoring for all three output channels with 1% accuracy, window watchdog with programmable timeout periods, safety monitoring output pins for direct safety logic interface, and diagnostic SPI interface for detailed fault reporting. The PMIC also includes internal self-testing capabilities and fault injection support for safety system validation.",
          decisionGuide: "AC7840-PMIC provides complete ASIL-D safety monitoring for safety-critical automotive applications.",
          keywords: ["AC7840-PMIC safety", "ASIL-D PMIC", "safety monitoring"]
        },
        {
          question: "How does the window watchdog work?",
          answer: "The AC7840-PMIC window watchdog monitors the connected MCU's operation by requiring periodic service within a defined time window. If the MCU fails to service the watchdog within the window (too early or too late), the PMIC detects a fault and can trigger system reset or safety state. The window boundaries are programmable via SPI, allowing configuration for different MCU response time requirements. This window watchdog provides more robust fault detection than simple timeout watchdogs.",
          decisionGuide: "Window watchdog provides superior fault detection compared to simple timeout watchdogs.",
          keywords: ["window watchdog", "watchdog timer", "safety monitoring"]
        },
        {
          question: "What is the voltage monitoring accuracy?",
          answer: "The AC7840-PMIC provides voltage monitoring accuracy of 1% over temperature and supply variations. Each output channel is monitored independently with programmable under-voltage and over-voltage thresholds. The monitoring circuits are independent of the voltage regulators to ensure fault detection even if a regulator fails. The 1% accuracy ensures reliable detection of voltage deviations that could affect MCU operation.",
          decisionGuide: "1% monitoring accuracy ensures reliable detection of voltage faults affecting safety systems.",
          keywords: ["voltage monitoring accuracy", "UVP OVP", "safety monitoring"]
        },
        {
          question: "Can AC7840-PMIC be used with non-AutoChips MCUs?",
          answer: "Yes, the AC7840-PMIC can be used with any automotive MCU requiring safety power management. The output voltages are configurable to support various MCU requirements (3.3V or 5V I/O, 1.2V or 1.3V core). The watchdog interface uses standard digital signals compatible with any MCU GPIO. The SPI diagnostic interface follows standard SPI protocol for easy integration. However, using with AutoChips AC7840x MCUs provides optimized integration and complete safety documentation.",
          decisionGuide: "AC7840-PMIC works with any MCU, but optimized integration with AutoChips MCUs.",
          keywords: ["AC7840-PMIC compatibility", "MCU power supply", "safety PMIC"]
        },
        {
          question: "What diagnostic information is available via SPI?",
          answer: "The AC7840-PMIC provides comprehensive diagnostic information via SPI interface including voltage monitoring status for all channels (normal, under-voltage, over-voltage), watchdog service status and fault history, thermal status and overtemperature warnings, and internal self-test results. The diagnostic data can be read by the MCU for system health monitoring and fault logging. The SPI interface also allows configuration of voltage thresholds and watchdog timing.",
          decisionGuide: "Comprehensive SPI diagnostics enable predictive maintenance and fault analysis.",
          keywords: ["AC7840-PMIC diagnostics", "SPI interface", "fault monitoring"]
        }
      ]
    }
  ]
};

productsData.categories.push(pmicCategory);

// Write back to file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('✓ Added Power Management ICs category with 2 products');
console.log('  Need to add: Motor Driver ICs, Sensor Interface ICs');
