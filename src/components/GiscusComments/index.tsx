import React from 'react';

/*
  Giscus 评论组件占位

  启用步骤：
  1. 在目标 GitHub 仓库启用 Discussions
  2. 安装 Giscus GitHub App: https://github.com/apps/giscus
  3. 到 https://giscus.app/zh-CN 获取配置参数
  4. 安装依赖: npm install @giscus/react
  5. 取消下方注释并填入实际参数
*/

interface GiscusProps {
  term?: string;
}

export default function GiscusComments({ term }: GiscusProps): React.JSX.Element {
  return (
    <div style={{ marginTop: '2rem' }}>
      <hr />
      <p style={{ opacity: 0.5, textAlign: 'center', fontSize: '0.9rem' }}>
        评论功能即将上线（Giscus）
      </p>
      {/*
        <Giscus
          repo="TODO_OWNER/TODO_REPO"
          repoId="TODO_REPO_ID"
          category="Announcements"
          categoryId="TODO_CATEGORY_ID"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark_tritanopia"
          lang="zh-CN"
          loading="lazy"
        />
      */}
    </div>
  );
}
