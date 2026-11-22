import { $constants } from '../base-select/constants'
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

export const mounted =
  ({ selectEmitter, state, updatePopper, destroyPopper, vm }) =>
  () => {
    selectEmitter.on($constants.EVENT_NAME.updatePopper, (keepZIndex) => {
      let hideDrop = false

      if (!state.referenceElm || state.referenceElm.nodeType !== 1) {
        // 触发源如果是用户传递的插槽，则赋值为外侧div
        state.referenceElm = state.selectVm.$refs.reference ? state.selectVm.$refs.reference.$el : state.selectVm.$refs.select // Tiny新逻辑，同步时需谨慎对比逻辑
        state.selectVm.popperElm = state.selectVm.state.popperElm = state.popperElm = vm.$el
      }

      if (state.select.state.visible && !hideDrop) {
        updatePopper(keepZIndex)
        hideDrop = true
      }
    })

    selectEmitter.on($constants.EVENT_NAME.destroyPopper, destroyPopper)
  }

export const closeModal =
  ({ state, props }) =>
  ($event, isMask) => {
    if (!props.closeByMask && isMask) return

    state.selectVm.multiple && state.selectVm.updateModelValue(state.originValue)
    state.selectVm.state.visible = false
    state.selectVm.state.softFocus = false
  }

export const handleQueryChange =
  ({ state }) =>
  (value) => {
    state.selectVm.handleQueryChange(value)
  }

export const toggleSelectedBox =
  ({ state }) =>
  (show) => {
    if (show) {
      state.selectedArr = state.selected.slice(0)
      state.deletedArr = []
    }
    state.showSelectedBox = show
  }

export const deleteSelected =
  ({ state }) =>
  (option, clear) => {
    if (clear) {
      state.deletedArr = state.selectedArr.slice(0)
      state.selectedArr = []
    } else {
      state.selectedArr = state.selectedArr.filter((item) => item[state.valueField] !== option[state.valueField])
      state.deletedArr.push(option)
    }
  }

export const selectedBoxConfirm =
  ({ state }) =>
  () => {
    if (state.deletedArr.length) {
      if (state.deletedArr.length === state.selected.length) {
        state.selectVm.updateModelValue([])
      } else {
        state.selectVm.updateModelValue(state.selectedArr.map((item) => item[state.valueField]))
      }
    }
    state.showSelectedBox = false
  }

export const selectDropdownConfirm =
  ({ state }) =>
  () => {
    state.selectVm.multiple && state.selectVm.updateModelValue(state.selectVm.state.modelValue, true)

    state.selectVm.state.visible = false
    state.selectVm.state.softFocus = false

    state.selectVm.$emit('confirm', state.selectVm.state.modelValue)
    state.selectVm.emitChange(state.selectVm.state.modelValue, true)
  }

export const cancelSearch =
  ({ api, state }) =>
  () => {
    state.query = ''
    api.debouncedQueryChange('')
  }

export const handleClear =
  ({ state }) =>
  () => {
    state.selectVm.deleteSelected()
  }
