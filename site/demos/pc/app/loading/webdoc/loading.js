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
        'zh-CN': '<p>通过静态方法 <code>Loading.service</code> 在指定 <code>target</code> 上设置加载。</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>size</code> 属性设置尺寸大小，可选值：<code>medium</code> / <code>small</code> / <code>large </code>。</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'loading-tip-text',
      name: {
        'zh-CN': '加载提示文本'
      },
      desc: {
        'zh-CN': '<p>通过 <code>text</code> 自定义加载文字的提示文本。</p>\n'
      },
      codeFiles: ['loading-tip-text.vue']
    },
    {
      demoId: 'background',
      name: {
        'zh-CN': '遮罩背景色'
      },
      desc: {
        'zh-CN': '<p>通过 <code>background</code> 自定义背景颜色和透明度。</p>\n'
      },
      codeFiles: ['background.vue']
    },
    {
      demoId: 'custom-class',
      name: {
        'zh-CN': '样式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>customClass</code> 指定类名进行样式修改。</p>\n'
      },
      codeFiles: ['custom-class.vue']
    },
    {
      demoId: 'directive',
      name: {
        'zh-CN': '指令'
      },
      desc: {
        'zh-CN': '<p>通过 v-loading 使用指令。</p>'
      },
      codeFiles: ['directive.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '全屏加载'
      },
      desc: {
        'zh-CN':
          '<p><div>通过 <code>v-loading.lock.fullscreen</code> 指令添加修饰符进行全屏加载。</div><div>也能通过<code>Loading.service</code>并配置属性进行全屏加载。</div></p>'
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'spinner',
      name: {
        'zh-CN': '加载图标'
      },
      desc: {
        'zh-CN': '<p>通过 <code>spinner</code> 自定义加载图标。</p>\n'
      },
      codeFiles: ['spinner.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '支持基本的加载状态显示功能。',
      cloud: {
        value: true
      },
      apis: ['loading'],
      demos: ['basic-usage']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '支持 medium、small、large 三种尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'customization',
      name: '自定义样式',
      support: {
        value: true
      },
      description: '支持自定义加载文本、背景色和样式类。',
      cloud: {
        value: true
      },
      apis: ['text', 'background', 'custom-class'],
      demos: ['customization']
    },
    {
      id: 'directive',
      name: '指令方式',
      support: {
        value: true
      },
      description: '支持通过 v-loading 指令使用加载状态。',
      cloud: {
        value: true
      },
      apis: ['v-loading'],
      demos: ['directive']
    },
    {
      id: 'fullscreen',
      name: '全屏加载',
      support: {
        value: true
      },
      description: '支持全屏显示加载状态。',
      cloud: {
        value: true
      },
      apis: ['fullscreen'],
      demos: ['fullscreen']
    }
  ]
}
