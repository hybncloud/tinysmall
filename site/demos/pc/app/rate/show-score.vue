<template>
  <tiny-rate v-model="rate" show-score score-template="您的评分是{value}"></tiny-rate>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRate } from 'tinysmall'

const rate = ref(3)
</script>
