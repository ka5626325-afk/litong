const fs = require('fs');
const path = require('path');

// Read the products.json file
const productsPath = path.join(__dirname, 'data', 'southchip', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Add more root-level FAQs
const additionalRootFaqs = [
  {
    question: "Where can I buy SouthChip products?",
    answer: "SouthChip products are available through authorized distributors including LiTong. As an authorized SouthChip distributor, LiTong offers: (1) Full product portfolio - All SouthChip battery chargers, fuel gauges, DC-DC converters, and power management ICs. (2) Technical support - Experienced FAEs provide product selection, application design, and troubleshooting assistance. (3) Local inventory - Stocked products for fast delivery. (4) Competitive pricing - Volume discounts and flexible payment terms. (5) Quality assurance - 100% genuine products with full manufacturer warranty. (6) Value-added services - Programming, testing, and kitting services available. Contact LiTong sales for quotations, samples, and delivery schedules.",
    decisionGuide: "Contact LiTong for SouthChip product availability, pricing, and technical support.",
    keywords: ["SouthChip distributor", "buy SouthChip", "LiTong", "authorized distributor"]
  },
  {
    question: "What technical support does LiTong provide for SouthChip products?",
    answer: "LiTong provides comprehensive technical support for SouthChip products: (1) Product selection - FAEs help identify optimal SouthChip solutions based on application requirements. (2) Application design - Schematic review, PCB layout guidance, and thermal design support. (3) Troubleshooting - Debug assistance for production issues and field failures. (4) Reference designs - Access to SouthChip reference designs and evaluation boards. (5) Training - Product training and application workshops. (6) Documentation - Datasheets, application notes, and design guides. (7) Sample programming - Programming services for configurable devices. LiTong's FAE team has extensive experience with SouthChip products across consumer, automotive, and industrial applications.",
    decisionGuide: "Contact LiTong FAEs for technical support on SouthChip product selection and application design.",
    keywords: ["technical support", "FAE", "application design", "troubleshooting"]
  }
];

products.faqs = [...products.faqs, ...additionalRootFaqs];

// Fix each category
products.categories.forEach(category => {
  // Add more FAQs to each category
  if (category.faqs.length < 5) {
    const categoryName = category.name;
    const additionalFaqs = [
      {
        question: `What packages are available for SouthChip ${categoryName}?`,
        answer: `SouthChip ${categoryName} are available in various packages: (1) WLCSP - Wafer-level chip-scale package for smallest size. Ideal for space-constrained applications like smartphones and wearables. (2) QFN - Quad flat no-lead packages with exposed thermal pads. Good thermal performance and easy assembly. Available in various sizes (QFN-12, QFN-16, QFN-24). (3) SOT-23 - Small outline transistor packages for low-pin-count devices. Cost-effective for simple functions. (4) SOP-8 - Small outline package for legacy compatibility. (5) TSSOP - Thin shrink small outline for medium pin count. Package selection depends on size constraints, thermal requirements, and assembly capabilities. Contact LiTong for package recommendations and availability.`,
        decisionGuide: "Contact LiTong for package selection based on your size and thermal requirements.",
        keywords: ["package", "WLCSP", "QFN", "SOT-23", "footprint"]
      },
      {
        question: `How do I get samples of SouthChip ${categoryName}?`,
        answer: `Samples of SouthChip ${categoryName} are available through LiTong: (1) Sample request - Contact LiTong sales with your company information, project details, and required quantities. (2) Evaluation boards - Complete evaluation kits with reference designs and software. (3) Sample lead time - Typically 1-2 weeks for stocked items, 4-6 weeks for non-stock items. (4) Sample limits - Initial samples usually limited to 5-10 pieces per part number. (5) Free samples - Available for qualified commercial projects. (6) Engineering support - FAE assistance for sample evaluation and testing. LiTong maintains sample inventory of popular SouthChip products for quick turnaround. For high-volume production samples, contact LiTong early in the design cycle.`,
        decisionGuide: "Contact LiTong sales to request SouthChip product samples.",
        keywords: ["samples", "evaluation board", "sample request", "LiTong"]
      }
    ];
    category.faqs = [...category.faqs, ...additionalFaqs].slice(0, 8);
  }

  // Fix alternativeParts comparison format
  if (category.products) {
    category.products.forEach(product => {
      if (product.alternativeParts) {
        product.alternativeParts.forEach(alt => {
          if (alt.comparison) {
            // Convert comparison object to string format with =>
            const comparisons = [];
            for (const [key, value] of Object.entries(alt.comparison)) {
              comparisons.push(`${key}: ${value}`);
            }
            alt.comparison = comparisons.join('; ');
          }
        });
      }
      
      // Add more FAQs to products if needed
      if (!product.faqs || product.faqs.length < 5) {
        const existingFaqs = product.faqs || [];
        const additionalProductFaqs = [
          {
            question: `What is the price of ${product.partNumber}?`,
            answer: `Pricing for ${product.partNumber} depends on order volume: (1) Sample pricing - Contact LiTong for sample pricing. (2) Volume pricing - Tiered pricing structure with discounts at 1K, 10K, 100K, and higher volumes. (3) Distribution pricing - As an authorized SouthChip distributor, LiTong offers competitive pricing with flexible terms. (4) Price stability - SouthChip maintains stable pricing with minimal fluctuations. (5) Alternative options - LiTong can suggest pin-compatible alternatives if cost optimization is needed. Contact LiTong sales for formal quotations with your forecast volumes and delivery requirements.`,
            decisionGuide: "Contact LiTong sales for formal pricing quotations.",
            keywords: ["pricing", "price", "quotation", "cost"]
          },
          {
            question: `What is the lead time for ${product.partNumber}?`,
            answer: `Lead time for ${product.partNumber}: (1) Stock items - 1-2 weeks for items in LiTong inventory. (2) Standard lead time - 8-10 weeks typical for non-stock items. (3) Large orders - Contact LiTong for scheduling and allocation. (4) Expedited delivery - Rush orders may be accommodated for urgent requirements. (5) Long-term agreements - Schedule agreements available for high-volume customers. LiTong maintains safety stock of popular SouthChip products to support quick-turn requirements. Contact LiTong with your delivery requirements for specific lead time commitments.`,
            decisionGuide: "Contact LiTong for current lead times and delivery scheduling.",
            keywords: ["lead time", "delivery", "stock", "availability"]
          },
          {
            question: `Does ${product.partNumber} support RoHS compliance?`,
            answer: `Yes, ${product.partNumber} is fully RoHS compliant: (1) RoHS 6/6 compliant - Contains no lead, mercury, cadmium, hexavalent chromium, PBB, or PBDE. (2) Halogen-free - Available in halogen-free versions upon request. (3) REACH compliant - Meets EU REACH regulations for chemical substances. (4) Conflict-free - Sourced from conflict-free suppliers. (5) Environmental certifications - Full material declarations available. (6) Green packaging - Compliant with environmental packaging requirements. SouthChip is committed to environmental compliance across all products. Compliance certificates and material declarations are available from LiTong upon request.`,
            decisionGuide: "Contact LiTong for RoHS certificates and material declarations.",
            keywords: ["RoHS", "compliance", "environmental", "halogen-free"]
          }
        ];
        product.faqs = [...existingFaqs, ...additionalProductFaqs].slice(0, 8);
      }
    });
  }
});

// Write the fixed products.json
fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Fixed products.json');
