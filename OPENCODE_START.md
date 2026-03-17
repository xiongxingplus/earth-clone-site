# OpenCode 启动说明

请先阅读以下文件：

1. `planning/PRD.md`
2. `planning/OPENCODE_BRIEF.md`
3. `planning/REPO_STRUCTURE.md`

## 目标

基于 Docusaurus 搭建“克隆地球”项目官网，包含：
- 首页
- 博客
- 知识库
- About 页面
- Giscus 评论
- 中文默认，预留 i18n

## 关键要求

- 首页必须自定义，不能保持默认模板味道
- 使用 `static/img/earth-clone-poster.png` 作为首页核心视觉之一
- 博客与知识库分开
- 使用 TypeScript
- 不做 CMS，不做自定义编辑器，不接复杂后端
- 不修改 Docusaurus 框架源码

## 推荐执行顺序

1. 给出实现方案与目录结构
2. 初始化 Docusaurus classic (TypeScript)
3. 改造首页
4. 搭 blog / docs / about
5. 预留 Giscus 配置
6. 完善 README

## 待确认项

如果遇到以下信息缺失，请用占位符并集中列出：
- 主站域名（bearhub.chat 或 www.bearhub.chat）
- Giscus discussions 仓库 / 分类
- logo / favicon
- GitHub 仓库地址
- 首页副标题最终文案
