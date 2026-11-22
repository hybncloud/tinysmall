import type { VNode } from 'vue'
import type {
  ICascaderPanelApi,
  ICascaderPanelConfig,
  ICascaderPanelNodePropValue,
  ICascaderPanelNodeValue,
  ICascaderPanelNode
} from './cascader-panel.type'
import type { ISharedRenderlessFunctionParams, ITinyVm } from './shared.type'
import type {
  isInPath,
  handleExpand,
  comptCheckPath,
  handleCheckChange,
  handleMultiCheckChange,
  handleNodeClick
} from '../src/cascader-node'

export interface ICascaderNodeProps {
  node: ICascaderPanelNode
  nodeId: string
}

export interface ICascaderNodeState {
  /** cascader-panel 通过 provide('cascaderPanelVm') 注入的 TinyVM（$emitter 总线广播用） */
  cascaderPanelVm: ITinyVm | null
  /** cascader-panel 通过 provide('panel') 注入的 panel api */
  panel: ICascaderPanelApi
  config: ICascaderPanelConfig
  isLeaf: boolean
  isDisabled: boolean
  checkedValue: ICascaderPanelNodeValue[]
  isChecked: boolean
  inActivePath: boolean
  inCheckedPath: boolean
  value: ICascaderPanelNodePropValue
  nodeLabel: string | VNode
}

export interface ICascaderNodeApi {
  state: ICascaderNodeState
  isInPath: ReturnType<typeof isInPath>
  handleExpand: ReturnType<typeof handleExpand>
  comptCheckPath: ReturnType<typeof comptCheckPath>
  handleCheckChange: ReturnType<typeof handleCheckChange>
  handleMultiCheckChange: ReturnType<typeof handleMultiCheckChange>
  handleNodeClick: ReturnType<typeof handleNodeClick>
}

export type ICascaderNodeRenderlessParams = ISharedRenderlessFunctionParams & {
  state: ICascaderNodeState
  props: ICascaderNodeProps
  api: ICascaderNodeApi
  panel: ICascaderPanelApi // cascader-panel 通过 provide('panel') 注入的 panel api（renderless 与 pc.vue 模板共用）
}
