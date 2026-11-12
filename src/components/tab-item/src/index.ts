import { $props, $prefix, $setup, defineComponent } from '@tinysmall/common'
import template from 'virtual-template?pc'

export const $constants = {}

export const tabItemProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  title: String,
  name: String,
  withClose: Boolean,
  disabled: Boolean,
  lazy: Boolean,
  selected: Boolean,
  renderTitle: Function,
  renderSetting: Function
}

export default defineComponent({
  name: $prefix + 'TabItem',
  componentName: 'TabItem',
  props: tabItemProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
