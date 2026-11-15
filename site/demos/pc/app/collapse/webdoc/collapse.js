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
          '<p>配置 <code>name</code> 属性作为每个 <code>collapse-item</code> 的唯一标志符，配置 <code>v-model</code> 设置当前激活的面板。默认情况下可以同时展开多个面板，这个例子默认展开了第一和第三个面板。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'accordion',
      name: {
        'zh-CN': '手风琴效果'
      },
      desc: {
        'zh-CN':
          '<p>配置 <code>accordion</code> 属性为 <code>true</code>  后，折叠面板将展示手风琴效果，一次只允许展开一个面板。</p>'
      },
      codeFiles: ['accordion.vue']
    },
    {
      demoId: 'disable',
      name: {
        'zh-CN': '禁用状态'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>collapse-item</code> 元素上配置 <code>disabled</code> 属性为 true 后，将禁用指定的折叠面板项。</p>'
      },
      codeFiles: ['disable.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '面板大小'
      },
      desc: {
        'zh-CN': '通过 <code>size</code> 属性可以指定折叠面板的尺寸，可选值为 "" | "medium"。'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '面板标题'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>collapse-item</code> 元素上配置 <code>title</code> 属性可以指定每个折叠面板项的标题。也可以通过 <code>title</code> 插槽的方式自定义面板标题，比如在标题后增加图标。<br/>在 <code>collapse-item</code> 元素上配置 <code>title-right</code> 属性可以指定每个折叠面板项标题的右侧内容。也可以通过 <code>title-right</code> 插槽的方式自定义面板标题右侧内容，比如在标题右侧增加图标。</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'icon',
      name: {
        'zh-CN': '展开/折叠图标'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>collapse-item</code> 元素上可以通过 <code>icon</code> 插槽的方式自定义展开折叠 icon 图标。也可以通过 <code>expand-icon</code> 参数传入一个框架自带的 <code>icon</code> 图标，此种方式不需要自己写样式</p>'
      },
      codeFiles: ['icon.vue']
    },
    {
      demoId: 'before-close',
      name: {
        'zh-CN': '阻止切换'
      },
      desc: {
        'zh-CN': '<p>设置 before-close 属性，如果返回 false，将阻止面板的切换。</p>'
      },
      codeFiles: ['before-close.vue']
    },
    {
      demoId: 'nested-content',
      name: {
        'zh-CN': '嵌套内容'
      },
      desc: {
        'zh-CN': '<p>通过 <code>collapse-item</code> 元素的默认插槽嵌入表单、表格等内容。</p>'
      },
      codeFiles: ['nested-content.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<p>激活面板的值改变时将触发 <code>change</code> 事件。</p>'
      },
      codeFiles: ['events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 v-model 设置当前激活的面板。',
      cloud: {
        value: true
      },
      apis: ['v-model'],
      demos: ['basic-usage']
    },
    {
      id: 'accordion',
      name: '手风琴效果',
      support: {
        value: true
      },
      description: '通过 accordion 设置是否以手风琴模式显示。',
      cloud: {
        value: true
      },
      apis: ['accordion'],
      demos: ['accordion']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置是否禁用折叠面板。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'custom-title',
      name: '自定义标题',
      support: {
        value: true
      },
      description: '通过 title 插槽可以自定义标题。',
      cloud: {
        value: true
      },
      apis: ['slot-title'],
      demos: ['custom-title']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '当前激活面板改变时会触发 change 事件。',
      cloud: {
        value: true
      },
      apis: ['change'],
      demos: ['events']
    }
  ]
}
