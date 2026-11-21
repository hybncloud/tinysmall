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
<template>
  <button
    class="tiny-button"
    @click="handleClick"
    :disabled="state.buttonDisabled || loading"
    :aria-disabled="state.buttonDisabled || loading"
    :aria-busy="loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'tiny-button--' + type : '',
      size ? 'tiny-button--' + size : '',
      {
        'is-disabled': state.buttonDisabled,
        'is-loading': loading,
        'is-plain': state.plain,
        'is-ghost': ghost,
        'is-round': state.round,
        'is-circle': circle,
        'is-icon': icon && !loading && (text || slots.default),
        'is-only-icon': icon && !loading && !(text || slots.default)
      }
    ]"
    :style="customStyle"
    :tabindex="tabindex"
  >
    <icon-loading v-if="loading" class="tiny-icon-loading tiny-svg-size" aria-hidden="true" />
    <component v-if="icon && !loading" :is="icon" :class="{ 'is-text': text || slots.default }" />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/button/vue'
import { setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import type { SlotsType } from 'vue'
import { iconLoadingShadow } from '@tinysmall/icon'
import '@tinysmall/theme/button/index.less'

export const buttonProps = {
  /** 展示按钮不同的状态，设置为text则展示为文本按钮。可取值为：'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'  */
  type: {
    type: String,
    default: 'default'
  },
  /** 设置原生的tabindex属性 */
  tabindex: { type: String, default: '0' },
  /** 按钮左侧展示的图标，接收为Icon组件  */
  icon: {
    type: [Object, String],
    default: ''
  },
  /** 按钮显示的文本 */
  text: {
    type: String,
    default: ''
  },
  /** 设置按钮禁用时间，防止重复提交，单位毫秒 */
  resetTime: {
    type: Number,
    default: 1000
  },
  /** 对应按钮原生 type 属性  */
  nativeType: {
    type: String,
    default: 'button'
  },
  /** 定义按钮尺寸 */
  size: {
    type: String,
    default: '',
    validator(val: string) {
      return ['large', 'medium', 'small', 'mini', ''].includes(val)
    }
  },
  /** 是否圆角按钮 */
  round: {
    type: Boolean,
    default: undefined
  },
  /** 是否朴素按钮  */
  plain: Boolean,
  /** 是否圆形按钮  */
  circle: Boolean,
  /** 是否加载中状态 */
  loading: Boolean,
  /** 是否被禁用按钮 */
  disabled: Boolean,
  /** 是否默认聚焦 */
  autofocus: Boolean,
  /** 自定义样式 */
  customStyle: {
    type: Object,
    default: () => ({})
  },
  /** 是否幽灵按钮 */
  ghost: Boolean,
  /** 点击事件 */
  onClick: {
    type: Function as PropType<(ev: MouseEvent) => void>
  }
}

export default defineComponent({
  name: 'TinyButton',
  inject: {
    buttonGroup: {
      default: ''
    }
  },
  slots: Object as SlotsType<{
    /** 默认插槽 */
    default: {}
  }>,
  emits: ['click'],
  props: buttonProps,
  components: { IconLoading: iconLoadingShadow() },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
