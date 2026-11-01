<template>
  <div>
    <div class="demo-split">
          <tiny-exception component-page type="nodata"></tiny-exception>
    </div>
  </div>
</template>

<script>
import { TinyException } from '@opentiny/vue'

export default {
  components: {
    TinyException
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.demo-split {
  height: 200px;
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
}
</style>
