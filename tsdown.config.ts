import { defineConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'
import vueJsx from 'unplugin-vue-jsx/rolldown'
import svgLoader from './internals/vite-svg-loader/rolldown.ts'

export default defineConfig({
  unbundle: true,
  entry: './src/index.ts',
  define: {
    'process.env.TINY_MODE': JSON.stringify('pc'),
    'process.env.BUILD_TARGET': JSON.stringify('component')
  },
  tsconfig: 'tsconfig.build.json',
  treeshake: {
    moduleSideEffects: false
  },
  platform: 'browser',
  dts: true,
  checks: {
    bundlerTimings: false
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
  css: { inject: true }
})
