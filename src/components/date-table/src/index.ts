import { $prefix, $props, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { dateTableProps } from './pc.vue'

export { dateTableProps }

export default defineComponent({
  name: $prefix + 'DateTable',
  componentName: 'DateTable',
  props: dateTableProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
