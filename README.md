# 克隆地球官网 (Earth Clone Site)

克隆地球项目官方网站，基于 Docusaurus 构建。

## 快速开始

### 环境要求

- Node.js >= 20.0
- npm >= 9

### 本地开发

```bash
npm install
npm start
```

浏览器会自动打开 `http://localhost:3000`。开发模式下支持热更新。

### 构建

```bash
npm run build
```

构建产物输出到 `build/` 目录。

### 本地预览构建产物

```bash
npm run build
npm run serve
```

## 部署到 Vercel

1. 在 [Vercel](https://vercel.com) 导入本仓库
2. Framework Preset 选择 **Docusaurus 2**
3. Build Command: `npm run build`
4. Output Directory: `build`
5. 点击 Deploy

也可以使用 Vercel CLI：

```bash
npx vercel
```

## 内容管理

### 新增博客文章

在 `blog/` 目录下创建 Markdown 文件：

```bash
blog/2026-03-20-my-new-post.md
```

文件头部添加 frontmatter：

```yaml
---
slug: my-new-post
title: 文章标题
authors: [earth-clone-team]
tags: [标签1, 标签2]
---

摘要内容...

<!-- truncate -->

正文内容...
```

作者信息配置在 `blog/authors.yml`。

### 新增知识库文章

在 `docs/` 对应分类目录下创建 Markdown 文件：

```
docs/terrain/my-new-doc.md
```

可用的分类目录：

| 目录 | 内容 |
|------|------|
| `docs/architecture/` | 架构设计 |
| `docs/terrain/` | 地形系统 |
| `docs/buildings/` | 建筑系统 |
| `docs/roads/` | 道路系统 |
| `docs/streaming/` | 流式加载 |
| `docs/data-pipeline/` | 数据流程 |
| `docs/references/` | 参考资料 |

知识库侧边栏使用自动生成，新增文件后会自动出现在导航中。

## 项目结构

```
earth-clone-site/
├── blog/                   # 博客文章
├── docs/                   # 知识库文档
├── src/
│   ├── components/         # React 组件
│   ├── css/custom.css      # 自定义主题样式
│   └── pages/              # 独立页面（首页、关于）
├── static/img/             # 静态资源
├── planning/               # 项目规划文档
├── docusaurus.config.ts    # 站点主配置
├── sidebars.ts             # 知识库侧边栏配置
└── package.json
```

## 待配置项

以下内容使用了占位符，上线前需替换：

- [ ] 主站域名 (`docusaurus.config.ts` 中的 `url`)
- [ ] GitHub 仓库地址（多处 `editUrl` 和导航链接）
- [ ] Logo 图片 (`static/img/logo.png`)
- [ ] Favicon (`static/favicon.ico`)
- [ ] Giscus 评论配置 (`src/components/GiscusComments/index.tsx`)
- [ ] OG 社交分享图 (`static/img/` 中的 `image` 配置)
- [ ] 作者头像 (`blog/authors.yml`)

搜索代码中的 `TODO` 可快速定位所有待替换位置。

## 技术栈

- [Docusaurus 3](https://docusaurus.io/)
- TypeScript
- React 19
- Giscus（评论，待配置）
- Vercel（部署目标）

## 规划文档

见 `planning/` 目录：

- `planning/PRD.md` — 正式版 PRD
- `planning/OPENCODE_BRIEF.md` — 开发任务说明书
- `planning/REPO_STRUCTURE.md` — 建议的 repo 目录结构
