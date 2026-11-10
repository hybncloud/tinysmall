<template>
  <tiny-rate v-model="rate" size="26px" space="36px"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from 'tinysmall'

const rate = ref(2)
</script>
