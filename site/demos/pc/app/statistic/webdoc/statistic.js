export default {
  column: '1',
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
        'zh-CN': '通过<code>value</code>设置数字内容，<code>precision</code>设置数字精度值。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'prefix-suffix-slot',
      name: {
        'zh-CN': '前后缀'
      },
      desc: {
        'zh-CN': '<code>prefix</code>设置前缀，<code>suffix</code>设置后缀。'
      },
      codeFiles: ['prefix-suffix-slot.vue']
    },
    {
      demoId: 'statistic-slot',
      name: {
        'zh-CN': '标题'
      },
      desc: {
        'zh-CN': '通过<code>title</code>设置标题。'
      },
      codeFiles: ['statistic-slot.vue']
    },
    {
      demoId: 'statistic-style',
      name: {
        'zh-CN': '样式'
      },
      desc: {
        'zh-CN': '通过<code>value-style</code>设置数字样式。'
      },
      codeFiles: ['statistic-style.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 value 设置数字内容，precision 设置数字精度值。',
      cloud: {
        value: false
      },
      apis: ['value', 'precision'],
      demos: ['basic-usage']
    },
    {
      id: 'prefix-suffix',
      name: '前后缀',
      support: {
        value: true
      },
      description: 'prefix 设置前缀，suffix 设置后缀。',
      cloud: {
        value: false
      },
      apis: ['prefix', 'suffix'],
      demos: ['prefix-suffix-slot']
    },
    {
      id: 'title',
      name: '标题',
      support: {
        value: true
      },
      description: '通过 title 设置标题。',
      cloud: {
        value: false
      },
      apis: ['title'],
      demos: ['statistic-slot']
    },
    {
      id: 'style',
      name: '样式',
      support: {
        value: true
      },
      description: '通过 value-style 设置数字样式。',
      cloud: {
        value: false
      },
      apis: ['value-style'],
      demos: ['statistic-style']
    }
  ]
}
