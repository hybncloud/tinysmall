<template>
  <div
    class="tiny-skeleton-item"
    :class="[
      variant ? 'tiny-skeleton-item--' + variant : '',
      size && variant !== 'square' ? 'tiny-skeleton-item--' + size : '',
      state.isActive ? 'tiny-skeleton-item--active' : ''
    ]"
  >
    <icon-picture v-if="variant === 'image'"></icon-picture>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/skeleton-item/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import { iconPicture } from '@tinysmall/icon'

type VariantType = 'image' | 'circle' | 'square'
type SizeType = 'large' | 'medium' | 'small'

export const $constants = {}

export const skeletonItemProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: String,
  variant: {
    type: String as PropType<VariantType>,
    default: 'square'
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'medium'
  }
}

export default defineComponent({
  name: $prefix + 'SkeletonItem',
  emits: ['update:modelValue'],
  props: skeletonItemProps,
  components: {
    IconPicture: iconPicture()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
