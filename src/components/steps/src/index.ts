import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { stepsProps } from './pc.vue'

export { stepsProps }

export default defineComponent({
  name: $prefix + 'Steps',
  props: stepsProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
