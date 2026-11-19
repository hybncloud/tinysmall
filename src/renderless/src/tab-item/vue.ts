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
  ITabItemState,
  ITabItemApi,
  ITabItemProps,
  ISharedRenderlessParamHooks,
  ITabItemRenderlessParamUtils,
  ITabsVm
} from '../../types'
import { computedIsClosable, computedActive, computedPaneName, watchTitle } from './index'

export const api = ['state']

export const renderless = (
  props: ITabItemProps,
  { computed, inject, reactive, watch, onUnmounted }: ISharedRenderlessParamHooks,
  { parent, nextTick, vm }: ITabItemRenderlessParamUtils
): ITabItemApi => {
  const rootTabs = inject('rootTabs') as ITabsVm
  const registerPane = inject('registerPane') as ((pane: ITabsVm) => void) | undefined
  const unregisterPane = inject('unregisterPane') as ((pane: ITabsVm) => void) | undefined

  // 向所属 tabs 注册自身，替代 tabs 侧遍历子树的 childrenHandler
  registerPane?.(vm)

  onUnmounted(() => unregisterPane?.(vm))

  const api = {
    watchTitle: watchTitle(parent),
    computedIsClosable: computedIsClosable({ rootTabs, props })
  } as ITabItemApi

  const state = reactive({
    index: null,
    loaded: false,
    animateShow: true,
    rootTabs,
    active: computed(() => api.computedActive()),
    paneName: computed(() => api.computedPaneName()),
    isClosable: computed(() => api.computedIsClosable())
  }) as ITabItemState

  Object.assign(api, {
    state,
    computedActive: computedActive({ nextTick, props, state }),
    computedPaneName: computedPaneName({ props, state })
  })

  watch(() => props.title, api.watchTitle)

  return api
}
