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
  <div
    :class="[
      'tiny-timeline tiny-steps',
      { 'is-horizontal': horizontal && !vertical, 'tiny-steps--mini': size === 'mini' }
    ]"
  >
    <div :class="state.computedWrapperClass">
      <slot>
        <tiny-timeline-item
          v-for="(node, index) in state.nodes"
          :key="index"
          :node-index="index"
          :node="node"
          :space="space"
          :line-width="lineWidth"
          :shape="shape"
          :autoColorField="autoColorField"
          @click="handleClick({ index, node })"
        >
          <template #active-node-desc="slotScoped">
            <slot name="active-node-desc" :node="slotScoped.node"></slot>
          </template>
          <template #top="{ slotScope }">
            <slot name="top" :slot-scope="slotScope"></slot>
          </template>
          <template #bottom="{ slotScope }">
            <slot name="bottom" :slot-scope="slotScope"></slot>
          </template>
          <template #left="{ slotScope }">
            <slot name="left" :slot-scope="slotScope"></slot>
          </template>
          <template #right="{ slotScope }">
            <slot name="right" :slot-scope="slotScope"></slot>
          </template>
        </tiny-timeline-item>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/time-line/vue'
import { $constants } from '@tinysmall/renderless/time-line/constants'
import { setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import '@tinysmall/theme/steps/index.less'
import TimelineItem from '@tinysmall/timeline-item'
import type { ITimelineApi } from '@tinysmall/renderless/types/time-line.type'

export const timelineProps = {
  /** 尺寸，取自原 pc.vue props 数组 */
  size: { type: String, default: '' },
  /** 文本位置，取自原 pc.vue props 数组 */
  textPosition: { type: String, default: 'left' },
  /** 是否显示分割线，取自原 pc.vue props 数组 */
  showDivider: { type: Boolean, default: false },
  vertical: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: Boolean,
    default: true
  },
  showNumber: {
    type: Boolean,
    default: true
  },
  nameField: {
    type: String,
    default: 'name'
  },
  timeField: {
    type: String,
    default: 'time'
  },
  autoColorField: {
    type: String,
    default: 'autoColor'
  },
  start: {
    type: Number,
    default: 1
  },
  data: {
    type: Array,
    default: () => []
  },
  space: {
    type: [String, Number],
    default: ''
  },
  active: {
    type: Number,
    default: -1
  },
  reverse: {
    type: Boolean,
    default: false
  },
  showStatus: {
    type: Boolean,
    default: false
  },
  foldDisabled: {
    type: Boolean,
    default: false
  },
  nodeMax: {
    type: [Number, String],
    default: $constants.STACK_NODES_MAX
  },
  limitedNodes: {
    type: [Number, String],
    default: $constants.LIMITED_STACK_NODES
  },
  onlyNumber: {
    type: Boolean,
    default: false
  },
  lineWidth: {
    type: [String, Number],
    default: ''
  },
  shape: {
    type: String as PropType<ShapeType>,
    default: 'circle'
  }
}

export default defineComponent({
  name: 'TinyTimeLine',
  emits: ['click'],
  props: timelineProps,
  components: {
    TinyTimelineItem: TimelineItem
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      mono: true
    })
  }
})
</script>
