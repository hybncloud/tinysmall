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
        'zh-CN': '<p>详细用法参考如下示例。</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'clearable',
      name: {
        'zh-CN': '一键清空'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>clearable</code> 属性设置输入框显示清空图标按钮。</p>'
      },
      codeFiles: ['clearable.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>disabled</code> 属性设置输入框的禁用状态。</p>'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'show-password',
      name: {
        'zh-CN': '密码框'
      },
      desc: {
        'zh-CN':
          '<p>当 <code>type</code> 为 <code>password</code> 时，可通过 <code>show-password</code> 属性设置输入框显示密码显示/隐藏切换图标按钮。</p>\n'
      },
      codeFiles: ['show-password.vue']
    },
    {
      demoId: 'show-tooltip',
      name: {
        'zh-CN': '只读态悬浮提示'
      },
      desc: {
        'zh-CN': '<p>通过 <code>show-tooltip</code> 配置当文本超长时，是否显示悬浮提示。</p>\n'
      },
      codeFiles: ['show-tooltip.vue']
    },
    {
      demoId: 'size',
      name: {
        'zh-CN': '尺寸'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>size</code> 属性设置尺寸大小，可选值：<code>medium / small / mini</code>。注意：只在 <code>type!="textarea"</code> 时有效。</p>\n'
      },
      codeFiles: ['size.vue']
    },
    {
      demoId: 'methods',
      name: {
        'zh-CN': '实例方法'
      },
      desc: {
        'zh-CN': '可使用组件的实例方法。'
      },
      codeFiles: ['methods.vue']
    },
    {
      demoId: 'input-icon',
      name: {
        'zh-CN': '图标'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>prefix-icon, suffix-icon</code> 属性设置输入框头部、尾部图标。</p>\n'
      },
      codeFiles: ['input-icon.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽'
      },
      desc: {
        'zh-CN':
          '<p>配置 <code>prepend, append, prefix, suffix</code> slot，设置输入框前置、后置、头部、尾部内容，注意：只对 <code>type=text</code> 有效。</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '掩码'
      },
      desc: {
        'zh-CN':
          '<p>\n          <p>可通过 mask 属性启用掩码功能，只在 disabled 和 display-only 状态下生效。</p>\n          <p>注意：不要与 type="password" 和 show-password 一同使用</p>\n        </p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'rows',
      name: {
        'zh-CN': '文本域行数与宽'
      },
      desc: {
        'zh-CN':
          '\n          <p>可通过 <code>rows</code> 属性设置文本域显示行数。注意：只在 <code>type="textarea"</code> 时有效。</p>\n          <p>可通过 <code>cols</code> 属性设置文本域显示宽度。注意：只在 <code>type="textarea"</code> 时有效。</p>\n        '
      },
      codeFiles: ['rows.vue']
    },
    {
      demoId: 'resize',
      name: {
        'zh-CN': '可缩放文本域'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>resize</code> 属性设置文本域的缩放。可选值：<code>none / both / horizontal / vertical</code>。注意：只在 <code>type="textarea"</code> 时有效。</p>\n ' +
          '<p>可通过 <code>autosize</code> 属性设置文本域自适应内容高度。可传入对象，如<code>{ minRows: 2, maxRows: 6 }</code>。注意：只对 <code>type="textarea"</code> 有效。</p>\n' +
          '<p>可通过 <code>hover-expand</code> 属性设置文本域鼠标悬浮展开/收起，只对 <code>type=textarea</code> 有效，最好搭配 <code>autosize</code> 一起使用<p>' +
          '<p>The <code>autosize</code> property allows you to set the text field to adapt to the content height. You can transfer an object, for example, <code>{minRows: 2, maxRows: 6}</code>.</p>' +
          '<p>You can use the <code>hover-expand</code> attribute to set the text field to be expanded or collapsed by hovering the mouse. This parameter is valid only for <code>type=textarea</code>. It is recommended that you use it together with <code>autosize</code></p>'
      },
      codeFiles: ['resize.vue']
    },
    {
      demoId: 'show-word-limit',
      name: {
        'zh-CN': '输入字数统计'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>show-word-limit</code> 属性设置是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效。</p>'
      },
      codeFiles: ['show-word-limit.vue']
    },
    {
      demoId: 'counter',
      name: {
        'zh-CN': '计数器'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>counter</code> 属性设置显示输入框字符计数器。</p>\n'
      },
      codeFiles: ['counter.vue']
    },
    {
      demoId: 'validate-event',
      name: {
        'zh-CN': '表单校验'
      },
      desc: {
        'zh-CN':
          '<p>可通过 <code>validate-event</code> 属性设置输入时触发表单校验。通过 <code>trigger</code> 配置触发校验规则的方式，为 <code>change</code> 时，当输入框值改变即触发校验，为 <code>blur</code> 时则失焦后触发校验。</p>\n'
      },
      codeFiles: ['validate-event.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '内容只读'
      },
      desc: {
        'zh-CN': '<p>可通过 <code>display-only</code> 或<code>display-only-content</code> 属性设置只读态。</p>'
      },
      codeFiles: ['display-only.vue']
    },
    {
      demoId: 'method-addMemory',
      name: {
        'zh-CN': '记忆历史输入'
      },
      desc: {
        'zh-CN':
          '<p>通过组件实例方法 <code> addMemory </code> 添加历史输入数据，输入完成后，输入会被记住。通过 <code> memory-space </code> 属性配置最多可以被记录的条数。</p>'
      },
      codeFiles: ['method-addMemory.vue']
    },
    {
      demoId: 'type',
      name: {
        'zh-CN': '类型'
      },
      desc: {
        'zh-CN':
          '<p>通过对应的 <code>type</code> 属性，可以设置为对应的类型。默认为 text，可选值为 text，textarea 和其他 原生 input 的 type 值。</p>\n'
      },
      codeFiles: ['type.vue']
    },
    {
      demoId: 'native',
      name: {
        'zh-CN': '原生属性'
      },
      desc: {
        'zh-CN': `
        <p>可设置 <code>name</code>  <code>disabled</code> <code>readonly</code>等原生属性。</p>
         <div class="tip custom-block">
            <p class="custom-block-title"> 温馨提示： </p>
            <p>原生属性是透传给 <code> input </code>原生标签的，功能和使用原生标签等同。</p>
          </div>
        `
      },
      codeFiles: ['native.vue']
    },
    {
      demoId: 'display-only-popup-more',
      name: {
        'zh-CN': '文本域只读超出显示更多按钮'
      },
      desc: {
        'zh-CN':
          '在只读的基础上增加<code>popup-more</code>属性，可使文本域超出显示更多按钮，点击更多按钮可以查看详细信息。'
      },
      codeFiles: ['display-only-popup-more.vue']
    },
    {
      demoId: 'input-box-type',
      name: {
        'zh-CN': '边框模式'
      },
      desc: {
        'zh-CN': '通过 <code>input-box-type</code>属性，设置边框模式，可取值为 <code>"normal" | "underline"</code> 。'
      },
      codeFiles: ['input-box-type.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件'
      },
      desc: {
        'zh-CN': `
          输入框的事件，包括:<br>
            <code>input</code>(输入值时触发), <br>
            <code>blur</code>(失去焦点时触发), <br>
            <code>focus</code>(获取焦点时触发), <br>
            <code>change</code>(值改变时触发), <br>
            <code>clear</code>(清除按钮时触发)。`
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
      description: '通过 v-model 绑定输入值，placeholder 设置占位文本。',
      cloud: {
        value: true
      },
      apis: ['v-model', 'placeholder'],
      demos: ['basic-usage']
    },
    {
      id: 'size',
      name: '尺寸',
      support: {
        value: true
      },
      description: '通过 size 设置输入框大小，可选值：medium、small、mini。',
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
      description: '通过 disabled 设置输入框禁用状态。',
      cloud: {
        value: true
      },
      apis: ['disabled'],
      demos: ['disabled']
    },
    {
      id: 'readonly',
      name: '只读状态',
      support: {
        value: true
      },
      description: '通过 readonly 设置输入框只读状态。',
      cloud: {
        value: true
      },
      apis: ['readonly'],
      demos: ['readonly']
    },
    {
      id: 'clearable',
      name: '可清空',
      support: {
        value: true
      },
      description: '通过 clearable 设置是否可清空。',
      cloud: {
        value: true
      },
      apis: ['clearable'],
      demos: ['clearable']
    },
    {
      id: 'password',
      name: '密码框',
      support: {
        value: true
      },
      description: '通过 type="password" 设置密码输入框，show-password 显示切换密码图标。',
      cloud: {
        value: true
      },
      apis: ['type', 'show-password'],
      demos: ['password']
    },
    {
      id: 'icon',
      name: '带图标',
      support: {
        value: true
      },
      description: '通过 prefix-icon 或 suffix-icon 设置输入框前后图标。',
      cloud: {
        value: true
      },
      apis: ['prefix-icon', 'suffix-icon'],
      demos: ['icon']
    },
    {
      id: 'textarea',
      name: '文本域',
      support: {
        value: true
      },
      description: '通过 type="textarea" 设置文本域，rows 设置行数，autosize 自适应内容高度。',
      cloud: {
        value: true
      },
      apis: ['type', 'rows', 'autosize'],
      demos: ['textarea']
    },
    {
      id: 'events',
      name: '事件',
      support: {
        value: true
      },
      description: '支持 focus、blur、change、input、clear 等事件。',
      cloud: {
        value: true
      },
      apis: ['focus', 'blur', 'change', 'input', 'clear'],
      demos: ['events']
    }
  ]
}
