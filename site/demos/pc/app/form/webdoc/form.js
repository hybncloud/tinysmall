export default {
  column: '2',
  owner: '',
  show: true,
  cloud: true,
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '常用表单'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>Form</code> 组件中，每一个表单域由一个 <code>form-item</code> 组件构成，表单域中可以放置各种类型的表单控件，包括 <code>Input</code> 、 <code>Select</code> 、 <code>Checkbox</code> 、 <code>Radio</code> 、 <code>Switch</code> 、 <code>DatePicker</code> 、 <code>TimePicker</code> 等。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'form-in-row',
      name: {
        'zh-CN': '行内表单'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>inline</code> 设置行内表单，当垂直方向空间受限且表单较简单时，可以在一行内放置表单项。 <code>label-suffix</code> 设置表单标签后缀。</p>'
      },
      codeFiles: ['form-in-row.vue']
    },
    {
      demoId: 'label-position',
      name: {
        'zh-CN': '标签宽度与标签位置'
      },
      desc: {
        'zh-CN': '<p>通过 <code>label-width</code> 设置标签宽度，<code>label-position</code> 设置文本标签的位置。</p>'
      },
      codeFiles: ['label-position.vue']
    },
    {
      demoId: 'label-align',
      name: {
        'zh-CN': '必填星号文本对齐'
      },
      desc: {
        'zh-CN':
          '<p>当 <code>label-position</code> 为 <code>left</code> 时，通过 <code>label-align</code> 设置必填星号出现时标签文本是否对齐。</p>'
      },
      codeFiles: ['label-align.vue']
    },
    {
      demoId: 'overflow-title',
      name: {
        'zh-CN': '标签超长显示提示'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>overflow-title</code> 设置标签超长时鼠标移动到标签上可显示 <code>tooltip</code> 提示，若使用 <code>label</code> 插槽，需自行实现。</p>'
      },
      codeFiles: ['overflow-title.vue']
    },
    {
      demoId: 'form-validation',
      name: {
        'zh-CN': '表单校验、移除校验'
      },
      desc: {
        'zh-CN': `<p>通过 <code>rules</code> 设置校验规则，
          调用 <code>clearValidate</code> 方法移除表单项的校验结果。传入待移除的表单项的 <code>prop</code> 属性或者 <code>prop</code> 组成的数组，如不传则移除整个表单的校验结果，
          调用 <code>resetFields</code> 方法重置表单并移除校验结果
          </p>`
      },
      codeFiles: ['form-validation.vue']
    },
    {
      demoId: 'form-validate-field',
      name: {
        'zh-CN': '特定表单项校验'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>validateField</code> 方法对特定表单项进行校验， <code>clearValidate</code> 方法移除特定表单项校验， <code>resetField</code> 重置表单项并移除校验。</p>'
      },
      codeFiles: ['form-validate-field.vue']
    },
    {
      demoId: 'custom-validation-rule',
      name: {
        'zh-CN': '自定义校验规则'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>rules</code> 的 <code>validator</code> 选项进行自定义校验，校验方法中 <code>callback</code> 必须被调用。通过 <code>validate-on-rule-change</code> 设置是否在 <code>rules</code> 属性改变后立即触发一次验证。</p>'
      },
      codeFiles: ['custom-validation-rule.vue']
    },
    {
      demoId: 'custom-validation-string-length',
      name: {
        'zh-CN': '自定义字符串长度'
      },
      desc: {
        'zh-CN': '<p>通过 <code>rules</code> 的 <code>regular</code> 进行自定义字符串长度</p>'
      },
      codeFiles: ['custom-validation-string-length.vue']
    },
    {
      demoId: 'validation-position',
      name: {
        'zh-CN': '校验提示位置'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-position</code> 可自定义错误提示出现的位置，在 <code>form</code> 组件上设置后，子组件 <code>form-item</code> 会继承父组件设置。单独在 <code>form-item</code> 组件上进行设置优先级高于在 <code>form</code> 上的设置。</p>'
      },
      codeFiles: ['validation-position.vue']
    },
    {
      demoId: 'novalid-tip',
      name: {
        'zh-CN': '隐藏表单项校验提示'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-message</code> 设置是否显示校错误提示信息。</p>'
      },
      codeFiles: ['novalid-tip.vue']
    },
    {
      demoId: 'validate-type',
      name: {
        'zh-CN': '校验提示的形式'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-type</code> 设置校验提示信息是以 <code>text</code> 文本显示还是以 <code>tip</code> 提示框的形式显示，也可直接配置在某一个 <code>form-item</code> 上控制某一项的校验提示形式。</p>'
      },
      codeFiles: ['validate-type.vue']
    },
    {
      demoId: 'message-type',
      name: {
        'zh-CN': '文本类型错误提示位置'
      },
      desc: {
        'zh-CN':
          '<p>当 <code>validate-type</code> 为 <code>text</code> 时，通过 <code>message-type</code> 设置文本类型错误提示位置，不设置则为 <code>absolute</code> 定位。</p>'
      },
      codeFiles: ['message-type.vue']
    },
    {
      demoId: 'validate-debounce',
      name: {
        'zh-CN': '校验防抖处理'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>validate-debounce</code> 设置校验防抖，在连续输入的情况下，会在最后一次输入结束时才开始校验。</p>'
      },
      codeFiles: ['validate-debounce.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '表单尺寸'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>size</code> 设置表单内组件尺寸。注意：表单中设置的 size 优先级高于数据录入组件（ <code>input</code> 、<code>select</code> 等）设置的 <code>size</code> 。</p>'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'slot-label',
      name: {
        'zh-CN': '标签文本插槽'
      },
      desc: {
        'zh-CN': '<p>通过 <code>label</code> 插槽，自定义标签文本的内容。</p>'
      },
      codeFiles: ['slot-label.vue']
    },
    {
      demoId: 'form-disabled',
      name: {
        'zh-CN': '表单禁用'
      },
      desc: {
        'zh-CN': '<p>通过 <code>disabled</code> 设置表单是否禁用，默认为 <code>false</code> 。</p>'
      },
      codeFiles: ['form-disabled.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '表单仅展示'
      },
      desc: {
        'zh-CN': '<p>通过 <code>display-only</code> 配置表单是否开启仅展示模式。</p>'
      },
      codeFiles: ['display-only.vue']
    },
    {
      demoId: 'form-row-col',
      name: {
        'zh-CN': '复杂布局'
      },
      desc: {
        'zh-CN': '<p>通过配合 <code>row</code> 和 <code>col</code> 组件来实现复杂布局。</p>'
      },
      codeFiles: ['form-row-col.vue']
    },
    {
      demoId: 'group-form',
      name: {
        'zh-CN': '分组表单'
      },
      desc: {
        'zh-CN': '<p>将多个表单组合在一起。</p>'
      },
      codeFiles: ['group-form.vue']
    },
    {
      demoId: 'hide-required',
      name: {
        'zh-CN': '必填项红色星号'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>hide-required-asterisk</code> 设置是否隐藏标签前的红色星号，默认为 <code>false</code> 。</p>'
      },
      codeFiles: ['hide-required.vue']
    },
    {
      demoId: 'popper-options',
      name: {
        'zh-CN': '错误提示跟随页面'
      },
      desc: {
        'zh-CN':
          '<p>通过 <code>popper-options</code> 设置<code>tip</code>类型错误提示，例如：当表单父元素是滚动元素，且页面滚动后，提示会错位，将 <code>bubbling</code> 属性设置为 <code>true</code>可解决此问题。</p>'
      },
      codeFiles: ['popper-options.vue']
    },
    {
      demoId: 'error-slot',
      name: {
        'zh-CN': '错误提示插槽'
      },
      desc: {
        'zh-CN': '<p>通过 <code>error</code> 插槽，自定义标签文本的内容。</p>'
      },
      codeFiles: ['error-slot.vue']
    },
    {
      demoId: 'extra-tip',
      name: {
        'zh-CN': '额外提示信息'
      },
      desc: {
        'zh-CN': '<p>通过 <code>extra</code> 配置额外提示信息。</p>'
      },
      codeFiles: ['extra-tip.vue']
    },
    {
      demoId: 'events',
      name: {
        'zh-CN': '表单事件'
      },
      desc: {
        'zh-CN': '<p>任一表单项被校验后触发 <code>validate</code>事件。</p>'
      },
      codeFiles: ['events.vue']
    }
  ],
  features: [
    {
      id: 'basic',
      name: '基本用法',
      support: {
        value: true
      },
      description: '在 Form 组件中，每一个表单域由一个 form-item 组件构成，表单域中可以放置各种类型的表单控件。',
      cloud: {
        value: true
      },
      apis: ['form-item'],
      demos: ['basic-usage']
    },
    {
      id: 'inline',
      name: '行内表单',
      support: {
        value: true
      },
      description: '通过 inline 设置行内表单，当垂直方向空间受限且表单较简单时，可以在一行内放置表单项。',
      cloud: {
        value: true
      },
      apis: ['inline', 'label-suffix'],
      demos: ['form-in-row']
    },
    {
      id: 'label',
      name: '标签配置',
      support: {
        value: true
      },
      description:
        '通过 label-width 设置标签宽度，label-position 设置文本标签的位置，label-align 设置必填星号文本对齐。',
      cloud: {
        value: true
      },
      apis: ['label-width', 'label-position', 'label-align'],
      demos: ['label-position', 'label-align']
    },
    {
      id: 'validation',
      name: '表单校验',
      support: {
        value: true
      },
      description: '通过 rules 设置校验规则，支持 validateField、clearValidate、resetField 等方法进行表单校验。',
      cloud: {
        value: true
      },
      apis: ['rules', 'validateField', 'clearValidate', 'resetField'],
      demos: ['form-validation', 'form-validate-field']
    },
    {
      id: 'custom-validation',
      name: '自定义校验',
      support: {
        value: true
      },
      description:
        '通过 rules 的 validator 选项进行自定义校验，支持 validate-on-rule-change 配置规则改变时是否立即触发验证。',
      cloud: {
        value: true
      },
      apis: ['validator', 'validate-on-rule-change'],
      demos: ['custom-validation-rule']
    },
    {
      id: 'validation-style',
      name: '校验样式',
      support: {
        value: true
      },
      description:
        '通过 validate-position 自定义错误提示位置，validate-type 设置校验提示形式，message-type 设置文本类型错误提示位置。',
      cloud: {
        value: true
      },
      apis: ['validate-position', 'validate-type', 'message-type'],
      demos: ['validation-position', 'validate-type', 'message-type']
    },
    {
      id: 'size',
      name: '表单尺寸',
      support: {
        value: true
      },
      description: '通过 size 设置表单内组件尺寸。',
      cloud: {
        value: true
      },
      apis: ['size'],
      demos: ['size']
    },
    {
      id: 'slots',
      name: '插槽',
      support: {
        value: true
      },
      description: '支持 label、error 等插槽自定义内容。',
      cloud: {
        value: true
      },
      apis: ['label-slot', 'error-slot'],
      demos: ['slot-label', 'error-slot']
    },
    {
      id: 'disabled',
      name: '禁用状态',
      support: {
        value: true
      },
      description: '通过 disabled 设置表单是否禁用，display-only 配置表单是否开启仅展示模式。',
      cloud: {
        value: true
      },
      apis: ['disabled', 'display-only'],
      demos: ['form-disabled', 'display-only']
    },
    {
      id: 'layout',
      name: '布局',
      support: {
        value: true
      },
      description: '通过配合 row 和 col 组件来实现复杂布局，支持分组表单。',
      cloud: {
        value: true
      },
      apis: ['row', 'col'],
      demos: ['form-row-col', 'group-form']
    },
    {
      id: 'required',
      name: '必填项',
      support: {
        value: true
      },
      description: '通过 hide-required-asterisk 设置是否隐藏标签前的红色星号。',
      cloud: {
        value: true
      },
      apis: ['hide-required-asterisk'],
      demos: ['hide-required']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 validate 等事件。',
      cloud: {
        value: true
      },
      apis: ['validate'],
      demos: ['events']
    }
  ]
}
