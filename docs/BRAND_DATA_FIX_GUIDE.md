# 品牌数据修复指南

本文档说明如何修复验证工具检测到的数据问题，使 JSON 数据完全符合 NEW_BRAND_DATA_REQUIREMENTS.md 规范。

## 快速开始

### 1. 运行验证工具

```bash
# 验证指定品牌
npm run validate:brand semikron

# 验证所有品牌
npm run validate:all
```

### 2. 查看错误报告

验证工具会输出详细的错误和警告列表：
- ❌ 错误（红色）- 必须修复
- ⚠️ 警告（黄色）- 建议优化

## 常见问题修复

### 问题 1: 缺少 shortDescription 和 descriptionParagraphs

**错误信息**：
```
缺少 shortDescription（80-120字符）
缺少 descriptionParagraphs 数组
```

**修复方法**：

为每个产品添加三层级描述：

```json
{
  "partNumber": "SKM100GB12T4",
  "shortDescription": "High-power 1200V/100A IGBT module for industrial motor drives and power conversion.",
  "description": "The SKM100GB12T4 is a high-performance IGBT module featuring advanced trench gate technology...",
  "descriptionParagraphs": [
    "High-power IGBT module for industrial motor drives. 1200V/100A rating with advanced trench gate technology.",
    "SEMiTRANS 4 package provides excellent thermal performance and reliable operation.",
    "In stock with competitive pricing. Full technical support from LiTong Electronics."
  ]
}
```

**规范要求**：
- `shortDescription`: 80-120字符
- `descriptionParagraphs`: 3段，每段100字符以内
- 内容简洁，删除冗余词汇（The, is a, designed for）

---

### 问题 2: 产品包含对象类型字段

**错误信息**：
```
包含对象类型字段 technicalSpecs（必须是简单类型）
包含对象类型字段 orderingInfo（必须是简单类型）
```

**修复方法**：

将对象类型的参数字段展开为简单类型：

```json
// ❌ 错误 - 对象类型
{
  "partNumber": "SKM100GB12T4",
  "technicalSpecs": {
    "voltage": "1200V",
    "current": "100A"
  }
}

// ✅ 正确 - 简单类型
{
  "partNumber": "SKM100GB12T4",
  "voltage": "1200V",
  "current": "100A",
  "package": "SEMiTRANS 4"
}
```

**注意**：`technicalSpecs`, `orderingInfo`, `alternatives`, `matchingProducts` 不能作为产品参数字段。

---

### 问题 3: 解决方案缺少 name 字段

**错误信息**：
```
solutions[0](motor-drive) 缺少 name
```

**修复方法**：

为每个解决方案添加 `name` 字段：

```json
{
  "id": "motor-drive",
  "name": "Industrial Motor Drive",
  "title": "Industrial Motor Drive",
  ...
}
```

---

### 问题 4: 技术支持文章缺少 faeInsights 和 customerCases

**错误信息**：
```
缺少 faeInsights 对象
缺少 customerCases 数组（至少1个案例）
```

**修复方法**：

为每篇技术支持文章添加 FAE 见解和客户案例：

```json
{
  "id": "how-to-select-igbt",
  "title": "How to Select IGBT Modules",
  ...
  "author": {
    "name": "张伟",
    "title": "Senior FAE - Power Electronics",
    "experience": "12+ years",
    "expertise": ["IGBT Applications", "Motor Drive Design", "Thermal Management"]
  },
  "publishDate": "2024-01-15",
  "relatedArticles": ["igbt-gate-driver-design", "thermal-management-guide", "common-igbt-failures"],
  "faeInsights": {
    "insight": "在实际项目中，IGBT选型需要综合考虑电压、电流、开关频率和热管理...",
    "logic": "选型决策框架：首先确定电压等级（通常为母线电压的2倍），然后计算电流需求...",
    "keyTakeaways": [
      "电压等级选择应为母线电压的2倍",
      "电流额定值需考虑过载倍数和温度降额",
      "开关频率影响损耗和EMI平衡"
    ],
    "commonPitfalls": [
      "忽视高温环境下的电流降额",
      "仅考虑额定电流而忽略过载能力"
    ],
    "bestPractices": [
      "预留30%以上的电流裕量",
      "进行详细的热仿真分析"
    ],
    "troubleshootingTips": [
      "过热问题检查散热器和导热硅脂",
      "过流故障排查驱动信号和死时间"
    ]
  },
  "customerCases": [
    {
      "customerName": "某变频器厂商",
      "industry": "工业自动化",
      "application": "30kW变频器设计",
      "problem": "原选型IGBT在高温环境下频繁过温保护",
      "diagnosis": "经分析发现原选型电流裕量不足，且散热器设计余量偏小",
      "solution": "推荐更换为SKM200GB12T4，增加50%电流裕量，优化散热器设计",
      "results": "问题解决，变频器可在50°C环境温度下满载运行，客户满意度提升"
    }
  ]
}
```

