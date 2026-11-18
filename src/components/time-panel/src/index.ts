import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { timePanelProps } from './pc.vue'

export { timePanelProps }

export default defineComponent({
  name: $prefix + 'TimePanel',
  componentName: 'TimePanel',
  props: timePanelProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
