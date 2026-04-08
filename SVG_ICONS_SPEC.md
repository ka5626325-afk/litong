# SVG 图标生成规范
## 产品分类图标

**用途**: 用于产品列表页分类卡片的图标
**尺寸**: 80x80px
**风格**: 简洁几何图形，统一蓝色主题
**颜色**: 使用主色调 #0072ce

---

## 1. MCU Microcontrollers - 芯片图标

```svg
<svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- MCU 芯片主体 -->
  <rect x="24" y="24" width="32" height="32" rx="4" fill="currentColor" opacity="0.9"/>
  <!-- 引脚 - 上 -->
  <rect x="28" y="18" width="4" height="6" rx="1" fill="currentColor"/>
  <rect x="36" y="18" width="4" height="6" rx="1" fill="currentColor"/>
  <rect x="44" y="18" width="4" height="6" rx="1" fill="currentColor"/>
  <rect x="52" y="18" width="4" height="6" rx="1" fill="currentColor"/>
  <!-- 引脚 - 下 -->
  <rect x="28" y="56" width="4" height="6" rx="1" fill="currentColor"/>
  <rect x="36" y="56" width="4" height="6" rx="1" fill="currentColor"/>
  <rect x="44" y="56" width="4" height="6" rx="1" fill="currentColor"/>
  <rect x="52" y="56" width="4" height="6" rx="1" fill="currentColor"/>
  <!-- 引脚 - 左 -->
  <rect x="18" y="28" width="6" height="4" rx="1" fill="currentColor"/>
  <rect x="18" y="36" width="6" height="4" rx="1" fill="currentColor"/>
  <rect x="18" y="44" width="6" height="4" rx="1" fill="currentColor"/>
  <rect x="18" y="52" width="6" height="4" rx="1" fill="currentColor"/>
  <!-- 引脚 - 右 -->
  <rect x="56" y="28" width="6" height="4" rx="1" fill="currentColor"/>
  <rect x="56" y="36" width="6" height="4" rx="1" fill="currentColor"/>
  <rect x="56" y="44" width="6" height="4" rx="1" fill="currentColor"/>
  <rect x="56" y="52" width="6" height="4" rx="1" fill="currentColor"/>
  <!-- 中心标记 -->
  <circle cx="40" cy="40" r="6" fill="white" opacity="0.3"/>
</svg>
```

---

## 2. IGBT Modules - 功率模块图标

```svg
<svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- IGBT 模块主体 -->
  <rect x="20" y="28" width="40" height="32" rx="4" fill="currentColor" opacity="0.9"/>
  <!-- 功率端子 -->
  <rect x="26" y="16" width="8" height="12" rx="2" fill="currentColor"/>
  <rect x="36" y="16" width="8" height="12" rx="2" fill="currentColor"/>
  <rect x="46" y="16" width="8" height="12" rx="2" fill="currentColor"/>
  <!-- 闪电符号 - 功率象征 -->
  <path d="M42 44 L36 52 L40 52 L38 62 L48 48 L44 48 L46 44 Z" fill="white" opacity="0.8"/>
  <!-- 固定孔 -->
  <circle cx="24" cy="56" r="3" fill="white" opacity="0.5"/>
  <circle cx="56" cy="56" r="3" fill="white" opacity="0.5"/>
</svg>
```

---

## 3. MOSFETs - 晶体管图标

```svg
<svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- MOSFET 符号 -->
  <!-- 垂直线 - 沟道 -->
  <line x1="40" y1="24" x2="40" y2="56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <!-- 栅极 G -->
  <line x1="24" y1="32" x2="36" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <line x1="24" y1="32" x2="24" y2="48" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <!-- 漏极 D -->
  <line x1="40" y1="24" x2="56" y2="24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <circle cx="56" cy="24" r="4" fill="currentColor" opacity="0.5"/>
  <!-- 源极 S -->
  <line x1="40" y1="56" x2="56" y2="56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <circle cx="56" cy="56" r="4" fill="currentColor" opacity="0.5"/>
  <!-- 箭头 - N 沟道 -->
  <polygon points="40,48 34,44 34,52" fill="currentColor"/>
</svg>
```

---

## 4. Sensors - 传感器图标

