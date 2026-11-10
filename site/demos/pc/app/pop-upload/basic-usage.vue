<template>
  <tiny-pop-upload :action="action" upload-name="inputName" :data="requestData"></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyPopUpload } from 'tinysmall'

const action = ref('http://localhost:3000/api/upload')
const requestData = ref({
  id: 123
})
</script>
