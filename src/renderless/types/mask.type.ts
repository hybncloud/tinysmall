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
import type { maskProps } from '../../components/mask/src'
import type { handleAfterEnter, handleAfterLeave, handleMaskClick, handleMaskMousedown, handleMaskMouseup, watchVisible } from '../src/mask'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type IMaskProps = ExtractPropTypes<typeof maskProps>

export interface IMaskState {
  /** mousedown 是否落在遮罩自身（防从弹窗内容拖拽到遮罩误触） */
  mouseDownOnMask: boolean
  /** mouseup 是否落在遮罩自身 */
  mouseUpOnMask: boolean
  /** destroyOnClose：离开动画结束后销毁容器 DOM，重新打开时重置 */
  destroy: boolean
  /** 未传 zIndex prop 时由 useZIndex 自动分配 */
  zIndex: number
}

export interface IMaskApi {
  state: IMaskState
  watchVisible: ReturnType<typeof watchVisible>
  handleAfterEnter: ReturnType<typeof handleAfterEnter>
  handleAfterLeave: ReturnType<typeof handleAfterLeave>
  handleMaskClick: ReturnType<typeof handleMaskClick>
  handleMaskMousedown: ReturnType<typeof handleMaskMousedown>
  handleMaskMouseup: ReturnType<typeof handleMaskMouseup>
}

export type IMaskRenderlessParams = ISharedRenderlessFunctionParams<IMaskProps, IMaskState, IMaskApi>

export type IMaskRenderlessParamUtils = ISharedRenderlessParamUtils
