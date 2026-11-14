import { $props } from '@tinysmall/common'

export const tabNavPcProps = {
  ...$props,
  panes: {
    type: Array,
    default: () => []
  },
  currentName: String,
  editable: Boolean,
  overflowTitle: Boolean,
  onTabClick: {
    type: Function,
    default: () => {}
  },
  onTabRemove: {
    type: Function,
    default: () => {}
  },
  tabStyle: String,
  stretch: Boolean,
  showMoreTabs: Boolean,
  showPanesCount: Number,
  popperClass: String,
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  dropConfig: {
    type: Object,
    default: () => null
  },
  titleWidth: {
    type: String,
    default: '256px'
  },
  // tiny 新增
  tooltipConfig: [String, Object],
  panelMaxHeight: String,
  panelWidth: String
}

export const tabBarProps = {
  ...$props,
  tabs: Array
}
