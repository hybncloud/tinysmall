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

const defineProperties = (vm: object, instance: vueHooks.ComponentInternalInstance, property: string) => {
  for (const name in instance[property]) {
    Object.defineProperty(vm, name, {
      configurable: true,
      enumerable: true,
      get: () => instance[property][name],
      set: (value) => (instance[property][name] = value)
    })
  }
  return vm
}

// props 在 setup 阶段即已就绪，可同步镜像到 vm
const defineInstanceVm = (vm: object, instance: vueHooks.ComponentInternalInstance) => {
  defineProperties(vm, instance, 'props')
  return vm
}

// setupState 要等 setup() 返回后才由 Vue 填充（含 api 名/slots/scopedSlots），只能在 beforeMount 时镜像
const defineSetupState = (vm: object, instance: vueHooks.ComponentInternalInstance) => {
  defineProperties(vm, instance, 'setupState')
  return vm
}

const createVm = (vm: object, instance: vueHooks.ComponentInternalInstance): ITinyVm => {
  let $emitter: Emitter = emitter()

  const emit = (event: string, ...args: any) => {
    instance.emit(event, ...args)
    $emitter.emit.call(vm, event, ...args)
  }

  defineInstanceVm(vm, instance)

  Object.defineProperties(vm, {
    $attrs: { get: () => instance.attrs },
    $emit: { get: () => emit },
    // 组件实例的事件总线。broadcast 替代实现：发送端 $emitter.emit（不触发 instance.emit），
    // 接收端 $emitter.on 订阅，与旧 broadcast 触发 component.emit + $emitter.emit 的组合行为对齐
    $emitter: { get: () => $emitter },
    $el: { get: () => instance.vnode.el },
    $nextTick: { get: () => vueHooks.nextTick },
    $off: { get: () => $emitter.off },
    $on: { get: () => $emitter.on },
    $once: { get: () => $emitter.once },
    $refs: { get: () => instance.refs },
    $scopedSlots: { get: () => instance.slots },
    $slots: { get: () => instance.slots }
  })

  return vm as ITinyVm
}

// 链式 parentVm 已移除：跨组件数据一律走 provide/inject（见 AGENTS.md），parent 字段仅供内部函数签名复用
export const tools = (
  context: vueHooks.SetupContext<any[], {}>
): Omit<ISharedRenderlessParamUtils, 't' | 'defineInstanceProperties'> => {
  const instance = vueHooks.getCurrentInstance()
  if (instance == null) throw new Error('tools() must be called within setup()')
  const vm = createVm({}, instance)
  const emit = context.emit

  const refs = new Proxy(
    {},
    {
      get: (_, name) => (typeof name !== 'symbol' ? instance.refs[name] : undefined),
      has: (_, name) => (typeof name !== 'symbol' ? name in instance.refs : false),
      ownKeys: () => Reflect.ownKeys(instance.refs)
    }
  )

  vueHooks.onBeforeMount(() => defineSetupState(vm, instance))

  return {
    vm,
    emit,
    emitter,
    refs,
    slots: instance.slots,
    scopedSlots: instance.slots,
    attrs: context.attrs,
    nextTick: vueHooks.nextTick
  }
}

export { h, markRaw }

export const hooks = vueHooks

export default hooks

export type { PropType, ComponentPublicInstance, App, VNode } from 'vue'

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
} => {
  const $this = getCurrentInstance()

  if ($this == null) throw new Error('[TinySmall] setup() must be called within setup()')

  const utils = { t, ...tools(context) } as ISharedRenderlessParamUtils

  const sdk = renderless(props, hooks, utils, {})

  Object.defineProperties(utils.vm, {
    slots: { get: () => utils.vm.$slots, configurable: true },
    scopedSlots: { get: () => utils.vm.$scopedSlots, configurable: true }
  })

  const attrs: Record<string, any> = {
    t,
    vm: utils.vm,
    slots: utils.slots,
    scopedSlots: utils.scopedSlots
  }

  for (const name of api) {
    if (name in sdk) {
      Object.defineProperty(attrs, name, {
        get: () => sdk[name],
        set: (value) => (sdk[name] = value),
        enumerable: true
      })
    } else {
      // console.warn(`[TinySmall] ${$this.type.name} renderless api: ${name} not found`)
    }
  }

  return attrs as any
}
