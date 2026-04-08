# 新增品牌完整流程指南

本文档详细说明如何为网站新增一个品牌，从创建模板到生成网站的完整步骤。

## 📋 流程概览

```
步骤1: 创建品牌目录
    ↓
步骤2: 制作品牌专用模板（基于品牌类型选择差异化模板）
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

---

## 步骤 1: 创建品牌目录

### 1.1 确定品牌标识

首先确定品牌的基本信息：
- **品牌名称**（英文，小写，用于URL）: 如 `onsemi`、`stmicro`
- **品牌显示名**: 如 `onsemi`、`STMicroelectronics`
- **品牌类型**: 功率半导体 / 轨道交通 / MCU / 传感器 / 综合

### 1.2 创建目录结构

```bash
# 创建品牌主目录
mkdir data/[brand-name]

# 示例
mkdir data/onsemi
```

---

## 步骤 2: 制作品牌专用模板

### 2.1 选择差异化模板基型

根据品牌定位选择对应的模板基型：

| 品牌类型 | 推荐模板基型 | 适用品牌举例 |
|----------|--------------|--------------|
| **功率半导体（汽车/工业）** | Infineon 模板 | onsemi、Rohm、Mitsubishi |
| **功率半导体（工业驱动）** | Semikron 模板 | Fuji Electric、Danfoss |
| **轨道交通** | CRRC 模板 | 其他铁路设备品牌 |
| **MCU/处理器** | Infineon MCU 模板 | NXP、Renesas、TI |
| **综合半导体** | 混合模板 | 根据主要产品选择 |

### 2.2 复制并创建品牌专用模板

```bash
# 示例：为 onsemi（功率半导体）创建模板
# 基于 Infineon IGBT 模板

cp templates/brand-data-template/infineon/products-igbt.json \
   data/onsemi/products-igbt-template.json

# 如果有 MCU 产品，同时复制 MCU 模板
cp templates/brand-data-template/infineon/products-mcu.json \
   data/onsemi/products-mcu-template.json
```

### 2.3 自定义品牌专用模板

编辑复制的模板文件，进行以下自定义：

#### A. 更新品牌标识
```json
{
  "_brand": "onsemi",
  "_productType": "IGBT Modules",
  "_applicationFocus": ["Automotive", "Industrial", "Renewable Energy"],
  "_faeExpertise": "Power Electronics, Automotive Applications, Wide Bandgap"
}
```

#### B. 更新分类描述
```json
{
  "category": {
    "id": "igbt-modules",
    "name": "IGBT Modules",
    "description": "onsemi IGBT modules deliver high-efficiency power conversion for automotive and industrial applications...",
    "longDescription": "onsemi's IGBT portfolio includes..."
  }
}
```

#### C. 更新选型指南
```json
{
  "selectionGuide": {
    "title": "How to Select the Right onsemi IGBT Module",
    "articleId": "how-to-select-onsemi-igbt",
    "articleLink": "/onsemi/support/how-to-select-onsemi-igbt.html"
  }
}
```

#### D. 更新配套料号
根据 onsemi 实际产品线更新 companionParts：
```json
{
  "companionParts": [
    {
      "partNumber": "NCP51530",
      "category": "Gate Driver",
      "description": "onsemi high-side/low-side gate driver",
      "link": "/onsemi/products/gate-drivers/ncp51530.html"
    }
  ]
}
```

### 2.4 创建其他必要文件

```bash
# 创建 brand.json 模板
cp templates/brand-data-template/generic/brand.json \
   data/onsemi/brand-template.json

# 创建 solutions.json 模板
cp templates/brand-data-template/generic/solutions.json \
   data/onsemi/solutions-template.json

# 创建 support.json 模板
cp templates/brand-data-template/generic/support.json \
   data/onsemi/support-template.json

# 创建 news.json（可选）
echo '{"articles": []}' > data/onsemi/news-template.json
```

---

## 步骤 3: 填写品牌数据

### 3.1 填写 brand.json

```bash
# 复制模板为正式文件
cp data/onsemi/brand-template.json data/onsemi/brand.json

# 编辑 brand.json，填写品牌基本信息
```

**必填字段：**
- `name` - 品牌名称（小写）
- `displayName` - 品牌显示名
- `description` - 品牌简介
- `longDescription` - 品牌详细介绍
- `coreProducts` - 核心产品列表
- `industries` - 服务行业

### 3.2 填写 products.json

```bash
# 基于模板创建正式文件
cp data/onsemi/products-igbt-template.json data/onsemi/products.json

