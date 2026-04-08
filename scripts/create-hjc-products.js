const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'hjc');

const productsData = {
  "seoTitle": "HJC Capacitor Products | MLCC, Electrolytic, Film, Supercapacitors",
  "seoDescription": "Browse HJC capacitor product catalog: MLCC, aluminum electrolytic, film capacitors, and supercapacitors. Technical specifications and selection guide available.",
  "seoKeywords": [
    "HJC capacitor products",
    "HJC MLCC distributor",
    "HJC electrolytic capacitor selection",
    "HJC film capacitor",
    "HJC supercapacitor"
  ],
  "faqs": [
    {
      "question": "What capacitor types does HJC manufacture?",
      "answer": "HJC manufactures four main categories of capacitors: 1) MLCC (Multilayer Ceramic Capacitors) - available in C0G, X7R, X5R, and Y5V dielectrics for general purpose and high-frequency applications, 2) Aluminum Electrolytic Capacitors - including radial, SMD, and snap-in types for power supply filtering and energy storage, 3) Film Capacitors - metallized polyester (PET) and polypropylene (PP) film capacitors for industrial and automotive applications, 4) Supercapacitors (EDLC) - electric double-layer capacitors ranging from 0.1F to 3000F for backup power and energy harvesting. All products are available in standard and automotive-grade (AEC-Q200) versions.",
      "decisionGuide": "Browse our product categories below to find the specific HJC capacitor type suitable for your application requirements.",
      "keywords": ["HJC product range", "HJC capacitor types", "HJC MLCC electrolytic film supercapacitor"]
    },
    {
      "question": "How do I select the right HJC capacitor for my application?",
      "answer": "Selecting the right HJC capacitor involves several key steps: 1) Determine Capacitor Type - MLCC for high-frequency/decoupling, electrolytic for bulk capacitance, film for AC/DC filtering, supercapacitor for energy storage, 2) Define Electrical Requirements - capacitance value, voltage rating, tolerance, ESR requirements, 3) Consider Environmental Conditions - operating temperature range, humidity, vibration, 4) Evaluate Application Requirements - automotive (AEC-Q200), industrial, or consumer grade, 5) Check Physical Constraints - package size, mounting type (SMD/through-hole), 6) Review Lifetime Requirements - operating hours, ripple current capability. HJC provides detailed datasheets and application notes for each product family. Our FAE team can assist with selection based on your specific requirements.",
      "decisionGuide": "Contact our FAE team with your application requirements for personalized capacitor selection assistance.",
      "keywords": ["HJC capacitor selection", "how to choose HJC capacitor", "capacitor selection guide"]
    },
    {
      "question": "What is the difference between HJC's automotive-grade and standard capacitors?",
      "answer": "HJC automotive-grade capacitors are qualified to AEC-Q200 standards with key differences from standard products: 1) Temperature Range - Automotive: -55°C to +150°C (X8R) or +125°C (X7R); Standard: -55°C to +85°C or +105°C, 2) Reliability - Automotive: Higher qualification requirements including thermal cycling, mechanical shock, and humidity testing, 3) Traceability - Automotive: Full lot traceability and PPAP documentation, 4) Quality Control - Automotive: Stricter process controls and inspection criteria, 5) Price - Automotive: Typically 20-30% premium over standard grade, 6) Applications - Automotive: EVs, ADAS, powertrain; Standard: Consumer electronics, general industrial. Both grades maintain HJC's quality standards, but automotive-grade products undergo additional testing and certification.",
      "decisionGuide": "Choose automotive-grade (AEC-Q200) for automotive applications; standard grade is sufficient for industrial and consumer applications.",
      "keywords": ["HJC automotive grade", "AEC-Q200 capacitor", "HJC standard vs automotive"]
    },
    {
      "question": "Does HJC offer custom capacitor specifications?",
      "answer": "Yes, HJC offers custom capacitor solutions for high-volume applications. Customization options include: 1) Electrical Parameters - special capacitance values, voltage ratings, or tolerance requirements, 2) Physical Dimensions - modified case sizes or lead configurations, 3) Terminations - custom plating or termination materials, 4) Packaging - tape and reel specifications, special packaging, 5) Marking - custom part marking or date coding, 6) Performance Characteristics - enhanced temperature performance, reduced ESR, or extended life. Custom development requires minimum order quantities (typically 100K+ units for MLCC, 10K+ for electrolytics) and engineering development time (8-16 weeks). HJC's application engineering team works closely with customers to develop custom solutions that meet specific application requirements while maintaining cost competitiveness.",
      "decisionGuide": "Contact our sales team to discuss custom capacitor requirements; provide detailed specifications and estimated annual volume.",
      "keywords": ["HJC custom capacitor", "custom specification capacitor", "HJC special order"]
    },
    {
      "question": "What are the typical applications for each HJC capacitor type?",
      "answer": "HJC capacitor types serve different applications: 1) MLCC - Decoupling and filtering in smartphones, tablets, computers, 5G base stations, automotive ECUs; C0G for precision circuits, X7R/X5R for general purpose, 2) Aluminum Electrolytic - Power supply filtering, motor drives, LED drivers, industrial inverters; radial for general purpose, SMD for compact designs, snap-in for high power, 3) Film Capacitors - DC-link filtering in solar inverters, motor run capacitors, EMI suppression; PP for high frequency, PET for general purpose, 4) Supercapacitors - Backup power in SSDs, energy harvesting in IoT devices, regenerative braking in EVs, power buffering in industrial equipment. HJC provides application-specific product series optimized for each use case.",
      "decisionGuide": "Review our solutions section for application-specific capacitor recommendations or contact our FAE team.",
      "keywords": ["HJC capacitor applications", "MLCC applications", "electrolytic capacitor uses"]
    }
  ],
  "categories": []
};