```svg
<svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 传感器外框 -->
  <rect x="24" y="24" width="32" height="32" rx="6" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <!-- 中心感应元件 -->
  <circle cx="40" cy="40" r="10" fill="currentColor" opacity="0.8"/>
  <!-- 信号波 - 上 -->
  <path d="M40 20 Q45 16 40 12" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M40 24 Q47 20 40 16" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
  <!-- 信号波 - 右 -->
  <path d="M60 40 Q64 35 68 40" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M56 40 Q52 33 64 40" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
  <!-- 信号波 - 下 -->
  <path d="M40 60 Q35 64 40 68" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M40 56 Q33 60 40 64" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
  <!-- 信号波 - 左 -->
  <path d="M20 40 Q16 35 12 40" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M24 40 Q20 33 16 40" stroke="currentColor" stroke-width="2" fill="none" opacity="0.4"/>
</svg>
```

---

## 5. Gate Drivers - 驱动图标

```svg
<svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 驱动器主体 -->
  <rect x="28" y="24" width="24" height="32" rx="4" fill="currentColor" opacity="0.9"/>
  <!-- 输入引脚 -->
  <rect x="20" y="28" width="8" height="4" rx="2" fill="currentColor"/>
  <rect x="20" y="36" width="8" height="4" rx="2" fill="currentColor"/>
  <rect x="20" y="48" width="8" height="4" rx="2" fill="currentColor"/>
  <!-- 输出引脚 -->
  <rect x="52" y="28" width="8" height="4" rx="2" fill="currentColor"/>
  <rect x="52" y="36" width="8" height="4" rx="2" fill="currentColor"/>
  <rect x="52" y="48" width="8" height="4" rx="2" fill="currentColor"/>
  <!-- 信号箭头 -->
  <path d="M32 30 L48 30 L44 26 M48 30 L44 34" stroke="white" stroke-width="2" fill="none" opacity="0.8"/>
  <path d="M32 50 L48 50 L44 46 M48 50 L44 54" stroke="white" stroke-width="2" fill="none" opacity="0.8"/>
</svg>
```

---

## 品牌关于页 Core Product Areas 图标（简洁版）

**用途**: 用于品牌关于页的核心产品区域卡片
**尺寸**: 64x64px
**风格**: 更简洁的几何图形，适合小尺寸显示

### 1. MCU Microcontrollers - 简洁芯片图标

```svg
<svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 芯片主体 -->
  <rect x="20" y="20" width="24" height="24" rx="3" fill="currentColor" opacity="0.9"/>
  <!-- 引脚简化 -->
  <rect x="24" y="14" width="3" height="6" rx="1" fill="currentColor"/>
  <rect x="30" y="14" width="3" height="6" rx="1" fill="currentColor"/>
  <rect x="37" y="14" width="3" height="6" rx="1" fill="currentColor"/>
  <rect x="24" y="44" width="3" height="6" rx="1" fill="currentColor"/>
  <rect x="30" y="44" width="3" height="6" rx="1" fill="currentColor"/>
  <rect x="37" y="44" width="3" height="6" rx="1" fill="currentColor"/>
  <rect x="14" y="24" width="6" height="3" rx="1" fill="currentColor"/>
  <rect x="14" y="30" width="6" height="3" rx="1" fill="currentColor"/>
  <rect x="44" y="24" width="6" height="3" rx="1" fill="currentColor"/>
  <rect x="44" y="30" width="6" height="3" rx="1" fill="currentColor"/>
</svg>
```

### 2. IGBT Modules - 简洁功率模块图标

```svg
<svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 模块主体 -->
  <rect x="16" y="24" width="32" height="24" rx="3" fill="currentColor" opacity="0.9"/>
  <!-- 功率端子 -->
  <rect x="20" y="14" width="6" height="10" rx="2" fill="currentColor"/>
  <rect x="29" y="14" width="6" height="10" rx="2" fill="currentColor"/>
  <rect x="38" y="14" width="6" height="10" rx="2" fill="currentColor"/>
  <!-- 闪电符号 -->
  <path d="M33 34 L28 40 H31 L29 48 L37 38 H34 L36 34 Z" fill="white" opacity="0.8"/>
</svg>
```

### 3. MOSFETs - 简洁晶体管图标

```svg
<svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 垂直线 -->
  <line x1="32" y1="18" x2="32" y2="46" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <!-- 栅极 -->
  <line x1="20" y1="26" x2="28" y2="26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="20" y1="26" x2="20" y2="38" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <!-- 漏极 -->
  <line x1="32" y1="18" x2="44" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="44" cy="18" r="3" fill="currentColor" opacity="0.5"/>
  <!-- 源极 -->
  <line x1="32" y1="46" x2="44" y2="46" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="44" cy="46" r="3" fill="currentColor" opacity="0.5"/>
  <!-- 箭头 -->
  <polygon points="32,38 27,35 27,41" fill="currentColor"/>
</svg>
```

