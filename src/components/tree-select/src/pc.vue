<template>
  <tiny-base-select
    ref="baseSelectRef"
    class="tiny-tree-select"
    v-model="state.modelValue"
    :clearable="clearable"
    :filterable="filterable"
    :filter-method="filter"
    :multiple="multiple"
    :hover-expand="hoverExpand"
    :click-expand="clickExpand"
    :collapse-tags="collapseTags"
    :dropdown-icon="dropdownIcon"
    :tag-type="tagType"
    :input-box-type="inputBoxType"
    :max-visible-rows="maxVisibleRows"
    :name="name"
    :autocomplete="autocomplete"
  >
    <template #panel>
      <tiny-tree
        ref="treeRef"
        :check-strictly="treeOp.checkStrictly"
        :current-node-key="!multiple ? state.currentKey : ''"
        :data="state.treeData"
        :default-checked-keys="multiple ? state.defaultCheckedKeys : treeOp.defaultCheckedKeys || []"
        :default-expand-all="
          treeOp.defaultExpandAll !== undefined
            ? treeOp.defaultExpandAll
            : (lazy !== undefined ? lazy : treeOp.lazy)
              ? false
              : true
        "
        :expand-on-click-node="false"
        :filter-node-method="filterMethod"
        :icon-trigger-click-node="false"
        :node-key="valueField"
        :props="{ label: textField }"
        :show-checkbox="multiple"
        :lazy="lazy !== undefined ? lazy : treeOp.lazy"
        :load="load || treeOp.load"
        :after-load="afterLoad || treeOp.afterLoad"
        @check="check"
        @node-click="nodeClick"
        v-bind="treeOp"
      ></tiny-tree>
    </template>
  </tiny-base-select>
</template>

<script lang="ts">
import { $props, $prefix, defineComponent, setup } from '@tinysmall/common'
import { renderless, api } from '@tinysmall/renderless/tree-select/vue'
import Tree from '@tinysmall/tree'
import BaseSelect from '@tinysmall/base-select'

export const treeSelectProps = {
    ...$props,
    clearable: Boolean,
    filterable: Boolean,
    filterMethod: Function,
    modelValue: {},
    multiple: Boolean,
    textField: {
      type: String,
      default: 'label'
    },
    treeOp: {
      type: Object,
      default: () => ({})
    },
    valueField: {
      type: String,
      default: 'value'
    },
    // 基础 props
    size: String,
    disabled: Boolean,
    placeholder: String,
    readonly: Boolean,
    // 弹框相关
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    dropStyle: {
      type: Object,
      default: () => ({})
    },
    // 标签相关
    collapseTags: Boolean,
    copyable: Boolean,
    textSplit: {
      type: String,
      default: ','
    },
    hoverExpand: Boolean,
    clickExpand: Boolean,
    showTips: {
      type: Boolean,
      default: true
    },
    // 搜索和过滤
    searchable: Boolean,
    // 多选相关
    multipleLimit: {
      type: Number,
      default: 0
    },
    // 下拉图标
    dropdownIcon: {
      type: [Object, String],
      default: ''
    },
    // 标签类型
    tagType: {
      type: String,
      default: ''
    },
    // 输入框类型
    inputBoxType: {
      type: String,
      default: 'normal',
      validator: (value: string) => ['normal', 'underline'].includes(value)
    },
    // 多行默认最大显示行数
    maxVisibleRows: {
      type: Number,
      default: 1
    },
    // 原生属性
    name: String,
    autocomplete: {
      type: String,
      default: 'off'
    },
    // 懒加载相关
    lazy: {
      type: Boolean,
      default: false
    },
    load: Function,
    afterLoad: Function
  }

export default defineComponent({
  name: $prefix + 'TreeSelect',
  components: {
    TinyTree: Tree,
    TinyBaseSelect: BaseSelect
  },
  props: treeSelectProps,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
