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
import { $props, props, setup, h, defineComponent } from '@tinysmall/common'
import { renderless, api } from '@tinysmall/renderless/modal/vue'
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

export const $constants = {
  MODAL_STATUS: {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    LOADING: 'loading'
  },
  NODAL_TYPE: {
    ALERT: 'alert',
    CONFIRM: 'confirm',
    MESSAGE: 'message'
  },
  STATUS_MAPPING_CLASSS: {
    INFO: 'tiny-modal-svg__info',
    SUCCESS: 'tiny-modal-svg__success',
    WARNING: 'tiny-modal-svg__warning',
    ERROR: 'tiny-modal-svg__error',
    LOADING: 'tiny-modal-svg__refresh roll'
  },
  PC_SCROLL_LOCK_CLASS: 'dialog-box__scroll-lock',
  MOBILE_FIRST_SCROLL_LOCK_CLASS: 'tiny-modal-lockscroll',
  Mode: 'pc',
  SCROLL_LOCK_CLASS(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_FIRST_SCROLL_LOCK_CLASS
  }
}

export const modalProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
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
    return setup({ props, context, renderless, api }) as unknown as IModalApi
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
    let { showFooter, title, message, lockScroll, lockView, mask, _constants: constants, t } = this
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

    return h(
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
          }
        ],
        style: {
          zIndex: state.modalZindex,
          top: modalTop ? `${modalTop}px` : null
        },
        on: {
          click: this.selfClickEvent
        }
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
            on: {
              ...(type === 'message' ? { mouseenter: this.mouseEnterEvent, mouseleave: this.mouseLeaveEvent } : {})
            }
          },
          [
            showHeader
              ? h(
                  'div',
                  {
                    class: ['tiny-modal__header'],
                    on: {
                      mousedown: this.headerDragable ? this.mousedownEvent : () => {}
                    }
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
                                  'aria-label': `${constants.STATUS_MAPPING_CLASSS[status.toUpperCase()] || 'default'}-circle`,
                                  class: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
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
                          on: {
                            click: this.toggleZoomEvent
                          }
                        })
                      : null,
                    showClose
                      ? h(iconClose(), {
                          'aria-label': 'Close',
                          class: ['tiny-modal__close-btn', 'trigger__btn'],
                          on: {
                            click: this.closeEvent
                          }
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
                              'aria-label': `${constants.STATUS_MAPPING_CLASSS[status.toUpperCase()] || 'default'}-message-circle`,
                              class: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
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
                          on: {
                            click: this.closeEvent
                          }
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
                    on: {
                      mousedown: this.footerDragable ? this.mousedownEvent : () => {}
                    }
                  },
                  footerSlot
                    ? [footerSlot.call(this, footerSlotParams, h)]
                    : [
                        type === 'confirm'
                          ? h(
                              Button,
                              {
                                on: {
                                  click: this.cancelEvent
                                },
                                props: { ...cancelButtonProps }
                              },
                              cancelButtonText
                            )
                          : null,
                        h(
                          Button,
                          {
                            props: {
                              type: 'primary',
                              ...confirmButtonProps
                            },
                            on: {
                              click: this.confirmEvent
                            }
                          },
                          confirmButtonText
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
                      attrs: { 'data-type': type },
                      on: { mousedown: this.dragEvent }
                    })
                  )
                )
              : null
          ]
        )
      ]
    )
  }
})
</script>
