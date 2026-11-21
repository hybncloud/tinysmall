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
<template>
  <transition
    :duration="noAnimation ? 0 : undefined"
    :name="state.animationName"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      v-show="visible"
      :class="['tiny-dialog-box__wrapper', dialogClass]"
      @click.self="handleWrapperClick"
      @mouseup="useMouseEventUp"
      @mousedown="useMouseEventDown"
    >
      <transition :name="dialogTransition">
        <div
          ref="dialog"
          v-show="visible"
          v-if="destroyOnClose ? visible : true"
          :class="[
            {
              'is-fullscreen': state.isFull,
              'is-center': center,
              'is-right-slide': rightSlide
            }
          ]"
          :style="state.style"
          class="tiny-dialog-box"
          data-tag="tiny-dialog-box"
          :data-dialog-box-draggable="draggable"
          :key="state.key"
          role="dialog"
          :aria-modal="true"
          :aria-labelledby="state.titleId"
          :aria-describedby="state.contentId"
        >
          <div v-if="showHeader" ref="header" class="tiny-dialog-box__header" @mousedown="handleDrag">
            <slot name="title">
              <span class="tiny-dialog-box__title" role="heading" :id="state.titleId">{{ title }}</span>
            </slot>
            <div class="tiny-dialog-box__btn-tools">
              <button
                v-if="resize && !state.isFull"
                type="button"
                class="tiny-dialog-box__headerbtn"
                aria-label="Resize"
                @click="toggleFullScreen(true)"
              >
                <icon-fullscreen class="tiny-svg-size tiny-dialog-box__resize" />
              </button>
              <button
                v-if="resize && state.isFull"
                type="button"
                class="tiny-dialog-box__headerbtn"
                aria-label="Resize"
                @click="toggleFullScreen(false)"
              >
                <icon-minscreen class="tiny-svg-size tiny-dialog-box__resize" />
              </button>
              <button
                v-if="showClose"
                type="button"
                class="tiny-dialog-box__headerbtn"
                aria-label="Close"
                @click="handleClose('close', $event)"
              >
                <icon-close class="tiny-svg-size tiny-dialog-box__close" />
              </button>
            </div>
          </div>
          <div class="tiny-dialog-box__body" :id="state.contentId">
            <slot></slot>
          </div>
          <div v-if="slots.footer" ref="footer" class="tiny-dialog-box__footer">
            <slot name="footer" :before-close="beforeClose"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/dialog-box/vue'
import { setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import { iconClose, iconFullscreen, iconMinscreen } from '@tinysmall/icon'
import '@tinysmall/theme/dialog-box/index.less'
import type { IDialogBoxApi } from '@tinysmall/renderless/types/dialog-box.type'

export const dialogBoxProps = {
  appendToBody: {
    type: Boolean,
    default: () => false
  },
  beforeClose: Function,
  center: {
    type: Boolean,
    default: () => false
  },
  closeOnClickModal: {
    type: Boolean,
    default: () => true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: () => true
  },
  destroyOnClose: {
    type: Boolean,
    default: () => false
  },
  dialogClass: {
    type: String,
    default: () => ''
  },
  draggable: {
    type: Boolean,
    default: () => false
  },
  dragOutsideWindow: {
    type: Boolean,
    default: () => false
  },
  fullscreen: {
    type: Boolean,
    default: () => false
  },
  isFormReset: {
    type: Boolean,
    default: () => true
  },
  lockScroll: {
    type: Boolean,
    default: () => true
  },
  modal: {
    type: Boolean,
    default: () => true
  },
  modalAppendToBody: {
    type: Boolean,
    default: () => true
  },
  resize: {
    type: Boolean,
    default: () => false
  },
  rightSlide: {
    type: Boolean,
    default: () => false
  },
  showClose: {
    type: Boolean,
    default: () => true
  },
  showHeader: {
    type: Boolean,
    default: () => true
  },
  title: {
    type: String,
    default: () => ''
  },
  top: String,
  visible: {
    type: Boolean,
    default: () => false
  },
  width: {
    type: String,
    default: () => '500px'
  },
  maxHeight: {
    type: String,
    default: () => ''
  },
  dialogTransition: {
    type: String,
    default: ''
  },
  noAnimation: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => ({})
  },
  onClose: {
    type: Function as PropType<() => void>
  }
}

export default defineComponent({
  name: 'TinyDialogBox',
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  components: {
    IconClose: iconClose(),
    IconFullscreen: iconFullscreen(),
    IconMinscreen: iconMinscreen()
  },
  emits: [
    'update:visible',
    'change',
    'before-close',
    'open',
    'close',
    'opened',
    'confirm',
    'cancel',
    'closed',
    'drag-start',
    'drag-move',
    'drag-end',
    // tiny 新增
    'resize'
  ],
  props: dialogBoxProps,
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  provide() {
    return { dialog: this }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IDialogBoxApi
  }
})
</script>
