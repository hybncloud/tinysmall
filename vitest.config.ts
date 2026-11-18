import path from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from 'unplugin-vue/rolldown'
import vueJsx from 'unplugin-vue-jsx/rolldown'
import svgLoader from './internals/vite-svg-loader/rolldown.ts'

const abs = (...paths: string[]): string => path.join(import.meta.dirname, ...paths)

export default defineConfig({
  tsconfig: abs('./tsconfig.vue.json'),
  define: {
    'process.env.TINY_MODE': JSON.stringify('pc'),
    'process.env.BUILD_TARGET': JSON.stringify('component')
  },
  resolve: {
    tsconfigPaths: true
  },
  plugins: [
    vue(),
    vueJsx(),
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
