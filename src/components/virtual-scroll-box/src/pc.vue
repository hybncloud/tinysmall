<template>
  <div class="tiny-virtual-scroll-box" :style="state.ctx.boxStyle" @scroll="onScroll">
    <div class="tiny-virtual-scroll-box__x-axis" :style="state.ctx.xAxisStyle"></div>
    <div class="tiny-virtual-scroll-box__y-axis" :style="state.ctx.yAxisStyle"></div>
    <div class="tiny-virtual-scroll-box__view" :style="state.ctx.viewStyle">
      <slot :params="state.slotParams"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/virtual-scroll-box/vue'
import { $prefix, $props, defineComponent, props, setup } from '@tinysmall/common'

export const virtualScrollBoxProps = {
  ...$props,
  width: [Number, String], // 区域的宽度
  height: [Number, String], // 区域的高度
  rowBuffer: { type: [Number, String], default: 200 }, // 行缓冲区高度
  columnBuffer: { type: [Number, String], default: 200 }, // 列缓冲区宽度
  scrollbarSize: [Number, String], // 滚动条尺寸
  columns: { type: Array, default: () => [] }, // 所有的列
  columnSizes: { type: Array, default: () => [] }, // 每个列对应的宽度
  rows: { type: Array, default: () => [] }, // 所有的行
  rowSizes: { type: Array, default: () => [] }, // 每个行对应的高度
  fixedRows: { type: Array, default: () => [] }, // 行固定配置
  fixedColumns: { type: Array, default: () => [] }, // 列固定配置
  spanConfig: { type: Array, default: () => [] } // 单元格合并配置
}

export default defineComponent({
  name: $prefix + 'VirtualScrollBox',
  emits: ['change'],
  props: virtualScrollBoxProps,
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
