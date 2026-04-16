#!/usr/bin/env node
/**
 * Add remaining ChipON product categories (Motor Control ICs and Industrial MCUs)
 */

const fs = require('fs');
const path = require('path');

const brand = 'chipon';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 3: Motor Control ICs
const motorControlCategory = {
  "id": "motor-control-ics",
  "name": "Motor Control ICs",
  "slug": "motor-control-ics",
  "description": "Integrated motor driver solutions for DC motors, stepper motors, and brushless DC motors in automotive and industrial applications.",
  "longDescription": "ChipON motor control ICs provide comprehensive solutions for various motor types including brushed DC motors, stepper motors, and brushless DC (BLDC) motors. These drivers integrate power MOSFETs, gate drivers, and control logic to simplify motor drive designs. The product range covers motor voltages from 2.5V to 60V and currents from 0.5A to 10A, suitable for automotive body electronics, industrial automation, and consumer applications. Key features include integrated current sensing, over-current protection, thermal protection, and various control interfaces. As an authorized ChipON distributor, LiTong provides comprehensive motor control design support including control algorithm development, PCB layout guidance, and system integration assistance.",
  "parameters": ["Motor Voltage", "Peak Current", "Control Interface", "Package"],
  "series": [
    {
      "name": "KF70 Series",
      "description": "H-bridge motor drivers for brushed DC motor control",
      "applications": ["Mirror adjustment", "Seat control", "HVAC dampers"]
    },
    {
      "name": "KF80 Series",
      "description": "Stepper motor drivers with microstepping capability",
      "applications": ["Instrumentation", "HVAC control", "Industrial positioning"]
    }
  ],
  "selectionGuide": "Motor Control IC Selection Guide",
  "selectionGuideLink": "/chipon/support/motor-control-selection-guide.html",
  "faqs": [
    {
      "question": "How do I select the right motor driver for my application?",
      "answer": "Motor driver selection depends on motor type, voltage, current, and control requirements. For DC motors, use H-bridge drivers for bidirectional control. For stepper motors, use dedicated stepper drivers with microstepping. For BLDC motors, use three-phase bridge drivers with commutation control. Select driver with voltage rating above motor voltage and current rating above motor stall current. Consider protection features, control interface, and package size for your specific application.",
      "decisionGuide": "Contact LiTong with your motor specifications for personalized driver recommendations.",
      "keywords": ["motor driver selection", "H-bridge", "stepper driver"]
    },
    {
      "question": "What is the difference between integrated and discrete motor drivers?",
      "answer": "Integrated motor drivers combine power MOSFETs, gate drivers, and protection circuits in a single IC, offering simplified design and smaller footprint. Discrete solutions using separate MOSFETs and drivers offer higher current capability and more flexibility. Integrated drivers are preferred for most applications under 10A. Discrete solutions are used for high-power applications above 10A. ChipON offers integrated solutions for automotive and industrial applications up to 10A.",
      "decisionGuide": "Use integrated drivers for applications under 10A. Contact LiTong for high-power discrete solutions.",
      "keywords": ["integrated driver", "discrete driver", "motor control"]
    },
    {
      "question": "How do I protect motor drivers from over-current conditions?",
      "answer": "Motor driver over-current protection strategies include integrated current limiting, external current sensing with comparators, software protection through ADC monitoring, and stall detection algorithms. Motor stall conditions can draw 5-10x normal current and must be protected against. The KF70 and KF80 series include built-in over-current protection with adjustable thresholds. Proper current limiting extends motor and driver life while preventing damage during fault conditions.",
      "decisionGuide": "Use built-in protection features and add external sensing for critical applications. Contact LiTong for protection design guidance.",
      "keywords": ["over-current protection", "current limiting", "stall protection"]
    },
    {
      "question": "What thermal considerations are important for motor drivers?",
      "answer": "Motor driver thermal design must account for power dissipation calculated as P = I² × Rds(on) for conduction losses plus switching losses. Junction temperature is calculated as Tj = Ta + (P × Rthja). Keep Tj below maximum rating (typically 125°C or 150°C). Motor drivers often operate with high peak currents during startup, so thermal design must account for worst-case conditions. Use adequate copper area for heat spreading and consider thermal vias for improved heat dissipation.",
      "decisionGuide": "Calculate thermal performance for worst-case conditions. Contact LiTong for thermal design support.",
      "keywords": ["thermal design", "power dissipation", "heat sinking"]
    },
    {
      "question": "How do I reduce EMI in motor drive applications?",
      "answer": "Motor drive EMI reduction techniques include using appropriate PWM frequency (above audible range but considering EMI filters), slew rate control to reduce switching noise, snubber circuits across motor terminals, and proper PCB layout minimizing high-current loop areas. Motors generate significant electrical noise due to commutation and PWM switching. Proper filtering and layout are essential for EMI compliance in automotive applications.",
      "decisionGuide": "Implement slew rate control and filtering for EMI-sensitive applications. Contact LiTong for EMI design support.",
      "keywords": ["EMI reduction", "slew rate control", "motor filtering"]
    }
  ],
  "products": [
    {
      "partNumber": "KF7020",
      "name": "Dual H-Bridge Motor Driver",
      "shortDescription": "AEC-Q100 qualified dual H-bridge driver with 3A peak current for DC motors and stepper motors",
      "descriptionParagraphs": [
        "The KF7020 is a dual H-bridge motor driver capable of driving two DC motors or one stepper motor. It features AEC-Q100 qualification for automotive applications with integrated power MOSFETs and protection features.",
        "This driver supports motor supply voltages from 2.5V to 14V with 3A peak current per bridge. The low Rds(on) of 200mΩ ensures efficient operation with minimal heat generation.",
        "Built-in protection features include over-current protection, thermal shutdown, and under-voltage lockout. The KF7020 is suitable for mirror adjustment, seat control, and HVAC damper applications."
      ],
      "specifications": {
        "Motor Supply Voltage": "2.5V-14V",
        "Logic Supply Voltage": "2.5V-5.5V",
        "Peak Current": "3A per bridge",
        "Continuous Current": "1.5A per bridge",
        "Rds(on)": "200mΩ (typ)",
        "Control Interface": "Logic/PWM",
        "Temperature Range": "-40°C to +125°C",
        "Package": "HTSSOP-24"
      },
      "features": [
        "AEC-Q100 qualified",
        "Dual H-bridge configuration",
        "Low Rds(on) integrated MOSFETs",
        "3A peak current capability",
        "Current regulation and limiting",
        "Thermal shutdown protection"
      ],
      "applications": [
        "Mirror adjustment",
        "Seat control modules",
        "HVAC dampers",
        "Window lift",
        "Sunroof control"
      ],
      "faeReview": {
        "author": "Alex Zhou",
        "title": "Senior FAE - Motor Control",
        "content": "The KF7020 is a versatile dual H-bridge driver suitable for a wide range of automotive motor applications. The integrated MOSFETs with 200mΩ Rds(on) provide good efficiency for battery-powered applications. In my experience, this driver works well for mirror adjustment, seat control, and HVAC applications. The 3A peak current capability handles motor startup and stall conditions adequately. I appreciate the simple control interface - just logic inputs for direction and PWM for speed control. The current regulation feature is useful for limiting stall current and protecting the motor. For applications requiring higher current, consider the KF7030 which offers 5A capability.",
        "highlight": "Versatile dual H-bridge driver ideal for automotive body electronics motors"
      },
      "alternativeParts": [
        {
          "partNumber": "KF7030",
          "brand": "ChipON",
          "specifications": {
            "motorVoltage": "2.5V-14V",
            "peakCurrent": "5A per bridge",
            "continuousCurrent": "2.5A per bridge",
            "rdsOn": "150mΩ"
          },
          "comparison": {
            "motorVoltage": "2.5V-14V = 2.5V-14V (same)",
            "peakCurrent": "5A > 3A (+67% higher current)",
            "continuousCurrent": "2.5A > 1.5A (+67% higher)",
            "rdsOn": "150mΩ < 200mΩ (lower resistance)",
            "package": "HTSSOP-24 = HTSSOP-24 (same)"
          },
          "reason": "Higher current capability for larger motors",
          "useCase": "Seat control and window lift applications",
          "link": "#"
        },
        {
          "partNumber": "DRV8842",
          "brand": "Texas Instruments",
          "specifications": {
            "motorVoltage": "8V-45V",
            "peakCurrent": "5A per bridge",
            "continuousCurrent": "2.5A per bridge",
            "rdsOn": "250mΩ"
          },
          "comparison": {
            "motorVoltage": "8V-45V > 2.5V-14V (wider range)",
            "peakCurrent": "5A > 3A (+67% higher)",
            "continuousCurrent": "2.5A > 1.5A (+67% higher)",
            "rdsOn": "250mΩ > 200mΩ (higher resistance)",
            "price": "Higher cost"
          },
          "reason": "Alternative with higher voltage range for industrial applications",
          "useCase": "Industrial motor control applications",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Current Sense Resistor",
          "link": "#",
          "description": "Low-value sense resistor for current monitoring",
          "category": "Passive Components"
        },
        {
          "partNumber": "Decoupling Capacitors",
          "link": "#",
          "description": "Ceramic capacitors for power supply decoupling",
          "category": "Passive Components"
        },
        {
          "partNumber": "Motor Protection Diodes",
          "link": "#",
          "description": "Schottky diodes for back-EMF protection",
          "category": "Protection"
        }
      ],
      "faqs": [
        {
          "question": "What is the difference between peak and continuous current ratings?",
          "answer": "Peak current rating is the maximum current the driver can handle for short durations (typically milliseconds), while continuous current rating is the sustained current under normal operating conditions. The KF7020 is rated for 3A peak and 1.5A continuous per bridge. Peak current capability is important for motor startup (inrush current can be 3-5x running current) and stall conditions. Continuous rating determines the maximum normal operating current. Always design for continuous rating with thermal margin, using peak rating only for transient conditions.",
          "decisionGuide": "Design for continuous current rating. Use peak rating for startup and transient conditions only.",
          "keywords": ["peak current", "continuous current", "current rating"]
        },
        {
          "question": "How do I control motor speed with KF7020?",
          "answer": "Motor speed control with KF7020 uses PWM (Pulse Width Modulation). Set direction inputs (IN1, IN2) for forward or reverse rotation, then apply PWM signal to enable input for speed control. PWM frequency typically ranges from 1-20kHz (above audible range). Duty cycle determines speed - 0% stopped, 100% full speed. The KF7020 internal drivers handle the PWM switching of the H-bridge. Ensure PWM frequency is not too high to avoid excessive switching losses while maintaining smooth motor operation.",
          "decisionGuide": "Use 10-20kHz PWM frequency for speed control. Contact LiTong for motor control design guidance.",
          "keywords": ["PWM control", "speed control", "motor speed"]
        },
        {
          "question": "What is back-EMF and how do I protect against it?",
          "answer": "Back-EMF (electromotive force) is voltage generated by the motor when it acts as a generator during deceleration or when power is removed. The back-EMF can exceed supply voltage and damage the driver. Protection methods include internal diodes (most drivers have body diodes that conduct back-EMF), external Schottky diodes across motor terminals, TVS diodes to clamp voltage spikes, and capacitors to absorb energy from small motors. The KF7020 has internal protection, but external Schottky diodes are recommended for large motors or harsh conditions.",
          "decisionGuide": "Add external Schottky diodes for large motors or critical applications. Contact LiTong for protection design guidance.",
          "keywords": ["back-EMF", "protection diodes", "motor braking"]
        },
        {
          "question": "Can KF7020 drive stepper motors?",
          "answer": "Yes, the KF7020 can drive bipolar stepper motors using both H-bridges. Connect one bridge to each phase of the stepper motor. Control requires proper sequencing of the four inputs to create rotating magnetic field. For full-step operation, use the sequence: AB-AB'-A'B'-A'B. For half-step, interleave with single-phase steps. However, dedicated stepper drivers like KF8020 offer better microstepping performance and current control for precision applications.",
          "decisionGuide": "Use KF7020 for basic stepper control. For precision applications, consider KF8020 stepper driver. Contact LiTong for stepper motor solutions.",
          "keywords": ["stepper motor", "bipolar stepper", "microstepping"]
        },
        {
          "question": "How do I calculate power dissipation in motor drivers?",
          "answer": "Motor driver power dissipation calculation: P = I² × Rds(on) × 2 (for two conducting MOSFETs in H-bridge). For example, with 1A motor current and 200mΩ Rds(on): P = 1² × 0.2 × 2 = 0.4W. Add switching losses if PWM is used. Calculate junction temperature: Tj = Ta + (P × Rthja). Ensure Tj stays below maximum rating (typically 125°C or 150°C). For high-current or high-temperature applications, consider thermal management or higher-current drivers.",
          "decisionGuide": "Calculate thermal performance for your operating conditions. Contact LiTong for thermal design support.",
          "keywords": ["power dissipation", "thermal calculation", "Rds(on)"]
        }
      ]
    }
  ]
};

