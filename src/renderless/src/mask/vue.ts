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

import { useScrollLock } from '@vueuse/core'
import { useZIndex } from '@tinysmall/hooks'
import type {
  IMaskApi,
  IMaskProps,
  IMaskRenderlessParamUtils,
  IMaskState,
  ISharedRenderlessParamHooks
} from '../../types'
import { handleAfterEnter, handleAfterLeave, handleMaskClick, handleMaskMousedown, handleMaskMouseup, watchVisible } from './index'

export const renderless = (
  props: IMaskProps,
  { reactive, watch }: ISharedRenderlessParamHooks,
  { emit }: IMaskRenderlessParamUtils
): IMaskApi => {
  const api = {} as IMaskApi
  const state: IMaskState = reactive({
    mouseDownOnMask: false,
    mouseUpOnMask: false,
    /** destroyOnClose：离开动画结束后销毁容器 DOM，重新打开时重置 */
    destroy: false,
    /** 未传 zIndex prop 时由 useZIndex 自动分配 */
    zIndex: props.zIndex ?? useZIndex()
  })

  // body 滚动锁：visible && lockScroll 时生效
  const isScrollLocked = useScrollLock(() => document.body)

  watch(
    () => props.visible && props.lockScroll,
    (val) => (isScrollLocked.value = val),
    { immediate: true }
  )

  Object.assign(api, {
    state,
    watchVisible: watchVisible({ emit, state }),
    handleAfterEnter: handleAfterEnter({ emit }),
    handleAfterLeave: handleAfterLeave({ emit, props, state }),
    handleMaskClick: handleMaskClick({ emit, state }),
    handleMaskMousedown: handleMaskMousedown({ state }),
    handleMaskMouseup: handleMaskMouseup({ state })
  })

  watch(() => props.visible, api.watchVisible)

  return api
}
