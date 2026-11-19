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
  <div class="tiny-badge__wrapper">
    <span v-if="data">{{ data }}</span>
    <slot v-else />
    <div
      v-if="!hidden && (state.content || state.content === 0 || isDot)"
      class="tiny-badge"
      :class="[
        isDot ? 'tiny-badge--default' : '',
        state.isOverstep ? 'tiny-badge--max' : '',
        type ? 'tiny-badge--' + type : '',
        badgeClass || ''
      ]"
      :style="!isDot ? state.transform : ''"
    >
      <slot name="content">
        <a v-if="state.href" :href="state.href" :target="target" rel="noopener noreferrer">{{ state.content }}</a>
        <span class="tiny-badge__content-text" v-if="!state.href">
          <template v-if="!isDot">
            {{ state.content }}
          </template>
        </span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/badge/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import type { IBadgeApi } from '@tinysmall/renderless/types/badge.type'
import '@tinysmall/theme/badge/index.less'

export const badgeProps = {
  ...$props,
  isDot: {
    type: Boolean,
    default: false
  },
  max: Number,
  value: [String, Number],
  modelValue: [String, Number],
  href: String,
  target: String,
  hidden: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    validator: (value: string) =>
      Boolean(~['primary', 'success', 'warning', 'info', 'danger', 'icon', 'label'].indexOf(value))
  },
  badgeClass: String,
  offset: {
    type: Array,
    default: () => [0, 0]
  },
  data: [String, Number]
}

export default defineComponent({
  name: $prefix + 'Badge',
  props: badgeProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IBadgeApi
  }
})
</script>
