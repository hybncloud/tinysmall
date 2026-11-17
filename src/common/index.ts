import hooks from './adapter/index.ts'
import { createComponentFn } from './adapter/index.ts'
import { directive, h, markRaw, Teleport } from './adapter/index.ts'
import { parseVnode, isEmptyVnode, renderComponent, tools } from './adapter/index.ts'
import { t } from '@tinysmall/locale'
import '@tinysmall/theme/base/index.less'
import { defineComponent } from './adapter/index.ts'

export { defineComponent }

export const $prefix = 'Tiny'

export const $props = {
  '_constants': Object
}

export const props: Array<'_constants'> = ['_constants']

const createComponent = createComponentFn()

export const $setup = ({ props: propData, context, template, extend = {} }) => {
  const view = template('pc', propData)
  return renderComponent({ view, props: propData, context, extend })
}

export const setup = ({ props, context, renderless, api, extendOptions = {}, mono = false }) => {
  const utils = {
    $prefix,
    t,
    ...tools(context)
  }

  const sdk = renderless(props, hooks, utils, extendOptions)

  const attrs = {
    t,
    vm: utils.vm,
    d: utils.defineInstanceProperties,
    dp: utils.defineParentInstanceProperties
  }

  /**
   * 修复 render 函数下 this.slots 不会动态更新的问题（vue3 环境没有问题）
   * 解决方法：在 instance 下注入 slots、scopedSlots
   * 注意：renderless 下尽量使用 vm.$refs、vm.$slots
   */
  attrs.d({
    slots: { get: () => utils.vm.$slots, configurable: true },
    scopedSlots: { get: () => utils.vm.$scopedSlots, configurable: true }
  })

  attrs.dp({
    slots: { get: () => utils.parent.$slots, configurable: true },
    scopedSlots: { get: () => utils.parent.$scopedSlots, configurable: true }
  })

  if (Array.isArray(api)) {
    api.forEach((name) => {
      const value = sdk[name]
      if (typeof value !== 'undefined') {
        attrs[name] = value
        // 只有单层组件，才需要给setup传递： mono:true
        // 双层组件，需要把内层的api复制到外层，这样用户应用的ref才能拿到组件的api
        if (!mono) {
          utils.setParentAttribute({ name, value })
        }
      }
    })
  }

  return attrs
}

export type { PropType, ComponentPublicInstance, App, VNode } from './adapter'

export { h, hooks, directive, parseVnode, isEmptyVnode, createComponent, Teleport, markRaw, renderComponent }
