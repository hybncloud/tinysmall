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
  <div :class="['tiny-cascader-panel', border && 'is-bordered']" @keydown="handleKeyDown">
    <cascader-menu
      v-for="(menu, index) in state.menus"
      :index="index"
      :key="index"
      :nodes="menu"
      :onlyUsePanel="onlyUsePanel"
    ></cascader-menu>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent, $props } from '@tinysmall/common'
import { renderless, api } from '@tinysmall/renderless/cascader-panel/vue'
import CascaderMenu from '@tinysmall/cascader-menu'
import type { ICascaderPanelApi } from '@tinysmall/renderless/types/cascader-panel.type'
import '@tinysmall/theme/cascader-panel/index.less'

export default defineComponent({
  name: $prefix + 'CascaderPanel',
  componentName: $prefix + 'CascaderPanel',
  components: {
    CascaderMenu
  },
  props: {
    ...$props,
    modelValue: {},
    options: Array,
    props: Object,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function,
    onlyUsePanel: Boolean
  },
  provide() {
    return {
      panel: this
    }
  },
  emits: ['update:modelValue', 'change', 'close', 'expand-change', 'active-item-change', 'load-data'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ICascaderPanelApi
  }
})
</script>
