import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@site/views/layout/layout.vue'

const Components = () => import('@site/views/components-doc/index.vue')
const Docs = () => import('@site/views/docs/docs.vue')
const Overview = () => import('@site/views/overview.vue')

let routes = [
  // 组件总览
  {
    path: `/overview`,
    component: Layout,
    name: 'overview',
    children: [{ name: 'Overview', path: '', component: Overview, meta: { title: '组件总览 | TinyVue' } }]
  },
  // 文档
  {
    path: `/docs/:docId`,
    component: Layout,
    name: 'docs',
    children: [{ name: 'Docs', path: '', component: Docs }]
  },
  // 组件
  {
    path: `/components/:cmpId`,
    component: Layout,
    name: 'components',
    children: [{ name: 'Components', path: '', component: Components }]
  },
  // 未匹配到目标地址时，进行路由重定向
  {
    path: '/:pathMatch(.*)*',
    redirect: `/overview`
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 为浏览器添加title
router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})
export { router }
