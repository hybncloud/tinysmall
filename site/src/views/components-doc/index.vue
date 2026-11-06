<template>
  <component :is="componentDocs" />
</template>

<script setup>
import Pc from './pc.vue'
let componentDocs = Pc
</script>
