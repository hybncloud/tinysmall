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
import type { VNode } from 'vue'

import { hyphenate } from '@tinysmall/utils'
import { emitter } from '../utils'

export { Teleport }

export const markRaw = hooks.markRaw

export const renderComponent = ({
  view = undefined as any,
  component = undefined as any,
  props,
  context: { attrs, slots },
  extend = {}
}) => {
  return () => hooks.h(hooks.unref(view) || component, { ref: 'modeTemplate', ...props, ...attrs, ...extend }, slots)
}

export const appContext = () =>
  hooks.getCurrentInstance()?.appContext || {
    component: () => {
      // do nothing
    }
  }

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

const getRealParent = (vm) => {
  if (vm && vm.parent)
    return vm.parent.type.name === 'AsyncComponentWrapper' && vm.parent.parent ? vm.parent.parent : vm.parent
}

const regEventPrefix = /^on[A-Z]/

const generateListeners = (attrs) => {
  const $attrs = {}
  const $listeners = {}

  for (const name in attrs) {
    const event = attrs[name]

    if (regEventPrefix.test(name) && typeof event === 'function') {
      $listeners[hyphenate(name.substr(2))] = event
      continue
    }

    $attrs[name] = event
  }

  return { $attrs, $listeners }
}

const generateChildren = (subTree) => {
  const children: any = []
  children.refs = {}

  if (subTree) {
    const arr = subTree.dynamicChildren || subTree.children

    if (Array.isArray(arr)) {
      arr.forEach((child) => {
        if (child.component) {
          const vm = createVm({}, child.component)

          children.push(vm)
          child.props.ref && (children.refs[child.props.ref] = vm)
        }
      })
    } else if (subTree.component) {
      children.push(createVm({}, subTree.component))
    }
  }

  return children
}

const originalDefineProperties = (vm, instance, property, filter) => {
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

const defineProperties = originalDefineProperties

const filter = (name) => name.indexOf('_') === 0

const defineInstanceVm = (vm, instance) => {
  originalDefineProperties(vm, instance, 'setupState', null)
  originalDefineProperties(vm, instance, 'props', filter)
  defineProperties(vm, instance, 'ctx', filter)

  return vm
}

const createVm = (vm, instance, context = null) => {
  const { $attrs, $listeners } = generateListeners(instance.attrs)
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
    $attrs: { get: () => $attrs },
    $children: { get: () => generateChildren(instance.subTree) },
    $constants: { get: () => instance.props._constants },
    $emit: { get: () => emit },
    $el: { get: () => instance.vnode.el },
    $listeners: { get: () => $listeners },
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
    $slots: { get: () => instance.slots }
  })

  return vm
}

const onBeforeMount = (instance, refs) => {
  for (let name in instance.refs) {
    if (Object.prototype.hasOwnProperty.call(instance.refs, name)) {
      refs[name] = instance.refs[name]
    }
  }
}

export const tools = (context) => {
  const instance = hooks.getCurrentInstance() as any
  const root = instance?.appContext.config.globalProperties
  const i18n = instance?.proxy?.$root?.$i18n
  const { dispatch, broadcast } = emitEvent(instance)
  const vm = createVm({}, instance, context)
  const emit = context.emit
  const refs = {}
  const grandParent = getRealParent(instance)
  const parentVm = grandParent ? createVm({}, grandParent) : instance.parent ? createVm({}, instance.parent) : null

  const defineInstanceProperties = (props) => {
    Object.defineProperties(vm, props)
    Object.defineProperties(instance?.ctx, props)
  }

  const defineParentInstanceProperties = (props) => {
    parentVm && Object.defineProperties(parentVm, props)
  }

  hooks.onBeforeMount(() => defineInstanceVm(vm, instance))
  hooks.onMounted(() => onBeforeMount(instance, refs))

  return {
    vm,
    emit,
    emitter,
    dispatch,
    broadcast,
    i18n,
    refs,
    slots: instance?.slots,
    scopedSlots: instance?.slots,
    attrs: context.attrs,
    parent: parentVm,
    nextTick: hooks.nextTick,
    constants: instance?.props._constants,
    service: root?.$getService ? root?.$getService(vm) : root?.$service,
    getService: () => root?.$getService(vm),
    defineInstanceProperties,
    defineParentInstanceProperties
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

/** 与 vue 原生 h 等价；签名保持宽松以兼容仓内既有的动态调用方式 */
type CreateElement = (component: any, propsData?: any, childData?: any) => VNode

export const h: CreateElement = hooks.h

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
