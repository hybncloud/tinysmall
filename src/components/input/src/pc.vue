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
    :class="[
      $attrs.class,
      type === 'textarea' ? 'tiny-textarea' : 'tiny-input',
      state.inputSize ? 'tiny-input-' + state.inputSize : '',
      {
        'is-disabled': state.inputDisabled,
        'is-exceed': state.inputExceed,
        'tiny-input-group': slots.prepend || slots.append,
        'tiny-input-group-append': slots.append,
        'tiny-input-group-prepend': slots.prepend,
        'tiny-input-prefix': slots.prefix || prefixIcon,
        'tiny-input-suffix': slots.suffix || suffixIcon || clearable || showPassword || (mask && state.inputDisabled),
        'tiny-input-word-limit': state.isWordLimitVisible,
        'is-display-only': state.isDisplayOnly,
        'tiny-input-underline': inputBoxType === 'underline'
      }
    ]"
    @mouseenter="
      ($event) => {
        state.hovering = true
        $emit('mouseenter', $event)
      }
    "
    @mouseleave="
      ($event) => {
        state.hovering = false
        $emit('mouseleave', $event)
      }
    "
    @click="$emit('click', $event)"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="tiny-input-group__prepend" ref="prepend" v-if="slots.prepend && !state.isDisplayOnly">
        <slot name="prepend"></slot>
      </div>
      <span class="tiny-input-display-only">
        <tiny-tooltip
          v-if="state.isDisplayOnly"
          :disabled="!showTooltip"
          effect="light"
          :content="state.displayOnlyTooltip"
          placement="top"
          :popper-class="state.tooltipConfig.popperClass || ''"
          pre
          @mouseenter.native="handleEnterDisplayOnlyContent"
        >
          <span class="tiny-input-display-only__content" v-if="type === 'password'">{{ state.hiddenPassword }}</span>
          <span class="tiny-input-display-only__mask" v-else-if="mask">
            <span class="tiny-input-display-only__mask-text">{{ state.displayedMaskValue }}</span>
            <component
              :is="state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
              @click.native="state.maskValueVisible = !state.maskValueVisible"
            ></component>
          </span>
          <span class="tiny-input-display-only__content" v-else>{{ state.displayOnlyText }}</span>
        </tiny-tooltip>
        <input
          v-if="type !== 'textarea'"
          ref="input"
          :name="name"
          data-tag="tiny-input-inner"
          v-bind="filterAttrs($attrs, ['type', 'class', 'style', '^on[A-Z]', 'id', 'aria-required', 'aria-invalid'])"
          :class="['tiny-input__inner', mask && state.inputDisabled && !state.maskValueVisible && 'tiny-input__mask']"
          :tabindex="tabindex"
          :type="showPassword ? (state.passwordVisible ? 'text' : 'password') : type"
          :disabled="state.inputDisabled"
          :readonly="readonly"
          :unselectable="readonly ? 'on' : 'off'"
          :autocomplete="autocomplete"
          @compositionend="handleCompositionEnd"
          @compositionupdate="handleCompositionUpdate"
          @compositionstart="handleCompositionStart"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInput"
          @change="handleChange"
          :aria-label="label || $attrs.placeholder"
          @keyup="$emit('keyup', $event)"
          @keydown="$emit('keydown', $event)"
          @paste="$emit('paste', $event)"
        />
      </span>
      <tiny-tall-storage
        v-if="isMemoryStorage"
        :name="name"
        :localstorage-data="storageData"
        :is-memory-storage="isMemoryStorage"
        @selected="selectedMemory"
      ></tiny-tall-storage>
      <!-- 前置内容 -->
      <span class="tiny-input__prefix" ref="prefix" v-if="!state.isDisplayOnly && (slots.prefix || prefixIcon)">
        <slot name="prefix"></slot>
        <component v-if="prefixIcon" :is="prefixIcon" class="tiny-svg-size tiny-input__icon" />
      </span>
      <!-- 后置内容 -->
      <div>
        <transition name="tiny-transition-icon-out-in">
          <span class="tiny-input__suffix" ref="suffix" v-if="!state.isDisplayOnly && getSuffixVisible()">
            <span class="tiny-input__suffix-inner">
              <!-- 清除按钮前置 -->
              <icon-close
                v-if="frontClearIcon && state.showClear"
                class="tiny-svg-size tiny-input__icon tiny-input__clear"
                role="button"
                aria-label="清除"
                tabindex="0"
                @mousedown.prevent
                @click="clear"
              ></icon-close>
              <template v-if="!state.showClear || !state.showPwdVisible || !state.isWordLimitVisible">
                <slot name="suffix"></slot>
                <component v-if="suffixIcon" :is="suffixIcon" class="tiny-svg-size tiny-input__icon" />
              </template>
              <!-- 清除按钮后置 -->
              <icon-close
                v-if="!frontClearIcon && state.showClear"
                class="tiny-svg-size tiny-input__icon tiny-input__clear"
                role="button"
                aria-label="清除"
                tabindex="0"
                @mousedown.prevent
                @click="clear"
              ></icon-close>
              <component
                v-if="showPassword"
                :is="state.passwordVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
                class="tiny-svg-size tiny-input__icon"
                role="button"
                :aria-label="state.passwordVisible ? 'hide password' : 'show password'"
                tabindex="0"
                @mousedown.prevent
                @click.native="handlePasswordVisible"
              ></component>
              <component
                v-if="mask && state.inputDisabled"
                :is="state.maskValueVisible ? 'icon-eyeopen' : 'icon-eyeclose'"
                class="tiny-svg-size tiny-input__icon"
                role="button"
                :aria-label="state.maskValueVisible ? 'hide content' : 'show content'"
                tabindex="0"
                @mousedown.prevent
                @click.native="state.maskValueVisible = !state.maskValueVisible"
              ></component>
              <span
                v-if="state.isWordLimitVisible"
                :id="`${$attrs.id || name || 'input'}-word-limit`"
                class="tiny-input__count"
                role="status"
                aria-live="polite"
              >
                <span class="tiny-input__count-inner"
                  ><span class="tiny-input__count-text-length">
                    {{ state.showWordLimit ? `${state.textLength}` : '' }}
                  </span>
                  <span class="tiny-input__count-upper-limit">
                    {{ state.showWordLimit ? `/${state.upperLimit}` : state.textLength }}
                  </span></span
                >
              </span>
            </span>
            <i class="tiny-input__icon" v-if="state.validateState" :class="['tiny-input__validateIcon', validateIcon]">
            </i>
          </span>
        </transition>
      </div>
      <!-- 后置元素 -->
      <div class="tiny-input-group__append" ref="append" v-if="slots.append && !state.isDisplayOnly">
        <slot name="append"></slot>
      </div>
      <!-- Panel弹窗（例如时间组件的非范围选择窗口） -->
      <div class="tiny-input-group__panel" ref="panel" v-if="slots.panel && !state.isDisplayOnly">
        <slot name="panel"></slot>
      </div>
    </template>
    <span v-else :class="['tiny-textarea-display-only', hoverExpand && 'tiny-textarea__inner-con']">
      <tiny-tooltip
        v-if="state.isDisplayOnly"
        :disabled="!showTooltip"
        pre
        effect="light"
        :content="state.displayOnlyTooltip"
        placement="top"
        :popper-class="state.tooltipConfig.popperClass || ''"
        @mouseenter.native="handleEnterDisplayOnlyContent($event, 'textarea')"
      >
        <div class="tiny-textarea-display-only__wrap">
          <span ref="textBox" class="tiny-textarea-display-only__content text-box">
            <span v-if="state.showMoreBtn" @click="state.showDisplayOnlyBox = true" class="more-btn"
              >{{ t('ui.input.more') }}></span
            >{{ state.displayOnlyText }}
          </span>
        </div>
      </tiny-tooltip>
      <tiny-dialog-box
        :title="t('ui.input.detail')"
        v-if="state.isDisplayOnly && popupMore"
        :visible="state.showDisplayOnlyBox"
        :append-to-body="true"
        @update:visible="state.showDisplayOnlyBox = $event"
      >
        <pre>{{ state.displayOnlyText }}</pre>
        <template #footer>
          <tiny-button @click="state.showDisplayOnlyBox = false">{{ t('ui.input.close') }}</tiny-button>
        </template>
      </tiny-dialog-box>
      <textarea
        ref="textarea"
        v-bind="filterAttrs($attrs, ['type', 'class', 'style', 'id', 'aria-required', 'aria-invalid'])"
        :tabindex="tabindex"
        class="tiny-textarea__inner"
        :class="hoverExpand && !state.enteredTextarea && 'tiny-textarea__fix-height'"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        :disabled="state.inputDisabled"
        :readonly="readonly"
        :unselectable="readonly ? 'on' : 'off'"
        :autocomplete="autocomplete"
        :style="state.textareaStyle"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @mouseenter="handleEnterTextarea($event)"
        @mouseleave="handleLeaveTextarea($event)"
        @mousedown="handleTextareaMouseDown()"
        @mouseup="handleTextareaMouseUp()"
        v-clickoutside.mouseup="() => handleTextareaMouseUp(true)"
        :aria-label="label || $attrs.placeholder"
        @keyup="$emit('keyup', $event)"
        @keydown="$emit('keydown', $event)"
        @paste="$emit('paste', $event)"
      >
      </textarea>
    </span>
    <span
      v-if="state.isWordLimitVisible && type === 'textarea'"
      :id="`${$attrs.id || name || 'textarea'}-word-limit`"
      class="tiny-input__count"
      role="status"
      aria-live="polite"
    >
      <span class="tiny-input__count-inner"
        ><span class="tiny-input__count-text-length">
          {{ state.showWordLimit ? `${state.textLength}` : '' }}
        </span>
        <span class="tiny-input__count-upper-limit">
          {{ state.showWordLimit ? `/${state.upperLimit}` : state.textLength }}
        </span>
      </span>
    </span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/input/vue'
