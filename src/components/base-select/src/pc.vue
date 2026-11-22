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
    ref="select"
    class="tiny-base-select"
    v-popover:popover
    :class="[
      state.selectSize ? 'tiny-base-select--' + state.selectSize : '',
      state.collapseTags ? 'tiny-base-select__collapse-tags' : '',
      filterable ? 'tiny-base-select__filterable' : '',
      multiple ? 'tiny-base-select__multiple' : '',
      (state.inputHovering || state.visible) && !clickExpand ? 'is-hover' : '',
      state.isDisplayOnly ? 'is-display-only' : '',
      hoverExpand ? 'is-hover-expand' : '',
      clickExpand ? 'is-click-expand' : '',
      state.showCollapseTag ? 'collapse-tag-clicked' : '',
      state.isDisabled ? 'is-disabled' : '',
      baseSelectParent && baseSelectParent.$attrs.class
    ]"
    @mouseleave.self="
      () => {
        state.selectHover = false
        state.inputHovering = false
      }
    "
    @mouseenter.self="onMouseenterSelf"
    @click="toggleMenu"
    v-clickoutside="handleClose"
  >
    <!-- tiny新增：title 简化处理 -->
    <div
      ref="tagsGroup"
      :style="state.selectFiexd"
      :class="['tiny-base-select__tags-group', { 'is-expand': state.isExpand }]"
      :title="state.rootAutoTipConfig.content"
    >
      <slot name="reference">
        <div
          ref="tags"
          :class="[
            'tiny-base-select__tags',
            { 'is-showicon': slots.prefix, 'not-selected': !state.selected.length },
            { 'is-show-tag': !state.isShowTagText }
          ]"
          v-if="multiple && !state.isDisplayOnly"
          :style="state.tagsStyle"
        >
          <span v-if="!state.isShowTagText">
            <span v-if="collapseTags && state.selected.length">
              <!-- 显示第1个标签 + 数字 -->
              <tiny-tag
                :class="{ 'is-required': state.selected[0].required }"
                :closable="isTagClosable(state.selected[0])"
                :size="state.collapseTagSize"
                :hit="state.selected[0].state ? state.selected[0].state.hitState : state.selected[0].hitState"
                :key="state.key"
                :disabled="state.selected[0].disabled || state.isDisabled"
                :type="state.getTagType"
                @close="deleteTag($event, state.selected[0])"
                disable-transitions
                :maxWidth="maxTagWidth"
              >
                <tiny-tooltip
                  :effect="tooltipConfig.effect || 'light'"
                  :placement="tooltipConfig.placement || 'top'"
                  :popper-class="tooltipConfig.popperClass || ''"
                  @mouseenter.native="handleEnterTag($event, getValueKey(state.selected[0]))"
                >
                  <span class="tiny-base-select__tags-text">
                    <slot name="label" :item="getLabelSlotValue(state.selected[0])">{{
                      state.selected[0].state ? state.selected[0].state.currentLabel : state.selected[0].currentLabel
                    }}</slot>
                  </span>
                  <template #content>
                    <span v-if="state.tooltipContent[getValueKey(state.selected[0])]">
                      <slot name="label" :item="getLabelSlotValue(state.selected[0])">
                        {{
                          state.selected[0].state
                            ? state.selected[0].state.currentLabel
                            : state.selected[0].currentLabel
                        }}
                      </slot>
                    </span>
                  </template>
                </tiny-tooltip>
              </tiny-tag>
              <tiny-tag
                v-if="state.selected.length > 1"
                :closable="false"
                :size="state.collapseTagSize"
                :type="state.getTagType"
                :disabled="state.isDisabled"
                disable-transitions
                class="tiny-base-select__tags-number"
                :maxWidth="maxTagWidth"
              >
                <span class="tiny-base-select__tags-text">+ {{ state.selected.length - 1 }}</span>
              </tiny-tag>
            </span>
            <!-- 显示所有标签的循环 -->
            <span ref="tags-content" v-if="!collapseTags">
              <!-- 当 showAllTextTag 时， 用all-text属性做为tag。 xdesign规范 -->
              <tiny-tag
                v-if="showAllTextTag && state.selectCls === 'checked-sur'"
                :type="state.getTagType"
                key="tags-all-text-tag"
                data-tag="tags-all-text-tag"
                :disabled="state.isDisabled"
                :closable="true"
                :size="state.collapseTagSize"
                @close="toggleCheckAll(false)"
                :maxWidth="maxTagWidth"
              >
                {{ allText || t('ui.base.all') }}
              </tiny-tag>
              <!-- 当非 showAllTextTag 时，原来的模式渲染 -->
              <template v-else>
                <tiny-tag
                  v-if="hoverExpand || clickExpand"
                  :class="[
                    'tiny-base-select__tags-collapse',
                    'cursor-pointer',
                    { 'is-hidden': state.isHidden || state.isDisabled }
                  ]"
                  :type="state.getTagType"
                  key="tags-collapse"
                  data-tag="tags-collapse"
                  :only-icon="!hoverExpand"
                  :closable="false"
                  :size="state.collapseTagSize"
                  @click="onClickCollapseTag($event)"
                  :maxWidth="maxTagWidth"
                >
                  <template v-if="hoverExpand"> + {{ state.collapseTagsLength }} </template>
                  <icon-ellipsis v-else></icon-ellipsis>
                </tiny-tag>
                <tiny-tag
                  v-for="(item, index) in state.selected"
                  :key="getValueKey(item)"
                  :class="{
                    'not-visible': state.toHideIndex <= index && !state.isExpand,
                    'is-required': item.required
                  }"
                  :closable="isTagClosable(item)"
                  :disabled="state.isDisabled || item.disabled"
                  :size="state.collapseTagSize"
                  :hit="item.state ? item.state.hitState : item.hitState"
                  :type="state.getTagType"
                  @close="deleteTag($event, item)"
                  disable-transitions
                  :maxWidth="maxTagWidth"
                >
                  <tiny-tooltip
                    :effect="tooltipConfig.effect || 'light'"
                    :placement="tooltipConfig.placement || 'top'"
                    :popper-class="tooltipConfig.popperClass || ''"
                    @mouseenter.native="handleEnterTag($event, getValueKey(item))"
                  >
                    <span v-if="!state.visible && state.overflow === index" class="tiny-base-select__tags-text">
                      {{ item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... ' }}
                    </span>
                    <span v-else class="tiny-base-select__tags-text">
                      <slot name="label" :item="getLabelSlotValue(item)">
                        {{ item.state ? item.state.currentLabel : item.currentLabel }}
                      </slot>
                    </span>
                    <template v-if="state.tooltipContent[getValueKey(item)]" #content>
                      <span v-if="!state.visible && state.overflow === index">
                        {{ item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... ' }}
                      </span>
                      <span v-else>
                        <slot name="label" :item="getLabelSlotValue(item)">
                          {{ item.state ? item.state.currentLabel : item.currentLabel }}
                        </slot>
                      </span>
                    </template>
                  </tiny-tooltip>
                </tiny-tag>

                <!-- 收起按钮 -->
                <span
                  v-if="clickExpand && state.showCollapseTag"
                  class="tiny-base-select__collapse-text"
                  @click="onClickCollapseTag($event)"
                >
                  {{ t('ui.select.collapse') }}
                  <icon-chevron-up></icon-chevron-up>
                </span>
              </template>
            </span>
          </span>

          <span v-else :class="['tiny-base-select__tags-text', 'is-display-only', { 'is-disabled': state.isDisabled }]">
            <span>
              <span v-for="item in state.selected" :key="item.value">
                <slot name="label" :item="item">{{ item.state ? item.state.currentLabel : item.currentLabel }}</slot
                >;
              </span>
            </span>
          </span>
          <!-- tiny 新增：searchable时, 这里不显示 state.query -->
          <input
            ref="input"
            v-show="filterable && !searchable && !state.selectDisabled"
            v-model="state.query"
            type="text"
            class="tiny-base-select__input"
            :class="[state.selectSize ? `is-${state.selectSize}` : '']"
            :disabled="state.selectDisabled"
            :autocomplete="autocomplete"
            @focus="handleFocus"
            @blur="handleBlur"
            @keyup="managePlaceholder"
            @keydown="resetInputState"
            @keydown.down.prevent="navigateOptions('next')"
            @keydown.up.prevent="navigateOptions('prev')"
            @keydown.enter.prevent="selectOption"
            @keydown.esc.stop.prevent="state.visible = false"
            @keydown.delete="deletePrevTag"
            @keydown.tab="state.visible = false"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            @input="debouncedQueryChange"
            :style="{
              'flex-grow': '1',
              width: state.inputWidth > 0 ? state.inputLength / (state.inputWidth - 32) + '%' : 'auto',
              'max-width': state.inputWidth > 0 ? state.inputWidth - 42 + 'px' : 'none',
              height: 'auto'
            }"
          />
        </div>
        <tiny-input
          ref="reference"
          v-model="state.selectedLabel"
          type="text"
          :placeholder="state.currentPlaceholder"
          :name="name"
          :id="id"
          :autocomplete="autocomplete"
          :size="state.selectSize"
          :showTooltip="false"
          :disabled="state.selectDisabled"
          :readonly="state.readonly"
          :display-only="state.isDisplayOnly"
          :display-only-content="state.displayOnlyContent"
          :unselectable="state.readonly ? 'on' : 'off'"
          :validate-event="false"
          :show-empty-value="showEmptyValue"
          :input-box-type="inputBoxType"
          :class="{
            'is-focus': state.visible,
            overflow: state.overflow,
            'is-show-close': state.showClose,
            'show-copy': copyable,
            'show-clear': clearable
          }"
          :tabindex="multiple && filterable ? '-1' : tabindex"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup="debouncedOnInputChange"
          @keydown.down.stop.prevent="navigateOptions('next')"
          @keydown.up.stop.prevent="navigateOptions('prev')"
          @keydown.enter.prevent="selectOption"
          @keydown.esc.stop.prevent="state.visible = false"
          @keydown.tab="state.visible = false"
          @paste="debouncedOnInputChange"
          @mouseenter="onMouseenterNative"
          @mouseleave="onMouseleaveNative"
          @compositionend.native="handleComposition"
        >
          <template #prefix v-if="slots.prefix">
            <slot name="prefix"></slot>
          </template>
          <template #suffix>
            <slot name="suffix"></slot>
            <!-- tiny 新增：xdesign 规范 ：多选限制数量时，在后缀显示 "选中/最大限制项" 计数的提示文字  -->
            <span
              v-if="showLimitText && multiple && multipleLimit && !state.showCopy"
              class="tiny-base-select__limit-txt"
            >
              {{ state.selected.length }}/{{ multipleLimit }}
            </span>
            <!-- tiny 新增：xdesign 规范 ： 显示比例时，在后缀显示 "选中/全部项" 计数的提示文字  -->
            <span
              v-else-if="showProportion && state.selected.length > 0 && state.options.length > 1"
              class="tiny-base-select__proportion-txt"
            >
              {{ state.selected.length + '/' + state.options.length }}
            </span>
            <span v-if="state.showCopy" class="tiny-base-select__copy" @click.stop="handleCopyClick">
              <icon-copy class="tiny-svg-size tiny-base-select__caret"></icon-copy>
            </span>

            <icon-close
              v-if="state.showClose"
              class="tiny-svg-size tiny-base-select__caret icon-close"
              @click="handleClearClick"
              @mouseenter="state.inputHovering = true"
            ></icon-close>
            <!-- tiny 新增 自定义getIcon .
              tiny 的 autoHideDownIcon=true, 显示 close时， 不显示向下的箭头。
              aui是同时显示2个。 -->
            <component
              v-show="
                state.autoHideDownIcon
                  ? !state.showClose && !(remote && filterable && !remoteConfig.showIcon)
                  : !(remote && filterable && !remoteConfig.showIcon)
              "
              :is="state.getIcon.icon"
              :class="[
                'tiny-svg-size',
                'tiny-base-select__caret',
                state.iconClass,
                { 'is-reverse': !state.visible && state.getIcon.isDefault },
                { 'not-reverse': !state.getIcon.isDefault }
              ]"
              @click="handleDropdownClick"
            ></component>
          </template>
        </tiny-input>
      </slot>
      <transition name="tiny-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="doDestroy">
        <tiny-select-dropdown
          ref="popper"
          :is-drop-inherit-width="isDropInheritWidth"
          :placement="placement"
          :append-to-body="popperAppendToBody"
          v-show="!onCopying() && !hideDrop && state.visible && (slots.panel || state.emptyText !== false)"
          :style="dropStyle"
          :popper-options="popperOptions"
        >
          <div v-if="topCreate" class="tiny-select__top-create">
            <div @click="$emit('top-create-click', $event)">
              <component :is="'icon-add-circle'"></component>
              <span>{{ topCreateText }}</span>
            </div>
          </div>
          <slot
            name="panel"
            :methods="{
              updateSelectedData,
              hidePanel
            }"
          ></slot>
          <!-- tiny 新增 可搜索的输入框 -->
          <tiny-input
            v-if="searchable"
            input-box-type="underline"
            v-model="state.query"
            :placeholder="t('ui.search.placeholder')"
            class="tiny-select-dropdown__search"
            @update:modelValue="handleQueryChange(state.query, false, true)"
          >
            <template #prefix>
              <!-- tiny 为适配smb，增加前置的放大镜 -->
              <icon-search class="tiny-select-dropdown__search-prefix"></icon-search>
            </template>
            <template #suffix>
              <span v-show="state.query" class="tiny-icon-close">
                <icon-close @click="clearSearchText"></icon-close>
              </span>
              <icon-search class="tiny-select-dropdown__search-suffix"></icon-search>
            </template>
          </tiny-input>

          <template v-if="optimization">
            <div :style="{ height: `${state.optimizeStore.recycleScrollerHeight}px` }">
              <tiny-recycle-scroller
                ref="scrollbar"
                style="height: 100%"
                :key-field="valueField"
                :list-class="['tiny-select-dropdown__wrap']"
                :item-class="['tiny-select-dropdown__item-view']"
                :items="state.datas"
                :item-size="state.optimizeOpts.optionHeight"
                v-show="!state.emptyFlag && !loading"
              >
                <template #before>
                  <tiny-option :value="state.query" created v-if="state.showNewOption"> </tiny-option>
                </template>
                <template #default="{ item }">
                  <slot :item="item">
                    <tiny-option
                      :key="`${item[valueField]}`"
                      :label="item[textField]"
                      :value="item[valueField]"
                      :disabled="item.disabled"
                      :required="item.required"
                      :highlight-class="item._highlightClass"
                      :events="item.events"
                      :icon="item.icon"
                      @mousedown.stop
                    >
                    </tiny-option>
                  </slot>
                </template>
              </tiny-recycle-scroller>
            </div>
          </template>
          <tiny-scrollbar
            v-if="!optimization && !(state.isDisplayOnly && options)"
            ref="scrollbar"
            show
            tag="ul"
            :wrap-class="['tiny-select-dropdown__wrap']"
            :view-class="['tiny-select-dropdown__list']"
            @mousedown.stop
            :class="{
              'is-empty': !allowCreate && state.query && state.filteredOptionsCount === 0
            }"
            v-show="state.options.length > 0 && !loading"
          >
            <slot name="dropdown"></slot>
            <li
              v-if="multiple && showCheck && showAlloption && !state.multipleLimit && !state.query && !remote"
              class="tiny-option tiny-option_all tiny-select-dropdown__item"
              data-tag="tiny-option"
              :class="[
                {
                  hover: state.hoverIndex === -9 && state.selectCls !== 'checked-sur'
                },
                { 'selected': state.selectCls === 'checked-sur' }
              ]"
              @click.stop="toggleCheckAll(false)"
              @mousedown.stop
              @mouseenter="state.hoverIndex = -9"
            >
              <span class="tiny-option__checkbox-wrap tiny-select-dropdown__item-checkbox">
                <component :is="`icon-${state.selectCls}`" :class="['tiny-svg-size', state.selectCls]"
              /></span>
              <div class="tiny-option-wrapper calc-width">
                <span class="tiny-option-label">{{ allText || t('ui.base.all') }}</span>
              </div>
            </li>
            <li
              v-if="
                multiple &&
                showCheck &&
                showAlloption &&
                !state.multipleLimit &&
                state.query &&
                !state.emptyText &&
                !remote
              "
              class="tiny-option tiny-select-dropdown__item"
              data-tag="tiny-option"
              :class="[
                {
                  hover: state.hoverIndex === -9 && state.filteredSelectCls !== 'checked-sur'
                },
                { 'selected': state.filteredSelectCls === 'checked-sur' }
              ]"
              @click.stop="toggleCheckAll(true)"
              @mousedown.stop
              @mouseenter="state.hoverIndex = -9"
            >
              <span class="tiny-option__checkbox-wrap tiny-select-dropdown__item-checkbox">
                <component :is="`icon-${state.filteredSelectCls}`" :class="['tiny-svg-size', state.filteredSelectCls]"
              /></span>
              <div class="tiny-option-wrapper calc-width">
                <span class="tiny-option-label">{{ allText || t('ui.base.all') }}</span>
              </div>
            </li>
            <tiny-option :value="state.query" created v-if="state.showNewOption"> </tiny-option>
            <slot>
              <tiny-option
                v-for="item in state.datas"
                :key="`${item[valueField]}`"
                :label="item[textField]"
                :value="item[valueField]"
                :disabled="item.disabled"
                :required="item.required"
                :highlight-class="item._highlightClass"
                :events="item.events"
                @mousedown.stop
                :icon="item.icon"
              >
              </tiny-option>
            </slot>
          </tiny-scrollbar>
          <template
            v-if="!slots.panel && state.emptyText && (!allowCreate || loading || (allowCreate && state.emptyFlag))"
          >
            <!-- tiny 新增 showEmptyImage功能 -->
            <div v-if="loadingText || slots.empty" class="tiny-select-dropdown__empty-wrap">
              <slot name="empty" v-if="slots.empty"></slot>
              <span v-else-if="showEmptyImage" class="tiny-select-dropdown__empty-images"></span>
              <p class="tiny-select-dropdown__empty" v-else>
                {{ state.emptyText }}
              </p>
            </div>
            <div v-else class="tiny-select-dropdown__loading" :class="{ 'show-loading-icon': loading }">
              <template v-if="!loading">
                <span v-if="showEmptyImage" class="tiny-select-dropdown__empty-images"></span>
                <span v-else class="tiny-select-dropdown__empty"> {{ state.emptyText }}</span>
              </template>
              <component v-else class="circular" :is="'icon-loading-shadow'"></component>
            </div>
          </template>
          <!-- tiny 新增 footer插槽 -->
          <slot name="footer"></slot>
        </tiny-select-dropdown>
      </transition>
    </div>
    <div v-if="hoverExpand && !state.isDisplayOnly" class="tiny-base-select__placeholder">
      <input class="tiny-input__inner" disabled />
    </div>
  </div>
