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
          通过 <code>value</code> 或者默认插槽设置链接显示内容。<br>
          绑定 <code>click</code> 事件监听点击。当禁用或配置 <code>href</code> 属性时，不会触发<code>click</code>事件！
        `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'link-style',
      name: {
        'zh-CN': '主题样式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>type</code> 设置链接的主题类型。</p>'
      },
      codeFiles: ['link-style.vue']
    },
    {
      demoId: 'dynamic-disable',
      name: {
        'zh-CN': '禁用链接'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置是否禁用链接。</p>'
      },
      codeFiles: ['dynamic-disable.vue']
    },
    {
      demoId: 'focus-no-underline',
      name: {
        'zh-CN': '聚焦时不显示下划线'
      },
      desc: {
        'zh-CN': '<p>通过 <code>underline</code> 设置鼠标悬浮是否显示下划线。</p>'
      },
      codeFiles: ['focus-no-underline.vue']
    },
    {
      demoId: 'custom-icon',
      name: {
        'zh-CN': '自定义图标'
      },
      desc: {
        'zh-CN': '<p>通过属性 <code>icon</code>、默认插槽、<code>icon</code> 插槽都可以自定义图标。</p>'
      },
      codeFiles: ['custom-icon.vue']
    },
    {
      demoId: 'config-href',
      name: {
        'zh-CN': '链接地址'
      },
      desc: {
        'zh-CN': '<p>通过 <code>href</code> 设置跳转连接，可配合原生属性 <code>target</code> 一起使用。</p>'
      },
      codeFiles: ['config-href.vue']
    },
    {
      demoId: 'target',
      name: {
        'zh-CN': '打开方式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>target</code> 配置链接打开方式，可选值有 <code>_self</code>、<code>_blank</code>、<code>_parent</code>、<code>_top</code>。</p>'
      },
      codeFiles: ['target.vue']
    }
  ],
  hiddenDemo: {
    demoId: 'size',
    name: {
      'zh-CN': '尺寸'
    },
    desc: {
      'zh-CN': '<p>通过 <code>size</code> 属性设置尺寸，仅支持 <code>medium</code> 尺寸</p>'
    },
    codeFiles: ['size.vue']
  },
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 value 或者默认插槽设置链接显示内容，绑定 click 事件监听点击。',
      cloud: {
        value: true
      },
      apis: ['value', 'click'],
      demos: ['basic-usage']
    },
    {
      id: 'style',
      name: '主题样式',
      support: {
        value: true
      },
      description: '通过 type 设置链接的主题类型。',
      cloud: {
        value: true
      },
      apis: ['type'],
      demos: ['link-style']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置是否禁用链接。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['dynamic-disable']
    },
    {
      id: 'underline',
      name: '下划线',
      support: {
        value: true
      },
      description: '通过 underline 设置鼠标悬浮是否显示下划线。',
      cloud: {
        value: true
      },
      apis: ['underline'],
      demos: ['focus-no-underline']
    },
    {
      id: 'icon',
      name: '图标',
      support: {
        value: true
      },
      description: '通过属性 icon、默认插槽、icon 插槽都可以自定义图标。',
      cloud: {
        value: true
      },
      apis: ['icon'],
      demos: ['custom-icon']
    },
    {
      id: 'href',
      name: '链接地址',
      support: {
        value: true
      },
      description: '通过 href 设置跳转连接，可配合原生属性 target 一起使用。',
      cloud: {
        value: true
      },
      apis: ['href', 'target'],
      demos: ['config-href']
    }
  ]
}
