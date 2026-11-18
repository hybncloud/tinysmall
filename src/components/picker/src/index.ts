import { $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { pickerProps } from './pc.vue'

export { pickerProps }

export default defineComponent({
  name: $prefix + 'Picker',
  componentName: 'Picker',
  props: pickerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
