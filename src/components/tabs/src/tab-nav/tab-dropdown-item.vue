<template>
  <tiny-dropdown-item @click.native="itemClick">
    <slot></slot>
  </tiny-dropdown-item>
</template>

<script lang="ts">
import { defineComponent } from '@tinysmall/common'
import DropdownItem from '@tinysmall/dropdown-item'

export default defineComponent({
  name: 'TinyTabDropdownItem',
  components: {
    TinyDropdownItem: DropdownItem
  },
  props: {
    itemClick: { type: Function }
  }
})
</script>
