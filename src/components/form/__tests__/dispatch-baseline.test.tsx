import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Form from '@tinysmall/form'
import FormItem from '@tinysmall/form-item'
import Input from '@tinysmall/input'
import { nextTick, reactive } from 'vue'

/**
 * dispatch 基线验证（改造前）：
 * 1. form-item mounted → dispatch('Form', 'form:addField', vm) → form 的 vm.$on('form:addField') 收到
 * 2. input modelValue 变化 → dispatch('FormItem', 'form.change', [value]) → form-item 的 vm.$on('form.change') 收到
 */
describe('dispatch 基线', () => {
  test('form.addField 与 form.change 链路', async () => {
    const root = mount({
      setup() {
        const model = reactive({ name: 'a' })
        return () => (
          <Form model={model}>
            <FormItem prop="name">
              <Input v-model={model.name} />
            </FormItem>
          </Form>
        )
      }
    })

    const formComp = root.findComponent({ name: 'TinyForm' })
    const formItemComp = root.findComponent({ name: 'TinyFormItem' })
    expect(formComp.exists()).toBe(true)
    expect(formItemComp.exists()).toBe(true)

    // 1. form-item 已通过 dispatch('Form', 'form:addField') 注册到 form
    const formTinyVm = (formComp.vm as any).vm
    expect(formTinyVm.state.fields.length).toBe(1)

    // 2. input 变化 → form-item 的 vm.$on('form.change') 收到
    const formItemTinyVm = (formItemComp.vm as any).vm
    const onFormChange = vi.fn()
    formItemTinyVm.$on('form.change', onFormChange)

    await root.find('input').setValue('b')
    await nextTick()

    expect(onFormChange).toHaveBeenCalled()
  })
})
