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
        'zh-CN': '详细用法参考如下示例'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'start-end-step',
      name: {
        'zh-CN': '步长与时间区间'
      },
      desc: {
        'zh-CN':
          '<p><code>start</code> 设置区间的起始时间，默认为 0，<code>end</code> 设置区间的结束时间，默认为 24 * 60，<code>step</code> 设置间隔的步长，默认为 15。</p>\n'
      },
      codeFiles: ['start-end-step.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '<p>可设置为：medium，small，mini</p>\n'
      },
      codeFiles: ['size.vue']
    }
  ],
  features: [
    {
      id: 'time-range',
      name: '时间区间',
      support: {
        value: true
      },
      description: '通过 start 设置区间的起始时间，默认为 0，end 设置区间的结束时间，默认为 24 * 60。',
      cloud: {
        value: true
      },
      apis: ['start', 'end'],
      demos: ['start-end-step']
    },
    {
      id: 'step',
      name: '步长设置',
      support: {
        value: true
      },
      description: '通过 step 设置间隔的步长，默认为 15。',
      cloud: {
        value: true
      },
      apis: ['step'],
      demos: ['start-end-step']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '可设置为 medium、small、mini。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    }
  ]
}
