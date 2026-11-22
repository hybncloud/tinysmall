<template>
  <div
    :class="['tiny-divider', 'tiny-divider--' + direction, direction === 'vertical' ? 'tiny-divider--' + status : '']"
    :style="state.rootStyle"
  >
    <div
      v-if="direction !== 'vertical'"
      :style="{
        'border-color': color,
        ...state.lineStyle
      }"
      :class="['tiny-divider-line', 'tiny-divider--' + status]"
    ></div>
    <div
      v-if="slots.default"
      ref="text"
      :class="['tiny-divider__text']"
      :style="{
        color: contentColor,
        'background-color': contentBackgroundColor,
        ...state.textStyle
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/divider/vue'
import { $constants } from '@tinysmall/renderless/divider/constants'
import { setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'

type DirectionType = 'horizontal' | 'vertical'
type BorderStyleType = 'dashed' | 'solid' | 'dotted'
type ContentPositionType = 'left' | 'right' | 'center'

export const dividerProps = {
  direction: {
    type: String as PropType<DirectionType>,
    default: 'horizontal'
  },
  color: {
    type: String,
    default: ''
  },
  borderStyle: {
    type: String as PropType<BorderStyleType>,
    default: 'solid'
  },
  contentPosition: {
    type: String as PropType<ContentPositionType>,
    default: 'center'
  },
  contentColor: {
    type: String,
    default: ''
  },
  contentBackgroundColor: {
    type: String,
    default: ''
  },
  fontSize: {
    type: String,
    default: () => '14px'
  },
  margin: String,
  offset: String,
  height: String,
  status: {
    type: String,
    values: ['default', 'success', 'warning', 'error', 'info'],
    default: () => 'default'
  }
}

export default defineComponent({
  name: 'TinyDivider',
  props: dividerProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
