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
        'zh-CN': '<p>通过 <code>data</code> 设置按钮组数据，<code>v-model</code> 设置绑定值。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '组件尺寸'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 设置尺寸大小，可选值有 <code>medium</code> 、<code>small</code> 、<code>mini</code> 。</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用状态'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>disabled</code> 设置按钮组是否禁用，数据项设置 <code>disabled</code> 属性可以禁用单个按钮，数据项设置 <code>tip</code> 属性 (v3.17.0 版本增加此功能) 增加按钮悬浮提示功能。</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'plain',
      name: {
        'zh-CN': '朴素按钮'
      },
      desc: {
        'zh-CN': '<p>通过 <code>plain</code> 设置是否为朴素按钮。</p>'
      },
      codeFiles: ['plain.vue']
    },
    {
      demoId: 'text-value-field',
      name: {
        'zh-CN': '数据字段映射'
      },
      desc: {
        'zh-CN':
          '<p>若按钮组数据对象中的字段不是默认的 <code>text</code> 和 <code>value</code> ，则可通过 <code>text-field</code> 、<code>value-field</code> 属性进行映射。</p>'
      },
      codeFiles: ['text-value-field.vue']
    },
    {
      demoId: 'show-more',
      name: {
        'zh-CN': '显示更多按钮'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-more</code> 设置显示更多按钮，当按钮数量大于设置值时，将显示更多按钮。</p>'
      },
      codeFiles: ['show-more.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '默认插槽'
      },
      desc: {
        'zh-CN':
          '<p>使用默认插槽自定义按钮组，使用默认插槽后， <code>button-group</code> 的 <code>data</code> 、<code>text-field</code> 、<code>value-field</code> 、<code>value / v-model</code> 、<code>size</code> 属性对插槽中的按钮将不再生效。</p>'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'slot-empty',
      name: {
        'zh-CN': '空数据'
      },
      meta: {
        mark: '3.17.1'
      },
      desc: {
        'zh-CN': '<p>当数据为空时，默认会显示"暂无数据"，通过 <code>empty</code> 插槽自定义内容。</p>'
      },
      codeFiles: ['slot-empty.vue']
    },
    {
      demoId: 'button-group-multiple',
      name: {
        'zh-CN': '多行按钮组'
      },
      desc: {
        'zh-CN': '<p>多行按钮组，当超出最大宽度后，换行显示。</p>'
      },
      codeFiles: ['button-group-multiple.vue']
    },
    {
      demoId: 'sup',
      name: {
        'zh-CN': '选块角标'
      },
      desc: {
        'zh-CN': '<p>通过 <code>data</code> 的 <code>sup</code> 属性配置选块角标。</p>'
      },
      codeFiles: ['sup.vue']
    },
    {
      demoId: 'change-event',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<p>当选中按钮发生改变时触发 <code>change</code> 事件。</p>'
      },
      codeFiles: ['change-event.vue']
    },
    {
      demoId: 'display-mode',
      name: {
        'zh-CN': '按钮组显示模式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>display-mode</code> 属性设置按钮组显示模式，可选值有 <code>default</code>（默认）和 <code>merged</code>（选块合并）。</p>'
      },
      codeFiles: ['display-mode.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 data 设置按钮组数据，v-model 设置绑定值。',
      cloud: {
        value: true
      },
      apis: ['data', 'v-model'],
      demos: ['basic-usage']
    },
    {
      id: 'size',
      name: '尺寸设置',
      support: {
        value: true
      },
      description: '通过 size 设置尺寸大小，可选值有 medium、small、mini。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description:
        '通过 disabled 设置按钮组是否禁用，数据项设置 disabled 属性可以禁用单个按钮，数据项设置 tip 属性增加按钮悬浮提示功能。',
      cloud: {
        value: true
      },
      apis: ['disabled', 'tip'],
      demos: ['disabled']
    },
    {
      id: 'plain',
      name: '朴素按钮',
      support: {
        value: true
      },
      description: '通过 plain 设置是否为朴素按钮。',
      cloud: {
        value: true
      },
      apis: ['plain'],
      demos: ['plain']
    },
    {
      id: 'text-value-field',
      name: '数据字段映射',
      support: {
        value: true
      },
      description: '若按钮组数据对象中的字段不是默认的 text 和 value，则可通过 text-field、value-field 属性进行映射。',
      cloud: {
        value: true
      },
      apis: ['text-field', 'value-field'],
      demos: ['text-value-field']
    },
    {
      id: 'show-more',
      name: '显示更多按钮',
      support: {
        value: true
      },
      description: '通过 show-more 设置显示更多按钮，当按钮数量大于设置值时，将显示更多按钮。',
      cloud: {
        value: true
      },
      apis: ['show-more'],
      demos: ['show-more']
    },
    {
      id: 'slot-default',
      name: '默认插槽',
      support: {
        value: true
      },
      description:
        '使用默认插槽自定义按钮组，使用默认插槽后，button-group 的 data、text-field、value-field、value/v-model、size 属性对插槽中的按钮将不再生效。',
      cloud: {
        value: true
      },
      apis: ['slot-default'],
      demos: ['slot-default']
    },
    {
      id: 'slot-empty',
      name: '空数据',
      support: {
        value: true
      },
      description: '当数据为空时，默认会显示"暂无数据"，通过 empty 插槽自定义内容。',
      cloud: {
        value: true
      },
      apis: ['slot-empty'],
      demos: ['slot-empty']
    },
    {
      id: 'button-group-multiple',
      name: '多行按钮组',
      support: {
        value: true
      },
      description: '多行按钮组，当超出最大宽度后，换行显示。',
      cloud: {
        value: true
      },
      apis: [],
      demos: ['button-group-multiple']
    },
    {
      id: 'sup',
      name: '选块角标',
      support: {
        value: true
      },
      description: '通过 data 的 sup 属性配置选块角标。',
      cloud: {
        value: true
      },
      apis: ['sup'],
      demos: ['sup']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '当选中按钮发生改变时触发 change 事件。',
      cloud: {
        value: true
      },
      apis: ['change'],
      demos: ['change-event']
    }
  ]
}
