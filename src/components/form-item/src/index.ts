import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { formItemProps, $constants } from './pc.vue'

export { formItemProps }
export { $constants }

export default defineComponent({
  name: $prefix + 'FormItem',
  componentName: 'FormItem',
  props: formItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
