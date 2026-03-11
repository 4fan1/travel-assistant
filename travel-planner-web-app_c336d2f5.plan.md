---
name: travel-planner-web-app
overview: 开发一个支持首页推荐和目的地详情页的旅行规划类响应式网页，从成都出发提供交通、游玩、餐饮和酒店等信息。
todos:
  - id: init-project
    content: 使用 Vite 初始化 React + TS + Tailwind 的前端项目，并配置基础依赖和入口结构
    status: completed
  - id: define-data-models
    content: 在 types 和 data 目录中定义目的地及其交通、游玩、餐饮、酒店等静态数据结构与示例数据
    status: completed
  - id: build-home-page
    content: 实现首页布局与目的地列表卡片组件，支持按推荐热度排序和从首页跳转到详情页
    status: completed
  - id: build-detail-page
    content: 实现目的地详情页及四大信息模块组件（交通、游玩规划、餐饮、酒店），并提供返回首页按钮
    status: completed
  - id: responsive-and-style
    content: 完善整体视觉风格与响应式布局，优化 PC 与移动端体验
    status: in_progress
isProject: false
---

## 总体目标

- **目标**: 设计并实现一个简洁清新的旅行规划类网页（PC + 移动端自适应），包含首页目的地推荐列表和多目的地详情页，从成都出发提供完整出行信息。
- **推荐技术栈**: 使用 **React + Vite + TypeScript + Tailwind CSS** 实现前端单页应用，短期内数据保存在前端静态 JSON / 常量中，后续可平滑迁移到后端 API。

## 信息架构与路由设计

- **页面结构**
  - **首页 `/`**:
    - 顶部导航栏（LOGO / 标题 + 简要说明 + 返回首页链接）。
    - 当前季节最佳旅行目的地推荐列表（按推荐热度排序）。
    - 每个目的地以卡片形式展示：目的地名称、标签（季节 /玩法）、推荐热度、简短亮点描述、图片（800×500 等比缩放）。
  - **详情页 `/destinations/:id`**:
    - 顶部返回首页按钮（始终可见）。
    - 目的地大图 + 标题 + 简要概览（适合季节、适合人群等）。
    - 四大模块：交通方式、游玩规划、餐饮推荐、酒店选择。
- **路由方案**
  - 使用 `react-router` 实现前端路由：
    - `/` → 首页组件 `HomePage`。
    - `/destinations/:id` → 详情组件 `DestinationDetailPage`。
  - 404 简易兜底页（非必需，可简单展示“目的地不存在，点击返回首页”）。

## 数据建模与静态数据设计

- **核心数据结构**（以 `src/data/destinations.ts` 为例）
  - **目的地基础信息**:
    - `id`: 字符串，用于路由参数。
    - `name`: 目的地名称。
    - `season`: 适合季节 / 月份标签。
    - `tags`: 标签数组（如“亲子”“海岛”“徒步”等）。
    - `heatScore`: 推荐热度（数值，用于排序）。
    - `summary`: 一句话概览（强调“从成都出发”的特点）。
    - `heroImage`: 封面图 URL。
  - **交通信息 `transportOptions`**（数组）:
    - `type`: `'plane' | 'highspeed' | 'self_drive' | 'bus'`（前端配图标和中文文案：飞机 / 高铁 / 自驾 / 大巴）。
    - `duration`: 文本（如 `约 2.5 小时` 或 `单程约 6-7 小时`）。
    - `cost`: 文本或区间（如 `单程 ¥500-800`）。
    - `pros`: 优点列表。
    - `cons`: 缺点列表。
  - **游玩规划 `tripPlans`**（数组）:
    - `daysType`: `'short' | 'regular' | 'deep'`（短途 / 常规 / 深度）。
    - `daysLabel`: 文本（如 `短途 2 天`、`常规 4 天`、`深度 7 天`）。
    - `highlights`: 核心亮点列表（可包含每天或半天的主要活动摘要）。
  - **餐饮推荐 `foodRecommendations`**（按类别分类）:
    - 顶层结构：`{ localSpecialties: [...], popularSnacks: [...], valueRestaurants: [...] }`。
    - 单项结构：`{ name, avgPrice, reason, area? }`，其中 `avgPrice` 为 `¥50-80/人` 这样的文本。
  - **酒店选择 `hotels`**（按等级分类）:
    - 顶层结构：`{ budget: [...], midRange: [...], highEnd: [...] }`。
    - 单项结构：`{ name, priceRange, location, advantages }`。
