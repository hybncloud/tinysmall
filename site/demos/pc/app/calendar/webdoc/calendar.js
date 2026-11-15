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
        'zh-CN': '<p>默认以月的形式展示当月的每一天。</p>\n'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'calendar-mode',
      name: {
        'zh-CN': '显示模式'
      },
      desc: {
        'zh-CN': '<p>通过 <code>mode</code> 属性指定以年的形式显示，将展示当年的每个月份。可选值有 year、month。</p>\n'
      },
      codeFiles: ['calendar-mode.vue']
    },
    {
      demoId: 'show-selected-date',
      name: {
        'zh-CN': '显示选中日期'
      },
      desc: {
        'zh-CN':
          '<p>以月的形式展示时，指定 show-selected 属性后，单击日期单元格，将会在日历框上方展示当前选中的日期。</p>\n'
      },
      codeFiles: ['show-selected-date.vue']
    },
    {
      demoId: 'calendar-year-month',
      name: {
        'zh-CN': '指定年月'
      },
      desc: {
        'zh-CN': '<p>通过 <code>year</code> 属性指定年份，通过 <code>month</code> 属性指定月份。</p>\n'
      },
      codeFiles: ['calendar-year-month.vue']
    },
    {
      demoId: 'custom-day-cell',
      name: {
        'zh-CN': '自定义日期单元格'
      },
      desc: {
        'zh-CN': '<p>通过作用域插槽 day 自定义日期单元格。</p>\n'
      },
      codeFiles: ['custom-day-cell.vue']
    },
    {
      demoId: 'custom-calendar-toolbar',
      name: {
        'zh-CN': '自定义工具栏'
      },
      desc: {
        'zh-CN': '<p>通过作用域插槽 tool 自定义需要的工具栏。</p>\n'
      },
      codeFiles: ['custom-calendar-toolbar.vue']
    },
    {
      demoId: 'dynamic-add-schedule',
      name: {
        'zh-CN': '添加日程事件'
      },
      desc: {
        'zh-CN':
          '<p>通过 events 属性可以指定事件列表，它是一个对象数组，对象中包含如下字段：</p>\n<div class="tip custom-block"><p class="custom-block-title">events 说明</p>\n<p>time：指定需要展示事件的日期\ntitle：指定事件标题\ncontent：指定事件的具体内容 type：指定当鼠标悬停在事件标题上时，弹出的展示事件具体内容的提示框的主题，包括 warning、error、info、success</p>\n</div>\n'
      },
      codeFiles: ['dynamic-add-schedule.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本功能',
      support: {
        value: true
      },
      description: '默认以月的形式展示当月的每一天。',
      cloud: {
        value: false
      },
      apis: [],
      demos: ['basic-usage']
    },
    {
      id: 'mode',
      name: '显示模式',
      support: {
        value: true
      },
      description: '通过 mode 属性指定以年的形式显示，将展示当年的每个月份。可选值有 year、month。',
      cloud: {
        value: false
      },
      apis: ['mode'],
      demos: ['calendar-mode']
    },
    {
      id: 'show-selected',
      name: '显示选中日期',
      support: {
        value: true
      },
      description: '以月的形式展示时，指定 show-selected 属性后，单击日期单元格，将会在日历框上方展示当前选中的日期。',
      cloud: {
        value: false
      },
      apis: ['show-selected'],
      demos: ['show-selected-date']
    },
    {
      id: 'year-month',
      name: '指定年月',
      support: {
        value: true
      },
      description: '通过 year 属性指定年份，通过 month 属性指定月份。',
      cloud: {
        value: false
      },
      apis: ['year', 'month'],
      demos: ['calendar-year-month']
    },
    {
      id: 'day-cell',
      name: '自定义日期单元格',
      support: {
        value: true
      },
      description: '通过作用域插槽 day 自定义日期单元格。',
      cloud: {
        value: false
      },
      apis: ['slot-day'],
      demos: ['custom-day-cell']
    },
    {
      id: 'toolbar',
      name: '自定义工具栏',
      support: {
        value: true
      },
      description: '通过作用域插槽 tool 自定义需要的工具栏。',
      cloud: {
        value: false
      },
      apis: ['slot-tool'],
      demos: ['custom-calendar-toolbar']
    },
    {
      id: 'events',
      name: '日程事件',
      support: {
        value: true
      },
      description: '通过 events 属性可以指定事件列表，它是一个对象数组，对象中包含 time、title、content、type 等字段。',
      cloud: {
        value: false
      },
      apis: ['events'],
      demos: ['dynamic-add-schedule']
    }
  ]
}
