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
        'zh-CN': '<p>最基础的用法，通过 <code>tree-op</code> 设置下拉树的数据源，<code>v-model</code> 设置绑定值。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'multiple',
      name: {
        'zh-CN': '多选'
      },
      desc: {
        'zh-CN': `通过 <code>multiple</code> 属性启用多选功能，此时 <code>v-model</code> 的值为当前选中值所组成的数组，默认选中值会以标签形式展示。<br>`
      },
      codeFiles: ['multiple.vue']
    },
    {
      demoId: 'collapse-tags',
      name: {
        'zh-CN': '折叠标签'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>collapse-tags</code> 属性设置选中多个选项时，多个标签缩略展示。设置 <code>hover-expand</code> 为 <code>true</code> ，默认折叠标签，<code>hover</code> 时展示所有标签。标签内容超长时超出省略，<code>hover</code> 标签时展示 <code>tooltip</code> 。</p>\n'
      },
      codeFiles: ['collapse-tags.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 属性设置输入框尺寸，可选值：medium / small / mini。</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 属性设置禁用状态。</p>\n'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'lazy',
      name: {
        'zh-CN': '懒加载'
      },
      desc: {
        'zh-CN':
          '通过 <code>lazy</code> 属性，启用懒加载模式。<br>通过 <code>load</code> 函数属性，触发加载，初始会执行一次。<br>通过 <code>after-load</code> 函数属性，监听下级节点加载完毕的事件。'
      },
      codeFiles: ['lazy.vue']
    },
    {
      demoId: 'map-field',
      name: {
        'zh-CN': '映射字段'
      },
      desc: {
        'zh-CN': '通过 <code>text-field</code> 设置显示文本字段，<code>value-field</code>设置绑定值字段。'
      },
      codeFiles: ['map-field.vue']
    },
    {
      demoId: 'reference-style',
      name: {
        'zh-CN': '触发源样式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>dropdown-icon</code> 属性可自定义下拉图标，<code>drop-style</code> 属性可自定义下拉选项样式，<code>tag-type</code> 属性设置标签类型（同 Tag 组件的 type 属性），<code>input-box-type</code> 属性设置输入框类型。</p>\n'
      },
      codeFiles: ['reference-style.vue']
    },
    {
      demoId: 'panel-style',
      name: {
        'zh-CN': '下拉面板样式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>popper-append-to-body</code> 设置是否将弹框 dom 元素插入至 body 元素，默认为 true，<code>popper-class</code> 属性设置下拉弹框的类名，可自定义样式，<code>placement</code>设置弹出位置。</p>\n'
      },
      codeFiles: ['panel-style.vue']
    },
    {
      demoId: 'copy',
      name: {
        'zh-CN': '可复制'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>copyable</code> 设置启用一键复制所有标签的文本内容并以逗号分隔，<code>text-split</code> 自定义复制文本的分隔符。</p>\n'
      },
      codeFiles: ['copy.vue']
    },
    {
      demoId: 'native-properties',
      name: {
        'zh-CN': '原生属性'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>name</code> / <code>placeholder</code> / <code>autocomplete</code> 属性设置下拉组件内置 Input 的原生属性。</p>\n'
      },
      codeFiles: ['native-properties.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '支持基本的树形选择功能，可通过 tree-op 设置数据源。',
      cloud: {
        value: true
      },
      apis: ['tree-op', 'v-model'],
      demos: ['basic-usage']
    },
    {
      id: 'multiple',
      name: '多选',
      support: {
        value: true
      },
      description: '支持多选功能，选中值以标签形式展示。',
      cloud: {
        value: true
      },
      apis: ['multiple'],
      demos: ['multiple']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '支持 medium、small、mini 三种尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '支持禁用整个选择器。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'field-mapping',
      name: '字段映射',
      support: {
        value: true
      },
      description: '支持自定义显示文本字段和绑定值字段。',
      cloud: {
        value: true
      },
      apis: ['text-field', 'value-field'],
      demos: ['map-field']
    }
  ]
}
