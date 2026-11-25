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
  IDropdownVm,
  IDropdownMenuState,
  IDropdownMenuApi,
  IDropdownMenuProps,
  IDropdownMenuRenderlessParamUtils,
  ISharedRenderlessParamHooks
} from '../../types'
import {
  toggleItem,
  updateOffset,
  clickOutside,
  getScroller,
  useVuePopper,
  mounted,
  handleMenuItemClick,
  handleMouseenter,
  handleMouseleave
} from './index'


export const renderless = (
  props: IDropdownMenuProps,
  hooks: ISharedRenderlessParamHooks,
  instance: IDropdownMenuRenderlessParamUtils
): IDropdownMenuApi => {
  const api = {} as IDropdownMenuApi
  const { reactive, provide, onMounted, inject } = hooks
  const { nextTick, vm, emit } = instance

  provide('dropdownMenuVm', vm)
  provide('multiStage', props.multiStage)
  const dropdownVm: IDropdownVm = inject('dropdownVm')

  const state: IDropdownMenuState = reactive({
    offset: 0,
    scroller: null,
    children: [],
    size: '',
    showPopper: false,
    initShowPopper: !dropdownVm.lazyShowPopper, // 辅助变量,
    label: '',
    showContent: false,
    selected: false,
    selectedIndex: -1,
    canvasHeight: inject('change-size', null)
  })

  useVuePopper({ api, hooks, props, instance, state, dropdownVm })

  Object.assign(api, {
    state,
    toggleItem: toggleItem(state),
    clickOutside: clickOutside({ props, state }),
    updateOffset: updateOffset({ props, state, vm }),
    mounted: mounted({ api, vm, state }),
    handleMouseenter: handleMouseenter(emit),
    handleMouseleave: handleMouseleave(emit),
    handleMenuItemClick: handleMenuItemClick({ dropdownVm, state })
  })

  onMounted(api.mounted)

  return api
}
