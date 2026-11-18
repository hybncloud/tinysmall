import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, tabItemProps } from './pc.vue'

export { tabItemProps }
export { $constants }

export default defineComponent({
  name: $prefix + 'TabItem',
  componentName: 'TabItem',
  props: tabItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
