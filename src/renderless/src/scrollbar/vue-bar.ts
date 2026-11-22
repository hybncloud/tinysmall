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
  BAR_MAP,
  renderThumbStyle,
  clickThumbHandler,
  clickTrackHandler,
  startDrag,
  mouseMoveDocumentHandler,
  mouseUpDocumentHandler
} from './index'
import { on, off } from '@tinysmall/utils'


export const renderless = (props, { computed, inject, onUnmounted, reactive }, { vm }) => {
  const state = reactive({
    bar: computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal']),
    // scrollbar 通过 provide('scrollbarVm') 暴露 vm，替代组件链 parent 访问；统一从 state.scrollbarVm 取用
    scrollbarVm: inject('scrollbarVm'),
    wrap: computed(() => state.scrollbarVm.$refs.wrap)
  })

  const api = {
    state,
    renderThumbStyle,
    clickTrackHandler: clickTrackHandler({ vm, state }),
    mouseMoveDocumentHandler: mouseMoveDocumentHandler({ vm, state })
  }

  onUnmounted(() => off(document, 'mouseup', api.mouseUpDocumentHandler))

  return Object.assign(api, {
    startDrag: startDrag({ api, on, state }),
    clickThumbHandler: clickThumbHandler({ api, state }),
    mouseUpDocumentHandler: mouseUpDocumentHandler({ api, off, state })
  })
}
