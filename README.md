# Earth Clone Site

克隆地球项目官网。

## 当前阶段

当前仓库处于**项目初始化前**状态，已准备好需求与交接材料，等待 OpenCode 开始实现。

## 技术路线

- Docusaurus
- TypeScript
- Giscus
- Markdown / MDX
- Vercel 部署
- 中文优先，预留 i18n

## 已准备材料

见 `planning/` 目录：

- `planning/PRD.md` — 正式版 PRD
- `planning/OPENCODE_BRIEF.md` — 交给 OpenCode 的开发任务说明书
- `planning/REPO_STRUCTURE.md` — 建议的 repo 目录结构

## 静态资源

- `static/img/earth-clone-poster.png` — 首页宣传海报图

## 约束

第一阶段：
- 不做自定义 CMS
- 不做自定义编辑器
- 不引入复杂后端
- 不改 Docusaurus 内核
- 不使用 PocketBase 作为第一期内容系统

## 下一步

由 OpenCode 完成：
1. 初始化 Docusaurus 项目
2. 实现首页 / 博客 / 知识库 / About
3. 接入 Giscus
4. 配置中文默认 + 多语言预留
5. 完成 README 与部署说明
