import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { UserOptions } from './types.ts'
import MagicString from 'magic-string'

export default createUnplugin<UserOptions>((options = {}) => {
  const filter = createFilter(options.include || ['**/*'], options.exclude || [])
  return {
    name: 'internals/unplugin-virtual-template',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'virtual-template?pc') {
        return id
      }
      return null
    },
    transformInclude(id) {
      return filter(id)
    },
    transform(code, id) {
      const source = new MagicString(code, {
        filename: id
      })

      source.replace(
        /import\s+(\w+)\s+from\s+'virtual-template\?pc'/,
        (_, $1) => `
import __pc from './pc.vue'
const ${$1} = () => __pc
`
      )

      if (source.hasChanged()) {
        return {
          code: source.toString(),
          map: source.generateMap({
            source: id,
            file: `${id}.map`,
            includeContent: true
          })
        }
      }
    }
  }
})
