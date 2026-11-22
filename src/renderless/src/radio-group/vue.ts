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

import type {
  IRadioGroupApi,
  IRadioGroupProps,
  IRadioGroupState,
  ISharedRenderlessParamHooks,
  IRadioGroupRenderlessParamUtils
} from '../../types'
import { handleKeydown, mounted } from './index'


export const renderless = (
  props: IRadioGroupProps,
  { computed, inject, onMounted, reactive, watch, provide }: ISharedRenderlessParamHooks,
  { vm, emit }: IRadioGroupRenderlessParamUtils
): IRadioGroupApi => {
  const state: IRadioGroupState = reactive({
    radioGroupSize: computed(() => props.size),
    tag: 'div',
    activeStyle: props.fill
  })

  // radio/radio-button 通过 radioGroup.$emitter 广播 'handleChange'（内部事件），
  // 这里转发为公共事件 'change'（不同名，且 setup 级 emit 不回总线，无重入风险）
  vm.$on('handleChange', (value) => {
    emit('change', value)
  })

  // 桥接 'update:modelValue'：v-model 公共事件（setup 级 emit 仅 instance.emit，同名不重入）
  vm.$on('update:modelValue', (value) => emit('update:modelValue', value))

  // 替代 dispatch('FormItem', 'form.change')：见 checkbox-group 同款改造说明，
  // 走 $emitter.emit 纯总线通知（form-item 以 vm.$on('form.change') 订阅），不触发其 instance.emit
  const formItem: any = inject('formItem', null)

  const api: IRadioGroupApi = {
    state,
    onMounted: mounted(vm),
    handleKeydown: handleKeydown(vm)
  }

  watch(
    () => props.modelValue,
    (value) => {
      formItem?.$emitter.emit('form.change', value)
    }
  )

  onMounted(api.onMounted)

  provide('radioGroup', vm)

  provide('radioVertical', props.vertical)

  provide('showTips', props.showTips)

  provide('size', props.size)

  return api
}
