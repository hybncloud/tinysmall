<template>
  <div class="hp100vh f-c">
    <div class="p10 b-b f-r f-box-center">
      <div class="f-r f-box-center">
        <div>TinySmall</div>
      </div>
      <div class="ml-auto">
        <tiny-button size="small" @click="toggleLocale">
          {{ currentLang === 'zhCN' ? 'EN' : '中文' }}
        </tiny-button>
      </div>
    </div>
    <div class="fi-1 of-auto">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TinyButton } from 'tinysmall'
import { ref } from 'vue'
const currentLang = ref('zhCN')
const toggleLocale = () => {
  currentLang.value = currentLang.value === 'zhCN' ? 'enUS' : 'zhCN'
}
</script>
