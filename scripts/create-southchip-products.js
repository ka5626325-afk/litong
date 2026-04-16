#!/usr/bin/env node
/**
 * Create SouthChip products.json
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'southchip');

const productsData = {
  "seoTitle": "SouthChip Power Management IC Products | Battery Chargers Fuel Gauges | LiTong",
  "seoDescription": "Browse SouthChip battery charger ICs, fuel gauge ICs, DC-DC converters, and power management products. Technical specifications and selection guide available.",
  "seoKeywords": [
    "SouthChip products",
    "battery charger IC",
    "fuel gauge IC",
    "DC-DC converter",
    "power management IC",
    "charging IC distributor",
    "Li-ion charger",
    "SouthChip selection guide"
  ],
  "faqs": [
    {
      "question": "What product categories does SouthChip offer?",
      "answer": "SouthChip offers four main product categories for power management: (1) Battery Charger ICs - Linear and switching chargers for Li-ion, Li-polymer, and LiFePO4 batteries with charge currents from 100mA to 5A. (2) Fuel Gauge ICs - Battery monitoring solutions with impedance tracking for accurate SOC and SOH reporting. (3) DC-DC Converters - Buck, boost, and buck-boost converters for various voltage conversion requirements. (4) Power Path Management - Intelligent power switching and load management ICs. Each category includes multiple product families optimized for different applications, battery configurations, and performance requirements. As an authorized SouthChip distributor, LiTong provides comprehensive product selection guidance.",
      "decisionGuide": "Browse the product categories below or contact LiTong FAEs for personalized product recommendations.",
      "keywords": ["SouthChip products", "product categories", "power management"]
    },
    {
      "question": "How do I choose the right SouthChip product for my application?",
      "answer": "Selecting the right SouthChip product requires evaluating: (1) Application type - Battery charging, fuel gauging, voltage conversion, or power management. (2) Battery specifications - Chemistry (Li-ion/Li-polymer/LiFePO4), capacity, and cell configuration (single or multi-cell). (3) Input power source - USB 5V, adapter 9-20V, or other source voltage. (4) Charge current requirements - Based on desired charging time and battery capacity. (5) Efficiency requirements - Linear for cost-sensitive low-current; switching for high-current efficiency. (6) Package constraints - WLCSP for smallest size; QFN for better thermal performance. (7) Special features - USB OTG, power path management, JEITA compliance, etc. LiTong FAEs can analyze your requirements and recommend optimal SouthChip solutions.",
      "decisionGuide": "Contact LiTong with your application specifications for expert product selection assistance.",
      "keywords": ["product selection", "application requirements", "selection guide"]
    },
    {
      "question": "What is the difference between SC and SC8 series chargers?",
      "answer": "SouthChip SC and SC8 series represent different charger topologies: (1) SC Series - Linear battery chargers with simple design, no inductor required. Lower cost, suitable for charge currents up to 1A. Lower efficiency (efficiency = Vbat/Vin). Examples: SC4056, SC9017. (2) SC8 Series - Switching battery chargers (buck or boost) with inductor-based design. Higher efficiency (up to 95%), suitable for high charge currents (1A to 5A). More complex design but better thermal performance. Examples: SC8815, SC8905. (3) Selection guide - Use SC series for: low current (<500mA), cost-sensitive, small batteries, simple applications. Use SC8 series for: high current fast charging, large batteries, thermally constrained designs, high efficiency requirements. Both series offer comprehensive protection features and support various battery chemistries.",
      "decisionGuide": "Contact LiTong for charger series selection based on your current and efficiency requirements.",
      "keywords": ["SC series", "SC8 series", "linear charger", "switching charger"]
    }
  ],
  "categories": [
    {
      "id": "battery-charger-ics",
      "name": "Battery Charger ICs",
      "slug": "battery-charger-ics",
      "description": "High-efficiency linear and switching battery chargers supporting Li-ion, Li-polymer, and LiFePO4 batteries with comprehensive protection features.",
      "longDescription": "SouthChip Battery Charger ICs provide complete charging solutions for single-cell and multi-cell battery applications. The portfolio includes both linear chargers (SC series) for cost-sensitive low-current applications and switching chargers (SC8 series) for high-efficiency fast charging. These chargers support various battery chemistries including Li-ion, Li-polymer, and LiFePO4 with automatic chemistry detection on select models. Key features include high integration minimizing external components, comprehensive safety protection (OVP, OCP, OTP, short-circuit), thermal regulation for safe operation, and flexible charge current programming. Advanced features such as power path management, USB OTG support, and JEITA-compliant temperature-dependent charging are available on select models. SouthChip chargers are widely used in smartphones, tablets, power banks, TWS earbuds, portable medical devices, and IoT applications. As an authorized SouthChip distributor, LiTong provides comprehensive product selection guidance and technical support for battery charger applications.",
      "parameters": ["Charger Type", "Max Charge Current", "Input Voltage", "Battery Type"],
      "series": [
        {
          "name": "SC Series",
          "description": "Linear battery chargers with simple design for cost-sensitive applications",
          "applications": ["TWS earbuds", "Smart watches", "Low-power IoT"]
        },
        {
          "name": "SC8 Series",
          "description": "Switching battery chargers with high efficiency for fast charging applications",
          "applications": ["Smartphones", "Tablets", "Power banks"]
        }
      ],
      "selectionGuide": "Battery Charger IC Selection Guide",
      "selectionGuideLink": {
        "url": "/southchip/support/battery-charger-selection-guide.html",
        "text": "View Battery Charger IC Selection Guide for detailed selection guidance"
      },
      "faqs": [
        {
          "question": "What battery chemistries do SouthChip chargers support?",
          "answer": "SouthChip battery chargers support multiple battery chemistries: (1) Li-ion (Lithium-ion) - Standard 3.7V nominal, 4.2V charge voltage. Most common in consumer electronics. (2) Li-polymer (Lithium-polymer) - Similar to Li-ion with flexible form factors. Same charge profile (4.2V). (3) LiFePO4 (Lithium Iron Phosphate) - 3.2V nominal, 3.6V charge voltage. Safer chemistry with longer cycle life. (4) Charge profiles - Constant current (CC) followed by constant voltage (CV) with configurable charge voltage and termination current. (5) Chemistry selection - Some SouthChip chargers support multiple chemistries with pin-selectable or I2C-programmable charge voltage. Others are fixed for specific chemistries. When selecting a charger, verify the charge voltage matches your battery chemistry. LiFePO4 requires different charge voltage (3.6V) compared to Li-ion/Li-polymer (4.2V). LiTong can help select the appropriate charger for your battery chemistry.",
          "decisionGuide": "Contact LiTong for battery chemistry compatibility verification and charger selection.",
          "keywords": ["battery chemistry", "Li-ion", "Li-polymer", "LiFePO4", "charge profile"]
        },
        {
          "question": "What is the maximum charge current available?",
          "answer": "SouthChip offers chargers with various maximum charge current options: (1) Low current (100-500mA) - SC9017 (280mA), SC4056 variants (500mA). Suitable for small batteries (<1000mAh) and low-power applications. (2) Medium current (1-2A) - SC4056 (1A), SC8815 (2A). Good for smartphones and medium-capacity batteries. (3) High current (3-5A) - SC8905 (5A), SC8812 (3A). For fast charging of large batteries (>3000mAh) and power bank applications. (4) Programmable current - Many SouthChip chargers allow charge current programming via external resistor or I2C interface. (5) Thermal consideration - Maximum practical charge current depends on thermal design. Switching chargers handle high current more efficiently than linear chargers. For fast charging applications, select chargers with at least 2A capability. Ensure your power source can deliver the required current and your thermal design can dissipate the heat generated.",
          "decisionGuide": "Contact LiTong for charge current selection based on your battery capacity and charging time requirements.",
          "keywords": ["charge current", "fast charging", "charging rate", "current selection"]
        },
        {
          "question": "Do SouthChip chargers support USB charging?",
          "answer": "Yes, SouthChip offers comprehensive USB charging support: (1) USB Standard - BC1.2 compliant detection for USB SDP (500mA), DCP (1.5A), and CDP (1.5A with data). (2) USB-C - Support for USB-C CC (Configuration Channel) detection and orientation detection. (3) USB PD - Some models support USB Power Delivery for high-voltage charging (9V, 12V, 15V, 20V) enabling high-power fast charging. (4) Input current limit - Programmable input current limit to stay within USB power specifications and avoid overloading weak USB sources. (5) D+/D- detection - Automatic detection of USB charger types for optimal charging. (6) USB OTG - Select models support USB On-The-Go, allowing the device to act as USB host while charging. SouthChip USB chargers are ideal for smartphones, tablets, power banks, and any USB-powered devices. Reference designs are available for various USB charging applications.",
          "decisionGuide": "Contact LiTong for USB charging solution selection and reference design access.",
          "keywords": ["USB charging", "BC1.2", "USB-C", "USB PD", "OTG"]
        },
        {
          "question": "What thermal management features do SouthChip chargers have?",
          "answer": "SouthChip chargers include comprehensive thermal management: (1) Thermal regulation - Automatically reduces charge current when die temperature exceeds threshold (typically 120°C). Prevents overheating while maintaining charging. (2) Thermal shutdown - Complete shutdown if temperature reaches unsafe levels (typically 150°C). Automatic recovery when cooled. (3) JEITA compliance - Temperature-dependent charging on select models. Reduces charge current or voltage at high temperatures for battery safety. (4) Thermal pad packages - QFN packages with exposed thermal pads for better heat dissipation to PCB. (5) Efficiency - Switching chargers generate less heat than linear chargers at high currents due to higher efficiency. (6) External thermal monitoring - Some chargers support external NTC thermistor for battery temperature monitoring. Proper PCB layout with adequate copper area for heat dissipation is essential for reliable operation. LiTong can provide thermal design guidance and layout recommendations.",
          "decisionGuide": "Contact LiTong for thermal design guidance and heat dissipation optimization.",
          "keywords": ["thermal management", "thermal regulation", "thermal shutdown", "JEITA"]
        },
        {
          "question": "What protection features are integrated in SouthChip chargers?",
          "answer": "SouthChip chargers include comprehensive protection features: (1) Input over-voltage protection (OVP) - Protects against adapter over-voltage conditions. Typical threshold 6-7V for 5V input chargers. (2) Battery over-voltage protection - Prevents over-charging by terminating charge if battery voltage exceeds threshold. (3) Over-current protection (OCP) - Limits charge current to programmed maximum. Foldback current limiting during faults. (4) Short-circuit protection - Fast response to output short-circuit with automatic recovery. (5) Over-temperature protection (OTP) - Thermal shutdown if die temperature exceeds safe limits. (6) Safety timer - Terminates charging if not completed within programmed time window (typically 6-10 hours). (7) Reverse polarity protection - Some models protect against reverse battery connection. (8) Input under-voltage lockout (UVLO) - Prevents operation with insufficient input voltage. These protections ensure safe and reliable battery charging under various fault conditions.",
          "decisionGuide": "Contact LiTong for protection feature details and safety system design.",
          "keywords": ["protection features", "OVP", "OCP", "OTP", "safety timer"]
        }
      ],
      "products": [
        {
          "partNumber": "SC4056",
          "name": "SC4056 Linear Li-ion Battery Charger",
          "shortDescription": "1A linear Li-ion battery charger with automatic charge termination and thermal regulation in compact SOP-8 package",
          "descriptionParagraphs": [
            "The SC4056 is a complete constant-current/constant-voltage linear charger for single-cell lithium-ion batteries. Its compact SOP-8 package and low external component count make it ideal for portable applications.",
            "The device charges the battery in three phases: conditioning, constant current, and constant voltage. Charge current is programmable up to 1A with an external resistor. When charge current drops to 1/10th of programmed value, charging automatically terminates.",
            "Thermal feedback regulates charge current to limit die temperature, optimizing charge rate while protecting the IC. The SC4056 includes comprehensive protection features including reverse current protection and thermal shutdown."
          ],
          "specifications": {
            "Charge Current": "Programmable up to 1A",
            "Charge Voltage": "4.2V ±1%",
            "Input Voltage": "4.5V to 6.5V",
            "Standby Current": "<2μA",
            "Package": "SOP-8"
          },
          "features": [
            "Programmable charge current up to 1A",
            "No external MOSFET or blocking diode required",
            "Thermal regulation for maximum charge rate",
            "Automatic charge termination",
            "Automatic recharge threshold",
            "Reverse current protection",
            "SOP-8 package"
          ],
          "applications": [
            "Portable media players",
            "Bluetooth headsets",
            "Power banks",
            "Portable medical devices",
            "Handheld instruments"
          ],
          "faeReview": {
            "author": "Michael Chen",
            "title": "Senior FAE - Power Management",
            "content": "The SC4056 is SouthChip's most popular linear charger and for good reason. It offers an excellent balance of features, performance, and cost. I've used this part in dozens of designs from TWS earbuds to portable medical devices. The 1A charge current is sufficient for most single-cell applications, and the thermal regulation works well to prevent overheating. The automatic recharge feature is useful for maintaining battery charge when the device remains connected to power. One tip: use a good quality 10μF ceramic capacitor at the BAT pin for stable operation. The charge current programming resistor should be placed close to the IC. Overall, this is a reliable workhorse charger for cost-sensitive applications.",
            "highlight": "Cost-effective linear charger with excellent reliability for single-cell Li-ion applications"
          },
          "alternativeParts": [
            {
              "partNumber": "SC9017",
              "brand": "SouthChip",
              "specifications": {
                "chargeCurrent": "280mA",
                "chargeVoltage": "4.2V",
                "package": "SOT-23-5"
              },
              "comparison": {
                "chargeCurrent": "280mA < 1A (lower current)",
                "package": "SOT-23-5 < SOP-8 (smaller)",
                "cost": "Lower cost",
                "features": "Basic charger without thermal regulation"
              },
              "reason": "Smaller package and lower cost for ultra-compact low-current applications",
              "useCase": "TWS earbuds, smart watches, and space-constrained designs",
              "link": "#"
            },
            {
              "partNumber": "SC8815",
              "brand": "SouthChip",
              "specifications": {
                "chargeCurrent": "3A",
                "chargeVoltage": "4.2V",
                "topology": "Switching buck"
              },
              "comparison": {
                "chargeCurrent": "3A > 1A (higher current)",
                "efficiency": "~90% > ~70% (more efficient)",
                "heat": "Less heat generation",
                "cost": "Higher cost",
                "complexity": "Requires inductor"
              },
              "reason": "Higher efficiency switching charger for high-current fast charging",
              "useCase": "Smartphones, tablets, and fast-charging applications",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "SC4056-EVAL",
              "link": "#",
              "description": "Evaluation board for SC4056 with USB input and battery connector",
              "category": "Development Tools"
            },
            {
              "partNumber": "10μF Ceramic",
              "link": "#",
              "description": "X5R/X7R ceramic capacitor for output filtering",
              "category": "Passive Component"
            },
            {
              "partNumber": "1kΩ Resistor",
              "link": "#",
              "description": "1% resistor for 1A charge current programming",
              "category": "Passive Component"
            }
          ],
          "faqs": [
            {
              "question": "What is the maximum charge current of SC4056?",
              "answer": "The SC4056 supports programmable charge current up to 1A. The charge current is set by a resistor connected to the PROG pin using the formula: Ibat = 1000V / Rprog. For 1A charging, use 1kΩ resistor. For 500mA, use 2kΩ. The actual charge current may be limited by thermal regulation if the die temperature exceeds 120°C. At high charge currents with high input voltage, thermal regulation may reduce current to maintain safe temperature. For reliable 1A charging, ensure adequate PCB copper area for heat dissipation (minimum 0.5 square inches). The charge current can be monitored by measuring voltage at PROG pin: Vprog = Ibat × Rprog × 0.001.",
              "decisionGuide": "Contact LiTong for charge current programming and thermal design guidance.",
              "keywords": ["charge current", "1A charging", "PROG resistor", "current programming"]
            },
            {
              "question": "How does the automatic charge termination work?",
              "answer": "The SC4056 automatically terminates charging when the charge current drops below 1/10th of programmed value during constant voltage phase. The process: (1) CC phase - Charger delivers constant current to battery until battery voltage reaches 4.2V. (2) CV phase - Charger maintains 4.2V while charge current gradually decreases as battery approaches full charge. (3) Termination - When charge current drops to C/10 (e.g., 100mA for 1A programmed current), charging terminates and CHRG pin enters high-impedance state. (4) Automatic recharge - If battery voltage drops below 4.05V (recharge threshold) after termination, new charge cycle begins. This ensures battery remains fully charged when left connected to power. The termination current threshold is fixed at C/10 and cannot be changed.",
              "decisionGuide": "Contact LiTong for charge termination behavior and recharge threshold details.",
              "keywords": ["charge termination", "automatic termination", "recharge threshold", "C/10"]
            },
            {
              "question": "What is the standby current consumption?",
              "answer": "The SC4056 has very low standby current consumption: (1) Input standby current - Less than 2μA when input voltage present but not charging (battery full or no battery). (2) Battery drain current - Less than 2μA reverse current from battery to input when input power removed. (3) Shutdown current - Less than 25μA when manually shut down. These low currents ensure minimal battery drain when charger is idle. The reverse current protection prevents battery discharge through the charger when input power is removed. For battery-powered systems that remain connected to charger, this low standby current maximizes battery life. The actual standby current depends on input voltage and temperature, but typically stays below 2μA across operating range.",
              "decisionGuide": "Contact LiTong for standby current specifications and battery drain analysis.",
              "keywords": ["standby current", "quiescent current", "battery drain", "reverse current"]
            },
            {
              "question": "How does thermal regulation work?",
              "answer": "The SC4056 thermal regulation system prevents overheating: (1) Temperature monitoring - Internal temperature sensor continuously monitors die temperature. (2) Regulation threshold - When die temperature exceeds approximately 120°C, charge current is automatically reduced. (3) Regulation loop - Charge current is reduced proportionally to temperature rise above threshold, maintaining temperature at regulation point. (4) Full current restoration - When temperature drops below threshold, charge current returns to programmed value. (5) Thermal shutdown - If temperature exceeds 150°C, charger shuts down completely until cooled. This allows charger to operate at maximum possible current without overheating, optimizing charge time while protecting the IC. Thermal regulation is automatic and requires no external components. Proper PCB layout with adequate copper area minimizes thermal regulation occurrence.",
              "decisionGuide": "Contact LiTong for thermal design and heat dissipation optimization.",
              "keywords": ["thermal regulation", "temperature protection", "thermal management", "heat dissipation"]
            },
            {
              "question": "What is the recommended PCB layout?",
              "answer": "Recommended PCB layout for SC4056: (1) Input capacitor - Place 10μF ceramic capacitor close to VCC and GND pins. Minimize loop area. (2) Output capacitor - Place 10μF ceramic capacitor close to BAT pin and GND. Critical for stability. (3) Thermal design - Use large copper areas connected to GND pin for heat dissipation. Minimum 0.5 square inches recommended for 1A charging. (4) PROG resistor - Place close to PROG pin with short trace to GND. Keep away from switching noise. (5) Battery connection - Keep traces to battery short and wide to minimize voltage drop. (6) Grounding - Use single-point ground connection. Avoid ground loops. (7) Thermal vias - Use thermal vias under GND pad to spread heat to inner layers. Following these guidelines ensures stable operation and maximum charge current capability. LiTong can provide reference layout and design review services.",
              "decisionGuide": "Contact LiTong for PCB layout review and thermal design guidance.",
              "keywords": ["PCB layout", "thermal design", "capacitor placement", "grounding"]
            }
          ]
        }
      ]
    }
  ]
};

// Add more categories
const fuelGaugeCategory = {
  "id": "fuel-gauge-ics",
  "name": "Fuel Gauge ICs",
  "slug": "fuel-gauge-ics",
  "description": "Accurate battery fuel gauge solutions with impedance tracking technology for precise state-of-charge and state-of-health monitoring.",
  "longDescription": "SouthChip Fuel Gauge ICs provide accurate battery monitoring using advanced impedance tracking technology. These ICs continuously measure battery voltage, current, and temperature to calculate precise state-of-charge (SOC) and state-of-health (SOH) information. The impedance tracking algorithm compensates for battery aging and temperature effects, maintaining accuracy throughout the battery's lifetime. Key features include high-precision ADC for voltage and current measurement, integrated temperature sensor, cycle counting, and comprehensive battery health reporting. The fuel gauges communicate with host processors via I2C or HDQ interface, providing real-time battery status information. Applications include smartphones, tablets, laptops, power tools, and any battery-powered device requiring accurate battery monitoring. As an authorized SouthChip distributor, LiTong provides fuel gauge selection guidance and integration support.",
  "parameters": ["Interface", "Accuracy", "Battery Type", "Package"],
  "series": [
    {
      "name": "SC27 Series",
      "description": "Single-cell fuel gauges with impedance tracking for consumer electronics",
      "applications": ["Smartphones", "Tablets", "Power banks"]
    }
  ],
  "selectionGuide": "Fuel Gauge IC Selection Guide",
  "selectionGuideLink": {
    "url": "/southchip/support/fuel-gauge-selection-guide.html",
    "text": "View Fuel Gauge IC Selection Guide for detailed selection guidance"
  },
  "faqs": [
    {
      "question": "How accurate is SouthChip fuel gauge technology?",
      "answer": "SouthChip fuel gauges provide high accuracy battery monitoring: (1) Voltage accuracy - ±5mV typical for precise voltage measurement. (2) Current accuracy - ±1% after calibration with proper sense resistor. (3) SOC accuracy - 3-5% typical under steady-state conditions. (4) Impedance tracking - Compensates for battery aging and temperature, maintaining accuracy over battery lifetime. (5) Temperature compensation - Automatic adjustment for temperature effects on battery characteristics. (6) Calibration - Factory calibrated with runtime auto-calibration. The impedance tracking technology is more accurate than simple voltage-based fuel gauging, especially under load conditions and as the battery ages. For most consumer electronics applications, this accuracy provides excellent user experience with reliable battery level indication.",
      "decisionGuide": "Contact LiTong for fuel gauge accuracy specifications and calibration procedures.",
      "keywords": ["fuel gauge accuracy", "SOC accuracy", "impedance tracking", "battery monitoring"]
    },
    {
      "question": "What parameters can SouthChip fuel gauges report?",
      "answer": "SouthChip fuel gauges report comprehensive battery parameters: (1) State-of-Charge (SOC) - Remaining battery capacity as percentage (0-100%). (2) State-of-Health (SOH) - Battery health status indicating capacity fade. (3) Remaining capacity - Absolute remaining capacity in mAh or mWh. (4) Full charge capacity - Current maximum capacity accounting for aging. (5) Time-to-empty - Estimated time until battery depleted at current discharge rate. (6) Time-to-full - Estimated time to full charge at current charge rate. (7) Cycle count - Number of charge/discharge cycles accumulated. (8) Battery voltage - Measured terminal voltage. (9) Battery current - Charge/discharge current. (10) Battery temperature - From internal or external temperature sensor. These parameters enable sophisticated battery management, accurate runtime prediction, and proactive maintenance alerts.",
      "decisionGuide": "Contact LiTong for fuel gauge parameter reporting and host interface integration.",
      "keywords": ["fuel gauge parameters", "SOC", "SOH", "remaining capacity"]
    }
  ],
  "products": [
    {
      "partNumber": "SC2731",
      "name": "SC2731 Single-Cell Fuel Gauge",
      "shortDescription": "High-precision single-cell fuel gauge with impedance tracking and I2C interface for accurate battery monitoring",
      "descriptionParagraphs": [
        "The SC2731 is a high-precision fuel gauge for single-cell Li-ion/Li-polymer batteries. Using advanced impedance tracking technology, it provides accurate state-of-charge (SOC) and state-of-health (SOH) information throughout the battery's lifetime.",
        "The device features a high-resolution ADC for voltage and current measurement, integrated temperature sensor, and sophisticated battery modeling algorithms. It compensates for battery aging and temperature effects to maintain accuracy.",
        "Communication with the host processor is via standard I2C interface. The SC2731 provides comprehensive battery status information including SOC, remaining capacity, time-to-empty, and cycle count."
      ],
      "specifications": {
        "Battery Type": "Single-cell Li-ion/Li-polymer",
        "Voltage Accuracy": "±5mV",
        "Current Accuracy": "±1%",
        "SOC Accuracy": "3-5%",
        "Interface": "I2C",
        "Package": "WLCSP-9"
      },
      "features": [
        "Impedance tracking technology",
        "High-precision voltage and current measurement",
        "Integrated temperature sensor",
        "Accurate SOC and SOH reporting",
        "Cycle counting",
        "I2C interface",
        "Ultra-low power consumption",
        "WLCSP package"
      ],
      "applications": [
        "Smartphones",
        "Tablets",
        "Smart watches",
        "TWS earbuds",
        "Portable medical devices"
      ],
      "faeReview": {
        "author": "Sarah Liu",
        "title": "Senior FAE - Battery Management",
        "content": "The SC2731 is an excellent fuel gauge for single-cell applications. The impedance tracking technology provides significantly better accuracy than voltage-based methods, especially under load and as the battery ages. I've implemented this part in several smartphone and wearable designs with excellent results. The I2C interface is straightforward to implement, and the register map is well-organized. The automatic calibration feature reduces production calibration requirements. One consideration: the WLCSP package requires careful PCB layout and assembly. For best accuracy, use a high-quality current sense resistor (1% or better) and keep traces short. The low power consumption (typically <50μA) is excellent for battery-powered devices. Overall, this is a cost-effective fuel gauge with performance comparable to more expensive alternatives.",
        "highlight": "Accurate fuel gauge with impedance tracking for single-cell battery monitoring"
      },
      "alternativeParts": [
        {
          "partNumber": "SC2750",
          "brand": "SouthChip",
          "specifications": {
            "batteryType": "Multi-cell (2-4S)",
            "interface": "I2C",
            "package": "TSSOP-14"
          },
          "comparison": {
            "batteryType": "Multi-cell > Single-cell",
            "package": "TSSOP-14 > WLCSP-9 (easier assembly)",
            "features": "Multi-cell balancing support",
            "cost": "Higher cost"
          },
          "reason": "Multi-cell fuel gauge for 2-4 series battery packs",
          "useCase": "Laptops, power tools, and multi-cell applications",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "SC2731-EVAL",
          "link": "#",
          "description": "Fuel gauge evaluation board with battery and host interface",
          "category": "Development Tools"
        },
        {
          "partNumber": "10mΩ Resistor",
          "link": "#",
          "description": "1% current sense resistor for accurate current measurement",
          "category": "Passive Component"
        }
      ],
      "faqs": [
        {
          "question": "How does impedance tracking work?",
          "answer": "Impedance tracking technology provides accurate fuel gauging: (1) Battery model - The fuel gauge maintains a model of battery impedance (resistance and capacitance) that changes with state-of-charge, temperature, and aging. (2) Real-time measurement - Continuously measures voltage, current, and temperature during charge and discharge. (3) Impedance update - Updates battery impedance model based on measured data, learning battery characteristics over time. (4) SOC calculation - Uses impedance model to calculate accurate SOC, compensating for voltage drop under load. (5) Aging compensation - Automatically adjusts for capacity fade and impedance increase as battery ages. This is more accurate than simple voltage-based methods because it accounts for the battery's dynamic behavior. The result is accurate SOC reporting even under varying load conditions and throughout battery lifetime.",
          "decisionGuide": "Contact LiTong for impedance tracking technology details and implementation guidance.",
          "keywords": ["impedance tracking", "battery model", "SOC calculation", "aging compensation"]
        },
        {
          "question": "What is the power consumption of SC2731?",
          "answer": "The SC2731 has ultra-low power consumption suitable for battery-powered devices: (1) Active mode - Approximately 50-100μA during normal operation with periodic measurements. (2) Sleep mode - Less than 20μA when battery is in low-power state with reduced measurement frequency. (3) Shutdown mode - Less than 1μA when disabled. The low power consumption is achieved through efficient design and the ability to enter low-power states between measurements. The fuel gauge can be configured to take measurements at intervals (e.g., every 1-4 seconds) and sleep between measurements, further reducing average current. This low power consumption has minimal impact on battery life, making the SC2731 suitable for power-sensitive applications like wearables and IoT devices.",
          "decisionGuide": "Contact LiTong for power consumption specifications and optimization.",
          "keywords": ["power consumption", "quiescent current", "low power", "battery life"]
        }
      ]
    }
  ]
};

const dcdcCategory = {
  "id": "dc-dc-converters",
  "name": "DC-DC Converters",
  "slug": "dc-dc-converters",
  "description": "High-efficiency buck, boost, and buck-boost converters with wide input voltage range and excellent load transient response.",
  "longDescription": "SouthChip DC-DC Converters provide efficient voltage conversion for various power management applications. The portfolio includes synchronous buck converters for step-down applications, boost converters for step-up applications, and buck-boost converters for applications requiring both step-up and step-down capability. These converters feature high efficiency (up to 96%), fast transient response, and wide input voltage ranges. Advanced features include programmable switching frequency, power-good indicators, soft-start, and comprehensive protection. The compact packages and high integration minimize external component count and PCB area. Applications include smartphone power management, tablet systems, industrial equipment, and IoT devices. As an authorized SouthChip distributor, LiTong provides DC-DC converter selection guidance and design support.",
  "parameters": ["Topology", "Input Voltage", "Output Current", "Efficiency"],
  "series": [
    {
      "name": "SC8 Buck Series",
      "description": "High-efficiency synchronous buck converters for step-down applications",
      "applications": ["Smartphones", "Tablets", "Industrial"]
    },
    {
      "name": "SC8 Boost Series",
      "description": "High-efficiency boost converters for step-up applications",
      "applications": ["LED drivers", "USB OTG", "Audio amplifiers"]
    }
  ],
  "selectionGuide": "DC-DC Converter Selection Guide",
  "selectionGuideLink": {
    "url": "/southchip/support/dc-dc-converter-selection-guide.html",
    "text": "View DC-DC Converter Selection Guide for detailed selection guidance"
  },
  "faqs": [
    {
      "question": "What topologies do SouthChip DC-DC converters support?",
      "answer": "SouthChip offers DC-DC converters in multiple topologies: (1) Buck (step-down) - Converts higher input voltage to lower output voltage. Highest efficiency topology for step-down applications. (2) Boost (step-up) - Converts lower input voltage to higher output voltage. Used for LED drivers, USB OTG, and audio amplifiers. (3) Buck-boost - Can both step-up and step-down. Useful when input voltage may be above or below output voltage. (4) Synchronous vs non-synchronous - SouthChip primarily offers synchronous converters with integrated high-side and low-side MOSFETs for higher efficiency. (5) Single-channel vs multi-channel - Some devices offer multiple independent outputs. Select topology based on your input/output voltage relationship and efficiency requirements.",
      "decisionGuide": "Contact LiTong for topology selection based on your voltage conversion requirements.",
      "keywords": ["DC-DC topology", "buck converter", "boost converter", "buck-boost"]
    },
    {
      "question": "What efficiency can SouthChip DC-DC converters achieve?",
      "answer": "SouthChip DC-DC converters achieve high efficiency: (1) Peak efficiency - Up to 96% for buck converters at optimal operating points. (2) Typical efficiency - 90-94% across wide load range for synchronous buck converters. (3) Light load efficiency - PFM mode maintains high efficiency at light loads (typically >80% at 1mA). (4) Factors affecting efficiency - Input/output voltage ratio, load current, switching frequency, and inductor selection. (5) Comparison - Synchronous converters are more efficient than non-synchronous due to reduced conduction losses. The high efficiency minimizes heat generation and extends battery life in portable applications. Efficiency curves are provided in datasheets for different operating conditions.",
      "decisionGuide": "Contact LiTong for efficiency analysis and optimization for your operating conditions.",
      "keywords": ["DC-DC efficiency", "power efficiency", "synchronous converter", "PFM mode"]
    }
  ],
  "products": [
    {
      "partNumber": "SC8105",
      "name": "SC8105 Synchronous Buck Converter",
      "shortDescription": "3A synchronous buck converter with 96% efficiency and wide input voltage range for power management applications",
      "descriptionParagraphs": [
        "The SC8105 is a high-efficiency synchronous buck converter capable of delivering up to 3A output current. It features a wide input voltage range of 4.5V to 18V, making it suitable for various power sources including USB, adapters, and industrial supplies.",
        "The device uses adaptive constant on-time control for fast transient response while maintaining high efficiency across the load range. It automatically switches between PWM mode at heavy loads and PFM mode at light loads to optimize efficiency.",
        "Integrated high-side and low-side MOSFETs minimize external component count. Protection features include over-current protection, thermal shutdown, and input under-voltage lockout."
      ],
      "specifications": {
        "Input Voltage": "4.5V to 18V",
        "Output Current": "Up to 3A",
        "Efficiency": "Up to 96%",
        "Switching Frequency": "500kHz",
        "Package": "SOT-23-6"
      },
      "features": [
        "Synchronous rectification for high efficiency",
        "Wide input voltage range (4.5V-18V)",
        "Up to 3A output current",
        "Adaptive constant on-time control",
        "Auto PFM/PWM mode switching",
        "Internal compensation",
        "Power-good indicator",
        "Comprehensive protection"
      ],
      "applications": [
        "Smartphone power management",
        "Tablet systems",
        "Set-top boxes",
        "Industrial equipment",
        "FPGA/DSP power supplies"
      ],
      "faeReview": {
        "author": "David Wang",
        "title": "Principal FAE - Power Electronics",
        "content": "The SC8105 is a versatile buck converter that I've used in many designs. The wide input voltage range (4.5V-18V) makes it very flexible - it can work from 5V USB, 12V adapters, or industrial 24V systems (with derating). The 3A current capability is sufficient for most system rails. Efficiency is excellent, typically 94-96% at mid-to-heavy loads. The auto PFM/PWM switching works well, maintaining reasonable efficiency even at light loads. The internal compensation simplifies design - no need to calculate external compensation components. One tip: the input capacitor should be placed very close to the IC with minimal loop area for best EMI performance. The SOT-23-6 package is compact but can handle 3A with proper PCB layout. Overall, this is a reliable, easy-to-use buck converter for general-purpose applications.",
        "highlight": "High-efficiency synchronous buck converter with wide input range and easy design"
      },
      "alternativeParts": [
        {
          "partNumber": "SC8103",
          "brand": "SouthChip",
          "specifications": {
            "outputCurrent": "2A",
            "inputVoltage": "4.5V-18V",
            "package": "SOT-23-5"
          },
          "comparison": {
            "outputCurrent": "2A < 3A (lower current)",
            "package": "SOT-23-5 < SOT-23-6 (smaller)",
            "features": "No power-good pin",
            "cost": "Lower cost"
          },
          "reason": "Lower cost option for applications requiring less than 2A",
          "useCase": "Lower power applications and cost-sensitive designs",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "SC8105-EVAL",
          "link": "#",
          "description": "Evaluation board for SC8105 with adjustable output",
          "category": "Development Tools"
        },
        {
          "partNumber": "4.7μH Inductor",
          "link": "#",
          "description": "Power inductor for 3A buck converter",
          "category": "Passive Component"
        }
      ],
      "faqs": [
        {
          "question": "What is the efficiency of SC8105?",
          "answer": "The SC8105 achieves excellent efficiency: (1) Peak efficiency - Up to 96% at optimal operating conditions (typically VIN=12V, VOUT=3.3V, IOUT=1-2A). (2) Heavy load efficiency - 94-96% at loads above 500mA. (3) Light load efficiency - >80% at 10mA load due to PFM mode. (4) Efficiency factors - Input/output voltage ratio, load current, inductor DCR, and PCB layout affect actual efficiency. (5) Thermal performance - High efficiency means less heat generation, reducing thermal management requirements. For battery-powered applications, this high efficiency extends runtime. For adapter-powered applications, it reduces power consumption and heat. Efficiency curves are provided in the datasheet for various input/output combinations.",
          "decisionGuide": "Contact LiTong for efficiency analysis and optimization for your operating conditions.",
          "keywords": ["efficiency", "power efficiency", "buck converter efficiency", "PFM mode"]
        },
        {
          "question": "How do I select the inductor for SC8105?",
          "answer": "Inductor selection for SC8105: (1) Inductance value - 4.7μH is recommended for most applications. Range 3.3-10μH acceptable. (2) Current rating - Select inductor with saturation current >4A (higher than max load for margin). RMS current rating >3A. (3) DCR - Lower DCR improves efficiency. Target <50mΩ for 3A applications. (4) Core material - Ferrite core recommended for switching converters. Avoid powdered iron for high frequency. (5) Size - Balance between current capability and physical size. Shielded inductors reduce EMI. (6) Recommended parts - Coilcraft XAL series, Wurth WE-LHMI series, or similar. The inductor is the most critical external component affecting performance and efficiency. Proper inductor selection ensures stable operation and maximum efficiency.",
          "decisionGuide": "Contact LiTong for inductor selection and component recommendations.",
          "keywords": ["inductor selection", "inductance", "DCR", "current rating"]
        }
      ]
    }
  ]
};

const powerPathCategory = {
  "id": "power-path-management",
  "name": "Power Path Management",
  "slug": "power-path-management",
  "description": "Intelligent power path management ICs for seamless power switching between battery and adapter with priority control.",
  "longDescription": "SouthChip Power Path Management ICs provide intelligent control of power flow between multiple sources and loads. These devices enable seamless switching between battery and external power, prioritization of power sources, and protection against fault conditions. Key features include automatic source selection, ideal diode operation with low voltage drop, current limiting, and comprehensive protection. The power path management solutions simplify system design by integrating multiple functions that would otherwise require discrete components. Applications include smartphones, tablets, power banks, and any portable device requiring intelligent power management. As an authorized SouthChip distributor, LiTong provides power path management solution selection and design support.",
  "parameters": ["Function", "Input Voltage", "Current Capacity", "Package"],
  "series": [
    {
      "name": "SC5 Series",
      "description": "Power path management and load switch solutions",
      "applications": ["Smartphones", "Tablets", "Power banks"]
    }
  ],
  "selectionGuide": "Power Path Management Selection Guide",
  "selectionGuideLink": {
    "url": "/southchip/support/power-path-selection-guide.html",
    "text": "View Power Path Management Selection Guide for detailed selection guidance"
  },
  "faqs": [
    {
      "question": "What is power path management?",
      "answer": "Power path management controls power flow in systems with multiple sources: (1) Source selection - Automatically selects between battery and external power (USB/adapter). (2) Priority control - Prioritizes external power when available, battery when external removed. (3) Seamless switching - Glitch-free transition between sources without interrupting system operation. (4) Charging control - Manages battery charging while powering system load. (5) Protection - Prevents back-feeding, over-current, and fault propagation. (6) Ideal diode - Low-loss switching mimicking ideal diode behavior. Power path management is essential for portable devices that need to operate while charging and seamlessly switch between power sources.",
      "decisionGuide": "Contact LiTong for power path architecture design and component selection.",
      "keywords": ["power path", "source selection", "power management", "ideal diode"]
    }
  ],
  "products": [
    {
      "partNumber": "SC5328",
      "name": "SC5328 Power Path Management IC",
      "shortDescription": "Intelligent power path management IC with automatic source selection and ideal diode operation for portable devices",
      "descriptionParagraphs": [
        "The SC5328 is a power path management IC that provides intelligent control of power flow between USB/adapter input, battery, and system load. It automatically selects the appropriate power source based on availability and priority.",
        "The device features an ideal diode controller that provides low-loss power path from battery to system when external power is not available. When external power is connected, it seamlessly switches to external power while charging the battery.",
        "Integrated protection features include input over-voltage protection, reverse blocking, and current limiting. The SC5328 simplifies power management design in portable devices."
      ],
      "specifications": {
        "Input Voltage": "4.5V to 5.5V",
        "System Current": "Up to 2.5A",
        "Charge Current": "Up to 1.5A",
        "Dropout Voltage": "<50mV",
        "Package": "QFN-16"
      },
      "features": [
        "Automatic power source selection",
        "Ideal diode operation",
        "Seamless source switching",
        "Integrated battery charger",
        "Input over-voltage protection",
        "Reverse blocking",
        "Current limiting",
        "I2C interface"
      ],
      "applications": [
        "Smartphones",
        "Tablets",
        "Power banks",
        "Portable media players",
        "Handheld instruments"
      ],
      "faeReview": {
        "author": "Michael Chen",
        "title": "Senior FAE - Power Management",
        "content": "The SC5328 is a well-designed power path management IC that simplifies portable device power architecture. The automatic source selection works reliably - when USB is connected, it powers the system and charges the battery; when USB is removed, it seamlessly switches to battery without glitching the system. The ideal diode function has very low dropout (<50mV), maximizing battery runtime. The integrated 1.5A charger is sufficient for most single-cell applications. I2C interface allows host control of charging parameters and monitoring. One nice feature is the input current limiting which prevents overloading weak USB sources. The QFN-16 package has good thermal performance for the power levels. Overall, this is a good integrated solution that replaces multiple discrete components.",
        "highlight": "Integrated power path management with automatic source selection and charging"
      },
      "alternativeParts": [
        {
          "partNumber": "SC5325",
          "brand": "SouthChip",
          "specifications": {
            "systemCurrent": "1.5A",
            "chargeCurrent": "1A",
            "package": "QFN-12"
          },
          "comparison": {
            "systemCurrent": "1.5A < 2.5A",
            "chargeCurrent": "1A < 1.5A",
            "package": "QFN-12 < QFN-16 (smaller)",
            "cost": "Lower cost"
          },
          "reason": "Lower cost option for lower current applications",
          "useCase": "Lower power devices and cost-sensitive designs",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "SC5328-EVAL",
          "link": "#",
          "description": "Evaluation board demonstrating power path management",
          "category": "Development Tools"
        }
      ],
      "faqs": [
        {
          "question": "How does automatic source selection work?",
          "answer": "The SC5328 automatic source selection: (1) Detection - Continuously monitors USB/adapter input voltage. (2) Threshold - When input voltage exceeds valid threshold (typically 4.3V), external power is considered valid. (3) Switching - Seamlessly switches system power from battery to external source. (4) Prioritization - External power always prioritized over battery when available. (5) Battery charging - When external power valid, battery is charged while system is powered. (6) Fallback - If external power removed or invalid, immediately switches back to battery. (7) Glitch prevention - Controlled switching prevents voltage glitches on system rail. This automatic operation requires no host intervention, simplifying software design.",
          "decisionGuide": "Contact LiTong for power path architecture and source selection design.",
          "keywords": ["source selection", "automatic switching", "power path", "priority control"]
        }
      ]
    }
  ]
};

// Add all categories
productsData.categories.push(fuelGaugeCategory);
productsData.categories.push(dcdcCategory);
productsData.categories.push(powerPathCategory);

// Write products.json
const productsPath = path.join(dataDir, 'products.json');
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log('✅ Created products.json with 4 categories and 4 products');