# 编辑 products.json
```

**填写内容：**

#### A. 替换所有占位符
```json
{
  "partNumber": "NGTB40N120FL2WG",  // 替换 [型号]
  "voltage": "1200V",                // 替换 [电压]
  "current": "40A",                  // 替换 [电流]
  "package": "TO-247"                // 替换 [封装]
}
```

#### B. 编写产品描述
```json
{
  "shortDescription": "onsemi NGTB40N120FL2WG 1200V 40A IGBT with TO-247 package. Low Vce(sat), ideal for induction heating and motor drives.",
  "descriptionParagraphs": [
    "The onsemi NGTB40N120FL2WG is a high-performance 1200V 40A IGBT featuring field-stop technology...",
    "With low conduction losses and fast switching characteristics...",
    "The TO-247 package provides excellent thermal performance..."
  ]
}
```

#### C. 编写 FAE 点评
```json
{
  "faeReview": {
    "author": "[FAE姓名]",
    "title": "Senior FAE - Power Electronics",
    "content": "In my [X] years supporting induction heating applications, the NGTB40N120FL2WG has proven to be a cost-effective solution...",
    "highlight": "Cost-effective IGBT for induction heating with excellent reliability"
  }
}
```

#### E. 填写替代料号

**⚠️ 重要：替代料号必须满足电气参数要求**

根据 `docs/ALTERNATIVE_PARTS_GUIDELINES.md` 规范：
- **电压/电流必须 ≥ 被替代型号**
- **参数应尽量接近**（避免过大差异）
- **必须提供详细参数对比**

```json
{
  "alternativeParts": [
    {
      "partNumber": "NGTB50N120FL2WG",
      "brand": "onsemi",
      "specifications": {
        "voltage": "1200V",
        "current": "50A",
        "vceSat": "1.70V (typ)",
        "package": "TO-247"
      },
      "comparison": {
        "voltage": "1200V = 1200V (相同)",
        "current": "50A > 40A (+25%)",
        "vceSat": "1.70V ≈ 1.75V (接近，略优)",
        "package": "TO-247 = TO-247 (相同)",
        "compatibility": "Pin-compatible, direct replacement"
      },
      "reason": "Higher current rating (50A vs 40A) for applications requiring 25% more power handling with same package and thermal performance",
      "useCase": "适用于需要更高电流能力的感应加热应用，如从10kW升级到12kW的系统",
      "link": "/onsemi/products/igbt-modules/ngtb50n120fl2wg.html"
    }
  ]
}
```

**替代料号选型检查清单：**
- [ ] 电压 ≥ 被替代型号
- [ ] 电流 ≥ 被替代型号
- [ ] 导通损耗 ≤ 或接近被替代型号
- [ ] 封装相同或兼容
- [ ] 提供详细参数对比
- [ ] 说明替代原因和适用场景

#### E. 填写配套料号
```json
{
  "companionParts": [
    {
      "partNumber": "NCP51530",
      "category": "Gate Driver",
      "description": "High-side/low-side gate driver for IGBT control",
      "link": "/onsemi/products/gate-drivers/ncp51530.html"
    }
  ]
}
```

### 3.3 填写 solutions.json

```bash
cp data/onsemi/solutions-template.json data/onsemi/solutions.json
```

**每个解决方案需包含：**
- 基本信息（id, name, description）
- `customerCases` - 至少1个客户案例
- `faeInsights` - FAE 见解（包含 author, insight, logic, keyTakeaways 等）

### 3.4 填写 support.json

```bash
cp data/onsemi/support-template.json data/onsemi/support.json
```

**每篇文章需包含：**
- 基本信息（id, title, category, content）
- `author` - 完整作者信息
- `publishDate` - 发布日期
- `relatedArticles` - 至少3个相关文章
- `faeInsights` - FAE 见解
- `customerCases` - 至少1个客户案例

---

## 步骤 4: 验证数据完整性

### 4.1 运行验证脚本

```bash
node scripts/validate-brand-data-v2.js onsemi
```

### 4.2 查看验证报告

验证脚本会输出：
- ✅ 通过的检查项
- ❌ 失败的检查项
- 📄 详细报告保存位置

**常见错误：**
- 缺少必填字段
- 数组元素数量不足
- 字符串长度不符合要求
- 链接格式错误

---

## 步骤 5: 修复验证错误

### 5.1 根据报告修复错误

```bash
# 查看详细报告
cat validation-report.json
```

### 5.2 常见修复示例

**错误：缺少 faeReview**
```bash
# 编辑 products.json，为产品添加 faeReview
```

**错误：alternativeParts 数量不足**
```bash
# 添加更多替代料号
```

**错误：shortDescription 过长**
```bash
# 缩短描述至 80-120 字符
```

### 5.3 重新验证

修复后再次运行验证：
```bash
node scripts/validate-brand-data-v2.js onsemi
```

直到所有检查项通过 ✅

---

## 步骤 6: 生成网站

### 6.1 运行构建命令

```bash
npm run build
```

### 6.2 检查构建输出

构建完成后，检查 output 目录：
```bash
ls output/onsemi/
# 应包含：index.html, products/, solutions/, support/
```

---

## 步骤 7: 验证网站页面

### 7.1 启动本地服务器

```bash
cd output && npx http-server -p 8080
```

### 7.2 访问验证

在浏览器中访问以下页面，确保正常显示：

- **品牌首页**: http://localhost:8080/onsemi/
- **产品列表页**: http://localhost:8080/onsemi/products/
- **产品分类页**: http://localhost:8080/onsemi/products/igbt.html
- **产品详情页**: http://localhost:8080/onsemi/products/[具体型号].html
- **解决方案页**: http://localhost:8080/onsemi/solutions/
- **技术支持页**: http://localhost:8080/onsemi/support/

### 7.3 检查内容完整性

- [ ] 品牌信息正确显示
- [ ] 产品列表完整
- [ ] FAE 点评显示正常
- [ ] 替代料号/配套料号显示正常
- [ ] 选型指南链接可点击
- [ ] 客户案例显示正常

---

## 📝 快速参考：完整命令清单

```bash
# 1. 创建目录
mkdir data/onsemi

