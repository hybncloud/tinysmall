import { createApp } from 'vue'
import 'uno.css'
import { createI18n } from 'vue-i18n'
import { initI18n } from '@opentiny/vue-locale'
import { Loading } from '@opentiny/vue'
import App from '@/App.vue'

import './style.css'
import router from './router'
const app = createApp(App)

const mode = 'pc'

app.config.globalProperties.tiny_mode = { value: 'pc' }
app.config.globalProperties.isPcMode = mode === 'pc'
app.config.globalProperties.isMobileMode = false
app.use(initI18n({ createI18n, i18n: { legacy: false } }))
app.use(Loading)
app.use(router)
app.mount('#app')
