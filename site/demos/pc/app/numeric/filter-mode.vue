<template>
  <tiny-numeric v-model="value" title="请选择" shape="filter" clearable blank></tiny-numeric>
</template>

<script setup>
import { ref } from 'vue'
import { TinyNumeric } from '@hybncloud/tinysmall'

const value = ref(1)
</script>
