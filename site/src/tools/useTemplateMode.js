import { reactive, computed } from 'vue'
import { staticDemoPath } from '../views/components-doc/cmp-config'
import { isSaas } from '../const'

const templateModeState = reactive({
  isSaas,
  modeList: ['pc'],
  mode: 'pc'
})

const staticPath = computed(() => {
  return staticDemoPath
})

const optionsList = computed(() => [{ value: 'pc', text: 'PC' }])

export const useTemplateMode = () => {
  return { templateModeState, staticPath, optionsList }
}

export default useTemplateMode
