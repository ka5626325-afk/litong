# 品牌差异化数据模板使用指南

本目录包含针对不同品牌、不同产品类型、不同应用场景的差异化标准数据模板。所有模板均符合 `NEW_BRAND_DATA_REQUIREMENTS.md` 的要求，同时体现各品牌的技术特点和应用优势。

## 📊 品牌差异化对比

| 品牌 | 核心定位 | 主要产品 | 技术特点 | FAE 专业方向 |
|------|----------|----------|----------|--------------|
| **Infineon** | 汽车与工业半导体领导者 | IGBT、MOSFET、MCU、传感器 | 汽车功能安全、宽禁带半导体 | 汽车电子、功率转换 |
| **CRRC** | 轨道交通装备领导者 | IGBT模块、牵引系统、铁路组件 | 高可靠性、轨道交通专用 | 牵引系统、铁路应用 |
| **Semikron** | 功率模块专家 | IGBT模块、智能功率模块、门极驱动 | 智能功率模块、集成驱动 | 工业驱动、逆变器设计 |

## 📁 模板文件结构

```
templates/brand-data-template/
├── README.md                          # 本使用指南
├── infineon/
│   ├── products-igbt.json             # Infineon IGBT 模块模板
│   └── products-mcu.json              # Infineon MCU 模板
├── crrc/
│   └── products-traction.json         # CRRC 牵引系统模板
├── semikron/
│   └── products-igbt.json             # Semikron IGBT 模块模板
└── generic/                           # 通用模板（适用于其他品牌）
    ├── products.json                  # 通用产品模板
    ├── solutions.json                 # 通用解决方案模板
    └── support.json                   # 通用技术支持模板
```

## 🎯 模板选择指南

### 根据品牌选择

#### Infineon 模板
**适用场景：**
- 汽车电子应用（ASIL-D 功能安全）
- 工业电机驱动
- 可再生能源（太阳能、风能）
- 微控制器应用

**模板特点：**
- FAE 点评侧重汽车功能安全和功率转换
- 配套料号包含 CAN 收发器、霍尔传感器等汽车电子器件
- 强调开发工具链和软件支持
- 包含 AURIX vs XMC 选型对比

#### CRRC 模板
**适用场景：**
- 轨道交通牵引系统
- 高铁、地铁、机车应用
- 铁路标准合规（EN 50155、IEC 61287）

**模板特点：**
- FAE 点评侧重铁路环境适应性
- 强调振动、温度、EMC 等铁路特殊要求
- 包含车辆类型选型指南（高铁、地铁、机车）
- 强调再生制动和能量回收

#### Semikron 模板
**适用场景：**
- 工业电机驱动
- 逆变器设计
- 智能功率模块（IPM）应用

**模板特点：**
- FAE 点评侧重热设计和封装技术
- 强调 SEMiTRANS vs SKiiP 选型对比
- 包含封装技术对比（焊接、烧结、压接）
- 强调 SEMISEL 仿真工具使用

## 📝 模板使用方法

### 步骤 1: 选择合适的模板

根据品牌和产品类型选择对应的模板文件：

```bash
# Infineon IGBT 产品
cp templates/brand-data-template/infineon/products-igbt.json data/[brand]/products-template.json

# CRRC 牵引系统
cp templates/brand-data-template/crrc/products-traction.json data/[brand]/products-template.json

# Semikron IGBT 产品
cp templates/brand-data-template/semikron/products-igbt.json data/[brand]/products-template.json
```

### 步骤 2: 替换占位符

模板中使用 `[占位符]` 标记需要替换的内容。主要占位符包括：

#### 通用占位符
- `[型号]` - 产品型号（如 FF300R12ME4_B11）
- `[电压]` - 额定电压（如 1200V）
- `[电流]` - 额定电流（如 300A）
- `[封装]` - 封装类型（如 EconoDUAL 3）
- `[FAE姓名]` - FAE 工程师姓名
- `[应用场景]` - 典型应用场景

#### 品牌特定占位符

**Infineon IGBT:**
- `[Vce(sat)值]` - 饱和压降（如 1.75V）
- `[扭矩值]` - 安装扭矩（如 3-5）
- `[电阻值]` - 门极电阻（如 4.7）

**CRRC 牵引系统:**
- `[车辆类型]` - 车辆类型（如 Metro、High-Speed Train）
- `[功率]` - 功率等级（如 1000kW）
- `[铁路标准]` - 适用标准（如 EN 50155）

**Semikron IGBT:**
- `[技术]` - IGBT 技术代（如 Trench4）
- `[封装特性]` - 封装特点（如 Silver sintering）

### 步骤 3: 定制化内容

根据具体产品特点，修改以下内容：

1. **产品描述** - 突出产品核心优势和差异化特性
2. **FAE 点评** - 结合实际应用经验，提供有价值的工程建议
3. **替代料号** - 提供同系列或跨系列的替代选项
4. **配套料号** - 推荐互补的器件，形成完整解决方案
5. **应用示例** - 提供具体的应用案例和性能数据

### 步骤 4: 验证数据完整性

使用验证脚本检查数据是否符合要求：

