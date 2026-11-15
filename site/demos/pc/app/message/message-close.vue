<template>
  <div>
    <div class="content">
      <tiny-button @click="btnClick">显示关闭按钮</tiny-button>
    </div>
  </div>
</template>

<script setup>
import { TinyButton, TinyMessage } from '@hybncloud/tinysmall'

function btnClick() {
  TinyMessage.message({
    status: 'info',
    message: '是否显示关闭按钮',
    messageClosable: true
  })
}
</script>

<style scoped>
.content {
  margin: 8px;
}
</style>
