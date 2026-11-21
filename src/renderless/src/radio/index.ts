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
import type { IRadioRenderlessParams, IRadioState } from '../../types'

export const handleChange =
  ({
    
    emit,
    state,
    nextTick
  }: Pick<IRadioRenderlessParams, 'constants' | 'emit' | 'state' | 'nextTick'>) =>
  (): void => {
    nextTick(() => {
      emit('change', state.model)

      // 替代 dispatch(RADIO_GROUP, 'handleChange')：走 radio-group 的 $emitter 纯总线广播，
      // group 侧 vm.$on('handleChange') 处理器转发为公共事件 'change'
      state.isGroup && state.radioGroup?.$emitter.emit('handleChange', state.model)
    })
  }

export const isGroup =
  ({ state }: Pick<IRadioRenderlessParams, 'state'>) =>
  (): boolean => {
    // 分组上下文来自 inject('radioGroup')（见 radio-group/vue.ts）
    return !!state.radioGroup
  }

export const radioSize =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): IRadioState['radioSize'] => {
    if (state.isGroup && state.radioGroup?.state?.radioGroupSize) {
      return state.radioGroup.state.radioGroupSize
    } else {
      return props.size
    }
  }

export const isDisabled =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): boolean =>
    props.disabled || state.radioGroup?.disabled || state.formDisabled

export const isDisplayOnly =
  ({ props }: Pick<IRadioRenderlessParams, 'props'>) =>
  (): boolean =>
    props.displayOnly

export const tabIndex =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): number =>
    state.isDisabled || (state.isGroup && state.model !== props.label) ? -1 : 0

export const getModel =
  ({ props, state }: Pick<IRadioRenderlessParams, 'props' | 'state'>) =>
  (): IRadioState['model'] =>
    state.isGroup && state.radioGroup ? state.radioGroup.modelValue : props.modelValue

export const setModel =
  ({
    emit,
    props,
    vm,
    state
  }: Pick<IRadioRenderlessParams, 'constants' | 'emit' | 'props' | 'vm' | 'state'>) =>
  (val: IRadioState['model']): void => {
    if (state.isGroup) {
      // 替代 dispatch(RADIO_GROUP, 'update:modelValue')：同上，走 $emitter 纯总线广播（group 桥接到 v-model）
      state.radioGroup?.$emitter.emit('update:modelValue', val)
    } else {
      emit('update:modelValue', val)
    }

    vm.$refs.radio && (vm.$refs.radio.checked = state.model === props.label)
  }

export const toggleEvent = ({ props, vm, type }: Pick<IRadioRenderlessParams, 'props' | 'vm' | 'type'>) => {
  const radioEl = vm.$refs.radio

  if (radioEl) {
    Object.keys(props.events).forEach((ev) => {
      radioEl[type + 'EventListener'](ev, props.events[ev])
    })
  }
}
