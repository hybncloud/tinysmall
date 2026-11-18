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
    :class="['tiny-autocomplete', { 'show-auto-width': state.showAutoWidth }]"
    v-clickoutside="close"
    aria-haspopup="listbox"
    role="combobox"
    :aria-expanded="state.suggestionVisible"
    :aria-owns="state.id"
  >
    <tiny-input
      :tabindex="tabindex"
      :display-only="displayOnly"
      ref="input"
      front-clear-icon
      v-clickoutside="handleBlur"
      @update:modelValue="handleChange"
      :validate-event="false"
      @focus="handleFocus"
      @clear="handleClear"
      @keydown.up.prevent="highlight(state.highlightedIndex - 1)"
      @keydown.down.prevent="highlight(state.highlightedIndex + 1)"
      @keydown.enter="handleKeyEnter"
      @keydown.tab="close"
      v-bind="{ ...$props, ...$attrs, _constants: undefined }"
    >
      <template #prepend v-if="slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template #append v-if="slots.append">
        <slot name="append"></slot>
      </template>
      <template #prefix v-if="slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template #suffix v-if="slots.suffix">
        <slot name="suffix"></slot>
      </template>
    </tiny-input>
    <transition name="tiny-zoom-in-top" @after-leave="doDestroy">
      <div
        ref="popper"
        v-show="hideLoading ? suggestionState.showPopper && !state.loading : suggestionState.showPopper"
        class="tiny-autocomplete-suggestion tiny-popper"
        :class="[popperClass ? popperClass : '', { 'is-loading': !hideLoading && state.loading }]"
        :style="{ width: suggestionState.dropdownWidth }"
        role="region"
      >
        <tiny-scrollbar
          tag="ul"
          wrap-class="tiny-autocomplete-suggestion__wrap"
          view-class="tiny-autocomplete-suggestion__list"
        >
          <slot
            name="panel"
            :loading="!hideLoading && state.loading"
            :list="state.suggestions"
            :highlighted="state.highlightedIndex"
            :id="state.id"
            :select="select"
          >
            <li
              v-if="!hideLoading && state.loading"
              class="tiny-autocomplete-suggestion__list-item tiny-autocomplete-suggestion__list-loading"
              role="loading"
            >
              <icon-loading-shadow></icon-loading-shadow>
            </li>
            <template v-else>
              <li
                v-for="(item, index) in state.suggestions"
                :key="index"
                :title="item[valueKey]"
                class="tiny-autocomplete-suggestion__list-item"
                :class="{
                  highlighted: state.highlightedIndex === index,
                  selected: modelValue === item[valueKey]
                }"
                @click="select(item)"
                :id="`${state.id}-item-${index}`"
                role="option"
                :aria-selected="state.highlightedIndex === index"
              >
                <slot :slot-scope="item">
                  {{ item[valueKey] }}
                </slot>
              </li>
            </template>
          </slot>
        </tiny-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/autocomplete/vue'
import { $prefix, $props, props, setup, directive, defineComponent } from '@tinysmall/common'
import TinyScrollbar from '@tinysmall/scrollbar'
import TinyInput from '@tinysmall/input'
import { Clickoutside } from '@tinysmall/directive'
import { IconLoadingShadow } from '@tinysmall/icon'

export const $constants = {
  WARP_CLS: '.tiny-autocomplete-suggestion__wrap',
  ITEM_CLS: '.tiny-autocomplete-suggestion__list li'
}

export const autoCompleteProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  /** 原生 tabindex 属性，取自原 pc.vue props 数组 */
  tabindex: { type: [String, Number], default: '0' },
  autofocus: Boolean,
  clearable: {
    type: Boolean,
    default: () => false
  },
  customItem: String,
  debounce: {
    type: Number,
    default: () => 300
  },
  disabled: Boolean,
  fetchSuggestions: Function,
  hideLoading: Boolean,
  highlightFirstItem: {
    type: Boolean,
    default: () => false
  },
  label: String,
  maxlength: Number,
  minlength: Number,
  modelValue: String,
  name: String,
  placeholder: String,
  placement: {
    type: String,
    default: () => 'bottom-start'
  },
  popperAppendToBody: {
    type: Boolean,
    default: () => true
  },
  popperClass: String,
  popperOptions: Object,
  prefixIcon: [String, Object],
  selectWhenUnmatched: {
    type: Boolean,
    default: () => false
  },
  size: String,
  suffixIcon: [String, Object],
  triggerOnFocus: {
    type: Boolean,
    default: () => true
  },
  valueKey: {
    type: String,
    default: () => 'value'
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  validateEvent: {
    type: Boolean,
    default: undefined
  }
}

export default defineComponent({
  name: $prefix + 'Autocomplete',
  components: {
    TinyInput,
    TinyScrollbar,
    IconLoadingShadow: IconLoadingShadow()
  },
  directives: directive({ Clickoutside }),
  props: autoCompleteProps,
  emits: ['update:modelValue', 'focus', 'blur', 'clear', 'select', 'created'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
