<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div
    class="tiny-rate"
    role="slider"
    :aria-label="`评分，当前 ${state.currentValue} 星，满分 ${max} 星`"
    :aria-valuenow="state.currentValue"
    :aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuetext="`${state.currentValue} 星${state.text ? '，' + state.text : ''}`"
    :aria-readonly="disabled ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : 'false'"
    tabindex="0"
    @keydown="handelKey"
  >
    <span
      v-for="item in max"
      :key="item"
      :style="{ width: space, cursor: disabled ? 'auto' : 'pointer' }"
      class="tiny-rate__star"
      aria-hidden="true"
      @mousemove="setCurrentValue({ item, event: $event })"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
    >
      <component
        :is="state.classes[item - 1]"
        :style="getIconStyle(item)"
        :class="[
          'tiny-svg-size',
          'tiny-rate__icon',
          { hover: state.hoverIndex === item },
          disabled ? 'disabled' : '',
          showDecimalIcon(item) ? 'ratehalf' : ''
        ]"
      >
      </component>
      <component
        v-if="showDecimalIcon(item)"
        :is="state.decimalIconClass"
        :style="state.decimalStyle"
        class="tiny-svg-size tiny-rate__decimal"
      ></component>
      <div v-if="textOnBottom && !radio" :style="{ color: textColor }" class="tiny-rate__bottom-text">
        {{ texts[item - 1] }}
      </div>
      <div v-if="textOnBottom && radio" :style="getTextStyle()" class="tiny-rate__bottom-text">
        {{ texts[item - 1] }}
      </div>
    </span>
    <span v-if="(!textOnBottom && showText) || showScore" :style="{ color: textColor }" class="tiny-rate__text">{{
      state.text
    }}</span>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/rate/vue'
import { $prefix, $props, setup, defineComponent } from '@tinysmall/common'
import { t } from '@tinysmall/locale'
import { iconStarActive, iconStarDisable, iconSmile, iconFrown, iconMeh } from '@tinysmall/icon'

export const $constants = {
  RATENODECLS: 'tiny-rate__star',
  ICON_PREFIXCLS: '.tiny-rate__icon',
  DECIMALCLS: 'tiny-rate__decimal'
}

export const rateProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  colors: {
    type: Array,
    default: () => ['#FFBB33', '#FFBB33', '#FFBB33']
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disabledVoidColor: {
    type: String,
    default: 'rgba(25,25,25,0.05)'
  },
  disabledVoidIconClass: {
    type: String,
    default: 'icon-star-active'
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  iconClasses: {
    type: Array,
    default: () => ['icon-star-active', 'icon-star-active', 'icon-star-active']
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  max: {
    type: Number,
    default: 5
  },
  modelValue: {
    type: Number,
    default: 0
  },
  radio: {
    // 是否单选其他形态
    type: Boolean,
    default: false
  },
  scoreTemplate: {
    type: String,
    default: '{value}'
  },
  showScore: {
    type: Boolean,
    default: false
  },
  showText: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: '16px'
  },
  space: {
    type: String,
    default: '24px'
  },
  textColor: {
    type: String,
    default: '#191919'
  },
  textOnBottom: {
    type: Boolean,
    default: false
  },
  texts: {
    type: Array,
    default: () => [
      t('ui.rate.level.poor'),
      t('ui.rate.level.fair'),
      t('ui.rate.level.average'),
      t('ui.rate.level.good'),
      t('ui.rate.level.excellent')
    ]
  },
  voidColor: {
    type: String,
    default: 'rgba(25,25,25,0.05)'
  },
  voidIconClass: {
    type: String,
    default: 'icon-star-active'
  },
  clearable: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Rate',
  props: rateProps,
  components: {
    IconStarActive: iconStarActive(),
    IconStarDisable: iconStarDisable(),
    IconSmile: iconSmile(),
    IconFrown: iconFrown(),
    IconMeh: iconMeh()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
