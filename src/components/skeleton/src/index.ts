import { $props, $setup, $prefix, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, skeletonProps } from './pc.vue'

export { skeletonProps }
export { $constants }

export default defineComponent({
  name: $prefix + 'Skeleton',
  props: skeletonProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
