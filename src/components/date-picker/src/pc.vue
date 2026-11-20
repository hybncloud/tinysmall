<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="ts">
import Picker from '@tinysmall/picker'
import { $prefix, $props } from '@tinysmall/common'
import { extend } from '@tinysmall/utils'
import { iconClose } from '@tinysmall/icon'
import type { PropType } from 'vue'
import { $constants } from '@tinysmall/renderless/date-picker/constants'


const validator = (value) => {
  const result =
    value === null ||
    value === undefined ||
    typeof value === 'string' ||
    value instanceof String ||
    (Array.isArray(value) &&
      value.length === 2 &&
      value.every((item) => typeof item === 'string' || item instanceof String))

  return result
}

const currentYear = new Date().getFullYear()

export const datePickerProps = {
  ...$props,

  tabindex: {
    type: String,
    default: '0'
  },
  timeFormat: String,
  suffixIcon: Object,
  label: String,
  changeOnConfirm: {
    type: Boolean,
    default: false
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  isutc8: {
    type: Boolean,
    default: false
  },
  dbTimezone: Number,
  timezoneOffset: Number,
  iso8601: Boolean,
  autoFormat: {
    type: Boolean,
    default: false
  },
  title: String,
  type: {
    type: String as PropType<
      | 'date'
      | 'dates'
      | 'daterange'
      | 'week'
      | 'month'
      | 'monthrange'
      | 'year'
      | 'years'
      | 'yearrange'
      | 'datetime'
      | 'datetimerange'
    >,
    default: 'date'
  },
  timeArrowControl: Boolean,
  timeEditable: {
    type: Boolean,
    default: true
  },
  size: String,
  format: String,
  valueFormat: String,
  readonly: Boolean,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  prefixIcon: Object,
  clearIcon: {
    type: Object,
    default() {
      return iconClose()
    }
  },
  name: {
    default: '',
    validator
  },
  disabled: Boolean,
  clearable: {
    type: Boolean,
    default: true
  },
  id: {
    default: '',
    validator
  },
  popperClass: String,
  editable: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: 'left'
  },
  modelValue: {},
  defaultValue: {},
  defaultTime: {},
  rangeSeparator: {
    type: [Object, String],
    default: '-'
  },
  pickerOptions: {},
  unlinkPanels: Boolean,
  validateEvent: {
    type: Boolean,
    default: true
  },
  isRange: Boolean,
  arrowControl: Boolean,
  timezoneData: {},
  showTimezone: {
    type: Boolean,
    default: false
  },
  defaultTimezone: {},
  visible: Boolean,
  minDate: {
    type: Date,
    default: () => new Date(currentYear - 10, 0, 1),
    validator: (val: Date) => Object.prototype.toString.call(val) === '[object Date]' && !isNaN(val.getTime())
  },
  maxDate: {
    type: Date,
    default: () => new Date(currentYear + 10, 11, 31),
    validator: (val: Date) => Object.prototype.toString.call(val) === '[object Date]' && !isNaN(val.getTime())
  },
  formatter: {
    type: Function,
    default: (type, value) => value
  },
  componentName: { type: String, default: 'DatePicker' },
  displayOnly: {
    type: Boolean,
    default: false
  },
  step: {
    type: Object,
    default() {
      return { hour: 1, minute: 1, second: 1 }
    }
  },
  showWeekNumber: {
    type: Boolean,
    default: false
  },
  formatWeeks: Function,
  changeCompat: {
    type: Boolean,
    default: false
  },
  nowClick: {
    type: Function
  }
}

const DatePicker = extend(
  true,
  {
    props: {
      ...$props,
      componentName: { type: String, default: 'DatePicker' },
      minDate: {
        type: Date
      },
      maxDate: {
        type: Date
      },
      visible: Boolean,
      formatter: {
        type: Function
      }
    }
  },
  Picker,
  {
    name: $prefix + 'DatePicker',
    props: datePickerProps
  }
)

export default DatePicker
</script>
