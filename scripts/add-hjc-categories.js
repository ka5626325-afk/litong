const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hjc');
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Aluminum Electrolytic Capacitors Category
const electrolyticCategory = {
  "id": "aluminum-electrolytic",
  "name": "Aluminum Electrolytic Capacitors",
  "slug": "aluminum-electrolytic",
  "description": "HJC Aluminum Electrolytic Capacitors provide high capacitance values and high voltage ratings for power supply filtering, energy storage, and coupling applications.",
  "longDescription": "HJC Aluminum Electrolytic Capacitors are manufactured using high-purity aluminum foil and advanced electrolyte formulations, offering excellent capacitance density and reliability. Available in radial lead, SMD, and snap-in configurations, HJC electrolytic capacitors serve applications from consumer electronics to industrial power systems. The product range covers capacitance values from 0.1µF to 100,000µF, with voltage ratings from 6.3V to 550V. Long-life series offer up to 15,000 hours at 105°C, while high-temperature series operate to 150°C. As an authorized HJC distributor, we provide technical support and selection guidance for aluminum electrolytic capacitor applications.",
  "series": [
    "Standard - General purpose",
    "Long Life - 105°C 8000-15000hrs",
    "High Temp - 125°C to 150°C",
    "Low ESR - For switching power supplies"
  ],
  "parameters": [
    "Capacitance",
    "Voltage Rating",
    "Temperature Rating",
    "Lifetime",
    "ESR",
    "Ripple Current"
  ],
  "applications": [
    "Power Supply Filtering",
    "Motor Drives",
    "LED Drivers",
    "Industrial Inverters",
    "Audio Equipment",
    "Automotive Electronics"
  ],
  "selectionGuide": {
    "title": "Aluminum Electrolytic Capacitor Selection Guide",
    "description": "Learn how to select the right aluminum electrolytic capacitor for your application",
    "articleId": "electrolytic-capacitor-selection-guide",
    "articleLink": "/hjc/support/electrolytic-capacitor-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/hjc/support/electrolytic-capacitor-selection-guide.html",
    "text": "Electrolytic Capacitor Selection Guide"
  },
  "faqs": [
    {
      "question": "What is the typical lifetime of HJC aluminum electrolytic capacitors?",
      "answer": "HJC aluminum electrolytic capacitor lifetime varies by series: 1) Standard Series - 2,000 hours at 85°C, suitable for consumer electronics, 2) Long-Life Series - 8,000 to 15,000 hours at 105°C for industrial applications, 3) High-Temperature Series - 2,000 to 5,000 hours at 125°C or 150°C for harsh environments. Lifetime follows the Arrhenius equation - approximately doubling for every 10°C decrease in temperature. For example, a capacitor rated for 10,000 hours at 105°C will achieve approximately 20,000 hours at 95°C and 40,000 hours at 85°C. Proper voltage derating (typically 80% of rated voltage) and thermal management can significantly extend actual operating lifetime.",
      "decisionGuide": "Select long-life or high-temperature series for industrial and automotive applications; standard series is sufficient for consumer products.",
      "keywords": ["HJC electrolytic lifetime", "aluminum capacitor life expectancy", "capacitor hours rating"]
    },
    {
      "question": "How do I calculate the expected lifetime in my application?",
      "answer": "To calculate expected lifetime of HJC aluminum electrolytic capacitors: 1) Base Lifetime - Use the rated lifetime from the datasheet (e.g., 10,000 hours at 105°C), 2) Temperature Factor - Apply the Arrhenius relationship: Lifetime = Rated Lifetime × 2^((Rated Temp - Actual Temp)/10), 3) Voltage Factor - Apply voltage derating factor: typically 1.0 at 80% derating, 0.8 at 100% voltage, 4) Ripple Current - Self-heating from ripple current reduces lifetime; calculate hot spot temperature. Example: A 10,000 hour/105°C capacitor operating at 75°C with 80% voltage derating: Lifetime = 10,000 × 2^((105-75)/10) = 10,000 × 2^3 = 80,000 hours. Use HJC's online lifetime calculator or contact our FAE team for detailed analysis.",
      "decisionGuide": "Use the lifetime calculation formula or contact our FAE team for application-specific lifetime estimation.",
      "keywords": ["electrolytic capacitor lifetime calculation", "capacitor life formula", "HJC capacitor calculator"]
    },
    {
      "question": "What is the difference between radial, SMD, and snap-in electrolytic capacitors?",
      "answer": "HJC aluminum electrolytic capacitors come in three main package types: 1) Radial Lead - Leads exit from one end, through-hole mounting, most common for general purpose, available in diameters 4mm to 18mm, 2) SMD (Surface Mount) - Flat base for surface mounting, compact designs for automated assembly, limited to smaller sizes (up to 10mm diameter typically), 3) Snap-In - Large can type with snap-in terminals for PCB mounting, high capacitance values (1000µF to 100,000µF), used in power supplies and inverters. Selection depends on: mounting method (through-hole vs SMD), capacitance requirements (higher capacitance needs larger cases), available PCB space, and manufacturing process (automated vs manual assembly).",
      "decisionGuide": "Use radial for general purpose, SMD for compact automated designs, snap-in for high-capacitance power applications.",
      "keywords": ["radial vs SMD capacitor", "snap-in electrolytic", "electrolytic capacitor types"]
    },
    {
      "question": "How much should I derate the voltage on aluminum electrolytic capacitors?",
      "answer": "HJC recommends voltage derating for aluminum electrolytic capacitors: 1) General Rule - Operate at 80% of rated voltage or less (20% derating), 2) High-Reliability Applications - Use 50-70% derating for maximum lifetime, 3) Automotive - Typically 80% derating per industry best practices, 4) High-Temperature - Increase derating to 60-70% at temperatures above 85°C. Benefits of derating: 1) Extended lifetime (up to 2x at 80% vs 100% voltage), 2) Reduced leakage current, 3) Improved reliability, 4) Lower ESR over life. Example: For a 24V application, use a 35V or 50V rated capacitor rather than 25V. The small cost increase is offset by significantly improved reliability and longer service life.",
      "decisionGuide": "Use 80% voltage derating as standard practice; increase to 50-60% for high-reliability or high-temperature applications.",
      "keywords": ["capacitor voltage derating", "electrolytic derating guide", "HJC capacitor voltage rating"]
    },
    {
      "question": "What causes aluminum electrolytic capacitors to fail?",
      "answer": "Common failure modes of aluminum electrolytic capacitors: 1) Electrolyte Evaporation - Gradual loss of electrolyte over time, accelerated by high temperature, causes capacitance decrease and ESR increase, 2) Overvoltage - Voltage spikes exceeding rating cause oxide layer damage and short circuits, 3) Reverse Voltage - Even brief reverse voltage damages the oxide layer, 4) Excessive Ripple Current - Causes self-heating, accelerating electrolyte loss, 5) Mechanical Stress - Vibration or shock can damage internal connections. Warning signs: 1) Capacitance drop >20% from initial value, 2) ESR increase >2x from initial value, 3) Visible bulging of case or vent opening, 4) Leakage of electrolyte. Proper derating and thermal management can prevent most failures.",
      "decisionGuide": "Follow HJC's derating guidelines and ensure adequate cooling to maximize capacitor lifetime and prevent failures.",
      "keywords": ["electrolytic capacitor failure", "capacitor end of life", "aluminum capacitor problems"]
    }
  ],
  "products": [
    {
      "partNumber": "HJC-ELKO-1000uF-25V",
      "name": "Aluminum Electrolytic Capacitor 1000µF 25V",
      "shortDescription": "HJC 1000µF 25V radial aluminum electrolytic capacitor, 105°C 8000-hour lifetime, ideal for power supply filtering.",
      "descriptionParagraphs": [
        "The HJC-ELKO-1000uF-25V is a high-reliability aluminum electrolytic capacitor featuring 1000µF capacitance and 25V voltage rating.",
        "With 8000-hour lifetime at 105°C, this capacitor is suitable for industrial power supplies, LED drivers, and consumer electronics.",
        "The radial lead configuration and 10mm diameter package provide easy through-hole mounting and excellent heat dissipation."
      ],
      "specifications": {
        "Capacitance": "1000µF",
        "Voltage Rating": "25V DC",
        "Tolerance": "±20%",
        "Temperature Range": "-40°C to +105°C",
        "Lifetime": "8000 hours @ 105°C",
        "ESR": "0.15Ω @ 100Hz, 20°C",
        "Ripple Current": "1.2A RMS @ 100kHz, 105°C",
        "Leakage Current": "0.01CV or 3µA, whichever is greater",
        "Size": "10mm diameter × 16mm height",
        "Termination": "Radial leads, 5mm pitch"
      },
      "features": [
        "High capacitance (1000µF) in compact package",
        "Long lifetime: 8000 hours at 105°C",
        "Low ESR for reduced power loss",
        "High ripple current capability",
        "RoHS compliant and lead-free",
        "AEC-Q200 qualified version available"
      ],
      "applications": [
        "Switching power supply input/output filtering",
        "LED driver bulk capacitance",
        "Audio amplifier power supplies",
        "Industrial control systems",
        "Automotive electronics",
        "Appliance power supplies"
      ],
      "faeReview": {
        "author": "Michael Zhang",
        "title": "Senior FAE - Power Electronics",
        "content": "The HJC-ELKO-1000uF-25V is my standard recommendation for 12V power supply filtering applications. In my experience supporting power supply designs for over 10 years, this capacitor offers excellent reliability at a competitive price point. The 8000-hour lifetime at 105°C is impressive for this capacitance/voltage class - many competitors only offer 2000-5000 hours. I particularly like the low ESR (0.15Ω) which helps minimize output ripple in switching converters. For 24V systems, I recommend using the 35V or 50V version for better derating. The 10x16mm size is a standard footprint, making it easy to find alternatives if needed. I've used this part in hundreds of LED driver designs with excellent field reliability.",
        "highlight": "Reliable long-life electrolytic capacitor for power supply applications"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-ELKO-1000uF-35V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "1000µF",
            "voltage": "35V",
            "lifetime": "8000 hours @ 105°C"
          },
          "comparison": {
            "capacitance": "1000µF = 1000µF (same)",
            "voltage": "35V > 25V (+40%)",
            "size": "10mm × 20mm (slightly taller)",
            "lifetime": "8000 hours = 8000 hours (same)",
            "price": "~10% higher"
          },
          "reason": "Higher voltage rating for 24V systems or better derating on 12V systems",
          "useCase": "24V power supplies, high-reliability 12V applications",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-1000uf-35v.html"
        },
        {
          "partNumber": "HJC-ELKO-2200uF-25V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "2200µF",
            "voltage": "25V",
            "lifetime": "8000 hours @ 105°C"
          },
          "comparison": {
            "capacitance": "2200µF > 1000µF (+120%)",
            "voltage": "25V = 25V (same)",
            "size": "12.5mm × 20mm (larger)",
            "esr": "Lower ESR (0.10Ω typical)",
            "price": "~30% higher"
          },
          "reason": "Higher capacitance for lower ripple voltage or higher current applications",
          "useCase": "High-power LED drivers, motor drive power supplies",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-2200uf-25v.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-ELKO-100uF-25V",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-100uf-25v.html",
          "description": "100µF for input filtering or secondary outputs",
          "category": "Aluminum Electrolytic"
        },
        {
          "partNumber": "HJC-ELKO-470uF-25V",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-470uf-25v.html",
          "description": "470µF for multi-stage filtering",
          "category": "Aluminum Electrolytic"
        },
        {
          "partNumber": "HJC-0805-25V-104K-X7R",
          "link": "/hjc/products/mlcc/hjc-0805-25v-104k-x7r.html",
          "description": "100nF MLCC for high-frequency decoupling",
          "category": "MLCC"
        },
        {
          "partNumber": "Bridge Rectifier 2A",
          "link": "#",
          "description": "Input rectifier for AC-DC power supply",
          "category": "Power Semiconductors"
        },
        {
          "partNumber": "HJC-ELKO-1000uF-25V",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-1000uf-25v.html",
          "description": "Parallel for higher capacitance or redundancy",
          "category": "Aluminum Electrolytic"
        }
      ],
      "applicationScenarios": [
        {
          "title": "12V Switching Power Supply Output",
          "description": "Output filtering capacitor for 12V 3A switching power supply"
        },
        {
          "title": "LED Driver Bulk Capacitor",
          "description": "Bulk capacitance for 50W LED driver with PFC front end"
        },
        {
          "title": "Audio Amplifier Power Supply",
          "description": "Filtering capacitor for Class D audio amplifier power supply"
        }
      ],
      "keywords": [
        "HJC 1000uF 25V",
        "aluminum electrolytic capacitor",
        "HJC capacitor distributor"
      ],
      "faqs": [
        {
          "question": "What is the expected lifetime at different operating temperatures?",
          "answer": "The HJC-ELKO-1000uF-25V is rated for 8000 hours at 105°C. Using the Arrhenius relationship, expected lifetime at other temperatures: 1) At 85°C: approximately 32,000 hours (4x the 105°C rating), 2) At 65°C: approximately 128,000 hours (16x the rating), 3) At 45°C: approximately 512,000 hours (64x the rating). This demonstrates the significant impact of temperature on capacitor lifetime. For every 10°C decrease in operating temperature, lifetime approximately doubles. Proper thermal design including adequate spacing for air circulation and avoiding heat sources can significantly extend capacitor life. For 24/7 operation, keeping the capacitor below 65°C can provide 15+ years of service life.",
          "decisionGuide": "Design for capacitor temperatures below 65°C to achieve 15+ year lifetime; use the Arrhenius formula for specific temperature predictions.",
          "keywords": ["HJC capacitor lifetime", "electrolytic capacitor temperature", "capacitor life calculation"]
        },
        {
          "question": "What is the maximum ripple current this capacitor can handle?",
          "answer": "The HJC-ELKO-1000uF-25V has a rated ripple current of 1.2A RMS at 100kHz and 105°C ambient. The ripple current rating is frequency-dependent - higher frequencies generally allow higher ripple current due to reduced ESR impact. At 120Hz (line frequency), the rating is approximately 0.8A RMS. Ripple current causes self-heating - the capacitor temperature rise should not exceed 5-10°C above ambient. For applications with high ripple current: 1) Use multiple capacitors in parallel to share current, 2) Ensure adequate PCB copper area for heat dissipation, 3) Consider forced air cooling for extreme cases, 4) Select low-ESR series for high-frequency applications. Exceeding the ripple current rating accelerates electrolyte evaporation and reduces lifetime.",
          "decisionGuide": "For ripple currents above 1A, use parallel capacitors or select larger capacitance values with higher ripple ratings.",
          "keywords": ["HJC ripple current", "electrolytic capacitor ESR", "capacitor heating"]
        },
        {
          "question": "How should I mount this radial electrolytic capacitor?",
          "answer": "Mounting guidelines for HJC-ELKO-1000uF-25V: 1) PCB Hole Size - Use 1.0-1.2mm diameter holes for 0.6mm diameter leads, 2) Lead Spacing - 5.0mm pitch (standard), ensure holes are aligned, 3) Mounting Orientation - Polarized capacitor: negative lead marked with stripe on case, positive lead is longer, 4) Clearance - Maintain at least 2mm clearance from other components for heat dissipation, 5) Height Clearance - Allow 16mm height plus bend radius if leads are formed, 6) Soldering - Wave or hand soldering: 260°C max for 5 seconds; avoid excessive heat. Important: Never apply reverse voltage, even briefly. For high-vibration applications, use adhesive or mechanical support to prevent lead stress.",
          "decisionGuide": "Follow standard radial component mounting practices; ensure correct polarity and adequate clearance for heat dissipation.",
          "keywords": ["radial capacitor mounting", "electrolytic capacitor installation", "HJC capacitor PCB layout"]
        },
        {
          "question": "Can I use this capacitor for AC applications?",
          "answer": "The HJC-ELKO-1000uF-25V is a polarized DC capacitor and should NOT be used for direct AC applications. The aluminum oxide dielectric layer is formed for DC operation and will be damaged by reverse voltage. For AC applications: 1) Use non-polarized (bipolar) electrolytic capacitors specifically designed for AC, 2) For audio signals, use bipolar electrolytics or film capacitors, 3) For AC line filtering, use X-class or Y-class safety-rated capacitors. However, this capacitor CAN be used in AC-DC power supplies: 1) After rectification (pulsating DC is acceptable), 2) In DC output filtering, 3) For DC blocking with DC bias applied. Always ensure the voltage across the capacitor never goes negative, even for microseconds.",
          "decisionGuide": "Use only for DC applications or pulsating DC after rectification; use bipolar electrolytics for pure AC signals.",
          "keywords": ["polarized capacitor AC", "electrolytic capacitor polarity", "bipolar capacitor"]
        },
        {
          "question": "What is the shelf life and storage requirements?",
          "answer": "The HJC-ELKO-1000uF-25V has a shelf life of 3 years when stored unpowered at temperatures below 35°C. Storage recommendations: 1) Temperature - Store at 5°C to 35°C, avoid freezing or high heat, 2) Humidity - Less than 75% relative humidity to prevent corrosion, 3) Packaging - Keep in original sealed packaging until use, 4) Orientation - Store upright to prevent electrolyte migration, 5) Reforming - After long storage (>1 year), apply rated voltage through a 1kΩ resistor for 30 minutes before use. The aluminum oxide layer naturally degrades over time without voltage; reforming rebuilds this layer. Capacitors stored beyond 3 years should be tested for capacitance and ESR before use.",
          "decisionGuide": "Store in original packaging at room temperature; reform capacitors after extended storage before use.",
          "keywords": ["capacitor shelf life", "electrolytic storage", "capacitor reforming"]
        },
        {
          "question": "How do I test if this capacitor is still good?",
          "answer": "To test HJC-ELKO-1000uF-25V capacitor condition: 1) Visual Inspection - Check for bulging, vent opening, or electrolyte leakage, 2) Capacitance Measurement - Should be within ±20% of rated 1000µF (800-1200µF), 3) ESR Measurement - Should be less than 0.3Ω at 100Hz (new capacitors are ~0.15Ω), 4) Leakage Current - Apply 25V through 1kΩ resistor; current should drop below 100µA after 5 minutes, 5) Ripple Voltage Test - Measure under actual operating conditions. Failure criteria: Capacitance <80% of rated, ESR >2x initial value, visible damage, or high leakage. Use an LCR meter or dedicated capacitor tester for accurate measurements. In-circuit testing may give inaccurate results due to parallel components.",
          "decisionGuide": "Replace capacitor if capacitance is below 800µF, ESR exceeds 0.3Ω, or any physical damage is visible.",
          "keywords": ["capacitor testing", "electrolytic capacitor ESR", "capacitor failure criteria"]
        }
      ]
    },
    {
      "partNumber": "HJC-ELKO-470uF-450V",
      "name": "Aluminum Electrolytic Capacitor 470µF 450V",
      "shortDescription": "HJC 470µF 450V snap-in aluminum electrolytic capacitor, 105°C 10000-hour lifetime, for industrial power supplies and inverters.",
      "descriptionParagraphs": [
        "The HJC-ELKO-470uF-450V is a high-voltage snap-in aluminum electrolytic capacitor designed for industrial power applications.",
        "With 470µF capacitance and 450V rating, this capacitor is ideal for PFC output, DC-link, and high-voltage power supply filtering.",
        "The snap-in terminals and 35mm diameter package provide secure mounting and excellent thermal performance."
      ],
      "specifications": {
        "Capacitance": "470µF",
        "Voltage Rating": "450V DC",
        "Tolerance": "±20%",
        "Temperature Range": "-25°C to +105°C",
        "Lifetime": "10000 hours @ 105°C",
        "ESR": "0.25Ω @ 100Hz, 20°C",
        "Ripple Current": "3.5A RMS @ 100Hz, 105°C",
        "Leakage Current": "0.02CV or 3mA, whichever is smaller",
        "Size": "35mm diameter × 50mm height",
        "Termination": "Snap-in terminals, PCB mount"
      },
      "features": [
        "High voltage rating (450V) for industrial applications",
        "High capacitance (470µF) for energy storage",
        "Long lifetime: 10000 hours at 105°C",
        "High ripple current capability (3.5A)",
        "Snap-in mounting for secure PCB attachment",
        "RoHS compliant"
      ],
      "applications": [
        "PFC output capacitors",
        "DC-link capacitors for inverters",
        "High-voltage power supplies",
        "Motor drive DC bus",
        "Welding equipment",
        "Medical power supplies"
      ],
      "faeReview": {
        "author": "Michael Zhang",
        "title": "Senior FAE - Power Electronics",
        "content": "The HJC-ELKO-470uF-450V is an excellent choice for PFC and DC-link applications in industrial power systems. I've specified this capacitor for numerous 380V AC input power supplies with excellent results. The 450V rating provides good margin for 380V systems (rectified DC ~540V, using two in series). The 10000-hour lifetime is impressive for this voltage class. The snap-in terminals provide secure mounting that withstands vibration better than screw terminals in my experience. For higher power applications, I typically use two or three in parallel to handle higher ripple currents. The 35mm diameter is a standard size, making it easy to find alternatives if needed. HJC's quality consistency has been excellent - we rarely see field failures with their snap-in series.",
        "highlight": "High-voltage snap-in capacitor for industrial PFC and DC-link applications"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-ELKO-680uF-450V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "680µF",
            "voltage": "450V",
            "lifetime": "10000 hours @ 105°C"
          },
          "comparison": {
            "capacitance": "680µF > 470µF (+45%)",
            "voltage": "450V = 450V (same)",
            "size": "35mm × 60mm (taller)",
            "rippleCurrent": "4.2A > 3.5A (+20%)",
            "price": "~25% higher"
          },
          "reason": "Higher capacitance for lower ripple voltage or higher power applications",
          "useCase": "High-power inverters, large motor drives",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-680uf-450v.html"
        },
        {
          "partNumber": "HJC-ELKO-330uF-500V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "330µF",
            "voltage": "500V",
            "lifetime": "10000 hours @ 105°C"
          },
          "comparison": {
            "capacitance": "330µF < 470µF (-30%)",
            "voltage": "500V > 450V (+11%)",
            "size": "35mm × 50mm (same height)",
            "rippleCurrent": "3.2A < 3.5A (slightly lower)",
            "price": "~15% higher"
          },
          "reason": "Higher voltage rating for 480V AC systems or better derating margin",
          "useCase": "480V industrial systems, high-reliability 380V applications",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-330uf-500v.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-ELKO-470uF-450V",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-470uf-450v.html",
          "description": "Parallel for higher capacitance or series for higher voltage",
          "category": "Aluminum Electrolytic"
        },
        {
          "partNumber": "HJC-FILM-10uF-450V",
          "link": "/hjc/products/film-capacitors/hjc-film-10uf-450v.html",
          "description": "Film capacitor for high-frequency filtering in parallel",
          "category": "Film Capacitors"
        },
        {
          "partNumber": "Bleeder Resistor 100k",
          "link": "#",
          "description": "Safety bleeder resistor for DC bus discharge",
          "category": "Resistors"
        },
        {
          "partNumber": "IGBT Module 600V",
          "link": "#",
          "description": "Power switch for inverter applications",
          "category": "Power Semiconductors"
        },
        {
          "partNumber": "PFC Controller IC",
          "link": "#",
          "description": "Power factor correction controller",
          "category": "ICs"
        }
      ],
      "applicationScenarios": [
        {
          "title": "380V AC PFC Output",
          "description": "Output capacitor for 3kW power factor correction circuit"
        },
        {
          "title": "Motor Drive DC Link",
          "description": "DC bus capacitor for 5.5kW variable frequency drive"
        },
        {
          "title": "High-Voltage Power Supply",
          "description": "Filtering capacitor for 400V 10A industrial power supply"
        }
      ],
      "keywords": [
        "HJC 470uF 450V",
        "snap-in electrolytic capacitor",
        "high voltage capacitor distributor"
      ],
      "faqs": [
        {
          "question": "Can I use two capacitors in series for higher voltage?",
          "answer": "Yes, two HJC-ELKO-470uF-450V capacitors can be connected in series for 900V applications. Important considerations: 1) Voltage Balancing - Use balancing resistors (100kΩ-470kΩ) across each capacitor to ensure equal voltage distribution, 2) Capacitance - Total capacitance is halved (235µF for two 470µF in series), 3) ESR - Total ESR is doubled, 4) Ripple Current - Total ripple current capability is reduced. For a 680V DC bus (typical for 480V AC input), two 450V capacitors in series provide good margin. The balancing resistors should be sized to pass at least 10x the capacitor leakage current. Always ensure both capacitors are from the same lot for best matching. This configuration is commonly used in 480V motor drives and high-voltage power supplies.",
          "decisionGuide": "Use series connection with balancing resistors for voltages above 450V; ensure capacitors are matched from same lot.",
          "keywords": ["capacitor series connection", "high voltage capacitor bank", "electrolytic series voltage"]
        },
        {
          "question": "What is the discharge safety requirement for this high-voltage capacitor?",
          "answer": "The HJC-ELKO-470uF-450V stores significant energy (approximately 50 joules at 450V) and requires safety precautions: 1) Bleeder Resistors - Install permanently connected bleeder resistors (typically 100kΩ-1MΩ) to discharge the capacitor to safe voltage (<50V) within 1 minute of power-off, 2) Power Indicator - Use a neon lamp or LED with series resistor across capacitor as visual discharge indicator, 3) Discharge Tool - Technicians should use a discharge stick with power resistor for servicing, 4) Warning Labels - Mark high-voltage hazards on enclosure. Energy calculation: E = 0.5 × C × V² = 0.5 × 470µF × 450² ≈ 47.5J. This energy can cause severe electric shock or arc flash. Always verify voltage with a meter before servicing equipment.",
          "decisionGuide": "Install bleeder resistors for automatic discharge; always verify zero voltage with meter before servicing.",
          "keywords": ["capacitor discharge", "high voltage safety", "bleeder resistor calculation"]
        },
        {
          "question": "How do I calculate the required number of capacitors for my DC link?",
          "answer": "To calculate required HJC-ELKO-470uF-450V capacitors for DC link: 1) Capacitance Requirement - C = P / (2 × π × f × V × ΔV), where P is power, f is line frequency, V is DC voltage, ΔV is allowable ripple. Example: 5kW, 50Hz, 540V DC, 5% ripple (27V): C = 5000 / (2 × 3.14 × 50 × 540 × 27) ≈ 1090µF. Use three 470µF capacitors (1410µF total) for margin. 2) Ripple Current - Check total ripple current against capacitor rating; parallel capacitors share current. 3) Voltage Rating - Use series connection if DC voltage exceeds 450V. 4) Lifetime - Calculate expected lifetime based on operating temperature. For most 380V AC input drives, 2-4 capacitors in parallel provide adequate capacitance and ripple capability.",
          "decisionGuide": "Calculate based on power and allowable ripple; use multiple parallel capacitors for high-power applications.",
          "keywords": ["DC link capacitor sizing", "inverter capacitor calculation", "motor drive capacitor selection"]
        },
        {
          "question": "What mounting orientation is required for this snap-in capacitor?",
          "answer": "The HJC-ELKO-470uF-450V snap-in capacitor should be mounted vertically (terminals down) for optimal performance: 1) Vertical Mounting - Preferred orientation with terminals facing PCB; ensures proper electrolyte distribution, 2) Horizontal Mounting - Acceptable if necessary, but may reduce lifetime by 10-20% due to uneven electrolyte distribution, 3) Terminals - Snap into 5mm diameter holes on 10mm pitch; ensure secure fit, 4) Support - For high-vibration applications, use additional mechanical clamp or adhesive, 5) Clearance - Maintain 10mm minimum clearance from other heat-generating components, 6) Vent - Top of capacitor has pressure relief vent; do not obstruct. The 35mm diameter requires adequate PCB space and mechanical stability. Use appropriate hole sizes and ensure good solder joint quality for reliable mounting.",
          "decisionGuide": "Mount vertically with terminals down for best lifetime; ensure secure snap-in fit and adequate clearance.",
          "keywords": ["snap-in capacitor mounting", "electrolytic orientation", "capacitor PCB mounting"]
        },
        {
          "question": "How does temperature affect the capacitance and ESR?",
          "answer": "Temperature significantly affects HJC-ELKO-470uF-450V performance: 1) Capacitance - At -25°C (low limit), capacitance is approximately 80% of rated value; at +105°C, capacitance increases to approximately 110% of rated, 2) ESR - At low temperatures, ESR increases significantly (3-5x at -25°C vs 20°C); at high temperatures, ESR decreases slightly, 3) Leakage Current - Increases exponentially with temperature; doubles approximately every 10°C, 4) Lifetime - Decreases exponentially with temperature following Arrhenius relationship. For cold-start applications, allow time for capacitors to warm up before applying full load. The high ESR at low temperatures can cause excessive voltage drop and heating. For wide-temperature applications, select capacitors with extended temperature range (-40°C or -55°C rated).",
          "decisionGuide": "Consider cold-start ESR increase in design; allow warm-up time for cold ambient operation.",
          "keywords": ["capacitor temperature characteristics", "ESR vs temperature", "electrolytic low temperature"]
        },
        {
          "question": "What is the expected end-of-life criteria for this capacitor?",
          "answer": "The HJC-ELKO-470uF-450V end-of-life is typically defined by: 1) Capacitance Reduction - End of life when capacitance drops below 80% of initial value (376µF for 470µF rated), 2) ESR Increase - End of life when ESR exceeds 2x initial value (0.5Ω if initial was 0.25Ω), 3) Leakage Current - Excessive leakage indicating dielectric degradation. These parameters gradually change over the capacitor's life due to electrolyte evaporation. At end-of-life, the capacitor may still function but with reduced performance: higher ripple voltage, increased heating, and reduced filtering effectiveness. For critical applications, implement preventive maintenance and replace capacitors at 70-80% of expected lifetime. Monitor capacitor temperature and ripple voltage as early indicators of degradation.",
          "decisionGuide": "Replace capacitor when capacitance drops below 376µF or ESR exceeds 0.5Ω; implement preventive replacement for critical systems.",
          "keywords": ["capacitor end of life", "electrolytic degradation", "capacitor replacement criteria"]
        }
      ]
    }
  ]
};

products.categories.push(electrolyticCategory);

// Write updated file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Added Aluminum Electrolytic Capacitors category');
console.log(`✅ Total categories: ${products.categories.length}`);
