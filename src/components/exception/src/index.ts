import { $setup, $prefix, $props, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { exceptionProps } from './pc.vue'

export { exceptionProps }

export default defineComponent({
  name: $prefix + 'Exception',

  props: exceptionProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