### 4. Sensors - 简洁传感器图标

```svg
<svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 外框 -->
  <rect x="20" y="20" width="24" height="24" rx="5" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/>
  <!-- 中心 -->
  <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.8"/>
  <!-- 信号波简化 -->
  <path d="M32 14 Q35 12 32 10" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M50 32 Q52 29 54 32" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M32 50 Q29 52 32 54" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M14 32 Q12 29 10 32" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
</svg>
```

### 5. Gate Drivers - 简洁驱动器图标

```svg
<svg viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 驱动器主体 -->
  <rect x="24" y="20" width="16" height="24" rx="3" fill="currentColor" opacity="0.9"/>
  <!-- 输入 -->
  <rect x="14" y="24" width="10" height="4" rx="2" fill="currentColor"/>
  <rect x="14" y="36" width="10" height="4" rx="2" fill="currentColor"/>
  <!-- 输出 -->
  <rect x="40" y="24" width="10" height="4" rx="2" fill="currentColor"/>
  <rect x="40" y="36" width="10" height="4" rx="2" fill="currentColor"/>
  <!-- 箭头 -->
  <path d="M26 26 L38 26 L35 23 M38 26 L35 29" stroke="white" stroke-width="2" fill="none" opacity="0.8"/>
</svg>
```

---

## 使用方式

### 产品列表页模板 (products-list.html)
根据分类 ID 动态加载对应图标（80x80px）：

```ejs
<div class="category-icon">
  <% if (category.id === 'mcu') { %>
    <!-- MCU icon SVG (80x80) -->
  <% } else if (category.id === 'igbt') { %>
    <!-- IGBT icon SVG (80x80) -->
  <% } %>
</div>
```

### 品牌关于页模板 (brand-about.html)
根据产品名称动态加载对应图标（64x64px）：

```ejs
<div class="category-icon">
  <% if (product.name.includes('IGBT')) { %>
    <!-- IGBT icon SVG (64x64) -->
  <% } else if (product.name.includes('MOSFET')) { %>
    <!-- MOSFET icon SVG (64x64) -->
  <% } %>
</div>
```

---

**图标设计规范**:
- 所有图标使用 `currentColor` 以便通过 CSS 控制颜色
- 图标在卡片中居中对齐
- 产品列表页图标：80x80px 视口
- 品牌关于页图标：64x64px 视口
- 使用简洁的几何图形，易于识别
- 保持视觉一致性和品牌调性

---

## Industries & Applications 行业应用图标

**用途**: 用于品牌关于页的行业应用卡片
**尺寸**: 48x48px
**风格**: 简洁几何图形，白色图标，配合蓝色背景卡片

### 1. Automotive - 汽车行业图标

```svg
<svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 汽车轮廓 -->
  <path d="M8 28 L10 18 L18 14 L30 14 L38 18 L40 28" stroke="currentColor" stroke-width="2" fill="none" opacity="0.9"/>
  <!-- 车身 -->
  <rect x="10" y="28" width="28" height="10" rx="2" fill="currentColor" opacity="0.9"/>
  <!-- 车轮 -->
  <circle cx="15" cy="38" r="4" fill="currentColor" opacity="0.7"/>
  <circle cx="33" cy="38" r="4" fill="currentColor" opacity="0.7"/>
  <!-- 车窗 -->
  <path d="M14 18 L18 16 L30 16 L34 18" stroke="white" stroke-width="1.5" fill="none" opacity="0.5"/>
  <!-- 闪电符号 - 电动化 -->
  <path d="M24 22 L20 28 H23 L21 34 L28 26 H25 L27 22 Z" fill="white" opacity="0.8"/>
</svg>
```

### 2. Industrial - 工业自动化图标

```svg
<svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 工厂主体 -->
  <rect x="12" y="20" width="24" height="20" rx="2" fill="currentColor" opacity="0.9"/>
  <!-- 屋顶 -->
  <path d="M10 20 L24 10 L38 20" stroke="currentColor" stroke-width="2" fill="none" opacity="0.9"/>
  <!-- 烟囱 -->
  <rect x="20" y="6" width="4" height="6" rx="1" fill="currentColor" opacity="0.7"/>
  <!-- 窗户 -->
  <rect x="16" y="24" width="5" height="5" rx="1" fill="white" opacity="0.5"/>
  <rect x="27" y="24" width="5" height="5" rx="1" fill="white" opacity="0.5"/>
  <rect x="16" y="32" width="5" height="5" rx="1" fill="white" opacity="0.5"/>
  <rect x="27" y="32" width="5" height="5" rx="1" fill="white" opacity="0.5"/>
  <!-- 门 -->
  <rect x="21" y="32" width="6" height="8" rx="1" fill="white" opacity="0.3"/>
</svg>
```

