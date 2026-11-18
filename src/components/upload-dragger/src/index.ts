import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { UploadDraggerProps } from './pc.vue'

export { UploadDraggerProps }

export default defineComponent({
  name: $prefix + 'UploadDragger',
  props: UploadDraggerProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
