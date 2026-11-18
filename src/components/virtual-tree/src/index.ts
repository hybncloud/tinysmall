import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'

import template from 'virtual-template?pc'
import { virtualTreeProps } from './pc.vue'

export { virtualTreeProps }

export default defineComponent({
  name: $prefix + 'VirtualTree',
  props: virtualTreeProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
