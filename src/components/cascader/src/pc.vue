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
    ref="reference"
    :class="[
      'tiny-cascader',
      state.realSize && `tiny-cascader--${state.realSize}`,
      { 'is-disabled': state.isDisabled },
      { 'tiny-cascader-multiple': state.multiple },
      { 'is-display-only': state.isDisplayOnly },
      { 'show-auto-width': state.showAutoWidth },
      { 'is-hover-expand': hoverExpand }
    ]"
    v-clickoutside="() => toggleDropDownVisible(false)"
    @mouseenter="state.inputHover = true"
    @mouseleave="state.inputHover = false"
    @click="() => toggleDropDownVisible(state.readonly ? undefined : true)"
    @keydown="handleKeyDown"
  >
    <div class="tiny-cascader-content">
      <tiny-input
        ref="input"
        :model-value="state.multiple && filterable ? '' : state.inputValues"
        :size="state.realSize"
        :placeholder="state.multiple && filterable ? '' : state.placeholder"
        :readonly="state.readonly"
        :disabled="state.isDisabled"
        :display-only="displayOnly"
        :display-only-content="state.multiple ? state.presentTags.map((item) => item.text).join('; ') : ''"
        :validate-event="false"
        :class="{ 'is-focus': state.dropDownVisible }"
        @focus="handleFocus"
        @blur="handleBlur"
        @update:modelValue="(val) => handleInput(val, {})"
      >
        <template #suffix>
          <icon-close
            v-if="state.clearBtnVisible"
            key="clear"
            :class="['tiny-input__icon', 'tiny-input__icon-close']"
            @click.stop="handleClear"
          ></icon-close>
          <component
            v-else
            :is="state.dropDownVisible ? 'icon-chevron-up' : 'icon-chevron-down'"
            key="arrow-down"
            :class="['tiny-input__icon', state.dropDownVisible && 'is-reverse']"
            @click.stop="toggleDropDownVisible()"
          ></component>
        </template>
      </tiny-input>
      <div
        ref="tags-content"
        v-if="state.multiple && !state.isDisplayOnly"
        class="tiny-cascader__tags"
        :class="{
          'is-expand-content': hoverExpand && !state.isDisabled && (state.inputHover || state.dropDownVisible)
        }"
      >
        <tiny-tag
          v-if="hoverExpand"
          :class="['tiny-cascader__tags-collapse', { 'is-hidden': state.isHidden }]"
          :type="state.tagTypeWhenMultiple"
          :closable="false"
          :size="state.tagSize"
          >+ {{ state.collapseTagsLength }}
        </tiny-tag>
        <tiny-tag
          v-for="(tag, index) in state.presentTags"
          :key="tag.key"
          :type="state.tagTypeWhenMultiple"
          :size="state.tagSize"
          :hit="tag.hitState"
          :closable="tag.closable"
          disable-transitions
          @close="deleteTag(index)"
          @mouseenter.native="handleMouseenter"
          @mouseleave.native="handleMouseleave"
        >
          <span>{{ tag.text }}</span>
        </tiny-tag>
        <input
          v-if="filterable && !state.isDisabled"
          v-model.trim="state.inputValue"
          type="text"
          class="tiny-cascader__search-input"
          :placeholder="state.presentTags.length ? '' : placeholder"
          @input="(e) => handleInput(state.inputValue, e)"
          @click.stop="toggleDropDownVisible(true)"
          @keydown.delete="handleDelete"
        />
      </div>
    </div>
    <tiny-tooltip
      ref="tooltip"
      v-model="state.tooltipVisible"
      :manual="true"
      effect="light"
      :content="state.tooltipContent"
      placement="top"
    >
    </tiny-tooltip>
    <!-- 弹出层 popper  -->
    <transition name="tiny-zoom-in-top" @after-leave="handleDropdownLeave">
      <div
        v-show="state.dropDownVisible"
        ref="popper"
        :class="[
          'tiny-popper',
          'tiny-cascader-dropdown',
          'tiny-cascader__dropdown',
          popperClass,
          { 'is-auto-size': autoSize, 'is-multiple': state.multiple }
        ]"
        @mousedown.stop
      >
        <tiny-cascader-panel
          ref="panel"
          v-show="!state.filtering"
          v-model="state.checkedValue"
          :options="options"
          :props="state.config"
          :border="false"
          :render-label="slots.default"
          @expand-change="handleExpandChange"
          @close="toggleDropDownVisible(false)"
          @load-data="computePresentContent"
          :onlyUsePanel="false"
        ></tiny-cascader-panel>
        <tiny-scrollbar
          ref="suggestionPanel"
          v-if="filterable"
          v-show="state.filtering"
          tag="ul"
          class="tiny-cascader__suggestion-panel"
          view-class="tiny-cascader__suggestion-list"
          @keydown="handleSuggestionKeyDown"
        >
          <template #default v-if="state.suggestions.length">
            <li
              v-for="(item, index) in state.suggestions"
              :key="item.uid"
              :class="['tiny-cascader__suggestion-item', item.checked && 'is-checked']"
              :tabindex="-1"
              @click="handleSuggestionClick(index)"
              v-highlight-query="state.multiple ? state.presentText : state.inputValue"
            >
              <!-- <span v-html="item.text"></span> -->
              <slot name="filter" :item="item.text">
                <span>{{ item.text }}</span>
              </slot>
              <icon-yes v-if="item.checked" class="icon-check"></icon-yes>
            </li>
          </template>
          <slot name="empty" v-if="!state.suggestions.length">
            <li class="tiny-cascader__empty-text">
              {{ t('ui.cascader.noMatch') }}
            </li>
          </slot>
        </tiny-scrollbar>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@tinysmall/renderless/cascader/vue'
