import { defineConfig, Plugin, ResolvedConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import virtualTemplate from '../internals/unplugin-virtual-template/vite.ts'
import svgLoader from '../internals/vite-svg-loader/vite.ts'
import markdown from 'unplugin-vue-markdown/vite'
import dynamicImport from 'vite-plugin-dynamic-import'
import unocss from 'unocss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import markdownConfig from './markdown.config.ts'
import path from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'

const abs = (...paths: string[]): string => path.join(import.meta.dirname, ...paths)

const delStatic = (): Plugin => {
    let config: ResolvedConfig
    return {
        name: 'del-static',
        apply: 'build',
        configResolved(_config) {
            config = _config
        },
        async closeBundle() {
            const targetPath = path.join(config.build.outDir, '@demos')
            const files = await fg(['**/*.spec.js', '**/*.spec.ts'], {
                dot: true,
                cwd: targetPath
            })
            files.forEach((filename) => {
                const filePath = path.join(targetPath, filename)
                fs.unlink(filePath)
            })
        }
    }
}

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
        vue({ include: [/\.vue$/, /\.md$/] }),
        vueJsx(),
        virtualTemplate({
            include: ['../src/components/*/src/index.ts', '../src/components/*/src/index.vue']
        }),
        svgLoader({
            svgoConfig: {
                plugins: [
                    'preset-default',
                    'prefixIds'
                ]
            }
        }),
        dynamicImport(),
        markdown(markdownConfig),
        unocss(),
        viteStaticCopy({
            targets: [
                { src: `./demos/pc/**`, dest: '@demos', rename: { stripBase: 2 } },
                { src: `./demos/apis/**`, dest: '@demos/apis', rename: { stripBase: 2 } }
            ]
        }),
        delStatic()
    ],
    server: {
        port: 3101
    }
})