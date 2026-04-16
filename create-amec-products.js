const fs = require('fs');

const productsData = {
  seoTitle: 'AMEC Products | Semiconductor Equipment Distributor',
  seoDescription: 'AMEC semiconductor manufacturing equipment including etching systems, thin film deposition, and MOCVD equipment. Authorized distributor with technical support.',
  seoKeywords: [
    'AMEC products',
    'AMEC distributor',
    'etching equipment',
    'semiconductor equipment',
    'MOCVD equipment',
    'thin film deposition'
  ],
  faqs: [
    {
      question: 'What product categories does AMEC offer?',
      answer: 'AMEC offers four main product categories: 1) Etching Equipment - Advanced plasma etching systems for dielectric, conductor, and 3D NAND applications. 2) Thin Film Deposition - CVD and PVD systems for various semiconductor thin film applications. 3) MOCVD Systems - Metal-organic chemical vapor deposition equipment for LED and power device manufacturing. 4) Process Control - Advanced monitoring and control systems for semiconductor equipment.',
      decisionGuide: 'Browse our product categories or contact our FAE team for recommendations.',
      keywords: ['AMEC product categories', 'etching equipment', 'semiconductor equipment']
    },
    {
      question: 'How do I select the right AMEC equipment for my application?',
      answer: 'Selecting the right AMEC equipment involves several considerations: 1) Define your process requirements - Device type, materials, feature sizes, and throughput targets. 2) Identify your application type - Logic manufacturing, memory, LED, or power devices. 3) Consider process capabilities - Etch rate, uniformity, selectivity, and defect control requirements. 4) Evaluate integration needs - Compatibility with existing equipment and automation systems. 5) Assess support requirements - Training, spare parts, and field service availability. Our website provides equipment selection guides. Our FAE team can also provide process review and equipment recommendations.',
      decisionGuide: 'Use our selection guides or contact our FAE team with your specifications for personalized equipment recommendations.',
      keywords: ['AMEC selection guide', 'equipment selection', 'semiconductor equipment']
    },
    {
      question: 'What is the difference between etching and deposition equipment?',
      answer: 'Etching and deposition are complementary semiconductor manufacturing processes: Etching Equipment removes material from the wafer surface to create patterns and structures. Types include dielectric etch (oxide, nitride), conductor etch (metal, polysilicon), and high aspect ratio etch (3D NAND). Deposition Equipment adds thin film materials to the wafer surface. Types include CVD (chemical vapor deposition) for conformal films and PVD (physical vapor deposition) for metal films. Both are essential for building complex semiconductor devices. AMEC offers both etching and deposition equipment, allowing optimization for your specific process flow.',
      decisionGuide: 'Choose etching for patterning and structure formation, deposition for thin film creation. Contact us for process flow optimization.',
      keywords: ['etching vs deposition', 'semiconductor process', 'equipment selection']
    },
    {
      question: 'Are AMEC products compatible with industry standards?',
      answer: 'AMEC products are fully compatible with industry standards: SEMI Standards - All equipment meets SEMI S2 (safety), S8 (ergonomics), and F47 (power quality) standards. Interface Compatibility - SECS/GEM communication for factory automation and integration with MES systems. Process Compatibility - Recipes and processes compatible with industry-standard materials and chemistries. Substrate Handling - Supports standard wafer sizes from 2-inch to 12-inch. As an authorized distributor, we can provide detailed compatibility information and integration support for your specific manufacturing environment.',
      decisionGuide: 'Contact our FAE team for compatibility verification and integration planning.',
      keywords: ['AMEC compatibility', 'SEMI standards', 'industry standards']
    },
    {
      question: 'What is the typical lead time for AMEC equipment?',
      answer: 'Lead times for AMEC equipment vary based on product type and configuration: Standard Equipment - Typical etching and deposition systems have 6-9 month lead times from order to delivery. Custom Configurations - Specialized configurations or large-volume orders may have 9-12 month lead times. Spare Parts - Common spare parts maintained in local warehouses ship within 1-2 weeks. For critical projects, we recommend early planning and forecast-based supply agreements. Contact our sales team for current lead times on specific equipment models and to discuss your project timeline requirements.',
      decisionGuide: 'Contact our sales team for current lead times and project planning assistance.',
      keywords: ['AMEC lead time', 'delivery schedule', 'equipment availability']
    }
  ],
  categories: []
};

