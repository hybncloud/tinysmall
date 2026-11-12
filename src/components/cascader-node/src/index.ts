import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'CascaderNode',
  componentName: 'CascaderNode',
  props: {
    ...$props,
    node: {
      required: true
    },
    nodeId: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
