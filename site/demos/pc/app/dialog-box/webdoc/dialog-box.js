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
        'zh-CN': '可通过<code>visible</code>属性设置控制弹窗显示。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'secondary-dialog',
      name: {
        'zh-CN': '二级弹窗'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>#default</code>默认插槽和底部操作区按钮设置实现二级弹窗。设置<code>append-to-body</code>属性后，二级弹窗的实体<code>DOM</code>结构将追加到<code>body</code>元素上。</p>\n'
      },
      codeFiles: ['secondary-dialog.vue']
    },
    {
      demoId: 'custom-dialog-title',
      name: {
        'zh-CN': '自定义标题'
      },
      desc: {
        'zh-CN': '<p>可通过<code>title</code> 或者<code>#title</code>插槽设置弹窗标题内容。</p>\n'
      },
      codeFiles: ['custom-dialog-title.vue']
    },
    {
      demoId: 'custom-dialog-content',
      name: {
        'zh-CN': '自定义内容'
      },
      desc: {
        'zh-CN': '<p>可通过<code>#default</code>默认插槽设置自定义弹窗主体部分的内容。</p>\n'
      },
      codeFiles: ['custom-dialog-content.vue']
    },
    {
      demoId: 'custom-dialog-footer',
      name: {
        'zh-CN': '自定义底部'
      },
      desc: {
        'zh-CN': '<p>可通过<code>#footer</code> 插槽设置自定义弹窗底部操作区内容。</p>\n'
      },
      codeFiles: ['custom-dialog-footer.vue']
    },
    {
      demoId: 'hidden-close-buttons',
      name: {
        'zh-CN': '隐藏关闭按钮'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>show-close</code>属性设置<code>false</code>后，隐藏关闭图标，默认弹窗右上角显示关闭图标。底部<code>click</code>按钮事件可切换<code>visible</code>属性值设置弹窗显示。</p>\n'
      },
      codeFiles: ['hidden-close-buttons.vue']
    },
    {
      demoId: 'close-on-press-escape',
      name: {
        'zh-CN': '禁用 ESC 关闭'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>close-on-press-escape</code>属性设置<code>false</code>后可禁用按下<code>Esc</code>键关闭弹窗。</p>\n'
      },
      codeFiles: ['close-on-press-escape.vue']
    },
    {
      demoId: 'dialog-top-height',
      name: {
        'zh-CN': '弹窗距离顶部的高度'
      },
      desc: {
        'zh-CN': '<p>可通过<code>top</code>属性设置指定弹窗距离窗口顶部的高度，默认为屏高的 15% 。</p>\n'
      },
      codeFiles: ['dialog-top-height.vue']
    },
    {
      demoId: 'dialog-width',
      name: {
        'zh-CN': '弹窗的宽度和最大高度'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>width</code>属性设置指定弹窗的宽度，<code>max-height</code>属性设置窗口最大高度。</p>\n'
      },
      codeFiles: ['dialog-width.vue']
    },
    {
      demoId: 'close-on-click-modal',
      name: {
        'zh-CN': '点击遮罩时不关闭弹窗'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>close-on-click-modal</code>属性设置<code>false</code>后可禁用单击遮罩层关闭弹窗。</p>\n'
      },
      codeFiles: ['close-on-click-modal.vue']
    },
    {
      demoId: 'no-modal',
      name: {
        'zh-CN': '不启用遮罩层'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>modal</code>属性设置<code>false</code>不启用遮罩层。无遮罩层时，单击弹窗外部区域仍然可以关闭弹窗。</p>\n'
      },
      codeFiles: ['no-modal.vue']
    },
    {
      demoId: 'right-dialog',
      name: {
        'zh-CN': '右侧弹窗'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>right-slide</code>属性为设置<code>true</code>，弹窗将从窗口右侧弹出。<code>modal-append-to-body</code> 属性默认<code>true</code>遮罩层应用在<code>body</code>。</p>\n'
      },
      codeFiles: ['right-dialog.vue']
    },
    {
      demoId: 'double-dialog-height',
      name: {
        'zh-CN': '右侧双层弹框'
      },
      desc: {
        'zh-CN': '右侧弹窗分两种情况，父级弹框自动缩进，子级弹框高度撑满。父级弹框不缩进，子级弹框高度自适应。'
      },
      codeFiles: ['double-dialog-height.vue']
    },
    {
      demoId: 'hidden-header',
      name: {
        'zh-CN': '隐藏标题区域'
      },
      desc: {
        'zh-CN': '<p>可通过<code>show-header</code>属性设置<code>false</code>，将隐藏标题区域。</p>\n'
      },
      codeFiles: ['hidden-header.vue']
    },
    {
      demoId: 'lock-scroll',
      name: {
        'zh-CN': '弹出时禁用滚动'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>lock-scroll</code>属性设置<code>true</code>,允许滚动遮罩内容，禁止滚动背景内容，单击遮罩层可关闭弹窗。设置<code>lock-scroll</code>为<code>false</code>,允许滚动遮罩内容、背景内容。</p>\n'
      },
      codeFiles: ['lock-scroll.vue']
    },
    {
      demoId: 'center',
      name: {
        'zh-CN': '头部和底部水平居中'
      },
      desc: {
        'zh-CN': '<p>可通过<code>center</code>属性设置<code>true</code>头部标题居中显示。(默认显示在区域左侧)</p>\n'
      },
      codeFiles: ['center.vue']
    },
    {
      demoId: 'draggable',
      name: {
        'zh-CN': '可拖拽的弹窗'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>draggable</code>属性设置<code>true</code>，鼠标点击标题区域拖拽；通过<code>drag-outside-window</code>属性设置<code>true</code>，将弹窗拖出窗口。具体事件：<code>@drag-start</code><code>@drag-move</code><code>@drag-end</code>。</p>\n'
      },
      codeFiles: ['draggable.vue']
    },
    {
      demoId: 'fullscreen',
      name: {
        'zh-CN': '全屏弹窗'
      },
      desc: {
        'zh-CN': `
          可通过<code>fullscreen</code>属性设置弹窗是否为全屏状态，默认值 为 <code>false</code>。<br>
          可通过<code>resize</code>属性设置弹窗是否有切换全屏的功能，默认值 为 <code>false</code>。<br>
          可通过<code>resize</code>事件，监听弹窗切换全屏的事件。<br>
          `
      },
      codeFiles: ['fullscreen.vue']
    },
    {
      demoId: 'form-in-dialog',
      name: {
        'zh-CN': '弹窗表单'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>is-form-reset</code>属性设置<code>false</code>,关闭弹窗不重置数据，<code>resize</code>属性设置窗口最大化。</p>'
      },
      codeFiles: ['form-in-dialog.vue']
    },
    {
      demoId: 'destroy-on-close',
      name: {
        'zh-CN': '关闭时销毁主体元素'
      },
      desc: {
        'zh-CN':
          '<p>可通过<code>destroy-on-close</code>属性设置<code>true</code>在关闭弹窗时销毁<code>Dialog-box</code>对话框内的所有元素，默认值为<code>false</code>。</p>'
      },
      codeFiles: ['destroy-on-close.vue']
    },
    {
      demoId: 'open-close-events',
      name: {
        'zh-CN': '弹出与关闭事件'
      },
      desc: {
        'zh-CN':
          '<p>可通过设置事件<code>@open</code>：对话框打开时触发，<code>@opened</code>：对话框打开动画结束时触发，<code>@close</code>：对话框关闭时触发，<code>@closed</code>：对话框关闭动画结束时触发。</p>\n'
      },
      codeFiles: ['open-close-events.vue']
    },
    {
      demoId: 'before-close',
      name: {
        'zh-CN': '关闭前拦截'
      },
      desc: {
        'zh-CN': `
          可通过设置属性<code>before-close</code>,设置对话框关闭前时触发的拦截函数。
          也可以通过绑定事件<code>before-close</code>,但它们的用法有细微差异，详见下面示例`
      },
      codeFiles: ['before-close.vue']
    },
    {
      demoId: 'transition-effect',
      name: {
        'zh-CN': '启用弹出动效'
      },
      desc: {
        'zh-CN':
          '<p>可通过配置 <code>dialog-transition</code> 属性为 <code>enlarge</code>，可启用 <code>DialogBox</code> 打开时逐渐放大的动效。</p>'
      },
      codeFiles: ['transition-effect.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '支持基本的弹窗显示和隐藏功能。',
      cloud: {
        value: true
      },
      apis: ['visible'],
      demos: ['basic-usage']
    },
    {
      id: 'customization',
      name: '自定义内容',
      support: {
        value: true
      },
      description: '支持自定义标题、内容区域和底部操作区。',
      cloud: {
        value: true
      },
      apis: ['title', 'default', 'footer'],
      demos: ['custom-dialog-title', 'custom-dialog-content', 'custom-dialog-footer']
    },
    {
      id: 'position',
      name: '位置控制',
      support: {
        value: true
      },
      description: '支持控制弹窗位置，包括距离顶部高度、宽度和最大高度。',
      cloud: {
        value: true
      },
      apis: ['top', 'width', 'max-height'],
      demos: ['dialog-top-height', 'dialog-width']
    },
    {
      id: 'interaction',
      name: '交互控制',
      support: {
        value: true
      },
      description: '支持多种交互控制，如点击遮罩关闭、ESC关闭、拖拽等。',
      cloud: {
        value: true
      },
      apis: ['close-on-click-modal', 'close-on-press-escape', 'draggable'],
      demos: ['close-on-click-modal', 'close-on-press-escape', 'draggable']
    },
    {
      id: 'fullscreen',
      name: '全屏模式',
      support: {
        value: true
      },
      description: '支持全屏显示和切换全屏功能。',
      cloud: {
        value: true
      },
      apis: ['fullscreen', 'resize'],
      demos: ['fullscreen']
    }
  ]
}
