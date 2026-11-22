import zhCN from './lang/zh-CN'
import enUS from './lang/en'
import esLA from './lang/es-LA'
import ptBR from './lang/pt-BR'
import format from './format'
import glob from './glob'
import { shallowRef } from 'vue'
import { extend as _extend } from '@tinysmall/utils'

// 语言包整体替换（use），用 shallowRef 即可让渲染函数中调用的 t/language 随切换自动更新
const lang = shallowRef<any>(zhCN)

export const t = (path, options = undefined as any) => {
  const array = path.split('.')
  let value: any = null
  let current = lang.value

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]

    value = current[property] || ''

    if (i === j - 1) return format(value, options)
    if (!value) return ''

    current = value
  }

  return ''
}

export const use = (l) => {
  lang.value = l || lang.value
  return lang.value
}

export const language = () => lang.value.code

export const extend = _extend

export const globalization = /* @__PURE__ */ glob(t)

export { version } from 'package.json'

export { zhCN, enUS, esLA, ptBR }

const locale = {
  use,
  t,
  extend,
  language,
  globalization,
  zhCN,
  enUS,
  esLA,
  ptBR
}

export default locale
