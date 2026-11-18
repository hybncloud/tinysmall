import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { cascaderPanelProps } from './pc.vue'

export { cascaderPanelProps }

export default defineComponent({
  name: $prefix + 'CascaderPanel',
  componentName: 'CascaderPanel',
  props: cascaderPanelProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
