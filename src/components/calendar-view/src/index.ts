import { $prefix, $props, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, calendarViewProps } from './pc.vue'

export { calendarViewProps }
export { $constants }

export default defineComponent({
  name: $prefix + 'CalendarView',
  props: calendarViewProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
