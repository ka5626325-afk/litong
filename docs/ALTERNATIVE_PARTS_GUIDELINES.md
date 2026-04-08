# 替代料号（Alternative Parts）选型规范

本文档规定产品型号详情页中替代料号的选型要求和填写规范。

## 📋 核心原则

### 1. 电气参数必须满足
**替代型号的电气核心参数必须 ≥ 被替代型号**

| 产品类型 | 核心电气参数 | 要求 |
|---------|-------------|------|
| **IGBT 模块** | 电压 (Vces/Vce) | ≥ 被替代型号 |
| | 电流 (Ic) | ≥ 被替代型号 |
| **MOSFET** | 电压 (Vds) | ≥ 被替代型号 |
| | 电流 (Id) | ≥ 被替代型号 |
| | 导通电阻 (RDS(on)) | ≤ 被替代型号（越小越好） |
| **MCU** | 主频 | ≥ 被替代型号 |
| | Flash/RAM | ≥ 被替代型号 |
| | 外设数量 | ≥ 被替代型号 |
| **牵引系统** | 功率 | ≥ 被替代型号 |
| | 输入电压 | ≥ 被替代型号 |
| | 输出电流 | ≥ 被替代型号 |

### 2. 参数必须接近
**在满足 ≥ 的前提下，参数应尽量接近被替代型号**

- 电压：相同或高一档（如 1200V → 1200V 或 1700V）
- 电流：相同或高 20-50%（避免过高导致成本浪费）
- 封装：优先相同封装，便于直接替换

### 3. 兼容性要求
- **Pin-to-Pin 兼容**：优先选择可直接替换的型号
- **封装兼容**：相同封装尺寸，便于 PCB 布局
- **驱动兼容**：门极参数接近，无需大幅调整驱动电路

---

## 📝 数据格式规范

### 替代料号 JSON 结构

```json
{
  "alternativeParts": [
    {
      "partNumber": "替代型号",
      "brand": "品牌",
      "specifications": {
        "voltage": "电压值",
        "current": "电流值",
        "vceSat": "导通压降",
        "package": "封装"
      },
      "comparison": {
        "voltage": "电压对比说明",
        "current": "电流对比说明",
        "vceSat": "导通压降对比",
        "package": "封装对比",
        "compatibility": "兼容性说明"
      },
      "reason": "替代原因（技术角度）",
      "useCase": "适用场景（应用角度）",
      "link": "产品详情页链接"
    }
  ]
}
```

### 字段填写规范

#### specifications（规格参数）
必须填写替代型号的完整电气参数：

```json
"specifications": {
  "voltage": "1200V",
  "current": "450A",
  "vceSat": "1.75V (typ)",
  "package": "EconoDUAL 3"
}
```

#### comparison（参数对比）
必须逐项对比关键参数，使用统一格式：

```json
"comparison": {
  "voltage": "1200V = 1200V (相同)",
  "current": "450A > 300A (+50%)",
  "vceSat": "1.75V = 1.75V (相同)",
  "package": "EconoDUAL 3 = EconoDUAL 3 (相同)",
  "compatibility": "Pin-compatible, direct replacement"
}
```

**对比格式规范：**
- 相同：`=`
- 优于：`>` 或 `<`（根据参数性质）
- 差异百分比：`(±X%)`

#### reason（替代原因）
从技术角度说明为什么可以替代：

```
"Higher current rating (450A vs 300A) for applications requiring 
50% power upgrade without changing PCB layout"
```

#### useCase（适用场景）
从应用角度说明什么场景适合使用：

```
"适用于需要功率升级但保持相同PCB设计的场景，
如从30kW升级到45kW的电机驱动"
```

---

## 🎯 替代料号类型

### 类型 1：功率升级型
**特点**：电流/功率更高，其他参数相同

```json
{
  "partNumber": "FF450R12ME4_B11",
  "specifications": {
    "voltage": "1200V",
    "current": "450A"
  },
  "comparison": {
    "voltage": "1200V = 1200V (相同)",
    "current": "450A > 300A (+50%)"
  },
  "reason": "Higher current for power upgrade",
  "useCase": "适用于功率升级场景"
}
```

### 类型 2：效率提升型
**特点**：导通损耗更低，其他参数相同

```json
{
  "partNumber": "FF300R12KT4_B11",
  "specifications": {
    "voltage": "1200V",
    "current": "300A",
    "vceSat": "1.55V"
  },
  "comparison": {
    "voltage": "1200V = 1200V (相同)",
    "current": "300A = 300A (相同)",
    "vceSat": "1.55V < 1.75V (-11%)"
  },
  "reason": "11% lower Vce(sat) for higher efficiency",
  "useCase": "适用于对效率要求高的应用"
}
```

