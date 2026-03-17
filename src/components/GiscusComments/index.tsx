import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

interface GiscusProps {
  term?: string;
}

export default function GiscusComments({ term }: GiscusProps): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem' }}>
      <Giscus
        repo="xiongxingplus/earth-clone-site"
        repoId="R_kgDORpnvAQ"
        category="Announcements"
        categoryId="DIC_kwDORpnvAc4C4nmZ"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark_tritanopia' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
