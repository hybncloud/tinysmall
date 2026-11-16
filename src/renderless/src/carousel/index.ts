import { throttle } from '@tinysmall/utils'
import { POSITION } from '@tinysmall/utils'

// 鼠标进入幻灯片事件
export const handleMouseEnter =
  ({ api, state }) =>
  () => {
    state.hover = true
    api.pauseTimer()
  }

export const handleMouseLeave =
  ({ api, state }) =>
  () => {
    state.hover = false
    api.startTimer()
  }

export const itemInStage =
  (state) =>
  ({ item, index }) => {
    const length = state.items.length
    const arr = state.items

    if (
      (index === length - 1 && item.inStage && arr[0].active) ||
      (item.inStage && arr[index + 1] && arr[index + 1].active)
    ) {
      return POSITION.Left
    } else if (
      (index === 0 && item.inStage && arr[length - 1].active) ||
      (item.inStage && arr[index - 1] && arr[index - 1].active)
    ) {
      return POSITION.Right
    }

    return false
  }

export const handleButtonEnter =
  ({ api, state }) =>
  (arrow) => {
    state.items.forEach((item, index) => {
      if (arrow === api.itemInStage({ item, index })) {
        item.hover = true
      }
    })
  }

export const handleButtonLeave = (state) => () => {
  state.items.forEach((item) => {
    item.hover = false
  })
}

export const resetItemPosition = (state) => (oldIndex) => {
  if (state.completed) {
    state.items.forEach((item, index) => {
      item.translateItem({ activeIndex: state.activeIndex, index, oldIndex })
    })
  }
}

// 播放幻灯片
export const playSlides =
  ({ api, props, state }) =>
  () => {
    let newIndex
    let oldIndex = state.activeIndex

    if (state.activeIndex < state.items.length - 1) {
      newIndex = state.activeIndex + 1
    } else if (props.loop) {
      newIndex = 0
    }

    api.canActive(newIndex, oldIndex).then((result) => {
      if (result) {
        state.activeIndex = newIndex
      }
    })
  }

// 暂停计时器
export const pauseTimer = (state) => () => clearInterval(state.timer)

// 启动计时器
export const startTimer =
  ({ api, props, state }) =>
  () => {
    if (props.interval <= 0 || !props.autoplay) {
      return
    }

    state.timer = setInterval(api.playSlides, props.interval)
  }

export const setActiveItem =
  ({ api, props, state }) =>
  (index) => {
    if (typeof index === 'string') {
      const filteredItems = state.items.filter((item) => item.name === index)

      if (filteredItems.length > 0) {
        index = state.items.indexOf(filteredItems[0])
      }
    }

    index = Number(index)

    if (isNaN(index) || index !== Math.floor(index)) {
      return
    }

    const length = state.items.length
    const oldIndex = state.activeIndex
    let newIndex

    if (index < 0) {
      newIndex = props.loop ? length - 1 : 0
    } else if (index >= length) {
      newIndex = props.loop ? 0 : length - 1
    } else {
      newIndex = index
    }

    const nextProcess = () => {
      state.activeIndex = newIndex

      if (oldIndex === state.activeIndex) {
        api.resetItemPosition(oldIndex)
      }
    }

    if (newIndex === oldIndex) {
      nextProcess()
    } else {
      api.canActive(newIndex, oldIndex).then((result) => {
        if (result) {
          nextProcess()
        }
      })
    }
  }
export const canActive = (props) => (newIndex, oldIndex) => {
  return new Promise((resolve) => {
    if (typeof props.beforeSwipe === 'function') {
      resolve(props.beforeSwipe(newIndex, oldIndex))
    } else {
      resolve(true)
    }
  }).then((result) => result !== false)
}

export const prev =
  ({ api, state }) =>
  () =>
    api.setActiveItem(state.activeIndex - 1)

export const next =
  ({ api, state }) =>
  () =>
    api.setActiveItem(state.activeIndex + 1)

export const handleIndicatorClick =
  ({ api, state }) =>
  (index) => {
    api.canActive(index, state.activeIndex).then((result) => {
      if (result) {
        state.activeIndex = index
      }
    })
  }

export const handleIndicatorHover =
  ({ api, props, state }) =>
  (index) => {
    if (props.trigger === 'hover' && index !== state.activeIndex) {
      api.canActive(index, state.activeIndex).then((result) => {
        if (result) {
          state.activeIndex = index
        }
      })
    }
  }

export const watchItems =
  ({ props, api }) =>
  (value) => {
    if (value.length) {
      api.setActiveItem(props.initialIndex)
    }
  }

export const watchActiveIndex =
  ({ emit, api }) =>
  ({ value, oldValue }) => {
    api.resetItemPosition(oldValue)
    emit('change', value, oldValue)
  }

export const watchAutoplay = (api) => (value) => (value ? api.startTimer() : api.pauseTimer())

export const throttledArrowClick = (api) => throttle(300, true, (index) => api.setActiveItem(index))

export const throttledIndicatorHover = (api) => throttle(300, (index) => api.handleIndicatorHover(index))

export const computedHasLabel = (items) => items.some((item) => item.label.toString().length > 0)

export const computedStyle =
  ({ props }) =>
  () => {
    if (props.height) {
      return { 'height': props.height }
    } else {
      // 低版本浏览器兼容（chrome 58 不支持 aspect-ratio属性）
      if (CSS.supports('aspect-ratio', 'auto')) {
        return { 'aspect-ratio': props.aspectRatio.replace(':', ' / ') }
      } else {
        const ratio = props.aspectRatio.split(':')
        const paddingTop = ((ratio[1] / ratio[0]) * 100).toFixed(2) + '%'

        return { 'width': '100%', 'height': 0, 'padding-top': paddingTop }
      }
    }
  }

export const onComplete =
  ({ api, count, emit, props, state }) =>
  (total) => {
    if (count++ === total) {
      state.completed = true

      if (props.initialIndex < state.items.length && props.initialIndex >= 0) {
        api.canActive(props.initialIndex, state.activeIndex).then((result) => {
          if (result) {
            state.activeIndex = props.initialIndex
          }
        })
      }

      emit('complete')
    }
  }

export const computedHasButtons =
  ({ props }) =>
  () => {
    if (props.lite) {
      return false
    } else {
      return props.arrow !== 'never'
    }
  }

export const computedHasIndicators =
  ({ props }) =>
  () => {
    if (props.lite) {
      return false
    } else {
      return props.indicatorPosition !== 'none'
    }
  }
