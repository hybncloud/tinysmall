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
    class="tiny-checkbox"
    :class="[
      border && state.checkboxSize ? 'tiny-checkbox--' + state.checkboxSize : '',
      { 'is-disabled': state.isDisabled || state.isDisplayOnly },
      { 'is-bordered': border },
      { 'is-checked': state.isChecked },
      { 'is-group-display-only': state.isGroupDisplayOnly },
      { 'is-display-only': state.isDisplayOnly },
      { 'is-filter': state.shape === 'filter' }
    ]"
    :id="id"
    tabindex="-1"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed' : state.isChecked"
    :aria-disabled="state.isDisabled || state.isDisplayOnly"
    :aria-label="text || label"
  >
    <span
      class="tiny-checkbox__input"
      :class="{
        'is-disabled': state.isDisabled || state.isDisplayOnly,
        'is-checked': state.isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': state.focus
      }"
    >
      <input
        v-if="trueLabel || falseLabel"
        class="tiny-checkbox__original"
        type="checkbox"
        :tabindex="tabindex"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :name="name"
        :disabled="state.isDisabled || state.isDisplayOnly"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="state.model"
        @change.stop="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @click.stop
      />
      <input
        v-else
        class="tiny-checkbox__original"
        type="checkbox"
        :tabindex="tabindex"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="state.isDisabled || state.isDisplayOnly"
        :value="label"
        :name="name"
        v-model="state.model"
        @change.stop="handleChange"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @click.stop
      />
      <span class="tiny-checkbox__inner">
        <icon-halfselect v-if="indeterminate && state.shape !== 'filter'" class="tiny-svg-size icon-halfselect" />
        <icon-checked-sur v-else-if="state.isChecked" class="tiny-svg-size icon-checked-sur" />
        <icon-check v-else class="tiny-svg-size icon-check" />
      </span>
    </span>
    <span
      v-if="(slots.default && slots.default()) || state.isShowText"
      class="tiny-checkbox__label tiny-checkbox-display-only"
      v-auto-tip
    >
      <slot>{{ state.showText }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/checkbox/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import '@tinysmall/theme/checkbox/index.less'
import { iconHalfselect, iconCheckedSur, iconCheck } from '@tinysmall/icon'
import type { ICheckboxApi } from '@tinysmall/renderless/types/checkbox.type'
import { AutoTip } from '@tinysmall/directive'
export const $constants = {
  FORM_ITEM: 'FormItem',
  FORM_CHANGE: 'form.change',
  CHECKBOX: $prefix + 'Checkbox',
  CHECKBOX_GROUP: 'CheckboxGroup'
}

export const checkboxProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  modelValue: {
    type: [String, Number, Boolean],
    // Tiny新增，因为类型有Boolean类型，所以默认值需要显示设置成 undefined 才可以保持逻辑正确
    default: undefined
  },
  label: {
    type: [String, Number, Boolean],
    default: ''
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: String,
  trueLabel: [String, Number],
  falseLabel: [String, Number],

  /*
   * 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
   */
  id: String,

  /*
   * 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
   */
  controls: { type: String, default: '' },
  border: Boolean,
  size: String,
  text: String,
  customClass: [String, Object, Array],
  validateEvent: {
    type: Boolean,
    default: true
  },
  events: {
    type: Object,
    default: () => ({})
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  iconPosition: String as PropType<IconPosition>,
  shape: {
    type: String,
    default: ''
  },
  tabindex: {
    type: String,
    default: '0'
  }
}

export default defineComponent({
  // tiny 新增。 renderless中，没有emit('click')的地方。 此处勿声明，否则会造成丢失click事件。
  emits: ['update:modelValue', 'change', 'complete'],
  directives: { AutoTip },
  props: checkboxProps,
  components: {
    IconHalfselect: iconHalfselect(),
    IconCheckedSur: iconCheckedSur(),
    IconCheck: iconCheck()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ICheckboxApi
  }
})
</script>
