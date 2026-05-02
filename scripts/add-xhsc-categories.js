const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'xhsc', 'products.json');
const data = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add Motor Control category
const motorControlCategory = {
  "id": "motor-control",
  "name": "Motor Control",
  "slug": "xhsc-motor-control",
  "description": "Intelligent motor drivers and control solutions for BLDC, PMSM, and stepper motors in industrial and automotive applications.",
  "longDescription": "XHSC Motor Control portfolio provides comprehensive solutions for driving various motor types including brushless DC (BLDC), permanent magnet synchronous motors (PMSM), and stepper motors. The product line includes integrated motor drivers with built-in gate drivers, current sensing, and protection features. These ICs support sensorless and sensored control algorithms, field-oriented control (FOC), and trapezoidal commutation. With voltage ratings from 12V to 600V and current capabilities up to 50A, XHSC motor control solutions serve applications ranging from small cooling fans to large industrial drives. Advanced features include integrated bootstrap diodes, adjustable dead-time, overcurrent protection, and thermal monitoring. The products are available in industrial and automotive grades for reliable operation in demanding environments.",
  "series": [
    {"name": "XHSC-BLDC Series", "description": "Brushless DC motor drivers with integrated control"},
    {"name": "XHSC-Stepper Series", "description": "Stepper motor drivers with microstepping"},
    {"name": "XHSC-GateDriver Series", "description": "High-voltage gate drivers for external MOSFETs"},
    {"name": "XHSC-Integrated Series", "description": "Fully integrated motor drivers with power stages"}
  ],
  "selectionGuide": {
    "title": "How to Select XHSC Motor Control ICs",
    "description": "Consider motor type, voltage/current requirements, control algorithm, and protection features",
    "articleId": "motor-control-selection",
    "articleLink": "/xhsc/support/motor-control-selection.html"
  },
  "selectionGuideLink": {
    "url": "/xhsc/support/motor-control-selection.html",
    "text": "Motor Control Selection Guide"
  },
  "faqs": [
    {
      "question": "What types of motors can XHSC motor control ICs drive?",
      "answer": "XHSC motor control ICs support multiple motor types: 1) BLDC Motors - Brushless DC motors with trapezoidal or sinusoidal commutation, sensorless or sensored operation. Voltage ranges from 12V to 600V, power up to 5kW. 2) PMSM Motors - Permanent magnet synchronous motors with FOC (Field Oriented Control) for high-efficiency operation. Suitable for servo applications requiring precise torque and speed control. 3) Stepper Motors - Bipolar stepper motors with microstepping up to 1/256 for smooth motion. Integrated current regulation and decay modes. 4) DC Motors - Brushed DC motors with PWM speed control and direction reversal. Integrated H-bridge or external MOSFET drive options.",
      "decisionGuide": "Select based on your motor type and application requirements. Contact our motor control FAE for algorithm recommendations.",
      "keywords": ["motor control", "BLDC", "PMSM", "stepper motor"]
    },
    {
      "question": "What is the difference between sensorless and sensored motor control?",
      "answer": "Sensorless and sensored motor control represent two different approaches to determining rotor position: 1) Sensored Control - Uses Hall effect sensors or encoders to directly measure rotor position. Advantages include reliable startup, precise position control, and operation at very low speeds. Disadvantages include additional wiring, sensor cost, and potential sensor failure. 2) Sensorless Control - Estimates rotor position by monitoring back-EMF or motor currents. Advantages include lower cost, reduced wiring, and higher reliability. Disadvantages include potential startup issues and reduced performance at very low speeds. XHSC offers ICs supporting both approaches, with some products supporting seamless transition from sensored to sensorless operation for optimal performance.",
      "decisionGuide": "Use sensored control for applications requiring precise positioning or low-speed operation. Use sensorless for cost-sensitive applications with moderate speed ranges.",
      "keywords": ["sensorless control", "sensored control", "Hall sensors", "encoder"]
    },
    {
      "question": "What protection features do XHSC motor drivers include?",
      "answer": "XHSC motor drivers include comprehensive protection features: 1) Overcurrent Protection - Fast current limiting and shutdown protects against motor stall and short circuits. 2) Overvoltage Protection - Protects against regenerative voltage spikes during deceleration. 3) Undervoltage Lockout - Prevents erratic operation during low battery or power supply conditions. 4) Thermal Protection - Monitors die temperature and shuts down when exceeding safe limits. 5) Shoot-Through Protection - Prevents simultaneous conduction of high-side and low-side switches. 6) Adjustable Dead-Time - Configurable delay between switching transitions prevents cross-conduction. 7) Fault Reporting - Digital fault flags indicate specific protection events for system diagnostics.",
      "decisionGuide": "All XHSC motor drivers include essential protections. For harsh environments, select parts with enhanced protection and higher voltage/current margins.",
      "keywords": ["motor protection", "overcurrent", "thermal protection", "fault reporting"]
    },
    {
      "question": "How do I select the right gate driver for my motor application?",
      "answer": "Selecting the right gate driver involves several considerations: 1) Voltage Rating - Must exceed maximum DC bus voltage with margin (typically 1.5x). XHSC offers 60V, 100V, 200V, and 600V options. 2) Current Drive Capability - Higher gate drive current enables faster switching, reducing switching losses. XHSC offers 0.5A to 4A drive capability. 3) Bootstrap vs Isolated - Bootstrap suitable for simple applications, isolated drivers for high-voltage or safety-critical systems. 4) Protection Features - Look for UVLO, shoot-through protection, and fault reporting. 5) Package - SOIC, QFN, or DIP depending on space and thermal requirements. For typical 24V-48V industrial applications, XHSC-GD2004 (200V, 4A) is an excellent choice.",
      "decisionGuide": "Match gate driver voltage and current ratings to your MOSFETs and application requirements. Contact our FAE team for specific recommendations.",
      "keywords": ["gate driver", "gate drive current", "bootstrap", "isolated driver"]
    },
    {
      "question": "Are XHSC motor control ICs suitable for automotive applications?",
      "answer": "Yes, many XHSC motor control ICs are AEC-Q100 qualified for automotive applications. These products feature: 1) Extended temperature range - Qualified for -40°C to +125°C (Grade 1) and -40°C to +150°C (Grade 0). 2) Enhanced EMC performance - Meet automotive CISPR 25 and ISO 11452 requirements for EMI/EMC. 3) Functional safety support - Documentation available for ISO 26262 ASIL development. 4) Robust protection - Comprehensive fault detection and reporting for safety-critical systems. 5) High reliability - Automotive-grade screening and qualification. Typical automotive applications include electric power steering, HVAC blowers, cooling fans, fuel pumps, and window lift motors. Contact our automotive FAE team for safety concept support.",
      "decisionGuide": "For automotive motor control, specify AEC-Q100 qualified parts. Contact our automotive team for functional safety documentation.",
      "keywords": ["automotive motor control", "AEC-Q100", "functional safety", "ISO 26262"]
    }
  ],
  "products": [
    {
      "partNumber": "XHSC-BLDC-36V10A",
      "name": "XHSC-BLDC-36V10A BLDC Motor Driver",
      "shortDescription": "Three-phase BLDC motor driver with integrated gate drivers, 36V 10A capability, sensorless FOC support for industrial applications.",
      "descriptionParagraphs": [
        "The XHSC-BLDC-36V10A is a highly integrated three-phase brushless DC motor driver designed for industrial and automotive applications.",
        "With integrated gate drivers capable of driving external MOSFETs up to 36V and 10A continuous current, this IC supports both sensored and sensorless control algorithms.",
        "Advanced features include field-oriented control (FOC) support, space vector PWM, and comprehensive protection mechanisms."
      ],
      "specifications": {
        "Motor Type": "Three-phase BLDC/PMSM",
        "Voltage Range": "8V to 36V",
        "Output Current": "10A Continuous, 15A Peak",
        "Gate Drive Current": "1A Source/Sink",
        "PWM Frequency": "Up to 100kHz",
        "Control Interface": "SPI, PWM, Analog",
        "Protection": "OCP, OVP, UVLO, Thermal, Shoot-through",
        "Operating Temperature": "-40°C to +125°C",
        "Package": "QFN48, TQFP64"
      },
      "features": [
        "Integrated three-phase gate drivers with 1A drive capability",
        "Supports sensorless FOC and trapezoidal commutation",
        "Adjustable dead-time and PWM frequency",
        "Integrated bootstrap diodes for high-side drive",
        "Current sensing with programmable gain amplifiers",
        "Comprehensive fault detection and reporting",
        "SPI interface for configuration and diagnostics",
        "AEC-Q100 qualified for automotive applications"
      ],
      "applications": [
        "Industrial pumps and fans",
        "HVAC blowers and compressors",
        "Electric power steering",
        "Cooling fans for EV/HEV",
        "Drone propulsion systems",
        "Medical equipment motors"
      ],
      "faeReview": {
        "author": "Robert Zhang",
        "title": "Senior FAE - Motor Control",
        "content": "The XHSC-BLDC-36V10A is an excellent integrated solution for BLDC motor control. I've successfully deployed this driver in multiple industrial pump applications with great results. The integrated gate drivers eliminate the need for external driver ICs, reducing BOM cost and PCB area. The sensorless FOC implementation works well for most applications, though I recommend adding Hall sensors if you need precise control below 10% speed. Current sensing is accurate and the overcurrent protection responds quickly. One important note: ensure adequate cooling for the MOSFETs as the driver itself doesn't limit power dissipation. The SPI interface is handy for real-time diagnostics and parameter tuning during development.",
        "highlight": "Highly integrated BLDC driver with excellent FOC performance for industrial motors"
      },
      "alternativeParts": [
        {
          "partNumber": "DRV8323",
          "brand": "Texas Instruments",
          "specifications": {
            "Voltage Range": "6V to 60V",
            "Gate Drive Current": "1A",
            "Features": "Integrated buck, current sense amps"
          },
          "comparison": {
            "Voltage Range": "8-36V < 6-60V (TI wider)",
            "Gate Drive": "1A = 1A (Same)",
            "Integration": "TI => Higher (Integrated buck)",
            "Price": "XHSC => Lower (More cost-effective)"
          },
          "reason": "Cost-effective alternative with similar gate drive capability",
          "useCase": "Cost-sensitive BLDC applications not requiring 60V operation",
          "link": "#"
        },
        {
          "partNumber": "STSPIN32F0",
          "brand": "STMicroelectronics",
          "specifications": {
            "Voltage Range": "8V to 45V",
            "MCU": "Integrated Cortex-M0",
            "Gate Drive Current": "0.6A"
          },
          "comparison": {
            "Voltage Range": "8-36V < 8-45V (ST wider)",
            "Integration": "ST => Higher (Integrated MCU)",
            "Gate Drive": "1A > 0.6A (XHSC higher)",
            "Flexibility": "XHSC => Higher (External MCU choice)"
          },
          "reason": "External MCU option provides more design flexibility",
          "useCase": "Applications requiring specific MCU features or processing power",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "XHSC-M3F103C8T6",
          "link": "/xhsc/products/mcu/xhsc-m3f103c8t6.html",
          "description": "MCU for motor control algorithm implementation",
          "category": "MCU"
        },
        {
          "partNumber": "XHSC-MOSFET-40V",
          "link": "#",
          "description": "40V N-channel MOSFETs for power stage",
          "category": "Discrete"
        },
        {
          "partNumber": "XHSC-Current-Sensor",
          "link": "#",
          "description": "Hall effect current sensor for phase current measurement",
          "category": "Sensors"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum PWM frequency supported by XHSC-BLDC-36V10A?",
          "answer": "The XHSC-BLDC-36V10A supports PWM frequencies up to 100kHz, though typical applications use 10-20kHz for optimal balance between switching losses and current ripple. Higher frequencies (50-100kHz) can be used for smaller motors or when audible noise reduction is critical, but this increases switching losses in the MOSFETs. Lower frequencies (5-10kHz) reduce switching losses but may cause audible noise and higher current ripple. The PWM frequency can be dynamically adjusted through the SPI interface during operation, allowing optimization for different speed ranges. For most industrial applications, 16kHz provides good performance with minimal audible noise.",
          "decisionGuide": "Use 16-20kHz for general industrial applications. Increase to 50kHz+ for noise-sensitive applications or decrease to 10kHz for maximum efficiency.",
          "keywords": ["PWM frequency", "switching losses", "audible noise"]
        },
        {
          "question": "How does the sensorless FOC implementation work on XHSC-BLDC-36V10A?",
          "answer": "The XHSC-BLDC-36V10A implements advanced sensorless FOC using sliding mode observer (SMO) and phase-locked loop (PLL) techniques. The algorithm estimates rotor position by monitoring motor currents and voltages, eliminating the need for Hall sensors or encoders. Key features include: 1) Start-up algorithm - Open-loop start-up with current control transitions to closed-loop FOC once sufficient back-EMF is detected. 2) Observer tuning - Configurable observer gains for different motor parameters. 3) Speed range - Typically supports 10% to 100% of rated speed without sensors. 4) Load disturbance rejection - Fast current loops provide excellent dynamic response. The SPI interface allows real-time monitoring of estimated position and speed for debugging and optimization.",
          "decisionGuide": "Sensorless FOC works well for most variable-speed applications. Add Hall sensors if precise low-speed control (<10% speed) is required.",
          "keywords": ["sensorless FOC", "field oriented control", "sliding mode observer"]
        },
        {
          "question": "What MOSFETs are recommended for use with XHSC-BLDC-36V10A?",
          "answer": "For use with XHSC-BLDC-36V10A, select N-channel MOSFETs with these characteristics: 1) Voltage rating - Minimum 40V for 24V systems, 60V for 36V systems, providing adequate margin for voltage spikes. 2) Current rating - Select RDS(on) such that conduction losses are acceptable at maximum current. For 10A applications, look for <5mΩ at VGS=10V. 3) Gate charge - Lower Qg reduces switching losses and driver power dissipation. Target Qg < 50nC for good performance. 4) Package - D2PAK or DPAK for through-hole, Power-SO8 or LFPAK for surface mount. Recommended parts include XHSC-MOSFET-40V series or equivalent from major suppliers. Ensure adequate heat sinking for continuous operation at maximum current.",
          "decisionGuide": "Select MOSFETs with voltage margin, low RDS(on), and moderate gate charge. Contact our FAE team for specific recommendations based on your operating conditions.",
          "keywords": ["MOSFET selection", "gate charge", "RDS(on)", "conduction losses"]
        },
        {
          "question": "How do I configure the dead-time on XHSC-BLDC-36V10A?",
          "answer": "Dead-time on XHSC-BLDC-36V10A is configured through the SPI interface by writing to the CONFIG register. Dead-time ranges from 100ns to 3μs in 100ns steps. The required dead-time depends on MOSFET switching characteristics: 1) Measure MOSFET turn-off delay (td(off)) and fall time (tf) from datasheet. 2) Add safety margin (typically 50-100%) to account for variations. 3) Set dead-time to: td(off) + tf + margin. For typical MOSFETs with 100ns turn-off, use 200-300ns dead-time. Excessive dead-time increases body diode conduction losses, while insufficient dead-time risks shoot-through. The IC includes shoot-through protection as backup, but proper dead-time setting is essential for reliable operation.",
          "decisionGuide": "Start with 500ns dead-time and optimize based on efficiency measurements. Monitor switching waveforms to verify adequate dead-time.",
          "keywords": ["dead-time", "shoot-through protection", "MOSFET switching"]
        },
        {
          "question": "What current sensing options are available with XHSC-BLDC-36V10A?",
          "answer": "XHSC-BLDC-36V10A provides multiple current sensing options: 1) Low-side shunt resistors - Simple and cost-effective, placed in source of low-side MOSFETs. Integrated amplifiers with programmable gain (5x, 10x, 20x, 50x) amplify the shunt voltage. 2) Single shunt - Uses one shunt resistor on DC bus, reconstructed phase currents using SVPWM patterns. Lower cost but requires specific PWM patterns. 3) Hall effect sensors - External Hall sensors can be interfaced for isolated current measurement. The IC supports overcurrent protection using any of these methods with programmable thresholds. Current feedback is available through SPI for control algorithm implementation. For best FOC performance, dual or triple shunt configuration is recommended.",
          "decisionGuide": "Use triple shunt for best FOC performance, single shunt for cost-sensitive applications. Hall sensors provide isolation but add cost.",
          "keywords": ["current sensing", "shunt resistor", "Hall effect sensor", "FOC"]
        },
        {
          "question": "Can XHSC-BLDC-36V10A drive PMSM motors as well as BLDC motors?",
          "answer": "Yes, XHSC-BLDC-36V10A can drive both BLDC and PMSM motors. The key difference is in the control algorithm: 1) BLDC motors use trapezoidal commutation with six-step switching, which is simpler but produces more torque ripple. 2) PMSM motors use sinusoidal commutation with FOC, providing smoother operation and higher efficiency. The XHSC driver supports both modes through software configuration. For PMSM motors, the FOC algorithm requires more processing power from the external MCU but delivers superior performance including: better speed regulation, lower torque ripple, higher efficiency (especially at partial loads), and smoother operation at low speeds. The same hardware can be used for both motor types by changing the control firmware.",
          "decisionGuide": "Use trapezoidal control for simple BLDC applications. Use FOC for PMSM motors or when smooth operation and high efficiency are required.",
          "keywords": ["PMSM motor", "trapezoidal commutation", "sinusoidal commutation"]
        }
      ]
    }
  ]
};