</template>

<script lang="ts">
import { renderless } from '@tinysmall/renderless/base-select/vue'
import { $constants } from '@tinysmall/renderless/base-select/constants'
import { setup, defineComponent } from '@tinysmall/common'
import { t } from '@tinysmall/locale'
import TinyTag from '@tinysmall/tag'
import TinyInput from '@tinysmall/input'
import TinyOption from '@tinysmall/option'
import TinyScrollbar from '@tinysmall/scrollbar'
import TinySelectDropdown from '@tinysmall/select-dropdown'
import TinyButton from '@tinysmall/button'
import { Clickoutside, AutoTip } from '@tinysmall/directive'
import {
  iconClose,
  iconHalfselect,
  iconCheck,
  iconCheckedSur,
  iconCopy,
  iconDownWard,
  iconSearch,
  iconEllipsis,
  iconChevronUp,
  iconAddCircle,
  iconLoadingShadow
} from '@tinysmall/icon'
import TinyTooltip from '@tinysmall/tooltip'
import RecycleScroller from '@tinysmall/recycle-scroller'

import '@tinysmall/theme/select/index.less'
import '@tinysmall/theme/base-select/index.less'

const getReference = (el, binding) => {
  const _ref = binding.expression ? binding.value : binding.arg
  const popper = binding.instance.$refs[_ref]

  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el
    } else {
      popper.$refs.reference = el
    }
  }
}

