# 模板配置系统设计文档

## 系统概述

一个灵活的模板配置系统，允许品牌根据产品类型选择合适的模板，同时支持自定义字段和布局。

## 核心概念

### 1. 模板类型 (Template Type)
按产品技术类型划分，共13种：

| 模板ID | 名称 | 适用品牌示例 |
|--------|------|-------------|
| wide-bandgap | 宽禁带半导体 | Cree, Rohm, InventChip |
| silicon-discrete | 硅基分立器件 | Sanrex, 强茂, 长电 |
| power-module | 功率模块/电源 | Vicor, Mornsun, Mean Well |
| capacitor | 电容器 | Faratronic, Jianghai, CapXon |
| inductor-magnetic | 电感磁珠 | Sunlord, CET |
| sensor | 传感器 | LEM, GalaxyCore, Goertek |
| mcu-processor | MCU/处理器 | ST, TI, Microchip, NXP |
| power-management-ic | 电源管理IC | 3Peak, SGMicro, Silergy |
| protection-device | 保护器件 | Littelfuse, Bussmann, 冠西 |
| relay | 继电器 | Hongfa, 松下, Omron |
| crystal-oscillator | 晶振/时钟 | HCI, YXC, Siward |
| memory | 存储器 | SK Hynix, GigaDevice |
| rf-wireless | 射频/无线 | Skyworks, Maxscend |

### 2. 字段组 (Field Groups)
每种模板类型定义所需的字段组：

```javascript
{
  "basic": ["partNumber", "manufacturer", "package"],
  "electrical": ["voltage", "current", "power"],
  "thermal": ["tjMax", "rthJc", "rthJa"],
  "mechanical": ["dimensions", "weight", "mounting"],
  "application": ["typicalApplications", "referenceDesigns"],
  "lifecycle": ["status", "leadTime", "moq"]
}
```

### 3. 布局变体 (Layout Variants)
每种模板类型可包含多种布局：
- `standard`: 标准布局
- `compact`: 紧凑布局（适合小屏幕）
- `technical`: 技术详细布局（适合工程师）
- `marketing`: 营销导向布局（突出卖点）

## 配置文件结构

### 1. 模板类型定义
`config/template-types.json`

### 2. 品牌模板映射
`config/brand-templates.json`

### 3. 品牌自定义配置
`data/{brand}/template-config.json`

## 工作流程

```
1. 品牌创建时选择模板类型
2. 系统加载模板类型定义（字段、布局）
3. 合并品牌自定义配置
4. 生成数据录入表单（可选）
5. 根据模板渲染页面
```

## 扩展机制

### 1. 字段扩展
品牌可以添加自定义字段：
```json
{
  "customFields": [
    {
      "name": "specialCoating",
      "type": "string",
      "label": "特殊涂层",
      "group": "mechanical"
    }
  ]
}
```

### 2. 模板继承
支持模板继承和覆盖：
```json
{
  "extends": "power-module",
  "overrides": {
    "fields": {
      "add": ["isolationVoltage"],
      "remove": ["switchingFrequency"]
    }
  }
}
```

### 3. 条件渲染
根据产品特性条件显示字段：
```json
{
  "conditionalFields": [
    {
      "field": "rdsOn",
      "condition": "technology == 'SiC' || technology == 'GaN'",
      "template": "wide-bandgap"
    }
  ]
}
```
