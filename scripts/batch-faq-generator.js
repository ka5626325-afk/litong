/**
 * 批量FAQ生成器
 * 为所有品牌的产品、方案、文章生成标准FAQ
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const brands = ['st', 'macmic', 'semikron', 'infineon', 'crrc'];

// FAQ模板库
const faqTemplates = {
  // 产品详情页FAQ模板 (5-6条)
  product: {
    mcu: [
      {
        question: "What are the main application scenarios for {partNumber}?",
        answer: "{partNumber} is designed for {applications}. Its {core} core at {frequency} provides excellent processing power for real-time control and signal processing tasks. With {flash} Flash and {ram} RAM, it can handle complex firmware requirements including communication protocols and control algorithms. The integrated peripherals make it ideal for industrial automation, consumer electronics, and IoT applications.",
        decisionGuide: "Contact our FAE team to discuss your specific application requirements and get recommendations on peripheral configuration.",
        keywords: ["{partNumber} applications", "{series} use cases", "microcontroller applications"]
      },
      {
        question: "How does {partNumber} compare to other microcontrollers in the same class?",
        answer: "Compared to competitors, {partNumber} offers superior price-performance ratio with its {core} core running at {frequency}. The comprehensive peripheral set including {peripherals} provides flexibility for various applications. {brand}'s mature ecosystem including development tools, extensive code libraries, and strong technical support significantly reduces development time. The {flash} Flash provides generous space for firmware, while the {ram} RAM supports complex buffer requirements. Additionally, {brand}'s long-term availability commitment ensures production continuity.",
        decisionGuide: "Request a detailed comparison report or schedule a technical consultation to evaluate {partNumber} for your project.",
        keywords: ["{partNumber} comparison", "microcontroller selection", "{series} vs competitors"]
      },
      {
        question: "What are the key PCB layout considerations for {partNumber}?",
        answer: "For optimal performance with {partNumber}: (1) Power supply - place decoupling capacitors (100nF ceramic + 4.7µF) close to each power pin. Use proper bulk capacitance for stable operation. (2) Clock circuit - keep crystal oscillator traces short and away from high-speed signals. (3) High-speed signals - route USB, Ethernet, and other high-speed interfaces with proper impedance matching. Keep them away from analog traces. (4) Grounding - implement solid ground planes and minimize ground loops. (5) Thermal management - ensure adequate copper area for heat dissipation, especially for high-frequency operation.",
        decisionGuide: "Download our reference PCB layout guide or contact our FAE team for layout review services.",
        keywords: ["{partNumber} PCB layout", "microcontroller hardware design", "PCB guidelines"]
      },
      {
        question: "What are the recommended operating conditions for {partNumber}?",
        answer: "{partNumber} operates at {voltageRange} supply voltage, with {typicalVoltage} being the most common configuration. The operating temperature range is {tempRange}. For reliable operation at {frequency}, ensure stable power supply with low ripple. The Flash memory requires proper wait state configuration based on operating frequency. When using analog peripherals, use a separate analog supply with proper filtering. The maximum GPIO output current is typically 8-25mA per pin, with a total limit for all pins. Always refer to the datasheet for detailed electrical characteristics and derating curves.",
        decisionGuide: "Review the complete datasheet for detailed electrical characteristics or contact our FAE team for application-specific recommendations.",
        keywords: ["{partNumber} specifications", "operating conditions", "electrical characteristics"]
      },
      {
        question: "What are common debugging issues with {partNumber} and their solutions?",
        answer: "Common {partNumber} debugging challenges: (1) JTAG/SWD connection failures - often caused by incorrect BOOT pin configuration or conflicting GPIO remapping. Solution: Check BOOT pin states, verify SWD pin alternate function settings. (2) Clock issues - typically due to incorrect PLL configuration or crystal problems. Solution: Verify HSE crystal and PLL settings using debugging tools. (3) Peripheral initialization failures - usually related to incorrect clock enabling or configuration. Solution: Ensure proper clock tree configuration, check peripheral initialization sequence. (4) Power-related resets - may occur due to insufficient decoupling or voltage drops. Solution: Add adequate decoupling capacitors, check power supply stability.",
        decisionGuide: "Contact our technical support team for debugging assistance or check our online knowledge base for detailed troubleshooting guides.",
        keywords: ["{partNumber} debugging", "troubleshooting", "common issues"]
      },
      {
        question: "How to select peripherals and configure {partNumber} for my application?",
        answer: "To configure {partNumber} for your application: (1) List all required interfaces and processing requirements. (2) Use the manufacturer's configuration tool to set up peripherals and generate initialization code. (3) Key selection criteria: Communication interfaces based on device compatibility and speed requirements; Analog peripherals for sensor interfacing; Timers for PWM and timing functions; Memory resources for code and data. (4) Consider using DMA for high-throughput peripherals to reduce CPU overhead. (5) Enable only required peripherals to minimize power consumption. (6) Implement proper interrupt priority management for real-time response.",
        decisionGuide: "Use our online selection tool or contact our FAE team for personalized configuration recommendations based on your project requirements.",
        keywords: ["{partNumber} configuration", "peripheral selection", "application setup"]
      }
    ],
    igbt: [
      {
        question: "What are the main application scenarios for {partNumber}?",
        answer: "{partNumber} is optimized for high-power switching applications. Its {voltage} voltage rating and {current} current capability make it ideal for motor drives, inverters, power supplies, and renewable energy systems. The {package} package provides excellent thermal performance for continuous operation. Typical applications include: industrial motor drives, solar inverters, UPS systems, welding equipment, and induction heating systems.",
        decisionGuide: "Contact our FAE team to evaluate {partNumber} for your power electronics design and receive thermal design recommendations.",
        keywords: ["{partNumber} applications", "IGBT uses", "power electronics"]
      },
      {
        question: "How does {partNumber} compare to competing IGBTs?",
        answer: "{partNumber} offers competitive performance in its voltage and current class. The device features low VCE(sat) for reduced conduction losses and optimized switching characteristics for efficient high-frequency operation. Compared to standard devices, it provides better thermal performance and reliability. {brand}'s manufacturing consistency ensures tight parameter distribution, which is critical for parallel operation. The integrated features and robust design make it suitable for demanding industrial applications.",
        decisionGuide: "Request a detailed comparison including efficiency analysis and thermal calculations for your specific operating conditions.",
        keywords: ["{partNumber} comparison", "IGBT selection", "power device comparison"]
      },
      {
        question: "What are the key PCB layout considerations for {partNumber}?",
        answer: "For optimal {partNumber} performance: (1) Thermal management - ensure adequate heatsink mounting with thermal interface material. Use proper thermal vias and copper areas for heat spreading. (2) Gate drive - keep gate traces short to minimize inductance. Use appropriate gate resistor values to control switching speed. (3) Kelvin connection - use separate sense connections for accurate current measurement. (4) Layout symmetry - maintain symmetrical layout in multi-device configurations. (5) Snubber circuits - consider RC snubbers to suppress voltage spikes from parasitic inductance.",
        decisionGuide: "Download our power electronics layout guide or contact our FAE team for PCB layout review and optimization support.",
        keywords: ["{partNumber} layout", "IGBT PCB design", "thermal design"]
      },
      {
        question: "What are the recommended operating conditions for {partNumber}?",
        answer: "{partNumber} operates as a {voltage} IGBT with continuous collector current up to {current} at rated temperature. The gate threshold voltage is typically 4-6V, with recommended gate drive voltage of 15V for full enhancement. The maximum junction temperature is 150°C, but for reliable long-term operation, maintain Tj below 125°C. VCE(sat) increases with temperature, so consider thermal derating in your design. The maximum pulsed current is typically 2-4 times the continuous rating. Always include safety margins in your design.",
        decisionGuide: "Review the complete datasheet for detailed electrical characteristics or contact our FAE team for thermal analysis and derating curves.",
        keywords: ["{partNumber} specifications", "IGBT ratings", "operating conditions"]
      },
      {
        question: "What are common design issues with {partNumber} and their solutions?",
        answer: "Common {partNumber} design challenges: (1) Excessive switching losses - caused by slow gate drive or inadequate gate voltage. Solution: Use gate driver with sufficient peak current, ensure proper gate drive voltage. (2) Voltage spikes during turn-off - due to parasitic inductance. Solution: Minimize loop inductance, add snubber circuits if necessary. (3) Thermal issues - caused by insufficient heatsinking. Solution: Use adequate heatsink, apply proper thermal interface material. (4) Gate oscillations - due to long gate traces or inadequate damping. Solution: Keep gate traces short, add appropriate gate resistor.",
        decisionGuide: "Contact our technical support team for design review services or access our application notes library.",
        keywords: ["{partNumber} design issues", "IGBT troubleshooting", "power device problems"]
      },
      {
        question: "How to calculate power losses and select heatsink for {partNumber}?",
        answer: "To calculate {partNumber} power losses: Conduction loss = VCE(sat) × IC × duty cycle. Switching loss depends on switching frequency and gate drive conditions. Total loss = conduction loss + switching loss. For heatsink selection: Required Rth = (Tjmax - Ta) / Ploss - RthJC - RthCS. Select heatsink with adequate thermal resistance and consider airflow conditions. For natural convection, choose larger heatsink with lower thermal resistance. Always include safety margins in thermal design.",
        decisionGuide: "Contact our FAE team for detailed loss calculations and thermal design recommendations for your specific application.",
        keywords: ["{partNumber} power loss", "heatsink selection", "thermal design"]
      }
    ],
    mosfet: [
      {
        question: "What are the main application scenarios for {partNumber}?",
        answer: "{partNumber} excels in high-frequency switching applications. Its {voltage} voltage rating and low RDS(on) of {rdsOn} make it ideal for DC-DC converters, motor drives, and power supplies. The {package} package provides excellent thermal performance. The low gate charge enables high-frequency operation, allowing smaller passive components. Common applications include: synchronous rectification, motor control, battery management, and switching power supplies.",
        decisionGuide: "Contact our FAE team to evaluate {partNumber} for your switching application and receive thermal design recommendations.",
        keywords: ["{partNumber} applications", "MOSFET uses", "power switching"]
      },
      {
        question: "How does {partNumber} compare to competing MOSFETs?",
        answer: "{partNumber} stands out with its low RDS(on) of {rdsOn}, which is competitive in its voltage class. This translates to lower conduction losses and higher efficiency. The gate charge of {qg} enables efficient high-frequency switching. {brand}'s technology provides excellent Figure of Merit (FOM). The package offers superior thermal performance compared to standard packages. Additionally, {brand}'s manufacturing quality and long-term availability commitment provide supply chain security.",
        decisionGuide: "Request a detailed comparison report including efficiency calculations for your specific operating conditions.",
        keywords: ["{partNumber} comparison", "MOSFET selection", "power device comparison"]
      },
      {
        question: "What are the key PCB layout considerations for {partNumber}?",
        answer: "For optimal {partNumber} performance: (1) Thermal management - use adequate copper area with thermal vias connecting to inner planes. This is critical for heat dissipation. (2) Gate drive - keep gate traces short and wide to minimize inductance. Use Kelvin connections for source sensing in high-current applications. (3) Decoupling - place ceramic capacitors close to the gate driver IC. (4) Current sensing - place sense resistor close to the source pin with dedicated traces. (5) Layout symmetry - maintain symmetrical layout in bridge configurations.",
        decisionGuide: "Download our reference PCB layout guide or contact our FAE team for layout review and thermal simulation support.",
        keywords: ["{partNumber} PCB layout", "MOSFET thermal design", "switching layout"]
      },
      {
        question: "What are the recommended operating conditions for {partNumber}?",
        answer: "{partNumber} operates as a {voltage} MOSFET with continuous drain current up to {current} at 25°C case temperature. The gate threshold voltage is typically 2-4V, with recommended gate drive voltage of 10V for full enhancement. The maximum junction temperature is 175°C, but for reliable operation, maintain Tj below 125°C. RDS(on) increases with temperature. The maximum pulsed drain current is typically 3-4 times the continuous rating. Always include safety margins in your design.",
        decisionGuide: "Review the complete datasheet for detailed electrical characteristics or contact our FAE team for application-specific derating recommendations.",
        keywords: ["{partNumber} specifications", "MOSFET ratings", "operating conditions"]
      },
      {
        question: "What are common design issues with {partNumber} and their solutions?",
        answer: "Common {partNumber} design challenges: (1) Thermal runaway at high currents - caused by insufficient heat sinking. Solution: Implement proper thermal vias, use large copper pours. (2) Gate oscillations - due to long gate traces or inadequate gate resistance. Solution: Keep gate traces short, add appropriate gate resistor. (3) Voltage spikes during switching - caused by parasitic inductance. Solution: Minimize loop inductance, add snubber circuits if necessary. (4) False triggering in high-side applications - due to dV/dt. Solution: Use negative gate drive, add Miller clamp circuit.",
        decisionGuide: "Contact our technical support team for design review services or access our application notes library.",
        keywords: ["{partNumber} design issues", "MOSFET troubleshooting", "switching problems"]
      },
      {
        question: "How to select gate driver and design gate drive circuit for {partNumber}?",
        answer: "For optimal {partNumber} performance, gate driver selection is critical: (1) Drive capability - choose a driver that can provide sufficient peak current to charge/discharge the gate charge quickly. (2) UVLO protection - ensure the driver has undervoltage lockout. (3) Dead-time control - in bridge applications, implement adequate dead-time to prevent shoot-through. (4) Bootstrap circuit - for high-side drivers, use proper bootstrap components. (5) Gate resistor - select appropriate value to control switching speed and reduce EMI. (6) Decoupling - place capacitors close to the driver supply pins.",
        decisionGuide: "Contact our FAE team for gate driver recommendations or request reference designs for your specific topology.",
        keywords: ["{partNumber} gate driver", "MOSFET gate drive", "driver selection"]
      }
    ]
  },
  
  // 方案详情页FAQ模板 (3-6条)
  solution: [
    {
      question: "What are the key technical highlights of this {solutionName} solution?",
      answer: "This {solutionName} solution leverages {brand}'s advanced technologies to deliver optimal performance. Key highlights include: (1) High-efficiency power conversion with carefully selected components. (2) Comprehensive protection features ensuring system reliability. (3) Scalable architecture supporting various power levels. (4) Complete software and hardware reference designs accelerating development. (5) Extensive testing and validation for industrial-grade reliability.",
      decisionGuide: "Contact our FAE team for detailed technical documentation and reference designs.",
      keywords: ["{solutionName} features", "solution highlights", "technical specifications"]
    },
    {
      question: "What are the main application scenarios for this solution?",
      answer: "This {solutionName} is designed for {applications}. The solution addresses key challenges in these applications including efficiency optimization, thermal management, and system reliability. Typical use cases include: industrial automation systems, renewable energy installations, electric vehicle infrastructure, and high-performance motor drives. The modular design allows customization for specific application requirements.",
      decisionGuide: "Discuss your specific application requirements with our FAE team for customized recommendations.",
      keywords: ["{solutionName} applications", "use cases", "target markets"]
    },
    {
      question: "What are the system integration considerations?",
      answer: "When integrating this {solutionName} into your system: (1) Power supply design - ensure adequate capacity and stability for all components. (2) Thermal management - implement proper heatsinking and airflow for power devices. (3) EMI/EMC - follow layout guidelines to minimize electromagnetic interference. (4) Protection circuits - implement overcurrent, overvoltage, and thermal protection. (5) Control interface - ensure proper signal integrity for control and feedback signals. (6) Testing - validate system performance under all operating conditions.",
      decisionGuide: "Contact our FAE team for system integration support and design review services.",
      keywords: ["{solutionName} integration", "system design", "implementation guide"]
    },
    {
      question: "What support and resources are available for this solution?",
      answer: "We provide comprehensive support for this {solutionName}: (1) Complete reference designs including schematics, PCB layouts, and BOM. (2) Software libraries and example code for rapid development. (3) Application notes and technical documentation. (4) Evaluation kits for proof-of-concept testing. (5) FAE support for design review and optimization. (6) Training materials and workshops. All resources are designed to accelerate your development and ensure successful implementation.",
      decisionGuide: "Access our solution resource center or contact our FAE team for personalized support.",
      keywords: ["{solutionName} support", "resources", "documentation"]
    }
  ],
  
  // 文章详情页FAQ模板 (4-8条)
  article: [
    {
      question: "What is the main purpose of this guide?",
      answer: "This guide provides comprehensive information about {topic} to help engineers and designers make informed decisions. It covers key concepts, selection criteria, design considerations, and best practices. The content is based on real-world experience and technical expertise, offering practical insights beyond basic datasheets.",
      decisionGuide: "Continue reading for detailed technical information or contact our FAE team for personalized guidance.",
      keywords: ["{topic} guide", "technical information", "design support"]
    },
    {
      question: "Who should read this guide?",
      answer: "This guide is designed for: (1) Hardware engineers selecting components for new designs. (2) System architects evaluating technology options. (3) Application engineers troubleshooting existing designs. (4) Procurement professionals understanding technical specifications. (5) Engineering managers making technology decisions. The content assumes basic electronics knowledge but explains advanced concepts clearly.",
      decisionGuide: "Share this guide with your team or contact us for team training sessions.",
      keywords: ["target audience", "engineers", "technical guide"]
    },
    {
      question: "What are the key takeaways from this guide?",
      answer: "The key takeaways include: (1) Understanding critical parameters and their impact on performance. (2) Selection criteria for different application scenarios. (3) Common pitfalls and how to avoid them. (4) Best practices for optimal design. (5) Resources for further learning and support. These insights will help you make better design decisions and avoid common issues.",
      decisionGuide: "Apply these insights to your current project or contact our FAE team for implementation support.",
      keywords: ["key takeaways", "summary", "design tips"]
    },
    {
      question: "How can I get additional support on this topic?",
      answer: "We offer multiple support channels: (1) Technical documentation and application notes available on our website. (2) Online knowledge base with FAQs and troubleshooting guides. (3) FAE team available for design consultation and review. (4) Training workshops and webinars. (5) Sample and evaluation programs. (6) Community forums for peer support. Our goal is to ensure your success with our products.",
      decisionGuide: "Contact our FAE team directly for personalized technical support on your specific application.",
      keywords: ["technical support", "FAE consultation", "design assistance"]
    }
  ],
  
  // Support列表页FAQ模板 (12-18条)
  supportList: [
    { q: "Is LiTong an authorized distributor for {brand}?", a: "Yes, LiTong Electronics is an authorized distributor for {brand}. We have direct relationships with the manufacturer and provide genuine products with full warranty support.", d: "Contact us to verify our authorization or request a quotation.", k: ["authorized distributor", "{brand} distributor"] },
    { q: "What is the typical lead time for {brand} products?", a: "Lead times vary by product type and availability. Standard products typically have 8-12 week lead times. We maintain strategic inventory for high-demand products. Contact us for current lead times on specific part numbers.", d: "Submit your RFQ for accurate lead time and availability information.", k: ["lead time", "delivery", "availability"] },
    { q: "How can I request samples of {brand} products?", a: "We provide sample support for qualified projects. Submit your sample request with project details, estimated annual usage, and timeline. Our team will review and arrange samples accordingly.", d: "Submit your sample request through our online form.", k: ["samples", "evaluation parts", "sample request"] },
    { q: "What technical support does LiTong provide?", a: "We offer comprehensive technical support including: application circuit design review, firmware development guidance, debugging assistance, and reference design recommendations. Our FAE team has hands-on experience with {brand} products.", d: "Submit your technical inquiry for personalized assistance.", k: ["technical support", "FAE services", "design support"] },
    { q: "How do I verify product authenticity?", a: "All products from LiTong are guaranteed genuine. We source directly from {brand} or authorized channels. Certificates of authenticity and traceability documentation are available upon request.", d: "Contact us for authenticity verification or documentation.", k: ["authenticity", "genuine products", "counterfeit prevention"] },
    { q: "What are your payment terms?", a: "We offer flexible payment terms for qualified customers. Standard terms are Net 30 for approved accounts. We also accept major credit cards and wire transfers. Contact our sales team for specific terms.", d: "Contact our sales team to discuss payment options and terms.", k: ["payment terms", "billing", "credit"] },
    { q: "Do you offer volume discounts?", a: "Yes, we offer competitive pricing and volume discounts based on order quantity and annual usage. Contact our sales team with your forecast for customized pricing.", d: "Request a quotation with your volume requirements.", k: ["volume discount", "pricing", "bulk order"] },
    { q: "What is your return and warranty policy?", a: "We honor manufacturer warranties and offer additional support. Standard return policy allows returns within 30 days for unopened products. Defective products are covered under manufacturer warranty.", d: "Contact customer service for return authorization or warranty claims.", k: ["return policy", "warranty", "defective products"] },
    { q: "How do I track my order?", a: "Once your order ships, you will receive tracking information via email. You can also contact our customer service team for order status updates.", d: "Contact customer service for order status or tracking information.", k: ["order tracking", "shipment status", "delivery tracking"] },
    { q: "Do you ship internationally?", a: "Yes, we ship to customers worldwide. We work with major logistics providers to ensure reliable delivery. Shipping costs and delivery times vary by destination.", d: "Contact our sales team for international shipping quotes.", k: ["international shipping", "export", "global delivery"] },
    { q: "Can you help with custom logistics requirements?", a: "Yes, we can accommodate special shipping and handling requirements including: scheduled deliveries, consignment inventory, and custom packaging. Contact our logistics team to discuss your needs.", d: "Contact our logistics team for custom shipping arrangements.", k: ["custom logistics", "special handling", "delivery requirements"] },
    { q: "How do I become a registered customer?", a: "Register on our website or contact our sales team. We will set up your account and provide access to online ordering, technical resources, and dedicated support.", d: "Register online or contact sales to set up your account.", k: ["customer registration", "account setup", "new customer"] }
  ]
};

// 生成FAQ的函数
function generateProductFAQ(product, category, brandData) {
  const templates = faqTemplates.product[category] || faqTemplates.product.mcu;
  const faqs = [];
  
  templates.forEach((template, idx) => {
    let answer = template.answer
      .replace(/{partNumber}/g, product.partNumber)
      .replace(/{series}/g, product.series || '')
      .replace(/{brand}/g, brandData.displayName || brandData.name)
      .replace(/{core}/g, product.core || 'ARM')
      .replace(/{frequency}/g, product.frequency || '')
      .replace(/{flash}/g, product.flash || '')
      .replace(/{ram}/g, product.ram || '')
      .replace(/{voltage}/g, product.voltage || '')
      .replace(/{current}/g, product.current || '')
      .replace(/{rdsOn}/g, product.rdsOn || '')
      .replace(/{qg}/g, product.qg || '')
      .replace(/{package}/g, product.package || '')
      .replace(/{applications}/g, (product.applications || []).join(', '))
      .replace(/{peripherals}/g, (product.features || []).slice(0, 3).join(', '))
      .replace(/{voltageRange}/g, '1.8V to 3.6V')
      .replace(/{typicalVoltage}/g, '3.3V')
      .replace(/{tempRange}/g, '-40°C to +85°C');
    
    let question = template.question.replace(/{partNumber}/g, product.partNumber);
    let decisionGuide = template.decisionGuide.replace(/{partNumber}/g, product.partNumber);
    let keywords = template.keywords.map(k => 
      k.replace(/{partNumber}/g, product.partNumber)
       .replace(/{series}/g, product.series || '')
       .replace(/{brand}/g, brandData.displayName || brandData.name)
    );
    
    faqs.push({
      question,
      answer,
      decisionGuide,
      keywords
    });
  });
  
  return faqs;
}

function generateSolutionFAQ(solution, brandData) {
  return faqTemplates.solution.map(template => ({
    question: template.question.replace(/{solutionName}/g, solution.name).replace(/{brand}/g, brandData.displayName || brandData.name),
    answer: template.answer
      .replace(/{solutionName}/g, solution.name)
      .replace(/{brand}/g, brandData.displayName || brandData.name)
      .replace(/{applications}/g, (solution.applications || []).map(a => a.name).join(', ')),
    decisionGuide: template.decisionGuide.replace(/{solutionName}/g, solution.name),
    keywords: template.keywords.map(k => k.replace(/{solutionName}/g, solution.name).replace(/{brand}/g, brandData.displayName || brandData.name))
  }));
}

function generateArticleFAQ(article, brandData) {
  return faqTemplates.article.map(template => ({
    question: template.question.replace(/{topic}/g, article.title),
    answer: template.answer.replace(/{topic}/g, article.title),
    decisionGuide: template.decisionGuide.replace(/{topic}/g, article.title),
    keywords: template.keywords.map(k => k.replace(/{topic}/g, article.title))
  }));
}

function generateSupportListFAQ(brandData) {
  return faqTemplates.supportList.map(template => ({
    question: template.q.replace(/{brand}/g, brandData.displayName || brandData.name),
    answer: template.a.replace(/{brand}/g, brandData.displayName || brandData.name),
    decisionGuide: template.d,
    keywords: template.k.map(k => k.replace(/{brand}/g, brandData.displayName || brandData.name))
  }));
}

// 主处理函数
function processBrand(brand) {
  console.log(`\n处理品牌: ${brand}`);
  const brandDir = path.join(dataDir, brand);
  
  // 加载品牌数据
  const brandData = JSON.parse(fs.readFileSync(path.join(brandDir, 'brand.json'), 'utf8'));
  
  // 1. 补充 brand.json FAQ (4-8条)
  if (!brandData.faqs || brandData.faqs.length < 4) {
    console.log('  补充 brand.json FAQ...');
    brandData.faqs = brandData.faqs || [];
    // 这里可以添加品牌特定的FAQ
    fs.writeFileSync(path.join(brandDir, 'brand.json'), JSON.stringify(brandData, null, 2));
  }
  
  // 2. 处理 products.json
  const productsPath = path.join(brandDir, 'products.json');
  if (fs.existsSync(productsPath)) {
    console.log('  处理 products.json...');
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    
    // 补充根级别FAQ
    if (!productsData.faqs || productsData.faqs.length < 3) {
      productsData.faqs = productsData.faqs || [];
      // 添加通用产品FAQ
    }
    
    // 处理每个分类和产品
    if (productsData.categories) {
      productsData.categories.forEach(cat => {
        // 确定产品类型
        let productType = 'mcu';
        if (cat.id.includes('igbt') || cat.name.toLowerCase().includes('igbt')) productType = 'igbt';
        else if (cat.id.includes('mosfet') || cat.name.toLowerCase().includes('mosfet')) productType = 'mosfet';
        
        // 处理每个产品
        if (cat.products) {
          cat.products.forEach(product => {
            if (!product.faqs || product.faqs.length < 5) {
              console.log(`    生成 ${product.partNumber} 的FAQ...`);
              product.faqs = generateProductFAQ(product, productType, brandData);
            }
          });
        }
      });
    }
    
    fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
  }
  
  // 3. 处理 solutions.json
  const solutionsPath = path.join(brandDir, 'solutions.json');
  if (fs.existsSync(solutionsPath)) {
    console.log('  处理 solutions.json...');
    const solutionsData = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));
    
    // 补充根级别FAQ
    if (!solutionsData.faqs || solutionsData.faqs.length < 3) {
      solutionsData.faqs = generateSupportListFAQ(brandData).slice(0, 6);
    }
    
    // 处理每个方案
    if (solutionsData.solutions) {
      solutionsData.solutions.forEach(solution => {
        if (!solution.faqs || solution.faqs.length < 3) {
          console.log(`    生成方案 ${solution.id} 的FAQ...`);
          solution.faqs = generateSolutionFAQ(solution, brandData);
        }
      });
    }
    
    fs.writeFileSync(solutionsPath, JSON.stringify(solutionsData, null, 2));
  }
  
  // 4. 处理 support.json
  const supportPath = path.join(brandDir, 'support.json');
  if (fs.existsSync(supportPath)) {
    console.log('  处理 support.json...');
    const supportData = JSON.parse(fs.readFileSync(supportPath, 'utf8'));
    
    // 补充根级别FAQ (12-18条)
    if (!supportData.faqs || supportData.faqs.length < 12) {
      console.log('    生成 support-list FAQ...');
      supportData.faqs = generateSupportListFAQ(brandData);
    }
    
    // 处理每篇文章
    if (supportData.articles) {
      supportData.articles.forEach(article => {
        if (!article.faqs || article.faqs.length < 4) {
          console.log(`    生成文章 ${article.id} 的FAQ...`);
          article.faqs = generateArticleFAQ(article, brandData);
        }
      });
    }
    
    fs.writeFileSync(supportPath, JSON.stringify(supportData, null, 2));
  }
  
  console.log(`  ${brand} 处理完成`);
}

// 执行
console.log('开始批量生成FAQ...');
console.log('='.repeat(60));

brands.forEach(brand => {
  try {
    processBrand(brand);
  } catch (e) {
    console.error(`处理 ${brand} 时出错:`, e.message);
  }
});

console.log('\n' + '='.repeat(60));
console.log('FAQ生成完成！');
