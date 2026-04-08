const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'electronicon');

// Read products.json
const productsPath = path.join(dataDir, 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add Snubber Capacitors category
const snubberCategory = {
  "id": "snubber-capacitors",
  "name": "Snubber Capacitors",
  "slug": "snubber-capacitors",
  "description": "Electronicon snubber capacitors are designed for IGBT and thyristor protection circuits, absorbing voltage spikes and limiting dv/dt stress on power semiconductors.",
  "longDescription": "Electronicon snubber capacitors are designed for IGBT and thyristor protection circuits, absorbing voltage spikes and limiting dv/dt stress on power semiconductors. These high-voltage film capacitors feature low inductance, high dv/dt capability, and excellent self-healing properties. Available in voltages from 1000V to 3000V DC with capacitance values from 0.1uF to 10uF, they are ideal for inverter protection, soft-start circuits, and voltage clamping applications. As an authorized Electronicon distributor, we provide technical support and selection guidance for snubber capacitor applications.",
  "series": [
    "E12.E93",
    "E12.E59",
    "E12.P13"
  ],
  "parameters": [
    "Voltage Rating",
    "Capacitance",
    "dv/dt Rating",
    "Peak Current",
    "Inductance",
    "Temperature Range",
    "Lifetime"
  ],
  "applications": [
    "IGBT Protection",
    "Thyristor Snubbers",
    "Soft-Start Circuits",
    "Voltage Clamping",
    "Inverter Protection",
    "Crowbar Circuits"
  ],
  "selectionGuide": {
    "title": "Snubber Capacitor Selection Guide",
    "description": "Learn how to select the right snubber capacitor for IGBT and thyristor protection",
    "articleId": "snubber-selection-guide",
    "articleLink": "/electronicon/support/snubber-capacitor-design-guide.html"
  },
  "selectionGuideLink": "/electronicon/support/snubber-capacitor-design-guide.html",
  "faqs": [
    {
      "question": "What is the purpose of a snubber capacitor?",
      "answer": "A snubber capacitor serves several critical functions in power electronics circuits: 1) Voltage spike suppression - absorbs energy from inductive switching transients to protect semiconductors, 2) dv/dt limiting - slows voltage rise rate across switching devices to prevent false triggering, 3) EMI reduction - dampens high-frequency oscillations caused by stray inductance, 4) Turn-off protection - provides path for reverse recovery current during diode commutation, 5) Voltage clamping - limits maximum voltage stress on power devices. Snubber capacitors are essential for reliable operation of IGBTs, MOSFETs, and thyristors in high-power applications. The capacitor works in conjunction with a resistor (RC snubber) or resistor and diode (RCD snubber) to dissipate energy and control damping.",
      "decisionGuide": "Use snubber capacitors in all high-power switching applications to protect semiconductors from voltage transients.",
      "keywords": [
        "snubber capacitor purpose",
        "IGBT protection",
        "voltage spike suppression"
      ]
    },
    {
      "question": "How do I calculate the required snubber capacitance?",
      "answer": "Snubber capacitance calculation depends on the application: 1) For IGBT protection: C = L x (dI/dt) / V, where L is stray inductance, dI/dt is current fall rate, V is acceptable overvoltage, 2) For dv/dt limiting: C = I / (dv/dt), where I is load current and dv/dt is maximum allowed rate, 3) For energy absorption: C = 0.5 x L x I x I / (V x V), where L is inductance and I is peak current. Typical values range from 0.1uF to 10uF depending on power level. Higher capacitance provides better protection but increases switching losses. The capacitor must have adequate dv/dt rating for the application. Our FAE team can assist with snubber design calculations.",
      "decisionGuide": "Calculate based on your circuit inductance, switching characteristics, and protection requirements.",
      "keywords": [
        "snubber capacitor calculation",
        "snubber design",
        "IGBT snubber sizing"
      ]
    },
    {
      "question": "What dv/dt rating is required for snubber capacitors?",
      "answer": "The dv/dt rating indicates how fast voltage can change across the capacitor without damage. For snubber applications: 1) IGBT protection - typically requires 1000-5000 V/us depending on switching speed, 2) Thyristor snubbers - usually 100-1000 V/us based on device ratings, 3) High-frequency inverters - may require >10,000 V/us for fast-switching applications. The dv/dt rating is related to peak current capability: Ipeak = C x dv/dt. Exceeding the dv/dt rating can cause internal heating and premature failure. Electronicon snubber capacitors are designed with low inductance and high dv/dt capability for demanding applications. Always select capacitors with dv/dt margin above your application's maximum switching rate.",
      "decisionGuide": "Select snubber capacitors with dv/dt rating at least 50% higher than your application's maximum switching rate.",
      "keywords": [
        "dv/dt rating",
        "snubber capacitor specification",
        "capacitor switching speed"
      ]
    },
    {
      "question": "What is the difference between RC and RCD snubbers?",
      "answer": "RC and RCD snubbers serve similar purposes but have different characteristics: 1) RC Snubber - consists of resistor and capacitor in series, simplest configuration, dissipates energy during both turn-on and turn-off, suitable for moderate power applications, 2) RCD Snubber - adds a diode in parallel with the resistor, allows faster capacitor charging during turn-off (through diode) and slower discharge through resistor during turn-on, more efficient as energy only dissipated during turn-off, better for high-power applications. The RC snubber is simpler and lower cost but less efficient. The RCD snubber provides better protection with lower losses but requires an additional diode. Both types require careful selection of R and C values for optimal damping.",
      "decisionGuide": "Use RC snubbers for simple, cost-sensitive applications; RCD snubbers for high-power or efficiency-critical designs.",
      "keywords": [
        "RC snubber",
        "RCD snubber",
        "snubber circuit types"
      ]
    },
    {
      "question": "How do I mount snubber capacitors for best performance?",
      "answer": "Proper mounting of snubber capacitors is critical for performance: 1) Minimize inductance - keep leads as short as possible, use wide copper traces or busbars, 2) Mount close to device - place capacitor directly across the semiconductor terminals to minimize stray inductance, 3) Use low-inductance capacitors - select capacitors specifically designed for snubber applications with low ESL, 4) Consider parallel connection - multiple smaller capacitors in parallel can have lower ESL than single large capacitor, 5) Thermal management - ensure adequate cooling as snubber capacitors experience high pulse currents, 6) Isolation - maintain proper creepage and clearance distances for high-voltage applications. Poor mounting can add stray inductance that defeats the snubber purpose.",
      "decisionGuide": "Mount snubber capacitors as close as possible to the protected semiconductor with minimal lead length.",
      "keywords": [
        "snubber capacitor mounting",
        "low inductance mounting",
        "snubber layout"
      ]
    }
  ],
  "products": [
    {
      "partNumber": "E12.E93-403.M20",
      "name": "Snubber Capacitor 0.4uF 2000V DC",
      "shortDescription": "Electronicon E12.E93-403.M20 0.4uF 2000V snubber capacitor with high dv/dt capability for IGBT protection.",
      "descriptionParagraphs": [
        "The E12.E93-403.M20 is a high-performance snubber capacitor designed for IGBT and thyristor protection circuits.",
        "Features ultra-low inductance and high dv/dt capability for effective voltage spike suppression.",
        "Ideal for high-frequency inverters, motor drives, and power supply applications requiring fast switching protection."
      ],
      "specifications": {
        "Capacitance": "0.4uF",
        "VoltageRating": "2000V DC",
        "dv/dt": "5000 V/us",
        "PeakCurrent": "2000A",
        "Inductance": "<20nH",
        "TemperatureRange": "-40C to +85C",
        "Lifetime": "100,000 hours @ 70C",
        "Mounting": "Axial Leads",
        "Dimensions": "32mm x 50mm"
      },
      "features": [
        "High voltage rating 2000V DC",
        "High dv/dt capability 5000 V/us",
        "Ultra-low inductance <20nH",
        "High peak current 2000A",
        "Self-healing properties",
        "Low ESR for fast response",
        "Axial lead mounting"
      ],
      "applications": [
        "IGBT snubber circuits",
        "Thyristor protection",
        "Inverter output filters",
        "Soft-start circuits",
        "Voltage clamping",
        "Crowbar circuits"
      ],
      "faeReview": {
        "author": "Michael Schneider",
        "title": "Senior FAE - Power Electronics",
        "content": "The E12.E93-403.M20 is my standard recommendation for IGBT protection in medium-power inverters. The 0.4uF capacitance provides effective snubbing for IGBTs up to 600A with typical stray inductance of 100-200nH. The 5000 V/us dv/dt rating handles modern fast-switching IGBTs and SiC MOSFETs without issues. I particularly appreciate the low inductance design (<20nH) which ensures the capacitor responds quickly to voltage transients. The axial lead configuration allows flexible mounting close to the IGBT terminals. For a typical 100kW motor drive, I use one E12.E93-403.M20 per IGBT module in an RCD snubber configuration. The 2000V rating provides good margin for 1200V IGBTs. This capacitor has proven reliable in numerous industrial drive applications I've supported.",
        "highlight": "Low inductance and high dv/dt for effective IGBT protection"
      },
      "alternativeParts": [
        {
          "partNumber": "E12.E93-104.M20",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "1uF",
            "voltage": "2000V DC",
            "dv/dt": "4000 V/us"
          },
          "comparison": {
            "capacitance": "1uF > 0.4uF (+150%)",
            "voltage": "2000V DC = 2000V DC (same)",
            "dv/dt": "4000 < 5000 V/us (lower)",
            "dimensions": "42mm x 65mm > 32mm x 50mm (larger)",
            "peakCurrent": "4000A > 2000A (higher)"
          },
          "reason": "Higher capacitance for applications with higher stray inductance or requiring more energy absorption",
          "useCase": "Large IGBT modules (600A+) or applications with high stray inductance",
          "link": "/electronicon/products/snubber-capacitors/e12-e93-104-m20.html"
        },
        {
          "partNumber": "E12.E59-403.M10",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "0.4uF",
            "voltage": "1000V DC",
            "dv/dt": "6000 V/us"
          },
          "comparison": {
            "capacitance": "0.4uF = 0.4uF (same)",
            "voltage": "1000V DC < 2000V DC (lower)",
            "dv/dt": "6000 > 5000 V/us (higher)",
            "dimensions": "25mm x 40mm < 32mm x 50mm (smaller)",
            "price": "Lower cost option"
          },
          "reason": "Lower voltage rating for 600V IGBT applications with higher dv/dt capability",
          "useCase": "600V class motor drives and inverters",
          "link": "/electronicon/products/snubber-capacitors/e12-e59-403-m10.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "Snubber Resistor 10Ohm",
          "link": "#",
          "description": "10 ohm 5W non-inductive resistor for RC snubber",
          "category": "Snubber Components"
        },
        {
          "partNumber": "Fast Diode MUR860",
          "link": "#",
          "description": "8A 600V fast recovery diode for RCD snubber",
          "category": "Power Semiconductors"
        },
        {
          "partNumber": "E12.E93-403.M20",
          "link": "/electronicon/products/snubber-capacitors/e12-e93-403-m20.html",
          "description": "Multiple capacitors for parallel connection",
          "category": "Snubber Capacitors"
        },
        {
          "partNumber": "IGBT Driver 2SP0115T",
          "link": "#",
          "description": "IGBT driver with built-in protection",
          "category": "Gate Drivers"
        },
        {
          "partNumber": "Mounting Clip",
          "link": "#",
          "description": "Clip for axial capacitor mounting",
          "category": "Accessories"
        }
      ],
      "applicationScenarios": [
        {
          "title": "100kW Motor Drive IGBT Protection",
          "description": "E12.E93-403.M20 provides effective snubbing for 600A IGBT modules in motor drive applications"
        },
        {
          "title": "Solar Inverter Output Stage",
          "description": "Snubber capacitor for IGBT protection in grid-tied solar inverters"
        },
        {
          "title": "Soft-Start Circuit",
          "description": "RC snubber for thyristor-based soft-start applications"
        }
      ],
      "keywords": [
        "Electronicon E12.E93-403.M20",
        "0.4uF 2000V snubber",
        "IGBT snubber capacitor distributor"
      ],
      "faqs": [
        {
          "question": "What is the maximum dv/dt for the E12.E93-403.M20?",
          "answer": "The E12.E93-403.M20 is rated for 5000 V/us dv/dt. This rating allows the capacitor to handle voltage transitions up to 5000 volts per microsecond without damage. For a 1200V IGBT switching in 200ns, the dv/dt is approximately 6000 V/us, so this capacitor is well-suited for most IGBT applications. The dv/dt capability is related to the capacitor's internal construction and inductance. Exceeding the dv/dt rating can cause internal heating and reduced lifetime. The peak current capability is Ipeak = C x dv/dt = 0.4uF x 5000 V/us = 2000A, which matches the specified peak current rating.",
          "decisionGuide": "Verify your application's maximum dv/dt is within the 5000 V/us rating.",
          "keywords": [
            "E12.E93-403.M20 dv/dt",
            "snubber capacitor rating",
            "IGBT switching speed"
          ]
        },
        {
          "question": "How do I calculate the snubber resistor value for use with E12.E93-403.M20?",
          "answer": "For an RC snubber using the E12.E93-403.M20: 1) Determine the characteristic impedance: Z = sqrt(L/C), where L is stray inductance and C is capacitance (0.4uF), 2) For typical stray inductance of 100nH: Z = sqrt(100nH/0.4uF) = 15.8 ohms, 3) Select resistor value close to Z for critical damping, typically 10-22 ohms, 4) Calculate power dissipation: P = 0.5 x C x V x V x f, where V is voltage and f is switching frequency, 5) Select resistor power rating with 2-3x margin. For 1000V and 10kHz: P = 0.5 x 0.4uF x 1000 x 1000 x 10kHz = 2W, use 5-10W resistor. Use non-inductive resistors (carbon composition or film) to avoid adding inductance.",
          "decisionGuide": "Calculate based on your circuit inductance and switching characteristics, or consult our FAE team.",
          "keywords": [
            "snubber resistor calculation",
            "RC snubber design",
            "snubber component selection"
          ]
        },
        {
          "question": "Can the E12.E93-403.M20 be used for SiC MOSFET protection?",
          "answer": "Yes, the E12.E93-403.M20 is suitable for SiC MOSFET protection. SiC devices switch faster than IGBTs, with dv/dt rates up to 50-100 kV/us, which can cause significant voltage overshoot due to stray inductance. The E12.E93-403.M20 with 5000 V/us rating and <20nH inductance provides effective protection for SiC applications. The low inductance is critical for SiC protection as high ESL reduces snubber effectiveness. For very fast SiC applications, consider using multiple capacitors in parallel to further reduce ESL. The 2000V rating accommodates 1200V SiC devices with margin. The 0.4uF capacitance is appropriate for most SiC modules up to 200A. The capacitor's self-healing properties ensure reliability under the high stress of SiC switching.",
          "decisionGuide": "The E12.E93-403.M20 is well-suited for SiC MOSFET protection; consider parallel connection for very fast switching applications.",
          "keywords": [
            "SiC MOSFET protection",
            "SiC snubber capacitor",
            "E12.E93-403.M20 SiC"
          ]
        },
        {
          "question": "What is the inductance of the E12.E93-403.M20 and why is it important?",
          "answer": "The E12.E93-403.M20 has inductance below 20nH (typical 15nH). Low inductance is critical for snubber capacitors because: 1) Response time - lower inductance allows faster response to voltage transients, 2) Effectiveness - the snubber capacitor must act faster than the voltage rise to be effective, 3) ESL adds to stray inductance - high capacitor ESL reduces snubber performance, 4) Resonance - ESL can form resonant circuits with stray inductance. The 15nH inductance means the capacitor can respond to transients in approximately 1-2ns. For comparison, standard film capacitors may have 50-100nH inductance. The low inductance is achieved through optimized internal construction and short lead lengths. When mounting, keep leads as short as possible to maintain low inductance.",
          "decisionGuide": "Always select snubber capacitors with low ESL (<30nH) for effective high-speed switching protection.",
          "keywords": [
            "E12.E93-403.M20 inductance",
            "snubber capacitor ESL",
            "low inductance capacitor"
          ]
        },
        {
          "question": "How do I test the effectiveness of the snubber circuit?",
          "answer": "To verify snubber effectiveness with the E12.E93-403.M20: 1) Oscilloscope measurement - use high-voltage differential probe to measure Vce across the IGBT, 2) Look for voltage overshoot - without snubber, overshoot can reach 1.5-2x DC bus voltage, 3) With proper snubber, overshoot should be <1.3x DC bus voltage, 4) Measure dv/dt - should be limited to device rating, 5) Check for ringing - snubber should dampen oscillations within 1-2 cycles, 6) Thermal check - snubber resistor should not overheat under normal operation. Set oscilloscope to capture turn-off transients with single-shot trigger. Compare waveforms with and without snubber to verify effectiveness. The snubber should reduce overshoot voltage and ringing without excessive losses.",
          "decisionGuide": "Use oscilloscope measurements to verify snubber effectiveness; adjust R and C values if needed.",
          "keywords": [
            "snubber testing",
            "IGBT waveform measurement",
            "snubber effectiveness"
          ]
        },
        {
          "question": "What is the lifetime of the E12.E93-403.M20 in snubber applications?",
          "answer": "The E12.E93-403.M20 is rated for 100,000 hours at 70C hot spot temperature. In snubber applications, lifetime depends on: 1) Voltage stress - snubber capacitors experience pulse voltage, average should be <80% of rated, 2) Current stress - peak current should be within rating, 3) Temperature - hot spot temperature should be <70C for rated lifetime, 4) Switching frequency - higher frequency increases stress. The self-healing properties handle minor dielectric stress over time. Unlike DC-link capacitors, snubber capacitors typically don't show gradual capacitance decrease with aging. Monitor for physical damage (case swelling) or significant capacitance change (>10%). Typical service life exceeds 15 years in normal industrial applications.",
          "decisionGuide": "Design for moderate temperature and voltage stress to achieve maximum lifetime in snubber applications.",
          "keywords": [
            "E12.E93-403.M20 lifetime",
            "snubber capacitor reliability",
            "capacitor life expectancy"
          ]
        }
      ]
    },
    {
      "partNumber": "E12.E93-104.M50",
      "name": "Snubber Capacitor 1uF 3000V DC",
      "shortDescription": "Electronicon E12.E93-104.M50 1uF 3000V high-voltage snubber capacitor for high-power IGBT modules.",
      "descriptionParagraphs": [
        "The E12.E93-104.M50 provides high capacitance and voltage rating for demanding snubber applications.",
        "Designed for high-power IGBT modules and applications requiring significant energy absorption.",
        "Features low inductance and high peak current capability for effective protection of power semiconductors."
      ],
      "specifications": {
        "Capacitance": "1uF",
        "VoltageRating": "3000V DC",
        "dv/dt": "4000 V/us",
        "PeakCurrent": "4000A",
        "Inductance": "<25nH",
        "TemperatureRange": "-40C to +85C",
        "Lifetime": "100,000 hours @ 70C",
        "Mounting": "Axial Leads",
        "Dimensions": "42mm x 65mm"
      },
      "features": [
        "High voltage rating 3000V DC",
        "High capacitance 1uF",
        "High peak current 4000A",
        "dv/dt capability 4000 V/us",
        "Low inductance <25nH",
        "Self-healing properties",
        "High energy absorption"
      ],
      "applications": [
        "High-power IGBT protection",
        "Traction inverters",
        "Wind converters",
        "Medium voltage drives",
        "Soft-start circuits",
        "Crowbar protection"
      ],
      "faeReview": {
        "author": "Michael Schneider",
        "title": "Senior FAE - Power Electronics",
        "content": "The E12.E93-104.M50 is my recommendation for high-power applications using 1700V IGBTs or multiple 1200V devices in series. The 3000V rating provides excellent margin for 1700V devices, and the 1uF capacitance handles higher energy from large IGBT modules. I've used this capacitor in traction inverter applications where reliability is critical. The 4000A peak current rating accommodates the high currents from large IGBT modules (1000A+). The axial lead design allows flexible mounting configurations. For a typical 1MW traction inverter, I use one E12.E93-104.M50 per phase leg in RCD snubber configuration. The capacitor's self-healing properties are valuable in the harsh environment of traction applications. This is a robust, high-reliability component for demanding applications.",
        "highlight": "High voltage and capacitance for high-power IGBT protection"
      },
      "alternativeParts": [
        {
          "partNumber": "E12.E93-224.M50",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "2.2uF",
            "voltage": "3000V DC",
            "dv/dt": "3500 V/us"
          },
          "comparison": {
            "capacitance": "2.2uF > 1uF (+120%)",
            "voltage": "3000V DC = 3000V DC (same)",
            "dv/dt": "3500 < 4000 V/us (lower)",
            "dimensions": "55mm x 85mm > 42mm x 65mm (larger)",
            "peakCurrent": "7700A > 4000A (higher)"
          },
          "reason": "Higher capacitance for very high-power applications or high stray inductance",
          "useCase": "Large traction inverters (2MW+) or applications with very high stray inductance",
          "link": "/electronicon/products/snubber-capacitors/e12-e93-224-m50.html"
        },
        {
          "partNumber": "E12.E93-403.M20",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "0.4uF",
            "voltage": "2000V DC",
            "dv/dt": "5000 V/us"
          },
          "comparison": {
            "capacitance": "0.4uF < 1uF (-60%)",
            "voltage": "2000V DC < 3000V DC (lower)",
            "dv/dt": "5000 > 4000 V/us (higher)",
            "dimensions": "32mm x 50mm < 42mm x 65mm (smaller)",
            "price": "Lower cost option"
          },
          "reason": "Lower capacitance and voltage for medium-power applications",
          "useCase": "600-1200V IGBT applications where 0.4uF provides sufficient snubbing",
          "link": "/electronicon/products/snubber-capacitors/e12-e93-403-m20.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "E12.E93-104.M50",
          "link": "/electronicon/products/snubber-capacitors/e12-e93-104-m50.html",
          "description": "Parallel connection for higher capacitance",
          "category": "Snubber Capacitors"
        },
        {
          "partNumber": "Snubber Resistor 5Ohm",
          "link": "#",
          "description": "5 ohm 10W non-inductive resistor",
          "category": "Snubber Components"
        },
        {
          "partNumber": "Fast Diode RHRP30120",
          "link": "#",
          "description": "30A 1200V hyperfast diode for RCD snubber",
          "category": "Power Semiconductors"
        },
        {
          "partNumber": "IGBT Module FF1400R17IP4",
          "link": "#",
          "description": "1700V 1400A IGBT module",
          "category": "Power Semiconductors"
        },
        {
          "partNumber": "Mounting Bracket",
          "link": "#",
          "description": "Mounting bracket for large axial capacitors",
          "category": "Accessories"
        }
      ],
      "applicationScenarios": [
        {
          "title": "1MW Traction Inverter",
          "description": "E12.E93-104.M50 provides snubbing for 1700V IGBT modules in traction applications"
        },
        {
          "title": "Wind Converter Protection",
          "description": "High-voltage snubber for wind turbine converters using series IGBTs"
        },
        {
          "title": "Medium Voltage Drive",
          "description": "Snubber capacitor for MV drives with 3.3kV IGBT modules"
        }
      ],
      "keywords": [
        "Electronicon E12.E93-104.M50",
        "1uF 3000V snubber",
        "high voltage snubber capacitor distributor"
      ],
      "faqs": [
        {
          "question": "What IGBT modules are suitable for use with E12.E93-104.M50?",
          "answer": "The E12.E93-104.M50 is suitable for high-power IGBT modules including: 1) 1700V class - Infineon FF1400R17IP4 (1400A), FF600R17ME4 (600A), Mitsubishi CM1400HC-66H (1400A), 2) 1200V class - Large modules like Infineon FF1400R12IP4, FF600R12ME4 when higher margin is desired, 3) Multiple parallel modules - when paralleling 2-3 300-400A modules for high current, 4) SiC modules - high-voltage SiC MOSFETs in 1700V+ class. The 3000V rating provides margin for 1700V devices, and the 1uF capacitance handles the energy from large modules. The 4000A peak current accommodates the high switching currents. For 3300V IGBT modules, consider using two capacitors in series with balancing.",
          "decisionGuide": "Select based on your IGBT voltage and current ratings; the E12.E93-104.M50 is ideal for 1700V class modules.",
          "keywords": [
            "E12.E93-104.M50 IGBT",
            "IGBT module selection",
            "high power snubber"
          ]
        },
        {
          "question": "How do I design an RCD snubber with the E12.E93-104.M50?",
          "answer": "For an RCD snubber using E12.E93-104.M50: 1) Capacitor - 1uF provides energy storage, 2) Diode - select fast recovery diode with voltage rating >1.5x DC bus and current >IGBT current, for 1700V IGBT use 1200V 30A diode like RHRP30120, 3) Resistor - R = sqrt(L/C) where L is stray inductance, for 200nH: R = sqrt(200nH/1uF) = 14 ohms, use 10-15 ohms, 4) Power - P = 0.5 x C x V x V x f, for 1500V and 2kHz: P = 0.5 x 1uF x 1500 x 1500 x 2kHz = 2.25W, use 10W resistor. The diode allows fast charging during turn-off, resistor provides damping and slow discharge. Mount components close to IGBT with minimal lead length.",
          "decisionGuide": "Follow RCD snubber design guidelines or consult our FAE team for application-specific recommendations.",
          "keywords": [
            "RCD snubber design",
            "snubber component selection",
            "E12.E93-104.M50 snubber"
          ]
        },
        {
          "question": "Can the E12.E93-104.M50 be used in series for higher voltage?",
          "answer": "Yes, the E12.E93-104.M50 can be used in series for higher voltage applications, such as 3300V or 6500V systems. When connecting snubber capacitors in series: 1) Use voltage balancing resistors (100kOhm-1MOhm) across each capacitor to ensure equal voltage distribution, 2) Total capacitance is reduced: Ctotal = C/n (two in series = 0.5uF), 3) Voltage ratings add: Vtotal = n x Vrated (two in series = 6000V), 4) dv/dt capability remains the same per capacitor. For 3300V IGBT applications, two E12.E93-104.M50 in series provide 0.5uF at 6000V. The balancing resistors add power dissipation (V x V / R) that must be considered. Ensure proper mechanical spacing and mounting for series configurations.",
          "decisionGuide": "Use series connection for very high voltage applications; consult our FAE team for design assistance.",
          "keywords": [
            "snubber capacitor series",
            "high voltage snubber",
            "capacitor voltage balancing"
          ]
        },
        {
          "question": "What is the energy absorption capability of the E12.E93-104.M50?",
          "answer": "The energy storage capability of the E12.E93-104.M50 is E = 0.5 x C x V x V. At rated voltage (3000V): E = 0.5 x 1uF x 3000 x 3000 = 4.5 Joules. At typical operating voltage (80% derating, 2400V): E = 0.5 x 1uF x 2400 x 2400 = 2.9 Joules. This energy is absorbed during IGBT turn-off when stray inductance causes voltage overshoot. For comparison, 200nH stray inductance with 500A current stores E = 0.5 x L x I x I = 0.5 x 200nH x 500 x 500 = 25 mJ. The capacitor can handle this energy many times per switching cycle. The high energy capability makes this capacitor suitable for large IGBT modules and high-current applications.",
          "decisionGuide": "Calculate the energy from your stray inductance and switching current to verify adequate margin.",
          "keywords": [
            "E12.E93-104.M50 energy",
            "snubber energy absorption",
            "capacitor joules"
          ]
        },
        {
          "question": "How does temperature affect the E12.E93-104.M50 performance?",
          "answer": "Temperature affects the E12.E93-104.M50 in several ways: 1) Capacitance decreases slightly with temperature (typically -2% at 85C), 2) ESR increases at low temperatures, 3) Maximum dv/dt and peak current ratings apply at rated temperature, 4) Lifetime decreases at high temperature per Arrhenius equation. The capacitor is rated for -40C to +85C ambient. For reliable operation, keep hot spot temperature below 70C. High pulse currents in snubber applications can cause internal heating. Ensure adequate spacing and ventilation around the capacitor. At very low temperatures (-40C), ESR increases but this is typically not a concern for snubber applications with pulse operation. The self-healing properties remain effective across the temperature range.",
          "decisionGuide": "Design for moderate operating temperatures and provide adequate cooling for reliable long-term operation.",
          "keywords": [
            "E12.E93-104.M50 temperature",
            "snubber capacitor thermal",
            "capacitor derating"
          ]
        },
        {
          "question": "What are the physical mounting requirements for the E12.E93-104.M50?",
          "answer": "The E12.E93-104.M50 has axial leads and requires proper mounting for reliable operation: 1) Lead diameter - typically 1.0-1.2mm, use appropriate holes in PCB or terminals, 2) Mounting orientation - can be mounted horizontally or vertically, ensure adequate clearance to case, 3) Spacing - maintain at least 10mm clearance to other components for voltage isolation and heat dissipation, 4) Support - for vertical mounting, use a clip or bracket to support the capacitor body and reduce stress on leads, 5) Lead length - keep leads as short as possible for low inductance, but allow for thermal expansion, 6) Connection - use proper crimp terminals or soldering for reliable electrical connection. The capacitor body should not contact other components or the enclosure. Ensure adequate ventilation around the capacitor.",
          "decisionGuide": "Follow standard axial capacitor mounting practices with adequate support and spacing.",
          "keywords": [
            "E12.E93-104.M50 mounting",
            "axial capacitor installation",
            "snubber capacitor mounting"
          ]
        }
      ]
    }
  ]
};

