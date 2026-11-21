import { mount as mountComponent } from '@vue/test-utils'
import { defineComponent, h, provide, reactive } from 'vue'
import { describe, expect, test } from 'vitest'
import OptionGroup from '@tinysmall/option-group'
import Option from '@tinysmall/option'

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))

// 模拟 select 提供的上下文（option / option-group renderless 所需的最小集合）
const createFakeSelect = () => ({
  multiple: false,
  optimization: false,
  remote: false,
  filterable: false,
  valueKey: '',
  onOptionDestroy: () => undefined,
  state: reactive({
    options: [],
    cachedOptions: [],
    optionsIndex: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    hoverValue: null,
    hoverIndex: -1,
    disabledOptionHover: false,
    multipleLimit: 0,
    modelValue: '',
    selected: null,
    selectEmitter: { on: () => undefined, off: () => undefined, emit: () => undefined, once: () => undefined }
  })
})

const Harness = defineComponent({
  name: 'Harness',
  setup(_, { slots }) {
    provide('select', createFakeSelect())
    return () => h('div', slots.default?.())
  }
})

const Root = defineComponent({
  name: 'Root',
  props: { groupDisabled: Boolean },
  setup(props) {
    return () =>
      h(Harness, null, {
        default: () => [
          h(
            OptionGroup,
            { label: 'group', disabled: props.groupDisabled },
            { default: () => [h(Option, { value: 'a', label: 'A' }), h(Option, { value: 'b', label: 'B' })] }
          )
        ]
      })
  }
})

const optionItems = (wrapper: ReturnType<typeof mountComponent>) => wrapper.findAll('li[data-tag="tiny-option"]')

describe('OptionGroup disabled 通知 Option（emitter 替代 broadcast）', () => {
  test('运行时切换 group disabled，内部 option 同步禁用', async () => {
    const wrapper = mountComponent(Root, { props: { groupDisabled: false } })

    expect(optionItems(wrapper).length).toBe(2)
    optionItems(wrapper).forEach((item) => {
      expect(item.classes()).not.toContain('is-disabled')
    })

    await wrapper.setProps({ groupDisabled: true })
    await flush()

    optionItems(wrapper).forEach((item) => {
      expect(item.classes()).toContain('is-disabled')
    })

    await wrapper.setProps({ groupDisabled: false })
    await flush()

    optionItems(wrapper).forEach((item) => {
      expect(item.classes()).not.toContain('is-disabled')
    })
  })

  test('初始即 disabled 的 group，option 挂载后同步禁用', async () => {
    const wrapper = mountComponent(Root, { props: { groupDisabled: true } })
    await flush()

    optionItems(wrapper).forEach((item) => {
      expect(item.classes()).toContain('is-disabled')
    })
  })
})
