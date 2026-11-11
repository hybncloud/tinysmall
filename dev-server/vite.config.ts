import { defineConfig } from 'vite'
import vue from 'unplugin-vue/vite'
import vueJsx from 'unplugin-vue-jsx/vite'
import virtualTemplate from '../internals/unplugin-virtual-template/vite.ts'
import svgLoader from '../internals/vite-svg-loader/vite.ts'
import markdown from 'unplugin-vue-markdown/vite'
import unocss from 'unocss/vite'
import { rules, shortcuts, variants } from './vite-plugins/vite-plugin-uno-preset.js'
import path from 'node:path'

const abs = (...paths: string[]): string => path.join(import.meta.dirname, ...paths)

export default defineConfig({
  tsconfig: abs('../tsconfig.vue.json'),
  define: {
    'process.env.TINY_MODE': JSON.stringify('pc'),
    'process.env.BUILD_TARGET': JSON.stringify('component')
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      'virtual:common/adapter/vue': abs('../src/common/adapter/vue3/index.ts'),
      'virtual:locale/vue': abs('../locale/src/vue3/index.ts')
    }
  },
  publicDir: '../site/public',
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx(),
    virtualTemplate({
      include: ['./src/components/*/src/index.ts', './src/components/*/src/index.vue']
    }),
    svgLoader({
      svgoConfig: {
        plugins: ['preset-default', 'prefixIds']
      }
    }),
    markdown({
      markdownOptions: {
        html: true,
        linkify: true,
        typographer: true
      }
    }),
    unocss({
      presets: [],
      rules,
      shortcuts,
      variants,
      safelist: [
        ...Array.from({ length: 24 }, (_, i) => `c-rand${i + 1}`),
        ...Array.from({ length: 24 }, (_, i) => `bg-rand${i + 1}`)
      ]
    })
  ]
})
