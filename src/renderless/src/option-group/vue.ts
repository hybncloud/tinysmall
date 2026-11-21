import { $constants } from '../base-select/constants'
import { queryChange, observeCallback } from './index'

export const api = ['state', 'queryChange']

export const renderless = (
  props,
  { onMounted, onBeforeUnmount, reactive, watch, inject, provide },
  { vm }
) => {
  const select = inject('select')

  provide('optionGroup', vm)

  const state = reactive({
    visible: true,
    timer: null
  })

  const api = {}

  Object.assign(api, {
    state,
    queryChange: queryChange({ select, state, vm }),
    observeCallback: observeCallback({ state, api })
  })

  watch(
    () => props.disabled,
    (value) => {
      // option 侧通过 inject('optionGroup') 拿到本 vm 并 $on(handleGroupDisabled)（即 $emitter.on），
      // 这里走 $emitter.emit 纯总线广播，不触发组件自身的 instance.emit，与 broadcast 行为一致
      vm.$emitter.emit($constants.EVENT_NAME.handleGroupDisabled, value)
    },
    { immediate: true }
  )

  onMounted(() => {
    if (select.filterable) {
      const config = { attributes: false, childList: true, subtree: false }
      api.observer = new MutationObserver(api.observeCallback)

      // tiny新增，解决多端模式下报错问题
      if (vm.$refs.selectGroup) {
        api.observer.observe(vm.$refs.selectGroup, config)
      }
    }

    if (props.disabled) {
      vm.$emitter.emit($constants.EVENT_NAME.handleGroupDisabled, props.disabled)
    }

    select.state.selectEmitter.on($constants.EVENT_NAME.queryChange, api.queryChange)
  })

  onBeforeUnmount(() => {
    api.observer && api.observer.disconnect()
  })

  return api
}
