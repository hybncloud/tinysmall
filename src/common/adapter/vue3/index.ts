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

import { emitter } from '../utils'

export { Teleport }

export const markRaw = hooks.markRaw

const setInstanceEmitter = (instance) => {
  const $emitter = emitter()

  if (typeof instance.$emitter === 'undefined') Object.defineProperty(instance, '$emitter', { get: () => $emitter })
}

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

// 跳过异步组件包装层：子组件的 parent 链可能被 AsyncComponentWrapper 隔开
const getRealParent = (vm) => {
  if (vm && vm.parent)
    return vm.parent.type.name === 'AsyncComponentWrapper' && vm.parent.parent ? vm.parent.parent : vm.parent
}

const defineProperties = (vm, instance, property, filter) => {
  for (const name in instance[property]) {
    if (typeof filter === 'function' && filter(name)) continue

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
  defineProperties(vm, instance, 'setupState', null)
  defineProperties(vm, instance, 'props', (name) => name.indexOf('_') === 0)
  defineProperties(vm, instance, 'ctx', (name) => name.indexOf('_') === 0)
  return vm
}

const createVm = (vm, instance, context = null) => {
  let $emitter = instance.$emitter

  if (!$emitter) {
    setInstanceEmitter(instance)
    $emitter = instance.$emitter
  }

  const emit = (...args) => {
    instance.emit(...args)
    $emitter.emit.apply(vm, args)
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
      get: () => instance.parent && createVm({}, getRealParent(instance))
    },
    $refs: { get: () => instance.refs },
    $scopedSlots: { get: () => instance.slots },
    $slots: { get: () => instance.slots },
    slots: { configurable: true, get: () => instance.slots }
  })

  return vm
}

export const tools = (context) => {
  const instance = hooks.getCurrentInstance() as any
  const i18n = instance?.proxy?.$root?.$i18n
  const { dispatch, broadcast } = emitEvent(instance)
  const vm = createVm({}, instance, context)
  const emit = context.emit

  const refs = new Proxy(
    {},
    {
      get: (_, name) => (instance.refs ? instance.refs[name] : undefined),
      set: (_, name, value) => {
        instance.refs[name] = value
        return true
      },
      has: (_, name) => (instance.refs ? name in instance.refs : false),
      deleteProperty: (_, name) => {
        if (instance.refs) return delete instance.refs[name]
        return false
      },
      ownKeys: () => (instance.refs ? Reflect.ownKeys(instance.refs) : []),
      getOwnPropertyDescriptor: (_, name) =>
        instance.refs ? Reflect.getOwnPropertyDescriptor(instance.refs, name) : undefined
    }
  )

  const parentVm = getRealParent(instance) ? createVm({}, getRealParent(instance)) : null

  const defineInstanceProperties = (props) => {
    Object.defineProperties(vm, props)
    Object.defineProperties(instance?.ctx, props)
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
    slots: instance?.slots,
    attrs: context.attrs,
    parent: parentVm,
    nextTick: hooks.nextTick,
    defineInstanceProperties
  }
}

const mapping = (content, before, after) => {
  if (typeof content[before] !== 'undefined') {
    const fn = content[before]

    content[after] = (el, binding, vnode) => {
      vnode.context = binding.instance
      fn(el, binding, vnode)
    }

    delete content[before]
  }
}

export const directive = (directives) => {
  for (const name in directives) {
    const content = directives[name]

    mapping(content, 'inserted', 'mounted')
    mapping(content, 'bind', 'beforeMount')
    mapping(content, 'update', 'updated')
    mapping(content, 'unbind', 'unmounted')
  }

  return directives
}

export const parseVnode = (vnode) => vnode

const { Text, Comment } = hooks

export const isEmptyVnode = (vnode) => !vnode || !vnode.type || [Text, Comment].includes(vnode.type)

export const h = hooks.h

export const createComponentFn = () => {
  return ({ component, propsData, el }) => {
    const vnode = hooks.createVNode(component, propsData)
    hooks.render(vnode, el)
    return createVm({}, vnode.component)
  }
}

export const defineComponent = hooks.defineComponent

export default hooks

export type { PropType, ComponentPublicInstance, App, VNode } from 'vue'
