import { $prefix, $props, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { datePanelProps } from './pc.vue'

export { datePanelProps }

export default defineComponent({
  name: $prefix + 'DatePanel',
  componentName: 'DatePanel',
  props: datePanelProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
