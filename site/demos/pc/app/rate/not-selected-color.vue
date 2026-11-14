<template>
  <tiny-rate v-model="rate" :void-color="color"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from '@hybncloud/tinysmall'

const rate = ref(2)
const color = ref('red')
</script>
