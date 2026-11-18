import { $prefix, $props, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, dateRangeProps } from './pc.vue'

export { dateRangeProps }

export default defineComponent({
  props: dateRangeProps,
  name: $prefix + 'DateRange',
  componentName: 'DateRange',
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
