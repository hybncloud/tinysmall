import { createApp } from 'vue'
import 'uno.css'
import { t } from '@tinysmall/locale'
import { TinyLoading } from '@hybncloud/tinysmall'
import App from './App.vue'

import './style.css'
import router from './router'
const app = createApp(App)

const mode = 'pc'

app.config.globalProperties.tiny_mode = { value: 'pc' }
app.config.globalProperties.isPcMode = mode === 'pc'
app.config.globalProperties.isMobileMode = false
app.config.globalProperties.$t = t
app.use(TinyLoading)
app.use(router)
app.mount('#app')