### 3. Renewable Energy - 可再生能源图标

```svg
<svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 太阳能板 -->
  <rect x="8" y="24" width="14" height="12" rx="1" fill="currentColor" opacity="0.9" transform="rotate(-15 15 30)"/>
  <rect x="26" y="24" width="14" height="12" rx="1" fill="currentColor" opacity="0.9" transform="rotate(15 33 30)"/>
  <!-- 支架 -->
  <line x1="15" y1="36" x2="15" y2="42" stroke="currentColor" stroke-width="2" opacity="0.7"/>
  <line x1="33" y1="36" x2="33" y2="42" stroke="currentColor" stroke-width="2" opacity="0.7"/>
  <!-- 太阳 -->
  <circle cx="36" cy="12" r="5" fill="currentColor" opacity="0.3"/>
  <path d="M36 4 L36 7 M36 17 L36 20 M31 12 L34 12 M38 12 L41 12" stroke="currentColor" stroke-width="2" opacity="0.5"/>
  <!-- 风力涡轮机简化 -->
  <circle cx="24" cy="14" r="3" fill="white" opacity="0.5"/>
  <path d="M24 14 L24 8 M24 14 L28 18 M24 14 L20 18" stroke="white" stroke-width="1.5" opacity="0.7"/>
</svg>
```

### 4. IoT & Consumer - 物联网和消费电子图标

```svg
<svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 手机/设备轮廓 -->
  <rect x="16" y="10" width="16" height="28" rx="3" fill="currentColor" opacity="0.9"/>
  <!-- 屏幕 -->
  <rect x="19" y="14" width="10" height="18" rx="1" fill="white" opacity="0.3"/>
  <!-- 主页按钮 -->
  <circle cx="24" cy="35" r="2" fill="white" opacity="0.5"/>
  <!-- 信号波 - IoT 连接 -->
  <path d="M8 24 Q11 21 8 18" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M8 24 Q11 24 8 24" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M8 24 Q11 27 8 30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M40 24 Q37 21 40 18" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M40 24 Q37 24 40 24" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M40 24 Q37 27 40 30" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/>
</svg>
```

---

## Technical Support 技术支持分类图标

**用途**: 用于品牌关于页的技术支持分类卡片
**尺寸**: 56x56px
**风格**: 简洁几何图形，蓝色图标，白色背景卡片

### 1. Selection Guides - 选型指南图标

```svg
<svg viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 文档主体 -->
  <rect x="12" y="8" width="32" height="40" rx="2" fill="currentColor" opacity="0.9"/>
  <!-- 折角 -->
  <path d="M38 8 L44 14 L38 14 Z" fill="currentColor" opacity="0.7"/>
  <!-- 复选标记 - 选择象征 -->
  <path d="M18 24 L24 30 L36 18" stroke="white" stroke-width="3" fill="none" opacity="0.9" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 34 L24 40 L36 28" stroke="white" stroke-width="3" fill="none" opacity="0.9" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- 横线 - 文本行 -->
  <rect x="18" y="48" width="20" height="2" rx="1" fill="white" opacity="0.5"/>
</svg>
```

### 2. Application Notes - 应用笔记图标

```svg
<svg viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 文档主体 -->
  <rect x="12" y="8" width="32" height="40" rx="2" fill="currentColor" opacity="0.9"/>
  <!-- 折角 -->
  <path d="M38 8 L44 14 L38 14 Z" fill="currentColor" opacity="0.7"/>
  <!-- 灯泡 - 应用/创意象征 -->
  <circle cx="28" cy="26" r="6" fill="white" opacity="0.9"/>
  <path d="M28 32 L28 38" stroke="white" stroke-width="2" opacity="0.7"/>
  <path d="M24 38 L32 38" stroke="white" stroke-width="2" opacity="0.7"/>
  <!-- 横线 - 文本行 -->
  <rect x="18" y="44" width="20" height="2" rx="1" fill="white" opacity="0.5"/>
</svg>
```

### 3. Troubleshooting Guides - 问题排查图标

