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

import type {
  ICascaderNodeApi,
  ICascaderNodeProps,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils,
  ICascaderNodeRenderlessParams,
  ICascaderNodeState
} from '../../types'
import {
  comptCheckPath,
  handleExpand,
  isInPath,
  handleCheckChange,
  handleMultiCheckChange,
  handleNodeClick
} from './index'

export const api = ['state', 'handleMultiCheckChange', 'handleCheckChange', 'handleExpand', 'handleNodeClick']

export const renderless = (
  props: ICascaderNodeProps,
  { computed, reactive, inject, watch }: ISharedRenderlessParamHooks,
  {}: ISharedRenderlessParamUtils
): ICascaderNodeApi => {
  const api = {} as ICascaderNodeApi
  const state = reactive({
    // cascader-panel 通过 provide('cascaderPanelVm') 注入的 TinyVM（$emitter 总线广播用），先放入 state 再使用
    cascaderPanelVm: inject('cascaderPanelVm', null) as ICascaderNodeState['cascaderPanelVm'],
    // cascader-panel 通过 provide('panel') 注入的 panel api
    panel: inject('panel') as ICascaderNodeRenderlessParams['panel'],
    config: computed(() => state.panel.state.config),
    isLeaf: computed(() => props.node.isLeaf),
    isDisabled: computed(() => props.node.isDisabled),
    checkedValue: computed(() => state.panel.state.checkedValue),
    isChecked: computed(() => props.node.isSameNode(state.checkedValue)),
    inActivePath: computed(() => api.isInPath(state.panel.state.activePath)),
    inCheckedPath: computed(() => api.comptCheckPath()),
    value: computed(() => props.node.getValueByOption()),
    // 仅 mf 用到nodeLabel
    nodeLabel: computed(() => {
      return state.panel.state.renderLabelFn
        ? state.panel.state.renderLabelFn({ node: props.node, data: props.node.data })
        : props.node.label
    })
  }) as ICascaderNodeState

  if (state.panel.state.config.expandTrigger !== 'click') {
    watch(
      () => state.checkedValue,
      (checkedValue) => {
        if (checkedValue.includes(props.node.value)) {
          api.handleExpand()
        }
      }
    )
  }

  Object.assign(api, {
    state,
    isInPath: isInPath(props),
    handleExpand: handleExpand({ api, props, state }),
    comptCheckPath: comptCheckPath({ api, state }),
    handleCheckChange: handleCheckChange({ api, state }),
    handleMultiCheckChange: handleMultiCheckChange({ state, props }),
    handleNodeClick: handleNodeClick({ state, api })
  })

  return api
}
