import React from 'react';
import Layout from '@theme/Layout';

export default function About(): React.JSX.Element {
  return (
    <Layout title="关于" description="关于克隆地球项目">
      <main className="about-page">
        <h1>关于克隆地球</h1>

        <section>
          <h2>项目背景</h2>
          <p>
            克隆地球（Earth Clone）是一个致力于构建实时在线数字地球的开源探索项目。
            我们希望利用公开地理数据与现代游戏引擎技术，在数字世界中还原一颗真实的地球——
            包括地形、建筑、道路、水域、植被乃至动态交通。
          </p>
          <p>
            不同于封闭的商业数字地球产品，我们追求的是一条可复现、可扩展的技术路径，
            让更多人能够参与到数字地球的构建中来。
          </p>
        </section>

        <section>
          <h2>技术方向</h2>
          <ul>
            <li>引擎：Unreal Engine 5（仅作渲染器）</li>
            <li>架构：自研 QuadTree 流式加载系统</li>
            <li>投影：Mercator + 四叉树瓦片</li>
            <li>数据：OpenStreetMap / 公开高程数据 / 遥感数据</li>
            <li>前端官网：Docusaurus + TypeScript</li>
          </ul>
        </section>

        <section>
          <h2>当前阶段</h2>
          <p>
            项目目前处于第二阶段，已完成全球地形渲染的基础功能，
            正在推进建筑系统与道路系统的开发。
            同时，项目官网（即本站）已上线，用于持续输出技术博客与知识库文档。
          </p>
        </section>

        <section>
          <h2>联系我们</h2>
          <ul>
            <li>
              GitHub：
              <a href="https://github.com/xiongxingplus/earth-clone-site" target="_blank" rel="noopener noreferrer">
                xiongxingplus/earth-clone-site
              </a>
            </li>
            <li>如有任何问题或合作意向，欢迎通过 GitHub Issues 联系我们。</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