```svg
<svg viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 放大镜主体 -->
  <circle cx="24" cy="24" r="12" stroke="currentColor" stroke-width="3" fill="none" opacity="0.9"/>
  <!-- 放大镜手柄 -->
  <path d="M32 32 L42 42" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
  <!-- 感叹号 - 问题象征 -->
  <path d="M24 20 L24 26" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
  <circle cx="24" cy="30" r="2" fill="white" opacity="0.9"/>
</svg>
```

### 4. Product Reviews - 产品评测图标

```svg
<svg viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 文档主体 -->
  <rect x="12" y="8" width="32" height="40" rx="2" fill="currentColor" opacity="0.9"/>
  <!-- 折角 -->
  <path d="M38 8 L44 14 L38 14 Z" fill="currentColor" opacity="0.7"/>
  <!-- 星星 - 评级象征 -->
  <path d="M28 22 L30 28 L36 28 L31 32 L33 38 L28 34 L23 38 L25 32 L20 28 L26 28 Z" fill="white" opacity="0.9"/>
  <!-- 横线 - 文本行 -->
  <rect x="18" y="44" width="20" height="2" rx="1" fill="white" opacity="0.5"/>
</svg>
```

---

## Solutions 解决方案拓扑图

**用途**: 用于解决方案列表页卡片的拓扑示意图
**尺寸**: 200x120px
**风格**: 简洁框图，蓝色主题，白色背景

### 1. EV Charger Solution - EV 充电器拓扑图

```svg
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="200" height="120" fill="#f8f9fa"/>
  
  <!-- 电网输入 -->
  <rect x="10" y="45" width="30" height="30" rx="4" fill="#0072ce" opacity="0.2" stroke="#0072ce" stroke-width="2"/>
  <text x="25" y="60" text-anchor="middle" font-size="8" fill="#0072ce">AC Grid</text>
  <text x="25" y="70" text-anchor="middle" font-size="6" fill="#0072ce">400VAC</text>
  
  <!-- PFC 级 -->
  <rect x="55" y="45" width="30" height="30" rx="4" fill="#0072ce" opacity="0.3" stroke="#0072ce" stroke-width="2"/>
  <text x="70" y="58" text-anchor="middle" font-size="7" fill="#0072ce">PFC</text>
  <text x="70" y="68" text-anchor="middle" font-size="6" fill="#0072ce">Boost</text>
  
  <!-- DC-DC 变换器 -->
  <rect x="100" y="45" width="40" height="30" rx="4" fill="#0072ce" opacity="0.4" stroke="#0072ce" stroke-width="2"/>
  <text x="120" y="58" text-anchor="middle" font-size="7" fill="#0072ce">DC-DC</text>
  <text x="120" y="68" text-anchor="middle" font-size="6" fill="#0072ce">LLC/SiC</text>
  
  <!-- 输出/充电桩 -->
  <rect x="155" y="45" width="35" height="30" rx="4" fill="#0072ce" opacity="0.5" stroke="#0072ce" stroke-width="2"/>
  <text x="172" y="58" text-anchor="middle" font-size="7" fill="#0072ce">Output</text>
  <text x="172" y="68" text-anchor="middle" font-size="6" fill="#0072ce">200-920VDC</text>
  
  <!-- 控制 MCU -->
  <rect x="85" y="85" width="30" height="25" rx="4" fill="#ff6b00" opacity="0.3" stroke="#ff6b00" stroke-width="2"/>
  <text x="100" y="98" text-anchor="middle" font-size="6" fill="#ff6b00">MCU</text>
  <text x="100" y="106" text-anchor="middle" font-size="5" fill="#ff6b00">XMC4700</text>
  
  <!-- 连接线 -->
  <line x1="40" y1="60" x2="55" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="85" y1="60" x2="100" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="140" y1="60" x2="155" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="100" y1="90" x2="100" y2="78" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="70" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="70" y1="90" x2="70" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="130" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="130" y1="90" x2="130" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="172" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="172" y1="90" x2="172" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
</svg>
```

### 2. Industrial Motor Drive - 工业电机驱动拓扑图

