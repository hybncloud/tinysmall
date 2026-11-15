export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法'
      },
      desc: {
        'zh-CN': '<p>支持只使用日期面板、日期区间面板。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'disabled-date',
      name: {
        'zh-CN': '日期禁用'
      },
      desc: {
        'zh-CN': '<p>通过设置 <code>disabledDate</code> 属性，可以实现部分禁用，此时只能选择一部分日期。</p>'
      },
      codeFiles: ['disabled-date.vue']
    },
    {
      demoId: 'format',
      name: {
        'zh-CN': '格式化'
      },
      desc: {
        'zh-CN': '<p>通过 <code>format</code> 属性设置面板选中的日期格式</p>'
      },
      codeFiles: ['format.vue']
    },
    {
      demoId: 'shortcuts',
      name: {
        'zh-CN': '快捷选项'
      },
      desc: {
        'zh-CN': '<p>通过指定 <code>shortcuts</code> 对象数组可以设置快捷选项。</p>'
      },
      codeFiles: ['shortcuts.vue']
    },
    {
      demoId: 'readonly',
      name: {
        'zh-CN': '只读'
      },
      desc: {
        'zh-CN': '<p>通过指定 <code>readonly</code> 设置只读。</p>'
      },
      codeFiles: ['readonly.vue']
    },
    {
      demoId: 'custom-weeks',
      name: {
        'zh-CN': '周次序号'
      },
      desc: {
        'zh-CN':
          '\n          <p>通过设置 <code>show-week-number</code> 属性为 <code>true</code> 显示周次序号，通过<code>format-weeks</code>属性设置周次显示格式，<code>format-weeks</code>函数有两个参数：</p>\n          <ul>\n            <li>customWeeks：自定义周次的序号</li>\n            <li>weekFirstDays：获取每周次中的首个日期</li>\n          </ul>\n          <p>通过 <code> firstDayOfWeek </code> 属性来设置每周的第一天是星期几，默认值是7，也就是星期天。</p>\n        '
      },
      codeFiles: ['custom-weeks.vue']
    },
    {
      demoId: 'unlink-panels',
      name: {
        'zh-CN': '面板联动'
      },
      desc: {
        'zh-CN':
          '<p>范围选择时，默认情况下，在开始日期面板中单击上一月或上一年箭头图标时，结束日期面板中日期也联动切换到上一月或上一年。在结束日期面板中切换下一月或下一年时，开始日期面板也随之联动。但若配置 <code>unlink-panels</code> 属性为 true，面板之间就不再联动，切换年月时只对当前面板生效。</p>\n'
      },
      codeFiles: ['unlink-panels.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': '<p>支持 <code>selectPanelChange</code> 事件。用于获取选中日期后执行的回调。</p>'
      },
      codeFiles: ['event.vue']
    }
  ]
}
