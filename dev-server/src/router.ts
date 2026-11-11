import { createRouter, createWebHistory } from 'vue-router'
import Pc from './pc.vue'
import { modeState } from './useModeCtx.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Pc,
      meta: {
        demo: true
      }
    },
    {
      path: '/:cmpName',
      component: Pc,
      meta: {
        demo: true
      }
    },
    {
      path: '/:cmpName/:codeFile',
      component: Pc,
      meta: {
        demo: true
      }
    }
  ]
})

router.afterEach((to, _from, failure) => {
  if (!failure) {
    if (to.meta && to.meta.demo) {
      modeState.pathName = Array.isArray(to.params.cmpName) ? to.params.cmpName[0] : to.params.cmpName
      modeState.demoId = Array.isArray(to.params.codeFile) ? to.params.codeFile[0] : to.params.codeFile
    } else {
      modeState.pathName = null
      modeState.demoId = null
    }
  }
})

export default router
