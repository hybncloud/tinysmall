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
  <div class="tiny-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <ol role="list">
      <slot>
        <tiny-breadcrumb-item
          v-for="(item, index) in options"
          :option="item"
          :label="item[textField]"
          :key="index"
          :to="item.to"
          :replace="item.replace"
        >
        </tiny-breadcrumb-item>
      </slot>
    </ol>
  </div>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/breadcrumb/vue'
import { $constants } from '@tinysmall/renderless/breadcrumb/constants'
import { setup, defineComponent } from '@tinysmall/common'
import BreadcrumbItem from '@tinysmall/breadcrumb-item'

export const breadcrumbProps = {
  separator: {
    type: String,
    default: ''
  },
  separatorIcon: {
    type: Object
  },
  textField: {
    type: String,
    default: 'label'
  },
  size: {
    type: String,
    default: '',
    validator: (val: string) => [/* 'large', */ 'medium', /* 'small', 'mini',  */ ''].includes(val)
  },
  options: {
    type: Array,
    default: () => []
  }
}

export default defineComponent({
  name: 'TinyBreadcrumb',
  components: {
    TinyBreadcrumbItem: BreadcrumbItem
  },
  props: breadcrumbProps,
  provide() {
    return {
      breadcrumb: this
    }
  },
  emits: ['select'],
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
