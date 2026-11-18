import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { $constants, statisticProps } from './pc.vue'

export { statisticProps }
export { $constants }

export default defineComponent({
  name: $prefix + 'Statistic',
  props: statisticProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
