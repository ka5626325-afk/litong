# 新增品牌完整工作流程

## 🎯 目标
确保新增品牌时不遗漏任何要求，一次性通过所有检查。

## 📋 工作流程（按顺序执行）

### 第一步：创建基础文件结构

创建以下文件：
```
data/[brand]/
├── brand.json      (必需)
├── products.json   (必需)
├── solutions.json  (必需)
├── support.json    (必需)
└── news.json       (可选)
```

### 第二步：使用检查清单工具验证

**在生成网站之前，必须先运行检查清单工具：**

```bash
node scripts/brand-creation-checklist.js [brandName]
```

**示例：**
```bash
node scripts/brand-creation-checklist.js macmic
```

**工具会检查：**
- ✅ 文件完整性
- ✅ brand.json 所有必需字段
- ✅ products.json 所有必需字段
- ✅ 每个分类的完整信息
- ✅ 每个产品的完整信息
- ✅ solutions.json 所有必需字段
- ✅ 每个方案的完整信息
- ✅ support.json 所有必需字段
- ✅ 每篇文章的完整信息

### 第三步：修复所有问题

如果检查工具报告任何问题（❌），必须全部修复后再继续。

**常见问题：**
1. shortDescription 长度不在 80-120 字符范围内
2. 缺少 selectionGuideLink
3. companionParts 数量不足（需要≥3个）
4. SEO 关键词缺少 "distributor" 或 "选型"
5. 缺少 FAE Review 字段
6. 缺少 customerCases

### 第四步：运行验证脚本

```bash
node scripts/validate-brand-data-v2.js [brandName]
```

### 第五步：生成网站

只有在检查清单和验证脚本都通过后，才能生成网站：

```bash
node scripts/generate.js --brand [brandName]
```

## 🚨 关键要求清单

### SEO 关键词要求
每个文件的 seoKeywords 必须包含：
- 至少一个包含 "distributor" 的关键词
- 至少一个包含 "选型" 的关键词

**示例：**
```json
"seoKeywords": [
  "BrandName products",
  "BrandName IGBT distributor",  // ✓ 包含 distributor
  "BrandName IGBT 选型",         // ✓ 包含 选型
  "BrandName 选型指南"
]
```

### 产品分类要求
每个分类必须包含：
- `series` 字段（至少2个系列）
- `selectionGuide` 字段
- `selectionGuideLink` 字段（指向选型指南文章）
- `longDescription` 中包含 distributor 和 选型 关键词
- 至少2个产品

### 产品详情要求
每个产品必须包含：
- `shortDescription`: 80-120 字符
- `descriptionParagraphs`: 3段描述
- `faeReview`: 包含 author, content, highlight
- `alternativeParts`: 至少2个替代料号，包含详细对比
- `companionParts`: 至少3个配套料号

### 解决方案要求
每个方案必须包含：
- `benefits`: 至少4个
- `coreAdvantages`: 至少5个
- `bomList`: BOM清单，至少2项
- `technicalSpecs`: 技术规格
- `customerCases`: 至少2个客户案例
- `faeInsights`: 包含 author, content, keyTakeaways

### 技术支持文章要求
每篇文章必须包含：
- `author`: 包含 name, title
- `publishDate`: 发布日期
- `summary`: 摘要
- `tags`: 至少3个标签
- `relatedArticles`: 至少3篇相关文章
- `faeInsights`: FAE见解
- `customerCases`: 至少1个客户案例

### FAQ 要求
每个文件必须包含：
- 至少3个 FAQ
- 每个 FAQ 包含 question, answer, decisionGuide, keywords

## 📝 提示词模板（用于AI生成）

### 生成产品描述的提示词
```
请为 [品牌名] [型号] 生成产品描述：

⚠️ 铁律提醒：
- shortDescription 必须 80-120 字符
- descriptionParagraphs 必须 3 段
- 必须包含 faeReview (author, content, highlight)
- alternativeParts 必须 ≥2 个，包含详细电气参数对比
- companionParts 必须 ≥3 个

产品信息：
- 型号：[具体型号]
- 类型：[IGBT模块/FRED等]
- 电压/电流：[参数]
- 封装：[封装类型]

生成内容：
1. shortDescription: 80-120字符
2. descriptionParagraphs: 3段
3. features: 4-6个关键特性
4. applications: 3-5个应用场景
5. faeReview: {author, title, content(200-300字), highlight}
6. alternativeParts: ≥2个（电压≥原产品，电流≥原产品）
7. companionParts: ≥3个
```

### 生成客户案例的提示词
```
请为 [品牌名] [解决方案/产品] 生成客户案例：

⚠️ 铁律提醒：
- 每个方案必须 ≥2 个客户案例
- 每个案例包含 customerName, industry, application, challenge, solution, results
- results 必须包含量化数据

方案信息：
- 名称：[方案名称]
- 应用：[应用场景]
- 关键组件：[组件列表]

生成内容（至少2个案例）：
{
  "customerName": "客户名称",
  "industry": "行业",
  "application": "应用场景",
  "challenge": "面临挑战（100-150字）",
  "solution": "解决方案（150-200字）",
  "results": ["量化结果1", "量化结果2", "量化结果3"]
}
```

## ✅ 最终检查清单

在生成网站前，确认以下所有项：

```
□ 运行 brand-creation-checklist.js 通过所有检查
□ 运行 validate-brand-data-v2.js 零错误
□ 所有 shortDescription 长度在 80-120 字符
□ 所有 SEO 关键词包含 distributor 和 选型
□ 所有分类有 selectionGuideLink
□ 所有产品有 faeReview, alternativeParts(≥2), companionParts(≥3)
□ 所有方案有 customerCases(≥2) 和 faeInsights
□ 所有文章有 author, publishDate, faeInsights, customerCases
□ 所有文件有 FAQs(≥3)
```

## 🚫 禁止事项

- ❌ 先提交部分数据，后续再补充
- ❌ 忽略检查工具的任何警告
- ❌ 复制其他品牌的内容
- ❌ 替代料号参数不满足要求
- ❌ 未通过检查就生成网站

## 📞 获取帮助

如果在创建品牌过程中遇到问题：
1. 查看 BRAND_DATA_COMPLETE_GUIDE.md 详细规范
2. 参考现有品牌（如 infineon, crrc）的数据结构
3. 联系技术团队获取支持

---

**记住：先生成检查清单，修复所有问题，最后才生成网站！**
