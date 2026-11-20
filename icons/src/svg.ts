import { type Component } from 'vue'
import { $prefix, defineComponent, h, markRaw } from '@tinysmall/common'
import { GRADIENT_ICONS_LIST, generateIcon } from './generateIcon'

export interface SvgOptions {
  name?: string
  component: Component
}

// 这里需要使用函数声明语句，可以提升变量，保证saas-common可以正常运行
export function svg({ name = 'Icon', component }: SvgOptions) {
  return (propData?) =>
    markRaw(
      defineComponent({
        name: $prefix + name,
        setup: (props, context) => {
          const { fill, width, height } = context.attrs || {}
          const mergeProps = Object.assign({}, props, propData || null)

          const extend: Record<string, any> = {
            style: {
              fill,
              width,
              height
            },
            class: 'tiny-svg',
            isSvg: true
          }

          // 解决多个相同的渐变图标svg中有相同id时，在display：none，情况下导致的样式异常问题
          if (GRADIENT_ICONS_LIST.includes(name)) {
            const comp = component as any
            if (!comp.__raw_render) {
              comp.__raw_render = comp.render
            }

            comp.render = function (...args) {
              // 指向正确的this对象，保证vue2运行正常
              const newRender = comp.__raw_render.bind(this) // 每次使用原始render, 以避免递归render函数。
              const vnode = newRender(...args)
              generateIcon(vnode)
              return vnode
            }
          }

          return () => h(component, { ref: 'modeTemplate', ...mergeProps, ...context.attrs, ...extend }, context.slots)
        }
      })
    )
}
