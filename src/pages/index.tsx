import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero-section">
      <h1>{siteConfig.title}</h1>
      <p className="hero-subtitle">{siteConfig.tagline}</p>
      <div className="hero-buttons">
        <Link className="button button--primary button--lg" to="/docs/intro">
          了解项目
        </Link>
        <Link className="button button--outline button--lg" to="/blog">
          阅读博客
        </Link>
        <Link className="button button--outline button--lg" to="/docs/intro">
          查看知识库
        </Link>
      </div>
    </div>
  );
}

function PosterSection() {
  return (
    <div className="poster-section">
      <img
        src="/img/earth-clone-poster.png"
        alt="克隆地球项目宣传海报"
        loading="eager"
      />
    </div>
  );
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  status: 'active' | 'planned';
}

const features: FeatureItem[] = [
  {
    icon: '\u{1F3D4}',
    title: '地形系统',
    description: '基于真实高程数据的全球地形渲染，支持 LOD 与四叉树分块加载。',
    status: 'active',
  },
  {
    icon: '\u{1F3D7}',
    title: '建筑系统',
    description: '接入 OpenStreetMap 建筑数据，生成三维建筑模型并放置于地形之上。',
    status: 'active',
  },
  {
    icon: '\u{1F6E3}',
    title: '道路系统',
    description: '矢量道路数据解析与路网渲染，支持不同等级道路的可视化。',
    status: 'active',
  },
  {
    icon: '\u{1F30A}',
    title: '水域渲染',
    description: '海洋、湖泊、河流的识别与渲染，提升地球表面的真实感。',
    status: 'planned',
  },
  {
    icon: '\u{1F333}',
    title: '植被系统',
    description: '基于遥感数据生成植被覆盖，还原不同地区的自然景观。',
    status: 'planned',
  },
  {
    icon: '\u{1F697}',
    title: '动态交通',
    description: '接入实时交通数据，在数字地球上模拟真实车流与交通态势。',
    status: 'planned',
  },
];

function FeaturesSection() {
  return (
    <div className="section">
      <h2 className="section-title">核心模块</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <span className={clsx('feature-status', feature.status)}>
              {feature.status === 'active' ? '开发中' : '规划中'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="section">
      <h2 className="section-title">关于项目</h2>
      <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div className="feature-card">
          <h3>我们要做什么</h3>
          <p>
            构建一个实时在线版的数字地球，以真实地理数据为基础，
            在浏览器或引擎中还原地球的地形、建筑、道路、水域与植被。
          </p>
        </div>
        <div className="feature-card">
          <h3>为什么值得做</h3>
          <p>
            现有数字地球方案多为封闭商业产品。我们希望用开放数据和现代引擎技术，
            探索一条可复现、可扩展的技术路径。
          </p>
        </div>
        <div className="feature-card">
          <h3>技术路线</h3>
          <p>
            引擎选用 Unreal Engine 5（仅作渲染器），自研 QuadTree 流式加载系统，
            采用 Mercator 投影与四叉树瓦片架构。
          </p>
        </div>
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem', opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            博客
          </h3>
          <div className="latest-grid" style={{ gridTemplateColumns: '1fr' }}>
            {latestBlogPosts.map((post) => (
              <Link className="latest-card" to={post.link} key={post.title}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem', opacity: 0.7, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            知识库
          </h3>
          <div className="latest-grid" style={{ gridTemplateColumns: '1fr' }}>
            {latestDocs.map((doc) => (
              <Link className="latest-card" to={doc.link} key={doc.title}>
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
    <div className="roadmap-section">
      <h2 className="section-title">路线图</h2>
      <div className="roadmap-list">
        {roadmapItems.map((item) => (
          <div className={clsx('roadmap-item', { current: item.current })} key={item.phase}>
            <h4>
              <span style={{ opacity: 0.5, marginRight: '0.5rem' }}>{item.phase}</span>
              {item.title}
              {item.current && (
                <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#22d3ee' }}>
                  ← 当前阶段
                </span>
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
        <PosterSection />
        <IntroSection />
        <FeaturesSection />
        <LatestContentSection />
        <RoadmapSection />
      </main>
    </Layout>
  );
}
