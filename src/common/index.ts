import hooks from './adapter'
import {
  appContext,
  appProperties,
  bindFilter,
  createComponentFn,
  getElementCssClass,
  getElementStatusClass
} from './adapter'
import { defineAsyncComponent, directive, emitter, h, markRaw, Teleport, KeepAlive } from './adapter'
import { parseVnode, isEmptyVnode, renderComponent, tools, useRouter, isVnode } from './adapter'
import { t } from '@tinysmall/locale'
import { stringifyCssClass, stringifyCssClassObject, stringifyCssClassArray, deduplicateCssClass } from './csscls'
import '@tinysmall/theme/base/index.less'
import { defineComponent, isVue2, isVue3 } from './adapter'
import { useBreakpoint } from './breakpoint'
import { useDefer } from './usedefer'
import { GRADIENT_ICONS_LIST, generateIcon } from './generateIcon'

import { useInstanceSlots as createUseInstanceSlots } from '@tinysmall/hooks'
import { useRelation as createUseRelation } from '@tinysmall/hooks'
import { type Component } from 'vue'

export const useInstanceSlots = createUseInstanceSlots({ ...hooks, isVue2 })
export const useRelation = createUseRelation({ ...hooks, isVue2 })

export { stringifyCssClass, stringifyCssClassObject, stringifyCssClassArray, deduplicateCssClass }
export { useBreakpoint, useDefer }

export { version } from 'package.json'

export { defineComponent, isVue2, isVue3, appProperties }

export const $prefix = 'Tiny'

export const $props = {
  'tiny_mode': String,
  'tiny_mode_root': Boolean,
  'tiny_theme': String,
  '_constants': Object
}

export const props: Array<'tiny_mode' | 'tiny_mode_root' | '_constants' | 'tiny_theme'> = [
  'tiny_mode',
  'tiny_mode_root',
  '_constants',
  'tiny_theme'
]

const createComponent = createComponentFn()

export const $setup = ({ props: propData, context, template, extend = {} }) => {
  const view = template('pc', propData)
  return renderComponent({ view, props: propData, context, extend })
}

export const setup = ({ props, context, renderless, api, extendOptions = {}, mono = false, classes = {} }) => {
  const utils = {
    $prefix,
    t,
    ...tools(context, 'pc'),
    designConfig: null,
    globalDesignConfig: null,
    useBreakpoint
  }

  utils.vm.theme = 'tiny'
  const sdk = renderless(props, hooks, utils, extendOptions)

  const attrs = {
    t,
    vm: utils.vm,
    f: bindFilter,
    a: filterAttrs,
    d: utils.defineInstanceProperties,
    dp: utils.defineParentInstanceProperties,
    gcls: (key: any) => getElementCssClass(classes, key)
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

  initComponent()

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
/**
 * 将用户传入的 $attrs中的属性， 与 filters 中传入的属性做对比。
 * 如果include ,  且属性在filters中， 则返回。
 * 如果 !include, 且属性不匹配filters， 则返回。
 * 在模板中，都是通过 v-bind="a($attrs,[])" 来使用该函数 。
 * @mark 由于现在组件都移除了 inheritAttrs。 加在外层的 v-bind="a()"" 都可以去掉了， 否则会出现双份效果。
 *
 * @param attrs : Object
 * @param filters : string[]
 * @param include : boolean
 *
 * @example Button-pc中： v-bind="a($attrs, ['class', 'style', 'title', 'id'], true)"
 * @exampleResult 把用户使用<tiny-button ...id\class> 等属性，会传递给该位置的dom。
 *
 * @example Area-pc中： v-bind="a($attrs, ['^on[A-Z]'])"
 * @exampleResult 把用户使用<tiny-area ...on> 等事件, 不会传递给内部的select上， 但是class,style等，会传递给select上。
 */
export const filterAttrs = (attrs, filters, include) => {
  const props = {}

  for (let name in attrs) {
    const find = filters.some((r) => new RegExp(r).test(name))

    if ((include && find) || (!include && !find)) {
      props[name] = attrs[name]
    }
  }
  return props
}

// eslint-disable-next-line import/no-mutable-exports
export let setupComponent = {}

export const initComponent = () => {
  for (let name in setupComponent) {
    const component = setupComponent[name]

    if (typeof component.install === 'function') {
      component.install(appContext())
    }

    if (typeof component.init === 'function') {
      component.init(appProperties())
    }
  }

  setupComponent = {}
}

export const $install = (component) => {
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
}

export type {
  PropType,
  ExtractPropTypes,
  DefineComponent,
  ComponentPublicInstance,
  SetupContext,
  ComputedRef,
  App,
  VNode
} from './adapter'

export {
  h,
  hooks,
  directive,
  parseVnode,
  isEmptyVnode,
  useRouter,
  emitter,
  createComponent,
  defineAsyncComponent,
  getElementStatusClass,
  Teleport,
  KeepAlive,
  isVnode
}

export default {
  h,
  directive,
  parseVnode,
  isEmptyVnode,
  useRouter,
  emitter,
  createComponent,
  defineAsyncComponent,
  filterAttrs,
  initComponent,
  setupComponent,
  svg,
  $prefix,
  $props,
  props,
  $setup,
  setup,
  hooks,
  getElementStatusClass,
  $install,
  isVnode
}
