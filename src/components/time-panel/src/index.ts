import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'TimePanel',
  componentName: 'TimePanel',
  props: {
    ...$props,
    emitter: Object
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
