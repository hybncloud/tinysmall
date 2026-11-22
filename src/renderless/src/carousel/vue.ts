import {
  onComplete,
  handleMouseEnter,
  handleMouseLeave,
  itemInStage,
  handleButtonEnter,
  handleButtonLeave,
  resetItemPosition,
  playSlides,
  pauseTimer,
  startTimer,
  setActiveItem,
  prev,
  next,
  handleIndicatorClick,
  handleIndicatorHover,
  watchItems,
  watchActiveIndex,
  watchAutoplay,
  throttledArrowClick,
  throttledIndicatorHover,
  computedHasLabel,
  computedStyle,
  computedHasButtons,
  computedHasIndicators,
  canActive
} from './index'
import { addResizeListener, removeResizeListener } from '@tinysmall/utils'

export const api = [
  'state',
  'items',
  'activeIndex',
  'containerWidth',
  'hover',
  'hasLabel',
  'onComplete',
  'handleMouseEnter',
  'handleMouseLeave',
  'itemInStage',
  'handleButtonEnter',
  'handleButtonLeave',
  'updateItems',
  'resetItemPosition',
  'playSlides',
  'pauseTimer',
  'startTimer',
  'setActiveItem',
  'prev',
  'next',
  'handleIndicatorClick',
  'handleIndicatorHover',
  'throttledArrowClick',
  'throttledIndicatorHover',
]

const initState = ({ reactive, computed, api }) => {
  const state = reactive({
    items: [],
    timer: null,
    hover: false,
    activeIndex: -1,
    completed: false,
    containerWidth: 0,
    style: computed(() => api.computedStyle()),
    hasLabel: computed(() => api.computedHasLabel(state.items)),
    hasButtons: computed(() => api.computedHasButtons()),
    hasIndicators: computed(() => api.computedHasIndicators())
  })

  return state
}

const initApi = ({ vm, api, state, props, emit }) => {
  Object.assign(api, {
    state,
    computedHasLabel,
    playSlides: playSlides({ api, props, state }),
    onComplete: onComplete({ api, count: 0, emit, props, state }),
    pauseTimer: pauseTimer(state),
    itemInStage: itemInStage(state),
    resetItemPosition: resetItemPosition(state),
    watchItems: watchItems({ api, props }),
    handleButtonLeave: handleButtonLeave(state),
    handleIndicatorClick: handleIndicatorClick({ api, state }),
    handleIndicatorHover: handleIndicatorHover({ api, props, state }),
    watchActiveIndex: watchActiveIndex({ api, emit }),
    watchAutoplay: watchAutoplay(api),
    startTimer: startTimer({ api, props, state }),
    prev: prev({ api, state }),
    next: next({ api, state }),
    throttledArrowClick: throttledArrowClick(api),
    setActiveItem: setActiveItem({ api, props, state }),
    handleMouseEnter: handleMouseEnter({ api, state }),
    handleMouseLeave: handleMouseLeave({ api, state }),
    throttledIndicatorHover: throttledIndicatorHover(api),
    handleButtonEnter: handleButtonEnter({ api, state }),
    computedStyle: computedStyle({ props }),
    computedHasButtons: computedHasButtons({ props, state }),
    computedHasIndicators: computedHasIndicators({ props, state }),
    canActive: canActive(props)
  })
}

const initWatch = ({ watch, props, api, state }) => {
  watch(() => props.autoplay, api.watchAutoplay)

  watch(
    () => props.loop,
    () => api.setActiveItem(state.activeIndex)
  )
}

export const renderless = (
  props,
  { computed, onMounted, onBeforeUnmount, reactive, watch, provide },
  { vm, emit }
) => {
  const api = {}
  const state = initState({ reactive, computed, api })

  initApi({ vm, api, state, props, emit })

  const { updateItems } = useItems({ api, vm, onMounted, state, watch })

  api.updateItems = updateItems

  useActiveIndex({ api, props, state, watch })
  useResizeListener({ api, onBeforeUnmount, onMounted, vm })

  provide('CarouselVm', vm)
  initWatch({ watch, props, api, state })

  onMounted(() => {
    api.startTimer()
    api.onComplete(state.items.length)
  })

  // 监听子组件 CarouselItem 提交的 complete 事件
  vm.$on('updateItems', api.updateItems)

  vm.$on('complete', () => {
    api.onComplete(state.items.length)
  })

  return api
}

export const useItems = ({ api, onMounted, state, watch }) => {
  const updateItems = (carouselItemVm) => {
    if (carouselItemVm && !state.items.includes(carouselItemVm)) {
      state.items.push(carouselItemVm)
    }
  }

  watch(
    () => state.items,
    (value) => state.completed && api.watchItems(value)
  )

  onMounted(updateItems)

  return {
    updateItems
  }
}

export const useActiveIndex = ({ api, state, watch }) => {
  watch(
    () => state.activeIndex,
    (value, oldValue) => api.watchActiveIndex({ value, oldValue }),
    { immediate: true }
  )
}

export const useResizeListener = ({ api, onBeforeUnmount, onMounted, vm }) => {
  onMounted(() => {
    addResizeListener(vm.$el, api.resetItemPosition)
  })

  onBeforeUnmount(() => {
    if (vm.$el) {
      removeResizeListener(vm.$el, api.resetItemPosition)
    }
  })
}
