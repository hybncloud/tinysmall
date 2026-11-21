<template>
  <div
    v-observe-visibility="handleVisibilityChange"
    class="tiny-recycle-scroller"
    :class="{
      ready: state.ready,
      'page-mode': pageMode,
      [`direction-${direction}`]: true
    }"
    @scroll.passive="handleScroll"
  >
    <div v-if="slots.before" ref="before" class="tiny-recycle-scroller__slot">
      <slot name="before" />
    </div>

    <component
      :is="listTag"
      ref="wrapper"
      :style="{
        [direction === 'vertical' ? 'minHeight' : 'minWidth']: state.totalSize + 'px'
      }"
      class="tiny-recycle-scroller__item-wrapper"
      :class="listClass"
    >
      <component
        :is="itemTag"
        v-for="view of state.pool"
        :key="view.nr.id"
        :style="computeViewStyle(view)"
        class="tiny-recycle-scroller__item-view"
        :class="[
          itemClass,
          {
            hover: !skipHover && state.hoverKey === view.nr.key
          }
        ]"
        v-on="computeViewEvent(view)"
      >
        <slot :item="view.item" :index="view.nr.index" :active="view.nr.used" />
      </component>

      <slot name="empty" />
    </component>

    <div v-if="slots.after" ref="after" class="tiny-recycle-scroller__slot">
      <slot name="after" />
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/recycle-scroller/vue'
import { setup, defineComponent } from '@tinysmall/common'
import { ObserveVisibility } from '@tinysmall/directive'
import '@tinysmall/theme/recycle-scroller/index.less'

export const recycleScrollerProps = {
  items: { type: Array, required: true },
  keyField: { type: String, default: 'id' },
  direction: {
    type: String,
    default: 'vertical',
    validator: (value) => ['vertical', 'horizontal'].includes(value)
  },
  listTag: { type: String, default: 'div' },
  itemTag: { type: String, default: 'div' },
  itemSize: { type: Number, default: null },
  gridItems: { type: Number, default: undefined },
  itemSecondarySize: { type: Number, default: undefined },
  minItemSize: { type: [Number, String], default: null },
  sizeField: { type: String, default: 'size' },
  typeField: { type: String, default: 'type' },
  buffer: { type: Number, default: 200 },
  pageMode: { type: Boolean, default: false },
  prerender: { type: Number, default: 0 },
  emitUpdate: { type: Boolean, default: false },
  updateInterval: { type: Number, default: 0 },
  skipHover: { type: Boolean, default: false },
  listClass: { type: [String, Object, Array], default: '' },
  itemClass: { type: [String, Object, Array], default: '' },
  itemsLimit: { type: Number, default: 1000 }
}

export default defineComponent({
  name: 'TinyRecycleScroller',
  emits: ['resize', 'visible', 'hidden', 'update', 'scroll-start', 'scroll-end'],
  props: recycleScrollerProps,
  directives: { ObserveVisibility },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
