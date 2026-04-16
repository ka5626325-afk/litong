#!/usr/bin/env node
/**
 * Add more categories to Eastsoft products.json
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'eastsoft');
const productsPath = path.join(dataDir, 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 2: Microcontrollers
const mcuCategory = {
  "id": "microcontrollers",
  "name": "Microcontrollers",
  "slug": "microcontrollers",
  "description": "Eastsoft microcontrollers provide cost-effective control solutions for consumer electronics, industrial control, and IoT applications.",
  "longDescription": "Eastsoft microcontrollers offer a comprehensive range of 8-bit and 32-bit solutions for diverse embedded control applications. The 8-bit MCU series provides cost-effective control for home appliances, remote controls, and simple industrial applications with low power consumption and rich peripherals. The 32-bit ARM Cortex-M series delivers higher performance for complex applications requiring faster processing, more memory, and advanced features such as motor control and digital signal processing. All Eastsoft MCUs feature competitive pricing, good EMC performance, and reliable operation across industrial temperature ranges. As an authorized Eastsoft distributor, LiTong provides comprehensive selection guidance, technical support, and reliable supply chain services for these essential control components.",
  "series": [
    "ES7 8-bit MCU Series",
    "ES32 ARM Cortex-M0 Series",
    "ES32 ARM Cortex-M3 Series",
    "ES32 ARM Cortex-M4 Series"
  ],
  "parameters": [
    "Core",
    "Flash Memory",
    "RAM",
    "Operating Voltage",
    "GPIO Count",
    "Package"
  ],
  "applications": [
    "Home appliances",
    "Remote controls",
    "Industrial control",
    "Sensor interfaces",
    "Motor control"
  ],
  "selectionGuide": {
    "title": "MCU Selection Guide",
    "description": "Comprehensive guide for selecting microcontrollers based on performance and application requirements",
    "articleId": "mcu-selection-guide",
    "articleLink": "/eastsoft/support/mcu-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/eastsoft/support/mcu-selection-guide.html",
    "text": "MCU Selection Guide"
  },
  "faqs": [
    {
      "question": "What is the difference between Eastsoft 8-bit and 32-bit MCUs?",
      "answer": "Eastsoft 8-bit MCUs (ES7 series) are designed for simple, cost-sensitive applications with basic control requirements. They offer low power consumption, small packages, and competitive pricing starting from $0.30. 32-bit MCUs (ES32 series) provide significantly higher performance with ARM Cortex-M cores, more memory, and advanced peripherals for complex applications. 8-bit MCUs typically run at 8-16MHz with 4-64KB Flash, while 32-bit MCUs run at 48-72MHz with 32-512KB Flash. Select 8-bit for simple control, 32-bit for performance-intensive applications.",
      "decisionGuide": "Select 8-bit for cost-sensitive simple control, 32-bit for complex processing.",
      "keywords": ["8-bit vs 32-bit", "MCU comparison", "microcontroller selection"]
    },
    {
      "question": "What development tools support Eastsoft MCUs?",
      "answer": "Eastsoft MCUs are supported by standard development tools. 8-bit MCUs use Keil C51 compiler and standard 8051 development tools. 32-bit ARM MCUs are supported by Keil MDK, IAR Embedded Workbench, and GCC-based tools. Eastsoft provides device-specific libraries, example code, and debugging tools. In-circuit debugging is supported through standard JTAG/SWD interfaces. LiTong can provide development kits and technical support for Eastsoft MCU development.",
      "decisionGuide": "Standard ARM and 8051 development tools supported.",
      "keywords": ["development tools", "Keil", "IAR", "debugging"]
    },
    {
      "question": "Do Eastsoft MCUs support in-system programming?",
      "answer": "Yes, all Eastsoft MCUs support in-system programming (ISP) allowing firmware updates without removing the chip from the board. ISP is typically done through UART, SPI, or dedicated programming interfaces. Bootloader firmware is pre-programmed in the factory or can be customized. This feature enables field firmware updates and simplifies production programming. Eastsoft provides PC-based programming tools and support for automated production programming.",
      "decisionGuide": "ISP support enables field updates and flexible production programming.",
      "keywords": ["ISP", "in-system programming", "firmware update"]
    },
    {
      "question": "What is the temperature range of Eastsoft MCUs?",
      "answer": "Eastsoft MCUs are available in both commercial grade (0°C to +70°C) and industrial grade (-40°C to +85°C) temperature ranges. Industrial grade parts undergo additional screening and testing to ensure reliable operation in harsh environments. All parts are designed with good EMC performance and noise immunity suitable for industrial applications. Extended temperature range options are available for specific product families.",
      "decisionGuide": "Industrial grade available for harsh environment applications.",
      "keywords": ["temperature range", "industrial grade", "operating conditions"]
    },
    {
      "question": "What peripherals are available in Eastsoft MCUs?",
      "answer": "Eastsoft MCUs include rich peripheral sets including multiple UART, SPI, I2C interfaces; PWM timers for motor control; ADCs for analog sensing; comparators; watchdog timers; and real-time clocks. 32-bit MCUs add advanced peripherals like USB, CAN, Ethernet MAC, and advanced timers. The specific peripheral mix varies by device - consult datasheets for detailed peripheral availability. Most peripherals support multiple operating modes for flexible system design.",
      "decisionGuide": "Rich peripheral set reduces external component requirements.",
      "keywords": ["peripherals", "UART", "SPI", "PWM", "ADC"]
    }
  ],
  "products": [
    {
      "partNumber": "ES7F3268",
      "name": "ES7F3268 8-bit MCU",
      "shortDescription": "High-performance 8-bit microcontroller with 64KB Flash, rich peripherals for consumer and industrial applications",
      "descriptionParagraphs": [
        "The ES7F3268 is a high-performance 8-bit microcontroller based on enhanced 8051 core designed for cost-sensitive control applications.",
        "With 64KB Flash memory, 4KB RAM, and rich peripheral set including multiple UARTs and PWM channels, it addresses diverse application requirements.",
        "The MCU features low power consumption, good EMC performance, and industrial temperature range operation."
      ],
      "specifications": {
        "Core": "Enhanced 8051 @ 16MHz",
        "Flash Memory": "64KB",
        "RAM": "4KB",
        "Operating Voltage": "2.4V - 5.5V",
        "GPIO Count": "40",
        "Package": "LQFP-44"
      },
      "features": [
        "Enhanced 8051 core at 16MHz",
        "64KB Flash program memory",
        "4KB SRAM data memory",
        "4 UART interfaces",
        "3 PWM channels",
        "8-channel 12-bit ADC",
        "2 SPI and 2 I2C interfaces",
        "Industrial temperature range -40°C to +85°C"
      ],
      "applications": [
        "Home appliance control",
        "Remote control systems",
        "Industrial control panels",
        "Sensor interface modules",
        "LED lighting control"
      ],
      "faeReview": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - MCU Applications",
        "content": "The ES7F3268 is an excellent 8-bit MCU for cost-sensitive applications. The 64KB Flash provides ample space for complex applications while maintaining competitive pricing. I have used this MCU in numerous home appliance and industrial control projects with excellent results. The rich peripheral set including 4 UARTs is particularly valuable for applications requiring multiple communication interfaces. The 5V operation simplifies interface with legacy systems. For applications that don't require 32-bit performance, this 8-bit MCU offers excellent value.",
        "highlight": "High-value 8-bit MCU with rich peripherals for cost-sensitive applications"
      },
      "alternativeParts": [
        {
          "partNumber": "STC15W408AS",
          "brand": "STC",
          "specifications": {
            "core": "8051",
            "flash": "8KB",
            "ram": "512B",
            "voltage": "5V"
          },
          "comparison": {
            "flash": "8KB < 64KB (much less)",
            "ram": "512B < 4KB (much less)",
            "peripherals": "Fewer peripherals",
            "price": "Lower cost"
          },
          "reason": "STC offers lower cost for very simple applications",
          "useCase": "Ultra low-cost simple control applications",
          "link": "#"
        },
        {
          "partNumber": "AT89S52",
          "brand": "Microchip",
          "specifications": {
            "core": "8051",
            "flash": "8KB",
            "ram": "256B",
            "voltage": "5V"
          },
          "comparison": {
            "flash": "8KB < 64KB (much less)",
            "ram": "256B < 4KB (much less)",
            "features": "Basic 8051 features",
            "price": "Higher cost"
          },
          "reason": "Microchip offers established brand recognition",
          "useCase": "Applications requiring Microchip brand",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES32F030",
          "link": "/eastsoft/products/microcontrollers/es32f030.html",
          "description": "32-bit ARM upgrade for higher performance",
          "category": "Microcontrollers"
        },
        {
          "partNumber": "ES7F-EVK",
          "link": "/eastsoft/products/microcontrollers/es7f-evk.html",
          "description": "Evaluation kit for ES7F series development",
          "category": "Development Tools"
        },
        {
          "partNumber": "LDO Regulator",
          "link": "#",
          "description": "3.3V/5V LDO for MCU power supply",
          "category": "Power Management"
        }
      ],
      "faqs": [
        {
          "question": "What is the instruction execution speed of ES7F3268?",
          "answer": "The ES7F3268 uses an enhanced 8051 core that executes most instructions in 1-2 clock cycles, providing approximately 8x performance improvement over traditional 12-clock 8051 cores. At 16MHz clock frequency, the MCU achieves high instruction throughput suitable for real-time control applications. The fast execution speed combined with single-cycle multiply/divide instructions enables efficient processing for control algorithms.",
          "decisionGuide": "Enhanced core provides 8x performance vs traditional 8051.",
          "keywords": ["execution speed", "8051 performance", "instruction cycle"]
        },
        {
          "question": "Does ES7F3268 support hardware multiplication?",
          "answer": "Yes, the ES7F3268 includes hardware multiplier and divider units that execute in 1-2 clock cycles, significantly accelerating mathematical operations compared to software implementation. This feature is particularly valuable for control applications requiring PID calculations, sensor linearization, or other mathematical processing. The hardware math units reduce CPU load and improve response time.",
          "decisionGuide": "Hardware math acceleration improves control algorithm performance.",
          "keywords": ["hardware multiplier", "math acceleration", "PID control"]
        },
        {
          "question": "What programming languages are supported?",
          "answer": "The ES7F3268 can be programmed in C/C++ using standard 8051 compilers including Keil C51, IAR Embedded Workbench, and SDCC (open source). Assembly language is also supported for time-critical routines. Eastsoft provides C libraries and example code to accelerate development. The familiar 8051 architecture makes it easy for developers with 8051 experience to get started quickly.",
          "decisionGuide": "Standard C/C++ and assembly supported with available libraries.",
          "keywords": ["programming", "C compiler", "Keil", "IAR"]
        },
        {
          "question": "How do I debug ES7F3268 applications?",
          "answer": "The ES7F3268 supports in-circuit debugging through standard 8051 debug interfaces. Eastsoft provides debug adapters compatible with Keil and IAR development environments. Standard 8051 debugging features include breakpoints, single-step execution, memory inspection, and register viewing. The debugging interface uses standard JTAG or proprietary serial interfaces depending on the specific device variant.",
          "decisionGuide": "Standard 8051 debugging tools and interfaces supported.",
          "keywords": ["debugging", "in-circuit debug", "development tools"]
        },
        {
          "question": "What is the power consumption of ES7F3268?",
          "answer": "The ES7F3268 features low power consumption suitable for battery-powered and energy-efficient applications. Active mode current is approximately 5mA at 16MHz with all peripherals enabled. Idle mode reduces consumption to about 1mA while maintaining peripheral operation. Power-down mode with RAM retention consumes less than 10uA, enabling long battery life in portable applications.",
          "decisionGuide": "Low power modes enable battery-powered applications.",
          "keywords": ["power consumption", "low power", "battery operation"]
        }
      ]
    },
    {
      "partNumber": "ES32F030",
      "name": "ES32F030 ARM Cortex-M0 MCU",
      "shortDescription": "32-bit ARM Cortex-M0 microcontroller with 128KB Flash, advanced peripherals for high-performance applications",
      "descriptionParagraphs": [
        "The ES32F030 is a high-performance 32-bit microcontroller based on ARM Cortex-M0 core designed for demanding embedded applications.",
        "With 128KB Flash, 16KB RAM, and advanced peripherals including USB and CAN, it addresses complex control and communication requirements.",
        "The MCU features low power consumption, high performance, and rich peripheral set at competitive pricing."
      ],
      "specifications": {
        "Core": "ARM Cortex-M0 @ 48MHz",
        "Flash Memory": "128KB",
        "RAM": "16KB",
        "Operating Voltage": "2.0V - 3.6V",
        "GPIO Count": "52",
        "Package": "LQFP-64"
      },
      "features": [
        "ARM Cortex-M0 core at 48MHz",
        "128KB Flash program memory",
        "16KB SRAM data memory",
        "USB 2.0 Full-Speed device interface",
        "CAN 2.0B interface",
        "12-bit ADC with 16 channels",
        "Multiple timers including advanced motor control",
        "Industrial temperature range -40°C to +85°C"
      ],
      "applications": [
        "Industrial control systems",
        "Motor control drives",
        "USB device applications",
        "CAN bus networks",
        "Digital power supplies"
      ],
      "faeReview": {
        "author": "David Wang",
        "title": "Senior FAE - Embedded Systems",
        "content": "The ES32F030 is an excellent ARM Cortex-M0 MCU offering high performance at competitive pricing. The inclusion of USB and CAN interfaces makes it ideal for industrial communication applications. I have used this MCU in motor control and industrial automation projects with excellent results. The 48MHz Cortex-M0 core provides ample processing power for complex control algorithms. The peripheral set is comprehensive - the advanced timers are particularly useful for motor control applications. For developers familiar with ARM architecture, this MCU offers a smooth development experience with standard tools.",
        "highlight": "Feature-rich ARM Cortex-M0 with USB and CAN for industrial applications"
      },
      "alternativeParts": [
        {
          "partNumber": "STM32F072",
          "brand": "STMicroelectronics",
          "specifications": {
            "core": "Cortex-M0",
            "flash": "128KB",
            "ram": "16KB",
            "frequency": "48MHz"
          },
          "comparison": {
            "core": "Cortex-M0 = Cortex-M0 (same)",
            "flash": "128KB = 128KB (same)",
            "ram": "16KB = 16KB (same)",
            "price": "Higher cost"
          },
          "reason": "STM32 offers established ecosystem and brand recognition",
          "useCase": "Applications requiring STM32 ecosystem",
          "link": "#"
        },
        {
          "partNumber": "GD32F130",
          "brand": "GigaDevice",
          "specifications": {
            "core": "Cortex-M3",
            "flash": "128KB",
            "ram": "16KB",
            "frequency": "72MHz"
          },
          "comparison": {
            "core": "Cortex-M3 > Cortex-M0 (higher performance)",
            "flash": "128KB = 128KB (same)",
            "ram": "16KB = 16KB (same)",
            "frequency": "72MHz > 48MHz (faster)"
          },
          "reason": "GigaDevice offers higher performance Cortex-M3 at similar price",
          "useCase": "Applications requiring higher processing performance",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES32F103",
          "link": "/eastsoft/products/microcontrollers/es32f103.html",
          "description": "Cortex-M3 upgrade with higher performance",
          "category": "Microcontrollers"
        },
        {
          "partNumber": "ES32-EVK",
          "link": "/eastsoft/products/microcontrollers/es32-evk.html",
          "description": "Evaluation kit for ES32 series development",
          "category": "Development Tools"
        },
        {
          "partNumber": "CAN Transceiver",
          "link": "#",
          "description": "External CAN bus transceiver",
          "category": "Interface"
        }
      ],
      "faqs": [
        {
          "question": "What is the performance difference between Cortex-M0 and M3?",
          "answer": "ARM Cortex-M3 provides approximately 30-40% higher performance than Cortex-M0 at the same clock frequency due to additional instructions (hardware divide, bit-field operations) and more efficient pipeline. M3 also supports more breakpoints in debugging. However, M0 offers lower power consumption and smaller silicon area resulting in lower cost. For applications not requiring the additional performance, M0 provides excellent value.",
          "decisionGuide": "M0 for cost-sensitive applications, M3 for higher performance needs.",
          "keywords": ["Cortex-M0 vs M3", "ARM performance", "MCU comparison"]
        },
        {
          "question": "Does ES32F030 support USB without external crystal?",
          "answer": "Yes, the ES32F030 includes internal precision oscillators that meet USB clock accuracy requirements, enabling USB operation without external crystal. This reduces BOM cost and board space. The internal oscillator provides sufficient accuracy for USB Full-Speed (12Mbps) operation. For applications requiring higher clock precision, an external crystal can be used.",
          "decisionGuide": "Internal oscillator enables crystal-less USB operation.",
          "keywords": ["USB clock", "internal oscillator", "crystal-less USB"]
        },
        {
          "question": "What motor control features are available?",
          "answer": "The ES32F030 includes advanced timers with complementary PWM outputs, dead-time insertion, and fault protection ideal for motor control applications. Features include center-aligned PWM mode, encoder interface for position feedback, and hall sensor interface for BLDC motor control. These features enable efficient implementation of PMSM and BLDC motor control algorithms.",
          "decisionGuide": "Advanced timers support sophisticated motor control algorithms.",
          "keywords": ["motor control", "PWM", "BLDC", "PMSM"]
        },
        {
          "question": "Is the ES32F030 compatible with STM32?",
          "answer": "The ES32F030 is pin-compatible and functionally similar to STM32F072 in many aspects, making migration possible. However, peripheral registers and memory maps may differ, requiring code modifications. Eastsoft provides migration guides and compatibility notes. For new designs, direct use of ES32F030 libraries is recommended. Contact LiTong FAEs for migration assistance from STM32.",
          "decisionGuide": "Migration possible with code modifications - contact FAEs for assistance.",
          "keywords": ["STM32 compatibility", "migration", "code porting"]
        },
        {
          "question": "What debug interfaces are supported?",
          "answer": "The ES32F030 supports standard ARM debug interfaces including Serial Wire Debug (SWD) and JTAG. SWD uses 2 pins (SWDIO and SWCLK) providing full debug capability with minimal pin usage. JTAG uses 5 pins for debug and boundary scan. The debug interface supports breakpoints, watchpoints, single-stepping, and real-time memory/register access. Standard ARM debuggers including J-Link, ULINK, and ST-Link are compatible.",
          "decisionGuide": "Standard ARM SWD/JTAG debug interfaces supported.",
          "keywords": ["debug interface", "SWD", "JTAG", "ARM debugging"]
        }
      ]
    }
  ]
};

products.categories.push(mcuCategory);

// Category 3: RF Transceivers
const rfCategory = {
  "id": "rf-transceivers",
  "name": "RF Transceivers",
  "slug": "rf-transceivers",
  "description": "Eastsoft RF transceivers provide reliable wireless communication solutions for sub-1GHz and 2.4GHz applications.",
  "longDescription": "Eastsoft RF transceivers deliver reliable, low-power wireless communication solutions for diverse applications. The sub-1GHz transceivers operate in ISM bands including 315MHz, 433MHz, 470MHz, 868MHz, and 915MHz, providing long-range communication with excellent penetration through walls and obstacles. The 2.4GHz transceivers offer higher data rates and worldwide regulatory compliance. All RF chips feature high integration with minimal external components, low power consumption for battery-operated devices, and robust communication protocols. As an authorized Eastsoft distributor, LiTong provides comprehensive selection guidance, antenna design support, and reliable supply chain services for these wireless communication components.",
  "series": [
    "ES8 Sub-1GHz RF Series",
    "ES24 2.4GHz RF Series",
    "ESRF Transceiver Series",
    "ESRF SoC Series"
  ],
  "parameters": [
    "Frequency Band",
    "Modulation",
    "Data Rate",
    "Output Power",
    "Sensitivity",
    "Package"
  ],
  "applications": [
    "Remote controls",
    "Wireless sensors",
    "Smart home devices",
    "Alarm systems",
    "Wireless metering"
  ],
  "selectionGuide": {
    "title": "RF Transceiver Selection Guide",
    "description": "Comprehensive guide for selecting RF transceivers based on frequency, range, and application requirements",
    "articleId": "rf-transceiver-selection-guide",
    "articleLink": "/eastsoft/support/rf-transceiver-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/eastsoft/support/rf-transceiver-selection-guide.html",
    "text": "RF Transceiver Selection Guide"
  },
  "faqs": [
    {
      "question": "What frequency band should I choose for my application?",
      "answer": "Sub-1GHz bands (315/433/868/915MHz) provide longer range and better penetration through walls, making them ideal for remote controls, security systems, and industrial sensors. 2.4GHz offers higher data rates and worldwide regulatory compliance but shorter range and more susceptibility to interference from WiFi and Bluetooth. Choose sub-1GHz for range and penetration, 2.4GHz for high data rates and global compatibility.",
      "decisionGuide": "Sub-1GHz for range, 2.4GHz for data rate and global use.",
      "keywords": ["frequency band", "sub-1GHz", "2.4GHz", "wireless selection"]
    },
    {
      "question": "What is the typical communication range?",
      "answer": "Communication range depends on frequency, output power, antenna design, and environment. Sub-1GHz with +10dBm output power typically achieves 100-500 meters line-of-sight and 30-100 meters indoors. 2.4GHz with 0dBm typically achieves 10-50 meters line-of-sight and 10-30 meters indoors. Higher output power and better antennas can extend range. Actual range should be validated in the target environment.",
      "decisionGuide": "Sub-1GHz provides longer range than 2.4GHz in most environments.",
      "keywords": ["communication range", "RF range", "wireless distance"]
    },
    {
      "question": "Do Eastsoft RF chips require external crystals?",
      "answer": "Most Eastsoft RF transceivers require an external crystal for frequency reference. Typical crystal frequencies are 26MHz for 2.4GHz and 13.56MHz or 26MHz for sub-1GHz depending on the specific chip. Some integrated RF SoC products include internal oscillators. The crystal requirement is specified in the datasheet. Proper crystal selection and layout are critical for RF performance.",
      "decisionGuide": "External crystal required - follow datasheet specifications carefully.",
      "keywords": ["crystal", "frequency reference", "RF oscillator"]
    },
    {
      "question": "What modulation schemes are supported?",
      "answer": "Eastsoft RF transceivers support various modulation schemes including FSK (Frequency Shift Keying), GFSK (Gaussian FSK), OOK (On-Off Keying), and ASK (Amplitude Shift Keying). FSK/GFSK provides better noise immunity and is commonly used for reliable data transmission. OOK/ASK offers simpler implementation and lower power consumption suitable for basic remote controls. Advanced chips support multiple modulation schemes selectable by software.",
      "decisionGuide": "FSK/GFSK for reliable data, OOK/ASK for simple control applications.",
      "keywords": ["modulation", "FSK", "OOK", "GFSK"]
    },
    {
      "question": "How do I design the antenna for Eastsoft RF chips?",
      "answer": "Eastsoft provides antenna design guidelines and reference designs for various antenna types including PCB antennas, chip antennas, and external antennas. For sub-1GHz, quarter-wave monopole or helical antennas are commonly used. For 2.4GHz, PCB trace antennas or ceramic chip antennas are popular. Antenna matching network design is critical for optimal performance. LiTong FAEs can provide antenna design review and matching assistance.",
      "decisionGuide": "Follow Eastsoft antenna guidelines or contact LiTong for design review.",
      "keywords": ["antenna design", "RF matching", "antenna tuning"]
    }
  ],
  "products": [
    {
      "partNumber": "ES8T433",
      "name": "ES8T433 Sub-1GHz RF Transceiver",
      "shortDescription": "High-performance 433MHz RF transceiver with FSK modulation, +10dBm output power for long-range applications",
      "descriptionParagraphs": [
        "The ES8T433 is a high-performance sub-1GHz RF transceiver designed for 433MHz ISM band applications.",
        "With FSK/GFSK modulation, +10dBm output power, and high sensitivity, it provides reliable long-range wireless communication.",
        "The chip features high integration with minimal external components and low power consumption for battery-operated devices."
      ],
      "specifications": {
        "Frequency Band": "433MHz ISM",
        "Modulation": "FSK/GFSK/OOK",
        "Data Rate": "0.5 - 100 kbps",
        "Output Power": "+10dBm (programmable)",
        "Sensitivity": "-110dBm @ 1.2kbps",
        "Operating Voltage": "1.8V - 3.6V",
        "Package": "QFN-20"
      },
      "features": [
        "433MHz ISM band operation",
        "FSK, GFSK, and OOK modulation",
        "Programmable output power up to +10dBm",
        "High sensitivity -110dBm",
        "Data rates from 0.5 to 100 kbps",
        "Low power consumption",
        "SPI interface for configuration",
        "Integrated voltage regulator"
      ],
      "applications": [
        "Remote control systems",
        "Wireless security sensors",
        "Home automation",
        "Wireless alarm systems",
        "Industrial telemetry"
      ],
      "faeReview": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - Wireless Systems",
        "content": "The ES8T433 is an excellent sub-1GHz transceiver for long-range wireless applications. The +10dBm output power and high sensitivity provide excellent range - I have achieved over 200 meters in urban environments with proper antenna design. The multiple modulation options allow optimization for range or data rate. The SPI interface makes it easy to integrate with various MCUs. For applications requiring reliable long-range wireless communication in the 433MHz band, this transceiver offers excellent performance at competitive pricing.",
        "highlight": "Long-range 433MHz transceiver with excellent sensitivity and output power"
      },
      "alternativeParts": [
        {
          "partNumber": "CC1101",
          "brand": "Texas Instruments",
          "specifications": {
            "frequency": "300-348, 387-464, 779-928MHz",
            "sensitivity": "-110dBm",
            "power": "+10dBm"
          },
          "comparison": {
            "frequency": "Multi-band > 433MHz (more flexible)",
            "sensitivity": "-110dBm = -110dBm (same)",
            "power": "+10dBm = +10dBm (same)",
            "price": "Higher cost"
          },
          "reason": "TI offers multi-band flexibility at premium price",
          "useCase": "Applications requiring multi-band operation",
          "link": "#"
        },
        {
          "partNumber": "Si4432",
          "brand": "Silicon Labs",
          "specifications": {
            "frequency": "240-930MHz",
            "sensitivity": "-118dBm",
            "power": "+20dBm"
          },
          "comparison": {
            "frequency": "240-930MHz > 433MHz (wider range)",
            "sensitivity": "-118dBm > -110dBm (better)",
            "power": "+20dBm > +10dBm (higher)",
            "price": "Higher cost"
          },
          "reason": "Silicon Labs offers higher performance at premium price",
          "useCase": "Applications requiring maximum range and performance",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES8T868",
          "link": "/eastsoft/products/rf-transceivers/es8t868.html",
          "description": "868MHz version for European applications",
          "category": "RF Transceivers"
        },
        {
          "partNumber": "ES8T-EVK",
          "link": "/eastsoft/products/rf-transceivers/es8t-evk.html",
          "description": "Evaluation kit for ES8T series development",
          "category": "Development Tools"
        },
        {
          "partNumber": "433MHz Antenna",
          "link": "#",
          "description": "Matched antenna for 433MHz operation",
          "category": "RF Components"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum data rate of ES8T433?",
          "answer": "The ES8T433 supports data rates from 0.5 kbps to 100 kbps depending on modulation scheme and channel bandwidth. Lower data rates provide better sensitivity and longer range, while higher rates enable faster data transmission. For maximum range, use 1.2-9.6 kbps. For faster data transfer, up to 100 kbps is supported with reduced range. The data rate is programmable through SPI interface.",
          "decisionGuide": "Select lower rates for range, higher rates for speed.",
          "keywords": ["data rate", "throughput", "RF speed"]
        },
        {
          "question": "How do I configure the ES8T433?",
          "answer": "The ES8T433 is configured through SPI interface. Configuration includes frequency channel, modulation type, data rate, output power, and various RF parameters. Eastsoft provides configuration software and example code for popular MCUs. The chip has default configurations that can be used for quick evaluation. All configuration registers are documented in the datasheet with recommended values for common applications.",
          "decisionGuide": "SPI configuration with provided software tools and examples.",
          "keywords": ["configuration", "SPI", "register settings"]
        },
        {
          "question": "What crystal is required for ES8T433?",
          "answer": "The ES8T433 requires a 26MHz crystal with ±10ppm accuracy for proper RF operation. The crystal should be a fundamental mode type with appropriate load capacitance (typically 12-20pF). Proper crystal layout with short traces and grounded guard ring is critical for RF performance. Eastsoft provides crystal selection guidelines and reference designs showing proper crystal implementation.",
          "decisionGuide": "26MHz crystal with ±10ppm accuracy required.",
          "keywords": ["crystal", "26MHz", "frequency reference"]
        },
        {
          "question": "Does ES8T433 support packet handling?",
          "answer": "Yes, the ES8T433 includes hardware packet handling with preamble detection, sync word recognition, CRC checking, and packet buffering. This reduces MCU overhead and simplifies software development. The packet format is configurable including preamble length, sync word, and payload structure. Hardware packet handling enables efficient implementation of communication protocols.",
          "decisionGuide": "Hardware packet handling reduces MCU processing requirements.",
          "keywords": ["packet handling", "preamble", "sync word", "CRC"]
        },
        {
          "question": "What is the power consumption in different modes?",
          "answer": "The ES8T433 features low power consumption suitable for battery-operated devices. Receive mode consumes approximately 15mA, transmit mode at +10dBm consumes 30mA, and sleep mode consumes less than 1uA. The chip supports fast wake-up from sleep enabling efficient duty-cycled operation. Typical battery life of several years can be achieved with proper power management.",
          "decisionGuide": "Low power modes enable multi-year battery operation.",
          "keywords": ["power consumption", "battery life", "sleep mode"]
        }
      ]
    },
    {
      "partNumber": "ES24T2400",
      "name": "ES24T2400 2.4GHz RF Transceiver",
      "shortDescription": "High-performance 2.4GHz RF transceiver with GFSK modulation, 2Mbps data rate for high-speed wireless applications",
      "descriptionParagraphs": [
        "The ES24T2400 is a high-performance 2.4GHz RF transceiver designed for worldwide ISM band applications.",
        "With GFSK modulation, 2Mbps data rate, and advanced features, it provides reliable high-speed wireless communication.",
        "The chip features high integration, low power consumption, and compatibility with popular 2.4GHz protocols."
      ],
      "specifications": {
        "Frequency Band": "2.4GHz ISM",
        "Modulation": "GFSK",
        "Data Rate": "250kbps - 2Mbps",
        "Output Power": "0dBm (programmable)",
        "Sensitivity": "-85dBm @ 2Mbps",
        "Operating Voltage": "1.9V - 3.6V",
        "Package": "QFN-24"
      },
      "features": [
        "2.4GHz ISM band worldwide operation",
        "GFSK modulation with 2Mbps data rate",
        "Programmable output power",
        "High sensitivity for reliable reception",
        "Automatic packet handling",
        "Automatic retransmission",
        "SPI interface for configuration",
        "Low power consumption"
      ],
      "applications": [
        "Wireless keyboards and mice",
        "Game controllers",
        "Wireless sensors",
        "Remote controls",
        "Toys and gadgets"
      ],
      "faeReview": {
        "author": "David Wang",
        "title": "Senior FAE - Wireless Systems",
        "content": "The ES24T2400 is a solid 2.4GHz transceiver for consumer wireless applications. The 2Mbps data rate enables fast response times for gaming and HID applications. The automatic packet handling and retransmission features simplify software development and improve reliability. I have used this chip in wireless peripheral designs with good results. The worldwide 2.4GHz compatibility makes it suitable for export products. For cost-sensitive 2.4GHz applications, this transceiver offers good performance at competitive pricing.",
        "highlight": "High-speed 2.4GHz transceiver with automatic packet handling"
      },
      "alternativeParts": [
        {
          "partNumber": "nRF24L01+",
          "brand": "Nordic Semiconductor",
          "specifications": {
            "frequency": "2.4GHz",
            "dataRate": "2Mbps",
            "sensitivity": "-82dBm",
            "power": "0dBm"
          },
          "comparison": {
            "frequency": "2.4GHz = 2.4GHz (same)",
            "dataRate": "2Mbps = 2Mbps (same)",
            "sensitivity": "-82dBm < -85dBm (lower sensitivity)",
            "ecosystem": "Larger ecosystem"
          },
          "reason": "Nordic offers larger ecosystem and community support",
          "useCase": "Applications benefiting from large developer community",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES24T-EVK",
          "link": "/eastsoft/products/rf-transceivers/es24t-evk.html",
          "description": "Evaluation kit for ES24T series development",
          "category": "Development Tools"
        },
        {
          "partNumber": "2.4GHz PCB Antenna",
          "link": "#",
          "description": "Compact PCB antenna for 2.4GHz",
          "category": "RF Components"
        }
      ],
      "faqs": [
        {
          "question": "Is ES24T2400 compatible with Bluetooth or WiFi?",
          "answer": "The ES24T2400 operates in the 2.4GHz band but uses proprietary GFSK modulation and is not directly compatible with Bluetooth or WiFi protocols. However, it can coexist with these technologies since they use different channel arrangements and modulation schemes. For applications requiring Bluetooth or WiFi compatibility, consider using dedicated Bluetooth or WiFi chips instead.",
          "decisionGuide": "Proprietary protocol - not Bluetooth or WiFi compatible.",
          "keywords": ["Bluetooth compatibility", "WiFi", "2.4GHz coexistence"]
        },
        {
          "question": "What is the typical range of ES24T2400?",
          "answer": "The ES24T2400 typically achieves 10-30 meters range indoors and 50-100 meters line-of-sight depending on antenna design and environment. The 2.4GHz frequency is more susceptible to absorption by walls and obstacles compared to sub-1GHz. For longer range applications, consider using sub-1GHz transceivers or adding an external power amplifier. Range can be improved with better antenna design and placement.",
          "decisionGuide": "Typical 10-30m indoor range - shorter than sub-1GHz.",
          "keywords": ["range", "2.4GHz range", "wireless distance"]
        },
        {
          "question": "Does ES24T2400 support frequency hopping?",
          "answer": "The ES24T2400 supports manual channel selection through SPI interface but does not include automatic frequency hopping. Frequency hopping can be implemented in software by changing channels between packets. For applications requiring robust operation in noisy environments, software-implemented frequency hopping or automatic retransmission can improve reliability.",
          "decisionGuide": "Manual channel selection - software frequency hopping possible.",
          "keywords": ["frequency hopping", "channel selection", "interference avoidance"]
        },
        {
          "question": "What protocol stack is required?",
          "answer": "The ES24T2400 provides raw packet transmission and requires application layer protocol implementation in the host MCU. Eastsoft provides basic communication examples and reference code. For simple applications, a basic master-slave protocol can be implemented. For more complex networks, consider implementing or porting existing protocols. The chip's automatic packet handling simplifies protocol implementation.",
          "decisionGuide": "Application protocol implemented in host MCU.",
          "keywords": ["protocol stack", "communication protocol", "packet handling"]
        },
        {
          "question": "How many devices can communicate in a network?",
          "answer": "The ES24T2400 uses star or peer-to-peer topology. A single network can support multiple devices limited by address space and collision management. Typical implementations support 10-100 devices depending on traffic patterns and protocol efficiency. For larger networks, consider using time-division or frequency-division multiple access techniques to manage channel access.",
          "decisionGuide": "10-100+ devices possible with proper protocol design.",
          "keywords": ["network size", "multi-device", "network topology"]
        }
      ]
    }
  ]
};

products.categories.push(rfCategory);

// Category 4: System Solutions
const solutionCategory = {
  "id": "system-solutions",
  "name": "System Solutions",
  "slug": "system-solutions",
  "description": "Eastsoft integrated system solutions combine PLC, RF, and MCU technologies for smart metering and home automation applications.",
  "longDescription": "Eastsoft system solutions provide highly integrated, turnkey solutions for smart grid and smart home applications. These solutions combine multiple communication technologies including PLC, RF, and MCU in optimized designs that reduce development time and system cost. The smart meter solutions include complete reference designs for single-phase and three-phase meters with certification-ready hardware and software. Home automation solutions provide wireless and PLC-based control systems for lighting, appliances, and security. All solutions include complete documentation, source code, and technical support from Eastsoft and LiTong. As an authorized Eastsoft distributor, LiTong provides comprehensive application support and supply chain services for these integrated solutions.",
  "series": [
    "Smart Meter Solution Series",
    "Home Automation Solution Series",
    "Concentrator Solution Series",
    "IoT Gateway Solution Series"
  ],
  "parameters": [
    "Solution Type",
    "Communication",
    "MCU Performance",
    "Certification",
    "Development Time",
    "Support Level"
  ],
  "applications": [
    "Smart electricity meters",
    "Home automation hubs",
    "Data concentrators",
    "IoT gateways",
    "Building management systems"
  ],
  "selectionGuide": {
    "title": "System Solution Selection Guide",
    "description": "Comprehensive guide for selecting integrated system solutions based on application requirements",
    "articleId": "system-solution-selection-guide",
    "articleLink": "/eastsoft/support/system-solution-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/eastsoft/support/system-solution-selection-guide.html",
    "text": "System Solution Selection Guide"
  },
  "faqs": [
    {
      "question": "What is included in Eastsoft system solutions?",
      "answer": "Eastsoft system solutions include complete hardware reference designs with schematics and PCB layouts, production-ready firmware with source code, detailed documentation including user manuals and application notes, certification test reports for utility standards, and technical support from Eastsoft and LiTong. Some solutions also include evaluation boards and development tools. The goal is to provide everything needed to quickly bring a product to market.",
      "decisionGuide": "Complete hardware, software, and documentation package provided.",
      "keywords": ["system solution", "reference design", "firmware", "certification"]
    },
    {
      "question": "How long does it take to develop a product using Eastsoft solutions?",
      "answer": "Using Eastsoft system solutions can significantly reduce development time. A smart meter design based on Eastsoft reference design can be completed in 3-6 months compared to 12-18 months for a design from scratch. The reference designs have already passed utility certification testing, reducing certification time. Home automation products can be developed in 2-4 months using provided solutions. Actual time depends on customization requirements and team experience.",
      "decisionGuide": "Reference designs reduce development time by 50-70%.",
      "keywords": ["development time", "time to market", "reference design benefits"]
    },
    {
      "question": "Are Eastsoft solutions certified for utility standards?",
      "answer": "Yes, Eastsoft smart meter solutions are tested and certified for compliance with Chinese utility standards including Q/GDW for State Grid and DL/T for China Southern Power Grid. Certification reports and test data are available to customers. The solutions have been used in millions of deployed meters, proving field reliability. For export markets, additional certification may be required based on target country requirements.",
      "decisionGuide": "Pre-certified solutions available for Chinese utility standards.",
      "keywords": ["certification", "utility standards", "Q/GDW", "DL/T"]
    },
    {
      "question": "Can I customize Eastsoft system solutions?",
      "answer": "Yes, Eastsoft system solutions are designed to be customizable. Hardware can be modified to meet specific mechanical or interface requirements. Firmware can be customized to add application-specific features or integrate with existing systems. Eastsoft provides source code for firmware allowing full customization. LiTong FAEs can assist with customization and optimization for your specific requirements.",
      "decisionGuide": "Solutions are customizable - contact LiTong for customization support.",
      "keywords": ["customization", "custom design", "firmware modification"]
    },
    {
      "question": "What support is provided for system solutions?",
      "answer": "Eastsoft and LiTong provide comprehensive support for system solutions including technical documentation, hardware design review, firmware customization assistance, debugging support, and certification guidance. LiTong FAEs have hands-on experience with Eastsoft solutions and can provide practical guidance throughout your development. Training and knowledge transfer sessions can be arranged for development teams.",
      "decisionGuide": "Comprehensive technical support from Eastsoft and LiTong.",
      "keywords": ["technical support", "FAE support", "development assistance"]
    }
  ],
  "products": [
    {
      "partNumber": "ES-METER-S1",
      "name": "Single-Phase Smart Meter Solution",
      "shortDescription": "Complete single-phase smart meter solution with PLC communication, metrology, and certification-ready design",
      "descriptionParagraphs": [
        "The ES-METER-S1 is a complete single-phase smart meter solution including hardware reference design, firmware, and documentation.",
        "Featuring ES1642 PLC chip, high-precision metrology, and State Grid certification compliance, it enables rapid meter development.",
        "The solution includes complete source code, test reports, and manufacturing documentation for immediate production."
      ],
      "specifications": {
        "Solution Type": "Single-phase smart meter",
        "Communication": "Narrowband PLC (ES1642)",
        "Metrology": "Class 0.5S accuracy",
        "Certification": "State Grid Q/GDW compliant",
        "Development Time": "3-6 months",
        "Support Level": "Full technical support"
      },
      "features": [
        "Complete hardware reference design",
        "Production-ready firmware with source code",
        "State Grid Q/GDW compliant",
        "Class 0.5S metrology accuracy",
        "Tamper detection and event logging",
        "LCD display and button interface",
        "Certification test reports included",
        "Manufacturing documentation provided"
      ],
      "applications": [
        "Residential smart meters",
        "Prepayment meters",
        "AMI meter deployments",
        "Meter replacement programs",
        "Rural electrification projects"
      ],
      "faeReview": {
        "author": "Dr. Michael Chen",
        "title": "Principal FAE - Smart Grid Solutions",
        "content": "The ES-METER-S1 solution has been used successfully in numerous smart meter projects. The reference design is mature and reliable - I have personally assisted customers who have passed utility certification on their first attempt using this solution. The complete source code allows customization while the hardware design is optimized for cost and manufacturability. For customers entering the smart meter market, this solution significantly reduces risk and time to market. The included certification reports are valuable for demonstrating compliance.",
        "highlight": "Production-ready smart meter solution with proven certification track record"
      },
      "alternativeParts": [
        {
          "partNumber": "Custom Meter Design",
          "brand": "In-house Development",
          "specifications": {
            "development": "From scratch",
            "time": "12-18 months",
            "risk": "Higher risk"
          },
          "comparison": {
            "development": "From scratch > Reference design (much longer)",
            "time": "12-18 months > 3-6 months (longer)",
            "cost": "Higher development cost",
            "risk": "Higher technical risk"
          },
          "reason": "Custom design offers maximum flexibility but higher risk",
          "useCase": "Applications with unique requirements not met by reference designs",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES-METER-S3",
          "link": "/eastsoft/products/system-solutions/es-meter-s3.html",
          "description": "Three-phase meter solution",
          "category": "System Solutions"
        },
        {
          "partNumber": "ES-CONC-M1",
          "link": "/eastsoft/products/system-solutions/es-conc-m1.html",
          "description": "Concentrator solution for meter networks",
          "category": "System Solutions"
        },
        {
          "partNumber": "Meter Test Equipment",
          "link": "#",
          "description": "Calibration and test equipment for production",
          "category": "Test Equipment"
        }
      ],
      "faqs": [
        {
          "question": "What metrology accuracy does the solution achieve?",
          "answer": "The ES-METER-S1 solution achieves Class 0.5S accuracy according to IEC 62052-11 and IEC 62053-21 standards. This means the active energy measurement accuracy is within ±0.5% over a wide current range. The solution includes high-precision analog front-end, dedicated metrology processor, and calibration procedures. Higher accuracy classes can be achieved with component selection and calibration optimization.",
          "decisionGuide": "Class 0.5S accuracy suitable for most residential applications.",
          "keywords": ["metrology accuracy", "Class 0.5S", "energy measurement"]
        },
        {
          "question": "Does the solution support prepayment functionality?",
          "answer": "Yes, the ES-METER-S1 firmware includes prepayment (STS - Standard Transfer Specification) functionality. The meter supports credit-based and token-based prepayment modes with local display of remaining credit. Integration with vending systems and backend infrastructure is supported. The prepayment functionality can be enabled or disabled based on utility requirements.",
          "decisionGuide": "Prepayment functionality included - configurable for requirements.",
          "keywords": ["prepayment", "STS", "token", "credit meter"]
        },
        {
          "question": "What tamper detection features are included?",
          "answer": "The solution includes comprehensive tamper detection including cover open detection, magnetic field detection, reverse current detection, and neutral disturbance detection. Tamper events are logged with timestamp and can trigger alarms. The PLC communication can report tamper events to the backend system. These features help utilities detect and prevent electricity theft.",
          "decisionGuide": "Multiple tamper detection features for security.",
          "keywords": ["tamper detection", "security", "anti-tamper"]
        },
        {
          "question": "Can the solution be used for three-phase meters?",
          "answer": "The ES-METER-S1 is designed for single-phase applications. For three-phase meters, Eastsoft offers the ES-METER-S3 solution which includes three-phase metrology and additional hardware for three-phase measurement. The firmware architecture is similar between single-phase and three-phase solutions, making it easy to support both products with common software base.",
          "decisionGuide": "Use ES-METER-S3 for three-phase applications.",
          "keywords": ["three-phase meter", "polyphase", "ES-METER-S3"]
        },
        {
          "question": "What production support is provided?",
          "answer": "Eastsoft and LiTong provide comprehensive production support including manufacturing documentation, calibration procedures, test specifications, and production programming tools. LiTong can assist with production line setup and provide component sourcing support. Volume pricing and supply chain management services are available for high-volume production.",
          "decisionGuide": "Complete production support from design to manufacturing.",
          "keywords": ["production support", "manufacturing", "calibration"]
        }
      ]
    },
    {
      "partNumber": "ES-HOME-A1",
      "name": "Home Automation Gateway Solution",
      "shortDescription": "Complete home automation gateway solution with PLC, RF, and WiFi connectivity for smart home applications",
      "descriptionParagraphs": [
        "The ES-HOME-A1 is a complete home automation gateway solution enabling control of lighting, appliances, and security devices.",
        "Featuring multi-protocol support including PLC, 433MHz RF, and WiFi, it bridges different device types in a unified system.",
        "The solution includes mobile app reference design and cloud connectivity for remote access and control."
      ],
      "specifications": {
        "Solution Type": "Home automation gateway",
        "Communication": "PLC + 433MHz RF + WiFi",
        "MCU Performance": "ARM Cortex-A7 @ 1GHz",
        "Certification": "CE/FCC compliant",
        "Development Time": "2-4 months",
        "Support Level": "Full technical support"
      },
      "features": [
        "Multi-protocol gateway (PLC, RF, WiFi)",
        "Linux-based embedded system",
        "Mobile app reference design",
        "Cloud connectivity support",
        "Voice assistant integration ready",
        "Scene and automation programming",
        "Energy monitoring capabilities",
        "Over-the-air update support"
      ],
      "applications": [
        "Smart home hubs",
        "Building automation systems",
        "Home energy management",
        "Security system integration",
        "Remote monitoring and control"
      ],
      "faeReview": {
        "author": "Jennifer Liu",
        "title": "Senior FAE - IoT Solutions",
        "content": "The ES-HOME-A1 solution provides an excellent foundation for smart home gateway products. The multi-protocol support is key - combining PLC for wired devices, RF for wireless sensors, and WiFi for internet connectivity creates a comprehensive home automation platform. I have worked with customers who successfully launched smart home products using this solution in under 4 months. The included mobile app reference significantly reduces software development effort. For companies entering the smart home market, this solution provides a proven, feature-rich starting point.",
        "highlight": "Multi-protocol gateway solution with mobile app and cloud connectivity"
      },
      "alternativeParts": [
        {
          "partNumber": "Custom Gateway Design",
          "brand": "In-house Development",
          "specifications": {
            "development": "From scratch",
            "time": "12+ months",
            "complexity": "High"
          },
          "comparison": {
            "development": "From scratch > Reference design (much longer)",
            "time": "12+ months > 2-4 months (longer)",
            "complexity": "Higher complexity",
            "cost": "Higher development cost"
          },
          "reason": "Custom design offers flexibility but requires significant investment",
          "useCase": "Applications with unique gateway requirements",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "ES-HOME-SW1",
          "link": "/eastsoft/products/system-solutions/es-home-sw1.html",
          "description": "Smart wall switch node",
          "category": "System Solutions"
        },
        {
          "partNumber": "ES-HOME-PL1",
          "link": "/eastsoft/products/system-solutions/es-home-pl1.html",
          "description": "Smart plug node",
          "category": "System Solutions"
        },
        {
          "partNumber": "WiFi Module",
          "link": "#",
          "description": "External WiFi module for gateway",
          "category": "Wireless Modules"
        }
      ],
      "faqs": [
        {
          "question": "What voice assistants are supported?",
          "answer": "The ES-HOME-A1 solution includes integration interfaces for popular voice assistants including Amazon Alexa, Google Assistant, and Tmall Genie. The reference software includes example implementations for voice control of connected devices. Additional voice platforms can be integrated using the provided API framework. Voice assistant certification guidance is available from LiTong.",
          "decisionGuide": "Alexa, Google Assistant, Tmall Genie integration included.",
          "keywords": ["voice assistant", "Alexa", "Google Home", "smart speaker"]
        },
        {
          "question": "Does the solution include mobile app source code?",
          "answer": "Yes, the solution includes reference mobile app source code for both iOS and Android platforms. The app provides device control, scene management, automation programming, and energy monitoring features. The source code can be customized with your branding and additional features. API documentation is provided for integration with existing mobile applications.",
          "decisionGuide": "Mobile app source code included for iOS and Android.",
          "keywords": ["mobile app", "iOS", "Android", "source code"]
        },
        {
          "question": "What cloud platforms are supported?",
          "answer": "The solution includes cloud connectivity frameworks for major IoT cloud platforms including AWS IoT, Alibaba Cloud IoT, and Tencent Cloud IoT. Custom cloud integration is possible using the provided MQTT and HTTP client libraries. The gateway can also operate in local-only mode without cloud dependency for privacy-conscious installations.",
          "decisionGuide": "AWS, Alibaba Cloud, Tencent Cloud integration included.",
          "keywords": ["cloud platform", "AWS IoT", "Alibaba Cloud", "cloud connectivity"]
        },
        {
          "question": "How many devices can the gateway control?",
          "answer": "The ES-HOME-A1 gateway can manage up to 200+ connected devices depending on communication protocols and traffic patterns. PLC devices, RF devices, and WiFi devices each have their own network capacity. The Linux-based processor provides sufficient performance for large home installations. For commercial building applications with more devices, multiple gateways can be deployed.",
          "decisionGuide": "200+ device capacity for residential applications.",
          "keywords": ["device capacity", "network size", "scalability"]
        },
        {
          "question": "Does the solution support scene and automation?",
          "answer": "Yes, the solution includes comprehensive scene and automation capabilities. Users can create scenes that control multiple devices with a single command, and automations that trigger actions based on time, sensor values, or device states. The automation engine supports conditional logic and multiple trigger types. These features can be configured through the mobile app or locally through the gateway interface.",
          "decisionGuide": "Full scene and automation programming included.",
          "keywords": ["scene control", "automation", "smart rules"]
        }
      ]
    }
  ]
};

products.categories.push(solutionCategory);

// Write updated file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Added 3 more product categories to Eastsoft products.json');
console.log(`✅ Total categories: ${products.categories.length}`);
console.log(`✅ Total products: ${products.categories.reduce((sum, cat) => sum + cat.products.length, 0)}`);
