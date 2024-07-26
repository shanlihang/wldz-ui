import { defineConfig } from 'vitepress'
import { getSideBarList } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WLDZ-UI",
  description: "未来锻造-UI组件库",
  themeConfig: {
    logo:'/logo.svg',
    siteTitle: 'WLDZ-UI',
    search: {
      provider: 'local'
    }, 
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', items:[
          {text: '基础组件', link: '/base'},
          {text: '表单组件', link: '/form'},
          {text: '反馈组件', link: '/feedback'},
          {text: '展示组件', link: '/show'},
          {text: '其他组件', link: '/other'},
      ]},
      { text: '指南', link: '/guide' },
      { text: '版本记录', link: '/version' },
    ],

    sidebar: {
      '/base': getSideBarList('/base'),
      '/form': getSideBarList('/form'),
      '/feedback': getSideBarList('/feedback'),
      '/show': getSideBarList('/show'),
      '/other': getSideBarList('/other'),
      '/guide': getSideBarList('/guide'),
      '/version': getSideBarList('/version'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shanlihang' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present wldz-slh'
    }
  }
})
