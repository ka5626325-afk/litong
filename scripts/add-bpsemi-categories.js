#!/usr/bin/env node
/**
 * Add remaining BPSemi product categories
 */

const fs = require('fs');
const path = require('path');

const brand = 'bpsemi';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 2: AC/DC Power Management
const acdcCategory = {
  "id": "acdc-power-management",
  "name": "AC/DC Power Management",
  "slug": "acdc-power-management",
  "description": "Comprehensive AC/DC converter solutions for adapters, chargers, and auxiliary power supplies with high efficiency and low standby power.",
  "longDescription": "BPSemi AC/DC power management ICs provide efficient and reliable solutions for power adapter, charger, and auxiliary power supply applications. The portfolio includes flyback controllers, QR (Quasi-Resonant) controllers, and synchronous rectifier controllers covering power ranges from 5W to 100W+. These ICs feature advanced control algorithms for high efficiency across load ranges, low standby power consumption (<75mW), and comprehensive protection features. BPSemi's AC/DC solutions are widely used in mobile chargers, power adapters, appliance power supplies, and industrial auxiliary power applications. As an authorized distributor, LiTong provides complete technical support including transformer design guidance, efficiency optimization, and EMI troubleshooting for AC/DC power supply designs.",
  "series": [
    {
      "name": "BP Series Flyback",
      "description": "High-efficiency flyback controllers for adapter and charger applications",
      "applications": ["Mobile chargers", "Power adapters", "Appliance power"]
    },
    {
      "name": "SDH Series QR",
      "description": "Quasi-resonant controllers for high-efficiency switch-mode power supplies",
      "applications": ["High-power adapters", "Industrial power", "LED drivers"]
    }
  ],
  "selectionGuide": "AC/DC Converter Selection Guide",
  "selectionGuideLink": "/bpsemi/support/acdc-converter-selection-guide.html",
  "faqs": [
    {
      "question": "How do I select the right AC/DC converter topology?",
      "answer": "AC/DC converter topology selection depends on power level, efficiency requirements, and cost constraints. For low-power applications (5-20W), simple flyback converters offer cost-effective solutions. For medium power (20-60W), quasi-resonant (QR) flyback provides better efficiency with valley switching. For high power (>60W), active clamp flyback or LLC resonant converters offer the best efficiency. BPSemi provides controllers for all these topologies. Consider input voltage range, output power, efficiency targets, and EMI requirements when selecting topology.",
      "decisionGuide": "Contact LiTong FAEs for topology selection guidance based on your specific power requirements.",
      "keywords": ["AC/DC topology", "flyback converter", "quasi-resonant"]
    },
    {
      "question": "What is quasi-resonant (QR) operation and its benefits?",
      "answer": "Quasi-resonant operation switches the MOSFET at the minimum voltage point (valley) of the drain voltage ringing, reducing switching losses and EMI. Benefits include: 1) Lower switching losses improving efficiency, especially at light loads, 2) Reduced EMI due to softer switching transitions, 3) Lower voltage stress on MOSFET, 4) Better light-load efficiency. BPSemi QR controllers automatically detect the valley point and adjust switching timing for optimal performance across load conditions.",
      "decisionGuide": "Use QR controllers for applications requiring high efficiency across wide load ranges. Contact LiTong for QR design support.",
      "keywords": ["quasi-resonant", "valley switching", "QR controller"]
    },
    {
      "question": "How do I achieve low standby power in AC/DC designs?",
      "answer": "Achieving low standby power (<75mW or <30mW for modern standards) requires: 1) Using controllers with burst mode operation at light loads, 2) Minimizing startup resistor current, 3) Using synchronous rectification instead of diode rectification, 4) Optimizing transformer design for low core losses, 5) Implementing X-capacitor discharge circuits. BPSemi controllers feature advanced burst mode operation and low quiescent current to help achieve stringent standby power requirements.",
      "decisionGuide": "Select BPSemi controllers with burst mode for standby power requirements. Contact LiTong for standby power optimization.",
      "keywords": ["standby power", "burst mode", "no-load power"]
    },
    {
      "question": "What EMI considerations are important for AC/DC designs?",
      "answer": "EMI design considerations for AC/DC converters: 1) Input filtering - use common mode chokes and X/Y capacitors, 2) Snubber circuits - suppress voltage spikes on MOSFET drain, 3) Shielding - use shielded transformers for high-power designs, 4) PCB layout - minimize switching loop areas, 5) Spread spectrum - some controllers offer frequency dithering. BPSemi controllers feature frequency jitter and soft switching to reduce EMI. Plan for EMI testing early in the design process.",
      "decisionGuide": "Follow BPSemi reference designs for EMI-optimized layouts. Contact LiTong for EMI troubleshooting support.",
      "keywords": ["EMI design", "EMC compliance", "input filtering"]
    },
    {
      "question": "How do I design the transformer for flyback converters?",
      "answer": "Flyback transformer design involves: 1) Selecting core size based on power level and frequency, 2) Calculating turns ratio based on input/output voltages and MOSFET rating, 3) Determining inductance for desired operating mode (CCM or DCM), 4) Designing winding configuration for low leakage inductance, 5) Selecting wire gauge for current handling and skin effect. BPSemi provides transformer design calculators and reference designs. Work with qualified magnetic component suppliers for custom transformers.",
      "decisionGuide": "Use BPSemi transformer design tools or contact LiTong for transformer design support and supplier recommendations.",
      "keywords": ["transformer design", "flyback transformer", "magnetics"]
    }
  ],
  "products": [
    {
      "partNumber": "BP87112",
      "name": "High-Efficiency Flyback Controller",
      "shortDescription": "High-performance flyback PWM controller with integrated 700V MOSFET for adapter applications up to 24W",
      "descriptionParagraphs": [
        "The BP87112 is a high-efficiency flyback PWM controller with integrated 700V power MOSFET designed for power adapter and charger applications. It features optimized PWM control for high efficiency across load conditions.",
        "This controller supports universal AC input (85V-265V) and provides accurate constant voltage and constant current regulation. The built-in frequency dithering function helps reduce EMI and simplify filter design.",
        "Advanced protection features include over-voltage protection, over-current protection, short-circuit protection, and over-temperature protection. The BP87112 achieves low standby power consumption below 75mW."
      ],
      "specifications": {
        "Input Voltage": "85V-265V AC",
        "Output Power": "Up to 24W",
        "Integrated MOSFET": "700V",
        "Switching Frequency": "65kHz",
        "Standby Power": "<75mW",
        "CV Accuracy": "±1%",
        "CC Accuracy": "±5%",
        "Package": "SOP-8"
      },
      "features": [
        "Integrated 700V power MOSFET",
        "High-efficiency PWM control",
        "Frequency dithering for EMI reduction",
        "Low standby power <75mW",
        "CV/CC regulation",
        "Comprehensive protection"
      ],
      "applications": [
        "Mobile chargers",
        "Power adapters",
        "Appliance power supplies",
        "Auxiliary power",
        "Consumer electronics"
      ],
      "faeReview": {
        "author": "Steven Liu",
        "title": "Senior FAE - Power Supply Design",
        "content": "The BP87112 is an excellent choice for cost-effective adapter designs up to 24W. The integrated 700V MOSFET eliminates the need for external power switches, reducing BOM cost and PCB area. In my experience with multiple adapter designs, the built-in frequency dithering significantly reduces EMI, often allowing simpler filter designs that pass CISPR22/EN55022 with margin. The CV/CC regulation accuracy is good enough for most consumer applications. I recommend this part for mobile chargers and small power adapters where cost is critical. For higher power or better efficiency, consider BPSemi's QR controller series.",
        "highlight": "Cost-effective flyback solution with integrated MOSFET and good EMI performance"
      },
      "alternativeParts": [
        {
          "partNumber": "BP87113",
          "brand": "BPSemi",
          "specifications": {
            "inputVoltage": "85V-265V AC",
            "outputPower": "Up to 36W",
            "mosfet": "700V",
            "standbyPower": "<75mW"
          },
          "comparison": {
            "inputVoltage": "85V-265V AC = 85V-265V AC (same)",
            "outputPower": "36W > 24W (+50% higher power)",
            "mosfet": "700V = 700V (same)",
            "standbyPower": "<75mW = <75mW (same)",
            "package": "SOP-8 = SOP-8 (same)"
          },
          "reason": "Higher power rating for applications requiring 24-36W output",
          "useCase": "Higher power adapters and chargers",
          "link": "#"
        },
        {
          "partNumber": "iW1760B",
          "brand": "Dialog",
          "specifications": {
            "inputVoltage": "85V-265V AC",
            "outputPower": "Up to 20W",
            "standbyPower": "<30mW",
            "topology": "Flyback"
          },
          "comparison": {
            "inputVoltage": "85V-265V AC = 85V-265V AC (same)",
            "outputPower": "20W < 24W (-17% lower power)",
            "standbyPower": "<30mW < <75mW (better standby)",
            "topology": "Flyback = Flyback (same)",
            "price": "Higher cost"
          },
          "reason": "Alternative with lower standby power for energy star applications",
          "useCase": "Energy star certified adapters requiring <30mW standby",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Synchronous Rectifier Controller",
          "link": "#",
          "description": "SR controller for improved efficiency in high-current outputs",
          "category": "Rectification"
        },
        {
          "partNumber": "Output Filter Capacitors",
          "link": "#",
          "description": "Low-ESR electrolytic capacitors for output filtering",
          "category": "Passive Components"
        },
        {
          "partNumber": "Common Mode Choke",
          "link": "#",
          "description": "EMI filter common mode choke for input filtering",
          "category": "EMI Components"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum output power of BP87112?",
          "answer": "The BP87112 supports maximum output power of 24W under typical operating conditions with adequate thermal management. The actual maximum power depends on input voltage, thermal conditions, and efficiency requirements. At low input voltages (85V-110V), the maximum power may be limited by current ratings. For reliable operation, it is recommended to operate at 80% of maximum rated power with proper heatsinking and thermal design.",
          "decisionGuide": "For applications above 20W, verify thermal performance or consider BP87113 with higher power rating.",
          "keywords": ["maximum power", "thermal design", "output rating"]
        },
        {
          "question": "How does the frequency dithering function work?",
          "answer": "Frequency dithering modulates the switching frequency around the nominal value (typically ±5-10%) to spread EMI energy across a wider frequency band, reducing peak emissions. This helps meet EMI standards like CISPR22/EN55022 with simpler and lower-cost filter components. The BP87112 implements this function automatically without external components. The dithering is typically disabled at light loads to maintain efficiency in burst mode operation.",
          "decisionGuide": "Enable frequency dithering for EMI-sensitive applications. Contact LiTong for EMI filter design guidance.",
          "keywords": ["frequency dithering", "EMI reduction", "spread spectrum"]
        },
        {
          "question": "What is the difference between CV and CC regulation modes?",
          "answer": "CV (Constant Voltage) mode maintains a fixed output voltage regardless of load current, suitable for most electronic devices. CC (Constant Current) mode maintains a fixed output current, typically used for battery charging or LED driving. The BP87112 automatically switches between CV and CC modes: CV mode operates under normal load conditions, while CC mode activates when the load attempts to draw current above the set limit. This dual-mode operation makes the controller suitable for both adapter and charger applications.",
          "decisionGuide": "Configure CV/CC setpoints based on application requirements. Contact LiTong for CV/CC design guidance.",
          "keywords": ["CV mode", "CC mode", "constant voltage", "constant current"]
        },
        {
          "question": "How do I optimize efficiency with BP87112?",
          "answer": "Efficiency optimization strategies for BP87112: 1) Use synchronous rectification for output currents above 2A, 2) Optimize transformer design for minimal copper and core losses, 3) Select low-Rds(on) external MOSFET if using non-integrated version, 4) Use appropriate inductance for CCM operation at full load, 5) Minimize snubber losses while maintaining voltage stress limits, 6) Optimize feedback network for stability without excessive power consumption. BPSemi provides efficiency optimization guidelines and reference designs.",
          "decisionGuide": "Follow BPSemi efficiency optimization guidelines or contact LiTong for design review and optimization support.",
          "keywords": ["efficiency optimization", "synchronous rectification", "transformer design"]
        },
        {
          "question": "What startup circuit design is recommended?",
          "answer": "The BP87112 startup circuit typically uses a high-value startup resistor (1M-10M ohm) from the rectified DC bus to the VCC pin. After startup, the auxiliary winding supplies VCC power. For ultra-low standby power designs, consider using a depletion mode MOSFET or active startup circuit. The startup resistor value affects startup time and standby power - higher values reduce standby power but increase startup time. BPSemi reference designs provide optimized startup circuit configurations.",
          "decisionGuide": "Use BPSemi reference startup circuit or contact LiTong for ultra-low standby power startup design.",
          "keywords": ["startup circuit", "startup resistor", "standby power"]
        }
      ]
    },
    {
      "partNumber": "BP3288",
      "name": "Quasi-Resonant PWM Controller",
      "shortDescription": "High-efficiency quasi-resonant flyback controller with valley switching for adapter applications up to 65W",
      "descriptionParagraphs": [
        "The BP3288 is a high-performance quasi-resonant (QR) flyback PWM controller designed for high-efficiency power adapter and power supply applications. It features valley switching for reduced switching losses and improved EMI performance.",
        "This controller automatically detects the drain voltage valley and turns on the MOSFET at the optimal point to minimize switching losses. The frequency foldback function maintains high efficiency across the entire load range.",
        "Built-in protection features include over-voltage protection, over-load protection, short-circuit protection, and over-temperature protection. The BP3288 achieves excellent light-load efficiency and low standby power."
      ],
      "specifications": {
        "Input Voltage": "85V-265V AC",
        "Output Power": "Up to 65W",
        "Switching Frequency": "Variable (QR mode)",
        "Standby Power": "<50mW",
        "Efficiency": ">90% at full load",
        "MOSFET Drive": "External",
        "Package": "SOT23-6"
      },
      "features": [
        "Quasi-resonant valley switching",
        "Frequency foldback for light-load efficiency",
        "Low standby power consumption",
        "Built-in soft start",
        "Comprehensive protection features",
        "Small SOT23-6 package"
      ],
      "applications": [
        "High-power adapters",
        "Notebook adapters",
        "Industrial power supplies",
        "Gaming console power",
        "High-power chargers"
      ],
      "faeReview": {
        "author": "James Zhang",
        "title": "Principal FAE - Advanced Power Systems",
        "content": "The BP3288 is an excellent QR controller for medium to high-power adapter applications. The valley switching provides measurable efficiency improvements compared to traditional PWM controllers, especially at light loads. In my experience designing 45-65W adapters, this controller consistently achieves 90%+ efficiency at full load and maintains good efficiency down to 25% load. The frequency foldback function is well-implemented, providing smooth transitions between QR and burst modes. I particularly like the small SOT23-6 package which saves PCB space. The external MOSFET drive allows flexibility in selecting the optimal power switch for your application. For high-density adapters, pair this with a good synchronous rectifier controller.",
        "highlight": "High-efficiency QR controller with excellent light-load performance"
      },
      "alternativeParts": [
        {
          "partNumber": "NCP1342",
          "brand": "ON Semiconductor",
          "specifications": {
            "inputVoltage": "85V-265V AC",
            "outputPower": "Up to 75W",
            "topology": "Quasi-resonant",
            "standbyPower": "<30mW"
          },
          "comparison": {
            "inputVoltage": "85V-265V AC = 85V-265V AC (same)",
            "outputPower": "75W > 65W (+15% higher power)",
            "topology": "Quasi-resonant = Quasi-resonant (same)",
            "standbyPower": "<30mW < <50mW (better standby)",
            "price": "Higher cost"
          },
          "reason": "Higher power capability with lower standby power",
          "useCase": "High-power adapters requiring <30mW standby",
          "link": "#"
        },
        {
          "partNumber": "TEA18362",
          "brand": "NXP",
          "specifications": {
            "inputVoltage": "85V-265V AC",
            "outputPower": "Up to 60W",
            "topology": "Quasi-resonant",
            "features": "X-cap discharge"
          },
          "comparison": {
            "inputVoltage": "85V-265V AC = 85V-265V AC (same)",
            "outputPower": "60W < 65W (-8% lower power)",
            "topology": "Quasi-resonant = Quasi-resonant (same)",
            "features": "X-cap discharge > None (added feature)",
            "price": "Premium pricing"
          },
          "reason": "Alternative QR controller with integrated X-cap discharge",
          "useCase": "Applications requiring integrated safety features",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Super Junction MOSFET 600V",
          "link": "#",
          "description": "Low-Rds(on) super junction MOSFET for primary switching",
          "category": "Power Devices"
        },
        {
          "partNumber": "SR Controller BP3518",
          "link": "#",
          "description": "Synchronous rectifier controller for output rectification",
          "category": "Rectification"
        },
        {
          "partNumber": "QR Transformer",
          "link": "#",
          "description": "Custom transformer optimized for QR operation",
          "category": "Magnetics"
        }
      ],
      "faqs": [
        {
          "question": "How does valley switching improve efficiency?",
          "answer": "Valley switching turns on the MOSFET when the drain voltage reaches its minimum point in the resonant ringing, reducing switching losses. In hard-switching converters, turn-on occurs at high voltage causing significant switching losses (0.5 × Coss × V² × f). Valley switching minimizes this by switching at low voltage. The efficiency improvement is most noticeable at high input voltages and light loads where switching losses dominate. Typical efficiency improvements of 2-5% can be achieved compared to hard-switching at light loads.",
          "decisionGuide": "Use QR controllers for applications requiring high efficiency across wide load ranges. Contact LiTong for QR design optimization.",
          "keywords": ["valley switching", "switching losses", "QR efficiency"]
        },
        {
          "question": "What is frequency foldback and how does it work?",
          "answer": "Frequency foldback reduces switching frequency as load decreases to maintain high efficiency. At light loads, switching losses become dominant over conduction losses. By reducing switching frequency, the controller minimizes switching losses while maintaining output regulation. The BP3288 smoothly transitions from QR mode at high loads to burst mode at very light loads. This ensures excellent efficiency across the entire operating range, achieving <50mW standby power and good light-load efficiency required by modern energy standards.",
          "decisionGuide": "Frequency foldback is automatic. Contact LiTong for light-load efficiency optimization.",
          "keywords": ["frequency foldback", "light-load efficiency", "burst mode"]
        },
        {
          "question": "How do I select the external MOSFET for BP3288?",
          "answer": "External MOSFET selection criteria: 1) Voltage rating - select 600V or 650V for universal input (85V-265V AC) applications, 2) Current rating - choose Rds(on) based on thermal constraints and efficiency targets, 3) Gate charge - lower Qg reduces driver losses, 4) Output capacitance (Coss) - affects valley switching timing, 5) Package - TO-220, TO-220F, or D2PAK based on thermal requirements. Super junction MOSFETs offer lower Rds(on) × Qg products for better performance. BPSemi can recommend suitable MOSFETs for your application.",
          "decisionGuide": "Contact LiTong for MOSFET selection guidance based on your power and efficiency requirements.",
          "keywords": ["MOSFET selection", "super junction", "Rds(on)"]
        },
        {
          "question": "What are the key layout considerations for QR converters?",
          "answer": "QR converter layout priorities: 1) Minimize the switching loop area (input cap → MOSFET → transformer primary → input cap), 2) Keep the current sense resistor close to the controller with Kelvin connection, 3) Separate power ground and signal ground, connecting at a single point, 4) Place VCC decoupling capacitor close to the IC, 5) Keep the drain node away from sensitive feedback traces, 6) Provide adequate copper area for the MOSFET drain tab for heat dissipation. Good layout is critical for both EMI performance and reliable operation.",
          "decisionGuide": "Follow BPSemi layout guidelines or contact LiTong for PCB layout review services.",
          "keywords": ["PCB layout", "switching loop", "EMI design"]
        },
        {
          "question": "Can BP3288 be used for power factor correction (PFC) applications?",
          "answer": "The BP3288 is designed for DC/DC conversion with quasi-resonant operation and is not suitable for active PFC applications. For PFC applications, use dedicated PFC controllers like BPSemi's BP series PFC controllers. However, the BP3288 can be used in two-stage designs where a separate PFC stage provides power factor correction and the BP3288 controls the DC/DC output stage. This approach is common in higher power applications (>75W) where PFC is required.",
          "decisionGuide": "For PFC applications, use dedicated PFC controllers. Contact LiTong for two-stage PFC+DC/DC design guidance.",
          "keywords": ["PFC controller", "two-stage design", "power factor correction"]
        }
      ]
    }
  ]
};

products.categories.push(acdcCategory);

// Save updated file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Added AC/DC Power Management category');
console.log(`📊 Total categories: ${products.categories.length}`);
