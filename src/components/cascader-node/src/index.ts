import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { cascaderNodeProps } from './pc.vue'

export { cascaderNodeProps }

export default defineComponent({
  name: $prefix + 'CascaderNode',
  componentName: 'CascaderNode',
  props: cascaderNodeProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
