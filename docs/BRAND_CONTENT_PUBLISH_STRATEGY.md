# 品牌内容分批发布策略

本文档定义新增品牌的内容发布策略，支持首次完整发布和后续分批更新。

---

## 📋 发布策略概览

### 两种发布模式

| 模式 | 触发条件 | 发布内容 | 目标 |
|------|----------|----------|------|
| **首次发布** | 新品牌创建 | 列表页 + 分类页 + 每类2篇详情页 | 快速上线，展示品牌能力 |
| **后续更新** | 定期/按需 | 每类新增2篇详情页 + 更新列表/分类页 | 持续丰富内容，保持活跃 |

---

## 第一部分：首次发布策略

### 1.1 内容规划

**必须发布的内容（MVP）：**

```
data/[brand]/
├── brand.json              # 品牌信息（完整）
├── products.json           # 产品数据（精简版）
│   └── categories[]        # 所有分类
│       └── products[]      # 每类2个产品
├── solutions.json          # 解决方案（精简版）
│   └── solutions[]         # 1-2个方案
├── support.json            # 技术支持（精简版）
│   └── articles[]          # 每类2篇文章
└── news.json               # 新闻（可选）
```

### 1.2 数据量标准

| 内容类型 | 首次发布数量 | 说明 |
|----------|--------------|------|
| **产品分类** | 全部 | 展示完整产品线 |
| **产品详情** | 每类2个 | 核心产品优先 |
| **解决方案** | 1-2个 | 典型应用场景 |
| **技术文章** | 每类2篇 | 核心主题优先 |
| **新闻** | 0-2篇 | 可选 |

### 1.3 首次发布检查清单

#### 基础架构
- [ ] brand.json - 品牌信息完整
- [ ] 产品列表页可访问
- [ ] 所有分类页可访问
- [ ] 每类2个产品详情页可访问
- [ ] 解决方案列表页可访问
- [ ] 1-2个方案详情页可访问
- [ ] 技术支持列表页可访问
- [ ] 每类2篇文章可访问

#### 页面关联
- [ ] 列表页链接到分类页
- [ ] 分类页链接到详情页
- [ ] 详情页有面包屑导航
- [ ] 详情页有相关推荐

#### SEO基础
- [ ] 所有页面有title和description
- [ ] URL结构正确
- [ ] 站点地图包含所有页面

---

## 第二部分：后续更新策略

### 2.1 更新周期

| 更新类型 | 频率 | 内容 |
|----------|------|------|
| **常规更新** | 每周 | 每类新增2篇详情页 |
| **月度更新** | 每月 | 新增分类或解决方案 |
| **季度更新** | 每季度 | 重大内容更新或重构 |

### 2.2 分批更新流程

```
更新流程：

1. 准备新内容
   ├── 选择更新类别
   ├── 准备2篇详情页数据
   └── 验证数据完整性

2. 更新数据文件
   ├── 添加到 products.json / support.json
   ├── 更新列表页统计信息
   └── 更新分类页相关内容

3. 更新页面窗口
   ├── 列表页：显示最新/最热内容
   ├── 分类页：更新产品/文章列表
   └── 详情页：更新相关推荐

4. 验证和发布
   ├── 运行验证脚本
   ├── 本地测试
   └── 生成并部署
```

### 2.3 列表页窗口更新规则

#### 产品列表页窗口

```json
{
  "productListWindow": {
    "featured": {
      "count": 4,
      "selection": "每类选1个，轮播展示",
      "updateTrigger": "新增产品时"
    },
    "newArrivals": {
      "count": 6,
      "selection": "最新添加的产品",
      "updateTrigger": "每次更新时"
    },
    "popular": {
      "count": 6,
      "selection": "按浏览量/询盘量排序",
      "updateTrigger": "每周更新"
    },
    "byCategory": {
      "display": "每类显示2个",
      "updateTrigger": "该类产品更新时"
    }
  }
}
```

#### 分类页窗口

```json
{
  "categoryPageWindow": {
    "products": {
      "display": "全部产品",
      "sort": "默认按型号排序",
      "pagination": "每页10个"
    },
    "featuredProduct": {
      "count": 1,
      "selection": "该分类最新添加",
      "updateTrigger": "该分类新增产品时"
    },
    "relatedArticles": {
      "count": 3,
      "selection": "与该分类相关的技术文章",
      "updateTrigger": "文章更新时"
    }
  }
}
```

#### 技术支持列表页窗口

```json
{
  "supportListWindow": {
    "featured": {
      "count": 3,
      "selection": "每类选1篇最新",
      "updateTrigger": "新增文章时"
    },
    "latest": {
      "count": 6,
      "selection": "最新发布的文章",
      "updateTrigger": "每次更新时"
    },
    "byCategory": {
      "display": "每类显示2篇",
      "updateTrigger": "该类文章更新时"
    }
  }
}
```

### 2.4 更新数据格式

#### 标记内容状态

```json
{
  "products": [
    {
      "partNumber": "XXX",
      "status": "published",
      "publishDate": "2026-04-02",
      "updateRound": 1,
      "featured": true
    }
  ]
}
```

#### 更新日志

```json
{
  "updateLog": [
    {
      "date": "2026-04-02",
      "round": 1,
      "type": "initial",
      "productsAdded": 4,
      "articlesAdded": 6,
      "categoriesUpdated": ["igbt", "mcu"]
    },
    {
      "date": "2026-04-09",
      "round": 2,
      "type": "regular",
      "productsAdded": 4,
      "articlesAdded": 4,
      "categoriesUpdated": ["igbt", "mosfet"]
    }
  ]
}
```

