import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
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
    tsconfigPaths: true
  },
  plugins: [
    vueJsx(),
    svgLoader({
      svgoConfig: {
        plugins: ['preset-default', 'prefixIds']
      }
    })
  ]
})
