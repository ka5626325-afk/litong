#!/usr/bin/env node

/**
 * 为 MacMic 产品添加 FAQ
 */

const fs = require('fs');

// 读取 products.json
const filePath = 'data/macmic/products.json';
let content = fs.readFileSync(filePath, 'utf8');

// 为 MMG200HB120T1A 添加 faqs
content = content.replace(
  `"companionParts": [
            {
              "partNumber": "MMF200J120D1",
              "category": "FRED Module",
              "function": "Output Rectifier",
              "keyFeatures": ["1200V rating", "200A current", "Soft recovery", "Low switching losses"],
              "description": "Matching FRED module for output rectifier applications in motor drives",
              "link": "/macmic/products/fred-modules/mmf200j120d1.html"
            },
            {
              "partNumber": "MGD200J120Y1",
              "category": "Gate Driver",
              "function": "IGBT Gate Drive",
              "keyFeatures": ["4A output", "Built-in protection", "Isolated design"],
              "description": "High-current gate driver for MacMic IGBT modules with integrated protection",
              "link": "/macmic/products/gate-drivers/mgd200j120y1.html"
            },
            {
              "partNumber": "MMG75HB120T1A",
              "category": "IGBT Module",
              "function": "Lower Power Option",
              "keyFeatures": ["1200V rating", "75A current", "6TC series"],
              "description": "Lower current option from same 6TC series for smaller drives",
              "link": "/macmic/products/igbt-modules/mmg75hb120t1a.html"
            }
          ],
          "datasheet": "/assets/brands/macmic/datasheets/mmg200hb120t1a.pdf",`,
  `"companionParts": [
            {
              "partNumber": "MMF200J120D1",
              "category": "FRED Module",
              "function": "Output Rectifier",
              "keyFeatures": ["1200V rating", "200A current", "Soft recovery", "Low switching losses"],
              "description": "Matching FRED module for output rectifier applications in motor drives",
              "link": "/macmic/products/fred-modules/mmf200j120d1.html"
            },
            {
              "partNumber": "MGD200J120Y1",
              "category": "Gate Driver",
              "function": "IGBT Gate Drive",
              "keyFeatures": ["4A output", "Built-in protection", "Isolated design"],
              "description": "High-current gate driver for MacMic IGBT modules with integrated protection",
              "link": "/macmic/products/gate-drivers/mgd200j120y1.html"
            },
            {
              "partNumber": "MMG75HB120T1A",
              "category": "IGBT Module",
              "function": "Lower Power Option",
              "keyFeatures": ["1200V rating", "75A current", "6TC series"],
              "description": "Lower current option from same 6TC series for smaller drives",
              "link": "/macmic/products/igbt-modules/mmg75hb120t1a.html"
            }
          ],
          "faqs": [
            {
              "question": "What motor power can MMG200HB120T1A support?",
              "answer": "The MMG200HB120T1A (1200V, 200A) can support motor drives from 30kW to 75kW depending on application conditions. For 380V AC systems, it typically supports 30-55kW motors with 1.5x overload capability. For 690V AC systems, it can support up to 75kW. Actual power capability depends on switching frequency, heat sink performance, and duty cycle. Always include safety margin for reliable operation. Contact our FAE team for specific power calculations.",
              "decisionGuide": "This module is suitable for medium to high-power motor drives. Check our motor drive solutions for reference designs.",
              "keywords": ["MMG200HB120T1A power rating", "motor drive IGBT", "30kW 55kW 75kW"]
            },
            {
              "question": "Is MMG200HB120T1A suitable for EV applications?",
              "answer": "Yes, MMG200HB120T1A is well-suited for electric vehicle powertrain applications. The 1200V rating supports high-voltage EV battery systems (400-800V), while the 200A current capability handles peak motor currents. The 6TC series offers excellent cost-performance ratio for EV motor controllers. The T1A package is compatible with standard EV power module footprints. Many EV manufacturers use this module for 30-75kW drivetrains. Contact our FAE team for EV-specific application support.",
              "decisionGuide": "This module is ideal for EV powertrain applications. Explore our EV solutions for more information.",
              "keywords": ["MMG200HB120T1A EV", "electric vehicle IGBT", "EV powertrain"]
            },
            {
              "question": "What is the typical efficiency with MMG200HB120T1A?",
              "answer": "With MMG200HB120T1A, typical inverter efficiency is 97-98% at rated load when operating at 8-10KHz switching frequency. The low Vce(sat) of 1.8V minimizes conduction losses, which dominate at motor drive frequencies. Efficiency depends on operating conditions: higher at light loads, slightly lower at very high loads. For optimal efficiency, operate at 8-12KHz with proper heat sink design. Our reference designs demonstrate 98%+ efficiency in 30-55kW motor drives.",
              "decisionGuide": "Download our motor drive reference design for detailed efficiency data and optimization tips.",
              "keywords": ["MMG200HB120T1A efficiency", "inverter efficiency", "motor drive efficiency"]
            }
          ],
          "datasheet": "/assets/brands/macmic/datasheets/mmg200hb120t1a.pdf",`
);

