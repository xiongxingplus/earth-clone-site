import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <div className="hero-content">
          <h1>克隆地球</h1>
          <p className="hero-subtitle">
            在数字世界中重构真实的地球。
            <br />
            基于开源地理空间数据与现代引擎技术，构建一个全尺寸、可流式加载的三维数字孪生底座。
          </p>
          <div className="hero-buttons">
            <Link className="button button--primary" to="/docs/intro">
              了解项目
            </Link>
            <a
              className="button button--secondary"
              href="https://github.com/xiongxingplus/earth-clone-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/img/earth-clone-poster.png"
            alt="克隆地球项目宣传海报"
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}

function NarrativeSection() {
  return (
    <div className="narrative-section">
      <h2>我们在做什么</h2>
      <div className="narrative-body">
        <p>
          克隆地球（Earth Clone）是一个开源的数字孪生实验项目。我们的目标是在浏览器或独立引擎中，一比一还原真实的地球表面形态。通过接入 OpenStreetMap、全球数字高程模型（DEM）等开放地理空间数据，我们试图打通从现实世界到虚拟空间的自动化管线。
        </p>
        <p>
          这不仅是一个渲染器的挑战，更是一个庞大数据的调度工程。我们采用了基于 Mercator 投影的四叉树（QuadTree）瓦片架构，实现了全球级别的流式加载机制。不论是巍峨的山脉、交织的路网，还是拔地而起的城市建筑，都能在用户视野中按需、无缝地动态生成与呈现。
        </p>
        <p>
          在这个高度商业化且封闭的赛道里，我们希望探索出一条完全开放、透明、可复现的技术路径。用代码重建我们脚下的土地，打造一个可扩展的数字行星基础框架。
        </p>
      </div>
    </div>
  );
}

interface TechItem {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'planned';
}

const techItems: TechItem[] = [
  {
    id: 'terrain',
    name: 'Terrain',
    description: '全球高程数据 · QuadTree 分块 · LOD 层级渲染',
    status: 'active',
  },
  {
    id: 'buildings',
    name: 'Buildings',
    description: 'OSM 建筑数据 · 三维模型生成 · 地形贴合',
    status: 'active',
  },
  {
    id: 'roads',
    name: 'Roads',
    description: '矢量路网解析 · 多级道路渲染',
    status: 'active',
  },
  {
    id: 'streaming',
    name: 'Streaming',
    description: '四叉树瓦片架构 · Mercator 投影 · 按需加载',
    status: 'active',
  },
  {
    id: 'future',
    name: 'Future',
    description: '水域 · 植被 · 动态交通 · 天气系统',
    status: 'planned',
  },
];

function TechSection() {
  return (
    <div className="section tech-section">
      <h2 className="section-title">技术路线</h2>
      <div className="tech-list">
        {techItems.map((item) => (
          <div className="tech-item" key={item.id}>
            <div className="tech-item-name">{item.name}</div>
            <div className="tech-item-desc">{item.description}</div>
            <div className={clsx('tech-item-status', item.status)}>
              {item.status === 'active' ? '开发中' : '规划中'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ContentItem {
  title: string;
  description: string;
  link: string;
}

const latestBlogPosts: ContentItem[] = [
  {
    title: '欢迎来到克隆地球',
    description: '项目正式启动，介绍我们的愿景与技术方向。',
    link: '/blog/welcome',
  },
  {
    title: '克隆地球技术路线图',
    description: '从地形到建筑，从道路到动态交通，一览项目全貌。',
    link: '/blog/earth-clone-roadmap',
  },
];

const latestDocs: ContentItem[] = [
  {
    title: '项目总览',
    description: '了解克隆地球的整体架构与核心概念。',
    link: '/docs/intro',
  },
  {
    title: '架构设计',
    description: '深入项目的技术架构与设计决策。',
    link: '/docs/architecture/overview',
  },
  {
    title: '地形系统',
    description: '全球地形渲染的技术方案与实现细节。',
    link: '/docs/terrain/intro',
  },
];

function LatestContentSection() {
  return (
    <div className="section">
      <h2 className="section-title">最新内容</h2>
      <div className="content-columns">
        <div className="content-col">
          <h3>博客</h3>
          <div className="content-list">
            {latestBlogPosts.map((post) => (
              <Link className="content-card" to={post.link} key={post.title}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="content-col">
          <h3>知识库</h3>
          <div className="content-list">
            {latestDocs.map((doc) => (
              <Link className="content-card" to={doc.link} key={doc.title}>
                <h4>{doc.title}</h4>
                <p>{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  current?: boolean;
}

const roadmapItems: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: '地形渲染',
    description: '全球高程数据接入，QuadTree 分块加载，基础 LOD 系统。',
  },
  {
    phase: 'Phase 2',
    title: '建筑与道路',
    description: 'OSM 数据解析，三维建筑生成，路网可视化。',
    current: true,
  },
  {
    phase: 'Phase 3',
    title: '水域与植被',
    description: '海洋湖泊渲染，植被覆盖生成，自然景观还原。',
  },
  {
    phase: 'Phase 4',
    title: '动态数据',
    description: '实时交通接入，动态天气系统，时间维度模拟。',
  },
];

function RoadmapSection() {
  return (
    <div className="section roadmap-section">
      <h2 className="section-title">路线图</h2>
      <div className="roadmap-list">
        {roadmapItems.map((item) => (
          <div className={clsx('roadmap-item', { current: item.current })} key={item.phase}>
            <h4>
              <span className="roadmap-phase">{item.phase}</span>
              {item.title}
              {item.current && (
                <span className="roadmap-current-badge">← 当前阶段</span>
              )}
            </h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="首页" description={siteConfig.tagline}>
      <main>
        <HeroSection />
        <NarrativeSection />
        <TechSection />
        <LatestContentSection />
        <RoadmapSection />
      </main>
    </Layout>
  );
}
