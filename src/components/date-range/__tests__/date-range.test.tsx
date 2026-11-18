import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import DateRange from '@tinysmall/date-range'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  test('value', async () => {
    let value = ['2025-01-15', '2025-02-15']
    const wrapper = mount(() => <DateRange v-model={value}></DateRange>)

    await nextTick()
    expect(wrapper.find('.tiny-picker-panel').exists()).toBe(true)
  })
})
