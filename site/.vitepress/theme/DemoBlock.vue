<script setup lang="ts"></script>

<template>
  <div class="DemoBlock">
    <slot />
  </div>
</template>

<style lang="less" scoped>
.DemoBlock {
  display: flex;
  flex-direction: column;
  color: var(--tv-color-text);
  background: #fff;
  border-radius: 6px;
  border: 1px solid #dcdfe6;
  padding: 26px 18px 42px;
  margin: 1rem 0;
  overflow-x: auto;
}
</style>
