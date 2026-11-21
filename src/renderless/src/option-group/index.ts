export const queryChange =
  ({ select, state, vm }) =>
  () => {
    state.visible = true

    if (Array.isArray(select.state.options)) {
      const groupOptions = select.state.options.filter((option) => {
        // option.state.group 来自 option 侧 inject('optionGroup')（见 option-group/vue.ts）
        return vm && option.state.group === vm
      })

      if (Array.isArray(groupOptions)) {
        state.visible = groupOptions.some((option) => option.visible === true)
      }
    }
  }

export const observeCallback =
  ({ state, api }) =>
  (mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        if (state.timer) {
          clearTimeout(state.timer)
        }

        state.timer = setTimeout(() => {
          api.queryChange()
        }, 100)
      }
    }
  }
