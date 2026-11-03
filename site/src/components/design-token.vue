<template>
  <div class="tiny-token-list">
    <div class="tiny-token-title">
      <h2>{{ capName }} 主题变量</h2>
    </div>
    <VxeTable :data="tokenList" :row-config="{ keyField: 'name' }">
      <VxeColumn field="token" title="Token名称"> </VxeColumn>
      <VxeColumn field="desc" title="描述"> </VxeColumn>
      <VxeColumn field="tokenValue" title="默认值"> </VxeColumn>
    </VxeTable>
  </div>
</template>

<script setup>
import { camelize, capitalize } from '@vue/shared'
import { computed } from 'vue'
 import { VxeTable, VxeColumn } from 'vxe-table'

const props = defineProps({
  name: String,
  tokenList: Array
})

const capName = computed(() => capitalize(camelize(props.name)))
</script>

<style scoped lang="less">
.tiny-token-list {
  padding-bottom: 150px;
}
.tiny-token-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 26px;
}
h2 {
  display: inline-block;
}

.tiny-design {
  font-size: 12px;
  font-weight: normal;
  display: inline-block;
  margin-left: 8px;
  line-height: 22px;
  span {
    color: #808808;
  }
}
.tiny-content-text {
  width: 270px;
  border: 1px solid #191919;
}
.tiny-token-demo {
  border: 1px solid #efeff4;
  margin-bottom: 12px;
}
</style>
