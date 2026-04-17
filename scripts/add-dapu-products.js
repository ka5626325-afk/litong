#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'dapu', 'products.json');

// Read existing file
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Add remaining categories
const additionalCategories = [
  {
    "id": "temperature-compensated-oscillators",
    "name": "Temperature Compensated Oscillators (TCXO)",
    "description": "High-stability TCXOs with excellent frequency stability over temperature for GPS, cellular, and wireless communication applications. Dapu TCXOs provide temperature compensation achieving ±0.5ppm to ±2.5ppm stability.",
    "parameters": ["Frequency", "Stability", "Temperature Range", "Voltage", "Package", "Phase Noise"],
    "applications": ["GPS Receivers", "Cellular Basebands", "Wireless Communication", "Precision Timing"],
    "selectionGuide": {
      "title": "How to Select TCXOs",
      "description": "Consider stability grade, temperature range, and phase noise requirements when selecting TCXOs.",
      "articleId": "tcxo-selection-guide",
      "articleLink": "/dapu/support/tcxo-selection-guide.html"
    },
    "faqs": [
      {
        "question": "What stability grades are available for Dapu TCXOs?",
        "answer": "Dapu TCXOs are available in multiple stability grades to meet different application requirements. Standard grades include ±2.5ppm for consumer and industrial applications, ±1.0ppm for wireless communication, ±0.5ppm for GPS and precision timing. The stability specification represents the maximum frequency deviation over the specified temperature range. Higher stability (lower ppm) comes at higher cost and power consumption. GPS applications typically require ±0.5ppm or better for fast lock and accurate positioning. Cellular applications usually need ±1.0-2.5ppm depending on the standard. Select the grade that meets your system requirements with appropriate margin.",
        "decisionGuide": "Select ±0.5ppm for GPS, ±1.0ppm for cellular, ±2.5ppm for general wireless. Contact us for specific recommendations.",
        "keywords": ["Dapu TCXO stability", "TCXO ppm grade", "temperature stability"]
      },
      {
        "question": "How does temperature compensation work in TCXOs?",
        "answer": "TCXOs use temperature compensation circuits to counteract the natural frequency drift of quartz crystals with temperature. The crystal has a parabolic or S-shaped frequency vs. temperature curve with turning points around 25-30°C. A temperature sensor (thermistor or integrated sensor) measures the ambient temperature. Compensation circuitry generates a correction voltage based on the temperature reading. This voltage is applied to a varactor diode in the oscillator circuit, pulling the frequency in the opposite direction of the crystal's drift. The result is much flatter frequency vs. temperature characteristics, achieving 10-50x improvement over standard crystals. Dapu TCXOs use advanced compensation algorithms for optimal stability.",
        "decisionGuide": "TCXO compensation is automatic. Select stability grade based on your application requirements.",
        "keywords": ["TCXO compensation", "temperature compensation原理", "TCXO how it works"]
      }
    ],
    "products": [
      {
        "partNumber": "TCXO3225-26M-05",
        "name": "26MHz TCXO ±0.5ppm GPS Grade",
        "shortDescription": "High-stability 26MHz TCXO in 3.2x2.5mm package with ±0.5ppm stability for GPS and precision timing applications.",
        "descriptionParagraphs": [
          "The TCXO3225-26M-05 is a high-performance temperature-compensated crystal oscillator providing exceptional frequency stability for GPS and precision timing applications.",
          "Featuring ±0.5ppm stability over -30°C to +85°C, 26MHz frequency, and low phase noise, this TCXO meets the stringent requirements of GPS receivers and cellular applications.",
          "The compact 3.2x2.5mm package and 3.3V operation make it ideal for portable and battery-powered devices requiring accurate timing."
        ],
        "specifications": {
          "Frequency": "26MHz",
          "Stability": "±0.5ppm",
          "Temperature": "-30°C to +85°C",
          "Voltage": "3.3V ±5%",
          "Package": "3.2x2.5mm SMD",
          "Phase Noise": "-135dBc/Hz @ 1kHz"
        },
        "features": [
          "Exceptional ±0.5ppm stability for GPS applications",
          "26MHz standard frequency for GPS receivers",
          "Wide temperature range -30°C to +85°C",
          "Low phase noise for fast GPS lock",
          "Compact 3.2x2.5mm ceramic package",
          "3.3V operation with low power consumption",
          "RoHS compliant and Pb-free"
        ],
        "applications": [
          "GPS and GNSS receivers",
          "Cellular baseband timing",
          "Precision frequency references",
          "Wireless communication systems"
        ],
        "faeReview": {
          "author": "Lisa Wang",
          "title": "Senior FAE - RF Timing",
          "content": "The TCXO3225-26M-05 is our premium TCXO for GPS applications, and it delivers excellent performance at a competitive price point. I've used this part in numerous GPS tracker and navigation device designs with excellent results. The ±0.5ppm stability ensures fast TTFF (Time To First Fix) and accurate positioning. What impresses me is the consistent performance across different production batches - important for high-volume manufacturing. The phase noise performance is comparable to much more expensive Japanese TCXOs. For customers designing GPS-enabled products, this TCXO provides the right balance of performance and cost. I recommend it for any GPS application requiring <1ppm stability.",
          "highlight": "GPS-grade stability at competitive pricing for navigation and positioning applications."
        },
        "alternativeParts": [
          {
            "partNumber": "TCXO3225-26M-10",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "26MHz",
              "Stability": "±1.0ppm"
            },
            "comparison": {
              "Frequency": "26MHz = 26MHz (same)",
              "Stability": "±1.0ppm < ±0.5ppm (good but lower)"
            },
            "reason": "Lower cost option for less stringent applications",
            "useCase": "Cellular applications where ±1.0ppm is adequate",
            "link": "/dapu/products/temperature-compensated-oscillators/tcxo3225-26m-10.html"
          },
          {
            "partNumber": "TCXO3225-38M4-05",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "38.4MHz",
              "Stability": "±0.5ppm"
            },
            "comparison": {
              "Frequency": "38.4MHz > 26MHz (+48%)",
              "Stability": "±0.5ppm = ±0.5ppm (same)"
            },
            "reason": "Higher frequency for LTE cellular applications",
            "useCase": "4G LTE smartphones and cellular modules",
            "link": "/dapu/products/temperature-compensated-oscillators/tcxo3225-38m4-05.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "XO3225-26M",
            "link": "/dapu/products/crystal-oscillators/xo3225-26m.html",
            "description": "Standard 26MHz XO for cost-sensitive applications",
            "category": "Crystal Oscillators"
          },
          {
            "partNumber": "VCXO3225-26M",
            "link": "/dapu/products/voltage-controlled-oscillators/vcxo3225-26m.html",
            "description": "VCXO for synchronization applications",
            "category": "VCXOs"
          }
        ],
        "faqs": [
          {
            "question": "Is this TCXO suitable for GPS applications?",
            "answer": "Yes, the TCXO3225-26M-05 with ±0.5ppm stability is specifically designed for GPS and GNSS applications. GPS receivers require high-stability timing references for accurate satellite signal acquisition and tracking. The ±0.5ppm stability ensures that the receiver can maintain lock on weak satellite signals and achieve accurate positioning. The 26MHz frequency is the standard reference frequency for most GPS chipsets. The low phase noise (-135dBc/Hz @ 1kHz) helps achieve fast TTFF (Time To First Fix). This TCXO has been successfully deployed in various GPS trackers, navigation devices, and location-based services. For high-precision GPS (RTK, surveying), consider OCXO products with even better stability.",
            "decisionGuide": "Suitable for standard GPS/GNSS applications. Contact us for high-precision GPS recommendations.",
            "keywords": ["TCXO GPS", "GPS timing", "26MHz GPS TCXO"]
          },
          {
            "question": "What is the power consumption of this TCXO?",
            "answer": "The TCXO3225-26M-05 consumes approximately 2-3mA typical at 3.3V, which is higher than standard crystal oscillators due to the temperature compensation circuitry. The power consumption is relatively constant across temperature. For battery-powered applications, this power consumption should be factored into the overall power budget. Some TCXOs have a standby mode that reduces power consumption when the oscillator is not needed. The higher power consumption is the trade-off for achieving excellent temperature stability. For ultra-low-power applications, consider using a standard XO with good temperature characteristics or implementing software compensation. Contact us for power-sensitive application recommendations.",
            "decisionGuide": "Factor 2-3mA into power budget. Contact us for low-power timing alternatives if needed.",
            "keywords": ["TCXO power consumption", "TCXO current", "low power TCXO"]
          }
        ]
      },
      {
        "partNumber": "TCXO3225-38M4-10",
        "name": "38.4MHz TCXO ±1.0ppm for LTE",
        "shortDescription": "38.4MHz TCXO in 3.2x2.5mm package with ±1.0ppm stability for 4G LTE cellular and wireless applications.",
        "descriptionParagraphs": [
          "The TCXO3225-38M4-10 is a high-quality temperature-compensated crystal oscillator optimized for 4G LTE cellular and wireless communication applications.",
          "Featuring ±1.0ppm stability over -30°C to +85°C and 38.4MHz frequency, this TCXO provides reliable timing for LTE basebands, cellular modules, and wireless transceivers.",
          "The compact 3.2x2.5mm package and excellent phase noise performance make it ideal for smartphones, tablets, and IoT devices."
        ],
        "specifications": {
          "Frequency": "38.4MHz",
          "Stability": "±1.0ppm",
          "Temperature": "-30°C to +85°C",
          "Voltage": "1.8V / 2.8V / 3.3V",
          "Package": "3.2x2.5mm SMD",
          "Phase Noise": "-130dBc/Hz @ 1kHz"
        },
        "features": [
          "±1.0ppm stability for LTE cellular applications",
          "38.4MHz standard frequency for 4G basebands",
          "Multi-voltage support 1.8V/2.8V/3.3V",
          "Low phase noise for reliable communication",
          "Compact 3.2x2.5mm ceramic package",
          "Excellent price-performance ratio",
          "RoHS compliant and Pb-free"
        ],
        "applications": [
          "4G LTE smartphones and tablets",
          "Cellular IoT modules",
          "Wireless broadband devices",
          "Software-defined radio"
        ],
        "faeReview": {
          "author": "Robert Liu",
          "title": "Senior FAE - Wireless Timing",
          "content": "The TCXO3225-38M4-10 is our most popular TCXO for cellular applications. The 38.4MHz frequency is the standard reference for most 4G LTE chipsets, and the ±1.0ppm stability meets 3GPP requirements. I've specified this part in numerous cellular module designs with excellent results. The multi-voltage support (1.8V/2.8V/3.3V) is particularly useful for designs with multiple power domains. The price point is very competitive compared to Japanese alternatives, making it attractive for cost-sensitive cellular IoT products. What I appreciate most is the consistent supply and short lead times. For any LTE cellular design, this is my first-choice TCXO recommendation.",
          "highlight": "Ideal for 4G LTE with multi-voltage support and competitive pricing."
        },
        "alternativeParts": [
          {
            "partNumber": "TCXO3225-38M4-05",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "38.4MHz",
              "Stability": "±0.5ppm"
            },
            "comparison": {
              "Frequency": "38.4MHz = 38.4MHz (same)",
              "Stability": "±0.5ppm > ±1.0ppm (better)"
            },
            "reason": "Higher stability for carrier-grade applications",
            "useCase": "Carrier-grade LTE equipment requiring better stability",
            "link": "/dapu/products/temperature-compensated-oscillators/tcxo3225-38m4-05.html"
          },
          {
            "partNumber": "TCXO3225-26M-10",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "26MHz",
              "Stability": "±1.0ppm"
            },
            "comparison": {
              "Frequency": "26MHz < 38.4MHz (-32%)",
              "Stability": "±1.0ppm = ±1.0ppm (same)"
            },
            "reason": "Lower frequency for 2G/3G cellular applications",
            "useCase": "2G/3G cellular and legacy wireless applications",
            "link": "/dapu/products/temperature-compensated-oscillators/tcxo3225-26m-10.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "XO3225-38M4",
            "link": "/dapu/products/crystal-oscillators/xo3225-38m4.html",
            "description": "Standard 38.4MHz XO for cost-sensitive designs",
            "category": "Crystal Oscillators"
          },
          {
            "partNumber": "RF2012-B40",
            "link": "/dapu/products/rf-filters/rf2012-b40.html",
            "description": "Band 40 RF filter for LTE TDD applications",
            "category": "RF Filters"
          }
        ],
        "faqs": [
          {
            "question": "What cellular standards does this TCXO support?",
            "answer": "The TCXO3225-38M4-10 with ±1.0ppm stability supports all major 4G LTE standards including FDD-LTE (Bands 1-32) and TDD-LTE (Bands 33-46). The 38.4MHz frequency is the standard reference for most LTE baseband processors from Qualcomm, MediaTek, and other vendors. The stability meets 3GPP requirements for cellular operation. This TCXO is also suitable for 3G WCDMA/HSPA applications. For 5G NR applications, the same frequency is used but may require even better stability depending on the specific 5G band and application. The multi-voltage support makes it compatible with various baseband processor I/O voltages.",
            "decisionGuide": "Suitable for 4G LTE, 3G, and some 5G applications. Contact us for 5G-specific recommendations.",
            "keywords": ["LTE TCXO", "4G timing", "cellular TCXO 38.4MHz"]
          },
          {
            "question": "Can this TCXO be used at 1.8V?",
            "answer": "Yes, the TCXO3225-38M4-10 supports multiple voltage options including 1.8V, 2.8V, and 3.3V. When ordering, specify the required voltage as the part number suffix (e.g., -1V8 for 1.8V operation). The voltage selection affects the output logic levels - at 1.8V, the CMOS output swings 0V to 1.8V. Power consumption is slightly lower at 1.8V compared to 3.3V. The frequency stability and phase noise performance are maintained across all voltage options. This multi-voltage capability is valuable for designs with multiple power domains, such as smartphones where the baseband may use 1.8V I/O while other circuits use 3.3V.",
            "decisionGuide": "Specify voltage when ordering. Compatible with 1.8V, 2.8V, and 3.3V systems.",
            "keywords": ["TCXO voltage", "1.8V TCXO", "low voltage oscillator"]
          }
        ]
      }
    ]
  },
  {
    "id": "voltage-controlled-oscillators",
    "name": "Voltage Controlled Oscillators (VCXO)",
    "description": "Precision VCXOs with wide pull range and low phase noise for PLL applications and frequency synthesis. Dapu VCXOs provide voltage-controlled frequency adjustment for synchronization and clock recovery applications.",
    "parameters": ["Frequency", "Pull Range", "Linearity", "Voltage", "Package", "Phase Noise"],
    "applications": ["PLL Synthesis", "Clock Recovery", "Frequency Synchronization", "SONET/SDH"],
    "selectionGuide": {
      "title": "How to Select VCXOs",
      "description": "Consider pull range, linearity, and phase noise when selecting VCXOs for PLL applications.",
      "articleId": "vcxo-selection-guide",
      "articleLink": "/dapu/support/vcxo-selection-guide.html"
    },
    "faqs": [
      {
        "question": "What is pull range in VCXOs?",
        "answer": "Pull range is the total frequency deviation achievable by varying the control voltage from minimum to maximum. It's specified in ppm (parts per million) relative to the center frequency. Common pull ranges include ±50ppm, ±100ppm, and ±150ppm. Wider pull range provides more frequency adjustment capability but typically results in poorer phase noise and stability. The pull range should be selected based on the expected frequency variation in the system plus margin. For PLL applications, the pull range must accommodate the VCO tuning range plus initial frequency tolerance. Dapu VCXOs offer various pull ranges to meet different application requirements.",
        "decisionGuide": "Select pull range based on system frequency variation requirements. Contact us for PLL design assistance.",
        "keywords": ["VCXO pull range", "frequency pullability", "VCXO tuning range"]
      },
      {
        "question": "What is pull linearity and why is it important?",
        "answer": "Pull linearity measures how linearly the frequency changes with control voltage. It's typically specified as a percentage deviation from ideal linearity, with <10% being good and <5% being excellent. Good linearity is important for PLL applications because it affects loop stability and lock time. Non-linear VCXOs can cause loop instability or increased phase noise. Dapu VCXOs use high-quality varactor diodes and optimized circuit design to achieve excellent linearity. Linearity is measured across the full control voltage range and specified in the datasheet. For critical PLL applications, request linearity test data.",
        "decisionGuide": "Select VCXOs with <10% linearity for most PLLs, <5% for critical applications.",
        "keywords": ["VCXO linearity", "pull linearity", "VCXO PLL design"]
      }
    ],
    "products": [
      {
        "partNumber": "VCXO5032-25M-100",
        "name": "25MHz VCXO ±100ppm Pull Range",
        "shortDescription": "25MHz VCXO in 5.0x3.2mm package with ±100ppm pull range for PLL and synchronization applications.",
        "descriptionParagraphs": [
          "The VCXO5032-25M-100 is a high-performance voltage-controlled crystal oscillator designed for PLL applications and frequency synchronization.",
          "Featuring ±100ppm pull range, excellent linearity, and low phase noise, this VCXO provides reliable frequency adjustment for clock recovery and synchronization systems.",
          "The 5.0x3.2mm ceramic package and 3.3V operation make it suitable for networking equipment and communication systems."
        ],
        "specifications": {
          "Frequency": "25MHz",
          "Pull Range": "±100ppm",
          "Linearity": "<10%",
          "Control Voltage": "0.3V to 3.0V",
          "Voltage": "3.3V ±10%",
          "Package": "5.0x3.2mm SMD"
        },
        "features": [
          "Wide ±100ppm pull range for PLL applications",
          "Excellent linearity <10% for stable loop operation",
          "25MHz standard frequency for Ethernet PLLs",
          "Low phase noise for jitter-sensitive applications",
          "5.0x3.2mm ceramic package",
          "3.3V operation with CMOS output",
          "RoHS compliant and Pb-free"
        ],
        "applications": [
          "Ethernet clock recovery PLLs",
          "SONET/SDH synchronization",
          "Frequency synthesizers",
          "Clock multiplier units"
        ],
        "faeReview": {
          "author": "Kevin Zhao",
          "title": "Senior FAE - PLL Applications",
          "content": "The VCXO5032-25M-100 is my recommended VCXO for Ethernet clock recovery applications. The ±100ppm pull range provides adequate margin for tracking frequency variations while maintaining good phase noise. I've used this part in numerous Ethernet switch and router designs with excellent PLL stability. The linearity is consistently good across production lots, which is critical for PLL loop stability. The 5.0x3.2mm package is a good size for handling during assembly while not taking excessive board space. For customers designing synchronization equipment, this VCXO provides the right balance of pull range, linearity, and cost. I recommend it for any PLL application requiring 25MHz with moderate pull range.",
          "highlight": "Excellent linearity and pull range for reliable PLL operation."
        },
        "alternativeParts": [
          {
            "partNumber": "VCXO5032-25M-50",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "25MHz",
              "Pull Range": "±50ppm"
            },
            "comparison": {
              "Frequency": "25MHz = 25MHz (same)",
              "Pull Range": "±50ppm < ±100ppm (narrower)"
            },
            "reason": "Narrower pull range for better phase noise",
            "useCase": "Applications with smaller frequency variation range",
            "link": "/dapu/products/voltage-controlled-oscillators/vcxo5032-25m-50.html"
          },
          {
            "partNumber": "VCXO5032-125M-100",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "125MHz",
              "Pull Range": "±100ppm"
            },
            "comparison": {
              "Frequency": "125MHz > 25MHz (+400%)",
              "Pull Range": "±100ppm = ±100ppm (same)"
            },
            "reason": "Higher frequency for Gigabit Ethernet PLLs",
            "useCase": "Gigabit Ethernet clock recovery applications",
            "link": "/dapu/products/voltage-controlled-oscillators/vcxo5032-125m-100.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "XO5032-25M",
            "link": "/dapu/products/crystal-oscillators/xo5032-25m.html",
            "description": "Fixed 25MHz oscillator for reference applications",
            "category": "Crystal Oscillators"
          },
          {
            "partNumber": "TCXO5032-25M",
            "link": "/dapu/products/temperature-compensated-oscillators/tcxo5032-25m.html",
            "description": "TCXO for high-stability reference applications",
            "category": "TCXOs"
          }
        ],
        "faqs": [
          {
            "question": "How do I calculate the VCXO control voltage range?",
            "answer": "The VCXO control voltage range determines the frequency adjustment capability. For the VCXO5032-25M-100, the control voltage input range is 0.3V to 3.0V, providing the full ±100ppm pull range. The center frequency (0ppm deviation) typically occurs at VCC/2 (1.65V for 3.3V operation). The frequency vs. voltage characteristic is approximately linear, with sensitivity of about ±33ppm per volt. When designing the PLL control circuit, ensure the DAC or control amplifier can drive the required voltage range (0.3V to 3.0V). The control input impedance is typically high (>100kΩ), minimizing loading on the control circuit. For single-supply systems, the control voltage is referenced to ground.",
            "decisionGuide": "Ensure PLL control circuit can drive 0.3V-3.0V range. Center frequency at VCC/2.",
            "keywords": ["VCXO control voltage", "VCXO tuning", "PLL VCXO design"]
          },
          {
            "question": "What loop filter design is recommended for PLL using this VCXO?",
            "answer": "PLL loop filter design depends on the specific application requirements including loop bandwidth, phase noise, and lock time. For Ethernet clock recovery using the VCXO5032-25M-100, typical loop bandwidths range from 100Hz to 1kHz. A second-order passive loop filter is commonly used, with component values calculated based on the VCXO gain (Kvco), phase detector gain (Kpd), and desired bandwidth. The VCXO gain is approximately 3.3kHz/V (100ppm of 25MHz = 2.5kHz over 0.75V range). Dapu can provide application notes with recommended loop filter designs for common PLL configurations. For critical applications, we recommend loop stability analysis using PLL simulation tools.",
            "decisionGuide": "Use standard PLL design procedures with Kvco ≈ 3.3kHz/V. Contact us for application support.",
            "keywords": ["PLL loop filter", "VCXO PLL design", "PLL bandwidth"]
          }
        ]
      },
      {
        "partNumber": "VCXO3225-19M2-50",
        "name": "19.2MHz VCXO ±50ppm for Telecom",
        "shortDescription": "19.2MHz VCXO in 3.2x2.5mm package with ±50ppm pull range for telecommunications and networking applications.",
        "descriptionParagraphs": [
          "The VCXO3225-19M2-50 is a precision voltage-controlled crystal oscillator optimized for telecommunications and networking synchronization applications.",
          "Featuring ±50ppm pull range, excellent linearity, and low phase noise, this VCXO provides reliable frequency adjustment for telecom clocks and synchronization systems.",
          "The compact 3.2x2.5mm ceramic package makes it ideal for high-density telecom equipment."
        ],
        "specifications": {
          "Frequency": "19.2MHz",
          "Pull Range": "±50ppm",
          "Linearity": "<8%",
          "Control Voltage": "0.3V to 3.0V",
          "Voltage": "3.3V ±10%",
          "Package": "3.2x2.2mm SMD"
        },
        "features": [
          "19.2MHz standard telecom frequency",
          "±50ppm pull range for synchronization",
          "Excellent linearity <8%",
          "Low phase noise for telecom applications",
          "Compact 3.2x2.5mm ceramic package",
          "3.3V operation with CMOS output",
          "RoHS compliant and Pb-free"
        ],
        "applications": [
          "Telecom clock synchronization",
          "SDH/SONET equipment",
          "Network timing",
          "Base station clocks"
        ],
        "faeReview": {
          "author": "Emily Chen",
          "title": "Senior FAE - Telecom Timing",
          "content": "The VCXO3225-19M2-50 is specifically designed for telecom applications, and it shows in the performance. The 19.2MHz frequency is the standard reference for many telecom systems. I've specified this part in SDH/SONET equipment and telecom switches with excellent results. The ±50ppm pull range is adequate for tracking network timing variations while maintaining good phase noise performance. The linearity is excellent, resulting in stable PLL operation. The compact 3.2x2.5mm package is valuable for high-density telecom line cards where board space is at a premium. For customers designing telecom equipment, this VCXO provides telecom-grade performance at a competitive price point.",
          "highlight": "Telecom-optimized with excellent linearity for synchronization applications."
        },
        "alternativeParts": [
          {
            "partNumber": "VCXO3225-19M2-100",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "19.2MHz",
              "Pull Range": "±100ppm"
            },
            "comparison": {
              "Frequency": "19.2MHz = 19.2MHz (same)",
              "Pull Range": "±100ppm > ±50ppm (wider)"
            },
            "reason": "Wider pull range for applications with larger frequency variation",
            "useCase": "Applications requiring wider frequency tracking range",
            "link": "/dapu/products/voltage-controlled-oscillators/vcxo3225-19m2-100.html"
          },
          {
            "partNumber": "VCXO3225-25M-50",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "25MHz",
              "Pull Range": "±50ppm"
            },
            "comparison": {
              "Frequency": "25MHz > 19.2MHz (+30%)",
              "Pull Range": "±50ppm = ±50ppm (same)"
            },
            "reason": "Higher frequency for Ethernet applications",
            "useCase": "Ethernet PLL applications",
            "link": "/dapu/products/voltage-controlled-oscillators/vcxo3225-25m-50.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "XO3225-19M2",
            "link": "/dapu/products/crystal-oscillators/xo3225-19m2.html",
            "description": "Fixed 19.2MHz oscillator for reference",
            "category": "Crystal Oscillators"
          },
          {
            "partNumber": "TCXO3225-19M2",
            "link": "/dapu/products/temperature-compensated-oscillators/tcxo3225-19m2.html",
            "description": "TCXO for high-stability telecom applications",
            "category": "TCXOs"
          }
        ],
        "faqs": [
          {
            "question": "Why is 19.2MHz used in telecom applications?",
            "answer": "The 19.2MHz frequency is widely used in telecommunications because it's a common reference for various telecom standards. It's used in SDH/SONET equipment, GSM base stations, and various networking equipment. 19.2MHz can be easily multiplied to generate other common telecom frequencies like 155.52MHz (SONET/SDH), 125MHz (Gigabit Ethernet), and various cellular frequencies. The frequency is also compatible with many PLL chips designed for telecom applications. Dapu offers both fixed oscillators and VCXOs at 19.2MHz to support different telecom timing architectures. For new designs, verify the specific frequency requirements of your telecom chipset.",
            "decisionGuide": "Use 19.2MHz for telecom applications. Verify specific chipset requirements.",
            "keywords": ["19.2MHz telecom", "telecom VCXO", "SDH SONET timing"]
          },
          {
            "question": "What is the phase noise performance of this VCXO?",
            "answer": "The VCXO3225-19M2-50 offers good phase noise performance suitable for telecom applications. Typical phase noise is -125dBc/Hz at 1kHz offset and -145dBc/Hz at 100kHz offset. The phase noise is measured with the control voltage at center (VCC/2). Phase noise may degrade slightly at the edges of the pull range. For PLL applications, the integrated phase jitter (12kHz-20MHz) is typically <1ps RMS. Phase noise plots are available for qualification. For applications with stringent phase noise requirements, consider using a TCXO-VCXO combination or a low-noise fixed oscillator with a separate phase adjustment circuit.",
            "decisionGuide": "Phase noise suitable for most telecom applications. Contact us for phase noise plots.",
            "keywords": ["VCXO phase noise", "19.2MHz jitter", "telecom VCXO performance"]
          }
        ]
      }
    ]
  },
  {
    "id": "rf-filters",
    "name": "RF Filters and Components",
    "description": "High-performance RF filters and low-noise amplifiers for 5G, WiFi, Bluetooth, and cellular communication systems. Dapu RF components provide excellent selectivity and low insertion loss for wireless applications.",
    "parameters": ["Frequency", "Bandwidth", "Insertion Loss", "Rejection", "Package", "Power"],
    "applications": ["5G Base Stations", "WiFi 6", "Bluetooth", "Cellular", "IoT"],
    "selectionGuide": {
      "title": "How to Select RF Filters",
      "description": "Consider center frequency, bandwidth, insertion loss, and rejection requirements when selecting RF filters.",
      "articleId": "rf-filter-selection-guide",
      "articleLink": "/dapu/support/rf-filter-selection-guide.html"
    },
    "faqs": [
      {
        "question": "What types of RF filters does Dapu offer?",
        "answer": "Dapu offers several types of RF filters for different applications. SAW (Surface Acoustic Wave) filters provide excellent selectivity for cellular and GPS applications from 400MHz to 2.7GHz. BAW (Bulk Acoustic Wave) filters offer higher Q and better performance for challenging interference environments. Ceramic filters are cost-effective solutions for ISM band and consumer applications. LC filters provide broadband performance for general-purpose filtering. Dapu also offers duplexers and multiplexers for FDD systems. Each filter type has different characteristics in terms of insertion loss, rejection, size, and cost. The choice depends on your specific frequency, performance, and cost requirements.",
        "decisionGuide": "Select SAW for cellular, BAW for high performance, ceramic for cost-sensitive applications.",
        "keywords": ["Dapu RF filter types", "SAW vs BAW", "RF filter selection"]
      },
      {
        "question": "What is insertion loss and why does it matter?",
        "answer": "Insertion loss is the signal power loss through the filter, measured in dB. Lower insertion loss means more signal passes through the filter. Typical insertion loss ranges from 1-3dB for good filters, though narrowband filters may have higher loss. High insertion loss reduces receiver sensitivity and transmitter output power. In receive paths, every dB of insertion loss directly degrades system sensitivity. In transmit paths, higher insertion loss requires more PA power, reducing battery life. When selecting filters, balance insertion loss against other parameters like rejection and bandwidth. Dapu filters are optimized for low insertion loss while maintaining good rejection characteristics.",
        "decisionGuide": "Select filters with <2dB insertion loss for receive paths, <3dB for transmit paths.",
        "keywords": ["insertion loss", "filter loss", "RF filter performance"]
      }
    ],
    "products": [
      {
        "partNumber": "RF1608-GPS",
        "name": "GPS SAW Filter 1575.42MHz",
        "shortDescription": "High-performance GPS L1 SAW filter in 1.6x0.8mm package with low insertion loss and excellent out-of-band rejection.",
        "descriptionParagraphs": [
          "The RF1608-GPS is a high-performance SAW filter specifically designed for GPS L1 band applications at 1575.42MHz.",
          "Featuring low insertion loss (<1.5dB), excellent out-of-band rejection (>40dB), and compact 1.6x0.8mm package, this filter provides excellent GPS signal selectivity.",
          "The filter is ideal for GPS receivers, navigation devices, and location-based services requiring reliable GPS signal reception."
        ],
        "specifications": {
          "Center Frequency": "1575.42MHz",
          "Bandwidth": "±10MHz",
          "Insertion Loss": "<1.5dB",
          "Rejection": ">40dB @ ±50MHz",
          "Package": "1.6x0.8mm SMD",
          "Impedance": "50Ω"
        },
        "features": [
          "GPS L1 band 1575.42MHz center frequency",
          "Low insertion loss <1.5dB for high sensitivity",
          "Excellent out-of-band rejection >40dB",
          "Compact 1.6x0.8mm CSP package",
          "50Ω impedance matching",
          "RoHS compliant and Pb-free",
          "No external matching components required"
        ],
        "applications": [
          "GPS and GNSS receivers",
          "Navigation systems",
          "Location-based services",
          "Fleet tracking devices"
        ],
        "faeReview": {
          "author": "James Liu",
          "title": "Senior FAE - RF Components",
          "content": "The RF1608-GPS is an excellent GPS filter that delivers performance comparable to Japanese competitors at a much better price point. I've used this filter in numerous GPS tracker and wearable designs with excellent results. The insertion loss is consistently low, which is critical for GPS sensitivity. The rejection at cellular bands is excellent, preventing desensitization from nearby cellular transmitters. The 1.6x0.8mm package is tiny but still manageable for assembly. What impresses me is the consistency across temperature - some filters show significant degradation at temperature extremes, but this one stays stable. For any GPS L1 application, this filter provides excellent performance and value.",
          "highlight": "Excellent GPS selectivity with low insertion loss in a tiny package."
        },
        "alternativeParts": [
          {
            "partNumber": "RF2012-GPS",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "1575.42MHz",
              "Package": "2.0x1.2mm"
            },
            "comparison": {
              "Frequency": "1575.42MHz = 1575.42MHz (same)",
              "Package": "2.0x1.2mm > 1.6x0.8mm (larger)"
            },
            "reason": "Larger package for easier handling",
            "useCase": "Applications where slightly larger package is acceptable",
            "link": "/dapu/products/rf-filters/rf2012-gps.html"
          },
          {
            "partNumber": "RF1608-GLONASS",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "1602MHz"
            },
            "comparison": {
              "Frequency": "1602MHz > 1575.42MHz (+1.7%)",
              "Application": "GLONASS vs GPS"
            },
            "reason": "GLONASS L1 band frequency",
            "useCase": "Russian GLONASS navigation systems",
            "link": "/dapu/products/rf-filters/rf1608-glonass.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "LNA1608-GPS",
            "link": "/dapu/products/rf-amplifiers/lna1608-gps.html",
            "description": "GPS low-noise amplifier for receiver front-end",
            "category": "RF Amplifiers"
          },
          {
            "partNumber": "TCXO3225-26M-05",
            "link": "/dapu/products/temperature-compensated-oscillators/tcxo3225-26m-05.html",
            "description": "High-stability TCXO for GPS timing",
            "category": "TCXOs"
          }
        ],
        "faqs": [
          {
            "question": "Does this filter require external matching components?",
            "answer": "No, the RF1608-GPS is internally matched to 50Ω and does not require external matching components. This simplifies design and reduces BOM cost. The filter can be connected directly to the antenna or LNA with 50Ω transmission lines. The input and output are DC-blocked internally, so no external DC blocking capacitors are needed. The 50Ω impedance is maintained across the passband, ensuring good matching with standard RF components. For best performance, use controlled-impedance transmission lines (typically 50Ω microstrip or coplanar waveguide) to connect to the filter. Avoid long traces or vias near the filter to maintain signal integrity.",
            "decisionGuide": "No external matching required. Connect with 50Ω transmission lines for best performance.",
            "keywords": ["GPS filter matching", "RF filter design", "50 ohm filter"]
          },
          {
            "question": "What is the rejection at cellular bands?",
            "answer": "The RF1608-GPS provides excellent rejection at cellular bands to prevent interference from nearby cellular transmitters. Typical rejection is >40dB at 700-960MHz (LTE low band), >35dB at 1710-2170MHz (LTE mid band), and >30dB at 2300-2700MHz (LTE high band). This high rejection prevents the strong cellular signals from desensitizing the GPS receiver. The rejection is maintained across temperature and manufacturing variations. For applications with very high cellular interference, consider adding additional filtering or using a higher-rejection filter. The filter also provides good rejection at WiFi (2.4GHz) and Bluetooth frequencies.",
            "decisionGuide": "Excellent cellular rejection suitable for most GPS applications. Contact us for high-interference environments.",
            "keywords": ["GPS filter rejection", "cellular interference GPS", "RF filter attenuation"]
          }
        ]
      },
      {
        "partNumber": "RF2012-WIFI24",
        "name": "WiFi 2.4GHz SAW Filter",
        "shortDescription": "2.4GHz ISM band SAW filter in 2.0x1.2mm package for WiFi, Bluetooth, and Zigbee applications.",
        "descriptionParagraphs": [
          "The RF2012-WIFI24 is a high-performance SAW filter designed for 2.4GHz ISM band applications including WiFi, Bluetooth, and Zigbee.",
          "Featuring low insertion loss, excellent channel selectivity, and compact 2.0x1.2mm package, this filter provides reliable coexistence in crowded 2.4GHz spectrum.",
          "The filter is ideal for wireless consumer electronics, IoT devices, and industrial wireless applications."
        ],
        "specifications": {
          "Center Frequency": "2442MHz",
          "Bandwidth": "83MHz (2401-2483MHz)",
          "Insertion Loss": "<2.0dB",
          "Rejection": ">30dB @ 2200MHz and 2700MHz",
          "Package": "2.0x1.2mm SMD",
          "Impedance": "50Ω"
        },
        "features": [
          "Full 2.4GHz ISM band coverage (2401-2483MHz)",
          "Low insertion loss <2.0dB",
          "Excellent adjacent channel rejection",
          "Compact 2.0x1.2mm package",
          "50Ω impedance matching",
          "RoHS compliant and Pb-free",
          "Compatible with WiFi 4/5/6 and Bluetooth"
        ],
        "applications": [
          "WiFi 4/5/6 (802.11b/g/n/ac/ax)",
          "Bluetooth and BLE",
          "Zigbee and Thread",
          "2.4GHz ISM band wireless"
        ],
        "faeReview": {
          "author": "Sarah Wang",
          "title": "Senior FAE - Wireless Components",
          "content": "The RF2012-WIFI24 is a versatile filter for 2.4GHz applications. I've used it in WiFi modules, Bluetooth devices, and multi-protocol IoT designs. The full ISM band coverage means one filter works for WiFi, Bluetooth, and Zigbee, simplifying BOM management. The insertion loss is competitive, and the rejection at cellular bands helps with coexistence in smartphones. The 2.0x1.2mm package is a good balance of size and handling. What I like most is the consistent performance - no surprises in production. For any 2.4GHz wireless design, this filter provides reliable performance at a good price point.",
          "highlight": "Full 2.4GHz band coverage ideal for multi-protocol wireless devices."
        },
        "alternativeParts": [
          {
            "partNumber": "RF2012-WIFI5",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "5.5GHz"
            },
            "comparison": {
              "Frequency": "5.5GHz > 2.4GHz (+129%)",
              "Application": "5GHz vs 2.4GHz WiFi"
            },
            "reason": "5GHz WiFi band filter",
            "useCase": "Dual-band WiFi 5GHz applications",
            "link": "/dapu/products/rf-filters/rf2012-wifi5.html"
          },
          {
            "partNumber": "RF1608-WIFI24",
            "brand": "Dapu",
            "specifications": {
              "Frequency": "2442MHz",
              "Package": "1.6x0.8mm"
            },
            "comparison": {
              "Frequency": "2442MHz = 2442MHz (same)",
              "Package": "1.6x0.8mm < 2.0x1.2mm (smaller)"
            },
            "reason": "Smaller package for space-constrained designs",
            "useCase": "Wearables and ultra-compact devices",
            "link": "/dapu/products/rf-filters/rf1608-wifi24.html"
          }
        ],
        "companionParts": [
          {
            "partNumber": "LNA2012-24G",
            "link": "/dapu/products/rf-amplifiers/lna2012-24g.html",
            "description": "2.4GHz LNA for WiFi/BT receiver",
            "category": "RF Amplifiers"
          },
          {
            "partNumber": "XO2012-24M",
            "link": "/dapu/products/crystal-oscillators/xo2012-24m.html",
            "description": "24MHz crystal for WiFi chipsets",
            "category": "Crystal Oscillators"
          }
        ],
        "faqs": [
          {
            "question": "Is this filter compatible with WiFi 6 (802.11ax)?",
            "answer": "Yes, the RF2012-WIFI24 is fully compatible with WiFi 6 (802.11ax) in the 2.4GHz band. WiFi 6 uses the same 2.4GHz frequency range (2412-2484MHz) as previous WiFi standards. The filter's 83MHz bandwidth covers the entire 2.4GHz WiFi band including all channels (1-14). The filter's performance characteristics (insertion loss, rejection) are adequate for WiFi 6 requirements. WiFi 6 does introduce new features like OFDMA and 1024-QAM, but these don't change the RF filter requirements significantly. For WiFi 6E (6GHz band), a different filter is required. This filter is also compatible with Bluetooth 5.0 and BLE.",
            "decisionGuide": "Compatible with all 2.4GHz WiFi standards including WiFi 6. Use different filter for 5GHz or 6GHz.",
            "keywords": ["WiFi 6 filter", "802.11ax filter", "2.4GHz WiFi filter"]
          },
          {
            "question": "Can this filter be used for both TX and RX paths?",
            "answer": "Yes, the RF2012-WIFI24 can be used in both transmit and receive paths. The filter is passive and bidirectional, providing the same insertion loss and rejection in either direction. In receive paths, the filter provides selectivity to reject out-of-band interference. In transmit paths, the filter attenuates harmonics and spurious emissions. The power handling is adequate for typical WiFi/BT transmit power levels (up to +20dBm). For higher power applications, verify power handling specifications. Using the same filter type for both TX and RX simplifies BOM and procurement. Some designs use separate filters for TX and RX in FDD systems, but for TDD systems like WiFi, one filter can be shared.",
            "decisionGuide": "Suitable for both TX and RX in TDD systems. Verify power handling for high-power applications.",
            "keywords": ["WiFi filter TX RX", "bidirectional filter", "RF filter power handling"]
          }
        ]
      }
    ]
  }
];

// Add categories to data
data.categories = data.categories.concat(additionalCategories);

// Write back
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Added 3 more product categories to dapu/products.json');
console.log('Total categories:', data.categories.length);
