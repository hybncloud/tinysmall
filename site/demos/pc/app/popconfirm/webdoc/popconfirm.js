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
        'zh-CN':
          '<p>通过 <code>title</code> 设置标题内容， <code>message</code> 设置正文内容，通过 <code>reference</code> 插槽自定义触发显示的元素。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'trigger',
      name: {
        'zh-CN': '触发方式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>trigger</code> 设置触发显示气泡确认框的方式。</p>'
      },
      codeFiles: ['trigger.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '图标类型'
      },
      desc: {
        'zh-CN': '<p>通过 <code>type</code> 设置提示的图标类型，或者传入自定义图标。</p>'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'placement',
      name: {
        'zh-CN': '提示框显示位置'
      },
      desc: {
        'zh-CN': '<p>通过 <code>placement</code> 设置提示框显示位置。</p>'
      },
      codeFiles: ['placement.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '自定义类名'
      },
      desc: {
        'zh-CN': '<p>通过 <code>custom-class</code> 自定义气泡提示框的类名。</p>'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'slot-footer',
      name: {
        'zh-CN': '底部插槽'
      },
      desc: {
        'zh-CN': '<p>通过 <code>footer</code> 插槽自定义底部内容。</p>'
      },
      codeFiles: ['slot-footer.vue']
    },
    {
      demoId: 'slot-message',
      name: {
        'zh-CN': '消息插槽'
      },
      desc: {
        'zh-CN': '<p>通过 <code>message</code> 插槽自定义消息内容。</p>'
      },
      codeFiles: ['slot-message.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '宽度'
      },
      desc: {
        'zh-CN': '<p>通过 <code>width</code> 设置提示框宽度。</p>'
      },
      codeFiles: ['width.vue']
    },
    {
      demoId: 'cancel-button',
      name: {
        'zh-CN': '隐藏取消按钮'
      },
      desc: {
        'zh-CN': '<p>通过 <code>cancel-button</code> 设置是否展示取消按钮。</p>'
      },
      codeFiles: ['cancel-button.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<p>当气泡确认框显示时触发 <code>show</code> 事件，当确认框隐藏时触发 <code>hide</code> 事件。<br />当点击底部确认按钮时会同时触发 <code>hide</code> 和 <code>confirm</code> 事件。</p>'
      },
      codeFiles: ['event.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 title 设置标题内容，message 设置正文内容，通过 reference 插槽自定义触发显示的元素。',
      cloud: {
        value: true
      },
      apis: ['title', 'message', 'reference'],
      demos: ['basic-usage']
    },
    {
      id: 'trigger',
      name: '触发方式',
      support: {
        value: true
      },
      description: '通过 trigger 设置触发显示气泡确认框的方式。',
      cloud: {
        value: true
      },
      apis: ['trigger'],
      demos: ['trigger']
    },
    {
      id: 'type',
      name: '图标类型',
      support: {
        value: true
      },
      description: '通过 type 设置提示的图标类型，或者传入自定义图标。',
      cloud: {
        value: true
      },
      apis: ['type'],
      demos: ['type']
    },
    {
      id: 'placement',
      name: '显示位置',
      support: {
        value: true
      },
      description: '通过 placement 设置提示框显示位置。',
      cloud: {
        value: true
      },
      apis: ['placement'],
      demos: ['placement']
    },
    {
      id: 'custom',
      name: '自定义配置',
      support: {
        value: true
      },
      description: '支持自定义类名、宽度、取消按钮显示等配置。',
      cloud: {
        value: true
      },
      apis: ['custom-class', 'width', 'cancel-button'],
      demos: ['custom-class', 'width', 'cancel-button']
    },
    {
      id: 'slots',
      name: '插槽',
      support: {
        value: true
      },
      description: '通过 footer 插槽自定义底部内容。',
      cloud: {
        value: true
      },
      apis: ['footer'],
      demos: ['slot-footer']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 show、hide、confirm 等事件。',
      cloud: {
        value: true
      },
      apis: ['show', 'hide', 'confirm'],
      demos: ['event']
    }
  ]
}
