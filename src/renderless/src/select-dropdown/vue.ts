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

import { $constants } from '../alert/constants'
import {
  mounted,
  closeModal,
  handleQueryChange,
  toggleSelectedBox,
  deleteSelected,
  selectedBoxConfirm,
  selectDropdownConfirm,
  cancelSearch,
  handleClear
} from './index'
import { userPopper } from '@tinysmall/hooks'
import { PopupManager } from '@tinysmall/utils'
import { debounce } from '@tinysmall/utils'
import { isServer } from '@tinysmall/utils'


const initState = ({ reactive, computed, popper, selectVm }) => {
  const { showPopper, currentPlacement, popperElm, referenceElm } = popper

  const state = reactive({
    showPopper,
    currentPlacement,
    popperElm,
    referenceElm,
    minWidth: '',
    query: '',
    showSelectedBox: false,
    debounce: 300,
    selectedArr: [],
    deletedArr: [],
    originValue: [],
    // 注入的 base-select vm 先放入 state，再统一通过 state 访问
    selectVm,
    showClose: computed(() => state.selectVm.clearable && !state.selectVm.multiple && state.selectVm.modelValue !== ''),
    filterable: computed(() => state.selectVm.filterable),
    multiple: computed(() => state.selectVm.multiple),
    popperClass: computed(() => state.selectVm.popperClass),
    selected: computed(() =>
      state.selectVm.renderType === 'tree' && !state.selectVm.treeOp.checkStrictly
        ? state.selectVm.state.selected.filter((item) => !item.children)
        : state.selectVm.state.selected
    ),
    visible: false,
    windowScrollTop: 0,
    zIndex: 2000,
    valueField: computed(() => (state.selectVm.renderType === 'tree' ? 'id' : 'value'))
  })

  return state
}

const initApi = ({ api, popper, state, selectEmitter, vm, nextTick, props }) => {
  const { destroyPopper, doDestroy, updatePopper } = popper

  Object.assign(api, {
    state,
    doDestroy,
    handleQueryChange: handleQueryChange({ state }),
    debouncedQueryChange: debounce(state.debounce, (value) => {
      api.handleQueryChange(value)
    }),
    toggleSelectedBox: toggleSelectedBox({ state }),
    deleteSelected: deleteSelected({ state }),
    selectedBoxConfirm: selectedBoxConfirm({ state }),
    selectDropdownConfirm: selectDropdownConfirm({ state }),
    closeModal: closeModal({ state, props }),
    cancelSearch: cancelSearch({ api, state }),
    handleClear: handleClear({ state }),
    mounted: mounted({ selectEmitter, state, updatePopper, destroyPopper, vm })
  })
}

const initWatch = ({ watch, state, nextTick, props }) => {
  watch(
    () => (!isServer ? state.selectVm.state.inputWidth : undefined),
    (val) => {
      nextTick(() => {
        state.minWidth =
          ((state.selectVm && state.selectVm.$el && state.selectVm.$el.getBoundingClientRect().width) || val) + 'px'

        // 由于select的父容器可能有动画，所以延迟再计算一次最小宽度
        if (props.isDropInheritWidth) {
          setTimeout(() => {
            state.minWidth =
              ((state.selectVm && state.selectVm.$el && state.selectVm.$el.getBoundingClientRect().width) || val) + 'px'
          }, 210)
        }
      })
    },
    { immediate: true }
  )

  watch(
    () => state.query,
    (val) => {
      state.selectVm.state.queryValue = val
    }
  )

  watch(
    () => state.selectVm.state.visible,
    (val) => {
      state.query = ''

      setTimeout(() => {
        state.visible = val
        state.zIndex = PopupManager.nextZIndex()
      }, 0)

      if (val && state.selectVm.multiple) {
        state.originValue = state.selectVm.modelValue && state.selectVm.modelValue.slice(0)
      }
    }
  )
}

export const renderless = (
  props,
  { computed, onBeforeUnmount, onDeactivated, onMounted, reactive, toRefs, watch, inject },
  { vm, slots, emit, nextTick }
) => {
  const api = {}
  const select = inject('select')
  const constants = $constants
  const selectEmitter = inject('selectEmitter')
  const selectVm = inject('selectVm')

  const popper = userPopper({
    emit,
    nextTick,
    onBeforeUnmount,
    onDeactivated,
    props,
    reactive,
    vm,
    slots,
    toRefs,
    watch
  })

  const state = initState({ reactive, computed, popper, selectVm })
  // 注入的 base-select 上下文 vm 放入 state 后再使用
  state.select = select

  initApi({ api, popper, state, selectEmitter, vm, nextTick, props })
  initWatch({ watch, state, nextTick, props })

  onBeforeUnmount(() => {
    popper.destroyPopper('remove')

    state.popperElm = null
    state.referenceElm = null
  })

  onMounted(api.mounted)

  return api
}
