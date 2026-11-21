import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'
import Dropdown from '@tinysmall/dropdown'
import DropdownMenu from '@tinysmall/dropdown-menu'
import DropdownItem from '@tinysmall/dropdown-item'

describe('PC Mode', () => {
  test('base 基本用法', async () => {
    const wrapper = mount(() => (
      <Dropdown
        v-slots={{
          dropdown: () => (
            <DropdownMenu>
              <DropdownItem>老友粉</DropdownItem>
              <DropdownItem>黄金糕</DropdownItem>
              <DropdownItem>狮子头</DropdownItem>
              <DropdownItem>螺蛳粉</DropdownItem>
              <DropdownItem>双皮奶</DropdownItem>
              <DropdownItem>蚵仔煎</DropdownItem>
            </DropdownMenu>
          )
        }}
      ></Dropdown>
    ))

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')
    const dropdownMenuEle = wrapper.find('.tiny-dropdown-menu')
    expect(dropdownMenuEle.exists()).toBe(true)
  })

  test('slot-default', async () => {
    const wrapper = mount(() => (
      <Dropdown
        v-slots={{
          default: () => <span class="test-default">默认插槽</span>,
          dropdown: () => (
            <DropdownMenu>
              <DropdownItem>老友粉</DropdownItem>
              <DropdownItem>黄金糕</DropdownItem>
              <DropdownItem>狮子头</DropdownItem>
              <DropdownItem>螺蛳粉</DropdownItem>
              <DropdownItem>双皮奶</DropdownItem>
              <DropdownItem>蚵仔煎</DropdownItem>
            </DropdownMenu>
          )
        }}
      ></Dropdown>
    ))

    const triggerEle = wrapper.find('.test-default')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')
    const dropdownMenuEle = wrapper.find('.tiny-dropdown-menu')
    expect(dropdownMenuEle.exists()).toBe(true)
  })

  test('events-visible-change', async () => {
    const visibleChange = vi.fn()

    const wrapper = mount(() => (
      <Dropdown
        onVisibleChange={visibleChange}
        v-slots={{
          dropdown: () => (
            <DropdownMenu>
              <DropdownItem>老友粉</DropdownItem>
              <DropdownItem>黄金糕</DropdownItem>
              <DropdownItem>狮子头</DropdownItem>
              <DropdownItem>螺蛳粉</DropdownItem>
              <DropdownItem>双皮奶</DropdownItem>
              <DropdownItem>蚵仔煎</DropdownItem>
            </DropdownMenu>
          )
        }}
      ></Dropdown>
    ))

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    expect(triggerEle.exists()).toBe(true)
    await triggerEle.trigger('hover')

    setTimeout(() => {
      expect(visibleChange).toHaveBeenCalledTimes(1)
      expect(visibleChange).toHaveBeenCalled()
    }, 500)
  })

  test('visible 通知 dropdown-menu 显隐（emitter 替代 broadcast）', async () => {
    const wrapper = mount(() => (
      <Dropdown
        showTimeout={0}
        hideTimeout={0}
        v-slots={{
          dropdown: () => (
            <DropdownMenu>
              <DropdownItem>老友粉</DropdownItem>
            </DropdownMenu>
          )
        }}
      ></Dropdown>
    ))

    const triggerEle = wrapper.find('.tiny-dropdown__trigger')
    // 菜单显示后 popper 会将 DOM 移动到 body，需用 document 查询
    const menuEl = () => document.querySelector('.tiny-dropdown-menu') as HTMLElement | null

    await triggerEle.trigger('mouseenter')
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(menuEl()).toBeTruthy()
    expect(menuEl()!.style.display).not.toBe('none')

    await triggerEle.trigger('mouseleave')
    await new Promise((resolve) => setTimeout(resolve, 50))
    expect(menuEl()!.style.display).toBe('none')
  })

  test('dispatch 基线：dropdown-item 点击通知 dropdown 并收起菜单', async () => {
    const wrapper = mount(() => (
      <Dropdown
        showTimeout={0}
        hideTimeout={0}
        v-slots={{
          default: () => <span class="test-trigger">触发</span>,
          dropdown: () => (
            <DropdownMenu>
              <DropdownItem>老友粉</DropdownItem>
            </DropdownMenu>
          )
        }}
      ></Dropdown>
    ))

    await wrapper.find('.tiny-dropdown__trigger').trigger('mouseenter')
    await new Promise((resolve) => setTimeout(resolve, 50))
    // 注意：同文件多个用例共享 document，popper 显示时会将菜单移入 body，
    // 取最后一个元素以避开上一个用例遗留的菜单 DOM
    const menuEl = () => {
      const menus = document.querySelectorAll('.tiny-dropdown-menu')
      return menus[menus.length - 1] as HTMLElement | null
    }
    expect(menuEl()!.style.display).not.toBe('none')

    // 点击菜单项 → dropdown-item 通知 dropdown（menu-item-click）→ dropdown 收起菜单并 emit('item-click')
    const items = document.querySelectorAll('.tiny-dropdown-item')
    ;(items[items.length - 1] as HTMLElement).dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await new Promise((resolve) => setTimeout(resolve, 50))

    const dropdownComp = wrapper.findComponent({ name: 'TinyDropdown' })
    expect(dropdownComp.emitted('item-click')).toBeTruthy()
    expect(menuEl()!.style.display).toBe('none')
  })

  test.todo('type 菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)')
  test.todo('size 菜单尺寸，在split-button为 true 的情况下也对触发按钮生效。可选值（medium / small / mini）')
  test.todo('split-button 下拉触发元素呈现为按钮组')
  test.todo('trigger 触发下拉的行为')
  test.todo('hide-on-click 是否在点击菜单项后隐藏菜单')
  test.todo('show-timeout 展开下拉菜单的延时')
  test.todo('hide-timeout 收起下拉菜单的延时')
  test.todo('disabled 是否禁用')
  test.todo('menu-options 配置式配置 DropdownMenu 属性')
  test.todo('title 不使用默认插槽时，title属性可以配置菜单标题')

  test.todo('button-click split-button 为 true 时，点击左侧按钮的事件回调。')
  test.todo('item-click 点击菜单项触发的事件回调。')
})
