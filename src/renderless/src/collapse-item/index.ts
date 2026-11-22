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

import type { ICollapseItemRenderlessParams } from '../../types'

export const handleFocus =
  ({ state, interval }: Pick<ICollapseItemRenderlessParams, 'state' | 'interval'>) =>
  () => {
    setTimeout(() => {
      if (!state.isClick) {
        state.focusing = true
      } else {
        state.isClick = false
      }
    }, interval)
  }

export const handleHeaderClick =
  ({
    collapseVm,
    eventName,
    props,
    vm,
    state
  }: Pick<ICollapseItemRenderlessParams, 'eventName' | 'props' | 'vm' | 'state'> & { collapseVm: any }) =>
  () => {
    if (props.disabled) {
      return
    }

    // 替代 dispatch('Collapse', eventName)：见 collapse-item/vue.ts，走 collapse TinyVM 的 $emitter 纯总线广播
    collapseVm?.$emitter.emit(eventName, vm)

    state.focusing = false
    state.isClick = true
  }

export const handleHeaderContainerClick =
  ({ api }) =>
  (e) => {
    // Tiny新增 只有在点击头部容器的时候才触发handleHeaderClick逻辑，修复点击头部编辑按钮的时导致折叠面板自动关闭问题
    if (e.target === e.currentTarget) {
      api.handleHeaderClick()
    }
  }

export const handleEnterClick =
  ({
    collapseVm,
    eventName,
    vm
  }: Pick<ICollapseItemRenderlessParams, 'eventName' | 'vm'> & { collapseVm: any }) =>
  () =>
    collapseVm?.$emitter.emit(eventName, vm)
