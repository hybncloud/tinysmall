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
        'zh-CN': '可通过<code>v-model</code>属性设置绑定输入值。'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'max-min',
      name: {
        'zh-CN': '最值与数值循环'
      },
      desc: {
        'zh-CN':
          '可通过<code>max</code>属性设置计数器允许的最大值，<code>min</code>属性设置计数器允许的最小值，<code>circulate</code>属性设置当计数器的数值为最大值，继续计数，是否从最小值开始计数。'
      },
      codeFiles: ['max-min.vue']
    },
    {
      demoId: 'about-step',
      name: {
        'zh-CN': '步长'
      },
      desc: {
        'zh-CN':
          '可通过<code>step</code>属性设置计数器的加减数值及<code>mode</code>模式为<code>restore</code>、<code>strictly</code>的用法，<code>step-strictly</code>属性设置只能输入 step 的倍数'
      },
      codeFiles: ['about-step.vue']
    },
    {
      demoId: 'precision',
      name: {
        'zh-CN': '数值精度及格式'
      },
      desc: {
        'zh-CN': '可通过<code>precision</code>属性设置计数器的精度值，<code>format</code>属性设置数字显示格式。'
      },
      codeFiles: ['precision.vue']
    },
    {
      demoId: 'dynamic-disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '可通过<code>disabled</code>属性设置是否禁用计数器。'
      },
      codeFiles: ['dynamic-disabled.vue']
    },
    {
      demoId: 'parse-input',
      name: {
        'zh-CN': '自定义输入值解析'
      },
      desc: {
        'zh-CN': '自定义输入值解析函数，优先级较高。当输入字符以及粘贴时，会调用该函数进行解析。'
      },
      codeFiles: ['parse-input.vue'],
      meta: {
        stable: '3.31.0'
      }
    },

    {
      demoId: 'allow-empty',
      name: {
        'zh-CN': '可清空'
      },
      desc: {
        'zh-CN':
          '可通过<code>allow-empty</code>属性设置计数器内容的可清空特性，默认为 <code>false</code>，表示不可清空。'
      },
      codeFiles: ['allow-empty.vue']
    },
    {
      demoId: 'empty-value',
      name: {
        'zh-CN': '设定清空输入后的绑定值'
      },
      desc: {
        'zh-CN':
          '可通过 <code>empty-value</code> 属性设置计数器在可清空下，清空后组件的绑定值。默认为 <code>undefined</code>。示例中将清空后组件绑定值改为<code>null</code>'
      },
      codeFiles: ['empty-value.vue']
    },
    {
      demoId: 'numeric-size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN':
          '可通过 <code>size</code> 属性设置计数器尺寸，可选值有 <code>medium</code><code>small</code><code>mini</code>。'
      },
      codeFiles: ['numeric-size.vue']
    },
    {
      demoId: 'controls',
      name: {
        'zh-CN': '加减按钮'
      },
      desc: {
        'zh-CN':
          '可通过<code>controls</code> 属性设置计数器是否显示加减按钮，<code>controls-position</code> 属性设置加减按钮显示的位置。加减按钮默认分列两侧显示，<code>show-left</code> 属性设置左对齐。'
      },
      codeFiles: ['controls.vue']
    },
    {
      demoId: 'mouse-wheel',
      name: {
        'zh-CN': '鼠标滚轮滚动改变值'
      },
      desc: {
        'zh-CN': '可通过<code>mouse-wheel</code>属性设置控制鼠标滚动滑轮的数值。'
      },
      codeFiles: ['mouse-wheel.vue']
    },
    {
      demoId: 'unit',
      name: {
        'zh-CN': '单位'
      },
      desc: {
        'zh-CN': '可通过<code>unit</code>属性设置计数器的单位，设置单位后，加减按钮将不可用。'
      },
      codeFiles: ['unit.vue']
    },
    {
      demoId: 'change-event',
      name: {
        'zh-CN': '值改变事件'
      },
      desc: {
        'zh-CN':
          '可通过<code>@change</code>设置监听数值改变事件。当<code>change-compat</code>为 false 时，仅当加减按钮及直接输入数值时会触发<code>change</code>事件。'
      },
      codeFiles: ['change-event.vue']
    },
    {
      demoId: 'input-event',
      name: {
        'zh-CN': '输入事件'
      },
      desc: {
        'zh-CN': '<p>输入时触发<code>input</code>事件。<p>'
      },
      codeFiles: ['input-event.vue']
    },
    {
      demoId: 'focus-event',
      name: {
        'zh-CN': '聚焦事件'
      },
      desc: {
        'zh-CN': '可通过<code>@focus</code>设置监听输入框获得焦点事件。'
      },
      codeFiles: ['focus-event.vue']
    },
    {
      demoId: 'blur-event',
      name: {
        'zh-CN': '失焦事件'
      },
      desc: {
        'zh-CN': '可通过<code>@blur</code>设置监听输入框失去焦点事件。'
      },
      codeFiles: ['blur-event.vue']
    },
    {
      demoId: 'string-mode',
      name: {
        'zh-CN': '高精度'
      },
      desc: {
        'zh-CN': '可通过 <code>string-mode</code> 设置高精度模式，当 JS 默认的 Number 不满足数字的长度与精度需求时。'
      },
      codeFiles: ['string-mode.vue']
    },
    {
      demoId: 'filter-mode',
      name: {
        'zh-CN': '过滤器模式'
      },
      desc: {
        'zh-CN':
          '通过<code> shape="filter" </code>属性设置切换过滤器模式，过滤器模式下可传入<code>title</code>显示标题，<code>tip</code>显示提示信息，<code>clearable</code>是否显示清除按钮，默认值为<code>true</code>。<code>blank</code>属性将过滤器背景设置为透明。'
      },
      codeFiles: ['filter-mode.vue']
    },
    {
      demoId: 'filter-mode-change',
      name: {
        'zh-CN': '过滤器模式 change 事件'
      },
      desc: {
        'zh-CN':
          '通过<code>filter</code>属性展示筛选框，<code>filter-change</code>事件筛选框选择触发，过滤器模式下点击关闭图标，触发<code>clear</code>事件。'
      },
      codeFiles: ['filter-mode-change.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '通过 v-model 属性设置绑定输入值。',
      cloud: {
        value: true
      },
      apis: ['v-model'],
      demos: ['basic-usage']
    },
    {
      id: 'max-min',
      name: '最值与数值循环',
      support: {
        value: true
      },
      description: '通过 max 设置最大值，min 设置最小值，circulate 设置是否从最小值开始循环。',
      cloud: {
        value: true
      },
      apis: ['max', 'min', 'circulate'],
      demos: ['max-min']
    },
    {
      id: 'step',
      name: '步长',
      support: {
        value: true
      },
      description: '通过 step 设置加减数值，mode 设置模式，step-strictly 设置是否只能输入 step 的倍数。',
      cloud: {
        value: true
      },
      apis: ['step', 'mode', 'step-strictly'],
      demos: ['about-step']
    },
    {
      id: 'precision',
      name: '数值精度及格式',
      support: {
        value: true
      },
      description: '通过 precision 设置精度值，format 设置数字显示格式。',
      cloud: {
        value: true
      },
      apis: ['precision', 'format'],
      demos: ['precision']
    },
    {
      id: 'disabled',
      name: '禁用',
      support: {
        value: true
      },
      description: '通过 disabled 设置是否禁用计数器。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['dynamic-disabled']
    },
    {
      id: 'empty',
      name: '可清空',
      support: {
        value: true
      },
      description: '通过 allow-empty 设置是否可清空，empty-value 设置清空后的绑定值。',
      cloud: {
        value: true
      },
      apis: ['allow-empty', 'empty-value'],
      demos: ['allow-empty', 'empty-value']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 设置尺寸，可选值：medium、small、mini。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['numeric-size']
    },
    {
      id: 'controls',
      name: '加减按钮',
      support: {
        value: true
      },
      description: '通过 controls 设置是否显示加减按钮，controls-position 设置按钮位置，show-left 设置左对齐。',
      cloud: {
        value: true
      },
      apis: ['controls', 'controls-position', 'show-left'],
      demos: ['controls']
    },
    {
      id: 'mouse-wheel',
      name: '鼠标滚轮',
      support: {
        value: true
      },
      description: '通过 mouse-wheel 设置是否支持鼠标滚轮改变值。',
      cloud: {
        value: true
      },
      apis: ['mouse-wheel'],
      demos: ['mouse-wheel']
    },
    {
      id: 'unit',
      name: '单位',
      support: {
        value: true
      },
      description: '通过 unit 设置计数器的单位，设置单位后加减按钮将不可用。',
      cloud: {
        value: true
      },
      apis: ['unit'],
      demos: ['unit']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 change、focus、blur 等事件，change-compat 控制 change 事件的触发时机。',
      cloud: {
        value: true
      },
      apis: ['change', 'focus', 'blur', 'change-compat'],
      demos: ['change-event', 'focus-event', 'blur-event']
    },
    {
      id: 'string-mode',
      name: '高精度',
      support: {
        value: true
      },
      description: '通过 string-mode 设置高精度模式，用于处理超出 JS Number 精度范围的数值。',
      cloud: {
        value: true
      },
      apis: ['string-mode'],
      demos: ['string-mode']
    },
    {
      id: 'filter',
      name: '过滤器模式',
      support: {
        value: true
      },
      description: '通过 shape="filter" 设置过滤器模式，支持 title、tip、clearable、blank 等属性配置。',
      cloud: {
        value: true
      },
      apis: ['shape', 'title', 'tip', 'clearable', 'blank'],
      demos: ['filter-mode', 'filter-mode-change']
    }
  ]
}
