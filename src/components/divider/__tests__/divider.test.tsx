import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Divider from '@opentiny/vue-divider'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base 基本用法', async () => {
    const wrapper = mount(() => <Divider></Divider>)

    const triggerEle = wrapper.find('.tiny-divider')
    expect(triggerEle.exists()).toBe(true)

    wrapper.unmount()
  })

  test('props direction', async () => {
    const wrapper = mount(() => <Divider direction="vertical"></Divider>)

    expect(wrapper.find('.tiny-divider--vertical').exists()).toBeTruthy()

    wrapper.unmount()
  })

  test.todo('props content position')

  test('custom border color', async () => {
    const borderColor = 'rgb(255, 0, 0)'

    const wrapper = mount(() => <Divider color={borderColor}></Divider>)

    const element = wrapper.find('.tiny-divider-line').element as HTMLDivElement

    expect(element.style.borderColor).eq(borderColor)

    wrapper.unmount()
  })

  test('custom text style', async () => {
    const contentColor = 'red'
    const contentBackgroundColor = 'orange'

    const wrapper = mount(() => (
      <Divider contentColor={contentColor} contentBackgroundColor={contentBackgroundColor}>
        测试
      </Divider>
    ))

    const textDom = wrapper.find('.tiny-divider__text').element as HTMLDivElement

    expect(textDom.style.color).eq(contentColor)
    expect(textDom.style.backgroundColor).eq(contentBackgroundColor)

    wrapper.unmount()
  })

  test('slots', async () => {
    const TEXT = 'slots'

    const wrapper = mount(() => <Divider>{TEXT}</Divider>)

    expect(wrapper.find('.tiny-divider').text()).eq(TEXT)

    wrapper.unmount()
  })
})
