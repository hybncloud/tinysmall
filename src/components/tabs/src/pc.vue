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
<script lang="tsx">
import { renderless } from '@tinysmall/renderless/tabs/vue'
import { setup, h, defineComponent } from '@tinysmall/common'
import TabNav from './tab-nav/pc.vue'
import { iconPlus } from '@tinysmall/icon'
import '@tinysmall/theme/tabs/index.less'
import type { ITabsApi } from '@tinysmall/renderless/types/tabs.type'

export const tabsProps = {
  tabStyle: String,
  activeName: String,
  withClose: Boolean,
  withAdd: Boolean,
  size: String,
  modelValue: {},
  editable: Boolean,
  position: {
    type: String,
    default: 'top'
  },
  beforeLeave: Function,
  stretch: Boolean,
  showMoreTabs: Boolean,
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  dropConfig: {
    type: Object,
    default: () => null
  },
  separator: Boolean,
  // tiny 新增
  showExpandTabs: Boolean,
  expandTabsTitle: String,
  expandTabsMode: String,
  tooltipConfig: [String, Object],
  beforeClose: Function,
  overflowTitle: Boolean,
  titleWidth: String,
  // tiny 新增
  moreShowAll: Boolean,
  panelMaxHeight: String,
  panelWidth: String,
  // 只渲染头部
  headerOnly: Boolean
}

export default defineComponent({
  name: 'TinyTabs',
  emits: ['add', 'click', 'close', 'edit', 'update:modelValue', 'tab-drag-start', 'tab-drag-over', 'tab-drag-end'],
  props: tabsProps,
  components: {
    TabNav,
    IconPlus: iconPlus()
  },
  provide() {
    return {
      moreIcon: this.$slots.moreIcon
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless })
  },
  render() {
    let {
      state,
      tabStyle,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      handleTabDragStart,
      handleTabDragOver,
      handleTabDragEnd,
      editable,
      withAdd,
      position,
      size,
      stretch,
      showMoreTabs,
      popperClass,
      popperAppendToBody,
      dropConfig,
      tooltipConfig,
      overflowTitle,
      titleWidth,
      panelMaxHeight,
      panelWidth,
      headerOnly
    } = this

    const newButton =
      editable || withAdd ? (
        <span
          class="tiny-tabs__new-tab"
          role="button"
          aria-label="添加新标签页"
          tabindex="0"
          onClick={handleTabAdd}
          onKeydown={(ev) => {
            if (ev.key === 'Enter') {
              ev.preventDefault()
              handleTabAdd()
            }
          }}
        >
          <icon-plus aria-hidden="true" />
        </span>
      ) : null

    const navData = {
      currentName: state.currentName,
      panes: state.panes,
      onTabClick: handleTabClick,
      onTabRemove: handleTabRemove,
      showPanesCount: state.showPanesCount,
      editable,
      tabStyle,
      size,
      stretch,
      showMoreTabs,
      popperClass,
      popperAppendToBody,
      dropConfig,
      tooltipConfig,
      overflowTitle,
      titleWidth,
      separator: state.separator,
      panelMaxHeight,
      panelWidth,
      onTabDragStart: handleTabDragStart,
      onTabDragOver: handleTabDragOver,
      onTabDragEnd: handleTabDragEnd,
      ref: 'nav'
    }

    const TabNavComponent = h(TabNav, { ...navData })

    this.$nextTick(() => {
      if (this.$refs.nav) {
        this.$refs.nav.$forceUpdate()
        // 用 rAF 确保级联 DOM 更新完成后再重算溢出
        requestAnimationFrame(() => {
          this.calcMorePanes()
        })
      }
    })

    const header = (
      <div class={['tiny-tabs__header', `is-${position}`]}>
        {TabNavComponent}
        {newButton}
      </div>
    )

    const panels = headerOnly ? this.slots.default?.() : <div class="tiny-tabs__content">{this.slots.default?.()}</div>

    return (
      <div
        class={{
          'tiny-tabs': true,
          'tiny-tabs--card': tabStyle === 'card',
          [`tiny-tabs--${!state.separator ? position : 'top'}`]: true,
          'tiny-tabs--border-card': tabStyle === 'border-card',
          'tiny-tabs--button-card': tabStyle === 'button-card',
          'tiny-tabs--small': size === 'small',
          'tiny-tabs--large': size === 'large',
          'tiny-tabs--header-only': headerOnly
        }}
      >
        {position !== 'bottom' ? [header, panels] : [panels, header]}
      </div>
    )
  }
})
</script>
