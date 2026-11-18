import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { uploadProps } from './pc.vue'

export { uploadProps }

export default defineComponent({
  name: $prefix + 'Upload',
  props: uploadProps,
  setup(props, context) {
    return $setup({ props, context, template, extend: { ref: 'upload-inner-template' } })
  }
})
