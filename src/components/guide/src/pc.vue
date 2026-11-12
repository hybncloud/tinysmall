<template>
  <div class="tiny-guide">
    <slot name="main"></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/guide/vue'
import { props, setup, defineComponent } from '@tinysmall/common'
import '@tinysmall/theme/guide/index.less'
import Shepherd from 'shepherd.js'
import { offset } from '@floating-ui/dom'

export default defineComponent({
  props: [
    ...props,
    'showStep',
    'domData',
    'mainAxis',
    'crossAxis',
    'alignmentAxis',
    'popPosition',
    'modalOverlayOpeningPadding',
    'modalOverlayOpeningRadius',
    'arrow',
    'lightClass',
    'width',
    'mask',
    'height',
    'showClose'
  ],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: {
        Shepherd,
        offset
      }
    })
  }
})
</script>
