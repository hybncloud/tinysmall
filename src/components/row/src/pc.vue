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
  <component :is="tag" :class="state.className" :style="state.style" class="tiny-row">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/row/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'

export const rowProps = {
    ...$props,
    flex: Boolean,
    gutter: {
      type: Number,
      default: 0,
      validator(value: number) {
        return value >= 0
      }
    },
    justify: {
      type: String,
      default: 'start',
      validator: (value: string) => Boolean(~['start', 'center', 'end', 'space-between', 'space-around'].indexOf(value))
    },
    align: {
      type: String,
      default: 'top',
      validator: (value: string) => Boolean(~['top', 'middle', 'bottom'].indexOf(value))
    },
    order: {
      type: String,
      validator: (value: string) => Boolean(~['asc', 'des'].indexOf(value))
    },
    tag: {
      type: String,
      default: 'div'
    },
    noSpace: {
      type: Boolean,
      default: false
    }
  }

export default defineComponent({
  name: $prefix + 'Row',
  componentName: 'Row',
  props: rowProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
