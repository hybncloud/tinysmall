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

<script>
import { renderless, api } from '@tinysmall/renderless/skeleton-item/vue'
import { props, setup, defineComponent } from '@tinysmall/common'
import { iconPicture } from '@tinysmall/icon'

export default defineComponent({
  emits: ['update:modelValue'],
  props: [...props, 'modelValue', 'variant', 'size'],
  components: {
    IconPicture: iconPicture()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
