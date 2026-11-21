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

export const api = ['state', 'handleKeydown']

export const renderless = (
  props: IRadioGroupProps,
  { computed, onMounted, reactive, watch, provide }: ISharedRenderlessParamHooks,
  { vm, dispatch }: IRadioGroupRenderlessParamUtils
): IRadioGroupApi => {
  const state: IRadioGroupState = reactive({
    radioGroupSize: computed(() => props.size),
    tag: 'div',
    activeStyle: props.fill
  })

  vm.$on('handleChange', (value) => {
    vm.$emit('change', value)
  })

  const api: IRadioGroupApi = {
    state,
    dispatch,
    onMounted: mounted(vm),
    handleKeydown: handleKeydown(vm)
  }

  watch(
    () => props.modelValue,
    (value) => {
      api.dispatch('FormItem', 'form.change', [value])
    }
  )

  onMounted(api.onMounted)

  provide('radioGroup', vm)

  provide('radioVertical', props.vertical)

  provide('showTips', props.showTips)

  provide('size', props.size)

  return api
}
