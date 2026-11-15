export const useInstanceSlots =
  ({ getCurrentInstance, nextTick, onUnmounted }) =>
  () => {
    const publicInstance = getCurrentInstance().proxy

    /**
     * 在 Vue3，$scopedSlots 是 undefined，$slots 内容是插槽方法，在渲染函数中使用 undefined 的 $scopedSlots 会出现警告提示
     */
    Object.defineProperty(publicInstance, '$scopedSlots', { configurable: true, value: null })

    Object.defineProperty(publicInstance, 'instanceSlots', {
      configurable: true,
      get: () => publicInstance.$scopedSlots || publicInstance.$slots
    })

    onUnmounted(() => {
      nextTick(() => {
        delete publicInstance.$scopedSlots
        delete publicInstance.instanceSlots
      })
    })
  }
