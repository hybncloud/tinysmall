import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { guideProps } from './pc.vue'

export { guideProps }

export default defineComponent({
  name: $prefix + 'Guide',
  props: guideProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
