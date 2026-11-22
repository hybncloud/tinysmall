/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import * as hooks from 'vue'
import { Teleport } from 'vue'

import { emitter, type Emitter } from '../utils'
import type { ISharedRenderlessParamUtils, ITinyVm } from '@tinysmall/renderless/types/shared.type'

export { Teleport }

export const markRaw = hooks.markRaw

const defineProperties = (vm, instance, property) => {
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

const defineInstanceVm = (vm, instance) => {
  defineProperties(vm, instance, 'setupState')
  defineProperties(vm, instance, 'props')
  defineProperties(vm, instance, 'ctx')
  return vm
}

const createVm = (
  vm: object,
  instance: hooks.ComponentInternalInstance,
  context: hooks.SetupContext | null = null
): ITinyVm => {
  let $emitter: Emitter
  if ('$emitter' in instance) {
    $emitter = instance.$emitter as Emitter
  } else {
    $emitter = emitter()
    Object.defineProperty(instance, '$emitter', { get: () => $emitter })
  }

  const emit = (event: string, ...args: any) => {
    instance.emit(event, ...args)
    $emitter.emit.call(vm, event, ...args)
  }

  context || defineInstanceVm(vm, instance)

  Object.defineProperties(vm, {
    $attrs: { get: () => instance.attrs },
    $emit: { get: () => emit },
    // 组件实例的事件总线。broadcast 替代实现：发送端 $emitter.emit（不触发 instance.emit），
    // 接收端 $emitter.on 订阅，与旧 broadcast 触发 component.emit + $emitter.emit 的组合行为对齐
    $emitter: { get: () => $emitter },
    $el: { get: () => instance.vnode.el },
    $nextTick: { get: () => hooks.nextTick },
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
export const tools = (context: hooks.SetupContext<any, any>): Omit<ISharedRenderlessParamUtils, 't' | 'parent'> => {
  const instance = hooks.getCurrentInstance()
  if (instance == null) throw new Error('tools() must be called within setup()')
  const vm = createVm({}, instance, context)
  const emit = context.emit

  const refs = new Proxy(
    {},
    {
      get: (_, name) => (typeof name !== 'symbol' ? instance.refs[name] : undefined),
      has: (_, name) => (typeof name !== 'symbol' ? name in instance.refs : false),
      ownKeys: () => Reflect.ownKeys(instance.refs)
    }
  )

  const defineInstanceProperties = (props: PropertyDescriptorMap) => {
    Object.defineProperties(vm, props)
    if ('ctx' in instance) Object.defineProperties(instance.ctx, props)
  }

  hooks.onBeforeMount(() => defineInstanceVm(vm, instance))

  return {
    vm,
    emit,
    emitter,
    refs,
    slots: instance.slots,
    scopedSlots: instance.slots,
    attrs: context.attrs,
    nextTick: hooks.nextTick,
    defineInstanceProperties
  }
}

// 指令定义已全面使用 Vue3 生命周期钩子（beforeMount/mounted/updated/unmounted），
// 此函数仅为保持组件 directives: directive({...}) 的书写习惯而保留
export const directive = (directives) => directives

export const parseVnode = (vnode) => vnode

const { Text, Comment } = hooks

export const isEmptyVnode = (vnode) => !vnode || !vnode.type || [Text, Comment].includes(vnode.type)

export const h = hooks.h

export const defineComponent = hooks.defineComponent

export default hooks

export type { PropType, ComponentPublicInstance, App, VNode } from 'vue'