// 为 MMF100J060D1 添加 faqs
content = content.replace(
  `"companionParts": [
            {
              "partNumber": "MMG75HB060H1A",
              "category": "IGBT Module",
              "function": "Main Inverter",
              "keyFeatures": ["600V rating", "75A current", "High-speed"],
              "description": "Matching IGBT module for inverter applications",
              "link": "/macmic/products/igbt-modules/mmg75hb060h1a.html"
            },
            {
              "partNumber": "MGD100J060Y1",
              "category": "Gate Driver",
              "function": "FRED Drive Control",
              "keyFeatures": ["2A output", "Fast switching"],
              "description": "Gate driver for companion IGBT module",
              "link": "/macmic/products/gate-drivers/mgd100j060y1.html"
            }
          ],
          "datasheet": "/assets/brands/macmic/datasheets/mmf100j060d1.pdf",`,
  `"companionParts": [
            {
              "partNumber": "MMG75HB060H1A",
              "category": "IGBT Module",
              "function": "Main Inverter",
              "keyFeatures": ["600V rating", "75A current", "High-speed"],
              "description": "Matching IGBT module for inverter applications",
              "link": "/macmic/products/igbt-modules/mmg75hb060h1a.html"
            },
            {
              "partNumber": "MGD100J060Y1",
              "category": "Gate Driver",
              "function": "FRED Drive Control",
              "keyFeatures": ["2A output", "Fast switching"],
              "description": "Gate driver for companion IGBT module",
              "link": "/macmic/products/gate-drivers/mgd100j060y1.html"
            }
          ],
          "faqs": [
            {
              "question": "What makes MacMic FRED modules better than standard fast recovery diodes?",
              "answer": "MacMic FRED modules feature soft recovery characteristics that significantly reduce voltage overshoot and EMI compared to standard fast recovery diodes. The soft recovery minimizes ringing during reverse recovery, reducing EMI by 10-15dB. This is critical for meeting EMC standards in industrial equipment. Additionally, the low Qrr (reverse recovery charge) reduces switching losses in high-frequency applications. The module package also provides better thermal performance than discrete diodes.",
              "decisionGuide": "Choose MacMic FRED for applications requiring low EMI and high reliability. Contact our FAE team for EMC design support.",
              "keywords": ["MacMic FRED soft recovery", "FRED vs fast recovery diode", "low EMI diode"]
            },
            {
              "question": "Can MMF100J060D1 be used for PFC boost applications?",
              "answer": "Yes, MMF100J060D1 is excellent for PFC boost applications. The 600V rating is ideal for 400V output PFC stages, and the 100A current capability supports high-power PFC designs. The fast 35ns recovery time minimizes switching losses at high frequencies (50-100KHz typical in PFC). The soft recovery characteristic helps reduce EMI, which is critical for meeting power quality standards. Many server power supplies and industrial PFC stages use this FRED module.",
              "decisionGuide": "This FRED is ideal for PFC boost applications. Check our PFC reference designs for implementation guidance.",
              "keywords": ["MMF100J060D1 PFC", "PFC boost diode", "power factor correction"]
            },
            {
              "question": "How do I match FRED current rating to my IGBT module?",
              "answer": "For anti-parallel diode applications, match FRED voltage rating to your IGBT module (600V FRED with 600V IGBT). Current rating should be 50-100% of IGBT current depending on duty cycle. For motor drives with sinusoidal output, FRED current is typically 60-70% of IGBT current. For brake chopper applications, size FRED for peak braking current. MMF100J060D1 (100A) pairs well with MMG75HB060H1A (75A) for typical motor drive applications. Contact our FAE team for specific matching recommendations.",
              "decisionGuide": "Match FRED ratings to your IGBT module for optimal performance. Our FAE team can help with selection.",
              "keywords": ["FRED IGBT matching", "anti-parallel diode sizing", "FRED current rating"]
            }
          ],
          "datasheet": "/assets/brands/macmic/datasheets/mmf100j060d1.pdf",`
);

fs.writeFileSync(filePath, content);
console.log('Added FAQs to MMG200HB120T1A and MMF100J060D1');
