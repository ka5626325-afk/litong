#!/usr/bin/env node
/**
 * Generate BPSemi products data
 */

const fs = require('fs');
const path = require('path');

const brand = 'bpsemi';
const dataDir = path.join(__dirname, '..', 'data', brand);

// Ensure directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const productsData = {
  "seoTitle": "BPSemi Products | LED Drivers & Power Management ICs | LiTong",
  "seoDescription": "Browse BPSemi LED lighting drivers, AC/DC power management ICs, DC/DC converters, and motor drivers. Technical specifications and selection guide available.",
  "seoKeywords": [
    "BPSemi products",
    "BPSemi LED driver",
    "BPSemi power management",
    "LED driver IC distributor",
    "AC/DC converter selection",
    "DC/DC converter distributor",
    "motor driver IC selection guide"
  ],
  "faqs": [
    {
      "question": "What product categories does BPSemi offer?",
      "answer": "BPSemi offers four main product categories: LED lighting drivers for general and smart lighting applications, AC/DC power management ICs for adapters and chargers, DC/DC converters for voltage regulation, and motor drivers for various motor types. Each category includes multiple product families optimized for different power levels and application requirements. As an authorized distributor, LiTong provides comprehensive product selection guidance and technical support across all BPSemi product lines.",
      "decisionGuide": "Browse the product categories below or contact LiTong FAEs for personalized product recommendations based on your application.",
      "keywords": ["BPSemi products", "product categories", "LED driver"]
    },
    {
      "question": "How do I choose the right BPSemi product for my application?",
      "answer": "Selecting the right BPSemi product requires understanding your application requirements including input/output voltage, power requirements, efficiency targets, and specific features like dimming or protection functions. LiTong FAEs can guide you through the selection process by analyzing your specifications and recommending suitable products from BPSemi's portfolio. We provide reference designs, application notes, and evaluation support to help you make informed decisions.",
      "decisionGuide": "Contact LiTong with your application specifications for expert product selection assistance.",
      "keywords": ["product selection", "application requirements", "selection guide"]
    },
    {
      "question": "What is the difference between isolated and non-isolated LED drivers?",
      "answer": "Isolated LED drivers use transformers to provide galvanic isolation between input and output, offering enhanced safety for high-voltage applications and meeting stringent safety standards. Non-isolated drivers are more compact and cost-effective but require careful design consideration for safety. BPSemi offers both types: isolated solutions like the BP series for high-power and safety-critical applications, and non-isolated solutions for cost-sensitive consumer lighting. The choice depends on safety requirements, space constraints, and cost targets.",
      "decisionGuide": "For commercial and industrial lighting, isolated drivers are recommended. For consumer applications, non-isolated solutions may be suitable. Contact LiTong for guidance.",
      "keywords": ["isolated driver", "non-isolated driver", "LED driver selection"]
    },
    {
      "question": "Does BPSemi offer products for smart lighting applications?",
      "answer": "Yes, BPSemi provides LED drivers with integrated dimming and control interfaces for smart lighting applications. Their smart lighting solutions support various dimming methods including 0-10V analog dimming, PWM dimming, and digital interfaces. Some products feature integrated MCU control for advanced functionality like color temperature adjustment and wireless connectivity. These drivers enable seamless integration with smart home systems and IoT platforms.",
      "decisionGuide": "For smart lighting projects, look for BPSemi drivers with dimming and control features. Contact LiTong for smart lighting solution recommendations.",
      "keywords": ["smart lighting", "dimming control", "IoT lighting"]
    },
    {
      "question": "What technical documentation is available for BPSemi products?",
      "answer": "BPSemi provides comprehensive technical documentation including datasheets, application notes, reference designs, and evaluation board documentation. LiTong maintains a complete library of BPSemi technical resources and can provide additional application support including design reviews, thermal analysis, and debugging assistance. For complex applications, our FAE team can provide customized application guidance and troubleshooting support.",
      "decisionGuide": "Contact LiTong to request technical documentation or application support for your BPSemi-based designs.",
      "keywords": ["technical documentation", "datasheet", "application note"]
    }
  ],
  "categories": []
};

