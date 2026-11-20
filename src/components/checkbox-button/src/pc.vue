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
    class="tiny-checkbox-button"
    :class="[
      state.size ? 'tiny-checkbox-button--' + state.size : '',
      { 'is-disabled': state.isDisabled },
      { 'is-checked': state.isChecked },
      { 'is-focus': state.focus }
    ]"
    role="checkbox"
    :aria-checked="state.isChecked"
    :aria-disabled="state.isDisabled"
  >
    <input
      v-if="trueLabel || falseLabel"
      class="tiny-checkbox-button__original"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="state.isDisabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      v-model="state.model"
      @change="handleChange"
      @focus="state.focus = true"
      @blur="state.focus = false"
    />
    <input
      v-else
      class="tiny-checkbox-button__original"
      type="checkbox"
      :name="name"
      :tabindex="tabindex"
      :disabled="state.isDisabled"
      :value="label"
      v-model="state.model"
      @change="handleChange"
      @focus="state.focus = true"
      @blur="state.focus = false"
    />

    <span
      v-if="slots.default || state.isShowText"
      class="tiny-checkbox-button__inner"
      :style="state.isChecked ? state.activeStyle : null"
    >
      <slot>{{ state.showText }}</slot>
    </span>
  </label>
</template>

<script lang="tsx">
import { renderless, api } from '@tinysmall/renderless/checkbox-button/vue'
import { $constants } from '@tinysmall/renderless/checkbox-button/constants'
import { $prefix, $props, setup, defineComponent } from '@tinysmall/common'


export const checkboxButtonProps = {
  ...$props,
  
  modelValue: {},
  label: {},
  disabled: Boolean,
  checked: Boolean,
  name: String,
  trueLabel: [String, Number],
  falseLabel: [String, Number],
  text: String,
  events: {
    type: Object,
    default: () => ({})
  },
  tabindex: {
    type: String,
    default: '0'
  }
}

export default defineComponent({
  name: $prefix + 'CheckboxButton',
  emits: ['change', 'update:modelValue'],
  props: checkboxButtonProps,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
