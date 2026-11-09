import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DemoDesc from './DemoDesc.vue'
import DemoBlock from './DemoBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('DemoDesc', DemoDesc)
    ctx.app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme
