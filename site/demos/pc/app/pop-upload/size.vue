<template>
  <tiny-pop-upload size="medium" :action="action" disabled></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyPopUpload } from '@hybncloud/tinysmall'

const action = ref('http://localhost:3000/api/upload')
</script>