// MLCC Category
const mlccCategory = {
  "id": "mlcc",
  "name": "MLCC",
  "slug": "mlcc",
  "description": "HJC Multilayer Ceramic Capacitors (MLCC) offer high capacitance density, excellent high-frequency performance, and reliable operation for consumer electronics, automotive, and industrial applications.",
  "longDescription": "HJC Multilayer Ceramic Capacitors (MLCC) are manufactured using advanced tape casting and multilayer stacking technology, offering industry-leading capacitance density and reliability. Available in C0G (NP0), X7R, X5R, and Y5V dielectrics, HJC MLCCs serve applications from precision timing circuits to high-volume consumer electronics. The product range covers case sizes from 0201 to 1210, with voltage ratings from 6.3V to 3000V. Automotive-grade versions meet AEC-Q200 requirements with X8R dielectric rated to 150°C. As an authorized HJC distributor, we provide technical support and selection guidance for MLCC applications.",
  "series": [
    "C0G (NP0) - Ultra-stable",
    "X7R - General purpose",
    "X5R - Cost-effective",
    "X8R - Automotive high-temp"
  ],
  "parameters": [
    "Capacitance",
    "Voltage Rating",
    "Dielectric Type",
    "Tolerance",
    "Case Size",
    "Temperature Range"
  ],
  "applications": [
    "Decoupling/Bypass",
    "Filtering",
    "Timing Circuits",
    "Automotive ECUs",
    "5G Base Stations",
    "Consumer Electronics"
  ],
  "selectionGuide": {
    "title": "MLCC Selection Guide",
    "description": "Learn how to select the right MLCC for your application",
    "articleId": "mlcc-selection-guide",
    "articleLink": "/hjc/support/mlcc-selection-guide.html"
  },
  "selectionGuideLink": {
    "url": "/hjc/support/mlcc-selection-guide.html",
    "text": "MLCC Selection Guide"
  },
  "faqs": [
    {
      "question": "What is the difference between C0G, X7R, and X5R MLCC dielectrics?",
      "answer": "HJC MLCC dielectric types offer different characteristics: 1) C0G (NP0) - Class I ceramic with 0±30ppm/°C temperature coefficient, ultra-stable capacitance across temperature (-55°C to +125°C), low loss, ideal for precision timing, RF circuits, and filters; capacitance range typically 0.5pF to 47nF, 2) X7R - Class II ceramic with ±15% capacitance change over temperature (-55°C to +125°C), good for general-purpose decoupling and filtering; capacitance range 100pF to 47µF, 3) X5R - Class II ceramic with ±15% capacitance change over temperature (-55°C to +85°C), cost-effective for consumer electronics; capacitance range 1nF to 100µF. C0G is best for precision applications; X7R for general industrial/automotive; X5R for cost-sensitive consumer products.",
      "decisionGuide": "Choose C0G for precision/R circuits; X7R for automotive/industrial; X5R for consumer electronics.",
      "keywords": ["C0G vs X7R", "MLCC dielectric selection", "NP0 capacitor"]
    },
    {
      "question": "How do I read HJC MLCC part numbers?",
      "answer": "HJC MLCC part numbers follow the format: HJC-[Size]-[Voltage]-[Capacitance]-[Tolerance]-[Dielectric]. Example: HJC-0805-50V-104K-X7R decodes as: 0805 = Case size (2.0mm x 1.25mm), 50V = Voltage rating, 104 = Capacitance code (10 x 10^4 pF = 100nF), K = Tolerance (±10%), X7R = Dielectric type. Common case sizes: 0201 (0.6x0.3mm), 0402 (1.0x0.5mm), 0603 (1.6x0.8mm), 0805 (2.0x1.25mm), 1206 (3.2x1.6mm), 1210 (3.2x2.5mm). Tolerance codes: F (±1%), G (±2%), J (±5%), K (±10%), M (±20%). Understanding the part number system helps ensure correct component selection.",
      "decisionGuide": "Use HJC's part number decoder tool or contact our sales team for assistance with part number interpretation.",
      "keywords": ["HJC MLCC part number", "MLCC coding", "how to read MLCC part number"]
    },
    {
      "question": "What is DC bias effect in X7R/X5R MLCCs?",
      "answer": "DC bias effect is the capacitance reduction that occurs in Class II ceramic capacitors (X7R, X5R) when DC voltage is applied. The effect is caused by domain alignment in the ferroelectric ceramic material. Key characteristics: 1) Capacitance can drop 20-80% depending on voltage and dielectric thickness, 2) Higher voltage ratings show less capacitance loss at a given voltage, 3) Thinner dielectrics (smaller case sizes with high capacitance) show more severe DC bias, 4) C0G (NP0) dielectric does not exhibit DC bias effect. For example, a 10µF, 6.3V X5R capacitor may lose 60% of its capacitance at 5V DC. Design recommendations: 1) Select higher voltage rating than required, 2) Use larger case sizes for high capacitance values, 3) Consult HJC's DC bias curves in datasheets, 4) Consider C0G for critical timing circuits.",
      "decisionGuide": "For applications with significant DC voltage, select MLCCs with higher voltage ratings or larger case sizes to minimize capacitance loss.",
      "keywords": ["MLCC DC bias", "X7R capacitance drop", "ceramic capacitor DC bias effect"]
    },
    {
      "question": "Are HJC MLCCs suitable for automotive applications?",
      "answer": "Yes, HJC offers extensive AEC-Q200 qualified MLCC portfolios for automotive applications. Automotive-grade features include: 1) X8R Dielectric - Stable performance up to 150°C for under-hood applications, 2) X7R Dielectric - Rated to 125°C for general automotive electronics, 3) Flexible Terminations - Soft termination technology to prevent cracking from board flexure, 4) Full AEC-Q200 Qualification - Including temperature cycling, mechanical shock, vibration, and humidity testing, 5) PPAP Documentation - Full production part approval process support, 6) Lot Traceability - Complete traceability for quality management. Applications include: EV powertrains, ADAS systems, battery management, LED lighting, and infotainment systems. HJC's IATF 16949 certification ensures automotive-grade quality management throughout the manufacturing process.",
      "decisionGuide": "Select HJC automotive-grade MLCCs (X7R/X8R with AEC-Q200) for all automotive applications; specify flexible terminations for high-stress locations.",
      "keywords": ["HJC automotive MLCC", "AEC-Q200 MLCC", "automotive grade capacitor"]
    },
    {
      "question": "What case size should I choose for my MLCC application?",
      "answer": "HJC MLCC case size selection depends on multiple factors: 1) Capacitance vs Voltage - Larger cases allow higher capacitance at same voltage or higher voltage at same capacitance, 2) Board Space - Smaller cases (0201, 0402) for space-constrained designs; larger cases (1206, 1210) for easier handling, 3) Current Capability - Larger cases have lower ESR and can handle higher ripple currents, 4) DC Bias Performance - Larger cases with thicker dielectrics show less capacitance loss under DC bias, 5) Manufacturing - Larger cases are easier to handle during assembly with lower placement defect rates. Common selections: 0201/0402 for smartphones/wearables, 0603/0805 for general electronics, 1206/1210 for power applications. Consider future availability - 0603 and 0805 are industry standards with best supply security.",
      "decisionGuide": "Balance space constraints with electrical requirements; when in doubt, choose 0603 or 0805 for best availability and manufacturing yield.",
      "keywords": ["MLCC case size selection", "0201 vs 0402 vs 0603", "MLCC package size"]
    }
  ],
  "products": [
    {
      "partNumber": "HJC-0805-50V-104K-X7R",
      "name": "MLCC 100nF 50V X7R 0805",
      "shortDescription": "HJC 100nF 50V X7R MLCC in 0805 case size, ideal for general purpose decoupling and filtering applications.",
      "descriptionParagraphs": [
        "The HJC-0805-50V-104K-X7R is a high-reliability multilayer ceramic capacitor featuring X7R dielectric for stable performance across temperature ranges.",
        "With 100nF capacitance and 50V rating, this MLCC is suitable for general-purpose decoupling, bypass, and filtering in consumer and industrial electronics.",
        "The 0805 case size provides an optimal balance of board space efficiency and manufacturing handling ease."
      ],
      "specifications": {
        "Capacitance": "100nF (0.1µF)",
        "Voltage Rating": "50V DC",
        "Dielectric": "X7R",
        "Tolerance": "±10% (K)",
        "Case Size": "0805 (2.0mm x 1.25mm)",
        "Temperature Range": "-55°C to +125°C",
        "Temperature Coefficient": "±15%",
        "ESR": "<20mΩ @ 1MHz",
        "Insulation Resistance": ">10GΩ @ 25V",
        "Operating Temperature": "-55°C to +125°C"
      },
      "features": [
        "X7R dielectric for stable temperature characteristics",
        "High capacitance density in compact 0805 package",
        "Low ESR for effective high-frequency filtering",
        "RoHS compliant and halogen-free",
        "Tape and reel packaging for automated assembly",
        "AEC-Q200 qualified version available"
      ],
      "applications": [
        "Power supply decoupling",
        "High-frequency noise filtering",
        "Signal coupling and bypass",
        "General purpose timing circuits",
        "Automotive electronics",
        "Industrial control systems"
      ],
      "faeReview": {
        "author": "David Chen",
        "title": "Senior FAE - Passive Components",
        "content": "The HJC-0805-50V-104K-X7R is my go-to recommendation for general-purpose decoupling applications. In my experience supporting hundreds of designs, this part offers the best balance of performance, cost, and availability. The X7R dielectric provides adequate temperature stability for most industrial and consumer applications, and the 50V rating gives good margin for 12V and 24V systems. I particularly appreciate HJC's consistent quality - we see very low field failure rates with their MLCCs. For high-volume consumer products, the 0805 size hits the sweet spot between board space savings and manufacturing handling. I typically recommend derating to 50% of rated voltage for long-term reliability, so this 50V part is perfect for 24V applications.",
        "highlight": "Reliable general-purpose MLCC with excellent cost-performance ratio"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-0805-100V-104K-X7R",
          "brand": "HJC",
          "specifications": {
            "capacitance": "100nF",
            "voltage": "100V",
            "dielectric": "X7R"
          },
          "comparison": {
            "capacitance": "100nF = 100nF (same)",
            "voltage": "100V > 50V (2x higher)",
            "caseSize": "0805 = 0805 (same)",
            "temperature": "-55C to +125C = -55C to +125C (same)",
            "price": "~15% higher"
          },
          "reason": "Higher voltage rating for 48V systems or applications requiring more voltage margin",
          "useCase": "Industrial 24V/48V systems, automotive applications",
          "link": "/hjc/products/mlcc/hjc-0805-100v-104k-x7r.html"
        },
        {
          "partNumber": "HJC-1206-50V-224K-X7R",
          "brand": "HJC",
          "specifications": {
            "capacitance": "220nF",
            "voltage": "50V",
            "dielectric": "X7R"
          },
          "comparison": {
            "capacitance": "220nF > 100nF (+120%)",
            "voltage": "50V = 50V (same)",
            "caseSize": "1206 > 0805 (larger)",
            "esr": "Lower ESR due to larger size",
            "price": "~25% higher"
          },
          "reason": "Higher capacitance for applications requiring more energy storage or lower impedance",
          "useCase": "Power supplies with high ripple current, motor drive filtering",
          "link": "/hjc/products/mlcc/hjc-1206-50v-224k-x7r.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-0805-50V-103K-X7R",
          "link": "/hjc/products/mlcc/hjc-0805-50v-103k-x7r.html",
          "description": "10nF companion for multi-stage filtering",
          "category": "MLCC"
        },
        {
          "partNumber": "HJC-0805-50V-105K-X7R",
          "link": "/hjc/products/mlcc/hjc-0805-50v-105k-x7r.html",
          "description": "1µF companion for bulk decoupling",
          "category": "MLCC"
        },
        {
          "partNumber": "Ferrite Bead 600R",
          "link": "#",
          "description": "EMI suppression for power lines",
          "category": "EMI Components"
        },
        {
          "partNumber": "HJC-0603-50V-104K-X7R",
          "link": "/hjc/products/mlcc/hjc-0603-50v-104k-x7r.html",
          "description": "Smaller size alternative for space-constrained designs",
          "category": "MLCC"
        },
        {
          "partNumber": "HJC-ELKO-100uF-25V",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-100uf-25v.html",
          "description": "Electrolytic capacitor for bulk capacitance",
          "category": "Aluminum Electrolytic"
        }
      ],
      "applicationScenarios": [
        {
          "title": "MCU Power Decoupling",
          "description": "Used for decoupling microcontroller power pins in embedded systems"
        },
        {
          "title": "Switching Regulator Output Filter",
          "description": "Output filtering for DC-DC converters up to 2A output current"
        },
        {
          "title": "Signal Coupling in Audio Circuits",
          "description": "AC coupling capacitor for audio signal paths"
        }
      ],
      "keywords": [
        "HJC 100nF MLCC",
        "0805 X7R capacitor",
        "HJC MLCC distributor"
      ],
      "faqs": [
        {
          "question": "What is the temperature coefficient of the HJC-0805-50V-104K-X7R?",
          "answer": "The HJC-0805-50V-104K-X7R uses X7R dielectric with a temperature coefficient of ±15% over the operating temperature range of -55°C to +125°C. This means the capacitance can vary by up to ±15% from the nominal value across this temperature range. At room temperature (25°C), the capacitance is typically within ±10% of nominal. The X7R dielectric provides good stability for general-purpose applications while offering high capacitance density. For applications requiring better temperature stability, consider C0G (NP0) dielectric which has 0±30ppm/°C temperature coefficient but lower capacitance values.",
          "decisionGuide": "X7R is suitable for most decoupling and filtering applications; choose C0G only if you need precision capacitance stability.",
          "keywords": ["X7R temperature coefficient", "HJC X7R characteristics", "MLCC temperature stability"]
        },
        {
          "question": "How much DC bias capacitance loss should I expect with this MLCC?",
          "answer": "The HJC-0805-50V-104K-X7R exhibits DC bias effect typical of X7R dielectric. At 50% of rated voltage (25V), you can expect approximately 20-30% capacitance reduction. At 80% of rated voltage (40V), the capacitance may drop by 40-50%. The 0805 case size with 100nF/50V rating has relatively good DC bias performance compared to higher capacitance density parts. To minimize DC bias effects: 1) Use higher voltage rating than your application requires (50% derating recommended), 2) Consider larger case sizes for the same capacitance/voltage combination, 3) Consult HJC's DC bias curves in the datasheet for precise values. For critical applications, measure actual capacitance under operating conditions.",
          "decisionGuide": "Derate voltage to 50% of rated value to minimize DC bias effects; measure actual capacitance if precision is critical.",
          "keywords": ["X7R DC bias", "MLCC capacitance drop", "HJC 0805 DC bias"]
        },
        {
          "question": "What is the maximum ripple current for the HJC-0805-50V-104K-X7R?",
          "answer": "The HJC-0805-50V-104K-X7R has a maximum ripple current rating of approximately 1.5A RMS at 1MHz and 25°C ambient temperature. The ripple current capability is limited by self-heating - the part temperature should not exceed 125°C. At higher ambient temperatures, the allowable ripple current decreases. For example, at 85°C ambient, maximum ripple current is approximately 0.8A. The low ESR (<20mΩ at 1MHz) makes this part suitable for high-frequency switching applications. For applications with significant ripple current, ensure adequate PCB copper area for heat dissipation or consider parallel connection of multiple capacitors.",
          "decisionGuide": "For ripple currents above 1A, use multiple capacitors in parallel or select larger case sizes (1206/1210).",
          "keywords": ["HJC MLCC ripple current", "0805 capacitor current rating", "MLCC self-heating"]
        },
        {
          "question": "Is the HJC-0805-50V-104K-X7R available in automotive grade?",
          "answer": "Yes, the HJC-0805-50V-104K-X7R is available in automotive-grade (AEC-Q200 qualified) version. The automotive version features: 1) AEC-Q200 Rev E qualification with full PPAP documentation, 2) Enhanced temperature cycling performance (-55°C to +125°C, 1000 cycles), 3) Flexible termination option available to prevent board flex cracking, 4) Full lot traceability with COFC documentation, 5) Tighter process controls and inspection. The automotive version has the same electrical specifications but undergoes additional qualification testing. Lead times may be longer for automotive grade, and pricing is typically 15-20% higher than commercial grade. Contact our sales team for automotive-grade part numbers and availability.",
          "decisionGuide": "Specify automotive grade (AEC-Q200) for automotive applications; commercial grade is sufficient for industrial and consumer products.",
          "keywords": ["HJC AEC-Q200", "automotive grade MLCC", "HJC automotive capacitor"]
        },
        {
          "question": "What is the typical insulation resistance and leakage current?",
          "answer": "The HJC-0805-50V-104K-X7R has an insulation resistance greater than 10GΩ (10,000 MΩ) when measured at 25°C with rated voltage applied. This corresponds to a leakage current of less than 5nA at 50V. The insulation resistance decreases with temperature - at 125°C, it remains above 1GΩ. The high insulation resistance makes this MLCC suitable for high-impedance circuits and battery-powered applications where low leakage is critical. For comparison, typical aluminum electrolytic capacitors have insulation resistance in the 100MΩ range, making MLCCs 100x better for low-leakage applications. The insulation resistance specification applies after 1 minute of rated voltage application.",
          "decisionGuide": "MLCCs are excellent for low-leakage applications; no derating needed for insulation resistance considerations.",
          "keywords": ["HJC MLCC insulation resistance", "ceramic capacitor leakage", "MLCC IR specification"]
        },
        {
          "question": "How should I layout the PCB for optimal MLCC performance?",
          "answer": "For optimal performance with HJC-0805-50V-104K-X7R: 1) Minimize Trace Length - Keep capacitor as close as possible to IC power pins (within 5mm ideally), 2) Use Wide Traces - Minimize inductance with short, wide traces (0.5mm minimum), 3) Via Placement - Use multiple vias to power/ground planes to reduce inductance, 4) Thermal Relief - Avoid thermal relief patterns that add inductance on ground connections, 5) Keep-Out Zones - Maintain clearance from high-frequency switching nodes to prevent noise coupling, 6) Stacking - For high-current applications, place multiple capacitors in parallel with staggered placement. The 0805 case size is forgiving for hand-soldering prototypes but reflow soldering is recommended for production to ensure consistent solder joint quality.",
          "decisionGuide": "Place MLCCs as close as possible to IC power pins with wide, short traces for lowest impedance.",
          "keywords": ["MLCC PCB layout", "decoupling capacitor placement", "HJC MLCC mounting"]
        }
      ]
    },
    {
      "partNumber": "HJC-1206-100V-475K-X7R",
      "name": "MLCC 4.7µF 100V X7R 1206",
      "shortDescription": "HJC 4.7µF 100V X7R MLCC in 1206 case size for power supply filtering and energy storage applications.",
      "descriptionParagraphs": [
        "The HJC-1206-100V-475K-X7R provides high capacitance (4.7µF) with 100V rating in a compact 1206 package.",
        "This MLCC is ideal for bulk decoupling, output filtering in DC-DC converters, and energy storage applications.",
        "The larger 1206 case size provides lower ESR and better DC bias characteristics compared to smaller packages."
      ],
      "specifications": {
        "Capacitance": "4.7µF",
        "Voltage Rating": "100V DC",
        "Dielectric": "X7R",
        "Tolerance": "±10% (K)",
        "Case Size": "1206 (3.2mm x 1.6mm)",
        "Temperature Range": "-55°C to +125°C",
        "Temperature Coefficient": "±15%",
        "ESR": "<10mΩ @ 1MHz",
        "Ripple Current": "3A RMS @ 100kHz",
        "Operating Temperature": "-55°C to +125°C"
      },
      "features": [
        "High capacitance (4.7µF) in 1206 package",
        "100V rating for 24V/48V industrial systems",
        "Low ESR for high ripple current applications",
        "Excellent DC bias performance",
        "AEC-Q200 qualified version available",
        "RoHS compliant and halogen-free"
      ],
      "applications": [
        "DC-DC converter output filtering",
        "Bulk decoupling for motor drives",
        "LED driver output capacitors",
        "Industrial power supplies",
        "Automotive electronics",
        "Renewable energy systems"
      ],
      "faeReview": {
        "author": "David Chen",
        "title": "Senior FAE - Passive Components",
        "content": "The HJC-1206-100V-475K-X7R is an excellent choice for bulk capacitance in 24V and 48V industrial systems. I frequently recommend this part for DC-DC converter output filters where you need significant capacitance with low ESR. The 1206 case size provides much better DC bias performance than 0805 or 0603 alternatives - at 48V, you still retain about 70% of nominal capacitance. The 3A ripple current rating is impressive for this package size. I've used this part successfully in hundreds of industrial designs with excellent reliability. For high-current applications, I typically parallel two or three of these rather than using a single larger electrolytic - the lower ESR and longer lifetime of MLCCs often makes this a better solution despite higher BOM cost.",
        "highlight": "High capacitance MLCC with excellent ripple current capability for industrial power"
      },
      "alternativeParts": [
        {
          "partNumber": "HJC-1210-100V-106K-X7R",
          "brand": "HJC",
          "specifications": {
            "capacitance": "10µF",
            "voltage": "100V",
            "dielectric": "X7R"
          },
          "comparison": {
            "capacitance": "10µF > 4.7µF (+113%)",
            "voltage": "100V = 100V (same)",
            "caseSize": "1210 > 1206 (larger)",
            "esr": "Similar low ESR",
            "price": "~40% higher"
          },
          "reason": "Double the capacitance for applications requiring more energy storage",
          "useCase": "High-power DC-DC converters, motor drive bulk capacitance",
          "link": "/hjc/products/mlcc/hjc-1210-100v-106k-x7r.html"
        },
        {
          "partNumber": "HJC-1206-50V-475K-X7R",
          "brand": "HJC",
          "specifications": {
            "capacitance": "4.7µF",
            "voltage": "50V",
            "dielectric": "X7R"
          },
          "comparison": {
            "capacitance": "4.7µF = 4.7µF (same)",
            "voltage": "50V < 100V (lower)",
            "caseSize": "1206 = 1206 (same)",
            "dcBias": "Better DC bias at 24V (50% vs 25% of rating)",
            "price": "~20% lower"
          },
          "reason": "Lower voltage rating for 12V/24V systems with better DC bias performance",
          "useCase": "12V and 24V systems where 100V is unnecessary",
          "link": "/hjc/products/mlcc/hjc-1206-50v-475k-x7r.html"
        }
      ],
      "companionParts": [
        {
          "partNumber": "HJC-0805-100V-104K-X7R",
          "link": "/hjc/products/mlcc/hjc-0805-100v-104k-x7r.html",
          "description": "100nF for high-frequency decoupling",
          "category": "MLCC"
        },
        {
          "partNumber": "HJC-ELKO-47uF-100V",
          "link": "/hjc/products/aluminum-electrolytic/hjc-elko-47uf-100v.html",
          "description": "Electrolytic for additional bulk capacitance",
          "category": "Aluminum Electrolytic"
        },
        {
          "partNumber": "HJC-1206-100V-225K-X7R",
          "link": "/hjc/products/mlcc/hjc-1206-100v-225k-x7r.html",
          "description": "2.2µF for multi-stage filtering",
          "category": "MLCC"
        },
        {
          "partNumber": "Inductor 10µH",
          "link": "#",
          "description": "LC filter inductor",
          "category": "Magnetics"
        },
        {
          "partNumber": "HJC-1206-100V-475K-X7R",
          "link": "/hjc/products/mlcc/hjc-1206-100v-475k-x7r.html",
          "description": "Parallel for higher capacitance",
          "category": "MLCC"
        }
      ],
      "applicationScenarios": [
        {
          "title": "48V Industrial DC-DC Output Filter",
          "description": "Output filtering for 48V to 12V DC-DC converters in industrial systems"
        },
        {
          "title": "LED Driver Bulk Capacitor",
          "description": "Bulk decoupling for high-power LED drivers up to 100W"
        },
        {
          "title": "Motor Drive DC Link",
          "description": "DC link capacitor for small motor drives and servo systems"
        }
      ],
      "keywords": [
        "HJC 4.7uF MLCC",
        "1206 X7R 100V",
        "HJC high capacitance MLCC"
      ],
      "faqs": [
        {
          "question": "What is the DC bias performance of the 4.7µF 100V MLCC?",
          "answer": "The HJC-1206-100V-475K-X7R exhibits good DC bias performance due to its 1206 case size and 100V rating. At 50V DC (50% of rated voltage), capacitance retention is approximately 75-80%. At 75V (75% of rated), retention is about 60-65%. This is significantly better than smaller case sizes with the same capacitance/voltage combination. The thicker dielectric layer in the 1206 package reduces the DC bias effect compared to 0805 or 0603 alternatives. For 48V systems, operating at 50% of rated voltage provides excellent capacitance retention. Always consult HJC's DC bias curves for precise values at your operating voltage.",
          "decisionGuide": "The 100V rating provides good margin for 48V systems with acceptable DC bias performance.",
          "keywords": ["HJC 4.7uF DC bias", "1206 MLCC capacitance drop", "X7R DC bias 100V"]
        },
        {
          "question": "How does this MLCC compare to aluminum electrolytic for output filtering?",
          "answer": "Compared to aluminum electrolytic capacitors, the HJC-1206-100V-475K-X7R offers several advantages: 1) ESR - MLCC ESR is <10mΩ vs 0.5-2Ω for typical electrolytics, providing much better ripple voltage suppression, 2) Lifetime - MLCCs have no wear-out mechanism vs 2000-10000 hour life for electrolytics, 3) Temperature - MLCCs operate reliably to 125°C vs 85-105°C for most electrolytics, 4) Size - Much smaller package for equivalent ripple performance, 5) Reliability - No electrolyte drying or venting concerns. However, MLCCs have lower capacitance density (4.7µF vs 100µF+ for same size electrolytic) and exhibit DC bias effects. For high-ripple, high-temperature applications, MLCCs are superior; for bulk capacitance at low frequencies, electrolytics remain cost-effective.",
          "decisionGuide": "Use MLCC for high-frequency, high-temperature, or high-reliability applications; combine with electrolytic for bulk capacitance.",
          "keywords": ["MLCC vs electrolytic", "ceramic vs aluminum capacitor", "output filter capacitor selection"]
        },
        {
          "question": "What is the self-resonant frequency of this MLCC?",
          "answer": "The HJC-1206-100V-475K-X7R has a typical self-resonant frequency (SRF) of approximately 3-5 MHz. At frequencies below SRF, the capacitor behaves capacitively. At SRF, impedance is at minimum (equal to ESR). Above SRF, the capacitor behaves inductively due to package inductance. The 1206 case size has lower inductance than larger packages - typically 1-2nH. For switching power supplies operating at 100kHz-1MHz, this MLCC is well below its SRF and provides excellent filtering. For very high frequency applications (>10MHz), smaller case sizes (0603, 0402) may be preferred due to higher SRF. The SRF varies with PCB layout and mounting, so actual performance should be verified in the final application.",
          "decisionGuide": "This MLCC is ideal for switching power supplies up to several MHz; use smaller case sizes for RF applications.",
          "keywords": ["MLCC self resonant frequency", "1206 SRF", "capacitor impedance vs frequency"]
        },
        {
          "question": "Can I use multiple capacitors in parallel to increase capacitance?",
          "answer": "Yes, paralleling multiple HJC-1206-100V-475K-X7R capacitors is an effective way to increase capacitance and ripple current capability. Two capacitors in parallel provide: 1) 2x capacitance (9.4µF), 2) 2x ripple current capability (6A total), 3) ~50% lower effective ESR, 4) Better DC bias performance (each capacitor sees less voltage). For best results: 1) Use identical capacitors from same lot if possible, 2) Place capacitors close together with symmetrical layout, 3) Use separate vias to ground plane for each capacitor, 4) Keep trace lengths equal to ensure current sharing. Parallel configuration is often preferred over a single larger capacitor for high-ripple applications because it reduces ESR and spreads heat dissipation.",
          "decisionGuide": "Use parallel configuration for high-ripple applications or when single capacitor capacitance is insufficient.",
          "keywords": ["MLCC parallel connection", "capacitor bank", "parallel ceramic capacitors"]
        },
        {
          "question": "What are the soldering recommendations for this MLCC?",
          "answer": "Soldering recommendations for HJC-1206-100V-475K-X7R: 1) Reflow Soldering (Recommended) - Peak temperature 245-250°C, time above 217°C: 60-90 seconds, preheat: 150-180°C for 60-120 seconds. 2) Hand Soldering - Iron temperature 350°C maximum, contact time <3 seconds per terminal, use flux-core solder wire. 3) Wave Soldering - Not recommended for 1206 and smaller sizes due to thermal shock risk. 4) Rework - Use hot air station with preheating, maximum 260°C, limit to 2 rework cycles. Important precautions: 1) Avoid thermal shock - gradual heating prevents ceramic cracking, 2) Do not exceed 260°C at any point, 3) Allow natural cooling - forced cooling can cause cracks, 4) Use no-clean flux to avoid cleaning damage. The 1206 size is relatively robust but still requires proper thermal management during soldering.",
          "decisionGuide": "Use reflow soldering for production; hand soldering acceptable for prototypes with temperature control.",
          "keywords": ["MLCC soldering profile", "1206 capacitor soldering", "ceramic capacitor reflow"]
        },
        {
          "question": "Is this capacitor suitable for AC applications?",
          "answer": "The HJC-1206-100V-475K-X7R can be used in AC applications with proper derating. The 100V DC rating corresponds to approximately 70V AC RMS (peak voltage = 100V). For AC applications: 1) Voltage Derating - Maximum AC voltage should not exceed 70V RMS to maintain safety margin, 2) Frequency - Suitable for AC line frequencies (50/60Hz) and audio frequencies; X7R dielectric losses increase at very high frequencies, 3) Current - AC current causes self-heating; ensure ripple current ratings are not exceeded, 4) Safety - Not safety rated (X/Y class) for direct AC line connection; use only in isolated secondary circuits. For direct AC line applications, use HJC's safety-rated ceramic capacitors (Y1/Y2 class). This capacitor is ideal for audio coupling, signal conditioning, and DC-blocking applications in low-voltage circuits.",
          "decisionGuide": "Suitable for AC up to ~70V RMS in isolated circuits; use safety-rated capacitors for direct AC line connection.",
          "keywords": ["MLCC AC rating", "ceramic capacitor AC voltage", "X7R AC application"]
        }
      ]
    }
  ]
};

productsData.categories.push(mlccCategory);

// Write the file
fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✅ Created products.json with MLCC category');
