/**
 * 批量创建品牌数据脚本
 * Batch Create Brand Data Script
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 品牌配置列表
const brandsToCreate = [
  // 硅基分立器件
  { name: 'changdian', displayName: '长电科技', type: 'silicon-discrete' },
  
  // 功率模块
  { name: 'vicor', displayName: 'Vicor', type: 'power-module' },
  { name: 'mornsun', displayName: 'Mornsun', type: 'power-module' },
  { name: 'meanwell', displayName: 'Mean Well', type: 'power-module' },
  { name: 'tdk-lambda', displayName: 'TDK-Lambda', type: 'power-module' },
  { name: 'zlg-power', displayName: '致远电子', type: 'power-module' },
  
  // 电容器
  { name: 'faratronic', displayName: '法拉电子', type: 'capacitor' },
  { name: 'jianghai', displayName: '江海股份', type: 'capacitor' },
  { name: 'aishi', displayName: '艾华集团', type: 'capacitor' },
  { name: 'wanyu', displayName: '万裕国际', type: 'capacitor' },
  { name: 'sanying', displayName: '三莹电子', type: 'capacitor' },
  { name: 'lelon', displayName: '立隆电子', type: 'capacitor' },
  { name: 'capxon', displayName: '凯普松', type: 'capacitor' },
  
  // 继电器
  { name: 'hongfa', displayName: '宏发股份', type: 'relay' },
  { name: 'tianbo', displayName: '天波电器', type: 'relay' },
  { name: 'songlerelay', displayName: '松乐继电器', type: 'relay' },
  
  // 传感器
  { name: 'lem', displayName: 'LEM', type: 'sensor' },
  { name: 'galaxycore', displayName: '格科微', type: 'sensor' },
  { name: 'smartsens', displayName: '思特威', type: 'sensor' },
  { name: 'goertek', displayName: '歌尔股份', type: 'sensor' },
  
  // MCU
  { name: 'ti', displayName: 'Texas Instruments', type: 'mcu-ic' },
  { name: 'adi', displayName: 'Analog Devices', type: 'mcu-ic' },
  { name: 'microchip', displayName: 'Microchip', type: 'mcu-ic' },
  { name: 'renesas', displayName: 'Renesas', type: 'mcu-ic' },
  { name: 'nxp', displayName: 'NXP', type: 'mcu-ic' },
  { name: 'espressif', displayName: '乐鑫科技', type: 'mcu-ic' },
  { name: 'gigadevice', displayName: '兆易创新', type: 'mcu-ic' },
  { name: 'nuvoton', displayName: '新唐科技', type: 'mcu-ic' },
  
  // 电源管理IC
  { name: '3peak', displayName: '3PEAK', type: 'power-management-ic' },
  { name: 'sgmicro', displayName: '圣邦微', type: 'power-management-ic' },
  { name: 'silergy', displayName: '矽力杰', type: 'power-management-ic' },
  { name: 'richtek', displayName: '立锜科技', type: 'power-management-ic' },
  { name: 'realtek', displayName: '瑞昱半导体', type: 'power-management-ic' },
  
  // 保护器件
  { name: 'sinofuse', displayName: '好利来电子', type: 'protection-device' },
  { name: 'bussmann', displayName: 'Bussmann', type: 'protection-device' },
  { name: 'littelfuse', displayName: 'Littelfuse', type: 'protection-device' },
  
  // 晶振
  { name: 'hci', displayName: 'HCI Crystal', type: 'crystal' },
  { name: 'yxc', displayName: '扬兴科技', type: 'crystal' },
  
  // FPGA
  { name: 'xilinx', displayName: 'Xilinx', type: 'fpga' },
  { name: 'lattice', displayName: 'Lattice', type: 'fpga' },
  
  // 存储器
  { name: 'skhynix', displayName: 'SK Hynix', type: 'memory' },
  
  // 射频
  { name: 'skyworks', displayName: 'Skyworks', type: 'rf-wireless' },
  
  // 电感
  { name: 'sunlord', displayName: '顺络电子', type: 'inductor-magnetic' },
  { name: 'wurth', displayName: 'Wurth', type: 'inductor-magnetic' },
  
  // 光耦
  { name: 'guanxi', displayName: '冠西电子', type: 'optocoupler' },
  { name: 'liteon', displayName: '光宝科技', type: 'optocoupler' }
];

// 生成基础JSON文件
function generateBrandJson(brand) {
  return {
    name: brand.name,
    displayName: brand.displayName,
    description: `${brand.displayName}是领先的电子元器件制造商，提供高品质的${brand.type}产品。`,
    longDescription: `${brand.displayName}致力于为全球客户提供优质的电子元器件产品和解决方案。公司产品质量可靠，广泛应用于通信、消费电子、汽车电子、工业控制等领域。`,
    logo: `/assets/images/brands/${brand.name}-logo.svg`,
    website: `https://www.${brand.name}.com`,
    founded: "2000",
    headquarters: "中国",
    certifications: ["ISO 9001"],
    coreProducts: ["产品A", "产品B", "产品C"],
    industries: ["通信", "消费电子", "工业控制"],
    faq: [
      {
        question: `${brand.displayName}的核心产品有哪些？`,
        answer: `${brand.displayName}提供多种电子元器件产品，满足不同应用需求。`,
        keywords: ["产品", "应用"]
      }
    ]
  };
}

function generateProductsJson(brand) {
  return {
    seoTitle: `${brand.displayName}产品 | ${brand.type}分销商 | LiTong`,
    seoDescription: `${brand.displayName}产品信息和技术支持。`,
    seoKeywords: [brand.displayName, brand.type, "分销商"],
    faqs: [
      {
        question: `${brand.displayName}产品有哪些特点？`,
        answer: "产品质量可靠，性能优异。",
        keywords: ["特点", "优势"]
      }
    ],
    categories: [
      {
        id: "category-1",
        name: "产品类别A",
        slug: "category-a",
        description: "产品类别描述",
        series: [{ name: "Series A", description: "系列描述" }],
        parameters: ["参数1", "参数2"],
        applications: ["应用1", "应用2"],
        selectionGuide: {
          title: "选型指南",
          description: "选型指南描述",
          articleId: "selection-guide",
          articleLink: `/${brand.name}/support/selection-guide.html`
        },
        products: [
          {
            id: "product-1",
            partNumber: "PN001",
            series: "Series A",
            slug: "pn001",
            shortDescription: "产品简短描述",
            descriptionParagraphs: ["段落1", "段落2", "段落3"],
            features: ["特性1", "特性2"],
            applications: ["应用1", "应用2"],
            datasheet: `/downloads/${brand.name}/pn001.pdf`,
            stock: 1000,
            moq: 100,
            leadTime: "4-6周",
            faeReview: {
              author: "FAE",
              title: "技术工程师",
              content: "产品评价",
              highlight: "产品亮点"
            },
            alternativeParts: [],
            companionParts: [],
            faqs: []
          }
        ]
      }
    ]
  };
}

function generateSolutionsJson(brand) {
  return {
    solutions: [
      {
        id: "solution-1",
        name: "解决方案A",
        icon: "🔧",
        shortDescription: "解决方案描述",
        descriptionParagraphs: ["段落1", "段落2", "段落3"],
        products: ["产品A", "产品B"],
        applications: ["应用1", "应用2"],
        benefits: [
          { title: "优势1", description: "优势描述" }
        ],
        specifications: { "参数1": "值1" },
        resources: [],
        faq: []
      }
    ]
  };
}

function generateSupportJson(brand) {
  return {
    articles: [
      {
        id: "article-1",
        title: "技术支持文章",
        category: "Technical",
        date: "2024-12-01",
        summary: "文章摘要",
        content: ["内容段落"],
        tags: ["标签"],
        author: "技术支持",
        readTime: "10 min"
      }
    ]
  };
}

function generateNewsJson(brand) {
  return {
    news: [
      {
        id: "news-1",
        title: `${brand.displayName}最新动态`,
        date: "2024-12-01",
        category: "Company News",
        featured: true,
        summary: "新闻摘要",
        content: ["新闻内容"],
        image: "/images/news/default.jpg",
        tags: ["新闻"],
        author: "市场部"
      }
    ]
  };
}

// 创建品牌
function createBrand(brand) {
  const brandDir = path.join(__dirname, '..', 'data', brand.name);
  
  // 创建目录
  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true });
    console.log(`📁 Created directory: ${brand.name}`);
  }
  
  // 创建JSON文件
  const files = [
    { name: 'brand.json', data: generateBrandJson(brand) },
    { name: 'products.json', data: generateProductsJson(brand) },
    { name: 'solutions.json', data: generateSolutionsJson(brand) },
    { name: 'support.json', data: generateSupportJson(brand) },
    { name: 'news.json', data: generateNewsJson(brand) }
  ];
  
  files.forEach(file => {
    const filePath = path.join(brandDir, file.name);
    fs.writeFileSync(filePath, JSON.stringify(file.data, null, 2));
  });
  
  console.log(`✅ Created brand: ${brand.displayName} (${brand.name})`);
}

// 主函数
function main() {
  console.log('🚀 Starting batch brand creation...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  brandsToCreate.forEach((brand, index) => {
    try {
      createBrand(brand);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed to create ${brand.name}:`, error.message);
      failCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📦 Total: ${brandsToCreate.length}`);
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { createBrand, brandsToCreate };
