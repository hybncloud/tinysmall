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
        'zh-CN': '通过引用组件标签即可。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'direction',
      name: {
        'zh-CN': '垂直分隔线'
      },
      desc: {
        'zh-CN': '<p>通过设置<code>vertical</code>属性为<code>true</code>可以设置分隔线的方向。</p>'
      },
      codeFiles: ['direction.vue']
    },
    {
      demoId: 'content-position',
      name: {
        'zh-CN': '分隔线文案的位置'
      },
      desc: {
        'zh-CN': '通过<code>text-position</code> 属性设置分隔线文案的位置，<code>offset</code>属性设置左右偏移量。'
      },
      codeFiles: ['content-position.vue']
    },
    {
      demoId: 'custom-style',
      name: {
        'zh-CN': '自定义分隔线样式'
      },
      desc: {
        'zh-CN':
          '通过<code>line-color</code>属性设置分割线颜色，<code>content-background-color</code>属性设置文案背景颜色，<code>content-color</code>属性设置文字颜色，<code>height</code>属性设置分割线整体内容高度，<code>margin</code>属性设置外边距值。'
      },
      codeFiles: ['custom-style.vue']
    },
    {
      demoId: 'divider-type',
      name: {
        'zh-CN': '分隔线类型'
      },
      desc: {
        'zh-CN':
          '通过<code>type</code>设置分割线显示类型，默认值为<code>solid</code>，可选值为<code>dashed</code><code>dotted</code>。'
      },
      codeFiles: ['divider-type.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '分隔线状态'
      },
      desc: {
        'zh-CN': '通过<code>status</code>属性设置分割线显示状态颜色。'
      },
      codeFiles: ['status.vue']
    }
  ],
  features: [
    {
      id: 'vertical',
      name: '垂直分隔线',
      support: {
        value: true
      },
      description: '通过设置 vertical 属性为 true 可以设置分隔线的方向。',
      cloud: {
        value: true
      },
      apis: ['vertical'],
      demos: ['direction']
    },
    {
      id: 'text-position',
      name: '分隔线文案位置',
      support: {
        value: true
      },
      description: '通过 text-position 属性设置分隔线文案的位置，offset 属性设置左右偏移量。',
      cloud: {
        value: true
      },
      apis: ['text-position', 'offset'],
      demos: ['content-position']
    },
    {
      id: 'custom-style',
      name: '自定义样式',
      support: {
        value: true
      },
      description: '通过 line-color、content-background-color、content-color、height、margin 等属性自定义分隔线样式。',
      cloud: {
        value: true
      },
      apis: ['line-color', 'content-background-color', 'content-color', 'height', 'margin'],
      demos: ['custom-style']
    },
    {
      id: 'type',
      name: '分隔线类型',
      support: {
        value: true
      },
      description: '通过 type 设置分割线显示类型，可选值为 solid、dashed、dotted。',
      cloud: {
        value: true
      },
      apis: ['type'],
      demos: ['divider-type']
    },
    {
      id: 'status',
      name: '分隔线状态',
      support: {
        value: true
      },
      description: '通过 status 属性设置分割线显示状态颜色。',
      cloud: {
        value: true
      },
      apis: ['status'],
      demos: ['status']
    }
  ]
}
