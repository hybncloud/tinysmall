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
        'zh-CN':
          '通过 <code>v-model</code> 设置双向绑定搜索值， <code>placeholder</code> 设置默认占位符文本， <code>input</code>元素的原生属性<code>maxlength</code> 设置输入框最大输入字符长度。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清除'
      },
      desc: {
        'zh-CN': '通过 <code>clearable</code> 设置显示清空图标按钮。'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'mini-mode',
      name: {
        'zh-CN': '迷你模式'
      },
      desc: {
        'zh-CN': '通过 <code>mini</code> 设置为 mini 模式。'
      },
      codeFiles: ['mini-mode.vue']
    },
    {
      demoId: 'search-types',
      name: {
        'zh-CN': '搜索类型'
      },
      desc: {
        'zh-CN': '通过 <code>search-types</code> 设置可选的搜索类型， <code>type-value</code> 设置搜索类型的默认值。'
      },
      codeFiles: ['search-types.vue']
    },
    {
      demoId: 'transparent-mode',
      name: {
        'zh-CN': '透明模式'
      },
      desc: {
        'zh-CN': '通过 <code>transparent</code> 设置为透明模式（注： <code>mini</code> 模式下有效）。'
      },
      codeFiles: ['transparent-mode.vue']
    },
    {
      demoId: 'custom-search-types',
      name: {
        'zh-CN': '定义搜索类型下拉项'
      },
      desc: {
        'zh-CN': '通过 <code>poplist</code> 插槽自定义搜索类型弹出的内容。'
      },
      codeFiles: ['custom-search-types.vue']
    },
    {
      demoId: 'show-selected-types',
      name: {
        'zh-CN': '定义默认搜索类型'
      },
      desc: {
        'zh-CN': '通过 <code>text</code> 插槽自定义默认搜索类型的内容。'
      },
      codeFiles: ['show-selected-types.vue']
    },
    {
      demoId: 'slot-prefix-suffix',
      name: {
        'zh-CN': '插槽与禁用'
      },
      desc: {
        'zh-CN':
          '通过 <code>prefix</code> 插槽自定义左侧内容，通过 <code>suffix</code> 插槽自定义右侧内容，通过 <code>disabled</code> 控制禁用状态。'
      },
      codeFiles: ['slot-prefix-suffix.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': `
        <div class="tip custom-block">通过 <code>is-enter-search</code> 设置回车触发搜索事件， <code>search</code> 监听搜索事件；<br />\n              
        通过 <code>change</code> 监听输入框失焦时搜索值改变事件，<code>input</code> 监听搜索值实时改变事件；<br />\n              
        通过 <code>select</code> 监听搜索类型选中事件；<br />\n                
        通过 <code>expand</code> 监听 mini 搜索框展开事件；<br />\n                
        通过 <code>collapse</code> 监听 mini 搜索框收起事件。</div>`
      },
      codeFiles: ['events.vue']
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
        value: true
      },
      apis: ['v-model', 'placeholder'],
      demos: ['basic-usage']
    },
    {
      id: 'clearable',
      name: '可清除',
      support: {
        value: true
      },
      description: '通过 clearable 设置显示清空图标按钮。',
      cloud: {
        value: true
      },
      apis: ['clearable'],
      demos: ['clearable']
    },
    {
      id: 'mini',
      name: '迷你模式',
      support: {
        value: true
      },
      description: '通过 mini 设置为 mini 模式。',
      cloud: {
        value: true
      },
      apis: ['mini'],
      demos: ['mini-mode']
    },
    {
      id: 'search-types',
      name: '搜索类型',
      support: {
        value: true
      },
      description: '通过 search-types 设置可选的搜索类型，type-value 设置搜索类型的默认值。',
      cloud: {
        value: true
      },
      apis: ['search-types', 'type-value'],
      demos: ['search-types']
    }
  ]
}
