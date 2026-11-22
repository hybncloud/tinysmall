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
import { setup, h, defineComponent, hooks } from '@tinysmall/common'
import { normalizeClass, Transition } from 'vue'
import { renderless } from '@tinysmall/renderless/form-item/vue'
import LabelWrap from './label-wrap'
import Tooltip from '@tinysmall/tooltip'
import { iconError } from '@tinysmall/icon'
import type { IFormItemApi, IFormItemInstance } from '@tinysmall/renderless/types/form-item.type'

export const formItemProps = {
  appendToBody: {
    type: Boolean,
    default: undefined
  },
  /** 是否禁用，取自原 pc.vue 本地 props（renderless 中被引用） */
  disabled: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  for: String,
  inlineMessage: {
    type: Boolean,
    default: undefined
  },
  messageType: String,
  label: String,
  labelWidth: String,
  manual: Boolean,
  noStyle: Boolean,
  popperOptions: {
    type: Object,
    default: () => ({})
  },
  prop: String,
  required: {
    type: Boolean,
    default: undefined
  },
  rules: [Object, Array],
  showMessage: {
    type: Boolean,
    default: true
  },
  size: String,
  tipContent: String,
  validateDisabled: Boolean,
  validateDebounce: Boolean,
  validatePosition: String,
  validateStatus: String,
  validateType: String,
  validateIcon: Object,
  ellipsis: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  extra: String
}

