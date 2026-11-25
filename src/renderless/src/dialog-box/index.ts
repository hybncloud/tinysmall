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

import { emitEvent, getDomNode } from '@tinysmall/utils'
import { $constants } from './constants'
import type { IDialogBoxRenderlessParams, IDialogBoxStyle } from '../../types'

export const computedAnimationName =
  ({ props }: Pick<IDialogBoxRenderlessParams, 'props'>) =>
  (): string =>
    props.rightSlide ? $constants.DIALOG_SLIDER_RIGHT : $constants.DIALOG_FADE

export const computedAddUnit = (value: string): string => (isNaN(Number(value)) ? value : value + 'px')

export const computedStyle =
  ({ props, state }: Pick<IDialogBoxRenderlessParams, 'props' | 'state'>) =>
  (): IDialogBoxStyle => {
    let style = {} as IDialogBoxStyle
    let { width, top, rightSlide, maxHeight } = props

    if (top === undefined) {
      top = rightSlide ? '0' : '15vh'
    }

    width = computedAddUnit(width)
    top = computedAddUnit(top)
    maxHeight = computedAddUnit(maxHeight)

    if (!state.isFull) {
      style.width = width
      style.top = state.top || top
      style.maxHeight = maxHeight

      if (rightSlide) {
        style.right = 0
        style.height = 'calc(100vh - ' + style.top + ')'
      } else {
        style.left = state.left || 'calc((100vw - ' + width + ') / 2)'
      }
    }

    if (state.dragStyle) {
      style = { ...style, ...state.dragStyle }
      if (state.isFull) {
        style = { left: '0px', top: '0px' }
      }
    }

    if (props.customStyle) {
      style = Object.assign(style, props.customStyle)
    }

    return style
  }

export const watchVisible =
  ({
    emit,
    nextTick,
    props,
    vm,
    state
  }: Pick<IDialogBoxRenderlessParams, 'emit' | 'nextTick' | 'props' | 'vm' | 'state'>) =>
  (val: boolean): void => {
    state.move = false
    state.isFull = props.fullscreen

    emit('update:visible', val)

    if (val) {
      state.closed = false
      emit('open')

      nextTick(() => {
        vm.$refs.dialog.scrollTop = 0
      })
    } else if (!state.closed) {
      state.emitter.emit('boxclose', props.isFormReset)
      emit('close')
    }
  }

export const handleMaskClick =
  ({ api, props }: Pick<IDialogBoxRenderlessParams, 'api' | 'props'>) =>
  (): void => {
    if (!props.closeOnClickMask) {
      return
    }
    // mask 已保证 press 与 release 都落在遮罩自身才 emit click
    api.handleClose('mask')
  }

export const handleClose =
  ({ api, emit, props }: Pick<IDialogBoxRenderlessParams, 'api' | 'emit' | 'props'>) =>
  (type = 'close') => {
    if (typeof props.beforeClose === 'function' && props.beforeClose(type) === false) {
      return
    }
    if (!emitEvent(emit, 'before-close', api.hide)) {
      return
    }

    api.hide(type)
  }

export const hide =
  ({ api, emit, state, props }: Pick<IDialogBoxRenderlessParams, 'api' | 'emit' | 'state' | 'props'>) =>
  (cancel?: boolean): void => {
    if (cancel !== false) {
      state.emitter.emit('boxclose', props.isFormReset)

      emit('update:visible', false)
      emit('change', false)
      emit('close', cancel)

      state.closed = true
    }
  }

export const handleConfirm =
  ({ api, emit }: Pick<IDialogBoxRenderlessParams, 'api' | 'emit'>) =>
  (): void => {
    emit('confirm')
    api.handleClose('confirm')
  }

export const handleCancel =
  ({ api, emit }: Pick<IDialogBoxRenderlessParams, 'api' | 'emit'>) =>
  (): void => {
    emit('cancel')
    api.handleClose('cancel')
  }

export const afterEnter = (emit: IDialogBoxRenderlessParams['emit']) => (): void => {
  emit('opened')
}

export const afterLeave = (emit: IDialogBoxRenderlessParams['emit']) => (): void => {
  emit('closed')
}

export const handleDrag =
  ({ props, state, emit, vm }: Pick<IDialogBoxRenderlessParams, 'props' | 'state' | 'emit' | 'vm'>) =>
  (event: MouseEvent): void => {
    if (!props.draggable || state.isFull) {
      return
    }

    let modalBoxElem = vm.$refs.dialog as HTMLDivElement
    event.preventDefault()

    let demMousemove = document.onmousemove
    let demMouseup = document.onmouseup
    let disX = event.clientX - modalBoxElem.offsetLeft
    let disY = event.clientY - modalBoxElem.offsetTop
    let { visibleHeight, visibleWidth } = getDomNode()

    document.onmousemove = (event) => {
      event.preventDefault()

      if (!state.move) {
        emit('drag-start', event)
        state.move = true
      }

      let offsetWidth = modalBoxElem.offsetWidth
      let offsetHeight = modalBoxElem.offsetHeight
      let left: number
      let top: number
      if (!props.dragOutsideWindow) {
        let maxX = Math.max(visibleWidth - offsetWidth, 0)
        let maxY = Math.max(visibleHeight - offsetHeight, 0)
        left = event.clientX - disX
        top = event.clientY - disY

        left = left < 0 ? 0 : left > maxX ? maxX : left
        top = top < 0 ? 0 : top > maxY ? maxY : top
      } else {
        let maxX = visibleWidth - 10
        let maxY = visibleHeight - 10
        left = event.clientX - disX
        top = event.clientY - disY

        left = event.clientX < 0 ? -disX : left > maxX ? maxX : left
        top = event.clientY < 0 ? -disY : top > maxY ? maxY : top
      }
      if (!state.isFull) {
        state.dragStyle = { left: `${left}px`, top: `${top}px` }
      }

      state.left = `${left}px`
      state.top = `${top}px`

      state.emitter.emit('boxdrag')
      emit('drag-move', event)
    }

    document.onmouseup = () => {
      document.onmousemove = demMousemove
      document.onmouseup = demMouseup
      props.draggable && state.move && emit('drag-end', event)
      state.move = false
    }
  }

export const toggleFullScreen =
  ({ state, emit, nextTick, vm }) =>
  (isFull: boolean): void => {
    state.isFull = isFull
    nextTick(() => {
      emit('resize', { fullscreen: isFull, dialog: vm.$refs.dialog })
    })
  }
