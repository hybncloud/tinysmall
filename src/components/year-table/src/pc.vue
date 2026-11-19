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
  <table class="tiny-year-table" @mousemove="handleMouseMove" @click="handleYearTableClick">
    <tbody>
      <tr v-for="(row, trKey) in state.rows" :key="trKey">
        <td
          v-for="(cell, tdKey) in row"
          class="available"
          :key="tdKey"
          :class="[
            {
              'disabled': getIsDisabled(cell.text),
              'current': getIsCurrent(cell.text),
              'default': getIsDefault(cell.text),
              'today': state.currentYear === cell.text,
              'in-range': cell.inRange,
              'start-date': cell.start,
              'end-date': cell.end
            }
          ]"
        >
          <div>
            <a class="cell" :aria-disabled="getIsDisabled(cell.text) ? true : undefined">{{ cell.text }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/year-table/vue'
import { $prefix, $props, setup, defineComponent } from '@tinysmall/common'
import { isDate1 } from '@tinysmall/utils'
import '@tinysmall/theme/year-table/index.less'

export const yearTableProps = {
  ...$props,
  disabledDate: {},
  value: {},
  defaultValue: {
    validator(val) {
      // null or valid Date Object
      return val === null || (val instanceof Date && isDate1(val))
    }
  },
  date: [Date, Array],
  selectionMode: String,
  startYear: Number,
  maxDate: {},
  minDate: {},
  rangeState: {
    default: () => ({ endDate: null, selecting: false })
  },
  readonly: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'YearTable',
  emits: ['pick', 'changerange'],
  props: yearTableProps,
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
