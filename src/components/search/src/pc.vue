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
      'tiny-search',
      { mini },
      { collapse: state.collapse },
      state.searchSize ? 'tiny-search--' + state.searchSize : '',
      { 'is-disabled': disabled }
    ]"
    role="search"
    :aria-label="placeholder || 'search'"
    @mouseenter="state.hovering = true"
    @mouseleave="state.hovering = false"
  >
    <div :class="['tiny-search__line', { focus: state.focus }]">
      <div class="tiny-search__prefix" v-if="slots.prefix">
        <slot name="prefix"></slot>
      </div>
      <transition name="tiny-transition-search-line-fade" mode="out-in">
        <div
          v-show="!state.collapse && state.types.length"
          class="tiny-search__present"
          role="button"
          tabindex="0"
          aria-haspopup="listbox"
          :aria-expanded="state.show"
          @click="showSelector"
        >
          <slot name="text" :slot-scope="state.searchValue">
            <span class="tiny-search__text">{{ state.searchValue.text }}</span>
          </slot>
          <span class="icon-outer">
            <icon-chevron-down class="tiny-svg-size" />
          </span>
        </div>
      </transition>
      <input
        ref="input"
        role="searchbox"
        :aria-label="placeholder || 'search'"
        :aria-expanded="state.show"
        :aria-controls="state.show ? `tiny-search__selector-${state.instanceId}` : undefined"
        v-bind="$attrs"
        v-model="state.currentValue"
        :disabled="disabled"
        :style="
          transparent
            ? {
                border: 'transparent',
                background: 'inherit'
              }
            : {}
        "
        :placeholder="placeholder"
        type="text"
        class="tiny-search__input"
        aria-haspopup="listbox"
        @keyup.enter="searchEnterKey($event)"
        @change="handleChange"
        @input="handleInput"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @select.stop
        :tabindex="tabindex"
      />
      <transition name="tiny-transition-icon-scale-in">
        <div class="tiny-search__input-btn tiny-icon-close" v-if="state.showClear && !state.collapse && !disabled">
          <a role="button" tabindex="0" aria-label="clear search" @click="clear($event)" @keydown.enter="clear($event)">
            <icon-close @mousedown.prevent class="tiny-svg-size" />
          </a>
        </div>
      </transition>
      <slot v-if="slots.suffix" name="suffix"></slot>
      <div v-else-if="!slots.prefix && !slots.suffix" class="tiny-search__input-btn">
        <a role="button" tabindex="0" aria-label="submit search" @click="searchClick($event)">
          <icon-search :style="{ fill: state.collapse && transparent ? '#fff' : '' }" class="tiny-svg-size" />
        </a>
      </div>
    </div>
    <transition name="tiny-transition-zoom-in-top" mode="out-in">
      <div
        v-show="state.show && state.types.length"
        ref="selector"
        :id="`tiny-search__selector-${state.instanceId}`"
        class="tiny-search__selector"
        role="listbox"
      >
        <div class="tiny-search__selector-body">
          <ul class="tiny-search__poplist">
            <li
              v-for="(item, index) in state.types"
              :key="index"
              class="tiny-search__poplist-item"
              role="option"
              :aria-label="item.text || item.label"
              :aria-selected="item === state.searchValue"
              :id="`tiny-search__option-${state.instanceId}-${index}`"
              tabindex="-1"
              @click="changeKey(item)"
            >
              <slot name="poplist" :slot-scope="item">
                {{ item.text }}
              </slot>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@tinysmall/renderless/search/vue'
import { $prefix, $props, props, setup, defineComponent } from '@tinysmall/common'
import { iconChevronDown, iconSearch, iconClose } from '@tinysmall/icon'
import '@tinysmall/theme/search/index.less'
import type { ISearchApi } from '@tinysmall/renderless/types/search.type'

export const searchProps = {
  ...$props,
  mini: {
    type: Boolean,
    default: false
  },

  /**
   * 设置为透明模式，配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景
   */
  transparent: {
    type: Boolean,
    default: false
  },

  /**
   * 搜索的类型选项，格式为[{text:'文档',value:1},...]，不配置时类型选择固定显示为All
   */
  searchTypes: {
    type: Array,
    default: () => []
  },

  /**
   * 设置搜索输入框内的提示占位文本
   */
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  },
  tabindex: {
    type: String,
    default: '1'
  },

  /**
   * 配置搜索输入框enter键,enter按下触发搜索
   */
  isEnterSearch: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'small'
  },
  typeValue: Object,
  suffixIcon: [Object, String],
  // tiny新增
  disabled: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Search',
  props: searchProps,
  emits: ['change', 'search', 'update:modelValue', 'clear', 'select', 'input', 'expand', 'collapse'],
  components: {
    IconChevronDown: iconChevronDown(),
    IconSearch: iconSearch(),
    IconClose: iconClose()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true }) as unknown as ISearchApi
  }
})
</script>
