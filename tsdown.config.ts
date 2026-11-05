import { defineConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'
import vueJsx from 'unplugin-vue-jsx/rolldown'
import virtualTemplate from './internals/unplugin-virtual-template/rolldown.ts'
import svgLoader from './internals/vite-svg-loader/rolldown.ts'

process.env.NODE_ENV = 'production'

export default defineConfig({
  unbundle: true,
  entry: './src/index.ts',
  define: {
    'process.env.TINY_MODE': JSON.stringify('pc'),
    'process.env.BUILD_TARGET': JSON.stringify('component')
  },
  tsconfig: 'tsconfig.build.json',
  treeshake: {
    moduleSideEffects: [{ test: /\.css$/, sideEffects: true }]
  },
  dts: {
    sideEffects: true
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
  css: { inject: true }
})
