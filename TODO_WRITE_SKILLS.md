# TODO_WRITE 补充文档 - Skill 调用详解

> **说明**: 本文档详细说明每个 Task 的 `skill:requesting-code-review` 和 `skill:receiving-code-review` 调用

---

## 审查测试 Skill 调用规范

### 通用模板

**每个 Task 完成后必须调用**:

```markdown
**Skill 调用 - 请求审查**:
```
skill: requesting-code-review
prompt: 请审查 Task X.X [模块名称] 的代码，检查：
  - 代码质量 (命名、结构、注释)
  - 样式符合 DESIGN.md 规范
  - 功能完整性
  - SEO 优化 (Meta 标签、Schema) (如适用)
  - 可访问性 (ARIA、键盘导航) (如适用)
  - 响应式设计
```

**Skill 调用 - 接收审查**:
```
skill: receiving-code-review
prompt: 收到以下审查反馈：
  [审查反馈内容]
  
修复计划：
  1. [修复步骤 1]
  2. [修复步骤 2]
  ...
```
```

---

## 第一阶段：项目初始化 (Task 1-2)

### Task 1.1: 创建 Git 工作树分支

**Skill 调用**:
```
skill: using-git-worktrees
prompt: 在 C:\Users\ymlt\Desktop\3 目录创建 git worktree，分支名 feature/elec-distributor-website
```

**审查测试**: N/A (无代码审查)

---

### Task 1.2: 创建 checkpoints.md 文件

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 1.2 checkpoints.md 文件，检查：
  - 文件格式正确
  - 包含所有必需字段 (时间、状态、关键状态、日志、审查结果)
```

---

### Task 2.1: 创建项目目录结构

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 2.1 项目目录结构，检查：
  - 所有目录创建成功
  - .gitignore 配置正确 (output/, node_modules/, .DS_Store)
```

---

## 第二阶段：基础样式 (Task 3-4)

### Task 3.1: 创建全局样式文件 - CSS 变量

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 3.1 全局样式 CSS 变量，检查：
  - 代码质量：变量命名规范 (--primary-blue 等)
  - 样式规范：符合 DESIGN.md 第 2-6 章
  - 完整性：50+ 个 CSS 变量
```

**接收审查反馈**:
```
skill: receiving-code-review
prompt: 收到以下审查反馈：
  [审查员反馈内容]
  
修复计划：
  1. 修改变量命名
  2. 补充缺失的 CSS 变量
  3. 重新提交审查
```

---

### Task 3.2: 创建全局样式文件 - 基础重置

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 3.2 基础重置样式，检查：
  - 代码质量：选择器规范
  - 样式规范：符合 DESIGN.md
  - 功能测试：浏览器默认样式正确重置
```

---

### Task 3.3: 创建全局样式文件 - 排版系统

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 3.3 排版系统，检查：
  - 代码质量：字体大小符合 DESIGN.md
  - 样式规范：行高、字重正确
```

---

### Task 4.1: 创建响应式和工具类样式 - 断点

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 4.1 响应式断点，检查：
  - 代码质量：断点值正确 (767px, 1023px, 1200px)
  - 功能测试：响应式切换正常
```

---

### Task 4.2: 创建响应式和工具类样式 - 工具类

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 4.2 工具类，检查：
  - 代码质量：工具类命名规范
  - 完整性：覆盖常用工具类
```

---

### Task 4.3: 创建响应式和工具类样式 - 可访问性

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 4.3 可访问性样式，检查：
  - 代码质量：符合 WCAG AA 标准
  - 可访问性测试：键盘导航正常
```

---

## 第三阶段：核心组件 (Task 5-5E)

### Task 5.1: 创建导航栏组件 - HTML 结构

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5.1 导航栏 HTML 结构，检查：
  - 代码质量：HTML 语义化
  - 可访问性：aria-label 完整
```

---

### Task 5.2: 创建导航栏组件 - CSS 样式

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5.2 导航栏 CSS 样式，检查：
  - 代码质量：符合 DESIGN.md 第 8.1 节
  - 样式规范：响应式正常
  - 功能测试：桌面端/移动端菜单显示正确
```

**Playwright 截图验证**:
```
skill: requesting-code-review
prompt: 请使用 Playwright MCP 截图验证 Task 5.2 导航栏样式：
  - 桌面端 (1920px)
  - 平板端 (768px)
  - 移动端 (375px)
```

---

### Task 5.3: 创建导航栏组件 - JavaScript

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5.3 导航栏 JavaScript，检查：
  - 代码质量：事件监听正确
  - 功能测试：点击汉堡菜单展开/收起
```

---

### Task 5B.1: 创建页脚组件 - HTML 结构

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5B.1 页脚 HTML 结构，检查：
  - 代码质量：HTML 语义化
  - 完整性：4 列布局完整
```

---

### Task 5B.2: 创建页脚组件 - CSS 样式

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5B.2 页脚 CSS 样式，检查：
  - 代码质量：符合 DESIGN.md 第 16 节
  - 样式规范：响应式正常
  - 功能测试：桌面/平板/移动端布局正确
```

---

### Task 5C.1: 创建面包屑导航组件

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5C.1 面包屑导航，检查：
  - 代码质量：ARIA 标签完整 (aria-label, aria-current)
  - 样式规范：符合 DESIGN.md 第 8.5 节
  - 可访问性测试：键盘导航正常
```

---

### Task 5D.1: 创建右侧悬浮联系方式组件

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5D.1 悬浮联系方式，检查：
  - 代码质量：链接安全 (target="_blank" rel="noopener")
  - 样式规范：符合 DESIGN.md 第 16.10 节
  - 功能测试：点击跳转正确
