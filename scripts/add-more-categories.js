#!/usr/bin/env node
/**
 * Add more categories to chipanalog products.json
 */

const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'chipanalog', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 2: Isolated Gate Drivers
const category2 = {
  id: "isolated-gate-drivers",
  name: "Isolated Gate Drivers",
  slug: "chipanalog-isolated-gate-drivers",
  description: "High-performance isolated gate drivers for power MOSFETs and IGBTs with robust isolation and fast switching characteristics.",
  longDescription: "Chipanalog's isolated gate driver portfolio, available through LiTong distributor, provides reliable gate drive solutions with selection guide support for power electronics applications. The product line includes single and dual channel gate drivers with isolation ratings up to 5kVrms, peak output currents up to 10A, and fast propagation delays. These drivers feature Miller clamp, desaturation detection, and soft turn-off for IGBT protection. Applications include motor drives, inverters, power supplies, and EV charging systems.",
  image: "/assets/brands/chipanalog/isolated-gate-drivers.jpg",
  parameters: ["Channels", "Peak Current(A)", "Isolation Voltage(kVrms)", "Propagation Delay(ns)", "Package"],
  series: [
    {
      name: "CA-IS3211 Series",
      description: "Single channel isolated gate drivers with Miller clamp",
      features: ["5kVrms isolation", "10A peak output", "Miller clamp", "Desaturation detection"]
    },
    {
      name: "CA-IS3221 Series",
      description: "Dual channel isolated gate drivers for half-bridge",
      features: ["5kVrms isolation", "4A peak output", "Programmable dead time", "UVLO protection"]
    }
  ],
  selectionGuide: {
    title: "Isolated Gate Driver Selection Guide",
    content: "How to select the right isolated gate driver for your application",
    factors: ["Power device type (MOSFET/IGBT)", "Peak gate current requirement", "Switching frequency", "Isolation voltage", "Protection features needed"],
    recommendations: ["CA-IS3211 for IGBT drives with protection", "CA-IS3221 for half-bridge topologies", "High CMTI for fast switching"]
  },
  selectionGuideLink: {
    url: "/chipanalog/support/gate-driver-selection",
    text: "How to select the right Chipanalog gate driver?",
    articleTitle: "Isolated Gate Driver Selection Guide",
    description: "Comprehensive guide for selecting Chipanalog isolated gate drivers"
  },
  faqs: [
    {
      question: "What is Miller clamp and why is it important?",
      answer: "Miller clamp is a feature that prevents false turn-on of power devices during high dV/dt switching. During turn-off, the Miller capacitance (Cgd) can couple current into the gate, potentially raising gate voltage above threshold and causing unwanted turn-on. The Miller clamp provides a low-impedance path to ground when gate voltage drops below a threshold (typically 2V), preventing this false turn-on. This is critical in bridge topologies where shoot-through could destroy the power devices. Chipanalog's CA-IS3211 includes active Miller clamp for reliable operation.",
      decisionGuide: "Use gate drivers with Miller clamp for bridge topologies and high dV/dt applications. Contact our FAE team for gate driver selection.",
      keywords: ["Miller clamp", "Miller effect", "false turn-on", "dV/dt"]
    },
    {
      question: "What is desaturation detection in gate drivers?",
      answer: "Desaturation detection monitors the collector-emitter (or drain-source) voltage of the power device during conduction. If the device enters saturation (high voltage drop), indicating overcurrent or short-circuit, the detection circuit triggers a soft turn-off sequence to protect the device. This prevents catastrophic failure from hard switching during fault conditions. Chipanalog's CA-IS3211 includes desaturation detection with configurable blanking time and soft turn-off, providing comprehensive IGBT protection.",
      decisionGuide: "Use desaturation detection for IGBT applications requiring overcurrent protection. Contact our FAE team for protection configuration.",
      keywords: ["desaturation", "DESAT", "overcurrent protection", "soft turn-off"]
    },
    {
      question: "How do I calculate gate driver peak current requirement?",
      answer: "Gate driver peak current is calculated based on gate charge and desired switching time. The formula is: Ipeak = Qg / tsw, where Qg is total gate charge from datasheet and tsw is desired switching time. For example, with Qg = 100nC and desired switching time of 100ns: Ipeak = 100nC / 100ns = 1A. Add 20-30% margin for reliable operation. Also consider: Gate resistance affects actual current; Driver output impedance limits peak current; and Higher peak current enables faster switching but increases EMI.",
      decisionGuide: "Calculate peak current based on gate charge and switching time. Contact our FAE team for gate driver sizing assistance.",
      keywords: ["gate charge", "peak current", "switching time", "gate resistance"]
    },
    {
      question: "What is the importance of propagation delay in gate drivers?",
      answer: "Propagation delay in gate drivers affects switching timing and dead time in bridge topologies. Shorter propagation delay (typically 50-100ns) allows: More precise dead time control; Higher switching frequencies; Better synchronization in multi-phase systems; and Reduced dead time losses. However, very fast drivers can cause more EMI. Chipanalog gate drivers offer propagation delays of 70-100ns with excellent matching between channels (<10ns), enabling precise timing control in half-bridge and full-bridge applications.",
      decisionGuide: "Select gate drivers with propagation delay matching your switching frequency requirements. Contact our FAE team for timing analysis.",
      keywords: ["propagation delay", "dead time", "switching timing", "channel matching"]
    },
    {
      question: "How do I set dead time for half-bridge gate drivers?",
      answer: "Dead time prevents shoot-through in half-bridge topologies by ensuring both high-side and low-side switches are never on simultaneously. Set dead time based on: Power device turn-off time (from datasheet); Propagation delay variation; and Safety margin (typically 100-200ns). Chipanalog's CA-IS3221 includes programmable dead time (via external resistor) from 100ns to several microseconds. Calculate: Minimum dead time = Td(off,max) + propagation delay variation + safety margin. For example, with Td(off) = 300ns, variation = 50ns, margin = 100ns: Set dead time to 450ns minimum.",
      decisionGuide: "Calculate dead time based on device characteristics and margins. Contact our FAE team for dead time optimization.",
      keywords: ["dead time", "shoot-through", "half bridge", "programmable dead time"]
    }
  ],
  products: [
    {
      partNumber: "CA-IS3211",
      name: "Single Channel Isolated Gate Driver",
      shortDescription: "High-performance single channel isolated gate driver with 5kVrms isolation, 10A peak output, Miller clamp, and desaturation detection for IGBT protection",
      descriptionParagraphs: [
        "CA-IS3211 is a high-performance single channel isolated gate driver designed for driving IGBTs and power MOSFets in high-power applications. The device features reinforced isolation rated at 5kVrms.",
        "With 10A peak output current, active Miller clamp, and desaturation detection, this driver provides comprehensive protection for power devices in motor drives and inverters.",
        "The device includes soft turn-off during fault conditions, preventing overvoltage spikes that could damage the IGBT. Fast propagation delay (70ns) enables high-frequency switching."
      ],
      specifications: {
        "Channels": "1",
        "Isolation Voltage": "5kVrms (reinforced)",
        "Peak Output Current": "10A source/sink",
        "Miller Clamp Current": "5A",
        "Propagation Delay": "70ns typical",
        "CMTI": ">100kV/μs",
        "UVLO Threshold": "12V (VCC2)",
        "Package": "SOIC-16, DIP-16"
      },
      features: [
        "Reinforced isolation 5kVrms",
        "10A peak output current",
        "Active Miller clamp",
        "Desaturation detection",
        "Soft turn-off protection",
        "Fast 70ns propagation delay",
        "High CMTI >100kV/μs",
        "Separate source/sink outputs"
      ],
      applications: [
        "Motor drives",
        "Industrial inverters",
        "EV/HEV powertrains",
        "Welding equipment",
        "UPS systems",
        "Solar inverters",
        "Power supplies"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS3211 is my go-to recommendation for IGBT gate drive applications requiring comprehensive protection. The 10A peak current drives even large IGBTs with fast switching times. The Miller clamp is essential for bridge topologies to prevent shoot-through. I've used this driver in numerous motor drive designs with excellent results. The desaturation detection with soft turn-off has saved IGBTs from destruction during fault conditions. For best performance, I recommend placing the desaturation diode close to the IGBT collector and using proper gate resistor sizing. The separate source/sink outputs allow independent control of turn-on and turn-off speeds.",
        highlight: "10A peak current with Miller clamp and desaturation protection"
      },
      alternativeParts: [
        {
          partNumber: "ACPL-332J",
          brand: "Broadcom",
          specifications: {
            isolation: "5kVrms",
            current: "2.5A",
            delay: "200ns"
          },
          comparison: {
            current: "10A > 2.5A (4x higher)",
            delay: "70ns < 200ns (faster)",
            features: "Similar protection features",
            cost: "Lower cost"
          },
          reason: "Higher drive capability with faster switching",
          useCase: "Upgrade for faster switching and higher power",
          link: "#"
        },
        {
          partNumber: "1ED020I12-F2",
          brand: "Infineon",
          specifications: {
            isolation: "6kVrms",
            current: "6A",
            delay: "120ns"
          },
          comparison: {
            current: "10A > 6A (higher)",
            delay: "70ns < 120ns (faster)",
            isolation: "5kVrms similar to 6kVrms",
            cost: "Competitive pricing"
          },
          reason: "Higher current and faster switching",
          useCase: "Performance upgrade with cost savings",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS3221",
          description: "Dual channel gate driver for half-bridge",
          category: "Isolated Gate Drivers",
          link: "/chipanalog/products/isolated-gate-drivers/ca-is3221.html"
        },
        {
          partNumber: "CA-IS3740",
          description: "Digital isolator for control signals",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3740.html"
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
          question: "How do I size the gate resistor for CA-IS3211?",
          answer: "Gate resistor sizing involves trade-offs between switching speed, EMI, and gate ringing. For turn-on: Rgon = (Vdrive - Vge(th)) / Ion(desired). For example, with 15V drive, 5V threshold, and desired 2A: Rgon = (15-5)/2 = 5Ω. For turn-off, similar calculation or use separate Rgoff. Typical values are 2-10Ω for high-power IGBTs. Consider: Lower resistance = faster switching but more EMI; Higher resistance = slower switching but less ringing; and Separate resistors allow independent optimization. Start with 5-10Ω and adjust based on switching waveforms.",
          decisionGuide: "Start with 5-10Ω and optimize based on waveforms. Contact our FAE team for gate resistor selection guidance.",
          keywords: ["gate resistor", "Rg", "turn-on resistor", "switching speed"]
        },
        {
          question: "What is the purpose of the soft turn-off feature?",
          answer: "Soft turn-off gradually reduces gate voltage during fault conditions (desaturation detection), preventing fast current change (di/dt) that could cause dangerous overvoltage spikes across the IGBT. During normal turn-off, the gate is discharged quickly for fast switching. During fault, the soft turn-off uses a higher resistance path to slow down turn-off, limiting di/dt and induced voltage (V = L × di/dt). This protects the IGBT from overvoltage breakdown during short-circuit conditions. Chipanalog's CA-IS3211 implements soft turn-off automatically when desaturation is detected.",
          decisionGuide: "Soft turn-off is automatic during faults. No external configuration needed. Contact our FAE team for protection feature details.",
          keywords: ["soft turn-off", "fault protection", "di/dt", "overvoltage"]
        },
        {
          question: "How does the Miller clamp work in CA-IS3211?",
          answer: "The Miller clamp in CA-IS3211 is an active circuit that monitors the gate voltage. When gate voltage drops below approximately 2V during turn-off, the Miller clamp transistor turns on, providing a low-impedance path (about 0.5Ω) from gate to ground. This prevents the Miller current (from Cgd coupling during high dV/dt) from raising the gate voltage above threshold. Without Miller clamp, high dV/dt during the other switch's turn-on could couple enough current through Cgd to cause false turn-on and shoot-through. The Miller clamp is essential for reliable operation in bridge topologies.",
          decisionGuide: "Miller clamp is automatic and always active. Contact our FAE team for Miller clamp operation details.",
          keywords: ["Miller clamp operation", "active clamp", "false turn-on prevention"]
        },
        {
          question: "What is the recommended PCB layout for CA-IS3211?",
          answer: "Recommended PCB layout for CA-IS3211 includes: Place decoupling capacitors (1μF + 0.1μF) close to VCC1 and VCC2 pins; Keep gate drive loop (OUT to gate to emitter to GND2) as small as possible; Use wide traces (minimum 20mil) for gate drive current paths; Place desaturation diode close to IGBT collector; Use kelvin connection for emitter sense (avoid sharing with power current); Maintain clearance and creepage for isolation barrier; and Use ground planes for both primary and secondary sides. Good layout minimizes parasitic inductance and ensures reliable switching.",
          decisionGuide: "Follow layout guidelines for optimal performance. Contact our FAE team for layout review services.",
          keywords: ["PCB layout", "decoupling", "gate drive loop", "kelvin connection"]
        },
        {
          question: "How do I configure desaturation detection?",
          answer: "Desaturation detection in CA-IS3211 is configured with two external components: Desaturation diode (fast recovery, 600V+ rating) connected from IGBT collector to DESAT pin; and Blanking capacitor (typically 100pF to 1nF) from DESAT pin to GND2. The diode blocks high voltage when IGBT is off. When IGBT is on, the diode conducts and DESAT pin voltage reflects Vce. If Vce exceeds threshold (typically 6-9V) for longer than blanking time, fault is detected. Calculate blanking time: Tblank = Cblank × Vthreshold / Icharge. With 100pF and 9V threshold at 250μA: Tblank = 3.6μs.",
          decisionGuide: "Select diode and capacitor based on application. Contact our FAE team for desaturation configuration guidance.",
          keywords: ["desaturation configuration", "blanking capacitor", "DESAT diode"]
        },
        {
          question: "Can CA-IS3211 drive SiC MOSFETs?",
          answer: "Yes, CA-IS3211 can drive SiC MOSFETs effectively. SiC MOSFETs require: Higher gate voltage (+15V to +20V turn-on, -5V to 0V turn-off); Fast switching to minimize losses (low gate resistance); and Robust driver capable of handling high dV/dt. CA-IS3211's 10A peak current and fast switching make it suitable for SiC. Use VCC2 = 20V and VEE2 = -5V (if available) or GND2. The Miller clamp helps prevent false turn-on from SiC's high dV/dt switching. Ensure gate resistor is sized appropriately (typically 2-5Ω for SiC) to control switching speed and ringing.",
          decisionGuide: "CA-IS3211 is suitable for SiC MOSFETs with proper gate voltage. Contact our FAE team for SiC gate drive design.",
          keywords: ["SiC MOSFET", "SiC gate drive", "wide bandgap", "high dV/dt"]
        }
      ]
    },
    {
      partNumber: "CA-IS3221",
      name: "Dual Channel Isolated Gate Driver",
      shortDescription: "Dual channel isolated gate driver with 5kVrms isolation, programmable dead time, and UVLO protection for half-bridge topologies",
      descriptionParagraphs: [
        "CA-IS3221 is a dual channel isolated gate driver designed for half-bridge and synchronous buck topologies. The device features two independent gate drive channels with programmable dead time.",
        "With 4A peak output current per channel and 5kVrms isolation, this driver is ideal for medium-power applications requiring reliable half-bridge drive.",
        "The programmable dead time (via external resistor) prevents shoot-through, while UVLO protection ensures reliable operation during power transients."
      ],
      specifications: {
        "Channels": "2 (half-bridge configuration)",
        "Isolation Voltage": "5kVrms (reinforced)",
        "Peak Output Current": "4A source/sink per channel",
        "Programmable Dead Time": "100ns to 5μs",
        "Propagation Delay": "80ns typical",
        "Delay Matching": "<10ns between channels",
        "UVLO Threshold": "8V (VCC2)",
        "Package": "SOIC-16, QSOP-16"
      },
      features: [
        "Dual channel half-bridge driver",
        "5kVrms reinforced isolation",
        "4A peak output per channel",
        "Programmable dead time",
        "Excellent channel matching <10ns",
        "UVLO protection on both sides",
        "Separate source/sink outputs",
        "AEC-Q100 qualified"
      ],
      applications: [
        "Half-bridge converters",
        "Synchronous buck converters",
        "Motor drives",
        "DC-DC converters",
        "Inverters",
        "Power supplies",
        "LED drivers"
      ],
      faeReview: {
        author: "Dr. Chen Wei",
        title: "Senior FAE - Isolation Products",
        content: "CA-IS3221 is an excellent choice for half-bridge applications up to several hundred watts. The programmable dead time is a key feature that allows optimization for different power devices. I've used this driver in DC-DC converter designs with switching frequencies up to 500kHz with excellent results. The channel matching (<10ns) ensures good dead time control even at high frequencies. The 4A peak current is sufficient for MOSFETs up to about 100A rating. For best performance, I recommend using the separate source/sink outputs with different resistors to optimize turn-on and turn-off speeds independently.",
        highlight: "Programmable dead time with excellent channel matching"
      },
      alternativeParts: [
        {
          partNumber: "UCC21520",
          brand: "Texas Instruments",
          specifications: {
            isolation: "5.7kVrms",
            current: "6A",
            delay: "19ns"
          },
          comparison: {
            current: "4A < 6A (lower)",
            delay: "80ns > 19ns (slower)",
            features: "Similar dead time control",
            cost: "Lower cost than TI"
          },
          reason: "Cost-effective alternative for medium power",
          useCase: "Cost reduction for half-bridge designs",
          link: "#"
        }
      ],
      companionParts: [
        {
          partNumber: "CA-IS3211",
          description: "Single channel driver for higher current",
          category: "Isolated Gate Drivers",
          link: "/chipanalog/products/isolated-gate-drivers/ca-is3211.html"
        },
        {
          partNumber: "CA-IS3740",
          description: "Digital isolator for control",
          category: "Digital Isolators",
          link: "/chipanalog/products/digital-isolators/ca-is3740.html"
        },
        {
          partNumber: "CA-IS3417",
          description: "Isolated RS-485 for feedback",
          category: "Isolated Interfaces",
          link: "/chipanalog/products/isolated-interfaces/ca-is3417.html"
        }
      ],
      faqs: [
        {
          question: "How do I set the dead time with CA-IS3221?",
          answer: "CA-IS3221 dead time is set by an external resistor (RDT) connected between DT pin and GND1. The dead time formula is: Tdead = (RDT × 0.5pF) + 100ns. For example: RDT = 100kΩ gives Tdead = 150ns; RDT = 1MΩ gives Tdead = 600ns; RDT = 10MΩ gives Tdead = 5.1μs. Select RDT based on your power device turn-off time plus safety margin. Typical values are 200-500ns for MOSFETs and 500ns-2μs for IGBTs. The dead time is inserted between turn-off of one channel and turn-on of the other, preventing shoot-through.",
          decisionGuide: "Calculate RDT based on required dead time. Contact our FAE team for dead time optimization.",
          keywords: ["dead time resistor", "RDT", "programmable dead time", "shoot-through"]
        },
        {
          question: "What is the maximum switching frequency for CA-IS3221?",
          answer: "CA-IS3221 supports switching frequencies up to 1MHz, but practical limits depend on several factors: Propagation delay (80ns) limits maximum frequency to about 5MHz theoretically; Dead time requirement reduces effective duty cycle range at high frequencies; Gate charge and drive current determine switching time; and Power dissipation in the driver. For practical designs: Up to 500kHz is straightforward with good efficiency; 500kHz to 1MHz requires careful optimization; and Above 1MHz is generally not recommended. Most half-bridge applications operate at 100kHz to 300kHz where CA-IS3221 performs excellently.",
          decisionGuide: "CA-IS3221 is suitable for frequencies up to 500kHz. Contact our FAE team for high-frequency design guidance.",
          keywords: ["switching frequency", "maximum frequency", "high frequency"]
        },
        {
          question: "Can CA-IS3221 be used for synchronous rectification?",
          answer: "Yes, CA-IS3221 is well-suited for synchronous rectification in buck converters and full-bridge rectifiers. The programmable dead time prevents shoot-through between main switch and synchronous rectifier. For synchronous buck: Connect high-side output to control FET; Connect low-side output to sync FET; Set dead time to prevent cross-conduction; Use appropriate gate resistors. The 4A peak current drives sync FETs effectively, reducing conduction losses compared to diode rectification. The isolation allows the sync FET to be referenced to switching node while control is on primary side.",
          decisionGuide: "CA-IS3221 is ideal for isolated synchronous rectification. Contact our FAE team for sync rectifier design.",
          keywords: ["synchronous rectification", "sync FET", "buck converter"]
        },
        {
          question: "What is the UVLO protection in CA-IS3221?",
          answer: "CA-IS3221 includes Under-Voltage Lockout (UVLO) protection on both primary (VCC1) and secondary (VCC2) supplies. When VCC drops below threshold (typically 8V for VCC2), the outputs are held low to prevent operation with insufficient gate voltage. This protects power devices from operating in linear mode with high losses. UVLO has hysteresis (about 1V) to prevent oscillation during power-up. When VCC rises above threshold plus hysteresis, normal operation resumes. UVLO ensures reliable startup and prevents damage from brownout conditions.",
          decisionGuide: "UVLO is automatic. Ensure VCC stays above UVLO threshold during operation. Contact our FAE team for UVLO details.",
          keywords: ["UVLO", "under voltage lockout", "protection", "startup"]
        },
        {
          question: "How do I optimize gate resistor values for CA-IS3221?",
          answer: "Gate resistor optimization for CA-IS3221 involves balancing switching speed, EMI, and ringing. For half-bridge: High-side gate resistor affects turn-on of high-side FET; Low-side gate resistor affects turn-on of low-side FET; Separate source/sink resistors allow optimization. Typical approach: Start with 5-10Ω for both; Measure switching waveforms (Vgs, Vds, Id); Reduce resistance if switching is too slow or losses are high; Increase resistance if ringing or EMI is excessive; and Optimize high-side and low-side independently. Consider using different values for source (turn-on) and sink (turn-off) to optimize separately.",
          decisionGuide: "Start with 5-10Ω and optimize based on measurements. Contact our FAE team for gate resistor optimization.",
          keywords: ["gate resistor optimization", "switching waveforms", "EMI", "ringing"]
        },
        {
          question: "What layout considerations are important for half-bridge drivers?",
          answer: "Important layout considerations for CA-IS3221 half-bridge driver: Minimize gate drive loop area (driver output → gate → source → driver GND); Place decoupling capacitors close to VCC2 and VEE2 pins; Keep high-side bootstrap capacitor close to HB and HS pins; Use kelvin connection for current sense (if used); Maintain isolation barrier clearance and creepage; Keep power traces (drain, source) away from sensitive gate drive traces; and Use adequate copper area for power dissipation. Good layout minimizes parasitic inductance that causes ringing and EMI.",
          decisionGuide: "Follow layout best practices for half-bridge. Contact our FAE team for layout review.",
          keywords: ["half bridge layout", "gate drive loop", "bootstrap capacitor", "kelvin connection"]
        }
      ]
    }
  ]
};

products.categories.push(category2);

// Save file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('✅ Added category 2 (Isolated Gate Drivers)');
