export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN': '使用 <code>options</code> 属性配置菜单内容，<code>label</code> 定义节点的显示文本。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 字段设置当前下拉选项是否为禁用状态。</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '图标'
      },
      desc: {
        'zh-CN':
          '通过 <code>icon</code> 属性设置菜单项的图标，<code>suffix-icon</code> 设置下拉触发源图标，<code>show-icon</code> 设置是否显示下拉触发源图标。'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'text-field',
      name: {
        'zh-CN': '映射字段'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text-field</code> 属性设置菜单项文本的键值，默认为 label。</p>'
      },
      codeFiles: ['text-field.vue']
    },
    {
      demoId: 'more-text',
      name: {
        'zh-CN': '下拉按钮文本'
      },
      desc: {
        'zh-CN': '<p>通过 <code>more-text</code> 属性设置下拉按钮文本，默认为 <code>更多</code>。</p>'
      },
      codeFiles: ['more-text.vue']
    },
    {
      demoId: 'spacing',
      name: {
        'zh-CN': '间距'
      },
      desc: {
        'zh-CN': '<p>通过 <code>spacing</code> 属性设置菜单按钮之间的间距，默认为 <code>5px</code>。</p>'
      },
      codeFiles: ['spacing.vue']
    },
    {
      demoId: 'card-mode',
      name: {
        'zh-CN': '菜单模式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>mode</code> 属性设置菜单模式以适配在不同场景中能够使用，例如：菜单按钮在卡片中使用，可以配置为 <code>card</code>，卡片模式字体为黑色，间距为 10px。  <code>mode</code> 默认为值<code>default</code>。</p>'
      },
      codeFiles: ['card-mode.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '弹框样式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>popper-class</code> 属性设置下拉面板的类名，自定义样式。</p>'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'max-show-num',
      name: {
        'zh-CN': '个数限制'
      },
      desc: {
        'zh-CN': '<p>通过 <code>max-show-num</code> 属性设置最多显示菜单按钮的个数，默认为 2。</p>'
      },
      codeFiles: ['max-show-num.vue']
    },
    {
      demoId: 'slot-item',
      name: {
        'zh-CN': '菜单项插槽'
      },
      desc: {
        'zh-CN': '<p>通过 <code>item</code> 插槽自定义下拉选项的 HTML 模板。</p>'
      },
      codeFiles: ['slot-item.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">事件说明</p>\n<p>item-click：监听菜单项的点击事件。</p>\n<p>more-click：监听下拉按钮的点击事件。trigger 为 click 时生效。</p>\n<p>visible-change：监听下拉弹框的显示或隐藏状态变化。</p>\n</div>\n'
      },
      codeFiles: ['events.vue']
    }
  ],
  features: [
    {
      id: 'options',
      name: '菜单配置',
      support: {
        value: true
      },
      description: '通过 options 属性配置菜单内容，label 定义节点的显示文本。',
      cloud: {
        value: true
      },
      apis: ['options', 'label'],
      demos: ['basic-usage']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 字段设置当前下拉选项是否为禁用状态。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'icon',
      name: '图标配置',
      support: {
        value: true
      },
      description: '支持设置菜单项图标、下拉触发源图标，以及控制图标显示。',
      cloud: {
        value: true
      },
      apis: ['icon', 'suffix-icon', 'show-icon'],
      demos: ['icon']
    },
    {
      id: 'text-field',
      name: '文本映射',
      support: {
        value: true
      },
      description: '通过 text-field 属性设置菜单项文本的键值，默认为 label。',
      cloud: {
        value: true
      },
      apis: ['text-field'],
      demos: ['text-field']
    },
    {
      id: 'more-text',
      name: '下拉按钮文本',
      support: {
        value: true
      },
      description: '通过 more-text 属性设置下拉按钮文本，默认为"更多"。',
      cloud: {
        value: true
      },
      apis: ['more-text'],
      demos: ['more-text']
    },
    {
      id: 'spacing',
      name: '间距设置',
      support: {
        value: true
      },
      description: '通过 spacing 属性设置菜单按钮之间的间距，默认为 5px。',
      cloud: {
        value: true
      },
      apis: ['spacing'],
      demos: ['spacing']
    },
    {
      id: 'mode',
      name: '菜单模式',
      support: {
        value: true
      },
      description: '支持设置菜单模式以适配不同场景，如卡片模式等。',
      cloud: {
        value: true
      },
      apis: ['mode'],
      demos: ['card-mode']
    },
    {
      id: 'popper-class',
      name: '弹框样式',
      support: {
        value: true
      },
      description: '通过 popper-class 属性设置下拉面板的类名，支持自定义样式。',
      cloud: {
        value: true
      },
      apis: ['popper-class'],
      demos: ['popper-class']
    },
    {
      id: 'max-show-num',
      name: '显示个数限制',
      support: {
        value: true
      },
      description: '通过 max-show-num 属性设置最多显示菜单按钮的个数，默认为 2。',
      cloud: {
        value: true
      },
      apis: ['max-show-num'],
      demos: ['max-show-num']
    },
    {
      id: 'slot',
      name: '插槽功能',
      support: {
        value: true
      },
      description: '支持通过 item 插槽自定义下拉选项的 HTML 模板。',
      cloud: {
        value: true
      },
      apis: ['slot-item'],
      demos: ['slot-item']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '支持监听菜单项点击、下拉按钮点击、弹框显示状态变化等事件。',
      cloud: {
        value: true
      },
      apis: ['item-click', 'more-click', 'visible-change'],
      demos: ['events']
    }
  ]
}
