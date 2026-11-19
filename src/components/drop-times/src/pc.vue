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
  <tiny-select
    :tabindex="tabindex"
    :size="size"
    v-model="state.selectedValue"
    :placeholder="placeholder"
    @change="change"
    :popper-class="'tiny-drop-times' + (popperClass ? ' ' + popperClass : '')"
    :popper-append-to-body="popperAppendToBody"
    @clear="$emit('clear')"
    @visible-change="$emit('visible-change', $event)"
  >
    <tiny-option v-for="(item, index) in state.options" :key="index" :label="item.label" :value="item.value">
    </tiny-option>
  </tiny-select>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/drop-times/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import Select from '@tinysmall/base-select'
import Option from '@tinysmall/option'

export const dropTimesProps = {
  ...$props,
  modelValue: {},
  placeholder: {
    type: String,
    default: ''
  },
  tabindex: {
    type: String,
    default: '1'
  },
  size: String,
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  start: {
    type: Number,
    default: 0
  },
  end: {
    type: Number,
    default: 24 * 60
  },
  step: {
    type: Number,
    default: 15
  }
}

export default defineComponent({
  name: $prefix + 'DropTimes',
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  props: dropTimesProps,
  emits: ['change', 'update:modelValue', 'clear', 'visible-change'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
