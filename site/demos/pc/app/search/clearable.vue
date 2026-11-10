<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词" clearable></tiny-search>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySearch } from 'tinysmall'

const value = ref('')
</script>
