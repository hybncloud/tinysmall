export default {
  column: '1',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'line-horizontal',
      name: {
        'zh-CN': '横向单链型'
      },
      desc: {
        'zh-CN':
          '<p>通过添加 <code>line</code> 用作横向单链型步骤条，<code>visible-num</code> 控制信息可见的节点数。</p>'
      },
      codeFiles: ['line-horizontal.vue']
    },
    {
      demoId: 'line-vertical',
      name: {
        'zh-CN': '垂直单链型'
      },
      desc: {
        'zh-CN': '<p>使用 <code>line</code> 与 <code>vertical</code> 设置为条形步骤条。</p>\n'
      },
      codeFiles: ['line-vertical.vue']
    },
    {
      demoId: 'line-dot',
      name: {
        'zh-CN': '垂直点状型'
      },
      desc: {
        'zh-CN': '<p>使用 <code>dot</code> 与 <code>vertical</code> 设置为垂直点状形。</p>\n'
      },
      codeFiles: ['line-dot.vue']
    },
    {
      demoId: 'advanced-steps',
      name: {
        'zh-CN': '条形步骤条'
      },
      desc: {
        'zh-CN': '<p>默认显示为条形步骤条。</p>\n'
      },
      codeFiles: ['advanced-steps.vue']
    },
    {
      demoId: 'content-center',
      name: {
        'zh-CN': '内容居中'
      },
      desc: {
        'zh-CN': '<p>添加 <code>content-center</code> 使步骤条内容默认居中显示。</p>'
      },
      codeFiles: ['content-center.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN':
          '<p>步骤条两种模式支持 <code>size</code> 设置尺寸：</p>\n        <p>1. <code>line</code> 单链型模式支持 <code>mini</code>、<code>small</code>、<code>medium</code>、<code>large</code> 4 种尺寸，默认值为 <code>medium</code>。</p>\n        <p>2. <code>advanced</code> 高级向导模式支持 <code>medium</code>、<code>large</code> 2 种尺寸，默认值为 <code>medium</code>。</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'node-width',
      name: {
        'zh-CN': '节点宽度'
      },
      desc: {
        'zh-CN':
          '<p>使用 <code>space</code> 配置步骤条节点的宽度。</p><p>通过 <code>flex</code> 开启总宽度自适应，节点等宽，撑满父容器，节点名称超出省略。</p>'
      },
      codeFiles: ['node-width.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '节点滚动时间'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>duration</code> 设置节点左右滚动的持续时间，默认值为 300（单位 ms），设置 0 则无滚动动画，仅开启 advanced 高级向导模式有效。</p>'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'custom-steps-item',
      name: {
        'zh-CN': '自定义字段'
      },
      desc: {
        'zh-CN':
          "<p>可以通过以下属性自定义数据项字段：<br /><code>name-field</code>：设置节点信息中名称对应的字段名，默认为 'name'  <br /><code>count-field</code>：设置条形步骤条里徽标计数对应的字段名，默认为 'count' 。<br /><code>status-field</code>：设置数据状态对应的字段名，默认为 'status' 。</p>\n"
      },
      codeFiles: ['custom-steps-item.vue']
    },
    {
      demoId: 'slot-icon',
      name: {
        'zh-CN': '图标插槽'
      },
      desc: {
        'zh-CN': '<p>通过插槽 <code>icon</code> 自定义单链型节点图标。</p>\n'
      },
      codeFiles: ['slot-icon.vue']
    },
    {
      demoId: 'slot-item',
      name: {
        'zh-CN': 'item 插槽'
      },
      desc: {
        'zh-CN': '<p>通过插槽 <code>item</code> 自定义节点内容。</p>\n'
      },
      codeFiles: ['slot-item.vue']
    },
    {
      demoId: 'slot-item-footer',
      name: {
        'zh-CN': 'itemFooter 插槽'
      },
      desc: {
        'zh-CN': '<p>通过插槽 <code>itemFooter</code> 自定义节点底部内容为链接按钮。</p>'
      },
      codeFiles: ['slot-item-footer.vue']
    },
    {
      demoId: 'click',
      name: {
        'zh-CN': '点击事件'
      },
      desc: {
        'zh-CN': '<p>点击节点时触发 <code>click</code> 事件。</p>\n'
      },
      codeFiles: ['click.vue']
    }
  ],
  features: [
    {
      id: 'line',
      name: '单链型',
      support: {
        value: true
      },
      description: '通过添加 line 用作横向单链型步骤条，visible-num 控制信息可见的节点数。',
      cloud: {
        value: true
      },
      apis: ['line', 'visible-num'],
      demos: ['line-horizontal']
    },
    {
      id: 'vertical',
      name: '垂直布局',
      support: {
        value: true
      },
      description: '使用 line 与 vertical 设置为条形步骤条。',
      cloud: {
        value: true
      },
      apis: ['vertical'],
      demos: ['line-vertical']
    },
    {
      id: 'dot',
      name: '点状型',
      support: {
        value: true
      },
      description: '使用 dot 与 vertical 设置为垂直点状形。',
      cloud: {
        value: true
      },
      apis: ['dot'],
      demos: ['line-dot']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description:
        '步骤条两种模式支持 size 设置尺寸：line 单链型模式支持 mini、small、medium、large 4 种尺寸，advanced 高级向导模式支持 medium、large 2 种尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    }
  ]
}