---

### 问题 5: FAQ 数量不足

**警告信息**：
```
products-list FAQ 建议至少8条，当前 7 条
categories[1](gate-drivers) FAQ 建议至少10条，当前 5 条
```

**修复方法**：

根据 FAQ 分布表补充足够数量的 FAQ：

| 页面类型 | 所在 JSON 文件 | 建议数量 | 内容重点 |
|---------|---------------|---------|---------|
| about-brand | brand.json | 4-8 条 | 品牌背景、授权资质、公司实力 |
| products-list | products.json | 8-12 条 | 产品大类整体介绍、如何选择 |
| product-category | products.json | 10-16 条 | 该分类选型指南、参数解读 |
| product-detail | products.json | 3-6 条 | 具体型号选型细节、应用案例 |
| solutions-list | solutions.json | 8-14 条 | 不同方案对比、如何选择 |
| solution-detail | solutions.json | 3-6 条 | 系统集成要点、注意事项 |
| support-list | support.json | 12-18 条 | 授权验证、采购流程、技术支持 |

---

## 完整数据规范检查清单

在提交数据前，请确认以下检查项：

### brand.json
- [ ] 包含所有必填字段（name, displayName, logo, description, longDescription, coreProducts, industries, certifications, yearFounded, headquarters, distributorStatus, seoMetaTitle, seoMetaDescription, seoKeywords）
- [ ] 包含 about-brand FAQ（4-8条，每条包含 question, answer, decisionGuide, keywords）
- [ ] 品牌描述原创，与其他品牌不同

### products.json
- [ ] 包含 products-list FAQ（8-12条）
- [ ] 每个分类都有 selectionGuide（选型指南入口）
- [ ] 每个分类描述自然融入 SEO 关键词
- [ ] 每个产品都有 shortDescription（80-120字符）
- [ ] 每个产品都有 descriptionParagraphs（3段，每段100字符内）
- [ ] 每个产品都有 faeReview（FAE代理商点评）
- [ ] 每个产品都有 alternativeParts（至少1个替代选项）
- [ ] 每个产品都有 companionParts（至少2个配套产品）
- [ ] 每个产品都有 product-detail FAQ（3-6条）
- [ ] 产品参数都是简单类型（字符串、数字、布尔值）
- [ ] 不包含对象类型字段（technicalSpecs, orderingInfo 等）

### solutions.json
- [ ] 包含 solutions-list FAQ（8-14条）
- [ ] 每个解决方案都有 coreAdvantages 数组
- [ ] 每个解决方案都有 bomList 数组（至少2个产品）
- [ ] 每个解决方案都有 technicalSpecs 对象
- [ ] 每个解决方案都有 solution-detail FAQ（3-6条）
- [ ] 每个解决方案都有 customerCases（至少1个案例）
- [ ] 每个解决方案都有 faeInsights（FAE专业见解）
- [ ] BOM 使用该品牌的产品型号

### support.json
- [ ] 包含 support-list FAQ（12-18条）
- [ ] 每篇文章都有 author 对象（含 name, title, experience, expertise）
- [ ] 每篇文章都有 publishDate 字段
- [ ] 每篇文章都有 relatedArticles 数组（至少3个）
- [ ] 每篇文章都有 faeInsights 对象
- [ ] 每篇文章都有 customerCases 数组（至少1个案例）

### news.json
- [ ] 包含 articles 数组

---

## 自动化修复建议

对于大量相似的数据修复，可以：

1. **使用脚本批量处理** - 编写 Node.js 脚本自动添加缺失字段
2. **使用模板生成** - 创建数据模板，统一生成符合规范的数据
3. **先修复一个完整示例** - 修复一个产品/解决方案作为模板，然后复制修改

---

## 验证通过标准

运行 `npm run validate:brand [brand-name]` 后：
- ✅ 所有检查通过（无错误、无警告）- 可以生成页面
- ⚠️ 有警告但无错误 - 可以生成页面，但建议优化
- ❌ 有错误 - 必须修复后才能生成页面

---

**文档版本**: 1.0  
**最后更新**: 2026年4月1日
