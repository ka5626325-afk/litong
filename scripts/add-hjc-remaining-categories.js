const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hjc');
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Film Capacitors Category
const filmCategory = {
  "id": "film-capacitors",
  "name": "Film Capacitors",
  "slug": "film-capacitors",
  "description": "HJC Film Capacitors provide excellent self-healing properties, low losses, and long lifetime for industrial, automotive, and power electronics applications.",
  "longDescription": "HJC Film Capacitors are manufactured using metallized polyester (PET) and polypropylene (PP) film technology, offering self-healing properties and reliable performance. Available in box-type, dipped, and SMD configurations, HJC film capacitors serve applications from motor run capacitors to DC-link filtering in inverters. The product range covers capacitance values from 0.001µF to 100µF, with voltage ratings from 63V to 2000V DC. Polypropylene series offer low losses for high-frequency applications, while polyester series provide cost-effective solutions for general purpose. As an authorized HJC distributor, we provide technical support and selection guidance for film capacitor applications.",
  "series": [
    "CL11 - Polyester dipped",
    "CL21 - Box type polyester",
    "CBB21 - Polypropylene low loss",
    "CBB61 - Motor run capacitors"
  ],
  "parameters": [
    "Capacitance",
    "Voltage Rating",
    "Dielectric Material",
    "Tolerance",
    "Package Type",
    "Temperature Range"
  ],
  "applications": [
    "DC-Link Filtering",
    "Motor Run Capacitors",
    "EMI Suppression",
    "Lighting Ballasts",
    "Power Supplies",
    "Solar Inverters"
  ],
  "selectionGuide": {
    "title": "Film Capacitor Selection Guide",
    "description": "Learn how to select the right film capacitor for your application",
    "articleId": "film-capacitor-selection-guide",
    "articleLink": "/hjc/support/film-capacitor-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/hjc/support/film-capacitor-selection-guide.html",
    "text": "Film Capacitor Selection Guide"
  },
  "faqs": [
    {
      "question": "What is the difference between polyester and polypropylene film capacitors?",
      "answer": "HJC offers both polyester (PET) and polypropylene (PP) film capacitors with different characteristics: 1) Polyester (CL series) - Higher capacitance density, lower cost, good for general purpose applications, temperature range -55°C to +105°C, higher dielectric losses (tan δ ~0.5%), 2) Polypropylene (CBB series) - Lower losses (tan δ ~0.01%), better for high-frequency applications, more stable capacitance over temperature and time, temperature range -55°C to +105°C, higher insulation resistance. Selection guide: Use polyester for cost-sensitive general applications, LED drivers, and coupling; use polypropylene for high-frequency switching, resonant circuits, and precision applications where low loss is critical.",
      "decisionGuide": "Choose polyester for general purpose and cost-sensitive applications; choose polypropylene for high-frequency and low-loss applications.",
      "keywords": ["polyester vs polypropylene capacitor", "PET vs PP film", "CL vs CBB capacitor"]
    },
    {
      "question": "What is self-healing in film capacitors?",
      "answer": "Self-healing is a key feature of HJC metallized film capacitors. When a dielectric defect or overvoltage causes a localized breakdown, the metallized electrode vaporizes around the fault point, isolating the defect and restoring insulation. This process: 1) Occurs in microseconds during voltage transients, 2) Removes only micrograms of metallization, 3) Does not significantly affect capacitance for minor events, 4) Allows the capacitor to continue operating normally. Benefits include: 1) Extended lifetime compared to non-healing types, 2) Graceful degradation rather than catastrophic failure, 3) Tolerance of occasional voltage transients. However, repeated overvoltage events can gradually reduce capacitance. HJC film capacitors typically show <5% capacitance loss over 100,000 hours of operation due to self-healing events.",
      "decisionGuide": "Self-healing provides reliability benefits; monitor capacitance over time to track gradual degradation.",
      "keywords": ["self-healing capacitor", "metallized film capacitor", "capacitor clearing"]
    },
    {
      "question": "How do I select the right voltage rating for film capacitors?",
      "answer": "HJC recommends voltage derating for film capacitors: 1) DC Applications - Operate at 70-80% of rated DC voltage for long life, 2) AC Applications - RMS voltage should not exceed 50-60% of rated DC voltage, 3) Pulse Applications - Peak voltage should not exceed rated DC voltage. Benefits of derating: 1) Reduced self-healing events, 2) Longer lifetime, 3) Lower leakage current, 4) Improved reliability. Example: For 310V DC bus (rectified 220V AC), use 450V or 630V rated capacitors. For 480V AC line filtering, use capacitors rated 1000V DC or higher. Unlike electrolytics, film capacitors do not have a wear-out mechanism from voltage stress, but excessive voltage increases self-healing activity and gradual capacitance loss.",
      "decisionGuide": "Use 70-80% voltage derating for DC, 50-60% for AC; higher derating extends lifetime and reduces self-healing.",
      "keywords": ["film capacitor voltage rating", "capacitor voltage derating", "HJC film capacitor selection"]
    },
    {
      "question": "What are the typical failure modes of film capacitors?",
      "answer": "HJC film capacitors have different failure modes than electrolytics: 1) Capacitance Loss - Gradual reduction due to cumulative self-healing events, typically <5% over lifetime, 2) Insulation Resistance Degradation - Slow decrease over time, especially at high temperature/humidity, 3) Open Circuit - Rare, caused by severe overvoltage or mechanical damage, 4) Short Circuit - Very rare due to self-healing; only occurs with severe sustained overvoltage. Unlike electrolytics, film capacitors: 1) Do not have electrolyte to dry out, 2) Do not have defined end-of-life from wear-out, 3) Can operate for decades with minimal degradation. Warning signs: Capacitance drop >10% from initial value, significant increase in tan δ (dielectric loss), visible case damage or swelling.",
      "decisionGuide": "Film capacitors are highly reliable with no wear-out mechanism; replace if capacitance drops >10% or physical damage is visible.",
      "keywords": ["film capacitor failure", "capacitor lifetime", "self-healing degradation"]
    },
    {
      "question": "Are HJC film capacitors suitable for motor run applications?",
      "answer": "Yes, HJC CBB61 series film capacitors are specifically designed for motor run applications. Features include: 1) AC Voltage Rating - Rated for continuous AC operation (typically 250V, 370V, 450V AC), 2) Self-Healing - Metallized film construction handles voltage transients during motor starting, 3) High Current Capability - Low ESR handles motor running current without excessive heating, 4) Long Life - Expected 30,000-60,000 hours in motor applications, 5) Safety - Some models include internal protection (fuse action) for safety. Applications include: HVAC compressor motors, pump motors, fan motors, and general single-phase motor running. HJC motor run capacitors are available in standard and high-temperature versions. Always match the capacitor voltage rating to motor voltage with adequate margin (typically 1.5x motor voltage).",
      "decisionGuide": "Use CBB61 series for motor run applications; match voltage rating to motor voltage with 1.5x margin.",
      "keywords": ["motor run capacitor", "CBB61 capacitor", "HJC motor capacitor"]
    }
  ],
  "products": [
    {
      "partNumber": "HJC-CBB21-105J-400V",
      "name": "Polypropylene Film Capacitor 1µF 400V",
      "shortDescription": "HJC CBB21 1µF 400V polypropylene film capacitor, box type, low loss, ideal for DC-link and snubber applications.",
      "descriptionParagraphs": [
        "The HJC-CBB21-105J-400V is a metallized polypropylene film capacitor featuring low losses and excellent self-healing properties.",
        "With 1µF capacitance and 400V rating, this capacitor is suitable for DC-link filtering, snubber circuits, and high-frequency applications.",
        "The box-type package with 15mm lead spacing provides easy PCB mounting and good heat dissipation."
      ],
      "specifications": {
        "Capacitance": "1µF",
        "Voltage Rating": "400V DC / 250V AC",
        "Tolerance": "±5% (J)",
        "Dielectric": "Metallized Polypropylene",
        "Temperature Range": "-40°C to +105°C",
        "Dissipation Factor": "≤0.001 @ 1kHz",
        "Insulation Resistance": "≥30,000MΩ",
        "Lead Spacing": "15mm",
        "Dimensions": "18mm x 9mm x 13mm (L x W x H)",
        "Self-Healing": "Yes"
      },
      "features": [
        "Low loss polypropylene dielectric",
        "Self-healing metallized construction",
        "High insulation resistance",
        "Low ESR for high-frequency applications",
        "Box type for easy mounting",
        "RoHS compliant"
      ],
      "applications": [
        "DC-link filtering in inverters",
        "IGBT snubber circuits",
        "High-frequency power supplies",
        "Resonant circuits",
        "EMI suppression",
        "Lighting ballasts"
      ],
      "faeReview": {
        "author": "Lisa Wang",
        "title": "FAE - Power Electronics",
        "content": "The HJC-CBB21-105J-400V is my standard recommendation for DC-link and snubber applications up to a few hundred watts. The polypropylene dielectric provides excellent low-loss characteristics - the dissipation factor of 0.001 is 10x better than polyester alternatives. In my experience with solar inverter designs, this capacitor handles high-frequency ripple current with minimal self-heating. The 400V rating is perfect for 220V AC input systems (rectified to ~310V DC) with good margin. I particularly like the self-healing feature - we've seen these capacitors survive voltage transients that would destroy other types. The 15mm pitch fits standard PCB layouts. For higher power, I parallel multiple units rather than using larger electrolytics - the combination of low ESR and long lifetime makes film capacitors cost-effective over the product life.",
        "highlight": "Low-loss polypropylene film capacitor for DC-link and snubber applications"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-CBB21-225J-400V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "2.2µF",
            "voltage": "400V",
            "dielectric": "Polypropylene"
          },
          "comparison": {
            "capacitance": "2.2µF > 1µF (+120%)",
            "voltage": "400V = 400V (same)",
            "size": "22mm x 11mm x 18mm (larger)",
            "esr": "Similar low ESR",
            "price": "~35% higher"
          },
          "reason": "Higher capacitance for lower ripple voltage or higher current applications",
          "useCase": "Higher power inverters, motor drives",
          "link": "/hjc/products/film-capacitors/hjc-cbb21-225j-400v.html"
        },
        {
          "partNumber": "HJC-CL21-105K-400V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "1µF",
            "voltage": "400V",
            "dielectric": "Polyester"
          },
          "comparison": {
            "capacitance": "1µF = 1µF (same)",
            "voltage": "400V = 400V (same)",
            "dissipationFactor": "~0.005 (5x higher than PP)",
            "size": "Similar size",
            "price": "~20% lower"
          },
          "reason": "Lower cost alternative for applications where higher losses are acceptable",
          "useCase": "General purpose filtering, cost-sensitive applications",
          "link": "/hjc/products/film-capacitors/hjc-cl21-105k-400v.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-CBB21-105J-400V",
          "link": "/hjc/products/film-capacitors/hjc-cbb21-105j-400v.html",
          "description": "Parallel for higher capacitance",
          "category": "Film Capacitors"
        },
        {
          "partNumber": "HJC-CBB21-474J-400V",
          "link": "/hjc/products/film-capacitors/hjc-cbb21-474j-400v.html",
          "description": "0.47µF for high-frequency bypass",
          "category": "Film Capacitors"
        },
        {
          "partNumber": "Snubber Resistor 10Ω",
          "link": "#",
          "description": "For RC snubber circuits",
          "category": "Resistors"
        },
        {
          "partNumber": "IGBT 600V 20A",
          "link": "#",
          "description": "Power switch for inverter applications",
          "category": "Power Semiconductors"
        },
        {
          "partNumber": "HJC-ELKO-100uF-450V",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-100uf-450v.html",
          "description": "Electrolytic for bulk capacitance in parallel",
          "category": "Aluminum Electrolytic"
        }
      ],
      "applicationScenarios": [
        {
          "title": "Solar Inverter DC Link",
          "description": "DC-link capacitor for 1kW single-phase solar inverter"
        },
        {
          "title": "IGBT Snubber Circuit",
          "description": "Snubber capacitor for 600V IGBT module protection"
        },
        {
          "title": "LED Driver Output Filter",
          "description": "Output filtering for high-power LED driver"
        }
      ],
      "keywords": [
        "HJC CBB21 capacitor",
        "polypropylene film capacitor",
        "1uF 400V film capacitor"
      ],
      "faqs": [
        {
          "question": "What is the ESR and ripple current capability of this film capacitor?",
          "answer": "The HJC-CBB21-105J-400V has very low ESR due to its polypropylene construction. Typical ESR is 5-10mΩ at 100kHz, significantly lower than electrolytic capacitors of similar size. The ripple current capability depends on frequency and ambient temperature: at 100kHz and 85°C ambient, approximately 2A RMS; at 10kHz, approximately 1.5A RMS. The low dissipation factor (tan δ ≤0.001) means minimal self-heating from ripple current. For high-ripple applications, the capacitor temperature rise should be kept below 15°C. Multiple capacitors can be paralleled for higher ripple current - two in parallel provide approximately 4A capability at 100kHz. The low ESR makes this capacitor ideal for high-frequency switching applications where ripple voltage must be minimized.",
          "decisionGuide": "Use for high-frequency applications where low ESR is critical; parallel multiple units for very high ripple currents.",
          "keywords": ["film capacitor ESR", "CBB21 ripple current", "polypropylene capacitor losses"]
        },
        {
          "question": "How does this capacitor compare to ceramic and electrolytic for DC-link?",
          "answer": "Compared to ceramic and electrolytic capacitors for DC-link: vs Ceramic MLCC - Film has higher capacitance density at high voltage (1µF/400V in compact package), no DC bias effect, better surge capability, but larger size than equivalent ceramic; vs Electrolytic - Film has much lower ESR (5-10mΩ vs 100-500mΩ), no wear-out mechanism (theoretical infinite life), can handle higher ripple current without heating, but lower capacitance density and higher cost per µF. Best choice when: 1) High ripple current with minimal heating is required, 2) Long lifetime (15+ years) is needed, 3) High-frequency switching (>20kHz) is used, 4) Ambient temperature is high. Many designs use film capacitors in parallel with electrolytics - film handles high-frequency ripple, electrolytic provides bulk capacitance.",
          "decisionGuide": "Use film capacitors when low ESR and long life are priorities; combine with electrolytics for cost-effective high-capacitance solutions.",
          "keywords": ["film vs ceramic capacitor", "film vs electrolytic DC link", "capacitor type comparison"]
        },
        {
          "question": "What is the expected lifetime of this film capacitor?",
          "answer": "The HJC-CBB21-105J-400V has an expected lifetime of 100,000+ hours at rated voltage and 85°C. Film capacitors do not have a wear-out mechanism like electrolytics - their lifetime is limited by gradual degradation rather than sudden failure. Expected degradation: 1) Capacitance - Typically <5% loss over 100,000 hours due to cumulative self-healing, 2) Insulation Resistance - Gradual decrease over time, 3) Dissipation Factor - Minimal change. The actual lifetime depends on operating conditions: 1) Voltage - Operating at 70-80% of rated extends life significantly, 2) Temperature - Every 10°C reduction doubles lifetime, 3) Ripple Current - High ripple causes self-heating and accelerates aging. At 40°C ambient with 70% voltage derating, expected lifetime exceeds 200,000 hours (20+ years). Unlike electrolytics, film capacitors do not require periodic replacement in most applications.",
          "decisionGuide": "Expect 15-20+ year lifetime in typical applications; no scheduled replacement needed like electrolytics.",
          "keywords": ["film capacitor lifetime", "CBB21 life expectancy", "polypropylene capacitor aging"]
        },
        {
          "question": "Can this capacitor be used for AC applications?",
          "answer": "Yes, the HJC-CBB21-105J-400V is rated for AC operation at 250V AC (50/60Hz). For AC applications: 1) Voltage Rating - The 250V AC rating is for continuous sine wave operation; for 220V AC line, this provides good margin, 2) Frequency - Rated for power line frequencies (50/60Hz); for higher frequencies, derate voltage or check with factory, 3) Current - Ensure RMS current does not exceed ripple current rating, 4) Safety - Not safety-rated (X/Y class) for direct line connection; use only in isolated secondary circuits. Common AC applications: motor run capacitors, power factor correction, lighting ballasts, and AC filtering. The self-healing property is particularly valuable in AC applications where voltage transients are common. For direct AC line connection (across line or line-to-ground), use HJC's safety-rated X2 or Y2 capacitors.",
          "decisionGuide": "Suitable for AC up to 250V RMS in isolated circuits; use safety-rated capacitors for direct line connection.",
          "keywords": ["film capacitor AC rating", "CBB21 AC voltage", "AC capacitor application"]
        },
        {
          "question": "How should I mount this box-type film capacitor?",
          "answer": "Mounting guidelines for HJC-CBB21-105J-400V box-type capacitor: 1) Lead Spacing - 15mm pitch; use 1.0-1.2mm diameter holes on 15mm centers, 2) Mounting Orientation - Can be mounted vertically (leads down) or horizontally; vertical preferred for heat dissipation, 3) Clearance - Maintain 5mm minimum clearance from other components, 4) Stress Relief - Avoid mechanical stress on leads; use appropriate hole sizes to prevent lead damage, 5) Soldering - Hand or wave soldering: 260°C max for 3 seconds; avoid excessive heat that could damage the case, 6) Cleaning - Use compatible cleaning solvents; some solvents can attack the plastic case. The box-type case provides good mechanical protection but should not be subjected to excessive force or impact. For high-vibration applications, use additional mechanical support or adhesive to secure the capacitor body.",
          "decisionGuide": "Standard through-hole mounting; ensure 15mm pitch and avoid excessive heat during soldering.",
          "keywords": ["film capacitor mounting", "box capacitor installation", "CBB21 PCB layout"]
        },
        {
          "question": "What is the self-healing characteristic and how does it affect reliability?",
          "answer": "The HJC-CBB21-105J-400V uses metallized film construction with self-healing properties. When a localized dielectric breakdown occurs: 1) The metallization around the fault vaporizes due to high current density, 2) This isolates the defect and restores insulation, 3) The process occurs in microseconds with minimal capacitance loss. Reliability benefits: 1) No Catastrophic Failure - Unlike solid dielectric capacitors, film capacitors heal rather than short circuit, 2) Graceful Degradation - Capacitance decreases gradually over time rather than sudden failure, 3) Transient Tolerance - Can survive occasional voltage spikes without permanent damage. Typical self-healing impact: <1pF capacitance loss per event, <5% total capacitance loss over 100,000 hours. The capacitor continues to function normally after self-healing events. This makes film capacitors exceptionally reliable for applications where occasional voltage transients occur.",
          "decisionGuide": "Self-healing provides inherent reliability; monitor capacitance periodically to track gradual degradation.",
          "keywords": ["metallized film self-healing", "capacitor clearing", "film capacitor reliability"]
        }
      ]
    },
    {
      "partNumber": "HJC-CBB61-20uF-450V",
      "name": "Motor Run Capacitor 20µF 450V AC",
      "shortDescription": "HJC CBB61 20µF 450V AC motor run capacitor, metallized polypropylene, for HVAC and pump motor applications.",
      "descriptionParagraphs": [
        "The HJC-CBB61-20uF-450V is a metallized polypropylene film capacitor specifically designed for single-phase AC motor run applications.",
        "With 20µF capacitance and 450V AC rating, this capacitor is ideal for 1.5-3HP HVAC compressor motors, pump motors, and fan motors.",
        "The self-healing construction and robust case provide long service life in demanding motor applications."
      ],
      "specifications": {
        "Capacitance": "20µF",
        "Voltage Rating": "450V AC (50/60Hz)",
        "Tolerance": "±5%",
        "Dielectric": "Metallized Polypropylene",
        "Temperature Range": "-25°C to +70°C (Class B)",
        "Dissipation Factor": "≤0.002 @ 1kHz",
        "Case": "Metal can with mounting stud",
        "Dimensions": "40mm diameter x 70mm height",
        "Mounting": "M8 stud with terminal block",
        "Safety": "Internal pressure interrupter"
      },
      "features": [
        "AC voltage rated for continuous motor operation",
        "Self-healing metallized construction",
        "Internal safety protection",
        "Low losses for cool operation",
        "M8 stud mounting for secure installation",
        "Long service life: 30,000+ hours"
      ],
      "applications": [
        "HVAC compressor motors",
        "Water pump motors",
        "Fan and blower motors",
        "Refrigeration compressors",
        "Air compressor motors",
        "Conveyor motors"
      ],
      "faeReview": {
        "author": "Robert Liu",
        "title": "FAE - Motor Applications",
        "content": "The HJC-CBB61-20uF-450V is my standard recommendation for 2-3HP motor run applications. I've specified this capacitor for hundreds of HVAC installations with excellent reliability. The 20µF value is ideal for motors in the 1.5-3HP range - always verify against the motor nameplate, but this is the most common value I see. The 450V rating provides excellent margin for 230V motors and adequate margin for 208V systems. The self-healing feature is valuable in motor applications where voltage transients from switching are common. I particularly like the internal pressure interrupter - it provides safety protection if the capacitor fails. The M8 stud makes installation straightforward in equipment cabinets. With proper voltage matching, expect 10-15 year service life in HVAC applications.",
        "highlight": "Reliable motor run capacitor for HVAC and pump applications"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-CBB61-25uF-450V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "25µF",
            "voltage": "450V AC"
          },
          "comparison": {
            "capacitance": "25µF > 20µF (+25%)",
            "voltage": "450V AC = 450V AC (same)",
            "size": "45mm x 75mm (slightly larger)",
            "motorPower": "Suitable for 3-5HP motors",
            "price": "~15% higher"
          },
          "reason": "Higher capacitance for larger motors or applications requiring more running torque",
          "useCase": "3-5HP motors, high-torque applications",
          "link": "/hjc/products/film-capacitors/hjc-cbb61-25uf-450v.html"
        },
        {
          "partNumber": "HJC-CBB61-15uF-450V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "15µF",
            "voltage": "450V AC"
          },
          "comparison": {
            "capacitance": "15µF < 20µF (-25%)",
            "voltage": "450V AC = 450V AC (same)",
            "size": "35mm x 65mm (smaller)",
            "motorPower": "Suitable for 1-2HP motors",
            "price": "~15% lower"
          },
          "reason": "Lower capacitance for smaller motors",
          "useCase": "1-2HP motors, fan motors",
          "link": "/hjc/products/film-capacitors/hjc-cbb61-15uf-450v.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-CBB61-20uF-450V",
          "link": "/hjc/products/film-capacitors/hjc-cbb61-20uf-450v.html",
          "description": "Spare capacitor for maintenance",
          "category": "Film Capacitors"
        },
        {
          "partNumber": "Motor Contactor 30A",
          "link": "#",
          "description": "Contactor for motor control circuit",
          "category": "Motor Control"
        },
        {
          "partNumber": "Overload Relay 15A",
          "link": "#",
          "description": "Thermal overload protection",
          "category": "Motor Protection"
        },
        {
          "partNumber": "M8 Mounting Hardware",
          "link": "#",
          "description": "Mounting nut and washer",
          "category": "Accessories"
        },
        {
          "partNumber": "Terminal Cover",
          "link": "#",
          "description": "Safety cover for terminals",
          "category": "Safety"
        }
      ],
      "applicationScenarios": [
        {
          "title": "2.5HP HVAC Compressor",
          "description": "Running capacitor for residential air conditioning compressor"
        },
        {
          "title": "3HP Water Pump",
          "description": "Motor run capacitor for irrigation pump"
        },
        {
          "title": "Industrial Fan Motor",
          "description": "Running capacitor for ventilation fan"
        }
      ],
      "keywords": [
        "HJC CBB61 capacitor",
        "motor run capacitor 20uF",
        "HVAC capacitor 450V"
      ],
      "faqs": [
        {
          "question": "What size motor is this capacitor suitable for?",
          "answer": "The HJC-CBB61-20uF-450V is typically suitable for 1.5-3HP (1.1-2.2kW) single-phase AC motors. The exact motor size depends on motor design and voltage: 1) 1.5HP motors - 20µF provides excellent running performance, 2) 2HP motors - 20µF is the typical standard value, 3) 3HP motors - 20µF is on the lower side; check motor nameplate (may need 25µF). Always verify against the motor manufacturer's specification on the nameplate - the capacitor value is typically printed there. Using incorrect capacitance can result in reduced torque, overheating, poor efficiency, and shortened motor life. For replacement applications, match the original capacitor value unless the motor has been rewound or modified. The 450V rating is suitable for 208V, 230V, and 240V motor systems.",
          "decisionGuide": "Verify motor nameplate specifications; the 20µF value is ideal for 1.5-3HP motors typically requiring 15-25µF.",
          "keywords": ["motor capacitor sizing", "CBB61 motor size", "20uF capacitor HP rating"]
        },
        {
          "question": "How do I wire this capacitor in a motor circuit?",
          "answer": "To wire the HJC-CBB61-20uF-450V in a single-phase motor circuit: 1) Identify Motor Terminals - Main winding (T1-T2), auxiliary winding (T3-T4), 2) Connect Capacitor - Connect capacitor between auxiliary winding terminal and power line (typically T3 to L2), 3) Main Winding - Connect main winding across power lines (T1 to L1, T2 to L2), 4) Centrifugal Switch - For capacitor-start motors, the capacitor is disconnected after starting; for permanent split capacitor (PSC) motors, capacitor remains in circuit. The CBB61 is designed for continuous operation in PSC motor configurations. Use appropriate wire gauge for motor current (typically 14 AWG for 2-3HP). Ensure all connections are tight and properly insulated. The capacitor should be mounted close to the motor but in a well-ventilated location. Always disconnect power before servicing.",
          "decisionGuide": "Connect capacitor to auxiliary winding for continuous operation in PSC motors; follow motor wiring diagram.",
          "keywords": ["motor capacitor wiring", "CBB61 connection", "motor run capacitor installation"]
        },
        {
          "question": "What is the difference between motor run and motor start capacitors?",
          "answer": "Motor run capacitors (like CBB61) and motor start capacitors serve different purposes: 1) Motor Run Capacitors - Designed for continuous operation, typically 1-100µF, film or oil-filled construction, rated for continuous AC voltage, stays in circuit during operation, provides running torque and efficiency improvement, 2) Motor Start Capacitors - Designed for brief operation (few seconds), typically 100-800µF, electrolytic construction, higher capacitance for high starting torque, disconnected by centrifugal switch after starting. Key differences: Run capacitors have lower capacitance but continuous duty rating; start capacitors have high capacitance but intermittent duty only. Using a start capacitor for continuous operation will cause overheating and rapid failure. The CBB61 is specifically designed for continuous motor running - do not substitute with electrolytic start capacitors.",
          "decisionGuide": "Use CBB61 for continuous motor running; use separate electrolytic start capacitors only for brief starting assistance.",
          "keywords": ["motor run vs start capacitor", "CBB61 vs start capacitor", "motor capacitor types"]
        },
        {
          "question": "What is the expected lifetime in motor applications?",
          "answer": "The HJC-CBB61-20uF-450V has an expected lifetime of 30,000-60,000 hours in typical motor applications. Actual lifetime depends on: 1) Operating Voltage - Closer to rated voltage reduces life; 450V rating on 230V motor provides long life, 2) Ambient Temperature - Every 10°C increase halves lifetime; keep below 50°C for maximum life, 3) Capacitor Quality - Match to motor nameplate specification, 4) Application Duty Cycle - Continuous operation vs intermittent. Typical service life: 1) HVAC applications - 10-15 years with seasonal operation, 2) Industrial continuous - 5-8 years with 24/7 operation, 3) Pump applications - 8-12 years with intermittent use. Unlike electrolytic capacitors, film capacitors do not have a defined wear-out mechanism - they gradually degrade rather than suddenly fail. Replace when capacitance drops >10% from rated or physical damage is visible.",
          "decisionGuide": "Expect 10-15 year service life in HVAC applications; monitor capacitance and replace when below 90% of rated.",
          "keywords": ["CBB61 lifetime", "motor capacitor life expectancy", "motor run capacitor service life"]
        },
        {
          "question": "How do I test if this motor capacitor is still good?",
          "answer": "To test the HJC-CBB61-20uF-450V motor capacitor: 1) Visual Inspection - Check for case bulging, terminal corrosion, or oil leakage (if oil-filled type), 2) Capacitance Measurement - Use capacitance meter; should be 18-22µF (±10% of 20µF rated), 3) Insulation Test - Megohm meter should show >100MΩ between terminals and case, 4) AC Current Test - Measure current with capacitor connected to AC supply: I = 2πfCV. For 20µF at 230V 50Hz: I ≈ 1.44A. Test procedure: Disconnect power and discharge, remove capacitor from circuit, measure capacitance with appropriate meter, check for physical damage. Replace capacitor if: capacitance <18µF or >22µF, physical damage visible, motor shows symptoms of weak running (overheating, reduced torque, slow starting). Regular testing every 2-3 years can identify degradation before motor damage occurs.",
          "decisionGuide": "Measure capacitance with meter; replace if outside 18-22µF range or physical damage is present.",
          "keywords": ["motor capacitor testing", "CBB61 test procedure", "motor run capacitor measurement"]
        },
        {
          "question": "What safety features does this capacitor have?",
          "answer": "The HJC-CBB61-20uF-450V includes important safety features: 1) Internal Pressure Interrupter - If the capacitor fails internally, the pressure interrupter disconnects the circuit to prevent case rupture, 2) Self-Healing Construction - Metallized film heals minor dielectric breakdowns, preventing catastrophic failure, 3) Metal Case - Provides mechanical protection and contains any internal failure, 4) M8 Stud Mounting - Secure mounting prevents loose connections that could cause arcing, 5) Terminal Block - Insulated terminals prevent accidental contact. Safety certifications: UL recognized, CSA certified. These safety features are important because motor capacitors operate continuously and can store significant energy. The pressure interrupter is particularly critical - it provides fail-safe protection that prevents the capacitor from rupturing and potentially causing injury or equipment damage. Always use capacitors with recognized safety certifications for motor applications.",
          "decisionGuide": "The CBB61 includes comprehensive safety features; always use UL/CSA recognized capacitors for motor applications.",
          "keywords": ["motor capacitor safety", "CBB61 pressure interrupter", "capacitor fail safe"]
        }
      ]
    }
  ]
};

