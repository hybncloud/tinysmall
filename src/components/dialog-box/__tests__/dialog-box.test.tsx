import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import DialogBox from '@tinysmall/dialog-box'
import Dropdown from '@tinysmall/dropdown'
import DropdownMenu from '@tinysmall/dropdown-menu'
import { nextTick } from 'vue'

describe('PC Mode', () => {
  /**
   * attrs
   */
  test('visible', async () => {
    const wrapper = mount(DialogBox, {
      props: {
        visible: false
      }
    })

    expect(wrapper.find('.tiny-dialog-box').isVisible()).toBeFalsy()

    await wrapper.setProps({ visible: true })

    expect(wrapper.find('.tiny-dialog-box').isVisible()).toBeTruthy()
  })

  test.todo('center 弹出框的头部与底部内容是否自动居中')

  test.todo('is-form-reset 关闭弹窗，是否重置表单数据')

  test.todo('show-close 是否显示关闭按钮')

  test.todo('draggable 是否开启弹窗的拖拽功能')

  test.todo('fullscreen 弹出框是否全屏')

  test.todo('modal 是否启用遮罩层')

  test.todo('close-on-click-modal 是否可以通过点击遮罩层关闭弹窗')

  test.todo('close-on-press-escape 是否可以通过 ESC 键关闭遮罩层')

  test.todo('modal-append-to-body 遮罩层是否应用到body上')

  test.todo('append-to-body DialogBox本身是否插入到 body 上')

  test.todo('right-slide 是否开启弹出右侧滑出功能')

  test.todo('lock-scroll Dialog弹出时是否禁用滚动条')

  test.todo('show-header 是否显示弹窗头部 header')

  test.todo('width 弹出框的宽度')

  test.todo('dialog-class 自定义配置弹窗类名')

  /**
   * slots
   */
  test('default', () => {
    const visible = true
    const wrapper = mount(() => (
      <DialogBox v-model:visible={visible}>
        <span class="custom-content">默认插槽内容</span>
      </DialogBox>
    ))
    expect(wrapper.find('span.custom-content').exists()).toBe(true)
  })

  test('updatePopper 广播到内部 dropdown-menu（$emitter 替代 broadcast）', async () => {
    const onMenuUpdatePopper = vi.fn()
    // scroll 监听在 visible 变为 true 时才挂载（watchVisible 无 immediate），故从 false 开始
    const wrapper = mount(
      {
        props: { visible: { type: Boolean, default: false } },
        setup(props, { slots }: any) {
          return () => (
            <DialogBox
              visible={props.visible}
              v-slots={{
                default: () => (
                  <Dropdown
                    v-slots={{
                      dropdown: () => (
                        <DropdownMenu>
                          <div class="menu-content">菜单</div>
                        </DropdownMenu>
                      )
                    }}
                  ></Dropdown>
                )
              }}
            ></DialogBox>
          )
        }
      },
      { props: { visible: false } }
    )

    const menu = wrapper.findComponent({ name: 'TinyDropdownMenu' })
    expect(menu.exists()).toBe(true)
    // setup 返回的 vm 即适配器 TinyVM（带 $on/$emitter）；dropdown-menu 自身 emitter 订阅
    // （vm.$on('updatePopper')）经由 dialogBoxVm.$emitter 桥接转发触发
    const menuTinyVm = (menu.vm as any).vm
    menuTinyVm.$on('updatePopper', onMenuUpdatePopper)

    await wrapper.setProps({ visible: true })
    await nextTick()

    // dialog 滚动触发 updatePopper 广播（scroll 监听绑定在组件内部 .tiny-dialog-box__wrapper 上；
    // 组件根节点是 <teleport>，TinyVM 的 $el 为占位注释，故从 DOM 中取 wrapper 派发）
    wrapper.find('.tiny-dialog-box__wrapper').element.dispatchEvent(new Event('scroll'))
    await nextTick()
    expect(onMenuUpdatePopper).toHaveBeenCalled()
  })

  test.todo('title 窗口标题区的内容')

  test.todo('footer 窗口底部的模板')

  /**
   * events
   */
  test('close', async () => {
    let visible = true
    const handleClose = vi.fn()
    const wrapper = mount(() => <DialogBox v-model:visible={visible} onClose={handleClose}></DialogBox>)
    await wrapper.find('.tiny-dialog-box__headerbtn').trigger('click')
    await nextTick()
    expect(handleClose).toHaveBeenCalled()
  })

  test.todo('open 弹出框打开的回调')

  test.todo('opened 打开动画结束时的回调')

  test.todo('closed 关闭动画结束时的回调')

  test.todo('drag-start 拖拽开始事件')

  test.todo('drag-move 拖拽移动事件')

  test.todo('drag-end 拖拽结束事件')

  test.todo('可拖拽的弹窗关闭时只触发关闭事件(close)，不应触发拖拽结束事件(drag-end)')
})