- **数据来源策略**
  - 首版使用 **静态 TypeScript 常量** 放在 `src/data` 目录，方便维护和类型安全。
  - 未来如需后端，可将这些结构直接平移为 API 返回的 JSON，无需改动前端展示逻辑。

## 组件划分与职责

- **布局与基础组件**
  - `AppLayout`:
    - 负责通用页眉、页脚和主要内容容器。
    - 页眉包含站点标题、简短 Slogan（如“从成都出发的季节旅行指南”）、返回首页链接。
  - `SeasonBadge`:
    - 展示当前季节标签（如“春季精选”、“夏季清凉”），可在首页顶部显著位置显示。
- **首页相关组件**
  - `HomePage`:
    - 从 `destinations` 数据源获取当前季节目的地列表（可以通过 `season` 字段筛选，或简单先展示全部按 `heatScore` 排序）。
    - 显示介绍文案，鼓励用户选择目的地。
    - 渲染 `DestinationCard` 列表。
  - `DestinationCard`:
    - 接收单个目的地数据，展示：图片、目的地名称、标签（季节 / 分类）、热度（可用简单图标或“热度 9.2”数值）、简要亮点。
    - 整个卡片可点击（包括图片与文字区域），点击后通过路由跳转到详情页。
    - 图片在桌面端显示接近 800×500 比例，在移动端宽度 100%，高度按比例自适应。
- **详情页相关组件**
  - `DestinationDetailPage`:
    - 根据 `id` 从路由参数中获取目的地数据；若找不到则展示 404 提示和返回首页按钮。
    - 顶部展示目的地大图、名称、概览文字和主要标签。
    - 嵌套以下四个模块组件。
  - `TransportSection`:
    - 按“飞机 / 高铁 / 自驾 / 大巴”四类渲染。
    - 每种方式显示：耗时、费用、优点、缺点，采用卡片或列表形式。
  - `TripPlanSection`:
    - 展示 1-3 种不同时长方案（短途 2 天、常规 4 天、深度 7 天等）。
    - 可使用标签切换或竖向分组卡片，重点突出每个方案的核心亮点。
  - `FoodSection`:
    - 按类别分三大块：当地特色菜 / 人气小吃 / 高性价比餐厅。
    - 每个条目显示：名称、人均消费、推荐理由（简短文案），可附加区域信息（如“近步行街”）。
  - `HotelSection`:
    - 按经济型 / 中端 / 高端分栏或分块展示。
    - 每家酒店显示：价格区间、地理位置（简要文字）、核心优势（如近景区 / 含早餐 / 停车方便等）。
  - `BackToHomeButton`:
    - 固定在详情页顶部或右下角悬浮位置，在移动端考虑使用底部大按钮，便于返回首页。

## UI 风格与响应式设计

- **视觉风格**
  - 主色：清新蓝/绿色系，搭配大量留白和浅灰背景，整体简洁清新。
  - 使用 Tailwind CSS 快速搭建：圆角卡片、阴影、悬停放大效果、渐进式过渡动画。
  - 图片统一 16:10 视图比例（接近 800×500），使用 `object-cover` 兼容不同尺寸源图。
- **布局与响应式**
  - 首页卡片布局：
    - 桌面端：3 列或 4 列自适应网格（如 `grid-cols-3` / `grid-cols-4`）。
    - 平板端：2 列。
    - 手机端：1 列，全宽卡片。
  - 详情页布局：
    - 桌面端：
      - 顶部为大图 + 标题区。
      - 下方采用两列布局：左侧为交通 + 游玩规划，右侧为餐饮 + 酒店（或垂直堆叠模块，保持阅读流畅）。
    - 移动端：
      - 所有模块竖向堆叠，内边距适当增大，字体稍大。
  - 交互细节：
    - 卡片 hover 时图片略微放大、阴影增强，增加“可点击”感。
    - 返回首页按钮在移动端使用全宽大按钮，点击区域充足。

