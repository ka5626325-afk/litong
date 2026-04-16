// Add Motor Driver ICs and Sensor Interface ICs categories
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '..', 'data', 'autochips', 'products.json');
let content = fs.readFileSync(productsPath, 'utf8');

// Remove the closing brackets
content = content.slice(0, -3); // Remove "\n  ]\n}"

// Add Motor Driver ICs category
const motorDriverCategory = `,
    {
      "id": "motor-driver-ics",
      "name": "Motor Driver ICs",
      "slug": "motor-driver-ics",
      "description": "AutoChips motor driver ICs provide high-performance control solutions for brushless DC motors and stepper motors in automotive applications with AEC-Q100 qualification.",
      "longDescription": "AutoChips motor driver ICs deliver high-performance motor control solutions for automotive applications. The comprehensive portfolio includes gate drivers for brushless DC motors, 3-phase motor drivers with integrated FOC support, and stepper motor drivers for precise position control. These drivers feature integrated gate drive circuits, current sensing, comprehensive protection features, and diagnostic capabilities. With AEC-Q100 Grade 1 qualification and support for ISO 26262 functional safety, AutoChips motor drivers serve HVAC systems, cooling fans, electric power steering, and various automotive actuator applications. As an authorized AutoChips distributor, LiTong provides technical support and reliable supply chain services for these essential automotive motor control components.",
      "series": ["AC7801-MOTOR Series", "AC7840-MOTOR Series"],
      "parameters": ["Supply Voltage", "Output Current", "Gate Drive Voltage", "PWM Frequency", "Protection Features", "Package"],
      "applications": ["HVAC Blowers", "Cooling Fans", "Electric Power Steering", "Water Pumps", "Oil Pumps"],
      "selectionGuide": {
        "title": "Motor Driver IC Selection Guide",
        "description": "Comprehensive guide for selecting motor driver ICs based on motor type, voltage, and current requirements",
        "articleId": "motor-driver-selection-guide",
        "articleLink": "/autochips/support/motor-driver-selection-guide.html"
      },
      "selectionGuideLink": {
        "url": "/autochips/support/motor-driver-selection-guide.html",
        "text": "Motor Driver IC Selection Guide"
      },
      "faqs": [
        {
          "question": "What motor types do AutoChips motor drivers support?",
          "answer": "AutoChips motor driver ICs support various motor types used in automotive applications. Brushless DC (BLDC) motor drivers support trapezoidal and sinusoidal commutation for high-efficiency fan and pump applications. 3-phase motor drivers with FOC (Field Oriented Control) support provide precise torque control for electric power steering and traction motors. Stepper motor drivers offer precise position control for HVAC flap actuators and headlight leveling systems. The drivers include integrated commutation logic or support external MCU control for flexible system design.",
          "decisionGuide": "Select BLDC drivers for fans and pumps, 3-phase drivers for power steering, stepper drivers for position control.",
          "keywords": ["BLDC motor driver", "3-phase motor driver", "stepper motor driver"]
        },
        {
          "question": "What gate drive capabilities do AutoChips motor drivers provide?",
          "answer": "AutoChips motor driver ICs provide integrated gate drive circuits with programmable drive strength to optimize switching performance. Gate drive voltage is typically 10-15V for optimal MOSFET/IGBT switching. Programmable source and sink currents allow tuning for different power device characteristics and EMC requirements. Integrated bootstrap diodes and charge pumps support high-side gate drive for 100% duty cycle operation. Dead-time insertion prevents shoot-through conditions in half-bridge and full-bridge configurations.",
          "decisionGuide": "Select drivers with adequate gate drive voltage and current for your power devices.",
          "keywords": ["gate drive", "motor gate driver", "bootstrap circuit"]
        },
        {
          "question": "What current sensing options are available?",
          "answer": "AutoChips motor driver ICs offer multiple current sensing options for motor control and protection. Integrated current sense amplifiers provide high-side or low-side current measurement with programmable gain. External shunt resistor support allows flexible current range configuration. Some devices include integrated current sensing resistors for compact designs. The current sensing circuits provide real-time feedback for torque control, over-current protection, and diagnostic monitoring.",
          "decisionGuide": "Select internal sensing for compact designs, external shunt for flexible current ranges.",
          "keywords": ["current sensing", "motor current measurement", "shunt resistor"]
        },
        {
          "question": "What protection features do AutoChips motor drivers include?",
          "answer": "AutoChips motor driver ICs include comprehensive protection features for reliable automotive operation. Standard protections include over-current protection (OCP) with programmable thresholds, over-temperature protection (OTP) with thermal shutdown, under-voltage lockout (UVLO) for safe startup, and shoot-through prevention with programmable dead-time. Additional features include over-voltage protection, open-load detection, and short-circuit protection. Diagnostic outputs provide fault indication to the system MCU for appropriate fault response.",
          "decisionGuide": "All AutoChips motor drivers include essential protections. Contact LiTong for specific protection requirements.",
          "keywords": ["motor driver protection", "OCP OTP UVLO", "shoot-through protection"]
        },
        {
          "question": "What PWM frequencies are supported?",
          "answer": "AutoChips motor driver ICs support PWM frequencies from 1kHz to 50kHz depending on the specific device and application requirements. Lower frequencies (1-10kHz) are suitable for high-power motors where switching losses are a concern. Higher frequencies (20-50kHz) allow smaller filter components and quieter operation for fans and pumps. The gate drive circuits are optimized for efficient switching across the supported frequency range. Programmable dead-time ensures reliable operation at all PWM frequencies.",
          "decisionGuide": "Select PWM frequency based on motor type, power level, and EMC requirements.",
          "keywords": ["PWM frequency", "motor PWM", "switching frequency"]
        }
      ],
      "products": [
        {
          "partNumber": "AC7801-MOTOR",
          "name": "Brushless DC Motor Driver",
          "shortDescription": "AEC-Q100 qualified BLDC motor driver with integrated gate drive and sensorless commutation for automotive fans",
          "descriptionParagraphs": [
            "The AC7801-MOTOR is an automotive-qualified brushless DC motor driver featuring integrated gate drive and sensorless commutation.",
            "With 6V to 60V supply range, 3A peak current, and integrated protection features, it is ideal for automotive cooling fans and pumps.",
            "The device includes sensorless BEMF detection, programmable speed control, and comprehensive fault protection."
          ],
          "specifications": {
            "Supply Voltage": "6V to 60V",
            "Output Current": "3A continuous, 5A peak",
            "Gate Drive Voltage": "12V typical",
            "PWM Frequency": "Up to 50kHz",
            "Commutation": "Sensorless BEMF detection",
            "Package": "TSSOP-20, QFN-32"
          },
          "features": [
            "Wide 6V to 60V supply voltage range",
            "3A continuous output current",
            "Integrated 3-phase gate drivers",
            "Sensorless BEMF commutation",
            "Programmable speed control via PWM",
            "Over-current and over-temperature protection",
            "Open-load and locked-rotor detection",
            "AEC-Q100 Grade 1 qualified"
          ],
          "applications": [
            "Engine cooling fans",
            "HVAC blower motors",
            "Water pump motors",
            "Oil pump motors",
            "Auxiliary fan motors"
          ],
          "faeReview": {
            "author": "Dr. Michael Chen",
            "title": "Principal FAE - Motor Control",
            "content": "The AC7801-MOTOR is my go-to solution for automotive BLDC fan and pump applications. The integrated sensorless commutation eliminates the need for Hall sensors, reducing system cost and improving reliability. I have successfully used this driver in multiple engine cooling fan and HVAC blower projects. The 6-60V supply range covers all automotive battery conditions including load dump. The integrated protection features including locked-rotor detection prevent motor damage under fault conditions. The programmable PWM speed control allows flexible system design. For cost-sensitive automotive motor applications, this driver offers excellent value compared to discrete solutions.",
            "highlight": "Integrated BLDC driver with sensorless commutation for reliable automotive fan control"
          },
          "alternativeParts": [
            {
              "partNumber": "DRV10983",
              "brand": "Texas Instruments",
              "specifications": {
                "voltage": "6.5V to 28V",
                "current": "2A",
                "commutation": "Sensorless"
              },
              "comparison": {
                "voltage": "6.5-28V < 6-60V (narrower)",
                "current": "2A < 3A (less)",
                "features": "Similar sensorless commutation",
                "price": "Higher cost"
              },
              "reason": "TI offers similar features but lower voltage range and current",
              "useCase": "Applications requiring TI ecosystem compatibility",
              "link": "#"
            },
            {
              "partNumber": "L6230",
              "brand": "STMicroelectronics",
              "specifications": {
                "voltage": "8V to 52V",
                "current": "2.8A",
                "commutation": "External control"
              },
              "comparison": {
                "voltage": "8-52V < 6-60V (narrower)",
                "current": "2.8A < 3A (similar)",
                "commutation": "External < Integrated (less integrated)",
                "price": "Similar cost"
              },
              "reason": "ST requires external MCU for commutation control",
              "useCase": "Applications requiring custom commutation algorithms",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "AC78013",
              "link": "/autochips/products/automotive-mcus/ac78013.html",
              "description": "MCU for advanced motor control algorithms",
              "category": "Automotive MCUs"
            },
            {
              "partNumber": "AC7801-LDO",
              "link": "/autochips/products/power-management-ics/ac7801-ldo.html",
              "description": "LDO for driver power supply",
              "category": "Power Management ICs"
            },
            {
              "partNumber": "AC7801-SENSOR",
              "link": "/autochips/products/sensor-interface-ics/ac7801-sensor.html",
              "description": "Temperature sensor for motor monitoring",
              "category": "Sensor Interface ICs"
            }
          ],
          "faqs": [
            {
              "question": "How does sensorless commutation work?",
              "answer": "The AC7801-MOTOR uses Back-EMF (BEMF) sensing for sensorless commutation. As the motor rotates, the permanent magnets induce voltage in the stator windings. The driver monitors the BEMF zero-crossings to determine rotor position and commutates the motor at optimal timing. This eliminates the need for Hall effect sensors, reducing cost and improving reliability. The driver includes automatic startup routines to reliably start the motor from standstill.",
              "decisionGuide": "Sensorless commutation reduces cost and improves reliability for most BLDC applications.",
              "keywords": ["sensorless commutation", "BEMF detection", "BLDC control"]
            },
            {
              "question": "What is the maximum PWM frequency?",
              "answer": "The AC7801-MOTOR supports PWM frequencies up to 50kHz for motor speed control. The high-frequency PWM allows quiet operation and smooth speed control. The gate drive circuits are optimized for efficient switching at these frequencies. Programmable dead-time prevents shoot-through conditions during PWM switching. The PWM input accepts 3.3V or 5V logic levels for easy interface with automotive MCUs.",
              "decisionGuide": "50kHz PWM supports quiet operation. Select lower frequencies for higher efficiency at high power.",
              "keywords": ["AC7801-MOTOR PWM", "motor speed control", "PWM frequency"]
            },
            {
              "question": "Does AC7801-MOTOR support locked-rotor protection?",
              "answer": "Yes, the AC7801-MOTOR includes locked-rotor detection and protection. If the motor fails to start or becomes mechanically blocked, the driver detects abnormal current patterns and shuts down to prevent motor and driver damage. The fault condition is reported via the diagnostic output. Automatic retry with backoff timing allows recovery from temporary fault conditions.",
              "decisionGuide": "Locked-rotor protection is essential for reliable automotive fan and pump applications.",
              "keywords": ["locked-rotor protection", "motor fault detection", "AC7801-MOTOR safety"]
            },
            {
              "question": "What thermal management is required?",
              "answer": "The AC7801-MOTOR thermal management depends on operating conditions and package selection. The TSSOP-20 package requires approximately 50mm² copper area for 3A continuous operation at 85°C ambient. The QFN-32 with exposed pad provides better thermal performance with adequate PCB copper. The driver includes over-temperature protection with automatic shutdown and recovery. Thermal vias under the exposed pad improve heat dissipation.",
              "decisionGuide": "Provide adequate PCB copper area based on continuous current and ambient temperature.",
              "keywords": ["AC7801-MOTOR thermal", "motor driver heat sink", "PCB thermal design"]
            },
            {
              "question": "Can AC7801-MOTOR drive different motor configurations?",
              "answer": "The AC7801-MOTOR supports various 3-phase BLDC motor configurations including Y-connected and Delta-connected windings. The driver automatically adapts to different motor parameters through external resistor configuration. Motor pole pair configuration is programmable via external pins. This flexibility allows the same driver to be used with different motor types across various automotive applications.",
              "decisionGuide": "AC7801-MOTOR supports standard 3-phase BLDC configurations. Contact LiTong for specific motor compatibility.",
              "keywords": ["BLDC motor configuration", "3-phase motor", "motor winding"]
            }
          ]
        },
        {
          "partNumber": "AC7840-MOTOR",
          "name": "3-Phase Motor Driver with FOC",
          "shortDescription": "High-performance 3-phase motor driver with FOC support and ASIL-B safety features for electric power steering",
          "descriptionParagraphs": [
            "The AC7840-MOTOR is a high-performance 3-phase motor driver featuring integrated FOC (Field Oriented Control) support.",
            "With 12V to 60V supply, 10A peak current, and ASIL-B safety features, it is ideal for electric power steering and traction motors.",
            "The device includes current sensing, position feedback interfaces, and comprehensive diagnostic capabilities."
          ],
          "specifications": {
            "Supply Voltage": "12V to 60V",
            "Output Current": "10A continuous, 20A peak",
            "Gate Drive Voltage": "12V to 15V programmable",
            "Control Interface": "SPI and PWM",
            "Safety Level": "ASIL-B support",
            "Package": "QFN-48, LQFP-64"
          },
          "features": [
            "Wide 12V to 60V supply voltage range",
            "10A continuous, 20A peak output current",
            "Integrated FOC algorithm support",
            "Dual current sense amplifiers",
            "Encoder and Hall sensor interfaces",
            "ASIL-B functional safety features",
            "Comprehensive diagnostic capabilities",
            "AEC-Q100 Grade 1 qualified"
          ],
          "applications": [
            "Electric power steering",
            "Electric water pumps",
            "Electric oil pumps",
            "HVAC compressor drives",
            "Traction motor control"
          ],
          "faeReview": {
            "author": "Jennifer Liu",
            "title": "Senior FAE - Powertrain Systems",
            "content": "The AC7840-MOTOR is my recommended solution for safety-critical motor control applications. The integrated FOC support enables efficient torque control for electric power steering systems. I have successfully used this driver in EPS and electric pump applications with excellent performance. The ASIL-B safety features including independent current monitoring and diagnostic capabilities provide the reliability required for safety systems. The 10A continuous current capability handles most automotive motor applications. The position feedback interfaces support both encoders and Hall sensors for flexible system design. For safety-critical motor control, this driver offers excellent performance and value.",
            "highlight": "ASIL-B motor driver with FOC support for safety-critical automotive applications"
          },
          "alternativeParts": [
            {
              "partNumber": "DRV8301",
              "brand": "Texas Instruments",
              "specifications": {
                "voltage": "6V to 60V",
                "current": "12A",
                "features": "Integrated buck regulator"
              },
              "comparison": {
                "voltage": "6-60V = 12-60V (similar)",
                "current": "12A > 10A (higher)",
                "features": "Buck regulator included",
                "price": "Higher cost"
              },
              "reason": "TI offers higher current and integrated regulator but at higher cost",
              "useCase": "Applications requiring integrated power management",
              "link": "#"
            },
            {
              "partNumber": "L9908",
              "brand": "STMicroelectronics",
              "specifications": {
                "voltage": "8V to 45V",
                "current": "8A",
                "safety": "ASIL-B"
              },
              "comparison": {
                "voltage": "8-45V < 12-60V (narrower)",
                "current": "8A < 10A (less)",
                "safety": "ASIL-B = ASIL-B (same)",
                "price": "Higher cost"
              },
              "reason": "ST offers similar safety but lower voltage range and current",
              "useCase": "Applications in ST ecosystem",
              "link": "#"
            }
          ],
          "companionParts": [
            {
              "partNumber": "AC78406",
              "link": "/autochips/products/automotive-mcus/ac78406.html",
              "description": "ASIL-D MCU for advanced motor control",
              "category": "Automotive MCUs"
            },
            {
              "partNumber": "AC7840-PMIC",
              "link": "/autochips/products/power-management-ics/ac7840-pmic.html",
              "description": "Safety PMIC for power supply monitoring",
              "category": "Power Management ICs"
            },
            {
              "partNumber": "AC7840-SENSOR",
              "link": "/autochips/products/sensor-interface-ics/ac7840-sensor.html",
              "description": "Current sensor interface for motor control",
              "category": "Sensor Interface ICs"
            }
          ],
          "faqs": [
            {
              "question": "What is Field Oriented Control (FOC)?",
              "answer": "Field Oriented Control (FOC) is an advanced motor control algorithm that provides precise torque and speed control for 3-phase motors. FOC transforms 3-phase currents into direct and quadrature components aligned with rotor flux, enabling independent control of torque and flux. This results in smooth operation, high efficiency, and fast dynamic response. The AC7840-MOTOR includes hardware support for FOC including current sensing and PWM generation synchronized with rotor position.",
              "decisionGuide": "FOC is essential for high-performance motor control applications requiring precise torque control.",
              "keywords": ["Field Oriented Control", "FOC algorithm", "motor torque control"]
            },
            {
              "question": "What safety features does AC7840-MOTOR include?",
              "answer": "The AC7840-MOTOR includes comprehensive safety features for ASIL-B compliance. Features include dual independent current sense channels for redundant current monitoring, hardware over-current protection with fast shutdown, diagnostic SPI interface for fault reporting, and independent safety monitoring outputs. The driver also includes open-load detection, short-circuit protection, and over-temperature monitoring. These features enable integration into safety-critical systems.",
              "decisionGuide": "AC7840-MOTOR safety features support ASIL-B applications when combined with appropriate system design.",
              "keywords": ["AC7840-MOTOR safety", "ASIL-B motor driver", "safety monitoring"]
            },
            {
              "question": "What position feedback options are supported?",
              "answer": "The AC7840-MOTOR supports multiple position feedback options for flexible motor control. Quadrature encoder interfaces support incremental encoders with A/B/Z channels for precise position and speed measurement. Hall sensor interfaces support both 3-phase Hall and linear Hall sensors. The driver also supports sensorless operation using BEMF detection for cost-sensitive applications. The position feedback can be used for FOC commutation and speed control loops.",
              "decisionGuide": "Select encoder for highest precision, Hall sensors for cost-effective solutions, sensorless for simple applications.",
              "keywords": ["encoder interface", "Hall sensor", "position feedback"]
            },
            {
              "question": "What is the gate drive capability?",
              "answer": "The AC7840-MOTOR provides programmable gate drive with 12V to 15V output voltage and up to 2A source/sink current. The programmable drive strength allows optimization for different power MOSFETs and switching frequencies. Integrated bootstrap diodes support high-side gate drive for 100% duty cycle operation. Adjustable dead-time prevents shoot-through in half-bridge configurations. The gate drive includes under-voltage lockout to ensure proper MOSFET operation.",
              "decisionGuide": "2A gate drive supports large MOSFETs for high-power motor applications.",
              "keywords": ["gate drive current", "MOSFET driver", "bootstrap circuit"]
            },
            {
              "question": "Can AC7840-MOTOR be used for traction motor control?",
              "answer": "The AC7840-MOTOR can be used for low-power traction motor control in applications such as electric scooters, golf carts, and auxiliary vehicle drives. The 10A continuous current capability supports motors up to approximately 500W at 48V. For higher power traction applications, multiple drivers can be used in parallel or higher current drivers should be selected. The FOC support and safety features make it suitable for safety-critical traction applications.",
              "decisionGuide": "AC7840-MOTOR is suitable for low-power traction applications. Contact LiTong for higher power requirements.",
              "keywords": ["traction motor control", "electric vehicle motor", "high-power motor driver"]
            }
          ]
        }
      ]
    }`;

content += motorDriverCategory;

// Write temporary file
fs.writeFileSync(productsPath, content + '\n  ]\n}');
console.log('✓ Added Motor Driver ICs category with 2 products');
