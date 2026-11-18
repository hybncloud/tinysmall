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
  <span
    v-if="!state.isDisplayOnly"
    role="switch"
    :aria-checked="state.currentValue === trueValue"
    :aria-disabled="disabled"
    :aria-label="state.showText ? (state.currentValue === trueValue ? 'on' : 'off') : undefined"
    :class="[state.wrapClasses, state.showText ? 'tiny-switch__text' : '']"
    :tabindex="tabindex"
    :style="state.switchStyle"
    @click="toggle"
    @keydown.space="toggle"
    @keydown.enter="toggle"
  >
    <span :class="state.innerClasses">
      <div v-if="!mini && state.showText && !loading">
        <slot v-if="state.currentValue === trueValue" name="open">ON</slot>
        <slot v-if="state.currentValue === falseValue" name="close">OFF</slot>
      </div>
    </span>
    <span class="tiny-switch__button">
      <icon-loading
        v-if="loading"
        :class="[
          state.currentValue === trueValue ? 'tiny-switch__on-loading' : 'tiny-switch__off-loading',
          mini ? 'tiny-switch__loading-size' : ''
        ]"
      />
      <slot v-if="state.currentValue === trueValue && !loading" name="active-icon"></slot>
      <slot v-if="state.currentValue === falseValue && !loading" name="inactive-icon"></slot>
    </span>
  </span>
  <span v-else :style="state.displayOnlyStyle">
    <slot v-if="state.currentValue === trueValue" name="open">{{ t('yes') }}</slot>
    <slot v-if="state.currentValue === falseValue" name="close">{{ t('no') }}</slot></span
  >
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/switch/vue'
import { $props, props, setup, defineComponent } from '@tinysmall/common'
import '@tinysmall/theme/switch/index.less'
import type { ISwitchApi } from '@tinysmall/renderless/types/switch.type'
import { IconLoadingShadow } from '@tinysmall/icon'

export const $constants = {
  PC_PREFIXCLS: 'tiny-switch',
  MOBILE_PREFIXCLS: 'tiny-mobile-switch',
  Mode: 'pc',
  prefixcls(mode) {
    return mode === this.Mode ? this.PC_PREFIXCLS : this.MOBILE_PREFIXCLS
  }
}

export const switchProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean || undefined,
    default: false
  },
  types: {
    type: String
  },
  falseColor: String,
  falseValue: {
    type: [String, Number, Boolean],
    default: false
  },
  mini: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: false
  },
  size: [Number, String],
  tabindex: {
    type: String,
    default: '1'
  },
  trueColor: String,
  trueValue: {
    type: [String, Number, Boolean],
    default: true
  },
  beforeChange: Function,
  displayOnly: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  width: [Number, String]
}

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: switchProps,
  components: { IconLoading: IconLoadingShadow() },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISwitchApi
  }
})
</script>
