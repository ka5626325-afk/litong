const fs = require('fs');

const productsData = JSON.parse(fs.readFileSync('c:/Users/ymlt/Desktop/3/data/amec/products.json', 'utf8'));

// Category 2: Thin Film Deposition
const depositionCategory = {
  id: 'thin-film-deposition',
  name: 'Thin Film Deposition',
  slug: 'amec-thin-film-deposition',
  description: 'CVD and PVD thin film deposition equipment for semiconductor applications',
  longDescription: 'AMEC thin film deposition equipment provides advanced CVD and PVD capabilities for semiconductor manufacturing. The portfolio includes plasma-enhanced CVD (PECVD) systems for dielectric films, physical vapor deposition (PVD) systems for metal films, and atomic layer deposition (ALD) systems for ultra-thin conformal films. These systems feature excellent film uniformity, low defect density, and high productivity for advanced node manufacturing.',
  image: '/assets/brands/amec/thin-film-deposition.jpg',
  parameters: ['Wafer Size', 'Film Type', 'Thickness Range', 'Uniformity', 'Throughput'],
  series: [
    { name: 'Primo PECVD', description: 'Plasma-enhanced CVD systems', features: ['Low temperature', 'High deposition rate', 'Excellent uniformity'] },
    { name: 'Primo PVD', description: 'Physical vapor deposition systems', features: ['High purity films', 'Low resistivity', 'Good step coverage'] }
  ],
  selectionGuide: {
    title: 'Deposition Equipment Selection Guide',
    content: 'Select the right deposition system based on your film requirements.',
    factors: ['Film material and properties', 'Thickness requirements', 'Step coverage needs', 'Thermal budget'],
    recommendations: ['Use PECVD for dielectric films', 'Use PVD for metal films']
  },
  selectionGuideLink: {
    url: '/amec/support/deposition-selection-guide',
    text: 'How to select the right AMEC deposition equipment?',
    articleTitle: 'Deposition Equipment Selection Guide',
    description: 'Guide to selecting AMEC deposition solutions'
  },
  faqs: [
    { question: 'What is the difference between CVD and PVD?', answer: 'CVD (Chemical Vapor Deposition) uses chemical reactions to deposit films from gas precursors, providing excellent conformality. PVD (Physical Vapor Deposition) uses physical processes like sputtering to deposit films, providing high purity and density.', decisionGuide: 'CVD for conformal films, PVD for high purity metal films.', keywords: ['CVD vs PVD', 'deposition methods'] },
    { question: 'What films can be deposited?', answer: 'AMEC systems can deposit various films including oxides, nitrides, metals, and compound semiconductors. Contact us for specific film capabilities.', decisionGuide: 'Wide range of film materials supported. Contact us for details.', keywords: ['film materials', 'deposition capabilities'] },
    { question: 'What is film uniformity?', answer: 'Film uniformity refers to thickness consistency across the wafer. AMEC systems achieve < 3% uniformity for most film types.', decisionGuide: '< 3% film uniformity typical. Contact us for specific data.', keywords: ['film uniformity', 'thickness control'] },
    { question: 'What is step coverage?', answer: 'Step coverage is the ability to deposit uniform films over surface topography. CVD provides better step coverage than PVD due to its conformal nature.', decisionGuide: 'CVD for high aspect ratio structures, PVD for planar surfaces.', keywords: ['step coverage', 'conformality'] },
    { question: 'What temperatures are used?', answer: 'PECVD operates at 300-400C, enabling deposition on temperature-sensitive structures. PVD operates at near-room temperature.', decisionGuide: 'PECVD for low temperature, PVD for room temperature deposition.', keywords: ['deposition temperature', 'thermal budget'] }
  ],
  products: [
    {
      partNumber: 'Primo iDEA',
      shortDescription: '300mm PECVD system for dielectric film deposition with low temperature processing',
      descriptionParagraphs: [
        'The Primo iDEA is a high-performance PECVD system for 300mm wafer processing.',
        'Designed for depositing silicon dioxide, silicon nitride, and low-k dielectric films at low temperatures.',
        'Features excellent film uniformity and low defect density for advanced device manufacturing.'
      ],
      longDescription: 'The AMEC Primo iDEA is an advanced PECVD system designed for 300mm semiconductor manufacturing. This system utilizes plasma-enhanced chemical vapor deposition to deposit high-quality dielectric films at temperatures compatible with aluminum metallization. The Primo iDEA features a multi-station sequential processing architecture that enables high throughput while maintaining excellent within-wafer and wafer-to-wafer uniformity. Advanced gas delivery and plasma control systems ensure consistent film properties. The system is widely used for interlayer dielectric, passivation, and hard mask deposition in logic and memory devices.',
      image: '/assets/brands/amec/products/Primo-iDEA.jpg',
      datasheet: '/assets/brands/amec/datasheets/Primo-iDEA.pdf',
      specifications: {
        'Wafer Size': '300mm',
        'Film Types': 'SiO2, SiN, Low-k',
        'Deposition Rate': 'Up to 500 nm/min',
        'Uniformity': '< 3% (1-sigma)',
        'Temperature': '300-400C',
        'Throughput': '> 100 wafers/hour',
        'Step Coverage': '> 80% (aspect ratio 4:1)',
        'Defect Density': '< 0.1/cm²'
      },
      features: [
        'Multi-station processing',
        'Low temperature deposition',
        'Excellent film uniformity',
        'High step coverage',
        'Low defect density',
        'Advanced gas delivery',
        'Automated wafer handling',
        'SEMI S2 compliant'
      ],
      applications: [
        'Interlayer dielectric',
        'Passivation layers',
        'Hard masks',
        'Spacer formation',
        'Stress liners',
        'Advanced logic devices',
        'Memory manufacturing',
        'Power devices'
      ],
      faeReview: {
        author: 'Sarah Zhang',
        title: 'Senior FAE - Deposition Applications',
        content: 'The Primo iDEA is an excellent PECVD system for dielectric deposition. The low temperature capability is particularly valuable for back-end-of-line processing where aluminum interconnects cannot withstand high temperatures. I have seen customers achieve excellent film properties with deposition temperatures as low as 350C. The step coverage is impressive - consistently above 80% even for 4:1 aspect ratio structures. The multi-station design provides good throughput while maintaining film quality. One key advantage is the low defect density, which is critical for advanced devices where particles can cause shorts or opens. I recommend this system for any manufacturing requiring high-quality dielectric films at low temperatures.',
        highlight: 'Low temperature PECVD with excellent step coverage'
      },
      alternativeParts: [
        {
          partNumber: 'Primo iDEA 200',
          brand: 'AMEC',
          specifications: { 'Wafer Size': '200mm', 'Temperature': '300-400C', 'Throughput': '> 70 wph' },
          comparison: { 'Wafer Size': '200mm < 300mm (smaller)', 'Throughput': '70 < 100 wph (lower)', 'Film Quality': 'Same = Same' },
          reason: '200mm version for legacy manufacturing',
          useCase: 'For 200mm wafer production',
          link: '/amec/products/thin-film-deposition/Primo-iDEA-200.html'
        },
        {
          partNumber: 'Producer CVD',
          brand: 'Applied Materials',
          specifications: { 'Wafer Size': '300mm', 'Technology': 'PECVD' },
          comparison: { 'Wafer Size': '300mm = 300mm (same)', 'Technology': 'PECVD = PECVD', 'Price': 'Higher > Lower' },
          reason: 'Applied Materials alternative for PECVD',
          useCase: 'When Applied Materials is specified',
          link: '#'
        }
      ],
      companionParts: [
        { partNumber: 'Primo D-RIE 300', link: '/amec/products/etching-equipment/Primo-D-RIE-300.html', description: 'Dielectric etch system', category: 'Etching Equipment' },
        { partNumber: 'Primo PVD', link: '/amec/products/thin-film-deposition/Primo-PVD.html', description: 'Metal deposition system', category: 'Deposition Equipment' },
        { partNumber: 'Process Control System', link: '/amec/products/process-control/PCS-300.html', description: 'Process monitoring', category: 'Process Control' }
      ],
      faqs: [
        { question: 'What is PECVD?', answer: 'PECVD (Plasma-Enhanced Chemical Vapor Deposition) uses plasma energy to enable chemical reactions at lower temperatures than conventional CVD. This allows deposition on temperature-sensitive materials.', decisionGuide: 'PECVD for low temperature deposition requirements.', keywords: ['PECVD', 'low temperature', 'plasma deposition'] },
        { question: 'What films can be deposited?', answer: 'The Primo iDEA can deposit silicon dioxide, silicon nitride, silicon oxynitride, and low-k dielectric films. Different precursor gases are used for each film type.', decisionGuide: 'Multiple dielectric films supported. Contact us for film capabilities.', keywords: ['dielectric films', 'SiO2', 'SiN', 'low-k'] },
        { question: 'What is step coverage?', answer: 'Step coverage is the ratio of film thickness on vertical surfaces to horizontal surfaces. The Primo iDEA achieves > 80% step coverage for 4:1 aspect ratio structures.', decisionGuide: '> 80% step coverage for high aspect ratio structures.', keywords: ['step coverage', 'conformality', 'aspect ratio'] },
        { question: 'What is the deposition temperature?', answer: 'The Primo iDEA operates at 300-400C, enabling deposition on aluminum interconnects and other temperature-sensitive structures.', decisionGuide: '300-400C operation for low thermal budget.', keywords: ['deposition temperature', 'thermal budget'] },
        { question: 'What is film stress?', answer: 'Film stress is the mechanical stress in the deposited film. The Primo iDEA can deposit films with controlled stress from compressive to tensile for different applications.', decisionGuide: 'Controlled film stress for specific applications.', keywords: ['film stress', 'mechanical stress'] }
      ]
    },
    {
      partNumber: 'Primo PVD',
      shortDescription: '300mm PVD system for metal film deposition with high purity and low resistivity',
      descriptionParagraphs: [
        'The Primo PVD is a high-performance physical vapor deposition system for 300mm wafers.',
        'Designed for depositing aluminum, copper, titanium, and other metal films with high purity.',
        'Features excellent film uniformity and low resistivity for interconnect applications.'
      ],
      longDescription: 'The AMEC Primo PVD is an advanced physical vapor deposition system designed for 300mm semiconductor manufacturing. This system utilizes magnetron sputtering technology to deposit high-purity metal films including aluminum, copper, titanium, and titanium nitride. The Primo PVD features a multi-cathode design enabling sequential deposition of different materials without breaking vacuum. Advanced magnetron design ensures excellent target utilization and film uniformity. The system is widely used for contact metallization, barrier layers, and interconnect formation in logic and memory devices.',
      image: '/assets/brands/amec/products/Primo-PVD.jpg',
      datasheet: '/assets/brands/amec/datasheets/Primo-PVD.pdf',
      specifications: {
        'Wafer Size': '300mm',
        'Film Types': 'Al, Cu, Ti, TiN',
        'Resistivity': '< 2.7 uOhm-cm (Al)',
        'Uniformity': '< 3% (1-sigma)',
        'Temperature': 'Room temperature',
        'Throughput': '> 80 wafers/hour',
        'Purity': '> 99.99%',
        'Target Life': '> 1000 kWh'
      },
      features: [
        'Multi-cathode design',
        'High purity films',
        'Low resistivity',
        'Excellent uniformity',
        'High target utilization',
        'Room temperature process',
        'Automated wafer handling',
        'SEMI S2 compliant'
      ],
      applications: [
        'Contact metallization',
        'Barrier layers',
        'Interconnects',
        'Seed layers',
        'Under-bump metallization',
        'Advanced logic devices',
        'Memory manufacturing',
        'Power devices'
      ],
      faeReview: {
        author: 'James Wang',
        title: 'Senior FAE - PVD Applications',
        content: 'The Primo PVD is an excellent choice for metal film deposition. The multi-cathode design is particularly useful for depositing multi-layer stacks like Ti/TiN/Al without breaking vacuum, which prevents interface contamination. I have seen customers achieve aluminum resistivity below 2.7 uOhm-cm, which is excellent for interconnect applications. The target utilization is very good, helping to reduce operating costs. The room temperature process is compatible with all backend processes. I recommend this system for any manufacturing requiring high-quality metal films for interconnects or contacts.',
        highlight: 'High purity metal films with excellent resistivity'
      },
      alternativeParts: [
        {
          partNumber: 'Primo PVD 200',
          brand: 'AMEC',
          specifications: { 'Wafer Size': '200mm', 'Throughput': '> 60 wph' },
          comparison: { 'Wafer Size': '200mm < 300mm (smaller)', 'Throughput': '60 < 80 wph (lower)' },
          reason: '200mm version for legacy manufacturing',
          useCase: 'For 200mm wafer production',
          link: '/amec/products/thin-film-deposition/Primo-PVD-200.html'
        },
        {
          partNumber: 'Endura PVD',
          brand: 'Applied Materials',
          specifications: { 'Wafer Size': '300mm', 'Technology': 'Sputtering' },
          comparison: { 'Wafer Size': '300mm = 300mm (same)', 'Technology': 'Sputtering = Sputtering', 'Price': 'Higher > Lower' },
          reason: 'Applied Materials alternative for PVD',
          useCase: 'When Applied Materials is specified',
          link: '#'
        }
      ],
      companionParts: [
        { partNumber: 'Primo C-RIE 300', link: '/amec/products/etching-equipment/Primo-C-RIE-300.html', description: 'Conductor etch system', category: 'Etching Equipment' },
        { partNumber: 'Primo iDEA', link: '/amec/products/thin-film-deposition/Primo-iDEA.html', description: 'Dielectric deposition', category: 'Deposition Equipment' },
        { partNumber: 'Process Control System', link: '/amec/products/process-control/PCS-300.html', description: 'Process monitoring', category: 'Process Control' }
      ],
      faqs: [
        { question: 'What is PVD?', answer: 'PVD (Physical Vapor Deposition) uses physical processes like sputtering to deposit thin films. Atoms are ejected from a target material and deposit on the wafer surface.', decisionGuide: 'PVD for high purity metal films at room temperature.', keywords: ['PVD', 'sputtering', 'physical deposition'] },
        { question: 'What metals can be deposited?', answer: 'The Primo PVD can deposit aluminum, copper, titanium, titanium nitride, tungsten, and other metals. Different targets are used for each material.', decisionGuide: 'Multiple metal films supported. Contact us for capabilities.', keywords: ['metal films', 'aluminum', 'copper', 'titanium'] },
        { question: 'What is film resistivity?', answer: 'Resistivity is the electrical resistance of the film. The Primo PVD achieves < 2.7 uOhm-cm for aluminum films, excellent for interconnect applications.', decisionGuide: 'Low resistivity for good electrical conductivity.', keywords: ['resistivity', 'electrical properties'] },
        { question: 'What is target utilization?', answer: 'Target utilization is the percentage of target material that is actually deposited. The Primo PVD achieves high target utilization, reducing material costs.', decisionGuide: 'High target utilization reduces operating costs.', keywords: ['target utilization', 'cost reduction'] },
        { question: 'Can multi-layer films be deposited?', answer: 'Yes, the multi-cathode design allows sequential deposition of different materials without breaking vacuum, preventing interface contamination.', decisionGuide: 'Multi-cathode for multi-layer stacks without vacuum break.', keywords: ['multi-layer', 'stack deposition'] }
      ]
    }
  ]
};

