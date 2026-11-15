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
        'zh-CN': '<p>使用 tiny-dropdown-item 定义菜单节点。</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置 菜单 或者 菜单项 为禁用状态。</p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'placement',
      name: {
        'zh-CN': '展开位置'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>placement</code> 属性设置为 <code>bottom-start</code> 设置右侧展开。默认值为左侧展开。\n'
      },
      codeFiles: ['placement.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 属性可配置其他尺寸，可选值：<code>medium</code> / <code>small</code> / <code>mini</code>。</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'border',
      name: {
        'zh-CN': '边框 / 圆角'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>border</code> 属性设置是否展示边框，<code>border</code> 为 <code>true</code> 时，通过<code>round</code> 属性设置是否为圆角。</p>\n'
      },
      codeFiles: ['border.vue']
    },
    {
      demoId: 'show-icon',
      name: {
        'zh-CN': '图标'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-icon</code> 属性设置是否显示下拉触发源图标，<code>suffix-icon</code> 设置下拉触发源图标。</p>\n'
      },
      codeFiles: ['show-icon.vue']
    },
    {
      demoId: 'trigger',
      name: {
        'zh-CN': '触发方式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>trigger</code> 属性设置触发下拉的方式，默认为 <code>hover</code>。可选值为：<code>click</code> / <code>hover</code> / <code>contextmenu</code>（3.28.0 起支持）。</p>\n'
      },
      codeFiles: ['trigger.vue']
    },
    {
      demoId: 'visible',
      name: {
        'zh-CN': '手动控制显隐'
      },
      desc: {
        'zh-CN': '<p>通过 <code>visible</code> 属性手动控制下拉菜单显隐，优先级高于trigger。</p>\n'
      },
      codeFiles: ['visible.vue']
    },
    {
      demoId: 'tip',
      name: {
        'zh-CN': '提示信息'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>tip</code> 属性设置提示信息，<code>tip-position</code> 属性设置提示信息的位置，<code>tip-effect</code> 属性设置提示信息的主题（light/dark）。</p>\n'
      },
      codeFiles: ['tip.vue']
    },
    {
      demoId: 'visible-arrow',
      name: {
        'zh-CN': '显示箭头'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>visible-arrow</code> 属性设置下拉弹框是否显示箭头，默认不显示。<code>visible-arrow</code> 为 true 时显示箭头。</p>\n'
      },
      codeFiles: ['visible-arrow.vue']
    },
    {
      demoId: 'hide-on-click',
      name: {
        'zh-CN': '点击后收起'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>hide-on-click</code> 属性设置点击菜单项后是否收起菜单弹框。默认为 true，点击后收起。</p>\n'
      },
      codeFiles: ['hide-on-click.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '触发源文本'
      },
      desc: {
        'zh-CN': '<p>通过 <code>title</code> 属性设置触发源的文本，默认为 <code>下拉菜单</code>。</p>\n'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'check-status',
      name: {
        'zh-CN': '选中态'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>checked-status</code> 属性启用选中态，<code>current-index</code> 属性设置索引值，<code>selected</code> 属性设置是否选中。</p>\n'
      },
      codeFiles: ['check-status.vue']
    },
    {
      demoId: 'options',
      name: {
        'zh-CN': '配置式'
      },
      desc: {
        'zh-CN':
          '<p><code>menu-options</code>属性：只使用 tiny-dropdown 组件配置式时使用。</p>\n<p><code>options</code>属性：使用 tiny-dropdown-menu 组件配置式时使用。</p>\n<p><code>text-field</code>属性：指定菜单文案显示的字段，默认为 label。 </p>\n<p><code>title</code>属性：设置触发源的文本。</p>\n'
      },
      codeFiles: ['options.vue']
    },
    {
      demoId: 'multi-level',
      name: {
        'zh-CN': '多级菜单'
      },
      desc: {
        'zh-CN': '<p>通过 <code>children</code> 字段定义多级菜单的子节点，仅配置式时生效。</p>\n'
      },
      codeFiles: ['multi-level.vue']
    },
    {
      demoId: 'inherit-width',
      name: {
        'zh-CN': '继承宽度'
      },
      desc: {
        'zh-CN': '<p>通过 <code>inherit-width</code> 属性设置下拉弹框的最小宽度继承触发源的宽度。</p>\n'
      },
      codeFiles: ['inherit-width.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>default</code> 插槽自定义触发源文本区域。<code>suffix-icon</code> 插槽自定义触发源图标区域。</p>\n'
      },
      codeFiles: ['slots.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<p><code>button-click</code>：按钮类型时，监听左侧按钮点击事件。</p><p><code>item-click</code>：监听点击菜单项事件。</p><p><code>visible-change</code>：监听下拉弹框显示隐藏发生变化。</p>\n'
      },
      codeFiles: ['events.vue']
    },
    {
      demoId: 'lazy-show-popper',
      name: {
        'zh-CN': '懒加载菜单和子项'
      },
      desc: {
        'zh-CN': '通过 <code>lazy-show-popper </code>属性，指定是否懒加载下拉菜单及内部的项'
      },
      codeFiles: ['lazy-show-popper.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '支持基本的下拉菜单功能，可通过 tiny-dropdown-item 定义菜单节点。',
      cloud: {
        value: true
      },
      apis: ['tiny-dropdown-item'],
      demos: ['basic-usage']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '支持禁用整个菜单或单个菜单项。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'placement',
      name: '展开位置',
      support: {
        value: true
      },
      description: '支持自定义下拉菜单的展开位置，默认为左侧展开。',
      cloud: {
        value: true
      },
      apis: ['placement'],
      demos: ['placement']
    },
    {
      id: 'trigger',
      name: '触发方式',
      support: {
        value: true
      },
      description: '支持点击、悬停以及右键（contextmenu，3.28.0 起支持）触发方式。',
      cloud: {
        value: true
      },
      apis: ['trigger'],
      demos: ['trigger']
    },
    {
      id: 'customization',
      name: '自定义内容',
      support: {
        value: true
      },
      description: '支持自定义工具栏、Logo 和触发源内容。',
      cloud: {
        value: true
      },
      apis: ['toolbar', 'logo', 'slots'],
      demos: ['slot-toolbar', 'slot-logo', 'slots']
    }
  ]
}
