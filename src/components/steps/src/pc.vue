<script lang="ts">
import { $props, $prefix, defineComponent, renderComponent } from '@tinysmall/common'
import PcStandardTemplate from './pc/pc-standard.vue'
import PcAdvancedTemplate from './pc/pc-advanced.vue'
import PcLineTemplate from './pc/pc-line.vue'
import PcDotTemplate from './pc/pc-dot.vue'
import '@tinysmall/theme/steps/index.less'

const template = (mode, props) => {
  if (props.advanced) {
    return PcAdvancedTemplate
  } else if (props.line) {
    return PcLineTemplate
  } else if (props.dot) {
    return PcDotTemplate
  } else {
    return PcStandardTemplate
  }
}

export const stepsProps = {
  ...$props,
  nameField: {
    type: String,
    default: 'name'
  },
  countField: {
    type: String,
    default: 'count'
  },
  statusField: {
    type: String,
    default: 'status'
  },
  data: [Object, Array],
  space: [String, Number],
  active: {
    type: Number,
    default: -1
  },
  visibleNum: {
    type: Number,
    default: 5
  },
  descriptionField: {
    type: String,
    default: 'description'
  },
  size: {
    type: String,
    default: 'medium'
  },
  vertical: {
    type: Boolean,
    default: false
  },
  advanced: {
    type: Boolean,
    default: false
  },
  line: Boolean,
  dot: Boolean, // tiny新增
  duration: {
    type: Number,
    default: 300
  },
  noArrow: Boolean,
  flex: Boolean,
  contentCenter: Boolean
}

export default defineComponent({
  name: $prefix + 'Steps',
  props: stepsProps,
  setup(props, context) {
    return renderComponent({ view: template('pc', props), props, context })
  }
})
</script>
