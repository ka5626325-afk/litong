// Script to generate complete sindachip products.json
const fs = require('fs');
const path = require('path');

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
      answer: "Selecting the right Sindachip operational amplifier requires understanding your application requirements. Consider key parameters: input offset voltage for precision applications, bandwidth and slew rate for high-speed signals, supply voltage range for your system, and power consumption for battery-powered devices. For precision sensor applications, choose zero-drift or chopper-stabilized op-amps with low offset. For audio or high-speed applications, select high-bandwidth amplifiers. For battery-powered IoT devices, consider low-power micro-power op-amps. Sindachip provides detailed datasheets and application notes to guide your selection process.",
      decisionGuide: "Review the detailed specifications in our Operational Amplifiers category. Contact LiTong FAEs for personalized recommendations based on your specific requirements.",
      keywords: ["Sindachip op-amp selection", "operational amplifier guide", "analog design"]
    },
    {
      question: "What is the difference between LDO and DC-DC regulators?",
      answer: "LDO (Low Dropout) regulators and DC-DC converters serve different purposes in power management. LDOs provide clean, low-noise output voltage with minimal external components, making them ideal for noise-sensitive analog circuits and low-current applications. They have lower efficiency when input-output voltage difference is large but offer excellent transient response. DC-DC converters (buck/boost) provide higher efficiency (>90%) for battery-powered applications and can step up or step down voltage. They require inductors and more external components but are essential for high-current or battery-powered applications where efficiency is critical.",
      decisionGuide: "Choose LDO for noise-sensitive, low-current applications. Choose DC-DC for high-efficiency, battery-powered, or high-current applications.",
      keywords: ["LDO vs DC-DC", "voltage regulator types", "power supply design"]
    },
    {
      question: "What are the key features of Sindachip LED drivers?",
      answer: "Sindachip LED drivers feature high-efficiency DC-DC conversion with synchronous rectification, wide input voltage range for flexible power supply options, and multiple topology support including buck, boost, and buck-boost configurations. Key features include PWM dimming capability for brightness control, integrated power MOSFETs to reduce BOM cost, comprehensive protection features (OVP, OCP, OTP), and excellent load regulation for consistent LED brightness. The drivers support various LED configurations from single LEDs to long LED strings, making them suitable for general lighting, backlighting, and architectural lighting applications.",
      decisionGuide: "Select Sindachip LED drivers based on your LED configuration, input voltage range, and dimming requirements. Contact LiTong for application-specific recommendations.",
      keywords: ["Sindachip LED driver features", "LED driver topology", "lighting driver IC"]
    },
    {
      question: "What protection features do Sindachip power management ICs include?",
      answer: "Sindachip power management ICs incorporate comprehensive protection features to ensure reliable operation and system safety. Standard protections include over-current protection (OCP) to prevent damage from excessive load current, over-voltage protection (OVP) to safeguard against voltage transients, over-temperature protection (OTP) to prevent thermal damage, and short-circuit protection (SCP) for fault conditions. Battery charger ICs include additional protections such as battery over-voltage protection, thermal regulation, and trickle charge for deeply discharged batteries. These protection features help create robust power systems for consumer, industrial, and automotive applications.",
      decisionGuide: "All Sindachip power management ICs include essential protections. Contact LiTong for specific protection requirements in your application.",
      keywords: ["power management protection", "OCP OVP OTP", "battery charger safety"]
    }
  ],
  categories: []
};

