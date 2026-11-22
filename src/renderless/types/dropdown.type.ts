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

import type { ExtractPropTypes, ComponentPublicInstance } from 'vue'
import type { dropdownProps } from '../../components/dropdown/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type IDropdownProps = ExtractPropTypes<typeof dropdownProps>

export interface IDropdownState {
  visible: boolean
  timeout: null | NodeJS.Timeout
  focusing: false
  menuItems: NodeListOf<HTMLElement> | undefined | null | []
  menuItemsArray: HTMLElement[] | null
  triggerElm: HTMLElement | null
  dropdownElm: HTMLElement | null
  listId: string
  showIcon: boolean
  showSelfIcon: boolean
  trigger: 'click' | 'hover'
  visibleIsBoolean: boolean
}

export interface IDropdownApi {
  state: IDropdownState
  watchVisible: (value: boolean) => void
  watchFocusing: (value: boolean) => void
  show: () => void
  hide: () => void
  mounted: () => void
  handleClick: () => void
  handleTriggerKeyDown: (event: KeyboardEvent) => void
  handleItemKeyDown: (event: KeyboardEvent) => void
  resetTabindex: (el: HTMLElement) => void
  removeTabindex: () => void
  initAria: () => void
  initEvent: () => void
  handleMenuItemClick: () => void
  handleMainButtonClick: (event: MouseEvent) => void
  triggerElmFocus: () => void
  initDomOperation: () => void
  beforeDistory: () => void
  clickOutside: () => void
  toggleFocusOnTrue: () => void
  toggleFocusOnFalse: () => void
}

export type IDropdownRenderlessParams = ISharedRenderlessFunctionParams<IDropdownProps, IDropdownState, IDropdownApi>

export type IDropdownRenderlessParamUtils = ISharedRenderlessParamUtils

export type IDropdownVm =
  | (ComponentPublicInstance & {
      size: string
      inheritWidth: boolean
      popperElm: HTMLElement
      initDomOperation: () => void
      /** createVm 暴露的组件事件总线，dropdown-menu 通过它订阅 dropdown 广播的事件 */
      $emitter: {
        emit: (event: string, ...args: any[]) => void
        on: (event: string, callback: (...args: any[]) => void) => void
        off: (...args: any[]) => void
      }
    })
  | undefined
