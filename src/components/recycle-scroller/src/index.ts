import { $props, $setup, $prefix, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { recycleScrollerProps } from './pc.vue'

export { recycleScrollerProps }

export default defineComponent({
  name: $prefix + 'RecycleScroller',
  props: recycleScrollerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
