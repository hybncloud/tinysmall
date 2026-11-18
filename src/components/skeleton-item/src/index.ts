import { $props, $setup, $prefix, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'

import template from 'virtual-template?pc'
import { $constants, skeletonItemProps } from './pc.vue'

export { skeletonItemProps }
export { $constants }

export type VariantType = 'image' | 'circle' | 'square'
export type SizeType = 'large' | 'medium' | 'small'

export default defineComponent({
  name: $prefix + 'SkeletonItem',
  props: skeletonItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
