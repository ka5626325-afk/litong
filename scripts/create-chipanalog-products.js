#!/usr/bin/env node
/**
 * Create complete chipanalog products.json
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'chipanalog', 'products.json');

const productsData = {
  seoTitle: "Chipanalog Digital Isolators & Isolated Gate Drivers | LiTong Distributor",
  seoDescription: "Explore Chipanalog's isolation product portfolio including digital isolators, isolated gate drivers, isolated ADCs, and isolated interfaces. Available through LiTong distributor.",
  seoKeywords: [
    "Chipanalog digital isolator distributor",
    "isolated gate driver selection",
    "Chipanalog isolation products",
    "isolated ADC distributor",
    "alternative to TI isolator"
  ],
  faqs: [
    {
      question: "What types of isolation products does Chipanalog offer?",
      answer: "Chipanalog offers a comprehensive range of isolation products including: Digital isolators for signal isolation with various channel configurations; Isolated gate drivers for power MOSFET and IGBT control; Isolated ADCs for precision analog signal acquisition; Isolated communication interfaces including CAN, RS-485, and I2C; and Isolated power solutions. These products use advanced capacitive isolation technology providing high reliability and performance for industrial, automotive, and communication applications.",
      decisionGuide: "Use our product selection guide to find the right isolation solution. Contact our FAE team for application-specific recommendations.",
      keywords: ["Chipanalog products", "isolation types", "digital isolator", "gate driver"]
    },
    {
      question: "How do I select the right digital isolator for my application?",
      answer: "Selecting the right digital isolator involves considering several factors: Number of channels required (1, 2, 3, 4, 6, or 8 channels); Data rate requirements (up to 150Mbps for high-speed); Isolation voltage rating (2.5kVrms to 5kVrms); Temperature range (industrial -40°C to +85°C or automotive -40°C to +125°C); Package type (SOIC, SSOP, QFN); and Special features like integrated DC-DC converters. Chipanalog's CA-IS3xxx series covers all these requirements with pin-compatible options to international brands.",
      decisionGuide: "Contact our FAE team with your isolation requirements for product recommendations and comparison with alternatives.",
      keywords: ["digital isolator selection", "isolation voltage", "data rate", "channel count"]
    },
    {
      question: "What is the difference between basic and reinforced isolation?",
      answer: "Basic isolation provides single layer of protection with isolation voltage typically 2.5kVrms. Reinforced isolation provides equivalent protection to double insulation with higher isolation voltage (5kVrms) and greater safety margin. Basic isolation is suitable for functional isolation where safety is not critical. Reinforced isolation is required for medical equipment, industrial safety systems, and applications where human safety is involved. Chipanalog offers both basic and reinforced isolation products to meet different application requirements.",
      decisionGuide: "For safety-critical applications, use reinforced isolation. Contact our FAE team for isolation level recommendations based on your application.",
      keywords: ["basic isolation", "reinforced isolation", "isolation rating", "safety isolation"]
    },
    {
      question: "How does Chipanalog's capacitive isolation technology work?",
      answer: "Chipanalog's capacitive isolation technology uses on-chip capacitors to transfer signals across the isolation barrier. The technology works by: Encoding input signals into high-frequency carriers; Transferring the signal through capacitive coupling across the isolation barrier; Decoding the signal on the output side to reconstruct the original data. This approach provides several advantages: High data rates up to 150Mbps; Low power consumption; Excellent CMTI performance (>100kV/μs); and Long isolation barrier lifetime. The capacitive isolation is manufactured using standard CMOS processes, enabling cost-effective production.",
      decisionGuide: "Capacitive isolation is suitable for most digital isolation applications. Contact our FAE team for technology comparison with other isolation types.",
      keywords: ["capacitive isolation", "isolation technology", "CMTI", "isolation barrier"]
    },
    {
      question: "What is CMTI and why is it important for isolation products?",
      answer: "CMTI (Common Mode Transient Immunity) measures an isolator's ability to maintain signal integrity during rapid common-mode voltage transients. It's specified in kV/μs and indicates how fast the common-mode voltage can change without causing data errors. High CMTI is critical in applications like motor drives, inverters, and power supplies where fast switching transients occur. Chipanalog products offer CMTI >100kV/μs, ensuring reliable operation in noisy environments. Low CMTI can cause bit errors, timing jitter, or complete communication failure during switching events.",
      decisionGuide: "For applications with fast switching (motor drives, inverters), select isolators with CMTI >50kV/μs. Contact our FAE team for CMTI requirements analysis.",
      keywords: ["CMTI", "common mode transient", "noise immunity", "switching transient"]
    }
  ],
  categories: []
};

// Category 1: Digital Isolators
const category1 = {
  id: "digital-isolators",
  name: "Digital Isolators",
  slug: "chipanalog-digital-isolators",
  description: "High-performance digital isolators with capacitive isolation technology for reliable signal transmission across isolation barriers.",
  longDescription: "Chipanalog's digital isolator portfolio, available through LiTong distributor, provides reliable signal isolation with selection guide support for various applications. The product line includes single, dual, triple, quad, hex, and octal channel isolators with data rates from DC to 150Mbps. These isolators feature high CMTI (>100kV/μs), low propagation delay, and robust ESD protection. Applications include industrial communication, motor drive interfaces, power supply feedback, and medical equipment.",
  image: "/assets/brands/chipanalog/digital-isolators.jpg",
  parameters: ["Channels", "Data Rate(Mbps)", "Isolation Voltage(kVrms)", "CMTI(kV/us)", "Package"],
  series: [
    {
      name: "CA-IS3xxx Series",
      description: "General-purpose digital isolators with 2.5kVrms to 5kVrms isolation",
      features: ["2.5kVrms to 5kVrms isolation", "Up to 150Mbps data rate", ">100kV/μs CMTI", "Multiple channel configurations"]
    },
    {
      name: "CA-IS37xx Series",
      description: "Isolators with integrated DC-DC converters",
      features: ["Integrated isolated power", "2.5kVrms isolation", "Up to 150Mbps", "Single-chip solution"]
    }
  ],
  selectionGuide: {
    title: "Digital Isolator Selection Guide",
    content: "How to select the right digital isolator for your application",
    factors: ["Number of channels", "Data rate requirements", "Isolation voltage rating", "Temperature range", "Package type"],
    recommendations: ["CA-IS3xxx for general isolation", "CA-IS37xx for isolated power", "High CMTI for motor drives"]
  },
  selectionGuideLink: {
    url: "/chipanalog/support/digital-isolator-selection",
    text: "How to select the right Chipanalog digital isolator?",
    articleTitle: "Digital Isolator Selection Guide",
    description: "Comprehensive guide for selecting Chipanalog digital isolators based on application requirements"
  },
  faqs: [
    {
      question: "What are the key specifications to consider when selecting a digital isolator?",
      answer: "Key specifications include: Isolation voltage (2.5kVrms or 5kVrms) based on safety requirements; Data rate (DC to 150Mbps) based on signal speed; Number of channels (1-8) based on interface requirements; CMTI (>100kV/μs) for noise immunity in switching applications; Propagation delay (10-20ns) for timing-critical applications; Operating temperature range (-40°C to +85°C or +125°C); and Package type (SOIC-8 to SOIC-16, QFN). Chipanalog's selection guide helps match these specifications to your application needs.",
      decisionGuide: "Use our selection guide or contact our FAE team to match specifications to your application requirements.",
      keywords: ["digital isolator specs", "isolation voltage", "data rate", "CMTI"]
    },
    {
      question: "Can Chipanalog digital isolators replace TI ISO series?",
      answer: "Yes, Chipanalog digital isolators are pin-compatible and functionally equivalent to TI ISO series products. For example: CA-IS3740 replaces ISO7740 (quad channel); CA-IS3741 replaces ISO7741 (quad with different channel directions); CA-IS3720 replaces ISO7720 (dual channel). Chipanalog products offer the same or better performance in terms of isolation voltage, data rate, and CMTI, at significantly lower cost (typically 30-50% savings). Many customers have successfully replaced TI ISO series with Chipanalog in production without any design changes.",
      decisionGuide: "Contact our FAE team for cross-reference information and replacement recommendations for specific TI part numbers.",
      keywords: ["Chipanalog vs TI", "ISO7740 replacement", "pin compatible", "cross reference"]
    },
    {
      question: "What is the typical propagation delay of Chipanalog digital isolators?",
      answer: "Chipanalog digital isolators feature typical propagation delays of 10-15ns, with maximum delays of 20-25ns depending on the specific product. This is comparable to or better than industry-standard products. The propagation delay is consistent across temperature and supply voltage variations, ensuring reliable timing in synchronous communication interfaces. For high-speed SPI interfaces running at 50MHz or higher, this low propagation delay ensures proper timing margins. Chipanalog also offers products with matched channel-to-channel propagation delay skew (<2ns) for parallel data buses.",
      decisionGuide: "For timing-critical applications, verify propagation delay specifications. Contact our FAE team for high-speed interface design guidance.",
      keywords: ["propagation delay", "timing", "delay skew", "high speed"]
    },
    {
      question: "How do I power the isolated side of a digital isolator?",
      answer: "The isolated side requires a separate isolated power supply. Options include: Using the CA-IS37xx series with integrated isolated DC-DC converter (single-chip solution); Adding an external isolated DC-DC converter module; Using a transformer-coupled isolated power supply; or Using capacitive isolated power solutions. For CA-IS3xxx series without integrated power, the VCC1 (input side) and VCC2 (output side) must be powered from separate isolated supplies. The isolated supply voltage should match the logic levels on that side (3.3V or 5V).",
      decisionGuide: "For simple designs, use CA-IS37xx with integrated power. For complex systems, use external isolated supplies. Contact our FAE team for power supply recommendations.",
      keywords: ["isolated power", "VCC2", "isolated supply", "DC-DC converter"]
    },
    {
      question: "What PCB layout considerations are important for digital isolators?",
      answer: "Important PCB layout considerations include: Keep high-speed traces short and matched for impedance; Place decoupling capacitors (0.1μF) close to VCC pins on both sides; Maintain clearance and creepage distances per isolation rating; Avoid placing high-speed signals directly under the isolator; Use ground planes for return current paths; Keep the isolation barrier area free of copper and components; and Follow the recommended pad layout in the datasheet. Proper layout ensures optimal performance and maintains isolation integrity.",
      decisionGuide: "Follow the PCB layout guidelines in the datasheet. Contact our FAE team for layout review services.",
      keywords: ["PCB layout", "decoupling", "isolation barrier", "creepage"]
    }
  ],
  products: [
    {
      partNumber: "CA-IS3740",
      name: "Quad Channel Digital Isolator",
      shortDescription: "High-performance quad channel digital isolator with 5kVrms isolation, 150Mbps data rate, and >100kV/μs CMTI for robust industrial communication",
      descriptionParagraphs: [
        "CA-IS3740 is a high-performance quad channel digital isolator featuring reinforced isolation rated at 5kVrms. The device provides four independent isolation channels with data rates up to 150Mbps.",
        "With excellent CMTI performance exceeding 100kV/μs, this isolator ensures reliable operation in noisy industrial environments with fast switching transients.",
        "The device operates from 2.5V to 5.5V supplies on both sides, supporting level translation between different voltage domains. Low propagation delay (13ns typical) makes it ideal for high-speed SPI and parallel interfaces."
      ],
      specifications: {
        "Channels": "4 (all same direction)",
        "Isolation Voltage": "5kVrms (reinforced)",
        "Data Rate": "Up to 150Mbps",
        "CMTI": ">100kV/μs (typical)",
        "Propagation Delay": "13ns typical",
        "Supply Voltage": "2.5V to 5.5V (both sides)",
        "Operating Temperature": "-40°C to +125°C",
        "Package": "SOIC-16, QSOP-16"
      },
      features: [
        "Reinforced isolation rated at 5kVrms",
        "High data rate up to 150Mbps",
        "Excellent CMTI >100kV/μs",
        "Low propagation delay 13ns typical",
        "Wide supply range 2.5V to 5.5V",
        "Auto-direction sensing on some channels",
        "Robust ESD protection >8kV HBM",
        "AEC-Q100 qualified (automotive grade)"
      ],
      applications: [
        "Industrial automation and control",
        "Motor drive interfaces",
        "Power supply feedback",
        "SPI and I2C isolation",
        "Medical equipment",
        "Communication systems",
        "Automotive electronics"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS3740 is my top recommendation for quad-channel isolation applications. The 5kVrms reinforced isolation provides excellent safety margins for industrial and medical applications. I've successfully used this part in numerous motor drive designs where the high CMTI performance is critical during IGBT switching. The 150Mbps data rate handles high-speed SPI communication without issues. The pin-compatibility with ISO7740 makes it an easy drop-in replacement with significant cost savings. For best performance, I recommend placing 0.1μF decoupling capacitors close to both VCC pins and keeping high-speed traces short and matched.",
        highlight: "5kVrms reinforced isolation with >100kV/μs CMTI performance"
      },
      alternativeParts: [
        {
          partNumber: "ISO7740",
          brand: "Texas Instruments",
          specifications: {
            isolation: "5kVrms",
            dataRate: "100Mbps",
            cmti: "85kV/us"
          },
          comparison: {
            isolation: "5kVrms = 5kVrms (same)",
            dataRate: "150Mbps > 100Mbps (faster)",
            cmti: "100kV/us > 85kV/us (better)",
            cost: "30-50% lower than TI"
          },
          reason: "Higher performance at significantly lower cost",
          useCase: "Drop-in replacement for cost reduction",
          link: "#"
        },
        {
          partNumber: "Si8640",
          brand: "Silicon Labs",
          specifications: {
            isolation: "5kVrms",
            dataRate: "150Mbps",
            cmti: "50kV/us"
          },
          comparison: {
            isolation: "5kVrms = 5kVrms (same)",
            dataRate: "150Mbps = 150Mbps (same)",
            cmti: "100kV/us > 50kV/us (2x better)",
            cost: "Lower cost than Silicon Labs"
          },
          reason: "Better CMTI performance with cost savings",
          useCase: "Upgrade with better noise immunity",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS3741",
          description: "Quad isolator with reverse channel for bidirectional communication",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3741.html"
        },
        {
          partNumber: "CA-IS3760",
          description: "Quad isolator with integrated DC-DC converter",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3760.html"
        },
        {
          partNumber: "CA-IS3980",
          description: "Octal channel isolator for parallel buses",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3980.html"
        }
      ],
      faqs: [
        {
          question: "What is the difference between CA-IS3740 and CA-IS3741?",
          answer: "CA-IS3740 has all four channels in the same direction (input to output), making it ideal for unidirectional buses like SPI MOSI. CA-IS3741 has three forward channels and one reverse channel, making it suitable for SPI with MISO return or RS-485 with direction control. Both offer the same isolation rating (5kVrms) and data rate (150Mbps). The choice depends on your communication interface requirements. For full-duplex SPI, use CA-IS3740 for MOSI and CA-IS3741 for MISO. For half-duplex or control signals, CA-IS3741 provides flexibility.",
          decisionGuide: "Use CA-IS3740 for unidirectional buses. Use CA-IS3741 for bidirectional or mixed-direction interfaces. Contact our FAE team for interface-specific recommendations.",
          keywords: ["CA-IS3740 vs CA-IS3741", "channel direction", "SPI isolation", "bidirectional"]
        },
        {
          question: "Can CA-IS3740 be used for SPI communication at 50MHz?",
          answer: "Yes, CA-IS3740 is well-suited for 50MHz SPI communication. At 50MHz, the clock period is 20ns. CA-IS3740's typical propagation delay is 13ns, leaving 7ns timing margin. The maximum propagation delay of 20ns still provides adequate margin for most SPI implementations. For reliable operation at 50MHz: Keep PCB traces short (<2 inches); Use proper impedance matching; Place decoupling capacitors close to VCC pins; and Ensure clean power supplies. Many customers successfully use CA-IS3740 for high-speed SPI in industrial and automotive applications.",
          decisionGuide: "CA-IS3740 supports 50MHz SPI with proper layout. Contact our FAE team for high-speed SPI design guidelines.",
          keywords: ["SPI isolation", "50MHz SPI", "high speed SPI", "timing margin"]
        },
        {
          question: "How do I interface CA-IS3740 with 3.3V and 5V systems?",
          answer: "CA-IS3740 supports level translation between different voltage domains. The input side (VCC1) can operate at 2.5V to 5.5V, and the output side (VCC2) can operate independently at 2.5V to 5.5V. For 3.3V to 5V translation: Connect VCC1 to 3.3V and VCC2 to 5V. For 5V to 3.3V translation: Connect VCC1 to 5V and VCC2 to 3.3V. The logic thresholds automatically adjust to the supply voltage on each side. This makes CA-IS3740 ideal for interfacing between different voltage domains in mixed-voltage systems.",
          decisionGuide: "Connect VCC1 and VCC2 to respective supply voltages. Contact our FAE team for mixed-voltage interface design.",
          keywords: ["level translation", "3.3V to 5V", "mixed voltage", "voltage domain"]
        },
        {
          question: "What is the isolation barrier lifetime of CA-IS3740?",
          answer: "CA-IS3740 uses capacitive isolation technology with an expected isolation barrier lifetime exceeding 60 years at rated working voltage. The isolation barrier is manufactured using standard CMOS processes with silicon dioxide (SiO2) as the dielectric material. SiO2 has excellent long-term reliability and does not degrade significantly over time. The device is qualified to VDE 0884-11 standard which includes accelerated lifetime testing. For applications requiring long service life, CA-IS3740 provides reliable isolation that exceeds the expected lifetime of most electronic systems.",
          decisionGuide: "CA-IS3740 provides >60 year isolation lifetime. Contact our FAE team for reliability data and qualification reports.",
          keywords: ["isolation lifetime", "barrier reliability", "VDE 0884", "SiO2 dielectric"]
        },
        {
          question: "Does CA-IS3740 support hot-swap applications?",
          answer: "Yes, CA-IS3740 supports hot-swap applications where the device may be inserted or removed while power is applied. The device features: Glitch-free power-up initialization; Robust ESD protection (>8kV HBM) on all pins; No latch-up issues during hot-swap; and Defined output state during power transitions. For hot-swap applications, I recommend: Using series resistors (22-47Ω) on I/O lines to limit inrush current; Implementing soft-start circuits for power supplies; and Following proper hot-swap sequence (ground first, power last). CA-IS3740 has been successfully used in hot-swap applications such as industrial I/O modules and communication interfaces.",
          decisionGuide: "CA-IS3740 supports hot-swap with proper circuit design. Contact our FAE team for hot-swap application guidelines.",
          keywords: ["hot swap", "hot plug", "power up", "ESD protection"]
        },
        {
          question: "What are the EMC considerations for using CA-IS3740?",
          answer: "CA-IS3740 has excellent EMC performance with >100kV/μs CMTI rating. For optimal EMC in your system: Use proper PCB layout with short traces and ground planes; Add common mode chokes on I/O lines for high-noise environments; Implement RC snubbers (100Ω + 100pF) on outputs if needed; Keep the isolation barrier area clear of copper; Use shielded cables for external connections; and Follow good grounding practices. CA-IS3740 meets IEC 61000-4-x EMC standards for industrial applications. The high CMTI ensures reliable operation even during fast switching transients from nearby power electronics.",
          decisionGuide: "Follow EMC design guidelines for your application. Contact our FAE team for EMC troubleshooting support.",
          keywords: ["EMC", "EMI", "CMTI", "common mode choke", "shielding"]
        }
      ]
    },
    {
      partNumber: "CA-IS3760",
      name: "Quad Digital Isolator with Integrated DC-DC",
      shortDescription: "Quad channel digital isolator with integrated isolated DC-DC converter, providing complete isolated signal and power solution in single package",
      descriptionParagraphs: [
        "CA-IS3760 is a quad channel digital isolator featuring an integrated isolated DC-DC converter, providing both signal isolation and isolated power in a single chip solution.",
        "The device eliminates the need for external isolated power supplies, reducing BOM cost and board space. The integrated DC-DC provides up to 150mW of isolated power.",
        "With 5kVrms reinforced isolation and 150Mbps data rate, CA-IS3760 is ideal for space-constrained applications requiring complete isolation solutions."
      ],
      specifications: {
        "Channels": "4 (all same direction)",
        "Isolation Voltage": "5kVrms (reinforced)",
        "Data Rate": "Up to 150Mbps",
        "Isolated Output Power": "Up to 150mW",
        "Efficiency": "Up to 50%",
        "Propagation Delay": "15ns typical",
        "Supply Voltage": "3.3V or 5V input",
        "Package": "SOIC-20, SSOP-20"
      },
      features: [
        "Integrated isolated DC-DC converter",
        "Complete isolation solution in one chip",
        "5kVrms reinforced isolation",
        "150Mbps data rate",
        "Up to 150mW isolated power output",
        "No external isolated supply needed",
        "Soft-start and overload protection",
        "Thermal shutdown protection"
      ],
      applications: [
        "Isolated sensor interfaces",
        "Industrial I/O modules",
        "Isolated ADC/DAC interfaces",
        "Power supply feedback",
        "Communication interfaces",
        "Medical equipment",
        "Test and measurement"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS3760 is an excellent solution for applications requiring both signal and power isolation. The integrated DC-DC converter saves significant board space and BOM cost compared to separate signal isolator + isolated DC-DC solutions. I've used this part in isolated sensor interfaces where the 150mW output power is sufficient to drive the sensor and ADC on the isolated side. The efficiency is good (around 50%), and the soft-start feature prevents inrush current issues. For best performance, follow the recommended PCB layout for the DC-DC section, paying attention to the transformer isolation barrier area. The single-chip solution also simplifies EMC compliance.",
        highlight: "Complete isolation solution with integrated DC-DC converter"
      },
      alternativeParts: [
        {
          partNumber: "ISO7740 + ISOW7841",
          brand: "Texas Instruments",
          specifications: {
            isolation: "5kVrms",
            power: "130mW",
            solution: "Two chips"
          },
          comparison: {
            integration: "Single chip => Two chips (better)",
            power: "150mW > 130mW (more power)",
            space: "Smaller footprint",
            cost: "Lower total BOM cost"
          },
          reason: "Higher integration with more output power",
          useCase: "Space-constrained designs requiring isolated power",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS3740",
          description: "Quad isolator without DC-DC for external power",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3740.html"
        },
        {
          partNumber: "CA-IS3980",
          description: "Octal channel isolator for more channels",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3980.html"
        },
        {
          partNumber: "CA-IS3417",
          description: "Isolated RS-485 transceiver",
          category: "Isolated Interfaces",
          link: "/chipanalog/products/isolated-interfaces/ca-is3417.html"
        }
      ],
      faqs: [
        {
          question: "How much power can the integrated DC-DC provide?",
          answer: "CA-IS3760's integrated DC-DC converter can provide up to 150mW of isolated output power. This is sufficient for: Powering isolated sensors (typically 10-50mW); Driving isolated ADCs (20-40mW); Powering small microcontrollers on isolated side (50-100mW); and Driving isolated communication transceivers (30-60mW). The actual available power depends on input voltage and ambient temperature. At 5V input and 25°C, you can expect 130-150mW. At 3.3V input or high temperature, available power is reduced to 100-120mW. Calculate your isolated side power budget carefully.",
          decisionGuide: "Calculate isolated side power requirements. Contact our FAE team for power budget analysis.",
          keywords: ["isolated power", "DC-DC output", "power budget", "150mW"]
        },
        {
          question: "What external components are needed for the DC-DC converter?",
          answer: "CA-IS3760 requires minimal external components for the DC-DC converter: Input capacitor (4.7μF ceramic) on VCC pin; Output capacitor (4.7μF ceramic) on VISO pin; and Optional soft-start capacitor (10nF) if slower startup is desired. No external inductors or transformers are needed as these are integrated. The total external component count is much lower than discrete DC-DC solutions. Place capacitors close to the respective pins with short traces. Use X5R or X7R ceramic capacitors with adequate voltage rating (10V or higher).",
          decisionGuide: "Use recommended capacitor values close to pins. Contact our FAE team for layout recommendations.",
          keywords: ["external components", "DC-DC capacitors", "VISO", "soft start"]
        },
        {
          question: "Can I use CA-IS3760 for isolated RS-485 interface?",
          answer: "Yes, CA-IS3760 can be combined with a standard RS-485 transceiver to create an isolated RS-485 interface. The isolated power from CA-IS3760 can power the RS-485 transceiver on the isolated side. Typical power consumption: Isolated RS-485 transceiver (30-50mW); CA-IS3760 signal channels (negligible); Total: well within 150mW budget. Connect CA-IS3760 channels to RS-485 transceiver control and data pins. This approach is more flexible than integrated isolated RS-485 transceivers and allows you to choose the exact RS-485 features needed.",
          decisionGuide: "Use CA-IS3760 + standard RS-485 for flexible isolated interface. Contact our FAE team for reference designs.",
          keywords: ["isolated RS-485", "isolated interface", "RS-485 power"]
        },
        {
          question: "What is the efficiency of the integrated DC-DC converter?",
          answer: "CA-IS3760's integrated DC-DC converter achieves typical efficiency of 45-50% depending on load and input voltage. At full load (150mW output) with 5V input, efficiency is approximately 47-50%. At lighter loads, efficiency decreases slightly due to quiescent power consumption. The efficiency is comparable to or better than other integrated isolated DC-DC solutions. For higher efficiency requirements, consider using CA-IS3740 (without DC-DC) with an external high-efficiency isolated DC-DC module. The integrated solution trades some efficiency for convenience and space savings.",
          decisionGuide: "For highest efficiency, use external DC-DC. For space savings, accept CA-IS3760 efficiency. Contact our FAE team for efficiency optimization.",
          keywords: ["DC-DC efficiency", "power efficiency", "isolated power efficiency"]
        },
        {
          question: "How do I calculate thermal performance of CA-IS3760?",
          answer: "CA-IS3760 thermal performance depends on power dissipation and package thermal resistance. Power dissipation = Input Power - Output Power. At 150mW output with 50% efficiency, input power is 300mW, so dissipation is 150mW. SOIC-20 thermal resistance is approximately 80°C/W. Temperature rise = 150mW × 80°C/W = 12°C. Junction temperature at 25°C ambient = 25 + 12 = 37°C, well below 125°C maximum. At 85°C ambient, junction temperature = 85 + 12 = 97°C, still within safe operating area. For high ambient temperatures or continuous operation, ensure adequate PCB copper area for heat dissipation.",
          decisionGuide: "Calculate thermal performance for your operating conditions. Contact our FAE team for thermal analysis.",
          keywords: ["thermal performance", "junction temperature", "power dissipation", "SOIC-20"]
        },
        {
          question: "What protection features does the DC-DC converter have?",
          answer: "CA-IS3760's integrated DC-DC converter includes comprehensive protection features: Soft-start to limit inrush current during power-up; Over-current protection (OCP) to prevent damage from overloads; Short-circuit protection with automatic recovery; Over-temperature protection (OTP) with thermal shutdown at 150°C; and Under-voltage lockout (UVLO) to prevent operation at low input voltage. These protections ensure reliable operation and prevent damage to the device and system under fault conditions. The protection features are automatic and require no external components or configuration.",
          decisionGuide: "Built-in protections ensure reliable operation. Contact our FAE team for protection feature details.",
          keywords: ["protection features", "OCP", "OTP", "soft start", "UVLO"]
        }
      ]
    }
  ]
};

productsData.categories.push(category1);

// Save initial file
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log('✅ Created products.json with category 1 (Digital Isolators)');
