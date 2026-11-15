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
        'zh-CN': '通过 <code>percentage</code> 设置进度值， <code>stroke-width</code> 设置进度条的宽度，单位 px。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-color',
      name: {
        'zh-CN': '定义颜色'
      },
      desc: {
        'zh-CN': '通过 <code>color</code> 设置进度条颜色；会覆盖 <code>status</code> 状态颜色。'
      },
      codeFiles: ['custom-color.vue']
    },
    {
      demoId: 'format-text',
      name: {
        'zh-CN': '文字的显隐和位置'
      },
      desc: {
        'zh-CN':
          '通过 <code>show-text</code> 设置文字显隐； <code>text-inside</code> 设置文字内置在进度条内显示（只在 type=line 时可用）， <code>format</code> 自定义进度条的文字。'
      },
      codeFiles: ['format-text.vue']
    },
    {
      demoId: 'progress-status',
      name: {
        'zh-CN': '状态'
      },
      desc: {
        'zh-CN': '通过 <code>status</code> 设置当前状态，可选值： <code>(success/exception/warning)</code> 。'
      },
      codeFiles: ['progress-status.vue']
    },
    {
      demoId: 'slot-icon-status',
      name: {
        'zh-CN': '图标状态插槽'
      },
      desc: {
        'zh-CN': '通过插槽自定义状态图标。'
      },
      codeFiles: ['slot-icon-status.vue']
    },
    {
      demoId: 'custom-status',
      name: {
        'zh-CN': '自定义状态场景'
      },
      desc: {
        'zh-CN': '用法如下。'
      },
      codeFiles: ['custom-status.vue']
    },
    {
      demoId: 'progress-type-circle',
      name: {
        'zh-CN': '环形'
      },
      desc: {
        'zh-CN':
          '通过 <code>type="circle"</code> 设置为圆环类型，<code>type="dashboard"</code> 则为 C 型圆环类型; <code>width</code> 设置环形进度条画布宽度，默认值为 126px。'
      },
      codeFiles: ['progress-type-circle.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 percentage 设置进度值，stroke-width 设置进度条的宽度。',
      cloud: {
        value: true
      },
      apis: ['percentage', 'stroke-width'],
      demos: ['basic-usage']
    },
    {
      id: 'color',
      name: '颜色配置',
      support: {
        value: true
      },
      description: '通过 color 设置进度条颜色，会覆盖 status 状态颜色。',
      cloud: {
        value: true
      },
      apis: ['color'],
      demos: ['custom-color']
    },
    {
      id: 'text',
      name: '文字配置',
      support: {
        value: true
      },
      description: '通过 show-text 设置文字显隐，text-inside 设置文字内置显示，format 自定义进度条文字。',
      cloud: {
        value: true
      },
      apis: ['show-text', 'text-inside', 'format'],
      demos: ['format-text']
    },
    {
      id: 'status',
      name: '状态',
      support: {
        value: true
      },
      description: '通过 status 设置当前状态，可选值：success、exception、warning。',
      cloud: {
        value: true
      },
      apis: ['status'],
      demos: ['progress-status']
    },
    {
      id: 'icon',
      name: '图标状态',
      support: {
        value: true
      },
      description: '通过插槽自定义状态图标。',
      cloud: {
        value: true
      },
      apis: ['slot-icon-status'],
      demos: ['slot-icon-status']
    },
    {
      id: 'type',
      name: '类型',
      support: {
        value: true
      },
      description: '通过 type 设置进度条类型，支持 line、circle、dashboard，width 设置环形进度条画布宽度。',
      cloud: {
        value: true
      },
      apis: ['type', 'width'],
      demos: ['progress-type-circle']
    }
  ]
}
