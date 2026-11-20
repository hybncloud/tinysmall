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
  <div class="tiny-collapse" :class="{ 'is-medium': size === 'medium' }" role="tablist" aria-multiselectable="true">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/collapse/vue'
import { $constants } from '@tinysmall/renderless/collapse/constants'
import { $prefix, $props, setup, defineComponent } from '@tinysmall/common'


export const collapseProps = {
  ...$props,
  
  accordion: Boolean,
  beforeClose: Function,
  modelValue: {
    type: [Array, String, Number],
    default: () => []
  },
  size: {
    type: String,
    default: ''
  }
}

export default defineComponent({
  name: $prefix + 'Collapse',
  componentName: 'Collapse',
  props: collapseProps,
  provide() {
    return {
      collapse: this
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