## 状态管理与逻辑

- **状态管理**
  - 由于数据静态且简单，前期不需要引入复杂状态管理库。
  - 使用 React 的 `useState` / `useMemo` / `useEffect` 即可，或简单通过 props 传递数据。
  - 筛选、排序逻辑在首页局部实现（按 `heatScore` 降序排序）。
- **当前季节逻辑**
  - 简化方案：
    - 在代码中根据当前月份推导季节，得到 `currentSeason` 字符串（如 `spring` / `summer` / `autumn` / `winter`）。
    - 目的地数据中包含 `bestSeasons: Season[]` 字段，用于筛选是否属于“当前季节最佳”。
  - 高级方案（可选）：
    - 在首页加入季节切换 Tab，让用户手动切换“春 / 夏 / 秋 / 冬”查看不同季节推荐。

## 开发步骤拆解

- **步骤 1：项目初始化**
  - 使用 Vite 创建 React + TypeScript 项目，例如：`npm create vite@latest` → 选择 React + TS。
  - 安装依赖：`react-router-dom`、`tailwindcss`、`postcss`、`autoprefixer` 等。
  - 按 Tailwind 官方文档配置 `tailwind.config.cjs` 和入口样式文件。
- **步骤 2：基础结构与路由搭建**
  - 创建 `AppLayout`，在其中放置顶栏和容器。
  - 配置 `BrowserRouter`、`Routes`、`Route` 组件，对接 `HomePage` 与 `DestinationDetailPage`。
  - 实现一个简单的 404 页或兜底处理逻辑。
- **步骤 3：数据模型与静态数据**
  - 在 `src/types` 中定义 TypeScript 接口（如 `Destination`, `TransportOption`, `TripPlan`, `FoodItem`, `HotelItem` 等）。
  - 在 `src/data/destinations.ts` 中根据接口定义几个示例目的地（如 丽江、稻城亚丁、重庆 等），并写入从成都出发的交通、游玩、餐饮、酒店数据。
- **步骤 4：首页 UI 与交互**
  - 实现 `DestinationCard` 组件，根据传入数据渲染图片和文本。
  - 在 `HomePage` 中：
    - 导入 `destinations` 数据。
    - 按当前季节和 `heatScore` 排序、筛选。
    - 渲染网格卡片，并为卡片绑定点击跳转路由。
- **步骤 5：详情页 UI 与数据展示**
  - 在 `DestinationDetailPage` 中：
    - 从路由参数获取 `id`，在数据源中查找对应目的地。
    - 找不到则显示“目的地不存在”和返回首页按钮。
    - 找到则依次渲染 `TransportSection`、`TripPlanSection`、`FoodSection`、`HotelSection`。
  - 在每个 Section 中以表格或卡片形式呈现信息，突显“耗时 / 费用 / 优缺点”“亮点”“人均消费”“价格区间”等关键字段。
- **步骤 6：响应式与视觉优化**
  - 调整 Tailwind 样式使页面在 PC 和手机上都美观：
    - 控制最大宽度、内边距、字体大小、行间距。
    - 为图片、卡片、按钮添加合适的 hover / active 效果。
  - 确保返回首页按钮在两端体验良好。
- **步骤 7：代码整理与扩展预留**
  - 抽离公共类型、常量，整理目录结构：
    - `src/components/layout`、`src/components/home`、`src/components/detail`、`src/data`、`src/types`。
  - 在数据模型中预留可扩展字段（如评分、经纬度），为后续接入地图、搜索或后端做准备。

## 后续可选增强方向

- **搜索与筛选**: 在首页增加搜索框、目的地类型筛选（如海岛/山地/古镇等）。
- **收藏与对比**: 支持用户收藏目的地或对比不同目的地的交通和费用。
- **后端服务**: 未来可使用 Node.js + Express / NestJS 搭建简单 API，将静态数据迁移到数据库中。
- **SEO & 分享**: 如果迁移到 Next.js，可做服务端渲染、社交分享卡片等增强。

