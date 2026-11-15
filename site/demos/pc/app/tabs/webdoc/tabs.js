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
          '<div class="tip custom-block"><code>Tabs</code> ：通过 v-model 设置选中的页签项，对应 TabItem 页签项中 name 属性的值；<br />\n        <code>TabItem</code> ：通过 title 设置页签项标题，name 设置页签项的值，disabled 设置页签项禁用，默认插槽自定义对应的内容。</div>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'tab-style-card',
      name: {
        'zh-CN': 'card 类型'
      },
      desc: {
        'zh-CN':
          '通过 <code>tab-style="card"</code> 设置风格类型为 <code>card</code> ， <code>active-name</code> 设置初始选中的页签项。'
      },
      codeFiles: ['tab-style-card.vue']
    },
    {
      demoId: 'tab-style-bordercard',
      name: {
        'zh-CN': 'bordercard 类型'
      },
      desc: {
        'zh-CN':
          '通过 <code>tab-style="border-card"</code> 设置风格类型为 <code>bordercard</code>， <code>size="small"</code> 设置小尺寸类型。'
      },
      codeFiles: ['tab-style-bordercard.vue']
    },
    {
      demoId: 'tabs-separator',
      name: {
        'zh-CN': '分隔符'
      },
      desc: {
        'zh-CN': '<p>通过 <code>separator</code> 设置分隔符。</p>\n'
      },
      codeFiles: ['tabs-separator.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 改变尺寸。</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'custom-more-icon',
      name: {
        'zh-CN': "定义'更多'按钮"
      },
      desc: {
        'zh-CN':
          '通过 <code>show-more-tabs</code> 设置页签项超出时显示 <code>更多</code> 按钮； <code>moreIcon</code> 插槽自定义 <code>更多</code> 按钮； <code>popper-class</code> 给“更多”下拉框添加自定义类名，可用来自定义样式。'
      },
      codeFiles: ['custom-more-icon.vue']
    },
    {
      demoId: 'with-add',
      name: {
        'zh-CN': '添加功能'
      },
      desc: {
        'zh-CN': '通过 <code>with-add</code> 打开添加按钮，并监听 <code>add</code> 事件自定义实现添加页签项的逻辑。'
      },
      codeFiles: ['with-add.vue']
    },
    {
      demoId: 'tabs-events-close',
      name: {
        'zh-CN': '删除'
      },
      desc: {
        'zh-CN': `通过 <code>with-close</code> 打开关闭按钮，并监听 <code>close</code> 事件自定义实现删除页签项的逻辑。
          <code>beforeClose</code> 设置删除前的操作，返回为 false 则取消删除，反之则执行删除。`
      },
      codeFiles: ['tabs-events-close.vue']
    },
    {
      demoId: 'position',
      name: {
        'zh-CN': '位置'
      },
      desc: {
        'zh-CN':
          '通过 <code>position</code> 设置显示位置，可选值有 <code>top</code> 、 <code>right</code> 、 <code>bottom</code> 、 <code>left</code> ，默认为 <code>top</code> 。'
      },
      codeFiles: ['position.vue']
    },
    {
      demoId: 'tooltip',
      name: {
        'zh-CN': '提示'
      },
      desc: {
        'zh-CN': '通过 <code>tooltip-config</code> 设置 Title 提示。'
      },
      codeFiles: ['tooltip.vue']
    },
    {
      demoId: 'before-leave',
      name: {
        'zh-CN': '阻止切换'
      },
      desc: {
        'zh-CN':
          '通过 <code>before-leave</code> 钩子函数处理切换页签项前的逻辑，若返回是 <code>false</code> 或 <code>Promise.reject</code> ，则阻止切换，返回 true 则可以切换。'
      },
      codeFiles: ['before-leave.vue']
    },
    {
      demoId: 'stretch-wh',
      name: {
        'zh-CN': '自动撑宽'
      },
      desc: {
        'zh-CN': '通过 <code>stretch</code> 设置页签项的宽度是否自撑开，默认为 false。'
      },
      codeFiles: ['stretch-wh.vue']
    },
    {
      demoId: 'more-show-all',
      name: {
        'zh-CN': '超长数据下拉展示'
      },
      desc: {
        'zh-CN':
          '通过 <code>more-show-all</code> 设置下拉面板展示全部页签项，<code>panel-max-height</code> 设置面板最大高度； <code>panel-width</code> 设置面板宽度。'
      },
      codeFiles: ['more-show-all.vue']
    },
    {
      demoId: 'custom-tab-title',
      name: {
        'zh-CN': '定义页签项标题'
      },
      desc: {
        'zh-CN': '通过 <code>TabItem</code> 的 <code>title</code> 插槽自定义页签项标题，比如在标题前增加图标。'
      },
      codeFiles: ['custom-tab-title.vue']
    },
    {
      demoId: 'lazy',
      name: {
        'zh-CN': '懒加载'
      },
      desc: {
        'zh-CN': '通过 <code>lazy</code> 设置页签项内容懒加载，默认值为 <code>false</code> 。'
      },
      codeFiles: ['lazy.vue']
    },
    {
      demoId: 'tabs-second-layer',
      name: {
        'zh-CN': '多层级'
      },
      desc: {
        'zh-CN': '通过嵌套使用即可。'
      },
      codeFiles: ['tabs-second-layer.vue']
    },
    {
      demoId: 'show-different-grid-data',
      name: {
        'zh-CN': '与 Grid 结合'
      },
      desc: {
        'zh-CN': 'Grid 组件需要设置 <code>:auto-resize="true"</code> ，自适应父元素 <code>TabItem</code> 相应变化。'
      },
      codeFiles: ['show-different-grid-data.vue']
    },
    {
      demoId: 'tabs-draggable',
      name: {
        'zh-CN': '拖拽'
      },
      desc: {
        'zh-CN':
          '<div class="tip custom-block"><p><code>drop-config</code> 设置 <code>Sortable</code> 排序插件；<br/>\n          <code>tab-drag-start</code> 监听拖拽开始事件；<br/>\n          <code>tab-drag-over</code> 监听拖拽中事件；<br/>\n          <code>tab-drag-end</code> 监听拖拽结束事件，以此改变页签项顺序。</p></div>'
      },
      codeFiles: ['tabs-draggable.vue']
    },
    {
      demoId: 'tabs-events-click',
      name: {
        'zh-CN': '点击事件'
      },
      desc: {
        'zh-CN': '通过 <code>click</code> 监听单击页签项事件。'
      },
      codeFiles: ['tabs-events-click.vue']
    },
    {
      demoId: 'tabs-events-edit',
      name: {
        'zh-CN': '编辑事件'
      },
      desc: {
        'zh-CN':
          '通过 <code>editable</code> 设置同时显示 <code>删除</code> 和 <code>添加</code> 按钮， <code>edit</code> 监听这两类按钮的点击事件。'
      },
      codeFiles: ['tabs-events-edit.vue']
    },
    {
      demoId: 'overflow-title',
      name: {
        'zh-CN': '超出显示 tooltip'
      },
      desc: {
        'zh-CN':
          '通过 <code>overflow-title</code> 设置标题超出一定长度（默认 256px）时隐藏并显示...，鼠标移到标题上可显示 tooltip，<code>title-width</code>设置标题超出的长度。'
      },
      codeFiles: ['overflow-title.vue']
    },
    {
      demoId: 'header-only',
      name: {
        'zh-CN': '仅展示头部'
      },
      desc: {
        'zh-CN': '通过 <code>header-only</code> 仅展示头部。'
      },
      codeFiles: ['header-only.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 v-model 设置选中的页签项，对应 TabItem 页签项中 name 属性的值。',
      cloud: {
        value: true
      },
      apis: ['v-model'],
      demos: ['basic-usage']
    },
    {
      id: 'style',
      name: '风格类型',
      support: {
        value: true
      },
      description: '通过 tab-style 设置风格类型，可选值有 card、bordercard。',
      cloud: {
        value: true
      },
      apis: ['tab-style'],
      demos: ['tab-style-card', 'tab-style-bordercard']
    },
    {
      id: 'position',
      name: '显示位置',
      support: {
        value: true
      },
      description: '通过 position 设置显示位置，可选值有 top、right、bottom、left。',
      cloud: {
        value: true
      },
      apis: ['position'],
      demos: ['position']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 改变尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    }
  ]
}
