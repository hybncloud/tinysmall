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
  getStrictData,
  getTreeCheckableData,
  getFilterTreeData,
  getFilterData,
  getCheckableData,
  checkedEvent,
  watchData,
  getCheckedSummary,
  getDeteminate,
  watchChecked,
  watchDefaultCheckded,
  updateAllChecked,
  handleAllCheckedChange,
  clearQuery,
  setPosition,
  selectChange,
  setExpandCache
} from './index'


const initState = ({ reactive, props, transfer, computed, api, slots }) => {
  const state = reactive({
    query: '',
    checked: [],
    allChecked: false,
    transfer,
    render: {},
    checkChangeByUser: true,
    filteredData: computed(() => api.getFilterData()),
    checkableData: computed(() => api.getCheckableData()),
    checkedSummary: computed(() => api.getCheckedSummary()),
    isIndeterminate: computed(() => api.getDeteminate()),
    hasNoMatch: computed(() => state.query.length > 0 && state.filteredData.length === 0),
    labelProp: computed(() => props.props.label || 'label'),
    keyProp: computed(() => props.props.key || 'key'),
    disabledProp: computed(() => props.props.disabled || 'disabled'),
    childrenProp: computed(() => (props.treeOp && props.treeOp.props && props.treeOp.props.childern) || 'children'),
    hasFooter: computed(
      () => (!!transfer?.$slots['left-footer'] || !!transfer?.$slots['right-footer']) && !!slots.default
    ),
    renderType: computed(() => props.render && props.render.plugin.name),
    expanded: [],
    inputBoxType: 'underline',
    showInputSearch: true
  })

  return state
}

const initStateRender = ({ reactive, state, props, api }) =>
  reactive({
    keys: state.keyProp,
    data: [],
    defaultExpandedKeys: state.expanded,
    ...props.treeOp,
    on: {
      'checked-change': (selected, isAll) => {
        api.selectChange(selected, isAll)
      },
      check: (data, { checkedKeys }) => {
        state.checked = checkedKeys
      },
      'node-expand': (node) => api.setExpandCache(node, true),
      'node-collapse': (node) => api.setExpandCache(node, false)
    }
  })

const initWatcher = ({ watch, state, api, props }) => {
  watch(
    () => state.checked,
    (value, oldvalue) => api.watchChecked({ value, oldvalue })
  )

  watch(() => props.data, api.watchData, { immediate: true })

  watch(() => state.checkableData, api.updateAllChecked)

  watch(
    () => props.defaultChecked,
    (value, oldvalue) => api.watchDefaultCheckded({ value, oldvalue }),
    { immediate: true }
  )
}

export const renderless = (props, { computed, reactive, watch, toRaw, inject }, { emit, vm, slots }) => {
  const api: Record<string, any> = {}
  const Tree = 'TinyTree'

  const transfer = inject('transfer', null)
  const state = initState({ reactive, props, transfer, computed, api, slots })

  Object.assign(api, {
    state,
    toRaw,
    setPosition: setPosition({ state }),
    selectChange: selectChange(state),
    clearQuery: clearQuery(state),
    checkedEvent: checkedEvent(state),
    getDeteminate: getDeteminate(state),
    updateAllChecked: updateAllChecked({ state, Tree }),
    handleAllCheckedChange: handleAllCheckedChange({ state, Tree, vm }),
    getCheckedSummary: getCheckedSummary({ props, state, Tree }),
    getFilterTreeData: getFilterTreeData({ props, state }),
    getTreeCheckableData: getTreeCheckableData(state),
    getStrictData: getStrictData({ props, state }),
    setExpandCache: setExpandCache(state),
    getCheckableData: getCheckableData({ api, state, Tree }),
    getFilterData: getFilterData({ api, props, state, Tree }),
    watchData: watchData({ api, props, state, Tree }),
    watchDefaultCheckded: watchDefaultCheckded({ api, props, state, Tree }),
    watchChecked: watchChecked({ api, emit, state })
  })

  state.render = initStateRender({ reactive, state, props, api })

  initWatcher({ watch, state, api, props })

  return api
}
