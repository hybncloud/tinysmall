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
import {
  processIndex,
  calculateTranslate,
  translateItem,
  handleItemClick,
  computedTransform,
  resetAnimatingMf,
  setDelta
} from './index'

export const api = [
  'state',
  'hover',
  'translate',
  'scale',
  'active',
  'ready',
  'inStage',
  'animating',
  'isOblique',
  'hasTitle',
  'getTransform',
  'processIndex',
  'calculateTranslate',
  'translateItem',
  'handleItemClick',
  'resetAnimatingMf',
  'setDelta'
]

export const renderless = (props, { computed, onMounted, onUnmounted, reactive, inject }, { vm }) => {
  const api = {}
  const CARD_SCALE = $constants.CARD_SCALE
  const TYPE_VERTICAL = $constants.TYPE_VERTICAL

  const state = reactive({
    scale: 1,
    translate: 0,
    hover: false,
    ready: false,
    active: false,
    inStage: false,
    animating: false,
    animatingMf: false,
    isOblique: false,
    // carousel 通过 provide('CarouselVm') 暴露 vm，替代组件链 parent 访问；后续统一从 state.carouselParent 取用
    carouselParent: inject('CarouselVm'),
    hasTitle: computed(() => !!props.title),
    moving: computed(() => state.carouselParent.state.moving),
    animate: computed(() => (Math.abs(state.carouselParent.state.delta) > 0 ? !state.animatingMf : state.animating)),
    getTransform: computed(() => api.computedTransform()),
    delta: 0
  })

  Object.assign(api, {
    state,
    processIndex,
    handleItemClick: handleItemClick({ state }),
    computedTransform: computedTransform({ TYPE_VERTICAL, state }),
    calculateTranslate: calculateTranslate({ CARD_SCALE, state }),
    translateItem: translateItem({ api, CARD_SCALE, state }),
    setDelta: setDelta({ state }),
    resetAnimatingMf: resetAnimatingMf(state)
  })

  onMounted(() => {
    // 替代 dispatch('Carousel', ...)：carousel 通过 provide('CarouselVm') 暴露 vm，
    // 走 $emitter.emit 纯总线广播（carousel 以 vm.$on('updateItems'/'complete') 订阅）
    state.carouselParent?.$emitter.emit('updateItems', vm)
    state.carouselParent?.$emitter.emit('complete')
  })

  onUnmounted(() => {
    state.carouselParent && state.carouselParent.updateItems()
  })

  return api
}