products.categories.push(filmCategory);

// Supercapacitors Category
const supercapCategory = {
  "id": "supercapacitors",
  "name": "Supercapacitors",
  "slug": "supercapacitors",
  "description": "HJC Supercapacitors (EDLC) provide high power density, rapid charge/discharge, and long cycle life for backup power, energy harvesting, and power buffering applications.",
  "longDescription": "HJC Supercapacitors (Electric Double-Layer Capacitors or EDLC) store energy through electrostatic charge separation at the electrode-electrolyte interface, offering power densities 10-100x higher than batteries with virtually unlimited cycle life. Available in cylindrical and prismatic packages, HJC supercapacitors range from 0.1F to 3000F with voltage ratings from 2.5V to 3.0V per cell. Applications include backup power for SSDs and RTCs, energy harvesting for IoT sensors, regenerative braking for EVs, and power buffering for industrial equipment. As an authorized HJC distributor, we provide technical support and selection guidance for supercapacitor applications.",
  "series": [
    "HC Series - Standard cylindrical",
    "HP Series - High power",
    "HT Series - High temperature",
    "HM Series - Module configurations"
  ],
  "parameters": [
    "Capacitance",
    "Voltage Rating",
    "ESR",
    "Leakage Current",
    "Operating Temperature",
    "Cycle Life"
  ],
  "applications": [
    "Backup Power",
    "Energy Harvesting",
    "Regenerative Braking",
    "Power Buffering",
    "Pulse Power",
    "UPS Systems"
  ],
  "selectionGuide": {
    "title": "Supercapacitor Selection Guide",
    "description": "Learn how to select the right supercapacitor for your application",
    "articleId": "supercapacitor-selection-guide",
    "articleLink": "/hjc/support/supercapacitor-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/hjc/support/supercapacitor-selection-guide.html",
    "text": "Supercapacitor Selection Guide"
  },
  "faqs": [
    {
      "question": "What is the difference between supercapacitors and batteries?",
      "answer": "Supercapacitors and batteries store energy through different mechanisms: 1) Energy Storage - Supercapacitors store energy electrostatically (physical charge separation); batteries store energy chemically (electrochemical reactions), 2) Power Density - Supercapacitors: 10-100 kW/kg (high power); Batteries: 0.1-1 kW/kg (lower power), 3) Energy Density - Supercapacitors: 1-10 Wh/kg; Batteries: 100-250 Wh/kg (lithium-ion), 4) Cycle Life - Supercapacitors: 500,000+ cycles; Batteries: 500-2000 cycles, 5) Charge Time - Supercapacitors: seconds; Batteries: minutes to hours, 6) Temperature Range - Supercapacitors: -40°C to +65°C; Batteries: 0°C to +45°C typically. Applications: Use supercapacitors for high-power, short-duration, frequent cycling; use batteries for high-energy, long-duration storage. Many systems use both - supercapacitors for peak power, batteries for energy storage.",
      "decisionGuide": "Choose supercapacitors for high-power, frequent cycling applications; batteries for high-energy, long-duration storage.",
      "keywords": ["supercapacitor vs battery", "EDLC vs lithium ion", "supercapacitor energy density"]
    },
    {
      "question": "How do I calculate the required capacitance for my application?",
      "answer": "To calculate required HJC supercapacitor capacitance: 1) Energy Required - E = 0.5 × C × (Vmax² - Vmin²), rearrange to C = 2E / (Vmax² - Vmin²), 2) Power Required - For constant power discharge: C = P × t / (0.5 × (Vmax² - Vmin²)), where P is power, t is time. Example: Backup power for 10W load for 60 seconds, voltage range 5.0V to 3.0V (using two 2.7V cells in series): C = 2 × 10W × 60s / (5.0² - 3.0²) = 1200 / 16 = 75F. Use 100F for margin. 3) Current Capability - Check that ESR allows required discharge current: I = V / ESR. For high-current pulses, parallel multiple capacitors to reduce effective ESR. HJC provides an online calculator or contact our FAE team for complex applications.",
      "decisionGuide": "Use the energy formula C = 2E/(Vmax²-Vmin²) or contact our FAE team for application-specific calculations.",
      "keywords": ["supercapacitor sizing", "EDLC calculation", "supercapacitor energy formula"]
    },
    {
      "question": "How do I connect supercapacitors for higher voltage?",
      "answer": "HJC supercapacitors (2.5V-3.0V per cell) can be connected in series for higher voltage: 1) Series Connection - Connect positive to negative; voltages add, capacitance reduces (Ctotal = C/n), 2) Voltage Balancing - Essential for series connection; use active balancing circuits or passive balancing resistors, 3) Balancing Resistors - Size to pass 10-50x leakage current; typically 1kΩ-10kΩ per cell, 4) Active Balancing - More efficient; uses ICs or circuits to transfer charge between cells. Example: For 12V system, use 5 cells in series (5 × 2.7V = 13.5V). With 100F cells: Ctotal = 100F/5 = 20F. Use balancing circuit to prevent overvoltage on individual cells. HJC offers modules with built-in balancing, or we can recommend balancing circuits for custom configurations. Never connect supercapacitors in series without balancing.",
      "decisionGuide": "Use series connection with active or passive balancing; never connect in series without balancing circuit.",
      "keywords": ["supercapacitor series connection", "EDLC voltage balancing", "supercapacitor module"]
    },
    {
      "question": "What is the leakage current and how does it affect my design?",
      "answer": "HJC supercapacitors have leakage current that affects standby power and hold-up time: 1) Typical Leakage - 0.5-5µA per Farad at rated voltage and 25°C, 2) Temperature Effect - Leakage doubles approximately every 10°C increase, 3) Time Dependence - Leakage is highest immediately after charging and decreases over hours to days. Design considerations: 1) Standby Power - Calculate leakage power: P = V × Ileakage, 2) Hold-Up Time - Leakage reduces actual hold-up time; factor into calculations, 3) Balancing Circuit - Balancing resistors add to leakage current, 4) Charging Circuit - Ensure charging circuit can supply leakage current to maintain voltage. Example: 100F supercapacitor at 2.7V has ~100µA leakage; standby power = 0.27mW. For battery-powered applications, this may be significant. For mains-powered applications, leakage is usually negligible.",
      "decisionGuide": "Factor leakage current into hold-up time calculations; consider impact on battery life for portable applications.",
      "keywords": ["supercapacitor leakage current", "EDLC self discharge", "supercapacitor standby power"]
    },
    {
      "question": "What is the cycle life and how does it degrade?",
      "answer": "HJC supercapacitors offer exceptional cycle life compared to batteries: 1) Rated Cycle Life - 500,000 to 1,000,000 cycles at rated voltage and temperature, 2) Degradation Mechanism - Gradual ESR increase and capacitance decrease over cycles, 3) End of Life - Typically defined as 20% capacitance loss or 2x ESR increase, 4) Factors Affecting Life - Voltage (higher voltage reduces life), temperature (higher temperature reduces life), current (very high currents cause heating). Typical degradation: After 100,000 cycles: <5% capacitance loss, <20% ESR increase. After 500,000 cycles: <10% capacitance loss, <50% ESR increase. Unlike batteries, supercapacitors do not have sudden catastrophic failure - they degrade gracefully. For applications with frequent cycling (energy harvesting, regenerative braking), supercapacitors last 10-100x longer than batteries.",
      "decisionGuide": "Expect 500,000+ cycles with minimal degradation; supercapacitors are ideal for high-cycling applications.",
      "keywords": ["supercapacitor cycle life", "EDLC lifetime", "supercapacitor degradation"]
    }
  ],
  "products": [
    {
      "partNumber": "HJC-HC-10F-2.7V",
      "name": "Supercapacitor 10F 2.7V",
      "shortDescription": "HJC HC Series 10F 2.7V supercapacitor, cylindrical, for backup power and energy harvesting applications.",
      "descriptionParagraphs": [
        "The HJC-HC-10F-2.7V is a high-reliability electric double-layer capacitor (EDLC) featuring 10 Farads capacitance and 2.7V voltage rating.",
        "This supercapacitor is ideal for RTC backup, SRAM backup, small energy harvesting systems, and pulse power applications.",
        "The cylindrical package with radial leads provides easy PCB mounting and excellent thermal performance."
      ],
      "specifications": {
        "Capacitance": "10F",
        "Voltage Rating": "2.7V DC",
        "Tolerance": "-10% to +30%",
        "ESR": "≤0.5Ω @ 1kHz",
        "Leakage Current": "≤0.03mA @ 2.7V, 72hrs",
        "Temperature Range": "-40°C to +65°C",
        "Cycle Life": "500,000 cycles",
        "Dimensions": "8mm diameter × 13mm height",
        "Termination": "Radial leads"
      },
      "features": [
        "10 Farads high capacitance",
        "Low ESR for high power delivery",
        "500,000+ cycle life",
        "Wide temperature range",
        "Maintenance-free operation",
        "RoHS compliant"
      ],
      "applications": [
        "Real-time clock (RTC) backup",
        "SRAM/DRAM backup power",
        "Energy harvesting storage",
        "Pulse power for sensors",
        "LED flash power",
        "Small motor backup"
      ],
      "faeReview": {
        "author": "Kevin Zhao",
        "title": "FAE - Energy Storage",
        "content": "The HJC-HC-10F-2.7V is my go-to recommendation for RTC and small memory backup applications. The 10F capacitance provides several days of backup power for typical RTC circuits consuming a few µA. I particularly like the low leakage current - after 72 hours, it's below 30µA, which is critical for battery-powered systems. The 0.5Ω ESR is low enough for most backup applications while maintaining good pulse capability. I've used this part in dozens of IoT sensor designs where it stores energy from solar or vibration harvesting. The cylindrical package is easy to handle and mount. For longer backup times, I typically use two in parallel. HJC's quality consistency has been excellent - we see very consistent capacitance and ESR across production lots.",
        "highlight": "Reliable supercapacitor for backup power and energy harvesting"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-HC-22F-2.7V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "22F",
            "voltage": "2.7V"
          },
          "comparison": {
            "capacitance": "22F > 10F (+120%)",
            "voltage": "2.7V = 2.7V (same)",
            "size": "10mm × 20mm (larger)",
            "esr": "~0.3Ω (lower)",
            "price": "~40% higher"
          },
          "reason": "Higher capacitance for longer backup time or higher energy storage",
          "useCase": "Longer RTC backup, larger energy harvesting systems",
          "link": "/hjc/products/supercapacitors/hjc-hc-22f-2.7v.html"
        },
        {
          "partNumber": "HJC-HC-3.3F-2.7V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "3.3F",
            "voltage": "2.7V"
          },
          "comparison": {
            "capacitance": "3.3F < 10F (-67%)",
            "voltage": "2.7V = 2.7V (same)",
            "size": "6mm × 12mm (smaller)",
            "esr": "~0.8Ω (higher)",
            "price": "~30% lower"
          },
          "reason": "Smaller size and lower cost for applications with lower energy requirements",
          "useCase": "Compact designs, short backup times",
          "link": "/hjc/products/supercapacitors/hjc-hc-3.3f-2.7v.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-HC-10F-2.7V",
          "link": "/hjc/products/supercapacitors/hjc-hc-10f-2.7v.html",
          "description": "Parallel for higher capacitance",
          "category": "Supercapacitors"
        },
        {
          "partNumber": "Supercapacitor Balancing IC",
          "link": "#",
          "description": "Active balancing for series connection",
          "category": "ICs"
        },
        {
          "partNumber": "LDO Regulator 2.5V",
          "link": "#",
          "description": "Voltage regulator for backup circuit",
          "category": "ICs"
        },
        {
          "partNumber": "Diode 1N4148",
          "link": "#",
          "description": "Blocking diode for charging circuit",
          "category": "Discrete"
        },
        {
          "partNumber": "Resistor 100Ω",
          "link": "#",
          "description": "Current limit for charging",
          "category": "Resistors"
        }
      ],
      "applicationScenarios": [
        {
          "title": "RTC Backup Power",
          "description": "3-day backup power for real-time clock in IoT device"
        },
        {
          "title": "Energy Harvesting Storage",
          "description": "Energy storage for solar-powered sensor node"
        },
        {
          "title": "LED Flash Power",
          "description": "Pulse power for high-power LED flash in camera"
        }
      ],
      "keywords": [
        "HJC supercapacitor 10F",
        "2.7V EDLC",
        "backup power capacitor"
      ],
      "faqs": [
        {
          "question": "How long can this supercapacitor backup my RTC?",
          "answer": "The HJC-HC-10F-2.7V backup time depends on RTC current consumption: Backup time = 0.5 × C × (Vmax² - Vmin²) / I. Example calculations: 1) Low-power RTC (1µA): Time = 0.5 × 10F × (2.7² - 1.8²) / 1µA = 0.5 × 10 × 4.05 / 1µA = 20,250 seconds ≈ 5.6 hours, 2) Ultra-low-power RTC (0.1µA): Time = 56 hours, 3) Standard RTC (5µA): Time = 1.1 hours. Actual backup time also depends on: minimum operating voltage of RTC, leakage current of supercapacitor, and temperature. For longer backup, use larger capacitance (22F, 50F) or multiple capacitors in parallel. The supercapacitor can be recharged quickly when power returns, unlike batteries that require slow charging.",
          "decisionGuide": "Calculate based on your RTC current consumption; use C = 2 × I × t / (Vmax² - Vmin²) to determine required capacitance.",
          "keywords": ["RTC backup time", "supercapacitor backup calculation", "10F backup duration"]
        },
        {
          "question": "How do I charge this supercapacitor?",
          "answer": "Charging the HJC-HC-10F-2.7V requires current limiting: 1) Current Limit - Maximum recommended charging current is typically 1-10A for this size; use 100mA-1A for standard charging, 2) Voltage Limit - Do not exceed 2.7V; use voltage regulator or clamp, 3) Simple Circuit - Resistor in series: R = (Vsupply - Vcap) / Icharge. For 5V supply, 100mA charge: R = (5-0)/0.1 = 50Ω (use 47Ω standard), 4) Active Circuit - Use constant current source or dedicated supercapacitor charger IC for faster, controlled charging. Charging time: From 0V to 95% charged: t = 3 × R × C. With 47Ω resistor: t = 3 × 47 × 10 = 1410 seconds ≈ 24 minutes. For faster charging, use lower resistance or active current source. Always include overvoltage protection to prevent exceeding 2.7V.",
          "decisionGuide": "Use series resistor for simple applications; dedicated charger IC for fast charging or precise control.",
          "keywords": ["supercapacitor charging", "EDLC charge circuit", "supercapacitor current limit"]
        },
        {
          "question": "Can I use this supercapacitor in series for 5V systems?",
          "answer": "Yes, two HJC-HC-10F-2.7V supercapacitors can be connected in series for 5V applications: 1) Series Configuration - Two 2.7V cells in series provide 5.4V rating (good for 5V systems), 2) Total Capacitance - Ctotal = 10F/2 = 5F (capacitance halves in series), 3) Voltage Balancing - Essential! Use balancing circuit to prevent one cell from exceeding 2.7V, 4) Simple Balancing - Use 1kΩ resistors across each cell for passive balancing, 5) Active Balancing - More efficient; use dedicated IC. Energy storage: E = 0.5 × 5F × (5.0² - 3.0²) = 40J (usable from 5V to 3V). Applications: 5V backup power, USB power buffering, 5V microcontroller backup. Always monitor individual cell voltages during development to verify balancing is working correctly. HJC also offers pre-configured 5V modules with built-in balancing.",
          "decisionGuide": "Use two in series with balancing circuit for 5V applications; consider pre-built modules for simplicity.",
          "keywords": ["supercapacitor 5V", "EDLC series 5V", "supercapacitor balancing"]
        },
        {
          "question": "What is the self-discharge rate of this supercapacitor?",
          "answer": "The HJC-HC-10F-2.7V self-discharge characteristics: 1) Initial Drop - Voltage drops 5-10% in first few hours after charging due to charge redistribution, 2) Long-term Self-Discharge - Typically 5-20% per day depending on temperature, 3) Temperature Effect - Self-discharge doubles approximately every 10°C increase, 4) Leakage Current - ~30µA at 25°C after 72 hours. Self-discharge mechanism: Internal leakage current slowly discharges the capacitor. At 25°C: ~10-15% voltage drop per day. At 65°C: ~30-40% per day. For backup applications, this means: 1) After 1 day: ~85-90% voltage remains, 2) After 3 days: ~60-70% voltage remains, 3) After 7 days: ~30-50% voltage remains. For applications requiring long hold-up times, calculate based on initial voltage after accounting for self-discharge. For very long backup (weeks), consider larger capacitance or periodic topping charge.",
          "decisionGuide": "Account for 10-20% daily self-discharge in backup time calculations; use larger capacitance for long hold-up requirements.",
          "keywords": ["supercapacitor self discharge", "EDLC leakage", "supercapacitor voltage drop"]
        },
        {
          "question": "How does temperature affect supercapacitor performance?",
          "answer": "Temperature significantly affects HJC-HC-10F-2.7V performance: 1) Capacitance - Relatively stable across temperature range; slight increase at low temperatures, 2) ESR - Increases at low temperatures (2-3x at -40°C vs 25°C); decreases slightly at high temperatures, 3) Leakage Current - Doubles approximately every 10°C increase; very low at cold temperatures, 4) Voltage Rating - Must be derated at high temperatures; do not exceed 2.5V above 65°C, 5) Lifetime - Higher temperatures reduce cycle life and calendar life. Operating recommendations: 1) Optimal Range: -20°C to +45°C for best performance, 2) Extended Range: -40°C to +65°C with derating, 3) High Temp: Reduce voltage to 2.5V max above 65°C. Cold temperature performance is generally good - ESR increases but capacitance is maintained. Supercapacitors perform much better than batteries at low temperatures.",
          "decisionGuide": "Operate within -20°C to +45°C for best performance; derate voltage at high temperatures.",
          "keywords": ["supercapacitor temperature", "EDLC ESR temperature", "supercapacitor cold performance"]
        },
        {
          "question": "What is the maximum discharge current for this supercapacitor?",
          "answer": "The HJC-HC-10F-2.7V maximum discharge current depends on ESR and acceptable voltage drop: 1) Continuous Current - Limited by thermal considerations; typically 1-2A continuous, 2) Peak Current - Can deliver short pulses of 5-10A for milliseconds, 3) Calculation - Imax = (Vcap - Vmin) / ESR. At 2.7V, 0.5Ω ESR: Imax = 2.7V/0.5Ω = 5.4A (until voltage drops). For pulsed applications: 1) LED Flash - 1-3A for 100ms is typical, 2) Motor Start - 5A for 1-2 seconds, 3) RF Transmit - 10A pulses for microseconds. Thermal considerations: P = I² × ESR. At 2A: P = 4 × 0.5 = 2W heating - requires adequate cooling. For high-current applications, use multiple capacitors in parallel to reduce effective ESR and distribute heating.",
          "decisionGuide": "For continuous currents above 1A, use parallel capacitors; for pulse applications, calculate based on allowable voltage drop.",
          "keywords": ["supercapacitor discharge current", "EDLC pulse power", "supercapacitor ESR current"]
        }
      ]
    },
    {
      "partNumber": "HJC-HC-100F-2.7V",
      "name": "Supercapacitor 100F 2.7V",
      "shortDescription": "HJC HC Series 100F 2.7V supercapacitor, high capacitance for extended backup power and energy storage applications.",
      "descriptionParagraphs": [
        "The HJC-HC-100F-2.7V provides high capacitance (100 Farads) for applications requiring extended backup time or significant energy storage.",
        "This supercapacitor is ideal for SSD backup, industrial controller backup, energy harvesting systems, and small UPS applications.",
        "The low ESR and high cycle life make it superior to batteries for high-cycling applications."
      ],
      "specifications": {
        "Capacitance": "100F",
        "Voltage Rating": "2.7V DC",
        "Tolerance": "-10% to +30%",
        "ESR": "≤0.03Ω @ 1kHz",
        "Leakage Current": "≤0.2mA @ 2.7V, 72hrs",
        "Temperature Range": "-40°C to +65°C",
        "Cycle Life": "500,000 cycles",
        "Dimensions": "22mm diameter × 45mm height",
        "Termination": "Radial leads"
      },
      "features": [
        "100 Farads high capacitance",
        "Very low ESR (≤30mΩ)",
        "High power density",
        "500,000+ cycle life",
        "Wide temperature range",
        "Maintenance-free operation"
      ],
      "applications": [
        "SSD backup power",
        "Industrial controller backup",
        "Energy harvesting storage",
        "Small UPS systems",
        "Pulse power systems",
        "Regenerative braking"
      ],
      "faeReview": {
        "author": "Kevin Zhao",
        "title": "FAE - Energy Storage",
        "content": "The HJC-HC-100F-2.7V is an excellent choice for applications requiring significant energy storage with high power capability. I've used this part extensively for SSD backup applications where it provides 10-30 seconds of backup time - enough to flush cache and shut down safely. The 30mΩ ESR is impressively low for this capacitance, allowing peak currents of 50A+ for short durations. For industrial applications, I often use two in series for 5.4V systems, providing 50F effective capacitance. The cycle life is the real advantage - we've tested these to 500,000+ cycles with minimal degradation. For a recent energy harvesting project, we used four of these to store energy from intermittent solar charging, providing reliable power through nights and cloudy days. HJC's quality control is excellent - ESR and capacitance are very consistent.",
        "highlight": "High-capacitance supercapacitor for industrial backup and energy storage"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-HC-200F-2.7V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "200F",
            "voltage": "2.7V"
          },
          "comparison": {
            "capacitance": "200F > 100F (+100%)",
            "voltage": "2.7V = 2.7V (same)",
            "size": "25mm × 50mm (larger)",
            "esr": "~0.02Ω (lower)",
            "price": "~80% higher"
          },
          "reason": "Double the energy storage for extended backup or higher power applications",
          "useCase": "Extended SSD backup, larger energy harvesting systems",
          "link": "/hjc/products/supercapacitors/hjc-hc-200f-2.7v.html"
        },
        {
          "partNumber": "HJC-HC-50F-2.7V",
          "brand": "HJC",
          "specifications": {
            "capacitance": "50F",
            "voltage": "2.7V"
          },
          "comparison": {
            "capacitance": "50F < 100F (-50%)",
            "voltage": "2.7V = 2.7V (same)",
            "size": "18mm × 40mm (smaller)",
            "esr": "~0.05Ω (higher)",
            "price": "~40% lower"
          },
          "reason": "Smaller size and lower cost for applications with lower energy requirements",
          "useCase": "Shorter backup times, compact designs",
          "link": "/hjc/products/supercapacitors/hjc-hc-50f-2.7v.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-HC-100F-2.7V",
          "link": "/hjc/products/supercapacitors/hjc-hc-100f-2.7v.html",
          "description": "Parallel for 200F or series for 5.4V 50F",
          "category": "Supercapacitors"
        },
        {
          "partNumber": "Supercapacitor Charger IC",
          "link": "#",
          "description": "Dedicated charging controller",
          "category": "ICs"
        },
        {
          "partNumber": "DC-DC Boost Converter",
          "link": "#",
          "description": "Extract energy as voltage drops",
          "category": "ICs"
        },
        {
          "partNumber": "Current Sense Resistor",
          "link": "#",
          "description": "Monitor charge/discharge current",
          "category": "Resistors"
        },
        {
          "partNumber": "MOSFET Switch",
          "link": "#",
          "description": "Control discharge path",
          "category": "Discrete"
        }
      ],
      "applicationScenarios": [
        {
          "title": "SSD Backup Power",
          "description": "30-second backup for enterprise SSD to flush cache on power loss"
        },
        {
          "title": "Industrial UPS",
          "description": "Bridge power for PLC controller during power transitions"
        },
        {
          "title": "Solar Energy Storage",
          "description": "Daily energy storage for remote sensor station"
        }
      ],
      "keywords": [
        "HJC supercapacitor 100F",
        "high capacitance EDLC",
        "industrial supercapacitor"
      ],
      "faqs": [
        {
          "question": "How much energy can this supercapacitor store?",
          "answer": "The HJC-HC-100F-2.7V stores significant energy: Total Energy = 0.5 × C × V² = 0.5 × 100F × (2.7V)² = 364.5 Joules (0.1 Wh). However, usable energy depends on minimum operating voltage: 1) Usable to 1.35V (50% voltage): E = 0.5 × 100 × (2.7² - 1.35²) = 273 J (75% of total), 2) Usable to 1.0V: E = 0.5 × 100 × (2.7² - 1.0²) = 314 J (86% of total), 3) Usable to 0.5V: E = 0.5 × 100 × (2.7² - 0.5²) = 352 J (97% of total). For comparison: 1) AA alkaline battery: ~10,000 J (much higher energy), 2) But supercapacitor can deliver 100x higher power. Applications: Power a 10W load for 27-35 seconds (depending on min voltage), or provide 100A peak current for short pulses.",
          "decisionGuide": "Total energy is 364J; usable energy depends on minimum voltage of your application circuit.",
          "keywords": ["supercapacitor energy storage", "100F energy capacity", "EDLC joules"]
        },
        {
          "question": "How long can this supercapacitor backup my system?",
          "answer": "The HJC-HC-100F-2.7V backup time depends on system power consumption: Backup time = 0.5 × C × (Vmax² - Vmin²) / P. Example calculations: 1) 10W system (3.3V to 2.0V): t = 0.5 × 100 × (2.7² - 2.0²) / 10 = 16.5 seconds, 2) 1W system: t = 165 seconds (2.75 minutes), 3) 100mW system: t = 27.5 minutes, 4) 10mW RTC: t = 4.6 hours. For longer backup: 1) Use multiple capacitors in parallel (2× = 2× time), 2) Use series configuration with boost converter to extract more energy, 3) Reduce system power consumption, 4) Use larger capacitance (200F, 300F). Always include margin for self-discharge (10-20% per day) and capacitor tolerance (-10% to +30%).",
          "decisionGuide": "Calculate based on your system power; use multiple capacitors or larger values for extended backup.",
          "keywords": ["supercapacitor backup time", "100F backup duration", "EDLC hold up time"]
        },
        {
          "question": "What charging circuit do you recommend for this supercapacitor?",
          "answer": "For the HJC-HC-100F-2.7V, charging circuit options: 1) Simple Resistor - R = V/I; for 5V supply, 1A charge: R = 5Ω. Charging time: t = 5RC = 5 × 5 × 100 = 2500s (42 min to 99%). Simple but slow and inefficient, 2) Constant Current Source - LM317 or dedicated IC; charges at constant rate then switches to voltage limit, 3) Dedicated Supercapacitor Charger - ICs like LTC3625, BQ24640 provide optimal charging profile, cell balancing, and protection, 4) DC-DC Converter - Buck converter with current limit; efficient but complex. Recommended: For single cell, use dedicated charger IC. For series configurations, use charger with built-in balancing. Charging specifications: Max voltage 2.7V, typical charge current 1-10A, charge time 10-60 minutes depending on current. Always include overvoltage protection.",
          "decisionGuide": "Use dedicated supercapacitor charger IC for best performance; resistor limiting acceptable for slow charging.",
          "keywords": ["supercapacitor charging circuit", "100F charger", "EDLC charge controller"]
        },
        {
          "question": "Can I use this for regenerative braking in small EVs?",
          "answer": "Yes, the HJC-HC-100F-2.7V can be used for small-scale regenerative braking: 1) Energy Recovery - Store braking energy that would otherwise be dissipated as heat, 2) Power Assist - Release stored energy during acceleration to reduce battery load, 3) Configuration - Use multiple cells in series/parallel for required voltage and capacitance. Example: 24V system using 10 cells in series (27V max): Ctotal = 100F/10 = 10F, Energy = 0.5 × 10 × (24² - 18²) = 1260J. For a 100kg vehicle at 20km/h (5.6m/s): Kinetic energy = 0.5 × 100 × 5.6² = 1568J. The supercapacitor can recover ~80% of braking energy. Limitations: 1) Limited energy storage vs batteries, 2) High cost for large arrays, 3) Requires DC-DC converter for voltage matching. Best for: Small EVs (e-bikes, scooters), forklifts, golf carts.",
          "decisionGuide": "Suitable for small EVs; calculate required capacitance based on vehicle mass and speed; use with DC-DC converter.",
          "keywords": ["supercapacitor regenerative braking", "EDLC EV", "energy recovery capacitor"]
        },
        {
          "question": "How do I connect multiple capacitors for higher voltage systems?",
          "answer": "For higher voltage with HJC-HC-100F-2.7V: 1) Series Connection - Connect positive to negative; voltages add, capacitance divides. Example: 10 in series for 27V system: Vtotal = 27V, Ctotal = 100F/10 = 10F, 2) Voltage Balancing - Critical for series connection; methods: a) Passive: 1kΩ-10kΩ resistors across each cell (simple but wastes power), b) Active: Dedicated balancing IC (efficient but complex), 3) Protection - Include overvoltage protection on each cell, 4) Monitoring - Monitor individual cell voltages during development. Series/Parallel combinations: For 48V system with 100F: Use 20 series (54V) × 2 parallel = 10F total. HJC offers pre-configured modules (16V, 32V, 48V) with integrated balancing and monitoring. Pre-built modules recommended for reliability and safety.",
          "decisionGuide": "Use pre-built modules for reliability; implement active balancing for series configurations; never connect in series without balancing.",
          "keywords": ["supercapacitor series parallel", "EDLC high voltage", "supercapacitor bank"]
        },
        {
          "question": "What is the cost comparison vs batteries for backup applications?",
          "answer": "Cost comparison for HJC-HC-100F-2.7V vs batteries: 1) Initial Cost - Supercapacitor: ~$10-20; Coin cell battery (CR2032): ~$0.50; Li-ion battery: ~$5-10, 2) Lifetime Cost - Supercapacitor: 500,000+ cycles = 20+ years; Batteries: 500 cycles = 2-3 years, 3) Total Cost of Ownership - Over 10 years: Supercapacitor: $10-20 (no replacement), Coin cell: $2-5 (4-10 replacements), Li-ion: $25-50 (3-5 replacements). When supercapacitors make economic sense: 1) High-cycling applications (>10 cycles/day), 2) Long system lifetime (10+ years), 3) Maintenance-free operation required, 4) Extreme temperatures. When batteries are better: 1) Long backup times (hours/days), 2) Very low power (years on coin cell), 3) Cost-sensitive disposable products. For most industrial and automotive applications, supercapacitors provide lower total cost of ownership despite higher initial cost.",
          "decisionGuide": "Supercapacitors have higher initial cost but lower lifetime cost for high-cycling or long-life applications.",
          "keywords": ["supercapacitor cost", "EDLC vs battery cost", "supercapacitor TCO"]
        }
      ]
    }
  ]
};

products.categories.push(supercapCategory);

// Write updated file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Added Film Capacitors and Supercapacitors categories');
console.log(`✅ Total categories: ${products.categories.length}`);
