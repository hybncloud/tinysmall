<template>
  <tiny-file-upload :action="action" :multiple="true">
    <template #trigger>
      <tiny-button>点击上传</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { TinyFileUpload, TinyButton } from '@hybncloud/tinysmall'

const action = ref('http://localhost:3000/api/upload')
</script>
