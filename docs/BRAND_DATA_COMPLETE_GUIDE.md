# 品牌数据完整指南

本文档是新增品牌的唯一权威参考，整合了所有相关规范、流程和模板。

---

## 🚨 铁律（新增品牌必须严格遵守）

### 数据完整性铁律

| 铁律编号 | 铁律内容 | 违反后果 |
|---------|---------|---------|
| **铁律1** | **products.json 中每个分类必须有至少2个产品** | 分类页无法生成，网站404 |
| **铁律2** | **每个产品必须有 shortDescription + descriptionParagraphs(3段) + faeReview + alternativeParts(≥2) + companionParts(≥3)** | 产品详情页内容缺失 |
| **铁律3** | **alternativeParts 电气参数必须 ≥ 被替代型号（电压/电流）** | 替代料号逻辑错误，误导客户 |
| **铁律4** | **solutions.json 每个方案必须有 customerCases(≥1) + faeInsights(完整)** | 方案页无法生成 |
| **铁律5** | **support.json 每篇文章必须有 author + publishDate + faeInsights + customerCases(≥1)** | 支持页无法生成 |
| **铁律6** | **brand.json 中 coreProducts 数量必须与 products.json 分类数量一致** | 品牌首页与实际产品不符 |
| **铁律7** | **所有产品分类必须在 brand.json coreProducts 中声明** | 品牌定位不清晰 |
| **铁律7a** | **brand.json coreProducts.name 必须在模板 productFileMap 中有映射** | about页面产品分类链接404 |
| **铁律7b** | **support.json 必须使用正确的字段名：contentSections[].heading (不是title), faqs, relatedArticles** | support详情页FAQ不显示 |
| **铁律7c** | **solutions.json 必须使用正确的字段名：technicalSpecs, bomList (不是bom), coreAdvantages, faqs** | solution详情页内容缺失 |
| **铁律7d** | **products.json alternativeParts 必须是对象数组（不是字符串数组），包含 partNumber/link/reason/brand** | 产品详情页不显示替代料号 |
| **铁律7e** | **products.json companionParts 必须是对象数组（不是字符串数组），包含 partNumber/link/description/category** | 产品详情页不显示推荐配套 |
| **铁律7f** | **solutions.json technicalSpecs 必须是纯对象键值对（不是数组），格式 {"Param": "Value"}** | solution详情页不显示技术规格 |

### 发布数量铁律

| 铁律编号 | 铁律内容 | 验证方式 |
|---------|---------|---------|
| **铁律8** | **首次发布：所有分类页必须全部发布，每类至少2个产品详情页** | 检查 products.json categories 数量 |
| **铁律9** | **后续更新：每次至少发布2个产品详情页，并更新对应列表页/分类页** | 检查新增产品数量 |
| **铁律10** | **solutions.json 至少2个方案，每个方案2个客户案例** | 检查 solutions 数组长度 |
| **铁律11** | **support.json 至少4篇文章（每类产品分类至少1篇）** | 检查 articles 数组长度 |
| **铁律12** | **生成后必须检查：support详情页显示FAQ，solution详情页显示技术规格和BOM** | 页面内容缺失 |

### FAQ 铁律（新增）

| 铁律编号 | 铁律内容 | 检查方法 |
|---------|---------|---------|
| **铁律12** | **brand.json 必须有 ≥7 个 FAQ** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律13** | **products.json 必须有 ≥5 个 FAQ（根级别）** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律14** | **products.json 每个分类必须有 ≥5 个 FAQ** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律15** | **products.json 每个产品必须有 5-8 个 FAQ** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律16** | **solutions.json 必须有 ≥5 个 FAQ（solutions-list 页面）** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律17** | **solutions.json 每个方案必须有 5-6 个 FAQ（solution-detail 页面）** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律18** | **support.json 必须有 8-12 个 FAQ（support-list 页面）** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律19** | **support.json 每篇文章必须有 5-8 个 FAQ（support-detail 页面）** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律20** | **每个 FAQ 必须有 question + answer + decisionGuide + keywords** | `node scripts/brand-master-checklist.js [brand]` |

### 语言铁律（新增）

| 铁律编号 | 铁律内容 | 违反后果 | 检查方法 |
|---------|---------|---------|---------|
| **铁律26** | **所有内容必须是纯英文，禁止出现任何中文** | 网站显示混合语言，影响专业形象 | 人工检查 + grep 搜索中文字符 |
| **铁律26a** | **品牌名称、产品型号保持英文原样** | 型号识别错误 | 检查 brand.json name/displayName |
| **铁律26b** | **FAE Review、解决方案、技术文章全部英文撰写** | 内容质量不达标 | 人工审核 |
| **铁律26c** | **FAQ 的 question/answer/decisionGuide 全部英文** | FAQ显示中文 | `node scripts/brand-master-checklist.js [brand]` |
| **铁律26d** | **SEO关键词使用英文，包含 distributor/selection/guide 等** | SEO效果差 | 检查 seoKeywords 字段 |

### 质量铁律

| 铁律编号 | 铁律内容 | 检查方法 |
|---------|---------|---------|
| **铁律21** | **所有内容必须原创，禁止复制其他品牌** | 人工审核 |
| **铁律22** | **FAE Review 必须有主观色彩，体现专业见解** | 检查 content 是否包含具体建议 |
| **铁律23** | **替代料号必须有详细的电气参数对比** | 检查 comparison 字段完整性 |
| **铁律24** | **所有JSON必须通过验证脚本零错误** | `node scripts/brand-master-checklist.js [brand]` |
| **铁律25** | **所有FAQ必须通过FAQ验证器零错误** | `node scripts/brand-master-checklist.js [brand] --faq-only` |

### 铁律执行检查清单（创建品牌时必须逐项勾选）

```
□ 铁律1: 每个分类≥2个产品（当前: ___个分类，___个产品）
□ 铁律2: 每个产品有完整字段（shortDescription/descriptionParagraphs/faeReview/alternativeParts/companionParts）
□ 铁律3: 替代料号电压≥原产品，电流≥原产品
□ 铁律4: 每个方案有customerCases和faeInsights
□ 铁律5: 每篇文章有author/publishDate/faeInsights/customerCases
□ 铁律6: coreProducts数量 = products.json分类数量
□ 铁律7: 所有分类在coreProducts中声明
□ 铁律7a: coreProducts.name 在模板 productFileMap 中有映射（如没有需添加）
□ 铁律7b: support.json 字段名正确 - `contentSections[].heading` (不是title), `faqs`, `relatedArticles`
□ 铁律7c: solutions.json 字段名正确 - `technicalSpecs`, `bomList` (不是bom), `coreAdvantages`, `faqs`
□ 铁律7d: products.json alternativeParts 格式正确 - 对象数组，包含 partNumber/link/reason/brand
□ 铁律7e: products.json companionParts 格式正确 - 对象数组，包含 partNumber/link/description/category
□ 铁律7f: solutions.json technicalSpecs 格式正确 - 纯对象键值对 {"Param": "Value"}
□ 铁律8: 首次发布所有分类，每类≥2个产品
□ 铁律9: solutions≥2个，support≥4篇
□ 铁律10: 验证脚本零错误
□ 铁律11: 生成后检查 - support详情页显示FAQ, solution详情页显示技术规格和BOM
□ 铁律26: 所有内容为纯英文，无中文字符（使用 grep -r '[\u4e00-\u9fff]' data/[brand]/ 检查）
□ 铁律26a: 品牌名称、产品型号为英文
□ 铁律26b: FAE Review、解决方案、技术文章为英文
□ 铁律26c: FAQ内容全部为英文
□ 铁律26d: SEO关键词为英文，包含 distributor/selection/guide
```

### 违反铁律的修复流程

```
发现遗漏 → 停止生成 → 补充数据 → 重新验证 → 零错误后生成
```

**禁止行为**：
- ❌ 先提交部分数据，后续再补充
- ❌ 忽略验证脚本的警告
- ❌ 复制其他品牌的内容
- ❌ 替代料号参数不满足要求
- ❌ **任何中文内容（包括标点、注释、占位符）**
- ❌ 使用中文品牌名称或产品型号
- ❌ FAQ 使用中文撰写
- ❌ SEO 关键词使用中文

---

## 📋 快速导航

