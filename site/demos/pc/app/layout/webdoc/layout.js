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
          '\n            通过在<code>Layout </code> 组件嵌套使用 <code>Row</code> , <code>Col</code> 组件，来实现对一个区域进行 12/24 栅格布局。<br>\n            通过<code>Layout </code> 组件的<code> cols </code> 属性来指定布局的总栅格栏数，组件库默认为 12 栅格栏；<br>\n            通过 <code>Col</code> 组件的 <code>span</code> 属性指定每栏所占栅格数。当一行的栅格数之和大于总栅格栏数时，布局会自动换行显示。<br>\n          '
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'responsive-layout',
      name: {
        'zh-CN': '响应式布局'
      },
      desc: {
        'zh-CN':
          '\n            在<code>Col</code> 组件预设了五个响应尺寸：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code> 和 <code>xl</code>，\n            来指定在每一个媒介查询尺寸时，该列应该占用的栅格数。组件库默认媒介查询的断点位置为<code>768 / 992 / 1200 / 1920</code><br>\n            请改变浏览器窗口的大小，观察下面示例中，各列所占栅格的变化。\n          '
      },
      codeFiles: ['responsive-layout.vue']
    },
    {
      demoId: 'order',
      name: {
        'zh-CN': 'Col 排序'
      },
      desc: {
        'zh-CN':
          '\n            在启用<code>Row</code> 组件的 <code>flex</code> 布局时，可通过设置它的 <code>order</code> 属性值为：<code>asc 或 desc</code>，给<code>Col</code> 组件排序。<br>\n            待排序的列需指定 <code>no</code> 属性为数字值，属性的默认值为 0。\n          '
      },
      codeFiles: ['order.vue']
    },
    {
      demoId: 'alignment',
      name: {
        'zh-CN': '对齐方式'
      },
      desc: {
        'zh-CN':
          '\n            通过<code>Row</code> 组件的 <code>flex</code> 属性设置为 <code>true</code> 来启用 flex 布局，\n            并通过 <code>justify</code> 来指定主轴方向的对齐方式，通过 <code>align</code> 属性指定副轴的对齐方式。<br>\n          '
      },
      codeFiles: ['alignment.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '偏移'
      },
      desc: {
        'zh-CN': '通过设置 <code>Col</code> 组件的 <code>offset</code> 属性来指定当前列偏移的栏数。'
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'gutter',
      name: {
        'zh-CN': '栅格间隔'
      },
      desc: {
        'zh-CN':
          '\n            通过使用 <code>Row</code> 组件的 <code>gutter</code> 属性实现栅格间隔。<br>\n            不设置 <code>gutter</code> 时，组件会默认为 <code>Col</code> 设置<code> 左右 10px </code>的 padding 值<br>\n            通过 <code>noSpace</code> 属性，让子项间没有间距。\n          '
      },
      codeFiles: ['gutter.vue']
    },
    {
      demoId: 'tag',
      name: {
        'zh-CN': '自定义元素标签'
      },
      desc: {
        'zh-CN':
          '\n            通过使用 <code>Layout / Row / Col </code> 组件的 <code>tag</code> 属性实现自定义元素标签，可选任意标签。默认使用 <code>div</code> \n          '
      },
      codeFiles: ['tag.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 Layout 组件嵌套使用 Row、Col 组件，实现 12/24 栅格布局。',
      cloud: {
        value: false
      },
      apis: ['cols', 'span'],
      demos: ['basic-usage']
    },
    {
      id: 'responsive',
      name: '响应式布局',
      support: {
        value: true
      },
      description: '在 Col 组件预设了五个响应尺寸：xs、sm、md、lg 和 xl。',
      cloud: {
        value: false
      },
      apis: ['xs', 'sm', 'md', 'lg', 'xl'],
      demos: ['responsive-layout']
    },
    {
      id: 'order',
      name: '排序',
      support: {
        value: true
      },
      description: '通过 Row 组件的 flex 布局和 order 属性给 Col 组件排序。',
      cloud: {
        value: false
      },
      apis: ['flex', 'order', 'no'],
      demos: ['order']
    },
    {
      id: 'alignment',
      name: '对齐方式',
      support: {
        value: true
      },
      description: '通过 justify 和 align 属性指定主轴和副轴的对齐方式。',
      cloud: {
        value: false
      },
      apis: ['justify', 'align'],
      demos: ['alignment']
    },
    {
      id: 'offset',
      name: '偏移',
      support: {
        value: true
      },
      description: '通过 Col 组件的 offset 属性指定当前列偏移的栏数。',
      cloud: {
        value: false
      },
      apis: ['offset'],
      demos: ['offset']
    },
    {
      id: 'gutter',
      name: '栅格间隔',
      support: {
        value: true
      },
      description: '通过 Row 组件的 gutter 属性实现栅格间隔。',
      cloud: {
        value: false
      },
      apis: ['gutter', 'noSpace'],
      demos: ['gutter']
    },
    {
      id: 'tag',
      name: '自定义元素标签',
      support: {
        value: true
      },
      description: '通过 Layout、Row、Col 组件的 tag 属性实现自定义元素标签。',
      cloud: {
        value: false
      },
      apis: ['tag'],
      demos: ['tag']
    }
  ]
}
