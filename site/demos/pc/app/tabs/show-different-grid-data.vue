<template>
  <tiny-tabs v-model="activeName" tab-style="card">
    <tiny-tab-item title="表格组件 A" name="first"> 表格组件 </tiny-tab-item>
    <tiny-tab-item title="表格组件 B" name="second"> 表格组件 </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
import { TinyTabs, TinyTabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>
