import type { ExtractPropTypes, ComponentPublicInstance } from 'vue'
import type { tabsProps, $constants } from '../../components/tabs/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils, ITinyVm } from './shared.type'
import type {
  calcPaneInstances,
  registerPane,
  unregisterPane,
  calcMorePanes,
  calcExpandPanes,
  handleTabClick,
  handleTabRemove,
  handleTabAdd,
  setCurrentName,
  changeCurrentName,
  created,
  changeDirection,
  handleTabDragStart,
  handleTabDragOver,
  handleTabDragEnd
} from '../src/tabs'

export interface ITabsState {
  panes: ITabsPaneVm[]
  currentName: string
  currentIndex: number
  showPanesCount: number
  startX: number
  startY: number
  deltaX: number
  deltaY: number
  offsetX: number
  offsetY: number
  direction: string
  expandPanesWidth: string | number
  activeIndex: number
  morePanes?: ITabsPaneVm[]
  separator?: boolean
  headerOnly?: boolean
}

/**
 *tab根元素实例对象
 */
export type ITabsVm = ComponentPublicInstance &
  { state: ITabsState } &
  ITabsProps & {
    // tabs vm 暴露的 pane 注册接口（由 api 提供，供 tab-item 通过 rootTabs vm 调用）
    registerPane?: (pane: ITabsPaneVm) => void
    unregisterPane?: (pane: ITabsPaneVm) => void
  }

export type ITabsPaneVm = ITinyVm<{ TAB_ITEM: string }> | ITabsPane | ITabsVm

/**
 * pane对象类型
 */
export interface ITabsPane {
  name: string
  disabled: boolean
  state: ITabsState
}

/**
 * 自定义拖拽事件
 */
export interface ITabsCustomEvent {
  originalEvent: DragEvent
  oldDraggableIndex: number
  newDraggableIndex: number
}

export interface ITabsApi {
  state: ITabsState
  registerPane: ReturnType<typeof registerPane>
  unregisterPane: ReturnType<typeof unregisterPane>
  handleTabAdd: ReturnType<typeof handleTabAdd>
  handleTabRemove: ReturnType<typeof handleTabRemove>
  changeDirection: ReturnType<typeof changeDirection>
  changeCurrentName: ReturnType<typeof changeCurrentName>
  calcMorePanes: ReturnType<typeof calcMorePanes>
  calcExpandPanes: ReturnType<typeof calcExpandPanes>
  calcPaneInstances: ReturnType<typeof calcPaneInstances>
  handleTabDragStart: ReturnType<typeof handleTabDragStart>
  handleTabDragOver: ReturnType<typeof handleTabDragOver>
  handleTabDragEnd: ReturnType<typeof handleTabDragEnd>
  handleTabClick: ReturnType<typeof handleTabClick>
  setCurrentName: ReturnType<typeof setCurrentName>
  created: ReturnType<typeof created>
}

export type ITabsProps = ExtractPropTypes<typeof tabsProps>

export type ITabsConstants = typeof $constants

export type ITabsRenderlessParamUtils = ISharedRenderlessParamUtils

export type ITabsRenderlessParams = ISharedRenderlessFunctionParams<ITabsProps, ITabsState, ITabsApi>
