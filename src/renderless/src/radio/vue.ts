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
import type {
  IRadioApi,
  IRadioProps,
  IRadioState,
  ISharedRenderlessParamHooks,
  IRadioRenderlessParamUtils
} from '../../types'
import {
  handleChange,
  isGroup,
  radioSize,
  isDisabled,
  isDisplayOnly,
  tabIndex,
  getModel,
  setModel,
  toggleEvent
} from './index'

export const api = ['state', 'handleChange']

export const renderless = (
  props: IRadioProps,
  { onMounted, onBeforeUnmount, computed, reactive, inject }: ISharedRenderlessParamHooks,
  { vm, emit, nextTick }: IRadioRenderlessParamUtils
): IRadioApi => {
  const api = {} as IRadioApi

  const state: IRadioState = reactive({
    vertical: inject('radioVertical', false),
    // form 通过 provide('form') 暴露 vm，替代挂在链式 parent 上的 tinyForm 缓存；后续统一从 state.tinyForm 取用
    tinyForm: inject('form', null),
    size: computed(() => props.size || inject('size', null) || (state.tinyForm || {}).size),
    focus: false,
    radioGroup: inject('radioGroup', null),
    isGroup: computed(() => api.isGroup()),
    radioSize: computed(() => api.radioSize()),
    isDisabled: computed(() => api.isDisabled()),
    isDisplayOnly: computed(() => api.isDisplayOnly() || (state.tinyForm || {}).displayOnly),
    tabIndex: computed(() => api.tabIndex()),
    formDisabled: computed(() => (state.tinyForm || {}).disabled),
    model: computed({
      get: () => api.getModel(),
      set: (val) => api.setModel(val)
    })
  })

  Object.assign(api, {
    state,
    radioSize: radioSize({ props, state }),
    getModel: getModel({ props, state }),
    isGroup: isGroup({ state }),
    tabIndex: tabIndex({ props, state }),
    isDisabled: isDisabled({ props, state }),
    isDisplayOnly: isDisplayOnly({ props }),
    setModel: setModel({ emit, props, vm, state }),
    handleChange: handleChange({ emit, state, nextTick })
  })

  // 替代 dispatch('Tooltip', 'tooltip-update')：tooltip 通过 provide('tooltipVm') 暴露 vm，
  // 走 $emitter.emit 纯总线通知（tooltip 以 vm.$on('tooltip-update') 订阅）
  const tooltipVm: any = inject('tooltipVm', null)

  onMounted(() => {
    tooltipVm?.$emitter.emit('tooltip-update')
    toggleEvent({ props, vm, type: 'add' })
  })

  onBeforeUnmount(() => {
    toggleEvent({ props, vm, type: 'remove' })
  })

  return api
}
