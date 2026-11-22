import hooks from './adapter/index.ts'
import { directive, h, markRaw, Teleport } from './adapter/index.ts'
import { parseVnode, isEmptyVnode, tools } from './adapter/index.ts'
import { t } from '@tinysmall/locale'
import '@tinysmall/theme/base/index.less'
import { defineComponent } from './adapter/index.ts'
import { getCurrentInstance, type SetupContext, type Slots } from 'vue'
import type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils, ITinyVm } from '@tinysmall/renderless/types'

export { defineComponent }

export const setup = <P, R extends object = {}, C extends SetupContext<any[], {}> = SetupContext>({
  props,
  context,
  renderless,
  api
}: {
  props: P
  context: C
  renderless: (props: P, hooks: ISharedRenderlessParamHooks, utils: ISharedRenderlessParamUtils) => R
  api: string[]
}): R & {
  t: typeof t
  vm: ITinyVm
  slots: C extends { slots: infer S } ? S : Slots
  scopedSlots: C extends { slots: infer S } ? S : Slots
  d: (props: PropertyDescriptorMap) => void
} => {
  const $this = getCurrentInstance()

  if ($this == null) throw new Error('[TinySmall] setup() must be called within setup()')

  const utils: ISharedRenderlessParamUtils = {
    t,
    ...tools(context)
  }

  const sdk = renderless(props, hooks, utils, {})

  const attrs: Record<string, any> = {
    t,
    vm: utils.vm,
    d: utils.defineInstanceProperties
  }

  attrs.d({
    slots: { get: () => utils.vm.$slots, configurable: true },
    scopedSlots: { get: () => utils.vm.$scopedSlots, configurable: true }
  })

  for (const name of api) {
    if (name in sdk) {
      Object.defineProperty(attrs, name, {
        get: () => sdk[name],
        enumerable: true
      })
    } else {
      // console.warn(`[TinySmall] ${$this.type.name} renderless api: ${name} not found`)
    }
  }

  return attrs as any
}

export type { PropType, ComponentPublicInstance, App, VNode } from './adapter'

export { h, hooks, directive, parseVnode, isEmptyVnode, Teleport, markRaw }