export default defineComponent({
  name: 'TinyFormItem',
  componentName: 'FormItem',
  components: {
    LabelWrap,
    Tooltip,
    IconError: iconError()
  },
  props: formItemProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  },

  render() {
    const {
      state,
      required,
      slots,
      label,
      scopedSlots,
      showMessage,
      inlineMessage,
      ellipsis,
      vertical,
      noStyle,
      handleLabelMouseenter,
      handleMouseleave
    } = this

    const { validateIcon, isErrorInline, isErrorBlock, tooltipType } = state
    const classPrefix = 'tiny-'
    const defaultSlots = slots.default ? slots.default() : null

    if (noStyle) {
      return h('div', defaultSlots)
    }

    const labelSlot = slots.label ? slots.label() : null
    const errorSlot = scopedSlots.error && scopedSlots.error(state.validateMessage)
    const formItemClass = `${classPrefix}form-item--${state.sizeClass ? state.sizeClass : 'default'}`
    const isShowError = state.validateState === 'error' && showMessage && state.form.showMessage
    const validateTag = state.formInstance?.validateTag
    const wrapFragment = state.formInstance?.wrapFragment
    let validateMessage

    const formAppendToBody = state.formInstance?.appendToBody
    const appendToBody =
      typeof this.appendToBody === 'boolean'
        ? this.appendToBody
        : typeof formAppendToBody === 'boolean'
          ? formAppendToBody
          : true
    const validatePosition = this.validatePosition || state.formInstance?.validatePosition || 'top-end'

    const popperOptions = {
      ...state.formInstance?.popperOptions,
      ...this.popperOptions,
      forceAbsolute: !appendToBody,
      onUpdate: (options) => {
        const popper = options.instance._popper
        const translate3d = popper.style.transform
        const matchTranslate = translate3d.match(/translate3d\((\w+)px, (\w+)px, (\w+)px\)/)

        if (!Array.isArray(matchTranslate)) {
          return
        }

        const [x, y, z] = matchTranslate.slice(1)

        popper.style.transform = `translate3d(${x}px, ${parseInt(y, 10)}px, ${z}px)`
      }
    }
    const validateIconNode = validateIcon ? h(validateIcon, { class: 'tooltip-validate-icon' }) : null

    const ItemContent = defaultSlots
      ? defaultSlots.map((vnode) => {
          let item = vnode
          item.props = item.props || {}
          const { type } = item
          // 修复production模式下动态切换size失败问题
          item.dynamicProps = item.dynamicProps || []
          if (!item.dynamicProps.includes('size')) {
            item.dynamicProps.push('size')
          }

          // 添加无障碍属性：required 状态和错误描述关联
          const ariaAttrs = {}
          if (state.isRequired || required) {
            ariaAttrs['aria-required'] = 'true'
          }
          if (isShowError && state.errorId) {
            ariaAttrs['aria-describedby'] = state.errorId
            ariaAttrs['aria-invalid'] = 'true'
          } else {
            ariaAttrs['aria-invalid'] = 'false'
          }

          Object.assign(item.props, {
            size: state.formItemSize || item.props.size,
            mini: state.formItemSize === 'mini' || Boolean(item.props.mini)
          })

          // 将 ARIA 属性添加到 attrs 而不是 props，因为表单组件使用 inheritAttrs: false 并从 $attrs 读取 ARIA 属性
          if (!item.attrs) {
            item.attrs = {}
          }
          Object.assign(item.attrs, ariaAttrs)

          if (type && type.name && type.name.toLowerCase().endsWith('button')) {
            return item
          }

          const propsData = item.props

          if (propsData) {
            if (!state.isRequired) {
              // 兼容 2.0 组件 validation 是否有 required
              state.validationRequired = propsData.validation && !!propsData.validation.required
            }
            // 如果为 2.0 的验证 不会使用 tooltip 组件
            if (propsData.validation) {
              return item
            }
          }

          if (item.type === hooks.Fragment) {
            // 在Vue3默认使用div包裹片段元素，也可以配置为其它标签
            if (wrapFragment) {
              item = h(wrapFragment, [item])
            }
          } else if (item.type === hooks.Text) {
            item = h('span', [item])
          }

          // 兼容重构前逻辑，给item子项添加类名
          let data
          if (!item.props) {
            item.props = {}
          }
          data = item.props
          data.class = normalizeClass(['tiny-tooltip', data.class])
          return item
        })
      : null

    state.isMultiple = ItemContent?.length > 1

    const getFormItemContnet = () => {
      return ItemContent
    }

    const FormItemContnet = ItemContent ? getFormItemContnet() : null
    const ErrorContent =
      isShowError && state.getValidateType === 'text'
        ? errorSlot ||
          h(
            'div',
            {
              class: {
                [`${classPrefix}form-item__error`]: true,
                [`${classPrefix}form-item__error--inline`]: isErrorInline,
                [`${classPrefix}form-item__error--block`]: isErrorBlock
              },
              // 为错误信息添加唯一 ID，用于 aria-describedby 关联
              id: state.errorId,
              role: 'alert', // 使用 alert 角色，屏幕阅读器会立即读出错误
              'aria-live': 'assertive', // 确保错误信息能被立即通知
              'aria-atomic': 'true', // 确保完整读出错误信息
              title: [state.validateMessage]
            },
            [
              validateIcon ? h(validateIcon, { class: 'validate-icon', 'aria-hidden': 'true' }) : null,
              <span class={`${classPrefix}form-item__validate-message`}>{state.validateMessage}</span>
            ]
          )
        : null
    const LabelContent = h(
      LabelWrap,
      {
        isAutoWidth: state.labelStyle && state.labelStyle.width === 'auto',
        updateAll: state.form.labelWidth === 'auto'
      },
      () => [
        labelSlot || label
          ? h(
              'label',
              {
                class: {
                  [`${classPrefix}form-item__label`]: true,
                  'is-disabled': state.disabled
                },
                style: state.labelStyle,
                for: state.labelFor,
                onMouseenter: handleLabelMouseenter,
                onMouseleave: handleMouseleave
              },
              labelSlot || label + state.form.labelSuffix
            )
          : null
      ]
    )
    const ExtraTip = this.extra
      ? h(
          'div',
          {
            class: {
              [`${classPrefix}form-item__extra-tip`]: true
            }
          },
          this.extra
        )
      : null

    return h(
      'div',
      {
        class: {
          [`${classPrefix}form-item`]: true,
          [`${classPrefix}form-item--feedback`]: state.formInstance && state.formInstance.statusIcon,
          'is-error': state.validateState === 'error',
          'is-text': state.getValidateType === 'text',
          'is-validating': state.validateState === 'validating',
          'is-success': state.validateState === 'success',
          'is-required': state.isRequired || required,
          'is-no-asterisk': state.hideRequiredAsterisk,
          [formItemClass]: true
        }
      },
      [
        LabelContent,
        this.showMessage &&
          h(Tooltip, {
            popperClass: `${classPrefix}form__valid`,
            arrowOffset: 0,
            adjustArrow: true,
            type: tooltipType,
            disabled: state.getValidateType !== 'tip',
            placement: validatePosition,
            manual: true,
            appendToBody,
            popperOptions,
            modelValue: isShowError ? state.canShowTip : false,
            zIndex: 'relative',
            renderContent() {
              let tooltipContent
              if (errorSlot) {
                tooltipContent = [errorSlot]
              } else {
                tooltipContent = [
                  validateIconNode,
                  <span class={`${classPrefix}form-item__validate-message`} id={state.errorId}>
                    {state.validateMessage}
                  </span>
                ]
              }

              return tooltipContent
            },
            'onUpdate:modelValue': (value) => {
              state.canShowTip = value
            },
            ref: 'tooltip'
          }),
        h(
          'div',
          {
            class: {
              [`${classPrefix}form-item__content`]: true
            },
            style: state.contentStyle,
            ref: 'content'
          },
          [
            FormItemContnet,
            h(
              Transition,
              {
                name: `${classPrefix}zoom-in-top`
              },
              () => [ErrorContent]
            ),
            ExtraTip
          ]
        )
      ]
    )
  }
})
</script>