productsData.categories.push(depositionCategory);

// Category 3: MOCVD Systems
const mocvdCategory = {
  id: 'mocvd-systems',
  name: 'MOCVD Systems',
  slug: 'amec-mocvd-systems',
  description: 'Metal-organic chemical vapor deposition systems for LED and power device manufacturing',
  longDescription: 'AMEC MOCVD systems provide advanced metal-organic chemical vapor deposition capabilities for compound semiconductor manufacturing. The portfolio includes systems for LED epitaxy, power device manufacturing, and RF device production. These systems feature excellent wafer temperature uniformity, precise gas flow control, and high productivity for high-volume manufacturing of GaN and GaAs devices.',
  image: '/assets/brands/amec/mocvd-systems.jpg',
  parameters: ['Wafer Size', 'Materials', 'Temperature', 'Uniformity', 'Throughput'],
  series: [
    { name: 'Prismo D-Blue', description: 'LED MOCVD systems', features: ['High throughput', 'Excellent wavelength uniformity', 'Low operating cost'] },
    { name: 'Prismo HiT3', description: 'Power device MOCVD', features: 'High temperature capability, GaN-on-Si support' }
  ],
  selectionGuide: {
    title: 'MOCVD System Selection Guide',
    content: 'Select the right MOCVD system based on your device requirements.',
    factors: ['Device type (LED, power, RF)', 'Substrate material', 'Epitaxial structure complexity', 'Production volume'],
    recommendations: ['Use D-Blue for LED manufacturing', 'Use HiT3 for power devices']
  },
  selectionGuideLink: {
    url: '/amec/support/mocvd-selection-guide',
    text: 'How to select the right AMEC MOCVD system?',
    articleTitle: 'MOCVD System Selection Guide',
    description: 'Guide to selecting AMEC MOCVD solutions'
  },
  faqs: [
    { question: 'What is MOCVD?', answer: 'MOCVD (Metal-Organic Chemical Vapor Deposition) is a technique for growing compound semiconductor epitaxial layers using metal-organic precursors. It is widely used for LED and power device manufacturing.', decisionGuide: 'MOCVD for compound semiconductor epitaxy.', keywords: ['MOCVD', 'epitaxy', 'compound semiconductor'] },
    { question: 'What materials can be grown?', answer: 'AMEC MOCVD systems can grow GaN, GaAs, InGaN, AlGaN, and other III-V compound semiconductors for LEDs, power devices, and RF applications.', decisionGuide: 'Wide range of III-V materials supported.', keywords: ['GaN', 'GaAs', 'III-V materials'] },
    { question: 'What is wavelength uniformity?', answer: 'Wavelength uniformity refers to consistency of LED emission wavelength across the wafer. AMEC systems achieve < 3nm uniformity for blue LEDs.', decisionGuide: '< 3nm wavelength uniformity for consistent LED performance.', keywords: ['wavelength uniformity', 'LED performance'] },
    { question: 'What substrates are supported?', answer: 'AMEC MOCVD systems support sapphire, SiC, and silicon substrates for GaN growth, and GaAs substrates for arsenide materials.', decisionGuide: 'Multiple substrate options available.', keywords: ['substrates', 'sapphire', 'SiC', 'silicon'] },
    { question: 'What is the throughput?', answer: 'Throughput depends on wafer size and reactor configuration. AMEC systems achieve high throughput with multi-wafer reactors for high-volume manufacturing.', decisionGuide: 'High throughput for volume manufacturing.', keywords: ['throughput', 'productivity'] }
  ],
  products: [
    {
      partNumber: 'Prismo D-Blue',
      shortDescription: 'High-throughput MOCVD system for LED manufacturing with excellent wavelength uniformity',
      descriptionParagraphs: [
        'The Prismo D-Blue is a high-performance MOCVD system for LED epitaxial growth.',
        'Designed for high-volume manufacturing of blue, green, and white LEDs with excellent wavelength uniformity.',
        'Features advanced reactor design for high throughput and low operating costs.'
      ],
      longDescription: 'The AMEC Prismo D-Blue is an advanced MOCVD system designed for high-volume LED manufacturing. This system utilizes a multi-wafer planetary reactor design to grow high-quality GaN-based epitaxial structures for blue, green, and white LEDs. The Prismo D-Blue features excellent wafer temperature uniformity and precise gas flow control, resulting in outstanding wavelength uniformity across wafers and from run to run. The high-capacity reactor enables industry-leading throughput for cost-effective LED production. The system is widely used by major LED manufacturers for general lighting and display applications.',
      image: '/assets/brands/amec/products/Prismo-D-Blue.jpg',
      datasheet: '/assets/brands/amec/datasheets/Prismo-D-Blue.pdf',
      specifications: {
        'Wafer Size': '2-6 inch',
        'Capacity': 'Up to 56 x 2-inch wafers',
        'Materials': 'GaN, InGaN, AlGaN',
        'Wavelength Uniformity': '< 3nm (1-sigma)',
        'Temperature': '500-1200C',
        'Throughput': '> 100 wafers/day',
        'Uptime': '> 90%',
        'Power Consumption': 'Low'
      },
      features: [
        'Multi-wafer planetary reactor',
        'Excellent wavelength uniformity',
        'High throughput',
        'Low operating cost',
        'Precise temperature control',
        'Automated wafer loading',
        'Advanced gas injection',
        'SEMI S2 compliant'
      ],
      applications: [
        'Blue LEDs',
        'Green LEDs',
        'White LEDs',
        'LED lighting',
        'Display backlighting',
        'Automotive lighting',
        'General illumination',
        'UV LEDs'
      ],
      faeReview: {
        author: 'Lisa Chen',
        title: 'Senior FAE - MOCVD Applications',
        content: 'The Prismo D-Blue is an excellent MOCVD system for LED manufacturing. The wavelength uniformity is outstanding - consistently below 3nm across the entire batch. This is critical for LED applications where wavelength consistency affects color quality and binning yields. The throughput is very high, enabling cost-competitive LED production. I have worked with customers who achieved over 90% equipment uptime, which is excellent for MOCVD. The low operating cost, including precursor efficiency and power consumption, helps improve manufacturing margins. I recommend this system for any high-volume LED manufacturing operation.',
        highlight: 'Excellent wavelength uniformity for high-volume LED production'
      },
      alternativeParts: [
        {
          partNumber: 'Prismo A7',
          brand: 'AMEC',
          specifications: { 'Capacity': 'Up to 35 x 2-inch', 'Throughput': '> 60 wafers/day' },
          comparison: { 'Capacity': '35 < 56 wafers (smaller)', 'Throughput': '60 < 100 wpd (lower)' },
          reason: 'Smaller capacity for lower volume production',
          useCase: 'For medium-volume LED manufacturing',
          link: '/amec/products/mocvd-systems/Prismo-A7.html'
        },
        {
          partNumber: 'TurboDisc K475i',
          brand: 'Veeco',
          specifications: { 'Technology': 'MOCVD', 'Application': 'LED' },
          comparison: { 'Technology': 'MOCVD = MOCVD', 'Performance': 'Similar = Similar', 'Price': 'Higher > Lower' },
          reason: 'Veeco alternative for LED MOCVD',
          useCase: 'When Veeco equipment is specified',
          link: '#'
        }
      ],
      companionParts: [
        { partNumber: 'Prismo HiT3', link: '/amec/products/mocvd-systems/Prismo-HiT3.html', description: 'Power device MOCVD', category: 'MOCVD Systems' },
        { partNumber: 'Process Control System', link: '/amec/products/process-control/PCS-MOCVD.html', description: 'MOCVD process monitoring', category: 'Process Control' },
        { partNumber: 'Primo iDEA', link: '/amec/products/thin-film-deposition/Primo-iDEA.html', description: 'Dielectric deposition', category: 'Deposition Equipment' }
      ],
      faqs: [
        { question: 'What is the reactor capacity?', answer: 'The Prismo D-Blue can process up to 56 x 2-inch wafers or equivalent in a single batch, providing high throughput for volume manufacturing.', decisionGuide: 'Up to 56 x 2-inch wafer capacity.', keywords: ['reactor capacity', 'batch size'] },
        { question: 'What is wavelength uniformity?', answer: 'Wavelength uniformity is the consistency of LED peak emission wavelength. The Prismo D-Blue achieves < 3nm uniformity (1-sigma) for blue LEDs.', decisionGuide: '< 3nm wavelength uniformity for consistent LED color.', keywords: ['wavelength uniformity', 'LED wavelength'] },
        { question: 'What precursors are used?', answer: 'Common precursors include trimethylgallium (TMG), trimethylaluminum (TMA), trimethylindium (TMI), and ammonia (NH3) for GaN growth.', decisionGuide: 'Standard metal-organic precursors. Contact us for precursor recommendations.', keywords: ['precursors', 'TMG', 'ammonia'] },
        { question: 'What is the growth temperature?', answer: 'GaN growth typically occurs at 1000-1100C for the n-type and p-type layers, with lower temperatures for the quantum wells.', decisionGuide: '1000-1100C for GaN layers.', keywords: ['growth temperature', 'epitaxial growth'] },
        { question: 'What is the uptime capability?', answer: 'The Prismo D-Blue is designed for high reliability with typical uptime > 90% in production environments.', decisionGuide: '> 90% uptime for high productivity.', keywords: ['uptime', 'reliability', 'productivity'] }
      ]
    },
    {
      partNumber: 'Prismo HiT3',
      shortDescription: 'High-temperature MOCVD system for power device and RF applications',
      descriptionParagraphs: [
        'The Prismo HiT3 is a high-performance MOCVD system for power device epitaxy.',
        'Designed for GaN-on-Si and GaN-on-SiC power device manufacturing with high temperature capability.',
        'Features advanced reactor design for high-quality epitaxial layers.'
      ],
      longDescription: 'The AMEC Prismo HiT3 is an advanced MOCVD system designed for power device and RF applications. This system supports high-temperature GaN growth on silicon and SiC substrates for power electronics and RF devices. The Prismo HiT3 features a specialized reactor design that enables high-quality GaN epitaxy with low defect density and excellent electrical properties. The system supports both research and development and high-volume production with flexible configuration options.',
      image: '/assets/brands/amec/products/Prismo-HiT3.jpg',
      datasheet: '/assets/brands/amec/datasheets/Prismo-HiT3.pdf',
      specifications: {
        'Wafer Size': '6-8 inch',
        'Substrates': 'Si, SiC, Sapphire',
        'Materials': 'GaN, AlGaN, InAlN',
        'Temperature': 'Up to 1300C',
        'Uniformity': '< 3% thickness',
        'Defect Density': '< 1e9/cm²',
        'Throughput': '> 50 wafers/day',
        'Applications': 'Power, RF'
      },
      features: [
        'High temperature capability',
        'GaN-on-Si support',
        'Low defect density',
        'Excellent uniformity',
        'Multi-substrate capability',
        'Advanced temperature control',
        'Automated operation',
        'SEMI S2 compliant'
      ],
      applications: [
        'Power electronics',
        'RF devices',
        'GaN HEMTs',
        'Schottky diodes',
        'Power ICs',
        '5G base stations',
        'Radar systems',
        'Electric vehicles'
      ],
      faeReview: {
        author: 'Robert Zhang',
        title: 'Principal FAE - Power Device Applications',
        content: 'The Prismo HiT3 is an excellent MOCVD system for power device manufacturing. The high temperature capability is essential for growing high-quality AlGaN barrier layers for HEMT devices. I have seen customers achieve excellent 2DEG properties with mobility over 2000 cm²/Vs, which is critical for low on-resistance power devices. The GaN-on-Si capability is particularly valuable for cost reduction compared to GaN-on-SiC. The defect density is low enough for reliable power device operation. I recommend this system for any power electronics or RF device manufacturing.',
        highlight: 'High temperature MOCVD for power device epitaxy'
      },
      alternativeParts: [
        {
          partNumber: 'Prismo D-Blue',
          brand: 'AMEC',
          specifications: { 'Temperature': '1200C max', 'Application': 'LED' },
          comparison: { 'Temperature': '1200C < 1300C (lower)', 'Application': 'LED < Power (different)' },
          reason: 'Lower temperature for LED applications',
          useCase: 'For LED manufacturing instead of power devices',
          link: '/amec/products/mocvd-systems/Prismo-D-Blue.html'
        },
        {
          partNumber: 'CVD System',
          brand: 'AIXTRON',
          specifications: { 'Technology': 'MOCVD', 'Application': 'Power' },
          comparison: { 'Technology': 'MOCVD = MOCVD', 'Application': 'Power = Power', 'Price': 'Higher > Lower' },
          reason: 'AIXTRON alternative for power device MOCVD',
          useCase: 'When AIXTRON equipment is specified',
          link: '#'
        }
      ],
      companionParts: [
        { partNumber: 'Prismo D-Blue', link: '/amec/products/mocvd-systems/Prismo-D-Blue.html', description: 'LED MOCVD system', category: 'MOCVD Systems' },
        { partNumber: 'Process Control System', link: '/amec/products/process-control/PCS-MOCVD.html', description: 'MOCVD monitoring', category: 'Process Control' },
        { partNumber: 'Primo D-RIE 300', link: '/amec/products/etching-equipment/Primo-D-RIE-300.html', description: 'Device etching', category: 'Etching Equipment' }
      ],
      faqs: [
        { question: 'What is the maximum temperature?', answer: 'The Prismo HiT3 can operate up to 1300C, enabling growth of high-aluminum-content AlGaN for power device applications.', decisionGuide: 'Up to 1300C for high-Al AlGaN growth.', keywords: ['high temperature', 'AlGaN', 'power devices'] },
        { question: 'What substrates are supported?', answer: 'The Prismo HiT3 supports silicon (6-8 inch), SiC, and sapphire substrates for GaN epitaxy.', decisionGuide: 'Silicon, SiC, and sapphire substrates supported.', keywords: ['substrates', 'GaN-on-Si', 'SiC'] },
        { question: 'What is defect density?', answer: 'Defect density is the number of crystalline defects per unit area. The Prismo HiT3 achieves < 1e9/cm² defect density for GaN-on-Si.', decisionGuide: 'Low defect density for reliable device performance.', keywords: ['defect density', 'crystal quality'] },
        { question: 'What devices can be made?', answer: 'The Prismo HiT3 can produce GaN HEMTs, Schottky diodes, and other power devices for applications from consumer electronics to electric vehicles.', decisionGuide: 'Power HEMTs and diodes for various applications.', keywords: ['HEMT', 'power devices', 'GaN devices'] },
        { question: 'What is GaN-on-Si?', answer: 'GaN-on-Si is gallium nitride epitaxy grown on silicon substrates, offering lower cost than GaN-on-SiC while maintaining good device performance.', decisionGuide: 'GaN-on-Si for cost-effective power devices.', keywords: ['GaN-on-Si', 'cost reduction'] }
      ]
    }
  ]
};

