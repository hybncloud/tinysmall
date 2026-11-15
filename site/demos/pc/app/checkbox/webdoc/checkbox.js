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
        'zh-CN': '<p>通过 <code>v-model</code> 设置绑定值，<code>name</code> 设置原生属性。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    // 禁用复选框
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 字段设置当前复选框是否为禁用状态。</p>'
      },
      codeFiles: ['checkbox-disabled.vue']
    },
    {
      demoId: 'checkbox-group',
      name: {
        'zh-CN': '复选框组'
      },
      desc: {
        'zh-CN':
          '<p><code>checkbox-group</code> 可以将多个 <code>checkbox</code> 元素管理为一组，在 <code>checkbox-group</code> 中使用 <code>v-model</code> 绑定选中值。<code>checkbox</code> 的 <code>label</code> 与 <code>checkbox-group</code> 的绑定值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>'
      },
      codeFiles: ['checkbox-group.vue']
    },
    {
      demoId: 'checkbox-button',
      name: {
        'zh-CN': '复选框按钮'
      },
      desc: {
        'zh-CN': '<p>通过 <code>checkbox-button</code> 以按钮的形式展示复选框，用法与 <code>checkbox</code> 相似。</p>'
      },
      codeFiles: ['checkbox-button.vue']
    },
    {
      demoId: 'group-options',
      name: {
        'zh-CN': '配置式复选框组'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>options</code> 配置显示多选框组。使用该属性后，可以不用再在标签中以插槽的形式插入 <code>checkbox</code> 或 <code>checkbox-button</code> 元素。 <code>type</code> 属性配合 <code>options</code> 属性一起使用，将 <code>type</code> 配置为 <code>button</code> ，复选框组将以按钮的形式展示。</p>'
      },
      codeFiles: ['group-options.vue']
    },
    {
      demoId: 'description',
      name: {
        'zh-CN': '描述文本'
      },
      desc: {
        'zh-CN':
          '<p>复选框或复现框按钮的描述文本，有三种方式可以提供，优先级依次为 <code>默认插槽</code> 、<code>text</code> 、<code>label</code> 。</p>'
      },
      codeFiles: ['description.vue']
    },
    {
      demoId: 'indeterminate',
      name: {
        'zh-CN': '全选与半选'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>checkbox</code> 元素中配置 <code>indeterminate</code> 属性为 true 后，勾选框将展示为半选的样式。</p>'
      },
      codeFiles: ['indeterminate.vue']
    },
    {
      demoId: 'min-max',
      name: {
        'zh-CN': '可选数量限制'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>checkbox-group</code> 上可通过 <code>min</code> 、 <code>max</code> 属性指定可勾选项目的最小、最大值。</p>'
      },
      codeFiles: ['min-max.vue']
    },
    {
      demoId: 'checked',
      name: {
        'zh-CN': '是否默认勾选'
      },
      desc: {
        'zh-CN':
          '<p> <code>checkbox-group</code> 上绑定的 <code>v-model</code> 可以配置默认选中， <code>checked</code> 同样可以配置默认选中。</p>'
      },
      codeFiles: ['checked.vue']
    },
    {
      demoId: 'vertical-checkbox',
      name: {
        'zh-CN': '垂直布局'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>checkbox-group</code> 元素上设置 <code>vertical</code> 为 true，则其管理的 <code>checkbox-button</code> 或 <code>checkbox</code> 将展示为垂直布局。</p>'
      },
      codeFiles: ['vertical-checkbox.vue']
    },
    {
      demoId: 'text',
      name: {
        'zh-CN': '状态对应的值'
      },
      desc: {
        'zh-CN': '<p>通过 <code>true-label</code> 设置选中的值， <code>false-label</code> 设置未选中的值。</p>'
      },
      codeFiles: ['text.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN':
          '<p>当复选框为按钮形式时， <code>size</code> 属性可以设置尺寸，可选项有 <code>medium</code> 、<code>small</code> 、<code>mini</code>，不设置则为默认样式。</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'shape',
      name: {
        'zh-CN': '过滤器模式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>shape</code> 设置过滤器模式。</p>'
      },
      codeFiles: ['shape.vue']
    },
    {
      demoId: 'custom-color',
      name: {
        'zh-CN': '自定义颜色'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>fill</code> 自定义选中时背景和边框颜色，通过 <code>text-color</code> 自定义选中时的文本颜色。</p>'
      },
      codeFiles: ['custom-color.vue']
    },
    {
      demoId: 'checkbox-slot',
      name: {
        'zh-CN': '默认插槽'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default slot</code> 自定义文本内容。</p>'
      },
      codeFiles: ['checkbox-slot.vue']
    },
    {
      demoId: 'checkbox-button-multiple',
      name: {
        'zh-CN': '多行按钮'
      },
      desc: {
        'zh-CN': '<p>多行按钮组，超出最大宽度后，换行显示。</p>'
      },
      codeFiles: ['checkbox-button-multiple.vue']
    },
    {
      demoId: 'dynamic-create-checkbox',
      name: {
        'zh-CN': '动态生成复选框组'
      },
      desc: {
        'zh-CN': '<p>复选框组所需数据可通过请求服务从后台取得，然后动态生成。</p>'
      },
      codeFiles: ['dynamic-create-checkbox.vue']
    },
    {
      demoId: 'checkbox-events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<p>勾选值改变后将触发 <code>change</code> 事件。</p>'
      },
      codeFiles: ['checkbox-events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 v-model 设置是否选中。',
      cloud: {
        value: true
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
      description: '通过 disabled 设置是否禁用。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'indeterminate',
      name: '不确定状态',
      support: {
        value: true
      },
      description: '通过 indeterminate 设置是否为不确定状态。',
      cloud: {
        value: true
      },
      apis: ['indeterminate'],
      demos: ['indeterminate']
    },
    {
      id: 'checkbox-group',
      name: '多选框组',
      support: {
        value: true
      },
      description: '通过 checkbox-group 组件包裹多个 checkbox 组件。',
      cloud: {
        value: true
      },
      apis: ['checkbox-group'],
      demos: ['checkbox-group']
    },
    {
      id: 'group-data',
      name: '配置式多选框组',
      support: {
        value: true
      },
      description: '通过 data 设置多选框组数据。',
      cloud: {
        value: true
      },
      apis: ['data'],
      demos: ['checkbox-group-data']
    },
    {
      id: 'min-max',
      name: '可选数量限制',
      support: {
        value: true
      },
      description: '通过 min 和 max 设置可选数量的限制。',
      cloud: {
        value: true
      },
      apis: ['min', 'max'],
      demos: ['min-max']
    },
    {
      id: 'checked',
      name: '是否默认勾选',
      support: {
        value: true
      },
      description: '通过 checked 设置是否默认选中。',
      cloud: {
        value: true
      },
      apis: ['checked'],
      demos: ['checked']
    },
    {
      id: 'vertical-checkbox',
      name: '垂直布局',
      support: {
        value: true
      },
      description: '通过 vertical 设置是否为垂直布局。',
      cloud: {
        value: true
      },
      apis: ['vertical'],
      demos: ['vertical-checkbox']
    },
    {
      id: 'text',
      name: '状态对应的值',
      support: {
        value: true
      },
      description: '通过 true-label 和 false-label 设置选中值和未选中值。',
      cloud: {
        value: true
      },
      apis: ['true-label', 'false-label'],
      demos: ['text']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 设置尺寸，可选项有 medium、small、mini，不设置则为默认样式。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'shape',
      name: '过滤器模式',
      support: {
        value: true
      },
      description: '通过 shape 设置过滤器模式。',
      cloud: {
        value: true
      },
      apis: ['shape'],
      demos: ['shape']
    },
    {
      id: 'custom-color',
      name: '自定义颜色',
      support: {
        value: true
      },
      description: '通过 fill 自定义选中时背景和边框颜色，通过 text-color 自定义选中时的文本颜色。',
      cloud: {
        value: true
      },
      apis: ['fill', 'text-color'],
      demos: ['custom-color']
    },
    {
      id: 'checkbox-slot',
      name: '默认插槽',
      support: {
        value: true
      },
      description: '通过 default slot 自定义文本内容。',
      cloud: {
        value: true
      },
      apis: ['slot'],
      demos: ['checkbox-slot']
    },
    {
      id: 'checkbox-button-multiple',
      name: '多行按钮',
      support: {
        value: true
      },
      description: '多行按钮组，超出最大宽度后，换行显示。',
      cloud: {
        value: true
      },
      apis: [],
      demos: ['checkbox-button-multiple']
    },
    {
      id: 'dynamic-create-checkbox',
      name: '动态生成复选框组',
      support: {
        value: true
      },
      description: '复选框组所需数据可通过请求服务从后台取得，然后动态生成。',
      cloud: {
        value: true
      },
      apis: [],
      demos: ['dynamic-create-checkbox']
    },
    {
      id: 'checkbox-events',
      name: '事件',
      support: {
        value: true
      },
      description: '勾选值改变后将触发 change 事件。',
      cloud: {
        value: true
      },
      apis: ['change'],
      demos: ['checkbox-events']
    }
  ]
}
