import { $setup, $prefix, $props, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'

export default defineComponent({
  name: $prefix + 'Exception',

  props: {
    ...$props,
    type: {
      type: String,
      default: 'nodata'
    },
    message: String,
    subMessage: String,
    exceptionClass: String,
    imageUrl: String,
    pageEmpty: {
      type: Boolean,
      default: false
    },
    componentPage: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
