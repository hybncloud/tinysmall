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
import { $constants } from './constants'
import type {
  ICollapseProps,
  ICollapseState,
  ICollapseApi,
  ISharedRenderlessParamHooks,
  ICollapseRenderlessParamUtils
} from '../../types'

import { setActiveNames, handleItemClick } from './index'


export const renderless = (
  props: ICollapseProps,
  { reactive, watch, provide }: ISharedRenderlessParamHooks,
  { vm, emit}: ICollapseRenderlessParamUtils
) => {
  const eventName = $constants.EVENT_NAME.CollapseItemClick

  // 下发自身 vm（TinyVM），供 collapse-item 替代 dispatch(Collapse, CollapseItemClick)——
  // 注意 pc.vue 的 provide('collapse', this) 是公共代理，其 $emit 不经过 $emitter，
  // 而本组件的 vm.$on(eventName) 订阅在 $emitter 上，故事件通知走 collapseVm
  provide('collapseVm', vm)

  const state: ICollapseState = reactive({
    activeNames: []
  })

  const api: Partial<ICollapseApi> = {
    state,
    setActiveNames: setActiveNames({ emit, props, state })
  }

  api.handleItemClick = handleItemClick({ api: api as ICollapseApi, props, state })

  watch(
    () => props.modelValue,
    (value) => {
      state.activeNames = value || value === 0 ? ([] as Array<string>).concat(value as Array<string> | string) : []
    },
    { immediate: true, deep: true }
  )

  vm.$on(eventName, api.handleItemClick)

  return api
}
