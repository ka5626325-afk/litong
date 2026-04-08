#!/usr/bin/env node
/**
 * 重写 solutions.json 中的 customerCases 和 faeInsights 为完整英文
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'semikron', 'solutions.json');

// 读取文件
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Motor Drive Solution - 客户案例和FAE见解
const motorDriveCases = [
  {
    customerName: "Leading Water Pump Manufacturer",
    industry: "Water Treatment",
    application: "High-Power Pump Variable Frequency Drive",
    challenge: "Original inverter used discrete components with high failure rate and maintenance costs. Required improved system reliability and reduced after-sales costs.",
    solution: "Adopted integrated solution based on SKM200GB12T4 and SKYPER32PRO, replacing original discrete IGBTs and driver circuits. Optimized thermal design with forced air cooling replacing water cooling, simplifying system structure.",
    results: "System reliability improved with MTBF increasing from 15,000 hours to 50,000 hours. After-sales failure rate reduced by 70%, maintenance costs saved by approximately 40%. Customer satisfaction significantly improved.",
    quote: "Semikron's modular solution greatly simplified our design, with reliability far exceeding expectations",
    products: ["SKM200GB12T4", "SKYPER32PRO", "SKKD162/12"]
  },
  {
    customerName: "Textile Machinery Enterprise",
    industry: "Textile Machinery",
    application: "Servo Spindle Drive System",
    challenge: "Required high-precision servo control with fast dynamic response, while needing compact size and low cost to meet mass production demands.",
    solution: "Adopted SKiiP32NAB12T1 intelligent power module with integrated drivers and protection, significantly simplifying PCB design. Combined with dedicated servo control algorithms to implement high-precision torque control.",
    results: "Drive volume reduced by 35%, cost reduced by 20%. Servo response time <1ms, meeting high-speed textile process requirements. Product successfully mass-produced and exported to European markets.",
    quote: "The integration level of SKiiP modules allowed us to quickly launch products and seize market opportunities",
    products: ["SKiiP32NAB12T1"]
  }
];

const motorDriveFaeInsights = {
  author: {
    name: "Michael Zhang",
    title: "Senior FAE - Motor Drives",
    experience: "15+ years"
  },
  insight: "In the industrial motor drive field, Semikron's SEMiTRANS 4 series IGBT modules have become the mainstream choice for medium-power inverters due to their outstanding cost-performance ratio and reliability. Over my 15-year career participating in more than 200 motor drive projects, I have found that SKM100GB12T4 and SKM200GB12T4 perform exceptionally well in the 30-90kW power range. They adopt IGBT4 chip technology with reduced saturation voltage and excellent temperature stability, which is crucial for high-temperature industrial environments. The silver sintering package technology significantly improves module thermal cycling lifetime, which is especially important for pump and fan applications requiring frequent start-stop operations.",
  logic: "Motor drive selection decision framework: First determine power level and voltage level - 30-45kW select SKM100GB12T4, 55-90kW select SKM200GB12T4; Second consider switching frequency - 4-8kHz is the optimal frequency range for industrial drives; Then evaluate thermal conditions - standard SEMiTRANS 4 package fits most industrial heatsinks; Finally select matching drivers - SKYPER32PRO provides the best protection functionality and reliability. For cost-sensitive and lower power applications, consider SKiiP series intelligent power modules which integrate drivers and protection, significantly shortening development cycles.",
  keyTakeaways: [
    "SEMiTRANS 4 series is the best choice for 30-90kW industrial drives",
    "Silver sintering technology significantly improves thermal cycling lifetime, suitable for frequent start-stop applications",
    "SKYPER32PRO drivers provide comprehensive protection functionality",
    "4-8kHz switching frequency is the optimal balance between efficiency and EMI",
    "SKiiP series suitable for rapid development and cost-sensitive applications"
  ],
  commonPitfalls: [
    "Neglecting thermal design leads to module overheating failure",
    "Improper gate resistor selection causes excessive switching losses or EMI issues",
    "Dead time set too small leads to bridge arm shoot-through damaging IGBT"
  ],
  bestPractices: [
    "Reserve 30% or more current margin to improve system reliability",
    "Adopt SVPWM modulation to improve DC bus utilization",
    "Implement comprehensive fault protection strategy including hardware and software two-level protection",
    "Regularly perform thermal imaging checks to discover thermal problems in time"
  ]
};

// Solar Inverter Solution - 客户案例和FAE见解
const solarInverterCases = [
  {
    customerName: "Large Solar System Integrator",
    industry: "Solar Power Generation",
    application: "Commercial Distributed Solar Inverter",
    challenge: "Required development of high-efficiency, high-reliability 30kW three-phase grid-tied inverter with European efficiency >98%, MTBF >50,000 hours, and controllable costs.",
    solution: "Adopted SKM200GB12T4 as core power device with SKYPER32PRO drivers. Optimized thermal design with intelligent air cooling system. MPPT algorithm used improved incremental conductance method.",
    results: "European efficiency achieved 98.3%, MPPT efficiency 99.95%. Passed IEC 62109 and VDE-AR-N 4105 certification. Product successfully shipped over 10,000 units with failure rate below 0.5%.",
    quote: "Semikron IGBT's excellent performance and LiTong's technical support are key to our product success",
    products: ["SKM200GB12T4", "SKYPER32PRO"]
  },
  {
    customerName: "New Energy Technology Company",
    industry: "Energy Storage Systems",
    application: "Solar-Storage Integrated Inverter",
    challenge: "Developed solar+storage integrated inverter requiring bidirectional power flow, charge/discharge efficiency both >97%, and limited volume.",
    solution: "Adopted SKM100GB12T4 to build bidirectional DC-AC converter with bidirectional DC-DC converter for battery interface. Adopted high-frequency design to reduce magnetic component volume.",
    results: "Charge/discharge efficiency both achieved above 97.5%, system power density reached 1.2kW/L. Product passed CE certification and successfully entered European energy storage market.",
    quote: "Semikron modules' high efficiency and reliability give our energy storage products competitive advantage",
    products: ["SKM100GB12T4", "SKYPER32PRO"]
  }
];

const solarInverterFaeInsights = {
  author: {
    name: "David Li",
    title: "Senior FAE - Renewable Energy",
    experience: "12+ years"
  },
  insight: "In the solar inverter field, efficiency is the lifeline. Over the past 8 years participating in more than 50 solar inverter projects, I have deeply experienced the decisive impact of device selection on system efficiency. Semikron's SEMiTRANS 4 series IGBT modules adopt the latest IGBT4 chip technology, achieving an excellent balance between conduction voltage drop and switching losses. Especially at 16-20kHz switching frequency, SKM200GB12T4's comprehensive losses are about 15% lower than the previous generation, which directly translates to higher inverter efficiency and lower thermal costs. For 20-50kW power range solar inverters, I strongly recommend SKM200GB12T4, whose high cost-performance ratio and outstanding reliability have been verified by many mainstream inverter manufacturers.",
  logic: "Solar inverter selection decision framework: First determine power level - 10-20kW select SKM100GB12T4, 20-50kW select SKM200GB12T4; Second determine topology structure - single-stage or two-stage, which affects IGBT voltage level selection; Then evaluate thermal conditions - high-temperature environments require larger current margins; Finally consider cost factors - SEMiTRANS 4 series achieves a good balance between performance and price. For applications requiring higher integration, consider SKiiP series intelligent power modules.",
  keyTakeaways: [
    "SKM200GB12T4 is the best choice for 20-50kW solar inverters",
    "16-20kHz switching frequency achieves the best balance between efficiency and EMI",
    "European efficiency above 98% requires careful loss optimization",
    "Thermal design must consider high-temperature environment derating",
    "Grid code certification requires advance planning to avoid later rework"
  ],
  commonPitfalls: [
    "Neglecting device derating in high-temperature environments leads to summer efficiency degradation",
    "Improper MPPT algorithm selection causes significant efficiency loss in partial shading scenarios",
    "Insufficient EMC design leads to repeated certification test rework"
  ],
  bestPractices: [
    "Reserve 20% or more current margin to ensure reliability under high-temperature high-load conditions",
    "Adopt advanced MPPT algorithms such as improved incremental conductance method",
    "Perform thermal simulation during design phase to optimize heatsink selection",
    "Early EMC pre-compliance testing to discover problems in time"
  ]
};

// Power Supply Solution - 客户案例和FAE见解
const powerSupplyCases = [
  {
    customerName: "Electroplating Equipment Manufacturer",
    industry: "Electroplating Equipment",
    application: "High-Power DC Electroplating Power Supply",
    challenge: "Required development of 5000A/12V high-power electroplating power supply with adjustable output voltage, low ripple, high reliability, and 24-hour continuous operation.",
    solution: "Adopted SKKH570/16E thyristors to form three-phase fully controlled rectifier bridge, achieving 0-100% voltage adjustment. Combined with large capacity filter inductors and capacitors to control output ripple within 3%. Optimized thermal design with water cooling heatsinks.",
    results: "Output voltage stability ±1%, ripple <3%. System efficiency >92%, MTBF exceeded 30,000 hours. Equipment has been stably operating for 3 years, customer very satisfied.",
    quote: "Semikron thyristors' high reliability ensures our equipment's continuous stable operation",
    products: ["SKKH570/16E"]
  },
  {
    customerName: "Telecom Power Supply Manufacturer",
    industry: "Telecom Power",
    application: "48V Telecom Switching Power Supply",
    challenge: "Developed 10kW/48V telecom power supply requiring power factor >0.95, efficiency >95%, meeting N+1 redundancy configuration, with limited volume.",
    solution: "Front stage adopted SKM100GB12T4 to build three-phase active PFC, rear stage adopted full-bridge LLC resonant converter. Adopted high-frequency design (100kHz) to reduce magnetic component volume. Rectifier output adopted SKKD160/16 three-phase bridge.",
    results: "Power factor 0.98, efficiency 96.5%, power density reached 15W/in³. Passed Telcordia SR-332 reliability certification, meeting telecom-grade application requirements.",
    quote: "Semikron IGBT's low loss characteristics allow our power supply efficiency to reach industry-leading levels",
    products: ["SKM100GB12T4", "SKKD160/16"]
  }
];

const powerSupplyFaeInsights = {
  author: {
    name: "John Wang",
    title: "Senior FAE - Power Supply",
    experience: "14+ years"
  },
  insight: "Industrial power supply design is a system engineering task requiring balance between efficiency, cost, and reliability. In my 14-year FAE career, participating in hundreds of industrial power supply projects, I deeply understand the importance of device selection. Semikron's power semiconductor product line is very complete, from diodes and thyristors to IGBT modules, meeting various industrial power supply needs. For applications requiring voltage adjustment, I strongly recommend SKKH570/16E thyristor modules, whose dv/dt withstand capability up to 1000V/μs performs excellently in harsh industrial grid conditions. For high power factor applications, SKM100GB12T4 is the ideal choice for 10-30kW active PFC, with low conduction voltage drop and fast switching characteristics helping achieve high efficiency.",
  logic: "Industrial power supply selection decision framework: First determine whether voltage adjustment is needed - if yes select thyristors (SKKH series), if fixed voltage select diodes (SKKD series) or active PFC; Second determine power level - <10kW consider single-phase solution, >10kW recommend three-phase solution; Then evaluate efficiency requirements - >95% efficiency requires active PFC; Finally consider cost factors - diode solution has lowest cost, active PFC has highest cost but best performance. For high power (>50kW) applications, recommend IGBT active front end for PFC and energy regeneration.",
  keyTakeaways: [
    "SKKH570/16E is the best choice for applications requiring voltage adjustment",
    "SKKD160/16 is the ideal solution for cost-sensitive fixed voltage applications",
    "Active PFC can achieve >0.99 power factor and <5% THD",
    "Thermal design must consider worst-case and aging factors",
    "Industrial power supplies must meet IEC 61000-3-2 harmonic standards"
  ],
  commonPitfalls: [
    "Neglecting impact of grid voltage fluctuation on device stress",
    "Insufficient heatsink design margin leads to device overheating in summer high temperatures",
    "Insufficient EMI filter design leads to conducted emission exceeding standards"
  ],
  bestPractices: [
    "Reserve 30% or more current margin to handle grid fluctuations",
    "Adopt soft-start circuit to limit startup inrush current",
    "Design comprehensive protection functions (overcurrent, overvoltage, overtemperature)",
    "Perform thorough thermal testing and aging validation"
  ]
};

// Wind Power Solution - 客户案例和FAE见解
const windPowerCases = [
  {
    customerName: "Wind Turbine Manufacturer",
    industry: "Wind Power Generation",
    application: "2.5MW Onshore DFIG Converter",
    challenge: "Developed high-reliability 2.5MW DFIG wind turbine converter requiring compliance with Chinese grid LVRT requirements, MTBF >80,000 hours, adapting to -30°C to +50°C environment.",
    solution: "Adopted SKM400GB12T4 as core power device to build rotor-side and grid-side converters. Optimized control algorithms for fast LVRT response. Adopted forced air cooling + heat pipe cooling solution.",
    results: "Converter passed China Electric Power Research Institute LVRT certification, MTBF reached 100,000 hours. Successfully matched with over 500 turbines, cumulative operation exceeded 2 million hours, failure rate below 1%.",
    quote: "Semikron IGBT's high reliability and LiTong's technical support are guarantees of our wind turbine success",
    products: ["SKM400GB12T4"]
  },
  {
    customerName: "Offshore Wind Power Developer",
    industry: "Offshore Wind Power",
    application: "4MW Offshore Wind Turbine Full Power Converter",
    challenge: "Developed offshore wind turbine full power converter requiring protection level IP54, salt spray corrosion resistance, maintenance-free design life 25 years, meeting harsh offshore environment.",
    solution: "Adopted full power topology with SKM400GB12T4 for both machine-side and grid-side. System adopted sealed design with internal positive pressure ventilation. Key circuit boards coated with three-proof paint, connectors adopted gold-plating treatment.",
    results: "Converter passed DNV GL certification, protection level reached IP54, passed 3000-hour salt spray test. First prototype has been operating offshore for 2 years in good condition.",
    quote: "Semikron modules' high reliability allows our offshore wind turbines to withstand harsh environment tests",
    products: ["SKM400GB12T4"]
  }
];

const windPowerFaeInsights = {
  author: {
    name: "Hua Chen",
    title: "Senior FAE - Wind Power",
    experience: "16+ years"
  },
  insight: "Wind turbine converters are the core components of wind turbine units, and their reliability directly determines power generation efficiency and availability. In my 16 years of wind power industry experience, I have witnessed the development of wind power technology from kilowatt-level to megawatt-level. Semikron's SKM400GB12T4 is the ideal choice for wind turbine converters, with its 400A rated current and 1200V withstand voltage meeting the needs of 2-5MW turbines. Particularly noteworthy is its silver sintering packaging technology, which compared to traditional solder packaging, improves thermal cycling lifetime by 3-5 times, which is crucial for wind power applications with frequent start-stop operations. I have seen at multiple wind farms that converters using Semikron modules still in good condition after 5+ years of operation, fully proving their reliability.",
  logic: "Wind turbine converter selection decision framework: First determine turbine power and topology - 1.5-3MW DFIG turbine rotor-side converter select SKM200GB12T4, grid-side select SKM400GB12T4; 3-5MW full power converter machine-side and grid-side both select SKM400GB12T4; Second consider environmental conditions - offshore wind power requires higher protection level and anti-corrosion design; Then evaluate grid requirements - weak grid areas recommend full power topology; Finally consider maintainability - offshore wind power should minimize maintenance requirements. Recommend reserving sufficient current margin to handle wind speed突变 overload situations.",
  keyTakeaways: [
    "SKM400GB12T4 is the best choice for 2-5MW wind turbine converters",
    "Silver sintering packaging technology significantly improves thermal cycling lifetime",
    "DFIG topology suitable for onshore, full power topology suitable for offshore",
    "LVRT function is a basic requirement for grid connection",
    "Offshore wind power requires special attention to protection and anti-corrosion"
  ],
  commonPitfalls: [
    "Neglecting impact of thermal cycling on module lifetime",
    "Insufficient LVRT design leads to grid-off during grid faults",
    "Insufficient offshore wind power protection design leads to salt spray corrosion"
  ],
  bestPractices: [
    "Reserve 50% or more current margin to handle wind speed突变",
    "Adopt predictive maintenance with real-time monitoring of key parameters",
    "Design comprehensive fault protection strategy",
    "Perform thorough type testing and field testing"
  ]
};

// EV Charging Solution - 客户案例和FAE见解
const evChargingCases = [
  {
    customerName: "Charging Station Operator",
    industry: "Charging Infrastructure",
    application: "120kW DC Fast Charger",
    challenge: "Developed 120kW DC fast charger requiring peak efficiency >96%, supporting 200-750V wide voltage output, meeting CCS2 and GB/T dual protocols, passing CE certification.",
    solution: "Adopted SKM200GB12T4 to build three-phase PWM rectifier and LLC resonant converter. Adopted dual-gun design supporting intelligent power allocation. Configured 15.6-inch touch screen and 4G communication module.",
    results: "Peak efficiency 96.5%, power density 1.2kW/L. Passed CE certification and State Grid grid connection test. Over 1,000 units deployed, average failure interval time >20,000 hours.",
    quote: "Semikron IGBT's high efficiency significantly reduces our charging station operating costs",
    products: ["SKM200GB12T4", "SKYPER32PRO"]
  },
  {
    customerName: "New Energy Vehicle Manufacturer",
    industry: "Electric Vehicles",
    application: "480kW Split-Type Super Charging Station",
    challenge: "Developed 480kW super charging station for high-end vehicles requiring peak power 480kW, supporting 800V high-voltage platform, charging 5 minutes for 200km range.",
    solution: "Adopted modular design with each module 60kW, total 8 modules in parallel. Power modules adopted SKM200GB12T4 with liquid cooling. Rectifier cabinet separated from charging terminal design supporting multi-vehicle simultaneous charging.",
    results: "Peak efficiency 97%, supporting 200-1000V wide voltage output. Successfully applied to multiple super charging stations with good user experience, charging speed achieved design goals.",
    quote: "Semikron modules' high power density and reliability are key to our super fast charging implementation",
    products: ["SKM200GB12T4"]
  }
];

const evChargingFaeInsights = {
  author: {
    name: "Lei Zhao",
    title: "Senior FAE - EV Charging",
    experience: "10+ years"
  },
  insight: "Charging stations are key infrastructure in the new energy vehicle ecosystem, and their performance and reliability directly impact user charging experience. I have worked in the charging station industry for 10 years, witnessing charging power development from 50kW to 350kW and even higher. Semikron's SKM200GB12T4 is the ideal choice for charging station power modules, with its 200A rated current and 1200V withstand voltage meeting the needs of 50-150kW charging stations. Particularly noteworthy is its excellent short-circuit withstand capability and fast switching characteristics, which are crucial for charging station safety and efficiency. I have found in multiple charging station projects that solutions using Semikron modules perform excellently in both efficiency and reliability, with peak efficiency reaching above 96%.",
  logic: "Charging station selection decision framework: First determine power level - below 60kW can use single module, 60-150kW recommend dual module parallel, above 150kW use multi-module parallel; Second determine voltage platform - below 750V platform select 1200V devices (SKM200GB12T4), 800V and above select 1700V devices; Then consider cooling method - air cooling suitable for low power and indoor applications, liquid cooling suitable for high power and outdoor applications; Finally consider communication protocols - select CCS, CHAdeMO or GB/T based on target market. Recommend reserving 20% or more power margin to handle grid fluctuations and battery fast charging demands.",
  keyTakeaways: [
    "SKM200GB12T4 is the best choice for 50-150kW charging stations",
    "Two-stage architecture (rectifier + DC-DC) can achieve wide voltage output and high efficiency",
    "Liquid cooling can achieve higher power density",
    "Safety protection functions must meet IEC 61851 requirements",
    "Communication protocols must be selected based on target market"
  ],
  commonPitfalls: [
    "Neglecting impact of grid voltage fluctuation on output power",
    "Insufficient thermal design leads to power derating in summer high temperatures",
    "Insufficient EMC design leads to communication interference"
  ],
  bestPractices: [
    "Reserve 20% or more power margin",
    "Adopt modular design for easy maintenance and expansion",
    "Design comprehensive protection functions (overvoltage, overcurrent, overtemperature, insulation)",
    "Perform thorough type testing and field testing"
  ]
};

// 更新数据
data.solutions[0].customerCases = motorDriveCases;
data.solutions[0].faeInsights = motorDriveFaeInsights;

data.solutions[1].customerCases = solarInverterCases;
data.solutions[1].faeInsights = solarInverterFaeInsights;

data.solutions[2].customerCases = powerSupplyCases;
data.solutions[2].faeInsights = powerSupplyFaeInsights;

data.solutions[3].customerCases = windPowerCases;
data.solutions[3].faeInsights = windPowerFaeInsights;

data.solutions[4].customerCases = evChargingCases;
data.solutions[4].faeInsights = evChargingFaeInsights;

// 写回文件
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

console.log('✅ Successfully rewritten solutions.json with complete English content');
console.log('Updated:');
console.log('  - Motor Drive: 2 customer cases, FAE insights');
console.log('  - Solar Inverter: 2 customer cases, FAE insights');
console.log('  - Power Supply: 2 customer cases, FAE insights');
console.log('  - Wind Power: 2 customer cases, FAE insights');
console.log('  - EV Charging: 2 customer cases, FAE insights');