# 2. 制作品牌专用模板
cp templates/brand-data-template/infineon/products-igbt.json \
   data/onsemi/products-template.json
# 编辑模板，自定义品牌内容

# 3. 填写数据
cp data/onsemi/products-template.json data/onsemi/products.json
# 编辑 products.json，替换所有占位符

# 创建其他文件
cp templates/brand-data-template/generic/brand.json data/onsemi/brand.json
cp templates/brand-data-template/generic/solutions.json data/onsemi/solutions.json
cp templates/brand-data-template/generic/support.json data/onsemi/support.json

# 4. 验证数据
node scripts/validate-brand-data-v2.js onsemi

# 5. 修复错误（根据验证报告）
# 编辑相应文件修复错误

# 6. 生成网站
npm run build

# 7. 验证页面
cd output && npx http-server -p 8080
# 浏览器访问 http://localhost:8080/onsemi/
```

---

## ✅ 新增品牌检查清单

### 数据文件检查
- [ ] brand.json - 品牌基本信息完整
- [ ] products.json - 所有产品数据完整
  - [ ] 每个产品有 shortDescription
  - [ ] 每个产品有 descriptionParagraphs
  - [ ] 每个产品有 faeReview
  - [ ] 每个产品有 alternativeParts（≥2）
    - [ ] 替代型号电压 ≥ 被替代型号
    - [ ] 替代型号电流 ≥ 被替代型号
    - [ ] 提供完整 specifications 参数
    - [ ] 提供详细 comparison 对比
    - [ ] 说明 reason 和 useCase
  - [ ] 每个产品有 companionParts（≥3）
  - [ ] 每个分类有 selectionGuide
- [ ] solutions.json - 解决方案数据完整
  - [ ] 每个方案有 customerCases
  - [ ] 每个方案有 faeInsights
- [ ] support.json - 支持文章完整
  - [ ] 每篇文章有 author
  - [ ] 每篇文章有 publishDate
  - [ ] 每篇文章有 relatedArticles（≥3）
  - [ ] 每篇文章有 faeInsights
  - [ ] 每篇文章有 customerCases

### 品牌差异化检查
- [ ] 内容体现品牌技术特点
- [ ] FAE 点评符合品牌专业方向
- [ ] 配套料号符合品牌生态系统
- [ ] 选型指南体现品牌优势

### 网站生成检查
- [ ] 构建无错误
- [ ] 所有页面可访问
- [ ] 内容显示正常
- [ ] 链接可点击

---

## 💡 最佳实践

1. **先规划后实施**
   - 明确品牌定位和产品类型
   - 选择合适的模板基型
   - 准备产品技术资料

2. **分阶段实施**
   - 先完成 brand.json
   - 再完成一个产品的完整数据
   - 复制修改完成其他产品
   - 最后完成 solutions 和 support

3. **保持品牌一致性**
   - 所有内容符合品牌形象
   - 使用统一的技术术语
   - 保持 FAE 点评风格一致

4. **验证驱动开发**
   - 频繁运行验证脚本
   - 及时修复错误
   - 避免最后集中修复

5. **参考现有品牌**
   - 学习 CRRC、Semikron、Infineon 的完整数据
   - 借鉴其内容结构和表达方式
   - 保持数据格式一致

---

## 📚 相关文档

- `NEW_BRAND_DATA_REQUIREMENTS.md` - 详细数据要求规范
- `ALTERNATIVE_PARTS_GUIDELINES.md` - 替代料号选型规范（⚠️ 重要）
- `templates/brand-data-template/README.md` - 差异化模板使用指南
- `scripts/validate-brand-data-v2.js` - 数据验证脚本
- `data/crrc/` - CRRC 完整数据示例
- `data/semikron/` - Semikron 完整数据示例
- `data/infineon/` - Infineon 完整数据示例

---

## 🆘 故障排除

### 问题：验证脚本报错
**解决**: 根据错误信息，检查对应字段是否缺失或格式错误

### 问题：构建失败
**解决**: 检查 JSON 格式是否正确（使用 JSON 验证工具）

### 问题：页面404
**解决**: 检查文件是否在 output 目录生成，链接路径是否正确

### 问题：内容显示异常
**解决**: 检查模板语法是否正确，数据字段是否完整

---

**文档版本**: 1.0  
**最后更新**: 2026-04-02  
**维护者**: LiTong Electronics Technical Team
