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
    @dragstart.prevent
    :class="[
      'tiny-numeric',
      state.inputSize ? 'tiny-numeric--' + state.inputSize : '',
      { 'is-disabled': state.inputDisabled },
      { 'is-without-controls': !controls || (unit && hideUnit) },
      { 'is-controls-right': state.controlsAtRight },
      { 'is-display-only': state.isDisplayOnly }
    ]"
    @mousewheel.prevent="mouseEvent"
  >
    <div v-if="shape === 'filter'">
      <!-- TODO: remove shape === 'filter' -->
    </div>
    <div v-else data-tag="tiny-numeric-base" class="tiny-numeric-base">
      <span
        class="tiny-numeric__decrease"
        role="button"
        aria-label="decrease"
        :aria-disabled="state.minDisabled"
        v-if="controls && !unit"
        v-repeat-click="decrease"
        :class="{ 'is-disabled': state.minDisabled }"
        @keydown.enter="decrease"
      >
        <component :is="state.controlsAtRight ? 'icon-chevron-down' : 'icon-minus'" class="tiny-svg-size" />
      </span>
      <span
        class="tiny-numeric__increase"
        role="button"
        aria-label="increase"
        :aria-disabled="state.maxDisabled"
        v-if="controls && !unit"
        v-repeat-click="increase"
        :class="{ 'is-disabled': state.maxDisabled }"
        @keydown.enter="increase"
      >
        <component :is="state.controlsAtRight ? 'icon-chevron-up' : 'icon-plus'" class="tiny-svg-size" />
      </span>
      <div class="tiny-numeric__unit" v-if="unit && !hideUnit">
        {{ unit }}
      </div>
      <div
        :class="[
          'tiny-numeric__input',
          { 'tiny-numeric__read-only': state.isDisplayOnly },
          state.inputSize ? `tiny-input-${state.inputSize}` : '',
          state.inputDisabled ? 'is-disabled' : '',
          { 'has-unit': unit && !hideUnit },
          { 'text-align-left': unit && !unitCenter },
          { 'tiny-numeric__controls-position': controlsPosition }
        ]"
      >
        <span class="tiny-numeric-display-only">
          <span class="tiny-numeric-display-only__content" v-if="state.isDisplayOnly">
            <span class="tiny-numeric-display-only__value">{{ state.displayOnlyText }}</span>
            <span class="tiny-numeric-display-only__unit" v-if="unit && !hideUnit && state.currentValue">{{
              unit
            }}</span>
            <span v-else-if="unit && !hideUnit">{{ unit }}</span>
          </span>
          <input
            :tabindex="tabindex"
            role="spinbutton"
            :aria-valuemin="min"
            :aria-valuemax="max"
            :aria-valuenow="state.currentValue"
            :aria-disabled="state.inputDisabled"
            :class="['tiny-numeric__input-inner', { 'tiny-numeric__show-left': !controls && showLeft }]"
            ref="input"
            :value="state.displayValue"
            :placeholder="placeholder"
            :max="max"
            :min="min"
            :name="name"
            :aria-label="label"
            @keydown.up.prevent="increase"
            @keydown.down.prevent="decrease"
            @blur="handleBlur"
            @focus="handleFocus"
            @compositionend="handleInput"
            @input="handleInput"
            @change="handleInputChange"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/numeric/vue'
import { $constants } from '@tinysmall/renderless/numeric/constants'
import { setup, defineComponent } from '@tinysmall/common'
import { RepeatClick } from '@tinysmall/directive'
import { iconChevronDown, iconChevronUp, iconMinus, iconPlus } from '@tinysmall/icon'
import '@tinysmall/theme/numeric/index.less'
import type { INumericApi } from '@tinysmall/renderless/types/numeric.type'
import Radio from '@tinysmall/radio'
import RadioGroup from '@tinysmall/radio-group'
import Tag from '@tinysmall/tag'

export const numericProps = {
  allowEmpty: {
    type: Boolean,
    default: false
  },
  emptyValue: {
    default: undefined
  },
  circulate: Boolean,
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: '',
    validator: (value: string) => ['', 'right'].includes(value)
  },
  disabled: Boolean,
  format: [Object, String],
  hideUnit: {
    type: Boolean,
    default: false
  },
  holdZero: {
    type: Boolean,
    default: true
  },
  label: String,
  max: {
    type: [Number, String],
    default: Infinity
  },
  min: {
    type: [Number, String],
    default: -Infinity
  },
  modelTruncation: {
    type: Boolean,
    default: true
  },
  modelValue: [Number, String],
  mouseWheel: Boolean,
  name: String,
  placeholder: String,
  plugin: Function,
  precision: {
    type: Number,
    validator(val) {
      return val >= 0 && val === parseInt(val, 10)
    }
  },
  size: String,
  step: {
    type: [Number, String, Object],
    default: 1
  },
  stepStrictly: {
    type: Boolean,
    default: false
  },
  strictInput: {
    type: Boolean,
    default: false
  },
  stringMode: Boolean,
  tabindex: {
    type: String,
    default: '1'
  },
  unit: String,
  unitCenter: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  showLeft: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  tip: String,
  shape: String,
  clearable: {
    type: Boolean,
    default: true
  },
  filter: {
    type: Boolean,
    default: true
  },
  blank: {
    type: Boolean,
    default: true
  },
  changeCompat: {
    type: Boolean,
    default: false
  },
  parseInput: {
    type: Function
  },
  /** 样式主题，取自原 pc.vue props 数组 */
  theme: String
}

export default defineComponent({
  name: 'TinyNumeric',
  directives: { repeatClick: RepeatClick },
  components: {
    IconChevronDown: iconChevronDown(),
    IconChevronUp: iconChevronUp(),
    IconMinus: iconMinus(),
    IconPlus: iconPlus(),
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    TinyTag: Tag
  },
  props: numericProps,
  emits: ['update:modelValue', 'change', 'blur', 'focus', 'paste-error', 'filter-change', 'clear'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
