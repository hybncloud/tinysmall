<template>
  <tiny-dropdown-item @click.native="itemClick">
    <slot></slot>
  </tiny-dropdown-item>
</template>

<script lang="ts">
import { $prefix, $props, defineComponent } from '@tinysmall/common'
import DropdownItem from '@tinysmall/dropdown-item'

export default defineComponent({
  name: $prefix + 'TabDropdownItem',
  components: {
    TinyDropdownItem: DropdownItem
  },
  props: {
    ...$props,
    itemClick: { type: Function }
  }
})
</script>