```

---

### Task 5E.1: 创建 404 页面

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 5E.1 404 页面，检查：
  - 代码质量：HTML 语义化
  - 样式规范：符合 DESIGN.md 第 16.9 节
  - 功能测试：链接正确
```

**Playwright 截图验证**:
```
skill: requesting-code-review
prompt: 请使用 Playwright MCP 截图验证 Task 5E.1 404 页面
```

---

## 第四阶段：页面模板 (Task 6)

### Task 6.1: 创建首页 - HTML 结构

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 6.1 首页 HTML 结构，检查：
  - 代码质量：HTML 语义化
  - 完整性：5 个区块完整 (Hero Banner, Why Choose Us, Featured Brands, Latest News, Final CTA)
```

---

### Task 6.2: 创建首页 - CSS 样式

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 6.2 首页 CSS 样式，检查：
  - 代码质量：符合 DESIGN.md 第 9.1 节
  - 样式规范：响应式正常
  - Playwright 截图验证
```

---

### Task 6.3: 创建首页 - SEO 优化

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 6.3 首页 SEO 优化，检查：
  - SEO: Meta 标签完整 (Title, Description, Keywords, Open Graph)
  - 内容审查：关键词优化
```

---

## 第五阶段：品牌子目录网站 (Task 7)

### Task 7.1: 创建品牌 Tab 二级导航组件

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 7.1 品牌 Tab 二级导航，检查：
  - 代码质量：符合 PRD 4.3.7
  - 样式规范：符合 DESIGN.md 第 8.2 节
```

---

## 第六阶段：Node.js 生成脚本 (Task 20-21)

### Task 20.1: 创建 Node.js 生成脚本

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 20.1 Node.js 生成脚本，检查：
  - 代码质量：Node.js 最佳实践
  - 功能测试：脚本运行成功 (npm run generate:brand infineon)
```

**Skill 调用**:
```
skill: executing-plans
prompt: 创建 Node.js 批量生成脚本，使用 EJS 模板引擎
```

---

### Task 21.1: 创建 Infineon JSON 数据

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 21.1 Infineon JSON 数据，检查：
  - 数据审查：符合 PRD 第 8 章
  - 格式验证：JSON 格式正确
```

**Skill 调用**:
```
skill: dispatching-parallel-agents
prompt: 并行创建 5 个 JSON 数据文件 (brand, products, solutions, support, news)
```

---

## 第七阶段：集成测试 (Task 10-12)

### Task 10.1: Playwright 截图验证

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 10.1 Playwright 测试，检查：
  - 测试审查：测试用例完整
  - 功能测试：所有测试通过
```

**Skill 调用**:
```
skill: subagent-driven-development
prompt: 创建 Playwright 视觉回归测试，包含所有页面类型
```

---

### Task 11.1: 生成 sitemap.xml

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 11.1 sitemap.xml，检查：
  - 代码质量：符合 sitemap 标准
  - 完整性：包含所有页面
```

---

### Task 12.1: 运行完整验证

**审查测试**:
```
skill: requesting-code-review
prompt: 请审查 Task 12.1 完整验证，检查：
  - 完整性审查：所有文件存在
  - 功能测试：生成脚本运行成功
  - SEO 审查：Meta 标签完整
  - 测试：Playwright 全部通过
```

**Skill 调用**:
```
skill: verification-before-completion
prompt: 运行完整验证，检查所有文件、SEO、Playwright 测试
```

---

## 审查反馈处理流程

### 收到审查反馈后

1. **记录反馈**:
```
skill: receiving-code-review
prompt: 收到以下审查反馈：
  - 问题 1: [描述]
  - 问题 2: [描述]
  
修复计划：
  1. [修复步骤 1]
  2. [修复步骤 2]
```

2. **执行修复**:
   - 修改代码
   - 重新测试

3. **重新审查**:
```
skill: requesting-code-review
prompt: 请重新审查 Task X.X [模块名称]，已修复以下问题：
  - 问题 1: 已修复 [说明]
  - 问题 2: 已修复 [说明]
```

4. **记录检查点**:
   - 打开 checkpoints.md
   - 填写 Task X.X 检查点
   - 标记状态为 ✅

---

## Skill 调用统计

| Skill | 调用次数 | 调用时机 |
|-------|----------|----------|
| `using-git-worktrees` | 1 次 | Task 1.1 |
| `executing-plans` | 多次 | Task 2-25 |
| `subagent-driven-development` | 3 次 | Task 5, 10, 20 |
| `dispatching-parallel-agents` | 2 次 | Task 19, 21 |
| `requesting-code-review` | 25+ 次 | 每个 Task 完成后 |
| `receiving-code-review` | 多次 | 处理审查反馈 |
| `systematic-debugging` | 按需 | 遇到问题时 |
| `finishing-a-development-branch` | 1 次 | 所有任务完成后 |
| `verification-before-completion` | 1 次 | Task 12.1 |

---

## 总结

✅ **每个 Task 都集成了 `skill:requesting-code-review` 和 `skill:receiving-code-review` 调用**

- **审查测试**: 每个 Task 完成后必须调用 `skill: requesting-code-review`
- **接收反馈**: 收到审查反馈后调用 `skill: receiving-code-review`
- **修复流程**: 修复后重新调用 `skill: requesting-code-review`
- **记录检查点**: 审查通过后记录到 checkpoints.md

---

**文档结束**
