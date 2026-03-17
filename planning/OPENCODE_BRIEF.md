# 交给 OpenCode 的开发任务说明书 v2

你现在要继续迭代“克隆地球（Earth Clone）”项目官网的第二版。

## 一、背景

第一版已经完成：
- Docusaurus 站点结构
- 首页 / blog / docs / about
- 基础深色主题
- 部分占位资源与配置
- 站点已上线到 `https://earth.bearhub.chat`

但当前首页存在明显问题：
- 太像 AI 模板生成的网站
- 模板味重
- 卡片墙过多
- emoji 降低质感
- 品牌识别度不足
- 不够像“克隆地球项目官网”

## 二、总体目标

在现有第一版基础上，做第二轮视觉与结构改版：
- 更像项目官网
- 更像品牌首页
- 更有数字地球项目气质
- 更少 AI 味
- 更有设计感，但仍然克制

## 三、必须遵守的约束

### 必须遵守
- 基于现有 repo 继续改，不要重开新项目
- 使用 Docusaurus 现有机制，不要改框架内核
- 维持 blog / docs / about 架构
- 保持 TypeScript
- 保持 Markdown / MDX 内容流
- 保持可维护性
- 改完后必须本地 build 验证通过
- 改完后必须 git commit

### 明确禁止
- 不要引入 PocketBase 作为内容源
- 不要做 CMS
- 不要做编辑器
- 不要做复杂后端
- 不要大幅增加无意义动画
- 不要做 SaaS 营销页风格首页
- 不要再使用 emoji 作为模块图标

## 四、设计参考方向

### 1. 51Earth
- cinematic 品牌感
- 强主视觉
- 大留白
- 项目宣言式首页

### 2. blackshark.ai
- 技术平台叙事
- 更像 geospatial / infrastructure company
- 结构更像能力链路，而不是功能清单

### 3. 顶栏目标
- 顶栏薄、轻、固定、半透明
- 左品牌、右功能导航
- 克制、整齐、秩序感强

## 五、第二版改版要求

### 首页
- Hero 重构：左侧项目宣言，右侧海报图
- 项目说明区：从 feature cards 改成项目叙事
- 技术路线区：不用 emoji 卡片，改成工程化结构表达
- 最新内容区：保留，但更克制
- Roadmap 区：更有秩序

### 顶栏（重点）
- 固定顶部
- 半透明深色背景
- 轻微 blur
- 底部细边线
- 左侧品牌：logo + 克隆地球
- 导航建议：项目 / 知识库 / 博客 / 路线图 / 关于
- 右侧：GitHub / 主题切换 / 搜索（可选）

### 去模板化
必须减少：
- emoji
- 通用 AI 风渐变标题
- 平均化功能卡片墙
- 模板式 feature blocks

必须增加：
- 留白
- 排版层级
- 品牌节奏
- 工程感
- 地理空间 / 数字地球气质

## 六、已确认配置（直接接入）

### 主站域名
- `https://earth.bearhub.chat`

### GitHub 仓库
- `https://github.com/xiongxingplus/earth-clone-site`

### Giscus
- repo: `xiongxingplus/earth-clone-site`
- repoId: `R_kgDORpnvAQ`
- category: `Announcements`
- categoryId: `DIC_kwDORpnvAc4C4nmZ`
- mapping: `pathname`
- lang: `zh-CN`

### 资源素材
- 海报：`static/img/earth-clone-poster.png`
- Logo：`static/img/2026-03-18-00-26-earth-clone-logo.png`
- favicon 源图：`static/img/2026-03-18-00-26-earth-clone-favicon-master.png`
- 作者头像：`static/img/authors/2026-03-18-00-26-bear-author-avatar.png`

这些素材已经通过审核，直接接入。

## 七、输出要求

你需要完成：
1. 第二版首页改版
2. 顶栏改版
3. 接入真实 GitHub repo URL
4. 接入真实 Giscus 配置
5. 接入 logo / favicon / 作者头像
6. 保持 build 成功
7. git commit

完成后请总结：
- 改了哪些文件
- 解决了哪些“AI 模板味”问题
- 还有哪些待进一步设计优化点
