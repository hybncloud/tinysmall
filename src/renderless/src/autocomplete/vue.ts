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


const initState = ({
  reactive,
  computed,
  props,
  inject
}: Pick<IAutoCompleteRenderlessParams, 'reactive' | 'computed' | 'props' | 'inject'>) => {
  const state = reactive<IAutoCompleteState>({
    showAutoWidth: inject('showAutoWidth', null),
    // form-item 通过 provide('formItem') 暴露的 vm：通知走 state.formItem.$emitter.emit 纯总线
    formItem: inject('formItem', null),
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
  showPopper,
  popperElm,
  referenceElm
}: {
  reactive: IAutoCompleteRenderlessParams['reactive']
  showPopper: Ref<boolean>
  popperElm: Ref<HTMLElement>
  referenceElm: Ref<HTMLElement>
}) => {
  return reactive({
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
  nextTick
}) => {
  api.getData = getData({ props, state, updatePopper, nextTick })

  Object.assign(api, {
    state,
    doDestroy,
    suggestionState,
    close: close(state),
    open: open(api),
    handleBlur: handleBlur({ emit, state, props }),
    mounted: mounted({ vm, state, suggestionState, props }),
    highlight: highlight({ vm, state }),
    handleClear: handleClear({ emit, state }),
    select: select({ emit, nextTick, props, state }),
    watchVisible: watchVisible({ suggestionState, vm }),
    handleChange: handleChange({ api, emit, state, props }),
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
  { vm, emit, nextTick, slots }: IAutoCompleteRenderlessParamUtils
) => {
  const api: Partial<IAutoCompleteApi> = {}
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

  const suggestionState = initSuggestionState({ reactive, showPopper, popperElm, referenceElm })

  initApi({
    api,
    state,
    doDestroy,
    suggestionState,
    emit,
    vm,
    props,
    updatePopper,
    nextTick
  })

  watch(() => state.suggestionVisible, (api as IAutoCompleteApi).watchVisible)

  onMounted((api as IAutoCompleteApi).mounted)

  return api
}
