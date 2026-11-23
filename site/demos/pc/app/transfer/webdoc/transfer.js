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
          通过 <code>data</code> 属性提供左右列表全量的数据源，其是一个数组，每个数据项中默认字段有 <code>key</code>、<code>label</code>、<code>disabled</code>。<br>
          通过 <code>value</code> 属性指定右列表值的数组，其选择项只展示在右侧列表。
          `
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'custom-titles',
      name: {
        'zh-CN': '自定义列表标题区'
      },
      desc: {
        'zh-CN': `
          通过 <code>titles</code> 属性，可对左右列表的标题进行自定义。<br>
          通过 <code>format</code> 属性，可定制左右侧列表顶部的数据统计的显示格式，请参考下面示例。
          `
      },
      codeFiles: ['custom-titles.vue']
    },
    {
      demoId: 'custom-btns',
      name: {
        'zh-CN': '自定义按钮区'
      },
      desc: {
        'zh-CN': `
          按钮区包含默认转移按钮和全部转移按钮。按钮的高亮与禁用，组件内部会自动识别处理。<br>
          通过 <code>show-all-btn</code> 属性设置展示全部转移按钮，属性默认值为<code>false</code>。<br>
          通过 <code>button-texts</code> 属性自定义左右穿梭的默认转移按钮文本，接受包含 2 个字符串的数组值。全部转移按钮不能自定义文本。<br>
          你可以通过<code>to-left-disable</code> 和 <code>to-right-disable</code> 属性来指定默认转移按钮没有选中项时的状态。
          `
      },
      codeFiles: ['custom-btns.vue']
    },
    {
      demoId: 'custom-footer',
      name: {
        'zh-CN': '自定义列表底部'
      },
      desc: {
        'zh-CN': '通过 <code>left-footer</code> 、 <code>right-footer</code> 插槽可分别对左右列表底部进行自定义。\n'
      },
      codeFiles: ['custom-footer.vue']
    },
    {
      demoId: 'custom-render',
      name: {
        'zh-CN': '自定义数据项显示'
      },
      desc: {
        'zh-CN': `
          通过 <code> props </code> 属性，可以指定<code> key / label /disabled </code>的映射列，以支持用户传入非标准格式的数据到<code>data</code>属性。<br>
          通过 <code> default </code> 插槽，自定义数据项渲染的 dom 结构，推荐使用插槽的方式。<br>
          通过 <code> render-content </code> 属性函数，使用 JSX 功能，去自定义数据项渲染的 dom 结构。<br>
          <div class="tip custom-block">
            <p class="custom-block-title">如果数据格式不是标准属性格式，则一定要通过<code>props</code>做属性映射！</p>
          </div>
          `
      },
      codeFiles: ['custom-render.vue']
    },
    {
      demoId: 'custom-size',
      name: {
        'zh-CN': '自定义面板大小'
      },
      desc: {
        'zh-CN': `
          通过 <code> panelStyle </code> 属性，可以指定左右面板容器的样式。当面板的宽度大于外部容器的50%宽度时，面板会自适应容器的宽度。<br>
          通过 <code> panelBodyStyle </code> 属性，可以指定面板内容区域的样式。<br>
          `
      },
      codeFiles: ['custom-size.vue']
    },
    {
      demoId: 'custom-filter',
      name: {
        'zh-CN': '过滤搜索'
      },
      desc: {
        'zh-CN': `
          组件支持显示一个输入框，去过滤显示在左右列表的数据项。<br>
          通过 <code>filterable</code> 属性开启左右侧列表的搜索功能，默认是根据 label 内容过滤。<br>
          通过 <code>filter-placeholder</code> 属性自定义左右搜索框占位符。<br>
          通过 <code>filter-method</code> 钩子函数，可自定义左右列表搜索的方法。<br>
          调用 <code>clearQuery()</code> 方法，可清空左右侧列表的搜索框，参数为 left 或者 right。<br>
          `
      },
      codeFiles: ['custom-filter.vue']
    },
    {
      demoId: 'default-checked',
      name: {
        'zh-CN': '默认勾选项'
      },
      desc: {
        'zh-CN': `
          通过 <code>left-default-checked</code>、<code>right-default-checked</code> 属性分别指定左右侧列表默认的勾选数据。禁用数据项默认无法勾选。<br>
          通过组件实例上的<code>state</code>属性，可以查询组件当前左右列表的数据项和数据选中项等信息。
          `
      },
      codeFiles: ['default-checked.vue']
    },
    {
      demoId: 'drop-config',
      name: {
        'zh-CN': '可拖拽'
      },
      desc: {
        'zh-CN': `
          <div class="tip custom-block">
            <p class="custom-block-title">使用拖拽功能时请先安装 sortablejs 插件</p>
          </div>
          通过 <code>drop-config</code> 属性配置 sortablejs 插件进行左右拖拽穿梭。`
      },
      codeFiles: ['drop-config.vue']
    },
    {
      demoId: 'target-order',
      name: {
        'zh-CN': '右侧排序策略'
      },
      desc: {
        'zh-CN': `
        通过 <code>target-order</code> 属性设置右侧列表元素的排序策略，有 original、push、unshift 三个选项，默认为 original。
          <div class="tip custom-block">
            <p class="custom-block-title">排序策略</p>
            <div>
              若为 original，则保持与数据源相同的顺序；<br>若为 push，则新加入的元素排在最后；<br>若为 unshift，则新加入的元素排在最前
            </div>
          </div>`
      },
      codeFiles: ['target-order.vue']
    },
    {
      demoId: 'before-transfer',
      name: {
        'zh-CN': '穿梭拦截'
      },
      desc: {
        'zh-CN': `
          调用 <code>before-transfer</code> 属性，接受一个函数来拦截穿梭的动作。 <br>
          该函数参数为一个回调函数，执行回调函数，数据项才允许穿梭。
          `
      },
      codeFiles: ['before-transfer.vue']
    },
    {
      demoId: 'nested-tree',
      name: {
        'zh-CN': '嵌套树'
      },
      desc: {
        'zh-CN':
          '当 <code>render</code> 属性里的 <code>plugin</code> 设置为 <code>Tree</code> 时指定穿梭框渲染成树，通过 <code>treeConfig</code> 属性配置树相关的配置（具体配置可参考 <code>tree</code> 组件的配置）。'
      },
      codeFiles: ['nested-tree.vue']
    },
    {
      demoId: 'transfer-events',
      name: {
        'zh-CN': '穿梭框事件'
      },
      desc: {
        'zh-CN': `
          主要有 <code>change</code>、<code>left-check-change</code>、<code>right-check-change</code> 三个事件。
          <div class="tip custom-block">
            <p class="custom-block-title">事件说明</p>
            <div>
              change：右侧列表元素变化时触发; <br>
              left-check-change：左侧列表元素被用户选中 / 取消选中时触发; <br>
              right-check-change：右侧列表元素被用户选中 / 取消选中时触发;
            </div>
          </div> `
      },
      codeFiles: ['transfer-events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 data 属性提供数据源，value 属性指定右侧列表值。',
      cloud: {
        value: true
      },
      apis: ['data', 'value'],
      demos: ['basic-usage']
    },
    {
      id: 'custom',
      name: '自定义',
      support: {
        value: true
      },
      description: '支持自定义标题、按钮文本、列表底部等内容。',
      cloud: {
        value: true
      },
      apis: ['titles', 'button-texts', 'left-footer', 'right-footer'],
      demos: ['custom-titles', 'custom-btns', 'custom-footer']
    },
    {
      id: 'filter',
      name: '过滤搜索',
      support: {
        value: true
      },
      description: '通过 filterable 开启搜索功能，可自定义搜索方法。',
      cloud: {
        value: true
      },
      apis: ['filterable', 'filter-method'],
      demos: ['custom-filter']
    },
    {
      id: 'sort',
      name: '排序策略',
      support: {
        value: true
      },
      description: '通过 target-order 设置右侧列表元素的排序策略。',
      cloud: {
        value: true
      },
      apis: ['target-order'],
      demos: ['target-order']
    }
  ]
}
