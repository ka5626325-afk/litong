#!/usr/bin/env node
/**
 * Add remaining ChipON product categories
 */

const fs = require('fs');
const path = require('path');

const brand = 'chipon';
const dataDir = path.join(__dirname, '..', 'data', brand);
const productsPath = path.join(dataDir, 'products.json');

let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Category 2: Power Management ICs
const powerManagementCategory = {
  "id": "power-management-ics",
  "name": "Power Management ICs",
  "slug": "power-management-ics",
  "description": "Automotive-grade power management solutions including voltage regulators, LED drivers, and battery management ICs for reliable power delivery.",
  "longDescription": "ChipON power management ICs provide comprehensive solutions for automotive and industrial power applications. The portfolio includes linear voltage regulators, switching regulators, LED drivers, and battery management ICs. All power management products are designed to meet automotive quality standards with wide operating temperature ranges and robust protection features. Key features include low quiescent current, high efficiency, and comprehensive protection against over-current, over-temperature, and short-circuit conditions. These ICs are suitable for various applications including body electronics power supplies, LED lighting systems, and battery-powered devices. As an authorized ChipON distributor, LiTong provides complete technical support including power supply design, thermal analysis, and application troubleshooting.",
  "parameters": ["Input Voltage", "Output Voltage", "Output Current", "Package"],
  "series": [
    {
      "name": "KF50 Series",
      "description": "Low-dropout linear regulators for automotive power supplies",
      "applications": ["ECU power supplies", "Sensor power", "Reference voltage"]
    },
    {
      "name": "KF60 Series",
      "description": "LED drivers for automotive lighting applications",
      "applications": ["Interior lighting", "Exterior lighting", "Dashboard backlight"]
    }
  ],
  "selectionGuide": "Power Management IC Selection Guide",
  "selectionGuideLink": "/chipon/support/power-management-selection-guide.html",
  "faqs": [
    {
      "question": "How do I select the right power management IC for my application?",
      "answer": "Selecting the right power management IC requires considering input voltage range, output voltage and current requirements, efficiency targets, and specific features like enable control or power-good indication. For low-dropout applications, linear regulators offer simple solutions. For high-efficiency requirements, switching regulators are preferred. LED drivers should be selected based on LED configuration and current requirements. LiTong FAEs can help analyze your power requirements and recommend optimal solutions from ChipON's portfolio.",
      "decisionGuide": "Provide your power requirements to LiTong for personalized power management IC recommendations.",
      "keywords": ["power management selection", "voltage regulator", "LED driver"]
    },
    {
      "question": "What is the difference between linear and switching regulators?",
      "answer": "Linear regulators (LDO) provide simple voltage regulation with low noise but lower efficiency, especially when input-output voltage difference is large. They are suitable for low-current applications where simplicity and low noise are important. Switching regulators (buck/boost) provide high efficiency (typically 85-95%) but with higher complexity and output noise. They are preferred for applications with significant input-output voltage differences or high current requirements. ChipON offers both types to meet different application needs.",
      "decisionGuide": "Use linear regulators for low-current, noise-sensitive applications. Use switching regulators for high-efficiency requirements. Contact LiTong for selection guidance.",
      "keywords": ["linear regulator", "switching regulator", "LDO"]
    },
    {
      "question": "What protection features do ChipON power management ICs include?",
      "answer": "ChipON power management ICs incorporate comprehensive protection features including over-current protection (OCP) to limit output current during faults, over-temperature protection (OTP) to shut down the device if junction temperature exceeds safe limits, short-circuit protection (SCP) to handle output short conditions, and under-voltage lockout (UVLO) to ensure proper startup. These protection features ensure reliable operation and protect both the IC and the load under fault conditions.",
      "decisionGuide": "Review protection requirements for your application. Contact LiTong for guidance on protection feature selection.",
      "keywords": ["protection features", "OCP", "OTP", "short-circuit protection"]
    },
    {
      "question": "How do I calculate power dissipation in voltage regulators?",
      "answer": "Power dissipation in linear regulators is calculated as P = (Vin - Vout) × Iout. For example, with 12V input, 5V output, and 100mA load: P = (12V - 5V) × 0.1A = 0.7W. The junction temperature is calculated as Tj = Ta + (P × Rthja). Ensure Tj stays below maximum rating (typically 125°C or 150°C). For high power dissipation, consider using switching regulators or adding heat sinks. ChipON datasheets provide thermal resistance specifications for junction-to-ambient calculations.",
      "decisionGuide": "Calculate thermal performance for your operating conditions. Contact LiTong for thermal design support.",
      "keywords": ["power dissipation", "thermal design", "junction temperature"]
    },
    {
      "question": "What is the difference between constant voltage and constant current LED drivers?",
      "answer": "Constant voltage LED drivers maintain a fixed output voltage regardless of LED current, suitable for LED arrays with current limiting resistors. Constant current LED drivers maintain a fixed output current, ensuring consistent LED brightness regardless of LED forward voltage variations. Constant current drivers are preferred for high-power LED applications and applications requiring precise current control. ChipON offers both types of LED drivers for different application requirements.",
      "decisionGuide": "Use constant current drivers for high-power LEDs. Use constant voltage drivers for low-power LED arrays. Contact LiTong for LED driver selection guidance.",
      "keywords": ["LED driver", "constant current", "constant voltage"]
    }
  ],
  "products": [
    {
      "partNumber": "KF5012",
      "name": "Automotive LDO Regulator",
      "shortDescription": "AEC-Q100 qualified 500mA low-dropout regulator with wide input range for automotive power supplies",
      "descriptionParagraphs": [
        "The KF5012 is a high-performance low-dropout (LDO) linear regulator designed for automotive power supply applications. It features AEC-Q100 qualification and wide operating temperature range for reliable automotive operation.",
        "This regulator supports input voltages up to 40V with 500mA output current capability. The low dropout voltage (typically 250mV at 500mA) ensures efficient operation even with small input-output voltage differences.",
        "Built-in protection features include over-current protection, thermal shutdown, and reverse polarity protection. The KF5012 is suitable for ECU power supplies, sensor power, and post-regulation applications."
      ],
      "specifications": {
        "Input Voltage": "4.5V-40V",
        "Output Voltage": "3.3V/5V fixed or adjustable",
        "Output Current": "500mA",
        "Dropout Voltage": "250mV @ 500mA",
        "Quiescent Current": "100μA typical",
        "Temperature Range": "-40°C to +125°C",
        "Package": "SOT-223"
      },
      "features": [
        "AEC-Q100 qualified",
        "Wide input voltage range 4.5V-40V",
        "Low dropout voltage",
        "Low quiescent current",
        "Over-current protection",
        "Thermal shutdown"
      ],
      "applications": [
        "ECU power supplies",
        "Sensor power supplies",
        "Post-regulation",
        "Battery-powered systems",
        "Industrial control"
      ],
      "faeReview": {
        "author": "Steven Liu",
        "title": "Senior FAE - Power Electronics",
        "content": "The KF5012 is an excellent choice for automotive power supply applications requiring a simple, reliable LDO solution. In my experience supporting automotive electronics designs, this regulator's wide input voltage range handles vehicle load dump conditions effectively. The low quiescent current is particularly valuable for always-on applications where battery drain is a concern. The AEC-Q100 qualification provides confidence for automotive use. I recommend this part for applications up to 500mA where simplicity and low noise are more important than maximum efficiency. For higher current or better efficiency requirements, consider ChipON's switching regulator offerings.",
        "highlight": "Reliable automotive LDO with wide input range and low quiescent current"
      },
      "alternativeParts": [
        {
          "partNumber": "KF5015",
          "brand": "ChipON",
          "specifications": {
            "inputVoltage": "4.5V-40V",
            "outputCurrent": "1A",
            "dropoutVoltage": "350mV @ 1A",
            "temperature": "-40°C to +125°C"
          },
          "comparison": {
            "inputVoltage": "4.5V-40V = 4.5V-40V (same)",
            "outputCurrent": "1A > 500mA (+100% higher current)",
            "dropoutVoltage": "350mV > 250mV (higher dropout)",
            "temperature": "-40°C to +125°C = -40°C to +125°C (same)",
            "package": "SOT-223 = SOT-223 (same)"
          },
          "reason": "Higher current capability for applications requiring up to 1A",
          "useCase": "Higher current ECU power supplies",
          "link": "#"
        },
        {
          "partNumber": "TI LM2936",
          "brand": "Texas Instruments",
          "specifications": {
            "inputVoltage": "5.5V-40V",
            "outputCurrent": "50mA",
            "dropoutVoltage": "200mV @ 50mA",
            "temperature": "-40°C to +125°C"
          },
          "comparison": {
            "inputVoltage": "5.5V-40V < 4.5V-40V (narrower range)",
            "outputCurrent": "50mA < 500mA (-90% lower current)",
            "dropoutVoltage": "200mV < 250mV (lower dropout)",
            "temperature": "-40°C to +125°C = -40°C to +125°C (same)",
            "price": "Higher cost"
          },
          "reason": "Alternative with ultra-low quiescent current for battery applications",
          "useCase": "Ultra-low power battery applications",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Input Capacitor 10uF",
          "link": "#",
          "description": "Ceramic capacitor for input stabilization",
          "category": "Passive Components"
        },
        {
          "partNumber": "Output Capacitor 4.7uF",
          "link": "#",
          "description": "Low-ESR capacitor for output stability",
          "category": "Passive Components"
        },
        {
          "partNumber": "KF5020",
          "link": "#",
          "description": "Switching regulator for high-efficiency applications",
          "category": "Power Management"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum input voltage for KF5012?",
          "answer": "The KF5012 supports maximum input voltage of 40V, making it suitable for automotive applications including load dump conditions. The absolute maximum rating is 45V, but continuous operation above 40V is not recommended. For applications with higher voltage transients, additional input protection may be required. The wide input range accommodates typical automotive battery voltages (12V nominal, 24V in trucks) with margin for voltage fluctuations.",
          "decisionGuide": "For applications above 40V input, contact LiTong for high-voltage regulator options.",
          "keywords": ["maximum input voltage", "load dump", "voltage rating"]
        },
        {
          "question": "How do I select the output capacitor for KF5012?",
          "answer": "The KF5012 requires an output capacitor for stability and transient response. Recommended specifications: 4.7μF to 10μF capacitance, ceramic or tantalum type, low ESR (<1Ω), voltage rating at least 1.5x output voltage. Ceramic capacitors (X5R or X7R dielectric) are preferred for best performance. The output capacitor should be placed close to the regulator output pin. Larger capacitance improves transient response but increases startup time. Follow the datasheet recommendations for optimal stability.",
          "decisionGuide": "Use ceramic capacitors with adequate voltage margin. Contact LiTong for capacitor selection guidance.",
          "keywords": ["output capacitor", "stability", "ESR"]
        },
        {
          "question": "What is the dropout voltage and why is it important?",
          "answer": "Dropout voltage is the minimum input-output voltage difference required for the regulator to maintain regulation. The KF5012 has typical dropout voltage of 250mV at 500mA load. Lower dropout allows the regulator to maintain output voltage even when input voltage approaches the output voltage. This is important in battery-powered applications where battery voltage drops during discharge. For example, with 3.3V output and 250mV dropout, the regulator maintains regulation down to 3.55V input.",
          "decisionGuide": "For low dropout requirements, verify input voltage margin in your application. Contact LiTong for dropout analysis.",
          "keywords": ["dropout voltage", "input-output difference", "regulation"]
        },
        {
          "question": "Can KF5012 be used in parallel for higher current?",
          "answer": "The KF5012 is not designed for direct parallel operation without additional circuitry. For higher current requirements, consider: 1) Using KF5015 (1A version) if current requirement is under 1A, 2) Using a switching regulator for higher efficiency at high currents, 3) Implementing external current sharing with ballast resistors (not recommended due to efficiency loss). For currents above 1A, ChipON's switching regulators provide better efficiency and thermal performance.",
          "decisionGuide": "For currents above 500mA, consider KF5015 or switching regulators. Contact LiTong for high-current solutions.",
          "keywords": ["parallel operation", "current sharing", "high current"]
        },
        {
          "question": "What is the thermal performance of KF5012?",
          "answer": "The KF5012 thermal performance depends on package and PCB layout. The SOT-223 package has thermal resistance (Rthja) of approximately 60°C/W on standard PCB. Maximum power dissipation at 25°C ambient: Pmax = (125°C - 25°C) / 60°C/W = 1.67W. At 500mA with 7V dropout: P = 3.5W (exceeds limit), so thermal management is required. Recommendations: use copper pours for heat spreading, add thermal vias, or reduce input voltage. For high dissipation applications, consider switching regulators.",
          "decisionGuide": "Calculate thermal performance for your operating conditions. Contact LiTong for thermal design support.",
          "keywords": ["thermal performance", "power dissipation", "heat sinking"]
        }
      ]
    },
    {
      "partNumber": "KF6020",
      "name": "Automotive LED Driver",
      "shortDescription": "AEC-Q100 qualified constant current LED driver with 60V input and 1A output for automotive lighting",
      "descriptionParagraphs": [
        "The KF6020 is a high-performance constant current LED driver designed for automotive lighting applications. It features AEC-Q100 qualification and wide input voltage range for flexible automotive system integration.",
        "This driver supports input voltages up to 60V with 1A constant current output. The integrated power MOSFET and current sensing provide accurate LED current regulation with ±3% accuracy.",
        "Advanced features include PWM dimming input, thermal foldback protection, and LED open/short detection. The KF6020 is suitable for interior lighting, exterior lighting, and dashboard backlight applications."
      ],
      "specifications": {
        "Input Voltage": "6V-60V",
        "Output Current": "Up to 1A",
        "Current Accuracy": "±3%",
        "Switching Frequency": "1MHz",
        "Efficiency": "Up to 95%",
        "Dimming Range": "1%-100%",
        "Temperature Range": "-40°C to +125°C",
        "Package": "ESOP-8"
      },
      "features": [
        "AEC-Q100 qualified",
        "Wide input voltage 6V-60V",
        "High efficiency up to 95%",
        "PWM dimming control",
        "Thermal foldback protection",
        "LED fault detection"
      ],
      "applications": [
        "Interior lighting",
        "Exterior lighting",
        "Dashboard backlight",
        "Daytime running lights",
        "Turn signal lights"
      ],
      "faeReview": {
        "author": "James Zhang",
        "title": "Principal FAE - Lighting Applications",
        "content": "The KF6020 is an excellent LED driver for automotive lighting applications. The wide 6V-60V input range handles both 12V and 24V automotive systems with margin for load dump conditions. In my experience with automotive lighting designs, the 1MHz switching frequency allows for compact inductor selection while maintaining good efficiency. The PWM dimming interface integrates easily with vehicle lighting controllers. I particularly appreciate the thermal foldback feature which protects the LEDs and driver during thermal stress. The fault detection capabilities simplify system diagnostics. For automotive lighting requiring high reliability, this driver provides excellent performance.",
        "highlight": "High-efficiency LED driver with wide input range for automotive lighting"
      },
      "alternativeParts": [
        {
          "partNumber": "KF6030",
          "brand": "ChipON",
          "specifications": {
            "inputVoltage": "6V-60V",
            "outputCurrent": "2A",
            "switchingFrequency": "1MHz",
            "temperature": "-40°C to +125°C"
          },
          "comparison": {
            "inputVoltage": "6V-60V = 6V-60V (same)",
            "outputCurrent": "2A > 1A (+100% higher current)",
            "switchingFrequency": "1MHz = 1MHz (same)",
            "temperature": "-40°C to +125°C = -40°C to +125°C (same)",
            "package": "ESOP-8 = ESOP-8 (same)"
          },
          "reason": "Higher current capability for high-power LED applications",
          "useCase": "High-power exterior lighting applications",
          "link": "#"
        },
        {
          "partNumber": "AL8860",
          "brand": "Diodes Inc",
          "specifications": {
            "inputVoltage": "4.5V-40V",
            "outputCurrent": "1A",
            "switchingFrequency": "1MHz",
            "temperature": "-40°C to +125°C"
          },
          "comparison": {
            "inputVoltage": "4.5V-40V < 6V-60V (narrower range)",
            "outputCurrent": "1A = 1A (same)",
            "switchingFrequency": "1MHz = 1MHz (same)",
            "temperature": "-40°C to +125°C = -40°C to +125°C (same)",
            "price": "Competitive pricing"
          },
          "reason": "Alternative with similar performance for cost-sensitive applications",
          "useCase": "Standard automotive LED lighting applications",
          "link": "#"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Inductor 22uH",
          "link": "#",
          "description": "Power inductor for buck converter",
          "category": "Magnetics"
        },
        {
          "partNumber": "Schottky Diode",
          "link": "#",
          "description": "Freewheeling diode for switching circuit",
          "category": "Power Devices"
        },
        {
          "partNumber": "LED String",
          "link": "#",
          "description": "High-brightness LEDs for automotive lighting",
          "category": "Optoelectronics"
        }
      ],
      "faqs": [
        {
          "question": "What is the maximum LED string voltage for KF6020?",
          "answer": "The maximum LED string voltage is approximately 0.9 × Vin (accounting for driver headroom). With 60V maximum input, the LED string can be up to approximately 54V. This supports long LED strings for high-power applications. For example, with 3V per LED, up to 18 LEDs can be driven in series. Higher input voltages allow longer LED strings, reducing current requirements and wiring losses. Always verify actual LED forward voltage at operating current.",
          "decisionGuide": "Calculate LED string voltage based on your LED configuration. Contact LiTong for LED driver design support.",
          "keywords": ["LED string voltage", "maximum output", "LED configuration"]
        },
        {
          "question": "How does the PWM dimming work on KF6020?",
          "answer": "The KF6020 PWM dimming input accepts logic-level PWM signals (typically 3.3V or 5V) to control LED brightness. The PWM frequency can range from 100Hz to 20kHz, with duty cycle determining brightness (0% = off, 100% = full brightness). The driver maintains constant current during the on-time, ensuring consistent LED color temperature. For flicker-free operation, use PWM frequencies above 100Hz. The dimming range is typically 1% to 100%, with some devices supporting extended range down to 0.1%.",
          "decisionGuide": "Use PWM frequencies above 100Hz to avoid visible flicker. Contact LiTong for dimming circuit design.",
          "keywords": ["PWM dimming", "brightness control", "flicker-free"]
        },
        {
          "question": "What is the efficiency of KF6020 at different loads?",
          "answer": "The KF6020 achieves peak efficiency of 95% at moderate to high loads (50-100% of rated current). Efficiency depends on input voltage, output voltage, and load current. At light loads (<20%), efficiency drops due to quiescent current and switching losses. At very high loads, conduction losses in the MOSFET and inductor reduce efficiency. For optimal efficiency, operate in the 50-80% load range. The 1MHz switching frequency provides good balance between efficiency and component size.",
          "decisionGuide": "Design for 50-80% load range for optimal efficiency. Contact LiTong for efficiency optimization.",
          "keywords": ["efficiency", "load range", "switching losses"]
        },
        {
          "question": "How do I design the inductor for KF6020?",
          "answer": "Inductor selection for KF6020 involves calculating inductance based on input voltage, output voltage, and ripple current. Typical inductance is 10-47μH depending on operating conditions. Key considerations: 1) Inductance value - higher reduces ripple but increases size, 2) Current rating - must exceed peak inductor current, 3) DCR - lower reduces conduction losses, 4) Core material - ferrite for high frequency. Use shielded inductors for EMI-sensitive applications. ChipON provides reference designs with recommended inductor specifications.",
          "decisionGuide": "Use reference design inductor values or contact LiTong for custom inductor selection.",
          "keywords": ["inductor design", "inductance", "ripple current"]
        },
        {
          "question": "What thermal management is required for KF6020?",
          "answer": "The KF6020 thermal management depends on power dissipation and ambient temperature. Power dissipation is approximately P = Vout × Iout × (1 - Efficiency). With 95% efficiency, dissipation is 5% of output power. The ESOP-8 package has exposed pad for heat dissipation. Recommendations: connect exposed pad to large copper area, use thermal vias to inner layers, and maintain adequate spacing from heat-sensitive components. For high-power applications, verify junction temperature stays below 125°C under worst-case conditions.",
          "decisionGuide": "Calculate thermal performance for your operating conditions. Contact LiTong for thermal design support.",
          "keywords": ["thermal management", "power dissipation", "heat sinking"]
        }
      ]
    }
  ]
};

products.categories.push(powerManagementCategory);

// Save updated file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Added Power Management ICs category');
console.log(`📊 Total categories: ${products.categories.length}`);
