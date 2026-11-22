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
  IInputApi,
  IInputProps,
  IInputState,
  ISharedRenderlessParamHooks,
  IInputRenderlessParamUtils,
  IInputEventNameConstants,
  IInputRenderlessParams
} from '../../types'
import {
  blur,
  showBox,
  watchFormSelect,
  clear,
  focus,
  select,
  getInput,
  textLength,
  handleBlur,
  handleFocus,
  handleInput,
  handleChange,
  calcIconOffset,
  resizeTextarea,
  getSuffixVisible,
  updateIconOffset,
  calcTextareaHeight,
  setNativeInputValue,
  calculateNodeStyling,
  handleCompositionEnd,
  handlePasswordVisible,
  handleCompositionStart,
  handleCompositionUpdate,
  hasSelection,
  handleEnterDisplayOnlyContent,
  hiddenPassword,
  setInputDomValue,
  getDisplayedMaskValue,
  inputStyle,
  handleEnterTextarea,
  handleLeaveTextarea,
  getDisplayOnlyText,
  setShowMoreBtn,
  handleTextareaMouseDown,
  handleTextareaMouseUp
} from './index'
import useStorageBox from '../tall-storage/vue-storage-box'
import { on, off } from '@tinysmall/utils'
import { debounceBoth } from '@tinysmall/utils'


const initState = ({
  reactive,
  computed,
  props,
  attrs,
  inject,

  api,
  vm
}: Pick<IInputRenderlessParams, 'reactive' | 'computed' | 'props' | 'api' | 'vm'> & { inject: any }) => {
  const state = reactive({
    maskSymbol: $constants.MASKSYMBOL,
    focused: false,
    hovering: false,
    isComposing: false,
    passwordVisible: false,
    maskValueVisible: false,
    boxVisibility: false,
    textareaCalcStyle: {},
    checkedLabel: '',
    enteredTextarea: false,
    sheetvalue: props.modelValue,
    /** form/form-item 通过 provide 注入的 vm：读取表单上下文、走 $emitter 总线通知 */
    tinyForm: inject('form', null),
    formItem: inject('formItem', null),
    inputSize: computed(() => props.size || state.formItemSize || (state.tinyForm || {}).size),
    inputSizeMf: computed(() => props.size || state.formItemSize || (state.tinyForm || {}).size),
    showClear: computed(
      () =>
        props.clearable &&
        !state.inputDisabled &&
        !props.readonly &&
        state.nativeInputValue &&
        (state.focused || state.hovering)
    ),
    textareaHeight: '30px',
    upperLimit: computed(() => attrs.maxlength),
    textLength: computed(() => textLength(props.modelValue)),
    inputExceed: computed(() => state.isWordLimitVisible && state.textLength > state.upperLimit),
    formItemSize: computed(() => (state.formItem || {}).formItemSize),
    validateIcon: computed(() => $constants.VALIDATE_ICON[state.validateState]),
    showWordLimit: computed(() => props.showWordLimit && attrs.maxlength),
    inputDisabled: computed(
      () =>
        props.disabled || (state.tinyForm || {}).disabled || state.isDisplayOnly || (state.tinyForm || {}).displayOnly
    ),
    validateState: computed(() => (state.formItem ? state.formItem.validateState : '')),
    inputStyle: computed(() => api.inputStyle()),
    textareaStyle: computed(() => ({
      ...state.textareaCalcStyle,
      resize: props.resize,
      textAlign: props.textAlign
    })),
    needStatusIcon: computed(() => (state.tinyForm ? state.tinyForm.statusIcon : false)),
    showPwdVisible: computed(
      () => props.showPassword && !state.inputDisabled && !props.readonly && (!!state.nativeInputValue || state.focused)
    ),
    nativeInputValue: computed(() =>
      props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue)
    ),
    tooltipConfig: computed(() => (state.tinyForm ? state.tinyForm.tooltipConfig : {})),

    isWordLimitVisible: computed(
      () =>
        ((props.showWordLimit && attrs.maxlength) || props.counter) &&
        (props.type === 'text' || props.type === 'textarea') &&
        !state.inputDisabled &&
        !props.readonly &&
        !props.showPassword
    ),
    isDisplayOnly: computed(
      () =>
        (props.displayOnly || (state.tinyForm || {}).displayOnly) &&
        ['text', 'textarea', 'password', 'number'].includes(props.type)
    ),
    displayOnlyTooltip: '',
    showMoreBtn: false,
    showDisplayOnlyBox: false,
    timer: null,
    hiddenPassword: computed(() => api.hiddenPassword()),
    displayedMaskValue: computed(() => api.getDisplayedMaskValue()),
    displayOnlyText: computed(() => api.getDisplayOnlyText()),
    isDragging: false
  })

  return state as IInputState
}