import { $prefix, $props, setup, defineComponent, directive } from '@tinysmall/common'
import { t } from '@tinysmall/locale'

import { Clickoutside } from '@tinysmall/directive'
import { HighlightQuery } from '@tinysmall/directive'

// 没有进行vue3，vue2适配
import Input from '@tinysmall/input'
import Tag from '@tinysmall/tag'
import Scrollbar from '@tinysmall/scrollbar'
import CascaderPanel from '@tinysmall/cascader-panel'
import Tooltip from '@tinysmall/tooltip'
import { iconClose, IconChevronDown, IconUpWard, iconYes } from '@tinysmall/icon'
import '@tinysmall/theme/cascader/index.less'

const $constants = {
  placeholder: 'ui.cascader.placeholder',
  COMPONENT_NAME: { FormItem: 'FormItem' },
  EVENT_NAME: { FormBlur: 'form.blur', FormChange: 'form.change' },
  defaultNodeConfig: {
    lazy: false,
    load: null,
    isLeaf: 'leaf',
    afterLoad: null,
    currentNodeKey: null,
    checkStrictly: false,
    checkDescendants: null,
    defaultCheckedKeys: null,
    defaultExpandedKeys: null,
    autoExpandParent: null,
    defaultExpandAll: null,
    filterNodeMethod: null
  }
}

export const cascaderProps = {
  ...$props,
  _constants: {
    type: Object,
    default: () => $constants
  },
  autoSize: Boolean,
  beforeFilter: {
    type: Function,
    default: () => () => {
      // do nothing
    }
  },
  clearable: Boolean,
  collapseTags: Boolean,
  debounce: {
    type: Number,
    default: 300
  },
  disabled: Boolean,
  filterMethod: Function,
  filterable: Boolean,
  modelValue: {},
  options: Array,
  placeholder: {
    type: String,
    default: t('ui.select.placeholder')
  },
  /** 弹出位置，取自原 pc.vue props 数组 */
  placement: {
    default: () => 'bottom-start'
  },
  /** 弹层配置，取自原 pc.vue props 数组 */
  popperOptions: {
    default: () => ({ gpuAcceleration: false })
  },
  /** 是否显示箭头，取自原 pc.vue props 数组 */
  visibleArrow: {
    default: () => false
  },
  /** 弹层偏移，取自原 pc.vue props 数组 */
  offset: {
    default: () => 0
  },
  /** 弹层内边距，取自原 pc.vue props 数组 */
  boundariesPadding: {
    default: () => 0
  },
  /** 箭头偏移，取自原 pc.vue props 数组 */
  arrowOffset: {
    type: Number,
    default: () => 35
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  popperClass: String,
  props: {
    type: Object,
    default: () => ({})
  },
  separator: {
    type: String,
    default: ' /'
  },
  showAllLevels: {
    type: Boolean,
    default: true
  },
  size: String,
  displayOnly: {
    type: Boolean,
    default: false
  },
  hoverExpand: {
    type: Boolean,
    default: false
  },
  changeCompat: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: $prefix + 'Cascader',
  componentName: 'Cascader',
  props: cascaderProps,
  emits: [
    'update:modelValue',
    'change',
    'visible-change',
    'focus',
    'blur',
    'expand-change',
    'active-item-change',
    'remove-tag',
    'created'
  ],
  directives: { ...directive({ Clickoutside }), HighlightQuery },
  provide() {
    return {
      cascaderRoot: this
    }
  },
  components: {
    TinyInput: Input,
    TinyTag: Tag,
    TinyScrollbar: Scrollbar,
    TinyCascaderPanel: CascaderPanel,
    IconClose: iconClose(),
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconUpWard(),
    IconYes: iconYes(),
    TinyTooltip: Tooltip
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
