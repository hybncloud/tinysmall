<template>
  <div class="hp100vh f-c">
    <div class="m10 pb10 b-b">
      <div style="float: right; display: flex; align-items: center; gap: 12px">
        <tiny-button size="small" @click="toggleLocale">
          {{ currentLang === 'zhCN' ? 'EN' : '中文' }}
        </tiny-button>
      </div>
      <div class="f-r f-box-center">
        <div class="f22 sm-show mr16 cur-hand d-none" @click="toggleFixedMenu">
          <icon-editor-menu-left v-if="state.showFixedMenu" />
          <icon-editor-menu-right v-else />
        </div>
        <div>
          TinySmall
        </div>
      </div>
    </div>
    <div class="fi-1 of-auto">
      <tiny-pc v-if="modeState.mode === 'pc'" :show-fixed-menu="state.showFixedMenu"></tiny-pc>
    </div>
  </div>
</template>

<script>
import './style.css'
import { ButtonGroup, Link, Button } from '@opentiny/vue'
import { iconEditorMenuRight, iconEditorMenuLeft } from '@opentiny/vue-icon'
import TinyPc from './pc.vue'
import { hooks } from '@opentiny/vue-common'
import { useModeCtx } from './uses'

export default {
  components: {
    TinyPc,
    TinyButtonGroup: ButtonGroup,
    TinyButton: Button,
    TinyLink: Link,
    IconEditorMenuRight: iconEditorMenuRight(),
    IconEditorMenuLeft: iconEditorMenuLeft()
  },
  setup() {
    const { state: modeState, fn: modeFn } = useModeCtx()
    const state = hooks.reactive({
      groupData: [
        { text: 'PC', value: 'pc' }
      ],
      vueVersion: hooks.version,
      showFixedMenu: false
    })

    hooks.onMounted(() => {
      hooks.watch(
        () => modeState.mode,
        (mode, preMode) => {
          if (mode !== preMode && preMode !== '') {
            modeFn.changeMode(modeState.mode)
            modeFn.cacheCtx()
            modeFn.pushToUrl()
            location.reload() // 必须刷新页面，重进main.ts才行
          }
        },
        {
          flush: 'sync'
        }
      )
    })

    const toggleFixedMenu = () => {
      state.showFixedMenu = !state.showFixedMenu
    }

    // 解析url, 生成modeState
    modeFn.loadPage()

    const proxy = hooks.getCurrentInstance()?.proxy
    const currentLang = hooks.ref(proxy?.$i18n?.locale || 'zhCN')
    const toggleLocale = () => {
      if (proxy?.$i18n) {
        currentLang.value = currentLang.value === 'zhCN' ? 'enUS' : 'zhCN'
        proxy.$i18n.locale = currentLang.value
      }
    }

    return {
      state,
      modeState,
      toggleFixedMenu,
      currentLang,
      toggleLocale
    }
  }
}
</script>