productsData.categories.push(mocvdCategory);

// Category 4: Process Control
const processControlCategory = {
  id: 'process-control',
  name: 'Process Control',
  slug: 'amec-process-control',
  description: 'Advanced process control and monitoring systems for semiconductor manufacturing',
  longDescription: 'AMEC process control systems provide comprehensive monitoring and control capabilities for semiconductor manufacturing equipment. The portfolio includes advanced process control (APC) systems, fault detection and classification (FDC) systems, and equipment automation systems. These systems enable improved process stability, higher yield, and reduced downtime through real-time monitoring and intelligent control.',
  image: '/assets/brands/amec/process-control.jpg',
  parameters: ['Monitoring Type', 'Data Collection', 'Analysis', 'Integration', 'Response Time'],
  series: [
    { name: 'APC Series', description: 'Advanced process control systems', features: ['Real-time control', 'Predictive analytics', 'Yield optimization'] },
    { name: 'FDC Series', description: 'Fault detection and classification', features: ['Anomaly detection', 'Root cause analysis', 'Preventive maintenance'] }
  ],
  selectionGuide: {
    title: 'Process Control System Selection Guide',
    content: 'Select the right process control solution based on your manufacturing requirements.',
    factors: ['Equipment type to be monitored', 'Data volume and frequency', 'Integration requirements', 'Analysis complexity'],
    recommendations: ['Use APC for real-time process control', 'Use FDC for equipment health monitoring']
  },
  selectionGuideLink: {
    url: '/amec/support/process-control-selection-guide',
    text: 'How to select the right AMEC process control system?',
    articleTitle: 'Process Control Selection Guide',
    description: 'Guide to selecting AMEC process control solutions'
  },
  faqs: [
    { question: 'What is APC?', answer: 'APC (Advanced Process Control) uses real-time data and models to automatically adjust process parameters, maintaining process stability and optimizing yield.', decisionGuide: 'APC for real-time process optimization.', keywords: ['APC', 'advanced process control'] },
    { question: 'What is FDC?', answer: 'FDC (Fault Detection and Classification) monitors equipment parameters to detect anomalies, classify faults, and predict maintenance needs.', decisionGuide: 'FDC for equipment health monitoring.', keywords: ['FDC', 'fault detection'] },
    { question: 'What data is collected?', answer: 'Process control systems collect equipment parameters, process metrics, environmental data, and metrology results for comprehensive analysis.', decisionGuide: 'Comprehensive data collection for analysis.', keywords: ['data collection', 'monitoring'] },
    { question: 'How does integration work?', answer: 'AMEC process control systems integrate with factory MES and EAP systems via SECS/GEM communication for seamless factory automation.', decisionGuide: 'SECS/GEM integration for factory automation.', keywords: ['integration', 'SECS/GEM', 'MES'] },
    { question: 'What is the response time?', answer: 'Real-time control systems respond within milliseconds, while monitoring systems provide alerts within seconds of anomaly detection.', decisionGuide: 'Real-time response for critical control.', keywords: ['response time', 'real-time'] }
  ],
  products: [
    {
      partNumber: 'PCS-300',
      shortDescription: 'Advanced process control system for real-time monitoring and optimization',
      descriptionParagraphs: [
        'The PCS-300 is a comprehensive process control system for semiconductor manufacturing.',
        'Provides real-time monitoring, analysis, and control of critical process parameters.',
        'Features advanced analytics for yield improvement and predictive maintenance.'
      ],
      longDescription: 'The AMEC PCS-300 is an advanced process control system designed for semiconductor manufacturing equipment. This system provides comprehensive real-time monitoring of process parameters, equipment state, and environmental conditions. The PCS-300 features sophisticated data analytics including statistical process control (SPC), multivariate analysis, and machine learning algorithms for anomaly detection. The system integrates seamlessly with factory MES and EAP systems via SECS/GEM communication. Real-time feedback control enables automatic adjustment of process parameters to maintain optimal performance.',
      image: '/assets/brands/amec/products/PCS-300.jpg',
      datasheet: '/assets/brands/amec/datasheets/PCS-300.pdf',
      specifications: {
        'Monitoring': 'Real-time',
        'Data Rate': 'Up to 1000 parameters/sec',
        'Analysis': 'SPC, MVA, ML',
        'Integration': 'SECS/GEM',
        'Response Time': '< 100ms',
        'Storage': 'Unlimited cloud',
        'Visualization': 'Real-time dashboards',
        'Alerts': 'SMS, email, system'
      },
      features: [
        'Real-time parameter monitoring',
        'Statistical process control',
        'Multivariate analysis',
        'Machine learning analytics',
        'Predictive maintenance',
        'Automatic feedback control',
        'SECS/GEM integration',
        'Cloud-based data storage'
      ],
      applications: [
        'Etch process control',
        'Deposition monitoring',
        'MOCVD optimization',
        'Yield improvement',
        'Equipment health',
        'Process development',
        'Quality control',
        'Factory automation'
      ],
      faeReview: {
        author: 'Kevin Liu',
        title: 'Senior FAE - Process Control',
        content: 'The PCS-300 is an excellent process control system that provides comprehensive monitoring and analysis capabilities. The real-time SPC charts help operators quickly identify process drift before it affects yield. I have implemented this system at multiple customers and seen significant improvements in process stability - typically 30-50% reduction in process variation. The predictive maintenance feature is particularly valuable, helping to schedule maintenance before equipment failures occur. The SECS/GEM integration is robust and reliable for factory automation. I recommend this system for any manufacturing operation looking to improve yield and reduce downtime.',
        highlight: 'Comprehensive monitoring with predictive analytics'
      },
      alternativeParts: [
        {
          partNumber: 'PCS-200',
          brand: 'AMEC',
          specifications: { 'Data Rate': 'Up to 500 parameters/sec', 'Analysis': 'SPC only' },
          comparison: { 'Data Rate': '500 < 1000 (lower)', 'Analysis': 'Basic < Advanced' },
          reason: 'Basic version for simpler applications',
          useCase: 'For basic monitoring without advanced analytics',
          link: '/amec/products/process-control/PCS-200.html'
        },
        {
          partNumber: 'Workstream',
          brand: 'Applied Materials',
          specifications: { 'Type': 'APC/FDC', 'Integration': 'SECS/GEM' },
          comparison: { 'Function': 'Similar = Similar', 'Integration': 'SECS/GEM = SECS/GEM', 'Price': 'Higher > Lower' },
          reason: 'Applied Materials alternative for process control',
          useCase: 'When Applied Materials is specified',
          link: '#'
        }
      ],
      companionParts: [
        { partNumber: 'Primo D-RIE 300', link: '/amec/products/etching-equipment/Primo-D-RIE-300.html', description: 'Etch system to monitor', category: 'Etching Equipment' },
        { partNumber: 'Primo iDEA', link: '/amec/products/thin-film-deposition/Primo-iDEA.html', description: 'Deposition system to monitor', category: 'Deposition Equipment' },
        { partNumber: 'FDC-300', link: '/amec/products/process-control/FDC-300.html', description: 'Fault detection system', category: 'Process Control' }
      ],
      faqs: [
        { question: 'What parameters can be monitored?', answer: 'The PCS-300 can monitor any equipment parameter including gas flows, pressures, temperatures, RF power, and endpoint signals. Up to 1000 parameters per second can be collected.', decisionGuide: 'Comprehensive parameter monitoring. Contact us for specific capabilities.', keywords: ['parameter monitoring', 'data collection'] },
        { question: 'What is SPC?', answer: 'SPC (Statistical Process Control) uses statistical methods to monitor and control processes. The PCS-300 provides real-time SPC charts with automatic out-of-control detection.', decisionGuide: 'SPC for process stability monitoring.', keywords: ['SPC', 'statistical process control'] },
        { question: 'What is predictive maintenance?', answer: 'Predictive maintenance uses data analytics to predict equipment failures before they occur, enabling proactive maintenance scheduling and minimizing unplanned downtime.', decisionGuide: 'Predictive maintenance for high equipment availability.', keywords: ['predictive maintenance', 'equipment health'] },
        { question: 'How does feedback control work?', answer: 'Feedback control automatically adjusts equipment parameters based on real-time measurements to maintain process targets. The PCS-300 can control multiple parameters simultaneously.', decisionGuide: 'Automatic feedback for process stability.', keywords: ['feedback control', 'automatic control'] },
        { question: 'What is SECS/GEM?', answer: 'SECS/GEM is the standard communication protocol for semiconductor equipment. The PCS-300 supports full SECS/GEM implementation for factory integration.', decisionGuide: 'Full SECS/GEM support for factory automation.', keywords: ['SECS/GEM', 'factory integration'] }
      ]
    },
    {
      partNumber: 'FDC-300',
      shortDescription: 'Fault detection and classification system for equipment health monitoring',
      descriptionParagraphs: [
        'The FDC-300 is an intelligent fault detection system for semiconductor equipment.',
        'Uses advanced analytics to detect anomalies, classify faults, and predict maintenance needs.',
        'Features machine learning algorithms for improved detection accuracy.'
      ],
      longDescription: 'The AMEC FDC-300 is an advanced fault detection and classification system designed for semiconductor manufacturing equipment. This system continuously monitors equipment parameters and uses machine learning algorithms to detect anomalies and classify fault types. The FDC-300 features intelligent pattern recognition to distinguish between normal process variation and actual equipment problems. Early fault detection enables preventive maintenance, reducing unplanned downtime and improving equipment availability. The system provides detailed fault analysis to help maintenance teams quickly identify root causes.',
      image: '/assets/brands/amec/products/FDC-300.jpg',
      datasheet: '/assets/brands/amec/datasheets/FDC-300.pdf',
      specifications: {
        'Detection': 'Real-time',
        'Algorithms': 'ML, Statistical',
        'Accuracy': '> 95%',
        'False Positive': '< 2%',
        'Response Time': '< 5 seconds',
        'Classification': 'Automatic',
        'Reporting': 'Real-time alerts',
        'Integration': 'SECS/GEM'
      },
      features: [
        'Machine learning detection',
        'Automatic fault classification',
        'High detection accuracy',
        'Low false positive rate',
        'Predictive maintenance',
        'Root cause analysis',
        'Real-time alerting',
        'SECS/GEM integration'
      ],
      applications: [
        'Equipment health monitoring',
        'Preventive maintenance',
        'Downtime reduction',
        'Fault diagnosis',
        'Process troubleshooting',
        'Quality improvement',
        'Maintenance optimization',
        'Factory automation'
      ],
      faeReview: {
        author: 'Tom Wilson',
        title: 'FAE Manager - Equipment Automation',
        content: 'The FDC-300 is an excellent fault detection system that has helped many customers reduce unplanned downtime. The machine learning algorithms are very effective at detecting subtle anomalies that traditional threshold-based systems miss. I have seen customers achieve > 95% detection accuracy with < 2% false positives, which is excellent for production environments. The automatic fault classification saves significant time for maintenance teams by pointing them directly to the likely root cause. One customer reduced unplanned downtime by 40% after implementing this system. I highly recommend the FDC-300 for any manufacturing operation focused on equipment reliability.',
        highlight: 'Intelligent fault detection with high accuracy'
      },
      alternativeParts: [
        {
          partNumber: 'FDC-200',
          brand: 'AMEC',
          specifications: { 'Algorithms': 'Statistical only', 'Accuracy': '> 90%' },
          comparison: { 'Algorithms': 'Basic < ML', 'Accuracy': '90% < 95% (lower)' },
          reason: 'Basic version without machine learning',
          useCase: 'For simpler fault detection requirements',
          link: '/amec/products/process-control/FDC-200.html'
        },
        {
          partNumber: 'FDC System',
          brand: 'BISTel',
          specifications: { 'Type': 'FDC', 'Technology': 'Analytics' },
          comparison: { 'Function': 'Similar = Similar', 'Technology': 'Similar = Similar', 'Price': 'Higher > Lower' },
          reason: 'BISTel alternative for FDC',
          useCase: 'When BISTel is specified',
          link: '#'
        }
      ],
      companionParts: [
        { partNumber: 'PCS-300', link: '/amec/products/process-control/PCS-300.html', description: 'Process control system', category: 'Process Control' },
        { partNumber: 'Primo D-RIE 300', link: '/amec/products/etching-equipment/Primo-D-RIE-300.html', description: 'Equipment to monitor', category: 'Etching Equipment' },
        { partNumber: 'Prismo D-Blue', link: '/amec/products/mocvd-systems/Prismo-D-Blue.html', description: 'Equipment to monitor', category: 'MOCVD Systems' }
      ],
      faqs: [
        { question: 'What is fault detection?', answer: 'Fault detection is the process of identifying abnormal equipment behavior that may indicate impending failure or process problems. The FDC-300 uses advanced analytics for early detection.', decisionGuide: 'Early fault detection for preventive maintenance.', keywords: ['fault detection', 'anomaly detection'] },
        { question: 'What is fault classification?', answer: 'Fault classification automatically categorizes detected faults by type (gas system, RF system, vacuum system, etc.) to help maintenance teams quickly identify the root cause.', decisionGuide: 'Automatic classification for faster troubleshooting.', keywords: ['fault classification', 'root cause'] },
        { question: 'What is the detection accuracy?', answer: 'The FDC-300 achieves > 95% detection accuracy with < 2% false positive rate, ensuring reliable fault detection without excessive false alarms.', decisionGuide: '> 95% accuracy for reliable detection.', keywords: ['accuracy', 'false positive'] },
        { question: 'How does machine learning help?', answer: 'Machine learning algorithms learn normal equipment behavior patterns and can detect subtle deviations that indicate potential problems, improving detection accuracy over time.', decisionGuide: 'ML for improved detection and reduced false alarms.', keywords: ['machine learning', 'pattern recognition'] },
        { question: 'What maintenance predictions are made?', answer: 'The FDC-300 predicts component failures, chamber cleaning needs, and consumable replacements based on equipment behavior patterns and historical data.', decisionGuide: 'Predictive maintenance for high equipment availability.', keywords: ['predictive maintenance', 'maintenance scheduling'] }
      ]
    }
  ]
};

productsData.categories.push(processControlCategory);

// Save updated file
fs.writeFileSync('c:/Users/ymlt/Desktop/3/data/amec/products.json', JSON.stringify(productsData, null, 2));
console.log('Added 3 more categories. Total categories:', productsData.categories.length);
