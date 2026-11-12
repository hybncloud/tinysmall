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
import { props, setup, defineComponent } from '@tinysmall/common'
import { ObserveVisibility } from '@tinysmall/directive'
import '@tinysmall/theme/recycle-scroller/index.less'

export default defineComponent({
  emits: ['resize', 'visible', 'hidden', 'update', 'scroll-start', 'scroll-end'],
  props: [
    ...props,
    'items',
    'keyField',
    'direction',
    'listTag',
    'itemTag',
    'itemSize',
    'gridItems',
    'itemSecondarySize',
    'minItemSize',
    'sizeField',
    'typeField',
    'buffer',
    'pageMode',
    'prerender',
    'emitUpdate',
    'updateInterval',
    'skipHover',
    'listClass',
    'itemClass',
    'itemsLimit'
  ],
  directives: { ObserveVisibility },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
