# 建议的 Repo 目录结构

```text
earth-clone-site/
├── blog/
│   ├── authors.yml
│   ├── 2026-03-17-welcome.md
│   └── 2026-03-17-earth-clone-roadmap.md
├── docs/
│   ├── intro.md
│   ├── architecture/
│   │   └── overview.md
│   ├── terrain/
│   │   └── intro.md
│   ├── buildings/
│   │   └── intro.md
│   ├── roads/
│   │   └── intro.md
│   ├── streaming/
│   │   └── intro.md
│   ├── data-pipeline/
│   │   └── intro.md
│   └── references/
│       └── intro.md
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── HomeFeatures/
│   │   ├── LatestPosts/
│   │   ├── LatestDocs/
│   │   └── Roadmap/
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       ├── index.tsx
│       └── about.tsx
├── static/
│   ├── img/
│   │   ├── earth-clone-poster.png
│   │   ├── logo.png
│   │   └── og-image.png
│   └── favicon.ico
├── docusaurus.config.ts
├── sidebars.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## 结构说明

### `blog/`
存放博客文章和作者信息。

### `docs/`
存放知识库内容，按专题分目录。

### `src/components/`
存放首页和通用 UI 组件，避免把页面写成一个大文件。

### `src/pages/`
存放独立页面，如首页和 About。

### `static/img/`
存放海报图、Logo、OG 图等静态资源。

### `docusaurus.config.ts`
站点主配置：标题、导航、主题、评论、i18n、SEO。

### `sidebars.ts`
知识库侧边栏结构。

## 命名建议

- repo 名：`earth-clone-site`
- 如果后面要区分前端官网与引擎项目，这个名字最清楚
