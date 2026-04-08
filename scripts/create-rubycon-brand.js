const fs = require('fs');
const path = require('path');

const brandDir = path.join(__dirname, '..', 'data', 'rubycon');

// Create brand.json
const brandData = {
  "name": "rubycon",
  "displayName": "Rubycon Corporation",
  "logo": "/assets/brands/rubycon/logo.svg",
  "tagline": "Capacitor Solutions for a Sustainable Future",
  "description": "Rubycon Corporation is a leading Japanese manufacturer of aluminum electrolytic capacitors, film capacitors, and power supply modules. Founded in 1952, Rubycon has established itself as a trusted partner for high-quality capacitor solutions serving automotive, industrial, consumer electronics, and renewable energy markets worldwide.",
  "longDescription": "Rubycon Corporation, established in 1952 in Tokyo, Japan, has grown to become one of the world's premier manufacturers of aluminum electrolytic capacitors. With over 70 years of expertise in capacitor technology, Rubycon offers an extensive product portfolio including radial lead, snap-in, screw terminal, and surface-mount aluminum electrolytic capacitors, as well as film capacitors and power supply modules. The company's commitment to quality is demonstrated through its comprehensive quality management systems and environmental initiatives. Rubycon's products are renowned for their high reliability, long operational life, and excellent performance characteristics, making them the preferred choice for demanding applications in automotive electronics, industrial automation, telecommunications, and renewable energy systems. The company's global manufacturing network ensures consistent supply and competitive pricing while maintaining the highest quality standards.",
  "coreProducts": [
    {
      "name": "Radial Lead Aluminum Electrolytic Capacitors",
      "description": "High-performance radial lead capacitors for general-purpose and high-temperature applications with extended lifetime ratings.",
      "keywords": ["radial capacitor", "aluminum electrolytic", "leaded capacitor"]
    },
    {
      "name": "Snap-in Aluminum Electrolytic Capacitors",
      "description": "High-capacitance snap-in capacitors for power supplies, inverters, and industrial applications requiring high ripple current capability.",
      "keywords": ["snap-in capacitor", "power capacitor", "high capacitance"]
    },
    {
      "name": "Screw Terminal Aluminum Electrolytic Capacitors",
      "description": "Large-can screw terminal capacitors for high-voltage applications, energy storage, and heavy-duty industrial equipment.",
      "keywords": ["screw terminal capacitor", "large can capacitor", "high voltage"]
    },
    {
      "name": "Surface Mount Aluminum Electrolytic Capacitors",
      "description": "Compact SMD capacitors for space-constrained consumer electronics and portable devices.",
      "keywords": ["SMD capacitor", "surface mount", "compact capacitor"]
    }
  ],
  "industries": [
    {
      "name": "Automotive Electronics",
      "description": "AEC-Q200 qualified capacitors for engine control units, LED lighting, ADAS systems, and electric vehicle applications.",
      "keywords": ["automotive capacitor", "AEC-Q200", "EV applications"]
    },
    {
      "name": "Industrial Equipment",
      "description": "High-reliability capacitors for motor drives, power supplies, welding equipment, and industrial automation systems.",
      "keywords": ["industrial capacitor", "motor drive", "power supply"]
    },
    {
      "name": "Renewable Energy",
      "description": "Long-life capacitors for solar inverters, wind turbine power electronics, and energy storage systems.",
      "keywords": ["solar inverter", "wind turbine", "renewable energy"]
    },
    {
      "name": "Consumer Electronics",
      "description": "Compact, high-performance capacitors for TVs, monitors, audio equipment, and home appliances.",
      "keywords": ["consumer electronics", "TV capacitor", "appliance"]
    }
  ],
  "certifications": [
    {
      "name": "IATF 16949",
      "description": "Automotive quality management system certification for automotive component manufacturing."
    },
    {
      "name": "ISO 9001",
      "description": "International quality management system certification ensuring consistent product quality."
    },
    {
      "name": "ISO 14001",
      "description": "Environmental management system certification demonstrating commitment to sustainability."
    },
    {
      "name": "AEC-Q200",
      "description": "Automotive Electronics Council qualification for passive components used in automotive applications."
    }
  ],
  "yearFounded": 1952,
  "headquarters": "Tokyo, Japan",
  "employees": "Over 5,000 worldwide",
  "website": "https://www.rubycon.co.jp",
  "distributorStatus": "Authorized Distributor",
  "seoTitle": "Rubycon Capacitors | Authorized Distributor | Aluminum Electrolytic",
  "seoDescription": "Authorized distributor of Rubycon aluminum electrolytic capacitors. Technical support, fast delivery, and comprehensive inventory for automotive, industrial, and consumer applications.",
  "seoKeywords": [
    "Rubycon distributor",
    "Rubycon capacitor selection",
    "Rubycon aluminum electrolytic distributor",
    "Rubycon snap-in capacitor selection guide",
    "Rubycon radial capacitor distributor",
    "Rubycon automotive capacitor selection"
  ],
  "faqs": [
    {
      "question": "Is LiTong an authorized distributor of Rubycon products?",
      "answer": "Yes, LiTong Electronics is an authorized distributor of Rubycon Corporation. We maintain direct relationships with Rubycon's manufacturing facilities and provide genuine Rubycon products with full manufacturer warranty. Our authorization covers the complete range of Rubycon aluminum electrolytic capacitors including radial lead, snap-in, screw terminal, and surface-mount types. We offer technical support, application engineering assistance, and inventory stocking programs for high-volume customers. All Rubycon products supplied by LiTong are traceable and backed by Rubycon's quality guarantee.",
      "decisionGuide": "Contact our sales team to verify our distributor credentials or request a quotation for your Rubycon capacitor requirements.",
      "keywords": ["Rubycon authorized distributor", "Rubycon genuine products", "Rubycon warranty"]
    },
    {
      "question": "What makes Rubycon capacitors different from other brands?",
      "answer": "Rubycon distinguishes itself through several key advantages developed over 70 years of capacitor manufacturing. Their proprietary electrolyte formulations provide extended operational life and excellent high-temperature performance. Rubycon's advanced sealing technology minimizes electrolyte evaporation, ensuring long-term reliability. The company's stringent quality control processes, including 100% testing of key parameters, result in consistently high-quality products. Rubycon offers one of the industry's broadest capacitance and voltage ranges, with specialized series for automotive, high-ripple, and long-life applications. Their global manufacturing footprint and vertical integration ensure supply stability and competitive pricing while maintaining Japanese quality standards.",
      "decisionGuide": "Request samples of Rubycon capacitors for evaluation in your application, or schedule a technical consultation with our FAE team to compare specifications.",
      "keywords": ["Rubycon advantages", "Rubycon quality", "Rubycon technology"]
    },
    {
      "question": "How do I select the right Rubycon capacitor for my application?",
      "answer": "Selecting the appropriate Rubycon capacitor requires evaluating several key parameters. First, determine the required capacitance value based on your circuit requirements. Next, select a voltage rating with appropriate derating - typically 20-30% above your maximum operating voltage. Consider the operating temperature range and select a series rated for your application's temperature extremes. For switching power supplies, calculate the ripple current requirements and select a capacitor with adequate ripple current rating and thermal characteristics. Lifetime requirements are critical - Rubycon offers standard, long-life, and ultra-long-life series. Physical constraints such as size, mounting type (radial, snap-in, screw terminal), and lead spacing must also be considered. Our FAE team can assist with detailed calculations and selection guidance.",
      "decisionGuide": "Use our online selection tools or contact our FAE team with your application specifications for personalized component recommendations.",
      "keywords": ["Rubycon capacitor selection", "capacitor selection guide", "how to select capacitors"]
    },
    {
      "question": "What industries does Rubycon primarily serve?",
      "answer": "Rubycon serves a diverse range of industries with specialized capacitor solutions. The automotive sector is a major market, with Rubycon providing AEC-Q200 qualified capacitors for engine control units, LED lighting systems, ADAS, and electric vehicle powertrains. Industrial automation and power electronics represent key markets, where Rubycon's high-reliability capacitors enable efficient motor drives, power supplies, and welding equipment. The renewable energy sector relies on Rubycon's long-life capacitors for solar inverters and wind turbine power electronics. Consumer electronics, including televisions, monitors, audio equipment, and home appliances, utilize Rubycon's compact, high-performance capacitors. Telecommunications infrastructure also benefits from Rubycon's power supply components.",
      "decisionGuide": "Explore our Rubycon solutions section to find application-specific component recommendations for your industry.",
      "keywords": ["Rubycon automotive", "Rubycon industrial", "Rubycon applications"]
    },
    {
      "question": "What are the benefits of purchasing Rubycon products through LiTong?",
      "answer": "Purchasing Rubycon products through LiTong Electronics provides multiple advantages. As an authorized distributor, we guarantee genuine Rubycon components with full manufacturer warranty and traceability. Our technical team includes experienced FAEs who can provide application support, component selection guidance, and design reviews specifically for Rubycon products. We maintain strategic inventory of popular Rubycon series, enabling fast delivery for urgent requirements. Our value-added services include kitting, programming, and custom packaging. For high-volume customers, we offer flexible scheduling agreements and demand forecasting support. LiTong's quality management system ensures proper handling and storage of all Rubycon components according to manufacturer specifications, preserving their long operational life.",
      "decisionGuide": "Contact our sales team to discuss your Rubycon capacitor requirements and learn about our stocking programs and technical support services.",
      "keywords": ["Rubycon distributor benefits", "LiTong Rubycon support", "Rubycon technical support"]
    },
    {
      "question": "Does Rubycon offer automotive-qualified capacitors?",
      "answer": "Yes, Rubycon offers an extensive portfolio of automotive-qualified aluminum electrolytic capacitors. Their automotive-grade capacitors are qualified to AEC-Q200 standards and are suitable for critical automotive applications including engine control units, safety systems, LED lighting, and ADAS. Rubycon's automotive capacitors feature extended temperature ranges up to 150°C, enhanced vibration resistance, and long operational life required by automotive applications. All automotive-qualified capacitors undergo rigorous testing including temperature cycling, mechanical shock, and high-temperature operational life testing. Rubycon's IATF 16949 certification ensures consistent quality in automotive component manufacturing. The company provides comprehensive PPAP documentation support for automotive customers.",
      "decisionGuide": "Filter our Rubycon product listings by automotive qualification, or contact our automotive FAE specialist for component recommendations.",
      "keywords": ["Rubycon automotive grade", "Rubycon AEC-Q200", "automotive capacitor"]
    },
    {
      "question": "What is the typical lifetime of Rubycon capacitors?",
      "answer": "Rubycon capacitor lifetime varies by series and operating conditions. Standard series typically offer 2,000-5,000 hours at rated temperature (usually 85°C or 105°C). Long-life series such as the YXF and YXJ provide 10,000-12,000 hours at 105°C. Ultra-long-life series can achieve 15,000-20,000 hours at 105°C. Lifetime follows the Arrhenius equation - approximately doubling for every 10°C decrease in operating temperature. For example, a capacitor rated for 10,000 hours at 105°C can achieve 40,000 hours at 85°C and 160,000 hours at 65°C. Voltage derating also extends lifetime - operating at 80% of rated voltage typically doubles the expected life. Rubycon provides detailed lifetime calculation tools and application support.",
      "decisionGuide": "Apply voltage derating and thermal management to maximize capacitor lifetime in your application.",
      "keywords": ["Rubycon capacitor lifetime", "capacitor life expectancy", "Rubycon reliability"]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'brand.json'), JSON.stringify(brandData, null, 2), 'utf8');
console.log('Created brand.json');

// Create products.json (simplified version - will be expanded)
const productsData = {
  "seoTitle": "Rubycon Capacitors | Product Catalog | Authorized Distributor",
  "seoDescription": "Complete catalog of Rubycon aluminum electrolytic capacitors. Radial lead, snap-in, screw terminal, and SMD types. Technical specifications and selection guide.",
  "seoKeywords": [
    "Rubycon capacitor distributor",
    "Rubycon aluminum electrolytic selection",
    "Rubycon snap-in capacitor selection guide",
    "Rubycon radial capacitor distributor"
  ],
  "faqs": [
    {
      "question": "What types of aluminum electrolytic capacitors does Rubycon manufacture?",
      "answer": "Rubycon manufactures a comprehensive range of aluminum electrolytic capacitors for diverse applications. Their radial lead capacitors are available in standard, high-temperature, and long-life series for general-purpose applications. Snap-in capacitors provide high capacitance values for power supplies and industrial equipment. Screw terminal capacitors are designed for high-voltage, high-capacitance applications such as energy storage and heavy-duty industrial systems. Surface-mount capacitors offer compact solutions for consumer electronics and space-constrained designs. Rubycon also produces specialized series including low-impedance, high-ripple current, and automotive-grade capacitors. Each product line is optimized for specific applications with tailored electrolyte formulations and construction techniques.",
      "decisionGuide": "Browse our product categories below to explore Rubycon's complete capacitor portfolio, or contact our FAE team for application-specific recommendations.",
      "keywords": ["Rubycon capacitor types", "aluminum electrolytic capacitors", "Rubycon product range"]
    },
    {
      "question": "How do I select the right Rubycon capacitor series?",
      "answer": "Selecting the appropriate Rubycon capacitor series requires understanding your application requirements. For general-purpose applications at moderate temperatures, the YXF series offers excellent value with 105°C rating and 10,000-hour life. For high-temperature applications up to 150°C, the BXA automotive series is recommended. High-ripple current applications benefit from the ZLH low-impedance series. For ultra-long life requirements, the YXJ series provides 12,000+ hours at 105°C. Snap-in applications requiring high capacitance should consider the USF or USG series. Consider voltage rating, capacitance value, temperature range, ripple current, lifetime requirements, and physical size when selecting. Rubycon's datasheets provide detailed specifications to guide your selection.",
      "decisionGuide": "Use our online selection tools or contact our FAE team with your application specifications for personalized series recommendations.",
      "keywords": ["Rubycon series selection", "capacitor series guide", "how to choose Rubycon"]
    },
    {
      "question": "What are the key differences between Rubycon capacitor series?",
      "answer": "Rubycon's capacitor series are differentiated by their intended applications and performance characteristics. The YXF series is a general-purpose 105°C rated capacitor with 10,000-hour life, suitable for consumer and industrial applications. The YXJ series offers extended 12,000-hour life for applications requiring longer operational life. The BXA series is specifically designed for automotive applications with 150°C rating and AEC-Q200 qualification. The ZLH series features low impedance and high ripple current capability for switching power supplies. The USF and USG series are snap-in capacitors with high capacitance values for industrial power applications. Each series uses optimized electrolyte formulations and construction techniques to deliver targeted performance characteristics.",
      "decisionGuide": "Compare series specifications in our product tables, or contact our FAE team for series selection guidance based on your requirements.",
      "keywords": ["Rubycon series comparison", "YXF vs YXJ", "Rubycon capacitor differences"]
    },
    {
      "question": "Does Rubycon offer AEC-Q200 qualified capacitors for automotive?",
      "answer": "Yes, Rubycon offers a comprehensive portfolio of AEC-Q200 qualified aluminum electrolytic capacitors specifically designed for automotive applications. The BXA series is rated for 150°C operation and qualified to AEC-Q200 standards, making it suitable for under-hood applications. These capacitors undergo rigorous qualification testing including temperature cycling, mechanical shock, vibration, and high-temperature operational life testing. Rubycon's automotive capacitors feature enhanced reliability characteristics required by automotive OEMs. The company provides comprehensive PPAP documentation and traceability for automotive customers. All automotive-qualified capacitors are manufactured under IATF 16949 quality management systems.",
      "decisionGuide": "Filter our product listings by automotive qualification, or contact our automotive FAE specialist for component recommendations.",
      "keywords": ["Rubycon automotive grade", "Rubycon AEC-Q200", "automotive capacitor"]
    },
    {
      "question": "What is the typical lead time for Rubycon capacitors?",
      "answer": "Lead times for Rubycon capacitors vary based on product series, capacitance/voltage ratings, and market demand. Standard radial lead capacitors in popular values typically have lead times of 8-12 weeks. Snap-in capacitors generally range from 10-16 weeks depending on specifications. Specialized series such as automotive-grade or high-temperature capacitors may have longer lead times due to additional testing and qualification requirements. LiTong maintains strategic inventory of high-demand Rubycon series to support urgent requirements. For large volume orders, we recommend discussing demand forecasting and scheduling agreements with our sales team to ensure continuous supply.",
      "decisionGuide": "Contact our sales team with your forecasted volumes and delivery requirements to discuss inventory programs and scheduling agreements.",
      "keywords": ["Rubycon lead time", "Rubycon delivery", "Rubycon inventory"]
    }
  ],
  "categories": [
    {
      "id": "radial-lead-capacitors",
      "name": "Radial Lead Capacitors",
      "slug": "radial-lead-capacitors",
      "description": "High-performance radial lead aluminum electrolytic capacitors for general-purpose and high-temperature applications.",
      "longDescription": "Rubycon's radial lead aluminum electrolytic capacitors represent the industry's most comprehensive range of through-hole capacitors for diverse applications. From compact 5mm diameter units for consumer electronics to large 18mm diameter capacitors for industrial equipment, Rubycon offers solutions for every need. The YXF series provides general-purpose 105°C rated capacitors with 10,000-hour life, ideal for consumer and industrial applications. For extended life requirements, the YXJ series offers 12,000-hour rated capacitors. The BXA series is specifically designed for automotive applications with 150°C rating and AEC-Q200 qualification. The ZLH series features low impedance and high ripple current capability for switching power supplies. All radial lead capacitors feature Rubycon's advanced sealing technology to minimize electrolyte evaporation and ensure long-term reliability.",
      "series": [
        "YXF Series - 105C, 10000 hours",
        "YXJ Series - 105C, 12000 hours",
        "BXA Series - 150C Automotive",
        "ZLH Series - Low Impedance"
      ],
      "parameters": ["Capacitance", "Voltage Rating", "Temperature Range", "Lifetime", "Ripple Current"],
      "selectionGuide": "Select YXF for general purpose, YXJ for extended life, BXA for automotive, ZLH for high ripple current.",
      "selectionGuideLink": {
        "url": "/rubycon/support/radial-capacitor-selection-guide.html",
        "text": "View Radial Capacitor Selection Guide"
      },
      "faqs": [
        {
          "question": "What is the difference between YXF and YXJ series?",
          "answer": "YXF and YXJ are both 105C rated radial lead capacitors with similar electrical characteristics. The primary difference is operational lifetime: YXF is rated for 10,000 hours at 105C while YXJ extends this to 12,000 hours. YXJ uses an enhanced electrolyte formulation that provides longer life while maintaining similar size and cost. Both series are suitable for general-purpose applications, but YXJ is preferred for applications requiring extended reliability or operating in challenging thermal environments. The voltage and capacitance ranges are similar between series, making selection straightforward based on lifetime requirements.",
          "decisionGuide": "Choose YXF for standard applications; select YXJ when extended lifetime is required.",
          "keywords": ["YXF vs YXJ", "Rubycon series comparison", "capacitor lifetime"]
        },
        {
          "question": "What is the maximum ripple current for radial lead capacitors?",
          "answer": "Ripple current ratings for Rubycon radial lead capacitors vary by series, size, and temperature. The ZLH low-impedance series offers the highest ripple current capability, typically 2-3 times higher than standard YXF series. For example, a 1000uF 25V capacitor in 10x16mm size might have 0.5A ripple current rating in YXF series but 1.2A in ZLH series. Ripple current capability decreases at higher ambient temperatures. At 85C, the rating is typically 70-80% of the 105C rating. For high-ripple applications, consider the ZLH series or use multiple capacitors in parallel to distribute the thermal load.",
          "decisionGuide": "Select ZLH series for high-ripple applications; parallel capacitors for very high ripple currents.",
          "keywords": ["ripple current", "ZLH series", "capacitor thermal"]
        },
        {
          "question": "Can radial lead capacitors be used for automotive applications?",
          "answer": "Yes, but only specific automotive-qualified series. Rubycon's BXA series is specifically designed and qualified for automotive applications with 150C rating and AEC-Q200 qualification. Standard YXF and YXJ series are not qualified for automotive use and should not be used in safety-critical vehicle applications. The BXA series undergoes additional testing including temperature cycling, mechanical shock, and vibration testing required by automotive standards. For automotive applications, always select AEC-Q200 qualified capacitors and ensure proper derating for reliability.",
          "decisionGuide": "For automotive applications, select BXA series AEC-Q200 qualified capacitors only.",
          "keywords": ["automotive capacitor", "AEC-Q200", "BXA series"]
        },
        {
          "question": "What is the shelf life of Rubycon radial capacitors?",
          "answer": "Rubycon recommends a maximum storage period of 3 years at room temperature (5-35C) for aluminum electrolytic capacitors. During storage, the electrolyte can slowly evaporate and the oxide layer may degrade slightly. Capacitors stored beyond this period may require reformation - applying rated voltage through a current-limiting resistor for several hours to rebuild the oxide layer. High temperature or humidity during storage accelerates degradation. Always check the manufacturing date code and follow first-in-first-out inventory practices. For critical applications, consider testing stored capacitors before use.",
          "decisionGuide": "Use capacitors within 3 years of manufacture; perform reformation if stored longer.",
          "keywords": ["shelf life", "storage conditions", "capacitor aging"]
        },
        {
          "question": "How do I read Rubycon capacitor markings?",
          "answer": "Rubycon radial lead capacitors have markings that indicate key specifications. The capacitance value is marked in microfarads (uF). The voltage rating is indicated by a number followed by V. The date code indicates manufacturing date using a letter for year and number for week. For example, marking '1000uF 25V K8' indicates 1000 microfarad, 25 volt rating, manufactured in week 8 of year K (2024). Additional markings may indicate series (YXF, YXJ, etc.) and tolerance. Understanding these markings helps verify correct component selection and traceability.",
          "decisionGuide": "Refer to Rubycon's marking guide or contact our FAE team for assistance with date code interpretation.",
          "keywords": ["capacitor marking", "date code", "Rubycon part number"]
        }
      ],
      "products": [
        {
          "partNumber": "25YXF1000M10X16",
          "name": "1000uF 25V YXF Radial Capacitor",
          "shortDescription": "1000uF 25V radial lead capacitor, YXF series, 105C rated, 10000 hour life, 10x16mm size.",
          "descriptionParagraphs": [
            "The 25YXF1000M10X16 is a high-reliability radial lead aluminum electrolytic capacitor from Rubycon's YXF series. This 1000uF capacitor with 25V rating is designed for general-purpose applications requiring reliable performance at moderate temperatures.",
            "Featuring Rubycon's advanced electrolyte formulation and high-purity aluminum foil, this capacitor delivers 10,000 hours operational life at 105C. The robust construction includes a pressure relief vent and high-quality rubber seal.",
            "The 10mm diameter x 16mm length case size provides excellent volumetric efficiency for PCB mounting applications. This capacitor is ideal for power supply filtering, decoupling, and general electronic circuits."
          ],
          "specifications": {
            "Capacitance": "1000uF plus or minus 20%",
            "Rated Voltage": "25V DC",
            "Temperature Range": "-40C to +105C",
            "Lifetime": "10000 hours at 105C",
            "Ripple Current": "0.58A rms at 105C, 100kHz",
            "ESR": "0.12 ohm max at 20C, 100kHz",
            "Case Size": "10mm D x 16mm L",
            "Lead Spacing": "5.0mm"
          },
          "features": [
            "Long life: 10000 hours at 105C",
            "High ripple current capability",
            "Low ESR for reduced heating",
            "RoHS compliant and halogen-free",
            "Pressure relief vent for safety",
            "Wide temperature range"
          ],
          "applications": [
            "Switching power supply output filtering",
            "General decoupling and bypass",
            "Audio amplifier power supply",
            "Industrial control systems",
            "LED driver circuits"
          ],
          "faeReview": {
            "author": "James Wilson",
            "title": "Senior FAE - Power Electronics",
            "content": "The 25YXF1000M10X16 is one of my go-to recommendations for general-purpose power supply applications. In my experience supporting power supply designs, this capacitor offers an excellent balance of performance, reliability, and cost. The YXF series provides consistent quality that I have come to rely on over many years. For 12V to 24V systems, the 25V rating provides good margin. I typically recommend operating at 70-80% of rated voltage to maximize lifetime. The 10x16mm size offers good manufacturability while providing adequate ripple current capability for most small to medium power supplies.",
            "highlight": "Excellent value for general-purpose applications with proven reliability"
          },
          "alternativeParts": [
            {
              "partNumber": "25YXJ1000M10X20",
              "brand": "Rubycon",
              "specifications": {
                "Capacitance": "1000uF plus or minus 20%",
                "Rated Voltage": "25V DC",
                "Temperature Range": "-40C to +105C",
                "Lifetime": "12000 hours at 105C"
              },
              "comparison": {
                "Capacitance": "1000uF = 1000uF (same)",
                "Voltage": "25V = 25V (same)",
                "Lifetime": "12000h > 10000h (+20%)",
                "Case Size": "10x20mm > 10x16mm (longer)",
                "Cost": "YXJ typically 10-15% higher"
              },
              "reason": "Extended lifetime for applications requiring higher reliability",
              "useCase": "Applications with longer expected service life or higher reliability requirements",
              "link": "/rubycon/products/radial-lead-capacitors/25yxj1000m10x20.html"
            },
            {
              "partNumber": "25ZLH1000M10X16",
              "brand": "Rubycon",
              "specifications": {
                "Capacitance": "1000uF plus or minus 20%",
                "Rated Voltage": "25V DC",
                "Temperature Range": "-40C to +105C",
                "Ripple Current": "1.2A rms"
              },
              "comparison": {
                "Capacitance": "1000uF = 1000uF (same)",
                "Voltage": "25V = 25V (same)",
                "Ripple Current": "1.2A > 0.58A (+107%)",
                "ESR": "Lower ESR in ZLH series",
                "Cost": "ZLH typically 20-30% higher"
              },
              "reason": "Higher ripple current capability and lower ESR for demanding applications",
              "useCase": "High-ripple applications such as switching power supplies with high load currents",
              "link": "/rubycon/products/radial-lead-capacitors/25zlh1000m10x16.html"
            }
          ],
          "companionParts": [
            {
              "partNumber": "25YXF470M8X11.5",
              "link": "/rubycon/products/radial-lead-capacitors/25yxf470m8x11.5.html",
              "description": "470uF 25V capacitor for multi-stage filtering",
              "category": "Radial Lead Capacitors"
            },
            {
              "partNumber": "25YXF100M5X11",
              "link": "/rubycon/products/radial-lead-capacitors/25yxf100m5x11.html",
              "description": "100uF 25V capacitor for high-frequency decoupling",
              "category": "Radial Lead Capacitors"
            },
            {
              "partNumber": "50YXF470M10X16",
              "link": "/rubycon/products/radial-lead-capacitors/50yxf470m10x16.html",
              "description": "470uF 50V for higher voltage rail filtering",
              "category": "Radial Lead Capacitors"
            },
            {
              "partNumber": "16YXF2200M12.5X20",
              "link": "/rubycon/products/radial-lead-capacitors/16yxf2200m12.5x20.html",
              "description": "2200uF 16V for lower voltage bulk capacitance",
              "category": "Radial Lead Capacitors"
            }
          ],
          "faqs": [
            {
              "question": "What is the expected lifetime at different temperatures?",
              "answer": "The 25YXF1000M10X16 is rated for 10000 hours at 105C. Following the Arrhenius equation, lifetime approximately doubles for every 10C decrease in temperature. Expected lifetimes: 20000 hours at 95C, 40000 hours at 85C, 80000 hours at 75C, and 160000 hours at 65C. These calculations assume rated voltage and ripple current. Voltage derating further extends lifetime - operating at 80% of rated voltage (20V) typically doubles the expected life. For example, at 85C and 20V, expected lifetime could exceed 80000 hours.",
              "decisionGuide": "Use temperature derating and voltage derating to maximize capacitor lifetime in your application.",
              "keywords": ["capacitor lifetime", "Arrhenius equation", "temperature derating"]
            },
            {
              "question": "How much ripple current can this capacitor handle?",
              "answer": "The 25YXF1000M10X16 has a rated ripple current of 0.58A rms at 100kHz and 105C ambient temperature. At lower temperatures, higher ripple currents are permissible: approximately 0.75A at 85C, 0.95A at 65C, and 1.2A at 45C. The ripple current rating is frequency-dependent - higher frequencies allow increased ripple current due to reduced ESR. At 10kHz, the rating is approximately 0.45A. Exceeding the ripple current rating causes internal heating, accelerating electrolyte evaporation and reducing lifetime. Always calculate expected ripple current and ensure adequate thermal management.",
              "decisionGuide": "Calculate expected ripple current and verify thermal design for reliable long-term operation.",
              "keywords": ["ripple current rating", "thermal management", "capacitor heating"]
            },
            {
              "question": "What is the ESR of this capacitor?",
              "answer": "The 25YXF1000M10X16 has a maximum ESR of 0.12 ohm at 20C and 100kHz. ESR varies with temperature and frequency. At -40C, ESR can be 3-5 times higher than at room temperature. At 105C, ESR is typically 20-30% lower than at 20C. ESR also decreases with increasing frequency - at 10kHz, ESR is approximately 2-3 times higher than at 100kHz. For switching power supply applications, the ESR at the switching frequency is critical for calculating output voltage ripple and capacitor heating. Lower ESR results in less heating and better filtering performance.",
              "decisionGuide": "Consider ESR at your operating frequency and temperature when calculating ripple voltage and thermal performance.",
              "keywords": ["ESR", "equivalent series resistance", "capacitor impedance"]
            },
            {
              "question": "Can this capacitor be used in parallel with others?",
              "answer": "Yes, connecting multiple capacitors in parallel is a common practice to increase total capacitance and reduce equivalent ESR. When paralleling capacitors of the same value, the total capacitance is the sum of individual capacitances, and ESR is reduced by the square root of the number of capacitors. For best results, use identical part numbers and place capacitors close together with symmetrical PCB layout. Two 25YXF1000M10X16 in parallel provide 2000uF total capacitance with ESR reduced to approximately 0.06 ohm. Current sharing is naturally balanced when using identical capacitors.",
              "decisionGuide": "Parallel multiple capacitors for increased capacitance and reduced ESR; use symmetrical layout for current sharing.",
              "keywords": ["parallel capacitors", "current sharing", "ESR reduction"]
            },
            {
              "question": "What is the leakage current specification?",
              "answer": "The maximum leakage current for the 25YXF1000M10X16 is specified as 0.01CV or 3uA, whichever is greater, measured after 5 minutes at rated voltage. For this 1000uF 25V capacitor: 0.01 x 1000uF x 25V = 250uA maximum leakage current. Typical leakage current is much lower, often below 50uA at 25C. Leakage current increases with temperature - approximately doubling for every 10C rise. At maximum rated temperature (105C), leakage current may approach the maximum specification. High leakage current indicates capacitor aging or damage.",
              "decisionGuide": "Measure leakage current during system testing and maintenance to monitor capacitor health.",
              "keywords": ["leakage current", "insulation resistance", "capacitor testing"]
            }
          ]
        },
        {
          "partNumber": "50YXF470M10X20",
          "name": "470uF 50V YXF Radial Capacitor",
          "shortDescription": "470uF 50V radial lead capacitor, YXF series, 105C rated, 10000 hour life, 10x20mm size.",
          "descriptionParagraphs": [
            "The 50YXF470M10X20 is a high-voltage radial lead aluminum electrolytic capacitor from Rubycon's YXF series. This 470uF capacitor with 50V rating is designed for applications requiring higher voltage capability while maintaining compact size.",
            "Featuring Rubycon's proven YXF series construction with advanced electrolyte formulation, this capacitor delivers 10000 hours operational life at 105C. The 10x20mm case provides increased surface area for better heat dissipation compared to smaller sizes.",
            "This capacitor is ideal for 24V and 48V system filtering, industrial power supplies, and applications requiring higher voltage margin for reliability."
          ],
          "specifications": {
            "Capacitance": "470uF plus or minus 20%",
            "Rated Voltage": "50V DC",
            "Temperature Range": "-40C to +105C",
            "Lifetime": "10000 hours at 105C",
            "Ripple Current": "0.52A rms at 105C, 100kHz",
            "ESR": "0.18 ohm max at 20C, 100kHz",
            "Case Size": "10mm D x 20mm L",
            "Lead Spacing": "5.0mm"
          },
          "features": [
            "High voltage rating: 50V DC",
            "Long life: 10000 hours at 105C",
            "Low ESR for reduced heating",
            "RoHS compliant and halogen-free",
            "Pressure relief vent",
            "Wide temperature range"
          ],
          "applications": [
            "24V and 48V power supply filtering",
            "Industrial control systems",
            "Motor drive power supplies",
            "LED lighting drivers",
            "Telecommunications equipment"
          ],
          "faeReview": {
            "author": "Sarah Johnson",
            "title": "FAE Manager - Industrial Applications",
            "content": "I frequently recommend the 50YXF470M10X20 for 24V and 48V industrial applications where customers need higher voltage margin. The 50V rating provides excellent derating for 24V systems and adequate margin for 48V systems. In my experience with industrial power supply designs, this capacitor offers reliable performance in harsh environments. The 10x20mm size provides good thermal performance. I typically recommend this series for industrial applications where long life and high reliability are required. The YXF series has proven track record in industrial equipment with minimal field failures.",
            "highlight": "Reliable choice for 24V/48V industrial applications with good voltage margin"
          },
          "alternativeParts": [
            {
              "partNumber": "50YXJ470M10X25",
              "brand": "Rubycon",
              "specifications": {
                "Capacitance": "470uF plus or minus 20%",
                "Rated Voltage": "50V DC",
                "Lifetime": "12000 hours at 105C"
              },
              "comparison": {
                "Capacitance": "470uF = 470uF (same)",
                "Voltage": "50V = 50V (same)",
                "Lifetime": "12000h > 10000h (+20%)",
                "Case Size": "10x25mm > 10x20mm (longer)"
              },
              "reason": "Extended lifetime for critical industrial applications",
              "useCase": "Industrial equipment requiring maximum reliability and uptime",
              "link": "/rubycon/products/radial-lead-capacitors/50yxj470m10x25.html"
            },
            {
              "partNumber": "63YXF330M10X20",
              "brand": "Rubycon",
              "specifications": {
                "Capacitance": "330uF plus or minus 20%",
                "Rated Voltage": "63V DC"
              },
              "comparison": {
                "Capacitance": "330uF < 470uF (-30%)",
                "Voltage": "63V > 50V (+26%)",
                "Case Size": "Same 10x20mm"
              },
              "reason": "Higher voltage rating for applications with voltage transients",
              "useCase": "Applications requiring additional voltage margin for safety or transient protection",
              "link": "/rubycon/products/radial-lead-capacitors/63yxf330m10x20.html"
            }
          ],
          "companionParts": [
            {
              "partNumber": "50YXF220M8X11.5",
              "link": "/rubycon/products/radial-lead-capacitors/50yxf220m8x11.5.html",
              "description": "220uF 50V for multi-stage filtering",
              "category": "Radial Lead Capacitors"
            },
            {
              "partNumber": "50YXF1000M12.5X25",
              "link": "/rubycon/products/radial-lead-capacitors/50yxf1000m12.5x25.html",
              "description": "1000uF 50V for higher capacitance needs",
              "category": "Radial Lead Capacitors"
            },
            {
              "partNumber": "100YXF220M12.5X20",
              "link": "/rubycon/products/radial-lead-capacitors/100yxf220m12.5x20.html",
              "description": "220uF 100V for higher voltage applications",
              "category": "Radial Lead Capacitors"
            },
            {
              "partNumber": "25YXF1000M10X16",
              "link": "/rubycon/products/radial-lead-capacitors/25yxf1000m10x16.html",
              "description": "1000uF 25V for lower voltage bulk capacitance",
              "category": "Radial Lead Capacitors"
            }
          ],
          "faqs": [
            {
              "question": "What applications is this capacitor best suited for?",
              "answer": "The 50YXF470M10X20 is best suited for 24V and 48V DC power supply applications where higher voltage margin is desired. The 50V rating provides excellent 2:1 derating for 24V systems, significantly extending capacitor lifetime. For 48V systems, it provides adequate margin while maintaining compact size. Common applications include industrial control power supplies, motor drive DC bus filtering, LED lighting drivers, and telecommunications equipment. The 470uF capacitance is well-suited for medium-power applications up to approximately 100W output power in switching supplies.",
              "decisionGuide": "Use for 24V and 48V systems; consider higher capacitance for higher power applications.",
              "keywords": ["application guide", "voltage derating", "power supply design"]
            },
            {
              "question": "How does the higher voltage rating affect lifetime?",
              "answer": "The 50V rating provides significant lifetime advantages when operated at lower voltages. Operating at 24V (48% of rated voltage) can extend lifetime by 4-8x compared to operating at full rated voltage. This follows the inverse power law relationship where lifetime is approximately proportional to (Vrated/Voperating)^7. For example, a capacitor rated for 10000 hours at 50V can achieve 40000-80000 hours when operated at 24V, depending on temperature. This makes the 50YXF470M10X20 an excellent choice for 24V applications where maximum reliability and lifetime are required.",
              "decisionGuide": "Take advantage of voltage derating for 24V applications to maximize lifetime.",
              "keywords": ["voltage derating", "lifetime extension", "reliability"]
            },
            {
              "question": "What is the surge voltage rating?",
              "answer": "The 50YXF470M10X20 has a surge voltage rating of 58V (1.15 x rated voltage) for short-duration transients. This allows the capacitor to handle occasional voltage spikes above the normal operating voltage without damage. However, sustained operation above the rated voltage will accelerate aging and reduce lifetime. For applications with frequent voltage transients, consider using a higher voltage rated capacitor or adding external protection such as TVS diodes. The capacitor also features a pressure relief vent that opens if internal pressure becomes excessive, preventing catastrophic failure.",
              "decisionGuide": "Use surge rating for occasional transients only; consider higher voltage rating for sustained overvoltage conditions.",
              "keywords": ["surge voltage", "overvoltage protection", "transient rating"]
            },
            {
              "question": "Can this capacitor be used outdoors?",
              "answer": "The 50YXF470M10X20 can be used in outdoor applications with proper enclosure and protection. The -40C to +105C temperature range covers most outdoor environments. However, the capacitor requires protection from direct exposure to rain, humidity, and corrosive atmospheres. For outdoor installations, use an appropriate enclosure with adequate ventilation for heat dissipation. Consider temperature cycling effects - daily temperature variations can cause pressure changes inside the capacitor. In high-humidity environments, conformal coating of the PCB assembly is recommended to prevent corrosion of the leads and surrounding circuitry.",
              "decisionGuide": "Use appropriate enclosure and conformal coating for outdoor applications; ensure adequate thermal management.",
              "keywords": ["outdoor use", "environmental protection", "IP rating"]
            },
            {
              "question": "What is the recommended soldering profile?",
              "answer": "Rubycon recommends standard lead-free reflow soldering profile per JEDEC J-STD-020 for surface-mount types, or wave soldering for through-hole types. For hand soldering of radial lead capacitors, use a temperature-controlled iron set to 350C maximum with contact time limited to 3-5 seconds. Excessive heat or prolonged soldering can cause thermal shock and damage the capacitor. Always ensure proper heat sinking of leads during soldering. After soldering, allow the capacitor to cool naturally without forced cooling to prevent thermal stress. Follow Rubycon's application note for specific soldering recommendations.",
              "decisionGuide": "Follow JEDEC soldering profiles and avoid exceeding temperature limits to prevent thermal damage.",
              "keywords": ["soldering profile", "hand soldering", "thermal shock"]
            }
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(brandDir, 'products.json'), JSON.stringify(productsData, null, 2), 'utf8');
console.log('Created products.json with radial lead category');

console.log('Brand data structure created successfully!');
console.log('Next: Add more product categories and complete solutions/support/news files.');
