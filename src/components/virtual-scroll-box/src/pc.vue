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
import { defineComponent, props, setup } from '@tinysmall/common'

export default defineComponent({
  emits: ['change'],
  props: [
    ...props,
    'width',
    'height',
    'rowBuffer',
    'columnBuffer',
    'scrollbarSize',
    'columns',
    'columnSizes',
    'rows',
    'rowSizes',
    'fixedRows',
    'fixedColumns',
    'spanConfig'
  ],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
