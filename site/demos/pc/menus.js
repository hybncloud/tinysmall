export const standaloneMenus = [
  {
    label: '组件总览',
    key: 'overview'
  }
]

export const docMenus = [
  {
    'label': '使用指南',
    'labelEn': 'Usage Guidelines',
    'key': 'docs-usage-guidelines',
    'children': [
      { 'title': '更新日志', 'titleEn': 'Changelog', 'key': 'changelog' },
      { 'title': '环境准备', 'titleEn': 'envpreparation', 'key': 'envpreparation' },
      { 'title': '安装', 'titleEn': 'installation', 'key': 'installation' },
      { 'title': '引入组件', 'titleEn': 'importComponents', 'key': 'import-components' },
      { 'title': '国际化', 'titleEn': 'i18n', 'key': 'i18n' },
      {
        'title': '主题配置',
        'titleEn': 'theme',
        'key': 'theme'
      },
      {
        'title': '暗黑模式',
        'titleEn': 'theme-dark',
        'key': 'theme-dark'
      },
      {
        'title': '全局动效配置',
        'titleEn': 'motion-configuration',
        'key': 'motion-configuration'
      },
      { 'title': '表单校验配置', 'titleEn': 'formValid', 'key': 'form-valid' },
      { 'title': '常见问题', 'titleEn': 'faq', 'key': 'faq' }
    ]
  }
]

