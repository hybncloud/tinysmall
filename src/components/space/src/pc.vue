<script lang="ts">
import { defineComponent, setup, h } from '@tinysmall/common'
import type { SlotsType } from 'vue'
import type { PropType } from 'vue'
import { renderless } from '@tinysmall/renderless/space/vue'
import type { ISpaceApi } from '@tinysmall/renderless/types/space.type'

export const spaceProps = {
  /** 设置空间尺寸，可为字符串、数字或 [水平, 垂直] 数组 */
  size: {
    type: [String, Number, Array] as PropType<string | number | [string | number, string | number]>,
    default: 'small'
  },
  /** 主轴方向，row 或 column */
  direction: {
    type: String as PropType<'row' | 'column'>,
    default: 'row'
  },
  /** 对齐方式，start/center/end */
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'start'
  },
  /** 主轴上的排列方式 */
  justify: {
    type: String as PropType<'start' | 'center' | 'end' | 'space-between' | 'space-around'>,
    default: 'start'
  },
  /** 是否自动换行 */
  wrap: {
    type: Boolean,
    default: false
  },
  order: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  /** 自定义 class 类名，取自原 pc.vue props 数组 */
  customClass: [String, Object, Array],
  /** 自定义样式 */
  customStyle: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  }
}

export default defineComponent({
  name: 'TinySpace',
  slots: Object as SlotsType<{
    default: {} // 默认插槽
  }>,
  name: 'TinySpace',
  props: spaceProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  },
  render() {
    // 如果 renderless 层有 orderedChildren，就用它，否则 fallback 到默认 slot
    const children = this.orderedChildren?.length ? this.orderedChildren : this.$slots.default?.() || []

    return h(
      'div',
      {
        class: this.customClass,
        style: [
          this.state?.gapStyle,
          {
            display: 'flex',
            flexDirection: this.direction || 'row',
            alignItems: this.align || 'flex-start',
            justifyContent: this.justify || 'flex-start',
            flexWrap: this.wrap ? 'wrap' : 'nowrap',
            ...this.customStyle
          }
        ]
      },
      children
    )
  }
})
</script>
