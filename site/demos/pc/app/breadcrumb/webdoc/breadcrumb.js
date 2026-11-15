export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN':
          '<code>Breadcrumb</code>：通过 <code>select</code> 监听面包屑选中事件。<br/>\n                  <code>BreadcrumbItem</code>：通过 <code>to</code> 设置选项路由跳转对象，<code>label</code> 设置选项名称，<code>select</code> 监听选项选中事件。'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸设置'
      },
      desc: {
        'zh-CN': '通过 <code>size</code> 自定义尺寸，仅支持 <code>medium</code> 尺寸。'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '定义节点'
      },
      desc: {
        'zh-CN':
          '<code>BreadcrumbItem</code>：通过默认插槽自定义节点内容；<code>replace</code> 设置不向浏览器历史添加新记录。'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'separator',
      name: {
        'zh-CN': '定义分隔符'
      },
      desc: {
        'zh-CN': '<code>Breadcrumb</code>：通过 <code>separator</code> 或 <code>separator-icon</code> 自定义分隔符。'
      },
      codeFiles: ['separator.vue']
    },
    {
      demoId: 'options',
      name: {
        'zh-CN': '配置式'
      },
      desc: {
        'zh-CN':
          '通过 <code>options</code> 配置每个 <code>BreadcrumbItem</code>；<code>text-field</code> 指定显示键值，默认显示键值为 <code>label</code>。'
      },
      codeFiles: ['options.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 select 监听面包屑选中事件，通过 to 设置选项路由跳转对象，通过 label 设置选项名称。',
      cloud: {
        value: true
      },
      apis: ['select', 'to', 'label'],
      demos: ['base']
    },
    {
      id: 'size',
      name: '尺寸设置',
      support: {
        value: true
      },
      description: '通过 size 自定义尺寸，仅支持 medium 尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'separator',
      name: '分隔符',
      support: {
        value: true
      },
      description: '通过 separator 或 separator-icon 自定义分隔符。',
      cloud: {
        value: true
      },
      apis: ['separator', 'separator-icon'],
      demos: ['separator']
    },
    {
      id: 'options',
      name: '配置式',
      support: {
        value: true
      },
      description: '通过 options 配置每个 BreadcrumbItem，通过 text-field 指定显示键值，默认显示键值为 label。',
      cloud: {
        value: true
      },
      apis: ['options', 'text-field'],
      demos: ['options']
    },
    {
      id: 'slot',
      name: '插槽功能',
      support: {
        value: true
      },
      description: '通过默认插槽自定义节点内容，支持 replace 设置不向浏览器历史添加新记录。',
      cloud: {
        value: true
      },
      apis: ['slot-default', 'replace'],
      demos: ['slot-default']
    }
  ]
}
