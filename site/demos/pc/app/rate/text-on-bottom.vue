<template>
  <tiny-rate v-model="rate" text-on-bottom></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from 'tinysmall'

const rate = ref(3)
</script>
