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
  IDropdownItemState,
  IDropdownItemApi,
  IDropdownItemProps,
  IDropdownItemRenderlessParamUtils,
  ISharedRenderlessParamHooks,
  IDropdownMenuVm
} from '../../types'
import {
  tagClick,
  confirm,
  clickOutside,
  getOptionStyle,
  reset,
  getTitle,
  bindScroll,
  toggle,
  onScroll,
  open,
  opened,
  close,
  closed,
  clickItem,
  clickWrapper,
  getItemStyle,
  handleClick,
  computedGetIcon,
  computedTip
} from './index'


const initState = ({ reactive, computed, api, props, dropdownMenuVm, dropdownVm }) => {
  const state: IDropdownItemState = reactive({
    checkedStatus: dropdownMenuVm?.checkedStatus,
    sort: props.modelValue,
    transition: true,
    getTitle: false,
    showWrapper: false,
    showPopup: false,
    duration: dropdownMenuVm?.duration,
    overlay: computed(() => dropdownMenuVm?.overlay),
    offset: computed(() => dropdownMenuVm?.state.offset),
    direction: computed(() => dropdownMenuVm?.direction),
    displayTitle: computed(() => api.getTitle()),
    itemStyle: computed(() => api.getItemStyle()),
    activeColor: computed(() => dropdownMenuVm?.activeColor),
    closeOnClickOverlay: computed(() => dropdownMenuVm?.closeOnClickOverlay),
    // dropdown-menu 通过 provide('dropdownMenuVm') 暴露 vm，替代组件链 parent 访问；后续统一从 state.dropdownMenuVm 取用
    dropdownMenuVm,
    dropdownVm,
    currentIndex: props.currentIndex,
    textField: dropdownMenuVm?.textField || props.textField,
    popperClass: dropdownMenuVm?.popperClass || '',
    sizeClass: dropdownVm?.size ? `tiny-dropdown-item--${dropdownVm?.size}` : '',
    getIcon: computed(() => api.computedGetIcon()),
    children: [],
    computedTip: computed(() => api.computedTip())
  })

  return state
}

const initApi = ({ api, state, emit, props, dropdownMenuVm, dropdownVm, vm }) => {
  Object.assign(api, {
    state,
    open: open(emit),
    opened: opened(emit),
    close: close(emit),
    getTitle: getTitle(props),
    onScroll: onScroll(dropdownMenuVm),
    reset: reset({ emit, props }),
    closed: closed({ emit, state }),
    clickWrapper: clickWrapper(dropdownMenuVm),
    clickOutside: clickOutside(dropdownMenuVm),
    tagClick: tagClick({ emit, props }),
    getOptionStyle: getOptionStyle(state),
    toggle: toggle({ dropdownMenuVm, props, state }),
    clickItem: clickItem({ emit, props, state }),
    getItemStyle: getItemStyle({ dropdownMenuVm, state }),
    bindScroll: bindScroll({ api, dropdownMenuVm }),
    confirm: confirm({ emit, props, state }),
    handleClick: handleClick({ state, props, dropdownVm, vm, emit }),
    computedGetIcon: computedGetIcon({}),
    computedTip: computedTip({ props, vm })
  })
}

export const renderless = (
  props: IDropdownItemProps,
  { computed, onMounted, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { emit, vm }: IDropdownItemRenderlessParamUtils
): IDropdownItemApi => {
  const api = {} as IDropdownItemApi
  const dropdownVm = inject('dropdownVm', null)
  const state: IDropdownItemState = initState({
    reactive,
    computed,
    api,
    props,
    dropdownMenuVm: inject('dropdownMenuVm', null),
    dropdownVm
  })

  initApi({ api, state, emit, props, dropdownMenuVm: state.dropdownMenuVm, dropdownVm: state.dropdownVm, vm })

  watch(() => state.showPopup, api.bindScroll)

  onMounted(() => {
    if (state.dropdownMenuVm) {
      state.dropdownMenuVm.state.children.push(vm)
    }

    if (props.disabled) {
      state.checkedStatus = false
    }
  })

  return api
}
