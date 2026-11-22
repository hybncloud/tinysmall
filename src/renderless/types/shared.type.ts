/** 该文件以Vue3版本的适配器为依据，编写了本声明，本文涉及以下术语：
 * instance     :  即一个Vue3组件实例， conext, attrs，emit等很多属性
 * vm，parentVm :  适配器封装的一个数据结构，具有大量$属性，以及组件上其它属性
 * emitter      :  适配器中，自己封装的一个EventBus对象，和instance.emit没关系。 vm.$emit 会同时触发 instance.emit和instance.$emitter。
 * subTree      :  instance.subTree 是组件当前的vnode描述
 */

// 使用vue3的声明，来代表hooks中所有函数的声明
import type * as hooks from 'vue'
import type { Emitter } from '../../common/adapter/utils'

/** hooks 变量: renderless的第二个参数 */
export type ISharedRenderlessParamHooks = typeof hooks

/** utils变量: renderless的第三个参数  */
export interface ISharedRenderlessParamUtils {
  /** app的root上的i18n对象，renderless基本没有使用它 */
  i18n: any
  /** 组件内国际化，常用函数 */
  t: (path: string, options?: any) => string
  /** vue组件实例的context.attrs */
  attrs: any
  /** vue的内置nextTick， 其实可以从第二参 hooks中获取, 还可以通过当前vm.$nextTick来获取 */
  nextTick: typeof hooks.nextTick
  /** 当前vm */
  vm: ITinyVm
  /** 第一次mount加载后的所有refs，不会更新！ ⭐要避免使用 */
  refs: Record<string, any>
  /** 返回 instance.slots。 vue2,vue3的这2个属性是同一个引用： scopedSlots===slots。  */
  slots: hooks.Slots
  /** 返回 instance.slots */
  scopedSlots: hooks.Slots
  /** 向实例的 subTree.children 深度遍历发送广播消息。 如果component找到了触发component.emit(eventName, params)
   * @param componentName 组件名
   */
  broadcast: (componentName: string, eventName: string, params?: any) => void
  /** 向实例的 parent开始查找componentName， 找到匹配第一个组件， 触发component.emit(eventName, params) */
  dispatch: (componentName: string, eventName: string, params?: any) => void
  /** 给 vm 和 instance.ctx 同时添加属性。
   * @param props Object.defineProperties的第2参, 格式：{ property1: {value: 42,writable: true},property2: {...} }
   */
  defineInstanceProperties: (props: PropertyDescriptorMap & ThisType<any>) => void
  /** 返回 context.emit */
  emit: (event: string, ...args: any[]) => void
  /** Tiny 适配器中，自行封装的一个 EventBus模型的工厂函数。⭐每次调用才返回一个新的模型对象。
   * @mark vm中，会给instance添加一个$emitter=emitter() ,就是该函数返回的模型。 vm中的$on, $off,$once 都是该模型的方法。
   * @mark ⭐所以不要直接使用该函数。
   */
  emitter: () => Emitter
}

/** vue.ts的一个混合上下文，也是index.ts 文件中二层函数的入参混合体。 */
export type ISharedRenderlessFunctionParams = {
  api: object
  props: object
  state: object
} & ISharedRenderlessParamHooks &
  ISharedRenderlessParamUtils

/** Tiny-Vue的Adapter 内部为组件创建的Vm */
export interface ITinyVm {
  /** 从instance.attrs上， 过滤出所有的非函数的attrs */
  $attrs: Record<string, any>
  /** 返回instance.subTree的同等树状的vm数据 */
  $children: any[]
  /** 返回 instance.vnode.el */
  $el: HTMLElement
  /** 即 hooks.nextTick */
  $nextTick: typeof hooks.nextTick
  /** 自动触发 instance.emit 和 instance.$emitter 两处地方 */
  $emit: (...args) => void
  /** instance.$emitter，即组件实例的事件总线（EventBus） */
  $emitter: Emitter
  /** instance.$emitter.off, 不传任何参数则是移除所有事件 */
  $off: (eventname?: string, callback?: Function) => void
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
