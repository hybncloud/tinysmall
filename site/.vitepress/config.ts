import { defineConfig } from 'vitepress'
import { docMenus, cmpMenus } from '../demos/pc/menus.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TinySmall',
  description: 'A Vue Components',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '首页', link: '/' },
      // { text: '指南', link: '/guides/envpreparation' },
      // { text: '组件', link: '/components/button' }
    ],

    sidebar: [
      ...docMenus.map((docGrpMenu) => ({
        text: docGrpMenu.label,
        items: docGrpMenu.children.map((docMenu) => ({
          text: `${docMenu.title}`,
          link: `/guides/${docMenu.key}`
        }))
      })),
      ...cmpMenus.map((cmpGrpMenu) => ({
        text: cmpGrpMenu.label,
        items: cmpGrpMenu.children.map((cmpMenu) => ({
          text: `${cmpMenu.nameCn} ${cmpMenu.name}`,
          link: `/components/${cmpMenu.key}`
        }))
      }))
    ],
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  srcExclude: ['./demos/**', './src/**']
})
