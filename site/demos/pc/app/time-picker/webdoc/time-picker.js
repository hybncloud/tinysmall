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
        'zh-CN': '<p>默认是通过滚动的方式选择时间，<code>arrow-control</code> 属性可以设置通过箭头的方式选择时间。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'picker-options',
      name: {
        'zh-CN': '固定时间范围'
      },
      desc: {
        'zh-CN': '<p>通过<code>picker-options</code> 设置固定时间范围</p>'
      },
      codeFiles: ['picker-options.vue']
    },
    {
      demoId: 'is-range',
      name: {
        'zh-CN': '选择时间范围'
      },
      desc: {
        'zh-CN':
          "<p>通过<code>is-range</code> 设置是否为范围选择，默认为 false，通过<code>range-separator</code>设置范围选择分隔符（为可选值）默认为 '-'。</p>"
      },
      codeFiles: ['is-range.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用状态'
      },
      desc: {
        'zh-CN':
          '<p>通过设置 <code>disabled</code> 为 true 后，禁用时间输入框。</p><p>通过设置 <code>picker-options</code> 的 <code>selectableRange</code> 属性，可以实现部分禁用，此时只能选择一部分时间。</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'placeholder',
      name: {
        'zh-CN': '占位符'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code> placeholder </code> 属性设置时间输入框的占位符，通过 <code> start-placeholder </code> / <code> end-placeholder </code> 设置时间范围输入框的开始和结束时间的占位符。</p>'
      },
      codeFiles: ['placeholder.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN': '<p>通过 <code>size</code> 自定义组件尺寸。</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'step',
      name: {
        'zh-CN': '步长'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>step</code> 设置步长，默认值为 <code>{ hour: 1, minute: 1, second: 1 }</code>，其中 <code>hour</code> 的设置范围是 <code>0-23</code>，<code>minute</code>、<code>second</code> 的设置范围是 <code>0-59</code>。可单独设置其中的一项或多项值，未设置的默认值为 <code>1</code>。</p>'
      },
      codeFiles: ['step.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '清除按钮'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>clearable</code> 属性设置是否显示清除按钮，默认值为 true。通过 <code>clear-icon</code> 属性可以自定义清除按钮的图标。</p>'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'format',
      name: {
        'zh-CN': '时间格式化'
      },
      desc: {
        'zh-CN':
          '\n          <p><code>format</code> 时间格式化显示\n<code>timestamp</code> JS 时间戳，仅 value-format 可用；组件绑定值为 number 类型。</p>\n          <p>通过 <code>hh</code> 属性可设置 12 小时制。 <code>HH</code> 属性为 24 小时制，须和 A 或 a 使用。 <code>h</code> 与 <code>H</code> 属性设置不补 0。\n通过 <code>mm</code> 属性可设置分钟显示格式，例如 01。 <code>m</code> 属性设置不补 0。\n通过 <code>ss</code> 属性可设置秒的显示格式，例如 01。 <code>s</code> 属性设置不补 0。\n通过 <code>a</code> 属性可设置显示时间为 am/pm <code>A</code>属性设置显示时间为 AM/PM。</p>\n        '
      },
      codeFiles: ['format.vue']
    },
    {
      demoId: 'default-value',
      name: {
        'zh-CN': '默认时间'
      },
      desc: {
        'zh-CN': '<p>通过 <code>default-value</code> 设置选择器打开显示默认时间。</p>'
      },
      codeFiles: ['default-value.vue']
    },
    {
      demoId: 'name',
      name: {
        'zh-CN': '原生属性'
      },
      desc: {
        'zh-CN': '<p>通过 <code>name</code> 属性设置默认 name。</p>'
      },
      codeFiles: ['name.vue']
    },
    {
      demoId: 'suffix-icon',
      name: {
        'zh-CN': '自定义后置图标'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>suffix-icon</code> 属性设置日期输入框后置图标，从 <code>@opentiny/vue-icon</code> 中导入一个图标并进行初始化后传给 <code>suffix-icon</code>。</p>'
      },
      codeFiles: ['suffix-icon.vue']
    },
    {
      demoId: 'popper-class',
      name: {
        'zh-CN': '下拉框的类名'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>popper-class</code> 属性设置下拉框的类名。通过 <code>popper-append-to-body</code> 属性设置是否将下拉框放到 body 元素上，默认值为 true，下拉框挂在 body 元素上。</p>'
      },
      codeFiles: ['popper-class.vue']
    },
    {
      demoId: 'editable',
      name: {
        'zh-CN': '文本框不可输入'
      },
      desc: {
        'zh-CN': '<p>日期输入框默认可以输入日期，设置 <code>editable</code> 为 false 后，将不能输入。</p>'
      },
      codeFiles: ['editable.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<p>当聚焦和失焦时会触发 focus 和 blur 事件，当确定选值时会触发 change 事件。</p>'
      },
      codeFiles: ['event.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '默认通过滚动的方式选择时间，arrow-control 属性可以设置通过箭头的方式选择时间。',
      cloud: {
        value: true
      },
      apis: ['arrow-control'],
      demos: ['basic-usage']
    },
    {
      id: 'range',
      name: '时间范围',
      support: {
        value: true
      },
      description: '通过 is-range 设置是否为范围选择，range-separator 设置范围选择分隔符。',
      cloud: {
        value: true
      },
      apis: ['is-range', 'range-separator'],
      demos: ['is-range']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 禁用时间输入框，picker-options 的 selectableRange 属性可实现部分禁用。',
      cloud: {
        value: true
      },
      apis: ['disabled', 'picker-options'],
      demos: ['disabled']
    },
    {
      id: 'format',
      name: '时间格式化',
      support: {
        value: true
      },
      description: '通过 format 设置时间格式化显示，支持 12/24 小时制、分钟、秒等格式。',
      cloud: {
        value: true
      },
      apis: ['format'],
      demos: ['format']
    }
  ]
}
