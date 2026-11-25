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
  dragEvent,
  mfDragEvent,
  handleEvent,
  mousedownEvent,
  toggleZoomEvent,
  revert,
  maximize,
  getBox,
  handleGlobalKeydownEvent,
  close,
  updateStyle,
  addMsgQueue,
  removeMsgQueue,
  computedIsMsg,
  watchValue,
  created,
  mounted,
  beforeUnmouted,
  selfClickEvent,
  mouseEnterEvent,
  mouseLeaveEvent,
  updateZindex,
  closeEvent,
  confirmEvent,
  cancelEvent,
  open,
  resetDragStyle,
  resetModalViewPosition,
  computedBoxStyle,
  handleHashChange,
  showScrollbar,
  hideScrollbar,
  watchVisible,
  doClose,
  doEmitAndClose,
  runBeforeClose
} from './index'
import { nanoid } from '@tinysmall/utils'
import { useZIndex } from '@tinysmall/hooks'
import { $constants } from './constants'
import type { IModalApi, IModalProps, IModalRenderlessParamUtils, ISharedRenderlessParamHooks } from '../../types'


export const renderless = (
  props: IModalProps,
  { computed, inject, onMounted, onBeforeUnmount, reactive, watch }: ISharedRenderlessParamHooks,
  { vm, emit, emitter, nextTick }: IModalRenderlessParamUtils
) => {
  const api = {} as IModalApi
  const lockScrollClass = $constants.SCROLL_LOCK_CLASS('pc')
  const state = reactive({
    titleId: 'tiny-modal-title-' + nanoid.api.nanoid(8),
    contentId: 'tiny-modal-content-' + nanoid.api.nanoid(8),
    emitter: emitter(),
    visible: false,
    contentVisible: false,
    cumsumZindex: 0,
    modalTop: 0,
    // useZIndex 分配的层级放入 state，后续统一通过 state 访问
    modalZindex: useZIndex(),
    zoomLocat: null,
    isMsg: computed(() => api.computedIsMsg(props)),
    prevEvent: null,
    options: [],
    boxStyle: computed(() => api.computedBoxStyle()),
    timer: 0,
    // 新增状态标记
    isClosing: false,
    isClosingAnimation: false,
    beforeCloseDoneCalled: false
  })

  Object.assign(api, {
    state,
    computedIsMsg: computedIsMsg(),
    updateStyle: updateStyle({ nextTick, props }),
    getBox: getBox({ vm }),
    watchValue: watchValue(api),
    created: created({ api, props, state }),
    mounted: mounted({ api, props, state }),
    beforeUnmouted: beforeUnmouted({ api }),
    selfClickEvent: selfClickEvent({ api, props }),
    mouseEnterEvent: mouseEnterEvent(state),
    mouseLeaveEvent: mouseLeaveEvent({ api, props, state }),
    updateZindex: updateZindex({ state, props }),
    handleEvent: handleEvent({ api, state }),
    closeEvent: closeEvent(api),
    confirmEvent: confirmEvent({ api, state }),
    cancelEvent: cancelEvent(api),
    open: open({ api, emit, nextTick, vm, props, state }),
    addMsgQueue: addMsgQueue({ api, vm }),
    removeMsgQueue: removeMsgQueue({ api, vm }),
    close: close({ api, state }),
    handleGlobalKeydownEvent: handleGlobalKeydownEvent(api),
    handleHashChange: handleHashChange(api),
    maximize: maximize({ api, nextTick, props, state }),
    revert: revert({ api, nextTick, state }),
    toggleZoomEvent: toggleZoomEvent({ api, emit, vm, state }),
    mousedownEvent: mousedownEvent({ api, nextTick, props, state, emit }),
    dragEvent: dragEvent({ api, emit, vm, props, state }),
    mfDragEvent: mfDragEvent({ api, emit, vm, props }),
    resetDragStyle: resetDragStyle(api),
    resetModalViewPosition: resetModalViewPosition(api),
    computedBoxStyle: computedBoxStyle({ props }),
    watchVisible: watchVisible({ api, props }),
    hideScrollbar: hideScrollbar(lockScrollClass),
    showScrollbar: showScrollbar(lockScrollClass),
    doClose: doClose({ emit, vm, props, state }),
    doEmitAndClose: doEmitAndClose({ api, emit, vm, props, state }),
    runBeforeClose: runBeforeClose({ api, props, state })
  })

  watch(() => props.modelValue, api.watchValue)

  watch(() => state.visible, api.watchVisible)

  api.created()

  onMounted(api.mounted)
  onBeforeUnmount(api.beforeUnmouted)

  return api
}