| 章节 | 内容 | 使用场景 |
|------|------|----------|
| [第1部分：流程概览](#第1部分流程概览) | 7步完整流程 | 了解整体步骤 |
| [第2部分：品牌类型选择](#第2部分品牌类型选择) | 差异化模板选择 | 确定品牌定位 |
| [第3部分：数据规范](#第3部分数据规范) | 所有字段详细定义 | 填写具体数据 |
| [第4部分：替代料号规范](#第4部分替代料号规范) | 电气参数要求 | 填写替代料号 |
| [第5部分：检查清单](#第5部分检查清单) | 完整检查项 | 最终验证 |
| [第6部分：提示词模板](#第6部分提示词模板) | AI辅助生成 | 快速创建内容 |
| [第7部分：故障排除](#第7部分故障排除) | 常见问题 | 解决问题 |

---

## 第1部分：流程概览

### 7步新增品牌流程

```
步骤1: 创建品牌目录
    ↓
步骤2: 选择差异化模板基型
    ↓
步骤3: 填写品牌数据（替换占位符）
    ↓
步骤4: 验证数据完整性
    ↓
步骤5: 修复验证错误
    ↓
步骤6: 生成网站
    ↓
步骤7: 验证网站页面
```

### 快速命令清单（使用新统一工具）

```bash
# 1. 生成品牌数据模板（包含FAQ模板）
node scripts/brand-data-generator.js [brand-name]

# 2. 编辑数据文件，替换模板中的占位符
# 编辑 data/[brand-name]/*.json

# 3. 验证数据完整性（包含FAQ检查）
node scripts/brand-master-checklist.js [brand-name]

# 4. 如只检查FAQ
node scripts/brand-master-checklist.js [brand-name] --faq-only

# 5. 严格模式检查（警告视为错误）
node scripts/brand-master-checklist.js [brand-name] --strict

# 6. 修复错误（根据验证报告）

# 7. 生成网站
npm run build

# 8. 验证页面
cd output && npx http-server -p 8080
```

### 工具说明

| 工具 | 功能 | 替代的旧工具 |
|------|------|-------------|
| `brand-data-generator.js` | 生成完整数据模板（含FAQ模板） | 原 `faq-template-generator.js` + 手动复制模板 |
| `brand-master-checklist.js` | 统一检查清单（数据+FAQ） | 原 `brand-creation-checklist.js` + `faq-validator.js` |

### 模板生成器包含的详细要求

#### 1. 产品分类页描述要求

生成的模板包含以下占位符说明：

- **总体特点**：介绍品牌产品分类的整体技术特点
- **主要系列**：系列A、系列B的特点和应用场景
- **核心优势**：3-5个核心优势详细说明
- **主要应用领域**：工业控制、新能源、电动汽车等
- **SEO关键词**：自然融入"品牌+产品+distributor"、"品牌+产品+选型"
- **长度要求**：至少300字

#### 2. 选型指南入口

生成的模板包含选型指南链接，指向技术支持文章《如何选择最适合您项目的xx品牌+xx产品？》

#### 3. About Brand 页面要求（about-brand）

**FAQ（4-8条）**：
- **重点**：品牌背景、官方授权资质、公司实力、与竞品差异、为什么选择我们作为代理等信任类问题
- **答案长度**：250-450字
- **内容要求**：
  - 真实、专业、体现"授权代理"信任感
  - 自然融入长尾关键词
  - 采用结构：直接答案 → 解释/对比 → 实用建议 → decisionGuide
- **decisionGuide**：引导用户进入产品列表页或联系我们
- **示例问题**：
  - LiTong是[品牌名]的授权代理商吗？
  - [品牌名]的核心竞争优势是什么？
  - 与其他品牌相比，[品牌名]的产品有什么特点？
  - 通过LiTong采购[品牌名]产品有什么优势？

#### 4. 产品列表页要求（products-list）

**FAQ（8-12条，实际展示6-10条）**：
- **重点**：产品大类整体介绍、如何选择合适的大类、不同类别区别、常见应用场景对比
- **答案长度**：250-400字
- **内容要求**：
  - 概括性介绍各产品大类特点
  - 帮助用户理解不同类别的适用场景
  - 提供选型方向指引
- **decisionGuide**：引导用户点击进入具体二级分类页
- **示例问题**：
  - [品牌名]主要有哪些产品类别？
  - 如何选择适合我项目的[品牌名]产品类别？
  - [产品类别A]和[产品类别B]有什么区别？
  - 不同产品类别分别适用于哪些应用场景？

#### 5. 二级产品分类页要求（product-category）

**FAQ（10-16条，实际展示8-12条）**：
- **重点**：该分类整体选型指南、表格中参数解读、如何高效使用表格、型号差异对比、封装/外形选择、适用场景推荐
- **答案长度**：300-500字
- **内容要求**：
  - 与表格形成互补，帮助用户更好理解和对比表格内容
  - 解读关键参数含义
  - 提供选型决策框架
- **decisionGuide**：引导用户点击具体型号进入详情页，或提供项目参数让我们帮忙选型
- **示例问题**：
  - 如何根据参数表格选择合适的型号？
  - [参数名称]对应用有什么影响？
  - 不同封装形式有什么区别？
  - 如何根据应用场景缩小选型范围？

#### 6. 产品详情页要求（product-detail）

**FAE点评（代理商点评/应用解读）**：
- 作者：FAE工程师姓名和职位
- 内容：200-300字专业解读
- 必须带有主观色彩（建议、推荐、认为、经验、发现、注意）
- 包含：产品优势分析、应用建议、选型建议、主观评价

**替代料号**：
- 至少2个替代料号
- 电气参数必须 ≥ 原型号（电压≥，电流≥）
- 详细参数对比格式：使用 = > < 符号
- 示例：`- 电压：1200V = 1200V (相同)`

**配套料号**：至少7个

**FAQ（5-6条，严格控制数量）**：
- **重点**：针对这个具体型号的选型细节、实际应用案例、安装注意事项、与其他型号/竞品对比、真假辨别、典型参数解读等
- **答案长度**：250-400字
- **内容要求**：
  - 补充规格表之外的实用信息
  - 不要重复页面已有参数表
  - 提供具体的应用指导
- **decisionGuide**：推荐使用场景、引导询价或下载资料
- **示例问题**：
  - 该型号的主要应用场景是什么？
  - 与竞品相比有什么优势？
  - 如何进行PCB布局设计？
  - 推荐的工作条件是什么？
  - 常见故障及解决方法？
  - 如何进行参数选型？

#### 7. 解决方案列表页要求（solutions-list）

**FAQ（8-14条，实际展示6-10条）**：
- **重点**：不同应用场景的整体方案对比、如何根据项目特点选择解决方案
- **答案长度**：250-450字
- **内容要求**：
  - 概括性介绍各解决方案适用场景
  - 对比不同方案的优劣势
  - 提供方案选型决策框架
- **decisionGuide**：引导进入具体解决方案详情页
- **示例问题**：
  - [品牌名]提供哪些应用解决方案？
  - 如何根据项目需求选择合适的解决方案？
  - [解决方案A]和[解决方案B]有什么区别？
  - 不同解决方案分别适用于哪些行业？

#### 8. 解决方案详情页要求（solution-detail）

**客户案例**（至少2个）：
- 客户名称（可匿名）
- 行业
- 面临挑战（100-150字）
- 解决方案（150-200字）
- 实施效果（100-150字，量化数据如：效率提升X%）

**FAE见解**（包含决策框架）：
- 作者：FAE工程师
- 内容：300-500字专业见解
- 包含：方案核心洞察、见解逻辑/决策框架、实施建议、常见误区
- keyTakeaways：5个要点
- decisionFramework：决策框架（步骤+决策矩阵）

**FAQ（3-6条，严格控制数量）**：
- **重点**：针对这个具体应用场景的系统集成要点、注意事项、真实案例分析、推荐产品搭配
- **答案长度**：250-450字
- **内容要求**：
  - 提供系统集成实用指导
  - 分享实际项目经验教训
  - 推荐关键器件搭配
- **decisionGuide**：引导联系获取完整定制方案
- **示例问题**：
  - 该方案的核心技术要点是什么？
  - 系统集成时需要注意哪些问题？
  - 推荐的关键器件有哪些？
  - 如何评估方案实施效果？

#### 9. 技术支持列表页要求（support-list）

**FAQ（12-18条，实际展示10-15条）**：
- **重点**：授权验证、采购流程、报价方式、交期、物流、真假货鉴别、技术支持、保修政策、退换货等
- **答案长度**：200-450字
- **内容要求**：
  - 覆盖采购全流程常见问题
  - 提供明确的操作指引
  - 建立信任感和专业形象
- **decisionGuide**：引导立即询价、提交表单、联系销售
- **示例问题**：
  - 如何验证LiTong的授权代理资质？
  - 采购流程是怎样的？
  - 报价需要提供哪些信息？
  - 产品交期一般是多久？
  - 如何鉴别产品真伪？
  - 技术支持包含哪些内容？

#### 10. 技术支持详情页要求（support-detail）

**FAE见解**（包含见解逻辑）：
- 作者：FAE工程师
- 内容：200-300字
- 包含：核心见解、见解逻辑/决策框架、实用建议
- practicalTips：4个实用建议
- insightLogic：技术决策逻辑

**客户案例**（至少1个）：
- 客户名称、行业、应用场景
- 技术挑战（100字）
- 解决方案（100字）
- 客户反馈/效果（100字，量化数据）

**FAQ（4-8条，严格控制数量）**：
- **重点**：针对该具体支持主题的详细流程、政策解读、实际操作案例、常见问题解决办法等
- **答案长度**：250-450字
- **内容要求**：
  - 提供详细的操作步骤
  - 解读相关政策条款
  - 分享实际案例经验
- **decisionGuide**：引导用户立即行动（提交询价、联系技术支持、下载资料）
- **示例问题**：
  - 该技术支持服务的具体流程是什么？
  - 需要准备哪些资料？
  - 常见问题有哪些解决方法？
  - 如何获取进一步帮助？
---

### 11. 通用FAQ内容要求（所有页面类型）

**FAQ JSON字段格式**：
```json
{
  "pageType": "about-brand / products-list / product-category / product-detail / solutions-list / solution-detail / support-list / support-detail",
  "faqs": [
    {
      "question": "自然、用户真实搜索的问题（15-35字）",
      "answer": "专业、深度、有实用价值的回答",
      "decisionGuide": "1-2句明确的决策引导句",
      "keywords": ["长尾关键词1", "长尾关键词2"]
    }
  ]
}
```

**Answer内容结构（4段式）**：
1. **直接答案** - 开篇直接回答用户问题
2. **解释/对比** - 详细解释技术原理或与其他方案对比
3. **实用建议** - 提供具体的选型或应用建议
4. **decisionGuide** - 明确的行动引导

**通用质量要求**：
- 内容必须真实、专业、技术深度高
- 避免硬广，体现"授权代理"信任感和专业服务
- 自然融入长尾关键词，但不堆砌
- 不同页面类型的FAQ内容要有差异化，避免重复
- 总输出为清晰分开的多个JSON对象

**FAQ字段要求**：
- **question**：自然、用户真实搜索的问题（15-35字）
- **answer**：专业、深度、有实用价值的回答（按页面类型要求的长度）
- **decisionGuide**：1-2句明确的决策引导句（帮助用户选型、询价、联系我们或立即行动）
- **keywords**：长尾关键词数组（2-3个）

**FAQ完整示例（产品详情页）**：
```json
{
  "question": "What is the maximum ripple current for this capacitor?",
  "answer": "The rated ripple current is 1.2A at 85C and 120Hz. This rating ensures reliable operation in power supply applications with moderate switching frequencies. At lower temperatures, the capacitor can handle higher ripple currents - approximately 1.5A at 60C. For high-frequency applications above 100kHz, the effective ripple current capability may be reduced due to increased ESR. Always verify the actual operating temperature and frequency conditions in your application to ensure the capacitor operates within its safe operating area.",
  "decisionGuide": "For applications exceeding 1.2A ripple current, consider using multiple capacitors in parallel or upgrading to a higher capacitance model. Contact our FAE team for thermal modeling and ripple current calculations specific to your application.",
  "keywords": ["ripple current rating", "capacitor thermal", "power supply design"]
}
```

**FAQ内容质量标准**：
1. **Answer必须包含4个层次**：
   - 直接回答（首句明确回答）
   - 技术解释（原理、影响因素）
   - 实用数据（具体数值、范围、条件）
   - 应用建议（选型、使用注意事项）

2. **DecisionGuide必须包含**：
   - 明确的行动建议（选型/询价/联系）
   - 具体的下一步操作
   - 体现"授权代理"服务价值

3. **Keywords要求**：
   - 2-3个长尾关键词
   - 包含品牌名+产品类型+应用场景
   - 自然融入，不堆砌

### 11.1 FAQ自动化生成规范（重要）

**FAQ生成必须基于真实产品数据**：

当使用脚本自动生成或修复FAQ时，必须遵循以下规则：

#### 数据提取规则

```javascript
// 必须从产品规格中提取真实数据
const productData = {
  capacitance: product.specifications.Capacitance,      // 如 "1000uF"
  voltage: product.specifications["Voltage Rating"],    // 如 "25V DC"
  rippleCurrent: product.specifications["Ripple Current"], // 如 "1.2A @ 85C, 120Hz"
  temperatureRange: product.specifications["Temperature Range"], // 如 "-40C to +85C"
  lifetime: product.specifications.Lifetime,            // 如 "2,000 hours @ 85C"
  esr: product.specifications.ESR || "calculated"       // ESR值
};

// 解析温度值（用于寿命计算）
const maxTemp = extractMaxTemp(productData.temperatureRange); // 如 85
const lifetimeHours = extractLifetimeHours(productData.lifetime); // 如 2000
```

#### FAQ内容生成规则

1. **纹波电流FAQ**：
   - 必须使用产品规格中的实际纹波电流值
   - 必须引用正确的温度（如85C，不是40C）
   - 必须说明频率（通常是120Hz或100kHz）

2. **寿命FAQ**：
   - 必须使用规格书中的额定寿命（如2000 hours @ 85C）
   - 必须使用Arrhenius方程计算不同温度下的寿命
   - 公式：寿命倍数 = 2^((额定温度-工作温度)/10)
   - 示例：2000h @ 85C → 4000h @ 75C → 8000h @ 65C

3. **温度范围FAQ**：
   - 必须使用规格书中的实际温度范围
   - 必须说明最大额定温度（如85C或105C）

4. **电压降额FAQ**：
   - 必须基于产品的实际额定电压
   - 80%降额计算：额定电压 × 0.8
   - 50%降额计算：额定电压 × 0.5

#### FAQ模板变量替换规范

```javascript
// ❌ 错误：使用固定占位符
"The rated ripple current is {rippleCurrent} at {temperature}"
// 结果："The rated ripple current is 1.2A at 40C" (错误温度)

// ✅ 正确：使用产品实际数据
const faq = {
  question: "What is the maximum ripple current for this capacitor?",
  answer: `The rated ripple current is ${actualRippleCurrent} at ${maxTemp}C and 120Hz. 
           This rating ensures reliable operation...`,
  decisionGuide: "For applications exceeding ${actualRippleCurrent} ripple current...",
  keywords: ["ripple current rating", "capacitor thermal", "power supply design"]
};
```

#### 验证检查点

生成FAQ后必须验证：
1. ✅ 所有数值与产品规格书一致
2. ✅ 温度值引用正确（85C或105C，不是40C）
3. ✅ 寿命计算使用正确的额定温度
4. ✅ 电压降额基于实际额定电压
5. ✅ 答案包含4个层次（直接回答、技术解释、实用数据、应用建议）

---

## 第2部分：品牌类型选择

### 2.1 品牌类型对照表

| 品牌类型 | 推荐模板基型 | 适用品牌举例 | 核心特点 |
|----------|--------------|--------------|----------|
| **功率半导体（汽车/工业）** | Infineon 模板 | onsemi、Rohm、Mitsubishi | 功能安全、宽禁带 |
| **功率半导体（工业驱动）** | Semikron 模板 | Fuji Electric、Danfoss | 智能功率模块、集成驱动 |
| **轨道交通** | CRRC 模板 | 铁路设备品牌 | 高可靠性、铁路标准 |
| **MCU/处理器** | Infineon MCU 模板 | NXP、Renesas、TI | 功能安全、嵌入式 |
| **综合半导体** | 混合模板 | 根据主要产品选择 | 灵活组合 |

### 2.2 差异化模板路径

```
templates/brand-data-template/
├── infineon/
│   ├── products-igbt.json      # IGBT 模块模板
│   └── products-mcu.json       # MCU 模板
├── crrc/
│   └── products-traction.json  # 牵引系统模板
├── semikron/
│   └── products-igbt.json      # IGBT + IPM 模板
└── generic/                     # 通用模板
    ├── brand.json
    ├── solutions.json
    └── support.json
```

### 2.3 模板选择决策树

```
品牌主要产品是什么？
    ├── 功率半导体（IGBT/MOSFET）
    │       ├── 汽车应用为主 → Infineon 模板
    │       └── 工业驱动为主 → Semikron 模板
    ├── 轨道交通设备 → CRRC 模板
    ├── MCU/处理器 → Infineon MCU 模板
    └── 其他 → 选择最接近的模板
```

---

## 第3部分：数据规范

### 3.1 文件结构

```
data/[brand-name]/
├── brand.json          # 品牌信息
├── products.json       # 产品数据
├── solutions.json      # 解决方案
├── support.json        # 技术支持
└── news.json           # 新闻（可选）
```

### 3.1.1 网站内容完整性检查清单

在生成网站前，必须确保以下所有内容符合规范：

#### SEO 关键词规范（铁律26d）

**所有SEO关键词必须包含**：
- `distributor` 或 `distributor`
- `selection` 或 `selection guide`
- 品牌名 + 产品类型

**示例**：
```json
"seoKeywords": [
  "Samyoung capacitor distributor",
  "Samyoung aluminum electrolytic capacitor selection",
  "Korean capacitor distributor",
  "radial capacitor selection guide"
]
```

#### 产品分类数量要求（铁律1, 铁律6, 铁律7）

| 品牌类型 | 最少分类数 | 每个分类最少产品数 |
|---------|-----------|------------------|
| 标准品牌 | 4个 | 2个 |
| 小型品牌 | 2个 | 2个 |
| 专业品牌 | 3个 | 2个 |

**注意**：
- brand.json 的 `coreProducts` 数量必须等于 products.json 的分类数量
- 所有分类必须在 `coreProducts` 中声明
- 分类名称必须在模板 `productFileMap` 中有映射

#### FAE Review 完整字段结构（铁律22）

```json
{
  "faeReview": {
    "author": "工程师姓名（英文名）",
    "title": "职位，如 Senior FAE - Power Electronics",
    "content": "200-300字的点评内容，必须包含：
      - 主观色彩（建议、推荐、认为、经验、发现、注意）
      - 具体技术建议
      - 应用场景分析
      - 与竞品的对比见解",
    "highlight": "50字符内的核心观点总结"
  }
}
```

#### 替代料号对比格式规范（铁律23）

**必须使用 =>< 符号格式**：

```json
{
  "alternativeParts": [
    {
      "partNumber": "替代型号",
      "brand": "品牌名",
      "specifications": {
        "voltage": "1200V",
        "current": "450A"
      },
      "comparison": {
        "voltage": "1200V = 1200V (相同)",
        "current": "450A > 300A (+50%)",
        "vceSat": "1.75V = 1.75V (相同)",
        "package": "EconoDUAL 3 = EconoDUAL 3 (相同)"
      },
      "reason": "替代原因（技术角度）",
      "useCase": "适用场景（应用角度）",
      "link": "/brand/products/category/part.html"
    }
  ]
}
```

**对比符号规范**：
- `=` - 参数相同
- `>` - 替代料号参数优于原型号
- `<` - 替代料号参数劣于原型号（不推荐）
- `(+X%)` 或 `(-X%)` - 差异百分比

#### 技术支持文章相关文章数量（铁律5）

```json
{
  "relatedArticles": [
    "article-id-1",
    "article-id-2", 
    "article-id-3"
  ]
}
```

**要求**：每篇文章至少3个相关文章ID

#### FAE Insights 长度要求（铁律4, 铁律5）

| 字段 | 最小长度 | 内容要求 |
|-----|---------|---------|
| `insight` | 200字 | 核心见解 |
| `logic` | 200字 | 决策逻辑/框架 |
| `keyTakeaways` | 3-5条 | 关键要点 |
| `commonPitfalls` | 2-3条 | 常见误区 |
| `bestPractices` | 3-5条 | 最佳实践 |

### 3.2 brand.json 规范

#### 必填字段

```json
{
  "name": "品牌英文名（小写）",
  "displayName": "品牌完整显示名",
  "logo": "/assets/brands/[brand]/logo.svg",
  "tagline": "品牌标语",
  "description": "品牌简短描述（100-200字）",
  "longDescription": "品牌详细介绍（300-500字）",
  "coreProducts": [
    {
      "name": "产品类别名",
      "description": "产品类别描述",
      "keywords": ["关键词1", "关键词2"]
    }
  ],
  "industries": [
    {
      "name": "行业名",
      "description": "行业应用描述",
      "keywords": ["关键词1", "关键词2"]
    }
  ],
  "certifications": [
    {
      "name": "认证名称",
      "description": "认证说明"
    }
  ],
  "yearFounded": 1999,
  "headquarters": "总部所在地",
  "employees": "员工数量",
  "revenue": "年营收",
  "website": "https://www.brand.com",
  "distributorStatus": "Core Distributor",
  "seoTitle": "SEO标题（60字符内）",
  "seoDescription": "SEO描述（160字符内）",
  "seoKeywords": ["关键词1", "关键词2"],
  "faqs": [
    {
      "question": "问题",
      "answer": "回答",
      "decisionGuide": "决策建议",
      "keywords": ["关键词1"]
    }
  ]
}
```

#### 内容差异化要求

- **品牌描述**：必须原创，不能复制其他品牌
- **核心产品**：根据实际产品线定制
- **应用行业**：根据目标市场定制
- **认证资质**：填写实际拥有的认证

### 3.3 products.json 规范

#### 整体结构

```json
{
  "seoTitle": "SEO标题",
  "seoDescription": "SEO描述",
  "seoKeywords": ["关键词1", "关键词2"],
  "faqs": [...],
  "categories": [
    {
      "id": "分类ID",
      "name": "分类名称",
      "description": "分类描述（200-300字）",
      "parameters": ["参数1", "参数2"],
      "applications": ["应用1", "应用2"],
      "selectionGuide": {
        "title": "选型指南标题",
        "description": "选型指南描述",
        "articleId": "文章ID",
        "articleLink": "/brand/support/article.html"
      },
      "products": [
        {
          "partNumber": "型号",
          "name": "产品名称",
          "shortDescription": "简短描述（80-120字符）",
          "descriptionParagraphs": [
            "第1段（100字符内）",
            "第2段（100字符内）",
            "第3段（100字符内）"
          ],
          "faeReview": {
            "author": "FAE姓名",
            "title": "职位",
            "content": "点评内容（200-300字）",
            "highlight": "核心观点（50字符内）"
          },
          "alternativeParts": [...],
          "companionParts": [...]
        }
      ]
    }
  ]
}
```

#### 产品字段详细规范

| 字段 | 类型 | 要求 | 示例 |
|------|------|------|------|
| `shortDescription` | string | 80-120字符 | "Infineon FF300R12ME4 1200V 300A IGBT module..." |
| `descriptionParagraphs` | array | 3段，每段100字符内 | ["第1段...", "第2段...", "第3段..."] |
| `faeReview.content` | string | 200-300字，原创 | "In my 12 years supporting..." |
| `faeReview.highlight` | string | 50字符内 | "Excellent balance of losses..." |
| `alternativeParts` | array | ≥2个 | 见第4部分规范 |
| `companionParts` | array | ≥3个 | 配套料号列表 |

#### FAE 点评要求

**必须包含：**
- 作者姓名和职位
- 基于实际经验的点评（200-300字）
- 具体的技术建议
- 核心观点一句话总结

**差异化要求：**
- **Infineon 风格**：侧重汽车功能安全、功率转换
- **CRRC 风格**：侧重铁路环境、高可靠性
- **Semikron 风格**：侧重热设计、封装技术

### 3.4 solutions.json 规范

```json
{
  "solutions": [
    {
      "id": "方案ID",
      "name": "方案名称",
      "description": "方案描述",
      "features": ["特性1", "特性2"],
      "applications": ["应用1", "应用2"],
      "keyComponents": [
        {
          "partNumber": "器件型号",
          "description": "器件描述",
          "link": "链接"
        }
      ],
      "customerCases": [
        {
          "customerName": "客户名称",
          "industry": "行业",
          "application": "应用场景",
          "challenge": "挑战描述（100-150字）",
          "solution": "解决方案（150-200字）",
          "results": "实施效果（100-150字）"
        }
      ],
      "faeInsights": {
        "author": {
          "name": "姓名",
          "title": "职位",
          "experience": "经验年限",
          "expertise": ["专长1", "专长2"]
        },
        "insight": "专业见解（300-500字）",
        "logic": "决策逻辑（200-300字）",
        "keyTakeaways": ["要点1", "要点2", "要点3"],
        "commonPitfalls": ["误区1", "误区2"],
        "bestPractices": ["实践1", "实践2", "实践3"]
      }
    }
  ]
}
```

### 3.5 support.json 规范

```json
{
  "articles": [
    {
      "id": "文章ID",
      "title": "文章标题",
      "category": "分类",
      "author": {
        "name": "作者姓名",
        "title": "职位",
        "experience": "经验年限",
        "expertise": ["专长1", "专长2"]
      },
      "publishDate": "2026-03-15",
      "lastUpdated": "2026-03-15",
      "summary": "摘要（100-150字）",
      "content": "文章内容（支持Markdown）",
      "relatedArticles": ["文章ID1", "文章ID2", "文章ID3"],
      "faeInsights": {
        "insight": "专业见解（300-500字）",
        "logic": "技术逻辑（200-300字）",
        "keyTakeaways": ["要点1", "要点2", "要点3"],
        "commonPitfalls": ["误区1", "误区2"],
        "bestPractices": ["实践1", "实践2", "实践3"],
        "troubleshootingTips": ["技巧1", "技巧2"]
      },
      "customerCases": [
        {
          "customerName": "客户名称",
          "industry": "行业",
          "application": "应用场景",
          "problem": "问题描述",
          "diagnosis": "诊断过程",
          "solution": "解决方案",
          "results": "解决效果"
        }
      ]
    }
  ]
}
```

---

## 第4部分：替代料号规范

### 4.1 核心原则

**原则1：电气参数必须满足**
- 电压/电流 ≥ 被替代型号
- 导通损耗 ≤ 或接近被替代型号

**原则2：参数必须接近**
- 电流高 20-50%（避免过大差异）
- 封装优先相同

**原则3：兼容性要求**
- Pin-to-Pin 兼容或封装兼容
- 驱动参数接近

### 4.2 不同产品类型规范

| 产品类型 | 电压/功率 | 电流 | 损耗 | 封装 |
|---------|-----------|------|------|------|
| IGBT | ≥，优先相同 | ≥，高20-50% | ≤或接近 | 优先相同 |
| MOSFET | ≥，优先相同 | ≥，高20-50% | ≤，越低越好 | 优先相同 |
| MCU | ≥，优先相同 | - | - | 优先相同 |
| 牵引系统 | ≥，高20-50% | ≥ | - | 相同或更强 |

### 4.3 数据格式

```json
{
  "alternativeParts": [
    {
      "partNumber": "替代型号",
      "brand": "品牌",
      "specifications": {
        "voltage": "1200V",
        "current": "450A",
        "vceSat": "1.75V (typ)",
        "package": "EconoDUAL 3"
      },
      "comparison": {
        "voltage": "1200V = 1200V (相同)",
        "current": "450A > 300A (+50%)",
        "vceSat": "1.75V = 1.75V (相同)",
        "package": "EconoDUAL 3 = EconoDUAL 3 (相同)",
        "compatibility": "Pin-compatible, direct replacement"
      },
      "reason": "替代原因（技术角度）",
      "useCase": "适用场景（应用角度）",
      "link": "/brand/products/category/part.html"
    }
  ]
}
```

### 4.4 对比格式规范

- **相同**：`=`
- **优于**：`>` 或 `<`（根据参数性质）
- **差异百分比**：`(+X%)` 或 `(-X%)`

**示例：**
```json
{
  "voltage": "1200V = 1200V (相同)",
  "current": "450A > 300A (+50%)",
  "vceSat": "1.55V < 1.75V (-11%，更低导通损耗)"
}
```

### 4.5 三种替代类型

**类型1：功率升级型**
- 电流/功率更高
- 其他参数相同
- 适用于功率升级场景

**类型2：效率提升型**
- 导通损耗更低
- 其他参数相同
- 适用于高效率要求场景

**类型3：集成方案型**
- 集成度更高
- 简化设计
- 适用于快速开发场景

---

## 第5部分：检查清单

### 5.1 基础数据检查（对照铁律）

#### brand.json（铁律6、7）
- [ ] **铁律6**: coreProducts数量 = products.json分类数量
- [ ] **铁律7**: 所有分类在coreProducts中声明
- [ ] name（小写）
- [ ] displayName
- [ ] description（100-200字）
- [ ] longDescription（300-500字）
- [ ] coreProducts（至少4个，与分类一一对应）
- [ ] industries（至少3个）
- [ ] seoTitle（60字符内）
- [ ] seoDescription（160字符内）
- [ ] seoKeywords（至少5个）
- [ ] FAQs（至少3个）

#### products.json（铁律1、2、3）
- [ ] **铁律1**: 每个分类≥2个产品
- [ ] **铁律8**: 所有分类全部发布
- [ ] seoTitle
- [ ] seoDescription
- [ ] seoKeywords
- [ ] FAQs（至少3个）
- [ ] categories（至少4个，与coreProducts对应）
  - [ ] 每个分类有 selectionGuide
  - [ ] **铁律1**: 每个分类有 products（至少2个）
    - [ ] **铁律2**: 每个产品有 shortDescription（80-120字符）
    - [ ] **铁律2**: 每个产品有 descriptionParagraphs（3段）
    - [ ] **铁律2**: 每个产品有 faeReview
      - [ ] author
      - [ ] content（200-300字）
      - [ ] highlight（50字符内）
    - [ ] **铁律2**: 每个产品有 alternativeParts（≥2个）
      - [ ] **铁律3**: 电压 ≥ 被替代型号
      - [ ] **铁律3**: 电流 ≥ 被替代型号
      - [ ] **铁律14**: specifications 完整
      - [ ] **铁律14**: comparison 详细（使用 = > < 格式）
      - [ ] reason 和 useCase
    - [ ] **铁律2**: 每个产品有 companionParts（≥3个）
    - [ ] **铁律15**: 每个产品有 FAQs（5-6个）
      - [ ] 每个FAQ有 question
      - [ ] 每个FAQ有 answer（250-500字）
      - [ ] 每个FAQ有 decisionGuide
      - [ ] 每个FAQ有 keywords

#### solutions.json（铁律4、10、16、17）
- [ ] **铁律4**: solutions（至少2个）
- [ ] **铁律16**: solutions-list FAQs（≥3个）
  - [ ] 每个FAQ有 question
  - [ ] 每个FAQ有 answer（250-450字）
  - [ ] 每个FAQ有 decisionGuide
  - [ ] 每个FAQ有 keywords
- [ ] **铁律10**: 每个方案有 customerCases（≥2个）
- [ ] **铁律4**: 每个方案有 faeInsights
  - [ ] author
  - [ ] insight（300-500字）
  - [ ] logic（200-300字）
  - [ ] keyTakeaways（3-5条）
  - [ ] commonPitfalls（2-3条）
  - [ ] bestPractices（3-5条）
- [ ] **铁律17**: 每个方案有 solution-detail FAQs（3-6个）
  - [ ] 每个FAQ有 question
  - [ ] 每个FAQ有 answer（250-450字）
  - [ ] 每个FAQ有 decisionGuide
  - [ ] 每个FAQ有 keywords

#### support.json（铁律5、11、18、19）
- [ ] **铁律5**: articles（至少4篇，每类产品分类至少1篇）
- [ ] **铁律18**: support-list FAQs（12-18个）
  - [ ] 每个FAQ有 question
  - [ ] 每个FAQ有 answer（200-450字）
  - [ ] 每个FAQ有 decisionGuide
  - [ ] 每个FAQ有 keywords
- [ ] **铁律5**: 每篇文章有 author（完整信息）
- [ ] **铁律5**: 每篇文章有 publishDate
- [ ] 每篇文章有 relatedArticles（≥3个）
- [ ] **铁律5**: 每篇文章有 faeInsights
- [ ] **铁律5**: 每篇文章有 customerCases（≥1个）

### 5.2 品牌差异化检查

- [ ] 品牌描述原创，与其他品牌不同
- [ ] 产品分类与其他品牌有差异
- [ ] FAE 点评体现品牌专业方向
- [ ] 配套料号符合品牌生态系统
- [ ] 选型指南体现品牌优势

### 5.3 技术规范检查

- [ ] 所有 JSON 格式正确
- [ ] 所有链接格式正确（/brand/products/category/part.html）
- [ ] 替代料号电气参数 ≥ 被替代型号
- [ ] 图片路径正确
- [ ] 无占位符未替换

---

## 第6部分：提示词模板

### 6.1 生成品牌描述的提示词

```
请为 [品牌名] 生成品牌描述，要求：

1. 品牌定位：[功率半导体/轨道交通/MCU等]
2. 核心产品：[IGBT模块/MCU/传感器等]
3. 主要应用：[汽车/工业/铁路等]
4. 技术特点：[功能安全/高可靠性/智能功率等]

生成内容：
- description: 100-200字的品牌简介
- longDescription: 300-500字的详细介绍
- coreProducts: 3-5个核心产品类别
- industries: 3-5个目标行业

要求：
- 内容原创，不要复制其他品牌
- 自然地融入SEO关键词（品牌名+distributor/代理商/选型）
- 突出品牌技术优势和差异化特点
```

### 6.2 生成产品描述的提示词

```
请为 [品牌名] [型号] 生成产品描述：

⚠️ 铁律提醒：
- 铁律1: 每个分类必须生成至少2个产品
- 铁律2: 每个产品必须有 shortDescription + descriptionParagraphs(3段) + faeReview + alternativeParts(≥2) + companionParts(≥3)
- 铁律3: alternativeParts 电气参数必须 ≥ 被替代型号

产品信息：
- 型号：[具体型号]
- 类型：[IGBT模块/MCU等]
- 电压/电流：[参数]
- 封装：[封装类型]
- 关键特性：[特性1, 特性2]

生成内容：
1. shortDescription: 80-120字符
2. descriptionParagraphs: 3段，每段100字符内
3. features: 4-6个关键特性
4. applications: 3-5个应用场景
5. faeReview: {author, title, content(200-300字), highlight}
6. alternativeParts: ≥2个（电压≥原产品，电流≥原产品）
7. companionParts: ≥3个

要求：
- 自然地融入SEO关键词（品牌名+产品名+distributor/选型）
- 突出产品核心优势和差异化
- 简洁专业，避免冗余
- alternativeParts 必须满足电气参数 ≥ 被替代型号
```

### 6.3 生成FAE点评的提示词

```
请为 [品牌名] [型号] 生成FAE点评：

产品信息：
- 型号：[具体型号]
- 应用：[电机驱动/太阳能逆变器等]
- 关键参数：[电压/电流等]

生成内容：
{
  "author": "[中文名]",
  "title": "Senior FAE - [专业领域]",
  "content": "200-300字的点评",
  "highlight": "50字符内的核心观点"
}

要求：
- 基于[品牌类型]的专业角度（汽车/铁路/工业驱动）
- 包含具体的技术建议和应用经验
- 有主观色彩，体现专业见解
- 提及实际应用场景和注意事项
```

### 6.4 生成替代料号的提示词

```
请为 [品牌名] [型号] 生成替代料号：

原产品参数：
- 型号：[型号]
- 电压：[电压]
- 电流：[电流]
- 封装：[封装]

生成2个替代料号，要求：
1. 电气参数 ≥ 原产品
2. 参数尽量接近（电流高20-50%）
3. 封装相同或兼容

每个替代料号包含：
- partNumber
- specifications（完整参数）
- comparison（详细对比，使用 = > < 格式）
- reason（技术角度）
- useCase（应用角度）

格式示例：
{
  "partNumber": "替代型号",
  "specifications": {
    "voltage": "1200V",
    "current": "450A"
  },
  "comparison": {
    "voltage": "1200V = 1200V (相同)",
    "current": "450A > 300A (+50%)"
  }
}
```

### 6.5 生成客户案例的提示词

```
请为 [品牌名] [解决方案/产品] 生成客户案例：

⚠️ 铁律提醒：
- 铁律4: 每个方案必须有 customerCases(≥1) + faeInsights(完整)
- 铁律5: 每篇文章必须有 customerCases(≥1)
- 铁律10: 每个方案至少2个客户案例

方案信息：
- 名称：[方案名称]
- 应用：[应用场景]
- 关键组件：[组件列表]

生成内容（至少2个案例）：
{
  "customerName": "客户名称（可匿名）",
  "industry": "行业",
  "application": "应用场景",
  "challenge": "面临挑战（100-150字）",
  "solution": "解决方案（150-200字）",
  "results": "实施效果（100-150字，量化数据）"
}

要求：
- 真实可信，可基于典型应用构建
- 包含具体的技术细节
- 量化实施效果（效率提升X%，成本降低Y%）
- 每个方案至少生成2个客户案例
```

### 6.6 生成FAE见解的提示词

```
请为 [品牌名] [技术主题] 生成FAE见解：

主题：[IGBT选型/电机控制/牵引系统设计等]

生成内容：
{
  "author": {
    "name": "姓名",
    "title": "职位",
    "experience": "15 years",
    "expertise": ["专长1", "专长2"]
  },
  "insight": "专业见解（300-500字）",
  "logic": "决策逻辑/选型框架（200-300字）",
  "keyTakeaways": ["要点1", "要点2", "要点3", "要点4", "要点5"],
  "commonPitfalls": ["误区1", "误区2", "误区3"],
  "bestPractices": ["实践1", "实践2", "实践3", "实践4", "实践5"]
}

要求：
- 基于[品牌类型]的专业角度
- 内容有深度，体现专业经验
- 提供实用的选型/设计建议
- 包含具体的工程经验
```

---

## 第7部分：模板映射规范（新增）

### 7.0 模板字段映射要求（重要）

#### 问题背景
模板文件（EJS）使用特定的字段名来渲染数据。如果 JSON 数据中的字段名与模板期望的不一致，页面会显示空白或报错。

#### 关键字段映射表

| 模板文件 | 期望字段名 | 数据文件字段 | 说明 |
|---------|-----------|-------------|------|
| **support-detail.html** | `article.faqs` | support.json `articles[].faqs` | 文章FAQ列表 |
| **support-detail.html** | `section.heading` | support.json `contentSections[].heading` | 内容区块标题 |
| **solution-detail.html** | `solution.technicalSpecs` | solutions.json `technicalSpecs` | 技术规格 |
| **solution-detail.html** | `solution.bomList` | solutions.json `bomList` | BOM清单 |
| **solution-detail.html** | `solution.coreAdvantages` | solutions.json `coreAdvantages` | 核心优势 |
| **brand-about.html** | `article.relatedArticles` | support.json `articles[].relatedArticles` | 相关文章 |

#### 必须检查的字段（新增品牌时）

**support.json 必须包含：**
```json
{
  "articles": [
    {
      "id": "article-id",
      "title": "文章标题",
      "content": [  // 文章内容，支持Markdown格式的字符串数组
        "段落内容...",
        "",
        "## 章节标题",
        "",
        "段落内容...",
        "",
        "- 列表项1",
        "- 列表项2",
        "",
        "**粗体文本**"
      ],
      "faqs": [  // 每篇文章4-8个FAQ
        {
          "question": "问题",
          "answer": "答案",
          "decisionGuide": "决策建议",
          "keywords": ["关键词"]
        }
      ],
      "relatedArticles": ["article-id-1", "article-id-2", "article-id-3"]  // 相关文章ID
    }
  ]
}
```

**重要说明：**
- `content` 字段可以是**字符串数组**，支持 Markdown 格式
- 使用 `##` 表示章节标题（渲染为 `<h3>`）
- 使用 `-` 表示无序列表
- 使用 `**文本**` 表示粗体
- 空字符串 `""` 表示段落间距
- ❌ 不推荐：纯文本大段内容（不利于阅读和样式渲染）
- ✅ 推荐：分段、分章节的 Markdown 格式

**solutions.json 必须包含：**
```json
{
  "solutions": [
    {
      "id": "solution-id",
      "name": "方案名称",
      "specifications": {  // 用于列表页
        "参数": "值"
      },
      "technicalSpecs": {  // 用于详情页（必须单独定义）
        "参数": "值"
      },
      "coreAdvantages": [  // 核心优势 - 必须是对象数组
        {
          "title": "优势标题",
          "description": "优势详细描述"
        }
      ],
      "bomList": [  // BOM清单（注意：不是 "bom"）
        {
          "partNumber": "型号",
          "description": "描述",
          "quantity": 1,
          "link": "/brand/products/xxx.html"
        }
      ],
      "faqs": [  // 每个方案4-6个FAQ
        {
          "question": "问题",
          "answer": "答案",
          "decisionGuide": "决策建议",
          "keywords": ["关键词"]
        }
      ]
    }
  ]
}
```

**重要说明：**
- `coreAdvantages` 必须是**对象数组**，每个对象包含 `title` 和 `description` 字段
- ❌ 错误格式：`"coreAdvantages": ["优势1", "优势2"]`（字符串数组）
- ✅ 正确格式：`"coreAdvantages": [{"title": "...", "description": "..."}]`（对象数组）

#### 常见字段名错误

| 错误字段名 | 正确字段名 | 影响 |
|-----------|-----------|------|
| `contentSections[].title` | `contentSections[].heading` | 内容区块标题不显示 |
| `bom` | `bomList` | BOM清单不显示 |
| `specifications` (单独使用) | `specifications` + `technicalSpecs` | 技术规格不显示 |

---

### 附录B：关键字段数据格式规范（新增品牌时必须遵守）

#### B.1 alternativeParts 格式（产品详情页）

**模板期望格式：** 对象数组，每个对象包含以下字段：

```json
{
  "alternativeParts": [
    {
      "partNumber": "替代型号",
      "link": "/brand/products/category/part.html",
      "reason": "替代原因说明",
      "brand": "品牌名"
    }
  ]
}
```

**错误格式示例：**
```json
// ❌ 错误：字符串数组
"alternativeParts": ["Part1", "Part2"]

// ❌ 错误：缺少必要字段
"alternativeParts": [{"partNumber": "Part1"}]
```

**正确格式示例：**
```json
// ✅ 正确：对象数组，包含完整字段
"alternativeParts": [
  {
    "partNumber": "2MBI150VH-120-50",
    "link": "/fuji/products/2mbi150vh-120-50.html",
    "reason": "Lower current rating for 15-30kW applications",
    "brand": "Fuji"
  },
  {
    "partNumber": "2MBI300VH-120-50",
    "link": "/fuji/products/2mbi300vh-120-50.html",
    "reason": "Higher current rating for 75-150kW applications",
    "brand": "Fuji"
  }
]
```

#### B.2 companionParts 格式（产品详情页）

**模板期望格式：** 对象数组，每个对象包含以下字段：

```json
{
  "companionParts": [
    {
      "partNumber": "配套型号或名称",
      "link": "/brand/products/category/part.html 或 #",
      "description": "配套部件描述",
      "category": "分类名称"
    }
  ]
}
```

**错误格式示例：**
```json
// ❌ 错误：字符串数组
"companionParts": ["Part1", "Part2", "Part3"]

// ❌ 错误：缺少必要字段
"companionParts": [{"partNumber": "Part1"}]
```

**正确格式示例：**
```json
// ✅ 正确：对象数组，包含完整字段
"companionParts": [
  {
    "partNumber": "Control Board",
    "link": "#",
    "description": "Control board with integrated gate drivers",
    "category": "Accessories"
  },
  {
    "partNumber": "2MBI200VH-120-50",
    "link": "/fuji/products/2mbi200vh-120-50.html",
    "description": "Parallel configuration for 400A applications",
    "category": "IGBT Modules"
  }
]
```

#### B.3 technicalSpecs 格式（解决方案详情页）

**模板期望格式：** 纯对象（键值对），不是数组

```json
{
  "technicalSpecs": {
    "Parameter Name 1": "Value 1",
    "Parameter Name 2": "Value 2",
    "Parameter Name 3": "Value 3"
  }
}
```

**错误格式示例：**
```json
// ❌ 错误：数组格式
"technicalSpecs": [
  {"label": "Input Voltage", "value": "380V AC"},
  {"label": "Output Power", "value": "0.75kW - 75kW"}
]

// ❌ 错误：嵌套对象
"technicalSpecs": {
  "electrical": {"voltage": "380V", "current": "100A"},
  "thermal": {"maxTemp": "150°C"}
}
```

**正确格式示例：**
```json
// ✅ 正确：纯键值对对象
"technicalSpecs": {
  "Input Voltage": "380V AC ±15%",
  "Output Power": "0.75kW - 75kW",
  "Switching Frequency": "2kHz - 15kHz",
  "Efficiency": "≥ 97%",
  "Protection Class": "IP20 / IP54",
  "Operating Temperature": "-10°C ~ +50°C"
}
```

#### B.4 字段格式检查清单

创建品牌时必须检查以下字段格式：

```
□ products.json 中每个产品的 alternativeParts 是对象数组
  - 每个对象有 partNumber, link, reason, brand 字段
  - 不是字符串数组

□ products.json 中每个产品的 companionParts 是对象数组
  - 每个对象有 partNumber, link, description, category 字段
  - 不是字符串数组

□ solutions.json 中每个方案的 technicalSpecs 是纯对象（键值对）
  - 不是数组 [{"label":..., "value":...}]
  - 不是嵌套对象 {"electrical": {...}, "thermal": {...}}
  - 格式：{"Param": "Value", "Param2": "Value2"}

□ solutions.json 中每个方案的 bomList 是对象数组
  - 每个对象有 designator, partNumber, description, quantity 字段
```

#### B.5 违反字段格式的后果

| 字段 | 错误格式 | 后果 |
|------|---------|------|
| `alternativeParts` | 字符串数组 | 产品详情页不显示替代料号 |
| `companionParts` | 字符串数组 | 产品详情页不显示推荐配套 |
| `technicalSpecs` | 数组格式 | 解决方案详情页不显示技术规格 |
| `bomList` | 对象格式错误 | 解决方案详情页BOM显示异常 |
| 缺少 `faqs` | 必须包含 `faqs` | FAQ部分不显示 |
| 缺少 `relatedArticles` | 必须包含 `relatedArticles` | 相关文章不显示 |
| 缺少 `coreAdvantages` | 必须包含 `coreAdvantages` | 核心优势不显示 |

#### 验证步骤

**步骤1**: 生成品牌前检查字段名
```bash
# 检查 support.json 字段
grep -n '"heading"\|"faqs"\|"relatedArticles"' data/[brand]/support.json

# 检查 solutions.json 字段
grep -n '"technicalSpecs"\|"bomList"\|"coreAdvantages"' data/[brand]/solutions.json
```

**步骤2**: 生成后验证页面内容
```bash
# 检查 support 详情页是否有 FAQ
grep -n "Frequently Asked Questions" output/[brand]/support/*.html

# 检查 solution 详情页是否有技术规格
grep -n "Technical Specifications" output/[brand]/solutions/*.html
```

---

### 7.0 关于页面链接映射（重要）

#### 问题背景
brand-about.html 模板中使用 `productFileMap` 将 `coreProducts.name` 映射到实际的分类页面文件名。如果映射不存在，链接会404。

#### 必须检查的映射位置

**文件**: `templates/brands/brand-about.html`

**映射代码块**:
```javascript
var productFileMap = {
  'IGBT Modules': 'igbt',
  'IGBT Module': 'igbt',
  'IGBTs': 'igbt',
  'IGBT': 'igbt',
  'MOSFETs': 'mosfet',
  'MOSFET': 'mosfet',
  'Power MOSFETs': 'power-mosfet',
  'Power MOSFET': 'power-mosfet',
  // ... 其他映射
};
```

#### 新增品牌时的必要步骤

**步骤1**: 确认 brand.json 中的 coreProducts.name
```json
{
  "coreProducts": [
    { "name": "Power MOSFETs", ... },
    { "name": "IGBTs", ... },
    { "name": "Protection Devices", ... }
  ]
}
```

**步骤2**: 检查 products.json 中的分类 id
```json
{
  "categories": [
    { "id": "power-mosfet", ... },
    { "id": "igbt", ... },
    { "id": "protection-devices", ... }
  ]
}
```

**步骤3**: 确保 brand-about.html 中有对应的映射
```javascript
'Power MOSFETs': 'power-mosfet',
'Power MOSFET': 'power-mosfet',
'IGBTs': 'igbt',
'IGBT': 'igbt',
'Protection Devices': 'protection-devices',
'Protection Device': 'protection-devices',
```

**步骤4**: 验证解决方案和支持文章使用实际数据
- Solutions 部分必须从 `solutions.json` 读取，不能硬编码
- Support 部分必须从 `support.json` 读取，不能硬编码

#### 映射命名规范

1. **单复数都要映射**: `'Product': 'product'` 和 `'Products': 'product'`
2. **使用小写和连字符**: `power-mosfet` 而不是 `powerMosfet`
3. **与 products.json 分类 id 一致**: 映射值必须等于分类的 `id` 字段

#### 验证命令

```bash
# 生成品牌后，检查链接是否正确
grep -n 'href="/' output/[brand]/index.html | grep -E '(products|solutions|support)'

# 确认文件存在
ls output/[brand]/products/
ls output/[brand]/solutions/
ls output/[brand]/support/
```

---

## 第7部分：故障排除

### 7.1 验证脚本报错

**问题**：`Missing required field: faeReview`

**解决**：
```bash
# 编辑 products.json，为产品添加 faeReview
"faeReview": {
  "author": "姓名",
  "title": "职位",
  "content": "点评内容",
  "highlight": "核心观点"
}
```

### 7.2 构建失败

**问题**：`JSON parse error`

**解决**：
```bash
# 检查 JSON 格式
# 使用在线 JSON 验证工具
# 常见错误：缺少逗号、引号不匹配、多余逗号
```

### 7.3 页面404

**问题**：产品详情页404

**解决**：
```bash
# 检查文件是否生成
ls output/brand/products/

# 检查链接路径是否正确
# 正确格式：/brand/products/category/part.html
```

### 7.4 替代料号参数不满足

**问题**：验证提示替代料号电压低于被替代型号

**解决**：
```bash
# 重新选择替代料号
# 确保：
# - 电压 ≥ 被替代型号
# - 电流 ≥ 被替代型号
# - 参数尽量接近
```

---

## 📚 统一工具使用指南

### 工具1: brand-data-generator.js（数据模板生成器）

**功能**：一键生成完整品牌数据模板（包含FAQ模板）

**使用方法**：
```bash
# 生成完整模板
node scripts/brand-data-generator.js [brand-name]

# 只查看FAQ模板示例
node scripts/brand-data-generator.js [brand-name] --faq-only
```

**生成内容**：
- `brand.json` - 品牌信息（含3个FAQ）
- `products.json` - 产品数据（含4个分类，每类2个产品，每个产品有5-6个FAQ）
- `solutions.json` - 解决方案（含2个方案，每个方案有3个FAQ）
- `support.json` - 技术支持（含4篇文章，每篇有3个FAQ）
- `news.json` - 新闻（可选）

**模板特点**：
- 所有占位符已标注，直接替换即可
- FAQ模板已预置，包含 question/answer/decisionGuide/keywords
- SEO关键词已包含 "distributor" 和 "选型"
- 所有必需字段已预设

### 工具2: brand-master-checklist.js（统一检查清单）

**功能**：合并了原 `brand-creation-checklist.js` + `faq-validator.js`

**使用方法**：
```bash
# 完整检查（数据+FAQ）
node scripts/brand-master-checklist.js [brand-name]

# 只检查FAQ
node scripts/brand-master-checklist.js [brand-name] --faq-only

# 严格模式（警告视为错误）
node scripts/brand-master-checklist.js [brand-name] --strict

# 快速检查（只检查关键项）
node scripts/brand-master-checklist.js [brand-name] --quick
```

**检查内容**：
1. 文件完整性（5个必需文件）
2. brand.json 字段完整性
3. products.json 字段完整性
4. 产品分类检查（每类≥2产品，含FAQ）
5. 产品详情检查（alternativeParts/companionParts/faeReview/FAQ）
6. solutions.json 检查（customerCases/faeInsights/FAQ）
7. support.json 检查（author/publishDate/faeInsights/FAQ）
8. FAQ三级检查（文件级/分类级/产品级）
9. SEO关键词检查（distributor/选型）

**输出示例**：
```
============================================================
🔍 统一品牌数据检查清单: macmic
============================================================

📁 文件完整性检查
  ✅ brand.json
  ✅ products.json
  ✅ solutions.json
  ✅ support.json

📋 products.json FAQ检查:
  ✅ 根级别FAQ: 3个
  ✅ 分类级别FAQ: 12个
  ✅ 产品级别FAQ: 24个

📊 检查结果总结
总检查项: 156
总FAQ数: 48
✅ 通过: 156
❌ 失败: 0
⚠️  警告: 0

🎉 恭喜！所有检查项通过，可以生成网站！
```

### 新旧工具对照表

| 新工具 | 功能 | 替代的旧工具 |
|--------|------|-------------|
| `brand-data-generator.js` | 生成完整数据模板（含FAQ） | 原 `faq-template-generator.js` + 手动复制模板 |
| `brand-master-checklist.js` | 统一检查清单（数据+FAQ） | 原 `brand-creation-checklist.js` + `faq-validator.js` |

### 推荐工作流程

```
步骤1: 生成模板
    node scripts/brand-data-generator.js newbrand
    
步骤2: 编辑数据
    编辑 data/newbrand/*.json
    
步骤3: 验证数据
    node scripts/brand-master-checklist.js newbrand
    
步骤4: 修复问题
    根据检查报告修复错误
    
步骤5: 再次验证
    node scripts/brand-master-checklist.js newbrand --strict
    
步骤6: 生成网站
    npm run build
```

---

## 📚 参考示例

### 完整品牌数据示例

- `data/crrc/` - CRRC 完整数据（轨道交通）
- `data/semikron/` - Semikron 完整数据（功率模块）
- `data/infineon/` - Infineon 完整数据（汽车/工业）
- `data/macmic/` - Macmic 完整数据（最新示例）

### 差异化模板

- `templates/brand-data-template/infineon/` - Infineon 专用模板
- `templates/brand-data-template/crrc/` - CRRC 专用模板
- `templates/brand-data-template/semikron/` - Semikron 专用模板

---

**文档版本**: 4.8  
**最后更新**: 2026-04-05

### 版本历史

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| 4.8 | 2026-04-05 | **更新字段格式规范**：明确 `solutions.json` 中 `coreAdvantages` 必须是对象数组（含 `title` 和 `description`），`support.json` 中 `content` 支持 Markdown 格式字符串数组 |
| 4.7 | 2026-04-03 | **新增语言铁律（铁律26-26d）**：所有内容必须是纯英文，禁止任何中文。新增纯英文网站检查清单和禁止行为 |
| 4.6 | 2026-04-02 | 新增模板字段映射要求（第7部分）：详细说明模板期望的字段名与JSON数据字段的映射关系，避免页面内容不显示问题 |
| 4.5 | 2026-04-02 | 新增模板映射规范（第7部分）：详细说明 brand-about.html 中 productFileMap 的使用，避免about页面链接404问题 |
| 4.4 | 2026-04-02 | 完全按照faq.md要求更新所有内容：包括8个页面类型的完整FAQ要求（数量、内容重点、答案长度、decisionGuide、示例问题）和通用FAQ内容要求（JSON格式、4段式Answer结构、质量要求） |
| 4.3 | 2026-04-02 | 完全按照faq.md要求更新FAQ规范：明确8个页面类型的FAQ数量要求（about-brand/products-list/product-category/product-detail/solutions-list/solution-detail/support-list/support-detail） |
| 4.2 | 2026-04-02 | 更新产品型号详情页FAQ要求：从≥3个改为5-6个，增强产品页面的SEO价值和用户决策支持 |
| 4.1 | 2026-04-02 | 新增品牌创建完整指南，包含FAQ铁律、质量铁律、检查清单 |
| 4.0 | 2026-04-01 | 整合所有品牌数据要求文档 |
| 1.0 | 2026-04-01 | 初始版本 |  
**维护者**: LiTong Electronics Technical Team

### 版本历史（续）

| 版本 | 日期 | 更新内容 |
|------|------|---------|
| 4.1 | 2026-04-02 | 强化模板要求：详细分类描述、FAE点评主观色彩、替代料号参数对比、决策框架 |
| 4.0 | 2026-04-02 | 合并工具：FAQ模板生成器+数据模板生成器，FAQ检查清单+品牌数据检查清单 |
| 3.0 | 2026-04-02 | 增加15条铁律，强化数据完整性要求 |
| 2.0 | 2026-04-02 | 整合所有文档，统一规范 |
| 1.0 | 2026-04-01 | 初始版本 |

---

## 💡 使用建议

1. **首次新增品牌**：完整阅读本文档
2. **日常参考**：使用第5部分检查清单
3. **AI辅助**：使用第6部分提示词模板
4. **问题排查**：参考第7部分故障排除

本文档是新增品牌的唯一权威参考，所有其他文档内容已整合至此。
