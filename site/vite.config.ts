import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import virtualTemplate from '../internals/unplugin-virtual-template/vite.ts'
import svgLoader from '../internals/vite-svg-loader/vite.ts'
import path from 'node:path'

const abs = (...paths: string[]): string => path.join(import.meta.dirname, ...paths)

export default defineConfig({
  tsconfig: abs('./tsconfig.vue.json'),
  define: {
    'process.env.TINY_MODE': JSON.stringify('pc'),
    'process.env.BUILD_TARGET': JSON.stringify('component')
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      'virtual:common/adapter/vue': abs('../src/common/adapter/vue3/index.ts'),
      'virtual:locale/vue': abs('../locale/src/vue3/index.ts'),
      '@opentiny/vue-theme/dark-theme-index.css': abs('../theme/src/dark-theme-index.less')
    }
  },
  plugins: [
    vueJsx(),
    virtualTemplate({
      include: ['../src/components/*/src/index.ts', '../src/components/*/src/index.vue']
    }),
    svgLoader({
      svgoConfig: {
        plugins: ['preset-default', 'prefixIds']
      }
    })
  ]
})
