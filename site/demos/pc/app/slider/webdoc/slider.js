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
        'zh-CN': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'vertical-mode',
      name: {
        'zh-CN': '竖向模式'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>vertical</code> 属性来展示滑块竖向模式（不设置，默认为横向模式）\n竖向模式可以通过 <code>height</code> 设置组件高度。</p>\n'
      },
      codeFiles: ['vertical-mode.vue']
    },
    {
      demoId: 'marks',
      name: {
        'zh-CN': '标记'
      },
      desc: {
        'zh-CN': '使用 marks 属性，给滑杆的值添加标记。'
      },
      codeFiles: ['marks.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最大最小值'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>min</code> <code>max</code> 来设置滑块取值范围。</p>'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'format-tooltip',
      name: {
        'zh-CN': '提示当前值'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>format-tooltip</code> 来格式化提示值。</p>'
      },
      codeFiles: ['format-tooltip.vue']
    },
    {
      demoId: 'range-select',
      name: {
        'zh-CN': '范围选择'
      },
      desc: {
        'zh-CN': '<p>通过<code>v-model</code> 为数组 设定初始范围选择。</p>'
      },
      codeFiles: ['range-select.vue']
    },
    {
      demoId: 'show-input',
      name: {
        'zh-CN': '输入框模式'
      },
      desc: {
        'zh-CN':
          '<p>通过配置<code>show-input</code>，开启滑块输入框模式。可以通过配置<code>unit</code>来决定输入框后面显示的单位。</p>'
      },
      codeFiles: ['show-input.vue']
    },
    {
      demoId: 'shortcut-operation',
      name: {
        'zh-CN': '快捷键操作'
      },
      desc: {
        'zh-CN':
          '<p>通过设置<code>num-pages</code>总步数，即按快捷键 PageDown/PageUp 时，每次移动的距离是 "⌈(max-min)/num-pages⌉"。</p>'
      },
      codeFiles: ['shortcut-operation.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<p>通过设置属性<code>disabled</code> ,设置滑动滑块禁止滑动。</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'show-tip',
      name: {
        'zh-CN': '提示'
      },
      desc: {
        'zh-CN': '<p>通过设定<code>:show-tip=&quot;false&quot;</code>，关闭滑块提示。(默认开启)。</p>'
      },
      codeFiles: ['show-tip.vue']
    },
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>step</code>来配置滑块滑动的步长。</p>'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'slider-slot',
      name: {
        'zh-CN': '自定义插槽'
      },
      desc: {
        'zh-CN': '显示滑块值的插槽。'
      },
      codeFiles: ['slider-slot.vue']
    },
    {
      demoId: 'slider-event',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<p>change、start、stop 事件。</p>'
      },
      codeFiles: ['slider-event.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '基础的滑块效果。',
      cloud: {
        value: true
      },
      apis: [],
      demos: ['basic-usage']
    },
    {
      id: 'vertical',
      name: '竖向模式',
      support: {
        value: true
      },
      description: '通过设置 vertical 属性来展示滑块竖向模式。',
      cloud: {
        value: true
      },
      apis: ['vertical'],
      demos: ['vertical-mode']
    },
    {
      id: 'marks',
      name: '标记',
      support: {
        value: true
      },
      description: '使用 marks 属性，给滑杆的值添加标记。',
      cloud: {
        value: true
      },
      apis: ['marks'],
      demos: ['marks']
    },
    {
      id: 'range',
      name: '范围选择',
      support: {
        value: true
      },
      description: '通过 v-model 为数组设定初始范围选择。',
      cloud: {
        value: true
      },
      apis: ['v-model'],
      demos: ['range-select']
    }
  ]
}
