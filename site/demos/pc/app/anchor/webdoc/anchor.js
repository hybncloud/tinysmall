export default {
  column: '1',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法'
      },
      hideSaas: true,
      desc: {
        'zh-CN': '通过 <code>links</code> 设置导航数据， <code>type</code> 设置类型。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'is-affix',
      name: {
        'zh-CN': '固定模式'
      },
      desc: {
        'zh-CN': '通过 <code>is-affix</code> 设置固定定位，不随页面滚动。'
      },
      codeFiles: ['is-affix.vue']
    },
    {
      demoId: 'set-container',
      name: {
        'zh-CN': '滚动容器'
      },
      desc: {
        'zh-CN':
          '通过 <code>container-id</code> 设置滚动容器， <code>link-click</code> 监听锚点点击事件，阻止浏览器默认行为，实现单页面 <code>hash</code> 路由模式的页内跳转，在指定容器内滚动。<br/>\n            <code>mark-class</code> 设置自定义类名，高亮显示导航的目标元素。'
      },
      codeFiles: ['set-container.vue']
    },
    {
      demoId: 'offset-top',
      name: {
        'zh-CN': '顶部偏移量'
      },
      desc: {
        'zh-CN': '通过 <code>offset-top</code> 设置锚点距离顶部的偏移量。'
      },
      codeFiles: ['offset-top.vue']
    },
    {
      demoId: 'change',
      name: {
        'zh-CN': 'change 事件'
      },
      desc: {
        'zh-CN': '通过 <code>change</code> 监听锚点改变的事件。'
      },
      codeFiles: ['change.vue']
    }
  ],
  features: [
    {
      id: 'links',
      name: '导航数据',
      support: {
        value: true
      },
      description: '通过 links 属性设置导航数据。',
      cloud: {
        value: true
      },
      apis: ['links'],
      demos: ['basic-usage']
    },
    {
      id: 'type',
      name: '类型设置',
      support: {
        value: true
      },
      description: '通过 type 属性设置导航类型。',
      cloud: {
        value: true
      },
      apis: ['type'],
      demos: ['basic-usage']
    },
    {
      id: 'is-affix',
      name: '固定模式',
      support: {
        value: true
      },
      description: '通过 is-affix 属性设置固定定位，使导航不随页面滚动。',
      cloud: {
        value: true
      },
      apis: ['is-affix'],
      demos: ['is-affix']
    },
    {
      id: 'container',
      name: '滚动容器',
      support: {
        value: true
      },
      description: '通过 container-id 设置滚动容器，实现指定容器内的滚动效果。',
      cloud: {
        value: true
      },
      apis: ['container-id'],
      demos: ['set-container']
    },
    {
      id: 'mark-class',
      name: '高亮样式',
      support: {
        value: true
      },
      description: '通过 mark-class 设置自定义类名，用于高亮显示导航的目标元素。',
      cloud: {
        value: true
      },
      apis: ['mark-class'],
      demos: ['set-container']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '支持监听锚点点击事件（link-click）和锚点改变事件（change）。',
      cloud: {
        value: true
      },
      apis: ['link-click', 'change'],
      demos: ['set-container', 'change']
    },
    // 在features数组中添加新的特性说明
    {
      id: 'offset-top',
      name: '顶部偏移量',
      support: {
        value: true
      },
      description: '通过 offset-top 属性设置锚点距离顶部的偏移量。',
      cloud: {
        value: true
      },
      apis: ['offset-top'],
      demos: ['offset-top']
    }
  ]
}
