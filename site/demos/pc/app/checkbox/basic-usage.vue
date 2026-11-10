<template>
  <tiny-checkbox v-model="checked" name="tiny-checkbox">复选框</tiny-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox } from 'tinysmall'

const checked = ref(true)
</script>
