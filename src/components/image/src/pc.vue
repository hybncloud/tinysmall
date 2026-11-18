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
  <div class="tiny-image">
    <slot v-if="state.loading" name="placeholder">
      <div class="tiny-image__placeholder"></div>
    </slot>
    <slot v-else-if="state.error" name="error">
      <div class="tiny-image__error">
        <tiny-icon-image-error></tiny-icon-image-error>
        <div class="tiny-image__error-text">{{ t('ui.image.loadFail') }}</div>
      </div>
    </slot>
    <img
      v-else
      class="tiny-image__inner"
      v-bind="$attrs"
      @click="clickHandler"
      :src="state.src"
      :style="state.getImageStyle"
      :class="{
        'tiny-image__inner-center': state.getAlignCenter,
        'tiny-image__preview': state.getPreview
      }"
    />
    <teleport :disabled="!appendToBody" to="body">
      <image-viewer
        ref="imageViewer"
        :z-index="zIndex"
        v-if="state.getPreview && state.showViewer"
        :on-switch="handleSwitch"
        :on-close="closeViewer"
        :url-list="previewSrcList"
        :keep-style="keepStyle"
        :show-index="showIndex"
      >
        <template #count="slotScoped">
          <slot name="count" :index="slotScoped.index"></slot>
        </template>
      </image-viewer>
    </teleport>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/image/vue'
import { $props, setup, defineComponent, Teleport } from '@tinysmall/common'
import { isServer } from '@tinysmall/utils'
import ImageViewer from '@tinysmall/image-viewer'
import { iconImageError } from '@tinysmall/icon'
import type { IImageApi } from '@tinysmall/renderless/types/image.type'

export const $constants = {
  NONE: 'none',
  CONTAIN: 'contain',
  COVER: 'cover',
  FILL: 'fill',
  SCALE_DOWN: 'scale-down',
  DEFAULT_POPPER_ZINDEX: Number.POSITIVE_INFINITY
}

export const imageProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  fit: String,
  lazy: Boolean,
  previewSrcList: {
    type: Array,
    default: () => []
  },
  scrollContainer: {
    type: !isServer ? [String, HTMLElement] : null,
    default: null
  },
  src: String,
  zIndex: {
    type: Number,
    default: $constants.DEFAULT_POPPER_ZINDEX
  },
  showIndex: {
    type: Boolean,
    default: false
  },
  previewVisible: {
    type: Boolean,
    default: false
  },
  keepStyle: {
    type: Boolean,
    default: false
  },
  appendToBody: {
    type: Boolean,
    default: true
  }
}

export default defineComponent({
  components: {
    ImageViewer,
    Teleport,
    TinyIconImageError: iconImageError()
  },
  emits: ['load', 'error', 'delete', 'change-index'],
  props: imageProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IImageApi
  }
})
</script>
