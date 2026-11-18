<template>
  <tiny-virtual-scroll-box ref="vsBox" class="tiny-virtual-tree" v-bind="state.vsBoxOptions" @change="onVsBoxChange">
    <tiny-tree
      ref="tree"
      v-bind="state.treeOptions"
      v-on="state.treeEvents"
      :style="state.treeStyle"
      @node-expand="onTreeChange"
      @node-collapse="onTreeChange"
    >
      <!-- 透传 空数据插槽 -->
      <template v-if="slots.empty" #empty="params">
        <slot name="empty" v-bind="params"></slot>
      </template>

      <!-- 透传 默认插槽 -->
      <template v-if="slots.default" #default="params">
        <slot name="default" v-bind="params"></slot>
      </template>

      <!-- 透传 前缀插槽 -->
      <template v-if="slots.prefix" #prefix="params">
        <slot name="prefix" v-bind="params"></slot>
      </template>

      <!-- 透传 后缀插槽 -->
      <template v-if="slots.suffix" #suffix="params">
        <slot name="suffix" v-bind="params"></slot>
      </template>

      <!-- 透传 操作插槽 -->
      <template v-if="slots.operation" #operation="params">
        <slot name="operation" v-bind="params"></slot>
      </template>
    </tiny-tree>
  </tiny-virtual-scroll-box>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/virtual-tree/vue'
import { $prefix, $props, defineComponent, props, setup } from '@tinysmall/common'
import VirtualScrollBox from '@tinysmall/virtual-scroll-box'
import Tree from '@tinysmall/tree'

export const virtualTreeProps = {
    ...$props,
    width: [Number, String],
    height: [Number, String],
    rowHeight: {
      type: Number,
      default: 36
    },
    scrollbarSize: {
      type: Number,
      default: 6
    },
    treeOp: null
  }

export default defineComponent({
  name: $prefix + 'VirtualTree',
  inheritAttrs: false,
  props: virtualTreeProps,
  components: {
    TinyVirtualScrollBox: VirtualScrollBox,
    TinyTree: Tree
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
