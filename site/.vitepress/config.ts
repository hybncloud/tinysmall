import { defineConfig } from 'vitepress'
import { docMenus, cmpMenus } from '../demos/pc/menus.js'

export default defineConfig({
  title: 'TinySmall',
  description: '由 opentiny/tiny-vue 删减改造而来。',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guides/installation', activeMatch: '/guides/' },
      { text: '组件', link: '/components/button', activeMatch: '/components/' }
    ],
    sidebar: {
      '/guides/': docMenus.map((docGrpMenu) => ({
        text: docGrpMenu.label,
        items: docGrpMenu.children.map((docMenu) => ({
          text: `${docMenu.title}`,
          link: `/guides/${docMenu.key}`
        }))
      })),
      '/components/': cmpMenus.map((cmpGrpMenu) => ({
        text: cmpGrpMenu.label,
        items: cmpGrpMenu.children.map((cmpMenu) => ({
          text: `${cmpMenu.nameCn} ${cmpMenu.name}`,
          link: `/components/${cmpMenu.key}`
        }))
      }))
    },
    outline: {
      level: 'deep'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/hybncloud/tinysmall' }]
  },
  srcExclude: ['./demos/pc/app/*/webdoc/*.md'],
  rewrites: {
    'demos/pc/webdoc/:slug.md': 'guides/:slug.md'
  }
})
