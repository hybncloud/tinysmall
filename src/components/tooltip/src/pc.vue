<!-- eslint-disable no-mixed-operators -->
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

<script lang="tsx">
import { renderless } from '@tinysmall/renderless/tooltip/vue'
import { setup, h, defineComponent, hooks } from '@tinysmall/common'
import { normalizeClass, Transition, Text, Comment, type VNode } from 'vue'
import type { ITinyVm } from '@tinysmall/renderless/types/shared.type'
import '@tinysmall/theme/tooltip/index.less'

export const tooltipProps = {
  visible: {
    type: String,
    default: () => 'always',
    validator: (value: string) => ['always', 'auto'].includes(value)
  },
  adjustArrow: {
    type: Boolean,
    default: () => false
  },
  appendToBody: {
    type: Boolean,
    default: () => true
  },
  arrowOffset: {
    type: Number,
    default: () => 0
  },
  content: { type: [String, Object] },
  disabled: { type: Boolean },
  enterable: {
    type: Boolean,
    default: () => true
  },
  hideAfter: {
    type: Number,
    default: () => 0
  },
  manual: { type: Boolean },
  modelValue: { type: Boolean },
  offset: {
    default: () => 0
  },
  effect: {
    type: String,
    default: () => ''
  },
  openDelay: {
    type: Number,
    default: () => 0
  },
  closeDelay: {
    type: Number,
    default: () => 100
  },
  placement: {
    type: String,
    default: () => 'bottom'
  },
  popper: {},
  popperClass: { type: String },
  /** 弹层内边距，取自原 pc.vue 本地 props */
  boundariesPadding: {
    type: Number,
    default: () => 5
  },
  popperOptions: {
    default: () => ({})
  },
  pre: { type: Boolean },
  reference: {},
  renderContent: { type: Function },
  tabindex: {
    type: Number,
    default: () => 0
  },
  transition: {
    type: String,
    default: () => 'tiny-fade-in-linear'
  },
  type: {
    type: String,
    validator: (value: string) => Boolean(~['normal', 'warning', 'error', 'info', 'success'].indexOf(value))
  },
  visibleArrow: {
    type: Boolean,
    default: () => true
  },
  genArrowByHtml: {
    type: Boolean,
    default: () => true
  },
  zIndex: {
    type: String,
    default: () => 'next'
  },
  contentMaxHeight: {
    type: String,
    default: () => '80vh'
  }
}

export default defineComponent({
  name: 'TinyTooltip',
  componentName: 'Tooltip',
  props: tooltipProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  },
  render() {
    const getContent = (vm: ITinyVm) => {
      let slotContent = vm.slots.content && vm.slots.content()

      if (slotContent && (!hooks.Comment || slotContent[0].type !== hooks.Comment)) {
        return slotContent
      }

      let attrContent: any

      if (vm.renderContent) {
        try {
          attrContent = vm.renderContent(h, vm.content)
        } catch (e) {
          console.warn('[TINY Error] renderContent catch error:', e)
          attrContent = vm.content || null
        }
      } else if (vm.pre) {
        attrContent = vm.content ? h('pre', null, vm.content) : null
      } else {
        attrContent = vm.content
      }

      return attrContent
    }
    if (!Object.getOwnPropertyDescriptor(this.vm, 'popperVM')) {
      const _cacheVm = { value: null }
      Object.defineProperties(this.vm, {
        popperVM: {
          get: () => {
            if (!_cacheVm.value) {
              _cacheVm.value = hooks
                .createApp(
                  {
                    render: () => {
                      const content = getContent(this)

                      // 当内容为纯文本时，添加一层wrapper，其他情况（插槽、renderContent）原样输出
                      const addWrapper = typeof content === 'string'
                      const propsData = {
                        name: this.transition,
                        onAfterLeave: this.doDestroy
                      }
                      const typeClass = 'is-' + (this.type || this.effect || 'dark')
                      const mouseenter = () => this.setExpectedState(true)
                      const mouseleave = () => {
                        this.setExpectedState(false)
                        this.debounceClose()
                      }

                      // 直接 updatePopper 会造成scroll事件的绑定，即使tooltip不显示，也在滚动时带来性能影响
                      this.$nextTick(() => {
                        // 取 v-show的条件， v-show时，要更新一下位置
                        if (!this.disabled && this.state.showPopper && content) {
                          this.updatePopper()
                        }
                      })

                      return h(Transition, propsData, () => [
                        <div
                          ref="popper"
                          id={this.state.tooltipId}
                          v-show={!this.disabled && this.state.showPopper && content}
                          class={[
                            'tiny-tooltip',
                            'tiny-tooltip__popper',
                            typeClass,
                            this.popperClass,
                            { 'tiny-tooltip__show-tips': this.state.showContent }
                          ]}
                          style={`max-width:${this.state.tipsMaxWidth}px`}
                          role="tooltip"
                          aria-hidden={this.disabled || !this.state.showPopper ? 'true' : 'false'}
                          aria-live="polite"
                          onMouseenter={() => mouseenter()}
                          onMouseleave={() => mouseleave()}
                        >
                          {addWrapper ? (
                            <div class="tiny-tooltip__content-wrapper" style={`max-height:${this.contentMaxHeight};`}>
                              {content}
                            </div>
                          ) : (
                            content
                          )}
                        </div>
                      ])
                    }
                  },
                  null
                )
                .mount(document.createElement('div'))
            }

            return _cacheVm.value
          },

          set: (val) => (_cacheVm.value = val)
        }
      })
    }

    // 查找默认的slots, 并把它渲染到组件所在位置上。
    const getFirstElement = () => {
      const slots = this.slots.default && this.slots.default()

      if (!Array.isArray(slots)) return null

      let element: VNode | null = null

      for (let index = 0; index < slots.length; index++) {
        const vnode = slots[index]

        // 内联 isEmptyVnode：排除空 vnode 与 Text/Comment 占位 vnode
        if (vnode && vnode.type && vnode.type !== Text && vnode.type !== Comment) {
          element = vnode
          break
        }
      }

      return element
    }

    const firstElement = getFirstElement()

    if (!firstElement) return null

    const data = firstElement.data || firstElement.props || (firstElement.props = {})

    data.class = normalizeClass(['tiny-tooltip', data.class])

    return firstElement
  }
})
</script>
