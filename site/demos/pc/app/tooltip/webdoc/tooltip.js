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
        'zh-CN': `通过 <code>content</code> 属性指定提示的内容。<br>
           通过 <code>placement</code> 属性指定提示的显示位置，支持 12 个显示位置。<br>
           通过 <code>effect</code> 属性指定提示的效果。<br>`
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'theme',
      name: {
        'zh-CN': '主题'
      },
      desc: {
        'zh-CN': `
            通过 <code>effect</code> 属性设置明暗效果，可选值 <code>dark/light</code> ,默认值为 <code>dark</code>，通常使用<code>effect</code>设置效果。<br>
            通过 <code>type</code> 属性设置主题，它的优先级大于 <code>effect</code>。`
      },
      codeFiles: ['theme.vue']
    },
    {
      demoId: 'control',
      name: {
        'zh-CN': '控制/禁用提示'
      },
      desc: {
        'zh-CN': `
          提示组件默认是监听鼠标移入/移出事件来触发，手动控制提示的出现，有以下方法：<br>
          1.通过 <code>visible</code> 属性设置是否智能识别溢出后提示，属性取值为 <code> always / auto </code>。当取值为<code>auto</code>时，智能提示是自动识别文字是否有长度溢出，动态的显示提示。<br>
          2.通过 <code>manual</code> 属性为 true 后，就可以通过设置 <code>v-model</code> 属性，动态控制显示和隐藏。<br>
          3.通过 <code>disabled</code> 属性，直接禁用提示。<br>`
      },
      codeFiles: ['control.vue']
    },
    {
      demoId: 'content',
      name: {
        'zh-CN': '弹出层内容'
      },
      desc: {
        'zh-CN': `
          通过 <code>content</code> 属性指定弹出的文本。<br>
          通过 <code>renderContent</code> 自定义渲染函数，可使用 <code>JSX</code> 返回需要渲染的节点内容。<br>
          通过 <code>content</code> 插槽，自定义内容，当弹出复杂的内容结构时，推荐使用插槽的方式。<br>`
      },
      codeFiles: ['content.vue']
    },
    {
      demoId: 'offset',
      name: {
        'zh-CN': '弹出层的偏移'
      },
      desc: {
        'zh-CN': '通过 <code>offset</code> 属性设置组件出现位置的偏移量。'
      },
      codeFiles: ['offset.vue']
    },
    {
      demoId: 'custom-popper',
      name: {
        'zh-CN': '弹出层的特性'
      },
      desc: {
        'zh-CN': `
          通过 <code> visible-arrow </code> 属性设置是否显示小箭头。<br>
          通过 <code> enterable </code> 属性设置鼠标是否可进入到 tooltip 中。<br>
          通过 <code> popper-class </code> 属性设置弹出 dom 的类名，便于用户定制弹出层的样式。<br>`
      },
      codeFiles: ['custom-popper.vue']
    },
    {
      demoId: 'delay',
      name: {
        'zh-CN': '延迟控制'
      },
      desc: {
        'zh-CN': `
            通过 <code>open-delay</code> 属性设置组件延迟出现的时间，单位毫秒，默认值为 0。<br>
            通过 <code>close-delay</code> 属性设置 组件延迟关闭的时间，单位毫秒，默认值为 300。<br>
            通过 <code>hide-after</code> 属性设置组件出现后自动隐藏的时间，单位毫秒，为 0 则不会自动隐藏，默认值为 0。<br>
          `
      },
      codeFiles: ['delay.vue']
    },
    {
      demoId: 'popper-options',
      name: {
        'zh-CN': '高级配置'
      },
      desc: {
        'zh-CN': '通过 <code>popper-options</code> 属性为组件的弹出层的配置参。'
      },
      codeFiles: ['popper-options.vue']
    },
    {
      demoId: 'transition',
      name: {
        'zh-CN': '自定义渐变动画'
      },
      desc: {
        'zh-CN': '通过 <code>transition</code> 定义渐变动画，默认选值为 <code>tiny-fade-in-linear</code>。'
      },
      codeFiles: ['transition.vue']
    },
    {
      demoId: 'pre',
      name: {
        'zh-CN': '文本预格式化'
      },
      desc: {
        'zh-CN': `
          配置 <code> pre </code>  为  <code> true </code> ，就会预格式化  <code> content </code>  文本。<br>
          被包围在 <code> pre </code>  标签元素中的文本会保留空格和换行符，文本也会呈现为等宽字体。`
      },
      codeFiles: ['pre.vue']
    },
    {
      demoId: 'content-max-height',
      name: {
        'zh-CN': '内容最大高度'
      },
      desc: {
        'zh-CN': `配置 <code>content-max-height</code>  设置内容展示的最大高度。`
      },
      codeFiles: ['content-max-height.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 content 属性设置提示内容，placement 设置显示位置。',
      cloud: {
        value: true
      },
      apis: ['content', 'placement'],
      demos: ['basic-usage']
    },
    {
      id: 'theme',
      name: '主题',
      support: {
        value: true
      },
      description: '通过 effect 设置明暗效果，type 设置主题类型。',
      cloud: {
        value: true
      },
      apis: ['effect', 'type'],
      demos: ['theme']
    },
    {
      id: 'control',
      name: '控制显示',
      support: {
        value: true
      },
      description: '通过 visible 控制显示状态，manual 设置手动控制模式。',
      cloud: {
        value: true
      },
      apis: ['visible', 'manual'],
      demos: ['control']
    },
    {
      id: 'content',
      name: '自定义内容',
      support: {
        value: true
      },
      description: '通过 renderContent 函数或 content 插槽自定义提示内容。',
      cloud: {
        value: true
      },
      apis: ['renderContent', 'slots'],
      demos: ['content']
    }
  ]
}
