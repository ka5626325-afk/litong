const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'tdk', 'products.json');

// Read existing file
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add remaining categories
const additionalCategories = [
  {
    id: "aluminum-electrolytic-capacitors",
    name: "Aluminum Electrolytic Capacitors",
    slug: "aluminum-electrolytic-capacitors",
    description: "High-capacitance aluminum electrolytic capacitors for power supply filtering and energy storage.",
    longDescription: "TDK's aluminum electrolytic capacitor portfolio includes radial lead, snap-in, and screw terminal types for diverse mounting configurations. These capacitors feature advanced electrolyte formulations that provide extended operational life and high ripple current capability. The product range covers capacitance values from microfarads to tens of thousands of microfarads, with voltage ratings from 6.3V to 550V DC. TDK's aluminum electrolytic capacitors are designed for demanding applications including switch-mode power supplies, motor drives, inverters, and industrial control systems. Their long-life series offer up to 20,000 hours operation at rated temperature, while high-ripple current series can handle demanding switching applications.",
    series: [
      "B43501 - Long Life Series",
      "B43504 - High Ripple Current",
      "B43700 - Snap-in Type"
    ],
    selectionGuide: "Select long-life series for critical applications, high-ripple series for switching power supplies.",
    selectionGuideLink: {
      url: "/tdk/support/aluminum-capacitor-selection-guide.html",
      text: "View Aluminum Capacitor Selection Guide"
    },
    faqs: [
      {
        question: "What is the typical lifetime of TDK aluminum electrolytic capacitors?",
        answer: "TDK aluminum electrolytic capacitor lifetime varies by series and operating conditions. Standard series typically offer 2,000-5,000 hours at rated temperature (usually 85°C or 105°C). Long-life series such as B43501 provide 10,000-20,000 hours at rated temperature. Lifetime follows the Arrhenius equation - approximately doubling for every 10°C decrease in operating temperature. For example, a capacitor rated for 5,000 hours at 105°C can achieve 20,000 hours at 85°C and 80,000 hours at 65°C. Voltage derating also extends lifetime - operating at 80% of rated voltage typically doubles the expected life. TDK provides detailed lifetime calculation tools and application notes.",
        decisionGuide: "Apply voltage derating and thermal management to maximize capacitor lifetime in your application.",
        keywords: ["aluminum capacitor lifetime", "electrolytic capacitor life", "capacitor reliability"]
      },
      {
        question: "How do I calculate ripple current for aluminum electrolytic capacitors?",
        answer: "Ripple current calculation for aluminum electrolytic capacitors requires understanding the application's switching frequency, voltage ripple requirements, and load characteristics. The basic formula is I_rms = V_ripple / (ESR × √2) for sinusoidal ripple, but actual calculations must account for the frequency-dependent ESR and thermal limitations. TDK specifies ripple current ratings at specific frequencies (typically 100Hz or 120Hz) and temperatures. For switching power supplies operating at higher frequencies (10kHz-100kHz), the effective ripple current capability is higher due to reduced ESR. Always ensure the calculated ripple current does not exceed the capacitor's thermal rating, considering ambient temperature and cooling conditions.",
        decisionGuide: "Use TDK's ripple current calculator or contact our FAE team for detailed thermal analysis of your specific application.",
        keywords: ["ripple current calculation", "capacitor thermal", "ESR frequency"]
      },
      {
        question: "What is the difference between radial and snap-in aluminum electrolytic capacitors?",
        answer: "Radial aluminum electrolytic capacitors feature leads extending from one end, designed for through-hole mounting on PCBs. They are available in smaller case sizes (typically up to 18mm diameter) and are suitable for low to medium power applications. Snap-in capacitors have terminals designed for quick connection to PCB or busbar, supporting larger case sizes (up to 35mm diameter or more) and higher capacitance values. Snap-in types are preferred for high-power applications such as industrial inverters and power supplies where high capacitance and ripple current are required. Screw terminal capacitors are available for the highest power applications requiring the largest case sizes.",
        decisionGuide: "Select radial types for PCB-mounted low-medium power applications; choose snap-in for high-power industrial applications.",
        keywords: ["radial vs snap-in", "aluminum capacitor mounting", "capacitor package types"]
      },
      {
        question: "How should aluminum electrolytic capacitors be stored?",
        answer: "Aluminum electrolytic capacitors should be stored in a cool, dry environment with temperature between 5°C and 35°C and relative humidity below 75%. Avoid storage in areas with high humidity, corrosive gases, or direct sunlight. The electrolyte can slowly evaporate over time, causing capacitance decrease and ESR increase. TDK recommends a maximum storage period of 3 years at room temperature. For capacitors stored beyond this period, a reformation process (applying rated voltage through a current-limiting resistor) may be required before use. Always check the manufacturing date code and follow TDK's storage guidelines in their application notes.",
        decisionGuide: "Store capacitors in controlled environment and use within recommended storage period for optimal performance.",
        keywords: ["capacitor storage", "electrolyte evaporation", "capacitor shelf life"]
      },
      {
        question: "What causes aluminum electrolytic capacitors to fail?",
        answer: "The primary failure mode of aluminum electrolytic capacitors is electrolyte evaporation over time, leading to capacitance loss and ESR increase. This is accelerated by high operating temperatures and excessive ripple current. Other failure mechanisms include overvoltage (causing dielectric breakdown), reverse voltage (damaging the oxide layer), and mechanical stress (causing seal damage). Manufacturing defects such as improper sealing can also cause premature failure. Proper derating (voltage, temperature, ripple current) and thermal management are essential for maximizing capacitor lifetime. TDK's capacitors are designed with high-purity materials and advanced sealing technology to minimize these failure modes.",
        decisionGuide: "Apply proper derating and thermal management to maximize capacitor reliability and lifetime.",
        keywords: ["capacitor failure modes", "electrolyte dry-out", "capacitor reliability"]
      }
    ],
    products: [
      {
        partNumber: "B43501A9107M",
        name: "100µF 450V Long Life Aluminum Electrolytic",
        shortDescription: "100µF 450V aluminum electrolytic capacitor, long-life series, 10,000 hours at 105°C, for industrial power supplies.",
        descriptionParagraphs: [
          "The B43501A9107M is a high-voltage aluminum electrolytic capacitor from TDK's long-life B43501 series. This 100µF capacitor with 450V rating is designed for demanding industrial and commercial power supply applications.",
          "Featuring advanced electrolyte formulation and high-purity aluminum foil, this capacitor delivers 10,000 hours operational life at 105°C with rated ripple current. The robust construction includes a pressure relief vent and high-quality sealing system.",
          "The 25mm diameter x 40mm length case size provides excellent volumetric efficiency for high-voltage filtering applications. This capacitor is ideal for PFC circuits, DC link applications, and high-voltage power supply filtering."
        ],
        specifications: {
          "Capacitance": "100µF ±20%",
          "Rated Voltage": "450V DC",
          "Temperature Range": "-40°C to +105°C",
          "Lifetime": "10,000 hours at 105°C",
          "Ripple Current": "1.2A rms @ 100Hz, 105°C",
          "ESR": "1.5Ω max @ 100Hz",
          "Case Size": "25mm D x 40mm L",
          "Termination": "Snap-in"
        },
        features: [
          "Long life: 10,000 hours at 105°C",
          "High voltage rating: 450V DC",
          "High ripple current capability",
          "Low ESR for reduced heating",
          "Pressure relief vent for safety",
          "RoHS compliant"
        ],
        applications: [
          "PFC output filtering",
          "DC link capacitors",
          "High-voltage power supplies",
          "Motor drive inverters",
          "Welding equipment"
        ],
        faeReview: {
          "author": "David Park",
          "title": "Senior FAE - Power Systems",
          "content": "The B43501A9107M is my standard recommendation for 380-480VAC three-phase rectifier applications. In my experience with industrial power supply designs, this capacitor offers excellent reliability and value. The 10,000-hour lifetime at 105°C provides good margin for most industrial applications when properly derated. I typically recommend operating at 80% of rated voltage (360V) which effectively doubles the expected lifetime. The 1.2A ripple current rating is adequate for PFC applications up to about 1kW. For higher power levels, consider using multiple capacitors in parallel to distribute ripple current and thermal load.",
          "highlight": "Reliable choice for industrial PFC and DC link applications with good lifetime"
        },
        alternativeParts: [
          {
            partNumber: "B43504A9107M",
            brand: "TDK",
            specifications: {
              "Capacitance": "100µF",
              "Rated Voltage": "450V",
              "Lifetime": "5,000 hours at 105°C"
            },
            comparison: {
              "Capacitance": "100µF = 100µF (same)",
              "Voltage": "450V = 450V (same)",
              "Lifetime": "5,000h < 10,000h (shorter)",
              "Cost": "Standard series, typically 15-20% lower"
            },
            reason: "Standard lifetime series for cost-sensitive applications",
            useCase: "Commercial equipment with shorter expected service life",
            link: "/tdk/products/aluminum-electrolytic-capacitors/b43504a9107m.html"
          },
          {
            partNumber: "B43501A9157M",
            brand: "TDK",
            specifications: {
              "Capacitance": "150µF",
              "Rated Voltage": "450V",
              "Lifetime": "10,000 hours at 105°C"
            },
            comparison: {
              "Capacitance": "150µF > 100µF (+50%)",
              "Voltage": "450V = 450V (same)",
              "Case Size": "Larger (25x50mm vs 25x40mm)",
              "Ripple Current": "Higher ripple current capability"
            },
            reason: "Higher capacitance for improved filtering or energy storage",
            useCase: "Applications requiring higher capacitance or lower voltage ripple",
            link: "/tdk/products/aluminum-electrolytic-capacitors/b43501a9157m.html"
          }
        ],
        companionParts: [
          {
            partNumber: "B43501A9477M",
            link: "/tdk/products/aluminum-electrolytic-capacitors/b43501a9477m.html",
            description: "470µF 450V capacitor for higher capacitance requirements",
            category: "Aluminum Electrolytic Capacitors"
          },
          {
            partNumber: "B32922C3104K",
            link: "/tdk/products/film-capacitors/b32922c3104k.html",
            description: "0.1µF film capacitor for high-frequency filtering",
            category: "Film Capacitors"
          },
          {
            partNumber: "B84143A0060R",
            link: "/tdk/products/inductors/b84143a0060r.html",
            description: "PFC choke for power factor correction circuits",
            category: "Inductors"
          },
          {
            partNumber: "B57238S0100M",
            link: "/tdk/products/thermistors/b57238s0100m.html",
            description: "NTC inrush current limiter for soft-start circuits",
            category: "Thermistors"
          }
        ],
        faqs: [
          {
            question: "What is the expected lifetime at different operating temperatures?",
            answer: "The B43501A9107M is rated for 10,000 hours at 105°C. Following the Arrhenius equation, lifetime approximately doubles for every 10°C decrease in operating temperature. Expected lifetimes: 20,000 hours at 95°C, 40,000 hours at 85°C, 80,000 hours at 75°C, and 160,000 hours at 65°C. These calculations assume rated voltage and ripple current. Voltage derating further extends lifetime - operating at 80% of rated voltage typically doubles the expected life. For example, at 85°C and 360V (80% of 450V), expected lifetime could exceed 80,000 hours. Always ensure adequate cooling and thermal management for optimal reliability.",
            decisionGuide: "Use temperature derating and voltage derating to maximize capacitor lifetime in your application.",
            keywords: ["capacitor lifetime", "Arrhenius equation", "temperature derating"]
          },
          {
            question: "How much ripple current can this capacitor handle?",
            answer: "The B43501A9107M has a rated ripple current of 1.2A rms at 100Hz and 105°C ambient temperature. At lower temperatures, higher ripple currents are permissible: approximately 1.5A at 85°C, 1.9A at 65°C, and 2.4A at 45°C. The ripple current rating is frequency-dependent - higher frequencies allow increased ripple current due to reduced ESR. At 10kHz, the ripple current capability is approximately 1.8x the 100Hz rating. Exceeding the ripple current rating causes internal heating, accelerating electrolyte evaporation and reducing lifetime. Always calculate expected ripple current and ensure adequate thermal management.",
            decisionGuide: "Calculate expected ripple current and verify thermal design for reliable long-term operation.",
            keywords: ["ripple current rating", "thermal management", "capacitor heating"]
          },
          {
            question: "What is the leakage current specification?",
            answer: "The maximum leakage current for the B43501A9107M is specified as 0.01CV or 3µA, whichever is greater, measured after 5 minutes at rated voltage. For this 100µF 450V capacitor: 0.01 × 100µF × 450V = 450µA maximum leakage current. Typical leakage current is much lower, often below 100µA at 25°C. Leakage current increases with temperature - approximately doubling for every 10°C rise. At maximum rated temperature (105°C), leakage current may approach the maximum specification. High leakage current indicates capacitor aging or damage. For safety-critical applications, monitor leakage current during periodic maintenance.",
            decisionGuide: "Measure leakage current during system testing and maintenance to monitor capacitor health.",
            keywords: ["leakage current", "capacitor testing", "insulation resistance"]
          },
          {
            question: "Can this capacitor be used in series for higher voltage?",
            answer: "Yes, aluminum electrolytic capacitors can be connected in series to achieve higher voltage ratings, but this requires careful consideration. When connecting in series, voltage balancing resistors must be used to ensure equal voltage distribution, as capacitor characteristics vary with temperature and aging. The balancing resistors should allow a current of 10-20 times the expected leakage current. For two 450V capacitors in series, the combination can theoretically handle 900V, but practical designs should limit to 800V (approximately 89% of theoretical) to account for imbalance. Series connection also reduces effective capacitance by half (for two identical capacitors). Consider using higher voltage rated capacitors instead if available.",
            decisionGuide: "Use voltage balancing resistors and derate the series combination for reliable high-voltage operation.",
            keywords: ["series connection", "voltage balancing", "high voltage capacitors"]
          },
          {
            question: "What mounting orientation is recommended?",
            answer: "The B43501A9107M snap-in capacitor can be mounted in any orientation - vertical (terminals up), horizontal, or inverted (terminals down). However, for optimal performance and reliability, vertical mounting with the terminals facing upward is generally recommended. This orientation allows any gas generated during operation to vent through the pressure relief vent at the top of the capacitor. Horizontal mounting is acceptable but may slightly reduce the effective ripple current capability due to altered thermal convection. Inverted mounting (terminals down) is generally not recommended for long-life applications as it may affect the electrolyte distribution over time. Always ensure adequate clearance for the pressure relief vent.",
            decisionGuide: "Mount vertically with terminals up for optimal reliability; ensure adequate clearance for pressure relief vent.",
            keywords: ["capacitor mounting", "installation orientation", "pressure relief"]
          }
        ]
      },
      {
        partNumber: "B43700A5687M",
        name: "680µF 400V Snap-in Aluminum Electrolytic",
        shortDescription: "680µF 400V snap-in aluminum electrolytic capacitor, high capacitance for DC link and energy storage applications.",
        descriptionParagraphs: [
          "The B43700A5687M is a high-capacitance snap-in aluminum electrolytic capacitor designed for DC link and bulk energy storage applications. With 680µF capacitance and 400V rating, this capacitor is ideal for medium-power inverters and motor drives.",
          "This capacitor features a robust snap-in terminal design for secure PCB mounting and reliable electrical connection. The advanced electrolyte formulation provides good low-temperature performance down to -40°C.",
          "The 35mm diameter x 50mm length case provides high volumetric efficiency for applications requiring significant energy storage in a compact footprint. The pressure relief vent ensures safe operation under abnormal conditions."
        ],
        specifications: {
          "Capacitance": "680µF ±20%",
          "Rated Voltage": "400V DC",
          "Temperature Range": "-40°C to +105°C",
          "Lifetime": "5,000 hours at 105°C",
          "Ripple Current": "3.5A rms @ 100Hz, 105°C",
          "ESR": "0.35Ω max @ 100Hz",
          "Case Size": "35mm D x 50mm L",
          "Termination": "Snap-in"
        },
        features: [
          "High capacitance: 680µF in compact package",
          "High ripple current: 3.5A rms",
          "Low ESR for reduced heating",
          "Wide temperature range: -40°C to +105°C",
          "Snap-in terminals for secure mounting",
          "Pressure relief vent"
        ],
        applications: [
          "DC link capacitors for inverters",
          "Motor drive power supplies",
          "UPS systems",
          "Renewable energy inverters",
          "Industrial power supplies"
        ],
        faeReview: {
          "author": "Robert Kim",
          "title": "FAE - Industrial Power",
          "content": "The B43700A5687M is a solid choice for DC link applications in 5-15kW motor drives and inverters. The 680µF capacitance provides good energy storage for handling load transients, while the 400V rating is well-suited for 380-480VAC three-phase systems after rectification. The 3.5A ripple current rating handles the switching ripple from modern IGBT and SiC inverters effectively. I've used this capacitor in several solar inverter designs with good results. One tip: for high-vibration environments, use additional mechanical support beyond the snap-in terminals to prevent PCB stress. The -40°C rating also makes it suitable for outdoor applications in cold climates.",
          "highlight": "Excellent capacitance density for DC link applications in motor drives"
        },
        alternativeParts: [
          {
            partNumber: "B43700A6477M",
            brand: "TDK",
            specifications: {
              "Capacitance": "470µF",
              "Rated Voltage": "400V",
              "Case Size": "35mm x 40mm"
            },
            comparison: {
              "Capacitance": "470µF < 680µF (-31%)",
              "Voltage": "400V = 400V (same)",
              "Case Size": "35x40mm < 35x50mm (shorter)",
              "Ripple Current": "Lower due to smaller size"
            },
            reason: "Smaller package for space-constrained applications",
            useCase: "Applications with limited height clearance",
            link: "/tdk/products/aluminum-electrolytic-capacitors/b43700a6477m.html"
          },
          {
            partNumber: "B43700A8827M",
            brand: "TDK",
            specifications: {
              "Capacitance": "820µF",
              "Rated Voltage": "400V",
              "Case Size": "35mm x 60mm"
            },
            comparison: {
              "Capacitance": "820µF > 680µF (+21%)",
              "Voltage": "400V = 400V (same)",
              "Case Size": "35x60mm > 35x50mm (longer)",
              "Ripple Current": "Higher due to larger size"
            },
            reason: "Higher capacitance for improved energy storage",
            useCase: "Applications requiring higher energy storage or lower voltage ripple",
            link: "/tdk/products/aluminum-electrolytic-capacitors/b43700a8827m.html"
          }
        ],
        companionParts: [
          {
            partNumber: "B43700A5108M",
            link: "/tdk/products/aluminum-electrolytic-capacitors/b43700a5108m.html",
            description: "1000µF 400V for parallel configuration",
            category: "Aluminum Electrolytic Capacitors"
          },
          {
            partNumber: "B32924C3334K",
            link: "/tdk/products/film-capacitors/b32924c3334k.html",
            description: "0.33µF film capacitor for high-frequency decoupling",
            category: "Film Capacitors"
          },
          {
            partNumber: "B84142A0030R",
            link: "/tdk/products/inductors/b84142a0030r.html",
            description: "DC link choke for ripple current reduction",
            category: "Inductors"
          },
          {
            partNumber: "B59201J0130B010",
            link: "/tdk/products/varistors/b59201j0130b010.html",
            description: "Metal oxide varistor for overvoltage protection",
            category: "Varistors"
          }
        ],
        faqs: [
          {
            question: "What is the surge voltage rating of this capacitor?",
            answer: "The B43700A5687M has a surge voltage rating of 450V (1.125 x rated voltage) for short-duration transients up to 1000 cycles. This allows the capacitor to handle occasional voltage spikes above the normal 400V rating without damage. However, sustained operation above the rated voltage will accelerate aging and reduce lifetime. For applications with frequent voltage transients, consider using a higher voltage rated capacitor or adding external protection such as TVS diodes or metal oxide varistors. The capacitor also features a pressure relief vent that opens if internal pressure becomes excessive, preventing catastrophic failure.",
            decisionGuide: "Use surge rating for occasional transients only; consider higher voltage rating for sustained overvoltage conditions.",
            keywords: ["surge voltage", "overvoltage protection", "transient rating"]
          },
          {
            question: "How many charge/discharge cycles can this capacitor withstand?",
            answer: "Aluminum electrolytic capacitors are not typically rated for a specific number of charge/discharge cycles like batteries or supercapacitors. However, they can withstand frequent voltage variations within their rated specifications. The B43700A5687M is designed for continuous operation in switching applications where the voltage varies at the switching frequency (typically 1-20kHz for IGBT inverters). The limiting factor is the ripple current and resulting thermal stress, not the number of cycles. With proper thermal management and operation within ripple current ratings, this capacitor can operate for its entire rated lifetime (5,000+ hours) with continuous switching. Rapid, deep discharge cycles are not recommended as they can stress the dielectric.",
            decisionGuide: "Design for continuous operation within ripple current and temperature ratings for maximum reliability.",
            keywords: ["charge cycles", "switching applications", "capacitor endurance"]
          },
          {
            question: "What is the self-discharge rate of this capacitor?",
            answer: "The B43700A5687M has a typical self-discharge time constant of several hours due to its high capacitance and insulation resistance. After charging to rated voltage and then disconnected, the capacitor will retain approximately 63% of its charge after one time constant (typically 2-4 hours), 37% after two time constants, and so on. The exact self-discharge rate depends on temperature (faster at higher temperatures) and the capacitor's insulation resistance. For safety, always assume capacitors may retain dangerous voltages for extended periods after power-off. Use appropriate discharge resistors or procedures before handling. The high capacitance (680µF) and voltage (400V) represent significant stored energy (54 joules) that can cause injury or damage if discharged rapidly.",
            decisionGuide: "Always discharge capacitors before handling; use discharge resistors in designs requiring rapid discharge.",
            keywords: ["self-discharge", "stored energy", "capacitor safety"]
          },
          {
            question: "Can this capacitor be used outdoors?",
            answer: "The B43700A5687M can be used in outdoor applications with proper enclosure and thermal management. The -40°C to +105°C temperature range covers most outdoor environments. However, the capacitor is not sealed against moisture and requires protection from direct exposure to rain, humidity, and corrosive atmospheres. For outdoor installations, use an IP54 or better enclosure with adequate ventilation for heat dissipation. Consider temperature cycling effects - daily temperature variations can cause pressure changes inside the capacitor, potentially accelerating seal aging. In high-humidity environments, conformal coating of the PCB assembly is recommended to prevent corrosion of the snap-in terminals and surrounding circuitry.",
            decisionGuide: "Use appropriate enclosure and conformal coating for outdoor applications; ensure adequate thermal management.",
            keywords: ["outdoor use", "environmental protection", "IP rating"]
          },
          {
            question: "What is the ESR at different frequencies?",
            answer: "The ESR of the B43700A5687M varies significantly with frequency due to the dielectric and electrolyte properties. At 100Hz (standard measurement frequency), maximum ESR is 0.35Ω. At 120Hz (typical rectifier ripple), ESR is similar to 100Hz. At higher frequencies: 1kHz approximately 0.25Ω, 10kHz approximately 0.15Ω, and 100kHz approximately 0.10Ω. This frequency-dependent ESR characteristic is important for switching applications - the effective ESR at inverter switching frequencies (5-20kHz) is significantly lower than the 100Hz specification. Lower ESR at switching frequencies means reduced heating from ripple current and better filtering performance. TDK provides ESR vs frequency curves in the detailed datasheet.",
            decisionGuide: "Use frequency-specific ESR data for thermal calculations in switching power supply applications.",
            keywords: ["ESR frequency", "equivalent series resistance", "impedance characteristics"]
          }
        ]
      }
    ]
  },
  {
    id: "film-capacitors",
    name: "Film Capacitors",
    slug: "film-capacitors",
    description: "High-voltage film capacitors for power electronics, renewable energy, and industrial applications.",
    longDescription: "TDK's film capacitor portfolio includes polypropylene and polyester film capacitors designed for demanding power electronics applications. These capacitors feature self-healing properties that enhance reliability and safety in high-voltage applications. The product range covers DC link capacitors for inverters, snubber capacitors for IGBT protection, and general-purpose filtering applications. TDK film capacitors offer excellent capacitance stability over temperature and voltage, low dissipation factor, and high current handling capability. Their robust construction withstands harsh environmental conditions, making them ideal for renewable energy systems, industrial drives, and traction applications.",
    series: [
      "B3277x - DC Link Series",
      "B3265x - Snubber Series",
      "B3292x - EMI Suppression"
    ],
    selectionGuide: "Select DC link series for inverters, snubber series for IGBT protection, EMI series for filtering.",
    selectionGuideLink: {
      url: "/tdk/support/film-capacitor-selection-guide.html",
      text: "View Film Capacitor Selection Guide"
    },
    faqs: [
      {
        question: "What are the advantages of film capacitors over electrolytic capacitors?",
        answer: "Film capacitors offer several advantages over aluminum electrolytic capacitors for specific applications. Film capacitors have much longer lifetime - typically 100,000+ hours with minimal degradation - as they don't have liquid electrolyte that can evaporate. They exhibit excellent capacitance stability over temperature and voltage, with minimal change across their operating range. Film capacitors can handle much higher ripple currents and have lower ESR, resulting in less self-heating. They also have self-healing properties - if a dielectric weakness occurs, the capacitor can clear the fault and continue operating. However, film capacitors have lower volumetric capacitance density and higher cost per microfarad than electrolytic capacitors, making them more suitable for high-performance applications where reliability is critical.",
        decisionGuide: "Choose film capacitors for high-reliability, high-ripple applications; select electrolytic for cost-sensitive high-capacitance needs.",
        keywords: ["film vs electrolytic", "capacitor comparison", "self-healing capacitor"]
      },
      {
        question: "What is the self-healing property of film capacitors?",
        answer: "Self-healing is a unique characteristic of metallized film capacitors where localized dielectric breakdowns are automatically cleared without catastrophic failure. When a voltage stress exceeds the dielectric strength at a weak point, a small arc occurs that vaporizes the thin metallization layer around the fault site, effectively isolating the defect. This process occurs in microseconds and the capacitor continues operating with slightly reduced capacitance. Multiple self-healing events can occur over the capacitor's lifetime. This property provides inherent safety and reliability advantages - unlike electrolytic capacitors that can fail short-circuit, film capacitors tend to fail gracefully with gradual capacitance reduction. TDK's film capacitors are designed with optimized metallization patterns to maximize self-healing effectiveness.",
        decisionGuide: "Use film capacitors in safety-critical applications where graceful failure mode is important.",
        keywords: ["self-healing", "metallized film", "capacitor reliability"]
      },
      {
        question: "What types of film capacitors does TDK offer?",
        answer: "TDK offers several types of film capacitors optimized for different applications. Polypropylene (PP) film capacitors provide the lowest losses and best frequency characteristics, making them ideal for high-frequency switching applications, resonant circuits, and snubbers. Polyester (PET) film capacitors offer higher capacitance density and are cost-effective for general-purpose applications. DC link capacitors use heavy-edge metallization for high current handling in inverter applications. Snubber capacitors are specially designed with low inductance and high dV/dt capability for IGBT protection. EMI suppression capacitors are safety-rated (X2/Y2) for mains filtering applications. TDK also offers customized film capacitors with specific form factors and electrical characteristics for specialized applications.",
        decisionGuide: "Select polypropylene for high-frequency/low-loss, polyester for cost-effective general purpose, specialized types for specific applications.",
        keywords: ["polypropylene capacitor", "polyester capacitor", "DC link capacitor"]
      },
      {
        question: "How do I select the right film capacitor for DC link applications?",
        answer: "Selecting film capacitors for DC link applications requires careful consideration of several parameters. First, determine the required capacitance based on allowable voltage ripple and load current: C = I_ripple / (8 × f_switching × V_ripple). Next, ensure the voltage rating provides adequate margin - typically 1.2-1.5x the maximum DC bus voltage. Calculate the RMS ripple current and verify it doesn't exceed the capacitor's rating, considering the switching frequency. Check that the capacitor's ESR and ESL are low enough for your application's frequency requirements. Consider the physical size and mounting constraints - DC link capacitors can be large. TDK's B3277x series is specifically designed for DC link applications with optimized current handling and low inductance.",
        decisionGuide: "Calculate capacitance, voltage, and ripple current requirements; select from TDK's DC link series for optimal performance.",
        keywords: ["DC link selection", "capacitor sizing", "inverter capacitor"]
      },
      {
        question: "What is the typical lifetime of TDK film capacitors?",
        answer: "TDK film capacitors are designed for very long operational lifetimes, typically 100,000 hours or more when operated within their rated specifications. Unlike aluminum electrolytic capacitors, film capacitors don't have liquid electrolyte that evaporates, eliminating the primary wear-out mechanism. The expected lifetime depends on operating voltage and temperature. Film capacitors follow an inverse power law for voltage stress - lifetime is approximately proportional to (V_rated/V_operating)^n where n is typically 7-9. Operating at 80% of rated voltage can extend lifetime by 3-5x compared to full rated voltage operation. Temperature also affects lifetime, though less dramatically than for electrolytic capacitors. TDK provides detailed lifetime prediction models and can perform accelerated life testing for critical applications.",
        decisionGuide: "Apply voltage derating to maximize film capacitor lifetime; expect 100,000+ hours in typical applications.",
        keywords: ["film capacitor lifetime", "capacitor aging", "voltage derating"]
      }
    ],
    products: [
      {
        partNumber: "B32774D8205K",
        name: "2µF 1100V DC Link Film Capacitor",
        shortDescription: "2µF 1100V DC link film capacitor, polypropylene dielectric, for high-voltage inverter applications.",
        descriptionParagraphs: [
          "The B32774D8205K is a high-voltage DC link film capacitor designed for demanding inverter and power conversion applications. With 2µF capacitance and 1100V DC rating, this capacitor is ideal for 690VAC three-phase systems and high-voltage DC applications.",
          "Featuring polypropylene film with heavy-edge metallization, this capacitor offers excellent current handling capability and low losses. The self-healing properties ensure long-term reliability even under voltage stress.",
          "The compact box-style construction with internal series connection provides low ESL and ESR, making it suitable for high-frequency switching applications with IGBT and SiC power modules."
        ],
        specifications: {
          "Capacitance": "2.0µF ±10%",
          "Rated Voltage": "1100V DC",
          "AC Voltage": "500V AC",
          "Temperature Range": "-40°C to +105°C",
          "ESR": "8mΩ max @ 10kHz",
          "ESL": "25nH typical",
          "Ripple Current": "12A rms @ 10kHz, 70°C",
          "Case Size": "42mm x 30mm x 45mm"
        },
        features: [
          "High voltage rating: 1100V DC",
          "Polypropylene film for low losses",
          "Self-healing properties",
          "Low ESR and ESL",
          "High ripple current capability",
          "Box-style construction"
        ],
        applications: [
          "Solar inverter DC link",
          "Wind turbine converters",
          "EV charging stations",
          "Industrial motor drives",
          "High-voltage power supplies"
        ],
        faeReview: {
          "author": "Jennifer Liu",
          "title": "Senior FAE - Renewable Energy",
          "content": "The B32774D8205K is an excellent choice for 1000V DC bus applications in solar inverters and industrial drives. The 1100V rating provides good margin for 800-1000V DC systems, and the 2µF capacitance is well-suited for 10-30kW power levels. The low ESL (25nH) is particularly important for SiC MOSFET applications where fast switching edges create high dV/dt stress. I've successfully used this capacitor in several 1500V solar string inverter designs. The self-healing property provides peace of mind for outdoor installations where maintenance access is difficult. For higher power levels, multiple capacitors can be paralleled - the low ESL helps maintain good current sharing.",
          "highlight": "Excellent for high-voltage DC link applications with SiC and IGBT inverters"
        },
        alternativeParts: [
          {
            partNumber: "B32774D8155K",
            brand: "TDK",
            specifications: {
              "Capacitance": "1.5µF",
              "Rated Voltage": "1100V DC",
              "Case Size": "42x28x40mm"
            },
            comparison: {
              "Capacitance": "1.5µF < 2.0µF (-25%)",
              "Voltage": "1100V = 1100V (same)",
              "Case Size": "Slightly smaller",
              "Ripple Current": "Lower due to smaller size"
            },
            reason: "Smaller size for space-constrained applications",
            useCase: "Lower power applications or higher switching frequencies",
            link: "/tdk/products/film-capacitors/b32774d8155k.html"
          },
          {
            partNumber: "B32776D8205K",
            brand: "TDK",
            specifications: {
              "Capacitance": "2.0µF",
              "Rated Voltage": "1300V DC"
            },
            comparison: {
              "Capacitance": "2.0µF = 2.0µF (same)",
              "Voltage": "1300V > 1100V (+18%)",
              "Case Size": "Larger for higher voltage",
              "Cost": "Higher voltage rating increases cost"
            },
            reason: "Higher voltage rating for 1500V DC systems",
            useCase: "1500V solar inverters and high-voltage DC applications",
            link: "/tdk/products/film-capacitors/b32776d8205k.html"
          }
        ],
        companionParts: [
          {
            partNumber: "B32774D8105K",
            link: "/tdk/products/film-capacitors/b32774d8105k.html",
            description: "1µF 1100V for parallel configuration",
            category: "Film Capacitors"
          },
          {
            partNumber: "B32652A1154J",
            link: "/tdk/products/film-capacitors/b32652a1154j.html",
            description: "0.15µF snubber capacitor for IGBT protection",
            category: "Film Capacitors"
          },
          {
            partNumber: "B84143A0060R",
            link: "/tdk/products/inductors/b84143a0060r.html",
            description: "DC link choke for additional filtering",
            category: "Inductors"
          },
          {
            partNumber: "B59100C0080A070",
            link: "/tdk/products/varistors/b59100c0080a070.html",
            description: "Varistor for overvoltage protection",
            category: "Varistors"
          }
        ],
        faqs: [
          {
            question: "What is the dV/dt rating of this capacitor?",
            answer: "The B32774D8205K has a maximum dV/dt rating of 10,000 V/µs, making it suitable for fast-switching IGBT and SiC MOSFET applications. This rating indicates the maximum rate of voltage change the capacitor can withstand without damage. Modern SiC devices can create dV/dt rates of 50-100 V/ns (50,000-100,000 V/µs), which can stress capacitors through displacement currents (I = C × dV/dt). The low ESL (25nH) of this capacitor helps minimize voltage overshoot during fast switching transitions. For applications with extremely high dV/dt, additional snubber circuits may be necessary to protect both the capacitor and the switching devices. Always verify the dV/dt requirements of your specific application.",
            decisionGuide: "Verify dV/dt requirements for SiC applications; use snubbers if dV/dt exceeds capacitor rating.",
            keywords: ["dV/dt rating", "SiC MOSFET", "fast switching"]
          },
          {
            question: "Can this capacitor be used for AC applications?",
            answer: "The B32774D8205K is rated for 500V AC in addition to its 1100V DC rating, making it suitable for certain AC applications. However, film capacitors designed for DC link applications are optimized for DC voltage stress and may not be suitable for continuous AC operation at full voltage. For pure AC applications such as power factor correction or motor run capacitors, TDK offers specialized AC film capacitors with different internal construction. The AC rating of this capacitor is primarily intended for applications with AC ripple superimposed on DC voltage, such as inverter DC links where the AC component is a small percentage of the DC voltage. For 50/60Hz AC applications, consult TDK's AC film capacitor series.",
            decisionGuide: "Use for DC with AC ripple; select specialized AC capacitors for continuous AC operation.",
            keywords: ["AC rating", "DC link", "AC capacitor"]
          },
          {
            question: "What is the capacitance tolerance and how does it vary with temperature?",
            answer: "The B32774D8205K has a capacitance tolerance of ±10% at 25°C. Polypropylene film capacitors exhibit excellent capacitance stability over temperature. The typical capacitance change is -2% to +2% from -40°C to +85°C, and -5% to +2% up to +105°C. This stability is significantly better than ceramic or electrolytic capacitors. The capacitance is also very stable with voltage - typically changing less than 0.1% across the rated voltage range. This stability makes film capacitors ideal for precision applications and circuits where consistent timing or filtering characteristics are required. The tight tolerance and stability also simplify circuit design by reducing the need for large safety margins.",
            decisionGuide: "Film capacitors provide excellent stability for precision applications; minimal derating needed for temperature effects.",
            keywords: ["capacitance tolerance", "temperature stability", "polypropylene characteristics"]
          },
          {
            question: "How should this capacitor be mounted and what are the terminal options?",
            answer: "The B32774D8205K features box-style construction with internal series connection and axial leads for through-hole mounting. The leads should be kept as short as possible to minimize additional inductance. For high-current applications, use wide PCB traces or busbar connections to the leads. The capacitor should be mounted with adequate clearance from other components to allow for heat dissipation. Mechanical support may be needed for applications subject to vibration - use appropriate brackets or potting compounds. The case is not electrically isolated, so ensure adequate creepage and clearance distances to other potentials. TDK provides detailed mounting guidelines in their application notes for film capacitors.",
            decisionGuide: "Use short, wide connections; provide mechanical support for high-vibration applications.",
            keywords: ["capacitor mounting", "terminal connection", "mechanical support"]
          },
          {
            question: "What safety approvals does this capacitor have?",
            answer: "The B32774D8205K is designed for industrial DC link applications and carries standard industrial safety approvals. It is UL recognized and EN/IEC compliant for industrial equipment. However, it is not rated for mains-connected applications requiring X or Y safety classification. For EMI suppression capacitors that connect directly to AC mains (across-the-line or line-to-ground), TDK offers specialized X2 and Y2 safety-rated capacitors in the B3292x series. These safety-rated capacitors undergo additional testing including active flammability and passive flammability tests. Always verify that the capacitor has appropriate safety approvals for your specific application and market requirements.",
            decisionGuide: "Verify safety approvals match your application requirements; use X2/Y2 capacitors for mains-connected applications.",
            keywords: ["safety approvals", "UL recognition", "IEC compliance"]
          }
        ]
      },
      {
        partNumber: "B32652A1154J",
        name: "0.15µF 1000V Snubber Film Capacitor",
        shortDescription: "0.15µF 1000V snubber capacitor, polypropylene, low inductance for IGBT protection.",
        descriptionParagraphs: [
          "The B32652A1154J is a specialized snubber capacitor designed for IGBT and MOSFET protection in switching power applications. With 0.15µF capacitance and 1000V rating, this capacitor effectively suppresses voltage transients during switching.",
          "The polypropylene film construction provides low losses and excellent high-frequency characteristics. The special internal design minimizes ESL and ESR for optimal snubber performance.",
          "This capacitor is essential for protecting power semiconductors from voltage spikes caused by stray inductance in power circuits. The self-healing properties ensure long-term reliability."
        ],
        specifications: {
          "Capacitance": "0.15µF ±5%",
          "Rated Voltage": "1000V DC",
          "Temperature Range": "-40°C to +105°C",
          "ESR": "15mΩ max @ 100kHz",
          "ESL": "15nH typical",
          "dV/dt": "50,000 V/µs max",
          "Dissipation Factor": "0.05% max @ 1kHz",
          "Lead Spacing": "27.5mm"
        },
        features: [
          "Low ESL design for snubber applications",
          "High dV/dt capability: 50,000 V/µs",
          "Polypropylene for low losses",
          "Tight tolerance: ±5%",
          "Self-healing properties",
          "Radial lead construction"
        ],
        applications: [
          "IGBT snubber circuits",
          "MOSFET protection",
          "Thyristor commutation",
          "High-voltage pulse circuits",
          "Resonant converters"
        ],
        faeReview: {
          "author": "Mark Thompson",
          "title": "FAE - Power Electronics",
          "content": "The B32652A1154J is my standard recommendation for IGBT snubber applications in motor drives and inverters. The 0.15µF value works well for typical 600V-1200V IGBT modules switching at 5-20kHz. The extremely low ESL (15nH) is critical for effective snubbing - it allows the capacitor to absorb the energy stored in stray inductance before the voltage can spike dangerously. I've seen this capacitor effectively clamp voltage overshoot to under 100V in well-designed snubber circuits. The 50,000 V/µs rating handles even the fastest SiC MOSFET switching edges. For higher power applications, multiple capacitors can be paralleled to increase energy absorption capability.",
          "highlight": "Excellent low-ESL design for effective IGBT voltage spike suppression"
        },
        alternativeParts: [
          {
            partNumber: "B32652A1104J",
            brand: "TDK",
            specifications: {
              "Capacitance": "0.1µF",
              "Rated Voltage": "1000V DC"
            },
            comparison: {
              "Capacitance": "0.1µF < 0.15µF (-33%)",
              "Voltage": "1000V = 1000V (same)",
              "Physical Size": "Same package",
              "Energy Absorption": "Lower due to smaller capacitance"
            },
            reason: "Lower capacitance for higher frequency applications",
            useCase: "Higher switching frequency applications or smaller stray inductance",
            link: "/tdk/products/film-capacitors/b32652a1104j.html"
          },
          {
            partNumber: "B32652A1224J",
            brand: "TDK",
            specifications: {
              "Capacitance": "0.22µF",
              "Rated Voltage": "1000V DC"
            },
            comparison: {
              "Capacitance": "0.22µF > 0.15µF (+47%)",
              "Voltage": "1000V = 1000V (same)",
              "Physical Size": "Larger case size",
              "Energy Absorption": "Higher for larger stray inductance"
            },
            reason: "Higher capacitance for larger energy absorption",
            useCase: "Applications with higher stray inductance or lower allowable voltage overshoot",
            link: "/tdk/products/film-capacitors/b32652a1224j.html"
          }
        ],
        companionParts: [
          {
            partNumber: "B32652A1334J",
            link: "/tdk/products/film-capacitors/b32652a1334j.html",
            description: "0.33µF snubber for higher energy applications",
            category: "Film Capacitors"
          },
          {
            partNumber: "B32621A1103J",
            link: "/tdk/products/film-capacitors/b32621a1103j.html",
            description: "0.01µF for high-frequency decoupling",
            category: "Film Capacitors"
          },
          {
            partNumber: "B57238S0100M",
            link: "/tdk/products/thermistors/b57238s0100m.html",
            description: "NTC for soft-start circuits",
            category: "Thermistors"
          },
          {
            partNumber: "B59100C0160A070",
            link: "/tdk/products/varistors/b59100c0160a070.html",
            description: "Varistor for additional overvoltage protection",
            category: "Varistors"
          }
        ],
        faqs: [
          {
            question: "How do I calculate the required snubber capacitance?",
            answer: "Snubber capacitance calculation depends on the stray inductance in your circuit and the maximum allowable voltage overshoot. The basic formula is: C = L_stray × I² / V_overshoot², where L_stray is the stray inductance, I is the switched current, and V_overshoot is the maximum allowable voltage above the DC bus. For example, with 500nH stray inductance, 50A current, and 100V allowable overshoot: C = 500nH × 50² / 100² = 0.125µF. In practice, select the next standard value (0.15µF in this case). The capacitor must also handle the energy: E = 0.5 × L_stray × I². Always include a series resistor in the snubber circuit to damp oscillations and limit discharge current.",
            decisionGuide: "Calculate based on stray inductance and current; include series resistor for proper damping.",
            keywords: ["snubber design", "capacitor calculation", "voltage overshoot"]
          },
          {
            question: "What series resistor value should be used with this snubber capacitor?",
            answer: "The snubber resistor value is critical for proper damping of voltage transients. The optimal resistor value is typically R = √(L_stray / C), which provides critical damping. For example, with 500nH stray inductance and 0.15µF capacitor: R = √(500nH / 0.15µF) = 1.8Ω. In practice, values from 1-10Ω are common depending on the specific circuit. The resistor power rating must handle the dissipated energy: P = 0.5 × C × V² × f_switching. At 600V DC bus and 10kHz switching: P = 0.5 × 0.15µF × 600² × 10kHz = 270W peak, but average power is much lower due to short pulse duration. Use non-inductive resistors (carbon composition or film) for snubber applications.",
            decisionGuide: "Calculate optimal resistance based on stray inductance and capacitance; use non-inductive resistors.",
            keywords: ["snubber resistor", "damping resistor", "RC snubber"]
          },
          {
            question: "Why is low ESL important for snubber capacitors?",
            answer: "Low ESL (Equivalent Series Inductance) is critical for snubber capacitors because it determines how quickly the capacitor can respond to voltage transients. Voltage spikes from stray inductance have very fast rise times - often less than 100 nanoseconds. If the snubber capacitor has high ESL, the inductance prevents the capacitor from absorbing the transient energy before the voltage spikes to dangerous levels. The relationship is: V_spike = L × di/dt. With 50nH ESL and 1000A/µs current change rate, the inductance alone creates 50V of additional voltage. The B32652A1154J's 15nH ESL allows it to effectively clamp voltage transients with rise times under 50ns. Always minimize loop inductance in the snubber circuit by keeping connections short.",
            decisionGuide: "Select lowest ESL capacitor available; minimize connection inductance in snubber layout.",
            keywords: ["ESL importance", "transient response", "voltage clamping"]
          },
          {
            question: "Can this capacitor be used in series for higher voltage snubbers?",
            answer: "Yes, snubber capacitors can be connected in series for higher voltage applications, but this requires careful consideration of voltage sharing. Unlike DC link applications where steady-state voltage division is important, snubber capacitors must handle fast voltage transients where capacitance mismatch can cause unequal voltage distribution. When using series-connected snubber capacitors, use identical part numbers and add parallel resistors (100kΩ to 1MΩ) to ensure DC voltage balancing. For two 1000V capacitors in series, the combination can handle transients up to 2000V, but steady-state voltage should be limited to 1600V (80% of theoretical) for safety margin. Consider using a single higher-voltage rated capacitor instead when available, as this eliminates the balancing concerns.",
            decisionGuide: "Use balancing resistors for series connection; consider single higher-voltage capacitor when possible.",
            keywords: ["series connection", "voltage balancing", "high voltage snubber"]
          },
          {
            question: "What is the pulse current rating for this capacitor?",
            answer: "The B32652A1154J is designed to handle high pulse currents typical of snubber applications. The maximum pulse current is limited by the capacitor's internal connections and metallization. Typical pulse current capability is I_pulse = C × dV/dt, where dV/dt is the rated 50,000 V/µs. For 0.15µF: I_pulse = 0.15µF × 50,000 V/µs = 7.5A. However, in practice, much higher peak currents (50-100A) can be handled for short durations (microseconds) because the limitation is thermal. The capacitor can absorb energy E = 0.5 × C × V² per pulse. At 1000V: E = 0.5 × 0.15µF × 1000² = 75mJ per pulse. For repetitive pulses, ensure the average power dissipation doesn't exceed thermal limits.",
            decisionGuide: "Calculate pulse energy and verify thermal limits for repetitive operation.",
            keywords: ["pulse current", "pulse energy", "repetitive rating"]
          }
        ]
      }
    ]
  },
  {
    id: "inductors",
    name: "Inductors and Coils",
    slug: "inductors",
    description: "Power inductors, common mode chokes, and high-frequency coils for power management and EMI filtering.",
    longDescription: "TDK's inductor portfolio includes a comprehensive range of power inductors, common mode chokes, and high-frequency coils for diverse applications. Power inductors for DC-DC converters feature ferrite and metal composite cores with saturation currents up to 100A. Common mode chokes provide effective EMI suppression for power lines and signal interfaces. High-frequency coils are designed for RF applications, resonant circuits, and wireless power transfer. TDK's advanced ferrite materials, developed from their pioneering work since 1935, enable high-efficiency power conversion with low core losses. The product range covers surface-mount and through-hole packages for applications from milliwatts to kilowatts.",
    series: [
      "SLF Series - Power Inductors",
      "ACM Series - Common Mode Chokes",
      "MLG Series - High Frequency"
    ],
    selectionGuide: "Select power inductors based on inductance and current requirements; choose common mode chokes for EMI filtering.",
    selectionGuideLink: {
      url: "/tdk/support/inductor-selection-guide.html",
      text: "View Inductor Selection Guide"
    },
    faqs: [
      {
        question: "What types of inductors does TDK offer?",
        answer: "TDK offers a comprehensive range of inductors for diverse applications. Power inductors for DC-DC converters include shielded and unshielded types with ferrite or metal composite cores, inductance values from sub-microhenry to millihenry, and current ratings from milliamps to over 100A. Common mode chokes are available in toroidal and bobbin constructions for EMI suppression on power lines and data interfaces. High-frequency coils for RF applications include air-core and ferrite-core inductors with high Q factors. TDK also offers specialized inductors for automotive applications (AEC-Q200 qualified), coupled inductors for SEPIC and flyback converters, and current sense transformers. The product range covers surface-mount sizes from 0603 to large through-hole types for high-current applications.",
        decisionGuide: "Select based on application type: power inductors for DC-DC, common mode chokes for EMI, high-frequency coils for RF.",
        keywords: ["TDK inductor types", "power inductor", "common mode choke"]
      },
      {
        question: "What is the difference between ferrite and metal composite power inductors?",
        answer: "Ferrite and metal composite (powdered iron) cores offer different characteristics for power inductors. Ferrite cores provide high permeability and low core losses at high frequencies, making them ideal for switching frequencies above 500kHz. They have sharp saturation characteristics - inductance drops rapidly when saturation current is exceeded. Metal composite cores offer softer saturation with gradual inductance reduction, providing better handling of transient currents. They have higher saturation flux density, allowing more energy storage in the same volume. However, metal composite cores have higher core losses, making them better suited for frequencies below 500kHz. Ferrite inductors are typically more cost-effective, while metal composite inductors offer better current handling and transient response.",
        decisionGuide: "Choose ferrite for high-frequency, cost-sensitive applications; select metal composite for high-current or soft saturation requirements.",
        keywords: ["ferrite vs metal composite", "inductor core material", "saturation characteristics"]
      },
      {
        question: "How do I select the right inductor for a DC-DC converter?",
        answer: "Selecting inductors for DC-DC converters requires calculating the required inductance based on switching frequency, input/output voltages, and allowable ripple current. The basic formula is: L = (V_in - V_out) × D / (f_sw × ΔI_L), where D is duty cycle, f_sw is switching frequency, and ΔI_L is inductor ripple current (typically 20-40% of DC current). Next, verify the saturation current rating exceeds the peak inductor current (I_DC + ΔI_L/2). Check that the RMS current rating handles the thermal requirements. Consider DCR for efficiency calculations - lower DCR means less conduction loss. For EMI-sensitive applications, choose shielded inductors. TDK provides online tools and application support to help with inductor selection.",
        decisionGuide: "Calculate inductance based on ripple current requirements; verify saturation and thermal ratings.",
        keywords: ["DC-DC inductor selection", "inductor calculation", "buck converter inductor"]
      },
      {
        question: "What is inductor saturation and why is it important?",
        answer: "Inductor saturation occurs when the magnetic core material reaches its maximum flux density and can no longer support increased magnetic field. When saturation occurs, inductance drops dramatically (often to 10-20% of nominal value), causing increased ripple current, higher losses, and potential converter instability. The saturation current (Isat) is specified as the current at which inductance drops by a certain percentage, typically 30%. It's crucial to ensure the peak inductor current in operation never exceeds Isat. For ferrite inductors, saturation is abrupt and must be strictly avoided. Metal composite inductors have softer saturation characteristics, providing more margin. Temperature affects saturation - higher temperatures generally reduce saturation current.",
        decisionGuide: "Design with peak current well below saturation rating; consider temperature effects on saturation.",
        keywords: ["inductor saturation", "Isat", "magnetic saturation"]
      },
      {
        question: "What are common mode chokes and how do they work?",
        answer: "Common mode chokes are inductors designed to suppress common mode noise - electrical interference that appears equally on both lines of a differential pair relative to ground. They consist of two windings on a shared magnetic core, typically toroidal or U-core construction. When common mode currents flow in the same direction through both windings, they create additive magnetic flux that presents high impedance to common mode noise. For differential mode signals (currents flowing in opposite directions), the magnetic flux cancels, presenting minimal impedance to the desired signal. Common mode chokes are essential for EMI filtering in power supplies, data interfaces, and motor drives. TDK offers common mode chokes for various frequency ranges and current ratings.",
        decisionGuide: "Select common mode chokes based on frequency range of noise, current requirements, and required attenuation.",
        keywords: ["common mode choke", "EMI filtering", "common mode noise"]
      }
    ],
    products: [
      {
        partNumber: "SLF7055T-100M2R0-PF",
        name: "10µH 2.0A Shielded Power Inductor",
        shortDescription: "10µH shielded power inductor, 2.0A rated current, ferrite core, for DC-DC converter applications.",
        descriptionParagraphs: [
          "The SLF7055T-100M2R0-PF is a shielded power inductor designed for DC-DC converter applications. With 10µH inductance and 2.0A current rating, this inductor is ideal for buck converters up to approximately 5W output power.",
          "The ferrite drum core with magnetic shielding minimizes EMI radiation and prevents interference with nearby components. The shielded construction also protects the inductor from external magnetic fields.",
          "The 7.0mm x 7.0mm x 5.5mm surface-mount package is compatible with automated assembly processes. The inductor features low DCR (65mΩ typical) for high efficiency and low self-heating."
        ],
        specifications: {
          "Inductance": "10µH ±20% @ 1MHz",
          "Rated Current": "2.0A (DC)",
          "Saturation Current": "2.4A (30% drop)",
          "DCR": "65mΩ typical",
          "Temperature Range": "-40°C to +125°C",
          "Package Size": "7.0mm x 7.0mm x 5.5mm",
          "Core Material": "Ferrite",
          "Shielding": "Magnetic shield"
        },
        features: [
          "Shielded construction for low EMI",
          "10µH inductance for general DC-DC",
          "2.0A continuous current rating",
          "Low DCR for high efficiency",
          "Compact 7x7mm footprint",
          "AEC-Q200 qualified"
        ],
        applications: [
          "Buck converters",
          "Boost converters",
          "SEPIC converters",
          "LED drivers",
          "Point-of-load regulators"
        ],
        faeReview: {
          "author": "Lisa Wang",
          "title": "FAE - Power Management",
          "content": "The SLF7055T-100M2R0-PF is one of my most frequently recommended power inductors for general-purpose DC-DC applications. The 10µH value is versatile - it works well for 12V to 5V or 3.3V buck converters at switching frequencies of 500kHz to 2MHz. The shielded construction is a significant advantage for compact designs where components are closely spaced - I've seen unshielded inductors cause interference with nearby analog circuits. The 2.0A rating provides good margin for 1-1.5A output current designs. The AEC-Q200 qualification makes it suitable for automotive applications as well. One tip: the saturation current (2.4A) is reasonably high, but I still recommend keeping peak inductor current below 2.0A for best efficiency and thermal performance.",
          "highlight": "Versatile shielded inductor for general-purpose DC-DC with good current handling"
        },
        alternativeParts: [
          {
            partNumber: "SLF7055T-4R7N2R0-PF",
            brand: "TDK",
            specifications: {
              "Inductance": "4.7µH",
              "Rated Current": "2.8A"
            },
            comparison: {
              "Inductance": "4.7µH < 10µH (-53%)",
              "Current": "2.8A > 2.0A (+40%)",
              "Package": "Same 7x7mm",
              "DCR": "Lower due to fewer turns"
            },
            reason: "Lower inductance for higher current or higher frequency applications",
            useCase: "Higher current converters or applications with higher switching frequency",
            link: "/tdk/products/inductors/slf7055t-4r7n2r0-pf.html"
          },
          {
            partNumber: "SLF12575T-100M3R2-PF",
            brand: "TDK",
            specifications: {
              "Inductance": "10µH",
              "Rated Current": "3.2A"
            },
            comparison: {
              "Inductance": "10µH = 10µH (same)",
              "Current": "3.2A > 2.0A (+60%)",
              "Package": "Larger 12x12mm",
              "DCR": "Lower due to larger wire"
            },
            reason: "Higher current capability in larger package",
            useCase: "Higher power applications requiring more than 2A output current",
            link: "/tdk/products/inductors/slf12575t-100m3r2-pf.html"
          }
        ],
        companionParts: [
          {
            partNumber: "SLF7055T-220M1R5-PF",
            link: "/tdk/products/inductors/slf7055t-220m1r5-pf.html",
            description: "22µH for lower current or higher inductance requirements",
            category: "Inductors"
          },
          {
            partNumber: "C2012X7R1H475K125AC",
            link: "/tdk/products/ceramic-capacitors/c2012x7r1h475k125ac.html",
            description: "4.7µF input/output capacitor for buck converter",
            category: "Ceramic Capacitors"
          },
          {
            partNumber: "ACM2012-900-2P-T002",
            link: "/tdk/products/inductors/acm2012-900-2p-t002.html",
            description: "Common mode choke for input EMI filtering",
            category: "Inductors"
          },
          {
            partNumber: "C2012C0G1H102J085AA",
            link: "/tdk/products/ceramic-capacitors/c2012c0g1h102j085aa.html",
            description: "1000pF ceramic for high-frequency decoupling",
            category: "Ceramic Capacitors"
          }
        ],
        faqs: [
          {
            question: "What is the temperature rise at rated current?",
            answer: "The SLF7055T-100M2R0-PF has a typical temperature rise of 40°C at rated current (2.0A) in still air conditions. This temperature rise is due to resistive losses (I² × DCR) in the copper winding. The actual temperature rise depends on ambient conditions, PCB copper area for heat dissipation, and airflow. For reliable operation, ensure the ambient temperature plus temperature rise doesn't exceed the maximum rated temperature (125°C). For example, at 85°C ambient, the inductor temperature would be approximately 125°C at rated current. For continuous operation at high ambient temperatures, consider derating the current or improving thermal management through larger PCB copper area or forced airflow.",
            decisionGuide: "Verify thermal design keeps inductor temperature within ratings; use copper area and airflow for thermal management.",
            keywords: ["temperature rise", "thermal derating", "inductor heating"]
          },
          {
            question: "How much does the inductance vary with current?",
            answer: "The SLF7055T-100M2R0-PF exhibits typical ferrite core saturation characteristics. At low currents (below 1A), inductance remains close to the nominal 10µH value. As current increases, the core begins to saturate and inductance gradually decreases. At the saturation current rating of 2.4A, inductance has dropped by 30% to approximately 7µH. Beyond this point, inductance drops more rapidly. This soft saturation characteristic is normal for ferrite inductors and is accounted for in converter design. The inductance vs current curve is provided in the datasheet. For stable converter operation, design for peak currents well below the saturation point where inductance is relatively constant.",
            decisionGuide: "Design converter for peak current below saturation knee; account for inductance reduction at high currents.",
            keywords: ["inductance vs current", "saturation curve", "inductor characteristics"]
          },
          {
            question: "What is the self-resonant frequency of this inductor?",
            answer: "The SLF7055T-100M2R0-PF has a self-resonant frequency (SRF) of approximately 15-20MHz. The SRF occurs due to the parallel combination of the inductance and the parasitic capacitance between winding turns. Above the SRF, the inductor behaves capacitively rather than inductively. For DC-DC converter applications, the switching frequency (typically 500kHz-2MHz) should be well below the SRF - typically less than 1/5 to 1/10 of SRF. The 10-20MHz SRF of this inductor is suitable for switching frequencies up to 2-4MHz. For higher frequency applications, consider inductors specifically designed for high-frequency operation with lower parasitic capacitance.",
            decisionGuide: "Ensure switching frequency is well below SRF; select high-frequency inductors for MHz range converters.",
            keywords: ["self-resonant frequency", "SRF", "parasitic capacitance"]
          },
          {
            question: "Can this inductor be used in parallel for higher current?",
            answer: "Yes, power inductors can be connected in parallel to increase current handling capability, but this requires careful consideration. When paralleling inductors, current sharing depends on the matching of inductance and DCR values. Due to manufacturing tolerances (typically ±20% for inductance), one inductor may carry more current than the other. For the SLF7055T-100M2R0-PF, paralleling two inductors theoretically provides 4.0A capability, but practical designs should limit to 3.2-3.5A to account for imbalance. The inductors should be placed close together with symmetrical PCB layout to minimize parasitic differences. For best results, select inductors from the same production batch. Alternatively, consider using a single higher-current rated inductor.",
            decisionGuide: "Use single higher-current inductor when possible; if paralleling, account for current imbalance.",
            keywords: ["parallel inductors", "current sharing", "inductor paralleling"]
          },
          {
            question: "What is the difference between rated current and saturation current?",
            answer: "Rated current (Irms or Idc) and saturation current (Isat) are two different specifications for power inductors. Rated current is based on thermal limitations - it's the DC current that causes a specified temperature rise (typically 40°C) due to resistive losses in the winding. Exceeding rated current causes excessive heating but doesn't necessarily damage the inductor immediately. Saturation current is the current at which the core material begins to saturate, causing inductance to drop (typically specified as 30% reduction). Operating above saturation current causes increased ripple current, higher losses, and potential converter instability. For reliable operation, design should ensure neither rated current nor saturation current is exceeded under worst-case conditions.",
            decisionGuide: "Design for both thermal and saturation limits; saturation current is usually the limiting factor in DC-DC converters.",
            keywords: ["rated current", "saturation current", "inductor ratings"]
          }
        ]
      },
      {
        partNumber: "ACM2012-900-2P-T002",
        name: "900Ω Common Mode Choke 0.3A",
        shortDescription: "900Ω common mode choke, 0.3A rated current, for EMI suppression on signal and power lines.",
        descriptionParagraphs: [
          "The ACM2012-900-2P-T002 is a compact common mode choke designed for EMI suppression on signal lines and low-power DC power lines. With 900Ω common mode impedance at 100MHz, it provides effective filtering of high-frequency noise.",
          "The 0805 (2.0mm x 1.25mm) surface-mount package is ideal for space-constrained designs in consumer electronics and portable devices. The two-line configuration provides common mode filtering while maintaining signal integrity.",
          "This common mode choke is suitable for USB, HDMI, and other high-speed data interfaces, as well as DC power lines in portable electronics. The high common mode impedance effectively suppresses noise while the low differential mode impedance preserves signal quality."
        ],
        specifications: {
          "Common Mode Impedance": "900Ω @ 100MHz",
          "Rated Current": "0.3A (DC)",
          "DC Resistance": "1.5Ω max per line",
          "Temperature Range": "-40°C to +125°C",
          "Package Size": "0805 (2.0mm x 1.25mm)",
          "Lines": "2 lines",
          "Rated Voltage": "50V DC"
        },
        features: [
          "High common mode impedance: 900Ω",
          "Compact 0805 package",
          "Two-line configuration",
          "Low differential mode impedance",
          "High self-resonant frequency",
          "AEC-Q200 qualified"
        ],
        applications: [
          "USB signal filtering",
          "HDMI interface protection",
          "DC power line filtering",
          "Audio signal conditioning",
          "General EMI suppression"
        ],
        faeReview: {
          "author": "Kevin Zhang",
          "title": "FAE - EMI/EMC",
          "content": "The ACM2012-900-2P-T002 is my standard recommendation for EMI filtering on USB and other high-speed data lines in consumer electronics. The 900Ω impedance at 100MHz provides good attenuation of common mode noise in the critical frequency range for EMC compliance testing. The tiny 0805 package is essential for space-constrained designs like smartphones and wearables. I've used this part successfully to resolve EMC issues in several products. The 0.3A rating is sufficient for USB data lines and low-power DC rails. For power lines, the 1.5Ω DCR is acceptable for low-current applications but may cause too much voltage drop for higher current rails. The AEC-Q200 qualification is a bonus for automotive infotainment applications.",
          "highlight": "Compact common mode choke ideal for portable electronics and high-speed interfaces"
        },
        alternativeParts: [
          {
            partNumber: "ACM2012-600-2P-T002",
            brand: "TDK",
            specifications: {
              "Impedance": "600Ω @ 100MHz",
              "Current": "0.4A"
            },
            comparison: {
              "Impedance": "600Ω < 900Ω (-33%)",
              "Current": "0.4A > 0.3A (+33%)",
              "Package": "Same 0805",
              "DCR": "Lower due to larger wire"
            },
            reason: "Lower impedance for higher current or less attenuation required",
            useCase: "Applications with higher current requirements or less stringent EMI requirements",
            link: "/tdk/products/inductors/acm2012-600-2p-t002.html"
          },
          {
            partNumber: "ACM2012-121-2P-T002",
            brand: "TDK",
            specifications: {
              "Impedance": "120Ω @ 100MHz",
              "Current": "0.5A"
            },
            comparison: {
              "Impedance": "120Ω < 900Ω (-87%)",
              "Current": "0.5A > 0.3A (+67%)",
              "Package": "Same 0805",
              "DCR": "Lower for higher current"
            },
            reason: "Lower impedance for power line applications",
            useCase: "DC power line filtering where high current and lower impedance are needed",
            link: "/tdk/products/inductors/acm2012-121-2p-t002.html"
          }
        ],
        companionParts: [
          {
            partNumber: "ACM2012-361-2P-T002",
            link: "/tdk/products/inductors/acm2012-361-2p-t002.html",
            description: "360Ω choke for different frequency range",
            category: "Inductors"
          },
          {
            partNumber: "C2012X7R1H104K085AA",
            link: "/tdk/products/ceramic-capacitors/c2012x7r1h104k085aa.html",
            description: "0.1µF capacitor for pi-filter configuration",
            category: "Ceramic Capacitors"
          },
          {
            partNumber: "MMZ2012R601",
            link: "/tdk/products/inductors/mmz2012r601.html",
            description: "Ferrite bead for additional high-frequency filtering",
            category: "Inductors"
          },
          {
            partNumber: "C2012C0G1H101J085AA",
            link: "/tdk/products/ceramic-capacitors/c2012c0g1h101j085aa.html",
            description: "100pF capacitor for high-frequency bypass",
            category: "Ceramic Capacitors"
          }
        ],
        faqs: [
          {
            question: "What is common mode impedance and how is it measured?",
            answer: "Common mode impedance is the impedance presented to signals that are in-phase on both lines relative to ground. It is measured by connecting both lines together and measuring the impedance to ground, typically using a network analyzer. The ACM2012-900-2P-T002 provides 900Ω impedance at 100MHz, meaning common mode noise at 100MHz sees 900Ω of impedance. This impedance varies with frequency - it's typically lower at low frequencies and peaks at the specified frequency (100MHz in this case). The impedance curve is provided in the datasheet. Higher common mode impedance provides better noise attenuation, but the impedance must be balanced against other requirements such as current rating and physical size.",
            decisionGuide: "Select common mode impedance based on frequency of noise to be filtered; verify with impedance curve in datasheet.",
            keywords: ["common mode impedance", "impedance measurement", "EMI filtering"]
          },
          {
            question: "What is the difference between common mode and differential mode filtering?",
            answer: "Common mode and differential mode are two types of noise that require different filtering approaches. Common mode noise appears equally on both lines relative to ground and flows in the same direction. Common mode chokes present high impedance to this noise while allowing differential signals to pass. Differential mode noise appears as voltage differences between the two lines and flows in opposite directions. Differential mode filtering typically uses series inductors or shunt capacitors. The ACM2012-900-2P-T002 primarily addresses common mode noise. For complete EMI filtering, both common mode and differential mode filters may be needed. A typical filter configuration uses a common mode choke with capacitors to ground (for common mode) and between lines (for differential mode).",
            "decisionGuide": "Identify noise type (common vs differential) and implement appropriate filtering; often both types are needed.",
            keywords: ["common mode noise", "differential mode", "EMI filter design"]
          },
          {
            question: "How does this common mode choke affect high-speed signals?",
            answer: "The ACM2012-900-2P-T002 is designed to have minimal impact on high-speed differential signals while providing effective common mode noise suppression. The key parameter is differential mode impedance, which is very low (essentially just the wire resistance of 1.5Ω) at signal frequencies. This means differential signals pass through with minimal attenuation and distortion. However, the parasitic capacitance between windings (typically 1-2pF) can affect very high-speed signals (above 1GHz). For USB 2.0 (480Mbps) and HDMI (up to 6Gbps), this choke provides effective filtering without significant signal degradation. For higher speed interfaces like USB 3.0 (5Gbps) or above, common mode chokes specifically designed for those frequencies should be used.",
            "decisionGuide": "Verify common mode choke specifications are compatible with signal bandwidth; use high-speed rated chokes for >1Gbps signals.",
            keywords: ["signal integrity", "high-speed signals", "differential impedance"]
          },
          {
            question: "Can multiple common mode chokes be cascaded for better filtering?",
            answer: "Yes, multiple common mode chokes can be cascaded (connected in series) to increase common mode attenuation. Each choke contributes its impedance, so two 900Ω chokes in series provide approximately 1800Ω of common mode impedance. However, the DCR also adds, so voltage drop and power loss increase. For example, two ACM2012-900-2P-T002 in series provide 1800Ω impedance but 3.0Ω total DCR. Cascading is useful when single chokes don't provide sufficient attenuation. Another approach is to use different impedance values to cover a broader frequency range - for example, a 120Ω choke for low frequencies and a 900Ω choke for high frequencies. The placement of chokes and capacitors in the filter topology also affects performance.",
            "decisionGuide": "Cascade chokes when additional attenuation is needed; consider DCR and frequency coverage in design.",
            keywords: ["cascaded filters", "multi-stage filtering", "attenuation improvement"]
          },
          {
            question: "What is the effect of temperature on common mode impedance?",
            answer: "The common mode impedance of the ACM2012-900-2P-T002 is relatively stable over temperature, but some variation occurs. The ferrite core material properties change with temperature, causing impedance to vary. Typically, impedance is highest at room temperature (25°C) and decreases slightly at temperature extremes. The variation is usually within ±20% over the rated temperature range (-40°C to +125°C). This stability is sufficient for most EMI filtering applications. The current rating also decreases at high temperatures due to increased DCR (copper resistance increases with temperature). At 125°C, the maximum allowable current may be reduced by 20-30% compared to 25°C. These temperature effects are accounted for in the AEC-Q200 qualification testing.",
            "decisionGuide": "Account for temperature effects in high-temperature applications; derate current at elevated temperatures.",
            keywords: ["temperature effects", "impedance stability", "high temperature operation"]
          }
        ]
      }
    ]
  }
];

// Add categories to products
products.categories.push(...additionalCategories);

// Save updated file
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log('✅ Added 3 more product categories to TDK products.json');
console.log('  - Aluminum Electrolytic Capacitors (2 products)');
console.log('  - Film Capacitors (2 products)');
console.log('  - Inductors and Coils (2 products)');
console.log(`Total categories: ${products.categories.length}`);
