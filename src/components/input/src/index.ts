/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type { PropType } from '@tinysmall/common'
import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'

export const $constants = {
  INPUT_PC: 'tiny-input__',
  INPUTGROUP_PC: 'tiny-input-group__',
  INPUT_MOBILE: 'tiny-mobile-input__',
  INPUTGROUP_MOBILE: 'tiny-mobile-input-group__',
  Mode: 'pc',
  inputMode(mode) {
    return mode === this.Mode ? this.INPUT_PC : this.INPUT_MOBILE
  },
  inputGroupMode(mode) {
    return mode === this.Mode ? this.INPUTGROUP_PC : this.INPUTGROUP_MOBILE
  },
  VALIDATE_ICON: {
    Validating: 'tiny-icon-loading',
    Success: 'tiny-icon-circle-check',
    Error: 'tiny-icon-circle-close'
  },
  COMPONENT_NAME: {
    FormItem: 'FormItem'
  },
  MASKSYMBOL: '******',
  TEXTAREA_HEIGHT_MOBILE: 108
}

export const inputProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  name: String,
  size: String,
  form: String,
  label: String,
  height: Number,
  resize: String,
  tabindex: { type: String, default: '1' },
  disabled: Boolean,
  readonly: Boolean,
  hoverExpand: Boolean,
  mask: Boolean,
  suffixIcon: [Object, String],
  prefixIcon: [Object, String],
  modelValue: [String, Number] as PropType<string | number | null>,
  type: {
    type: String,
    default: 'text'
  },
  memorySpace: {
    type: Number,
    default: 5
  },
  selectMenu: {
    type: Array<{ id: string; label: string }>,
    default: () => []
  },
  isSelect: {
    type: Boolean,
    default: false
  },
  tips: String,
  counter: {
    type: Boolean,
    default: false
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  popupMore: {
    type: Boolean,
    default: false
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  displayOnlyContent: {
    type: String,
    default: ''
  },
  frontClearIcon: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: undefined
  },
  textAlign: {
    type: String,
    default: 'left'
  },
  width: {
    type: [String, Number] as PropType<string | number | null>
  },
  showTooltip: {
    type: Boolean,
    default: true
  },
  /** 输入框的边框模式，当值为underline时，只显示一条底部直线 */
  inputBoxType: {
    type: String,
    default: 'normal',
    validator: (value: string) => ['normal', 'underline'].includes(value)
  }
}

export default defineComponent({
  name: $prefix + 'Input',
  inheritAttrs: false,
  props: inputProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
