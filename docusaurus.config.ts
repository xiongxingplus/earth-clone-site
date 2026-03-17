import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '克隆地球',
  tagline: '用数字技术，重建一颗真实的地球',
  // TODO: Replace with actual favicon when ready
  favicon: 'favicon.ico',

  future: {
    v4: true,
  },

  // TODO: Replace with actual production domain if changed later
  url: 'https://www.earth.bearhub.chat',
  baseUrl: '/',

  // TODO: Replace with actual GitHub org/repo
  organizationName: 'earth-clone',
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
    // Future: add 'en' to locales array to enable English
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // TODO: Replace with actual GitHub repo URL
          editUrl: 'https://github.com/earth-clone/earth-clone-site/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // TODO: Replace with actual GitHub repo URL
          editUrl: 'https://github.com/earth-clone/earth-clone-site/edit/main/',
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
      // TODO: Replace with actual logo file
      logo: {
        alt: '克隆地球 Logo',
        src: 'img/logo.png',
      },
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
          // TODO: Replace with actual GitHub repo URL
          href: 'https://github.com/earth-clone/earth-clone-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '内容',
          items: [
            { label: '知识库', to: '/docs/intro' },
            { label: '博客', to: '/blog' },
          ],
        },
        {
          title: '项目',
          items: [
            { label: '关于', to: '/about' },
            {
              // TODO: Replace with actual GitHub URL
              label: 'GitHub',
              href: 'https://github.com/earth-clone/earth-clone-site',
            },
          ],
        },
        {
          title: '更多',
          items: [
            { label: 'RSS', href: 'https://www.earth.bearhub.chat/blog/rss.xml' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 克隆地球项目组. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
