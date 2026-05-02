import json
import re

# Read file as binary and decode carefully
with open('data/ti/support.json', 'rb') as f:
    raw = f.read()

# Decode with error handling
try:
    text = raw.decode('utf-8', errors='ignore')
except:
    text = raw.decode('latin-1', errors='ignore')

# Find all JSON objects by looking for patterns
# Extract articles section
articles_match = re.search(r'"articles":\s*(\[.*?\])(?=,\s*"faqs"|\})', text, re.DOTALL)
faqs_match = re.search(r'"faqs":\s*(\[.*?\])(?=,\s*"|}\s*$)', text, re.DOTALL)

# Build clean data structure
data = {
    "seoTitle": "TI Technical Support | Texas Instruments Documentation & Guides | BeiLuo",
    "seoDescription": "Access comprehensive Texas Instruments technical support including power management guides, embedded processor documentation, analog IC application notes, and expert FAE assistance.",
    "seoKeywords": [
        "TI technical support",
        "Texas Instruments documentation",
        "TI development guide",
        "TI troubleshooting",
        "TI application notes",
        "TI distributor support",
        "TI FAE support",
        "TI design assistance",
        "TI选型支持",
        "贝洛代理"
    ],
    "faqs": [
        {
            "question": "What technical support does BeiLuo provide for TI products?",
            "answer": "BeiLuo provides comprehensive technical support for TI products including application engineering consultation, product selection guidance, reference design review, schematic and layout review, debugging assistance, and production support. Our FAE team has deep expertise in TI's power management, embedded processing, analog, and sensor portfolios. We also provide supply chain management and long-term technical partnership.",
            "decisionGuide": "Contact our FAE team for personalized technical support and product recommendations.",
            "keywords": ["TI support", "technical assistance", "FAE services"]
        },
        {
            "question": "How do I select the right TI product for my application?",
            "answer": "Product selection involves understanding your requirements: power specifications, performance needs, environmental conditions, and cost targets. BeiLuo's FAE team can guide you through TI's portfolio using selection guides, parametric search, and reference designs. We help evaluate trade-offs between performance, power, and price to find the optimal solution.",
            "decisionGuide": "Start with our selection guides, then consult BeiLuo FAE for detailed recommendations.",
            "keywords": ["product selection", "TI portfolio", "selection guide"]
        },
        {
            "question": "Does BeiLuo provide reference designs for TI products?",
            "answer": "Yes, BeiLuo provides TI reference designs and application notes to accelerate your development. These proven designs reduce risk and speed time-to-market. Our FAE team can also customize reference designs for your specific application requirements and provide implementation guidance.",
            "decisionGuide": "Request reference designs from BeiLuo when starting your project.",
            "keywords": ["reference design", "application note", "TI designs"]
        },
        {
            "question": "Can BeiLuo help with production planning for TI designs?",
            "answer": "Absolutely. BeiLuo provides production support including BOM optimization, supply chain management, and long-term availability planning. We work with TI to ensure continuity of supply and can help manage component lifecycle transitions.",
            "decisionGuide": "Engage BeiLuo early in your design phase for optimal production planning.",
            "keywords": ["production planning", "supply chain", "BOM optimization"]
        },
        {
            "question": "What is the typical lead time for TI products through BeiLuo?",
            "answer": "Lead times vary by product and market conditions. BeiLuo maintains strategic inventory of popular TI products for faster delivery. For specific lead times, contact our sales team with your requirements. We can also provide allocation support for constrained products.",
            "decisionGuide": "Contact BeiLuo sales for current lead time information and inventory availability.",
            "keywords": ["lead time", "delivery", "inventory"]
        },
        {
            "question": "Does BeiLuo offer volume pricing for TI products?",
            "answer": "Yes, BeiLuo offers competitive volume pricing for TI products. Pricing depends on volume, product mix, and contract terms. Contact our sales team for a quotation based on your specific requirements and forecast.",
            "decisionGuide": "Contact BeiLuo sales with your volume requirements for customized pricing.",
            "keywords": ["volume pricing", "quotation", "competitive pricing"]
        },
        {
            "question": "How can I get samples of TI products?",
            "answer": "BeiLuo provides TI product samples for qualified projects. Contact our sales or FAE team with your project details and sample requirements. We can also provide evaluation modules and development kits to accelerate your development.",
            "decisionGuide": "Contact BeiLuo with your project information to request samples.",
            "keywords": ["samples", "evaluation modules", "development kits"]
        },
        {
            "question": "What industries does BeiLuo support with TI products?",
            "answer": "BeiLuo supports diverse industries including industrial automation, automotive, consumer electronics, communications, medical, and energy. Our FAE team has expertise across these markets and can provide application-specific guidance for TI product selection and implementation.",
            "decisionGuide": "Contact BeiLuo FAE for industry-specific application support.",
            "keywords": ["industries", "applications", "market expertise"]
        }
    ],
    "articles": [
        {
            "id": "ti-power-selection-guide",
            "title": "TI Power Management IC Selection Guide",
            "category": "Product Selection",
            "author": {
                "name": "David Chen",
                "title": "Senior FAE - Power Management",
                "experience": "15+ years",
                "expertise": ["Power management", "DC-DC converters", "LDOs", "Battery management"]
            },
            "publishDate": "2026-01-15",
            "lastUpdated": "2026-01-15",
            "summary": "Comprehensive guide for selecting TI power management ICs including DC-DC converters, LDOs, battery chargers, and PMICs for various applications.",
            "content": "TI offers a comprehensive portfolio of power management solutions. This guide covers selection criteria for DC-DC converters, LDOs, battery management ICs, and PMICs. Key considerations include input/output voltage ranges, current requirements, efficiency targets, and thermal management. For DC-DC converters, evaluate switching frequency, control mode, and protection features. LDO selection focuses on dropout voltage, PSRR, and noise performance. Battery chargers require attention to chemistry compatibility, charge rates, and safety features. Contact BeiLuo FAE for application-specific recommendations.",
            "relatedArticles": [
                {"id": "ti-processor-selection-guide", "title": "TI Embedded Processor Selection Guide"},
                {"id": "ti-analog-selection-guide", "title": "TI Analog IC Selection Guide"},
                {"id": "ti-sensor-selection-guide", "title": "TI Sensor Selection Guide"}
            ],
            "faeInsights": {
                "author": "David Chen",
                "title": "Senior FAE - Power Management",
                "insight": "Based on extensive customer design experience, proper power management selection is critical for system reliability and performance.",
                "logic": "These recommendations come from analyzing hundreds of successful power management designs across various industries.",
                "keyTakeaways": [
                    "Follow TI reference designs for optimal performance",
                    "Early consideration of thermal requirements is essential",
                    "Plan for transient response and stability",
                    "Engage BeiLuo FAE for complex power designs"
                ]
            },
            "faqs": [
                {
                    "question": "What are the key considerations for power management design?",
                    "answer": "Key considerations include input/output voltage ranges, load current requirements, efficiency targets, thermal management, and transient response. Proper planning in these areas ensures reliable power delivery.",
                    "decisionGuide": "Review power requirements thoroughly and contact BeiLuo FAE for optimization guidance.",
                    "keywords": ["power design", "considerations", "requirements"]
                },
                {
                    "question": "Can BeiLuo provide technical support for power designs?",
                    "answer": "Yes, BeiLuo FAE provides comprehensive power design support including topology selection, component optimization, and thermal analysis.",
                    "decisionGuide": "Contact BeiLuo FAE early in your power design phase.",
                    "keywords": ["power support", "FAE assistance", "design help"]
                },
                {
                    "question": "Are power reference designs available?",
                    "answer": "Yes, BeiLuo provides TI power reference designs and WEBENCH models for various applications.",
                    "decisionGuide": "Request power reference designs from BeiLuo for your application.",
                    "keywords": ["power reference", "WEBENCH", "design tools"]
                },
                {
                    "question": "How to optimize power supply efficiency?",
                    "answer": "Efficiency optimization involves proper topology selection, synchronous rectification, light-load operation modes, and optimized component selection.",
                    "decisionGuide": "Use TI WEBENCH for initial optimization, then consult BeiLuo FAE for fine-tuning.",
                    "keywords": ["efficiency", "optimization", "power supply"]
                },
                {
                    "question": "What thermal management is needed?",
                    "answer": "Thermal management depends on power dissipation, ambient temperature, and airflow. Proper heat sinking and PCB layout are critical.",
                    "decisionGuide": "Perform thermal analysis early and plan adequate cooling.",
                    "keywords": ["thermal", "heat sink", "temperature"]
                }
            ]
        },
        {
            "id": "ti-processor-selection-guide",
            "title": "TI Embedded Processor Selection Guide",
            "category": "Product Selection",
            "author": {
                "name": "Sarah Johnson",
                "title": "Senior FAE - Embedded Processing",
                "experience": "12+ years",
                "expertise": ["Embedded processors", "ARM Cortex", "Real-time systems", "Industrial control"]
            },
            "publishDate": "2026-02-01",
            "lastUpdated": "2026-02-01",
            "summary": "Guide for selecting TI embedded processors including MSP430, C2000, Sitara, and SimpleLink families for various applications.",
            "content": "TI's embedded processor portfolio spans ultra-low-power MSP430 microcontrollers to high-performance Sitara ARM processors. MSP430 is ideal for battery-powered sensors with its ultra-low power consumption. C2000 provides real-time control for motor control and power conversion. Sitara offers Linux-capable processing for industrial gateways and HMI. SimpleLink provides integrated wireless connectivity for IoT applications. Selection criteria include processing requirements, power budget, connectivity needs, and real-time constraints.",
            "relatedArticles": [
                {"id": "ti-power-selection-guide", "title": "TI Power Management IC Selection Guide"},
                {"id": "ti-analog-selection-guide", "title": "TI Analog IC Selection Guide"},
                {"id": "ti-sensor-selection-guide", "title": "TI Sensor Selection Guide"}
            ],
            "faeInsights": {
                "author": "Sarah Johnson",
                "title": "Senior FAE - Embedded Processing",
                "insight": "Processor selection significantly impacts system performance, power consumption, and development complexity.",
                "logic": "These recommendations are based on extensive deployment experience across industrial, automotive, and consumer markets.",
                "keyTakeaways": [
                    "Match processor to application requirements",
                    "Consider software ecosystem and development tools",
                    "Plan for future scalability",
                    "Evaluate real-time requirements carefully"
                ]
            },
            "faqs": [
                {
                    "question": "Which TI processor is best for beginners?",
                    "answer": "MSP430 LaunchPad is ideal for beginners with comprehensive documentation and community support.",
                    "decisionGuide": "Start with LaunchPad kits, then select production processors based on requirements.",
                    "keywords": ["beginner", "MSP430", "LaunchPad"]
                },
                {
                    "question": "What support does BeiLuo provide for processor designs?",
                    "answer": "BeiLuo provides processor selection guidance, software support, and debugging assistance.",
                    "decisionGuide": "Contact BeiLuo FAE for processor selection and design support.",
                    "keywords": ["processor support", "software", "debugging"]
                },
                {
                    "question": "Are development kits available?",
                    "answer": "Yes, TI offers LaunchPad and evaluation modules for all processor families.",
                    "decisionGuide": "Contact BeiLuo to order development kits for evaluation.",
                    "keywords": ["development kit", "LaunchPad", "evaluation"]
                },
                {
                    "question": "How to choose between MSP430 and ARM?",
                    "answer": "MSP430 for ultra-low power simple applications, ARM for higher performance and complexity.",
                    "decisionGuide": "Define performance requirements and power budget first.",
                    "keywords": ["MSP430", "ARM", "processor selection"]
                },
                {
                    "question": "What software tools are recommended?",
                    "answer": "Code Composer Studio for professional development, Energia for rapid prototyping.",
                    "decisionGuide": "Use CCS for production, Energia for learning and prototyping.",
                    "keywords": ["software tools", "CCS", "Energia"]
                }
            ]
        },
        {
            "id": "ti-analog-selection-guide",
            "title": "TI Analog IC Selection Guide",
            "category": "Product Selection",
            "author": {
                "name": "Robert Zhang",
                "title": "Senior FAE - Precision Analog",
                "experience": "14+ years",
                "expertise": ["Precision analog", "Op-amps", "Data converters", "Signal conditioning"]
            },
            "publishDate": "2026-03-01",
            "lastUpdated": "2026-03-01",
            "summary": "Comprehensive guide for selecting TI analog components including op-amps, instrumentation amplifiers, ADCs, DACs, and voltage references.",
            "content": "TI's precision analog portfolio includes operational amplifiers, instrumentation amplifiers, data converters, and voltage references. Op-amp selection considers offset voltage, bandwidth, noise, and power consumption. Precision amplifiers like OPA2192 offer microvolt offset for sensor conditioning. Data converter selection involves resolution, sampling rate, and interface requirements. SAR ADCs provide fast conversion for multiplexed channels, while delta-sigma ADCs offer high resolution with integrated filtering. Voltage references must match ADC resolution and temperature drift requirements.",
            "relatedArticles": [
                {"id": "ti-power-selection-guide", "title": "TI Power Management IC Selection Guide"},
                {"id": "ti-processor-selection-guide", "title": "TI Embedded Processor Selection Guide"},
                {"id": "ti-sensor-selection-guide", "title": "TI Sensor Selection Guide"}
            ],
            "faeInsights": {
                "author": "Robert Zhang",
                "title": "Senior FAE - Precision Analog",
                "insight": "Precision analog design requires careful error budget analysis and attention to layout details.",
                "logic": "These recommendations come from supporting hundreds of precision measurement applications.",
                "keyTakeaways": [
                    "Create detailed error budget before component selection",
                    "Consider temperature drift, not just initial accuracy",
                    "Use instrumentation amplifiers for bridge sensors",
                    "Match reference accuracy to ADC resolution"
                ]
            },
            "faqs": [
                {
                    "question": "What is an error budget analysis?",
                    "answer": "Error budget analysis sums all error sources including offset, gain error, drift, and noise to ensure total accuracy meets requirements.",
                    "decisionGuide": "Perform error budget analysis before selecting analog components.",
                    "keywords": ["error budget", "accuracy analysis", "error sources"]
                },
                {
                    "question": "How to reduce noise in analog circuits?",
                    "answer": "Noise reduction involves proper grounding, shielding, filtering, and component selection.",
                    "decisionGuide": "Follow TI layout guidelines and use recommended filtering.",
                    "keywords": ["noise reduction", "filtering", "layout"]
                },
                {
                    "question": "What is the difference between SAR and delta-sigma ADCs?",
                    "answer": "SAR ADCs are faster and good for multiplexing. Delta-sigma offers higher resolution with integrated filtering.",
                    "decisionGuide": "Use SAR for speed, delta-sigma for high resolution.",
                    "keywords": ["SAR ADC", "delta-sigma", "ADC types"]
                },
                {
                    "question": "When to use instrumentation amplifiers?",
                    "answer": "Use instrumentation amplifiers for differential sensor signals requiring high CMRR and precise gain.",
                    "decisionGuide": "Use INAs for bridge sensors and differential measurements.",
                    "keywords": ["instrumentation amplifier", "differential", "CMRR"]
                },
                {
                    "question": "How important is voltage reference selection?",
                    "answer": "Voltage reference accuracy directly impacts ADC accuracy. Match reference to ADC resolution requirements.",
                    "decisionGuide": "Select reference with accuracy 4x better than ADC LSB.",
                    "keywords": ["voltage reference", "ADC accuracy", "reference selection"]
                }
            ]
        },
        {
            "id": "ti-sensor-selection-guide",
            "title": "TI Sensor Selection Guide",
            "category": "Product Selection",
            "author": {
                "name": "Lisa Wang",
                "title": "Senior FAE - Sensors",
                "experience": "10+ years",
                "expertise": ["Temperature sensors", "Current sensors", "Pressure sensors", "Sensor interfaces"]
            },
            "publishDate": "2026-03-15",
            "lastUpdated": "2026-03-15",
            "summary": "Guide for selecting TI sensors including temperature, current, pressure, and environmental sensors for various monitoring applications.",
            "content": "TI offers a wide range of sensors for temperature, current, pressure, and environmental monitoring. Temperature sensors include analog TMP series and digital TMP117 with high accuracy. Current sensors use Hall effect or shunt-based measurement for power monitoring. Pressure sensors are available for industrial and automotive applications. Selection criteria include measurement range, accuracy, interface type, and environmental requirements. Digital sensors offer easy integration while analog sensors provide continuous monitoring.",
            "relatedArticles": [
                {"id": "ti-power-selection-guide", "title": "TI Power Management IC Selection Guide"},
                {"id": "ti-processor-selection-guide", "title": "TI Embedded Processor Selection Guide"},
                {"id": "ti-analog-selection-guide", "title": "TI Analog IC Selection Guide"}
            ],
            "faeInsights": {
                "author": "Lisa Wang",
                "title": "Senior FAE - Sensors",
                "insight": "Sensor selection must consider environmental conditions, accuracy requirements, and system integration.",
                "logic": "These recommendations are based on sensor deployments across industrial, automotive, and consumer applications.",
                "keyTakeaways": [
                    "Match sensor accuracy to application requirements",
                    "Consider environmental conditions and packaging",
                    "Plan for calibration if high accuracy needed",
                    "Evaluate digital vs analog interface trade-offs"
                ]
            },
            "faqs": [
                {
                    "question": "What temperature sensor accuracy is needed?",
                    "answer": "Accuracy depends on application. +/- 0.1C for medical, +/- 1C for industrial, +/- 2C for consumer.",
                    "decisionGuide": "Define accuracy requirements before selecting temperature sensors.",
                    "keywords": ["temperature accuracy", "sensor selection", "requirements"]
                },
                {
                    "question": "How to measure high currents?",
                    "answer": "Use Hall effect sensors for isolated measurement or shunt resistors with isolation amplifiers.",
                    "decisionGuide": "Use Hall sensors for isolation, shunts for cost-sensitive applications.",
                    "keywords": ["current measurement", "Hall effect", "shunt"]
                },
                {
                    "question": "Digital or analog sensors?",
                    "answer": "Digital sensors offer easy integration and calibration. Analog sensors provide continuous output.",
                    "decisionGuide": "Use digital for simplicity, analog for continuous monitoring.",
                    "keywords": ["digital sensor", "analog sensor", "interface"]
                },
                {
                    "question": "What is sensor calibration?",
                    "answer": "Calibration corrects sensor offset and gain errors to improve accuracy. Some sensors include factory calibration.",
                    "decisionGuide": "Consider calibration requirements for high-accuracy applications.",
                    "keywords": ["calibration", "accuracy", "error correction"]
                },
                {
                    "question": "How to interface sensors to processors?",
                    "answer": "Digital sensors use I2C or SPI. Analog sensors require ADC. Some offer PWM output.",
                    "decisionGuide": "Choose interface based on processor capabilities and wiring constraints.",
                    "keywords": ["sensor interface", "I2C", "SPI", "ADC"]
                }
            ]
        },
        {
            "id": "ti-design-tools-guide",
            "title": "TI Design Tools and Resources Guide",
            "category": "Design Resources",
            "author": {
                "name": "David Chen",
                "title": "Senior FAE - Design Tools",
                "experience": "15+ years",
                "expertise": ["WEBENCH", "PSpice", "TINA-TI", "Design automation"]
            },
            "publishDate": "2026-04-01",
            "lastUpdated": "2026-04-01",
            "summary": "Comprehensive guide to TI's design tools including WEBENCH Power Designer, PSpice models, and evaluation modules for accelerated product development.",
            "content": "TI provides comprehensive design tools to accelerate product development. WEBENCH Power Designer enables quick power supply design and optimization with automatic component selection. PSpice models allow accurate simulation of analog and power circuits before prototyping. TINA-TI is excellent for op-amp circuit simulation. Evaluation modules provide proven reference designs that can be used as starting points. TI's online resources include application notes, reference designs, and training materials.",
            "relatedArticles": [
                {"id": "ti-power-selection-guide", "title": "TI Power Management IC Selection Guide"},
                {"id": "ti-processor-selection-guide", "title": "TI Embedded Processor Selection Guide"},
                {"id": "ti-analog-selection-guide", "title": "TI Analog IC Selection Guide"}
            ],
            "faeInsights": {
                "author": "David Chen",
                "title": "Senior FAE - Design Tools",
                "insight": "Many engineers don't realize the power of TI's design tools. WEBENCH can save weeks of design time.",
                "logic": "These recommendations come from helping hundreds of customers optimize their designs using TI tools.",
                "keyTakeaways": [
                    "WEBENCH can reduce power supply design time from weeks to hours",
                    "PSpice models include temperature and process variations",
                    "Reference designs are tested and validated starting points",
                    "TI's training resources cover both basics and advanced topics"
                ]
            },
            "faqs": [
                {
                    "question": "What design tools does TI offer?",
                    "answer": "TI offers WEBENCH for power design, PSpice for simulation, TINA-TI for op-amp design, and various calculation tools. WEBENCH provides automatic optimization for efficiency, cost, or size.",
                    "decisionGuide": "Start with WEBENCH for power designs. Use PSpice for detailed verification.",
                    "keywords": ["TI tools", "WEBENCH", "PSpice", "TINA-TI"]
                },
                {
                    "question": "How accurate are TI's PSpice models?",
                    "answer": "TI's PSpice models are behaviorally accurate and include temperature effects, process variations, and parasitics. They are validated against actual silicon measurements.",
                    "decisionGuide": "Trust PSpice models for design verification. Validate critical parameters with bench measurements.",
                    "keywords": ["PSpice accuracy", "simulation models", "validation"]
                },
                {
                    "question": "Can BeiLuo help with design tools?",
                    "answer": "Yes, BeiLuo FAE can guide you through TI's design tools and help interpret results for your specific application.",
                    "decisionGuide": "Contact BeiLuo FAE for design tool training and support.",
                    "keywords": ["design tools", "training", "support"]
                },
                {
                    "question": "Are reference designs customizable?",
                    "answer": "Yes, TI reference designs can be customized for specific requirements. BeiLuo FAE can help with modifications.",
                    "decisionGuide": "Start with reference design, then customize with BeiLuo FAE guidance.",
                    "keywords": ["reference design", "customization", "modification"]
                },
                {
                    "question": "What training resources are available?",
                    "answer": "TI offers online training, application notes, and videos. BeiLuo can provide additional training and workshops.",
                    "decisionGuide": "Start with TI's online resources, then contact BeiLuo for specialized training.",
                    "keywords": ["training", "resources", "workshops"]
                }
            ]
        }
    ]
}

# Write clean JSON
with open('data/ti/support.json', 'w', encoding='utf8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Successfully rebuilt ti/support.json with clean data")
print(f"Articles: {len(data['articles'])}")
print(f"Root FAQs: {len(data['faqs'])}")
