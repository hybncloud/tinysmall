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
    class="tiny-tree"
    :class="{
      'tiny-tree--highlight-current': highlightCurrent,
      'is-dragging': !!state.dragState.draggingNode,
      'is-drop-not-allow': !state.dragState.allowDrop,
      'is-drop-inner': state.dragState.dropType === 'inner',
      'tiny-tree--small': size === 'small'
    }"
    role="tree"
  >
    <!-- 树视图 -->
    <template v-if="viewType === 'tree'">
      <tree-node
        v-for="child in state.renderedChildNodes"
        v-highlight-query="highlightQuery ? state.filterText : ''"
        :action="state.action"
        :show-radio="showRadio"
        :show-number="showNumber"
        :is-show-focus-bg="isShowFocusBg"
        :collapsible="collapsible"
        :node-height="nodeHeight"
        :current-radio="state.currentRadio"
        @radio-change="state.currentRadio.value = $event"
        :expand-icon="expandIcon"
        :shrink-icon="shrinkIcon"
        :expand-icon-color="expandIconColor"
        :shrink-icon-color="shrinkIconColor"
        :node="child"
        :props="props"
        :render-after-expand="renderAfterExpand"
        :show-checkbox="showCheckbox"
        :key="getNodeKey(child)"
        :node-key="nodeKey"
        :render-content="renderContent"
        @node-expand="handleNodeExpand"
        :check-easily="state.checkEasily"
        :show-line="showLine"
        :show-checked-mark="showCheckedMark"
      >
        <template #prefix="slotScoped"><slot name="prefix" :node="slotScoped.node"></slot></template>
        <template #suffix="slotScoped"><slot name="suffix" :node="slotScoped.node"></slot></template>
        <template #operation="slotScoped"><slot name="operation" :node="slotScoped.node"></slot></template>
      </tree-node>
    </template>

    <!-- 平铺视图 -->
    <template v-else-if="viewType === 'plain'">
      <div
        v-for="(plainNode, i) in state.plainNodeStore.filteredNodes"
        :key="`${plainNode.nodeKeyPath}-${i}`"
        class="tiny-tree__plain-node"
      >
        <div class="tiny-tree__plain-node-title">
          <tiny-checkbox
            v-if="showCheckbox"
            :model-value="plainNode.node.checked"
            :indeterminate="plainNode.node.indeterminate"
            :disabled="!!plainNode.node.disabled"
            @change="handleCheckPlainNode($event, plainNode)"
          ></tiny-checkbox>
          <tiny-radio
            v-if="showRadio"
            v-model="state.currentRadio.value"
            :validate-event="false"
            :label="plainNode.node.id"
            :disabled="!!plainNode.node.disabled"
            @change="handleCheckPlainNode($event === plainNode.node.id, plainNode)"
          ></tiny-radio>
          <slot name="prefix" :node="plainNode.node"></slot>
          <slot name="default" :node="plainNode.node">
            <span class="tiny-tree__plain-node-title-txt" v-highlight-query="highlightQuery ? state.filterText : ''">{{
              plainNode.title
            }}</span>
          </slot>
          <slot name="suffix" :node="plainNode.node">
            <span class="tiny-tree__plain-node-title-loc">
              <icon-mark-on @click="handleClickPlainNode($event, plainNode)"></icon-mark-on>
            </span>
          </slot>
        </div>
        <div v-if="showAuxi && plainNode.auxi" class="tiny-tree__plain-node-auxi">
          <div>{{ plainNode.auxi }}</div>
        </div>
      </div>
    </template>

    <div class="tiny-tree__empty-block" v-if="state.isEmpty">
      <slot name="empty">
        <span class="tiny-tree__empty-text">{{ state.loaded ? state.showEmptyText : t('ui.tree.loading') }}</span>
      </slot>
    </div>
    <div v-show="state.dragState.showDropIndicator" class="tiny-tree__drop-indicator" ref="dropIndicator"></div>
    <div class="tiny-tree__strict-bottom" v-if="state.store.checkStrictly && showCheckEasily">
      <div class="tiny-tree__strict-bottom-content">
        <tiny-switch mini @change="switchToggle" v-model="state.checkEasily"></tiny-switch>
        <div class="tiny-tree__bottom-text">
          <slot name="switchText">
            <span>{{ t('ui.tree.switchText') }}</span>
          </slot>
        </div>
      </div>
    </div>

    <tiny-popover
      ref="deletePopover"
      v-if="state.action.show"
      v-show="state.action.popoverVisible"
      v-model="state.action.popoverVisible"
      popper-class="tiny-tree__del-popover"
      placement="top"
      :width="state.action.isLeaf ? 200 : 270"
      trigger="manual"
      :reference="state.action.referenceElm"
    >
      <div class="tiny-tree__del-body" v-clickoutside="cancelDelete">
        <div class="tiny-tree__del-icon">
          <icon-warning></icon-warning>
        </div>
        <div class="tiny-tree__del-content">
          <template v-if="state.action.isLeaf">
            <div>{{ t('ui.tree.deleteTip1') }}</div>
          </template>
          <template v-else>
            <div>{{ t('ui.tree.deleteTip2') }}</div>
            <div class="tiny-tree__del-checkbox">
              <tiny-checkbox v-model="state.action.isSaveChildNode" ref="deleteCheckbox">{{
                t('ui.tree.deleteTip3')
              }}</tiny-checkbox>
            </div>
          </template>
        </div>
      </div>
      <div class="tiny-tree__del-footer">
        <tiny-button @click="cancelDelete" size="mini">{{ t('ui.base.cancel') }}</tiny-button>
        <tiny-button type="primary" @click="deleteAction" size="mini">{{ t('ui.base.confirm') }}</tiny-button>
      </div>
    </tiny-popover>
  </div>
