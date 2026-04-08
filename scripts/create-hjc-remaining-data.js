const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hjc');

// Create solutions.json
const solutionsData = {
  "seoTitle": "HJC Capacitor Solutions | Automotive, Industrial, Consumer Applications",
  "seoDescription": "Discover HJC capacitor solutions for automotive electronics, industrial automation, consumer devices, and renewable energy. Application engineering support available.",
  "seoKeywords": [
    "HJC solutions distributor",
    "HJC automotive capacitors",
    "HJC industrial capacitor solutions",
    "capacitor application support"
  ],
  "solutions": [
    {
      "id": "automotive-electronics-solutions",
      "name": "Automotive Electronics Solutions",
      "specifications": {
        "Temperature Range": "-55°C to +150°C",
        "Voltage Range": "6.3V to 500V",
        "Qualification": "AEC-Q200, IATF 16949",
        "Capacitance Range": "0.1pF to 100,000µF"
      },
      "title": "Automotive Electronics Capacitor Solutions",
      "slug": "automotive-electronics-solutions",
      "longDescription": "HJC provides comprehensive capacitor solutions for automotive applications including EV powertrains, ADAS systems, battery management, and infotainment. Our AEC-Q200 qualified MLCCs, aluminum electrolytics, and film capacitors meet the stringent requirements of modern automotive electronics. With IATF 16949 certification and extensive automotive experience, HJC capacitors deliver the reliability and performance needed for safety-critical applications.",
      "coreAdvantages": [
        {
          "title": "AEC-Q200 Qualified Products",
          "description": "Full automotive qualification for passive components"
        },
        {
          "title": "Wide Temperature Range",
          "description": "Operation from -55°C to +150°C for under-hood applications"
        },
        {
          "title": "High Reliability",
          "description": "Zero defect quality with full traceability"
        },
        {
          "title": "Flexible Terminations",
          "description": "Soft termination technology prevents board flex cracking"
        },
        {
          "title": "Long Lifetime",
          "description": "15+ year service life for automotive applications"
        },
        {
          "title": "Cost Competitive",
          "description": "Automotive grade at competitive pricing"
        }
      ],
      "bomList": [
        {
          "partNumber": "HJC-0805-50V-104K-X7R-A",
          "description": "AEC-Q200 MLCC for decoupling",
          "quantity": 20,
          "link": "/hjc/products/mlcc/hjc-0805-50v-104k-x7r.html"
        },
        {
          "partNumber": "HJC-ELKO-100uF-50V-A",
          "description": "Automotive electrolytic for power filtering",
          "quantity": 4,
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-100uf-50v.html"
        },
        {
          "partNumber": "HJC-CBB21-105J-400V",
          "description": "Film capacitor for DC-link",
          "quantity": 2,
          "link": "/hjc/products/film-capacitors/hjc-cbb21-105j-400v.html"
        }
      ],
      "technicalSpecs": {
        "Operating Temperature": "-55°C to +150°C",
        "Storage Temperature": "-55°C to +150°C",
        "Humidity Range": "0% to 95% RH non-condensing",
        "Vibration": "MIL-STD-202 Method 204",
        "Mechanical Shock": "MIL-STD-202 Method 213",
        "Thermal Cycling": "1000 cycles -55°C to +150°C"
      },
      "customerCases": [
        {
          "title": "EV Battery Management System",
          "description": "HJC AEC-Q200 MLCCs provide reliable voltage monitoring and filtering in a major OEM's BMS",
          "results": "Zero field failures over 3 years production"
        },
        {
          "title": "ADAS Camera Module",
          "description": "High-temperature X8R MLCCs enable reliable operation in forward-facing cameras",
          "results": "Passed all automotive qualification tests"
        }
      ],
      "faqs": [
        {
          "question": "What automotive certifications does HJC have?",
          "answer": "HJC maintains comprehensive automotive certifications: 1) IATF 16949 - Automotive Quality Management System covering design, development, production, and service, 2) AEC-Q200 Qualification - For passive components including temperature cycling, mechanical shock, vibration, and humidity testing, 3) ISO 9001 - General quality management, 4) ISO 14001 - Environmental management. HJC's automotive capacitors undergo 100% screening including electrical testing, visual inspection, and dimensional verification. Full PPAP documentation (Level 3) is available including control plans, FMEA, and MSA studies.",
          "decisionGuide": "Request PPAP documentation and qualification reports for automotive projects; all HJC automotive products are fully certified.",
          "keywords": ["HJC automotive certification", "AEC-Q200 qualification", "IATF 16949"]
        },
        {
          "question": "Which HJC capacitors are suitable for EV applications?",
          "answer": "HJC offers several capacitor types for EV applications: 1) X8R MLCCs - For battery management systems, motor controllers, and onboard chargers operating up to 150°C, 2) High-Temperature Electrolytics - For powertrain applications requiring long life at high temperatures, 3) Film Capacitors - For DC-link filtering in inverters and onboard chargers, 4) Supercapacitors - For regenerative braking energy storage and 12V backup systems. Key specifications for EV: Voltage ratings up to 1000V for high-voltage systems, Temperature ratings to 150°C for power electronics, AEC-Q200 qualification for all safety-critical applications, High ripple current capability for inverter output filtering.",
          "decisionGuide": "Contact our automotive FAE for EV-specific capacitor recommendations based on your voltage and temperature requirements.",
          "keywords": ["EV capacitors", "electric vehicle components", "HJC EV solutions"]
        },
        {
          "question": "What is the difference between X7R and X8R dielectrics?",
          "answer": "X7R and X8R are both Class II ceramic dielectrics with different temperature ranges: 1) X7R - Temperature range -55°C to +125°C, capacitance change ±15% over range, suitable for most automotive interior applications, 2) X8R - Temperature range -55°C to +150°C, capacitance change ±15% over range, required for under-hood and powertrain applications. Selection guide: Use X7R for infotainment, body electronics, and cabin applications; use X8R for engine compartment, motor drives, battery systems, and LED headlamps. X8R capacitors have slightly higher cost but are essential for high-temperature automotive applications. Both dielectrics are available with AEC-Q200 qualification and flexible terminations.",
          "decisionGuide": "Use X8R for temperatures above 125°C; X7R is sufficient for interior applications up to 125°C.",
          "keywords": ["X7R vs X8R", "automotive MLCC dielectric", "high temperature capacitor"]
        },
        {
          "question": "Does HJC provide PPAP documentation?",
          "answer": "Yes, HJC provides full PPAP (Production Part Approval Process) documentation for automotive customers: 1) Level 3 PPAP - Includes all customer requirements including submission of actual measurement data, 2) Documentation Package - Design records, engineering change documents, customer engineering approval, design FMEA, process flow diagram, process FMEA, control plan, measurement system analysis, dimensional results, material/performance test records, initial process studies, qualified laboratory documentation, appearance approval report, sample production parts, master sample, checking aids, and customer-specific requirements. Lead time for PPAP is typically 4-6 weeks after sample approval. Contact our automotive sales team to initiate PPAP for your project.",
          "decisionGuide": "Request PPAP Level 3 for all automotive production parts; allow 4-6 weeks for completion.",
          "keywords": ["HJC PPAP", "automotive documentation", "production part approval"]
        },
        {
          "question": "What is flexible termination and when should I use it?",
          "answer": "Flexible termination (soft termination) is a technology that reduces stress on ceramic capacitors from board flexure: 1) Construction - A compliant polymer layer between the ceramic body and metal termination absorbs mechanical stress, 2) Benefits - Prevents cracking from PCB bending, thermal cycling, and vibration, 3) Applications - Required for high-stress locations: large case sizes (1210 and above), under-hood applications, high-vibration areas, large temperature cycling ranges. HJC offers flexible termination options on most automotive MLCCs. Identification: Part number suffix or specific series designation. Testing: Flexible termination capacitors pass additional board flex testing per AEC-Q200. Cost: Approximately 10-15% premium over standard termination.",
          "decisionGuide": "Use flexible termination for case sizes ≥1210, under-hood applications, and high-vibration environments.",
          "keywords": ["flexible termination", "soft termination MLCC", "automotive capacitor mounting"]
        },
        {
          "question": "How does HJC ensure traceability for automotive parts?",
          "answer": "HJC maintains complete lot traceability for all automotive capacitors: 1) Lot Number System - Each production lot has unique identifier traceable to raw materials, production date, equipment, and operators, 2) COFC Documentation - Certificate of Fitness for Conformance provides lot-specific test data, 3) Material Traceability - Ceramic powders, electrodes, and terminations are traced to suppliers and incoming inspection, 4) Production Records - Complete manufacturing data including process parameters and inspection results, 5) Test Data - Electrical test results for each lot including capacitance, dissipation factor, insulation resistance, and dielectric withstanding voltage. Retention period: 15+ years for automotive parts. Customers can request lot-specific data and certificates for quality management and failure analysis.",
          "decisionGuide": "Request COFC and lot traceability data with each shipment for automotive production.",
          "keywords": ["HJC traceability", "automotive lot control", "capacitor COFC"]
        }
      ],
      "faeInsights": {
        "author": "David Chen",
        "title": "Senior FAE - Automotive Electronics",
        "content": "Having supported automotive capacitor applications for over 12 years, I've seen the evolution from basic under-hood requirements to the complex needs of modern EVs and ADAS systems. The key insight for automotive design is that capacitor selection must consider the entire vehicle lifetime - 15 years and 300,000 kilometers in harsh conditions. I always recommend X8R dielectrics for any powertrain application, even if current temperatures seem moderate, because vehicle packaging is getting tighter and thermal management is challenging. For BMS applications, voltage derating is critical - I specify at least 100V capacitors for 48V systems to handle transients. The flexible termination technology HJC offers has virtually eliminated the cracking issues we used to see with large case sizes. When designing for automotive, always plan for worst-case conditions rather than nominal - the capacitors will see those extremes.",
        "keyTakeaways": [
          "Use X8R for all powertrain and under-hood applications",
          "Apply 50% voltage derating for high-reliability automotive designs",
          "Specify flexible termination for case sizes 1210 and larger",
          "Plan for 15-year vehicle lifetime in all calculations",
          "Request full PPAP documentation early in the design cycle"
        ],
        "decisionFramework": {
          "title": "Automotive Capacitor Selection Framework",
          "steps": [
            "Identify maximum operating temperature including self-heating and ambient",
            "Select dielectric type: X8R for >125°C, X7R for ≤125°C",
            "Calculate required voltage rating with 50% derating margin",
            "Determine case size based on capacitance needs and board space",
            "Specify flexible termination for high-stress locations",
            "Verify AEC-Q200 qualification and request PPAP documentation",
            "Plan for thermal management to keep capacitors within rating"
          ]
        }
      }
    },
    {
      "id": "industrial-automation-solutions",
      "name": "Industrial Automation Solutions",
      "specifications": {
        "Temperature Range": "-40°C to +105°C",
        "Voltage Range": "6.3V to 550V",
        "Lifetime": "Up to 15,000 hours",
        "Capacitance Range": "0.1pF to 100,000µF"
      },
      "title": "Industrial Automation Capacitor Solutions",
      "slug": "industrial-automation-solutions",
      "longDescription": "HJC provides capacitor solutions for industrial automation including motor drives, PLCs, power supplies, and control systems. Our long-life electrolytics, high-ripple film capacitors, and reliable MLCCs are designed for continuous industrial operation. With operating temperatures to 105°C and lifetimes exceeding 15,000 hours, HJC capacitors minimize maintenance and downtime in demanding industrial environments.",
      "coreAdvantages": [
        {
          "title": "Long Lifetime",
          "description": "Up to 15,000 hours at 105°C reduces maintenance"
        },
        {
          "title": "High Ripple Current",
          "description": "Handles demanding switching power supply applications"
        },
        {
          "title": "Wide Voltage Range",
          "description": "6.3V to 550V covers all industrial power systems"
        },
        {
          "title": "Robust Construction",
          "description": "Withstands industrial vibration and temperature extremes"
        },
        {
          "title": "Cost Effective",
          "description": "Competitive pricing for high-volume industrial applications"
        },
        {
          "title": "High Reliability",
          "description": "Low failure rates minimize production downtime"
        }
      ],
      "bomList": [
        {
          "partNumber": "HJC-ELKO-1000uF-100V-LL",
          "description": "Long-life electrolytic for DC bus",
          "quantity": 4,
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-1000uf-100v.html"
        },
        {
          "partNumber": "HJC-CBB21-225J-400V",
          "description": "Film capacitor for output filtering",
          "quantity": 2,
          "link": "/hjc/products/film-capacitors/hjc-cbb21-225j-400v.html"
        },
        {
          "partNumber": "HJC-1206-100V-475K-X7R",
          "description": "MLCC for decoupling",
          "quantity": 10,
          "link": "/hjc/products/mlcc/hjc-1206-100v-475k-x7r.html"
        }
      ],
      "technicalSpecs": {
        "Operating Temperature": "-40°C to +105°C",
        "Storage Temperature": "-40°C to +105°C",
        "Humidity Range": "0% to 95% RH",
        "Vibration": "IEC 60068-2-6",
        "Shock": "IEC 60068-2-27",
        "Protection Class": "IP65 available"
      },
      "customerCases": [
        {
          "title": "VFD Retrofit Project",
          "description": "HJC long-life electrolytics extended maintenance intervals from 2 years to 5 years",
          "results": "60% reduction in maintenance costs"
        },
        {
          "title": "PLC Power Supply",
          "description": "HJC MLCCs and film capacitors provide reliable 24V power for factory automation",
          "results": "99.9% uptime over 5 years"
        }
      ],
      "faqs": [
        {
          "question": "What is the recommended maintenance schedule for HJC capacitors in industrial applications?",
          "answer": "HJC capacitor maintenance schedule for industrial applications: 1) Visual Inspection - Every 6 months: Check for bulging, leakage, or corrosion, 2) Capacitance Check - Annually: Measure capacitance and compare to initial value; replace if >20% decrease, 3) ESR Measurement - Annually: For electrolytics, replace if ESR >2x initial value, 4) Thermal Scan - Quarterly: Use infrared camera to identify hot spots indicating degradation. Predictive maintenance: HJC long-life series (10,000-15,000 hours) can operate 3-5 years between replacements in typical industrial environments. Film capacitors and MLCCs typically last 10+ years with no maintenance. Keep spare capacitors in stock for critical applications. Schedule preventive replacement during planned maintenance shutdowns.",
          "decisionGuide": "Implement annual capacitance/ESR testing; replace electrolytics every 3-5 years preventively in critical applications.",
          "keywords": ["capacitor maintenance", "industrial capacitor replacement", "preventive maintenance"]
        },
        {
          "question": "How do I select capacitors for motor drive applications?",
          "answer": "Motor drive capacitor selection guide: 1) DC-Link Capacitors - Use film capacitors (CBB21 series) for high-frequency ripple and electrolytics for bulk capacitance; size for 5-10% voltage ripple at full load, 2) IGBT Snubbers - Use low-inductance film capacitors (CBB21 0.47-2.2µF) mounted close to switches, 3) Control Power - Use long-life electrolytics (8000+ hours) for 24V control supplies, 4) Decoupling - Use X7R MLCCs (100nF-1µF) for IC power supplies. Key specifications: Voltage rating 1.5x DC bus voltage, Ripple current capability >1.5x calculated RMS current, Temperature rating ≥105°C for enclosure mounting. For 480V AC drives: DC bus = 680V, use 1000V rated capacitors with series connection if needed.",
          "decisionGuide": "Use film capacitors for DC-link and snubbers; long-life electrolytics for control power; size for 150% ripple current margin.",
          "keywords": ["motor drive capacitors", "VFD capacitor selection", "inverter DC link"]
        },
        {
          "question": "What is the expected lifetime in industrial environments?",
          "answer": "HJC capacitor lifetime in industrial environments: 1) Standard Electrolytics (2000h @ 85°C) - 2-3 years in typical industrial environments, 2) Long-Life Electrolytics (8000-15000h @ 105°C) - 5-8 years with proper derating, 3) Film Capacitors - 15-20+ years, no wear-out mechanism, 4) MLCCs - 20+ years, extremely stable. Factors affecting lifetime: Operating temperature (most critical), voltage stress (derate to 80%), ripple current (keep within rating), ambient conditions (humidity, vibration). Example calculation: 10,000 hour capacitor at 85°C actual temperature: Lifetime = 10,000 × 2^((105-85)/10) = 40,000 hours ≈ 4.5 years. For 24/7 operation, use highest temperature rating and maximum voltage derating.",
          "decisionGuide": "Use long-life series for 5+ year service life; film capacitors for maintenance-free applications.",
          "keywords": ["industrial capacitor lifetime", "capacitor life calculation", "long life electrolytic"]
        },
        {
          "question": "Can HJC capacitors withstand industrial vibration and shock?",
          "answer": "HJC capacitors are tested to industrial vibration and shock standards: 1) Vibration Testing - IEC 60068-2-6: 10-500Hz, 5g acceleration, MLCCs and film capacitors pass with no degradation, 2) Shock Testing - IEC 60068-2-27: 30g half-sine, 11ms duration, all capacitor types pass, 3) Large Electrolytics - May require additional mechanical support for severe vibration; use mounting clamps or adhesive, 4) SMD Components - Secure mounting with proper solder joints withstands typical industrial vibration. For severe environments (mining, heavy machinery): Use through-hole components rather than SMD, Add mechanical retention (adhesive, clamps), Specify larger case sizes for better mechanical strength, Consider conformal coating for humidity protection. HJC automotive-grade capacitors have enhanced mechanical robustness for extreme applications.",
          "decisionGuide": "Standard HJC capacitors withstand typical industrial vibration; add mechanical support for large electrolytics in severe environments.",
          "keywords": ["capacitor vibration resistance", "industrial shock testing", "capacitor mechanical robustness"]
        },
        {
          "question": "What protection is needed for capacitors in harsh industrial environments?",
          "answer": "Protection strategies for HJC capacitors in harsh industrial environments: 1) Overvoltage Protection - Use TVS diodes or MOVs to protect against voltage transients from switching loads, 2) Overcurrent Protection - Fuses or circuit breakers prevent capacitor damage from fault conditions, 3) Thermal Management - Ensure adequate airflow; keep capacitors below 70°C hot spot for maximum life, 4) Humidity Protection - Conformal coating or sealed enclosures for high-humidity environments, 5) Vibration Isolation - Rubber mounts or gaskets for severe vibration, 6) Reverse Voltage Protection - Diodes prevent reverse polarity connection. For outdoor installations: Use IP65 rated enclosures, Specify wide temperature range components (-40°C to +105°C), Include heating elements for cold start if needed, Use corrosion-resistant terminals.",
          "decisionGuide": "Implement overvoltage and thermal protection as minimum; add environmental protection based on specific conditions.",
          "keywords": ["capacitor protection", "industrial environment", "capacitor reliability"]
        },
        {
          "question": "How do I calculate ripple current for power supply capacitors?",
          "answer": "Ripple current calculation for HJC power supply capacitors: 1) From Load Current - For switching supplies: Irms ≈ Iout × √(D/(1-D)) for buck, where D is duty cycle, 2) From Power and Voltage - Irms = P / (V × √2) for rectifier circuits, 3) Harmonic Content - Include all significant harmonics: Itotal = √(I1² + I2² + I3² + ...). Example: 100W, 24V output buck converter at 50% duty: Irms ≈ 4.17A × √(0.5/0.5) = 4.17A. Add 30% margin: Select capacitors rated for 5.4A ripple. For electrolytics: Check ripple rating at actual ambient temperature (derate above 85°C), Use multiple capacitors in parallel to share current, Consider film capacitors for high-frequency ripple (>10kHz). ESR verification: ΔV = Irms × ESR should be within allowable ripple voltage.",
          "decisionGuide": "Calculate RMS ripple including harmonics; select capacitors with 130% ripple current rating; use parallel capacitors for high current.",
          "keywords": ["ripple current calculation", "power supply capacitor sizing", "capacitor ESR"]
        }
      ],
      "faeInsights": {
        "author": "Michael Zhang",
        "title": "Senior FAE - Industrial Power",
        "content": "In my 15 years supporting industrial automation, I've learned that capacitor selection can make or break system reliability. The most common mistake I see is undersizing ripple current capability - designers calculate average current but miss the harmonic content from modern IGBTs and SiC MOSFETs. I always recommend measuring actual ripple with a current probe during prototype testing. For motor drives, the DC-link capacitors see severe stress from regenerative energy - use film capacitors for the high-frequency component and electrolytics for bulk storage. Temperature is the silent killer in industrial environments; even if the ambient is only 40°C, poor airflow and self-heating can push electrolytics to 80°C+, cutting life by 75%. I specify 105°C rated parts as minimum for any industrial enclosure. For maintenance-critical applications, film capacitors are worth the extra cost - they simply don't wear out like electrolytics.",
        "keyTakeaways": [
          "Measure actual ripple current with harmonics during prototype testing",
          "Use 105°C minimum temperature rating for industrial applications",
          "Combine film and electrolytic capacitors for optimal DC-link performance",
          "Design for hot spot temperature below 70°C for maximum electrolytic life",
          "Consider total cost of ownership - film capacitors eliminate maintenance"
        ],
        "decisionFramework": {
          "title": "Industrial Capacitor Selection Framework",
          "steps": [
            "Calculate total RMS ripple current including all harmonics",
            "Select capacitors with 130% ripple current margin",
            "Use 105°C minimum temperature rating",
            "Design thermal management for hot spot <70°C",
            "Use film capacitors for high-frequency ripple (>10kHz)",
            "Implement voltage derating (80% of rated maximum)",
            "Plan preventive replacement schedule for electrolytics"
          ]
        }
      }
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✅ Created solutions.json');

// Create support.json
const supportData = {
  "seoTitle": "HJC Capacitor Technical Support | Selection Guides, Application Notes",
  "seoDescription": "Access HJC capacitor technical resources including selection guides, application notes, FAQs, and design support. Expert FAE assistance available.",
  "seoKeywords": [
    "HJC technical support",
    "capacitor selection guide",
    "HJC application notes",
    "capacitor design support"
  ],
  "articles": [
    {
      "id": "mlcc-selection-guide",
      "title": "MLCC Selection Guide",
      "author": "David Chen",
      "publishDate": "2024-01-15",
      "lastUpdated": "2024-01-15",
      "readTime": "15 min",
      "category": "Component Selection",
      "content": [
        "Multilayer Ceramic Capacitors (MLCCs) are essential components in modern electronics. This guide covers the key selection criteria for choosing the right MLCC for your application.",
        "",
        "## Dielectric Selection",
        "",
        "The dielectric material determines the capacitor's temperature and voltage characteristics:",
        "",
        "- **C0G (NP0)** - Class I ceramic with ultra-stable capacitance (0±30ppm/°C). Best for precision timing, RF circuits, and filters. Limited capacitance range (0.5pF to 47nF).",
        "- **X7R** - Class II ceramic with ±15% capacitance change over -55°C to +125°C. Good for general-purpose decoupling and filtering. Wide capacitance range (100pF to 47µF).",
        "- **X5R** - Class II ceramic with ±15% capacitance change over -55°C to +85°C. Cost-effective for consumer electronics. Capacitance range 1nF to 100µF.",
        "",
        "## Case Size Selection",
        "",
        "Case size affects capacitance density, current capability, and DC bias performance:",
        "",
        "- **0201/0402** - For space-constrained mobile devices",
        "- **0603/0805** - General purpose, best availability",
        "- **1206/1210** - Higher capacitance and current capability",
        "",
        "## Voltage Rating",
        "",
        "Always apply voltage derating for reliability:",
        "",
        "- **Standard derating** - 80% of rated voltage (20% margin)",
        "- **High-reliability** - 50% of rated voltage",
        "- **Automotive** - Typically 50% derating per AEC guidelines",
        "",
        "## DC Bias Effect",
        "",
        "Class II ceramics (X7R, X5R) exhibit capacitance reduction under DC voltage. The effect is more severe with smaller case sizes and higher capacitance values. Always consult DC bias curves in the datasheet."
      ],
      "faqs": [
        {
          "question": "What is the difference between C0G and X7R dielectrics?",
          "answer": "C0G (NP0) is a Class I ceramic with near-zero temperature coefficient (0±30ppm/°C), making it ideal for precision applications. X7R is a Class II ceramic with ±15% capacitance variation over temperature, offering higher capacitance density but less stability. C0G is best for RF, timing, and precision circuits; X7R is suitable for general decoupling and filtering where stability is less critical.",
          "decisionGuide": "Choose C0G for precision applications; X7R for general purpose where cost and density matter more than precision.",
          "keywords": ["C0G vs X7R", "NP0 capacitor", "MLCC dielectric selection"]
        },
        {
          "question": "How much DC bias capacitance loss should I expect?",
          "answer": "DC bias loss in X7R/X5R capacitors depends on case size, capacitance, and voltage. At 50% of rated voltage, expect 20-40% capacitance loss. The loss is more severe with smaller case sizes - a 10µF/6.3V 0603 capacitor may lose 60% of capacitance at 5V. To minimize DC bias effects: use larger case sizes, select higher voltage ratings, or use C0G dielectric which has no DC bias effect.",
          "decisionGuide": "Use larger case sizes and higher voltage ratings to minimize DC bias; measure actual capacitance under operating conditions.",
          "keywords": ["DC bias effect", "X7R capacitance drop", "MLCC derating"]
        }
      ],
      "relatedArticles": [
        "electrolytic-capacitor-selection-guide",
        "film-capacitor-selection-guide",
        "supercapacitor-selection-guide"
      ],
      "faeInsights": {
        "author": "David Chen",
        "title": "Senior FAE - Passive Components",
        "content": "The most common mistake I see in MLCC selection is ignoring DC bias effects. Designers look at the nominal capacitance and voltage rating, but don't account for the 30-60% capacitance loss that occurs in X7R capacitors under DC bias. This is particularly problematic in power supply output filters where the effective capacitance directly affects ripple voltage. I always recommend using larger case sizes than minimum required - the improved DC bias performance and lower ESR are worth the small cost increase. For critical applications, measure the actual capacitance with DC bias applied using an LCR meter with bias capability.",
        "insightLogic": "DC bias effect is the most overlooked parameter in MLCC selection. The capacitance loss can be severe enough to cause circuit malfunction if not properly accounted for in the design.",
        "keyTakeaways": [
          "Always account for DC bias capacitance loss in X7R/X5R capacitors",
          "Use larger case sizes for better DC bias performance",
          "Measure actual capacitance under operating voltage when possible",
          "Consider C0G for precision applications where DC bias cannot be tolerated"
        ]
      }
    },
    {
      "id": "electrolytic-capacitor-selection-guide",
      "title": "Aluminum Electrolytic Capacitor Selection Guide",
      "author": "Michael Zhang",
      "publishDate": "2024-01-20",
      "lastUpdated": "2024-01-20",
      "readTime": "12 min",
      "category": "Component Selection",
      "content": [
        "Aluminum electrolytic capacitors provide high capacitance density for power supply filtering, energy storage, and coupling applications. This guide covers selection criteria for reliable operation.",
        "",
        "## Lifetime Considerations",
        "",
        "Electrolytic capacitor lifetime follows the Arrhenius equation:",
        "",
        "- **Temperature** - Lifetime doubles for every 10°C decrease",
        "- **Voltage** - Operating at 80% of rated voltage extends life significantly",
        "- **Ripple Current** - Self-heating from ripple current reduces lifetime",
        "",
        "Typical lifetimes:",
        "- Standard: 2,000 hours at 85°C",
        "- Long-life: 8,000-15,000 hours at 105°C",
        "- High-temp: 2,000-5,000 hours at 125-150°C",
        "",
        "## Voltage Derating",
        "",
        "Recommended voltage margins:",
        "",
        "- **General purpose** - 80% of rated voltage",
        "- **High reliability** - 50-60% of rated voltage",
        "- **Automotive** - 50% derating typical",
        "",
        "## Ripple Current",
        "",
        "Ripple current causes self-heating. Calculate temperature rise and ensure it does not exceed 5-10°C above ambient. Use multiple capacitors in parallel for high ripple applications."
      ],
      "faqs": [
        {
          "question": "How do I calculate expected lifetime?",
          "answer": "Use the Arrhenius equation: Lifetime = Rated Lifetime × 2^((Rated Temp - Actual Temp)/10) × Voltage Factor. For example, a 10,000 hour/105°C capacitor at 75°C with 80% voltage: Lifetime = 10,000 × 2^3 × 1.0 = 80,000 hours. Voltage factor is typically 1.0 at 80% derating, 0.8 at 100% voltage.",
          "decisionGuide": "Calculate lifetime based on actual operating temperature and voltage; use online calculators for complex scenarios.",
          "keywords": ["electrolytic lifetime", "capacitor life calculation", "Arrhenius equation"]
        },
        {
          "question": "What causes electrolytic capacitors to fail?",
          "answer": "Primary failure mode is electrolyte evaporation over time, accelerated by high temperature. Other causes include overvoltage (damages oxide layer), reverse voltage (even brief), excessive ripple current (overheating), and mechanical damage. Warning signs: capacitance drop >20%, ESR increase >2x, visible bulging, or leakage.",
          "decisionGuide": "Follow derating guidelines and ensure adequate cooling to maximize lifetime; replace when capacitance drops below 80%.",
          "keywords": ["capacitor failure", "electrolytic end of life", "capacitor degradation"]
        }
      ],
      "relatedArticles": [
        "mlcc-selection-guide",
        "film-capacitor-selection-guide",
        "power-supply-design"
      ],
      "faeInsights": {
        "author": "Michael Zhang",
        "title": "Senior FAE - Power Electronics",
        "content": "Temperature is everything with electrolytic capacitors. I can't count how many failures I've investigated that were caused by inadequate thermal design. Designers often look at ambient temperature but forget about self-heating from ripple current. A capacitor in a 40°C ambient can easily reach 80°C+ if the ripple current is high and there's no airflow. My rule of thumb: measure the actual capacitor temperature with a thermocouple during full-load testing. If it's over 70°C, redesign for better cooling or use multiple capacitors to share the current. The cost of adding a second capacitor is much less than the cost of field failures and warranty claims.",
        "insightLogic": "Self-heating from ripple current is often underestimated. Actual capacitor temperature can be 20-40°C above ambient in poorly designed systems.",
        "keyTakeaways": [
          "Measure actual capacitor temperature during full-load testing",
          "Account for self-heating from ripple current",
          "Use multiple capacitors in parallel to distribute heating",
          "Design for capacitor temperature below 70°C for maximum life"
        ]
      }
    },
    {
      "id": "film-capacitor-selection-guide",
      "title": "Film Capacitor Selection Guide",
      "author": "Lisa Wang",
      "publishDate": "2024-02-01",
      "lastUpdated": "2024-02-01",
      "readTime": "10 min",
      "category": "Component Selection",
      "content": [
        "Film capacitors offer excellent reliability, low losses, and self-healing properties for industrial and power electronics applications.",
        "",
        "## Dielectric Types",
        "",
        "HJC offers two main dielectric types:",
        "",
        "- **Polyester (PET)** - Higher capacitance density, lower cost, good for general purpose. Tan δ ~0.5%.",
        "- **Polypropylene (PP)** - Lower losses (tan δ ~0.01%), better for high-frequency. More stable over time.",
        "",
        "## Self-Healing",
        "",
        "Metallized film capacitors self-heal when dielectric breakdown occurs. The metallization vaporizes around the fault, isolating the defect. This provides:",
        "",
        "- Graceful degradation rather than catastrophic failure",
        "- Tolerance of occasional voltage transients",
        "- Extended lifetime compared to non-healing types",
        "",
        "## Voltage Derating",
        "",
        "Recommended derating for long life:",
        "",
        "- DC applications: 70-80% of rated voltage",
        "- AC applications: 50-60% of rated DC voltage",
        "- Pulse applications: Peak voltage should not exceed rated DC voltage"
      ],
      "faqs": [
        {
          "question": "What is self-healing in film capacitors?",
          "answer": "Self-healing occurs when a localized dielectric breakdown causes the metallized electrode to vaporize around the fault point, isolating the defect. This happens in microseconds and removes only micrograms of material. Benefits include extended lifetime, graceful degradation, and tolerance of voltage transients. Typical capacitance loss is <5% over 100,000 hours.",
          "decisionGuide": "Self-healing is inherent in metallized film capacitors; no special selection required. Monitor capacitance over time to track gradual degradation.",
          "keywords": ["self-healing capacitor", "metallized film", "capacitor clearing"]
        },
        {
          "question": "When should I use polyester vs polypropylene?",
          "answer": "Use polyester (PET) for cost-sensitive general applications, LED drivers, and coupling circuits where higher losses are acceptable. Use polypropylene (PP) for high-frequency switching (>10kHz), resonant circuits, and precision applications where low loss is critical. Polypropylene has 10x lower dissipation factor but costs 20-30% more.",
          "decisionGuide": "Choose PET for cost-sensitive applications; PP for high-frequency or low-loss requirements.",
          "keywords": ["polyester vs polypropylene", "PET capacitor", "PP film capacitor"]
        }
      ],
      "relatedArticles": [
        "mlcc-selection-guide",
        "electrolytic-capacitor-selection-guide",
        "motor-capacitor-application-guide"
      ],
      "faeInsights": {
        "author": "Lisa Wang",
        "title": "FAE - Power Electronics",
        "content": "Film capacitors are the unsung heroes of power electronics. Designers often default to electrolytics because of lower cost, but for high-frequency applications, film capacitors actually provide better value. The low ESR means less heating and longer life, plus no wear-out mechanism like electrolytes drying out. I frequently see designs where engineers parallel a small film capacitor with a large electrolytic - the film handles the high-frequency ripple while the electrolytic provides bulk capacitance. This hybrid approach gives the best of both worlds: low cost and high reliability. For DC-link applications above 5kHz switching, I strongly recommend considering film capacitors as the primary solution.",
        "insightLogic": "Film capacitors excel in high-frequency applications due to low ESR and no wear-out mechanism. The higher initial cost is offset by longer lifetime and better performance.",
        "keyTakeaways": [
          "Consider film capacitors for high-frequency ripple applications",
          "Use hybrid approach: film for high-frequency, electrolytic for bulk",
          "Film capacitors have no wear-out mechanism - calculate total cost of ownership",
          "Polypropylene is worth the premium for switching applications above 10kHz"
        ]
      }
    },
    {
      "id": "supercapacitor-selection-guide",
      "title": "Supercapacitor Selection Guide",
      "author": "Kevin Zhao",
      "publishDate": "2024-02-10",
      "lastUpdated": "2024-02-10",
      "readTime": "14 min",
      "category": "Component Selection",
      "content": [
        "Supercapacitors (EDLCs) provide high power density and virtually unlimited cycle life for backup power, energy harvesting, and pulse power applications.",
        "",
        "## Energy Storage",
        "",
        "Energy stored in a supercapacitor: E = 0.5 × C × V²",
        "",
        "Usable energy depends on minimum operating voltage. Typical usable energy is 50-75% of total stored energy.",
        "",
        "## Series Connection",
        "",
        "For higher voltage, connect cells in series:",
        "",
        "- Voltages add, capacitance divides (Ctotal = C/n)",
        "- Voltage balancing is essential - never connect in series without balancing",
        "- Use active balancing for best efficiency, passive balancing for simplicity",
        "",
        "## Charging",
        "",
        "Supercapacitors can charge in seconds but require current limiting:",
        "",
        "- Simple resistor: R = (Vsupply - Vcap) / Icharge",
        "- Dedicated charger ICs provide optimal charging profile",
        "- Always include overvoltage protection (max 2.7V per cell)"
      ],
      "faqs": [
        {
          "question": "How do I calculate required capacitance?",
          "answer": "Use the energy formula: C = 2E / (Vmax² - Vmin²). For constant power: C = P × t / (0.5 × (Vmax² - Vmin²)). Example: 10W for 60 seconds, 5V to 3V: C = 2 × 10 × 60 / (25 - 9) = 75F. Always add 30% margin for tolerance and aging.",
          "decisionGuide": "Calculate based on energy or power requirements; add 30% margin; verify current capability with ESR.",
          "keywords": ["supercapacitor sizing", "EDLC calculation", "capacitor energy formula"]
        },
        {
          "question": "How do I connect supercapacitors for higher voltage?",
          "answer": "Connect in series: voltages add, capacitance divides. For 5 cells at 2.7V: Vtotal = 13.5V, Ctotal = C/5. Voltage balancing is mandatory - use balancing resistors (1kΩ-10kΩ) or active balancing IC. Never connect in series without balancing - cell voltage imbalance can cause overvoltage and damage.",
          "decisionGuide": "Use series with balancing circuit; consider pre-built modules for simplicity and reliability.",
          "keywords": ["supercapacitor series", "voltage balancing", "EDLC module"]
        }
      ],
      "relatedArticles": [
        "mlcc-selection-guide",
        "electrolytic-capacitor-selection-guide",
        "energy-harvesting-design"
      ],
      "faeInsights": {
        "author": "Kevin Zhao",
        "title": "FAE - Energy Storage",
        "content": "The biggest mistake in supercapacitor design is ignoring leakage current and self-discharge. Designers calculate the backup time based on load current but forget that the supercapacitor is also 'leaking' current internally. At 25°C, this might be 10-50µA, but at 60°C, it could be 200-500µA - comparable to the load current in some applications. Always factor leakage into your calculations, and if the application involves temperature cycling, use the worst-case temperature. Another common issue is inadequate voltage balancing in series configurations. I've seen systems where one cell is at 2.0V and another at 3.0V - the overvoltage cell will have severely reduced lifetime or fail completely.",
        "insightLogic": "Leakage current and self-discharge are often overlooked but can significantly impact backup time, especially at elevated temperatures.",
        "keyTakeaways": [
          "Include leakage current in backup time calculations",
          "Use worst-case temperature for leakage estimates",
          "Implement proper voltage balancing for series configurations",
          "Monitor individual cell voltages during development"
        ]
      }
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✅ Created support.json');

// Create news.json
const newsData = {
  "seoTitle": "HJC Capacitor News | Product Releases, Company Updates",
  "seoDescription": "Latest news from HJC including new product releases, capacity expansions, certifications, and company announcements.",
  "seoKeywords": [
    "HJC news",
    "HJC product releases",
    "capacitor industry news",
    "HJC company updates"
  ],
  "articles": [
    {
      "id": "hjc-expands-mlcc-capacity",
      "title": "HJC Announces Major MLCC Capacity Expansion",
      "date": "2024-03-15",
      "category": "Company News",
      "summary": "HJC invests $200 million to expand MLCC production capacity by 50% to meet growing demand from automotive and 5G markets.",
      "content": [
        "HJC (HuRong Electronics) announced today a $200 million investment to expand its multilayer ceramic capacitor (MLCC) manufacturing capacity. The expansion will increase annual production by 50%, adding approximately 15 billion units per year.",
        "",
        "The new capacity will focus on high-value automotive-grade MLCCs qualified to AEC-Q200 standards, as well as miniaturized components for 5G smartphones and IoT devices. The expansion includes:",
        "",
        "- New cleanroom manufacturing facilities",
        "- Advanced tape casting and stacking equipment",
        "- Expanded testing and quality assurance capabilities",
        "- Additional R&D laboratories for next-generation dielectric materials",
        "",
        "\"This expansion reflects our commitment to meeting the growing demand for high-reliability capacitors in automotive electronics and advanced communications systems,\" said Mr. Chen, HJC CEO. \"The automotive market alone is expected to grow 15% annually as EV adoption accelerates.\"",
        "",
        "The expansion is expected to be completed by Q4 2025, with production ramping in early 2026. HJC will add approximately 500 new positions including engineers, technicians, and quality professionals."
      ],
      "image": "/assets/news/hjc-expansion.jpg",
      "tags": ["Capacity Expansion", "MLCC", "Automotive", "Investment"]
    },
    {
      "id": "hjc-new-x8r-mlcc-series",
      "title": "HJC Launches New X8R MLCC Series for High-Temperature Applications",
      "date": "2024-02-28",
      "category": "Product News",
      "summary": "New X8R dielectric MLCCs operate up to 150°C for under-hood automotive and LED lighting applications.",
      "content": [
        "HJC has introduced a new series of X8R dielectric MLCCs designed for high-temperature applications up to 150°C. The new series targets under-hood automotive electronics, LED lighting systems, and industrial power applications.",
        "",
        "The X8R dielectric provides stable capacitance (±15%) over the extended temperature range of -55°C to +150°C, making it ideal for applications where X7R (125°C limit) is insufficient.",
        "",
        "Key features of the new series include:",
        "",
        "- Temperature range: -55°C to +150°C",
        "- Capacitance range: 100pF to 10µF",
        "- Voltage ratings: 16V to 250V",
        "- Case sizes: 0603 to 1210",
        "- AEC-Q200 Rev E qualified",
        "- Flexible termination options available",
        "",
        "\"As automotive electronics move into more challenging thermal environments, the demand for 150°C-rated capacitors has grown significantly,\" said David Chen, Senior FAE at HJC. \"Our new X8R series meets this need while maintaining the cost competitiveness our customers expect.\"",
        "",
        "Samples are available now, with production quantities available from Q2 2024."
      ],
      "image": "/assets/news/x8r-mlcc.jpg",
      "tags": ["New Product", "X8R", "Automotive", "High Temperature"]
    },
    {
      "id": "hjc-iatf-certification",
      "title": "HJC Achieves IATF 16949 Certification for All Manufacturing Facilities",
      "date": "2024-02-10",
      "category": "Certification",
      "summary": "HJC completes IATF 16949 certification across all capacitor manufacturing facilities, reinforcing commitment to automotive quality.",
      "content": [
        "HJC announced today that all of its capacitor manufacturing facilities have achieved IATF 16949:2016 certification, the international quality management standard for the automotive industry.",
        "",
        "The certification covers HJC's complete product portfolio including MLCC, aluminum electrolytic, film, and supercapacitor manufacturing. The comprehensive audit process evaluated:",
        "",
        "- Quality management systems and processes",
        "- Risk management and contingency planning",
        "- Product traceability and recall procedures",
        "- Continuous improvement programs",
        "- Supplier quality management",
        "- Customer-specific requirements",
        "",
        "\"IATF 16949 certification is essential for serving the automotive market,\" said Ms. Wang, HJC Quality Director. \"This achievement demonstrates our commitment to meeting the stringent quality requirements of automotive OEMs and Tier 1 suppliers.\"",
        "",
        "HJC's automotive customers will benefit from enhanced quality assurance, full PPAP documentation support, and complete lot traceability. The certification is valid for three years with annual surveillance audits."
      ],
      "image": "/assets/news/iatf-certification.jpg",
      "tags": ["Certification", "IATF 16949", "Automotive", "Quality"]
    },
    {
      "id": "hjc-supercapacitor-module",
      "title": "HJC Introduces Pre-Configured Supercapacitor Modules",
      "date": "2024-01-25",
      "category": "Product News",
      "summary": "New supercapacitor modules with integrated balancing and monitoring simplify design for 16V, 32V, and 48V systems.",
      "content": [
        "HJC has launched a new line of pre-configured supercapacitor modules designed to simplify integration into industrial and automotive systems. The modules include integrated cell balancing, voltage monitoring, and thermal management.",
        "",
        "Available configurations include:",
        "",
        "- 16V module: 6 cells in series, 58F effective capacitance",
        "- 32V module: 12 cells in series, 29F effective capacitance",
        "- 48V module: 18 cells in series, 19F effective capacitance",
        "",
        "Each module features:",
        "",
        "- Active cell balancing for maximum life",
        "- Integrated voltage monitoring with alarm outputs",
        "- Temperature sensors with overtemperature protection",
        "- Rugged aluminum enclosure with mounting brackets",
        "- ISO 16750-2 compliant for automotive applications",
        "",
        "\"Designing with series-connected supercapacitors requires careful attention to voltage balancing,\" said Kevin Zhao, FAE for Energy Storage at HJC. \"Our pre-configured modules eliminate this complexity while ensuring optimal performance and safety.\"",
        "",
        "Applications include regenerative braking systems, UPS backup power, and pulse power for industrial equipment. Samples are available now with production lead times of 8-10 weeks."
      ],
      "image": "/assets/news/supercap-module.jpg",
      "tags": ["New Product", "Supercapacitor", "Module", "Energy Storage"]
    },
    {
      "id": "hjc-40th-anniversary",
      "title": "HJC Celebrates 40 Years of Capacitor Manufacturing Excellence",
      "date": "2024-01-15",
      "category": "Company News",
      "summary": "HJC marks four decades of innovation in capacitor technology, serving global markets with quality and reliability.",
      "content": [
        "HJC (HuRong Electronics) is celebrating its 40th anniversary this month, marking four decades of capacitor manufacturing and innovation. Founded in 1984, HJC has grown from a small local manufacturer to a global supplier serving major electronics companies worldwide.",
        "",
        "Key milestones in HJC's 40-year journey:",
        "",
        "- 1984: Company founded in Xiamen, China",
        "- 1995: Expanded into aluminum electrolytic capacitors",
        "- 2005: Entered MLCC market with advanced manufacturing",
        "- 2010: Achieved ISO/TS 16949 automotive certification",
        "- 2015: Launched supercapacitor product line",
        "- 2020: Annual production exceeded 30 billion units",
        "- 2024: 40th anniversary with 50 billion unit annual capacity",
        "",
        "\"Our success over 40 years is built on a commitment to quality, innovation, and customer satisfaction,\" said Mr. Chen, founder and CEO. \"As we look to the future, we remain dedicated to providing our customers with the most reliable capacitors for their critical applications.\"",
        "",
        "Today, HJC operates 8 manufacturing facilities with over 5,000 employees, serving customers in automotive, industrial, consumer electronics, and renewable energy markets. The company maintains a strong focus on R&D with over 300 patents and continuous investment in next-generation capacitor technologies."
      ],
      "image": "/assets/news/40th-anniversary.jpg",
      "tags": ["Anniversary", "Company History", "Milestones"]
    },
    {
      "id": "hjc-green-manufacturing",
      "title": "HJC Commits to Carbon Neutrality by 2035",
      "date": "2024-01-05",
      "category": "Sustainability",
      "summary": "HJC announces comprehensive sustainability initiative targeting carbon neutral manufacturing within 10 years.",
      "content": [
        "HJC has announced an ambitious sustainability commitment to achieve carbon neutral manufacturing operations by 2035. The initiative includes comprehensive measures to reduce environmental impact across all manufacturing facilities.",
        "",
        "Key elements of the sustainability program:",
        "",
        "- Renewable Energy: Transition to 100% renewable electricity by 2030",
        "- Energy Efficiency: 30% reduction in energy consumption per unit produced",
        "- Waste Reduction: Zero waste to landfill by 2030",
        "- Water Conservation: 50% reduction in water usage through recycling",
        "- Green Materials: Eliminate hazardous substances beyond RoHS requirements",
        "- Supply Chain: Work with suppliers to reduce Scope 3 emissions",
        "",
        "\"As a responsible manufacturer, we recognize our obligation to minimize environmental impact,\" said Ms. Li, HJC Sustainability Director. \"Our carbon neutrality commitment aligns with the goals of our customers in the automotive and renewable energy sectors.\"",
        "",
        "HJC has already achieved ISO 14001 environmental management certification and implemented comprehensive recycling programs. The company will publish annual sustainability reports tracking progress toward the 2035 carbon neutrality goal."
      ],
      "image": "/assets/news/sustainability.jpg",
      "tags": ["Sustainability", "Carbon Neutral", "Environmental", "ESG"]
    }
  ]
};

fs.writeFileSync(path.join(dataDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✅ Created news.json');

console.log('\n✅ All HJC brand data files created successfully!');
console.log('Files created:');
console.log('- data/hjc/brand.json');
console.log('- data/hjc/products.json');
console.log('- data/hjc/solutions.json');
console.log('- data/hjc/support.json');
console.log('- data/hjc/news.json');
