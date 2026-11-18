import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import type { ITooltipApi } from '@tinysmall/renderless/types/tooltip.type'

import template from 'virtual-template?pc'
import { tooltipProps } from './pc.vue'

export { tooltipProps }
export default defineComponent({
  name: $prefix + 'Tooltip',
  componentName: 'Tooltip',
  props: tooltipProps,
  setup(props, context) {
    return $setup({ props, context, template }) as unknown as ITooltipApi
  }
})
