import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '克隆地球',
  tagline: '用数字技术，重建一颗真实的地球',
  favicon: 'img/2026-03-18-00-26-earth-clone-favicon-master.png',

  future: {
    v4: true,
  },

  url: 'https://earth.bearhub.chat',
  baseUrl: '/',

  organizationName: 'xiongxingplus',
  projectName: 'earth-clone-site',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/xiongxingplus/earth-clone-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/xiongxingplus/earth-clone-site/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/earth-clone-poster.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '克隆地球',
      logo: {
        alt: '克隆地球 Logo',
        src: 'img/2026-03-18-00-26-earth-clone-logo.png',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeSidebar',
          position: 'left',
          label: '知识库',
        },
        { to: '/blog', label: '博客', position: 'left' },
        { to: '/about', label: '关于', position: 'left' },
        {
          href: 'https://github.com/xiongxingplus/earth-clone-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { label: '知识库', to: '/docs/intro' },
        { label: '博客', to: '/blog' },
        { label: '关于', to: '/about' },
        { label: 'RSS', href: 'https://earth.bearhub.chat/blog/rss.xml' },
        {
          label: 'GitHub',
          href: 'https://github.com/xiongxingplus/earth-clone-site',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 克隆地球项目组`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
