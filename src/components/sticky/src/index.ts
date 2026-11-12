import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'Sticky',
  props: {
    ...$props,
    zIndex: {
      type: [Number, String],
      default: () => 100
    },
    target: String,
    offset: {
      type: [Number, String],
      default: () => 0
    },
    position: {
      type: String,
      values: ['top', 'bottom'],
      default: () => 'top'
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
