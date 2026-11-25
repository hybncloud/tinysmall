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

import { debounce } from '@tinysmall/utils'
import {
  created,
  handleDragEnd,
  handleDrop,
  handleDragOver,
  handleDragStart,
  handleContentClick,
  handleChildNodeExpand,
  handleCheckChange,
  handleExpandIconClick,
  handleExpandClick,
  handleContextMenu,
  handleClick,
  handleSelectChange,
  getNodeKey,
  watchIndeterminate,
  watchChecked,
  watchExpanded,
  closeMenu,
  openEdit,
  addNode,
  saveEdit,
  deleteNode,
  onSiblingToggleExpand,
  watchExpandedChange,
  computedExpandIcon,
  computedIndent
} from './index'

const initState = ({ reactive, props, emitter, vm, api, inject, computed }) => {
  const state = reactive({
    // tree 通过 provide('TreeRoot') 注入的根 tree vm
    tree: inject('TreeRoot'),
    /** tree 通过 provide('parentEmitter') 注入的根组件事件总线 */
    parentEmitter: inject('parentEmitter'),
    // tree-select 通过 provide('TreeAdapter') 注入的适配器（可能为 null）
    treeAdapter: inject('TreeAdapter', null),
    expanded: false,
    oldChecked: null,
    indeterminate: null,
    oldIndeterminate: null,
    expandIcon: props.expandIcon,
    childNodeRendered: false,
    showMenu: false,
    menuposition: { position: 'absolute', top: 0, left: 0 },
    shrinkIcon: props.shrinkIcon,
    expandIconColor: props.expandIconColor,
    shrinkIconColor: props.shrinkIconColor,
    emitter: emitter(),
    props: null,
    renderedChildNodes: computed(() => {
      return props.node.childNodes.filter((childNode) =>
        state.treeAdapter ? state.treeAdapter.shouldRender(childNode) : true
      )
    }),
    computedExpandIcon: computed(() => api.computedExpandIcon(state.tree, state)),
    computedIndent: computed(() => api.computedIndent(props, state))
  })

  state.props = state.tree.props

  return state
}

const initApi = ({ api, state, vm, props, nextTick, emit }) => {
  Object.assign(api, {
    state,
    watchExpanded: debounce(20, watchExpanded({ state })),
    created: created({ props, state }),
    getNodeKey: getNodeKey(state),
    closeMenu: closeMenu(state),
    handleSelectChange: handleSelectChange({ props, state }),
    handleContextMenu: handleContextMenu({ vm, props, state, nextTick }),
    handleExpandClick: handleExpandClick({ emit, vm, props, state }),
    handleCheckChange: handleCheckChange({ nextTick, props, state }),
    handleDragStart: handleDragStart({ state, vm }),
    handleDragOver: handleDragOver({ state, vm }),
    handleDrop: handleDrop(),
    handleDragEnd: handleDragEnd({ state, vm }),
    handleContentClick: handleContentClick({ nextTick, props, state, emit }),
    onSiblingToggleExpand: onSiblingToggleExpand({ state, props }),
    watchExpandedChange: watchExpandedChange({ state, props }),
    handleClick: handleClick({ api, vm, props, state }),
    watchIndeterminate: watchIndeterminate({ api, props }),
    watchChecked: watchChecked({ api, props }),
    openEdit: openEdit({ state, vm }),
    addNode: debounce(500, true, addNode({ state, props, api })),
    saveEdit: saveEdit({ state }),
    deleteNode: deleteNode({ state }),
    handleChildNodeExpand: handleChildNodeExpand(state),
    handleExpandIconClick: handleExpandIconClick({ api, state }),
    computedExpandIcon: computedExpandIcon({}),
    computedIndent: computedIndent()
  })
}

const initWatcher = ({ watch, state, api, props }) => {
  watch(() => state.expanded, api.watchExpandedChange)

  watch(() => props.node.indeterminate, api.watchIndeterminate, { deep: true })

  watch(() => props.node.checked, api.watchChecked, { deep: true })

  watch(() => props.node.expanded, api.watchExpanded, { deep: true })
}

export const renderless = (props, { reactive, watch, inject, provide, computed }, { vm, nextTick, emit, emitter }) => {
  const api: Record<string, any> = {}
  const state = initState({ reactive, props, emitter, vm, api, inject, computed })

  if (state.tree.accordion) {
    state.parentEmitter.on('sibling-node-toggle-expand', (event) => api.onSiblingToggleExpand(event))
  }

  provide('parentEmitter', state.emitter)

  initApi({ api, state, vm, props, nextTick, emit })
  initWatcher({ watch, state, api, props })

  api.created((childrenKey) => {
    watch(
      () => props.node.data[childrenKey],
      () => {
        props.node.updateChildren()
      }
    )

    props.node.updateMethod = (node, field) => {
      field === 'expanded' && api.watchExpanded(node[field])
    }
  })

  state.parentEmitter.on('closeMenu', () => {
    api.closeMenu()
    state.emitter.emit('closeMenu')
  })

  return api
}