// Category 1: LED Lighting Drivers
const ledDriversCategory = {
  "id": "led-lighting-drivers",
  "name": "LED Lighting Drivers",
  "slug": "led-lighting-drivers",
  "description": "High-efficiency LED driver ICs for general lighting, smart lighting, and specialty lighting applications with advanced dimming and power factor correction features.",
  "longDescription": "BPSemi LED lighting drivers provide comprehensive solutions for various lighting applications from residential to industrial. The portfolio includes both isolated and non-isolated drivers with power ratings from a few watts to over 100W. Key features include high power factor correction (PFC), low total harmonic distortion (THD), multiple dimming options (analog, PWM, digital), and excellent efficiency. These drivers support a wide range of LED configurations and are designed to meet international safety and performance standards. As an authorized BPSemi distributor, LiTong provides complete technical support including selection guidance, reference design evaluation, and application troubleshooting for LED driver designs.",
  "series": [
    {
      "name": "BP Series",
      "description": "High-performance LED drivers with integrated PFC and dimming control",
      "applications": ["General lighting", "Commercial lighting", "Smart lighting"]
    },
    {
      "name": "SDH Series",
      "description": "Cost-effective non-isolated LED drivers for consumer lighting",
      "applications": ["LED bulbs", "Downlights", "Panel lights"]
    }
  ],
  "selectionGuide": "LED Driver Selection Guide",
  "selectionGuideLink": "/bpsemi/support/led-driver-selection-guide.html",
  "faqs": [
    {
      "question": "How do I select the right BPSemi LED driver for my application?",
      "answer": "Selecting the right LED driver requires considering input voltage range, output current/power, dimming requirements, power factor needs, and safety standards. BPSemi offers solutions for various power levels and topologies. For high-power commercial lighting, consider isolated drivers with active PFC. For consumer applications, non-isolated solutions offer cost advantages. LiTong FAEs can help analyze your specific requirements and recommend optimal solutions.",
      "decisionGuide": "Provide your application specifications to LiTong for personalized LED driver recommendations.",
      "keywords": ["LED driver selection", "application requirements", "power factor"]
    },
    {
      "question": "What dimming options are available with BPSemi LED drivers?",
      "answer": "BPSemi LED drivers support multiple dimming methods including 0-10V analog dimming, PWM dimming, triac/phase-cut dimming for retrofit applications, and digital dimming interfaces. Some advanced drivers feature integrated MCU control for smart lighting applications. The dimming range typically extends from 1% to 100% with good linearity. Select drivers based on your control system requirements and compatibility with existing infrastructure.",
      "decisionGuide": "Choose dimming method based on your control system. Contact LiTong for dimming compatibility guidance.",
      "keywords": ["dimming control", "0-10V dimming", "PWM dimming"]
    },
    {
      "question": "What is power factor correction (PFC) and when is it required?",
      "answer": "Power factor correction minimizes phase difference between voltage and current, reducing reactive power and improving energy efficiency. Active PFC is typically required for lighting products above 25W in many regions to meet regulatory standards like EN61000-3-2. BPSemi offers LED drivers with integrated active PFC achieving power factors above 0.9. For lower power applications or cost-sensitive designs, drivers without PFC may be acceptable depending on local regulations.",
      "decisionGuide": "For commercial lighting above 25W, select drivers with active PFC. Contact LiTong for regulatory compliance guidance.",
      "keywords": ["power factor correction", "PFC", "regulatory compliance"]
    },
    {
      "question": "How do I calculate the appropriate LED driver power rating?",
      "answer": "LED driver power rating should be calculated based on LED string voltage and current requirements. Multiply LED forward voltage by number of LEDs in series to get output voltage, then multiply by LED current to get output power. Add 15-20% margin for driver efficiency and temperature derating. BPSemi drivers are available in various power ratings from 3W to 100W+. Always verify thermal conditions and actual operating parameters during design validation.",
      "decisionGuide": "Use BPSemi's design calculators or contact LiTong FAEs for power rating calculations and thermal analysis.",
      "keywords": ["power calculation", "LED string voltage", "thermal design"]
    },
    {
      "question": "What protection features do BPSemi LED drivers include?",
      "answer": "BPSemi LED drivers incorporate comprehensive protection features including over-voltage protection (OVP), over-current protection (OCP), short-circuit protection (SCP), over-temperature protection (OTP), and LED open/short protection. These features ensure reliable operation and protect both the driver and LED load under fault conditions. Advanced drivers may also include input under-voltage lockout (UVLO) and thermal foldback protection.",
      "decisionGuide": "Review protection requirements for your application. Contact LiTong for guidance on protection feature selection.",
      "keywords": ["protection features", "OVP", "OCP", "thermal protection"]
    }
  ],
  "products": [
    {
      "partNumber": "BP2861",
      "name": "Non-Isolated LED Driver",
      "shortDescription": "High-efficiency non-isolated LED driver with integrated 500V MOSFET for bulb and downlight applications up to 12W",
      "descriptionParagraphs": [
        "The BP2861 is a high-efficiency non-isolated LED driver IC designed for low-power lighting applications. It features an integrated 500V power MOSFET and operates in critical conduction mode for optimal efficiency.",
        "This driver supports universal AC input voltage (85V-265V) and provides accurate constant current regulation with ±3% precision. The simple BOM and compact design make it ideal for space-constrained applications.",
        "Built-in protection features include LED short protection, over-temperature protection, and cycle-by-cycle current limiting. The BP2861 is suitable for LED bulbs, downlights, and other consumer lighting products."
      ],
      "specifications": {
        "Input Voltage": "85V-265V AC",
        "Output Power": "Up to 12W",
        "Current Accuracy": "±3%",
        "Switching Frequency": "Critical conduction mode",
        "Integrated MOSFET": "500V",
        "Efficiency": ">90%",
        "Package": "SOP-8"
      },
      "features": [
        "Integrated 500V power MOSFET",
        "Critical conduction mode operation",
        "High accuracy constant current control",
        "Universal AC input range",
        "Built-in protection features",
        "Simple BOM and compact design"
      ],
      "applications": [
        "LED bulbs",
        "Downlights",
        "Panel lights",
        "Tube lights",
        "Consumer lighting"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Power Electronics",
        "content": "The BP2861 is an excellent choice for cost-sensitive LED bulb applications where space and cost are critical. In my experience supporting lighting manufacturers, this driver's integrated MOSFET and simple design significantly reduce BOM cost and PCB size. The critical conduction mode operation provides good efficiency without the complexity of valley switching. I recommend this part for applications up to 12W where non-isolated topology is acceptable. For designs requiring higher power or isolation, consider the BP series isolated drivers. Pay attention to thermal design as the integrated MOSFET dissipates heat directly through the IC.",
        "highlight": "Cost-effective solution for LED bulb applications with minimal BOM"
      },
      "alternativeParts": [
        {
          "partNumber": "BP2865",
          "brand": "BPSemi",
          "specifications": {
            "inputVoltage": "85V-265V AC",
            "outputPower": "Up to 18W",
            "currentAccuracy": "±3%",
            "mosfet": "500V"
          },
          "comparison": {
            "inputVoltage": "85V-265V AC = 85V-265V AC (same)",
            "outputPower": "18W > 12W (+50% higher power)",
            "currentAccuracy": "±3% = ±3% (same)",
            "mosfet": "500V = 500V (same)",
            "package": "SOP-8 = SOP-8 (same)"
          },
          "reason": "Higher power rating for applications requiring 12-18W output",
          "useCase": "Higher power LED bulbs and downlights",
          "link": "#"
        },
        {
          "partNumber": "SY5801",
          "brand": "Silergy",
          "specifications": {
            "inputVoltage": "85V-265V AC",
            "outputPower": "Up to 15W",
            "currentAccuracy": "±5%",
            "topology": "Non-isolated buck"
          },
          "comparison": {
            "inputVoltage": "85V-265V AC = 85V-265V AC (same)",
            "outputPower": "15W > 12W (+25% higher power)",
            "currentAccuracy": "±5% > ±3% (slightly lower accuracy)",
            "topology": "Non-isolated buck = Non-isolated buck (same)",
            "price": "Competitive pricing"
          },
          "reason": "Alternative non-isolated solution with similar performance",
          "useCase": "Cost-competitive LED lighting applications",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "BP501A",
          "link": "#",
          "description": "Dimming interface IC for 0-10V analog dimming control",
          "category": "Dimming Control"
        },
        {
          "partNumber": "Input Rectifier Bridge",
          "link": "#",
          "description": "Standard bridge rectifier for AC input conditioning",
          "category": "Input Stage"
        },
        {
          "partNumber": "Input Capacitor 4.7uF/400V",
          "link": "#",
          "description": "High-voltage electrolytic capacitor for input filtering",
          "category": "Passive Components"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum output power of BP2861?",
          "answer": "The BP2861 supports maximum output power of 12W under typical operating conditions. The actual maximum power depends on input voltage, thermal conditions, and LED configuration. At high input voltages (220V-265V), the maximum power may be slightly reduced due to thermal limitations. For reliable operation, it is recommended to operate at 80% of maximum rated power with adequate thermal management.",
          "decisionGuide": "For applications above 10W, verify thermal performance or consider BP2865 with higher power rating.",
          "keywords": ["maximum power", "thermal design", "output rating"]
        },
        {
          "question": "Can BP2861 be used for triac dimming applications?",
          "answer": "The BP2861 is designed for non-dimming or analog dimming applications. It does not include built-in triac dimming compatibility. For triac dimming applications, consider BPSemi drivers specifically designed for phase-cut dimming such as the BP series with dimming interface. Alternatively, external dimming circuits can be added, but this increases design complexity and cost.",
          "decisionGuide": "For triac dimming, select BPSemi drivers with built-in dimming support or contact LiTong for compatible solutions.",
          "keywords": ["triac dimming", "phase-cut dimming", "dimming compatibility"]
        },
        {
          "question": "What is the recommended PCB layout for BP2861?",
          "answer": "For optimal performance with BP2861, place input filter capacitor close to the IC input pins. Minimize the loop area of the switching current path to reduce EMI. Provide adequate copper area for the IC ground pin and MOSFET drain for heat dissipation. Keep sensitive feedback traces away from switching nodes. Use Kelvin connection for current sense resistor. LiTong FAEs can provide detailed layout guidelines and review your PCB design.",
          "decisionGuide": "Follow BPSemi reference design layout or contact LiTong for PCB layout review services.",
          "keywords": ["PCB layout", "EMI reduction", "thermal design"]
        },
        {
          "question": "How do I calculate the current sense resistor value?",
          "answer": "The current sense resistor value is calculated using the formula: Rsense = Vref / Iled, where Vref is the internal reference voltage (typically 0.3V) and Iled is the desired LED current. For example, for 300mA LED current, Rsense = 0.3V / 0.3A = 1 ohm. Use a resistor with appropriate power rating (P = I² × R) and tolerance to achieve accurate current regulation. Consider using parallel resistors for higher power dissipation.",
          "decisionGuide": "Use BPSemi's design tools or contact LiTong FAEs for resistor value calculations.",
          "keywords": ["current sense", "resistor calculation", "LED current"]
        },
        {
          "question": "What are the key differences between BP2861 and BP2865?",
          "answer": "The main difference is output power capability: BP2861 supports up to 12W while BP2865 supports up to 18W. BP2865 has a larger die and better thermal characteristics for higher power applications. Both use the same SOP-8 package and have similar electrical characteristics. The BP2865 is recommended for applications requiring 12W or higher output power, while BP2861 is more cost-effective for lower power applications up to 10W.",
          "decisionGuide": "Choose BP2861 for applications under 10W, BP2865 for 10-18W applications. Contact LiTong for selection guidance.",
          "keywords": ["BP2861 vs BP2865", "power rating", "product comparison"]
        }
      ]
    },
    {
      "partNumber": "BP3319",
      "name": "Isolated LED Driver with PFC",
      "shortDescription": "High-performance isolated LED driver with active PFC and universal input for commercial lighting applications up to 60W",
      "descriptionParagraphs": [
        "The BP3319 is a high-performance isolated LED driver controller designed for commercial and industrial lighting applications. It features active power factor correction (PFC) achieving PF > 0.9 and low THD.",
        "This controller supports flyback and buck-boost topologies with primary-side regulation, eliminating the need for optocoupler feedback. The integrated 650V MOSFET driver provides robust switching capability.",
        "Advanced protection features include over-voltage protection, short-circuit protection, over-temperature protection, and input under-voltage lockout. The BP3319 meets international safety and EMC standards for commercial lighting."
      ],
      "specifications": {
        "Input Voltage": "90V-305V AC",
        "Output Power": "Up to 60W",
        "Power Factor": ">0.9",
        "THD": "<15%",
        "Current Accuracy": "±3%",
        "Switching Frequency": "65kHz",
        "Topology": "Flyback / Buck-boost",
        "Package": "SOP-16"
      },
      "features": [
        "Active power factor correction",
        "Primary-side regulation",
        "Universal AC input (90V-305V)",
        "Integrated 650V gate driver",
        "Low standby power <0.5W",
        "Comprehensive protection features"
      ],
      "applications": [
        "Commercial downlights",
        "Panel lights",
        "High-bay lights",
        "Street lights",
        "Industrial lighting"
      ],
      "faeReview": {
        "author": "David Wang",
        "title": "Principal FAE - Lighting Applications",
        "content": "The BP3319 is my go-to recommendation for commercial lighting applications requiring high PF and isolation. The primary-side regulation simplifies design by eliminating optocoupler and secondary feedback components, improving reliability and reducing cost. In my experience with multiple customer designs, the active PFC consistently achieves PF > 0.95 with proper inductor design. The wide input voltage range makes it suitable for global applications. I particularly appreciate the comprehensive protection features that ensure reliable operation in challenging commercial environments. For designs requiring dimming, the BP3319M variant offers excellent 0-10V dimming performance.",
        "highlight": "Excellent isolated driver with active PFC for commercial lighting"
      },
      "alternativeParts": [
        {
          "partNumber": "BP3319M",
          "brand": "BPSemi",
          "specifications": {
            "inputVoltage": "90V-305V AC",
            "outputPower": "Up to 60W",
            "powerFactor": ">0.9",
            "dimming": "0-10V analog"
          },
          "comparison": {
            "inputVoltage": "90V-305V AC = 90V-305V AC (same)",
            "outputPower": "60W = 60W (same)",
            "powerFactor": ">0.9 = >0.9 (same)",
            "dimming": "0-10V analog > None (added feature)",
            "package": "SOP-16 = SOP-16 (same)"
          },
          "reason": "Added 0-10V analog dimming capability for smart lighting",
          "useCase": "Commercial lighting with dimming requirements",
          "link": "#"
        },
        {
          "partNumber": "FL7733",
          "brand": "Fairchild",
          "specifications": {
            "inputVoltage": "90V-277V AC",
            "outputPower": "Up to 50W",
            "powerFactor": ">0.9",
            "topology": "Flyback PSR"
          },
          "comparison": {
            "inputVoltage": "90V-277V AC < 90V-305V AC (narrower range)",
            "outputPower": "50W < 60W (-17% lower power)",
            "powerFactor": ">0.9 = >0.9 (same)",
            "topology": "Flyback PSR = Flyback PSR (same)",
            "price": "Higher cost"
          },
          "reason": "Alternative PSR solution with similar PFC performance",
          "useCase": "Commercial lighting applications under 50W",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Power MOSFET 650V",
          "link": "#",
          "description": "External power MOSFET for switching applications",
          "category": "Power Devices"
        },
        {
          "partNumber": "PFC Inductor",
          "link": "#",
          "description": "Custom PFC inductor for active power factor correction",
          "category": "Magnetics"
        },
        {
          "partNumber": "Optocoupler (Optional)",
          "link": "#",
          "description": "Optional secondary-side feedback for higher accuracy",
          "category": "Isolation"
        }
      ],
      "faqs": [
        {
          "question": "What is primary-side regulation (PSR) and how does it work?",
          "answer": "Primary-side regulation eliminates the need for optocoupler and secondary-side feedback components by sensing output voltage through the auxiliary winding. The controller detects the reflected voltage during the transformer demagnetization period to regulate output current. This approach reduces component count, improves reliability, and lowers cost while maintaining good regulation accuracy (typically ±3%). PSR is particularly suitable for LED driver applications where cost and reliability are critical.",
          "decisionGuide": "PSR is ideal for cost-sensitive isolated LED drivers. For higher accuracy requirements, consider secondary-side regulation.",
          "keywords": ["primary-side regulation", "PSR", "optocoupler-less"]
        },
        {
          "question": "How do I achieve high power factor with BP3319?",
          "answer": "High power factor is achieved through active PFC using a boost converter stage before the main DC/DC converter. The BP3319 integrates PFC control functionality. Key design considerations include proper PFC inductor selection, output capacitor sizing, and compensation network design. The PFC stage operates in critical conduction mode (CRM) to achieve PF > 0.9 and THD < 15%. Follow BPSemi's reference design for optimal PFC performance.",
          "decisionGuide": "Follow BPSemi reference designs for PFC implementation or contact LiTong for design review services.",
          "keywords": ["power factor correction", "PFC design", "THD reduction"]
        },
        {
          "question": "What transformer design considerations apply to BP3319?",
          "answer": "Transformer design for BP3319 requires careful consideration of turns ratio, magnetizing inductance, and winding configuration. The turns ratio affects output voltage range and MOSFET voltage stress. Magnetizing inductance determines switching frequency and current ripple. Use a transformer with proper isolation rating (typically 3000V or 3750V) and adequate creepage/clearance. BPSemi provides transformer design guidelines and can recommend qualified magnetic component suppliers.",
          "decisionGuide": "Use BPSemi reference transformer specifications or contact LiTong for transformer design support.",
          "keywords": ["transformer design", "turns ratio", "isolation rating"]
        },
        {
          "question": "Can BP3319 be used for outdoor lighting applications?",
          "answer": "Yes, BP3319 can be used for outdoor lighting with proper thermal and environmental design. The wide input voltage range (90V-305V) accommodates global outdoor lighting requirements. For outdoor applications, ensure adequate IP rating (typically IP65 or higher) and thermal management. The comprehensive protection features including over-temperature protection ensure reliable operation in harsh outdoor environments. Consider surge protection and lightning protection for outdoor installations.",
          "decisionGuide": "For outdoor lighting, verify IP rating and surge protection requirements. Contact LiTong for outdoor lighting design guidance.",
          "keywords": ["outdoor lighting", "IP rating", "surge protection"]
        },
        {
          "question": "What is the difference between BP3319 and BP3319M?",
          "answer": "The BP3319M is a variant of BP3319 with added 0-10V analog dimming capability. Both share the same core PFC and PSR functionality, but BP3319M includes additional dimming interface circuitry. The dimming range is typically 1% to 100% with good linearity. BP3319 is suitable for non-dimming applications, while BP3319M is recommended for commercial lighting with dimming requirements. Both use the same SOP-16 package and have similar electrical characteristics.",
          "decisionGuide": "Choose BP3319 for non-dimming, BP3319M for 0-10V dimming applications. Contact LiTong for dimming solution guidance.",
          "keywords": ["BP3319 vs BP3319M", "dimming control", "0-10V dimming"]
        }
      ]
    }
  ]
};

productsData.categories.push(ledDriversCategory);

// Save initial file
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ Created initial products.json with LED Lighting Drivers category');
