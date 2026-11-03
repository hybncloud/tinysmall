import { defineConfig, type TsdownPlugin } from 'tsdown'
import vue from 'unplugin-vue/rolldown'
import vueJsx from 'unplugin-vue-jsx/rolldown'
import virtualTemplate from './internals/unplugin-virtual-template/rolldown.ts'
import svgLoader from './internals/vite-svg-loader/rolldown.ts'

process.env.NODE_ENV = 'production'

const componentStyle = (): TsdownPlugin => {
  return {
    name: 'component-style',
    tsdownConfig() {
      return {
        deps: {
          neverBundle: ['@opentiny/vue-theme/*/index.less']
        }
      }
    }
  }
}

export default defineConfig({
  entry: {
    'index': './src/index.ts',
    '*': './src/components/*/index.ts',
    'icons': './icons/index.ts',
    'locale': './locale/src/index.ts'
  },
  define: {
    'process.env.TINY_MODE': JSON.stringify('pc'),
    'process.env.BUILD_TARGET': JSON.stringify('component')
  },
  tsconfig: 'tsconfig.build.json',
  dts: true,
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
    }),
    componentStyle()
  ],
  exports: true
})