```svg
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="200" height="120" fill="#f8f9fa"/>
  
  <!-- 三相输入 -->
  <rect x="10" y="45" width="30" height="30" rx="4" fill="#0072ce" opacity="0.2" stroke="#0072ce" stroke-width="2"/>
  <text x="25" y="58" text-anchor="middle" font-size="7" fill="#0072ce">3-Phase</text>
  <text x="25" y="68" text-anchor="middle" font-size="6" fill="#0072ce">400VAC</text>
  
  <!-- 整流桥 -->
  <rect x="55" y="45" width="25" height="30" rx="4" fill="#0072ce" opacity="0.3" stroke="#0072ce" stroke-width="2"/>
  <text x="67" y="58" text-anchor="middle" font-size="6" fill="#0072ce">Rectifier</text>
  <text x="67" y="68" text-anchor="middle" font-size="5" fill="#0072ce">Bridge</text>
  
  <!-- 逆变器 IGBT -->
  <rect x="95" y="45" width="35" height="30" rx="4" fill="#0072ce" opacity="0.5" stroke="#0072ce" stroke-width="2"/>
  <text x="112" y="58" text-anchor="middle" font-size="7" fill="#0072ce">Inverter</text>
  <text x="112" y="68" text-anchor="middle" font-size="6" fill="#0072ce">IGBT 3-Phase</text>
  
  <!-- 电机 -->
  <rect x="145" y="45" width="45" height="30" rx="4" fill="#28a745" opacity="0.3" stroke="#28a745" stroke-width="2"/>
  <text x="167" y="58" text-anchor="middle" font-size="7" fill="#28a745">Motor</text>
  <text x="167" y="68" text-anchor="middle" font-size="6" fill="#28a745">PMSM/IM</text>
  
  <!-- 控制 MCU -->
  <rect x="85" y="85" width="30" height="25" rx="4" fill="#ff6b00" opacity="0.3" stroke="#ff6b00" stroke-width="2"/>
  <text x="100" y="98" text-anchor="middle" font-size="6" fill="#ff6b00">MCU</text>
  <text x="100" y="106" text-anchor="middle" font-size="5" fill="#ff6b00">XMC4700</text>
  
  <!-- 电流传感器 -->
  <circle cx="130" cy="60" r="8" fill="#ffc107" opacity="0.3" stroke="#ffc107" stroke-width="2"/>
  <text x="130" y="62" text-anchor="middle" font-size="5" fill="#ffc107">Hall</text>
  
  <!-- 连接线 -->
  <line x1="40" y1="60" x2="55" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="80" y1="60" x2="95" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="130" y1="60" x2="145" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="100" y1="90" x2="100" y2="78" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="67" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="67" y1="90" x2="67" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="112" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="112" y1="90" x2="112" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="130" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="130" y1="90" x2="130" y2="68" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
</svg>
```

### 3. Solar Inverter - 太阳能逆变器拓扑图

```svg
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="200" height="120" fill="#f8f9fa"/>
  
  <!-- 太阳能板输入 -->
  <rect x="10" y="45" width="35" height="30" rx="4" fill="#ffc107" opacity="0.3" stroke="#ffc107" stroke-width="2"/>
  <text x="27" y="58" text-anchor="middle" font-size="7" fill="#ffc107">PV Array</text>
  <text x="27" y="68" text-anchor="middle" font-size="6" fill="#ffc107">200-1000VDC</text>
  
  <!-- DC-DC Boost -->
  <rect x="60" y="45" width="30" height="30" rx="4" fill="#0072ce" opacity="0.3" stroke="#0072ce" stroke-width="2"/>
  <text x="75" y="58" text-anchor="middle" font-size="6" fill="#0072ce">DC-DC</text>
  <text x="75" y="68" text-anchor="middle" font-size="5" fill="#0072ce">SiC Boost</text>
  
  <!-- 逆变器 -->
  <rect x="105" y="45" width="35" height="30" rx="4" fill="#0072ce" opacity="0.5" stroke="#0072ce" stroke-width="2"/>
  <text x="122" y="58" text-anchor="middle" font-size="7" fill="#0072ce">Inverter</text>
  <text x="122" y="68" text-anchor="middle" font-size="6" fill="#0072ce">IGBT 3-Level</text>
  
  <!-- 电网输出 -->
  <rect x="155" y="45" width="35" height="30" rx="4" fill="#28a745" opacity="0.3" stroke="#28a745" stroke-width="2"/>
  <text x="172" y="58" text-anchor="middle" font-size="7" fill="#28a745">Grid</text>
  <text x="172" y="68" text-anchor="middle" font-size="6" fill="#28a745">230/400VAC</text>
  
  <!-- 控制 MCU -->
  <rect x="85" y="85" width="30" height="25" rx="4" fill="#ff6b00" opacity="0.3" stroke="#ff6b00" stroke-width="2"/>
  <text x="100" y="98" text-anchor="middle" font-size="6" fill="#ff6b00">MCU</text>
  <text x="100" y="106" text-anchor="middle" font-size="5" fill="#ff6b00">XMC4700</text>
  
  <!-- MPPT 标识 -->
  <ellipse cx="75" cy="35" rx="20" ry="8" fill="none" stroke="#ffc107" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="75" y="32" text-anchor="middle" font-size="5" fill="#ffc107">MPPT</text>
  
  <!-- 连接线 -->
  <line x1="45" y1="60" x2="60" y2="60" stroke="#ffc107" stroke-width="2"/>
  <line x1="90" y1="60" x2="105" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="140" y1="60" x2="155" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="100" y1="90" x2="100" y2="78" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="75" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="75" y1="90" x2="75" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="90" x2="122" y2="90" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="122" y1="90" x2="122" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
</svg>
```

