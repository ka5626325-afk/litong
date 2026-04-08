# 新增品牌数据工作流程

本文档说明如何确保新增品牌的 JSON 数据完全符合 NEW_BRAND_DATA_REQUIREMENTS.md 规范。

## 工作流程图

```
┌─────────────────┐
│  1. 准备数据     │
│  (按规范编写)    │
└────────┬────────┘
         ▼
┌─────────────────┐
│  2. 运行验证     │
│  npm run        │
│  validate:brand │
│  [brand-name]   │
└────────┬────────┘
         ▼
    ┌─────────┐
    │ 有错误?  │
    └────┬────┘
   是 /      \ 否
     /        \
    ▼          ▼
┌─────────┐  ┌─────────┐
│ 3. 修复  │  │ 4. 生成  │
│ 数据问题 │  │ 品牌页面 │
│ (参考    │  │ npm run  │
│ 修复指南)│  │ generate:│
│          │  │ brand    │
└────┬────┘  └─────────┘
     │
     └──────────────┐
                    ▼
            ┌─────────────┐
            │ 5. 再次验证  │
            │ 确认无错误   │
            └─────────────┘
```

## 详细步骤

### 步骤 1: 准备数据

按照 NEW_BRAND_DATA_REQUIREMENTS.md 规范准备 JSON 数据文件：

```
data/
└── [brand-name]/
    ├── brand.json      # 品牌信息 + about-brand FAQ
    ├── products.json   # 产品数据 + 多级 FAQ
    ├── solutions.json  # 解决方案 + 客户案例 + FAE见解
    ├── support.json    # 技术支持 + FAE见解 + 客户案例
    └── news.json       # 新闻数据
```

**关键规范要点**：
- 所有 FAQ 必须包含 `question`, `answer`, `decisionGuide`, `keywords`
- 产品必须有 `shortDescription`, `descriptionParagraphs`, `faeReview`, `alternativeParts`, `companionParts`
- 解决方案必须有 `customerCases`, `faeInsights`
- 技术支持文章必须有 `author`, `faeInsights`, `customerCases`
- 产品参数必须是简单类型（字符串、数字），不能是对象

### 步骤 2: 运行验证工具

```bash
# 验证指定品牌
npm run validate:brand [brand-name]

# 示例
npm run validate:brand semikron
npm run validate:brand infineon
```

### 步骤 3: 修复数据问题

如果验证工具报告错误，参考 [BRAND_DATA_FIX_GUIDE.md](./BRAND_DATA_FIX_GUIDE.md) 进行修复。

**常见错误类型**：
1. 缺少必填字段（shortDescription, descriptionParagraphs, faeReview 等）
2. 产品包含对象类型字段（technicalSpecs, orderingInfo）
3. FAQ 数量不足
4. 缺少 customerCases 或 faeInsights
5. 技术支持文章缺少 author 信息

### 步骤 4: 生成品牌页面

验证通过后，生成品牌页面：

```bash
npm run generate:brand [brand-name]
```

### 步骤 5: 再次验证

生成页面后，建议再次运行验证工具确认数据完整性。

---

## 验证工具命令

```bash
# 验证指定品牌
npm run validate:brand semikron

# 验证所有品牌
npm run validate:all

# 生成指定品牌页面
npm run generate:brand semikron

# 生成所有品牌页面
npm run generate:all
```

---

## 验证输出说明

### 错误（❌ 红色）
- 必须修复的问题
- 会导致页面生成失败或数据不完整
- 示例：缺少必填字段、FAQ 格式错误

### 警告（⚠️ 黄色）
- 建议优化的问题
- 不会阻止页面生成，但可能影响 SEO 或用户体验
- 示例：FAQ 数量不足、描述过短

### 通过（✅ 绿色）
- 数据完全符合规范
- 可以安全生成页面

---

## 数据质量检查清单

在运行验证工具前，先自检以下项目：

### 基础检查
- [ ] JSON 语法正确（可使用 VS Code 或在线工具验证）
- [ ] 所有必填字段已填写
- [ ] 图片路径正确（logo, datasheet 等）
- [ ] 链接格式正确（产品链接、文章链接）

### 内容检查
- [ ] 品牌描述原创，未复制其他品牌
- [ ] 产品描述差异化，不同型号有不同描述
- [ ] FAQ 内容专业、有深度
- [ ] FAE 点评基于实际项目经验
- [ ] 客户案例真实可信

### SEO 检查
- [ ] 每个页面都有 SEO 标题和描述
- [ ] 关键词自然融入内容
- [ ] URL 结构规范（小写、连字符分隔）

---

## 最佳实践

### 1. 先创建一个完整示例

不要一次性创建所有数据。先创建一个完整的产品或解决方案作为模板，验证通过后再批量创建其他数据。

### 2. 使用版本控制

在修改 JSON 数据前，先提交当前版本到 Git，方便回滚：

```bash
git add data/[brand-name]/
git commit -m "feat: add initial brand data for [brand-name]"
```

### 3. 分阶段验证

不要等所有数据都写完再验证。可以分阶段验证：
1. 先验证 brand.json
2. 再验证 products.json（先一个分类）
3. 然后验证 solutions.json
4. 最后验证 support.json

### 4. 参考已有品牌

参考已完成的品牌数据（如 semikron, infineon）作为示例，但不要直接复制。

---

## 故障排除

### 验证工具报错 "文件不存在"

检查文件路径是否正确：
```bash
ls data/[brand-name]/
# 应该显示: brand.json, products.json, solutions.json, support.json, news.json
```

### JSON 解析错误

使用 JSON 验证工具检查语法：
- VS Code: 打开 JSON 文件，查看错误提示
- 在线工具: https://jsonlint.com/

### 验证通过但页面显示异常

检查模板文件是否正确：
- 模板路径: `templates/brands/`
- 确保模板使用动态变量（如 `<%= brand.name %>`）而非硬编码

---

## 相关文档

- [NEW_BRAND_DATA_REQUIREMENTS.md](../NEW_BRAND_DATA_REQUIREMENTS.md) - 完整数据规范
- [BRAND_DATA_FIX_GUIDE.md](./BRAND_DATA_FIX_GUIDE.md) - 数据修复指南

---

**文档版本**: 1.0  
**最后更新**: 2026年4月1日
