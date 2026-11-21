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
  <transition name="tiny-zoom-in-top" @after-leave="doDestroy">
    <ul
      class="tiny-dropdown-menu tiny-popper"
      :class="[state.size && `tiny-dropdown-menu--${state.size}`, popperClass]"
      v-show="state.showPopper"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      role="menu"
    >
      <template v-if="state.initShowPopper || state.showPopper">
        <slot :selected-index="state.selectedIndex">
          <tiny-dropdown-item
            v-for="(item, index) in options"
            :item-data="item"
            :label="item[textField]"
            :key="index"
            :icon="item.icon"
            :disabled="item.disabled"
            :divided="item.divided"
            :tip="item.tip"
            :tip-position="item.tipPosition"
            :tip-effect="item.tipEffect"
          >
          </tiny-dropdown-item>
        </slot>
      </template>
    </ul>
  </transition>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/dropdown-menu/vue'
import { setup, defineComponent } from '@tinysmall/common'
import DropdownItem from '@tinysmall/dropdown-item'
import '@tinysmall/theme/dropdown-menu/index.less'
import type { IDropdownMenuApi } from '@tinysmall/renderless/types/dropdown-menu.type'

export const dropdownMenuProps = {
  multiStage: {
    type: Boolean,
    default: false
  },
  checkedStatus: {
    type: Boolean,
    default: false
  },
  visibleArrow: Boolean,
  arrowOffset: {
    type: Number,
    default: 0
  },
  placement: String, // 默认主题 'bottom-end'
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  activeColor: String,
  closeOnClickOutside: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: 'down'
  },
  duration: {
    type: [Number, String],
    default: 0.2
  },
  overlay: {
    type: Boolean,
    default: true
  },
  zIndex: [Number, String],
  // tiny新增
  options: {
    type: Array,
    default: () => []
  },
  textField: {
    type: String,
    default: 'label'
  }
}

export default defineComponent({
  name: 'TinyDropdownMenu',
  componentName: 'TinyDropdownMenu',
  components: {
    TinyDropdownItem: DropdownItem
  },
  emits: [
    'mouseenter',
    'mouseleave',
    'click',
    'update:modelValue',
    'created',
    'visible',
    'updatePopper',
    'menu-selected-index',
    'menu-item-click',
    'mouseenter-tips',
    'mouseleave-tips'
  ],
  props: dropdownMenuProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IDropdownMenuApi
  }
})
</script>