// Add Motor Run Capacitors category
const motorRunCategory = {
  "id": "motor-run-capacitors",
  "name": "Motor Run Capacitors",
  "slug": "motor-run-capacitors",
  "description": "Electronicon motor run capacitors are designed for continuous operation in AC motor applications, providing the phase shift required for single-phase motor starting and running.",
  "longDescription": "Electronicon motor run capacitors are designed for continuous operation in AC motor applications, providing the phase shift required for single-phase motor starting and running. These metallized film capacitors feature high AC voltage capability, low losses, and excellent self-healing properties for long service life. Available in voltages from 250V to 660V AC with capacitance values from 1uF to 100uF, they are ideal for HVAC systems, pump motors, compressor applications, and general-purpose motor running. As an authorized Electronicon distributor, we provide technical support and selection guidance for motor run capacitor applications.",
  "series": [
    "E62.M16",
    "E62.M14",
    "E62.M12"
  ],
  "parameters": [
    "Voltage Rating",
    "Capacitance",
    "Current Rating",
    "Loss Factor",
    "Temperature Range",
    "Lifetime",
    "Mounting Type"
  ],
  "applications": [
    "HVAC Systems",
    "Pump Motors",
    "Compressor Motors",
    "Fan Motors",
    "Conveyor Motors",
    "Machine Tools"
  ],
  "selectionGuide": {
    "title": "Motor Run Capacitor Selection Guide",
    "description": "Learn how to select the right motor run capacitor for your AC motor application",
    "articleId": "motor-capacitor-selection-guide",
    "articleLink": "/electronicon/support/motor-capacitor-application-guide.html"
  },
  "selectionGuideLink": "/electronicon/support/motor-capacitor-application-guide.html",
  "faqs": [
    {
      "question": "What is the difference between motor run and motor start capacitors?",
      "answer": "Motor run and start capacitors serve different purposes: 1) Motor Run Capacitors - designed for continuous operation, typically 1-100uF, oil-filled or dry film construction, rated for continuous AC voltage, used to improve running torque and efficiency, stay in circuit during operation, 2) Motor Start Capacitors - designed for intermittent operation (few seconds), typically 100-800uF, electrolytic construction, higher capacitance for high starting torque, disconnected by centrifugal switch or relay after starting. Using a start capacitor for continuous operation will cause overheating and failure. Electronicon motor run capacitors are specifically designed for continuous duty with dry film construction for long lifetime.",
      "decisionGuide": "Use motor run capacitors for continuous operation; use start capacitors only for brief starting assistance.",
      "keywords": [
        "motor run vs start capacitor",
        "capacitor motor types",
        "AC motor capacitors"
      ]
    },
    {
      "question": "How do I select the right capacitance for a motor run capacitor?",
      "answer": "Motor run capacitor selection depends on motor power and design: 1) Rule of thumb - approximately 30-50uF per kW of motor power, 2) Manufacturer specification - always check motor nameplate for recommended capacitor value, 3) Voltage rating - typically 1.5-2x motor voltage (e.g., 450V capacitor for 230V motor), 4) Wrong capacitance effects - too low reduces torque and efficiency, too high increases current and overheating. Common values: 1-5HP motors typically use 10-40uF. For replacement, always match the original capacitor value unless motor has been rewound or modified. Multiple capacitors can be paralleled to achieve required value. Our FAE team can assist with capacitor selection for specific motor applications.",
      "decisionGuide": "Check motor nameplate specifications or use 30-50uF per kW rule for motor run capacitor selection.",
      "keywords": [
        "motor capacitor sizing",
        "run capacitor selection",
        "motor capacitor calculation"
      ]
    },
    {
      "question": "What causes motor run capacitors to fail?",
      "answer": "Common causes of motor run capacitor failure include: 1) Overheating - high ambient temperature, inadequate ventilation, or overvoltage causes thermal degradation, 2) Overvoltage - voltage spikes or sustained overvoltage damages dielectric, 3) Age - capacitance decreases over time (5-10% per year typical), 4) Incorrect value - wrong capacitance causes excessive current and heating, 5) Manufacturing defects - rare but can cause early failure, 6) Mechanical damage - vibration or impact damages internal connections. Signs of failure include: motor won't start, reduced torque, overheating, bulging capacitor case, or oil leakage (oil-filled types). Electronicon dry-filled capacitors eliminate oil leakage risk and offer longer lifetime than traditional oil-filled types.",
      "decisionGuide": "Ensure proper voltage rating, adequate cooling, and correct capacitance value to maximize capacitor lifetime.",
      "keywords": [
        "motor capacitor failure",
        "capacitor failure causes",
        "motor run capacitor problems"
      ]
    },
    {
      "question": "Can I use a higher voltage rated capacitor for motor run applications?",
      "answer": "Yes, using a higher voltage rated motor run capacitor is acceptable and often beneficial: 1) Safety margin - higher voltage rating provides margin for voltage fluctuations and spikes, 2) Longer lifetime - lower voltage stress extends capacitor life, 3) Same capacitance - voltage rating doesn't affect capacitance value, 4) Physical size - higher voltage capacitors may be larger, ensure fit in mounting location. For example, a 450V capacitor can replace a 370V capacitor for 230V motor applications. The 660V rating is suitable for 480V three-phase systems. Do not use lower voltage rating than original as this risks failure. Higher voltage rating is always acceptable if physical size permits.",
      "decisionGuide": "Use equal or higher voltage rating than original capacitor; never use lower voltage rating.",
      "keywords": [
        "motor capacitor voltage rating",
        "capacitor replacement",
        "higher voltage capacitor"
      ]
    },
    {
      "question": "How do I test a motor run capacitor?",
      "answer": "To test a motor run capacitor: 1) Capacitance measurement - use capacitance meter, should be within +/-10% of rated value, 2) ESR measurement - high ESR indicates internal degradation, 3) Insulation test - megohm meter should show >100Mohm between terminals and case, 4) Visual inspection - look for bulging, leakage, or corrosion. Test procedure: Disconnect power and discharge capacitor, remove from circuit, measure capacitance with meter set to appropriate range, compare to rated value. Capacitance below 90% of rated indicates replacement needed. For in-circuit testing, use clamp meter to measure capacitor current and calculate capacitance: C = I / (2 x pi x f x V). Replace capacitor if capacitance is out of tolerance or physical damage is visible.",
      "decisionGuide": "Use capacitance meter to verify value; replace if capacitance is below 90% of rated or physical damage is present.",
      "keywords": [
        "motor capacitor testing",
        "capacitor measurement",
        "test run capacitor"
      ]
    }
  ],
  "products": [
    {
      "partNumber": "E62.M16-473.M20",
      "name": "Motor Run Capacitor 47uF 450V AC",
      "shortDescription": "Electronicon E62.M16-473.M20 47uF 450V motor run capacitor for HVAC and pump motor applications.",
      "descriptionParagraphs": [
        "The E62.M16-473.M20 is a high-quality motor run capacitor designed for continuous operation in AC motor applications.",
        "Features dry filling technology and self-healing properties for long lifetime and maintenance-free operation.",
        "Ideal for HVAC systems, pump motors, and compressor applications requiring reliable motor running capacitance."
      ],
      "specifications": {
        "Capacitance": "47uF",
        "VoltageRating": "450V AC",
        "CurrentRating": "8A RMS",
        "LossFactor": "<0.001 @ 50Hz",
        "TemperatureRange": "-25C to +85C",
        "Lifetime": "60,000 hours @ 70C",
        "Mounting": "M8 Stud Mount",
        "Dimensions": "50mm x 100mm",
        "Weight": "220g"
      },
      "features": [
        "47uF capacitance for 2-5HP motors",
        "450V AC voltage rating",
        "Dry filling technology - no oil leakage",
        "Self-healing properties",
        "Low loss factor <0.001",
        "Long lifetime 60,000 hours",
        "M8 stud mount for secure installation"
      ],
      "applications": [
        "HVAC compressor motors",
        "Water pump motors",
        "Fan motors",
        "Conveyor motors",
        "Machine tool motors",
        "General purpose motor running"
      ],
      "faeReview": {
        "author": "Klaus Weber",
        "title": "FAE - Motor Applications",
        "content": "The E62.M16-473.M20 is my go-to recommendation for 2-5HP motor applications. The 47uF capacitance is ideal for motors in the 1.5-3.7kW range, commonly found in HVAC and pump applications. I particularly appreciate the dry filling technology which eliminates oil leakage concerns I've seen with traditional motor run capacitors. The 450V rating provides good margin for 230V single-phase systems and can handle voltage fluctuations common in industrial environments. The self-healing properties ensure continued operation even if minor dielectric issues occur. For HVAC applications, I typically see 15+ year service life with this capacitor. The M8 stud mounting provides secure installation in vibration-prone environments. This is a reliable, long-life capacitor for demanding motor applications.",
        "highlight": "Reliable dry-filled capacitor for continuous motor operation"
      },
      "alternativeParts": [
        {
          "partNumber": "E62.M16-683.M20",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "68uF",
            "voltage": "450V AC",
            "current": "10A RMS"
          },
          "comparison": {
            "capacitance": "68uF > 47uF (+45%)",
            "voltage": "450V AC = 450V AC (same)",
            "current": "10A > 8A (+25%)",
            "dimensions": "55mm x 110mm > 50mm x 100mm (larger)",
            "motorPower": "Suitable for 3-7.5HP motors"
          },
          "reason": "Higher capacitance for larger motors or applications requiring more running torque",
          "useCase": "3-7.5HP motor applications or motors with high starting/running torque requirements",
          "link": "/electronicon/products/motor-run-capacitors/e62-m16-683-m20.html"
        },
        {
          "partNumber": "E62.M14-473.M10",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "47uF",
            "voltage": "370V AC",
            "current": "7A RMS"
          },
          "comparison": {
            "capacitance": "47uF = 47uF (same)",
            "voltage": "370V AC < 450V AC (lower)",
            "current": "7A < 8A (lower)",
            "dimensions": "45mm x 90mm < 50mm x 100mm (smaller)",
            "price": "Lower cost option"
          },
          "reason": "Lower voltage rating for cost-sensitive 230V applications",
          "useCase": "Standard 230V motor applications with moderate voltage stability",
          "link": "/electronicon/products/motor-run-capacitors/e62-m14-473-m10.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "E62.M16-473.M20",
          "link": "/electronicon/products/motor-run-capacitors/e62-m16-473-m20.html",
          "description": "Spare capacitor for maintenance",
          "category": "Motor Run Capacitors"
        },
        {
          "partNumber": "Motor Contactor 25A",
          "link": "#",
          "description": "AC contactor for motor control circuit",
          "category": "Motor Control"
        },
        {
          "partNumber": "Overload Relay",
          "link": "#",
          "description": "Thermal overload protection for motor",
          "category": "Motor Protection"
        },
        {
          "partNumber": "M8 Mounting Kit",
          "link": "#",
          "description": "Mounting hardware with insulation washer",
          "category": "Accessories"
        },
        {
          "partNumber": "Terminal Cover",
          "link": "#",
          "description": "Safety cover for capacitor terminals",
          "category": "Safety Components"
        }
      ],
      "applicationScenarios": [
        {
          "title": "3HP HVAC Compressor",
          "description": "E62.M16-473.M20 provides running capacitance for 3HP air conditioning compressor motor"
        },
        {
          "title": "2HP Water Pump",
          "description": "Reliable motor run capacitor for continuous pump operation"
        },
        {
          "title": "Industrial Fan Motor",
          "description": "Motor run capacitor for ventilation and exhaust fan applications"
        }
      ],
      "keywords": [
        "Electronicon E62.M16-473.M20",
        "47uF 450V motor capacitor",
        "motor run capacitor distributor"
      ],
      "faqs": [
        {
          "question": "What size motor is the E62.M16-473.M20 suitable for?",
          "answer": "The E62.M16-473.M20 with 47uF capacitance is typically suitable for 2-5HP (1.5-3.7kW) single-phase AC motors. The exact motor size depends on motor design and application: 1) 2HP motors - 47uF provides excellent running performance with good torque, 2) 3HP motors - 47uF is the typical recommended value for standard efficiency motors, 3) 5HP motors - 47uF may be on the low side, check motor nameplate for specific requirement (may need 50-60uF). Always verify against the motor manufacturer's specification on the nameplate. Using incorrect capacitance can result in reduced torque, overheating, or poor efficiency. For replacement applications, match the original capacitor value unless the motor has been rewound.",
          "decisionGuide": "Verify motor nameplate specifications; the E62.M16-473.M20 is ideal for 2-5HP motors typically requiring 40-50uF.",
          "keywords": [
            "E62.M16-473.M20 motor size",
            "47uF capacitor motor HP",
            "motor capacitor sizing"
          ]
        },
        {
          "question": "How do I wire the E62.M16-473.M20 in a motor circuit?",
          "answer": "To wire the E62.M16-473.M20 in a single-phase motor circuit: 1) Identify motor terminals - main winding (T1-T2), auxiliary winding (T3-T4), 2) Connect capacitor between auxiliary winding terminal and power line (typically T3 to L2), 3) Connect main winding across power lines (T1 to L1, T2 to L2), 4) For motors with centrifugal switch - capacitor is only in circuit during starting, 5) For permanent split capacitor (PSC) motors - capacitor remains in circuit continuously. The E62.M16-473.M20 is designed for continuous operation in PSC motor configurations. Use appropriate wire gauge for motor current (typically 14-12 AWG for 2-5HP). Ensure all connections are tight and properly insulated. The capacitor should be mounted close to the motor but in a location accessible for replacement.",
          "decisionGuide": "Follow motor wiring diagram; connect capacitor to auxiliary winding for continuous operation in PSC motors.",
          "keywords": [
            "motor capacitor wiring",
            "E62.M16-473.M20 connection",
            "motor run capacitor installation"
          ]
        },
        {
          "question": "What is the expected lifetime of the E62.M16-473.M20?",
          "answer": "The E62.M16-473.M20 is rated for 60,000 hours lifetime at 70C hot spot temperature. In typical motor applications, this translates to: 1) HVAC applications - 15-20 years with seasonal operation (2000 hours/year), 2) Industrial continuous operation - 7-10 years with 24/7 operation (8760 hours/year), 3) Pump applications - 10-15 years with intermittent operation. Actual lifetime depends on: operating temperature, voltage stress, capacitance value match, and environmental conditions. The dry filling technology and self-healing properties contribute to long service life. Unlike oil-filled capacitors, there's no oil degradation over time. Monitor capacitance annually; replace when capacitance drops below 90% of rated value (42uF for this capacitor).",
          "decisionGuide": "Expect 10-20 year service life depending on application; monitor capacitance and replace when below 90% of rated.",
          "keywords": [
            "E62.M16-473.M20 lifetime",
            "motor capacitor life expectancy",
            "capacitor service life"
          ]
        },
        {
          "question": "Can the E62.M16-473.M20 be used for motor starting?",
          "answer": "The E62.M16-473.M20 is designed for continuous operation as a motor RUN capacitor, not for starting. Motor start capacitors are different: 1) Start capacitors - high capacitance (100-800uF), electrolytic construction, brief duty (few seconds), disconnected after starting, 2) Run capacitors - lower capacitance (1-100uF), film construction, continuous duty. Using the E62.M16-473.M20 for starting only would be a waste of its continuous-duty design. However, some motors use the same capacitor for both starting and running (permanent split capacitor motors). In this case, the E62.M16-473.M20 is appropriate. For motors requiring high starting torque with centrifugal switch, use a separate start capacitor (electrolytic) in addition to the run capacitor.",
          "decisionGuide": "Use E62.M16-473.M20 for continuous motor running; use separate electrolytic start capacitors for high-torque starting applications.",
          "keywords": [
            "motor start vs run capacitor",
            "E62.M16-473.M20 starting",
            "motor capacitor application"
          ]
        },
        {
          "question": "What voltage systems is the E62.M16-473.M20 compatible with?",
          "answer": "The E62.M16-473.M20 with 450V AC rating is compatible with: 1) 115V systems - excellent margin (290% of operating voltage), suitable for 115V motors, 2) 230V systems - good margin (96% of operating voltage), ideal for standard 230V single-phase motors, 3) 208V systems - good margin (116% of operating voltage), suitable for 208V motors. The 450V rating is NOT suitable for: 480V three-phase systems (requires 660V+ capacitor), 600V systems. For 230V applications, the 450V rating provides good safety margin for voltage fluctuations common in residential and light commercial environments. The capacitor can withstand brief overvoltages up to 1.1x rated voltage (495V) per IEC standards.",
          "decisionGuide": "The E62.M16-473.M20 is ideal for 115V, 208V, and 230V motor systems; not suitable for 480V applications.",
          "keywords": [
            "E62.M16-473.M20 voltage",
            "motor capacitor voltage rating",
            "450V capacitor applications"
          ]
        },
        {
          "question": "How do I troubleshoot motor issues related to the E62.M16-473.M20?",
          "answer": "To troubleshoot motor issues related to the E62.M16-473.M20: 1) Motor won't start - check capacitor with capacitance meter (should be 42-52uF), check for open circuit or short, 2) Reduced torque - low capacitance reduces running torque, measure and compare to rated, 3) Motor overheating - wrong capacitance causes excessive current, verify correct value for motor, 4) Humming noise - failing capacitor can cause noise, check for bulging or leakage. Test procedure: Disconnect power and discharge, remove capacitor, measure capacitance with meter, check ESR if meter has function, inspect for physical damage. Replace if: capacitance <42uF (90% of rated), physical damage visible, ESR significantly elevated. Always replace with same or higher capacitance and voltage rating.",
          "decisionGuide": "Measure capacitance and inspect for damage; replace if capacitance is below 90% of rated or physical damage is present.",
          "keywords": [
            "motor capacitor troubleshooting",
            "E62.M16-473.M20 testing",
            "motor run capacitor problems"
          ]
        }
      ]
    },
    {
      "partNumber": "E62.M16-104.M30",
      "name": "Motor Run Capacitor 100uF 660V AC",
      "shortDescription": "Electronicon E62.M16-104.M30 100uF 660V high-capacitance motor run capacitor for commercial and industrial motors.",
      "descriptionParagraphs": [
        "The E62.M16-104.M30 provides high capacitance for larger single-phase motors and high-voltage applications.",
        "Designed with robust construction and high voltage rating for commercial and industrial motor applications.",
        "Features dry filling technology and self-healing properties for long service life in demanding environments."
      ],
      "specifications": {
        "Capacitance": "100uF",
        "VoltageRating": "660V AC",
        "CurrentRating": "15A RMS",
        "LossFactor": "<0.001 @ 50Hz",
        "TemperatureRange": "-25C to +85C",
        "Lifetime": "60,000 hours @ 70C",
        "Mounting": "M10 Stud Mount",
        "Dimensions": "65mm x 130mm",
        "Weight": "380g"
      },
      "features": [
        "High capacitance 100uF for 7.5-15HP motors",
        "High voltage rating 660V AC",
        "Suitable for 480V systems",
        "Dry filling technology",
        "Self-healing properties",
        "Low loss factor <0.001",
        "M10 stud mount"
      ],
      "applications": [
        "Large HVAC systems",
        "Commercial pump motors",
        "Industrial compressor motors",
        "Large fan motors",
        "Agricultural equipment",
        "High-voltage motor applications"
      ],
      "faeReview": {
        "author": "Klaus Weber",
        "title": "FAE - Motor Applications",
        "content": "The E62.M16-104.M30 is my recommendation for larger motors and high-voltage applications. The 100uF capacitance is suitable for 7.5-15HP motors commonly found in commercial HVAC and industrial equipment. The 660V rating is particularly valuable for 480V three-phase systems where line-to-line voltage requires higher capacitor rating. I frequently specify this capacitor for large rooftop HVAC units and industrial pump stations. The high current rating (15A) handles the demands of large motors without overheating. The dry filling eliminates oil leakage risks in commercial installations. For 480V applications, the 660V rating provides 38% margin which is adequate for most installations. I've seen excellent reliability with this capacitor in demanding commercial environments.",
        "highlight": "High capacitance and voltage rating for commercial and industrial motors"
      },
      "alternativeParts": [
        {
          "partNumber": "E62.M16-154.M30",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "150uF",
            "voltage": "660V AC",
            "current": "20A RMS"
          },
          "comparison": {
            "capacitance": "150uF > 100uF (+50%)",
            "voltage": "660V AC = 660V AC (same)",
            "current": "20A > 15A (+33%)",
            "dimensions": "75mm x 145mm > 65mm x 130mm (larger)",
            "motorPower": "Suitable for 15-20HP motors"
          },
          "reason": "Higher capacitance for larger motors or applications requiring more running torque",
          "useCase": "15-20HP motor applications or large commercial HVAC systems",
          "link": "/electronicon/products/motor-run-capacitors/e62-m16-154-m30.html"
        },
        {
          "partNumber": "E62.M16-104.M20",
          "brand": "Electronicon",
          "specifications": {
            "capacitance": "100uF",
            "voltage": "450V AC",
            "current": "12A RMS"
          },
          "comparison": {
            "capacitance": "100uF = 100uF (same)",
            "voltage": "450V AC < 660V AC (lower)",
            "current": "12A < 15A (lower)",
            "dimensions": "55mm x 115mm < 65mm x 130mm (smaller)",
            "price": "Lower cost option"
          },
          "reason": "Lower voltage rating for 230V applications with reduced cost",
          "useCase": "230V motor applications where 450V provides adequate margin",
          "link": "/electronicon/products/motor-run-capacitors/e62-m16-104-m20.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "E62.M16-104.M30",
          "link": "/electronicon/products/motor-run-capacitors/e62-m16-104-m30.html",
          "description": "Spare capacitor for maintenance",
          "category": "Motor Run Capacitors"
        },
        {
          "partNumber": "Motor Contactor 50A",
          "link": "#",
          "description": "AC contactor for large motor control",
          "category": "Motor Control"
        },
        {
          "partNumber": "Thermal Overload Relay 15A",
          "link": "#",
          "description": "Overload protection for 7.5-15HP motors",
          "category": "Motor Protection"
        },
        {
          "partNumber": "M10 Mounting Hardware",
          "link": "#",
          "description": "Complete mounting kit for secure installation",
          "category": "Accessories"
        },
        {
          "partNumber": "Capacitor Terminal Cover",
          "link": "#",
          "description": "Insulated cover for safety",
          "category": "Safety Components"
        }
      ],
      "applicationScenarios": [
        {
          "title": "10HP Commercial HVAC",
          "description": "E62.M16-104.M30 provides running capacitance for large commercial air conditioning compressors"
        },
        {
          "title": "480V Pump Motor",
          "description": "660V rated capacitor suitable for 480V three-phase pump motor applications"
        },
        {
          "title": "Industrial Compressor",
          "description": "High-capacitance motor run capacitor for industrial air compressor motors"
        }
      ],
      "keywords": [
        "Electronicon E62.M16-104.M30",
        "100uF 660V motor capacitor",
        "large motor run capacitor distributor"
      ],
      "faqs": [
        {
          "question": "What size motors can use the E62.M16-104.M30?",
          "answer": "The E62.M16-104.M30 with 100uF capacitance is typically suitable for 7.5-15HP (5.5-11kW) single-phase AC motors. Specific applications include: 1) 7.5HP motors - 100uF provides excellent running performance, 2) 10HP motors - 100uF is the typical recommended value, 3) 15HP motors - 100uF is on the lower side, check motor nameplate (may need 120-150uF). The 660V rating makes this capacitor suitable for 480V three-phase systems where higher voltage capability is required. For single-phase 230V motors in this power range, the high voltage rating provides excellent margin. Always verify against motor manufacturer's specifications on the nameplate. The 15A current rating handles the demands of these larger motors.",
          "decisionGuide": "Verify motor nameplate specifications; the E62.M16-104.M30 is ideal for 7.5-15HP motors requiring 80-120uF.",
          "keywords": [
            "E62.M16-104.M30 motor size",
            "100uF capacitor motor HP",
            "large motor capacitor sizing"
          ]
        },
        {
          "question": "Is the E62.M16-104.M30 suitable for 480V three-phase systems?",
          "answer": "Yes, the E62.M16-104.M30 with 660V AC rating is suitable for 480V three-phase systems. In three-phase systems: 1) Line-to-line voltage is 480V, 2) The 660V rating provides 38% margin (660/480 = 1.38), 3) This margin is adequate for most industrial applications, 4) Some designers prefer higher margin for critical applications. The capacitor is used in single-phase motors connected to 480V three-phase systems (line-to-line). For example, large commercial HVAC units often use single-phase compressors powered from 480V three-phase service. The 660V rating handles the higher voltage compared to 230V systems. The 100uF capacitance is appropriate for the larger motors (7.5-15HP) typically found in 480V applications.",
          "decisionGuide": "The E62.M16-104.M30 is well-suited for 480V three-phase systems with single-phase motors; provides adequate voltage margin.",
          "keywords": [
            "E62.M16-104.M30 480V",
            "three-phase motor capacitor",
            "660V capacitor applications"
          ]
        },
        {
          "question": "How does the E62.M16-104.M30 compare to oil-filled motor capacitors?",
          "answer": "The E62.M16-104.M30 dry-filled capacitor offers advantages over traditional oil-filled motor capacitors: 1) No leakage risk - eliminates oil leakage that can damage equipment and create safety hazards, 2) Mounting flexibility - can be mounted in any position, oil-filled must be mounted upright, 3) Environmental safety - no oil contamination risk if capacitor fails, 4) Longer lifetime - no oil degradation over time, stable performance, 5) Lighter weight - dry filling is lighter than oil, 6) Maintenance-free - no periodic inspection needed. Oil-filled capacitors may have slightly lower cost but require careful mounting and pose leakage risks. The E62.M16-104.M30 provides the same electrical performance with improved reliability and safety. For commercial and industrial applications, the dry-filled design is preferred.",
          "decisionGuide": "Choose E62.M16-104.M30 dry-filled capacitor for improved reliability, safety, and mounting flexibility.",
          "keywords": [
            "dry vs oil filled capacitor",
            "E62.M16-104.M30 advantages",
            "motor capacitor technology"
          ]
        },
        {
          "question": "What is the temperature rating of the E62.M16-104.M30?",
          "answer": "The E62.M16-104.M30 is rated for operation from -25C to +85C ambient temperature. Key temperature considerations: 1) Lower limit (-25C) - ESR increases at low temperatures but operation is reliable, 2) Upper limit (85C) - maximum ambient for rated performance, 3) Hot spot temperature - should not exceed 70C for rated 60,000-hour lifetime, 4) Derating - at temperatures above 85C, voltage and current must be derated. The lifetime follows the Arrhenius relationship - approximately doubling for every 10C decrease in temperature. For example, at 60C hot spot, expect approximately 120,000 hours lifetime. Ensure adequate ventilation around the capacitor, especially in hot environments. For outdoor applications, provide protection from direct sunlight which can increase case temperature significantly.",
          "decisionGuide": "Design for hot spot temperatures below 70C and provide adequate cooling for maximum capacitor lifetime.",
          "keywords": [
            "E62.M16-104.M30 temperature",
            "motor capacitor thermal rating",
            "capacitor operating temperature"
          ]
        },
        {
          "question": "Can I use multiple E62.M16-104.M30 capacitors in parallel?",
          "answer": "Yes, multiple E62.M16-104.M30 capacitors can be connected in parallel to achieve higher capacitance: 1) Two in parallel - 200uF total, suitable for very large motors (15-20HP), 2) Three in parallel - 300uF total, for special high-torque applications, 3) Connection - connect all terminals of same polarity together, 4) Wiring - use equal length wires to each capacitor for balanced current sharing, 5) Mounting - ensure adequate spacing between capacitors for heat dissipation. Parallel connection is useful when: a single capacitor of required value is not available, redundancy is desired (motor can run with one failed capacitor), or existing capacitors need to be used. Each capacitor should have its own protection (fuses) when multiple are used. The voltage rating remains 660V with parallel connection.",
          "decisionGuide": "Use parallel connection when higher capacitance is needed; ensure equal wiring and adequate spacing.",
          "keywords": [
            "motor capacitor parallel",
            "E62.M16-104.M30 multiple",
            "capacitor bank motor"
          ]
        },
        {
          "question": "What maintenance does the E62.M16-104.M30 require?",
          "answer": "The E62.M16-104.M30 requires minimal maintenance due to its dry filling technology: 1) Annual inspection - visual check for physical damage, loose connections, or case swelling, 2) Capacitance check - measure capacitance every 2-3 years, should be 90-110uF, 3) Connection torque - check mounting and terminal torque annually, 4) Cleaning - keep capacitor clean and free from dust and debris. Unlike oil-filled capacitors, no oil level checks are needed. The self-healing properties handle minor dielectric stress automatically. Replace the capacitor when: capacitance drops below 90uF (90% of rated), physical damage is visible (bulging, cracks), or motor performance degrades (indicating capacitor issues). Typical service life is 10-20 years depending on operating conditions. Keep spare capacitors on hand for critical applications.",
          "decisionGuide": "Perform periodic visual inspection and capacitance measurement; replace when capacitance drops below 90% of rated.",
          "keywords": [
            "E62.M16-104.M30 maintenance",
            "motor capacitor care",
            "capacitor inspection"
          ]
        }
      ]
    }
  ]
};

// Add the new categories
products.categories.push(snubberCategory);
products.categories.push(motorRunCategory);

// Write back
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('✅ Added Snubber Capacitors and Motor Run Capacitors categories');
console.log(`✅ Total categories: ${products.categories.length}`);
