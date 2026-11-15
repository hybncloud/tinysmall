export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN': '详细用法参考如下示例。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'range-placeholder',
      name: {
        'zh-CN': '固定时间范围'
      },
      desc: {
        'zh-CN': '如果先选中了开始（或结束）时间，则结束（或开始）时间的状态也将会随之改变。'
      },
      codeFiles: ['range-placeholder.vue']
    },
    {
      demoId: 'default-value',
      name: {
        'zh-CN': '设置打开默认时间'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default-value</code> 设置选择器打开显示默认时间。</p>\n'
      },
      codeFiles: ['default-value.vue']
    },
    {
      demoId: 'picker-options',
      name: {
        'zh-CN': '固定时间点'
      },
      desc: {
        'zh-CN':
          '<p>提供固定时间点，可通过 picker-options 对象中的 start、end、step、minTime、maxTime 设置起始时间、结束时间、步长、最小有效时间和最大有效时间。</p>\n'
      },
      codeFiles: ['picker-options.vue']
    },
    {
      demoId: 'suffix-icon',
      name: {
        'zh-CN': '后置图标'
      },
      desc: {
        'zh-CN': '<p>通过 <code>suffix-icon</code> 属性设置时间输入框后置图标。</p>\n'
      },
      codeFiles: ['suffix-icon.vue']
    },
    {
      demoId: 'clear-icon',
      name: {
        'zh-CN': '清空图标'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>clearable</code> 显示清空图标，通过 <code>clear-icon</code> 自定义清空图标，通过 <code>popper-class</code> 属性设置下拉框的类名。</p>'
      },
      codeFiles: ['clear-icon.vue']
    },
    {
      demoId: 'event-blur',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<p><code>focus</code> input 框聚焦时触发，<code>blur</code> input 框失焦时触发，<code>change</code> input 绑定值改变时触发。</p>\n'
      },
      codeFiles: ['event-blur.vue']
    },
    {
      demoId: 'editable',
      name: {
        'zh-CN': '文本框不可编辑'
      },
      desc: {
        'zh-CN': '<p>时间输入框默认可以输入时间，设置 <code>editable</code> 为 false 后，将不能输入。</p>\n'
      },
      codeFiles: ['editable.vue']
    },
    {
      demoId: 'size-medium',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '通过修改 size 的属性值可调整输入框尺寸，提供 medium、small、mini 三个固定属性值。'
      },
      codeFiles: ['size-medium.vue']
    },
    {
      demoId: 'focus',
      name: {
        'zh-CN': '手动获取焦点'
      },
      desc: {
        'zh-CN': '通过给组件设置 ref 手动调用触发 focus 事件。'
      },
      codeFiles: ['focus.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 v-model 设置双向绑定搜索值，placeholder 设置默认占位符文本。',
      cloud: {
        value: false
      },
      apis: ['v-model', 'placeholder'],
      demos: ['basic-usage']
    },
    {
      id: 'range',
      name: '时间范围',
      support: {
        value: true
      },
      description: '通过 picker-options 设置固定时间范围，包括起始时间、结束时间、步长等。',
      cloud: {
        value: false
      },
      apis: ['picker-options'],
      demos: ['picker-options']
    },
    {
      id: 'clearable',
      name: '可清除',
      support: {
        value: true
      },
      description: '通过 clearable 显示清空图标，clear-icon 自定义清空图标。',
      cloud: {
        value: false
      },
      apis: ['clearable', 'clear-icon'],
      demos: ['clear-icon']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 属性可调整输入框尺寸，提供 medium、small、mini 三个固定属性值。',
      cloud: {
        value: false
      },
      apis: ['size'],
      demos: ['size-medium']
    }
  ]
}
