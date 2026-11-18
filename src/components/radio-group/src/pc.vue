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
  <component
    :is="state.tag"
    class="tiny-radio-group"
    :class="[vertical ? 'list-inline' : '']"
    role="radiogroup"
    @keydown="handleKeydown"
    ref="group"
  >
    <slot>
      <template v-if="type === 'radio'">
        <radio v-for="(item, index) in options" :display-only="displayOnly" :key="index" v-bind="item"></radio>
      </template>
      <template v-if="type === 'button'">
        <radio-button v-for="(item, index) in options" :key="index" v-bind="item"></radio-button>
      </template>
    </slot>
  </component>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/radio-group/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import Radio from '@tinysmall/radio'
import RadioButton from '@tinysmall/radio-button'
import type { IRadioGroupApi } from '@tinysmall/renderless/types/radio-group.type'

export const radioGroupProps = {
  ...$props,
  modelValue: {},
  size: {
    type: String as PropType<'mini' | 'small' | 'medium'>,
    default: ''
  },
  fill: String,
  textColor: String,
  disabled: Boolean,
  vertical: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'radio'
  },
  showTips: {
    type: Boolean,
    default: false
  },
  displayOnly: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'RadioGroup',
  componentName: 'RadioGroup',
  components: {
    Radio,
    RadioButton
  },
  emits: ['change', 'update:modelValue'],
  props: radioGroupProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true }) as unknown as IRadioGroupApi
  }
})
</script>
