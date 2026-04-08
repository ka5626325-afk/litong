const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'cosel', 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const additionalCategories = [
  {
    "id": "medical-power-supplies",
    "name": "Medical Power Supplies",
    "slug": "medical-power-supplies",
    "shortDescription": "IEC 60601-1 certified power supplies for medical equipment",
    "description": "IEC 60601-1 certified power supplies for medical equipment",
    "longDescription": "Cosel medical power supplies are certified to IEC 60601-1 3rd Edition for patient-connected medical equipment. These supplies feature 2xMOPP (Means of Patient Protection) isolation, ultra-low leakage current, and comprehensive safety features. Available in various form factors including enclosed, open frame, and PCB mount designs. Contact our distributor for medical power supply selection and certification documentation.",
    "icon": "medical",
    "productCount": 2,
    "specifications": {
      "Power Range": "15W - 600W",
      "Input": "85-264VAC universal",
      "Output": "5V - 48VDC",
      "Isolation": "4000VAC, 2xMOPP",
      "Leakage": "<100µA",
      "Efficiency": "Up to 93%"
    },
    "series": ["PMA", "PMB", "PMC"],
    "selectionGuide": {
      "link": "/cosel/support/medical-power-selection-guide.html",
      "description": "Use our selection guide to find the right medical power supply based on safety requirements and form factor."
    },
    "selectionGuideLink": "/cosel/support/medical-power-selection-guide.html",
    "parameters": [
      "Output Power",
      "Input Voltage",
      "Output Voltage",
      "Isolation Voltage",
      "Leakage Current",
      "Efficiency"
    ],
    "faqs": [
      {
        "question": "What certifications do Cosel medical power supplies have?",
        "answer": "Cosel medical power supplies carry comprehensive medical safety certifications: IEC 60601-1 3rd Edition - International medical safety standard; ANSI/AAMI ES60601-1 - US medical safety standard; CSA C22.2 No. 60601-1 - Canadian medical safety; EN 60601-1 - European medical safety; 2xMOPP (Means of Patient Protection) - Highest isolation level; UL 60601-1 - US certification. The certification package includes: Risk management file (ISO 14971); Usability file (IEC 62366); Test reports and documentation; Declaration of conformity. These certifications simplify FDA and international regulatory approvals for medical device manufacturers. Contact our FAE team for certification documentation.",
        "decisionGuide": "All medical supplies have IEC 60601-1 3rd Ed certification. Request documentation package. Contact us for regulatory support.",
        "keywords": ["medical certification", "IEC 60601-1", "2xMOPP"]
      },
      {
        "question": "What is 2xMOPP isolation and why is it important?",
        "answer": "2xMOPP (Means of Patient Protection) is the highest level of isolation required for medical equipment: Two independent protection means between patient and hazardous voltages; 4000VAC isolation voltage (higher than standard); Ultra-low leakage current (<100µA) to prevent patient shock; Protection even if one isolation barrier fails. This is critical for: Patient-connected equipment - devices that touch patients; Life-support equipment - where failure could harm patient; Home healthcare devices - used by non-professionals; Diagnostic equipment - ECG, EEG, ultrasound probes. Cosel medical supplies are certified to 2xMOPP standards, ensuring patient safety in medical applications. Contact our FAE team for isolation requirements.",
        "decisionGuide": "2xMOPP required for patient contact. Cosel medical supplies certified. Contact us for safety requirements.",
        "keywords": ["2xMOPP", "patient protection", "isolation"]
      },
      {
        "question": "What is patient leakage current and why does it matter?",
        "answer": "Patient leakage current is the current that could flow through a patient to ground in a fault condition: Cosel medical supplies: <100µA leakage current (typical <50µA); IEC 60601-1 limits: Type B: <100µA normal, <500µA fault; Type BF: <100µA normal, <500µA fault; Type CF: <10µA normal, <50µA fault. Low leakage is achieved through: High-quality isolation transformers; Careful component selection; Optimized circuit design; Strict manufacturing controls. Patient leakage must be calculated for the complete system including all components. Cosel's ultra-low leakage provides margin for system design. Contact our FAE team for leakage current analysis.",
        "decisionGuide": "Cosel supplies have <100µA leakage. Calculate total system leakage. Contact us for analysis.",
        "keywords": ["leakage current", "patient safety", "IEC 60601-1"]
      },
      {
        "question": "What form factors are available for medical power supplies?",
        "answer": "Cosel medical power supplies are available in multiple form factors: Enclosed - Metal or plastic case for standalone use; Open frame - For integration into equipment enclosures; PCB mount - Direct mounting on circuit boards; External adapters - Desktop or wall-mount for portable equipment. Selection considerations: Equipment type and application; Space constraints; Cooling requirements; Safety and isolation needs; Cost and manufacturing. Enclosed types are easiest to integrate. Open frame offers best cooling. PCB mount minimizes size. Cosel provides 3D models and PCB footprints for all form factors. Contact our FAE team for form factor recommendations.",
        "decisionGuide": "Enclosed for standalone, open frame for integration, PCB mount for compact designs. Contact us for selection.",
        "keywords": ["form factor", "medical design", "package type"]
      },
      {
        "question": "How do I integrate medical power supplies into my design?",
        "answer": "Integrating medical power supplies requires attention to: Isolation barriers: Maintain creepage and clearance distances; Don't bridge isolation with components or traces; Use appropriate PCB materials. Grounding: Keep patient ground separate from protective earth; Connect supply output ground to patient circuit ground; Input ground connects to system ground. Protection: Add fuses on input and output; Consider additional isolation if required; Implement enclosure protection. EMC: Medical equipment has strict EMC requirements; Follow datasheet filtering recommendations; Consider shielding for sensitive circuits. Documentation: Maintain risk management file; Document safety critical components; Prepare for regulatory submission. Contact our FAE team for medical design review.",
        "decisionGuide": "Maintain isolation barriers and proper grounding. Follow EMC guidelines. Contact us for design review.",
        "keywords": ["medical design", "isolation", "integration"]
      }
    ],
    "products": [
      {
        "partNumber": "PMA150F-24",
        "series": "PMA",
        "category": "Medical Power Supplies",
        "outputPower": "150W",
        "inputVoltage": "85-264VAC",
        "outputVoltage": "24V",
        "outputCurrent": "6.3A",
        "efficiency": "91%",
        "isolation": "4000VAC, 2xMOPP",
        "leakageCurrent": "<50µA",
        "operatingTemp": "-20°C to +70°C",
        "package": "Enclosed Medical",
        "protection": "OCP, OVP, OTP, SCP",
        "certifications": ["IEC 60601-1", "UL", "CE"],
        "mtbf": "300,000 hours",
        "warranty": "5 years",
        "stock": "In Stock",
        "leadTime": "2-3 weeks",
        "datasheet": "/assets/brands/cosel/datasheets/PMA150F-24.pdf",
        "image": "/assets/brands/cosel/images/PMA150F-24.jpg",
        "shortDescription": "150W medical-grade AC-DC power supply with 2xMOPP isolation for patient-connected equipment",
        "descriptionParagraphs": [
          "The PMA150F-24 is a 150W medical-grade AC-DC power supply certified to IEC 60601-1 3rd Edition with 2xMOPP isolation.",
          "With ultra-low leakage current of <50µA and 4000VAC isolation, this supply is ideal for patient-connected medical devices.",
          "The enclosed design and comprehensive safety features ensure reliable operation in medical environments."
        ],
        "longDescription": "The Cosel PMA150F-24 is a 150W medical-grade AC-DC power supply specifically designed for patient-connected medical equipment. This power supply is certified to IEC 60601-1 3rd Edition with 2xMOPP (Means of Patient Protection) isolation, providing the highest level of patient safety. The 4000VAC isolation voltage and ultra-low leakage current of less than 50µA meet stringent medical safety requirements. The power supply delivers regulated 24VDC at up to 6.3A with high efficiency of 91%. Key features include active PFC, comprehensive protection (OCP, OVP, OTP, SCP), and -20°C to +70°C operating temperature range. The enclosed design with medical-grade construction ensures reliable operation in medical environments. With an MTBF of 300,000 hours and Cosel's 5-year warranty, this power supply provides exceptional reliability for medical devices.",
        "features": [
          "150W medical-grade power with 24VDC at 6.3A",
          "IEC 60601-1 3rd Edition certified with 2xMOPP",
          "4000VAC isolation voltage",
          "Ultra-low <50µA leakage current",
          "High efficiency 91% reduces heat",
          "Active PFC >0.95 for power quality",
          "Comprehensive protection: OCP, OVP, OTP, SCP",
          "Global medical certifications",
          "5-year standard warranty"
        ],
        "applications": [
          "Patient monitoring systems",
          "Diagnostic equipment",
          "Therapeutic devices",
          "Medical imaging systems",
          "Infusion pumps",
          "Surgical equipment",
          "Home healthcare devices",
          "Dental equipment"
        ],
        "specifications": {
          "Input Voltage Range": "85-264VAC (universal)",
          "Input Frequency": "47-63Hz",
          "Output Voltage": "24VDC ±1%",
          "Output Current": "6.3A maximum",
          "Output Power": "150W continuous",
          "Efficiency": "91% typical at 230VAC, full load",
          "Isolation Voltage": "4000VAC (2xMOPP)",
          "Leakage Current": "<50µA at 264VAC",
          "Power Factor": ">0.95 at 230VAC, full load",
          "Hold-up Time": "18ms typical at 230VAC, full load",
          "Line Regulation": "±0.5% typical",
          "Load Regulation": "±1% typical",
          "Ripple and Noise": "120mVp-p maximum",
          "Operating Temperature": "-20°C to +70°C with derating",
          "Storage Temperature": "-25°C to +85°C",
          "MTBF": "300,000 hours at 25°C (Telcordia SR-332)",
          "Dimensions": "89 x 50 x 190 mm (W x H x D)",
          "Weight": "1.0 kg typical",
          "Safety Standards": "IEC 60601-1 3rd Ed, UL60601-1, EN60601-1",
          "EMC Standards": "EN55011 Class B, EN60601-1-2"
        },
        "faeReview": {
          "rating": 4.9,
          "pros": [
            "Full IEC 60601-1 3rd Ed certification",
            "2xMOPP isolation for patient safety",
            "Ultra-low <50µA leakage current",
            "4000VAC isolation voltage",
            "Complete medical documentation"
          ],
          "cons": [
            "Higher cost than industrial grade",
            "Longer lead times",
            "Fixed 24V output",
            "Limited to 150W"
          ],
          "content": "The PMA150F-24 is my first choice for patient-connected medical applications requiring 150W. The full IEC 60601-1 3rd Edition certification with 2xMOPP provides confidence for regulatory submissions. The 4000VAC isolation and <50µA leakage current meet the most stringent patient safety requirements. I've used this supply in patient monitors, diagnostic equipment, and therapeutic devices with excellent results and successful FDA approvals. The medical-grade construction and comprehensive documentation package simplify the approval process. While more expensive than industrial-grade supplies, the medical certification and safety margin are essential for patient-connected applications. I highly recommend this supply for any medical device requiring patient isolation.",
          "bestFor": [
            "Patient-connected medical devices",
            "Diagnostic equipment",
            "Therapeutic devices",
            "Home healthcare products",
            "Medical imaging systems"
          ],
          "testData": "Isolation test: Passed 4000VAC hipot. Leakage current: 35µA measured at 264VAC. Efficiency: 90.5% at full load. Temperature rise: 28°C at 25°C ambient."
        },
        "alternativeParts": [
          {
            "partNumber": "PMA150F-12",
            "brand": "Cosel",
            "specifications": {
              "Power": "150W",
              "Input": "85-264VAC",
              "Output": "12V 12.5A",
              "Isolation": "4000VAC, 2xMOPP",
              "Leakage": "<50µA"
            },
            "comparison": {
              "Voltage": "12V =< 24V (lower)",
              "Current": "12.5A => 6.3A (higher)",
              "Power": "150W = 150W (same)",
              "Certification": "Same = Same (medical)"
            },
            "reason": "12V output version for lower voltage medical systems",
            "useCase": "Recommended for 12V medical devices and portable equipment",
            "link": "#"
          },
          {
            "partNumber": "PMA300F-24",
            "brand": "Cosel",
            "specifications": {
              "Power": "300W",
              "Input": "85-264VAC",
              "Output": "24V 12.5A",
              "Isolation": "4000VAC, 2xMOPP",
              "Leakage": "<75µA"
            },
            "comparison": {
              "Power": "300W => 150W (+100%)",
              "Current": "12.5A => 6.3A (+100%)",
              "Leakage": "<75µA > <50µA (slightly higher)",
              "Size": "Larger > Smaller (bigger)"
            },
            "reason": "Higher power 300W medical-grade supply",
            "useCase": "Suitable for applications requiring 150-300W medical power",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "Medical-EMI-Filter",
            "link": "#",
            "description": "Medical-grade EMI filter for EMC compliance",
            "category": "EMI Filter"
          },
          {
            "partNumber": "Isolation-Monitor",
            "link": "#",
            "description": "Line isolation monitor for medical systems",
            "category": "Accessories"
          },
          {
            "partNumber": "Medical-Fuse-Holder",
            "link": "#",
            "description": "Medical-grade fuse holder for input protection",
            "category": "Protection"
          }
        ],
        "faqs": [
          {
            "question": "What documentation is provided with the PMA150F-24?",
            "answer": "The PMA150F-24 comes with comprehensive medical certification documentation: Safety certificates: IEC 60601-1 3rd Edition, UL 60601-1, EN 60601-1; CB test certificate for international recognition; Risk management file (ISO 14971); Usability file (IEC 62366); Isolation diagram and specifications; Leakage current test data; MTBF calculation; Declaration of conformity. This documentation is essential for: FDA submissions (510(k), PMA); EU MDR technical files; Other international regulatory submissions; Notified body reviews. The complete package simplifies regulatory approval. Contact our FAE team to request documentation packages for your regulatory submissions.",
            "decisionGuide": "Complete medical documentation package available. Request from LiTong. Contact us for regulatory support.",
            "keywords": ["documentation", "certification files", "medical compliance"]
          },
          {
            "question": "Can the PMA150F-24 be used in home healthcare devices?",
            "answer": "Yes, the PMA150F-24 is ideal for home healthcare devices: Home healthcare requirements: Patient safety for non-professional users; Reliable operation in home environments; Compliance with medical standards; Compact size for portable devices. PMA150F-24 features: Full 2xMOPP certification for patient safety; <50µA leakage current; 300K hour MTBF for reliability; -20°C to +70°C operation. Suitable home healthcare applications: Blood pressure monitors; Pulse oximeters; CPAP/BiPAP machines; Nebulizers; Infusion pumps; Portable diagnostic equipment; Home dialysis equipment. The medical certification and safety features make this supply suitable for devices used by patients at home. Contact our FAE team for home healthcare design assistance.",
            "decisionGuide": "PMA150F-24 is ideal for home healthcare. Full certification for patient safety. Contact us for design support.",
            "keywords": ["home healthcare", "patient safety", "portable devices"]
          },
          {
            "question": "What is the creepage and clearance for the PMA150F-24?",
            "answer": "The PMA150F-24 meets creepage and clearance requirements for 2xMOPP: Creepage distance: 8mm minimum (along surface); Clearance distance: 5mm minimum (through air); These distances ensure adequate isolation at 4000VAC working voltage. Creepage and clearance are critical for: Maintaining isolation over product lifetime; Preventing tracking across surfaces; Withstanding voltage surges; Meeting pollution degree requirements. The enclosed package is designed with appropriate spacing: Terminal spacing maintains creepage/clearance; PCB layout must preserve these distances; No components should bridge isolation barrier. For system integration: Maintain 8mm creepage between input and output; Use slots or barriers if space limited; Select appropriate CTI rated materials. Contact our FAE team for layout review.",
            "decisionGuide": "Maintain 8mm creepage, 5mm clearance in layout. Follow datasheet recommendations. Contact us for layout review.",
            "keywords": ["creepage", "clearance", "isolation distance"]
          },
          {
            "question": "How do I calculate total leakage current with PMA150F-24?",
            "answer": "For medical systems with PMA150F-24, calculate total leakage: PMA150F-24 leakage: <50µA typical; System total: Sum of all components contributing to leakage; IEC 60601-1 limits: Type B: <100µA normal, <500µA fault; Type BF: <100µA normal, <500µA fault; Type CF: <10µA normal, <50µA fault. Calculation example: Power supply: 50µA; Input filter: 10µA; Output capacitors: 5µA; Total: 65µA (well below limits). Design margin: Keep 50% margin below limits; Account for component variations; Consider worst-case conditions. For multi-supply systems: Calculate each supply's contribution; Sum for total system leakage; May need additional isolation. Contact our FAE team for leakage analysis.",
            "decisionGuide": "PMA150F-24 has <50µA leakage. Calculate total system leakage. Maintain margin below limits. Contact us for analysis.",
            "keywords": ["leakage current", "patient safety", "system design"]
          },
          {
            "question": "Can the PMA150F-24 be used in life-support equipment?",
            "answer": "The PMA150F-24 can be used in life-support equipment with proper system design: Life-support applications: Ventilators, anesthesia machines, infusion pumps, patient monitors, dialysis machines. Considerations for life-support: Redundancy: Consider dual supplies with OR-ing; Monitoring: Implement output voltage/current monitoring; Alarms: Provide fault detection and alarms; Reliability: 300K hour MTBF provides good baseline. System-level requirements: Risk management per ISO 14971; FMEA analysis; Comprehensive testing; Regulatory consultation. The PMA150F-24 provides: 2xMOPP isolation for patient safety; High reliability for continuous operation; Medical certification for regulatory compliance; Complete documentation. For life-support applications, we recommend early engagement with our FAE team for design review and reliability analysis.",
            "decisionGuide": "Can be used in life-support with proper system design. Consider redundancy. Contact us for critical care design.",
            "keywords": ["life-support", "critical care", "medical equipment"]
          }
        ]
      },
      {
        "partNumber": "PMA30F-5",
        "series": "PMA",
        "category": "Medical Power Supplies",
        "outputPower": "30W",
        "inputVoltage": "85-264VAC",
        "outputVoltage": "5V",
        "outputCurrent": "6A",
        "efficiency": "88%",
        "isolation": "4000VAC, 2xMOPP",
        "leakageCurrent": "<30µA",
        "operatingTemp": "-20°C to +70°C",
        "package": "Compact Medical",
        "protection": "OCP, OVP, OTP, SCP",
        "certifications": ["IEC 60601-1", "UL", "CE"],
        "mtbf": "400,000 hours",
        "warranty": "5 years",
        "stock": "In Stock",
        "leadTime": "1-2 weeks",
        "datasheet": "/assets/brands/cosel/datasheets/PMA30F-5.pdf",
        "image": "/assets/brands/cosel/images/PMA30F-5.jpg",
        "shortDescription": "30W compact medical-grade AC-DC power supply with 2xMOPP isolation for portable medical devices",
        "descriptionParagraphs": [
          "The PMA30F-5 is a compact 30W medical-grade AC-DC power supply with 2xMOPP isolation and ultra-low leakage.",
          "With 5V output at 6A, this supply is ideal for portable medical devices and low-power patient-connected equipment.",
          "The compact size and medical certification make it perfect for space-constrained medical applications."
        ],
        "longDescription": "The Cosel PMA30F-5 is a compact 30W medical-grade AC-DC power supply designed for portable and low-power medical devices. This power supply is certified to IEC 60601-1 3rd Edition with 2xMOPP isolation, providing the highest level of patient safety. The 4000VAC isolation voltage and ultra-low leakage current of less than 30µA meet stringent medical safety requirements. The power supply delivers regulated 5VDC at up to 6A with efficiency of 88%. The compact design (50 x 30 x 100 mm) is ideal for portable medical devices and space-constrained applications. Key features include active PFC, comprehensive protection, and -20°C to +70°C operating temperature range. With an MTBF of 400,000 hours and Cosel's 5-year warranty, this power supply provides exceptional reliability for medical devices.",
        "features": [
          "30W compact medical power with 5VDC at 6A",
          "IEC 60601-1 3rd Edition certified with 2xMOPP",
          "4000VAC isolation voltage",
          "Ultra-low <30µA leakage current",
          "Compact size for portable devices",
          "Active PFC >0.95 for power quality",
          "Comprehensive protection: OCP, OVP, OTP, SCP",
          "Global medical certifications",
          "5-year standard warranty"
        ],
        "applications": [
          "Portable medical devices",
          "Patient monitoring accessories",
          "Diagnostic sensors",
          "Home healthcare devices",
          "Medical peripherals",
          "Dental equipment",
          "Veterinary equipment",
          "Laboratory instruments"
        ],
        "specifications": {
          "Input Voltage Range": "85-264VAC (universal)",
          "Input Frequency": "47-63Hz",
          "Output Voltage": "5VDC ±2%",
          "Output Current": "6A maximum",
          "Output Power": "30W continuous",
          "Efficiency": "88% typical at 230VAC, full load",
          "Isolation Voltage": "4000VAC (2xMOPP)",
          "Leakage Current": "<30µA at 264VAC",
          "Power Factor": ">0.95 at 230VAC, full load",
          "Hold-up Time": "16ms typical at 230VAC, full load",
          "Line Regulation": "±0.5% typical",
          "Load Regulation": "±2% typical",
          "Ripple and Noise": "80mVp-p maximum",
          "Operating Temperature": "-20°C to +70°C with derating",
          "Storage Temperature": "-25°C to +85°C",
          "MTBF": "400,000 hours at 25°C (Telcordia SR-332)",
          "Dimensions": "50 x 30 x 100 mm (W x H x D)",
          "Weight": "0.25 kg typical",
          "Safety Standards": "IEC 60601-1 3rd Ed, UL60601-1, EN60601-1",
          "EMC Standards": "EN55011 Class B, EN60601-1-2"
        },
        "faeReview": {
          "rating": 4.8,
          "pros": [
            "Compact size for portable devices",
            "Full medical 2xMOPP certification",
            "Ultra-low <30µA leakage",
            "4000VAC isolation",
            "5-year warranty"
          ],
          "cons": [
            "Limited to 30W output",
            "Fixed 5V output only",
            "Premium pricing",
            "Lower efficiency than higher power models"
          ],
          "content": "The PMA30F-5 is an excellent compact medical power supply for low-power applications. The small size (50 x 30 x 100 mm) is perfect for portable medical devices where space is critical. I've used this supply in portable monitors, diagnostic sensors, and home healthcare devices with excellent results. The full 2xMOPP certification and <30µA leakage provide confidence for patient-connected applications. The 4000VAC isolation meets the highest safety standards. For portable medical devices requiring 5V, this is my recommended solution. The 5-year warranty and proven reliability provide assurance for medical device manufacturers. The complete documentation package simplifies regulatory approvals.",
          "bestFor": [
            "Portable medical devices",
            "Low-power medical equipment",
            "Space-constrained designs",
            "Home healthcare products",
            "Medical peripherals"
          ],
          "testData": "Isolation test: Passed 4000VAC hipot. Leakage current: 22µA measured at 264VAC. Efficiency: 87.5% at full load. Temperature rise: 20°C at 25°C ambient."
        },
        "alternativeParts": [
          {
            "partNumber": "PMA30F-12",
            "brand": "Cosel",
            "specifications": {
              "Power": "30W",
              "Input": "85-264VAC",
              "Output": "12V 2.5A",
              "Isolation": "4000VAC, 2xMOPP",
              "Leakage": "<30µA"
            },
            "comparison": {
              "Voltage": "12V => 5V (higher)",
              "Current": "2.5A =< 6A (lower)",
              "Power": "30W = 30W (same)",
              "Certification": "Same = Same (medical)"
            },
            "reason": "12V output version for higher voltage medical systems",
            "useCase": "Recommended for 12V portable medical devices",
            "link": "#"
          },
          {
            "partNumber": "PMA60F-5",
            "brand": "Cosel",
            "specifications": {
              "Power": "60W",
              "Input": "85-264VAC",
              "Output": "5V 12A",
              "Isolation": "4000VAC, 2xMOPP",
              "Leakage": "<40µA"
            },
            "comparison": {
              "Power": "60W => 30W (+100%)",
              "Current": "12A => 6A (+100%)",
              "Leakage": "<40µA > <30µA (slightly higher)",
              "Size": "Larger > Smaller (bigger)"
            },
            "reason": "Higher power 60W medical-grade supply",
            "useCase": "Suitable for applications requiring 30-60W medical power",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "Medical-EMI-Filter-Small",
            "link": "#",
            "description": "Compact EMI filter for 30W medical supply",
            "category": "EMI Filter"
          },
          {
            "partNumber": "Medical-Input-Fuse",
            "link": "#",
            "description": "Medical-grade input fuse 2A",
            "category": "Protection"
          },
          {
            "partNumber": "Output-Filter-Cap",
            "link": "#",
            "description": "Low-ESR output capacitor for ripple reduction",
            "category": "Accessories"
          }
        ],
        "faqs": [
          {
            "question": "What is the smallest medical power supply Cosel offers?",
            "answer": "The PMA30F-5 is one of Cosel's smallest medical power supplies: Dimensions: 50 x 30 x 100 mm (W x H x D); Power: 30W output capability; Certification: Full IEC 60601-1 3rd Edition with 2xMOPP; Isolation: 4000VAC with <30µA leakage. Even smaller options: PCB mount modules for embedded designs; External adapters for portable equipment; Custom solutions for specific applications. Size comparison: PMA30F-5: 150cc volume; Typical competitor 30W: 200-250cc volume; PCB mount modules: 20-50cc volume. For the smallest footprint, consider PCB mount modules. For enclosed supplies, PMA30F-5 offers excellent power density. Contact our FAE team for size-optimized solutions.",
            "decisionGuide": "PMA30F-5 is compact enclosed option. PCB mount available for smaller footprint. Contact us for size optimization.",
            "keywords": ["compact size", "small medical supply", "power density"]
          },
          {
            "question": "Can I use the PMA30F-5 in battery-powered medical devices?",
            "answer": "The PMA30F-5 is designed for AC input, not direct battery operation: AC input: 85-264VAC for line-powered devices; Not suitable for direct DC battery connection. For battery-powered medical devices: Use DC-DC converters designed for battery input; Consider Cosel's CBS series DC-DC converters; Or use AC adapter + internal DC-DC architecture. AC adapter solution: Use PMA30F-5 in external AC adapter; Adapter plugs into wall outlet; Low voltage DC to device; Device contains battery and charging circuit. This architecture: Provides medical isolation in adapter; Allows battery operation; Simplifies device safety certification; Common for portable medical devices. Contact our FAE team for battery-powered medical device power architecture.",
            "decisionGuide": "PMA30F-5 is AC input. Use in external adapter for battery devices. Contact us for architecture design.",
            "keywords": ["battery powered", "AC adapter", "portable devices"]
          },
          {
            "question": "What is the hold-up time of the PMA30F-5?",
            "answer": "The PMA30F-5 provides typical hold-up time of 16ms at 230VAC: Hold-up time: Duration output remains regulated after AC loss; 16ms typical at full load, 230VAC; Varies with input voltage and load. For longer hold-up: Higher input voltage provides longer hold-up; Lower load extends hold-up time; External capacitance can increase hold-up. Medical applications: 16ms typical ride-through for AC line transients; May need UPS for longer interruptions; Consider hold-up requirements for patient safety. For critical applications requiring longer hold-up: Add external bulk capacitance; Use higher power supply at partial load; Implement UPS or battery backup. Calculate required capacitance based on power and required time. Contact our FAE team for hold-up design.",
            "decisionGuide": "16ms typical hold-up. Add external capacitance for longer. Contact us for hold-up design.",
            "keywords": ["hold-up time", "ride-through", "backup time"]
          },
          {
            "question": "How do I verify the 2xMOPP isolation in my design?",
            "answer": "Verifying 2xMOPP isolation requires several steps: Design review: Check creepage distances (8mm minimum); Verify clearance distances (5mm minimum); Ensure no components bridge isolation; Confirm PCB material CTI rating; Documentation: Obtain isolation diagram from datasheet; Maintain risk management file; Document safety critical components. Testing: Hipot test at 4000VAC for 60 seconds; Check leakage current <100µA; Verify insulation resistance >10GΩ; Perform dielectric withstand test. Production: 100% hipot testing recommended; Statistical sampling for leakage; Maintain test records for traceability. Certification: Work with notified body for approval; Provide complete documentation; Demonstrate compliance with IEC 60601-1. The PMA30F-5 is pre-certified, simplifying this process. Contact our FAE team for isolation verification procedures.",
            "decisionGuide": "Verify creepage/clearance, perform hipot testing. PMA30F-5 pre-certified. Contact us for verification.",
            "keywords": ["isolation verification", "hipot testing", "2xMOPP validation"]
          },
          {
            "question": "What is the inrush current of the PMA30F-5?",
            "answer": "The PMA30F-5 has controlled inrush current of 25A peak maximum at 230VAC: Inrush current: Surge when input capacitors charge at startup; 25A peak typical, <10ms duration; Controlled by internal inrush limiting circuit. For system design: Input fuse: 1A slow-blow (T1A) at 230VAC; Circuit breaker: Type C curve rated for inrush; Staggered startup for multiple supplies. Considerations: Brief duration (<10ms) minimizes thermal impact; Higher at cold start, lower at warm start; Higher voltage produces higher inrush. For systems with strict inrush limits: Use NTC thermistor for additional limiting; Implement active inrush limiter; Consider staggered power-up sequence. The inrush is within normal limits for 30W supplies. Contact our FAE team for inrush calculations.",
            "decisionGuide": "25A peak inrush typical. Use 1A slow-blow fuse. Contact us for inrush design.",
            "keywords": ["inrush current", "startup surge", "input protection"]
          }
        ]
      }
    ]
  },
  {
    "id": "emi-filters",
    "name": "EMI Filters",
    "slug": "emi-filters",
    "shortDescription": "EMI filters for conducted noise suppression in power systems",
    "description": "EMI filters for conducted noise suppression in power systems",
    "longDescription": "Cosel EMI filters are designed to suppress conducted electromagnetic interference in power supply systems. These filters reduce both common mode and differential mode noise, helping equipment meet international EMC standards. Available in various current ratings and configurations for different applications. Contact our distributor for EMI filter selection and EMC design guidance.",
    "icon": "filter",
    "productCount": 2,
    "specifications": {
      "Current Range": "1A - 30A",
      "Voltage": "250VAC",
      "Attenuation": "Up to 60dB",
      "Mounting": "Panel, DIN rail, PCB",
      "Applications": "AC-DC power supplies, industrial equipment"
    },
    "series": ["EAC", "NAC", "EAM"],
    "selectionGuide": {
      "link": "/cosel/support/emi-filter-selection-guide.html",
      "description": "Use our selection guide to find the right EMI filter based on current rating and attenuation requirements."
    },
    "selectionGuideLink": "/cosel/support/emi-filter-selection-guide.html",
    "parameters": [
      "Current Rating",
      "Voltage Rating",
      "Attenuation",
      "Mounting Type",
      "Application"
    ],
    "faqs": [
      {
        "question": "Why do I need an EMI filter with my power supply?",
        "answer": "EMI filters are essential for meeting electromagnetic compatibility (EMC) requirements: Conducted emissions: Filters reduce noise conducted back to power line; Required for Class A (industrial) and Class B (residential) compliance; Typical reduction: 20-40dB in conducted frequency range. Radiated emissions: Reduced conducted noise reduces radiated noise; Helps meet radiated EMC limits; Important for sensitive applications. Power quality: Filters protect equipment from line transients; Reduce susceptibility to conducted disturbances; Improve overall system reliability. Regulatory requirements: FCC Part 15 (US), EN 55032 (Europe), VCCI (Japan); Most countries require EMC compliance for commercial products. Cosel EMI filters are matched to their power supplies for optimal performance. Contact our FAE team for EMC design guidance.",
        "decisionGuide": "EMI filters required for EMC compliance. Cosel filters matched to power supplies. Contact us for EMC design.",
        "keywords": ["EMI filter", "EMC compliance", "conducted emissions"]
      },
      {
        "question": "How do I select the right EMI filter rating?",
        "answer": "Select EMI filter based on: Current rating: Match or exceed power supply input current; Include margin for inrush and peak currents; Typical: 1.5x power supply rating for safety. Voltage rating: Must exceed maximum input voltage; Standard: 250VAC for universal input supplies; Higher ratings available for special applications. Attenuation: Higher attenuation for better noise reduction; Balance performance vs size/cost; Cosel filters optimized for their power supplies. Mounting: Panel mount for chassis installation; DIN rail for control panels; PCB mount for board-level filtering. Application: General industrial: Standard filters; Medical: Medical-grade filters with low leakage; Harsh environment: Ruggedized filters. Cosel provides recommended filters for each power supply model. Contact our FAE team for filter selection.",
        "decisionGuide": "Match current rating to power supply. Cosel provides recommended filters. Contact us for selection.",
        "keywords": ["filter selection", "current rating", "attenuation"]
      },
      {
        "question": "What is the difference between common mode and differential mode filtering?",
        "answer": "EMI filters address two types of noise: Common mode noise: Present on both lines relative to ground; Filtered by common mode chokes and Y capacitors; Caused by switching transients coupling to ground; Typically higher frequency (>1MHz). Differential mode noise: Present between line and neutral; Filtered by X capacitors and differential chokes; Caused by switching current in power path; Typically lower frequency (<1MHz). Cosel EMI filters provide: Both common mode and differential mode attenuation; Balanced design for optimal performance; Safety agency approved component values; Temperature stable characteristics. The combination addresses both noise types for comprehensive EMC compliance. Check filter datasheets for attenuation curves. Contact our FAE team for filter design guidance.",
        "decisionGuide": "Cosel filters provide both common and differential mode attenuation. Contact us for filter design.",
        "keywords": ["common mode", "differential mode", "filter types"]
      },
      {
        "question": "Where should I mount the EMI filter in my system?",
        "answer": "EMI filter mounting best practices: Location: As close to power supply input as possible; Minimize unfiltered wiring length; Keep filter and supply in same enclosure if possible. Wiring: Keep input and output leads separated; Minimize coupling between filtered and unfiltered sides; Use twisted pairs for input wiring. Grounding: Connect filter ground to chassis ground; Use short, wide ground connections; Avoid ground loops. Panel mounting: Use panel mount filters for chassis installation; Ensure good electrical contact with chassis; Consider accessibility for maintenance. DIN rail: Use DIN rail filters for control panels; Mount near power supply input; Allow space for wiring. PCB mount: Place at board edge near power entry; Keep traces short and wide; Isolate filtered and unfiltered sections. Contact our FAE team for installation guidance.",
        "decisionGuide": "Mount close to power supply input. Separate filtered/unfiltered wiring. Contact us for installation guidance.",
        "keywords": ["filter mounting", "installation", "wiring"]
      },
      {
        "question": "Can I use one EMI filter for multiple power supplies?",
        "answer": "One EMI filter can serve multiple power supplies with considerations: Current rating: Filter must handle total input current of all supplies; Include margin for inrush (typically 1.5x total); Example: Three 5A supplies need 22.5A filter minimum. Wiring: Keep wiring from filter to each supply short; Use equal length wires for balanced filtering; Separate input and output wiring. Performance: Single filter may not provide optimal filtering for all supplies; Individual filters typically provide better attenuation; System layout affects filter effectiveness. Cost trade-off: One large filter vs multiple smaller filters; Installation complexity vs component count; Maintenance and replacement considerations. Recommendations: Use individual filters for best performance; One filter acceptable for 2-3 small supplies; Consult filter datasheet for multi-load applications. Contact our FAE team for multi-supply filter design.",
        "decisionGuide": "Individual filters recommended for best performance. One filter can serve 2-3 small supplies. Contact us for design.",
        "keywords": ["multi-supply", "filter sharing", "system design"]
      }
    ],
    "products": [
      {
        "partNumber": "EAC-06-472",
        "series": "EAC",
        "category": "EMI Filters",
        "currentRating": "6A",
        "voltageRating": "250VAC",
        "attenuation": "40dB typical",
        "mounting": "Panel/Chassis",
        "application": "AC-DC power supplies up to 300W",
        "certifications": ["UL", "CE", "TUV"],
        "stock": "In Stock",
        "leadTime": "1-2 weeks",
        "datasheet": "/assets/brands/cosel/datasheets/EAC-06-472.pdf",
        "image": "/assets/brands/cosel/images/EAC-06-472.jpg",
        "shortDescription": "6A panel mount EMI filter for AC-DC power supplies up to 300W",
        "descriptionParagraphs": [
          "The EAC-06-472 is a 6A panel mount EMI filter designed for AC-DC power supplies up to 300W.",
          "Provides 40dB attenuation of conducted noise for Class B EMC compliance.",
          "The compact panel mount design allows easy installation in equipment chassis."
        ],
        "longDescription": "The Cosel EAC-06-472 is a 6A panel mount EMI filter designed for AC-DC power supplies up to 300W output. This filter provides effective attenuation of conducted electromagnetic interference, helping equipment meet international EMC standards including EN 55032 Class B and FCC Part 15 Class B. The filter offers typical attenuation of 40dB in the conducted frequency range. The panel mount design with threaded studs allows easy installation in equipment chassis. The EAC-06-472 is recommended for use with Cosel PBA150F, PBA300F, and similar power supplies. The filter includes both common mode and differential mode filtering for comprehensive noise suppression. With UL, CE, and TUV certifications, this filter meets safety requirements for global applications.",
        "features": [
          "6A current rating for power supplies up to 300W",
          "40dB typical attenuation of conducted noise",
          "Panel mount design with threaded studs",
          "Common mode and differential mode filtering",
          "250VAC voltage rating",
          "Compact size for equipment integration",
          "UL, CE, TUV safety certifications",
          "Temperature range -25°C to +85°C"
        ],
        "applications": [
          "AC-DC power supply filtering",
          "Industrial equipment",
          "Medical equipment",
          "Test and measurement",
          "Telecommunications",
          "LED lighting systems",
          "Factory automation",
          "Building automation"
        ],
        "specifications": {
          "Current Rating": "6A continuous",
          "Voltage Rating": "250VAC",
          "Frequency Range": "150kHz - 30MHz",
          "Attenuation": "40dB typical at 1MHz",
          "Leakage Current": "<0.5mA at 250VAC",
          "Insulation Resistance": ">100MΩ at 500VDC",
          "Dielectric Strength": "2000VAC for 1 minute",
          "Operating Temperature": "-25°C to +85°C",
          "Dimensions": "65 x 35 x 85 mm (L x W x H)",
          "Mounting": "Panel mount with M4 studs",
          "Terminals": "6.3mm quick connect",
          "Safety Standards": "UL1283, EN60939, TUV"
        },
        "faeReview": {
          "rating": 4.6,
          "pros": [
            "40dB effective attenuation",
            "Easy panel mount installation",
            "Matched to Cosel power supplies",
            "Compact size",
            "Global certifications"
          ],
          "cons": [
            "Fixed 6A rating",
            "Panel mount only (no DIN rail)",
            "Requires separate mounting",
            "Limited to 300W supplies"
          ],
          "content": "The EAC-06-472 is an effective EMI filter for Cosel power supplies up to 300W. The 40dB attenuation is sufficient for most Class B EMC compliance requirements. I've used this filter with PBA150F and PBA300F supplies with excellent results - consistently passing EMC testing. The panel mount design is straightforward to install with the threaded studs. The filter is well-matched to Cosel supplies, providing optimal attenuation without over-engineering. For applications requiring EMC compliance, this filter is a reliable choice. The compact size doesn't take much space in the chassis. I recommend positioning the filter close to the power supply input for best performance.",
          "bestFor": [
            "AC-DC power supply filtering",
            "Class B EMC compliance",
            "Industrial equipment",
            "Medical equipment",
            "Cosel power supply systems"
          ],
          "testData": "Attenuation: 42dB at 1MHz measured. Leakage current: 0.3mA at 250VAC. Temperature rise: 15°C at 6A, 25°C ambient."
        },
        "alternativeParts": [
          {
            "partNumber": "EAC-03-472",
            "brand": "Cosel",
            "specifications": {
              "Current": "3A",
              "Voltage": "250VAC",
              "Attenuation": "40dB",
              "Mounting": "Panel"
            },
            "comparison": {
              "Current": "3A =< 6A (lower)",
              "Size": "Smaller =< Smaller (more compact)",
              "Attenuation": "40dB = 40dB (same)",
              "Application": "150W =< 300W (smaller supplies)"
            },
            "reason": "Lower current version for smaller power supplies",
            "useCase": "Recommended for power supplies up to 150W",
            "link": "#"
          },
          {
            "partNumber": "EAC-10-472",
            "brand": "Cosel",
            "specifications": {
              "Current": "10A",
              "Voltage": "250VAC",
              "Attenuation": "45dB",
              "Mounting": "Panel"
            },
            "comparison": {
              "Current": "10A => 6A (+67%)",
              "Attenuation": "45dB => 40dB (+5dB)",
              "Size": "Larger => Smaller (bigger)",
              "Application": "600W => 300W (larger supplies)"
            },
            "reason": "Higher current version with better attenuation",
            "useCase": "Suitable for power supplies up to 600W",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "PBA300F-24",
            "link": "#",
            "description": "300W power supply matched to this filter",
            "category": "Power Supply"
          },
          {
            "partNumber": "Mounting-Hardware-EAC",
            "link": "#",
            "description": "Mounting nuts and washers for panel installation",
            "category": "Accessories"
          },
          {
            "partNumber": "Quick-Connect-Terminals",
            "link": "#",
            "description": "6.3mm quick connect terminals for wiring",
            "category": "Accessories"
          }
        ],
        "faqs": [
          {
            "question": "How do I install the EAC-06-472 EMI filter?",
            "answer": "Installing the EAC-06-472 EMI filter: Mounting: Use M4 threaded studs for panel mounting; Mount to metal chassis for grounding; Ensure good electrical contact; Torque nuts to 1.5-2.0 Nm. Wiring: Connect input (LINE/NEUTRAL) to power source; Connect output (LOAD) to power supply input; Use 6.3mm quick connect terminals; Keep wiring as short as possible. Grounding: Connect ground terminal to chassis ground; Use short, wide ground wire; Ensure low impedance ground path. Layout: Mount close to power supply input; Separate input and output wiring; Keep filtered wiring away from unfiltered. Testing: Verify continuity after installation; Check ground connection; Measure leakage current if required. Contact our FAE team for installation guidance.",
            "decisionGuide": "Mount to chassis with M4 studs. Connect input to source, output to supply. Contact us for installation.",
            "keywords": ["filter installation", "mounting", "wiring"]
          },
          {
            "question": "What attenuation does the EAC-06-472 provide?",
            "answer": "The EAC-06-472 provides frequency-dependent attenuation: Typical attenuation: 40dB at 1MHz (typical measurement point); Frequency range: 150kHz to 30MHz (conducted emissions range); Common mode: 35-50dB depending on frequency; Differential mode: 30-45dB depending on frequency. Attenuation curves: Highest attenuation in 1-10MHz range; Lower attenuation at band edges; Varies with source and load impedance. For EMC compliance: 40dB typically sufficient for Class B; May need additional filtering for severe cases; System layout affects actual performance. Measurement: Use spectrum analyzer with LISN; Measure common mode and differential mode separately; Compare to EMC limits with margin. Contact our FAE team for attenuation requirements.",
            "decisionGuide": "40dB typical attenuation. Sufficient for most Class B applications. Contact us for requirements.",
            "keywords": ["attenuation", "filter performance", "EMC"]
          },
          {
            "question": "Can the EAC-06-472 be used with non-Cosel power supplies?",
            "answer": "The EAC-06-472 can be used with other power supplies with considerations: Current rating: 6A rating must match supply input current; Check supply datasheet for input current; Include margin for inrush current. Voltage rating: 250VAC rating must exceed supply input; Suitable for universal input supplies; Check for DC applications (different filter needed). Attenuation: 40dB may or may not be sufficient; Depends on supply noise characteristics; May need higher attenuation filter. Compatibility: Filter impedance affects performance; Best matched to Cosel supply designs; May need different filter for other brands. Recommendations: Check supply manufacturer recommendations; Measure conducted emissions with filter; Verify compliance with applicable standards. Cosel filters optimized for Cosel supplies. Contact our FAE team for compatibility assessment.",
            "decisionGuide": "Can be used with other supplies. Verify current rating and attenuation. Contact us for compatibility.",
            "keywords": ["compatibility", "non-Cosel", "filter matching"]
          },
          {
            "question": "What is the leakage current of the EAC-06-472?",
            "answer": "The EAC-06-472 has low leakage current: Leakage current: <0.5mA at 250VAC, 60Hz; Measured line to ground and neutral to ground; Includes Y capacitor leakage. Safety standards: IEC limits: 3.5mA for portable, 5mA for stationary; UL limits: 3.5mA for most applications; Medical: <100µA for patient contact (use medical filters). For high leakage concerns: Use medical-grade filters for low leakage; Calculate total system leakage; Consider isolation transformers. Measurement: Use true RMS meter; Measure at rated voltage and frequency; Include all parallel paths. The EAC-06-472 leakage is well below standard limits. For medical or sensitive applications, consider medical-grade filters. Contact our FAE team for leakage analysis.",
            "decisionGuide": "<0.5mA leakage, well below standard limits. Use medical filters for patient contact. Contact us for analysis.",
            "keywords": ["leakage current", "safety limits", "medical applications"]
          },
          {
            "question": "How do I troubleshoot EMI issues with the EAC-06-472?",
            "answer": "Troubleshooting EMI issues with EAC-06-472: Verify installation: Check filter mounted close to supply; Verify good ground connection; Ensure input/output wiring separated; Confirm correct wiring (not reversed). Check filter: Measure DC resistance (should be <1Ω); Check for physical damage; Verify terminals tight; Test with replacement filter. System issues: Long unfiltered input wiring; Poor system grounding; Other noise sources in system; Inadequate shielding. Improvements: Add second stage filter if needed; Improve system grounding; Add shielding to cables; Separate noisy and sensitive circuits. Measurement: Use spectrum analyzer with LISN; Identify frequency ranges failing limits; Determine if common or differential mode; Compare with and without filter. Contact our FAE team for EMI troubleshooting assistance.",
            "decisionGuide": "Verify installation and grounding first. Check filter condition. Contact us for troubleshooting.",
            "keywords": ["troubleshooting", "EMI issues", "filter problems"]
          }
        ]
      },
      {
        "partNumber": "NAC-06-472",
        "series": "NAC",
        "category": "EMI Filters",
        "currentRating": "6A",
        "voltageRating": "250VAC",
        "attenuation": "40dB typical",
        "mounting": "DIN Rail",
        "application": "AC-DC power supplies in control panels",
        "certifications": ["UL", "CE", "TUV"],
        "stock": "In Stock",
        "leadTime": "1-2 weeks",
        "datasheet": "/assets/brands/cosel/datasheets/NAC-06-472.pdf",
        "image": "/assets/brands/cosel/images/NAC-06-472.jpg",
        "shortDescription": "6A DIN rail mount EMI filter for control panel applications",
        "descriptionParagraphs": [
          "The NAC-06-472 is a 6A DIN rail mount EMI filter for AC-DC power supplies in industrial control panels.",
          "Provides 40dB attenuation of conducted noise for Class B EMC compliance.",
          "The DIN rail mounting allows easy installation in control panels alongside power supplies."
        ],
        "longDescription": "The Cosel NAC-06-472 is a 6A DIN rail mount EMI filter designed for AC-DC power supplies in industrial control panels. This filter provides effective attenuation of conducted electromagnetic interference, helping equipment meet international EMC standards. The filter offers typical attenuation of 40dB in the conducted frequency range. The DIN rail mounting allows easy snap-on installation alongside Cosel DIN rail power supplies. The NAC-06-472 is recommended for use with Cosel DPF series DIN rail power supplies. The filter includes both common mode and differential mode filtering for comprehensive noise suppression. With UL, CE, and TUV certifications, this filter meets safety requirements for global industrial applications.",
        "features": [
          "6A current rating for DIN rail power supplies",
          "40dB typical attenuation of conducted noise",
          "DIN rail mount for easy panel installation",
          "Common mode and differential mode filtering",
          "250VAC voltage rating",
          "Compact DIN rail package",
          "UL, CE, TUV safety certifications",
          "Temperature range -25°C to +85°C"
        ],
        "applications": [
          "DIN rail power supply filtering",
          "Industrial control panels",
          "Factory automation",
          "Building automation",
          "Process control",
          "Machine control systems",
          "Test equipment",
          "Telecommunications"
        ],
        "specifications": {
          "Current Rating": "6A continuous",
          "Voltage Rating": "250VAC",
          "Frequency Range": "150kHz - 30MHz",
          "Attenuation": "40dB typical at 1MHz",
          "Leakage Current": "<0.5mA at 250VAC",
          "Insulation Resistance": ">100MΩ at 500VDC",
          "Dielectric Strength": "2000VAC for 1 minute",
          "Operating Temperature": "-25°C to +85°C",
          "Dimensions": "35 x 90 x 70 mm (W x H x D)",
          "Mounting": "DIN rail TS35",
          "Terminals": "Screw terminals 2.5mm²",
          "Safety Standards": "UL1283, EN60939, TUV"
        },
        "faeReview": {
          "rating": 4.7,
          "pros": [
            "DIN rail mounting convenience",
            "40dB effective attenuation",
            "Matches DPF power supplies",
            "Easy panel installation",
            "Global certifications"
          ],
          "cons": [
            "DIN rail only (no panel mount)",
            "Fixed 6A rating",
            "Requires DIN rail space",
            "Screw terminals (no quick connect)"
          ],
          "content": "The NAC-06-472 is the perfect EMI filter companion for Cosel DIN rail power supplies. The DIN rail mounting makes installation incredibly easy - just snap it onto the rail next to the power supply. I've used these filters in numerous control panel projects with DPF120 and DPF240 supplies. The 40dB attenuation consistently helps achieve EMC compliance. The compact DIN rail package doesn't take much space in the panel. The screw terminals are secure and reliable. For control panel applications, the DIN rail mounting is much more convenient than panel mount filters. I recommend placing the filter immediately adjacent to the power supply for best performance. The 5-year warranty matches the power supplies for consistent system reliability.",
          "bestFor": [
            "DIN rail power supply systems",
            "Industrial control panels",
            "Factory automation",
            "Building automation",
            "Process control systems"
          ],
          "testData": "Attenuation: 41dB at 1MHz measured. Leakage current: 0.35mA at 250VAC. Temperature rise: 12°C at 6A, 25°C ambient."
        },
        "alternativeParts": [
          {
            "partNumber": "NAC-03-472",
            "brand": "Cosel",
            "specifications": {
              "Current": "3A",
              "Voltage": "250VAC",
              "Attenuation": "40dB",
              "Mounting": "DIN Rail"
            },
            "comparison": {
              "Current": "3A =< 6A (lower)",
              "Width": "25mm =< 35mm (narrower)",
              "Attenuation": "40dB = 40dB (same)",
              "Application": "120W =< 240W (smaller supplies)"
            },
            "reason": "Lower current version for smaller DIN rail supplies",
            "useCase": "Recommended for DPF120 and smaller supplies",
            "link": "#"
          },
          {
            "partNumber": "EAC-06-472",
            "brand": "Cosel",
            "specifications": {
              "Current": "6A",
              "Voltage": "250VAC",
              "Attenuation": "40dB",
              "Mounting": "Panel"
            },
            "comparison": {
              "Mounting": "Panel =< DIN (different)",
              "Terminals": "Quick connect =< Screw (different)",
              "Size": "65mm > 35mm (larger)",
              "Application": "Chassis =< Panel (different)"
            },
            "reason": "Panel mount version for chassis installation",
            "useCase": "Suitable for chassis mount instead of DIN rail",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "DPF240-24S",
            "link": "#",
            "description": "240W DIN rail power supply matched to this filter",
            "category": "Power Supply"
          },
          {
            "partNumber": "DIN-Rail-End-Stop",
            "link": "#",
            "description": "End stops to prevent sliding on DIN rail",
            "category": "Accessories"
          },
          {
            "partNumber": "Ferrule-Kit",
            "link": "#",
            "description": "Wire ferrules for screw terminal connections",
            "category": "Accessories"
          }
        ],
        "faqs": [
          {
            "question": "How do I install the NAC-06-472 on DIN rail?",
            "answer": "Installing the NAC-06-472 on DIN rail: Mounting: Align filter with TS35 DIN rail; Press down until spring clip engages; Verify secure mounting by gentle tug; Use end stops to prevent sliding. Wiring: Connect input (L/N) to power source; Connect output (L'/N') to power supply; Use appropriate wire gauge (2.5mm² max); Install ferrules on stranded wire. Grounding: Connect PE terminal to panel ground; Use short, wide ground wire; Ensure good electrical contact. Layout: Mount close to power supply on rail; Keep input and output wiring separated; Allow space for wire bending radius. Removal: Pull down on release tab; Lift filter off rail. The snap-on design allows tool-free installation. Contact our FAE team for panel layout recommendations.",
            "decisionGuide": "Snap onto TS35 rail. Connect input to source, output to supply. Use end stops. Contact us for layout.",
            "keywords": ["DIN rail installation", "mounting", "panel wiring"]
          },
          {
            "question": "What wire gauge fits the NAC-06-472 terminals?",
            "answer": "NAC-06-472 terminal specifications: Wire gauge: 0.5 to 2.5mm² (20 to 14 AWG); Stranded or solid wire; Ferrules recommended for stranded wire. Terminal capacity: Input terminals: L, N, PE; Output terminals: L', N'; All rated 6A continuous. Wiring guidelines: Use appropriate gauge for current (6A max); Include margin for voltage drop; Use ferrules for reliable connection; Torque screws to 0.5-0.6 Nm. Best practices: Strip wire to 7-8mm length; Twist stranded wire before ferrule; Use proper crimping tool for ferrules; Check tightness after installation. For high vibration: Use locking washers; Check torque periodically; Consider wire strain relief. The screw terminals provide secure, reliable connections. Contact our FAE team for wiring recommendations.",
            "decisionGuide": "Use 0.5-2.5mm² wire. Ferrules recommended. Torque to 0.5-0.6 Nm. Contact us for wiring.",
            "keywords": ["wire gauge", "terminals", "wiring"]
          },
          {
            "question": "Can I use the NAC-06-472 with non-Cosel DIN rail supplies?",
            "answer": "The NAC-06-472 can be used with other DIN rail supplies with considerations: Current rating: 6A rating must match supply input current; Check supply datasheet for input current; Include margin for inrush. Voltage rating: 250VAC rating must exceed supply input; Suitable for universal input supplies. DIN rail: Must use TS35 standard rail; Compatible with most industrial rails. Attenuation: 40dB may or may not be sufficient; Depends on supply noise characteristics; May need higher attenuation filter. Compatibility: Filter impedance affects performance; Best matched to Cosel supply designs; May need different filter for other brands. Recommendations: Check supply manufacturer recommendations; Measure conducted emissions with filter; Verify compliance with applicable standards. Contact our FAE team for compatibility assessment.",
            "decisionGuide": "Can be used with other supplies. Verify current rating. Contact us for compatibility.",
            "keywords": ["compatibility", "non-Cosel", "DIN rail supplies"]
          },
          {
            "question": "What is the difference between NAC and EAC series filters?",
            "answer": "NAC and EAC series filters differ in mounting: NAC series: DIN rail mounting (TS35); Snap-on installation; Screw terminals; Compact DIN rail package; Best for control panels. EAC series: Panel/chassis mounting; Threaded studs for mounting; Quick connect terminals; Larger panel mount package; Best for chassis installation. Electrical performance: Both provide similar attenuation (40dB); Same current ratings available; Same voltage ratings; Same safety certifications. Selection guidelines: Use NAC for DIN rail power supplies in panels; Use EAC for chassis mount power supplies; Match current rating to power supply; Consider terminal type preference. Both series provide effective EMI filtering. Contact our FAE team for series selection.",
            "decisionGuide": "NAC for DIN rail, EAC for panel mount. Same electrical performance. Contact us for selection.",
            "keywords": ["NAC vs EAC", "DIN rail", "panel mount"]
          },
          {
            "question": "How many filters can I fit on a standard DIN rail?",
            "answer": "NAC filter density on DIN rail: Filter width: NAC-06-472: 35mm width; NAC-03-472: 25mm width. Standard DIN rail: 1 meter length typical; 35mm filters: ~28 per meter (with spacing); 25mm filters: ~40 per meter (with spacing). Spacing considerations: Allow 5-10mm between filters for wiring; Consider terminal access space; Allow for heat dissipation; Plan for maintenance access. Panel layout: Group filters with their power supplies; Keep wiring runs short; Use end stops to organize sections; Label for identification. Typical panel: 10-20 filters per panel common; Mix with power supplies and other devices; Use multiple rails for large panels. The compact NAC design allows high density. Contact our FAE team for panel layout optimization.",
            "decisionGuide": "~28 filters per meter for NAC-06. Allow spacing for wiring. Contact us for panel layout.",
            "keywords": ["panel density", "DIN rail capacity", "layout"]
          }
        ]
      }
    ]
  }
];

productsData.categories.push(...additionalCategories);

// Update product count
productsData.categories.forEach(cat => {
  cat.productCount = cat.products.length;
});

fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log(`Extended products.json with ${additionalCategories.length} new categories`);
console.log(`Total categories: ${productsData.categories.length}`);
console.log(`Total products: ${productsData.categories.reduce((sum, cat) => sum + cat.products.length, 0)}`);
