import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { pagerItemProps } from './pc.vue'

export { pagerItemProps }

export default defineComponent({
  name: $prefix + 'PagerItem',
  props: pagerItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