export const baseSelectProps = {
  id: [Number, String],
  name: String,
  size: String,
  remote: Boolean,
  remoteConfig: {
    type: Object,
    default() {
      return {
        showIcon: false,
        clearData: false,
        autoSearch: false
      }
    }
  },
  title: String,
  loading: Boolean,
  disabled: Boolean,
  options: Array,
  dataset: Object,
  textField: {
    type: String,
    default: 'label'
  },
  tabindex: {
    type: String,
    default: '1'
  },
  valueField: {
    type: String,
    default: 'value'
  },
  placement: {
    type: String,
    default: 'bottom-start'
  },
  showCheck: {
    type: Boolean,
    default: true
  },
  showAlloption: {
    type: Boolean,
    default: true
  },
  multiple: Boolean,
  clearable: Boolean,
  noDataText: String,
  filterable: Boolean,
  loadingText: String,
  noMatchText: String,
  popperClass: String,
  allowCreate: Boolean,
  collapseTags: Boolean,
  remoteMethod: Function,
  filterMethod: Function,
  reserveKeyword: Boolean,
  automaticDropdown: Boolean,
  defaultFirstOption: Boolean,
  modelValue: {},
  valueKey: {
    type: String,
    default: 'value'
  },
  placeholder: {
    type: String,
    default: () => t('ui.select.placeholder')
  },
  searchPlaceholder: {
    type: String,
    default: () => t('ui.select.pleaseSearch')
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  multipleLimit: {
    type: Number,
    default: 0
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  hideDrop: {
    type: Boolean,
    default: false
  },
  copyable: {
    type: Boolean,
    default: false
  },
  renderType: String,
  gridOp: {
    type: Object,
    default: () => ({})
  },
  treeOp: {
    type: Object,
    default: () => ({})
  },
  delay: {
    type: Number,
    default: 200
  },
  readonly: Boolean,
  dropStyle: {
    type: Object,
    default: () => ({})
  },
  cacheOp: Object,
  isDropInheritWidth: Boolean,
  tagSelectable: {
    type: Boolean,
    default: false
  },
  selectConfig: {
    type: Object,
    default() {
      return {
        checkMethod() {
          return true
        }
      }
    }
  },
  radioConfig: {
    type: Object,
    default() {
      return {
        checkMethod() {
          return true
        }
      }
    }
  },
  allowCopy: {
    type: Boolean,
    default: false
  },
  textSplit: {
    type: String,
    default: ','
  },
  autoClose: Boolean,
  queryDebounce: Number,
  ignoreEnter: {
    type: Boolean,
    default: false
  },
  dropdownIcon: {
    type: [Object, String],
    default: ''
  },
  disabledTooltipContent: String,
  hoverExpand: {
    type: Boolean,
    default: false
  },
  optimization: [Boolean, Object],
  displayOnly: {
    type: Boolean,
    default: false
  },
  initQuery: Function,
  extraQueryParams: {
    type: [Object, String, Boolean, Array, Number],
    default: ''
  },
  updateDelay: {
    type: Number,
    default: 0
  },
  showTips: {
    type: Boolean,
    default: true
  },
  closeByMask: {
    type: Boolean,
    default: true
  },
  keepFocus: {
    type: Boolean,
    default: false
  },
  popperOptions: {
    type: Object,
    default: () => ({ gpuAcceleration: false, boundariesPadding: 0 })
  },
  trim: {
    type: Boolean,
    default: false
  },
  topCreate: {
    type: Boolean,
    default: false
  },
  topCreateText: {
    type: String,
    default: () => t('ui.select.add')
  },
  initLabel: {
    type: String,
    default: ''
  },
  tooltipConfig: {
    type: Object,
    default() {
      return {}
    }
  },
  showEmptyValue: Boolean,
  dropdownHeight: {
    type: String,
    default: 'initial'
  },
  stopPropagation: {
    type: Boolean,
    default: undefined
  },
  /** 是否在选中项超出时显示 tooltip，取自原 pc.vue props 数组 */
  showOverflowTooltip: Boolean,
  /** 是否显示下拉，取自原 pc.vue props 数组 */
  showDropdown: Boolean,
  /** 是否展开标签，取自原 pc.vue props 数组 */
  expandTags: Boolean,
  // 以下为 tiny 新增
  searchable: {
    type: Boolean,
    default: false
  },
  showEmptyImage: {
    type: Boolean,
    default: false
  },
  inputBoxType: {
    type: String,
    validator: (value: string) => ['normal', 'underline'].includes(value)
  },
  tagType: {
    type: String,
    default: ''
  },
  clearNoMatchValue: {
    type: Boolean,
    default: false
  },
  showLimitText: {
    type: Boolean,
    default: false
  },
  showProportion: {
    type: Boolean,
    default: false
  },
  clickExpand: {
    type: Boolean,
    default: false
  },
  maxVisibleRows: {
    type: Number,
    default: $constants.MAX_VISIBLE_ROWS
  },
  allText: {
    type: String,
    default: ''
  },
  showAllTextTag: {
    type: Boolean,
    default: false
  },
  // 配置多选时，Tag的最大宽度
  maxTagWidth: {
    type: [String, Number],
    default: null
  },
  autoSelect: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: 'TinyBaseSelect',
  componentName: 'BaseSelect',
  emits: [
    'update:modelValue',
    'change',
    'focus',
    'blur',
    'clear',
    'remove-tag',
    'visible-change',
    'handleDropdownClick',
    'dropdown-click',
    'top-create-click'
  ],
  directives: {
    Clickoutside,
    AutoTip,
    popover: {
      beforeMount(el, binding) {
        getReference(el, binding)
      },
      mounted(el, binding) {
        getReference(el, binding)
      }
    }
  },
  components: {
    TinyTag,
    TinyInput,
    TinyOption,
    TinyButton,
    IconClose: iconClose(),
    TinyScrollbar,
    IconCopy: iconCopy(),
    IconAddCircle: iconAddCircle(),
    IconLoadingShadow: iconLoadingShadow(),
    TinySelectDropdown,
    IconHalfselect: iconHalfselect(),
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    TinyTooltip,
    TinyRecycleScroller: RecycleScroller,
    // tiny 新增，
    IconSearch: iconSearch(),
    IconDownWard: iconDownWard(), // 默认下拉图标
    IconEllipsis: iconEllipsis(),
    IconChevronUp: iconChevronUp()
  },
  props: baseSelectProps,
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
