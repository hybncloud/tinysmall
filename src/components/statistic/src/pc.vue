<template>
  <div class="tiny-statistic">
    <div
      class="tiny-statistic__title"
      v-if="title && (!(title instanceof Object) || (title instanceof Object && title.position !== 'bottom'))"
    >
      <div v-if="$slots.title">
        <slot name="title"> </slot>
      </div>
      <div v-else-if="typeof title === 'string'">{{ title }}</div>
      <div v-else-if="title instanceof Object">
        {{ title.value }}
      </div>
    </div>
    <div
      :class="[
        'tiny-statistic__slots',
        title && title.position === 'bottom' ? 'tiny-statistic__description-margin' : ''
      ]"
    >
      <div v-if="$slots.prefix || prefix" class="tiny-statistic__prefix">
        <slot name="prefix">
          <span>{{ prefix }}</span>
        </slot>
      </div>
      <div :class="['tiny-statistic__description']" :style="valueStyle">
        {{ state.displayValue }}
      </div>
      <div v-if="$slots.suffix || suffix" class="tiny-statistic__suffix">
        <slot name="suffix">
          <span>{{ suffix }}</span>
        </slot>
      </div>
    </div>
    <div v-if="title && title instanceof Object && title.position === 'bottom'" :class="['tiny-statistic__title']">
      <div v-if="$slots.title">
        <slot name="title"> </slot>
      </div>
      <div v-else>
        <span>{{ title.value }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/statistic/vue'
import { $constants } from '@tinysmall/renderless/statistic/constants'
import { setup, defineComponent } from '@tinysmall/common'

export const statisticProps = {
  precision: Number,
  formatter: Function,
  value: {
    type: [Number, String],
    default: 0
  },
  prefix: String,
  suffix: String,
  title: [String, Object],
  valueStyle: {
    type: [Object, Array]
  },
  groupSeparator: {
    type: String,
    default: ','
  },
  duration: {
    type: Number,
    default: 2000
  },
  startValue: {
    type: Number,
    default: 0
  },
  useAnimation: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: 'TinyStatistic',
  components: {},
  emits: [],
  props: statisticProps,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
