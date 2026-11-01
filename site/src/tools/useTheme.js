import { watch, computed } from 'vue'
import { hooks } from '@opentiny/vue-common'
import { router } from '@site/router'
import { appData } from './appData'
import { CURRENT_THEME_KEY, DEFAULT_THEME, themeToolValuesMap } from '../const'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'

const isEn = appData.lang === 'enUS'

const themeData = [
]

const currentThemeKey = hooks.ref(DEFAULT_THEME)

watch(
  () => currentThemeKey.value,
  (newVal) => {
    localStorage.setItem(CURRENT_THEME_KEY, newVal)
  }
)

const designConfig = computed(() => {
  return {}
})

const changeTheme = (themeKey) => {
  router.push({
    params: {
      theme: themeKey
    },
    hash: router?.currentRoute.value.hash
  })
}

// 返回拷贝，防止原始数据被修改
const getThemeData = () => JSON.parse(JSON.stringify(themeData))

let initWatchRoute = false
let loadedTheme = false
const watchRoute = () => {
  if (initWatchRoute) {
    return
  }
  initWatchRoute = true
  watch(
    () => router.currentRoute.value.params.theme,
    (val) => {
      if (!loadedTheme && themeToolValuesMap[val]) {
        currentThemeKey.value = val
        const themeTool = new TinyThemeTool()
        themeTool.changeTheme(themeToolValuesMap[val])
        document.documentElement.classList.add(val)
        loadedTheme = true
      }
    }
  )
}

export default function useTheme() {
  !initWatchRoute && watchRoute()
  return {
    getThemeData,
    changeTheme,
    currentThemeKey,
    designConfig,
    defaultTheme: DEFAULT_THEME
  }
}
