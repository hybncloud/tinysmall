<template>
  <div class="tiny-guide">
    <slot name="main"></slot>
  </div>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/guide/vue'
import { setup, defineComponent } from '@tinysmall/common'
import '@tinysmall/theme/guide/index.less'
import Shepherd from 'shepherd.js'
import { offset } from '@floating-ui/dom'

export const guideProps = {
  showStep: {
    type: Boolean,
    default: false
  },
  domData: Array,
  mainAxis: {
    type: Number,
    default: 18
  },
  crossAxis: {
    type: Number,
    default: null
  },
  alignmentAxis: {
    type: Number,
    default: null
  },
  popPosition: {
    type: String,
    default: 'bottom'
  },
  arrow: {
    type: Boolean,
    default: true
  },
  modalOverlayOpeningPadding: {
    type: Number,
    default: 0
  },
  modalOverlayOpeningRadius: {
    type: Number,
    default: 0
  },
  lightClass: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '510'
  },
  height: {
    type: String,
    default: ''
  },
  mask: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  }
}

export default defineComponent({
  name: 'TinyGuide',
  props: guideProps,
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
    })
  }
})
</script>
