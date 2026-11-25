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

import type { ExtractPropTypes } from 'vue'
import type { dialogBoxProps, $constants } from '../../components/dialog-box/src'
import type {
  handleCancel,
  handleConfirm,
  handleMaskClick,
  hide,
  handleClose,
  watchVisible,
  computedStyle,
  computedAnimationName,
  afterEnter,
  afterLeave,
  handleDrag
} from '../src/dialog-box'
import type {
  ISharedRenderlessFunctionParams,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils
} from './shared.type'

export type IDialogBoxProps = ExtractPropTypes<typeof dialogBoxProps>

export type IDialogBoxConstants = typeof $constants

export interface IDialogBoxState {
  emitter: ReturnType<ISharedRenderlessParamUtils['emitter']>
  key: number
  x: number | string | null
  y: number | string | null
  top: number | string | null
  left: number | string | null
  max: number | string | null
  move: boolean
  closed: boolean
  dragable: boolean
  /** 拖拽后的临时定位样式 */
  dragStyle: { left?: string; top?: string } | null
  isFull: boolean
  style: IDialogBoxStyle
  bodyStyle: { [key: string]: string | number }
  animationName: string
  /** useZIndex 分配的弹层层级 */
  zIndex: number
  /** 配套遮罩层级（弹层 - 1，供 Mask 组件使用） */
  maskZIndex: number
  titleId: string
  contentId: string
}

export interface IDialogBoxApi {
  state: IDialogBoxState
  handleCancel: ReturnType<typeof handleCancel>
  handleConfirm: ReturnType<typeof handleConfirm>
  handleMaskClick: ReturnType<typeof handleMaskClick>
  hide: ReturnType<typeof hide>
  handleClose: ReturnType<typeof handleClose>
  watchVisible: ReturnType<typeof watchVisible>
  computedStyle: ReturnType<typeof computedStyle>
  computedAnimationName: ReturnType<typeof computedAnimationName>
  afterEnter: ReturnType<typeof afterEnter>
  afterLeave: ReturnType<typeof afterLeave>
  handleDrag: ReturnType<typeof handleDrag>
}

export type IDialogBoxRenderlessParams = ISharedRenderlessFunctionParams<
  IDialogBoxProps,
  IDialogBoxState,
  IDialogBoxApi
>

export type IDialogBoxRenderlessParamUtils = ISharedRenderlessParamUtils

export type IDialogBoxInitApiParam = Pick<
  IDialogBoxRenderlessParams,
  'api' | 'state' | 'props' | 'emit' | 'nextTick' | 'vm'
>

export interface IDialogBoxInitWatchParam {
  watch: ISharedRenderlessParamHooks['watch']
  state: IDialogBoxState
  api: IDialogBoxApi
  props: IDialogBoxProps
}

export interface IDialogBoxStyle {
  width?: string | number
  height?: string | number
  maxHeight?: string | number
  top?: string | number
  right?: string | number
  left?: string | number
}
