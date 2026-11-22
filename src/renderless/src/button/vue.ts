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


export const renderless = (
  props: IButtonProps,
  { computed, onBeforeUnmount, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { emit }: IButtonRenderlessParamUtils
): IButtonApi => {
  const state = reactive({
    timer: 0,
    disabled: props.disabled,
    /** form/button-group 通过 provide 注入的 vm：读取表单上下文 */
    tinyForm: inject('form', null),
    buttonGroup: inject('buttonGroup', null),
    plain: computed(() => props.plain || (state.buttonGroup || {}).plain),
    round: computed(() => props.round ?? false),
    formDisabled: computed(() => (state.tinyForm || {}).disabled),
    buttonDisabled: computed(
      () => props.disabled || state.disabled || (state.buttonGroup || {}).disabled || state.formDisabled
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
