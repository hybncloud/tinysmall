export default {
  column: '2',
  owner: '',
  show: true,
  cloud: false,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN': `
          通过<code>Notify</code>函数，在页面上弹出通知框组件。<br>
          通过 <code>title</code>  属性设置通知框标题。<br>
          通过 <code>message</code>  属性设置通知框的内容。<br>
          <div class="tip custom-block">
            <p class="custom-block-title"> 小技巧 </p>
             标题和内容不仅支持字符串传入，还支持<code> jsx </code> 和 <code>h</code> 函数的写法。
          </div>
        `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '消息类型'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>type</code> 设置不同的类型。可选值：success、warning、info、error，默认值：info。</p>\n'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'duration',
      name: {
        'zh-CN': '自动关闭延时'
      },
      desc: {
        'zh-CN':
          '通过 <code>duration</code>  属性设置自动关闭的延迟时间，默认情况， <code>success  info </code> 延时 5 秒 <code> warning  error </code> 延时 10 秒自动关闭。'
      },
      codeFiles: ['duration.vue']
    },
    {
      demoId: 'position',
      name: {
        'zh-CN': '显示位置'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>position</code>  属性设置通知框显示位置，默认值：bottom-right。</p>\n'
      },
      codeFiles: ['position.vue']
    },
    {
      demoId: 'showClose',
      name: {
        'zh-CN': '不显示关闭按钮'
      },
      desc: {
        'zh-CN': '<p> <code>showClose</code> 属性设置通知框是否显示关闭按钮，默认值：<code>true</code> 。</p>\n'
      },
      codeFiles: ['showClose.vue']
    },
    {
      demoId: 'showIcon',
      name: {
        'zh-CN': '不显示类型图标'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>showIcon</code>  属性设置通知框是否显示类型图标，默认值：true。</p>\n'
      },
      codeFiles: ['showIcon.vue']
    },
    {
      demoId: 'closeIcon',
      name: {
        'zh-CN': '自定义关闭图标'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>closeIcon</code>  属性设置通知框关闭图标，默认值：IconClose。</p>\n'
      },
      codeFiles: ['closeIcon.vue']
    },
    {
      demoId: 'statusIcon',
      name: {
        'zh-CN': '自定义类型图标'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>statusIcon</code>  属性设置通知框类型图标，默认值：IconInfoSolid。</p>\n'
      },
      codeFiles: ['statusIcon.vue']
    },
    {
      demoId: 'debounceDelay',
      name: {
        'zh-CN': '防抖'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>debounceDelay</code> 设置防抖时间。'
      },
      codeFiles: ['debounceDelay.vue']
    },
    {
      demoId: 'verticalOffset',
      name: {
        'zh-CN': '垂直偏移量'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>verticalOffset</code> 设置垂直方向偏离距离。'
      },
      codeFiles: ['verticalOffset.vue']
    },
    {
      demoId: 'manual-close',
      name: {
        'zh-CN': '手动关闭通知'
      },
      desc: {
        'zh-CN': `
          通过<code>Notify</code>函数弹出通知后，会返回一个对应的<code>instance</code>对象，并保存在组件库的内部闭包变量中。<br>
          需要手动关闭通知时，可以调用 <code>instance.close()</code> 方法关闭该通知。<br>
          在<code>Notify</code>函数中，还存在 2 个静态方法去关闭通知。<br>
          1、<code>Notify.close :(id, beforeClose)=>void </code>, 关闭指定的通知。其中<code>id</code>可通过<code>instance</code>对象获取。 <br>
          2、<code>Notify.closeAll :()=>void </code>, 关闭所有通知。<br>
        `
      },
      codeFiles: ['manual-close.vue']
    },
    {
      demoId: 'notify-events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<p>\n          <div>可通过 <code>beforeClose</code>  属性设置通知框关闭前的事件。</div>\n          <div>可通过 <code>onClose</code> 属性设置通知点击关闭按钮时触发事件。</div>\n        </p>'
      },
      codeFiles: ['notify-events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 Notify 函数弹出通知框，支持通过 title 设置标题，message 设置内容，支持 jsx 和 h 函数的写法。',
      cloud: {
        value: false
      },
      apis: ['Notify', 'title', 'message'],
      demos: ['basic-usage']
    },
    {
      id: 'type',
      name: '消息类型',
      support: {
        value: true
      },
      description: '通过 type 设置不同的类型，可选值：success、warning、info、error。',
      cloud: {
        value: false
      },
      apis: ['type'],
      demos: ['type']
    },
    {
      id: 'duration',
      name: '自动关闭延时',
      support: {
        value: true
      },
      description: '通过 duration 设置自动关闭的延迟时间，success/info 默认 5 秒，warning/error 默认 10 秒。',
      cloud: {
        value: false
      },
      apis: ['duration'],
      demos: ['duration']
    },
    {
      id: 'position',
      name: '显示位置',
      support: {
        value: true
      },
      description: '通过 position 设置通知框显示位置，默认值：bottom-right。',
      cloud: {
        value: false
      },
      apis: ['position'],
      demos: ['position']
    },
    {
      id: 'show-close',
      name: '关闭按钮',
      support: {
        value: true
      },
      description: '通过 showClose 设置是否显示关闭按钮，默认值：true。',
      cloud: {
        value: false
      },
      apis: ['showClose'],
      demos: ['showClose']
    },
    {
      id: 'show-icon',
      name: '类型图标',
      support: {
        value: true
      },
      description: '通过 showIcon 设置是否显示类型图标，默认值：true。',
      cloud: {
        value: false
      },
      apis: ['showIcon'],
      demos: ['showIcon']
    },
    {
      id: 'close-icon',
      name: '关闭图标',
      support: {
        value: true
      },
      description: '通过 closeIcon 设置通知框关闭图标，默认值：IconClose。',
      cloud: {
        value: false
      },
      apis: ['closeIcon'],
      demos: ['closeIcon']
    },
    {
      id: 'status-icon',
      name: '类型图标',
      support: {
        value: true
      },
      description: '通过 statusIcon 设置通知框类型图标，默认值：IconInfoSolid。',
      cloud: {
        value: false
      },
      apis: ['statusIcon'],
      demos: ['statusIcon']
    },
    {
      id: 'debounce',
      name: '防抖',
      support: {
        value: true
      },
      description: '通过 debounceDelay 设置防抖时间。',
      cloud: {
        value: false
      },
      apis: ['debounceDelay'],
      demos: ['debounceDelay']
    },
    {
      id: 'offset',
      name: '垂直偏移',
      support: {
        value: true
      },
      description: '通过 verticalOffset 设置垂直方向偏离距离。',
      cloud: {
        value: false
      },
      apis: ['verticalOffset'],
      demos: ['verticalOffset']
    },
    {
      id: 'manual-close',
      name: '手动关闭',
      support: {
        value: true
      },
      description: '支持通过 instance.close() 关闭指定通知，Notify.close 关闭指定通知，Notify.closeAll 关闭所有通知。',
      cloud: {
        value: false
      },
      apis: ['close', 'closeAll'],
      demos: ['manual-close']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 beforeClose 设置关闭前事件，onClose 设置点击关闭按钮时触发事件。',
      cloud: {
        value: false
      },
      apis: ['beforeClose', 'onClose'],
      demos: ['notify-events']
    }
  ]
}
