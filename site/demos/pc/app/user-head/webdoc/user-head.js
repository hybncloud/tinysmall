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
        'zh-CN': '可通过<code>model-value</code>属性设置头像值。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'min-user-head',
      name: {
        'zh-CN': '小头像'
      },
      desc: {
        'zh-CN': '<p>可通过<code>min</code>属性设置小头像。</p>\n'
      },
      codeFiles: ['min-user-head.vue']
    },
    {
      demoId: 'round-user-head',
      name: {
        'zh-CN': '圆形头像'
      },
      desc: {
        'zh-CN': '<p>可通过<code>round</code>属性设置圆形头像。</p>\n'
      },
      codeFiles: ['round-user-head.vue']
    },
    {
      demoId: 'label-user-head',
      name: {
        'zh-CN': '文字头像'
      },
      desc: {
        'zh-CN': '<p>可通过<code>type=&quot;label&quot;</code>属性设置文字头像。</p>\n'
      },
      codeFiles: ['label-user-head.vue']
    },
    {
      demoId: 'icon-user-head',
      name: {
        'zh-CN': '图标头像'
      },
      desc: {
        'zh-CN': '<p>可通过<code>type=&quot;icon&quot;</code>属性设置图标头像。</p>\n'
      },
      codeFiles: ['icon-user-head.vue']
    },
    {
      demoId: 'image-user-head',
      name: {
        'zh-CN': '图片头像'
      },
      desc: {
        'zh-CN': '<p>可通过<code>type=&quot;image&quot;</code>属性设置图片头像。</p>\n'
      },
      codeFiles: ['image-user-head.vue']
    },
    {
      demoId: 'message-count-total',
      name: {
        'zh-CN': '头像消息计数'
      },
      desc: {
        'zh-CN': '可通过<code>message-total="100"</code>属性设置消息数据。'
      },
      codeFiles: ['message-count-total.vue']
    },
    {
      demoId: 'message-count-type',
      name: {
        'zh-CN': '使用小红点代替具体数值'
      },
      desc: {
        'zh-CN': '可通过<code>message-type="basic"</code>属性设置消息显示替代成小红点。'
      },
      codeFiles: ['message-count-type.vue']
    },
    {
      demoId: 'message-count-limit',
      name: {
        'zh-CN': '消息计数上限'
      },
      desc: {
        'zh-CN': '可通过<code>message-upper-limit="99"</code>属性设置消息数据上限。'
      },
      codeFiles: ['message-count-limit.vue']
    },
    {
      demoId: 'color',
      name: {
        'zh-CN': '自定义颜色'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>color</code>属性设置自定义颜色，图标或文字类型（type 属性值为 icon 或 label）的情况下，设置字体颜色和背景色。</p>\n'
      },
      codeFiles: ['color.vue']
    },
    {
      demoId: 'custom-background-color',
      name: {
        'zh-CN': '自定义背景颜色'
      },
      desc: {
        'zh-CN': '<p>可通过<code>background-color</code>属性设置自定义背景颜色。</p>\n'
      },
      codeFiles: ['custom-background-color.vue']
    },
    {
      demoId: 'custom-user-head-content',
      name: {
        'zh-CN': '自定义图像内容'
      },
      desc: {
        'zh-CN': '<p>可通过<code>#default</code>插槽设置自定义图像内容。</p>\n'
      },
      codeFiles: ['custom-user-head-content.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '支持设置头像值，包括图片、文字、图标等。',
      cloud: {
        value: false
      },
      apis: ['modelValue'],
      demos: ['basic-usage']
    },
    {
      id: 'style',
      name: '样式设置',
      support: {
        value: true
      },
      description: '支持设置大小、形状、颜色、背景色等样式。',
      cloud: {
        value: false
      },
      apis: ['size', 'shape', 'color', 'backgroundColor'],
      demos: ['style']
    },
    {
      id: 'message',
      name: '消息提示',
      support: {
        value: true
      },
      description: '支持显示消息数量和通知。',
      cloud: {
        value: false
      },
      apis: ['messageTotal', 'messageType'],
      demos: ['message']
    },
    {
      id: 'custom',
      name: '自定义',
      support: {
        value: true
      },
      description: '支持自定义头像内容。',
      cloud: {
        value: false
      },
      apis: ['slots'],
      demos: ['custom']
    }
  ]
}
