#!/usr/bin/env node

/**
 * 添加 Aowei 剩余产品分类
 * IPM, SiC Modules, Automotive Power Modules
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'aowei');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 分类2: Intelligent Power Modules (IPM)
const ipmCategory = {
  id: "intelligent-power-modules",
  name: "Intelligent Power Modules (IPM)",
  slug: "intelligent-power-modules",
  description: "Integrated power modules with built-in gate drivers and protection circuits for motor drives and appliance applications",
  longDescription: "Aowei's Intelligent Power Modules (IPMs) integrate power semiconductors (IGBTs and diodes), gate drivers, protection circuits, and control features in a compact package. These modules simplify power electronics design by eliminating the need for external gate drivers and complex protection circuits. Key series include the AW-IPM series for general motor drives and the AW-IPM-S series for servo applications. Built-in protection features include overcurrent shutdown, short-circuit protection, undervoltage lockout, and overtemperature protection. The integrated gate drivers are optimized for the specific IGBT characteristics, ensuring reliable switching and minimizing EMI. IPMs are ideal for applications where fast time-to-market, reduced component count, and high reliability are important. As an authorized Aowei distributor, we provide technical support for IPM selection, interface design, and application optimization.",
  parameters: ["Voltage Rating", "Current Rating", "Switching Frequency", "Protection Features", "Interface Type", "Package"],
  applications: ["Motor Drives", "HVAC Systems", "Appliances", "Pumps and Fans", "Servo Drives", "Power Tools"],
  selectionGuide: {
    title: "How to Select Intelligent Power Modules",
    description: "Guide to selecting the right IPM for your motor drive application",
    articleId: "ipm-selection-guide",
    articleLink: "/aowei/support/ipm-selection-guide.html"
  },
  selectionGuideLink: {
    url: "/aowei/support/ipm-selection-guide.html",
    text: "IPM Selection Guide"
  },
  series: [
    {
      name: "AW-IPM Series",
      description: "General-purpose IPMs for motor drives and appliances"
    },
    {
      name: "AW-IPM-S Series",
      description: "High-performance IPMs for servo and precision control"
    }
  ],
  faqs: [
    {
      question: "What are the advantages of IPMs over standard IGBT modules?",
      "answer": "Intelligent Power Modules offer several advantages over standard IGBT modules: 1) Simplified Design - Integrated gate drivers eliminate the need for external driver circuits, reducing design time and component count. 2) Built-in Protection - Overcurrent, short-circuit, undervoltage, and overtemperature protection circuits are included, improving system reliability. 3) Optimized Performance - Gate drivers are specifically matched to the IGBTs for optimal switching characteristics and minimal EMI. 4) Smaller Size - Integration reduces overall solution size compared to discrete IGBTs with external drivers. 5) Faster Time-to-Market - Reduced design complexity means faster product development cycles. 6) Higher Reliability - Factory-tested integration reduces field failure risk. Trade-offs include less flexibility in gate drive design, typically higher cost per ampere, and current ratings usually limited to 50A or less per module.",
      decisionGuide: "Use IPMs for faster design cycles and integrated protection. Use standard IGBTs for flexibility and high current.",
      keywords: ["IPM advantages", "intelligent power module benefits"]
    },
    {
      question: "What protection features are included in Aowei IPMs?",
      "answer": "Aowei IPMs include comprehensive protection features: Overcurrent Protection (OCP) - Detects overcurrent conditions and shuts down the IGBTs to prevent damage. Response time is typically <5µs. Short-Circuit Protection (SCP) - Detects hard short circuits and implements soft shutdown to prevent voltage overshoot. Undervoltage Lockout (UVLO) - Prevents IGBT turn-on when gate drive voltage is insufficient, preventing high losses and damage. Overtemperature Protection (OTP) - Monitors module temperature and shuts down if temperature exceeds safe limits. Fault Output - Provides fault signals to the system controller for diagnostic and shutdown purposes. These protection features are factory-calibrated and tested, ensuring reliable operation without external protection circuits. The protection thresholds are optimized for the specific IGBT characteristics in each IPM series.",
      decisionGuide: "IPMs include comprehensive protection. Verify protection thresholds meet your system requirements.",
      keywords: ["IPM protection features", "overcurrent protection"]
    },
    {
      question: "How do I interface with Aowei IPMs?",
      "answer": "Aowei IPMs use standard control interfaces: Control Inputs - Logic-level inputs (typically 3.3V or 5V compatible) for PWM signals. Active-high or active-low options available. Fault Output - Open-collector or open-drain output indicating fault conditions. Requires pull-up resistor. Temperature Output - Analog voltage output proportional to module temperature for monitoring. Power Supplies - +15V for gate drive power (typically 50-100mA), +5V or +3.3V for logic interface (low current). Interface Design Tips: Use optocouplers or digital isolators for high-voltage isolation between controller and IPM. Keep control traces short and away from power traces to minimize noise coupling. Use proper decoupling capacitors on power supplies. Implement fault handling in software to respond to fault signals. Our FAE team can provide reference designs and interface circuit recommendations.",
      decisionGuide: "Use standard logic-level PWM inputs. Implement proper isolation and noise immunity in interface design.",
      keywords: ["IPM interface", "control signals"]
    },
    {
      question: "What is the maximum switching frequency for Aowei IPMs?",
      "answer": "Aowei IPMs are designed for switching frequencies from 5kHz to 20kHz depending on the series: AW-IPM Series - Optimized for 5-15kHz, suitable for general motor drives, pumps, and fans. Maximum 20kHz with derating. AW-IPM-S Series - Optimized for 10-20kHz, suitable for servo drives and high-performance applications. Maximum 25kHz with derating. Higher switching frequencies reduce audible noise and allow smaller filters but increase switching losses. The integrated gate drivers in IPMs are optimized for the specified frequency range. For applications requiring frequencies above 20kHz, consider standard IGBT modules with custom gate drivers or SiC modules. The IPM datasheet specifies the maximum PWM frequency and any required derating at high frequencies.",
      decisionGuide: "Use AW-IPM for 5-15kHz, AW-IPM-S for 10-20kHz. Consider standard IGBTs for higher frequencies.",
      keywords: ["IPM switching frequency", "PWM frequency"]
    },
    {
      question: "Can IPMs be used in three-phase inverter applications?",
      "answer": "Yes, Aowei offers IPMs specifically designed for three-phase inverter applications: Six-Pack IPMs - Contain six IGBTs (three half-bridges) in one package for complete three-phase inverter. Current ratings from 10A to 50A per phase. Brake Unit IPMs - Include three-phase inverter plus brake chopper for dynamic braking. Ideal for motor drives with frequent deceleration. PFC + Inverter IPMs - Combine power factor correction stage with three-phase inverter for complete motor drive solution. Configuration: Use one six-pack IPM for motors up to 15kW (depending on current rating). For higher power, use discrete IGBT modules. Advantages of three-phase IPMs: Complete inverter in one package, balanced thermal design, minimal external components, factory-tested integration. Limitations: Current ratings typically limited to 50A, less flexibility in control algorithms compared to discrete solutions.",
      decisionGuide: "Use six-pack IPMs for three-phase inverters up to 15kW. Use discrete IGBTs for higher power.",
      keywords: ["three-phase IPM", "inverter IPM"]
    }
  ],
  products: [
    {
      partNumber: "AW-IPM-30A-600V",
      name: "AW-IPM 30A 600V Intelligent Power Module",
      shortDescription: "Six-pack IPM with integrated drivers and protection, 30A 600V. Ideal for motor drives up to 15kW.",
      descriptionParagraphs: [
        "The Aowei AW-IPM-30A-600V is a complete three-phase inverter solution in a compact package. This intelligent power module integrates six IGBTs, gate drivers, protection circuits, and control interface, significantly simplifying motor drive design.",
        "The built-in protection features include overcurrent shutdown, short-circuit protection with soft shutdown, undervoltage lockout, and overtemperature protection. These features ensure reliable operation and protect the power stage from damage.",
        "With a current rating of 30A and 600V voltage rating, this IPM is suitable for 380V AC motor drives up to 15kW. The compact package saves PCB space compared to discrete IGBT solutions with external drivers."
      ],
      specifications: {
        "Voltage Rating": "600V",
        "Current Rating": "30A per phase",
        "Configuration": "Six-pack (three half-bridges)",
        "Switching Frequency": "Up to 20kHz",
        "Gate Drive Voltage": "+15V",
        "Logic Interface": "3.3V/5V compatible",
        "Protection": "OCP, SCP, UVLO, OTP",
        "Isolation": "2500V RMS"
      },
      features: [
        "Complete three-phase inverter in one package",
        "Integrated gate drivers optimized for IGBTs",
        "Built-in overcurrent and short-circuit protection",
        "Undervoltage lockout protection",
        "Overtemperature protection with monitoring",
        "Fault output signal for system diagnostics",
        "3.3V/5V logic compatible inputs",
        "Compact package saves PCB space"
      ],
      applications: [
        "AC motor drives up to 15kW",
        "HVAC systems and compressors",
        "Pump and fan drives",
        "Industrial automation",
        "Appliance motor control",
        "Power tools"
      ],
      faeReview: {
        author: "David Liu",
        title: "FAE - Motor Control",
        content: "The AW-IPM-30A-600V is an excellent solution for motor drives in the 7.5-15kW range. The integration saves significant design time - what would normally take weeks of gate driver design and protection circuit development is already done. I've used this IPM in several pump and fan applications with excellent results. The protection features work reliably - I've seen the overcurrent protection trigger cleanly during motor stall conditions without damaging the module. The switching waveforms are very clean with minimal overshoot, thanks to the optimized gate drivers. For thermal design, the module runs cooler than expected due to good thermal design. I typically see case temperatures 10-15°C lower than comparable discrete solutions. The interface is straightforward - just connect PWM signals from your MCU and monitor the fault output. If you need a reliable motor drive solution with fast time-to-market, this IPM is an excellent choice.",
        highlight: "Complete motor drive solution with integrated protection"
      },
      alternativeParts: [
        {
          partNumber: "AW-IPM-20A-600V",
          link: "/aowei/products/intelligent-power-modules/aw-ipm-20a-600v.html",
          reason: "Lower current for 5-10kW applications",
          brand: "Aowei"
        },
        {
          partNumber: "AW-IPM-50A-600V",
          link: "/aowei/products/intelligent-power-modules/aw-ipm-50a-600v.html",
          reason: "Higher current for 20-25kW applications",
          brand: "Aowei"
        }
      ],
      companionParts: [
        {
          partNumber: "MCU Development Board",
          link: "#",
          description: "Motor control MCU with FOC algorithm",
          category: "Controllers"
        },
        {
          partNumber: "Current Sensors",
          link: "#",
          description: "Hall effect current sensors for motor control",
          category: "Sensors"
        },
        {
          partNumber: "EMI Filter",
          link: "#",
          description: "Input filter for noise suppression",
          category: "Filters"
        }
      ],
      faqs: [
        {
          question: "What is the fault response time of the AW-IPM-30A-600V?",
          "answer": "The AW-IPM-30A-600V has multiple protection features with fast response times: Overcurrent Protection (OCP) - Detection time <2µs, shutdown time <5µs total. This fast response prevents IGBT damage during overload conditions. Short-Circuit Protection (SCP) - Detection time <1µs, soft shutdown in <5µs. The soft shutdown prevents voltage overshoot that could damage the IGBT. Undervoltage Lockout (UVLO) - Response time <10µs. Prevents IGBT turn-on when gate drive voltage is insufficient. Overtemperature Protection (OTP) - Response time depends on thermal time constant, typically <1 second. The fault output signal is activated within 1µs of fault detection, allowing the system controller to respond quickly. These fast protection features make the IPM very robust against fault conditions.",
          decisionGuide: "Fast protection response (<5µs) ensures reliable operation. Monitor fault output for diagnostics.",
          keywords: ["IPM fault response", "protection timing"]
        },
        {
          question: "How do I connect the control interface to my microcontroller?",
          "answer": "Connecting the AW-IPM-30A-600V to a microcontroller: PWM Inputs - Connect MCU PWM outputs to IPM HIN1,2,3 and LIN1,2,3 inputs. Logic high: 3.3V or 5V. Logic low: 0V. Use series resistors (100-330Ω) for noise suppression. Fault Output - Connect FO pin to MCU GPIO with pull-up resistor (10kΩ to 3.3V or 5V). FO is open-drain, active low. Temperature Output - Connect VOT pin to MCU ADC. Output is 10mV/°C with 2.5V offset at 25°C. Enable Inputs - Some IPMs have enable pins that must be high for operation. Check datasheet. Isolation - Use optocouplers or digital isolators between MCU and IPM for high-voltage isolation. Recommended isolators: Si86xx, ISO77xx series. Wiring Tips: Keep control traces short (<10cm), use twisted pairs for PWM signals, separate control ground from power ground at single point.",
          decisionGuide: "Use logic-level PWM inputs with series resistors. Implement proper isolation between MCU and IPM.",
          keywords: ["IPM interface connection", "microcontroller interface"]
        },
        {
          question: "What is the recommended heatsink for the AW-IPM-30A-600V?",
          "answer": "Heatsink selection for AW-IPM-30A-600V: Thermal Requirements - Maximum junction temperature: 150°C, Recommended operating: <125°C, Thermal resistance junction-to-case (Rth_jc): 1.5 K/W typical. Losses Calculation - At 30A, 10kHz switching: Conduction loss ~60W, Switching loss ~30W, Total ~90W. Heatsink Calculation - For Ta=40°C, Tj=125°C: Rth_total = (125-40)/90 = 0.94 K/W. Rth_heatsink = 0.94 - 1.5 = negative (impossible). Solution: Use forced air cooling or reduce Tj to 150°C. With Tj=150°C: Rth_total = (150-40)/90 = 1.22 K/W. Rth_heatsink = 1.22 - 1.5 = still negative. Practical solution: Use forced air cooling with Rth_heatsink < 0.5 K/W. Recommended Heatsinks - Natural convection: Large extruded heatsink with >500cm² surface area. Forced air: Smaller heatsink with 2-5m/s airflow. Thermal interface: Use thermal grease or phase-change material.",
          decisionGuide: "Use forced air cooling with Rth < 0.5 K/W. Natural convection requires very large heatsink.",
          keywords: ["IPM heatsink", "thermal design"]
        },
        {
          question: "Can the AW-IPM-30A-600V be used with 220V single-phase input?",
          "answer": "Yes, the AW-IPM-30A-600V can be used with 220V single-phase input for motor drives up to 7.5kW: Configuration - Use single-phase rectifier to generate ~310V DC bus. The 600V rating provides adequate margin. Considerations: Input Current - At 7.5kW, 220V input, current is ~34A RMS. Ensure input wiring and rectifier can handle this current. DC Bus Capacitor - Use sufficient capacitance to reduce ripple. For single-phase, C = P / (2 × f × V_ripple × V_dc). Example: 7500W, 50Hz, 10V ripple: C = 7500/(2×50×10×310) = 24,000µF. PFC Stage - Consider adding active PFC to improve power factor and reduce input current. The IPM can drive motors up to 7.5kW with 220V single-phase input. For higher power, three-phase input is recommended to reduce current and improve efficiency.",
          decisionGuide: "Suitable for 220V single-phase up to 7.5kW. Use adequate DC bus capacitance.",
          keywords: ["single-phase IPM", "220V motor drive"]
        },
        {
          question: "What is the difference between AW-IPM and AW-IPM-S series?",
          "answer": "The AW-IPM and AW-IPM-S series have different optimization targets: AW-IPM Series - Optimized for general-purpose motor drives (pumps, fans, compressors). Switching frequency: 5-15kHz. Cost-optimized for high-volume applications. Standard protection features. Suitable for V/Hz control and simple sensorless vector control. AW-IPM-S Series - Optimized for servo drives and high-performance applications. Switching frequency: 10-25kHz. Lower switching losses for high-frequency operation. Enhanced current sensing accuracy. Faster protection response. Suitable for FOC (Field Oriented Control) and servo applications. Selection Guide: Use AW-IPM for general motor drives where cost is important. Use AW-IPM-S for servo drives, high-performance applications, or when switching above 15kHz. The AW-IPM-S is typically 30-40% more expensive but offers better performance for demanding applications.",
          decisionGuide: "Use AW-IPM for general drives. Use AW-IPM-S for servo and high-frequency applications.",
          keywords: ["AW-IPM vs AW-IPM-S", "IPM series comparison"]
        },
        {
          question: "How do I troubleshoot fault conditions in the AW-IPM-30A-600V?",
          "answer": "Troubleshooting fault conditions in AW-IPM-30A-600V: Fault Types - Overcurrent (OC): Check motor wiring for shorts, verify current rating, check for motor stall. Short-circuit (SC): Check for phase-to-phase or phase-to-ground shorts, verify gate drive signals. Undervoltage (UV): Check +15V supply voltage, verify supply current capacity (needs 100-150mA). Overtemperature (OT): Check heatsink temperature, verify thermal interface, check airflow. Diagnostic Steps: 1) Check fault output pin with oscilloscope. 2) Measure supply voltages (+15V, +5V). 3) Check PWM signals at IPM inputs. 4) Monitor temperature output voltage. 5) Check motor insulation resistance. 6) Verify heatsink temperature. Recovery: After fault, cycle power or toggle enable pin to reset. Some faults latch until reset. Prevention: Use proper heatsink, verify wiring, implement soft-start, use appropriate current limits.",
          decisionGuide: "Monitor fault output, check supply voltages, verify motor wiring and heatsink temperature.",
          keywords: ["IPM fault troubleshooting", "diagnostics"]
        }
      ]
    },
    {
      partNumber: "AW-IPM-S-20A-600V",
      name: "AW-IPM-S 20A 600V Servo IPM",
      shortDescription: "High-performance servo IPM with fast switching and precise current sensing, 20A 600V. Ideal for servo drives up to 5kW.",
      descriptionParagraphs: [
        "The Aowei AW-IPM-S series is specifically designed for high-performance servo drive applications. This IPM features fast switching characteristics, precise current sensing, and enhanced protection features required for servo control.",
        "With switching frequencies up to 25kHz, this IPM enables high-bandwidth current control essential for servo performance. The integrated current sensing provides accurate feedback for FOC (Field Oriented Control) algorithms.",
        "The compact package and high integration reduce overall servo drive size, making it ideal for space-constrained applications such as robotics, CNC machines, and industrial automation."
      ],
      specifications: {
        "Voltage Rating": "600V",
        "Current Rating": "20A per phase",
        "Configuration": "Six-pack with current sensing",
        "Switching Frequency": "Up to 25kHz",
        "Current Sensing": "Integrated shunt resistors",
        "Gate Drive Voltage": "+15V",
        "Logic Interface": "3.3V/5V compatible",
        "Protection": "OCP, SCP, UVLO, OTP"
      },
      features: [
        "Optimized for high-frequency servo applications",
        "Fast switching with low losses",
        "Integrated precision current sensing",
        "High-bandwidth current control",
        "Compact design for servo drives",
        "Enhanced protection features",
        "FOC algorithm support",
        "Low torque ripple design"
      ],
      applications: [
        "Servo motor drives up to 5kW",
        "Robotics and automation",
        "CNC machine tools",
        "Packaging machinery",
        "Printing equipment",
        "Semiconductor equipment"
      ],
      faeReview: {
        author: "Sarah Zhang",
        title: "Senior FAE - Servo Systems",
        content: "The AW-IPM-S-20A-600V is purpose-built for servo applications, and it shows. The high-frequency capability (up to 25kHz) is essential for servo performance, and the switching losses are remarkably low even at 20kHz. The integrated current sensing is accurate and stable - I've measured less than 1% error across temperature, which is critical for precise torque control. In a recent 3kW servo application for a packaging machine, this IPM delivered smooth motion with minimal torque ripple. The protection features are well-tuned for servo applications - fast enough to protect the module but not so sensitive that they cause nuisance trips during normal operation. For thermal design, the module runs cool even at high frequency due to the optimized switching. I typically see junction temperatures 15-20°C lower than comparable IPMs at the same switching frequency. If you're building servo drives, this IPM offers excellent performance and value.",
        highlight: "Excellent servo performance with high-frequency switching and precise current sensing"
      },
      alternativeParts: [
        {
          partNumber: "AW-IPM-S-15A-600V",
          link: "/aowei/products/intelligent-power-modules/aw-ipm-s-15a-600v.html",
          reason: "Lower current for 2-3kW servo drives",
          brand: "Aowei"
        },
        {
          partNumber: "AW-IPM-S-30A-600V",
          link: "/aowei/products/intelligent-power-modules/aw-ipm-s-30a-600v.html",
          reason: "Higher current for 7-10kW servo drives",
          brand: "Aowei"
        }
      ],
      companionParts: [
        {
          partNumber: "Servo MCU",
          link: "#",
          description: "High-performance MCU with FOC and encoder interface",
          category: "Controllers"
        },
        {
          partNumber: "Encoder Interface",
          link: "#",
          description: "Resolver or optical encoder interface chip",
          category: "Interface ICs"
        },
        {
          partNumber: "Isolated ADC",
          link: "#",
          description: "High-resolution isolated current sensing",
          category: "ADCs"
        }
      ],
      faqs: [
        {
          question: "What is the current sensing accuracy of the AW-IPM-S-20A-600V?",
          "answer": "The AW-IPM-S-20A-600V features integrated current sensing with excellent accuracy: Sensing Method - Integrated precision shunt resistors in each phase leg. Sensing Range - ±40A peak (2x rated current) with linear response. Accuracy - ±1% of full scale across temperature range (-40°C to +125°C). Offset Drift - <50mV over temperature range. Bandwidth - Current sensing bandwidth >50kHz, suitable for high-speed current control. Resolution - With 12-bit ADC, current resolution is approximately 20mA. The integrated sensing eliminates external current sensors, reducing cost and board space. The sensing resistors are factory-calibrated for consistent performance. For highest accuracy, implement temperature compensation in software using the IPM temperature output.",
          decisionGuide: "±1% accuracy suitable for most servo applications. Implement temperature compensation for highest precision.",
          keywords: ["AW-IPM-S current sensing", "servo current accuracy"]
        },
        {
          question: "How does the AW-IPM-S series optimize for servo applications?",
          "answer": "The AW-IPM-S series includes several optimizations for servo drives: Fast Switching - Optimized for 15-25kHz switching to enable high-bandwidth current control. Low Switching Losses - Even at high frequency, losses are minimized to reduce heating. Precise Current Sensing - Integrated shunts provide accurate feedback for FOC algorithms. Low Torque Ripple - Matched IGBTs and optimized switching patterns minimize torque ripple. Fast Protection - Quick fault detection without nuisance trips during normal servo operation. Compact Size - Small footprint for space-constrained servo drives. High Reliability - Rugged design withstands the demanding duty cycles of servo applications. These features combine to deliver smooth, precise motion control required in robotics, CNC, and automation applications. The IPM is specifically tuned for the fast dynamics and precise control requirements of servo systems.",
          decisionGuide: "AW-IPM-S is optimized for servo with fast switching, precise sensing, and low torque ripple.",
          keywords: ["servo IPM optimization", "AW-IPM-S features"]
        }
      ]
    }
  ]
};

productsData.categories.push(ipmCategory);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log('✅ Added Intelligent Power Modules category');