export const cmpMenus = [
  {
    'label': '基础',
    'labelEn': 'Basic',
    'key': 'cmp-frame-style',
    'children': [
      { 'nameCn': '按钮', 'name': 'Button', 'key': 'button' },
      { 'nameCn': '按钮组', 'name': 'ButtonGroup', 'key': 'button-group' },
      { 'nameCn': '全局配置', 'name': 'ConfigProvider', 'key': 'config-provider' },
      { 'nameCn': '图标', 'name': 'Icon', 'key': 'icon' },
      { 'nameCn': '栅格布局', 'name': 'Layout', 'key': 'layout' },
      { 'nameCn': '链接', 'name': 'Link', 'key': 'link' },
      { 'nameCn': '分割线', 'name': 'Divider', 'key': 'divider' },
      {
        'nameCn': '虚拟化容器',
        'name': 'VirtualScrollBox',
        'key': 'virtual-scroll-box'
      },
      {
        'nameCn': '间距',
        'name': 'Space',
        'key': 'space'
      }
    ]
  },
  {
    'label': '导航',
    'labelEn': 'Navigation',
    'key': 'cmp-navigation-components',
    'children': [
      { 'nameCn': '动作菜单', 'name': 'ActionMenu', 'key': 'action-menu' },
      { 'nameCn': '锚点', 'name': 'Anchor', 'key': 'anchor' },
      { 'nameCn': '面包屑', 'name': 'Breadcrumb', 'key': 'breadcrumb' },
      { 'nameCn': '下拉菜单', 'name': 'Dropdown', 'key': 'dropdown' },
      { 'nameCn': '分页', 'name': 'Pager', 'key': 'pager' },
      { 'nameCn': '步骤条', 'name': 'Steps', 'key': 'steps' },
      { 'nameCn': '页签', 'name': 'Tabs', 'key': 'tabs' }
    ]
  },
  {
    'label': '表单',
    'labelEn': 'Form',
    'key': 'cmp-form-components',
    'children': [
      { 'nameCn': '自动完成', 'name': 'AutoComplete', 'key': 'autocomplete' },
      {
        'nameCn': '基础选择器',
        'name': 'BaseSelect',
        'key': 'base-select'
      },
      { 'nameCn': '级联选择器', 'name': 'Cascader', 'key': 'cascader' },
      { 'nameCn': '级联面板', 'name': 'CascaderPanel', 'key': 'cascader-panel' },
      { 'nameCn': '多选框', 'name': 'Checkbox', 'key': 'checkbox' },
      { 'nameCn': '日期选择器', 'name': 'DatePicker', 'key': 'date-picker' },
      { 'nameCn': '日期选择面板', 'name': 'DatePanel', 'key': 'date-panel' },
      { 'nameCn': '下拉时间', 'name': 'DropTimes', 'key': 'drop-times' },
      { 'nameCn': '文件上传', 'name': 'FileUpload', 'key': 'file-upload' },
      { 'nameCn': '表单', 'name': 'Form', 'key': 'form' },
      { 'nameCn': '输入框', 'name': 'Input', 'key': 'input' },
      { 'nameCn': '数字输入框', 'name': 'Numeric', 'key': 'numeric' },
      { 'nameCn': '弹出上传', 'name': 'PopUpload', 'key': 'pop-upload' },
      { 'nameCn': '单选框', 'name': 'Radio', 'key': 'radio' },
      { 'nameCn': '评分', 'name': 'Rate', 'key': 'rate' },
      { 'nameCn': '搜索', 'name': 'Search', 'key': 'search' },
      { 'nameCn': '滑块', 'name': 'Slider', 'key': 'slider' },
      { 'nameCn': '开关', 'name': 'Switch', 'key': 'switch' },
      { 'nameCn': '时间选择器', 'name': 'TimePicker', 'key': 'time-picker' },
      { 'nameCn': '时间选择', 'name': 'TimeSelect', 'key': 'time-select' },
      { 'nameCn': '穿梭框', 'name': 'Transfer', 'key': 'transfer' },
      {
        'nameCn': '树形选择器',
        'name': 'TreeSelect',
        'key': 'tree-select'
      }
    ]
  },
  {
    'label': '数据展示',
    'labelEn': 'Data Display',
    'key': 'cmp-data-components',
    'children': [
      { 'nameCn': '标记', 'name': 'Badge', 'key': 'badge' },
      { 'nameCn': '日历', 'name': 'Calendar', 'key': 'calendar' },
      { 'nameCn': '日历视图', 'name': 'CalendarView', 'key': 'calendar-view' },
      { 'nameCn': '走马灯', 'name': 'Carousel', 'key': 'carousel' },
      { 'nameCn': '折叠面板', 'name': 'Collapse', 'key': 'collapse' },
      { 'nameCn': '引导', 'name': 'Guide', 'key': 'guide' },
      { 'nameCn': '图片', 'name': 'Image', 'key': 'image' },
      { 'nameCn': '二维码', 'name': 'QrCode', 'key': 'qr-code' },
      { 'nameCn': '统计数值', 'name': 'Statistic', 'key': 'statistic' },
      { 'nameCn': '标签', 'name': 'Tag', 'key': 'tag' },
      { 'nameCn': '时间线', 'name': 'Timeline', 'key': 'time-line' },
      { 'nameCn': '树形控件', 'name': 'Tree', 'key': 'tree' },
      {
        'nameCn': '虚拟化树形控件',
        'name': 'VirtualTree',
        'key': 'virtual-tree'
      },
      { 'nameCn': '用户头像', 'name': 'UserHead', 'key': 'user-head' }
    ]
  },
  {
    'label': '反馈',
    'labelEn': 'Feedback',
    'key': 'cmp-tips-components',
    'children': [
      { 'nameCn': '警告', 'name': 'Alert', 'key': 'alert' },
      { 'nameCn': '对话框', 'name': 'DialogBox', 'key': 'dialog-box' },
      {
        'nameCn': '异常页',
        'name': 'Exception',
        'key': 'exception'
      },
      { 'nameCn': '加载', 'name': 'Loading', 'key': 'loading' },
      { 'nameCn': '模态框', 'name': 'Modal', 'key': 'modal' },
      { 'nameCn': '消息提示', 'name': 'Message', 'key': 'message' },
      { 'nameCn': '通知', 'name': 'Notify', 'key': 'notify' },
      { 'nameCn': '气泡确认框', 'name': 'PopConfirm', 'key': 'popconfirm' },
      { 'nameCn': '进度条', 'name': 'Progress', 'key': 'progress' },
      { 'nameCn': '气泡卡片', 'name': 'Popover', 'key': 'popover' },
      { 'nameCn': '骨架屏', 'name': 'Skeleton', 'key': 'skeleton' },
      { 'nameCn': '文字提示', 'name': 'Tooltip', 'key': 'tooltip' }
    ]
  },
  {
    'label': '其他',
    'labelEn': 'Other',
    'key': 'cmp-other-components',
    'children': [
      { 'nameCn': '浮动块', 'name': 'Floatbar', 'key': 'floatbar' },
      { 'nameCn': '全屏', 'name': 'Fullscreen', 'key': 'fullscreen' },
      { 'nameCn': '文字滚动', 'name': 'ScrollText', 'key': 'scroll-text' },
      { 'nameCn': '水印', 'name': 'Watermark', 'key': 'watermark' },
      {
        'nameCn': '粘性布局',
        'name': 'Sticky',
        'key': 'sticky'
      }
    ]
  }
]