### 类型 3：集成方案型
**特点**：集成度更高，简化设计

```json
{
  "partNumber": "SKiiP 2414",
  "specifications": {
    "voltage": "1200V",
    "current": "400A"
  },
  "comparison": {
    "voltage": "1200V = 1200V (相同)",
    "current": "400A > 300A (+33%)",
    "integration": "集成驱动 > 分立驱动"
  },
  "reason": "Integrated driver reduces design time",
  "useCase": "适用于快速开发场景"
}
```

---

## ✅ 选型检查清单

### 电气参数检查
- [ ] 电压 ≥ 被替代型号
- [ ] 电流 ≥ 被替代型号
- [ ] 导通损耗 ≤ 被替代型号（或接近）
- [ ] 开关损耗接近或更优

### 物理兼容性检查
- [ ] 封装相同或兼容
- [ ] 安装尺寸匹配
- [ ] 引脚定义兼容
- [ ] 热阻性能 ≥ 被替代型号

### 应用适用性检查
- [ ] 目标应用场景明确
- [ ] 替代优势清晰说明
- [ ] 成本影响评估（可选）

---

## 📝 填写示例

### IGBT 模块示例

**被替代型号**：FF300R12ME4_B11（1200V, 300A, 1.75V）

```json
{
  "alternativeParts": [
    {
      "partNumber": "FF450R12ME4_B11",
      "brand": "Infineon",
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
      "reason": "Higher current rating (450A vs 300A) for applications requiring 50% power upgrade without changing PCB layout",
      "useCase": "适用于需要功率升级但保持相同PCB设计的场景，如从30kW升级到45kW的电机驱动",
      "link": "/infineon/products/igbt-modules/ff450r12me4_b11.html"
    }
  ]
}
```

### 牵引系统示例

**被替代型号**：CRRC-Traction-1000（1000kW, DC1500V, 800A）

```json
{
  "alternativeParts": [
    {
      "partNumber": "CRRC-Traction-1500",
      "brand": "CRRC",
      "specifications": {
        "powerRating": "1500kW",
        "inputVoltage": "DC 1500V",
        "outputCurrent": "1200A",
        "coolingMethod": "Liquid Cooling"
      },
      "comparison": {
        "power": "1500kW > 1000kW (+50%)",
        "inputVoltage": "DC 1500V = DC 1500V (相同)",
        "outputCurrent": "1200A > 800A (+50%)",
        "cooling": "Liquid = Liquid (相同)",
        "size": "相同安装尺寸，功率密度提升"
      },
      "reason": "Higher power rating for heavier metro trains requiring 50% more traction power",
      "useCase": "适用于B型地铁升级或A型地铁应用",
      "link": "/crrc/products/traction-systems/crrc-traction-1500.html"
    }
  ]
}
```

---

## ⚠️ 常见错误

### 错误 1：参数不满足要求
```json
// ❌ 错误：电压低于被替代型号
{
  "partNumber": "FF300R06ME3",
  "specifications": {
    "voltage": "600V",  // 错误！低于 1200V
    "current": "300A"
  }
}
```

### 错误 2：缺少参数对比
```json
// ❌ 错误：comparison 字段为空或缺失
{
  "partNumber": "FF450R12ME4_B11",
  "comparison": {}  // 错误！缺少详细对比
}
```

### 错误 3：参数差异过大
```json
// ❌ 错误：电流差异过大（>100%）
{
  "partNumber": "FF600R12ME4_B11",
  "comparison": {
    "current": "600A > 300A (+100%)"  // 差异过大，不经济
  }
}
```

---

## 📚 相关产品类型规范

### IGBT 模块
- 电压：必须 ≥，优先相同
- 电流：必须 ≥，建议高 20-50%
- Vce(sat)：≤ 或接近（差异 < 10%）
- 封装：优先相同

### MOSFET
- Vds：必须 ≥，优先相同
- Id：必须 ≥，建议高 20-50%
- RDS(on)：必须 ≤，越低越好
- Qg：接近或更低

### MCU
- 主频：必须 ≥
- Flash/RAM：必须 ≥
- 外设：必须 ≥
- 封装：优先相同

### 牵引系统
- 功率：必须 ≥，建议高 20-50%
- 输入电压：必须 ≥
- 输出电流：必须 ≥
- 冷却方式：相同或更强

---

**文档版本**: 1.0  
**最后更新**: 2026-04-02  
**维护者**: LiTong Electronics Technical Team
