<template>
  <tiny-user-head v-model="text" class="head-item" type="label" round></tiny-user-head>
</template>

<script setup>
import { ref } from 'vue'
import { TinyUserHead } from 'tinysmall'

const text = ref('文字')
</script>
