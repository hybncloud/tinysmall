import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { yearTableProps } from './pc.vue'

export { yearTableProps }

export default defineComponent({
  name: $prefix + 'YearTable',
  props: yearTableProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
