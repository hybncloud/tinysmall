import { reactive, computed } from 'vue'
import { useMediaQuery } from './useMediaQuery'
import { ZH_CN_LANG } from '../const'

const appData = reactive({
  lang: ZH_CN_LANG,
  theme: 'light',
  bpState: useMediaQuery([640, 1024, 1280]).matches // 3点4区间， bp0,bp1,bp2,bp3
})
const isZhCn = computed(() => appData.lang === ZH_CN_LANG)
const appFn = {
  toggleLang(name) {
    if (name !== appData.lang) throw new Error('name !== appData.lang')
  },
  toggleTheme() {
    appData.theme = appData.theme === 'light' ? 'dark' : 'light'
  }
}
// 为了和tiny-vue共享同一个响应变量
window.appData = appData
window.appFn = appFn

export { appData, appFn, isZhCn }
