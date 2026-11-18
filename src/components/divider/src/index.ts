import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, dividerProps } from './pc.vue'

export { dividerProps }
export { $constants }

export type DirectionType = 'horizontal' | 'vertical'
export type BorderStyleType = 'dashed' | 'solid' | 'dotted'
export type ContentPositionType = 'left' | 'right' | 'center'

export default defineComponent({
  name: $prefix + 'Divider',
  props: dividerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
