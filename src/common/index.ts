import hooks from './adapter/index.ts'
import { createComponentFn } from './adapter/index.ts'
import { directive, h, markRaw, Teleport } from './adapter/index.ts'
import { parseVnode, isEmptyVnode, renderComponent, tools } from './adapter/index.ts'
import { t } from '@tinysmall/locale'
import '@tinysmall/theme/base/index.less'
import { defineComponent } from './adapter/index.ts'
import { GRADIENT_ICONS_LIST, generateIcon } from './generateIcon'

import { type Component } from 'vue'

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

export interface SvgOptions {
  name?: string
  component: Component
  filledComponent?: Component
  deprecatedBy?: string
}

// 这里需要使用函数声明语句，可以提升变量，保证saas-common可以正常运行
export function svg({ name = 'Icon', component, filledComponent = null, deprecatedBy = '' }: SvgOptions) {
  if (deprecatedBy) {
    console.warn(`${name} 图标已经重定向至 ${deprecatedBy} 图标,请避免使用${name} 图标！`)
  }
  return (propData?) =>
    markRaw(
      defineComponent({
        name: $prefix + name,
        props: {
          /** 设置图标模式： line or filled */
          shape: {
            type: String,
            default: 'line'
          },
          firstColor: {
            type: String,
            default: ''
          },
          secondColor: {
            type: String,
            default: ''
          },
          underlay: {
            type: Object // { background:'red', borderRadius:'4px',scale:0.6 }
          }
        },
        setup: (props, context) => {
          const { fill, width, height } = context.attrs || {}
          const mergeProps = Object.assign({}, props, propData || null)
          let className = 'tiny-svg'

          if (props.underlay) {
            className += ' tiny-svg-underlay' // 增加底托效果
          }

          const extend = {
            style: {
              fill,
              width,
              height,
              '--tiny-first-color': props.firstColor || '',
              '--tiny-second-color': props.secondColor || '',
              '--tiny-underlay-bg': props.underlay ? props.underlay.background : '#eef3fe',
              '--tiny-underlay-br': props.underlay ? props.underlay.borderRadius : '4px',
              '--tiny-underlay-scale': props.underlay ? props.underlay.scale : 0.8
            },
            class: className,
            isSvg: true
          }

          // 解决本地运行会报大量警告的问题
          if (process.env.BUILD_TARGET) {
            extend.nativeOn = context.listeners
          }

          // 解决多个相同的渐变图标svg中有相同id时，在display：none，情况下导致的样式异常问题
          if (GRADIENT_ICONS_LIST.includes(name)) {
            if (!component.__raw_render) {
              component.__raw_render = component.render
            }

            component.render = function (...args) {
              // 指向正确的this对象，保证vue2运行正常
              const newRender = component.__raw_render.bind(this) // 每次使用原始render, 以避免递归render函数。
              const vnode = newRender(...args)
              generateIcon(vnode)
              return vnode
            }
          }

          const view = hooks.computed(() => (props.shape === 'line' ? component : filledComponent))

          return renderComponent({
            view,
            props: mergeProps,
            context,
            extend
          })
        }
      })
    )
}
export type { PropType, ComponentPublicInstance, App, VNode } from './adapter'

export { h, hooks, directive, parseVnode, isEmptyVnode, createComponent, Teleport }
