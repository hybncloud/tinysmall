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

import {
  initStore,
  checkNode,
  getMenuIndex,
  isLeaf,
  focusNode,
  getCheckedNodes,
  clearCheckedNodes,
  getFlattedNodes,
  getNodeByValue,
  scrollIntoView,
  calculateMultiCheckedValue,
  lazyLoad,
  handleCheckChange,
  handleExpand,
  handleKeyDown,
  calculateCheckedNodePaths,
  expandNodes,
  syncActivePath,
  watchCheckedValue,
  syncCheckedValue,
  syncMenuState,
  syncMultiCheckState
} from './index'
import { merge } from '@tinysmall/utils'
import { isEmpty } from '../cascader'
import Store from './store'
import type {
  ICascaderPanelApi,
  ICascaderPanelProps,
  ICascaderPanelRenderlessParamUtils,
  ICascaderPanelRenderlessParams,
  ISharedRenderlessParamHooks
} from '../../types'


const initDefaultProps = () => ({
  expandTrigger: 'click',
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: () => undefined,
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled',
  hoverThreshold: 500
})

const initState = ({ reactive, props, inject, computed, slots }) => {
  const DefaultProps = initDefaultProps()

  // cascader 上下文来自 inject('cascader')（见 cascader/vue.ts），整个 vm 放入 state
  const cascader = inject('cascader', null)

  const state = reactive({
    checkedValue: null,
    checkedNodePaths: [],
    store: [],
    menus: [],
    activePath: [],
    loadCount: 0,
    cascader,
    config: computed(() => merge({ ...DefaultProps }, props.props || {})),
    multiple: computed(() => state.config.multiple),
    checkStrictly: computed(() => state.config.checkStrictly),
    leafOnly: computed(() => !state.checkStrictly),
    isHoverMenu: computed(() => state.config.expandTrigger === 'hover'),
    renderLabelFn: computed(() => props.renderLabel || slots.default || cascader?.$scopedSlots.default)
  })

  return state
}

const initApi = ({
  api,
  state,
  menus,
  props,
  nextTick,
  emit
}: Pick<ICascaderPanelRenderlessParams, 'api' | 'state' | 'menus' | 'props' | 'nextTick' | 'emit'>) => {
  Object.assign(api, {
    state,
    isLeaf: isLeaf(),
    getMenuIndex: getMenuIndex(),
    getNodeByValue: getNodeByValue(state),
    getFlattedNodes: getFlattedNodes(state),
    handleCheckChange: handleCheckChange(state),
    scrollIntoView: scrollIntoView({ menus }),
    syncActivePath: syncActivePath({ api, state }),
    initStore: initStore({ api, props, state, Store }),
    syncMenuState: syncMenuState({ api, nextTick, state }),
    syncMultiCheckState: syncMultiCheckState({ api, state }),
    calculateCheckedNodePaths: calculateCheckedNodePaths({ api, state }),
    lazyLoad: lazyLoad({ api, state, Store, emit }),
    syncCheckedValue: syncCheckedValue({ api, props, state }),
    focusNode: focusNode(api),
    checkNode: checkNode(api),
    expandNodes: expandNodes(api),
    handleExpand: handleExpand({ emit, state }),
    getCheckedNodes: getCheckedNodes({ api, state }),
    clearCheckedNodes: clearCheckedNodes({ api, state }),
    calculateMultiCheckedValue: calculateMultiCheckedValue({ api, state }),
    watchCheckedValue: watchCheckedValue({ api, emit, props, state }),
    handleKeyDown: handleKeyDown({ api, emit, menus })
  })
}

const initWatch = ({
  watch,
  state,
  props,
  api
}: Pick<ICascaderPanelRenderlessParams, 'watch' | 'state' | 'props' | 'api'>) => {
  watch(
    () => props.options,
    () => api.initStore(),
    { deep: true, immediate: true }
  )

  watch(
    () => props.modelValue,
    () => {
      api.syncCheckedValue()
      state.checkStrictly && api.calculateCheckedNodePaths()
    }
  )

  watch(
    () => state.checkedValue,
    (value) => {
      api.watchCheckedValue(value)
    },
    { deep: true }
  )
}

export const renderless = (
  props: ICascaderPanelProps,
  { computed, onMounted, reactive, watch, provide, inject }: ISharedRenderlessParamHooks,
  { vm, nextTick, emit, slots }: ICascaderPanelRenderlessParamUtils
) => {
  const api = {} as ICascaderPanelApi
  const menus: ICascaderPanelRenderlessParams['vm'][] = []

  // 下发自身 vm（TinyVM），供 cascader-node 替代 dispatch('TinyCascaderPanel', 'close')
  provide('cascaderPanelVm', vm)
  // 桥接：cascader-node 通过 $emitter 广播的内部事件 'panel:close'，
  // 这里以公共事件 'close' 对外触发（cascader 模板的 @close 监听随之生效）。
  // setup 级 emit 仅走 instance.emit、不回总线，与内部事件名不同名故无重入风险
  vm.$on('panel:close', () => emit('close', false))
  const state = initState({ reactive, props, inject, computed, slots })

  // 子组件注册：cascader-menu 在 setup 时注册自身，替代遍历子树的 childrenHandler
  provide('registerMenu', (menu: ICascaderPanelRenderlessParams['vm']) => menus.push(menu))
  provide('unregisterMenu', (menu: ICascaderPanelRenderlessParams['vm']) => {
    const index = menus.indexOf(menu)

    index > -1 && menus.splice(index, 1)
  })

  initApi({ api, state, menus, props, nextTick, emit })

  initWatch({ watch, state, props, api })

  onMounted(() => !isEmpty(props.modelValue) && api.syncCheckedValue())

  return api
}
