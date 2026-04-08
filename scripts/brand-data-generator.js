#!/usr/bin/env node

/**
 * 统一品牌数据模板生成器
 * 包含：数据模板生成 + FAQ模板生成
 * 
 * 使用方法: 
 *   node scripts/brand-data-generator.js [brandName] [options]
 * 
 * 选项:
 *   --template-only  只生成模板文件
 *   --faq-only       只生成FAQ模板
 *   --full           生成完整数据模板（默认）
 * 
 * 示例:
 *   node scripts/brand-data-generator.js macmic
 *   node scripts/brand-data-generator.js macmic --template-only
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// FAQ 模板生成器
function generateFAQTemplate(context, index = 1) {
  return {
    question: `[${context}] 问题${index}: 请根据具体场景编写问题，包含关键词如distributor、选型等`,
    answer: `[${context}] 答案${index}: 请提供详细的回答，至少50个字符。回答应该专业、全面，帮助用户理解问题并做出决策。`,
    decisionGuide: `[${context}] 决策指南${index}: 提供选择建议，帮助用户在不同选项中做出正确决策。`,
    keywords: [`${context.toLowerCase().replace(/\s/g, '-')}-keyword1`, 'distributor', '选型', 'keyword4']
  };
}

// 生成多个FAQ模板
function generateFAQs(context, count = 3) {
  return Array.from({ length: count }, (_, i) => generateFAQTemplate(context, i + 1));
}

// 产品分类模板
function generateCategoryTemplate(brandName, categoryName, categoryId) {
  return {
    id: categoryId,
    name: categoryName,
    slug: `${brandName.toLowerCase()}-${categoryId}`,
    description: `${categoryName}产品描述，包含${brandName}品牌特点`,
    // 详细描述要求：
    // 1. 介绍产品分类的总体特点
    // 2. 主要系列介绍
    // 3. 核心优势
    // 4. 主要应用领域
    // 5. 自然融入SEO关键词："${brandName}+${categoryName}+distributor"、"${brandName}+${categoryName}+选型"
    longDescription: `【必填】${categoryName}详细描述（至少300字）：
    
1. 总体特点：介绍${brandName} ${categoryName}产品的整体技术特点和市场定位。

2. 主要系列：
   - 系列A：适用于XX场景，具有XX特性
   - 系列B：适用于XX场景，具有XX特性

3. 核心优势：
   - 优势1：详细说明
   - 优势2：详细说明
   - 优势3：详细说明

4. 主要应用领域：工业控制、新能源、电动汽车等（根据实际产品调整）。

5. SEO关键词要求：自然融入"${brandName} ${categoryName} distributor"、"${brandName} ${categoryName} 选型"等关键词。

【重要】作为${brandName}的授权distributor，我们提供全面的${categoryName}选型服务和专业技术支持。`,
    image: `/images/brands/${brandName.toLowerCase()}/${categoryId}.jpg`,
    series: [
      {
        name: '系列A',
        description: '系列A描述',
        features: ['特性1', '特性2', '特性3']
      },
      {
        name: '系列B',
        description: '系列B描述',
        features: ['特性1', '特性2', '特性3']
      }
    ],
    selectionGuide: {
      title: `${categoryName}选型指南`,
      content: `如何选择合适的${categoryName}产品。作为专业distributor，我们提供选型支持。`,
      factors: ['因素1', '因素2', '因素3', '因素4'],
      recommendations: ['建议1', '建议2', '建议3']
    },
    // 选型指南入口链接 - 指向技术支持文章
    selectionGuideLink: {
      url: `/support/${brandName.toLowerCase()}/how-to-select-${categoryId}`,
      text: `如何选择最适合您项目的${brandName} ${categoryName}？`,
      articleTitle: `《如何选择最适合您项目的${brandName} ${categoryName}？》`,
      description: '这篇技术支持文章将帮助您根据项目需求选择最合适的产品型号，提供详细的选型建议和决策框架。'
    },
    faqs: generateFAQs(`${categoryName}分类`, 3),
    products: [
      generateProductTemplate(brandName, categoryName, '型号001'),
      generateProductTemplate(brandName, categoryName, '型号002')
    ]
  };
}

// 产品模板
function generateProductTemplate(brandName, categoryName, partNumber) {
  return {
    partNumber: partNumber,
    shortDescription: `${partNumber}是${brandName}的${categoryName}产品，具有高性能、高可靠性特点。`,
    descriptionParagraphs: [
      `${partNumber}是${brandName}推出的高性能${categoryName}产品，采用先进技术制造。`,
      `该产品广泛应用于工业控制、新能源、电动汽车等领域，具有优异的性能表现。`,
      `作为${brandName}的授权distributor，我们提供全面的技术支持和选型服务。`
    ],
    image: `/images/products/${brandName.toLowerCase()}/${partNumber}.jpg`,
    datasheet: `/datasheets/${brandName.toLowerCase()}/${partNumber}.pdf`,
    specifications: {
      '参数1': '值1',
      '参数2': '值2',
      '参数3': '值3',
      '参数4': '值4'
    },
    features: ['特性1', '特性2', '特性3', '特性4', '特性5'],
    applications: ['应用1', '应用2', '应用3'],
    // FAE点评（代理商点评/应用解读）- 必须带有主观色彩的专业解读
    faeReview: {
      author: '【必填】FAE工程师姓名',
      title: '【必填】高级FAE / 应用工程师',
      // content要求：200-300字，带有主观色彩的专业解读，包含具体应用建议
      content: `【必填】FAE专业解读（200-300字，必须带有主观色彩）：
      
作为${brandName}的授权distributor，我们的FAE团队在实际项目中发现：

1. 产品优势分析：${partNumber}在XX应用场景下表现突出，主要得益于其XX特性。

2. 应用建议：在实际设计中，建议特别注意XX方面。根据我们的项目经验，XX。

3. 选型建议：对于XX类型的客户，我们推荐选择XX型号，因为XX。

4. 主观评价：从我个人的工程经验来看，这款产品在XX方面具有明显优势，但在XX方面需要注意。

【重要】内容必须体现专业见解和主观评价，不能是客观产品说明。`,
      highlight: '【必填】50字内的核心观点总结'
    },
    // 替代料号 - 必须满足电气参数 ≥ 原型号
    alternativeParts: [
      {
        partNumber: '【必填】替代型号1',
        brand: '【必填】竞争品牌A',
        // 电气参数详细对比，必须满足：电压 ≥ 原型号，电流 ≥ 原型号
        comparison: `【必填】详细电气参数对比（必须使用 = > < 格式）：
- 电压：1200V = 1200V (相同)
- 电流：450A > 300A (+50%，满足≥要求)
- 封装：兼容/相同
- 导通电阻：XX mΩ < XX mΩ (更优)
- 开关速度：XX ns ≈ XX ns (相当)`,
        reason: '【必填】从技术角度说明替代原因',
        useCase: '【必填】从应用角度说明适用场景'
      },
      {
        partNumber: '【必填】替代型号2',
        brand: '【必填】竞争品牌B',
        comparison: `【必填】详细电气参数对比（必须使用 = > < 格式）：
- 电压：1200V = 1200V (相同)
- 电流：400A > 300A (+33%，满足≥要求)
- 封装：兼容/相同
- 其他关键参数对比...`,
        reason: '【必填】性能升级替代方案说明',
        useCase: '【必填】高性能需求应用场景'
      }
    ],
    // 配套料号 - 至少3个
    companionParts: [
      {
        partNumber: '【必填】配套型号1',
        type: '驱动IC',
        description: '【必填】推荐驱动方案说明'
      },
      {
        partNumber: '【必填】配套型号2',
        type: '保护器件',
        description: '【必填】过压过流保护方案'
      },
      {
        partNumber: '【必填】配套型号3',
        type: '散热方案',
        description: '【必填】散热片/散热器推荐'
      }
    ],
    faqs: generateFAQs(`${partNumber}产品`, 3)
  };
}

// 解决方案模板
function generateSolutionTemplate(brandName, solutionTitle, solutionId) {
  return {
    id: solutionId,
    title: solutionTitle,
    slug: `${brandName.toLowerCase()}-${solutionId}`,
    description: `${solutionTitle}解决方案描述`,
    longDescription: `${solutionTitle}详细描述。作为${brandName}的授权distributor，我们提供完整的解决方案支持。`,
    image: `/images/solutions/${brandName.toLowerCase()}/${solutionId}.jpg`,
    benefits: [
      { title: '优势1', description: '优势1描述' },
      { title: '优势2', description: '优势2描述' },
      { title: '优势3', description: '优势3描述' },
      { title: '优势4', description: '优势4描述' }
    ],
    coreAdvantages: [
      { title: '核心优势1', description: '描述1' },
      { title: '核心优势2', description: '描述2' },
      { title: '核心优势3', description: '描述3' },
      { title: '核心优势4', description: '描述4' },
      { title: '核心优势5', description: '描述5' }
    ],
    bomList: [
      { partNumber: '器件1', quantity: 2, description: '描述1' },
      { partNumber: '器件2', quantity: 1, description: '描述2' }
    ],
    technicalSpecs: {
      '规格1': '值1',
      '规格2': '值2'
    },
    // 客户案例 - 至少2个
    customerCases: [
      {
        customer: '【必填】客户A名称（可匿名）',
        industry: '【必填】行业1',
        challenge: `【必填】面临挑战（100-150字）：
- 项目背景：XX
- 技术难点：XX
- 客户需求：XX`,
        solution: `【必填】解决方案（150-200字）：
- 采用${brandName}的XX产品
- 系统架构设计
- 关键技术点`,
        result: `【必填】实施效果（100-150字，量化数据）：
- 效率提升X%
- 成本降低Y%
- 其他量化指标`
      },
      {
        customer: '【必填】客户B名称（可匿名）',
        industry: '【必填】行业2',
        challenge: '【必填】面临挑战描述（100-150字）',
        solution: '【必填】解决方案描述（150-200字）',
        result: '【必填】实施效果描述（100-150字，量化数据）'
      }
    ],
    // FAE见解 - 包含见解逻辑/决策框架
    faeInsights: {
      author: '【必填】FAE工程师姓名',
      title: '【必填】解决方案专家/高级FAE',
      // content要求：包含专业见解、见解逻辑、决策框架
      content: `【必填】FAE专业见解（300-500字）：

1. 方案核心洞察：
作为${brandName}的授权distributor，我们在多个项目中部署了该方案，发现以下关键点：
- 洞察1：XX
- 洞察2：XX

2. 见解逻辑 / 决策框架：
【必填】提供清晰的决策逻辑框架，帮助客户做出正确选择：
- 第一步：评估XX因素
- 第二步：考虑XX条件
- 第三步：选择XX配置
- 决策矩阵：XX

3. 实施建议：
- 建议1：XX
- 建议2：XX

4. 常见误区：
- 误区1：XX
- 误区2：XX

【重要】内容必须体现专业经验和主观见解。`,
      keyTakeaways: [
        '【必填】要点1：核心观点',
        '【必填】要点2：关键建议',
        '【必填】要点3：实施要点',
        '【必填】要点4：注意事项',
        '【必填】要点5：最佳实践'
      ],
      // 决策框架 - 新增字段
      decisionFramework: {
        title: '【必填】方案选型决策框架',
        steps: [
          { step: 1, title: '需求分析', description: '明确功率等级、电压电流要求' },
          { step: 2, title: '环境评估', description: '考虑散热、EMI、空间限制' },
          { step: 3, title: '成本权衡', description: '平衡性能与成本' },
          { step: 4, title: '供应商选择', description: '考虑distributor技术支持能力' }
        ],
        decisionMatrix: {
          factors: ['功率等级', '电压要求', '散热条件', '成本预算'],
          options: ['方案A', '方案B', '方案C'],
          recommendations: ['推荐用于XX场景', '推荐用于XX场景', '推荐用于XX场景']
        }
      }
    }
  };
}

// 技术支持文章模板
function generateSupportArticleTemplate(brandName, title, articleId) {
  return {
    id: articleId,
    title: title,
    slug: `${brandName.toLowerCase()}-${articleId}`,
    author: {
      name: '【必填】技术专家姓名',
      title: '【必填】高级FAE工程师',
      bio: '【必填】10年以上功率半导体应用经验，专注于XX领域'
    },
    publishDate: new Date().toISOString().split('T')[0],
    summary: `【必填】${title}摘要（100-150字），简要说明文章内容和读者收益`,
    content: `【必填】文章内容（至少800字）：

1. 引言（100字）：介绍文章主题和重要性

2. 技术背景（150字）：相关技术原理

3. 详细内容（400字）：核心技术点详解

4. 应用案例（100字）：实际应用示例

5. 总结（50字）：核心要点总结

【重要】自然融入SEO关键词："${brandName} distributor"、"${brandName} 选型"`,
    tags: ['【必填】标签1', '【必填】标签2', '【必填】标签3', '【必填】标签4'],
    relatedArticles: ['article-001', 'article-002', 'article-003'],
    // FAE见解 - 包含见解逻辑
    faeInsights: {
      author: '【必填】FAE工程师姓名',
      title: '【必填】高级FAE / 技术专家',
      // content要求：包含专业见解、见解逻辑
      content: `【必填】FAE专业见解（200-300字）：

1. 核心见解：
作为${brandName}的授权distributor，我们在实际项目中发现：
- 见解1：XX
- 见解2：XX

2. 见解逻辑 / 决策框架：
【必填】提供清晰的决策逻辑：
- 评估因素：XX
- 选择标准：XX
- 实施步骤：XX

3. 实用建议：
- 建议1：XX
- 建议2：XX

【重要】内容必须体现专业经验和主观见解。`,
      practicalTips: [
        '【必填】实用建议1：具体操作步骤',
        '【必填】实用建议2：注意事项',
        '【必填】实用建议3：最佳实践',
        '【必填】实用建议4：常见误区'
      ],
      // 见解逻辑/决策框架 - 新增
      insightLogic: {
        title: '【必填】技术决策逻辑',
        factors: ['因素1', '因素2', '因素3'],
        decisionTree: [
          { condition: '如果XX', action: '则选择XX' },
          { condition: '如果XX', action: '则选择XX' }
        ]
      }
    },
    // 客户案例 - 至少1个
    customerCases: [
      {
        customer: '【必填】客户名称（可匿名）',
        industry: '【必填】行业',
        application: '【必填】具体应用场景',
        challenge: '【必填】面临的技术挑战（100字）',
        solution: '【必填】采用的解决方案（100字）',
        feedback: `【必填】客户反馈/实施效果（100字）：
- 效果1：XX
- 效果2：XX
- 客户评价："XX"`,
        quantitativeResults: {
          efficiencyImprovement: '效率提升X%',
          costReduction: '成本降低Y%',
          reliabilityImprovement: '可靠性提升Z%'
        }
      }
    ]
  };
}

// 生成 brand.json 模板
function generateBrandTemplate(brandName) {
  return {
    name: brandName.toLowerCase(),
    displayName: brandName,
    description: `${brandName}品牌描述，至少100个字符。作为授权distributor，我们提供全面的产品选型和应用支持。`,
    longDescription: `${brandName}详细品牌描述，至少300个字符。作为授权distributor，我们提供全面的产品选型服务...`,
    logo: `/images/brands/${brandName.toLowerCase()}/logo.png`,
    website: `https://www.${brandName.toLowerCase()}.com`,
    founded: '成立年份',
    headquarters: '总部所在地',
    coreProducts: ['产品1', '产品2', '产品3', '产品4'],
    industries: ['行业1', '行业2', '行业3', '行业4'],
    seoTitle: `${brandName}授权distributor | 产品选型与技术支持`,
    seoDescription: `${brandName}授权distributor，提供全系列产品选型、技术支持和解决方案。`,
    seoKeywords: [
      `${brandName.toLowerCase()} distributor`,
      `${brandName.toLowerCase()} 选型`,
      `${brandName.toLowerCase()} 代理`,
      `${brandName.toLowerCase()} 技术支持`,
      '功率半导体'
    ],
    faqs: generateFAQs('品牌级别', 3)
  };
}

// 生成 products.json 模板
function generateProductsTemplate(brandName) {
  return {
    seoTitle: `${brandName}产品 | 授权distributor | 选型指南`,
    seoDescription: `${brandName}全系列产品，专业distributor提供选型支持和技术服务。`,
    seoKeywords: [
      `${brandName.toLowerCase()} 产品`,
      `${brandName.toLowerCase()} distributor`,
      `${brandName.toLowerCase()} 选型`,
      '功率器件',
      'IGBT模块'
    ],
    faqs: generateFAQs('产品页面', 3),
    categories: [
      generateCategoryTemplate(brandName, 'IGBT模块', 'igbt-modules'),
      generateCategoryTemplate(brandName, 'FRED模块', 'fred-modules'),
      generateCategoryTemplate(brandName, 'SiC器件', 'sic-devices'),
      generateCategoryTemplate(brandName, '整流桥', 'rectifier-bridges')
    ]
  };
}

// 生成 solutions.json 模板
function generateSolutionsTemplate(brandName) {
  return {
    seoTitle: `${brandName}解决方案 | 应用方案 | distributor支持`,
    seoDescription: `${brandName}行业解决方案，distributor提供专业应用支持。`,
    seoKeywords: [
      `${brandName.toLowerCase()} 解决方案`,
      `${brandName.toLowerCase()} distributor`,
      `${brandName.toLowerCase()} 应用`,
      '行业方案'
    ],
    faqs: generateFAQs('解决方案页面', 3),
    solutions: [
      generateSolutionTemplate(brandName, '新能源逆变器方案', 'solar-inverter'),
      generateSolutionTemplate(brandName, '电动汽车驱动方案', 'ev-drive')
    ]
  };
}

// 生成 support.json 模板
function generateSupportTemplate(brandName) {
  return {
    seoTitle: `${brandName}技术支持 | distributor技术服务`,
    seoDescription: `${brandName}技术文档、应用笔记，distributor提供专业支持。`,
    seoKeywords: [
      `${brandName.toLowerCase()} 技术支持`,
      `${brandName.toLowerCase()} distributor`,
      `${brandName.toLowerCase()} 文档`,
      '应用笔记'
    ],
    faqs: generateFAQs('技术支持页面', 3),
    articles: [
      generateSupportArticleTemplate(brandName, 'IGBT选型指南', 'igbt-selection-guide'),
      generateSupportArticleTemplate(brandName, '驱动电路设计', 'gate-driver-design'),
      generateSupportArticleTemplate(brandName, '散热设计要点', 'thermal-design'),
      generateSupportArticleTemplate(brandName, '保护电路设计', 'protection-circuit')
    ]
  };
}

// 生成 news.json 模板
function generateNewsTemplate(brandName) {
  return {
    seoTitle: `${brandName}新闻动态 | distributor最新资讯`,
    seoDescription: `${brandName}最新产品发布、行业动态，distributor为您带来前沿资讯。`,
    seoKeywords: [
      `${brandName.toLowerCase()} 新闻`,
      `${brandName.toLowerCase()} distributor`,
      '产品发布',
      '行业动态'
    ],
    articles: [
      {
        id: 'news-001',
        title: `${brandName}发布新一代产品`,
        slug: `${brandName.toLowerCase()}-new-product-launch`,
        date: new Date().toISOString().split('T')[0],
        summary: '新产品发布摘要',
        content: '新闻内容...',
        image: `/images/news/${brandName.toLowerCase()}/news-001.jpg`,
        tags: ['新品发布', '技术创新']
      }
    ]
  };
}

// 保存模板文件
function saveTemplate(brandName, fileName, data) {
  const dir = path.join('data', brandName.toLowerCase());
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    log(`📁 创建目录: ${dir}`, 'blue');
  }

  const filePath = path.join(dir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  log(`  ✅ 生成: ${filePath}`, 'green');
}

// 主函数
function main() {
  const brandName = process.argv[2];
  const options = process.argv.slice(3);

  if (!brandName) {
    log('使用方法: node scripts/brand-data-generator.js [brandName] [options]', 'yellow');
    log('选项:', 'yellow');
    log('  --template-only  只生成模板文件', 'yellow');
    log('  --faq-only       只生成FAQ模板', 'yellow');
    log('  --full           生成完整数据模板（默认）', 'yellow');
    log('\n示例:', 'yellow');
    log('  node scripts/brand-data-generator.js macmic', 'cyan');
    log('  node scripts/brand-data-generator.js macmic --template-only', 'cyan');
    process.exit(1);
  }

  const templateOnly = options.includes('--template-only');
  const faqOnly = options.includes('--faq-only');
  const fullMode = !templateOnly && !faqOnly;

  log(`\n${'='.repeat(60)}`, 'cyan');
  log(`🔧 品牌数据模板生成器: ${brandName}`, 'cyan');
  log(`${'='.repeat(60)}\n`, 'cyan');

  if (faqOnly) {
    log('📋 生成FAQ模板示例:', 'magenta');
    const faqExamples = {
      '品牌级别FAQ': generateFAQs('品牌级别', 3),
      '产品页面FAQ': generateFAQs('产品页面', 3),
      '分类FAQ示例': generateFAQs('IGBT模块分类', 3),
      '产品FAQ示例': generateFAQs('IGBT产品', 3)
    };
    console.log(JSON.stringify(faqExamples, null, 2));
    return;
  }

  // 生成完整模板
  log('📦 生成数据模板文件...\n', 'magenta');

  saveTemplate(brandName, 'brand.json', generateBrandTemplate(brandName));
  saveTemplate(brandName, 'products.json', generateProductsTemplate(brandName));
  saveTemplate(brandName, 'solutions.json', generateSolutionsTemplate(brandName));
  saveTemplate(brandName, 'support.json', generateSupportTemplate(brandName));
  saveTemplate(brandName, 'news.json', generateNewsTemplate(brandName));

  log(`\n${'='.repeat(60)}`, 'cyan');
  log('✅ 模板生成完成！', 'green');
  log(`${'='.repeat(60)}\n`, 'cyan');

  log('📋 下一步操作:', 'magenta');
  log('  1. 编辑 data/[brand]/*.json 文件，替换模板内容', 'blue');
  log('  2. 运行: node scripts/brand-master-checklist.js [brand] 检查数据', 'blue');
  log('  3. 运行: node scripts/build.js 生成网站', 'blue');

  log('\n📌 重要提醒（铁律）:', 'yellow');
  log('  • 每个产品必须有 ≥3 个FAQ', 'yellow');
  log('  • 每个分类必须有 ≥3 个FAQ', 'yellow');
  log('  • 每个文件必须有 ≥3 个FAQ', 'yellow');
  log('  • SEO关键词必须包含 "distributor" 和 "选型"', 'yellow');
  log('  • 产品必须有 alternativeParts (≥2) 和 companionParts (≥3)', 'yellow');
  log('  • 解决方案必须有 customerCases (≥2) 和 faeInsights', 'yellow');
}

main();
