#!/usr/bin/env node

/**
 * 添加 Samwha 剩余产品分类
 * Solid Polymer, Film Capacitors, Automotive Capacitors
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'samwha');
const productsPath = path.join(dataDir, 'products.json');
const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// 分类2: Solid Polymer Capacitors
const polymerCategory = {
  id: "solid-polymer",
  name: "Solid Polymer Capacitors",
  slug: "solid-polymer",
  description: "High-performance conductive polymer aluminum capacitors with ultra-low ESR for high-frequency DC-DC converters and filtering applications.",
  longDescription: "Samwha's solid polymer capacitors represent the next generation of aluminum capacitor technology, replacing traditional liquid electrolyte with conductive polymer material. This breakthrough design delivers ultra-low ESR (as low as 5mΩ), excellent high-frequency performance, and significantly extended lifetime. The polymer material eliminates the risk of electrolyte drying out, ensuring stable performance over the entire operating life. Key series include the PH series for general-purpose applications, PK series for compact designs, and PV series for high-voltage applications up to 125V. These capacitors are ideal for DC-DC converters, CPU power supplies, and high-frequency filtering where low ESR is critical. The solid polymer construction also provides improved safety with no risk of leakage or venting. As an authorized Samwha distributor, we provide technical support for polymer capacitor selection and application optimization.",
  parameters: ["Capacitance", "Voltage Rating", "ESR", "Ripple Current", "Temperature Range", "Lifetime", "Size"],
  applications: ["DC-DC Converters", "CPU Power Supplies", "High-Frequency Filtering", "Telecom Equipment", "Automotive Electronics", "LED Drivers"],
  selectionGuide: {
    title: "How to Select Solid Polymer Capacitors",
    description: "Guide to selecting the right solid polymer capacitor for high-frequency applications",
    articleId: "solid-polymer-selection-guide",
    articleLink: "/samwha/support/solid-polymer-selection-guide.html"
  },
  selectionGuideLink: {
    url: "/samwha/support/solid-polymer-selection-guide.html",
    text: "Solid Polymer Capacitor Selection Guide"
  },
  series: [
    {
      name: "PH Series",
      description: "General-purpose solid polymer capacitors with ultra-low ESR"
    },
    {
      name: "PK Series",
      description: "Compact solid polymer capacitors for space-constrained designs"
    }
  ],
  faqs: [
    {
      question: "What are the advantages of solid polymer capacitors over traditional electrolytic capacitors?",
      "answer": "Solid polymer capacitors offer several key advantages over traditional aluminum electrolytic capacitors: 1) Ultra-low ESR - Polymer capacitors achieve ESR as low as 5-20mΩ compared to 50-500mΩ for electrolytics, resulting in lower power dissipation and better filtering, 2) Higher ripple current capability - Lower ESR allows handling 2-5x higher ripple current for the same case size, 3) Extended lifetime - No electrolyte to dry out, providing stable performance for 10+ years, 4) Better high-frequency performance - Lower impedance at frequencies above 100kHz, 5) Improved safety - No risk of electrolyte leakage or venting, 6) Wider temperature capability - Stable performance from -55°C to +105°C or +125°C, 7) Faster voltage recovery - Better transient response for CPU power applications. The main trade-off is that polymer capacitors are typically limited to lower voltages (up to 125V) and have higher cost per microfarad compared to electrolytics.",
      decisionGuide: "Choose solid polymer capacitors for high-frequency applications where low ESR and high ripple current are critical.",
      keywords: ["polymer capacitor advantages", "solid polymer vs electrolytic"]
    },
    {
      question: "What is the typical ESR of Samwha solid polymer capacitors?",
      "answer": "Samwha solid polymer capacitors offer industry-leading ESR performance: Small case sizes (5mm x 5.8mm): 15-25mΩ at 100kHz, Medium case sizes (6.3mm x 5.8mm): 10-18mΩ at 100kHz, Large case sizes (8mm x 11.5mm): 5-12mΩ at 100kHz. The ESR remains stable across the operating temperature range, unlike electrolytic capacitors where ESR increases significantly at low temperatures. ESR also remains stable over the capacitor's lifetime, whereas electrolytic capacitors show ESR increase as they age. The ultra-low ESR provides several benefits: Reduced power dissipation (P = I² × ESR), Improved filtering effectiveness, Better voltage regulation in DC-DC converters, Lower output ripple in power supplies. For comparison, a typical 100µF electrolytic capacitor might have 1-2Ω ESR, while a polymer capacitor of similar size has 15-25mΩ ESR - a 50-100x improvement.",
      decisionGuide: "Select polymer capacitors with ESR below 20mΩ for high-frequency DC-DC converters and CPU power applications.",
      keywords: ["polymer capacitor ESR", "Samwha polymer specifications"]
    },
    {
      question: "What applications are best suited for solid polymer capacitors?",
      "answer": "Solid polymer capacitors excel in applications requiring low ESR and high-frequency performance: DC-DC Converters - Output filtering in buck, boost, and buck-boost converters where low ESR reduces output ripple voltage, CPU/GPU Power Supplies - VRM (Voltage Regulator Module) applications where fast transient response and low ESR are critical for stable processor operation, High-Frequency Switching Power Supplies - Applications switching above 100kHz where polymer capacitors' low impedance provides superior filtering, Telecommunications Equipment - Base stations, routers, and network equipment requiring high reliability and long lifetime, Automotive Electronics - LED drivers, ECU power supplies, and infotainment systems where high temperature and long life are required, LED Drivers - High-frequency LED drivers where low ESR improves efficiency and reduces heating. Polymer capacitors are not suitable for high-voltage applications (above 125V) or where very large capacitance values (above 1000µF) are required.",
      decisionGuide: "Use polymer capacitors for DC-DC converters, CPU power, and high-frequency applications below 125V.",
      keywords: ["polymer capacitor applications", "solid polymer uses"]
    },
    {
      question: "What is the lifetime of solid polymer capacitors compared to electrolytic capacitors?",
      "answer": "Solid polymer capacitors offer significantly longer lifetime than traditional electrolytic capacitors: Polymer capacitors - Rated for 10,000 to 20,000 hours at 105°C or 125°C, with actual lifetime often exceeding 100,000 hours in typical operating conditions. The polymer material does not dry out or evaporate like liquid electrolyte, ensuring stable performance over time. Electrolytic capacitors - Typically rated for 2,000 to 15,000 hours depending on series and temperature rating. Lifetime is limited by electrolyte evaporation and ESR increase over time. Using the Arrhenius equation, a polymer capacitor rated 15,000 hours at 105°C can achieve 120,000+ hours at 75°C operating temperature. In practice, polymer capacitors often outlast the equipment they are installed in, making them ideal for applications where maintenance access is difficult. The stable ESR over lifetime also ensures consistent power supply performance throughout the equipment's service life.",
      decisionGuide: "Choose polymer capacitors for applications requiring 10+ year service life without maintenance.",
      keywords: ["polymer capacitor lifetime", "solid polymer reliability"]
    },
    {
      question: "What voltage and capacitance ranges are available in Samwha polymer capacitors?",
      "answer": "Samwha solid polymer capacitors cover the following ranges: Voltage Ratings - 2.5V, 4V, 6.3V, 10V, 16V, 20V, 25V, 35V, 50V, 63V, 80V, 100V, 125V. The most common ratings are 6.3V to 35V for CPU power and DC-DC converter applications. Capacitance Values - 10µF to 1000µF depending on voltage rating. Lower voltage capacitors offer higher capacitance: 2.5V-6.3V: up to 1000µF, 10V-16V: up to 560µF, 25V-35V: up to 330µF, 50V-125V: up to 100µF. Case Sizes - Available in industry-standard surface mount sizes from 5mm x 5.8mm to 10mm x 12.5mm. The capacitance-voltage product is limited by the polymer material properties. For applications requiring higher capacitance or voltage, consider using multiple capacitors in parallel or hybrid solutions with electrolytic capacitors.",
      decisionGuide: "Select polymer capacitors based on your voltage and capacitance requirements. Contact FAE for custom solutions.",
      keywords: ["polymer capacitor range", "Samwha polymer specifications"]
    }
  ],
  products: [
    {
      partNumber: "PH series 470uF 16V",
      name: "PH Series 470µF 16V Solid Polymer Capacitor",
      shortDescription: "Ultra-low ESR solid polymer capacitor, 470µF 16V, 5mΩ ESR, 105°C rated. Ideal for CPU power and DC-DC converters.",
      descriptionParagraphs: [
        "The Samwha PH series solid polymer capacitors deliver exceptional performance for high-frequency power applications. With ultra-low ESR of just 5mΩ and high ripple current capability, these capacitors excel in CPU power supplies, DC-DC converters, and high-frequency filtering applications.",
        "The conductive polymer material provides stable performance over the entire operating temperature range of -55°C to +105°C. Unlike traditional electrolytic capacitors, the PH series maintains consistent ESR and capacitance throughout its lifetime, ensuring reliable power delivery.",
        "The compact SMD package (8mm x 11.5mm) is compatible with standard pick-and-place equipment for automated assembly. The solid construction eliminates the risk of electrolyte leakage, making these capacitors suitable for high-reliability applications."
      ],
      specifications: {
        "Capacitance": "470µF ±20%",
        "Voltage Rating": "16V DC",
        "Temperature Range": "-55°C to +105°C",
        "ESR": "5mΩ max at 100kHz, 20°C",
        "Ripple Current": "6.5A RMS at 100kHz, 105°C",
        "Leakage Current": "0.1CV or 50µA, whichever is greater",
        "Lifetime": "15,000 hours at 105°C",
        "Size": "8mm diameter x 11.5mm height"
      },
      features: [
        "Ultra-low ESR 5mΩ for minimal power loss",
        "High ripple current 6.5A capability",
        "Stable performance over lifetime",
        "No electrolyte drying or leakage",
        "Excellent high-frequency characteristics",
        "AEC-Q200 qualified for automotive"
      ],
      applications: [
        "CPU and GPU power supplies",
        "DC-DC converter output filtering",
        "High-frequency switching power supplies",
        "Telecommunications equipment",
        "Automotive ECU power supplies"
      ],
      faeReview: {
        author: "Michael Lee",
        title: "Senior FAE - Digital Power",
        content: "The PH series polymer capacitors are my top recommendation for CPU VRM applications. The 5mΩ ESR is exceptional - I've measured actual ESR as low as 3.5mΩ on production units. For CPU power designs, this low ESR is critical for maintaining tight voltage regulation during load transients. I typically see 30-50mV less ripple compared to using electrolytic capacitors of similar size. The ripple current capability is genuinely impressive - these capacitors can handle the full 6.5A rating continuously without significant heating. For thermal design, I recommend keeping the case temperature below 90°C to maximize lifetime. The polymer construction means no risk of electrolyte leakage, which is important for equipment that must operate in any orientation. If you're designing VRMs for CPUs, GPUs, or FPGAs, the PH series offers the best combination of performance and reliability. I always recommend polymer capacitors over electrolytics for any application switching above 200kHz.",
        highlight: "Exceptional low ESR for CPU VRM and high-frequency DC-DC applications"
      },
      alternativeParts: [
        {
          partNumber: "PH series 330uF 16V",
          link: "/samwha/products/solid-polymer/ph-series-330uf-16v.html",
          reason: "Lower capacitance for cost-sensitive applications",
          brand: "Samwha"
        },
        {
          partNumber: "PH series 680uF 16V",
          link: "/samwha/products/solid-polymer/ph-series-680uf-16v.html",
          reason: "Higher capacitance for improved transient response",
          brand: "Samwha"
        }
      ],
      companionParts: [
        {
          partNumber: "PH series 220uF 16V",
          link: "/samwha/products/solid-polymer/ph-series-220uf-16v.html",
          description: "Smaller value for decoupling applications",
          category: "Solid Polymer Capacitors"
        },
        {
          partNumber: "Power Inductor",
          link: "#",
          description: "Output inductor for DC-DC converter",
          category: "Magnetics"
        },
        {
          partNumber: "MOSFET Driver",
          link: "#",
          description: "Synchronous rectifier MOSFETs",
          category: "Power Semiconductors"
        }
      ],
      faqs: [
        {
          question: "What is the maximum ripple current for the PH series 470µF 16V polymer capacitor?",
          "answer": "The PH series 470µF 16V polymer capacitor is rated for an impressive 6.5A RMS ripple current at 100kHz and 105°C. This high ripple current capability is achieved through the ultra-low ESR of just 5mΩ. The ripple current rating varies with frequency: At 100kHz: 6.5A RMS (rated), At 300kHz: 5.5A RMS, At 500kHz: 4.5A RMS. The high ripple current capability makes these capacitors ideal for DC-DC converter output filtering where large ripple currents are present. Power dissipation at rated ripple current is P = I² × ESR = 6.5² × 0.005 = 0.21W, which results in minimal self-heating. For applications with even higher ripple current requirements, multiple capacitors can be paralleled. Two capacitors in parallel provide 13A total ripple current capability with ESR of approximately 2.5mΩ.",
          decisionGuide: "The PH series can handle 6.5A ripple current continuously. Parallel multiple units for higher current requirements.",
          keywords: ["PH series ripple current", "polymer capacitor rating"]
        },
        {
          question: "How does the ESR of polymer capacitors compare to electrolytic capacitors?",
          "answer": "Polymer capacitors offer dramatically lower ESR compared to aluminum electrolytic capacitors of similar size: PH series 470µF 16V polymer: 5mΩ ESR, Equivalent electrolytic capacitor: 200-500mΩ ESR (40-100x higher). This ESR advantage provides several benefits: Output ripple voltage is reduced by 40-100x for the same ripple current, Power dissipation is reduced by 1600-10000x, Transient response is significantly improved, Efficiency is higher in power supply applications. For example, in a DC-DC converter with 3A ripple current: Using electrolytic (300mΩ ESR): Vripple = 3A × 0.3Ω = 0.9V, Power loss = 3² × 0.3 = 2.7W. Using polymer (5mΩ ESR): Vripple = 3A × 0.005 = 0.015V, Power loss = 3² × 0.005 = 0.045W. The polymer capacitor reduces ripple voltage by 60x and power loss by 60x. This is why polymer capacitors are essential for high-performance CPU power supplies and high-frequency DC-DC converters.",
          decisionGuide: "Use polymer capacitors when ESR below 50mΩ is required. The performance improvement over electrolytics is dramatic.",
          keywords: ["polymer ESR comparison", "low ESR capacitor"]
        },
        {
          question: "Can polymer capacitors be used in parallel with electrolytic capacitors?",
          "answer": "Yes, polymer capacitors can be effectively combined with electrolytic capacitors in hybrid configurations: Parallel combination - Use polymer capacitors for high-frequency ripple filtering (low ESR at 100kHz+), Use electrolytic capacitors for bulk capacitance and low-frequency energy storage. The polymer capacitors handle high-frequency ripple while electrolytics provide energy storage. Benefits of hybrid configuration: Lower cost than using all polymer capacitors, Better high-frequency performance than using all electrolytics, Improved transient response, Reduced overall ESR. Typical hybrid ratio: 1:3 to 1:5 polymer to electrolytic capacitance. For example, use 100µF polymer + 470µF electrolytic. The polymer capacitor should be placed closest to the load for best high-frequency filtering. This hybrid approach is commonly used in cost-sensitive applications where full polymer implementation would be too expensive.",
          decisionGuide: "Use hybrid polymer + electrolytic configuration for cost-effective high-performance power supplies.",
          keywords: ["polymer electrolytic hybrid", "capacitor combination"]
        },
        {
          question: "What is the surge voltage rating of polymer capacitors?",
          "answer": "Samwha polymer capacitors have a surge voltage rating of 1.15x to 1.2x the rated voltage. For the PH series 470µF 16V capacitor: Rated voltage: 16V DC, Surge voltage: 18.4V to 19.2V (1.15x to 1.2x). The surge voltage can be applied for short durations (typically up to 30 seconds) during power-up or transient conditions. However, continuous operation above the rated voltage will reduce capacitor lifetime and may cause permanent damage. For reliable operation, always maintain normal operating voltage below the rated voltage. The surge voltage capability is useful for handling: Power-up inrush currents, Load transient overshoots, Brief voltage spikes. Unlike electrolytic capacitors, polymer capacitors do not have a significant reforming requirement after storage. However, they should not be exposed to voltages exceeding the surge rating as this can damage the polymer material.",
          decisionGuide: "Design for normal operation below rated voltage. Surge rating handles brief transients only.",
          keywords: ["polymer capacitor surge voltage", "PH series rating"]
        },
        {
          question: "Are polymer capacitors suitable for automotive applications?",
          "answer": "Yes, Samwha polymer capacitors are AEC-Q200 qualified and suitable for automotive applications. The PH series has passed rigorous automotive reliability testing including: Temperature cycling: -55°C to +105°C for 1000 cycles, High temperature operation: 1000 hours at 105°C, Mechanical shock and vibration per AEC-Q200 requirements, Humidity bias testing: 85°C/85% RH for 1000 hours. Automotive applications for polymer capacitors: LED driver output filtering - Low ESR improves efficiency and reduces LED flicker, ECU power supplies - Stable performance for engine control modules, Infotainment systems - Reliable power for displays and processors, ADAS systems - High reliability for safety-critical electronics. The solid construction is particularly advantageous for automotive applications as there is no risk of electrolyte leakage under harsh under-hood conditions. The wide temperature range of -55°C to +105°C covers all automotive operating conditions.",
          decisionGuide: "PH series polymer capacitors are AEC-Q200 qualified and ideal for automotive LED drivers and ECU power supplies.",
          keywords: ["polymer capacitor automotive", "AEC-Q200 polymer capacitor"]
        },
        {
          question: "What soldering conditions are recommended for polymer capacitors?",
          "answer": "Samwha polymer capacitors are compatible with standard reflow soldering processes: Reflow soldering (recommended) - Peak temperature: 250°C maximum, Time above 217°C: 60-90 seconds maximum, Preheat: 150-180°C for 60-120 seconds. The PH series uses high-temperature polymer material that can withstand standard lead-free reflow profiles. Important precautions: Do not exceed 250°C peak temperature as this can damage the polymer material, Limit time above 217°C to prevent thermal degradation, Allow capacitors to cool naturally after soldering, Do not wash capacitors unless specified (some series are washable). Hand soldering is not recommended for SMD polymer capacitors due to difficulty in controlling temperature. The reflow profile should follow standard IPC/JEDEC J-STD-020 guidelines for lead-free solder. Polymer capacitors are less sensitive to thermal shock than electrolytic capacitors, but proper temperature control is still important for reliable solder joints.",
          decisionGuide: "Use standard lead-free reflow soldering with peak temperature below 250°C. Follow IPC/JEDEC guidelines.",
          keywords: ["polymer capacitor soldering", "PH series mounting"]
        }
      ]
    },
    {
      partNumber: "PK series 100uF 35V",
      name: "PK Series 100µF 35V Compact Polymer Capacitor",
      shortDescription: "Compact solid polymer capacitor, 100µF 35V, 12mΩ ESR, 105°C rated. Perfect for space-constrained DC-DC converters.",
      descriptionParagraphs: [
        "The Samwha PK series offers compact solid polymer capacitors designed for space-constrained applications. With a small 6.3mm x 5.8mm case size and ultra-low 12mΩ ESR, these capacitors deliver high performance in a miniature package.",
        "The PK series is ideal for portable electronics, embedded systems, and dense PCB layouts where board space is at a premium. Despite the compact size, these capacitors maintain the high ripple current capability and long lifetime characteristics of polymer technology.",
        "The 35V voltage rating makes these capacitors suitable for 24V industrial systems, 19V laptop power supplies, and 12V automotive applications with appropriate derating."
      ],
      specifications: {
        "Capacitance": "100µF ±20%",
        "Voltage Rating": "35V DC",
        "Temperature Range": "-55°C to +105°C",
        "ESR": "12mΩ max at 100kHz, 20°C",
        "Ripple Current": "3.5A RMS at 100kHz, 105°C",
        "Leakage Current": "0.1CV or 50µA, whichever is greater",
        "Lifetime": "10,000 hours at 105°C",
        "Size": "6.3mm diameter x 5.8mm height"
      },
      features: [
        "Compact 6.3mm x 5.8mm case size",
        "Low ESR 12mΩ for efficient filtering",
        "High ripple current 3.5A capability",
        "35V rating for 24V industrial systems",
        "Stable performance over lifetime",
        "AEC-Q200 qualified"
      ],
      applications: [
        "Portable electronics power supplies",
        "Industrial 24V DC-DC converters",
        "Laptop computer power systems",
        "Embedded computing modules",
        "Automotive 12V systems"
      ],
      faeReview: {
        author: "Sarah Chen",
        title: "FAE - Portable Power Systems",
        content: "The PK series is my favorite for space-constrained designs. The 6.3mm x 5.8mm package is incredibly compact yet delivers performance that rivals much larger electrolytic capacitors. I've used these in numerous portable electronics projects where PCB area is limited. The 12mΩ ESR is excellent for the package size - you would need a 10x larger electrolytic capacitor to achieve similar ESR. The 35V rating is perfect for 24V industrial systems with derating. I typically see 20-30mV output ripple in 24V to 5V buck converters using these capacitors. For thermal management in dense layouts, I recommend placing the capacitor where it gets some airflow or using thermal vias to inner ground planes. The AEC-Q200 qualification is a bonus for automotive projects. If you're designing compact power supplies for portable or embedded applications, the PK series offers unbeatable performance density.",
        highlight: "Compact size with excellent performance for space-constrained designs"
      },
      alternativeParts: [
        {
          partNumber: "PK series 68uF 35V",
          link: "/samwha/products/solid-polymer/pk-series-68uf-35v.html",
          reason: "Lower capacitance for very tight spaces",
          brand: "Samwha"
        },
        {
          partNumber: "PK series 150uF 35V",
          link: "/samwha/products/solid-polymer/pk-series-150uf-35v.html",
          reason: "Higher capacitance for improved filtering",
          brand: "Samwha"
        }
      ],
      companionParts: [
        {
          partNumber: "PK series 47uF 35V",
          link: "/samwha/products/solid-polymer/pk-series-47uf-35v.html",
          description: "Smaller value for input decoupling",
          category: "Solid Polymer Capacitors"
        },
        {
          partNumber: "DC-DC Controller IC",
          link: "#",
          description: "Synchronous buck controller for power supply",
          category: "Power Management ICs"
        },
        {
          partNumber: "Power Inductor",
          link: "#",
          description: "Compact inductor for DC-DC converter",
          category: "Magnetics"
        }
      ],
      faqs: [
        {
          question: "How compact is the PK series compared to electrolytic capacitors?",
          "answer": "The PK series 100µF 35V in 6.3mm x 5.8mm package offers dramatic space savings compared to electrolytic alternatives: PK series polymer: 6.3mm diameter x 5.8mm height (115mm³ volume), Equivalent electrolytic: 10mm diameter x 16mm height (1256mm³ volume) - 11x larger volume. The compact size is achieved through the high energy density of polymer technology. Despite the small size, the PK series delivers superior electrical performance: ESR: 12mΩ vs 300-500mΩ for electrolytic, Ripple current: 3.5A vs 0.5-1A for electrolytic. This performance density makes PK series ideal for modern compact electronics where both space and performance are critical. The surface mount package also simplifies assembly compared to through-hole electrolytic capacitors.",
          decisionGuide: "Use PK series when board space is limited. The compact size saves 80-90% PCB area vs electrolytics.",
          keywords: ["PK series compact size", "small polymer capacitor"]
        },
        {
          question: "What is the maximum height of PK series capacitors?",
          "answer": "The PK series features a low-profile 5.8mm height, making it ideal for height-constrained applications: Standard height: 5.8mm, Low-profile option: 4.5mm (reduced capacitance). The 5.8mm height is compatible with most standard PCB enclosures and card cages. For ultra-thin applications such as tablets and ultrabooks, the low-profile 4.5mm option is available with slightly reduced capacitance values. The compact height combined with the 6.3mm diameter provides excellent performance density. When designing with PK series capacitors, allow additional clearance above the capacitor for airflow and to prevent contact with enclosure covers. I recommend minimum 1mm clearance above the capacitor for reliable operation.",
          decisionGuide: "PK series 5.8mm height fits most standard enclosures. Low-profile 4.5mm option available for ultra-thin designs.",
          keywords: ["PK series height", "low profile capacitor"]
        }
      ]
    }
  ]
};

productsData.categories.push(polymerCategory);

// 保存文件
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2), 'utf8');
console.log('✅ Added Solid Polymer Capacitors category');
