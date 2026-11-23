<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import Button from '@tinysmall/button'
import { setup, h, defineComponent, Teleport } from '@tinysmall/common'
import { renderless } from '@tinysmall/renderless/modal/vue'
import { $constants } from '@tinysmall/renderless/modal/constants'
import '@tinysmall/theme/modal/index.less'

import {
  iconHelpSolid,
  iconSuccess,
  iconError,
  iconHelp,
  iconLoadingShadow,
  iconWarning,
  iconClose,
  iconFullscreenRight,
  iconMinscreenRight
} from '@tinysmall/icon'
import '@tinysmall/theme/modal/index.less'
import type { IModalApi } from '@tinysmall/renderless/types/modal.type'

export const modalProps = {
  animat: { type: Boolean, default: () => true },
  beforeClose: Function,
  duration: { type: [Number, String], default: () => 3000 },
  messageClosable: Boolean,
  escClosable: Boolean,
  events: Object,
  fullscreen: Boolean,
  height: [Number, String],
  id: String,
  isFormReset: {
    type: Boolean,
    default: true
  },
  lockScroll: Boolean,
  lockView: { type: Boolean, default: () => true },
  marginSize: { type: [Number, String], default: 10 },
  mask: { type: Boolean, default: () => true },
  maskClosable: Boolean,
  message: [String, Function, Object],
  minHeight: { type: [Number, String], default: () => 200 },
  minWidth: { type: [Number, String], default: () => 340 },
  modelValue: Boolean,
  resize: Boolean,
  showFooter: Boolean,
  showHeader: { type: Boolean, default: true },
  status: {
    type: [String, Object],
    default: ''
  },
  title: String,
  top: { type: [Number, String], default: 80 },
  type: { type: String, default: 'alert' },
  vSize: String,
  width: [Number, String],
  zIndex: [Number, String],
  description: String, // mf 属性
  options: Array, // mf 属性
  showClose: { type: Boolean, default: true }, // mf 属性
  confirmContent: String,
  cancelContent: String,
  customClass: String, // mf 属性
  confirmBtnProps: { type: Object, default: () => ({}) },
  cancelBtnProps: { type: Object, default: () => ({}) },
  headerDragable: { type: Boolean, default: true },
  footerDragable: Boolean,
  slots: Object
}

