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
          <code>Modal</code> 组件有 2 种调用方法：<code>函数式调用</code>和<code>标签式调用</code>。 <br>
          <div class="tip custom-block">
            <p class="custom-block-title"> 函数式调用 </p>
            通过调用<code>Modal</code>对象下的 <code>alert</code>、<code>confirm</code>、<code>message</code>方法调用弹窗组件。 <br>
            函数入参：支持<code>(message:string, title:string, options: Object)</code> 或  <code>(options: Object) </code>两种形式。
                     其中 <code>options</code> 对象支持<code>Modal</code> 组件的部分属性值，比如 <code>message, title, status</code> 等。 <br>
            函数返回：返回值为一个<code>Promise</code>对象，其中属性<code>vm</code>可用来关闭当前模态框<br>
          </div>
          <div class="tip custom-block">
            <p class="custom-block-title"> 标签式调用 </p>
            <code>Modal</code> 对象自身也是一个标准的 Vue 组件，通过<code>modelValue</code> 属性控制弹窗的显示和隐藏。
          </div>
          <div class="warning custom-block">
            <p class="custom-block-title"> 特别提示： </p>
            1、<code>message</code> 的消息模式，只支持函数式调用。<br>
            2、消息模式和模态窗模式很多属性不共用，比如消息模式就不支持<code>title</code> 等属性。
          </div>
          `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '状态和图标'
      },
      desc: {
        'zh-CN':
          '通过<code>status</code>属性设置组件状态，可选值有<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>loading</code>，每种状态有相应的状态图标。'
      },
      codeFiles: ['status.vue']
    },
    {
      demoId: 'before-close',
      name: {
        'zh-CN': '关闭前的回调'
      },
      desc: {
        'zh-CN':
          '通过<code>before-close</code>属性设置关闭前的回调函数（仅点击关闭按钮或遮罩区域时被调用），函数入参有<code>type</code>弹窗类型、<code>instance</code>弹窗实例、<code>done</code>回调函数。'
      },
      codeFiles: ['before-close.vue']
    },
    {
      demoId: 'modal-header',
      name: {
        'zh-CN': '自定义弹窗标题'
      },
      desc: {
        'zh-CN': `
          通过<code>show-header</code>属性，设置是否显示头部。默认值为：<code>true</code>。<br>
          通过<code>header-dragable</code>属性，设置是否可以通过标题拖动弹窗。默认值为：<code>true</code>。<br>
          通过<code>title</code>属性，设置窗口的标题。<br>
        `
      },
      codeFiles: ['modal-header.vue']
    },
    {
      demoId: 'modal-footer',
      name: {
        'zh-CN': '自定义弹窗底部'
      },
      desc: {
        'zh-CN': `
          通过<code>show-footer</code>属性，设置是否显示底部。默认值为：<code>false</code>。<br>
          通过<code>footer-dragable</code>属性，让底部也支持拖动（默认只有标题栏可拖动）。默认值为：<code>false</code>。<br>
          通过<code>confirm-content</code>属性，修改确认按钮文字；通过<code>cancel-content</code>属性，修改取消按钮文字。<br>
          通过<code>confirm-btn-props</code>属性，修改确认按钮的属性；通过<code>cancel-btn-props</code>属性，修改取消按钮的属性。<br>
          通过<code>#footer</code>插槽，完全自定义底部内容。<br>
        `
      },
      codeFiles: ['modal-footer.vue']
    },

    {
      demoId: 'modal-size',
      name: {
        'zh-CN': '弹窗大小/全屏'
      },
      desc: {
        'zh-CN': `
          通过<code>width</code>属性，设置初始宽度，<code>height</code>属性设置初始高度，<br>
          通过<code>fullscreen</code>属性，设置是否最大化显示。默认值为：<code>false</code> 
        `
      },
      codeFiles: ['modal-size.vue']
    },
    {
      demoId: 'modal-resize',
      name: {
        'zh-CN': '弹窗调整大小'
      },
      desc: {
        'zh-CN': `
          通过<code>resize</code>属性，设置是否允许拖动边框调整窗口大小，并且右上角显示切换最大化的按钮。<br>
          当 <code>resize</code>属性设置为<code>true</code>后，通过 <code>min-height</code>属性设置拖拽后窗口的最小高度，默认值为 200.<br>
          <code>min-width</code>属性设置拖拽后窗口的最小宽度，默认值为 340。<br>
        `
      },
      codeFiles: ['modal-resize.vue']
    },
    {
      demoId: 'modal-mask',
      name: {
        'zh-CN': '弹窗的遮罩层'
      },
      desc: {
        'zh-CN': `
          通过<code>mask</code>属性，设置是否显示遮罩层。默认值为<code>true</code>  <br>
          通过<code>mask-closable</code>属性，设置是否允许点击遮罩层关闭窗口。默认值为<code>false</code><br>
        `
      },
      codeFiles: ['modal-mask.vue']
    },
    {
      demoId: 'modal-lock',
      name: {
        'zh-CN': '弹窗的锁定'
      },
      desc: {
        'zh-CN': `
          通过<code>lock-scroll</code>属性，设置是否锁住滚动条，不允许页面滚动。默认值为<code>false</code><br>
          通过<code>lock-view</code>属性，设置是否锁住页面，不允许窗口之外的任何操作。默认值为<code>true</code><br>
          <div class="tip custom-block">
            <code>锁住滚动条</code> 是指锁定<code>body</code>元素上的滚动条，仅当<code>body</code>有滚动条时，才有效果。<br>
            <code>锁住页面</code> 是指鼠标不能操作蒙层下面的元素。<br>
          </div>
        `
      },
      codeFiles: ['modal-lock.vue']
    },

    {
      demoId: 'modal-other',
      name: {
        'zh-CN': '弹窗的其它特性'
      },
      desc: {
        'zh-CN': `
          通过<code>esc-closable</code>属性设置是否允许按 Esc 键关闭窗口。默认值为<code>false</code><br>
          通过<code>z-index</code>属性设置自定义堆叠顺序。<br>
          通过<code>show-close</code>属性设置自定义是否显示关闭按钮。默认值为<code>true</code><br>
          通过<code>is-form-reset</code>属性，设置关闭弹窗后，是否重置数据。默认值为<code>true</code>,即关闭弹窗后重置数据。<br>
        `
      },
      codeFiles: ['modal-other.vue']
    },
    {
      demoId: 'modal-event',
      name: {
        'zh-CN': '弹窗的事件'
      },
      desc: {
        'zh-CN': `
          当窗口显示时，会触发<code>show</code>事件<br />
          当窗口关闭时，会触发<code>hide</code>事件<br />
          当点击确定按钮时，会触发<code>confirm</code>事件<br />
          当点击取消按钮时，会触发<code>cancel</code>事件<br />
          当点击关闭按钮时，会触发<code>close</code>事件<br /> 
          当窗口缩放时，会触发<code>zoom</code>事件<br />
          <div class="tip custom-block">
            1、<code>type = 'alert' </code>时，没有<code>cancel</code>事件<br />
            2、函数式调用时，不触发<code>close</code>事件<br />
          </div>
          `
      },
      codeFiles: ['modal-event.vue']
    },
    {
      demoId: 'modal-fn-slots',
      name: {
        'zh-CN': '弹窗的插槽'
      },
      desc: {
        'zh-CN': `
          弹窗模式具有 <code> #default </code>,<code> #footer </code>插槽，标签式时，使用标准的 Vue 插槽语法即可。<br /> 
          在函数式使用时，通过<code>slots</code>属性，传入相应的插槽。<code> #footer </code>插槽的作用域上下文变量有： <code> {$modal, beforeClose,confirm,cancel} </code> 可使用。 <br /> 
          <div class="tip custom-block">
            函数式传入插槽时，由于<code>Modal</code>组件是直接挂载到<code>body</code>上，不是在<code>Demo</code>组件内部渲染的，所以<code>jsx</code>引用组件时，要使用引用组件的变量，而不能使用<code>Demo</code>中注册的组件名。详见示例代码
          </div>
        `
      },
      codeFiles: ['modal-fn-slots.vue']
    },
    {
      demoId: 'message-close',
      name: {
        'zh-CN': '消息的关闭和延时'
      },
      desc: {
        'zh-CN': `
          通过<code>message-closable</code>属性设置消息可手动关闭。默认值为<code>false</code><br>
          通过<code>duration</code>属性设置自动关闭的延迟时间，单位为毫秒。默认值为<code>3000 ms</code><br>
        `
      },
      codeFiles: ['message-close.vue']
    },
    {
      demoId: 'message-top',
      name: {
        'zh-CN': '消息距离顶部位置'
      },
      desc: {
        'zh-CN': '通过<code>top</code>属性设置消息距离顶部的位置，单位为 px'
      },
      codeFiles: ['message-top.vue']
    },

    {
      demoId: 'message-id',
      name: {
        'zh-CN': '防止重复消息提示'
      },
      desc: {
        'zh-CN': '通过<code>id</code>设置防止重复提示。'
      },
      codeFiles: ['message-id.vue']
    },
    {
      demoId: 'message-event',
      name: {
        'zh-CN': '消息的事件'
      },
      desc: {
        'zh-CN': `
          当窗口显示时，会触发<code>show</code>事件<br />
          当窗口关闭时，会触发<code>hide</code>事件<br />
        `
      },
      codeFiles: ['message-event.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 v-model 控制弹窗显示，title 设置标题，content 设置内容。',
      cloud: {
        value: true
      },
      apis: ['v-model', 'title', 'content'],
      demos: ['basic-usage']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 设置弹窗大小，可选值：large、medium、small、mini。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'custom',
      name: '自定义内容',
      support: {
        value: true
      },
      description: '通过 default 插槽自定义弹窗内容。',
      cloud: {
        value: true
      },
      apis: ['slot-default'],
      demos: ['custom-content']
    },
    {
      id: 'header',
      name: '自定义头部',
      support: {
        value: true
      },
      description: '通过 header 插槽自定义弹窗头部。',
      cloud: {
        value: true
      },
      apis: ['slot-header'],
      demos: ['custom-header']
    },
    {
      id: 'footer',
      name: '自定义底部',
      support: {
        value: true
      },
      description: '通过 footer 插槽自定义弹窗底部。',
      cloud: {
        value: true
      },
      apis: ['slot-footer'],
      demos: ['custom-footer']
    },
    {
      id: 'close',
      name: '关闭按钮',
      support: {
        value: true
      },
      description: '通过 show-close 设置是否显示关闭按钮，close-on-click-modal 设置点击遮罩层是否关闭。',
      cloud: {
        value: true
      },
      apis: ['show-close', 'close-on-click-modal'],
      demos: ['close']
    },
    {
      id: 'fullscreen',
      name: '全屏',
      support: {
        value: true
      },
      description: '通过 fullscreen 设置是否全屏显示。',
      cloud: {
        value: true
      },
      apis: ['fullscreen'],
      demos: ['fullscreen']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 open、close、confirm、cancel 等事件。',
      cloud: {
        value: true
      },
      apis: ['open', 'close', 'confirm', 'cancel'],
      demos: ['events']
    }
  ]
}
