<template>
  <div class="qr-code-container">
    <input v-model="params.color" type="color" />
    <tiny-qr-code v-bind="params"></tiny-qr-code>
  </div>
</template>

<script setup>
import { TinyQrCode } from 'tinysmall'
import { ref } from 'vue'

const params = ref({
  value: '测试二维码数据',
  color: '#1677ff',
  size: 250,
  style: { background: '#f5f5f5', padding: '24px' }
})
</script>
