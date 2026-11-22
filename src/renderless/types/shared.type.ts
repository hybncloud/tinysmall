/** 该文件以Vue3版本的适配器为依据，编写了本声明，本文涉及以下术语：
 * instance     :  即一个Vue3组件实例， conext, attrs，emit等很多属性
 * vm，parentVm :  适配器封装的一个数据结构，具有大量$属性，以及组件上其它属性
 * emitter      :  适配器中，自己封装的一个EventBus对象，和instance.emit没关系。 vm.$emit 会同时触发 instance.emit和instance.$emitter。
 * subTree      :  instance.subTree 是组件当前的vnode描述
 */

// 使用vue3的声明，来代表hooks中所有函数的声明
import type * as hooks from 'vue'
import type { Emitter } from '../../common/index'

/** hooks 变量: renderless的第二个参数 */
export type ISharedRenderlessParamHooks = typeof hooks

/** utils变量: renderless的第三个参数  */
export interface ISharedRenderlessParamUtils {
  t: (path: string, options?: any) => string
  attrs: any
  nextTick: typeof hooks.nextTick
  vm: ITinyVm
  refs: Record<string, any>
  slots: hooks.Slots
  scopedSlots: hooks.Slots
  emit: (event: string, ...args: any[]) => void
  emitter: () => Emitter
}

/** vue.ts的一个混合上下文，也是index.ts 文件中二层函数的入参混合体。 */
export type ISharedRenderlessFunctionParams<
  Props extends object = object,
  State extends object = object,
  Api extends object = object
> = {
  api: Api
  props: Props
  state: State
} & ISharedRenderlessParamHooks &
  ISharedRenderlessParamUtils

/** Tiny-Vue的Adapter 内部为组件创建的Vm */
export interface ITinyVm {
  /** instance.attrs */
  $attrs: Record<string, any>
  /** 返回 instance.vnode.el */
  $el: HTMLElement
  /** 即 hooks.nextTick */
  $nextTick: typeof hooks.nextTick
  /** 自动触发 instance.emit 和 instance.$emitter 两处地方 */
  $emit: (eventname: string, ...args: any[]) => void
  /** instance.$emitter，即组件实例的事件总线（EventBus） */
  $emitter: Emitter
  /** instance.$emitter.off, 不传任何参数则是移除所有事件 */
  $off(): void
  $off(eventname: string): void
  $off(eventname: string, callback: Function): void
  /** instance.$emitter.on */
  $on: (eventname: string, callback: Function) => void
  /** instance.$emitter.once */
  $once: (eventname: string, callback: Function) => void
  /** 返回 instance.refs,
   * @mark ⭐ 尽量使用这个，每次都会是最新的refs */
  $refs: Record<string, any>
  /** 返回 instance.slots */
  $slots: Record<string, Function>
  /** 返回 instance.slots */
  $scopedSlots: Record<string, Function>
  /** 适配器或组件内，可能会赋值很多其它属性 */
  [otherProps: string]: any
}
