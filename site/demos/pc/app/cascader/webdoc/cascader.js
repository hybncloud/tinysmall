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
        'zh-CN': '<p>通过 <code>options</code> 属性指定选项数组即可渲染出一个级联选择器。</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'expand-trigger',
      name: {
        'zh-CN': 'hover 触发子菜单'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>props.expandTrigger</code> 可以指定展开子级菜单的触发方式为 <code>hover</code>，默认为 <code>click</code> 。</p>\n'
      },
      codeFiles: ['expand-trigger.vue']
    },
    {
      demoId: 'disabled-items',
      name: {
        'zh-CN': '禁用选项'
      },
      desc: {
        'zh-CN':
          '<p>\n            <div>通过在数据源<code>option</code>中设置 <code>disabled</code> 字段来声明该选项是禁用的，在默认情况下，Cascader 会检查数据中每一项的 <code>disabled</code> 字段是否为 <code>true</code>。</div>\n            <div>也可以通过直接设置 <code>disabled</code> 可以禁用组件。</div>\n          </p>'
      },
      codeFiles: ['disabled-items.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '可清空'
      },
      desc: {
        'zh-CN': '<p>通过 <code>clearable</code> 属性设置输入框可清空。</p>\n'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'separator',
      name: {
        'zh-CN': '分隔符'
      },
      desc: {
        'zh-CN': '<p>通过 <code>separator</code> 属性设置分隔符。</p>\n'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性设置尺寸。</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'default-multiple',
      name: {
        'zh-CN': '多选'
      },
      desc: {
        'zh-CN': '<p>通过 <code>props.multiple = true</code> 来开启多选模式。</p>\n'
      },
      codeFiles: ['default-multiple.vue']
    },
    {
      demoId: 'auto-size',
      name: {
        'zh-CN': '自适应高度'
      },
      desc: {
        'zh-CN': '<p>通过 auto-size 属性指定下拉弹框是否根据内容自适应高度。 </p>'
      },
      codeFiles: ['auto-size.vue']
    },
    {
      demoId: 'collapse-tags',
      name: {
        'zh-CN': '折叠展示 Tag'
      },
      desc: {
        'zh-CN':
          '<p>在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，可以使用 <code>collapse-tags</code> 来折叠 Tag。</p>'
      },
      codeFiles: ['collapse-tags.vue']
    },
    {
      demoId: 'check-strictly',
      name: {
        'zh-CN': '父子级不相关联'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>props.checkStrictly = true</code> 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n'
      },
      codeFiles: ['check-strictly.vue']
    },
    {
      demoId: 'check-strictly-multiple',
      name: {
        'zh-CN': '多选选择任意一级选项'
      },
      desc: {
        'zh-CN': '<p>在多选模式下同时取消父子节点关联，选择任意一级选项。</p>\n'
      },
      codeFiles: ['check-strictly-multiple.vue']
    },
    {
      demoId: 'auto-load',
      name: {
        'zh-CN': '动态加载'
      },
      desc: {
        'zh-CN':
          '\n          <p>\n            <div>当选中某一级时，动态加载该级下的选项。</dvi>\n            <div>通过 <code>props</code> 属性中的 <code>lazy</code> 开启动态加载，并通过 <code>lazyload</code> 来设置加载数据源的方法。</div>\n            <div><code>lazyload</code> 方法有两个参数，第一个参数 node 为当前点击的节点，第二个 resolve 为数据加载完成的回调 (必须调用)。</div>\n            <p>\n              <div>为了更准确的显示节点的状态，默认地（默认指没有设置<code>props.leaf</code>）可以使用<code>leaf</code>字段。</div>\n              <div>表明此节点是否为叶子节点，否则会简单地以有无子节点来判断是否为叶子节点。</div>\n            </p>\n          </p>\n        '
      },
      codeFiles: ['auto-load.vue']
    },
    {
      demoId: 'auto-load-checkStrictly',
      name: {
        'zh-CN': '动态加载且父子级不相关联'
      },
      desc: {
        'zh-CN':
          '<p>当选中某一级时，动态加载该级下的选项。通过 <code>props</code> 属性中的 <code>lazy</code> 开启动态加载，并通过 <code>lazyload</code> 来设置加载数据源的方法。通过 <code>props</code> 属性中的 <code>checkStrictly</code> 开启父子级不相关联。</p>\n'
      },
      codeFiles: ['auto-load-checkStrictly.vue']
    },
    {
      demoId: 'props-children',
      name: {
        'zh-CN': '指定选项'
      },
      desc: {
        'zh-CN':
          "<p>\n          <div>通过 <code>props.children</code> 指定选项的子选项，默认为 'children' 。</div>\n          <div>通过 <code>props.value</code> 指定指定选项的 value 值，默认为 'value' 。</div>\n          <div>通过 <code>props.label</code> 指定选项标签，默认为 'label' 。</div>\n        <p/>"
      },
      codeFiles: ['props-children.vue']
    },
    {
      demoId: 'filterable',
      name: {
        'zh-CN': '可搜索'
      },
      desc: {
        'zh-CN':
          '<p>\n            将 <code>filterable</code> 赋值为 <code>true</code> 即可打开搜索功能，默认会匹配节点的 <code>label</code> 或所有父节点的 <code>label</code> (由 <code>show-all-levels</code> 决定) 中包含输入值的选项。</br>\n            使用<code>empty</code> 插槽设置无匹配选项时显示的内容，使用<code>debounce</code>设置搜索延迟。\n          </p>'
      },
      codeFiles: ['filterable.vue']
    },
    {
      demoId: 'filterable-multiple',
      name: {
        'zh-CN': '多选可搜索'
      },
      desc: {
        'zh-CN': '<p>多选模式下开启搜索功能。</p>\n'
      },
      codeFiles: ['filterable-multiple.vue']
    },
    {
      demoId: 'filter-method',
      name: {
        'zh-CN': '自定义搜索逻辑'
      },
      desc: {
        'zh-CN':
          '<p><code>filter-method</code> 自定义搜索逻辑，第一个参数是节点 node，第二个参数是搜索关键词 keyword，通过返回布尔值表示是否命中，如果需要搜索到父级，通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。默认单选模式下，只能选择叶子节点。</p>\n'
      },
      codeFiles: ['filter-method.vue']
    },
    {
      demoId: 'show-all-levels',
      name: {
        'zh-CN': '仅显示最后一级'
      },
      desc: {
        'zh-CN':
          '<p>属性 <code>show-all-levels</code> 定义了是否显示完整的路径，将其赋值为 <code>false</code> 则仅显示最后一级，默认为 <code>true</code> ，显示选中项所在的完整路径。</p>\n'
      },
      codeFiles: ['show-all-levels.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN':
          '<p>\n            Cascader 级联选择器的事件有：<code>change</code>、<code>expand-change</code>、<code>blur</code>、<code>focus</code>、<code>visible-change</code>。\n            <div>使用 <code>props.emitPath</code> 能设置节点的返回类型。</div>\n          </p>'
      },
      codeFiles: ['events.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽'
      },
      desc: {
        'zh-CN': `
          通过 <code>default</code> 插槽，自定义级联节点。<br>
          通过 <code>no-data</code> 插槽设置没有数据时显示的内容。
        `
      },
      codeFiles: ['slot.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '通过 data 设置级联选择器的数据。',
      cloud: {
        value: true
      },
      apis: ['data'],
      demos: ['basic-usage']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置是否禁用级联选择器。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'clearable',
      name: '可清空',
      support: {
        value: true
      },
      description: '通过 clearable 设置输入框是否可清空。',
      cloud: {
        value: true
      },
      apis: ['clearable'],
      demos: ['clearable']
    },
    {
      id: 'size',
      name: '尺寸设置',
      support: {
        value: true
      },
      description: '通过 size 设置级联选择器的尺寸，可选值为 medium、small、mini。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'change-on-select',
      name: '选择即改变',
      support: {
        value: true
      },
      description: '通过 change-on-select 设置选择即改变。',
      cloud: {
        value: true
      },
      apis: ['change-on-select'],
      demos: ['show-all-levels']
    },
    {
      id: 'multiple',
      name: '多选功能',
      support: {
        value: true
      },
      description: '通过 multiple 设置是否为多选。',
      cloud: {
        value: true
      },
      apis: ['multiple'],
      demos: ['multiple']
    },
    {
      id: 'filterable',
      name: '可搜索',
      support: {
        value: true
      },
      description: '通过 filterable 设置是否可搜索。',
      cloud: {
        value: true
      },
      apis: ['filterable'],
      demos: ['filterable']
    },
    {
      id: 'custom-option',
      name: '自定义选项',
      support: {
        value: true
      },
      description: '通过 scoped slot 可以自定义备选项。',
      cloud: {
        value: true
      },
      apis: ['slot-default'],
      demos: ['custom-option']
    },
    {
      id: 'events',
      name: '事件处理',
      support: {
        value: true
      },
      description: '当选中节点变化时会触发 change 事件。',
      cloud: {
        value: true
      },
      apis: ['change'],
      demos: ['events']
    }
  ]
}
