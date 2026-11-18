import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import YearRange from '@tinysmall/year-range'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  test('value', async () => {
    let value = '2025'
    const wrapper = mount(() => <YearRange v-model={value}></YearRange>)

    await nextTick()
    expect(wrapper.find('.tiny-picker-panel').exists()).toBe(true)
  })
})