### 4. Wind Power Converter - 风力发电变流器拓扑图

```svg
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="200" height="120" fill="#f8f9fa"/>
  
  <!-- 发电机输入 -->
  <rect x="10" y="45" width="35" height="30" rx="4" fill="#28a745" opacity="0.3" stroke="#28a745" stroke-width="2"/>
  <text x="27" y="58" text-anchor="middle" font-size="7" fill="#28a745">Generator</text>
  <text x="27" y="68" text-anchor="middle" font-size="6" fill="#28a745">Variable AC</text>
  
  <!-- 机侧变流器 -->
  <rect x="60" y="45" width="35" height="30" rx="4" fill="#0072ce" opacity="0.4" stroke="#0072ce" stroke-width="2"/>
  <text x="77" y="58" text-anchor="middle" font-size="6" fill="#0072ce">Machine</text>
  <text x="77" y="68" text-anchor="middle" font-size="5" fill="#0072ce">Side Conv.</text>
  
  <!-- 网侧变流器 -->
  <rect x="110" y="45" width="35" height="30" rx="4" fill="#0072ce" opacity="0.5" stroke="#0072ce" stroke-width="2"/>
  <text x="127" y="58" text-anchor="middle" font-size="6" fill="#0072ce">Grid</text>
  <text x="127" y="68" text-anchor="middle" font-size="5" fill="#0072ce">Side Conv.</text>
  
  <!-- 电网输出 -->
  <rect x="160" y="45" width="30" height="30" rx="4" fill="#0072ce" opacity="0.2" stroke="#0072ce" stroke-width="2"/>
  <text x="175" y="58" text-anchor="middle" font-size="7" fill="#0072ce">Grid</text>
  <text x="175" y="68" text-anchor="middle" font-size="6" fill="#0072ce">690VAC</text>
  
  <!-- 直流母线电容 -->
  <rect x="85" y="85" width="30" height="25" rx="4" fill="#ffc107" opacity="0.3" stroke="#ffc107" stroke-width="2"/>
  <text x="100" y="98" text-anchor="middle" font-size="6" fill="#ffc107">DC-Link</text>
  <text x="100" y="106" text-anchor="middle" font-size="5" fill="#ffc107">Capacitor</text>
  
  <!-- 控制 -->
  <rect x="140" y="85" width="25" height="25" rx="4" fill="#ff6b00" opacity="0.3" stroke="#ff6b00" stroke-width="2"/>
  <text x="152" y="98" text-anchor="middle" font-size="5" fill="#ff6b00">Ctrl</text>
  <text x="152" y="106" text-anchor="middle" font-size="4" fill="#ff6b00">DSP/FPGA</text>
  
  <!-- 连接线 -->
  <line x1="45" y1="60" x2="60" y2="60" stroke="#28a745" stroke-width="2"/>
  <line x1="95" y1="60" x2="110" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="145" y1="60" x2="160" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="77" y1="75" x2="77" y2="85" stroke="#0072ce" stroke-width="2"/>
  <line x1="77" y1="85" x2="85" y2="85" stroke="#0072ce" stroke-width="2"/>
  <line x1="115" y1="85" x2="115" y2="75" stroke="#0072ce" stroke-width="2"/>
  <line x1="127" y1="75" x2="127" y2="85" stroke="#0072ce" stroke-width="2"/>
  <line x1="100" y1="90" x2="100" y2="97" stroke="#ffc107" stroke-width="1.5"/>
  <line x1="140" y1="97" x2="127" y2="97" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="127" y1="97" x2="127" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="140" y1="97" x2="77" y2="97" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="77" y1="97" x2="77" y2="75" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
</svg>
```

### 5. Rail Transit Traction - 轨道交通牵引拓扑图

