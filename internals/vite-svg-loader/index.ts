import { createUnplugin } from 'unplugin'
import type { UserOptions } from './types.ts'
import fs from 'node:fs/promises'
import { optimize as optimizeSvg } from 'svgo'
import { compileTemplate } from 'vue/compiler-sfc'

export default createUnplugin<UserOptions>((options = {}) => {
  const { svgoConfig } = options

  return {
    name: 'internals/svg-loader',
    enforce: 'pre',

    async load(id) {
      if (!id.endsWith('.svg?component')) {
        return
      }

      const [path] = id.split('?', 2)

      let svg

      try {
        svg = await fs.readFile(path, 'utf-8')
      } catch (ex) {
        this.error(`${id} couldn't be loaded by vite-svg-loader, fallback to default loader`)
        return
      }

      svg = optimizeSvg(svg, { ...svgoConfig, path }).data

      // To prevent compileTemplate from removing the style tag
      svg = svg.replace(/<style/g, '<component is="style"').replace(/<\/style/g, '</component')

      const { code } = compileTemplate({
        id: JSON.stringify(id),
        source: svg,
        filename: path,
        transformAssetUrls: false
      })

      return `${code}\nexport default { render: render }`
    }
  }
})
