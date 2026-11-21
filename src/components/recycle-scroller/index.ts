import RecycleScroller from './src/index'
import { version } from 'package.json'

/* istanbul ignore next */
RecycleScroller.install = function (Vue) {
  Vue.component(RecycleScroller.name, RecycleScroller)
}

RecycleScroller.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    RecycleScroller.install(window.Vue)
  }
}

export default RecycleScroller