const initApi = ({
  api,
  state,
  emit,
  vm,
  props,
  nextTick,
  slots
}: Pick<IInputRenderlessParams, 'api' | 'state' | 'emit' | 'refs' | 'props' | 'vm' | 'nextTick' | 'slots'>) => {
  Object.assign(api, {
    state,
    showBox: showBox(state),
    clear: clear(emit),
    getInput: getInput(vm),
    setShowMoreBtn: setShowMoreBtn({ state, vm }),
    handleChange: handleChange(emit),
    watchFormSelect: watchFormSelect({ emit, props, state }),
    calcIconOffset: calcIconOffset({ vm, slots }),
    getSuffixVisible: getSuffixVisible({ slots, props, state }),
    calculateNodeStyling: calculateNodeStyling(),
    handleCompositionStart: handleCompositionStart(state),
    handleCompositionUpdate: handleCompositionUpdate(state),
    setInputDomValue: setInputDomValue({ state, props, nextTick, vm }),
    getDisplayOnlyText: getDisplayOnlyText({ props, state }),
    handleEnterTextarea: handleEnterTextarea({ api, state, props, nextTick }),
    handleLeaveTextarea: handleLeaveTextarea({ api, state, props, nextTick, vm }),
    inputStyle: inputStyle({ props }),
    handleTextareaMouseDown: handleTextareaMouseDown({ state }),
    handleTextareaMouseUp: handleTextareaMouseUp({ state, api })
  })
}

const mergeApi = ({
  storages,
  api,
  props,
  emit,
  eventName,
  nextTick,
  state,
  vm
}: Pick<IInputRenderlessParams, 'api' | 'emit' | 'props' | 'state' | 'nextTick' | 'vm'> & {
  storages: ReturnType<typeof useStorageBox>
  eventName: IInputEventNameConstants
}) => {
  const { storageData, isMemoryStorage, addMemory, searchMemory, selectedMemory } = storages

  return Object.assign(api, {
    addMemory,
    storageData,
    searchMemory,
    selectedMemory,
    isMemoryStorage,
    blur: blur(api),
    focus: focus(api),
    select: select(api),
    handleBlur: handleBlur({
      api,
      emit,
      eventName: eventName.blur,
      props,
      state,
      vm
    }),
    handleFocus: handleFocus({ api, emit, state }),
    handleInput: handleInput({ api, emit, nextTick, state }),
    resizeTextarea: debounceBoth(200, resizeTextarea({ api, vm, state, props })), // 抖动的首尾都要执行一次
    updateIconOffset: updateIconOffset(api),
    calcTextareaHeight: calcTextareaHeight({
      api,
      hiddenTextarea: null,
      props,
      state
    }),
    setNativeInputValue: setNativeInputValue({ api, state }),
    handleCompositionEnd: handleCompositionEnd({ api, state }),
    handlePasswordVisible: handlePasswordVisible({ api, nextTick, state }),
    hasSelection: hasSelection(api),
    handleEnterDisplayOnlyContent: handleEnterDisplayOnlyContent({ state, props }),
    hiddenPassword: hiddenPassword({ state, props }),
    getDisplayedMaskValue: getDisplayedMaskValue({ state })
  })
}