// Category 1: Etching Equipment
const etchingCategory = {
  id: 'etching-equipment',
  name: 'Etching Equipment',
  slug: 'amec-etching-equipment',
  description: 'Advanced plasma etching systems for semiconductor manufacturing',
  longDescription: 'AMEC etching equipment offers industry-leading plasma etching technology for semiconductor manufacturing. The portfolio includes dielectric etch systems for oxide and nitride materials, conductor etch systems for metal and polysilicon, and high aspect ratio etch systems for 3D NAND applications. These systems feature advanced plasma control, excellent uniformity, and high productivity for advanced node manufacturing. As an authorized distributor, we provide comprehensive equipment selection guidance, technical support, and reliable supply chain services.',
  image: '/assets/brands/amec/etching-equipment.jpg',
  parameters: ['Wafer Size', 'Etch Rate', 'Uniformity', 'Selectivity', 'Throughput'],
  series: [
    { name: 'Primo D-RIE', description: 'Dielectric etch systems', features: ['High etch rate', 'Excellent uniformity', 'Advanced process control'] },
    { name: 'Primo C-RIE', description: 'Conductor etch systems', features: ['High selectivity', 'Low damage', 'Multi-wafer processing'] }
  ],
  selectionGuide: {
    title: 'Etching Equipment Selection Guide',
    content: 'Select the right etching system based on your process requirements.',
    factors: ['Material to be etched', 'Feature size and aspect ratio', 'Selectivity requirements', 'Throughput targets'],
    recommendations: ['Use D-RIE series for dielectric materials', 'Use C-RIE series for conductor materials']
  },
  selectionGuideLink: {
    url: '/amec/support/etching-selection-guide',
    text: 'How to select the right AMEC etching equipment?',
    articleTitle: 'Etching Equipment Selection Guide',
    description: 'Comprehensive guide to selecting AMEC etching solutions'
  },
  faqs: [
    {
      question: 'What are the advantages of AMEC etching systems?',
      answer: 'AMEC etching systems offer several advantages: 1) Advanced Plasma Control - Proprietary plasma source technology delivers excellent etch uniformity and profile control. 2) High Productivity - Multi-wafer processing and fast wafer handling maximize throughput. 3) Process Flexibility - Wide process window supports multiple materials and applications. 4) Low Cost of Ownership - Efficient gas usage and long chamber component lifetime reduce operating costs. 5) Local Support - Rapid response for service and applications support in Asia.',
      decisionGuide: 'Choose AMEC etching systems for advanced process control and cost-effective manufacturing.',
      keywords: ['etching advantages', 'plasma etch', 'process control']
    },
    {
      question: 'What wafer sizes do AMEC etching systems support?',
      answer: 'AMEC etching systems support a wide range of wafer sizes: 200mm Systems - For legacy and power device manufacturing. 300mm Systems - For advanced logic and memory manufacturing. AMEC also offers systems for smaller substrates used in LED and power device applications. The systems feature automated wafer handling with minimal particle generation. Contact our FAE team for specific wafer size compatibility for your application.',
      decisionGuide: 'AMEC supports 200mm and 300mm wafers. Contact us for specific requirements.',
      keywords: ['wafer size', '200mm', '300mm']
    },
    {
      question: 'What is the difference between D-RIE and C-RIE series?',
      answer: 'AMEC D-RIE and C-RIE series serve different etching applications: D-RIE Series - Designed for dielectric etching including oxide, nitride, and low-k materials. Features high etch rate and excellent uniformity for interlayer dielectric applications. C-RIE Series - Designed for conductor etching including aluminum, copper, tungsten, and polysilicon. Features high selectivity and low plasma damage for gate and interconnect etching. Selection Guidelines - Use D-RIE for dielectric films, C-RIE for metal and polysilicon films.',
      decisionGuide: 'D-RIE for dielectrics, C-RIE for conductors. Contact us for process recommendations.',
      keywords: ['D-RIE', 'C-RIE', 'dielectric etch', 'conductor etch']
    },
    {
      question: 'How do I optimize etch uniformity?',
      answer: 'Optimizing etch uniformity involves several factors: Chamber Design - AMEC systems use advanced gas distribution and plasma confinement for inherent uniformity. Process Parameters - Gas flow rates, pressure, and power settings affect uniformity. Our FAE team can help optimize recipes. Temperature Control - Precise wafer temperature control ensures consistent etch rates across the wafer. Preventive Maintenance - Regular chamber cleaning and component replacement maintain uniformity over time. AMEC systems include advanced metrology for real-time uniformity monitoring.',
      decisionGuide: 'AMEC systems provide excellent uniformity. Contact us for process optimization support.',
      keywords: ['etch uniformity', 'process optimization', 'chamber design']
    },
    {
      question: 'What safety features are included?',
      answer: 'AMEC etching systems include comprehensive safety features: SEMI S2 Compliance - All systems meet SEMI S2 safety standards for semiconductor equipment. Gas Safety - Automated gas detection, isolation valves, and exhaust systems prevent hazardous gas exposure. Interlocks - Comprehensive hardware and software interlocks prevent unsafe operations. Emergency Stop - Easily accessible E-stops and automatic safe-state entry. Training - Complete safety training for operators and maintenance personnel.',
      decisionGuide: 'Comprehensive safety features included. Contact us for safety documentation.',
      keywords: ['safety features', 'SEMI S2', 'gas safety']
    }
  ],
  products: [
    {
      partNumber: 'Primo D-RIE 300',
      shortDescription: '300mm dielectric etch system with high etch rate and excellent uniformity for advanced node manufacturing',
      descriptionParagraphs: [
        'The Primo D-RIE 300 is a high-performance dielectric etch system for 300mm wafer processing.',
        'With advanced plasma source technology, it delivers exceptional etch uniformity and profile control for oxide and nitride films.',
        'The system features high productivity with dual-wafer processing capability and automated wafer handling.'
      ],
      longDescription: 'The AMEC Primo D-RIE 300 is a state-of-the-art dielectric etch system designed for 300mm semiconductor manufacturing. This system utilizes advanced capacitively-coupled plasma (CCP) technology to deliver superior etch performance for dielectric materials including silicon dioxide, silicon nitride, and low-k dielectrics. The Primo D-RIE 300 features a dual-station processing chamber that enables high throughput while maintaining excellent within-wafer and wafer-to-wafer uniformity. Advanced process control systems monitor and adjust plasma parameters in real-time to ensure consistent results. The system is widely used for interlayer dielectric etching, contact etch, and spacer formation in advanced logic and memory devices.',
      image: '/assets/brands/amec/products/Primo-D-RIE-300.jpg',
      datasheet: '/assets/brands/amec/datasheets/Primo-D-RIE-300.pdf',
      specifications: {
        'Wafer Size': '300mm',
        'Etch Rate': 'Up to 800 nm/min (oxide)',
        'Uniformity': '< 3% (3-sigma)',
        'Selectivity': '> 50:1 (oxide to PR)',
        'Throughput': '> 120 wafers/hour',
        'Chamber Type': 'Dual-station CCP',
        'Process Control': 'Real-time plasma monitoring',
        'Operating Temperature': 'Controlled wafer temperature'
      },
      features: [
        'Dual-station processing for high throughput',
        'Advanced CCP plasma source',
        'Excellent etch uniformity (< 3%)',
        'High selectivity to photoresist',
        'Real-time process monitoring',
        'Automated wafer handling',
        'Low particle generation',
        'SEMI S2 compliant'
      ],
      applications: [
        'Interlayer dielectric etching',
        'Contact hole etching',
        'Spacer formation',
        'Hard mask etching',
        '3D NAND channel etch',
        'DRAM capacitor etch',
        'Advanced logic devices',
        'Power device manufacturing'
      ],
      faeReview: {
        author: 'Michael Chen',
        title: 'Senior FAE - Etch Applications',
        content: 'The Primo D-RIE 300 is my go-to recommendation for dielectric etching in 300mm manufacturing. In my experience supporting advanced node development, this system consistently delivers the uniformity and profile control required for sub-7nm devices. The dual-station design is particularly impressive - it maintains high throughput without compromising process quality. I have seen customers achieve 3-sigma uniformity below 3% across the entire wafer, which is critical for advanced patterning. The real-time plasma monitoring helps catch process drift before it affects yield. One implementation tip: pay attention to chamber conditioning - the system performs best after a consistent production schedule. Overall, an excellent choice for cost-effective dielectric etching.',
        highlight: 'Excellent uniformity and throughput for advanced dielectric etching'
      },
      alternativeParts: [
        {
          partNumber: 'Primo D-RIE 200',
          brand: 'AMEC',
          specifications: {
            'Wafer Size': '200mm',
            'Etch Rate': 'Up to 600 nm/min',
            'Uniformity': '< 4%',
            'Throughput': '> 80 wafers/hour'
          },
          comparison: {
            'Wafer Size': '200mm < 300mm (smaller)',
            'Etch Rate': '600 < 800 nm/min (lower)',
            'Throughput': '80 < 120 wph (lower)',
            'Uniformity': '4% > 3% (slightly higher)'
          },
          reason: '200mm version for legacy and power device manufacturing',
          useCase: 'Recommended for 200mm wafer production lines',
          link: '/amec/products/etching-equipment/Primo-D-RIE-200.html'
        },
        {
          partNumber: 'Centris Sym3',
          brand: 'Applied Materials',
          specifications: {
            'Wafer Size': '300mm',
            'Technology': 'CCP dielectric etch',
            'Features': 'Multi-station processing'
          },
          comparison: {
            'Wafer Size': '300mm = 300mm (same)',
            'Technology': 'CCP = CCP (similar)',
            'Price': 'Higher > Lower (more expensive)',
            'Local Support': 'International > Local (less responsive)'
          },
          reason: 'Applied Materials alternative for dielectric etching',
          useCase: 'When Applied Materials equipment is specified',
          link: '#'
        }
      ],
      companionParts: [
        {
          partNumber: 'Primo C-RIE 300',
          link: '/amec/products/etching-equipment/Primo-C-RIE-300.html',
          description: 'Conductor etch system for complementary processing',
          category: 'Etching Equipment'
        },
        {
          partNumber: 'Primo iDEA',
          link: '/amec/products/deposition-equipment/Primo-iDEA.html',
          description: 'CVD system for dielectric deposition',
          category: 'Deposition Equipment'
        },
        {
          partNumber: 'Process Control System',
          link: '/amec/products/process-control/PCS-300.html',
          description: 'Advanced process monitoring and control',
          category: 'Process Control'
        }
      ],
      faqs: [
        {
          question: 'What is the maximum etch rate for oxide films?',
          answer: 'The Primo D-RIE 300 achieves oxide etch rates up to 800 nm/min depending on film type and process requirements. Typical production processes run at 400-600 nm/min for optimal profile control and selectivity.',
          decisionGuide: 'Up to 800 nm/min oxide etch rate. Contact us for process optimization.',
          keywords: ['etch rate', 'oxide etching', 'throughput']
        },
        {
          question: 'How is etch uniformity measured?',
          answer: 'Etch uniformity is measured as 3-sigma variation across the wafer. The Primo D-RIE 300 achieves < 3% uniformity for typical dielectric etch processes. Measurements are taken at 49 points across the wafer using optical metrology.',
          decisionGuide: '< 3% uniformity (3-sigma). Contact us for uniformity data.',
          keywords: ['uniformity', 'etch uniformity', 'process control']
        },
        {
          question: 'What materials can be etched?',
          answer: 'The Primo D-RIE 300 can etch various dielectric materials including silicon dioxide (SiO2), silicon nitride (Si3N4), low-k dielectrics, and high-k dielectrics. Different chemistries are used for each material.',
          decisionGuide: 'Supports all common dielectric materials. Contact us for specific material capabilities.',
          keywords: ['dielectric etch', 'materials', 'process capabilities']
        },
        {
          question: 'What is the throughput capability?',
          answer: 'The dual-station design enables throughput > 120 wafers per hour for typical interlayer dielectric etch processes. Actual throughput depends on process time and wafer handling requirements.',
          decisionGuide: '> 120 wafers/hour typical throughput. Contact us for throughput modeling.',
          keywords: ['throughput', 'productivity', 'wafer handling']
        },
        {
          question: 'What process gases are used?',
          answer: 'Common process gases include fluorocarbons (CF4, C4F8), fluorinated gases (SF6, NF3), and oxygen for photoresist stripping. Gas selection depends on the material being etched and process requirements.',
          decisionGuide: 'Standard fluorocarbon and fluorinated gases. Contact us for gas recommendations.',
          keywords: ['process gases', 'fluorocarbons', 'etch chemistry']
        }
      ]
    },
    {
      partNumber: 'Primo C-RIE 300',
      shortDescription: '300mm conductor etch system with high selectivity and low damage for gate and interconnect etching',
      descriptionParagraphs: [
        'The Primo C-RIE 300 is a high-performance conductor etch system for 300mm wafer processing.',
        'Designed for etching aluminum, copper, tungsten, and polysilicon with high selectivity and minimal plasma damage.',
        'Features advanced plasma control for precise profile control and critical dimension uniformity.'
      ],
      longDescription: 'The AMEC Primo C-RIE 300 is an advanced conductor etch system designed for 300mm semiconductor manufacturing. This system utilizes inductively-coupled plasma (ICP) technology to deliver superior etch performance for conductor materials including aluminum, copper, tungsten, and polysilicon. The Primo C-RIE 300 features high selectivity to underlying dielectrics and minimal plasma damage to sensitive device structures. Advanced endpoint detection ensures precise etch depth control for critical gate and interconnect applications. The system is widely used for gate etching, contact etching, and metal line formation in advanced logic and memory devices.',
      image: '/assets/brands/amec/products/Primo-C-RIE-300.jpg',
      datasheet: '/assets/brands/amec/datasheets/Primo-C-RIE-300.pdf',
      specifications: {
        'Wafer Size': '300mm',
        'Etch Rate': 'Up to 500 nm/min (polysilicon)',
        'Selectivity': '> 100:1 (poly to oxide)',
        'Uniformity': '< 3% (3-sigma)',
        'Throughput': '> 100 wafers/hour',
        'Chamber Type': 'ICP source',
        'Endpoint Detection': 'Optical emission spectroscopy',
        'Plasma Damage': 'Minimal damage to devices'
      },
      features: [
        'ICP plasma source for high density plasma',
        'High selectivity to underlying films',
        'Minimal plasma damage',
        'Advanced endpoint detection',
        'Excellent CD uniformity',
        'Automated wafer handling',
        'Multi-step recipe capability',
        'SEMI S2 compliant'
      ],
      applications: [
        'Gate etching',
        'Contact etching',
        'Metal line etching',
        'Polysilicon etching',
        'Tungsten etching',
        'Hard mask etching',
        'Advanced logic devices',
        'Memory device manufacturing'
      ],
      faeReview: {
        author: 'David Liu',
        title: 'Principal FAE - Etch Applications',
        content: 'The Primo C-RIE 300 is an excellent choice for conductor etching applications. The ICP source provides high plasma density for fast etching while maintaining excellent selectivity. I have used this system for gate etching in FinFET devices with excellent results - the selectivity to oxide is outstanding, preventing damage to the fin structures. The endpoint detection system is very reliable, ensuring consistent etch depth across production runs. The low plasma damage is critical for advanced devices where channel damage can affect transistor performance. I recommend this system for any logic or memory manufacturing requiring precise conductor etching.',
        highlight: 'High selectivity and low damage for advanced conductor etching'
      },
      alternativeParts: [
        {
          partNumber: 'Primo C-RIE 200',
          brand: 'AMEC',
          specifications: {
            'Wafer Size': '200mm',
            'Etch Rate': 'Up to 400 nm/min',
            'Selectivity': '> 80:1',
            'Throughput': '> 70 wafers/hour'
          },
          comparison: {
            'Wafer Size': '200mm < 300mm (smaller)',
            'Etch Rate': '400 < 500 nm/min (lower)',
            'Throughput': '70 < 100 wph (lower)',
            'Selectivity': '80:1 < 100:1 (lower)'
          },
          reason: '200mm version for legacy manufacturing',
          useCase: 'For 200mm wafer production lines',
          link: '/amec/products/etching-equipment/Primo-C-RIE-200.html'
        },
        {
          partNumber: 'Versys Metal',
          brand: 'Lam Research',
          specifications: {
            'Wafer Size': '300mm',
            'Technology': 'ICP metal etch'
          },
          comparison: {
            'Wafer Size': '300mm = 300mm (same)',
            'Technology': 'ICP = ICP (similar)',
            'Price': 'Higher > Lower (more expensive)',
            'Local Support': 'International > Local'
          },
          reason: 'Lam Research alternative for metal etching',
          useCase: 'When Lam Research equipment is specified',
          link: '#'
        }
      ],
      companionParts: [
        {
          partNumber: 'Primo D-RIE 300',
          link: '/amec/products/etching-equipment/Primo-D-RIE-300.html',
          description: 'Dielectric etch system for complementary processing',
          category: 'Etching Equipment'
        },
        {
          partNumber: 'Primo PVD',
          link: '/amec/products/deposition-equipment/Primo-PVD.html',
          description: 'PVD system for metal deposition',
          category: 'Deposition Equipment'
        },
        {
          partNumber: 'Process Control System',
          link: '/amec/products/process-control/PCS-300.html',
          description: 'Advanced process monitoring',
          category: 'Process Control'
        }
      ],
      faqs: [
        {
          question: 'What conductor materials can be etched?',
          answer: 'The Primo C-RIE 300 can etch polysilicon, aluminum, copper, tungsten, titanium, and titanium nitride. Different chemistries are optimized for each material to achieve high selectivity and profile control.',
          decisionGuide: 'Supports all common conductor materials. Contact us for specific process capabilities.',
          keywords: ['conductor etch', 'materials', 'polysilicon', 'metal etch']
        },
        {
          question: 'How is selectivity achieved?',
          answer: 'High selectivity is achieved through optimized gas chemistries and plasma conditions. The ICP source allows independent control of plasma density and ion energy to maximize etch rate of the target material while minimizing etching of underlying layers.',
          decisionGuide: 'Optimized chemistries provide > 100:1 selectivity. Contact us for selectivity data.',
          keywords: ['selectivity', 'etch selectivity', 'ICP plasma']
        },
        {
          question: 'What is plasma damage and how is it minimized?',
          answer: 'Plasma damage refers to electrical damage to sensitive device structures from charged particles. The Primo C-RIE 300 minimizes damage through controlled ion energy, pulsed plasma operation, and optimized chamber design.',
          decisionGuide: 'Advanced plasma control minimizes device damage. Contact us for damage assessment data.',
          keywords: ['plasma damage', 'device damage', 'low damage etching']
        },
        {
          question: 'What is endpoint detection?',
          answer: 'Endpoint detection monitors the etch process in real-time to determine when the target material has been completely etched. The Primo C-RIE 300 uses optical emission spectroscopy to detect changes in plasma chemistry at the etch endpoint.',
          decisionGuide: 'Optical endpoint detection ensures precise etch control. Contact us for endpoint detection capabilities.',
          keywords: ['endpoint detection', 'OES', 'etch control']
        },
        {
          question: 'What is CD uniformity?',
          answer: 'Critical Dimension (CD) uniformity refers to the consistency of feature sizes across the wafer. The Primo C-RIE 300 achieves < 3% CD uniformity (3-sigma) for gate etching applications, ensuring consistent device performance.',
          decisionGuide: '< 3% CD uniformity for consistent device performance. Contact us for uniformity data.',
          keywords: ['CD uniformity', 'critical dimension', 'etch uniformity']
        }
      ]
    }
  ]
};

productsData.categories.push(etchingCategory);

// Write initial file
fs.writeFileSync('c:/Users/ymlt/Desktop/3/data/amec/products.json', JSON.stringify(productsData, null, 2));
console.log('Created etching category with 2 products');
