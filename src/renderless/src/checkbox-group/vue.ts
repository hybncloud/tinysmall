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

import { $constants } from './constants'
import { computedFormItemSize, computedCheckboxGroupSize } from './index'

export const api = ['state']

export const renderless = (props, { computed, reactive, watch, inject, provide }, { vm, emit }) => {
  const api = {
    computedFormItemSize: computedFormItemSize(props)
  }
  const formItemSize = computed(() => api.computedFormItemSize())

  const state = reactive({
    checkboxGroupSize: computed(() => api.computedCheckboxGroupSize())
  })

  Object.assign(api, {
    state,
    computedCheckboxGroupSize: computedCheckboxGroupSize({ props, formItemSize })
  })

  // 桥接：checkbox/checkbox-button 通过 checkboxGroup.$emitter 广播的内部事件，
  // 由这里决定以公共事件名对外触发（'change' / 'update:modelValue' 走 v-model）。
  // 注意用 setup 级 emit（仅 instance.emit、不回总线），同名也不会重入循环；
  // 这保留了旧 dispatch 触发 group instance.emit 的公共行为
  vm.$on('change', (value) => emit('change', value))
  vm.$on('update:modelValue', (value) => emit('update:modelValue', value))

  // 替代 dispatch(FORM_ITEM, FORM_CHANGE)：form-item 通过 provide('formItem') 暴露 vm，
  // 走 $emitter.emit 纯总线通知（form-item 以 vm.$on('form.change') 订阅），不触发其 instance.emit
  const formItem = inject('formItem', null)

  watch(
    () => props.modelValue,
    (value) => formItem?.$emitter.emit($constants.FORM_CHANGE, value)
  )

  provide('checkboxGroup', vm)

  provide('size', props.size)

  provide('vertical', props.vertical)

  provide('iconPosition', props.iconPosition)

  provide('shape', props.shape)

  return api
}
