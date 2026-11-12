import { $prefix, $props, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { pickerProps } from './type'

export default defineComponent({
  name: $prefix + 'Picker',
  componentName: 'Picker',
  props: {
    ...$props,
    ...pickerProps
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
