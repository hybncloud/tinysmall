// 定制脚本的参数
// rules
import border from './rules/border.js'
import color from './rules/color.js'
import font from './rules/font.js'
import layout from './rules/layout.js'
import size from './rules/size.js'
import transform from './rules/transform.js'
import utils from './rules/utils.js'
import animate from './rules/animate.js'

// variants
import child from './variants/child.js'
import hover from './variants/hover.js'
import important from './variants/important.js'
import mediaquery from './variants/mediaquery.js'
import range from './variants/range.js'
import select from './variants/select.js'
import prefixBuilder from './variants/prefix.js'

// preflights
import preflights from './preflights.js'

// autocomplete
import autocomplete from './autocomplete.js'

import { defineConfig } from 'unocss'

const defaultOption = {
  prefix: '',
  isRem: false,
  breakpoints: {
    xs: '0px',
    sm: '640px',
    md: '1024px',
    lg: '1280px'
  }
}

// 每一项 opt={rules:[],shortcuts:[]}
function merge(options, ...rules) {
  let ret = { rules: [], shortcuts: [] }
  rules.forEach((ruler) => {
    let rule = ruler(options)
    ret.rules = ret.rules.concat(rule.rules)
    ret.shortcuts = ret.shortcuts.concat(rule.shortcuts)
  })
  return ret
}
export default (options) => {
  const tempOptions = { ...defaultOption, ...options }
  let prefix = tempOptions.prefix
  return defineConfig({
    name: 'preset-tinyuno',
    ...merge(options, border, color, font, layout, size, transform, utils, animate),
    variants: [prefixBuilder(prefix), child, hover, important, mediaquery, range, select],
    theme: {
      breakpoints: tempOptions.breakpoints
    },
    preflights,
    autocomplete
  })
}
