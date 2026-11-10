<template>
  <tiny-rate v-model="rate" :max="8"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from 'tinysmall'

const rate = ref(7)
</script>
