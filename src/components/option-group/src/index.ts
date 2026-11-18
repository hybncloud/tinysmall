import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { optionGroupProps } from './pc.vue'

export { optionGroupProps }

export default defineComponent({
  name: $prefix + 'OptionGroup',
  componentName: 'OptionGroup',
  props: optionGroupProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
