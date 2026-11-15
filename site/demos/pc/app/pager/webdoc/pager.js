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
        'zh-CN': '<p>通过 <code>total</code> 设置总条数。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'current-page',
      name: {
        'zh-CN': '当前所在页'
      },
      desc: {
        'zh-CN': '<p>通过 <code>current-page</code> 设置初始加载页码数。</p>\n'
      },
      codeFiles: ['current-page.vue']
    },
    {
      demoId: 'page-size',
      name: {
        'zh-CN': '每页显示数量'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>page-size</code> 设置每页显示条目数， <code>page-sizes</code> 设置可选择的 <code>page-size</code> 列表。</p>\n'
      },
      codeFiles: ['page-size.vue']
    },
    {
      demoId: 'align',
      name: {
        'zh-CN': '对齐方式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>align</code> 设置对齐方式。</p>\n'
      },
      codeFiles: ['align.vue']
    },
    {
      demoId: 'disabled-and-size',
      name: {
        'zh-CN': '禁用和尺寸'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置分页禁用，通过 <code>size</code> 设置分页尺寸。</p>\n'
      },
      codeFiles: ['disabled-and-size.vue']
    },
    {
      demoId: 'custom-layout',
      name: {
        'zh-CN': '自定义布局和插槽'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>layout</code> 设置分页想要显示的子组件和顺序，子组件间用 <code>,</code> 分隔，子组件有 <code>total</code> 总条数、 <code>sizes</code> 分页大小、 <code>prev</code> 上一页、 <code>pager</code> 页码、 <code>next</code> 下一页、 <code>slot</code> 默认插槽、 <code>jumper</code> 页跳转、 <code>current</code> 当前页。</p>\n'
      },
      codeFiles: ['custom-layout.vue']
    },
    {
      demoId: 'pager-mode',
      name: {
        'zh-CN': '分页模式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>mode</code> 设置分页组件组件渲染模式，不同模式是组件内置的 <code>layout</code> 设置， <code>mode</code> 优先级高于 <code>layout</code> 。</p>\n'
      },
      codeFiles: ['pager-mode.vue']
    },
    {
      demoId: 'page-count',
      name: {
        'zh-CN': '总页数'
      },
      desc: {
        'zh-CN': '<p>通过 <code>page-count</code> 设置总页数。</p>\n'
      },
      codeFiles: ['page-count.vue']
    },
    {
      demoId: 'popper-append-to-body',
      name: {
        'zh-CN': '分页下拉框显示位置'
      },
      desc: {
        'zh-CN': '<p>通过 <code>popper-append-to-body</code> 设置分页下拉框元素是否追加到 body 元素节点下。</p>'
      },
      codeFiles: ['popper-append-to-body.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '自定义分页下拉框的类名'
      },
      desc: {
        'zh-CN': '<p>通过 <code>popper-class</code> 添加自定义分页下拉框的类名。</p>'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'custom-total',
      name: {
        'zh-CN': '自定义总条数'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>custom-total</code> 设置分页总条数显示文本。传值为文本则显示传入的文本，传值为 <code>true</code> 时，<code>0 ～ 99999</code> 显示具体数值， <code>100000 ～ 999999</code> 显示 <code>10 万+</code> 。<code>1000000 ～ 9999999</code> 显示 <code>100 万+</code> 。超过 <code>10000000</code> 显示 <code>1 千万+</code></p>'
      },
      codeFiles: ['custom-total.vue']
    },
    {
      demoId: 'show-total-loading',
      name: {
        'zh-CN': '总条数加载中'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-total-loading</code> 设置总条数是否加载中。</p>'
      },
      codeFiles: ['show-total-loading.vue']
    },
    {
      demoId: 'pager-count',
      name: {
        'zh-CN': '页码按钮数量'
      },
      desc: {
        'zh-CN': '<p>通过 <code>pager-count</code> 设置页码数量。</p>\n'
      },
      codeFiles: ['pager-count.vue']
    },
    {
      demoId: 'hide-on-single-page',
      name: {
        'zh-CN': '单页时隐藏'
      },
      desc: {
        'zh-CN': '<p>通过 <code>hide-on-single-page</code> 设置当仅有一页时是否隐藏分页组件。</p>\n'
      },
      codeFiles: ['hide-on-single-page.vue']
    },
    {
      demoId: 'custom-next-prev-text',
      name: {
        'zh-CN': '自定义上下页按钮文本'
      },
      desc: {
        'zh-CN': '<p>通过 <code>prev-text</code> , <code>next-text</code> 自定义上下页按钮文本。</p>\n'
      },
      codeFiles: ['custom-next-prev-text.vue']
    },
    {
      demoId: 'pager-in-grid',
      name: {
        'zh-CN': '表格分页'
      },
      desc: {
        'zh-CN':
          '<p>Grid 表格使用分页组件，该示例中的 <code>services/getGridMockData</code> 服务需要自行实现，示例模拟了远程服务返回的数据。</p>\n'
      },
      codeFiles: ['pager-in-grid.vue']
    },
    {
      demoId: 'before-page-change',
      name: {
        'zh-CN': '分页变更前置处理'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>is-before-page-change</code> 开启前置处理特性，翻页或者改变页大小时会触发 <code>before-page-change</code> 事件。调用传参中的 <code>callback</code> 继续变更，调用 <code>rollback</code> 中止变更。</p>\n'
      },
      codeFiles: ['before-page-change.vue']
    },
    {
      demoId: 'pager-event',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': `
        <p> 
          当前所在页改变后会触发 <code>current-change</code> 事件。<br />
          每页展示条目数改变后会触发 <code>size-change</code> 事件。<br />
          点击上一页按钮改变当前页后触发 <code>prev-click</code> 事件、下一页触发 <code>next-click</code> 事件。<br />
          当在最后一页切换每页条目数时会同时触发 <code>current-change</code> 、<code>size-change</code> 两个事件，如果两个事件调用同一函数（比如后台拉取数据），则需要则做防抖处理。<br />
          默认情况下，当手动改变 <code>current-page</code> 或 <code>page-size</code> 的值时，不会触发对应的change事件，设置 <code>change-compat</code> 为 <code>true</code> 以触发对应事件。
        </p>`
      },
      codeFiles: ['pager-event.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 total 设置总条数，current-page 设置当前页码。',
      cloud: {
        value: true
      },
      apis: ['total', 'current-page'],
      demos: ['basic-usage']
    },
    {
      id: 'page-size',
      name: '每页显示数量',
      support: {
        value: true
      },
      description: '通过 page-size 设置每页显示条目数，page-sizes 设置可选择的 page-size 列表。',
      cloud: {
        value: true
      },
      apis: ['page-size', 'page-sizes'],
      demos: ['page-size']
    },
    {
      id: 'layout',
      name: '自定义布局',
      support: {
        value: true
      },
      description:
        '通过 layout 设置分页想要显示的子组件和顺序，支持 total、sizes、prev、pager、next、slot、jumper、current 等组件。',
      cloud: {
        value: true
      },
      apis: ['layout'],
      demos: ['custom-layout']
    },
    {
      id: 'mode',
      name: '分页模式',
      support: {
        value: true
      },
      description: '通过 mode 设置分页组件渲染模式，不同模式是组件内置的 layout 设置。',
      cloud: {
        value: true
      },
      apis: ['mode'],
      demos: ['pager-mode']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置分页禁用，通过 size 设置分页尺寸。',
      cloud: {
        value: true
      },
      apis: ['disabled', 'size'],
      demos: ['disabled-and-size']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description:
        '支持 current-change、size-change、prev-click、next-click 等事件，change-compat 控制 change 事件的触发时机。',
      cloud: {
        value: true
      },
      apis: ['current-change', 'size-change', 'prev-click', 'next-click', 'change-compat'],
      demos: ['pager-event']
    },
    {
      id: 'before-change',
      name: '分页变更前置处理',
      support: {
        value: true
      },
      description: '通过 is-before-page-change 开启前置处理特性，翻页或者改变页大小时会触发 before-page-change 事件。',
      cloud: {
        value: true
      },
      apis: ['is-before-page-change', 'before-page-change'],
      demos: ['before-page-change']
    },
    {
      id: 'custom',
      name: '自定义配置',
      support: {
        value: true
      },
      description: '支持自定义总条数显示、页码按钮数量、上下页按钮文本、单页隐藏等功能。',
      cloud: {
        value: true
      },
      apis: ['custom-total', 'pager-count', 'prev-text', 'next-text', 'hide-on-single-page'],
      demos: ['custom-total', 'pager-count', 'custom-next-prev-text', 'hide-on-single-page']
    }
  ]
}
