import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { dropdownProps } from './pc.vue'

export { dropdownProps }
export default defineComponent({
  name: $prefix + 'Dropdown',
  componentName: 'TinyDropdown',
  model: {
    prop: 'visible',
    event: 'update:visible'
  },
  props: dropdownProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
