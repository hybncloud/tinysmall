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
          '通过<code>arrow</code>属性设置左右箭头切换效果，<code>loop</code>属性是否循环显示，<code>autoplay</code>属性自动切换。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'indicator-trigger',
      name: {
        'zh-CN': '指示器和触发方式'
      },
      desc: {
        'zh-CN':
          '<p>通过配置 <code>indicator-position</code> 为<code>outside</code>后，走马灯指示器默认显示在幻灯片内容上，将显示在外部。\n配置 <code>trigger</code> 为<code>click</code>，可以修改指示器触发方式为单击，默认鼠标悬停到指示器时，走马灯幻灯片就会对应切换。</p>\n'
      },
      codeFiles: ['indicator-trigger.vue']
    },
    {
      demoId: 'manual-play',
      name: {
        'zh-CN': '手动轮播'
      },
      desc: {
        'zh-CN':
          '<p>通过调用 <code>setActiveItem()</code>、<code>next()</code>、<code>prev()</code> 方法可根据需要进行轮播。<code>initial-index</code> 属性可以指定初始激活的幻灯片索引。</p>\n'
      },
      codeFiles: ['manual-play.vue']
    },
    {
      demoId: 'close-loop',
      name: {
        'zh-CN': '关闭循环轮播'
      },
      desc: {
        'zh-CN':
          '<p>通过配置 <code>loop</code> 属性为<code>true</code>，<code>disabled</code> 属性为<code>true</code>后，若走马灯幻灯片已切换到最后一项，则将不能再从第一项开始循环切换。即切换到最后一项时，右侧切换箭头不再显示，切换到第一项时，左侧切换箭头不再显示。</p>\n'
      },
      codeFiles: ['close-loop.vue']
    },
    {
      demoId: 'autoplay',
      name: {
        'zh-CN': '自动切换'
      },
      desc: {
        'zh-CN':
          '<p>通过配置 <code>autoplay</code> 属性为<code>true</code>后，走马灯的幻灯片内容将自动轮播切换。</p>\n'
      },
      codeFiles: ['autoplay.vue']
    },
    {
      demoId: 'play-interval',
      name: {
        'zh-CN': '轮播间隔时间'
      },
      desc: {
        'zh-CN': '<p>通过 <code>interval</code> 属性可以自定义，走马灯幻灯片轮播间隔时间默认为 3000 毫秒。</p>\n'
      },
      codeFiles: ['play-interval.vue']
    },
    {
      demoId: 'up-down-carousel',
      name: {
        'zh-CN': '纵向轮播'
      },
      desc: {
        'zh-CN': '<p>通过配置 <code>type</code> 属性为<code>vertical</code>即可实现纵向轮播。</p>\n'
      },
      codeFiles: ['up-down-carousel.vue'],
      hideSaas: true
    },
    {
      demoId: 'show-title',
      name: {
        'zh-CN': '显示标题'
      },
      desc: {
        'zh-CN': '<p>通过 <code>title</code> 配置显示标题，需要与 <code>show-title</code> 结合使用。</p>\n'
      },
      codeFiles: ['show-title.vue']
    },
    {
      demoId: 'carousel-arrow-always',
      name: {
        'zh-CN': '总是显示切换箭头'
      },
      desc: {
        'zh-CN': '通过<code>arrow</code>设置属性为<code>always</code>。'
      },
      codeFiles: ['carousel-arrow-always.vue']
    },
    {
      demoId: 'carousel-arrow-hover',
      name: {
        'zh-CN': 'hover 时显示切换箭头'
      },
      desc: {
        'zh-CN': '通过<code>arrow</code>设置属性为<code>hover</code>。'
      },
      codeFiles: ['carousel-arrow-hover.vue']
    },
    {
      demoId: 'carousel-arrow-never',
      name: {
        'zh-CN': '隐藏切换箭头'
      },
      desc: {
        'zh-CN': '通过<code>arrow</code>设置属性为<code>never</code>。'
      },
      codeFiles: ['carousel-arrow-never.vue']
    },
    {
      demoId: 'card-mode',
      name: {
        'zh-CN': '卡片模式'
      },
      desc: {
        'zh-CN': '<p>通过配置 <code>type</code> 属性为<code>card</code>后，走马灯将以卡片形式进行展示。</p>\n'
      },
      codeFiles: ['card-mode.vue']
    },
    {
      demoId: 'carousel-events',
      name: {
        'zh-CN': '走马灯事件'
      },
      desc: {
        'zh-CN':
          '<p>主要包含<code>change</code>事件。</p>\n<p>当幻灯片切换时会触发该事件，回调函数可接收两个参数：<code>当前幻灯片索引</code>和<code>上一张幻灯片索引</code>。</p>\n'
      },
      codeFiles: ['carousel-events.vue']
    },
    {
      demoId: 'card-show',
      name: {
        'zh-CN': '轮播卡片'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>default</code> 插槽，自定义卡片轮播场景。</p>'
      },
      codeFiles: ['card-show.vue']
    },
    {
      demoId: 'dialog-show',
      name: {
        'zh-CN': '弹窗展示'
      },
      desc: {
        'zh-CN': '<p>在弹窗中嵌入轮播场景。</p>'
      },
      codeFiles: ['dialog-show.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 data 设置轮播图数据。',
      cloud: {
        value: true
      },
      apis: ['data'],
      demos: ['basic-usage']
    },
    {
      id: 'auto-play',
      name: '自动播放',
      support: {
        value: true
      },
      description: '通过 auto-play 设置是否自动播放，interval 设置自动播放的时间间隔。',
      cloud: {
        value: true
      },
      apis: ['auto-play', 'interval'],
      demos: ['auto-play']
    },
    {
      id: 'indicator',
      name: '指示器',
      support: {
        value: true
      },
      description: '通过 indicator 设置指示器的位置，可选值为 inside、outside、none。',
      cloud: {
        value: true
      },
      apis: ['indicator'],
      demos: ['indicator']
    },
    {
      id: 'arrow',
      name: '切换箭头',
      support: {
        value: true
      },
      description: '通过 arrow 设置切换箭头的显示时机，可选值为 hover、always、never。',
      cloud: {
        value: true
      },
      apis: ['arrow'],
      demos: ['arrow']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '当轮播图切换时会触发 change 事件。',
      cloud: {
        value: true
      },
      apis: ['change'],
      demos: ['events']
    }
  ]
}
