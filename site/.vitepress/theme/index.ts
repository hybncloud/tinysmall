import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DemoBlock from './DemoBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme
