# 克隆地球官网 PRD v2

## 1. 项目定位

这是“克隆地球（Earth Clone）”项目的官方网站。

网站承担三类内容：

1. **项目官网**
   - 项目愿景
   - 技术路线
   - 当前进展
   - 品牌视觉与项目宣言
2. **技术博客**
   - 开发日志
   - 技术分析
   - 调研笔记
   - 决策说明
3. **知识库**
   - 稳定沉淀的技术文档
   - 地形 / 建筑 / 道路 / 流式加载 / 数据流程等专题

## 2. 第二版目标

第一版已经完成基础结构，但当前问题是：
- 整体界面“太 AI 生成”
- 模板味偏重
- 卡片墙太平均
- emoji 过多，质感不足
- 缺少真正的项目品牌感与工程气质

第二版目标：
- 强化首页品牌感
- 减少模板味与卡片味
- 提升视觉秩序与设计感
- 让首页更像“项目宣言页”
- 顶栏更克制、更成熟、更像长期维护的网站壳子

## 3. 参考方向

### 3.1 51Earth
- cinematic 品牌感
- 强主视觉
- 留白充足
- 页面像品牌海报 / 项目宣言

### 3.2 blackshark.ai
- 技术平台叙事
- 基础设施 / world model / geospatial platform 气质
- 少堆功能，多讲结构与能力关系
- 更有硬核技术公司的表达方式

### 3.3 顶栏目标
- 顶栏轻、薄、固定、半透明
- 左侧品牌，右侧功能型导航
- 整体秩序感强，不抢 Hero 风头

## 4. 技术方案

- 框架：Docusaurus
- 语言：TypeScript
- 内容管理：Markdown / MDX + Git
- 评论系统：Giscus
- 默认语言：中文
- 未来预留：i18n
- 当前线上域名：`https://earth.bearhub.chat`
- 当前 GitHub 仓库：`https://github.com/xiongxingplus/earth-clone-site`

## 5. 首页改版要求

### Hero 区
- 左侧：项目标题 / 项目宣言 / 副标题 / CTA
- 右侧：宣传海报图
- 形成真正的品牌首页首屏

### 项目说明区
不用普通 feature cards 堆“我们做什么”，改成项目宣言 / 项目叙事。

### 技术路线区
不要再用 emoji + 卡片的模板式展示。
更像工程结构表达：Streaming / Terrain / Buildings / Roads / Future。

### 最新内容区
博客和知识库仍然分开，但视觉更收敛。

### Roadmap 区
保留，但更有秩序。

## 6. 顶栏改版要求

- 固定顶部
- 高度较薄
- 半透明深色背景
- 轻微 blur
- 底部细分隔线
- 左侧：logo + 克隆地球
- 主导航建议：项目 / 知识库 / 博客 / 路线图 / 关于
- 右侧：GitHub / 主题切换 / 搜索（可选）

## 7. 已确认配置

### Giscus
- repo: `xiongxingplus/earth-clone-site`
- repoId: `R_kgDORpnvAQ`
- category: `Announcements`
- categoryId: `DIC_kwDORpnvAc4C4nmZ`
- mapping: `pathname`
- lang: `zh-CN`

### 素材
- 海报：`static/img/earth-clone-poster.png`
- Logo：`static/img/2026-03-18-00-26-earth-clone-logo.png`
- favicon 源图：`static/img/2026-03-18-00-26-earth-clone-favicon-master.png`
- 作者头像：`static/img/authors/2026-03-18-00-26-bear-author-avatar.png`

## 8. 第二版交付范围

### 必做
- 首页视觉重构
- 顶栏重构
- 去 emoji
- 减少卡片墙模板感
- 接入真实 GitHub repo URL
- 接入真实 Giscus 配置
- 接入 logo / favicon / 作者头像
- 保持现有 blog / docs / about 结构

### 不做
- 自定义 CMS
- 自定义编辑器
- 复杂后端
- 大型 3D 交互效果
- 推翻 Docusaurus 框架
