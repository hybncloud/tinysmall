<script setup lang="ts"></script>

<template>
  <div class="DemoBlock">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.DemoBlock {
  background: #fff;
  border-radius: 6px;
  border: 1px solid #dcdfe6;
  padding: 26px 18px;
  margin: 1rem 0;
  overflow-x: auto;
}
</style>
