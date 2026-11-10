<template>
  <tiny-switch @change="handleChange"></tiny-switch>
</template>

<script setup>
import { TinySwitch, TinyModal } from 'tinysmall'

function handleChange(val) {
  TinyModal.message({ message: `开关值：${val}`, status: 'info' })
}
</script>