import { $props, props, setup, defineComponent, directive } from '@tinysmall/common'
import type { PropType } from '@tinysmall/common'
import { Clickoutside } from '@tinysmall/directive'
import TinyTallStorage from './tall-storage.vue'
import { IconClose, IconEyeopen, IconEyeclose } from '@tinysmall/icon'
import Tooltip from '@tinysmall/tooltip'
import TinyButton from '@tinysmall/button'
import TinyDialogBox from '@tinysmall/dialog-box'
import '@tinysmall/theme/input/index.less'
import '@tinysmall/theme/textarea/index.less'

export const $constants = {
  INPUT_PC: 'tiny-input__',
  INPUTGROUP_PC: 'tiny-input-group__',
  INPUT_MOBILE: 'tiny-mobile-input__',
  INPUTGROUP_MOBILE: 'tiny-mobile-input-group__',
  Mode: 'pc',
  inputMode(mode) {
    return mode === this.Mode ? this.INPUT_PC : this.INPUT_MOBILE
  },
  inputGroupMode(mode) {
    return mode === this.Mode ? this.INPUTGROUP_PC : this.INPUTGROUP_MOBILE
  },
  VALIDATE_ICON: {
    Validating: 'tiny-icon-loading',
    Success: 'tiny-icon-circle-check',
    Error: 'tiny-icon-circle-close'
  },
  COMPONENT_NAME: {
    FormItem: 'FormItem'
  },
  MASKSYMBOL: '******',
  TEXTAREA_HEIGHT_MOBILE: 108
}

