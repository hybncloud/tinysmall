import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'

import template from 'virtual-template?pc'
import { virtualScrollBoxProps } from './pc.vue'

export { virtualScrollBoxProps }

export default defineComponent({
  name: $prefix + 'VirtualScrollBox',
  props: virtualScrollBoxProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
