<template>
  <div class="tiny-skeleton">
    <template v-if="loading">
      <slot name="placeholder">
        <div class="tiny-skeleton__article">
          <tiny-skeleton-item variant="circle" class="tiny-skeleton__avatar" v-if="avatar"> </tiny-skeleton-item>
          <div class="tiny-skeleton__section">
            <tiny-skeleton-item class="tiny-skeleton-item__title"></tiny-skeleton-item>
            <div class="tiny-skeleton-item__rows">
              <tiny-skeleton-item
                v-for="(item, index) in rows"
                :key="item"
                :style="{ width: toPxStyle(rowsWidth[index]) }"
              ></tiny-skeleton-item>
            </div>
          </div>
        </div>
      </slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/skeleton/vue'
import { $props, props, setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import SkeletonItem from '@tinysmall/skeleton-item'

export const $constants = {}

export const skeletonProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: String,
  loading: {
    type: Boolean,
    default: true
  },
  rows: {
    type: Number,
    default: 3
  },
  avatar: {
    type: Boolean,
    default: false
  },
  rowsWidth: {
    type: Array as PropType<(string | number)[]>,
    default: () => []
  },
  animated: {
    type: Boolean,
    default: true
  }
}

export default defineComponent({
  emits: ['update:modelValue'],
  props: skeletonProps,
  components: {
    TinySkeletonItem: SkeletonItem
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
