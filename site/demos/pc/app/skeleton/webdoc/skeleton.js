export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'base',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN': '<p>基础的骨架效果。</p>\n'
      },
      codeFiles: ['base.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code>  属性可以控制骨架屏的尺寸。</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'complex-demo',
      name: {
        'zh-CN': '头像模式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>avatar</code> 属性控制骨架段落左侧出现头像占位。</p>\n'
      },
      codeFiles: ['complex-demo.vue']
    },
    {
      demoId: 'custom-rows',
      name: {
        'zh-CN': '段落行数'
      },
      desc: {
        'zh-CN':
          '<p>段落默认渲染 4 行，通过 <code>rows</code> 属性控制段落行数，显示的数量会比传入的数量多 1，首行会被渲染一个长度 40% 的段首，末行会被渲染一个长度 60% 的段尾。</p>\n'
      },
      codeFiles: ['custom-rows.vue']
    },
    {
      demoId: 'custom-paragraph-width',
      name: {
        'zh-CN': '段落宽度'
      },
      desc: {
        'zh-CN': '<p>通过 <code>rows-width</code> 属性可以段落宽度。</p>\n'
      },
      codeFiles: ['custom-paragraph-width.vue']
    },
    {
      demoId: 'custom-layout',
      name: {
        'zh-CN': '样式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>class</code> 和 <code>style</code> 可自定义样式结构。</p>\n'
      },
      codeFiles: ['custom-layout.vue']
    },
    {
      demoId: 'loading-completed',
      name: {
        'zh-CN': '加载完成'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>loading</code> 属性的值来表示是否加载完成。可以通过具名插槽 <code>default</code> 来构建 <code>loading</code> 结束之后需要展示的真实 DOM 元素结构。</p>\n'
      },
      codeFiles: ['loading-completed.vue']
    },
    {
      demoId: 'animation',
      name: {
        'zh-CN': '动画效果'
      },
      desc: {
        'zh-CN': '<p>通过 <code>animated</code> 属性设置是否开启动画。</p>\n'
      },
      codeFiles: ['animation.vue']
    },
    {
      demoId: 'fine-grained-mode',
      name: {
        'zh-CN': '形态'
      },
      desc: {
        'zh-CN': '<p>通过 <code>variant</code> 属性可以控制 <code>skeleton-item</code> 的形态。</p>\n'
      },
      codeFiles: ['fine-grained-mode.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '基础的骨架效果。',
      cloud: {
        value: true
      },
      apis: [],
      demos: ['base']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 属性可以控制骨架屏的尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'avatar',
      name: '头像模式',
      support: {
        value: true
      },
      description: '通过 avatar 属性控制骨架段落左侧出现头像占位。',
      cloud: {
        value: true
      },
      apis: ['avatar'],
      demos: ['complex-demo']
    },
    {
      id: 'rows',
      name: '段落行数',
      support: {
        value: true
      },
      description: '段落默认渲染 4 行，通过 rows 属性控制段落行数。',
      cloud: {
        value: true
      },
      apis: ['rows'],
      demos: ['custom-rows']
    }
  ]
}