---

## 第三部分：实施指南

### 3.1 首次发布实施步骤

#### 步骤1：准备MVP数据

```bash
# 创建品牌目录
mkdir data/new-brand

# 准备精简版数据文件
# - brand.json: 完整
# - products.json: 所有分类，每类2个产品
# - solutions.json: 1-2个方案
# - support.json: 每类2篇文章
```

#### 步骤2：标记内容状态

```json
// 在数据文件中添加状态标记
{
  "partNumber": "XXX",
  "status": "published",
  "publishRound": 1,
  "publishDate": "2026-04-02"
}
```

#### 步骤3：生成并验证

```bash
# 验证数据
node scripts/validate-brand-data-v2.js new-brand

# 生成网站
npm run build

# 验证页面
# - 检查所有列表页
# - 检查所有分类页
# - 检查每类2个详情页
```

#### 步骤4：部署上线

```bash
# 部署到生产环境
# 提交站点地图到搜索引擎
```

### 3.2 后续更新实施步骤

#### 步骤1：准备新内容

```bash
# 选择本次更新的类别
# 准备2篇详情页数据
# 验证数据完整性
```

#### 步骤2：更新数据文件

```bash
# 添加到现有数据文件
# - products.json: 新增2个产品
# - support.json: 新增2篇文章

# 更新状态标记
{
  "partNumber": "XXX",
  "status": "published",
  "publishRound": 2,
  "publishDate": "2026-04-09"
}
```

#### 步骤3：更新页面窗口

```bash
# 更新列表页窗口内容
# - 最新添加区域
# - 热门推荐区域
# - 分类展示区域

# 更新分类页窗口
# - 最新产品推荐
# - 相关产品文章
```

#### 步骤4：验证和发布

```bash
# 验证数据
node scripts/validate-brand-data-v2.js new-brand

# 生成网站
npm run build

# 验证新增页面可访问
# 验证列表页窗口更新

# 部署
```

---

## 第四部分：提示词模板

### 4.1 首次发布提示词

```
请为 [品牌名] 创建首次发布的完整品牌数据（MVP版本）：

## 发布要求
- 产品分类：全部创建，每类发布2个核心产品
- 解决方案：发布1-2个典型方案
- 技术支持：每类发布2篇核心文章

## 数据规范
严格按照 docs/BRAND_DATA_COMPLETE_GUIDE.md 规范

## 输出文件
1. brand.json - 完整品牌信息
2. products.json - 所有分类，每类2个产品
3. solutions.json - 1-2个方案
4. support.json - 每类2篇文章

## 质量要求
- 所有内容原创
- 替代料号电气参数≥被替代型号
- FAE点评有专业见解
- 自然地融入SEO关键词

请生成以上4个文件的完整JSON数据。
```

### 4.2 后续更新提示词

```
请为 [品牌名] 创建第 [N] 轮更新内容：

## 更新范围
- 更新类别：[具体类别，如 IGBT模块]
- 新增产品：2个
- 新增文章：2篇（对应类别）

## 更新要求
1. 保持与已有内容的风格一致
2. 产品参数与已有产品形成系列
3. 文章主题与已有文章互补
4. 自然地融入SEO关键词

## 输出格式
只输出新增内容，格式如下：

=== 新增产品 ===
[2个产品的JSON数据]

=== 新增文章 ===
[2篇文章的JSON数据]

## 注意事项
- 不要重复已有内容
- 替代料号要参考已有产品
- 配套料号要与品牌生态系统一致
```

---

## 第五部分：自动化脚本

### 5.1 批量发布脚本

```javascript
// scripts/publish-brand-content.js
// 用于批量发布品牌内容

const fs = require('fs');
const path = require('path');

function publishContent(brandName, options) {
  const {
    type,           // 'initial' | 'update'
    categories,     // ['igbt', 'mcu']
    productsPerCategory,  // 2
    articlesPerCategory   // 2
  } = options;

  // 1. 读取现有数据
  // 2. 生成新内容
  // 3. 更新数据文件
  // 4. 标记发布状态
  // 5. 生成更新日志
}
```

### 5.2 窗口更新脚本

```javascript
// scripts/update-list-windows.js
// 用于更新列表页窗口内容

function updateListWindows(brandName) {
  // 1. 读取所有产品/文章
  // 2. 按规则排序和筛选
  // 3. 生成窗口数据
  // 4. 更新到数据文件
}
```

---

## 第六部分：检查清单

### 首次发布检查清单

- [ ] 品牌信息完整
- [ ] 所有分类页可访问
- [ ] 每类2个产品详情页可访问
- [ ] 解决方案列表页可访问
- [ ] 1-2个方案详情页可访问
- [ ] 技术支持列表页可访问
- [ ] 每类2篇文章可访问
- [ ] 列表页窗口显示正确
- [ ] 页面间链接正常
- [ ] SEO元数据完整

### 后续更新检查清单

- [ ] 新增内容数据完整
- [ ] 新增页面可访问
- [ ] 列表页窗口已更新
- [ ] 分类页窗口已更新
- [ ] 相关推荐已更新
- [ ] 更新日志已记录
- [ ] 站点地图已更新

---

## 参考文档

- docs/BRAND_DATA_COMPLETE_GUIDE.md - 完整数据规范
- docs/ALTERNATIVE_PARTS_GUIDELINES.md - 替代料号规范
- templates/brand-data-template/ - 差异化模板

---

**文档版本**: 1.0  
**最后更新**: 2026-04-02  
**维护者**: LiTong Electronics Technical Team
