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
  ITabBarPcState,
  ITabBarPcApi,
  ITabBarPcProps,
  ISharedRenderlessParamHooks,
  ITabBarPcRenderlessParamUtils
} from '../../types'
import { computedBarStyle } from './index'

export const api = ['state', 'computedBarStyle']

export const renderless = (
  props: ITabBarPcProps,
  { inject, reactive }: ISharedRenderlessParamHooks
): ITabBarPcApi => {
  const state = reactive({
    rootTabs: inject('rootTabs'),
    barStyle: {},
    separator: inject('separator', null)
  }) as ITabBarPcState

  const api: ITabBarPcApi = {
    state,
    // tabs 通过 provide('rootTabs') 暴露 vm，替代组件链 parent 访问
    computedBarStyle: computedBarStyle(state.rootTabs)
  }

  return api
}
