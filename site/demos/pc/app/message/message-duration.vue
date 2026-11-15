<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick">消息时长</tiny-button>
    </div>
  </div>
</template>

<script setup>
import { TinyButton, TinyMessage } from '@hybncloud/tinysmall'

function btnClick() {
  TinyMessage.message({
    status: 'info',
    message: '自定义消息的内容，5s 后得自动关闭',
    duration: 5000
  })
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