```bash
node scripts/validate-brand-data-v2.js [brand-name]
```

## 🔍 差异化内容要点

### FAE 点评差异化

不同品牌的 FAE 点评应体现各自的专业领域：

**Infineon（汽车/工业）:**
- 强调功能安全和 ASIL 认证经验
- 提及 AUTOSAR 和汽车软件开发
- 关注汽车级可靠性和温度范围

**CRRC（轨道交通）:**
- 强调铁路标准合规经验（EN 50155）
- 提及振动、冲击、EMC 等铁路特殊要求
- 关注再生制动和能量回收

**Semikron（工业驱动）:**
- 强调热设计和封装技术
- 提及 SEMISEL 仿真工具使用
- 关注烧结、压接等先进封装技术

### 配套料号差异化

**Infineon:**
- 门极驱动器（1ED020I12-F2）
- SiC 二极管（IDW30E65D2）
- 辅助电源 MOSFET（BSC028N04LS G）
- CAN 收发器（TLE9250V）
- 霍尔传感器（TLE4961-3M）

**CRRC:**
- 铁路级 IGBT 模块（CRRC-IGBT-3300V-1200A）
- 辅助电源系统（CRRC-APS-50kW）
- 牵引控制单元（CRRC-TCU-Master）

**Semikron:**
- 门极驱动核心（SKYPER 32 R）
- 智能功率模块（SKiiP 2414）
- 先进封装平台（SEMiX 3s）

### 选型指南差异化

**Infineon:**
- AURIX vs XMC 选型对比
- 汽车功能安全等级选择
- 开发工具链评估

**CRRC:**
- 车辆类型选型（高铁/地铁/机车）
- 铁路标准合规要求
- 冷却方式选择

**Semikron:**
- SEMiTRANS vs SKiiP 选型对比
- 封装技术选择（焊接/烧结/压接）
- 热设计考虑因素

## ✅ 数据质量检查清单

创建数据后，请检查以下项目：

### 基础信息
- [ ] 产品型号准确无误
- [ ] 电气参数与 datasheet 一致
- [ ] 封装信息正确

### 内容质量
- [ ] shortDescription 80-120 字符
- [ ] descriptionParagraphs 3 段，每段约 100 字符
- [ ] faeReview 内容原创，体现专业经验
- [ ] faeReview 包含具体的应用建议

### 关联数据
- [ ] alternativeParts 至少 2 个
- [ ] companionParts 至少 3 个
- [ ] 所有链接格式正确（/brand/products/category/part.html）

### 品牌差异化
- [ ] 内容体现品牌技术特点
- [ ] FAE 点评符合品牌专业方向
- [ ] 配套料号符合品牌生态系统
- [ ] 选型指南体现品牌优势

## 📚 示例参考

### 完整数据示例

参考以下已完成的品牌数据：
- `data/crrc/` - CRRC 完整数据（轨道交通特色）
- `data/semikron/` - Semikron 完整数据（功率模块特色）
- `data/infineon/` - Infineon 完整数据（汽车/工业特色）

### FAE 点评示例

**Infineon IGBT（工业驱动）:**
```
In my 12 years supporting industrial drive customers, the FF300R12ME4 
has consistently been one of the most reliable choices for 30-75kW motor 
drive applications. What stands out is its excellent balance between 
conduction and switching losses...
```

**CRRC 牵引系统（轨道交通）:**
```
In my 15 years supporting railway traction projects, the CRRC-Traction-1000 
has proven to be one of the most reliable traction converters for metro 
applications. What distinguishes this system is its robust design specifically 
engineered for railway environments...
```

**Semikron IGBT（工业驱动）:**
```
In my 10 years supporting industrial inverter designs, the SKM300GB12T4 
has consistently delivered exceptional performance and reliability. What 
sets Semikron modules apart is their innovative packaging technology...
```

## 🚀 快速开始

### 创建新品牌数据

```bash
# 1. 创建品牌目录
mkdir data/new-brand

# 2. 根据品牌类型选择模板
# 如果是功率半导体品牌，参考 Infineon/Semikron
# 如果是轨道交通品牌，参考 CRRC

# 3. 复制并修改模板
cp templates/brand-data-template/infineon/products-igbt.json \
   data/new-brand/products.json

# 4. 编辑文件，替换所有占位符
# 5. 验证数据
node scripts/validate-brand-data-v2.js new-brand

# 6. 生成网站
npm run build
```

## 💡 最佳实践

1. **保持品牌一致性** - 所有内容应符合品牌形象和技术定位
2. **突出差异化优势** - 明确说明为什么选择该品牌/产品
3. **提供实用建议** - FAE 点评应包含可操作的技术建议
4. **使用具体数据** - 应用示例应包含具体的性能数据
5. **定期更新** - 随着产品更新，及时更新配套料号和替代料号

## 📞 技术支持

如有疑问，请参考：
- `NEW_BRAND_DATA_REQUIREMENTS.md` - 详细的数据要求规范
- `scripts/validate-brand-data-v2.js` - 数据验证脚本
- 现有品牌数据示例（`data/crrc/`, `data/semikron/`, `data/infineon/`）
