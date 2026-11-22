import type { ExtractPropTypes } from 'vue'
import type { ITabsVm } from './tabs.type'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { tabBarProps } from '../../components/tabs/src/tab-nav'
import type { computedBarStyle } from '../src/tab-bar'

export type ITabBarPcProps = ExtractPropTypes<typeof tabBarProps>

export interface ITabBarPcState {
  rootTabs: ITabsVm
  barStyle: object
  separator: boolean | null
}

export interface ITabBarPcApi {
  state: ITabBarPcState
  computedBarStyle: ReturnType<typeof computedBarStyle>
}

export type ITabBarPcRenderlessParamUtils = ISharedRenderlessParamUtils

export type ITabBarPcRenderlessParams = ISharedRenderlessFunctionParams<
  ITabBarPcProps,
  ITabBarPcState,
  ITabBarPcApi
> & {
  rootTabs: ITabsVm
}

export interface ITabBarStyle {
  transform: string
  msTransform: string
  webkitTransform: string
}
