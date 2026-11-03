import path from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from 'unplugin-vue/rolldown'
import vueJsx from 'unplugin-vue-jsx/rolldown'
import virtualTemplate from './internals/unplugin-virtual-template/rolldown.ts'
import svgLoader from './internals/vite-svg-loader/rolldown.ts'

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
      'virtual:common/adapter/vue': abs('./src/common/adapter/vue3/index.ts'),
      'virtual:locale/vue': abs('./locale/src/vue3/index.ts')
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    virtualTemplate({
      include: ['./src/components/*/src/index.ts', './src/components/*/src/index.vue']
    }),
    svgLoader({
      svgoConfig: {
        plugins: ['preset-default', 'prefixIds']
      }
    })
  ],
  optimizeDeps: {
    disabled: true
  },
  test: {
    name: 'unit',
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['./site/**', '**/node_modules/**', '**/.git/**'],
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      exclude: ['./site/**']
    }
  }
})