// Add Interface ICs category
const interfaceCategory = {
  "id": "interface-ics",
  "name": "Interface ICs",
  "slug": "xhsc-interface-ics",
  "description": "RS-485, CAN, LIN transceivers and isolation devices for robust industrial communication networks.",
  "longDescription": "XHSC Interface IC portfolio provides reliable communication solutions for industrial and automotive networks. The product line includes RS-485/RS-422 transceivers for long-distance differential communication, CAN transceivers for robust automotive and industrial networks, LIN transceivers for cost-effective automotive body electronics, and digital isolators for safety-critical applications. These ICs feature high ESD protection (up to ±15kV), wide common-mode voltage ranges, and excellent EMI performance. With data rates from 20kbps to 50Mbps and operating temperatures from -40°C to +125°C, XHSC interface ICs meet the demanding requirements of industrial automation, automotive electronics, and building automation systems.",
  "series": [
    {"name": "XHSC-RS485 Series", "description": "RS-485/RS-422 transceivers for industrial networks"},
    {"name": "XHSC-CAN Series", "description": "CAN bus transceivers for automotive and industrial"},
    {"name": "XHSC-LIN Series", "description": "LIN bus transceivers for automotive body electronics"},
    {"name": "XHSC-Isolation Series", "description": "Digital isolators for safety-critical applications"}
  ],
  "selectionGuide": {
    "title": "How to Select XHSC Interface ICs",
    "description": "Consider communication protocol, data rate, isolation requirements, and protection features",
    "articleId": "interface-selection",
    "articleLink": "/xhsc/support/interface-selection.html"
  },
  "selectionGuideLink": {
    "url": "/xhsc/support/interface-selection.html",
    "text": "Interface IC Selection Guide"
  },
  "faqs": [
    {
      "question": "What is the difference between RS-485, CAN, and LIN interfaces?",
      "answer": "RS-485, CAN, and LIN are three common industrial/automotive communication interfaces with different characteristics: 1) RS-485 - Differential multi-point interface supporting up to 32 nodes and 50Mbps. Used in industrial automation, building control, and instrumentation. Simple protocol, no built-in arbitration. 2) CAN - Controller Area Network with built-in arbitration and error detection. Supports up to 1Mbps and 110 nodes. Dominant in automotive and industrial control. Robust against EMI. 3) LIN - Low-cost single-wire interface for automotive body electronics. Master-slave architecture, up to 20kbps. Lowest cost option for non-critical applications like door modules and seat controls. XHSC offers transceivers for all three protocols.",
      "decisionGuide": "Use RS-485 for simple multi-drop networks, CAN for robust automotive/industrial networks, LIN for cost-sensitive automotive body electronics.",
      "keywords": ["RS-485", "CAN bus", "LIN bus", "communication protocol"]
    },
    {
      "question": "What protection features do XHSC interface transceivers include?",
      "answer": "XHSC interface transceivers include comprehensive protection features: 1) ESD Protection - Up to ±15kV HBM (Human Body Model) on bus pins protects against electrostatic discharge. 2) Surge Protection - IEC 61000-4-5 compliant surge protection up to ±1kV. 3) Overvoltage Protection - Protection against bus voltage faults up to ±60V for RS-485, ±36V for CAN. 4) Short-Circuit Protection - Current limiting protects driver outputs against short circuits to power or ground. 5) Thermal Shutdown - Disables outputs if die temperature exceeds safe limits. 6) Common-Mode Range - Wide common-mode voltage range (-7V to +12V for RS-485) ensures reliable operation in noisy environments.",
      "decisionGuide": "All XHSC interface ICs include robust protection. For harsh industrial environments, select parts with enhanced ESD and surge protection.",
      "keywords": ["ESD protection", "surge protection", "overvoltage protection", "thermal shutdown"]
    },
    {
      "question": "How do I select the right RS-485 transceiver for my application?",
      "answer": "Selecting the right RS-485 transceiver involves several considerations: 1) Data Rate - Choose transceiver rated for your required speed. XHSC offers 250kbps, 500kbps, and 50Mbps options. 2) Half vs Full Duplex - Half-duplex (2-wire) for multi-drop networks, full-duplex (4-wire) for point-to-point. 3) Node Count - Standard transceivers support 32 unit loads. XHSC 1/8 unit load devices support up to 256 nodes. 4) Isolation - Isolated transceivers for safety-critical or high common-mode applications. 5) Protection Level - Enhanced ESD (±15kV) and surge protection for harsh environments. 6) Supply Voltage - 3.3V or 5V options available. For most industrial applications, XHSC-RS485-500K (500kbps, half-duplex) is an excellent choice.",
      "decisionGuide": "Match data rate and protection level to your application requirements. Contact our FAE team for network design assistance.",
      "keywords": ["RS-485 transceiver", "data rate", "half duplex", "full duplex"]
    },
    {
      "question": "What are the key features of XHSC CAN transceivers?",
      "answer": "XHSC CAN transceivers offer features optimized for automotive and industrial applications: 1) CAN FD Support - Many devices support CAN Flexible Data-rate up to 5Mbps for high-speed communication. 2) Low Power Modes - Standby and sleep modes with remote wake-up capability for battery-powered systems. 3) Excellent EMC - High immunity to electromagnetic interference meets automotive requirements. 4) Wide Common-Mode Range - ±12V common-mode range ensures reliable operation in noisy environments. 5) Protection Features - ±36V bus fault protection, thermal shutdown, and short-circuit protection. 6) VIO Pin - Some devices have separate I/O voltage pin for interfacing with 3.3V or 5V MCUs. 7) Silent Mode - Listen-only mode for monitoring without transmitting.",
      "decisionGuide": "Select CAN FD capable devices for new designs. Use low-power variants for battery-powered applications. Contact LiTong for specific recommendations.",
      "keywords": ["CAN transceiver", "CAN FD", "low power", "EMC"]
    },
    {
      "question": "When should I use isolated interface transceivers?",
      "answer": "Isolated interface transceivers should be used in these situations: 1) Safety-Critical Applications - Medical equipment, industrial safety systems where galvanic isolation is required for patient or operator safety. 2) High Common-Mode Voltages - When communication nodes have large ground potential differences (>few volts). 3) Noisy Environments - Heavy industrial environments with high EMI/EMC where isolation improves signal integrity. 4) Long Cable Runs - When cable length exceeds 100m or runs between buildings. 5) Lightning Protection - Outdoor installations where lightning-induced transients are a concern. 6) Equipment Protection - To prevent ground loops and protect sensitive control electronics from field-side faults. XHSC offers isolated RS-485 and CAN transceivers with reinforced isolation up to 5kVrms.",
      "decisionGuide": "Use isolated transceivers for safety-critical, high common-mode, or long-distance applications. Contact our FAE team for isolation design guidance.",
      "keywords": ["isolated transceiver", "galvanic isolation", "common-mode voltage", "safety"]
    }
  ],
  "products": [
    {
      "partNumber": "XHSC-RS485-500K",
      "name": "XHSC-RS485-500K RS-485 Transceiver",
      "shortDescription": "High-speed half-duplex RS-485 transceiver with 500kbps data rate, ±15kV ESD protection, industrial temperature range.",
      "descriptionParagraphs": [
        "The XHSC-RS485-500K is a robust half-duplex RS-485 transceiver designed for demanding industrial communication applications.",
        "Supporting data rates up to 500kbps with ±15kV ESD protection on bus pins, this transceiver ensures reliable operation in harsh environments.",
        "Wide common-mode voltage range of -7V to +12V and 1/8 unit load allows up to 256 nodes on a single bus."
      ],
      "specifications": {
        "Protocol": "RS-485/RS-422",
        "Data Rate": "Up to 500kbps",
        "Duplex": "Half-duplex",
        "ESD Protection": "±15kV HBM on bus pins",
        "Common-Mode Range": "-7V to +12V",
        "Unit Load": "1/8 (256 nodes max)",
        "Supply Voltage": "3.3V or 5V",
        "Protection": "Short-circuit, thermal shutdown",
        "Operating Temperature": "-40°C to +85°C",
        "Package": "SOIC-8, MSOP-8"
      },
      "features": [
        "High-speed operation up to 500kbps",
        "±15kV ESD protection on bus pins",
        "1/8 unit load supports up to 256 nodes",
        "Wide common-mode voltage range",
        "Fail-safe receiver for open/short/idle bus",
        "Low supply current (300μA typical)",
        "Glitch-free power-up/power-down",
        "Industrial temperature range"
      ],
      "applications": [
        "Industrial automation networks",
        "Building automation systems",
        "Motor control systems",
        "Instrumentation and test equipment",
        "Security and surveillance systems",
        "Point-of-sale equipment"
      ],
      "faeReview": {
        "author": "Jennifer Wu",
        "title": "FAE - Industrial Communication",
        "content": "The XHSC-RS485-500K is my standard recommendation for industrial RS-485 applications. The ±15kV ESD protection has saved numerous designs from field failures due to static discharge. I've used this transceiver in building automation systems with cable runs over 500m without issues. The 1/8 unit load is particularly valuable for large networks - I've successfully deployed systems with 100+ nodes. The fail-safe feature ensures defined receiver output when bus is idle or open, eliminating the need for external biasing resistors in many applications. For best EMI performance, I recommend using twisted pair cable with proper termination at both ends. The low quiescent current is also beneficial for battery-backed systems.",
        "highlight": "Reliable RS-485 transceiver with excellent ESD protection for industrial networks"
      },
      "alternativeParts": [
        {
          "partNumber": "MAX485",
          "brand": "Maxim Integrated",
          "specifications": {
            "Data Rate": "2.5Mbps",
            "ESD Protection": "±15kV",
            "Unit Load": "1 (32 nodes)"
          },
          "comparison": {
            "Data Rate": "500kbps < 2.5Mbps (Maxim higher)",
            "ESD Protection": "±15kV = ±15kV (Same)",
            "Node Count": "256 > 32 (XHSC higher)",
            "Price": "XHSC => Lower (More cost-effective)"
          },
          "reason": "Higher node count capability at lower cost",
          "useCase": "Large network applications requiring more than 32 nodes",
          "link": "#"
        },
        {
          "partNumber": "SN75176",
          "brand": "Texas Instruments",
          "specifications": {
            "Data Rate": "10Mbps",
            "ESD Protection": "Standard",
            "Unit Load": "1 (32 nodes)"
          },
          "comparison": {
            "Data Rate": "500kbps < 10Mbps (TI higher)",
            "ESD Protection": "±15kV > Standard (XHSC better)",
            "Node Count": "256 > 32 (XHSC higher)",
            "Robustness": "XHSC => Better (Enhanced protection)"
          },
          "reason": "Better ESD protection and higher node count",
          "useCase": "Industrial environments requiring enhanced protection",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "XHSC-M3F103C8T6",
          "link": "/xhsc/products/mcu/xhsc-m3f103c8t6.html",
          "description": "MCU with UART for protocol handling",
          "category": "MCU"
        },
        {
          "partNumber": "XHSC-Common-Mode-Choke",
          "link": "#",
          "description": "Common mode choke for EMI suppression",
          "category": "Passive Components"
        },
        {
          "partNumber": "XHSC-TVSDiode",
          "link": "#",
          "description": "TVS diode for additional surge protection",
          "category": "Protection"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum cable length for XHSC-RS485-500K?",
          "answer": "The maximum cable length for RS-485 depends on data rate and cable quality. At 500kbps (maximum for XHSC-RS485-500K), maximum cable length is approximately 400-500 meters using standard 24AWG twisted pair cable. At lower data rates, longer distances are possible: 100kbps supports up to 1200m, 19.2kbps supports up to 2500m. These distances assume proper termination (120Ω at both ends) and limited number of nodes. For very long runs or high node counts, use lower data rates or add repeaters. The XHSC transceiver's wide common-mode range (-7V to +12V) helps maintain signal integrity over long cables with ground potential differences.",
          "decisionGuide": "Use 500kbps for short runs (<100m), lower rates for longer distances. Contact our FAE team for network design assistance.",
          "keywords": ["cable length", "transmission distance", "twisted pair"]
        },
        {
          "question": "How many nodes can be connected on a single RS-485 bus?",
          "answer": "The XHSC-RS485-500K features 1/8 unit load input impedance, allowing up to 256 transceivers on a single bus. Standard RS-485 transceivers (1 unit load) limit networks to 32 nodes. The 1/8 unit load reduces loading on the bus, allowing more nodes while maintaining signal integrity. However, practical limits may be lower depending on cable length, data rate, and topology. For best performance: 1) Use daisy-chain topology, avoid star configurations. 2) Keep stub lengths short (< 1 inch per Mbps). 3) Use proper termination at both ends of the bus. 4) Consider using repeaters for very large networks. In practice, networks with 50-100 nodes are common and reliable when properly designed.",
          "decisionGuide": "Up to 256 nodes theoretically possible. For reliable operation, limit to 100 nodes or use repeaters for larger networks.",
          "keywords": ["node count", "unit load", "bus loading", "network topology"]
        },
        {
          "question": "What is fail-safe operation in RS-485?",
          "answer": "Fail-safe operation ensures the RS-485 receiver outputs a defined logic state (typically high) when the bus is idle, open, or shorted. Without fail-safe, receiver output is undefined in these conditions, potentially causing communication errors. XHSC-RS485-500K includes internal fail-safe circuitry that forces receiver output high when: 1) Bus is idle (no driver active) - Differential voltage near zero. 2) Bus is open - Disconnected cables. 3) Bus is shorted - A and B lines shorted together. This eliminates the need for external fail-safe biasing resistors in most applications, reducing component count. The fail-safe threshold is typically -50mV to -200mV, ensuring reliable operation while maintaining noise immunity.",
          "decisionGuide": "Internal fail-safe eliminates need for external biasing resistors. Ensure all nodes on bus have fail-safe or use external biasing if mixing transceiver types.",
          "keywords": ["fail-safe", "idle bus", "biasing resistors", "receiver output"]
        },
        {
          "question": "How do I properly terminate an RS-485 bus?",
          "answer": "Proper termination is critical for reliable RS-485 operation: 1) Termination Location - Place 120Ω termination resistors at both ends of the bus only, not at intermediate nodes. 2) Termination Value - 120Ω matches typical twisted pair cable impedance. Use 100-130Ω depending on cable type. 3) DC Biasing - For fail-safe operation with non-fail-safe transceivers, add 650Ω pull-up to A line and 650Ω pull-down to B line at one end only. 4) Stub Lengths - Keep node stubs (connections to main bus) as short as possible, ideally under 1 inch per Mbps of data rate. 5) Ground Reference - Connect reference grounds between nodes, but avoid ground loops. Use 100Ω resistor in series with ground connection if large ground potential differences exist.",
          "decisionGuide": "Use 120Ω termination at both ends only. Keep stubs short. Contact our FAE team for network layout review.",
          "keywords": ["termination", "120 ohm", "bus topology", "stub length"]
        },
        {
          "question": "What is the difference between half-duplex and full-duplex RS-485?",
          "answer": "Half-duplex and full-duplex RS-485 differ in communication direction capability: 1) Half-Duplex - Uses 2 wires (A and B) for differential signaling. Data can flow in both directions but only one direction at a time. Requires direction control (driver enable/receiver enable). Most common for multi-drop networks. XHSC-RS485-500K is half-duplex. 2) Full-Duplex - Uses 4 wires (A/B for transmit, Y/Z for receive). Allows simultaneous two-way communication like a telephone. No direction control needed. Typically used for point-to-point links or master-slave where master talks while listening. Full-duplex is less common due to higher wiring cost. For most industrial networks, half-duplex with proper protocol design is sufficient and more economical.",
          "decisionGuide": "Use half-duplex for multi-drop networks. Use full-duplex only for point-to-point requiring simultaneous bidirectional communication.",
          "keywords": ["half duplex", "full duplex", "direction control", "multi-drop"]
        },
        {
          "question": "Can XHSC-RS485-500K operate with 3.3V or 5V supplies?",
          "answer": "The XHSC-RS485-500K is available in both 3.3V and 5V supply versions, designated by suffix in part number (-3V3 or -5V0). Both versions maintain full RS-485 compliance with ±1.5V minimum differential output voltage. Key differences: 1) Logic Levels - 3.3V version accepts 3.3V logic levels on control pins, 5V version accepts 5V logic. 2) Power Consumption - 3.3V version consumes slightly less power. 3) Bus Performance - Both versions provide identical bus drive capability and meet RS-485 specifications. 4) MCU Interface - Choose version matching your MCU supply voltage for direct connection. Both versions can interoperate on the same bus - the supply voltage only affects logic interface, not bus signaling.",
          "decisionGuide": "Select supply voltage matching your MCU (3.3V or 5V). Bus performance is identical between versions.",
          "keywords": ["supply voltage", "3.3V", "5V", "logic levels"]
        }
      ]
    }
  ]
};

// Add the new categories
data.categories.push(motorControlCategory);
data.categories.push(interfaceCategory);

// Write back to file
fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));

console.log('✅ Added Motor Control and Interface ICs categories');
console.log(`✅ Total categories: ${data.categories.length}`);
console.log(`✅ Total products: ${data.categories.reduce((sum, cat) => sum + cat.products.length, 0)}`);