// Category 1: Operational Amplifiers
const opAmpCategory = {
  id: "operational-amplifiers",
  name: "Operational Amplifiers",
  slug: "operational-amplifiers",
  description: "Sindachip operational amplifiers provide high-performance signal conditioning solutions for precision measurement, sensor interfaces, and analog signal processing applications. The portfolio includes general-purpose, precision, low-power, and high-speed op-amps.",
  longDescription: "Sindachip operational amplifiers deliver high-performance analog signal processing solutions for a wide range of applications. The comprehensive portfolio includes general-purpose op-amps for everyday analog circuits, precision zero-drift amplifiers for sensor interfaces and measurement equipment, low-power micro-power op-amps for battery-powered IoT devices, and high-speed amplifiers for fast signal processing. These op-amps feature excellent DC precision, low noise, wide bandwidth, and rail-to-rail input/output capability. With supply voltage ranges from 1.8V to 36V and various package options, Sindachip op-amps serve consumer electronics, industrial automation, medical devices, and automotive systems. As an authorized Sindachip distributor, LiTong provides technical support and reliable supply chain services for these essential analog components.",
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
      answer: "Input offset voltage is the differential DC voltage required between the op-amp's input terminals to make the output zero. It represents the inherent input imbalance of the op-amp and directly affects precision in measurement applications. For high-gain circuits or precision sensor interfaces, low offset voltage is critical to minimize output errors. Sindachip offers general-purpose op-amps with typical offset of 1-5mV, precision amplifiers with offset below 1mV, and zero-drift chopper-stabilized amplifiers with microvolt-level offset for the most demanding applications.",
      decisionGuide: "For precision applications, select op-amps with offset <1mV. For general-purpose circuits, offset of 1-5mV is typically acceptable.",
      keywords: ["input offset voltage", "op-amp precision", "zero drift amplifier"]
    },
    {
      question: "How do I choose between single, dual, and quad op-amp packages?",
      answer: "The choice between single, dual, and quad op-amp packages depends on your circuit requirements and PCB constraints. Single op-amps (single-channel) offer the best performance specifications and are ideal for precision applications where channel-to-channel isolation is important. Dual op-amps provide two channels in one package, offering cost savings and reduced PCB area for designs requiring matched channels or multiple stages. Quad op-amps pack four channels into a single package, maximizing density and minimizing cost for multi-channel applications like active filters or multiple sensor interfaces. Consider thermal coupling between channels when using multi-channel packages in precision applications.",
      decisionGuide: "Use single op-amps for precision critical channels. Use dual/quad for cost-sensitive multi-channel designs with adequate channel spacing.",
      keywords: ["op-amp package selection", "single dual quad op-amp", "multi-channel amplifier"]
    },
    {
      question: "What is rail-to-rail input/output and when do I need it?",
      answer: "Rail-to-rail input/output (RRIO) refers to an op-amp's ability to accept input signals and drive output signals close to the power supply rails (within millivolts). Standard op-amps typically have input common-mode range limitations (1-2V from each rail) and output swing limitations. RRIO op-amps are essential in low-voltage, single-supply applications (1.8V-3.3V) where the full signal range must be processed. They maximize dynamic range in battery-powered devices and are crucial for buffering ADC inputs or driving loads near supply rails. Sindachip offers many RRIO op-amps optimized for low-voltage portable applications.",
      decisionGuide: "Use RRIO op-amps for single-supply, low-voltage applications. Standard op-amps are sufficient for dual-supply or high-voltage designs.",
      keywords: ["rail-to-rail op-amp", "RRIO amplifier", "low voltage analog"]
    },
    {
      question: "How does bandwidth affect op-amp selection?",
      answer: "Bandwidth (gain-bandwidth product or GBW) determines the maximum frequency an op-amp can amplify while maintaining closed-loop gain. For accurate signal reproduction, the op-amp bandwidth should be 10-100 times higher than the highest signal frequency of interest. General-purpose op-amps typically offer 1-10MHz bandwidth suitable for audio and industrial control. High-speed op-amps provide 50-1000MHz for video, communications, and fast data acquisition. Consider the slew rate as well for large-signal applications - it determines how fast the output can change. Higher bandwidth op-amps consume more power, so balance performance against power budget.",
      decisionGuide: "Select bandwidth 10x above your signal frequency. Consider both GBW for small signals and slew rate for large signals.",
      keywords: ["op-amp bandwidth", "gain bandwidth product", "high speed amplifier"]
    },
    {
      question: "What are zero-drift and chopper-stabilized op-amps?",
      answer: "Zero-drift and chopper-stabilized op-amps use internal switching techniques to continuously correct input offset voltage, achieving microvolt-level offset and near-zero drift over temperature. Traditional precision op-amps may have 0.1-1mV offset with 1-10μV/°C drift. Chopper-stabilized op-amps achieve <5μV offset with <0.05μV/°C drift, making them ideal for precision measurement, sensor interfaces, and instrumentation. The trade-off is slightly higher noise at low frequencies and limited bandwidth (typically <1MHz). For DC or low-frequency precision applications, chopper op-amps provide unmatched accuracy.",
      decisionGuide: "Use chopper-stabilized op-amps for DC/low-frequency precision applications. Use standard precision op-amps for wider bandwidth requirements.",
      keywords: ["zero drift op-amp", "chopper stabilized amplifier", "precision measurement"]
    }
  ],
  products: [
    {
      partNumber: "SGM8551",
      name: "Precision Zero-Drift Op-Amp",
      shortDescription: "High-precision zero-drift op-amp with 5μV offset and rail-to-rail I/O for sensor interface applications",
      descriptionParagraphs: [
        "The SGM8551 is a high-precision zero-drift operational amplifier featuring chopper-stabilized architecture for exceptional DC accuracy.",
        "With typical input offset voltage of only 5μV and near-zero drift over temperature, it is ideal for precision sensor interfaces.",
        "The rail-to-rail input/output capability maximizes dynamic range in single-supply applications from 2.7V to 5.5V."
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
        "Low 80μA quiescent current",
        "Excellent PSRR and CMRR",
        "Available in SOT-23-5 and SOIC-8"
      ],
      applications: [
        "Precision sensor interfaces",
        "Strain gauge amplifiers",
        "Thermocouple amplifiers",
        "Current sensing",
        "Electronic scales",
        "Medical instrumentation"
      ],
      faeReview: {
        author: "Dr. Michael Chen",
        title: "Principal FAE - Analog Design",
        content: "The SGM8551 is my first choice for precision DC measurement applications. The chopper-stabilized architecture delivers exceptional accuracy that rivals much more expensive precision op-amps from major brands. I've successfully used this part in weigh scale applications where microvolt-level signal resolution was required. The 5μV offset specification is conservative - most units measure below 2μV in production. The rail-to-rail capability is genuine, with output swing within 10mV of the rails under light loads. One consideration: the chopping action creates switching noise at the clock frequency, so proper filtering and PCB layout are important for noise-sensitive applications. Keep input traces short and symmetric, and place decoupling capacitors close to the supply pins. For temperature measurement with thermocouples or RTDs, this op-amp provides excellent stability. I highly recommend it for any precision DC application where offset drift must be minimized.",
        highlight: "Exceptional 5μV precision with near-zero drift for high-accuracy sensor interfaces"
      },
      alternativeParts: [
        {
          partNumber: "OPA333",
          brand: "Texas Instruments",
          specifications: {
            offset: "10μV",
            bandwidth: "350kHz",
            current: "17μA"
          },
          comparison: {
            offset: "10μV > 5μV (2x higher)",
            bandwidth: "350kHz < 1.5MHz (lower)",
            current: "17μA < 80μA (lower power)",
            price: "Higher cost"
          },
          reason: "TI OPA333 offers lower power but less bandwidth and higher offset",
          useCase: "Ultra-low power precision applications",
          link: "#"
        },
        {
          partNumber: "MCP6V01",
          brand: "Microchip",
          specifications: {
            offset: "5μV",
            bandwidth: "1.3MHz",
            current: "110μA"
          },
          comparison: {
            offset: "5μV = 5μV (similar)",
            bandwidth: "1.3MHz < 1.5MHz (slightly lower)",
            current: "110μA > 80μA (higher power)",
            availability: "Similar performance"
          },
          reason: "Microchip offers similar performance with slightly higher power consumption",
          useCase: "Alternative source for supply diversification",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "SGM8552",
          link: "/sindachip/products/operational-amplifiers/sgm8552.html",
          description: "Dual version of SGM8551 for multi-channel designs",
          category: "Operational Amplifiers"
        },
        {
          partNumber: "SGM2019",
          link: "/sindachip/products/voltage-regulators/sgm2019.html",
          description: "Low-noise LDO for clean power supply to op-amp",
          category: "Voltage Regulators"
        },
        {
          partNumber: "SGM6603",
          link: "/sindachip/products/led-drivers/sgm6603.html",
          description: "LED driver for sensor indicator applications",
          category: "LED Drivers"
        }
      ],
      faqs: [
        {
          question: "What is the typical input offset voltage of SGM8551?",
          answer: "The SGM8551 features a typical input offset voltage of 5μV at 25°C, with a maximum of 20μV over the full temperature range. This ultra-low offset is achieved through chopper-stabilized architecture that continuously corrects offset errors. In production testing, most units actually measure below 2μV offset, making this op-amp suitable for precision measurement applications where microvolt-level accuracy is required.",
          decisionGuide: "For applications requiring offset below 10μV, SGM8551 is an excellent choice. Contact LiTong for offset screening options if tighter specifications are needed.",
          keywords: ["SGM8551 offset voltage", "precision op-amp", "zero drift"]
        },
        {
          question: "How does the chopper-stabilized architecture work?",
          answer: "The SGM8551 uses auto-zero/chopper-stabilized architecture to achieve ultra-low offset. The internal circuitry continuously measures and corrects the input offset voltage, switching at a frequency of approximately 10kHz. This switching action creates small voltage spikes at the chopping frequency, which are filtered internally. The result is DC precision equivalent to precision bipolar op-amps but with CMOS power consumption. The trade-off is slightly higher noise at low frequencies compared to standard CMOS op-amps.",
          decisionGuide: "Use SGM8551 for DC or low-frequency precision applications. For high-frequency signals above 100kHz, consider standard precision op-amps.",
          keywords: ["chopper stabilized", "auto-zero op-amp", "offset correction"]
        },
        {
          question: "What PCB layout recommendations apply to SGM8551?",
          answer: "For optimal performance with SGM8551: Place 0.1μF ceramic decoupling capacitors within 2mm of the supply pins. Keep input traces short and symmetric to minimize noise pickup and parasitic capacitance. Use a solid ground plane under the op-amp and input circuitry. Avoid routing digital signals near sensitive analog inputs. For high-impedance sources (>10kΩ), guard rings around input traces can reduce leakage currents. The standard pinout allows easy implementation of standard op-amp configurations.",
          decisionGuide: "Follow standard precision analog layout practices. Contact LiTong FAEs for layout review of critical applications.",
          keywords: ["SGM8551 layout", "precision op-amp PCB", "analog design"]
        },
        {
          question: "What is the noise performance of SGM8551?",
          answer: "The SGM8551 has input voltage noise density of 25nV/√Hz at 1kHz. Due to the chopper architecture, the noise spectrum has two components: broadband noise similar to standard op-amps, and switching noise at the chopper frequency (10kHz) and its harmonics. For most DC and low-frequency applications (<1kHz), the noise performance is excellent. The integrated noise over a 10Hz to 10kHz bandwidth is approximately 2.5μV RMS. For applications requiring lower noise at higher frequencies, consider standard precision op-amps like SGM8522.",
          decisionGuide: "SGM8551 noise is optimized for DC/low-frequency applications. For wideband low-noise requirements, consider alternative parts.",
          keywords: ["SGM8551 noise", "op-amp noise density", "chopper noise"]
        },
        {
          question: "Can SGM8551 operate on single supply?",
          answer: "Yes, the SGM8551 is designed for single-supply operation from 2.7V to 5.5V. The rail-to-rail input/output capability allows the full supply range to be utilized for signal swing. Input common-mode range extends 100mV beyond both rails, and output can swing within 10mV of the rails under light loads. This makes it ideal for battery-powered and low-voltage applications where maximizing signal range is important. The device can also operate with dual supplies (±1.35V to ±2.75V) if required.",
          decisionGuide: "SGM8551 excels in single-supply applications from 2.7V to 5.5V. Contact LiTong for dual-supply application guidance.",
          keywords: ["SGM8551 single supply", "rail-to-rail op-amp", "low voltage analog"]
        }
      ]
    },
    {
      partNumber: "SGM8522",
      name: "Dual General-Purpose Op-Amp",
      shortDescription: "Versatile dual op-amp with 3MHz bandwidth and rail-to-rail output for general-purpose analog processing",
      descriptionParagraphs: [
        "The SGM8522 is a versatile dual operational amplifier offering excellent performance for general-purpose analog applications.",
        "With 3MHz bandwidth, 2V/μs slew rate, and rail-to-rail output, it handles a wide range of signal processing tasks.",
        "The low 400μA supply current per channel and wide 2.5V to 5.5V supply range make it ideal for battery-powered portable devices."
      ],
      specifications: {
        "Supply Voltage": "2.5V to 5.5V",
        "Input Offset Voltage": "2mV (max)",
        "Bandwidth": "3MHz",
        "Slew Rate": "2V/μs",
        "Quiescent Current": "400μA per channel",
        "Output Drive": "30mA",
        "Phase Margin": "60°",
        "Package": "SOIC-8, MSOP-8, TSSOP-8"
      },
      features: [
        "Dual op-amp in single package",
        "3MHz gain-bandwidth product",
        "Rail-to-rail output swing",
        "Low 400μA supply current per channel",
        "2V/μs slew rate",
        "2mV maximum input offset",
        "30mA output drive capability",
        "Stable with capacitive loads up to 500pF"
      ],
      applications: [
        "Active filters",
        "Signal conditioning",
        "Sensor buffering",
        "Audio preamplification",
        "ADC driver",
        "Portable instrumentation"
      ],
      faeReview: {
        author: "Jennifer Liu",
        title: "Senior FAE - Consumer Electronics",
        content: "The SGM8522 is my workhorse dual op-amp for consumer electronics designs. It offers an excellent balance of performance, power consumption, and cost. The 3MHz bandwidth is sufficient for audio and most sensor applications, while the 400μA current draw per channel extends battery life in portable devices. I've used this part in countless active filter designs, sensor interfaces, and audio circuits with consistently good results. The rail-to-rail output is genuine - it drives within 20mV of the rails with light loads. One strength is the capacitive load stability - it remains stable with loads up to 500pF, which is important when driving long cables or ADC sampling capacitors. The offset voltage of 2mV max is good for general-purpose work, though precision applications should use the SGM8551 instead. The multiple package options (SOIC, MSOP, TSSOP) provide flexibility for different PCB space constraints. For cost-sensitive designs where you need two op-amps, this is an excellent choice.",
        highlight: "Versatile dual op-amp with excellent cost-performance ratio for general-purpose applications"
      },
      alternativeParts: [
        {
          partNumber: "LM358",
          brand: "Multiple",
          specifications: {
            bandwidth: "1MHz",
            current: "700μA",
            offset: "7mV"
          },
          comparison: {
            bandwidth: "1MHz < 3MHz (lower)",
            current: "700μA > 400μA (higher power)",
            offset: "7mV > 2mV (worse)",
            voltage: "Supports higher voltages (32V)"
          },
          reason: "Legacy LM358 offers wider voltage range but inferior performance",
          useCase: "Applications requiring >5.5V supply voltage",
          link: "#"
        },
        {
          partNumber: "MCP6002",
          brand: "Microchip",
          specifications: {
            bandwidth: "1MHz",
            current: "100μA",
            offset: "4.5mV"
          },
          comparison: {
            bandwidth: "1MHz < 3MHz (lower)",
            current: "100μA < 400μA (lower power)",
            offset: "4.5mV > 2mV (worse)",
            price: "Similar cost"
          },
          reason: "MCP6002 offers lower power but less bandwidth and worse offset",
          useCase: "Ultra-low power applications where bandwidth is not critical",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "SGM8551",
          link: "/sindachip/products/operational-amplifiers/sgm8551.html",
          description: "Precision op-amp for high-accuracy channels in same design",
          category: "Operational Amplifiers"
        },
        {
          partNumber: "SGM8521",
          link: "/sindachip/products/operational-amplifiers/sgm8521.html",
          description: "Single version of SGM8522 for single-channel needs",
          category: "Operational Amplifiers"
        },
        {
          partNumber: "SGM2028",
          link: "/sindachip/products/voltage-regulators/sgm2028.html",
          description: "LDO regulator for stable analog supply voltage",
          category: "Voltage Regulators"
        }
      ],
      faqs: [
        {
          question: "What is the difference between SGM8521 and SGM8522?",
          answer: "SGM8521 is the single-channel version while SGM8522 is the dual-channel version of the same op-amp design. Both offer identical electrical specifications: 3MHz bandwidth, 2V/μs slew rate, rail-to-rail output, and 400μA current per channel. Choose SGM8521 for single-channel applications or when channel isolation is critical. Choose SGM8522 for dual-channel applications to save PCB space and cost. The SGM8524 quad version is also available for four-channel applications.",
          decisionGuide: "Use SGM8521 for single channel, SGM8522 for dual channel, SGM8524 for quad channel applications.",
          keywords: ["SGM8521 vs SGM8522", "single dual op-amp", "channel configuration"]
        },
        {
          question: "How much capacitive load can SGM8522 drive?",
          answer: "The SGM8522 is stable with capacitive loads up to 500pF without external compensation. For larger capacitive loads (up to 10nF), a small series resistor (10-50Ω) between the output and capacitor ensures stability. This is important when driving long coaxial cables, large MOSFET gates, or ADC sampling capacitors. The good capacitive drive capability makes this op-amp suitable for driving cables and buffer applications.",
          decisionGuide: "SGM8522 handles up to 500pF directly. Use series resistor for larger capacitive loads.",
          keywords: ["SGM8522 capacitive load", "op-amp stability", "driving cables"]
        },
        {
          question: "What is the maximum output current of SGM8522?",
          answer: "The SGM8522 can source or sink up to 30mA of output current. This is sufficient for driving most ADC inputs, small MOSFET gates, and signal cables. When driving heavy loads, the output voltage swing is reduced due to internal current limiting. For example, with a 10mA load, the output can typically swing within 200mV of the supply rails. For applications requiring higher output current, consider adding a discrete transistor buffer or selecting a power op-amp.",
          decisionGuide: "SGM8522 provides 30mA drive capability. Add external buffer for higher current requirements.",
          keywords: ["SGM8522 output current", "op-amp drive capability", "load driving"]
        },
        {
          question: "Can SGM8522 be used for audio applications?",
          answer: "Yes, the SGM8522 is suitable for audio preamplification and signal conditioning applications. The 3MHz bandwidth provides adequate frequency response for audio (20Hz-20kHz) with good phase margin. The low distortion and good PSRR ensure clean audio performance. However, for professional audio or high-end consumer audio, dedicated audio op-amps with lower noise and distortion may be preferred. For general-purpose audio in consumer electronics, SGM8522 provides excellent cost-performance.",
          decisionGuide: "SGM8522 is suitable for general audio applications. Consider dedicated audio op-amps for professional audio.",
          keywords: ["SGM8522 audio", "audio op-amp", "preamplifier"]
        },
        {
          question: "What package options are available for SGM8522?",
          answer: "The SGM8522 is available in three industry-standard packages: SOIC-8 (plastic small-outline), MSOP-8 (mini small-outline), and TSSOP-8 (thin shrink small-outline). The SOIC-8 is easiest to handle and solder, suitable for prototypes and low-density boards. MSOP-8 offers smaller footprint for space-constrained designs. TSSOP-8 provides the thinnest profile for height-limited applications. All packages have identical pinouts and electrical performance.",
          decisionGuide: "Select package based on PCB space constraints: SOIC for ease of use, MSOP/TSSOP for compact designs.",
          keywords: ["SGM8522 package", "SOIC MSOP TSSOP", "op-amp package options"]
        }
      ]
    }
  ]
};

// Add the first category
productsData.categories.push(opAmpCategory);

// Write the file
const outputPath = path.join(__dirname, '..', 'data', 'sindachip', 'products.json');
fs.writeFileSync(outputPath, JSON.stringify(productsData, null, 2));
console.log('Products data written to:', outputPath);
console.log('Categories added: 1 (Operational Amplifiers with 2 products)');
console.log('Need to add: Voltage Regulators, LED Drivers, Power Management ICs');
