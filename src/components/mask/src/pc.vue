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
  <teleport :disabled="!appendToBody" to="body">
    <transition
      :duration="noAnimation ? 0 : undefined"
      :name="transitionName"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave"
    >
      <div
        v-show="visible"
        v-if="!state.destroy"
        class="tiny-mask"
        :style="{ zIndex: state.zIndex }"
        @click.self="handleMaskClick($event)"
        @mousedown="handleMaskMousedown($event)"
        @mouseup="handleMaskMouseup($event)"
      >
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/mask/vue'
import { setup, defineComponent } from '@tinysmall/common'
import '@tinysmall/theme/mask/index.less'

export const maskProps = {
  visible: {
    type: Boolean,
    default: false
  },
  /** 未传时由 useZIndex 自动分配 */
  zIndex: {
    type: Number,
    default: undefined
  },
  appendToBody: {
    type: Boolean,
    default: true
  },
  /** transition 名称（过渡类 -enter-active/-leave-active），独立使用默认 tiny-mask 淡入淡出 */
  transitionName: {
    type: String,
    default: 'tiny-mask'
  },
  /** 关闭时是否在离开动画结束后销毁容器 DOM */
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: false
  },
  noAnimation: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: 'TinyMask',
  props: maskProps,
  emits: ['update:visible', 'click', 'opened', 'closed'],
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
