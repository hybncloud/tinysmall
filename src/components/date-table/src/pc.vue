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
<template>
  <table
    :class="['tiny-date-table', { 'is-week-mode': selectionMode === 'week' }]"
    cellspacing="0"
    @mousemove.stop="handleMouseMove"
    cellpadding="0"
    @click.stop="handleClick"
  >
    <tbody>
      <tr class="tiny-date-table__week">
        <th v-if="showWeekNumber">
          {{ t('ui.datepicker.week') }}
        </th>
        <th v-for="(weekDay, key) in state.weeks" :key="key">
          {{ t(`ui.datepicker.weeks.${weekDay}`) }}
        </th>
      </tr>
      <tr
        v-for="(row, key) in state.rows"
        :class="['tiny-date-table__row', { current: isWeekActive(row[1]) }]"
        :key="key"
      >
        <td v-for="(cellValue, key) in row" :key="key" :class="getCellClasses(cellValue)">
          <div>
            <span>
              {{ cellValue.text }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/date-table/vue'
import { $prefix, $props, setup, defineComponent } from '@tinysmall/common'
import { isDate1 } from '@tinysmall/utils'

export const dateTableProps = {
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
}

export default defineComponent({
  name: $prefix + 'DateTable',
  componentName: 'DateTable',
  emits: ['changerange', 'pick'],
  props: dateTableProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
