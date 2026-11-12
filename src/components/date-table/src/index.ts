import { $prefix, $props, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { isDate1 } from '@tinysmall/utils'

export default defineComponent({
  name: $prefix + 'DateTable',
  componentName: 'DateTable',
  props: {
    ...$props,
    cellClassName: {},
    date: {},
    defaultValue: {
      validator(val) {
        return val === null || isDate1(val) || (Array.isArray(val) && val.every(isDate1))
      }
    },
    disabledDate: {},
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: (val) => val >= 1 && val <= 7
    },
    maxDate: {},
    minDate: {},
    rangeState: {
      default: () => ({ endDate: null, selecting: false })
    },
    selectionMode: {
      default: () => 'day'
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {},
    formatWeeks: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
