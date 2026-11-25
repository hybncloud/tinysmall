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

import {
  afterEnter,
  afterLeave,
  computedAnimationName,
  computedStyle,
  handleConfirm,
  handleCancel,
  watchVisible,
  hide,
  handleClose,
  handleMaskClick,
  handleDrag,
  toggleFullScreen
} from './index'
import { nanoid } from '@tinysmall/utils'
import { usePopupStack, useZIndex } from '@tinysmall/hooks'
import type {
  IDialogBoxApi,
  IDialogBoxProps,
  IDialogBoxRenderlessParamUtils,
  IDialogBoxRenderlessParams,
  IDialogBoxState,
  ISharedRenderlessParamHooks,
  IDialogBoxInitApiParam,
  IDialogBoxInitWatchParam
} from '../../types'

const initState = ({
  reactive,
  computed,
  api,
  emitter,
  props
}: Pick<IDialogBoxRenderlessParams, 'reactive' | 'computed' | 'api' | 'emitter' | 'props'>): IDialogBoxState => {
  // 未传 zIndex 时由 useZIndex 分配；遮罩层级为弹层 - 1（供 Mask 组件使用）
  const zIndex = props.zIndex ?? useZIndex()

  const state: IDialogBoxState = reactive({
    emitter: emitter(),
    key: 0,
    x: null,
    y: null,
    top: null,
    left: null,
    max: null,
    move: false,
    closed: false,
    dragable: false,
    isFull: props.fullscreen,
    style: computed(() => api.computedStyle()),
    animationName: computed(() => api.computedAnimationName()),
    dragStyle: null,
    bodyStyle: {},
    zIndex,
    maskZIndex: zIndex - 1,
    titleId: `tiny-dialog-box-title-${nanoid.api.nanoid(8)}`,
    contentId: `tiny-dialog-box-content-${nanoid.api.nanoid(8)}`
  })

  return state
}

const initApi = ({ emit, api, state, props, nextTick, vm }: IDialogBoxInitApiParam): void => {
  Object.assign(api, {
    state,
    handleCancel: handleCancel({ api, emit }),
    handleConfirm: handleConfirm({ api, emit }),
    handleMaskClick: handleMaskClick({ api, props }),
    hide: hide({ api, emit, state, props }),
    handleClose: handleClose({ api, emit, props }),
    watchVisible: watchVisible({
      emit,
      nextTick,
      props,
      vm,
      state
    }),
    computedStyle: computedStyle({ state, props }),
    computedAnimationName: computedAnimationName({ props }),
    afterEnter: afterEnter(emit),
    afterLeave: afterLeave(emit),
    handleDrag: handleDrag({ props, state, emit, vm }),
    toggleFullScreen: toggleFullScreen({ state, emit, nextTick, vm })
  })
}

const initWatch = ({ watch, state, api, props }: IDialogBoxInitWatchParam) => {
  watch(() => props.visible, api.watchVisible)

  watch(
    () => props.fullscreen,
    (value: boolean) => {
      state.isFull = value
    }
  )
}

export const renderless = (
  props: IDialogBoxProps,
  { computed, reactive, watch }: ISharedRenderlessParamHooks,
  { vm, emitter, emit, nextTick }: IDialogBoxRenderlessParamUtils
): IDialogBoxApi => {
  const api = {} as IDialogBoxApi

  const state = initState({ reactive, computed, api, emitter, props })

  initApi({
    api,
    state,
    props,
    emit,
    nextTick,
    vm
  })

  // Esc / 栈顶语义：只关栈顶弹窗，close 走 handleClose（尊重 beforeClose）
  usePopupStack({
    visible: () => props.visible,
    close: () => api.handleClose('esc'),
    closeOnPressEscape: () => props.closeOnPressEscape !== false
  })

  initWatch({ watch, state, api, props })

  return api
}
