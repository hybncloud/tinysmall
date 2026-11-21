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

const emitEvent = (vm) => {
  const broadcast = (vm, componentName, eventName, params) => {
    const subTree = vm.subTree

    if (subTree) {
      const subTreeName = subTree.type && subTree.type.componentName

      if (subTreeName === componentName && subTree.component) {
        subTree.component.emit(eventName, params)
        subTree.component.$emitter && subTree.component.$emitter.emit(eventName, params)
        return
      }
    }

    const children = (subTree && subTree.children) || vm.children

    Array.isArray(children) &&
      children.forEach((child) => {
        const name = child.type && child.type.componentName
        const component = child.component

        if (name === componentName) {
          component.emit(eventName, params)
          component.$emitter && component.$emitter.emit(eventName, params)
        } else {
          broadcast(child.component ?? child, componentName, eventName, params)
        }
      })
  }

  return {
    dispatch(componentName, eventName, params) {
      let parent = vm.parent || vm.root
      let name = parent.type && parent.type.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.parent

        if (parent) name = parent.type && parent.type.componentName
      }

      if (parent) {
        parent.emit(...[eventName].concat(params))
        // fix: VUE3下事件参数为数组，VUE2下事件参数不是数组，这里修改为和VUE2兼容
        parent.$emitter && parent.$emitter.emit(...[eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast(vm, componentName, eventName, params)
    }
  }
}

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
    $el: { get: () => instance.vnode.el },
    $nextTick: { get: () => hooks.nextTick },
    $off: { get: () => $emitter.off },
    $on: { get: () => $emitter.on },
    $once: { get: () => $emitter.once },
    $options: { get: () => ({ componentName: instance.type.componentName }) },
    $parent: {
      get: () => instance.parent && createVm({}, instance.parent)
    },
    $refs: { get: () => instance.refs },
    $scopedSlots: { get: () => instance.slots },
    $slots: { get: () => instance.slots }
  })

  return vm as ITinyVm
}

export const tools = (context: hooks.SetupContext<any, any>): Omit<ISharedRenderlessParamUtils, 't'> => {
  const instance = hooks.getCurrentInstance()
  if (instance == null) throw new Error('tools() must be called within setup()')
  const i18n = instance?.proxy?.$root?.$i18n
  const { dispatch, broadcast } = emitEvent(instance)
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

  const parentVm = instance.parent ? createVm({}, instance.parent) : null

  const defineInstanceProperties = (props: PropertyDescriptorMap) => {
    Object.defineProperties(vm, props)
    if ('ctx' in instance) Object.defineProperties(instance.ctx, props)
  }

  hooks.onBeforeMount(() => defineInstanceVm(vm, instance))

  return {
    vm,
    emit,
    emitter,
    dispatch,
    broadcast,
    i18n,
    refs,
    slots: instance.slots,
    scopedSlots: instance.slots,
    attrs: context.attrs,
    parent: parentVm,
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

export const createComponentFn = () => {
  return ({ component, propsData, el }) => {
    const vnode = hooks.createVNode(component, propsData)
    hooks.render(vnode, el)
    // render 后实例已挂载，component 必非空（类型层声明为可空，用断言）
    return createVm({}, vnode.component!)
  }
}

export const defineComponent = hooks.defineComponent

export default hooks

export type { PropType, ComponentPublicInstance, App, VNode } from 'vue'
