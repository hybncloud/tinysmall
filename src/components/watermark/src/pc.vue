<template>
  <div class="tiny-watermark-wrapper" ref="parentRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { setup, defineComponent } from '@tinysmall/common'
import { renderless, api } from '@tinysmall/renderless/watermark/vue'
import { $constants } from '@tinysmall/renderless/watermark/constants'
import '@tinysmall/theme/watermark/index.less'

export default defineComponent({
  name: 'TinyWatermark',
  props: {
    width: { type: Number, default: 120 },
    height: { type: Number, default: 64 },
    rotate: { type: Number, default: -22 },
    zIndex: { type: Number, default: 9 },
    image: { type: String },
    content: { type: [String, Array<String>] },
    font: {
      type: Object
    },
    gap: { type: Array<number>, default: [100, 100] },
    offset: { type: Array<number>, default: [20, 20] },
    customClass: { type: String, default: '' },
    interlaced: { type: Boolean, default: true }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
