<template>
  <div class="tiny-exception" :class="exceptionClass">
    <div class="tiny-exception-body">
      <div class="tiny-exception__image bg-cover" :class="{ 'tiny-exception__componentpage-image': componentPage }">
        <slot name="icon">
          <component :is="constants.ICONCONFIG[type.toUpperCase()]" v-if="state.urlType" />
        </slot>
      </div>
      <slot name="content">
        <div class="tiny-exception__description">
          <div class="tiny-exception__message" :class="{ 'tiny-exception__componentpage': componentPage }">
            {{ t(constants.INTERNALCONFIG[type.toUpperCase()]) }}
          </div>
          <div class="tiny-exception__submessage" v-if="subMessage">
            {{ subMessage }}
          </div>
          <div class="tiny-exception__footer">
            <slot></slot>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/exception/vue'
import { $constants } from '@tinysmall/renderless/exception/constants'
import { $prefix, setup, defineComponent, $props } from '@tinysmall/common'
import Button from '@tinysmall/button'
import '@tinysmall/theme/exception/index.less'

import {
  iconNoData,
  iconNoNews,
  iconNoPerm,
  iconNoResult,
  iconWeaknet,
  iconPageNoperm,
  iconPageNothing,
  iconPageServererror,
  iconPageWeaknet
} from '@tinysmall/icon'

export const exceptionProps = {
    ...$props,
    type: {
      type: String,
      default: 'nodata'
    },
    message: String,
    subMessage: String,
    exceptionClass: String,
    imageUrl: String,
    pageEmpty: {
      type: Boolean,
      default: false
    },
    componentPage: {
      type: Boolean,
      default: false
    }
  }

export default defineComponent({
  name: $prefix + 'Exception',
  components: {
    TinyButton: Button,
    IconNoData: iconNoData(),
    IconNoNews: iconNoNews(),
    IconNoPerm: iconNoPerm(),
    IconNoResult: iconNoResult(),
    IconWeaknet: iconWeaknet(),
    IconPageNoperm: iconPageNoperm(),
    IconPageNothing: iconPageNothing(),
    IconPageServererror: iconPageServererror(),
    IconPageWeaknet: iconPageWeaknet()
  },
  emits: ['click'],
  props: exceptionProps,
  setup(props, context): any {
    return {
      // 模板以 constants 访问静态常量（替代原 _constants prop 注入）
      constants: $constants,
      ...setup({
        props,
        context,
        renderless,
        api,
        mono: true
      })
    }
  }
})
</script>
