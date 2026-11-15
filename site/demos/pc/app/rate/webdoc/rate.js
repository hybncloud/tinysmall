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
        'zh-CN': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-3-threshold-colors',
      name: {
        'zh-CN': '分段颜色'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>colors</code> 定义 3 分段颜色。</p>\n'
      },
      codeFiles: ['custom-3-threshold-colors.vue']
    },
    {
      demoId: 'disabled-not-selected-color',
      name: {
        'zh-CN': '禁用时未选中图标颜色'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled-void-color</code> 自定义禁用时未选中图标颜色。</p>\n'
      },
      codeFiles: ['disabled-not-selected-color.vue']
    },
    {
      demoId: 'disabled-not-selected-class',
      name: {
        'zh-CN': '禁用时未选中图标类名'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled-void-icon-class</code> 自定义禁用时未选中图标类名。</p>\n'
      },
      codeFiles: ['disabled-not-selected-class.vue']
    },
    {
      demoId: 'custom-3-threshold-icon',
      name: {
        'zh-CN': '分段图标类名'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>icon-classes</code> 自定义 3 分段图标。</p>\n'
      },
      codeFiles: ['custom-3-threshold-icon.vue']
    },
    {
      demoId: 'texts-and-text-color',
      name: {
        'zh-CN': '辅助文字及颜色'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>texts show-text text-color</code> 三个属性分别设置辅助文字内容、是否显示辅助文字及辅助文字颜色。</p>\n'
      },
      codeFiles: ['texts-and-text-color.vue']
    },
    {
      demoId: 'size-and-space',
      name: {
        'zh-CN': '大小及占位宽度'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>size space</code> 分别大小和占位宽度。</p>\n'
      },
      codeFiles: ['size-and-space.vue']
    },
    {
      demoId: 'not-selected-color',
      name: {
        'zh-CN': '未选中图标颜色'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>void-color</code> 定义未选中图标颜色。</p>\n'
      },
      codeFiles: ['not-selected-color.vue']
    },
    {
      demoId: 'not-selected-class',
      name: {
        'zh-CN': '未选中图标类名'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>void-icon-class</code> 定义未选中图标类名。</p>\n'
      },
      codeFiles: ['not-selected-class.vue']
    },
    {
      demoId: 'text-on-bottom',
      name: {
        'zh-CN': '图标下文字提示'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>text-on-bottom</code> 定义是否在图标下显示文字提示。</p>\n'
      },
      codeFiles: ['text-on-bottom.vue']
    },
    {
      demoId: 'allow-half',
      name: {
        'zh-CN': '半选'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>allow-half</code> 定义是否支持半选。</p>\n'
      },
      codeFiles: ['allow-half.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled</code> 定义是否禁用。</p>\n'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'show-score',
      name: {
        'zh-CN': '分数显示'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>show-score score-template</code> 分别定义是否显示分数和显示的模板。</p>\n'
      },
      codeFiles: ['show-score.vue']
    },
    {
      demoId: 'radio-rate',
      name: {
        'zh-CN': '单选模式'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>radio</code> 设置单选模式。</p>\n'
      },
      codeFiles: ['radio-rate.vue']
    },
    {
      demoId: 'max-score',
      name: {
        'zh-CN': '最大分值'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>max</code> 设置最大分值。</p>\n'
      },
      codeFiles: ['max-score.vue']
    },
    {
      demoId: 'threshold-value',
      name: {
        'zh-CN': '界限值'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>low-threshold high-threshold</code> 分别设置下限值和上限值，通过<code>colors</code>配置显示星的颜色。</p>'
      },
      codeFiles: ['threshold-value.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清空'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>clearable</code> 设置是否支持清空。</p>\n'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'rate-events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<p>监听 <code>change</code> 事件触发处理方法。</p>\n'
      },
      codeFiles: ['rate-events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 v-model 绑定变量，变量值对应评分值。',
      cloud: {
        value: false
      },
      apis: ['v-model'],
      demos: ['basic-usage']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置是否禁用评分组件。',
      cloud: {
        value: false
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 设置评分组件的尺寸大小。',
      cloud: {
        value: false
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'max',
      name: '最大值',
      support: {
        value: true
      },
      description: '通过 max 设置评分组件的最大值。',
      cloud: {
        value: false
      },
      apis: ['max'],
      demos: ['max']
    }
  ]
}
