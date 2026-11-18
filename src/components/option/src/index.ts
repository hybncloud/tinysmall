import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { optionsProps } from './pc.vue'

export { optionsProps }

export default defineComponent({
  name: $prefix + 'Option',
  componentName: 'Option',
  props: optionsProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
