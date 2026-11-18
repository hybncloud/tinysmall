import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'
import { uploadListProps } from './pc.vue'

export { uploadListProps }

export default defineComponent({
  name: $prefix + 'UploadList',
  props: uploadListProps,
  setup(props, context) {
    return $setup({ props, context, template, extend: { ref: 'upload-list-inner-template' } })
  }
})
