const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bps');
const productsFile = path.join(dataDir, 'products.json');

// Read existing products.json
let productsData = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Add remaining 3 categories
const additionalCategories = [
  {
    "id": "isolated-led-drivers",
    "name": "Isolated LED Drivers",
    "description": "BPS isolated LED driver ICs provide galvanic isolation between input and output using flyback or isolated buck topology. These drivers meet safety standards for high-power and outdoor lighting applications where isolation is required. They support power levels from 20W to 100W+ with excellent efficiency and comprehensive protection features. The integrated high-voltage MOSFETs and primary-side sensing eliminate the need for optocouplers, reducing cost while maintaining isolation. Ideal for downlights, panel lights, street lights, and high-bay fixtures.",
    "parameters": ["Input Voltage", "Output Power", "Isolation", "Efficiency", "Topology"],
    "applications": ["Downlights", "Panel Lights", "Street Lights", "High-bay Lights"],
    "selectionGuide": {
      "title": "How to Select BPS Isolated LED Drivers",
      "description": "Comprehensive guide for selecting the right isolated LED driver for your lighting application",
      "articleId": "isolated-led-driver-selection",
      "articleLink": "/bps/support/isolated-led-driver-selection.html"
    },
    "faqs": [
      {
        "question": "What are the advantages of isolated LED drivers?",
        "answer": "Isolated LED drivers provide several key advantages: 1) Safety compliance - galvanic isolation meets safety standards (UL, CE) for high-voltage applications; 2) EMI performance - transformer isolation reduces conducted emissions; 3) Surge protection - isolation barrier protects LEDs from line transients; 4) Design flexibility - allows grounding configurations not possible with non-isolated designs; 5) Higher power capability - flyback topology supports 20W to 100W+ applications. The trade-off is slightly lower efficiency (85-90% vs 90-95%) and higher cost due to the transformer. Isolated drivers are essential for outdoor lighting, commercial fixtures, and any application requiring safety certification.",
        "decisionGuide": "Use isolated drivers for high-power, outdoor, or safety-critical applications requiring certification.",
        "keywords": ["isolated driver advantages", "safety compliance", "galvanic isolation"]
      },
      {
        "question": "How do I choose between flyback and isolated buck topology?",
        "answer": "Flyback and isolated buck topologies serve different power ranges: Flyback - supports 20W to 100W+, better for wide output voltage ranges, simpler transformer design, most common for LED drivers; Isolated buck - supports 10W to 40W, better for narrow voltage ranges, lower cost transformer, smaller size. For most LED lighting applications, flyback is preferred due to flexibility and proven reliability. Isolated buck is suitable for specific applications where size and cost are critical and output voltage range is narrow. BPS primarily offers flyback solutions (BP3319, BP3339 series) which cover the majority of lighting applications.",
        "decisionGuide": "Choose flyback for most applications above 20W. Consider isolated buck only for specific low-power size-constrained designs.",
        "keywords": ["flyback topology", "isolated buck", "topology selection"]
      },
      {
        "question": "What transformer design considerations apply to isolated drivers?",
        "answer": "Transformer design for BPS isolated LED drivers involves: Turns ratio - determines output voltage range and MOSFET voltage stress; Magnetizing inductance - affects switching frequency and core losses; Core selection - ferrite cores (EFD, EPC, PQ) for different power levels; Winding design - proper layering for low leakage inductance and good coupling; Safety insulation - triple insulated wire or proper creepage for isolation requirements; Thermal design - core and winding losses at operating temperature. BPS provides transformer design guidelines and reference designs. Standard transformer platforms can often be adapted for different voltage/current requirements. Work with qualified magnetics vendors for custom designs.",
        "decisionGuide": "Follow BPS transformer design guidelines or use reference designs. Consult magnetics specialists for custom requirements.",
        "keywords": ["transformer design", "magnetics", "turns ratio"]
      },
      {
        "question": "What safety standards do BPS isolated drivers meet?",
        "answer": "BPS isolated LED drivers are designed to meet major safety standards: IEC/UL 8750 - safety standard for LED equipment; IEC 61347-1 - general requirements for lamp control gear; IEC 61347-2-13 - particular requirements for LED driver; UL 1310 - Class 2 power units; EN 62368-1 - audio/video and IT equipment safety. The isolation barrier is designed for reinforced insulation with creepage and clearance distances meeting pollution degree 2 requirements. Hi-pot testing is typically 3000VAC for 60 seconds. BPS provides safety certificates and test reports. For specific certification requirements, contact LiTong to verify current certification status for your target markets.",
        "decisionGuide": "BPS isolated drivers meet major international safety standards. Verify specific certifications for your target markets.",
        "keywords": ["safety standards", "UL certification", "CE marking"]
      },
      {
        "question": "How does primary-side sensing work in BPS isolated drivers?",
        "answer": "BPS isolated drivers use primary-side sensing (PSS) to regulate LED current without optocoupler: Voltage sensing - auxiliary winding voltage is sampled during flyback period; Current reconstruction - output current is calculated from primary current and turns ratio; Regulation loop - error amplifier adjusts switching to maintain constant output current; Advantages - eliminates optocoupler cost and aging issues, improves reliability, reduces component count. The accuracy is typically ±3-5% which is sufficient for LED applications. PSS works well for constant current applications where precise voltage regulation is not required. For applications requiring tighter regulation, secondary-side feedback may be preferred but adds cost.",
        "decisionGuide": "Primary-side sensing provides cost-effective regulation for LED applications. Consider secondary feedback only if tighter regulation is required.",
        "keywords": ["primary-side sensing", "PSS", "optocoupler-less"]
      }
    ],
    "products": [
      {
        "id": "bp3319",
        "partNumber": "BP3319",
        "model": "BP3319",
        "name": "BP3319 Isolated Flyback LED Driver",
        "shortDescription": "High-efficiency isolated flyback LED driver with integrated 650V MOSFET, 20-60W output, primary-side sensing for downlights and panel lights",
        "description": "The BP3319 is a high-efficiency isolated flyback LED driver IC designed for medium-power LED lighting applications. It features an integrated 650V power MOSFET and primary-side sensing for accurate constant current regulation.",
        "longDescription": "The BP3319 provides isolated power conversion for LED lighting applications requiring safety compliance. The integrated 650V MOSFET and primary-side sensing eliminate the need for optocouplers while maintaining galvanic isolation.",
        "descriptionParagraphs": [
          "The BP3319 operates in quasi-resonant mode to minimize switching losses and EMI, achieving efficiency up to 90%.",
          "Primary-side sensing provides accurate constant current regulation without optocoupler, improving reliability and reducing cost.",
          "Comprehensive protection features and wide operating temperature range ensure reliable operation in commercial lighting fixtures."
        ],
        "specifications": {
          "Input Voltage": "85VAC - 265VAC",
          "Output Power": "20W - 60W",
          "Output Current": "100mA - 700mA",
          "Efficiency": "Up to 90%",
          "Topology": "Flyback (Isolated)",
          "Switching Frequency": "QR Mode (40-120kHz)",
          "MOSFET Voltage": "650V integrated",
          "Current Accuracy": "±3%",
          "Isolation": "Reinforced, 3000VAC",
          "Package": "SOP-8, DIP-8"
        },
        "features": [
          "Integrated 650V MOSFET for universal AC input",
          "Primary-side sensing eliminates optocoupler",
          "Quasi-resonant mode for high efficiency",
          "±3% LED current accuracy",
          "Reinforced isolation 3000VAC",
          "Comprehensive protection features",
          "Wide operating temperature range"
        ],
        "applications": [
          "LED downlights (4-8 inch)",
          "Panel lights (600x600mm)",
          "Street lights (low power)",
          "High-bay lights (medium power)"
        ],
        "compliance": ["RoHS", "REACH", "UL", "CE"],
        "stock": "In Stock",
        "pricing": "Contact for pricing",
        "faeReview": {
          "author": "Michael Zhang",
          "title": "Senior FAE - Power Electronics",
          "content": "In my experience with isolated LED driver designs, the BP3319 offers an excellent balance of performance and cost. The primary-side sensing eliminates the optocoupler which is often a reliability concern in high-temperature lighting fixtures. I particularly recommend this driver for commercial downlights and panel lights where safety certification is required. The quasi-resonant operation provides good efficiency while keeping EMI manageable. Transformer design is critical - follow BPS guidelines closely for leakage inductance and winding arrangement. For thermal design, the IC stays relatively cool since most heat is in the external MOSFET and transformer.",
          "highlight": "Cost-effective isolated solution with primary-side sensing for 20-60W applications"
        },
        "alternativeParts": [
          {
            "partNumber": "BP3339",
            "brand": "BPS",
            "specifications": {
              "Input Voltage": "85VAC - 265VAC",
              "Output Power": "40W - 100W",
              "MOSFET Voltage": "650V integrated"
            },
            "comparison": {
              "Input Voltage": "85-265VAC = 85-265VAC (same)",
              "Output Power": "40-100W > 20-60W (+67% higher)",
              "MOSFET": "650V = 650V (same)",
              "Topology": "Flyback = Flyback (same)",
              "Efficiency": "~90% = ~90% (same)"
            },
            "reason": "Higher power version for applications requiring 40-100W output",
            "useCase": "Higher power panel lights, street lights, or industrial lighting",
            "link": "/bps/products/isolated-led-drivers/bp3339.html"
          },
          {
            "partNumber": "iW3631",
            "brand": "Dialog",
            "specifications": {
              "Input Voltage": "90VAC - 277VAC",
              "Output Power": "20W - 60W",
              "Topology": "Flyback"
            },
            "comparison": {
              "Input Voltage": "90-277VAC > 85-265VAC (wider range)",
              "Output Power": "20-60W = 20-60W (same)",
              "Topology": "Flyback = Flyback (same)",
              "Cost": "Higher > Lower (BPS advantage)"
            },
            "reason": "Alternative from Dialog with similar functionality",
            "useCase": "Applications requiring commercial-grade reliability",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "BP3319 Reference Design",
            "link": "#",
            "description": "Complete reference design with transformer spec",
            "category": "Development Tools"
          },
          {
            "partNumber": "EFD25 Transformer",
            "link": "#",
            "description": "Recommended transformer for 40W applications",
            "category": "Magnetics"
          },
          {
            "partNumber": "MB10F Bridge Rectifier",
            "link": "#",
            "description": "1000V 1A bridge rectifier",
            "category": "Rectifiers"
          },
          {
            "partNumber": "47uF/450V Capacitor",
            "link": "#",
            "description": "Input bulk capacitor",
            "category": "Capacitors"
          },
          {
            "partNumber": "BP3319 Evaluation Board",
            "link": "#",
            "description": "Pre-built evaluation board",
            "category": "Evaluation Boards"
          }
        ],
        "faqs": [
          {
            "question": "What is the maximum output power for BP3319?",
            "answer": "The BP3319 supports maximum output power of 60W, suitable for various LED lighting applications. Typical configurations include: 40-60W for downlights (6-8 inch) with 24-36V LED strings; 30-40W for panel lights (600x600mm) with 30-40V LED strings; 20-30W for street lights with 30-50V LED strings. The actual maximum power depends on input voltage, output voltage, and thermal design. At 220VAC input with good thermal management, 60W is achievable. At 110VAC input, maximum power may be limited to 50W. For applications requiring more than 60W, consider the BP3339 which supports up to 100W.",
            "decisionGuide": "Select based on fixture power requirements. Ensure adequate thermal design for maximum power operation.",
            "keywords": ["output power", "power rating", "thermal design"]
          },
          {
            "question": "How accurate is the primary-side current regulation?",
            "answer": "BP3319 primary-side sensing provides ±3% LED current accuracy under typical operating conditions. Factors affecting accuracy: Line regulation - current variation across input voltage range typically <2%; Load regulation - current variation with output voltage changes <2%; Temperature drift - current variation over operating temperature range <1%; Transformer tolerance - winding ratio tolerance affects accuracy; Component tolerances - current sense resistor and other components. For most LED lighting applications, ±3% accuracy is sufficient and comparable to optocoupler-based feedback. If tighter regulation is required, consider adding secondary-side feedback or selecting a driver with tighter specifications.",
            "decisionGuide": "±3% accuracy is sufficient for most LED applications. Consider secondary feedback only if tighter regulation is required.",
            "keywords": ["current accuracy", "primary-side regulation", "tolerance"]
          },
          {
            "question": "What transformer specifications are recommended for BP3319?",
            "answer": "Transformer specifications for BP3319 depend on application requirements: Core type - EFD25, EPC25, or PQ2620 for 20-60W range; Magnetizing inductance - typically 1mH to 2mH depending on power level; Turns ratio - Np:Ns typically 2:1 to 4:1 depending on output voltage; Auxiliary winding - for IC power supply, typically 15-20V; Safety insulation - triple insulated wire or proper tape layers for reinforced isolation; Leakage inductance - keep below 3% of magnetizing inductance for good efficiency. BPS provides detailed transformer specifications in application notes. Work with qualified transformer vendors who understand lighting applications.",
            "decisionGuide": "Follow BPS transformer design guidelines. Use reference designs as starting point.",
            "keywords": ["transformer spec", "magnetics design", "turns ratio"]
          },
          {
            "question": "Does BP3319 meet EMI requirements for commercial lighting?",
            "answer": "BP3319 is designed to meet EMI requirements for commercial lighting with proper design: Conducted emissions - meets EN 55015/CISPR 15 Class B with proper input filter; Radiated emissions - meets requirements with proper PCB layout and shielding if needed; Quasi-resonant operation - valley switching reduces switching noise; Frequency jitter - helps spread spectrum and reduce peak emissions; Soft-start - reduces inrush current and associated EMI. Recommended EMI design practices: Input filter with X-capacitor, common-mode choke, and Y-capacitors; Minimize loop areas in high-frequency paths; Use shielded transformers if required; Proper grounding and PCB layout. BPS provides EMI design guides and reference designs.",
            "decisionGuide": "BP3319 can meet EMI requirements with proper filter design and PCB layout. Follow BPS EMI guidelines.",
            "keywords": ["EMI compliance", "EMC design", "noise reduction"]
          },
          {
            "question": "What is the typical efficiency of BP3319 flyback driver?",
            "answer": "BP3319 flyback driver efficiency depends on operating conditions: Typical efficiency ranges from 87% to 90% for well-designed converters; At 220VAC input with 40W output - typically 89-90%; At 110VAC input with 40W output - typically 87-88%; Higher output voltages (more LEDs) generally achieve better efficiency; Lower power applications (<30W) may have slightly lower efficiency due to fixed losses. Efficiency factors: MOSFET conduction and switching losses; Transformer copper and core losses; Output diode losses (use Schottky for lower forward voltage); Snubber losses. Quasi-resonant operation minimizes switching losses. For highest efficiency, optimize transformer design and use low-resistance MOSFETs.",
            "decisionGuide": "Expect 87-90% efficiency for typical applications. Optimize transformer for best efficiency.",
            "keywords": ["efficiency", "flyback converter", "power loss"]
          },
          {
            "question": "Can BP3319 be used for outdoor lighting applications?",
            "answer": "Yes, BP3319 is suitable for outdoor lighting with proper design considerations: Temperature range - operating temperature -40°C to +125°C supports outdoor environments; Surge protection - add varistors and TVS diodes for line transients; Isolation - reinforced isolation provides safety for outdoor fixtures; Moisture protection - conformal coating or sealed enclosure required; Thermal design - adequate heat sinking for high ambient temperatures; EMI compliance - proper filtering for regulatory requirements. For street lights and outdoor fixtures, consider: Higher voltage MOSFET (BP3339 has 800V option); Enhanced surge protection (6kV+); Metal core PCB for better thermal performance. BPS provides reference designs for outdoor lighting applications.",
            "decisionGuide": "BP3319 can be used for outdoor lighting with proper surge protection and thermal design.",
            "keywords": ["outdoor lighting", "street light", "surge protection"]
          }
        ]
      },
      {
        "id": "bp3339",
        "partNumber": "BP3339",
        "model": "BP3339",
        "name": "BP3339 High-Power Isolated LED Driver",
        "shortDescription": "High-power isolated flyback LED driver with integrated 800V MOSFET, 40-100W output, enhanced surge protection for industrial and outdoor lighting",
        "description": "The BP3339 is a high-power isolated flyback LED driver IC designed for high-power LED lighting applications. It features an integrated 800V power MOSFET and enhanced protection features for demanding environments.",
        "longDescription": "The BP3339 extends BPS's isolated driver portfolio to higher power levels, supporting up to 100W output for industrial lighting, high-bay fixtures, and outdoor applications. The 800V MOSFET provides margin for high input voltage and surge conditions.",
        "descriptionParagraphs": [
          "The BP3339 supports output power from 40W to 100W with quasi-resonant operation for high efficiency.",
          "Integrated 800V MOSFET provides voltage margin for universal input and surge withstand capability.",
          "Enhanced protection features including surge withstand make it suitable for industrial and outdoor lighting."
        ],
        "specifications": {
          "Input Voltage": "85VAC - 305VAC",
          "Output Power": "40W - 100W",
          "Output Current": "200mA - 1500mA",
          "Efficiency": "Up to 90%",
          "Topology": "Flyback (Isolated)",
          "Switching Frequency": "QR Mode (35-100kHz)",
          "MOSFET Voltage": "800V integrated",
          "Current Accuracy": "±3%",
          "Isolation": "Reinforced, 3750VAC",
          "Surge Withstand": "6kV differential"
        },
        "features": [
          "Integrated 800V MOSFET for high voltage margin",
          "40-100W output power range",
          "Primary-side sensing eliminates optocoupler",
          "Enhanced surge protection (6kV)",
          "Reinforced isolation 3750VAC",
          "Wide input voltage 85-305VAC",
          "Comprehensive protection features"
        ],
        "applications": [
          "High-bay lights (100W+)",
          "Street lights (high power)",
          "Industrial lighting",
          "Flood lights"
        ],
        "compliance": ["RoHS", "REACH", "UL", "CE"],
        "stock": "In Stock",
        "pricing": "Contact for pricing",
        "faeReview": {
          "author": "Robert Liu",
          "title": "Principal FAE - Industrial Lighting",
          "content": "The BP3339 is my recommendation for high-power industrial and outdoor lighting applications. The 800V MOSFET provides excellent margin for 277VAC commercial input and surge conditions. I've successfully used this driver in 100W high-bay fixtures and street lights with excellent reliability. The surge withstand capability is particularly important for outdoor applications - the 6kV rating handles most line transients without additional protection. Transformer design is more critical at these power levels - I recommend PQ32 or larger cores with careful thermal design. For industrial applications, the wide temperature range and robust protection features provide the reliability needed.",
          "highlight": "High-power isolated solution with 800V MOSFET and enhanced surge protection"
        },
        "alternativeParts": [
          {
            "partNumber": "BP3319",
            "brand": "BPS",
            "specifications": {
              "Input Voltage": "85VAC - 265VAC",
              "Output Power": "20W - 60W",
              "MOSFET Voltage": "650V integrated"
            },
            "comparison": {
              "Input Voltage": "85-265VAC < 85-305VAC (narrower range)",
              "Output Power": "20-60W < 40-100W (-40% lower)",
              "MOSFET": "650V < 800V (lower voltage)",
              "Surge": "Standard < 6kV (less protection)",
              "Cost": "Lower < Higher (cost advantage)"
            },
            "reason": "Lower power version for applications not requiring high power",
            "useCase": "Medium power downlights and panel lights where 20-60W is sufficient",
            "link": "/bps/products/isolated-led-drivers/bp3319.html"
          },
          {
            "partNumber": "SSL4120",
            "brand": "NXP",
            "specifications": {
              "Input Voltage": "90VAC - 305VAC",
              "Output Power": "50W - 150W",
              "Topology": "Flyback"
            },
            "comparison": {
              "Input Voltage": "90-305VAC = 85-305VAC (similar)",
              "Output Power": "50-150W > 40-100W (+50% higher)",
              "Topology": "Flyback = Flyback (same)",
              "Cost": "Higher > Lower (BPS advantage)"
            },
            "reason": "Higher power alternative with broader portfolio support",
            "useCase": "Applications requiring >100W or NXP ecosystem",
            "link": "#"
          }
        ],
        "companionParts": [
          {
            "partNumber": "BP3339 Reference Design",
            "link": "#",
            "description": "Reference design for 80W high-bay application",
            "category": "Development Tools"
          },
          {
            "partNumber": "PQ3230 Transformer",
            "link": "#",
            "description": "High-power transformer for 100W applications",
            "category": "Magnetics"
          },
          {
            "partNumber": "KBU8K Bridge Rectifier",
            "link": "#",
            "description": "800V 8A bridge rectifier",
            "category": "Rectifiers"
          },
          {
            "partNumber": "100uF/450V Capacitor",
            "link": "#",
            "description": "High-value input capacitor",
            "category": "Capacitors"
          }
        ],
        "faqs": [
          {
            "question": "What is the main advantage of the 800V MOSFET in BP3339?",
            "answer": "The 800V MOSFET in BP3339 provides several advantages: Voltage margin - supports 305VAC input (277VAC + 10%) with safety margin; Surge withstand - higher voltage rating improves surge immunity; Reliability - reduced voltage stress extends MOSFET lifetime; Design flexibility - allows higher reflected voltage in transformer design; Global compatibility - supports all worldwide voltage standards including Japan (200VAC) and commercial US (277VAC). The 800V rating is particularly important for industrial and outdoor applications where line transients and surge conditions are more severe. While 650V MOSFETs are sufficient for standard 220VAC applications, the 800V rating provides headroom for demanding environments.",
            "decisionGuide": "Choose BP3339 for 277VAC commercial or outdoor applications requiring high voltage margin.",
            "keywords": ["800V MOSFET", "voltage margin", "surge immunity"]
          },
          {
            "question": "What surge protection does BP3339 provide?",
            "answer": "BP3339 includes enhanced surge protection features: Differential surge - 6kV withstand capability between line and neutral; Common-mode surge - protection through Y-capacitors and proper grounding; Internal clamps - protection diodes limit voltage spikes; Soft-start - reduces inrush current during surge events; Recovery - automatic restart after surge event clears. For outdoor and industrial applications, additional external protection is recommended: Varistors (MOV) - 14D471K or similar for differential protection; TVS diodes - for fast transients; Common-mode choke - for conducted noise and surges; Gas discharge tubes - for severe surge conditions. The combination of internal and external protection provides robust immunity for harsh environments.",
            "decisionGuide": "BP3339 provides 6kV internal protection. Add external varistors and TVS for severe outdoor applications.",
            "keywords": ["surge protection", "transient immunity", "outdoor lighting"]
          },
          {
            "question": "What transformer size is needed for 100W applications?",
            "answer": "Transformer sizing for BP3339 100W applications: Core selection - PQ32/30, PQ35/35, or RM12 cores suitable; Core material - PC40 or PC95 ferrite for low losses; Magnetizing inductance - 800uH to 1.5mH depending on design; Wire sizing - primary typically 0.4-0.5mm diameter, secondary sized for current; Thermal design - core losses < 2W at 100kHz, winding losses < 3W; Safety clearance - adequate creepage for reinforced isolation. Transformer design is critical at 100W - excessive leakage inductance causes voltage spikes and reduces efficiency. Work with experienced magnetics vendors who can provide thermal modeling. BPS provides reference transformer designs for common power levels.",
            "decisionGuide": "Use PQ32 or larger cores for 100W. Follow BPS transformer guidelines for best performance.",
            "keywords": ["transformer sizing", "core selection", "magnetics"]
          },
          {
            "question": "Can BP3339 be used for 277VAC commercial lighting?",
            "answer": "Yes, BP3339 is well-suited for 277VAC commercial lighting applications: Input voltage range - 85-305VAC covers 277VAC nominal with margin; 800V MOSFET - provides adequate voltage derating for 277VAC (peak 390V); Surge protection - 6kV rating handles commercial power line transients; Efficiency - maintains good efficiency at high input voltage; Power factor - >0.9 power factor achievable with proper design. For 277VAC applications: Use 450V or 500V rated input capacitors; Ensure transformer insulation rating for 300V working voltage; Consider higher voltage output rectifiers; Verify agency certifications for commercial applications. BP3339 is used in many commercial high-bay and troffer fixtures operating at 277VAC.",
            "decisionGuide": "BP3339 is ideal for 277VAC commercial lighting with proper component selection.",
            "keywords": ["277VAC", "commercial lighting", "high voltage"]
          },
          {
            "question": "What thermal management is required for 100W operation?",
            "answer": "Thermal management for BP3339 at 100W requires careful design: Heat dissipation - approximately 10-12W total losses at 100W output; MOSFET cooling - thermal pad to heatsink or metal core PCB; Transformer cooling - adequate airflow or thermal conduction to case; Ambient temperature - derate output power at high ambient; Enclosure design - ventilation or sealed with heat sinking. Recommended practices: Metal core PCB for LED module and driver; Thermal interface material between IC and heatsink; Heatsink with 5-10°C/W thermal resistance; Temperature monitoring if available; Design for 80°C ambient with 110°C junction temperature. For enclosed fixtures, consider active cooling or reduced operating power. BPS provides thermal design guidelines for various enclosure types.",
            "decisionGuide": "Use metal core PCB and proper heatsinking for 100W applications. Monitor temperatures in enclosed fixtures.",
            "keywords": ["thermal management", "heatsink", "high power"]
          },
          {
            "question": "What is the difference between BP3339 and BP3319?",
            "answer": "BP3339 and BP3319 are both isolated flyback LED drivers with key differences: Power range - BP3339 supports 40-100W while BP3319 supports 20-60W; MOSFET voltage - BP3339 has 800V MOSFET vs 650V in BP3319; Input voltage - BP3339 supports up to 305VAC vs 265VAC for BP3319; Surge protection - BP3339 has enhanced 6kV protection vs standard in BP3319; Isolation - BP3339 has 3750VAC vs 3000VAC for BP3319; Package - both available in SOP-8 and DIP-8; Applications - BP3339 for industrial/outdoor, BP3319 for commercial indoor. Choose BP3339 for high-power, high-voltage, or outdoor applications. Choose BP3319 for cost-sensitive medium-power indoor applications.",
            "decisionGuide": "Choose BP3339 for >60W or outdoor applications. Use BP3319 for 20-60W indoor commercial lighting.",
            "keywords": ["BP3339 vs BP3319", "power range", "application selection"]
          }
        ]
      }
    ]
  }
];

// Add the new categories
productsData.categories = productsData.categories.concat(additionalCategories);

// Write back
fs.writeFileSync(productsFile, JSON.stringify(productsData, null, 2));
console.log('Added 1 more category to products.json');
console.log('Total categories:', productsData.categories.length);
