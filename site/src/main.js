import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import '@unocss/reset/eric-meyer.css'

import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

// markdown文件内代码高亮
import 'prismjs/themes/prism.css'
import 'uno.css'

// 只使用markdown的亮色主题
import 'github-markdown-css/github-markdown.css'
import './assets/index.less'
import './style.css'

// 覆盖默认的github markdown样式
import './assets/custom-markdown.css'
import './assets/custom-block.less'
import './assets/md-preview.less'

import { i18n } from './i18n/index'
import { router } from './router'
import App from './App.vue'
import { appData } from './tools'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'
import tsPath from 'highlight.js/lib/languages/typescript'
import { getLocaleMode } from './tools/utils.js'
import '@opentiny/vue-theme/dark-theme-index.css'

// 检测 navigator.webdriver（自动化标记）,如果为 true 则说明当前环境是被自动化测试工具（如 Playwright）控制的
const isOpenPlaywright = navigator.webdriver

if (!isOpenPlaywright) {
  // 确保 Vite 能静态分析到文件
  const modules = import.meta.glob('@opentiny/vue-theme/responsive-index.css')
  Object.values(modules).forEach((loadModule) => loadModule())
}

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', html)
hljs.registerLanguage('ts', tsPath)

appData.lang = getLocaleMode()
i18n.global.locale = appData.lang

createApp(App)
.use(router)
.use(i18n)
.use(VxeUITable)
.use(createHead())
.use(app => {
  app.config.performance = true
})
.mount('#app')
