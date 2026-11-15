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
        'zh-CN': '<p>通过 <code>v-model</code> 绑定开关值。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'mini-mode',
      name: {
        'zh-CN': '迷你尺寸'
      },
      desc: {
        'zh-CN': '<p>通过 <code>mini</code> 设置小尺寸开关。</p>'
      },
      codeFiles: ['mini-mode.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '自定义宽度'
      },
      desc: {
        'zh-CN': '<p>通过 <code>width</code> 设置开关的宽度。</p>'
      },
      codeFiles: ['width.vue']
    },
    {
      demoId: 'loading',
      name: {
        'zh-CN': '加载中状态'
      },
      desc: {
        'zh-CN': '<p>通过 <code>loading</code> 设置开关显示加载状态。</p>'
      },
      codeFiles: ['loading.vue']
    },
    {
      demoId: 'custom-open-close',
      name: {
        'zh-CN': '自定义开关显示'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>show-text</code> 配置是否显示开关文本，开启配置后，可以使用具名插槽 <code>open</code> 和 <code>close</code> 自定义开关内容。</p>'
      },
      codeFiles: ['custom-open-close.vue']
    },
    {
      demoId: 'before-change',
      name: {
        'zh-CN': '变更前置处理'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>before-change</code> 设置开关变化前置处理逻辑，参数为一个回调函数，调用后完成变更。</p>'
      },
      codeFiles: ['before-change.vue']
    },
    {
      demoId: 'custom-true-false-value',
      name: {
        'zh-CN': '自定义开关取值'
      },
      desc: {
        'zh-CN': '<p>通过 <code>true-label</code> 设置开关开启时的值， <code>false-label</code> 设置关闭时的值。</p>'
      },
      codeFiles: ['custom-true-false-value.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用状态'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置开关禁用状态。</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'custom-open-close-icon',
      name: {
        'zh-CN': '自定义开关图标'
      },
      desc: {
        'zh-CN': '<p>通过具名插槽 <code>active-icon</code> 和 <code>inactive-icon</code> 自定义开关图标。</p>'
      },
      codeFiles: ['custom-open-close-icon.vue']
    },
    {
      demoId: 'event-change',
      name: {
        'zh-CN': '变更事件'
      },
      desc: {
        'zh-CN': '<p>当开关值变化后，会触发 <code>change</code> 事件。</p>'
      },
      codeFiles: ['event-change.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '只读状态'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>display-only</code> 设置开关为只读状态。当设置 <code>display-only</code> 为 <code>true</code> 时，开关为只读状态，无法进行交互操作。</p>'
      },
      codeFiles: ['display-only.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 v-model 绑定开关值。',
      cloud: {
        value: true
      },
      apis: ['v-model'],
      demos: ['basic-usage']
    },
    {
      id: 'mini',
      name: '迷你尺寸',
      support: {
        value: true
      },
      description: '通过 mini 设置小尺寸开关。',
      cloud: {
        value: true
      },
      apis: ['mini'],
      demos: ['mini-mode']
    },
    {
      id: 'loading',
      name: '加载中状态',
      support: {
        value: true
      },
      description: '通过 loading 设置开关显示加载状态。',
      cloud: {
        value: true
      },
      apis: ['loading'],
      demos: ['loading']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置开关禁用状态。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['dynamic-disable']
    }
  ]
}
