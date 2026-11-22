import { $constants } from './constants'
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

export const handleChange =
  ({ state, props, emit, nextTick }) =>
  (event) => {
    if (state.isLimitExceeded) {
      return
    }

    let value

    if (event.target.checked) {
      value = props.trueLabel === undefined ? true : props.trueLabel
    } else {
      value = props.falseLabel === undefined ? false : props.falseLabel
    }

    emit('change', value, event)

    nextTick(() => {
      // 替代 dispatch(CHECKBOX_GROUP, 'change')：同 checkbox，走 checkbox-group 的 $emitter 纯总线广播
      if (state.checkboxGroup) {
        state.checkboxGroup.$emitter.emit('change', state.checkboxGroup.modelValue)
      }
    })
  }

export const computedGetModelGet =
  ({ state, props }) =>
  () =>
    state.checkboxGroup ? state.store : props.modelValue !== undefined ? props.modelValue : state.selfModel

export const computedGetModelSet =
  ({ state, props, emit }) =>
  (value) => {
    if (state.checkboxGroup) {
      state.isLimitExceeded = false

      state.checkboxGroup.min !== undefined && value.length < state.checkboxGroup.min && (state.isLimitExceeded = true)

      state.checkboxGroup.max !== undefined && value.length > state.checkboxGroup.max && (state.isLimitExceeded = true)

      state.isLimitExceeded === false && state.checkboxGroup.$emitter.emit('update:modelValue', value)
    } else if (props.modelValue !== undefined) {
      emit('update:modelValue', value)
    } else {
      state.selfModel = value
    }
  }

// tiny新增： 增加监听form的disabled
export const computedIsDisabled =
  ({ state, props }) =>
  () =>
    (state.checkboxGroup ? state.checkboxGroup.disabled || props.disabled || state.isLimitDisabled : props.disabled) ||
    state.formDisabled

export const computedActiveStyle = (state) => () => ({
  backgroundColor: state.checkboxGroup.fill || '',
  borderColor: state.checkboxGroup.fill || '',
  color: state.checkboxGroup.textColor || '',
  'box-shadow': '-1px 0 0 0 ' + state.checkboxGroup.fill
})

export const computedFormItemSize = (props) => () => (props.formItem || {}).formItemSize

export const computedSize =
  ({ state, formItemSize }) =>
  () =>
    (state.checkboxGroup && state.checkboxGroup.state.checkboxGroupSize) || formItemSize.value

export const toggleEvent = ({ vm, props, type }) => {
  const inputEl = vm.$el.querySelector('input')

  Object.keys(props.events).forEach((ev) => {
    inputEl[type + 'EventListener'](ev, props.events[ev])
  })
}
