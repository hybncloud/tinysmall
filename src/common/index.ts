import * as vueHooks from 'vue'
import { getCurrentInstance, h, markRaw, Teleport } from 'vue'
import type { SetupContext, Slots } from 'vue'
import { t } from '@tinysmall/locale'
import '@tinysmall/theme/base/index.less'
import type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils, ITinyVm } from '@tinysmall/renderless/types'

export interface Emitter {
  /** 触发事件，按注册顺序同步调用所有监听器，once 监听器触发后自动移除 */
  emit(event: string, ...args: any[]): void
  /** 注册事件监听器 */
  on(event: string, callback: (...args: any[]) => void): void
  /** 注册仅触发一次的监听器 */
  once(event: string, callback: (...args: any[]) => void): void
  /** 清空全部监听器 */
  off(): void
  /** 移除监听器：传 event 清空该事件； */
  off(event: string): void
  /** 移除监听器：传 callback 移除指定监听；*/
  off(event: string, callback: (...args: any[]) => void): void
}

export const emitter = (): Emitter => {
  let listeners: Record<string, ((...args: any[]) => void)[]> = {}

  const on = (event: string, callback: (...args: any[]) => void, once = false) => {
    const callbacks = listeners[event] || []
    listeners[event] = callbacks
    if (once) Object.defineProperty(callback, 'once', { value: true })
    callbacks.push(callback)
  }

  const emitter: Emitter = {
    emit(event: string, ...args: any[]) {
      const callbacks = listeners[event]
      if (callbacks) {
        callbacks.forEach((callback) => callback(...args))
        listeners[event] = callbacks.filter((callback) => !('once' in callback && callback.once))
      }
    },
    on(event, callback) {
      on(event, callback)
    },
    once(event, callback) {
      on(event, callback, true)
    },
    off() {
      if (arguments.length === 0) {
        listeners = {}
      } else if (arguments.length === 1) {
        delete listeners[arguments[0]]
      } else {
        listeners[arguments[0]] = listeners[arguments[0]].filter((cb) => cb !== arguments[1])
      }
    }
  }

  return emitter
}

export { Teleport }

export const defineComponent = vueHooks.defineComponent

export { h, markRaw }

export const hooks = vueHooks

export default hooks

export type { PropType, ComponentPublicInstance, App, VNode } from 'vue'

export type SetupState<
  P extends object = {},
  S extends object = {},
  C extends SetupContext<any[], {}> = SetupContext
> = S & {
  t: typeof t
  vm: ITinyVm<P>
  slots: C extends { slots: infer S } ? Readonly<S> : Slots
  scopedSlots: C extends { slots: infer S } ? Readonly<S> : Slots
}

export const setup = <P extends object = {}, S extends object = {}, C extends SetupContext<any[], {}> = SetupContext>({
  props,
  context,
  renderless
}: {
  props: P
  context: C
  renderless: (props: P, hooks: ISharedRenderlessParamHooks, utils: ISharedRenderlessParamUtils) => S
}): SetupState<P, S, C> => {
  const $this = getCurrentInstance()

  if ($this === null) throw new Error('[TinySmall] setup() must be called within setup()')

  const vm = {} as ITinyVm<P>

  for (const name in $this.props) {
    Object.defineProperty(vm, name, {
      enumerable: true,
      get: () => $this.props[name],
      set: (value) => ($this.props[name] = value)
    })
  }

  const $emitter = emitter()

  const $emit = (event: string, ...args: any) => {
    $this.emit(event, ...args)
    $emitter.emit.call(vm, event, ...args)
  }

  Object.defineProperties(vm, {
    $attrs: { get: () => $this.attrs },
    $emit: { get: () => $emit },
    $emitter: { get: () => $emitter },
    $el: { get: () => $this.vnode.el },
    $nextTick: { get: () => vueHooks.nextTick },
    $off: { get: () => $emitter.off },
    $on: { get: () => $emitter.on },
    $once: { get: () => $emitter.once },
    $refs: { get: () => $this.refs },
    $scopedSlots: { get: () => $this.slots },
    $slots: { get: () => $this.slots }
  })

  const utils = {
    t,
    vm,
    emit: context.emit,
    emitter,
    refs: new Proxy(
      {},
      {
        get: (_, name) => Reflect.get($this.refs, name),
        has: (_, name) => Reflect.has($this.refs, name),
        ownKeys: () => Reflect.ownKeys($this.refs)
      }
    ),
    slots: context.slots,
    scopedSlots: context.slots,
    attrs: context.attrs,
    nextTick: vueHooks.nextTick
  } as ISharedRenderlessParamUtils

  const sdk = renderless(props, hooks, utils)

  const state = {
    t,
    vm: utils.vm,
    slots: utils.slots,
    scopedSlots: utils.scopedSlots
  } as SetupState<P, S, C>

  for (const name in sdk) {
    if (name in state) throw new Error(`[TinySmall] ${$this.type.name} renderless api name "${name}" is already in use`)
    Object.defineProperty(state, name, {
      get: () => sdk[name],
      set: (value) => (sdk[name] = value),
      enumerable: true
    })
    if (name in vm)
      throw new Error(`[TinySmall] ${$this.type.name} renderless api name "${name}" is already in use on vm`)
    Object.defineProperty(vm, name, {
      enumerable: true,
      get: () => sdk[name],
      set: (value) => (sdk[name] = value)
    })
  }

  return state
}
