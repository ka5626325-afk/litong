#!/usr/bin/env node
/**
 * Add remaining categories to chipanalog products.json
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'chipanalog', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 3: Isolated ADCs
const category3 = {
  id: "isolated-adcs",
  name: "Isolated ADCs",
  slug: "chipanalog-isolated-adcs",
  description: "Precision isolated analog-to-digital converters with integrated isolation for accurate signal acquisition in noisy environments.",
  longDescription: "Chipanalog's isolated ADC portfolio, available through LiTong distributor, provides precision analog signal acquisition with integrated isolation for industrial and automotive applications. The product line includes isolated sigma-delta ADCs with high resolution (16-24 bits), isolated SAR ADCs for fast conversion, and isolated temperature sensor interfaces. These ADCs feature excellent linearity, low noise, and robust isolation for reliable measurements in harsh environments.",
  image: "/assets/brands/chipanalog/isolated-adcs.jpg",
  parameters: ["Resolution", "Sample Rate", "Isolation Voltage", "Input Channels", "Package"],
  series: [
    {
      name: "CA-IS1300 Series",
      description: "Isolated sigma-delta ADCs for precision measurement",
      features: ["16-24 bit resolution", "High isolation", "Low noise", "Integrated reference"]
    }
  ],
  selectionGuide: {
    title: "Isolated ADC Selection Guide",
    content: "How to select the right isolated ADC for your application",
    factors: ["Resolution requirement", "Sample rate", "Number of channels", "Isolation level", "Input type"],
    recommendations: ["CA-IS1300 for high precision", "Higher resolution for sensor interfaces"]
  },
  selectionGuideLink: {
    url: "/chipanalog/support/isolated-adc-selection",
    text: "How to select the right Chipanalog isolated ADC?",
    articleTitle: "Isolated ADC Selection Guide",
    description: "Comprehensive guide for selecting Chipanalog isolated ADCs"
  },
  faqs: [
    {
      question: "What are the advantages of isolated ADCs?",
      answer: "Isolated ADCs provide several advantages: Direct measurement of high-voltage signals without additional isolation; Protection of low-voltage control circuits from high-voltage transients; Elimination of ground loops in distributed systems; Accurate measurements in noisy industrial environments; and Simplified system design with integrated isolation. Chipanalog's isolated ADCs combine precision analog performance with robust digital isolation in a single package.",
      decisionGuide: "Use isolated ADCs for high-voltage or noisy measurements. Contact our FAE team for ADC selection.",
      keywords: ["isolated ADC advantages", "high voltage measurement", "noise immunity"]
    },
    {
      question: "What resolution do I need for my application?",
      answer: "ADC resolution selection depends on measurement requirements: 12-bit (4096 levels) for general monitoring and control; 16-bit (65536 levels) for precision industrial measurements; 20-24 bit for high-precision sensor interfaces and test equipment. Consider: Required measurement accuracy; Dynamic range of input signal; and System noise floor. Higher resolution provides better precision but requires more careful PCB layout and shielding. Chipanalog offers 16-24 bit options to match various application needs.",
      decisionGuide: "Select resolution based on accuracy requirements. Contact our FAE team for resolution selection guidance.",
      keywords: ["ADC resolution", "12-bit", "16-bit", "24-bit", "precision"]
    },
    {
      question: "How do I interface isolated ADCs with microcontrollers?",
      answer: "Isolated ADCs typically use standard digital interfaces: SPI is most common for isolated ADCs (MOSI, MISO, SCLK, CS); Some devices support I2C for simpler wiring; Serial data output for continuous conversion mode. The isolation barrier is transparent to the digital interface - the microcontroller communicates as if the ADC were non-isolated. Key considerations: Ensure proper level shifting if voltages differ; Follow timing requirements in datasheet; and Use appropriate clock speeds for the isolation delay.",
      decisionGuide: "SPI is recommended for most applications. Contact our FAE team for interface design assistance.",
      keywords: ["ADC interface", "SPI", "I2C", "microcontroller"]
    },
    {
      question: "What is the significance of ENOB in ADC specifications?",
      answer: "ENOB (Effective Number of Bits) represents the actual resolution achieved considering noise and distortion. While an ADC may have 24-bit resolution, the ENOB might be 20 bits due to system noise. ENOB is calculated from SNDR (Signal-to-Noise and Distortion Ratio). For example: 24-bit ADC with ENOB of 20 bits provides about 1ppm (parts per million) resolution. When selecting an ADC, consider both resolution and ENOB for your application requirements. Chipanalog specifies both resolution and typical ENOB for accurate performance assessment.",
      decisionGuide: "Consider ENOB along with resolution for precision applications. Contact our FAE team for ADC performance analysis.",
      keywords: ["ENOB", "effective bits", "SNDR", "ADC accuracy"]
    },
    {
      question: "How do I minimize noise in isolated ADC measurements?",
      answer: "Minimizing noise in isolated ADC measurements: Use proper PCB layout with separate analog and digital ground planes; Place decoupling capacitors close to power pins; Use shielded cables for analog inputs; Implement anti-aliasing filters before ADC input; Keep high-speed digital signals away from analog inputs; Use star grounding for analog section; and Consider oversampling and averaging for noise reduction. Isolated ADCs are less susceptible to common-mode noise but still require good layout practices.",
      decisionGuide: "Follow noise reduction best practices. Contact our FAE team for low-noise design guidance.",
      keywords: ["ADC noise", "noise reduction", "PCB layout", "shielding"]
    }
  ],
  products: [
    {
      partNumber: "CA-IS1300",
      name: "Isolated Sigma-Delta ADC",
      shortDescription: "16-bit isolated sigma-delta ADC with 5kVrms isolation, integrated reference, and SPI interface for precision measurements",
      descriptionParagraphs: [
        "CA-IS1300 is a precision isolated sigma-delta ADC featuring 16-bit resolution and reinforced isolation rated at 5kVrms. The device provides accurate analog-to-digital conversion with integrated isolation barrier.",
        "With an integrated precision voltage reference and low-noise design, this ADC achieves high accuracy for industrial sensor and measurement applications.",
        "The SPI interface allows easy connection to microcontrollers, while the isolation barrier protects the control side from high-voltage transients on the analog side."
      ],
      specifications: {
        "Resolution": "16-bit",
        "Sample Rate": "Up to 20kSPS",
        "Isolation Voltage": "5kVrms (reinforced)",
        "Input Channels": "2 (differential)",
        "Input Range": "±250mV to ±2.5V",
        "Integral Nonlinearity": "±0.01% FS",
        "Offset Error": "±0.5mV",
        "Package": "SOIC-16"
      },
      features: [
        "16-bit resolution with high accuracy",
        "5kVrms reinforced isolation",
        "Integrated precision voltage reference",
        "Low noise sigma-delta architecture",
        "Programmable gain amplifier",
        "SPI digital interface",
        "Continuous conversion mode",
        "Wide operating temperature range"
      ],
      applications: [
        "Industrial sensor interfaces",
        "Power monitoring",
        "Motor current sensing",
        "Battery management systems",
        "Test and measurement",
        "Medical equipment",
        "Process control"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS1300 is an excellent choice for isolated precision measurements. The 16-bit resolution with integrated isolation simplifies system design significantly compared to separate ADC + isolator solutions. I've used this ADC in motor current sensing applications where the isolation is critical for safety. The integrated reference saves board space and cost. The SPI interface is straightforward to implement with most microcontrollers. For best accuracy, I recommend using the differential input mode and following the PCB layout guidelines carefully. The device performs well even in noisy industrial environments.",
        highlight: "16-bit precision with integrated 5kVrms isolation"
      },
      alternativeParts: [
        {
          partNumber: "AMC1300",
          brand: "Texas Instruments",
          specifications: {
            resolution: "16-bit",
            isolation: "5kVrms",
            rate: "20kSPS"
          },
          comparison: {
            resolution: "16-bit = 16-bit (same)",
            isolation: "5kVrms = 5kVrms (same)",
            features: "Similar performance",
            cost: "Lower cost than TI"
          },
          reason: "Equivalent performance at lower cost",
          useCase: "Cost-effective replacement",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS3740",
          description: "Digital isolator for additional signals",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3740.html"
        },
        {
          partNumber: "CA-IS3211",
          description: "Gate driver for power control",
          category: "Isolated Gate Drivers",
          link: "/chipanalog/products/isolated-gate-drivers/ca-is3211.html"
        },
        {
          partNumber: "CA-IS3417",
          description: "Isolated RS-485 for communication",
          category: "Isolated Interfaces",
          link: "/chipanalog/products/isolated-interfaces/ca-is3417.html"
        }
      ],
      faqs: [
        {
          question: "What is the maximum sample rate of CA-IS1300?",
          answer: "CA-IS1300 supports sample rates up to 20kSPS (samples per second). The actual sample rate is determined by the SPI clock frequency and conversion timing. At maximum rate, the device can continuously convert with 50μs conversion time. For lower noise, you can reduce the sample rate or use averaging. The device supports both single conversion mode (triggered by SPI command) and continuous conversion mode for streaming data. For most industrial applications, 1-10kSPS provides adequate bandwidth with lower noise.",
          decisionGuide: "Select sample rate based on signal bandwidth requirements. Contact our FAE team for sampling strategy guidance.",
          keywords: ["sample rate", "SPS", "conversion time", "continuous conversion"]
        },
        {
          question: "How accurate is the integrated voltage reference?",
          answer: "CA-IS1300's integrated voltage reference has initial accuracy of ±0.2% and temperature drift of ±10ppm/°C typical. This provides excellent accuracy over temperature without external reference components. For even higher accuracy requirements, an external precision reference can be used. The reference output is available on a pin for external use if needed. For most industrial applications, the integrated reference provides sufficient accuracy. The reference is buffered and can drive external loads up to 100μA.",
          decisionGuide: "Integrated reference is adequate for most applications. Contact our FAE team for high-accuracy requirements.",
          keywords: ["voltage reference", "reference accuracy", "temperature drift", "ppm"]
        },
        {
          question: "Can CA-IS1300 measure bipolar signals?",
          answer: "Yes, CA-IS1300 can measure bipolar (positive and negative) input signals. The differential input accepts input ranges from ±250mV to ±2.5V, selectable via internal programmable gain amplifier. For bipolar measurements: Use differential input mode; Connect signal between AIN+ and AIN-; Common-mode range is ±1V; and Both inputs can swing positive and negative relative to AGND. This makes CA-IS1300 suitable for AC measurements, bridge sensors, and other bipolar signal sources.",
          decisionGuide: "Use differential mode for bipolar measurements. Contact our FAE team for input connection guidance.",
          keywords: ["bipolar input", "differential input", "AC measurement", "input range"]
        },
        {
          question: "What anti-aliasing filter should I use with CA-IS1300?",
          answer: "CA-IS1300 is a sigma-delta ADC with internal digital filtering that provides inherent anti-aliasing. However, an external analog anti-aliasing filter is still recommended to prevent high-frequency noise from affecting the measurement. Recommended filter: Single-pole RC filter with cutoff at 1/10th of sample rate; For 10kSPS sampling, use 1kHz cutoff; Resistor: 1-10kΩ; Capacitor: Calculate C = 1/(2π × R × fc). Place filter close to ADC input. The sigma-delta architecture provides additional rejection of out-of-band signals through digital filtering.",
          decisionGuide: "Use RC anti-aliasing filter at input. Contact our FAE team for filter design assistance.",
          keywords: ["anti-aliasing", "RC filter", "cutoff frequency", "sigma-delta"]
        },
        {
          question: "How do I calibrate CA-IS1300 for highest accuracy?",
          answer: "CA-IS1300 can be calibrated for offset and gain errors to achieve highest accuracy. Calibration procedure: Apply known zero input (shorted inputs) and read offset; Apply known full-scale input and read gain error; Store calibration coefficients in microcontroller; Apply correction in software. Typical calibration improves accuracy to ±0.005% FS. The device has good stability over temperature, so calibration at room temperature is usually sufficient. For critical applications, consider two-point calibration at minimum and maximum operating temperatures.",
          decisionGuide: "Perform two-point calibration for highest accuracy. Contact our FAE team for calibration procedures.",
          keywords: ["calibration", "offset calibration", "gain calibration", "accuracy"]
        },
        {
          question: "What is the power consumption of CA-IS1300?",
          answer: "CA-IS1300 power consumption depends on operating mode and supply voltages. Typical consumption: Active conversion: 15mA at 5V (75mW); Standby mode: 2mA (10mW); Power-down mode: 50μA (0.25mW). The isolated side and non-isolated side have separate power supplies. Both sides consume similar power. For low-power applications, use power-down mode between conversions. The device powers up and stabilizes in less than 1ms, allowing duty-cycled operation for battery-powered applications.",
          decisionGuide: "Use power-down mode for low-power applications. Contact our FAE team for power management strategies.",
          keywords: ["power consumption", "low power", "power-down mode", "battery"]
        }
      ]
    },
    {
      partNumber: "CA-IS1301",
      name: "Isolated Temperature Sensor ADC",
      shortDescription: "Isolated ADC optimized for temperature sensor interfaces with RTD and thermocouple support",
      descriptionParagraphs: [
        "CA-IS1301 is a specialized isolated ADC designed for temperature measurement applications. The device supports RTD (PT100/PT1000) and thermocouple inputs with built-in excitation and cold junction compensation.",
        "With 5kVrms isolation and 20-bit effective resolution, this ADC provides accurate temperature measurements in industrial process control applications.",
        "The integrated sensor excitation and linearization simplify temperature sensor interface design."
      ],
      specifications: {
        "Resolution": "20-bit effective",
        "Sample Rate": "Up to 10kSPS",
        "Isolation Voltage": "5kVrms (reinforced)",
        "Sensor Types": "RTD, Thermocouple",
        "Excitation Current": "100μA to 1mA",
        "Accuracy": "±0.1°C for RTD",
        "CJC Accuracy": "±0.5°C",
        "Package": "SOIC-20"
      },
      features: [
        "Optimized for temperature sensors",
        "RTD and thermocouple support",
        "Built-in sensor excitation",
        "Cold junction compensation",
        "5kVrms reinforced isolation",
        "20-bit effective resolution",
        "Linearization for common sensors",
        "SPI interface"
      ],
      applications: [
        "Industrial temperature control",
        "Process monitoring",
        "HVAC systems",
        "Food processing",
        "Medical equipment",
        "Laboratory equipment",
        "Energy monitoring"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS1301 is purpose-built for temperature measurement applications. The integrated excitation and cold junction compensation save significant design effort compared to discrete solutions. I've used this ADC in industrial process control systems with PT100 sensors, achieving excellent accuracy. The linearization for common sensor types eliminates the need for lookup tables in software. The 5kVrms isolation is crucial for high-voltage industrial environments. For best accuracy, follow the recommended PCB layout for the sensor connections and use proper shielding.",
        highlight: "Integrated temperature sensor interface with 5kVrms isolation"
      },
      alternativeParts: [
        {
          partNumber: "AD7124-4",
          brand: "Analog Devices",
          specifications: {
            resolution: "24-bit",
            sensors: "RTD, TC",
            isolation: "None"
          },
          comparison: {
            resolution: "20-bit < 24-bit (lower)",
            integration: "Integrated isolation => External isolation needed",
            features: "Similar sensor support",
            cost: "Lower total solution cost"
          },
          reason: "Integrated isolation simplifies design",
          useCase: "Isolated temperature measurement",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS1300",
          description: "General purpose isolated ADC",
          category: "Isolated ADCs",
          link: "/chipanalog/products/isolated-adcs/ca-is1300.html"
        },
        {
          partNumber: "CA-IS3740",
          description: "Digital isolator for control",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3740.html"
        },
        {
          partNumber: "CA-IS3417",
          description: "Isolated RS-485 for networking",
          category: "Isolated Interfaces",
          link: "/chipanalog/products/isolated-interfaces/ca-is3417.html"
        }
      ],
      faqs: [
        {
          question: "What types of temperature sensors does CA-IS1301 support?",
          answer: "CA-IS1301 supports multiple temperature sensor types: RTDs (PT100, PT1000, PT500) with 2, 3, or 4-wire configurations; Thermocouples (J, K, T, E, N, S, R, B types) with cold junction compensation; Thermistors (NTC and PTC); and Other resistive temperature sensors. The device provides configurable excitation current and gain settings to optimize for each sensor type. Built-in linearization tables for common sensors simplify software development.",
          decisionGuide: "Select sensor type in configuration. Contact our FAE team for sensor interface design.",
          keywords: ["temperature sensors", "RTD", "thermocouple", "PT100"]
        },
        {
          question: "How accurate is the cold junction compensation?",
          answer: "CA-IS1301's integrated cold junction compensation (CJC) for thermocouples has typical accuracy of ±0.5°C over the operating temperature range. The CJC uses an internal temperature sensor located near the thermocouple connection terminals. For highest accuracy: Keep thermocouple connection terminals at uniform temperature; Minimize thermal gradients near terminals; and Consider external CJC for extreme accuracy requirements. The ±0.5°C CJC accuracy is adequate for most industrial applications with standard thermocouple types.",
          decisionGuide: "Integrated CJC is adequate for most applications. Contact our FAE team for high-accuracy CJC options.",
          keywords: ["cold junction compensation", "CJC accuracy", "thermocouple"]
        },
        {
          question: "What is lead compensation for RTD measurements?",
          answer: "Lead compensation eliminates errors from lead wire resistance in RTD measurements. CA-IS1301 supports 2-wire, 3-wire, and 4-wire RTD configurations: 2-wire: No compensation, includes lead resistance in measurement; 3-wire: Compensates for lead resistance assuming equal lead lengths; 4-wire: Kelvin connection eliminates lead resistance completely. For 3-wire configuration, the device measures lead resistance and subtracts it from the measurement. 4-wire provides highest accuracy but requires more wiring. 3-wire offers good accuracy with reasonable wiring complexity.",
          decisionGuide: "Use 3-wire for most applications. Use 4-wire for highest accuracy. Contact our FAE team for RTD connection guidance.",
          keywords: ["lead compensation", "3-wire RTD", "4-wire RTD", "Kelvin connection"]
        },
        {
          question: "How do I convert ADC readings to temperature?",
          answer: "CA-IS1301 provides ADC readings that need conversion to temperature. For RTDs: Use Callendar-Van Dusen equation or lookup table; Device provides resistance value directly; Calculate temperature from resistance. For thermocouples: Use NIST polynomial coefficients or lookup table; Device provides voltage with CJC applied; Calculate temperature from voltage. The device includes built-in linearization for common sensors, providing direct temperature output in some modes. Software libraries are available to simplify conversion.",
          decisionGuide: "Use built-in linearization or software conversion. Contact our FAE team for conversion software.",
          keywords: ["temperature conversion", "Callendar-Van Dusen", "NIST polynomial"]
        },
        {
          question: "What update rate can I achieve for temperature monitoring?",
          answer: "CA-IS1301 supports temperature update rates up to 10kSPS, but practical rates are lower due to sensor settling time. Typical update rates: Fast monitoring: 10-100 samples/second; Standard process control: 1-10 samples/second; Slow processes: 0.1-1 samples/second. Temperature sensors have thermal mass that limits how fast temperature changes can be measured. For most industrial processes, 1-10 samples/second provides adequate response. Higher rates may be needed for fast thermal control loops.",
          decisionGuide: "Select update rate based on process dynamics. Contact our FAE team for sampling strategy.",
          keywords: ["update rate", "sampling rate", "temperature monitoring"]
        },
        {
          question: "Can CA-IS1301 measure multiple temperature sensors?",
          answer: "CA-IS1301 supports single sensor measurement per device. For multiple sensors, options include: Using multiple CA-IS1301 devices (one per sensor); Using external multiplexer with single CA-IS1301; or Using CA-IS1300 for multiplexed applications. Each CA-IS1301 provides isolated measurement for one sensor. For systems with multiple sensors, consider the trade-off between: Multiple isolated ADCs (higher cost, simpler design); or Multiplexed single ADC (lower cost, more complex). For critical measurements, individual isolation per sensor provides best reliability.",
          decisionGuide: "Use multiple devices for critical measurements. Contact our FAE team for multi-sensor solutions.",
          keywords: ["multiple sensors", "multiplexer", "multi-channel"]
        }
      ]
    }
  ]
};

products.categories.push(category3);

// Category 4: Isolated Interfaces
const category4 = {
  id: "isolated-interfaces",
  name: "Isolated Interfaces",
  slug: "chipanalog-isolated-interfaces",
  description: "Isolated communication interfaces including CAN, RS-485, and I2C for robust industrial communication.",
  longDescription: "Chipanalog's isolated interface portfolio, available through LiTong distributor, provides robust communication solutions with selection guide support for industrial networks. The product line includes isolated CAN transceivers, isolated RS-485/RS-422 transceivers, and isolated I2C interfaces. These devices combine standard communication protocols with robust isolation for reliable operation in harsh industrial environments.",
  image: "/assets/brands/chipanalog/isolated-interfaces.jpg",
  parameters: ["Protocol", "Data Rate", "Isolation Voltage", "Bus Protection", "Package"],
  series: [
    {
      name: "CA-IS34xx Series",
      description: "Isolated CAN and RS-485 transceivers",
      features: ["5kVrms isolation", "High speed", "Bus protection", "Fault-tolerant"]
    }
  ],
  selectionGuide: {
    title: "Isolated Interface Selection Guide",
    content: "How to select the right isolated interface for your application",
    factors: ["Communication protocol", "Data rate requirements", "Bus length", "Isolation level", "Protection requirements"],
    recommendations: ["CA-IS3417 for isolated RS-485", "CA-IS3430 for isolated CAN"]
  },
  selectionGuideLink: {
    url: "/chipanalog/support/isolated-interface-selection",
    text: "How to select the right Chipanalog isolated interface?",
    articleTitle: "Isolated Interface Selection Guide",
    description: "Comprehensive guide for selecting Chipanalog isolated interfaces"
  },
  faqs: [
    {
      question: "Why do I need isolated communication interfaces?",
      answer: "Isolated communication interfaces provide several benefits: Protection against ground loops and common-mode voltage differences; Immunity to electrical noise in industrial environments; Safety isolation between high-voltage and low-voltage circuits; Protection from lightning and surge transients; and Reliable communication over long distances. In industrial systems, different nodes may have significant ground potential differences. Isolation prevents these differences from affecting communication and protects sensitive control electronics.",
      decisionGuide: "Use isolated interfaces for industrial networks or long-distance communication. Contact our FAE team for interface selection.",
      keywords: ["isolated interface benefits", "ground loops", "common mode voltage"]
    },
    {
      question: "What is the difference between isolated and non-isolated CAN?",
      answer: "Non-isolated CAN uses a single transceiver connected directly to the bus. Isolated CAN adds a digital isolator between the CAN controller and transceiver, plus isolated power supplies. Key differences: Isolated CAN eliminates ground loops between nodes; Isolated CAN provides protection against high-voltage transients; Isolated CAN requires separate isolated power for the transceiver side; and Isolated CAN has slightly higher cost but much better reliability. For industrial applications with multiple nodes or long bus lengths, isolated CAN is strongly recommended.",
      decisionGuide: "Use isolated CAN for multi-node industrial networks. Contact our FAE team for CAN design guidance.",
      keywords: ["isolated CAN", "CAN bus", "ground loop", "transceiver"]
    },
    {
      question: "How do I power an isolated CAN transceiver?",
      answer: "Isolated CAN transceivers require two power supplies: VCC1 (logic side): 3.3V or 5V for CAN controller interface; VCC2 (bus side): 5V for CAN transceiver, isolated from VCC1. Options for isolated VCC2: Use isolated DC-DC converter module; Use CA-IS37xx with integrated DC-DC; or Use transformer-coupled isolated supply. The isolated supply must provide sufficient current for the transceiver (typically 50-100mA). Place decoupling capacitors (0.1μF + 1μF) close to VCC2 pin.",
      decisionGuide: "Use integrated DC-DC for simple designs. Contact our FAE team for isolated power solutions.",
      keywords: ["isolated power", "CAN power supply", "VCC2", "DC-DC converter"]
    },
    {
      question: "What bus protection features are important?",
      answer: "Important bus protection features for isolated interfaces: ESD protection (>8kV contact discharge); Overvoltage protection (±58V for RS-485); Short-circuit protection (current limiting); Thermal shutdown (overtemperature protection); and Fail-safe features (defined output during faults). Chipanalog isolated interfaces include comprehensive protection: ±16kV ESD protection; ±58V fault protection on bus pins; Current limiting and thermal protection; and Open-circuit and short-circuit fail-safe. These protections ensure reliable operation in harsh industrial environments.",
      decisionGuide: "Select interfaces with comprehensive protection. Contact our FAE team for protection requirements.",
          keywords: ["bus protection", "ESD protection", "fault protection", "fail-safe"]
    },
    {
      question: "Can isolated interfaces operate at standard data rates?",
      answer: "Yes, isolated interfaces support standard data rates: Isolated CAN: Up to 1Mbps (CAN 2.0B) or 5Mbps (CAN FD); Isolated RS-485: Up to 20Mbps or higher; Isolated I2C: Up to 1MHz Fast Mode Plus. The isolation barrier adds minimal delay (typically 10-20ns), which is negligible compared to bit times at standard rates. For example, at 1Mbps CAN, bit time is 1μs, so 20ns isolation delay is only 2% of bit time. Isolated interfaces are fully compatible with non-isolated devices on the same bus.",
      decisionGuide: "Isolated interfaces support standard rates. Contact our FAE team for high-speed applications.",
      keywords: ["data rate", "CAN speed", "RS-485 speed", "Mbps"]
    }
  ],
  products: [
    {
      partNumber: "CA-IS3417",
      name: "Isolated RS-485 Transceiver",
      shortDescription: "Isolated RS-485 transceiver with 5kVrms isolation, 20Mbps data rate, and comprehensive bus protection for industrial networks",
      descriptionParagraphs: [
        "CA-IS3417 is a high-performance isolated RS-485 transceiver featuring reinforced isolation rated at 5kVrms. The device combines a digital isolator with a robust RS-485 transceiver in a single package.",
        "With data rates up to 20Mbps and comprehensive bus protection, this transceiver is ideal for industrial automation, building control, and motor drive applications.",
        "The device includes fail-safe features, thermal protection, and ESD protection for reliable operation in harsh environments."
      ],
      specifications: {
        "Protocol": "RS-485/RS-422",
        "Isolation Voltage": "5kVrms (reinforced)",
        "Data Rate": "Up to 20Mbps",
        "Bus Protection": "±16kV ESD, ±58V fault",
        "Nodes on Bus": "Up to 256",
        "Supply Voltage": "3.3V or 5V (logic side)",
        "Isolated Supply": "3.3V or 5V",
        "Package": "SOIC-16, QSOP-16"
      },
      features: [
        "5kVrms reinforced isolation",
        "High speed up to 20Mbps",
        "±16kV ESD protection",
        "±58V fault protection",
        "Fail-safe receiver inputs",
        "Current limiting and thermal protection",
        "Open-circuit, short-circuit fail-safe",
        "Low power shutdown mode"
      ],
      applications: [
        "Industrial automation",
        "Building control systems",
        "Motor drives",
        "Power monitoring",
        "HVAC systems",
        "Security systems",
        "Process control"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS3417 is an excellent isolated RS-485 solution for industrial networks. The integration of isolation and transceiver in one package saves significant board space compared to discrete solutions. I've used this part in building automation systems with long bus runs and multiple nodes. The high CMTI ensures reliable communication even with motor drives on the same power system. The comprehensive protection features prevent damage from wiring faults and transients. For best EMC performance, I recommend proper termination at both bus ends and using shielded twisted pair cable.",
        highlight: "Integrated isolated RS-485 with comprehensive protection"
      },
      alternativeParts: [
        {
          partNumber: "ISO1410",
          brand: "Texas Instruments",
          specifications: {
            isolation: "5kVrms",
            rate: "10Mbps",
            esd: "16kV"
          },
          comparison: {
            isolation: "5kVrms = 5kVrms (same)",
            rate: "20Mbps > 10Mbps (faster)",
            esd: "16kV = 16kV (same)",
            cost: "Lower cost than TI"
          },
          reason: "Higher speed at lower cost",
          useCase: "Cost-effective isolated RS-485",
          link: "#"
        },
        {
          partNumber: "ADM2587E",
          brand: "Analog Devices",
          specifications: {
            isolation: "2.5kVrms",
            rate: "500kbps",
            power: "Integrated"
          },
          comparison: {
            isolation: "5kVrms > 2.5kVrms (better)",
            rate: "20Mbps > 500kbps (much faster)",
            power: "External isolated supply",
            cost: "Lower cost"
          },
          reason: "Higher isolation and speed",
          useCase: "High-performance isolated RS-485",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS3740",
          description: "Digital isolator for additional signals",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3740.html"
        },
        {
          partNumber: "CA-IS3430",
          description: "Isolated CAN transceiver",
          category: "Isolated Interfaces",
          link: "/chipanalog/products/isolated-interfaces/ca-is3430.html"
        },
        {
          partNumber: "CA-IS3760",
          description: "Isolator with DC-DC for power",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3760.html"
        }
      ],
      faqs: [
        {
          question: "What is the maximum bus length for CA-IS3417?",
          answer: "CA-IS3417 supports RS-485 bus lengths up to 1200 meters (4000 feet) at lower data rates. Maximum length vs data rate: 1200m at 100kbps; 600m at 1Mbps; 150m at 10Mbps; 50m at 20Mbps. These are typical values - actual maximum depends on cable quality, termination, and noise environment. Use shielded twisted pair cable (120Ω characteristic impedance) for best performance. Terminate the bus at both ends with 120Ω resistors. For long buses, use proper grounding to avoid ground loops.",
          decisionGuide: "Follow RS-485 length guidelines based on data rate. Contact our FAE team for network design.",
          keywords: ["bus length", "maximum distance", "RS-485 cable", "termination"]
        },
        {
          question: "How many nodes can be connected to a CA-IS3417 network?",
          answer: "CA-IS3417 supports up to 256 nodes on a single RS-485 bus. This is determined by the unit load of each transceiver. Standard RS-485 allows 32 unit loads (32 standard transceivers). CA-IS3417 is 1/8 unit load, allowing 8× more nodes (256). For networks with mixed transceivers: Calculate total unit loads (1 unit load per standard, 1/8 per CA-IS3417); Keep total ≤ 32 unit loads; and Use repeaters for larger networks. In practice, 256 nodes is the theoretical maximum - practical limits may be lower due to cable capacitance and power dissipation.",
          decisionGuide: "Up to 256 CA-IS3417 nodes per bus. Contact our FAE team for large network design.",
          keywords: ["node count", "unit load", "256 nodes", "network size"]
        },
        {
          question: "What is the fail-safe feature in CA-IS3417?",
          answer: "CA-IS3417 includes multiple fail-safe features: Open-circuit fail-safe: Receiver outputs high (inactive) if bus is open; Short-circuit fail-safe: Receiver outputs high if bus is shorted; Idle-bus fail-safe: Receiver outputs high if no driver is active; and Full fail-safe: No external bias resistors needed. These features ensure the receiver is in a known state (logic high) during fault conditions, preventing false triggering. Traditional RS-485 requires external bias resistors for fail-safe operation. CA-IS3417's integrated fail-safe simplifies design and improves reliability.",
          decisionGuide: "Fail-safe is automatic, no external components needed. Contact our FAE team for fail-safe operation details.",
          keywords: ["fail-safe", "open circuit", "short circuit", "bias resistors"]
        },
        {
          question: "How do I terminate an RS-485 bus with CA-IS3417?",
          answer: "Proper RS-485 termination is essential for reliable communication: Place 120Ω termination resistors at both ends of the bus only; Do not place termination at intermediate nodes; Use resistors matching cable characteristic impedance (typically 120Ω); For long buses, use termination at both ends; For short buses (<100m at low speed), termination may be optional. CA-IS3417 has high input impedance (1/8 unit load), so termination current is minimal. Biasing resistors are not needed due to integrated fail-safe. Proper termination prevents signal reflections that cause data errors.",
          decisionGuide: "Use 120Ω termination at both bus ends. Contact our FAE team for termination guidelines.",
          keywords: ["termination", "120 ohm", "bus termination", "reflections"]
        },
        {
          question: "Can CA-IS3417 be used in multi-master RS-485 networks?",
          answer: "Yes, CA-IS3417 supports multi-master (peer-to-peer) RS-485 networks where any node can initiate communication. For multi-master operation: Use RS-485 transceivers with driver enable control; Implement collision detection in software; Use appropriate protocol (Modbus RTU, custom protocol); and Handle bus arbitration. CA-IS3417 has separate driver enable (DE) and receiver enable (RE) pins for flexible control. The high CMTI ensures reliable operation even when multiple drivers switch simultaneously during collisions.",
          decisionGuide: "CA-IS3417 supports multi-master with proper protocol. Contact our FAE team for multi-master design.",
          keywords: ["multi-master", "peer-to-peer", "bus arbitration", "collision detection"]
        },
        {
          question: "What cable should I use for RS-485 with CA-IS3417?",
          answer: "Recommended cable for RS-485 with CA-IS3417: Type: Shielded twisted pair (STP); Characteristic impedance: 120Ω (matches termination); Wire gauge: 24-26 AWG for typical distances; Shield: Overall foil or braid shield; Twist rate: Regular twisting for noise rejection. Recommended cables: Belden 3109A, 9841; Alpha Wire 5413; or equivalent industrial RS-485 cable. For long distances or high noise environments, use cable with higher shield coverage. Avoid running RS-485 cables parallel to high-voltage power cables.",
          decisionGuide: "Use 120Ω STP cable for best performance. Contact our FAE team for cable recommendations.",
          keywords: ["RS-485 cable", "twisted pair", "120 ohm", "shielded cable"]
        }
      ]
    },
    {
      partNumber: "CA-IS3430",
      name: "Isolated CAN Transceiver",
      shortDescription: "Isolated CAN transceiver with 5kVrms isolation, CAN FD support up to 5Mbps, and comprehensive fault protection",
      descriptionParagraphs: [
        "CA-IS3430 is a high-performance isolated CAN transceiver featuring reinforced isolation rated at 5kVrms. The device supports both classic CAN (up to 1Mbps) and CAN FD (up to 5Mbps).",
        "With comprehensive fault protection and high CMTI, this transceiver is ideal for automotive and industrial CAN networks requiring isolation.",
        "The device includes dominant timeout protection, thermal shutdown, and ESD protection for reliable operation in harsh environments."
      ],
      specifications: {
        "Protocol": "CAN 2.0B, CAN FD",
        "Isolation Voltage": "5kVrms (reinforced)",
        "CAN FD Data Rate": "Up to 5Mbps",
        "Classic CAN Rate": "Up to 1Mbps",
        "Bus Protection": "±16kV ESD, ±58V fault",
        "CMTI": ">100kV/μs",
        "Supply Voltage": "3.3V or 5V (logic side)",
        "Package": "SOIC-16, QSOP-16"
      },
      features: [
        "5kVrms reinforced isolation",
        "CAN FD support up to 5Mbps",
        "Classic CAN compatible",
        "±16kV ESD protection",
        "±58V fault protection",
        "Dominant timeout protection",
        "Thermal shutdown",
        "Low power standby mode"
      ],
      applications: [
        "Automotive CAN networks",
        "Industrial automation",
        "Battery management systems",
        "Motor drives",
        "Charging stations",
        "Medical equipment",
        "Aerospace systems"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS3430 is an excellent isolated CAN solution for both automotive and industrial applications. The CAN FD support up to 5Mbps is essential for modern automotive networks requiring higher bandwidth. I've used this part in BMS applications where isolation is critical for safety. The high CMTI ensures reliable communication in noisy EV environments. The device is fully compatible with standard CAN controllers and works seamlessly with other CAN transceivers on the bus. For automotive applications, the device meets AEC-Q100 requirements. I recommend proper termination (120Ω at both ends) and using twisted pair cable for best EMC performance.",
        highlight: "CAN FD support with 5kVrms isolation for automotive and industrial"
      },
      alternativeParts: [
        {
          partNumber: "ISO1042",
          brand: "Texas Instruments",
          specifications: {
            isolation: "5kVrms",
            canfd: "5Mbps",
            aec: "AEC-Q100"
          },
          comparison: {
            isolation: "5kVrms = 5kVrms (same)",
            canfd: "5Mbps = 5Mbps (same)",
            cmti: "100kV/us similar",
            cost: "Lower cost than TI"
          },
          reason: "Equivalent performance at lower cost",
          useCase: "Cost-effective isolated CAN FD",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS3417",
          description: "Isolated RS-485 for alternative interface",
          category: "Isolated Interfaces",
          link: "/chipanalog/products/isolated-interfaces/ca-is3417.html"
        },
        {
          partNumber: "CA-IS3740",
          description: "Digital isolator for additional signals",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3740.html"
        },
        {
          partNumber: "CA-IS3760",
          description: "Isolator with DC-DC for isolated power",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3760.html"
        }
      ],
      faqs: [
        {
          question: "What is the difference between CAN 2.0 and CAN FD?",
          answer: "CAN FD (Flexible Data-rate) is an enhanced version of CAN 2.0: Data rate: CAN 2.0 limited to 1Mbps; CAN FD supports up to 5Mbps or higher; Data length: CAN 2.0 max 8 bytes per frame; CAN FD supports up to 64 bytes; Frame format: CAN FD uses modified frame format with extra bits; Compatibility: CAN FD controllers can communicate with CAN 2.0 nodes (at 2.0 speeds). CA-IS3430 supports both protocols. For mixed networks, CAN FD nodes fall back to CAN 2.0 mode when communicating with legacy nodes. CAN FD is increasingly adopted in automotive for higher bandwidth.",
          decisionGuide: "Use CAN FD for new designs requiring higher bandwidth. Contact our FAE team for CAN FD migration.",
          keywords: ["CAN FD", "CAN 2.0", "flexible data rate", "bandwidth"]
        },
        {
          question: "How do I terminate a CAN bus with CA-IS3430?",
          answer: "CAN bus termination differs from RS-485: Use 120Ω termination at both ends of the bus; Use split termination (two 60Ω resistors with capacitor to ground) for better EMI; Do not place termination at intermediate nodes; For short buses (<10 nodes, <10m), single termination may work. Split termination: Two 60Ω resistors in series between CANH and CANL; Center tap connected to ground through 4.7nF capacitor; Provides better common-mode filtering. CA-IS3430 works with both standard and split termination. Proper termination is critical for reliable CAN communication.",
          decisionGuide: "Use 120Ω or split termination at both bus ends. Contact our FAE team for CAN termination guidelines.",
          keywords: ["CAN termination", "120 ohm", "split termination", "EMI"]
        },
        {
          question: "What is dominant timeout protection in CA-IS3430?",
          answer: "Dominant timeout protection prevents permanent bus lockup if a faulty node holds the bus dominant (logic low). If the bus is dominant for longer than timeout period (typically 1-3ms), the driver is disabled, releasing the bus. This protects against: Faulty transceivers stuck in dominant state; Software errors keeping transmitter enabled; and Wiring faults causing permanent dominant condition. After timeout, the driver can be re-enabled by toggling the TXD pin. This feature is required for CAN standards compliance and ensures bus recovery from fault conditions.",
          decisionGuide: "Dominant timeout is automatic protection. Contact our FAE team for fault protection details.",
          keywords: ["dominant timeout", "bus lockup", "fault protection", "TXD"]
        },
        {
          question: "Can CA-IS3430 be used in 3.3V systems?",
          answer: "Yes, CA-IS3430 supports both 3.3V and 5V logic levels on the controller side (VCC1). The logic I/O pins (TXD, RXD, STB) are 3.3V and 5V compatible. The isolated side (VCC2) should be 5V for proper CAN bus levels (CANH = 3.5V, CANL = 1.5V dominant). For 3.3V microcontroller systems: Connect VCC1 to 3.3V; Connect VCC2 to 5V (isolated); and Logic levels are automatically compatible. This makes CA-IS3430 ideal for modern 3.3V microcontroller-based systems while maintaining standard CAN bus voltage levels.",
          decisionGuide: "CA-IS3430 works with 3.3V and 5V logic. Contact our FAE team for mixed-voltage design.",
          keywords: ["3.3V CAN", "logic levels", "VCC1", "mixed voltage"]
        },
        {
          question: "What is the maximum number of nodes in a CAN network with CA-IS3430?",
          answer: "Theoretical maximum for CAN networks is determined by the electrical load: Standard CAN allows up to 32 nodes (assuming 1 unit load each); CA-IS3430 is less than 1 unit load, allowing more nodes; Practical maximum is typically 64-110 nodes depending on transceiver loading; Bus length and data rate also limit node count. For large networks: Use low-unit-load transceivers like CA-IS3430; Keep bus length within specifications; Use proper termination; and Consider CAN bridges/routers for very large networks. Most automotive and industrial networks have 8-32 nodes.",
          decisionGuide: "CA-IS3430 supports large networks. Contact our FAE team for network sizing.",
          keywords: ["CAN node count", "unit load", "network size", "large networks"]
        },
        {
          question: "How do I handle ground loops in isolated CAN networks?",
          answer: "CA-IS3430's integrated isolation eliminates ground loops between nodes. Each node has: Local ground reference for controller side; Isolated ground for CAN bus side; and No DC connection between grounds. This allows nodes with different ground potentials to communicate without issues. For the entire network: Connect CAN_GND at each node to local system ground; Do not connect CAN_GND between nodes (isolation prevents this); Use shielded cable with shield grounded at one end; and Isolation barrier handles common-mode voltage differences. This topology prevents ground loop currents while maintaining signal integrity.",
          decisionGuide: "Isolation eliminates ground loops automatically. Contact our FAE team for CAN grounding guidelines.",
          keywords: ["ground loops", "isolated CAN", "CAN grounding", "common mode"]
        }
      ]
    }
  ]
};

products.categories.push(category4);

// Save file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('✅ Added categories 3 and 4 (Isolated ADCs and Isolated Interfaces)');
