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
import type { ISharedRenderlessParamHooks, IButtonProps, IButtonApi, IButtonRenderlessParamUtils } from '../../types'

import { handleClick, clearTimer } from './index'

export const api = ['state', 'handleClick']

export const renderless = (
  props: IButtonProps,
  { computed, onBeforeUnmount, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { emit }: IButtonRenderlessParamUtils
): IButtonApi => {
  const form = inject('form', null)
  const buttonGroup = inject('buttonGroup', null)

  const state = reactive({
    timer: 0,
    disabled: props.disabled,
    plain: computed(() => props.plain || (buttonGroup || {}).plain),
    round: computed(() => props.round ?? false),
    formDisabled: computed(() => (form || {}).disabled),
    buttonDisabled: computed(
      () => props.disabled || state.disabled || (buttonGroup || {}).disabled || state.formDisabled
    )
  })

  watch(
    () => props.disabled,
    (value) => {
      state.disabled = value
    },
    { immediate: true }
  )

  const api: IButtonApi = {
    state,
    clearTimer: clearTimer(state),
    handleClick: handleClick({ emit, props, state })
  }

  onBeforeUnmount(api.clearTimer)

  return api
}
