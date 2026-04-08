const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'jingwei-qili');

// Ensure directory exists
if (!fs.existsSync(brandDir)) {
  fs.mkdirSync(brandDir, { recursive: true });
}

// 1. Create brand.json
const brandData = {
  "name": "jingwei-qili",
  "displayName": "Jingwei Qili",
  "logo": "/assets/brands/jingwei-qili/logo.svg",
  "tagline": "High-Reliability Power Semiconductor Solutions for Industrial and Automotive Applications",
  "description": "Jingwei Qili is a leading Chinese power semiconductor manufacturer specializing in high-reliability power modules, IGBT devices, and silicon carbide (SiC) power solutions. The company serves industrial drives, new energy vehicles, rail transit, and renewable energy markets with advanced power electronics technology.",
  "longDescription": "Founded with a focus on power semiconductor innovation, Jingwei Qili has established itself as a key player in China's power electronics industry. The company offers comprehensive power solutions including IGBT modules, SiC MOSFETs, power diodes, and rectifier modules. Their products are designed for demanding applications requiring high reliability, efficiency, and thermal performance. With advanced packaging technology and rigorous quality control, Jingwei Qili's power modules meet international standards for industrial and automotive applications. The company continues to invest in R&D to develop next-generation wide bandgap semiconductor solutions for emerging applications in electric vehicles and renewable energy systems.",
  "coreProducts": [
    {
      "name": "IGBT Power Modules",
      "description": "High-performance insulated gate bipolar transistor modules for motor drives and power conversion",
      "keywords": ["IGBT module", "power module", "motor drive"]
    },
    {
      "name": "SiC Power Devices",
      "description": "Silicon carbide MOSFETs and diodes for high-frequency, high-efficiency applications",
      "keywords": ["SiC MOSFET", "silicon carbide", "wide bandgap"]
    },
    {
      "name": "Rectifier Modules",
      "description": "High-current rectifier diodes and bridges for industrial power supplies",
      "keywords": ["rectifier diode", "power rectifier", "bridge rectifier"]
    },
    {
      "name": "Power Semiconductor Stacks",
      "description": "Custom-configured power stacks for specific application requirements",
      "keywords": ["power stack", "semiconductor assembly", "custom power"]
    }
  ],
  "industries": [
    {
      "name": "Industrial Drives",
      "description": "Variable frequency drives, servo systems, and industrial motor control",
      "keywords": ["VFD", "motor drive", "industrial control"]
    },
    {
      "name": "New Energy Vehicles",
      "description": "Electric vehicle powertrains, charging systems, and onboard power electronics",
      "keywords": ["EV", "electric vehicle", "automotive power"]
    },
    {
      "name": "Rail Transit",
      "description": "Traction systems, auxiliary power supplies, and signaling equipment",
      "keywords": ["railway", "traction inverter", "metro"]
    },
    {
      "name": "Renewable Energy",
      "description": "Solar inverters, wind power converters, and energy storage systems",
      "keywords": ["solar inverter", "wind power", "energy storage"]
    }
  ],
  "certifications": [
    {
      "name": "ISO 9001",
      "description": "Quality Management System Certification"
    },
    {
      "name": "IATF 16949",
      "description": "Automotive Quality Management System"
    },
    {
      "name": "AEC-Q101",
      "description": "Automotive Electronics Council qualification for discrete semiconductors"
    }
  ],
  "yearFounded": 2008,
  "headquarters": "China",
  "employees": "1000+",
  "revenue": "Growing rapidly in power semiconductor market",
  "website": "https://www.jingweiqili.com",
  "distributorStatus": "Authorized Distributor",
  "seoTitle": "Jingwei Qili Power Semiconductor Distributor - IGBT & SiC Modules",
  "seoDescription": "Authorized Jingwei Qili distributor offering IGBT power modules, SiC devices, and rectifier solutions. High-reliability power semiconductors for industrial and automotive applications.",
  "seoKeywords": [
    "Jingwei Qili distributor",
    "IGBT module distributor",
    "SiC MOSFET supplier",
    "power semiconductor distributor",
    "automotive IGBT module",
    "industrial power module",
    "rectifier module distributor"
  ],
  "faqs": [
    {
      "question": "Is LiTong an authorized distributor of Jingwei Qili products?",
      "answer": "Yes, LiTong is an officially authorized distributor of Jingwei Qili power semiconductor products. We maintain direct relationships with Jingwei Qili and provide genuine, factory-fresh IGBT modules, SiC devices, and rectifier products. As an authorized distributor, we offer competitive pricing, technical support, and guaranteed product authenticity. Our FAE team has received specialized training from Jingwei Qili engineers and can provide expert guidance on device selection, thermal management, and application optimization.",
      "decisionGuide": "Contact our sales team for Jingwei Qili product quotations and technical support. We can provide reference designs and evaluation kits for your power electronics projects.",
      "keywords": ["Jingwei Qili authorized distributor", "genuine IGBT module", "power semiconductor distributor"]
    },
    {
      "question": "What are the key advantages of Jingwei Qili IGBT modules?",
      "answer": "Jingwei Qili IGBT modules offer several distinct advantages: 1) High reliability - designed for industrial and automotive applications with rigorous quality control. 2) Competitive pricing - cost-effective solutions without compromising performance. 3) Wide product range - comprehensive portfolio covering various voltage and current ratings. 4) Advanced packaging - optimized thermal performance and long-term reliability. 5) Local support - responsive technical support and fast delivery from local inventory. 6) Automotive qualification - AEC-Q101 qualified devices for EV applications. These advantages make Jingwei Qili an excellent choice for cost-sensitive applications requiring high reliability.",
      "decisionGuide": "For industrial and automotive power applications, Jingwei Qili IGBT modules provide excellent value. Contact us to discuss your specific requirements and receive tailored recommendations.",
      "keywords": ["Jingwei Qili IGBT advantages", "IGBT module comparison", "automotive IGBT distributor"]
    },
    {
      "question": "How do I select the right IGBT module for my application?",
      "answer": "Selecting the right IGBT module involves evaluating several key factors: 1) Voltage rating - choose at least 1.5x your DC bus voltage for safety margin. 2) Current rating - calculate RMS current including overload conditions and thermal derating. 3) Switching frequency - higher frequencies require lower switching loss devices. 4) Thermal requirements - verify junction temperature stays within limits at maximum ambient. 5) Package type - consider mounting, cooling, and space constraints. 6) Gate drive requirements - ensure compatibility with your driver circuit. Jingwei Qili offers modules from 600V to 1700V and currents from tens to hundreds of amps. Our FAE team can help with selection calculations and thermal modeling.",
      "decisionGuide": "Share your application requirements with our FAE team for personalized device recommendations and thermal analysis.",
      "keywords": ["IGBT module selection", "power module selection guide", "IGBT voltage current rating"]
    },
    {
      "question": "What SiC products does Jingwei Qili offer?",
      "answer": "Jingwei Qili offers a growing portfolio of silicon carbide (SiC) power devices including: SiC MOSFETs - high-efficiency switches for high-frequency applications, available in various voltage ratings (650V, 1200V) and package options. SiC Schottky diodes - zero reverse recovery for improved efficiency in bridge circuits. SiC power modules - integrated modules combining SiC MOSFETs and diodes for complete power stage solutions. SiC devices enable higher switching frequencies, lower switching losses, and improved system efficiency compared to silicon IGBTs. They are ideal for EV chargers, solar inverters, and high-frequency power supplies. Contact us for the latest SiC product roadmap and availability.",
      "decisionGuide": "For high-frequency or high-efficiency applications, consider SiC devices. Contact us for SiC product recommendations and comparison with silicon alternatives.",
      "keywords": ["Jingwei Qili SiC", "SiC MOSFET distributor", "silicon carbide power module"]
    },
    {
      "question": "What are the benefits of purchasing Jingwei Qili products through LiTong?",
      "answer": "Purchasing Jingwei Qili products through LiTong provides multiple benefits: 1) Guaranteed authenticity - all products sourced directly from Jingwei Qili with full traceability. 2) Competitive pricing - volume discounts and flexible payment terms available. 3) Technical support - access to our experienced FAE team for design consultation and troubleshooting. 4) Local inventory - reduced lead times for standard products. 5) Application support - reference designs, thermal models, and evaluation kits. 6) Long-term supply commitment - we work with Jingwei Qili to ensure continuity of supply. 7) Quality documentation - full certification and test reports available.",
      "decisionGuide": "Contact our sales team for a quotation and to discuss your project requirements. We offer evaluation samples for qualified projects.",
      "keywords": ["Jingwei Qili distributor benefits", "buy IGBT module", "power semiconductor distributor"]
    },
    {
      "question": "Does Jingwei Qili offer automotive-qualified devices?",
      "answer": "Yes, Jingwei Qili offers AEC-Q101 qualified power semiconductor devices specifically designed for automotive applications. These devices undergo rigorous testing and qualification to meet automotive reliability standards. Automotive-grade products include: IGBT modules for EV traction inverters and DC-DC converters, SiC devices for onboard chargers and high-voltage systems, Rectifier diodes for auxiliary power supplies. The devices feature enhanced temperature ranges (-40°C to +150°C) and improved reliability characteristics. Jingwei Qili also provides comprehensive documentation including PPAP support for automotive customers. Contact us for the latest automotive product roadmap and qualification status.",
      "decisionGuide": "For automotive applications, specify AEC-Q101 qualified devices and work with our FAE team to ensure compliance with your specific automotive standards.",
      "keywords": ["Jingwei Qili automotive IGBT", "AEC-Q101 power module", "automotive grade semiconductor"]
    },
    {
      "question": "What thermal management considerations are important for IGBT modules?",
      "answer": "Thermal management is critical for reliable IGBT operation: 1) Heat sink selection - thermal resistance must keep junction temperature below maximum rating. 2) Thermal interface material - use high-quality TIM with proper thickness for low thermal resistance. 3) Mounting torque - follow specifications to ensure good thermal contact without damaging the module. 4) Airflow - forced convection may be needed for high-power applications. 5) Thermal cycling - consider CTE matching between module and heat sink. 6) Protection - implement temperature monitoring and over-temperature shutdown. Jingwei Qili provides thermal models and application notes to help with thermal design. Our FAE team can review your thermal design and recommend improvements.",
      "decisionGuide": "Perform thermal analysis early in your design. Contact us for thermal modeling support and heat sink recommendations.",
      "keywords": ["IGBT thermal management", "heat sink selection", "power module cooling"]
    },
    {
      "question": "How can I evaluate Jingwei Qili products for my application?",
      "answer": "Evaluating Jingwei Qili products is straightforward: 1) Request samples - contact LiTong to request evaluation samples for your project. 2) Evaluation kits - some products have evaluation boards with gate drivers and protection circuits. 3) Spice models - request device models for circuit simulation. 4) Thermal models - get thermal impedance data for thermal analysis. 5) Reference designs - application-specific designs to accelerate development. 6) Technical documentation - datasheets, application notes, and reliability reports. We recommend starting with bench testing under your actual operating conditions. Our FAE team can provide guidance on test procedures and help interpret results. For high-volume projects, we can arrange factory visits or technical seminars.",
      "decisionGuide": "Contact our sales team to request samples and evaluation resources. Our FAE team can provide application-specific guidance.",
      "keywords": ["Jingwei Qili evaluation", "IGBT sample request", "power module testing"]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'brand.json'), JSON.stringify(brandData, null, 2));
console.log('✓ brand.json created');

// 2. Create products.json
const productsData = {
  "seoTitle": "Jingwei Qili Power Semiconductor Products - IGBT & SiC Modules | LiTong",
  "seoDescription": "Browse Jingwei Qili power semiconductor portfolio including IGBT modules, SiC devices, and rectifier solutions. Technical specifications and distributor pricing available.",
  "seoKeywords": [
    "Jingwei Qili products",
    "IGBT module distributor",
    "SiC MOSFET selection",
    "power semiconductor price",
    "rectifier module products"
  ],
  "faqs": [
    {
      "question": "What power semiconductor products does Jingwei Qili offer?",
      "answer": "Jingwei Qili offers a comprehensive range of power semiconductor products: IGBT modules - standard and automotive grade, voltage ratings from 600V to 1700V, current ratings from 50A to 600A. SiC devices - SiC MOSFETs and Schottky diodes for high-frequency applications. Rectifier modules - high-current diodes and bridges for industrial power supplies. Power stacks - custom-configured assemblies for specific applications. The product portfolio covers industrial drives, EV powertrains, renewable energy, and rail transit applications. Contact us for the complete product catalog and selection guidance.",
      "decisionGuide": "Browse our product categories or contact our FAE team for recommendations based on your application requirements.",
      "keywords": ["Jingwei Qili product range", "IGBT SiC products", "power semiconductor catalog"]
    },
    {
      "question": "How do I select the right power module for my inverter design?",
      "answer": "Selecting the right power module for inverter applications involves: 1) Voltage rating - typically 2x the DC bus voltage for safety margin (e.g., 1200V for 600V bus). 2) Current rating - calculate based on output power, voltage, and overload requirements. 3) Switching frequency - higher frequencies favor SiC, lower frequencies use IGBT. 4) Thermal design - ensure heat sink can dissipate losses at max ambient. 5) Package - consider mounting, cooling, and space constraints. 6) Protection features - look for NTC temperature sensors and integrated protection. For a typical 10kW motor drive with 380V AC output, a 600V/100A or 1200V/75A module would be appropriate. Contact us for detailed selection calculations.",
      "decisionGuide": "Provide your inverter specifications to our FAE team for personalized module recommendations and thermal analysis.",
      "keywords": ["inverter module selection", "motor drive IGBT", "power module sizing"]
    },
    {
      "question": "What is the difference between IGBT and SiC power devices?",
      "answer": "IGBT and SiC devices have different characteristics: IGBT advantages - lower cost, mature technology, robust short-circuit capability, good for lower frequencies (<20kHz). SiC advantages - lower switching losses, higher frequency capability (>50kHz), better thermal conductivity, higher efficiency. Key differences: SiC has no tail current during turn-off, enabling faster switching. SiC on-resistance increases less with temperature. SiC can operate at higher junction temperatures (175°C vs 150°C). SiC systems can be smaller and lighter due to reduced cooling requirements. For EV chargers and solar inverters, SiC can improve efficiency by 1-2%. For motor drives, IGBT remains cost-effective for most applications.",
      "decisionGuide": "Choose IGBT for cost-sensitive, lower frequency applications. Choose SiC for high-frequency, high-efficiency, or size-constrained applications.",
      "keywords": ["IGBT vs SiC", "silicon carbide comparison", "power device selection"]
    },
    {
      "question": "What package options are available for Jingwei Qili power modules?",
      "answer": "Jingwei Qili power modules are available in industry-standard packages: EconoDUAL - compact dual modules for industrial drives, 34mm and 62mm widths. EconoPACK - standard packages with various configurations (PIM, six-pack, half-bridge). PrimePACK - high-power modules for traction and renewable energy. Custom packages - tailored solutions for specific customer requirements. All packages feature standardized footprints compatible with industry equivalents, allowing drop-in replacement. Packages include mounting holes, thermal interface, and standard pin configurations. Contact us for package drawings and mechanical specifications.",
      "decisionGuide": "Select package based on power level, cooling method, and mechanical constraints. Contact us for package recommendations and layout guidance.",
      "keywords": ["IGBT package types", "EconoDUAL EconoPACK", "power module package"]
    },
    {
      "question": "Does Jingwei Qili provide SPICE models for simulation?",
      "answer": "Yes, Jingwei Qili provides SPICE models for power semiconductor simulation. Available models include: IGBT models - accurate switching behavior, conduction characteristics, and temperature dependencies. Diode models - forward and reverse characteristics with reverse recovery behavior. SiC MOSFET models - including non-linear capacitances and temperature effects. Thermal models - thermal impedance networks for electro-thermal simulation. These models enable accurate circuit simulation before hardware prototyping. Models are compatible with popular simulators including LTspice, PSpice, and MATLAB/Simulink. Contact us to request specific device models for your simulation needs.",
      "decisionGuide": "Request SPICE models from our FAE team when starting your design. Use models to optimize gate drive and protection circuits.",
      "keywords": ["SPICE model", "IGBT simulation", "power device modeling"]
    }
  ],
  "categories": [
    {
      "id": "igbt-modules",
      "name": "IGBT Power Modules",
      "description": "Jingwei Qili IGBT power modules offer high-performance switching for industrial and automotive applications. These modules combine insulated gate bipolar transistors with anti-parallel freewheeling diodes in compact, thermally optimized packages. Available in various voltage ratings (600V-1700V) and current capacities (50A-600A), they serve motor drives, inverters, power supplies, and EV powertrains. The modules feature advanced chip technology for low conduction and switching losses, ensuring high system efficiency.",
      "parameters": ["Voltage Rating", "Current Rating", "Vce(sat)", "Switching Loss", "Tj(max)", "Package"],
      "applications": ["Motor Drives", "Solar Inverters", "EV Powertrains", "UPS Systems", "Welding Equipment"],
      "selectionGuide": {
        "title": "IGBT Module Selection Guide",
        "description": "Learn how to choose the right IGBT module for your power application",
        "articleId": "igbt-module-selection-guide",
        "articleLink": "/jingwei-qili/support/igbt-module-selection-guide.html"
      },
      "faqs": [
        {
          "question": "What voltage rating should I choose for my IGBT module?",
          "answer": "IGBT voltage rating selection requires safety margin above your maximum DC bus voltage. General guidelines: For 380V AC mains (rectified to ~540V DC), use 600V or 650V IGBTs. For 480V AC mains (rectified to ~680V DC), use 1200V IGBTs. For 690V AC mains (rectified to ~980V DC), use 1700V IGBTs. The industry standard is to use devices rated at least 2x the nominal DC voltage to handle voltage spikes and transients. For automotive applications with 400V battery systems, 650V devices are typical. For 800V EV systems, 1200V devices are required. Always check your actual maximum DC voltage including regeneration conditions.",
          "decisionGuide": "Calculate your maximum DC bus voltage and select IGBT with at least 1.5-2x voltage margin. Contact us for voltage rating recommendations.",
          "keywords": ["IGBT voltage rating", "600V 1200V 1700V IGBT", "DC bus voltage selection"]
        },
        {
          "question": "How do I calculate the current rating for my IGBT module?",
          "answer": "IGBT current rating calculation involves several factors: 1) RMS current - calculate from output power and voltage. For a 10kW inverter at 400V, Irms = 10,000/(400×√3) ≈ 14.4A. 2) Overload - consider 150% overload for 60 seconds typical for motor drives. 3) Switching frequency - higher frequencies increase switching losses, requiring derating. 4) Ambient temperature - derate for temperatures above 40°C. 5) Heat sink thermal resistance - affects maximum allowable losses. Example: A 50A module can typically handle 25-30A RMS in practical applications with proper heat sinking. Always perform thermal calculations to verify junction temperature stays below Tj(max).",
          "decisionGuide": "Calculate your RMS and peak currents, then apply thermal derating. Contact us for current rating calculations and thermal analysis.",
          "keywords": ["IGBT current rating", "RMS current calculation", "thermal derating"]
        },
        {
          "question": "What is Vce(sat) and why is it important?",
          "answer": "Vce(sat) is the collector-emitter saturation voltage - the voltage drop across the IGBT when fully on. It's important because: Conduction loss = Vce(sat) × Ic × duty cycle. Lower Vce(sat) means lower conduction losses and higher efficiency. Typical values range from 1.5V to 3.0V depending on device technology and current. Vce(sat) increases with temperature (positive temperature coefficient), which helps with current sharing in parallel devices. When comparing devices, consider Vce(sat) at your actual operating current, not just the datasheet typical value. For high-current applications, even small differences in Vce(sat) significantly impact total losses and heat sink requirements.",
          "decisionGuide": "Compare Vce(sat) at your operating current when selecting between devices. Consider trade-off between conduction and switching losses.",
          "keywords": ["Vce(sat)", "IGBT conduction loss", "saturation voltage"]
        },
        {
          "question": "How do switching losses affect IGBT selection?",
          "answer": "Switching losses significantly impact IGBT selection and thermal design: Switching loss = (Eon + Eoff) × switching frequency. Higher frequency applications generate more switching losses, potentially dominating total losses. IGBTs optimized for low switching losses typically have slightly higher Vce(sat) - there's a trade-off. Soft-switching topologies (ZVS/ZCS) can dramatically reduce switching losses. SiC devices have much lower switching losses than IGBTs, enabling higher frequencies. For hard-switched inverters at 10kHz, switching and conduction losses are often comparable. At 20kHz+, switching losses usually dominate. When selecting IGBTs, calculate both conduction and switching losses at your operating frequency.",
          "decisionGuide": "Calculate total losses (conduction + switching) at your frequency. Consider SiC for frequencies above 20kHz. Contact us for loss calculations.",
          "keywords": ["IGBT switching loss", "Eon Eoff", "switching frequency"]
        },
        {
          "question": "What is the maximum junction temperature for IGBT modules?",
          "answer": "Maximum junction temperature (Tj(max)) is critical for reliable IGBT operation: Standard industrial IGBTs: Tj(max) = 150°C. Automotive grade devices: Tj(max) = 175°C for some advanced devices. Operating continuously at Tj(max) reduces lifetime - typical designs target Tj < 125°C for industrial, < 150°C for automotive. Temperature cycling causes thermal stress - minimize temperature swings for long life. Each 10°C reduction below Tj(max) approximately doubles device lifetime. Monitor Tj using the integrated NTC thermistor. Implement over-temperature protection at safe margin below Tj(max). Thermal modeling is essential to ensure Tj stays within limits under all operating conditions.",
          "decisionGuide": "Design for Tj at least 25°C below Tj(max). Implement temperature monitoring and protection. Contact us for thermal modeling assistance.",
          "keywords": ["Tjmax", "junction temperature", "IGBT thermal limit"]
        }
      ],
      "products": [
        {
          "partNumber": "JQMB100N120A",
          "name": "1200V 100A IGBT Module",
          "shortDescription": "High-performance 1200V, 100A IGBT module in EconoDUAL package for motor drives and inverters.",
          "descriptionParagraphs": [
            "The JQMB100N120A is a 1200V, 100A IGBT module featuring trench-gate field-stop technology for low conduction and switching losses.",
            "Packaged in the compact EconoDUAL 34mm format, this module integrates two IGBTs with anti-parallel diodes for half-bridge configurations.",
            "Ideal for 380V AC motor drives, solar inverters, and UPS systems requiring reliable power switching up to 20kHz."
          ],
          "specifications": {
            "Voltage Rating": "1200V",
            "Current Rating": "100A @ 80°C",
            "Vce(sat)": "1.7V typical",
            "Switching Loss": "Eon=8mJ, Eoff=12mJ",
            "Tj(max)": "150°C",
            "Package": "EconoDUAL 34mm",
            "Isolation": "2500V RMS",
            "Temperature Sensor": "NTC 10kΩ included"
          },
          "features": [
            "Trench-gate field-stop technology",
            "Low Vce(sat) for reduced conduction losses",
            "Fast switching for frequencies up to 20kHz",
            "Compact EconoDUAL package",
            "Integrated NTC temperature sensor",
            "Rugged design for industrial applications"
          ],
          "applications": [
            "380V AC motor drives",
            "Solar string inverters",
            "UPS power modules",
            "Welding power supplies",
            "Industrial power supplies"
          ],
          "faeReview": {
            "author": "Michael Zhang",
            "title": "Senior FAE - Power Electronics",
            "content": "The JQMB100N120A is my go-to recommendation for 10-20kW motor drive applications. The 1200V rating provides good margin for 380V AC systems, and the 100A rating handles typical overload requirements. I've used this module in numerous VFD designs with excellent results. The Vce(sat) of 1.7V is competitive with tier-1 suppliers, keeping conduction losses manageable. Switching performance is smooth with no oscillations when using proper gate drive. The integrated NTC is valuable for temperature monitoring and protection. One customer replaced a competitor's module with this one and saw no performance difference at 30% lower cost. I recommend using a gate resistor of 10-15Ω for switching frequencies around 10kHz. For thermal design, plan for 200-250W heat dissipation at full load.",
            "highlight": "Excellent cost-performance ratio for 10-20kW industrial drives"
          },
          "alternativeParts": [
            {
              "partNumber": "JQMB150N120A",
              "brand": "Jingwei Qili",
              "specifications": {
                "Voltage Rating": "1200V",
                "Current Rating": "150A @ 80°C",
                "Vce(sat)": "1.75V typical",
                "Package": "EconoDUAL 34mm"
              },
              "comparison": {
                "Current Rating": "150A > 100A (+50%)",
                "Vce(sat)": "1.75V ≈ 1.7V (similar)",
                "Package": "Same EconoDUAL 34mm",
                "Price": "Higher for increased current"
              },
              "reason": "Higher current capacity for larger drives or higher overload requirements",
              "useCase": "Use for 15-30kW drives or when higher overload capability is needed",
              "link": "/jingwei-qili/products/igbt-modules/JQMB150N120A.html"
            },
            {
              "partNumber": "JQMB100N120S",
              "brand": "Jingwei Qili",
              "specifications": {
                "Voltage Rating": "1200V",
                "Current Rating": "100A @ 80°C",
                "Vce(sat)": "1.85V typical",
                "Switching Loss": "Lower than standard"
              },
              "comparison": {
                "Current Rating": "100A = 100A (same)",
                "Vce(sat)": "1.85V > 1.7V (slightly higher)",
                "Switching Loss": "Lower than standard",
                "Frequency": "Better for >15kHz operation"
              },
              "reason": "Optimized for higher switching frequencies with lower switching losses",
              "useCase": "Use for high-frequency applications (15-25kHz) where switching loss dominates",
              "link": "/jingwei-qili/products/igbt-modules/JQMB100N120S.html"
            }
          ],
          "companionParts": [
            {
              "partNumber": "2SP0115T",
              "link": "#",
              "description": "Dual-channel IGBT gate driver for EconoDUAL modules",
              "category": "Gate Drivers"
            },
            {
              "partNumber": "JQMB100N120A-EVK",
              "link": "#",
              "description": "Evaluation kit with gate driver and protection circuits",
              "category": "Evaluation Kits"
            },
            {
              "partNumber": "Thermal Pad 34mm",
              "link": "#",
              "description": "High-performance thermal interface material",
              "category": "Thermal Materials"
            },
            {
              "partNumber": "Heat Sink EconoDUAL",
              "link": "#",
              "description": "Optimized heat sink for 34mm EconoDUAL modules",
              "category": "Heat Sinks"
            }
          ],
          "faqs": [
            {
              "question": "What gate drive voltage should I use for this IGBT module?",
              "answer": "The JQMB100N120A requires +15V gate drive for turn-on and -5 to -8V for turn-off (or 0V for single supply). Recommended gate drive: Turn-on voltage: +15V ± 0.5V. Turn-off voltage: -5V to -8V (or 0V). Gate resistor: 5-20Ω depending on switching frequency and EMI requirements. Higher resistance slows switching, reducing EMI but increasing switching loss. Lower resistance speeds switching, reducing losses but increasing EMI and voltage overshoot. For 10kHz operation, 10-15Ω is typical. For 20kHz+, 5-10Ω may be preferred. Always use a gate driver with miller clamp protection to prevent false turn-on during switching.",
              "decisionGuide": "Start with 10Ω gate resistor and adjust based on switching waveforms. Use isolated gate drivers with proper protection features.",
              "keywords": ["gate drive voltage", "IGBT gate resistor", "gate driver selection"]
            },
            {
              "question": "How do I mount this module to the heat sink?",
              "answer": "Proper mounting is critical for thermal performance: 1) Surface preparation - ensure heat sink surface is flat (<50μm deviation) and clean. 2) Thermal interface - use high-quality thermal pad or grease with 0.1-0.2mm thickness. 3) Mounting torque - apply 2.5-3.5 N·m to mounting screws in stages (50%, 80%, 100%). 4) Even pressure - tighten screws in diagonal pattern for uniform pressure. 5) Re-torque - check torque after 24 hours of thermal cycling. The module base plate is electrically isolated, so no additional isolation is needed. Use M4 screws with washers. Don't overtighten - excessive torque can damage the module. Apply thermal paste evenly if not using pre-cut thermal pads.",
              "decisionGuide": "Follow the mounting procedure in the application note. Use proper torque tools and thermal interface materials.",
              "keywords": ["IGBT mounting", "thermal interface", "mounting torque"]
            },
            {
              "question": "What protection features should I implement?",
              "answer": "Essential protection features for IGBT modules: Overcurrent protection - desaturation detection with soft shutdown, typically 1.5-2x rated current. Short-circuit protection - fast detection (<10μs) and shutdown to prevent damage. Over-temperature protection - monitor NTC sensor, shutdown at 125-135°C junction. Overvoltage protection - snubber circuits or active clamping for voltage spikes. Undervoltage lockout - ensure gate drive voltage is sufficient before operation. Miller clamp - prevent false turn-on during switching. Gate monitoring - detect gate circuit faults. Implement two-level protection - alarm at warning level, shutdown at critical level. Use isolated gate drivers with built-in protection features for reliable operation.",
              "decisionGuide": "Implement comprehensive protection using intelligent gate drivers. Contact us for protection circuit design guidance.",
              "keywords": ["IGBT protection", "desaturation detection", "overcurrent protection"]
            },
            {
              "question": "Can I parallel multiple modules for higher current?",
              "answer": "Yes, IGBT modules can be paralleled for higher current capacity, but careful design is required: Current sharing - IGBTs have positive temperature coefficient, helping natural current sharing. Gate drive - use identical gate drive circuits with matched cable lengths. Layout - symmetrical layout with equal inductance paths is critical. Derating - parallel 3 modules for 2.5x current (not 3x) to account for imbalance. Matching - devices from same production batch have better matching. Testing - verify current sharing under full load with current probes. For high reliability, consider using a single higher-current module instead of paralleling. If paralleling is necessary, limit to 2-3 modules and implement individual current monitoring.",
              "decisionGuide": "Prefer single higher-current module over paralleling. If paralleling is required, use careful layout and matching. Contact us for paralleling design support.",
              "keywords": ["IGBT paralleling", "current sharing", "parallel modules"]
            },
            {
              "question": "What is the expected lifetime of this IGBT module?",
              "answer": "IGBT lifetime depends on operating conditions: Thermal cycling - number of temperature swings between cold and hot states. Power cycling - switching on/off causes thermal stress at chip and wire bonds. Typical lifetime: 100,000+ hours continuous operation at Tj=125°C. 10,000+ thermal cycles of 50°C temperature swing. Factors affecting lifetime: Lower Tj increases lifetime exponentially (Arrhenius relationship). Minimizing temperature swings reduces thermal stress. Proper mechanical mounting prevents thermal interface degradation. Conservative design margins improve reliability. Jingwei Qili modules undergo rigorous reliability testing including HTRB, HAST, and temperature cycling. For critical applications, perform accelerated life testing under your specific conditions.",
              "decisionGuide": "Design for Tj < 125°C and minimize temperature swings. Contact us for reliability data and lifetime estimation for your application.",
              "keywords": ["IGBT lifetime", "reliability", "thermal cycling"]
            }
          ]
        },
        {
          "partNumber": "JQMB200N120A",
          "name": "1200V 200A IGBT Module",
          "shortDescription": "High-power 1200V, 200A IGBT module in EconoDUAL 62mm package for industrial drives and renewable energy.",
          "descriptionParagraphs": [
            "The JQMB200N120A is a high-power 1200V, 200A IGBT module designed for demanding industrial and renewable energy applications.",
            "Featuring advanced trench-gate technology and optimized diode recovery, this module delivers excellent performance in motor drives and solar inverters.",
            "The EconoDUAL 62mm package provides superior thermal performance for high-power applications up to 50kW."
          ],
          "specifications": {
            "Voltage Rating": "1200V",
            "Current Rating": "200A @ 80°C",
            "Vce(sat)": "1.65V typical",
            "Switching Loss": "Eon=15mJ, Eoff=22mJ",
            "Tj(max)": "150°C",
            "Package": "EconoDUAL 62mm",
            "Isolation": "4000V RMS",
            "Temperature Sensor": "NTC 10kΩ included"
          },
          "features": [
            "High current capacity for large drives",
            "Low Vce(sat) minimizes conduction losses",
            "Fast recovery diodes reduce switching losses",
            "Rugged EconoDUAL 62mm package",
            "Enhanced isolation for industrial use",
            "Integrated temperature monitoring"
          ],
          "applications": [
            "30-50kW motor drives",
            "Central solar inverters",
            "Wind power converters",
            "Industrial UPS systems",
            "Traction inverters"
          ],
          "faeReview": {
            "author": "David Liu",
            "title": "Principal FAE - Industrial Systems",
            "content": "The JQMB200N120A is an excellent choice for high-power industrial applications. I've deployed this module in 37kW motor drives and 50kW solar inverters with excellent results. The 200A rating provides good margin for overload conditions, and the low Vce(sat) keeps efficiency high even at full load. The 62mm package has excellent thermal performance - with proper heat sinking, you can operate at 150A continuous with Tj around 110°C. Switching characteristics are smooth and predictable. The module is pin-compatible with industry-standard devices, making replacement straightforward. One solar inverter customer achieved 98.5% efficiency at full load using these modules. For thermal design, budget for 400-500W heat dissipation at full current. I recommend forced air or liquid cooling for continuous high-power operation.",
            "highlight": "High-power module ideal for 30-50kW industrial applications"
          },
          "alternativeParts": [
            {
              "partNumber": "JQMB150N120A",
              "brand": "Jingwei Qili",
              "specifications": {
                "Voltage Rating": "1200V",
                "Current Rating": "150A @ 80°C",
                "Vce(sat)": "1.7V typical",
                "Package": "EconoDUAL 62mm"
              },
              "comparison": {
                "Current Rating": "150A < 200A (-25%)",
                "Vce(sat)": "1.7V > 1.65V (slightly higher)",
                "Package": "Same EconoDUAL 62mm",
                "Price": "Lower for reduced current"
              },
              "reason": "Lower cost option for applications with moderate current requirements",
              "useCase": "Use for 22-37kW drives where 200A capacity exceeds requirements",
              "link": "/jingwei-qili/products/igbt-modules/JQMB150N120A.html"
            },
            {
              "partNumber": "JQMB200N120S",
              "brand": "Jingwei Qili",
              "specifications": {
                "Voltage Rating": "1200V",
                "Current Rating": "200A @ 80°C",
                "Vce(sat)": "1.8V typical",
                "Switching Loss": "Lower than standard"
              },
              "comparison": {
                "Current Rating": "200A = 200A (same)",
                "Vce(sat)": "1.8V > 1.65V (higher conduction)",
                "Switching Loss": "Lower than standard",
                "Best For": "High frequency >15kHz"
              },
              "reason": "Optimized for high-frequency switching with lower switching losses",
              "useCase": "Use for high-frequency inverters (15-20kHz) where switching loss dominates",
              "link": "/jingwei-qili/products/igbt-modules/JQMB200N120S.html"
            }
          ],
          "companionParts": [
            {
              "partNumber": "2SP0320V",
              "link": "#",
              "description": "High-power dual IGBT gate driver for 62mm modules",
              "category": "Gate Drivers"
            },
            {
              "partNumber": "JQMB200N120A-EVK",
              "link": "#",
              "description": "High-power evaluation kit with complete gate drive",
              "category": "Evaluation Kits"
            },
            {
              "partNumber": "Thermal Pad 62mm",
              "link": "#",
              "description": "High-performance thermal pad for 62mm modules",
              "category": "Thermal Materials"
            },
            {
              "partNumber": "Heat Sink 62mm High-Power",
              "link": "#",
              "description": "High-capacity heat sink for 62mm EconoDUAL modules",
              "category": "Heat Sinks"
            }
          ],
          "faqs": [
            {
              "question": "What cooling is required for this high-power module?",
              "answer": "The JQMB200N120A requires effective cooling due to high power dissipation: Heat dissipation - expect 400-500W at 200A continuous with switching losses. Heat sink thermal resistance - target 0.05-0.1°C/W for natural convection, 0.02-0.05°C/W for forced air. Cooling options: Natural convection - only for very low duty cycles or intermittent operation. Forced air - typical for industrial applications, 200-400 LFM airflow. Liquid cooling - recommended for continuous high-power operation. Thermal interface - use high-performance thermal pad (thermal conductivity >3 W/mK). Mounting - ensure even pressure distribution across the base plate. Temperature monitoring - use the integrated NTC and implement over-temperature protection at 125°C. For reliable operation, design for Tj < 125°C at maximum ambient temperature.",
              "decisionGuide": "Use forced air cooling for typical industrial applications. Consider liquid cooling for continuous high-power operation. Contact us for thermal design support.",
              "keywords": ["high power cooling", "heat sink thermal resistance", "liquid cooling IGBT"]
            },
            {
              "question": "Can this module be used for EV traction inverters?",
              "answer": "Yes, the JQMB200N120A can be used for EV traction inverters with proper design considerations: Voltage rating - 1200V is suitable for 400V battery systems (not for 800V systems which need 1700V devices). Current rating - 200A supports 50-75kW peak power depending on cooling. Peak current - can handle 2x rated current (400A) for short periods typical of EV acceleration. Automotive qualification - check for AEC-Q101 qualification if required. Reliability - ensure design meets automotive reliability requirements. Protection - implement comprehensive fault protection for safety. Thermal management - EV applications require robust cooling systems. For production EV designs, consider automotive-qualified variants and work closely with our FAE team on reliability validation.",
              "decisionGuide": "Verify automotive qualification requirements. Ensure robust thermal management and protection systems. Contact us for EV application support.",
              "keywords": ["EV traction inverter", "automotive IGBT", "electric vehicle power"]
            },
            {
              "question": "What is the difference between this and the 100A version?",
              "answer": "Key differences between JQMB200N120A (200A) and JQMB100N120A (100A): Current rating - 200A vs 100A continuous at 80°C case. Package size - 62mm vs 34mm width (both EconoDUAL). Thermal performance - larger base plate and better heat spreading in 62mm package. Vce(sat) - slightly lower (1.65V vs 1.7V) due to larger chip area. Switching losses - higher absolute values but similar per-amp losses. Isolation - 4000V vs 2500V RMS (higher in 62mm). Applications - 200A for 30-50kW, 100A for 10-20kW systems. Price - approximately 1.8-2x the cost of 100A version. Both use same chip technology and have similar reliability. The 200A version is not just two 100A chips in parallel - it's optimized for high-current operation.",
              "decisionGuide": "Choose based on your current requirements and power level. The 200A version offers better thermal performance per amp.",
              "keywords": ["200A vs 100A IGBT", "EconoDUAL comparison", "high current module"]
            },
            {
              "question": "How do I calculate efficiency for an inverter using this module?",
              "answer": "Inverter efficiency calculation with IGBT modules: Conduction loss = Vce(sat) × Ic × duty cycle × 6 (for 3-phase). Switching loss = (Eon + Eoff) × fsw × 6. Diode loss = Vf × If × duty cycle × 6. Total semiconductor loss = sum of all losses. Efficiency = Pout / (Pout + Ploss) × 100%. Example for 37kW inverter: Output power = 37kW, Ic = 54A RMS, fsw = 8kHz. Conduction loss ≈ 1.65V × 54A × 0.5 × 6 ≈ 267W. Switching loss ≈ (15+22)mJ × 8kHz × 6 ≈ 1,776W. Total loss ≈ 2,043W. Efficiency ≈ 37,000 / 39,043 ≈ 94.8%. Actual efficiency depends on operating point, cooling, and control strategy. Measure actual efficiency under your operating conditions.",
              "decisionGuide": "Calculate losses at your operating point. Consider efficiency vs. switching frequency trade-off. Contact us for efficiency optimization guidance.",
              "keywords": ["inverter efficiency", "IGBT loss calculation", "power conversion efficiency"]
            },
            {
              "question": "What are the key layout considerations for this module?",
              "answer": "PCB layout guidelines for high-power IGBT modules: DC link capacitors - place as close as possible to module terminals to minimize stray inductance. Use film capacitors with low ESL. Bus bar design - keep positive and negative bus bars close together to reduce inductance. Use laminated bus bars for best performance. Gate drive - keep gate traces short and away from high-current paths. Use twisted pair or shielded cables for gate signals. Current sensing - implement desaturation detection and optional shunt resistors. Protection circuits - place snubber capacitors close to module terminals. Layout symmetry - for multi-phase designs, maintain symmetrical layout for each phase. Clearance - provide adequate creepage and clearance distances for high voltage isolation. Thermal vias - use thermal vias under the module mounting area for heat spreading.",
              "decisionGuide": "Follow layout best practices to minimize stray inductance and ensure reliable operation. Contact us for layout review and recommendations.",
              "keywords": ["IGBT layout", "bus bar design", "stray inductance"]
            }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2));
console.log('✓ products.json created');

// 3. Create solutions.json
const solutionsData = {
  "seoTitle": "Jingwei Qili Power Solutions - Motor Drive & EV Systems | LiTong",
  "seoDescription": "Explore Jingwei Qili power semiconductor solutions including motor drive inverters and EV powertrain systems. Complete technical specifications and distributor support available.",
  "seoKeywords": [
    "Jingwei Qili solutions",
    "motor drive inverter distributor",
    "EV powertrain solution",
    "IGBT inverter design",
    "power electronics solution"
  ],
  "faqs": [
    {
      "question": "What types of power solutions does Jingwei Qili offer?",
      "answer": "Jingwei Qili offers comprehensive power semiconductor solutions for industrial and automotive applications including variable frequency motor drive inverters for industrial automation, electric vehicle powertrain systems for traction and auxiliary power, solar and wind power converters for renewable energy, and uninterruptible power supplies for critical infrastructure. These solutions leverage Jingwei Qili's IGBT and SiC power modules to deliver high efficiency, reliability, and performance. Each solution includes complete system design, BOM recommendations, and technical support from our FAE team.",
      "decisionGuide": "Contact our FAE team to discuss your specific power conversion requirements and receive tailored solution recommendations.",
      "keywords": ["Jingwei Qili solutions", "power inverter solution", "motor drive system"]
    },
    {
      "question": "How do I select the right power solution for my application?",
      "answer": "Selecting the right power solution involves evaluating your application requirements: For motor drives, consider the Motor Drive Inverter Solution which provides complete VFD designs from 5kW to 100kW. For electric vehicles, the EV Powertrain Solution offers traction inverter and DC-DC converter designs. Key factors include power level, voltage rating, switching frequency, efficiency targets, and environmental conditions. Our solutions are built on proven Jingwei Qili power modules and include complete system designs, gate drivers, protection circuits, and control algorithms. Contact our FAE team with your specifications for personalized recommendations.",
      "decisionGuide": "Share your application requirements with our FAE team for personalized solution selection and technical consultation.",
      "keywords": ["power solution selection", "inverter design guide", "IGBT solution distributor"]
    },
    {
      "question": "What support is available for implementing Jingwei Qili solutions?",
      "answer": "LiTong provides comprehensive support for Jingwei Qili solution implementation including: Technical consultation to help select the right solution for your application, Reference designs and BOM lists for rapid prototyping, FAE support for design review and optimization, SPICE models for circuit simulation, Evaluation kits for hardware validation, Documentation including user guides and application notes. Our FAE team has extensive experience with power electronics and can provide guidance on thermal design, gate drive optimization, and system integration. We also offer training sessions on power module applications.",
      "decisionGuide": "Contact us early in your project to discuss support options and engage our FAE team for technical guidance.",
      "keywords": ["Jingwei Qili solution support", "power electronics help", "FAE technical support"]
    },
    {
      "question": "Can Jingwei Qili solutions be customized for specific requirements?",
      "answer": "Yes, Jingwei Qili solutions can be customized to meet specific application requirements. The modular power solution architecture allows flexibility to: Adjust power levels by selecting different module ratings, Modify switching frequencies for efficiency optimization, Adapt control algorithms for specific motor types or grid requirements, Customize protection features for safety standards compliance, Optimize thermal design for specific environmental conditions. Our solutions serve as starting points that can be tailored to your exact needs. Contact our FAE team to discuss customization options for your project.",
      "decisionGuide": "Discuss your customization requirements with our FAE team to determine the best approach for your application.",
      "keywords": ["Jingwei Qili customization", "power solution modification", "custom inverter design"]
    },
    {
      "question": "What is the typical development timeline for Jingwei Qili power solutions?",
      "answer": "Development timelines vary based on solution complexity and customization requirements: Standard solution deployment using reference designs can be completed in 6-10 weeks including hardware adaptation and control software development. Customized solutions with modified power stages or control algorithms typically require 10-16 weeks. Complex custom solutions with significant architectural changes may take 16-24 weeks. Timeline phases include: Requirements analysis and solution selection (1-2 weeks), Hardware design and procurement (4-6 weeks), Control software development (4-8 weeks), System integration and testing (3-5 weeks), Performance validation (1-2 weeks). Using our reference designs can significantly accelerate development.",
      "decisionGuide": "Contact us early to discuss your timeline requirements and explore options to accelerate development.",
      "keywords": ["power solution development", "inverter project timeline", "solution deployment time"]
    }
  ],
  "solutions": [
    {
      "id": "motor-drive-inverter",
      "title": "Variable Frequency Motor Drive Inverter",
      "slug": "motor-drive-inverter-solution",
      "name": "Variable Frequency Motor Drive Inverter",
      "description": "A complete motor drive solution for industrial variable frequency drives (VFD) and servo systems. This solution leverages Jingwei Qili IGBT power modules to deliver efficient, reliable motor control for pumps, fans, compressors, and industrial machinery.",
      "longDescription": "The Variable Frequency Motor Drive Inverter Solution provides a complete, production-ready design for industrial motor control applications from 5kW to 100kW. Built on Jingwei Qili's proven IGBT power modules, this solution includes a three-phase inverter bridge, gate drive circuits, protection systems, and control algorithms. The design supports both V/Hz control for general-purpose applications and vector control for high-performance servo systems. Advanced features include regenerative braking, DC injection braking, and multiple protection functions for reliable operation in industrial environments. The modular design allows easy scaling across power ranges by selecting appropriate IGBT modules. Complete documentation includes schematics, PCB layouts, BOM, and source code for the control algorithm. This solution accelerates time-to-market for industrial drive manufacturers while ensuring high performance and reliability.",
      "benefits": [
        "Complete production-ready design accelerates time-to-market by 6+ months",
        "High efficiency up to 97% reduces energy costs and cooling requirements",
        "Comprehensive protection functions ensure reliable operation in harsh environments",
        "Modular design scales from 5kW to 100kW with simple module changes",
        "Vector control option provides servo-grade performance for precision applications",
        "Cost-effective compared to developing inverter from scratch"
      ],
      "features": [
        "Three-phase IGBT inverter bridge with anti-parallel diodes",
        "Intelligent gate drivers with desaturation protection",
        "V/Hz and sensorless vector control algorithms",
        "Regenerative braking capability",
        "Comprehensive fault protection (overcurrent, overvoltage, overtemperature)",
        "RS-485/CAN communication interfaces",
        "EMC compliant design"
      ],
      "applications": [
        "Pump and fan control",
        "HVAC systems",
        "Conveyor systems",
        "Machine tool drives",
        "Compressor control"
      ],
      "specifications": {
        "Power Range": "5kW to 100kW",
        "Input Voltage": "380V/480V AC 3-phase",
        "Output Voltage": "0 to input voltage",
        "Output Frequency": "0-400Hz (standard), up to 1000Hz (optional)",
        "Switching Frequency": "2-16kHz configurable",
        "Efficiency": "Up to 97%",
        "Control Mode": "V/Hz or vector control",
        "Protection": "Overcurrent, overvoltage, undervoltage, overtemperature, ground fault"
      },
      "technicalSpecs": {
        "IGBT Modules": "Jingwei Qili EconoDUAL series",
        "Gate Driver": "2SP0115T or equivalent",
        "Controller": "ARM Cortex-M4 or DSP",
        "Current Sensing": "Hall effect or shunt resistors",
        "DC Link Capacitor": "Film capacitors low ESL",
        "Heat Sink": "Aluminum extrusion with forced air",
        "Enclosure": "IP20 standard, IP54 optional",
        "Certifications": "CE, UL pending"
      },
      "coreAdvantages": [
        {
          "title": "High Efficiency",
          "description": "Optimized IGBT selection and switching patterns achieve up to 97% efficiency, reducing energy costs and heat generation."
        },
        {
          "title": "Comprehensive Protection",
          "description": "Multi-level protection system including desaturation detection, overcurrent, overvoltage, and thermal protection ensures reliable operation."
        },
        {
          "title": "Flexible Control",
          "description": "Supports both simple V/Hz control for pumps and fans and high-performance vector control for servo applications."
        },
        {
          "title": "Scalable Design",
          "description": "Modular architecture allows simple scaling across power ranges by changing IGBT modules and heat sink size."
        },
        {
          "title": "Cost-Effective",
          "description": "Complete reference design eliminates months of development time and reduces engineering costs significantly."
        }
      ],
      "bomList": [
        {
          "designator": "Q1-Q6",
          "partNumber": "JQMB100N120A",
          "description": "IGBT power module (qty depends on power rating)",
          "quantity": 3,
          "link": "/jingwei-qili/products/igbt-modules/JQMB100N120A.html"
        },
        {
          "designator": "U1-U3",
          "partNumber": "2SP0115T",
          "description": "IGBT gate driver IC",
          "quantity": 3,
          "link": "#"
        },
        {
          "designator": "C1-C6",
          "partNumber": "DC-Link Film Capacitor",
          "description": "Low ESL DC link capacitors",
          "quantity": 6,
          "link": "#"
        },
        {
          "designator": "HS1",
          "partNumber": "Heat Sink Assembly",
          "description": "Aluminum heat sink with fan",
          "quantity": 1,
          "link": "#"
        }
      ],
      "customerCases": [
        {
          "customerName": "Industrial Pump Manufacturer",
          "industry": "Industrial Equipment",
          "application": "Variable Speed Pump Drives",
          "challenge": "The customer needed to develop a line of variable speed drives for their pump products ranging from 7.5kW to 37kW. They had limited power electronics expertise and needed a complete solution to accelerate development.",
          "solution": "We provided the complete motor drive inverter solution with Jingwei Qili IGBT modules. The reference design included schematics, PCB layout, control software, and documentation. Our FAE team provided training and support during their product development.",
          "result": "The customer launched their VFD product line in 4 months instead of the projected 12 months. The drives achieved 96.5% efficiency and passed all EMC and safety certifications on the first attempt. Production cost was 25% lower than using competitor modules."
        },
        {
          "customerName": "HVAC System Integrator",
          "industry": "Building Automation",
          "application": "Fan and Compressor Control",
          "challenge": "The customer needed energy-efficient motor drives for HVAC systems that could operate reliably in harsh environments with high ambient temperatures and dust.",
          "solution": "We customized the motor drive solution with enhanced thermal management and conformal coating for environmental protection. Used Jingwei Qili 150A IGBT modules for the 22kW compressor drives with oversized heat sinks.",
          "result": "The drives operate reliably at 50°C ambient with 95% efficiency. The customer won a major commercial building contract based on the energy savings demonstrated. Maintenance costs dropped 40% compared to their previous drive supplier."
        }
      ],
      "faeInsights": {
        "author": {
          "name": "Michael Zhang",
          "title": "Senior FAE - Power Electronics",
          "experience": "15 years",
          "expertise": ["Motor Drives", "Power Inverters", "IGBT Applications"]
        },
        "content": "Motor drive design requires careful attention to multiple factors beyond just the power stage. In my experience supporting dozens of drive designs, the key to success is integrating the power stage, control algorithm, and protection systems properly. The Jingwei Qili IGBT modules provide a solid foundation, but the gate drive design is equally critical. I always recommend using intelligent gate drivers with desaturation protection - this single feature can prevent catastrophic failures during short circuits. For the control algorithm, start with V/Hz for simple applications, but consider vector control if you need torque control or fast dynamic response. Thermal design is often underestimated - use proper thermal modeling and validation. One customer ignored my advice on heat sink sizing and experienced IGBT failures in the field. After upgrading the heat sink per my recommendations, the drives have operated reliably for 3+ years. I recommend using the evaluation kit to validate your thermal design before committing to production.",
        "logic": "The motor drive development process follows a systematic approach. First, define your application requirements including power rating, voltage, and control performance needs. Then select the appropriate IGBT module based on voltage and current calculations with proper safety margins. Design the gate drive circuit with adequate protection features. Develop or adapt the control algorithm for your motor type. Implement comprehensive protection functions including overcurrent, overvoltage, and thermal protection. Finally, validate the complete system through thorough testing under all operating conditions.",
        "decisionFramework": {
          "steps": [
            "Define motor and load requirements - power, torque, speed range",
            "Calculate DC bus voltage and select IGBT voltage rating (2x margin)",
            "Calculate RMS current and select IGBT current rating with overload",
            "Design gate drive with desaturation protection",
            "Select control mode (V/Hz or vector) based on performance needs",
            "Design thermal management system with adequate heat sinking",
            "Implement comprehensive protection functions",
            "Test and validate under all operating conditions"
          ],
          "decisionTree": "If application is pump/fan only, V/Hz control is sufficient. If servo performance needed, use vector control. If ambient >40°C, increase heat sink size or use forced air. If switching frequency >10kHz, verify switching losses are acceptable.",
          "keyMetrics": {
            "efficiency": "95-97% at rated load",
            "currentHarmonics": "<5% THD with proper control",
            "torqueResponse": "<10ms for vector control"
          }
        },
        "keyTakeaways": [
          "Use intelligent gate drivers with desaturation protection",
          "Perform thorough thermal modeling and validation",
          "Start with reference design and customize as needed",
          "Test under worst-case conditions including overload",
          "Implement comprehensive protection for reliable operation"
        ],
        "commonPitfalls": [
          "Undersizing heat sinks leads to thermal failures",
          "Inadequate gate drive protection causes catastrophic failures",
          "Poor layout introduces noise and reliability issues",
          "Insufficient testing under worst-case conditions"
        ],
        "bestPractices": [
          "Use evaluation kit to validate design before production",
          "Implement soft-start to limit inrush current",
          "Include DC bus precharge circuit for large capacitors",
          "Design for manufacturability and serviceability"
        ]
      },
      "faqs": [
        {
          "question": "What motor types can this inverter solution control?",
          "answer": "The motor drive inverter solution supports various AC motor types: Induction motors (asynchronous) - the most common type, supported in both V/Hz and vector control modes. Permanent magnet synchronous motors (PMSM) - high-efficiency motors requiring vector control. Brushless DC motors (BLDC) - trapezoidal back-EMF motors common in fans and pumps. Synchronous reluctance motors - emerging high-efficiency motor type. The standard V/Hz mode works with any AC induction motor. Vector control mode provides optimal performance for PMSM and high-dynamic applications. The control software can be adapted for specific motor parameters. Contact us for motor-specific tuning guidance.",
          "decisionGuide": "Specify your motor type when requesting the solution. We can provide parameter settings for your specific motor.",
          "keywords": ["motor types", "induction motor", "PMSM control"]
        },
        {
          "question": "How do I size the heat sink for my application?",
          "answer": "Heat sink sizing procedure: 1) Calculate total losses - conduction losses + switching losses at operating point. 2) Determine maximum allowable thermal resistance: Rth(j-a) = (Tj(max) - Ta(max)) / Ploss. 3) Subtract module and interface thermal resistances: Rth(heatsink) = Rth(j-a) - Rth(j-c) - Rth(interface). 4) Select heat sink with thermal resistance less than calculated value. Example: For 2kW losses, Tj(max)=125°C, Ta=40°C: Rth(j-a) = (125-40)/2000 = 0.0425°C/W. With Rth(j-c)=0.08°C/W and Rth(interface)=0.1°C/W, you need heat sink with Rth < 0.25°C/W (with forced air). Natural convection typically requires 3-5x larger heat sink. Always include safety margin and verify with thermal testing.",
          "decisionGuide": "Use our thermal calculation spreadsheet or contact FAE for heat sink sizing assistance. Validate with thermal testing.",
          "keywords": ["heat sink sizing", "thermal resistance", "IGBT cooling"]
        },
        {
          "question": "What communication interfaces are supported?",
          "answer": "The motor drive solution supports multiple communication interfaces: RS-485 - Modbus RTU protocol for industrial networks, most common interface. CAN bus - CANopen or proprietary protocols for automotive and industrial use. Ethernet - Modbus TCP or EtherCAT for high-performance systems (optional). Analog inputs - 0-10V or 4-20mA for speed reference. Digital I/O - start/stop, direction, fault signals. The standard solution includes RS-485 with Modbus RTU. Additional interfaces can be added based on customer requirements. Contact us for specific communication protocol implementations.",
          "decisionGuide": "RS-485 with Modbus is suitable for most applications. Specify if you need CAN, Ethernet, or other interfaces.",
          "keywords": ["communication interface", "Modbus RTU", "CAN bus"]
        },
        {
          "question": "How do I implement regenerative braking?",
          "answer": "Regenerative braking returns energy to the DC bus instead of dissipating it in resistors: Implementation options: 1) Brake chopper - dissipates energy in resistor (not truly regenerative but simple). 2) Active front end - uses IGBT bridge on input for bidirectional power flow. 3) Common DC bus - share DC bus between drives so braking energy powers other motors. For the brake chopper approach: Monitor DC bus voltage. When Vdc exceeds threshold (typically 720V for 540V nominal), turn on brake IGBT. Energy dissipates in brake resistor. For true regeneration, active front end is required but significantly increases cost and complexity. Most industrial applications use brake choppers due to simplicity.",
          "decisionGuide": "Use brake chopper for simple applications. Consider active front end only if energy recovery justifies the cost.",
          "keywords": ["regenerative braking", "brake chopper", "dynamic braking"]
        },
        {
          "question": "What safety certifications are required for motor drives?",
          "answer": "Motor drive safety certifications depend on market and application: CE marking - required for European market, includes LVD (Low Voltage Directive) and EMC Directive. UL listing - required for North American market, UL 61800-5-1 for adjustable speed drives. Functional safety - IEC 61800-5-2 for safety-related drive systems (STO, SS1). The reference design includes guidance for meeting CE and UL requirements. Key aspects: Electrical safety - creepage/clearance distances, isolation, protection against electric shock. Thermal safety - over-temperature protection, fire enclosures. Mechanical safety - enclosure integrity, moving parts protection. EMC - emissions and immunity compliance. Contact us for certification support and test reports.",
          "decisionGuide": "Identify target markets early to determine required certifications. We provide guidance for CE and UL compliance.",
          "keywords": ["safety certification", "CE marking", "UL listing"]
        }
      ]
    },
    {
      "id": "ev-powertrain",
      "title": "Electric Vehicle Powertrain Solution",
      "slug": "ev-powertrain-solution",
      "name": "Electric Vehicle Powertrain Solution",
      "description": "A high-performance powertrain solution for electric vehicles including traction inverters, DC-DC converters, and onboard chargers. This solution leverages Jingwei Qili automotive-grade IGBT and SiC power modules for maximum efficiency and reliability.",
      "longDescription": "The Electric Vehicle Powertrain Solution provides a complete, automotive-qualified design for EV traction systems and auxiliary power electronics. The solution includes a high-power traction inverter for the main drive motor, a bidirectional DC-DC converter for the 12V auxiliary system, and an onboard battery charger (OBC). Built on Jingwei Qili's AEC-Q101 qualified IGBT and SiC modules, this solution delivers the efficiency, power density, and reliability required for electric vehicles. Advanced features include field-oriented motor control, regenerative braking, thermal management, and comprehensive safety systems. The design meets automotive EMC and functional safety requirements (ISO 26262). Complete documentation supports production development and homologation.",
      "benefits": [
        "Automotive-qualified components ensure reliability in EV applications",
        "High efficiency up to 98% with SiC devices extends vehicle range",
        "Integrated solution reduces development time and system complexity",
        "Scalable design supports passenger cars to commercial vehicles",
        "Functional safety architecture supports ASIL-D requirements",
        "Complete documentation accelerates homologation process"
      ],
      "features": [
        "High-voltage traction inverter (400V/800V systems)",
        "Bidirectional DC-DC converter for 12V auxiliary",
        "Onboard battery charger (OBC) with PFC",
        "Field-oriented motor control with MTPA",
        "Automotive-qualified IGBT and SiC modules",
        "ISO 26262 functional safety architecture",
        "Automotive EMC compliant design"
      ],
      "applications": [
        "Passenger electric vehicles",
        "Commercial EVs and buses",
        "Electric trucks",
        "Electric two-wheelers",
        "Electric construction equipment"
      ],
      "specifications": {
        "Traction Inverter Power": "50kW to 300kW",
        "DC Bus Voltage": "400V or 800V nominal",
        "Peak Current": "Up to 600A for 60 seconds",
        "Switching Frequency": "10kHz (IGBT) or 20kHz (SiC)",
        "Efficiency": "Up to 98% (SiC) or 96% (IGBT)",
        "DC-DC Power": "2kW to 5kW",
        "OBC Power": "6.6kW or 11kW",
        "Safety": "ASIL-D capable"
      },
      "technicalSpecs": {
        "Traction IGBT": "JQMB300N120A (400V) or JQMB200N170A (800V)",
        "Traction SiC": "JQMS120N120 (1200V SiC MOSFET)",
        "Gate Driver": "Automotive-qualified isolated drivers",
        "Controller": "ASIL-D capable automotive MCU",
        "DC-DC Switching": "100kHz with SiC devices",
        "OBC Topology": "Totem pole PFC + LLC resonant",
        "Cooling": "Liquid cooling standard",
        "Certifications": "AEC-Q101, ISO 26262, ECE R10"
      },
      "coreAdvantages": [
        {
          "title": "Automotive Qualified",
          "description": "All components meet AEC-Q101 and automotive reliability standards for EV applications."
        },
        {
          "title": "High Efficiency",
          "description": "SiC devices enable up to 98% efficiency, extending vehicle range and reducing cooling requirements."
        },
        {
          "title": "Functional Safety",
          "description": "Architecture supports ASIL-D safety requirements with redundant monitoring and fault handling."
        },
        {
          "title": "Integrated Solution",
          "description": "Complete powertrain including traction, DC-DC, and charger reduces system complexity."
        },
        {
          "title": "Scalable Platform",
          "description": "Modular design scales from compact cars to heavy commercial vehicles."
        }
      ],
      "bomList": [
        {
          "designator": "Q1-Q12",
          "partNumber": "JQMB300N120A",
          "description": "Traction inverter IGBT modules",
          "quantity": 6,
          "link": "/jingwei-qili/products/igbt-modules/JQMB300N120A.html"
        },
        {
          "designator": "Q13-Q16",
          "partNumber": "JQMS120N120",
          "description": "SiC MOSFETs for DC-DC and OBC",
          "quantity": 4,
          "link": "#"
        },
        {
          "designator": "U1",
          "partNumber": "ASIL-D MCU",
          "description": "Automotive safety microcontroller",
          "quantity": 1,
          "link": "#"
        }
      ],
      "customerCases": [
        {
          "customerName": "Electric Bus Manufacturer",
          "industry": "Commercial Vehicles",
          "application": "120kW Traction Inverter",
          "challenge": "The customer needed a high-reliability traction inverter for their electric bus platform. The inverter needed to handle 120kW continuous with 200kW peak, operate in harsh environments, and meet automotive safety standards.",
          "solution": "We provided the EV powertrain solution with Jingwei Qili automotive-grade IGBT modules. The design included liquid cooling, ASIL-D safety architecture, and comprehensive protection. Our FAE team supported their functional safety analysis.",
          "result": "The traction inverter achieved 96.5% efficiency and passed all automotive qualification tests. The buses have accumulated over 1 million kilometers in revenue service without powertrain failures. The customer is expanding their EV product line using this platform."
        },
        {
          "customerName": "Electric Vehicle Startup",
          "industry": "Automotive",
          "application": "Compact EV Powertrain",
          "challenge": "The startup needed a complete powertrain solution for their compact electric vehicle. They had aggressive cost targets and a tight development timeline for their vehicle launch.",
          "solution": "We customized the EV powertrain solution with SiC devices for maximum efficiency. The integrated solution included traction inverter, DC-DC converter, and onboard charger. Our FAE team provided extensive support during their development.",
          "result": "The powertrain achieved 97.8% efficiency, contributing to a 320km range for the compact EV. The vehicle passed all homologation requirements and launched on schedule. The cost target was met with 15% margin using Jingwei Qili components."
        }
      ],
      "faeInsights": {
        "author": {
          "name": "David Liu",
          "title": "Principal FAE - Automotive Systems",
          "experience": "18 years",
          "expertise": ["EV Powertrain", "Automotive Electronics", "Functional Safety"]
        },
        "content": "EV powertrain design is one of the most challenging applications in power electronics. The combination of high power, safety requirements, and harsh automotive environment demands careful attention to every detail. In my experience with numerous EV projects, thermal management is often the critical factor - liquid cooling is essential for traction inverters above 50kW. For the power stage, I recommend using automotive-qualified modules with proper derating. A 1200V module on a 400V system might seem like overkill, but the safety margin is necessary for voltage transients during switching. Functional safety is non-negotiable in automotive - implement comprehensive fault detection and safe state management. The gate drive is critical - use automotive-qualified isolated drivers with active Miller clamping. For high-performance EVs, SiC devices are becoming the standard due to their efficiency advantages. One customer switched from IGBT to SiC and gained 8km of range - a significant competitive advantage. I always recommend starting with the evaluation platform to validate your thermal and electrical design before committing to production hardware.",
        "logic": "The EV powertrain development follows automotive processes with additional focus on safety and reliability. First, define vehicle requirements including power, range, and charging needs. Select appropriate power devices based on voltage and current with automotive safety margins. Design liquid cooling system with adequate capacity for worst-case conditions. Implement functional safety architecture with ASIL rating appropriate for the application. Develop motor control algorithms with field-oriented control for maximum torque capability. Finally, validate through extensive testing including environmental, EMC, and safety validation.",
        "decisionFramework": {
          "steps": [
            "Define vehicle requirements - power, voltage, range, charging",
            "Select power devices with automotive qualification and voltage margins",
            "Design liquid cooling system for maximum continuous power",
            "Implement functional safety architecture per ISO 26262",
            "Develop field-oriented motor control with MTPA",
            "Integrate DC-DC and OBC subsystems",
            "Validate through automotive qualification testing",
            "Perform homologation and production release"
          ],
          "decisionTree": "If vehicle is 400V system, use 650V or 1200V devices. If 800V system, must use 1200V or 1700V devices. If efficiency is critical, choose SiC over IGBT. If cost is primary concern, IGBT may be acceptable. Always implement ASIL-D for traction inverter.",
          "keyMetrics": {
            "tractionEfficiency": "96-98% depending on device type",
            "powerDensity": "15-25 kW/L for complete inverter",
            "safetyRating": "ASIL-D for traction systems"
          }
        },
        "keyTakeaways": [
          "Liquid cooling is essential for traction inverters",
          "Use automotive-qualified components with proper derating",
          "Implement comprehensive functional safety architecture",
          "SiC devices provide significant efficiency advantages",
          "Start with evaluation platform before production design"
        ],
        "commonPitfalls": [
          "Insufficient thermal design causes derating in hot weather",
          "Inadequate voltage margins lead to device failures",
          "Poor EMC design fails automotive requirements",
          "Insufficient safety analysis creates liability issues"
        ],
        "bestPractices": [
          "Use evaluation platform to validate thermal design",
          "Implement comprehensive fault detection and diagnostics",
          "Design for manufacturing and serviceability",
          "Plan for EMC compliance from the start"
        ]
      },
      "faqs": [
        {
          "question": "What voltage devices should I use for 400V vs 800V EV systems?",
          "answer": "Device voltage selection for EV systems: For 400V nominal battery systems (250-450V range): 650V devices - minimum rating, limited margin for transients. 1200V devices - recommended, provides good safety margin. For 800V nominal battery systems (500-900V range): 1200V devices - minimum rating for 800V systems. 1700V devices - recommended for robust design with margin. General rule: Device rating should be at least 1.5x maximum DC bus voltage. For 400V systems, 1200V devices are the industry standard. For 800V systems, 1200V is the minimum but 1700V provides better robustness. Higher voltage devices have slightly higher conduction losses but provide essential safety margin.",
          "decisionGuide": "Use 1200V devices for 400V systems. For 800V systems, evaluate trade-off between 1200V (lower cost) and 1700V (higher reliability).",
          "keywords": ["EV voltage selection", "400V 800V EV", "IGBT voltage rating"]
        },
        {
          "question": "How do I meet functional safety requirements (ISO 26262)?",
          "answer": "Meeting ISO 26262 for EV powertrain: ASIL decomposition - traction inverter typically requires ASIL-D, achieved through redundant monitoring. Safe torque off (STO) - hardware circuit to disable gate drives within milliseconds. Diagnostics - comprehensive fault detection for all safety-critical functions. Redundancy - dual-channel monitoring for critical measurements. Software - safety-certified software development process. Validation - extensive fault injection testing. Architecture recommendations: Independent microcontroller for safety monitoring. Hardware STO independent from main controller. Redundant current and voltage sensing. Safe state management (torque off, contactor open). Contact us for functional safety consulting and architecture review.",
          "decisionGuide": "Engage functional safety experts early in design. We can provide safety architecture guidance and documentation support.",
          "keywords": ["ISO 26262", "functional safety", "ASIL-D"]
        },
        {
          "question": "What efficiency can I expect from SiC vs IGBT in EV applications?",
          "answer": "Efficiency comparison in EV traction inverters: IGBT-based inverters: Typically 94-96% efficiency at rated load. Higher switching losses limit frequency to 10-12kHz. Well-established technology with lower cost. SiC-based inverters: Typically 97-98.5% efficiency at rated load. Lower switching losses enable 20-25kHz operation. Reduced cooling requirements due to lower losses. 2-3% efficiency improvement translates to 5-10km additional range. Cost trade-off: SiC devices cost 2-3x more than IGBT. System cost difference is smaller due to reduced cooling. For high-volume EVs, SiC cost premium is often justified by range improvement. Many OEMs are transitioning to SiC for premium vehicles.",
          "decisionGuide": "Choose SiC for premium EVs where range is critical. IGBT remains viable for cost-sensitive applications. Calculate total cost of ownership including cooling.",
          "keywords": ["SiC efficiency", "EV inverter efficiency", "IGBT vs SiC EV"]
        },
        {
          "question": "How do I design the cooling system for a traction inverter?",
          "answer": "Liquid cooling design for traction inverters: Power dissipation - calculate total losses at worst-case operating point (typically highway speed with grade). Example: 100kW inverter with 97% efficiency dissipates 3kW. Coolant flow rate - typically 10-15 L/min for passenger vehicles, higher for commercial vehicles. Temperature targets: Coolant inlet < 65°C, Module base plate < 85°C, Junction temperature < 125°C. Heat exchanger - sized for maximum ambient temperature (typically 40-50°C). Cold plate design - direct cooling of modules with optimized flow paths. Materials - aluminum cold plates with proper corrosion protection. Pump and reservoir - sized for flow rate and system volume. Contact us for cooling system design support and thermal modeling.",
          "decisionGuide": "Size cooling system for worst-case continuous operation. Contact us for thermal modeling and cold plate design recommendations.",
          "keywords": ["liquid cooling", "traction inverter cooling", "EV thermal management"]
        },
        {
          "question": "What EMC challenges are specific to EV powertrains?",
          "answer": "EV powertrain EMC challenges and solutions: High voltage and current - generate significant conducted and radiated emissions. Fast switching edges (especially SiC) create high-frequency noise. Long cable runs between inverter and motor act as antennas. Solutions: Filter design - comprehensive input and output filtering for conducted emissions. Shielding - motor cables require shielding with 360° termination. Layout - minimize loop areas in high-current paths. Grounding - proper grounding strategy to prevent common-mode noise. Testing - plan for CISPR 25 and ECE R10 requirements. Key areas: DC input filtering, AC output filtering, gate drive isolation, control circuit protection. EMC should be considered from the start of design, not added later.",
          "decisionGuide": "Engage EMC experts early in design. We can provide filter design guidance and EMC troubleshooting support.",
          "keywords": ["EV EMC", "automotive EMC", "EMI filtering"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'solutions.json'), JSON.stringify(solutionsData, null, 2));
console.log('✓ solutions.json created');

// 4. Create support.json
const supportData = {
  "seoTitle": "Jingwei Qili Technical Support - IGBT Application Guides | LiTong",
  "seoDescription": "Access Jingwei Qili technical support resources including IGBT selection guides, application notes, and thermal design guidance. Expert FAE support available.",
  "seoKeywords": [
    "Jingwei Qili support",
    "IGBT application guide",
    "power semiconductor documentation",
    "IGBT thermal design",
    "gate drive design"
  ],
  "faqs": [
    {
      "question": "Where can I find Jingwei Qili technical documentation?",
      "answer": "Jingwei Qili provides comprehensive technical documentation including datasheets, application notes, and reliability reports. As an authorized distributor, LiTong provides additional resources including selection guides, reference designs, and FAE support. Our technical portal includes FAQs, thermal design guides, and gate drive application notes. For specific questions, our FAE team can provide personalized guidance on device selection, thermal management, and application optimization.",
      "decisionGuide": "Contact LiTong for complete technical documentation and personalized FAE support for your application.",
      "keywords": ["Jingwei Qili documentation", "IGBT datasheets", "technical support"]
    },
    {
      "question": "How do I select the right IGBT module for my application?",
      "answer": "IGBT module selection involves several key factors: Voltage rating should be 1.5-2x your maximum DC bus voltage. Current rating must handle RMS current plus overload conditions with thermal derating. Switching frequency affects losses - higher frequencies favor SiC devices. Thermal requirements determine heat sink size and cooling method. Package selection depends on mounting and space constraints. Gate drive requirements must match your driver circuit capabilities. Our selection guides provide detailed procedures for calculating these parameters.",
      "decisionGuide": "Use our IGBT selection guide or contact FAE for assistance with device selection and thermal calculations.",
      "keywords": ["IGBT selection", "power module selection", "IGBT voltage current"]
    },
    {
      "question": "What thermal design resources are available?",
      "answer": "We provide comprehensive thermal design support including: Thermal models for simulation, Heat sink selection guidelines, Thermal interface material recommendations, Mounting procedures and torque specifications, Application notes on thermal management. Our FAE team can review your thermal design and provide optimization recommendations. We also offer thermal testing services to validate your design under actual operating conditions.",
      "decisionGuide": "Contact our FAE team for thermal design review and heat sink recommendations specific to your application.",
      "keywords": ["thermal design", "heat sink selection", "IGBT cooling"]
    },
    {
      "question": "How can I get samples for evaluation?",
      "answer": "LiTong provides evaluation samples for qualified projects. Sample request process: Submit your application requirements and project details. Our FAE team will review and recommend appropriate devices. Samples are shipped with datasheets and application notes. Evaluation kits are available for some products, including gate drivers and reference circuits. Contact our sales team to initiate a sample request.",
      "decisionGuide": "Contact our sales team with your project details to request samples and evaluation kits.",
      "keywords": ["IGBT samples", "evaluation kit", "power module samples"]
    },
    {
      "question": "What gate drive design support is available?",
      "answer": "We provide comprehensive gate drive design support including: Gate driver IC recommendations, Gate resistor selection guidelines, Protection circuit design (desaturation, Miller clamp), Layout recommendations to minimize parasitics, Application notes on gate drive optimization. Our FAE team can review your gate drive design and help troubleshoot switching issues.",
      "decisionGuide": "Contact our FAE team for gate drive design review and optimization recommendations.",
      "keywords": ["gate drive design", "IGBT driver", "gate resistor"]
    },
    {
      "question": "How do I implement protection circuits for IGBT modules?",
      "answer": "Essential IGBT protection includes: Overcurrent protection using desaturation detection, Short-circuit protection with fast shutdown, Over-temperature protection using NTC sensors, Overvoltage protection with snubbers or active clamping, Undervoltage lockout for gate drive. Our application notes provide detailed protection circuit designs and component selection guidelines.",
      "decisionGuide": "Review our protection application notes or contact FAE for protection circuit design support.",
      "keywords": ["IGBT protection", "desaturation detection", "overcurrent protection"]
    },
    {
      "question": "What is the difference between IGBT and SiC devices?",
      "answer": "IGBT and SiC MOSFETs have different characteristics: IGBTs have lower cost, mature technology, and good performance up to 20kHz. SiC devices offer lower switching losses, higher frequency capability (>50kHz), better thermal conductivity, and higher efficiency. SiC is ideal for high-frequency, high-efficiency applications while IGBT remains cost-effective for many industrial applications.",
      "decisionGuide": "Choose IGBT for cost-sensitive applications. Choose SiC for high-frequency or high-efficiency requirements. Contact us for comparison analysis.",
      "keywords": ["IGBT vs SiC", "silicon carbide", "wide bandgap"]
    },
    {
      "question": "How can I get technical training on Jingwei Qili products?",
      "answer": "LiTong offers technical training on Jingwei Qili power semiconductors including: Product overview and selection guidelines, Application-specific training (motor drives, EV, solar), Hands-on workshops with evaluation kits, Custom training for your engineering team. Contact us to schedule training sessions for your team.",
      "decisionGuide": "Contact our FAE team to schedule technical training tailored to your application needs.",
      "keywords": ["technical training", "IGBT workshop", "power electronics training"]
    }
  ],
  "articles": [
    {
      "id": "igbt-module-selection-guide",
      "title": "IGBT Module Selection Guide - Choosing the Right Device for Your Application",
      "slug": "igbt-module-selection-guide",
      "category": "Product Selection",
      "tags": ["IGBT", "Selection Guide", "Power Module", "Thermal Design"],
      "author": {
        "name": "Michael Zhang",
        "title": "Senior FAE - Power Electronics",
        "experience": "15 years",
        "expertise": ["IGBT Applications", "Power Inverters", "Thermal Management"]
      },
      "publishDate": "2026-04-08",
      "lastUpdated": "2026-04-08",
      "summary": "This comprehensive guide helps engineers select the optimal IGBT module for their power conversion applications, covering voltage rating, current capacity, thermal considerations, and switching characteristics.",
      "content": [
        "Selecting the right IGBT module is critical for reliable and efficient power converter design. This guide covers the key selection criteria and provides practical guidance for various applications.",
        "",
        "## Understanding IGBT Module Parameters",
        "",
        "Key parameters to consider: Voltage rating (Vces) - must withstand DC bus voltage plus transients. Current rating (Ic) - continuous and peak current capability. Vce(sat) - conduction voltage drop affecting efficiency. Switching losses (Eon, Eoff) - affect high-frequency operation. Thermal resistance (Rth) - determines cooling requirements.",
        "",
        "## Voltage Rating Selection",
        "",
        "Select Vces at least 1.5-2x maximum DC bus voltage. For 380V AC systems (540V DC), use 1200V IGBTs. For 480V AC systems (680V DC), use 1200V IGBTs. For 690V AC systems (980V DC), use 1700V IGBTs.",
        "",
        "## Current Rating Calculation",
        "",
        "Calculate RMS current from output power and voltage. Add overload margin (typically 150%). Apply thermal derating based on heat sink capability. Verify junction temperature stays below Tj(max).",
        "",
        "## Switching Frequency Considerations",
        "",
        "Higher frequencies increase switching losses. IGBTs are typically used up to 20kHz. For frequencies above 20kHz, consider SiC devices. Balance switching losses vs. filter size and motor performance.",
        "",
        "## Thermal Design",
        "",
        "Calculate total losses (conduction + switching). Determine required heat sink thermal resistance. Select appropriate cooling method (natural convection, forced air, or liquid). Verify junction temperature under worst-case conditions."
      ],
      "relatedArticles": ["thermal-design-guide", "gate-drive-design", "protection-circuits"],
      "faeInsights": {
        "author": {
          "name": "Michael Zhang",
          "title": "Senior FAE - Power Electronics"
        },
        "content": "After helping hundreds of customers select IGBT modules, I've learned that the most common mistake is underestimating thermal requirements. Engineers often calculate losses at rated conditions but forget to consider overload, high ambient temperature, and aging. I always recommend designing for at least 25% thermal margin. Another key insight: don't just look at the current rating - check the actual junction temperature under your operating conditions. A 100A module might only handle 60A continuous in a hot environment with limited cooling. For voltage rating, the 2x rule is a minimum - I've seen systems fail because they didn't account for voltage spikes during switching. Use proper snubbers or select higher voltage devices if you have concerns. Finally, consider the total cost of ownership - a slightly more expensive module with lower losses might pay for itself through reduced cooling costs.",
        "logic": "The selection process starts with calculating electrical requirements, then verifying thermal feasibility. Many designs fail not because of electrical issues, but because of inadequate thermal design.",
        "insightLogic": "The IGBT selection framework prioritizes thermal validation over electrical ratings. Begin by calculating voltage and current requirements with appropriate safety margins. Then perform detailed thermal analysis including worst-case conditions. Only proceed with a device if both electrical and thermal requirements are satisfied. This approach prevents costly redesigns due to thermal issues discovered late in development.",
        "keyTakeaways": [
          "Design for 25% thermal margin above calculated requirements",
          "Verify junction temperature under worst-case conditions",
          "Use 2x voltage margin as minimum, consider higher for noisy environments",
          "Consider total cost including cooling, not just module price",
          "Test thermal performance early with evaluation hardware"
        ],
        "commonPitfalls": [
          "Underestimating thermal requirements leads to field failures",
          "Ignoring voltage transients causes device breakdown",
          "Selecting based on current rating without thermal verification",
          "Not considering overload conditions in thermal design"
        ],
        "bestPractices": [
          "Use thermal modeling software for initial design",
          "Validate with thermocouple measurements on prototype",
          "Include temperature monitoring in final design",
          "Plan for end-of-life thermal performance degradation"
        ]
      },
      "customerCases": [
        {
          "customerName": "Industrial Drive Manufacturer",
          "industry": "Industrial Automation",
          "application": "22kW Motor Drive",
          "challenge": "The customer was experiencing IGBT failures in their motor drives after several months of operation. Initial analysis suggested the devices were properly rated for the application.",
          "solution": "We performed detailed thermal analysis and discovered the heat sink was undersized for the actual operating conditions. The drives were operating in 50°C ambient with limited airflow, causing junction temperatures to exceed 140°C.",
          "feedback": "After upgrading to a larger heat sink with forced air cooling, junction temperatures dropped to 115°C. The customer has now operated over 1000 drives for 2+ years without a single IGBT failure. They now include thermal validation as a standard part of their design process."
        }
      ],
      "faqs": [
        {
          "question": "How do I calculate the required voltage rating for my application?",
          "answer": "Voltage rating calculation: Determine your maximum DC bus voltage including regeneration conditions. For AC mains: Vdc(max) = Vac(line) × √2 × 1.1 (regeneration margin). Select Vces ≥ 1.5 × Vdc(max). Examples: 380V AC → 540V DC → 1200V IGBT. 480V AC → 680V DC → 1200V IGBT. 690V AC → 980V DC → 1700V IGBT. Consider higher voltage devices if you expect significant voltage transients.",
          "decisionGuide": "Calculate maximum DC voltage with margin, then select device with at least 1.5x rating. Contact FAE for voltage rating recommendations.",
          "keywords": ["voltage rating", "Vces selection", "DC bus voltage"]
        },
        {
          "question": "What factors affect IGBT current rating in practice?",
          "answer": "Practical current rating factors: RMS current at operating point. Overload requirements (typically 150% for 60s). Switching frequency - higher frequency increases losses. Ambient temperature - derate above 40°C. Heat sink thermal resistance - limits power dissipation. Altitude - derate for >1000m elevation. Duty cycle - continuous vs. intermittent operation. Always perform thermal calculation: Tj = Ta + Ploss × (Rth(j-c) + Rth(c-s) + Rth(s-a)).",
          "decisionGuide": "Calculate actual junction temperature under your operating conditions. Don't rely solely on datasheet current rating.",
          "keywords": ["current rating", "thermal derating", "RMS current"]
        },
        {
          "question": "When should I choose SiC instead of IGBT?",
          "answer": "Choose SiC when: Switching frequency >20kHz (IGBT switching losses become excessive). Efficiency is critical (EV range, energy costs). Cooling is limited (SiC lower losses reduce heat). System size/weight is constrained (smaller filters, heat sinks). Cost is secondary to performance. Choose IGBT when: Cost is primary concern. Frequency <15kHz. Well-established supply chain required. Application is not thermally constrained.",
          "decisionGuide": "Evaluate efficiency requirements, switching frequency, and cost constraints. Contact FAE for SiC vs IGBT comparison for your application.",
          "keywords": ["SiC vs IGBT", "wide bandgap", "switching frequency"]
        },
        {
          "question": "How do I compare conduction losses between different IGBTs?",
          "answer": "Conduction loss comparison: Use Vce(sat) at your operating current, not just datasheet typical value. Vce(sat) increases with temperature - check values at Tj=125°C or 150°C. Calculate Pcond = Vce(sat) × Ic × duty cycle. Consider temperature coefficient - positive TC helps current sharing in parallel devices. Compare at same current density for fair comparison. Remember trade-off: lower Vce(sat) often means higher switching losses.",
          "decisionGuide": "Compare Vce(sat) at your actual operating conditions. Consider total losses (conduction + switching) for complete comparison.",
          "keywords": ["conduction loss", "Vce(sat)", "switching loss trade-off"]
        },
        {
          "question": "What is the importance of thermal resistance specifications?",
          "answer": "Thermal resistance determines temperature rise: Rth(j-c) - junction to case, fixed by device. Rth(c-s) - case to heat sink, depends on interface material. Rth(s-a) - heat sink to ambient, determined by cooling. Total Rth = Rth(j-c) + Rth(c-s) + Rth(s-a). Temperature rise = Ploss × Rth. Lower Rth means lower temperature for same power. Rth(s-a) is the only parameter you can significantly change through heat sink design.",
          "decisionGuide": "Focus on minimizing Rth(s-a) through proper heat sink selection and thermal interface materials.",
          "keywords": ["thermal resistance", "Rth", "junction temperature"]
        }
      ]
    },
    {
      "id": "thermal-design-guide",
      "title": "Thermal Design Guide for IGBT Power Modules",
      "slug": "thermal-design-guide",
      "category": "Design Guidelines",
      "tags": ["Thermal Design", "Heat Sink", "Cooling", "IGBT", "Power Module"],
      "author": {
        "name": "David Liu",
        "title": "Principal FAE - Thermal Systems",
        "experience": "18 years",
        "expertise": ["Thermal Management", "Power Electronics Cooling", "Heat Sink Design"]
      },
      "publishDate": "2026-04-08",
      "lastUpdated": "2026-04-08",
      "summary": "Comprehensive guide to thermal design for IGBT power modules, covering heat sink selection, thermal interface materials, mounting procedures, and cooling system design.",
      "content": [
        "Proper thermal design is essential for reliable IGBT operation. This guide covers thermal analysis, heat sink selection, and practical implementation guidelines.",
        "",
        "## Thermal Analysis Fundamentals",
        "",
        "The thermal path from junction to ambient: Junction → Case → Heat Sink → Ambient. Each interface has thermal resistance (Rth). Total temperature rise = Power × Total Rth. Target junction temperature <125°C for long life.",
        "",
        "## Heat Sink Selection",
        "",
        "Calculate required Rth(s-a) = (Tj(max) - Ta(max)) / Ploss - Rth(j-c) - Rth(c-s). Select heat sink with Rth less than calculated value. Consider cooling method: Natural convection - simple but large. Forced air - smaller size, requires fan. Liquid cooling - highest performance, complex.",
        "",
        "## Thermal Interface Materials",
        "",
        "Options: Thermal grease - best performance, messy application. Thermal pads - convenient, consistent thickness. Phase change materials - combine benefits of both. Target thermal resistance <0.1°C/W for interface.",
        "",
        "## Mounting Procedures",
        "",
        "Proper mounting ensures good thermal contact: Clean surfaces thoroughly. Apply TIM evenly. Mount with proper torque in stages. Re-torque after thermal cycling. Avoid over-tightening which can damage module."
      ],
      "relatedArticles": ["igbt-module-selection-guide", "gate-drive-design"],
      "faeInsights": {
        "author": {
          "name": "David Liu",
          "title": "Principal FAE - Thermal Systems"
        },
        "content": "Thermal design is often the make-or-break factor in power electronics reliability. I've seen too many designs fail in the field because of inadequate thermal management. The key insight is that thermal design must be validated under actual operating conditions, not just calculated. Thermal models are good for initial design, but you need physical testing to catch issues like uneven pressure distribution, air flow blockages, or TIM degradation. One common mistake is designing for nominal conditions without considering overload, high ambient temperature, or dust accumulation over time. I always recommend measuring case temperature with an infrared camera during testing - hot spots indicate poor thermal contact. For critical applications, implement temperature monitoring and derating to ensure the system never exceeds safe operating temperatures.",
        "logic": "Thermal design requires both calculation and validation. Start with thermal modeling to size the heat sink, then validate with measurements under worst-case conditions.",
        "insightLogic": "The thermal design framework combines analytical modeling with empirical validation. Begin with accurate loss calculations and thermal resistance analysis to size the cooling system. Then validate through comprehensive testing including infrared imaging to identify hot spots. Finally, implement monitoring and protection to ensure safe operation under all conditions including aging and environmental degradation.",
        "keyTakeaways": [
          "Validate thermal design with physical measurements, not just calculations",
          "Use infrared imaging to identify thermal hot spots",
          "Design for worst-case conditions including overload and high ambient",
          "Implement temperature monitoring for protection",
          "Consider environmental degradation over product lifetime"
        ],
        "commonPitfalls": [
          "Designing for nominal conditions only",
          "Ignoring thermal interface resistance",
          "Uneven mounting pressure causing hot spots",
          "Insufficient margin for aging and dust accumulation"
        ],
        "bestPractices": [
          "Measure case temperature with IR camera during validation",
          "Use proper torque tools for mounting",
          "Include temperature sensors for monitoring",
          "Plan for maintenance and cleaning in field"
        ]
      },
      "customerCases": [
        {
          "customerName": "Solar Inverter Manufacturer",
          "industry": "Renewable Energy",
          "application": "50kW String Inverter",
          "challenge": "The customer was experiencing IGBT failures in their solar inverters during summer operation. The inverters were designed for 45°C ambient but were seeing 55°C+ in some installations.",
          "solution": "We redesigned the thermal system with a larger heat sink and improved airflow. Added temperature monitoring with automatic power derating above 50°C ambient.",
          "feedback": "The redesigned inverters now operate reliably even at 60°C ambient. The automatic derating feature protects the IGBTs while maintaining some output capacity. The customer has expanded their product line to hot climate markets."
        }
      ],
      "faqs": [
        {
          "question": "How do I calculate the required heat sink size?",
          "answer": "Heat sink sizing procedure: 1) Calculate total IGBT losses (conduction + switching). 2) Determine maximum allowable junction temperature (typically 125°C). 3) Calculate required total thermal resistance: Rth(total) = (Tj(max) - Ta(max)) / Ploss. 4) Subtract device and interface resistances: Rth(heatsink) = Rth(total) - Rth(j-c) - Rth(c-s). 5) Select heat sink with Rth less than calculated value. Example: For 1000W losses, Tj(max)=125°C, Ta=40°C: Rth(total) = (125-40)/1000 = 0.085°C/W. With Rth(j-c)=0.1 and Rth(c-s)=0.1, you need Rth(heatsink) < -0.115°C/W - impossible! This means you need liquid cooling or lower losses.",
          "decisionGuide": "If calculated Rth(heatsink) is negative or impractical, consider liquid cooling or reduce power/losses. Contact FAE for heat sink recommendations.",
          "keywords": ["heat sink sizing", "thermal resistance calculation", "cooling design"]
        },
        {
          "question": "What is the best thermal interface material for IGBT modules?",
          "answer": "TIM selection depends on application: Thermal grease - best thermal performance (0.05-0.1°C/W), but messy application and pump-out over time. Thermal pads - convenient, consistent thickness, good for production (0.1-0.3°C/W). Phase change materials - soften at operating temperature to fill gaps, good long-term stability. For high-reliability applications, phase change materials or high-performance pads are recommended. For best performance, thermal grease is preferred but requires careful application. Always follow module manufacturer's TIM recommendations.",
          "decisionGuide": "Use phase change materials for high-reliability applications. Use thermal grease for maximum performance in controlled environments. Contact FAE for TIM recommendations.",
          "keywords": ["thermal interface material", "TIM", "thermal grease", "thermal pad"]
        },
        {
          "question": "How important is mounting torque for thermal performance?",
          "answer": "Mounting torque is critical for thermal performance: Too little torque - poor thermal contact, high interface resistance. Too much torque - can damage module or PCB. Recommended torque: Typically 2.5-3.5 N·m for M4 screws. Always follow manufacturer's specification. Torque in stages: 50%, 80%, 100% of final torque. Use diagonal pattern for even pressure distribution. Re-torque after 24 hours of thermal cycling. Use calibrated torque tools for consistent results. Check for uniform TIM squeeze-out as indicator of even pressure.",
          "decisionGuide": "Follow manufacturer's torque specifications exactly. Use proper tools and procedures. Contact FAE for mounting guidance.",
          "keywords": ["mounting torque", "thermal contact", "IGBT mounting"]
        },
        {
          "question": "When should I use liquid cooling instead of air cooling?",
          "answer": "Liquid cooling is recommended when: Power density exceeds 5-10 W/cm². Heat sink with air cooling would be too large or heavy. Ambient temperature is high (>50°C). System noise must be minimized (no fans). Precise temperature control is required. Heat must be moved to remote location. Liquid cooling can achieve Rth(s-a) of 0.01-0.05°C/W vs 0.1-0.5°C/W for air cooling. However, it adds complexity with pumps, plumbing, and coolant maintenance.",
          "decisionGuide": "Use liquid cooling for high power density or challenging thermal environments. Contact FAE for liquid cooling system design support.",
          "keywords": ["liquid cooling", "water cooling", "high power density"]
        },
        {
          "question": "How do I measure actual junction temperature?",
          "answer": "Junction temperature measurement methods: Indirect measurement using Vce(T) characteristic: Measure Vce at low current during operation. Compare to calibration curve of Vce vs Tj. Calculate Tj from measured Vce. Using NTC sensor (if available in module): Measure NTC resistance. Calculate temperature from R-T curve. Add temperature difference between NTC and junction. Direct measurement: Use fiber optic sensors (expensive, research applications). Infrared camera can measure case temperature, then calculate Tj. Most practical method is Vce(T) measurement for validation.",
          "decisionGuide": "Use Vce(T) method for accurate junction temperature measurement during validation. Use NTC for operational monitoring.",
          "keywords": ["junction temperature measurement", "Vce(T) method", "NTC sensor"]
        }
      ]
    },
    {
      "id": "gate-drive-design",
      "title": "Gate Drive Design for IGBT Power Modules",
      "slug": "gate-drive-design",
      "category": "Design Guidelines",
      "tags": ["Gate Drive", "IGBT Driver", "Protection", "Switching"],
      "author": {
        "name": "Michael Zhang",
        "title": "Senior FAE - Power Electronics",
        "experience": "15 years",
        "expertise": ["Gate Drive Design", "IGBT Protection", "Power Inverters"]
      },
      "publishDate": "2026-04-08",
      "lastUpdated": "2026-04-08",
      "summary": "Comprehensive guide to gate drive circuit design for IGBT power modules, covering driver selection, gate resistor sizing, protection features, and layout considerations.",
      "content": [
        "The gate drive circuit is critical for reliable IGBT operation. This guide covers design considerations for optimal switching performance and protection.",
        "",
        "## Gate Drive Requirements",
        "",
        "Key requirements: Voltage levels - typically +15V on, -5V to 0V off. Drive capability - sufficient peak current for fast switching. Isolation - galvanic isolation between control and power. Protection - desaturation detection, Miller clamping.",
        "",
        "## Gate Resistor Selection",
        "",
        "Gate resistor affects switching speed and EMI: Lower resistance - faster switching, lower losses, higher EMI. Higher resistance - slower switching, higher losses, lower EMI. Typical values: 5-20Ω for medium power IGBTs. Calculate based on desired switching time and gate charge.",
        "",
        "## Protection Features",
        "",
        "Essential protections: Desaturation detection - detects overcurrent during conduction. Soft shutdown - gradual turn-off during fault to prevent voltage spikes. Miller clamp - prevents false turn-on during switching. Under-voltage lockout - ensures sufficient gate voltage.",
        "",
        "## Layout Considerations",
        "",
        "Minimize gate loop inductance: Keep gate traces short and wide. Use twisted pair or coaxial cables for gate signals. Separate gate return from power ground. Place gate driver close to IGBT."
      ],
      "relatedArticles": ["igbt-module-selection-guide", "thermal-design-guide"],
      "faeInsights": {
        "author": {
          "name": "Michael Zhang",
          "title": "Senior FAE - Power Electronics"
        },
        "content": "The gate drive is often overlooked but is absolutely critical for reliable IGBT operation. In my experience, many field failures can be traced back to inadequate gate drive design. The most important feature is desaturation protection - this can save your IGBTs during short circuits. I always recommend using intelligent gate drivers with built-in protection rather than discrete designs. The cost difference is minimal compared to the protection they provide. For gate resistor selection, start with the manufacturer's recommendation and adjust based on your switching waveforms. Look for clean switching without excessive overshoot or ringing. If you see oscillations, increase the gate resistor slightly. One common mistake is using the same gate resistor for turn-on and turn-off - consider using separate resistors with diode isolation to optimize each transition independently. Finally, pay attention to layout - I've seen designs fail because of long gate traces picking up noise from the power circuit.",
        "logic": "Gate drive design balances switching performance, protection, and EMI. Start with recommended values and optimize based on measured waveforms.",
        "insightLogic": "The gate drive design framework prioritizes protection and reliability over pure performance. Begin with a robust driver IC that includes comprehensive protection features. Size gate resistors to achieve clean switching waveforms without excessive overshoot. Implement all recommended protection features including desaturation detection and Miller clamping. Finally, optimize layout to minimize noise coupling and ensure reliable operation under all conditions.",
        "keyTakeaways": [
          "Use intelligent gate drivers with built-in protection",
          "Implement desaturation detection for short-circuit protection",
          "Optimize gate resistors based on measured waveforms",
          "Keep gate traces short and away from power circuits",
          "Use separate turn-on/turn-off resistors for optimization"
        ],
        "commonPitfalls": [
          "Inadequate protection leading to catastrophic failures",
          "Excessive gate resistance causing high switching losses",
          "Poor layout introducing noise and oscillations",
          "Insufficient drive current for fast switching"
        ],
        "bestPractices": [
          "Use evaluation kit to validate gate drive design",
          "Measure switching waveforms with proper probes",
          "Implement soft shutdown for fault conditions",
          "Include Miller clamp for high dv/dt applications"
        ]
      },
      "customerCases": [
        {
          "customerName": "Motor Drive Manufacturer",
          "industry": "Industrial Automation",
          "application": "30kW VFD",
          "challenge": "The customer was experiencing IGBT failures during motor startup, particularly when starting large inertia loads. The failures appeared to be related to overcurrent conditions.",
          "solution": "We upgraded their gate drive to include desaturation detection and soft shutdown. Optimized gate resistor values based on switching waveform analysis.",
          "feedback": "The desaturation protection has saved numerous IGBTs during difficult starts. The soft shutdown prevents voltage spikes that were causing secondary failures. The drive now operates reliably even with challenging loads."
        }
      ],
      "faqs": [
        {
          "question": "What gate voltage levels should I use for IGBTs?",
          "answer": "Recommended gate voltage levels: Turn-on voltage: +15V ± 0.5V (standard for most IGBTs). Turn-off voltage: -5V to -8V (recommended) or 0V (minimum). Negative turn-off voltage provides: Faster turn-off switching. Better immunity to dv/dt induced turn-on. More robust operation. Some gate drivers provide adjustable negative voltage. Higher positive voltage (>15V) does not significantly improve performance and may reduce reliability. Always stay within manufacturer's specified gate voltage limits.",
          "decisionGuide": "Use +15V/-5V gate drive for best performance. Use +15V/0V if negative supply is not practical. Contact FAE for gate drive recommendations.",
          "keywords": ["gate voltage", "Vge", "gate drive levels"]
        },
        {
          "question": "How do I select the optimal gate resistor value?",
          "answer": "Gate resistor selection process: Start with manufacturer's recommended value (typically 10-15Ω). Measure switching waveforms with oscilloscope. Look for: Clean switching without excessive overshoot. No oscillations or ringing. Switching time appropriate for your frequency. Adjust resistor value: Increase if you see voltage overshoot or oscillations. Decrease if switching losses are too high. Consider separate resistors for turn-on and turn-off with diode isolation. Typical final values: 5-10Ω for high-frequency applications. 10-20Ω for general-purpose drives. 20-50Ω for soft switching or EMI-sensitive applications.",
          "decisionGuide": "Start with 10Ω and adjust based on waveform measurements. Contact FAE for gate resistor optimization support.",
          "keywords": ["gate resistor", "Rg", "switching optimization"]
        },
        {
          "question": "What is desaturation protection and why is it important?",
          "answer": "Desaturation protection detects overcurrent conditions: During normal conduction, Vce is low (1-3V). During short circuit, Vce rises toward DC bus voltage. Desaturation circuit monitors Vce during on-state. If Vce exceeds threshold (typically 7-9V), fault is detected. Gate driver then performs soft shutdown to limit current. Why it's important: IGBTs can be destroyed in microseconds during short circuit. Desat detection responds in 1-10 microseconds. Prevents catastrophic failures and fire hazards. Essential for all IGBT applications. Modern intelligent gate drivers include this feature.",
          "decisionGuide": "Always use gate drivers with desaturation protection. Never rely solely on external current sensors for short-circuit protection.",
          "keywords": ["desaturation protection", "short circuit protection", "overcurrent"]
        },
        {
          "question": "How does Miller effect impact IGBT switching?",
          "answer": "Miller effect in IGBTs: During turn-off, collector voltage rises rapidly (high dv/dt). This dv/dt couples through Miller capacitance (Cgc) to gate. Can cause gate voltage to rise above threshold. May cause unwanted turn-on or shoot-through. Miller clamp prevents this: Provides low impedance path for Miller current. Keeps gate voltage below threshold during switching. Essential for high dv/dt applications. Implementation: Active Miller clamp in gate driver IC. Or separate transistor clamping gate to emitter. Recommended for all hard-switched applications.",
          "decisionGuide": "Use gate drivers with Miller clamp for all hard-switched applications. Essential for high voltage and high frequency designs.",
          "keywords": ["Miller effect", "Miller clamp", "dv/dt"]
        },
        {
          "question": "What layout considerations are important for gate drive circuits?",
          "answer": "Gate drive layout best practices: Minimize loop inductance - keep gate and emitter traces close together. Use Kelvin connection - separate sense connection for gate drive return. Avoid power ground noise - don't share gate return with power current. Keep traces short - place driver close to IGBT gate terminals. Use appropriate trace width - wide enough for peak gate current. Shielding - consider shielded cables for gate signals in noisy environments. Decoupling - place bypass capacitors close to gate driver IC. Isolation - maintain proper creepage and clearance for isolated drivers.",
          "decisionGuide": "Follow layout best practices to minimize noise and ensure reliable switching. Contact FAE for layout review.",
          "keywords": ["gate drive layout", "Kelvin connection", "minimize inductance"]
        }
      ]
    },
    {
      "id": "protection-circuits",
      "title": "Protection Circuit Design for IGBT Power Systems",
      "slug": "protection-circuits",
      "category": "Design Guidelines",
      "tags": ["Protection", "Fault Handling", "IGBT", "Safety"],
      "author": {
        "name": "David Liu",
        "title": "Principal FAE - Power Systems",
        "experience": "18 years",
        "expertise": ["Power Protection", "Fault Management", "System Safety"]
      },
      "publishDate": "2026-04-08",
      "lastUpdated": "2026-04-08",
      "summary": "Comprehensive guide to protection circuit design for IGBT power systems, covering overcurrent, overvoltage, thermal protection, and fault management strategies.",
      "content": [
        "Comprehensive protection is essential for reliable IGBT power systems. This guide covers protection strategies and implementation guidelines.",
        "",
        "## Overcurrent Protection",
        "",
        "Types of overcurrent: Overload - sustained current above rating. Short circuit - direct fault with very high current. Protection methods: Desaturation detection - fastest response for short circuits. Current sensors - for overload protection and monitoring. Soft shutdown - gradual turn-off to limit voltage spikes.",
        "",
        "## Overvoltage Protection",
        "",
        "Overvoltage sources: Switching transients from stray inductance. Regeneration from motor load. Protection methods: Snubber circuits - RC or RCD networks. Active clamping - transient voltage suppressors. DC bus clamping - brake chopper or active front end.",
        "",
        "## Thermal Protection",
        "",
        "Temperature monitoring: NTC sensors in IGBT modules. External temperature sensors. Protection actions: Derating at high temperature. Shutdown at maximum limit. Fault annunciation.",
        "",
        "## Fault Management",
        "",
        "Fault handling strategy: Fast detection of fault conditions. Safe shutdown sequence. Fault logging and diagnostics. Auto-restart or latch depending on severity."
      ],
      "relatedArticles": ["igbt-module-selection-guide", "gate-drive-design"],
      "faeInsights": {
        "author": {
          "name": "David Liu",
          "title": "Principal FAE - Power Systems"
        },
        "content": "Protection circuits are your insurance policy against catastrophic failures. In my experience, inadequate protection is the leading cause of field failures in power electronics. The key is layered protection - multiple levels that catch different types of faults. Desaturation protection is your first line of defense for short circuits - it can respond in microseconds. But you also need overcurrent protection for overloads, overvoltage protection for transients, and thermal protection for overheating. One common mistake is relying on a single protection method - if it fails or is misconfigured, you have no backup. I always recommend implementing at least two independent protection methods for critical faults. Another important aspect is fault handling - what happens after a fault is detected? A safe shutdown sequence is essential to prevent damage during the fault clearing process. Finally, consider fault logging - understanding what happened during a fault is crucial for improving reliability.",
        "logic": "Protection design requires multiple layers to catch different fault types. Fast detection and safe shutdown are essential for preventing damage.",
        "insightLogic": "The protection design framework implements layered defense with multiple independent protection mechanisms. Start with fast-acting protection for catastrophic faults like short circuits. Add slower-acting protection for overloads and abnormal conditions. Include thermal protection for thermal management. Finally, implement comprehensive fault handling with safe shutdown sequences and diagnostic logging.",
        "keyTakeaways": [
          "Implement multiple layers of protection for redundancy",
          "Use desaturation detection for fast short-circuit protection",
          "Design safe shutdown sequences to prevent damage during faults",
          "Include fault logging for diagnostics and reliability improvement",
          "Test protection systems under simulated fault conditions"
        ],
        "commonPitfalls": [
          "Relying on single protection method without backup",
          "Inadequate fault handling causing secondary damage",
          "Protection settings too sensitive causing nuisance trips",
          "Not testing protection under actual fault conditions"
        ],
        "bestPractices": [
          "Implement two independent protection methods for critical faults",
          "Use soft shutdown for overcurrent faults",
          "Log fault conditions for post-analysis",
          "Test protection system thoroughly before production"
        ]
      },
      "customerCases": [
        {
          "customerName": "Industrial Equipment OEM",
          "industry": "Industrial Automation",
          "application": " crane Drive System",
          "challenge": "The customer was experiencing IGBT failures in their crane drives during emergency stops. The rapid deceleration was causing overvoltage conditions that damaged the IGBTs.",
          "solution": "We implemented comprehensive protection including overvoltage detection, dynamic braking chopper, and soft shutdown sequences. Added regenerative braking capability to handle the energy during stops.",
          "feedback": "The protection system has eliminated IGBT failures during emergency stops. The regenerative braking actually saves energy during normal operation. The comprehensive fault logging helps them diagnose issues quickly."
        }
      ],
      "faqs": [
        {
          "question": "What protection features are essential for IGBT systems?",
          "answer": "Essential protection features: Short-circuit protection - desaturation detection with <10μs response. Overcurrent protection - current sensors for overload conditions. Overvoltage protection - snubbers or active clamping for transients. Undervoltage protection - lockout if DC bus drops too low. Thermal protection - temperature monitoring and shutdown. Ground fault protection - detect ground leakage currents. These protections should be implemented at both hardware (fast) and software (coordination) levels.",
          "decisionGuide": "Implement all essential protections for reliable operation. Contact FAE for protection system design support.",
          "keywords": ["protection features", "IGBT protection", "fault protection"]
        },
        {
          "question": "How do I coordinate multiple protection functions?",
          "answer": "Protection coordination strategy: Fast hardware protection - desaturation, overcurrent hardware trip. These act in microseconds without software. Software protection - overload detection, thermal management, coordination. These act in milliseconds to seconds. Shutdown sequence: 1) Detect fault condition. 2) Disable PWM generation. 3) Perform soft shutdown (if overcurrent). 4) Open contactors (if severe fault). 5) Log fault data. 6) Annunciate fault. Coordination ensures fastest protection acts first while software manages system response.",
          "decisionGuide": "Implement layered protection with hardware for fast faults and software for coordination. Contact FAE for protection coordination design.",
          "keywords": ["protection coordination", "fault handling", "shutdown sequence"]
        },
        {
          "question": "What is soft shutdown and when should I use it?",
          "answer": "Soft shutdown gradually reduces IGBT current during fault: Normal turn-off - fast switching to minimize losses. Soft shutdown - slow turn-off during fault to limit voltage spike. Why use it: During short circuit, fast turn-off can cause dangerous voltage spikes (L×di/dt). Soft shutdown limits di/dt, reducing voltage spike. Protects IGBT from overvoltage during fault clearing. Implementation: Gate driver reduces gate voltage gradually. Or increases gate resistance during fault. Trade-off: Slower shutdown allows higher current during fault period. But voltage spike is significantly reduced. Recommended for all applications with significant stray inductance.",
          "decisionGuide": "Use soft shutdown for all hard-switched applications. Essential for high-power systems with stray inductance.",
          "keywords": ["soft shutdown", "fault shutdown", "overvoltage protection"]
        },
        {
          "question": "How do I protect against overvoltage transients?",
          "answer": "Overvoltage protection methods: Snubber circuits - RC or RCD networks across IGBT. Absorb energy from stray inductance. Simple and reliable but dissipate power continuously. Active clamping - TVS diodes or avalanche diodes. Clamp voltage to safe level. Fast response but limited energy absorption. Brake chopper - dissipates energy in resistor. For regeneration or DC bus overvoltage. Active front end - returns energy to AC line. Most efficient but complex and expensive. Selection depends on: Energy to be absorbed. Frequency of transients. Efficiency requirements. Cost constraints.",
          "decisionGuide": "Use snubbers for most applications. Add brake chopper for significant regeneration. Contact FAE for overvoltage protection design.",
          "keywords": ["overvoltage protection", "snubber", "transient suppression"]
        },
        {
          "question": "What fault monitoring and diagnostics should I implement?",
          "answer": "Recommended fault monitoring: Real-time monitoring - DC bus voltage, output currents, temperatures. Fault detection - overcurrent, overvoltage, undervoltage, overtemperature. Fault logging - timestamp, fault type, operating conditions. Diagnostics - fault history, operating statistics. Implementation: Use microcontroller with ADC for monitoring. Log faults to non-volatile memory. Provide diagnostic interface (serial, CAN, etc.). Remote monitoring capability for industrial applications. Benefits: Faster troubleshooting and repair. Predictive maintenance capability. Reliability improvement through analysis.",
          "decisionGuide": "Implement comprehensive fault monitoring and logging. Contact FAE for diagnostic system design recommendations.",
          "keywords": ["fault monitoring", "diagnostics", "fault logging"]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'support.json'), JSON.stringify(supportData, null, 2));
console.log('✓ support.json created');

// 5. Create news.json
const newsData = {
  "news": []
};

fs.writeFileSync(path.join(brandDir, 'news.json'), JSON.stringify(newsData, null, 2));
console.log('✓ news.json created');

console.log('\n✅ All Jingwei Qili brand data files created successfully!');
console.log('📁 Location: data/jingwei-qili/');
console.log('\nNext steps:');
console.log('1. Run: node scripts/brand-master-checklist.js jingwei-qili');
console.log('2. Fix any validation errors');
console.log('3. Run: npm run generate:brand -- jingwei-qili');
