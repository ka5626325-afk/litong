const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'electronicon');

// Fix support.json
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

// DC-Link Capacitor Selection Guide
const dcLinkArticle = support.articles.find(a => a.id === 'dc-link-capacitor-selection-guide');
if (dcLinkArticle) {
  dcLinkArticle.content = [
    'DC-link capacitors are critical components in power electronics systems, providing energy storage and ripple current handling for inverters and converters. This guide covers the key selection criteria and design considerations for optimal DC-link capacitor selection.',
    '',
    '## Voltage Rating Selection',
    '',
    'The DC-link capacitor voltage rating should be selected with adequate margin above the maximum expected DC bus voltage. For 380-480V AC input systems, typical DC bus voltages are 540-680V DC.',
    '',
    'Recommended capacitor voltage ratings are 900-1100V DC, providing 30-60% safety margin. Higher margins extend capacitor lifetime and improve reliability. For 690V AC systems, DC bus is approximately 975V, requiring 1200-1500V capacitor ratings.',
    '',
    '## Capacitance Calculation',
    '',
    'The required DC-link capacitance depends on allowable voltage ripple, load current, and switching frequency. The basic formula is:',
    '',
    '**C = I / (2 × f × ΔV)**',
    '',
    'Where I is DC current, f is switching frequency, and ΔV is allowable voltage ripple. For three-phase inverters, additional considerations include line frequency ripple and load variations.',
    '',
    'Typical voltage ripple specifications are 2-5% of DC bus voltage. Example: For a 100kW inverter at 800V DC with 8kHz switching and 20V allowable ripple, required capacitance is approximately 390μF. Select the next standard value (470μF) with appropriate voltage and ripple ratings.',
    '',
    '## Ripple Current Considerations',
    '',
    'Ripple current is a critical parameter that affects capacitor heating and lifetime. Calculate the expected RMS ripple current based on inverter power, DC voltage, and modulation scheme.',
    '',
    'The capacitor ripple current rating must exceed the calculated value with margin for reliability. Multiple capacitors can be paralleled to increase ripple current capability.',
    '',
    '## Temperature and Thermal Design',
    '',
    'Capacitor lifetime follows the Arrhenius relationship, approximately doubling for every 10°C decrease in temperature. Design for hot spot temperatures below 70°C to achieve maximum lifetime.',
    '',
    'Mount capacitors to heatsinks or chassis for heat dissipation. Use thermal interface material to ensure good thermal contact. Ensure adequate airflow around capacitors.',
    '',
    '## Lifetime Estimation',
    '',
    'Film capacitor lifetime can be estimated using the Arrhenius equation. Rated lifetime (typically 100,000 hours at maximum temperature) is adjusted based on actual operating temperature.',
    '',
    'For every 10°C below maximum rated temperature, lifetime approximately doubles. Example: A capacitor rated for 100,000 hours at 85°C will achieve approximately 200,000 hours at 75°C and 400,000 hours at 65°C.'
  ];
  console.log('✅ Fixed content for DC-Link Capacitor Selection Guide');
}

// AC Filter Capacitor Applications
const acFilterArticle = support.articles.find(a => a.id === 'ac-filter-capacitor-applications');
if (acFilterArticle) {
  acFilterArticle.content = [
    'AC filter capacitors are essential components in power quality and harmonic filtering applications. This guide covers the selection and application of AC filter capacitors for various industrial and renewable energy systems.',
    '',
    '## Harmonic Filtering Applications',
    '',
    'AC filter capacitors are used in passive and active harmonic filters to reduce harmonic distortion in power systems. Typical applications include:',
    '',
    '- Variable frequency drives',
    '- UPS systems',
    '- Solar inverters',
    '- Industrial power supplies',
    '',
    'Filter capacitors work with inductors to create tuned circuits that shunt specific harmonic frequencies to ground, reducing distortion on the power line.',
    '',
    '## Power Factor Correction',
    '',
    'Capacitors provide reactive power compensation to improve power factor in industrial systems. Poor power factor results in higher current for the same real power, increasing losses and infrastructure costs.',
    '',
    'AC filter capacitors can simultaneously provide power factor correction and harmonic filtering when properly designed. Typical target power factor is 0.95 or higher.',
    '',
    '## Voltage and Frequency Considerations',
    '',
    'AC filter capacitors must be rated for the system voltage including harmonics. The RMS voltage including all harmonics should not exceed the capacitor rating.',
    '',
    'For 480V systems, typical capacitor ratings are 525V or 690V AC. Capacitors must also handle the harmonic currents without excessive heating. Calculate the total RMS current including fundamental and all significant harmonics.',
    '',
    '## Detuned and Tuned Filters',
    '',
    'Detuned filters use a capacitor with a series reactor to avoid resonance at specific harmonic frequencies. The tuning frequency is typically set below the lowest significant harmonic (e.g., 189Hz for 50Hz systems).',
    '',
    'Tuned filters are designed to provide maximum attenuation at specific harmonic frequencies (e.g., 250Hz for 5th harmonic). The capacitor voltage rating must account for the voltage rise across the reactor.'
  ];
  console.log('✅ Fixed content for AC Filter Capacitor Applications');
}

