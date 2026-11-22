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
  INumericApi,
  INumericProps,
  INumericState,
  ISharedRenderlessParamHooks,
  INumericRenderlessParamUtils,
  INumericRenderlessParams,
  INumericInitStateParams
} from '../../types'
import {
  watchValue,
  toPrecision,
  getPrecision,
  internalIncrease,
  internalDecrease,
  focus,
  decrease,
  handleBlur,
  handleFocus,
  setCurrentValue,
  handleInput,
  handleInputChange,
  select,
  mounted,
  updated,
  increase,
  displayValue,
  getNumPecision,
  mouseEvent,
  getUnitPrecision,
  getDecimal,
  unmounted,
  initService,
  getDisplayOnlyText,
  filterValue,
  handleClear,
  handleChange
} from './index'

export const api = [
  'state',
  'decrease',
  'increase',
  'handleBlur',
  'handleFocus',
  'handleInput',
  'handleInputChange',
  'mouseEvent',
  'focus',
  'select',
  'handleClear',
  'handleChange'
]

const initState = ({
  reactive,
  computed,
  props,
  api,
  $service,
  
  form
}: INumericInitStateParams & { form: any }): INumericState => {
  const state = reactive({
    currentValue: props.modelValue,
    userInput: props.modelValue,
    lastInput: props.modelValue,
    inputStatus: false,
    decimal: null,
    strictInput: computed(() => props.strictInput),
    inputSize: computed(() => props.size || state.formSize),
    formSize: computed(() => (form || {}).size),
    formDisabled: computed(() => (form || {}).disabled),
    inputDisabled: computed(() => props.disabled || state.formDisabled),
    displayValue: computed(() => api.displayValue()),
    numPrecision: computed(() => api.getNumPecision()),

    minDisabled: computed(() => (!props.circulate && state.currentValue <= props.min) || state.formDisabled),

    maxDisabled: computed(() => (!props.circulate && state.currentValue >= props.max) || state.formDisabled),

    controlsAtRight: computed(() => props.controls && props.controlsPosition === 'right'),

    format: computed(() => getUnitPrecision({ service: $service, props })),

    filterMenu: $constants.FILTER_OPTION,
    filterValue: computed(() => api.filterValue()),

    handleClear: computed(() => api.handleClear()),
    handleChange: computed(() => api.handleClear()),
    isDisplayOnly: computed(() => props.displayOnly || (form || {}).displayOnly),
    displayOnlyText: computed(() => api.getDisplayOnlyText()),
    controls: props.controls
  })
  return state
}

const initApi = ({
  api,
  props,
  state,
  vm,
  emit,
  dispatch,

  nextTick,
  form
}: Pick<
  INumericRenderlessParams,
  'api' | 'props' | 'state' | 'vm' | 'emit' | 'dispatch' | 'constants' | 'nextTick'
> & { form: any }): void => {
  Object.assign(api, {
    state,
    focus: focus(vm),
    select: select(vm),
    getPrecision: getPrecision(),
    toPrecision: toPrecision(state),
    updated: updated({ vm, state }),
    mounted: mounted({ vm, props, state }),
    unmounted: unmounted({ vm, state }),
    getDecimal: getDecimal(props),
    handleFocus: handleFocus({ emit, state, props, api, vm }),
    decrease: decrease({ api, props, state }),
    increase: increase({ api, props, state }),
    handleInput: handleInput({ state, api, emit, props }),
    getNumPecision: getNumPecision({ api, props }),
    displayValue: displayValue({ props, state, api }),
    internalDecrease: internalDecrease({ api, state }),
    internalIncrease: internalIncrease({ api, state }),
    handleInputChange: handleInputChange({ api, state, props }),
    mouseEvent: mouseEvent({ api, props, state }),
    handleBlur: handleBlur({ dispatch, emit, props, state, api }),
    watchValue: watchValue({ api, props, state }),
    setCurrentValue: setCurrentValue({ api, dispatch, emit, props, state }),
    getDisplayOnlyText: getDisplayOnlyText({ tinyForm: form, props, state }),
    filterValue: filterValue({ state }),
    handleClear: handleClear({ state, emit }),
    handleChange: handleChange({ state, emit })
  })

  api.getDecimal(0)
}

const initWatch = ({
  watch,
  props,
  api
}: Pick<INumericRenderlessParams, 'state' | 'watch' | 'props' | 'api'>): void => {
  watch(
    () => [props.max, props.min],
    ([curMax, curMin]) => {
      if (curMax < curMin) {
        throw new Error('[Numeric]: The maximum value should not be less than to the minimum value')
      }
    },
    { immediate: true }
  )

  watch(() => props.modelValue, api.watchValue, { immediate: true })
}

export const renderless = (
  props: INumericProps,
  { computed, onMounted, onUpdated, onUnmounted, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { emit, vm, service, nextTick }: INumericRenderlessParamUtils
): INumericApi => {
  const api = {} as INumericApi
  // 替代适配器的 dispatch('FormItem', ...)：走 form-item 的 $emitter 纯总线通知（同 cascader）；
  // 旧签名首个参数 componentName 恒为 'FormItem'（总线模式下目标已由 inject 确定），已移除；
  // 兼容旧调用约定：params 为数组时展开为单个实参
  const formItem: any = inject('formItem', null)
  const dispatch = (eventName: string, params?: any) =>
    formItem?.$emitter.emit(eventName, ...(Array.isArray(params) ? params : [params]))
  const $service = initService(service)
  const form = inject('form', null)
  const state = initState({ reactive, computed, props, api, $service, form })

  initApi({ api, props, state, vm, emit, dispatch, nextTick, form })
  initWatch({ watch, props, api })

  onMounted(api.mounted)
  onUpdated(api.updated)
  onUnmounted(api.unmounted)

  return api
}
