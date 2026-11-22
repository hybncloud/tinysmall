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
  <span ref="root">
    <transition :name="transition" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        class="tiny-popover tiny-popper"
        :class="[popperClass, content && 'tiny-popover__plain', { 'no-arrow': !visibleArrow }]"
        ref="popper"
        v-show="!disabled && state.showPopper"
        :style="{ width: width === 'auto' ? width : width + 'px', height: height === 'auto' ? height : height + 'px' }"
        role="tooltip"
        :id="state.tooltipId"
        :aria-hidden="!state.showPopper"
      >
        <div class="tiny-popover__title" v-if="title" v-text="title" role="heading"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <span ref="wrapper" class="reference-wrapper" :class="{ 'reference-wrapper-show': !disabled && state.showPopper }">
      <slot name="reference"></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { setup, defineComponent } from '@tinysmall/common'
import { renderless } from '@tinysmall/renderless/popover/vue'
import '@tinysmall/theme/popover/index.less'
import type { IPopoverApi } from '@tinysmall/renderless/types/popover.type'

export const popoverProps = {
  appendToBody: {
    type: Boolean,
    default: true
  },
  arrowOffset: {
    type: Number,
    default: 0
  },
  boundariesPadding: {
    type: Number,
    default: 5
  },
  closeDelay: {
    type: Number,
    default: 200
  },
  content: String,
  disabled: Boolean,
  modelValue: Boolean,
  offset: {
    default: 0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  placement: {
    type: String,
    default: 'bottom'
  },
  popper: {},
  popperClass: String,
  popperOptions: {
    type: Object,
    default: () => ({ gpuAcceleration: false })
  },
  reference: {},
  tabindex: {
    type: Number,
    default: 0
  },
  title: String,
  transition: {
    type: String,
    default: 'fade-in-linear'
  },
  trigger: {
    type: String,
    default: 'click',
    validator: (value: string) => Boolean(~['click', 'focus', 'hover', 'manual'].indexOf(value))
  },
  visibleArrow: {
    default: true
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  maxHeight: {
    type: [String, Number]
  },
  listData: [Object, Array],
  genArrowByHtml: {
    type: Boolean,
    default: () => true
  }
}

export default defineComponent({
  name: 'TinyPopover',
  inheritAttrs: true,
  emits: ['update:modelValue', 'hide', 'show', 'after-enter', 'after-leave', 'created'],
  props: popoverProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
