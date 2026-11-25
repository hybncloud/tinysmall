<template>
  <li
    ref="option"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    @mousedown.stop=""
    data-tag="tiny-option"
    :data-index="state.index"
    class="tiny-option tiny-select-dropdown__item"
    v-show="visible && state.visible"
    :class="[
      {
        selected: state.itemSelected,
        'is-disabled': disabled || state.groupDisabled || state.limitReached,
        hover: state.hover && !state.limitReached,
        'is-required': required
      },
      highlightClass
    ]"
    role="option"
    :aria-label="state.currentLabel"
    :aria-selected="state.itemSelected"
  >
    <span v-if="state.selectMultiple" class="tiny-option__checkbox-wrap tiny-select-dropdown__item-checkbox">
      <component :is="`icon-${state.selectCls}`" :class="`tiny-svg-size ${state.selectCls}`" />
    </span>
    <component v-if="icon" :is="icon" class="tiny-option__icon"></component>
    <div class="tiny-option-wrapper" :class="state.selectMultiple ? 'calc-width' : 'full-width'">
      <slot>
        <span class="tiny-option-label" v-auto-tip="{ placement: 'right' }">
          {{ state.currentLabel }}
        </span>
      </slot>
    </div>
  </li>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/option/vue'
import { setup, defineComponent } from '@tinysmall/common'
import { AutoTip } from '@tinysmall/directive'
import '@tinysmall/theme/option/index.less'
import { IconCheck, IconCheckedSur, IconFinish } from '@tinysmall/icon'

export const optionsProps = {
  value: {
    required: true
  },
  label: [String, Number],
  created: Boolean,
  disabled: {
    type: Boolean,
    default: false
  },
  events: {
    type: Object,
    default: () => ({})
  },
  visible: {
    type: Boolean,
    default: true
  },
  highlightClass: String,
  required: {
    type: Boolean,
    default: false
  },
  icon: Object
}

export default defineComponent({
  name: 'TinyOption',
  componentName: 'Option',
  directives: { AutoTip },
  components: {
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    IconFinish: IconFinish()
  },
  props: optionsProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