const initWatch = ({
  watch,
  state,
  api,
  props,
  nextTick,
  emit,
  eventName
}: Pick<IInputRenderlessParams, 'watch' | 'state' | 'api' | 'props' | 'nextTick' | 'emit'> & {
  eventName: IInputEventNameConstants
}) => {
  watch(
    () => props.modelValue,
    (value) => {
      nextTick(api.resizeTextarea)

      if (props.validateEvent) {
        // 同 handleBlur，走 form-item 的 $emitter 纯总线通知
        state.formItem?.$emitter.emit(eventName.change, value)
      }

      if (props.type === 'textarea' && props.popupMore && state.isDisplayOnly) {
        api.setShowMoreBtn()
      }

      api.setInputDomValue()
    }
  )

  watch(() => state.maskValueVisible, api.setInputDomValue)

  watch(() => state.inputDisabled, api.setInputDomValue)

  watch(
    () => props.mask,
    () => {
      api.setInputDomValue('mask')
    }
  )

  watch(
    () => props.size,
    () => nextTick(api.resizeTextarea)
  )

  watch(
    () => state.nativeInputValue,
    () => {
      api.setNativeInputValue()
    }
  )

  watch(
    () => props.type,
    () => {
      nextTick(() => {
        api.setNativeInputValue()
        api.resizeTextarea()
        api.updateIconOffset()
      })
    }
  )

  watch(
    () => state.isDisplayOnly,
    () => {
      nextTick(() => {
        api.setNativeInputValue()
        api.resizeTextarea()
        api.updateIconOffset()
      })
    }
  )

  watch(
    () => state.sheetvalue,
    (value) => api.watchFormSelect(value),
    { immediate: true }
  )
}

export const renderless = (
  props: IInputProps,
  { computed, onMounted, onBeforeUnmount, onUpdated, reactive, toRefs, watch, inject }: ISharedRenderlessParamHooks,
  { vm, refs, attrs, slots, emit, nextTick }: IInputRenderlessParamUtils
): IInputApi => {
  const api = {} as IInputApi
  const eventName: IInputEventNameConstants = { change: 'form.change', blur: 'form.blur' }
  // 替代 dispatch('Tooltip', 'tooltip-update')：tooltip 通过 provide('tooltipVm') 暴露 vm
  const tooltipVm: any = inject('tooltipVm', null)
  const state = initState({ reactive, computed, props, attrs, inject, api, vm })

  initApi({ api, state, emit, refs, props, slots, vm, nextTick })

  const storages = useStorageBox({ api, props, reactive, toRefs })

  mergeApi({ api, storages, emit, eventName, props, state, nextTick, vm })

  initWatch({ watch, state, api, props, nextTick, emit, eventName })

  onMounted(() => {
    api.setNativeInputValue()
    api.resizeTextarea()
    api.updateIconOffset()
    api.setInputDomValue()

    // 注：原 dispatch('Select', 'input-mounted', ...) 为死代码已删除——全仓库无任何订阅者
    // tooltip 以 vm.$on('tooltip-update') 订阅，走 $emitter.emit 纯总线通知
    tooltipVm?.$emitter.emit('tooltip-update', vm.$el)

    if (props.type === 'textarea' && props.popupMore && state.isDisplayOnly) {
      api.setShowMoreBtn(true)
      on(window, 'resize', api.setShowMoreBtn)
    }

    if (vm.$attrs.autofocus) {
      api.focus()
    }
  })

  onBeforeUnmount(() => {
    if (props.type === 'textarea' && props.popupMore && state.isDisplayOnly) {
      off(window, 'resize', api.setShowMoreBtn)
    }
  })

  onUpdated(() => {
    nextTick(api.updateIconOffset)
  })

  return api
}