// Snubber Capacitor Design Guide
const snubberArticle = support.articles.find(a => a.id === 'snubber-capacitor-design-guide');
if (snubberArticle) {
  snubberArticle.content = [
    'Snubber capacitors protect power semiconductors from voltage transients and limit dv/dt during switching. This guide covers the design and selection of snubber capacitors for IGBT, MOSFET, and thyristor applications.',
    '',
    '## Snubber Circuit Functions',
    '',
    'Snubber circuits serve multiple functions in power electronics:',
    '',
    '- **Voltage spike suppression** - protects semiconductors from inductive switching transients',
    '- **dv/dt limiting** - prevents false triggering of thyristors and IGBTs',
    '- **EMI reduction** - dampens high-frequency oscillations',
    '- **Turn-off protection** - provides path for reverse recovery current',
    '',
    'RC snubbers use a resistor and capacitor in series, while RCD snubbers add a diode for improved efficiency.',
    '',
    '## Capacitor Selection for Snubbers',
    '',
    'Snubber capacitors must have low inductance and high dv/dt capability. Typical values range from 0.1μF to 10μF depending on application.',
    '',
    'Voltage rating should be at least 1.5 times the maximum expected voltage. The capacitor must handle the pulse current without excessive heating. Film capacitors are preferred for snubber applications due to their self-healing properties and high dv/dt capability.',
    '',
    '## RC Snubber Design',
    '',
    'For RC snubber design:',
    '',
    '1. Calculate required capacitance based on circuit inductance and desired voltage overshoot',
    '2. Select resistor value for critical damping (typically equal to characteristic impedance)',
    '3. Size resistor for power dissipation',
    '',
    'The characteristic impedance is **Z = sqrt(L/C)**, where L is stray inductance and C is snubber capacitance.',
    '',
    '## Mounting and Layout Considerations',
    '',
    'Proper mounting is critical for snubber effectiveness. Mount the snubber capacitor as close as possible to the semiconductor terminals to minimize stray inductance.',
    '',
    'Use wide, short traces or busbars for connections. Keep snubber loop area small to minimize inductance. For high-power applications, consider using multiple capacitors in parallel to reduce ESL.'
  ];
  console.log('✅ Fixed content for Snubber Capacitor Design Guide');
}

// Motor Capacitor Application Guide
const motorArticle = support.articles.find(a => a.id === 'motor-capacitor-application-guide');
if (motorArticle) {
  motorArticle.content = [
    'Motor run capacitors are essential for single-phase AC motor operation, providing the phase shift necessary for starting and running. This guide covers the selection and application of motor run capacitors for various motor types and applications.',
    '',
    '## Motor Run vs Start Capacitors',
    '',
    'Motor run capacitors are designed for continuous operation and are permanently connected to the auxiliary winding. They typically range from 1-100μF and use film or oil-filled construction.',
    '',
    'Motor start capacitors are designed for brief operation (few seconds) and are disconnected after starting. They use electrolytic construction and range from 100-800μF.',
    '',
    '> **Warning:** Using a start capacitor for continuous operation will cause rapid failure. Always verify the capacitor type matches the application.',
    '',
    '## Capacitor Sizing for Motors',
    '',
    'Motor run capacitor selection depends on motor power and design. A general rule is 30-50μF per kW of motor power. However, always check the motor nameplate for the manufacturer\'s recommended value.',
    '',
    'Common values:',
    '- 1-2HP motors use 10-20μF',
    '- 3-5HP motors use 30-50μF',
    '- 7.5-10HP motors use 60-80μF',
    '',
    'Wrong capacitance causes reduced torque, overheating, and poor efficiency. For replacement, match the original capacitor value unless the motor has been rewound.',
    '',
    '## Voltage Rating Selection',
    '',
    'Motor capacitor voltage rating should be 1.5-2 times the motor voltage:',
    '',
    '- For 230V motors, use 370V or 450V capacitors',
    '- For 115V motors, 250V or 370V capacitors are suitable',
    '',
    'Higher voltage ratings provide margin for voltage fluctuations and extend capacitor life. Never use a capacitor with voltage rating lower than the original.',
    '',
    '## Wiring and Installation',
    '',
    'Motor capacitors are connected to the auxiliary (start) winding of single-phase motors. In permanent split capacitor (PSC) motors, the capacitor remains in the circuit during operation.',
    '',
    'In capacitor-start motors, the capacitor is disconnected by a centrifugal switch or relay after starting. Ensure all connections are tight and properly insulated. Mount the capacitor in a location protected from mechanical damage but accessible for replacement.'
  ];
  console.log('✅ Fixed content for Motor Capacitor Application Guide');
}

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✅ Updated support.json\n');
