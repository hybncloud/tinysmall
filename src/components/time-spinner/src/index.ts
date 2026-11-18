import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, timeSpinnerProps } from './pc.vue'

export { timeSpinnerProps }

export default defineComponent({
  props: timeSpinnerProps,
  name: $prefix + 'TimeSpinner',
  componentName: 'TimeSpinner',
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
