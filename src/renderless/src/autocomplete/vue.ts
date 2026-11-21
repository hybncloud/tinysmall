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

import { debounce } from '@tinysmall/utils'
import { userPopper } from '@tinysmall/hooks'
import type { Ref } from 'vue'
import { guid } from '@tinysmall/utils'
import {
  computedVisible,
  watchVisible,
  mounted,
  getData,
  handleChange,
  handleFocus,
  handleBlur,
  handleClear,
  close,
  open,
  handleKeyEnter,
  select,
  highlight
} from './index'
import type {
  IAutoCompleteProps,
  IAutoCompleteState,
  IAutoCompleteApi,
  IAutoCompleteRenderlessParams,
  IAutoCompleteRenderlessParamUtils
} from '../../types'

export const api = [
  'state',
  'suggestionState',
  'getInput',
  'handleChange',
  'close',
  'open',
  'handleFocus',
  'handleBlur',
  'handleClear',
  'handleKeyEnter',
  'highlight',
  'select',
  'doDestroy'
]

const initState = ({
  reactive,
  computed,
  props,
  inject
}: Pick<IAutoCompleteRenderlessParams, 'reactive' | 'computed' | 'props' | 'inject'>) => {
  const state = reactive<IAutoCompleteState>({
    showAutoWidth: inject('showAutoWidth', null),
    popperElm: null,
    activated: false,
    suggestions: [],
    loading: false,
    highlightedIndex: -1,
    suggestionDisabled: false,
    id: 'Tiny-' + guid(),
    suggestionVisible: computed(() => computedVisible(state)),
    // props.validateEvent优先级大于inject，都没有配置默认为true
    validateEvent: props.validateEvent ?? inject('validateEvent', true)
  })

  return state as IAutoCompleteState
}

export const initSuggestionState = ({
  reactive,
  parent,
  showPopper,
  popperElm,
  referenceElm
}: {
  reactive: IAutoCompleteRenderlessParams['reactive']
  parent: IAutoCompleteRenderlessParamUtils['parent']
  showPopper: Ref<boolean>
  popperElm: Ref<HTMLElement>
  referenceElm: Ref<HTMLElement>
}) => {
  return reactive({
    parent,
    dropdownWidth: '',
    showPopper,
    popperElm,
    referenceElm
  })
}

const initApi = ({
  api,
  state,
  doDestroy,
  suggestionState,
  emit,
  vm,
  props,
  updatePopper,
  nextTick,

  dispatch
}) => {
  api.getData = getData({ props, state, updatePopper, nextTick })

  Object.assign(api, {
    state,
    doDestroy,
    suggestionState,
    close: close(state),
    open: open(api),
    handleBlur: handleBlur({ emit, state, dispatch, props }),
    mounted: mounted({ vm, state, suggestionState, props }),
    highlight: highlight({ vm, state }),
    handleClear: handleClear({ emit, state }),
    select: select({ emit, nextTick, props, state, dispatch }),
    watchVisible: watchVisible({ suggestionState, vm }),
    handleChange: handleChange({ api, emit, state, props, dispatch }),
    handleFocus: handleFocus({ api, emit, props, state }),
    handleKeyEnter: handleKeyEnter({ api, emit, nextTick, props, state }),
    debouncedGetData: debounce(props.debounce, api.getData)
  })
}

export const renderless = (
  props: IAutoCompleteProps,
  {
    computed,
    onBeforeUnmount,
    onMounted,
    reactive,
    watch,
    toRefs,
    onDeactivated,
    inject
  }: IAutoCompleteRenderlessParams,
  { vm, parent, emit, nextTick, slots }: IAutoCompleteRenderlessParamUtils
) => {
  const api: Partial<IAutoCompleteApi> = {}
  // 替代适配器的 dispatch('FormItem', ...)：form-item 通过 provide('formItem') 暴露 vm，
  // 直接对它 $emit（instance.emit + $emitter.emit 双通道，与旧 dispatch 行为一致）；
  // 兼容旧调用约定：params 为数组时展开为单个实参
  const formItem: any = inject('formItem', null)
  // 替代适配器的 dispatch('FormItem', ...)：走 form-item 的 $emitter 纯总线通知（同 cascader）；
  // 旧签名首个参数 componentName 恒为 'FormItem'，已移除
  const dispatch = (eventName: string, params?: any) =>
    formItem?.$emitter.emit(eventName, ...(Array.isArray(params) ? params : [params]))
  const state = initState({ reactive, computed, props, inject })

  const { showPopper, popperElm, referenceElm, doDestroy, updatePopper } = userPopper({
    reactive,
    watch,
    vm,
    emit,
    slots,
    nextTick,
    props,
    onBeforeUnmount,
    toRefs,
    onDeactivated
  } as any)

  const suggestionState = initSuggestionState({ reactive, parent, showPopper, popperElm, referenceElm })

  initApi({
    api,
    state,
    doDestroy,
    suggestionState,
    emit,
    vm,
    props,
    updatePopper,
    nextTick,

    dispatch
  })

  watch(() => state.suggestionVisible, (api as IAutoCompleteApi).watchVisible)

  onMounted((api as IAutoCompleteApi).mounted)

  return api
}
