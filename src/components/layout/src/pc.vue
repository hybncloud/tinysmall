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
  <component :is="tag" class="tiny-layout">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/layout/vue'
import { setup, defineComponent } from '@tinysmall/common'

export const layoutProps = {
  tag: {
    type: String,
    default: 'div'
  },
  cols: {
    type: Number,
    default: 12,
    validator: (value: string) => Boolean(~[12, 24].indexOf(value))
  }
}

export default defineComponent({
  name: 'TinyLayout',
  provide() {
    return {
      layout: this
    }
  },
  props: layoutProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
