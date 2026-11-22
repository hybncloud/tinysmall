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
    class="tiny-select-dropdown tiny-popper"
    :class="[{ 'is-multiple': state.multiple }, state.popperClass]"
    @mousedown.stop
    :style="{
      minWidth: state.minWidth,
      width: isDropInheritWidth ? state.minWidth : 'auto'
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/select-dropdown/vue'
import { setup, defineComponent } from '@tinysmall/common'
import '@tinysmall/theme/select-dropdown/index.less'

export const selectDropdownProps = {
  appendToBody: {
    type: Boolean,
    default: () => true
  },
  arrowOffset: {
    type: Number,
    default: () => 35
  },
  boundariesPadding: {
    default: () => 0
  },
  isDropInheritWidth: Boolean,
  modelValue: Boolean,
  offset: {
    default: () => 0
  },
  placement: {
    default: () => 'bottom-start'
  },
  popper: {},
  popperOptions: {
    default: () => ({ gpuAcceleration: false })
  },
  reference: {},
  transformOrigin: {
    type: [Boolean, String],
    default: () => true
  },
  visibleArrow: {
    default: () => false
  },
  closeByMask: {
    type: Boolean,
    default: true
  },
  searchPlaceholder: {
    type: String,
    default: ''
  },
  title: String
}

export default defineComponent({
  name: 'TinySelectDropdown',
  componentName: 'SelectDropdown',
  inject: ['select'],
  props: selectDropdownProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
