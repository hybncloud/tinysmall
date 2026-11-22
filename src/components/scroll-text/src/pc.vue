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
  <div class="tiny-scroll-text__wrapper">
    <div
      ref="wrap"
      :class="['tiny-scroll-text', { 'width-adapt': widthAdapt }]"
      @mouseenter="stopAnimation"
      @mouseleave="startAnimation"
    >
      <div ref="content" class="tiny-scroll-text__content">
        <div :class="[{ stop: state.isStop }, direction]" :style="state.bindStyle">
          <slot>
            <p>{{ text }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/scroll-text/vue'
import { $constants } from '@tinysmall/renderless/scroll-text/constants'
import { setup, defineComponent } from '@tinysmall/common'

export const scrollTextProps = {
  text: {
    type: String,
    default: 'ScrollText'
  },
  time: {
    type: Number,
    default: 5
  },
  styles: {
    type: String,
    default: ''
  },
  direction: {
    type: String,
    default: 'left',
    validator: (value: string) => Boolean(~['up', 'left', 'down', 'right'].indexOf(value))
  },
  hoverStop: {
    type: Boolean,
    default: true
  },
  widthAdapt: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: 'TinyScrollText',
  props: scrollTextProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
