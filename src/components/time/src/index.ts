import { $prefix, $props, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { timeProps } from './pc.vue'

export { timeProps }

export default defineComponent({
  name: $prefix + 'Time',
  componentName: 'Time',
  props: timeProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
