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
        'zh-CN': '可通过 text 自定义文本内容。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'scroll-direction',
      name: {
        'zh-CN': '文字滚动方向'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>direction</code> 设置文字滚动方向。</p>\n'
      },
      codeFiles: ['scroll-direction.vue']
    },
    {
      demoId: 'hover-stop',
      name: {
        'zh-CN': '鼠标悬停时文本停止滚动'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>hover-stop</code> 设鼠标悬停时文本是否停止滚动。</p>\n'
      },
      codeFiles: ['hover-stop.vue']
    },
    {
      demoId: 'scroll-time',
      name: {
        'zh-CN': '滚动时间间隔'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>time</code> 设置滚动时间间隔。</p>\n'
      },
      codeFiles: ['scroll-time.vue']
    },
    {
      demoId: 'custom-text-style',
      name: {
        'zh-CN': '自定义文本样式'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>class</code> 自定义文本样式。</p>\n'
      },
      codeFiles: ['custom-text-style.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽'
      },
      desc: {
        'zh-CN': '<p>可通过 solt 插槽自定义文本内容。</p>\n'
      },
      codeFiles: ['slots.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '可通过 text 自定义文本内容。',
      cloud: {
        value: false
      },
      apis: ['text'],
      demos: ['basic-usage']
    },
    {
      id: 'direction',
      name: '滚动方向',
      support: {
        value: true
      },
      description: '可通过 direction 设置文字滚动方向。',
      cloud: {
        value: false
      },
      apis: ['direction'],
      demos: ['scroll-direction']
    },
    {
      id: 'hover-stop',
      name: '悬停停止',
      support: {
        value: true
      },
      description: '可通过 hover-stop 设鼠标悬停时文本是否停止滚动。',
      cloud: {
        value: false
      },
      apis: ['hover-stop'],
      demos: ['hover-stop']
    },
    {
      id: 'time',
      name: '滚动时间',
      support: {
        value: true
      },
      description: '可通过 time 设置滚动时间间隔。',
      cloud: {
        value: false
      },
      apis: ['time'],
      demos: ['scroll-time']
    }
  ]
}