```svg
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="200" height="120" fill="#f8f9fa"/>
  
  <!-- 受电弓/高压输入 -->
  <rect x="10" y="45" width="35" height="30" rx="4" fill="#ffc107" opacity="0.3" stroke="#ffc107" stroke-width="2"/>
  <text x="27" y="58" text-anchor="middle" font-size="7" fill="#ffc107">Pantograph</text>
  <text x="27" y="68" text-anchor="middle" font-size="5" fill="#ffc107">DC 1500V/3000V</text>
  
  <!-- 牵引变流器 -->
  <rect x="60" y="45" width="40" height="30" rx="4" fill="#0072ce" opacity="0.5" stroke="#0072ce" stroke-width="2"/>
  <text x="80" y="55" text-anchor="middle" font-size="6" fill="#0072ce">Traction</text>
  <text x="80" y="65" text-anchor="middle" font-size="6" fill="#0072ce">Converter</text>
  <text x="80" y="73" text-anchor="middle" font-size="5" fill="#0072ce">IGBT 3-Level NPC</text>
  
  <!-- 变压器/电感 -->
  <rect x="115" y="45" width="30" height="30" rx="4" fill="#6c757d" opacity="0.3" stroke="#6c757d" stroke-width="2"/>
  <text x="130" y="58" text-anchor="middle" font-size="6" fill="#6c757d">Filter</text>
  <text x="130" y="68" text-anchor="middle" font-size="5" fill="#6c757d">L-C Filter</text>
  
  <!-- 牵引电机 -->
  <rect x="160" y="45" width="30" height="30" rx="4" fill="#28a745" opacity="0.3" stroke="#28a745" stroke-width="2"/>
  <text x="175" y="58" text-anchor="middle" font-size="6" fill="#28a745">Motor</text>
  <text x="175" y="68" text-anchor="middle" font-size="5" fill="#28a745">3-Phase IM</text>
  
  <!-- 控制单元 -->
  <rect x="85" y="85" width="30" height="25" rx="4" fill="#ff6b00" opacity="0.3" stroke="#ff6b00" stroke-width="2"/>
  <text x="100" y="98" text-anchor="middle" font-size="5" fill="#ff6b00">TCU</text>
  <text x="100" y="106" text-anchor="middle" font-size="4" fill="#ff6b00">EN 50155</text>
  
  <!-- 制动电阻 -->
  <rect x="50" y="85" width="25" height="25" rx="4" fill="#dc3545" opacity="0.3" stroke="#dc3545" stroke-width="2"/>
  <text x="62" y="98" text-anchor="middle" font-size="5" fill="#dc3545">Brake</text>
  <text x="62" y="106" text-anchor="middle" font-size="4" fill="#dc3545">Resistor</text>
  
  <!-- 连接线 -->
  <line x1="45" y1="60" x2="60" y2="60" stroke="#ffc107" stroke-width="2"/>
  <line x1="100" y1="60" x2="115" y2="60" stroke="#0072ce" stroke-width="2"/>
  <line x1="145" y1="60" x2="160" y2="60" stroke="#6c757d" stroke-width="2"/>
  <line x1="80" y1="75" x2="80" y2="85" stroke="#0072ce" stroke-width="2"/>
  <line x1="80" y1="85" x2="85" y2="85" stroke="#ff6b00" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="62" y1="97" x2="85" y2="97" stroke="#dc3545" stroke-width="1.5"/>
  <line x1="62" y1="97" x2="62" y2="75" stroke="#dc3545" stroke-width="1.5"/>
  <line x1="62" y1="75" x2="60" y2="75" stroke="#dc3545" stroke-width="1.5"/>
  <line x1="60" y1="75" x2="60" y2="60" stroke="#dc3545" stroke-width="1.5"/>
</svg>
```

---

## 使用方式

### 品牌关于页 - Industries & Applications

```ejs
<div class="industry-grid">
  <% solutions.forEach(function(solution) { %>
    <a href="/infineon/solutions/<%= solution.id %>.html" class="industry-card">
      <div class="industry-icon">
        <% if (solution.industry.includes('Automotive') || solution.industry.includes('EV')) { %>
          <!-- Automotive Icon -->
        <% } else if (solution.industry.includes('Industrial') || solution.industry.includes('Motor')) { %>
          <!-- Industrial Icon -->
        <% } else if (solution.industry.includes('Renewable') || solution.industry.includes('Solar') || solution.industry.includes('Wind')) { %>
          <!-- Renewable Energy Icon -->
        <% } else if (solution.industry.includes('IoT') || solution.industry.includes('Consumer')) { %>
          <!-- IoT & Consumer Icon -->
        <% } %>
      </div>
      <h3><%= solution.industry %></h3>
      <p><%= solution.description.substring(0, 100) %>...</p>
    </a>
  <% }); %>
</div>
```
