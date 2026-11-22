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

import { $constants as collapseItemConstants } from './constants'
import { $constants as collapseConstants } from '../collapse/constants'
import type {
  ICollapseItemProps,
  ICollapseItemState,
  ICollapseItemApi,
  ISharedRenderlessParamHooks,
  ICollapseItemRenderlessParamUtils
} from '../../types'
import { handleFocus, handleEnterClick, handleHeaderClick, handleHeaderContainerClick } from './index'
import { guid } from '@tinysmall/utils'

export const api = [
  'state',
  'isActive',
  'handleFocus',
  'handleEnterClick',
  'handleHeaderClick',
  'handleHeaderContainerClick'
]

export const renderless = (
  props: ICollapseItemProps,
  { computed, inject, reactive }: ISharedRenderlessParamHooks,
  { vm }: ICollapseItemRenderlessParamUtils
) => {
  const collapse = inject('collapse')
  // 替代 dispatch('Collapse', eventName)：collapse 通过 provide('collapseVm') 暴露 TinyVM，
  // 走 $emitter.emit 纯总线广播（collapse 以 vm.$on(eventName) 订阅）
  const collapseVm = inject('collapseVm', null)
  const _constants = collapseConstants
  const eventName = _constants.EVENT_NAME.CollapseItemClick

  const state: ICollapseItemState = reactive({
    id: guid(),
    isClick: false,
    focusing: false,
    contentHeight: 0,
    contentWrapStyle: { height: 'auto', display: 'block' },
    size: collapse.size,
    isActive: computed(() => collapse.state.activeNames.includes(props.name)),
    arrowIcon: props.expandIcon || 'IconChevronRight'
  })

  const api: ICollapseItemApi = {
    state,
    handleFocus: handleFocus({ state, interval: collapseItemConstants.INTERVAL }),
    handleEnterClick: handleEnterClick({ collapseVm, eventName, vm }),
    handleHeaderClick: handleHeaderClick({ collapseVm, eventName, props, vm, state })
  }

  Object.assign(api, {
    handleHeaderContainerClick: handleHeaderContainerClick({ api })
  })

  return api
}
