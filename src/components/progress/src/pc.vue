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
    class="tiny-progress"
    :class="[
      'tiny-progress--' + type,
      status ? 'is-' + status : '',
      {
        'tiny-progress--without-text': !showText,
        'tiny-progress--text-inside': textInside
      }
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="tiny-progress-bar" v-if="type === 'line'">
      <div
        class="tiny-progress-bar__outer"
        :style="{ height: state.strokeWidth + 'px', borderRadius: `${state.strokeWidth / 2}px` }"
      >
        <transition
          appear
          appear-class="custom-appear-class"
          @before-appear="customBeforeAppearHook"
          @appear="customAppearHook"
          @after-appear="customAfterAppearHook"
        >
          <div
            class="tiny-progress-bar__inner"
            :style="{ ...state.barStyle, borderRadius: `${state.strokeWidth / 2}px` }"
          >
            <div class="tiny-progress-bar__innerText" v-if="showText && textInside">
              {{ state.content }}
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="tiny-progress-circle" :style="{ height: state.width + 'px', width: state.width + 'px' }" v-else>
      <svg viewBox="0 0 100 100">
        <path
          class="tiny-progress-circle__track"
          :d="state.trackPath"
          stroke="#e5e9f2"
          :stroke-width="state.relativeStrokeWidth"
          fill="none"
          :style="state.trailPathStyle"
        ></path>
        <transition
          appear
          appear-class="custom-appear-class"
          @before-appear="customBeforeAppearHook"
          @appear="customAppearHook"
          @after-appear="customAfterAppearHook"
        >
          <path
            class="tiny-progress-circle__path"
            :d="state.trackPath"
            :stroke="state.stroke"
            fill="none"
            stroke-linecap="round"
            :stroke-width="percentage ? state.relativeStrokeWidth : 0"
            :style="state.circlePathStyle"
          ></path>
        </transition>
      </svg>
    </div>
    <div
      class="tiny-progress__text"
      v-if="showText && !textInside"
      :style="{ fontSize: state.progressTextSize + 'px' }"
    >
      <template v-if="!status">
        {{ state.content }}
      </template>

      <slot v-else :name="status + 'Icon'">
        <component :is="state.iconClass" class="tiny-svg-size" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/progress/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import { iconClose, iconSuccess, iconError, iconYes, iconWarning } from '@tinysmall/icon'
import '@tinysmall/theme/progress/index.less'
import type { IProgressApi } from '@tinysmall/renderless/types/progress.type'

export const $constants = {
  PROGRESS_TYPE: {
    LINE: 'line',
    CIRCLE: 'circle',
    DASHBOARD: 'dashboard'
  },
  PROGRESS_SIZE: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  },
  PROGRESS_SIZE_WIDTH: {
    SMALL: 48,
    MEDIUM: 96,
    LARGE: 160
  },
  PROGRESS_STATUS: {
    DEFAULT: 'default',
    SUCCESS: 'success',
    EXCEPTION: 'exception',
    WARNING: 'warning'
  },
  STATUS_TO_COLOR: {
    success: '#00a874',
    exception: '#eb171f',
    warning: '#fdc000'
  },
  STATUS_DEFAULT_COLOR: '#0067d1',
  ICON_CIRCLE_WARNING: 'icon-warning',
  ICON_CIRCLE_SUCCESS: 'icon-success',
  ICON_CIRCLE_EXCEPTION: 'icon-error',
  ICON_SUCCESS: 'icon-yes',
  ICON_EXCEPTION: 'icon-close',
  ICON_WARNING: 'icon-warning',
  TEXT_XS: 12,
  TEXT_SM: 14,
  WIDTH_RATE_TWO: 2,
  WIDTH_RATE_THREE: 3,
  WIDTH_RATE_SIX: 6,
  DEFAULT_STROKE_WIDTH: 6,
  REL_STROKE_WIDTH: 4,
  DEFAULT_WIDTH: 126,
  STROKE_WIDTH_RATE: 0.4
}

export const progressProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  color: {
    type: [String, Array, Function],
    default: ''
  },
  info: String,
  format: Function,
  percentage: {
    type: Number,
    default: 0,
    required: true,
    validator: (val: number) => val >= 0 && val <= 100
  },
  showText: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    validator: (value: string) => !!$constants.PROGRESS_STATUS[value.toUpperCase()]
  },
  strokeWidth: {
    type: Number,
    default: 0
  },
  textInside: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: $constants.PROGRESS_TYPE.LINE,
    validator: (value: string) => !!$constants.PROGRESS_TYPE[value.toUpperCase()]
  },
  size: {
    type: String,
    default: $constants.PROGRESS_SIZE.MEDIUM,
    validator: (value) => !!$constants.PROGRESS_SIZE[value.toUpperCase()]
  },
  width: {
    type: Number,
    default: 0
  }
}

export default defineComponent({
  name: $prefix + 'Progress',
  props: progressProps,
  components: {
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconYes: iconYes(),
    IconWarning: iconWarning()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IProgressApi
  }
})
</script>