products.categories.push(motorControlCategory);

// Category 4: Industrial MCUs
const industrialMCUsCategory = {
  "id": "industrial-mcus",
  "name": "Industrial MCUs",
  "slug": "industrial-mcus",
  "description": "High-performance industrial-grade microcontrollers for automation, control systems, and IoT applications with enhanced reliability.",
  "longDescription": "ChipON industrial MCUs provide reliable solutions for industrial automation, process control, and IoT applications. These microcontrollers feature enhanced reliability with wide operating temperature ranges, robust EMC performance, and comprehensive peripheral sets. The portfolio includes 8-bit MCUs for simple control applications and 32-bit MCUs for complex processing and connectivity. Key features include multiple communication interfaces (UART, SPI, I2C, CAN), high-resolution ADCs, and advanced timers for motor control and power conversion. As an authorized ChipON distributor, LiTong provides complete technical support including industrial system design, communication protocol implementation, and application troubleshooting.",
  "parameters": ["Core", "Flash", "RAM", "Temperature Range", "Package"],
  "series": [
    {
      "name": "KF10 Series",
      "description": "8-bit industrial MCUs for cost-effective control applications",
      "applications": ["Sensor interfaces", "Relay control", "Simple automation"]
    },
    {
      "name": "KF30 Series",
      "description": "32-bit industrial MCUs for complex automation and IoT",
      "applications": ["PLC controllers", "IoT gateways", "Motion control"]
    }
  ],
  "selectionGuide": "Industrial MCU Selection Guide",
  "selectionGuideLink": "/chipon/support/industrial-mcu-selection-guide.html",
  "faqs": [
    {
      "question": "How do I select the right industrial MCU for my application?",
      "answer": "Selecting the right industrial MCU requires considering processing requirements, communication needs, environmental conditions, and reliability requirements. For simple control applications, 8-bit MCUs offer cost-effective solutions. For complex automation requiring networking and data processing, 32-bit MCUs provide better performance. Consider operating temperature range, EMC requirements, and communication interfaces needed for your specific industrial environment.",
      "decisionGuide": "Contact LiTong with your industrial application requirements for personalized MCU recommendations.",
      "keywords": ["industrial MCU selection", "automation control", "selection guide"]
    },
    {
      "question": "What communication protocols are supported by ChipON industrial MCUs?",
      "answer": "ChipON industrial MCUs support comprehensive communication protocols including UART/USART for serial communication, SPI for high-speed peripheral connection, I2C for sensor interfacing, and CAN for industrial networking. Advanced 32-bit MCUs may also support Ethernet, USB, and wireless interfaces for IoT applications. These interfaces enable seamless integration with industrial networks, sensors, and actuators.",
      "decisionGuide": "Select MCU based on required communication protocols. Contact LiTong for protocol implementation support.",
      "keywords": ["communication protocols", "industrial networking", "IoT connectivity"]
    },
    {
      "question": "What is the difference between commercial and industrial temperature ranges?",
      "answer": "Commercial temperature range is typically 0°C to +70°C, while industrial range is -40°C to +85°C or -40°C to +105°C. Industrial MCUs are designed and tested for harsh environments including temperature extremes, humidity, vibration, and electrical noise. ChipON industrial MCUs undergo additional screening and qualification to ensure reliable operation in industrial environments. The wider temperature range and enhanced reliability make industrial MCUs suitable for factory automation and outdoor applications.",
      "decisionGuide": "For industrial environments, select industrial temperature range MCUs. Contact LiTong for environmental qualification guidance.",
      "keywords": ["temperature range", "industrial grade", "environmental qualification"]
    },
    {
      "question": "How do I ensure EMC compliance with ChipON industrial MCUs?",
      "answer": "EMC compliance for industrial MCUs involves proper PCB layout with good grounding, decoupling capacitors near power pins, minimized loop areas for high-speed signals, and appropriate shielding for sensitive circuits. ChipON industrial MCUs feature robust EMC design with integrated filters and protection. Follow manufacturer layout guidelines and consider pre-compliance testing during design development. LiTong can provide EMC design review and troubleshooting support.",
      "decisionGuide": "Follow EMC design guidelines and consider pre-compliance testing. Contact LiTong for EMC design support.",
      "keywords": ["EMC compliance", "PCB layout", "electromagnetic compatibility"]
    },
    {
      "question": "What development tools are available for ChipON industrial MCUs?",
      "answer": "ChipON provides comprehensive development tools for industrial MCUs including integrated development environments (IDE), compilers, debuggers, and in-circuit emulators. Software libraries include peripheral drivers, communication protocol stacks (Modbus, CANopen), and real-time operating system (RTOS) support. Evaluation boards with industrial interfaces are available for hardware development. LiTong provides development tool training and technical support for industrial application development.",
      "decisionGuide": "Contact LiTong for development tools, evaluation kits, and software development support.",
      "keywords": ["development tools", "IDE", "industrial software"]
    }
  ],
  "products": [
    {
      "partNumber": "KF3020",
      "name": "32-bit Industrial MCU",
      "shortDescription": "High-performance 32-bit ARM Cortex-M3 MCU with 128KB Flash and Ethernet for industrial automation",
      "descriptionParagraphs": [
        "The KF3020 is a high-performance 32-bit industrial microcontroller based on ARM Cortex-M3 core. It features enhanced reliability with wide operating temperature range and robust EMC performance for industrial environments.",
        "This MCU includes 128KB Flash memory, 16KB RAM, and comprehensive peripherals including Ethernet MAC, dual CAN interfaces, and USB. The high-resolution 12-bit ADC and advanced timers support industrial control applications.",
        "Industrial features include watchdog timer, brown-out detection, and clock monitoring. The KF3020 is suitable for PLC controllers, IoT gateways, and motion control systems."
      ],
      "specifications": {
        "Core": "ARM Cortex-M3",
        "Flash": "128KB",
        "RAM": "16KB",
        "Operating Voltage": "3.3V",
        "Temperature Range": "-40°C to +85°C (Industrial)",
        "Package": "LQFP-64"
      },
      "features": [
        "ARM Cortex-M3 core at 72MHz",
        "Ethernet MAC with MII/RMII",
        "Dual CAN 2.0B interfaces",
        "USB 2.0 full-speed",
        "12-bit ADC with 16 channels",
        "Advanced motor control timers"
      ],
      "applications": [
        "PLC controllers",
        "IoT gateways",
        "Motion control systems",
        "Industrial networking",
        "Process control"
      ],
      "faeReview": {
        "author": "Robert Li",
        "title": "Principal FAE - Industrial Systems",
        "content": "The KF3020 is an excellent choice for industrial automation applications requiring networking capabilities. The integrated Ethernet MAC simplifies industrial networking implementation, while the dual CAN interfaces support fieldbus communication. In my experience with industrial control projects, this MCU provides good performance for PLC-type applications. The ARM Cortex-M3 core offers a good balance of performance and power consumption. I particularly appreciate the comprehensive peripheral set which reduces the need for external components. The industrial temperature range and EMC performance ensure reliable operation in factory environments.",
        "highlight": "Feature-rich industrial MCU with Ethernet and dual CAN for automation"
      },
      "alternativeParts": [
        {
          "partNumber": "KF3040",
          "brand": "ChipON",
          "specifications": {
            "core": "ARM Cortex-M4",
            "flash": "256KB",
            "ram": "32KB",
            "temperature": "-40°C to +85°C"
          },
          "comparison": {
            "core": "ARM Cortex-M4 > ARM Cortex-M3 (with FPU)",
            "flash": "256KB > 128KB (+100% more memory)",
            "ram": "32KB > 16KB (+100% more RAM)",
            "temperature": "-40°C to +85°C = -40°C to +85°C (same)",
            "package": "LQFP-64 = LQFP-64 (same)"
          },
          "reason": "Higher performance with Cortex-M4 and more memory",
          "useCase": "Complex industrial control requiring DSP capabilities",
          "link": "#"
        },
        {
          "partNumber": "STM32F107",
          "brand": "STMicroelectronics",
          "specifications": {
            "core": "ARM Cortex-M3",
            "flash": "256KB",
            "ram": "64KB",
            "temperature": "-40°C to +85°C"
          },
          "comparison": {
            "core": "ARM Cortex-M3 = ARM Cortex-M3 (same)",
            "flash": "256KB > 128KB (+100% more memory)",
            "ram": "64KB > 16KB (+300% more RAM)",
            "temperature": "-40°C to +85°C = -40°C to +85°C (same)",
            "price": "Higher cost"
          },
          "reason": "Alternative with larger memory and proven ecosystem",
          "useCase": "Applications requiring extensive memory resources",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Ethernet PHY",
          "link": "#",
          "description": "Physical layer transceiver for Ethernet interface",
          "category": "Interface"
        },
        {
          "partNumber": "CAN Transceiver",
          "link": "#",
          "description": "Differential transceiver for CAN bus",
          "category": "Interface"
        },
        {
          "partNumber": "Industrial I/O Module",
          "link": "#",
          "description": "Isolated digital input/output module",
          "category": "Industrial I/O"
        }
      ],
      "faqs": [
        {
          "question": "What is the processing performance of KF3020?",
          "answer": "The KF3020 features an ARM Cortex-M3 core running at up to 72MHz, providing approximately 90 DMIPS processing performance. This is suitable for industrial control applications, communication protocol handling, and real-time data processing. The Cortex-M3 architecture includes single-cycle multiply and hardware divide instructions for efficient mathematical operations. The NVIC (Nested Vectored Interrupt Controller) supports up to 240 interrupt priorities for responsive real-time control.",
          "decisionGuide": "For higher processing requirements, consider KF3040 with Cortex-M4. Contact LiTong for performance analysis.",
          "keywords": ["processing performance", "Cortex-M3", "DMIPS"]
        },
        {
          "question": "How do I implement Ethernet communication with KF3020?",
          "answer": "The KF3020 includes an integrated Ethernet MAC supporting 10/100 Mbps operation with MII and RMII interfaces to external PHY. Implementation requires connecting an external Ethernet PHY chip and configuring the MAC through software. ChipON provides Ethernet driver libraries and TCP/IP stack support. The Ethernet interface enables industrial networking protocols such as Modbus TCP, EtherNet/IP, and Profinet. LiTong can provide reference designs and software examples for Ethernet implementation.",
          "decisionGuide": "Contact LiTong for Ethernet reference designs and protocol stack implementation support.",
          "keywords": ["Ethernet communication", "MAC", "TCP/IP"]
        },
        {
          "question": "What real-time capabilities does KF3020 offer?",
          "answer": "The KF3020 provides excellent real-time capabilities through the ARM Cortex-M3 core with deterministic interrupt response. The NVIC enables interrupt nesting with 16 priority levels. Worst-case interrupt latency is 12 clock cycles (167ns at 72MHz). Advanced timers support PWM generation, input capture, and encoder interface for motor control. The DMA controller enables high-speed data transfers without CPU intervention. These features make the KF3020 suitable for real-time industrial control applications.",
          "decisionGuide": "For hard real-time requirements, analyze interrupt latency for your application. Contact LiTong for real-time design support.",
          "keywords": ["real-time", "interrupt latency", "deterministic"]
        },
        {
          "question": "Can KF3020 support industrial communication protocols?",
          "answer": "Yes, the KF3020 supports various industrial communication protocols through its comprehensive peripheral set. The dual CAN interfaces support CANopen and DeviceNet protocols. The Ethernet MAC enables Modbus TCP, EtherNet/IP, and Profinet. UART interfaces support Modbus RTU and proprietary serial protocols. ChipON provides protocol stack libraries and application examples for common industrial protocols. The processing power of the Cortex-M3 core handles protocol processing efficiently while leaving bandwidth for application tasks.",
          "decisionGuide": "Contact LiTong for industrial protocol stack support and implementation guidance.",
          "keywords": ["industrial protocols", "CANopen", "Modbus"]
        },
        {
          "question": "What is the difference between KF3020 and KF3040?",
          "answer": "The KF3040 is an enhanced version of KF3020 with ARM Cortex-M4 core including FPU and DSP instructions, doubled memory (256KB Flash, 32KB RAM), and additional peripherals. The Cortex-M4 provides approximately 50% higher processing performance than Cortex-M3, with the FPU enabling efficient floating-point calculations. The KF3040 is recommended for applications requiring complex algorithms, digital signal processing, or extensive memory. The KF3020 offers a cost-effective solution for standard industrial control applications.",
          "decisionGuide": "Choose KF3020 for standard applications, KF3040 for complex processing. Contact LiTong for selection guidance.",
          "keywords": ["KF3020 vs KF3040", "Cortex-M3 vs Cortex-M4", "product comparison"]
        }
      ]
    }
  ]
};

products.categories.push(industrialMCUsCategory);

// Save updated file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Added Motor Control ICs category');
console.log('✅ Added Industrial MCUs category');
console.log(`📊 Total categories: ${products.categories.length}`);
console.log('🎉 All product categories created successfully!');
