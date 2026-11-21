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
  ICheckboxApi,
  ICheckboxProps,
  ICheckboxState,
  ISharedRenderlessParamHooks,
  ICheckboxRenderlessParams,
  ICheckboxRenderlessParamUtils
} from '../../types'
import {
  addToStore,
  removeFromStore,
  handleChange,
  computedGetModelGet,
  computedGetModelSet,
  computedIsChecked,
  computedIsGroup,
  computedStore,
  computedIsLimitDisabled,
  computedIsDisabled,
  computedIsDisplayOnly,
  computedIsGroupDisplayOnly,
  computedFormItemSize,
  computedCheckboxSize,
  computedDisplayLabel,
  mounted,
  toggleEvent,
  computedIsShowText,
  computedShowText
} from './index'

export const api = ['state', 'handleChange', 'computedStore']

const initState = ({ reactive, computed, form, api, inject, props }) => {
  const state: ICheckboxState = reactive({
    size: computed(() => props.size || inject('size', null) || (form || {}).size),
    vertical: inject('vertical', null),
    iconPosition: props.iconPosition || inject('iconPosition', 'center'),
    focus: false,
    selfModel: false,
    showLabel: false,
    isLimitExceeded: false,
    checkboxGroup: inject('checkboxGroup', null),
    store: computed(() => api.computedStore()),
    isGroup: computed(() => api.computedIsGroup()),
    isChecked: computed(() => api.computedIsChecked()),
    isDisabled: computed(() => api.computedIsDisabled()),
    checkboxSize: computed(() => api.computedCheckboxSize()),
    isLimitDisabled: computed(() => api.computedIsLimitDisabled()),
    formDisabled: computed(() => (form || {}).disabled),
    formDisplayOnly: computed(() => (form || {}).displayOnly),
    isDisplayOnly: computed(() => api.computedIsDisplayOnly()),
    isGroupDisplayOnly: computed(() => api.computedIsGroupDisplayOnly()),
    displayLabel: computed(() => api.computedDisplayLabel()),
    inputDisabled: computed(() => state.isDisabled || state.isDisplayOnly || state.isGroupDisplayOnly),
    model: computed({
      get: () => api.computedGetModelGet(),
      set: (value) => api.computedGetModelSet(value)
    }),
    showText: computed(() => api.computedShowText()),
    isShowText: computed(() => api.computedIsShowText()),
    shape: inject('shape', null) || props.shape
  })

  return state
}

const initApi = ({
  api,
  state,
  dispatch,
  props,
  formItemSize,
  emit,
  nextTick,
  t,
  vm
}: Pick<
  ICheckboxRenderlessParams & ICheckboxRenderlessParamUtils & ISharedRenderlessParamHooks,
  'api' | 'state' | 'dispatch' | 'props' | 'formItemSize' | 'emit' | 'nextTick' | 't' | 'vm'
>) => {
  Object.assign(api, {
    state,
    addToStore: addToStore({ state, props }),
    removeFromStore: removeFromStore({ state, props }),
    computedStore: computedStore({ state, props }),
    computedFormItemSize: computedFormItemSize(props),
    computedIsChecked: computedIsChecked({ state, props }),
    computedIsLimitDisabled: computedIsLimitDisabled(state),
    computedIsDisabled: computedIsDisabled({ state, props }),
    computedIsDisplayOnly: computedIsDisplayOnly({ state, props }),
    computedIsGroupDisplayOnly: computedIsGroupDisplayOnly({ state }),
    computedGetModelGet: computedGetModelGet({ state, props }),
    computedIsGroup: computedIsGroup({ state }),
    computedCheckboxSize: computedCheckboxSize({ state, props, formItemSize }),
    computedGetModelSet: computedGetModelSet({ state, dispatch, emit }),
    mounted: mounted({ emit, props, api, parent: vm }),
    handleChange: handleChange({ state, props, emit, nextTick, dispatch }),
    computedDisplayLabel: computedDisplayLabel({ state, props, t }),
    computedIsShowText: computedIsShowText({ props }),
    computedShowText: computedShowText({ props })
  } as Partial<ICheckboxApi>)
}

export const renderless = (
  props: ICheckboxProps,
  { computed, onMounted, onBeforeUnmount, reactive, watch, inject }: ISharedRenderlessParamHooks,
  { vm, emit, nextTick, dispatch, t }: ICheckboxRenderlessParamUtils
): ICheckboxApi => {
  const api = { dispatch } as ICheckboxApi
  const formItemSize = computed(() => api.computedFormItemSize())
  const form = inject('form', null)
  const state: ICheckboxState = initState({ reactive, computed, form, api, inject, props })

  initApi({ api, state, dispatch, props, formItemSize, emit, nextTick, t, vm })

  watch(
    () => props.modelValue,
    (value) => props.validateEvent && api.dispatch($constants.FORM_ITEM, $constants.FORM_CHANGE, value)
  )

  watch(
    () => props.checked,
    (value) => {
      value ? api.addToStore() : api.removeFromStore()
    }
  )

  onBeforeUnmount(() => {
    toggleEvent({ parent: vm, props, type: 'remove' })
  })

  onMounted(() => {
    dispatch('Tooltip', 'tooltip-update')
    toggleEvent({ parent: vm, props, type: 'add' })
    api.mounted()
  })

  return api
}
