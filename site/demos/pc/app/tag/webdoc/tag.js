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
        'zh-CN': `
          通过默认插槽，可以将文字和图标显示为一个标签。 <br>
          通过 <code>value</code> 属性，也可以设置标签值。 <br>
          通过 <code>only-icon</code> 属性，设置标签只有图标。
        `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'effect',
      name: {
        'zh-CN': '主题'
      },
      desc: {
        'zh-CN':
          '通过 <code>effect</code> 设置主题，可选值： <code>(dark / light / plain)</code> ； <code>type</code> 设置类型，可选值： <code>(success / info / warning / danger / alerting / error)</code> 。'
      },
      codeFiles: ['effect.vue']
    },
    {
      demoId: 'color-border',
      name: {
        'zh-CN': '其它颜色'
      },
      desc: {
        'zh-CN': `
        通过 <code>color</code> 设置颜色，可使用预设值，也可自定义颜色值；<br>
        当自定义颜色值为字符串时，则设置背景色；<br>
        当自定义颜色值为数组则第一个值为背景色，第二个为文本色。<br>
        <div class="tip custom-block">
          避免同时使用  <code>color</code> 和  <code>type</code>\ <code>effect</code>属性！
        </div>
        `
      },
      codeFiles: ['color-border.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '通过 <code>size</code> 设置尺寸大小，可选值： <code>(medium / small)</code> 。'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'max-width',
      name: {
        'zh-CN': '最大宽度'
      },
      desc: {
        'zh-CN': '通过 <code>maxWidth</code> 设置最大宽度 。'
      },
      codeFiles: ['max-width.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '通过 <code>disabled</code> 设置禁用。'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'delete',
      name: {
        'zh-CN': '删除操作'
      },
      desc: {
        'zh-CN':
          '通过 <code>closable</code> 设置展示关闭按钮， <code>before-delete</code> 设置删除前的操作，可以在此钩子中做提示或确认；<code>close</code> 监听关闭按钮点击事件，做删除操作。'
      },
      codeFiles: ['delete.vue']
    },
    {
      demoId: 'slot-default',
      name: {
        'zh-CN': '默认插槽'
      },
      desc: {
        'zh-CN': '通过 <code>default</code> 默认插槽自定义标签内容，生成图标标签。'
      },
      codeFiles: ['slot-default.vue']
    },
    {
      demoId: 'tag-event-click',
      name: {
        'zh-CN': '点击事件'
      },
      desc: {
        'zh-CN': '通过 <code>click</code> 监听点击事件。'
      },
      codeFiles: ['tag-event-click.vue']
    },
    {
      demoId: 'rounded',
      name: {
        'zh-CN': '圆角标签'
      },
      desc: {
        'zh-CN': '通过使用 <code>round</code> 属性设置圆角标签。'
      },
      codeFiles: ['rounded.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过默认插槽，可以将文字和图标显示为一个标签。通过 value 属性，也可以设置标签值。',
      cloud: {
        value: true
      },
      apis: ['value'],
      demos: ['basic-usage']
    },
    {
      id: 'effect',
      name: '主题',
      support: {
        value: true
      },
      description:
        '通过 effect 设置主题，可选值：dark、light、plain；type 设置类型，可选值：success、info、warning、danger。',
      cloud: {
        value: true
      },
      apis: ['effect', 'type'],
      demos: ['effect']
    },
    {
      id: 'color',
      name: '自定义颜色',
      support: {
        value: true
      },
      description:
        '通过 color 设置颜色，可使用预设值，也可自定义颜色值。当自定义颜色值为字符串时，则设置背景色；当自定义颜色值为数组则第一个值为背景色，第二个为文本色。',
      cloud: {
        value: true
      },
      apis: ['color'],
      demos: ['color-border']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 设置尺寸大小，可选值：medium、small。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    }
  ]
}
