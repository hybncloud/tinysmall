import { setup, h, defineComponent } from '@tinysmall/common'
import type { ISharedRenderlessParamHooks, ISharedRenderlessParamUtils } from '@tinysmall/renderless/types'

export default defineComponent({
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
    isMobile: Boolean,
    isMobileFirst: Boolean
  },
  render() {
    const slotsDefault = this.slots.default && this.slots.default()
    const classPrefix = this.isMobile ? 'tiny-mobile-' : 'tiny-'

    if (!slotsDefault) return null

    if (this.isAutoWidth) {
      // autoLabelWidth 在 form 的 reactive state 上（form 的 api 未单独暴露该名字）
      const autoLabelWidth = (this as any).form?.state?.autoLabelWidth
      const style = {} as any

      if (autoLabelWidth && autoLabelWidth !== 'auto') {
        const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth
        if (marginLeft) {
          style.marginLeft = marginLeft + 'px'
        }
      }

      return h(
        'div',
        {
          class: this.isMobileFirst ? 'float-left' : `${classPrefix}form-item_label-wrap`,
          style
        },
        slotsDefault
      )
    } else {
      return slotsDefault[0]
    }
  },
  setup(props, context): any {
    const renderless = (
      props: any,
      { inject, reactive, watch, onMounted, onUpdated, onBeforeUnmount }: ISharedRenderlessParamHooks,
      { vm }: ISharedRenderlessParamUtils
    ) => {
      // 注入的 form/form-item vm 先放入 state，再统一通过 state 访问
      const state = reactive({
        form: inject('form', null),
        formItem: inject('formItem', null),
        computedWidth: 0
      })

      const getLabelWidth = () => {
        return !vm.$el || !vm.$el.firstElementChild
          ? 0
          : Math.ceil(parseFloat(window.getComputedStyle(vm.$el.firstElementChild).width))
      }

      const updateLabelWidth = (action = 'update') => {
        if (!vm.$slots.default || !props.isAutoWidth || !vm.$el.firstElementChild) {
          return
        }

        if (action === 'update') {
          state.computedWidth = getLabelWidth()
        } else if (action === 'remove') {
          state.form?.deregisterLabelWidth(state.computedWidth)
        }
      }

      watch(
        () => state.computedWidth,
        (val, oldVal) => {
          if (props.updateAll) {
            state.form?.registerLabelWidth(val, oldVal)
            state.formItem?.updateComputedLabelWidth(val)
          }
        }
      )

      onMounted(() => updateLabelWidth('update'))
      onUpdated(() => updateLabelWidth('update'))
      onBeforeUnmount(() => updateLabelWidth('remove'))

      return state
    }

    const api = ['computedWidth', 'form']

    return setup({ props, context, renderless })
  }
})