export default defineComponent({
  name: 'TinyModal',
  componentName: 'Modal',
  props: modalProps,
  emits: [
    'update:modelValue',
    'show',
    'close',
    'confirm',
    'cancel',
    'hide',
    'custom-mousedown',
    'custom-mouseup',
    'custom-mousemove'
  ],
  provide() {
    return { dialog: this }
  },
  setup(props, context) {
    return setup({ props, context, renderless })
  },
  render() {
    let {
      $props = {},
      state,
      scopedSlots,
      vSize,
      type,
      resize,
      showClose,
      animat,
      status,
      showHeader,
      messageClosable
    } = this
    let { showFooter, title, message, lockScroll, lockView, mask, t } = this
    let { confirmContent, cancelContent, confirmBtnProps, cancelBtnProps } = this
    let { zoomLocat, visible, contentVisible, modalTop, isMsg } = state
    let { slots: propSlots = {} } = $props
    let defaultSlot = scopedSlots.default || propSlots.default
    let footerSlot = scopedSlots.footer || propSlots.footer
    let footerSlotParams = {
      $modal: this,
      beforeClose: this.beforeClose,
      confirm: this.confirmEvent,
      cancel: this.cancelEvent
    }
    const confirmButtonProps =
      Object.prototype.toString.call(confirmBtnProps) === '[object Object]' ? confirmBtnProps : {}
    const cancelButtonProps = Object.prototype.toString.call(cancelBtnProps) === '[object Object]' ? cancelBtnProps : {}
    const confirmButtonText = confirmContent ?? confirmBtnProps.text ?? t('ui.button.confirm')
    const cancelButtonText = cancelContent ?? cancelButtonProps.text ?? t('ui.button.cancel')

    const STATUS_MAPPING_COMPINENT = {
      QUESTION: iconHelpSolid(),
      INFO: iconHelp(),
      SUCCESS: iconSuccess(),
      WARNING: iconWarning(),
      ERROR: iconError(),
      LOADING: iconLoadingShadow()
    }

    const modalVNode = h(
      'div',
      {
        class: [
          'tiny-modal',
          'tiny-modal__wrapper',
          `type__${type}`,
          {
            [`size__${vSize}`]: vSize,
            [`status__${status}`]: typeof status === 'string',
            is__animat: animat,
            lock__scroll: lockScroll,
            lock__view: lockView,
            is__mask: mask,
            is__maximize: zoomLocat,
            is__visible: contentVisible,
            active: visible,
            leave: !contentVisible
          },
          // 根节点是 teleport，attrs 不会被自动继承，这里手动合并 customClass 与外部传入的 class
          this.customClass,
          this.$attrs.class
        ],
        style: {
          zIndex: state.modalZindex,
          top: modalTop ? `${modalTop}px` : null
        },
        onClick: this.selfClickEvent
      },
      [
        h(
          'div',
          {
            role: 'dialog',
            'aria-modal': 'true',
            'aria-labelledby': state.titleId,
            'aria-describedby': state.contentId,
            class: 'tiny-modal__box',
            style: state.boxStyle,
            ref: 'modalBox',
            ...(type === 'message' ? { onMouseenter: this.mouseEnterEvent, onMouseleave: this.mouseLeaveEvent } : {})
          },
          [
            showHeader
              ? h(
                  'div',
                  {
                    class: ['tiny-modal__header'],
                    onMousedown: this.headerDragable ? this.mousedownEvent : () => {}
                  },
                  [
                    status
                      ? h(
                          'div',
                          {
                            class: ['tiny-modal__status-wrapper']
                          },
                          [
                            typeof status === 'string'
                              ? h(STATUS_MAPPING_COMPINENT[status.toUpperCase()], {
                                  'aria-label': `${$constants.STATUS_MAPPING_CLASSS[status.toUpperCase()] || 'default'}-circle`,
                                  class: [$constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
                                })
                              : h(status, {
                                  class: ['tiny-modal__status-icon']
                                })
                          ]
                        )
                      : null,
                    title !== ''
                      ? h(
                          'span',
                          {
                            class: 'tiny-modal__title',
                            id: state.titleId
                          },
                          title || t('ui.alert.title')
                        )
                      : null,
                    resize
                      ? h(zoomLocat ? iconMinscreenRight() : iconFullscreenRight(), {
                          'aria-label': 'Zoom',
                          class: ['tiny-modal__zoom-btn', 'trigger__btn'],
                          onClick: this.toggleZoomEvent
                        })
                      : null,
                    showClose
                      ? h(iconClose(), {
                          'aria-label': 'Close',
                          class: ['tiny-modal__close-btn', 'trigger__btn'],
                          onClick: this.closeEvent
                        })
                      : null
                  ]
                )
              : null,
            h(
              'div',
              {
                class: ['tiny-modal__body', type === 'message' ? 'is-message' : '']
              },
              [
                type === 'message'
                  ? h(
                      'div',
                      {
                        class: 'tiny-modal__status-wrapper'
                      },
                      [
                        typeof status === 'string'
                          ? h(STATUS_MAPPING_COMPINENT[status.toUpperCase()], {
                              'aria-label': `${$constants.STATUS_MAPPING_CLASSS[status.toUpperCase()] || 'default'}-message-circle`,
                              class: [$constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
                            })
                          : h(status, {
                              class: ['tiny-modal__status-icon']
                            })
                      ]
                    )
                  : null,
                h(
                  'div',
                  {
                    class: 'tiny-modal__content',
                    id: state.contentId
                  },
                  defaultSlot
                    ? [defaultSlot.call(this, { $modal: this }, h)]
                    : [
                        h(
                          'div',
                          { class: 'tiny-modal__text' },
                          typeof message === 'function' ? message.call(this, h) : [message]
                        )
                      ]
                ),
                messageClosable
                  ? h(
                      'div',
                      {
                        class: 'tiny-modal__close-wrapper'
                      },
                      [
                        h(iconClose(), {
                          'aria-label': 'Close',
                          class: ['tiny-modal__close-btn'],
                          onClick: this.closeEvent
                        })
                      ]
                    )
                  : null
              ]
            ),
            showFooter
              ? h(
                  'div',
                  {
                    class: ['tiny-modal__footer', this.footerDragable ? 'tiny-modal__footer-move' : ''],
                    onMousedown: this.footerDragable ? this.mousedownEvent : () => {}
                  },
                  footerSlot
                    ? [footerSlot.call(this, footerSlotParams, h)]
                    : [
                        type === 'confirm'
                          ? h(
                              Button,
                              {
                                onClick: this.cancelEvent,
                                ...cancelButtonProps
                              },
                              () => cancelButtonText
                            )
                          : null,
                        h(
                          Button,
                          {
                            type: 'primary',
                            ...confirmButtonProps,
                            onClick: this.confirmEvent
                          },
                          () => confirmButtonText
                        )
                      ]
                )
              : null,
            !isMsg && resize
              ? h(
                  'span',
                  {
                    class: 'tiny-modal__resize'
                  },
                  ['wl', 'wr', 'swst', 'sest', 'st', 'swlb', 'selb', 'sb'].map((type) =>
                    h('span', {
                      class: `${type}-resize`,
                      'data-type': type,
                      onMousedown: this.dragEvent
                    })
                  )
                )
              : null
          ]
        )
      ]
    )

    return h(Teleport, { to: 'body' }, [modalVNode])
  }
})
</script>