</template>

<script lang="tsx">
import { renderless } from '@tinysmall/renderless/tree/vue'
import { $constants } from '@tinysmall/renderless/tree/constants'
import { setup, defineComponent } from '@tinysmall/common'
import { iconWarning, iconMarkOn } from '@tinysmall/icon'
import Switch from '@tinysmall/switch'
import Popover from '@tinysmall/popover'
import Button from '@tinysmall/button'
import Checkbox from '@tinysmall/checkbox'
import { Clickoutside } from '@tinysmall/directive'
import TreeNode from './tree-node.vue'
import Radio from '@tinysmall/radio'
import { HighlightQuery } from '@tinysmall/directive'

export const treeProps = {
  /** 树主题样式，取自原 pc.vue props 数组 */
  theme: String,
  accordion: Boolean,
  allowDrag: Function,
  allowDrop: Function,
  autoExpandParent: {
    type: Boolean,
    default: true
  },
  checkDescendants: {
    type: Boolean,
    default: false
  },
  checkOnClickNode: Boolean,
  checkStrictly: Boolean,
  currentNodeKey: [String, Number],
  data: {
    type: Array
  },
  dataset: Object,
  defaultCheckedKeys: Array,
  defaultExpandAll: Boolean,
  defaultExpandedKeys: Array,
  defaultExpandedKeysHighlight: [Number, String],
  draggable: {
    type: Boolean,
    default: false
  },
  emptyText: String,
  expandIcon: Object,
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  filterNodeMethod: Function,
  highlightCurrent: Boolean,
  icon: Object,
  iconTriggerClickNode: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  lazy: {
    type: Boolean,
    default: false
  },
  load: Function,
  nodeKey: String,
  parentKey: String,
  props: {
    default() {
      return {
        children: 'children',
        label: 'label',
        disabled: 'disabled',
        isLeaf: 'isLeaf'
      }
    }
  },
  renderAfterExpand: {
    type: Boolean,
    default: true
  },
  renderContent: Function,
  showCheckbox: {
    type: Boolean,
    default: false
  },
  showContextmenu: {
    type: Boolean,
    default: false
  },
  showRadio: {
    type: Boolean,
    default: false
  },
  showNumber: {
    type: Boolean,
    default: false
  },
  collapsible: {
    type: Boolean,
    default: true
  },
  showCheckEasily: {
    type: Boolean,
    default: false
  },
  nodeHeight: Number,
  shrinkIcon: Object,
  expandIconColor: String,
  shrinkIconColor: String,
  size: {
    type: String,
    default: 'medium'
  },
  deleteDisabledKeys: Array,
  editDisabledKeys: Array,
  addDisabledKeys: Array,
  viewType: {
    type: String,
    default: 'tree',
    validator: (value) => ~['tree', 'plain'].indexOf(value)
  },
  // 平铺视图时，是否显示下面的辅助信息
  showAuxi: {
    type: Boolean,
    default: true
  },
  pathSplit: {
    type: String,
    default: '/'
  },
  filterPlainMethod: Function,
  afterLoad: Function,
  lazyCurrent: Boolean,
  baseIndent: {
    type: Number,
    default: 0
  },
  deleteNodeMethod: Function,
  showCheckedMark: Boolean,
  willChangeView: {
    type: Boolean,
    default: true
  },
  onlyCheckChildren: Boolean,
  editConfig: {
    type: Object,
    default: () => ({})
  },
  showLine: Boolean,
  isShowFocusBg: {
    type: Boolean,
    default: true
  },
  // 是否在匹配的节点中，高亮搜索文字
  highlightQuery: {
    type: Boolean,
    default: false
  }
}

export default defineComponent({
  name: 'TinyTree',
  directives: { Clickoutside, HighlightQuery },
  props: treeProps,
  components: {
    TreeNode,
    IconWarning: iconWarning(),
    IconMarkOn: iconMarkOn(),
    TinyPopover: Popover,
    TinyCheckbox: Checkbox,
    TinyButton: Button,
    TinySwitch: Switch,
    TinyRadio: Radio
  },
  emits: [
    'node-expand',
    'check-change',
    'check',
    'node-drag-over',
    'node-drag-enter',
    'node-drag-leave',
    'node-drag-start',
    'node-drag-end',
    'node-drop',
    'current-change',
    'node-click',
    'leave-plain-view',
    'check-plain',
    'load-data',
    'open-edit',
    'close-edit',
    'save-edit',
    'add-node',
    'edit-node',
    'delete-node',
    'closeMenu'
  ],
  provide() {
    return {
      parentTree: this,
      TreeRoot: this
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless })
  }
})
</script>
