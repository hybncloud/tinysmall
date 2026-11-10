<template>
  <tiny-numeric v-model="value" :mouse-wheel="mouseWheel"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TinyNumeric } from 'tinysmall'

const value = ref(1)
const mouseWheel = ref(true)
</script>
