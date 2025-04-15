import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "ninesun.site",
  description: "ninesun project",
  head: [
    ['script',{defer: '',async: '',src: 'https://cn.vercount.one/js'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '访问数据', link: '/访问数据' },
         
        ]
      },
      {
        text: 'EVM文档',
        items: [
          { text: 'POS质押池搭建', link: '/Conflux/cfx POS质押池搭建' }
        
        ]
      },
      {
        text: '运维',
        items: [
          { text: '运维vitepress', link: '/opervite/运维vitepress' },
         
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