export const inputProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  name: String,
  size: String,
  form: String,
  label: String,
  height: Number,
  resize: String,
  tabindex: { type: String, default: '1' },
  disabled: Boolean,
  readonly: Boolean,
  hoverExpand: Boolean,
  mask: Boolean,
  suffixIcon: [Object, String],
  prefixIcon: [Object, String],
  modelValue: [String, Number] as PropType<string | number | null>,
  type: {
    type: String,
    default: 'text'
  },
  memorySpace: {
    type: Number,
    default: 5
  },
  selectMenu: {
    type: Array<{ id: string; label: string }>,
    default: () => []
  },
  isSelect: {
    type: Boolean,
    default: false
  },
  tips: String,
  counter: {
    type: Boolean,
    default: false
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  popupMore: {
    type: Boolean,
    default: false
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  displayOnlyContent: {
    type: String,
    default: ''
  },
  frontClearIcon: {
    type: Boolean,
    default: false
  },
  showEmptyValue: {
    type: Boolean,
    default: undefined
  },
  textAlign: {
    type: String,
    default: 'left'
  },
  width: {
    type: [String, Number] as PropType<string | number | null>
  },
  showTooltip: {
    type: Boolean,
    default: true
  },
  /** 输入框的边框模式，当值为underline时，只显示一条底部直线 */
  inputBoxType: {
    type: String,
    default: 'normal',
    validator: (value: string) => ['normal', 'underline'].includes(value)
  }
}

export default defineComponent({
  emits: [
    'update:modelValue',
    'change',
    'clear',
    'focus',
    'blur',
    'keyup',
    'keydown',
    'paste',
    'mouseenter',
    'mouseleave',
    'click',
    'input',
    'textAlign',
    'selectMenu',
    'isSelect'
  ],
  directives: directive({ Clickoutside }),
  components: {
    IconClose: IconClose(),
    IconEyeopen: IconEyeopen(),
    IconEyeclose: IconEyeclose(),
    TinyTallStorage,
    TinyTooltip: Tooltip,
    TinyButton,
    TinyDialogBox
  },

  props: inputProps,
  setup(props, context) {
    const filterAttrs = (attrs, filters, include = false) => {
      const result = {}
      for (const name in attrs) {
        const find = filters.some((filter) => new RegExp(filter).test(name))
        if ((include && find) || (!include && !find)) {
          result[name] = attrs[name]
        }
      }
      return result
    }
    return { ...setup({ props, context, renderless, api }), filterAttrs }
  }
})
</script>
