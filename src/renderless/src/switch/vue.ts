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
import { toggle, computedWarpClasses, computedInnerClasses, computedStyle } from './index'
import type {
  ISwitchApi,
  ISwitchProps,
  ISwitchState,
  ISharedRenderlessParamHooks,
  ISwitchRenderlessParamUtils
} from '../../types'


export const renderless = (
  props: ISwitchProps,
  { computed, watch, reactive, inject }: ISharedRenderlessParamHooks,
  { emit }: ISwitchRenderlessParamUtils
): ISwitchApi => {
  const prefixCls = $constants.prefixcls('pc')

  const state: ISwitchState = reactive({
    currentValue: props.modelValue,
    // form 通过 provide('form') 暴露 vm，替代挂在链式 parent 上的 tinyForm 缓存；后续统一从 state.tinyForm 取用
    tinyForm: inject('form', null),
    innerClasses: computed(() => api.computedInnerClasses()),
    wrapClasses: computed(() => api.computedWarpClasses()),
    style: computed(() => api.computedStyle()),
    formDisabled: computed(() => (state.tinyForm || {}).disabled),
    disabled: computed(() => props.disabled || state.formDisabled || state.isDisplayOnly || props.loading),
    isDisplayOnly: computed(() => props.displayOnly || (state.tinyForm || {}).displayOnly),
    showText: computed(() => {
      // 用户没传showText属性时，aurora默认是展示文本
      if (props.showText === undefined) {
        return false
      } else {
        return props.showText
      }
    }),
    // 添加 switchStyle 计算属性
    switchStyle: computed(() => {
      if (props.width) {
        return {
          width: typeof props.width === 'number' ? `${props.width}px` : props.width
        }
      }
      return {}
    }),
    // 添加 displayOnlyStyle 计算属性
    displayOnlyStyle: computed(() => {
      if (props.width) {
        return {
          width: typeof props.width === 'number' ? `${props.width}px` : props.width,
          display: 'inline-block'
        }
      }
      return {}
    })
  })

  const api: ISwitchApi = {
    state,
    computedInnerClasses: computedInnerClasses({ prefixCls }),
    computedStyle: computedStyle({ props, state }),
    computedWarpClasses: computedWarpClasses({ prefixCls, props, state }),
    toggle: toggle({ emit, props, state })
  }

  watch(
    () => props.modelValue,
    (value) => {
      state.currentValue =
        typeof props.falseValue !== 'boolean' || typeof props.trueValue !== 'boolean' ? value : Boolean(value)
    },
    { immediate: true }
  )

  return api
}
