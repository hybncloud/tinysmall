import type { PropType } from '@tinysmall/common'
import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { pagerProps } from './pc.vue'

export { pagerProps }

export default defineComponent({
  name: $prefix + 'Pager',
  props: pagerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
