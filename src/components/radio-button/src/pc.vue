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
  <label
    class="tiny-radio-button"
    :class="[
      state.size ? 'tiny-radio-button--' + state.size : 'tiny-radio-button--default',
      { 'is-active': state.value === label },
      { 'is-disabled': state.isDisabled },
      { 'is-focus': state.focus }
    ]"
    role="radio"
    :aria-checked="state.value === label"
    :aria-disabled="state.isDisabled"
    :tabindex="state.tabIndex"
    @keydown.space.stop.prevent="state.value = state.isDisabled ? state.value : label"
  >
    <input
      ref="radio"
      class="tiny-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="state.value"
      :name="name"
      @change="handleChange"
      :disabled="state.isDisabled"
      tabindex="-1"
      @focus="state.focus = true"
      @blur="state.focus = false"
    />
    <span class="tiny-radio-button__inner" :style="state.value === label ? state.activeStyle : undefined" @keydown.stop>
      <slot></slot>
      <template v-if="!slots.default">{{ text || label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/radio-button/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import type { IRadioButtonApi } from '@tinysmall/renderless/types/radio-button.type'

export const $constants = {
  RADIO_GROUP: 'RadioGroup'
}

export const radioButtonProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  name: String,
  text: String,
  events: {
    type: Object,
    default: () => ({})
  },
  label: {},
  disabled: Boolean,
  tipContent: String
}

export default defineComponent({
  name: $prefix + 'RadioButton',
  emits: ['change'],
  props: radioButtonProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IRadioButtonApi
  }
})
</script>
