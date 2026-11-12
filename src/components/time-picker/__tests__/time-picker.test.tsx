import { mountPcMode } from '@tinysmall-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import TimePicker from '@tinysmall/time-picker'
import { nextTick } from 'vue'
import { iconBoat } from '@tinysmall/icon'

let value = new Date(2016, 9, 10, 18, 40)

describe('PC Mode', () => {
  const mount = mountPcMode

  test('readonly', async () => {
    const wrapper = mount(() => <TimePicker v-model={value} editable={false}></TimePicker>)
    expect(wrapper.find('input').attributes()).toHaveProperty('readonly')
  })

  test('events', async () => {
    const handleFocus = vi.fn()
    const wrapper = mount(() => <TimePicker v-model={value} onFocus={handleFocus}></TimePicker>)

    await wrapper.find('input').trigger('focus')
    await nextTick()
    expect(handleFocus).toHaveBeenCalled()
  })

  test('icon', async () => {
    const wrapper = mount(() => <TimePicker v-model={value} icon={iconBoat()}></TimePicker>)
    expect(wrapper.find('.tiny-svg').exists()).toBe(true)
  })
})
