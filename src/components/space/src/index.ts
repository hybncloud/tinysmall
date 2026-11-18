import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import type { PropType, SlotsType } from 'vue'
import template from 'virtual-template?pc'
import { spaceProps } from './pc.vue'

export { spaceProps }

// 组件定义
export default defineComponent({
  name: $prefix + 'Space',
  props: spaceProps,
  slots: Object as SlotsType<{
    default: {} // 默认插槽
  }>,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
