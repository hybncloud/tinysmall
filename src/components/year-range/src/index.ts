import { $prefix, $setup } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { yearRangeProps } from './pc.vue'

export { yearRangeProps }

export default {
  name: $prefix + 'YearRange',
  props: yearRangeProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
