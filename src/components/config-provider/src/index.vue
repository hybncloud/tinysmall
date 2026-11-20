<script lang="ts">
import { hooks, $prefix, defineComponent } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import type { Tag, TextDirection, breakPoint } from './props'
import { configProviderContextKey } from '../index'
import '@tinysmall/theme/config-provider/index.less'

export default defineComponent({
  name: $prefix + 'ConfigProvider',
  props: {
    breakPoints: {
      type: Object as PropType<breakPoint>,
      default: () => {
        return {
          breakPoints: {
            'xs': 480,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            '2xl': 1536
          }
        }
      }
    },
    direction: {
      type: String as PropType<TextDirection>,
      default: 'ltr'
    },
    tag: {
      type: Object as PropType<Tag>,
      default: () => {
        return {
          enable: true,
          name: 'div'
        }
      }
    }
  },
  setup(props, { slots }) {
    const { direction } = hooks.toRefs(props)
    const isRTL = hooks.computed(() => direction.value === 'rtl')
    const cssVar = hooks.computed(() => {
      return {
        '--text-direction': direction.value
      }
    })
    const classNames = hooks.reactive({
      'tiny-config-provider': true,
      'tiny-config-provider__rtl': isRTL
    })
    hooks.provide(configProviderContextKey, props)
    return {
      slots,
      classNames,
      cssVar,
      props
    }
  },
  render() {
    const attr = {
      class: this.classNames,
      style: this.cssVar
    }
    const slots = this.slots?.default?.()
    if (!this.props.tag.enable) {
      return slots
    }
    const tagName = this.props.tag.name ?? 'div'
    return hooks.h(tagName, attr, slots)
  }
}) as any
</script>
