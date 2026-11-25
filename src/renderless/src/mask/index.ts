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

import type { IMaskRenderlessParams } from '../../types'

export const watchVisible =
  ({ emit, state }: Pick<IMaskRenderlessParams, 'emit' | 'state'>) =>
  (val: boolean): void => {
    // 重新打开时重建容器（destroyOnClose 关闭时在 handleAfterLeave 中销毁）
    if (val) {
      state.destroy = false
    }

    emit('update:visible', val)
  }

export const handleAfterEnter =
  ({ emit }: Pick<IMaskRenderlessParams, 'emit'>) =>
  (): void => {
    emit('opened')
  }

export const handleAfterLeave =
  ({ emit, props, state }: Pick<IMaskRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (): void => {
    emit('closed')

    // destroyOnClose：离开动画结束后才销毁容器 DOM
    if (props.destroyOnClose && !props.visible) {
      state.destroy = true
    }
  }

export const handleMaskMousedown =
  ({ state }: Pick<IMaskRenderlessParams, 'state'>) =>
  (event: MouseEvent): void => {
    state.mouseDownOnMask = event.target === event.currentTarget
  }

export const handleMaskMouseup =
  ({ state }: Pick<IMaskRenderlessParams, 'state'>) =>
  (event: MouseEvent): void => {
    state.mouseUpOnMask = event.target === event.currentTarget
  }

export const handleMaskClick =
  ({ emit, state }: Pick<IMaskRenderlessParams, 'emit' | 'state'>) =>
  (event: MouseEvent): void => {
    // press 与 release 都落在遮罩自身才视为点击遮罩：
    // click 的 target 是 mousedown/mouseup 目标的公共祖先，
    // 从弹窗内容拖拽到遮罩松开时 click.self 依然命中，须靠双标记拦截
    if (state.mouseDownOnMask && state.mouseUpOnMask) {
      emit('click', event)
    }
  }
