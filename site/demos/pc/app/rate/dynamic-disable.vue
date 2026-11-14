<template>
  <tiny-rate v-model="rate" allow-half disabled></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from '@hybncloud/tinysmall'

const rate = ref(2.5)
</script>
